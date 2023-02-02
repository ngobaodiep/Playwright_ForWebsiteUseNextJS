import Wrapper from "../../base/Wrapper";
import {Locator, Page} from "@playwright/test";

export default  class CompanyDetailsPage extends  Wrapper{
    get company_name(): Locator {
        return this._company_name;
    }

    set company_name(value: Locator) {
        this._company_name = value;
    }

    get profile_picture(): Locator {
        return this._profile_picture;
    }

    set profile_picture(value: Locator) {
        this._profile_picture = value;
    }
    COMPANY_NAME = 'company-name';
    PROFILE_PICTURE = 'profile-picture';

    private _company_name: Locator;
    private _profile_picture: Locator;
//D column here

    constructor(public  page: Page) {
        super(page);
        this.getElement();
    }

    public async getElement(){
        this.company_name = await this.findLocator('#company-name');
        this.profile_picture = await this.findLocator('#profile-picture');
//E column here
    }
}