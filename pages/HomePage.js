class HomePage{

    constructor(page){
        this.page = page;
        this.frame = page.frameLocator('iframe[name="framelive"]');
    }
     
    async naviagate(){
        await this.page.goto('https://demo.prestashop.com/#/en/front');
    
    }
     async clickSignIn(){
        await this.frame.locator('a[title="Log in to your customer account"] span.hidden-sm-down').click();

     }
    }

    module.exports = HomePage;












