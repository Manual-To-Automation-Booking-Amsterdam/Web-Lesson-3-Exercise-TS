import { expect, type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameField: Locator;
  readonly passwordField: Locator;
  readonly submitButton: Locator;
  readonly loginMessage: Locator;

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page: Page) {
    this.page = page;
    this.usernameField = page.locator("#username");
    this.passwordField = page.locator("#password");
    this.submitButton = page.locator("#submit");
    this.loginMessage = page.locator("#message");
  }

  async fillLoginForm(username: string, password: string) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.submitButton.click();
  }
};