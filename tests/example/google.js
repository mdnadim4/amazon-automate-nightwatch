module.exports = {
    // beforeEach: function (browser, done) {
    //     require('nightwatch-video-recorder').start(browser, done)
    // },
    // afterEach: function (browser, done) {
    // require('nightwatch-video-recorder').stop(browser, done)
    // },

    tags : ['google'],
    'Demo test google' : function(browser){
        browser
            .windowMaximize()
            .url('https://www.google.com/')
            .waitForElementVisible('body', 2000)
            .assert.title('Google')
            .assert.visible('input[type=text]')
            .setValue('input[type=text]', 'Nightwatch JS')
            .click('#tsf > div:nth-child(2) > div > div.FPdoLc.VlcLAe > center > input[type="submit"]:nth-child(1)')
            .click('#rso > div:nth-child(1) > div > div:nth-child(1) > div > div > div.r > a > h3')
            .saveScreenshot('./screenshots/Chrome/google.jpg')
            .pause(5000);
    },

    'Go to Amazon': function(browser){
        browser
            .url('https://www.amazon.com/')
            .waitForElementVisible('body', 2000)
            .setValue('#twotabsearchtextbox', 'Smart Watch')
            .click('#nav-search > form > div.nav-right > div > input')
            .execute('scrollTo(0, 5000)')
            .pause(3000)
            .execute('scrollTo(0, 0)')
            .pause(3000)
            .click('#result_0 > div > div > div > div.a-fixed-left-grid-col.a-col-left > div > div > a > img')
            .saveScreenshot('./screenshots/Chrome/amazon.jpg');
    },

    'Browser quite': function(browser){
        browser
            .pause(5000)
            .end();
    }

}



//.saveScreenshot('');
//.execute('scrollTo(0, 0)')
//.keys(browser.Keys.ENTER)
//node nightwatch -e chrome -a window 
//node nightwatch -e chrome -a tagname
//node nightwatch -e chrome -a tagname --reporter html-reporter.js
//node nightwatch -e chrome --group tests/amazon, tests/google