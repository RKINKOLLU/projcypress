import addMarketPage from '../PageObjects/addMarketPage';
import marketEntityManagementPage from '../PageObjects/marketEntityManagementPage';
import addLevel2EntityPage from '../PageObjects/addLevel2EntityPage';
import addLevel3EntityPage from '../PageObjects/addLevel3EntityPage';
const addMarketDetails = require('../../fixtures/addMarketDetails.json');
const level3EntityDetails = require('../../fixtures/level3EntityDetails.json');
const level2EntityDetails = require('../../fixtures/level2EntityDetails.json')
let addMarket = new addMarketPage();
let memp = new marketEntityManagementPage();
let addLevel2Entity = new addLevel2EntityPage();
let addLevel3Entity = new addLevel3EntityPage();
const marketValue = addMarketDetails.autodata.prefix; //+ id + '_Demo';
const level3EntityName = marketValue+'_L3'
const level2EntityName = marketValue+'_L2'

When('I search for Level 2 Entity', () => {
	memp.enterSearch(level2EntityName);
});

When('I search for Level 3 Entity', () => {
    memp.enterSearch(level3EntityName);
});

Then('Level 3 Entity is created', () => {
	memp.enterSearch(level3EntityName);
});

Then('I click Yes and edit all the fields in Level 3 Entity', () => {
	//addMarket.enterMarketName(addMarketDetails.marketName);
	addLevel3Entity.enterLevel3EntityName(level3EntityDetails.edit.level3EntityName);
    addLevel3Entity.enterLevel3EntityReference(level3EntityDetails.edit.level3EntityReference);
    addLevel3Entity.enterLevel3BillTo(level3EntityDetails.edit.billTo);
    addLevel3Entity.enterLevel3TradeCode(level3EntityDetails.edit.tradeCode);
    addLevel3Entity.selectLevel3BrandType(level3EntityDetails.edit.brandType);
    //addLevel3Entity.enterLevel3BrandCode(level3EntityDetails.edit.brandCode);
    //addLevel3Entity.setLevel3EntityStatus(level3EntityDeatails.edit.level3EntityStatus);
    addLevel3Entity.enterLevel3BusinessEmailAddress(level3EntityDetails.edit.businessEmailAddress);
    addLevel3Entity.enterLevel3CodeBusinessLandlineNumber(level3EntityDetails.edit.codeBusinessLandlineNumber);
    addLevel3Entity.enterLevel3BusinessLandlineNumber(level3EntityDetails.edit.businessLandlineNumber);
    addLevel3Entity.enterLevel3CountryCode(level3EntityDetails.edit.countryCode)
    addLevel3Entity.enterLevel3Timezone(level3EntityDetails.edit.timezone);
    addLevel3Entity.enterLevel3PriceCard(level3EntityDetails.edit.priceCard);
});

Then('I click Yes and edit all the fields with Level 3 Entity information', () => {
	//addMarket.enterMarketName(addMarketDetails.marketName);
	addLevel3Entity.enterLevel3EntityName(level3EntityName);
    addLevel3Entity.enterLevel3EntityReference(level3EntityName);
    addLevel3Entity.enterLevel3BillTo(level3EntityName);
    addLevel3Entity.enterLevel3TradeCode(level3EntityDetails.add.tradeCode);
    addLevel3Entity.selectLevel3BrandType(level3EntityDetails.add.brandType);
    //addLevel3Entity.enterLevel3BrandCode(level3EntityDetails.add.brandCode);
    //addLevel3Entity.setLevel3EntityStatus(level3EntityDeatails.add.level3EntityStatus);
    addLevel3Entity.enterLevel3BusinessEmailAddress(level3EntityDetails.add.businessEmailAddress);
    addLevel3Entity.enterLevel3CodeBusinessLandlineNumber(level3EntityDetails.add.codeBusinessLandlineNumber);
    addLevel3Entity.enterLevel3BusinessLandlineNumber(level3EntityDetails.add.businessLandlineNumber);
    addLevel3Entity.enterLevel3CountryCode(level3EntityDetails.add.countryCode)
    addLevel3Entity.enterLevel3Timezone(level3EntityDetails.add.timezone);
    addLevel3Entity.enterLevel3PriceCard(level3EntityDetails.add.priceCard);
});

When('I enter all mandatory fields with Existing Level 3 Entity Name', () => {
	//addMarket.enterMarketName(addMarketDetails.marketName);
	addLevel3Entity.enterLevel3EntityName(level3EntityName);
    addLevel3Entity.enterLevel3EntityReference(level3EntityName);
    addLevel3Entity.enterLevel3TradeCode(level3EntityDetails.add.tradeCode);
    addLevel3Entity.selectLevel3BrandType(level3EntityDetails.add.brandType);
    addLevel3Entity.enterLevel3BrandCode(level3EntityDetails.add.brandCode);
    //addLevel3Entity.setLevel3EntityStatus(level3EntityDeatails.add.level3EntityStatus);
    addLevel3Entity.enterLevel3BusinessEmailAddress(level3EntityDetails.add.businessEmailAddress);
    addLevel3Entity.enterLevel3CodeBusinessLandlineNumber(level3EntityDetails.add.codeBusinessLandlineNumber);
    addLevel3Entity.enterLevel3BusinessLandlineNumber(level3EntityDetails.add.businessLandlineNumber);
    addLevel3Entity.enterLevel3CountryCode(level3EntityDetails.add.countryCode)
});

When('I enter all mandatory fields', () => {
    //addMarket.enterMarketName(addMarketDetails.marketName);
	addLevel3Entity.enterLevel3EntityName(level3EntityName);
    addLevel3Entity.enterLevel3EntityReference(level3EntityName);
    addLevel3Entity.enterLevel3TradeCode(level3EntityDetails.add.tradeCode);
    addLevel3Entity.selectLevel3BrandType(level3EntityDetails.add.brandType);
    addLevel3Entity.enterLevel3BrandCode(level3EntityDetails.add.brandCode);
    //addLevel3Entity.setLevel3EntityStatus(level3EntityDeatails.add.level3EntityStatus);
    addLevel3Entity.enterLevel3BusinessEmailAddress(level3EntityDetails.add.businessEmailAddress);
    addLevel3Entity.enterLevel3CodeBusinessLandlineNumber(level3EntityDetails.add.codeBusinessLandlineNumber);
    addLevel3Entity.enterLevel3BusinessLandlineNumber(level3EntityDetails.add.businessLandlineNumber);
    addLevel3Entity.enterLevel3CountryCode(level3EntityDetails.add.countryCode)
});
Then('Save button is enabled', () => {
	addLevel3Entity.validateSaveButton('not.be.disabled');
});

When('I reselect the Parent Entity', () => {
	addLevel3Entity.enterParentEntity(level2EntityName);
});
Then('all mandatory fields get cleared', () => {
	cy.get('#TextBox-level3EntityName').should('be.empty')
    cy.get('#TextBox-level3EntityReference').should('be.empty')
    cy.get('#TextBox-level3TradeCode').should('be.empty')
    cy.get('#TextBox-level3BrandCode').should('be.empty')
    cy.get('#TextBox-level3ContactEmail').should('be.empty')
    cy.get('#TextBox-level3ContactPhoneCountry').should('be.empty')
    cy.get('#TextBox-level3ContactPhone').should('be.empty')
    //cy.get('#Dropdown-level3BrandType').contains('Select Brand Type')
});

When('I clear each mandatory field, the error msg is displayed and save button is disabled', datatable => {
    datatable.hashes().forEach(row => {
        cy.get(row.field,{timeout:200}).clear();
        cy.exec('"C:/Program Files (x86)/Bandicam/bdcam_nonadmin.exe" /screenshot');
        //cy.exec('C:/i_view64.exe /capture=1 /convert="Execution_screenshots/wholescreen.png"');
        addMarket.validateErrorMsgOnFields(row.errorMsg);
        addLevel2Entity.validateSaveButton('not.to.enabled');
        cy.get(row.field).clear().type(row.enterValue);
    });
});

When('I dont select any Brand Type', () => {
	addLevel3Entity.selectLevel3BrandType('Select Brand Type')
});

Then('Brand code is cleared', () => {
	cy.get('#TextBox-level3BrandCode').should('be.empty')
    addMarket.validateErrorMsgOnFields('Brand Code is required');
    addLevel3Entity.selectLevel3BrandType(level3EntityDetails.add.brandType);
    addLevel3Entity.enterLevel3BrandCode(level3EntityDetails.add.brandCode);
});

When('I search for edited Level 3 Entity', () => {
	memp.enterSearch(level3EntityDetails.edit.level3EntityName);
});

