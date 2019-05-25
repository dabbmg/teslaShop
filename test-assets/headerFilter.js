///////////////////////////////
//Referring to issue TESLA-19//
///////////////////////////////
module.exports = (browser) => {

    ///////////////////////////////////////////////////////////////////
    //////////////////////"CHARGING" HEADER TESTS//////////////////////
    ///////////////////////////////////////////////////////////////////

    browser
    ////////////////////
    //Model S Charging//
    ////////////////////
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
    ////////////////////
    //Model X Charging//
    ////////////////////
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
    ////////////////////
    //Model 3 Charging//
    ////////////////////
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
    ////////////////////
    //Model S Adapters//
    ////////////////////
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
    //The Adapters appear to swap position for no apparent reason sometimes --Check back later 
    //
    // .moveToElement('(//a[@class="c-product__product__url lazy active"])[7]', 1, 2, function() {
    //     browser.waitForElementPresent('//button[@class="quick__direct__add direct__add__1036392-10-D active"]', 5000, function() {
    //         browser.expect.element('//button[@class="quick__direct__add direct__add__1036392-10-D active"]').to.be.visible 
    //     }, "Hover over Item 1 MSA")
    // })
    // browser
    // .moveToElement('(//a[@class="c-product__product__url lazy active"])[8]', 1, 2, function() {
    //     browser.pause(300)
    //     browser.waitForElementPresent('(//a[@class="quick__product__details active"])[4]', 5000, function () {
    //         browser.expect.element('(//a[@class="quick__product__details active"])[4]').to.be.visible
    //     }, "Hover Over Item 2 MSA")
    // })
    browser.back()
    ////////////////////
    //Model X Adapters//
    ////////////////////
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
    //Line 119
    browser.back()
    ////////////////////
    //Model 3 Adapters//
    ////////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[1]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[1]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Adapters")])[6]', 500, function() {
            browser.click('(//a[contains (text(), "Adapters")])[6]')
        }, "Click Model 3 Adapters")   
    }),
    browser
    .waitForElementPresent('(//a[@class="quick__product__details active"])[1]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Model 3')
    browser
    .expect.element('//a[@id="tesla.car.accessories.model.3.m3.adapters"]').text.to.equal('Adapters')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[3]', 'Adapters')
    //Line 119
    browser.back()

    ////////////////////////////////////////////////////////////////////////////
    ///////////////////VEHICLE ACCESSORIES HEADER TEST//////////////////////////
    ////////////////////////////////////////////////////////////////////////////

    ////////////////////////
    //Model 3 Best Sellers//
    ////////////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[2]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[2]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Best Sellers")])[4]', 500, function() {
            browser.click('(//a[contains (text(), "Best Sellers")])[4]')
        }, "Click Model 3 Best Sellers")   
    }),
    browser
    .waitForElementPresent('(//a[@class="quick__product__details active"])[1]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Model 3')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[1]').text.to.equal('Best Sellers')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[1]', 'Connector')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[3]', 'Mats')
    .moveToElement('(//a[@class="c-product__product__url lazy active"])[1]', 1, 2, function() {
        browser.waitForElementPresent('(//a[@class="c-product__product__url lazy active"])[1]', 5000, function() {
            browser.expect.element('(//a[@class="quick__product__details active"])[1]').to.be.visible 
        }, "Hover over Item 1 M3BS")
    })
    browser
    .moveToElement('(//a[@class="c-product__product__url lazy active"])[2]', 1, 2, function() {
        browser.waitForElementPresent('//button[@class="quick__direct__add direct__add__1050067-21-H active"]', 5000, function () {
            browser.expect.element('//button[@class="quick__direct__add direct__add__1050067-21-H active"]').to.be.visible
        }, "Hover Over Item 2 M3BS")
    })
    browser
    .moveToElement('(//a[@class="c-product__product__url lazy active"])[3]', 1, 2, function() {
        browser.waitForElementPresent('(//a[@class="c-product__product__url lazy active"])[3]', 5000, function() {
            browser.expect.element('(//a[@class="quick__product__details active"])[2]').to.be.visible 
        }, "Hover over Item 3 M3BS")
    })
    browser.back()
    ////////////////////
    //Model 3 Interior//
    ////////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[2]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[2]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Interior")])[4]', 500, function() {
            browser.click('(//a[contains (text(), "Interior")])[4]')
        }, "Click Model 3 Interior")   
    }),
    browser
    .waitForElementPresent('(//a[@class="quick__product__details active"])[1]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Model 3')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[2]').text.to.equal('Interior')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[7]', 'Sunshade')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[9]', 'Mats')
    .moveToElement('(//a[@class="c-product__product__url lazy active"])[7]', 1, 2, function() {
        browser.waitForElementPresent('(//a[@class="c-product__product__url lazy active"])[7]', 5000, function() {
            browser.expect.element('(//a[@class="quick__product__details active"])[4]').to.be.visible 
        }, "Hover over Item 1 M3I")
    })
    browser
    .moveToElement('(//a[@class="c-product__product__url lazy active"])[8]', 1, 2, function() {
        browser.waitForElementPresent('(//a[@class="c-product__product__url lazy active"])[8]', 5000, function() {
            browser.expect.element('(//a[@class="quick__product__details active"])[5]').to.be.visible 
        }, "Hover over Item 2 M3I")
    })
    browser
    .moveToElement('(//a[@class="c-product__product__url lazy active"])[9]', 1, 2, function() {
        browser.waitForElementPresent('(//a[@class="c-product__product__url lazy active"])[9]', 5000, function() {
            browser.expect.element('(//a[@class="quick__product__details active"])[6]').to.be.visible 
        }, "Hover over Item 3 M3I")
    })
    browser.back()
    ////////////////////
    //Model 3 Exterior//
    ////////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[2]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[2]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Exterior")])[4]', 500, function() {
            browser.click('(//a[contains (text(), "Exterior")])[4]')
        }, "Click Model 3 Exterior")   
    }),
    browser
    .waitForElementPresent('(//a[@class="quick__product__details active"])[1]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Model 3')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[3]').text.to.equal('Exterior')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[18]', 'Model S/X/3 Paint Repair Kit')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[19]', 'Model 3 Car Cover')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[20]', 'Model 3 License Plate Frame')
    browser.back()
    //////////////////////////
    //Model 3 Wheels & Tires//
    //////////////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[2]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[2]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Wheels and Tires")])[4]', 500, function() {
            browser.click('(//a[contains (text(), "Wheels and Tires")])[4]')
        }, "Click Model 3 Wheels and Tires")   
    }),
    browser
    .waitForElementPresent('(//a[@class="quick__product__details active"])[1]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Model 3')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[4]').text.to.equal('Wheels and Tires')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[22]', 'Model 3 19"')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[23]', 'Model 3 Wheel Lock')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[24]', 'Model 3 20"')
    browser.back()
    //////////////////////
    //Model 3 Floor Mats//
    //////////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[2]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[2]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Floor Mats")])[4]', 500, function() {
            browser.click('(//a[contains (text(), "Floor Mats")])[4]')
        }, "Click Model 3 Floor Mats")   
    }),
    browser
    .waitForElementPresent('(//a[@class="quick__product__details active"])[1]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Model 3')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[5]').text.to.equal('Floor Mats')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[33]', 'Model 3 All-Weather Cargo Mats')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[34]', 'Model 3 Carpet Front Trunk Mat')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[35]', 'Model 3 Carpet Interior Mats')
    browser.back()
    ////////////////////////
    //Model S Best Sellers//
    ////////////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[2]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[2]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Best Sellers")])[5]', 500, function() {
            browser.click('(//a[contains (text(), "Best Sellers")])[5]')
        }, "Click Model S Best Sellers")   
    }),
    browser
    .waitForElementPresent('(//a[@class="quick__product__details active"])[1]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Model S')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[1]').text.to.equal('Best Sellers')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[1]', 'Silver Wall Connector')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[2]', 'Gloss Black Wall Connector')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[3]', 'Model S All-Weather Interior Set')
    browser.back()
    ////////////////////
    //Model S Interior//
    ////////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[2]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[2]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Interior")])[5]', 500, function() {
            browser.click('(//a[contains (text(), "Interior")])[5]')
        }, "Click Model S Interior")   
    }),
    browser
    .waitForElementPresent('(//a[@class="quick__product__details active"])[1]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Model S')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[2]').text.to.equal('Interior')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[4]', 'Model S Panoramic Roof Sunshades')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[5]', 'Model S All-Weather 3rd Row Footwell')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[6]', 'Model S Fixed Glass Roof Sunshade')
    browser.back()
    ////////////////////
    //Model S Exterior//
    ////////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[2]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[2]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Exterior")])[5]', 500, function() {
            browser.click('(//a[contains (text(), "Exterior")])[5]')
        }, "Click Model S Exterior")   
    }),
    browser
    .waitForElementPresent('(//a[@class="quick__product__details active"])[1]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Model S')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[3]').text.to.equal('Exterior')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[19]', 'Model S Car Cover')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[20]', 'Model S Roof Rack')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[21]', 'Model S Roof Rack')
    browser.back()
    //////////////////////////
    //Model S Wheels & Tires//
    //////////////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[2]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[2]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Wheels and Tires")])[5]', 500, function() {
            browser.click('(//a[contains (text(), "Wheels and Tires")])[5]')
        }, "Click Model S Wheels and Tires")   
    }),
    browser
    .waitForElementPresent('(//a[@class="quick__product__details active"])[1]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Model S')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[4]').text.to.equal('Wheels and Tires')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[25]', 'Model S 19" Slip')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[26]', 'Model S Snow Chain')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[27]', 'Model S 21" Twin')
    browser.back()
    //////////////////////
    //Model S Floor Mats//
    //////////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[2]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[2]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Floor Mats")])[5]', 500, function() {
            browser.click('(//a[contains (text(), "Floor Mats")])[5]')
        }, "Click Model S Floor Mats")   
    }),
    browser
    .waitForElementPresent('(//a[@class="quick__product__details active"])[1]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Model S')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[5]').text.to.equal('Floor Mats')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[33]', 'Model S All-Weather')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[34]', 'Model S All-Weather Front')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[35]', 'Model S All-Weather Rear')
    browser.back()
    ////////////////////////
    //Model X Best Sellers//
    ////////////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[2]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[2]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Best Sellers")])[6]', 500, function() {
            browser.click('(//a[contains (text(), "Best Sellers")])[6]')
        }, "Click Model X Best Sellers")   
    }),
    browser
    .waitForElementPresent('(//a[@class="quick__product__details active"])[1]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Model X')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[1]').text.to.equal('Best Sellers')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[1]', 'Connector')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[2]', 'Gloss Black')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[3]', 'Model X Hitch')
    browser.back()
    ////////////////////
    //Model X Interior//
    ////////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[2]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[2]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Interior")])[6]', 500, function() {
            browser.click('(//a[contains (text(), "Interior")])[6]')
        }, "Click Model X Interior")   
    }),
    browser
    .waitForElementPresent('(//a[@class="quick__product__details active"])[1]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Model X')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[2]').text.to.equal('Interior')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[4]', 'Model X Key Band')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[5]', 'Model X HEPA')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[6]', 'Model X Falcon')
    browser.back()
    ////////////////////
    //Model X Exterior//
    ////////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[2]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[2]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Exterior")])[6]', 500, function() {
            browser.click('(//a[contains (text(), "Exterior")])[6]')
        }, "Click Model X Exterior")   
    }),
    browser
    .waitForElementPresent('(//a[@class="quick__product__details active"])[1]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Model X')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[3]').text.to.equal('Exterior')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[15]', 'Model S/X/3 Paint Repair')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[16]', 'Model X Ski/Snowboard')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[17]', 'Model X Tow Package')
    browser.back()
    //////////////////////////
    //Model X Wheels & Tires//
    //////////////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[2]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[2]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Wheels and Tires")])[6]', 500, function() {
            browser.click('(//a[contains (text(), "Wheels and Tires")])[6]')
        }, "Click Model X Wheels and Tires")   
    }),
    browser
    .waitForElementPresent('(//a[@class="quick__product__details active"])[1]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Model X')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[4]').text.to.equal('Wheels and Tires')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[20]', 'Model X 22" Turbine Wheel')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[21]', 'Model X 19" Cyclone')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[22]', 'Tire Repair Sealant')
    browser.back()
    ////////////////////////////
    //Model X Floors and Tires//
    ////////////////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[2]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[2]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Floor Mats")])[6]', 500, function() {
            browser.click('(//a[contains (text(), "Floor Mats")])[6]')
        }, "Click Model X Floor Mats")   
    }),
    browser
    .waitForElementPresent('(//a[@class="quick__product__details active"])[1]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Model X')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[5]').text.to.equal('Floor Mats')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[28]', 'Model X All Weather')
    browser.back()
    /////////////////////
    //Roadster Upgrades//
    /////////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[2]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[2]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Upgrades")])[2]', 500, function() {
            browser.click('(//a[contains (text(), "Upgrades")])[2]')
        }, "Click Roadster Upgrades")   
    }),
    browser
    .waitForElementPresent('(//a[@class="quick__product__details active"])[1]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Roadster')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[1]').text.to.equal('Upgrades')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[1]', 'Roadster')
    browser.back()

    /////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////APPAREL HEADER TESTS/////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////////////////

    ////////////////////
    //Men New Arrivals//
    ////////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[3]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[3]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "New Arrivals")])[4]', 500, function() {
            browser.click('(//a[contains (text(), "New Arrivals")])[4]')
        }, "Click Men New Arrivals")   
    }),
    browser
    .waitForElementPresent('(//a[@class="quick__product__details active"])[1]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Men')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[1]').text.to.equal('New Arrivals')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[1]', 'Corp Jacket')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[2]', 'Full-Zip Hoodie')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[3]', 'Large Wordmark Pullover')
    browser.back()
    
//Left to work on: Finish Apparel Men, Women and Kids -- Start Lifestyle
    //Back to CSS
    .useCss()
}