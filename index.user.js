(()=>{"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t){return 0===Object.keys(t).length}function l(t){return null==t?"":t}function i(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function f(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let m;function h(t){m=t}new Set,new Set;const p=[],$=[],g=[],y=[],w=Promise.resolve();let j=!1;function k(t){g.push(t)}let N=!1;const _=new Set;function v(){if(!N){N=!0;do{for(let t=0;t<p.length;t+=1){const e=p[t];h(e),x(e.$$)}for(h(null),p.length=0;$.length;)$.pop()();for(let t=0;t<g.length;t+=1){const e=g[t];_.has(e)||(_.add(e),e())}g.length=0}while(p.length);for(;y.length;)y.pop()();j=!1,N=!1,_.clear()}}function x(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(k)}}const S=new Set;let C;function E(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function q(s,c,l,i,a,d,f=[-1]){const b=m;h(s);const $=c.props||{},g=s.$$={fragment:null,ctx:null,props:d,update:t,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(b?b.$$.context:[]),callbacks:n(),dirty:f,skip_bound:!1};let y=!1;if(g.ctx=l?l(s,$,((t,e,...n)=>{const o=n.length?n[0]:e;return g.ctx&&a(g.ctx[t],g.ctx[t]=o)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](o),y&&function(t,e){-1===t.$$.dirty[0]&&(p.push(t),j||(j=!0,w.then(v)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(s,t)),e})):[],g.update(),y=!0,o(g.before_update),g.fragment=!!i&&i(g.ctx),c.target){if(c.hydrate){const t=(x=c.target,Array.from(x.childNodes));g.fragment&&g.fragment.l(t),t.forEach(u)}else g.fragment&&g.fragment.c();c.intro&&((N=s.$$.fragment)&&N.i&&(S.delete(N),N.i(_))),function(t,n,s){const{fragment:c,on_mount:l,on_destroy:i,after_update:a}=t.$$;c&&c.m(n,s),k((()=>{const n=l.map(e).filter(r);i?i.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(k)}(s,c.target,c.anchor),v()}var N,_,x;h(b)}"undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global,new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]),"function"==typeof HTMLElement&&(C=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}$destroy(){E(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!c(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});class I{$destroy(){E(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!c(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function A(e){let n,o,r;return{c(){n=d("button"),n.textContent="不感興趣",b(n,"class","b-btn b-btn--default svelte-148gft3")},m(t,s){a(t,n,s),o||(r=f(n,"click",e[0]),o=!0)},p:t,i:t,o:t,d(t){t&&u(n),o=!1,r()}}}function L(t,e,n){let{onClick:o}=e;return t.$$set=t=>{"onClick"in t&&n(1,o=t.onClick)},[t=>{o(t.target.parentElement.parentElement.querySelector(".js-job-link").getAttribute("href"))},o]}const O=class extends I{constructor(t){var e;super(),document.getElementById("svelte-148gft3-style")||((e=d("style")).id="svelte-148gft3-style",e.textContent="button.svelte-148gft3{margin-top:10px}",i(document.head,e)),q(this,t,L,A,s,{onClick:1})}},T="@104IgnoreNotInteresting:ignoredJobs",{localStorage:J}=window;J[T]=J[T]||"{}";try{JSON.parse(J[T])}catch{J[T]="{}"}const B=t=>{J[T]=JSON.stringify(t)},M=new Proxy(JSON.parse(J[T]),{set:(t,e,n)=>(t[e]=n,B(t),!0),deleteProperty:(t,e)=>(delete t[e],B(t),!0)}),P=t=>!!M[H(t)],H=({jobName:t,jobNo:e,custName:n})=>`${e}-${n}-${t}`,U=/^https:\/\/www\.104\.com\.tw\/jobs\/search/,z=/www\.104\.com\.tw\/job\/(\w+)/,D=()=>{const t=document.querySelector("#js-job-content");t&&[...t.querySelectorAll("article")].reverse().every(((t,e)=>{const{jobName:n,jobNo:o,custName:r,isLast:s}=t.dataset;return!s&&(P({jobName:n,jobNo:o,custName:r})?G(t):new O({target:t.querySelector(".b-block__right"),props:{onClick:e=>F({jobName:n,jobNo:o,custName:r,jobUrl:e,$job:t})}}),0===e&&(t.dataset.isLast=!0),!0)}))},F=({jobName:t,jobNo:e,custName:n,jobUrl:o,$job:r})=>{M[H({jobName:t,jobNo:e,custName:n})]=o.match(z)[1],G(r)},G=t=>{t.className+=" hide"},K=window.history.replaceState;function Q(e){let n,o,s,c,m;return{c(){var t;n=d("button"),t="不感興趣",o=document.createTextNode(t),b(n,"class",s=l("btn btn-sm btn-has-icon "+(e[0]?"btn-secondary":"btn-outline-primary"))+" svelte-nck79t")},m(t,s){a(t,n,s),i(n,o),c||(m=f(n,"click",(function(){r(e[1])&&e[1].apply(this,arguments)})),c=!0)},p(t,[o]){e=t,1&o&&s!==(s=l("btn btn-sm btn-has-icon "+(e[0]?"btn-secondary":"btn-outline-primary"))+" svelte-nck79t")&&b(n,"class",s)},i:t,o:t,d(t){t&&u(n),c=!1,m()}}}function R(t,e,n){let{isIgnored:o}=e,{onClick:r}=e;return t.$$set=t=>{"isIgnored"in t&&n(0,o=t.isIgnored),"onClick"in t&&n(1,r=t.onClick)},[o,r]}window.history.replaceState=(...t)=>{window.dispatchEvent(new CustomEvent("urlchange")),K(...t)},window.addEventListener("urlchange",(()=>{U.test(window.location.href)&&setTimeout((()=>{D()}),449)})),D();const V=class extends I{constructor(t){var e;super(),document.getElementById("svelte-nck79t-style")||((e=d("style")).id="svelte-nck79t-style",e.textContent="button.svelte-nck79t{float:left;margin-top:5px}",i(document.head,e)),q(this,t,R,Q,s,{isIgnored:0,onClick:1})}},W=document.querySelector(".job-header__btn");if(W){const t=document.querySelector(".job-header__cont"),e=t.querySelector(".job-header__title h1").getAttribute("title"),n=t.querySelector("form.apply-button").elements.cookie_names.value,o=t.querySelector('.job-header__title > div > a[data-gtm-head="公司名稱"]').getAttribute("title");let r=P({jobName:e,jobNo:n,custName:o});const s=new V({target:W,props:{isIgnored:r,onClick:()=>c()}}),c=()=>{r=!r,s.$$set({isIgnored:r}),r?M[H({jobName:e,jobNo:n,custName:o})]=window.location.href.match(/www\.104\.com\.tw\/job\/(\w+)/)[1]:delete M[H({jobName:e,jobNo:n,custName:o})]}}})();