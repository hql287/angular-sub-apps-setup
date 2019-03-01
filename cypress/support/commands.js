// Main App
Cypress.Commands.add('getMainTitle', () => cy.get('h3.app-title'));
Cypress.Commands.add('getMainPoints', () => cy.get('span').invoke('text'));
Cypress.Commands.add('getMainPlusBtn', () => cy.get('button.btn').first());
Cypress.Commands.add('getMainResetBtn', () => cy.get('button.btn').last());

// Switch App buttons
Cypress.Commands.add('getSwitchApp1Btn', () => cy.get('a.app-nav').first());
Cypress.Commands.add('getSwitchApp2Btn', () => cy.get('a.app-nav').last());

// Sub App
Cypress.Commands.add('getSubAppTitle', () => cy.get('h1.app-root').invoke('text'));
Cypress.Commands.add('getSubAppNavView1Btn', () => cy.get('a.nav').first());
Cypress.Commands.add('getSubAppNavView2Btn', () => cy.get('a.nav').last());

// Sub App Views
Cypress.Commands.add('getSubAppViewTitle', () => cy.get('h3.subapp-view').invoke('text'));
