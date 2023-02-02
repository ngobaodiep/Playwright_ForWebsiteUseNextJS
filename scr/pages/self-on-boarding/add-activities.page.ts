import {expect, Locator, Page} from "@playwright/test";
import Wrapper from "../../base/Wrapper";


export default  class AddActivitiesPage extends  Wrapper{
    get activity_color_box(): Locator {
        return this._activity_color_box;
    }

    set activity_color_box(value: Locator) {
        this._activity_color_box = value;
    }
    get activity_name(): Locator[] {
        return this._activity_name;
    }

    set activity_name(value: Locator[]) {
        this._activity_name = value;
    }

    get activity_color(): Locator[] {
        return this._activity_color;
    }

    set activity_color(value: Locator[]) {
        this._activity_color = value;
    }

    get activity_delete(): Locator[] {
        return this._activity_delete;
    }

    set activity_delete(value: Locator[]) {
        this._activity_delete = value;
    }

    get activity_add_button(): Locator {
        return this._activity_add_button;
    }

    set activity_add_button(value: Locator) {
        this._activity_add_button = value;
    }
    private _activity_name: Locator[] = [];
    private _activity_color: Locator[] = [];
    private _activity_delete: Locator[] = [];
    private _activity_color_box: Locator;
    private _activity_add_button: Locator;

    constructor(public  page: Page) {
        super(page);
        this.getElement();
    }

    public async getElement(){
        this.activity_name.push(await this.findLocator('#name-0'));
        this.activity_color.push(await this.findLocator('#color-0'));
        this.activity_delete.push(await this.findLocator('#delete-0'));
        this.activity_add_button = await this.findLocator('#add-activity-button');
        this.activity_color_box = await this.findLocator('.MuiList-root.MuiList-padding.MuiList-dense.MuiMenu-list.css-6hp17o-MuiList-root-MuiMenu-list');
    }

    public async clickAddButton(){
        await this.activity_add_button.click();
        this.activity_name.push(await this.findLocator('#name-'+this.activity_name.length));
        this.activity_color.push(await this.findLocator('#color-'+this.activity_color.length));
        this.activity_delete.push(await this.findLocator('#delete-'+this.activity_delete.length));
    }
    public async removeAnItem(index : number){
        await this.activity_delete[index].click();
        this.activity_delete.splice(index, 1);
        this.activity_name.splice(index, 1);
        this.activity_color.splice(index, 1);
        for (let i = 0; i < this.activity_name.length; i++) {
            this.activity_name[i] = await this.findLocator('#name-'+i);
        }
        for (let i = 0; i < this.activity_color.length; i++) {
            this.activity_color[i] = await this.findLocator('#color-'+i);
        }
        for (let i = 0; i < this.activity_delete.length; i++) {
            this.activity_delete[i] = await this.findLocator('#delete-'+i);
        }
    }

    public async addItem(name: string, color: string, bAddNewRow: boolean){
        const index: number = this.activity_name.length - 1;
        await this.activity_name[index].fill(name);
        await this.activity_color[index].click();
        await this.activity_color_box.locator('li[data-value="'+color+'"]').click();
        if (bAddNewRow){
            await this.clickAddButton();
            expect(await this.activity_name[index+1].isVisible()).toBeTruthy();
        }
    }
}