//login & logout functionality check

module.exports = {
    tags: ['testcase3'],
    'Login page check': function(browser){
        browser
            .windowMaximize()
            .url('https://www.amazon.com/')
            .waitForElementVisible('body', 2000)
            .click('#nav-link-accountList > span.nav-line-1')
            .setValue('#ap_email', 'qatestnadim@gmail.com')
            .pause(3000)
            .setValue('#ap_password', '123456')
            .pause(3000)
            .click('#signInSubmit')
            .saveScreenshot('./screenshots/Chrome/testcase3.jpg')
            .moveToElement('#nav-link-accountList > span.nav-line-1', 0, 0)
            // .click('#nav-link-accountList > span.nav-line-1')
            // .click('#nav-hamburger-menu > i'),
            // .execute('scrollTo(0, 5000)')
            // .click('#hmenu-content > ul.hmenu.hmenu-visible > li:nth-child(40) > a > div')
            .click('#nav-item-signout > span')
            .pause(3000)
            .end();
    }
}