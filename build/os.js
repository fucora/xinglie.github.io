/*!1.0.5 kooboy_li@163.com*/
import e from"./lib/magix.js";let l=import.meta.url,{params:t,path:i}=e.parseUrl(l),o=i.replace(/[^/]+$/,""),r=t.theme||"black";e.applyStyle("xl-_",'body,h2,li,ul{padding:0;margin:0}ul{list-style:none}body{font:14px/1.5 helvetica neue,arial,hiragino sans gb,stheiti,wenquanyi micro hei,sans-serif}img{width:100%;height:100%}body{background:var(--xl-d);color:var(--xl-e)}body:-webkit-full-screen::-webkit-backdrop{background:transparent}body:-webkit-full-screen::backdrop{background:transparent}.xl-_:after,.xl-_:before{content:" ";display:table}.xl-_:after{clear:both}.xl-a{position:fixed;left:0;top:0;right:0;bottom:0;background-size:100% 100%;background-repeat:no-repeat}.xl-b,.xl-c{height:calc(100vh - var(--xl-_));-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.xl-c{left:0;top:0;right:0}.xl-c,.xl-d{position:absolute}.xl-d{display:grid;width:var(--xl-a);height:var(--xl-b);grid-template-rows:calc(var(--xl-b) - var(--xl-i)) var(--xl-i);place-items:center center;overflow:hidden;border-radius:var(--xl-h);-webkit-transition:all .2s;transition:all .2s}.xl-e{width:40px;height:40px}.xl-f{height:var(--xl-i)}.xl-d:hover{background:var(--xl-j)}.xl-g{position:absolute;border-radius:var(--xl-h) var(--xl-h) 0 0;box-shadow:0 0 0 1px var(--xl-l);left:0;top:0;right:0;bottom:var(--xl-_);overflow:hidden}.xl-h{padding-left:5px;background:var(--xl-l);height:var(--xl-p);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:var(--xl-m);display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.xl-i{display:inline-block;width:18px;height:18px;margin-right:5px;-webkit-filter:grayscale(1);filter:grayscale(1)}.xl-j{-webkit-filter:none;filter:none}.xl-k{position:absolute;right:0;top:0;padding:0 5px;display:-webkit-inline-box;display:inline-flex;-webkit-box-align:center;align-items:center;height:var(--xl-p)}.xl-l{box-shadow:0 0 0 1px var(--xl-n)}.xl-l .xl-h{background:var(--xl-n);color:var(--xl-o)}.xl-m{width:12px;height:12px;background:#ccc;border-radius:var(--xl-h);display:inline-block;margin:0 3px;position:relative}.xl-l .xl-n{background:red}.xl-l .xl-o{background:#f6c308}.xl-l .xl-p{background:#64ca57}.xl-m:after{position:absolute;left:2px;top:-3px;font-size:12px}.xl-q:hover .xl-n:after{content:"\xd7";top:-4px}.xl-q:hover .xl-o:after{content:"\ufe63";left:0;top:-2px}.xl-q:hover .xl-p:after{content:"\u21d7"}.xl-q:hover .xl-r:after{content:"\u21d9"}.xl-s{position:absolute;right:0;bottom:0;width:0;height:0;cursor:nwse-resize;border-bottom:10px solid var(--xl-l);border-left:10px solid transparent}.xl-t{border-bottom-color:var(--xl-n)}.xl-u{color:var(--xl-q);height:calc(100% - var(--xl-p));background:var(--xl-k);overflow:hidden;-webkit-transition:all .3s;transition:all .3s;position:relative}.xl-v{overflow:auto;scroll-behavior:smooth}.xl-w{top:0;text-align:center;padding-top:150px;font-size:20px;cursor:progress}.xl-w,.xl-x{position:absolute;left:0;right:0;bottom:0}.xl-x{top:var(--xl-p);background:hsla(0,0%,100%,.2);border-radius:var(--xl-h)}.xl-y{background:hsla(0,0%,100%,0);display:none}.xl-z{opacity:0}@-webkit-keyframes xl-_{0%{opacity:0}to{opacity:1}}@keyframes xl-_{0%{opacity:0}to{opacity:1}}.xl-A{-webkit-animation-name:xl-_;animation-name:xl-_;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.xl-B{-webkit-transition:all .3s;transition:all .3s;position:absolute;opacity:1;z-index:10001;background:var(--xl-r)}.xl-C{height:var(--xl-_);position:absolute;left:0;right:0;bottom:0;background:var(--xl-f);display:-webkit-box;display:flex;z-index:10000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.xl-C,.xl-D{-webkit-box-align:center;align-items:center}.xl-D{width:20px;height:100%;display:-webkit-inline-box;display:inline-flex;margin:0 5px}.xl-E{cursor:pointer}.xl-F{width:100%;height:100%}.xl-G{height:20px;min-width:75px;max-width:75px;line-height:20px;overflow:hidden;margin:4px;cursor:default;font-size:12px;border-radius:2px;background:#555}.xl-H{width:16px;height:16px;margin:2px;display:inline-block;float:left}.xl-I{box-shadow:0 0 0 2px var(--xl-g)}.xl-J{position:absolute}.xl-K{margin-left:auto;margin-right:5px;height:100%}'),e.config({paths:{"~xl":o},theme:r,rootId:"xl",defaultView:"~xl/os/index",error(e){}}),e.use("~xl/os/theme/"+r,e.boot);