import {By, until, Key} from "selenium-webdriver";

module.exports = function (driver) {
    const pageobjects = {
        searchbox: By.id('lst-ib')
    };

    return {
        url: "https://www.google.com/",
        waitUntilVisible: function() {
            return driver.wait(until.elementLocated(pageobjects.searchbox));
        },
        navigate: function() {
            driver.navigate().to(this.url);
            return this.waitUntilVisible();
        },
        searchfor: function (text) {
            return driver.findElement(elements.searchbox).sendKeys(text + Key.RETURN);
        }
    };
};