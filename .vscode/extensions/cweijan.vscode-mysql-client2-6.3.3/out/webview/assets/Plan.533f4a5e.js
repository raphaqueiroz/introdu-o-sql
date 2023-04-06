import{_ as o}from"./dialog.d6e9f16e.js";import{n}from"./vueConfig.acb00325.js";import{i as c}from"./vscodeInject.6e46c6eb.js";import{a as r}from"./axiosReq.0441c0d0.js";import{s as l}from"./notify.23517f0f.js";const v={methods:{toStore(){}}};var _=function(){var t=this,s=t._self._c;return s("div",{staticClass:"div-block-price"},[s("div",{staticClass:"plan-basic"},[t._v("Basic")]),s("div",{staticClass:"div-block-111"},[s("div",{staticClass:"text-block-26-copy free"},[t._v(t._s(t.$t("plan.free"))),s("span",{staticClass:"text-span-43"})]),s("div",{staticClass:"payment-terms"},[s("strong",{staticClass:"bold-text-37"},[t._v(t._s(t.$t("plan.basicNotice")))])])]),s("div",{staticClass:"div-block-87-copy"},[s("a",{staticClass:"button-plan-basic w-button",on:{click:t.toStore}},[s("strong",{staticClass:"bold-text-39"},[t._v(t._s(t.$t("plan.installed")))])])]),s("div",{staticClass:"text-block-44-copy"},[t._v(t._s(t.$t("plan.basicDesc")))]),s("div",{staticClass:"div-block-plan-features"},[s("div",{staticClass:"div-block-182 w-clearfix"},[s("img",{staticClass:"image-28-copy",attrs:{src:"icon/checkmark-basic.svg",alt:""}}),t._m(0)]),s("div",{staticClass:"div-block-182 w-clearfix"},[s("img",{staticClass:"image-28-copy",attrs:{src:"icon/checkmark-basic.svg",alt:""}}),s("div",{staticClass:"text-block-12"},[s("span",{staticClass:"text-span-44"},[s("strong",{staticClass:"bold-text-38"},[t._v(t._s(t.$t("plan.freeLimitConnection")))])])])]),s("div",{staticClass:"div-block-182 w-clearfix"},[s("img",{staticClass:"image-28-copy",attrs:{src:"icon/checkmark-basic.svg",alt:""}}),s("div",{staticClass:"text-block-12"},[s("span",{staticClass:"text-span-44"},[s("strong",{staticClass:"bold-text-38"},[t._v(t._s(t.$t("plan.basicSQLCompletion")))])])])])])])},d=[function(){var i=this,t=i._self._c;return t("div",{staticClass:"text-block-12"},[t("span",{staticClass:"text-span-44"},[t("strong",{staticClass:"bold-text-38"},[i._v("MySQL, PostgreSQL, Redis, SSH, and More")])])])}],p=n(v,_,d,!1,null,"65aed073",null,null);const m=p.exports;const u={props:["isPay"],computed:{planText(){return this.isPay?this.$t("plan.buyed"):this.$t("plan.buyNow")}},methods:{buyNow(){this.$emit("buy")}}};var f=function(){var t=this,s=t._self._c;return s("div",{staticClass:"div-block-price"},[s("div",{staticClass:"plan-premium"},[t._v("Premium")]),s("div",{staticClass:"div-block-111"},[t._m(0),s("div",{staticClass:"payment-monthly"},[t._v(t._s(t.$t("plan.perYear")))]),s("div",{staticClass:"payment-montly-price"},[t._v("\u4E2D\u56FD\u533A\u4E3A68\u5143/\u5E74")])]),s("a",{staticClass:"button-plan-premium w-button",on:{click:t.buyNow}},[s("strong",{staticClass:"bold-text-39"},[t._v(t._s(t.planText))])]),s("div",{staticClass:"text-block-44-copy"},[t._v(t._s(t.$t("plan.premiumDesc")))]),s("div",{staticClass:"div-block-plan-features"},[s("div",{staticClass:"div-block-182 w-clearfix"},[s("img",{staticClass:"image-28-copy",attrs:{src:"icon/checkmark-premium.svg",alt:""}}),s("div",{staticClass:"text-block-12"},[s("span",{staticClass:"text-span-44"},[s("strong",{staticClass:"bold-text-38"},[t._v(t._s(t.$t("plan.allFeature")))])])])]),s("div",{staticClass:"div-block-182 w-clearfix"},[s("img",{staticClass:"image-28-copy",attrs:{src:"icon/checkmark-premium.svg",alt:""}}),s("div",{staticClass:"text-block-12"},[s("span",{staticClass:"text-span-44"},[s("strong",{staticClass:"bold-text-38"},[t._v(t._s(t.$t("plan.unlimitConnection")))])])])]),s("div",{staticClass:"div-block-182 w-clearfix"},[s("img",{staticClass:"image-28-copy",attrs:{src:"icon/checkmark-premium.svg",alt:""}}),s("div",{staticClass:"text-block-12"},[s("span",{staticClass:"text-span-44"},[s("strong",{staticClass:"bold-text-38"},[t._v(t._s(t.$t("plan.cloudSync")))])])])]),s("div",{staticClass:"div-block-182 w-clearfix"},[s("img",{staticClass:"image-28-copy",attrs:{src:"icon/checkmark-premium.svg",alt:""}}),s("div",{staticClass:"text-block-12"},[s("span",{staticClass:"text-span-44"},[s("strong",{staticClass:"bold-text-38"},[t._v(t._s(t.$t("plan.workLevelConnection")))])])])]),s("div",{staticClass:"div-block-182 w-clearfix"},[s("img",{staticClass:"image-28-copy",attrs:{src:"icon/checkmark-premium.svg",alt:""}}),s("div",{staticClass:"text-block-12"},[s("span",{staticClass:"text-span-44"},[s("strong",{staticClass:"bold-text-38"},[t._v(t._s(t.$t("plan.otherFeature")))])])])]),s("div",{staticClass:"div-block-182 w-clearfix"},[s("img",{staticClass:"image-28-copy",attrs:{src:"icon/checkmark-premium.svg",alt:""}}),s("div",{staticClass:"text-block-12"},[s("span",{staticClass:"text-span-44"},[s("strong",{staticClass:"bold-text-38"},[t._v(t._s(t.$t("plan.intelliSenseSQLCompletion")))])])])])])])},b=[function(){var i=this,t=i._self._c;return t("div",{staticClass:"text-block-26-copy free"},[i._v("$19.28"),t("span",{staticClass:"text-span-43"})])}],g=n(u,f,b,!1,null,null,null,null);const C=g.exports;const x={mixins:[c],data(){return{loading:!1,licence:"",email:"",password:""}},mounted(){this.on("email",i=>{this.email=i})},methods:{submit(){this.loading=!0,r.post("/user/login",{email:this.email,password:this.password}).then(i=>{l("Login success!"),this.$emit("login",i)}).finally(()=>{this.loading=!1})}}};var y=function(){var t=this,s=t._self._c;return s("div",{staticStyle:{"word-break":"break-word"}},[s("div",[s("span",{staticStyle:{color:"var(--vscode-charts-red)"}},[t._v(" Online ")]),t._v(" : "+t._s(t.$t("offline.online"))+" "),s("br"),s("vsc-button",{staticStyle:{display:"inline-block",margin:"15px 0"},attrs:{size:"mini",icon:"codicon-account"},on:{click:function(e){return t.$emit("reqLogin")}}},[t._v(" Login ")])],1),s("span",{staticStyle:{display:"inline-block","margin-bottom":"5px",color:"var(--vscode-charts-red)"}},[t._v(" Offline: ")]),s("div",[t._v(" "+t._s(t.$t("offline.detail"))+" ")]),s("div",{staticStyle:{"margin-top":"5px"}},[t._v(" Licence: "),s("vsc-input",{attrs:{type:"textarea",autosize:{minRows:5,maxRows:5}},model:{value:t.licence,callback:function(e){t.licence=e},expression:"licence"}})],1),s("div",{staticStyle:{"margin-top":"10px"}},[s("vsc-button",{attrs:{size:"mini",icon:"codicon-vm"},on:{click:function(e){return t.$emit("getMachineId")}}},[t._v(" "+t._s(t.$t("offline.getMachineId"))+" ")]),s("vsc-button",{attrs:{size:"mini",type:"primary",icon:"codicon-save"},on:{click:function(e){return t.$emit("activate",t.licence)}}},[t._v(" "+t._s(t.$t("offline.activate"))+" ")]),s("vsc-button",{attrs:{type:"secondary",icon:"codicon-discard"},on:{click:function(e){return t.$emit("cancel")}}},[t._v(" "+t._s(t.$t("common.cancel"))),s("span",{staticClass:"codicon-discard",attrs:{slot:"start"},slot:"start"})])],1)])},h=[],k=n(x,y,h,!1,null,"825530e0",null,null);const $=k.exports;function w(i,t=2){const s=new TextEncoder().encode(i),e=new Uint8Array(s.length);for(let a=0;a<s.length;a++)e[a]=s[a]^t;return new TextDecoder().decode(e)}function P(i){return[...`${i}`].reduce((t,s)=>t+parseInt(s),1)}const L={components:{FreePlan:m,ProPlan:C,Offline:$},mixins:[c],data(){return{user:null,offlineVisible:!1}},computed:{isPay(){return this.user&&this.user.expireTime>new Date().getTime()}},mounted(){this.on("user",i=>{this.user=i,this.isPay&&this.$emit("closeLogin")}).on("boundLicence",i=>{this.user=i,this.offlineVisible=!1,l("Activation success!")}).init()},methods:{openAbount(){this.$router.push("/center/document")},openDocument(){this.$router.push("/center/document/#/start")},githubLogin(){this.emit("githubLogin")},getMachineId(){this.emit("copyMachineId")},activate(i){this.emit("licence",i)},triggerBuy(){if(this.user){const i=new Date().getTime(),t=P(i);this.emit("open",`${this.getSite()}/#/plan?token=${btoa(w(this.user.token,t))}&t=${i}&ir=${t}`)}else this.$emit("openLogin")}}};var S=function(){var t=this,s=t._self._c;return s("div",[s("div",{staticClass:"section-plans wf-section"},[s("div",{staticClass:"notice"},[s("div",{domProps:{innerHTML:t._s(t.$t("pay.notice"))}}),s("div",{staticClass:"line"}),t.isPay?s("vsc-button",{staticStyle:{position:"relative",top:"-1px"},attrs:{size:"mini",icon:"el-icon-document"},on:{click:t.openDocument}},[t._v(" "+t._s(t.$t("plan.document"))+" ")]):t._e(),t.user?t._e():s("vsc-button",{attrs:{size:"mini",icon:"codicon-github-inverted"},on:{click:t.githubLogin}},[t._v(" "+t._s(t.$t("plan.freeTier"))+" ")]),t.isPay?t._e():s("vsc-button",{attrs:{size:"mini",icon:"codicon-package"},on:{click:t.triggerBuy}},[t._v(" "+t._s(t.$t("plan.buyNow"))+" ")]),s("vsc-button",{attrs:{size:"mini",icon:"codicon-github-action"},on:{click:function(e){t.offlineVisible=!0}}},[t._v(" "+t._s(t.$t("plan.activation"))+" ")])],1)]),s("div",{staticClass:"section-plans wf-section"},[s("div",{staticClass:"div-block-74---a"},[s("div",{staticClass:"row-plans w-row"},[s("div",{staticClass:"column-price w-col w-col-4"},[s("FreePlan")],1),s("div",{staticClass:"column-price-middle w-col w-col-4"},[s("ProPlan",{attrs:{isPay:t.isPay},on:{buy:t.triggerBuy}})],1)])])]),s(o,{attrs:{visible:t.offlineVisible,width:"600px","custom-class":"activate-dialog","modal-append-to-body":!1,"close-on-click-modal":!1},on:{"update:visible":function(e){t.offlineVisible=e},close:function(e){t.offlineVisible=!1}}},[s("Offline",{on:{cancel:function(e){t.offlineVisible=!1},getMachineId:t.getMachineId,reqLogin:function(e){t.offlineVisible=!1,t.$emit("openLogin")},activate:t.activate}})],1)],1)},z=[],F=n(L,S,z,!1,null,"e98c89e0",null,null);const R=F.exports;export{R as default};
