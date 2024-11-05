describe("checkBox", () => {
  it("tests checkBox", () => {
    cy.viewport(599, 584);
    cy.visit("https://demoqa.com/checkbox");
    cy.get("ol button > svg").click();
    cy.get(
      "#tree-node > ol > li > ol > li:nth-of-type(1) button > svg"
    ).click();
    cy.get(
      "li > ol > li:nth-of-type(1) > ol > li:nth-of-type(1) span.rct-checkbox path"
    ).click();
    cy.get("li > ol > li:nth-of-type(1) li:nth-of-type(2) label").click();
    cy.get(
      "li > ol > li:nth-of-type(1) li:nth-of-type(2) span.rct-checkbox path"
    ).click();
    cy.get(
      "li > ol > li:nth-of-type(1) > ol > li:nth-of-type(1) span.rct-checkbox path"
    ).click();
    cy.get("#tree-node > ol > li > span > button > svg").click();
  });
});
