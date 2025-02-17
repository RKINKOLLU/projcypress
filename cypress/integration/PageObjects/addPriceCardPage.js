export default class addPriceCardPage {
    clickPriceCardButton() {
        cy.get('#btn-add-pricecard > .mat-button-wrapper', { timeout: 10000 }).click().wait(200);
        cy.get('.mat-horizontal-stepper-header-container').should('be.visible');
    }
    enterPriceCardName(value) {
        cy.get('#TextBox-PriceCardName').type(value);
    }
    selectTemplate(value) {
        cy.get('#S-Dropdown-Template').click();
        cy.get('#S-Dropdown-Template').type(value);
        cy.get('#mat-autocomplete-0').contains(value).click();
    }
    clickNext(value) {
        cy.get('#btn-next-step-' + value + ' > .mat-button-wrapper').click().wait(200);
    }
    validateDrinks(value) {
        cy.get('#M-Dropdown-Drink > .multiselect-dropdown > :nth-child(1) > .dropdown-btn').click().wait(100);
        cy.get('#M-Dropdown-Drink > .multiselect-dropdown > .dropdown-list > .item2').contains(value);
    }
    validateCupSizes(value) {
        cy.get('#M-Dropdown-cup-size > .multiselect-dropdown > :nth-child(1) > .dropdown-btn').click();
        cy.get('#M-Dropdown-cup-size > .multiselect-dropdown > .dropdown-list').contains(value);
    }
    selectDrinks(value) {
        cy.get('#M-Dropdown-Drink > .multiselect-dropdown > :nth-child(1) > .dropdown-btn').click();
        cy.get('#M-Dropdown-Drink > .multiselect-dropdown > .dropdown-list > .item1 > .filter-textbox').type(value);
        cy.get('#M-Dropdown-Drink > .multiselect-dropdown > .dropdown-list > .item2 > .multiselect-item-checkbox').contains(value).click();
    }
    selectCupSizes(value) {
        cy.get('#M-Dropdown-cup-size > .multiselect-dropdown > :nth-child(1) > .dropdown-btn').click();
        cy.get('#M-Dropdown-cup-size > .multiselect-dropdown > .dropdown-list').contains(value).click();
    }
    clickAddDrinkButton() {
        cy.get('#btn-drink-add').click({ force: true });
    }
    validateAddPriceCardDrinkTable(position, value) {
        cy.get('tbody > :nth-child(' + position + ')').contains(value);
    }
    enterDrinkPrice(position, value) {
        cy.get('#TextBox-drink-price-' + position).clear().type(value)
    }
    //coffee
    validateCoffeeType(value) {
        cy.get('#M-Dropdown-Coffee > .multiselect-dropdown > :nth-child(1) > .dropdown-btn').click();
        cy.get('#M-Dropdown-Coffee > .multiselect-dropdown > .dropdown-list').contains(value)
    }
    selectCoffeeType(value) {
        cy.get('#M-Dropdown-Coffee > .multiselect-dropdown > :nth-child(1) > .dropdown-btn').click();
        cy.get('#M-Dropdown-Coffee > .multiselect-dropdown > .dropdown-list').contains(value).click();
    }
    clickAddCoffeeButton() {
        cy.get('#btn-coffee-add', { timeout: 10000 }).wait(200).click({ force: true });
    }
    validateAddPriceCardCoffeeTable(position, value) {
        cy.get('app-price-card-coffee-pricing.ng-star-inserted > .mat-card > .stepper-form > .table-container > .mat-table > tbody > :nth-child(' + position + ')').contains(value);
    }
    enterCoffeePrice(position, value) {
        cy.get('#TextBox-coffee-price-' + position).clear().type(value)
    }
    //milk
    validateMilkType(value) {
        cy.get('#M-Dropdown-Milk > .multiselect-dropdown > :nth-child(1) > .dropdown-btn').click();
        cy.get('#M-Dropdown-Milk > .multiselect-dropdown > .dropdown-list').contains(value)
    }
    selectMilkType(value) {
        cy.get('#M-Dropdown-Milk > .multiselect-dropdown > :nth-child(1) > .dropdown-btn').click();
        cy.get('#M-Dropdown-Milk > .multiselect-dropdown > .dropdown-list').contains(value).click();
    }
    clickAddMilkButton() {
        cy.get('#btn-milk-add', { timeout: 10000 }).wait(200).click({ force: true });
    }
    validateAddPriceCardMilkTable(position, value) {
        cy.get('app-price-card-milk-pricing.ng-star-inserted > .mat-card > .stepper-form > .table-container > .mat-table > tbody > :nth-child(' + position + ')').contains(value);
    }
    enterMilkPrice(position, value) {
        cy.get('#TextBox-milk-price-' + position).clear().type(value)
    }
    //Syrups
    enterSyrupPrice(position, value){
        cy.get('#TextBox-syrup-price-' + position).clear().type(value)
    }
    clickCreate(){
        cy.get('#btn-create-step-6 > .mat-button-wrapper').click().wait(200);
    }
    enterSearchPriceCard(value){
        cy.get('#txt-search-pricecard',{timeout:10000}).clear().type(value).type('{enter}').wait(2000);
        cy.get('.mat-row > .cdk-column-priceCardName').contains(value);
    }
    clickMapEntity(){
        cy.get('[title="Map Entity"]').click().wait(200);
    }
    validateMarketDropDown(value){
        cy.get('#M-Dropdown-market > .multiselect-dropdown > :nth-child(1) > .dropdown-btn').click();
        cy.get('#M-Dropdown-market > .multiselect-dropdown > .dropdown-list > .item2').contains(value);
    }
    selectMarket(value){
        cy.get('#M-Dropdown-market > .multiselect-dropdown > :nth-child(1) > .dropdown-btn').click();
        cy.get('#M-Dropdown-market > .multiselect-dropdown > .dropdown-list > .item2').contains(value).click();
    }
    selectPatner(value){
        cy.get('#M-Dropdown-partner > .multiselect-dropdown > :nth-child(1) > .dropdown-btn').click();
        cy.get('#M-Dropdown-partner > .multiselect-dropdown > .dropdown-list').contains(value).click();
    }
    selectSite(value){
        cy.get('#M-Dropdown-site > .multiselect-dropdown > :nth-child(1) > .dropdown-btn').click();
        cy.get('#M-Dropdown-site > .multiselect-dropdown > .dropdown-list').contains(value).click();
    }
    clickAddEntityMappingButton(){
        cy.get('#Btn-add-entity').click();
    }
    validateEntityMappingTable(value){
        cy.get('.mat-row ').contains(value)
    }
    clickSaveEntityMapping(){
        cy.get('#btn-save-entity-mapping > .mat-button-wrapper').click();
    }
    clickEditPriceCard(){
        cy.get('[title="Edit"]').click().wait(200);
        cy.get('.content-header').contains('Edit Price Card');
    }
    removePrimaryCoffeeType(position, value){
        var x = Number(position);
        var po = x+1;
        cy.get('#Btn-remove-coffee-'+position+' > .mat-button-wrapper > img').click();
        cy.get(':nth-child(' + po + ') > .cdk-column-primaryCoffeeName').should('not.contain', value);
    }
    removePrimaryMilkType(position, value){
        var x = Number(position);
        var po = x+1;
        cy.get('#Btn-remove-milk-'+position+' > .mat-button-wrapper > img').click();
        cy.get(':nth-child(' + po + ') > .cdk-column-primaryMilkName').should('not.contain', value);
    }
    clickSavePriceCard(){
        cy.get('#btn-save-step-6 > .mat-button-wrapper',{timeout:10000}).click().wait(200);
    }
    clickSavePriceCardSetup(){
        cy.get('#btn-save-pc-setup > .mat-button-wrapper').click().wait(200);
    }
    newVersionPriceCard(value){
        cy.readFile('C:/Cypress Clone/grid2.0/cypress/fixtures/message.json').then((temp) => {
            const txt = temp.name;
            const txt1 = txt.replace(/ /g,'');
            var newVersionPriceCardName = value+' ('+txt1+')';
            cy.writeFile('C:/Cypress Clone/grid2.0/cypress/fixtures/message.json', { name: newVersionPriceCardName })
        });

    }
}