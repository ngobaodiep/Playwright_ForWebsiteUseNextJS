import Wrapper from "../../base/Wrapper";
import {Locator, Page} from "@playwright/test";
import elements from '../../../resource/element/web-elements.json';

export default  class SettingCreateToolsPage extends  Wrapper{
    get toolsBtn(): Locator {
        return this._toolsBtn;
    }

    set toolsBtn(value: Locator) {
        this._toolsBtn = value;
    }

    get createToolsBtn(): Locator {
        return this._createToolsBtn;
    }

    set createToolsBtn(value: Locator) {
        this._createToolsBtn = value;
    }

    get nameInput(): Locator {
        return this._nameInput;
    }

    set nameInput(value: Locator) {
        this._nameInput = value;
    }

    get referenceInput(): Locator {
        return this._referenceInput;
    }

    set referenceInput(value: Locator) {
        this._referenceInput = value;
    }

    get manufacturerInput(): Locator {
        return this._manufacturerInput;
    }

    set manufacturerInput(value: Locator) {
        this._manufacturerInput = value;
    }

    get categoryInput(): Locator {
        return this._categoryInput;
    }

    set categoryInput(value: Locator) {
        this._categoryInput = value;
    }

    get groupInput(): Locator {
        return this._groupInput;
    }

    set groupInput(value: Locator) {
        this._groupInput = value;
    }

    get serialNumberInput(): Locator {
        return this._serialNumberInput;
    }

    set serialNumberInput(value: Locator) {
        this._serialNumberInput = value;
    }

    get descriptionInput(): Locator {
        return this._descriptionInput;
    }

    set descriptionInput(value: Locator) {
        this._descriptionInput = value;
    }

    get activeBtn(): Locator {
        return this._activeBtn;
    }

    set activeBtn(value: Locator) {
        this._activeBtn = value;
    }

    get cancelInCreate(): Locator {
        return this._cancelInCreate;
    }

    set cancelInCreate(value: Locator) {
        this._cancelInCreate = value;
    }

    get categoryInputDefault(): Locator {
        return this._categoryInputDefault;
    }

    set categoryInputDefault(value: Locator) {
        this._categoryInputDefault = value;
    }

    get groupInputFirst(): Locator {
        return this._groupInputFirst;
    }

    set groupInputFirst(value: Locator) {
        this._groupInputFirst = value;
    }

    get serialNumberInputFirst(): Locator {
        return this._serialNumberInputFirst;
    }

    set serialNumberInputFirst(value: Locator) {
        this._serialNumberInputFirst = value;
    }

    get saveInCreate(): Locator {
        return this._saveInCreate;
    }

    set saveInCreate(value: Locator) {
        this._saveInCreate = value;
    }

    get rightSuccess(): Locator {
        return this._rightSuccess;
    }

    set rightSuccess(value: Locator) {
        this._rightSuccess = value;
    }

    get textRightSuccess(): Locator {
        return this._textRightSuccess;
    }

    set textRightSuccess(value: Locator) {
        this._textRightSuccess = value;
    }

    private _toolsBtn : Locator;
    private _createToolsBtn : Locator;
    private _nameInput : Locator;
    private _referenceInput : Locator;
    private _manufacturerInput : Locator;
    private _categoryInput : Locator;
    private _categoryInputDefault : Locator;
    private _groupInput : Locator;
    private _groupInputFirst : Locator;
    private _serialNumberInput : Locator;
    private _descriptionInput : Locator;
    private _serialNumberInputFirst : Locator;
    private _activeBtn : Locator;
    private _cancelInCreate : Locator;
    private _saveInCreate : Locator;
    private _rightSuccess : Locator;
    private _textRightSuccess : Locator;

    constructor(public  page: Page) {
        super(page);
        this.getElement();
    }

    public async getElement() {
        this.createToolsBtn = await this.findLocator(elements.setting.tools.createToolsBtn);
        this.nameInput = await this.findLocator(elements.setting.tools.createNew.nameInput);
        this.referenceInput = await this.findLocator(elements.setting.tools.createNew.referenceInput);
        this.manufacturerInput = await this.findLocator(elements.setting.tools.createNew.manufacturerInput);
        this.categoryInput = await this.findLocator(elements.setting.tools.createNew.categoryInput);
        this.categoryInputDefault = await this.findLocator(elements.setting.tools.createNew.categoryInputDefault);
        this.groupInput = await this.findLocator(elements.setting.tools.createNew.groupInput);
        this.groupInputFirst = await this.findLocator(elements.setting.tools.createNew.groupInputFirst);
        this.serialNumberInput = await this.findLocator(elements.setting.tools.createNew.serialNumberInput);
        this.serialNumberInputFirst = await this.findLocator(elements.setting.tools.createNew.serialNumberInputFirst);
        this.descriptionInput = await this.findLocator(elements.setting.tools.createNew.descriptionInput);
        this.activeBtn = await this.findLocator(elements.setting.tools.createNew.activeBtn);
        this.cancelInCreate = await this.findLocator(elements.setting.tools.createNew.cancel);
        this.saveInCreate = await this.findLocator(elements.setting.tools.createNew.save);
        this.rightSuccess = await this.findLocator(elements.setting.notification.rightSuccess);
    }

    public async testCreateTools(){
        await this.createToolsBtn.click();
        //await this.page.waitForURL(/mapp/,{timeout:100000})
        await this.nameInput.fill("test name");
        await this.referenceInput.fill("test reference");
        await this.manufacturerInput.fill("test manufacturer");
        await this.categoryInput.click();
        await this.categoryInputDefault.click();
        await this.descriptionInput.fill("test description");
        await this.saveInCreate.nth(1).click();

        if( await this.rightSuccess.isVisible() ) {
            console.log("There is a success message");
        }
        else {
            console.log("There is'nt a success message");
        }
    }
}