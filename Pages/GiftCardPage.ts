import { Locator, Page, expect } from '@playwright/test';

export class GiftCardPage {
  readonly page: Page;
  readonly sendOrRedeemGiftCardLink: Locator;
  readonly mobileNumber : Locator;

  constructor(page: Page) {
    this.page = page;
    
    this.sendOrRedeemGiftCardLink = page.getByRole('link', { name: 'Send or Redeem a Gift Card' });
    this.mobileNumber = page.locator('#mobileNumber');
  }

  async clickSendOrRedeemGiftCardLink() {
    await this.sendOrRedeemGiftCardLink.click();

    this.page.waitForLoadState('domcontentloaded');
  
    await expect(this.mobileNumber.isVisible);


  }
};