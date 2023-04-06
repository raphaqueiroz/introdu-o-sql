var y=Object.defineProperty;var k=(n,t,s)=>t in n?y(n,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[t]=s;var f=(n,t,s)=>(k(n,typeof t!="symbol"?t+"":t,s),s);import{c as v}from"./g2.573d37a0.js";import{i as C}from"./vscodeInject.fde7f090.js";import{e as x}from"./notify.2ea2c4d4.js";import{n as S}from"./vueConfig.6bb507c3.js";class p{constructor(t,s){f(this,"chart");f(this,"value");this.ele=t,this.option=s}update(t){const s=t.percent;this.value=s,this.chart.changeData([{value:0},{value:s}])}render(){v.registerShape("point","pointer",{draw(s,r){const d=s.points[0],c=this.parsePoint({x:0,y:0}),a=this.parsePoint({x:d.x,y:.9}),e={x:c.x-a.x,y:c.y-a.y},i=Math.sqrt(e.x*e.x+e.y*e.y);e.x*=1/i,e.y*=1/i;const o=-Math.PI/2,l=Math.cos(o)*e.x-Math.sin(o)*e.y,u=Math.sin(o)*e.x+Math.cos(o)*e.y,h=Math.PI/2,m=Math.cos(h)*e.x-Math.sin(h)*e.y,g=Math.sin(h)*e.x+Math.cos(h)*e.y,_=[["M",a.x+l*1,a.y+u*1],["L",c.x+l*3,c.y+u*3],["L",c.x+m*3,c.y+g*3],["L",a.x+m*1,a.y+g*1],["Z"]];return r.getCount()>1&&r.removeChild(r.getLast()),r.addShape("path",{attrs:{path:_,fill:s.color}})}});const t=new v.Chart({container:this.ele,autoFit:!0,width:this.option.width,height:this.option.height,padding:[0,0,0,0]});this.value=0,this.chart=t,this.settingChart(),this.bindAnnotaion(),t.data([{value:0}]),t.render()}settingChart(){const t=this.chart;t.coordinate("polar",{startAngle:-10/8*Math.PI,endAngle:2/8*Math.PI,radius:.75}),t.scale("value",{min:0,max:1,tickInterval:1}),t.axis(!1),t.point().position("value*1").shape("pointer").color("#d8d8d8").animate({appear:{animation:"fade-in"}})}bindAnnotaion(){var t;this.chart.annotation().arc({top:!1,start:[0,1],end:[1,1],style:{stroke:"#ebedf0",lineWidth:10}}),this.chart.annotation().arc({start:[0,1],animate:!1,end:()=>[Math.min(this.value,1),1],style:{stroke:"#5B8FF9",lineWidth:10}}),this.chart.annotation().text({position:["50%","75%"],content:()=>`${(this.value*100).toFixed(1)}%`,animate:!1,style:{fontSize:14,fill:(t=this.option.fColor)!=null?t:"#E8EDF3",fontWeight:500,textAlign:"center"},offsetX:0,offsetY:10})}}const w={name:"Status",mixins:[C],data(){return{info:{serverType:"linux",os:"Loading",kernelVersion:"Loading",arch:"x86_64",hostname:"localhost",upTime:"0",diskUsage:{total:"0G",used:"0G",available:"0G",usePercent:0},memoryUsage:{total:"0 GB",used:"0 GB",free:"0 MB",usePercent:0},cpu:{name:"",clock:"0GHz",logicCoreCount:"0",usePercent:0}},task:{cpu:null,memory:null,network:null},dashBoard:{traffic:{data:[],lock:!1,chart:null,previous:null}}}},mounted(){const n=this.getColor("--vscode-editor-foreground"),t=new p("cpuUsage",{height:120,width:120,autoFit:!1,percent:this.info.cpu.usePercent,color:["#5B8FF9","#E8EDF3"],fColor:n,statistic:{content:{style:{color:"var(--vscode-editor-foreground)"}}}});t.render();const s=new p("diskUsage",{height:120,width:120,autoFit:!1,percent:this.info.diskUsage.usePercent,color:["#5B8FF9","#E8EDF3"],fColor:n,statistic:{content:{style:{color:"var(--vscode-editor-foreground)"}}}});s.render();const r=new p("memoryUsage",{height:120,width:120,autoFit:!1,percent:this.info.memoryUsage.usePercent,color:["#5B8FF9","#E8EDF3"],fColor:n,statistic:{content:{style:{color:"var(--vscode-editor-foreground)"}}}});r.render();const d=(a,e)=>{const i=new v.Chart({container:a,autoFit:!0,height:300});return i.data(e),i.axis("value",{label:{style:{fill:n},formatter:o=>`${o}KB`}}),i.axis("now",{label:{style:{fill:n}}}),i.legend({itemName:{style:{fill:n}}}),i.line().position("now*value").color("type").size(2),i.render(),i};function c(a,e,i,o){const l=JSON.parse(JSON.stringify(i));if(e.previous||(e.previous=l),e.data.push(...i),o&&o(i,e.previous),e.previous=l,!e.chart)e.chart=d(a,e.data);else{if(e.data.length>=i.length*60)for(let u=0;u<i.length;u++)e.data.shift();e.chart.changeData(e.data)}e.lock=!1}this.on("error",()=>{x("SSH service connection failed!")}).on("info",a=>{this.info=a,this.task.memory||(this.task.memory=setInterval(()=>this.emit("memory"),3e3)),a.serverType=="windows"?this.emit("cpu"):(this.emit("network"),this.task.network||(this.task.network=setInterval(()=>this.emit("network"),1e3))),this.task.cpu||(this.task.cpu=setInterval(()=>this.emit("cpu"),1e3)),r.update({percent:a.memoryUsage.usePercent}),s.update({percent:a.diskUsage.usePercent}),t.update({percent:a.cpu.usePercent})}).on("cpu",a=>{this.info.cpu.usePercent=a,t.update({percent:a})}).on("memory",a=>{this.info.memoryUsage=a,r.update({percent:a.usePercent})}).on("network",a=>{c("traffic",this.dashBoard.traffic,a,(e,i)=>{for(let o=0;o<i.length;o++)e[o].value=parseFloat(((e[o].value-i[o].value)/1024).toFixed(2))})}).init()},methods:{getColor(n){return document.documentElement.style.getPropertyValue(n)},remainHeight(){return window.outerHeight-150}}};var P=function(){var t=this,s=t._self._c;return s("div",{staticClass:"status-container"},[s("div",{staticClass:"info-container"},[s("div",{staticStyle:{display:"inline-block","margin-right":"50px"}},[s("div",{staticClass:"info-title"},[t._v(" "+t._s(t.$t("sshStatus.systemInfo"))+": ")]),s("div",[t._v(" "+t._s(t.$t("sshStatus.runTime"))+": "),s("span",{staticClass:"red"},[t._v(t._s(t.info.upTime))])]),s("span",{staticClass:"info-col"},[t._v(t._s(t.$t("sshStatus.arch"))+": "),s("span",{domProps:{innerHTML:t._s(t.info.arch)}})]),s("span",{staticClass:"info-col"},[t._v(t._s(t.$t("sshStatus.hostname"))+": "+t._s(t.info.hostname))]),s("span",{staticClass:"info-col"},[t._v(t._s(t.$t("sshStatus.os"))+": "),s("span",{staticClass:"red"},[t._v(t._s(t.info.os))])]),s("span",{staticClass:"info-col"},[t._v(t._s(t.$t("sshStatus.kernelVersion"))+": "+t._s(t.info.kernelVersion))])]),s("div",{staticStyle:{display:"inline-block"}},[s("div",{staticClass:"info-title"},[t._v(" "+t._s(t.$t("sshStatus.cpuInfo"))+": ")]),s("div",[s("span",{staticClass:"info-col"},[t._v(" "+t._s(t.$t("sshStatus.cpuClock"))+":"+t._s(t.info.cpu.clock)+" ")]),s("span",{staticClass:"info-col"},[t._v(" "+t._s(t.$t("sshStatus.cpuCoreCount"))+":"+t._s(t.info.cpu.logicCoreCount)+" ")]),s("span",{staticClass:"info-col"},[t._v(" "+t._s(t.$t("sshStatus.cpuName"))+": "),s("span",{domProps:{innerHTML:t._s(t.info.cpu.name)}})])])])]),s("div",[s("div",{staticClass:"info-title"},[t._v(" "+t._s(t.$t("sshStatus.systemStatus"))+": ")]),s("div",{staticClass:"ring-graph-status"},[s("div",{staticStyle:{margin:"auto"}},[t._v("CPU")]),s("div",{staticStyle:{margin:"auto"},attrs:{id:"cpuUsage"}}),s("div",{staticStyle:{margin:"auto"}},[t._v(" "+t._s(t.info.cpu.clock)+" ")])]),s("div",{staticClass:"ring-graph-status"},[s("div",{staticStyle:{margin:"auto"}},[t._v(" "+t._s(t.$t("sshStatus.memory")))]),s("div",{staticStyle:{margin:"auto"},attrs:{id:"memoryUsage"}}),s("div",{staticStyle:{margin:"auto"}},[t._v(" "+t._s(t.info.memoryUsage.used)+"/"+t._s(t.info.memoryUsage.total)+" ")])]),s("div",{staticClass:"ring-graph-status"},[s("div",{staticStyle:{margin:"auto"}},[t._v(" "+t._s(t.$t("sshStatus.disk")))]),s("div",{staticStyle:{margin:"auto"},attrs:{id:"diskUsage"}}),s("div",{staticStyle:{margin:"auto"}},[t._v(" "+t._s(t.info.diskUsage.used)+"/"+t._s(t.info.diskUsage.total)+" ")])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.info.serverType!="windows",expression:"info.serverType!='windows'"}],staticStyle:{"margin-top":"30px"}},[s("div",{staticClass:"info-title"},[t._v(" "+t._s(t.$t("sshStatus.network"))+": ")]),s("div",{staticStyle:{width:"600px"},attrs:{id:"traffic"}})])])},F=[],M=S(w,P,F,!1,null,null,null,null);const L=M.exports;export{L as default};