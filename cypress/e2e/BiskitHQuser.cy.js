/// <reference types ="cypress" />
import { LoginPage } from "../pages/Login.cy"
const loginPage = new LoginPage()

  
  
describe('Login Tests', function() {
  it('Verify that the user is able to access the url https://biskit-frontend-dev.eha.im/', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    cy.get('.sc-ikZpkk')
    .should('have.text', 'Welcome back! Please enter your details')
  })
  it('Verify that the user is not able to access the app with an invalid login credential (Password)', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password2');
    loginPage.clickLogin();
    cy.wait(10000)
    cy.get('.rs-notification-content')
    .should('contain', 'Error')
    .and('not.have.text','Welcome to BISKIT')
  })

  it('Verify that the user is not able to access the app with an invalid login credential (Username)', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser123');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    // cy.wait(10000)
    cy.get('.rs-notification-content')
    .should('contain', 'Error')
    .and('not.have.text','Welcome to BISKIT')

  })

  
  it('Verify that the user is able to login to the app with a valid username and password', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    cy.get('[data-testid="home-welcome"]')
    .should('be.visible')
    .and('have.text','Welcome to BISKIT')
  })
})
describe('Landing page', function() {


  it('Verify that the user is able to view the login landing page with a "Welcome to BISKIT" message', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    cy.wait(10000)
    cy.get('[data-testid="home-welcome"]') 
  .should('be.visible')
    
  })

  it('Verify that the user is able to view the login landing page with the "Dashboard" menu button clearly visible', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    cy.wait(10000)
    cy.contains('Dashboard').click()
    cy.get('.rs-flex-box-grid > :nth-child(1) > .sc-llJcti')
    .should('have.text', 'Track, Manage and Get a birds eye view of all activities')
    .and('not.be.NaN')
    .and('be.visible')
    
  })
 

  it('Verify that the user is able to view the login landing page with the "Facilities" menu button clearly visible', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    // cy.wait(10000)
    cy.get('[data-testid="nav-group-facilities"] > .rs-dropdown-toggle > [data-testid="nav-item-undefined"] > :nth-child(2) > .sc-BeQoi')
    .should('have.text', 'Facilities')
    .and('be.visible')
    
  })
  
  
  it('Verify that the user is able to view the login landing page with a the "Reports" menu button clearly visible', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    cy.wait(10000)
    cy.contains('Reports')
    .should('have.text', 'Reports')
    .and('be.visible')
   
  })
  it('Verify that the user is able to view the login landing page with a the "Users" menu button clearly visible', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    // cy.wait(10000)
   cy.contains('Users')
   .should('have.text','Users')
   .and('be.visible')
    })




  it('Verify that the user is able to view clearly thye BISKIT logo on top of the landing page', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    // cy.wait(10000)
    cy.get('[data-testid="home-welcome"]')
    .should('have.text','Welcome to BISKIT')
    .and('be.visible')
    
  })

  it('Verify that the user is able to view the profile details of the logged in user on the landing page', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    // cy.wait(10000)
    cy.get('[data-testid="user-info-nelo_HQuser"]')
    .should('be.visible')
  })

  it('Verify that the user is able to view the "Notification" icon on the login landing page', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    // cy.wait(10000)
    cy.get('.fa-regular')
    .should('be.visible')
    
  })
  it('Verify that the user is able to click on the "Dashboard" menu button', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    // cy.wait(10000)
    cy.contains('Dashboard').click()
    .should('be.visible')
  })

  it('Verify that the user is able to view the page title message which reads "Dashboard, Track, Manage and Get a birds eye view of all activities"', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    // cy.wait(10000)
    cy.contains('Dashboard').click()
    cy.get('.rs-flex-box-grid > :nth-child(1) > .sc-llJcti')
    .should('have.text', 'Track, Manage and Get a birds eye view of all activities')
    .and('be.visible')
    
  })
  it('Verify that the user is able to view the date field on top of the page', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    // cy.wait(10000)
    cy.contains('Dashboard').click()
    cy.contains('Jan')
    .should('be.visible')
    .and('not.be.NaN')
  })

  it('Verify that the date on the date field can be selected and changed to any date in the past', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    // cy.wait(10000)
    cy.contains('Dashboard').click()
    cy.contains('Jan').click()
    .should('be.focused')
    console.log('The dropdown does not open and userv is unable to select dates')
    
  })
  it('Verify that the user is not able to select a date in the future', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    // cy.wait(10000)
    cy.contains('Dashboard').click()
    cy.contains('Jan').click()
    .should('be.focused')
    console.log('User is unable to select any dates as dropdwon does not open when clicked on')
  })

  it('Verify that the user is able to view and select a location of choice', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    // cy.wait(10000)
    cy.contains('Dashboard').click()
    cy.contains('Johannesburg')
    .should('be.focused')
    console.log('the dropdown is not clickable')
    
    
  })
  it('Verify that the user is able to view the report in a table format and contains No of Donors', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    // cy.wait(10000)
    cy.contains('Dashboard').click()
    cy.get('.show-grid > :nth-child(1) > .strong')
    .should('be.visible')
    .and('have.text', 'No. of Donors')
  })
  it('Verify that the value under the No of Donors column is a number', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    cy.wait(10000)
    cy.contains('Dashboard').click()
    cy.get('.show-grid > :nth-child(1) > .sc-llJcti')
    .should('be.visible')
    .and('not.be.NaN')
    
  })
  
  it('Verify that the user is able to view the report in a table format and contains Donations', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    cy.wait(10000)
    cy.contains('Dashboard').click()
    cy.get(':nth-child(2) > .strong')
    .should('be.visible')
    .and('have.text', 'Donations')
    
  })

  it('Verify that the value under the Donations column is a number', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    cy.wait(10000)
    cy.contains('Dashboard').click()
    cy.get(':nth-child(2) > .sc-llJcti')
    .should('be.visible')
    .and('not.be.NaN')
    
  })

  it('Verify that the user is able to view the report in a table format and contains Blood products ', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    cy.wait(10000)
    cy.contains('Dashboard').click()
    cy.get(':nth-child(3) > .strong')
    .should('be.visible')
    .and('have.text', 'Blood Products')
    
  })

  it('Verify that the value under the Blood Products column is a number', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    cy.wait(10000)
    cy.contains('Dashboard').click()
    cy.get(':nth-child(3) > .sc-llJcti')
    .should('be.visible')
    .and('not.be.NaN')
  })

  it('Verify that the user is able to view the report in a table format and contains Blood requests', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    cy.wait(10000)
    cy.contains('Dashboard').click()
    cy.get(':nth-child(4) > .strong')
    .should('be.visible')
    .and('have.text', 'Blood Requests')
  })

  it('Verify that the value under the Blood request column is a number ', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    cy.wait(10000)
    cy.contains('Dashboard').click()
    cy.get(':nth-child(4) > .sc-llJcti')
    .should('be.visible')
    .and('not.be.NaN')
  })
  it('Verify that the user is able to view the report in a table format and contains Adverse events', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    cy.wait(10000)
    cy.contains('Dashboard').click()
    cy.get(':nth-child(5) > .strong')
    .should('be.visible')
    .and('have.text', 'Adverse Events')
  })
  it('Verify that the value under the Adverse events column is a number ', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    cy.wait(10000)
    cy.contains('Dashboard').click()
    cy.get(':nth-child(5) > .sc-llJcti')
    .should('be.visible')
    .and('not.be.NaN')
  })
  it('Verify that the user is able to view the report in a tale format and contains Appointments', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    cy.wait(10000)
    cy.contains('Dashboard').click()
    cy.get(':nth-child(6) > .strong')
    .should('be.visible')
    .and('have.text', 'Appointments')
  })
  it('Verify that the value under the Appointments column is a number', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    cy.wait(10000)
    cy.contains('Dashboard').click()
    cy.get(':nth-child(6) > .sc-llJcti')
    .should('be.visible')
    .and('not.be.NaN')
  })
  it('Verify that the user is able to view the pie-chart representation of proportion of donor by gender ', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    cy.wait(10000)
    cy.contains('Dashboard').click()
    cy.get('.chart-one-doughnut-container > div > canvas')
    .should('be.visible')
    .and('have.text','')
  })
  it('Verify that the pie-chart contains a part representing male gender', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    cy.wait(10000)
    cy.contains('Dashboard').click()
    cy.get('.chart-one-doughnut-container > div > canvas')
    .should('be.visible')
    .and('have.text','')
  })
  it('Verify that the pie-chart contains a part representing female gender', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    cy.wait(10000)
    cy.contains('Dashboard').click()
    cy.get('.chart-one-doughnut-container > div > canvas')
    .should('be.visible')
    .and('have.text','')
  })
  it('Verify that the radio buttons associated with the pie-chart is clickable', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    cy.wait(10000)
    cy.contains('Dashboard').click()
    cy.get('.chart-one-doughnut-container > div > canvas')
    .should('be.visible')
    .and('contain','')
  })
  it('Verify that the user is able to view the bar chart representation of blood donation by month', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    cy.wait(10000)
    cy.contains('Dashboard').click()
    cy.get('.chart-one-bar-container > div > canvas')
    .should('be.visible')
    .and('have.text','')
  })
  it('Verify that the user is able to view the bar chart representation of distribution of donors by age', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    cy.wait(10000)
    cy.contains('Dashboard').click()
    cy.get('.flexed-chart-two-section > :nth-child(1) > div > canvas')
    .should('be.visible')
    .and('have.text','')
  })
  it('Verify that the user is able to view the bar chart representation of distribution of tests by status', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    cy.wait(10000)
    cy.contains('Dashboard').click()
    cy.get(':nth-child(3) > div > canvas')
    .should('be.visible')
    .and('have.text','')
  })
  it('Verify that the user is able to view the graph representation of distribution of tests by type', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_HQuser');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    cy.wait(10000)
    cy.contains('Dashboard').click()
    cy.get('.flexed-chart-three-section > div > canvas')
    .should('be.visible')
    .and('have.text','')
  })
  
})
describe('Facilities menu', function() {
  it('Verify that the user is able to click on the "Facilities"  menu button', function() {
          loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
          loginPage.enterusername('nelo_HQuser');
          loginPage.enterPassword('password');
          loginPage.clickLogin();
          cy.wait(10000)
          cy.contains('Facilities').click()
          .should('be.visible')
          .and('have.text','Facilities')
        })
  it('Verify that the facilities menu button expands to display a "Facility" sub-menu button', function() {
      loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
          loginPage.enterusername('nelo_HQuser');
          loginPage.enterPassword('password');
          loginPage.clickLogin();
          cy.wait(10000)
          cy.contains('Facilities').click()
          cy.get('[data-testid="nav-item-facility"] > .rs-stack-item > .sc-BeQoi')
          .should('be.visible')
          .and('have.text', 'Facility')
        })
        it('Verify that the "Facility" button is visible and clickable', function() {
          loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
          loginPage.enterusername('nelo_HQuser');
          loginPage.enterPassword('password');
          loginPage.clickLogin();
          cy.wait(10000)
          cy.contains('Facilities').click()
          cy.get('[data-testid="nav-item-facility"] > .rs-stack-item > .sc-BeQoi').click()
        })

        it('Verify that the user is able to view a list of facilities on the "Facility" landing page', function() {
          loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
          loginPage.enterusername('nelo_HQuser');
          loginPage.enterPassword('password');
          loginPage.clickLogin();
          cy.wait(10000)
          cy.contains('Facilities').click()
          cy.get('[data-testid="nav-item-facility"] > .rs-stack-item > .sc-BeQoi').click()
          cy.get('[data-testid="home-welcome"]')
          .should('be.visible')
          .and('contain', 'Facilities')
        })    
})

describe('Logout', function() {
  it.only('Verify that the logout button is visible and clickable', function(){
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_BDC');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    cy.contains('Reports').click()   
    cy.get('[data-testid="user-info-logout"]').click()
    cy.contains('logout')
    .should('contain','logout')
    .and('be.visible')
  })
  it.only('Verify that the logout button is visible and clickable', function(){
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_BDC');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
    cy.contains('Reports').click()   
    cy.get('[data-testid="user-info-logout"]').click()
    cy.contains('logout').click()
    cy.get('.sc-bczRLJ')
    .should('contain','Login')
    
  })
})
