import addMarketPage from '../PageObjects/addMarketPage';
import marketEntityManagementPage from '../PageObjects/marketEntityManagementPage';
import addSitePage from '../PageObjects/addSitePage';
import addPartnerPage from '../PageObjects/addPartnerPage';
import addMachinePage from '../PageObjects/addMachinePage';
import addLevel2EntityPage from '../PageObjects/addLevel2EntityPage';
import machineManagementPage from '../PageObjects/machineManagementPage';
const addSiteDetails = require('../../fixtures/addSiteDetails.json');
const addMachineDetails = require('../../fixtures/addMachineDetails.json');
let addMarket = new addMarketPage();
let memp = new marketEntityManagementPage();
let addLevel2Entity = new addLevel2EntityPage();
let addSite = new addSitePage();
let addPartner = new addPartnerPage();
let addMachine = new addMachinePage();
let mm = new machineManagementPage();


When('I create another site', () => {
	memp.enterSearch(addMachineDetails.machineMove.parentEntity);
    addLevel2Entity.clickAddEntity();
    //addSite.enterParentEntity(addSiteDetails.add.parentEntity);
    addSite.enterSiteName(addMachineDetails.machineMove.createSite);
    addSite.enterSiteReference(addMachineDetails.machineMove.createSite);
    addSite.enterSiteTradeCode(addSiteDetails.add.tradeCode);
    addSite.selectSiteBrandType(addSiteDetails.add.brandType);
    addSite.enterSiteBrandCode(addSiteDetails.add.brandCode);

    addSite.enterPrimaryAlarm1stContactEmail(addSiteDetails.add.primaryAlarm1stContactEmail);
    addSite.enterCodePrimaryAlarm1stContactMobileNumber(addSiteDetails.add.codePrimaryAlarm1stContactMobileNumber);
    addSite.enterPrimaryAlarm1stContactMobileNumber(addSiteDetails.add.primaryAlarm1stContactMobileNumber);

    addSite.enterPrimaryAlarm2ndContactEmail(addSiteDetails.add.primaryAlarm2ndContactEmail);
    addSite.enterCodePrimaryAlarm2ndContactMobileNumber(addSiteDetails.add.codePrimaryAlarm2ndContactMobileNumber);
    addSite.enterPrimaryAlarm2ndContactMobileNumber(addSiteDetails.add.primaryAlarm2ndContactMobileNumber);

    addSite.enterSecondaryAlarm1stContactEmail(addSiteDetails.add.secondaryAlarm1stContactEmail);
    addSite.enterCodeSecondaryAlarm1stContactMobileNumber(addSiteDetails.add.codeSecondaryAlarm1stContactMobileNumber);
    addSite.enterSecondaryAlarm1stContactMobileNumber(addSiteDetails.add.secondaryAlarm1stContactMobileNumber);

    addSite.enterSecondaryAlarm2ndContactEmail(addSiteDetails.add.secondaryAlarm2ndContactEmail);
    addSite.enterCodeSecondaryAlarm2ndContactMobileNumber(addSiteDetails.add.codeSecondaryAlarm2ndContactMobileNumber);
    addSite.enterSecondaryAlarm2ndContactMobileNumber(addSiteDetails.add.secondaryAlarm2ndContactMobileNumber);

    addSite.enterServiceAgentCompanyName(addSiteDetails.add.serviceAgentCompanyName);
    addSite.enterServiceAgentBusinessEmail(addSiteDetails.add.serviceAgentBusinessEmail);
    addSite.enterCodeServiceAgentMobileNumber(addSiteDetails.add.codeServiceAgentMobileNumber);
    addSite.enterServiceAgentMobileNumber(addSiteDetails.add.serviceAgentMobileNumber);

    //addSite.setSiteEntityStatus(level3EntityDeatails.add.level3EntityStatus);
    addSite.enterBusinessEmailAddress(addSiteDetails.add.businessEmailAddress);
    addSite.enterCodeBusinessLandlineNumber(addSiteDetails.add.codeBusinessLandlineNumber);
    addSite.enterBusinessLandlineNumber(addSiteDetails.add.businessLandlineNumber);

    addSite.enterSiteAddress1(addSiteDetails.add.siteAddress1);
    addSite.enterSiteAddress2(addSiteDetails.add.siteAddress2);
    addSite.enterSiteCity(addSiteDetails.add.siteCity);
    addSite.enterSiteLocality(addSiteDetails.add.siteLocality);
    addSite.enterPostalCode(addSiteDetails.add.sitePostalCode)

    addSite.enterCountryCode(addSiteDetails.add.siteCountryCode);
    addSite.enterLanguage(addSiteDetails.add.language);
    addSite.enterTimezone(addSiteDetails.add.timezone);

    addPartner.clickSaveAndNextButton()
    cy.get('#btn-saveNext-trade-hours > .mat-button-wrapper',{timeout:2000}).click().wait(200)
    cy.get('#btn-Yes > .mat-button-wrapper').click().wait(100)
    cy.get('#mat-expansion-panel-header-3 > .mat-expansion-indicator').click();
    addSite.selectMachineType(addSiteDetails.add.config.machineType);
    addSite.selectCupsSizes('#Dropdown-Waffle-CupSize-Short',addSiteDetails.add.config.waffleCupsSizeShort);
    addSite.selectCupsSizes('#Dropdown-Waffle-CupSize-Small',addSiteDetails.add.config.waffleCupsSizeSmall);
    addSite.selectCupsSizes('#Dropdown-Waffle-CupSize-Medium',addSiteDetails.add.config.waffleCupsSizeMedium);
    addSite.selectCupsSizes('#Dropdown-Waffle-CupSize-Large',addSiteDetails.add.config.waffleCupsSizelarge);
    addSite.selectCupsSizes('#Dropdown-Plastic-CupSize-Medium',addSiteDetails.add.config.plasticCupsSizeMedium);
    addSite.selectCupsSizes('#Dropdown-Plastic-CupSize-Large',addSiteDetails.add.config.plasticCupsSizeLarge);
    addSite.clickSaveButton()

    memp.enterSearch(addMachineDetails.machineMove.createSite);
});

When('I Navigate to Machine Management screen', () => {
	memp.clickMachineManagementButton()
});

When('I search for the Machine Entity', () => {
	mm.enterSearch(addMachineDetails.machineMove.machine);
});

When('I click on change site button', () => {
	mm.clickChangeSite();
});

When('I search for the site', () => {
	mm.enterSearchSite(addMachineDetails.machineMove.site);
});

When('I select the site', () => {
	mm.selectSiteCheckBox(addMachineDetails.machineMove.site);
});

When('I click on Move button', () => {
	mm.clickMoveButton();
});

Then('I see the Move Machine msgs', () => {
	mm.validateMoveMachinemsg();
});

Then('I click ok button', () => {
	mm.clickOkButton();
});

Then('I entered all the mandatory fields', () => {
	 addMachine.setMachineEntityStatus(addMachineDetails.add.machineEntityStatus);
    
     addMachine.enterPriceCard(addMachineDetails.add.priceCard);
 
     addMachine.enterPrimaryAlarm1stContactEmail(addMachineDetails.add.primaryAlarm1stContactEmail);
     addMachine.enterCodePrimaryAlarm1stContactMobileNumber(addMachineDetails.add.codePrimaryAlarm1stContactMobileNumber);
     addMachine.enterPrimaryAlarm1stContactMobileNumber(addMachineDetails.add.primaryAlarm1stContactMobileNumber);
 
     addMachine.enterPrimaryAlarm2ndContactEmail(addMachineDetails.add.primaryAlarm2ndContactEmail);
     addMachine.enterCodePrimaryAlarm2ndContactMobileNumber(addMachineDetails.add.codePrimaryAlarm2ndContactMobileNumber);
     addMachine.enterPrimaryAlarm2ndContactMobileNumber(addMachineDetails.add.primaryAlarm2ndContactMobileNumber);
 
     addMachine.enterSecondaryAlarm1stContactEmail(addMachineDetails.add.secondaryAlarm1stContactEmail);
     addMachine.enterCodeSecondaryAlarm1stContactMobileNumber(addMachineDetails.add.codeSecondaryAlarm1stContactMobileNumber);
     addMachine.enterSecondaryAlarm1stContactMobileNumber(addMachineDetails.add.secondaryAlarm1stContactMobileNumber);
 
     addMachine.enterSecondaryAlarm2ndContactEmail(addMachineDetails.add.secondaryAlarm2ndContactEmail);
     addMachine.enterCodeSecondaryAlarm2ndContactMobileNumber(addMachineDetails.add.codeSecondaryAlarm2ndContactMobileNumber);
     addMachine.enterSecondaryAlarm2ndContactMobileNumber(addMachineDetails.add.secondaryAlarm2ndContactMobileNumber);
 
     addMachine.enterMachineLocation(addMachineDetails.add.machineLocation);
     //addMachine.enterPaymentSystemType(addMachineDetails.add.paymentSystemType);
     addMachine.enterPaymentTerminalId(addMachineDetails.add.paymentTerminalId);
     addMachine.enterGeoPositionLatitude(addMachineDetails.add.geoPositionLatitude);
     addMachine.enterGeoPositionLongitude(addMachineDetails.add.geoPositionLongitude);
});

Then('I see the machine appears with moved Sites name in the search list', () => {
    cy.wait(1500);
	cy.get('.mat-row > .cdk-column-machineSiteName').contains(addMachineDetails.machineMove.site);
});

When('I search for the site to move a machine into the site', () => {
	mm.enterSearchSite(addMachineDetails.machineMove.inactiveSite);
});

When('I select the site to move', () => {
	mm.selectSiteCheckBox(addMachineDetails.machineMove.inactiveSite);
});

When('I select the Brand Type with no entities associated', () => {
	addMachine.selectBrandType("CE - EVENTS");
});

Then('I should see a msg: {string}', (args1) => {
	addMachine.validateMsgs(args1);
});

When('I enter the search term which doesnt have any matching results', () => {
	addMachine.selectBrandType("Select Brand Type");
    mm.enterSearchSite('zzzzzzzzz');
});

Given('I clear the Search details', () => {
	addMachine.selectBrandType("Select Brand Type");
});

Then('the commissioning state must default to {string}', (args1) => {
	cy.get('#Dropdown-machineCommissioningStatus').contains(args1);
});

When('I click Cancel button without entering mandatory fields', () => {
	cy.get('#btn-cancel-entity > .mat-button-wrapper').click();
});

Then('I should be asked to confirm the popup: {string}', (args1) => {
	cy.get('.mat-typography').contains(args1);
});

When('I click on No', () => {
	cy.get('#btn-cancel-dialog').click();
});

Then('I should be taken back to the edit machine details screen', () => {
	cy.get(':nth-child(4) > span').contains('Move Machine')
});

When('I click on Yes', () => {
    cy.get('#btn-cancel-entity > .mat-button-wrapper').click();
	cy.get('#btn-confirm-dialog').click();
});

Then('I should be redirected back to the Machine list screen', () => {
	cy.get('#menu-machine').should('be.visible');
});

Given('I  inactive a sites', () => {
	cy.get('#menu-entity').click();
    memp.enterSearch(addMachineDetails.machineMove.inactiveSite);
    memp.clickEditMarket();
    cy.get('.mat-slide-toggle-bar').click();
    cy.get('#btn-save-entity > .mat-button-wrapper').click();
    memp.clickMachineManagementButton();
});

When('I select the Inactive site in the machine move machine management screen', () => {
	mm.enterSearch(addMachineDetails.machineMove.machine);
    mm.clickChangeSite();
    mm.enterSearchSite(addMachineDetails.machineMove.inactiveSite);
    mm.selectSiteCheckBox(addMachineDetails.machineMove.inactiveSite);
});


