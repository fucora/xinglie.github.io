/*!1.0.5 kooboy_li@163.com*/
let e,i,l={class:"xl-co"},t={class:"xl-cv"},o={value:"value"},c={selected:"selected"};import x from"../../lib/magix.js";import n from"./vip.js";x.applyStyle("xl-q",".xl-cn{height:30px;box-sizing:border-box}.xl-co{background:#fff;padding:2px 10px}.xl-cp{height:130px;position:absolute;top:-31px;width:100%;-webkit-transition:top .25s;transition:top .25s}.xl-cp:hover{top:0}.xl-cq{width:calc(70% - 110px);height:26px;outline:none;font-size:16px;padding:0 4px;border-radius:4px;box-sizing:border-box;border:1px solid #ccc}.xl-cr{width:30%;border:1px solid #ccc}.xl-cs,.xl-cr{height:26px;outline:none;font-size:16px;padding:0 4px;background:none;margin-left:10px}.xl-cs{width:80px;border-radius:4px}.xl-ct{width:98%;height:calc(100% - 40px);margin:0 1%}.xl-cu{width:100%;margin:0;height:100%}.xl-cv{height:28px;line-height:28px;padding:0 26px;background:#f5f5f5;color:#333;margin-top:5px}.xl-cw{float:left;padding:0 5px;cursor:pointer}.xl-cx{background:#fff}.xl-cy{height:calc(100% - 73px);overflow:auto}.xl-cz{margin:10px;padding:5px 5px 0;background:#fafafa;border-radius:4px;-webkit-transition:box-shadow .25s;transition:box-shadow .25s;float:left}.xl-cz:hover{box-shadow:0 3px 6px 0 rgba(0,0,0,.08)}.xl-cA{width:250px;height:140px}.xl-cB{width:105px;height:140px}.xl-cC{height:25px;line-height:25px}.xl-cD{width:105px;overflow:hidden;text-overflow:ellipsis}.xl-cE{float:left;font-weight:700;color:#333;margin-left:4px;font-size:16px}.xl-cF{float:right;color:#aaa}.xl-cG,.xl-cG:visited{color:#45b6f7;text-decoration:none;margin:0 4px}.xl-cG:active,.xl-cG:hover{text-decoration:underline;color:#42a5df}.xl-cH,.xl-cH:visited{color:#1000f9;text-decoration:underline;margin:0 10px}.xl-cH:active,.xl-cH:hover{text-decoration:none;color:#0b00a4}.xl-cI{padding:20px 0;font-size:16px;text-align:center}.xl-cJ{height:36px;line-height:36px;padding:0 30px}.xl-cK{font-size:16px;font-style:italic;width:30px;display:inline-block;text-align:right}.xl-cL{padding:20px;height:calc(100% - 40px);position:relative}.xl-cM{height:100%;background-size:cover;background-position:center 0;opacity:.6;background-color:#000}.xl-cN{position:absolute;bottom:40px;left:50px;right:50px;padding:20px;color:#fff;background:rgba(0,0,0,.73)}.xl-cO{display:-webkit-box;display:flex;-webkit-box-align:end;align-items:flex-end}.xl-cP{font-size:22px;font-weight:700}.xl-cQ,.xl-cQ:visited{text-decoration:none}.xl-cQ:focus,.xl-cQ:hover{text-decoration:underline}.xl-cR{color:#86c2f7}.xl-cS{color:orange}.xl-cT{color:#00ab00}.xl-cU{margin:0 5px}.xl-cV{margin-left:auto}.xl-cW{position:absolute;right:40px;top:40px;color:#fff;background-color:#5d5d5d}");let a=[{name:"\u641c\u89c6\u7f51",id:"tvsou",view:"~xl/plugins/video/tvsou"},{name:"\u5168\u89c6\u9891",id:"qsp",view:"~xl/plugins/video/qsp"},{name:"80s\u624b\u673a\u7535\u5f71",id:"80s",view:"~xl/plugins/video/80s"}];export default x.View.extend({tmpl:(x,n,a,s,p,r,d,h)=>{let g,f,u,b,v,m,w=[],{list:k,si:y,maxState:_,url:z,played:q,tabs:I,active:G}=x,H=k[y].url;u=[n("input",{class:"xl-cq",placeholder:"\u8bf7\u8f93\u5165/\u7c98\u8d34\u64ad\u653e\u5730\u5740","mx-change":a+"\x1e_cn()",value:s(z)},0,o,1)],b=[];for(let e=k.length,i=0;i<e;i++){let e=k[i];m=[n(0,0,s(e.name))],v=[n("option",{value:s(e.url),selected:i==y},m,c)],b.push(...v)}if(u.push(n("select",{class:"xl-cr","mx-change":a+"\x1e_cm()"},b)),b=[n(0,0,"\u64ad\u653e")],u.push(n("button",{_:"_",type:"button",class:"xl-cs","mx-click":a+"\x1e_co()"},b)),f=[n("div",l,u)],g="xl-cn",_&&H&&(g+=" xl-cp"),w.push(n("div",{class:g},f)),q&&H&&z)g="xl-ct",_&&(g+=" xl-cu"),f=[n("iframe",{src:s(H)+s(encodeURIComponent(z)),sandbox:"allow-scripts allow-same-origin",allowfullscreen:!0,scrolling:"no",frameborder:"0",class:g})],w.push(...f);else{let l;f=[],u=[];for(let e=I.length,i=0;i<e;i++){let e=I[i];v=[n(0,0,s(e.name))],g="xl-cw",e.id==G&&(l=e,g+=" xl-cx"),b=[n("div",{"mx-click":e.id!=G&&a+"\x1e_cf({id:'"+h(e.id)+"'})",class:g},v)],u.push(...b)}f.push(n("div",t,u)),l?(e?b=[e]:(v=[n(0,0,"\u7535\u5f71\u5217\u8868\u52a0\u8f7d\u4e2d...")],b=[e=n("div",{_:"a",class:"xl-cI"},v)]),u=[n("div",{"mx-view":s(l.view),class:"xl-cy"},b)],f.push(...u)):(i?u=[i]:(b=[n(0,0,"\u8bf7\u4ece\u4e0a\u65b9\u9009\u62e9\u67e5\u770b\u7684\u7535\u5f71\u6765\u6e90")],u=[i=n("div",{_:"b",class:"xl-cI"},b)]),f.push(...u)),w.push(...f)}return n(a,0,w)},init(e){this.assign(e),this.set({tabs:a,active:"",si:0,url:""})},assign(e){return this.set(e),!0},render(){this.digest({list:n})},"_cm<change>"(e){let i=e.eventTarget.selectedIndex;this.set({si:i})},"_cn<change>"(e){let i=e.eventTarget.value;this.set({url:i})},"_co<click>"(){this.digest({played:!0})},"_cf<click>"(e){this.digest({active:e.params.id})}});