//import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import addMarketPage from '../PageObjects/addMarketPage';
import machineManagementPage from '../PageObjects/machineManagementPage';
import marketEntityManagementPage from '../PageObjects/marketEntityManagementPage';
const addMarketDetails = require('../../fixtures/addMarketDetails.json');
let addMarket = new addMarketPage();
let memp = new marketEntityManagementPage();

const uuid = () => Cypress._.random(0, 1e6);
const id = uuid();
const marketValue = addMarketDetails.autodata.prefix; //+ id + '_Demo';
const franchiseId = marketValue+'_Franchise'; //addMarketDetails.add.franchiseId
const marketName = marketValue+'_Market'

When('I search for Market and click on Edit button', () => {
	memp.enterSearch(marketName);
    memp.clickEditMarket();
});

When('I click on Save and next button', () => {
    cy.wait(3000);
	cy.get('#btn-save-next-entity > .mat-button-wrapper').click();
});

When('I click  on Next button', () => {
    cy.wait(3000);
	cy.get('#btn-save-next-entity > .mat-button-wrapper').click();
});

When('I enter all the details in the Market page', () => {
    //addMarket.clickAddMarket();
    addMarket.enterFranchiseId(franchiseId);
    addMarket.enterMarketName(marketName);
    addMarket.enterAdditionalInformation(addMarketDetails.add.additionalInformation);
    addMarket.enterBillTo(marketName);
    //addMarket.setMarketEntityStatus(addMarketDetails.add.marketEntityStatus);
    addMarket.enterCountryCode(addMarketDetails.add.countryCode);
    addMarket.enterTimezone(addMarketDetails.add.timeZone);
    addMarket.enterBusinessEmailAddress(addMarketDetails.add.businessEmailAddress);
    addMarket.enterAreaCodeBusinessLandlineNumber(addMarketDetails.add.areaCodeBusinessLandlineNumber);
    addMarket.enterBusinessLandlineNumber(addMarketDetails.add.businessLandlineNumber);
    addMarket.enterAlarmsEscalationEmail(addMarketDetails.add.alarmsEscalationEmail);
    addMarket.selectCupSizeSmall(addMarketDetails.add.cupSizeSmall);
    addMarket.selectCupSizeMedium(addMarketDetails.add.cupSizeMedium);
    addMarket.selectCupSizeLarge(addMarketDetails.add.cupSizeLarge);
    addMarket.selectPriceCard(addMarketDetails.add.priceCard);
    addMarket.enterParentOrganizationName(addMarketDetails.add.parentOrganizationName);
    addMarket.selectCocaColaRegion(addMarketDetails.add.cocaColaRegion);
    addMarket.clickSaveAndNext();
    addMarket.validateMarketSuccessfulDialog();
});


When('I setup different market level', () => {
    addMarket.setLevel2EntityReference(addMarketDetails.add.level2EntityReference);
    addMarket.setLevel2Child(addMarketDetails.add.level2Child);
    addMarket.setLevel3EntityReference(addMarketDetails.add.level3EntityReference);
    addMarket.setLevel3Child(addMarketDetails.add.level3Child);
    addMarket.setPartnerReference(addMarketDetails.add.partnerReference);
    addMarket.setLevel5EntityReference(addMarketDetails.add.level5EntityReference);
    addMarket.setLevel5Child(addMarketDetails.add.level5Child);
    addMarket.setLevel6EntityReference(addMarketDetails.add.level6EntityReference);
    addMarket.setLevel6Child(addMarketDetails.add.level6Child);
    addMarket.setSiteReference(addMarketDetails.add.siteReference);
    addMarket.setMachineReference(addMarketDetails.add.machineReference);
});

When('I click Save Market level button', () => {
    addMarket.clickSaveMarketLevelSetup();
});

When('I click Next button in Market level button', () => {
	addMarket.clickNextButton();
});

Given('I select all Mandatory values in Manage Ingredients', () => {
    cy.wait(500);
	cy.contains('Manage Ingredients').click();
    addMarket.selectCoffeeTypes(addMarketDetails.coffeeTypes.CC);
    addMarket.selectCoffeeTypes(addMarketDetails.coffeeTypes.KA);
    addMarket.selectCoffeeTypes(addMarketDetails.coffeeTypes.MI);
    addMarket.selectMilkTypes(addMarketDetails.milkTypes.A2);
    addMarket.selectMilkTypes(addMarketDetails.milkTypes.B2);
    addMarket.selectMilkTypes(addMarketDetails.milkTypes.B1);
    addMarket.selectSyrups(addMarketDetails.syrups.SUG);
    addMarket.selectSyrups(addMarketDetails.syrups.SVN);
    addMarket.selectSyrups(addMarketDetails.syrups.CAR);
});

When('I click on Save button', () => {
	cy.wait(1000);
    addMarket.clickSave();
    //cy.get('#btn-save-configuation > .mat-button-wrapper', { timeout: 1000 }).click().wait(1000);
    //cy.get('#btn-add-machine > .mat-button-wrapper', { timeout: 1000 }).should('be.visible');
    cy.wait(2000);
});


When('I select all Mandatory values in Ingredients setup', () => {
    cy.wait(500);
	cy.contains('Ingredients Setup').click();
    addMarket.selectSchaererSoulGrinder1(addMarketDetails.coffeeTypes.MI);
    addMarket.selectSchaererSoulGrinder2(addMarketDetails.coffeeTypes.CC);
    addMarket.selectSchaererSoulMilk0(addMarketDetails.milkTypes.A2);
    addMarket.selectSchaererSoulMilk1(addMarketDetails.milkTypes.B2);
    addMarket.selectSchaererSoulSyrups1(addMarketDetails.syrups.SUG);
    addMarket.selectSchaererSoulSyrups2(addMarketDetails.syrups.SVN);
    addMarket.selectWMF1500Grinder0(addMarketDetails.coffeeTypes.MI);
    addMarket.selectWMF1500Grinder1(addMarketDetails.coffeeTypes.KA);
    addMarket.selectWMF1500Milk0(addMarketDetails.milkTypes.B1);
    addMarket.selectWMF1500Milk1(addMarketDetails.milkTypes.A2);
    addMarket.selectWMF1500Syrups1(addMarketDetails.syrups.SVN);
    addMarket.selectWMF1500Syrups2(addMarketDetails.syrups.CAR);
});

Then('I acknowledge the confirmation popup by clicking Yes button', () => {
    addMarket.clickYesUpdateConfirmation();
});

Then('I search for the created market', () => {
    memp.enterSearch(marketName);
});

Then('I view the market details and market level setup', () => {
    memp.clickViewMarket();
    addMarket.clickMarketLevelSetup();
    cy.contains('Configurations').click().wait(200);
    addMarket.clickCancelMarketLevel();
});

When('I have entered all the mandatory fields', () => {
    addMarket.enterMarketName(marketName);
    addMarket.enterCountryCode(addMarketDetails.add.countryCode);
    addMarket.enterBusinessEmailAddress(addMarketDetails.add.businessEmailAddress);
    addMarket.enterAreaCodeBusinessLandlineNumber(addMarketDetails.add.areaCodeBusinessLandlineNumber);
    addMarket.enterBusinessLandlineNumber(addMarketDetails.add.businessLandlineNumber);
    addMarket.enterAlarmsEscalationEmail(addMarketDetails.add.alarmsEscalationEmail);
    addMarket.selectCupSizeSmall(addMarketDetails.add.cupSizeSmall);
    addMarket.selectCupSizeMedium(addMarketDetails.add.cupSizeMedium);
    addMarket.selectCupSizeLarge(addMarketDetails.add.cupSizeLarge);
    addMarket.selectCocaColaRegion(addMarketDetails.add.cocaColaRegion);
});

Then('save & next is enabled', () => {
    addMarket.validateSaveAndNext('not.be.disabled');
});

Then('I have entered all the mandatory fields with existing Market Name', () => {
    addMarket.enterMarketName(marketName);
    addMarket.enterCountryCode(addMarketDetails.add.countryCode);
    addMarket.enterBusinessEmailAddress(addMarketDetails.add.businessEmailAddress);
    addMarket.enterAreaCodeBusinessLandlineNumber(addMarketDetails.add.areaCodeBusinessLandlineNumber);
    addMarket.enterBusinessLandlineNumber(addMarketDetails.add.businessLandlineNumber);
    addMarket.enterAlarmsEscalationEmail(addMarketDetails.add.alarmsEscalationEmail);
    addMarket.selectCupSizeSmall(addMarketDetails.add.cupSizeSmall);
    addMarket.selectCupSizeMedium(addMarketDetails.add.cupSizeMedium);
    addMarket.selectCupSizeLarge(addMarketDetails.add.cupSizeLarge);
    addMarket.selectCocaColaRegion(addMarketDetails.add.cocaColaRegion);
});

Then('I have entered all the mandatory fields with existing Bill To', () => {
    addMarket.enterMarketName(marketName+'01');
    addMarket.enterBillTo(marketName)
    addMarket.enterCountryCode(addMarketDetails.add.countryCode);
    addMarket.enterBusinessEmailAddress(addMarketDetails.add.businessEmailAddress);
    addMarket.enterAreaCodeBusinessLandlineNumber(addMarketDetails.add.areaCodeBusinessLandlineNumber);
    addMarket.enterBusinessLandlineNumber(addMarketDetails.add.businessLandlineNumber);
    addMarket.enterAlarmsEscalationEmail(addMarketDetails.add.alarmsEscalationEmail);
    addMarket.selectCupSizeSmall(addMarketDetails.add.cupSizeSmall);
    addMarket.selectCupSizeMedium(addMarketDetails.add.cupSizeMedium);
    addMarket.selectCupSizeLarge(addMarketDetails.add.cupSizeLarge);
    addMarket.selectCocaColaRegion(addMarketDetails.add.cocaColaRegion);
});

When('I select save & next button', () => {
    addMarket.clickSaveAndNext();
});

Then('I see an error msg for already existing Market Name', () => {
    addMarket.validateErrorMsgForAlreadyExistingValues("entity already exists with 'Market Name'. You cannot have duplicate values.");
});

Then('I see an error msg for already existing bill to value', () => {
    addMarket.validateErrorMsgForAlreadyExistingValues("Another entity already exists with 'Bill To'. You cannot have duplicate values.")
});

When('I clear Market Name mandatory fields', () => {
    addMarket.enterMarketName(addMarketDetails.add.emptyString);
});

Then('Save button is disabled and Market Name Error msg {string} is displayed', (args1) => {
    addMarket.validateErrorMsgOnFields(args1);
    addMarket.validateSaveAndNext('not.to.enabled');
    addMarket.enterMarketName(addMarketDetails.add.marketName);
});

When('I clear Country code mandatory fields', () => {
    cy.get('#S-Dropdown-marketCountryCode').type('zzzz');
});

Then('Save button is disabled and Country code Error msg {string} is displayed', (args1) => {
    addMarket.validateErrorMsgOnFields(args1);
    addMarket.validateSaveAndNext('not.to.enabled');
    addMarket.enterCountryCode(addMarketDetails.add.countryCode);
});

When('I clear Business Email Address mandatory fields', () => {
    addMarket.enterBusinessEmailAddress(addMarketDetails.add.emptyString);
});

Then('Save button is disabled and Business Email Address Error msg {string} is displayed', (args1) => {
    addMarket.validateSaveAndNext('not.to.enabled');
    addMarket.validateErrorMsgOnFields(args1);
    addMarket.enterBusinessEmailAddress(addMarketDetails.add.businessEmailAddress);
});

When('I clear Business landline code mandatory fields', () => {
    addMarket.enterAreaCodeBusinessLandlineNumber(addMarketDetails.add.emptyString);
});

Then('Save button is disabled and Business landline code Error msg {string} is displayed', (args1) => {
    addMarket.validateSaveAndNext('not.to.enabled');
    addMarket.validateErrorMsgOnFields(args1);
    addMarket.enterAreaCodeBusinessLandlineNumber(addMarketDetails.add.areaCodeBusinessLandlineNumber);
});

When('I clear Business landline number mandatory fields', () => {
    addMarket.enterBusinessLandlineNumber(addMarketDetails.add.emptyString);
});

Then('Save button is disabled and Business landline number Error msg {string} is displayed', (args1) => {
    addMarket.validateErrorMsgOnFields(args1);
    addMarket.validateSaveAndNext('not.to.enabled');
    addMarket.enterBusinessLandlineNumber(addMarketDetails.add.businessLandlineNumber);
});

When('I clear Alarm email mandatory fields', () => {
    addMarket.enterAlarmsEscalationEmail(addMarketDetails.add.emptyString);
});

Then('Save button is disabled and Alarm email Error msg {string} is displayed', (args1) => {
    addMarket.validateErrorMsgOnFields(args1);
    addMarket.validateSaveAndNext('not.to.enabled');
    addMarket.enterAlarmsEscalationEmail(addMarketDetails.add.alarmsEscalationEmail);
});

When('I clear Cup Size Small mandatory fields', () => {
    addMarket.selectCupSizeSmall('Select Cup Size - Small');
});

Then('Save button is disabled and Cup Size - Small Error msg {string} is displayed', (args1) => {
    addMarket.validateErrorMsgOnFields(args1);
    addMarket.validateSaveAndNext('not.to.enabled');
    addMarket.selectCupSizeSmall(addMarketDetails.add.cupSizeSmall);
});

When('I clear Cup Size Medium mandatory fields', () => {
    addMarket.selectCupSizeMedium('Select Cup Size - Medium');
});

Then('Save button is disabled and Cup Size - Medium Error msg {string} is displayed', (args1) => {
    addMarket.validateErrorMsgOnFields(args1);
    addMarket.validateSaveAndNext('not.to.enabled');
    addMarket.selectCupSizeMedium(addMarketDetails.add.cupSizeMedium);
});

When('I clear Cup Size Large mandatory fields', () => {
    addMarket.selectCupSizeLarge('Select Cup Size - Large');
});

Then('Save button is disabled and Cup Size - Large Error msg {string} is displayed', (args1) => {
    addMarket.validateErrorMsgOnFields(args1);
    addMarket.validateSaveAndNext('not.to.enabled');
    addMarket.selectCupSizeLarge(addMarketDetails.add.cupSizeLarge);
});

When('I clear Coca Cola Region mandatory fields', () => {
    addMarket.selectCocaColaRegion('Select Coca Cola Region');
});

Then('Save button is disabled and Coca Cola Region Error msg {string} is displayed', (args1) => {
    addMarket.validateErrorMsgOnFields(args1);
    addMarket.validateSaveAndNext('not.to.enabled');
    addMarket.selectCocaColaRegion(addMarketDetails.add.cocaColaRegion);
});

When('I enter incorrect values in Country Code, I would see following error msg', datatable => {
    datatable.hashes().forEach(row => {
        cy.get('#S-Dropdown-marketCountryCode').clear().type(row.Value)
        addMarket.validateErrorMsgOnFields(row.ErrorMsg);
        addMarket.validateSaveAndNext('not.to.enabled');
    });
});

When('I enter valid Country Code, no warning msg is displayed', () => {
    addMarket.enterCountryCode(addMarketDetails.add.countryCode);
});

When('I enter incorrect values in Timezone, I would see following error msg', datatable => {
    datatable.hashes().forEach(row => {
        cy.get('[tabindex=7]').click().type(row.Value);
        addMarket.validateErrorMsgOnFields(row.ErrorMsg);
        addMarket.validateSaveAndNext('not.to.enabled');
        cy.get('[tabindex=7]').clear();
    });
});

When('I enter valid Timezone, no warning msg is displayed', () => {
    addMarket.enterTimezone(addMarketDetails.add.timeZone);
    addMarket.validateSaveAndNext('not.be.disabled');
});

When('I enter incorrect values in Business Email Address, I would see following error msg', datatable => {
    datatable.hashes().forEach(row => {
        addMarket.enterBusinessEmailAddress(row.Value);
        addMarket.validateErrorMsgOnFields(row.ErrorMsg);
        addMarket.validateSaveAndNext('not.to.enabled');
    });
});

When('I enter valid Business Email Address, no warning msg is displayed', () => {
    addMarket.enterBusinessEmailAddress(addMarketDetails.add.businessEmailAddress);
    addMarket.validateSaveAndNext('not.be.disabled');
});

When('I enter incorrect values in Alarms Escalation Email, I would see following error msg', datatable => {
    datatable.hashes().forEach(row => {
        addMarket.enterAlarmsEscalationEmail(row.Value);
        addMarket.validateErrorMsgOnFields(row.ErrorMsg);
        addMarket.validateSaveAndNext('not.to.enabled');
    });
});

When('I enter valid Alarms Escalation Email, no warning msg is displayed', () => {
    addMarket.enterAlarmsEscalationEmail(addMarketDetails.add.alarmsEscalationEmail);
    addMarket.validateSaveAndNext('not.be.disabled');
});

When('I enter incorrect values in Business Landline Area Code Number, I would see following error msg', datatable => {
    datatable.hashes().forEach(row => {
        addMarket.enterAreaCodeBusinessLandlineNumber(row.Value);
        addMarket.validateErrorMsgOnFields(row.ErrorMsg);
        addMarket.validateSaveAndNext('not.to.enabled');
    });
});

When('I enter valid Business Landline Area Code Number, no warning msg is displayed', () => {
    addMarket.enterAreaCodeBusinessLandlineNumber(addMarketDetails.add.areaCodeBusinessLandlineNumber);
    addMarket.validateSaveAndNext('not.be.disabled');
});

When('I enter incorrect values in Business Landline Number, I would see following error msg', datatable => {
    datatable.hashes().forEach(row => {
        addMarket.enterBusinessLandlineNumber(row.Value);
        addMarket.validateErrorMsgOnFields(row.ErrorMsg);
        addMarket.validateSaveAndNext('not.to.enabled');
    });
});

When('I enter valid Business Landline Number, no warning msg is displayed', () => {
    addMarket.enterBusinessLandlineNumber(addMarketDetails.add.businessLandlineNumber);
    addMarket.validateSaveAndNext('not.be.disabled');
});

When('I enter incorrect values in Price Card, I would see following error msg', datatable => {
    datatable.hashes().forEach(row => {
        cy.get('[tabindex=15]').type(row.Value);
        addMarket.validateErrorMsgOnFields(row.ErrorMsg);
        addMarket.validateSaveAndNext('not.to.enabled');
        cy.get('[tabindex=15]').clear()
    });
});

When('I enter valid Price Card, no warning msg is displayed', () => {
    addMarket.selectPriceCard(addMarketDetails.add.priceCard);
    addMarket.validateSaveAndNext('not.be.disabled');
});

Then('I search for the created market', () => {
    memp.enterSearch(marketValue);
});

When('I select a Market and click on Edit button', () => {
    memp.clickEditMarket();
});

Then('I click Yes and edit all the fields', () => {
	addMarket.enterFranchiseId(addMarketDetails.edit.franchiseId);
    addMarket.enterMarketName(addMarketDetails.edit.marketName);
    addMarket.enterAdditionalInformation(addMarketDetails.edit.additionalInformation);
    addMarket.enterBillTo(addMarketDetails.edit.billTo);
    //addMarket.setMarketEntityStatus(addMarketDetails.edit.marketEntityStatus);
    addMarket.enterTimezone(addMarketDetails.edit.timeZone);
    addMarket.enterBusinessEmailAddress(addMarketDetails.edit.businessEmailAddress);
    addMarket.enterAreaCodeBusinessLandlineNumber(addMarketDetails.edit.areaCodeBusinessLandlineNumber);
    addMarket.enterBusinessLandlineNumber(addMarketDetails.edit.businessLandlineNumber);
    addMarket.enterAlarmsEscalationEmail(addMarketDetails.edit.alarmsEscalationEmail);
    addMarket.selectCupSizeSmall(addMarketDetails.edit.cupSizeSmall);
    addMarket.selectCupSizeMedium(addMarketDetails.edit.cupSizeMedium);
    addMarket.selectCupSizeLarge(addMarketDetails.edit.cupSizeLarge);
    addMarket.selectPriceCard(addMarketDetails.edit.priceCard);
    addMarket.enterParentOrganizationName(addMarketDetails.edit.parentOrganizationName);
    addMarket.selectCocaColaRegion(addMarketDetails.edit.cocaColaRegion);
});

When('I click on Save&Next button', () => {
	addMarket.clickSaveAndNext();
});

Then('I should not able to edit the fields in the Market level setup page', () => {
    cy.get('#radio-level-2-input').should('be.disabled');
    cy.get('#radio-level-3-input').should('be.disabled');
    cy.get('#radio-level-4-reference-input').should('be.disabled');
    cy.get('#radio-level-5-input').should('be.disabled');
    cy.get('#radio-level-6-input').should('be.disabled');
    cy.get('#radio-level-7-reference-input').should('be.disabled');
    cy.get('#radio-level-8-reference-input').should('be.disabled');
});

Then('I click cancel button', () => {
	addMarket.clickCancelMarketLevel();
});
When('I select the Market and I click on view button', () => {
	memp.clickViewMarket()
});

Then('I click Yes and edit all the fields with other information', () => {
	addMarket.enterFranchiseId(franchiseId);
    addMarket.enterMarketName(marketName);
    addMarket.enterAdditionalInformation(addMarketDetails.add.additionalInformation);
    addMarket.enterBillTo(marketName);
    //addMarket.setMarketEntityStatus(addMarketDetails.add.marketEntityStatus);
    //addMarket.enterCountryCode(addMarketDetails.add.countryCode);
    addMarket.enterTimezone(addMarketDetails.add.timeZone);
    addMarket.enterBusinessEmailAddress(addMarketDetails.add.businessEmailAddress);
    addMarket.enterAreaCodeBusinessLandlineNumber(addMarketDetails.add.areaCodeBusinessLandlineNumber);
    addMarket.enterBusinessLandlineNumber(addMarketDetails.add.businessLandlineNumber);
    addMarket.enterAlarmsEscalationEmail(addMarketDetails.add.alarmsEscalationEmail);
    addMarket.selectCupSizeSmall(addMarketDetails.add.cupSizeSmall);
    addMarket.selectCupSizeMedium(addMarketDetails.add.cupSizeMedium);
    addMarket.selectCupSizeLarge(addMarketDetails.add.cupSizeLarge);
    addMarket.selectPriceCard(addMarketDetails.add.priceCard);
    addMarket.enterParentOrganizationName(addMarketDetails.add.parentOrganizationName);
    addMarket.selectCocaColaRegion(addMarketDetails.add.cocaColaRegion);
});
When('I search for the edited market', () => {
	memp.enterSearch(addMarketDetails.edit.marketName);
});
