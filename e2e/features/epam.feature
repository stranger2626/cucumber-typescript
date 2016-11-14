Feature: All navigation bar buttons should work and search should work as well

  Scenario: Check all navigation bar menues
    Given I am on epam homepage
    Then I go to Career page
    Then I go to Ideas page
    Then I go to Solutions page
    Then I go to Industries page
    Then I go to Contacts page


   Scenario: Check search and its aoutocomplete
   	Given I am on epam homepage
    Then I go to Contacts page
    Then I search for javascript in search