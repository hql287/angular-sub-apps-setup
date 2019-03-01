describe('Main application homepage', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('should display welcome message', () => {
    cy.getMainTitle().should('have.text', 'Main App Content');
  });

  it('should start with 1 point', () => {
    cy.getMainPoints().should('eq', '1');
  });

  it('should increase 1 point by clicking the plus1  button', () => {
    cy.getMainPlusBtn().click().click().click().click();
    cy.getMainPoints().should('not.eq', '4');
    cy.getMainPoints().should('eq', '5');
    cy.getMainPoints().should('not.eq', '6');
  });

  it('should reset the point by clicking the reset button', () => {
    cy.getMainPlusBtn().click().click().click();
    cy.getMainPoints().should('eq', '4');
    cy.getMainResetBtn().click();
    cy.getMainPoints().should('eq', '0');
  });
});
