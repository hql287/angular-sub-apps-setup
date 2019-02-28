Cypress.Commands.add('getTitle', () => cy.get('h3.app-title'));
Cypress.Commands.add('getPoints', () => cy.get('span').invoke('text'));
Cypress.Commands.add('getPlusBtn', () => cy.get('button').first());
Cypress.Commands.add('getResetBtn', () => cy.get('button').last());
