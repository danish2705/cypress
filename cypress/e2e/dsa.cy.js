it("asd", () => {
  cy.visit(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  //fill in the login form and submit
  cy.get("input[placeholder='Username']").type("Admin");
  cy.get("input[placeholder='Password']").type("admin123");
  cy.get("button[type='submit']").click();
});
it("logo", () => {
  cy.xpath("//img[@alt='client brand banner']").click();
  cy.url("eq", "https://www.orangehrm.com/");
});
