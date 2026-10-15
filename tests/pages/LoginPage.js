import { expect } from '@playwright/test';

export class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async goto(baseUrl) {
    await this.page.goto(`${baseUrl}/web/index.php/auth/login`);
  }

  async login(username, password) {
    await this.page.getByRole('textbox', { name: 'Username' }).fill(username);
    await this.page.getByRole('textbox', { name: 'Password' }).fill(password);
    await this.page.getByRole('button', { name: 'Login' }).click();
  }

  async verifyDashboardLoaded() {
    await expect(this.page.getByText('Time at Work')).toBeVisible();
  }
}
