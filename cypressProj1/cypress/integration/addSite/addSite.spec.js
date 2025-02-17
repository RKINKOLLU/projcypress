import addMarketPage from '../PageObjects/addMarketPage';
import marketEntityManagementPage from '../PageObjects/marketEntityManagementPage';
import addSitePage from '../PageObjects/addSitePage';
import addLevel2EntityPage from '../PageObjects/addLevel2EntityPage';
import addMachinePage from '../PageObjects/addMachinePage';
const addSiteDetails = require('../../fixtures/addSiteDetails.json');
const addMarketDetails = require('../../fixtures/addMarketDetails.json');
let addMarket = new addMarketPage();
let memp = new marketEntityManagementPage();
let addLevel2Entity = new addLevel2EntityPage();
let addSite = new addSitePage();
let addMachine = new addMachinePage();
const marketValue = addMarketDetails.autodata.prefix; //+ id + '_Demo';
const siteName = marketValue + '_SiteA';
const level6EntityName = marketValue + '_L6';

When('I search for parent Entity', () => {
	memp.enterSearch(level6EntityName);
});

When('I enter all mandatory fields', () => {
	//addSite.enterParentEntity(addSiteDetails.add.parentEntity);
    addSite.enterSiteName(siteName);
    addSite.enterSiteReference(siteName);
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
    //addSite.enterCurrency(addSiteDetails.add.currency);
});

When('I reselect the Parent Entity', () => {
	addSite.enterParentEntity(level6EntityName);
});

Then('all mandatory fields get cleared', () => {
	cy.get('#TextBox-siteName').should('be.empty');
    cy.get('#TextBox-siteReference').should('be.empty');
    cy.get('#TextBox-siteTradeCode').should('be.empty');
    cy.get('#TextBox-siteBrandCode').should('be.empty');
    cy.get('#TextBox-sitePrimaryAlarmFirstContactEmail').should('be.empty');
    cy.get('#TextBox-sitePrimaryAlarmFirstContactNumberCountry').should('be.empty');
    cy.get('#TextBox-sitePrimaryAlarmFirstContactNumber').should('be.empty');
    cy.get('#TextBox-sitePrimaryAlarmSecondContactEmail').should('be.empty');
    cy.get('#TextBox-sitePrimaryAlarmSecondContactNumberCountry').should('be.empty');
    cy.get('#TextBox-sitePrimaryAlarmSecondContactNumber').should('be.empty');
    cy.get('#TextBox-siteSecondaryAlarmFirstContactEmail').should('be.empty');
    cy.get('#TextBox-siteSecondaryAlarmFirstContactNumberCountry').should('be.empty');
    cy.get('#TextBox-siteSecondaryAlarmFirstContactNumber').should('be.empty');
    cy.get('#TextBox-siteSecondaryAlarmSecondContactEmail').should('be.empty');
    cy.get('#TextBox-siteSecondaryAlarmSecondContactNumberCountry').should('be.empty');
    cy.get('#TextBox-siteSecondaryAlarmSecondContactNumber').should('be.empty');
    cy.get('#TextBox-siteServiceAgentName').should('be.empty');
    cy.get('#TextBox-siteServiceAgentEmail').should('be.empty');
    cy.get('#TextBox-siteServiceAgentMobileNumberCountry').should('be.empty');
    cy.get('#TextBox-siteServiceAgentMobileNumber').should('be.empty');
    cy.get('#TextBox-siteEmail').should('be.empty');
    cy.get('#TextBox-sitePhoneNumberCountry').should('be.empty');
    cy.get('#TextBox-sitePhoneNumber').should('be.empty');
    cy.get('#TextBox-siteAddress').should('be.empty');
    cy.get('#TextBox-siteCity').should('be.empty');
    cy.get('#TextBox-siteLocality').should('be.empty');
    //cy.get('#S-Dropdown-siteCurrency').should('be.empty');
    cy.get('#Dropdown-siteLanguage').contains('Select Language')
});
When('I dont select any Brand Type', () => {
	addSite.selectSiteBrandType('Select Brand Type')
});

Then('Brand code is cleared', () => {
	cy.get('#TextBox-siteBrandCode').should('be.empty')
    addMarket.validateErrorMsgOnFields('Brand Code is required');
    addSite.selectSiteBrandType(addSiteDetails.add.brandType);
    addSite.enterSiteBrandCode(addSiteDetails.add.brandCode);
});
Then('error msg {string} is displayed', (args1) => {
	addMarket.validateErrorMsgOnFields(args1);
    addSite.validateSaveAndNextButton('not.to.enabled');
});

When('I dont select any Language', () => {
	addSite.enterLanguage('Select Language');
});

Then('I navigate to Trade hours setup screen', () => {
	cy.get('#btn-saveNext-trade-hours > .mat-button-wrapper',{timeout:2000}).should('be.visible');
});

When('I click Save and Next button in Trade hours setup screen', () => {
	cy.get('#btn-saveNext-trade-hours > .mat-button-wrapper',{timeout:2000}).click().wait(200)
});

Then('I see confirmation msgs',() => {
	cy.get('.mat-dialog-content',{timeout:2000}).contains('You are saving the default trade hours setup of 24 hours working for all 7 days. Are you sure you want to save this?')
});

When('I click Yes button', () => {
	cy.get('#btn-Yes > .mat-button-wrapper').click().wait(100)
});

Then('I navigate to Configuration page', () => {
	cy.get('[title="Save"] > .mat-button-wrapper',{timeout:2000}).should('be.visible');
});

Given('I click on Ingredients Setup button', () => {
	cy.contains('Ingredients Setup').click();
});

Given('I click on Ingredients Setup button again', () => {
	cy.contains('Ingredients Setup').click();
});

When('I select a machine', () => {
	addSite.selectMachineType(addSiteDetails.add.config.machineType);
});

Then('Site is created', () => {
	memp.enterSearch(siteName);
});
When('I click on Save button', () => {
	addSite.clickSaveButton()
});

When('I enter all mandatory fields with Existing Site Name', () => {
	//addSite.enterParentEntity(addSiteDetails.add.parentEntity);
    addSite.enterSiteName(siteName);
    addSite.enterSiteReference(siteName);
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
    //addSite.enterCurrency(addSiteDetails.add.currency);
});

When('I search for Site Entity', () => {
	memp.enterSearch(siteName);
});

When('I search for edited Site Entity', () => {
	memp.enterSearch(addSiteDetails.edit.siteName);
});

Then('I click Yes and edit all the fields in Site Entity', () => {
	//addSite.enterParentEntity(addSiteDetails.add.parentEntity);
    addSite.enterSiteName(addSiteDetails.edit.siteName);
    addSite.enterSiteReference(addSiteDetails.edit.siteReference);
    addSite.enterSiteSellToNumber(addSiteDetails.edit.siteSellToNumber);
    addSite.enterSitePriceCard(addSiteDetails.edit.priceCard);
    addSite.enterSiteTradeCode(addSiteDetails.edit.tradeCode);
    addSite.selectSiteBrandType(addSiteDetails.edit.brandType);
    //addSite.enterSiteBrandCode(addSiteDetails.edit.brandCode);

    addSite.enterPrimaryAlarm1stContactEmail(addSiteDetails.edit.primaryAlarm1stContactEmail);
    addSite.enterCodePrimaryAlarm1stContactMobileNumber(addSiteDetails.edit.codePrimaryAlarm1stContactMobileNumber);
    addSite.enterPrimaryAlarm1stContactMobileNumber(addSiteDetails.edit.primaryAlarm1stContactMobileNumber);

    addSite.enterPrimaryAlarm2ndContactEmail(addSiteDetails.edit.primaryAlarm2ndContactEmail);
    addSite.enterCodePrimaryAlarm2ndContactMobileNumber(addSiteDetails.edit.codePrimaryAlarm2ndContactMobileNumber);
    addSite.enterPrimaryAlarm2ndContactMobileNumber(addSiteDetails.edit.primaryAlarm2ndContactMobileNumber);

    addSite.enterSecondaryAlarm1stContactEmail(addSiteDetails.edit.secondaryAlarm1stContactEmail);
    addSite.enterCodeSecondaryAlarm1stContactMobileNumber(addSiteDetails.edit.codeSecondaryAlarm1stContactMobileNumber);
    addSite.enterSecondaryAlarm1stContactMobileNumber(addSiteDetails.edit.secondaryAlarm1stContactMobileNumber);

    addSite.enterSecondaryAlarm2ndContactEmail(addSiteDetails.edit.secondaryAlarm2ndContactEmail);
    addSite.enterCodeSecondaryAlarm2ndContactMobileNumber(addSiteDetails.edit.codeSecondaryAlarm2ndContactMobileNumber);
    addSite.enterSecondaryAlarm2ndContactMobileNumber(addSiteDetails.edit.secondaryAlarm2ndContactMobileNumber);

    addSite.enterServiceAgentCompanyName(addSiteDetails.edit.serviceAgentCompanyName);
    addSite.enterServiceAgentBusinessEmail(addSiteDetails.edit.serviceAgentBusinessEmail);
    addSite.enterCodeServiceAgentMobileNumber(addSiteDetails.edit.codeServiceAgentMobileNumber);
    addSite.enterServiceAgentMobileNumber(addSiteDetails.edit.serviceAgentMobileNumber);

    //addSite.setSiteEntityStatus(level3EntityDeatails.edit.level3EntityStatus);
    addSite.enterBusinessEmailAddress(addSiteDetails.edit.businessEmailAddress);
    addSite.enterCodeBusinessLandlineNumber(addSiteDetails.edit.codeBusinessLandlineNumber);
    addSite.enterBusinessLandlineNumber(addSiteDetails.edit.businessLandlineNumber);

    addSite.enterSiteAddress1(addSiteDetails.edit.siteAddress1);
    addSite.enterSiteAddress2(addSiteDetails.edit.siteAddress2);
    addSite.enterSiteCity(addSiteDetails.edit.siteCity);
    addSite.enterSiteLocality(addSiteDetails.edit.siteLocality);
    addSite.enterPostalCode(addSiteDetails.edit.sitePostalCode)


    addSite.enterCountryCode(addSiteDetails.edit.siteCountryCode);
    addSite.enterLanguage(addSiteDetails.edit.language);
    addSite.enterTimezone(addSiteDetails.edit.timezone);
    //addSite.enterCurrency(addSiteDetails.edit.currency);
});

Then('I click Yes and edit all the fields in Site Entity information', () => {
	//addSite.enterParentEntity(addSiteDetails.add.parentEntity);
    addSite.enterSiteName(siteName);
    addSite.enterSiteReference(siteName);
    addSite.enterSiteSellToNumber(siteName);
    addSite.enterSitePriceCard(addSiteDetails.add.priceCard);
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
    //addSite.enterCurrency(addSiteDetails.add.currency);
});

When('I click on {string} tab', (args1) => {
	cy.contains(args1).click();
    cy.get(':nth-child(1) > .day').should('be.visible');
    addSite.banDay('6');
});

Then('I click Ban button on all Days', () => {
    addSite.banDay('0');
	addSite.banDay('1');
	addSite.banDay('2');
	addSite.banDay('3');
	addSite.banDay('4');
	addSite.banDay('5');
	cy.get('#btn-ban-day-6').click();
});

Given('I make site inactive and Ban the last day', () => {
	cy.contains('Site Details').click();
    cy.get('.mat-slide-toggle-bar').click();
    cy.get('#btn-save-next-entity > .mat-button-wrapper').click();
    addSite.banDay('6');
    cy.get('#btn-save-trade-hours > .mat-button-wrapper').click();
});

When('I Make the site active', () => {
	memp.enterSearch(siteName);
    cy.get('[title="Edit"]',{timeout:500}).click({force: true});
    cy.get('.mat-slide-toggle-bar').click();
    cy.get('#btn-save-entity > .mat-button-wrapper').click();
});

When('I click on Add entity button to create a machine', () => {
	cy.get('[title="Add"]',{timeout:500}).click({force: true});
});

When('I click ok Button', () => {
	cy.get('#btn-confirm-dialog > .mat-button-wrapper').click();
});

Given('I navigate to Add Machine screen', () => {
	memp.clickMachineManagementButton();
});

When('I click on Add Machine button', () => {
	cy.get('#btn-add-machine > .mat-button-wrapper').click();
});

When('I search with the site name', () => {
	addMachine.enterParentEntity(siteName);
});

Then('the site appears inactive', () => {
	cy.get('.mat-option-text').should('not.be.selected')
});

When('I enter the site name', () => {
	addMachine.enterParentEntity(siteName);
});

Then('I see a msg {string}', (args1) => {
	addMarket.validateErrorMsgOnFields(args1);
});

When('I select the Site and click on edit Site button', () => {
	memp.clickEditMarket();
});

When('I navigate to Trade Hours Setup screen', () => {
	cy.contains('Trade Hours Setup').click();
});

When('I click on Monday pencil icon', () => {
	cy.get('#btn-edit-day-0').click();
});

Then('I set the opening hrs and closing hrs', () => {
	addSite.addOpenAndCloseHrs('09:00','13:00');
    addSite.addOpenAndCloseHrs('13:30','16:00');
    addSite.addOpenAndCloseHrs('16:30','22:00');
});

Then('I save the changes', () => {
	//cy.get('#btn-remove-day-0-slot-0').click();
    cy.get('#btn-save-day-0').click();
});

Then('I can clone the changes', () => {
	cy.get('#btn-clone-day-0').click().wait(200);
    cy.get('#cb-day-1 > .mat-checkbox-layout').click();
    cy.get('#cb-day-2 > .mat-checkbox-layout').click();
    cy.get('#cb-day-3 > .mat-checkbox-layout').click();
    cy.get('#cb-day-4 > .mat-checkbox-layout').click();
    cy.get('#cb-day-5 > .mat-checkbox-layout').click();
    cy.get('#cb-day-6 > .mat-checkbox-layout').click();
    cy.get('#btn-clone-trade-hours-clone > .mat-button-wrapper').click();
});

Then('I can delete the opening and closing hrs', () => {
	cy.get('#btn-edit-day-5').click();
    cy.get('#btn-remove-day-5-slot-0').click();
});

When('I delete all the opening and closing hrs', () => {
	cy.get('#btn-remove-day-5-slot-1').click();
    cy.get('#btn-remove-day-5-slot-0').click();
});

Then('I receive the msg {string}', (args1) => {
	cy.get('.mat-typography', {timeout: 10000}).contains(args1);
});

When('I click Yes', () => {
	cy.get('#btn-Yes > .mat-button-wrapper').click();
});

Then('the day gets closed', () => {
	cy.get('.banday > .icons').should('be.visible')
});

Then('I can ban the day directly by clicking on Ban button', () => {
	cy.get('#btn-ban-day-6').click();
    //cy.get('.mat-typography', {timeout: 10000}).contains(value);
});

When('I save the trading hours changes', () => {
	cy.get('#btn-save-trade-hours > .mat-button-wrapper').click();
});