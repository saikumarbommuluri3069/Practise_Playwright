import {test as base ,expect} from '@playwright/test'

import { LaunchPage } from '../Pages/LaunchPage'

import { GiftCardPage } from '../Pages/GiftCardPage';
import { CliqCarePage } from '../Pages/CliqCarePage';

type Myfixture=
{
    launchPage : LaunchPage;
    giftCard : GiftCardPage;
    cliqCare : CliqCarePage;
};


export const  test = base.extend<Myfixture>
({
    launchPage: async ({ page }, use) => {

        

        await use(new LaunchPage(page));

    },

  


    giftCard : async({page},use) =>
    {
        
        await use(new GiftCardPage(page));
    },


    cliqCare : async({page},use) =>

        {
            await use(new  CliqCarePage(page));
        }



});

export { expect };