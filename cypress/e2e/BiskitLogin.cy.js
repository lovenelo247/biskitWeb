/// <reference types ="cypress" />
import { LoginPage } from "../pages/Login.cy"
const loginPage = new LoginPage()

describe('All Login Tests', function() {
  it('Login with invalid password', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_BDC');
    loginPage.enterPassword('password2');
    loginPage.clickLogin();
    // cy.wait(10000)
    cy.get('.rs-notification-content')
    .should('contain', 'Error')
    .and('not.have.text','Welcome to BISKIT')
  })

  it('Login with invalid username', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_BDC123');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    // cy.wait(10000)
    cy.get('.rs-notification-content')
    .should('contain', 'Error')
    .and('not.have.text','Welcome to BISKIT')

  })

  
  it('login with valid credentials', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_BDC');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    cy.get('[data-testid="home-welcome"]')
    .should('be.visible')
    .and('have.text','Welcome to BISKIT')
  })
})
