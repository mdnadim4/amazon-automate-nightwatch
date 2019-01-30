module.exports = {
    tags: ['testcase2'],
    'Search functionality check': function(browser){
        browser
            .windowMaximize()
            .url('https://www.amazon.com')
            .waitForElementVisible('body', 2000)
            .setValue('#twotabsearchtextbox', ['books', browser.Keys.ENTER])
            .pause(5000)
            .end();
    }
}