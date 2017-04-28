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
  var e = ['1-1', '2-1', '2-2', '3-1', '3-2', '4-1', '4-2', '4-3','phone', 'phones', 'blackborders', 'bubble', 'overlay', 'x'];
  var b = {x:0, y:0, atlas:true, dimensions:{w:90, h:22}};
  var r = {x:0, y:0, scale:0.5, transformOrigin:"13px 15px", reverse:false, hardRefresh:true};
  Main.init(null, null, e, b, '', r, null, null);
  B.prelim();
  F.HDify(['1-1', '2-1', '2-2', '3-1', '3-2', '4-1', '4-2', '4-3', 'blackborders', 'bubble', 'overlay', 'x']);
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
      init(); //adobe animate start-up code 
    })();
  }
  B.prelimDone = true;
}
//animate the banner ad
B.animate = function(){
A.visible(['back','overlay','blackborders']);
B.addScrollableLegal(false);

// 'f1', 'f2', and so on, is the array of elements in each frame 
var d = 2.5, st = 0.1;
var f1 = ['1-1'];
var f2 = ['2-1','2-2'];
var f3 = ['3-1','3-2'];
var f4 = ['4-1','4-2','4-3'];

frame1(); //start up animation 

// frame 1 animation 
function frame1(){
  A.slideinfrombottom('phone');
//  A.fadeinfrombottom(f1, st, function(){
//      A.dCall(d, frame1_out);
//    });
//  }
  TweenLite.from(exportRoot.t1, 0.5, function(){
    A.dCall(d, frame1_out);
  });
}
function frame1_out(){
  A.fadeouttoright(f1, st, frame2);
}
    
    
// frame 2 animation 
function frame2(){
  A.fadeinfromleft(f2, st, function(){
      A.dCall(d, frame2_out);
    });
  }
function frame2_out(){
  A.fadeouttoright(f2, st, frame3);
}
    
// frame 3 animation 
function frame3(){
  A.fadeinfromleft(f3, st, function(){
      A.dCall(d, frame3_out);
    });
  }
function frame3_out(){
  A.slideoffdown('phone');
  A.fadeouttobottom(f3, st, frame4);
}

// frame 4 animation 
function frame4(){
  A.slideinfromright('phones');
  A.fadeIn(f4, st, function(){
      A.dCall(1, function(){
        console.log('end.');
        TweenLite.set('#btn',{force3D:false});
        B.adEnd();
      });
    });
  } 
}

