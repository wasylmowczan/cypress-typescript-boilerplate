import HeaderComponent from '../components/header.component';

import BasePage from './base.page';

const { commonData } = require(`../fixtures/${Cypress.env('languageMode')}/common.data`);

class HomePage extends BasePage {
  constructor() {
    super();
    this.url = `${this.baseUrl}/`;
    this.elements = {};
    this.components = {
      header: new HeaderComponent(),
    };
  }

  public testTitle() {
    cy.title().should('equal', commonData.title.home);
  }

  public testCommonElements(isHomePage: boolean = false) {
    this.testTitle();
    this.components.header.testLogoPresence(isHomePage);
  }

  public goToCareerPage() {
    this.components.header.goToCareerPage();
  }
}

export default HomePage;
