export default class ServicoDePagamento {
    #pagamentos //propriedade privada para armazenar os pagamentos

    constructor() { // Primeiro método a ser executado quando usar a Classe
        this.#pagamentos = [];
    }

    pagar(codigoBarras, empresa, valor) { //método para guardar um pagamento
        let categoria;

        if (valor > 100.00) {
        categoria = 'cara';
        } else {
        categoria = 'padrão';
        }

        const pagamento = {
        codigoBarras: codigoBarras,
        empresa: empresa,
        valor: valor,
        categoria: categoria
        };

        this.#pagamentos.push(pagamento);
    }

    consultarUltimoPagamento() { //método para consultar o último pagamento

        const ultimoPagamento = this.#pagamentos.at(-1);

        return ultimoPagamento;
    };
};


