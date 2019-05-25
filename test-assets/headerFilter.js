///////////////////////////////
//Referring to issue TESLA-19//
///////////////////////////////
module.exports = (browser) => {

//     _____ _                     _                _    _                _             _______        _       
//     / ____| |                   (_)              | |  | |              | |           |__   __|      | |      
//    | |    | |__   __ _ _ __ __ _ _ _ __   __ _   | |__| | ___  __ _  __| | ___ _ __     | | ___  ___| |_ ___ 
//    | |    | '_ \ / _` | '__/ _` | | '_ \ / _` |  |  __  |/ _ \/ _` |/ _` |/ _ \ '__|    | |/ _ \/ __| __/ __|
//    | |____| | | | (_| | | | (_| | | | | | (_| |  | |  | |  __/ (_| | (_| |  __/ |       | |  __/\__ \ |_\__ \
//     \_____|_| |_|\__,_|_|  \__, |_|_| |_|\__, |  |_|  |_|\___|\__,_|\__,_|\___|_|       |_|\___||___/\__|___/
//                             __/ |         __/ |                                                              
//                            |___/         |___/                                                               

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

    // __      __  _     _      _                                                 _             _    _                _             _______        _       
    // \ \    / / | |   (_)    | |          /\                                   (_)           | |  | |              | |           |__   __|      | |      
    //  \ \  / /__| |__  _  ___| | ___     /  \   ___ ___ ___  ___ ___  ___  _ __ _  ___  ___  | |__| | ___  __ _  __| | ___ _ __     | | ___  ___| |_ ___ 
    //   \ \/ / _ \ '_ \| |/ __| |/ _ \   / /\ \ / __/ __/ _ \/ __/ __|/ _ \| '__| |/ _ \/ __| |  __  |/ _ \/ _` |/ _` |/ _ \ '__|    | |/ _ \/ __| __/ __|
    //    \  /  __/ | | | | (__| |  __/  / ____ \ (_| (_|  __/\__ \__ \ (_) | |  | |  __/\__ \ | |  | |  __/ (_| | (_| |  __/ |       | |  __/\__ \ |_\__ \
    //     \/ \___|_| |_|_|\___|_|\___| /_/    \_\___\___\___||___/___/\___/|_|  |_|\___||___/ |_|  |_|\___|\__,_|\__,_|\___|_|       |_|\___||___/\__|___/
                                                                                                                                                        
                                                                                                                                                        

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

//     _    _    _                _             _______        _       
//     /\                              | |  | |  | |              | |           |__   __|      | |      
//    /  \   _ __  _ __   __ _ _ __ ___| |  | |__| | ___  __ _  __| | ___ _ __     | | ___  ___| |_ ___ 
//   / /\ \ | '_ \| '_ \ / _` | '__/ _ \ |  |  __  |/ _ \/ _` |/ _` |/ _ \ '__|    | |/ _ \/ __| __/ __|
//  / ____ \| |_) | |_) | (_| | | |  __/ |  | |  | |  __/ (_| | (_| |  __/ |       | |  __/\__ \ |_\__ \
// /_/    \_\ .__/| .__/ \__,_|_|  \___|_|  |_|  |_|\___|\__,_|\__,_|\___|_|       |_|\___||___/\__|___/
//          | |   | |                                                                                   
//          |_|   |_|     


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
    ////////////
    //Men Tees//
    ////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[3]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[3]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Tees")])[3]', 500, function() {
            browser.click('(//a[contains (text(), "Tees")])[3]')
        }, "Click Men Tees")   
    }),
    browser
    .waitForElementPresent('(//a[@class="quick__product__details active"])[1]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Men')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[2]').text.to.equal('Tees')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[4]', 'Small Wordmark Tee')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[7]', 'Embroidery Tee')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[10]', 'Large Wordmark Tee')
    browser.back()
    ///////////////////
    //Men Sweatshirts//
    ///////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[3]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[3]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Sweatshirts")])[3]', 500, function() {
            browser.click('(//a[contains (text(), "Sweatshirts")])[3]')
        }, "Click Men Sweatshirts")   
    }),
    browser
    .waitForElementPresent('(//a[@class="quick__product__details active"])[1]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Men')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[3]').text.to.equal('Sweatshirts')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[17]', 'Full-Zip Hoodie')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[18]', 'Small Wordmark Pullover')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[19]', 'Large Wordmark Pullover')
    browser.url('https://shop.tesla.com/')
    .pause(3000)
    ///////////////
    //Men Jackets//
    ///////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[3]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[3]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Jackets")])[4]', 500, function() {
            browser.click('(//a[contains (text(), "Jackets")])[4]')
        }, "Click Men Jackets")   
    }),
    browser
    .waitForElementPresent('(//a[@class="quick__product__details active"])[1]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Men')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[4]').text.to.equal('Jackets')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[23]', 'Corp Jacket')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[24]', 'Soft Shell Jacket')
    .pause(300)
    browser.back()
    ////////////
    //Men Hats//
    ////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[3]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[3]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Hats")])[4]', 500, function() {
            browser.click('(//a[contains (text(), "Hats")])[4]')
        }, "Click Men Hats")   
    }),
    browser
    .waitForElementPresent('(//a[@class="quick__product__details active"])[1]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Men')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[5]').text.to.equal('Hats')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[25]', 'T Logo Hat')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[31]', 'Tesla Snapback')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[32]', 'Beanie')
    .pause(300)
    browser.back()
    //////////////////////
    //Women New Arrivals//
    //////////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[3]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[3]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "New Arrivals")])[5]', 500, function() {
            browser.click('(//a[contains (text(), "New Arrivals")])[5]')
        }, "Click Women New Arrivals")   
    }),
    browser
    .waitForElementPresent('(//a[@class="quick__product__details active"])[1]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Women')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[1]').text.to.equal('New Arrivals')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[1]', 'Corp Jacket')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[2]', 'Full-Zip Hoodie')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[3]', 'Large Wordmark Pullover')
    .pause(300)
    browser.back()
    //////////////
    //Women Tees//
    //////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[3]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[3]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Tees")])[4]', 500, function() {
            browser.click('(//a[contains (text(), "Tees")])[4]')
        }, "Click Women Tees")   
    }),
    browser
    .waitForElementPresent('(//a[@class="quick__product__details active"])[1]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Women')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[2]').text.to.equal('Tees')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[4]', 'Small Wordmark Tee')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[7]', 'Embroidery Tee')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[10]', 'Large Wordmark Tee')
    .pause(300)
    browser.back()
    /////////////////////
    //Women Sweatshirts//
    /////////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[3]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[3]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Sweatshirts")])[4]', 500, function() {
            browser.click('(//a[contains (text(), "Sweatshirts")])[4]')
        }, "Click Women Sweatshirts")   
    }),
    browser
    .waitForElementPresent('(//a[@class="quick__product__details active"])[1]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Women')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[3]').text.to.equal('Sweatshirts')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[14]', 'Full-Zip Hoodie')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[15]', 'Small Wordmark Pullover')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[16]', 'Large Wordmark Pullover')
    browser.url('https://shop.tesla.com/')
    .pause(2000)
    /////////////////
    //Women Jackets//
    /////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[3]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[3]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Jackets")])[5]', 500, function() {
            browser.click('(//a[contains (text(), "Jackets")])[5]')
        }, "Click Women Jackets")   
    }),
    browser
    .waitForElementPresent('(//a[@class="quick__product__details active"])[1]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Women')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[4]').text.to.equal('Jackets')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[19]', 'Corp Jacket')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[20]', 'Soft Shell Jacket')
    .pause(300)
    browser.back()
    //////////////
    //Women Hats//
    //////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[3]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[3]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Hats")])[5]', 500, function() {
            browser.click('(//a[contains (text(), "Hats")])[5]')
        }, "Click Women Hats")   
    }),
    browser
    .waitForElementPresent('(//a[@class="quick__product__details active"])[1]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Women')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[5]').text.to.equal('Hats')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[21]', 'T Logo Hat')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[27]', 'Tesla Snapback')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[28]', 'Beanie')
    .pause(300)
    browser.back()
    /////////////////////
    //Kids New Arrivals//
    /////////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[3]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[3]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "New Arrivals")])[6]', 500, function() {
            browser.click('(//a[contains (text(), "New Arrivals")])[6]')
        }, "Click Kids New Arrivals")   
    }),
    browser
    .waitForElementPresent('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Kids')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[1]').text.to.equal('New Arrivals')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[1]', 'Zero Emissions')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[4]', 'Made on Earth')
    .pause(300)
    browser.back()
    /////////////
    //Kids Tops//
    /////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[3]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[3]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Tops")])[2]', 500, function() {
            browser.click('(//a[contains (text(), "Tops")])[2]')
        }, "Click Kids Tops")   
    }),
    browser
    .waitForElementPresent('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Kids')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[2]').text.to.equal('Tops')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[7]', 'T Embroidery Tee')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[10]', 'Large Wordmark Tee')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[13]', 'Embroidered Wordmark Tee')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[16]', 'Racing')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[19]', 'Checkered')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[21]', 'Hoodie')
    .pause(300)
    browser.back()
    ////////////////
    //Kids Onesies//
    ////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[3]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[3]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Onesies")])[2]', 500, function() {
            browser.click('(//a[contains (text(), "Onesies")])[2]')
        }, "Click Kids Onesies")   
    }),
    browser
    .waitForElementPresent('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Kids')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[3]').text.to.equal('Onesies')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[22]', 'Zero Emissions')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[25]', 'Made on Earth')
    .pause(300)
    browser.back()
    ////////////////
    //Kids Jackets//
    ////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[3]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[3]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Jackets")])[6]', 500, function() {
            browser.click('(//a[contains (text(), "Jackets")])[6]')
        }, "Click Kids Jackets")   
    }),
    browser
    .waitForElementPresent('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Kids')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[4]').text.to.equal('Jackets')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[30]', 'Puffer Jacket')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[31]', 'Corp Jacket')
    .pause(300)
    browser.back()
    /////////////
    //Kids Toys//
    /////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[3]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[3]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Toys")])[2]', 500, function() {
            browser.click('(//a[contains (text(), "Toys")])[2]')
        }, "Click Kids Toys")   
    }),
    browser
    .waitForElementPresent('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Kids')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[5]').text.to.equal('Toys')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[32]', 'Tesla Model S for Kids')
    .pause(300)
    browser.back()
    /////////////
    //Kids Hats//
    /////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[3]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[3]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Hats")])[6]', 500, function() {
            browser.click('(//a[contains (text(), "Hats")])[6]')
        }, "Click Kids Hats")   
    }),
    browser
    .waitForElementPresent('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Kids')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[6]').text.to.equal('Hats')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[33]', 'Tesla Logo Hat')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[34]', 'T Logo Hat')
    .pause(300)
    browser.back()


    // _      _  __          _         _         _    _                _             _______        _       
    // | |    (_)/ _|        | |       | |       | |  | |              | |           |__   __|      | |      
    // | |     _| |_ ___  ___| |_ _   _| | ___   | |__| | ___  __ _  __| | ___ _ __     | | ___  ___| |_ ___ 
    // | |    | |  _/ _ \/ __| __| | | | |/ _ \  |  __  |/ _ \/ _` |/ _` |/ _ \ '__|    | |/ _ \/ __| __/ __|
    // | |____| | ||  __/\__ \ |_| |_| | |  __/  | |  | |  __/ (_| | (_| |  __/ |       | |  __/\__ \ |_\__ \
    // |______|_|_| \___||___/\__|\__, |_|\___|  |_|  |_|\___|\__,_|\__,_|\___|_|       |_|\___||___/\__|___/
    //                             __/ |                                                                     
    // 
    //////////////////////////
    //Lifestyle Best Sellers//
    //////////////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[4]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[4]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Best Sellers")])[8]', 500, function() {
            browser.click('(//a[contains (text(), "Best Sellers")])[8]')
        }, "Click Lifestyle Best Sellers")   
    }),
    browser
    .waitForElementPresent('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Lifestyle')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[1]').text.to.equal('Best Sellers')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[1]', 'Powerbank')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[2]', 'Diecast 1:24 Scale Tesla Semi')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[3]', 'Diecast 1:18 Scale Model 3')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[8]', 'Tesla Wireless Phone Charger')
    .pause(300)
    browser.back()
    //////////////////
    //Lifestyle Hats//
    //////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[4]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[4]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Hats")])[8]', 500, function() {
            browser.click('(//a[contains (text(), "Hats")])[8]')
        }, "Click Lifestyle Hats")   
    }),
    browser
    .waitForElementPresent('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Lifestyle')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[2]').text.to.equal('Hats')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[9]', 'T Logo Hat')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[12]', 'Tesla Logo Hat')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[15]', 'Tesla Snapback')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[16]', 'Tesla Beanie')
    .pause(300)
    browser.back()
    ///////////////////////////
    //Lifestyle Collectibles //
    ///////////////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[4]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[4]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Collectibles")])[2]', 500, function() {
            browser.click('(//a[contains (text(), "Collectibles")])[2]')
        }, "Click Lifestyle Collectibles")   
    }),
    browser
    .waitForElementPresent('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Lifestyle')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[3]').text.to.equal('Collectibles')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[19]', 'Diecast 1:18 Scale Model X')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[20]', 'Diecast 1:18 Scale Model S')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[25]', 'Diecast 1:24 Scale Tesla Semi')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[26]', 'Diecast 1:18 Scale Model 3')
    .pause(300)
    browser.back()
    ///////////////////
    //Lifestyle Toys //
    ///////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[4]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[4]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Toys")])[4]', 500, function() {
            browser.click('(//a[contains (text(), "Toys")])[4]')
        }, "Click Lifestyle Toys")   
    }),
    browser
    .waitForElementPresent('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Lifestyle')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[4]').text.to.equal('Toys')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[31]', 'Tesla Model S for Kids')
    .pause(300)
    browser.back()
    ////////////////////////
    //Lifestyle Drinkware //
    ////////////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[4]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[4]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Drinkware")])[2]', 500, function() {
            browser.click('(//a[contains (text(), "Drinkware")])[2]')
        }, "Click Lifestyle Drinkware")   
    }),
    browser
    .waitForElementPresent('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Lifestyle')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[5]').text.to.equal('Drinkware')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[32]', 'Starman Mug')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[33]', 'Travel Mug/Tumbler')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[35]', 'Stainless Steel')
    .pause(300)
    browser.back()
    ///////////////////
    //Lifestyle Tech //
    ///////////////////
    .waitForElementPresent('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[4]', 10000)
    .moveToElement('(//li[@class="tsla-header-nav--list_item tsla-header-nav--selected"])[4]', 1, 2, function() {
        browser.pause(300)
        browser.waitForElementPresent('(//a[contains (text(), "Tech")])[2]', 500, function() {
            browser.click('(//a[contains (text(), "Tech")])[2]')
        }, "Click Lifestyle Tech")   
    }),
    browser
    .waitForElementPresent('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]')
    .expect.element('//div[@class="category-text-content category-h1-dark-color-content  heading-only"]').text.to.equal('Lifestyle')
    browser
    .expect.element('(//h2[@class="c-product__container__title"])[6]').text.to.equal('Tech')
    browser
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[37]', 'Powerbank')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[38]', 'Model X Key Band')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[39]', 'Model 3 Key Band')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[40]', 'Model S Key Band')
    .verify.containsText('(//a[@class="e-general__title c-product__list__item__title c-product__product__url active"])[41]', 'Tesla Wireless Phone Charger')
    .pause(300)
    browser.back()
    //Back to CSS
    .useCss()
}