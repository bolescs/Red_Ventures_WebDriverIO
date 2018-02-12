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

Of course, before I began writing and testing these cases, I had to do a lot of research on the tools I was going to use.  I had never used WebDriverIO so I spent quite a bit of time setting it up on my local machine and ensuring it would work properly.  
