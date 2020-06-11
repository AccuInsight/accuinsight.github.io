(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{154:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var l=a(1),r=a(6),n=(a(0),a(369)),b={title:"Training"},c={id:"dlmodeler/tutorial/training",title:"Training",description:"### \ud559\uc2b5",source:"@site/docs/dlmodeler/tutorial/training.md",permalink:"/docs/dlmodeler/tutorial/training",sidebar:"dlmodeler",previous:{title:"Data",permalink:"/docs/dlmodeler/tutorial/data"},next:{title:"Deploy",permalink:"/docs/dlmodeler/tutorial/deploy"}},i=[{value:"\ud559\uc2b5",id:"\ud559\uc2b5",children:[]}],u={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(l.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h3",{id:"\ud559\uc2b5"},"\ud559\uc2b5"),Object(n.b)("h4",{id:"\uc791\uc5c5-\uc0dd\uc131"},"\uc791\uc5c5 \uc0dd\uc131"),Object(n.b)("p",null,Object(n.b)("img",Object(l.a)({parentName:"p"},{src:"/img/dlmodeler/tutorial/tutorial013_%EC%9E%91%EC%97%85%EC%83%9D%EC%84%B1.png",alt:"tutorial013"}))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\uc9c0\uae08\uae4c\uc9c0 \uc791\uc5c5\ud55c \ub370\uc774\ud130\ub97c \uac00\uc9c0\uace0, \uc774\ubbf8\uc9c0 \ud559\uc2b5\uc744 \uc9c4\ud589\ud558\uae30 \uc704\ud574 \uc791\uc5c5 \ud654\uba74\uc73c\ub85c \uc774\ub3d9\ud55c\ub2e4."),Object(n.b)("li",{parentName:"ul"},"\uc6b0\uce21 \uc0c1\ub2e8\uc758 \ubd84\uc11d \ud0ed\uc5d0\uc11c \uc11c\ube44\uc2a4 \uba54\ub274 \uc0ac\uc774\ub97c \uc774\ub3d9\ud560 \uc218 \uc788\ub2e4."),Object(n.b)("li",{parentName:"ul"},"\uc5ec\uae30\uc5d0\uc11c \uc791\uc5c5\uc744 \uc120\ud0dd\ud558\uba74 \uc791\uc5c5 \uad00\ub9ac \ud654\uba74\uc73c\ub85c \ub118\uc5b4\uac04\ub2e4.")),Object(n.b)("p",null,Object(n.b)("img",Object(l.a)({parentName:"p"},{src:"/img/dlmodeler/tutorial/tutorial014_%EC%9E%91%EC%97%85%EC%83%9D%EC%84%B1%EB%B2%84%ED%8A%BC.png",alt:"tutorial014"}))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\uc791\uc5c5 \uc0dd\uc131 \ubc84\ud2bc\uc744 \ub20c\ub7ec \uc791\uc5c5\uc744 \uc0dd\uc131\ud55c\ub2e4.")),Object(n.b)("p",null,Object(n.b)("img",Object(l.a)({parentName:"p"},{src:"/img/dlmodeler/tutorial/tutorial015_%EC%9E%91%EC%97%85%EC%83%9D%EC%84%B1%EB%B0%A9%EC%8B%9D%EC%84%A0%ED%83%9D.png",alt:"tutorial015"}))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\uc791\uc5c5 \uc0dd\uc131 \ubc29\uc2dd\uc744 \uc120\ud0dd\ud558\ub294 \ud31d\uc5c5\uc774\ub2e4."),Object(n.b)("li",{parentName:"ul"},"DL Modeler\uc5d0 \ub0b4\uc7a5\ub41c image classification \uc54c\uace0\ub9ac\uc998\uc73c\ub85c \ud559\uc2b5\uc744 \uc9c4\ud589\ud560 \uc608\uc815\uc774\ubbc0\ub85c \uc0dd\uc131 \ubc29\uc2dd\uc73c\ub85c Basic\uc744 \uc120\ud0dd\ud55c\ub2e4.")),Object(n.b)("p",null,Object(n.b)("img",Object(l.a)({parentName:"p"},{src:"/img/dlmodeler/tutorial/tutorial016_%EC%9E%91%EC%97%85%EC%83%81%EC%84%B8%EC%A0%95%EB%B3%B4%EC%9E%85%EB%A0%A5.png",alt:"tutorial016"}))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\uadf8 \ub2e4\uc74c \ub098\uc624\ub294 \uc791\uc5c5 \uc0dd\uc131(Basic) \ud31d\uc5c5\uc5d0\uc11c\ub294 \uc791\uc5c5 \uc0c1\uc138 \uc815\ubcf4\ub97c \uc785\ub825\ud55c\ub2e4."),Object(n.b)("li",{parentName:"ul"},"\uba3c\uc800, \uc791\uc5c5 \uba85\uacfc \uc791\uc5c5 \uc124\uba85\uc744 \uc785\ub825\ud55c\ub2e4.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\uc791\uc5c5 \uba85: image-classification"),Object(n.b)("li",{parentName:"ul"},"\uc791\uc5c5 \uc124\uba85: image classification demo")))),Object(n.b)("p",null,Object(n.b)("img",Object(l.a)({parentName:"p"},{src:"/img/dlmodeler/tutorial/tutorial017_%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98%EC%84%A0%ED%83%9D.png",alt:"tutorial017"}))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\uc54c\uace0\ub9ac\uc998\uc740 \uc774\ubbf8\uc9c0 \ubd84\ub958\ub97c \uc120\ud0dd\ud55c\ub2e4."),Object(n.b)("li",{parentName:"ul"},"\ub0b4\uc7a5 image classification \uc54c\uace0\ub9ac\uc998\uc740 tensorflow \uae30\ubc18\uc73c\ub85c \ub9cc\ub4e4\uc5b4\uc84c\uc73c\uba70, \ud559\uc2b5 \uc2e0\uacbd\ub9dd layer\ub294 6\uac1c\ub85c \uad6c\uc131\ub41c\ub2e4."),Object(n.b)("li",{parentName:"ul"},"\uc54c\uace0\ub9ac\uc998\uc744 \uc120\ud0dd\ud558\uba74 \uadf8\uc5d0 \ub530\ub77c \ub370\uc774\ud130\ub97c \uc120\ud0dd\ud558\ub294 \ubd80\ubd84\uc774 \ubc14\ub010\ub2e4. \uc704 \uce78\uc5d0\ub294 \ud559\uc2b5 \uc774\ubbf8\uc9c0, \uc544\ub798 \uce78\uc5d0\ub294 \ud559\uc2b5 label \uacbd\ub85c\ub97c \uc785\ub825\ud55c\ub2e4."),Object(n.b)("li",{parentName:"ul"},"\uc624\ub978\ucabd\uc5d0 \uc788\ub294 \ud3f4\ub354 \uc544\uc774\ucf58\uc744 \uac01\uac01 \ub20c\ub7ec \ud30c\uc77c \uacbd\ub85c\ub97c \ucc3e\ub294\ub2e4.")),Object(n.b)("p",null,Object(n.b)("img",Object(l.a)({parentName:"p"},{src:"/img/dlmodeler/tutorial/tutorial018_%EA%B2%BD%EB%A1%9C%EA%B2%80%EC%83%89.png",alt:"tutorial018"}))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\uc774\ubbf8\uc9c0 \uacbd\ub85c\ub97c \ucc3e\uc744 \ub550 train-image '\ud3f4\ub354'\ub97c, \ub808\uc774\ube14 \uacbd\ub85c\ub97c \ucc3e\uc744 \ub550 train-label '\ud3f4\ub354'\ub97c \uc120\ud0dd \ud6c4, \ud655\uc778\uc744 \ud074\ub9ad\ud55c\ub2e4.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\uc774\ubbf8\uc9c0 \uacbd\ub85c mnt > project > image-classification_324_edu01 (\uc0ac\uc6a9\uc790\uc5d0 \ub530\ub77c \ub2e4\ub984) > data > train-image > train-image (\ud3f4\ub354 \uc120\ud0dd)"),Object(n.b)("li",{parentName:"ul"},"\ub808\uc774\ube14 \uacbd\ub85c mnt > project > image-classification_324_edu01 (\uc0ac\uc6a9\uc790\uc5d0 \ub530\ub77c \ub2e4\ub984) > data > train-label > train-label (\ud3f4\ub354 \uc120\ud0dd)"))),Object(n.b)("li",{parentName:"ul"},"\ub370\uc774\ud130\ub294 \ub370\uc774\ud130 \ud0ed\uc5d0\uc11c \uc5c5\ub85c\ub4dc\ud574 \ub450\uc5c8\ub358 \ud559\uc2b5 \uc774\ubbf8\uc9c0\uc640 label csv \ud30c\uc77c\uc774\ub2e4."),Object(n.b)("li",{parentName:"ul"},"\ubaa8\ub4e0 \uc815\ubcf4\ub97c \uc785\ub825\ud558\uba74 \uc0dd\uc131 \ubc84\ud2bc\uc774 \ud65c\uc131\ud654\ub418\ub294\ub370, \uc0dd\uc131 \ubc84\ud2bc\uc744 \ub20c\ub7ec \uc791\uc5c5\uc744 \uc0dd\uc131\ud55c\ub2e4.")),Object(n.b)("h4",{id:"\ud559\uc2b5\uc0dd\uc131"},"\ud559\uc2b5\uc0dd\uc131"),Object(n.b)("p",null,Object(n.b)("img",Object(l.a)({parentName:"p"},{src:"/img/dlmodeler/tutorial/tutorial019_%ED%95%99%EC%8A%B5%EC%83%9D%EC%84%B1%EC%9D%84%EC%9C%84%ED%95%9C%EC%9E%91%EC%97%85%EB%AA%85%EC%84%A0%ED%83%9D.png",alt:"tutorial019"}))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\uc791\uc5c5 \uad00\ub9ac \ud654\uba74\uc5d0 \uc0dd\uc131\ud55c \uc791\uc5c5\uc774 \ubcf4\uc774\uac8c \ub41c\ub2e4. \uc791\uc5c5\uba85\uc744 \ud074\ub9ad\ud558\uba74 \ud559\uc2b5 \uad00\ub9ac \ud654\uba74\uc774 \ub098\ud0c0\ub09c\ub2e4.")),Object(n.b)("p",null,Object(n.b)("img",Object(l.a)({parentName:"p"},{src:"/img/dlmodeler/tutorial/tutorial020_%ED%95%99%EC%8A%B5%EC%83%9D%EC%84%B1%EB%B2%84%ED%8A%BC.png",alt:"tutorial020"}))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\ud559\uc2b5 \uad00\ub9ac \ud654\uba74\uc5d0\uc11c \ud559\uc2b5\uc744 \uc0dd\uc131\ud558\uace0 \uad00\ub9ac\ud560 \uc218 \uc788\ub2e4. \ud559\uc2b5 \uc0dd\uc131 \ubc84\ud2bc\uc744 \ub20c\ub7ec \ud559\uc2b5 \uc0dd\uc131\uc744 \uc2dc\uc791\ud55c\ub2e4.")),Object(n.b)("p",null,Object(n.b)("img",Object(l.a)({parentName:"p"},{src:"/img/dlmodeler/tutorial/tutorial021_%ED%95%99%EC%8A%B5%EC%83%9D%EC%84%B1.png",alt:"tutorial021"}))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\ub2e4\uc74c\uc740 \ud559\uc2b5\uc744 \uc0dd\uc131\ud558\ub294 \uacfc\uc815\uc774\ub2e4.")),Object(n.b)("p",null,"a. \ud559\uc2b5\uc5d0 \uc0ac\uc6a9\ud560 \uc778\uc2a4\ud134\uc2a4(cpu/gpu)\ub97c \uc120\ud0dd\ud55c\ub2e4. gpu\ub97c \uc120\ud0dd\ud55c \uacbd\uc6b0 gpu \uac1c\uc218\ub3c4 \uac19\uc774 \uc785\ub825\ud55c\ub2e4."),Object(n.b)("p",null,"b. \ud558\uc774\ud37c\ud30c\ub77c\ubbf8\ud130 \uc911, num_types\ub294 6\uc73c\ub85c \uc124\uc815\ud574\uc900\ub2e4. demo \uc774\ubbf8\uc9c0\uc758 \uce74\ud14c\uace0\ub9ac \uc218\uac00 6\uac1c\uc774\uae30 \ub54c\ubb38\uc774\ub2e4. \ub2e4\ub978 \ud558\uc774\ud37c\ud30c\ub77c\ubbf8\ud130\ub294 \uc6d0\ud558\ub294 \uac12\uc73c\ub85c \uc785\ub825\ud55c\ub2e4. (\uae30\ubcf8 \uac12\uc73c\ub85c \ub450\uc5b4\ub3c4 \ubb34\ubc29\ud558\ub2e4.)"),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"\uc885\ub958"),Object(n.b)("th",Object(l.a)({parentName:"tr"},{align:null}),"\uac12"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"batch_size"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"100")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"epochs"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"100")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"learning_rate"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"0.001")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"num_types"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"6")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"filter_num1"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"20")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"filter_num2"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"40")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"filter_num3"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"60")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"filter_num4"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"80")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"filter_num5"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"100")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"filter_num6"),Object(n.b)("td",Object(l.a)({parentName:"tr"},{align:null}),"100")))),Object(n.b)("p",null,"c. \ud559\uc2b5\uba85 \uc785\ub825 \uce78\uc5d0 \ud559\uc2b5\uba85\uc744 \uc785\ub825\ud55c\ub2e4."),Object(n.b)("pre",null,Object(n.b)("code",Object(l.a)({parentName:"pre"},{}),"- \ud559\uc2b5\uba85: image-train-cpu\n")),Object(n.b)("p",null,"d. \uc0dd\uc131 \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc774\ubbf8\uc9c0 \ud559\uc2b5\uc774 \uc2dc\uc791\ub41c\ub2e4."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\ud559\uc2b5 \ucd94\uac00 \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \ud559\uc2b5\uba85\uacfc \ud558\uc774\ud37c\ud30c\ub77c\ubbf8\ud130\ub97c \uc785\ub825\ud558\ub294 \uce78\uc774 \ub298\uc5b4\ub098\uba70, \ud55c \ud654\uba74\uc5d0\uc11c \uc5ec\ub7ec \uac1c\uc758 \ud559\uc2b5\uc744 \ub3d9\uc2dc\uc5d0 \uc0dd\uc131\ud560 \uc218 \uc788\ub2e4. \ub2e8, \ud504\ub85c\uc81d\ud2b8\uc5d0 \ud560\ub2f9 \ub41c \uc790\uc6d0\uc744 \ucd08\uacfc\ud558\uba74 \uc548 \ub41c\ub2e4.")),Object(n.b)("h4",{id:"\ud559\uc2b5\uc9c4\ud589-\ud655\uc778"},"\ud559\uc2b5\uc9c4\ud589 \ud655\uc778"),Object(n.b)("p",null,Object(n.b)("img",Object(l.a)({parentName:"p"},{src:"/img/dlmodeler/tutorial/tutorial022_%ED%95%99%EC%8A%B5%EC%A7%84%ED%96%89%ED%99%95%EC%9D%B8.png",alt:"tutorial022"}))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\ud559\uc2b5 \uad00\ub9ac \ud654\uba74\uc5d0 \uc0dd\uc131\ud55c \ud559\uc2b5\uc774 \ubcf4\uc778\ub2e4."),Object(n.b)("li",{parentName:"ul"},"\ud559\uc2b5 \uc0c1\ud0dc\ub294 \ud559\uc2b5 \ub300\uae30/\ud559\uc2b5 \uc911/\ud559\uc2b5 \uc644\ub8cc/\ud559\uc2b5 \uc2e4\ud328\ub85c \ud45c\uc2dc\ub41c\ub2e4."),Object(n.b)("li",{parentName:"ul"},"\uc0c1\ud0dc\ub294 \uc790\ub3d9 \uc0c8\ub85c \uace0\uce68\uc774 \ub418\uc9c0 \uc54a\uae30 \ub54c\ubb38\uc5d0 \uc0ac\uc6a9\uc790\uac00 \uc9c1\uc811 \uc0c8\ub85c \uace0\uce68 \ubc84\ud2bc\uc744 \ub20c\ub7ec \uc8fc\uae30\uc801\uc73c\ub85c \ud655\uc778\ud574\uc57c \ud55c\ub2e4."),Object(n.b)("li",{parentName:"ul"},"\uc0dd\uc131\ub41c \ud559\uc2b5 \uba85\uc744 \ud074\ub9ad\ud558\uc5ec \ud559\uc2b5 \uc0c1\uc138 \ud398\uc774\uc9c0\ub85c \uc9c4\uc785\ud55c\ub2e4.")),Object(n.b)("p",null,Object(n.b)("img",Object(l.a)({parentName:"p"},{src:"/img/dlmodeler/tutorial/tutorial023_%ED%95%99%EC%8A%B5%EC%83%81%EC%84%B8%EA%B2%B0%EA%B3%BC%EA%B7%B8%EB%9E%98%ED%94%84.png",alt:"tutorial023"}))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"\ud559\uc2b5 \uc0c1\uc138 \ud31d\uc5c5\uc758 \uacb0\uacfc \uadf8\ub798\ud504 \ud0ed\uc5d0\uc11c \ud559\uc2b5 \uc9c4\ud589 \uc0c1\ud669\uc744 \ud55c \ub208\uc5d0 \ubcfc \uc218 \uc788\ub2e4."),Object(n.b)("li",{parentName:"ul"},"\ud559\uc2b5 \uc2e4\ud328/\ud559\uc2b5 \uc644\ub8cc \uc2dc \uc790\uc138\ud788 \ubcf4\uae30 \ubc84\ud2bc\uc774 \ud65c\uc131\ud654\ub418\uba70, \uc774\ub97c \ub204\ub974\uba74 \ud574\ub2f9 \ud559\uc2b5\uc5d0\uc11c \ub098\uc624\ub294 \ub85c\uadf8\ub97c \ud655\uc778\ud560 \uc218 \uc788\ub2e4."),Object(n.b)("li",{parentName:"ul"},"\ubc30\ud3ec \ubc84\ud2bc\uc740 \ud559\uc2b5 \uc644\ub8cc \ud6c4 \ubaa8\ub378\uc774 \uc0dd\uc131\ub418\uba74 \ud65c\uc131\ud654\ub41c\ub2e4."),Object(n.b)("li",{parentName:"ul"},"\ud559\uc2b5 \uc9c4\ud589 \uc2dc\uac04\uc740 \ud558\uc774\ud37c\ud30c\ub77c\ubbf8\ud130 \uc124\uc815, \ub370\uc774\ud130\uc758 \uc591, \ud559\uc2b5 \uc778\uc2a4\ud134\uc2a4\uc5d0 \ub530\ub77c \ucc28\uc774\uac00 \ub09c\ub2e4.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"\uae30\ubcf8 \uac12 \ud558\uc774\ud37c\ud30c\ub77c\ubbf8\ud130, 59\uac1c \ud559\uc2b5 \ub370\uc774\ud130 \uae30\uc900\uc73c\ub85c CPU \ud559\uc2b5\uc740 \uc57d 17\ubd84, GPU \ud559\uc2b5\uc740 \uc57d 7\ubd84 \uc18c\uc694."),Object(n.b)("li",{parentName:"ul"},"\uae30\ubcf8 \uac12 \ud558\uc774\ud37c\ud30c\ub77c\ubbf8\ud130, 14,034\uac1c \uc804\uccb4 \ud559\uc2b5 \ub370\uc774\ud130\ub85c \ubaa8\ub378\uc744 \ub9cc\ub4e4\uba74 CPU \ud559\uc2b5 \uc57d 15\uc2dc\uac04, GPU \ud559\uc2b5 \uc57d 17\ubd84 \uc18c\uc694.")))))}p.isMDXComponent=!0},369:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return j}));var l=a(0),r=a.n(l);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),p=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},o=function(e){var t=p(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(l.forwardRef)((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,b=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),o=p(a),m=l,j=o["".concat(b,".").concat(m)]||o[m]||O[m]||n;return a?r.a.createElement(j,c({ref:t},u,{components:a})):r.a.createElement(j,c({ref:t},u))}));function j(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,b=new Array(n);b[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,b[1]=c;for(var u=2;u<n;u++)b[u]=a[u];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);