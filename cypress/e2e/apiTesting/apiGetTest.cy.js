import { method } from "lodash";

describe("HTTP request", () => {
  let accessToken =
    "Bearer f53d40996ec5d5ec1384e85d30575a8dc47941f7cd638580b0247b9b611f038e";
  it("Get Call", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/users",
      headers: {
        authorization: accessToken,
      },
    }).then((res) => {
      cy.log(JSON.stringify(res));
      expect(res.status).to.eq(200);
    });
  });

  it("Get request for id", () => {
    cy.request({
      method: "GET",
      url: "https://gorest.co.in/public/v2/users/7522240",
      headers: {
        authorization: accessToken,
      },
    }).then((res) => {
      cy.log(JSON.stringify(res));
      expect(res.status).to.eq(200);
    });
  });
});
