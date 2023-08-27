/// <reference types="cypress"/>

import enderecoPage from "../support/page-objects/endereco-page";
const dadosEndereco = require('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
        })
    });

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        enderecoPage.editarEnderecoFaturamento('bundas', 'sujas', 'cds', 'brasil', 'jose atizano', '331', 'cornelio procopio', 'parana', '86300000', '43998082841', 'bundassujas@gmail.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
    })

    it('Deve fazer cadastro de faturamento com sucesso - usando arquivo de dados', () => {
        enderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].rua,
            dadosEndereco[1].numero,
            dadosEndereco[1].estado,
            dadosEndereco[1].cidade,
            dadosEndereco[1].cep,
            dadosEndereco[1].celular,
            dadosEndereco[1].email
        )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
    })
});