/// <reference types = 'cypress' />

import { LogInPage } from "../../pages/logIn_page"
import { PasswordResetRequestPage } from "../../pages/passwordResetRequest_page"

const logInPage = new LogInPage()
const passwordResetRequestPage = new PasswordResetRequestPage()

before(function(){
    logInPage.navigateToLoginPage()
})

it('Forgot password page validation', function(){
    logInPage.clickForgotPasswordLink()
    passwordResetRequestPage.validatePasswordResetPageUrl()
    passwordResetRequestPage.validateDefaultStateOfPasswordResetForm()
})
