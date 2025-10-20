// Alternar tema claro/escuro
const btnTema = document.getElementById('theme-toggle');

btnTema.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  
  if (document.body.classList.contains('dark-mode')) {
    btnTema.textContent = '☀️';
  } else {
    btnTema.textContent = '🌙';
  }
});

// Animação suave no carregamento
window.addEventListener('load', () => {
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = 'opacity 0.6s';
    document.body.style.opacity = 1;
  }, 100);
});
