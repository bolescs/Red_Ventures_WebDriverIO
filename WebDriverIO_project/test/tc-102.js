/**
* @author Cameron Boles
* @version 1.0
*
* This is the script for test case #102.
* The purpose of this test case is to confirm the 'My Account' hyperlink works as expected
*   and to ensure we can login successfully.
* This test case uses assertion to assert that the expected and actual url's are the same.
* This test case is tested in both Chrome and Firefox.
*/
var assert = require('assert');
//login page url.
const correctURL = 'https://frontier.com/login?target=2f6163636f756e74';
//page displayed after successful login.
const loginSuccessURL = 'https://frontier.com/account#/no-accounts';
var newURL;
/*
* Enter Mocha suite.
*/
describe('TC_102: Login page', function() {
    //test 'My Account' hyperlink.
    it('should load login page', function () {
        this.timeout(20000);
        browser.url('/')
        .click('[href="https://www.frontier.com/BillPay/Login"]');

        assert.equal(myChromeBrowser.getUrl(), correctURL);
        assert.equal(myFirefoxBrowser.getUrl(), correctURL);
        newURL = myChromeBrowser.getUrl();
    });

    //test to make sure we can login successfully.
    it('should allow me to login to my account', function () {
        this.timeout(20000);
        browser.url(newURL)
        .click('#aSignInMenu')
        //entering previously registered credentials.
        .setValue('#fid-login-inline-username', 'hanzo_main123@gmail.com')
        .setValue('#fid-login-inline-password', 'Password123')
        .click('button*=Sign In')
        //we must wait for login to process, 'Link account' button is displayed on loginSuccessURL.
        .waitForVisible('button*=Link account', 10000);

        //ensure we made it to our account page.
        assert.equal(myChromeBrowser.getUrl(), loginSuccessURL);
        assert.equal(myFirefoxBrowser.getUrl(), loginSuccessURL);
    });
});
