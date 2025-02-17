Feature: System Admin, should able to create a Site Entity
    Background:
        Given I login as System Admin
    @TestCaseKey=TM-T404
    Scenario: TM-T404: Verify save button is disabled when mandatory fields are not entered in Site Entity and display error msgs
        And I search for parent Entity
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
            | field                                                 | errorMsg                                              | enterValue        |
            | #TextBox-siteName                                     | Site Name is required                                 | Blackpool-Central |
            | #TextBox-siteReference                                | Site Reference is required                            | Blackpool-Central |
            | #TextBox-siteTradeCode                                | Trade Code is required                                | N123              |
            | #TextBox-siteBrandCode                                | Brand Code is required                                | 0001              |
            | #TextBox-sitePrimaryAlarmFirstContactEmail            | Primary Alarm 1st Contact Email is required           | xyz@anymail.com   |
            | #TextBox-sitePrimaryAlarmFirstContactNumberCountry    | Country Code is required                              | 011               |
            | #TextBox-sitePrimaryAlarmFirstContactNumber           | Primary Alarm 1st Contact Mobile Number is required   | 1234667890        |
            | #TextBox-siteServiceAgentName                         | Service Agent Company Name is required                | cocacola          |
            | #TextBox-siteServiceAgentEmail                        | Service Agent Business Email is required              | xyz@anymail.com   |
            | #TextBox-siteServiceAgentMobileNumberCountry          | Country Code is required                              | 011               |
            | #TextBox-siteServiceAgentMobileNumber                 | Service Agent Mobile Number is required               | 1234667890        |
            | #TextBox-siteEmail                                    | Business Email Address is required                    | xyz@anymail.com   |
            | #TextBox-sitePhoneNumberCountry                       | Country Code is required                              | 011               |
            | #TextBox-sitePhoneNumber                              | Business Landline Number is required                  | 1234667890        |
            | #TextBox-siteAddress                                  | Site Address1 is required                             | site-121          |
            | #TextBox-siteCity                                     | Site City is required                                 | site-121          |
            | #TextBox-siteLocality                                 | Site Locality is required                             | site-121          |
        When I clear drop down field, the error msg is displayed and save and next button is disabled
            | field                       | errorMsg                      | enterValue |
            | #S-Dropdown-siteCountryCode | Site Country Code is required | GB         |
            | #S-Dropdown-siteTimeZone    | Timezone is required          | London     |
        When I dont select any Brand Type
        Then error msg "Brand Type is required" is displayed
        And Brand code is cleared
        When I dont select any Language
        Then error msg "Language is required" is displayed
    @TestCaseKey=TM-T405
    @SmokeTest
    Scenario: TM-T405: Verify admin user can able to add a Site by entering mandatory fields
        And I search for parent Entity
        And I select the Entity and click on add entity button
        When I enter all mandatory fields
        And I click Save and Next button
        Then I navigate to Trade hours setup screen
        When I click Save and Next button in Trade hours setup screen
        Then I see confirmation msgs
        When I click Yes button
        Then I navigate to Configuration page
        Given I click on Ingredients Setup button
        And I select a machine
        When I click on Save button
        Then Site is created
    @TestCaseKey=TM-T406
    Scenario: TM-T406: Verify user can't able to create a Site with existing Site Name
        And I search for parent Entity
        And I select the Entity and click on add entity button
        When I enter all mandatory fields with Existing Site Name
        And I click Save and Next button
        Then I see an error msg "Another entity already exists with 'Site Name'. You cannot have duplicate values."
    @TestCaseKey=TM-T407
    Scenario: TM-T407: Verify user can able to view and edit the Site Entity
        And I search for Site Entity
        And I select the entity and click Edit button
        When I edit the fields, I would see popup msg appeared
            | fields                 | popupMsg                                              |
            | #edit-siteReference    | Are you sure, you want to update Site Reference?      |
            | #edit-siteSellToNumber | Are you sure, you want to update Site Sell To Number? |
            | #edit-siteCountryCode  | Are you sure, you want to update Site Country Code?   |
            | #edit-siteTimeZone     | Are you sure, you want to update Timezone?            |
        Then I click Yes and edit all the fields in Site Entity
        And I click Save and Next button
        Then I navigate to Trade hours setup screen
        When I click Save and Next button in Trade hours setup screen
        Then I navigate to Configuration page
        Given I click on Ingredients Setup button
        And I select a machine
        When I click on Save button
        And I search for edited Site Entity
        And I select the entity and click View button
        And I click on Edit button in the view page
        Then I should able to navigate to edit screen
        When I edit the fields, I would see popup msg appeared
            | fields                 | popupMsg                                              |
            | #edit-siteReference    | Are you sure, you want to update Site Reference?      |
            | #edit-siteSellToNumber | Are you sure, you want to update Site Sell To Number? |
            | #edit-siteCountryCode  | Are you sure, you want to update Site Country Code?   |
            | #edit-siteTimeZone     | Are you sure, you want to update Timezone?            |
        Then I click Yes and edit all the fields in Site Entity information
        And store the entity id
        And I click Save and Next button
        And I navigate to Trade hours setup screen
        When I click Save and Next button in Trade hours setup screen
        Then I navigate to Configuration page
        Given I click on Ingredients Setup button again
        And I select a machine
        When I click on Save button
        And I search for Site Entity
        And I select the entity and click View button
        Then I should validate the stored information
    @TestCaseKey=TM-T468
    @testing
    Scenario: TM-T468: Verify user can't able to create a machine when Trading hours are not set
        And I search for Site Entity
        And I select the Site and click on edit Site button
        When I navigate to Trade Hours Setup screen
        And I click Ban button on all Days
        Then I see an error msg "You are unable to remove trade hours from an active site."
        Given I make site inactive and Ban the last day
        And I Make the site active
        When I search for Site Entity
        And I click on Add entity button to create a machine
        Then I receive the msg "The site creation has not been completed. Please complete Trade Hours Setup against the site before adding machines to this site."
        And I click ok Button
        Given I navigate to Add Machine screen
        And I click on Add Machine button
        When I enter the site name
        Then the site appears inactive
        When I enter the site name
        Then I see a msg "Please select Parent Site"
    @TestCaseKey=TM-T469
    @testing
    Scenario: TM-T469: Verify admin user can able to edit the trading hours for a site
        And I search for Site Entity
        And I select the Site and click on edit Site button
        When I navigate to Trade Hours Setup screen
        And I click on Monday pencil icon
        Then I set the opening hrs and closing hrs
        And I save the changes
        And I can clone the changes
        And I can delete the opening and closing hrs
        When I delete all the opening and closing hrs
        Then I receive the msg "This is the last available trade hours slot, removing this will mark the day as closed. Are you sure you want to continue?"
        When I click Yes
        Then the day gets closed
        And I can ban the day directly by clicking on Ban button
        Then I receive the msg "Are you sure you want this day to show as closed?"
        When I click Yes
        Then the day gets closed
        And I save the trading hours changes