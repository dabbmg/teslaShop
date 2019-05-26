///////////////////////////////
//Referring to issue TESLA-20//
///////////////////////////////
//Terms to search:
//"Key Band", "Chargers", "T Shirts", "Model 3"-Note This one Never actually loads
module.exports = (browser, searchTerm) => {
    browser
    .maximizeWindow()
    .waitForElementPresent('input[id="searchTerm"]', 10000)
    .setValue('input[id="searchTerm"]', [searchTerm , browser.Keys.ENTER])
    .verify.containsText('span[class="productlister__container__searchterm"]', searchTerm)
    
    browser.back()
    .clearValue('input[id="searchTerm"]')
    .pause(700)
}