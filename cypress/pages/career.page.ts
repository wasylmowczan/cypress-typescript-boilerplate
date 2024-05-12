import CookieModalComponent from '../components/cookieModal.component';
import BenefitsComponent from '../components/benefits.component';
import HeaderComponent from '../components/header.component';
import LanguageModalComponent from '../components/languageModal.component';
import BasePage from './base.page';

const { commonData } = require(`../fixtures/${Cypress.env('languageMode')}/common.data`);

class CareerPage extends BasePage {
  constructor() {
    super();
    this.url = `${this.baseUrl}/${commonData.path.career}`;
    this.elements = {
      activeTab: '.career__tab.is-active',
      openRolesButton: '.text-wrapper .button',
      offerSection: '#job-offers',
    };
    this.components = {
      benefits: new BenefitsComponent(),
      header: new HeaderComponent(),
      languageModal: new LanguageModalComponent(),
      cookieModal: new CookieModalComponent(),
    };
  }

  public testTitle() {
    cy.url().then(() => {
      cy.title().should('equal', commonData.title.career);
    });
  }

  public testCommonElements() {
    this.testTitle();

    this.components.header.testLogoPresence();

    this.components.benefits.testBenefitsPresence();
    this.components.benefits.testBenefitsNumber();
  }

  public clickOnOpenRolesButton() {
    cy.get(this.elements.openRolesButton).click();
  }

  public closeLanguageModal() {
    this.components.languageModal.selectEnglish();
  }

  public closeCookiePopup() {
    this.components.cookieModal.allowAllCookies();
  }
}

export default CareerPage;
