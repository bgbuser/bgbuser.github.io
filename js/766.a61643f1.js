"use strict";(globalThis["webpackChunkquasar_bgb_matchmanagement"]=globalThis["webpackChunkquasar_bgb_matchmanagement"]||[]).push([[766],{6766:(e,a,t)=>{t.r(a),t.d(a,{default:()=>B});var l=t(9835),d=t(6970);const r={class:"q-pa-md",style:{"max-width":"500px"}},s={class:"q-pa-md bg-grey-10 text-white",style:{"max-width":"500px"}},o={class:"q-pa-md q-gutter-sm"},i=(0,l._)("div",{class:"text-h6"},"Karte erfassen",-1),n={class:"q-pt-md"},c={class:"q-gutter-sm"},u=(0,l._)("div",{class:"text-h6"},"Karte ändern",-1),h={class:"q-pt-md"},m={class:"q-gutter-sm"},p=(0,l._)("span",{class:"q-ml-sm"},"Datensatz löschen?",-1);function W(e,a,t,W,C,w){const y=(0,l.up)("q-toolbar-title"),b=(0,l.up)("q-btn"),x=(0,l.up)("q-toolbar"),I=(0,l.up)("q-item-label"),g=(0,l.up)("q-item-section"),f=(0,l.up)("q-item"),H=(0,l.up)("q-list"),M=(0,l.up)("q-card-section"),_=(0,l.up)("q-input"),q=(0,l.up)("q-checkbox"),k=(0,l.up)("q-separator"),v=(0,l.up)("q-card-actions"),U=(0,l.up)("q-card"),V=(0,l.up)("q-dialog"),T=(0,l.up)("q-avatar"),Z=(0,l.up)("q-img"),Q=(0,l.up)("q-page"),N=(0,l.Q2)("ripple"),R=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)(Q,null,{default:(0,l.w5)((()=>[(0,l._)("div",r,[(0,l.Wm)(x,{class:"bg-primary text-white"},{default:(0,l.w5)((()=>[(0,l.Wm)(y,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Wer hat meine Karte")])),_:1}),(0,l.Wm)(b,{class:"bg-white text-primary",icon:"add",label:"Neu",onClick:a[0]||(a[0]=e=>W.addWhereIsMyCard=!0)})])),_:1})]),(0,l._)("div",s,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(C.index,(e=>(0,l.wy)(((0,l.wg)(),(0,l.j4)(H,{dark:"",bordered:"",separator:"",style:{"max-width":"470px"},key:e},{default:(0,l.w5)((()=>[e>0?(0,l.wy)(((0,l.wg)(),(0,l.j4)(f,{key:0,clickable:"",onClick:a=>w.onWhereIsMyCardClick(C.position[e],C.cardHolder[e],C.discounted[e],C.whoHasTheCard[e])},{default:(0,l.w5)((()=>[(0,l.Wm)(g,null,{default:(0,l.w5)((()=>[(0,l.Wm)(I,{overline:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Inhaber: "+(0,d.zw)(C.cardHolder[e]),1)])),_:2},1024),(0,l.Wm)(I,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Ermäßigt: "+(0,d.zw)(C.textDiscounted[e]),1)])),_:2},1024),(0,l.Wm)(I,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)("Wer hat die Karte: "+(0,d.zw)(C.whoHasTheCard[e]),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[N]]):(0,l.kq)("",!0)])),_:2},1024)),[[N]]))),128))]),(0,l._)("div",o,[(0,l.Wm)(V,{modelValue:W.addWhereIsMyCard,"onUpdate:modelValue":a[5]||(a[5]=e=>W.addWhereIsMyCard=e),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(U,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(M,null,{default:(0,l.w5)((()=>[i])),_:1}),(0,l.Wm)(M,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{dense:"",modelValue:W.txtCardHolderNew,"onUpdate:modelValue":a[1]||(a[1]=e=>W.txtCardHolderNew=e),autofocus:"",label:"Inhaber"},null,8,["modelValue"]),(0,l._)("div",n,[(0,l._)("div",c,[(0,l._)("div",null,[(0,l.Wm)(q,{"left-label":"",modelValue:W.txtDiscountedNew,"onUpdate:modelValue":a[2]||(a[2]=e=>W.txtDiscountedNew=e),label:"Ermäßigt"},null,8,["modelValue"])])])]),(0,l.Wm)(_,{dense:"",modelValue:W.txtWhoHasTheCardNew,"onUpdate:modelValue":a[3]||(a[3]=e=>W.txtWhoHasTheCardNew=e),autofocus:"",label:"Wer hat die Karte"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(k),(0,l.Wm)(v,{class:"text-primary",align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(b,{flat:"",label:"Abbrechen"},null,512),[[R]]),(0,l.wy)((0,l.Wm)(b,{icon:"save",label:"Speichern",onClick:a[4]||(a[4]=e=>w.addWhereIsMyCardSave(W.txtCardHolderNew,W.txtDiscountedNew,W.txtWhoHasTheCardNew)),disable:""===W.txtCardHolderNew},null,8,["disable"]),[[R]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(V,{modelValue:W.editWhereIsMyCard,"onUpdate:modelValue":a[11]||(a[11]=e=>W.editWhereIsMyCard=e),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(U,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(M,null,{default:(0,l.w5)((()=>[u])),_:1}),(0,l.Wm)(M,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{dense:"",modelValue:W.txtCardHolder,"onUpdate:modelValue":a[6]||(a[6]=e=>W.txtCardHolder=e),autofocus:"",label:"Inhaber"},null,8,["modelValue"]),(0,l._)("div",h,[(0,l._)("div",m,[(0,l._)("div",null,[(0,l.Wm)(q,{"left-label":"",modelValue:W.txtDiscounted,"onUpdate:modelValue":a[7]||(a[7]=e=>W.txtDiscounted=e),label:"Ermäßigt"},null,8,["modelValue"])])])]),(0,l.Wm)(_,{dense:"",modelValue:W.txtWhoHasTheCard,"onUpdate:modelValue":a[8]||(a[8]=e=>W.txtWhoHasTheCard=e),autofocus:"",label:"Wer hat die Karte"},null,8,["modelValue"])])),_:1}),(0,l.Wm)(k),(0,l.Wm)(v,{class:"text-primary",align:"right"},{default:(0,l.w5)((()=>[W.IsAdministrator?((0,l.wg)(),(0,l.j4)(b,{key:0,icon:"delete",color:"primary",onClick:a[9]||(a[9]=e=>W.delWhereIsMyCard=!0)})):(0,l.kq)("",!0),(0,l.wy)((0,l.Wm)(b,{flat:"",label:"Abbrechen"},null,512),[[R]]),(0,l.wy)((0,l.Wm)(b,{icon:"save",label:"Speichern",onClick:a[10]||(a[10]=e=>w.editWhereIsMyCardSave(W.intPosition,W.txtCardHolder,W.txtDiscounted,W.txtWhoHasTheCard)),disable:""===W.txtCardHolder},null,8,["disable"]),[[R]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(V,{modelValue:W.delWhereIsMyCard,"onUpdate:modelValue":a[13]||(a[13]=e=>W.delWhereIsMyCard=e),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(U,null,{default:(0,l.w5)((()=>[(0,l.Wm)(M,{class:"row items-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(T,{icon:"delete",color:"primary","text-color":"white"}),p])),_:1}),(0,l.Wm)(v,{align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(b,{flat:"",label:"Nein",color:"primary"},null,512),[[R]]),(0,l.wy)((0,l.Wm)(b,{flat:"",label:"Ja",color:"primary",onClick:a[12]||(a[12]=e=>w.deleteWhereIsMyCard(W.intPosition))},null,512),[[R]])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,l.Wm)(Z,{src:"statics/BGB.jpg",class:"header-image absolute-top"})])),_:1})}var C=t(499);const w=(0,C.iH)(""),y=(0,C.iH)(""),b=(0,C.iH)(""),x=(0,C.iH)(""),I={name:"ListWhoHasTheCard",setup(){return{IsAdministrator:(0,C.iH)(!1),intPosition:(0,C.iH)(w),txtCardHolder:(0,C.iH)(y),txtDiscounted:(0,C.iH)(b),txtWhoHasTheCard:(0,C.iH)(x),txtCardHolderNew:(0,C.iH)(""),txtDiscountedNew:(0,C.iH)(!1),txtWhoHasTheCardNew:(0,C.iH)(""),addWhereIsMyCard:(0,C.iH)(!1),editWhereIsMyCard:(0,C.iH)(!1),delWhereIsMyCard:(0,C.iH)(!1)}},data(){return{URLWhereIsMyCard:"https://script.google.com/macros/s/AKfycbx3lJiQMsu9KNp7WgXYO4FX-5nPjeEpP7f2SmFgZ8ZZ2f944rghYctGxUMiNVZZ7Jn2/exec?ID=1AA2nnIb886xaBjpSaxwf2JNtujKnJc4xSVR-ChRGs2U&SH=BGB-WhereIsMyCard",index:[],position:[],cardHolder:[],discounted:[],textDiscounted:[],whoHasTheCard:[]}},computed:{},mounted(){this.getTableWhereIsMyCard()},methods:{getTableWhereIsMyCard(){console.log("URLWhereIsMyCard: "+this.URLWhereIsMyCard+"&func=Read"),this.$axios(`${this.URLWhereIsMyCard}&func=Read`).then((e=>{this.tableWhereIsMyCard=e.data.split("\n");for(let a=0;a<this.tableWhereIsMyCard.length-1;a++){const e=this.tableWhereIsMyCard[a].split(",");for(let t=0;t<e.length;t++)switch(t){case 0:this.index[a+1]=a+1,this.position[a+1]=e[t];break;case 2:this.cardHolder[a+1]=e[t];break;case 3:this.discounted[a+1]=e[t],"TRUE"===e[t]?this.textDiscounted[a+1]="Ja":this.textDiscounted[a+1]="Nein";break;case 4:this.whoHasTheCard[a+1]=e[t];break;default:break}}})).catch((e=>{console.log(e)}))},onWhereIsMyCardClick(e,a,t,l){console.log("Clicked on WhereIsMyCard: "+e+", "+a+", "+t+", "+l),w.value=e,y.value=a,b.value="TRUE"===t,x.value=l,this.editWhereIsMyCard=!0},addWhereIsMyCardSave(e,a,t){console.log("addWhereIsMyCardSave: "+e+", "+a+", "+t),this.$axios(`${this.URLWhereIsMyCard}&func=Add&cardholder=${encodeURI(e.replace(","," "))}&discounted=${a}&whohasthecard=${encodeURI(t.replace(",",""))}`).then((e=>{"Success, requested action completed"===e.data&&this.getTableWhereIsMyCard()})).catch((e=>{console.log(e)}))},editWhereIsMyCardSave(e,a,t,l,d){console.log("editWhereIsMyCardSave: "+e+", "+a+", "+t+", "+l+", "+d),this.$axios(`${this.URLWhereIsMyCard}&func=Update&index=${e}&cardholder=${encodeURI(a.replace(","," "))}&discounted=${t}&whohasthecard=${encodeURI(l.replace(",",""))}`).then((e=>{"Success, requested action completed"===e.data&&this.getTableWhereIsMyCard()})).catch((e=>{console.log(e)}))},deleteWhereIsMyCard(e){console.log("deleteWhereIsMyCard: "+e),this.$axios(`${this.URLWhereIsMyCard}&func=Delete&index=${e}`).then((e=>{"Success, requested action completed"===e.data&&(this.getTableWhereIsMyCard(),this.editWhereIsMyCard=!1)})).catch((e=>{console.log(e)}))}}};var g=t(1639),f=t(9885),H=t(1663),M=t(1973),_=t(8879),q=t(3246),k=t(490),v=t(1233),U=t(3115),V=t(2074),T=t(4458),Z=t(3190),Q=t(6611),N=t(1006),R=t(926),S=t(1821),D=t(1357),$=t(335),A=t(1136),K=t(2146),L=t(9984),j=t.n(L);const P=(0,g.Z)(I,[["render",W]]),B=P;j()(I,"components",{QPage:f.Z,QToolbar:H.Z,QToolbarTitle:M.Z,QBtn:_.Z,QList:q.Z,QItem:k.Z,QItemSection:v.Z,QItemLabel:U.Z,QDialog:V.Z,QCard:T.Z,QCardSection:Z.Z,QInput:Q.Z,QCheckbox:N.Z,QSeparator:R.Z,QCardActions:S.Z,QAvatar:D.Z,QImg:$.Z}),j()(I,"directives",{Ripple:A.Z,ClosePopup:K.Z})}}]);