describe("mouse drag", () => {
  it("mouse hover action", () => {
    // cy.visit("https://demo.opencart.com/");
    // cy.get(
    //   "body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)"
    // );
    // cy.get(".nav > :nth-child(1) > .dropdown-toggle")
    //   .trigger("mouserover")
    //   .click();
    cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html");
    // cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu");
    // cy.get(
    //   ".context-menu-item.context-menu-icon.context-menu-icon-copy.context-menu-visible"
    // ).should("be.visible");
    //

    cy.get("img[alt='Flag of India']").scrollIntoView();
  });
});
