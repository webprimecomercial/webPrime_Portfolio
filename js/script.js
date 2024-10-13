
// Script básico para ações de botão (se necessário no futuro)
document.querySelector('.cta-btn').addEventListener('click', () => {
    alert('Entrando em contato...');
  });


  // Script da sessão de projetos
const filtros = document.querySelectorAll('.filtro');
const projetos = document.querySelectorAll('.portfolio');

filtros.forEach(filtro => {
    filtro.addEventListener('click', function() {
      // Remove a classe ativo de todos os botões
      filtros.forEach(btn => btn.classList.remove('ativo'));
      // Adiciona a classe ativo ao botão clicado
      this.classList.add('ativo');

      const categoria = this.getAttribute('data-filter');

      projetos.forEach(portfolio => {
        if (categoria === 'todos' || portfolio.getAttribute('data-category') === categoria){
          portfolio.style.display = 'block';
        } else {
          portfolio.style.display = 'none';
        }
      });
    });
});
  