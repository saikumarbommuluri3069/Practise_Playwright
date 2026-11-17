
import { test, expect } from '../fixtures/PageFixtures';

const Url_of_the_application: string = 'https://www.tatacliq.com/';

test.beforeEach('Launching Tata CLiQ URL', async ({ page }) => {
    await page.goto(Url_of_the_application);
});

test('Verify Launch Page', { tag: ['@p1', '@smoke'] }, async ({ launchPage }) => {

    const pageTitle = 'Online Fashion & Lifestyle Shopping for Women, Men & Kids in India - Tata CLiQ';

    await launchPage.verifyPageTitle(pageTitle);
});

test('Verify shirt link in Launch Page', { tag: ['@p2', '@smoke'] }, async ({ launchPage }) => {

    await launchPage.clickShirtMenLink();

});

test('Verify westernwear link in Launch Page', { tag: ['@p3', '@smoke'] }, async ({ launchPage }) => {

    await launchPage.clickWesterenWare();

});

test('Verify indianwear link in Launch Page', async ({ launchPage }) => {

    await launchPage.clickIndianWare();

});

test('Verify GiftCard Link', async ({ launchPage }) => {

    await launchPage.clickGiftCard();

});

test.afterEach('screenshot', async ({ page }, testInfo) => {

    const screenshot = await page.screenshot({
        animations: 'disabled',
        fullPage: true
    });

    await testInfo.attach(`${testInfo.title}-screenshot`, {
        body: screenshot,
        contentType: 'image/png'
    });

});
