import Wrapper from "../base/Wrapper";
import {Locator, Page} from "@playwright/test";

export default  class TemplatePage extends  Wrapper{

    constructor(public  page: Page) {
        super(page);
        this.getElement();
    }

    public async getElement(){

    }
}