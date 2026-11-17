
import {test,expect,Locator, Page } from '@playwright/test';

export class CliqCarePage
{
    readonly page : Page;
    readonly shopping :Locator;
    readonly offers_Promotions : Locator;
    readonly offers_Promotions_Heading : Locator;



    constructor(page:Page)
    {
        this.page = page;
        this.shopping = page.locator('.OrderRelatedIssue__faqHeader OrderRelatedIssue__colorRed');
        this.offers_Promotions = page.locator("xpath=(.//*[text()='Offers & Promotions'])[1]");
        this.offers_Promotions_Heading = page.locator("xpath=(.//*[text()='Offers & Promotions'])[2]");
    }

    async clickShopping()


    {
        await this.shopping.click();
    }

    async   clickOffers_Promotions()

    {

     
        await this.offers_Promotions.click();
        await expect(this.offers_Promotions_Heading).toBeVisible();

        await this.page.waitForTimeout(20000);
    }

}