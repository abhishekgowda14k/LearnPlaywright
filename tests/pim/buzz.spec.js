import { expect, test } from '@playwright/test';
import { orangeHrmData } from '../data/orangehrmData';
import { LoginPage } from '../pages/LoginPage';

test('Buzz page loads after login', async ({ page }) => {
  const { baseUrl, login } = orangeHrmData;
  const loginPage = new LoginPage(page);

  await loginPage.goto(baseUrl);
  await loginPage.login(login.username, login.password);
  await loginPage.verifyDashboardLoaded();

  await page.goto(`${baseUrl}/web/index.php/buzz/viewBuzz`);

  await expect(page).toHaveURL(/\/web\/index\.php\/buzz\/viewBuzz$/);
  await expect(page.getByRole('heading', { name: 'Buzz' })).toBeVisible();
  await expect(page.getByText('Buzz Newsfeed')).toBeVisible();
  await expect(page.getByRole('button', { name: /Most Recent Posts/ })).toBeVisible();
  await expect(page.getByRole('button', { name: /Most Liked Posts/ })).toBeVisible();
  await expect(page.getByRole('button', { name: /Most Commented Posts/ })).toBeVisible();
});
