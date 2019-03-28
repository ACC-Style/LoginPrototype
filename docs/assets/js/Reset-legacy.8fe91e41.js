(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Reset"],{"069e":function(s,t,a){"use strict";var r=a("679e"),_=a.n(r);_.a},"3fef":function(s,t,a){"use strict";a.r(t);var r=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"grid-x"},[a("div",{staticClass:"cell small-12 medium-10 large-8 m_auto",staticStyle:{"max-width":"54em"}},[a("div",{staticClass:"card shadow_2 cell"},[a("div",{staticClass:"card-divider color_white font_3 p_4 texture_dust",class:{bg_alert:s.pageHasError(),bg_primary:!s.pageHasError()},staticStyle:{"z-index":"10"},on:{click:function(t){s.pageValidation("empty")}}},[a("transition",{attrs:{name:"crossFade",mode:"out-in"}},["resetPassword"==s.mode?a("span",[s._v("Please enter your new password.")]):s._e()])],1),a("div",{staticClass:"card-section relative"},[a("transition",{attrs:{name:"slideInDown"}},[s.pageHasError()?a("div",{staticClass:"bg_alert-4 font_0 m-b_0 m_n4 p_3",staticStyle:{"z-index":"0"}},[a("p",{staticClass:"m-b_0"},[a("span",{staticClass:"font_bold"},[s._v("Error Loging In:")]),s._v("\n\t\t\t\t\t\t\t"+s._s(s.pageError)+"\n\t\t\t\t\t\t")])]):s._e()]),a("transition",{attrs:{name:"slideInRight",mode:"out-in"}},["resetPassword"==s.mode?a("div",{key:"start"},[a("form",{staticClass:"grid-container m_auto"},[a("div",{staticClass:"grid-x"},[a("div",{staticClass:"cell auto"},[a("p",{staticClass:"font_0 lh_3 bold p-y_3 c_secondary-n3"},[s._v("Your new passwords must be at least 7 characters long. Password must include numbers and characters with one special characters and a capital letter.")]),a("div",{staticClass:"grid-x grid-margin-x"},[a("div",{staticClass:"cell large-6"},[a("inputPassword",{staticClass:"m-t_4 m-t_0:medium",attrs:{label:"Password",required:!0,pageHasError:s.pageHasError(),value:s.password_1,hint:""},on:{"update:password":function(t){s.password_1=t}}}),a("div",{staticClass:"row"},[a("div",{staticClass:"alert progress m_0",staticStyle:{height:"3px"},attrs:{role:"progressbar",tabindex:"0","aria-valuenow":"25","aria-valuemin":"0","aria-valuetext":"25 percent","aria-valuemax":"100"}},[a("div",{staticClass:"progress-meter",staticStyle:{width:"10%"}},[a("p",{staticClass:"progress-meter-text"})])])]),a("div",{staticClass:"grid-x c_secondary-1 font_n1 font_italic"},[a("ul",{staticClass:"no-bullet font_n2 p_2 small-12"},[a("li",{on:{click:function(t){s.openPasswordStrengthReveal()}}},[a("i",{staticClass:"far icon-complete_check-circle"}),s._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\tpassword strength\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t"),a("span",{staticClass:"font_bold c_alert-n2"},[s._v("weak")]),a("span",{staticClass:"c_primary h:underline float-right"},[s._v("\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\thelp\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"),a("i",{staticClass:"fas fa-question-circle"})])]),a("li",[a("i",{staticClass:"far icon-complete_check-circle"}),s._v("1 capital letter\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]),a("li",[a("i",{staticClass:"far icon-complete_check-circle"}),s._v("1 lowercase letter\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]),a("li",[a("i",{staticClass:"far icon-complete_check-circle"}),s._v("1 special character\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]),a("li",[a("i",{staticClass:"far icon-complete_check-circle"}),s._v("1 number\n\t\t\t\t\t\t\t\t\t\t\t\t\t")]),a("li",[a("i",{staticClass:"far icon-complete_check-circle"}),s._v("8 characters long\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])])])],1),a("div",{staticClass:"cell large-6"},[a("inputPassword",{staticClass:"m-t_4 m-t_0:medium",attrs:{label:"Confirm Password",required:!0,pageHasError:s.pageHasError(),value:s.password_2,hint:"passwords must match"},on:{"update:password":function(t){s.password_2=t}}}),a("div",{staticClass:"grid-x c_secondary-1 font_n1 font_italic"},[a("ul",{staticClass:"no-bullet font_n2 p_2"},[a("li",{class:{"is-complete font_bold c_success":s.onPasswordConfirmed}},[a("i",{staticClass:"far icon-complete_check-circle"}),s._v(" passwords confirmed\n\t\t\t\t\t\t\t\t\t\t\t\t\t")])])])],1)])])])]),a("div",{staticClass:"grid-container clearfix"},[a("div",{staticClass:"grid-x justify-end"},[a("div",{staticClass:"medium-4 cell m-t_4 m-t_0:medium p-t_4"},[s.submitDisabled?a("a",{staticClass:"button display-block color_white m-b_0 br_radius expanded disabled",on:{click:function(t){s.pageValidation("empty")}}},[s._v("\n\t\t\t\t\t\t\t\t\t\tChange Password\n\t\t\t\t\t\t\t\t\t\t"),a("i",{staticClass:"fal fa-ban"})]):s._e(),s.submitDisabled?s._e():a("router-link",{staticClass:"button display-block color_white m-b_0 br_radius expanded",attrs:{to:"/resetSuccess"}},[s._v("\n\t\t\t\t\t\t\t\t\t\tChange Password\n\t\t\t\t\t\t\t\t\t\t"),a("i",{staticClass:"fal fa-arrow-alt-right"})])],1)])])]):s._e()])],1),a("div",{staticClass:"p_3 font_n1 text-center bg_secondary-4"},[a("router-link",{staticClass:"link secondary underline",attrs:{to:"/login/product"}},[a("i",{staticClass:"fas fa-arrow-left"}),s._v(" return to log in.\n\t\t\t\t")])],1)])]),a("reveal",{ref:"passwordStrength"},[a("h3",{attrs:{slot:"header"},slot:"header"},[s._v("Password Strength")]),a("div",{attrs:{slot:"content"},slot:"content"},[a("div",{},[a("p",{staticClass:"font_bold font_1 lh_2"},[s._v("Passwords must be 8 characters long and must include all of the bellow.")]),a("ul",{staticClass:"no-bullet"},[a("li",{staticClass:"clearfix"},[s._v("\n\t\t\t\t\t\tAt least one capital letter\n\t\t\t\t\t\t"),a("i",{staticClass:"fas fas-info-square"}),a("div",{staticClass:"br_radius d_none bg_secondary-5 p_2 grid-x font_bold"},[a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("A")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("B")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("C")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("D")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("E")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("F")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("G")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("H")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("I")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("J")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("K")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("L")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("M")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("N")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("O")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("P")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("Q")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("R")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("S")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("T")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("U")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("V")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("W")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("X")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("Y")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("Z")])])]),a("li",{staticClass:"clearfix"},[s._v("\n\t\t\t\t\t\tAt least one lowercase letter\n\t\t\t\t\t\t"),a("i",{staticClass:"fas fas-info-square"}),a("div",{staticClass:"br_radius d_none bg_secondary-5 p_2 grid-x font_bold"},[a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("a")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("b")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("c")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("d")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("e")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("f")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("g")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("h")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("i")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("j")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("k")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("l")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("m")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("n")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("o")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("p")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("q")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("r")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("s")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("t")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("u")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("v")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("w")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("x")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("y")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("z")])])]),a("li",{staticClass:"clearfix"},[s._v("\n\t\t\t\t\t\tAt least one special character\n\t\t\t\t\t\t"),a("i",{staticClass:"fas fas-info-square"}),a("div",{staticClass:"br_radius d_none bg_secondary-5 p_2 grid-x font_bold"},[a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("{")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("}")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("[")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("]")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("(")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v(")")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("<")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v(">")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v(":")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("'")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v('"')]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("?")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("/")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("|")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("`")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("~")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("!")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("@")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("#")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("$")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("%")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("^")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("&")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("*")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("_")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("-")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("+")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("=")])])]),a("li",{staticClass:"clearfix"},[s._v("\n\t\t\t\t\t\tAt least one number\n\t\t\t\t\t\t"),a("i",{staticClass:"fas fas-info-square"}),a("div",{staticClass:"br_radius d_none bg_secondary-5 p_2 grid-x font_bold"},[a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("1")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("2")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("3")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("4")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("5")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("6")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("7")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("8")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("9")]),a("span",{staticClass:"cell shrink p-y_1 p-x_3 m_1 bg_secondary-4 br_radius"},[s._v("0")])])])])]),a("div",{staticClass:"grid-x"},[a("div",{staticClass:"cell auto bg_alert-4 br_radius text-center m_2 p_4"},[a("h5",[a("span",{staticClass:"font_2"},[a("i",{staticClass:"fa fa-thumbs-down"})]),s._v(" Weak Password\n\t\t\t\t\t")]),a("div",{staticClass:"p_3 br_solid br_black-3 bg_white-3 br_1 br_radius br_solid"},[a("span",[s._v("Checkup1!")])])]),a("div",{staticClass:"cell auto bg_success-4 br_radius text-center m_2 p_4"},[a("h5",[a("span",{staticClass:"font_2"},[a("i",{staticClass:"fa fa-thumbs-up"})]),s._v(" Strong Password\n\t\t\t\t\t")]),a("div",{staticClass:"p_3 br_solid br_black-3 bg_white-3 br_1 br_radius br_solid"},[a("span",[s._v("Ch#c>Up214")])])])]),a("div",{staticClass:"grid-x flex-row-reverse"},[a("div",{staticClass:"cell shrink p-t_2 float-right"},[a("button",{staticClass:"button secondary expanded small m-b_0 radius",attrs:{"data-close":"","aria-label":"Close modal"}},[s._v("Close")])])])])])],1)},_=[],i=(a("cadf"),a("551c"),a("097d"),a("dca6")),e=a("ec6d"),l={name:"reset",components:{inputPassword:i["a"],reveal:e["a"]},data:function(){return{username:"",password:"",password_1:"",password_2:"",pageError:"",mode:"resetPassword"}},computed:{onPasswordConfirmed:function(){return""!=this.password_1&&""!=this.password_2&&this.password_1===this.password_2},submitDisabled:function(){return""==this.password_1||""==this.password_2||this.password_1!==this.password_2||(this.pageError="",!1)}},methods:{pageHasError:function(){return""!=this.pageError},pageValidation:function(s){this.pageError="empty"==s?"Please complete the inputs.":"notMatching"==s?"Your passwords don't match eachother.":""},onModeChange:function(s){this.pageError="",this.mode=s},openPasswordStrengthReveal:function(){this.$refs.passwordStrength.openReveal()}}},n=l,c=(a("069e"),a("2877")),d=Object(c["a"])(n,r,_,!1,null,"6abeed15",null);d.options.__file="Reset.vue";t["default"]=d.exports},"55aa":function(s,t,a){"use strict";var r=a("ecc4"),_=a.n(r);_.a},"679e":function(s,t,a){},c188:function(s,t,a){"use strict";a.r(t);var r=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"grid-x",attrs:{id:"createAccountStart"}},[a("div",{staticClass:"cell small-12 medium-10 large-8 m_auto",staticStyle:{"max-width":"54em"}},[a("div",{staticClass:"card shadow_3"},[a("div",{staticClass:"card-divider c_white font_display font_3 p_4 texture_dust",class:{bg_alert:!s.pageHasError,bg_primary:s.pageHasError},staticStyle:{"z-index":"10"},on:{click:function(t){s.pageValidation("Your email and password does not match our records.")}}},[s._v("Creating an account")]),a("div",{staticClass:"grid-container card-section p-b_4"},[s._m(0),a("div",{staticClass:"grid-x"},[a("div",{staticClass:"cell small-12 medium-8 m_auto"},[a("emailInput",{staticClass:"font_4 text-left",attrs:{label:"Email",required:!0,pageHasError:!1,value:s.email,hint:"",icon:"fa-at"},on:{"update:username":function(t){s.email=t}}}),a("div",{staticClass:"text-right"},[""==s.email?a("div",{staticClass:"button radius m-t_3 disabled",on:{click:function(t){s.pageValidation("Please Follow Instructions")}}},[s._v("Submit")]):s._e(),""!=s.email?a("router-link",{staticClass:"button radius m-t_3",attrs:{to:"/reset"}},[s._v("Submit")]):s._e()],1)],1)]),a("div",{staticClass:"grid-x"},[a("div",{staticClass:"cell small-12 medium-8 m_auto p-b_4"},[a("router-link",{staticClass:"text-center d_block h:bg_secondary-5 font_0 br_secondary-5 br_solid br_1 h:none c_primary center p-x_5 p-y_2 br_radius",attrs:{to:"login/product"},on:{click:function(t){s.onModeChange("resetStart")}}},[a("i",{staticClass:"fa fa-arrow-left"}),s._v(" go back\n\t\t\t\t\t\t")])],1)])]),a("div",{staticClass:"p_3 font_n1 text-center bg_secondary-4"},[a("router-link",{staticClass:"link secondary underline",attrs:{to:"/login/product"}},[a("i",{staticClass:"fas fa-arrow-left"}),s._v(" return to log in.\n\t\t\t\t")])],1)])])])},_=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"grid-x"},[a("div",{staticClass:"cell small-12 medium-8 m_auto"},[a("p",[s._v("Enter your prefered email bellow and we will get you started with your new account.")])])])}],i=(a("cadf"),a("551c"),a("097d"),a("d7d1")),e={name:"createAccountStart",components:{emailInput:i["a"]},data:function(){return{email:"",mode:"start",pageHasError:"false"}},methods:{checkDuplicateEmail:function(){return!1},onModeChange:function(s){this.mode=s}}},l=e,n=(a("55aa"),a("2877")),c=Object(n["a"])(l,r,_,!1,null,"54e904d4",null);c.options.__file="AccountCreation.vue";t["default"]=c.exports},ecc4:function(s,t,a){}}]);
//# sourceMappingURL=Reset-legacy.8fe91e41.js.map