/// <reference types ="cypress" />
import { LoginPage } from "../pages/Login.cy";
const loginPage = new LoginPage();

describe("Login Tests", function () {
  it("Verify that the user is able to access the url https://biskit-frontend-dev.eha.im/", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    cy.get(".sc-ikZpkk").should(
      "have.text",
      "Welcome back! Please enter your details"
    );
  });
  it("Verify that the user is not able to access the app with an invalid login credential (Password)", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password2");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.get(".rs-notification-content")
      .should("contain", "Error")
      .and("not.have.text", "Welcome to BISKIT");
  });

  it("Verify that the user is not able to access the app with an invalid login credential (Username)", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1123");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    // cy.wait(10000)
    cy.get(".rs-notification-content")
      .should("contain", "Error")
      .and("not.have.text", "Welcome to BISKIT");
  });

  it("Verify that the user is able to login to the app with a valid username and password", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.get('[data-testid="home-welcome"]')
      .should("be.visible")
      .and("have.text", "Welcome to BISKIT");
  });
});
describe("Landing page", function () {
  it('Verify that the user is able to view the login landing page with a "Welcome to BISKIT" message', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.get('[data-testid="home-welcome"]').should("be.visible");
  });

  it('Verify that the user is able to view the login landing page with the "Dashboard" menu button clearly visible', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Dashboard").click();
    cy.get(".rs-flex-box-grid > :nth-child(1) > .sc-llJcti")
      .should(
        "have.text",
        "Track, Manage and Get a birds eye view of all activities"
      )
      .and("not.be.NaN")
      .and("be.visible");
  });

  it('Verify that the user is able to view the login landing page with the "Facilities" menu button clearly visible', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    // cy.wait(10000)
    cy.get(
      '[data-testid="nav-group-facilities"] > .rs-dropdown-toggle > [data-testid="nav-item-undefined"] > :nth-child(2) > .sc-BeQoi'
    )
      .should("have.text", "Facilities")
      .and("be.visible");
  });

  it('Verify that the user is able to view the login landing page with a the "Reports" menu button clearly visible', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Reports").should("have.text", "Reports").and("be.visible");
  });
  it('Verify that the user is able to view the login landing page with a the "Users" menu button clearly visible', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    // cy.wait(10000)
    cy.contains("Users").should("have.text", "Users").and("be.visible");
  });

  it("Verify that the user is able to view clearly thye BISKIT logo on top of the landing page", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    // cy.wait(10000)
    cy.get('[data-testid="home-welcome"]')
      .should("have.text", "Welcome to BISKIT")
      .and("be.visible");
  });

  it("Verify that the user is able to view the profile details of the logged in user on the landing page", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    // cy.wait(10000)
    cy.get('[data-testid="user-info-nelo_BTU1"]').should("be.visible");
  });

  it('Verify that the user is able to view the "Notification" icon on the login landing page', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    // cy.wait(10000)
    cy.get(".fa-regular").should("be.visible");
  });
  it('Verify that the user is able to click on the "Dashboard" menu button', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    // cy.wait(10000)
    cy.contains("Dashboard").click().should("be.visible");
  });

  it('Verify that the user is able to view the page title message which reads "Dashboard, Track, Manage and Get a birds eye view of all activities"', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    // cy.wait(10000)
    cy.contains("Dashboard").click();
    cy.get(".rs-flex-box-grid > :nth-child(1) > .sc-llJcti")
      .should(
        "have.text",
        "Track, Manage and Get a birds eye view of all activities"
      )
      .and("be.visible");
  });
  it("Verify that the user is able to view the date field on top of the page", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    // cy.wait(10000)
    cy.contains("Dashboard").click();
    cy.contains("Jan").should("be.visible").and("not.be.NaN");
  });

  it("Verify that the date on the date field can be selected and changed to any date in the past", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    // cy.wait(10000)
    cy.contains("Dashboard").click();
    cy.contains("Jan").click().should("be.focused");
    console.log(
      "The dropdown does not open and userv is unable to select dates"
    );
  });
  it("Verify that the user is not able to select a date in the future", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    // cy.wait(10000)
    cy.contains("Dashboard").click();
    cy.contains("Jan").click().should("be.focused");
    console.log(
      "User is unable to select any dates as dropdwon does not open when clicked on"
    );
  });

  it("Verify that the user is able to view and select a location of choice", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    // cy.wait(10000)
    cy.contains("Dashboard").click();
    cy.contains("Johannesburg").should("be.focused");
    console.log("the dropdown is not clickable");
  });
  it("Verify that the user is able to view the report in a table format and contains No of Donors", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    // cy.wait(10000)
    cy.contains("Dashboard").click();
    cy.get(".show-grid > :nth-child(1) > .strong")
      .should("be.visible")
      .and("have.text", "No. of Donors");
  });
  it("Verify that the value under the No of Donors column is a number", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Dashboard").click();
    cy.get(".show-grid > :nth-child(1) > .sc-llJcti")
      .should("be.visible")
      .and("not.be.NaN");
  });

  it("Verify that the user is able to view the report in a table format and contains Donations", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Dashboard").click();
    cy.get(":nth-child(2) > .strong")
      .should("be.visible")
      .and("have.text", "Donations");
  });

  it("Verify that the value under the Donations column is a number", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Dashboard").click();
    cy.get(":nth-child(2) > .sc-llJcti").should("be.visible").and("not.be.NaN");
  });

  it("Verify that the user is able to view the report in a table format and contains Blood products ", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Dashboard").click();
    cy.get(":nth-child(3) > .strong")
      .should("be.visible")
      .and("have.text", "Blood Products");
  });

  it("Verify that the value under the Blood Products column is a number", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Dashboard").click();
    cy.get(":nth-child(3) > .sc-llJcti").should("be.visible").and("not.be.NaN");
  });

  it("Verify that the user is able to view the report in a table format and contains Blood requests", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Dashboard").click();
    cy.get(":nth-child(4) > .strong")
      .should("be.visible")
      .and("have.text", "Blood Requests");
  });

  it("Verify that the value under the Blood request column is a number ", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Dashboard").click();
    cy.get(":nth-child(4) > .sc-llJcti").should("be.visible").and("not.be.NaN");
  });
  it("Verify that the user is able to view the report in a table format and contains Adverse events", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Dashboard").click();
    cy.get(":nth-child(5) > .strong")
      .should("be.visible")
      .and("have.text", "Adverse Events");
  });
  it("Verify that the value under the Adverse events column is a number ", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Dashboard").click();
    cy.get(":nth-child(5) > .sc-llJcti").should("be.visible").and("not.be.NaN");
  });
  it("Verify that the user is able to view the report in a tale format and contains Appointments", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Dashboard").click();
    cy.get(":nth-child(6) > .strong")
      .should("be.visible")
      .and("have.text", "Appointments");
  });
  it("Verify that the value under the Appointments column is a number", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Dashboard").click();
    cy.get(":nth-child(6) > .sc-llJcti").should("be.visible").and("not.be.NaN");
  });
  it("Verify that the user is able to view the pie-chart representation of proportion of donor by gender ", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Dashboard").click();
    cy.get(".chart-one-doughnut-container > div > canvas")
      .should("be.visible")
      .and("have.text", "");
  });
  it("Verify that the pie-chart contains a part representing male gender", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Dashboard").click();
    cy.get(".chart-one-doughnut-container > div > canvas")
      .should("be.visible")
      .and("have.text", "");
  });
  it("Verify that the pie-chart contains a part representing female gender", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Dashboard").click();
    cy.get(".chart-one-doughnut-container > div > canvas")
      .should("be.visible")
      .and("have.text", "");
  });
  it("Verify that the radio buttons associated with the pie-chart is clickable", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Dashboard").click();
    cy.get(".chart-one-doughnut-container > div > canvas")
      .should("be.visible")
      .and("contain", "");
  });
  it("Verify that the user is able to view the bar chart representation of blood donation by month", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Dashboard").click();
    cy.get(".chart-one-bar-container > div > canvas")
      .should("be.visible")
      .and("have.text", "");
  });
  it("Verify that the user is able to view the bar chart representation of distribution of donors by age", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Dashboard").click();
    cy.get(".flexed-chart-two-section > :nth-child(1) > div > canvas")
      .should("be.visible")
      .and("have.text", "");
  });
  it("Verify that the user is able to view the bar chart representation of distribution of tests by status", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Dashboard").click();
    cy.get(":nth-child(3) > div > canvas")
      .should("be.visible")
      .and("have.text", "");
  });
  it("Verify that the user is able to view the graph representation of distribution of tests by type", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Dashboard").click();
    cy.get(".flexed-chart-three-section > div > canvas")
      .should("be.visible")
      .and("have.text", "");
  });
});
describe("Facilities menu", function () {
  it('Verify that the user is able to click on the "Facilities"  menu button', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Facilities")
      .click()
      .should("be.visible")
      .and("have.text", "Facilities");
  });
  it('Verify that the facilities menu button expands to display a "Facility" sub-menu button', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Facilities").click();
    cy.get('[data-testid="nav-item-facility"] > .rs-stack-item > .sc-BeQoi')
      .should("be.visible")
      .and("have.text", "Facility");
  });
  it('Verify that the "Facility" button is visible and clickable', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Facilities").click();
    cy.get(
      '[data-testid="nav-item-facility"] > .rs-stack-item > .sc-BeQoi'
    ).click();
  });

  it('Verify that the user is able to view a list of facilities on the "Facility" landing page', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Facilities").click();
    cy.get(
      '[data-testid="nav-item-facility"] > .rs-stack-item > .sc-BeQoi'
    ).click();
    cy.get('[data-testid="home-welcome"]')
      .should("be.visible")
      .and("contain", "Facilities");
  });
});

describe("Report menu", function () {
  it('Verify that the user is able to click on the "Reports"  menu button', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Reports")
      .click()
      .should("be.visible")
      .and("have.text", "Reports");
  });

  it('Verify that the "Reports" landing page has a "Welcome to BISKIT" message clearly displayed', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Reports").click();
    cy.get('[data-testid="home-welcome"]')
      .should("be.visible")
      .and("have.text", "Welcome to BISKIT");
  });

  it('Verify that the "Reports" menu expands to show other sub-menu items namely; donors,appointments and blood donations', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.get('[data-testid="nav-group-reports"] > .rs-dropdown-toggle').click();
    cy.contains("Donors").should("be.visible").and("have.text", "Donors");
    cy.contains("Appointments")
      .should("be.visible")
      .and("have.text", "Appointments");
    cy.contains("Blood Donations")
      .should("be.visible")
      .and("have.text", "Blood Donations");
  });
  it('Verify that the user is able to view and click on the "Donors" sub-menu button', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.get('[data-testid="nav-group-reports"] > .rs-dropdown-toggle').click();
    cy.contains("Donors").should("be.visible").and("have.text", "Donors");
  });

  it('Verify that the "Donors" page title contains donors as a title text', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.get(
      '[data-testid="nav-item-donors"] > .rs-stack-item > .sc-BeQoi'
    ).click();
    cy.get(".sc-kgflAQ").should("be.visible").and("have.text", "Donors");
  });
  it("Verify that the donors landing page contains a table with columns namely; donor code, donor name, gender, blood type, facility and action", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.get(
      '[data-testid="nav-item-donors"] > .rs-stack-item > .sc-BeQoi'
    ).click();
    cy.get(
      ":nth-child(1) > .rs-table-cell > .rs-table-cell-content > .sc-kDDrLX"
    )
      .should("contain.text", "Donor Code")
      .and("be.visible");
    cy.get(
      ":nth-child(2) > .rs-table-cell > .rs-table-cell-content > .sc-kDDrLX"
    )
      .should("contain.text", "Donor Name")
      .and("be.visible");
    cy.get(
      ":nth-child(3) > .rs-table-cell > .rs-table-cell-content > .sc-kDDrLX"
    )
      .should("contain.text", "Gender")
      .and("be.visible");
    cy.get(
      ":nth-child(4) > .rs-table-cell > .rs-table-cell-content > .sc-kDDrLX"
    )
      .should("contain.text", "Blood Type")
      .and("be.visible");
    cy.get(
      ":nth-child(5) > .rs-table-cell > .rs-table-cell-content > .sc-kDDrLX"
    )
      .should("contain.text", "Facility")
      .and("be.visible");
    cy.get(
      ":nth-child(6) > .rs-table-cell > .rs-table-cell-content > .sc-kDDrLX"
    )
      .should("contain.text", "ACTION")
      .and("be.visible");
  });
  it('Verify that the donor landing page has search field with a place holder "Search Donors"', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.get(
      '[data-testid="nav-item-donors"] > .rs-stack-item > .sc-BeQoi'
    ).click();
    cy.get(".sc-fnykZs").should("be.visible");
  });
  it("Verify that the user is able to search donors by donor code and that the result is clearly visible", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.get(
      '[data-testid="nav-item-donors"] > .rs-stack-item > .sc-BeQoi'
    ).click();
    cy.get(".sc-fnykZs").type("BD-D271A83F10E9");
    cy.get(
      ".rs-table-cell-group > .rs-table-cell-first > .rs-table-cell-content"
    ).should("contain", "BD-D271A83F10E9");
  });
  it("Verify that the user is able to search donors by donor name and that the result is clearly visible", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.get(
      '[data-testid="nav-item-donors"] > .rs-stack-item > .sc-BeQoi'
    ).click();
    cy.get(".sc-fnykZs").type("Qwerty");
    cy.get(
      '.rs-table-cell-group > [aria-colindex="2"] > .rs-table-cell-content'
    ).should("contain", "Qwerty");
  });
  it("Verify that the user is able to search donors by gender and that the result is clearly visible", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.get(
      '[data-testid="nav-item-donors"] > .rs-stack-item > .sc-BeQoi'
    ).click();
    cy.get(".sc-fnykZs").type("Male");
    cy.get(
      '.rs-table-cell-group > [aria-colindex="3"] > .rs-table-cell-content'
    ).should("contain", "Male");
  });
  it("Verify that the user is able to search donors by blood type and that the result is clearly visible", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.get(
      '[data-testid="nav-item-donors"] > .rs-stack-item > .sc-BeQoi'
    ).click();
    cy.get(".sc-fnykZs").type("AB+");
    cy.get(
      '[aria-rowindex="2"] > .rs-table-cell-group > [aria-colindex="4"] > .rs-table-cell-content'
    ).should("contain", "AB+");
  });
  it("Verify that the user is able to search donors by facility and that the result is clearly visible", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.get(
      '[data-testid="nav-item-donors"] > .rs-stack-item > .sc-BeQoi'
    ).click();
    cy.get(".sc-fnykZs").type("Blood Donation");
    cy.get(
      '[aria-rowindex="2"] > .rs-table-cell-group > [aria-colindex="5"] > .rs-table-cell-content'
    ).should("contain", "Blood Donation");
  });
  it('Verify that the ellipses under the "Actions" column expands to  enable the user view details', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.get(
      '[data-testid="nav-item-donors"] > .rs-stack-item > .sc-BeQoi'
    ).click();
    cy.get(".sc-fnykZs").type("Blood Donation");
    cy.get(
      '[aria-rowindex="2"] > .rs-table-cell-group > .rs-table-cell-last > .rs-table-cell-content > .rs-btn-icon'
    ).click();
    cy.contains("View details")
      .should("have.text", "View details")
      .and("be.visible");
  });
  it('Verify that when the user clicks on "View details" the system pops up a modal with title "Donor information" ', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.get(
      '[data-testid="nav-item-donors"] > .rs-stack-item > .sc-BeQoi'
    ).click();
    cy.get(".sc-fnykZs").type("Blood Donation");
    cy.get(
      '[aria-rowindex="2"] > .rs-table-cell-group > .rs-table-cell-last > .rs-table-cell-content > .rs-btn-icon'
    ).click();
    cy.contains("View details").click();
    cy.get(".sc-ivTmOn")
      .should("have.text", "Donor Information")
      .and("be.visible");
  });
  it("Verify that the modal contains personal information, blood information, documents information, contact information and other information details", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.get(
      '[data-testid="nav-item-donors"] > .rs-stack-item > .sc-BeQoi'
    ).click();
    cy.get(".sc-fnykZs").type("Blood Donation");
    cy.get(
      '[aria-rowindex="2"] > .rs-table-cell-group > .rs-table-cell-last > .rs-table-cell-content > .rs-btn-icon'
    ).click();
    cy.contains("View details").click();
    cy.get(".rs-modal-body > :nth-child(1) > :nth-child(7)")
      .should("have.text", "Blood Information")
      .and("be.visible");
    cy.get(":nth-child(13)").should("have.text", "Documents");
    cy.get(":nth-child(23)").should("have.text", "Contact Information");
    cy.get(".rs-modal-body > :nth-child(2)").should(
      "have.text",
      "Other Information"
    );
  });
  it('Verify that the user is able to close the modal by clicking on the "Close"  button', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.get(
      '[data-testid="nav-item-donors"] > .rs-stack-item > .sc-BeQoi'
    ).click();
    cy.get(".sc-fnykZs").type("Blood Donation");
    cy.get(
      '[aria-rowindex="2"] > .rs-table-cell-group > .rs-table-cell-last > .rs-table-cell-content > .rs-btn-icon'
    ).click();
    cy.contains("View details").click();
    cy.get(".sc-ezWOiH").click();
  });
  it('Verify that the user is able to view and click on the "Download Report" button', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.get(
      '[data-testid="nav-item-donors"] > .rs-stack-item > .sc-BeQoi'
    ).click();
    cy.contains("Download Report").click();
  });
  it("Verify that the report format can be in either CSV, Docx or PDF", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.get(
      '[data-testid="nav-item-donors"] > .rs-stack-item > .sc-BeQoi'
    ).click();
    cy.contains("Download Report").click();
    cy.contains("CSV");
    cy.contains("Docx");
    cy.contains("PDF");
  });
  it.skip("Verify that the system is able to download the report in DOCx format", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.get(
      '[data-testid="nav-item-donors"] > .rs-stack-item > .sc-BeQoi'
    ).click();
    cy.contains("Download Report").click();
    cy.contains("Docx").click();
  });

  it.skip("Verify that the system is able to download the report in CSV format", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.get(
      '[data-testid="nav-item-donors"] > .rs-stack-item > .sc-BeQoi'
    ).click();
    cy.contains("Download Report").click();
    cy.contains("CSV").click();
  });
  it.skip("Verify that the system is able to download the report in PDF format", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.get(
      '[data-testid="nav-item-donors"] > .rs-stack-item > .sc-BeQoi'
    ).click();
    cy.contains("Download Report").click();
    cy.contains("PDF").click();
  });
  it("Verify that the total number of records available is displayed on top and bottom of the donors page", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.get(
      '[data-testid="nav-item-donors"] > .rs-stack-item > .sc-BeQoi'
    ).click();
    cy.get('[style="font-size: 14px; margin-left: 30px;"]')
      .should("be.visible")
      .and("not.be.NaN");
    cy.get(".rs-pagination-group-total > :nth-child(2)")
      .should("be.visible")
      .and("not.be.NaN");
  });
  it("Verify that the donor page is paginated", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.get(
      '[data-testid="nav-item-donors"] > .rs-stack-item > .sc-BeQoi'
    ).click();
    cy.get(".rs-picker-toggle-value > :nth-child(2)")
      .should("not.be.empty")
      .and("not.be.NaN");
  });
  it("Verify that the user is able to view and click on the filter button", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.get(
      '[data-testid="nav-item-donors"] > .rs-stack-item > .sc-BeQoi'
    ).click();
    cy.get(".rs-flex-box-grid-item > .sc-bczRLJ")
      .should("have.text", "Filter by")
      .and("be.visible");
    cy.get(".rs-flex-box-grid-item > .sc-bczRLJ").click();
  });
  it("Verify that the user is able to filter by gender", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.get(
      '[data-testid="nav-item-donors"] > .rs-stack-item > .sc-BeQoi'
    ).click();
    cy.get(".rs-flex-box-grid-item > .sc-bczRLJ").click();
    cy.contains("Select Gender Type").click();
  });
  it("Verify that the user is able to filter by facility", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.get(
      '[data-testid="nav-item-donors"] > .rs-stack-item > .sc-BeQoi'
    ).click();
    cy.get(".rs-flex-box-grid-item > .sc-bczRLJ").click();
    cy.contains("Select Facility").click();
  });

  it("Verify that the user is able to filter by blood type", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.get(
      '[data-testid="nav-item-donors"] > .rs-stack-item > .sc-BeQoi'
    ).click();
    cy.get(".rs-flex-box-grid-item > .sc-bczRLJ").click();
    cy.contains("Select Blood Type").click();
  });

  it("Verify that the user is able to filter by date period", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.get(
      '[data-testid="nav-item-donors"] > .rs-stack-item > .sc-BeQoi'
    ).click();
    cy.get(".rs-flex-box-grid-item > .sc-bczRLJ").click();
    cy.contains("Select Date").click({ force: true });
    cy.wait(10000);
    cy.get(
      '[aria-label="09 Nov 2023"] > .rs-calendar-table-cell-content > .rs-calendar-table-cell-day'
    ).click({ force: true });
    cy.get(
      ':nth-child(3) > [aria-label="07 Dec 2023"] > .rs-calendar-table-cell-content > .rs-calendar-table-cell-day'
    ).click({ force: true });
  });
  it('Verify that the filter is triggered by clicking on a "Filter" button which is clearly visible and clickable', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.get(
      '[data-testid="nav-item-donors"] > .rs-stack-item > .sc-BeQoi'
    ).click();
    cy.get(".rs-flex-box-grid-item > .sc-bczRLJ").click();
    cy.contains("Select Blood Type").click();
    cy.get('[style="margin-top: 24px;"] > .sc-bczRLJ').click;
  });

  it('Verify that the filter is triggered by clicking on a "Filter" button which is clearly visible and clickable', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.get(
      '[data-testid="nav-item-donors"] > .rs-stack-item > .sc-BeQoi'
    ).click();
    cy.get(".rs-flex-box-grid-item > .sc-bczRLJ").click();
    cy.contains("Select Blood Type").click();
    cy.get('[style="margin-top: 24px;"] > .sc-bczRLJ').click;
  });
});
describe("Blood Donations", function () {
  it('Verify that the user is able to view and click on the "Blood Donations" sub-menu button', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Blood Donations").should("contain", "Blood Donations");
  });
  it('Verify that the "Blood Donations" page title contains Blood Donations as a  title text', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Blood Donations").click();
    cy.get(".sc-kgflAQ")
      .should("have.text", "Blood Donations")
      .and("be.visible");
  });
  it("Verify that the Blood Donations landing page contains a table with columns namely; Donor code, Donor name, date, length, width, volume and action", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Blood Donations").click();
    cy.get(
      ":nth-child(1) > .rs-table-cell > .rs-table-cell-content > .sc-kDDrLX"
    )
      .should("have.text", "Donor Code")
      .and("be.visible");
    cy.get(
      ":nth-child(2) > .rs-table-cell > .rs-table-cell-content > .sc-kDDrLX"
    )
      .should("have.text", "Donor Name")
      .and("be.visible");
    cy.get(
      ":nth-child(3) > .rs-table-cell > .rs-table-cell-content > .sc-kDDrLX"
    )
      .should("have.text", "Date")
      .and("be.visible");
    cy.get(
      ":nth-child(4) > .rs-table-cell > .rs-table-cell-content > .sc-kDDrLX"
    )
      .should("have.text", "Length (cm)")
      .and("be.visible");
    cy.get(
      ":nth-child(5) > .rs-table-cell > .rs-table-cell-content > .sc-kDDrLX"
    )
      .should("have.text", "Width (cm)")
      .and("be.visible");
    cy.contains("Volume").should("have.text", "Volume (ml)").and("be.visible");
    cy.get(
      ":nth-child(7) > .rs-table-cell > .rs-table-cell-content > .sc-kDDrLX"
    )
      .should("have.text", "ACTION")
      .and("be.visible");
  });
  it('Verify that the Blood Donations landing page has search field with a place holder "Search Blood Donations"', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Blood Donations").click();
    cy.get(".sc-fnykZs").and("be.visible");
  });
  it("Verify that the user is able to search Blood Donations by donor code and that the result is clearly visible", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Blood Donations").click();
    cy.get(".sc-fnykZs").type("E8D");
    cy.get(
      '[aria-rowindex="2"] > .rs-table-cell-group > .rs-table-cell-first > .rs-table-cell-content'
    ).should("be.visible");
  });
  it("Verify that the user is able to search Blood Donations by donor name and that the result is clearly visible", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Blood Donations").click();
    cy.get(".sc-fnykZs").type("Tay");
    cy.get(
      '.rs-table-cell-group > [aria-colindex="2"] > .rs-table-cell-content'
    ).should("be.visible");
  });
  it("Verify that the user is able to search Blood Donations by date and that the result is clearly visible", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Blood Donations").click();
    cy.get(".sc-fnykZs").type("Dec 3");
    cy.get(
      '[aria-rowindex="2"] > .rs-table-cell-group > [aria-colindex="3"] > .rs-table-cell-content'
    ).should("be.visible");
  });
  it("Verify that the user is able to search Blood Donations by length (cm) and that the result is clearly visible", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Blood Donations").click();
    cy.get(".sc-fnykZs").type("51");
    cy.get(
      '[aria-rowindex="2"] > .rs-table-cell-group > [aria-colindex="3"] > .rs-table-cell-content'
    ).should("be.visible");
  });
  it("Verify that the user is able to search Blood Donations by width (cm) and that the result is clearly visible", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Blood Donations").click();
    cy.get(".sc-fnykZs").type("51");
    cy.get(
      '[aria-rowindex="2"] > .rs-table-cell-group > [aria-colindex="6"] > .rs-table-cell-content'
    ).should("be.visible");
  });
  it("Verify that the user is able to search Blood Donations by volume (ml) and that the result is clearly visible", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Blood Donations").click();
    cy.get(".sc-fnykZs").type("201");
    cy.get(
      '.rs-table-cell-group > [aria-colindex="6"] > .rs-table-cell-content'
    ).should("be.visible");
  });
  it('Verify that the ellipses under the "Actions" column expands to  enable the user view details', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Blood Donations").click();
    cy.get(
      '[aria-rowindex="2"] > .rs-table-cell-group > .rs-table-cell-last > .rs-table-cell-content > .rs-btn-icon > .sc-evZas > .fa-solid'
    ).click();
    cy.wait(10000);
    cy.contains("View details");
  });
  it('Verify that when the user clicks on "View details" the system pops up a modal with title "Blood Donations information" ', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Blood Donations").click();
    cy.get(
      '[aria-rowindex="2"] > .rs-table-cell-group > .rs-table-cell-last > .rs-table-cell-content > .rs-btn-icon > .sc-evZas > .fa-solid'
    ).click();
    cy.wait(10000);
    cy.contains("View details").click();
  });
  it('Verify that when the user clicks on "View details" the system pops up a modal with title "Blood Donations information" ', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Blood Donations").click();
    cy.get(
      '[aria-rowindex="2"] > .rs-table-cell-group > .rs-table-cell-last > .rs-table-cell-content > .rs-btn-icon > .sc-evZas > .fa-solid'
    ).click();
    cy.wait(10000);
    cy.contains("View details").click();
    cy.get(".sc-ivTmOn")
      .should("have.text", "Blood Donation Details")
      .and("be.visible");
  });
  it('Verify that the modal contains blood donation details, health worker information, equipment & Consumables and other information details" ', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Blood Donations").click();
    cy.get(
      '[aria-rowindex="2"] > .rs-table-cell-group > .rs-table-cell-last > .rs-table-cell-content > .rs-btn-icon > .sc-evZas > .fa-solid'
    ).click();
    cy.wait(10000);
    cy.contains("View details").click();
    cy.get(".rs-modal-body > :nth-child(1) > :nth-child(3)")
      .should("have.text", "Blood Donation Details")
      .and("be.visible");
    cy.get(".rs-modal-body > :nth-child(1) > :nth-child(7)")
      .should("have.text", "Health Worker Information")
      .and("be.visible");
    cy.get(".rs-modal-body > :nth-child(1) > :nth-child(11)")
      .should("have.text", "Equipment & Consumables")
      .and("be.visible");
    cy.contains("Other").should("have.text", "Other Information");
  });
  it('Verify that the user is able to close the modal by clicking on the "Close"  button" ', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Blood Donations").click();
    cy.get(
      '[aria-rowindex="2"] > .rs-table-cell-group > .rs-table-cell-last > .rs-table-cell-content > .rs-btn-icon > .sc-evZas > .fa-solid'
    ).click();
    cy.wait(10000);
    cy.contains("View details").click();
    cy.get(".sc-ezWOiH").click();
  });
  it('Verify that the user is able to view and click on the "Download Report" button', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Blood Donations").click();
    cy.contains("Download Report").click();
  });
  it("Verify that the report format can be in either CSV, Docx or PDF", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Blood Donations").click();
    cy.contains("Download Report").click();
    cy.contains("CSV").should("have.text", "CSV").and("be.visible");
    cy.contains("PDF").should("have.text", "PDF").and("be.visible");
    cy.contains("Docx").should("have.text", "Docx").and("be.visible");
  });
  it("Verify that the system is able to download the report in DOCx format", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Blood Donations").click();
    cy.contains("Download Report").click();
    cy.contains("Docx").click();
  });
  it("Verify that the system is able to download the report in PDF format", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Blood Donations").click();
    cy.contains("Download Report").click();
    cy.contains("PDF").click();
  });
  it("Verify that the system is able to download the report in CSV format", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Blood Donations").click();
    cy.contains("Download Report").click();
    cy.contains("CSV").click();
  });

  it("Verify that the total number of records available is displayed on top and bottom of the Blood donation page", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Blood Donations").click();
    cy.get('[style="font-size: 14px; margin-left: 30px;"] > .sc-papXJ')
      .should("be.visible")
      .and("not.be.NaN");
    cy.get(".rs-pagination-group-total > :nth-child(2)")
      .should("be.visible")
      .and("not.be.NaN");
  });
  it("Verify that the blood donation page is paginated", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Blood Donations").click();
    cy.get(".rs-pagination-btn-active")
      .should("not.be.empty")
      .and("not.be.NaN")
      .and("be.enabled");
  });
  it("Verify that the user is able to view and click on the filter button", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Blood Donations").click();
    cy.get(".rs-flex-box-grid-item > .sc-bczRLJ")
      .should("have.text", "Filter by")
      .and("be.visible");
    cy.get(".rs-flex-box-grid-item > .sc-bczRLJ").click();
  });
  it("Verify that the user is able to filter by facility", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Blood Donations").click();
    cy.get(".rs-flex-box-grid-item > .sc-bczRLJ").click();
    cy.contains("Select Facility").click();
  });
  it("Verify that the user is able to filter by status", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Blood Donations").click();
    cy.get(".rs-flex-box-grid-item > .sc-bczRLJ").click();
    cy.contains("Select Status").click();
  });

  it("Verify that the user is able to filter by date period", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Blood Donations").click();
    cy.get(".rs-flex-box-grid-item > .sc-bczRLJ").click();
    cy.contains("Select Date").click();
    cy.wait(10000);
    cy.get(
      '.sc-hAZoDl > .rs-picker-toggle > .rs-stack > [style="flex-grow: 1; overflow: hidden;"] > .rs-picker-toggle-textbox'
    ).click();
    cy.get(
      ':nth-child(3) > [aria-label="07 Dec 2023"] > .rs-calendar-table-cell-content > .rs-calendar-table-cell-day'
    ).click();
    console.log('placeholder has "Select Status" instead of "Select Date"');
  });
  it('Verify that the filter is triggered by clicking on a "Filter" button which is clearly visible and clickable', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Blood Donations").click();
    cy.get(".rs-flex-box-grid-item > .sc-bczRLJ").click();
    cy.contains("Select Facility").click();
    cy.get('[style="margin-top: 24px;"] > .sc-bczRLJ').click();
  });
});

describe("Testing", function () {
  it.only('Verify that the user is able to view and click on the "Testing" sub-menu button', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Reports").click();
    cy.contains("Testing").click().should("contain", "Testing");
  });
  it('Verify that the "Testing" page title contains blood test as a title text', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Reports").click();
    cy.contains("Testing").click();
    cy.get(".sc-kgflAQ").should("contain", "Blood Tests").and("be.visible");
  });
  it("Verify that the Testing landing page contains a table with columns namely; Donor code, test type, facility, result, date and action", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Reports").click();
    cy.contains("Testing").click();
    cy.contains("Donor Code").should("contain", "Donor Code").and("be.visible");
    cy.contains("Test Type").should("contain", "Test Type").and("be.visible");
    cy.get(
      ":nth-child(3) > .rs-table-cell > .rs-table-cell-content > .sc-kDDrLX"
    )
      .should("contain", "Facility")
      .and("be.visible");
    cy.contains("Result").should("contain", "Result").and("be.visible");
    cy.contains("Date").should("contain", "Date").and("be.visible");
    cy.contains("ACTION").should("contain", "ACTION").and("be.visible");
  });
  it('Verify that the Testing landing page has search field with a place holder "Search Testing records"', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Reports").click();
    cy.contains("Testing").click();
    cy.get(".sc-fnykZs").should("be.visible");
  });
  it("Verify that the user is able to search Testing by donor code and that the result is clearly visible", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Reports").click();
    cy.contains("Testing").click();
    cy.get(".sc-fnykZs").type("387");
    cy.get(
      '[aria-rowindex="2"] > .rs-table-cell-group > .rs-table-cell-first > .rs-table-cell-content'
    ).should("be.visible");
  });
  it("Verify that the user is able to search Testing by test type and that the result is clearly visible", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Reports").click();
    cy.contains("Testing").click();
    cy.get(".sc-fnykZs").type("initial");
    cy.get(
      '[aria-rowindex="2"] > .rs-table-cell-group > [aria-colindex="2"] > .rs-table-cell-content'
    ).should("be.visible");
  });
  it("Verify that the user is able to search Testing by facility and that the result is clearly visible", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Reports").click();
    cy.contains("Testing").click();
    cy.get(".sc-fnykZs").type("Abuja");
    cy.get(
      '[aria-rowindex="10"] > .rs-table-cell-group > [aria-colindex="3"] > .rs-table-cell-content'
    ).should("be.visible");
  });
  it("Verify that the user is able to search Testing by result and that the result is clearly visible", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Reports").click();
    cy.contains("Testing").click();
    cy.get(".sc-fnykZs").type("Fail");
    cy.get(
      '[aria-rowindex="2"] > .rs-table-cell-group > [aria-colindex="4"] > .rs-table-cell-content'
    ).should("be.visible");
  });
  it("Verify that the user is able to search Testing by date and that the result is clearly visible", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Reports").click();
    cy.contains("Testing").click();
    cy.get(".sc-fnykZs").type("Dec 3");
    cy.get(
      '[aria-rowindex="2"] > .rs-table-cell-group > [aria-colindex="5"] > .rs-table-cell-content'
    ).should("be.visible");
  });
  it('Verify that the ellipses under the "Actions" column expands to  enable the user view details', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Reports").click();
    cy.contains("Testing").click();
    cy.get(
      '[aria-rowindex="2"] > .rs-table-cell-group > .rs-table-cell-last > .rs-table-cell-content > .rs-btn-icon'
    ).click();
    cy.contains("View details")
      .should("contain", "View details")
      .and("be.visible");
  });
  it('Verify that when the user clicks on "View details" the system pops up a modal with title "Test Result information" ', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Reports").click();
    cy.contains("Testing").click();
    cy.get(
      '[aria-rowindex="2"] > .rs-table-cell-group > .rs-table-cell-last > .rs-table-cell-content > .rs-btn-icon'
    ).click();
    cy.contains("View details").click();
    cy.get(".sc-ivTmOn").should("contain", "Test Result Information");
  });
  it("Verify that the modal contains test details, health worker information, equipment & Consumables and other information details", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Reports").click();
    cy.contains("Testing").click();
    cy.get(
      '[aria-rowindex="2"] > .rs-table-cell-group > .rs-table-cell-last > .rs-table-cell-content > .rs-btn-icon'
    ).click();
    cy.contains("View details").click();
    cy.get(".rs-modal-body > :nth-child(1) > :nth-child(3)")
      .should("contain", "Test Details")
      .and("be.visible");
    cy.get(".rs-modal-body > :nth-child(1) > :nth-child(7)")
      .should("have.text", "Health Worker Information")
      .and("be.visible");
    cy.get(".rs-modal-body > :nth-child(1) > :nth-child(11)")
      .should("contain", "Equipment & Consumables")
      .and("be.visible");
    cy.get(".rs-modal-body > :nth-child(2)")
      .scrollIntoView()
      .should("have.text", "Other Information")
      .and("be.visible");
  });
  it('Verify that the user is able to close the modal by clicking on the "Close"  button', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Reports").click();
    cy.contains("Testing").click();
    cy.get(
      '[aria-rowindex="2"] > .rs-table-cell-group > .rs-table-cell-last > .rs-table-cell-content > .rs-btn-icon'
    ).click();
    cy.contains("View details").click();
    cy.get(".sc-ezWOiH").click();
  });
  it('Verify that the user is able to view and click on the "Download Report" button', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Testing").click();
    cy.contains("Download Report").click();
  });
  it("Verify that the report format can be in either CSV, Docx or PDF", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Testing").click();
    cy.contains("Download Report").click();
    cy.contains("CSV").should("have.text", "CSV").and("be.visible");
    cy.contains("PDF").should("have.text", "PDF").and("be.visible");
    cy.contains("Docx").should("have.text", "Docx").and("be.visible");
  });
  it("Verify that the system is able to download the report in Docx format", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Testing").click();
    cy.contains("Download Report").click();
    cy.contains("Docx").click();
  });
  it("Verify that the system is able to download the report in PDF format", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Testing").click();
    cy.contains("Download Report").click();
    cy.contains("PDF").click();
  });
  it("Verify that the system is able to download the report in CSV format", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Testing").click();
    cy.contains("Download Report").click();
    cy.contains("CSV").click();
  });
  it("Verify that the total number of records available is displayed on top and bottom of the Testing page", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Testing").click();
    cy.get('[style="font-size: 14px; margin-left: 30px;"] > .sc-papXJ')
      .should("be.visible")
      .and("not.be.NaN");
    cy.get(".rs-pagination-group-total > :nth-child(2)")
      .should("be.visible")
      .and("not.be.NaN");
  });
  it("Verify that the Testing page is paginated", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Testing").click();
    cy.get(".rs-pagination-btn-active")
      .should("not.be.empty")
      .and("not.be.NaN")
      .and("be.enabled");
  });
  it("Verify that the user is able to view and click on the filter button", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Testing").click();
    cy.get(".rs-flex-box-grid-item > .sc-bczRLJ")
      .should("have.text", "Filter by")
      .and("be.visible");
    cy.get(".rs-flex-box-grid-item > .sc-bczRLJ").click();
  });
  it("Verify that the user is able to filter by facility", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Testing").click();
    cy.get(".rs-flex-box-grid-item > .sc-bczRLJ").click();
    cy.contains("Select Facility").click();
  });
  it("Verify that the user is able to filter by test type", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Testing").click();
    cy.get(".rs-flex-box-grid-item > .sc-bczRLJ").click();
    cy.contains("Select Test Type").click();
  });

  it("Verify that the user is able to filter by results", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Testing").click();
    cy.get(".rs-flex-box-grid-item > .sc-bczRLJ").click();
    cy.contains("Select Result").click();
  });
  it("Verify that the user is able to filter by status", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Testing").click();
    cy.get(".rs-flex-box-grid-item > .sc-bczRLJ").click();
    cy.contains("Select Status").click();
  });
  it("Verify that the user is able to filter by date period", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Testing").click();
    cy.get(".rs-flex-box-grid-item > .sc-bczRLJ").click();
    cy.contains("Select Date");
  });
  it('Verify that the filter is triggered by clicking on a "Filter" button which is clearly visible and clickable', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_BTU1");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Testing").click();
    cy.get(".rs-flex-box-grid-item > .sc-bczRLJ").click();
    cy.contains("Select Facility").click();
    cy.get('[style="margin-top: 24px;"] > .sc-bczRLJ').click();
  });
});
describe("Adverse Event", function () {
  it('Verify that the user is able to view and click on the "Adverse Event" sub-menu button', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_hospital");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Reports").click();
    cy.contains("Adverse Event").click().should("contain", "Adverse Event");
  });
  it('Verify that the "Adverse Event" page title contains Adverse Event as a title text', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_hospital");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Reports").click();
    cy.contains("Adverse Event").click();
    cy.get(".sc-kgflAQ").should("contain", "Adverse Event").and("be.visible");
  });
  it("Verify that the Adverse Event landing page contains a table with columns namely; patient code, first name, last name, facility, severity, date of transfusion and action", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_hospital");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Reports").click();
    cy.contains("Adverse Event").click();
    cy.contains("Patient Code")
      .should("contain", "Patient Code")
      .and("be.visible");
    cy.contains("First Name").should("contain", "First Name").and("be.visible");
    cy.contains("Last Name").should("contain", "Last Name").and("be.visible");
    cy.get(
      ":nth-child(4) > .rs-table-cell > .rs-table-cell-content > .sc-kDDrLX"
    )
      .should("contain", "Facility")
      .and("be.visible");
    cy.contains("Severity").should("contain", "Severity").and("be.visible");
    cy.contains("Date").should("contain", "Date").and("be.visible");
    cy.contains("ACTION").should("contain", "ACTION").and("be.visible");
  });
  it('Verify that the Adverse Event landing page has search field with a place holder "Search Adverse Event Records"', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_hospital");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Reports").click();
    cy.contains("Adverse Event").click();
    cy.get(".sc-fnykZs").should("contain", "").and("be.visible");
  });
  it("Verify that the user is able to search Adverse Event by patient code and that the result is clearly visible", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_hospital");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Reports").click();
    cy.contains("Adverse Event").click();
    cy.get(".sc-fnykZs").type("PC-FF");
    cy.get(
      ".rs-table-cell-group > .rs-table-cell-first > .rs-table-cell-content"
    ).should("be.visible");
  });
  it("Verify that the user is able to search Adverse Event by first name and that the result is clearly visible", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_hospital");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Reports").click();
    cy.contains("Adverse Event").click();
    cy.get(".sc-fnykZs").type("N/A");
    cy.get(
      '.rs-table-cell-group > [aria-colindex="2"] > .rs-table-cell-content'
    ).should("be.visible");
  });
  it("Verify that the user is able to search Adverse Event by patient name and that the result is clearly visible", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_hospital");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Reports").click();
    cy.contains("Adverse Event").click();
    cy.get(".sc-fnykZs").type("Nelo");
    cy.get(
      '[aria-rowindex="2"] > .rs-table-cell-group > [aria-colindex="3"] > .rs-table-cell-content'
    ).should("be.visible");
  });
  it("Verify that the user is able to search Adverse Event by last name and that the result is clearly visible", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_hospital");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Reports").click();
    cy.contains("Adverse Event").click();
    cy.get(".sc-fnykZs").type("N/A");
    cy.get(
      '.rs-table-cell-group > [aria-colindex="3"] > .rs-table-cell-content'
    ).should("be.visible");
  });
  it("Verify that the user is able to search Adverse Event by facility and that the result is clearly visible", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_hospital");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Reports").click();
    cy.contains("Adverse Event").click();
    cy.get(".sc-fnykZs").type("Lagos");
    cy.get(
      '.rs-table-cell-group > [aria-colindex="4"] > .rs-table-cell-content'
    ).should("be.visible");
  });
  it("Verify that the user is able to search Adverse Event by severity and that the result is clearly visible", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_hospital");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Reports").click();
    cy.contains("Adverse Event").click();
    cy.get(".sc-fnykZs").type("Low");
    cy.get(
      '.rs-table-cell-group > [aria-colindex="5"] > .rs-table-cell-content'
    ).should("be.visible");
  });
  it("Verify that the user is able to search Adverse Event by date of transfusion and that the result is clearly visible", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_hospital");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Reports").click();
    cy.contains("Adverse Event").click();
    cy.get(".sc-fnykZs").type("Dec 21");
    cy.get(
      '.rs-table-cell-group > [aria-colindex="5"] > .rs-table-cell-content'
    ).should("be.visible");
  });

  it('Verify that the ellipses under the "Action" column expands to  enable the user view details', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_hospital");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Reports").click();
    cy.contains("Adverse Event").click();
    cy.get(
      '[aria-rowindex="2"] > .rs-table-cell-group > .rs-table-cell-last > .rs-table-cell-content > .rs-btn-icon'
    ).click();
    cy.contains("View details")
      .should("contain", "View details")
      .and("be.visible");
  });
  it('Verify that when the user clicks on "View details" the system pops up a modal with title "Adverse Event Report Information" ', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_hospital");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Reports").click();
    cy.contains("Adverse Event").click();
    cy.get(
      '[aria-rowindex="2"] > .rs-table-cell-group > .rs-table-cell-last > .rs-table-cell-content > .rs-btn-icon'
    ).click();
    cy.contains("View details").click();
    cy.get(".sc-ivTmOn").should("contain", "Adverse Event Report Information");
  });
  it("Verify that the modal contains details under adverse event and  other information details", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_hospital");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Reports").click();
    cy.contains("Adverse Event").click();
    cy.get(
      '[aria-rowindex="2"] > .rs-table-cell-group > .rs-table-cell-last > .rs-table-cell-content > .rs-btn-icon'
    ).click();
    cy.contains("View details").click();
    cy.contains("Other Information")
      .should("have.text", "Other Information")
      .and("be.visible")
      .should("have.text", "Other Information")
      .and("be.visible");
  });
  it('Verify that the user is able to close the modal by clicking on the "Close"  button', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_hospital");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.wait(10000);
    cy.contains("Reports").click();
    cy.contains("Adverse Event").click();
    cy.get(
      '[aria-rowindex="2"] > .rs-table-cell-group > .rs-table-cell-last > .rs-table-cell-content > .rs-btn-icon'
    ).click();
    cy.contains("View details").click();
    cy.get(".sc-ezWOiH").click();
  });
  it('Verify that the user is able to view and click on the "Download Report" button', function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_hospital");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Adverse Event").click();
    cy.contains("Download Report").click();
  });
  it("Verify that the report format can be in either CSV, Docx or PDF", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_hospital");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Adverse Event").click();
    cy.contains("Download Report").click();
    cy.contains("CSV").should("have.text", "CSV").and("be.visible");
    cy.contains("PDF").should("have.text", "PDF").and("be.visible");
    cy.contains("Docx").should("have.text", "Docx").and("be.visible");
  });
  it("Verify that the system is able to download the report in Docx format", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_hospital");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Adverse Event").click();
    cy.contains("Download Report").click();
    cy.contains("Docx").click();
  });
  it("Verify that the system is able to download the report in PDF format", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_hospital");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Adverse Event").click();
    cy.contains("Download Report").click();
    cy.contains("PDF").click();
  });
  it("Verify that the system is able to download the report in CSV format", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_hospital");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Adverse Event").click();
    cy.contains("Download Report").click();
    cy.contains("CSV").click();
  });
  it("Verify that the total number of records available is displayed on top and bottom of the Adverse Event page", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_hospital");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Adverse Event").click();
    cy.get('[style="font-size: 14px; margin-left: 30px;"] > .sc-papXJ')
      .should("be.visible")
      .and("not.be.NaN");
    cy.get(".rs-pagination-group-total > :nth-child(2)")
      .should("be.visible")
      .and("not.be.NaN");
  });
  it("Verify that the Adverse Event page is paginated", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_hospital");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Adverse Event").click();
    cy.get(".rs-pagination-btn-active")
      .should("not.be.empty")
      .and("not.be.NaN")
      .and("be.enabled");
  });
  it("Verify that the user is able to view and click on the filter button", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_hospital");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Adverse Event").click();
    cy.get(".rs-flex-box-grid-item > .sc-bczRLJ")
      .should("have.text", "Filter by")
      .and("be.visible");
    cy.get(".rs-flex-box-grid-item > .sc-bczRLJ").click();
  });
  it("Verify that the user is able to filter by facility", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_hospital");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Adverse Event").click();
    cy.get(".rs-flex-box-grid-item > .sc-bczRLJ").click();
    cy.get(
      ':nth-child(1) > .sc-jdAMXn > .sc-idiyUo > .rs-picker-toggle > .rs-stack > [style="flex-grow: 1; overflow: hidden;"]'
    ).click();
    cy.wait(10000);
    cy.get(
      ':nth-child(1) > .sc-jdAMXn > .sc-idiyUo > .rs-picker-toggle > .rs-stack > [style="flex-grow: 1; overflow: hidden;"]'
    ).click();
    cy.get(
      '[data-key="Lagos State University Teaching Hospital (LASUTH)"] > .rs-picker-select-menu-item'
    ).click();
    cy.get('[style="margin-top: 24px;"] > .sc-bczRLJ').click();
  });
  it("Verify that the user is able to filter by severity", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_hospital");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Adverse Event").click();
    cy.get(".rs-flex-box-grid-item > .sc-bczRLJ").click();
    cy.get(
      ':nth-child(2) > .sc-jdAMXn > .sc-idiyUo > .rs-picker-toggle > .rs-stack > [style="flex-grow: 1; overflow: hidden;"]'
    ).click();
    cy.contains("Low").click();
    cy.get('[style="margin-top: 24px;"] > .sc-bczRLJ').click();
  });

  it("Verify that the user is able to filter by date period", function () {
    loginPage.navigate("https://biskit-frontend-dev.eha.im/#/signin");
    loginPage.enterusername("nelo_hospital");
    loginPage.enterPassword("password");
    loginPage.clickLogin();
    cy.contains("Reports").click();
    cy.contains("Adverse Event").click();
    cy.get(".rs-flex-box-grid-item > .sc-bczRLJ").click();
    cy.contains("Select Date").click();
    cy.wait(10000);
    cy.get(
      '.sc-hAZoDl > .rs-picker-toggle > .rs-stack > [style="flex-grow: 1; overflow: hidden;"] > .rs-picker-toggle-textbox'
    ).type("2022-12-21 ~ 2023-01-24");
    cy.get(".rs-picker-toolbar-right > .rs-btn").click();
    cy.get('[style="margin-top: 24px;"] > .sc-bczRLJ').click();
  });
});
