const SAMPLE = `@Test
void createTodo_returns201() {
    given()
        .contentType(ContentType.JSON)
        .body(Map.of("title", "Add tests"))
    .when()
        .post("/api/todos")
    .then()
        .statusCode(201)
        .body("title", equalTo("Add tests"));
}`;

export function HeroVisual() {
  return (
    <figure className="overflow-hidden rounded-lg border border-border bg-[oklch(0.2_0.008_250)] text-[oklch(0.9_0.005_85)]">
      <div className="border-b border-white/10 px-4 py-2 font-mono text-xs text-white/60">
        ExampleApiTest.java
      </div>
      <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed sm:text-[13px]">
        {SAMPLE}
      </pre>
      <figcaption className="border-t border-white/10 px-4 py-2 text-xs text-white/60">
        Example of a RestAssured API test.
      </figcaption>
    </figure>
  );
}
