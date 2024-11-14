const user = require("../../fixtures/createUser.json");

describe("HTTP request", () => {
  let randomText = "";
  let testEmail = "";
  it("put call", () => {
    var pattern = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < 10; i++) {
      randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
    }
    testEmail = randomText + "@gmail.com";
    cy.request({
      method: "PUT",
      url: "https://gorest.co.in/public/v2/users/7523649",
      headers: {
        authorization:
          "Bearer f53d40996ec5d5ec1384e85d30575a8dc47941f7cd638580b0247b9b611f038e",
      },
      body: {
        name: user.name,
        email: testEmail,
        gender: user.gender,
        status: user.status,
      },
    }).then((res) => {
      cy.log(JSON.stringify(res));
      expect(res.status).to.eq(200);
      expect(res.body).has.property("email", `${testEmail}`);
      expect(res.body).has.property("status", user.status);
    });
  });
});
