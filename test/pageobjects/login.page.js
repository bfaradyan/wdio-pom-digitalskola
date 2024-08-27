import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {

    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('//input[@type="submit"]');
    }

    get errorMessage () {
        return $('//*[@id="login_button_container"]/div/form/div[3]/h3');
    }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async wrongCredentialValidate() {
        await expect(this.errorMessage).toHaveText(
            expect.stringContaining("Epic sadface: Username and password do not match any user in this service")
        )
    }

    open () {
        return super.open('');
    }
}

export default new LoginPage();