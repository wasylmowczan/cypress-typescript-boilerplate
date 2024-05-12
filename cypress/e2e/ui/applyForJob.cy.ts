import CareerPage from '../../pages/career.page';
import HomePage from '../../pages/home.page';
import OfferPage from '../../pages/offer.page';

describe('As a developer I want to apply for a job in TSH.io', () => {
  const careerPage = new CareerPage();
  const homePage = new HomePage();
  const offerPage = new OfferPage();

  beforeEach(() => {
    cy.session(
      'career',
      () => {
        careerPage.open();
        careerPage.closeCookiePopup();
        careerPage.testCommonElements();
      },
      {
        validate() {
          cy.request(careerPage.url).its('status').should('eq', 200);
        },
      }
    );
  });

  it('Visit Home page', () => {
    const isHomePage: boolean = true;
    homePage.open();
    homePage.testCommonElements(isHomePage);
  });

  it('Open offers view', () => {
    careerPage.open();
    careerPage.clickOnOpenRolesButton();
    offerPage.checkOffersCtaFormVisibility();
  });
});
