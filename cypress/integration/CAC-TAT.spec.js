
/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function() {
        cy.visit('./src/index.html')
    })

    it('verifica o título da aplicação', function() {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })
  
    it('Preenche os campos obrigatórios e envia o formulário', function(){
        const longText = 'Teste, Teste, Teste, Teste, Teste, Teste, Teste, Teste,Teste, Teste, Teste, Teste'

        cy.get('#firstName').type('Leonardo')
        cy.get('#lastName').type('Leão')
        cy.get('#email').type('email@hotmail.com')
        cy.get('#open-text-area').type(longText, {delay: 0})
        cy.get('button[type="submit"]').click()

        cy.get('.success').should('be.visible')
    })

    //it.only('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){
        //cy.get('#firstName').type('Leonardo')
        //cy.get('#lastName').type('Leão')
        //cy.get('#open-text-area').type('teste')
        //cy.get('button[type="submit"]').click()

        //cy.get('.error').should('be.visible')
    //})

    it.only('erro telefone', function(){

        cy.get('#phone').type('teste')
        cy.get('#phone').should('be.empty')
    })
})