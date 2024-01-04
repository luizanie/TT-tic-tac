describe('check tic-tac-toe', () => {
  it('should declare X as the winner', () => {

    cy.visit('http://localhost:3000/');

    cy.get('.square').eq(0).click(); 
    cy.get('.square').eq(3).click();
    cy.get('.square').eq(1).click();
    cy.get('.square').eq(4).click();
    cy.get('.square').eq(2).click();

    cy.contains('Winner: X').should('exist');
  });

  it('should declare 0 as the winner', () => {

    cy.visit('http://localhost:3000/');

    cy.get('.square').eq(0).click(); 
    cy.get('.square').eq(3).click(); 
    cy.get('.square').eq(1).click(); 
    cy.get('.square').eq(4).click();
    cy.get('.square').eq(7).click();
    cy.get('.square').eq(5).click();

    cy.contains('Winner: O').should('exist');
  });
});