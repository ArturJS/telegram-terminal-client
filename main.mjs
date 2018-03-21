import puppeteer from 'puppeteer';

(async() => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // see also https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagegotourl-options
    await page.goto('https://web.telegram.org/#/login', {
        waitUntil : 'networkidle0'
    });
    await page.screenshot({path: 'example-telegram-login.png'});

    await browser.close();
})();
