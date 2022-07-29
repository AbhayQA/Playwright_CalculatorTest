
const { test, expect } = require('@playwright/test');
const { HomePageObjects } = require('../pageObjects/HomePageObjects');

test.beforeEach(async ({ page }, testInfo) => {
  //Launch test application before each test case
  await page.goto('http://localhost:8080/');

});

test('Validate Awesome calculator homepage title', async ({ page }) => {
  //Expect title "to contain" a substring.
  await expect(page).toHaveTitle(/Invitation Mode/);
});

test('Validate the content of the home page', async ({ page }) => {
  const homePageObjects = new HomePageObjects(page);

  //Validate the elements in the page
  await expect(homePageObjects.header).toHaveText('Best, most awesome factorial calculator!');
  await expect(homePageObjects.inputField).toBeVisible();
  await expect(homePageObjects.calculateButton).toBeVisible();
  await expect(homePageObjects.campaignField).toBeVisible();
  await page.waitForTimeout(1000); //Just added to slowdown the execution to see while execution. To be reomved while real testing
  
});

test('Validates the calculator functionality with static numbers', async ({ page }) => {
  const homePageObjects = new HomePageObjects(page);

  // (Negative scenario) Validate the factorial calculation functionality -- if input is any non digit
  await homePageObjects.inputField.fill('aaa');
  await homePageObjects.calculateButton.click();
  await expect(homePageObjects.output).not.toHaveText('The factorial value is');
  await page.waitForTimeout(1000); //Just added to slowdown the execution to see while execution. To be reomved while real testing

  //Validate the factorial calculation functionality -- test value 2
  await homePageObjects.inputField.fill('2');
  await homePageObjects.calculateButton.click();
  await expect(homePageObjects.output).toBeVisible();
  await expect(homePageObjects.output).toHaveText('The factorial value is : '+factorial(2)+'');
  await page.waitForTimeout(1000); //Just added to slowdown the execution to see while execution. To be reomved while real testing

  //Validate the factorial calculation functionality -- test value 10
  await homePageObjects.inputField.fill('10');
  await homePageObjects.calculateButton.click();
  await expect(homePageObjects.output).toBeVisible();
  await expect(homePageObjects.output).toHaveText('The factorial value is : '+factorial(10)+'');
  await page.waitForTimeout(1000); //Just added to slowdown the execution to see while execution. To be reomved while real testing

});

test('Validates the calculator functionality with static higher values', async ({ page }) => {
  const homePageObjects = new HomePageObjects(page);

  //Validate the factorial calculation functionality -- test value 99
  await homePageObjects.inputField.fill('99');
  await homePageObjects.calculateButton.click();
  await expect(homePageObjects.output).toBeVisible();
  await expect(homePageObjects.output).toHaveText('The factorial value is : '+factorial(99)+'');
  await page.waitForTimeout(1000); //Just added to slowdown the execution to see while execution. To be reomved while real testing

});

test('Validates the calculator functionality with random number', async ({ page }) => {
  const homePageObjects = new HomePageObjects(page);

  //Validate the factorial calculation functionality -- random number
  var randomnumber = Math.floor(Math.random() *100);
  await homePageObjects.inputField.fill(randomnumber.toString());
  await homePageObjects.calculateButton.click();
  await expect(homePageObjects.output).toBeVisible();
  await expect(homePageObjects.output).toHaveText('The factorial value is : '+factorial(randomnumber)+'');
  await page.waitForTimeout(1000); //Just added to slowdown the execution to see while execution. To be reomved while real testing

});

//To calculate factorial value of input numbers
function factorial(n){
  //base case
  if(n == 0 || n == 1){
      return 1;
  //recursive case
  }else{
      return n * factorial(n-1);
  }
}
