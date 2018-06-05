Feature: Running with Protractor
    As a user of Protractor
    I should be able to use Cucumber
    In order to run my E2E tests

    Scenario: 2 + 2 = 4
        Given Open calculator
        When Do 2 '+' 2
        Then I end up with 4

    Scenario: 2 - 2 = 0
        Given Open calculator
        When Do 2 '-' 2
        Then I end up with 0

    Scenario: 2 / 2 = 1
        Given Open calculator
        When Do 2 '/' 2
        Then I end up with 1


    Scenario: 2 * 2 = 4
        Given Open calculator
        When Do 2 '*' 2
        Then I end up with 4

  