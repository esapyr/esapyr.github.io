import{am as Q,b as ie,g as L,h as b,o as fe,C as te,d as ne,O as F,P as le,H as ue,e as G,i as O,m as x,w as ce,j as W,k as Z,l as oe,aw as M,A as j,F as P,ax as R,ay as J,az as S,ag as ve,_ as K,aA as m,a4 as _e,aB as de,aC as he,z as pe,aD as Ae,J as ye,aE as ge,u as Ee,aF as Ne,a3 as be,aG as Te}from"./C3Vr-0DY.js";import{c as Ie,d as we,e as Ce,n as ke,f as xe}from"./DoAtjioO.js";function Oe(e,a){if(a){const r=document.body;e.autofocus=!0,Q(()=>{document.activeElement===r&&e.focus()})}}function Ye(e,a){return a}function De(e,a,r,s){for(var f=[],o=a.length,h=0;h<o;h++)he(a[h].e,f,!0);var A=o>0&&f.length===0&&r!==null;if(A){var p=r.parentNode;pe(p),p.append(r),s.clear(),w(e,a[0].prev,a[o-1].next)}Ae(f,()=>{for(var y=0;y<o;y++){var d=a[y];A||(s.delete(d.k),w(e,d.prev,d.next)),ye(d.e,!A)}})}function qe(e,a,r,s,f,o=null){var h=e,A={items:new Map,first:null},p=(a&m)!==0;if(p){var y=e;h=b?L(fe(y)):y.appendChild(te())}b&&ne();var d=null,I=!1,u=le(()=>{var _=r();return _e(_)?_:_==null?[]:j(_)});ie(()=>{var _=F(u),t=_.length;if(I&&t===0)return;I=t===0;let E=!1;if(b){var v=h.data===ue;v!==(t===0)&&(h=G(),L(h),O(!1),E=!0)}if(b){for(var g=null,c,n=0;n<t;n++){if(x.nodeType===8&&x.data===ce){h=x,E=!0,O(!1);break}var i=_[n],l=s(i,n);c=ee(x,A,g,null,i,l,n,f,a,r),A.items.set(l,c),g=c}t>0&&L(G())}b||He(_,A,h,f,a,s,r),o!==null&&(t===0?d?W(d):d=Z(()=>o(h)):d!==null&&oe(d,()=>{d=null})),E&&O(!0),F(u)}),b&&(h=x)}function He(e,a,r,s,f,o,h){var V,B,z,Y;var A=(f&de)!==0,p=(f&(R|S))!==0,y=e.length,d=a.items,I=a.first,u=I,_,t=null,E,v=[],g=[],c,n,i,l;if(A)for(l=0;l<y;l+=1)c=e[l],n=o(c,l),i=d.get(n),i!==void 0&&((V=i.a)==null||V.measure(),(E??(E=new Set)).add(i));for(l=0;l<y;l+=1){if(c=e[l],n=o(c,l),i=d.get(n),i===void 0){var N=u?u.e.nodes_start:r;t=ee(N,a,t,t===null?a.first:t.next,c,n,l,s,f,h),d.set(n,t),v=[],g=[],u=t.next;continue}if(p&&Le(i,c,l,f),i.e.f&M&&(W(i.e),A&&((B=i.a)==null||B.unfix(),(E??(E=new Set)).delete(i))),i!==u){if(_!==void 0&&_.has(i)){if(v.length<g.length){var C=g[0],T;t=C.prev;var $=v[0],D=v[v.length-1];for(T=0;T<v.length;T+=1)U(v[T],C,r);for(T=0;T<g.length;T+=1)_.delete(g[T]);w(a,$.prev,D.next),w(a,t,$),w(a,D,C),u=C,t=D,l-=1,v=[],g=[]}else _.delete(i),U(i,u,r),w(a,i.prev,i.next),w(a,i,t===null?a.first:t.next),w(a,t,i),t=i;continue}for(v=[],g=[];u!==null&&u.k!==n;)u.e.f&M||(_??(_=new Set)).add(u),g.push(u),u=u.next;if(u===null)continue;i=u}v.push(i),t=i,u=i.next}if(u!==null||_!==void 0){for(var k=_===void 0?[]:j(_);u!==null;)u.e.f&M||k.push(u),u=u.next;var H=k.length;if(H>0){var se=f&m&&y===0?r:null;if(A){for(l=0;l<H;l+=1)(z=k[l].a)==null||z.measure();for(l=0;l<H;l+=1)(Y=k[l].a)==null||Y.fix()}De(a,k,se,d)}}A&&Q(()=>{var q;if(E!==void 0)for(i of E)(q=i.a)==null||q.apply()}),P.first=a.first&&a.first.e,P.last=t&&t.e}function Le(e,a,r,s){s&R&&J(e.v,a),s&S?J(e.i,r):e.i=r}function ee(e,a,r,s,f,o,h,A,p,y){var d=(p&R)!==0,I=(p&ge)===0,u=d?I?ve(f):K(f):f,_=p&S?K(h):h,t={i:_,v:u,k:o,a:null,e:null,prev:r,next:s};try{return t.e=Z(()=>A(e,u,_,y),b),t.e.prev=r&&r.e,t.e.next=s&&s.e,r===null?a.first=t:(r.next=t,r.e.next=t.e),s!==null&&(s.prev=t,s.e.prev=t.e),t}finally{}}function U(e,a,r){for(var s=e.next?e.next.e.nodes_start:r,f=a?a.e.nodes_start:r,o=e.e.nodes_start;o!==s;){var h=Ee(o);f.before(o),o=h}}function w(e,a,r){a===null?e.first=r:(a.next=r,a.e.next=r&&r.e),r!==null&&(r.prev=a,r.e.prev=a&&a.e)}function ae(e){var a,r,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var f=e.length;for(a=0;a<f;a++)e[a]&&(r=ae(e[a]))&&(s&&(s+=" "),s+=r)}else for(r in e)e[r]&&(s&&(s+=" "),s+=r);return s}function Me(){for(var e,a,r=0,s="",f=arguments.length;r<f;r++)(e=arguments[r])&&(a=ae(e))&&(s&&(s+=" "),s+=a);return s}function Re(e){return typeof e=="object"?Me(e):e??""}function Se(e,a){a?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function $e(e,a,r,s){var f=e.__attributes??(e.__attributes={});b&&(f[a]=e.getAttribute(a),a==="src"||a==="srcset"||a==="href"&&e.nodeName==="LINK")||f[a]!==(f[a]=r)&&(a==="style"&&"__styles"in e&&(e.__styles={}),a==="loading"&&(e[Ne]=r),r==null?e.removeAttribute(a):typeof r!="string"&&re(e).includes(a)?e[a]=r:e.setAttribute(a,r))}function Fe(e,a,r,s,f=!1,o=!1,h=!1){let A=b&&o;A&&O(!1);var p=a||{},y=e.tagName==="OPTION";for(var d in a)d in r||(r[d]=null);r.class&&(r.class=Re(r.class));var I=re(e),u=e.__attributes??(e.__attributes={});for(const c in r){let n=r[c];if(y&&c==="value"&&n==null){e.value=e.__value="",p[c]=n;continue}var _=p[c];if(n!==_){p[c]=n;var t=c[0]+c[1];if(t!=="$$"){if(t==="on"){const i={},l="$$"+c;let N=c.slice(2);var E=xe(N);if(Ie(N)&&(N=N.slice(0,-7),i.capture=!0),!E&&_){if(n!=null)continue;e.removeEventListener(N,p[l],i),p[l]=null}if(n!=null)if(E)e[`__${N}`]=n,Ce([N]);else{let C=function(T){p[c].call(this,T)};p[l]=we(N,e,C,i)}else E&&(e[`__${N}`]=void 0)}else if(c==="style"&&n!=null)e.style.cssText=n+"";else if(c==="autofocus")Oe(e,!!n);else if(!o&&(c==="__value"||c==="value"&&n!=null))e.value=e.__value=n;else if(c==="selected"&&y)Se(e,n);else{var v=c;f||(v=ke(v));var g=v==="defaultValue"||v==="defaultChecked";if(n==null&&!o&&!g)if(u[c]=null,v==="value"||v==="checked"){let i=e;if(v==="value"){let l=i.defaultValue;i.removeAttribute(v),i.defaultValue=l}else{let l=i.defaultChecked;i.removeAttribute(v),i.defaultChecked=l}}else e.removeAttribute(c);else g||I.includes(v)&&(o||typeof n!="string")?e[v]=n:typeof n!="function"&&$e(e,v,n)}c==="style"&&"__styles"in e&&(e.__styles={})}}}return A&&O(!0),p}var X=new Map;function re(e){var a=X.get(e.nodeName);if(a)return a;X.set(e.nodeName,a=[]);for(var r,s=e,f=Element.prototype;f!==s;){r=Te(s);for(var o in r)r[o].set&&a.push(o);s=be(s)}return a}function Ge(e,a,r){var s=e.__className,f=Ve(a);b&&e.className===f?e.__className=f:(s!==f||b&&e.className!==f)&&(a==null?e.removeAttribute("class"):e.className=f,e.__className=f)}function Ve(e,a){return(e??"")+""}export{Ge as a,Fe as b,Re as c,qe as e,Ye as i,$e as s};
