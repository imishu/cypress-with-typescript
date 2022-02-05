/// <reference types = 'cypress' />

import { LoginPage } from "../../pages/login_page"
import { PostLoginPage } from "../../pages/postLogin_page"

const loginPage = new LoginPage()
const postLoginPage = new PostLoginPage()

it('Valid Login and Logout Test', function(){
    loginPage.navigateToLoginPage()
    loginPage.enterLoginCredentials('Admin', 'admin123')
    loginPage.clickLogin()
    postLoginPage.validateProfileGreeting()
    postLoginPage.logout()
    loginPage.validateRedirectedLoginUrl()
})
