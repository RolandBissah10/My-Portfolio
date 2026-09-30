import { createServerFn } from "@tanstack/react-start";

export const GITHUB_USERNAME = "RolandBissah10";

export type ContributionDay = {
  date: string;
  level: 0 | 1 | 2 | 3 | 4;
  count: number;
};

export type ContributionCalendar = {
  total: number;
  // weeks[w][d]: d is the weekday (0 = Sunday). A missing day is null.
  weeks: (ContributionDay | null)[][];
};

const CACHE_MS = 60 * 60 * 1000;
let cache: { at: number; data: ContributionCalendar } | null = null;

function attr(tag: string, name: string) {
  return tag.match(new RegExp(`${name}="([^"]*)"`))?.[1];
}

// GitHub has no unauthenticated API for the contribution calendar, so this
// reads the same public HTML fragment github.com renders on profile pages.
function parseCalendar(html: string): ContributionCalendar {
  const counts = new Map<string, number>();
  for (const m of html.matchAll(/<tool-tip[^>]*for="([^"]+)"[^>]*>([^<]*)</g)) {
    const n = m[2].match(/^(\d+) contributions?/);
    counts.set(m[1], n ? Number(n[1]) : 0);
  }

  const grid: (ContributionDay | null)[][] = [];
  for (const [tag] of html.matchAll(
    /<td[^>]*ContributionCalendar-day[^>]*>/g,
  )) {
    const id = attr(tag, "id");
    const date = attr(tag, "data-date");
    const level = Number(attr(tag, "data-level"));
    const pos = id?.match(/-(\d+)-(\d+)$/);
    if (!id || !date || !pos || !(level >= 0 && level <= 4)) continue;
    const day = Number(pos[1]);
    const week = Number(pos[2]);
    grid[week] ??= Array(7).fill(null);
    grid[week][day] = {
      date,
      level: level as ContributionDay["level"],
      count: counts.get(id) ?? 0,
    };
  }

  const weeks = Array.from(grid, (w) => w ?? Array(7).fill(null));
  if (weeks.length === 0) {
    throw new Error("Could not read the GitHub contribution calendar.");
  }
  const total = weeks.flat().reduce((sum, d) => sum + (d?.count ?? 0), 0);
  return { total, weeks };
}

export const getContributions = createServerFn({ method: "GET" }).handler(
  async () => {
    if (cache && Date.now() - cache.at < CACHE_MS) return cache.data;

    const res = await fetch(
      `https://github.com/users/${GITHUB_USERNAME}/contributions`,
    );
    if (!res.ok) {
      throw new Error(`GitHub responded with ${res.status}`);
    }
    const data = parseCalendar(await res.text());
    cache = { at: Date.now(), data };
    return data;
  },
);

// shared by the graph and the preloader so both hit the same cache entry
export const contributionsQuery = {
  queryKey: ["github-contributions"],
  queryFn: () => getContributions(),
  staleTime: 60 * 60 * 1000,
  retry: 1,
};
