const cardapio = {
  segunda: {
    dia: 'SEGUNDA-FEIRA', emoji: '🍛', titulo: 'Arroz, feijão e frango',
    descricao: 'Uma refeição caseira acompanhada de legumes e fruta.',
    itens: ['🍚 Arroz e feijão', '🍗 Frango assado', '🥕 Legumes cozidos', '🍌 Banana de sobremesa']
  },
  terca: {
    dia: 'TERÇA-FEIRA', emoji: '🍝', titulo: 'Macarrão à bolonhesa',
    descricao: 'Uma opção saborosa com salada fresca e fruta da estação.',
    itens: ['🍝 Macarrão à bolonhesa', '🥬 Salada de alface', '🍅 Tomate fresco', '🍎 Maçã de sobremesa']
  },
  quarta: {
    dia: 'QUARTA-FEIRA', emoji: '🥘', titulo: 'Carne com legumes',
    descricao: 'Prato variado com acompanhamento e uma fruta.',
    itens: ['🍚 Arroz', '🥩 Carne cozida', '🥔 Batata e cenoura', '🍉 Melancia de sobremesa']
  },
  quinta: {
    dia: 'QUINTA-FEIRA', emoji: '🍲', titulo: 'Sopa nutritiva',
    descricao: 'Uma refeição quentinha com vegetais e proteína.',
    itens: ['🍲 Sopa de legumes', '🍗 Frango desfiado', '🥖 Pão como acompanhamento', '🍊 Laranja de sobremesa']
  },
  sexta: {
    dia: 'SEXTA-FEIRA', emoji: '🐟', titulo: 'Peixe com arroz',
    descricao: 'Uma sugestão leve com salada e fruta para terminar a semana.',
    itens: ['🍚 Arroz e feijão', '🐟 Peixe assado', '🥗 Salada colorida', '🍍 Abacaxi de sobremesa']
  }
};

const tabs = document.querySelectorAll('.day-tab');
const mealVisual = document.getElementById('mealVisual');

function mostrarCardapio(dia) {
  const refeicao = cardapio[dia];
  document.getElementById('mealDay').textContent = refeicao.dia;
  document.getElementById('mealEmoji').textContent = refeicao.emoji;
  document.getElementById('mealTitle').textContent = refeicao.titulo;
  document.getElementById('mealDescription').textContent = refeicao.descricao;
  document.getElementById('mealList').innerHTML = refeicao.itens
    .map(item => `<li>${item}</li>`).join('');
  tabs.forEach(tab => {
    const ativo = tab.dataset.day === dia;
    tab.classList.toggle('active', ativo);
    tab.setAttribute('aria-pressed', String(ativo));
  });
  mealVisual.animate(
    [{ opacity: 0.6, transform: 'scale(.98)' }, { opacity: 1, transform: 'scale(1)' }],
    { duration: 220, easing: 'ease-out' }
  );
}

tabs.forEach(tab => tab.addEventListener('click', () => mostrarCardapio(tab.dataset.day)));

const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
menuBtn.addEventListener('click', () => {
  const aberto = menu.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(aberto));
  menuBtn.textContent = aberto ? '×' : '☰';
});
menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.textContent = '☰';
}));
document.getElementById('year').textContent = new Date().getFullYear();
