const activityList = document.getElementById('activity-list');

// Simulação de atividades para alunos
const activities = [
    { text: '', description: '', date: '' },
    { text: '', description: '', date: '' },
    { text: '', description: '', date: '' },
    { text: '', description: '', date: '' },
    { text: '', description: '', date: '' }
];

// Exibir atividades para alunos
activities.forEach(activityObj => {
    const activityItem = document.createElement('li');
    activityItem.classList.add('activity');
    activityItem.innerHTML = `
        <span class="activity-text">${activityObj.text}</span>
        <span class="activity-description">${activityObj.description}</span>
        <span class="activity-date">${activityObj.date}</span>
        <button class="complete-button">Concluir</button>

    `;

const completeButton = activityItem.querySelector('.complete-button');
completeButton.addEventListener('click', function() {
    // Inverter o estado de concluído
    activityObj.completed = !activityObj.completed;

    // Alterar estilo com base no estado de concluído
    if (activityObj.completed) {
        activityItem.style.backgroundColor = '#00A19D'; // Verde para indicar concluído
        completeButton.textContent = 'Desfazer';
    } else {
        activityItem.style.backgroundColor = '#003366'; // Voltar à cor original
        completeButton.textContent = 'Concluir';
    }
});

activityList.appendChild(activityItem);
});