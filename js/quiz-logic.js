document.getElementById('quizForm')?.addEventListener('submit',(e)=>{
  e.preventDefault();
  const axis={HH:5}; // placeholder result
  const params=new URLSearchParams({a:"balancer",HH:axis.HH,SS:2,FF:3,LD:4,p:"trad",s:"cyber",i:"medium"});
  location.href=`../card/?${params.toString()}`;
});
