/*!1.0.5 kooboy_li@163.com*/
import t from"../../lib/magix.js";import e from"../../lib/agent.js";let i="https://jirenguapi.applinzi.com/fm",s=[],h=[];export default Object.assign({_bB:()=>e.request(`${i}/getChannels.php`,2592e6),_bC:t=>fetch(`${i}/getSong.php?channel=${t}`).then(t=>t.json()),_by:t=>fetch(`${i}/getLyric.php?sid=${t}`).then(t=>t.json()),async _aV(){let t=await this._bB(),e=JSON.parse(t),{channels:i}=e;return{active:i[0],channels:i}},_bH(e){if(this._bD){clearTimeout(this._bE);let i=this._bF;i||(i={play:!1,buffer:!1});let s=["play","buffer"];for(let h of s)t.has(e,h)||(e[h]=i[h]);this._bF=e,this._bE=setTimeout(()=>{let t=!1;if(i=this._bG){for(let h of s)if(i[h]!=e[h]){t=!0;break}}else t=!0;t&&this.fire("_b_",this._bG=e)},50)}},_bI(){let t=this._bD;if(t){let e=t.buffered,i=0;e.length&&(i=e.end(e.length-1)/t.duration),this.fire("_bq",{duration:t.duration,current:t.currentTime,buffered:i})}},_bM(){if(!this._bD){let t,e=new Audio;e.onprogress=t=>{e.buffered.length,this._bI()},e.onerror=()=>{clearTimeout(t),t=setTimeout(()=>{this.fire("_aX")},2e3)},e.onended=()=>{clearTimeout(t),t=setTimeout(()=>{this.fire("_aX")},1e3)},e.onvolumechange=()=>{this.fire("_bJ",{volume:e.volume})},e.oncanplay=()=>{this._bH({buffer:!1})},e.onwaiting=()=>{this._bH({buffer:!0})},e.ontimeupdate=()=>{this._bK||this._bI()},e.onplaying=()=>{this._bH({play:!0})},e.ondurationchange=()=>{this._bK||this._bI()},e.onpause=()=>{this._bH({play:e.ended})},e.onloadedmetadata=()=>{let t=this._bL,e=!1;for(let i of h)if(i.sid==t.sid){e=!0;break}if(!e)for(let i of s)if(i.sid==t.sid){e=!0;break}e||h.push(t),h.length>50&&h.shift(),this.fire("_ba",{song:t})},this._bD=e}},_bN(t){this._bM(),this._bD.src=t.url,this._bD.play().catch(t=>{}),this._bL=t},_bO(t){if(this._bD){let e=this._bD.seekable,i=e.length;if(i){let s=e.start(0),h=e.end(i-1);t>=s&&t<=h&&(this._bD.currentTime=t)}else{let t=this._bD.buffered;if(t.length){let e=t.end(t.length-1);this._bD.currentTime=e}}}},_bQ(t,e,i){clearTimeout(this._bP),this._bP=setTimeout(()=>{this._aY(t,e)},i)},async _aY(e,i){if(this._be(),this._bH({buffer:!0}),i||(i=0==s.length),i)try{let s=t.mark(this,"_aY"),{song:h}=await this._bC(e);if(s()){let t=h[0];t.url?(this.fire("_bb",{song:t}),this._bN(t)):this._bQ(e,i,50)}}catch(t){this._bQ(e,i,2e3)}else{let t=s.pop();h.push(t),this._bN(t),this.fire("_bb",{song:t})}},_bf(){if(h.length>1){this._be(),this._bH({buffer:!0});let t=h.pop();s.push(t),t=h[h.length-1],this._bN(t),this.fire("_bb",{song:t})}},_bc(){return this._bD},_bi:()=>h.length>1,_bR(t){this._bD&&(this._bD.volume=t)},_be(){this._bD&&this._bD.pause()},_bd(){this._bD&&this._bD.play()},_bS(){let t=this._bD;return!!t&&(t.muted=!t.muted,t.muted)},_aZ(){this._bD&&(this._bD.currentTime=0,this._bD.play())},_bg(){if(h.length>1){let t=h[h.length-2];return"\u4e0a\u4e00\u9996\uff1a"+t.title+"-"+t.artist}return"\u4e0a\u4e00\u9996\uff1a\u6682\u65e0\u5386\u53f2\u6b4c\u66f2"},_bh(){if(s.length){let t=s[s.length-1];return"\u4e0b\u4e00\u9996\uff1a"+t.title+"-"+t.artist}return"\u4e0b\u4e00\u9996\uff1a\u968f\u673a\u6b4c\u66f2"},_bo(t){this._bK=t,t||this._bI()}},t.Event);