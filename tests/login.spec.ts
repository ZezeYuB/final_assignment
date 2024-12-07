import { test } from '../tests/fixture';  
import {expect} from '@playwright/test'
import * as dotenv from 'dotenv'
import { LoginPage } from '../pages/loginpage';
import { StorePage } from '../pages/storepage';

dotenv.config();  

test('Login Happy Flow', async ({ loggedInPage, storePage }) => {
  
    const usernameLocator = storePage.usernameText; 
    await expect(usernameLocator).toBeVisible({ timeout: 60000 });  
  
    const username = await usernameLocator.textContent();
  
    const header = await storePage.header.textContent();
    expect(header).toBe('Store');
  });


