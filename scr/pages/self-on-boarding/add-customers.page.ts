import {Locator, Page} from "@playwright/test";
import Wrapper from "../../base/Wrapper";


export default  class AddCustomersPage extends  Wrapper{
    private _customer_name: Locator[] = [];
    private _customer_bill: Locator[] = [];
    private _customer_delete: Locator[] = [];
    private _customer_add_button: Locator;

    get customer_name(): Locator[] {
        return this._customer_name;
    }

    set customer_name(value: Locator[]) {
        this._customer_name = value;
    }

    get customer_bill(): Locator[] {
        return this._customer_bill;
    }

    set customer_bill(value: Locator[]) {
        this._customer_bill = value;
    }

    get customer_delete(): Locator[] {
        return this._customer_delete;
    }

    set customer_delete(value: Locator[]) {
        this._customer_delete = value;
    }

    get customer_add_button(): Locator {
        return this._customer_add_button;
    }

    set customer_add_button(value: Locator) {
        this._customer_add_button = value;
    }

    constructor(public  page: Page) {
        super(page);
        this.getElement();
    }

    public async getElement(){
        this.customer_name.push(await this.findLocator('#name-0'));
        this.customer_bill.push(await this.findLocator('#bill-0'));
        this.customer_delete.push(await this.findLocator('#delete-0'));
        this.customer_add_button = await this.findLocator('#delete-button');
    }

    public async clickAddButton(){
        await this.customer_add_button.click();
        this.customer_name.push(await this.findLocator('#name-'+this.customer_name.length));
        this.customer_bill.push(await this.findLocator('#bill-'+this.customer_bill.length));
        this.customer_delete.push(await this.findLocator('#delete-'+this.customer_delete.length));
    }
    public async removeAnItem(index : number){
        await this.customer_delete[index].click();
        this.customer_delete.splice(index, 1);
        this.customer_name.splice(index, 1);
        this.customer_bill.splice(index, 1);
        for (let i = 0; i < this.customer_delete.length; i++) {
            this.customer_delete[i] = await this.findLocator('#delete-'+i);
        }
        for (let i = 0; i < this.customer_name.length; i++) {
            this.customer_name[i] = await this.findLocator('#name-'+i);
        }
        for (let i = 0; i < this.customer_bill.length; i++) {
            this.customer_bill[i] = await this.findLocator('#bill-'+i);
        }
    }
    public async addItem(name: string, address: string, bAddNewRow: boolean){
        const index = this.customer_name.length-1;
        await this.customer_name[index].fill(name);
        await this.customer_bill[index].fill(address);
        if (bAddNewRow){
            await this.clickAddButton();
        }
    }
}