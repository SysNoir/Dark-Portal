const params=new URLSearchParams(location.search);
document.getElementById('archName').textContent=params.get('a')||"Archetype";
document.getElementById('primary').textContent=params.get('p')||"primary";
document.getElementById('secondary').textContent=params.get('s')||"secondary";
document.getElementById('png').onclick=()=>alert("Would download PNG here");
document.getElementById('pdf').onclick=()=>alert("Would download PDF here");
