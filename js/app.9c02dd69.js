(function(e){function t(t){for(var n,s,r=t[0],c=t[1],l=t[2],d=0,p=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),o()}function o(){for(var e,t=0;t<i.length;t++){for(var o=i[t],n=!0,r=1;r<o.length;r++){var c=o[r];0!==a[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=o[0]))}return e}var n={},a={app:0},i=[];function s(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=n,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/meindoc-appoint/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var u=c;i.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);var n=o("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{style:{background:"linear-gradient(120deg,#7f7fd5,#86a8e7,#91eae4)"},attrs:{id:"app"}},[n("img",{attrs:{src:o("a314"),alt:"",width:"500",height:"600"}}),n("h1",{staticClass:"appDescription"},[e._v(e._s(e.description))]),n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Appointment")])],1),n("router-view")],1)},i=[],s={storeName:"Meindoc",description:"Transforming surgical care. The best place to take care of you"},r={name:"app",data(){return{storeName:s.storeName,description:s.description}},mounted(){document.title=this.storeName}},c=r,l=(o("5c0b"),o("2877")),u=Object(l["a"])(c,a,i,!1,null,null,null),d=u.exports,p=o("8c4f"),h=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h1",{staticClass:"subtitle"},[e._v("Choose a date")]),o("date-picker",{attrs:{value:e.date,lang:"en","first-day-of-week":1,"not-before":new Date},on:{change:e.updateDate}}),null!==e.date?o("div",[o("br"),o("br"),o("b-modal",{attrs:{active:e.showGeneratedCode},on:{"update:active":function(t){e.showGeneratedCode=t}}},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-content"},[o("h2",{staticClass:"subtitle"},[e._v("Your appointment is successfully booked. \n                    "),o("br"),e._v(" Thank you for your choice! We'll contact you in future")]),o("br"),o("h1",{staticClass:"title"},[e._v("Your reservation code: "+e._s(e.generatedCode))])])])]),o("b-modal",{attrs:{active:e.showBookingModal},on:{"update:active":function(t){e.showBookingModal=t}}},[o("div",{staticClass:"card"},[o("div",{staticClass:"card-content"},[o("p",[e._v("We need some data to make a reservation ")]),o("br"),o("b-field",{attrs:{message:" "}},[o("b-input",{attrs:{required:"",placeholder:"Name"},model:{value:e.newBooking.name,callback:function(t){e.$set(e.newBooking,"name",t)},expression:"newBooking.name"}})],1),o("b-field",{attrs:{message:" "}},[o("b-input",{attrs:{required:"",type:"text",placeholder:"Phone"},model:{value:e.newBooking.phone,callback:function(t){e.$set(e.newBooking,"phone",t)},expression:"newBooking.phone"}})],1),o("b-field",{attrs:{message:" "}},[o("b-input",{attrs:{required:"",type:"email",placeholder:"Email"},model:{value:e.newBooking.email,callback:function(t){e.$set(e.newBooking,"email",t)},expression:"newBooking.email"}})],1),o("b-field",{attrs:{message:" "}},[o("b-input",{attrs:{required:"",type:"text",placeholder:"Your Position"},model:{value:e.newBooking.position,callback:function(t){e.$set(e.newBooking,"position",t)},expression:"newBooking.position"}})],1),o("b-field",{attrs:{message:" "}},[o("b-input",{attrs:{required:"",type:"text",placeholder:"Company Name"},model:{value:e.newBooking.company,callback:function(t){e.$set(e.newBooking,"company",t)},expression:"newBooking.company"}})],1),o("b-field",{attrs:{label:"Which platform would you like to contact?"}},[o("b-select",{attrs:{placeholder:"Platform"},model:{value:e.newBooking.platform,callback:function(t){e.$set(e.newBooking,"platform",t)},expression:"newBooking.platform"}},[o("option",{attrs:{value:"Zoom"}},[e._v("Zoom")]),o("option",{attrs:{value:"Microsoft Teams"}},[e._v("Microsoft Teams")])])],1),o("b-field",{attrs:{message:" "}},[o("b-input",{attrs:{type:"text",placeholder:"E-mail address of the guests (Option). Up to 10 additional guests."},model:{value:e.newBooking.group,callback:function(t){e.$set(e.newBooking,"group",t)},expression:"newBooking.group"}})],1),o("button",{staticClass:"button is-primary",class:{"is-loading":e.isBooking},attrs:{disabled:!e.isFormValid()},on:{click:e.doBooking}},[e._v("Book an appointment\n                    ")])],1)])]),o("h1",{staticClass:"title"},[e._v(e._s(e.date.toLocaleDateString())+" schedule")]),e.isOpenOnDate?o("div",{staticClass:"columns is-multiline",staticStyle:{margin:"2em"}},e._l(e.calendar,(function(t){return o("div",{staticClass:"column is-2"},[o("div",{staticClass:"fixture",class:{booked:t.isBooked,free:!t.isBooked},on:{click:function(o){return e.showModal(t)}}},[e._v("\n                    "+e._s(t.hour)+":"+e._s(("0"+t.minutes).slice(-2))+"\n                ")])])})),0):o("div",[o("br"),o("br"),o("h1",{staticClass:"subtitle has-text-danger"},[e._v("We are closed this day. Please pick another one in the\n                calendar")])])],1):e._e()],1)},m=[],g=o("2f62"),f=o("ea76"),w=o.n(f),b={hours:[{hour:9,minutes:0},{hour:9,minutes:30},{hour:10,minutes:0},{hour:10,minutes:30},{hour:11,minutes:0},{hour:11,minutes:30},{hour:12,minutes:0},{hour:12,minutes:30},{hour:13,minutes:0},{hour:13,minutes:30},{hour:16,minutes:30},{hour:17,minutes:0}],openingDays:[1,2,3,4,5]},k={name:"home",components:{DatePicker:w.a},data(){let e=new Date;return e.setHours(12,0,0),{newBooking:{name:"",phone:"",email:"",position:"",company:"",platform:"",group:"",fixture:{}},isBooking:!1,showBookingModal:!1,date:e,schedule:b.hours,generatedCode:null,showGeneratedCode:!1}},methods:{...Object(g["b"])("bookings",["create","getReservations"]),doBooking:function(){this.isBooking=!0;let e=new Date(this.date.toDateString()+" 12:00:00");e.setHours(this.newBooking.fixture.hour,this.newBooking.fixture.minutes,0);let t={name:this.newBooking.name,phone:this.newBooking.phone,email:this.newBooking.email,position:this.newBooking.position,company:this.newBooking.company,platform:this.newBooking.platform,group:this.newBooking.group,date:e};this.create(t).then(e=>{this.generatedCode=e,this.showBookingModal=!1,this.isBooking=!1,this.showGeneratedCode=!0,this.getReservations()})},showModal:function(e){e.isBooked||(this.newBooking={name:"",phone:"",email:"",position:"",company:"",platform:"",group:"",fixture:e},this.showBookingModal=!0)},isFormValid:function(){return this.newBooking.name.length>0&&this.newBooking.phone.length},updateDate:function(e){let t=new Date(e);t.setHours(12),this.date=t}},computed:{...Object(g["c"])("bookings",["reservations"]),isOpenOnDate(){return b.openingDays.includes(this.date.getDay())},calendar:function(){let e=[];return this.schedule.forEach(t=>{let o=new Date(this.date.toDateString()+" 12:00:00");if(o.setHours(t.hour,t.minutes,0),o>=new Date){let n=this.reservations.filter(e=>e.date.seconds===o.getTime()/1e3);e.push({hour:t.hour,minutes:t.minutes,isBooked:1===n.length})}}),e}},created(){this.getReservations()}},v=k,B=(o("cccb"),Object(l["a"])(v,h,m,!1,null,null,null)),y=B.exports;n["a"].use(p["a"]);var _=new p["a"]({routes:[{path:"/",name:"home",component:y}]}),x=(o("db4d"),o("59ca")),D=o.n(x),C=(o("e71f"),{apiKey:"AIzaSyBIwY3-8dUwRdW5GihUQIkCBXuApE7n2hw",authDomain:"test-aaece.firebaseapp.com",projectId:"test-aaece",storageBucket:"test-aaece.appspot.com",messagingSenderId:"1028949912103",appId:"1:1028949912103:web:fdb2644c715ab7a8e3bc02",measurementId:"G-2JEVNP4MY5"}),O={namespaced:!0,state:{reservations:[]},getters:{},mutations:{setReservations:function(e,t){e.reservations=t}},actions:{async getReservations({rootState:e,commit:t}){let o=new Date((new Date).setDate((new Date).getDate()-1)),n=e.db.collection("bookings").where("date",">",o),a=await n.get(),i=[];a.docs.forEach((function(e){i.push(e.data())})),t("setReservations",i)},async create({rootState:e},t){let o=t.date.getTime()/1e3+Math.floor(10*Math.random()+1).toString(),n={date:t.date,code:o};return await e.db.collection("bookings").add(n),t.code=o,await e.db.collection("details").add(t),o},async cancel({rootState:e,dispatch:t},o){let n=await D.a.firestore().collection("bookings").where("code","==",o.code).get(),a=n.docs[0].id;await D.a.firestore().collection("bookings").doc(a).delete();let i=await D.a.firestore().collection("details").where("code","==",o.code).get(),s=i.docs[0].id;await D.a.firestore().collection("details").doc(s).delete(),D.a.auth().currentUser.email||await t("user/logout",{},{root:!0})}}},M=(o("ea7b"),o("bc3a")),P=o.n(M);let S="europe-west3";var j={namespaced:!0,state:{isAuth:!1,data:null},getters:{},mutations:{setData:function(e,t){e.isAuth=!0,e.data=t},logout:function(e){e.isAuth=!1,e.isAuthAdmin=!1,e.data=null}},actions:{getToken({commit:e},t){return new Promise((o,n)=>{P.a.post("https://"+S+"1-"+C.projectId+".cloudfunctions.net/createToken",{data:{code:t}}).then(a=>{let i=a.data;i.success?D.a.auth().signInWithCustomToken(i.customToken).then(()=>{D.a.firestore().collection("details").where("code","==",t).get().then(t=>{if(t.empty)n();else{let n=t.docs[0];e("setData",n.data()),o()}})}):n()})})},logout({commit:e}){return new Promise(t=>{let o=D.a.auth().currentUser;D.a.auth().signOut().then(()=>{o.email?window.location.reload():(e("logout"),t())})})}}};D.a.initializeApp(C),n["a"].use(g["a"]);const T={db:D.a.firestore()};var $=new g["a"].Store({state:T,modules:{bookings:O,user:j},actions:{init:function(e){return new Promise(t=>{e.dispatch("bookings/getReservations").then(()=>t())})}}}),A=o("289d"),I=o("67b0");function E(){new n["a"]({router:_,store:$,render:e=>e(d)}).$mount("#app")}o("e612"),n["a"].use(A["a"]),n["a"].use(I["a"]),n["a"].config.productionTip=!1,$.dispatch("init").then(()=>{E()})},"5c0b":function(e,t,o){"use strict";o("e332")},a314:function(e,t,o){e.exports=o.p+"img/Logo.5265f3e1.png"},cccb:function(e,t,o){"use strict";o("d563")},d563:function(e,t,o){},e332:function(e,t,o){},e612:function(e,t,o){}});
//# sourceMappingURL=app.9c02dd69.js.map