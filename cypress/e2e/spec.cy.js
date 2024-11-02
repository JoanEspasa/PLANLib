describe("homepage tests spec", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/PLANLib/");
  });

  it("tests that the initial theme is dark", () => {
    cy.get("html").should("have.attr", "data-bs-theme", "dark");
  });

  it("should switch the theme from dark to light when pressed", () => {
    cy.get("#darkModeSwitch").click();
    cy.get("html").should("have.attr", "data-bs-theme", "light");
  });

  it("should switch the theme from dark to light and back to dark", () => {
    cy.get("#darkModeSwitch").click();
    cy.get("html").should("have.attr", "data-bs-theme", "light");
    cy.get("#darkModeSwitch").click();
    cy.get("html").should("have.attr", "data-bs-theme", "dark");
  });
});
