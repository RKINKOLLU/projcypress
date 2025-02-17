import AddMarketPage from '../PageObjects/addMarketPage';
import MarketEntityManagementPage from '../PageObjects/marketEntityManagementPage';
const addMarketDetails= require('../../fixtures/addMarketDetails.json');
const editMarketDetails= require('../../fixtures/editMarketDetails.json');
let addMarket = new AddMarketPage();
let memp = new MarketEntityManagementPage();
const uuid = () => Cypress._.random(0, 1e6);
const id = uuid();
const marketValue = addMarketDetails.marketName//+id+'-Demo';
const billToValue = addMarketDetails.billTo//+id;

Given('I login as System Admin',()=>{
    cy.SignIn();
})

When('I have entered all details in the Market and Market level setup pages', () => {
    addMarket.clickAddMarket();
    addMarket.enterFranchiseId(addMarketDetails.franchiseId);
    addMarket.enterMarketName(marketValue);
    addMarket.enterAdditionalInformation(addMarketDetails.additionalInformation);
    addMarket.enterBillTo(billToValue);
    addMarket.setMarketEntityStatus(addMarketDetails.marketEntityStatus);
    addMarket.enterCountryCode(addMarketDetails.countryCode);
    addMarket.enterTimezone(addMarketDetails.timeZone);
    addMarket.enterBusinessEmailAddress(addMarketDetails.businessEmailAddress);
    addMarket.enterAreaCodeBusinessLandlineNumber(addMarketDetails.areaCodeBusinessLandlineNumber);
    addMarket.enterBusinessLandlineNumber(addMarketDetails.businessLandlineNumber);
    addMarket.enterAlarmsEscalationEmail(addMarketDetails.alarmsEscalationEmail);
    addMarket.selectCupSizeSmall(addMarketDetails.cupSizeSmall);
    addMarket.selectCupSizeMedium(addMarketDetails.cupSizeMedium);
    addMarket.selectCupSizeLarge(addMarketDetails.cupSizeLarge);
    addMarket.selectPriceCard(addMarketDetails.priceCard);
    addMarket.enterParentOrganizationName(addMarketDetails.parentOrganizationName);
    addMarket.selectCocaColaRegion(addMarketDetails.cocaColaRegion);
    addMarket.clickSaveAndNext();
    addMarket.validateMarketSuccessfulDialog();
    addMarket.setLevel2EntityReference(addMarketDetails.level2EntityReference);
    addMarket.setLevel2Child(addMarketDetails.level2Child);
    addMarket.setLevel3EntityReference(addMarketDetails.level3EntityReference);
    addMarket.setLevel3Child(addMarketDetails.level3Child);
    addMarket.setPartnerReference(addMarketDetails.partnerReference);
    addMarket.setLevel5EntityReference(addMarketDetails.level5EntityReference);
    addMarket.setLevel5Child(addMarketDetails.level5Child);
    addMarket.setLevel6EntityReference(addMarketDetails.level6EntityReference);
    addMarket.setLevel6Child(addMarketDetails.level6Child);
    addMarket.setSiteReference(addMarketDetails.siteReference);
    addMarket.setMachineReference(addMarketDetails.machineReference);
});

Then('I click save to confirm the updates', () => {
	addMarket.clickSaveMarketLevelSetup();
    addMarket.clickYesUpdateConfirmation();
});

When('I select the same market entity to view the fields', () => {
    memp.enterSearch(marketValue);
    memp.clickViewMarket();
    //
    //
});

Then('I verify the details entered are correct in Market page', () => {
	cy.get('#TextBox-marketFranchiseId').should('have.text',addMarketDetails.franchiseId);
    cy.get('#TextBox-marketName').should('have.text',addMarketDetails.marketName);
    cy.get('#TextBox-marketDescription').contains(addMarketDetails.additionalInformation);
    cy.get('#TextBox-marketBillTo').contains(addMarketDetails.billTo);
    //cy.get('.mat-slide-toggle-bar').should('be.checked')
    cy.get('#S-Dropdown-marketCountryCode').contains(addMarketDetails.countryCode);
    cy.get('#S-Dropdown-marketTimeZone').contains(addMarketDetails.timeZone);
    cy.get('#TextBox-marketContactEmail').contains(addMarketDetails.businessEmailAddress);
    cy.get('#TextBox-marketContactPhoneCountry').contains(addMarketDetails.areaCodeBusinessLandlineNumber);
    cy.get('#TextBox-marketContactPhone').contains(addMarketDetails.businessLandlineNumber);
    cy.get('#TextBox-marketAlarmEscalationEmail').contains(addMarketDetails.alarmsEscalationEmail);
    cy.get('#Dropdown-marketCupSizeSmall').contains(addMarketDetails.cupSizeSmall);
    cy.get('#Dropdown-marketCupSizeMedium').contains(addMarketDetails.cupSizeMedium);
    cy.get('#Dropdown-marketCupSizeLarge').contains(addMarketDetails.cupSizeLarge);
    cy.get('#S-Dropdown-marketPriceCard').contains(addMarketDetails.priceCard);
    cy.get('#TextBox-marketParentOrganizationName').contains(addMarketDetails.parentOrganizationName);
    cy.get('#Dropdown-marketCocaColaRegion').contains(addMarketDetails.cocaColaRegion);
    addMarket.clickMarketLevelSetup();
    addMarket.clickCancelMarketLevel();
});

