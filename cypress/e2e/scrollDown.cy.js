describe("mouse drag", () => {
  it("mouse hover action", () => {
    cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html");

    cy.get("img[alt='Flag of India']").scrollIntoView();
  });
});
