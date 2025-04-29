export class RegisterPage
{
    webLocators=
    {
        firstnameInput:'#input-firstname',
        lastnameInput:'#input-lastname',
        emailInput:'#input-email',
        telephoneInput:'#input-telephone',
        pwdInput:'#input-password',
        pwdconfirmInput:'#input-confirm',
        subscribeButton:'input[name="newsletter"]',
        policyCheckBox:'input[type="checkbox"][name="agree"]',
        continueButton:'input[type="submit"][value="Continue"]',   
        
   }
   openURL()
   {
    cy.visit(Cypress.env('URL'))
   }
   enterFirstName(firstname)
   {
    cy.get(this.webLocators.firstnameInput).type(firstname);
   }
   enterLastName(lastname)
   {
    cy.get(this.webLocators.lastnameInput).type(lastname);
   }
   enterEmail(email)
   {
    cy.get(this.webLocators.emailInput).type(email);
   }
   enterTelephone(telephone)
   {
    cy.get(this.webLocators.telephoneInput).type(telephone);
   }
   enterPassword(pwd)
   {
    cy.get(this.webLocators.pwdInput).type(pwd);
   }
   enterPasswordCofirm(pwd)
   {
    cy.get(this.webLocators.pwdconfirmInput).type(pwd);

   }
   subscribe(newsletter)
   {
    cy.get(this.webLocators.subscribeButton).check(newsletter);
   }
  checkPolicy() {
    cy.get(this.webLocators.policyCheckBox).check();
  }

  submitForm() {
    cy.get(this.webLocators.continueButton).click();
  }
}
