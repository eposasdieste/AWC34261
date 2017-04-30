// Text animation functions -- controls the adobe animate exported textassets.js

var text = {
  
  animate :
  function(){
    text.f1();
  },
  
  f1 :
  function(){
    TweenLite.from(exportRoot.t1_1, 0.5, { delay:0, x:120, alpha:0 });
    TweenLite.from(exportRoot.t1_2, 0.5, { delay:0.1, x:105, alpha:0, onComplete:function(){
      B.adEnd();
    }});
  }
  
}

