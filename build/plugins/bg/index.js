/*!1.0.5 kooboy_li@163.com*/
let t={class:"xl-Q xl-T"};import r from"../../lib/magix.js";import e from"../../os/wallpaper.js";import a from"../../lib/agent.js";import l from"../../lib/cron.js";r.applyStyle("xl-e",".xl-Q{width:310px;border-radius:2px;background:rgba(0,0,0,.53);height:62px;padding:2px 0;overflow:auto;box-shadow:0 -1px 0 6px rgba(0,0,0,.53)}.xl-R{width:100px;height:60px;background-size:cover;background-repeat:no-repeat;float:left;cursor:pointer;background-color:hsla(0,0%,100%,.2)}.xl-S{margin-right:5px}.xl-T{scrollbar-width:thin;-ms-overflow-style:none}.xl-T::-webkit-scrollbar{height:0;width:0}.xl-T:hover::-webkit-scrollbar{height:2px}.xl-T::-webkit-scrollbar-corner{height:0;width:0}.xl-T::-webkit-scrollbar-thumb{background:hsla(0,0%,100%,.47);border-radius:2px}.xl-T::-webkit-scrollbar-thumb:hover{background:#fff}");let o="http://wallpaper.apc.360.cn/index.php?c=WallPaper&a=getAppsByCategory&cid=9&count=40&from=360chrome&start=";export default r.View.extend({tmpl:(r,e,a,l,o,i,s,h)=>{let p,d,c,n,b,g=[],{list:x}=r;if(x&&x.length){c=[];for(let t=x.length,r=t-1,o=0;o<t;o++){let t=x[o],i=o===r,s=t.url.replace("bdr/__85","bdr/200_120_60");b="xl-R",i||(b+=" xl-S"),n=[e("div",{style:"background-image:url("+l(s)+")","mx-click":a+"\x1e_ar({thumb:'"+h(s)+"',src:'"+h(t.url)+"'})",class:b})],c.push(...n)}d=[e("div",{style:"height:100%;width:"+l(105*x.length-5)+"px"},c)],p=[e("div",t,d)],g.push(...p)}return e(a,0,g)},assign:()=>!1,async render(){try{let{start:t,last:r,exist:e}=(()=>{let t=Math.floor(400*Math.random()),r=localStorage.getItem("ls#bg.random"),e=0,a=0;if(r){let l=JSON.parse(r);l._an>Date.now()?(t=l._ao,a=1):e=l._ao}return{exist:a,start:t,last:e}})();a.clear(o+r,!0),e||localStorage.setItem("ls#bg.random",JSON.stringify({_an:18e5+Date.now(),_ao:t}));let l=await a.request(o+t,36e5,!0),i=JSON.parse(l),s=[];i&&i.data&&(s=i.data),this.digest({list:s}),this._ap(s)}catch(t){this.digest()}},_ap(t){if(!this._aq){this._aq=1;let r=()=>{let r=Math.floor(Math.random()*t.length),a=t[r].url,l=a.replace("bdr/__85","bdr/200_120_60");e._am(l,a)};l._s(r,144e5,!0),this.on("destroy",()=>{l._t(r)})}},"_ar<click>"(t){let{thumb:r,src:a}=t.params;e._am(r,a)}});