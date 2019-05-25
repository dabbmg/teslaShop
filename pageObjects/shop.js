let accFeatures = require('../test-assets/accFeatures')
let footers = require('../test-assets/footers')
let genBrowse = require('../test-assets/genBrowse')
let headerFilter = require('../test-assets/headerFilter')
let searchBar = require('../test-assets/searchBar')
//
var shopCommands = {
    accFeat: function(shopPage) {
        accFeatures(shopPage)
        return this
    },
    foot: function(shopPage) {
        footers(shopPage)
        return this
    },
    browse: function(shopPage) {
        genBrowse(shopPage)
        return this
    },
    headFilt: function(shopPage) {
        headerFilter(shopPage)
        return this
    },
    search: function(shopPage, searchTerm) {
        searchBar(shopPage, searchTerm)
        return this
    }  
}
module.exports = {
    url: 'https://shop.tesla.com',
    commands: [shopCommands],
    elements: {
    }
}