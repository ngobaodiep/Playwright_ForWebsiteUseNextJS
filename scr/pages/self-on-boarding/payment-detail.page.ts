import {Locator, Page} from "@playwright/test";
import Wrapper from "../../base/Wrapper";


export default  class PaymentDetailPage extends  Wrapper{
    private _card_number: Locator;
    private _expiry_date: Locator;
    private _cvc: Locator;
    private _card_name: Locator;

    get card_number(): Locator {
        return this._card_number;
    }

    set card_number(value: Locator) {
        this._card_number = value;
    }

    get expiry_date(): Locator {
        return this._expiry_date;
    }

    set expiry_date(value: Locator) {
        this._expiry_date = value;
    }

    get cvc(): Locator {
        return this._cvc;
    }

    set cvc(value: Locator) {
        this._cvc = value;
    }

    get card_name(): Locator {
        return this._card_name;
    }

    set card_name(value: Locator) {
        this._card_name = value;
    }

    constructor(public  page: Page) {
        super(page);
        this.getElement();
    }

    public async getElement(){
        this.card_number = await this.findLocator('#card-number');
        this.expiry_date = await this.findLocator('#expiry-date');
        this.cvc = await this.findLocator('#cvc');
        this.card_name = await this.findLocator('#card-name');
    }
    public async inputCard(card_number: string, expire_date: string, cvc: string, card_name: string ){
        await this.card_number.fill(card_number);
        await this.expiry_date.fill(expire_date);
        await this.cvc.fill(cvc);
        await this.card_name.fill(card_name);
    }
}