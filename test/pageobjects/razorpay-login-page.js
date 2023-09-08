import { browser } from '@wdio/globals'
import Page from './page.js';
import creds from '../../configs/creds.js';
/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class RazorPayLoginPage extends Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */

    get inputUsername () {
        return $('input[type="email"]');
    }

    get inputPassword () {
        return $('input[type="password"]');
    }

    get btnSubmit () {
        return $('#loginButton');
    }

    get checkoutButton () {
        // return $('body > div > main > div.wrapper > div > form.form__style--fullwidth > div > div > div:nth-child(2) > button:nth-child(2)');
        return $('button[value="mark-attendance-checkout"]'); // alternative
    }
    
    get checkInButton () {
        // return $('body > div > main > div.wrapper > div > form.form__style--fullwidth > div > div > div:nth-child(2) > button:nth-child(1)')
        return $('button[value="mark-attendance-checkin"]'); // alternative
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open () {
        return super.open(`${creds.razorpayUrl}login?redirect=%2Fattendance`);
    }

    openAttendancePage() {
        console.log('Inside attendance page')
        return super.open(`${creds.razorpayUrl}attendance`);
    }

    async checkout () {
        await this.checkoutButton.click();
    }

    async checkin () {
        await this.checkInButton.click();
    }
}

export default new RazorPayLoginPage();
