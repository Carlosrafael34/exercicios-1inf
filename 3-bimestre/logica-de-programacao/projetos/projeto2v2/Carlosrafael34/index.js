const cliente = "Henrique Souza"
const aparelho = "Fone Bluetooth"
const preco = 90
const quantidade = 2
const estoque = 8
const valorPago = 200

const subtotal = preco * quantidade
let estoqueDisponivel
if (quantidade <= estoque) {
    estoqueDisponivel = "Estoque suficiente"
} else {
    estoqueDisponivel = "Estoque insuficiente"
}
let entregaStatus
let valorEntrega

if (subtotal < 300) {
    entregaStatus = "Taxa de entrega: R$ 25"
    valorEntrega = 25
} else {
    entregaStatus = "Entrega grátis"
    valorEntrega = 0
}

const valorFinal = subtotal + valorEntrega

let pagamentoStatus
if (valorPago >= valorFinal) {
    pagamentoStatus = "Pagamento aprovado"
} else {
    pagamentoStatus = "Pagamento insuficiente"
}

let troco
if (valorPago >= valorFinal) {
    troco = valorPago - valorFinal
} else {
    troco = 0
}

let statusVenda
if (quantidade <= estoque) {
    if (valorPago >= valorFinal) {
        statusVenda = "Venda confirmada"
    } else {
        statusVenda = "Venda pendente de pagamento"
    }
} else {
    statusVenda = "Venda não pode ser confirmada por falta de estoque"
}

const resumo = `
Cliente: ${cliente}
Aparelho: ${aparelho}
Preço: R$ ${preco}
Quantidade: ${quantidade}
Estoque: ${estoque}
Subtotal: R$ ${subtotal}
Estoque: ${estoqueDisponivel}
Entrega: ${entregaStatus}
Valor da entrega: R$ ${valorEntrega}
Valor final: R$ ${valorFinal}
Valor pago: R$ ${valorPago}
Pagamento: ${pagamentoStatus}
Troco: R$ ${troco}
Situação da venda: ${statusVenda}
`

module.exports = {
    cliente,
    aparelho,
    preco,
    quantidade,
    estoque,
    valorPago,
    subtotal,
    estoqueDisponivel,
    entregaStatus,
    valorEntrega,
    valorFinal,
    pagamentoStatus,
    troco,
    statusVenda,
    resumo
}
