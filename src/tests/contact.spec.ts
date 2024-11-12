// @ts-check
export {};
import { test, expect, Page }from '@playwright/test';
import { HomePage } from "../pageobjects/home";
import { ContactPage } from "../pageobjects/contact";

var homePage: HomePage;
var contactPage: ContactPage;
var name = "Automation Tester";
var email = "tester@automation.com";
var subject = "Contact Subject Line";
var message = "This is a message contacting support for help.";

test.beforeEach(async ({ page } : { page: Page }) => {
  homePage = new HomePage(page);
  contactPage = new ContactPage(page);
});

test('fill in the contact form', async ({ page } : { page: Page }) => {
  await homePage.goto();

  await homePage.gotoContactPage();

  await contactPage.fillContactForm(name, email, subject, message);

  // Expect a title "to contain" a substring.
  await expect(page.locator("#successMessage")).toBeVisible();
});