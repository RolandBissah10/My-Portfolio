// One email rule shared by the checklist, the input's `pattern` attribute and
// the server. Stricter than the browser's type="email" check:
// - local part: letters, digits and . _ % + -, no leading, trailing or double dot
// - domain: labels of letters, digits and hyphens (not at either end of a label)
// - must end in a dot and a top-level domain of at least 2 letters
//
// Written so it is also valid under the `v` flag browsers use for `pattern`
// (hence the escaped hyphens inside character classes).
export const EMAIL_PATTERN =
  "[A-Za-z0-9_%+\\-]+(?:\\.[A-Za-z0-9_%+\\-]+)*" +
  "@(?:[A-Za-z0-9](?:[A-Za-z0-9\\-]*[A-Za-z0-9])?\\.)+[A-Za-z]{2,}";

const EMAIL_RE = new RegExp(`^(?:${EMAIL_PATTERN})$`);

export function isValidEmail(value: string) {
  return value.length <= 254 && EMAIL_RE.test(value.trim());
}
