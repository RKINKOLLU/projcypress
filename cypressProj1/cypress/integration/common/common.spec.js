//import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import addMarketPage from '../PageObjects/addMarketPage';
import marketEntityManagementPage from '../PageObjects/marketEntityManagementPage';
import addLevel2EntityPage from '../PageObjects/addLevel2EntityPage';
import addLevel3EntityPage from '../PageObjects/addLevel3EntityPage';
import addLevel5EntityPage from '../PageObjects/addLevel5EntityPage';
import addPartnerPage from '../PageObjects/addPartnerPage';
const addMarketDetails = require('../../fixtures/addMarketDetails.json');
const level2EntityDetails = require('../../fixtures/level2EntityDetails.json')
const level3EntityDetails = require('../../fixtures/level3EntityDetails.json')
const addPartnerDetails = require('../../fixtures/addPartnerDetails.json')
const level5EntityDetails = require('../../fixtures/level5EntityDetails.json')
let addMarket = new addMarketPage();
let memp = new marketEntityManagementPage();
let addLevel2Entity = new addLevel2EntityPage();
let addLevel3Entity = new addLevel3EntityPage();
let addPartner = new addPartnerPage();
let addLevel5Entity = new addLevel5EntityPage();
const {
    Before,
    After,
} = require("cypress-cucumber-preprocessor/steps");

// Before(() => {
//     cy.exec('"C:/Program Files (x86)/Bandicam/bdcam_nonadmin.exe" /stop');
//     cy.wait(3000);
//     cy.exec('"C:/Program Files (x86)/Bandicam/bdcam_nonadmin.exe" /start');
//     cy.wait(3000);
//     //cy.viewport('iphone-6')
// });
// After(() => {
//     cy.exec('"C:/Program Files (x86)/Bandicam/bdcam_nonadmin.exe" /stop');
//     cy.wait(3000);
// });

Given('I login as System Admin', () => {
    cy.APILogin();
    //cy.visit('/');
})

When('I select the Entity and click on add entity button', () => {
    addLevel2Entity.clickAddEntity();
});

And('I click Add Market button', () => {
    addMarket.clickAddMarket();
})

Then('I see an error msg {string}', (args1) => {
    addMarket.validateErrorMsgForAlreadyExistingValues(args1);
});

Then('error msg {string} is displayed', (args1) => {
    addMarket.validateErrorMsgOnFields(args1);
    addLevel2Entity.validateSaveButton('not.to.enabled');
});

When('I select the entity and click Edit button', () => {
    memp.clickEditMarket();
});

When('I select the entity and click View button', () => {
    memp.clickViewMarket()
});

When('I edit the fields, I would see popup msg appeared', datatable => {
    datatable.hashes().forEach(row => {
        cy.get(row.fields, { timeout: 10000 }).click();
        cy.get('.mat-typography', { timeout: 10000 }).contains(row.popupMsg);
        cy.get('#btn-Yes > .mat-button-wrapper').click();
    });
});

When('I click on Edit button in the view page', () => {
    addMarket.clickEdit();
});

Then('I should able to navigate to edit screen', () => {
    cy.get(':nth-child(4) > span', { timeout: 500 }).contains('Edit')
});

Then('Save button is enabled', () => {
    addLevel2Entity.validateSaveButton('not.be.disabled');
});
Then('save button is disabled', () => {
    addLevel2Entity.validateSaveButton('not.to.enabled');
});
Then('Save and Next button is enabled', () => {
    addPartner.validateSaveAndNextButton('not.be.disabled');
});

When('Save and Next button is disabled', () => {
    addPartner.validateSaveAndNextButton('not.be.enabled');
});
When('I click Save and Next button', () => {
    addPartner.clickSaveAndNextButton()
});
When('I clear the Parent entity', () => {
    cy.get('#S-Dropdown-parentEntityId').clear();
});

Then('I would see an errorMsg {string}', (args1) => {
    addMarket.validateErrorMsgOnFields(args1);
});
When('I click Save button', () => {
    addLevel2Entity.clickSaveButton();
});

When('store the entity id', () => {
    cy.get('.col-md-12').then(($btn) => {
        const txt = $btn.text()
        cy.writeFile('C:/Cypress Clone/grid2.0/cypress/fixtures/message.json', { name: txt })
    })
});

Then('I should validate the stored information', () => {
    cy.get('.col-md-12').then(($btn) => {
        const txt = $btn.text();
        cy.readFile('C:/Cypress Clone/grid2.0/cypress/fixtures/message.json').then((temp) => {
            expect(temp.name).to.equal(txt);
        });
    });
});

When('I clear each mandatory field, the error msg is displayed and save button is disabled', datatable => {
    datatable.hashes().forEach(row => {
        cy.get(row.field, { timeout: 200 }).clear()
        cy.exec('"C:/Program Files (x86)/Bandicam/bdcam_nonadmin.exe" /screenshot');
        addMarket.validateErrorMsgOnFields(row.errorMsg);
        //cy.exec('C:/i_view64.exe /capture=4 /convert="Execution_screenshots\\level2fieldvalidation_$U(%d%m%Y_%H%M%S).jpg"');
        addLevel2Entity.validateSaveButton('not.to.enabled');
        cy.get(row.field).clear().type(row.enterValue)
    });
});

When('I clear each mandatory field, the error msg is displayed and save and next button is disabled', datatable => {
    datatable.hashes().forEach(row => {
        cy.get(row.field, { timeout: 200 }).clear()
        addMarket.validateErrorMsgOnFields(row.errorMsg);
        addPartner.validateSaveAndNextButton('not.to.enabled');
        cy.get(row.field).clear().type(row.enterValue)
    });
});
When('I dont select any drop downs', datatable => {
    datatable.hashes().forEach(row => {
        cy.get(row.dropdowns).click();
        cy.get(row.dropdowns + '-panel').contains(row.dropdownValue).click();
        addMarket.validateErrorMsgOnFields(row.errorMsg);
        cy.wait(100);
        addPartner.validateSaveAndNextButton('not.to.enabled');
        cy.get(row.dropdowns).click();
        cy.get(row.dropdowns + '-panel').contains(row.selectValue).click();
    });
});
When('I clear drop down field, the error msg is displayed and save and next button is disabled', datatable => {
    datatable.hashes().forEach(row => {
        cy.get(row.field, { timeout: 200 }).clear()
        addMarket.validateErrorMsgOnFields(row.errorMsg);
        addPartner.validateSaveAndNextButton('not.to.enabled');
        cy.get(row.field).clear().type(row.enterValue)
        cy.get('.mat-option-text').contains(row.enterValue).click()
    });
});