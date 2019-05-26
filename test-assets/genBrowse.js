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
    //To Do: Expand further upon browing and adding things to cart to make sure you hit everything
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
    //Add/Subtract Quantity
    .verify.containsText('div[class="product__container__details__quantity__value"]', '1')
    .click('div[class="product__container__details__quantity__select__more"]')
    .verify.containsText('div[class="product__container__details__quantity__value"]', '2')
    .click('div[class="product__container__details__quantity__select__less"]')
    .verify.containsText('div[class="product__container__details__quantity__value"]', '1')
    //Add to Cart
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
    //Click one
    .click('a[href="/us/en/product/vehicle-accessories/model-3-all-weather-cargo-mats.html"]')
    .waitForElementPresent('h1[class="product-title"]', 10000)
    .verify.containsText('h1[class="product-title"]', 'Model 3 All-Weather')
    browser.back()
    .pause(1000)
    .waitForElementPresent('i[class="tsla-icon-angle_left tsla-icon_size--small"]', 10000)
    .click('i[class="tsla-icon-angle_left tsla-icon_size--small"]')
    .pause(2000)
    .useXpath()
    //Click Another
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
    //Use Selector to select Black Coat Hangers
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
    //Use Selector to select Outdoor Cover
    .waitForElementPresent('//div[@class="selectric-wrapper selectric-product__container__details__color__items__altview__select selectric-js-select"]', 10000)
    .click('//div[@class="selectric-wrapper selectric-product__container__details__color__items__altview__select selectric-js-select"]')
    .waitForElementVisible('//li[@class="product__container__details__color__items__item last"]')
    .click('//li[@class="product__container__details__color__items__item last"]')
    .verify.containsText('(//span[@class="label"])[1]', 'Outdoor')
    browser.url('https://shop.tesla.com')
    .useXpath()
    .waitForElementPresent('(//a[@href="/us/en/category/charging.html"])[2]', 10000)
    .click('(//a[@href="/us/en/category/charging.html"])[2]')
    .waitForElementPresent('//div[@class="header section"]')
    .verify.containsText('(//div[@class="header section"])[1]', 'Model S')
    .verify.containsText('(//div[@class="header section"])[2]', 'Model X')
    .verify.containsText('(//div[@class="header section"])[3]', 'Model 3')
    .verify.containsText('(//h2[@class="c-product__container__title"])[1]', 'Charging')
    browser.back()
    .waitForElementPresent('(//a[@href="/us/en/category/apparel/men.html"])[3]', 10000)
    .click('(//a[@href="/us/en/category/apparel/men.html"])[3]')
    .waitForElementPresent('(//div[@class="container"])[1]')
    .verify.containsText('(//div[@class="container"])[1]', 'Men')
    browser.back()
    .waitForElementPresent('(//a[@href="/us/en/category/apparel/women.html"])[3]', 10000)
    .click('(//a[@href="/us/en/category/apparel/women.html"])[3]')
    .waitForElementPresent('(//div[@class="container"])[1]')
    .verify.containsText('(//div[@class="container"])[1]', 'Women')
    //Quick Add by Size
    .moveToElement('(//a[@href="/us/en/product/apparel/women_s-corp-jacket.html?sku=100036605"])[1]', undefined, undefined, function() {
        browser.moveToElement('(//div[@class="quickadd__with__size__container active"])[1]', 140, 7, function() {
            browser.click('(//button[@data-sku="100036601"])[1]')
        })
    })
    .pause(5000)
    .useCss()
    //Close Cart after selecting by size
    .click('span[class="shopcart-modal__close-icon"]')
    .pause(5000)
    //Color Selectors
    .useXpath()
    .click('(//a[@href="/us/en/product/apparel/women_s-small-wordmark-tee.html?sku=7528818-00-A"])[1]')
    .waitForElementPresent('(//section[@class="product-color product__container__details__color"])[1]', 10000)
    .click('(//label[@for="Gray"])[1]')
    .waitForElementVisible('(//img[@src="/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/7528828-00-A_0.jpg"])[1]', 10000)
    .click('(//label[@for="White"])[1]')
    .waitForElementVisible('(//img[@src="/content/dam/tesla/LIFESTYLE/TOPS/TSHIRTS/7528823-00-A_0.jpg"])[1]', 10000)
    .pause(1000)
    ///////////////Can't get it select size
    // .pause(3000)
    // .moveToElement('(//input[@data-sku="7528820-00-A"])[2]', 5, 10, function() {
    //     browser.mouseButtonClick('left')
    // })
    // .useCss()
    // .waitForElementVisible('input[class="btn-purchasable tsla-btn product__container__details__submit__buy"]', 10000)
    // .click('input[class="btn-purchasable tsla-btn product__container__details__submit__buy"]')
    // .useXpath()
    // .pause(2500)
    // .verify.containsText('(//span[@class="shopcart__color-size"])[3]', 'White, M')





}