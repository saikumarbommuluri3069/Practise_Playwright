import {test, expect} from '../fixtures/pageFixtures';

const Url_of_the_application: string = 'https://www.tatacliq.com/';
const title : string ='Online Fashion & Lifestyle Shopping for Women, Men & Kids in India - Tata CLiQ';

test.beforeEach('Launching Tata CLiQ URL', async ({ page }) => {
    await page.goto(Url_of_the_application);
});


test("launch gift card page" ,async({giftCard,launchPage})=>
{
    launchPage.clickGiftCard();
    
    await giftCard.clickSendOrRedeemGiftCardLink();
    console.log("test")
   
});


test.afterEach('screenshot', async({page}, testInfo)=>
{
    const screenshot = await page.screenshot(
        {
            animations:'disabled',
            fullPage : true,
        }
    );

    await testInfo.attach(`${test.info().title}screenshot`,
    {
        body: screenshot,
        contentType:'image/png',
    })

});