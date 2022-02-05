/// <reference types = 'cypress' />

import { LogInPage } from "../../pages/logIn_page"
import { PostLogInPage } from "../../pages/postLogIn_page"

const logInPage = new LogInPage()
const postLogInPage = new PostLogInPage()

it('Valid Login and Logout Test', function(){
    logInPage.navigateToLoginPage()
    logInPage.enterLoginCredentials('Admin', 'admin123')
    logInPage.clickLogin()
    postLogInPage.validateProfileGreeting()
    postLogInPage.logout()
    logInPage.validateRedirectedLoginUrl()
})
