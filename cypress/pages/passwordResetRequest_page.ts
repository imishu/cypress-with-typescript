/// <reference types = 'cypress'/>

import { CypressHelper } from "../utilities/cypressHelper"

const cyHelper = new CypressHelper()

export class PasswordResetRequestPage{
    selector_passwordResetFormSectionHeader = '[class=head] h1'
    selector_passwordResetFormInnerNote = '[class=inner] > :nth-child(1)'
    selector_passwordResetFormUsernameLabel = '[for=securityAuthentication_userName]'
    selector_passwordResetFormUsernameTextbox = '[id=securityAuthentication_userName]'
    selector_resetPasswordButton = '[id=btnSearchValues]'
    selector_resetPasswordCancelButton = '[id=btnCancel]'
    passwordResetPageUrl =  'https://opensource-demo.orangehrmlive.com/index.php/auth/requestPasswordResetCode'
    passwordResetFormSectionHeader = 'Forgot Your Password?'
    passwordResetFormInnerNote = 'Please enter your username to identify your account to reset your password.'
    passwordResetFormUsernameLabel = 'OrangeHRM Username'
    resetPasswordButtonLabel = 'Reset Password'
    resetPasswordCancelButtonLabel = 'Cancel'

    validatePasswordResetPageUrl(){
        cyHelper.validateUrlIsEqual(this.passwordResetPageUrl)  
    }
    validateDefaultStateOfPasswordResetForm(){
        cyHelper.validateElementContainsString(this.selector_passwordResetFormSectionHeader, this.passwordResetFormSectionHeader)
        cyHelper.validateElementContainsString(this.selector_passwordResetFormInnerNote, this.passwordResetFormInnerNote)
        cyHelper.validateElementContainsString(this.selector_passwordResetFormUsernameLabel, this.passwordResetFormUsernameLabel)
        cyHelper.validateElementDoesNotHaveValue(this.selector_passwordResetFormUsernameTextbox)
        cyHelper.validateElementValue(this.selector_resetPasswordButton, this.resetPasswordButtonLabel )
        cyHelper.validateElementValue(this.selector_resetPasswordCancelButton, this.resetPasswordCancelButtonLabel )
    }
}