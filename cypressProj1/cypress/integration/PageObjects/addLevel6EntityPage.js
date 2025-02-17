export default class addLevel6EntityPage {
    enterParentEntity(value){
        cy.get('#S-Dropdown-parentEntityId').clear().type(value);
        cy.get('.mat-option-text').contains(value).click().wait(2000);
    }
    enterLevel6EntityName(value){
        cy.get('#TextBox-level6EntityName').wait(100).clear().type(value);
    }
    enterLevel6EntityReference(value){
        cy.get('#TextBox-level6EntityReference').clear().type(value);
    }
    enterLevel6BillTo(value){
        cy.get('#TextBox-level6BillTo').clear().type(value);
    }
    enterLevel6TradeCode(value){
        cy.get('#TextBox-level6TradeCode').clear().type(value);
    }
    selectLevel6BrandType(value){
        cy.get('#Dropdown-level6BrandType').click();
        cy.get('#Dropdown-level6BrandType-panel',{timeout:600}).contains(value).click();
    }
    enterLevel6BrandCode(value){
        cy.get('#TextBox-level6BrandCode').clear().type(value);
    }
    setLevel6EntityStatus(value){
        cy.get('.mat-slide-toggle-bar').check();
    }
    enterLevel6BusinessEmailAddress(value){
        cy.get('#TextBox-level6ContactEmail').clear().type(value);
    }
    enterLevel6CodeBusinessLandlineNumber(value){
        cy.get('#TextBox-level6ContactPhoneCountry').clear().type(value);
    }
    enterLevel6BusinessLandlineNumber(value){
        cy.get('#TextBox-level6ContactPhone').clear().type(value);
    }
    enterLevel6CountryCode(value){
        cy.get('#S-Dropdown-level6CountryCode').clear().type(value)
        cy.get('.mat-option-text').contains(value).click();
    }
    enterLevel6Timezone(value){
        cy.get('#S-Dropdown-level6TimeZone').clear().type(value)
        cy.get('.mat-option-text').contains(value).click();
    }
    enterLevel6PriceCard(value){
        cy.get('#S-Dropdown-level6PriceCard').clear().type(value)
        cy.get('.mat-option-text').contains(value).click();
    }
    validateSaveButton(value){
        cy.get('#btn-save-entity > .mat-button-wrapper').should(value);
    }
    clickSaveButton(value){
        cy.get('#btn-save-entity > .mat-button-wrapper').click().wait(600);
        //cy.get('.icon-dashboard', { timeout: 20000 }).should('be.visible');
        //cy.get('.mw200').should('be.visible');
    }

}