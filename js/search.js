(async()=>{
  const data=[{id:1,name:"Bauhaus",url:"https://en.wikipedia.org/wiki/Bauhaus_(band)",desc:"Foundational goth band."}];
  const mini=new MiniSearch({fields:['name','desc'],storeFields:['name','url','desc']});
  mini.addAll(data);
  document.getElementById('q').addEventListener('input',(e)=>{
    const hits=mini.search(e.target.value);
    document.getElementById('results').innerHTML=hits.map(h=>`<p><a href="${h.url}">${h.name}</a> — ${h.desc}</p>`).join('');
  });
})();
