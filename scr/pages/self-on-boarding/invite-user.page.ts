import {Locator, Page} from "@playwright/test";
import Wrapper from "../../base/Wrapper";


export default  class InviteUserPage extends  Wrapper{
    get tags_filled(): Locator {
        return this._tags_filled;
    }

    set tags_filled(value: Locator) {
        this._tags_filled = value;
    }
    private _tags_filled: Locator;

    constructor(public  page: Page) {
        super(page);
        this.getElement();
    }

    public async getElement(){
        this.tags_filled = await this.findLocator('#tags');
    }
}