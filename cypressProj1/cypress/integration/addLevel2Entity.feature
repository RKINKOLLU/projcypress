Feature: System Admin, should able to create a level 2 Entity
    Background:
        Given I login as System Admin
    @TestCaseKey=TM-T381
    Scenario: TM-T381: Verify save button is disabled when mandatory fields are not entered in Level 2 Entity and display error msgs
        And I search for the created market
        And I select the Market and click on add entity button
        When I enter all mandatory fields
        Then Save button is enabled
        When I clear the Parent entity
        Then I would see an errorMsg "Parent Entity is required"
        And save button is disabled
        When I reselect the Parent Entity
        Then all mandatory fields get cleared
        Given I enter all mandatory fields
        When I clear each mandatory field, the error msg is displayed and save button is disabled
            | field                              | errorMsg                             | enterValue      |
            | #TextBox-level2EntityName          | Level 2 Entity Name is required      | Cocacola-North  |
            | #TextBox-level2EntityReference     | Level 2 Entity Reference is required | Cocacola-N123   |
            | #TextBox-level2TradeCode           | Trade Code is required               | N123            |
            | #TextBox-level2BrandCode           | Brand Code is required               | 0001            |
            | #TextBox-level2ContactEmail        | Business Email Address is required   | xyz@anymail.com |
            | #TextBox-level2ContactPhoneCountry | Country Code is required             | 011             |
            | #TextBox-level2ContactPhone        | Business Landline Number is required | 1234567890      |
        When I dont select Brand Type
        Then error msg "Brand Type is required" is displayed
        And Brand code is cleared
    @TestCaseKey=TM-T382
    @SmokeTest
    Scenario: TM-T382: Verify admin user can able to add Level 2 Entity by entering mandatory fields
        And I search for the created market
        And I select the Market and click on add entity button
        When I enter all mandatory fields
        Then Save button is enabled
        When I click Save button
        Then Level 2 Entity is created
    @TestCaseKey=TM-T383
    Scenario: TM-T383: Verify user can't able to create a Level 2 Entity with existing Level 2 Entity Name
        And I search for the created market
        And I select the Market and click on add entity button
        When I enter all mandatory fields with Existing Level 2 Entity Name
        And I click Save button
        Then I see an error msg "Another entity already exists with 'Level 2 Entity Name'. You cannot have duplicate values"
    @TestCaseKey=TM-T384
    Scenario: TM-T384: Verify user can able to view and edit the Level 2 Entity
        And I search for Level 2 Entity
        And I select the entity and click Edit button
        When I edit the fields, I would see popup msg appeared
            | fields                      | popupMsg                                                   |
            | #edit-level2EntityReference | Are you sure, you want to update Level 2 Entity Reference? |
            | div:nth-of-type(4) [alt]    | Are you sure, you want to update Bill To?                  |
            | #edit-level2CountryCode     | Are you sure, you want to update Country Code?             |
            | #edit-level2TimeZone        | Are you sure, you want to update Timezone?                 |
        Then I click Yes and edit all the fields in Level 2 Entity
        When I click Save button
        And I search for edited Level 2 Entity
        And I select the entity and click View button
        When I click on Edit button in the view page
        Then I should able to navigate to edit screen
        When I edit the fields, I would see popup msg appeared
            | fields                      | popupMsg                                                   |
            | #edit-level2EntityReference | Are you sure, you want to update Level 2 Entity Reference? |
            | div:nth-of-type(4) [alt]    | Are you sure, you want to update Bill To?                  |
            | #edit-level2CountryCode     | Are you sure, you want to update Country Code?             |
            | #edit-level2TimeZone        | Are you sure, you want to update Timezone?                 |
        Then I click Yes and edit all the fields with Level 2 Entity information
        And store the entity id
        When I click Save button
        And I search for Level 2 Entity
        And I select the entity and click View button
        Then I should validate the stored information