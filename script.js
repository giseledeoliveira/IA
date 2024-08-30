const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Ao realizar algumas pesquisas, você se depara com uma nova tecnologia, a Inteligencia Artificial. Ela atua na reprodução de padrões e comportamentos humanos por meio de dispositivos e programas computacionais. Qual seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Que terrivel!",
                afirmacao: "No início ficou apreencivo com a novidade."
            },
            {
                texto: "Que extraordinario!",
                afirmacao: "Ficou curioso e queria aprender mais."
            }
        ]
    },
    {
        enunciado: "Com essa inovação tão presente no dia a dia, um professor de Programação pede que você crie um projeto sobre a famosa IA . Qual atitude você tomaria?",
        alternativas: [
            {
                texto: "Realizo pesquisas para o aprofundamento do assunto, com base em pesquisas na internet.",
                afirmacao: "Conseguiu utilizar de forma fácil a IA."
            },
            {
                texto: "Escreve o trabalho com base nas conversas que teve com colegas de turma, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
                afirmacao: "Sentiu mais facilidade em utilizar seus próprios conhecimentos para escrever seu trabalho."
            }
        ]
    },
    {
        enunciado: "Após a elaboração desse projeto, o professor promove um debate para que os alunos apontem pontos positivos e negativos sobre o assunto em relação aos trabalhadores, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e aprimorar habilidades humanas.",
                afirmacao: "Vem impulsionando a inovação na área de IA e a melhorando o mercado de trabalho."
            },
            {
                texto: "Me posiciono contra. Pois, penso em quantos trabalhadores perderão seus empregos pela falta de mão de obra.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Você sabe quais são os tipos de IA?",
        alternativas: [
            {
                texto: "Ainda não conheço muito o assunto,quais são?",
                afirmacao: " Máquinas reativas, memória limitada, teoria da mente e autoconsciente."
            },
            {
                texto: "Simm, meu projeto me proporcionou uma pesquisa aprimorada sobre o assunto. Mas atualmente qual o pais que mais investem nessas tecnologias?",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "  A inteligencia Artificial possui 4 tipos, máquinas reativas, memória limitada, teoria da mente e autoconsciente.Pelo décimo segundo ano consecutivo, a Suíça é o país mais inovador do mundo, de acordo com o relatório IGI Link externo, abra em uma nova aba.  ",
        alternativas: [
            {
                texto: "Que demais!",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "Não havia pesquisado sobre isso",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
