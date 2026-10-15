import { test } from '@playwright/test';
import { orangeHrmData } from '../data/orangehrmData';
import { LoginPage } from '../pages/LoginPage';
import { PimPage } from '../pages/PimPage';

test('Add employee with valid data', async ({ page }) => {
  const { baseUrl, login, employee } = orangeHrmData;
  const loginPage = new LoginPage(page);
  const pimPage = new PimPage(page);

  await loginPage.goto(baseUrl);
  await loginPage.login(login.username, login.password);
  await loginPage.verifyDashboardLoaded();

  await pimPage.gotoAddEmployee();
  await pimPage.fillEmployeeDetails(employee.firstName, employee.lastName);
  await pimPage.saveEmployee();
  await pimPage.verifySuccessMessage(employee.firstName, employee.lastName);
});