import marketEntityManagementPage from '../PageObjects/marketEntityManagementPage';
import machineManagementPage from '../PageObjects/machineManagementPage';
const addMachineDetails = require('../../fixtures/addMachineDetails.json');
const machineSalesDetails = require('../../fixtures/machineSalesDetails.json');
let memp = new marketEntityManagementPage();
let mm = new machineManagementPage();

When('I navigate to machine management screen', () => {
    memp.clickMachineManagementButton();
    mm.enterSearch(addMachineDetails.machineMove.machine);
    memp.clickEditMarket();
    cy.get('.value').then(($btn) => {
        const txt = $btn.text()
        cy.writeFile('C:/Cypress Clone/grid2.0/cypress/fixtures/message.json', { machineID: txt })
    })
    memp.clickMenuEntity();
    cy.request({
        method: "GET",
        url: 'https://172.16.14.5:6005/swagger/index.html',
        // url:'https://172.16.14.5:6025/swagger/index.html',
        // url:'https://172.16.14.5:6035/swagger/index.html',
        // url:'https://172.16.14.5:6015/swagger/index.html',
    });
    cy.request({
        method: "GET",
        url: 'https://172.16.14.5:6025/swagger/index.html',
    });
    cy.request({
        method: "GET",
        url: 'https://172.16.14.5:6035/swagger/index.html',
    });
    cy.request({
        method: "GET",
        url: 'https://172.16.14.5:6015/swagger/index.html',
    });
});

When('I vend a drink on the machine', () => {
    cy.readFile('C:/Cypress Clone/grid2.0/cypress/fixtures/message.json').then((temp) => {
        let id = temp.machineID;
        cy.wait(1000);
        cy.request({
            method: "POST",
            url: `https://172.16.14.5:6005/api/v1/salessimulator`,
            //failOnStatusCode: false,
            header: {
                "Authorization": "Basic bWFoZXNobWFkaXNoZXR0aUBjb3N0YS5jby51azpMb25kb24zMDMw",
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            form: false,
            body: {
                "machineSystemId": id,
                "manufacturePrice": machineSalesDetails.salesData.manufacturePrice,
                "cupSizeCode": machineSalesDetails.salesData.cupSizeCode,
                "grinder": machineSalesDetails.salesData.grinder,
                "milk": machineSalesDetails.salesData.milk,
                "syrup": machineSalesDetails.salesData.syrup,
                "isCanceled": machineSalesDetails.salesData.isCanceled,
                "drinkCode": machineSalesDetails.salesData.drink
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('status', 1);
            expect(response.body).to.have.property('data', true);
            expect(response.body).to.have.property('message', 'Published successfully');
        })
    })
});

Then('the sales data is displayed in the machine Sales details page', () => {
    memp.clickMachineManagementButton();
    mm.enterSearch(addMachineDetails.machineMove.machine);
    memp.clickEditMarket();
    cy.contains('Sales Details').click();
    cy.get('#TextBox-search-sales').type(machineSalesDetails.salesData.drinkCode + '{enter}');
    cy.get('#table-sales > tbody').last().contains(machineSalesDetails.salesData.drinkCode);
    cy.get('#table-sales > tbody').last().contains(machineSalesDetails.salesData.manufacturePrice);
    cy.get('#table-sales > tbody').last().contains(machineSalesDetails.salesData.price);
});

When('I click on view button', () => {
    cy.wait(1000);
    cy.get('#table-sales tr:nth-of-type(1) img:nth-of-type(1)').click();
    //cy.get('[title="View"]').click();
});

Then('I can able to view the sales details', () => {
    cy.contains(machineSalesDetails.salesData.price);
    cy.contains(machineSalesDetails.salesData.manufacturePrice);
    cy.contains(machineSalesDetails.salesData.drinkName);
    cy.contains(machineSalesDetails.salesData.drinkType);
    cy.contains(machineSalesDetails.salesData.cupSize);
    cy.contains(machineSalesDetails.salesData.beanType);
    cy.contains(machineSalesDetails.salesData.cupVolume);
    cy.contains(machineSalesDetails.salesData.milkType);
    cy.contains(machineSalesDetails.salesData.flavourShots);
    cy.contains('Successful');
});

When('I send a machine simulator API call', () => {
    cy.readFile('C:/Cypress Clone/grid2.0/cypress/fixtures/message.json').then((temp) => {
        let id = temp.machineID;
        cy.wait(1000);
        cy.request({
            method: "POST",
            url: `https://172.16.14.5:6005/api/v1/machinesimulator`,
            //failOnStatusCode: false,
            header: {
                "Authorization": "Basic bWFoZXNobWFkaXNoZXR0aUBjb3N0YS5jby51azpMb25kb24zMDMw",
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            form: false,
            body: {
                "machineSystemId": id,
                "currentSoftwareVersion": machineSalesDetails.machineTwin.currentSoftwareVersion,
                "isInDaylightSavingTimeMode": machineSalesDetails.machineTwin.isInDaylightSavingTimeMode,
                "macAddress": machineSalesDetails.machineTwin.macAddress,
                "machineType": machineSalesDetails.machineTwin.machineType,
                "machineTypeCode": machineSalesDetails.machineTwin.machineTypeCode,
                "materialGroupNumber": machineSalesDetails.machineTwin.materialGroupNumber,
                "timeOffset": machineSalesDetails.machineTwin.timeOffset,
                "paymentSystemType": machineSalesDetails.machineTwin.paymentSystemType,
                "geoPositionLongitude": machineSalesDetails.machineTwin.geoPositionLongitude,
                "paymentTerminalId": machineSalesDetails.machineTwin.paymentTerminalId,
                "geoPositionLatitude":machineSalesDetails.machineTwin.geoPositionLatitude
            }
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property('status', 1);
            expect(response.body).to.have.property('data', true);
            expect(response.body).to.have.property('message', 'Published successfully');
        })
    })
    var today = new Date();
    //var hours = today.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
    let date = ("0" + today.getDate()).slice(-2) + '-' + (("0" + (today.getMonth() + 1)).slice(-2)) + '-' + today.getFullYear();
    //let strTime = hours + ":" + today.getMinutes();//+ ":" + today.getSeconds();
    let datatime = date; //' ' + strTime;
    cy.wrap(datatime).as("datatime");
});

Then('the commissioning state is change to Commissioned', () => {
    memp.clickMachineManagementButton();
    mm.enterSearch(addMachineDetails.machineMove.machine);
    memp.clickEditMarket();
    cy.get('#Dropdown-machineCommissioningStatus').should('not.contain', 'Not Commissioned');
    cy.get('#Dropdown-machineCommissioningStatus').contains('Commissioned');
});

Then('Working state is changes to Trading', () => {
    cy.get('#Dropdown-machineWorkingStatus').contains('Trading');
    cy.get('#Dropdown-machineTargetWorkingStatus').contains('Trading');
});

Then('payment system type, payment terminal id, Geo position latitude, Geo position lognitude values are updated and fields becomes uneditable.', () => {
    cy.get('#TextBox-machinePaymentSystemType').should('be.disabled');
    cy.get('#TextBox-machinePaymentTerminalID').should('be.disabled');
    cy.get('#TextBox-machineGeoPositionLat').should('be.disabled');
    cy.get('#TextBox-machineGeoPositionLong').should('be.disabled');
    cy.get("#TextBox-machinePaymentSystemType").matchImageSnapshot('paymentType');
    cy.get("#TextBox-machinePaymentTerminalID").matchImageSnapshot('paymentID');
    cy.get("#TextBox-machineGeoPositionLat").matchImageSnapshot('geoLat');
    cy.get("#TextBox-machineGeoPositionLong").matchImageSnapshot('geoLong');
});

When('I navigate to Machine data tab', () => {
    cy.contains('Machine Data').click();
});

Then('I confirm communication state is showed as online', () => {
    cy.wait(1000);
    cy.get('div.ng-star-inserted > :nth-child(2)').should('contain', 'Commissioned')
        .and('contain', 'ONLINE')
        .and('contain', machineSalesDetails.machineTwin.machineTypeCode)
        .and('contain','UTC +'+machineSalesDetails.machineTwin.timeOffset);
});

Then('Machine Type, Mac Address, current Software version and Machine TimeZone also updated', () => {
    cy.get('div.ng-star-inserted > :nth-child(3)').should('contain', 'Trading')
        .and('contain', machineSalesDetails.machineTwin.paymentSystemType)
        .and('contain',  machineSalesDetails.machineTwin.macAddress)
        .and('contain',  machineSalesDetails.machineTwin.paymentTerminalId);
});

Then('I check Last Machine Data Received, Last Communication Update Received dates as well', () => {
    cy.get("@datatime").then((datatime) => {
        cy.get('div.ng-star-inserted > :nth-child(4)').should('contain', datatime);
    });
});

When('I check Last Refreshed date also get updated', () => {
	cy.get("@datatime").then((datatime) => {
        cy.get('.lavel-setup-details').should('contain', datatime);
    });
});
