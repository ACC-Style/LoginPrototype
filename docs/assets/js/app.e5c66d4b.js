(function(t){function e(e){for(var s,r,o=e[0],l=e[1],c=e[2],u=0,d=[];u<o.length;u++)r=o[u],n[r]&&d.push(n[r][0]),n[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);p&&p(e);while(d.length)d.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var o=a[r];0!==n[o]&&(s=!1)}s&&(i.splice(e--,1),t=l(l.s=a[0]))}return t}var s={},r={app:0},n={app:0},i=[];function o(t){return l.p+"assets/js/"+({Reset:"Reset",about:"about"}[t]||t)+"."+{Reset:"1632ebdc",about:"a914a2a9"}[t]+".js"}function l(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(t){var e=[],a={Reset:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise(function(e,a){for(var s="assets/css/"+({Reset:"Reset",about:"about"}[t]||t)+"."+{Reset:"0af4a2af",about:"31d6cfe0"}[t]+".css",r=l.p+s,n=document.getElementsByTagName("link"),i=0;i<n.length;i++){var o=n[i],c=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(c===s||c===r))return e()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){o=u[i],c=o.getAttribute("data-href");if(c===s||c===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var s=e&&e.target&&e.target.src||r,n=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");n.request=s,a(n)},d.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){r[t]=0}));var s=n[t];if(0!==s)if(s)e.push(s[2]);else{var i=new Promise(function(e,a){s=n[t]=[e,a]});e.push(s[2]=i);var c,u=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=o(t),c=function(e){d.onerror=d.onload=null,clearTimeout(p);var a=n[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+s+": "+r+")");i.type=s,i.request=r,a[1](i)}n[t]=void 0}};var p=setTimeout(function(){c({type:"timeout",target:d})},12e4);d.onerror=d.onload=c,u.appendChild(d)}return Promise.all(e)},l.m=t,l.c=s,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(a,s,function(e){return t[e]}.bind(null,s));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/CSTool/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=u;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},2488:function(t,e,a){"use strict";var s=a("46b8"),r=a.n(s);r.a},2856:function(t,e,a){},"46b8":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"texture_light",staticStyle:{"min-height":"100vh"}},[t._m(0),a("div",{staticClass:"p_4 p-t_4",attrs:{id:"app"}},[a("div",{staticClass:"viewport"},[a("router-view")],1)]),a("div",{staticClass:"bg_acc grid-x c_white shadow_5 font_2",attrs:{id:"nav"}},[a("router-link",{staticClass:"auto text-center p_2 cell center clear c_secondary-5 c_white hover:c_primary-4 m-b_0",attrs:{to:"/"}},[a("i",{staticClass:"fas fa-sign-out-alt"}),a("span",{staticClass:"font_0 p-y_1"},[t._v("  Login")])]),a("router-link",{staticClass:"auto text-center p_2 cell center clear c_secondary-5 c_white hover:c_primary-4 m-b_0",attrs:{to:"/reset"}},[a("i",{staticClass:"fas fa-info-square"}),a("span",{staticClass:"font_0 p-y_1"},[t._v("  Reset Password")])]),a("router-link",{staticClass:"auto text-center p_2 cell center clear c_secondary-5 c_white hover:c_primary-4 m-b_0",attrs:{to:"/about"}},[a("i",{staticClass:"fas fa-info-square"}),a("span",{staticClass:"font_0 p-y_1"},[t._v("  About")])])],1)])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid-x"},[a("div",{staticClass:"cell small-12 medium-10 large-8 m_auto",staticStyle:{"max-width":"54em"}},[a("div",{staticClass:"p-t_4"},[a("h1",{staticClass:"logo-lockup p-b_3"},[a("img",{staticClass:"logo p-r_3",attrs:{src:"assets/img/mobileLogo.svg",alt:"American College of Cardiology"}}),a("span",{staticClass:"text"},[t._v("Universal  \n\t\t\t\t\t\t"),a("br",{staticClass:"show-for-medium hide-for-large"}),t._v("Log in\n\t\t\t\t\t")])])])])])}],i={name:"App",data(){return{}},computed:{},methods:{}},o=i,l=(a("5c0b"),a("2877")),c=Object(l["a"])(o,r,n,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,d=a("8c4f"),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid-x"},[a("div",{staticClass:"cell small-12 medium-10 large-8 m_auto",staticStyle:{"max-width":"54em"}},[a("div",{staticClass:"card shadow_2 cell"},[a("div",{staticClass:"card-divider color_white font-size_3 p_4 texture_dust",class:{bg_alert:t.pageHasError(),bg_primary:!t.pageHasError()},staticStyle:{"z-index":"10"},on:{click:function(e){t.pageValidation()}}},[a("transition",{attrs:{name:"crossFade",mode:"out-in"}},["login"==t.mode?a("span",[t._v("Login")]):t._e(),"resetStart"==t.mode?a("span",[t._v("Password Reset")]):t._e()])],1),a("div",{staticClass:"card-section relative"},[a("transition",{attrs:{name:"slideInDown"}},[t.pageHasError()?a("div",{staticClass:"bg_alert-4 font_0 m-b_0 m_n4 p_3",staticStyle:{"z-index":"0"}},[a("p",{staticClass:"m-b_0"},[a("span",{staticClass:"font_bold"},[t._v("Error Loging In:")]),t._v("\n\t\t\t\t\t\t\t"+t._s(t.pageError)+"\n\t\t\t\t\t\t")])]):t._e()]),a("transition",{attrs:{name:"slideInRight",mode:"out-in"}},["login"==t.mode?a("div",{key:"login"},[a("form",{staticClass:"grid-container clearfix"},[a("div",{staticClass:"grid-x grid-padding-x p-y_3"},[a("div",{staticClass:"medium-6 cell"},[a("inputUsername",{staticClass:"m-t_2 m-t_0:medium",attrs:{label:"Username",required:!0,pageHasError:t.pageHasError(),value:t.username,hint:""},on:{"update:username":function(e){t.username=e}}})],1),a("div",{staticClass:"medium-6 cell"},[a("inputPassword",{staticClass:"m-t_4 m-t_0:medium",attrs:{label:"Password",required:!0,pageHasError:t.pageHasError(),value:t.password,hint:""},on:{"update:password":function(e){t.password=e}}}),a("div",{staticClass:"hover:underline float-right m-t_3 m-t_0:medium",on:{click:function(e){t.onModeChange("resetStart")}}},[t._v("reset my password")])],1)])]),a("div",{staticClass:"grid-container clearfix"},[a("div",{staticClass:"grid-x justify-end"},[a("div",{staticClass:"medium-4 cell m-t_4 m-t_0:medium"},[t.submitDisabled()?t._e():a("a",{staticClass:"button display-block color_white m-b_0 br_radius expanded disabled",on:{click:function(e){t.pageValidation()}}},[t._v("\n\t\t\t\t\t\t\t\t\t\tLog In\n\t\t\t\t\t\t\t\t\t\t"),a("i",{staticClass:"fal fa-ban"})]),t.submitDisabled()?a("router-link",{staticClass:"button display-block color_white m-b_0 br_radius expanded",attrs:{to:"/search"}},[t._v("\n\t\t\t\t\t\t\t\t\t\tLog In\n\t\t\t\t\t\t\t\t\t\t"),a("i",{staticClass:"fal fa-arrow-alt-right"})]):t._e()],1)])])]):t._e(),"resetStart"==t.mode?a("div",{key:"start"},[a("form",{staticClass:"grid-container m_auto",staticStyle:{"max-width":"35em"}},[a("div",{staticClass:"grid-x"},[a("div",{staticClass:"cell auto"},[a("p",{staticClass:"font_1"},[t._v("Select the most convient way to reset your password")]),a("ul",{staticClass:"no-bullet"},[a("li",[a("a",{staticClass:"button secondary expanded br_radius hollow hover:bg_secondary-4",attrs:{href:""}},[t._v("Text me an unlock code")])]),a("li",[a("a",{staticClass:"button secondary expanded br_radius hollow hover:bg_secondary-4",attrs:{href:""}},[t._v("Email me a reset link")])]),a("li",[a("a",{staticClass:"button secondary expanded br_radius hollow hover:bg_secondary-4",attrs:{href:""}},[t._v("Answer security questions")])]),a("li",{staticClass:"text-center hover:bg_secondary-5 font_0 underline hover:none c_primary center p-x_5 p-y_2 br_radius",on:{click:function(e){t.onModeChange("login")}}},[t._v("go back to login")])])])])])]):t._e()])],1),t._m(0)]),a("div",{staticClass:"p_3 font_n1 text-center"},[a("router-link",{staticClass:"link secondary underline",attrs:{to:"/about"}},[a("i",{staticClass:"fas fa-info-square"}),t._v(" About this utility\n\t\t\t")])],1)])])},_=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"texture_light p_3 text-center"},[a("a",{staticClass:"link secondary hover:underline"},[t._v("I don't have an account")])])}],f=a("dca6"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"question",attrs:{id:"inputEmail"}},[a("label",{staticClass:"label-holder grid-x font_1 font_bold",class:{c_alert:"alert"==t.inputState,c_warning:"warning"==t.inputState},attrs:{for:"email"}},[a("span",{staticClass:"text cell shrink"},[t._v(t._s(t.label))]),t.required?a("span",{staticClass:"required-holder cell shrink"},[a("i",{staticClass:"fas fa-asterisk c_warning font_n3 vertical-align_top"})]):t._e()]),a("div",{staticClass:"input-holder grid-x"},[a("valueIcon",{attrs:{icon:"fa-user",inputState:t.inputState}}),a("div",{staticClass:"input-space cell auto"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.username,expression:"username"}],staticClass:"input-group-field",class:{"br_alert-n1":"alert"==t.inputState,"br_warning-n1":"warning"==t.inputState,"br_info-n1":"info"==t.inputState,"br_success-n1":"success"==t.inputState},attrs:{id:"email",type:"text",placeholder:"youremail@acc.org",required:""},domProps:{value:t.username},on:{change:function(e){t.onChange(t.username)},input:function(e){e.target.composing||(t.username=e.target.value)}}})])],1),a("messageHolder",{attrs:{inputState:t.inputState,stateMessage:t.stateMessage}})],1)},g=[],h=a("9954"),b=a("772d"),v={name:"inputEmail",props:{label:{type:String,default:"UserName"},value:{type:String,default:""},required:{type:Boolean,default:"true"},pageHasError:{type:Boolean,default:!1}},data(){return{username:this.value,inputState:"",stateMessage:""}},components:{messageHolder:h["a"],valueIcon:b["a"]},methods:{onChange:function(t){console.log(t),/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(t)?(this.inputState="",this.$emit("update:username",t)):(this.inputState="alert",this.stateMessage="Not an email.",this.$emit("update:username",""))}}},w=v,y=(a("2488"),Object(l["a"])(w,m,g,!1,null,"339c27b4",null));y.options.__file="inputUsername.vue";var C=y.exports,S={name:"login",components:{inputPassword:f["a"],inputUsername:C},data(){return{username:"",password:"",pageError:"",mode:"login"}},methods:{submitDisabled:function(){return""!=this.username&&""!=this.password},pageHasError:function(){return""!=this.pageError},pageValidation(){""==this.pageError?this.pageError="Your email and password does not match our records.":this.pageError=""},onModeChange(t){this.pageError="",this.mode=t}}},x=S,E=Object(l["a"])(x,p,_,!1,null,null,null);E.options.__file="Login.vue";var k=E.exports;s["a"].use(d["a"]);var H=new d["a"]({routes:[{path:"/",name:"login",component:k},{path:"/about",name:"about",component:()=>a.e("about").then(a.bind(null,"f820"))},{path:"/reset",name:"reset",component:()=>a.e("Reset").then(a.bind(null,"3fef"))}],scrollBehavior(t,e,a){return a||{x:0,y:0}}}),N=(a("cadf"),a("551c"),a("097d"),a("2f62"));s["a"].use(N["a"]);var P=new N["a"].Store({state:{adminUserName:"Simon Pegg",searchHistory:[],searchHistoryNew:!1,shares:[],sharesNew:!1,searchReturn:[],singleReturn:[],passwordPart1:["draw","fate","sail","use","eaux","risk","deck","mail","shop","road","fax","pan","jest","bald","copy","act","fill","put","dip","hero","sick","pack","tire","rush","drum"],passwordPart2:["54","50","48","7","36","21","99","45","23","12","62","10","6","83","7","1","14","89","85","38","36","88","89","25","23","24"],passwordPart3:["need","tie","mask","lazy","fork","see","team","bald","fly","give","beam","dine","halt","rice","boom","mild","want","path","draw","dare","far","just","duty","game","pig","lost"]},mutations:{UNLINK_ACCOUNT:function(t,e){console.log(e);var a=e.parent,s=e.child,r=t.searchReturn.indexOf(a),n=t.searchReturn[r].children.indexOf(s);t.searchReturn[r].children.splice(n,1),t.searchReturn.unshift(s)},ADD_SEARCH_HISTORY:function(t,e){var a=new Date,s=a.toLocaleString();e["timestamp"]=s,t.searchHistory.unshift(e),t.searchHistoryNew=!0,t.searchHistory=t.searchHistory.slice(0,Math.max(15,t.searchHistory.length-1))},REPLACE_MEMBER_DATA:function(t,e){var a=t.searchReturn.indexOf(e);-1!==a&&(t.searchReturn[a]=e)},SET_SINGLE_RESULT:function(t,e){t.singleReturn=e;var a=new Date,s=a.toLocaleString(),r=Object({sharedBy:t.adminUserName,timestamp:s,memberName:e.fullName,memberType:e.memberType,badgeNumber:e.badgeNumber,personifyNumber:e.personifyNumber,emailAddress:e.emailAddress});t.sharesNew=!0,t.shares.unshift(r)},HISTORY_NEW_OFF:function(t){t.searchHistoryNew=!1},SHARE_NEW_OFF:function(t){t.sharesNew=!1}},getters:{searchHistoryCount:function(t){return t.searchHistory.length}},actions:{replaceMemberData:function(t){var e=t.commit;e("REPLACE_MEMBER_DATA")}}});s["a"].config.productionTip=!1,new s["a"]({router:H,store:P,render:t=>t(u)}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("2856"),r=a.n(s);r.a},"772d":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{staticClass:"value-space cell shrink br_solid br-w_1 p_3 p-b_2 texture_light",class:{"bg_secondary-4 br_secondary-3 c_secondary-2":""==t.inputState,"bg_alert-4 br_alert c_alert":"alert"==t.inputState,"bg_warning-4 br_warning c_warning":"warning"==t.inputState,"bg_info-4 br_info c_info":"info"==t.inputState,"bg_sucess-4 br_sucess c_sucess":"sucess"==t.inputState}},[a("i",{staticClass:"fal fa-key",class:t.icon})])},r=[],n={name:"valueIcon",props:{inputState:{type:String,default:""},icon:{type:String,default:"fa-check"}}},i=n,o=a("2877"),l=Object(o["a"])(i,s,r,!1,null,null,null);l.options.__file="inputValueIcon.vue";e["a"]=l.exports},9954:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"message-holder font_n1 br_solid br_0",class:{br_0:""!=t.inputState,"br_alert-n1 c_alert-n1 br_0 br-t_3":"alert"==t.inputState,"bg_warning-n1 c_warning-n1 br_0 br-t_3":"warning"==t.inputState,"bg_info-n1 c_info-n1 br_0 br-t_3":"info"==t.inputState,"bg_success-n1 c_success-n1 br_0 br-t_3":"success"==t.inputState}},[""!=t.inputState?a("div",{staticClass:"p_2 font_bold",class:{"c_alert-n1":"alert"==t.inputState,"c_warning-n1":"warning"==t.inputState,"c_info-n1":"info"==t.inputState,"c_success-n1":"success"==t.inputState}},[a("i",{staticClass:"fas fa-fw m-x_2",class:{"fa-exclamation-square":"alert"==t.inputState,"fa-exclamation-triangle":"warning"==t.inputState,"fa-lightbulb-exclamation":"info"==t.inputState,"fa-check-square":"success"==t.inputState}}),t._v("\n\t\t\t"+t._s(t.stateMessage)+"\n\t\t")]):t._e()])},r=[],n={name:"inputMessageHolder",props:{stateMessage:"",inputState:""}},i=n,o=(a("c725"),a("2877")),l=Object(o["a"])(i,s,r,!1,null,"33751a2a",null);l.options.__file="inputMessageHolder.vue";e["a"]=l.exports},a3d3:function(t,e,a){"use strict";var s=a("c150"),r=a.n(s);r.a},adaa:function(t,e,a){},c150:function(t,e,a){},c725:function(t,e,a){"use strict";var s=a("adaa"),r=a.n(s);r.a},dca6:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"question",attrs:{id:"inputEmail"}},[a("label",{staticClass:"label-holder grid-x font_1 font_bold",class:{c_alert:"alert"==t.inputState,c_warning:"warning"==t.inputState},attrs:{for:"email"}},[a("span",{staticClass:"text cell shrink"},[t._v(t._s(t.label))]),t.required?a("span",{staticClass:"required-holder cell shrink"},[a("i",{staticClass:"fas fa-asterisk c_warning font_n3 vertical-align_top"})]):t._e()]),a("div",{staticClass:"input-holder grid-x"},[a("valueIcon",{attrs:{icon:"fa-key",inputState:t.inputState}}),a("div",{staticClass:"input-space cell auto"},[t.passwordShow?t._e():a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"m-b_0",class:{"br_alert-n1":"alert"==t.inputState,"br_warning-n1":"warning"==t.inputState,"br_info-n1":"info"==t.inputState,"br_success-n1":"success"==t.inputState},attrs:{type:"password",placeholder:"password",required:""},domProps:{value:t.password},on:{change:function(e){t.onChange(t.password)},input:function(e){e.target.composing||(t.password=e.target.value)}}}),t.passwordShow?a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"m-b_0",class:{"br_alert-n1":"alert"==t.inputState,"br_warning-n1":"warning"==t.inputState,"br_info-n1":"info"==t.inputState,"br_success-n1":"success"==t.inputState},attrs:{type:"text",placeholder:"password",required:""},domProps:{value:t.password},on:{change:function(e){t.onChange(t.password)},input:function(e){e.target.composing||(t.password=e.target.value)}}}):t._e()]),""!=t.password?a("button",{staticClass:"c_secondary-4 hover:c_black value-space cell shrink br_solid br-w_1 p_3 p-b_2 br_secondary-4 texture_light",attrs:{type:"button"},on:{click:t.resetPassword}},[a("i",{staticClass:"fas fa-times"})]):t._e(),a("button",{staticClass:"value-space cell shrink br_solid br-w_1 p_3 p-b_2 br_secondary-4 texture_light c_secondary-4 hover:c_black",attrs:{type:"button"},on:{click:t.passwordShowToggle}},[t.passwordShow?a("i",{staticClass:"fas fa-eye"}):t._e(),t.passwordShow?t._e():a("i",{staticClass:"fas fa-eye-slash"})])],1),a("messageHolder",{attrs:{inputState:t.inputState,stateMessage:t.stateMessage}})],1)},r=[],n=a("9954"),i=a("772d"),o={name:"inputPassword",props:{label:{type:String,default:"Password"},value:{type:String,default:""},required:{type:Boolean,default:"true"},pageHasError:{type:Boolean,default:!1}},components:{messageHolder:n["a"],valueIcon:i["a"]},data(){return{password:this.value,passwordShow:!1,inputHasError:!1,inputState:"",stateMessage:""}},methods:{passwordShowToggle(){this.passwordShow=!this.passwordShow},resetPassword(){this.password="",this.onChange(this.password)},onChange(t){var e="",a=5;t.length>a&&(this.inputState="",this.stateMessage="",e=t),t.length<=a&&(this.inputState="alert",this.stateMessage="Password is too short",e=""),""==t&&(this.inputState="",this.stateMessage="",e=""),this.$emit("update:password",e)}}},l=o,c=(a("a3d3"),a("2877")),u=Object(c["a"])(l,s,r,!1,null,"aa76c0f0",null);u.options.__file="inputPassword.vue";e["a"]=u.exports}});
//# sourceMappingURL=app.e5c66d4b.js.map