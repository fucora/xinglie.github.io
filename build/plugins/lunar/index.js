/*!1.0.5 kooboy_li@163.com*/
let t,e,a={class:"xl-aY"},o={class:"xl-aW"},s={class:"xl-aZ"},l={class:"xl-b_"},r={class:"xl-ba"},i={class:"xl-bb"},n={class:"xl-bh"},d={class:"xl-bi"};import p from"../../lib/magix.js";import h from"../../gallery/mx-dragdrop/index.js";import x from"../../lib/cron.js";import b from"./days.js";p.applyStyle("xl-m",'.xl-aV{background:rgba(0,0,0,.13);border-radius:5px;overflow:hidden;opacity:.1;-webkit-transition:all .5s;transition:all .5s}.xl-aV:hover{opacity:.8}.xl-aW{height:4px;background:#bbb}.xl-aX{height:100%;background:#888}.xl-aY{border-radius:4px;background:rgba(0,0,0,.67);-webkit-transform:translate(100px,-40px);transform:translate(100px,-40px);position:absolute;left:0;top:0;padding:4px;font-size:12px}.xl-aY:after{content:" ";width:0;height:0;position:absolute;border:6px solid transparent;border-top-color:rgba(0,0,0,.67);left:50%;top:100%}.xl-aZ{position:absolute;left:0;right:0;bottom:0;font-size:140px;color:hsla(0,0%,100%,.13);cursor:move}.xl-aZ,.xl-b_{text-align:center}.xl-b_{border-collapse:collapse;width:100%;border-spacing:0}.xl-ba{background:rgba(0,0,0,.33)}.xl-bb{font-size:18px}.xl-bc{cursor:pointer;padding:0;border-radius:4px;width:50px;height:30px;position:relative}.xl-bd,.xl-bd:hover{background:rgba(0,0,0,.27)}.xl-be{color:red}.xl-bf{color:green}.xl-bg{right:5px;top:-2px}.xl-bg,.xl-bh{position:absolute;font-size:12px;-webkit-transform:scale(.6);transform:scale(.6)}.xl-bh{right:-3px;bottom:-4px}.xl-bi{position:absolute;left:3px;top:-7px;font-size:12px;-webkit-transform:scale(.6);transform:scale(.6)}.xl-bj{color:#ffd73a}');let g="\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d".split(""),m={year:2012,month:12,day:22,name:"\u599e\u599e"};export default p.View.extend({mixins:[h],tmpl:(p,h,x,b)=>{let g,m,y,u,c,f,w,k,v,_,D,T,j=[],{days:M,esDays:S,percent:Y,month:z,weekText:V,weeks:X,year:W,day:Z,workdays:$,holidays:q,birthday:C,solarTerms:F}=p;m=[h(0,0,"\u4eca\u5e74\u5171"+b(M)+"\u5929\uff0c\u8fd8\u6709"+b(Math.ceil(S))+"\u5929")],g=[h("div",a,m)],m=[h("div",{class:"xl-aX",style:"width:"+b(Y)+"%"})],g.push(h("div",o,m)),m=[h(0,0,b(z))],g.push(h("div",s,m)),y=[],u=[];for(let t=V.length,e=0;e<t;e++){f=[h(0,0,b(V[e]))],c=[h("td",r,f)],u.push(...c)}y.push(h("tr",0,u));for(let a=X.length,o=0;o<a;o++){let a=X[o];c=[];for(let o=a.length,s=0;s<o;s++){let o=a[s],l=`${o.year}-${o.month}-${o.day}`;v=[],o.otherMonth||(_=[],D=[h(0,0,b(o.day))],_.push(h("div",i,D)),1===$[l]?(t?D=[t]:(T=[h(0,0,"\u73ed")],D=[t=h("div",{_:"_",class:"xl-bg"},T)]),_.push(...D)):1===q[l]&&(e?D=[e]:(T=[h(0,0,"\u5047")],D=[e=h("div",{_:"a",class:"xl-bg"},T)]),_.push(...D)),F[l]&&(T=[h(0,0,b(F[l]))],D=[h("div",n,T)],_.push(...D)),o.month==C.month&&o.day==C.day&&(T=[h(0,0,b(C.name))],D=[h("div",d,T)],_.push(...D)),v.push(..._)),w="xl-bc",o.year==W&&o.month==z&&o.day==Z&&(w+=" xl-bd"),1===$[l]?w+=" xl-be":1===q[l]&&(w+=" xl-bf"),o.month==C.month&&o.day==C.day&&(w+=" xl-bj"),k=b(l),1===$[l]?k+=" \u4e0a\u73ed":1===q[l]&&(k+=" \u653e\u5047"),k+=" ",F[l]&&(k+=""+b(F[l])),k+=" ",o.month==C.month&&o.day==C.day&&(k+=b(C.name)+"\u751f\u65e5\uff0c\u4eca\u5e74"+b(o.year-C.year)+"\u5c81\u5566\uff5e"),f=[h("td",{class:w,title:!o.otherMonth&&k},v)],c.push(...f)}u=[h("tr",0,c)],y.push(...u)}return m=[h("tbody",0,y)],g.push(h("table",l,m)),j.push(h("div",{class:"xl-aV","mx-mousedown":x+"\x1e_aU()"},g)),h(x,0,j)},init(){this.set({birthday:m,weekText:g,weekStart:0});let t=this.render.bind(this);x._s(t,6e5),this.ondestroy=()=>{x._t(t)}},assign:()=>!1,async render(){let t=new Date,e=t.getFullYear(),a=t.getMonth()+1,o=t.getDate(),s=new Date(e,0,1,0,0,0).getTime(),l=new Date(e+1,0,1,0,0,0).getTime();t.setHours(0,0,0,0);let r,i=(t.getTime()-s+864e5)/(l-s)*100,n=(l-s)/864e5,d=(l-t.getTime()-864e5)/864e5,h=(7-this.get("weekStart")+new Date(e,a-1,1).getDay())%7,x=[],g=[],m=((t,e)=>32-new Date(t,e-1,32).getDate())(e,a);for(r=1;r<=h;r++)g.push({otherMonth:!0});for(r=1;r<=m;r++)g.push({year:e,day:r,month:a}),(r+h)%7==0&&(x.push(g),g=[]);let y=g.length;if(y){let t=7;for(r=y;r<t&&(g.push({otherMonth:!0}),(r+1)%7!=0||(x.push(g),g=[],6!=x.length));r++);}let u=p.mark(this,"_aR"),{queryWorkAndHolidays:c,querySolarTerms:f}=b,[w,{workdays:k,holidays:v}]=await Promise.all([f(),c(t)]);u()&&this.digest({year:e,holidays:v,workdays:k,solarTerms:w,month:a,day:o,days:n,esDays:d,percent:i.toFixed(2),weeks:x})},"_aU<mousedown>"(t){let e=this.root,a=parseInt(getComputedStyle(e).left),o=parseInt(getComputedStyle(e).top);this._d(t,s=>{let l=s.pageX-t.pageX,r=s.pageY-t.pageY,i=a+l,n=o+r;e.style.left=i+"px",e.style.top=n+"px"})}});