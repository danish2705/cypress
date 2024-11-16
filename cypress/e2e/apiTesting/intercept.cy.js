// describe("HTTP request", () => {
//   it.only("test api with interceptor", () => {
//     cy.visit("https://jsonplaceholder.typicode.com/");
//     cy.intercept({
//       path: "/posts",
//     }).as("tests");
//     cy.get("tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)").click();
//     cy.wait("@posts").then((inter) => {
//       cy.log(JSON.stringify(inter));
//       console.log(JSON.stringify(inter));
//     });
//   });
// });

// describe("HTTP request", () => {
//   it("test api with intercept", () => {
//     cy.visit("https://jsonplaceholder.typicode.com/");
//     cy.intercept("GET", "/posts", { totalpost: 5 }).as("posts");
//     cy.get("tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)").click();
//     cy.wait("@posts");
//   });
// });

describe("HTTP request", () => {
  it("test api with intercept", () => {
    cy.visit("https://jsonplaceholder.typicode.com/");
    cy.intercept("GET", "/posts", { fixture: "createUser.json" }).as("posts");
    cy.get("tbody tr:nth-child(1) td:nth-child(1) a:nth-child(1)").click();
  });
});
