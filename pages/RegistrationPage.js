class RegistrationPage {
    constructor(page) {
        this.page = page;
        this.frame = page.frameLocator('iframe[name="framelive"]');
    
    }
    async startRegistration(){
        await this.frame.getByRole('link', {name: 'No account? Create one here'}).click();

    }
    async fillForm(userData){
        await this.frame.getByRole('radio', {name:'Mr.'}).check();
        await this.frame.getByRole('textbox', {name: 'First name'}).click();
        await this.frame.getByRole('textbox', {name: 'First name'}).fill(userData.firstName);
        await this.frame.getByRole('textbox',{name:'Last name'}).click();
        await this.frame.getByRole('textbox',{name:'Last name'}).fill(userData.lastName);
        
        await this.frame.getByRole('textbox', {name: 'Email'}).click();
        await this.frame. getByRole('textbox',{name: 'Email'}).fill(userData.email);
        await this.frame.getByRole('textbox', {name: 'Password input'}).click();
        await this.frame.getByRole('textbox', {name: 'Password input'}).fill(userData.password);
        await this.frame.getByRole('textbox', {name: 'Birthdate'}).click();
        await this.frame.getByRole('textbox', {name: 'Birthdate'}).fill(userData.birthDate);

        const checkboxes = await this.frame.getByRole('checkbox').all();
        for(const checkbox of checkboxes) {
            await checkbox.check();
        }
        
    }
    async submit(){
        await this.frame.getByRole('button', {name: 'Save'}).click();
    }
    


    }

    module.exports = RegistrationPage;













