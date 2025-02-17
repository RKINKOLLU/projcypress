import addMarketPage from '../PageObjects/addMarketPage';
import marketEntityManagementPage from '../PageObjects/marketEntityManagementPage';
import addLevel6EntityPage from '../PageObjects/addLevel6EntityPage';
import addLevel2EntityPage from '../PageObjects/addLevel2EntityPage';
const level6EntityDetails = require('../../fixtures/level6EntityDetails.json');
const addMarketDetails = require('../../fixtures/addMarketDetails.json');
let addMarket = new addMarketPage();
let memp = new marketEntityManagementPage();
let addLevel2Entity = new addLevel2EntityPage();
let addLevel6Entity = new addLevel6EntityPage();
const marketValue = addMarketDetails.autodata.prefix; //+ id + '_Demo';
const level5EntityName = marketValue + '_L5';
const level6EntityName = marketValue + '_L6';

When('I search for parent Entity', () => {
	memp.enterSearch(level5EntityName);
});

When('I enter all mandatory fields', () => {
    //addMarket.enterMarketName(addMarketDetails.marketName);
	addLevel6Entity.enterLevel6EntityName(level6EntityName);
    addLevel6Entity.enterLevel6EntityReference(level6EntityName);
    addLevel6Entity.enterLevel6TradeCode(level6EntityDetails.add.tradeCode);
    addLevel6Entity.selectLevel6BrandType(level6EntityDetails.add.brandType);
    addLevel6Entity.enterLevel6BrandCode(level6EntityDetails.add.brandCode);
    //addLevel6Entity.setLevel6EntityStatus(level6EntityDeatails.add.level6EntityStatus);
    addLevel6Entity.enterLevel6BusinessEmailAddress(level6EntityDetails.add.businessEmailAddress);
    addLevel6Entity.enterLevel6CodeBusinessLandlineNumber(level6EntityDetails.add.codeBusinessLandlineNumber);
    addLevel6Entity.enterLevel6BusinessLandlineNumber(level6EntityDetails.add.businessLandlineNumber);
    addLevel6Entity.enterLevel6CountryCode(level6EntityDetails.add.countryCode)
});

When('I reselect the Parent Entity', () => {
	addLevel2Entity.enterParentEntity(level5EntityName);
});

Then('all mandatory fields get cleared', () => {
	cy.get('#TextBox-level6EntityName').should('be.empty')
    cy.get('#TextBox-level6EntityReference').should('be.empty')
    cy.get('#TextBox-level6TradeCode').should('be.empty')
    cy.get('#TextBox-level6BrandCode').should('be.empty')
    cy.get('#TextBox-level6ContactEmail').should('be.empty')
    cy.get('#TextBox-level6ContactPhoneCountry').should('be.empty')
    cy.get('#TextBox-level6ContactPhone').should('be.empty')
    //cy.get('#Dropdown-level6BrandType').contains('Select Brand Type')
});

When('I dont select any Brand Type', () => {
	addLevel6Entity.selectLevel6BrandType('Select Brand Type')
});

Then('Brand code is cleared', () => {
	cy.get('#TextBox-level6BrandCode').should('be.empty')
    addMarket.validateErrorMsgOnFields('Brand Code is required');
    addLevel6Entity.selectLevel6BrandType(level6EntityDetails.add.brandType);
    addLevel6Entity.enterLevel6BrandCode(level6EntityDetails.add.brandCode);
});

Then('Level 6 Entity is created', () => {
	memp.enterSearch(level6EntityName);
});

When('I enter all mandatory fields with Existing Level 6 Entity Name', () => {
	//addMarket.enterMarketName(addMarketDetails.marketName);
	addLevel6Entity.enterLevel6EntityName(level6EntityName);
    addLevel6Entity.enterLevel6EntityReference(level6EntityName);
    addLevel6Entity.enterLevel6TradeCode(level6EntityDetails.add.tradeCode);
    addLevel6Entity.selectLevel6BrandType(level6EntityDetails.add.brandType);
    addLevel6Entity.enterLevel6BrandCode(level6EntityDetails.add.brandCode);
    //addLevel6Entity.setLevel6EntityStatus(level6EntityDeatails.add.level6EntityStatus);
    addLevel6Entity.enterLevel6BusinessEmailAddress(level6EntityDetails.add.businessEmailAddress);
    addLevel6Entity.enterLevel6CodeBusinessLandlineNumber(level6EntityDetails.add.codeBusinessLandlineNumber);
    addLevel6Entity.enterLevel6BusinessLandlineNumber(level6EntityDetails.add.businessLandlineNumber);
    addLevel6Entity.enterLevel6CountryCode(level6EntityDetails.add.countryCode)
});

When('I search for Level 6 Entity', () => {
	memp.enterSearch(level6EntityName);
});

Then('I click Yes and edit all the fields in Level 6 Entity', () => {
	//addMarket.enterMarketName(addMarketDetails.marketName);
	addLevel6Entity.enterLevel6EntityName(level6EntityDetails.edit.level6EntityName);
    addLevel6Entity.enterLevel6EntityReference(level6EntityDetails.edit.level6EntityReference);
    addLevel6Entity.enterLevel6BillTo(level6EntityDetails.edit.billTo);
    addLevel6Entity.enterLevel6TradeCode(level6EntityDetails.edit.tradeCode);
    addLevel6Entity.selectLevel6BrandType(level6EntityDetails.edit.brandType);
    //addLevel6Entity.enterLevel6BrandCode(level6EntityDetails.edit.brandCode);
    //addLevel6Entity.setLevel6EntityStatus(level6EntityDeatails.edit.level6EntityStatus);
    addLevel6Entity.enterLevel6BusinessEmailAddress(level6EntityDetails.edit.businessEmailAddress);
    addLevel6Entity.enterLevel6CodeBusinessLandlineNumber(level6EntityDetails.edit.codeBusinessLandlineNumber);
    addLevel6Entity.enterLevel6BusinessLandlineNumber(level6EntityDetails.edit.businessLandlineNumber);
    addLevel6Entity.enterLevel6CountryCode(level6EntityDetails.edit.countryCode)
    addLevel6Entity.enterLevel6Timezone(level6EntityDetails.edit.timezone);
    addLevel6Entity.enterLevel6PriceCard(level6EntityDetails.edit.priceCard);
});

When('I search for edited Level 6 Entity', () => {
	memp.enterSearch(level6EntityDetails.edit.level6EntityName);
});

Then('I click Yes and edit all the fields with Level 6 Entity information', () => {
	//addMarket.enterMarketName(addMarketDetails.marketName);
	addLevel6Entity.enterLevel6EntityName(level6EntityName);
    addLevel6Entity.enterLevel6EntityReference(level6EntityName);
    addLevel6Entity.enterLevel6BillTo(level6EntityName);
    addLevel6Entity.enterLevel6TradeCode(level6EntityDetails.add.tradeCode);
    addLevel6Entity.selectLevel6BrandType(level6EntityDetails.add.brandType);
    //addLevel6Entity.enterLevel6BrandCode(level6EntityDetails.add.brandCode);
    //addLevel6Entity.setLevel6EntityStatus(level6EntityDeatails.add.level6EntityStatus);
    addLevel6Entity.enterLevel6BusinessEmailAddress(level6EntityDetails.add.businessEmailAddress);
    addLevel6Entity.enterLevel6CodeBusinessLandlineNumber(level6EntityDetails.add.codeBusinessLandlineNumber);
    addLevel6Entity.enterLevel6BusinessLandlineNumber(level6EntityDetails.add.businessLandlineNumber);
    addLevel6Entity.enterLevel6CountryCode(level6EntityDetails.add.countryCode)
    addLevel6Entity.enterLevel6Timezone(level6EntityDetails.add.timezone);
    addLevel6Entity.enterLevel6PriceCard(level6EntityDetails.add.priceCard);
});
