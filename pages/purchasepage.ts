import { test, expect } from '@playwright/test';
import {Locator, Page} from '@playwright/test';

export class PurchasePage {
    readonly page: Page;
    readonly product: Locator;
    readonly amount: Locator;
    readonly addButton: Locator;
    readonly totalSum: Locator;
    readonly buyButton: Locator;
    readonly nameInput: Locator;
    readonly addressInput: Locator;
    readonly confirmButton: Locator;
    readonly confirmationMessage: Locator;
    readonly receiptTotal: Locator;
    readonly closeButton: Locator;


constructor (page:Page) {
    this.page = page;
    this.product = page.getByTestId('select-product');
    this.amount = page.getByLabel('Amount');
    this.addButton = page.getByTestId('add-to-cart-button');
    this.totalSum = page.locator('#totalSum');
    this.buyButton = page.getByRole('button', { name: "Buy" });
    this.nameInput = page.getByLabel('Name:');
    this.addressInput = page.getByLabel('Address:');
    this.confirmButton = page.getByRole('button', { name: 'Confirm Purchase' });
    this.confirmationMessage = page.locator('#name');
    this.receiptTotal = page.locator('#receiptTotal');
    this.closeButton = page.getByText('Close');

}

async buyOnePurchase(productSelection: string, productAmount: string, name: string, address: string) {
    await this.product.selectOption(productSelection)
    await this.amount.fill(productAmount)
    await this.addButton.click()
    await this.buyButton.click()
    await this.nameInput.fill(name)
    await this.addressInput.fill(address)
    await this.confirmButton.click()
    await this.closeButton.click()

}
}

