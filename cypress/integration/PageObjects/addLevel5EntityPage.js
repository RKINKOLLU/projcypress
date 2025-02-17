export default class addLevel5EntityPage {
    enterParentEntity(value){
        cy.get('#S-Dropdown-parentEntityId').clear().type(value);
        cy.get('.mat-option-text').contains(value).click().wait(2000);
    }
    enterLevel5EntityName(value){
        cy.get('#TextBox-level5EntityName').clear().type(value);
    }
    enterLevel5EntityReference(value){
        cy.get('#TextBox-level5EntityReference').clear().type(value);
    }
    enterLevel5BillTo(value){
        cy.get('#TextBox-level5BillTo').clear().type(value);
    }
    enterLevel5TradeCode(value){
        cy.get('#TextBox-level5TradeCode').clear().type(value);
    }
    selectLevel5BrandType(value){
        cy.get('#Dropdown-level5BrandType').click();
        cy.get('#Dropdown-level5BrandType-panel',{timeout:500}).contains(value).click();
    }
    enterLevel5BrandCode(value){
        cy.get('#TextBox-level5BrandCode').clear().type(value);
    }
    setLevel5EntityStatus(value){
        cy.get('.mat-slide-toggle-bar').check();
    }
    enterLevel5BusinessEmailAddress(value){
        cy.get('#TextBox-level5ContactEmail').clear().type(value);
    }
    enterLevel5CodeBusinessLandlineNumber(value){
        cy.get('#TextBox-level5ContactPhoneCountry').clear().type(value);
    }
    enterLevel5BusinessLandlineNumber(value){
        cy.get('#TextBox-level5ContactPhone').clear().type(value);
    }
    enterLevel5CountryCode(value){
        cy.get('#S-Dropdown-level5CountryCode').clear().type(value)
        cy.get('.mat-option-text').contains(value).click();
    }
    enterLevel5Timezone(value){
        cy.get('#S-Dropdown-level5TimeZone').clear().type(value)
        cy.get('.mat-option-text').contains(value).click();
    }
    enterLevel5PriceCard(value){
        cy.get('#S-Dropdown-level5PriceCard').clear().type(value)
        cy.get('.mat-option-text').contains(value).click();
    }
    validateSaveButton(value){
        cy.get('#btn-save-entity > .mat-button-wrapper').should(value);
    }
    clickSaveButton(value){
        cy.get('#btn-save-entity > .mat-button-wrapper').click().wait(500);
        //cy.get('.icon-dashboard', { timeout: 20000 }).should('be.visible');
        //cy.get('.mw200').should('be.visible');
    }

}