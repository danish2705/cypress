import login from "./../pageObject/loginPage";
describe("tempelate spec", () => [
  it("POM TC login", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    const ln = new login();
    ln.setUserName("Admin");
    ln.setPassword("admin123");
    ln.clickSubmit();
    ln.verifyLogin();
  }),
]);
