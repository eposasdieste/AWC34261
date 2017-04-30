var banner = {}, B = banner;
window.onload = function(){ B.init(); }
//optionally set a different border color
B.borderColor = '#959595';
//hide reload button once user clicks the legal div to open the legal bubble?
B.hideReloadOnBubbleOpen = false;
//sets 'transformOrigin' of CTA button
B.tOrigin = null;
//is there a legal bubble in this particular creative?
B.legalBubble = false;
//initialize ad
B.init = function(){
  var e = ['overlay','flare','flare'];
  var b = {x:0, y:0, atlas:true, dimensions:{w:90, h:22}};
  var r = {x:0, y:0, scale:0.5, transformOrigin:"13px 15px", reverse:false, hardRefresh:true};
  Main.init(null, null, e, b, '', r, null, null);
  B.prelim();
  F.HDify(['overlay']);
}
//set preliminary steps -- has to do with splitImg functions
B.prelim = function(){
  if(B.prelimDone === false){
    B.setUpDivs();
    A.invisible('btn');
    (function appendCanvas(){
      can = document.createElement('canvas');
      can.id = "canvas";
      document.body.appendChild(can);
      adobeanimate_init(); //adobe animate start-up code 
    })();
  }
  B.prelimDone = true;
}
//animate the banner ad
B.animate = function(){
  A.visible(['back','overlay']);
  B.addScrollableLegal(false);
  //animation of flares handled in 'flares.js' file
  animateFlares();
  //text
  text.animate();
}
