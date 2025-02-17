Feature: Work flow for Grid 2.0

    Background: 
        Given I login as System Admin
    
    Scenario: Verify System Admin can able to create a market/entity with the Mandatory fields and can able to view them
        When I have entered all details in the Market and Market level setup pages
        Then I click save to confirm the updates
        When I select the same market entity to view the fields
        #Then I verify the details entered are correct in Market page