import loginPage from '../PageObjects/loginPage';
let login = new loginPage();
Given('I open Grid login page', () => {
    cy.APILogin();
})
// When('I type in Grid user username and password', () => {
//     cy.fixture('userLoginDetails').then((user) => {
//         login.enterUserName(user.username);
//         login.enterPassword(user.password);
//     })
// })
// And('I click on Sign in button', () => {
//     login.clickLogin();
// })
Then('Entity Management should be shown', () => {
    login.validateMainPageDashBoard();
})