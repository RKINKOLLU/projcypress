Cypress.Commands.add("SignIn", () => {
    cy.visit("/login")
    cy.fixture('UserLoginDetails').then((user) => {
        cy.get('[name=username]').type(user.username)
        cy.get('[formcontrolname=password]').type(user.password)
    })
    cy.get('[type=submit] > .mat-button-wrapper').click()
    cy.get('.icon-dashboard', { timeout: 20000 }).should('be.visible')
    cy.get('.mw200', { timeout: 20000 }).should('be.visible')

})
Cypress.Commands.add("APILogin", () => {
    cy.visit('/')
    const clientId = "83713ab9-3872-4036-ae7a-fa933ccdcf00";
    const tenantId = "6511efd3-03fb-449b-9a07-00ccbcc060ae";
    const client_secret = "0-p81.qLY.KpT19khWl0y.z.25Hr-Bf21E";
    cy.fixture('userLoginDetails').then((user) => {
        cy.request({
            // Given: I send auth request
            method: "POST",
            url: `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
            //failOnStatusCode: false,
            header: {
                "cache-control": "no-cache",
                "Content-Type": "application/x-www-form-urlencoded"
            },
            form: true,
            body: {
                client_id: clientId,
                username: user.username,
                password: user.password,
                grant_type: "password",
                client_secret: client_secret,
                scope: "openid email profile"
            }
        })
    }).then((response) => {
        const aadToken = response.body.access_token;
        const refreshToken = response.body.refresh_token
        window.localStorage.setItem('user', JSON.stringify(aadToken));
        window.localStorage.setItem('user1', JSON.stringify(refreshToken));

    })
    //cy.visit('/entity');
    cy.get('.mat-button-wrapper').click();
    cy.wait(5000);
    //cy.wait(5000);
    cy.get('#btn-confirm-dialog > .mat-button-wrapper',{ timeout: 20000 }).click();
    cy.get('.icon-dashboard',{ timeout: 20000 } ).should('be.visible');
    cy.get('.mw200').should('be.visible');
});

import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';
addMatchImageSnapshotCommand();