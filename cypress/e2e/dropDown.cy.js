describe("drop down test suite", () => {
  it("select Monaco", () => {
    cy.visit("https://register.rediff.com/register/register.php");
    cy.get('select[id="country"]')
      .select("140")
      .should("have.value", 140)
      .select("3")
      .should("have.value", 3);
  });
});
