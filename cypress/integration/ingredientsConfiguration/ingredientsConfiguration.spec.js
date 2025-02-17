import marketEntityManagementPage from '../PageObjects/marketEntityManagementPage';
import ingredientsConfigurationPage from '../PageObjects/ingredientsConfigurationPage';
import addMarketPage from '../PageObjects/addMarketPage';
const addMarketDetails = require('../../fixtures/addMarketDetails.json');
const icd = require('../../fixtures/ingredientsConfigurationDetails.json');
let memp = new marketEntityManagementPage();
let icp = new ingredientsConfigurationPage();
let addMarket = new addMarketPage();
const marketValue = addMarketDetails.autodata.prefix; //+ id + '_Demo';
const drinkName = marketValue + '_D';
const coffeeName = marketValue + '_C';
const milkName = marketValue + '_M';
const syrupName = marketValue + '_S';

When('I click on configuration', () => {
	memp.clickConfigurationMenu();
});

When('I navigate to Incredients Master list', () => {
	icp.clickIngredientsButton();
});

When('I enter new drink, code and select cup Type and Drink Type', () => {
	icp.enterDrink(drinkName);
    icp.enterDrinkCode(icd.ingredience.drinkCode);
    icp.selectCupType(icd.ingredience.cupType);
    icp.selectDrinkType(icd.ingredience.drinkType);
});

When('I click on Add Drink type button', () => {
	icp.clickAddDrinkTypeButton();
});

Then('the added drink is displayed in the list', () => {
	icp.validateDrinkInList(drinkName);
});

Given('I click on Coffee type tab', () => {
	icp.clickTab('Coffee Type');
});

Then('I enter new coffee type and code for it', () => {
	icp.enterCoffeeType(coffeeName);
	icp.enterCoffeeCode(icd.ingredience.coffeeCode);
});

When('I click on Add coffee type button', () => {
	icp.clickAddCoffeeTypeButton();
});

Then('the added coffee type is displayed in the list', () => {
	icp.validateCoffeeInList(coffeeName)
});

Given('I click on Milk type tab', () => {
	icp.clickTab('Milk Type');
});

Then('I enter new milk type and code for it', () => {
	icp.enterMilkType(milkName);
	icp.enterMilkCode(icd.ingredience.milkCode)
});

When('I click on Add Milk type button', () => {
	icp.clickAddMilkTypeButton();
});

Then('the added milk type is displayed in the list', () => {
	icp.validateMilkInList(milkName);
});

Given('I click on Syrups tab', () => {
	icp.clickTab('Syrup');
});

Then('I enter new Syrup type and code for it', () => {
	icp.enterSyrup(syrupName);
	icp.enterSyrupCode(icd.ingredience.syrupCode)
});

When('I click on Add syrups type button', () => {
	icp.clickAddSyrupTypeButton();
});

Then('the added syrup is displayed in the list', () => {
	icp.validateSyrupInList(syrupName);
});

When('I select a market level entity and click on edit', () => {
	memp.clickMenuEntity();
	memp.enterSearch(addMarketDetails.autodata.prefix+'_Market');
	memp.clickEditMarket();
});

When('I navigate to cofiguration tab', () => {
	cy.contains('Configurations').click();
});

When('I click on Manage Ingredients dropdowns', () => {
	cy.contains('Manage Ingredients').click();
});

Then('the added coffee type, Milk type and syrups type should be displayed in the dropdrows list.', () => {
	addMarket.selectCoffeeTypes(coffeeName);
	addMarket.selectMilkTypes(milkName);
	addMarket.selectSyrups(syrupName);
});

When('I select the added Ingredients and navigate to partner level', () => {
	addMarket.clickSave();
	memp.enterSearch(addMarketDetails.autodata.prefix+'_P');
	memp.clickEditMarket();
});

Then('I should able to select the added Ingredients in the Ingredients Setup', () => {
	cy.contains('Configurations').click();
	cy.contains('Ingredients Setup').click();
	cy.get('#mat-select-value-125').click();
	cy.get('[role="listbox"]').contains(coffeeName).click();
	cy.get('#mat-select-value-129').click();
	cy.get('[role="listbox"]').contains(milkName).click();
	cy.get('#mat-select-value-137').click();
	cy.get('[role="listbox"]').contains(syrupName).click();
	addMarket.clickSave();
});

When('I navigate to site level entity', () => {
	memp.enterSearch(addMarketDetails.autodata.prefix+'_SiteA');
	memp.clickEditMarket();
});

Then('I should able to see the added Ingredients are auto populated in the site', () => {
	cy.contains('Configurations').click();
	cy.contains('Ingredients Setup').click();
	cy.get('#Dropdown-machineType > .mat-select-trigger > .mat-select-arrow-wrapper').click();
    cy.get('[role="listbox"]').contains('WMF1500').click();
	cy.get('#mat-select-value-167').contains(coffeeName);
	cy.get('#mat-select-value-171').contains(milkName);
	cy.get('#mat-select-value-179').contains(syrupName);
});

