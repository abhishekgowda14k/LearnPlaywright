import { expect } from '@playwright/test';

export class PimPage {
  constructor(page) {
    this.page = page;
  }

  async gotoAddEmployee() {
    await this.page.getByRole('link', { name: 'PIM' }).click();
    await this.page.getByRole('link', { name: 'Add Employee' }).click();
  }

  async fillEmployeeDetails(firstName, lastName) {
    await this.page.getByRole('textbox', { name: 'First Name' }).fill(firstName);
    await this.page.getByRole('textbox', { name: 'Last Name' }).fill(lastName);
  }

  async saveEmployee() {
    await this.page.getByRole('button', { name: 'Save' }).click();
  }

  async verifySuccessMessage(firstName, lastName) {
    await expect(this.page.getByText('Successfully Saved')).toBeVisible();
    await expect(this.page.getByText(`${firstName} ${lastName}`)).toBeVisible();
  }
}
