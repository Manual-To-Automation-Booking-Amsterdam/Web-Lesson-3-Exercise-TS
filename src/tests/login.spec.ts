// @ts-check
export {};
import { test, expect, Page } from '@playwright/test';
import { HomePage } from '../pageobjects/home';
import { LoginPage } from '../pageobjects/login';

var homePage : HomePage;
var loginPage : LoginPage;

test.beforeEach(async ({ page } : { page: Page }) => {
  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
});

test('has title', async ({ page } : { page: Page }) => {
  var username = "student";
  var password = "Password123";

  await homePage.goto();

  await homePage.goToLoginPage();

  await loginPage.fillLoginForm(username, password);

  // Expect a title "to contain" a substring.
  await expect(page.locator("#message")).toHaveText("Login successful!");
});