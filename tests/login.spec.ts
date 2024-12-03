import test, { expect } from "@playwright/test"
import {LoginPage} from "../pages/loginpage"
import {StorePage} from "../pages/storepage"
import AxeBuilder from '@axe-core/playwright'; 



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
})

test.describe('homepage', () => { // 2
  test.skip('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('https://hoff.is/login'); // 3

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4

    expect(accessibilityScanResults.violations).toEqual([]); // 5
  });
});