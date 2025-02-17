Feature: System Admin, should able to create a Market

    Background:
        Given I login as System Admin
    @TestCaseKey=TM-T373
    @SmokeTest
    Scenario: TM-T373: Verify user can able to enter Market Details and can able to set up the Market Level while creating the Market
        # And I search for Market and click on Edit button
        # And I click on Save and next button
        # And I click  on Next button
        # And I click on Save and next button
        And I click Add Market button
        And I enter all the details in the Market page
        And I setup different market level
        When I click Next button in Market level button
        Then I acknowledge the confirmation popup by clicking Yes button
        Given I select all Mandatory values in Manage Ingredients
        And I select all Mandatory values in Ingredients setup
        When I click on Save button
        Then I search for the created market
        And I view the market details and market level setup
    @TestCaseKey=TM-T74
    Scenario: TM-T74: Verify System Admin can able to create a market/entity with the Mandatory fields entered
        And I click Add Market button
        When I have entered all the mandatory fields
        Then save & next is enabled
    @TestCaseKey=TM-T75
    Scenario: TM-T75: Verify error msg is displayed when a mandatory field is not entered by the user
        And I click Add Market button
        When I have entered all the mandatory fields
        And I clear Market Name mandatory fields
        Then Save button is disabled and Market Name Error msg "Market Name is required" is displayed
        When I clear Country code mandatory fields
        Then Save button is disabled and Country code Error msg "Please select Country Code" is displayed
        When I clear Business Email Address mandatory fields
        Then Save button is disabled and Business Email Address Error msg "Business Email Address is required" is displayed
        When I clear Business landline code mandatory fields
        Then Save button is disabled and Business landline code Error msg "Country Code is required" is displayed
        When I clear Business landline number mandatory fields
        Then Save button is disabled and Business landline number Error msg "Business Landline Number is required" is displayed
        When I clear Alarm email mandatory fields
        Then Save button is disabled and Alarm email Error msg "Alarms Escalation Email is required" is displayed
        When I clear Cup Size Small mandatory fields
        Then Save button is disabled and Cup Size - Small Error msg "Cup Size - Small is required" is displayed
        When I clear Cup Size Medium mandatory fields
        Then Save button is disabled and Cup Size - Medium Error msg "Cup Size - Medium is required" is displayed
        When I clear Cup Size Large mandatory fields
        Then Save button is disabled and Cup Size - Large Error msg "Cup Size - Large is required" is displayed
        When I clear Coca Cola Region mandatory fields
        Then Save button is disabled and Coca Cola Region Error msg "Coca Cola Region is required" is displayed
    @TestCaseKey=TM-T370
    Scenario: TM-T370: Verify that 'Bill To' value is unique for the 'Add Market' entity.
        And I click Add Market button
        And I have entered all the mandatory fields with existing Bill To
        When I select save & next button
        Then I see an error msg for already existing bill to value
    @TestCaseKey=TM-T371
    Scenario: TM-T371: Verify that 'Market Name' value is unique for the 'Add Market' entity.
        And I click Add Market button
        And I have entered all the mandatory fields with existing Market Name
        When I select save & next button
        Then I see an error msg for already existing Market Name
    @TestCaseKey=TM-T372
    Scenario: TM-T372: Verify that country code, timezone, price card, email and phone no fields accepts only valid format in Add Market entity
        And I click Add Market button
        And I have entered all the mandatory fields
        When I enter incorrect values in Country Code, I would see following error msg
            | Value | ErrorMsg                   |
            | aaaaa | Please select Country Code |
            | 11    | Please select Country Code |
        And I enter valid Country Code, no warning msg is displayed
        When I enter incorrect values in Timezone, I would see following error msg
            | Value | ErrorMsg               |
            | 1111  | Please select Timezone |
            | abc   | Please select Timezone |
        And I enter valid Timezone, no warning msg is displayed
        When I enter incorrect values in Business Email Address, I would see following error msg
            | Value                    | ErrorMsg                           |
            | 11.co.uk                 | Enter valid Business Email Address |
            | 1@co.uk.i                | Enter valid Business Email Address |
            | 1@co.u                   | Enter valid Business Email Address |
            | 1@co.c0m                 | Enter valid Business Email Address |
            | abc.def@mail#archive.com | Enter valid Business Email Address |
            | a@m.n                    | Enter valid Business Email Address |
            | a@ma.n-                  | Enter valid Business Email Address |
        And I enter valid Business Email Address, no warning msg is displayed
        When I enter incorrect values in Alarms Escalation Email, I would see following error msg
            | Value                    | ErrorMsg                            |
            | 11.co.uk                 | Enter valid Alarms Escalation Email |
            | 1@co.uk.i                | Enter valid Alarms Escalation Email |
            | 1@co.u                   | Enter valid Alarms Escalation Email |
            | 1@co.c0m                 | Enter valid Alarms Escalation Email |
            | abc.def@mail#archive.com | Enter valid Alarms Escalation Email |
            | a@m.n                    | Enter valid Alarms Escalation Email |
            | a@ma.n-                  | Enter valid Alarms Escalation Email |
        And I enter valid Alarms Escalation Email, no warning msg is displayed
        When I enter incorrect values in Business Landline Area Code Number, I would see following error msg
            | Value | ErrorMsg                 |
            | 0011  | Enter valid Country Code |
            | +44   | Enter valid Country Code |
            | abc   | Enter valid Country Code |
            | 1 1   | Enter valid Country Code |
        And I enter valid Business Landline Area Code Number, no warning msg is displayed
        When I enter incorrect values in Business Landline Number, I would see following error msg
            | Value            | ErrorMsg                             |
            | 111111           | Enter valid Business Landline Number |
            | 1234567890123456 | Enter valid Business Landline Number |
            | 1111-8888        | Enter valid Business Landline Number |
            | 1111 8888        | Enter valid Business Landline Number |
            | 1111o8888        | Enter valid Business Landline Number |
        And I enter valid Business Landline Number, no warning msg is displayed
        When I enter incorrect values in Price Card, I would see following error msg
            | Value | ErrorMsg                 |
            | ++    | Please select Price Card |
        And I enter valid Price Card, no warning msg is displayed
    @TestCaseKey=TM-T374
    @testing
    Scenario: TM-T374: Verify user can able to Edit the fields in the Market Page
        And I search for the created market
        And I select a Market and click on Edit button
        When I edit the fields, I would see popup msg appeared
            | fields                             | popupMsg                                                   |
            | #edit-marketFranchiseId            | Are you sure, you want to update Franchise ID?             |
            | #edit-marketName                   | Are you sure, you want to update Market Name?              |
            | #edit-marketBillTo                 | Are you sure, you want to update Bill To?                  |
            | #edit-marketTimeZone               | Are you sure, you want to update Timezone?                 |
            | #edit-marketParentOrganizationName | Are you sure, you want to update Parent Organization Name? |
            | #edit-marketCocaColaRegion         | Are you sure, you want to update Coca Cola Region?         |
        Then I click Yes and edit all the fields
        When I click on Save&Next button
        Then I should not able to edit the fields in the Market level setup page
        And I click cancel button
        And I search for the edited market
        And I select the Market and I click on view button
        When I click on Edit button in the view page
        Then I should able to navigate to edit screen
        When I edit the fields, I would see popup msg appeared
            | fields                             | popupMsg                                                   |
            | #edit-marketFranchiseId            | Are you sure, you want to update Franchise ID?             |
            | #edit-marketName                   | Are you sure, you want to update Market Name?              |
            | #edit-marketBillTo                 | Are you sure, you want to update Bill To?                  |
            | #edit-marketTimeZone               | Are you sure, you want to update Timezone?                 |
            | #edit-marketParentOrganizationName | Are you sure, you want to update Parent Organization Name? |
            | #edit-marketCocaColaRegion         | Are you sure, you want to update Coca Cola Region?         |
        Then I click Yes and edit all the fields with other information
        When I click on Save&Next button
        Then I should not able to edit the fields in the Market level setup page
#  @TestCaseKey=TM-T374
#  @testing
#     Scenario: Verify user can able to Edit the fields in the Market Page
#         And I search for the created market
#         And I select a Market and click on Edit button
#         When I click on Save&Next button
#         When I click Next button in Market level button
#         Given I select all Mandatory values in Manage Ingredients
#         And I select all Mandatory values in Ingredients setup
       