banner.adEndProps = { openDelay: 2, closeDelay:2 };

banner.adEnd = function(){
  A.impact('btn', 0, B.tOrigin);
  B.adState = 'ended';
  if(B.legalBubble === true){
    A.dCall(B.adEndProps.openDelay, function(){
      A.visible('bubble');
      A.invisible('btn');
        A.dCall(B.adEndProps.closeDelay, function(){
          B.adState = 'ended';
          A.invisible('bubble');
          A.visible('btn');
          B.showReload(1);
        });
      });
  }else{
    A.invisible('bubble');
    A.visible('btn');
    B.showReload(1);
  }
}

