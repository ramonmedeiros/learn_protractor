// libs
const { Given, When, Then } = require('cucumber');

// enable chai as assert
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

// elements
var firstNumber = element(by.model('first'));
var secondNumber = element(by.model('second'));
var goButton = element(by.id('gobutton'));
var latestResult = element(by.xpath("//h2[contains(@class, 'ng-binding')]"));

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

When('Do {int} {string} {int}', function (number, op, number2, callback) {
    browser.wait(firstNumber.isPresent())
        .then(typeInput(number, firstNumber))
        .then(operation(op, "operator"))
        .then(typeInput(number2, secondNumber))
        .then(goButton.click());
    expect(latestResult.isPresent())
        .and.notify(callback);
});

Then('I end up with {int}', function (number, callback) {
     expect(latestResult.getText()).to.eventually.equal(number.toString())
        .and.notify(callback); 
}); 

