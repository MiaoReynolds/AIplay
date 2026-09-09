// Progressive enhancement: every project remains available without JavaScript.
(() => {
  const root = document.querySelector('.home-container');
  if (!root) return;
  const cards = [...root.querySelectorAll('.bento-card')];
  const buttons = [...root.querySelectorAll('[data-filter]')];
  const hardware = new Set(['Robotics', 'Hardware', 'Embedded', 'UI/UX', 'Embodied AI', 'Companion AI', 'AI Terminal']);
  const automation = new Set(['Business Automation', 'Automation', 'Finance', 'Utility']);
  cards.forEach(card => {
    const tag = card.querySelector('.bento-tag').textContent.trim();
    card.dataset.category = hardware.has(tag) ? 'hardware' : automation.has(tag) ? 'automation' : 'ai';
  });
  function filterProjects(filter) {
    cards.forEach(card => { card.hidden = filter !== 'all' && card.dataset.category !== filter; });
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === filter)));
    const count = cards.filter(card => !card.hidden).length;
    root.querySelector('#project-count').textContent = `${count} projects`;
  }
  buttons.forEach(button => button.addEventListener('click', () => filterProjects(button.dataset.filter)));
  root.querySelector('.project-toolbar').hidden = false;
  filterProjects('all');
})();
