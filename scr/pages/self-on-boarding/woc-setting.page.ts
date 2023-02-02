import {expect, Locator, Page} from "@playwright/test";
import Wrapper from "../../base/Wrapper";


export default  class WocSettingPage extends  Wrapper{
    get woc_setting_use_activities(): Locator {
        return this._woc_setting_use_activities;
    }

    set woc_setting_use_activities(value: Locator) {
        this._woc_setting_use_activities = value;
    }

    get woc_setting_use_clients(): Locator {
        return this._woc_setting_use_clients;
    }

    set woc_setting_use_clients(value: Locator) {
        this._woc_setting_use_clients = value;
    }

    get woc_setting_use_sites(): Locator {
        return this._woc_setting_use_sites;
    }

    set woc_setting_use_sites(value: Locator) {
        this._woc_setting_use_sites = value;
    }

    get woc_setting_geocode_activities(): Locator {
        return this._woc_setting_geocode_activities;
    }

    set woc_setting_geocode_activities(value: Locator) {
        this._woc_setting_geocode_activities = value;
    }

    get woc_setting_allow_site_creation_form_the_mobile_app(): Locator {
        return this._woc_setting_allow_site_creation_form_the_mobile_app;
    }

    set woc_setting_allow_site_creation_form_the_mobile_app(value: Locator) {
        this._woc_setting_allow_site_creation_form_the_mobile_app = value;
    }

    get woc_setting_allow_manual_time_input(): Locator {
        return this._woc_setting_allow_manual_time_input;
    }

    set woc_setting_allow_manual_time_input(value: Locator) {
        this._woc_setting_allow_manual_time_input = value;
    }

    get previous_button(): Locator {
        return this._previous_button;
    }

    set previous_button(value: Locator) {
        this._previous_button = value;
    }
    private _woc_setting_use_activities: Locator;
    private _woc_setting_use_clients: Locator;
    private _woc_setting_use_sites: Locator;
    private _woc_setting_geocode_activities: Locator;
    private _woc_setting_allow_site_creation_form_the_mobile_app: Locator;
    private _woc_setting_allow_manual_time_input: Locator;
    private _previous_button: Locator;

    constructor(public  page: Page) {
        super(page);
        this.getElement();
    }

    public async getElement(){
        this.woc_setting_use_activities = (await this.findLocator('#switch-button-0')).locator('input[type="checkbox"]');
        this.woc_setting_use_clients = (await this.findLocator('#switch-button-2')).locator('input[type="checkbox"]');
        this.woc_setting_use_sites = (await this.findLocator('#switch-button-4')).locator('input[type="checkbox"]');
        this.woc_setting_geocode_activities = (await this.findLocator('#switch-button-1')).locator('input[type="checkbox"]');
        this.woc_setting_allow_site_creation_form_the_mobile_app = (await this.findLocator('#switch-button-5')).locator('input[type="checkbox"]');
        this.woc_setting_allow_manual_time_input = (await this.findLocator('#switch-button-3')).locator('input[type="checkbox"]');
    }
    public async checkSavedData(use_activities: boolean,use_clients: boolean,use_sites:boolean,geocode_activities:boolean,mobile_app:boolean,time_input:boolean ){
        expect(await this.woc_setting_use_activities.isChecked()).toBe(use_activities);
        expect(await this.woc_setting_use_clients.isChecked()).toBe(use_clients);
        expect(await this.woc_setting_use_sites.isChecked()).toBe(use_sites);
        expect(await this.woc_setting_geocode_activities.isChecked()).toBe(geocode_activities);
        expect(await this.woc_setting_allow_site_creation_form_the_mobile_app.isChecked()).toBe(mobile_app);
        expect(await this.woc_setting_allow_manual_time_input.isChecked()).toBe(time_input);
    }
}