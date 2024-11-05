describe("url", () => {
  it("check aeertion", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    // cy.url()
    //   .should("include", "orangehrmlive.com")
    //   .should(
    //     "eq",
    //     "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    //   )
    //   .should("contain", "orangehrm");
    // cy.url()
    //   .should("include", "orangehrmlive.com")
    //   .and(
    //     "eq",
    //     "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    //   )
    //   .and("contain", "orangehrm")
    //   .and("not.contain", "orangehrm1")
    //   .and("not.include", "orangehrmlive1.com")
    //   .and(
    //     "not.eq",
    //     "https://opensource-demo1.orangehrmlive.com/web/index.php/auth/login"
    //   );
    // cy.title()
    //   .should("include", "Orange")
    //   .and("eq", "OrangeHRM")
    //   .and("contain", "HRM");

    // cy.get(".orangehrm-login-branding > img").should("be.visible").and("exist");
    // cy.get("input[placeholder='Username']").type("Admin");
    // cy.get("input[placeholder='Password']").type("admin123");
    // cy.get("button[type='submit']").click();
    // let expName = "xyz";
    // cy.get(".oxd-userdropdown-name").then((x) => {
    //   let actName = x.text();
    //   expect(actName).to.equal(expName);
    //   expect(actName).to.not.equal(expName);
    //   assert.equal(actName, expName);
    // });
    // cy.visit(
    //   "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    // );
    // cy.get("input[placeholder='Username']").type("Admin1");
    // cy.get("input[placeholder='Username']").should("have.value", "Admin1");
    // cy.get("input[placeholder='Username']")
    //   .clear()
    //   .type("Admin")
    //   .should("have.value", "Admin");
    // cy.visit(
    //   "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    // );
    // cy.get(".orangehrm-login-form").within(() => {
    //   cy.get("input[placeholder='Username']").should(
    //     "have.attr",
    //     "placeholder",
    //     "Username"
    //   );
    //   cy.get("input[placeholder='Password']").should(
    //     "have.attr",
    //     "placeholder",
    //     "Password"
    //   );
    // });
    beforeEach(() => {});
    cy.vist("https://filiphric.com/testing-links-with-cypress");
    cy.contains("blog").click();
    cy.go("back");
  });
});
