import {test,expect,Locator, Page} from '@playwright/test'

export class LaunchPage
{
    readonly page: Page;
    readonly MenShirtLink: Locator;
    readonly westernWare : Locator;
    readonly indianWare : Locator;
    readonly giftCard : Locator;
    readonly cliqCare : Locator;
    readonly noThanks : Locator;
   


    constructor(page:Page)
    {
        this.page = page;
        this.MenShirtLink= page.locator("xpath=(.//*[@style='text-decoration: none; color: inherit;'])[4]");
        this.westernWare = page.locator("xpath=(.//*[@style='text-decoration: none; color: inherit;'])[1]");
        this.indianWare = page.locator("xpath=(.//*[@style='text-decoration: none; color: inherit;'])[2]");
        this.giftCard = page.getByRole('button',{name:'Gift Card',exact:true});

        this.cliqCare = page.getByLabel('CLiQ Care',{exact:true});
        this.noThanks = page.locator('#moe-dontallow_button');

    }


    async verifyPageTitle( expectedTitle : string)

    {
 

        let actualTitle =  await this.page.title();

      await  expect(this.page).toHaveTitle(expectedTitle);
    

    };

    async clickShirtMenLink()
    {

        await this.MenShirtLink.click();
       console.log(this.page.title());
    };

    async clickWesterenWare()
    {
        await this.westernWare.click();
        console.log(this.page.title());


    };

    async clickIndianWare()
    {
        await this.indianWare.click();
        console.log(this.page.title());
    }

    async clickGiftCard()
    {
        await this.giftCard.click();
        console.log(this.page.title());
    }

    async clickCliqCare()
    {
        await this.cliqCare.click();
    }

    async verifyPageUrl(expectedUrl : string)
    {
        await expect(this.page).toHaveURL(expectedUrl);
    }

    async clickNoThanks()
    {
        await this.noThanks.click();
    }


}