(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{308:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return b}));var a=r(2),n=(r(0),r(375));const c={title:"agg"},o={id:"batchpipeline/workflow/workspace/data-processing-basic/agg",isDocsHomePage:!1,title:"agg",description:"agg",source:"@site/docs/batchpipeline/workflow/workspace/data-processing-basic/agg.md",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-basic/agg",sidebar:"batchpipeline",previous:{title:"S3 \ubd88\ub7ec\uc624\uae30",permalink:"/docs/batchpipeline/workflow/workspace/import-data/s3"},next:{title:"appendString",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-basic/append-string"}},p=[{value:"agg",id:"agg",children:[]}],i={rightToc:p};function b({components:e,...t}){return Object(n.b)("wrapper",Object(a.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"agg"},"agg"),Object(n.b)("p",null,"\uc9d1\uacc4\ud568\uc218\ub97c \uc218\ud589\ud55c\ub2e4. \uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uae30\ubcf8)]","\ub178\ub4dc \uc911 ","[agg]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4 Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(n.b)("p",null,Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic001_agg_workflow.png",alt:"prebasic001"}))),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"aggcol : \uadf8\ub8f9\ud551 \uae30\uc900 \uceec\ub7fc\uc744 \uc120\ud0dd\ud55c\ub2e4. \ub300\uc0c1 \uceec\ub7fc\uc774 \uc5ec\ub7ec \uac1c\uc77c \uacbd\uc6b0 \uc624\ub978\ucabd ","[+]","\ubc84\ud2bc\uc744 \uc120\ud0dd\ud55c\ub2e4. ")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"target : \uc9d1\uacc4\uae30\uc900 \uceec\ub7fc \ubc0f \uc9d1\uacc4\ud568\uc218\ub97c \uc120\ud0dd\ud55c\ub2e4. "),Object(n.b)("table",{parentName:"li"},Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\uc9d1\uacc4\ud568\uc218 \uc885\ub958"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"max")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"min")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"avg")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"count")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"sum")))))),Object(n.b)("p",null,Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic002_agg_property.png",alt:"prebasic002"}))))}b.isMDXComponent=!0},375:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),l=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=l(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},g=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,b=i(e,["components","mdxType","originalType","parentName"]),s=l(r),g=a,m=s["".concat(o,".").concat(g)]||s[g]||u[g]||c;return r?n.a.createElement(m,p(p({ref:t},b),{},{components:r})):n.a.createElement(m,p({ref:t},b))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=g;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var b=2;b<c;b++)o[b]=r[b];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);