/*!1.0.5 kooboy_li@163.com*/
let i;import e from"../../lib/magix.js";export default e.View.extend({tmpl:(e,r,t)=>{if(!i){let e=[];e.push(r("iframe",{sandbox:"allow-scripts allow-same-origin",src:"//baidu.kuaidi100.com/index2.html",frameborder:"no",style:"width:100%;height:100%",scrolling:"no"})),i=r(t,0,e)}return i},assign:()=>!1,render(){this.digest()}});