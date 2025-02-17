import ViewMarketPage from '../PageObjects/addLevel2EntityPage';
import MarketEntityManagementPage from '../PageObjects/marketEntityManagementPage';
const viewMarketDetails = require('../../fixtures/viewMarketDetails.json');
const addMarketDetails = require('../../fixtures/addMarketDetails.json');

describe('Edit the Market vendor', function () {
    before(function () {
        cy.SignIn();
    })
    it('edit market vendor values', function () {
        let viewmarket = new ViewMarketPage();
        let memp = new MarketEntityManagementPage();
        memp.enterSearch(addMarketDetails.marketName);
        memp.clickEditMarket();
        viewmarket.clickMarketLevelSetup();
        // viewmarket.setLevel2EntityReference(viewMarketDetails.level2EntityReference);
        // viewmarket.setLevel2Child(viewMarketDetails.level2Child);
        // viewmarket.setLevel3EntityReference(viewMarketDetails.level3EntityReference);
        // viewmarket.setLevel3Child(viewMarketDetails.level3Child);
        // viewmarket.setPartnerReference(viewMarketDetails.partnerReference);
        // viewmarket.setLevel5EntityReference(viewMarketDetails.level5EntityReference);
        // viewmarket.setLevel5Child(viewMarketDetails.level5Child);
        // viewmarket.setLevel6EntityReference(viewMarketDetails.level6EntityReference);
        // viewmarket.setLevel6Child(viewMarketDetails.level6Child);
        // viewmarket.setSiteReference(viewMarketDetails.siteReference);
        // viewmarket.setMachineReference(viewMarketDetails.machineReference);
        // viewmarket.clickSaveMarketLevelSetup();
        // viewmarket.clickYesUpdateConfirmation();
        viewmarket.clickCancelEditMarket();

    })
})
