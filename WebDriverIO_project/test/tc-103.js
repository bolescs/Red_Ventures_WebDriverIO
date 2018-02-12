/**
* @author Cameron Boles
* @version 1.0
*
* This is the script for test case #103.
* The purpose of this test case is to confirm that a new account cannot use an existing email.
* This test case uses assertion to assert that the expected and actual url's are the same.
* This test case is test in both Chrome and Firefox.
*
* NOTE: THIS TEST CASE IS IMPOSSIBLE TO AUTOMATE.
*/
var assert = require('assert');
//register new user Url.
const registerURL = 'https://frontier.com/register';
/*
* Enter Mocha suite.
*/
describe('TC_103: Registration page', function() {
    //test duplicate email registration.
    it.skip('should not move forward', function () {
        this.timeout(20000);
        browser.url(registerURL)
        .setValue('#fid-register-first-name', 'John')
        .setValue('#fid-register-last-name', 'Smith')
        .setValue('#fid-register-email', 'hanzo_main123@gmail.com')
        .setValue('#fid-register-password', 'Fakepass1')
        .setValue('#fid-register-confirm-password', 'Fakepass1')
        .setValue('#fid-register-phone', '123-111-1111')
        .click('#recaptcha-anchor') //IMPOSSIBLE
        .click('#fid-register-tos')
        .waitForEnabled('button*=Create ID', 3000)
        .click('button*=Create ID').pause(2000);

        assert.equal(myChromeBrowser.getUrl(), registerURL);
        assert.equal(myFirefoxBrowser.getUrl(), registerURL);
    });
});
