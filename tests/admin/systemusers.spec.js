import { expect, test } from '@playwright/test';
import { orangeHrmData } from '../data/orangehrmData';
import { LoginPage } from '../pages/LoginPage';

test('System Users page displays the Admin user', async ({ page }) => {
  const { baseUrl, login } = orangeHrmData;
  const loginPage = new LoginPage(page);

  await loginPage.goto(baseUrl);
  await loginPage.login(login.username, login.password);
  await loginPage.verifyDashboardLoaded();

  await page.goto(`${baseUrl}/web/index.php/admin/viewSystemUsers`);

  await expect(page).toHaveURL(/\/web\/index\.php\/admin\/viewSystemUsers$/);
  await expect(page.getByRole('heading', { name: 'System Users' })).toBeVisible();

  const adminRow = page.getByRole('table').getByRole('row').nth(1);
  await expect(adminRow).toBeVisible();
  await expect(adminRow).toContainText('Admin');
  await expect(adminRow).toContainText('Enabled');
});
