# Introduction 
A test automation setup done for Awesome Calculator application using Microsoft Playwright tool 

# Getting Started
1. Install Node, NPM [prefrebly latest stable version]
2. In terminal execute "npm install" - all dependecnies are downloaded
3. To download all browser binaries - "npx playwright install" [In first time, it will downlad all browsers binaries and next time it will update as needed]
4. You are all set now to execute your tests 

# Build and Test
1. Various scripts are already setup in package.json - for example, to run tests in Safari browser, simply execute "npm run Safari_Tests"
2. npm run Chrome_Tests
3. npm run All_Tests [for more scripts, refer package.json]

# Test Report
1. After tests are done, execute "npx playwright show-report"
2. A web based report opens up in browser
3. Allure reports creationa and launch scripts are also added in package.json