require("cypress-file-upload");
describe("cypress file upload", () => {
  before(function () {
    cy.visit("https://the-internet.herokuapp.com/upload");
  });
  it("example to demostrate file upload", () => {
    cy.get("input[type='file']").attachFile("screenshot.png");
    cy.get("#file-submit").click();
    cy.get("#uploaded-files").contains("screenshot.png");
  });
});
