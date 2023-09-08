import { browser } from '@wdio/globals'
import Page from './page.js';
import creds from '../../configs/creds.js';
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class SpringBoardLoginPage extends Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */

    get inputUsername () {
        return $('body > div.container > div.row > div > div > div.tab-content > div.tab-pane > form > div:nth-child(2) > input');
        //*[@id="emailField"]
        /html/body/div[1]/div/div/div/div[1]/div[4]/div[1]/form/div[2]/input
        return $('#emailField');
        // return $('input[type="email"]');
        // return $('input[name="username"]');
    }

    get inputPassword () {
        return $('#passwordField');
        // return $('input[type="password"]');
        // return $('input[name="password"]');
    }

    get btnSubmit () {
        return $('#loginButton');
    }

    get loginButton () {
        // return $('#member-login-form > div.form-submit.text-center > button');
        // return $('button[type="submit"]'); // alternative
        return $('button[title="Login"]'); // alternative
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    // invalid element state: invalid element state
    async login (username, password) {
        // const test = await this.inputUsername;
        // console.log('Username elemet: ', test);

        // const userNameInput = await $(function () {
        //     return this.document.querySelector('#emailField');
        // });
        // console.log('Username input value', await userNameInput.getText());

        // await this.inputUsername.waitForExist({ timeout: 10000, timeoutMsg: 'Cannot find the username elenet' });
        // await this.inputPassword.waitForExist({ timeout: 10000, timeoutMsg: 'Cannot find the password elenet' });
        // await this.loginButton.waitForExist({ timeout: 10000, timeoutMsg: 'Cannot find the login button elenet' });
        // await this.inputUsername.waitForDisplayed({ timeout: 10000, timeoutMsg: 'Cannot find the username elenet displayed' });
        // await this.inputPassword.waitForDisplayed({ timeout: 10000, timeoutMsg: 'Cannot find the password elenet displayed' });
        // await this.loginButton.waitForDisplayed({ timeout: 10000, timeoutMsg: 'Cannot find the login button elenet displayed' });
        // const userNameInput = await $('input[type="email"]');
        // const passwordInput = await $('input[type="password"]');
        // const loginButtonInput = await $('button[title="Login"]');
        // await userNameInput.setValue(username);
        // await passwordInput.setValue(password);
        // await loginButtonInput.click();
        //
        // 
        // await this.inputUsername.setValue(username);
        // await this.inputPassword.setValue(password);
        await this.loginButton.click();
    }

    open () {
        return super.open(`${creds.springboardUrl}login`);
    }

    // async login () {
    //     await this.loginButton.click();
    // }
}

export default new SpringBoardLoginPage();
