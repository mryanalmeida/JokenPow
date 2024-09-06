let vitoriasJogador = 0;
let vitoriasComputador = 0;
let empates = 0;

function jogar(escolhaJogador) {
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolhaComputador = opcoes[Math.floor(Math.random() * 3)];

    document.getElementById('movimento-jogador').innerText = `Você escolheu: ${escolhaJogador}`;
    document.getElementById('movimento-computador').innerText = `O computador escolheu: ${escolhaComputador}`;

    let resultado = '';

    if (escolhaJogador === escolhaComputador) {
        resultado = 'Empate!';
        empates++;
    } else if (
        (escolhaJogador === 'pedra' && escolhaComputador === 'tesoura') ||
        (escolhaJogador === 'papel' && escolhaComputador === 'pedra') ||
        (escolhaJogador === 'tesoura' && escolhaComputador === 'papel')
    ) {
        resultado = 'Você venceu!';
        vitoriasJogador++;
    } else {
        resultado = 'O computador venceu!';
        vitoriasComputador++;
    }

    document.getElementById('resultado-jogo').innerText = resultado;
    atualizarPlacar();
}

function atualizarPlacar() {
    document.getElementById('vitorias-jogador').innerText = vitoriasJogador;
    document.getElementById('vitorias-computador').innerText = vitoriasComputador;
    document.getElementById('empates').innerText = empates;
}

function resetarPagina() {
    document.getElementById('movimento-jogador').innerText = '';
    document.getElementById('movimento-computador').innerText = '';
    document.getElementById('resultado-jogo').innerText = '';
}

function reiniciarPlacar() {
    vitoriasJogador = 0;
    vitoriasComputador = 0;
    empates = 0;
    atualizarPlacar();
}
