(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{168:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(1),a=r(6),c=(r(0),r(365)),i={title:"trim"},o={id:"batchpipeline/workflow/workspace/data-processing-basic/trim",title:"trim",description:"## trim\r",source:"@site/docs/batchpipeline/workflow/workspace/data-processing-basic/trim.md",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-basic/trim",sidebar:"batchpipeline",previous:{title:"topN",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-basic/top-n"},next:{title:"unionAll",permalink:"/docs/batchpipeline/workflow/workspace/data-processing-basic/union-all"}},p=[{value:"trim",id:"trim",children:[]}],l={rightToc:p};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"trim"},"trim"),Object(c.b)("p",null,"\ubb38\uc790\uc5f4 \uc55e\ub4a4\uc758 \uacf5\ubc31\uc744 \uc81c\uac70\ud55c\ub2e4. \uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uae30\ubcf8)]","\ub178\ub4dc \uc911 ","[trim]","\ub178\ub4dc\ub97c drag & drop \ud55c\ub2e4. "),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic045_trim_workflow.png",alt:"prebasic045"}))),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"col : \ubaa9\ub85d \uc911 \uacf5\ubc31\uc744 \uc81c\uac70\ud560 \uceec\ub7fc \uc120\ud0dd")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"how : trim \ubc29\ubc95\uc744 \uc120\ud0dd\ud55c\ub2e4. "),Object(c.b)("table",{parentName:"li"},Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"option"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\uc124\uba85"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"trim"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\uc591\ucabd \uacf5\ubc31\uc744 \uc81c\uac70\ud55c\ub2e4.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ltrim"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\uc67c\ucabd \uacf5\ubc31\uc744 \uc81c\uac70\ud55c\ub2e4.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"rtrim"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\uc624\ub978\ucabd \uacf5\ubc31\uc744 \uc81c\uac70\ud55c\ub2e4.")))))),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-basic/prebasic046_trim_property.png",alt:"prebasic046"}))))}b.isMDXComponent=!0},365:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},u=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=b(r),s=n,O=u["".concat(i,".").concat(s)]||u[s]||m[s]||c;return r?a.a.createElement(O,o({ref:t},l,{components:r})):a.a.createElement(O,o({ref:t},l))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<c;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);