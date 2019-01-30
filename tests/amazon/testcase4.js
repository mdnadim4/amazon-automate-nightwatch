//Registration functionality check

module.exports = {
    tags: ['testcase4'],
    'Registration page check': function(browser){
        browser
            .windowMaximize()
            .url('https://www.amazon.com')
            .waitForElementVisible('body', 2000)
            .click('#nav-link-accountList > span.nav-line-1')
            .click('#createAccountSubmit')
            .setValue('#ap_customer_name', 'William Smith')
            .setValue('#ap_email', 'qatestnadim@gmail.com')
            .setValue('#ap_password', '123456')
            .setValue('#ap_password_check', '123456')
            .click('#continue')
            .pause(5000)
            .end();
    }
}