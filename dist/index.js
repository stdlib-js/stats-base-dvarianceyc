"use strict";var q=function(r,i){return function(){return i||r((i={exports:{}}).exports,i),i.exports}};var p=q(function(A,m){
function _(r,i,f,v){var s,a,n,u,t,c,e;if(c=r-i,r<=0||c<=0)return NaN;if(r===1||v===0)return 0;for(v<0?a=(1-r)*v:a=0,s=f[a],a+=v,n=0,e=2;e<=r;e++)u=f[a],s+=u,t=e*u-s,n+=1/(e*(e-1))*t*t,a+=v;return n/c}m.exports=_
});var x=q(function(B,d){
function E(r,i,f,v,s){var a,n,u,t,c,e,o;if(e=r-i,r<=0||e<=0)return NaN;if(r===1||v===0)return 0;for(a=f[s],n=s+v,u=0,o=2;o<=r;o++)t=f[n],a+=t,c=o*t-a,u+=1/(o*(o-1))*c*c,n+=v;return u/e}d.exports=E
});var R=q(function(C,l){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=p(),b=x();O(j,"ndarray",b);l.exports=j
});var g=require("path").join,h=require('@stdlib/utils-try-require/dist'),k=require('@stdlib/assert-is-error/dist'),w=R(),y,S=h(g(__dirname,"./native.js"));k(S)?y=w:y=S;module.exports=y;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
