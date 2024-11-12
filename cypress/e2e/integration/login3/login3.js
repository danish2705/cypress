import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("the user opens the google homepage", () => {
  cy.visit("https://www.google.com/");
});

When("the user navigates to the image button", () => {
  cy.get("a[aria-label='Search for Images ']");
});

When("the user click on search bar", () => {
  cy.get("a[aria-label='Search for Images ']").click();
});

Then("the url of the page should be {string}", (link) => {
  cy.url().should("eq", link);
});
