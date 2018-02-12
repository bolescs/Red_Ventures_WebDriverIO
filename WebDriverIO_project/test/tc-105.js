/**
* @author Cameron Boles
* @version 1.0
*
* This is the script for test case #105.
* The purpose of this test case is to ensure the spanish version of the site is loaded.
* This test case uses assertion to assert that the expected and actual urls are the same.
* This test case is tested in both Chrome and Firefox.
*/
var assert = require('assert');
var spanishURL = 'https://internet.frontier.com/espanol/';
/*
* Enter Mocha suite.
*/
describe('TC_105: Espanol link ', function() {
    //test spanish url loaded.
    it('should load spanish translated page', function () {
        browser.url('/')
        .click('[href="https://internet.frontier.com/espanol/"]');

        assert.equal(myChromeBrowser.getUrl(), spanishURL);
        assert.equal(myFirefoxBrowser.getUrl(), spanishURL);
    });
});
