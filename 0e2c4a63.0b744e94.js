(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{369:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return j}));var n=r(0),b=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,b=function(e,t){if(null==e)return{};var r,n,b={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(b[r]=e[r]);return b}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(b[r]=e[r])}return b}var p=b.a.createContext({}),o=function(e){var t=b.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},u=function(e){var t=o(e.components);return b.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=o(r),s=n,j=u["".concat(c,".").concat(s)]||u[s]||O[s]||a;return r?b.a.createElement(j,l({ref:t},p,{components:r})):b.a.createElement(j,l({ref:t},p))}));function j(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=s;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var p=2;p<a;p++)c[p]=r[p];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},99:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(1),b=(r(0),r(369));const a={title:"HDFS browser"},c={id:"pipeline/browser/hdfs",title:"HDFS browser",description:"## HDFS \ube0c\ub77c\uc6b0\uc800\r",source:"@site/docs\\pipeline\\browser\\hdfs.md",permalink:"/docs/pipeline/browser/hdfs",sidebar:"pipeline",previous:{title:"browser",permalink:"/docs/pipeline/browser/browser"},next:{title:"HIVE browser",permalink:"/docs/pipeline/browser/hive"}},l=[{value:"HDFS \ube0c\ub77c\uc6b0\uc800",id:"hdfs-\ube0c\ub77c\uc6b0\uc800",children:[{value:"HDFS \ube0c\ub77c\uc6b0\uc800 \uac1c\uc694",id:"hdfs-\ube0c\ub77c\uc6b0\uc800-\uac1c\uc694",children:[]}]}],i={rightToc:l};function p({components:e,...t}){return Object(b.b)("wrapper",Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"hdfs-\ube0c\ub77c\uc6b0\uc800"},"HDFS \ube0c\ub77c\uc6b0\uc800"),Object(b.b)("h3",{id:"hdfs-\ube0c\ub77c\uc6b0\uc800-\uac1c\uc694"},"HDFS \ube0c\ub77c\uc6b0\uc800 \uac1c\uc694"),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/browser/browser001_hdfs%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80.png",alt:"browser001"}))),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"HDFS \uac80\uc0c9",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"\ud074\ub7ec\uc2a4\ud130 : \uc811\uadfc\ud560 cluster\uba85 \uc120\ud0dd\ud558\uac70\ub098 \u2018\uc9c1\uc811\uc785\ub825\u2019 \uc120\ud0dd\ud558\uc5ec api url\uacfc \uc0ac\uc6a9\uc790\uba85 \uc785\ub825 \ud558\uc5ec \uac80\uc0c9"),Object(b.b)("li",{parentName:"ul"},"API URL : \ud638\ucd9c\ud560 WebHDFS \uc11c\ubc84 \uc8fc\uc18c\uac00 \uae30\uc874 \uc8fc\uc18c\uac00 \uc544\ub2cc \uacbd\uc6b0 \uc785\ub825 (\uc608:",Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"http://dataplatform01:50070/webhdfs/v1"}),"http://dataplatform01:50070/webhdfs/v1"),")"),Object(b.b)("li",{parentName:"ul"},"\uc0ac\uc6a9\uc790 \uba85 : WebHDFS \uc0ac\uc6a9\uc790\uba85\uc73c\ub85c \ub85c\uadf8\uc778 \uc0ac\uc6a9\uc790\uc640\ub294 \ub2e4\ub978 HDFS \uc0ac\uc6a9\uc790\uba85 (\ucd94\ud6c4 \ub85c\uadf8\uc778 \uc0ac\uc6a9\uc790\ub97c HDFS \uc0ac\uc6a9\uc790\uc640 \uc5f0\ub3d9 \uc2dc \uac19\uc740 \uc0ac\uc6a9\uc790\uba85\uc774 \ub420 \uc218 \uc788\uc74c)"),Object(b.b)("li",{parentName:"ul"},"\uac80\uc0c9 \ubc84\ud2bc : API URL\uacfc \uc0ac\uc6a9\uc790\uba85 \uc785\ub825\ud558\uc5ec \uac80\uc0c9\ud558\ub294 \uacbd\uc6b0 \uc785\ub825 \ud6c4 \uac80\uc0c9 \ubc84\ud2bc \ud074\ub9ad"))),Object(b.b)("li",{parentName:"ol"},"Action icon",Object(b.b)("ul",{parentName:"li"},Object(b.b)("li",{parentName:"ul"},"HDFS \uacbd\ub85c \ubcf5\uc0ac"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#%EA%B6%8C%ED%95%9C%EB%B3%80%EA%B2%BD"}),"\uad8c\ud55c\ubcc0\uacbd")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#%EC%9D%B4%EB%A6%84%EB%B3%80%EA%B2%BD"}),"\uc774\ub984\ubcc0\uacbd")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#%ED%8F%B4%EB%8D%94%EC%83%9D%EC%84%B1"}),"\ud3f4\ub354\uc0dd\uc131")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#%ED%8C%8C%EC%9D%BC%EC%97%85%EB%A1%9C%EB%93%9C"}),"\ud30c\uc77c\uc5c5\ub85c\ub4dc")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C-%EB%B0%8F-%EC%82%AD%EC%A0%9C"}),"\ud30c\uc77c\ub2e4\uc6b4\ub85c\ub4dc")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C-%EB%B0%8F-%EC%82%AD%EC%A0%9C"}),"\uc0ad\uc81c")))),Object(b.b)("li",{parentName:"ol"},"\uac80\uc0c9\ud55c HDFS \ud3f4\ub354 \ub610\ub294 \ud30c\uc77c \ubaa9\ub85d")),Object(b.b)("h4",{id:"\uc774\ub984\ubcc0\uacbd"},"\uc774\ub984\ubcc0\uacbd"),Object(b.b)("p",null,"\uc774\ub984\uc744 \ubcc0\uacbd\ud558\ub824\ub294 \ud3f4\ub354/\ud30c\uc77c\uc744 \ud074\ub9ad\ud558\uba74 \ud574\ub2f9 \uc544\uc774\ucf58\uc774 \ud65c\uc131\ud654 \ub418\uba70, \ud074\ub9ad\ud558\uc5ec \uc774\ub984\ubcc0\uacbd \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/browser/browser002_hdfs%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80%EC%9D%B4%EB%A6%84%EB%B3%80%EA%B2%BD.png",alt:"browser002"}))),Object(b.b)("h4",{id:"\ud3f4\ub354\uc0dd\uc131"},"\ud3f4\ub354\uc0dd\uc131"),Object(b.b)("p",null,"\ud3f4\ub354\ub97c \uc0dd\uc131\ud558\ub824\ub294 tree \uad6c\uc870 \uc704\uce58\ub97c \uc120\ud0dd \ud6c4, \ud574\ub2f9 \uc544\uc774\ucf58\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4. \uc624\ud508\ub41c \ud3f4\ub354 \uc0dd\uc131 \ud31d\uc5c5\uc5d0\uc11c \uc774\ub984\uc744 \uc785\ub825\ud558\uace0 \uc800\uc7a5 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uba74 \ud3f4\ub354\ub97c \uc0dd\uc131 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/browser/browser003_%ED%8F%B4%EB%8D%94%EC%83%9D%EC%84%B1.png",alt:"browser003"}))),Object(b.b)("h4",{id:"\ud30c\uc77c\uc5c5\ub85c\ub4dc"},"\ud30c\uc77c\uc5c5\ub85c\ub4dc"),Object(b.b)("p",null,"\uc5c5\ub85c\ub4dc \ud558\ub824\ub294 tree \uad6c\uc870 \uc704\uce58\ub97c \uc120\ud0dd \ud6c4, \ud574\ub2f9 \uc544\uc774\ucf58\uc744 \ud074\ub9ad\ud569\ub2c8\ub2e4. \uc624\ud508\ub41c \ud30c\uc77c \uc5c5\ub85c\ub4dc \ud31d\uc5c5\uc5d0\uc11c \ud30c\uc77c \ucd94\uac00 \ubc84\ud2bc \ud074\ub9ad\ud558\uc5ec \ub85c\uceec\uc758 n\uac1c \ud30c\uc77c\uc744 \uc120\ud0dd\ud558\uc5ec \ucd94\uac00 \ud6c4, \u2018\uc804\uccb4 \uc5c5\ub85c\ub4dc\u2019 \ubc84\ud2bc\uc744 \ud074\ub9ad\ud558\uc5ec \uc5c5\ub85c\ub4dc\ub97c \uc9c4\ud589\ud558\uac70\ub098 \ud639\uc740 \u2018\uc804\uccb4 \uc0ad\uc81c\u2019, \uac1c\ubc1c \uc0ad\uc81c \ubc84\ud2bc \ud074\ub9ad\ud558\uc5ec \uc9c4\ud589"),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/browser/browser004_%ED%8C%8C%EC%9D%BC%EC%97%85%EB%A1%9C%EB%93%9C.png",alt:"browser004"}))),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},"\ud30c\uc77c \ucd94\uac00"),Object(b.b)("li",{parentName:"ol"},"\uc804\uccb4 \uc5c5\ub85c\ub4dc"),Object(b.b)("li",{parentName:"ol"},"\uc804\uccb4 \uc0ad\uc81c")),Object(b.b)("h4",{id:"\ub2e4\uc6b4\ub85c\ub4dc-\ubc0f-\uc0ad\uc81c"},"\ub2e4\uc6b4\ub85c\ub4dc \ubc0f \uc0ad\uc81c"),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/browser/browser005_%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C%EB%B0%8F%EC%82%AD%EC%A0%9C.png",alt:"browser005"}))),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\ub2e4\uc6b4\ub85c\ub4dc: \ub2e4\uc6b4\ub85c\ub4dc\ud560 \u2018\ud30c\uc77c\u2019 \uc120\ud0dd \ud6c4 \ub2e4\uc6b4\ub85c\ub4dc \ubc84\ud2bc \ud074\ub9ad \uc2dc \ub85c\uceec\ub85c \ub2e4\uc6b4\ub85c\ub4dc \uc9c4\ud589"),Object(b.b)("li",{parentName:"ul"},"\uc0ad\uc81c: \uc0ad\uc81c\ud560 \ud30c\uc77c/\ud3f4\ub354 \ud074\ub9ad \ud6c4 \uc0ad\uc81c \ubc84\ud2bc \ud074\ub9ad\ud558\uc5ec \uc0ad\uc81c")),Object(b.b)("h4",{id:"\uad8c\ud55c\ubcc0\uacbd"},"\uad8c\ud55c\ubcc0\uacbd"),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/browser/browser006_%EA%B6%8C%ED%95%9C%EB%B3%80%EA%B2%BD.png",alt:"browser006"}))," "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\ud30c\uc77c/\ub514\ub809\ud1a0\ub9ac\ub97c \uc120\ud0dd\ud55c \ud6c4 \uad8c\ud55c \ubcc0\uacbd \ubc84\ud2bc\uc744 \ud074\ub9ad"),Object(b.b)("li",{parentName:"ul"},"\uc18c\uc720\uc790 / \uadf8\ub8f9 / \uacf5\uac1c \ubcc4\ub85c \uad8c\ud55c\uc744 \uc124\uc815")))}p.isMDXComponent=!0}}]);