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
//Função principal de cadastro de vinho
function cadastrarVinho() {

    //entrada de dados do vinho
  const vinho = prompt('Insira o nome do vinho:');
  const tipo = prompt('Insira o tipo do vinho (tinto, branco, rosé):');
  
  //recebe a safra e valida
  let safra = Number(prompt('Insira a safra do vinho:'));
  while (!validarNumero(safra)) {
    safra = Number(prompt(`Safra inválida. Digite novamente:`));
  }

  //recebe o estoque e valida
  let estoque = Number(prompt('Insira a quantidade em estoque:'));
    while (!validarNumero(estoque)) {
        estoque = Number(prompt(`Quantidade inválida. Digite novamente:`));
    }

    //demais entradas
  let valorCusto = Number(prompt('Insira o valor de custo do vinho:'));
  const valorVenda = Number(prompt('Insira o valor de venda do vinho:'));
  const despesasVariaveis = Number(prompt('Insira as despesas variáveis:'));

  //cálculos de lucro
  const lucroBruto = valorVenda - valorCusto;
  const lucroLiquido = lucroBruto - (despesasVariaveis / estoque);

  //classificação do vinho
  const classificacao = classificarVinho(safra);

  //verifica se o estoque está baixo
  verificarEstoque(estoque);

  //verifica se a safra é a mais antiga encontrada
  if (safra < safraMaisAntiga) {
    safraMaisAntiga = safra;
    vinhoMaisAntigo = vinho;
  }  

  //exibição no console dos dados do vinho cadastrado
  console.log('---- CADASTRO DE VINHO ----');
  console.log(`Vinho: ${vinho}`);
  console.log(`Tipo: ${tipo}`);
  console.log(`Safra: ${safra}`);
  console.log(`Classificação: ${classificacao}`);
  console.log(`Estoque: ${estoque}`);
  console.log(`Valor de Custo: ${valorCusto}`);
  console.log(`Valor de Venda: ${valorVenda}`);
  console.log(`Lucro Bruto: ${lucroBruto}`);
  console.log(`Lucro Líquido: ${lucroLiquido}`);

  //confirmação de cadastro para o usuário
  alert(`Vinho ${vinho} cadastrado com sucesso!`);

  //incrementa o contador global de total de cadastros
  totalCadastros++;
}

//Execução do sistema
//espera a página carregar antes de iniciar
window.addEventListener("load", () => { 
    //pequeno atraso para garantir que a página carregue antes dos prompts
  setTimeout(() => {
  let continuar = `s`;
  //loop principal do sistema
  while (continuar == `s`) {
    cadastrarVinho();
    //pergunta se o usuário deseja continuar
    continuar = prompt(`Deseja cadastrar outro vinho? (s/n)`);
  }
  //exibe o resumo final
  alert(`
    Total de vinhos cadastrados: ${totalCadastros}
    Estoque baixo: ${estoqueBaixo}
    Vinho mais antigo: ${vinhoMaisAntigo} (safra ${safraMaisAntiga})
  `);
   }, 1000);//tempo para evitar travamento visual
});