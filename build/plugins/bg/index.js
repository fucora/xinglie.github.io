let t={class:"xl-O xl-R"};import l from"../../lib/magix.js";import r from"../../os/wallpaper.js";import e from"../../lib/fetch.js";l.applyStyle("xld",".xl-O{width:310px;border-radius:2px;background:rgba(0,0,0,.53);height:62px;padding:2px 0;overflow:auto;box-shadow:0 -1px 0 6px rgba(0,0,0,.53)}.xl-P{width:100px;height:60px;background-size:cover;background-repeat:no-repeat;float:left;cursor:pointer;background-color:hsla(0,0%,100%,.2)}.xl-Q{margin-right:5px}.xl-R{scrollbar-width:thin;-ms-overflow-style:none}.xl-R::-webkit-scrollbar{height:0;width:0}.xl-R:hover::-webkit-scrollbar{height:2px}.xl-R::-webkit-scrollbar-corner{height:0;width:0}.xl-R::-webkit-scrollbar-thumb{background:hsla(0,0%,100%,.47);border-radius:2px}.xl-R::-webkit-scrollbar-thumb:hover{background:#fff}");let a="https://jsonp.afeld.me/?url=http%3A%2F%2Fwallpaper.apc.360.cn%2Findex.php%3Fc%3DWallPaper%26a%3DgetAppsByCategory%26cid%3D9%26count%3D20%26from%3D360chrome%26start%3D";export default l.View.extend({tmpl:(l,r,e,a,o,i,s,h)=>{let p,c,d,x,b,g=[],{list:n}=l;if(n&&n.length){d=[];for(let t=0,l=n,o=l.length,i=o-1;t<o;t++){let o=l[t],s=t===i,p=o.url.replace("bdr/__85","bdr/200_120_60");b="xl-P",s||(b+=" xl-Q"),x=[r("div",{style:"background-image:url("+a(p)+")","mx-click":e+"\x1e_al({thumb:'"+h(p)+"',src:'"+h(o.url)+"'})",class:b})],d.push(...x)}c=[r("div",{style:"height:100%;width:"+a(105*n.length-5)+"px"},d)],p=[r("div",t,c)],g.push(...p)}return r(e,0,g)},async render(){try{let{start:t,last:l,exist:r}=(()=>{let t=Math.floor(200*Math.random()),l=localStorage.getItem("ls#bg.random"),r=0,e=0;if(l){let a=JSON.parse(l);a._aj>Date.now()?(t=a._ak,e=1):r=a._ak}return{exist:e,start:t,last:r}})();e.clear(a+l,36e5),r||localStorage.setItem("ls#bg.random",JSON.stringify({_aj:18e5+Date.now(),_ak:t}));let o=await e(a+t,36e5),i=[];o&&o.data&&(i=o.data),this.digest({list:i})}catch(t){this.digest()}},"_al<click>"(t){let{thumb:l,src:e}=t.params;r._ah(l,e)}});