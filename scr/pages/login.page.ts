import {Locator, Page} from "@playwright/test";
import Wrapper from "../base/Wrapper";
import elements from '../../resource/element/web-elements.json';
export default  class LoginPage extends  Wrapper{
    get passwordHelper(): Locator {
        return this._passwordHelper;
    }

    set passwordHelper(value: Locator) {
        this._passwordHelper = value;
    }
    get usernameHelper(): Locator {
        return this._usernameHelper;
    }

    set usernameHelper(value: Locator) {
        this._usernameHelper = value;
    }
    get errorMessage(): Locator {
        return this._errorMessage;
    }

    set errorMessage(value: Locator) {
        this._errorMessage = value;
    }
    get username(): Locator {
        return this._username;
    }

    set username(value: Locator) {
        this._username = value;
    }

    get password(): Locator {
        return this._password;
    }

    set password(value: Locator) {
        this._password = value;
    }

    get submitButton(): Locator {
        return this._submitButton;
    }

    set submitButton(value: Locator) {
        this._submitButton = value;
    }
    private _username: Locator;
    private _password: Locator;
    private _submitButton: Locator;
    private _errorMessage: Locator;
    private _usernameHelper: Locator;
    private _passwordHelper: Locator;

    constructor(public  page: Page) {
        super(page);
        this.getElement();
    }

    public async getElement(){
        this.username = await this.findLocator(elements.login.username);
        this.password = await this.findLocator(elements.login.password);
        this.submitButton = await this.findLocator(elements.login.submitButton);
        this.errorMessage =  await this.findLocator(elements.login.errorMessage);
        this.usernameHelper = await this.findLocator(elements.login.usernameHelper);
        this.passwordHelper = await this.findLocator(elements.login.passwordHelper);
    }


    public async enterUserName(username: string){
        await this.username.fill(username);
    }
    public async enterPassword(password: string){
        await this.password.fill(password);
    }

    public async clickSubmit(){
        await this.submitButton.click();
    }

    public async loginWithUserPassword(username: string, password: string){
        await this.enterUserName(username);
        await this.enterPassword(password);
        await this.clickSubmit();
    }

    public async visit(){
        await this.page.goto('/');
    }

    public async visit_globalsetup(url){
        await this.page.goto(url, { timeout: 120*1000 });
    }

    public async saveLogedinState(filename: string){
        await this.page.context().storageState({ path: filename });
    }

}