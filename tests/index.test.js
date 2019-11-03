import puppeteer from 'puppeteer';
import { setDefaultOptions } from 'expect-puppeteer';

const { PORT } = process.env;
const url = `http://localhost:${PORT}`;
const timeout = 30 * 1000;
setDefaultOptions({ timeout });

describe('Photoalbum', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 100,
      defaultViewport: {
        height: 768,
        width: 1024,
        deviceScaleFactor: 1,
      }
    });
    page = await browser.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    console.log('seems navigated');
  }, timeout);

  afterAll(async () => {
    await browser.close();
  });

  it('Redirects to login page', async () => {
    await expect(page.url()).toBe(`${url}/login`);
    await expect(page).toMatchElement('form#login-form');
  }, timeout);

  it('Tries to log in', async () => {
    await expect(page).toFillForm('form#login-form', {
      nickname: 'some nickname',
      password: 'some password',
    });

    await expect(page).toClick('button', { text: 'Log in' });

    await expect(page).toMatch('User not found');
  }, timeout);
});
