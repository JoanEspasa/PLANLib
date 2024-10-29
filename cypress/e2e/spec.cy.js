describe("template spec", () => {
  it("passes", () => {
    cy.visit("https://joanespasa.github.io/PLANLib/");
  });

  it("should fail", () => {
    expect(false).to.equal(true);
  });
});
