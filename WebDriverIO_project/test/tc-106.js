/**
* @author Cameron Boles
* @version 1.0
*
* This is the script for test case #106.
* The purpose of this test case is to confirm a pop up becomes visible when changing location.
* This test case uses assertion to assert if dialogueOpen = true.
* This test case is tested in both Chrome and Firefox.
*/
var assert = require('assert');

/*
* Enter Mocha suite.
*/
describe('TC_106: Change location option', function() {
    //test change location dialogue.
    it('should display dialog with address entry form', function () {
        this.timeout(10000);
        browser.url('/')
        .click('#js-track-home-hero')
        .waitForVisible('#js-track-hero-change-location', 5000)
        .click('#js-track-hero-change-location');

        //the isVisible function returns parsed JSON beause we are using Multiremote
        var dialogueOpen = browser.isVisible('#js-modal-availability');

        //we can access the JSON via '.', and confirm both browsers displayed the dialogue.
        assert.equal(dialogueOpen.myChromeBrowser, true);
        assert.equal(dialogueOpen.myFirefoxBrowser, true);
    });
});
