Feature: System Admin, should able to create a level 5 Entity
    Background:
        Given I login as System Admin
    @TestCaseKey=TM-T395
    Scenario: TM-T395: Verify save button is disabled when mandatory fields are not entered in Level 5 Entity and display error msgs
        And I search for parent Entity
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
            | #TextBox-level5EntityName          | Level 5 Entity Name is required      | Blackpool-Store |
            | #TextBox-level5EntityReference     | Level 5 Entity Reference is required | Blackpool-N123  |
            | #TextBox-level5TradeCode           | Trade Code is required               | N123            |
            | #TextBox-level5BrandCode           | Brand Code is required               | 0001            |
            | #TextBox-level5ContactEmail        | Business Email Address is required   | xyz@anymail.com |
            | #TextBox-level5ContactPhoneCountry | Country Code is required             | 011             |
            | #TextBox-level5ContactPhone        | Business Landline Number is required | 1234567890      |
        When I dont select any Brand Type
        Then error msg "Brand Type is required" is displayed
        And Brand code is cleared
    @TestCaseKey=TM-T396
    @SmokeTest
    Scenario: TM-T396: Verify admin user can able to add Level 5 Entity by entering mandatory fields
        And I search for parent Entity
        And I select the Entity and click on add entity button
        When I enter all mandatory fields
        Then Save button is enabled
        When I click Save button
        Then Level 5 Entity is created
    @TestCaseKey=TM-T397
    Scenario: TM-T397: Verify user can't able to create a Level 5 Entity with existing Level 5 Entity Name
        And I search for parent Entity
        And I select the Entity and click on add entity button
        When I enter all mandatory fields with Existing Level 5 Entity Name
        And I click Save button
        Then I see an error msg "Another entity already exists with 'Level 5 Entity Name'. You cannot have duplicate values"
    @TestCaseKey=TM-T398
    Scenario: TM-T398: Verify user can able to view and edit the Level 5 Entity
        And I search for Level 5 Entity
        And I select the entity and click Edit button
        When I edit the fields, I would see popup msg appeared
            | fields                      | popupMsg                                                   |
            | #edit-level5EntityReference | Are you sure, you want to update Level 5 Entity Reference? |
            | div:nth-of-type(4) [alt]    | Are you sure, you want to update Bill To?                  |
            | #edit-level5CountryCode     | Are you sure, you want to update Country Code?             |
            | #edit-level5TimeZone        | Are you sure, you want to update Timezone?                 |
        Then I click Yes and edit all the fields in Level 5 Entity
        When I click Save button
        And I search for edited Level 5 Entity
        And I select the entity and click View button
        When I click on Edit button in the view page
        Then I should able to navigate to edit screen
        When I edit the fields, I would see popup msg appeared
            | fields                      | popupMsg                                                   |
            | #edit-level5EntityReference | Are you sure, you want to update Level 5 Entity Reference? |
            | div:nth-of-type(4) [alt]    | Are you sure, you want to update Bill To?                  |
            | #edit-level5CountryCode     | Are you sure, you want to update Country Code?             |
            | #edit-level5TimeZone        | Are you sure, you want to update Timezone?                 |
        Then I click Yes and edit all the fields with Level 5 Entity information
        And store the entity id
        When I click Save button
        And I search for Level 5 Entity
        And I select the entity and click View button
        Then I should validate the stored information