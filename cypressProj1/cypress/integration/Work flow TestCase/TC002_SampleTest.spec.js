
import AddMarketPage from '../PageObjects/addMarketPage';
const addMarketDetails = require('../../fixtures/addMarketDetails.json');

context('xxx', () => {
    // before(function () {
    //     cy.SignIn();
    // })
    it.skip('Enter all mandatory fields', function () {
        let addmarket = new AddMarketPage()
        addmarket.clickAddMarket();
        addmarket.enterFranchiseId(addMarketDetails.franchiseId);
        addmarket.enterMarketName("cy_Demo_marketname");
        addmarket.enterAdditionalInformation("to demo the automation tool");
        addmarket.enterBillTo("none");
        addmarket.setMarketEntityStatus();
        addmarket.enterCountryCode("Chile");
        addmarket.enterTimezone("Hawaii");
        addmarket.enterBusinessEmailAddress("xyz@anymail.com");
        addmarket.enterAreaCodeBusinessLandlineNumber("011");
        addmarket.enterBusinessLandlineNumber("1234567890");
        addmarket.enterAlarmsEscalationEmail("alarm@anymail.com");
        addmarket.selectCupSizeSmall("9oz");
        addmarket.selectCupSizeMedium("16oz");
        addmarket.selectCupSizeLarge("20oz");
        addmarket.selectPriceCard("Dummy Price Card");
        addmarket.enterParentOrganizationName("Costa Organization");
        addmarket.selectCocaColaRegion("North America");
        addmarket.validateSaveAndNext();
        //addmarket.clickCancel();

    })

})

