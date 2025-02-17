import addMarketPage from '../PageObjects/addMarketPage';
import marketEntityManagementPage from '../PageObjects/marketEntityManagementPage';
import addLevel2EntityPage from '../PageObjects/addLevel2EntityPage';
import addLevel3EntityPage from '../PageObjects/addLevel3EntityPage';
import addPartnerPage from '../PageObjects/addPartnerPage';
const addPartnerDetails = require('../../fixtures/addPartnerDetails.json')
const addMarketDetails = require('../../fixtures/addMarketDetails.json');
let addMarket = new addMarketPage();
let memp = new marketEntityManagementPage();
let addLevel2Entity = new addLevel2EntityPage();
let addLevel3Entity = new addLevel3EntityPage();
let addPartner = new addPartnerPage();
const marketValue = addMarketDetails.autodata.prefix; //+ id + '_Demo';
const level3EntityName = marketValue + '_L3';
const partnerName = marketValue + '_P';

When('I search for Level 3 Entity', () => {
    memp.enterSearch(level3EntityName);
});

When('I enter all mandatory fields', () => {
    //addPartner.enterParentEntity(addPartnerDetails.add.parentEntity);
    addPartner.enterPartnerName(partnerName);
    addPartner.enterPartnerReference(partnerName);
    addPartner.selectPartnerCupSizeSmall(addPartnerDetails.add.cupSizeSmall);
    addPartner.selectPartnerCupSizeMedium(addPartnerDetails.add.cupSizeMedium);
    addPartner.selectPartnerCupSizeLarge(addPartnerDetails.add.cupSizeLarge);
    addPartner.enterPartnerTradeCode(addPartnerDetails.add.tradeCode);
    addPartner.selectPartnerBrandType(addPartnerDetails.add.brandType);
    addPartner.enterPartnerBrandCode(addPartnerDetails.add.brandCode);
    //addPartner.setPartnerEntityStatus(level3EntityDeatails.add.level3EntityStatus);
    addPartner.enterPartnerBusinessEmailAddress(addPartnerDetails.add.businessEmailAddress);
    addPartner.enterPartnerCodeBusinessLandlineNumber(addPartnerDetails.add.codeBusinessLandlineNumber);
    addPartner.enterPartnerBusinessLandlineNumber(addPartnerDetails.add.businessLandlineNumber);
    addPartner.enterPartnerCountryCode(addPartnerDetails.add.countryCode);
    addPartner.enterPartnerCurrency(addPartnerDetails.add.currency)
});

When('I reselect the Parent Entity', () => {
    addPartner.enterParentEntity(level3EntityName);
});

Then('all mandatory fields get cleared', () => {
    cy.get('#TextBox-partnerName').should('be.empty');
    cy.get('#TextBox-partnerReference').should('be.empty');
    cy.get('#Dropdown-partnerCupSizeSmall').contains('Select Cup Size - Small');
    cy.get('#Dropdown-partnerCupSizeMedium').contains('Select Cup Size - Medium');
    cy.get('#Dropdown-partnerCupSizeLarge').contains('Select Cup Size - Large');
    cy.get('#TextBox-partnerTradeCode').should('be.empty');
    cy.get('#TextBox-partnerBrandCode').should('be.empty');
    cy.get('#TextBox-partnerContactEmail').should('be.empty');
    cy.get('#TextBox-partnerContactPhoneCountry').should('be.empty');
    cy.get('#TextBox-partnerContactPhone').should('be.empty');
    cy.get('#S-Dropdown-partnerCurrency').should('be.empty');
});

When('I dont Select Brand Type', () => {
    addPartner.selectPartnerBrandType('Select Brand Type');
});

Then('Brand code is cleared', () => {
    cy.get('#TextBox-partnerBrandCode').should('be.empty');
    addMarket.validateErrorMsgOnFields('Brand Code is required');
    addPartner.selectPartnerBrandType(addPartnerDetails.add.brandType);
    addPartner.enterPartnerBrandCode(addPartnerDetails.add.brandCode);
});

Then('error msg {string} is displayed', (args1) => {
    addMarket.validateErrorMsgOnFields(args1);
    addPartner.validateSaveAndNextButton('not.to.enabled');
});

When('I click Save and Next button', () => {
    addPartner.clickSaveAndNextButton()
});

Then('I navigate to Configuration page', () => {
    cy.get('[title="Save"] > .mat-button-wrapper', { timeout: 2000 }).should('be.visible');
});

When('I search for created partner and parter name is displayed in the list', () => {
    memp.enterSearch(partnerName);
});

When('I click on Save button', () => {
    addPartner.clickSaveButton()
});

When('I enter all mandatory fields with Existing Partner Name', () => {
    //addPartner.enterParentEntity(addPartnerDetails.add.parentEntity);
    addPartner.enterPartnerName(partnerName);
    addPartner.enterPartnerReference(partnerName);
    addPartner.selectPartnerCupSizeSmall(addPartnerDetails.add.cupSizeSmall);
    addPartner.selectPartnerCupSizeMedium(addPartnerDetails.add.cupSizeMedium);
    addPartner.selectPartnerCupSizeLarge(addPartnerDetails.add.cupSizeLarge);
    addPartner.enterPartnerTradeCode(addPartnerDetails.add.tradeCode);
    addPartner.selectPartnerBrandType(addPartnerDetails.add.brandType);
    addPartner.enterPartnerBrandCode(addPartnerDetails.add.brandCode);
    //addPartner.setPartnerEntityStatus(level3EntityDeatails.add.level3EntityStatus);
    addPartner.enterPartnerBusinessEmailAddress(addPartnerDetails.add.businessEmailAddress);
    addPartner.enterPartnerCodeBusinessLandlineNumber(addPartnerDetails.add.codeBusinessLandlineNumber);
    addPartner.enterPartnerBusinessLandlineNumber(addPartnerDetails.add.businessLandlineNumber);
    addPartner.enterPartnerCountryCode(addPartnerDetails.add.countryCode);
    addPartner.enterPartnerCurrency(addPartnerDetails.add.currency)
});

When('I search for Partner Entity', () => {
    memp.enterSearch(partnerName);
});

When('I search for edited Partner Entity', () => {
    memp.enterSearch(addPartnerDetails.edit.partnerName);
});

Then('I click Yes and edit all the fields in Partner Entity', () => {
    //addPartner.enterParentEntity(addPartnerDetails.edit.parentEntity);
    addPartner.enterPartnerName(addPartnerDetails.edit.partnerName);
    addPartner.enterPartnerReference(addPartnerDetails.edit.partnerReference);
    addPartner.enterPartnerBillTo(addPartnerDetails.edit.billTo);
    addPartner.selectPartnerCupSizeSmall(addPartnerDetails.edit.cupSizeSmall);
    addPartner.selectPartnerCupSizeMedium(addPartnerDetails.edit.cupSizeMedium);
    addPartner.selectPartnerCupSizeLarge(addPartnerDetails.edit.cupSizeLarge);
    addPartner.enterPartnerPriceCard(addPartnerDetails.edit.priceCard);
    addPartner.enterPartnerTradeCode(addPartnerDetails.edit.tradeCode);
    addPartner.selectPartnerBrandType(addPartnerDetails.edit.brandType);
    //addPartner.enterPartnerBrandCode(addPartnerDetails.edit.brandCode);
    //addPartner.setPartnerEntityStatus(level3EntityDeatails.edit.level3EntityStatus);
    addPartner.enterPartnerBusinessEmailAddress(addPartnerDetails.edit.businessEmailAddress);
    addPartner.enterPartnerCodeBusinessLandlineNumber(addPartnerDetails.edit.codeBusinessLandlineNumber);
    addPartner.enterPartnerBusinessLandlineNumber(addPartnerDetails.edit.businessLandlineNumber);
    addPartner.enterPartnerCountryCode(addPartnerDetails.edit.countryCode);
    addPartner.enterPartnerTimezone(addPartnerDetails.edit.timezone);
    addPartner.enterPartnerCurrency(addPartnerDetails.edit.currency)
});

Then('I click Yes and edit all the fields in Partner Entity information', () => {
    //addPartner.enterParentEntity(addPartnerDetails.edit.parentEntity);
    addPartner.enterPartnerName(partnerName);
    addPartner.enterPartnerReference(partnerName);
    addPartner.enterPartnerBillTo(partnerName);
    addPartner.selectPartnerCupSizeSmall(addPartnerDetails.add.cupSizeSmall);
    addPartner.selectPartnerCupSizeMedium(addPartnerDetails.add.cupSizeMedium);
    addPartner.selectPartnerCupSizeLarge(addPartnerDetails.add.cupSizeLarge);
    addPartner.enterPartnerPriceCard(addPartnerDetails.add.priceCard);
    addPartner.enterPartnerTradeCode(addPartnerDetails.add.tradeCode);
    addPartner.selectPartnerBrandType(addPartnerDetails.add.brandType);
    addPartner.enterPartnerBrandCode(addPartnerDetails.add.brandCode);
    //addPartner.setPartnerEntityStatus(level3EntityDeatails.add.level3EntityStatus);
    addPartner.enterPartnerBusinessEmailAddress(addPartnerDetails.add.businessEmailAddress);
    addPartner.enterPartnerCodeBusinessLandlineNumber(addPartnerDetails.add.codeBusinessLandlineNumber);
    addPartner.enterPartnerBusinessLandlineNumber(addPartnerDetails.add.businessLandlineNumber);
    addPartner.enterPartnerCountryCode(addPartnerDetails.add.countryCode);
    addPartner.enterPartnerTimezone(addPartnerDetails.add.timezone);
    addPartner.enterPartnerCurrency(addPartnerDetails.add.currency);
});
