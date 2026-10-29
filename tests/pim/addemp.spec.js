import { test, expect } from '@playwright/test';

const employees = {

  emp1 : {firstname : "Raju", lastname : "G"},
   
  emp2 : {firstname : "Shree", lastname : "charan"},
   
   emp3 : {firstname : "kavya", lastname : "K"}

}

for (let emp in employees){
    test(`verify add emp - ${emp}`, async ({ page }) => {
await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  await page.getByRole('textbox', { name: 'Username' }).fill("Admin");
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill("admin123");
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill(employees[emp].firstname);
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill(employees[emp].lastname);
  await page.getByRole('button', { name: 'Save' }).click();
  // await expect(page.getByText('Successfully Saved')).toBeVisible();
});
}