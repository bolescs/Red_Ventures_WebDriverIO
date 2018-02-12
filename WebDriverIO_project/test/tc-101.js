/**
* @author Cameron Boles
* @version 1.0
*
* This is the script for test case #101.
* The purpose of this test case is to confirm the 'My Account' hyperlink works as expected
*   and to ensure fake credentials are not accepted at login.
* This test case uses assertion to assert that the expected and actual url's are the same.
* This test case is tested in both Chrome and Firefox.
*/
var assert = require('assert');
const correctURL = 'https://frontier.com/login?target=2f6163636f756e74'
//we use this var to ensure we progressed to the next page.
var newURL;
/*
* Enter Mocha suite.
*/
describe('TC_101: Login page', function() {
    //test 'My Account' hyperlink.
    it('should load login page', function () {
        this.timeout(20000);
        browser.url('/')
        .click('[href="https://www.frontier.com/BillPay/Login"]');

        assert.equal(myChromeBrowser.getUrl(), correctURL);
        assert.equal(myFirefoxBrowser.getUrl(), correctURL);
        newURL = myChromeBrowser.getUrl();
    });

    //test to make sure we cannot login.
    it('should not allow fake credentials', function () {
        this.timeout(20000);
        browser.url(newURL)
        .click('#aSignInMenu')
        //entering fake credentials.
        .setValue('#fid-login-inline-username', 'fake_account@gmail.com')
        .setValue('#fid-login-inline-password', 'none')
        .click('button*=Sign In');

        //page should not progress, therefore we expect to still be at correctURL.
        assert.equal(myChromeBrowser.getUrl(), correctURL);
        assert.equal(myFirefoxBrowser.getUrl(), correctURL);
    });
});
