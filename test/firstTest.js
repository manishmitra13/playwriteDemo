
const { webkit, chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({headless:false, slowMo:100});
  const page = await browser.newPage();
  await page.goto(`https://woolworths.com.au`);
  await browser.close();
})();