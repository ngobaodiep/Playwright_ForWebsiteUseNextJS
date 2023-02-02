import {Locator, Page} from "@playwright/test";
import Wrapper from "../../base/Wrapper";


export default  class AddSitesPage extends  Wrapper{
    get site_customer_listbox(): Locator[] {
        return this._site_customer_listbox;
    }

    set site_customer_listbox(value: Locator[]) {
        this._site_customer_listbox = value;
    }

    private _site_name: Locator[] = [];
    private _site_customer: Locator[] = [];
    private _site_address: Locator[] = [];
    private _site_delete: Locator[] = [];
    private _site_add_button: Locator;
    private _site_customer_listbox: Locator[]=[];

    get site_name(): Locator[] {
        return this._site_name;
    }

    set site_name(value: Locator[]) {
        this._site_name = value;
    }

    get site_customer(): Locator[] {
        return this._site_customer;
    }

    set site_customer(value: Locator[]) {
        this._site_customer = value;
    }

    get site_address(): Locator[] {
        return this._site_address;
    }

    set site_address(value: Locator[]) {
        this._site_address = value;
    }

    get site_delete(): Locator[] {
        return this._site_delete;
    }

    set site_delete(value: Locator[]) {
        this._site_delete = value;
    }

    get site_add_button(): Locator {
        return this._site_add_button;
    }

    set site_add_button(value: Locator) {
        this._site_add_button = value;
    }

    constructor(public  page: Page) {
        super(page);
        this.getElement();
    }

    public async getElement(){
        this.site_name.push(await this.findLocator('#name-0'));
        this.site_customer.push(await this.findLocator('#customer-0'));
        this.site_address.push(await this.findLocator('#address-0'));
        this.site_delete.push(await this.findLocator('#delete-0'));
        this.site_add_button = await this.findLocator('#add-site-button');
    }

    public async initCustomerListbox(index : number){
        let i: number = 0;
        this.site_customer_listbox = [];
        while (true) {
            let e : Locator;
            let count: number = await this.page.locator('#customer-'+index+'_item-'+i).count();
            if (count > 0){
                this.site_customer_listbox.push(await this.page.locator('#customer-'+index+'_item-'+i));
                i++;
            } else break;
        }
    }


    public async clickAddButton(){
        await this.site_add_button.click();
        this.site_name.push(await this.findLocator('#name-'+this.site_name.length));
        this.site_customer.push(await this.findLocator('#customer-'+this.site_customer.length));
        this.site_address.push(await this.findLocator('#address-'+this.site_address.length));
        this.site_delete.push(await this.findLocator('#delete-'+this.site_delete.length));
    }
    public async removeAnItem(index : number){
        await this.site_delete[index].click();
        this.site_name.splice(index, 1);
        this.site_customer.splice(index, 1);
        this.site_address.splice(index, 1);
        this.site_delete.splice(index, 1);
        for (let i = 0; i < this.site_name.length; i++) {
            this.site_name[i] = await this.findLocator('#name-'+i);
        }
        for (let i = 0; i < this.site_customer.length; i++) {
            this.site_customer[i] = await this.findLocator('#customer-'+i);
        }
        for (let i = 0; i < this.site_address.length; i++) {
            this.site_address[i] = await this.findLocator('#address-'+i);
        }
        for (let i = 0; i < this.site_delete.length; i++) {
            this.site_delete[i] = await this.findLocator('#delete-'+i);
        }
    }
    public async addItem(name: string, customerIndex: number, address: string, bAddNewRow: boolean, bInitListBox: boolean){
        const index = this.site_name.length - 1;
        await this.site_name[index].fill(name);
        await this.site_customer[index].click();
        if (bInitListBox) await this.initCustomerListbox(index);
        await this.site_customer_listbox[customerIndex].click();
        await this.site_address[index].fill(address);
        if (bAddNewRow) await this.clickAddButton();
    }
}