Feature: System Admin, should able to create a level 3 Entity
    Background:
        Given I login as System Admin
    @TestCaseKey=TM-T385
    Scenario: TM-T385: Verify save button is disabled when mandatory fields are not entered in Level 3 Entity and display error msgs
        And I search for Level 2 Entity
        And I select the Entity and click on add entity button
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
            | #TextBox-level3EntityName          | Level 3 Entity Name is required      | Lancashire      |
            | #TextBox-level3EntityReference     | Level 3 Entity Reference is required | Lancashire-N123 |
            | #TextBox-level3TradeCode           | Trade Code is required               | N123            |
            | #TextBox-level3BrandCode           | Brand Code is required               | 0001            |
            | #TextBox-level3ContactEmail        | Business Email Address is required   | xyz@anymail.com |
            | #TextBox-level3ContactPhoneCountry | Country Code is required             | 011             |
            | #TextBox-level3ContactPhone        | Business Landline Number is required | 1234567890      |
        When I dont select any Brand Type
        Then error msg "Brand Type is required" is displayed
        And Brand code is cleared
    @TestCaseKey=TM-T386
    @SmokeTest
    Scenario: TM-T386: Verify admin user can able to add Level 3 Entity by entering mandatory fields
        And I search for Level 2 Entity
        And I select the Entity and click on add entity button
        When I enter all mandatory fields
        Then Save button is enabled
        When I click Save button
        Then Level 3 Entity is created
    @TestCaseKey=TM-T387
    Scenario: TM-T387: Verify user can't able to create a Level 3 Entity with existing Level 3 Entity Name
        And I search for Level 2 Entity
        And I select the Entity and click on add entity button
        When I enter all mandatory fields with Existing Level 3 Entity Name
        And I click Save button
        Then I see an error msg "Another entity already exists with 'Level 3 Entity Name'. You cannot have duplicate values"
    @TestCaseKey=TM-T389
    Scenario: TM-T389: Verify user can able to view and edit the Level 3 Entity
        And I search for Level 3 Entity
        And I select the entity and click Edit button
        When I edit the fields, I would see popup msg appeared
            | fields                      | popupMsg                                                   |
            | #edit-level3EntityReference | Are you sure, you want to update Level 3 Entity Reference? |
            | div:nth-of-type(4) [alt]    | Are you sure, you want to update Bill To?                  |
            | #edit-level3CountryCode     | Are you sure, you want to update Country Code?             |
            | #edit-level3TimeZone        | Are you sure, you want to update Timezone?                 |
        Then I click Yes and edit all the fields in Level 3 Entity
        When I click Save button
        And I search for edited Level 3 Entity
        And I select the entity and click View button
        When I click on Edit button in the view page
        Then I should able to navigate to edit screen
        When I edit the fields, I would see popup msg appeared
            | fields                      | popupMsg                                                   |
            | #edit-level3EntityReference | Are you sure, you want to update Level 3 Entity Reference? |
            | div:nth-of-type(4) [alt]    | Are you sure, you want to update Bill To?                  |
            | #edit-level3CountryCode     | Are you sure, you want to update Country Code?             |
            | #edit-level3TimeZone        | Are you sure, you want to update Timezone?                 |
        Then I click Yes and edit all the fields with Level 3 Entity information
        And store the entity id
        When I click Save button
        And I search for Level 3 Entity
        And I select the entity and click View button
        Then I should validate the stored information