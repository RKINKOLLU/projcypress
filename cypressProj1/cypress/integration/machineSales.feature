Feature: Validate machine Sales data
 Background:
        Given I login as System Admin
    @TestCaseKey=TM-T536
    @smoketest
    @testing
    Scenario: TM-T536: Verify system gets updated when Longitude, Latitude, Payment ID, Payment Type, Commissioning State, Machine Type are received from Machine Twin.
        And I navigate to machine management screen
        When I send a machine simulator API call 
        Then the commissioning state is change to Commissioned
        And Working state is changes to Trading
        And payment system type, payment terminal id, Geo position latitude, Geo position lognitude values are updated and fields becomes uneditable.
        When I navigate to Machine data tab
        Then I confirm communication state is showed as online
        And Machine Type, Mac Address, current Software version and Machine TimeZone also updated
        And I check Last Machine Data Received, Last Communication Update Received dates as well
        And I check Last Refreshed date also get updated

    @TestCaseKey=TM-T537
    @smoketest
    @testing
    Scenario: TM-T537: Verify machine sales data appears on the Sales Details page
        And I navigate to machine management screen
        When I vend a drink on the machine
        Then the sales data is displayed in the machine Sales details page
        When I click on view button
        Then I can able to view the sales details