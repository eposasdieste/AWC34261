//flare animation functions 

var delay_time_incr = 0;
var flares_x_start = -60, flares_to_x = 220, flares_duration = 2.5;

function getFlareDelay(){
  delay_time_incr++;
  console.log(delay_time_incr);
  return delay_time_incr;
}

function flares(dur){
  A.dCall(getFlareDelay(), function(){
    A.set('flare', {x:flares_x_start,y:234});
    A.set('flare-copy', {x:flares_x_start,y:-2});
    TweenLite.killTweensOf('#flare');
    TweenLite.killTweensOf('#flare-copy');
    // top flare
    TweenLite.to('#flare-copy', dur/4, {alpha:1,onComplete:function(){
      TweenLite.to('#flare-copy', 3*(dur/4), {alpha:0});
    }});
    TweenLite.to('#flare-copy', dur, {x:flares_to_x,ease:Power1.easeOut,onComplete:function() {TweenLite.set('#flare-copy',{x:flares_x_start});}});
    // bottom flare
    TweenLite.to('#flare', dur/4, {alpha:1,onComplete:function(){
      TweenLite.to('#flare', 3*(dur/4), {alpha:0});
    }});
    TweenLite.to('#flare', dur, {x:flares_to_x,ease:Power1.easeOut,onComplete:
      function(){
        TweenLite.set('#flare',{x:flares_x_start});
      }
    });
  });
}
