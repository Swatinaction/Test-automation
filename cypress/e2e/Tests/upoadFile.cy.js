describe('Upload filetest',()=>{
it('test for upload',()=>
       {   
        cy.visit('https://www.ilovepdf.com/pdf_to_word')
        cy.fixture('test.pdf').as('aliaspdf')
        cy.get('#pickfiles').selectFile('aliaspdf')

    })


})