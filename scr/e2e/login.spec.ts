import {expect, Locator, Page, test} from '@playwright/test';
import LoginPage from "../pages/login.page";
import MainMenuPage from "../pages/main-menu.page";
import logindata from "../../resource/test-data/login.json";

async function verifyLoginScreen(page : Page, loginPage : LoginPage){
  await expect(page,'should have a title').toHaveTitle(/Logifleet 360/);
  expect(await loginPage.username.isVisible(),'should have a user-input field').toBeTruthy();
  expect(await loginPage.password.isVisible(),'should have a password-input field').toBeTruthy();
  expect(await loginPage.submitButton.isVisible(),'should have a login button').toBeTruthy();

  await test.step('should show proper error message for blank user/pass', async () => {
    await loginPage.loginWithUserPassword('','');
    expect(await loginPage.usernameHelper.isVisible()).toBeTruthy();
    expect(await loginPage.passwordHelper.isVisible()).toBeTruthy();
  })

  await test.step('should remove error message for non-blank user/pass', async () => {
    await loginPage.enterUserName('username');
    await loginPage.enterPassword('password');
    expect(await loginPage.usernameHelper.isVisible()).not.toBeTruthy();
    expect(await loginPage.passwordHelper.isVisible()).not.toBeTruthy();
  })
}

async function verifyLoginFail(page: Page, loginPage: LoginPage, data){
  await loginPage.loginWithUserPassword(data.username, data.password);
  await loginPage.errorMessage.waitFor({state:'visible'});
  await expect(page,'should not change window location').toHaveURL(/login/);
  expect(await loginPage.errorMessage.isVisible(),'should display error message').toBeTruthy();
}

async function verifyLoginSuccessfully(page: Page, loginPage: LoginPage, data){
  let mainMenuPage : MainMenuPage;
  await loginPage.loginWithUserPassword(data.username, data.password);
  await page.waitForURL(/map/);
  mainMenuPage = new MainMenuPage(page);
  await test.step('should change window location on success: '+data.username, async () => {
    await expect(page).toHaveURL(/map/);
  })
  await test.step('should have avatar image, logout button: '+data.username, async () => {
    expect(mainMenuPage.avatarImg.isVisible()).toBeTruthy();
    await mainMenuPage.avatarImg.click();
    expect(mainMenuPage.logoutBtn.isVisible()).toBeTruthy();
  })
  await test.step('logout: '+data.username, async () => {
    await mainMenuPage.logoutBtn.click();
    await expect.soft(page).toHaveURL(/login/,{timeout: 5000});
  })
}


test.describe('on login module',() => {
  let page: Page;
  let loginPage: LoginPage;
  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = await new LoginPage(page);
    await loginPage.visit();
  });
  test.afterAll( async () => {
    await page.close();
  })

  test('login screen',async () => {
    await verifyLoginScreen(page, loginPage);
  })

  test.describe.serial('When login fail',() => {
    for (const data of logindata.fail){
      test('login fail: '+data.username, async () => {
        await verifyLoginFail(page, loginPage, data);
      })
    }
  })

  for (const data of logindata.success){
    test('login successfully: '+data.username,async () => {
      await verifyLoginSuccessfully(page,loginPage,data);
    })
  }
})
