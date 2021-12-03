var me=Object.defineProperty,_e=Object.defineProperties;var ge=Object.getOwnPropertyDescriptors;var Z=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,ve=Object.prototype.propertyIsEnumerable;var Q=(e,t,n)=>t in e?me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))he.call(t,n)&&Q(e,n,t[n]);if(Z)for(var n of Z(t))ve.call(t,n)&&Q(e,n,t[n]);return e},z=(e,t)=>_e(e,ge(t));import{d as k,X as V,o,x as c,a9 as ye,m as ee,aa as M,L as te,t as P,v as E,r as p,i as $,ab as we,w as f,k as O,ac as I,ad as ne,ae as $e,af as se,j as d,ag as W,ah as Fe,ai as Be,$ as Se,aj as Ce,ak as ke,al as Le,u as be,a as Ee,am as Oe,y as F,Z as oe,_ as Ne,G as N,Y as ie,O as Ue}from"./vendor.7363c997.js";import{_ as R,l as ze}from"./index.fdd89036.js";const De=k({props:{name:{type:String,default:""},size:{type:[String,Number],default:""},color:{type:String,default:"inherit"}},setup(e){const t=e,n=V(()=>["x-icon",t.name].join(" ")),m=V(()=>({"font-size":typeof t.size=="number"?`${t.size}px`:t.size,color:t.color}));return(B,S)=>(o(),c("i",{class:ye(ee(n)),style:M(ee(m))},null,6))}});const Me=k({name:"XButton",components:{NButton:te,XIcon:De},props:z(v({},te.props),{icon:{type:String,default:""}}),setup(e,{emit:t}){const n=P({props:E(e)||{}});return v({},E(n))}});function je(e,t,n,m,B,S){const a=p("x-icon"),L=p("n-button");return o(),$(L,I({class:"x-button"},e.props,{disabled:e.props.disabled||e.props.loading}),we({default:f(()=>[O(e.$slots,"default",{},void 0,!0)]),_:2},[e.$slots.icon||e.icon?{name:"icon",fn:f(()=>[e.$slots.icon?O(e.$slots,"icon",{key:0},void 0,!0):(o(),$(a,{key:1,name:e.icon,size:18},null,8,["name"]))])}:void 0]),1040,["disabled"])}var St=R(Me,[["render",je],["__scopeId","data-v-79b045a9"]]);const Ae=k({name:"XForm",components:{NForm:ne},props:z(v({},ne.props),{wrap:{type:Boolean,default:!1}}),setup(e,{emit:t}){const n=$e(null);let m=JSON.parse(JSON.stringify(e.model));const B=P({props:E(e)||{},classNameList:V(()=>{const g=["x-form"];return e.inline&&e.wrap&&g.push("is-wrap"),g.join(" ")})}),S=g=>{n.value.validate(g)},a=()=>{n.value.restoreValidation()},L=()=>{a(),t("update:model",JSON.parse(JSON.stringify(m)))},i=g=>{a(),m=g||null};return se(()=>e.model,()=>{m||(m=JSON.parse(JSON.stringify(e.model)))}),z(v({},E(B)),{formRef:n,validate:S,restoreValidation:a,resetFields:L,resetDefaultValue:i})}});function Te(e,t,n,m,B,S){const a=p("n-form");return o(),$(a,I({ref:"formRef",class:e.classNameList},e.props),{default:f(()=>[O(e.$slots,"default",{},void 0,!0)]),_:3},16,["class"])}var Ct=R(Ae,[["render",Te],["__scopeId","data-v-70275e42"]]);const xe={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Ve=d("path",{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z",fill:"currentColor"},null,-1);var Pe=k({name:"DeleteOutlined",render:function(t,n){return o(),$("svg",xe,[Ve])}});const Ie={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},Re=d("path",{d:"M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3c7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176s-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112s112 50.1 112 112s-50.1 112-112 112z",fill:"currentColor"},null,-1);var Xe=k({name:"EyeOutlined",render:function(t,n){return o(),$("svg",Ie,[Re])}});const He={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 1024 1024"},qe=d("defs",null,null,-1),Je=d("path",{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z",fill:"currentColor"},null,-1),We=d("path",{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z",fill:"currentColor"},null,-1);var Ge=k({name:"PlusOutlined",render:function(t,n){return o(),$("svg",He,[qe,Je,We])}});const Ke=z(v({},W.props),{action:{type:String,default:"/api/product/media/upload"},data:{type:Object,default:()=>({mediaType:1,resourceType:0})},headers:{type:Object,default:()=>({accessToken:ze.get("token")})},accept:{type:String,default:".jpg,.png,.jpeg,.svg,.gif"},showFileList:{type:Boolean,default:!1},validate:{type:Object,default:()=>({})},helpText:{type:String,default:""},limit:{type:Number,default:1/0},value:{type:[Array,String],default:()=>[]},width:{type:Number,default:104},height:{type:Number,default:104},restrictionText:{type:String,default:""},isManual:{type:Boolean,default:!1}}),Ye=Object.prototype.toString;function ae(e,t){return Ye.call(e)===`[object ${t}]`}function Ze(e){return e!==null&&ae(e,"Object")}function ue(e){return ae(e,"String")}const G=k({name:"BasicUpload",components:{NUpload:W,NIcon:Fe,NModal:Be,NSpace:Se,NAlert:Ce,EyeOutlined:Xe,DeleteOutlined:Pe,PlusOutlined:Ge,NImage:ke,NSpin:Le},props:v(v({},W.props),Ke),emits:["success","update:value","remove"],setup(e,{emit:t,slots:n}){const m=["image/jpg","image/png","image/jpeg","image/svg","image/gif","image/webp"],B=["video/mp4","video/mov","video/avi"],S=V(()=>({width:`${e.width}px`,height:`${e.height}px`}));se(()=>e.value,s=>{g()});const a=be(),L=Ee(),i=P({count:0,isLoading:!1,showModal:!1,previewUrl:"",imgList:[],containerPadding:e.width>60?"8px":"2px",isSlots:n==null?void 0:n.default});g();function g(){!e.value||(ue(e.value)?e.value&&(i.imgList=e.value.split(",").map(s=>D(s))):e.value.length&&(i.imgList=e.value.map(s=>D(s))))}function j(){let s;return ue(e.value)||!e.value?s=i.imgList.join(","):s=i.imgList,s}function X(s){i.showModal=!0,i.previewUrl=s}function A(s){L.warning({title:"\u63D0\u793A",content:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u53D6\u6D88",onPositiveClick:()=>{i.imgList.splice(s,1);const u=j();t("update:value",u),t("remove",s)}})}function D(s){return s}async function H({file:s}){const u=s.file,{validate:r,limit:l}=e,h=Ze(r);if(i.count++,i.imgList.length+i.count>l)return a.warning(`\u6700\u591A\u9009\u62E9${l}\u5F20\u56FE\u7247, \u8D85\u51FA\u6570\u91CF\u7684\u56FE\u7247\u5DF2\u53D6\u6D88\u4E0A\u4F20`),!1;if(h){const{fileSize:_}=r;if(_&&!(u.size/1024<_))return a.error(`\u6587\u4EF6\u5927\u5C0F\u4E0D\u80FD\u8D85\u8FC7${de(_)}!`),!1;m.includes(u.type)?await T(u,r):B.includes(u.type)&&await J(u,r)}return i.isLoading=!0,!0}function q({file:s}){s.status==="uploading"&&(i.isLoading=!0)}function b({file:s,event:u}){i.isLoading=!1,i.count=0;const{success:r,data:l,msg:h}=JSON.parse(u.target.response),y=h||"\u4E0A\u4F20\u5931\u8D25";if(r){if(!e.isManual){let _=D(l.fileUrl);i.imgList.push(_);const w=j();t("update:value",w)}t("success",l)}else a.error(y)}function T(s,u){const{width:r,height:l,type:h}=u;return new Promise((y,_)=>{if(h&&!h.split(",").includes(s.type))return _(),a.error(`\u56FE\u7247\u7C7B\u578B\u4E0D\u6B63\u786E\uFF0C\u8BF7\u4E0A\u4F20\u7C7B\u578B\u4E3A${h}\u7684\u56FE\u7247`);if(r&&l){const w=window.URL||window.webkitURL,U=new Image;U.src=w.createObjectURL(s),U.onload=()=>{U.width===r&&U.height===l?y():(_(),a.error(`\u8BF7\u4E0A\u4F20\u5C3A\u5BF8\u4E3A ${r}\xD7${l}\u50CF\u7D20 \u7684\u56FE\u7247!`))}}else y()})}function J(s,u){const{minWidth:r,minHeight:l,minDuration:h,maxDuration:y,ratioWidth:_,ratioHeight:w}=u;return new Promise((U,x)=>{const K=window.URL||window.webkitURL,Y=K.createObjectURL(s),C=document.createElement("video");C.addEventListener("loadedmetadata",wt=>{K.revokeObjectURL(Y);const ce=C.videoWidth>=r&&C.videoHeight>=l,pe=h<C.duration&&C.duration<y,fe=C.videoWidth/C.videoHeight==_/w;!ce&&r&&l?(x(),a.error(`\u89C6\u9891\u5C3A\u5BF8\u987B\u5927\u4E8E${r}px*${l}px!`)):!pe&&h&&y?(x(),a.error(`\u89C6\u9891\u65F6\u957F\u63A7\u5236\u5728${h}-${y}\u5185!`)):!fe&&_&&w?(x(),a.error(`\u8BF7\u4E0A\u4F20\u6BD4\u4F8B\u4E3A${_}:${w}\u7684\u89C6\u9891!`)):U()}),C.src=Y})}function de(s){if(!s)return"0 KB";const u=1024,r=["KB","MB","GB","TB","PB","EB","ZB","YB"],l=Math.floor(Math.log(s)/Math.log(u));return Math.round(s/Math.pow(u,l))+r[l]}return z(v({},E(i)),{onFinish:b,onChange:q,preview:X,remove:A,onBeforeUpload:H,getCSSProperties:S})}}),re=()=>{Oe(e=>({e20511b0:e.containerPadding}))},le=G.setup;G.setup=le?(e,t)=>(re(),le(e,t)):re;const Qe=G,et={class:"x-upload"},tt={key:0,class:"slots"},nt={key:1},st={class:"upload"},ot={class:"upload-card"},it={class:"upload-card-item-info"},at=["src"],ut=["src"],rt={class:"img-box-actions"},lt={key:0,class:"upload-title"},dt={key:0,class:"restriction-text"},ct={class:"flex center"},pt=["src"];function ft(e,t,n,m,B,S){const a=p("n-upload"),L=p("EyeOutlined"),i=p("n-icon"),g=p("DeleteOutlined"),j=p("PlusOutlined"),X=p("n-spin"),A=p("n-space"),D=p("n-alert"),H=p("n-image"),q=p("n-modal");return o(),c(oe,null,[F("div",et,[e.isSlots?(o(),c("div",tt,[d(a,I(e.$props,{onBeforeUpload:e.onBeforeUpload,onFinish:e.onFinish,onChange:e.onChange}),{default:f(()=>[O(e.$slots,"default",{},void 0,!0)]),_:3},16,["onBeforeUpload","onFinish","onChange"])])):(o(),c("div",nt,[F("div",st,[F("div",ot,[(o(!0),c(oe,null,Ne(e.imgList,(b,T)=>(o(),c("div",{key:`img_${T}`,class:"upload-card-item",style:M(e.getCSSProperties)},[F("div",it,[e.data.mediaType===2?(o(),c("video",{key:0,class:"upload-video",src:b,muted:""},null,8,at)):(o(),c("img",{key:1,class:"upload-img",src:b},null,8,ut)),F("div",rt,[d(i,{size:"18",class:"action-icon",onClick:J=>e.preview(b)},{default:f(()=>[d(L)]),_:2},1032,["onClick"]),e.disabled?N("",!0):(o(),$(i,{key:0,size:"18",class:"action-icon",onClick:J=>e.remove(T)},{default:f(()=>[d(g)]),_:2},1032,["onClick"]))])])],4))),128)),e.imgList.length<e.limit&&!e.disabled?(o(),c("div",{key:0,class:"upload-card-item upload-card-item-select-picture",style:M(e.getCSSProperties)},[d(X,{show:e.isLoading},{default:f(()=>[d(a,I(e.$props,{onBeforeUpload:e.onBeforeUpload,onFinish:e.onFinish,onChange:e.onChange}),{default:f(()=>[F("div",{class:"flex center column",style:M(e.getCSSProperties)},[d(i,{size:"18"},{default:f(()=>[d(j)]),_:1}),e.width>60?(o(),c("div",lt,"\u4E0A\u4F20\u56FE\u7247")):N("",!0)],4)]),_:1},16,["onBeforeUpload","onFinish","onChange"])]),_:1},8,["show"])],4)):N("",!0)])]),d(A,null,{default:f(()=>[e.restrictionText?(o(),c("div",dt,ie(e.restrictionText),1)):N("",!0)]),_:1}),d(A,null,{default:f(()=>[e.helpText?(o(),$(D,{key:0,type:"warning",class:"flex"},{default:f(()=>[Ue(ie(e.helpText),1)]),_:1})):N("",!0)]),_:1})]))]),d(q,{show:e.showModal,"onUpdate:show":t[0]||(t[0]=b=>e.showModal=b),preset:"card",title:"\u9884\u89C8",bordered:!1,style:{width:"520px"}},{default:f(()=>[F("div",ct,[e.data.mediaType===2?(o(),c("video",{key:0,style:{width:"100%","max-height":"500px"},src:e.previewUrl,controls:"",muted:""},null,8,pt)):(o(),$(H,{key:1,class:"preview-img",src:e.previewUrl},null,8,["src"]))])]),_:1},8,["show"])],64)}var kt=R(Qe,[["render",ft],["__scopeId","data-v-2436ec10"]]);const mt=k({name:"XLayoutMain",props:{containerStyle:{type:[String,Object],default:null}},setup(e){const t=P(v({},E(e)));return v({},E(t))}}),_t={class:"x-layout-main"},gt={key:0,class:"header"},ht={class:"main"},vt={key:1,class:"footer"};function yt(e,t,n,m,B,S){return o(),c("div",_t,[e.$slots.header?(o(),c("header",gt,[O(e.$slots,"header",{},void 0,!0)])):N("",!0),F("main",ht,[F("div",{ref:"g-container",style:M(e.containerStyle),class:"g-container"},[O(e.$slots,"default",{},void 0,!0)],4)]),e.$slots.footer?(o(),c("footer",vt,[O(e.$slots,"footer",{},void 0,!0)])):N("",!0)])}var Lt=R(mt,[["render",yt],["__scopeId","data-v-5200d68d"]]);export{Ct as X,De as _,St as a,kt as b,Lt as c};
