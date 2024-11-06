require("@4tw/cypress-drag-drop");
describe("tempelate spec", () => {
  it("actions commands", () => {
    cy.visit(
      "http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html"
    );
    cy.get("#box106").drag("#box106", { force: true });
  });
});
