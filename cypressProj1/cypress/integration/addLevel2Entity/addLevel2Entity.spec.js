//import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import addMarketPage from '../PageObjects/addMarketPage';
import marketEntityManagementPage from '../PageObjects/marketEntityManagementPage';
import addLevel2EntityPage from '../PageObjects/addLevel2EntityPage';
const addMarketDetails = require('../../fixtures/addMarketDetails.json');
const level2EntityDetails = require('../../fixtures/level2EntityDetails.json')
let addMarket = new addMarketPage();
let memp = new marketEntityManagementPage();
let addLevel2Entity = new addLevel2EntityPage();
const marketValue = addMarketDetails.autodata.prefix; //+ id + '_Demo';
const marketName = marketValue+'_Market';
const level2EntityName = marketValue+'_L2';
Then('I search for the created market', () => {
    memp.enterSearch(marketName);
});

When('I search for Level 2 Entity', () => {
    memp.enterSearch(level2EntityName);
});

When('I select the Market and click on add entity button', () => {
	addLevel2Entity.clickAddEntity();
});

When('I enter all mandatory fields with Existing Level 2 Entity Name', () => {
	addLevel2Entity.enterLevel2EntityName(level2EntityName);
    addLevel2Entity.enterLevel2EntityReference(level2EntityName);
    addLevel2Entity.enterTradeCode(level2EntityDetails.add.tradeCode);
    addLevel2Entity.selectBrandType(level2EntityDetails.add.brandType);
    addLevel2Entity.enterBrandCode(level2EntityDetails.add.brandCode);
    //addLevel2Entity.setLevel2EntityStatus(level2EntityDeatails.add.level2EntityStatus);
    addLevel2Entity.enterBusinessEmailAddress(level2EntityDetails.add.businessEmailAddress);
    addLevel2Entity.enterCodeBusinessLandlineNumber(level2EntityDetails.add.codeBusinessLandlineNumber);
    addLevel2Entity.enterBusinessLandlineNumber(level2EntityDetails.add.businessLandlineNumber);
    addLevel2Entity.enterCountryCode(level2EntityDetails.add.countryCode)
});
When('I enter all mandatory fields', () => {
    //addMarket.enterMarketName(addMarketDetails.add.marketName);
	addLevel2Entity.enterLevel2EntityName(level2EntityName);
    addLevel2Entity.enterLevel2EntityReference(level2EntityName);
    addLevel2Entity.enterTradeCode(level2EntityDetails.add.tradeCode);
    addLevel2Entity.selectBrandType(level2EntityDetails.add.brandType);
    addLevel2Entity.enterBrandCode(level2EntityDetails.add.brandCode);
    //addLevel2Entity.setLevel2EntityStatus(level2EntityDeatails.add.level2EntityStatus);
    addLevel2Entity.enterBusinessEmailAddress(level2EntityDetails.add.businessEmailAddress);
    addLevel2Entity.enterCodeBusinessLandlineNumber(level2EntityDetails.add.codeBusinessLandlineNumber);
    addLevel2Entity.enterBusinessLandlineNumber(level2EntityDetails.add.businessLandlineNumber);
    addLevel2Entity.enterCountryCode(level2EntityDetails.add.countryCode)
});

When('I dont select Brand Type', () => {
	addLevel2Entity.selectBrandType('Select Brand Type')
});

Then('Brand code is cleared', () => {
	cy.get('#TextBox-level2BrandCode').should('be.empty')
    addMarket.validateErrorMsgOnFields('Brand Code is required');
    addLevel2Entity.selectBrandType(level2EntityDetails.add.brandType);
    addLevel2Entity.enterBrandCode(level2EntityDetails.add.brandCode);
});

When('I reselect the Parent Entity', () => {
	addLevel2Entity.enterParentEntity(marketName);
});

Then('all mandatory fields get cleared', () => {
	cy.get('#TextBox-level2EntityName').should('be.empty')
    cy.get('#TextBox-level2EntityReference').should('be.empty')
    cy.get('#TextBox-level2TradeCode').should('be.empty')
    cy.get('#TextBox-level2BrandCode').should('be.empty')
    cy.get('#TextBox-level2ContactEmail').should('be.empty')
    cy.get('#TextBox-level2ContactPhoneCountry').should('be.empty')
    cy.get('#TextBox-level2ContactPhone').should('be.empty')
    cy.get('#Dropdown-level2BrandType').contains('Select Brand Type')
});

Then('Level 2 Entity is created', () => {
	memp.enterSearch(level2EntityName);
});

When('I search for edited Level 2 Entity', () => {
	memp.enterSearch(level2EntityDetails.edit.level2EntityName);
});


Then('I click Yes and edit all the fields in Level 2 Entity', () => {
	//addMarket.enterMarketName(addMarketDetails.add.marketName);
	addLevel2Entity.enterLevel2EntityName(level2EntityDetails.edit.level2EntityName);
    addLevel2Entity.enterLevel2EntityReference(level2EntityDetails.edit.level2EntityReference);
    addLevel2Entity.enterBillTo(level2EntityDetails.edit.billTo);
    addLevel2Entity.enterTradeCode(level2EntityDetails.edit.tradeCode);
    addLevel2Entity.selectBrandType(level2EntityDetails.edit.brandType);
    //addLevel2Entity.enterBrandCode(level2EntityDetails.edit.brandCode);
    //addLevel2Entity.setLevel2EntityStatus(level2EntityDeatails.edit.level2EntityStatus);
    addLevel2Entity.enterBusinessEmailAddress(level2EntityDetails.edit.businessEmailAddress);
    addLevel2Entity.enterCodeBusinessLandlineNumber(level2EntityDetails.edit.codeBusinessLandlineNumber);
    addLevel2Entity.enterBusinessLandlineNumber(level2EntityDetails.edit.businessLandlineNumber);
    addLevel2Entity.enterCountryCode(level2EntityDetails.edit.countryCode)
    addLevel2Entity.enterTimeZone(level2EntityDetails.edit.timezone);
    addLevel2Entity.enterPriceCard(level2EntityDetails.edit.priceCard);
});

Then('I click Yes and edit all the fields with Level 2 Entity information', () => {
	//addMarket.enterMarketName(addMarketDetails.add.marketName);
	addLevel2Entity.enterLevel2EntityName(level2EntityName);
    addLevel2Entity.enterLevel2EntityReference(level2EntityName);
    addLevel2Entity.enterBillTo(level2EntityName);
    addLevel2Entity.enterTradeCode(level2EntityDetails.add.tradeCode);
    addLevel2Entity.selectBrandType(level2EntityDetails.add.brandType);
    addLevel2Entity.enterBrandCode(level2EntityDetails.add.brandCode);
    //addLevel2Entity.setLevel2EntityStatus(level2EntityDeatails.add.level2EntityStatus);
    addLevel2Entity.enterBusinessEmailAddress(level2EntityDetails.add.businessEmailAddress);
    addLevel2Entity.enterCodeBusinessLandlineNumber(level2EntityDetails.add.codeBusinessLandlineNumber);
    addLevel2Entity.enterBusinessLandlineNumber(level2EntityDetails.add.businessLandlineNumber);
    addLevel2Entity.enterCountryCode(level2EntityDetails.add.countryCode)
    addLevel2Entity.enterTimeZone(level2EntityDetails.add.timezone);
    addLevel2Entity.enterPriceCard(level2EntityDetails.add.priceCard);
});
