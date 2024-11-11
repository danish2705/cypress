require("cypress-xpath");
require("cypress-real-events");
describe("demo testing", () => {
  it("hover testing", () => {
    cy.visit("https://practice.expandtesting.com/");
    cy.xpath("//a[normalize-space()='Hovers']").click();
    //user1
    cy.xpath("//div[@class='container']//div[1]//img[1]").realHover();
    cy.contains("name: user1").should("be.visible");
    cy.get("a[href='/users/1']")
      .should("be.visible")
      .and("have.attr", "href", "/users/1");
    //user2
    cy.xpath("//div[@class='page-layout']//div[2]//img[1]").realHover();
    cy.contains("name: user2").should("be.visible");
    cy.get("a[href='/users/2']")
      .should("be.visible")
      .and("have.attr", "href", "/users/2");
    //user3
    cy.xpath("//div[3]//img[1]").realHover();
    cy.contains("name: user3").should("be.visible");
    cy.get("a[href='/users/3']")
      .should("be.visible")
      .and("have.attr", "href", "/users/3");
  });
});
