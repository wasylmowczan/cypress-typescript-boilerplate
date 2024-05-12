import BaseComponent from './base.component';

class LanguageModalComponent extends BaseComponent {
  constructor() {
    super();
    this.elements = {
      languageModal: '#language-modal',
      englishButton: '.language-modal__buttons > .is-secondary',
    };
  }

  public selectEnglish() {
    cy.isVisible(this.elements.languageModal);
    cy.get(this.elements.englishButton).should('be.visible').click();
  }
}

export default LanguageModalComponent;
