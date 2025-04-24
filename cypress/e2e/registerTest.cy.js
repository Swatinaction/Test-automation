import { RegisterPage } from "../Pages/registerPage";
const objregisterPage= new RegisterPage();
import registerPageData from "../fixtures/registerPageData.json"
describe('User Registration',()=>
    {

    
        it('should load the registration page',()=>{
        objregisterPage.openURL()
        cy.url().should('include','/register')
        cy.title().should('eq','Register Account')
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
        } )

        it('should be able to register',()=>{
            const timestamp= Date.now()
            const overrideEmail= `testUser_${timestamp}@gmail.com`
            registerPageData.email=overrideEmail
            objregisterPage.openURL()
            objregisterPage.enterFirstName(registerPageData.firstname)
            objregisterPage.enterLastName(registerPageData.lastname)
            objregisterPage.enterEmail(registerPageData.email)
            objregisterPage.enterTelephone(registerPageData.telephone)  
            objregisterPage.enterPassword(registerPageData.pwd)
            objregisterPage.enterPasswordCofirm(registerPageData.pwd)
            objregisterPage.subscribe(registerPageData.newsletter)
            objregisterPage.checkPolicy()
            objregisterPage.submitForm() 
            cy.log(`your account is created with email ${overrideEmail} and ${registerPageData.pwd}`)


    })

})
