describe('App2 View 1', () => {

  beforeEach(() => {
    cy.visit('/app2/one');
  });

  // Current Page
  it(`Should display page title as 'App2 View 1'`, () => {
    cy.getSubAppViewTitle().should('eq', 'App2 View 1');
  });

  // Navigate between Pages
  it(`Should go to App2 View 2 when click to 'View Two' button`, () => {
    cy.getSubAppNavView2Btn().click();
    cy.getSubAppViewTitle().should('eq', 'App2 View 2');
  });

  it(`Should go back to App2 View 1 when click to 'View One' button`, () => {
    cy.getSubAppNavView2Btn().click();
    cy.getSubAppNavView1Btn().click();
    cy.getSubAppViewTitle().should('eq', 'App2 View 1');
  });

  // Navigate between Apps
  it(`Should go to App1 View 1 when click to 'App 1' button`, () => {
    cy.getSwitchApp1Btn().click();
    cy.url().should('include', '/app1/one')
    cy.url().should('include', 'http://localhost:8080/app1/one')
  });

  it(`Should go to back to App2 View 1 when click to 'App 2' button`, () => {
    cy.getSwitchApp1Btn().click();
    cy.url().should('include', '/app1/one')
    cy.url().should('eq', 'http://localhost:8080/app1/one')
    cy.getSwitchApp2Btn().click();
    cy.url().should('include', '/app2/one')
    cy.url().should('eq', 'http://localhost:8080/app2/one')
  });
});
