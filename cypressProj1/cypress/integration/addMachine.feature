Feature: System Admin, should able to create a Machine for a Site
    Background:
        Given I login as System Admin
    @TestCaseKey=TM-T408
    Scenario: TM-T408: Verify save button is disabled when mandatory fields are not entered in Machine Entity and display error msgs
        And I search for parent Entity
        And I select the Entity and click on add entity button
        When I enter all mandatory fields
        Then Save and Next button is enabled
        When I clear the Parent entity
        Then I would see an errorMsg "Parent Site is required"
        And Save and Next button is disabled
        When I reselect the Parent Site Entity
        Then machine serial number, reference no and working state fields get cleared
        Given I enter all mandatory fields
        When I clear each mandatory field, the error msg is displayed and save and next button is disabled
            | field                                                       | errorMsg                                              | enterValue      |
            | #TextBox-machineSerialNumber                                | Machine Serial Number is required                     | 20202020        |
            | #TextBox-machineReference                                   | Machine Reference is required                         | pool-001        |
            | #TextBox-machinePrimaryAlarmFirstContactEmail               | Primary Alarm 1st Contact Email is required           | xyz@anymail.com |
            | #TextBox-machinePrimaryAlarmFirstContactMobileCountry\\#    | Country Code is required                              | 011             |
            | #TextBox-machinePrimaryAlarmFirstContactMobile\\#           | Primary Alarm 1st Contact Mobile Number is required   | 1234667890      |
            | #TextBox-machinePrimaryAlarmsecondContactEmail              | Primary Alarm 2nd Contact Email is required           | xyz@anymail.com |
            | #TextBox-machinePrimaryAlarmsecondContactPhoneCountry\\#    | Country Code is required                              | 011             |
            | #TextBox-machinePrimaryAlarmsecondContactMobile\\#          | Primary Alarm 2nd Contact Mobile Number is required   | 1234667890      |
            | #TextBox-machineSecondaryAlarmFirstContactEmail             | Secondary Alarm 1st Contact Email is required         | xyz@anymail.com |
            | #TextBox-machineSecondaryAlarmFirstContactMobileCountry\\#  | Country Code is required                              | 011             |
            | #TextBox-machineSecondaryAlarmFirstContactMobile\\#         | Secondary Alarm 1st Contact Mobile Number is required | 1234667890      |
            | #TextBox-machineSecondaryAlarmsecondContactEmail            | Secondary Alarm 2nd Contact Email is required         | xyz@anymail.com |
            | #TextBox-machineSecondaryAlarmsecondContactMobileCountry\\# | Country Code is required                              | 011             |
            | #TextBox-machineSecondaryAlarmsecondContactMobile\\#        | Secondary Alarm 2nd Contact Mobile Number is required | 1234667890      |
        When I clear drop down field, the error msg is displayed and save and next button is disabled
            | field                        | errorMsg               | enterValue |
            | #S-Dropdown-machinePriceCard | Price Card is required | (1)        |
        When I dont select any Commissioning Status
        Then error msg "Commissioning State is required" is displayed
        When I dont select any Machine Type
        Then error msg "Machine Type is required" is displayed
        When I dont select any Proposition Type
        Then error msg "Proposition Type is required" is displayed
    @TestCaseKey=TM-T409
    @SmokeTest
    Scenario: TM-T409: Verify admin user can able to add a Machine by entering mandatory fields
        And I search for parent Entity
        And I select the Entity and click on add entity button
        When I enter all mandatory fields
        And I click Save and Next button
        Then I navigate to Configuration page
        Given I click on Ingredients Setup button
        And I select a machine in configuration page
        When I click on Save button
        Then Machine is created
    @TestCaseKey=TM-T410
    Scenario: TM-T410: Verify user can't able to create a Machine with existing Machine Name
        And I search for parent Entity
        And I select the Entity and click on add entity button
        When I enter all mandatory fields with Existing Machine Name
        And I click Save and Next button
        Then I see an error msg "Machine Serial Number already exists!"
    @TestCaseKey=TM-T411
    @testing
    Scenario: TM-T411: Verify user can able to view and edit the Machine Entity
        And I Navigate to Machine Management screen
        And I search for the Machine Entity
        And I select the entity and click Edit button
        When I edit the fields, I would see popup msg appeared
            | fields                          | popupMsg                                            |
            | #edit-machineReference          | Are you sure, you want to update Machine Reference? |
            | #edit-Machine-Model-MachineType | Are you sure, you want to update Machine Type?      |
        Then I click Yes and edit all the fields in Machine Entity
        And I click Save and Next button
        Then I navigate to Configuration page
        Given I click on Ingredients Setup button in Edit Machine Page
        And I select a machine in configuration page
        When I click on Save button
        And I search for edited Machine Entity
        And I select the Machine and click View button
        And I click on Edit button in the view page
        Then I should able to navigate to edit screen
        When I edit the fields, I would see popup msg appeared
            | fields                          | popupMsg                                            |
            | #edit-machineReference          | Are you sure, you want to update Machine Reference? |
            | #edit-Machine-Model-MachineType | Are you sure, you want to update Machine Type?      |
        Then I click Yes and edit all the fields in Machine Entity information
        And store the entity id
        And I click Save and Next button
        Then I navigate to Configuration page
        Given I click on Ingredients Setup button
        And I select a machine in configuration page
        When I click on Save button
        And I search for the Machine Entity
        And I select the Machine and click View button
        Then I should validate the stored information