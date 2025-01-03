import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { StorePage } from '../pages/storepage';

export const test = base.extend<{ loginPage: LoginPage, storePage: StorePage, loggedInPage: Page }>({
  
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await page.goto('https://hoff.is/login');
    await use(loginPage); 
  },

  storePage: async ({ page }, use) => {
    const storePage = new StorePage(page);
    await use(storePage);
  },

  loggedInPage: async ({ loginPage }, use) => {
    let password = process.env.PASSWORD || 'defaultPassword'; 
    await loginPage.login('Markus', password, 'consumer'); 
    await use(loginPage.page); 
  }
});
