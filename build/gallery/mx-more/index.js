/*!1.0.5 kooboy_li@163.com*/
import e from"../../lib/magix.js";e.applyStyle("xl-a",".xl-L{font-size:20px;text-align:center;line-height:60px}");export default e.View.extend({tmpl:(e,t,s,i)=>{let r,o=[],{offset:l,placeholder:n}=e;return r=[t(0,0,i(n))],o.push(t("div",{class:"xl-L",style:"height:"+i(l+60)+"px;margin-top:-"+i(l)+"px;padding-top:"+i(l)+"px"},r)),t(s,0,o)},init(){let t=new IntersectionObserver(t=>{t[0].isIntersecting&&e.dispatch(this.root,"intersect")});t.observe(this.root),this.ondestroy=()=>{t.unobserve(this.root)}},assign(e){return this.set({placeholder:e.placeholder||"\u66f4\u591a\u52a0\u8f7d\u4e2d...",offset:e.offset||200}),!0},render(){this.digest()}});