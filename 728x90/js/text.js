// Text animation functions -- controls the adobe animate exported textassets.js

var text = {
  
  animate :
  function(){
    text.f1();
  },
  
  f1 :
  function(){
    TweenLite.from(exportRoot.t1, 0.5, { delay:0.25, y:140, alpha:0, onComplete:function(){
	 TweenLite.delayedCall(3, function(){
		TweenLite.to(exportRoot.t1, 0.5, { x:exportRoot.t1.x+10, alpha:0, ease:Power1.easeIn, onComplete:function(){
			exportRoot.gotoAndPlay("f2");
            text.f2();
		}});
      });
    }});
  },
  
  f2 :
  function(){
    TweenLite.from(exportRoot.t2_1, 0.5, { x:210, alpha:0 });
      TweenLite.from(exportRoot.t2_2, 0.5, { x:210, alpha:0, delay:0.1, onComplete:function(){
	   TweenLite.delayedCall(3, function(){
		TweenLite.to(exportRoot.t2_1, 0.5, { x:exportRoot.t2_1.x+10, alpha:0, ease:Power1.easeIn });
		TweenLite.to(exportRoot.t2_2, 0.5, { x:exportRoot.t2_2.x+10, alpha:0, ease:Power1.easeIn, delay:0.1, onComplete:function(){
			exportRoot.gotoAndPlay("f3");
            text.f3();
		}});
	   });
    }});
  },
  
  f3 :
  function(){
    TweenLite.from(exportRoot.t3_1, 0.5, { x:210, alpha:0 });
      TweenLite.from(exportRoot.t3_2, 0.5, { x:200, alpha:0, delay:0.1, onComplete:function(){
	   TweenLite.delayedCall(3, function(){
		TweenLite.to(exportRoot.t3_1, 0.5, { x:exportRoot.t3_1.x+10, alpha:0, ease:Power1.easeIn });
		TweenLite.to(exportRoot.t3_2, 0.5, { x:exportRoot.t3_2.x+10, alpha:0, ease:Power1.easeIn, delay:0.1, onComplete:function(){
			exportRoot.gotoAndPlay("f4");
            text.f4();
		}});
	   });
    }});
  },
  
  f4 :
  function(){
    TweenLite.from(exportRoot.t4_1, 0.5, { alpha:0 });
    TweenLite.from(exportRoot.t4_2, 0.5, { delay:0.1, alpha:0 });
    TweenLite.from(exportRoot.t4_3, 0.5, { delay:0.2, alpha:0, delay:0.1});
  }
  
}

