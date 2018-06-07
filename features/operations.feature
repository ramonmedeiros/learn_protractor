Feature: Running with Protractor
    As a user of Protractor
    I should be able to use Cucumber
    In order to run my E2E tests

    @sum
    Scenario: 2 + 2 = 4
        Given Open calculator
        When Do 2 '+' 2
        Then I end up with 4

    @minus
    Scenario: 2 - 2 = 0
        Given Open calculator
        When Do 2 '-' 2
        Then I end up with 0

    @division
    Scenario: 2 / 2 = 1
        Given Open calculator
        When Do 2 '/' 2
        Then I end up with 1

    @multiplication
    Scenario: 2 * 2 = 4
        Given Open calculator
        When Do 2 '*' 2
        Then I end up with 4

  
