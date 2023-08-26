const buttons = document.querySelectorAll('.date-button');
const pages = document.querySelectorAll('.page');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-target');
    
    pages.forEach(page => {
      page.classList.remove('active');
      if (page.id === target) {
        page.classList.add('active');
      }
    });
  });
});
