import{e as p,a as K,z as Q,b as X,j as M,k as O,s as Y}from"./zh_TW.QW3zXaYW.js";function N(){}function Z(t,n){for(const e in n)t[e]=n[e];return t}function D(t){return t()}function P(){return Object.create(null)}function x(t){t.forEach(D)}function I(t){return"function"==typeof t}function Nt(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function tt(t){return 0===Object.keys(t).length}function At(t,n,e,o){if(t){const i=G(t,n,e,o);return t[0](i)}}function G(t,n,e,o){return t[1]&&o?Z(e.ctx.slice(),t[1](o(n))):e.ctx}function kt(t,n,e,o){if(t[2]&&o){const i=t[2](o(e));if(void 0===n.dirty)return i;if("object"==typeof i){const t=[],e=Math.max(n.dirty.length,i.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|i[o];return t}return n.dirty|i}return n.dirty}function jt(t,n,e,o,i,r){if(i){const c=G(n,e,o,r);t.p(c,i)}}function Lt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function St(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}let b=!1;function nt(){b=!0}function et(){b=!1}function it(t,n,e,o){for(;t<n;){const i=t+(n-t>>1);e(i)<=o?t=i+1:n=i}return t}function st(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let e=0;e<n.length;e++){const o=n[e];void 0!==o.claim_order&&t.push(o)}n=t}const e=new Int32Array(n.length+1),o=new Int32Array(n.length);e[0]=-1;let i=0;for(let t=0;t<n.length;t++){const r=n[t].claim_order,c=(i>0&&n[e[i]].claim_order<=r?i+1:it(1,i,(t=>n[e[t]].claim_order),r))-1;o[t]=e[c]+1;const s=c+1;e[s]=t,i=Math.max(s,i)}const r=[],c=[];let s=n.length-1;for(let t=e[i]+1;0!=t;t=o[t-1]){for(r.push(n[t-1]);s>=t;s--)c.push(n[s]);s--}for(;s>=0;s--)c.push(n[s]);r.reverse(),c.sort(((t,n)=>t.claim_order-n.claim_order));for(let n=0,e=0;n<c.length;n++){for(;e<r.length&&c[n].claim_order>=r[e].claim_order;)e++;const o=e<r.length?r[e]:null;t.insertBefore(c[n],o)}}function rt(t,n){if(b){for(st(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(void 0!==n.claim_order||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||null!==n.nextSibling)&&t.appendChild(n)}function lt(t,n,e){t.insertBefore(n,e||null)}function ct(t,n,e){b&&!e?rt(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function v(t){t.parentNode&&t.parentNode.removeChild(t)}function Ct(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function R(t){return document.createElement(t)}function q(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function j(t){return document.createTextNode(t)}function Mt(){return j(" ")}function Ot(){return j("")}function Pt(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function F(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}const ot=["width","height"];function Ht(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in n)null==n[o]?t.removeAttribute(o):"style"===o?t.style.cssText=n[o]:"__value"===o?t.value=t[o]=n[o]:e[o]&&e[o].set&&-1===ot.indexOf(o)?t[o]=n[o]:F(t,o,n[o])}function zt(t,n){for(const e in n)F(t,e,n[e])}function Bt(t){return""===t?null:+t}function at(t){return Array.from(t.childNodes)}function U(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function V(t,n,e,o,i=!1){U(t);const r=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const r=t[o];if(n(r)){const n=e(r);return void 0===n?t.splice(o,1):t[o]=n,i||(t.claim_info.last_index=o),r}}for(let o=t.claim_info.last_index-1;o>=0;o--){const r=t[o];if(n(r)){const n=e(r);return void 0===n?t.splice(o,1):t[o]=n,i?void 0===n&&t.claim_info.last_index--:t.claim_info.last_index=o,r}}return o()})();return r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,r}function W(t,n,e,o){return V(t,(t=>t.nodeName===n),(t=>{const n=[];for(let o=0;o<t.attributes.length;o++){const i=t.attributes[o];e[i.name]||n.push(i.name)}n.forEach((n=>t.removeAttribute(n)))}),(()=>o(n)))}function Dt(t,n,e){return W(t,n,e,R)}function It(t,n,e){return W(t,n,e,q)}function ut(t,n){return V(t,(t=>3===t.nodeType),(t=>{const e=""+n;if(t.data.startsWith(e)){if(t.data.length!==e.length)return t.splitText(e.length)}else t.data=e}),(()=>j(n)),!0)}function Gt(t){return ut(t," ")}function H(t,n,e){for(let o=e;o<t.length;o+=1){const e=t[o];if(8===e.nodeType&&e.textContent.trim()===n)return o}return-1}function Rt(t,n){const e=H(t,"HTML_TAG_START",0),o=H(t,"HTML_TAG_END",e+1);if(-1===e||-1===o)return new E(n);U(t);const i=t.splice(e,o-e+1);v(i[0]),v(i[i.length-1]);const r=i.slice(1,i.length-1);if(0===r.length)return new E(n);for(const n of r)n.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new E(n,r)}function qt(t,n){n=""+n,t.data!==n&&(t.data=n)}function Ft(t,n){t.value=n??""}function Ut(t,n,e,o){t.style.setProperty(n,e,"")}function Vt(t,n,e){t.classList.toggle(n,!!e)}function ft(t,n,{bubbles:e=!1,cancelable:o=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:o})}class _t{is_svg=!1;e=void 0;n=void 0;t=void 0;a=void 0;constructor(t=!1){this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,n,e=null){this.e||(this.is_svg?this.e=q(n.nodeName):this.e=R(11===n.nodeType?"TEMPLATE":n.nodeName),this.t="TEMPLATE"!==n.tagName?n:n.content,this.c(t)),this.i(e)}h(t){this.e.innerHTML=t,this.n=Array.from("TEMPLATE"===this.e.nodeName?this.e.content.childNodes:this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)lt(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(v)}}class E extends _t{l=void 0;constructor(t=!1,n){super(t),this.e=this.n=null,this.l=n}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let n=0;n<this.n.length;n+=1)ct(this.t,this.n[n],t)}}let y;function g(t){y=t}function L(){if(!y)throw new Error("Function called outside component initialization");return y}function Wt(t){L().$$.on_mount.push(t)}function Jt(t){L().$$.on_destroy.push(t)}function Kt(){const t=L();return(n,e,{cancelable:o=!1}={})=>{const i=t.$$.callbacks[n];if(i){const r=ft(n,e,{cancelable:o});return i.slice().forEach((n=>{n.call(t,r)})),!r.defaultPrevented}return!0}}const h=[],z=[];let m=[];const B=[],dt=Promise.resolve();let A=!1;function ht(){A||(A=!0,dt.then(J))}function k(t){m.push(t)}const T=new Set;let d=0;function J(){if(0!==d)return;const t=y;do{try{for(;d<h.length;){const t=h[d];d++,g(t),mt(t.$$)}}catch(t){throw h.length=0,d=0,t}for(g(null),h.length=0,d=0;z.length;)z.pop()();for(let t=0;t<m.length;t+=1){const n=m[t];T.has(n)||(T.add(n),n())}m.length=0}while(h.length);for(;B.length;)B.pop()();A=!1,T.clear(),g(t)}function mt(t){if(null!==t.fragment){t.update(),x(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(k)}}function pt(t){const n=[],e=[];m.forEach((o=>-1===t.indexOf(o)?n.push(o):e.push(o))),e.forEach((t=>t())),m=n}const $=new Set;let _;function Qt(){_={r:0,c:[],p:_}}function Xt(){_.r||x(_.c),_=_.p}function gt(t,n){t&&t.i&&($.delete(t),t.i(n))}function Yt(t,n,e,o){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push((()=>{$.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}else o&&o()}function Zt(t){t&&t.c()}function tn(t,n){t&&t.l(n)}function yt(t,n,e){const{fragment:o,after_update:i}=t.$$;o&&o.m(n,e),k((()=>{const n=t.$$.on_mount.map(D).filter(I);t.$$.on_destroy?t.$$.on_destroy.push(...n):x(n),t.$$.on_mount=[]})),i.forEach(k)}function xt(t,n){const e=t.$$;null!==e.fragment&&(pt(e.after_update),x(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function wt(t,n){-1===t.$$.dirty[0]&&(h.push(t),ht(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function nn(t,n,e,o,i,r,c=null,s=[-1]){const a=y;g(t);const l=t.$$={fragment:null,ctx:[],props:r,update:N,not_equal:i,bound:P(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(a?a.$$.context:[])),callbacks:P(),dirty:s,skip_bound:!1,root:n.target||a.$$.root};c&&c(l.root);let u=!1;if(l.ctx=e?e(t,n.props||{},((n,e,...o)=>{const r=o.length?o[0]:e;return l.ctx&&i(l.ctx[n],l.ctx[n]=r)&&(!l.skip_bound&&l.bound[n]&&l.bound[n](r),u&&wt(t,n)),e})):[],l.update(),u=!0,x(l.before_update),l.fragment=!!o&&o(l.ctx),n.target){if(n.hydrate){nt();const t=at(n.target);l.fragment&&l.fragment.l(t),t.forEach(v)}else l.fragment&&l.fragment.c();n.intro&&gt(t.$$.fragment),yt(t,n.target,n.anchor),et(),J()}g(a)}class en{$$=void 0;$$set=void 0;$destroy(){xt(this,1),this.$destroy=N}$on(t,n){if(!I(n))return N;const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){this.$$set&&!tt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const $t="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add($t);const vt=p,bt={es:K,en:p,en_us:p,en_gb:p,en_au:p,zh_cn:Q,zh_tw:X,ja:M,ja_jp:M,ko:O,ko_kr:O};function Et(t){return bt[t.toLowerCase()]||vt}function sn(t){return Et(Y.lang)[t]}export{Bt as A,Xt as B,Ct as C,Wt as D,Rt as E,Qt as F,Ot as G,E as H,N as I,Jt as J,Z as K,St as L,Ht as M,q as N,It as O,zt as P,Kt as Q,Zt as R,en as S,tn as T,yt as U,xt as V,sn as a,Mt as b,At as c,Dt as d,R as e,at as f,ut as g,Gt as h,nn as i,v as j,F as k,Vt as l,Ut as m,ct as n,rt as o,Ft as p,Pt as q,Lt as r,Nt as s,j as t,jt as u,kt as v,qt as w,gt as x,Yt as y,x as z};