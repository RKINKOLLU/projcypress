Feature: System Admin, should able to add the ingredients if needed
    Background:
        Given I login as System Admin
    @TestCaseKey=TM-T512
    @smoketest
    Scenario: TM-T512: Verify if user can able to add new Drink, Coffee Types, Milk Types and Syrups type ingredients in Master list.
        And I click on configuration
        And I navigate to Incredients Master list
        When I enter new drink, code and select cup Type and Drink Type
        And I click on Add Drink type button
        Then the added drink is displayed in the list

        Given I click on Coffee type tab
        And I enter new coffee type and code for it
        When I click on Add coffee type button
        Then the added coffee type is displayed in the list

        Given I click on Milk type tab
        And I enter new milk type and code for it
        When I click on Add Milk type button
        Then the added milk type is displayed in the list

        Given I click on Syrups tab
        And I enter new Syrup type and code for it
        When I click on Add syrups type button
        Then the added syrup is displayed in the list

        When I select a market level entity and click on edit
        And I navigate to cofiguration tab
        And I click on Manage Ingredients dropdowns
        Then the added coffee type, Milk type and syrups type should be displayed in the dropdrows list.

        When I select the added Ingredients and navigate to partner level
        Then I should able to select the added Ingredients in the Ingredients Setup
        When I navigate to site level entity
        Then I should able to see the added Ingredients are auto populated in the site