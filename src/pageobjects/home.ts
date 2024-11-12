import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly loginButton: Locator;
  readonly contactButton: Locator;
  readonly accessibilityButton: Locator;
  readonly productsButton: Locator;

    /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page: Page) {
      this.page = page;
      this.loginButton = page.locator("#loginButton");
      this.contactButton = page.locator("#contactButton");
      this.accessibilityButton = page.locator("#accessibilityButton");
      this.productsButton = page.locator("#productsButton");
    }
  
    async goto() {
      await this.page.goto('http://browserstacktraining.site');
    }
  
    async goToLoginPage() {
      await this.loginButton.click();
    }
  
    async gotoContactPage() {
      await this.contactButton.click();
    }
  
    async gotoAccessibilityPage() {
      await this.accessibilityButton.click();
    }

    async gotoProductsPage() {
      await this.productsButton.click();
    }
}