const messageBox = document.getElementById('message-box');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

const userName = 'Você'; // Nome do usuário
const botNames = ['AstroBot', 'TechBot', 'QuantumBot']; // Nomes dos bots disponíveis

let selectedBotIndex = 0; // Índice do bot selecionado
let currentBotName = botNames[selectedBotIndex]; // Nome do bot atualmente selecionado

const responses = {
  'olá': 'Olá! Como posso ajudar?',
  'como você está?': 'Estou bem, obrigado por perguntar!',
  // Adicione mais mensagens e respostas aqui...
};

function addBotMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.className = 'message bot';
  messageElement.textContent = `${currentBotName}: ${message}`;
  messageBox.appendChild(messageElement);
  scrollToBottom();
}

function addSystemMessage(message, delay) {
  setTimeout(() => {
    const messageElement = document.createElement('div');
    messageElement.className = 'message bot';
    messageElement.textContent = `Sistema: ${message}`;
    messageBox.appendChild(messageElement);
    scrollToBottom();
  }, delay);
}

function respondToUser(message) {
  message = message.toLowerCase();
  
  if (responses.hasOwnProperty(message)) {
    addBotMessage(responses[message]);
  } else if (message.includes('trocar bot')) {
    selectedBotIndex = (selectedBotIndex + 1) % botNames.length;
    currentBotName = botNames[selectedBotIndex];
    addSystemMessage(`Agora quem esta no Chat é ${currentBotName}.`);
  } else {
    addBotMessage('Desculpe, não entendi. Poderia reformular?');
  }
}

function scrollToBottom() {
  messageBox.scrollTop = messageBox.scrollHeight;
}

function simulateWelcome() {
  setTimeout(() => {
    addSystemMessage('Bem-Vindo(a) ao chat!', 0);
    setTimeout(() => {
      addSystemMessage('Nao mande nada sem um bot no Chat!', 0);
      setTimeout(() => {
        addSystemMessage('Procurando por Bots...', 0);
      setTimeout(() => {
        addSystemMessage(`-> ${currentBotName} Entrou no chat. Caso queira trocar de bot digite "Trocar bot"`);
      }, 7000); // 2 segundos após a mensagem anterior
    }, 3000); // 3 segundos após a mensagem anterior
  }, 1000); // 1 segundo após a página ser carregada
 }, 2000);
}

window.addEventListener('load', simulateWelcome);
sendButton.addEventListener('click', sendMessage);

function sendMessage() {
  const userMessage = messageInput.value.trim();
  if (userMessage !== '') {
    addUserMessage(userMessage);
    setTimeout(() => {
      respondToUser(userMessage);
    }, 1500); // Atraso de 1.5 segundo
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
    window.location.href = "https://theomeduri.github.io/Site-Estudos/pagina.html";
  }, 15000); // 7000 milissegundos (7 segundos)
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
}, 19000); // 15000 milissegundos (15 segundos)
