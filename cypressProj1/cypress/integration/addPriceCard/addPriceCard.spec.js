import marketEntityManagementPage from '../PageObjects/marketEntityManagementPage';
import addPriceCardTemplatePage from '../PageObjects/addPriceCardTemplatePage';
import addPriceCardPage from '../PageObjects/addPriceCardPage';
const addMarketDetails = require('../../fixtures/addMarketDetails.json');
let addPriceCardTemplate = new addPriceCardTemplatePage();
let memp = new marketEntityManagementPage();
let addPriceCard = new addPriceCardPage();
const marketValue = addMarketDetails.autodata.prefix; //+ id + '_Demo';
const templateName = marketValue + '_PriceCardTemplate';
const marketName = marketValue + '_Market';
const partnerName = marketValue + '_P';
const siteName = marketValue + '_SiteZ';
const priceCardName = marketName + '_PriceCard';
const editedPriceCardName = marketName + '_02_PriceCard';
const csv = 'cypress/downloads/' + priceCardName + '.csv';

When('I click on price card template', () => {
	memp.clickPriceCardTemplate();
});

Then('I see price card template management screen', () => {
	cy.get('#btn-add-pricecard-template > .mat-button-wrapper').should('be.visible').wait(200);
});

When('I click on Price Card Template button', () => {
	addPriceCardTemplate.clickPriceCardTemplate();
});

When('I enter all the fields and associate Markets as well', () => {
	addPriceCardTemplate.enterTemplateName(templateName);
	addPriceCardTemplate.selectMarkets('add', marketName);
	addPriceCardTemplate.selectMarkets('add', addMarketDetails.drinks.markets_1);
	addPriceCardTemplate.selectDrinks('add', addMarketDetails.drinks.AMEB);
	addPriceCardTemplate.selectDrinks('add', addMarketDetails.drinks.ESPR);
	addPriceCardTemplate.selectDrinks('add', addMarketDetails.drinks.CHOC);
	addPriceCardTemplate.selectDrinks('add', addMarketDetails.drinks.FLAT);
	addPriceCardTemplate.selectDrinks('add', addMarketDetails.drinks.MOCC);
	addPriceCardTemplate.selectDrinks('add', addMarketDetails.drinks.CRMW);
	addPriceCardTemplate.selectCupSizes('add', addMarketDetails.cupSizes.L);
	addPriceCardTemplate.selectCupSizes('add', addMarketDetails.cupSizes.M);
	addPriceCardTemplate.selectCupSizes('add', addMarketDetails.cupSizes.S);
	addPriceCardTemplate.selectCoffeeTypes('add', addMarketDetails.coffeeTypes.CC);
	addPriceCardTemplate.selectCoffeeTypes('add', addMarketDetails.coffeeTypes.KA);
	addPriceCardTemplate.selectCoffeeTypes('add', addMarketDetails.coffeeTypes.MI);
	addPriceCardTemplate.selectPrimaryCoffeeType(addMarketDetails.coffeeTypes.primaryCoffeeType);
	addPriceCardTemplate.selectMilkTypes('add', addMarketDetails.milkTypes.A2);
	addPriceCardTemplate.selectMilkTypes('add', addMarketDetails.milkTypes.B2);
	addPriceCardTemplate.selectMilkTypes('add', addMarketDetails.milkTypes.B1);
	addPriceCardTemplate.selectPrimaryMilkType(addMarketDetails.milkTypes.primaryMilkType);
	addPriceCardTemplate.selectSyrups('add', addMarketDetails.syrups.SUG);
	addPriceCardTemplate.selectSyrups('add', addMarketDetails.syrups.SVN);
});

When('I click on Save button', () => {
	addPriceCardTemplate.validateSaveButton();
	addPriceCardTemplate.clickSave();
});

Then('price card template is created and displayed in the list', () => {
	addPriceCardTemplate.enterSearchPriceTemplate(templateName);
});

Given('I navigate to Price Card', () => {
	memp.clickPriceCard();
});

Then('I click on Add Price Card button', () => {
	addPriceCard.clickPriceCardButton();
});

Then('I enter Price card Name', () => {
	addPriceCard.enterPriceCardName(priceCardName)
});

Then('I choose the above price card template', () => {
	addPriceCard.selectTemplate(templateName);
});

Then('I click next to go through Drink Pricing widget', () => {
	addPriceCard.clickNext(1);
});

Then('I verify the all the dropdowns in the screen', () => {
	addPriceCard.validateDrinks(addMarketDetails.drinks.AMEB);
	addPriceCard.validateDrinks(addMarketDetails.drinks.ESPR);
	addPriceCard.validateDrinks(addMarketDetails.drinks.CHOC);
	addPriceCard.validateDrinks(addMarketDetails.drinks.FLAT);
	addPriceCard.validateDrinks(addMarketDetails.drinks.MOCC);
	addPriceCard.validateDrinks(addMarketDetails.drinks.CRMW);
	addPriceCard.validateCupSizes(addMarketDetails.cupSizes.L);
	addPriceCard.validateCupSizes(addMarketDetails.cupSizes.M);
	addPriceCard.validateCupSizes(addMarketDetails.cupSizes.S);
});

When('I select multiple Drinks and Cup Sizes', () => {
	addPriceCard.selectDrinks(addMarketDetails.drinks.AMEB);
	addPriceCard.selectDrinks(addMarketDetails.drinks.ESPR);
	addPriceCard.selectDrinks(addMarketDetails.drinks.CHOC);
	addPriceCard.selectDrinks(addMarketDetails.drinks.FLAT);
	addPriceCard.selectCupSizes(addMarketDetails.cupSizes.L);
	addPriceCard.selectCupSizes(addMarketDetails.cupSizes.M);
	addPriceCard.selectCupSizes(addMarketDetails.cupSizes.S);
});

When('I click on Add Drink button', () => {
	addPriceCard.clickAddDrinkButton();
});

Then('the combination of drink and cup sizes are displayed in the section', () => {
	addPriceCard.validateAddPriceCardDrinkTable(1, addMarketDetails.drinks.AMEB);
	addPriceCard.validateAddPriceCardDrinkTable(1, addMarketDetails.cupSizes.L);
	addPriceCard.validateAddPriceCardDrinkTable(1, addMarketDetails.coffeeTypes.primaryCoffeeType);
	addPriceCard.validateAddPriceCardDrinkTable(1, addMarketDetails.milkTypes.primaryMilkType);
	addPriceCard.validateAddPriceCardDrinkTable(2, addMarketDetails.drinks.AMEB);
	addPriceCard.validateAddPriceCardDrinkTable(2, addMarketDetails.cupSizes.M);
	addPriceCard.validateAddPriceCardDrinkTable(2, addMarketDetails.coffeeTypes.primaryCoffeeType);
	addPriceCard.validateAddPriceCardDrinkTable(2, addMarketDetails.milkTypes.primaryMilkType);
	addPriceCard.validateAddPriceCardDrinkTable(3, addMarketDetails.drinks.AMEB);
	addPriceCard.validateAddPriceCardDrinkTable(3, addMarketDetails.cupSizes.S);
	addPriceCard.validateAddPriceCardDrinkTable(3, addMarketDetails.coffeeTypes.primaryCoffeeType);
	addPriceCard.validateAddPriceCardDrinkTable(3, addMarketDetails.milkTypes.primaryMilkType);
	addPriceCard.validateAddPriceCardDrinkTable(4, addMarketDetails.drinks.CHOC);
	addPriceCard.validateAddPriceCardDrinkTable(4, addMarketDetails.cupSizes.L);
	addPriceCard.validateAddPriceCardDrinkTable(4, addMarketDetails.coffeeTypes.primaryCoffeeType);
	addPriceCard.validateAddPriceCardDrinkTable(4, addMarketDetails.milkTypes.primaryMilkType);
});

Given('I enter all the Drink pricing information', () => {
	addPriceCard.enterDrinkPrice(0, 2.55);
	addPriceCard.enterDrinkPrice(1, 2.25);
	addPriceCard.enterDrinkPrice(2, 2.15);
	addPriceCard.enterDrinkPrice(3, 2.55);
	addPriceCard.enterDrinkPrice(4, 2.25);
	addPriceCard.enterDrinkPrice(5, 2.15);
	addPriceCard.enterDrinkPrice(6, 2.95);
	addPriceCard.enterDrinkPrice(7, 2.45);
	addPriceCard.enterDrinkPrice(8, 2.25);
	addPriceCard.enterDrinkPrice(9, 2.95);
	addPriceCard.enterDrinkPrice(10, 2.45);
	addPriceCard.enterDrinkPrice(11, 2.25);
});

Then('I click next to Coffee Pricing', () => {
	addPriceCard.clickNext(2);
});

Then('I verify the Coffee Type drop down', () => {
	addPriceCard.validateCoffeeType(addMarketDetails.coffeeTypes.CC);
	addPriceCard.validateCoffeeType(addMarketDetails.coffeeTypes.KA);
});

When('I select multiple coffee types', () => {
	addPriceCard.selectCoffeeType(addMarketDetails.coffeeTypes.CC);
	addPriceCard.selectCoffeeType(addMarketDetails.coffeeTypes.KA);
});

When('I click on Add Coffee button', () => {
	addPriceCard.clickAddCoffeeButton();
});

Then('I see the Coffee Type list is displayed in the record section', () => {
	addPriceCard.validateAddPriceCardCoffeeTable(1, addMarketDetails.coffeeTypes.CC);
	addPriceCard.validateAddPriceCardCoffeeTable(1, addMarketDetails.cupSizes.L);
	addPriceCard.validateAddPriceCardCoffeeTable(2, addMarketDetails.cupSizes.M);
	addPriceCard.validateAddPriceCardCoffeeTable(3, addMarketDetails.cupSizes.S);
	addPriceCard.validateAddPriceCardCoffeeTable(4, addMarketDetails.coffeeTypes.KA);
	addPriceCard.validateAddPriceCardCoffeeTable(4, addMarketDetails.cupSizes.L);
	addPriceCard.validateAddPriceCardCoffeeTable(5, addMarketDetails.cupSizes.M);
	addPriceCard.validateAddPriceCardCoffeeTable(6, addMarketDetails.cupSizes.S);
});

Given('I enter coffee pricing information', () => {
	addPriceCard.enterCoffeePrice(0, 0.10);
	addPriceCard.enterCoffeePrice(1, 0.05);
	addPriceCard.enterCoffeePrice(2, 0.05);
	addPriceCard.enterCoffeePrice(3, 0.10);
	addPriceCard.enterCoffeePrice(4, 0.05);
	addPriceCard.enterCoffeePrice(5, 0.05);
});

Then('I click next to Milk Pricing', () => {
	addPriceCard.clickNext(3);
});

Then('I verify the Milk Type drop down', () => {
	addPriceCard.validateMilkType(addMarketDetails.milkTypes.A2);
	addPriceCard.validateMilkType(addMarketDetails.milkTypes.B2);
});

When('I select multiple Milk Types', () => {
	addPriceCard.selectMilkType(addMarketDetails.milkTypes.A2);
	addPriceCard.selectMilkType(addMarketDetails.milkTypes.B2);
});

When('I click on Add Milk button', () => {
	addPriceCard.clickAddMilkButton();
});

Then('I see the Milk Type list is displayed in the record section', () => {
	addPriceCard.validateAddPriceCardMilkTable(1, addMarketDetails.milkTypes.A2);
	addPriceCard.validateAddPriceCardMilkTable(1, addMarketDetails.cupSizes.L);
	addPriceCard.validateAddPriceCardMilkTable(2, addMarketDetails.cupSizes.M);
	addPriceCard.validateAddPriceCardMilkTable(3, addMarketDetails.cupSizes.S);
	addPriceCard.validateAddPriceCardMilkTable(4, addMarketDetails.milkTypes.B2);
	addPriceCard.validateAddPriceCardMilkTable(4, addMarketDetails.cupSizes.L);
	addPriceCard.validateAddPriceCardMilkTable(5, addMarketDetails.cupSizes.M);
	addPriceCard.validateAddPriceCardMilkTable(6, addMarketDetails.cupSizes.S);
});

Given('I enter Milk pricing information', () => {
	addPriceCard.enterMilkPrice(0, 0.10);
	addPriceCard.enterMilkPrice(1, 0.05);
	addPriceCard.enterMilkPrice(2, 0.05);
	addPriceCard.enterMilkPrice(3, 0.10);
	addPriceCard.enterMilkPrice(4, 0.05);
	addPriceCard.enterMilkPrice(5, 0.05);
});

Then('I click Next to Syrups Pricing', () => {
	addPriceCard.clickNext(4);
});

When('I enter Syrups pricing information', () => {
	addPriceCard.enterSyrupPrice(0, 0.10);
	addPriceCard.enterSyrupPrice(1, 0.05);
	addPriceCard.enterSyrupPrice(2, 0.05);
});

When('I click on Next to Preview screen', () => {
	addPriceCard.clickNext(5);
});

When('I click on Create button', () => {
	addPriceCard.clickCreate();
});

Then('the price card is created and displayed in the price card list', () => {
	addPriceCard.enterSearchPriceCard(priceCardName)
});

When('I click on Export button', () => {
	cy.exec('IF EXIST %csv% DEL /F %csv%')
	cy.get('#btn-export-pricing-csv').click().wait(2000);
});

Then('the Price card is downloaded in CSV file', () => {
	cy.readFile(csv).should('exist')
});

When('I search for the Price card', () => {
	addPriceCard.enterSearchPriceCard(priceCardName)
});

When('I click on Map Entity button', () => {
	addPriceCard.clickMapEntity();
});

Then('I navigate to Entity mapping screen', () => {
	cy.get('h1', { timeout: 10000 }).contains('Entity Mapping').wait(1000);
});

Then('I validate the Market dropdowns list', () => {
	addPriceCard.validateMarketDropDown(marketName);
	addPriceCard.validateMarketDropDown(addMarketDetails.drinks.markets_1);
});

Then('I select the markets, Partner and site', () => {
	addPriceCard.selectMarket(marketName);
	addPriceCard.selectPatner(partnerName);
	addPriceCard.selectSite(siteName);
});

Then('I select the start time 1 min earlier than current time', () => {
	cy.get('#timeonly').click();
	cy.get('.p-hour-picker > :nth-child(3)').click();
	cy.get('.p-minute-picker > :nth-child(1)').click();
});

When('I click on Add Entity Mapping button', () => {
	addPriceCard.clickAddEntityMappingButton()
});

Then('the entity name is displayed in the record list', () => {
	addPriceCard.validateEntityMappingTable(marketName);
	addPriceCard.validateEntityMappingTable(siteName)
	addPriceCard.validateEntityMappingTable('Site');
});

Then('I click save changes', () => {
	addPriceCard.clickSaveEntityMapping();
});

Given('after 1 min, I Navigate to site level entity', () => {
	cy.wait(60000);
	memp.clickMenuEntity();
	memp.enterSearch(siteName);
});

When('I check the price card fields', () => {
	memp.clickEditMarket();
});

Then('The price card should get updated with the new price card', () => {
	cy.get('#S-Dropdown-sitePriceCard').click();
	cy.get('#mat-autocomplete-1').contains(priceCardName);
	cy.get('#btn-save-entity > .mat-button-wrapper').click().wait(2000);
});

When('I select an exiting Price card template', () => {
	addPriceCardTemplate.enterSearchPriceTemplate(templateName);
});

When('I click on Edit price card template button', () => {
	addPriceCardTemplate.clickEditPriceTemplate();
});

When('I edit the Markets, Drinks, Cupsizes', () => {
	addPriceCardTemplate.selectMarkets('remove', addMarketDetails.drinks.markets_1);
	addPriceCardTemplate.selectDrinks('remove', addMarketDetails.drinks.CRMW);
	addPriceCardTemplate.selectCupSizes('remove', addMarketDetails.cupSizes.M);
	addPriceCardTemplate.selectCupSizes('remove', addMarketDetails.cupSizes.S);
});

When('I edit the Primary Coffee type and Primary Milk type', () => {
	addPriceCardTemplate.selectPrimaryCoffeeType(addMarketDetails.coffeeTypes.CC);
	addPriceCardTemplate.selectPrimaryMilkType(addMarketDetails.milkTypes.A2);
});

Then('the Price card Templated list is displayed with edited associated drinks and Markets', () => {
	addPriceCardTemplate.enterSearchPriceTemplate(templateName);
	cy.get('tbody > :nth-child(1) > .cdk-column-noOfDrinks').contains('5');
	cy.get('tbody > :nth-child(1) > .cdk-column-noOfMarkets').contains('1');
});

When('I enter new Price card Name', () => {
	addPriceCard.enterPriceCardName(editedPriceCardName)
});

When('I choose the above edited price card template', () => {
	addPriceCard.selectTemplate(templateName);
});

When('I click next to go through all the Pricing widget by entering pricing value', () => {
	addPriceCard.clickNext(1);
	addPriceCard.selectDrinks(addMarketDetails.drinks.AMEB);
	addPriceCard.selectDrinks(addMarketDetails.drinks.ESPR);
	addPriceCard.selectDrinks(addMarketDetails.drinks.CHOC);
	addPriceCard.selectCupSizes(addMarketDetails.cupSizes.L);
	addPriceCard.clickAddDrinkButton();
	addPriceCard.enterDrinkPrice(0, 2.55);
	addPriceCard.enterDrinkPrice(1, 2.25);
	addPriceCard.enterDrinkPrice(2, 2.15);
	addPriceCard.clickNext(2);
	addPriceCard.selectCoffeeType(addMarketDetails.coffeeTypes.MI);
	addPriceCard.clickAddCoffeeButton();
	addPriceCard.enterCoffeePrice(0, 0.10);
	addPriceCard.clickNext(3);
	addPriceCard.selectMilkType(addMarketDetails.milkTypes.B1);
	addPriceCard.clickAddMilkButton();
	addPriceCard.enterMilkPrice(0, 0.10);
	addPriceCard.clickNext(4);
	addPriceCard.enterSyrupPrice(0, 0.10);
	addPriceCard.clickNext(5);
});

Then('the price card is created with edited price card template and is displayed in the price card list', () => {
	addPriceCard.enterSearchPriceCard(editedPriceCardName)
	cy.get('.mat-row').contains(templateName)
});

When('I search for the new Price card', () => {
	addPriceCard.enterSearchPriceCard(editedPriceCardName)
});

When('I select future Date and Time', () => {
	cy.get('.mat-datepicker-toggle > .mat-focus-indicator').click();
	cy.get('.mat-calendar-next-button').click();
	cy.get(':nth-child(3) > [data-mat-col="3"] > .mat-calendar-body-cell-content').click();
});

When('I verify entity assigned with future price card start Date doesnt have immediate affect', () => {
	memp.clickMenuEntity();
	memp.enterSearch(siteName);
	memp.clickEditMarket();
	cy.get('#S-Dropdown-sitePriceCard').click();
	cy.get('#mat-autocomplete-1').contains(priceCardName);
	cy.get('#btn-save-entity > .mat-button-wrapper').click().wait(2000);
});

When('I search for the Price card already assigned to entities', () => {
	addPriceCard.enterSearchPriceCard(priceCardName);
});

When('I click on Edit button', () => {
	addPriceCard.clickEditPriceCard();
});

Then('I check the Price Name and Template filed are disabled', () => {
	cy.get('#TextBox-PriceCardName').should('be.disabled');
	cy.get('#S-Dropdown-Template').should('be.disabled');
});

When('I select existing Drinks and Cupsizes from the dropdown list', () => {
	addPriceCard.selectDrinks(addMarketDetails.drinks.AMEB);
	addPriceCard.selectCupSizes(addMarketDetails.cupSizes.L);
});

When('I remove Primary Coffee Type and Milk Type for few drinks', () => {
	addPriceCard.removePrimaryCoffeeType('11', addMarketDetails.coffeeTypes.primaryCoffeeType);
	addPriceCard.removePrimaryCoffeeType('10', addMarketDetails.coffeeTypes.primaryCoffeeType);
	addPriceCard.removePrimaryCoffeeType('9', addMarketDetails.coffeeTypes.primaryCoffeeType);
	addPriceCard.removePrimaryMilkType('11', addMarketDetails.milkTypes.primaryMilkType);
	addPriceCard.removePrimaryMilkType('10', addMarketDetails.milkTypes.primaryMilkType);
	addPriceCard.removePrimaryMilkType('9', addMarketDetails.milkTypes.primaryMilkType);
});

When('I change prices for few drink', () => {
	addPriceCard.enterDrinkPrice(0, 2.35);
	addPriceCard.enterDrinkPrice(1, 2.15);
	addPriceCard.enterDrinkPrice(2, 2.10);
	addPriceCard.enterDrinkPrice(3, 2.35);
	addPriceCard.enterDrinkPrice(4, 2.15);
	addPriceCard.enterDrinkPrice(5, 2.10);
	addPriceCard.enterDrinkPrice(6, 2.35);
	addPriceCard.enterDrinkPrice(7, 2.45);
	addPriceCard.enterDrinkPrice(8, 2.10);
	addPriceCard.enterDrinkPrice(9, 2.35);
	addPriceCard.enterDrinkPrice(10, 2.15);
	addPriceCard.enterDrinkPrice(11, 2.10);
});

When('I select existing Coffee type from the dropdown', () => {
	addPriceCard.selectCoffeeType(addMarketDetails.coffeeTypes.CC);
});

When('I edit the prices in the coffee pricing screen', () => {
	addPriceCard.enterCoffeePrice(0, 0.05);
	addPriceCard.enterCoffeePrice(1, 0.05);
	addPriceCard.enterCoffeePrice(2, 0.00);
	addPriceCard.enterCoffeePrice(3, 0.05);
	addPriceCard.enterCoffeePrice(4, 0.05);
	addPriceCard.enterCoffeePrice(5, 0.00);
});

When('I select existing Milk type from the dropdown', () => {
	addPriceCard.selectMilkType(addMarketDetails.milkTypes.A2);
});

When('I edit the prices in the milk pricing screen', () => {
	addPriceCard.enterMilkPrice(0, 0.05);
	addPriceCard.enterMilkPrice(1, 0.00);
	addPriceCard.enterMilkPrice(2, 0.00);
	addPriceCard.enterMilkPrice(3, 0.00);
	addPriceCard.enterMilkPrice(4, 0.00);
	addPriceCard.enterMilkPrice(5, 0.00);
});

When('I edit the prices in the Syrups pricing screen', () => {
	addPriceCard.enterSyrupPrice(0, 0.10);
	addPriceCard.enterSyrupPrice(1, 0.05);
	addPriceCard.enterSyrupPrice(2, 0.00);
});

When('I click on Save button on preview screen', () => {
	addPriceCard.clickSavePriceCard();
});

When('I select expired time', () => {
	cy.get('#timeonly').click();
	cy.get('.p-hour-picker > :nth-child(3)').click();
	cy.get('.p-hour-picker > :nth-child(3)').click();
});

When('click on Save Price Card setup button', () => {
	addPriceCard.clickSavePriceCardSetup();
});

When('I set the start time 1 min earlier than current time', () => {
	cy.get('#timeonly').click();
	cy.get('.p-hour-picker > :nth-child(1)').click();
	cy.get('.p-minute-picker > :nth-child(1)').click();
	cy.get('.p-minute-picker > :nth-child(1)').click();
});

Then('price card is created with new version number', () => {
	addPriceCard.enterSearchPriceCard(priceCardName);
	cy.get(':nth-child(2) > .cdk-column-priceCardNumber').then(($btn) => {
		var txt = $btn.text()
		cy.writeFile('C:/Cypress Clone/grid2.0/cypress/fixtures/message.json', { name: txt })
		cy.get('tbody > :nth-child(1) > .cdk-column-priceCardNumber').then(($btn) => {
			var txt1 = $btn.text()
			assert.notEqual(txt, txt1);
		});
	});
});

Then('after 1min confirm the Price card field in the site entity gets updated with the new version of price Card', () => {
	addPriceCard.newVersionPriceCard(priceCardName)
	cy.wait(60000)
	memp.clickMenuEntity();
	memp.enterSearch(siteName);
	memp.clickEditMarket();
	cy.get('#S-Dropdown-sitePriceCard').click();
	cy.readFile('C:/Cypress Clone/grid2.0/cypress/fixtures/message.json').then((temp) => {
		cy.get('#mat-autocomplete-2').contains(temp.name);
	});
	cy.get('#btn-save-entity > .mat-button-wrapper').click().wait(2000);
});