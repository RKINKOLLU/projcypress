export default class loginPage {
    URL() {
        cy.visit("http://20.82.227.83/login");
    }
    enterUserName(value) {
        cy.get('[name=username]').type(value);
    }
    enterPassword(value) {
        cy.get('[formcontrolname=password]').type(value);
    }
    clickLogin() {
        cy.get('[type=submit] > .mat-button-wrapper').click();
    }
    validateMainPageDashBoard() {
        cy.get('.icon-dashboard', { timeout: 20000 }).should('be.visible');
        cy.get('.mw200').should('be.visible');

    }
}