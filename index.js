// Saldo inicial da conta
let saldo = 1000;

// Array para armazenar o histórico de transações
const historicoTransacoes = [];

// Função para exibir o menu e coletar a ação do usuário
function exibirMenu() {
//   alert("Bem-vindo ao Sistema de Conta Bancária! Escolha uma opção:");
//   alert("1. Depositar");
//   alert("2. Sacar");
//   alert("3. Ver Saldo");
//   alert("4. Ver Histórico de Transações");
//   alert("5. Sair");

  const escolha = prompt(`Digite o número da opção desejada:
  1. Depositar
  2. Sacar
  3. Ver Saldo
  4. Ver histórico de transações
  5.Sair`);

  switch (escolha) {
    case "1":
      depositar();
      break;
    case "2":
      sacar();
      break;
    case "3":
      verSaldo();
      break;
    case "4":
      verHistoricoTransacoes();
      break;
    case "5":
      alert("Obrigado por usar nosso sistema. Adeus!");
      return; // Encerra o programa
    default:
      alert("Opção inválida. Tente novamente.");
      break;
  }

  // Recursivamente exibe o menu novamente após cada ação
  exibirMenu();
}

// Função para realizar um depósito
function depositar() {
  const valor = parseFloat(prompt("Digite o valor a ser depositado:"));

  if (isNaN(valor) || valor <= 0) {
    alert("Valor inválido. O depósito não foi realizado.");
    return;
  }

  saldo += valor;
  historicoTransacoes.push({ tipo: "Depósito", valor, data: new Date() });
  alert(`Depósito de $${valor} realizado com sucesso.`);
}

// Função para realizar um saque
function sacar() {
  const valor = parseFloat(prompt("Digite o valor a ser sacado:"));

  if (isNaN(valor) || valor <= 0 || valor > saldo) {
    alert("Valor inválido ou saldo insuficiente. O saque não foi realizado.");
    return;
  }

  saldo -= valor;
  historicoTransacoes.push({ tipo: "Saque", valor, data: new Date() });
  alert(`Saque de $${valor} realizado com sucesso.`);
}

// Função para verificar o saldo atual
function verSaldo() {
  alert(`Saldo atual: $${saldo}`);
}

// Função para ver o histórico de transações
function verHistoricoTransacoes() {
  alert("Histórico de Transações:");
  for (const transacao of historicoTransacoes) {
    alert(`- ${transacao.tipo}: $${transacao.valor} em ${transacao.data}`);
  }
}

// Inicializa o programa exibindo o menu
exibirMenu();
