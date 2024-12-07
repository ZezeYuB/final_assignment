import { test } from '../tests/fixture';  // Import the fixtures
import {expect} from '@playwright/test'
import * as dotenv from 'dotenv'
import {LoginPage} from "../pages/loginpage"
import {StorePage} from "../pages/storepage"
import { PurchasePage } from "../pages/purchasepage"


test('Login with incorrect details', async({loginPage}) =>{

    await loginPage.login("Sandy", "sup3rs3cr2t","consumer")
    const errorMessage = await loginPage.errorMessage.textContent()
    expect(errorMessage).toBe("Incorrect password")
})

test('Placing single purchase', async({loggedInPage}) => {
    const purchasePage = new PurchasePage(loggedInPage);
    await purchasePage.buyOnePurchase("3", "3", "Sandy", "Test123")
  
    await expect(purchasePage.confirmationMessage).toBeVisible();
    await expect(purchasePage.confirmationMessage).toHaveText('Thank you for your purchase, Sandy');
    await expect (purchasePage.receiptTotal).toContainText('$102');
    


    
})