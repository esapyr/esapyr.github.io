import{X as N,Y as z,Z as G,_ as h,$ as H,I as b,a0 as v,a1 as P,a2 as O,z as K,a3 as V,a4 as X,T as J,a5 as C,a6 as D,a7 as Z,a8 as Q,a9 as W,aa as $,ab as k,ac as ee,F,ad as re,N as ne,ae as ie,af as te,ag as ae,P as Y,ah as se,K as q,ai as fe,aj as ue}from"./BK5qXZnv.js";function R(e,r=null,f){if(typeof e!="object"||e===null||N in e)return e;const u=X(e);if(u!==z&&u!==G)return e;var t=new Map,o=J(e),w=h(0);o&&t.set("length",h(e.length));var g;return new Proxy(e,{defineProperty(l,n,i){(!("value"in i)||i.configurable===!1||i.enumerable===!1||i.writable===!1)&&V();var s=t.get(n);return s===void 0?(s=h(i.value),t.set(n,s)):P(s,R(i.value,g)),!0},deleteProperty(l,n){var i=t.get(n);if(i===void 0)n in l&&t.set(n,h(v));else{if(o&&typeof n=="string"){var s=t.get("length"),a=Number(n);Number.isInteger(a)&&a<s.v&&P(s,a)}P(i,v),M(w)}return!0},get(l,n,i){var c;if(n===N)return e;var s=t.get(n),a=n in l;if(s===void 0&&(!a||(c=O(l,n))!=null&&c.writable)&&(s=h(R(a?l[n]:v,g)),t.set(n,s)),s!==void 0){var d=b(s);return d===v?void 0:d}return Reflect.get(l,n,i)},getOwnPropertyDescriptor(l,n){var i=Reflect.getOwnPropertyDescriptor(l,n);if(i&&"value"in i){var s=t.get(n);s&&(i.value=b(s))}else if(i===void 0){var a=t.get(n),d=a==null?void 0:a.v;if(a!==void 0&&d!==v)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return i},has(l,n){var d;if(n===N)return!0;var i=t.get(n),s=i!==void 0&&i.v!==v||Reflect.has(l,n);if(i!==void 0||K!==null&&(!s||(d=O(l,n))!=null&&d.writable)){i===void 0&&(i=h(s?R(l[n],g):v),t.set(n,i));var a=b(i);if(a===v)return!1}return s},set(l,n,i,s){var I;var a=t.get(n),d=n in l;if(o&&n==="length")for(var c=i;c<a.v;c+=1){var y=t.get(c+"");y!==void 0?P(y,v):c in l&&(y=h(v),t.set(c+"",y))}a===void 0?(!d||(I=O(l,n))!=null&&I.writable)&&(a=h(void 0),P(a,R(i,g)),t.set(n,a)):(d=a.v!==v,P(a,R(i,g)));var p=Reflect.getOwnPropertyDescriptor(l,n);if(p!=null&&p.set&&p.set.call(s,i),!d){if(o&&typeof n=="string"){var x=t.get("length"),E=Number(n);Number.isInteger(E)&&E>=x.v&&P(x,E+1)}M(w)}return!0},ownKeys(l){b(w);var n=Reflect.ownKeys(l).filter(a=>{var d=t.get(a);return d===void 0||d.v!==v});for(var[i,s]of t)s.v!==v&&!(i in l)&&n.push(i);return n},setPrototypeOf(){H()}})}function M(e,r=1){P(e,e.v+r)}let A=!1;function le(e){var r=A;try{return A=!1,[e(),A]}finally{A=r}}const de={get(e,r){if(!e.exclude.includes(r))return b(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,f){return r in e.special||(e.special[r]=oe({get[r](){return e.props[r]}},r,$)),e.special[r](f),C(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),C(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function ce(e,r){return new Proxy({props:e,exclude:r,special:{},version:h(0)},de)}const _e={get(e,r){let f=e.props.length;for(;f--;){let u=e.props[f];if(D(u)&&(u=u()),typeof u=="object"&&u!==null&&r in u)return u[r]}},set(e,r,f){let u=e.props.length;for(;u--;){let t=e.props[u];D(t)&&(t=t());const o=O(t,r);if(o&&o.set)return o.set(f),!0}return!1},getOwnPropertyDescriptor(e,r){let f=e.props.length;for(;f--;){let u=e.props[f];if(D(u)&&(u=u()),typeof u=="object"&&u!==null&&r in u){const t=O(u,r);return t&&!t.configurable&&(t.configurable=!0),t}}},has(e,r){if(r===N||r===Z)return!1;for(let f of e.props)if(D(f)&&(f=f()),f!=null&&r in f)return!0;return!1},ownKeys(e){const r=[];for(let f of e.props){D(f)&&(f=f());for(const u in f)r.includes(u)||r.push(u)}return r}};function pe(...e){return new Proxy({props:e},_e)}function U(e){for(var r=K,f=K;r!==null&&!(r.f&(te|ae));)r=r.parent;try{return Y(r),e()}finally{Y(f)}}function oe(e,r,f,u){var B;var t=(f&se)!==0,o=!ne||(f&ie)!==0,w=(f&re)!==0,g=(f&fe)!==0,l=!1,n;w?[n,l]=le(()=>e[r]):n=e[r];var i=N in e||Z in e,s=w&&(((B=O(e,r))==null?void 0:B.set)??(i&&r in e&&(_=>e[r]=_)))||void 0,a=u,d=!0,c=!1,y=()=>(c=!0,d&&(d=!1,g?a=F(u):a=u),a);n===void 0&&u!==void 0&&(s&&o&&Q(),n=y(),s&&s(n));var p;if(o)p=()=>{var _=e[r];return _===void 0?y():(d=!0,c=!1,_)};else{var x=U(()=>(t?q:ue)(()=>e[r]));x.f|=W,p=()=>{var _=b(x);return _!==void 0&&(a=void 0),_===void 0?a:_}}if(!(f&$))return p;if(s){var E=e.$$legacy;return function(_,m){return arguments.length>0?((!o||!m||E||l)&&s(m?p():_),_):p()}}var I=!1,j=!1,T=ee(n),S=U(()=>q(()=>{var _=p(),m=b(T);return I?(I=!1,j=!0,m):(j=!1,T.v=_)}));return t||(S.equals=k),function(_,m){if(arguments.length>0){const L=m?b(S):o&&w?R(_):_;return S.equals(L)||(I=!0,P(T,L),c&&a!==void 0&&(a=L),F(()=>b(S))),_}return b(S)}}export{R as a,ce as l,oe as p,pe as s};
