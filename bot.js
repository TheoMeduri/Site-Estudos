const messageBox = document.getElementById('message-box');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

const userName = 'Usuário';
const botNames = ['AstroBot', 'TechBot', 'QuantumBot', 'OttoBot', 'ClimerBot', 'GluxBot'];
const botColors = {
  'AstroBot': 'teal',
  'TechBot': 'green',
  'QuantumBot': 'purple',
  'OttoBot': 'orange',
  'ClimerBot': 'yellow',
  'GluxBot': 'teal'
};

let selectedBotIndex = 0;
let currentBotName = botNames[selectedBotIndex];

const responses = {
  'olá': `Olá! ${userName}, estou à sua disposição!`,
  '401 error o que seria?': `Normalmente significa que o site está passando por atualizações ou manutenções, o que pode resultar em sobrecarga para receber usuários. Se o erro persistir, tente acessar em um momento posterior.`,
  'quero ajuda com o resumo': 'Você está falando do resumo adicionado recentimente no site, Ele tem algum erro? "sim" "não" "sobre outra coisa"',
  'sim': 'Claro! ele foi gerado por IA, não temos o controle, mil desculpas. Fale com o Theo Meduri, já que ele é o único que pode arrumar.',
  'não': 'Otimo, obrigado por falar pra gente! vamos colocar mais destes no site.',
  'sobre outra coisa': 'Sinto muito, eu não posso falar muito sobre o assunto, entre em contato com o Theo Meduri para falar sobre.'
  // Adicione mais mensagens e respostas aqui...
};

function addBotMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.className = 'message bot';
  const botName = currentBotName;
  const botColor = botColors[botName]; // Obter a cor do bot
  messageElement.textContent = `${botName}: ${message}`;
  messageElement.style.color = botColor; // Definir a cor do texto
  messageBox.appendChild(messageElement);
  scrollToBottom();
}

const typingIndicator = document.getElementById('typing-indicator');

function showTypingIndicator() {
  isBotTyping = true;
  const botName = currentBotName;
  typingIndicator.textContent = `${botName} está digitando...`;
  typingIndicator.style.display = 'block';
}

function hideTypingIndicator() {
  typingIndicator.style.display = 'none';
}


function addSystemMessage(message, delay, style) {
  setTimeout(() => {
    const messageElement = document.createElement('div');
    messageElement.className = 'message bot';
    messageElement.textContent = `Sistema: ${message}`;
    messageElement.style = style; // Defina o estilo
    messageBox.appendChild(messageElement);
    scrollToBottom();
  }, delay);
}


function addMessage(message, delay, style) {
  setTimeout(() => {
    const messageElement = document.createElement('div');
    messageElement.className = 'message bot';
    messageElement.textContent = ` ${message}`;
    messageElement.style = style; // Defina o estilo
    messageBox.appendChild(messageElement);
    scrollToBottom();
  }, delay);
}


function scrollToBottom() {
  messageBox.scrollTop = messageBox.scrollHeight;
}

function respondToUser(message) {
  message = message.toLowerCase();

  if (responses.hasOwnProperty(message)) {
    showTypingIndicator();
    setTimeout(() => {
      addBotMessage(responses[message]);
      hideTypingIndicator();
    }, 1500); // Atraso de 1.5 segundos para simular tempo de resposta do bot
  } else if (message === 'apagar mensagens') {
    location.reload();
  } else {
    addBotMessage('Desculpe, não entendi. Poderia reformular?');
  }
}




function simulateWelcome() {
  selectedBotIndex = Math.floor(Math.random() * botNames.length); // Escolhe um índice aleatório
  currentBotName = botNames[selectedBotIndex]; // Define o nome do bot atual
  window.addEventListener('load', simulateWelcome);
  setTimeout(() => {
    addSystemMessage('Bem-Vindo(a) ao chat!', 0);
    setTimeout(() => {
      addSystemMessage('Nao mande nada sem um bot no Chat!', 0);
      setTimeout(() => {
        // Defina um estilo de cor para a mensagem "Procurando bots..."
        addSystemMessage('Procurando por Bots...', 0, 'color: green;');
        setTimeout(() => {
          addMessage(`-> ${currentBotName} Entrou no chat.`, 0, 'color: blue;');
        }, 7000);
      }, 3000);
    }, 1000);
  }, 2000);
}

window.addEventListener('load', simulateWelcome);
sendButton.addEventListener('click', sendMessage);

function sendMessage() {
  const userMessage = messageInput.value.trim();
  if (userMessage !== '') {
    addUserMessage(userMessage);
    respondToUser(userMessage);
    messageInput.value = '';
  }
}

function addUserMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.className = 'message user';
  messageElement.textContent = `${userName}: ${message}`;
  messageBox.appendChild(messageElement);
  scrollToBottom();
}

messageInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    sendMessage();
  }
});


function closeChatAndRedirect() {
  addSystemMessage("Vamos fechar o chat! Você ainda não digitou nada! depois desta mensagem não adianta mais escrever! ");
  setTimeout(function() {
    // Simulação de redirecionamento para a página principal (substitua pelo seu URL)
    window.location.href = "/pagina.html";
  }, 20000); // 7000 milissegundos (7 segundos)
}

let userInteracted = false;

// Monitora eventos de entrada do usuário
document.addEventListener('keydown', function() {
  userInteracted = true;
});

setTimeout(function() {
  if (!userInteracted) {
    closeChatAndRedirect();
  }
}, 21000); // 15000 milissegundos (15 segundos)
