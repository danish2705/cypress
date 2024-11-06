require("cypress-xpath");
describe("tempelate spec", () => {
  it("scroll down", () => {
    // cy.visit("https://www.google.com/");
    // cy.xpath("//a[normalize-space()='Images']").click();
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.xpath("//input[@placeholder='Username']").type("Admin");
    cy.xpath(" //input[@placeholder='Password']").type("admin123");
    cy.xpath("//button[normalize-space()='Login']").click();
  });
});
