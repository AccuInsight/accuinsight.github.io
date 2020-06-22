(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{189:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return p})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(1),a=r(9),i=(r(0),r(399)),p={title:"RDB \ubd88\ub7ec\uc624\uae30"},o={id:"pipeline/workflow/workspace/import-data/rdb",title:"RDB \ubd88\ub7ec\uc624\uae30",description:"### Definition  ",source:"@site/docs/pipeline/workflow/workspace/import-data/rdb.md",permalink:"/docs/pipeline/workflow/workspace/import-data/rdb",sidebar:"pipeline",previous:{title:"ICOS \ubd88\ub7ec\uc624\uae30",permalink:"/docs/pipeline/workflow/workspace/import-data/icos"},next:{title:"S3 \ubd88\ub7ec\uc624\uae30",permalink:"/docs/pipeline/workflow/workspace/import-data/s3"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Property",id:"property",children:[]},{value:"JDBC \uc5f0\uacb0\uad00\ub9ac",id:"jdbc-\uc5f0\uacb0\uad00\ub9ac",children:[]}],l={rightToc:c};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"definition"},"Definition"),Object(i.b)("p",null,"RDBMS\uc5d0 \uc800\uc7a5\ub41c \ub370\uc774\ud130\ub97c Pipeline\uc73c\ub85c \ubd88\ub7ec\uc624\uae30 \uc704\ud574 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.",Object(i.b)("br",{parentName:"p"}),"\n","\uc88c\uce21 ","[\ub370\uc774\ud130\ubd88\ub7ec\uc624\uae30]","\ub178\ub4dc \uc911 ","[RDB\ubd88\ub7ec\uc624\uae30]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud569\ub2c8\ub2e4.\nProperty \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4 Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/import-data/impdata015_rdb_main%ED%99%94%EB%A9%B4.png",alt:"impdata015"}))),Object(i.b)("h3",{id:"set"},"Set"),Object(i.b)("p",null,"[setting]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0]"," > ","[\uc0dd\uc131]"," > ","[\uae30\ubcf8\uad6c\uc131]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(i.b)("h3",{id:"property"},"Property"),Object(i.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/import-data/impdata016_rdb_property.png",alt:"impdata016"}))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"username : database \uc0ac\uc6a9 \uacc4\uc815"),Object(i.b)("li",{parentName:"ol"},"driver : JDBC \ub4dc\ub77c\uc774\ubc84"),Object(i.b)("li",{parentName:"ol"},"password : \ud328\uc2a4\uc6cc\ub4dc"),Object(i.b)("li",{parentName:"ol"},"url : JDBC \uc811\uc18d URL. 1~4 \uc785\ub825\ud56d\ubaa9\uc740 ","[\uc5f0\uacb0\uad00\ub9ac]","\uc5d0\uc11c \uc120\ud0dd\ud55c \uc815\ubcf4\ub97c \uc790\ub3d9\uc73c\ub85c \uc870\ud68c\ud568(\uc9c1\uc811 \uc785\ub825\ud560 \uc218 \uc5c6\uc74c)"),Object(i.b)("li",{parentName:"ol"},"tableName : \uc811\uc18d \ud14c\uc774\ube14 \uc815\ubcf4 \uc785\ub825"),Object(i.b)("li",{parentName:"ol"},"sqlQuery : SQL \uc785\ub825(\uc6b0\uce21 ","[Query Editor]"," \ubc84\ud2bc \ud074\ub9ad\uc2dc SQL \ud3b8\uc9d1\uae30 \ud31d\uc5b4\ub418\uc5b4, \ubcf4\ub2e4 \ud070 \ud654\uba74\uc5d0\uc11c SQL \uc785\ub825\uac00\ub2a5)"),Object(i.b)("li",{parentName:"ol"},"\ud14c\uc774\ube14\uc2a4\ud0a4\ub9c8 column \ubc0f dataType \uc815\uc758(\uc6b0\uce21 ","[\uc790\ub3d9\ud30c\uc2f1]",", ","[\ucd94\uac00]","\ubc84\ud2bc \ud65c\uc6a9. \ud30c\uc2f1\uc744 \uc644\ub8cc\ud574\uc57c \uc774\ud6c4 \uc5f0\uacb0\ud560 \ub178\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\uac00\ub2a5)",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"[\uc790\ub3d9\ud30c\uc2f1]"," : \ubd88\ub7ec\uc62c \ub370\uc774\ud130 \uc720\ud615(\uc22b\uc790\ud615, \ubb38\uc790\ud615)\uc5d0 \ub9de\uac8c pipeline\uc5d0\uc11c \uc790\ub3d9 \ud30c\uc2f1. \uc0ac\uc6a9\uc790\uac00 dataType \ubcc0\uacbd \uac00\ub2a5"),Object(i.b)("li",{parentName:"ul"},"[\ucd94\uac00]"," : \uc0ac\uc6a9\uc790\uac00 \ub370\uc774\ud130 column, dataType\uc744 \uc9c1\uc811 \ud30c\uc2f1. schema \uc0c1\uc138\ud65c\uc6a9\ubc95\uc740 ","[HDFS\ubd88\ub7ec\uc624\uae30]"," \ucc38\uace0")))),Object(i.b)("h3",{id:"jdbc-\uc5f0\uacb0\uad00\ub9ac"},"JDBC \uc5f0\uacb0\uad00\ub9ac"),Object(i.b)("p",null,"[RDB\ubd88\ub7ec\uc624\uae30]","\uc5d0\uc11c \uc0ac\uc6a9\ud558\uae30 \uc704\ud55c JDBC\uc811\uc18d\uc815\ubcf4\ub294 ","[\uc124\uc815]"," > ","[JDBC\uc5f0\uacb0\uad00\ub9ac]","\uc5d0 \uc800\uc7a5\ub41c \uc815\ubcf4\ub97c \ubd88\ub7ec\uc640\uc11c \uc0ac\uc6a9(Property\ud0ed\uc5d0\uc11c \uc9c1\uc811 \uc785\ub825 \ubd88\uac00)\ud569\ub2c8\ub2e4. ","[\uc5f0\uacb0\uad00\ub9ac]"," \uc6b0\uce21\uc758 2\uac1c \ubc84\ud2bc \uc0ac\uc6a9\ubc29\ubc95\uc740 \uc544\ub798\uc640 \uac19\uc2b5\ub2c8\ub2e4.     "),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/import-data/impdata017_rdb_jdbc%EC%97%B0%EA%B2%B0%EA%B4%80%EB%A6%AC.png",alt:"impdata017"}))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"\ubaa9\ub85d\uc5f4\uae30 : ","[\uc124\uc815]"," > ","[JDBC\uc5f0\uacb0\uad00\ub9ac]","\uc5d0\uc11c \uc785\ub825\ud55c JDBC\uc811\uc18d\uc815\ubcf4 \ubaa9\ub85d \uc870\ud68c/\uc120\ud0dd"),Object(i.b)("li",{parentName:"ol"},"\uc5f0\uacb0\ud14c\uc2a4\ud2b8 : JDBC\uc811\uc18d\ud14c\uc2a4\ud2b8 \uc218\ud589")),Object(i.b)("h4",{id:"\ubaa9\ub85d\uc5f4\uae30"},"\ubaa9\ub85d\uc5f4\uae30"),Object(i.b)("p",null,"[\ubaa9\ub85d\uc5f4\uae30]"," \ubc84\ud2bc \uc120\ud0dd\ud558\uc5ec \uae30\uc800\uc7a5\ub41c RDB\ubaa9\ub85d\uc744 \uc801\uc6a9\ud560 \uc218 \uc788\uc73c\uba70, ","[\ubaa9\ub85d\uc5f4\uae30]","\ub85c \ud31d\uc5c5\ub41c ","[JDBC \uc5f0\uacb0 \uad00\ub9ac]"," \ucc3d\uc758 ","[\uc2e0\uaddc\uc0dd\uc131]"," \ubc84\ud2bc\uc744 \ud65c\uc6a9\ud574\uc11c RDB \uc811\uc18d\uc815\ubcf4\ub97c \uc785\ub825\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc2e0\uaddc\uc0dd\uc131\ubc29\ubc95\uc740 ","[JDBC\uc5f0\uacb0\uad00\ub9ac]"," \ub0b4\uc6a9\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4.  "),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/import-data/impdata018_rdb_%EB%AA%A9%EB%A1%9D%EC%97%B4%EA%B8%B0.png",alt:"impdata018"}))),Object(i.b)("h4",{id:"\uc5f0\uacb0\ud14c\uc2a4\ud2b8"},"\uc5f0\uacb0\ud14c\uc2a4\ud2b8"),Object(i.b)("p",null,"[\ubaa9\ub85d\uc5f4\uae30]","\uc5d0\uc11c \uc120\ud0dd\ud55c JDBC\uc811\uc18d\uc815\ubcf4\uac00 \uc815\ud655\ud55c\uc9c0 ","[\uc5f0\uacb0\ud14c\uc2a4\ud2b8]","\ub97c \ud1b5\ud574 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5f0\uacb0\ud14c\uc2a4\ud2b8\uac00 \uc2e4\ud328\ud560 \uacbd\uc6b0 JDBC\uc811\uc18d\uc815\ubcf4\uac00 \uc798 \ubabb \uc124\uc815\ub418\uc5c8\ub294\uc9c0, dbms \uc11c\ube44\uc2a4\uc5d0 \ubb38\uc81c\uac00 \uc788\ub294\uc9c0 \ub4f1\uc744 \uc810\uac80\ud569\ub2c8\ub2e4. "),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/import-data/impdata019_rdb_%EC%97%B0%EA%B2%B0%ED%85%8C%EC%8A%A4%ED%8A%B8.png",alt:"impdata019"}))))}b.isMDXComponent=!0},399:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o({},t,{},e)),r},m=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=b(r),u=n,O=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return r?a.a.createElement(O,o({ref:t},l,{components:r})):a.a.createElement(O,o({ref:t},l))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,p=new Array(i);p[0]=u;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,p[1]=o;for(var l=2;l<i;l++)p[l]=r[l];return a.a.createElement.apply(null,p)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);