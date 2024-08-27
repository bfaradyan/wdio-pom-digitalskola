import { $, expect } from '@wdio/globals'
import Page from "./page";

class homePage extends Page {
    
    get productImage() {
        return $('.inventory_item_img');
    }
    
    get addToCartBtn() {
        return $('.btn_inventory');
    }
    
    get shoppingCartBtn() {
        return $('#shopping_cart_container');
    }
    
    async addItemToCart() {
        await this.addToCartBtn.click();
    }

    async homePageValidate() {
        await expect(this.addToCartBtn).toBeExisting();
        await expect(this.productImage).toBeExisting();
        await expect(this.shoppingCartBtn).toBeExisting();
    }

    open () {
        return super.open('inventory.html');
    }
}


export default new homePage();