// @ts-check
export {};
import { test, expect, Page }from '@playwright/test';
import { HomePage } from "../pageobjects/home";
import { ProductsPage } from "../pageobjects/products";

var homePage: HomePage;
var productsPage: ProductsPage;
var products = ["Desktop", "Phone", "Tablet"];

test.beforeEach(async ({ page } : { page: Page }) => {
  homePage = new HomePage(page);
  productsPage = new ProductsPage(page);
});

test('add a product to the cart', async ({ page } : { page: Page }) => {
  await homePage.goto();

  await homePage.gotoProductsPage();

  const randomProduct = Math.floor(Math.random() * products.length);
  await productsPage.addProductToCart(products[randomProduct]);

  await productsPage.clickIt();
  
  await page.waitForTimeout(3000);
  
  // Expect a title "to contain" a substring.
  await expect(productsPage.cartCount).toContainText("1");
});

test('add multiple products to the cart', async ({ page } : { page: Page }) => {
  await homePage.goto();

  await homePage.gotoProductsPage();

  for (var i = 0; i < products.length; i++) {
    await productsPage.addProductToCart(products[i]);
  }


  await page.waitForTimeout(3000);
  
  // Expect a title "to contain" a substring.
  await expect(productsPage.cartCount).toContainText("3");
});