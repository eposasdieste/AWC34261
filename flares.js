  function flares(dur){
    TweenLite.killTweensOf('#flare');
    TweenLite.killTweensOf('#flare-copy');
    // left flare
    TweenLite.to('#flare-copy', dur/4, {alpha:1,onComplete:function(){
      TweenLite.to('#flare-copy', 3*(dur/4), {alpha:0});
    }});
    TweenLite.to('#flare-copy', dur, {y:30,ease:Power1.easeOut,onComplete:function(){TweenLite.set('#flare-copy',{y:200});}});
    // top flare
    TweenLite.to('#flare', dur/4, {alpha:1,onComplete:function(){
      TweenLite.to('#flare', 3*(dur/4), {alpha:0});
    }});
    TweenLite.to('#flare', dur, {x:200,ease:Power1.easeOut,onComplete:function(){TweenLite.set('#flare',{x:-50});}});
  }