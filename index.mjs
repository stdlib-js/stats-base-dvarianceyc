// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@v0.1.0-esm/index.mjs";function t(r,e,t,n,s){var d,i,a,o,f,m,u;if(m=r-e,r<=0||m<=0)return NaN;if(1===r||0===n)return 0;for(d=t[s],i=s+n,a=0,u=2;u<=r;u++)a+=1/(u*(u-1))*(f=u*(o=t[i])-(d+=o))*f,i+=n;return a/m}function n(r,n,s,d){return t(r,n,s,d,e(r,d))}r(n,"ndarray",t);export{n as default,t as ndarray};
//# sourceMappingURL=index.mjs.map
