import Wrapper from "../../base/Wrapper";
import {Locator, Page} from "@playwright/test";
import elements from '../../../resource/element/web-elements.json';

export default  class SettingToolsPage extends  Wrapper{
    get toolsBtn(): Locator {
        return this._toolsBtn;
    }

    set toolsBtn(value: Locator) {
        this._toolsBtn = value;
    }

    get searchByTextBox(): Locator {
        return this._searchByTextBox;
    }

    set searchByTextBox(value: Locator) {
        this._searchByTextBox = value;
    }

    get searchByBtn(): Locator {
        return this._searchByBtn;
    }

    set searchByBtn(value: Locator) {
        this._searchByBtn = value;
    }

    get searchByListOptionAll(): Locator {
        return this._searchByListOptionAll;
    }

    set searchByListOptionAll(value: Locator) {
        this._searchByListOptionAll = value;
    }

    get recordRowAll(): Locator {
        return this._recordRowAll;
    }

    set recordRowAll(value: Locator) {
        this._recordRowAll = value;
    }

    get itself(): Locator {
        return this._itself;
    }

    set itself(value: Locator) {
        this._itself = value;
    }

    get editBtn(): Locator {
        return this._editBtn;
    }

    set editBtn(value: Locator) {
        this._editBtn = value;
    }

    get deleteBtn(): Locator {
        return this._deleteBtn;
    }

    set deleteBtn(value: Locator) {
        this._deleteBtn = value;
    }

    get namePopup(): Locator {
        return this._namePopup;
    }

    set namePopup(value: Locator) {
        this._namePopup = value;
    }

    get statusPopup(): Locator {
        return this._statusPopup;
    }

    set statusPopup(value: Locator) {
        this._statusPopup = value;
    }

    get referencePopup(): Locator {
        return this._referencePopup;
    }

    set referencePopup(value: Locator) {
        this._referencePopup = value;
    }

    get categoryPopup(): Locator {
        return this._categoryPopup;
    }

    set categoryPopup(value: Locator) {
        this._categoryPopup = value;
    }

    get boxOtherInformation(): Locator {
        return this._boxOtherInformation;
    }

    set boxOtherInformation(value: Locator) {
        this._boxOtherInformation = value;
    }

    get closeBtn(): Locator {
        return this._closeBtn;
    }

    set closeBtn(value: Locator) {
        this._closeBtn = value;
    }

    get nameSearchOption(): Locator {
        return this._nameSearchOption;
    }

    set nameSearchOption(value: Locator) {
        this._nameSearchOption = value;
    }

    get allColumnSearchOption(): Locator {
        return this._allColumnSearchOption;
    }

    set allColumnSearchOption(value: Locator) {
        this._allColumnSearchOption = value;
    }

    get referenceSearchOption(): Locator {
        return this._referenceSearchOption;
    }

    set referenceSearchOption(value: Locator) {
        this._referenceSearchOption = value;
    }

    get categorySearchOption(): Locator {
        return this._categorySearchOption;
    }

    set categorySearchOption(value: Locator) {
        this._categorySearchOption = value;
    }

    get groupSearchOption(): Locator {
        return this._groupSearchOption;
    }

    set groupSearchOption(value: Locator) {
        this._groupSearchOption = value;
    }

    get lithiumBatterySearchOption(): Locator {
        return this._lithiumBatterySearchOption;
    }

    set lithiumBatterySearchOption(value: Locator) {
        this._lithiumBatterySearchOption = value;
    }

    get batteryLevelSearchOption(): Locator {
        return this._batteryLevelSearchOption;
    }

    set batteryLevelSearchOption(value: Locator) {
        this._batteryLevelSearchOption = value;
    }

    get statusSearchOption(): Locator {
        return this._statusSearchOption;
    }

    set statusSearchOption(value: Locator) {
        this._statusSearchOption = value;
    }

    // popup

    get checkboxSelection(): Locator {
        return this._checkboxSelection;
    }

    set checkboxSelection(value: Locator) {
        this._checkboxSelection = value;
    }

    get referenceShowColumn(): Locator {
        return this._referenceShowColumn;
    }

    set referenceShowColumn(value: Locator) {
        this._referenceShowColumn = value;
    }

    get nameShowColumn(): Locator {
        return this._nameShowColumn;
    }

    set nameShowColumn(value: Locator) {
        this._nameShowColumn = value;
    }

    get categoryShowColumn(): Locator {
        return this._categoryShowColumn;
    }

    set categoryShowColumn(value: Locator) {
        this._categoryShowColumn = value;
    }

    get groupShowColumn(): Locator {
        return this._groupShowColumn;
    }

    set groupShowColumn(value: Locator) {
        this._groupShowColumn = value;
    }

    get lithiumBatteryShowColumn(): Locator {
        return this._lithiumBatteryShowColumn;
    }

    set lithiumBatteryShowColumn(value: Locator) {
        this._lithiumBatteryShowColumn = value;
    }

    get batteryLevelShowColumn(): Locator {
        return this._batteryLevelShowColumn;
    }

    set batteryLevelShowColumn(value: Locator) {
        this._batteryLevelShowColumn = value;
    }

    get statusShowColumn(): Locator {
        return this._statusShowColumn;
    }

    set statusShowColumn(value: Locator) {
        this._statusShowColumn = value;
    }

    get actionShowColumn(): Locator {
        return this._actionShowColumn;
    }

    set actionShowColumn(value: Locator) {
        this._actionShowColumn = value;
    }

    private _toolsBtn : Locator;
    private _searchByTextBox : Locator;
    private _searchByBtn : Locator;
    private _searchByListOptionAll : Locator;
    private _recordRowAll : Locator;

    // popup
    private _itself : Locator;
    private _editBtn : Locator;
    private _deleteBtn : Locator;
    private _namePopup : Locator;
    private _statusPopup : Locator;
    private _referencePopup : Locator;
    private _categoryPopup : Locator;
    private _boxOtherInformation : Locator;
    private _closeBtn : Locator;

    // search option
    private _nameSearchOption : Locator;
    private _allColumnSearchOption : Locator;
    private _referenceSearchOption : Locator;
    private _categorySearchOption : Locator;
    private _groupSearchOption : Locator;
    private _lithiumBatterySearchOption : Locator;
    private _batteryLevelSearchOption : Locator;
    private _statusSearchOption : Locator;

    // show column
    private _checkboxSelection : Locator;
    private _referenceShowColumn : Locator;
    private _nameShowColumn : Locator;
    private _categoryShowColumn : Locator;
    private _groupShowColumn : Locator;
    private _lithiumBatteryShowColumn : Locator;
    private _batteryLevelShowColumn : Locator;
    private _statusShowColumn : Locator;
    private _actionShowColumn : Locator;

    constructor(public  page: Page) {
        super(page);
        this.getElement();
    }

    public async getElement(){
        // tools
        this.searchByTextBox = await this.findLocator(elements.setting.tools.searchByTextBox);
        this.searchByBtn = await this.findLocator(elements.setting.tools.searchByBtn);
        this.recordRowAll = await this.findLocator(elements.setting.tools.recordRowAll);

        // popup
        this.itself = await this.findLocator(elements.setting.tools.popup.itself);
        this.editBtn = await this.findLocator(elements.setting.tools.popup.editBtn);
        this.deleteBtn = await this.findLocator(elements.setting.tools.popup.deleteBtn);
        this.namePopup = await this.findLocator(elements.setting.tools.popup.name);
        this.statusPopup = await this.findLocator(elements.setting.tools.popup.status);
        this.referencePopup = await this.findLocator(elements.setting.tools.popup.reference);
        this.categoryPopup = await this.findLocator(elements.setting.tools.popup.category);
        this.boxOtherInformation = await this.findLocator(elements.setting.tools.popup.boxOtherInformation);
        this.closeBtn = await this.findLocator(elements.setting.tools.popup.closeBtn);
    
        // filter column
        this.allColumnSearchOption = await this.findLocator(elements.setting.tools.searchOption.allColumn);
        this.referenceSearchOption = await this.findLocator(elements.setting.tools.searchOption.reference);
        this.nameSearchOption = await this.findLocator(elements.setting.tools.searchOption.name);
        this.categorySearchOption = await this.findLocator(elements.setting.tools.searchOption.category);
        this.groupSearchOption = await this.findLocator(elements.setting.tools.searchOption.group);
        this.lithiumBatterySearchOption = await this.findLocator(elements.setting.tools.searchOption.lithiumBattery);
        this.batteryLevelSearchOption = await this.findLocator(elements.setting.tools.searchOption.batteryLevel);
        this.statusSearchOption = await this.findLocator(elements.setting.tools.searchOption.status);
    }

    public async filterColumn(){
        await this.searchByTextBox.fill("6");

        await this.searchByBtn.click();
        await this.referenceSearchOption.click();

        await this.searchByBtn.click();
        await this.nameSearchOption.click();

        await this.searchByBtn.click();
        await this.categorySearchOption.click();

        await this.searchByBtn.click();
        await this.groupSearchOption.click();

        await this.searchByBtn.click();
        await this.lithiumBatterySearchOption.click();

        await this.searchByBtn.click();
        await this.batteryLevelSearchOption.click();

        await this.searchByBtn.click();
        await this.statusSearchOption.click();

        await this.searchByBtn.click();
        await this.allColumnSearchOption.click();
        await this.searchByTextBox.fill("");
    }

    public async testShowData(){
        let row = this.recordRowAll.nth(2);
        let reference = await row.locator(elements.setting.tools.rowFields.reference).innerText();
        let name = await row.locator(elements.setting.tools.rowFields.name).innerText();
        let category = await row.locator(elements.setting.tools.rowFields.category).innerText();
        let status = await row.locator(elements.setting.tools.rowFields.status).innerText();

        await row.locator(elements.setting.tools.rowFields.reference).click();

        let namePopup = await this.namePopup.innerText();
        let statusPopup = await this.statusPopup.innerText();
        let referencePopup = await this.referencePopup.innerText();
        let categoryPopup = await this.categoryPopup.innerText();
        
        if(namePopup == name && statusPopup.includes(status) && referencePopup.includes(reference) &&  categoryPopup.includes(category)) {
            console.log("Popup's information is correct");
        }
        else {
            console.log("Popup's information isn't correct");
        }
        await this.closeBtn.click();
    }
}