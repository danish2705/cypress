require("cypress-xpath");
describe("sol5", () => {
  it("regression", () => {
    //login page
    cy.visit("https://www.saucedemo.com");
    cy.xpath("//input[@id='user-name']").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("#login-button").click();
    //adding item to checkout
    cy.get("#add-to-cart-sauce-labs-backpack").click();
    cy.get(".shopping_cart_link").click();
    cy.get("#checkout").click();
    //checkout information
    cy.get("#first-name").type("test");
    cy.get("#last-name").type("code");
    cy.get("#postal-code").type("123");
    cy.get("#continue").click();
    //bill
    cy.get("#finish").click();
    //back to Home
    cy.get("#back-to-products").click();
  });
});
