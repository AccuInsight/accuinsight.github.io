(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{181:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return m}));var n=r(1),a=r(9),i=(r(0),r(399)),o={title:"timeMove"},p={id:"pipeline/workflow/workspace/data-processing-advanced/time-move",title:"timeMove",description:"### Definition",source:"@site/docs/pipeline/workflow/workspace/data-processing-advanced/time-move.md",permalink:"/docs/pipeline/workflow/workspace/data-processing-advanced/time-move",sidebar:"pipeline",previous:{title:"SQL",permalink:"/docs/pipeline/workflow/workspace/data-processing-advanced/sql"},next:{title:"missingImputer",permalink:"/docs/pipeline/workflow/workspace/feature-engineering/missingImputer"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:c};function m(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"definition"},"Definition"),Object(i.b)("p",null,"timestamp \uceec\ub7fc\uc758 \uc2dc\uac04\uc744 \uc124\uc815\ub41c \uac12\ub9cc\ud07c \uc774\ub3d9\ud569\ub2c8\ub2e4. \uc88c\uce21 ","[\ub370\uc774\ud130\ucc98\ub9ac(\uace0\uae09)]","\ub178\ub4dc \uc911 ","[timeMove]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud569\ub2c8\ub2e4."),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/data-processing-advanced/timeMove.png",alt:"timeMove"}))),Object(i.b)("h3",{id:"set"},"Set"),Object(i.b)("p",null,"[setting]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(i.b)("h4",{id:"property"},"property"),Object(i.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/data-processing-advanced/preadv025_timemove_property.png",alt:"preadv025"}))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"targetColumn\t: \ubaa9\ub85d \uc911 \uae30\uc900 \uceec\ub7fc \uc120\ud0dd(\uc120\ud0dd \uceec\ub7fc\uc740 timestamp data type\uc774\uc5b4\uc57c \ud568)"),Object(i.b)("li",{parentName:"ol"},"newColumn : \uc2e0\uaddc \uceec\ub7fc \uba85"),Object(i.b)("li",{parentName:"ol"},"time\t: \uc774\ub3d9\ud560 \uc2dc\uac04(ex. 3600(1\uc2dc\uac04 \ud6c4), -3600(1\uc2dc\uac04 \uc804)")),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("p",null,"timestamp \ud3ec\ub9f7\uc744 String\uc73c\ub85c \ubcc0\ud658\ud558\ub294 \uc6cc\ud06c\ud50c\ub85c\uc6b0\ub97c \uad6c\uc131\ud569\ub2c8\ub2e4.  "),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"[HDFS\ubd88\ub7ec\uc624\uae30]",", ","[timeMove]"," \ub178\ub4dc\ub97c Designer\uc5d0 Drag & Drop\ud558\uc5ec \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131",Object(i.b)("br",{parentName:"li"}),Object(i.b)("img",Object(n.a)({parentName:"li"},{src:"/img/pipeline/workflow/workspace/data-processing-advanced/addTimestamp.png",alt:"timeMove"}))),Object(i.b)("li",{parentName:"ol"},"[convertDate]","\ub178\ub4dc\uc5d0 \uc544\ub798\uc640 \uac19\uc774 \uc785\ub825 \ud6c4 snapshot \ud074\ub9ad",Object(i.b)("br",{parentName:"li"}),Object(i.b)("img",Object(n.a)({parentName:"li"},{src:"/img/pipeline/workflow/workspace/data-processing-advanced/addTimestamp_example.png",alt:"timeMove"})))))}m.isMDXComponent=!0},399:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return u}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),m=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p({},t,{},e)),r},s=function(e){var t=m(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=m(r),d=n,u=s["".concat(o,".").concat(d)]||s[d]||b[d]||i;return r?a.a.createElement(u,p({ref:t},l,{components:r})):a.a.createElement(u,p({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);