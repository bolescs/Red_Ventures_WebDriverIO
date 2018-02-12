/**
* @author Cameron Boles
* @version 1.0
*
* This is the script for test case #104.
* The purpose of this test case is to conduct a performance test on Frontier availability search.
* This test case uses assertion to assert that acutal time is less than or equal to acceptable time.
* This test case is tested in both Chrome and Firefox.
*/
var assert = require('assert');
const searchURL = 'https://internet.frontier.com/cart/address';
//our max time allowed.
const maxTime = 60000;
//our maximum reasonable time.
const goodTime = 15000;
/*
* Enter Mocha suite.
*/
describe('TC_104: Frontier availability', function() {
    //performance test for availability search.
    it('should load in reasonable amount of time', function () {
        //we will allow the availability search to last 60 seconds total (as noted on website)
        this.timeout(maxTime);
        browser.url(searchURL)
        .waitForVisible('#StreetAddress', 5000)
        .setValue('#StreetAddress', '447 E 12th Street')
        .setValue('#City', 'Charlotte')
        .setValue('#Zip', '28206')
        .selectByIndex('//*[@id="router"]/div/div/form/div[2]/div[3]/div/select', 32)
        .click('button*=Get Started');

        //start of search.
        var begin = Date.now();
        //function will wait until new Url reached.
        browser.waitUntil(function () {
          return myChromeBrowser.getUrl() != searchURL;
        }, maxTime, 'availability timeout');
        //end of search.
        var end = Date.now();

        //make sure results returned in <= 15 seconds.
        assert(end - begin <= goodTime);
    });
});
