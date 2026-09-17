// RF01 - Registro do corredor

const nome = "Rafael Carlos"
const idade = 21
const categoria = "comum"
const possuiInscricao = true
const suspenso = false
const valorInscricao = 90
const valorPago = 90

// RF02 - Verificação da idade mínima

let idadeStatus;

if (idade >= 18) {
    idadeStatus = "Idade permitida"
} else {
    idadeStatus = "Idade não permitida"
}

// RF03 - Verificação do nível de acesso

let nivelAcesso;

if (categoria === "organizador" || categoria === "staff") {
    nivelAcesso = "Acesso administrativo liberado"
} else {
    nivelAcesso = "Acesso comum"
}
let acessoStatus;
// RF04 - Verificação da retirada do kit
if (idade >= 18 && possuiInscricao === true && !suspenso) {
    acessoStatus = "Retirada de kit liberada"
} else {
    acessoStatus = "Retirada de kit negada"
}

// RF05 - Verificação do pagamento
let pagamentoStatus;

if (valorPago >= valorInscricao) {
    pagamentoStatus = "Pagamento aprovado"
} else {
    pagamentoStatus = "Pagamento insuficiente"
}
// RF06 - Cálculo do troco
let troco

if (valorPago >= valorInscricao) {
    troco = valorPago - valorInscricao;
} else {
    troco = 0
}
// RF07 - Verificação da situação final da corrida
let statusCorrida

if (acessoStatus === "Retirada de kit liberada" && pagamentoStatus === "Pagamento aprovado") {
    statusCorrida = "Participação na corrida confirmada"
} else {
    statusCorrida = "Participação na corrida não confirmada"
}


// RF08 - Resumo

const resumo = `
===== RESUMO DA CORRIDA =====
Nome: ${nome}
Categoria: ${categoria}
Nível de acesso: ${nivelAcesso}
Valor da inscrição: R$ ${valorInscricao}
Valor pago: R$ ${valorPago}
Troco: R$ ${troco}
Situação do acesso: ${acessoStatus}
Situação do pagamento: ${pagamentoStatus}
Situação final: ${statusCorrida}
==============================
`
// Exportação para os testes

module.exports = {
    nome,
    idade,
    categoria,
    possuiInscricao,
    suspenso,
    valorInscricao,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusCorrida,
    resumo
}
