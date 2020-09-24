(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{109:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return p})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return u}));var t=r(1),i=r(6),o=(r(0),r(334)),a={title:"indexToString"},p={unversionedId:"pipeline/workflow/workspace/feature-engineering/indexToString",id:"pipeline/workflow/workspace/feature-engineering/indexToString",isDocsHomePage:!1,title:"indexToString",description:"Definition",source:"@site/docs/pipeline/workflow/workspace/feature-engineering/indexToString.md",permalink:"/docs/pipeline/workflow/workspace/feature-engineering/indexToString",sidebar:"pipeline",previous:{title:"stringIndexer",permalink:"/docs/pipeline/workflow/workspace/feature-engineering/stringIndexer"},next:{title:"oneHotEncoder",permalink:"/docs/pipeline/workflow/workspace/feature-engineering/oneHotEncoder"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:c};function u(e){var n=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"definition"},"Definition"),Object(o.b)("p",null,"\uc22b\uc790 \ub370\uc774\ud130\ub97c \ubb38\uc790\uc5f4\ub85c \ubcc0\ud658\ud558\ub294 \ub178\ub4dc\uc785\ub2c8\ub2e4. \uc88c\uce21 ","[\ud53c\ucc98\uc5d4\uc9c0\ub2c8\uc5b4\ub9c1]","\uc5d0\uc11c ","[indexToString]","\ub178\ub4dc\ub97c Designer\ud654\uba74\uc5d0 drag & drop \ud55c \ud6c4 \uc6b0\uce21 Components \ud328\ub110\uc5d0\uc11c \ud56d\ubaa9\ubcc4 \ud544\uc694\uc815\ubcf4\ub97c \uc785\ub825\ud569\ub2c8\ub2e4.\nComponents \ud328\ub110\uc758 \ud0ed\ubcc4 \ud56d\ubaa9\uc5d0\uc11c ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4 \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),Object(o.b)("h3",{id:"set"},"Set"),Object(o.b)("p",null,"[setting]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0]"," > ","[\uc0dd\uc131]"," > ","[\uae30\ubcf8\uad6c\uc131]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(o.b)("h4",{id:"property"},"Property"),Object(o.b)("p",null,"\uc6b0\uce21 Components \ud328\ub110\uc5d0\uc11c Property\ud0ed\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.  "),Object(o.b)("p",null,Object(o.b)("img",Object(t.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/feature-engineering/indexToString001.png",alt:"indexToString001"}))),Object(o.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"target Column : \ub300\uc0c1 \uceec\ub7fc \uc120\ud0dd(int, float, double \ud0c0\uc785 \uceec\ub7fc\ub9cc \uc9c0\uc6d0)"),Object(o.b)("li",{parentName:"ol"},"new Column Name : \uacb0\uacfc \uceec\ub7fc \uba85 \uc785\ub825"),Object(o.b)("li",{parentName:"ol"},'new Column Label : \ubcc0\ud658\ud560 \ubb38\uc790\uc5f4 \ubc30\uc5f4\ub85c \uc778\ub371\uc2a4 \uc218\uc5d0 \ub9de\ucdb0\uc11c \uc785\ub825, \uc774\uc804 \ub178\ub4dc\uc5d0 stringIndexer\uac00 \uc5c6\ub2e4\uba74 \ubc18\ub4dc\uc2dc \uc785\ub825 ex) "a", "b", "c".., metadata\uc5d0 \uc815\ubcf4\uac00 \uc788\ub2e4\uba74 \' \'(\ud55c\uce78\ub744\uc6cc\uc4f0\uae30) \uc785\ub825')),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"[ICOS\ubd88\ub7ec\uc624\uae30]",", ","[indexToString]"," \ub178\ub4dc\ub97c Designer\uc5d0 Drag & Drop\ud558\uc5ec \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131"),Object(o.b)("img",{src:"/img/pipeline/workflow/workspace/feature-engineering/indexToString002.png"})),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"indexToString\ub97c \uc801\uc6a9\ud560 \ub300\uc0c1 \uceec\ub7fc (target Column)\uc744 'numeric_group'\uc73c\ub85c \uc124\uc815, new Column Name\uc744 'str_group'\uc73c\ub85c \uc124\uc815, new Column Label\uc744 'a', 'b', 'c', 'd', 'e', 'f' \ub85c \uc124\uc815 \ud6c4 \uc2e4\ud589 \uacb0\uacfc\ub294 \ub2e4\uc74c\uacfc \uac19\uc74c -> numeric_group (\uc22b\uc790\ud615\ub370\uc774\ud130)\ub97c str_group(\uc2a4\ud2b8\ub9c1\ud615 \ub370\uc774\ud130)\uc5f4\ub85c \ubcc0\ud658\ud558\uc5ec \ucd94\uac00"),Object(o.b)("img",{src:"/img/pipeline/workflow/workspace/feature-engineering/indexToString003.png"}))))}u.isMDXComponent=!0},334:function(e,n,r){"use strict";r.d(n,"a",(function(){return b})),r.d(n,"b",(function(){return d}));var t=r(0),i=r.n(t);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),u=function(e){var n=i.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},b=function(e){var n=u(e.components);return i.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},g=i.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=u(r),g=t,d=b["".concat(a,".").concat(g)]||b[g]||f[g]||o;return r?i.a.createElement(d,p(p({ref:n},l),{},{components:r})):i.a.createElement(d,p({ref:n},l))}));function d(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,a=new Array(o);a[0]=g;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:t,a[1]=p;for(var l=2;l<o;l++)a[l]=r[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);