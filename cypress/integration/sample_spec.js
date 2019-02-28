describe('Main application homepage', () => {

  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should display welcome message', () => {
    cy.getTitle().should('have.text', 'Main App Content');
  });

  it('should start with 1 point', () => {
    cy.getPoints().should('eq', '1');
  });

  it('should increase 1 point by clicking the plus1  button', () => {
    cy.getPlusBtn().click().click().click().click();
    cy.getPoints().should('not.eq', '4');
    cy.getPoints().should('eq', '5');
    cy.getPoints().should('not.eq', '6');
  });

  it('should reset the point by clicking the reset button', () => {
    cy.getPlusBtn().click().click().click();
    cy.getPoints().should('eq', '4');
    cy.getResetBtn().click();
    cy.getPoints().should('eq', '0');
  });
});
