import test, { expect } from "@playwright/test";
import { LoginPage } from "../pages/loginpage";

let password: string
test.skip('Login with Markus username', async ({ page }) => {
    const loginPage = new LoginPage(page);

    if (process.env.PASSWORD !== undefined) {
        password = process.env.PASSWORD
    }
    

    await page.goto("http://hoff.is/login");
    await loginPage.login("Markus", password, "consumer");


})

test('Login page with incorrect input', async ({page}) => {
    const loginPage = new LoginPage(page);
    await page.goto("http://hoff.is/login");
    await loginPage.login("Markus", "Meuw", "consumer")
    const errorMessage = await loginPage.errorMessage.textContent()

    expect(errorMessage).toBe("Incorrect password")

})