import test, { expect } from "@playwright/test"
import {LoginPage} from "../pages/loginpage"
import {StorePage} from "../pages/storepage"
import exp from "constants"
import { PurchasePage } from "../pages/purchasepage"


test.skip('Login with Markus', async({page}) =>{
    const loginPage = new LoginPage(page)
    const storePage = new StorePage(page)
    await page.goto("https://hoff.is/login")

    await loginPage.login("Markus", "sup3rs3cr3t","consumer")
    const username = await storePage.usernameText.textContent()
    const header = await storePage.header.textContent()
    expect(header).toBe("Store")
})

test.skip('Login with incorrect details', async({page}) =>{
    const loginPage = new LoginPage(page)
    await page.goto("https://hoff.is/login")

    await loginPage.login("Markus", "sup3rs3cr2t","consumer")
    const errorMessage = await loginPage.errorMessage.textContent()
    expect(errorMessage).toBe("Incorrect password")
})

test('Place a purchase', async({page}) => {
    const purchasePage = new PurchasePage(page);
    await page.goto("https://hoff.is/store2/?username=markus&role=business")

    await purchasePage.buyOnePurchase("3", "3", "AZB", "Test123")
    
})