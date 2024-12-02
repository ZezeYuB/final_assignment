import test, { expect } from "@playwright/test"
import {LoginPage} from "../pages/loginpage"
import {StorePage} from "../pages/storepage"
import dotenv from 'dotenv'

let password: string;
test('Login with Markus', async({page}) =>{
    const loginPage = new LoginPage(page)
    const storePage = new StorePage(page)
    dotenv.config(); // Loads variables from .env file into process.env



    if (process.env.PASSWORD !== undefined){
        password = process.env.PASSWORD

    }

    await page.goto("https://hoff.is/login")
    console.log("The value is: " + process.env.PASSWORD);

    await loginPage.login("Markus", password,"consumer")
    const username = await storePage.usernameText.textContent()
    const header = await storePage.header.textContent()
    expect(header).toBe("Store")
})

test.skip('Login with incorrect details', async({page}) =>{
    const loginPage = new LoginPage(page)
    await page.goto("https://hoff.is/login")

    await loginPage.login("Zizi", password,"consumer")
    const errorMessage = await loginPage.errorMessage.textContent()
    expect(errorMessage).toBe("Incorrect password")
})