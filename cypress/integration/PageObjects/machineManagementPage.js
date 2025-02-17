export default class machineManagementPage {
    enterSearch(value) {
        cy.get('.icon-dashboard', { timeout: 20000 }).should('be.visible');
        cy.get('#btn-add-machine > .mat-button-wrapper').should('be.visible').wait(200);
        cy.get('.search-part > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex').type(value + '{enter}').wait(500);;
        //cy.get('[name=search]').type('{enter}').wait(500);
        cy.get('.mat-row > .cdk-column-machineSerialNo', { timeout: 10000 }).contains(value).wait(2500)
        //cy.get('.p-treetable-tbody > tr.ng-star-inserted > :nth-child(1)', { timeout: 10000 }).contains(value).wait(2500)
    }
    clickViewMachine() {
        cy.get('[title="View"]').click({ force: true });
        cy.get(':nth-child(4) > span').should('be.visible').wait(500)
    }
    clickChangeSite() {
        cy.get('[title="Change Site"]').click().wait(500);
    }
    enterSearchSite(value) {
        cy.get('#TextBox-search-machines').clear().type(value).wait(200);
        //cy.get(':nth-child(2) > .mat-form-field > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix > #TextBox-search-machine').clear().type(value).wait(200);
    }
    selectSiteCheckBox(value) {
        cy.get(':nth-child(3) > .col-md-12').wait(600).contains(value).click();
    }
    clickMoveButton() {
        cy.get('#btn-move-save-machine > .mat-button-wrapper').click();
    }
    validateMoveMachinemsg(value) {
        cy.get('.mat-typography').contains("Please review the following fields and update them with relevant values");
        cy.get('.mat-typography').contains("Machine Entity Status");
        cy.get('.mat-typography').contains("Price Card");
        cy.get('.mat-typography').contains("Primary Alarm 1st Contact Mobile Number");
        cy.get('.mat-typography').contains("Primary Alarm 1st Contact Email");
        cy.get('.mat-typography').contains("Primary Alarm 2nd Contact Mobile Number");
        cy.get('.mat-typography').contains("Primary Alarm 2nd Contact Email");
        cy.get('.mat-typography').contains("Secondary Alarm 1st Contact Mobile Number");
        cy.get('.mat-typography').contains("Secondary Alarm 1st Contact Email");
        cy.get('.mat-typography').contains("Secondary Alarm 2nd Contact Mobile Number");
        cy.get('.mat-typography').contains("Secondary Alarm 2nd Contact Email");
        cy.get('.mat-typography').contains("Geo Position Latitude");
        cy.get('.mat-typography').contains("Geo Position Longitude");
    }
    clickOkButton(){
        cy.get('#btn-confirm-dialog > .mat-button-wrapper').click();
    }
}