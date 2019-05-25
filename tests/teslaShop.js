var shopPage
module.exports = {
    ///////////////////////////////////////////////////////////////////
    //See "How-to-Run-Environments" for info on tags and environments//
    ///////////////////////////////////////////////////////////////////
    '@tags': ['desktop'],
    beforeEach: browser => {
        shopPage = browser.page.shop()
        shopPage.navigate()
    },
    after: browser => {
        browser.end()
    },
    // 'Account Features': browser => {
    //     shopPage
    //     .accFeat(browser)
    // },
    // 'Footers': browser => {
    //     shopPage
    //     .foot(browser)
    // },
    // 'General Browsing': browser => {
    //     shopPage
    //     .browse(browser)
    // },
    'Headers and Filters': browser => {
        shopPage
        .headFilt(browser)
    },
    'Search Bar': browser => {
        shopPage
        .search(browser, 'Key Band')
        .search(browser, 'Chargers')
        .search(browser, 'T Shirts')
    },
}