//config
var cfg ={
  t : 'AWC34261-',
  w : 160,
  h : 600
};

function runCfg(){
  var title=document.getElementsByTagName('title')[0];
  var sz=document.getElementById('size');
  title.innerHTML+=cfg.t+cfg.w+'x'+cfg.h;
  document.getElementById('adSizeMeta').setAttribute('content','width='+cfg.w+',height='+cfg.h);
  sz.setAttribute('data-width',cfg.w);
  sz.setAttribute('data-height',cfg.h);
}