import{l as e,E as i,y as c,X as p,Y as u,m as y,A as l}from"./CbkC5Icg.js";function m(r,s,...n){var t=r,f=p,o;e(()=>{f!==(f=s())&&(o&&(u(o),o=null),o=c(()=>f(t,...n)))},i),y&&(t=l)}function a(r){var s,n,t="";if(typeof r=="string"||typeof r=="number")t+=r;else if(typeof r=="object")if(Array.isArray(r)){var f=r.length;for(s=0;s<f;s++)r[s]&&(n=a(r[s]))&&(t&&(t+=" "),t+=n)}else for(n in r)r[n]&&(t&&(t+=" "),t+=n);return t}function g(){for(var r,s,n=0,t="",f=arguments.length;n<f;n++)(r=arguments[n])&&(s=a(r))&&(t&&(t+=" "),t+=s);return t}function b(r){return typeof r=="object"?g(r):r??""}export{b as c,m as s};
