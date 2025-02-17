export default class addMachinePage {
    enterParentEntity(value) {
        cy.get('#S-Dropdown-parentEntityId').clear().type(value);
        cy.get('.mat-option-text').contains(value).click().wait(2000);
    }
    enterMachineSerialNumber(value) {
        cy.get('#TextBox-machineSerialNumber').clear().type(value);
    }
    enterMachineReference(value) {
        cy.get('#TextBox-machineReference').clear().type(value);
    }
    setMachineEntityStatus(value) {
        cy.get('.mat-slide-toggle-bar').click();
    }    
    selectCommissioningStatus(value){
        cy.get('#Dropdown-machineCommissioningStatus > .mat-select-trigger > .mat-select-arrow-wrapper').click();
        cy.get('[role="listbox"]',{timeout: 500}).contains(value).click();
    }
    selectMachineType(value){
        cy.get('#Drodpdown-Machine-Model-MachineType').click();
        cy.get('[role="listbox"]',{timeout: 500}).contains(value).click();
    }
    selectConfigMachineType(value){
        cy.get('#Dropdown-machineType').click();
        cy.get('[role="listbox"]',{timeout: 500}).contains(value).click();
    }
    selectPropositionType(value){
        cy.get('#Dropdown-machinePropositionType').click();
        cy.get('[role="listbox"]',{timeout: 500}).contains(value).click();
    }
    selectWorkingStatus(value){
        cy.get('#Dropdown-machineWorkingStatus').click({force: true});
        cy.get('#Dropdown-machineWorkingStatus-panel', { timeout: 500 }).contains(value).click();
    }
    enterPriceCard(value){
        cy.get('#S-Dropdown-machinePriceCard').clear().type(value)
        cy.get('.mat-option-text').contains(value).click();
    }
    enterCurrency(value){
        cy.get('#S-Dropdown-machineCurrency').clear().type(value)
        cy.get('.mat-option-text').contains(value).click();
    }
    //PrimaryAlarm1stContactEmail
    enterPrimaryAlarm1stContactEmail(value) {
        cy.get('#TextBox-machinePrimaryAlarmFirstContactEmail').clear().type(value);
    }
    enterCodePrimaryAlarm1stContactMobileNumber(value) {
        cy.get('#TextBox-machinePrimaryAlarmFirstContactMobileCountry\\#').clear().type(value);
    }
    enterPrimaryAlarm1stContactMobileNumber(value) {
        cy.get('#TextBox-machinePrimaryAlarmFirstContactMobile\\#').clear().type(value);
    }
    //PrimaryAlarm2ndContactEmail
    enterPrimaryAlarm2ndContactEmail(value) {
        cy.get('#TextBox-machinePrimaryAlarmsecondContactEmail').clear().type(value);
    }
    enterCodePrimaryAlarm2ndContactMobileNumber(value) {
        cy.get('#TextBox-machinePrimaryAlarmsecondContactPhoneCountry\\#').clear().type(value);
    }
    enterPrimaryAlarm2ndContactMobileNumber(value) {
        cy.get('#TextBox-machinePrimaryAlarmsecondContactMobile\\#').clear().type(value);
    }
    //SecondaryAlarm1stContactEmail
    enterSecondaryAlarm1stContactEmail(value) {
        cy.get('#TextBox-machineSecondaryAlarmFirstContactEmail').clear().type(value);
    }
    enterCodeSecondaryAlarm1stContactMobileNumber(value) {
        cy.get('#TextBox-machineSecondaryAlarmFirstContactMobileCountry\\#').clear().type(value);
    }
    enterSecondaryAlarm1stContactMobileNumber(value) {
        cy.get('#TextBox-machineSecondaryAlarmFirstContactMobile\\#').clear().type(value);
    }
    //SecondaryAlarm2ndContactEmail
    enterSecondaryAlarm2ndContactEmail(value) {
        cy.get('#TextBox-machineSecondaryAlarmsecondContactEmail').clear().type(value);
    }
    enterCodeSecondaryAlarm2ndContactMobileNumber(value) {
        cy.get('#TextBox-machineSecondaryAlarmsecondContactMobileCountry\\#').clear().type(value);
    }
    enterSecondaryAlarm2ndContactMobileNumber(value) {
        cy.get('#TextBox-machineSecondaryAlarmsecondContactMobile\\#').clear().type(value);
    }
    enterMachineLocation(value){
        cy.get('#TextBox-machineLocation').clear().type(value);
    }
    enterPaymentSystemType(value){
        cy.get('#TextBox-machinePaymentSystemType').clear().type(value);
    }
    enterPaymentTerminalId(value){
        cy.get('#TextBox-machinePaymentTerminalID').clear().type(value);
    }
    enterGeoPositionLatitude(value){
        cy.get('#TextBox-machineGeoPositionLat').clear().type(value);
    }
    enterGeoPositionLongitude(value){
        cy.get('#TextBox-machineGeoPositionLong').clear().type(value);
    }
    validateSaveAndNextButton(value) {
        cy.get('#btn-save-next-entity > .mat-button-wrapper').should(value);
    }
    clickSaveAndNextButton() {
        cy.get('#btn-save-next-entity > .mat-button-wrapper').click().wait(5000);
        //cy.get('.icon-dashboard', { timeout: 20000 }).should('be.visible');
        //cy.get('.mw200').should('be.visible');
    }
    clickSaveButton() {
        cy.wait(1000);
        cy.get('#btn-save-configuation > .mat-button-wrapper', { timeout: 1000 }).click().wait(1000);
        cy.get('#btn-add-machine > .mat-button-wrapper', { timeout: 1000 }).should('be.visible');
        cy.wait(2000);
    }
    selectBrandType(value){
        cy.get('#Dropdown-brandType', { timeout: 1000 }).click();
        cy.get('#Dropdown-brandType-panel').contains(value).click()
    }
    validateMsgs(value){
        cy.get('.no-record > td').contains(value);
    }
}