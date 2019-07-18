import"./time.js";import"./lyric.js";import"./channels.js";let t,e,i,a,l,r,s={class:"xl-aU"},o={d:"M660.823 334.436H641.59c-9.072 0-16.402 7.33-16.402 16.403v132.6c-1.887-1.523-3.92-3.047-6.242-4.426L393.37 339.299c-25.548-15.822-46.45-4.21-46.45 25.91v293.582c0 30.047 20.684 41.297 45.942 25.04l226.663-146.392c2.033-1.306 3.92-2.758 5.662-4.21v139.424c0 9.073 7.33 16.403 16.402 16.403h19.233c9.073 0 16.403-7.331 16.403-16.403V350.839c0-9.073-7.331-16.403-16.403-16.403z",fill:"#fff"},n={class:"xl-bk"},c={class:"xl-aW"};import p from"../../lib/magix.js";import x from"../../gallery/mx-dragdrop/index.js";import h from"./player.js";p.applyStyle("xlk",".xl-aI{position:relative;color:#fff;height:30px;top:-65px;transition:top .2s}.xl-aJ{scrollbar-width:thin;-ms-overflow-style:none}.xl-aJ::-webkit-scrollbar{height:0;width:0}.xl-aJ:hover::-webkit-scrollbar{width:2px}.xl-aJ::-webkit-scrollbar-corner{height:0;width:0}.xl-aJ::-webkit-scrollbar-thumb{background:hsla(0,0%,100%,.47);border-radius:2px}.xl-aJ::-webkit-scrollbar-thumb:hover{background:#fff}.xl-aK{position:absolute;background:rgba(0,0,0,.53);height:190px;width:672px;transition:all .25s;overflow:auto;padding:4px;top:52px;border-radius:4px;right:0;z-index:1}.xl-aL{height:480px;width:672px}.xl-aM{top:0}.xl-aN{top:0;right:5px;width:20px;height:22px}.xl-aO{width:78px;float:left;height:90px;text-align:center;cursor:pointer;border:1px solid transparent;border-radius:5px;margin:2px}.xl-aO:hover{opacity:.6;border-color:hsla(0,0%,100%,.2)}.xl-aP{border-color:#fff}.xl-aP:hover{opacity:1;border-color:#fff}.xl-aQ{display:inline-flex;align-items:center;width:68px;height:60px}.xl-aR{width:auto;height:auto;max-width:100%;max-height:100%}.xl-aS{width:50px;height:50px;border:1px solid #fff;float:left;background-size:cover;background-repeat:no-repeat;background-color:#aaa;margin:-12px 2px 2px}.xl-aT{width:8px;height:8px;background:#333;border-radius:50%;margin:50%;transform:translate(-4px,-4px);box-shadow:0 0 0 3px hsla(0,0%,100%,.73)}.xl-aU{height:30px;line-height:30px;background:#333;position:relative;z-index:2;width:600px;padding:0 5px;border-radius:4px}.xl-aV{font-size:12px;float:left;width:100px;overflow:hidden;margin:0 5px;position:relative}.xl-aW{position:absolute;left:0;top:0;background:#333;width:100px}@-webkit-keyframes xl-a{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes xl-a{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.xl-aS{border-radius:50%;-webkit-animation:xl-a 8s linear infinite;animation:xl-a 8s linear infinite;border-width:3px;cursor:pointer}.xl-aX{border:1px solid transparent;cursor:pointer;border-radius:2px;width:20px;height:20px;float:left;display:block;margin-top:4px}.xl-aX:hover{opacity:.6;border-color:#fff}.xl-aY{cursor:not-allowed;opacity:.6}.xl-aY:hover{border-color:transparent}.xl-aZ{border-color:#fff}.xl-b_{height:30px;display:inline-flex;align-items:center;float:left}.xl-ba{width:240px}.xl-bb{transform:rotate(180deg)}.xl-bc{font-size:12px}.xl-bd{width:80px;margin:0 10px}.xl-be{font-size:12px;margin:0 10px}.xl-bf{text-align:center;position:absolute;border-radius:4px;width:400px;height:60px;left:210px;top:65px;background:rgba(0,0,0,.53);overflow:hidden;z-index:1;cursor:move}.xl-bg{font-size:12px;line-height:20px;color:#ddd;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:20px;overflow:hidden}.xl-bh{font-weight:700;font-size:14px;opacity:1;color:#fff}.xl-bi{position:absolute;right:5px;top:0;width:14px;height:14px}@-webkit-keyframes xl-b{0%{transform:translate(0)}to{transform:translate(-50%)}}@keyframes xl-b{0%{transform:translate(0)}to{transform:translate(-50%)}}.xl-bj{-webkit-animation:xl-b 20s linear infinite;animation:xl-b 20s linear infinite;border-spacing:0;display:table}.xl-bk{white-space:nowrap;min-width:100px;display:table-cell}.xl-bl{-webkit-animation-play-state:paused;animation-play-state:paused}.xl-bm{-webkit-animation-name:none;animation-name:none;padding-left:0}");export default p.View.extend({tmpl:(p,x,h,d)=>{let f,g,m,b,u,v,w,_,k=[],{active:y,buffer:z,song:V,play:H,undo:M,ptip:I,reset:X,ntip:S,mode:j,error:J,cshow:L}=p;if(g=[],y){let p,k=z||!V.picture||!H;t?u=[t]:(v=[x("path",o,0,1)],u=[t=x("svg",{_:"_",viewBox:"0 0 1024 1024"},v)]),f="xl-aX xl-bb",M||(f+=" xl-aY"),b=[x("span",{"mx-click":M&&h+"\x1e_aV()",title:d(I),class:f},u)],u=e?[e]:[e=x("div",{_:"a",class:"xl-aT"})],f="xl-aS",k&&(f+=" xl-bl"),X&&(f+=" xl-bm"),b.push(x("div",{"mx-click":!z&&V.picture&&h+"\x1e_aT()",style:null!=V.picture&&"background-image:url("+d(V.picture)+")",class:f},u)),t?u=[t]:(v=[x("path",o,0,1)],u=[t=x("svg",{_:"_",viewBox:"0 0 1024 1024"},v)]),b.push(x("span",{class:"xl-aX","mx-click":h+"\x1e_aI()",title:d(S)},u)),u=[],"rdm"==j?(i?v=[i]:(_=[x("path",{d:"M229.555 408.457h103.542c5.192 0 20.672 5.192 25.863 10.382l36.245 36.245c10.382 15.573 31.054 15.573 46.534 0 15.573-10.382 15.573-31.053 0-46.534l-36.245-36.245c-15.48-15.48-46.534-31.053-72.489-31.053h-103.45c-20.671 0-31.053 15.573-31.053 31.053 0 20.579 15.573 36.152 31.053 36.152z",fill:"#fff"},0,1),x("path",{d:"M617.771 408.457h56.916v41.436c0 10.382 5.191 15.573 15.573 10.382l119.023-77.588c10.382-5.191 10.382-15.573 0-20.671L690.26 284.428c-10.382-5.191-15.573 0-15.573 10.382v56.824h-56.916c-51.725 0-62.106 25.863-98.351 62.106L400.397 584.303c-20.672 20.671-82.779 41.435-113.833 41.435h-56.916c-20.671 0-31.053 15.48-31.053 31.054 0 20.671 15.48 31.053 31.053 31.053h56.916c51.725 0 124.215-25.863 160.459-62.106L566.046 454.99c25.863-25.863 20.672-46.534 51.725-46.534z",fill:"#fff"},0,1),x("path",{d:"M809.283 646.503L690.26 563.725c-10.382-5.191-15.573 0-15.573 10.382v51.725h-56.916c-5.191 0-20.671-5.19-25.863-10.382l-36.245-36.244c-10.382-15.574-31.053-15.574-46.534 0-15.48 10.382-15.48 31.053 0 46.534l36.245 36.244c15.574 15.48 46.534 31.054 72.49 31.054h56.915v41.436c0 10.382 5.192 15.48 15.574 10.382l119.023-77.588c10.196-5.191 10.196-15.573-.093-20.764z",fill:"#fff"},0,1)],v=[i=x("svg",{_:"b",viewBox:"0 0 1024 1024"},_)]),u.push(...v)):(a?v=[a]:(_=[x("path",{fill:"#fff",d:"M841.8 513.1c0 .1 0 .1 0 0 0 106.1-86 192.1-192 192.1H393.7c-106 0-192-86-192-192s86-192 192-192h309.8v77.1l186.8-107.8-186.8-107.9v74H392.7c-141.4 0-256.1 114.6-256.1 256.1 0 141.4 114.6 256.1 256.1 256.1h256c141.3 0 255.9-114.4 256.1-255.7h-63z"},0,1),x("path",{fill:"#fff",d:"M542.7 626.5V388h-10.1c-4.1 3.6-9 7.2-14.6 11-5.6 3.7-11.6 7.3-18 10.7-6.3 3.4-12.8 6.5-19.4 9.3-6.6 2.8-12.8 5-18.6 6.6v27c5.2-1.3 10.5-3.1 16-5.4 5.5-2.3 10.7-4.7 15.6-7.3 4.9-2.6 9.4-5.2 13.3-7.9 4-2.7 7-5 9-7.1v201.6h26.8z"},0,1)],v=[a=x("svg",{_:"c",viewBox:"0 0 1024 1024"},_)]),u.push(...v)),w="\u6b63\u5728",w+="rdm"==j?"\u968f\u673a\u64ad\u653e":"\u5355\u66f2\u5faa\u73af",b.push(x("span",{class:"xl-aX","mx-click":h+"\x1e_aW()",title:w},u)),u=[],_=[x(0,0,d(V.title)+"<"+d(V.artist)+">\u2003\u2003\u2003\u2003")],v=[x("div",n,_)],_=[x(0,0,d(V.title)+"<"+d(V.artist)+">\u2003\u2003\u2003\u2003")],v.push(x("div",n,_)),f="xl-bj",k&&(f+=" xl-bl"),X&&(f+=" xl-bm"),u.push(x("div",{class:f},v)),J?p=J:H||z?z&&(p="\u6b63\u5728\u7f13\u51b2..."):p="\u70b9\u51fb\u5149\u76d8\u5f00\u59cb\u64ad\u653e",p&&(_=[x(0,0,d(p))],v=[x("span",c,_)],u.push(...v)),b.push(x("div",{class:"xl-aV",title:d(V.title)+"<"+d(V.artist)+">"},u)),l?b.push(l):b.push(l=x("div",{_:"d","mx-view":"~xl/plugins/mplayer/time",class:"xl-b_"})),r?u=[r]:(v=[x("path",{fill:"#fff",d:"M343.25 512h-112.5c-61.875 0-112.5 50.625-112.5 112.5V737c0 61.875 50.625 112.5 112.5 112.5h112.5c61.875 0 112.5-50.625 112.5-112.5V624.5c0-61.875-50.625-112.5-112.5-112.5zm56.25 225c0 30.938-25.313 56.25-56.25 56.25h-112.5c-30.938 0-56.25-25.313-56.25-56.25V624.5c0-30.938 25.313-56.25 56.25-56.25h112.5c30.938 0 56.25 25.313 56.25 56.25V737zM737 118.25H624.5c-61.875 0-112.5 50.625-112.5 112.5v112.5c0 61.875 50.625 112.5 112.5 112.5H737c61.875 0 112.5-50.625 112.5-112.5v-112.5c0-61.875-50.625-112.5-112.5-112.5zm56.25 225c0 30.938-25.313 56.25-56.25 56.25H624.5c-30.938 0-56.25-25.313-56.25-56.25v-112.5c0-30.938 25.313-56.25 56.25-56.25H737c30.938 0 56.25 25.313 56.25 56.25v112.5zM737 512H624.5C562.625 512 512 562.625 512 624.5V737c0 61.875 50.625 112.5 112.5 112.5H737c61.875 0 112.5-50.625 112.5-112.5V624.5c0-61.875-50.625-112.5-112.5-112.5zm56.25 225c0 30.938-25.313 56.25-56.25 56.25H624.5c-30.938 0-56.25-25.313-56.25-56.25V624.5c0-30.938 25.313-56.25 56.25-56.25H737c30.938 0 56.25 25.313 56.25 56.25V737zm-450-618.75h-112.5c-61.875 0-112.5 50.625-112.5 112.5v112.5c0 61.875 50.625 112.5 112.5 112.5h112.5c61.875 0 112.5-50.625 112.5-112.5v-112.5c0-61.875-50.625-112.5-112.5-112.5zm56.25 225c0 30.938-25.313 56.25-56.25 56.25h-112.5c-30.938 0-56.25-25.313-56.25-56.25v-112.5c0-30.938 25.313-56.25 56.25-56.25h112.5c30.938 0 56.25 25.313 56.25 56.25v112.5z"},0,1)],u=[r=x("svg",{_:"e",viewBox:"0 0 1024 1024"},v)]),b.push(x("span",{class:"xl-aX","mx-click":h+"\x1e_aU()",title:"\u5f53\u524d\u5206\u7c7b\uff1a"+d(y.name)},u)),m=[x("div",s,b),x("div",{_:"f","mx-view":"~xl/plugins/mplayer/lyric",class:"xl-bf","mx-mousedown":h+"\x1e_aX()"})],g.push(...m)}return f="xl-aK xl-aJ",y&&!L&&(f+=" xl-aN"),g.push(x("div",{"mx-view":"~xl/plugins/mplayer/channels","mx-change":h+"\x1e_aG()",class:f})),f="xl-aI",y&&(f+=" xl-aM"),k.push(x("div",{class:f},g)),x(h,0,k)},mixins:[x],init(){h.on("_aH",()=>{if("rdm"==this.get("mode")){let t=this.get("active");h._aI(t.channel_id)}else h._aJ()}),h.on("_aK",t=>{let e={};p.has(t,"play")&&(e.play=t.play),p.has(t,"buffer")&&(e.buffer=t.buffer),this.digest(e)}),h.on("_aL",()=>{this.set({reset:!1}),this.render()}),h.on("_aM",t=>{this.digest({reset:!0,song:t.song})}),this.set({cshow:!1,reset:!0,mode:"rdm",song:{title:"\u8f6f\u4ef6\u4f5c\u8005",artist:"\u884c\u5217"}})},render(){this.digest({ptip:h._aN(),ntip:h._aO(),undo:h._aP()})},_aS(){this.get("play")?h._aQ():h._aR()},"_aG<change>"(t){this.digest({active:t.channel}),h._aI(t.channel.channel_id,!0)},"_aT<click>"(){this._aS()},"_aU<click>"(){this.digest({cshow:!this.get("cshow")})},"_aI<click>"(){let t=this.get("active");h._aI(t.channel_id)},"_aV<click>"(){h._aV()},"_aW<click>"(){"rdm"==this.get("mode")?this.digest({mode:"circle"}):this.digest({mode:"rdm"})},"_aX<mousedown>"(t){let e=t.eventTarget,i=parseInt(getComputedStyle(e).left),a=parseInt(getComputedStyle(e).top);this._d(t,l=>{let r=l.pageX-t.pageX,s=l.pageY-t.pageY,o=i+r,n=a+s;e.style.left=o+"px",e.style.top=n+"px"})},"$doc<keyup>"(t){if(h._aY()){let e=t.keyCode;if(13==e||32==e)this._aS();else if(80==e)h._aV();else if(78==e){let t=this.get("active");h._aI(t.channel_id)}else 67==e&&this.digest({cshow:!this.get("cshow")})}},"$doc<visibilitychange>"(){h._aZ(document.hidden)},"$doc<click>"(t){h._aY()&&this.get("cshow")&&(p.inside(t.target,this.root)||this.digest({cshow:!1}))}});