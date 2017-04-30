banner.setUpDivs = function(){
  B.div('legal_div', {},{
      click: function(){
          if(banner.adState === 'ended'){
              A.visible('bubble');
              A.visible('x');
              A.set('reload', {alpha:0.5});
              A.set('canvas', {alpha:0.5});
              A.set('btn', {alpha:0});
              banner.legalOpen = true;
          }else{
              window.open(clickTag, '_blank');
          }
      }
  }, true);
    
  B.div('x_div', {},{
      click: function(){
          if(banner.adState === 'ended'){
              A.invisible('bubble');
              A.invisible('x');
              A.set('canvas', {alpha:1});
              A.set('reload', {alpha:1});
              A.set('btn', {alpha:1});
              banner.legalOpen = false;
          }else{
              window.open(clickTag, '_blank');
          }
      }
  }, true);
  
  //custom 'btn' img elem
  b = document.createElement('img');
  b.id = 'btn';
  b.src = 'img/btn.png';
  b.width = 300;
  b.style.position = 'absolute';
  b.style.cursor = 'pointer';
  //b.classList.add('hvr-wobble-horizontal');
  document.body.appendChild(b);
  b.addEventListener('click', function(){ window.open(clickTag,'_blank'); });
}
