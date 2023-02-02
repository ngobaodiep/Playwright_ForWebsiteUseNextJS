import Wrapper from "../base/Wrapper";
import {Locator, Page} from "@playwright/test";
import elements from '../../resource/element/web-elements.json';

export default  class MainMenuPage extends  Wrapper{

    get settingIcon(): Locator {
        return this._settingIcon;
    }

    set settingIcon(value: Locator) {
        this._settingIcon = value;
    }

    get logoutBtn(): Locator {
        return this._logoutBtn;
    }

    set logoutBtn(value: Locator) {
        this._logoutBtn = value;
    }
    get avatarImg(): Locator {
        return this._avatarImg;
    }

    set avatarImg(value: Locator) {
        this._avatarImg = value;
    }
    private _avatarImg : Locator;
    private _logoutBtn : Locator;
    private _settingIcon : Locator;


    constructor(public  page: Page) {
        super(page);
        this.getElement();
    }

    public async getElement(){

        this.avatarImg = await this.findLocator(elements.mainMenu.avatarIcon);
        this.logoutBtn = await this.findLocator(elements.mainMenu.logoutBtn);
        this.settingIcon = await this.findLocator(elements.mainMenu.settingIcon);
    }
}