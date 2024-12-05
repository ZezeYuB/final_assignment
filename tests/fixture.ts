import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { StorePage } from '../pages/storepage';

// Extend Playwright's base fixture to include loginPage, storePage, and loggedInPage
export const test = base.extend<{ loginPage: LoginPage, storePage: StorePage, loggedInPage: Page }>({
  
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://hoff.is/login');
    await use(loginPage); // Pass the loginPage instance to the test
  },

  storePage: async ({ page }, use) => {
    const storePage = new StorePage(page);
    await use(storePage); // Pass the storePage instance to the test
  },

  loggedInPage: async ({ page, loginPage }, use) => {
    // Ensure password is always assigned a value (use fallback/default value if undefined)
    let password = process.env.PASSWORD || 'defaultPassword'; // Provide a fallback if PASSWORD is undefined
  
    await page.goto('https://hoff.is/login');
    await loginPage.login('Markus', password, 'consumer'); // Perform login with the password
    await use(page); // Pass the logged-in page to the test
  }
});
