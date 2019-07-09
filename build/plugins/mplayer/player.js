var __awaiter=this&&this.__awaiter||function(t,e,i,s){return new(i||(i=Promise))(function(a,n){function h(t){try{_(s.next(t))}catch(t){n(t)}}function o(t){try{_(s.throw(t))}catch(t){n(t)}}function _(t){t.done?a(t.value):new i(function(e){e(t.value)}).then(h,o)}_((s=s.apply(t,e||[])).next())})};import Magix from"../../lib/magix.js";let APIHost="https://jirenguapi.applinzi.com/fm",MAX_HISTORY=50,RedoList=[],UndoList=[],SongLyricCache=new Magix.Cache(200,50);export default Object.assign({_aT:()=>fetch(`${APIHost}/getChannels.php`).then(t=>t.json()),_aU:t=>fetch(`${APIHost}/getSong.php?channel=${t}`).then(t=>t.json()),_aS(t){let e=`${APIHost}/getLyric.php?sid=${t}`;return SongLyricCache.has(e)?Promise.resolve(SongLyricCache.get(e)):fetch(e).then(t=>t.json()).then(t=>(SongLyricCache.set(e,t),Promise.resolve(t)))},_ap(){return __awaiter(this,void 0,void 0,function*(){let{channels:t}=yield this._aT();return{active:t[0],channels:t}})},_aZ(t){if(this._aV){clearTimeout(this._aW);let e=this._aX;e||(e={play:!1,buffer:!1});let i=["play","buffer"];for(let s of i)Magix.has(t,s)||(t[s]=e[s]);this._aX=t,this._aW=setTimeout(()=>{let s=!1;if(e=this._aY){for(let a of i)if(e[a]!=t[a]){s=!0;break}}else s=!0;s&&this.fire("_au",this._aY=t)},50)}},_b_(){let t=this._aV;if(t){let e=t.buffered,i=0;e.length&&(i=e.end(e.length-1)/t.duration),this.fire("_aK",{duration:t.duration,current:t.currentTime,buffered:i})}},_bd(){if(!this._aV){let t,e=new Audio;e.onprogress=(()=>{this._b_()}),e.onerror=(()=>{clearTimeout(t),t=setTimeout(()=>{this.fire("_ar")},2e3)}),e.onended=(()=>{clearTimeout(t),t=setTimeout(()=>{this.fire("_ar")},1e3)}),e.onvolumechange=(()=>{this.fire("_ba",{volume:e.volume})}),e.oncanplay=(()=>{this._aZ({buffer:!1})}),e.onwaiting=(()=>{this._aZ({buffer:!0})}),e.ontimeupdate=(()=>{this._bb||this._b_()}),e.onplaying=(()=>{this._aZ({play:!0})}),e.ondurationchange=(()=>{this._bb||this._b_()}),e.onpause=(()=>{this._aZ({play:e.ended})}),e.onloadedmetadata=(()=>{let t=this._bc,e=!1;for(let i of UndoList)if(i.sid==t.sid){e=!0;break}if(!e)for(let i of RedoList)if(i.sid==t.sid){e=!0;break}e||UndoList.push(t),UndoList.length>MAX_HISTORY&&UndoList.shift(),this.fire("_av",{song:t})}),this._aV=e}},_be(t){this._bd(),this._aV.src=t.url,this._aV.play().catch(t=>{}),this._bc=t},_bf(t){if(this._aV){let e=this._aV.seekable,i=e.length;if(i){let s=e.start(0),a=e.end(i-1);t>=s&&t<=a&&(this._aV.currentTime=t)}else{let t=this._aV.buffered;if(t.length){let e=t.end(t.length-1);this._aV.currentTime=e}}}},_bh(t,e,i){clearTimeout(this._bg),this._bg=setTimeout(()=>{this._as(t,e)},i)},_as(t,e){return __awaiter(this,void 0,void 0,function*(){if(this._aA(),this._aZ({buffer:!0}),e||(e=0==RedoList.length),e)try{let i=Magix.mark(this,"_as"),{song:s}=yield this._aU(t);if(i()){let i=s[0];i.url?(this.fire("_aw",{song:i}),this._be(i)):this._bh(t,e,50)}}catch(i){this._bh(t,e,2e3)}else{let t=RedoList.pop();UndoList.push(t),this._be(t),this.fire("_aw",{song:t})}})},_aF(){if(UndoList.length>1){this._aA(),this._aZ({buffer:!0});let t=UndoList.pop();RedoList.push(t),t=UndoList[UndoList.length-1],this._be(t),this.fire("_aw",{song:t})}},_aH(){return this._aV},_az:()=>UndoList.length>1,_bi(t){this._aV&&(this._aV.volume=t)},_aA(){this._aV&&this._aV.pause()},_aB(){this._aV&&this._aV.play()},_bj(){let t=this._aV;return!!t&&(t.muted=!t.muted,t.muted)},_at(){this._aV&&(this._aV.currentTime=0,this._aV.play())},_ax(){if(UndoList.length>1){let t=UndoList[UndoList.length-2];return"\u4e0a\u4e00\u9996\uff1a"+t.title+"-"+t.artist}return"\u4e0a\u4e00\u9996\uff1a\u6682\u65e0\u5386\u53f2\u6b4c\u66f2"},_ay(){if(RedoList.length){let t=RedoList[RedoList.length-1];return"\u4e0b\u4e00\u9996\uff1a"+t.title+"-"+t.artist}return"\u4e0b\u4e00\u9996\uff1a\u968f\u673a\u6b4c\u66f2"},_aI(t){this._bb=t,t||this._b_()}},Magix.Event);