import { expect, type Locator, type Page } from '@playwright/test';

export class ContactPage {
  readonly page: Page;
  readonly contactButton: Locator;
  readonly nameField: Locator;
  readonly emailField: Locator;
  readonly subjectField: Locator;
  readonly messageField: Locator;
  readonly submitButton: Locator;

    /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page: Page) {
      this.page = page;
      this.contactButton = page.locator("#contactButton");
      this.nameField = page.locator("#name");
      this.emailField = page.locator("#email");
      this.subjectField = page.locator("#subject");
      this.messageField = page.locator("#message");
      this.submitButton = page.locator("#submit");
    }
  
    async goto() {
      await this.page.goto('http://browserstacktraining.site');
    }
  
    async goToContactPage() {
      await this.contactButton.click();
    }

    async fillContactForm(name: string, email: string, subject: string, message: string) {
      await this.nameField.fill(name);
      await this.emailField.fill(email);
      await this.subjectField.fill(subject);
      await this.messageField.fill(message);
      await this.submitButton.click();
    }
}