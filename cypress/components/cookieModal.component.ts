import BaseComponent from './base.component';

class CookieModalComponent extends BaseComponent {
  constructor() {
    super();
    this.elements = {
      cookieModal: '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll',
    };
  }

  public allowAllCookies() {
    cy.get(this.elements.cookieModal).should('be.visible').click();
  }
}

export default CookieModalComponent;
