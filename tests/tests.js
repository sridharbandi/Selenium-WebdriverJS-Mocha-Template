import "chromedriver";
import {assert} from 'chai';
import {Builder, By, until} from "selenium-webdriver";
{describe, before, after, it} import "selenium-webdriver/testing";

describe('Google Search', function() {
    let driver;
    let googlesearchpage;
    let searchresultspage;
    this.timeout(50000);

    before(() => {
        return new Builder().forBrowser('chrome').build().then(d => {
            driver = d;
            googlesearchpage = require('../pageobjects/googlehomepage')(driver);
            searchresultspage = require('../pageobjects/searchresultspage')(driver);
        });
    });

    it('Google Search Test',async function() {
        await googlesearchpage.navigate();
        await googlesearchpage.searchfor('Selenium');
        await searchresultspage.waitUntilPageLoaded();
        assert.isTrue( await searchresultspage.assertlinkpresent(),'Selenium Link Present');
    });

    after(()=>driver.quit());
});

