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


test('Login with Markus', async ({ loggedInPage, storePage }) => {
  // Access the preconfigured logged-in page and storePage fixture
  const username = await storePage.usernameText.textContent();
  const header = await storePage.header.textContent();

  expect(header).toBe('Store');  // Assert that the user is on the correct page
  console.log(`Logged in as: ${username}`);
});


