import {expect, Locator, Page, test} from '@playwright/test';
import StepsBarPage from "../pages/self-on-boarding/steps-bar.page";
import ButtonsBarPage from "../pages/self-on-boarding/buttons-bar.page";
import AccountDetailPage from "../pages/self-on-boarding/account-detail.page";
import WocSettingPage from "../pages/self-on-boarding/woc-setting.page";
import AddActivitiesPage from "../pages/self-on-boarding/add-activities.page";
import AddCustomersPage from "../pages/self-on-boarding/add-customers.page";
import AddSitesPage from "../pages/self-on-boarding/add-sites.page";
import InviteUserPage from "../pages/self-on-boarding/invite-user.page";
import PaymentDetailPage from "../pages/self-on-boarding/payment-detail.page";

test.use({
    viewport: { width: 1500, height: 800 }
});

test.describe.serial('self on board module',() => {
    let page: Page;
    let stepBar : StepsBarPage;
    let buttonBar : ButtonsBarPage;
    let accountDetail : AccountDetailPage;
    let wocSetting : WocSettingPage;
    let addActivities : AddActivitiesPage;
    let addCustomers : AddCustomersPage;
    let addSites : AddSitesPage;
    let inviteUser : InviteUserPage;
    let paymentDetail: PaymentDetailPage;

    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        stepBar = new StepsBarPage(page);
        buttonBar = new ButtonsBarPage(page);
        accountDetail = new AccountDetailPage(page);
        wocSetting = new WocSettingPage(page);
        addActivities = new AddActivitiesPage(page);
        addCustomers = new AddCustomersPage(page);
        addSites = new AddSitesPage(page);
        inviteUser = new InviteUserPage(page);
        paymentDetail = new PaymentDetailPage(page);

        await page.context().storageState({ path: 'logedinState.json' });
        await page.goto('/self-onboarding');
        await page.waitForLoadState("load");
    });



    test.describe.serial('Self On Boarding', () => {
        test.describe('Account Detail Screen',() => {
            test('Next button is disable', async () => {
                await buttonBar.checkButtons(0,-1,0);
            });
            test('Steps bar have 4 items', async () => {
                await stepBar.expecStepBarShowCorrectly(4,0);
            });
            test('Next button is enable', async () => {
                await accountDetail.inputData('Quy','Doan','quynd@bitnemo.vn','+49','99966688','Bitnemo','Khuc Thua Du','100000','Ha Noi',buttonBar);
            });
        })

        test.describe('WOC Setting Screen', () => {
            test('Steps Bar', async () => {
                await buttonBar.next_button.waitFor({state: 'visible'});
                await buttonBar.click_next_button();
                await page.waitForLoadState('load');
                // 4 items. The first is completed. 3 next items are numbers. (2,3,4)
                await stepBar.expecStepBarShowCorrectly(4,1);
                expect(await wocSetting.woc_setting_use_activities.isVisible()).toBeTruthy();
            })
            test('Button Bar', async () => {
                await buttonBar.checkButtons(1,1,0);
            })
            test('Setting', async () => {
                await wocSetting.woc_setting_use_activities.click();
                await wocSetting.woc_setting_use_clients.click();
                await wocSetting.woc_setting_use_sites.click();
                await wocSetting.woc_setting_geocode_activities.click();
                await wocSetting.woc_setting_allow_site_creation_form_the_mobile_app.click();
                await wocSetting.woc_setting_allow_manual_time_input.click();

                await stepBar.page.screenshot({path: 'bar.png'});
                await stepBar.expecStepBarShowCorrectly(7,1);
            })
            test('Back to Account Detail', async () => {
                await buttonBar.click_previous_button();
                await page.waitForLoadState('load');
                await stepBar.expecStepBarShowCorrectly(7,0);
                await buttonBar.checkButtons(0,1,0);
                await accountDetail.checkSavedData('Quy','Doan','quynd@bitnemo.vn','+49','99966688','Bitnemo','Khuc Thua Du','100000','Ha Noi');
            })
            test('Go to WOC Setting', async () => {
                await buttonBar.next_button.click();
                await stepBar.expecStepBarShowCorrectly(7,1);
                await buttonBar.checkButtons(1,1,0);
                expect(await wocSetting.woc_setting_use_activities.isVisible()).toBeTruthy();
            })
        })

        test.describe('Add Activities Screen',() => {
            test('Go to Add Activities',async () => {
                await buttonBar.next_button.click();
                /*check init status of all elements*/
                await stepBar.expecStepBarShowCorrectly(7,2);
                await buttonBar.checkButtons(1,1,0);
                expect(await addActivities.activity_name[0].isVisible()).toBeTruthy();
                expect(await addActivities.activity_color[0].isVisible()).toBeTruthy();
                expect(await addActivities.activity_delete[0].isVisible()).toBeTruthy();
                expect(await addActivities.activity_add_button.isDisabled()).toBeTruthy();

                /* add items*/
                await addActivities.addItem('activity 1','#000000', true);
                await addActivities.addItem('activity 2','#ed1c24', true);
                await addActivities.addItem('activity 3','#22b14c', true);
                await addActivities.addItem('activity 4','#ffc90e', true);
                await addActivities.addItem('activity 5','#7092be', false);

                /*remove items*/
                await addActivities.removeAnItem(1);
                expect(await addActivities.activity_name[1].inputValue()).toEqual('activity 3');
                await addActivities.removeAnItem(0);
                expect(await addActivities.activity_name[0].inputValue()).toEqual('activity 3');

                /*Back to WOC Setting*/
                await buttonBar.click_previous_button();
                await wocSetting.checkSavedData(true, true, true,true, true, true);
                await buttonBar.click_next_button(); //Go to Add Activities
            })
        })

        test.describe('Add Customers Screen',() => {
            test('Go to Add Customers',async () => {
                await buttonBar.next_button.click();
                /*check init status of all elements*/
                await stepBar.expecStepBarShowCorrectly(7,3);
                await buttonBar.checkButtons(1,1,0);
                expect(await addCustomers.customer_name[0].isVisible()).toBeTruthy();
                expect(await addCustomers.customer_bill[0].isVisible()).toBeTruthy();
                expect(await addCustomers.customer_delete[0].isVisible()).toBeTruthy();
                expect(await addCustomers.customer_add_button.isDisabled()).toBeTruthy();

                /* add items*/
                await addCustomers.addItem('customer name 1','billing address 1', true);
                await addCustomers.addItem('customer name 2','billing address 2', true);
                await addCustomers.addItem('customer name 3','billing address 3', true);
                await addCustomers.addItem('customer name 4','billing address 4', true);
                await addCustomers.addItem('customer name 5','billing address 5', false);

                /*remove item*/
                await addCustomers.removeAnItem(1);
                expect(await addCustomers.customer_name[1].inputValue()).toEqual('customer name 3');
                await addCustomers.removeAnItem(0);
                expect(await addCustomers.customer_name[0].inputValue()).toEqual('customer name 3');

                /*Back to Add activities */
                await buttonBar.click_previous_button();

                await buttonBar.click_next_button(); //Go to Add Customers

            })
        })

        test.describe('Add Sites Screen',() => {
            test('Go to Add Sites',async () => {
                await buttonBar.next_button.click();
                /*check init status of all elements*/
                await stepBar.expecStepBarShowCorrectly(7,4);
                await buttonBar.checkButtons(1,1,0);
                expect(await addSites.site_name[0].isVisible()).toBeTruthy();
                expect(await addSites.site_customer[0].isVisible()).toBeTruthy();
                expect(await addSites.site_address[0].isVisible()).toBeTruthy();
                expect(await addSites.site_delete[0].isVisible()).toBeTruthy();
                expect(await addSites.site_add_button.isDisabled()).toBeTruthy();

                /* add items*/
                await addSites.addItem('site name 1',0,'site address 1',true,true);
                await addSites.addItem('site name 2',2,'site address 2',true,true);
                await addSites.addItem('site name 3',1,'site address 3',true,true);
                await addSites.addItem('site name 4',0,'site address 4',true,true);
                await addSites.addItem('site name 5',1,'site address 5',false,true);
                /*remove item*/
                await addSites.removeAnItem(1);
                expect(await addSites.site_name[1].inputValue()).toEqual('site name 3');
                await addSites.removeAnItem(0);
                expect(await addSites.site_name[0].inputValue()).toEqual('site name 3');

                /*Back to Add Customers */
                await buttonBar.click_previous_button();

                await buttonBar.click_next_button(); //Go to Add Sites
            })
        })

        test.describe('Invite Users Screen',() => {
            test('Go to Invite User',async () => {
                await buttonBar.next_button.click();
                await stepBar.expecStepBarShowCorrectly(7,5);
                await buttonBar.checkButtons(1,1,0);

                /* input data*/
                await inviteUser.tags_filled.fill('test@bitnemo.vn, mobile@bitnemo.vn, datnq@bitnemo.vn');

                /*Back to Add Sites */
                await buttonBar.click_previous_button();

                await buttonBar.click_next_button(); //Go to Invite User

            })
        })

        test.describe('Payment Detail Screen',() => {
            test('Go to Payment Detail',async () => {
                await buttonBar.next_button.click();
                await stepBar.expecStepBarShowCorrectly(7,6);
                await buttonBar.checkButtons(1,0,1);

                /*input data*/
                await paymentDetail.inputCard('0123567801232345','2024-01-01','189','Doan Quy');

                /*Back to Invite user */
                await buttonBar.click_previous_button();

                await buttonBar.click_next_button(); //Go to Payment Detail
            })
        })
    })
})
