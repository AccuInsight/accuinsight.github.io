(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{164:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return b}));var a=r(1),n=(r(0),r(369));const p={title:"agg"},c={id:"pipeline/workflow/workspace/data-processing-basic/agg",title:"agg",description:"### Definition\r",source:"@site/docs\\pipeline\\workflow\\workspace\\data-processing-basic\\agg.md",permalink:"/docs/pipeline/workflow/workspace/data-processing-basic/agg",sidebar:"pipeline",previous:{title:"cluster",permalink:"/docs/pipeline/workflow/workspace/data-sampling/cluster"},next:{title:"appendString",permalink:"/docs/pipeline/workflow/workspace/data-processing-basic/append-string"}},i=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],o={rightToc:i};function b({components:e,...t}){return Object(n.b)("wrapper",Object(a.a)({},o,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h3",{id:"definition"},"Definition"),Object(n.b)("p",null,"\uc9d1\uacc4\ud568\uc218\ub97c \uc218\ud589\ud560 \ub54c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.",Object(n.b)("br",{parentName:"p"}),"\n","\uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uae30\ubcf8)]","\uc5d0\uc11c ","[agg]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud569\ub2c8\ub2e4. "),Object(n.b)("h3",{id:"set"},"Set"),Object(n.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0]"," > ","[\uc0dd\uc131]"," > ","[\uae30\ubcf8\uad6c\uc131]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(n.b)("h4",{id:"property"},"Property"),Object(n.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825",Object(n.b)("br",{parentName:"p"}),"\n",Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/data-processing-basic/prebasic001_agg_property.png",alt:"prebasic001"}))),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"aggcol : \uadf8\ub8f9\ud551 \uae30\uc900 \uceec\ub7fc \uc120\ud0dd. \ub300\uc0c1 \uceec\ub7fc\uc774 \uc5ec\ub7ec \uac1c\uc77c \uacbd\uc6b0 \uc624\ub978\ucabd ","[+]","\ubc84\ud2bc \uc120\ud0dd ")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"target : \uc9d1\uacc4\uae30\uc900 \uceec\ub7fc \ubc0f \uc9d1\uacc4\ud568\uc218 \uc120\ud0dd "),Object(n.b)("table",{parentName:"li"},Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\uc9d1\uacc4\ud568\uc218 \uc885\ub958"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"max")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"min")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"avg")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"count")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"sum")))))),Object(n.b)("h3",{id:"example"},"Example"),Object(n.b)("p",null,"\uc0c1\ud488\uc815\ubcf4 \ub370\uc774\ud130\ub97c \ub300\uc0c1\uc73c\ub85c ","[agg]"," \ub178\ub4dc\uc758 max, count \ud568\uc218\ub97c \uc801\uc6a9\ud569\ub2c8\ub2e4.",Object(n.b)("br",{parentName:"p"}),"\n","1. ","[HDFS\ubd88\ub7ec\uc624\uae30]",", ","[dropna]",", ","[agg]"," \ub178\ub4dc\ub97c Designer\uc5d0 Drag & Drop\ud558\uc5ec \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131",Object(n.b)("br",{parentName:"p"}),"\n","",Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/data-processing-basic/prebasic002_agg_exampleworkflow.png",alt:"prebasic002"})),Object(n.b)("br",{parentName:"p"}),"\n",'2. 1.aggcol\uc5d0 category, group \uc785\ub825\ud558\uace0, 2.target\uc5d0 max="price", count="goods-id" \uc120\ud0dd',Object(n.b)("br",{parentName:"p"}),"\n","",Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/data-processing-basic/prebasic003_agg_exampleworkflow_property%EC%84%A4%EC%A0%95.png",alt:"prebasic003"})),Object(n.b)("br",{parentName:"p"}),"\n","3. ","[agg]"," \ub178\ub4dc\uc758 snapshot \ubc84\ud2bc\uc120\ud0dd\ud558\uc5ec \uacb0\uacfc\ud655\uc778",Object(n.b)("br",{parentName:"p"}),"\n","",Object(n.b)("img",Object(a.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/data-processing-basic/prebasic004_agg_exampleworkflow_%EC%8B%A4%ED%96%89%EA%B2%B0%EA%B3%BC.png",alt:"prebasic004"}))," "))}b.isMDXComponent=!0},369:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u}));var a=r(0),n=r.n(a);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),l=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},s=function(e){var t=l(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=l(r),m=a,u=s["".concat(c,".").concat(m)]||s[m]||g[m]||p;return r?n.a.createElement(u,i({ref:t},b,{components:r})):n.a.createElement(u,i({ref:t},b))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,c=new Array(p);c[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var b=2;b<p;b++)c[b]=r[b];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);