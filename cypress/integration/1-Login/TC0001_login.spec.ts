/// <reference types = 'cypress' />

import { LoginPage } from "../../pages/login_page"
import { PostLogInPage } from "../../pages/postLogIn_page"

const loginPage = new LoginPage()
const postLogInPage = new PostLogInPage()

it('Valid Login and Logout Test', function(){
    loginPage.navigateToLoginPage()
    loginPage.enterLoginCredentials('Admin', 'admin123')
    loginPage.clickLogin()
    postLogInPage.validateProfileGreeting()
    postLogInPage.logout()
    loginPage.validateRedirectedLoginUrl()
})
