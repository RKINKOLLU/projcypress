import addMarketPage from '../PageObjects/addMarketPage';
import marketEntityManagementPage from '../PageObjects/marketEntityManagementPage';
import addLevel5EntityPage from '../PageObjects/addLevel5EntityPage';
import addLevel2EntityPage from '../PageObjects/addLevel2EntityPage';
const level5EntityDetails = require('../../fixtures/level5EntityDetails.json');
const addMarketDetails = require('../../fixtures/addMarketDetails.json');
let addMarket = new addMarketPage();
let memp = new marketEntityManagementPage();
let addLevel2Entity = new addLevel2EntityPage();
let addLevel5Entity = new addLevel5EntityPage();
const marketValue = addMarketDetails.autodata.prefix; //+ id + '_Demo';
const level5EntityName = marketValue + '_L5';
const partnerName = marketValue + '_P';

When('I search for parent Entity', () => {
	memp.enterSearch(partnerName);
});

When('I enter all mandatory fields', () => {
    //addMarket.enterMarketName(addMarketDetails.marketName);
	addLevel5Entity.enterLevel5EntityName(level5EntityName);
    addLevel5Entity.enterLevel5EntityReference(level5EntityName);
    addLevel5Entity.enterLevel5TradeCode(level5EntityDetails.add.tradeCode);
    addLevel5Entity.selectLevel5BrandType(level5EntityDetails.add.brandType);
    addLevel5Entity.enterLevel5BrandCode(level5EntityDetails.add.brandCode);
    //addLevel5Entity.setLevel5EntityStatus(level5EntityDeatails.add.level5EntityStatus);
    addLevel5Entity.enterLevel5BusinessEmailAddress(level5EntityDetails.add.businessEmailAddress);
    addLevel5Entity.enterLevel5CodeBusinessLandlineNumber(level5EntityDetails.add.codeBusinessLandlineNumber);
    addLevel5Entity.enterLevel5BusinessLandlineNumber(level5EntityDetails.add.businessLandlineNumber);
    addLevel5Entity.enterLevel5CountryCode(level5EntityDetails.add.countryCode)
});

When('I reselect the Parent Entity', () => {
	addLevel2Entity.enterParentEntity(partnerName);
});

Then('all mandatory fields get cleared', () => {
	cy.get('#TextBox-level5EntityName').should('be.empty')
    cy.get('#TextBox-level5EntityReference').should('be.empty')
    cy.get('#TextBox-level5TradeCode').should('be.empty')
    cy.get('#TextBox-level5BrandCode').should('be.empty')
    cy.get('#TextBox-level5ContactEmail').should('be.empty')
    cy.get('#TextBox-level5ContactPhoneCountry').should('be.empty')
    cy.get('#TextBox-level5ContactPhone').should('be.empty')
    //cy.get('#Dropdown-level5BrandType').contains('Select Brand Type')
});

When('I dont select any Brand Type', () => {
	addLevel5Entity.selectLevel5BrandType('Select Brand Type')
});

Then('Brand code is cleared', () => {
	cy.get('#TextBox-level5BrandCode').should('be.empty')
    addMarket.validateErrorMsgOnFields('Brand Code is required');
    addLevel5Entity.selectLevel5BrandType(level5EntityDetails.add.brandType);
    addLevel5Entity.enterLevel5BrandCode(level5EntityDetails.add.brandCode);
});

Then('Level 5 Entity is created', () => {
	memp.enterSearch(level5EntityDetails.add.level5EntityName);
});

When('I enter all mandatory fields with Existing Level 5 Entity Name', () => {
	//addMarket.enterMarketName(addMarketDetails.marketName);
	addLevel5Entity.enterLevel5EntityName(level5EntityName);
    addLevel5Entity.enterLevel5EntityReference(level5EntityName);
    addLevel5Entity.enterLevel5TradeCode(level5EntityDetails.add.tradeCode);
    addLevel5Entity.selectLevel5BrandType(level5EntityDetails.add.brandType);
    addLevel5Entity.enterLevel5BrandCode(level5EntityDetails.add.brandCode);
    //addLevel5Entity.setLevel5EntityStatus(level5EntityDeatails.add.level5EntityStatus);
    addLevel5Entity.enterLevel5BusinessEmailAddress(level5EntityDetails.add.businessEmailAddress);
    addLevel5Entity.enterLevel5CodeBusinessLandlineNumber(level5EntityDetails.add.codeBusinessLandlineNumber);
    addLevel5Entity.enterLevel5BusinessLandlineNumber(level5EntityDetails.add.businessLandlineNumber);
    addLevel5Entity.enterLevel5CountryCode(level5EntityDetails.add.countryCode)
});

When('I search for Level 5 Entity', () => {
	memp.enterSearch(level5EntityName);
});

Then('I click Yes and edit all the fields in Level 5 Entity', () => {
	//addMarket.enterMarketName(addMarketDetails.marketName);
	addLevel5Entity.enterLevel5EntityName(level5EntityDetails.edit.level5EntityName);
    addLevel5Entity.enterLevel5EntityReference(level5EntityDetails.edit.level5EntityReference);
    addLevel5Entity.enterLevel5BillTo(level5EntityDetails.edit.billTo);
    addLevel5Entity.enterLevel5TradeCode(level5EntityDetails.edit.tradeCode);
    addLevel5Entity.selectLevel5BrandType(level5EntityDetails.edit.brandType);
    //addLevel5Entity.enterLevel5BrandCode(level5EntityDetails.edit.brandCode);
    //addLevel5Entity.setLevel5EntityStatus(level5EntityDeatails.edit.level5EntityStatus);
    addLevel5Entity.enterLevel5BusinessEmailAddress(level5EntityDetails.edit.businessEmailAddress);
    addLevel5Entity.enterLevel5CodeBusinessLandlineNumber(level5EntityDetails.edit.codeBusinessLandlineNumber);
    addLevel5Entity.enterLevel5BusinessLandlineNumber(level5EntityDetails.edit.businessLandlineNumber);
    addLevel5Entity.enterLevel5CountryCode(level5EntityDetails.edit.countryCode)
    addLevel5Entity.enterLevel5Timezone(level5EntityDetails.edit.timezone);
    addLevel5Entity.enterLevel5PriceCard(level5EntityDetails.edit.priceCard);
});

When('I search for edited Level 5 Entity', () => {
	memp.enterSearch(level5EntityDetails.edit.level5EntityName);
});

Then('I click Yes and edit all the fields with Level 5 Entity information', () => {
	//addMarket.enterMarketName(addMarketDetails.marketName);
	addLevel5Entity.enterLevel5EntityName(level5EntityName);
    addLevel5Entity.enterLevel5EntityReference(level5EntityName);
    addLevel5Entity.enterLevel5BillTo(level5EntityName);
    addLevel5Entity.enterLevel5TradeCode(level5EntityDetails.add.tradeCode);
    addLevel5Entity.selectLevel5BrandType(level5EntityDetails.add.brandType);
    //addLevel5Entity.enterLevel5BrandCode(level5EntityDetails.add.brandCode);
    //addLevel5Entity.setLevel5EntityStatus(level5EntityDeatails.add.level5EntityStatus);
    addLevel5Entity.enterLevel5BusinessEmailAddress(level5EntityDetails.add.businessEmailAddress);
    addLevel5Entity.enterLevel5CodeBusinessLandlineNumber(level5EntityDetails.add.codeBusinessLandlineNumber);
    addLevel5Entity.enterLevel5BusinessLandlineNumber(level5EntityDetails.add.businessLandlineNumber);
    addLevel5Entity.enterLevel5CountryCode(level5EntityDetails.add.countryCode)
    addLevel5Entity.enterLevel5Timezone(level5EntityDetails.add.timezone);
    addLevel5Entity.enterLevel5PriceCard(level5EntityDetails.add.priceCard);
});
