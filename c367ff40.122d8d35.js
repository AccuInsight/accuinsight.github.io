(window.webpackJsonp=window.webpackJsonp||[]).push([[198],{289:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return n})),l.d(t,"metadata",(function(){return i})),l.d(t,"rightToc",(function(){return c})),l.d(t,"default",(function(){return u}));var a=l(1),b=l(6),r=(l(0),l(365)),n={title:"Tutorial"},i={id:"batchpipeline/tutorial/tutorial",title:"Tutorial",description:"## \uac1c\uc694\r",source:"@site/docs/batchpipeline/tutorial/tutorial.md",permalink:"/docs/batchpipeline/tutorial/tutorial",sidebar:"batchpipeline",previous:{title:"global",permalink:"/docs/batchpipeline/setting/global"}},c=[{value:"\uac1c\uc694",id:"\uac1c\uc694",children:[]},{value:"\uc0ac\uc804 \uc900\ube44\uc0ac\ud56d",id:"\uc0ac\uc804-\uc900\ube44\uc0ac\ud56d",children:[{value:"\ud074\ub7ec\uc2a4\ud130",id:"\ud074\ub7ec\uc2a4\ud130",children:[]},{value:"\ub370\uc774\ud130 \uc900\ube44",id:"\ub370\uc774\ud130-\uc900\ube44",children:[]}]},{value:"\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131",id:"\uc6cc\ud06c\ud50c\ub85c\uc6b0-\uc0dd\uc131",children:[{value:"\uc0dd\uc131 \uba54\ub274\ub85c \uc774\ub3d9",id:"\uc0dd\uc131-\uba54\ub274\ub85c-\uc774\ub3d9",children:[]},{value:"\ub370\uc774\ud130 \ub85c\ub529",id:"\ub370\uc774\ud130-\ub85c\ub529",children:[]},{value:"datajoin \ub178\ub4dc\ub97c \ud65c\uc6a9\ud558\uc5ec 3\uac1c \ud30c\uc77c \uc870\uc778",id:"datajoin-\ub178\ub4dc\ub97c-\ud65c\uc6a9\ud558\uc5ec-3\uac1c-\ud30c\uc77c-\uc870\uc778",children:[]},{value:"\ud544\uc694 \uceec\ub7fc \uc120\ud0dd",id:"\ud544\uc694-\uceec\ub7fc-\uc120\ud0dd",children:[]},{value:"\ub370\uc774\ud130 \uc815\uc81c",id:"\ub370\uc774\ud130-\uc815\uc81c",children:[]},{value:"\uceec\ub7fc\uba85 \ubcc0\uacbd",id:"\uceec\ub7fc\uba85-\ubcc0\uacbd",children:[]},{value:"HDFS\uc5d0 \uc800\uc7a5",id:"hdfs\uc5d0-\uc800\uc7a5",children:[]},{value:"\ud30c\uc774\uc120\ucf54\ub4dc \uc0dd\uc131",id:"\ud30c\uc774\uc120\ucf54\ub4dc-\uc0dd\uc131",children:[]},{value:"\uc800\uc7a5 \ubc0f \uc2e4\ud589",id:"\uc800\uc7a5-\ubc0f-\uc2e4\ud589",children:[]},{value:"\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0c1\ud0dc \ud655\uc778",id:"\uc6cc\ud06c\ud50c\ub85c\uc6b0-\uc0c1\ud0dc-\ud655\uc778",children:[]},{value:"\uc2e4\ud589\uacb0\uacfc \ud655\uc778",id:"\uc2e4\ud589\uacb0\uacfc-\ud655\uc778",children:[]}]}],p={rightToc:c};function u(e){var t=e.components,l=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,l,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"\uac1c\uc694"},"\uac1c\uc694"),Object(r.b)("p",null,"Batch Pipeline\uc73c\ub85c \uc8fc\uc5b4\uc9c4 \ub370\uc774\ud130\ub97c \ucc98\ub9ac\ud558\ub294 \uc6cc\ud06c\ud50c\ub85c\uc6b0\ub97c \uc791\uc131\ud55c\ub2e4.",Object(r.b)("br",{parentName:"p"}),"\n","VOD\uc0ac\uc6a9\uc774\ub825, \uc0ac\uc6a9\uc790 \uc815\ubcf4, product \uc815\ubcf4 \ud30c\uc77c\ub85c ETL\uc791\uc5c5\uc744 \uc9c4\ud589\ud558\uace0, \ucd5c\uc885 dataset\uc740 HDFS\uc5d0 \uc800\uc7a5\ud55c\ub2e4. HDFS\uc5d0 \uc800\uc7a5\ud55c \uacb0\uacfc\ud30c\uc77c\uc740 ML Modeling\uc5d0 \uc0ac\uc6a9\ud55c\ub2e4. "),Object(r.b)("p",null,"\ud29c\ud1a0\ub9ac\uc5bc \uc218\ud589\uc744 \uc704\ud55c \uc0ac\uc804 \uc900\ube44\uc0ac\ud56d\uc740 \ub2e4\uc74c\uacfc \uac19\ub2e4. "),Object(r.b)("h2",{id:"\uc0ac\uc804-\uc900\ube44\uc0ac\ud56d"},"\uc0ac\uc804 \uc900\ube44\uc0ac\ud56d"),Object(r.b)("h3",{id:"\ud074\ub7ec\uc2a4\ud130"},"\ud074\ub7ec\uc2a4\ud130"),Object(r.b)("p",null,"DHP\uc5d0\uc11c \ud29c\ud1a0\ub9ac\uc5bc \uc218\ud589\uc6a9 \ud074\ub7ec\uc2a4\ud130\ub97c \ub9cc\ub4e0\ub2e4.",Object(r.b)("br",{parentName:"p"}),"\n","1. \ub370\uc774\ud130\ub178\ub4dc \uac1c\uc218 \ucd5c\uc18c 2\uac1c \uc774\uc0c1\n2. Yarn Container's Mem Size \ucd5c\uc18c 9G \uc774\uc0c1"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/batchpipeline/tutorial/tutorial001_%ED%81%B4%EB%9F%AC%EC%8A%A4%ED%84%B0%EC%A4%80%EB%B9%84.png",alt:"tutorial001"}))),Object(r.b)("h3",{id:"\ub370\uc774\ud130-\uc900\ube44"},"\ub370\uc774\ud130 \uc900\ube44"),Object(r.b)("p",null,"ICOS\uc5d0 \uc5c5\ub85c\ub4dc\ub41c \ub370\uc774\ud130\ub97c \uc0ac\uc6a9\ud55c\ub2e4(\uc544\ub798 \ud30c\uc77c 3\uac00\uc9c0\ub97c \uc9c1\uc811 ICOS\uc5d0 \uc5c5\ub85c\ub4dc\ud558\uc5ec \uc0ac\uc6a9 \uac00\ub2a5)."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/sampledata/batchpipeline/tutorial/products_demo.csv"}),"products_demo.csv")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/sampledata/batchpipeline/tutorial/users_demo.csv"}),"users_demo.csv")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/sampledata/batchpipeline/tutorial/vod_demo.csv"}),"vod_demo.csv"))),Object(r.b)("p",null,"ICOS \uc81c\ud488 \uad6c\ub9e4\ucc98 \ub9c1\ud06c\ub294 \uc544\ub798\uc640 \uac19\ub2e4. "),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://console.cloudz.co.kr/manage/SL/5"}),"https://console.cloudz.co.kr/manage/SL/5")),Object(r.b)("h2",{id:"\uc6cc\ud06c\ud50c\ub85c\uc6b0-\uc0dd\uc131"},"\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131"),Object(r.b)("p",null,"\ub370\uc774\ud130\ud30c\uc77c 3\uac1c\ub97c \uc870\uc778\ud558\uc5ec Batch Pipeline\uc5d0\uc11c \uc6cc\ud06c\ud50c\ub85c\uc6b0\ub97c \uc0dd\uc131\ud55c\ub2e4.\n\uc0c1\uc138 \uc791\uc5c5\uc808\ucc28\ub294 \ub2e4\uc74c\uacfc \uac19\ub2e4. "),Object(r.b)("p",null,"ICOS\uc5d0\uc11c \ud30c\uc77c \ubd88\ub7ec\uc624\uae30 \u2192 3\uac1c\uc758 \ud30c\uc77c join \u2192 \uc0ac\uc6a9\ud560 column\ub9cc \uc120\ud0dd \u2192 null\uac12 \uc81c\uac70\u2192 column\uba85 rename \u2192 HDFS\uc5d0 \uc800\uc7a5"),Object(r.b)("h3",{id:"\uc0dd\uc131-\uba54\ub274\ub85c-\uc774\ub3d9"},"\uc0dd\uc131 \uba54\ub274\ub85c \uc774\ub3d9"),Object(r.b)("p",null,"Batch Pipeline\uc5d0\uc11c ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0]"," > ","[\uc0dd\uc131]","\uba54\ub274\ub85c \uc774\ub3d9\ud55c\ub2e4. "),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/batchpipeline/tutorial/tutorial002_%EC%83%9D%EC%84%B1%EB%A9%94%EB%89%B4%EB%A1%9C%EC%9D%B4%EB%8F%99.png",alt:"tutorial002"}))),Object(r.b)("h3",{id:"\ub370\uc774\ud130-\ub85c\ub529"},"\ub370\uc774\ud130 \ub85c\ub529"),Object(r.b)("p",null,"\uc0ac\uc804 \uc900\ube44\ud55c \ub370\uc774\ud130\ub97c \ud074\ub7ec\uc2a4\ud130\uc5d0 \ub85c\ub529\ud55c\ub2e4. "),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/batchpipeline/tutorial/tutorial003_%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%A1%9C%EB%94%A9.png",alt:"tutorial003"}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc88c\uce21\uc758 '\ub370\uc774\ud130\ubd88\ub7ec\uc624\uae30' \ud074\ub9ad"),Object(r.b)("li",{parentName:"ul"},"\ub370\uc774\ud130 \ubd88\ub7ec\uc624\uae30 \uadf8\ub8f9\uc774 \uc5f4\ub9ac\uba74 ICOS \ubd88\ub7ec\uc624\uae30 \ub178\ub4dc\ub97c \uce94\ubc84\uc2a4 \uc601\uc5ed\uc5d0 drag & drop\ud558\uc5ec node \uc0dd\uc131"),Object(r.b)("li",{parentName:"ul"},"property \ud328\ub110 \uc785\ub825"),Object(r.b)("li",{parentName:"ul"},"Node name\uc744 product\uc815\ubcf4 \ubd88\ub7ec\uc624\uae30\ub85c \ubcc0\uacbd"),Object(r.b)("li",{parentName:"ul"},"file\uc5d0 \uc788\ub294 \ube0c\ub77c\uc6b0\uc800 \uc544\uc774\ucf58 \ud074\ub9ad")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/batchpipeline/tutorial/tutorial004_ICOS%ED%8C%8C%EC%9D%BC%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80.png",alt:"tutorial004"}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"ICOS File browser popup\uc5d0\uc11c \ub370\uc774\ud130\uac00 \uc874\uc7ac\ud558\ub294 \uc2a4\ud1a0\ub9ac\uc9c0\uc640 \ubc84\ud0b7\uc744 \uac01\uac01 \uc120\ud0dd"),Object(r.b)("li",{parentName:"ul"},"\ub514\ub809\ud1a0\ub9ac\uc5d0\uc11c \uc5c5\ub85c\ub4dc \ud560 'product_demo.csv' \ud30c\uc77c\uc744 \uc120\ud0dd\ud55c \ub4a4 \ud655\uc778 \ubc84\ud2bc \ud074\ub9ad")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/batchpipeline/tutorial/tutorial005_property%ED%8C%A8%EB%84%90%EB%8D%94%EB%B3%B4%EA%B8%B0.png",alt:"tutorial005"}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc6b0\uce21 \ud558\ub2e8\uc758 \ub354\ubcf4\uae30 \ubc84\ud2bc\uc744 \ud074\ub9ad")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/batchpipeline/tutorial/tutorial006_property%EC%9E%90%EB%8F%99%ED%8C%8C%EC%8B%B1%EC%97%B4%EA%B8%B0.png",alt:"tutorial006"}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Property \ud328\ub110\uc758 6. schema \uc6b0\uce21\uc758 '\uc790\ub3d9\ud30c\uc2f1 \uc5f4\uae30' \uc544\uc774\ucf58 \ud074\ub9ad")),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/batchpipeline/tutorial/tutorial007_property%ED%8C%8C%EC%8B%B1%ED%99%94%EB%A9%B4.png",alt:"tutorial007"}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc790\ub3d9\ud30c\uc2f1 \ud31d\uc5c5\uc5d0\uc11c \ud30c\uc2f1\ub41c \uc0d8\ud50c \ub370\uc774\ud130\ub97c \ud655\uc778 \ud6c4 '\ud655\uc778' \ubc84\ud2bc \ud074\ub9ad"),Object(r.b)("li",{parentName:"ul"},"sample data / column info / formatted data \ud0ed\uc744 \uac01\uac01 \ud074\ub9ad\ud558\uc5ec \ub370\uc774\ud130 \ud655\uc778 , \uceec\ub7fc \ub370\uc774\ud130\ud0c0\uc785 \ubc0f \uceec\ub7fc\uba85 \ubcc0\uacbd \ub4f1 \uac00\ub2a5"),Object(r.b)("li",{parentName:"ul"},"\uc704\uc640 \uac19\uc740 \ubc29\ubc95\uc73c\ub85c user\uc815\ubcf4 \ubd88\ub7ec\uc624\uae30\uc640 vod\ubd88\ub7ec\uc624\uae30 \ub178\ub4dc\uc0dd\uc131\uc744 \ucd94\uac00\ub85c \uc9c4\ud589")),Object(r.b)("p",null,"vod\ubd88\ub7ec\uc624\uae30 \ub178\ub4dc\uc758 \uacbd\uc6b0 \uc544\ub798\ub97c \ucc38\uace0\ud558\uc5ec \uceec\ub7fc\uba85\uc744 \ubcc0\uacbd\ud55c\ub2e4."),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/batchpipeline/tutorial/tutorial008_vod%EB%B6%88%EB%9F%AC%EC%98%A4%EA%B8%B0%EC%BB%AC%EB%9F%BC%EB%AA%85%EB%B3%80%EA%B2%BD.png",alt:"tutorial008"}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc790\ub3d9\ud30c\uc2f1 \ud31d\uc5c5\uc5d0\uc11c column info \ud0ed \ud074\ub9ad"),Object(r.b)("li",{parentName:"ul"},"\uc790\ub3d9\ud30c\uc2f1\ub41c \uceec\ub7fc\uba85\uc744 \ubcc0\uacbd\ud558\uc5ec \uc544\ub798\uc640 \uac19\uc740 \uc21c\uc11c\ub85c \uc785\ub825",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"vod_ts"),Object(r.b)("li",{parentName:"ul"},"vod_ip"),Object(r.b)("li",{parentName:"ul"},"vod_url"),Object(r.b)("li",{parentName:"ul"},"vod_swid"),Object(r.b)("li",{parentName:"ul"},"vod_city"),Object(r.b)("li",{parentName:"ul"},"vod_country"),Object(r.b)("li",{parentName:"ul"},"vod_id")))),Object(r.b)("h3",{id:"datajoin-\ub178\ub4dc\ub97c-\ud65c\uc6a9\ud558\uc5ec-3\uac1c-\ud30c\uc77c-\uc870\uc778"},"datajoin \ub178\ub4dc\ub97c \ud65c\uc6a9\ud558\uc5ec 3\uac1c \ud30c\uc77c \uc870\uc778"),Object(r.b)("p",null,"[\ub370\uc774\ud130 \ucc98\ub9ac\ud558\uae30]","\uc758 ","[datajoin]","\ub178\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec product\uc815\ubcf4\uc640 vod\uc815\ubcf4\ub97c \uc870\uc778\ud55c\ub2e4. "),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/batchpipeline/tutorial/tutorial009_3%EA%B0%9C%ED%8C%8C%EC%9D%BC%EC%A1%B0%EC%9D%B8.png",alt:"tutorial009"}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc88c\uce21\uc758 \ub370\uc774\ud130 \ucc98\ub9ac\ud558\uae30 \ud074\ub9ad"),Object(r.b)("li",{parentName:"ul"},"\uc5f4\ub9b0 \ud328\ub110\uc5d0\uc11c dataJoin \ub178\ub4dc \uc6b0\uce21 \uce94\ubc84\uc2a4\uc5d0 drag & drop\ud558\uc5ec \uc0dd\uc131"),Object(r.b)("li",{parentName:"ul"},"product\uc815\ubcf4 \ub178\ub4dc\uc5d0\uc11c dataJoin \ub178\ub4dc \ubc29\ud5a5\uc73c\ub85c \uc5f0\uacb0"),Object(r.b)("li",{parentName:"ul"},"vod\uc815\ubcf4 \ub178\ub4dc\uc5d0\uc11c dataJoin \ub178\ub4dc \ubc29\ud5a5\uc73c\ub85c \uc5f0\uacb0"),Object(r.b)("li",{parentName:"ul"},"\uc6b0\uce21 property\ud328\ub110\uc5d0\uc11c \uc544\ub798\uc640 \uac19\uc774 \uc785\ub825",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"col1: products_demo_url \uc120\ud0dd"),Object(r.b)("li",{parentName:"ul"},"col2: vod_url \uc120\ud0dd"),Object(r.b)("li",{parentName:"ul"},"how : inner\uc120\ud0dd")))),Object(r.b)("p",null,"[datajoin]","\ub178\ub4dc\ub97c \ucd94\uac00\ud558\uc5ec \uc55e\uc11c \uc0dd\uc131\ud55c join\ub178\ub4dc\uc640 user\uc815\ubcf4\ub97c \uc870\uc778\ud55c\ub2e4. "),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/batchpipeline/tutorial/tutorial010_%EC%B6%94%EA%B0%80%EB%85%B8%EB%93%9C%EC%83%9D%EC%84%B1.png",alt:"tutorial010"}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"dataJoin \ub178\ub4dc drag & drop\ud558\uc5ec 1\uac1c \ub354 \uc0dd\uc131"),Object(r.b)("li",{parentName:"ul"},"\uc774\uc804\uc5d0 \uc0dd\uc131\ud55c dataJoin \ub178\ub4dc\uc5d0\uc11c \uc2e0\uaddc\ub85c \uc0dd\uc131\ud55c dataJoin\ub178\ub4dc\ub85c \uc5f0\uacb0"),Object(r.b)("li",{parentName:"ul"},"user\uc815\ubcf4 \ub178\ub4dc\uc5d0\uc11c \uc2e0\uaddc\ub85c \uc0dd\uc131\ud55c dataJoin \ub178\ub4dc\ub85c \uc5f0\uacb0"),Object(r.b)("li",{parentName:"ul"},"\uc6b0\uce21 property \ud328\ub110\uc5d0\uc11c \uc544\ub798\uc640 \uac19\uc774 \uc785\ub825",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"col1 : vod",Object(r.b)("em",{parentName:"li"},"swid_df"),"\ub85c \uc2dc\uc791\ud558\ub294 \uceec\ub7fc \uc120\ud0dd"),Object(r.b)("li",{parentName:"ul"},"col2 : swid \uc120\ud0dd"),Object(r.b)("li",{parentName:"ul"},"how : outer \uc120\ud0dd")))),Object(r.b)("h3",{id:"\ud544\uc694-\uceec\ub7fc-\uc120\ud0dd"},"\ud544\uc694 \uceec\ub7fc \uc120\ud0dd"),Object(r.b)("p",null,"[\ub370\uc774\ud130 \ucc98\ub9ac\ud558\uae30]","\uc758 ","[select]","\ub178\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubd84\uc11d\uc5d0 \ud544\uc694\ud55c \uceec\ub7fc\ub9cc \uc120\ud0dd\ud55c\ub2e4. "),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/batchpipeline/tutorial/tutorial011_%ED%95%84%EC%9A%94%EC%BB%AC%EB%9F%BC%EC%84%A0%ED%83%9D.png",alt:"tutorial011"}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"select \ub178\ub4dc drag & drop\ud558\uc5ec \uc0dd\uc131"),Object(r.b)("li",{parentName:"ul"},"2\ubc88\uc9f8\ub85c \uc0dd\uc131\ud55c dataJoin\ub178\ub4dc\uc5d0\uc11c select\ub178\ub4dc\ub85c \uc5f0\uacb0"),Object(r.b)("li",{parentName:"ul"},"\uc6b0\uce21 property \ud328\ub110 col checkbox\uc5d0\uc11c \uc544\ub798 5\uac00\uc9c0 column \uccb4\ud06c",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"products_demo_title_df\u2026"),Object(r.b)("li",{parentName:"ul"},"vod_ts_df\u2026"),Object(r.b)("li",{parentName:"ul"},"vod_url_df\u2026"),Object(r.b)("li",{parentName:"ul"},"gender_cd_df\u2026"),Object(r.b)("li",{parentName:"ul"},"age_df\u2026")))),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"column\uba85 \ub4a4\uc5d0 \ubd99\ub294 \ub370\uc774\ud130\ud504\ub808\uc784\uba85\uc740 \ub178\ub4dc\uc0dd\uc131\uc2dc \uc790\ub3d9\uc73c\ub85c \uc0dd\uc131\ub418\uc5b4 \uc608\uc2dc\uc640 \ub2e4\ub97c \uc218 \uc788\uc73c\ubbc0\ub85c '\u2026'\uc73c\ub85c \ud45c\uae30\ud568")),Object(r.b)("h3",{id:"\ub370\uc774\ud130-\uc815\uc81c"},"\ub370\uc774\ud130 \uc815\uc81c"),Object(r.b)("p",null,"[\ub370\uc774\ud130 \ucc98\ub9ac\ud558\uae30]","\uc758 ","[dropna]","\ub178\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec null\uac12\uc774 \ud3ec\ud568\ub41c \ud589\uc744 \uc81c\uac70\ud55c\ub2e4.  "),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/batchpipeline/tutorial/tutorial012_%EB%8D%B0%EC%9D%B4%ED%84%B0%EC%A0%95%EC%A0%9C.png",alt:"tutorial012"}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"dropna \ub178\ub4dc drag & drop\ud558\uc5ec \uc0dd\uc131"),Object(r.b)("li",{parentName:"ul"},"select\ub178\ub4dc\uc5d0\uc11c dropna\ub178\ub4dc\ub85c \uc5f0\uacb0"),Object(r.b)("li",{parentName:"ul"},"\uc6b0\uce21 property \ud328\ub110",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"how : any \uc120\ud0dd")))))),Object(r.b)("h3",{id:"\uceec\ub7fc\uba85-\ubcc0\uacbd"},"\uceec\ub7fc\uba85 \ubcc0\uacbd"),Object(r.b)("p",null,"[\ub370\uc774\ud130 \ucc98\ub9ac\ud558\uae30]","\uc758 ","[withColumnRenamed]","\ub178\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \uceec\ub7fc\uba85\uc744 \ubcc0\uacbd\ud55c\ub2e4.  "),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/batchpipeline/tutorial/tutorial013_%EC%BB%AC%EB%9F%BC%EB%AA%85%EB%B3%80%EA%B2%BD.png",alt:"tutorial013"}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"withColumnRenamed\ub178\ub4dc drag&drop\ud558\uc5ec \uc0dd\uc131"),Object(r.b)("li",{parentName:"ul"},"dropNa \ub178\ub4dc\uc5d0\uc11c withColumnRenamed\ub178\ub4dc \ubc29\ud5a5\uc73c\ub85c \uc5f0\uacb0"),Object(r.b)("li",{parentName:"ul"},"\uc6b0\uce21 property \ud328\ub110\uc5d0\uc11c \ud50c\ub7ec\uc2a4 \uc544\uc774\ucf58\uc744 \ud074\ub9ad\ud558\uc5ec \ucd1d 5\uac1c\uc758 \uceec\ub7fc\uc785\ub825\uc14b\uc744 \uc0dd\uc131"),Object(r.b)("li",{parentName:"ul"},"column1\uac1c\ub97c \uc120\ud0dd\ud55c \ub4a4 \uc0c8\ub85c\uc6b4 \uceec\ub7fc\uba85\uc744 \uc785\ub825",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"vod",Object(r.b)("em",{parentName:"li"},"ts_df_ckQ3_df"),"\u2026 \u2192 ts"),Object(r.b)("li",{parentName:"ul"},"products",Object(r.b)("em",{parentName:"li"},"demo_title_df"),"\u2026\u2192 title"),Object(r.b)("li",{parentName:"ul"},"vod_url_df\u2026 \u2192 url"),Object(r.b)("li",{parentName:"ul"},"gender_cd_df\u2026 \u2192 gender"),Object(r.b)("li",{parentName:"ul"},"age_df \u2026 \u2192 age")))),Object(r.b)("h3",{id:"hdfs\uc5d0-\uc800\uc7a5"},"HDFS\uc5d0 \uc800\uc7a5"),Object(r.b)("p",null,"\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc2e4\ud589\uacb0\uacfc\ub97c HDFS\uc5d0 \uc800\uc7a5\ud55c\ub2e4. ","[\ub370\uc774\ud130 \ub0b4\ubcf4\ub0b4\uae30]","\uc758 ","[HDFS\ub0b4\ubcf4\ub0b4\uae30]"," \ub178\ub4dc\ub97c \uc0ac\uc6a9\ud55c\ub2e4. "),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/batchpipeline/tutorial/tutorial014_hdfs%EC%97%90%EC%A0%80%EC%9E%A5.png",alt:"tutorial014"}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc88c\uce21 \ub370\uc774\ud130 \ub0b4\ubcf4\ub0b4\uae30 \ud074\ub9ad"),Object(r.b)("li",{parentName:"ul"},"HDFS\ub0b4\ubcf4\ub0b4\uae30 \ub178\ub4dc drag & drop \ud558\uc5ec \uc0dd\uc131"),Object(r.b)("li",{parentName:"ul"},"withColumnRenamed \ub178\ub4dc\uc5d0\uc11c HDFS \ub0b4\ubcf4\ub0b4\uae30\ub178\ub4dc\ub85c \uc5f0\uacb0"),Object(r.b)("li",{parentName:"ul"},"\uc6b0\uce21 property \ud328\ub110",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"path\uc758 browse \uc544\uc774\ucf58\uc744 \ud074\ub9ad\ud558\uc5ec \uc5f4\ub9ac\ub294 \ud31d\uc5c5\uc5d0\uc11c \uc800\uc7a5\ud560 \ub514\ub809\ud1a0\ub9ac \uc704\uce58 \uc120\ud0dd \ud6c4 \ud655\uc778 \ud074\ub9ad(ex. /tmp)"),Object(r.b)("li",{parentName:"ul"},"file\uc5d0 \uc0dd\uc131\ud560 \ub514\ub809\ud1a0\ub9ac\uba85 \uc785\ub825 (ex.modeling_data) ")))),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/batchpipeline/tutorial/tutorial015_hdfs%EC%97%90%EC%A0%80%EC%9E%A5%EC%8B%9C%ED%8C%8C%EC%9D%BC%EA%B2%BD%EB%A1%9C%EC%9E%85%EB%A0%A5.png",alt:"tutorial015"}))),Object(r.b)("h3",{id:"\ud30c\uc774\uc120\ucf54\ub4dc-\uc0dd\uc131"},"\ud30c\uc774\uc120\ucf54\ub4dc \uc0dd\uc131"),Object(r.b)("p",null,"Batch Pipeline\uc5d0\uc11c \uc791\uc131\ud55c \uc6cc\ud06c\ud50c\ub85c\uc6b0\ub294 \ud30c\uc774\uc120\ucf54\ub4dc\ub85c \uc0dd\uc131\ud560 \uc218 \uc788\ub2e4. "),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/batchpipeline/tutorial/tutorial016_%ED%8C%8C%EC%9D%B4%EC%84%A0%EC%BD%94%EB%93%9C%EC%83%9D%EC%84%B1.png",alt:"tutorial016"}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"ETL \uc601\uc5ed\uc548\uc5d0 \ube48 \uc601\uc5ed \uc544\ubb34\uacf3\uc774\ub098 \ud074\ub9ad"),Object(r.b)("li",{parentName:"ul"},"\uc6b0\uce21\uc758 property \ud328\ub110",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"appName\uc785\ub825 : test"),Object(r.b)("li",{parentName:"ul"},"source\uc758 \uc624\ub978\ucabd \uc544\uc774\ucf58 \ud074\ub9ad\ud558\uc5ec \ud30c\uc774\uc120\ucf54\ub4dc \uc790\ub3d9\uc0dd\uc131"),Object(r.b)("li",{parentName:"ul"},"source\uc758 \uc67c\ucabd \uc544\uc774\ucf58 \ud074\ub9ad")))),Object(r.b)("h3",{id:"\uc800\uc7a5-\ubc0f-\uc2e4\ud589"},"\uc800\uc7a5 \ubc0f \uc2e4\ud589"),Object(r.b)("p",null,"Batch Pipeline\uc5d0\uc11c \uc791\uc131\ud55c \uc6cc\ud06c\ud50c\ub85c\uc6b0\ub97c \uc800\uc7a5 \ubc0f \uc2e4\ud589\ud55c\ub2e4.  "),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/batchpipeline/tutorial/tutorial017_%EC%A0%80%EC%9E%A5%EB%B0%8F%EC%8B%A4%ED%96%89.png",alt:"tutorial017"}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\uc6b0\uce21 \uc0c1\ub2e8 ","[\uc800\uc7a5]","\ubc84\ud2bc\uc744 \ud074\ub9ad\ud55c\ub2e4. \uc6cc\ud06c\ud50c\ub85c\uc6b0\ub97c \uc800\uc7a5\ud560 \uc218 \uc788\ub2e4. "),Object(r.b)("li",{parentName:"ul"},"\uc6b0\uce21 \uc0c1\ub2e8 ","[\uc2e4\ud589]","\ubc84\ud2bc\uc744 \ud074\ub9ad\ud55c\ub2e4. Batch Pipeline\uc5d0\uc11c \uc791\uc131\ud55c \uc6cc\ud06c\ud50c\ub85c\uc6b0\ub97c \uc2e4\ud589\ud560 \uc218 \uc788\ub2e4.")),Object(r.b)("h3",{id:"\uc6cc\ud06c\ud50c\ub85c\uc6b0-\uc0c1\ud0dc-\ud655\uc778"},"\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0c1\ud0dc \ud655\uc778"),Object(r.b)("p",null,"\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc2e4\ud589 \uc0c1\ud0dc\ub97c \ud655\uc778\ud55c\ub2e4. "),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/batchpipeline/tutorial/tutorial018_%EC%8B%A4%ED%96%89%EC%83%81%ED%83%9C%ED%99%95%EC%9D%B8.png",alt:"tutorial018"}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"workflow \uad00\ub9ac \ud654\uba74\uc73c\ub85c \uc774\ub3d9\ud558\uc5ec \uc0c1\ud0dc \ud655\uc778"),Object(r.b)("li",{parentName:"ul"},"\uc774\ubbf8 \uc131\uacf5\uc73c\ub85c \uc885\ub8cc\ub418\uc5c8\uac70\ub098 \uc624\ub958\uac00 \ubc1c\uc0dd\ud558\uc5ec \uc885\ub8cc\ub41c \uacbd\uc6b0 INACTIVE \uc0c1\ud0dc"),Object(r.b)("li",{parentName:"ul"},"\uc0c1\uc138\uc815\ubcf4 \uceec\ub7fc\uc758 Instance\ubaa9\ub85d \uc544\uc774\ucf58 \ud074\ub9ad")),Object(r.b)("h3",{id:"\uc2e4\ud589\uacb0\uacfc-\ud655\uc778"},"\uc2e4\ud589\uacb0\uacfc \ud655\uc778"),Object(r.b)("p",null,"\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc2e4\ud589 \uacb0\uacfc\ub97c \ud655\uc778\ud55c\ub2e4. \uc815\uc0c1\uc801\uc73c\ub85c \uc2e4\ud589\ub418\uc5c8\ub2e4\uba74, \uc544\ub798 \uacbd\ub85c\uc5d0 \uacb0\uacfc\ud30c\uc77c\uc774 \ub4f1\ub85d\ub418\uc5c8\uc74c\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub2e4. "),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/img/batchpipeline/tutorial/tutorial019_%EC%8B%A4%ED%96%89%EA%B2%B0%EA%B3%BC%ED%99%95%EC%9D%B8.png",alt:"tutorial019"}))),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"CONFIGURATION > HDFS BROWSER \uba54\ub274\ub85c \uc774\ub3d9"),Object(r.b)("li",{parentName:"ul"},"\uc9c0\uc815\ud588\ub358 HDFS directory\uc704\uce58\ub85c \uc774\ub3d9\ud558\uc5ec \ub0b4\ubcf4\ub0b4\uae30\ub85c \uc0dd\uc131\ud55c \ub514\ub809\ud1a0\ub9ac \ud558\ub2e8\uc758 part-00000\ud30c\uc77c \ud074\ub9ad"),Object(r.b)("li",{parentName:"ul"},"\uc6b0\uce21 \uc0c1\ub2e8\uc758 \ub2e4\uc6b4\ub85c\ub4dc \ubc84\ud2bc \ud074\ub9ad\ud558\uc5ec \ud30c\uc77c\ub0b4\uc6a9 \ud655\uc778")))}u.isMDXComponent=!0},365:function(e,t,l){"use strict";l.d(t,"a",(function(){return o})),l.d(t,"b",(function(){return m}));var a=l(0),b=l.n(a);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function c(e,t){if(null==e)return{};var l,a,b=function(e,t){if(null==e)return{};var l,a,b={},r=Object.keys(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||(b[l]=e[l]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)l=r[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(b[l]=e[l])}return b}var p=b.a.createContext({}),u=function(e){var t=b.a.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):i({},t,{},e)),l},o=function(e){var t=u(e.components);return b.a.createElement(p.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=Object(a.forwardRef)((function(e,t){var l=e.components,a=e.mdxType,r=e.originalType,n=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),o=u(l),j=a,m=o["".concat(n,".").concat(j)]||o[j]||O[j]||r;return l?b.a.createElement(m,i({ref:t},p,{components:l})):b.a.createElement(m,i({ref:t},p))}));function m(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=l.length,n=new Array(r);n[0]=j;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,n[1]=i;for(var p=2;p<r;p++)n[p]=l[p];return b.a.createElement.apply(null,n)}return b.a.createElement.apply(null,l)}j.displayName="MDXCreateElement"}}]);