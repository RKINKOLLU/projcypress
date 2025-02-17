export default class addPriceCardTemplatePage {
    clickPriceCardTemplate() {
        cy.get('#btn-add-pricecard-template > .mat-button-wrapper').click().wait(200);
        cy.get('#TextBox-templateName', { timeout: 2000 }).should('be.visible');
    }
    enterTemplateName(value) {
        cy.get('#TextBox-templateName').clear().type(value);
    }
    selectMarkets(option, value) {
        cy.get('#M-Dropdown-marketList > .multiselect-dropdown > :nth-child(1) > .dropdown-btn').click();
        cy.get('#M-Dropdown-marketList > .multiselect-dropdown > .dropdown-list > .item1 > .filter-textbox').clear().type(value);
        cy.get('#M-Dropdown-marketList > .multiselect-dropdown > .dropdown-list > .item2').contains(value).click();
        cy.get('#breadcrumb-home > img').click();
        if (option === 'add') {
            cy.get(':nth-child(2) > .row > .col-md-12 > .tag-wrapper > .tag-list').contains(value)
        } else {
            cy.get(':nth-child(3) > .row > .col-md-12 > .tag-wrapper > .tag-list').should('not.contain', value);
        }
    }
    selectDrinks(option, value) {
        cy.get('#M-Dropdown-drinkId > .multiselect-dropdown > :nth-child(1) > .dropdown-btn').click();
        cy.get('#M-Dropdown-drinkId > .multiselect-dropdown > .dropdown-list > .item1 > .filter-textbox').clear().type(value);
        if (value === 'Espresso' || value === 'Latte' || value === 'Mocha') {
            cy.get('#M-Dropdown-drinkId li:nth-of-type(2)').click();
        } else {
            cy.get('#M-Dropdown-drinkId > .multiselect-dropdown > .dropdown-list').contains(value).click();
        }
        cy.get('#breadcrumb-home > img').click();
        if (option === 'add') {
            cy.get(':nth-child(4) > .tag-wrapper > .tag-list').contains(value)
        } else {
            cy.get(':nth-child(5) > .tag-wrapper > .tag-list').should('not.contain', value);
        }
    }
    selectCupSizes(option, value) {
        cy.get('#M-Dropdown-cupSizeList > .multiselect-dropdown > :nth-child(1) > .dropdown-btn').click();
        cy.get('#M-Dropdown-cupSizeList > .multiselect-dropdown > .dropdown-list > .item1 > .filter-textbox').clear().type(value);
        cy.get('#M-Dropdown-cupSizeList > .multiselect-dropdown > .dropdown-list').contains(value).click();
        cy.get('#breadcrumb-home > img').click();
        if (option === 'add') {
            cy.get(':nth-child(6) > .tag-wrapper > .tag-list').contains(value)
        } else {
            cy.get(':nth-child(7) > .tag-wrapper > .tag-list').should('not.contain', value);
        }
    }
    selectCoffeeTypes(option, value) {
        cy.get('#M-Dropdown-coffeeTypeList > .multiselect-dropdown > :nth-child(1) > .dropdown-btn').click();
        cy.get('#M-Dropdown-coffeeTypeList > .multiselect-dropdown > .dropdown-list > .item1 > .filter-textbox').clear().type(value);
        cy.get('#M-Dropdown-coffeeTypeList > .multiselect-dropdown > .dropdown-list > .item2').contains(value).click();
        cy.get('#breadcrumb-home > img').click();
        if (option === 'add') {
            cy.get(':nth-child(7) > .row > .col-md-12 > .tag-wrapper').contains(value)
        } else {
            cy.get(':nth-child(8) > .row > .col-md-12 > .tag-wrapper').should('not.contain', value);
        }
    }
    selectMilkTypes(option, value) {
        cy.get('#M-Dropdown-milkTypeList > .multiselect-dropdown > :nth-child(1) > .dropdown-btn').click();
        cy.get('#M-Dropdown-milkTypeList > .multiselect-dropdown > .dropdown-list > .item1 > .filter-textbox').clear().type(value);
        if (value === 'Skimmed milk') {
            cy.get('#M-Dropdown-milkTypeList li:nth-of-type(2) > div').click();
        } else {
            cy.get('#M-Dropdown-milkTypeList li:nth-of-type(1) > div').click();
        }
        cy.get('#breadcrumb-home > img').click();
        if (option === 'add') {
            cy.get('.tag-wrapper').contains(value)
        } else {
            cy.get('.tag-wrapper').should('not.contain', value);
        }
    }
    selectSyrups(option, value) {
        cy.get('#M-Dropdown-syrupList > .multiselect-dropdown > :nth-child(1) > .dropdown-btn').click();
        cy.get('#M-Dropdown-syrupList > .multiselect-dropdown > .dropdown-list > .item1 > .filter-textbox').clear().type(value);
        if (value === 'Vanilla') {
            cy.get('#M-Dropdown-syrupList li:nth-of-type(2) > div').click();
        } else {
            cy.get('#M-Dropdown-syrupList li:nth-of-type(1) > div').click();
        }
        cy.get('#breadcrumb-home > img').click();
        if (option === 'add') {
            cy.get('.tag-wrapper > .tag-list').contains(value)
        } else {
            cy.get('.tag-wrapper > .tag-list').should('not.contain', value);
        }
    }
    selectPrimaryCoffeeType(value) {
        cy.get('.tag-list').contains(value).click();
    }
    selectPrimaryMilkType(value) {
        cy.get('.tag-wrapper').contains(value).click();
    }
    clickSave() {
        cy.get('#btn-save-pricecard-template > .mat-button-wrapper').click().wait(200);
    }
    validateSaveButton() {
        cy.get('#btn-save-pricecard-template > .mat-button-wrapper').should('not.be.disabled');
    }
    enterSearchPriceTemplate(value) {
        cy.get('#TextBox-search-pricecard-template').clear().type(value).type('{enter}').wait(2000);
        cy.get('.mat-row > .cdk-column-templateName').contains(value);
    }
    clickEditPriceTemplate() {
        cy.get('[title="Edit"]').click().wait(200);
        cy.get('.content-header').contains('Edit Price Card Template');
    }
}