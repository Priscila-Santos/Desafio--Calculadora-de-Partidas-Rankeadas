// Instruções para entrega
//  # 2️⃣ Calculadora de partidas Rankeadas
// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções

// ## Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**"
 
let saldoDeVitorias = 112;
let nivelDoJogador;

if(saldoDeVitorias < 10){
    nivelDoJogador = "Ferro";
} else if(saldoDeVitorias >= 10 && saldoDeVitorias <= 20) {
    nivelDoJogador = "Bronze";
} else if(saldoDeVitorias >= 21 && saldoDeVitorias <= 50) {
    nivelDoJogador = "Prata";       
} else if(saldoDeVitorias >= 51 && saldoDeVitorias <= 80) {
    nivelDoJogador = "Ouro";
} else if(saldoDeVitorias >= 81 && saldoDeVitorias <= 90) {
    nivelDoJogador = "Diamante";
} else if(saldoDeVitorias >= 91 && saldoDeVitorias <= 100) {
    nivelDoJogador = "Lendário";
} else {
    nivelDoJogador = "Imortal";
}

console.log(`O Herói tem de saldo de ${saldoDeVitorias} está no nível de ${nivelDoJogador}`);

