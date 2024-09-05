// Variáveis do Placar
let vitoriasJogador = parseInt(localStorage.getItem('vitoriasJogador')) || 0;
let vitoriasComputador = parseInt(localStorage.getItem('vitoriasComputador')) || 0;
let empates = parseInt(localStorage.getItem('empates')) || 0;

// Atualiza o placar na tela ao carregar a página
document.getElementById('vitorias-jogador').innerText = vitoriasJogador;
document.getElementById('vitorias-computador').innerText = vitoriasComputador;
document.getElementById('empates').innerText = empates;

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
        localStorage.setItem('vitoriasJogador', vitoriasJogador);
        document.getElementById('vitorias-jogador').innerText = vitoriasJogador;
    } else if (resultado === 'Você perdeu!') {
        vitoriasComputador++;
        localStorage.setItem('vitoriasComputador', vitoriasComputador);
        document.getElementById('vitorias-computador').innerText = vitoriasComputador;
    } else {
        empates++;
        localStorage.setItem('empates', empates);
        document.getElementById('empates').innerText = empates;
    }
}

function resetarPagina() {
    // Recarrega a página sem resetar o placar
    location.reload(); 
}

// Função para resetar o placar completamente (se desejado)
function resetarPlacar() {
    localStorage.clear(); // Limpa os dados armazenados
    vitoriasJogador = 0;
    vitoriasComputador = 0;
    empates = 0;
    document.getElementById('vitorias-jogador').innerText = vitoriasJogador;
    document.getElementById('vitorias-computador').innerText = vitoriasComputador;
    document.getElementById('empates').innerText = empates;
}
