const prompt = require("prompt-sync")()

const vendasDaSemana = []

let quantidadeVendas = Number(prompt("Quantas vendas? "))

for (let i = 0; i < quantidadeVendas; i++) {
    let venda = Number(prompt(`Venda ${i + 1}: `))
    vendasDaSemana.push(venda)
}

let menorVenda = vendasDaSemana[0]
let somaVendas = 0

for (let i = 0; i < vendasDaSemana.length; i++) {
    somaVendas += vendasDaSemana[i]

    if (vendasDaSemana[i] < menorVenda) {
        menorVenda = vendasDaSemana[i]
    }
}

console.log("Menor venda:", menorVenda)
console.log("Soma das vendas:", somaVendas)

module.exports = menorVenda
