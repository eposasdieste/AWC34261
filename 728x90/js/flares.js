//flares x start and end 
var flares_x_start = -60,
    flares_to_x = 500;
//flares y positions
var flare_top_y_pos = -4,
    flare_btm_y_pos = 76;
//flare animation duration
var flare_dur = 2.5;
//have flare parameters been set?
var flareparamsset = false;

function flares(dur){
  TweenLite.killTweensOf('#flare');
  TweenLite.killTweensOf('#flare-copy');
  // top flare
  TweenLite.to('#flare-copy', dur/4, {alpha:1,onComplete:
    function(){
      TweenLite.to('#flare-copy', 3*(dur/4), {alpha:0});
    }
  });
  TweenLite.to('#flare-copy', dur, {x:flares_to_x,ease:Power1.easeOut,onComplete:
    function() {
      TweenLite.set('#flare-copy',{x:flares_x_start});
    }
  });
  // bottom flare
  TweenLite.to('#flare', dur/4, {delay:dur/2, alpha:1,onComplete:
    function(){
      TweenLite.to('#flare', 3*(dur/4), {alpha:0});
    }
  });
  TweenLite.to('#flare', dur, {delay:dur/2, x:flares_to_x,ease:Power1.easeOut,onComplete:
    function(){
      TweenLite.set('#flare',{x:flares_x_start});
    }
  });
  
}

function setFlareParams(){
  //set params of flares
  A.set('flare-copy', {x:flares_x_start,y:flare_top_y_pos});
  A.set('flare', {x:flares_x_start,y:flare_btm_y_pos});
}

function animateFlares(){
  if(flareparamsset == false){
    setFlareParams(); 
    flareparamsset = true;
  }
  //flares
  flares(flare_dur);
  A.dCall(4, function(){
    flares(flare_dur);
  });
  A.dCall(8.5, function(){
    flares(flare_dur);
  });
  A.dCall(13, function(){
    flares(flare_dur);
  });
}
