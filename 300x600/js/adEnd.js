banner.adEndProps = { openDelay: 2, closeDelay:2 };

banner.adEnd = function(){
  A.impact('btn', 0, B.tOrigin);
  B.adState = 'ended';
  if(B.legalBubble === true){
    A.dCall(B.adEndProps.openDelay, function(){
      A.visible('bubble');
      //A.invisible('btn');
      A.set('btn', {alpha:0});
      A.set('canvas', {alpha:0.5});
        A.dCall(B.adEndProps.closeDelay, function(){
          B.adState = 'ended';
          A.invisible('bubble');
          A.set('canvas', {alpha:1});
          A.visible('btn');
          B.showReload(1);
        });
      });
  }else{
    A.invisible('bubble');
    A.set('canvas', {alpha:1});
    A.visible('btn');
    B.showReload(1);
  }
}

