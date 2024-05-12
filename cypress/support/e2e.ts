import { ViewPortMode } from '../enum/appModes';
import './commands.support';

before(() => {
  if (Cypress.env('viewPortMode') === ViewPortMode.Mobile) cy.viewport('iphone-xr');
  else cy.viewport('macbook-13');

  cy.reload();
});
