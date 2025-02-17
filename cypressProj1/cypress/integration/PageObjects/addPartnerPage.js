export default class addPartnerPage {
    enterParentEntity(value){
        cy.get('#S-Dropdown-parentEntityId').clear().type(value);
        cy.get('.mat-option-text').contains(value).click().wait(2000);
    }
    enterPartnerName(value){
        cy.get('#TextBox-partnerName').clear().type(value);
    }
    enterPartnerReference(value){
        cy.get('#TextBox-partnerReference').clear().type(value);
    }
    enterPartnerBillTo(value){
        cy.get('#TextBox-partnerBillTo').clear().type(value);
    }
    setPartnerEntityStatus(value){
        cy.get('.mat-slide-toggle-bar').check();
    }
    selectPartnerCupSizeSmall(value) {
        cy.get('#Dropdown-partnerCupSizeSmall').click();
        cy.get('#Dropdown-partnerCupSizeSmall-panel').contains(value).click();
    }
    selectPartnerCupSizeMedium(value) {
        cy.get('#Dropdown-partnerCupSizeMedium').click();
        cy.get('#Dropdown-partnerCupSizeMedium-panel').contains(value).click();
    }
    selectPartnerCupSizeLarge(value) {
        cy.get('#Dropdown-partnerCupSizeLarge').click();
        cy.get('#Dropdown-partnerCupSizeLarge-panel').contains(value).click();
    }
    enterPartnerPriceCard(value){
        cy.get('#S-Dropdown-partnerPriceCard').clear().type(value)
        cy.get('.mat-option-text').contains(value).click();
    }
    enterPartnerTradeCode(value){
        cy.get('#TextBox-partnerTradeCode').clear().type(value);
    }
    selectPartnerBrandType(value){
        cy.get('#Dropdown-partnerBrandType').click();
        cy.get('#Dropdown-partnerBrandType-panel',{timeout:500}).contains(value).click();
    }
    enterPartnerBrandCode(value){
        cy.get('#TextBox-partnerBrandCode').clear().type(value);
    }
    enterPartnerBusinessEmailAddress(value){
        cy.get('#TextBox-partnerContactEmail').clear().type(value);
    }
    enterPartnerCodeBusinessLandlineNumber(value){
        cy.get('#TextBox-partnerContactPhoneCountry').clear().type(value);
    }
    enterPartnerBusinessLandlineNumber(value){
        cy.get('#TextBox-partnerContactPhone').clear().type(value);
    }
    enterPartnerCountryCode(value){
        cy.get('#S-Dropdown-partnerCountryCode').clear().type(value)
        cy.get('.mat-option-text').contains(value).click();
    }
    enterPartnerTimezone(value){
        cy.get('#S-Dropdown-partnerTimeZone').clear().type(value)
        cy.get('.mat-option-text').contains(value).click();
    }
    enterPartnerCurrency(value){
        cy.get('#S-Dropdown-partnerCurrency').clear().type(value)
        cy.get('.mat-option-text').contains(value).click();
    }
    validateSaveAndNextButton(value){
        cy.get('#btn-save-next-entity > .mat-button-wrapper').should(value);
    }
    clickSaveAndNextButton(){
        cy.get('#btn-save-next-entity > .mat-button-wrapper').click().wait(5000);
        //cy.get('.icon-dashboard', { timeout: 20000 }).should('be.visible');
        //cy.get('.mw200').should('be.visible');
    }
    clickSaveButton(){
        cy.get('[title="Save"] > .mat-button-wrapper',{timeout:1000}). click().wait(500);
        cy.get('.mw200').should('be.visible');
    }
}