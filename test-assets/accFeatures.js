///////////////////////////////
//Referring to issue TESLA-21//
///////////////////////////////
////Dummy Account
//Login Email: jonsnow@knightswatch.com
//Login Password: nicepassword123
module.exports = (browser) => {
    browser
    /////////
    //Login//
    /////////
    .maximizeWindow()
    .waitForElementPresent('li[class="tsla-header-nav--list_item tsla-header-nav--selected tsla-header-nav--auth_link"]', 10000)
    .moveToElement('li[class="tsla-header-nav--list_item tsla-header-nav--selected tsla-header-nav--auth_link"]', 20, 20, function() {
        browser.mouseButtonClick('left')
    })
    browser
    .waitForElementPresent('div[class="login-form"]', 10000)
    .setValue('input[id="sign-in-email"]', 'jonsnow@knightswatch.com')
    .setValue('input[id="sign-in-password"]', 'nicepassword123')
    .pause(1000)
    .click('button[class="sign-in__submit_button"]')
    .waitForElementPresent('span[id="nav-greetings"]', 5000)
    .verify.containsText('span[id="nav-greetings"]', 'HI TESLA CUSTOMER')
    .click('a[id="signOut-item"]') 
    .pause(5000)
    browser.url('https://shop.tesla.com')
    .pause(3000)
    .verify.containsText('a[href="?signIn=true"]', 'SIGN IN')
    /////////////////////
    //Continue as Guest//
    /////////////////////
    .moveToElement('li[class="tsla-header-nav--list_item tsla-header-nav--selected tsla-header-nav--auth_link"]', 20, 20, function() {
        browser.mouseButtonClick('left')
    })
    browser
    .waitForElementPresent('div[class="login-form"]', 10000)
    .click('button[name="cancel"]')
    .waitForElementPresent('a[href="?signIn=true"]', 10000)
    .verify.containsText('a[href="?signIn=true"]', 'SIGN IN')
    ////////////////////
    //Account Creation//
    ////////////////////
    .moveToElement('li[class="tsla-header-nav--list_item tsla-header-nav--selected tsla-header-nav--auth_link"]', 20, 20, function() {
        browser.mouseButtonClick('left')
    })
    browser
    .waitForElementPresent('a[data-i18n-key="Create an account"]', 10000)
    .click('a[data-i18n-key="Create an account"]')
    .waitForElementPresent('h2[class="section-title"]', 5000)
    //Can't fill out the form with Automation because of Recaptcha changing values and positions of objects in the HTML
    browser.url('https://shop.tesla.com')
}