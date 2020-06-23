(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{225:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(1),a=r(6),o=(r(0),r(365)),i={title:"Alluxio \ubd88\ub7ec\uc624\uae30"},l={id:"pipeline/workflow/workspace/import-data/alluxio",title:"Alluxio \ubd88\ub7ec\uc624\uae30",description:"### Definition",source:"@site/docs/pipeline/workflow/workspace/import-data/alluxio.md",permalink:"/docs/pipeline/workflow/workspace/import-data/alluxio",sidebar:"pipeline",previous:{title:"Property",permalink:"/docs/pipeline/workflow/workspace/configuration/property"},next:{title:"HDFS \ubd88\ub7ec\uc624\uae30",permalink:"/docs/pipeline/workflow/workspace/import-data/hdfs"}},p=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Property",id:"property",children:[]}],c={rightToc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"definition"},"Definition"),Object(o.b)("p",null,"Alluxio\uc5d0 \uc800\uc7a5\ub41c \ub370\uc774\ud130\ub97c Pipeline\uc73c\ub85c \ubd88\ub7ec\uc624\uae30 \uc704\ud574 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.",Object(o.b)("br",{parentName:"p"}),"\n","\uc88c\uce21 ","[\ub370\uc774\ud130\ubd88\ub7ec\uc624\uae30]","\ub178\ub4dc \uc911 ","[Alluxio\ubd88\ub7ec\uc624\uae30]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud569\ub2c8\ub2e4.\nProperty \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4 Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/import-data/impdata001_alluxio_main%ED%99%94%EB%A9%B4.png",alt:"impdata001"}))," "),Object(o.b)("h3",{id:"set"},"Set"),Object(o.b)("p",null,"[setting]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0]"," > ","[\uc0dd\uc131]"," > ","[\uae30\ubcf8\uad6c\uc131]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(o.b)("h3",{id:"property"},"Property"),Object(o.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825",Object(o.b)("br",{parentName:"p"}),"\n",Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/import-data/impdata002_alluxio_property.png",alt:"impdata002"}))," "),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"file : \ubd88\ub7ec\uc62c Alluxio \ud30c\uc77c \uacbd\ub85c \uc785\ub825  "),Object(o.b)("li",{parentName:"ol"},"format : \ubd88\ub7ec\uc62c \ud30c\uc77c\uc758 \ud615\uc2dd \uc120\ud0dd(csv, json \uc911 \ud0dd1)  "),Object(o.b)("li",{parentName:"ol"},"delimiter : \uad6c\ubd84\uc790 \uc785\ub825  "),Object(o.b)("li",{parentName:"ol"},"option : \uc0ac\uc6a9 \uac00\ub2a5\ud55c \uc635\uc158(\ud5e4\ub354\uc720\ubb34, nanValue, nullValue) \uc124\uc815 ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"key: header, value : true/False = \ud5e4\ub354 \uc124\uc815 \uc5ec\ubd80(True : \ud5e4\ub354\uc124\uc815, False : \ud5e4\ub354\ubbf8\uc124\uc815) "),Object(o.b)("li",{parentName:"ul"},"key: nullValue, value : \uc785\ub825\uac12(ex:NULL) = \ub370\uc774\ud130\uc5d0 \ud3ec\ud568\ub41c \uc785\ub825\uac12(NULL)\uc744 Null\ubb38\uc790\uc5f4 \ucc98\ub9ac"),Object(o.b)("li",{parentName:"ul"},"key: nanValue, value : \uc785\ub825\uac12(ex:NaN) = \ub370\uc774\ud130\uc5d0 \ud3ec\ud568\ub41c \uc785\ub825\uac12(NaN)\uc744 NaN\ubb38\uc790\uc5f4 \ucc98\ub9ac "))),Object(o.b)("li",{parentName:"ol"},"schema : column \ubc0f dataType \uc815\uc758(\uc6b0\uce21 ","[\uc790\ub3d9\ud30c\uc2f1]",", ","[\ucd94\uac00]","\ubc84\ud2bc \ud65c\uc6a9. \ud30c\uc2f1\uc744 \uc644\ub8cc\ud574\uc57c \uc774\ud6c4 \uc5f0\uacb0\ud560 \ub178\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\uac00\ub2a5)",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"[\uc790\ub3d9\ud30c\uc2f1]"," : \ubd88\ub7ec\uc62c \ub370\uc774\ud130 \uc720\ud615(\uc22b\uc790\ud615, \ubb38\uc790\ud615)\uc5d0 \ub9de\uac8c pipeline\uc5d0\uc11c \uc790\ub3d9 \ud30c\uc2f1. \uc0ac\uc6a9\uc790\uac00 dataType \ubcc0\uacbd \uac00\ub2a5"),Object(o.b)("li",{parentName:"ul"},"[\ucd94\uac00]"," : \uc0ac\uc6a9\uc790\uac00 \ub370\uc774\ud130 column, dataType\uc744 \uc9c1\uc811 \ud30c\uc2f1. schema \uc0c1\uc138\ud65c\uc6a9\ubc95\uc740 ","[HDFS\ubd88\ub7ec\uc624\uae30]"," \ucc38\uace0")))))}u.isMDXComponent=!0},365:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},b=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),b=u(r),f=n,d=b["".concat(i,".").concat(f)]||b[f]||m[f]||o;return r?a.a.createElement(d,l({ref:t},c,{components:r})):a.a.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);