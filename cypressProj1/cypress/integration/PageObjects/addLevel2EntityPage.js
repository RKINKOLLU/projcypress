export default class addLevel2EntityPage {
    clickAddEntity(){
        cy.get('[title="Add"]',{timeout:500}).click({force: true});
        cy.get(':nth-child(4) > span').contains('Add');
    }
    enterParentEntity(value){
        cy.get('#S-Dropdown-parentEntityId').clear().type(value);
        cy.get('.mat-option-text').contains(value).click().wait(2000);
    }
    enterLevel2EntityName(value){
        cy.get('#TextBox-level2EntityName').clear().type(value);
    }
    enterLevel2EntityReference(value){
        cy.get('#TextBox-level2EntityReference').clear().type(value);
    }
    enterBillTo(value){
        cy.get('#TextBox-level2BillTo').clear().type(value);
    }
    enterTradeCode(value){
        cy.get('#TextBox-level2TradeCode').clear().type(value)
    }
    selectBrandType(value){
        cy.get('#Dropdown-level2BrandType').click();
        cy.get('#Dropdown-level2BrandType-panel',{timeout:500}).contains(value).click();
    }
    enterBrandCode(value){
        cy.get('#TextBox-level2BrandCode').clear().type(value)
    }
    setLevel2EntityStatus(value){
        cy.get('.mat-slide-toggle-bar').click();
    }
    enterBusinessEmailAddress(value){
        cy.get('#TextBox-level2ContactEmail').clear().type(value)
    }
    enterCodeBusinessLandlineNumber(value){
        cy.get('#TextBox-level2ContactPhoneCountry').clear().type(value)
    }
    enterBusinessLandlineNumber(value){
        cy.get('#TextBox-level2ContactPhone').clear().type(value)
    }
    enterCountryCode(value){
        cy.get('#S-Dropdown-level2CountryCode').clear().type(value)
        cy.get('.mat-option-text').contains(value).click();
    }
    enterTimeZone(value){
        cy.get('#S-Dropdown-level2TimeZone').clear().type(value)
        cy.get('.mat-option-text').contains(value).click();
    }
    enterPriceCard(value){
        cy.get('#S-Dropdown-level2PriceCard').clear().type(value)
        cy.get('.mat-option-text').contains(value).click();
    }
    validateSaveButton(value){
        cy.get('#btn-save-entity > .mat-button-wrapper').should(value);
    }
    clickSaveButton(value){
        cy.get('#btn-save-entity > .mat-button-wrapper').click().wait(1500);
        //cy.get('.icon-dashboard', { timeout: 20000 }).should('be.visible');
        //cy.get('.mw200').should('be.visible');
    }
}
