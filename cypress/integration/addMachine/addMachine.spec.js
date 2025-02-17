import addMarketPage from '../PageObjects/addMarketPage';
import marketEntityManagementPage from '../PageObjects/marketEntityManagementPage';
import machineManagementPage from '../PageObjects/machineManagementPage';
import addMachinePage from '../PageObjects/addMachinePage';
import addLevel2EntityPage from '../PageObjects/addLevel2EntityPage';
const addMachineDetails = require('../../fixtures/addMachineDetails.json');
const addMarketDetails = require('../../fixtures/addMarketDetails.json');
let addMarket = new addMarketPage();
let memp = new marketEntityManagementPage();
let mm = new machineManagementPage();
let addLevel2Entity = new addLevel2EntityPage();
let addMachine = new addMachinePage();
const marketValue = addMarketDetails.autodata.prefix; //+ id + '_Demo';
const siteName = marketValue + '_SiteA';
//const level6EntityName = marketValue + '_L6';

When('I search for parent Entity', () => {
    memp.enterSearch(siteName);
});

Given('I enter all mandatory fields', () => {
    //addMachine.enterParentEntity(siteName);
    addMachine.selectMachineType(addMachineDetails.add.machineType)
    addMachine.enterMachineSerialNumber(addMachineDetails.add.machineSerialNumber);
    addMachine.enterMachineReference(addMachineDetails.add.machineReference);
    addMachine.selectPropositionType(addMachineDetails.add.propositionType);
    //addMachine.setMachineEntityStatus(addMachineDetails.add.machineEntityStatus);
    addMachine.selectCommissioningStatus(addMachineDetails.add.commissioningStatus);
    //addMachine.selectWorkingStatus(addMachineDetails.add.workingStatus);
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
});

When('I reselect the Parent Site Entity', () => {
    addMachine.enterParentEntity(siteName);
});

Then('machine serial number, reference no and working state fields get cleared', () => {
    cy.get('#TextBox-machineSerialNumber').should('be.empty');
    cy.get('#TextBox-machineReference').should('be.empty');
    cy.get('#Dropdown-machineWorkingStatus').contains('Disabled')
});

When('I dont select any Commissioning Status', () => {
    addMachine.selectCommissioningStatus('Select Commissioning State');
});

When('I dont select any Machine Type', () => {
	addMachine.selectMachineType('Select Machine Type')
});

When('I dont select any Proposition Type', () => {
	addMachine.selectPropositionType('Select Proposition Type')
});

Then('error msg {string} is displayed', (args1) => {
    addMarket.validateErrorMsgOnFields(args1);
    addMachine.validateSaveAndNextButton('not.to.enabled');
});

When('I select the Commissioning Status', () => {
    addMachine.selectCommissioningStatus(addMachineDetails.add.commissioningStatus);
});

When('I dont select any Working Status', () => {
    addMachine.selectWorkingStatus('Select Working Status')
});

Then('I navigate to Configuration page', () => {
	cy.wait(3500)
    cy.get('#btn-save-configuation > .mat-button-wrapper',{timeout:20000}).should('be.visible');
});

Given('I click on Ingredients Setup button', () => {
	cy.contains('Ingredients Setup').click().wait(200);
});

Given('I click on Ingredients Setup button in Edit Machine Page', () => {
	cy.contains('Ingredients Setup').click().wait(200);
});

When('I select a machine in configuration page', () => {
	addMachine.selectConfigMachineType(addMachineDetails.add.config.machineType);
});

When('I click on Save button', () => {
	addMachine.clickSaveButton();
});

Then('Machine is created', () => {
    cy.get('#menu-machine > .icon-sidebar').click();
	mm.enterSearch(addMachineDetails.add.machineSerialNumber);
});


When('I enter all mandatory fields with Existing Machine Name', () => {
	//addMachine.enterParentEntity(siteName);
    addMachine.selectMachineType(addMachineDetails.add.machineType)
    addMachine.enterMachineSerialNumber(addMachineDetails.add.machineSerialNumber);
    addMachine.enterMachineReference(addMachineDetails.add.machineReference);
    addMachine.selectPropositionType(addMachineDetails.add.propositionType);
    addMachine.selectCommissioningStatus(addMachineDetails.add.commissioningStatus);
});

When('I Navigate to Machine Management screen', () => {
	memp.clickMachineManagementButton()
});

When('I search for the Machine Entity', () => {
	mm.enterSearch(addMachineDetails.add.machineSerialNumber);
});

When('I select the Machine and click View button', () => {
	mm.clickViewMachine(addMachineDetails.edit.machineSerialNumber)
});

Then('I click Yes and edit all the fields in Machine Entity', () => {
	//addMachine.enterParentEntity(siteName);
    addMachine.selectMachineType(addMachineDetails.edit.machineType)
    addMachine.enterMachineSerialNumber(addMachineDetails.edit.machineSerialNumber);
    addMachine.enterMachineReference(addMachineDetails.edit.machineReference);
    addMachine.selectPropositionType(addMachineDetails.edit.propositionType);
    //addMachine.setMachineEntityStatus(addMachineDetails.edit.machineEntityStatus);
    addMachine.selectCommissioningStatus(addMachineDetails.edit.commissioningStatus);
    // addMachine.selectWorkingStatus(addMachineDetails.edit.workingStatus);
    addMachine.enterPriceCard(addMachineDetails.edit.priceCard);
    //addMachine.enterCurrency(addMachineDetails.edit.currency);

    addMachine.enterPrimaryAlarm1stContactEmail(addMachineDetails.edit.primaryAlarm1stContactEmail);
    addMachine.enterCodePrimaryAlarm1stContactMobileNumber(addMachineDetails.edit.codePrimaryAlarm1stContactMobileNumber);
    addMachine.enterPrimaryAlarm1stContactMobileNumber(addMachineDetails.edit.primaryAlarm1stContactMobileNumber);

    addMachine.enterPrimaryAlarm2ndContactEmail(addMachineDetails.edit.primaryAlarm2ndContactEmail);
    addMachine.enterCodePrimaryAlarm2ndContactMobileNumber(addMachineDetails.edit.codePrimaryAlarm2ndContactMobileNumber);
    addMachine.enterPrimaryAlarm2ndContactMobileNumber(addMachineDetails.edit.primaryAlarm2ndContactMobileNumber);

    addMachine.enterSecondaryAlarm1stContactEmail(addMachineDetails.edit.secondaryAlarm1stContactEmail);
    addMachine.enterCodeSecondaryAlarm1stContactMobileNumber(addMachineDetails.edit.codeSecondaryAlarm1stContactMobileNumber);
    addMachine.enterSecondaryAlarm1stContactMobileNumber(addMachineDetails.edit.secondaryAlarm1stContactMobileNumber);

    addMachine.enterSecondaryAlarm2ndContactEmail(addMachineDetails.edit.secondaryAlarm2ndContactEmail);
    addMachine.enterCodeSecondaryAlarm2ndContactMobileNumber(addMachineDetails.edit.codeSecondaryAlarm2ndContactMobileNumber);
    addMachine.enterSecondaryAlarm2ndContactMobileNumber(addMachineDetails.edit.secondaryAlarm2ndContactMobileNumber);

    addMachine.enterMachineLocation(addMachineDetails.edit.machineLocation);
    //addMachine.enterPaymentSystemType(addMachineDetails.edit.paymentSystemType);
    addMachine.enterPaymentTerminalId(addMachineDetails.edit.paymentTerminalId);
    addMachine.enterGeoPositionLatitude(addMachineDetails.edit.geoPositionLatitude);
    addMachine.enterGeoPositionLongitude(addMachineDetails.edit.geoPositionLongitude);
});

When('I search for edited Machine Entity', () => {
	cy.get('#menu-machine > .icon-sidebar').click();
	mm.enterSearch(addMachineDetails.edit.machineSerialNumber);
});

Then('I click Yes and edit all the fields in Machine Entity information', () => {
	//addMachine.enterParentEntity(siteName);
    addMachine.selectMachineType(addMachineDetails.add.machineType)
    addMachine.enterMachineSerialNumber(addMachineDetails.add.machineSerialNumber);
    addMachine.enterMachineReference(addMachineDetails.add.machineReference);
    addMachine.selectPropositionType(addMachineDetails.add.propositionType);
    //addMachine.setMachineEntityStatus(addMachineDetails.add.machineEntityStatus);
    addMachine.selectCommissioningStatus(addMachineDetails.add.commissioningStatus);
    // addMachine.selectWorkingStatus(addMachineDetails.add.workingStatus);
    addMachine.enterPriceCard(addMachineDetails.add.priceCard);
    //addMachine.enterCurrency(addMachineDetails.add.currency);

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
