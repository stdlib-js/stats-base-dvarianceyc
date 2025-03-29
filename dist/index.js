"use strict";var q=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var y=q(function(C,p){
function E(r,e,v,a,f){var n,u,t,s,c,o,i;if(o=r-e,r<=0||o<=0)return NaN;if(r===1||a===0)return 0;for(n=v[f],u=f+a,t=0,i=2;i<=r;i++)s=v[u],n+=s,c=i*s-n,t+=1/(i*(i-1))*c*c,u+=a;return t/o}p.exports=E
});var x=q(function(D,m){
var O=require('@stdlib/strided-base-stride2offset/dist'),S=y();function b(r,e,v,a){return S(r,e,v,a,O(r,a))}m.exports=b
});var R=q(function(F,l){
var g=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=x(),h=y();g(j,"ndarray",h);l.exports=j
});var k=require("path").join,w=require('@stdlib/utils-try-require/dist'),z=require('@stdlib/assert-is-error/dist'),A=R(),d,_=w(k(__dirname,"./native.js"));z(_)?d=A:d=_;module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
