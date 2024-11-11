require("cypress-xpath");
describe("test for specific links with login", () => {
  beforeEach(() => {
    //visit login page
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    //fill in the login form and submit
    cy.get("input[placeholder='Username']").type("Admin");
    cy.get("input[placeholder='Password']").type("admin123");
    cy.get("button[type='submit']").click();
  });
  //check search box is working or not
  it("search box", () => {
    cy.get("input[placeholder='Search']").type("Admin");
  });
  //check admin option is working or not
  it("admin", () => {
    cy.xpath("//span[normalize-space()='Admin']").click();
    cy.url(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers"
    );
  });
  //check PIM option is working or not
  it("PIM", () => {
    cy.get(".oxd-main-menu-item.active").click();
    cy.url(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList"
    );
  });
  //check leave option is working or not
  it("leave", () => {
    cy.get(".oxd-main-menu-item.active").click();
    cy.url(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList"
    );
  });
  //check time option is working or not
  it("time", () => {
    cy.xpath("//span[normalize-space()='Time']").click();
    cy.url(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/time/viewEmployeeTimesheet"
    );
  });
  //check recruitment option is working or not
  it("recruitment", () => {
    cy.xpath("//span[normalize-space()='Recruitment']").click();
    cy.url(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates"
    );
  });
  //check my info option is working or not
  it("My info", () => {
    cy.get(".oxd-main-menu-search > .oxd-icon-button > .oxd-icon").click();
    cy.url(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/7"
    );
  });
  //performance option testing
  it("performance", () => {
    cy.xpath("//span[normalize-space()='Performance']").click();
    cy.url(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchEvaluatePerformanceReview"
    );
  });
  //testing dashboard option
  it("dashboard", () => {
    cy.xpath(
      "//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][normalize-space()='Dashboard']"
    ).click();
    cy.url(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"
    );
  });
  //testing directory option
  it("directory", () => {
    cy.xpath("//span[normalize-space()='Directory']");
    cy.url(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory"
    );
  });
  //testing maintenance option
  it("maintenance", () => {
    cy.xpath("//span[normalize-space()='Maintenance']").click();
    cy.url(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/purgeEmployee"
    );
  });
  //testing claim option
  it("claim", () => {
    cy.xpath("//span[normalize-space()='Claim']").click();
    cy.url(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/claim/viewAssignClaim"
    );
  });
  // testing buzz option
  it("buzz", () => {
    cy.xpath("//span[normalize-space()='Buzz']").click();
    cy.url(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/buzz/viewBuzz"
    );
  });
  //testing user button to show about options
  it("user button/about", () => {
    cy.xpath("//p[@class='oxd-userdropdown-name']").click();
    cy.xpath("//p[@class='oxd-userdropdown-name']").should("be.visible");
  });
  //test userbutton to show support option
  it("user button/ support", () => {
    cy.xpath("//p[@class='oxd-userdropdown-name']").click();
    cy.xpath("//a[normalize-space()='Support']").should("be.visible");
  });
  //test userbutton to show change password option
  it("user button/ changePassword", () => {
    cy.xpath("//p[@class='oxd-userdropdown-name']").click();
    cy.xpath("//a[normalize-space()='Change Password']").should("be.visible");
  });
  //test userbutton to show logout option
  it("user button/ logout", () => {
    cy.xpath("//p[@class='oxd-userdropdown-name']").click();
    cy.xpath("//a[normalize-space()='Logout']").should("be.visible");
  });
  //test support option link
  it("support", () => {
    cy.xpath("//p[@class='oxd-userdropdown-name']").click();
    cy.xpath("//a[normalize-space()='Support']").click();
    cy.url(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/help/support"
    );
  });
  //test changepassowrd link
  it("changePassword", () => {
    cy.xpath("//p[@class='oxd-userdropdown-name']").click();
    cy.xpath("//a[normalize-space()='Change Password']").click();
    cy.url(
      "eq",
      "https://opensource-demo.orangehrmlive.com/web/index.php/pim/updatePassword"
    );
  });
  //test logo option is working
  it("logo", () => {
    cy.xpath("//img[@alt='client brand banner']").click();
    cy.url("eq", "https://www.orangehrm.com/");
  });
});
