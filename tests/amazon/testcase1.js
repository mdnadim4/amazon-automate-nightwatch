module.exports = {
    tags: ['testcase1'],
    'Open browser and click on header': function(browser){
        browser
            .windowMaximize()
            .url('https://www.amazon.com')
            .waitForElementVisible('body', 2000)
            .assert.title('Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more')
            .click('#nav-link-shopall > span.nav-line-2')
            .click('#a-page > div.a-container.fsdContainer.fsdFullWidthImage > div > div:nth-child(4) > div:nth-child(1) > div > a:nth-child(2)')
            .saveScreenshot('./screenshots/chrome/testcase.jpg')
            .pause(3000)
            .end();
            
    }
}