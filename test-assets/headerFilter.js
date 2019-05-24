///////////////////////////////
//Referring to issue TESLA-19//
///////////////////////////////
module.exports = (browser) => {
    ///////////////////////////
    //"CHARGING" HEADER TESTS//
    ///////////////////////////
    browser
    //////////////////////////
    //Click Model S Charging//
    //////////////////////////
    .useXpath()
    .maximizeWindow()
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[1]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[1]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Charging")])[5]', 500, function() {
            browser.click('(//a[contains (text(), "Charging")])[5]')
        }, "Click Model S Charging")   
    }),
    browser
    .waitForElementPresent('(//a[@class="quick__product__details active"])[1]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Model S')
    browser
    .expect.element('//a[@id="tesla.car.accessories.model.s.ms.adapters"]').text.to.equal('Adapters')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[1]', 'Connector')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[3]', 'Adapters')
    .moveToElement('(//a[@class="c-product__product__url lazy active"])[1]', 1, 2, function() {
        browser.waitForElementPresent('(//a[@class="c-product__product__url lazy active"])[1]', 5000, function() {
            browser.expect.element('(//a[@class="quick__product__details active"])[1]').to.be.visible 
        }, "Hover over Item 1 MSC")
    })
    browser
    .moveToElement('(//a[@class="c-product__product__url lazy active"])[2]', 1, 2, function() {
        browser.waitForElementPresent('//button[@class="quick__direct__add direct__add__1050067-21-H active"]', 5000, function () {
            browser.expect.element('//button[@class="quick__direct__add direct__add__1050067-21-H active"]').to.be.visible
        }, "Hover Over Item 2 MSC")
    })
    browser.back()
    //////////////////////////
    //Click Model X Charging//
    //////////////////////////
    // .useXpath()
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[1]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[1]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Charging")])[6]', 500, function() {
            browser.click('(//a[contains (text(), "Charging")])[6]')
        }, "Click Model X Charging")   
    }),
    browser
    .waitForElementPresent('(//a[@class="quick__product__details active"])[1]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Model X')
    browser
    .expect.element('//a[@id="tesla.car.accessories.model.x.mx.adapters"]').text.to.equal('Adapters')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[1]', 'Connector')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[3]', 'Adapters')
    .moveToElement('(//a[@class="c-product__product__url lazy active"])[1]', 1, 2, function() {
        browser.waitForElementPresent('(//a[@class="c-product__product__url lazy active"])[1]', 5000, function() {
            browser.expect.element('(//a[@class="quick__product__details active"])[1]').to.be.visible 
        }, "Hover over Item 1 MXC")
    })
    browser
    .moveToElement('(//a[@class="c-product__product__url lazy active"])[2]', 1, 2, function() {
        browser.waitForElementPresent('//button[@class="quick__direct__add direct__add__1050067-21-H active"]', 5000, function () {
            browser.expect.element('//button[@class="quick__direct__add direct__add__1050067-21-H active"]').to.be.visible
        }, "Hover Over Item 2 MXC")
    })
    browser.back()
    //////////////////////////
    //Click Model 3 Charging//
    //////////////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[1]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[1]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Charging")])[7]', 500, function() {
            browser.click('(//a[contains (text(), "Charging")])[7]')
        }, "Click Model X Charging")   
    }),
    browser
    .waitForElementPresent('(//a[@class="quick__product__details active"])[1]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Model 3')
    browser
    .expect.element('//a[@id="tesla.car.accessories.model.3.m3.adapters"]').text.to.equal('Adapters')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[1]', 'Connector')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[3]', 'Adapters')
    .moveToElement('(//a[@class="c-product__product__url lazy active"])[1]', 1, 2, function() {
        browser.waitForElementPresent('(//a[@class="c-product__product__url lazy active"])[1]', 5000, function() {
            browser.expect.element('(//a[@class="quick__product__details active"])[1]').to.be.visible 
        }, "Hover over Item 1 MXC")
    })
    browser
    .moveToElement('(//a[@class="c-product__product__url lazy active"])[2]', 1, 2, function() {
        browser.waitForElementPresent('//button[@class="quick__direct__add direct__add__1050067-21-H active"]', 5000, function () {
            browser.expect.element('//button[@class="quick__direct__add direct__add__1050067-21-H active"]').to.be.visible
        }, "Hover Over Item 2 MXC")
    })
    browser.back()
    //////////////////////////
    //Click Model S Adapters//
    //////////////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[1]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[1]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Adapters")])[4]', 500, function() {
            browser.click('(//a[contains (text(), "Adapters")])[4]')
        }, "Click Model S Adapters")   
    }),
    browser
    .waitForElementPresent('(//a[@class="quick__product__details active"])[1]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Model S')
    browser
    .expect.element('//a[@id="tesla.car.accessories.model.s.ms.adapters"]').text.to.equal('Adapters')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[3]', 'Adapters')
    .moveToElement('(//a[@class="c-product__product__url lazy active"])[7]', 1, 2, function() {
        browser.waitForElementPresent('//button[@class="quick__direct__add direct__add__1036392-10-D active"]', 5000, function() {
            browser.expect.element('//button[@class="quick__direct__add direct__add__1036392-10-D active"]').to.be.visible 
        }, "Hover over Item 1 MSA")
    })
    browser
    .moveToElement('(//a[@class="c-product__product__url lazy active"])[8]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[@class="quick__product__details active"])[4]', 5000, function () {
            browser.expect.element('(//a[@class="quick__product__details active"])[4]').to.be.visible
        }, "Hover Over Item 2 MSA")
    })
    browser.back()
///////////////////////////START HERE
    .pause()
    //////////////////////////
    //Click Model X Adapters//
    //////////////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[1]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[1]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Adapters")])[5]', 500, function() {
            browser.click('(//a[contains (text(), "Adapters")])[5]')
        }, "Click Model X Adapters")   
    }),
    browser
    .waitForElementPresent('(//a[@class="quick__product__details active"])[1]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Model X')
    browser
    .expect.element('//a[@id="tesla.car.accessories.model.x.mx.adapters"]').text.to.equal('Adapters')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[3]', 'Adapters')
 //
    browser.back()

    

}