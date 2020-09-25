
const { chromium } = require('playwright');

describe('Automation BookStore', () => {
    let browser, page

    beforeAll(async () => {
        browser = await chromium.launch({ headless: true })
    });
    afterAll(async () => {
        await browser.close();
    })
    beforeEach(async () => {
        page = await browser.newPage()

    })
    afterEach(async () => {
        await page.goto('https://www.woolworths.com.au/')
    })

    it('should have title', async () => {
        await page.goto('https://www.woolworths.com.au/')
        await page.click('text=/.*Recipes.*/');
        await page.click('text=/.*Catalogue.*/');
        await page.click('text=/.*Lists.*/');

    });
})