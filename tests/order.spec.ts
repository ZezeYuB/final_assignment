import { test } from '../tests/fixture';  // Import the fixtures
import {expect} from '@playwright/test'
import * as dotenv from 'dotenv'
import {LoginPage} from "../pages/loginpage"
import {StorePage} from "../pages/storepage"
import { PurchasePage } from "../pages/purchasepage"


test('Login with incorrect details', async({loginPage}) =>{

    await loginPage.login("Markus", "sup3rs3cr2t","consumer")
    const errorMessage = await loginPage.errorMessage.textContent()
    expect(errorMessage).toBe("Incorrect password")
})

test('Placing a purchase', async({page}) => {
    const purchasePage = new PurchasePage(page);
    await page.goto("https://hoff.is/store2/?username=markus&role=business")

    await purchasePage.buyOnePurchase("3", "3", "AZB", "Test123")
    
})