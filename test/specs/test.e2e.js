import LoginPage from '../pageobjects/login.page.js'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import cartPage from '../pageobjects/cart.page.js'

describe('Test Suite for saucedemo.com', () => {
    it('Test 1 - Login with Valid Credential', async () => {
        
        await LoginPage.open()
        await LoginPage.login('standard_user', 'secret_sauce')

        await homePage.homePageValidate()
    })

    it('Test 2 - Login with Invalid Credential', async () => {
        
        await LoginPage.open()
        await LoginPage.login('standard_user', 'wrongsauce')

        await loginPage.wrongCredentialValidate()
    })

    it('Test 3 - Add Item to Cart', async () => {
        
        await homePage.open()
        await homePage.addItemToCart()

        await cartPage.open()
        await cartPage.itemInCartValidate()
    })
})