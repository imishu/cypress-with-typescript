/// <reference types = 'cypress' />

import { LoginPage } from "../../pages/login_page"
import { CypressHelper } from "../../utilities/cypressHelper"
import { DashboardPage } from "../../pages/dashboard"

const cyHelper = new CypressHelper()
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

it('Valid Login and Logout Test', function(){
    loginPage.navigateToLoginPage()
    loginPage.enterLoginCredentials('Admin', 'admin123')
    loginPage.clickLogin()
    dashboardPage.validateProfileGreeting()
    dashboardPage.logout()
    loginPage.validateRedirectedLoginUrl()
})