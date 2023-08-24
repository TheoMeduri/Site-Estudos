const burger = document.getElementById('burger');
const menuList = document.querySelector('.menu-list');

burger.addEventListener('click', () => {
  menuList.classList.toggle('active');
});
const atividadesList = document.querySelector('.atividades-lista');

atividadesList.addEventListener('click', (event) => {
  if (event.target.classList.contains('concluir')) {
    const atividadeItem = event.target.closest('.atividade');
    atividadeItem.classList.add('concluida');
  } else if (event.target.classList.contains('desfazer')) {
    const atividadeItem = event.target.closest('.atividade');
    atividadeItem.classList.remove('concluida');
  }
});
