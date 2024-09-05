// Variáveis do Placar
let vitoriasJogador = 0;
let vitoriasComputador = 0;
let empates = 0;

// Função que inicia o jogo 
function jogar(escolhaJogador) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

    document.getElementById('movimento-jogador').innerText = `Você escolheu: ${escolhaJogador}`;
    document.getElementById('movimento-computador').innerText = `O computador escolheu: ${escolhaComputador}`;

    const resultado = verificarResultado(escolhaJogador, escolhaComputador);
    document.getElementById('resultado-jogo').innerText = resultado;

    atualizarPlacar(resultado);
}

// Função que verifica quem venceu a rodada
function verificarResultado(jogador, computador) {
    if (jogador === computador) {
        return 'Empate!';
    } else if (
        (jogador === 'pedra' && computador === 'tesoura') ||
        (jogador === 'papel' && computador === 'pedra') ||
        (jogador === 'tesoura' && computador === 'papel')
    ) {
        return 'Você venceu!';
    } else {
        return 'Você perdeu!';
    }
}

// Função que atualiza o placar com base no resultado
function atualizarPlacar(resultado) {
    if (resultado === 'Você venceu!') {
        vitoriasJogador++;
        document.getElementById('vitorias-jogador').innerText = vitoriasJogador;
    } else if (resultado === 'Você perdeu!') {
        vitoriasComputador++;
        document.getElementById('vitorias-computador').innerText = vitoriasComputador;
    } else {
        empates++;
        document.getElementById('empates').innerText = empates;
    }
}
