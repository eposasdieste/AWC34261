var banner = {}, B = banner;
window.onload = function(){ B.init(); }
//optionally set a different border color
B.borderColor = '#959595';
//hide reload button once user clicks the legal div to open the legal bubble?
B.hideReloadOnBubbleOpen = false;
//sets 'transformOrigin' of CTA button
B.tOrigin = null;
//is there a legal bubble in this particular creative?
B.legalBubble = true;
//initialize ad
B.init = function(){
  var e = ['phone', 'phones', 'blackborders', 'overlay', 'flare', 'flare', 'bubble', 'x', ['back']];
  var b = {x:0, y:0, atlas:true, dimensions:{w:90, h:22}};
  var r = {x:0, y:0, scale:0.5, transformOrigin:"13px 15px", reverse:false, hardRefresh:true};
  Main.init(null, null, e, b, '', r, null, null);
  B.prelim();
  F.HDify(['blackborders', 'bubble', 'overlay', 'x']);
}
//set preliminary steps -- has to do with splitImg functions
B.prelim = function(){
  if(B.prelimDone === false){
    B.setUpDivs();
    A.invisible('btn');
    TweenLite.set('#back-copy',{alpha:1,css:{opacity:1}});
    (function appendCanvas(){
      can = document.createElement('canvas');
      can.id = "canvas";
      //document.body.appendChild(can);
      //document.getElementById('container').appendChild(can);
      document.getElementById('container').insertBefore(can, document.getElementById('back-copy'));
      adobeanimate_init(); //adobe animate start-up code 
    })();
  }
  B.prelimDone = true;
}
//animate the banner ad
B.animate = function(){
  TweenLite.to('#back-copy', 0.25, {alpha:0,css:{opacity:0}});
  A.visible(['back','overlay','blackborders']);
  A.set('blackborders', {x:-1,y:-1});
  B.addScrollableLegal(false);
  
  //animation of flares handled in 'flares.js' file
  animateFlares();
  
  //text
  text.animate();
  
  //phones 
  A.from('phone', 1, {y:500});
  A.dCall(11.5, phoneout);
  A.dCall(12.5, phonesin);
  
  function phoneout(){
    A.to('phone', 0.75, {y:500,ease:Power1.easeIn});
  }
  function phonesin(){
    A.from('phones', 0.75, {x:220,onComplete:adEnd});
  }
  function adEnd(){
    B.adEnd();
  }
}

