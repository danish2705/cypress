// describe("Template Spec", () => {
//   it("check blog", () => {
//     cy.visit("https://filiphric.com/blog");
//     cy.url()
//       .should("include", "blog")
//       .should("eq", "https://filiphric.com/blog");
//   });
//   it("check workshop", () => {
//     cy.visit("https://filiphric.com/workshops");
//     cy.url()
//       .should("include", "workshops")
//       .should("eq", "https://filiphric.com/workshops");
//   });
//   it("check courses", () => {
//     cy.visit("https://filiphric.com/courses");
//     cy.url()
//       .should("include", "courses")
//       .should("eq", "https://filiphric.com/courses");
//   });
//   it("check community", () => {
//     cy.visit("https://discord.com/invite/3MdvPfT");
//     cy.url()
//       .should("include", "3MdvPfT")
//       .should("eq", "https://discord.com/invite/3MdvPfT");
//   });
//   it("check about", () => {
//     cy.visit("https://filiphric.com/about");
//     cy.url()
//       .should("include", "about")
//       .should("eq", "https://filiphric.com/about");
//   });
// });
describe("template spec", () => {
  beforeEach(() => {
    cy.visit("https://filiphric.com/testing-links-with-cypress");
  });

  it("Link Testing - Courses", () => {
    cy.contains("Courses").should("be.visible").click();
    cy.wait(1000);
    cy.url().should("eq", "https://filiphric.com/courses");
    cy.go("back");
    cy.wait(500);
  });

  it("Link Testing - Blog", () => {
    cy.contains("Blog").should("be.visible").click();
    cy.wait(1000);
    cy.url().should("eq", "https://filiphric.com/blog");
    cy.go("back");
    cy.wait(500);
  });

  it("Link Testing - Workshops", () => {
    cy.contains("Workshops").should("be.visible").click();
    cy.wait(1000);
    cy.url().should("eq", "https://filiphric.com/workshops");
    cy.go("back");
    cy.wait(500);
  });

  it("Link Testing - Community", () => {
    cy.contains("Community").should("be.visible").click();
    cy.wait(1000);
    cy.url().should("eq", "https://discord.com/invite/3MdvPfT");
    cy.go("back");
    cy.wait(500);
  });

  it("Link Testing - About", () => {
    cy.contains("About").should("be.visible").click();
    cy.wait(1000);
    cy.url().should("eq", "https://filiphric.com/about");
    cy.go("back");
    cy.wait(500);
  });
});
