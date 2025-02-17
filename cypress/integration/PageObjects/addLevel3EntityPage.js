export default class addLevel3EntityPage {
    enterParentEntity(value){
        cy.get('#S-Dropdown-parentEntityId').clear().type(value);
        cy.get('.mat-option-text').contains(value).click().wait(2000);
    }
    enterLevel3EntityName(value){
        cy.get('#TextBox-level3EntityName').clear().type(value);
    }
    enterLevel3EntityReference(value){
        cy.get('#TextBox-level3EntityReference').clear().type(value);
    }
    enterLevel3BillTo(value){
        cy.get('#TextBox-level3BillTo').clear().type(value);
    }
    enterLevel3TradeCode(value){
        cy.get('#TextBox-level3TradeCode').clear().type(value);
    }
    selectLevel3BrandType(value){
        cy.get('#Dropdown-level3BrandType').click();
        cy.get('#Dropdown-level3BrandType-panel',{timeout:500}).contains(value).click();
    }
    enterLevel3BrandCode(value){
        cy.get('#TextBox-level3BrandCode').clear().type(value);
    }
    setLevel3EntityStatus(value){
        cy.get('.mat-slide-toggle-bar').check();
    }
    enterLevel3BusinessEmailAddress(value){
        cy.get('#TextBox-level3ContactEmail').clear().type(value);
    }
    enterLevel3CodeBusinessLandlineNumber(value){
        cy.get('#TextBox-level3ContactPhoneCountry').clear().type(value);
    }
    enterLevel3BusinessLandlineNumber(value){
        cy.get('#TextBox-level3ContactPhone').clear().type(value);
    }
    enterLevel3CountryCode(value){
        cy.get('#S-Dropdown-level3CountryCode').clear().type(value)
        cy.get('.mat-option-text').contains(value).click();
    }
    enterLevel3Timezone(value){
        cy.get('#S-Dropdown-level3TimeZone').clear().type(value)
        cy.get('.mat-option-text').contains(value).click();
    }
    enterLevel3PriceCard(value){
        cy.get('#S-Dropdown-level3PriceCard').clear().type(value)
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