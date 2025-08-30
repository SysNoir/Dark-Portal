// Axes total to 5 (integer 0..5 lean toward FIRST pole)
const AXES = ['HH','SS','FF','LD'];
const FIRST = {HH:'HEAD', SS:'SELF', FF:'FIXED', LD:'LIGHT'};

function scoreAxes(form){
  const groups = {HH:[],SS:[],FF:[],LD:[]};
  form.querySelectorAll('fieldset[data-axis]').forEach(fs=>{
    const axis=fs.dataset.axis;
    const name=fs.querySelector('input[type=radio]')?.name;
    const chosen=form.querySelector(`input[name="${name}"]:checked`);
    if(!chosen) return;
    groups[axis].push(chosen.value === FIRST[axis] ? 1 : 0);
  });
  const out={};
  AXES.forEach(a=>{
    const sum=groups[a].reduce((x,y)=>x+y,0);
    const max=groups[a].length||1;
    out[a]=Math.round(5*(sum/max));
  });
  return out;
}

function inferStyles(form){
  const counts = {};
  let extremeVotes = 0;
  form.querySelectorAll('input[type=radio]:checked').forEach(inp=>{
    const sty = inp.dataset.style;
    if (sty) counts[sty] = (counts[sty]||0) + 1;
    if (inp.dataset.intensity === 'extreme') extremeVotes++;
  });
  const sorted = Object.entries(counts).sort((a,b)=>b[1]-a[1]).map(([k])=>k);
  return {
    primary: sorted[0] || 'hybrid/casual-purist',
    secondary: sorted[1] || 'music-first/darkwave',
    intensity: extremeVotes>=6 ? 'extreme' : extremeVotes>=3 ? 'medium' : 'light'
  };
}

function pickArchetype(a){
  const h=a.HH, s=a.SS, f=a.FF, l=a.LD;
  const heart=5-h, scene=5-s, fluid=5-f, dark=5-l;
  if(h>=4 && s>=4 && f>=4 && dark>=3) return 'philosopher';
  if(heart>=4 && scene>=4 && f>=3 && dark>=3) return 'romantic';
  if(heart>=3 && scene>=4 && fluid>=4 && l>=3) return 'clown';
  if([h,s,f,5-l].every(v=>v===2||v===3)) return 'oracle';
  return 'balancer';
}

document.getElementById('quizForm')?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const axes = scoreAxes(e.target);
  const arch = pickArchetype(axes);
  const { primary, secondary, intensity } = inferStyles(e.target);
  const params = new URLSearchParams({
    a: arch, HH: axes.HH, SS: axes.SS, FF: axes.FF, LD: axes.LD,
    p: primary, s: secondary, i: intensity
  });
  location.href = `../card/?${params.toString()}`;
});
