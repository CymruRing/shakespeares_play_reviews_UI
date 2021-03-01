// const puppet = require('puppeteer');
// const compURL = 'http://localhost:3000/';

// let page;
// let browser;
// const width = 1920;
// const height = 1080;

// beforeAll(async () => {
//   browser = await puppet.launch ({
//     headless: false,
//     slowMo: 80,
//     args: [`--window-size=${width}, ${height}`]
//   });
//   page = await browser.newPage();
//   await page.setViewport({width, height});
// });

// afterAll(() => {
//   browser.close();
// });

// describe('Test page title is as intended', () => {
//   test("Page Title is Shakespeare's Play Reviews", async () => {
//     const title = await page.title();
//     console.log(title);
//     expect(title).toBe("Shakespeare's Play Reviews");
//   });
// });

// describe('Test that reviews are sorted correctly for given order', () => {  
//   beforeEach(async() => {
//     await page.goto(compURL, {waitUntil: 'networkidle2'});
//   });

//   test('Newest to Oldest', async() => {
//     // ...
//   })
//   test('Oldest to Newest', async() => {
//     // ...
//   })
//   test('Highest to Lowest', async() => {
//     // ...
//   })
//   test('Lowest to Highest', async() => {
//     // ...
//   })
// })

// Tests only with jest

import React from 'react';

describe('Test jest working.', () => {
  test('Working', async() => {})
});