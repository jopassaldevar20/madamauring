(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e1387a52"],{"023c":function(t,e,r){"use strict";var n=r("950c"),a=r.n(n);a.a},"05cc":function(t,e,r){},"184c":function(t,e,r){},"30f3":function(t,e,r){},3846:function(t,e,r){r("9e1e")&&"g"!=/./g.flags&&r("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:r("0bfb")})},"3b9b":function(t,e,r){},"3ede":function(t,e,r){"use strict";var n=r("05cc"),a=r.n(n);a.a},4175:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ang_swerte_wrapper"},[r("LogIn"),r("div",{staticClass:"as__pattern_order"},[r("div",[r("OrderResult"),r("OrderHistory")],1),r("div",[r("PatternConverter"),r("AddOrder"),r("AddPattern"),r("PatternStats")],1),r("div",[r("SearchResult"),r("OrderList")],1)])],1)},a=[],s=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),i=r("2f62"),o=r("5002"),c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("BaseCard",{staticClass:"add_order_wrapper"},[r("div",{staticClass:"ao__pattern_type_symbol"},[r("div",{staticClass:"ao__label_inputs pts__pattern"},[r("p",[t._v("PATTERN")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.pattern,expression:"pattern"}],attrs:{maxlength:"10"},domProps:{value:t.pattern},on:{input:function(e){e.target.composing||(t.pattern=e.target.value)}}})]),r("div",{staticClass:"ao__label_inputs pts__type"},[r("p",[t._v("TYPE")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.type,expression:"type"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.type=e.target.multiple?r:r[0]}}},t._l(t.tradeType,(function(e){return r("option",{key:e},[t._v(t._s(e))])})),0)]),r("div",{staticClass:"ao__label_inputs pts__symbol"},[r("p",[t._v("SYMBOL")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.symbol,expression:"symbol"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.symbol=e.target.multiple?r:r[0]}}},t._l(t.tradeSymbol,(function(e){return r("option",{key:e},[t._v(t._s(e))])})),0)])]),r("div",{staticClass:"ao__date_inputs"},[r("div",{staticClass:"ao__label_inputs di__date"},[r("p",[t._v("DATE")]),r("diV",[r("p",[t._v(t._s(t.constructDate))])])],1),r("div",{staticClass:"ao__label_inputs di__hours"},[r("p",[t._v("HOUR")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.hour,expression:"hour"}],attrs:{maxlength:"2"},domProps:{value:t.hour},on:{input:function(e){e.target.composing||(t.hour=e.target.value)}}})]),r("div",{staticClass:"ao__label_inputs di__minutes"},[r("p",[t._v("MINUTE")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.minute,expression:"minute"}],attrs:{maxlength:"2"},domProps:{value:t.minute},on:{input:function(e){e.target.composing||(t.minute=e.target.value)}}})])]),r("div",{staticClass:"ao__buttons_container"},[r("div",{staticClass:"base_button orange",on:{click:t.handleSearch}},[r("p",[t._v("SEARCH")])]),r("div",{class:{base_button:!0,blue:!0,disabled:""===t.searchPattern},on:{click:t.handleSubmit}},[r("p",[t._v("SUBMIT")])])])])},u=[],l=(r("96cf"),r("3b8d")),p=["January","February","March","April","May","June","July","August","September","October","November","December"],d=["BUY","SELL"],_=["EURUSD","USDCAD","USDJPY","AUDUSD"],h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"base_card_wrapper"},[t._t("default")],2)},v=[],b={name:"BaseCard"},f=b,g=(r("a57c"),r("2877")),O=Object(g["a"])(f,h,v,!1,null,"23a267c0",null),m=O.exports;function y(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?y(r,!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):y(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var P={name:"AddOrder",components:{BaseCard:m},data:function(){return{pattern:"",type:"BUY",tradeType:d,symbol:"EURUSD",tradeSymbol:_,year:"",month:"",day:"",hour:"",minute:""}},computed:w({},Object(i["d"])(["convertedPattern","searchPattern","searchBull","searchBear"]),{constructDate:function(){return"".concat(p[this.month]," ").concat(this.day,", ").concat(this.year)}}),methods:w({},Object(i["c"])(["updateToast","updateSearchPattern","updateSearchBull","updateSearchBear","updateBlockUi","updateConvertedPattern"]),{},Object(i["b"])(["appendNewOrder","isPatternExist"]),{validateInputs:function(){var t=Boolean(""!==this.pattern&&10===this.pattern.length&&""!==this.type&&""!==this.symbol&&""!==this.hour&&""!==this.minute);return t||this.updateToast({type:"failed",message:"Please complete the field."}),t},handleSearch:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.updateBlockUi({blockUi:!0}),e=this.validateInputs(),!e){t.next=9;break}return t.next=5,this.isPatternExist({pattern:this.pattern});case 5:r=t.sent,this.updateSearchPattern({searchPattern:r?r.pattern:""}),this.updateSearchBull({searchBull:r?r.up:0}),this.updateSearchBear({searchBear:r?r.down:0});case 9:this.updateBlockUi({blockUi:!1});case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleSubmit:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""===this.searchPattern){t.next=11;break}if(this.updateBlockUi({blockUi:!0}),e=this.validateInputs(),!e){t.next=10;break}return t.next=6,this.appendNewOrder({pattern:this.pattern,type:this.type,symbol:this.symbol,createdAt:new Date(this.year,this.month,this.day,this.hour,this.minute),up:this.searchBull,down:this.searchBear});case 6:this.pattern="",this.updateSearchPattern({searchPattern:""}),this.updateSearchBull({searchBull:0}),this.updateSearchBear({searchBear:0});case 10:this.updateBlockUi({blockUi:!1});case 11:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}),watch:{convertedPattern:function(t){""!==t&&(this.pattern=t,this.updateConvertedPattern({convertedPattern:""}))}},created:function(){var t=new Date;this.year=t.getFullYear(),this.month=t.getMonth(),this.day=t.getDate(),this.hour=t.getHours(),this.minute=t.getMinutes()}},C=P,j=(r("dfb7"),Object(g["a"])(C,c,u,!1,null,"6cb669f5",null)),D=j.exports,k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("BaseCard",{staticClass:"add_pattern_wrapper"},[r("div",{staticClass:"ap__label_input"},[r("p",[t._v("PATTERN")]),r("div",{staticClass:"li_input_button"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.pattern,expression:"pattern"}],attrs:{maxlength:"10"},domProps:{value:t.pattern},on:{input:function(e){e.target.composing||(t.pattern=e.target.value)}}}),r("div",{staticClass:"base_button blue",on:{click:t.addPattern}},[r("p",[t._v("Add")])])])]),r("div",{staticClass:"ap__existed_edit"},[r("p",[t._v("EXISTED")]),r("div",{staticClass:"ee__pattern_status"},[r("div",{staticClass:"ps__label_value lv__pattern"},[r("p",[t._v("PATTERN")]),r("div",[r("p",[t._v(t._s(t.savedPattern))])])]),r("div",{staticClass:"ps__label_value lv__up"},[r("p",[t._v("UP")]),r("div",[r("p",[t._v(t._s(t.addZeros(t.savedUp))+" ("),r("span",[t._v("+"+t._s(t.upPlus))]),t._v(")")])])]),r("div",{staticClass:"ps__label_value lv__down"},[r("p",[t._v("DOWN")]),r("div",[r("p",[t._v(t._s(t.addZeros(t.saveDown))+" ("),r("span",[t._v("+"+t._s(t.downPlus))]),t._v(")")])])])]),r("div",{staticClass:"ee__buttons_section"},[r("div",{staticClass:"bs__edit_buttons"},[r("div",{staticClass:"base_button orange",on:{click:t.addUp}},[r("p",[t._v("ADD UP")])]),r("div",{staticClass:"base_button orange",on:{click:t.addDown}},[r("p",[t._v("ADD DOWN")])]),r("div",{staticClass:"base_button orange",on:{click:t.resetValues}},[r("p",[t._v("RESET")])])]),r("div",{staticClass:"base_button blue",on:{click:t.saveChanges}},[r("p",[t._v("SAVE")])])])])])},S=[];r("6b54");function x(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function E(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?x(r,!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):x(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var B={name:"AddPattern",components:{BaseCard:m},data:function(){return{isExist:!1,pattern:"",savedRowNumber:0,savedPattern:"XXXXXXXXXX",savedUp:0,saveDown:0,upPlus:0,downPlus:0}},methods:E({},Object(i["c"])(["updateToast","updateBlockUi"]),{},Object(i["b"])(["appendNewPattern","isPatternExist","updatePattern"]),{addZeros:function(t){var e=t.toString();while(e.length<3)e="0".concat(e);return e},addPattern:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.updateBlockUi({blockUi:!0}),10!==this.pattern.length){t.next=21;break}return t.next=4,this.isPatternExist({pattern:this.pattern});case 4:if(e=t.sent,e){t.next=14;break}return t.next=8,this.appendNewPattern({pattern:this.pattern,up:0,down:0});case 8:this.isExist=!1,this.savedPattern=this.pattern,this.savedUp=0,this.saveDown=0,t.next=19;break;case 14:this.isExist=!0,this.savedRowNumber=e.rowNumber,this.savedPattern=e.pattern,this.savedUp=e.up,this.saveDown=e.down;case 19:t.next=22;break;case 21:this.updateToast({type:"failed",message:"Please provide correct pattern."});case 22:this.pattern="",this.updateBlockUi({blockUi:!1});case 24:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),addUp:function(){this.upPlus++},addDown:function(){this.downPlus++},resetValues:function(){this.upPlus=0,this.downPlus=0},saveChanges:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.updateBlockUi({blockUi:!0}),t.next=3,this.updatePattern({rowNumber:this.savedRowNumber,pattern:this.savedPattern,up:this.savedUp+this.upPlus,down:this.saveDown+this.downPlus});case 3:this.isExist=!1,this.pattern="",this.savedRowNumber=0,this.savedPattern="",this.savedUp=0,this.saveDown=0,this.upPlus=0,this.downPlus=0,this.updateBlockUi({blockUi:!1});case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()})},U=B,N=(r("6bc6"),Object(g["a"])(U,k,S,!1,null,"e3810a30",null)),R=N.exports,A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("BaseCard",{staticClass:"log_in_wrapper"},[r("div",{staticClass:"li__welcome_status"},[r("p",[t._v("Welcome!")]),r("div",{staticClass:"ws__status"},[r("p",[t._v("STATUS:")]),r("p",{class:{s__value:!0,s__connect:t.isSignedIn,s__disconnect:!t.isSignedIn}},[t._v("\n                "+t._s(t.isSignedIn?"CONNECTED":"DISCONNECTED")+"\n            ")])])]),r("div",{staticClass:"li__buttons"},[r("div",{staticClass:"base_button orange",on:{click:t.signOut}},[r("p",[t._v("Disconnect")])]),r("div",{staticClass:"base_button blue",on:{click:t.signIn}},[r("p",[t._v("Connect")])])])])},I=[];function T(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function X(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?T(r,!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):T(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var L={name:"LogIn",components:{BaseCard:m},computed:X({},Object(i["d"])(["isSignedIn"])),methods:X({},Object(i["b"])(["signInAuth","signOutAuth"]),{signIn:function(){this.signInAuth()},signOut:function(){this.signOutAuth()}})},H=L,M=(r("f33e"),Object(g["a"])(H,A,I,!1,null,"51dbdfb7",null)),W=M.exports,$=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("BaseCard",{staticClass:"order_history_wrapper"},[r("div",{staticClass:"oh__header"},[r("p",{staticClass:"h__title"},[t._v("ORDER HISTORY")]),r("p",[r("span",{staticClass:"h__win"},[t._v(t._s(t.winCount))]),t._v("/"),r("span",{staticClass:"h__lose"},[t._v(t._s(t.loseCount))])])]),r("div",{staticClass:"oh__pagination_items"},[r("div",{staticClass:"pi__pagination_control"},[r("p",[t._v(t._s(t.selectedPage+1))]),r("div",{staticClass:"pc__left_right"},[r("i",{staticClass:"material-icons",on:{click:t.handlePrev}},[t._v("keyboard_arrow_left")]),r("i",{staticClass:"material-icons",on:{click:t.handleNext}},[t._v("keyboard_arrow_right")])])]),t._l(t.selectedPagination,(function(t,e){return r("OrderCard",{key:"history-"+e,attrs:{order:t,hasButtons:!1}})}))],2)])},Y=[],q=r("75fc"),Z=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"order_card_wrapper",on:{click:t.selectOrder}},[t.isHighlight?r("span"):t._e(),r("div",{staticClass:"oc__date_symbol_pattern"},[r("div",{staticClass:"dsp__text"},[r("p",{staticClass:"t__big"},[t._v(t._s(t.constructTime(t.order.date)))]),r("p",[t._v(t._s(t.constructDate(t.order.date)))])]),r("div",{staticClass:"dsp__text"},[r("p",{staticClass:"t__big"},[t._v(t._s(t.order.symbol))]),r("div",{staticClass:"t__pattern_up_down"},[r("p",[t._v(t._s(t.order.pattern))]),t.hasButtons?r("div",{staticClass:"pud__icon_stats"},[r("i",{staticClass:"material-icons"},[t._v("poll")]),r("p",[r("span",{class:{is__green:t.order.up>t.order.down}},[t._v(t._s(t.order.up||0))]),r("span",[t._v(":")]),r("span",{class:{is__red:t.order.up<t.order.down}},[t._v(t._s(t.order.down||0))])])]):t._e()])])]),r("div",{staticClass:"oc__type_buttons"},[r("div",{class:{tb__type:!0,tb__buy:"BUY"===t.order.type,tb__sell:"SELL"===t.order.type}},[r("span"),r("p",[t._v(t._s(t.order.type))])]),t.hasButtons?r("div",{staticClass:"tb__buttons"},[r("div",{staticClass:"base_button orange",on:{click:function(e){return t.handleButtons(e,"LOSE")}}},[r("p",[t._v("LOSE")])]),r("div",{staticClass:"base_button blue",on:{click:function(e){return t.handleButtons(e,"WIN")}}},[r("p",[t._v("WIN")])])]):r("div",{staticClass:"tb__result"},[r("p",{class:{r__is_win:"WIN"===t.order.result}},[t._v(t._s(t.order.result))])])])])},J=[],V={name:"OrderCard",props:{order:{type:Object,required:!0},hasButtons:{type:Boolean,required:!0}},data:function(){return{isHighlight:!1}},methods:{constructTime:function(t){var e=t.getHours().toString(),r=t.getMinutes().toString();return e.length<2&&(e="0".concat(e)),r.length<2&&(r="0".concat(r)),"".concat(e,":").concat(r)},constructDate:function(t){var e="";return e+=t.getDate(),e+=" ".concat(p[t.getMonth()].substring(0,3).toUpperCase(),". "),e+=t.getFullYear(),e},selectOrder:function(){this.isHighlight=!this.isHighlight},handleButtons:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.stopPropagation(),this.$emit("result",r);case 2:case"end":return t.stop()}}),t,this)})));function e(e,r){return t.apply(this,arguments)}return e}()}},F=V,G=(r("8cfc"),Object(g["a"])(F,Z,J,!1,null,"770a2aa2",null)),z=G.exports;function K(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Q(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?K(r,!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):K(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var tt={name:"OrderHistory",components:{BaseCard:m,OrderCard:z},data:function(){return{selectedPage:0,winCount:0,loseCount:0}},computed:Q({},Object(i["d"])(["isSignedIn","orderHistory"]),{buildPagination:function(){return this.helperBuild(this.orderHistory)},selectedPagination:function(){return this.buildPagination[this.selectedPage]}}),methods:Q({},Object(i["c"])(["updateBlockUi"]),{},Object(i["b"])(["getAllOrderHistory"]),{helperBuild:function(t){this.winCount=0,this.loseCount=0;for(var e=[],r=[],n=0;n<t.length;n++){var a=t[n];"WIN"===a.result?this.winCount++:this.loseCount++,r.length<10?r.push(a):(e.push(Object(q["a"])(r)),r=[a])}return e},handlePrev:function(){0!==this.selectedPage&&this.selectedPage--},handleNext:function(){this.buildPagination.length!==this.selectedPage+1&&this.selectedPage++}}),watch:{isSignedIn:function(t){t&&this.getAllOrderHistory()}}},et=tt,rt=(r("4279"),Object(g["a"])(et,$,Y,!1,null,"67009dd3",null)),nt=rt.exports,at=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("BaseCard",{staticClass:"order_list_wrapper"},[r("div",{staticClass:"ol__header_count"},[r("p",[t._v("TRADE")]),r("p",[t._v(t._s(t.orderList.length))])]),t._l(t.orderList,(function(e,n){return r("OrderCard",{key:"history-"+n+"-"+e.pattern,attrs:{order:e,hasButtons:!0},on:{result:function(e){return t.isWinLose(e,n)}}})}))],2)},st=[];function it(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function ot(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?it(r,!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):it(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var ct={name:"OrderList",components:{BaseCard:m,OrderCard:z},computed:ot({},Object(i["d"])(["isSignedIn","orderList","rightOrder","wrongOrder"])),methods:ot({},Object(i["c"])(["updateBlockUi","updateOrderList"]),{},Object(i["b"])(["getAllOrdered","isPatternExist","updatePattern","deleteOrder","updateOrderResult","appendNewHistory"]),{isWinLose:function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e,r){var n,a,s,i=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.updateBlockUi({blockUi:!0}),n=this.orderList[r],t.next=4,this.isPatternExist({pattern:n.pattern});case 4:if(a=t.sent,!a){t.next=18;break}if(a.up===a.down){t.next=9;break}return t.next=9,this.updateOrderResult({isRight:"WIN"===e});case 9:if(s=function(){var t=Object(l["a"])(regeneratorRuntime.mark((function t(e){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r="UP"===e?++a.up:a.up,n="DOWN"===e?++a.down:a.down,t.next=4,i.updatePattern({rowNumber:a.rowNumber,pattern:a.pattern,up:r,down:n});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),"BUY"!==n.type){t.next=15;break}return t.next=13,s("WIN"===e?"UP":"DOWN");case 13:t.next=18;break;case 15:if("SELL"!==n.type){t.next=18;break}return t.next=18,s("WIN"===e?"DOWN":"UP");case 18:return t.next=20,this.appendNewHistory({pattern:n.pattern,type:n.type,symbol:n.symbol,result:e,createdAt:n.date});case 20:return t.next=22,this.deleteOrder({rowNumber:n.rowNumber});case 22:this.updateBlockUi({blockUi:!1});case 23:case"end":return t.stop()}}),t,this)})));function e(e,r){return t.apply(this,arguments)}return e}()}),watch:{isSignedIn:function(t){t&&this.getAllOrdered()}}},ut=ct,lt=(r("56b5"),Object(g["a"])(ut,at,st,!1,null,"45cae8d3",null)),pt=lt.exports,dt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("BaseCard",{staticClass:"order_result_wrapper"},[r("div",{staticClass:"or__result_bar"},[r("span",{style:{width:t.getRightPercent}})]),r("div",{staticClass:"or__icon_value"},[r("div",[r("i",{staticClass:"material-icons mood"},[t._v("mood")]),r("p",[t._v(t._s(t.rightOrder))])]),r("div",[r("i",{staticClass:"material-icons mood_bad"},[t._v("mood_bad")]),r("p",[t._v(t._s(t.wrongOrder))])])])])},_t=[];function ht(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function vt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?ht(r,!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ht(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var bt={name:"OrderResult",components:{BaseCard:m},computed:vt({},Object(i["d"])(["isSignedIn","rightOrder","wrongOrder"]),{getRightPercent:function(){return"".concat(this.rightOrder/(this.rightOrder+this.wrongOrder)*100,"%")}}),methods:vt({},Object(i["b"])(["getMisc"])),watch:{isSignedIn:function(t){t&&this.getMisc()}}},ft=bt,gt=(r("bf4e"),Object(g["a"])(ft,dt,_t,!1,null,"1631621c",null)),Ot=gt.exports,mt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("BaseCard",{staticClass:"pattern_converter_wrapper"},[r("div",{staticClass:"pc__input_output"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.pattern,expression:"pattern"}],attrs:{maxlength:"10"},domProps:{value:t.pattern},on:{input:function(e){e.target.composing||(t.pattern=e.target.value)}}}),r("div",{staticClass:"io__copy_text"},[r("i",{staticClass:"material-icons",on:{click:t.copyPattern}},[t._v("file_copy")]),r("p",[t._v(t._s(t.converted))])])]),r("div",{staticClass:"base_button blue",on:{click:t.convertPattern}},[r("p",[t._v("CONVERT")])])])},yt=[];r("28a5");function wt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Pt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?wt(r,!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):wt(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Ct={name:"PatternConverter",components:{BaseCard:m},data:function(){return{pattern:"",converted:"XXXXXXXXXX"}},methods:Pt({},Object(i["c"])(["updateToast","updateConvertedPattern"]),{copyPattern:function(){this.updateConvertedPattern({convertedPattern:this.converted})},convertPattern:function(){10===this.pattern.length?this.converted=this.pattern.split("").reverse().join(""):this.updateToast({type:"failed",message:"Please provide 10 digits."})}})},jt=Ct,Dt=(r("bb1b"),Object(g["a"])(jt,mt,yt,!1,null,"1e819f0e",null)),kt=Dt.exports,St=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("BaseCard",{staticClass:"pattern_stats_wrapper"},[r("div",{staticClass:"ps__up_down"},[r("p",[t._v("HIGHEST")]),r("div",{staticClass:"ud__up"},[r("p",[t._v(t._s(t.addZeros(t.highestUpDown.up)))]),r("i",{staticClass:"material-icons"},[t._v("trending_up")])]),r("div",{staticClass:"ud__down"},[r("p",[t._v(t._s(t.addZeros(t.highestUpDown.down)))]),r("i",{staticClass:"material-icons"},[t._v("trending_down")])])]),r("div",{staticClass:"ps__equal_graph"},[r("div",{staticClass:"eg__color_value"},t._l(t.equalUpDown,(function(e,n){return r("div",{key:"label-"+n,staticClass:"cv__item"},[r("div",{staticClass:"i__circle"},t._l(n+2,(function(t){return r("span",{key:"circle-"+n+"-"+t})})),0),r("p",[t._v(t._s(e[0]))]),r("p",[t._v("("+t._s(e[1])+")")])])})),0),r("div",{staticClass:"eg__total"},[r("p",[t._v("TOTAL:")]),r("p",{staticClass:"t__value"},[t._v(t._s(t.totalEqual))])]),r("div",{staticClass:"eg__graph"},t._l(t.equalUpDown,(function(e,n){return r("div",{key:"graph-"+n,staticClass:"g__item",style:{height:e[1]+"px"}},t._l(n+1,(function(t){return r("span",{key:"bar-"+n+"-"+t})})),0)})),0)])])},xt=[];function Et(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Bt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Et(r,!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Et(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Ut={name:"PatternStats",components:{BaseCard:m},computed:Bt({},Object(i["d"])(["highestUpDown","equalUpDown","isSignedIn"]),{totalEqual:function(){return this.equalUpDown.reduce((function(t,e){return t+e[1]}),0)}}),methods:Bt({},Object(i["b"])(["getAllPattern"]),{addZeros:function(t){var e=t.toString();while(e.length<3)e="0".concat(e);return e}}),watch:{isSignedIn:function(t){t&&this.getAllPattern()}}},Nt=Ut,Rt=(r("023c"),Object(g["a"])(Nt,St,xt,!1,null,"4f9190a4",null)),At=Rt.exports,It=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("BaseCard",{staticClass:"search_result_wrapper"},[r("div",{staticClass:"sr__pattern"},[r("p",[t._v("PATTERN")]),r("p",[t._v(t._s(t.parsedPattern))])]),r("div",{staticClass:"sr__up_down"},[r("div",{staticClass:"ud__line_direction ld__up"},[r("p",[t._v(t._s(isNaN(t.upPercent)?0:t.upPercent)),r("span",[t._v("%")])]),r("div",[r("p",[t._v(t._s(t.addZeros(t.searchBull)))]),r("i",{staticClass:"material-icons"},[t._v("trending_up")])])]),r("div",{staticClass:"ud__line_direction ld__down"},[r("p",[t._v(t._s(isNaN(t.upPercent)?0:t.downPercent)),r("span",[t._v("%")])]),r("div",[r("p",[t._v(t._s(t.addZeros(t.searchBear)))]),r("i",{staticClass:"material-icons"},[t._v("trending_down")])])])])])},Tt=[];function Xt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Lt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Xt(r,!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Xt(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Ht={name:"SearchResult",components:{BaseCard:m},data:function(){return{patternResult:"Make a search",goUp:0,goDown:0}},computed:Lt({},Object(i["d"])(["searchPattern","searchBull","searchBear"]),{parsedPattern:function(){return""===this.searchPattern?"XXXXXXXXXX":this.searchPattern},upPercent:function(){return Math.round(this.searchBull/this.sumOfResult*100)},downPercent:function(){return Math.round(this.searchBear/this.sumOfResult*100)},sumOfResult:function(){return this.searchBull+this.searchBear}}),methods:{addZeros:function(t){var e=t.toString();while(e.length<3)e="0".concat(e);return e}}},Mt=Ht,Wt=(r("ca61"),Object(g["a"])(Mt,It,Tt,!1,null,"7280d3d1",null)),$t=Wt.exports;function Yt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function qt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Yt(r,!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Yt(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Zt={name:"AngSwerte",components:{AddOrder:D,AddPattern:R,LogIn:W,OrderHistory:nt,OrderList:pt,OrderResult:Ot,PatternConverter:kt,PatternStats:At,SearchResult:$t},computed:qt({},Object(i["d"])({mahiwaga:function(t){return t.mahiwaga}})),methods:qt({},Object(i["c"])(["updateMahiwaga"]),{},Object(i["b"])(["loadGoogleApi"])),created:function(){this.mahiwaga||this.updateMahiwaga({baraha:o["a"].getCookie("_baraha"),palad:o["a"].getCookie("_palad"),bola:o["a"].getCookie("_bola")}),this.loadGoogleApi()}},Jt=Zt,Vt=(r("3ede"),Object(g["a"])(Jt,n,a,!1,null,"17ef8cfc",null));e["default"]=Vt.exports},4279:function(t,e,r){"use strict";var n=r("775f"),a=r.n(n);a.a},"4fc5":function(t,e,r){},"56b5":function(t,e,r){"use strict";var n=r("3b9b"),a=r.n(n);a.a},"64a1":function(t,e,r){},"6b54":function(t,e,r){"use strict";r("3846");var n=r("cb7c"),a=r("0bfb"),s=r("9e1e"),i="toString",o=/./[i],c=function(t){r("2aba")(RegExp.prototype,i,t,!0)};r("79e5")((function(){return"/a/b"!=o.call({source:"a",flags:"b"})}))?c((function(){var t=n(this);return"/".concat(t.source,"/","flags"in t?t.flags:!s&&t instanceof RegExp?a.call(t):void 0)})):o.name!=i&&c((function(){return o.call(this)}))},"6bc6":function(t,e,r){"use strict";var n=r("e85e"),a=r.n(n);a.a},"775f":function(t,e,r){},"8cfc":function(t,e,r){"use strict";var n=r("184c"),a=r.n(n);a.a},"950c":function(t,e,r){},a57c:function(t,e,r){"use strict";var n=r("c0db"),a=r.n(n);a.a},bb1b:function(t,e,r){"use strict";var n=r("4fc5"),a=r.n(n);a.a},bf4e:function(t,e,r){"use strict";var n=r("f1df"),a=r.n(n);a.a},c0db:function(t,e,r){},ca61:function(t,e,r){"use strict";var n=r("d762"),a=r.n(n);a.a},d762:function(t,e,r){},dfb7:function(t,e,r){"use strict";var n=r("64a1"),a=r.n(n);a.a},e85e:function(t,e,r){},f1df:function(t,e,r){},f33e:function(t,e,r){"use strict";var n=r("30f3"),a=r.n(n);a.a}}]);
//# sourceMappingURL=chunk-e1387a52.42ffc65e.js.map