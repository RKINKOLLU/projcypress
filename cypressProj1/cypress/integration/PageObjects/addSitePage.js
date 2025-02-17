export default class addSitePage {
    enterParentEntity(value) {
        cy.get('#S-Dropdown-parentEntityId').clear().type(value);
        cy.get('.mat-option-text').contains(value).click().wait(2000);
    }
    enterSiteName(value) {
        cy.get('#TextBox-siteName').clear().type(value);
    }
    enterSiteReference(value) {
        cy.get('#TextBox-siteReference').clear().type(value);
    }
    setrSiteEntityStatus(value) {
        cy.get('#Radio-siteAccountStatus').check();
    }
    enterSiteSellToNumber(value) {
        cy.get('#TextBox-siteSellToNumber').clear().type(value);
    }
    setSiteEntityStatus(value) {
        cy.get('.mat-slide-toggle-bar').check();
    }
    enterSitePriceCard(value) {
        cy.get('#S-Dropdown-sitePriceCard').clear().type(value)
        cy.get('.mat-option-text').contains(value).click();
    }
    enterSiteTradeCode(value) {
        cy.get('#TextBox-siteTradeCode').clear().type(value);
    }
    selectSiteBrandType(value) {
        cy.get('#Dropdown-siteBrandType').click();
        cy.get('#Dropdown-siteBrandType-panel', { timeout: 500 }).contains(value).click();
    }
    enterSiteBrandCode(value) {
        cy.get('#TextBox-siteBrandCode').clear().type(value);
    }
    //PrimaryAlarm1stContactEmail
    enterPrimaryAlarm1stContactEmail(value) {
        cy.get('#TextBox-sitePrimaryAlarmFirstContactEmail').clear().type(value);
    }
    enterCodePrimaryAlarm1stContactMobileNumber(value) {
        cy.get('#TextBox-sitePrimaryAlarmFirstContactNumberCountry').clear().type(value);
    }
    enterPrimaryAlarm1stContactMobileNumber(value) {
        cy.get('#TextBox-sitePrimaryAlarmFirstContactNumber').clear().type(value);
    }
    //PrimaryAlarm2ndContactEmail
    enterPrimaryAlarm2ndContactEmail(value) {
        cy.get('#TextBox-sitePrimaryAlarmSecondContactEmail').clear().type(value);
    }
    enterCodePrimaryAlarm2ndContactMobileNumber(value) {
        cy.get('#TextBox-sitePrimaryAlarmSecondContactNumberCountry').clear().type(value);
    }
    enterPrimaryAlarm2ndContactMobileNumber(value) {
        cy.get('#TextBox-sitePrimaryAlarmSecondContactNumber').clear().type(value);
    }
    //SecondaryAlarm1stContactEmail
    enterSecondaryAlarm1stContactEmail(value) {
        cy.get('#TextBox-siteSecondaryAlarmFirstContactEmail').clear().type(value);
    }
    enterCodeSecondaryAlarm1stContactMobileNumber(value) {
        cy.get('#TextBox-siteSecondaryAlarmFirstContactNumberCountry').clear().type(value);
    }
    enterSecondaryAlarm1stContactMobileNumber(value) {
        cy.get('#TextBox-siteSecondaryAlarmFirstContactNumber').clear().type(value);
    }
    //SecondaryAlarm2ndContactEmail
    enterSecondaryAlarm2ndContactEmail(value) {
        cy.get('#TextBox-siteSecondaryAlarmSecondContactEmail').clear().type(value);
    }
    enterCodeSecondaryAlarm2ndContactMobileNumber(value) {
        cy.get('#TextBox-siteSecondaryAlarmSecondContactNumberCountry').clear().type(value);
    }
    enterSecondaryAlarm2ndContactMobileNumber(value) {
        cy.get('#TextBox-siteSecondaryAlarmSecondContactNumber').clear().type(value);
    }
    //Service Agent
    enterServiceAgentCompanyName(value) {
        cy.get('#TextBox-siteServiceAgentName').clear().type(value);
    }
    enterServiceAgentBusinessEmail(value) {
        cy.get('#TextBox-siteServiceAgentEmail').clear().type(value);
    }
    enterCodeServiceAgentMobileNumber(value) {
        cy.get('#TextBox-siteServiceAgentMobileNumberCountry').clear().type(value);
    }
    enterServiceAgentMobileNumber(value) {
        cy.get('#TextBox-siteServiceAgentMobileNumber').clear().type(value);
    }
    //
    enterBusinessEmailAddress(value) {
        cy.get('#TextBox-siteEmail').clear().type(value);
    }
    enterCodeBusinessLandlineNumber(value) {
        cy.get('#TextBox-sitePhoneNumberCountry').clear().type(value);
    }
    enterBusinessLandlineNumber(value) {
        cy.get('#TextBox-sitePhoneNumber').clear().type(value);
    }
    //
    enterSiteAddress1(value) {
        cy.get('#TextBox-siteAddress').clear().type(value);
    }
    enterSiteAddress2(value) {
        cy.get('#TextBox-siteAddress2').clear().type(value);
    }
    enterSiteCity(value) {
        cy.get('#TextBox-siteCity').clear().type(value);
    }
    enterSiteLocality(value) {
        cy.get('#TextBox-siteLocality').clear().type(value);
    }
    enterPostalCode(value) {
        cy.get('#TextBox-sitePostalCode').clear().type(value);
    }
    //
    enterCountryCode(value) {
        cy.get('#S-Dropdown-siteCountryCode').clear().type(value)
        cy.get('.mat-option-text').contains(value).click();
    }
    enterLanguage(value) {
        cy.get('#Dropdown-siteLanguage').type(value)
        cy.get('.mat-option-text').contains(value).click();
    }
    enterTimezone(value) {
        cy.get('#S-Dropdown-siteTimeZone').clear().type(value)
        cy.get('.mat-option-text').contains(value).click();
    }
    enterCurrency(value) {
        cy.get('#S-Dropdown-siteCurrency').click();
        cy.get('#S-Dropdown-siteCurrency').clear().type(value);
        cy.get('.mat-option-text').contains(value).click();
    }

    validateSaveAndNextButton(value) {
        cy.get('#btn-save-next-entity > .mat-button-wrapper').should(value);
    }
    clickSaveAndNextButton() {
        cy.get('#btn-save-next-entity > .mat-button-wrapper').click().wait(2000);
        //cy.get('.icon-dashboard', { timeout: 20000 }).should('be.visible');
        //cy.get('.mw200').should('be.visible');
    }
    clickSaveButton() {
        cy.get('[title="Save"] > .mat-button-wrapper', { timeout: 1000 }).click().wait(500);
        cy.get('.mw200').should('be.visible');
    }
    selectMachineType(value) {
        cy.get('#Dropdown-machineType > .mat-select-trigger > .mat-select-arrow-wrapper').click();
        cy.get('[role="listbox"]').contains(value).click()
    }
    addOpenAndCloseHrs(openhrs, closehrs) {
        cy.get('#tp-opening-hours > .p-calendar > #timeonly').clear().type(openhrs);
        cy.get('#tp-closing-hours > .p-calendar > #timeonly').clear().type(closehrs);
        cy.get('#btn-add-day-0').click().wait(100);
    }
    banDay(value) {
        cy.get('#btn-ban-day-'+value).click().wait(500);
        cy.get('#btn-Yes > .mat-button-wrapper').click();
        cy.wait(200)
    }
    selectCupsSizes(ele,value){
        cy.get(ele).click();
        cy.get('[role="listbox"]').contains(value).click();

    }
}
