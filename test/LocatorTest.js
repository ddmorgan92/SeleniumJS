//filename: test/LocatorTest.js
const { Builder, By } = require('selenium-webdriver');
require('chromedriver');
const assert = require('assert');
const path = require('path');

describe('Locate', function() {
    this.timeout(30000)
    let driver

    beforeEach(async function() {
        driver = await new Builder().forBrowser('chrome').build()
    })
    afterEach(async function() {
        await driver.quit()
    })
    it('check red button text', async function() {
        await driver.get('https://the-internet.herokuapp.com/challenging_dom')
        await driver
            .findElement(By.className('button success'))
            .click()
        await driver
            .findElement(By.className('button'))
            .click()
            
        var redButtonMessage = await driver
            .findElement(By.className('button alert'))
            .getText()
        var expectedResultArr = ['foo', 'bar', 'baz', 'qux']

        assert(expectedResultArr.includes(redButtonMessage), "The button text is not correct, something went wrong.")
    })
})
