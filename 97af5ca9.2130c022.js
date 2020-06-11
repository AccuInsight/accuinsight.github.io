(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{245:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(6),c=(n(0),n(369)),l={title:"Scheduler"},b={id:"batchpipeline/workflow/workspace/configuration/scheduler",title:"Scheduler",description:"## Scheduler",source:"@site/docs/batchpipeline/workflow/workspace/configuration/scheduler.md",permalink:"/docs/batchpipeline/workflow/workspace/configuration/scheduler",sidebar:"batchpipeline",previous:{title:"Setting",permalink:"/docs/batchpipeline/workflow/workspace/configuration/setting"},next:{title:"Parameter",permalink:"/docs/batchpipeline/workflow/workspace/configuration/parameter"}},i=[{value:"Scheduler",id:"scheduler",children:[]}],o={rightToc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"scheduler"},"Scheduler"),Object(c.b)("p",null,"Scheduler \ud328\ub110\uc744 \ud074\ub9ad\ud558\uba74 \ud558\ub2e8 \ud328\ub110\uc774 \ud655\uc7a5\ub41c\ub2e4. Scheduler \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4 \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"enable : enable \ud56d\ubaa9\uc5d0 \uccb4\ud06c\ud560 \uacbd\uc6b0 scheduler \ud328\ub110\uc5d0\uc11c \uc124\uc815\ud55c \uc0ac\ud56d\uc5d0 \ub9de\uac8c \uc6cc\ud06c\ud50c\ub85c\uc6b0 job\uc744 \uc2e4\ud589\ud55c\ub2e4. ")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"timezone : timezone \uc124\uc815\ud560 \uc218 \uc788\uc73c\uba70 \uae30\ubcf8\uac12\uc740 kst \uc774\ub2e4. ")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"start : \uc2dc\uc791 \uc77c\uc2dc\ub97c \uc124\uc815\ud560 \uc218 \uc788\ub2e4(\uc2dc\uc791 \uc77c\uc2dc\ub294 \ud604\uc7ac \uc77c\uc2dc \ubcf4\ub2e4 \uc774\ud6c4\ub85c \uc9c0\uc815\ud574\uc57c \ud55c\ub2e4). ")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"end : \uc885\ub8cc \uc77c\uc2dc\ub97c \uc124\uc815\ud560 \uc218 \uc788\ub2e4. ")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"frequency : Time Interval \uae30\ubc18\uc73c\ub85c \uc6cc\ud06c\ud50c\ub85c\uc6b0 job\uc744 \uc2e4\ud589\ud55c\ub2e4. Basic, Cron \ub4f1 \ub450 \uac00\uc9c0 InputType\uc744 \uc81c\uacf5\ud55c\ub2e4."),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"InputType\uc744 Basic\uc73c\ub85c \uc120\ud0dd\ud560 \uacbd\uc6b0 frequencyNumber\uc5d0 \uc2e4\ud589\uc8fc\uae30(\uc22b\uc790\uac12), frequencyUnit\uc5d0 minutes, hours, days, months \uc911 \uc120\ud0dd \ud558\uc5ec \uc8fc\uae30\ub97c \uc124\uc815 \ud560 \uc218 \uc788\ub2e4. frequencyUnit\uc744 minutes\ub85c frequencyNumber\ub97c 5\ub85c \uc785\ub825\ud560 \uacbd\uc6b0 5\ubd84 \uc8fc\uae30\ub85c \uc6cc\ud06c\ud50c\ub85c\uc6b0 job\uc744 \uc2e4\ud589\ud558\uaca0\ub2e4\ub294 \uc758\ubbf8\uc774\ub2e4. \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc2e4\ud589\uc758 \ucd5c\uc18c\uc8fc\uae30\ub294 5\ubd84\uc73c\ub85c \uadf8 \uc774\ud558\ub85c \uc124\uc815\ud560 \uc218 \uc5c6\ub2e4.  "),Object(c.b)("li",{parentName:"ul"},"InputType\uc774 Cron\uc774\uba74 Unix Crontab \uc2a4\ud0c0\uc77c\ub85c \uc2a4\ucf00\uc904\uc744 \uc124\uc815\ud560 \uc218 \uc788\ub2e4. \ud3c9\uc77c 10\ubd84 \ub9c8\ub2e4 \uc6cc\ud06c\ud50c\ub85c\uc6b0\uac00 \uc2e4\ud589\ub41c\ub2e4\uba74 ","[0/10 ",Object(c.b)("em",{parentName:"li"}," ? ")," 1-5 *]","\uacfc \uac19\uc774 \uc785\ub825\ud55c\ub2e4. "))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"controls : timeout, concurrency, throttle, execution \uc744 \uc124\uc815\ud560 \uc218 \uc788\ub2e4. "),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"timeout : \ud0c0\uc784\uc544\uc6c3 \uc2dc\uac04\uc744 \uc124\uc815\ud55c\ub2e4. default\ub294 -1\uc774\ub2e4.")),Object(c.b)("table",{parentName:"li"},Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"timeout"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\uc124\uba85"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-1"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"timeout \ubbf8\uc124\uc815. \uc989 \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc791\uc5c5\uc774 \uac00\ub2a5\ud560 \ub54c\uae4c\uc9c0 \ubb34\ud55c\uc815 \ub300\uae30\ud568")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"workflow\uac00 \uc815\uc0c1\uc801\uc774\uc9c0 \uc54a\uc744 \uacbd\uc6b0 \uc989\uc2dc \uc885\ub8cc\ud568")))),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"concurrency : \ub3d9\uc2dc\uc5d0 \uc2e4\ud589(running)\uc2dc\ud0a4\ub294 \uc791\uc5c5 \uc218"),Object(c.b)("li",{parentName:"ul"},"throttle : \ud2b9\uc815 \uc2dc\uc810\uc5d0 \uc2e4\ud589 \ub300\uae30(waiting) \uc911\uc778 \uc791\uc5c5 \uc218"),Object(c.b)("li",{parentName:"ul"},"execution : \uc778\uc2a4\ud134\uc2a4\ub4e4\uc758 \uc2e4\ud589 \uaddc\uce59\uc744 \uc124\uc815")),Object(c.b)("table",{parentName:"li"},Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"execution"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"\uc124\uba85"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"FIFO"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\uc21c\uc11c\ub300\ub85c \uc2e4\ud589")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"LIFO"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\uac00\uc7a5 \ub098\uc911\uc5d0 \ub4e4\uc5b4\uc628 \uac83\ubd80\ud130 \uc2e4\ud589")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ONLYLAST"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"\ub9c8\uc9c0\ub9c9 \uc791\uc5c5\ub9cc \uc2e4\ud589\ud558\uace0 \ub098\uba38\uc9c0 \uc791\uc5c5\uc740 \uc2e4\ud589\ud558\uc9c0 \uc54a\uc74c"))))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"datasets : \ubbf8\ub9ac \uc791\uc131\ud574\ub454 dataset\uc744 \ubd88\ub7ec\uc640\uc11c \ud30c\uc77c\uc774 \uc874\uc7ac\ud558\uac70\ub098 \ub514\ub809\ud1a0\ub9ac \ub124\uc774\ubc0d \uaddc\uce59 \ub4f1\uc73c\ub85c \uc870\uac74\uc5d0 \ub530\ub978 \uc2a4\ucf00\uc904\uc744 \uc124\uc815\ud560 \uc218 \uc788\ub2e4."),Object(c.b)("p",{parentName:"li"},"\u2022 inputEvents"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"name: input-dataset \uc774\ub984"),Object(c.b)("li",{parentName:"ul"},"uriTemplate: dataset\uc774 \uc704\uce58\ud55c HDFS \uacbd\ub85c"),Object(c.b)("li",{parentName:"ul"},"frequency: \uc218\ud589 \uc8fc\uae30 (minutes, hours, days, months \uc911 \ud0dd1)"),Object(c.b)("li",{parentName:"ul"},"initialInstance: \uccab\ubc88\uc9f8 \uc778\uc2a4\ud134\uc2a4 \uc2dc\uc810 (\ud574\ub2f9 \uc2dc\uc810 \uc774\uc804\uc5d0 \uc0dd\uc131\ub41c \uc778\uc2a4\ud134\uc2a4\ub294 \ubb34\uc2dc)"),Object(c.b)("li",{parentName:"ul"},"timezone: timezone \uc815\ubcf4"),Object(c.b)("li",{parentName:"ul"},"doneFlag: \ud544\ub4dc\ub97c \ud1b5\ud574\uc11c \ucf54\ub514\ub124\uc774\ud130\uac00 \ud574\ub2f9 \ub370\uc774\ud130\uc14b\uc774 \ucc98\ub9ac\ud560 \uc900\ube44\uac00 \ub418\uc5c8\ub294\uc9c0\ub97c \uc54c\ub824\uc90c(_SUCCESS, DIRECTORY \uc911 \ud0dd1)")),Object(c.b)("p",{parentName:"li"},"\u2022 outputEvents"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"name: output-dataset \uc774\ub984"),Object(c.b)("li",{parentName:"ul"},"uriTemplate: dataset\uc774 \uc704\uce58\ud55c HDFS \uacbd\ub85c"),Object(c.b)("li",{parentName:"ul"},"frequency: \uc218\ud589 \uc8fc\uae30 (minutes, hours, days, months \uc911 \ud0dd1)"),Object(c.b)("li",{parentName:"ul"},"initialInstance: \uccab\ubc88\uc9f8 \uc778\uc2a4\ud134\uc2a4 \uc2dc\uc810 (\ud574\ub2f9 \uc2dc\uc810 \uc774\uc804\uc5d0 \uc0dd\uc131\ub41c \uc778\uc2a4\ud134\uc2a4\ub294 \ubb34\uc2dc)"),Object(c.b)("li",{parentName:"ul"},"timezone: timezone \uc815\ubcf4"),Object(c.b)("li",{parentName:"ul"},"doneFlag: \ud544\ub4dc\ub97c \ud1b5\ud574\uc11c \ucf54\ub514\ub124\uc774\ud130\uac00 \ud574\ub2f9 \ub370\uc774\ud130\uc14b\uc774 \ucc98\ub9ac\ud560 \uc900\ube44\uac00 \ub418\uc5c8\ub294\uc9c0\ub97c \uc54c\ub824\uc90c(_SUCCESS, DIRECTORY \uc911 \ud0dd1)")))))}p.isMDXComponent=!0},369:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=p(n),O=a,j=u["".concat(l,".").concat(O)]||u[O]||m[O]||c;return n?r.a.createElement(j,b({ref:t},o,{components:n})):r.a.createElement(j,b({ref:t},o))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,l=new Array(c);l[0]=O;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var o=2;o<c;o++)l[o]=n[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);