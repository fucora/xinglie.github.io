/*!1.0.2 kooboy_li@163.com*/
let e=0,t=[],r=window,i=document,n=r.setTimeout,o=encodeURIComponent;function l(){}let a=i.body,f=r.performance,s=f.now.bind(f),h="\x1e",u="prototype",d=Object[u].toString,c=e=>d.call(e).slice(8,-1),p=e=>"Object"==c(e),b=Array.isArray,m=t=>(t||"_")+e++,g=e=>i.getElementById(e),w=(e,t)=>e.innerHTML=t,v={rootId:m(),error(e){throw e}},y=e=>!e||"object"!=typeof e,k=(e,t,r)=>{if(e&&t&&!(r=e==t))try{r=16==(16&t.compareDocumentPosition(e))}catch(e){}return r},$=e=>{e[h+"b"]=0,e[h+"a"]=1},{assign:x,keys:V,hasOwnProperty:I}=Object,j=i.head,E=a.getAttribute,T=(e,t)=>E.call(e,t),A=(e,t,r)=>{t&&!A[e]&&(A[e]=1,r=i.createElement("style"),w(r,t),j.appendChild(r))},C=(e,r,i,n,o)=>{for(o of(b(e)||(e=[e]),b(r)||(r=r&&[r]||t),e))try{n=o&&o.apply(i,r)}catch(e){v.error(e)}return n},L=(e,t)=>e&&I.call(e,t),M=(e,t)=>{let r,i;if(y(t))(r=t+"")[0]==h&&(t=e[r]);else for(r in t)i=t[r],i=M(e,i),t[r]=i;return t},N=(e,t)=>t.a-e.a;function O(e,t,r){(r=this).a=[],r.b=t||5,r.c=r.b+(e||20)}x(O[u],{get(e){let t=this.a[h+e];return t&&(t.a++,t=t.c),t},set(e,t){let r=this,i=r.a,n=h+e,o=i[n],l=r.b;if(!o){if(i.length>=r.c)for(i.sort(N);l--;)(o=i.pop()).a>0&&r.del(o.o);o={d:e},i.push(o),i[n]=o}o.c=t,o.a=1},del(e){e=h+e;let t=this.a,r=t[e];r&&(r.a=-1,r.c="",t[e]=null)},has(e){return L(this.a,h+e)}});let Z={bubbles:!0,cancelable:!0},_=[],B=(e,t,r,i,n,o)=>{let l={a:i,b:r,c:t,d:e,e(e){i?C(r,e,o):r(e)}};_.push(l),e.addEventListener(t,l.e,n)},S=(e,t,r,i,n)=>{for(let o,l=_.length;l--;)if((o=_[l]).c==t&&o.a==i&&o.d==e&&o.b===r){_.splice(l,1),e.removeEventListener(t,o.e,n);break}},U=decodeURIComponent,P=new O,R=e=>{let t,r,i,n,o,l=P.get(e);if(!l){if(n={},-1==(o=e.indexOf("?")))t=e;else if(t=e.substring(0,o),e=e.substring(o+1))for(o of e.split("&"))[r,i]=o.split("="),n[U(r)]=U(i||"");P.set(e,l={a:t,b:n})}return{path:l.a,params:x({},l.b)}},H=new O,W=(e,t,r)=>(H.has(e)?r=H.get(e):(r=C(Function(`return ${e}`)),e.includes(h)?M(t,r):H.set(e,r)),r),q=0,D=[],F=()=>{let e,t=s();for(;;){if(!(e=D[q-1])){D.length=q=0;break}if(e.apply(D[q],D[q+1]),q+=3,s()-t>32&&D.length>q){n(F);break}}},z=(e,t,r)=>{D.push(e,r,t),q||(q=1,n(F))},G={},J=(e,t)=>{if(e){b(e)||(e=[e]);let r,i,n,o=[],l=[],a=v.paths;for(r of e)(i=r.indexOf("/"))>-1&&!r.startsWith(".")&&(n=r.slice(0,i),r=r.slice(i+1),r=a[n]+r),r.endsWith(".js")||(r+=".js"),G[r]||(G[r]=import(r)),o.push(G[r]);Promise.all(o).then(e=>{for(r of e)l.push(r.default);z(t,l)})}else z(t)};function K(){}let Q=(e,t,r,i,n)=>(K[u]=t[u],n=new K,x(n,r),x(e,i),n.constructor=e,e[u]=n,e),X=e=>e;let Y,ee,te={fire(e,t){let r,i,n=this,o=n[h+e],l=0;if(t||(t={}),t.type=e,o)for(r=o.length;l<r;l++)(i=o[l]).f?(i.x=1,C(i.f,t,n),i.x=""):i.x||(o.splice(l--,1),r--);return(o=n[`on${e}`])&&C(o,t,n),n},on(e,t){let r=h+e;return(this[r]||(this[r]=[])).push({f:t}),this},off(e,t){let r,i=h+e,n=this,o=n[i];if(t){if(o)for(r of o)if(r.f==t){r.f="";break}}else n[i]=null,n[`on${e}`]=null;return n}},re={},ie=(e,t,r,i)=>{t.includes(h)&&(i=re[e])&&M(i.a,r)},ne=(e,t)=>{L(re,e)||(re[e]=t,ae.fire("add",{vframe:t}))},oe=(e,t,r)=>{for(t=e.c;t.length;)(r=t.shift()).r||z(e.invoke,[r.n,r.a],e),delete t[r.k]},le=e=>e.b||(e.b=m(ee));function ae(e,t){let r=this,i=le(e);r.id=i,r.root=e,r.d=1,r.b={},r.pId=t,r.c=[],r.a={},ne(i,r)}x(ae,{root:()=>Y,all:()=>re,byId:e=>re[e],byNode:e=>re[e.b]},te),x(ae[u],{mountView(e,t){let r,i,n,o,l,a=this,{id:f,root:s,pId:h}=a;!a.e&&s&&(a.e=1,a.f=s.innerHTML),a.unmountView(),s&&e&&(r=R(e),n=r.path,a.path=e,o=r.params,ie(h,e,o),a.g=n,x(o,t),i=a.d,J(n,e=>{if(i==a.d){if(!e)return v.error(Error(`${f} cannot load:${n}`));l=ze(e),n=new e(f,s,a,o,l),a.h=n,We(n),C(n.init,o,n),z(C,[n.f,o,n]),z(()=>{n.g(),n.tmpl||n.h||He(n)})}}))},unmountView(){let e=this,{h:t,root:r}=e;e.c=[],t&&(e.unmountZone(),e.h=0,t.c&&($(t),t.c=0,t.fire("destroy"),We(t,1),t.owner=t.root=null),r&&e.e&&w(r,e.f)),e.d++},mountVframe(e,t,r){let i,n=this,o=n.id,l=n.b,a=le(e);return(i=re[a])||(L(l,a)||(n.i=0),l[a]=a,i=new ae(e,o)),i.mountView(t,r),i},mountZone(e){let t,r=this,i=(e=e||r.root).querySelectorAll("[mx-view]");for(t of i)t.a||(t.a=1,r.mountVframe(t,T(t,"mx-view")))},unmountVframe(e,t){let r,i;var n,o;e=e?this.b[t?e:e.b]:this.id,(r=re[e])&&(r.unmountView(),i=r.pId,(o=re[n=e])&&(delete re[n],o.root.a=0,ae.fire("remove",{vframe:o}),o.id=o.root=o.pId=o.b=null),(r=re[i])&&L(r.b,e)&&(delete r.b[e],r.i=0))},unmountZone(e){let t,r,i,n=this;for(t in n.b)(i=e?(r=re[t])&&k(r.root,e):1)&&n.unmountVframe(t,1)},children(e){return(e=this).i||(e.i=V(e.b))},parent(e,t){for(t=this,e=e>>>0||1;t&&e--;)t=re[t.pId];return t},invoke(e,t){let r,i,n,o,l,a=this.c;return(i=this.h)&&i.h?r=(n=i[e])&&C(n,t,i):((o=a[l=h+e])&&(o.r=t===o.a),o={n:e,a:t,k:l},a.push(o),a[l]=o),r}});let fe=new O(30,10),se=/(?:([\w\-]+)\x1e)?([^(]+)\(([\s\S]*)?\)/,he={},ue={},de={};let ce=(e,r)=>{let i,n,o,l,f,s,h,u,d=[],c=e,p=T(e,`mx-${r}`),b=0;if(p&&((f=fe.get(p))||(f={v:(f=p.match(se)||t)[1],n:f[2],i:f[3]},fe.set(p,f)),f=x({},f,{r:p})),f&&!f.v||ue[r]){if(!(u=c.c)){for(h=[c];c!=a&&(c=c.parentNode);){if(re[n=c.b]||(n=c.c)){u=n;break}h.push(c)}if(u)for(p of h)p.c=u}if(u){c=e.b,re[c]&&(b=u=c);do{if((i=re[u])&&(s=i.h)){if(l=(o=s.i)[r])for(c=l.length;c--;)o={r:n=l[c],v:u,n:n},n?!b&&e.matches(n)&&d.push(o):b&&d.unshift(o);if(s.tmpl&&!b)break;b=0}}while(i&&(u=i.pId))}}return f&&d.push(f),d},pe=e=>{let t,r,i,n,o,l,a,f,{target:s,type:u}=e,d=[];for(;s&&1==s.nodeType&&!(e.cancelBubble||(r=s.d)&&r[u]);){if(d.push(s),(t=ce(s,u)).length){d=[];for(let{v:r,r:d,n:c,i:p}of t){if(a!=r){if(a&&e.cancelBubble)break;a=r}if(!(n=(i=re[r])&&i.h))break;n.h&&(l=n[o=c+h+u])&&(e.eventTarget=s,f=p?W(p,i.a):de,e.params=f,C(l,e,n))}}s=s.parentNode}for(a of d)(r=a.d||(a.d={}))[u]=1},be=(e,t,r)=>{let i=0|he[e],n=r?-1:1;i&&r!==i||(r?S:B)(a,e,pe),he[e]=i+n,t&&(ue[e]=(0|ue[e])+n)};let me={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","`":"&#96;"},ge=/[&<>"'\`]/g,we=e=>null==e?"":""+e,ve=e=>me[e],ye=e=>we(e).replace(ge,ve),ke={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},$e=e=>ke[e],xe=/[!')(*]/g,Ve=e=>o(we(e)).replace(xe,$e),Ie=/[\\'"]/g,je=e=>we(e).replace(Ie,"\\$&"),Ee=(e,t,r)=>(e[r]=t,r),Te=(e,t)=>{if(e.c&&(t=e.tmpl)){let r,i=e.j,n=e.id,o=re[n],l={a:[]},a=e.d,f=o.a;for(r of(e.k=0,e.j={},e.fire("dompatch"),r=t(a,Ce,n,we,Ve,f,Ee,je,b),Be(e.root,e.l,r,l,o,i),e.l=r,t=l.b||!e.h,l.a))z(Re,[r]);t&&z(He,[e]),e.fire("domready")}},Ae={},Ce=(e,t,r,i,n)=>{let o;if(e){t=t||Ae;let l,a,f,s,h,u="",d=i,c={},p="<"+e,b="",m=[];if(r)for(f of r)a=f.a,f.b==Me&&(a=a?ye(a):" "),b+=a,h&&f.b==Me&&h.b==Me?h.a+=f.a:(f.d&&(c[f.d]=(c[f.d]||0)+1),f.e&&(d=1),h=f,m.push(f));for(l in i=i||Ae,t)!1!==(a=t[l])&&null!=a?(!0===a&&(t[l]=a=i[l]?a:""),"id"==l?u=a:"mx-view"==l&&a&&!u?u=R(a).path:"_"!=l||u?"$"==l&&(d=1):u=a,"value"==l&&"textarea"==e?b=a:L(Le,l)||(p+=` ${l}="${a&&ye(a)}"`)):delete t[l];s=p,o={a:p+=n?"/>":`>${b}</${e}>`,c:b,d:u,b:e,e:d,f:i,g:s,h:t,i:m,j:c,k:n}}else o={b:t?h:Me,a:r+""};return o},Le={_:1,$:1};let Me=e;let Ne="http://www.w3.org/",Oe={svg:`${Ne}2000/svg`,math:`${Ne}1998/Math/MathML`},Ze=(e,t,r)=>{let i,n,o,l=0,a=r.f,f=t.f,s=r.h,h=t.h;if(t)for(i in h)L(s,i)||(l=1,(o=f[i])?e[o]="":e.removeAttribute(i));for(i in s)L(Le,i)||(n=s[i],(o=a[i])?t&&e[o]==n||(l=1,e[o]=n):t&&h[i]==n||(l=1,e.setAttribute(i,n)));return l&&delete e.d,l},_e=(e,t)=>{let r,n=e.b;return n==Me?r=i.createTextNode(e.a):(r=i.createElementNS(Oe[n]||t.namespaceURI,n),Ze(r,0,e),w(r,e.c)),r},Be=(e,t,r,i,n,o)=>{if(t){if(t.e||t.c!=r.c){let l,a,f,s,u,d,c=t.i,p=r.i,b=c.length,m=p.length,g=r.j,v=e.childNodes,y={},k=0;for(l=b;l--;)(u=(f=c[l]).d)&&(u=y[u]||(y[u]=[])).push(v[l]);for(l=0;l<m;l++)if(s=p[l],f=c[k++],(u=y[s.d])&&(u=u.pop())){if(u!=v[l]){for(a=k,d=1;a<b;a++,d++)if((f=c[a])&&v[l+d]==u){c.splice(a,1),k--;break}e.insertBefore(u,v[l])}g[f.d]&&g[f.d]--,Se(u,e,f,s,i,n,o)}else f?y[f.d]&&g[f.d]?(b++,i.b=1,e.insertBefore(_e(s,e),v[l]),k--):Se(v[l],e,f,s,i,n,o):(s.b==h?w(e,s.a):e.appendChild(_e(s,e)),i.b=1);for(l=m;l<b;l++)1==(a=v[m]).nodeType&&n.unmountZone(a),e.removeChild(a)}}else i.b=1,w(e,r.c)},Se=(e,t,r,i,n,o,l)=>{let a=r.h,f=i.h,s=r.b;if(r.e||r.a!=i.a)if(s==h)n.b=1,w(t,i.a);else if(s==i.b){if(s==Me)n.b=1,e.nodeValue=i.a;else if(!a._||a._!=f._){let t,s,h,u,d,c,p,b=f["mx-view"],m=i.c,g=r.g!=i.g,w=r.f||g,v=re[e.b],y=b&&R(b);if(w&&(w=Ze(e,r,i))&&(n.b=1),b&&v&&v.g==y.path&&(u=v.h)){if(c=m!=r.c,p=b!=v.path,h=a.$,!c&&!p&&h)for(h of d=h.split(","))if("#"==h||L(l,h)){p=1;break}(p||c)&&(h=u.h&&u.f,d=y.params,ie(v.pId,b,d),v.path=b,v.f=m,C(h,d,u)&&(u.m++,n.a.push(u)),t=!u.tmpl)}else t=1,s=v;s&&(n.b=1,v.unmountVframe()),t&&!i.k&&Be(e,r,i,n,o,l)}}else n.b=1,o.unmountZone(e),t.replaceChild(_e(i,t),e)},Ue=/^(\$?)([^<]*)<([^>]+)>(?:&(.+))?$/,Pe=(e,t,r)=>(e.a?r=e:((r=function(e){C(r.a,e,this)}).a=[e],r.b=1),r.a=r.a.concat(t.a||t),r),Re=e=>{e.m&&e.m--,e.c&&!e.m&&C(e.g,t,e)},He=e=>{let t,r;e.c&&(r=e.h,e.h=1,(t=e.owner).mountZone(),r||n(oe,0,t))},We=(e,t)=>{let r,{n:i,i:n,o:o,id:l}=e;for(r in i)be(r,n[r],t);for(r of(i=t?S:B,o))i(r.a,r.b,r.c,l,r.d,e)},qe={win:r,doc:i,body:a},De=(e,t,r)=>{let i,n,o,l,a={};for(n of e)for(i in n)o=n[i],l=a[i],"ctor"!=i?(Ue.test(i)&&(l?o=Pe(l,o):o.b=1),a[i]=o):r.push(o);for(i in a)L(t,i)||(t[i]=a[i])};function Fe(...e){let t=this.a||(this.a=[]);return De(e,this[u],t),this}let ze=e=>{if(!e[h]){e[h]=[];let t,r,i,n,o,l,a,f,s,d,c,p=e[u],b={},m=[],g={};for(a in(r=p.mixins)&&De(r,p,e[h]),p)if(t=p[a],r=a.match(Ue)){if([,l,i,n,c]=r,d={},c)for(f of c=c.split(","))d[f]=!0;for(f of n=n.split(",")){if(o=qe[i],s=1,l){if(o){m.push({c:t,a:o,b:f,d:d});continue}s=2,(o=g[f])||(o=g[f]=[]),o[i]||(o[i]=1,o.push(i))}b[f]=b[f]|s,(o=p[f=i+h+f])?o.b&&(t.b?p[f]=Pe(t,o):L(p,a)&&(p[f]=t)):p[f]=t}}p.g=p.render,p.n=b,p.o=m,p.i=g,p.f=p.assign}return e[h]};function Ge(e,t,r,i,n){(n=this).root=t,n.owner=r,n.id=e,n[h]=e,n.c=1,n.k=1,n.d={id:e},n.j={},n.m=0,(e=Ge.a)&&C(e,i,n)}x(Ge,{merge:Fe,extend:function e(t,r){let i=this,n=(t=t||{}).ctor,o=[];function l(e,t,r,n,a,f,s,h){i.call(h=this,e,t,r,n,a),(f=l.a)&&C(f,n,h),(s=o.concat(a)).length&&C(s,n,h)}return n&&o.push(n),l.merge=Fe,l.extend=e,Q(l,i,t,r)}}),x(Ge[u],te,{init:l,render:l,assign:l,observeLocation(e,t){let r;(r=this.a).a=1,p(e)&&(t=e.path,e=e.params),r.b=t,e&&(r.c=(e+"").split(","))},get(e,t){return t=this.d,e&&(t=t[e]),t},set(e,t){let r,i,n,o=this,l=o.d,a=o.j,f=o.k;for(n in e)r=e[n],i=l[n],y(r)&&i==r||L(t,n)||(a[n]=1,f=1),l[n]=r;return o.k=f,o},digest(e,t){let r=this.set(e,t);r.k&&r.c&&Te(r)}});let Je=0,Ke={config:(e,t)=>(t=v,e&&(t=p(e)?x(t,e):t[e]),t),boot(e){Je||(Je=1,x(v,e),((e,t)=>(Y||(e=ee=v.rootId,(t=g(e))||(t=a),Y=new ae(t)),Y))().mountView(v.defaultView))},unboot(){Je&&Y&&(Y.unmountVframe(),Y=null)},toMap:(e,t)=>{let r,i={};if(e)for(r of e)i[t&&r?r[t]:r]=t?r:1+(0|i[r]);return i},toTry:C,toUrl:(e,t,r)=>{let i,n,l,a=[];for(n in t)i=t[n]+"",(!r||i||L(r,n))&&(i=o(i),a.push(l=n+"="+i));return l&&(e+=(e&&(e.includes("?")?"&":"?"))+a.join("&")),e},parseUrl:R,guid:m,use:J,dispatch:(e,t,r)=>{let i=new Event(t,Z);x(i,r),e.dispatchEvent(i)},guard:X,type:c,has:L,inside:k,applyStyle:A,Cache:O,View:Ge,Vframe:ae,Event:te,mark:(e,t,r,i,n)=>(e[n=h+"a"]||(r=e[n=h+"b"]||(e[n]={}),L(r,t)||(r[t]=0),i=++r[t]),r=>(r=e[n],r&&i===r[t])),unmark:$,node:g,task(e,t,r){z(C,[e,t,r])}};export default Ke;