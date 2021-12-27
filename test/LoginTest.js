// filename: test/LoginTest.js
require('chromedriver');
const { Builder } = require('selenium-webdriver');
const assert = require('assert');
const { isTypedArray } = require('util/types');
const LoginPage = require('../pages/LoginPage')

describe('Login', function() {
    this.timeout(30000)
    let driver
    let login

    beforeEach(async function() {
        /* const vendorDirectory =
        path.delimiter + path.join(__dirname, '..', 'vendor')
        process.env.PATH += vendorDirectory */
        driver = await new Builder().forBrowser('chrome').build()
        login = new LoginPage(driver)
        await login.load()
    })

    afterEach(async function(){
        await driver.quit()
    })

    it('with valid credentials', async function(){
        await login.authenticate('tomsmith', 'SuperSecretPassword!')
        assert(await login.successMessagePresent(), 'Success message not displayed')
    })
})