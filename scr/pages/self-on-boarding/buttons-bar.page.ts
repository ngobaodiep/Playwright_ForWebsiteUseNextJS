import {expect, Locator, Page} from "@playwright/test";
import Wrapper from "../../base/Wrapper";


export default  class ButtonsBarPage extends  Wrapper{
    get start_button(): Locator {
        return this._start_button;
    }

    set start_button(value: Locator) {
        this._start_button = value;
    }
    get next_button(): Locator {
        return this._next_button;
    }

    set next_button(value: Locator) {
        this._next_button = value;
    }

    get previous_button(): Locator {
        return this._previous_button;
    }

    set previous_button(value: Locator) {
        this._previous_button = value;
    }
    private _next_button: Locator;
    private _previous_button: Locator;
    private _start_button: Locator;


    constructor(public  page: Page) {
        super(page);
        this.getElement();
    }

    public async getElement(){
        this.next_button = await this.findLocator('#self-onboarding_next-button');
        this.previous_button = await this.findLocator('#self-onboarding_previous-button');
        this.start_button = await this.findLocator('#start-button');
    }

    public async click_next_button(){
        await this.next_button.click();
    }
    public async click_previous_button(){
        await this.previous_button.click();
    }
    public async click_start_button(){
        await this.start_button.click();
    }
    public async checkButtons(prev: number, next: number, start: number){
        switch (prev){
            case -1:
                await expect.soft(await this.previous_button.isDisabled()).toBeTruthy();
                break;
            case 0:
                await expect.soft(await this.previous_button.isVisible()).not.toBeTruthy();
                break;
            case 1:
                await expect.soft(await this.previous_button.isEnabled()).toBeTruthy();
                break;
        }
        switch (next){
            case -1:
                await expect.soft(await this.next_button.isDisabled()).toBeTruthy();
                break;
            case 0:
                await expect.soft(await this.next_button.isVisible()).not.toBeTruthy();
                break;
            case 1:
                await expect.soft(await this.next_button.isEnabled()).toBeTruthy();
                break;
        }
        switch (start){
            case -1:
                await expect(await this.start_button.isDisabled()).toBeTruthy();
                break;
            case 0:
                await expect(await this.start_button.isVisible()).not.toBeTruthy();
                break;
            case 1:
                await expect(await this.start_button.isEnabled()).toBeTruthy();
                break;
        }

    }

}