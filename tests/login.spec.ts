import { test } from '../tests/fixture';  // Import the fixtures
import {expect} from '@playwright/test'
import * as dotenv from 'dotenv'
import { LoginPage } from '../pages/loginpage';
import { StorePage } from '../pages/storepage';

dotenv.config();  // Load variables from .env file

test('Login Happy Flow', async ({ loggedInPage, storePage }) => {
    // Use the loggedInPage fixture (which is the page object after login)
  
    // Wait for the username to be visible before accessing its text content
    const usernameLocator = storePage.usernameText; // Ensure locator is correct in StorePage class
    await expect(usernameLocator).toBeVisible({ timeout: 60000 });  // Wait for the element to be visible
  
    // Get the username text
    const username = await usernameLocator.textContent();
    console.log('Username:', username);
  
    // Wait for the header text and validate
    const header = await storePage.header.textContent();
    expect(header).toBe('Store');
  });


