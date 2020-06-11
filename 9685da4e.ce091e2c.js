(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{242:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(6),i=(r(0),r(369)),o={title:"HIVE \ubd88\ub7ec\uc624\uae30"},p={id:"pipeline/workflow/workspace/import-data/hive",title:"HIVE \ubd88\ub7ec\uc624\uae30",description:"### Definition  ",source:"@site/docs/pipeline/workflow/workspace/import-data/hive.md",permalink:"/docs/pipeline/workflow/workspace/import-data/hive",sidebar:"pipeline",previous:{title:"HDFS \ubd88\ub7ec\uc624\uae30",permalink:"/docs/pipeline/workflow/workspace/import-data/hdfs"},next:{title:"HTTP \ubd88\ub7ec\uc624\uae30",permalink:"/docs/pipeline/workflow/workspace/import-data/http"}},l=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Property",id:"property",children:[]}],c={rightToc:l};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"definition"},"Definition"),Object(i.b)("p",null,"HIVE\uc5d0 \uc800\uc7a5\ub41c \ub370\uc774\ud130\ub97c Pipeline\uc73c\ub85c \ubd88\ub7ec\uc624\uae30 \uc704\ud574 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.",Object(i.b)("br",{parentName:"p"}),"\n","\uc88c\uce21 ","[\ub370\uc774\ud130\ubd88\ub7ec\uc624\uae30]","\ub178\ub4dc \uc911 ","[S3\ubd88\ub7ec\uc624\uae30]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud569\ub2c8\ub2e4.\nProperty \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4 Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/import-data/impdata022_hive_main%ED%99%94%EB%A9%B4.png",alt:"impdata022"}))),Object(i.b)("h3",{id:"set"},"Set"),Object(i.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0]"," > ","[\uc0dd\uc131]"," > ","[\uae30\ubcf8\uad6c\uc131]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(i.b)("h3",{id:"property"},"Property"),Object(i.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/import-data/impdata023_hive_property.png",alt:"impdata023"}))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"table : Hive \ud14c\uc774\ube14\uba85 \uc120\ud0dd"),Object(i.b)("li",{parentName:"ol"},"option : \uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc635\uc158\uc124\uc815(\ud5e4\ub354\uc720\ubb34, nanValue, nullValue) \uc124\uc815 ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"key: header, value : true/False = \ud5e4\ub354 \uc124\uc815 \uc5ec\ubd80(True : \ud5e4\ub354\uc124\uc815, False : \ud5e4\ub354\ubbf8\uc124\uc815) "),Object(i.b)("li",{parentName:"ul"},"key: nullValue, value : \uc785\ub825\uac12(ex:NULL) = \ub370\uc774\ud130\uc5d0 \ud3ec\ud568\ub41c \uc785\ub825\uac12(NULL)\uc744 Null\ubb38\uc790\uc5f4 \ucc98\ub9ac"),Object(i.b)("li",{parentName:"ul"},"key: nanValue, value : \uc785\ub825\uac12(ex:NaN) = \ub370\uc774\ud130\uc5d0 \ud3ec\ud568\ub41c \uc785\ub825\uac12(NaN)\uc744 NaN\ubb38\uc790\uc5f4 \ucc98\ub9ac "))),Object(i.b)("li",{parentName:"ol"},"schema : column \ubc0f dataType \uc815\uc758(\uc6b0\uce21 ","[\uc790\ub3d9\ud30c\uc2f1]",", ","[\ucd94\uac00]","\ubc84\ud2bc \ud65c\uc6a9. \ud30c\uc2f1\uc744 \uc644\ub8cc\ud574\uc57c \uc774\ud6c4 \uc5f0\uacb0\ud560 \ub178\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\uac00\ub2a5)",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"[\uc790\ub3d9\ud30c\uc2f1]"," : \ubd88\ub7ec\uc62c \ub370\uc774\ud130 \uc720\ud615(\uc22b\uc790\ud615, \ubb38\uc790\ud615)\uc5d0 \ub9de\uac8c pipeline\uc5d0\uc11c \uc790\ub3d9 \ud30c\uc2f1. \uc0ac\uc6a9\uc790\uac00 dataType \ubcc0\uacbd \uac00\ub2a5"),Object(i.b)("li",{parentName:"ul"},"[\ucd94\uac00]"," : \uc0ac\uc6a9\uc790\uac00 \ub370\uc774\ud130 column, dataType\uc744 \uc9c1\uc811 \ud30c\uc2f1. schema \uc0c1\uc138\ud65c\uc6a9\ubc95\uc740 ","[HDFS\ubd88\ub7ec\uc624\uae30]"," \ucc38\uace0")))))}u.isMDXComponent=!0},369:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p({},t,{},e)),r},b=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,f=b["".concat(o,".").concat(d)]||b[d]||m[d]||i;return r?a.a.createElement(f,p({ref:t},c,{components:r})):a.a.createElement(f,p({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);