# Nightwatch JS testing project
======================================
# Screenshot command
.saveScreenshot('');
# Page scroll command
.execute('scrollTo(0, 0)')
# Keyboard event command
.keys(browser.Keys.ENTER)
node nightwatch -e chrome -a tagname
# Run report command
node nightwatch -e chrome -a tagname --reporter html-reporter.js
# Run group command
node nightwatch -e chrome --group tests/amazon, tests/google
