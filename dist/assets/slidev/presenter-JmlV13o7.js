import{_ as X,a as Z,b as Y,c as ee,d as te}from"../modules/unplugin-icons-BhvEuWb6.js";import{t as T,a0 as se,d as j,c as x,i as f,A as s,o as i,y as g,b,e as t,l as r,F as M,x as $,g as N,Z as oe,a1 as ne,a2 as le,h as z,p as G,a as H,D as U,M as ae,a3 as re,J as ie,a4 as ce,a5 as ue,k as S,a6 as de}from"../modules/vue-DA7ZT_zT.js";import{b as V,C as pe,u as ve,c as A,h as me,j as _e,d as fe,k as xe}from"../index--9Ob-amW.js";import{r as be,u as ge,S as L,I as O,Q as he,a as ye,N as ke,G as Ce}from"./SlidesShow-fcRJKfPH.js";import{s as we,b as D,p as Se,S as $e,g as Ne,c as ze,i as Fe,d as Ie}from"./bottom-8qCQm0Rb.js";import{N as qe}from"./NoteDisplay-mp33NeGw.js";import De from"./DrawingControls-D07lDWoP.js";import{u as Te}from"./DrawingPreview-DLR92MUa.js";import"../modules/shiki-CUMx7AeU.js";function Me(n){if(n==null)return{info:T(),update:async()=>{}};const a=`/@slidev/slide/${n}.json`,{data:e,execute:o}=se(a).json().get();return o(),{info:e,update:async p=>await fetch(a,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(p)}).then(c=>c.json())}}const je=j({__name:"NoteStatic",props:{no:{type:Number,required:!0},class:{type:String,required:!1},clicksContext:{type:null,required:!1}},setup(n){const a=n,{info:e}=Me(a.no);return(o,d)=>{var p,c;return i(),x(qe,{class:f(a.class),note:(p=s(e))==null?void 0:p.note,"note-html":(c=s(e))==null?void 0:c.noteHTML,"clicks-context":o.clicksContext},null,8,["class","note","note-html","clicks-context"])}}}),Ve=V(je,[["__file","/Users/wangqianru/slidev/node_modules/@slidev/client/internals/NoteStatic.vue"]]),J=n=>(G("data-v-52a29648"),n=n(),H(),n),Be=["title"],Pe={class:"flex gap-0.5 items-center min-w-16 font-mono mr1"},Re=J(()=>t("div",{"flex-auto":""},null,-1)),Ue={"text-primary":""},Ae=J(()=>t("span",{op25:""},"/",-1)),Le={op50:""},Oe=["max"],Ge=j({__name:"ClicksSlider",props:{clicksContext:{type:null,required:!0}},setup(n){const a=n,e=g(()=>a.clicksContext.total),o=g({get(){return a.clicksContext.current>e.value?-1:a.clicksContext.current},set(c){a.clicksContext.current=c}}),d=g(()=>Array.from({length:e.value+1},(c,u)=>u));function p(){(o.value<0||o.value>e.value)&&(o.value=0)}return(c,u)=>{const F=X;return i(),b("div",{class:f(["flex gap-1 items-center select-none",e.value?"":"op50"]),title:`Clicks in this slide: ${e.value}`},[t("div",Pe,[r(F,{"text-sm":"",op50:""}),Re,o.value>=0&&o.value!==s(pe)?(i(),b(M,{key:0},[t("span",Ue,$(o.value),1),Ae],64)):N("v-if",!0),t("span",Le,$(e.value),1)]),t("div",{relative:"","flex-auto":"",h5:"","font-mono":"",flex:"~",onDblclick:u[2]||(u[2]=l=>o.value=c.clicksContext.total)},[(i(!0),b(M,null,oe(d.value,l=>(i(),b("div",{key:l,border:"y main","of-hidden":"",relative:"",class:f([l===0?"rounded-l border-l":"",l===e.value?"rounded-r border-r":""]),style:z({width:e.value>0?`${1/e.value*100}%`:"100%"})},[t("div",{absolute:"","inset-0":"",class:f(l<=o.value?"bg-primary op15":"")},null,2),t("div",{class:f([+l==+o.value?"text-primary font-bold op100 border-primary":"op30 border-main",l===0?"rounded-l":"",l===e.value?"rounded-r":"border-r-2"]),"w-full":"","h-full":"","text-xs":"",flex:"","items-center":"","justify-center":"","z-1":""},$(l),3)],6))),128)),ne(t("input",{"onUpdate:modelValue":u[0]||(u[0]=l=>o.value=l),class:"range",absolute:"","inset-0":"",type:"range",min:0,max:e.value,step:1,"z-10":"",op0:"",style:z({"--thumb-width":`${1/(e.value+1)*100}%`}),onMousedown:p,onFocus:u[1]||(u[1]=l=>{var k;return(k=l.currentTarget)==null?void 0:k.blur()})},null,44,Oe),[[le,o.value]])],32)],10,Be)}}}),He=V(Ge,[["__scopeId","data-v-52a29648"],["__file","/Users/wangqianru/slidev/node_modules/@slidev/client/internals/ClicksSlider.vue"]]),B=n=>(G("data-v-d0ba6bbb"),n=n(),H(),n),Je={class:"bg-main h-full slidev-presenter"},Qe=B(()=>t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Current ",-1)),We={class:"relative grid-section next flex flex-col p-2 lg:p-4"},Ee=B(()=>t("div",{class:"absolute left-0 top-0 bg-main border-b border-r border-main px2 py1 op50 text-sm"}," Next ",-1)),Ke={key:1,class:"grid-section note grid grid-rows-[1fr_min-content] overflow-hidden"},Xe={class:"border-t border-main py-1 px-2 text-sm"},Ze={class:"grid-section bottom flex"},Ye=B(()=>t("div",{"flex-auto":""},null,-1)),et={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},tt={class:"progress-bar"},st=j({__name:"presenter",setup(n){const a=T();be(),ge(a);const{clicksContext:e,currentSlideNo:o,currentSlideRoute:d,hasNext:p,nextRoute:c,slides:u,queryClicks:F,getPrimaryClicks:l,total:k}=ve(),{isDrawing:Q}=Te(),W=A.titleTemplate.replace("%s",A.title||"Slidev");me({title:`Presenter - ${W}`}),T(!1);const{timer:E,resetTimer:P}=_e(),K=g(()=>u.value.map(w=>fe(w))),v=g(()=>e.value.current<e.value.total?[d.value,e.value.current+1]:p.value?[c.value,0]:null),C=g(()=>v.value&&K.value[v.value[0].no-1]);return U([d,F],()=>{C.value&&(C.value.current=v.value[1])},{immediate:!0}),ae(),re(()=>{const w=a.value.querySelector("#slide-content"),_=ie(ce()),I=ue();U(()=>{if(!I.value||Q.value||!we.value)return;const m=w.getBoundingClientRect(),h=(_.x-m.left)/m.width*100,y=(_.y-m.top)/m.height*100;if(!(h<0||h>100||y<0||y>100))return{x:h,y}},m=>{xe.cursor=m})}),(w,_)=>{var R;const I=Z,m=Y,h=ee,y=te;return i(),b(M,null,[t("div",Je,[t("div",{class:f(["grid-container",`layout${s(Se)}`])},[t("div",{ref_key:"main",ref:a,class:"relative grid-section main flex flex-col"},[r(L,{key:"main",class:"h-full w-full p-2 lg:p-4 flex-auto"},{default:S(()=>[r(ye,{"render-context":"presenter"})]),_:1}),(i(),x(He,{key:(R=s(d))==null?void 0:R.no,"clicks-context":s(l)(s(d)),class:"w-full pb2 px4 flex-none"},null,8,["clicks-context"])),Qe],512),t("div",We,[v.value&&C.value?(i(),x(L,{key:"next",class:"h-full w-full"},{default:S(()=>[(i(),x($e,{is:v.value[0].component,key:v.value[0].no,"clicks-context":C.value,class:f(s(Ne)(v.value[0])),route:v.value[0],"render-context":"previewNext"},null,8,["is","clicks-context","class","route"]))]),_:1})):N("v-if",!0),Ee]),N(" Notes "),(i(),b("div",Ke,[(i(),x(Ve,{key:`static-${s(o)}`,no:s(o),class:"w-full max-w-full h-full overflow-auto p-2 lg:p-4",style:z({fontSize:`${s(ze)}em`}),"clicks-context":s(e)},null,8,["no","style","clicks-context"])),t("div",Xe,[r(O,{title:"Increase font size",onClick:s(Fe)},{default:S(()=>[r(I)]),_:1},8,["onClick"]),r(O,{title:"Decrease font size",onClick:s(Ie)},{default:S(()=>[r(m)]),_:1},8,["onClick"]),N("v-if",!0)])])),t("div",Ze,[r(ke,{persist:!0}),Ye,t("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:_[2]||(_[2]=(...q)=>s(P)&&s(P)(...q))},[r(h,{class:"absolute"}),r(y,{class:"absolute opacity-0"})]),t("div",et,$(s(E)),1)]),(i(),x(De,{key:2}))],2),t("div",tt,[t("div",{class:"progress h-3px bg-primary transition-all",style:z({width:`${(s(o)-1)/(s(k)-1)*100}%`})},null,4)])]),r(Ce),r(he,{modelValue:s(D),"onUpdate:modelValue":_[3]||(_[3]=q=>de(D)?D.value=q:null)},null,8,["modelValue"])],64)}}}),pt=V(st,[["__scopeId","data-v-d0ba6bbb"],["__file","/Users/wangqianru/slidev/node_modules/@slidev/client/pages/presenter.vue"]]);export{pt as default};
