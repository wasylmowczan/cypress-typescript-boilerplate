import { Elements } from '../ts/types/elements.type';
import { CommonData } from '../ts/types/commonData.type';
import { Components } from '../ts/types/components.type';

class BasePage {
  public commonData: CommonData;

  public elements: Elements;

  public components: Components;

  public url: string;

  public baseUrl: string;

  constructor() {
    this.baseUrl = Cypress.env('baseUrl');
  }

  public open() {
    cy.visit(this.url);
  }
}

export default BasePage;
