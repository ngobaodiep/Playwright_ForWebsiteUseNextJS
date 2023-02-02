import {expect, Locator, Page} from "@playwright/test";
import Wrapper from "../../base/Wrapper";


export default  class StepsBarPage extends  Wrapper{
    get step_bar(): Locator {
        return this._step_bar;
    }

    set step_bar(value: Locator) {
        this._step_bar = value;
    }
    get self_on_boarding_step_account_detail(): Locator {
        return this._self_on_boarding_step_account_detail;
    }

    set self_on_boarding_step_account_detail(value: Locator) {
        this._self_on_boarding_step_account_detail = value;
    }

    get self_on_boarding_step_woc_setting(): Locator {
        return this._self_on_boarding_step_woc_setting;
    }

    set self_on_boarding_step_woc_setting(value: Locator) {
        this._self_on_boarding_step_woc_setting = value;
    }

    get self_on_boarding_step_invite_user(): Locator {
        return this._self_on_boarding_step_invite_user;
    }

    set self_on_boarding_step_invite_user(value: Locator) {
        this._self_on_boarding_step_invite_user = value;
    }

    get self_on_boarding_step_payment_detail(): Locator {
        return this._self_on_boarding_step_payment_detail;
    }

    set self_on_boarding_step_payment_detail(value: Locator) {
        this._self_on_boarding_step_payment_detail = value;
    }

    get self_on_boarding_step_add_activities(): Locator {
        return this._self_on_boarding_step_add_activities;
    }

    set self_on_boarding_step_add_activities(value: Locator) {
        this._self_on_boarding_step_add_activities = value;
    }

    get self_on_boarding_step_add_customers(): Locator {
        return this._self_on_boarding_step_add_customers;
    }

    set self_on_boarding_step_add_customers(value: Locator) {
        this._self_on_boarding_step_add_customers = value;
    }

    get self_on_boarding_step_add_sites(): Locator {
        return this._self_on_boarding_step_add_sites;
    }

    set self_on_boarding_step_add_sites(value: Locator) {
        this._self_on_boarding_step_add_sites = value;
    }
    private _self_on_boarding_step_account_detail: Locator;
    private _self_on_boarding_step_woc_setting: Locator;
    private _self_on_boarding_step_invite_user: Locator;
    private _self_on_boarding_step_payment_detail: Locator;
    private _self_on_boarding_step_add_activities: Locator;
    private _self_on_boarding_step_add_customers: Locator;
    private _self_on_boarding_step_add_sites: Locator;
    private _step_bar: Locator;

    constructor(public  page: Page) {
        super(page);
        this.getElement();
    }

    public async getElement(){
        this.self_on_boarding_step_account_detail = await this.findLocator('#self-on-boarding-step-account-detail');
        this.self_on_boarding_step_woc_setting = await this.findLocator('#self-on-boarding-step-woc-setting');
        this.self_on_boarding_step_invite_user = await this.findLocator('#self-on-boarding-step-invite-user');
        this.self_on_boarding_step_payment_detail = await this.findLocator('#self-on-boarding-step-payment-detail');
        this.self_on_boarding_step_add_activities = await this.findLocator('#self-on-boarding-step-add-activities');
        this.self_on_boarding_step_add_customers = await this.findLocator('#self-on-boarding-step-add-customers');
        this.self_on_boarding_step_add_sites = await this.findLocator('#self-on-boarding-step-add-sites');
        this.step_bar = await this.findLocator('.MuiStep-root.MuiStep-horizontal.MuiStep-alternativeLabel.css-n7tliy-MuiStep-root');
    }

    public async expecStepBarShowCorrectly(total: number, index: number){
        expect(await this.step_bar.count()).toEqual(total);
        const totalItems = await this.step_bar.count();
        for (let i = 0; i < totalItems; i++){
            if (i<index){
                expect(await this.step_bar.nth(i).locator('svg[data-testid="CheckCircleIcon"]').isVisible()).toBeTruthy();
            }
            if (i == index){
                expect(await this.step_bar.nth(i).locator('.MuiStepIcon-text.css-1uqvool-MuiStepIcon-text').textContent()).toBe(''+(i+1));
                expect(await this.step_bar.nth(i).locator('.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.MuiStepIcon-root.Mui-active.css-4s9hg2-MuiSvgIcon-root-MuiStepIcon-root').count()).toEqual(1);
            }
            if (i > index){
                expect(await this.step_bar.nth(i).locator('.MuiStepIcon-text.css-1uqvool-MuiStepIcon-text').textContent()).toBe(''+(i+1));
                expect(await this.step_bar.nth(i).locator('.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.MuiStepIcon-root.Mui-active.css-4s9hg2-MuiSvgIcon-root-MuiStepIcon-root').count()).toEqual(0);
            }

        }
    }
}