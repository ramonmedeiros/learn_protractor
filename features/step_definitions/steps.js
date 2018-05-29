// libs
const { Given, When, Then } = require('cucumber');
const assert = require('assert');
const EC = protractor.ExpectedConditions;

// elements
var firstNumber = element(by.model('first'));
var secondNumber = element(by.model('second'));
var goButton = element(by.id('gobutton'));
var latestResult = element(by.xpath("//td[contains(@class, 'ng-binding')]"));
var ng_binding = element(by.className('ng-binding'));

// helper functions
function typeInput(value, element) {
    return element.sendKeys(value);
};

function operation(op, locator) {
    return element(by.cssContainingText('option', op)).click();
};

// steps definitions
Given('Open calculator', function (callback) {
    browser.get("/protractor-demo")
    .then(callback);
});

When('Do {int} + {int}', function (number, number2, callback) {
    browser.wait(firstNumber.isPresent())
        .then(typeInput(number, firstNumber))
        .then(operation("+", "operator"))
        .then(typeInput(number2, secondNumber))
        .then(goButton.click());
    browser.wait(latestResult.isPresent())
        .then(callback);
});

Then('I end up with {int}', function (number, callback) {
     assert.equal(latestResult.getText(), number)
        .then(callback);
}); 

