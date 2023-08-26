const messageContainer = document.getElementById('message-container');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

function addMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.className = 'message';
  messageElement.textContent = message;
  messageContainer.appendChild(messageElement);
}

sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  if (message) {
    addMessage(`Você: ${message}`);
    messageInput.value = '';
  }
});

// Mensagens programadas
setTimeout(() => {
  addMessage(`Este chat e seguro, voce esta falando com Bots, por favor nao desrespeitalos, assim continuando com um lugar seguro!`);
},);

setTimeout(() => {
  addMessage(`Procurando por assistentes...`);
}, 10000);

setTimeout(() => {
  addMessage(`Chat: Bem-vindo ao nosso chat programado.`);
}, 4000);

setTimeout(() => {
  addMessage(`Chat: Nao mande mensagem ate que um BOT entre na conversa.`);
}, 6000);

setTimeout(() => {
  addMessage(`__________________________`);
}, 40000);

setTimeout(() => {
  addMessage("-> Prenvil entrou no Chat!->");
}, 13000);

setTimeout(() => {
  addMessage("-> Bot auxiliar entrou no Chat!->");
}, 13600);

setTimeout(() => {
  addMessage(`Prenvil: Ola, nao estou completamente programado! sinto muito!`);
}, 15000);

setTimeout(() => {
  addMessage(`Bot Auxiliar: Vou fechar este Chat, por favor nao tente NOVAMENTE ate que nossa programacao esteja pronta!`);
}, 17000);

setTimeout(() => {
  addMessage(`Sistema: Vamos fechar o chat!`);
}, 20000);

setTimeout(() => {
addMessage(`Sistema: Fechando Chat...`);
}, 24000);

setTimeout(() => {
  addMessage(`Sistema: Retirando BOTS...`);
  }, 26000);

setTimeout(() => {
  addMessage(`<- Prenvil Saiu do Chat.`);
  }, 30000);

  setTimeout(() => {
    addMessage(`<- Bot auxiliar Saiu do Chat.`);
    }, 30500);

    setTimeout(() => {
      addMessage(`Oh desculpe, nao era pra isso acontecer!`);
      }, 33000);




const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const resetButton = document.getElementById('reset-button');
const timeDisplay = document.getElementById('time-display');

let timerInterval;
let startTime;
let elapsedTime = 0;
let isRunning = false;

function updateDisplay() {
  const milliseconds = elapsedTime % 1000;
  const seconds = Math.floor((elapsedTime / 1000) % 60);
  const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  const hours = Math.floor(elapsedTime / (1000 * 60 * 60));

  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  timeDisplay.textContent = formattedTime;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 10);
  }
}

function pauseTimer() {
  if (isRunning) {
    clearInterval(timerInterval);
    isRunning = false;
  }
}

function resetTimer() {
  pauseTimer();
  elapsedTime = 0;
  updateDisplay();
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

