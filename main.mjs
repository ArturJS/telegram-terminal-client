import puppeteer from 'puppeteer';

const sleep = async (delay) => {
    return new Promise(resolve => {
        setTimeout(resolve, delay);
    });
};

(async()=>{
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://web.telegram.org/#/login');
    // todo: solve the problem when we need to wait manually for page load
    await sleep(5000); 
    await page.screenshot({path: 'example-telegram-login.png'});

    await browser.close();
})();
