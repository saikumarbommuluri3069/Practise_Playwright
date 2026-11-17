import {test , expect} from '../fixtures/pageFixtures';

const Url_of_the_application: string = 'https://www.tatacliq.com/';
const cliqCareUrl : string ='https://www.tatacliq.com/my-account/cliq-care';

test.beforeEach('Launching Tata CLiQ URL', async ({ page }) => {
    await page.goto(Url_of_the_application);
});

 test('verify cliq care page', async({cliqCare,launchPage})=>
 {
     await launchPage.clickCliqCare();
    await launchPage.verifyPageUrl(cliqCareUrl);
   
 });

test('verify cliq care-offerpromotions page', async({cliqCare,launchPage})=>
{
    await launchPage.clickCliqCare();

    await launchPage.clickNoThanks();
    
    await cliqCare.clickOffers_Promotions();
   
});



test.afterEach('screeshot', async({page}, testInfo)=>
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