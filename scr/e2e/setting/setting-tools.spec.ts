import {Page, test} from "@playwright/test";
import SettingToolsPage from "../../pages/setting/setting-tools.page";
import SettingCreateToolsPage from "../../pages/setting/setting-create-tools.page";

test.describe.serial('on setting tools',() => {
    test.use({storageState : './session/int_antoine.json'});
    let page: Page;
    let settingToolsPage : SettingToolsPage;
    let settingCreateToolsPage : SettingCreateToolsPage;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        settingToolsPage = new SettingToolsPage(page);
        settingCreateToolsPage = new SettingCreateToolsPage(page);
        await page.goto('/settings/tools');
        await page.waitForLoadState("load");
    });

    test('Do some interaction with all elements', async () => {
        await settingToolsPage.filterColumn();
        await settingToolsPage.testShowData();
        await settingCreateToolsPage.testCreateTools();
    });
})