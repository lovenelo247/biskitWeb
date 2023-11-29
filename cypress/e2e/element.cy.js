/// <reference types ="cypress" />
import { LoginPage } from "../pages/Login.cy"
const loginPage = new LoginPage()

it('login with valid credentials', function() {
    loginPage.navigate('https://biskit-frontend-dev.eha.im/#/signin');
    loginPage.enterusername('nelo_BDC');
    loginPage.enterPassword('password');
    loginPage.clickLogin();
  })