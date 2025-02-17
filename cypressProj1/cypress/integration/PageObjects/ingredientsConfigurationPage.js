export default class ingredientsConfigurationPage {
    clickIngredientsButton(){
        cy.get('#configuration-ingredients').click().wait(200);
        cy.get('h1').contains('Ingredients Master');
    }
    enterDrink(value){
        cy.get('#TextBox-Drink').type(value);
    }
    enterDrinkCode(value){
        cy.get('#TextBox-Code').type(value);
    }
    selectCupType(value){
        cy.get('#Dropdown-CupType').click();
        cy.get('#Dropdown-CupType-panel').contains(value).click();
    }
    selectDrinkType(value){
        cy.get('#Dropdown-DrinkType').click();
        cy.get('#Dropdown-DrinkType-panel').contains(value).click();
    }
    clickAddDrinkTypeButton(){
        cy.get('#Button-ClearDrink').click();
    }
    validateDrinkInList(value){
        cy.get('#TextBox-SearchDrink').clear().type(value).type('{enter}');
        cy.get('#table-Drink > tbody').contains(value);
    }
    clickTab(value){
        cy.contains(value).click();
        cy.get('[novalidate] div:nth-of-type(1) > mat-label').contains(value);
    }
    enterCoffeeType(value){
        cy.get('#TextBox-CoffeeType').type(value);
    }
    enterCoffeeCode(value){
        cy.get('#TextBox-Coffee-Code').type(value);
    }
    clickAddCoffeeTypeButton(){
        cy.get('#Button-CoffeeType').wait(200).click();
    }
    validateCoffeeInList(value){
        cy.get('#TextBox-SearchCoffeeType').clear().type(value).type('{enter}');
        cy.get('#table-Coffee > tbody').contains(value);
    }
    enterMilkType(value){
        cy.get('#TextBox-MilkType').type(value);
    }
    enterMilkCode(value){
        cy.get('#TextBox-Milk-Code').type(value);
    }
    clickAddMilkTypeButton(){
        cy.get('#Button-ClearMilkType').wait(200).click();
    }
    validateMilkInList(value){
        cy.get('#TextBox-SearchMilkType').clear().type(value).type('{enter}');
        cy.get('#table-MilkType > tbody').contains(value);
    }
    enterSyrup(value){
        cy.get('#TextBox-Syrup').type(value);
    }
    enterSyrupCode(value){
        cy.get('#Syrup-Code').type(value);
    }
    clickAddSyrupTypeButton(){
        cy.get('#Button-Syrup').wait(200).click();
    }
    validateSyrupInList(value){
        cy.get('#TextBox-SearchSyrup').clear().type(value).type('{enter}');
        cy.get('#table-Syrup > tbody').contains(value);
    }

}