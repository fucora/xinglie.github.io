let t;import i from"../lib/magix.js";import s from"../gallery/mx-dragdrop/index.js";import e from"./ctrl.js";import l from"./exchange.js";export default i.View.extend({tmpl:(i,s,e,l)=>{let h,d,p,o,a,_=[],{show:x,active:n,maxState:m,left:g,top:c,width:r,height:u,zIndex:w,id:y,appId:f,icon:v,title:I,min:k,max:G,close:S,view:b,scroll:j,resize:U}=i;return p=[],a=[s(0,1,l(v))],h="xl-h",n&&(h+=" xl-i"),o=[s("div",{class:h},a),s(0,0,l(I))],p.push(s("div",{class:"xl-g","mx-mousedown":e+"\x1e_V()",id:l(f)+"_d_t"},o)),o=[],k&&(a=[s("span",{_:"_",class:"xl-l xl-n","mx-click":e+"\x1e_Q()"})],o.push(...a)),G&&(h="xl-l xl-o",m&&(h+=" xl-q"),a=[s("span",{"mx-click":e+"\x1e_R()",class:h})],o.push(...a)),S&&(a=[s("span",{_:"a",class:"xl-l xl-m","mx-click":e+"\x1e_S()"})],o.push(...a)),h="xl-j",n&&(h+=" xl-p"),p.push(s("div",{class:h},o)),t?o=[t]:(a=[s(0,0,"loading...")],o=[t=s("div",{_:"b",class:"xl-v"},a)]),h="xl-t",j&&(h+=" xl-u"),p.push(s("div",{"mx-view":l(b),class:h},o)),d="",n&&(d+="display:none"),p.push(s("div",{class:"xl-w",style:d}),s("div",{class:"xl-w xl-x",id:l(y)+"_mk"})),U&&!m&&(h="xl-r",n&&(h+=" xl-s"),o=[s("div",{"mx-mousedown":e+"\x1e_W()",class:h})],p.push(...o)),h="xl-f xl-y",x&&(h+=" xl-z"),n&&(h+=" xl-k"),d="",m||(d+="left:"+l(g)+"px;top:"+l(c)+"px;width:"+l(r)+"px;height:"+l(u)+"px;"),d+="z-index:"+l(w),_.push(s("div",{id:l(y)+"_d","mx-mousedown":e+"\x1e_T()",class:h,style:d},p)),s(e,0,_)},mixins:[s],init(t){this.assign(t);let i=t.maxState?4:8;i|=2,this._G=i,l.fire("_H",{icon:t.icon,title:t.title,appId:t.appId});let s=this.root;this.on("destroy",()=>{e._w(this.get("appId")),s.parentNode.removeChild(s),l.fire("_I",{id:this.get("appId")})})},assign(t){return this.set(t),!0},render(){this.digest()},_J(){let t=this._G;2&t&&(this._G=2^t|1,this.root.style.display="",this.digest({show:!0}))},_C(){let t=this._G;1&t&&(this._G=1^t|2,e._x(this.get("appId")),l.fire("_K",{id:this.get("appId")}),this.digest({show:!1}),this.root.style.display="none")},_v(){this.get("show")?this.digest({active:!0}):(this.set({active:!0}),this._J()),l.fire("_L",{id:this.get("appId")})},_E(){this.digest({active:!1}),l.fire("_M",{id:this.get("appId")})},_N(){let t=i.node(this.id+"_mk");t&&(t.style.display="block")},_O(){let t=i.node(this.id+"_mk");t&&(t.style.display="none")},_P(){let t=this._G;4&t?(this._G=4^t|8,this.digest({maxState:!1})):(this._G=8^t|4,this.digest({maxState:!0}))},"_Q<click>"(){this._C()},"_R<click>"(){this._P()},"_S<click>"(t){this.owner.unmountVframe()},"_T<mousedown>"(){e._v(this.get("appId"))},"_V<mousedown>"(t){let s=this._G,e=getComputedStyle(document.body),l=parseInt(e.getPropertyValue("--xl-_")),h=document.body.clientWidth,d=document.body.clientHeight-l,p=i.node(this.id+"_d").style,{left:o,top:a,width:_}=this.get(),x=!1;this._N(),this._d(t,i=>{if(x=!0,4==(4&s))return;let e=i.pageX-t.pageX+o;e<50-_?e=50-_:e>h-50&&(e=h-50);let n=i.pageY-t.pageY+a;n<0?n=0:n>d-50+l&&(n=d-50+l),p.left=e+"px",p.top=n+"px",this.set({left:e,top:n})},t=>{if(this._O(),!x&&this.get("max")){let t=Date.now();if(this._U){t-this._U<300?(this._U="",this._P()):this._U=t}else this._U=t}})},"_W<mousedown>"(t){let s=i.node(this.id+"_d").style,{width:e,height:l,minWidth:h,minHeight:d}=this.get();this._N(),this._d(t,i=>{let p=i.pageX-t.pageX+e;p<h&&(p=h);let o=i.pageY-t.pageY+l;o<d&&(o=d),s.width=p+"px",s.height=o+"px",this.set({width:p,height:o})},()=>{this._O()})}});