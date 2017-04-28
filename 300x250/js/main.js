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
  var e = ['phone', 'phones', 'blackborders', 'overlay', 'flare', 'flare', 'bubble', 'x'];
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
  A.visible(['back','overlay','blackborders']);
  A.set('blackborders', {x:-1,y:-1});
  B.addScrollableLegal(false);
  
  // 'f1', 'f2', and so on, is the array of elements in each frame 
  d = 2.5, st = 0.1;
  flares_x_start = -60;
  flares_to_x = 220;
  flares_duration = 2.5;
  var f1 = ['1-1'];
  var f2 = ['2-1','2-2'];
  var f3 = ['3-1','3-2'];
  var f4 = ['4-1','4-2','4-3'];

  frame1(); //start up animation 
  // frame 1 animation 
  function frame1(){
    flares(flares_duration);
    A.from('phone', 0.75, { y:500 });
    A.dCall(3, function(){
      frame2();
    });
  }
  // frame 2 animation 
  function frame2(){
    A.dCall(getFlareDelay(), function(){
      flares(flares_duration);
    });
    A.dCall(3, function(){
      frame3();
    });
  } 
  // frame 3 animation 
  function frame3(){
    A.dCall(getFlareDelay(), function(){
      flares(flares_duration);
    });
    A.dCall(3, function(){
      frame4();
    });
  }
  // frame 4 animation
  function frame4(){
    A.dCall(getFlareDelay(), function(){
      flares(flares_duration);
    });
    A.dCall(3, function(){
      A.slideoffdown('phone');
      A.slideinfromright('phones');
    });
    A.dCall(4, B.adEnd);
  }
  
  var delay_time_incr = 2;
  function getFlareDelay(){
    return delay_time_incr++;
  }
  
  function flares(dur){
    A.set('flare', {x:flares_x_start,y:234});
    A.set('flare-copy', {x:flares_x_start,y:-2});
    TweenLite.killTweensOf('#flare');
    TweenLite.killTweensOf('#flare-copy');
    // top flare
    TweenLite.to('#flare-copy', dur/4, {alpha:1,onComplete:function(){
      TweenLite.to('#flare-copy', 3*(dur/4), {alpha:0});
    }});
    TweenLite.to('#flare-copy', dur, {x:flares_to_x,ease:Power1.easeOut,onComplete:function(){TweenLite.set('#flare-copy',{x:flares_x_start});}});
    // bottom flare
    TweenLite.to('#flare', dur/4, {alpha:1,onComplete:function(){
      TweenLite.to('#flare', 3*(dur/4), {alpha:0});
    }});
    TweenLite.to('#flare', dur, {x:flares_to_x,ease:Power1.easeOut,onComplete:function(){TweenLite.set('#flare',{x:flares_x_start});}});
  }
}
