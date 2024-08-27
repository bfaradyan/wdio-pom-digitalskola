import { $, expect } from '@wdio/globals'
import Page from "./page";

class cartPage extends Page {
    
    get cartItem() {
        return $('.cart_item');
    }
    

    async itemInCartValidate(){
        await expect(this.cartItem).toBeDisplayed();
    }

    open () {
        return super.open('cart.html');
    }
}


export default new cartPage();