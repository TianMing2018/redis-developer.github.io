(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return d})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),u=(n(0),n(202)),i=(n(203),{id:"index-introductiontomodules",title:"Introduction to Redis Modules",sidebar_label:"Introduction to Modules",slug:"/develop/node/nodecrashcourse/introductiontomodules"}),c={unversionedId:"develop/node/node-crash-course/introductiontomodules/index-introductiontomodules",id:"develop/node/node-crash-course/introductiontomodules/index-introductiontomodules",isDocsHomePage:!1,title:"Introduction to Redis Modules",description:"TODO content.",source:"@site/docs/develop/node/node-crash-course/introductiontomodules/index-introductiontomodules.mdx",slug:"/develop/node/nodecrashcourse/introductiontomodules",permalink:"/develop/node/nodecrashcourse/introductiontomodules",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/node/node-crash-course/introductiontomodules/index-introductiontomodules.mdx",version:"current",sidebar_label:"Introduction to Modules"},d=[{value:"TODO Subheader",id:"todo-subheader",children:[{value:"TODO Another Subheader",id:"todo-another-subheader",children:[]},{value:"Further References",id:"further-references",children:[]}]}],a={toc:d};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(u.b)("wrapper",Object(r.a)({},a,n,{components:t,mdxType:"MDXLayout"}),Object(u.b)("p",null,"TODO content."),Object(u.b)("h2",{id:"todo-subheader"},"TODO Subheader"),Object(u.b)("p",null,"TODO content."),Object(u.b)("h3",{id:"todo-another-subheader"},"TODO Another Subheader"),Object(u.b)("p",null,"TODO content."),Object(u.b)("h3",{id:"further-references"},"Further References"),Object(u.b)("p",null,"TODO content."))}s.isMDXComponent=!0},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=o.a.createContext({}),s=function(e){var t=o.a.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=s(e.components);return o.a.createElement(a.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,u=e.originalType,i=e.parentName,a=d(e,["components","mdxType","originalType","parentName"]),l=s(n),p=r,b=l["".concat(i,".").concat(p)]||l[p]||f[p]||u;return n?o.a.createElement(b,c(c({ref:t},a),{},{components:n})):o.a.createElement(b,c({ref:t},a))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=n.length,i=new Array(u);i[0]=p;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var a=2;a<u;a++)i[a]=n[a];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},203:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return i}));var r=n(21),o=n(211);function u(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,u=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var u=void 0===r?{}:r,i=u.forcePrependBaseUrl,c=void 0!==i&&i,d=u.absolute,a=void 0!==d&&d;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var s=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+s:s}(u,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,u().withBaseUrl)(e,t)}},211:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))}}]);