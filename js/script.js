
/* MODO ESCURO */
(function () {
  const KEY  = 'mercofrutas-theme';
  const html = document.documentElement;
  const btn  = document.getElementById('themeBtn');
  const icon = document.getElementById('themeIcon');

  const saved = localStorage.getItem(KEY);
  if (saved) setTheme(saved, false);

  btn.addEventListener('click', function () {
    const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    setTheme(next, true);
  });

  function setTheme(theme, animate) {
    
    if (animate) {
      document.body.classList.add('switching');
      setTimeout(() => document.body.classList.remove('switching'), 450);
    }

    html.setAttribute('data-theme', theme);

    localStorage.setItem(KEY, theme);

    icon.textContent = (theme === 'dark') ? '☀️' : '🌙';

    btn.setAttribute('aria-label',
      theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro');
  }
})();

/* FILTRO*/

const busca = document.getElementById("busca");
const categoria = document.getElementById("categoriaFiltro");
const produtos = document.querySelectorAll(".produto");

function filtrar() {
  const texto = busca.value.toLowerCase();
  const cat = categoria.value;

  produtos.forEach(produto => {
    const nome = produto.dataset.nome.toLowerCase();
    const categoriaProduto = produto.dataset.categoria;

    const matchTexto = nome.includes(texto);
    const matchCategoria = cat === "todos" || categoriaProduto === cat;

    if (matchTexto && matchCategoria) {
      produto.style.display = "block";
    } else {
      produto.style.display = "none";
    }
  });
}


busca.addEventListener("input", filtrar);
categoria.addEventListener("change", filtrar);