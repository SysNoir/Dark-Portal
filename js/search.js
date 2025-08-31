async function loadJSON(p){ const r = await fetch(p); return r.json(); }

(async()=>{
  const [concepts, entities] = await Promise.all([
    loadJSON('../data/concepts.json'),
    loadJSON('../data/entities.json')
  ]);

  // Build concept map (aliases, misspellings)
  const cmap = {};
  Object.entries(concepts).forEach(([canon, obj])=>{
    [canon, ...(obj.aliases||[]), ...(obj.misspellings||[])].forEach(t=>{
      cmap[t.toLowerCase()] = canon.toLowerCase();
    });
  });

  function normalize(q){
    return q.toLowerCase().split(/\s+/).filter(Boolean).map(tok=>cmap[tok]||tok);
  }

  // Precompute a searchable blob for each entity
  const pool = entities.map(e=>{
    const blob = [
      e.name, ...(e.aka||[]), ...(e.styles||[]), ...(e.era||[]),
      e.region||'', ...(e.tags||[]), e.desc||''
    ].join(' ').toLowerCase();
    return { e, blob };
  });

  const input = document.getElementById('q');
  const out = document.getElementById('results');

  input.addEventListener('input', ()=>{
    const toks = normalize(input.value);
    const hits = pool.filter(row => toks.every(t => row.blob.includes(t)))
                     .map(row => row.e);
    out.innerHTML = hits.length ? hits.map(render).join('') : '<p class="muted">No results yet.</p>';
  });

  function render(d){
    return `<article style="border-bottom:1px solid #222;padding:10px 0">
      <h3><a href="${d.url}" target="_blank" rel="noopener">${d.name}</a></h3>
      <p class="muted">${(d.styles||[]).join(', ')} • ${(d.era||[]).join('/')} • ${d.region||''}</p>
      <p>${d.desc||''}</p>
    </article>`;
  }
})();
