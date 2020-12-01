// ==UserScript==
// @name         104-ignore-not-interesting
// @namespace    https://2yc.tw
// @version      1.0.0
// @description  Ignore jobs you are not interested in on 104
// @author       YY
// @match        https://www.104.com.tw/jobs/search/*
// @match        https://www.104.com.tw/job/*
// @license      MIT
// @homepageURL     https://github.com/x3388638/104-ignore-not-interesting
// @updateURL    https://openuserjs.org/meta/x3388638/104-ignore-not-interesting.meta.js
// @grant        none
// ==/UserScript==
(()=>{"use strict";function t(){}function e(t){return t()}function o(){return Object.create(null)}function n(t){t.forEach(e)}function s(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t){return 0===Object.keys(t).length}function c(t){return null==t?"":t}function a(t,e){t.appendChild(e)}function r(t,e,o){t.insertBefore(e,o||null)}function u(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function b(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function h(t){return document.createTextNode(t)}function m(){return h(" ")}function f(t,e,o,n){return t.addEventListener(e,o,n),()=>t.removeEventListener(e,o,n)}function p(t,e,o){null==o?t.removeAttribute(e):t.getAttribute(e)!==o&&t.setAttribute(e,o)}function v(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let g;function w(t){g=t}new Set,new Set;const j=[],y=[],N=[],$=[],_=Promise.resolve();let k=!1;function x(t){N.push(t)}let z=!1;const I=new Set;function L(){if(!z){z=!0;do{for(let t=0;t<j.length;t+=1){const e=j[t];w(e),S(e.$$)}for(w(null),j.length=0;y.length;)y.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];I.has(e)||(I.add(e),e())}N.length=0}while(j.length);for(;$.length;)$.pop()();k=!1,z=!1,I.clear()}}function S(t){if(null!==t.fragment){t.update(),n(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}const C=new Set;let E,A;function q(t,e){t&&t.i&&(C.delete(t),t.i(e))}function J(t,e,o,n){if(t&&t.o){if(C.has(t))return;C.add(t),E.c.push((()=>{C.delete(t),n&&(o&&t.d(1),n())})),t.o(e)}}function M(t,e){J(t,1,1,(()=>{e.delete(t.key)}))}function B(t){t&&t.c()}function V(t,o,l){const{fragment:i,on_mount:c,on_destroy:a,after_update:r}=t.$$;i&&i.m(o,l),x((()=>{const o=c.map(e).filter(s);a?a.push(...o):n(o),t.$$.on_mount=[]})),r.forEach(x)}function O(t,e){const o=t.$$;null!==o.fragment&&(n(o.on_destroy),o.fragment&&o.fragment.d(e),o.on_destroy=o.fragment=null,o.ctx=[])}function T(e,s,l,i,c,a,r=[-1]){const d=g;w(e);const b=s.props||{},h=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:o(),dirty:r,skip_bound:!1};let m=!1;if(h.ctx=l?l(e,b,((t,o,...n)=>{const s=n.length?n[0]:o;return h.ctx&&c(h.ctx[t],h.ctx[t]=s)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](s),m&&function(t,e){-1===t.$$.dirty[0]&&(j.push(t),k||(k=!0,_.then(L)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),o})):[],h.update(),m=!0,n(h.before_update),h.fragment=!!i&&i(h.ctx),s.target){if(s.hydrate){const t=(f=s.target,Array.from(f.childNodes));h.fragment&&h.fragment.l(t),t.forEach(u)}else h.fragment&&h.fragment.c();s.intro&&q(e.$$.fragment),V(e,s.target,s.anchor),L()}var f;w(d)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(A=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,o){this[t]=o}$destroy(){O(this,1),this.$destroy=t}$on(t,e){const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){this.$$set&&!i(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class H{$destroy(){O(this,1),this.$destroy=t}$on(t,e){const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){this.$$set&&!i(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function R(e){let o,n,l;return{c(){o=d("button"),o.textContent="不感興趣",p(o,"class","ListingButton b-btn b-btn--default svelte-z6lnqd")},m(t,i){r(t,o,i),n||(l=f(o,"click",(function(){s(e[0])&&e[0].apply(this,arguments)})),n=!0)},p(t,[o]){e=t},i:t,o:t,d(t){t&&u(o),n=!1,l()}}}function P(t,e,o){let{onClick:n}=e;return t.$$set=t=>{"onClick"in t&&o(0,n=t.onClick)},[n]}const D=class extends H{constructor(t){var e;super(),document.getElementById("svelte-z6lnqd-style")||((e=d("style")).id="svelte-z6lnqd-style",e.textContent=".ListingButton.svelte-z6lnqd{margin-top:10px}",a(document.head,e)),T(this,t,P,R,l,{onClick:0})}},G="@104IgnoreNotInteresting:ignoredJobs",W="IGNORED_JOB_LIST_CHANGE",{localStorage:F}=window;F[G]=F[G]||"{}";try{JSON.parse(F[G])}catch{F[G]="{}"}const K=t=>{F[G]=JSON.stringify(t)},Q=(t={})=>new Proxy(t,{set:(t,e,o)=>(t[e]=o,K(t),!0),deleteProperty:(t,e)=>(delete t[e],K(t),!0)});let U=Q(JSON.parse(F[G]));const X=({jobName:t,jobNo:e,jobId:o,custName:n})=>{U[tt({jobName:t,jobNo:e,jobId:o,custName:n})]=Date.now(),et()},Y=({jobName:t,jobNo:e,jobId:o,custName:n})=>{delete U[tt({jobName:t,jobNo:e,jobId:o,custName:n})],et()},Z=t=>!!U[tt(t)],tt=({jobName:t,jobNo:e,jobId:o,custName:n})=>[t,e,o,n].join("​"),et=()=>{window.dispatchEvent(new CustomEvent(W,{detail:{...U}}))};window.addEventListener("storage",(({key:t,newValue:e})=>{if(t===G)try{const t=JSON.parse(e);U=Q(t),et()}catch{}}));const ot=/^https:\/\/www\.104\.com\.tw\/jobs\/search/,nt=/www\.104\.com\.tw\/job\/(\w+)/,st=(t=!1)=>{const e=document.querySelector("#js-job-content");e&&[...e.querySelectorAll("article")].reverse().every(((e,o)=>{const{jobName:n,jobNo:s,custName:l,isLast:i}=e.dataset,c=e.querySelector("a.js-job-link").getAttribute("href").match(nt)[1];return!(i&&!t)&&(Z({jobName:n,jobNo:s,jobId:c,custName:l})?it(e):(ct(e),e.querySelector("button[class*=svelte]")||new D({target:e.querySelector(".b-block__right"),props:{onClick:()=>lt({jobName:n,jobNo:s,custName:l,jobId:c,$job:e})}})),0===o&&(e.dataset.isLast=!0),!0)}))},lt=({jobName:t,jobNo:e,jobId:o,custName:n})=>{X({jobName:t,jobNo:e,jobId:o,custName:n})},it=t=>{t.className.endsWith(" hide")||(t.className+=" hide")},ct=t=>{t.className.endsWith(" hide")&&(t.className=t.className.split(" hide")[0])};function at(e){let o,n,l,i,b;return{c(){o=d("button"),n=h("不感興趣"),p(o,"class",l=c("ItemButton btn btn-sm btn-has-icon "+(e[0]?"btn-secondary":"btn-outline-primary"))+" svelte-ckv416")},m(t,l){r(t,o,l),a(o,n),i||(b=f(o,"click",(function(){s(e[1])&&e[1].apply(this,arguments)})),i=!0)},p(t,[n]){e=t,1&n&&l!==(l=c("ItemButton btn btn-sm btn-has-icon "+(e[0]?"btn-secondary":"btn-outline-primary"))+" svelte-ckv416")&&p(o,"class",l)},i:t,o:t,d(t){t&&u(o),i=!1,b()}}}function rt(t,e,o){let{isIgnored:n}=e,{onClick:s}=e;return t.$$set=t=>{"isIgnored"in t&&o(0,n=t.isIgnored),"onClick"in t&&o(1,s=t.onClick)},[n,s]}document.querySelector("#js-job-content")&&((()=>{const t=window.history.replaceState.bind(window.history);window.history.replaceState=(...e)=>{window.dispatchEvent(new CustomEvent("urlchange")),t(...e)},window.addEventListener("urlchange",(()=>{ot.test(window.location.href)&&setTimeout((()=>{st()}),449)})),window.addEventListener(W,(()=>{st(!0)}))})(),st());const ut=class extends H{constructor(t){var e;super(),document.getElementById("svelte-ckv416-style")||((e=d("style")).id="svelte-ckv416-style",e.textContent=".ItemButton.svelte-ckv416{float:left;margin-top:5px}",a(document.head,e)),T(this,t,rt,at,l,{isIgnored:0,onClick:1})}};function dt(e){let o,n,s;return{c(){o=b("svg"),n=b("path"),s=b("path"),p(n,"fill-rule","evenodd"),p(n,"d","M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"),p(s,"fill-rule","evenodd"),p(s,"d","M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"),p(o,"width","1em"),p(o,"height","1em"),p(o,"viewBox","0 0 16 16"),p(o,"class","bi bi-box-arrow-up-right"),p(o,"fill","currentColor"),p(o,"xmlns","http://www.w3.org/2000/svg")},m(t,e){r(t,o,e),a(o,n),a(o,s)},p:t,i:t,o:t,d(t){t&&u(o)}}}setTimeout((()=>{const t=document.querySelector(".job-header__btn");if(!t)return;const e=document.querySelector(".job-header__cont"),{jobId:o,jobName:n,jobNo:s,custName:l}=(t=>({jobId:window.location.href.match(/www\.104\.com\.tw\/job\/(\w+)/)[1],jobName:t.querySelector(".job-header__title h1").getAttribute("title"),jobNo:t.querySelector("form.apply-button").elements.cookie_names.value,custName:t.querySelector('.job-header__title > div > a[data-gtm-head="公司名稱"]').getAttribute("title")}))(e);let i=Z({jobName:n,jobNo:s,jobId:o,custName:l});const c=new ut({target:t,props:{isIgnored:i,onClick:()=>a()}}),a=()=>{i?Y({jobName:n,jobNo:s,jobId:o,custName:l}):X({jobName:n,jobNo:s,jobId:o,custName:l})};window.addEventListener(W,(()=>{i=Z({jobName:n,jobNo:s,jobId:o,custName:l}),c.$set({isIgnored:i})}))}),449);const bt=class extends H{constructor(t){super(),T(this,t,null,dt,l,{})}};function ht(e){let o,n,s;return{c(){o=b("svg"),n=b("path"),s=b("path"),p(n,"d","M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"),p(s,"fill-rule","evenodd"),p(s,"d","M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"),p(o,"width","1em"),p(o,"height","1em"),p(o,"viewBox","0 0 16 16"),p(o,"class","bi bi-trash"),p(o,"fill","currentColor"),p(o,"xmlns","http://www.w3.org/2000/svg")},m(t,e){r(t,o,e),a(o,n),a(o,s)},p:t,i:t,o:t,d(t){t&&u(o)}}}const mt=class extends H{constructor(t){super(),T(this,t,null,ht,l,{})}};function ft(t,e,o){const n=t.slice();return n[2]=e[o].jobName,n[3]=e[o].jobNo,n[4]=e[o].jobId,n[5]=e[o].custName,n}function pt(t,e){let o,n,l,i,c,b,g,w,j,y,N,$,_,k,x,z,I,L,S=e[2]+"",C=e[5]+"";return y=new bt({}),k=new mt({}),{key:t,first:null,c(){o=d("li"),n=d("span"),l=h(S),i=m(),c=d("span"),b=h(C),g=m(),w=d("span"),j=d("a"),B(y.$$.fragment),$=m(),_=d("span"),B(k.$$.fragment),x=m(),p(n,"class","JobItem__text svelte-1uhlbzt"),p(c,"class","JobItem__text svelte-1uhlbzt"),p(j,"href",N=`https://www.104.com.tw/job/${e[4]}`),p(j,"class","Actions__item Actions__item--link svelte-1uhlbzt"),p(j,"target","_blank"),p(_,"class","Actions__item Actions__item--delete svelte-1uhlbzt"),p(w,"class","Actions svelte-1uhlbzt"),p(o,"class","JobItem svelte-1uhlbzt"),this.first=o},m(t,u){r(t,o,u),a(o,n),a(n,l),a(o,i),a(o,c),a(c,b),a(o,g),a(o,w),a(w,j),V(y,j,null),a(w,$),a(w,_),V(k,_,null),a(o,x),z=!0,I||(L=f(_,"click",(function(){s(e[1]({jobName:e[2],jobNo:e[3],jobId:e[4],custName:e[5]}))&&e[1]({jobName:e[2],jobNo:e[3],jobId:e[4],custName:e[5]}).apply(this,arguments)})),I=!0)},p(t,o){e=t,(!z||1&o)&&S!==(S=e[2]+"")&&v(l,S),(!z||1&o)&&C!==(C=e[5]+"")&&v(b,C),(!z||1&o&&N!==(N=`https://www.104.com.tw/job/${e[4]}`))&&p(j,"href",N)},i(t){z||(q(y.$$.fragment,t),q(k.$$.fragment,t),z=!0)},o(t){J(y.$$.fragment,t),J(k.$$.fragment,t),z=!1},d(t){t&&u(o),O(y),O(k),I=!1,L()}}}function vt(t){let e,o,s,l,i,c=[],b=new Map,h=t[0];const f=t=>t[4];for(let e=0;e<h.length;e+=1){let o=ft(t,h,e),n=f(o);b.set(n,c[e]=pt(n,o))}return{c(){e=d("div"),o=d("h3"),o.textContent="已過濾職缺",s=m(),l=d("ul");for(let t=0;t<c.length;t+=1)c[t].c();p(o,"class","JobList__title svelte-1uhlbzt"),p(l,"class","JobList__list svelte-1uhlbzt"),p(e,"class","JobList svelte-1uhlbzt")},m(t,n){r(t,e,n),a(e,o),a(e,s),a(e,l);for(let t=0;t<c.length;t+=1)c[t].m(l,null);i=!0},p(t,[e]){if(3&e){const o=t[0];E={r:0,c:[],p:E},c=function(t,e,o,n,s,l,i,c,a,r,u,d){let b=t.length,h=l.length,m=b;const f={};for(;m--;)f[t[m].key]=m;const p=[],v=new Map,g=new Map;for(m=h;m--;){const t=d(s,l,m),n=o(t);let c=i.get(n);c?c.p(t,e):(c=r(n,t),c.c()),v.set(n,p[m]=c),n in f&&g.set(n,Math.abs(m-f[n]))}const w=new Set,j=new Set;function y(t){q(t,1),t.m(c,u),i.set(t.key,t),u=t.first,h--}for(;b&&h;){const e=p[h-1],o=t[b-1],n=e.key,s=o.key;e===o?(u=e.first,b--,h--):v.has(s)?!i.has(n)||w.has(n)?y(e):j.has(s)?b--:g.get(n)>g.get(s)?(j.add(n),y(e)):(w.add(s),b--):(a(o,i),b--)}for(;b--;){const e=t[b];v.has(e.key)||a(e,i)}for(;h;)y(p[h-1]);return p}(c,e,f,0,t,o,b,l,M,pt,null,ft),E.r||n(E.c),E=E.p}},i(t){if(!i){for(let t=0;t<h.length;t+=1)q(c[t]);i=!0}},o(t){for(let t=0;t<c.length;t+=1)J(c[t]);i=!1},d(t){t&&u(e);for(let t=0;t<c.length;t+=1)c[t].d()}}}function gt(t,e,o){let{jobList:n=[]}=e,{onRemove:s}=e;return t.$$set=t=>{"jobList"in t&&o(0,n=t.jobList),"onRemove"in t&&o(1,s=t.onRemove)},[n,s]}const wt=class extends H{constructor(t){var e;super(),document.getElementById("svelte-1uhlbzt-style")||((e=d("style")).id="svelte-1uhlbzt-style",e.textContent=".JobList.svelte-1uhlbzt.svelte-1uhlbzt{background:#fff;overflow:auto;margin-top:15px}.JobList__title.svelte-1uhlbzt.svelte-1uhlbzt{padding:0 8px}.JobList__list.svelte-1uhlbzt.svelte-1uhlbzt{list-style:none;padding:0 3px;max-height:350px;overflow:auto}.JobItem.svelte-1uhlbzt.svelte-1uhlbzt{padding:5px;margin:5px;background:#fffaf2;position:relative}.JobItem__text.svelte-1uhlbzt.svelte-1uhlbzt{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;width:100%;display:block}.JobItem.svelte-1uhlbzt:hover .Actions.svelte-1uhlbzt{opacity:1}.Actions.svelte-1uhlbzt.svelte-1uhlbzt{position:absolute;top:0;left:0;right:0;bottom:0;background:#ffffffcf;display:flex;opacity:0;transition:opacity 0.2s cubic-bezier(0, 0, 0.2, 1) 0s}.Actions__item.svelte-1uhlbzt.svelte-1uhlbzt{flex:1;display:flex;justify-content:center;align-items:center;font-size:25px;margin:5px;cursor:pointer}.Actions__item--link.svelte-1uhlbzt.svelte-1uhlbzt{color:#000}.Actions__item--link.svelte-1uhlbzt.svelte-1uhlbzt:hover{background:#0070ff52}.Actions__item--delete.svelte-1uhlbzt.svelte-1uhlbzt:hover{background:#ff454569}",a(document.head,e)),T(this,t,gt,vt,l,{jobList:0,onRemove:1})}},jt=t=>Object.entries(t).sort(((t,e)=>t[1]-e[1])).map((([t])=>(t=>{const[e,o,n,s]=t.split("​");return{jobName:e,jobNo:o,jobId:n,custName:s}})(t)));(()=>{const t=document.querySelector(".l-content--2col--sub > section");if(!t)return;const e={...U},o=jt(e),n=new wt({target:t,props:{jobList:o,onRemove:({jobName:t,jobNo:e,jobId:o,custName:n})=>Y({jobName:t,jobNo:e,jobId:o,custName:n})}});window.addEventListener(W,(({detail:t})=>{n.$set({jobList:jt(t)})}))})()})();