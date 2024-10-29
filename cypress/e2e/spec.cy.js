describe("template spec", () => {
  beforeEach(()=>{
    cy.visit('https://joanespasa.github.io/PLANLib/');
  });

  it("should fail", () => {
    cy.get('.peanuts').should('contain','Random')
  });
});
