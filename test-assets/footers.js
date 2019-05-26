///////////////////////////////
//Referring to issue TESLA-23//
///////////////////////////////

module.exports = (browser) => {
    ///////////////////
    //Privacy & Legal//
    ///////////////////
    browser
    .maximizeWindow()
    .waitForElementPresent('a[title="Privacy & Legal"]', 10000)
    .click('a[title="Privacy & Legal"]')
    .waitForElementPresent('h1[class="section-title"]', 10000)
    .expect.element('h1[class="section-title"]').text.to.equal('Legal')
    browser.back()
    ///////////
    //Careers//
    ///////////
    .waitForElementPresent('a[title="Careers"]', 10000)
    .click('a[title="Careers"]')
    .waitForElementPresent('h1[class="section-title"]', 10000)
    .expect.element('h1[class="section-title"]').text.to.equal('Careers')
    browser
    .click('input[value="Search All Jobs"]')
    .waitForElementPresent('th[class="listing-title"]', 10000)
    .useXpath()
    .verify.containsText('(//th[@class="listing-title"])[1]', 'TITLE')
    .verify.containsText('(//th[@class="listing-department"])[1]', 'JOB CATEGORY')
    .verify.containsText('(//th[@class="listing-location"])[1]', 'LOCATION')
    .verify.containsText('(//th[@class="listing-dateposted"])[1]', 'DATE POSTED')
    .useCss()
    browser.back()
    .waitForElementPresent('h1[class="section-title"]', 10000)
    .click('a[href="/careers/university"]')
    .waitForElementPresent('h1[class="section-title"]')
    .verify.containsText('h1[class="section-title"]','Internships & Co-Ops')
    browser.url('https://shop.tesla.com')
    //////////
    //Forums//
    //////////
    .waitForElementPresent('a[title="Forums"]', 10000)
    .click('a[title="Forums"]')
    .waitForElementPresent('h1[class="page-title-header"]', 10000)
    .expect.element('h1[class="page-title-header"]').text.to.equal('Forums')
    browser
    .click('a[href="/forum/general"]')
    .verify.containsText('a[title="sort by Topic"]', 'TOPIC')
    .verify.containsText('a[title="sort by Replies"]', 'REPLIES')
    .verify.containsText('a[title="sort by Created"]', 'CREATED')
    .verify.containsText('a[title="sort by Last reply"]', 'LAST REPLY')
    .verify.containsText('a[href="/node/58282"]', 'Please Read First Before Posting On The Forums')
    .expect.element('div[class="forum-status sticky"]').to.be.present
    browser
    .click('a[href="/node/58282"]')
    .waitForElementPresent('div[class="field-items"]', 10000)
    .click('a[href="/forum/257"]')
    browser.back()
    .waitForElementPresent('div[class="field-items"]', 10000)
    browser.back()
    .waitForElementPresent('h1[class="page-title-header"]', 10000)
    browser.back()
    .waitForElementPresent('h1[class="page-title-header"]', 10000)
    browser.back()
    /////////////
    //Locations//
    /////////////
    .waitForElementPresent('a[title="Locations"]', 10000)
    .click('a[title="Locations"]')
    .useXpath()
    .waitForElementPresent('(//h1)[2]', 10000)
    .expect.element('(//h1)[2]').text.to.equal('Find Us')
    browser
    .useCss()
    .click('a[href="/findus/list/stores/United+States"]')
    .waitForElementPresent('header[class="findus-list-header"]', 10000)
    .useXpath()
    .verify.containsText('(//div[@class="state"])[1]', 'Arizona')
    .verify.containsText('(//div[@class="state"])[2]', 'California')
    .useCss()
    .click('a[href="/findus/location/store/breamall"]')
    .verify.containsText('header[class="findus-list-header"]', 'Brea-Brea Mall')
    browser.url('https://shop.tesla.com')
    ////////////
    //Shop FAQ//
    ////////////
    .waitForElementPresent('a[title="Shop FAQ"]', 10000)
    .click('a[title="Shop FAQ"]')
    .waitForElementPresent('div[class="faqlister__content__title"]', 10000)
    .expect.element('div[class="faqlister__content__title"]').text.to.equal('Tesla Store Help')
    browser
    .click('button[class="faqlister__main__topic__content__question"]')
    .expect.element('button[class="faqlister__main__topic__content__question active"]').to.be.enabled
    browser
    .useXpath()
    .waitForElementVisible('(//p)[6]', 3000)
    .click('(//button[@class="faqlister__main__topic__content__question active"])[1]')
    .pause(2000)
    .waitForElementNotVisible('(//p)[6]', 3000)
    .click('(//button[@class="faqlister__main__topic__content__question"])[2]')
    .waitForElementVisible('(//p)[10]', 5000)
    .expect.element('(//button[@class="faqlister__main__topic__content__question active"])[1]').to.be.enabled
    browser
    .useCss()
    .click('a[href="#faqlistersection_852537711"]')
    browser.url('https://shop.tesla.com')
    /////////////
    //Tesla.com//
    /////////////
    .waitForElementPresent('a[title="tesla.com"]', 10000)
    .click('a[title="tesla.com"]')
    .waitForElementPresent('div[class="tds-header-nav--primary"]', 10000)
    .expect.element('a[title="Model S"]').text.to.equal('MODEL S')
    browser.url('https://shop.tesla.com/')
    //////////////
    //Modal Test//
    //////////////
    .waitForElementPresent('span[data-toggle="modal"]', 10000)
    .click('span[data-toggle="modal"]')
    .waitForElementVisible('div[class="modal-body"]', 5000)
    .click('a[title="Norway"]')
    .waitForElementPresent('a[href="/no/en/product/vehicle-accessories/model-3-all-weather-cargo-mats.html"]', 10000)
    .expect.element('a[href="/no/en/category/vehicle-accessories/model-3.html"]').to.be.present
    browser
    browser.url('https://shop.tesla.com/')
    .waitForElementPresent('span[data-toggle="modal"]', 10000)
    .click('span[data-toggle="modal"]')
    .waitForElementVisible('div[class="modal-body"]', 5000)
    .click('a[title="Finland"]')
    .waitForElementPresent('a[title="Model 3"]', 10000)
    .expect.element('a[title="Model 3"]').to.be.present
    browser.url('https://shop.tesla.com/')
    browser
    .waitForElementPresent('span[data-toggle="modal"]', 10000)
    .click('span[data-toggle="modal"]')
    .waitForElementVisible('div[class="modal-body"]', 5000)
    .click('a[title="Canada"]')
    .waitForElementPresent('a[title="Charging"]', 10000)
    .expect.element('a[title="Charging"]').to.be.present
    browser
    
}