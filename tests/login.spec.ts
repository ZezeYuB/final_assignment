/*import test, { expect } from "@playwright/test"
import {LoginPage} from "../pages/loginpage"
import {StorePage} from "../pages/storepage"



let password: string;
test('Login with Markus', async({page}) =>{
    const loginPage = new LoginPage(page)
    const storePage = new StorePage(page)

    if (process.env.PASSWORD !== undefined){
        password = process.env.PASSWORD


    }
    await page.goto("https://hoff.is/login")
    console.log(password)
   
    
    await loginPage.login("Markus", password,"consumer")
    const username = await storePage.usernameText.textContent()
    const header = await storePage.header.textContent()
    expect(header).toBe("Store")
})

test('Login with incorrect details', async({page}) =>{
    const loginPage = new LoginPage(page)
    await page.goto("https://hoff.is/login")

    await loginPage.login("Zizi", "test","consumer")
    const errorMessage = await loginPage.errorMessage.textContent()
    expect(errorMessage).toBe("Incorrect password")
}) */

import { test } from '../tests/fixture';  // Import the fixtures
import {expect} from '@playwright/test'
import { LoginPage } from '../pages/loginpage';
import { StorePage } from '../pages/storepage';

let password: string;

test('Login with Markus', async ({ loginPage, storePage, page }) => {
  // If password is set in the environment, use it
  if (process.env.PASSWORD !== undefined) {
    password = process.env.PASSWORD;
  }

  // Navigate to the login page and perform login
  await page.goto('https://hoff.is/login');
  await loginPage.login('Markus', password, 'consumer');
  console.log(password)
  
  // Get the username and header text
  const username = await storePage.usernameText.textContent();
  const header = await storePage.header.textContent();

  // Assert that the header is "Store"
  expect(header).toBe('Store');
  console.log(username);
});


