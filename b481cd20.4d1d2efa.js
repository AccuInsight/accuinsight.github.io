(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{303:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return l}));var a=n(1),r=(n(0),n(369));const c={title:"dataJoin"},o={id:"batchpipeline/workflow/workspace/data-processing-basic/data-join",title:"dataJoin",description:"## dataJoin\r",source:"@site/docs\\batchpipeline\\workflow\\workspace\\data-processing-basic\\data-join.md",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-basic/data-join",sidebar:"batchpipeline",previous:{title:"crosstab",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-basic/crosstab"},next:{title:"distinct",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-basic/distinct"}},i=[{value:"dataJoin",id:"datajoin",children:[]}],b={rightToc:i};function l({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"datajoin"},"dataJoin"),Object(r.b)("p",null,"2\uac1c\uc758 \ub178\ub4dc\ub85c\ubd80\ud130 \ub370\uc774\ud130\ub97c Join\ud55c\ub2e4. \uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uae30\ubcf8)]","\ub178\ub4dc \uc911 ","[dataJoin]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic010_datajoin_workflow.png",alt:"prebasic010"}))),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"col1 : \uccab \ubc88\uc9f8 \ub178\ub4dc \uae30\uc900 \uceec\ub7fc\uc744 \uc120\ud0dd\ud55c\ub2e4. "),Object(r.b)("li",{parentName:"ol"},"col2 : \ub450 \ubc88\uc9f8 \ub178\ub4dc \uae30\uc900 \uceec\ub7fc\uc744 \uc120\ud0dd\ud55c\ub2e4.  "),Object(r.b)("li",{parentName:"ol"},"how : join \uc720\ud615\uc744 \uc120\ud0dd\ud55c\ub2e4. ")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic011_datajoin_property.png",alt:"prebasic011"}))),Object(r.b)("p",null,"\uc120\ud0dd\ud560 \uc218 \uc788\ub294 join \uc720\ud615\uc740 \ub2e4\uc74c\uacfc \uac19\ub2e4. "),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"join\uc720\ud615"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\uc124\uba85"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"inner"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\uc870\uc778 \uc870\uac74\uc5d0 \ub9de\ub294 \ud589\ub9cc \uac80\uc0c9")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"outer"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\uc870\uc778 \ud0a4\uc5d0 \ub300\uc751\ub418\ub294 row\uac00 \uc5c6\ub294 \uacbd\uc6b0 null\ub85c \ucd94\ucd9c")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"left_outer"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"col1\uc5d0\uc11c \uc120\ud0dd\ud55c \uc870\uc778 \ud0a4\uc5d0 \ub300\uc751\ub418\ub294 row\uac00 \uc5c6\ub294 \uacbd\uc6b0 null\ub85c \ucd94\ucd9c")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"right_outer"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"col2\uc5d0\uc11c \uc120\ud0dd\ud55c \uc870\uc778 \ud0a4\uc5d0 \ub300\uc751\ub418\ub294 row\uac00 \uc5c6\ub294 \uacbd\uc6b0 null\ub85c \ucd94\ucd9c")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"left_semi"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\uc791\uc131\ud544\uc694")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"left_anti"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\uc791\uc131\ud544\uc694")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"cross"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\ub450 \ub178\ub4dc\uc758 \uce74\ud2f0\uc158 \ud504\ub85c\ub355\ud2b8(\uacf1\uc9d1\ud569)\uacb0\uacfc\ub97c \ucd94\ucd9c")))))}l.isMDXComponent=!0},369:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,l=b(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,O=u["".concat(o,".").concat(d)]||u[d]||s[d]||c;return n?r.a.createElement(O,i({ref:t},l,{components:n})):r.a.createElement(O,i({ref:t},l))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);