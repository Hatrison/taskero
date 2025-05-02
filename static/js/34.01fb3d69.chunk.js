"use strict";(self.webpackChunktaskero=self.webpackChunktaskero||[]).push([[34],{34:(e,n,t)=>{t.r(n),t.d(n,{default:()=>P});var r=t(43),o=t(369);var i=t(394),a=t(562);function s(e,n){return(0,o.A)(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,i,a,s=[],c=!0,u=!1;try{if(i=(t=t.call(e)).next,0===n){if(Object(t)!==t)return;c=!1}else for(;!(c=(r=i.call(t)).done)&&(s.push(r.value),s.length!==n);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=t.return&&(a=t.return(),Object(a)!==a))return}finally{if(u)throw o}}return s}}(e,n)||(0,i.A)(e,n)||(0,a.A)()}var c=t(467),u=t(75);function l(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"===typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var d={};function f(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"===typeof n[0]&&d[n[0]]||("string"===typeof n[0]&&(d[n[0]]=new Date),l.apply(void 0,n))}function g(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function h(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){(0,c.A)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function v(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,o=(0,r.useContext)(u.gJ)||{},i=o.i18n,a=o.defaultNS,c=t||i||(0,u.TO)();if(c&&!c.reportNamespaces&&(c.reportNamespaces=new u.hz),!c){f("You will need to pass in an i18next instance by using initReactI18next");var l=function(e){return Array.isArray(e)?e[e.length-1]:e},d=[l,{},!1];return d.t=l,d.i18n={},d.ready=!1,d}c.options.react&&void 0!==c.options.react.wait&&f("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var p=h(h(h({},(0,u.rV)()),c.options.react),n),v=p.useSuspense,b=p.keyPrefix,y=e||a||c.options&&c.options.defaultNS;y="string"===typeof y?[y]:y||["translation"],c.reportNamespaces.addUsedNamespaces&&c.reportNamespaces.addUsedNamespaces(y);var m=(c.isInitialized||c.initializedStoreOnce)&&y.every((function(e){return function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return n.languages&&n.languages.length?void 0!==n.options.ignoreJSONStructure?n.hasLoadedNamespace(e,{precheck:function(n,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!r(n.isLanguageChangingTo,e))return!1}}):function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.languages[0],o=!!n.options&&n.options.fallbackLng,i=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!a(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||!(n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages))||!(!a(r,e)||o&&!a(i,e)))}(e,n,t):(f("i18n.languages were undefined or empty",n.languages),!0)}(e,c,p)}));function w(){return c.getFixedT(null,"fallback"===p.nsMode?y:y[0],b)}var k=s((0,r.useState)(w),2),x=k[0],j=k[1],O=y.join(),C=function(e,n){var t=(0,r.useRef)();return(0,r.useEffect)((function(){t.current=n?t.current:e}),[e,n]),t.current}(O),L=(0,r.useRef)(!0);(0,r.useEffect)((function(){var e=p.bindI18n,n=p.bindI18nStore;function t(){L.current&&j(w)}return L.current=!0,m||v||g(c,y,(function(){L.current&&j(w)})),m&&C&&C!==O&&L.current&&j(w),e&&c&&c.on(e,t),n&&c&&c.store.on(n,t),function(){L.current=!1,e&&c&&e.split(" ").forEach((function(e){return c.off(e,t)})),n&&c&&n.split(" ").forEach((function(e){return c.store.off(e,t)}))}}),[c,O]);var E=(0,r.useRef)(!0);(0,r.useEffect)((function(){L.current&&!E.current&&j(w),E.current=!1}),[c,b]);var S=[x,c,m];if(S.t=x,S.i18n=c,S.ready=m,m)return S;if(!m&&!v)return S;throw new Promise((function(e){g(c,y,(function(){e()}))}))}var b,y,m=t(950),w=t(464);function k(){return k=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)({}).hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},k.apply(null,arguments)}function x(e,n){let{title:t,titleId:o,...i}=e;return r.createElement("svg",k({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:n,"aria-labelledby":o},i),t?r.createElement("title",{id:o},t):null,b||(b=r.createElement("path",{d:"M18 6L6 18",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),y||(y=r.createElement("path",{d:"M6 6L18 18",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const j=r.forwardRef(x),O=(t.p,w.Ay.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`),C=w.Ay.div`
  position: relative;
  min-width: 200px;
  min-height: 200px;
  padding: 35px;
  background-color: ${e=>{let{theme:n}=e;return n.background}};
  border: ${e=>{let{theme:n}=e;return n.modalBorder}};
  border-radius: 8px;

  box-shadow: ${e=>{let{theme:n}=e;return n.shadow}};
`,L=w.Ay.button`
  padding: 0;
  position: absolute;
  width: 24px;
  height: 24px;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;

  &:hover svg {
    stroke: ${e=>{let{theme:n}=e;return n.modalCloseIconColorHover}};
    scale: 1.1;
  }
`,E=(0,w.Ay)(j)`
  stroke: ${e=>{let{theme:n}=e;return n.modalCloseIconColor}};
  width: 24px;
  height: 24px;
  transition: stroke 250ms linear 0s, scale 250ms linear 0s;
`;var S=t(579);const I=document.querySelector("#modal-root"),A=e=>{let{children:n,handlerCloseModal:t}=e;const o=(0,r.useCallback)((e=>{"Escape"===e.code&&t()}),[t]);(0,r.useEffect)((()=>(window.addEventListener("keydown",o),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",o),document.body.style.overflow="auto"})),[o]);return(0,m.createPortal)((0,S.jsx)(O,{onClick:e=>{e.currentTarget===e.target&&t()},children:(0,S.jsxs)(C,{children:[(0,S.jsx)(L,{onClick:t,children:(0,S.jsx)(E,{})}),n]})}),I)},P=()=>{const{t:e}=v(),[n,t]=(0,r.useState)(!1),o=()=>{t((e=>!e))};return(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)("button",{type:"button",onClick:()=>o(),children:"Click here to open modal"}),n&&(0,S.jsx)(A,{handlerCloseModal:o,children:(0,S.jsx)("h1",{children:e("welcome")})})]})}}}]);
//# sourceMappingURL=34.01fb3d69.chunk.js.map