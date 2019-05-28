var shopPage
module.exports = {
    ///////////////////////////////////////////////////////////////////
    //See "How-to-Run-Environments" for info on tags and environments//
    ///////////////////////////////////////////////////////////////////
    '@tags': ['mobile'],
    beforeEach: browser => {
        shopPage = browser.page.shop()
        shopPage.navigate()
    },
    after: browser => {
        browser.end()
    },
    'Mobile Login': browser => {
        shopPage
        .mobileLgn(browser)
    },
    'General Browsing on Mobile': browser => {
        shopPage
        .mobile(browser)
    }

}