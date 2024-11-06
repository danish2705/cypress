// describe("HTTP Request", () => {
//   it("Get Call", () => {
//     cy.request("GET", "https://jsonplaceholder.typicode.com/posts/1")
//       .its("status")
//       .should("equal", 200);
//   });
//   it("POST Call", () => {
//     cy.request({
//       method: "POST",
//       url: "https://jsonplaceholder.typicode.come/posts/1",
//       body: {
//         title: "post call",
//         body: "call",
//         userID: 1,
//       },
//     })
//       .its("status")
//       .should("equal", 201);
//   });
// });

describe("http", () => {
  it("post", () => {
    cy.request({
      method: "POST",
      url: "https://jsonplaceholder.typicode.com/posts",
      body: {
        title: "post call",
        body: "call",
        userID: 1,
      },
    })
      .its("status")
      .should("equal", 201);
  });
});
