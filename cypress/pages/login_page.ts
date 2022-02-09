/// <reference types = "cypress" />

import { CypressHelper } from "../utilities/cypressHelper"

const cyHelper = new CypressHelper()

export class LogInPage{

    selector_usernameTextBox = "[id=txtUsername]"
    selector_passwordTextBox = "[id=txtPassword]"
    selector_loginButton = "[id=btnLogin]"
    selector_forgotPasswordLink = "[id=forgotPasswordLink] > a"
    loginPageUrl = "https://opensource-demo.orangehrmlive.com/"
    redirectedLoginUrl = "https://opensource-demo.orangehrmlive.com/index.php/auth/login"

    navigateToLoginPage(){
        cyHelper.navigate(this.loginPageUrl)
    }
    
    enterUsername(username:string){
        cyHelper.typeInTextBox(this.selector_usernameTextBox, username)
    }
    
    enterPassword(password:string){
        cyHelper.typeInTextBox(this.selector_passwordTextBox, password)
    }
    
    enterLoginCredentials(username:string, password:string){
        this.enterUsername(username)
        this.enterPassword(password)
    }
    
    clickLogin(){
        cyHelper.clickOnElement(this.selector_loginButton)
    }

    clickForgotPasswordLink(){
        cyHelper.clickOnElement(this.selector_forgotPasswordLink)
    }
    
    validateRedirectedLoginUrl(){
        cyHelper.validateUrlIsEqual(this.redirectedLoginUrl)
    }
}
