const {test}= require('@playwright/test');
const HomePage= require('../pages/HomePage');
const RegistrationPage= require('../pages/RegistrationPage');// Set timeout to 60 seconds
const dotenv = require('dotenv');
dotenv.config();
test('Registration Test', async ({page}) => {

  const userData = {
    firstName: 'Shree Krishna',
    lastName: 'Pandey',
    email: process.env.USER_EMAIL, 
    password: process.env.USER_PASSWORD,
    birthDate: '07/05/1996'
  };

const homePage = new HomePage(page);
const registrationPage = new RegistrationPage(page);

await homePage.naviagate();
await homePage.clickSignIn();
await registrationPage.startRegistration();
await registrationPage.fillForm(userData);
await registrationPage.submit();

//brower will remain open after test complete
console.log('Test completed. Browser will remain open after test complete.');
  await page.pause();
});







