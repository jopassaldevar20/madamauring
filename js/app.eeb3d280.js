(function(e){function t(t){for(var n,a,s=t[0],i=t[1],c=t[2],p=0,l=[];p<s.length;p++)a=s[p],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(l.length)l.shift()();return u.push.apply(u,c||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==o[s]&&(n=!1)}n&&(u.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},o={app:0},u=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-61aec206":"c8a75906","chunk-a2ea1904":"3825c189"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-61aec206":1,"chunk-a2ea1904":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-61aec206":"9487e7e9","chunk-a2ea1904":"960f1fe7"}[e]+".css",o=i.p+n,u=document.getElementsByTagName("link"),s=0;s<u.length;s++){var c=u[s],p=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(p===n||p===o))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){c=l[s],p=c.getAttribute("data-href");if(p===n||p===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete a[e],d.parentNode.removeChild(d),r(u)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=u);var c,p=document.createElement("script");p.charset="utf-8",p.timeout=120,i.nc&&p.setAttribute("nonce",i.nc),p.src=s(e);var l=new Error;c=function(t){p.onerror=p.onload=null,clearTimeout(d);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,r[1](l)}o[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:p})}),12e4);p.onerror=p.onload=c,document.head.appendChild(p)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/madamauring/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],p=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=p;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},5002:function(e,t,r){"use strict";r("55dd"),r("28a5");t["a"]={deleteCookie:function(e){var t=new Date,r=t.setDate(t.getDate()-1),n=new Date(r);document.cookie="".concat(e,"=;path=/;expires=").concat(n)},getCookie:function(e){var t=document.cookie.split(";"),r=!1;return t.map((function(t){var n=t.trim().split("=");n[0]===e&&(r=n[1])})),r},setCookie:function(e,t){var r=new Date,n=r.setDate(r.getDate()+5),a=new Date(n);document.cookie="".concat(e,"=").concat(t,";expires=").concat(a)},sortArrayByKey:function(e,t){return e.sort((function(e,r){var n=e[t],a=r[t];return n<a?-1:n>a?1:0}))}}},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("TheToast"),r("div",{staticClass:"app__main_container"},[r("router-view")],1),r("BlockUi")],1)},o=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return""!==e.toast.type?r("div",{class:"the_toast_wrapper "+e.toast.type},[r("p",[e._v(e._s(e.toast.message))])]):e._e()},s=[],i=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),c=r("2f62");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(r,!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d={name:"TheToast",computed:l({},Object(c["d"])(["toast"]))},h=d,f=(r("7538"),r("2877")),g=Object(f["a"])(h,u,s,!1,null,"aa75a858",null),m=g.exports,w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.blockUi?r("div",{staticClass:"block_ui_wrapper"},[r("svg",{staticClass:"cc__dashed_circle",attrs:{height:"35px",width:"35px",viewBox:"0 0 32 32"}},[r("circle",{attrs:{cx:"16",cy:"16",r:"15",fill:"none",stroke:"white","stroke-width":"4","stroke-dasharray":"12",opacity:"1"}})])]):e._e()},b=[];function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(r,!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y={name:"BlockUi",computed:O({},Object(c["d"])(["blockUi"]))},j=y,k=(r("ce3a"),Object(f["a"])(j,w,b,!1,null,"61a0a903",null)),R=k.exports,x={name:"app",components:{TheToast:m,BlockUi:R}},P=x,S=(r("5c0b"),Object(f["a"])(P,a,o,!1,null,null,null)),I=S.exports,D=(r("c5f6"),r("28a5"),r("96cf"),r("3b8d")),_=r("75fc"),A=500,N=r("5002");function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(r,!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}n["a"].use(c["a"]);var B=new c["a"].Store({state:{mahiwaga:null,isSignedIn:!1,toast:{type:"",message:""},searchPattern:"",searchBull:0,searchBear:0,blockUi:!1,orderList:[],rightOrder:0,wrongOrder:0,orderResultRowNumber:null},getters:{},mutations:{updateMahiwaga:function(e,t){e.mahiwaga=t},updateIsSignedIn:function(e,t){e.isSignedIn=t.isSignedIn},updateToast:function(e,t){e.toast.type=t.type||"",e.toast.message=t.message||""},updateSearchPattern:function(e,t){e.searchPattern=t.searchPattern},updateSearchBull:function(e,t){e.searchBull=t.searchBull},updateSearchBear:function(e,t){e.searchBear=t.searchBear},updateBlockUi:function(e,t){e.blockUi=t.blockUi},updateOrderList:function(e,t){e.orderList=Object(_["a"])(t.orderList)},updateRightOrder:function(e,t){e.rightOrder=t.rightOrder},updateWrongOrder:function(e,t){e.wrongOrder=t.wrongOrder},updateOrderResultRowNumber:function(e,t){e.orderResultRowNumber=t.orderResultRowNumber}},actions:{loadGoogleApi:function(e){var t=e.commit,r=e.state;window.gapi.load("client:auth2",Object(D["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,window.gapi.client.init({apiKey:r.mahiwaga.palad,clientId:r.mahiwaga.baraha,discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],scope:"https://www.googleapis.com/auth/spreadsheets"});case 3:window.gapi.auth2.getAuthInstance().isSignedIn.listen((function(e){t("updateIsSignedIn",{isSignedIn:e})})),t("updateIsSignedIn",{isSignedIn:window.gapi.auth2.getAuthInstance().isSignedIn.get()}),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),t("updateToast",{type:"failed",message:e.t0});case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))))},signInAuth:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,window.gapi.auth2.getAuthInstance().signIn();case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),signOutAuth:function(){window.gapi.auth2.getAuthInstance().signOut()},getAllOrdered:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,o,u,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,n=t.state,e.prev=1,e.next=4,window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:n.mahiwaga.bola,range:"Order!A2:D1000"});case 4:if(a=e.sent,o=a.result,u=[],o.values&&o.values.length>0)for(s=0;s<o.values.length;s++)i=o.values[s],i.length>0&&u.push({pattern:i[0],type:i[1],symbol:i[2],date:new Date(i[3]),rowNumber:s+2});r("updateOrderList",{orderList:Object(_["a"])(N["a"].sortArrayByKey(u,"date"))}),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),r("updateToast",{type:"failed",message:e.t0});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));function t(t){return e.apply(this,arguments)}return t}(),appendNewOrder:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,u,s,i,c,p,l,d,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.state,o=r.pattern,u=r.type,s=r.symbol,i=r.createdAt,e.prev=2,e.next=5,window.gapi.client.sheets.spreadsheets.values.append({spreadsheetId:a.mahiwaga.bola,range:"Order!A2",valueInputOption:"RAW"},{majorDimension:"ROWS",values:[[o,u,s,i]]});case 5:return c=e.sent,p=c.result.updates.updatedRange.split(":"),l=Number(p[1].substr(1)),d=new Date(i),h={pattern:o,type:u,symbol:s,date:d,rowNumber:l},n("updateOrderList",{orderList:[].concat(Object(_["a"])(a.orderList),[h])}),e.abrupt("return",c);case 14:return e.prev=14,e.t0=e["catch"](2),n("updateToast",{type:"failed",message:e.t0}),e.abrupt("return",!1);case 18:case"end":return e.stop()}}),e,null,[[2,14]])})));function t(t,r){return e.apply(this,arguments)}return t}(),appendNewPattern:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,u,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.state,o=r.pattern,u=r.up,s=r.down,e.prev=2,e.next=5,window.gapi.client.sheets.spreadsheets.values.append({spreadsheetId:a.mahiwaga.bola,range:"Pattern!A2",valueInputOption:"RAW"},{majorDimension:"ROWS",values:[[o,u,s]]});case 5:return i=e.sent,e.abrupt("return",i);case 9:return e.prev=9,e.t0=e["catch"](2),n("updateToast",{type:"failed",message:e.t0}),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));function t(t,r){return e.apply(this,arguments)}return t}(),updatePattern:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,u,s,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.state,o=r.rowNumber,u=r.pattern,s=r.up,i=r.down,e.prev=2,c="Pattern!A".concat(o,":C").concat(o),e.next=6,window.gapi.client.sheets.spreadsheets.values.update({spreadsheetId:a.mahiwaga.bola,range:c,valueInputOption:"RAW"},{majorDimension:"ROWS",values:[[u,s,i]]});case 6:return e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e["catch"](2),n("updateToast",{type:"failed",message:e.t0}),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));function t(t,r){return e.apply(this,arguments)}return t}(),deleteOrder:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,u,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.state,o=r.rowNumber,e.prev=2,u="Order!A".concat(o,":D").concat(o),e.next=6,window.gapi.client.sheets.spreadsheets.values.clear({spreadsheetId:a.mahiwaga.bola,range:u});case 6:s=a.orderList.filter((function(e){return e.rowNumber!==o})),n("updateOrderList",{orderList:s}),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](2),n("updateToast",{type:"failed",message:e.t0});case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));function t(t,r){return e.apply(this,arguments)}return t}(),getMisc:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t){var r,n,a,o,u,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,n=t.state,e.prev=1,e.next=4,window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:n.mahiwaga.bola,range:"Misc!A1:D1"});case 4:for(a=e.sent,o=a.result.values,u=0;u<o.length;u++)s=o[u],"order-results"===s[0]&&(r("updateOrderResultRowNumber",{orderResultRowNumber:u+1}),r("updateRightOrder",{rightOrder:Number(s[1])}),r("updateWrongOrder",{wrongOrder:Number(s[2])}));e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](1),r("updateToast",{type:"failed",message:e.t0});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));function t(t){return e.apply(this,arguments)}return t}(),updateOrderResult:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,a=t.state,o=r.isRight,e.prev=2,o?n("updateRightOrder",{rightOrder:a.rightOrder+1}):n("updateWrongOrder",{wrongOrder:a.wrongOrder+1}),e.next=6,window.gapi.client.sheets.spreadsheets.values.update({spreadsheetId:a.mahiwaga.bola,range:"Misc!A".concat(a.orderResultRowNumber,":C").concat(a.orderResultRowNumber),valueInputOption:"RAW"},{majorDimension:"ROWS",values:[["order-results",a.rightOrder,a.wrongOrder]]});case 6:return e.abrupt("return",!0);case 9:return e.prev=9,e.t0=e["catch"](2),n("updateToast",{type:"failed",message:e.t0}),e.abrupt("return",!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));function t(t,r){return e.apply(this,arguments)}return t}(),isPatternExist:function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t,r){var n,a,o,u,s,i,c,p,l,d,h,f,g,m;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n=t.commit,a=t.state,o=r.pattern,e.prev=2,u=2,s=A+1,i=function(){var e=Object(D["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:a.mahiwaga.bola,range:t});case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),c=null,p=!0;case 8:return e.next=10,i("Pattern!A".concat(u,":C").concat(s));case 10:if(l=e.sent,d=l.result.values,d){for(h=d,f=0;f<h.length;f++)g=h[f],m=u++,g[0]===o&&(c={pattern:g[0],up:Number(g[1]),down:Number(g[2]),rowNumber:m});u=s+1,s=u+A-1,p=!c&&h.length===A}else p=!1;case 13:if(p){e.next=8;break}case 14:return e.abrupt("return",c?E({},c):null);case 17:return e.prev=17,e.t0=e["catch"](2),n("updateToast",{type:"failed",message:e.t0}),e.abrupt("return",!1);case 21:case"end":return e.stop()}}),e,null,[[2,17]])})));function t(t,r){return e.apply(this,arguments)}return t}()}}),C=(r("7f7f"),r("8c4f"));n["a"].use(C["a"]);var L=new C["a"]({mode:"history",base:"/madamauring/",routes:[{path:"/",name:"kapalaran",component:function(){return r.e("chunk-61aec206").then(r.bind(null,"a35f"))},meta:{requiresAuth:!0}},{path:"/mahiwagang-bola",name:"mahiwagang-bola",component:function(){return r.e("chunk-a2ea1904").then(r.bind(null,"4175"))},meta:{removeSides:!0}}]});L.beforeEach((function(e,t,r){var n=Boolean(N["a"].getCookie("_baraha")&&N["a"].getCookie("_palad")&&N["a"].getCookie("_bola"));n&&"mahiwagang-bola"!==e.name?r({name:"mahiwagang-bola"}):n||"kapalaran"===e.name?r():r({name:"kapalaran"})}));var W=L;n["a"].config.productionTip=!1,new n["a"]({router:W,store:B,render:function(e){return e(I)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("e332"),a=r.n(n);a.a},7538:function(e,t,r){"use strict";var n=r("f694"),a=r.n(n);a.a},aae3:function(e,t,r){},ce3a:function(e,t,r){"use strict";var n=r("aae3"),a=r.n(n);a.a},e332:function(e,t,r){},f694:function(e,t,r){}});
//# sourceMappingURL=app.eeb3d280.js.map