/**
* @author Cameron Boles
* @version 1.0
*
* This is the script for test case #100.
* The purpose of this test case is for testing ZIP code input validation.
* This test case uses assertion to assert that the expected and actual url's are the same.
* This test case is tested in both Chrome and Firefox.
*/
var assert = require('assert');

//invalid values to test.
const invalids = ['hello', '10', '222222'];
//home page url, invalid ZIP codes should never leave this page.
const correctURL = 'https://internet.frontier.com/';

/*
* Enter our Mocha testing suite.
*/
describe('TC_100: ZIP Code Input Validation', function() {
    //testing 'hello'
    it(`Value of '${invalids[0]}' should not progress to next page`, function () {
        //open page.
        browser.url('/');
        //place invalid value in textbox.
        var input = $('#zip');
        input.setValue(invalids[0]);
        browser.click('#js-track-form-check-availability').pause(2000);
        //assert current Url and correctUrl are equal.
        assert.equal(myChromeBrowser.getUrl(), correctURL);
        assert.equal(myFirefoxBrowser.getUrl(), correctURL);
    });

    //testing '10'.
    it(`Value of '${invalids[1]}' should not progress to next page`, function () {
        browser.url('/');
        var input = $('#zip');
        input.setValue(invalids[1]);
        browser.click('#js-track-form-check-availability').pause(2000);
        assert.equal(myChromeBrowser.getUrl(), correctURL);
        assert.equal(myFirefoxBrowser.getUrl(), correctURL);
    });

    //testing '222222'.
    it(`Value of '${invalids[2]}' should not progress to next page`, function () {
        browser.url('/');
        var input = $('#zip');
        input.setValue(invalids[2]);
        browser.click('#js-track-form-check-availability').pause(2000);
        assert.equal(myChromeBrowser.getUrl(), correctURL);
        assert.equal(myFirefoxBrowser.getUrl(), correctURL);
    });
});
