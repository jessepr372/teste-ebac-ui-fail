/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach( () => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach( () => {
        cy.screenshot()
    })

    it('Deve fazer login com sucesso', () => {        
        cy.get('#username').type('jessepr372@gmail.com')
        cy.get('#password').type('senha123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, jessepr372 (não é jessepr372? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('testemesmo@gmail.com')
        cy.get('#password').type('senha123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('exist')
    });

    it('Deve exibir uma mensagem de erro ao exibir senha inválida', () => {
        cy.get('#username').type('jessepr372@gmail.com')
        cy.get('#password').type('senha1234')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail jessepr372@gmail.com está incorreta. Perdeu a senha?')
        cy.get('.woocommerce-error').should('exist')
    })
})