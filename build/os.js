/*!1.0.2 kooboy_li@163.com*/
import e from"./lib/magix.js";let l=import.meta.url,{params:t,path:o}=e.parseUrl(l),i=o.replace(/[^/]+$/,""),r=t.theme||"black";e.applyStyle("xl_",'body,h2,li,ul{padding:0;margin:0}ul{list-style:none}body{font:14px/1.5 helvetica neue,arial,hiragino sans gb,stheiti,wenquanyi micro hei,sans-serif}img{width:100%;height:100%}body{background:var(--xl-d);color:var(--xl-e)}body:-webkit-full-screen::-webkit-backdrop{background:transparent}body:-webkit-full-screen::backdrop{background:transparent}.xl-_{position:fixed;left:0;top:0;right:0;bottom:0;background-size:100% 100%;background-repeat:no-repeat}.xl-a,.xl-b{height:calc(100vh - var(--xl-_));-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.xl-b{left:0;top:0;right:0}.xl-b,.xl-c{position:absolute}.xl-c{display:grid;width:var(--xl-a);height:var(--xl-b);grid-template-rows:calc(var(--xl-b) - var(--xl-i)) var(--xl-i);place-items:center center;overflow:hidden;border-radius:var(--xl-h);transition:all .2s}.xl-d{width:40px;height:40px}.xl-e{height:var(--xl-i)}.xl-c:hover{background:var(--xl-j)}.xl-f{position:absolute;border-radius:var(--xl-h) var(--xl-h) 0 0;box-shadow:0 0 0 1px var(--xl-l);left:0;top:0;right:0;bottom:var(--xl-_);overflow:hidden}.xl-g{padding-left:5px;background:var(--xl-l);height:var(--xl-p);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:var(--xl-m);display:flex;align-items:center}.xl-h{display:inline-block;width:18px;height:18px;margin-right:5px;-webkit-filter:grayscale(1);filter:grayscale(1)}.xl-i{-webkit-filter:none;filter:none}.xl-j{position:absolute;right:0;top:0;padding:0 5px;display:inline-flex;align-items:center;height:var(--xl-p)}.xl-k{box-shadow:0 0 0 1px var(--xl-n)}.xl-k .xl-g{background:var(--xl-n);color:var(--xl-o)}.xl-l{width:12px;height:12px;background:#ccc;border-radius:var(--xl-h);display:inline-block;margin:0 3px;position:relative}.xl-k .xl-m{background:red}.xl-k .xl-n{background:#f6c308}.xl-k .xl-o{background:#64ca57}.xl-l:after{position:absolute;left:2px;top:-3px;font-size:12px}.xl-p:hover .xl-m:after{content:"\xd7";top:-4px}.xl-p:hover .xl-n:after{content:"\ufe63";left:0;top:-2px}.xl-p:hover .xl-o:after{content:"\u21d7"}.xl-p:hover .xl-q:after{content:"\u21d9"}.xl-r{position:absolute;right:0;bottom:0;width:0;height:0;cursor:se-resize;border-bottom:10px solid var(--xl-l);border-left:10px solid transparent}.xl-s{border-bottom-color:var(--xl-n)}.xl-t{color:var(--xl-q);height:calc(100% - var(--xl-p));background:var(--xl-k);overflow:hidden;transition:all .3s;position:relative}.xl-u{overflow:auto;scroll-behavior:smooth}.xl-v{top:0;text-align:center;padding-top:150px;font-size:20px;cursor:progress}.xl-v,.xl-w{position:absolute;left:0;right:0;bottom:0}.xl-w{top:var(--xl-p);background:hsla(0,0%,100%,.2);border-radius:var(--xl-h)}.xl-x{background:hsla(0,0%,100%,0);display:none}.xl-y{opacity:0}@-webkit-keyframes xl-_{0%{opacity:0}to{opacity:1}}@keyframes xl-_{0%{opacity:0}to{opacity:1}}.xl-z{-webkit-animation-name:xl-_;animation-name:xl-_;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.xl-A{transition:all .3s;opacity:1;z-index:10001;background:var(--xl-r)}.xl-A,.xl-B{position:absolute}.xl-B{height:var(--xl-_);left:0;right:0;bottom:0;background:var(--xl-f);display:flex;z-index:10000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.xl-B,.xl-C{align-items:center}.xl-C{width:20px;height:100%;display:inline-flex;margin:0 5px}.xl-D{cursor:pointer}.xl-E{width:100%;height:100%}.xl-F{height:20px;min-width:75px;max-width:75px;line-height:20px;overflow:hidden;margin:4px;cursor:default;font-size:12px;border-radius:2px;background:#555}.xl-G{width:16px;height:16px;margin:2px;display:inline-block;float:left}.xl-H{box-shadow:0 0 0 2px var(--xl-g)}.xl-I{position:absolute}.xl-J{margin-left:auto;margin-right:5px;height:100%}'),e.config({paths:{"~xl":i}}),e.config({theme:r,rootId:"xl",defaultView:"~xl/os/index",error(e){}}),e.use("~xl/os/theme/"+r,e.boot);