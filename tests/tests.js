import "chromedriver";
import {Builder, By, until} from "selenium-webdriver";
{describe, before, after, it} import "selenium-webdriver/testing";

describe('Google Search', function() {
    let driver;
    let googlesearchpage;
    this.timeout(50000);

    before(() => {
        return new Builder().forBrowser('chrome').build().then(d => {
            driver = d;
            googlesearchpage = require('../pageobjects/googlehomepage')(driver);
        });
    });

    it('example',async function() {
        await googlesearchpage.navigate();
        await googlesearchpage.searchfor('Selenium');

    });

    after(()=>driver.quit());
});

