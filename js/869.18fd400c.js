"use strict";(globalThis["webpackChunkquasar_bgb_matchmanagement"]=globalThis["webpackChunkquasar_bgb_matchmanagement"]||[]).push([[869],{6869:(t,e,a)=>{a.r(e),a.d(e,{default:()=>st});var l=a(9835),i=a(6970);const s={class:"q-pa-md",style:{"max-width":"500px"}},o={class:"q-pa-md bg-grey-10 text-white",style:{"max-width":"500px"}},c={class:"q-pa-md q-gutter-sm"},n=(0,l._)("div",{class:"text-h6"},"Spiel erfassen",-1),d={class:"q-pt-md"},m={class:"q-gutter-sm"},u={class:"q-pt-md",style:{"max-width":"300px"}},h={class:"row items-center justify-end"},r={class:"row items-center justify-end"},p={class:"q-pt-md",style:{"max-width":"300px"}},b=(0,l._)("div",{class:"text-h6"},"Spiel ändern",-1),w={class:"q-pt-md"},x={class:"q-gutter-sm"},f={class:"q-pt-md",style:{"max-width":"300px"}},M={class:"row items-center justify-end"},g={class:"row items-center justify-end"},_={class:"q-pt-md",style:{"max-width":"300px"}},W=(0,l._)("span",{class:"q-ml-sm"},"Datensatz löschen?",-1);function v(t,e,a,v,y,q){const V=(0,l.up)("q-toolbar-title"),k=(0,l.up)("q-btn"),U=(0,l.up)("q-toolbar"),D=(0,l.up)("q-item-label"),$=(0,l.up)("q-item-section"),H=(0,l.up)("q-item"),S=(0,l.up)("q-list"),P=(0,l.up)("q-card-section"),A=(0,l.up)("q-input"),C=(0,l.up)("q-checkbox"),Z=(0,l.up)("q-date"),R=(0,l.up)("q-popup-proxy"),N=(0,l.up)("q-icon"),Q=(0,l.up)("q-time"),I=(0,l.up)("q-separator"),B=(0,l.up)("q-card-actions"),T=(0,l.up)("q-card"),Y=(0,l.up)("q-dialog"),L=(0,l.up)("q-avatar"),j=(0,l.up)("q-img"),z=(0,l.up)("q-page"),E=(0,l.Q2)("ripple"),K=(0,l.Q2)("close-popup");return(0,l.wg)(),(0,l.j4)(z,null,{default:(0,l.w5)((()=>[(0,l._)("div",s,[(0,l.Wm)(U,{class:"bg-primary text-white"},{default:(0,l.w5)((()=>[(0,l.Wm)(V,null,{default:(0,l.w5)((()=>[(0,l.Uk)("Spiele")])),_:1}),v.IsAdministrator?((0,l.wg)(),(0,l.j4)(k,{key:0,class:"bg-white text-primary",icon:"add",label:"Neu",onClick:e[0]||(e[0]=t=>v.addMatch=!0)})):(0,l.kq)("",!0)])),_:1})]),(0,l._)("div",o,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(y.index,(t=>(0,l.wy)(((0,l.wg)(),(0,l.j4)(S,{dark:"",bordered:"",separator:"",style:{"max-width":"470px"},key:t},{default:(0,l.w5)((()=>[t>0?(0,l.wy)(((0,l.wg)(),(0,l.j4)(H,{key:0,clickable:"",onClick:e=>q.onMatchClick(y.position[t],y.match[t],y.published[t],y.date[t]+" "+y.time[t],y.annotations[t])},{default:(0,l.w5)((()=>[(0,l.Wm)($,null,{default:(0,l.w5)((()=>[(0,l.Wm)(D,{overline:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(y.match[t]),1)])),_:2},1024),(0,l.Wm)(D,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(y.date[t])+" - "+(0,i.zw)(y.time[t]),1)])),_:2},1024),(0,l.Wm)(D,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(y.textPublished[t]),1)])),_:2},1024),(0,l.Wm)(D,{caption:""},{default:(0,l.w5)((()=>[(0,l.Uk)((0,i.zw)(y.annotations[t]),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[E]]):(0,l.kq)("",!0)])),_:2},1024)),[[E]]))),128))]),(0,l._)("div",c,[(0,l.Wm)(Y,{modelValue:v.addMatch,"onUpdate:modelValue":e[8]||(e[8]=t=>v.addMatch=t),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(T,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(P,null,{default:(0,l.w5)((()=>[n])),_:1}),(0,l.Wm)(P,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(A,{dense:"",modelValue:v.txtMatchNew,"onUpdate:modelValue":e[1]||(e[1]=t=>v.txtMatchNew=t),autofocus:"",label:"Spiel"},null,8,["modelValue"]),(0,l._)("div",d,[(0,l._)("div",m,[(0,l._)("div",null,[(0,l.Wm)(C,{"left-label":"",modelValue:v.chbPublishedNew,"onUpdate:modelValue":e[2]||(e[2]=t=>v.chbPublishedNew=t),label:"Publizieren"},null,8,["modelValue"])])])]),(0,l._)("div",u,[(0,l.Wm)(A,{filled:"",modelValue:v.txtDatetimeNew,"onUpdate:modelValue":e[5]||(e[5]=t=>v.txtDatetimeNew=t)},{prepend:(0,l.w5)((()=>[(0,l.Wm)(N,{name:"event",class:"cursor-pointer"},{default:(0,l.w5)((()=>[(0,l.Wm)(R,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{modelValue:v.txtDatetimeNew,"onUpdate:modelValue":e[3]||(e[3]=t=>v.txtDatetimeNew=t),mask:"DD.MM.YYYY HH:mm"},{default:(0,l.w5)((()=>[(0,l._)("div",h,[(0,l.wy)((0,l.Wm)(k,{label:"Close",color:"primary",flat:""},null,512),[[K]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),append:(0,l.w5)((()=>[(0,l.Wm)(N,{name:"access_time",class:"cursor-pointer"},{default:(0,l.w5)((()=>[(0,l.Wm)(R,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,l.w5)((()=>[(0,l.Wm)(Q,{modelValue:v.txtDatetimeNew,"onUpdate:modelValue":e[4]||(e[4]=t=>v.txtDatetimeNew=t),mask:"DD.MM.YYYY HH:mm",format24h:""},{default:(0,l.w5)((()=>[(0,l._)("div",r,[(0,l.wy)((0,l.Wm)(k,{label:"Close",color:"primary",flat:""},null,512),[[K]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,l._)("div",p,[(0,l.Wm)(A,{modelValue:v.txtAnnotationsNew,"onUpdate:modelValue":e[6]||(e[6]=t=>v.txtAnnotationsNew=t),filled:"",type:"textarea",label:"Kommentar"},null,8,["modelValue"])])])),_:1}),(0,l.Wm)(I),(0,l.Wm)(B,{class:"text-primary",align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(k,{flat:"",label:"Abbrechen"},null,512),[[K]]),(0,l.wy)((0,l.Wm)(k,{icon:"save",label:"Speichern",onClick:e[7]||(e[7]=t=>q.addMatchSave(v.txtMatchNew,v.chbPublishedNew,v.txtDatetimeNew,v.txtAnnotationsNew)),disable:""===v.txtMatchNew},null,8,["disable"]),[[K]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(Y,{modelValue:v.editMatch,"onUpdate:modelValue":e[17]||(e[17]=t=>v.editMatch=t),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(T,{style:{"min-width":"350px"}},{default:(0,l.w5)((()=>[(0,l.Wm)(P,null,{default:(0,l.w5)((()=>[b])),_:1}),(0,l.Wm)(P,{class:"q-pt-none"},{default:(0,l.w5)((()=>[(0,l.Wm)(A,{dense:"",modelValue:v.txtMatch,"onUpdate:modelValue":e[9]||(e[9]=t=>v.txtMatch=t),autofocus:"",label:"Spiel"},null,8,["modelValue"]),(0,l._)("div",w,[(0,l._)("div",x,[(0,l._)("div",null,[(0,l.Wm)(C,{"left-label":"",modelValue:v.chbPublished,"onUpdate:modelValue":e[10]||(e[10]=t=>v.chbPublished=t),label:"Publizieren"},null,8,["modelValue"])])])]),(0,l._)("div",f,[(0,l.Wm)(A,{filled:"",modelValue:v.txtDatetime,"onUpdate:modelValue":e[13]||(e[13]=t=>v.txtDatetime=t)},{prepend:(0,l.w5)((()=>[(0,l.Wm)(N,{name:"event",class:"cursor-pointer"},{default:(0,l.w5)((()=>[(0,l.Wm)(R,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{modelValue:v.txtDatetime,"onUpdate:modelValue":e[11]||(e[11]=t=>v.txtDatetime=t),mask:"DD.MM.YYYY HH:mm"},{default:(0,l.w5)((()=>[(0,l._)("div",M,[(0,l.wy)((0,l.Wm)(k,{label:"Close",color:"primary",flat:""},null,512),[[K]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),append:(0,l.w5)((()=>[(0,l.Wm)(N,{name:"access_time",class:"cursor-pointer"},{default:(0,l.w5)((()=>[(0,l.Wm)(R,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,l.w5)((()=>[(0,l.Wm)(Q,{modelValue:v.txtDatetime,"onUpdate:modelValue":e[12]||(e[12]=t=>v.txtDatetime=t),mask:"DD.MM.YYYY HH:mm",format24h:""},{default:(0,l.w5)((()=>[(0,l._)("div",g,[(0,l.wy)((0,l.Wm)(k,{label:"Close",color:"primary",flat:""},null,512),[[K]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,l._)("div",_,[(0,l.Wm)(A,{modelValue:v.txtAnnotations,"onUpdate:modelValue":e[14]||(e[14]=t=>v.txtAnnotations=t),filled:"",type:"textarea",label:"Kommentar"},null,8,["modelValue"])])])),_:1}),(0,l.Wm)(I),(0,l.Wm)(B,{class:"text-primary",align:"right"},{default:(0,l.w5)((()=>[v.IsAdministrator?((0,l.wg)(),(0,l.j4)(k,{key:0,icon:"delete",color:"primary",onClick:e[15]||(e[15]=t=>v.delMatch=!0)})):(0,l.kq)("",!0),(0,l.wy)((0,l.Wm)(k,{flat:"",label:"Abbrechen"},null,512),[[K]]),(0,l.wy)((0,l.Wm)(k,{icon:"save",label:"Speichern",onClick:e[16]||(e[16]=t=>q.editMatchSave(v.intPosition,v.txtOldMatch,v.txtMatch,v.chbPublished,v.txtDatetime,v.txtAnnotations)),disable:""===v.txtMatch},null,8,["disable"]),[[K]])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(Y,{modelValue:v.delMatch,"onUpdate:modelValue":e[19]||(e[19]=t=>v.delMatch=t),persistent:""},{default:(0,l.w5)((()=>[(0,l.Wm)(T,null,{default:(0,l.w5)((()=>[(0,l.Wm)(P,{class:"row items-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(L,{icon:"delete",color:"primary","text-color":"white"}),W])),_:1}),(0,l.Wm)(B,{align:"right"},{default:(0,l.w5)((()=>[(0,l.wy)((0,l.Wm)(k,{flat:"",label:"Nein",color:"primary"},null,512),[[K]]),(0,l.wy)((0,l.Wm)(k,{flat:"",label:"Ja",color:"primary",onClick:e[18]||(e[18]=t=>q.archiveMatch(v.intPosition,v.txtOldMatch,v.txtDatetime))},null,512),[[K]])])),_:1})])),_:1})])),_:1},8,["modelValue"])]),(0,l.Wm)(j,{src:"statics/BGB.jpg",class:"header-image absolute-top"})])),_:1})}var y=a(499);const q=(0,y.iH)(""),V=(0,y.iH)(""),k=(0,y.iH)(!1),U=(0,y.iH)(""),D=(0,y.iH)(""),$=(0,y.iH)(""),H={name:"ListMatch",setup(){return{IsAdministrator:(0,y.iH)(!1),intPosition:(0,y.iH)(q),txtMatch:(0,y.iH)(V),chbPublished:(0,y.iH)(k),txtDatetime:(0,y.iH)(U),txtAnnotations:(0,y.iH)(D),txtOldMatch:(0,y.iH)($),txtMatchNew:(0,y.iH)(""),chbPublishedNew:(0,y.iH)(!1),txtDatetimeNew:(0,y.iH)(""),txtAnnotationsNew:(0,y.iH)("<STANDARDTEXT>"),addMatch:(0,y.iH)(!1),editMatch:(0,y.iH)(!1),delMatch:(0,y.iH)(!1)}},data(){return{URLMatch:"https://script.google.com/macros/s/AKfycbyh43MSF1Vz9W3TZ0_9e273B81CtCEk4se3yHj9HCbIvBlfw9g6tHE3d5O8eXW3yIkyog/exec?ID=1znyBnIzqghCeRImZ8fSVGB_gR6TESuqep20YbUhkhSU&SH=BGB-Match",URLParticipant:"https://script.google.com/macros/s/AKfycbz7shs3qaBAxwLyvDH7XZVuqFcX2Yg8mzVxZe8RcO3KWQuFCRKlBSKu5uMSvJTKQOGkDw/exec?ID=1HCZKuGO-dmNJwrEsFyN2acvnE-WMHabBW8jWdhO4ggI&SH=BGB-Participant",URLParticipantArchive:"https://script.google.com/macros/s/AKfycby__5OEag_-ClbApCv2r8x9Ity4MYBBrrJ7ZD4B2FOeqxSAZD-bB0bUqM4Su91W3NvnPA/exec?ID=1fjnXO0Fsrj03Da8CDaBSClheSrE9Qr6VMNWzL-JQR7s&SH=BGB-ParticipantArchive",index:[],position:[],match:[],published:[],textPublished:[],time:[],annotations:[],date:[]}},computed:{},mounted(){this.getTableMatch()},methods:{getTableMatch(){const t=this.IsAdministrator?"":"TRUE";console.log("URLMatch: "+this.URLMatch+"&func=Read&published="+t),this.$axios(`${this.URLMatch}&func=Read&published=${t}`).then((t=>{this.tableMatch=t.data.split("\n");for(let e=0;e<this.tableMatch.length-1;e++){const t=this.tableMatch[e].split(",");for(let a=0;a<t.length;a++)switch(a){case 0:this.index[e+1]=e+1,this.position[e+1]=t[a];break;case 2:this.match[e+1]=t[a];break;case 3:this.published[e+1]=t[a],"TRUE"===t[a]?this.textPublished[e+1]="Aktiv":this.textPublished[e+1]="Inaktiv";break;case 4:this.time[e+1]=t[a].substr(0,5);break;case 5:this.annotations[e+1]=t[a].replace(/§§§/g," / ");break;case 6:this.date[e+1]=t[a];break;default:break}}})).catch((t=>{console.log(t)}))},onMatchClick(t,e,a,l,i){console.log("Clicked on an Match: "+t+", "+e+", "+a+", "+l+", "+i),q.value=t,V.value=e,k.value="TRUE"===a,U.value=l,D.value=i;const s=l.substr(0,10),o=l.substr(11,5);$.value=e.trim()+" "+s.substr(0,6)+s.substr(8,2)+" - "+o.substr(0,5),this.IsAdministrator&&(this.editMatch=!0)},addMatchSave(t,e,a,l){console.log("addMatchSave: "+t+", "+e+", "+a+", "+l);const i=a.substr(0,10),s=a.substr(11,5);this.$axios(`${this.URLMatch}&func=Add&match=${encodeURI(t.replace(","," "))}&published=${e}&time=${s}&annotations=${encodeURI(l.replace(",",";"))}&date=${i}`).then((t=>{"Success, requested action completed"===t.data&&this.getTableMatch()})).catch((t=>{console.log(t)}))},editMatchSave(t,e,a,l,i,s){console.log("editMatchSave - Update: "+t+", "+e+", "+a+", "+l+", "+i+", "+s);const o=i.substr(0,10),c=i.substr(11,5),n=a.trim()+" "+o.substr(0,6)+o.substr(8,2)+" - "+c.substr(0,5);console.log("editMatchSave - UpdateMatch: "+e+", "+n),this.$axios(`${this.URLMatch}&func=Update&index=${t}&match=${encodeURI(a.replace(","," "))}&published=${l}&time=${c}&annotations=${encodeURI(s.replace(",",";"))}&date=${o}`).then((t=>{"Success, requested action completed"===t.data&&this.$axios(`${this.URLParticipant}&func=UpdateMatch&oldMatch=${e}&newMatch=${n}`).then((t=>{"Success, requested action completed"===t.data&&this.getTableMatch()})).catch((t=>{console.log(t)}))})).catch((t=>{console.log(t)}))},async archiveMatch(t,e,a){console.log("deleteMatch: "+t+", "+e+", "+a);const l=a.substr(0,10),i=t=>new Promise((e=>setTimeout(e,t)));this.$axios(`${this.URLParticipant}&func=ReadAll&match=${e}`).then((async t=>{this.tableParticipant=t.data.split("\n");for(let e=0;e<this.tableParticipant.length-1;e++){const t=this.tableParticipant[e].split(",");await i(1e3),this.$axios(`${this.URLParticipantArchive}&func=Add&timestamp=${t[1]}&match=${t[2]}&participant=${t[3]}&arrival=${t[4]}&annotations=${t[5]}&action=${t[6]}&reaction=${t[7]}&date=${l}`).catch((t=>{console.log(t)}))}})).catch((t=>{console.log(t)})),this.deleteMatch(t,e)},deleteMatch(t,e){this.$axios(`${this.URLParticipant}&func=DeleteMatch&match=${e}`).then((e=>{"Success, requested action completed"===e.data&&this.$axios(`${this.URLMatch}&func=Delete&index=${t}`).then((t=>{"Success, requested action completed"===t.data&&(this.getTableMatch(),this.editMatch=!1)})).catch((t=>{console.log(t)}))})).catch((t=>{console.log(t)}))}}};var S=a(1639),P=a(9885),A=a(1663),C=a(1973),Z=a(8879),R=a(3246),N=a(490),Q=a(1233),I=a(3115),B=a(2074),T=a(4458),Y=a(3190),L=a(6611),j=a(1006),z=a(2857),E=a(2765),K=a(2952),O=a(6770),G=a(926),F=a(1821),J=a(1357),X=a(335),tt=a(1136),et=a(2146),at=a(9984),lt=a.n(at);const it=(0,S.Z)(H,[["render",v]]),st=it;lt()(H,"components",{QPage:P.Z,QToolbar:A.Z,QToolbarTitle:C.Z,QBtn:Z.Z,QList:R.Z,QItem:N.Z,QItemSection:Q.Z,QItemLabel:I.Z,QDialog:B.Z,QCard:T.Z,QCardSection:Y.Z,QInput:L.Z,QCheckbox:j.Z,QIcon:z.Z,QPopupProxy:E.Z,QDate:K.Z,QTime:O.Z,QSeparator:G.Z,QCardActions:F.Z,QAvatar:J.Z,QImg:X.Z}),lt()(H,"directives",{Ripple:tt.Z,ClosePopup:et.Z})}}]);