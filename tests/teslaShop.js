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
}