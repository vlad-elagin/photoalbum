import puppeteer from 'puppeteer';
import { setDefaultOptions } from 'expect-puppeteer';
import { Client } from 'pg';

const { development: { url: dbUrl } } = require('../server/src/database/config');

const { PORT } = process.env;
const url = `http://localhost:${PORT}`;
const timeout = 30 * 1000;
setDefaultOptions({ timeout });

describe('Photoalbum', () => {
  let browser;
  let page;
  const pgClient = new Client({ connectionString: dbUrl });

  const testUser = {
    nickname: 'test nickname',
    password: 'test password',
  };

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      // slowMo: 40,
      defaultViewport: {
        height: 768,
        width: 1024,
        deviceScaleFactor: 1,
      }
    });
    page = await browser.newPage();
    await page.goto(url, { waitUntil: 'domcontentloaded' });
  }, timeout);

  afterAll(async () => {
    pgClient.connect();

    await pgClient.query('DELETE FROM users');
    await browser.close();
  }, timeout * 2);

  it('Redirects to login page', async () => {
    await expect(page.url()).toBe(`${url}/login`);
    await expect(page).toMatchElement('form#login-form');
  }, timeout);

  it('Tries to log in', async () => {
    await expect(page).toFillForm('form#login-form', testUser);
    await expect(page).toClick('button', { text: 'Log in' });
    await expect(page).toMatch('User not found');
  }, timeout);

  it('Tries to register with not matching password', async () => {
    await expect(page).toClick('label', { text: 'Register' });
    await expect(page).toMatchElement('input#password-confirm-field');
    await expect(page).toFill('input#password-confirm-field', 'some password');
    await expect(page).toClick('button', { text: 'Log in' });
    await expect(page).toMatch("Passwords don't match");
  }, timeout);

  it('Tries to register with valid credentials', async () => {
    await expect(page).toFill('input#password-confirm-field', testUser.password);
    await expect(page).toClick('button', { text: 'Log in' });
    await expect(page).toMatch("You can log in now.");
  }, timeout);

  it('Tries to log in with invalid password', async () => {
    await expect(page).not.toMatchElement('input#password-confirm-field');
    await expect(page).toFillForm('form#login-form', {
      nickname: testUser.nickname,
      password: 'wrong password',
    });
    await expect(page).toClick('button', { text: 'Log in' });
    await expect(page).toMatch("Password is incorrect");
  }, timeout);

  // it('Tries to log in with valid credentials', async ())
});
