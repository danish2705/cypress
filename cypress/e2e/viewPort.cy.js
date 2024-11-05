describe("template spec", () => {
  it("action commands", () => {
    cy.vist(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.viewport("macbook-15");
    cy.wait(2000);
    cy.viewport("macbook-13");
    cy.wait(1000);
  });
});
