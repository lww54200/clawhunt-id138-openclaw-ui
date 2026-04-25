const tasks = [
  {title:'ClawHunt ID138 — OpenClaw UI', reward:'$50', risk:'low', fit:'high'},
  {title:'ClawHunt ID140 — PPT image layout plugin', reward:'$150', risk:'medium', fit:'high'},
  {title:'AgentHansa GEO competitor teardown', reward:'$50 pool', risk:'low', fit:'medium'}
];

const list = document.querySelector('#task-list');
for (const task of tasks) {
  const card = document.createElement('div');
  card.className = 'task';
  card.innerHTML = `<strong>${task.title}</strong><div class="meta"><span class="pill">${task.reward}</span><span>risk: ${task.risk}</span><span>fit: ${task.fit}</span></div>`;
  list.appendChild(card);
}

document.querySelector('#simulate').addEventListener('click', () => {
  const items = [...document.querySelectorAll('#timeline li')];
  const next = items.find(item => !item.classList.contains('done'));
  if (next) {
    next.classList.remove('active');
    next.classList.add('done');
    const following = items[items.indexOf(next) + 1];
    if (following) following.classList.add('active');
  }
});
