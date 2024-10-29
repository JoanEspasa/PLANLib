describe("template spec", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:4000/PLANLib/");
  });

  it("fun", () => {
    cy.get(".peanuts").should("contain", "Random");
  });
});
