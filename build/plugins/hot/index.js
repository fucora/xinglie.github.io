/*!1.1.0 kooboy_li@163.com*/
import e from"../../lib/magix.js";import t from"../../lib/cron.js";import i from"../../lib/agent.js";import a from"../../gallery/mx-dragdrop/index.js";e.applyStyle("xl-m",".xl-aM{border-radius:2px;background:rgba(0,0,0,.53);height:60px;padding:2px 4px;overflow:auto;box-shadow:0 -1px 0 3px rgba(0,0,0,.53);font-size:12px;transition:all .5s}.xl-aN{opacity:.1}.xl-aO{width:322px;float:left;line-height:20px;cursor:pointer;margin:0 4px;padding:0 6px;border-radius:2px}.xl-aO:hover{background-color:hsla(0,0%,100%,.13)}.xl-aP::-webkit-scrollbar{height:0;width:0}.xl-aP:hover::-webkit-scrollbar{width:2px}.xl-aP::-webkit-scrollbar-corner{height:0;width:0}.xl-aP::-webkit-scrollbar-thumb{background:hsla(0,0%,100%,.47);border-radius:2px}.xl-aP::-webkit-scrollbar-thumb:hover{background:#fff}.xl-aQ{width:15px;height:14px;position:absolute;z-index:10000;padding:1px;border:1px solid hsla(0,0%,100%,.27);border-radius:2px}");let s=(e,t)=>Date.parse(t.ctime)-Date.parse(e.ctime),l=e.guid("_aK"),r={_w(t,i){let a=e.node(l);a||((a=document.createElement("div")).id=l,a.innerHTML='<svg viewBox="0 0 1052 1024"><path d="M454.438 1024C302.958 835.56 124.213 693.17 0 648.331l294.779-176.927 142.087 276.298S668.326 186.925 1033.998 0c-7.877 133.605-44.232 249.335 18.48 392.028C891.91 428.383 562.594 828.895 454.438 1024z" fill="green"/></svg>',a.className="xl-aQ",document.body.appendChild(a));let s=a.style;s.display="",s.left=t+12+"px",s.top=i+8+"px"},_B(){let t=e.node(l);t&&(t.style.display="none")}};export default e.View.extend({tmpl:(e,t,i,a,s,l,r)=>{let o,d,n,p,h=[],{news:x}=e;d=[];for(let e=x.length,s=0;s<e;s+=1){let e=x[s];p=[t(0,0,a(e.title))],n=[t("div",{class:"xl-L xl-aO",title:a(e.title)+"\n\u6765\u6e90\uff1a"+a(e.source)+"\r\u65e5\u671f\uff1a"+a(e.ctime),"mx5-click":i+"\x1e_aP({n:'"+r(l,e,"\x1ed."+s)+"',i:"+a(s)+"})","mx5-mousedown":i+"\x1e_aQ({i:"+a(s)+"})"},p)],d.push(...n)}return o="xl-aM xl-aP",x.length||(o+=" xl-aN"),h.push(t("div",{id:"s_"+i,class:o},d)),t(i,0,h)},init(){let e=this.render.bind(this);t._s(e,18e5,!1,"_aL"),this.on("destroy",()=>{t._t(e)}),this.set({news:[]}),this._aM={}},assign:()=>!1,async render(){let t=e.mark(this,"_aN");try{let a=await i.request("//api.tianapi.com/topnews/index?key=b9b7f0a5e92206c91cb09d93c4c24ca4"),l=JSON.parse(a);if(l&&l.newslist&&t()){let i=this.get("news"),a=this._aM,r=l.newslist;for(let e of r)a[e.title]||(a[e.title]=1,i.push(e));if(i=i.sort(s),await this.digest({news:i}),t()){e.node(`s_${this.id}`).scrollTop=0}}}catch(e){}},"_aP<click>"(e){if(!this._aO){let{n:t,i:i}=e.params;window.open(t.url);let a=this.get("news");a.splice(i,1),this.digest({news:a})}},"_aQ<mousedown>"(t){let i,{i:a}=t.params,s=!1;this._d(t,a=>{(s=s||Math.abs(a.pageX-t.pageX)>10||Math.abs(a.pageY-t.pageY)>10)&&(this._aO=1,e.inside(a.target,this.root)?i&&(i=0,r._B()):(i=1,r._w(a.pageX,a.pageY)))},t=>{if(!e.inside(t.target,this.root)){let e=this.get("news");e.splice(a,1),this.digest({news:e})}r._B(),setTimeout(()=>{delete this._aO})})}}).merge(a);