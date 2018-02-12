# Red Ventures WebDriverIO project.
## Installations and how to run the tests:
You must have Node.js, Java, Chrome, and Firefox installed before running.

Download this project onto your computer.

Open command line and navigate to the WebDriverIO_project directory.

Frome here type the following commands:

npm install webdriverio

npm install mocha

npm install spec

npm install selenium-standalone

Finally, run the command 'npm test' to run the test cases.  After completion you should notice 8 passing, 2 failing, and 1 pending.


# Testing Approach
My first objective with this project was to do some exploring on the site and see what features I could envision a test case for.  Before beginning, I had an idea of what the most important features of the site were.  These included login, registration, input validation, and smooth UX.  I believe these are a few of the core features that should hold high priority in a testing environment.  At first, I created some rough draft test cases revolving around these features in order to form a baseline and build upon them.  At first visit of the Frontier site, the ZIP Code search caught my attention first.  I've done quite a bit of input validation tests in my experience, so I had a good idea of how this test case should work.  I manually entered many different values trying to break the feature and eventually had the information I needed to write an automated JavaScript test.  I used some of the other features as well in order to guage what kind of testing should be done for them and how I could better my rough drafts. 

Before I began writing and testing these cases, I had to do a lot of research on the tools I was going to use.  I had never used WebDriverIO so I spent some time setting it up on my local machine and ensuring it would work properly.  After researching and watching many tutorials, I got WebDriverIO working and decided to implement the Mocha testing framework in my JavaScript tests.  The Mocha framework was fun to use and allows you to easily convert a test suite or test case into JavaScript code.  WebDriverIO's Multiremote functionality also gave me the ability to run all the tests in both Chrome and Firefox at the same time.  The WebDriverIO API had a lot of great features.  The getCssProperty method is very cool and looks to be extremely useful for UI testing.  However, I did notice a few places where WebDriverIO was lacking.  For instance, I began implementing a test case that would test to make sure that when the mouse was hovering over a specific item, that item would change color.  The getCssProperty method made this very easy to test, but after extensive Googling, I realized there was no way to hover over an item via the WebDriverIO API.  The methods that were suppose to allow for this have been deprecated, or simply do not work with the ChromeDriver/FirefoxDriver.  The actions() method that would allow for this to work is not yet supported in either Chrome or Firefox.  Though, I'm sure with more time I could have discovered a solution or workaround.
