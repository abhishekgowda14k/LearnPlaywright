import { test, expect } from '@playwright/test';

test('verify empolye stauts', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).click();
  await page.getByRole('menuitem', { name: 'Employment Status' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.locator('form').getByRole('textbox').click();
  await page.locator('form').getByRole('textbox').fill('full time');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('button', { name: 'Save' }).dblclick();
  await page.getByRole('button', { name: 'Save' }).press('Enter');
  await page.locator('form').getByRole('textbox').click();
  await page.locator('form').getByRole('textbox').fill('full time work');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.goto('chrome-error://chromewebdata/');
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveEmploymentStatus');
  await page.locator('div').filter({ hasText: 'Add Employment StatusName *' }).nth(3).click();
  await page.locator('form').getByRole('textbox').click();
  await page.locator('form').getByRole('textbox').fill('full time work');
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('heading', { name: 'Employment Status' })).toBeVisible();
})