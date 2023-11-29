export class LoginPage{

    loginPage_username = ':nth-child(1) > .sc-ksZaOG > .sc-fnykZs'
    loginPage_password = ':nth-child(2) > .sc-ksZaOG > .sc-fnykZs'
    loginPage_loginButton = 'Login'

    // menu buttons
    Dashboard_menuButton = 'Dashboard'
    Facilities_menuButton = 'Facilities'
    Facility_menuButton = 'Facility'
    Reports_menuButton = 'Reports'
    Users_menuButton = 'Users'
    Donors_subMenu = 'Donors'

    // Homepage elements
    

    navigate(url) {

        cy.visit(url)

    }
    enterusername(username) {
        cy.get(this.loginPage_username).type(username)

    }
    enterPassword(password) {
        cy.get(this.loginPage_password).type(password)

    }
    clickLogin() {
        cy.contains(this.loginPage_loginButton).click()

    }

    // Login page actions
    clickDashboard() {
        cy.contains(this.Dashboard_menuButton).click()
    }
    clickFacilities() {
        cy.contains(this.Facilities_menuButton).click()
    }
    clickFacility() {
        cy. contains(this.Facility_menuButton).click()
    }
    clickReports() {
        cy.contains(this.Reports_menuButton).click()
    }
    clickUsers() {
        cy.contains(this.Users_menuButton).click()
    }
    clickDonors() {
        cy.contains(this.Donors_subMenu)
    }
}