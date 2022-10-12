// require('chromedriver');
// const assert = require('assert');
// const { Builder, By } = require('selenium-webdriver');

// describe('Page changing workflow', function () {
//     let driver;

//     before(async function () {
//         driver = await new Builder().forBrowser('chrome').build();
//     });

//     it('goes to central page', async function () {
//         await driver.get('http://localhost:3000');
//         await driver.findElement(By.className('central')).click();
//     });
//     after(() => driver && driver.quit());
// });