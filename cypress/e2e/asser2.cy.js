describe("Template Spec", () => {
  beforeEach(() => {
    cy.visit("https://filiphric.com/testing-links-with-cypress");
  });
  it("Link Testing Blog", () => {
    cy.contains("Blog").click();
    cy.go("back");
  });
  it("link testing workshop", () => {
    cy.contains("Workshops").click();
    cy.go("back");
  });
  it("link testing courses", () => {
    cy.contains("Courses").click();
    cy.go("back");
  });
  it("link testing community", () => {
    cy.contains("Community").click();
    cy.go("back");
  });
  it("link testing about", () => {
    cy.contains("About").click();
    cy.go("back");
  });
  cy.url();
  //   .should("include", "orangehrmlive.com")
  //   .should(
  //     "eq",
  //     "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  //   )
});
