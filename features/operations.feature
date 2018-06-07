Feature: Mathematical Operations with calculator
    As a user of calculator
    I should be able to use all operations

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

  
