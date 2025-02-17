Feature: Verify if admin user can able to log into GRID 2.0 application.

Background:
        Given I login as System Admin
    @TestCaseKey=TM-T369
    @testing
    Scenario: TM-T369: Login positive testcase
        # When I type in Grid user username and password
        # And I click on Sign in button
        Then Entity Management should be shown