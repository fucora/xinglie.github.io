/*!1.0.5 kooboy_li@163.com*/
let l={class:"xl-U xl-_"},e={class:"xl-V"},a={class:"xl-W"},r={class:"xl-Y"},i={class:"xl-Z"};import x from"../../lib/magix.js";import t from"./db.js";x.applyStyle("xl-f",'[mx-view^="~xl/plugins/blog/index"]{background:#3f3e3c}.xl-U{width:1080px;margin:0 auto 20px}.xl-V{margin:20px 5px;background:#222;box-shadow:0 1px 0 hsla(0,0%,100%,.1),inset 0 1px 1px rgba(0,0,0,.7);width:530px;color:#b9b9b9;border-radius:6px;float:left}.xl-W{padding:0 0 0 20px;font:16px/50px Microsoft YaHei,Arial,Helvetica,sans-serif}.xl-X{color:#a6a6a6;text-decoration:none;-webkit-transition:all 1s ease;transition:all 1s ease}.xl-X:hover{padding-left:20px;color:#fff}.xl-Y{overflow:hidden;line-height:24px;height:50px;padding:0 20px 5px;color:#616161}.xl-Z{background:rgba(1,1,1,.3);border-radius:0 0 6px 6px;padding:0 10px 0 18px;color:#3f3e3c}');export default x.View.extend({tmpl:(x,t,s,o)=>{let p,d,n,c,f,g=[],{list:h}=x;p=[];for(let l=h.length,x=0;x<l;x++){let l=h[x];f=[t(0,0,o(l.title))],c=[t("a",{class:"xl-X",href:o(l.href),target:"_blank",rel:"noopener noreferrer"},f)],n=[t("h2",a,c)],c=[t(0,0,o(l.desc))],n.push(t("div",r,c)),c=[t(0,0,o(l.date))],n.push(t("div",i,c)),d=[t("div",e,n)],p.push(...d)}return g.push(t("div",l,p)),t(s,0,g)},assign:()=>!1,render(){this.digest({list:t})}});