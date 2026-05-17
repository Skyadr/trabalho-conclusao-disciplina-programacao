import ServicoDePagamento from '../src/ServicoDePagamento.js';
import assert from 'node:assert';

describe('Testes para consultar pagamentos do Servico De Pagamento', function() {
    describe('Testando a classe que consulta os ultimos pagamentos', function() {
        it('deve criar um pagamento com categoria "cara" quando valor > 100.00', function() {
            // Arrange
            const servico = new ServicoDePagamento();
            const codigoBarras = '0987-7656-3475';
            const empresa = 'Samar';
            const valor = 100.01;

            // Act
            servico.pagar(codigoBarras, empresa, valor);

            // Assert
            const ultimoPagamento = servico.consultarUltimoPagamento();
            assert.equal(ultimoPagamento.codigoBarras, codigoBarras);
            assert.equal(ultimoPagamento.empresa, empresa);
            assert.equal(ultimoPagamento.valor, valor);
            assert.equal(ultimoPagamento.categoria, 'cara');
        });

        it('deve criar um pagamento com categoria "padrão" quando valor < 100.00', function() {
            // Arrange
            const servico = new ServicoDePagamento();
            const codigoBarras = '1234-5678-9012';
            const empresa = 'Empresa X';
            const valor = 99.99;

            // Act
            servico.pagar(codigoBarras, empresa, valor);

            // Assert
            const ultimoPagamento = servico.consultarUltimoPagamento();
            assert.equal(ultimoPagamento.codigoBarras, codigoBarras);
            assert.equal(ultimoPagamento.empresa, empresa);
            assert.equal(ultimoPagamento.valor, valor);
            assert.equal(ultimoPagamento.categoria, 'padrão');
        });

        it('deve criar um pagamento com categoria "padrão" quando valor é igual a 100.00', function() {
            // Arrange
            const servico = new ServicoDePagamento();
            const codigoBarras = '9999-8888-7777';
            const empresa = 'Empresa Y';
            const valor = 100.00;

            // Act
            servico.pagar(codigoBarras, empresa, valor);

            // Assert
            const ultimoPagamento = servico.consultarUltimoPagamento();

            assert.equal(ultimoPagamento.codigoBarras, codigoBarras);
            assert.equal(ultimoPagamento.empresa, empresa);
            assert.equal(ultimoPagamento.valor, valor);
            assert.equal(ultimoPagamento.categoria, 'padrão');
        });
    });
});
