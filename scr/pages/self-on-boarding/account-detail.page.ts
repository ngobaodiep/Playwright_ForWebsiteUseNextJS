import {expect, Locator, Page} from "@playwright/test";
import Wrapper from "../../base/Wrapper";
import ButtonsBarPage from "./buttons-bar.page";


export default  class AccountDetailPage extends  Wrapper{
    get list_country_code(): Locator {
        return this._list_country_code;
    }

    set list_country_code(value: Locator) {
        this._list_country_code = value;
    }
    get tel_country_code(): Locator {
        return this._tel_country_code;
    }

    set tel_country_code(value: Locator) {
        this._tel_country_code = value;
    }

    get firstname(): Locator {
        return this._firstname;
    }

    set firstname(value: Locator) {
        this._firstname = value;
    }

    get lastname(): Locator {
        return this._lastname;
    }

    set lastname(value: Locator) {
        this._lastname = value;
    }

    get email(): Locator {
        return this._email;
    }

    set email(value: Locator) {
        this._email = value;
    }

    get phone(): Locator {
        return this._phone;
    }

    set phone(value: Locator) {
        this._phone = value;
    }

    get company(): Locator {
        return this._company;
    }

    set company(value: Locator) {
        this._company = value;
    }

    get street(): Locator {
        return this._street;
    }

    set street(value: Locator) {
        this._street = value;
    }

    get zipcode(): Locator {
        return this._zipcode;
    }

    set zipcode(value: Locator) {
        this._zipcode = value;
    }

    get city(): Locator {
        return this._city;
    }

    set city(value: Locator) {
        this._city = value;
    }


    private _firstname: Locator;
    private _lastname: Locator;
    private _email: Locator;
    private _tel_country_code: Locator;
    private _phone: Locator;
    private _company: Locator;
    private _street: Locator;
    private _zipcode: Locator;
    private _city: Locator;
    private _list_country_code: Locator;


    constructor(public  page: Page) {
        super(page);
        this.getElement();
    }

    public async getElement(){
        this.firstname = await this.findLocator('#firstname');
        this.lastname = await this.findLocator('#lastname');
        this.email = await this.findLocator('#email');
        this.tel_country_code = await this.findLocator('div[class="flag-dropdown "]');
        this.phone = await this.findLocator('input[type="tel"]');
        this.company = await this.findLocator('#company');
        this.street = await this.findLocator('#street');
        this.zipcode = await this.findLocator('#zipcode');
        this.city = await this.findLocator('#city');
        this.list_country_code = await this.findLocator('.country-list ');
    }
    public async enter_firstname(firstname: string){
        await this.firstname.fill(firstname);
    }
    public async enter_lastname(lastname: string){
        await this.lastname.fill(lastname);
    }
    public async enter_email(email: string){
        await this.email.fill(email);
    }
    public async enter_company(company: string){
        await this.company.fill(company);
    }
    public async enter_street(street: string){
        await this.street.fill(street);
    }
    public async enter_zipcode(zipcode: string){
        await this.zipcode.fill(zipcode);
    }
    public async enter_city(city: string){
        await this.city.fill(city);
    }
    public async enter_phone(phone: string){
        await this.phone.fill(phone);
    }
    public async click_tel_country_code(){
        await this.tel_country_code.click();
    }
    public async choose_option_tel_country_code(tabIndex: number){
        await this.list_country_code.locator('li[data-value="+49"]').click();
    }
    public async inputData(firstname: string, lastname: string, email: string, code: string, phone: string, company: string, street: string, zip: string, city: string, buttonBar: ButtonsBarPage){
        await this.firstname.fill(firstname);
        expect(await buttonBar.next_button.isDisabled()).toBeTruthy();
        await this.lastname.fill(lastname);
        expect(await buttonBar.next_button.isDisabled()).toBeTruthy();
        await this.email.fill(email);
        expect(await buttonBar.next_button.isDisabled()).toBeTruthy();
        await this.tel_country_code.click();
        expect(await buttonBar.next_button.isDisabled()).toBeTruthy();
        await this.list_country_code.locator('span[class="dial-code"]',{hasText: code}).click();
        expect(await buttonBar.next_button.isDisabled()).toBeTruthy();
        await this.phone.fill(phone);
        expect(await buttonBar.next_button.isDisabled()).toBeTruthy();
        await this.company.fill(company);
        expect(await buttonBar.next_button.isDisabled()).toBeTruthy();
        await this.street.fill(street);
        expect(await buttonBar.next_button.isDisabled()).toBeTruthy();
        await this.zipcode.fill(zip);
        expect(await buttonBar.next_button.isDisabled()).toBeTruthy();
        await this.city.fill(city);
        expect(await buttonBar.next_button.isEnabled()).toBeTruthy();
    }

    public async checkSavedData(firstname: string, lastname: string, email: string, code: string, phone: string, company: string, street: string, zip: string, city: string){
        expect(await this.firstname.inputValue()).toEqual(firstname);
        expect(await this.lastname.inputValue()).toEqual(lastname);
        expect(await this.email.inputValue()).toEqual(email);
        expect((await this.phone.inputValue()).replace(/ /g,'')).toEqual(code+phone);
        expect(await this.company.inputValue()).toEqual(company);
        expect(await this.street.inputValue()).toEqual(street);
        expect(await this.zipcode.inputValue()).toEqual(zip);
        expect(await this.city.inputValue()).toEqual(city);
    }
}