import {expect, Page, test} from '@playwright/test';
import LoginPage from "../pages/login.page";
//import test from '../base/utils/loginFixtures';

test.describe.serial('On login Main',() => {
  let page: Page;
  let loginPage: LoginPage;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = await new LoginPage(page);
    await loginPage.visit();
  });

  test('should change window location on success', async () => {

  })
  test('should land on tracking view', async () => {

  })

})



// test('test', async ({ page, loginPage}) => {
//
//
//
//   await loginPage.enterUserName('antoine');
//   await loginPage.enterPassword('12341234');
//   await loginPage.clickSubmit();
//   await page.waitForURL(/map/);
//
//   await expect(page).toHaveURL(/map/);
//
// });
