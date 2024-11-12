import { expect, type Locator, type Page } from '@playwright/test';
import { error } from 'console';

export class ProductsPage {
  readonly page: Page;
  readonly product1Image: Locator;
  readonly product2Image: Locator;
  readonly product3Image: Locator;
  readonly addToCartButtonProduct1: Locator;
  readonly addToCartButtonProduct2: Locator;
  readonly addToCartButtonProduct3: Locator;
  readonly cartCount: Locator;
  readonly cartIcon: Locator;
  readonly totalItems: Locator;

    /**
    * @param {import('@playwright/test').Page} page
    */
    constructor(page: Page) {
      this.page = page;
      this.product1Image = page.locator("#product1Image");
      this.product2Image = page.locator("#product2Image");
      this.product3Image = page.locator("#product3Image");
      this.addToCartButtonProduct1 = page.locator("#addToCartButtonProduct1");
      this.addToCartButtonProduct2 = page.locator("#addToCartButtonProduct2");
      this.addToCartButtonProduct3 = page.locator("#addToCartButtonProduct3");
      this.cartCount = page.locator("#cart-count");
      this.cartIcon = page.locator("#cartIcon");
      this.totalItems = page.locator("#item-total");
    }
  
    async goto() {
      await this.page.goto('http://browserstacktraining.site');
    }
  
    async addProductToCart(productType: string) {
        if (productType.toLowerCase() === "desktop") {
            await this.addToCartButtonProduct1.click();
        } else if (productType.toLowerCase() === "tablet") {
            await this.addToCartButtonProduct2.click();
        } else if (productType.toLowerCase() === "phone") {
            await this.addToCartButtonProduct3.click();
        } else {
            error("Invalid product type has been specified.")
        }
    }

    async clickIt() {
      await this.addToCartButtonProduct1.click();
    }
}