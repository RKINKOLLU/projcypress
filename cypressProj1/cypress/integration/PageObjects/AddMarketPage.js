export default class addMarketPage {
    clickAddMarket() {
        cy.wait(1000);
        cy.get('#btn-add-entity', { timeout: 20000 }).click();
        cy.get('[aria-posinset=1] > .mat-tab-label-content', { timeout: 20000 }).should('be.visible');
    }
    enterFranchiseId(value) {
        cy.get('#TextBox-marketFranchiseId').clear().type(value);
    }
    enterMarketName(value) {
        cy.get('#TextBox-marketName').clear().type(value);
    }
    enterAdditionalInformation(value) {
        cy.get('#TextBox-marketDescription').clear().type(value);
    }
    enterBillTo(value) {
        cy.get('#TextBox-marketBillTo').clear().type(value);
    }
    setMarketEntityStatus(value) {
        if (value == 'on') {
            cy.get('[title="Active"]').then(($ele) => {
                if ($ele.is(':checked')) {
                    return
                } else{
                    cy.wrap($ele).click()
                }
            })
        } else{
            if(value == 'off'){
                cy.get('[title="inactive"]').then(($ele1) => {
                    if ($ele1.is(':checked')) {
                        return
                    }else{
                        cy.wrap($ele1).click()
                    }
                })
            }
        
        }
    }
    enterCountryCode(value) {
        cy.get('#S-Dropdown-marketCountryCode').clear().type(value).wait(500);
        cy.get('#mat-autocomplete-0').contains(value).click();
        cy.get('.content-header').click();
    }
    enterTimezone(value) {
        cy.get('#S-Dropdown-marketTimeZone').clear().click().type(value);
        //cy.get('#mat-autocomplete-1').contains(value).click();
        cy.get('.mat-option-text', { timeout: 1000 }).contains(value).click();
    }
    enterBusinessEmailAddress(value) {
        cy.get('#TextBox-marketContactEmail').clear().type(value);
    }
    enterAreaCodeBusinessLandlineNumber(value) {
        cy.get('#TextBox-marketContactPhoneCountry').clear().type(value);
    }
    enterBusinessLandlineNumber(value) {
        cy.get('#TextBox-marketContactPhone').clear().type(value);
    }
    enterAlarmsEscalationEmail(value) {
        cy.get('#TextBox-marketAlarmEscalationEmail').clear().type(value);
    }
    selectCupSizeSmall(value) {
        cy.get('#Dropdown-marketCupSizeSmall').click();
        cy.get('#Dropdown-marketCupSizeSmall-panel').contains(value).click();
    }
    selectCupSizeMedium(value) {
        cy.get('#Dropdown-marketCupSizeMedium').click();
        cy.get('#Dropdown-marketCupSizeMedium-panel').contains(value).click();
    }
    selectCupSizeLarge(value) {
        cy.get('#Dropdown-marketCupSizeLarge').click();
        cy.get('#Dropdown-marketCupSizeLarge-panel').contains(value).click();
    }
    selectPriceCard(value) {
        cy.get('#S-Dropdown-marketPriceCard').clear().type(value);
        //cy.get('#mat-autocomplete-2').contains(value).click();
        cy.get('.mat-option-text', { timeout: 1000 }).contains(value).click();
    }
    enterParentOrganizationName(value) {
        cy.get('#TextBox-marketParentOrganizationName').clear().type(value);
    }
    selectCocaColaRegion(value) {
        cy.get('#Dropdown-marketCocaColaRegion').click();
        cy.get('#Dropdown-marketCocaColaRegion-panel').contains(value).click();
    }
    validateSaveAndNext(value) {
        cy.get('#btn-save-next-entity > .mat-button-wrapper').should(value);
    }
    clickSaveAndNext() {
        cy.get('#btn-save-next-entity > .mat-button-wrapper').should('not.be.disabled').click().wait(1500);
    }
    clickCancel() {
        cy.get('#btn-cancel-entity > .mat-button-wrapper').click();
        cy.get('.mw200', { timeout: 10000 }).should('be.visible');
    }
    clickCancelMarketLevel() {
        cy.get('#btn-cancel-market-level', { timeout: 1000 }).click({ force: true });
    }
    validateMarketSuccessfulDialog() {
        cy.get('.toast-message',{ timeout: 5000 }).should('be.visible');
    }
    setLevel2Child(value) {
        if (value == 'off') {
            cy.get('#radio-level-2 > .mat-slide-toggle-label > .mat-slide-toggle-bar').click();
            cy.get(':nth-child(1) > .level-col-2 > :nth-child(2)').should('not.have.value', 'Entity Level 2');
            cy.get('.market-level-box > :nth-child(1) > :nth-child(3) > :nth-child(2)').should('not.have.value', 'Level 2 Entity Reference');
            cy.get('#radio-level-2-reference > .mat-slide-toggle-label > .mat-slide-toggle-bar').should('not.exist');
        } else { return }
    }
    setLevel2EntityReference(value) {
        if (value == 'on') {
            cy.get('#radio-level-2-reference > .mat-slide-toggle-label > .mat-slide-toggle-bar').should('be.visible').click();
            cy.get('#radio-level-2-reference > .mat-slide-toggle-label > .mat-slide-toggle-content').contains('Mandatory');
        } else { return }
    }
    setLevel3Child(value) {
        if (value == 'off') {
            cy.get('#radio-level-3 > .mat-slide-toggle-label > .mat-slide-toggle-bar').click();
            cy.get(':nth-child(1) > .level-col-2 > :nth-child(3)').should('not.have.value', 'Entity Level 3');
            cy.get(':nth-child(1) > :nth-child(3) > :nth-child(3)').should('not.have.value', 'Entity Level 3 Reference');
            cy.get('#radio-level-3-reference > .mat-slide-toggle-label > .mat-slide-toggle-bar').should('not.exist');
        } else { return }
    }
    setLevel3EntityReference(value) {
        if (value == 'on') {
            cy.get('#radio-level-3-reference > .mat-slide-toggle-label > .mat-slide-toggle-bar').should('be.visible').click();
            cy.get('#radio-level-3-reference > .mat-slide-toggle-label > .mat-slide-toggle-content').contains('Mandatory');
        } else { return }
    }
    setPartnerReference(value) {
        if (value == 'on') {
            cy.get('#radio-level-4-reference > .mat-slide-toggle-label > .mat-slide-toggle-bar').should('be.visible').click();
            cy.get('#radio-level-4-reference > .mat-slide-toggle-label > .mat-slide-toggle-content').contains('Mandatory');
        } else { return }
    }
    setLevel5Child(value) {
        if (value == 'off') {
            cy.get('#radio-level-5 > .mat-slide-toggle-label > .mat-slide-toggle-bar').click();
            cy.get(':nth-child(2) > .level-col-2 > :nth-child(2)').should('not.have.value', 'Entity Level 3');
            cy.get('.market-level-box > div:nth-of-type(2) > div:nth-of-type(3) > div:nth-of-type(2)').should('not.have.value', 'Entity Level 5 Reference');
            cy.get('#radio-level-5-reference > .mat-slide-toggle-label > .mat-slide-toggle-bar').should('not.exist');
        } else { return }
    }
    setLevel5EntityReference(value) {
        if (value == 'on') {
            cy.get('#radio-level-5-reference > .mat-slide-toggle-label > .mat-slide-toggle-bar').should('be.visible').click();
            cy.get('#radio-level-5-reference > .mat-slide-toggle-label > .mat-slide-toggle-content').contains('Mandatory');
        } else { return }
    }
    setLevel6Child(value) {
        if (value == 'off') {
            cy.get('#radio-level-6 > .mat-slide-toggle-label > .mat-slide-toggle-bar').click();
            cy.get(':nth-child(2) > .level-col-2 > :nth-child(3)').should('not.have.value', 'Entity Level 3');
            cy.get('.market-level-box > :nth-child(2) > :nth-child(3) > :nth-child(3)').should('not.have.value', 'Entity Level 6 Reference');
            cy.get('#radio-level-6-reference > .mat-slide-toggle-label > .mat-slide-toggle-bar').should('not.exist');
        } else { return }
    }
    setLevel6EntityReference(value) {
        if (value == 'on') {
            cy.get('#radio-level-6-reference > .mat-slide-toggle-label > .mat-slide-toggle-bar').should('be.visible').click();
            cy.get('#radio-level-6-reference > .mat-slide-toggle-label > .mat-slide-toggle-content').contains('Mandatory');
        } else { return }
    }
    setSiteReference(value) {
        if (value == 'on') {
            cy.get('#radio-level-7-reference > .mat-slide-toggle-label > .mat-slide-toggle-bar').should('be.visible').click();
            cy.get('#radio-level-7-reference > .mat-slide-toggle-label > .mat-slide-toggle-content').contains('Mandatory');
        } else { return }
    }
    setMachineReference(value) {
        if (value == 'on') {
            cy.get('#radio-level-8-reference > .mat-slide-toggle-label > .mat-slide-toggle-bar').should('be.visible').click();
            cy.get('#radio-level-8-reference > .mat-slide-toggle-label > .mat-slide-toggle-content').contains('Mandatory');
        } else { return }
    }
    clickMarketLevelSetup() {
        cy.contain('Market Level Setup').click();
        cy.get('div.level-row:nth-child(1) > div:nth-child(1) > div:nth-child(1)').should('be.visible');

    }
    selectCoffeeTypes(value){
        cy.get('#M-Dropdown-coffeeTypeList > .multiselect-dropdown > :nth-child(1) > .dropdown-btn').click().wait(200);
        cy.get('#M-Dropdown-coffeeTypeList > .multiselect-dropdown > .dropdown-list > .item2').contains(value).click();
        cy.get(':nth-child(2) > .lable').click();

    }
    selectMilkTypes(value){
        cy.get('#M-Dropdown-milkTypeList > .multiselect-dropdown > :nth-child(1) > .dropdown-btn').click().wait(200);
        cy.get('#M-Dropdown-milkTypeList > .multiselect-dropdown > .dropdown-list > .item1 > .filter-textbox').type(value);
        cy.get('#M-Dropdown-milkTypeList > .multiselect-dropdown > .dropdown-list > .item2').contains(value).click();
        cy.get(':nth-child(2) > .lable').click();
    }
    selectSyrups(value){
        cy.get('#M-Dropdown-syrupList > .multiselect-dropdown > :nth-child(1) > .dropdown-btn').click().wait(200);
        cy.get('#M-Dropdown-syrupList > .multiselect-dropdown > .dropdown-list > .item2').contains(value).click();
        cy.get(':nth-child(2) > .lable').click();
    }
    selectSchaererSoulGrinder1(value){
        cy.contains('Select Grinder 1').click().wait(200);
        cy.get('[role="listbox"]').contains(value).click();
    }
    selectSchaererSoulGrinder2(value){
        cy.contains('Select Grinder 2').click().wait(200);
        cy.get('[role="listbox"]').contains(value).click();
    }
    selectSchaererSoulMilk0(value){
        cy.contains('Select Milk 0').click().wait(200);
        cy.get('[role="listbox"]').contains(value).click();
    }
    selectSchaererSoulMilk1(value){
        cy.contains('Select Milk 1').click().wait(200);
        cy.get('[role="listbox"]').contains(value).click();
    }
    selectSchaererSoulSyrups1(value){
        cy.contains('Select Syrup 1').click().wait(200);
        cy.get('[role="listbox"]').contains(value).click();
    }
    selectSchaererSoulSyrups2(value){
        cy.contains('Select Syrup 2').click().wait(200);
        cy.get('[role="listbox"]').contains(value).click();
    }
    selectWMF1500Grinder0(value){
        cy.contains('Select Grinder 0').click().wait(200);
        cy.get('[role="listbox"]').contains(value).click();
    }
    selectWMF1500Grinder1(value){
        cy.contains('Select Grinder 1').click().wait(200);
        cy.get('[role="listbox"]').contains(value).click();
    }
    selectWMF1500Milk0(value){
        cy.contains('Select Milk 0').click().wait(200);
        cy.get('[role="listbox"]').contains(value).click();
    }
    selectWMF1500Milk1(value){
        cy.contains('Select Milk 1').click().wait(200);
        cy.get('[role="listbox"]').contains(value).click();
    }
    selectWMF1500Syrups1(value){
        cy.contains('Select Syrup 1').click().wait(200);
        cy.get('[role="listbox"]').contains(value).click();
    }
    selectWMF1500Syrups2(value){
        cy.contains('Select Syrup 2').click().wait(200);
        cy.get('[role="listbox"]').contains(value).click();
    }
    clickNextButton(){
        cy.wait(1000);
        cy.get('#btn-save-next-entity > .mat-button-wrapper').click();
    }
    clickSaveMarketLevelSetup() {
        cy.get('#btn-save-market-level').click();
    }
    validateErrorMsgForAlreadyExistingValues(value) {
        cy.get('.toast-message').should('be.visible');
        cy.get('.toast-message').contains(value);
    }
    validateErrorMsgOnFields(value) {
        cy.wait(500);
        cy.get('.content-header').click();
        cy.get('.mat-form-field-suffix > .mat-icon', { wait: 500 }).should('be.visible').realHover();
        //cy.get('.mat-form-field-suffix > .mat-icon')
        cy.contains(value);
        cy.get('.content-header').click();
        cy.wait(200);
    }
    //confirmation Dialogues
    clickYesUpdateConfirmation() {
        cy.get('div.mat-dialog-content').contains('This is an irreversible action. Are you sure, you want to save the market level setup?');
        cy.get('.m-l-10').click();
    }
    clickNoUpdateConfirmation() {
        cy.get('div.mat-dialog-content').contains('This is an irreversible action. Are you sure, you want to save the market level setup?');
        cy.get('.mat-dialog-actions > button:nth-child(2)').click();
    }
    clickEdit() {
        cy.get('#btn-edit-entity > .mat-button-wrapper', { timeout: 10000 }).click().wait(500)
    }
    clickSave(){
        cy.get('#btn-save-configuation > .mat-button-wrapper', { timeout: 1000 }).click().wait(1000);
    }
}
