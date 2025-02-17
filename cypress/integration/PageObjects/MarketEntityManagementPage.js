export default class marketEntityManagementPage {
    validateMainPageDashBoard() {
        cy.get('.icon-dashboard').should('be.visible');
    }
    enterSearch(value) {
        cy.get('.icon-dashboard', { timeout: 20000 }).should('be.visible');
        cy.get('.mw200').should('be.visible');
        cy.get('[name=search]').click({force: true})
        cy.get('[name=search]').type(value).type('{enter}').wait(2000);
        //cy.get('td:nth-of-type(1)', { timeout: 10000 }).contains(value).wait(2500)
        cy.get('.p-treetable-tbody > tr.ng-star-inserted > :nth-child(1)', { timeout: 20000 }).contains(value).wait(2500)
    }
    clickViewMarket() {
        cy.get('[title="View"]').click({ force: true });
        cy.get(':nth-child(4) > span', { timeout: 10000 }).should('be.visible').wait(500)
    }
    clickEditMarket(){
        cy.get('[title="Edit"]').click().wait(200);
        cy.get(':nth-child(4) > span').contains('Edit')
    }
    clickMachineManagementButton(){
        cy.get('#menu-machine > .icon-sidebar').click().wait(200);
        cy.get('#btn-add-machine > .mat-button-wrapper').should('be.visible').wait(200);
    }
    clickPriceCardTemplate(){
        cy.get('#menu-price-card-template', {timeout: 20000}).click({force: true}).wait(200);
        cy.get('#btn-add-pricecard-template > .mat-button-wrapper').should('be.visible').wait(200);
    }
    clickPriceCard(){
        cy.get('#menu-price-card', {timeout: 20000}).click({force: true}).wait(200);
        cy.get('#btn-add-pricecard > .mat-button-wrapper').should('be.visible').wait(200);
    }
    clickConfigurationMenu(){
        cy.get('#menu-configuration').click().wait(200);
        cy.get('#configuration-ingredients').should('be.visible').wait(200);
    }
    clickUsers(){
        cy.get('#menu-user').click().wait(200);
        cy.get('#btn-add-user > .mat-button-wrapper').should('be.visible').wait(200);
    }
    clickSales(){
        cy.get('#menu-sales').click().wait(200);
        cy.contains('Sales Data').should('be.visible').wait(200);
    }
    clickMenuEntity(){
        cy.get('#menu-entity > .icon-sidebar').click().wait(200);
        cy.get('.icon-dashboard').should('be.visible')
    }

}