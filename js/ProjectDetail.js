jQuery(document).ready(function($){
   $('.panel').pwstabs({
       // scale, slideleft, slideright, slidetop, slidedown
      effect: 'slidedown', 
 
      // The tab to be opened by default
      defaultTab: 1,    
 
      // Set custom container width
      // Any size value (1,2,3.. / px,pt,em,%,cm..)
      containerWidth: '85%',

      // Tabs position: horizontal / vertical
      tabsPosition: 'horizontal',
 
      // Tabs horizontal position: top / bottom
      horizontalPosition: 'top',

 
      // Right to left support: true/ false
      rtl: false

 
   });        
});

TINY={};
TINY.box=function(){var c,g,f,e,a,b=0;return{show:function(d){a={opacity:70,close:1,animate:1,fixed:1,mask:1,maskid:"",boxid:"",topsplit:2,url:0,post:0,height:0,width:0,html:0,iframe:0};for(s in d)a[s]=d[s];b?(c.style.display="none",clearTimeout(b.ah),e.v&&(c.removeChild(e),e.v=0)):(c=document.createElement("div"),c.className="tbox",b=document.createElement("div"),b.className="tinner",f=document.createElement("div"),f.className="tcontent",g=document.createElement("div"),g.className="tmask",e=document.createElement("div"),
e.className="tclose",e.v=0,document.body.appendChild(g),document.body.appendChild(c),c.appendChild(b),b.appendChild(f),g.onclick=e.onclick=TINY.box.hide,window.onresize=TINY.box.resize);b.id=a.boxid;g.id=a.maskid;c.style.position=a.fixed?"fixed":"absolute";a.html&&!a.animate?(b.style.backgroundImage="none",f.innerHTML=a.html,f.style.display="",b.style.width=a.width?a.width+"px":"auto",b.style.height=a.height?a.height+"px":"auto"):(f.style.display="none",!a.animate&&a.width&&a.height?(b.style.width=
a.width+"px",b.style.height=a.height+"px"):b.style.width=b.style.height="100px");a.mask?(this.mask(),this.alpha(g,1,a.opacity)):this.alpha(c,1,100);a.autohide?b.ah=setTimeout(TINY.box.hide,1E3*a.autohide):document.onkeyup=TINY.box.esc},fill:function(d,k,h,c,f,e){if(k)if(a.image){var g=new Image;g.onload=function(){f=f||g.width;e=e||g.height;TINY.box.psh(g,c,f,e)};g.src=a.image}else if(a.iframe)this.psh('<iframe src="'+a.iframe+'" width="'+a.width+'" frameborder="0" height="'+a.height+'"></iframe>',
c,f,e);else{var l=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");l.onreadystatechange=function(){4==l.readyState&&200==l.status&&(b.style.backgroundImage="",TINY.box.psh(l.responseText,c,f,e))};h?(l.open("POST",d,!0),l.setRequestHeader("Content-type","application/x-www-form-urlencoded"),l.send(h)):(l.open("GET",d,!0),l.send(null))}else this.psh(d,c,f,e)},psh:function(a,k,h,c){"object"==typeof a?f.appendChild(a):f.innerHTML=a;a=b.style.width;var e=b.style.height;h&&
c||(b.style.width=h?h+"px":"",b.style.height=c?c+"px":"",f.style.display="",c||(c=parseInt(f.offsetHeight)),h||(h=parseInt(f.offsetWidth)),f.style.display="none");b.style.width=a;b.style.height=e;this.size(h,c,k)},esc:function(a){a=a||window.event;27==a.keyCode&&TINY.box.hide()},hide:function(){TINY.box.alpha(c,-1,0,3);document.onkeypress=null;a.closejs&&a.closejs()},resize:function(){TINY.box.pos();TINY.box.mask()},mask:function(){g.style.height=this.total(1)+"px";g.style.width=this.total(0)+"px"},
pos:function(){var d;"undefined"!=typeof a.top?d=a.top:(d=this.height()/a.topsplit-c.offsetHeight/2,d=20>d?20:d);a.fixed||a.top||(d+=this.top());c.style.top=d+"px";c.style.left="undefined"!=typeof a.left?a.left+"px":this.width()/2-c.offsetWidth/2+"px"},alpha:function(a,b,c){clearInterval(a.ai);b&&(a.style.opacity=0,a.style.filter="alpha(opacity=0)",a.style.display="block",TINY.box.pos());a.ai=setInterval(function(){TINY.box.ta(a,c,b)},20)},ta:function(d,k,h){var e=Math.round(100*d.style.opacity);
e==k?(clearInterval(d.ai),-1==h?(d.style.display="none",d==c?TINY.box.alpha(g,-1,0,2):f.innerHTML=b.style.backgroundImage=""):d==g?this.alpha(c,1,100):(c.style.filter="",TINY.box.fill(a.html||a.url,a.url||a.iframe||a.image,a.post,a.animate,a.width,a.height))):(k-=Math.floor(.5*Math.abs(k-e))*h,d.style.opacity=k/100,d.style.filter="alpha(opacity="+k+")")},size:function(d,k,h){if(h){clearInterval(b.si);var g=parseInt(b.style.width)>d?-1:1,m=parseInt(b.style.height)>k?-1:1;b.si=setInterval(function(){TINY.box.ts(d,
g,k,m)},20)}else b.style.backgroundImage="none",a.close&&(c.appendChild(e),e.v=1),b.style.width=d+"px",b.style.height=k+"px",f.style.display="",this.pos(),a.openjs&&a.openjs()},ts:function(d,k,h,g){var m=parseInt(b.style.width),n=parseInt(b.style.height);m==d&&n==h?(clearInterval(b.si),b.style.backgroundImage="none",f.style.display="block",a.close&&(c.appendChild(e),e.v=1),a.openjs&&a.openjs()):(m!=d&&(b.style.width=d-Math.floor(.6*Math.abs(d-m))*k+"px"),n!=h&&(b.style.height=h-Math.floor(.6*Math.abs(h-
n))*g+"px"),this.pos())},top:function(){return document.documentElement.scrollTop||document.body.scrollTop},width:function(){return self.innerWidth||document.documentElement.clientWidth||document.body.clientWidth},height:function(){return self.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},total:function(a){var b=document.body,c=document.documentElement;return a?Math.max(Math.max(b.scrollHeight,c.scrollHeight),Math.max(b.clientHeight,c.clientHeight)):Math.max(Math.max(b.scrollWidth,
c.scrollWidth),Math.max(b.clientWidth,c.clientWidth))}}}();

// $(document).ready(function(){
//     $('.maintenance-container a').click(function(){
//       $('.maintenance-container').hide();
//     });
//   });