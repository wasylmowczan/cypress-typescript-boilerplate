import BenefitsComponent from '../components/benefits.component';
import HeaderComponent from '../components/header.component';

import BasePage from './base.page';

class OfferPage extends BasePage {
  constructor() {
    super();

    this.elements = {
      offersCtaForm: '.offers-cta__form-wrap',
    };
    this.components = {
      benefits: new BenefitsComponent(),
      header: new HeaderComponent(),
    };
  }

  public checkOffersCtaFormVisibility() {
    cy.isVisible(this.elements.offersCtaForm);
  }

  public testCommonElements() {
    this.components.header.testLogoPresence();

    this.components.benefits.testBenefitsPresence();
    this.components.benefits.testBenefitsNumber();
  }
}

export default OfferPage;
