module.exports = {
    tags : ['facebook_signup'],
    'Facebook signup validation' : function(browser){
        browser
            .windowMaximize()
            .url('https://www.facebook.com/')
            .waitForElementVisible('body', 2000)
            .setValue('#u_0_j', 'Robert') //Firstname
            .setValue('#u_0_l', 'Carlos') //Lastname
            .setValue('#u_0_o', 'qatestnadim@gmail.com') //Email address
            .setValue('#u_0_r', 'qatestnadim@gmail.com') // Email address
            .setValue('#u_0_v', 'Qatest1234') //Password
            .click('select[name="birthday_day"] option[value="10"]')
            .pause(1000)
            .click('select[name="birthday_month"] option[value="5"]')
            .pause(1000)
            .click('select[name="birthday_year"] option[value="1988"]')
            .click('#u_0_a') //Gender
            .click('#u_0_11') //submit button
            .saveScreenshot('./screenshots/Chrome/facebook_signup.jpg')
            .pause(5000)
            .end()

    }
}