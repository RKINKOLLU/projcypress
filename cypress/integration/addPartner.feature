Feature: System Admin, should able to create a Partner
    Background:
        Given I login as System Admin
    @TestCaseKey=TM-T390
    Scenario: TM-T390: Verify save button is disabled and display error msgs when mandatory fields are not entered in the Add Partner Entity
        And I search for Level 3 Entity
        And I select the Entity and click on add entity button
        When I enter all mandatory fields
        Then Save and Next button is enabled
        When I clear the Parent entity
        Then I would see an errorMsg "Parent Entity is required"
        And Save and Next button is disabled
        When I reselect the Parent Entity
        Then all mandatory fields get cleared
        Given I enter all mandatory fields
        When I clear each mandatory field, the error msg is displayed and save and next button is disabled
            | field                               | errorMsg                             | enterValue      |
            | #TextBox-partnerName                | Partner Name is required             | TescoMainStores |
            | #TextBox-partnerReference           | Partner Reference is required        | Tesco-N123      |
            | #TextBox-partnerTradeCode           | Trade Code is required               | N123            |
            | #TextBox-partnerBrandCode           | Brand Code is required               | 0001            |
            | #TextBox-partnerContactEmail        | Business Email Address is required   | xyz@anymail.com |
            | #TextBox-partnerContactPhoneCountry | Country Code is required             | 011             |
            | #TextBox-partnerContactPhone        | Business Landline Number is required | 1234567890      |
        When I dont Select Brand Type
        Then error msg "Brand Type is required" is displayed
        And Brand code is cleared
        When I dont select any drop downs
            | dropdownValue            | dropdowns                      | errorMsg                      | selectValue |
            | Select Cup Size - Small  | #Dropdown-partnerCupSizeSmall  | Cup Size - Small is required  | 9oz         |
            | Select Cup Size - Medium | #Dropdown-partnerCupSizeMedium | Cup Size - Medium is required | 16oz        |
            | Select Cup Size - Large  | #Dropdown-partnerCupSizeLarge  | Cup Size - Large is required  | 20oz        |
    @TestCaseKey=TM-T391
    @SmokeTest
    Scenario: TM-T391: Verify user can able to create a partner
        And I search for Level 3 Entity
        And I select the Entity and click on add entity button
        When I enter all mandatory fields
        And I click Save and Next button
        Then I navigate to Configuration page
        When I click on Save button
        And I search for created partner and parter name is displayed in the list
    @TestCaseKey=TM-T392
    Scenario: TM-T392: Verify user can't able to create a Partner with existing Partner Name
        And I search for Level 3 Entity
        And I select the Entity and click on add entity button
        When I enter all mandatory fields with Existing Partner Name
        And I click Save and Next button
        Then I see an error msg "Another entity already exists with 'Partner Name'. You cannot have duplicate values."
    @TestCaseKey=TM-T394
    Scenario: TM-T394: Verify user can able to view and edit the Partner Entity
        And I search for Partner Entity
        And I select the entity and click Edit button
        When I edit the fields, I would see popup msg appeared
            | fields                   | popupMsg                                            |
            | #edit-partnerReference   | Are you sure, you want to update Partner Reference? |
            | div:nth-of-type(4) [alt] | Are you sure, you want to update Bill To?           |
            | #edit-partnerCountryCode | Are you sure, you want to update Country Code?      |
            | #edit-partnerTimeZone    | Are you sure, you want to update Timezone?          |
            | #edit-partnerCurrency    | Are you sure, you want to update Currency?          |
        Then I click Yes and edit all the fields in Partner Entity
        When I click Save and Next button
        Then I navigate to Configuration page
        When I click on Save button
        And I search for edited Partner Entity
        And I select the entity and click View button
        When I click on Edit button in the view page
        Then I should able to navigate to edit screen
        When I edit the fields, I would see popup msg appeared
            | fields                   | popupMsg                                            |
            | #edit-partnerReference   | Are you sure, you want to update Partner Reference? |
            | div:nth-of-type(4) [alt] | Are you sure, you want to update Bill To?           |
            | #edit-partnerCountryCode | Are you sure, you want to update Country Code?      |
            | #edit-partnerTimeZone    | Are you sure, you want to update Timezone?          |
            | #edit-partnerCurrency    | Are you sure, you want to update Currency?          |
        Then I click Yes and edit all the fields in Partner Entity information
        And store the entity id
        When I click Save and Next button
        Then I navigate to Configuration page
        When I click on Save button
        And I search for Partner Entity
        And I select the entity and click View button
        Then I should validate the stored information