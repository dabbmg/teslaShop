///////////////////////////////
//Referring to issue TESLA-38//
///////////////////////////////
module.exports = (browser) => {

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////Home Page///////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    ////////////////
    //Main Sliders//
    ////////////////
    browser
    .maximizeWindow()
    .waitForElementPresent('a[title="Tesla © 2019"]')
    .click('button[id="slick-slide-control00"]')
    .pause(500)
    .useXpath()
    .click('(//a[@class="hero-container__btn__full"])[2]')
    .useCss()
    .waitForElementPresent('h1[class="product-title"]', 10000)
    .verify.containsText('h1[class="product-title"]', 'Gloss Black Wall Connector')
    .verify.containsText('div[class="product__container__details__quantity__value"]', '1')
    .click('div[class="product__container__details__quantity__select__more"]')
    .verify.containsText('div[class="product__container__details__quantity__value"]', '2')
    .click('div[class="product__container__details__quantity__select__less"]')
    .verify.containsText('div[class="product__container__details__quantity__value"]', '1')
    .click('input[value="Add to Cart"]')
    .pause(2000)
    .click('span[class="shopcart-modal__close-icon"]')
    .pause(2000)
    browser.back()
    .click('button[id="slick-slide-control01"]')
    .pause(500)
    .useXpath()
    .click('(//a[@class="hero-container__btn__full"])[3]')
    .useCss()
    .waitForElementPresent('h1[class="product-title"]', 10000)
    .verify.containsText('h1[class="product-title"]', 'Model 3 All Weather')
    .expect.element('img[src="/content/dam/tesla/CAR_ACCESSORIES/MODEL_3/INTERIOR/1448752-00-B_0.jpg"]').to.be.visible
    browser.back()
    /////////////////////////
    //Best Sellers Carousel//
    /////////////////////////
    .waitForElementPresent('button[class="slick-next slick-arrow"]', 10000)
    .click('button[class="slick-next slick-arrow"]')
    .pause(500)
    .click('a[href="/us/en/product/vehicle-accessories/model-3-all-weather-cargo-mats.html"]')
    .waitForElementPresent('h1[class="product-title"]', 10000)
    .verify.containsText('h1[class="product-title"]', 'Model 3 All-Weather')
    browser.back()
    .pause(1000)
    .waitForElementPresent('i[class="tsla-icon-angle_left tsla-icon_size--small"]', 10000)
    .click('i[class="tsla-icon-angle_left tsla-icon_size--small"]')
    .pause(2000)
    .useXpath()
    .moveToElement('(//a[@href="/us/en/product/apparel/tesla-wireless-phone-charger.html?sku=1479398-00-A"])[3]', 10, 20, function() {
        browser.mouseButtonClick('left')
    })
    .useCss()
    .waitForElementPresent('h1[class="product-title"]', 10000)
    .verify.containsText('h1[class="product-title"]', 'Tesla Wireless Phone Charger')
    browser.back()
    ///////////////////////////
    //Home Page Image Buttons//
    ///////////////////////////
    .useXpath()
    .waitForElementPresent('(//a[@href="/us/en/category/vehicle-accessories/model-3.html"])[3]', 10000)
    .click('(//a[@href="/us/en/category/vehicle-accessories/model-3.html"])[3]')
    .useCss()
    .waitForElementPresent('div[class="container"]', 10000)
    .verify.containsText('div[class="container"]', 'Model 3')
    browser.back()
    .useXpath()
    .waitForElementPresent('(//a[@href="/us/en/category/vehicle-accessories/model-x.html"])[3]', 10000)
    .click('(//a[@href="/us/en/category/vehicle-accessories/model-x.html"])[3]')
    .useCss()
    .waitForElementPresent('div[class="container"]', 10000)
    .verify.containsText('div[class="container"]', 'Model X')
    .click('a[href="/us/en/product/vehicle-accessories/coat-hooks.html"]')
    .waitForElementPresent('div[class="selectric"]', 10000)
    .click('div[class="selectric"]')
    .useXpath()
    .waitForElementVisible('(//li[@class="product__container__details__color__items__item active"])[2]', 2000)
    .click('(//li[@class="product__container__details__color__items__item active"])[2]')
    .verify.containsText('(//span[@class="label"])[1]', 'Coat Hooks - Black')
    browser.url('https://shop.tesla.com')
    .waitForElementPresent('(//a[@href="/us/en/category/vehicle-accessories/model-s.html"])[3]', 10000)
    .click('(//a[@href="/us/en/category/vehicle-accessories/model-s.html"])[3]')
    .waitForElementPresent('//div[@class="container"]', 10000)
    .verify.containsText('//div[@class="container"]', 'Model S')
    .click('//a[@href="/us/en/product/vehicle-accessories/model-s-car-cover.html"]')
    .waitForElementPresent('//div[@class="selectric-wrapper selectric-product__container__details__color__items__altview__select selectric-js-select"]', 10000)
    .click('//div[@class="selectric-wrapper selectric-product__container__details__color__items__altview__select selectric-js-select"]')
    .waitForElementVisible('//li[@class="product__container__details__color__items__item last"]')
    .click('//li[@class="product__container__details__color__items__item last"]')
    .verify.containsText('(//span[@class="label"])[1]', 'Outdoor')
    browser.url('https://shop.tesla.com')





}