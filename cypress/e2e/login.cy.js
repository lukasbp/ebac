/// <reference types="cypress"/>
const perfil = require('../fixtures/perfil.json')

context('Funcionalidade Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@teste.com')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuario e senha errados', () => {
        cy.get('#username').type('bolsonaro@hotmail.com')
        cy.get('#password').type('teste@teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')
    })

    it('Deve exibir uma mensagem de erro ao inserir senha errados', () => {
        cy.get('#username').type('aluno_ebac@teste.com')
        cy.get('#password').type('teste@testeaaaa')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error').should('contain', 'a senha fornecida')
    })

    it('Deve fazer login com sucesso - Usando arquivos de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()

        cy.get('.page-title').should('contain', 'Minha conta')
    });

    it('Deve fazer login com sucesso - Usando fixture', () =>{
        cy.fixture('perfil').then(dados =>{
            cy.get('#username').type(perfil.usuario)
            cy.get('#password').type(perfil.senha, {log:false})
            cy.get('.woocommerce-form > .button').click()

            cy.get('.page-title').should('contain', 'Minha conta')
        })
    })


})