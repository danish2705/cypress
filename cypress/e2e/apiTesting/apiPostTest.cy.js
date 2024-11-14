import { method } from "lodash";

describe("HTTP request", () => {
  it("post call", () => {
    cy.request({
      method: "POST",
      url: "https://gorest.co.in/public/v2/users",
      headers: {
        authorization:
          "Bearer f53d40996ec5d5ec1384e85d30575a8dc47941f7cd638580b0247b9b611f038e",
      },
      body: {
        name: "hex",
        email: "hex@gmail.com",
        gender: "male",
        status: "active",
      },
    }).then((res) => {
      cy.log(JSON.stringify(res));
      expect(res.status).to.eq(201);
      expect(res.body).has.property("email", "hex@gmail.com");
      expect(res.body).has.property("status", "active");
    });
  });
});
