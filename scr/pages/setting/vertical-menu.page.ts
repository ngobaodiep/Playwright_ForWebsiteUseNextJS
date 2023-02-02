import Wrapper from "../../base/Wrapper";
import {Locator, Page} from "@playwright/test";
import elements from '../../../resource/element/web-elements.json';

export default  class VerticalMenuPage extends  Wrapper{
    get toolsBtn(): Locator {
        return this._toolsBtn;
    }

    set toolsBtn(value: Locator) {
        this._toolsBtn = value;
    }

    private _toolsBtn : Locator;
    constructor(public  page: Page) {
        super(page);
        this.getElement();
    }

    public async getElement(){
        this.toolsBtn = await this.findLocator(elements.setting.verticalMenu.toolsBtn);
    }
}

