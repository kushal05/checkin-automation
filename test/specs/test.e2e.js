import RazorPayLoginPage from '../pageobjects/razorpay-login-page.js'
import configs from '../../configs/creds.js';
import { browser } from '@wdio/globals'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await RazorPayLoginPage.open();
        await RazorPayLoginPage.login(configs.username, configs.password);
        await RazorPayLoginPage.openAttendancePage();
        const date = new Date();
        console.log(date.getHours())
        if (date.getHours() < 13) {
            await RazorPayLoginPage.checkin();
        } else {
            await RazorPayLoginPage.checkout();
        }
    })
})