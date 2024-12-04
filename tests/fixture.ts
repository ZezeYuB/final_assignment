import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { StorePage } from '../pages/storepage';

// Extend Playwright's base fixture to include loginPage and storePage
export const test = base.extend<{ loginPage: LoginPage, storePage: StorePage, loggedInPage }>({
  loginPage: async ({ page }, use) => {
    // Create an instance of LoginPage for each test
    const loginPage = new LoginPage(page);
    await use(loginPage); // Pass the loginPage instance to the test
  },

  storePage: async ({ page }, use) => {
    // Create an instance of StorePage for each test
    const storePage = new StorePage(page);
    await use(storePage); // Pass the storePage instance to the test
  },

  // Optionally, you can add a fixture to handle login
  loggedInPage: async ({ page, loginPage }, use) => {
    const password = process.env.PASSWORD || '';
    await page.goto('https://hoff.is/login');
    await loginPage.login('Markus', password, 'consumer'); // Perform login
    await use(page); // Pass the logged-in page to the test
  }
});
