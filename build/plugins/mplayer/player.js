/*!1.0.2 kooboy_li@163.com*/
import t from"../../lib/magix.js";import e from"../../lib/agent.js";let i="https://jirenguapi.applinzi.com/fm",s=[],h=[];export default Object.assign({_by:()=>e.request(`${i}/getChannels.php`,2592e6),_bz:t=>fetch(`${i}/getSong.php?channel=${t}`).then(t=>t.json()),_bv:t=>fetch(`${i}/getLyric.php?sid=${t}`).then(t=>t.json()),async _aS(){let t=await this._by(),e=JSON.parse(t),{channels:i}=e;return{active:i[0],channels:i}},_bE(e){if(this._bA){clearTimeout(this._bB);let i=this._bC;i||(i={play:!1,buffer:!1});let s=["play","buffer"];for(let h of s)t.has(e,h)||(e[h]=i[h]);this._bC=e,this._bB=setTimeout(()=>{let t=!1;if(i=this._bD){for(let h of s)if(i[h]!=e[h]){t=!0;break}}else t=!0;t&&this.fire("_aX",this._bD=e)},50)}},_bF(){let t=this._bA;if(t){let e=t.buffered,i=0;e.length&&(i=e.end(e.length-1)/t.duration),this.fire("_bn",{duration:t.duration,current:t.currentTime,buffered:i})}},_bJ(){if(!this._bA){let t,e=new Audio;e.onprogress=t=>{e.buffered.length,this._bF()},e.onerror=()=>{clearTimeout(t),t=setTimeout(()=>{this.fire("_aU")},2e3)},e.onended=()=>{clearTimeout(t),t=setTimeout(()=>{this.fire("_aU")},1e3)},e.onvolumechange=()=>{this.fire("_bG",{volume:e.volume})},e.oncanplay=()=>{this._bE({buffer:!1})},e.onwaiting=()=>{this._bE({buffer:!0})},e.ontimeupdate=()=>{this._bH||this._bF()},e.onplaying=()=>{this._bE({play:!0})},e.ondurationchange=()=>{this._bH||this._bF()},e.onpause=()=>{this._bE({play:e.ended})},e.onloadedmetadata=()=>{let t=this._bI,e=!1;for(let i of h)if(i.sid==t.sid){e=!0;break}if(!e)for(let i of s)if(i.sid==t.sid){e=!0;break}e||h.push(t),h.length>50&&h.shift(),this.fire("_aY",{song:t})},this._bA=e}},_bK(t){this._bJ(),this._bA.src=t.url,this._bA.play().catch(t=>{}),this._bI=t},_bL(t){if(this._bA){let e=this._bA.seekable,i=e.length;if(i){let s=e.start(0),h=e.end(i-1);t>=s&&t<=h&&(this._bA.currentTime=t)}else{let t=this._bA.buffered;if(t.length){let e=t.end(t.length-1);this._bA.currentTime=e}}}},_bN(t,e,i){clearTimeout(this._bM),this._bM=setTimeout(()=>{this._aV(t,e)},i)},async _aV(e,i){if(this._bb(),this._bE({buffer:!0}),i||(i=0==s.length),i)try{let s=t.mark(this,"_aV"),{song:h}=await this._bz(e);if(s()){let t=h[0];t.url?(this.fire("_aZ",{song:t}),this._bK(t)):this._bN(e,i,50)}}catch(t){this._bN(e,i,2e3)}else{let t=s.pop();h.push(t),this._bK(t),this.fire("_aZ",{song:t})}},_bc(){if(h.length>1){this._bb(),this._bE({buffer:!0});let t=h.pop();s.push(t),t=h[h.length-1],this._bK(t),this.fire("_aZ",{song:t})}},_b_(){return this._bA},_bf:()=>h.length>1,_bO(t){this._bA&&(this._bA.volume=t)},_bb(){this._bA&&this._bA.pause()},_ba(){this._bA&&this._bA.play()},_bP(){let t=this._bA;return!!t&&(t.muted=!t.muted,t.muted)},_aW(){this._bA&&(this._bA.currentTime=0,this._bA.play())},_bd(){if(h.length>1){let t=h[h.length-2];return"\u4e0a\u4e00\u9996\uff1a"+t.title+"-"+t.artist}return"\u4e0a\u4e00\u9996\uff1a\u6682\u65e0\u5386\u53f2\u6b4c\u66f2"},_be(){if(s.length){let t=s[s.length-1];return"\u4e0b\u4e00\u9996\uff1a"+t.title+"-"+t.artist}return"\u4e0b\u4e00\u9996\uff1a\u968f\u673a\u6b4c\u66f2"},_bl(t){this._bH=t,t||this._bF()}},t.Event);