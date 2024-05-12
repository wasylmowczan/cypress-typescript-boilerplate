import { CommonData } from '../ts/types/commonData.type';
import { Elements } from '../ts/types/elements.type';

const { commonData } = require(`../fixtures/${Cypress.env('languageMode')}/common.data`);
class BaseComponent {
  public commonData: CommonData;

  public elements: Elements;

  constructor() {
    this.commonData = commonData;
  }
}

export default BaseComponent;
