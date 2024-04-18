import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.jumia.ug/');
  await page.getByRole('button', { name: 'newsletter_popup_close-cta' }).click();
  await page.locator('label').filter({ hasText: 'Account' }).getByRole('img').nth(1).click();
  await page.getByRole('link', { name: 'My Account' }).click();
  await page.goto('https://my.jumia.ug/interaction/m_7phzdH_HLWx68_UmjuM/en-ug/identification');
  await page.locator('#input_identifierValue').fill('0701263898');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.frameLocator('iframe[title="Widget containing a Cloudflare security challenge"]').getByLabel('Verify you are human').check();
  await page.frameLocator('iframe[title="Widget containing a Cloudflare security challenge"]').getByLabel('Verify you are human').check();
  await page.frameLocator('iframe[title="Widget containing a Cloudflare security challenge"]').getByLabel('Verify you are human').check();
  await page.locator('div').filter({ hasText: 'Send OTP' }).nth(3).click();
});