Feature: System Admin, should able to create a level 6 Entity
    Background:
        Given I login as System Admin
    @TestCaseKey=TM-T399
    Scenario: TM-T399: Verify save button is disabled when mandatory fields are not entered in Level 6 Entity and display error msgs
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
            | field                              | errorMsg                             | enterValue        |
            | #TextBox-level6EntityName          | Level 6 Entity Name is required      | Blackpool-Central |
            | #TextBox-level6EntityReference     | Level 6 Entity Reference is required | Blackpool-Central |
            | #TextBox-level6TradeCode           | Trade Code is required               | N123              |
            | #TextBox-level6BrandCode           | Brand Code is required               | 0001              |
            | #TextBox-level6ContactEmail        | Business Email Address is required   | xyz@anymail.com   |
            | #TextBox-level6ContactPhoneCountry | Country Code is required             | 011               |
            | #TextBox-level6ContactPhone        | Business Landline Number is required | 1234667890        |
        When I dont select any Brand Type
        Then error msg "Brand Type is required" is displayed
        And Brand code is cleared
    @TestCaseKey=TM-T400
    @SmokeTest
    Scenario: TM-T400: Verify admin user can able to add Level 6 Entity by entering mandatory fields
        And I search for parent Entity
        And I select the Entity and click on add entity button
        When I enter all mandatory fields
        Then Save button is enabled
        When I click Save button
        Then Level 6 Entity is created
    @TestCaseKey=TM-T401
    Scenario: TM-T401: Verify user can't able to create a Level 6 Entity with existing Level 6 Entity Name
        And I search for parent Entity
        And I select the Entity and click on add entity button
        When I enter all mandatory fields with Existing Level 6 Entity Name
        And I click Save button
        Then I see an error msg "Another entity already exists with 'Level 6 Entity Name'. You cannot have duplicate values"
    @TestCaseKey=TM-T402
    Scenario: TM-T402: Verify user can able to view and edit the Level 6 Entity
        And I search for Level 6 Entity
        And I select the entity and click Edit button
        When I edit the fields, I would see popup msg appeared
            | fields                      | popupMsg                                                   |
            | #edit-level6EntityReference | Are you sure, you want to update Level 6 Entity Reference? |
            | div:nth-of-type(4) [alt]    | Are you sure, you want to update Bill To?                  |
            | #edit-level6CountryCode     | Are you sure, you want to update Country Code?             |
            | #edit-level6TimeZone        | Are you sure, you want to update Timezone?                 |
        Then I click Yes and edit all the fields in Level 6 Entity
        When I click Save button
        And I search for edited Level 6 Entity
        And I select the entity and click View button
        When I click on Edit button in the view page
        Then I should able to navigate to edit screen
        When I edit the fields, I would see popup msg appeared
            | fields                      | popupMsg                                                   |
            | #edit-level6EntityReference | Are you sure, you want to update Level 6 Entity Reference? |
            | div:nth-of-type(4) [alt]    | Are you sure, you want to update Bill To?                  |
            | #edit-level6CountryCode     | Are you sure, you want to update Country Code?             |
            | #edit-level6TimeZone        | Are you sure, you want to update Timezone?                 |
        Then I click Yes and edit all the fields with Level 6 Entity information
        And store the entity id
        When I click Save button
        And I search for Level 6 Entity
        And I select the entity and click View button
        Then I should validate the stored information