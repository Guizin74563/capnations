const questions = [
  // FÍSICA
  {
    subject: "Física",
    question: "O que é a inércia e como ela se relaciona com a primeira lei de Newton?",
    options: [
      "A inércia é a resistência de um corpo em manter seu estado de repouso ou movimento, conforme a primeira lei de Newton.",
      "A inércia é a força que impulsiona um corpo a se mover.",
      "A inércia é a aceleração causada por uma força externa.",
      "A inércia é a quantidade de energia que um corpo possui."
    ],
    answer: "A inércia é a resistência de um corpo em manter seu estado de repouso ou movimento, conforme a primeira lei de Newton."
  },
  {
    subject: "Física",
    question: "Uma capivara cientista está testando um tobogã aquático em um parque de diversões para roedores. O tobogã tem 5 metros de altura e termina em uma piscina. Suponha que a capivara (massa = 45 kg) comece do repouso no topo do tobogã e desça sem atrito. Qual é a velocidade da capivara no final do tobogã?",
    options: [
      "A velocidade é 0 m/s.",
      "A velocidade é 10 m/s.",
      "A velocidade é 14 m/s.",
      "A velocidade é 20 m/s."
    ],
    answer: "A velocidade é 14 m/s."
  },

  // QUÍMICA
  {
    subject: "Química",
    question: "Entre os estados físicos da matéria (sólido, líquido e gasoso), qual tem as partículas mais próximas umas das outras?",
    options: [
      "Sólido",
      "Líquido",
      "Gasoso",
      "Plasma"
    ],
    answer: "Sólido"
  },
  {
    subject: "Química",
    question: "Quais são os elementos químicos do Sal?",
    options: [
      "Sódio (Na) e Cloro (Cl)",
      "Carbono (C) e Oxigênio (O)",
      "Potássio (K) e Cloro (Cl)",
      "Sódio (Na) e Oxigênio (O)"
    ],
    answer: "Sódio (Na) e Cloro (Cl)"
  },

  // MATEMÁTICA
  {
    subject: "Matemática",
    question: "Se um bolo foi dividido igualmente entre 4 pessoas e cada uma ficou com 2 pedaços, quantos pedaços havia no total?",
    options: [
      "4 pedaços",
      "6 pedaços",
      "8 pedaços",
      "10 pedaços"
    ],
    answer: "8 pedaços"
  },
  {
    subject: "Matemática",
    question: "Se um retângulo tem 6 metros de comprimento e 3 metros de largura, qual é a sua área?",
    options: [
      "18 metros quadrados",
      "12 metros quadrados",
      "9 metros quadrados",
      "15 metros quadrados"
    ],
    answer: "18 metros quadrados"
  },

  // PORTUGUÊS
  {
    subject: "Português",
    question: "Qual é o sujeito da frase: 'Maria correu para a escola'?",
    options: [
      "Maria",
      "Correu",
      "Para a escola",
      "Sujeito elíptico"
    ],
    answer: "Maria"
  },
  {
    subject: "Português",
    question: "O trecho 'que sempre foi tão sensata' é um exemplo de:",
    options: [
      "Predicado",
      "Adjunto adnominal",
      "Vocativo",
      "Oração subordinada adjetiva"
    ],
    answer: "Oração subordinada adjetiva"
  },

  // HISTÓRIA
  {
    subject: "História",
    question: "Quem foi Dom Pedro I e qual foi seu papel na Independência do Brasil?",
    options: [
      "Dom Pedro I foi o líder das tropas brasileiras na guerra contra Portugal.",
      "Dom Pedro I proclamou a Independência do Brasil em 1822.",
      "Dom Pedro I foi um líder militar durante a Revolução Francesa.",
      "Dom Pedro I foi o primeiro imperador da França."
    ],
    answer: "Dom Pedro I proclamou a Independência do Brasil em 1822."
  },
  {
    subject: "História",
    question: "Quais são os principais fatores responsáveis pela formação dos climas no planeta?",
    options: [
      "Latitude, altitude, correntes marítimas e vegetação.",
      "Apenas a latitude e a vegetação.",
      "Apenas a altitude e os ventos.",
      "Latitude e longitude."
    ],
    answer: "Latitude, altitude, correntes marítimas e vegetação."
  },

  // GEOGRAFIA
  {
    subject: "Geografia",
    question: "A Idade Média é dividida em três períodos: Alta Idade Média, Baixa Idade Média e...",
    options: [
      "Renascimento",
      "Idade Moderna",
      "Idade Contemporânea",
      "Transição entre a Idade Antiga e a Idade Moderna"
    ],
    answer: "Transição entre a Idade Antiga e a Idade Moderna"
  },
  {
    subject: "Geografia",
    question: "O que foi o sistema feudal e como ele funcionava durante a Idade Média na Europa?",
    options: [
      "Foi um sistema de comércio entre as cidades.",
      "Foi um sistema de troca de terras por serviços, em que os camponeses trabalhavam para os senhores feudais.",
      "Foi um sistema centralizado de governo no qual o rei controlava todas as terras.",
      "Foi um sistema de governo democrático com participação popular."
    ],
    answer: "Foi um sistema de troca de terras por serviços, em que os camponeses trabalhavam para os senhores feudais."
  },

  // BIOLOGIA
  {
    subject: "Biologia",
    question: "As capivaras são animais semi-aquáticos. Quais características fisiológicas e comportamentais dessas criaturas as ajudam a viver em ambientes com água, como rios e lagos?",
    options: [
      "Capivaras possuem patas adaptadas para nadar e uma camada espessa de gordura para proteção.",
      "Capivaras têm pele fina e adaptam-se facilmente ao clima árido.",
      "Elas possuem garras afiadas e conseguem cavar em solo seco.",
      "Capivaras são aves que podem voar de um lugar para o outro."
    ],
    answer: "Capivaras possuem patas adaptadas para nadar e uma camada espessa de gordura para proteção."
  },
  {
    subject: "Biologia",
    question: "As capivaras possuem uma dieta herbívora. Quais tipos de vegetação elas costumam consumir e qual o impacto disso sobre o ecossistema local?",
    options: [
      "Capivaras consomem frutos e sementes, o que ajuda na dispersão das plantas.",
      "Capivaras se alimentam de plantas aquáticas e gramas, impactando negativamente as margens de rios e lagos.",
      "Capivaras são carnívoras e se alimentam de outros roedores.",
      "Capivaras consomem apenas folhas secas."
    ],
    answer: "Capivaras se alimentam de plantas aquáticas e gramas, impactando negativamente as margens de rios e lagos."
  },

  // INGLÊS
  {
    subject: "Inglês",
    question: "Como se diz 'bom dia' em inglês?",
    options: [
      "Good evening",
      "Good night",
      "Good morning",
      "Good afternoon"
    ],
    answer: "Good morning"
  },
  {
    subject: "Inglês",
    question: "Qual é o plural da palavra 'child' em inglês?",
    options: [
      "Children",
      "Childs",
      "Childern",
      "Kids"
    ],
    answer: "Children"
  },

  // FILOSOFIA
  {
    subject: "Filosofia",
    question: "Quem é considerado o 'pai' da filosofia ocidental?",
    options: [
      "Aristóteles",
      "Sócrates",
      "Platão",
      "Pitágoras"
    ],
    answer: "Sócrates"
  },
  {
    subject: "Filosofia",
    question: "O que significa o termo 'filosofia prática', especialmente no contexto de Aristóteles?",
    options: [
      "É a filosofia aplicada ao estudo de ética, política e moral.",
      "É a filosofia voltada para a metafísica.",
      "É a filosofia que envolve a análise da lógica e da matemática.",
      "É a filosofia que busca entender o universo através da ciência."
    ],
    answer: "É a filosofia aplicada ao estudo de ética, política e moral."
  }
];

let currentQuestion = 0;
let score = 0;
const questionText = document.getElementById("question-text");
const subjectText = document.getElementById("subject");
const optionsBox = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result");
const scoreSpan = document.getElementById("score");

let answerSelected = false;  // Variável para verificar se uma resposta foi selecionada

function loadQuestion() {
  answerSelected = false;  // Resetar a seleção de resposta a cada nova pergunta
  
  const q = questions[currentQuestion];
  subjectText.textContent = q.subject;
  questionText.textContent = q.question;
  optionsBox.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");
    btn.onclick = () => {
      answerSelected = true; // Marcar como resposta selecionada
      checkAnswer(btn, q.answer);
    };
    optionsBox.appendChild(btn);
  });

  // Certificar que o botão "Próxima" só será clicável quando uma opção for selecionada
  nextBtn.disabled = true;  // Desabilitar o botão "Próxima" inicialmente
  nextBtn.classList.add("disabled");  // Adicionar um estilo de desabilitado
}

function checkAnswer(button, correct) {
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(btn => btn.disabled = true);

  if (button.textContent === correct) {
    button.classList.add("correct");
    score++;
  } else {
    button.classList.add("wrong");
    buttons.forEach(btn => {
      if (btn.textContent === correct) btn.classList.add("correct");
    });
  }

  // Habilitar o botão "Próxima" quando uma opção for selecionada
  nextBtn.disabled = false;
  nextBtn.classList.remove("disabled");
}

nextBtn.onclick = () => {
  if (answerSelected) {  // Verifica se uma resposta foi selecionada
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
};

function showResult() {
  document.getElementById("question-box").style.display = "none";
  nextBtn.style.display = "none";
  scoreSpan.textContent = score;
  resultBox.classList.remove("hidden");

  // Aciona a chuva de capivaras
  triggerCapivaraRain();

  // Enviar para o banco
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("id");

  if (userId) {
    fetch("salvar_resultado.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `id=${userId}&acertos=${score}`
    })
    .then(response => response.text())
    .then(data => console.log("Resposta do servidor:", data))
    .catch(err => console.error("Erro ao enviar resultado:", err));
  }
}

function triggerCapivaraRain() {
  const capivaraRain = document.getElementById("capivara-rain");
  
  // Gerar um número aleatório de capivaras
  const capivaraCount = 20 + Math.floor(Math.random() * 30);

  for (let i = 0; i < capivaraCount; i++) {
    const capivara = document.createElement("div");
    capivara.classList.add("capivara");
    capivara.style.left = `${Math.random() * 100}%`; // Posição horizontal aleatória
    capivara.style.animationDuration = `${Math.random() * 3 + 2}s`; // Duração aleatória para queda
    capivaraRain.appendChild(capivara);
  }
}

// Inicia o quiz
loadQuestion();
