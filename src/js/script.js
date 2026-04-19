//Varíáveis globais

//contador total de vinhos cadastrados
let totalCadastros = 0;
//contador de vinhos com estoque baixo (menos de 5 unidades)
let estoqueBaixo = 0;

//guarda a mneor safra encontrada (começa alto propositalmente)
let safraMaisAntiga = 9999;
//guarda o nome do vinho mais antigo
let vinhoMaisAntigo = '';

//Função de validação
//verifica se o valor é um número válido e maior que zero
function validarNumero(valor) {
    return !isNaN(valor) && valor > 0;
}

//Função de estoque
//verifica se o estoque está baixo (menor que 5) e incrementa o contador
function verificarEstoque(qntd) {
    if (qntd < 5) {
        estoqueBaixo++; //soma 1 ao contador global de estoque baixo
    }
}

//Função de classificação
//classifica o vinho de acordo com a safra
function classificarVinho(safra) {
    if(safra >= 2020) return `Jovem`;
    else if(safra >= 2015) return `Amadurecido`;
    else return `Antigo`;
}
