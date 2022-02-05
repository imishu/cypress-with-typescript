/// <reference types = 'cypress' />

import { CypressHelper } from "../utilities/cypressHelper"

const cyHelper = new CypressHelper()

export class DashboardPage{
    profileWelcomeMessage = "[id=welcome]"
    logoutLink = '[id=welcome-menu] a[href="/index.php/auth/logout"]'

    validateProfileGreeting(){
        cyHelper.validateElementContainsString(this.profileWelcomeMessage, 'Welcome')
    }
    clickProfile(){
        cyHelper.clickOnElement(this.profileWelcomeMessage)
    }
    clickLogoutOptionLink(){
        cyHelper.clickOnElement(this.logoutLink)
    }
    logout(){
        this.clickProfile()
        this.clickLogoutOptionLink()        
    }
}