Feature: System Admin, should able to move Machines between the Sites
    Background:
        Given I login as System Admin
    @TestCaseKey=TM-T412
    @smoketest
    Scenario: TM-T412: Verify if user can able move Machines between the Sites
        And I create another site
        And I Navigate to Machine Management screen
        And I search for the Machine Entity
        And I click on change site button
        When I search for the site
        And I select the site
        And I click on Move button
        Then I see the Move Machine msgs
        And I click ok button
        When I entered all the mandatory fields
        And I click Save button
        And I search for the Machine Entity
        Then I see the machine appears with moved Sites name in the search list

    @TestCaseKey=TM-T413
    @smoketest
    @testing
    Scenario: TM-T413: Verify different msgs that occur during Machine move
        And I Navigate to Machine Management screen
        And I search for the Machine Entity
        And I click on change site button
        When I select the Brand Type with no entities associated
        Then I should see a msg: "No entities found for selected Brand Type. Please update the Brand Type or clear the search criteria to view the entity list."
        When I enter the search term which doesnt have any matching results
        Then I should see a msg: "No entities found for selected Brand Type. Please update the Brand Type or clear the search criteria to view the entity list."
        And I select the Brand Type with no entities associated
        Then I should see a msg: "No entities found for selected Brand Type. Please update the Brand Type or clear the search criteria to view the entity list."
        Given I clear the Search details
        And I search for the site to move a machine into the site
        And I select the site to move
        And I click on Move button
        And I see the Move Machine msgs
        When I click ok button
        Then the commissioning state must default to "Not Commissioned"
        When I click Cancel button without entering mandatory fields
        Then I should be asked to confirm the popup: "Are you sure you wish to cancel machine movement? All previously edited information will be lost."
        When I click on No
        Then I should be taken back to the edit machine details screen
        When I click on Yes
        Then I should be redirected back to the Machine list screen
        Given I  inactive a sites
        When I select the Inactive site in the machine move machine management screen
        And I click on Move button
        Then I see an error msg "You cannot move a machine to an inactive site. Please check the site entity status."