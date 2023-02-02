import {Page, test} from "@playwright/test";
import CompanyDetailsPage from "../../pages/setting/company-details.page";

test.describe.serial('on company details',() => {
    let page: Page;
    let companyDetailsPage : CompanyDetailsPage;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        companyDetailsPage = new CompanyDetailsPage(page);

        await page.context().storageState({ path: 'logedinState.json' });
        await page.goto('/settings/company');
        await page.waitForLoadState("load");
    });

    test('', async () => {
        await companyDetailsPage.company_name.fill('Ngo Bao Diep');

        await page.waitForURL(/map/);
    });
})