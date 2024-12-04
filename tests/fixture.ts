import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { StorePage } from '../pages/storepage';

// Define custom fixtures for loginPage and storePage
export const test = base.extend<{ loginPage: LoginPage, storePage: StorePage }>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage); // Pass the loginPage instance to the test
  },

  storePage: async ({ page }, use) => {
    const storePage = new StorePage(page);
    await use(storePage); // Pass the storePage instance to the test
  },
});
