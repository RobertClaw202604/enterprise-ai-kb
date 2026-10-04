(function(){
  const slides=[...document.querySelectorAll('.slide')];
  const total=slides.length;
  let i=0;

  const prog=document.getElementById('prog');
  const counter=document.getElementById('counter');
  const ovGrid=document.getElementById('ovGrid');
  const overview=document.getElementById('overview');
  const hint=document.getElementById('hint');
  const meta=window.__SLIDES||[];

  meta.forEach((m,idx)=>{
    const item=document.createElement('div');
    item.className='ov-item';
    item.innerHTML='<div class="n">'+m.n+'</div><div class="t">'+(m.tag?m.tag+' — ':'')+m.title+'</div>';
    item.addEventListener('click',()=>{go(idx);toggleOverview(false);});
    ovGrid.appendChild(item);
  });

  function go(n){
    i=Math.max(0,Math.min(total-1,n));
    slides.forEach((s,k)=>s.classList.toggle('active',k===i));
    counter.textContent=(i+1)+' / '+total;
    prog.style.width=(((i+1)/total)*100)+'%';
    slides[i].scrollTop=0;
  }
  function next(){if(i<total-1)go(i+1);}
  function prev(){if(i>0)go(i-1);}
  function toggleOverview(force){
    const show=force===undefined?!overview.classList.contains('show'):force;
    overview.classList.toggle('show',show);
  }
  function toggleFs(){
    if(!document.fullscreenElement){document.documentElement.requestFullscreen?.();}
    else{document.exitFullscreen?.();}
  }

  document.getElementById('btnNext').addEventListener('click',next);
  document.getElementById('btnPrev').addEventListener('click',prev);
  document.getElementById('btnOverview').addEventListener('click',()=>toggleOverview());
  document.getElementById('btnFs').addEventListener('click',toggleFs);
  document.getElementById('btnPrint').addEventListener('click',()=>window.print());

  document.addEventListener('keydown',e=>{
    if(e.key==='ArrowRight'||e.key==='PageDown'||e.key===' '){e.preventDefault();next();}
    else if(e.key==='ArrowLeft'||e.key==='PageUp'){e.preventDefault();prev();}
    else if(e.key==='Home'){go(0);}
    else if(e.key==='End'){go(total-1);}
    else if(e.key==='o'||e.key==='O'){toggleOverview();}
    else if(e.key==='f'||e.key==='F'){toggleFs();}
    else if(e.key==='Escape'){toggleOverview(false);}
  });

  let x0=null;
  document.addEventListener('touchstart',e=>{x0=e.touches[0].clientX;},{passive:true});
  document.addEventListener('touchend',e=>{
    if(x0===null)return;
    const dx=e.changedTouches[0].clientX-x0;
    if(Math.abs(dx)>55){dx<0?next():prev();}
    x0=null;
  },{passive:true});

  setTimeout(()=>hint.classList.add('hide'),5200);
  window.addEventListener('mousemove',()=>{hint.classList.add('hide');},{once:true});

  go(0);
})();
