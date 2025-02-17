Feature: System admin create price card template and assign to market
    Background:
        Given I login as System Admin
    @TestCaseKey=TM-T487
    @smoketest
    Scenario: TM-T487: Verify if admin user can able create a Price card template.
        When I click on price card template
        Then I see price card template management screen
        When I click on Price Card Template button
        And I enter all the fields and associate Markets as well
        And I click on Save button
        Then price card template is created and displayed in the list
    @TestCaseKey=TM-T488
    @smoketest
    Scenario: TM-T488: Verify if user can associate the Price card template and create a new Price Card.
        Given I navigate to Price Card
        And I click on Add Price Card button
        And I enter Price card Name
        And I choose the above price card template
        And I click next to go through Drink Pricing widget
        And I verify the all the dropdowns in the screen
        When I select multiple Drinks and Cup Sizes
        And I click on Add Drink button
        Then the combination of drink and cup sizes are displayed in the section

        Given I enter all the Drink pricing information
        And I click next to Coffee Pricing
        And I verify the Coffee Type drop down
        When I select multiple coffee types
        And I click on Add Coffee button
        Then I see the Coffee Type list is displayed in the record section

        Given I enter coffee pricing information
        And I click next to Milk Pricing
        And I verify the Milk Type drop down
        When I select multiple Milk Types
        And I click on Add Milk button
        Then I see the Milk Type list is displayed in the record section

        Given I enter Milk pricing information
        And I click Next to Syrups Pricing
        When I enter Syrups pricing information
        And I click on Next to Preview screen
        When I click on Export button
        Then the Price card is downloaded in CSV file
        When I click on Create button
        Then the price card is created and displayed in the price card list
    @TestCaseKey=TM-T489
    @smoketest
    Scenario: TM-T489: Verify if admin user can able assign the Price Card to an Entity.
        Given I navigate to Price Card
        And I search for the Price card
        When I click on Map Entity button
        Then I navigate to Entity mapping screen
        And I validate the Market dropdowns list
        And I select the markets, Partner and site
        And I select the start time 1 min earlier than current time
        When I click on Add Entity Mapping button
        Then the entity name is displayed in the record list
        And I click save changes
        Given after 1 min, I Navigate to site level entity
        When I check the price card fields
        Then The price card should get updated with the new price card
    @TestCaseKey=TM-T490
    Scenario: TM-T490: Verify if admin user can able edit the Price card template and can able to create a new price card based on edited template.
        And I click on price card template
        And I select an exiting Price card template
        And I click on Edit price card template button
        When I edit the Markets, Drinks, Cupsizes
        And I edit the Primary Coffee type and Primary Milk type
        And I click on Save button
        Then the Price card Templated list is displayed with edited associated drinks and Markets
        Given I navigate to Price Card
        And I click on Add Price Card button
        And I enter new Price card Name
        And I choose the above edited price card template
        And I click next to go through all the Pricing widget by entering pricing value
        When I click on Create button
        Then the price card is created with edited price card template and is displayed in the price card list
    @TestCaseKey=TM-T491
    Scenario: TM-T491: Verify admin user can able to assign a second price card with future start date to an entity
        Given I navigate to Price Card
        And I search for the new Price card
        When I click on Map Entity button
        Then I navigate to Entity mapping screen
        And I select the markets, Partner and site
        And I select future Date and Time
        When I click on Add Entity Mapping button
        Then the entity name is displayed in the record list
        And I click save changes
        And I verify entity assigned with future price card start Date doesnt have immediate affect
    @TestCaseKey=TM-T493
    @smoketest
    @testing
    Scenario: TM-T493: Verify admin user can able to Edit a price card that is already assigned to entities and can able to assign the new version of the (edited) price card to currently assigned entities
        Given I navigate to Price Card
        And I search for the Price card already assigned to entities
        When I click on Edit button
        Then I check the Price Name and Template filed are disabled
        And I click next to go through Drink Pricing widget
        When I select existing Drinks and Cupsizes from the dropdown list
        And I click on Add Drink button
        Then I see an error msg "Selected combination is already exists"
        And I remove Primary Coffee Type and Milk Type for few drinks
        And I change prices for few drink
        And I click next to Coffee Pricing
        When I select existing Coffee type from the dropdown
        And I click on Add Coffee button
        Then I see an error msg "Selected coffee type is already exists"
        And I edit the prices in the coffee pricing screen
        And I click next to Milk Pricing
        When I select existing Milk type from the dropdown
        And I click on Add Milk button
        Then I see an error msg "Selected milk type is already exists"
        And I edit the prices in the milk pricing screen
        And I click Next to Syrups Pricing
        And I edit the prices in the Syrups pricing screen
        And I click on Next to Preview screen
        When I click on Export button
        Then the Price card is downloaded in CSV file
        And I click on Save button on preview screen
        When I select expired time
        And click on Save Price Card setup button
        Then I see an error msg "Start date and time must be in the future"
        When I set the start time 1 min earlier than current time
        And click on Save Price Card setup button
        Then price card is created with new version number
        And after 1min confirm the Price card field in the site entity gets updated with the new version of price Card