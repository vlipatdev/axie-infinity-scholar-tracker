(this["webpackJsonpaxie-infinity-scholar-tracker"]=this["webpackJsonpaxie-infinity-scholar-tracker"]||[]).push([[0],{138:function(e,t,a){},168:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(38),c=a.n(r),s=(a(138),a(5)),i=a(15),l=a(12),o=a(82),d=a.n(o),j=a(105),h=a(106),m=a.n(h),x=a(4),b=a(251),u=a(244),p=a(253),g=a(252),O=a(250),_=a(249),f=a(235),v=a(84),y=a.n(v),S=a(70),C=a.n(S),w=a(255),k=a(254),F=a(256),D=a(245),I=a(108),W=a.n(I),z=a(266),N=a(270),A=a(268),U=a(269),M=a(267),R=a.p+"static/media/profile.3acea27c.jpg",E=a(0);var J=function(e){var t=e.open,a=e.onClose;return Object(E.jsxs)(z.a,{open:t,onClose:a,children:[Object(E.jsx)(M.a,{children:"About"}),Object(E.jsx)(A.a,{children:Object(E.jsxs)(U.a,{children:[Object(E.jsxs)(b.a,{children:[Object(E.jsxs)(O.a,{children:["Unofficial scholar tracker for"," ",Object(E.jsx)("a",{href:"https://axieinfinity.com/",style:{textDecoration:"none",color:"#1976D2"},children:"Axie Infinity"}),"."]}),Object(E.jsx)("br",{}),Object(E.jsx)(O.a,{children:"Future releases will include scholar search, daily SLP data, dark mode, table customization, table pagination, multiple currencies, JSON support from other trackers, and more."}),Object(E.jsx)("br",{}),Object(E.jsxs)(O.a,{children:["Data provided by"," ",Object(E.jsx)("a",{href:"https://skymavis.com/",style:{textDecoration:"none",color:"#1976D2"},children:"Sky Mavis"}),". Crypto prices courtesy of"," ",Object(E.jsx)("a",{href:"https://www.coingecko.com/en/api",style:{textDecoration:"none",color:"#1976D2"},children:"CoinGecko"}),"."]}),Object(E.jsx)("br",{}),Object(E.jsxs)(O.a,{children:[Object(E.jsx)("a",{style:{color:"#1976D2",textDecoration:"none"},href:"mailto:610b145c-e385-48c8-bf7f-c4b9a2468b18@simplelogin.co?subject=Axie Scholar Tracker Bug",children:"Report errors or bugs"}),"."]})]}),Object(E.jsxs)(b.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",mt:4},children:[Object(E.jsx)(D.a,{src:R,sx:{mr:1,height:40,width:40}}),Object(E.jsxs)(O.a,{color:"text.primary",sx:{fontSize:14},children:["coded by"," ",Object(E.jsx)("a",{style:{textDecoration:"none",color:"#1976D2"},href:"https://www.facebook.com/xf606bZhSFYbORVF/",children:"vlipat"})," ","with \u2764\ufe0f"]})]})]})}),Object(E.jsx)(N.a,{children:Object(E.jsx)(g.a,{onClick:a,children:"Okay"})})]})},L=a.p+"static/media/axs_logo.c5d7796b.png";var P=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1];return Object(E.jsxs)(k.a,{sx:{background:"none"},elevation:0,position:"static",children:[Object(E.jsxs)(w.a,{children:[Object(E.jsx)(F.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2},children:Object(E.jsx)(D.a,{alt:"slp icon",src:L})}),Object(E.jsx)(O.a,{variant:"h1",component:"div",sx:{flexGrow:1,fontSize:24},children:"Axie Scholar Tracker"}),Object(E.jsx)(f.a,{title:"About",children:Object(E.jsx)(g.a,{onClick:function(){r(!0)},sx:{color:"#FFFFFF"},children:Object(E.jsx)(W.a,{})})})]}),Object(E.jsx)(J,{open:a,onClose:function(){r(!1)}})]})},T=a(257),B=a(258),G=a.p+"static/media/slp_logo.18074c03.png",V=function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},q=function(e){return new Date(e).toLocaleDateString("en-US",{month:"long",day:"numeric",hour:"numeric",minute:"numeric"})},H=function(e,t){return parseInt((e/t).toFixed(0))},Z=function(e){return Math.ceil((Date.now()-parseInt("".concat(e,"000")))/864e5)},Y=function(e,t){var a=0;return e.forEach((function(e){a+=parseInt(e[t])})),a},$=function(e){return 100-e},K=function(e,t){return parseInt((e*(t/100)).toFixed(0))},Q=function(e,t){return e.sort((function(e,a){return e[t].toString().localeCompare(a[t].toString(),void 0,{numeric:!0,sensitivity:"base"})}))};var X=function(e){var t=e.label,a=e.slp,n=e.slpPrice,r=e.currency;return Object(E.jsx)(T.a,{elevation:0,sx:{display:"flex",flexDirection:"column",alignItems:"center",borderRadius:"15px",backgroundColor:"#f2f8fd"},children:Object(E.jsxs)(B.a,{children:[Object(E.jsx)(O.a,{sx:{textAlign:"center"},color:"text.secondary",gutterBottom:!0,children:t}),Object(E.jsxs)(b.a,{sx:{display:"flex",m:1,alignItems:"center"},children:[Object(E.jsx)(D.a,{alt:"slp icon",src:G,sx:{m:1,height:40,width:40}}),Object(E.jsx)(O.a,{sx:{fontSize:24,fontWeight:"bold"},variant:"h5",component:"div",children:V(a)})]}),Object(E.jsxs)(O.a,{sx:{textAlign:"center"},color:"text.secondary",children:["\u2248 ",V((a*n).toFixed(0))," ",r.toUpperCase()]})]})})},ee=a(16),te=a(242),ae=a(241),ne=a(109),re=a.n(ne),ce=a(110),se=a.n(ce),ie=a(238),le=n.forwardRef((function(e,t){return Object(E.jsx)(ie.a,Object(i.a)({icon:Object(E.jsx)(re.a,{}),ref:t,variant:"filled"},e))}));var oe=function(e){var t=e.onClose,a=e.open,r=e.type,c=Object(E.jsx)(n.Fragment,{children:Object(E.jsx)(F.a,{size:"small","aria-label":"close",color:"inherit",onClick:t,children:Object(E.jsx)(se.a,{fontSize:"small"})})});return Object(E.jsx)("div",{children:Object(E.jsx)(ae.a,{open:a,autoHideDuration:6e3,onClose:t,action:c,children:Object(E.jsx)(le,{onClose:t,severity:"success"===r?"info":"error",sx:{width:"100%"},children:"success"===r?"Scholar added":"Successfully removed"})})})};var de=function(e){var t=e.localData,a=e.onUpdate,r=e.scholars,c=Object(n.useState)(!1),o=Object(l.a)(c,2),d=o[0],j=o[1],h=Object(n.useState)({name:"",ronin_address:"",manager_share:""}),m=Object(l.a)(h,2),x=m[0],p=m[1],O=Object(n.useState)({name:!0,ronin_address:!0,manager_share:!0,name_error_message:"",ronin_error_message:"",manager_error_message:""}),_=Object(l.a)(O,2),f=_[0],v=_[1];function y(e){var t=e.target,a=t.name,n=t.value;p((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(s.a)({},a,n))}))}function S(e){var a=e.target,n=a.name,r=a.value;v((function(e){return"name"===n?r?-1!==t.findIndex((function(e){return e.name.toLowerCase()===r.toLowerCase()}))?Object(i.a)(Object(i.a)({},e),{},{name:!1,name_error_message:"Name already exists"}):Object(i.a)(Object(i.a)({},e),{},{name:!0,name_error_message:""}):Object(i.a)(Object(i.a)({},e),{},{name:!1,name_error_message:"Name is required"}):"ronin_address"===n?r?-1!==t.findIndex((function(e){return e.ronin_address.toLowerCase()===r.toLowerCase()}))?Object(i.a)(Object(i.a)({},e),{},{ronin_address:!1,ronin_error_message:"Ronin address already exists"}):r.match(/^ronin:[a-zA-Z0-9]{40}$/)?Object(i.a)(Object(i.a)({},e),{},{ronin_address:!0,ronin_error_message:""}):Object(i.a)(Object(i.a)({},e),{},{ronin_address:!1,ronin_error_message:"Invalid ronin address"}):Object(i.a)(Object(i.a)({},e),{},{ronin_address:!1,ronin_error_message:"Ronin address is required"}):"manager_share"===n?r?r<0||r>100?Object(i.a)(Object(i.a)({},e),{},{manager_share:!1,manager_error_message:"Manager share must be 0 - 100"}):Object(i.a)(Object(i.a)({},e),{},{manager_share:!0,manager_error_message:""}):Object(i.a)(Object(i.a)({},e),{},{manager_share:!1,manager_error_message:"Manager share is required"}):void 0}))}return Object(E.jsxs)(b.a,{children:[Object(E.jsxs)(u.a,{container:!0,spacing:2,sx:{mb:6},children:[Object(E.jsx)(u.a,{item:!0,xs:12,sm:6,md:3,children:Object(E.jsx)(te.a,{fullWidth:!0,error:!f.name,helperText:!f.name&&f.name_error_message,onChange:y,onBlur:S,name:"name",id:"name",label:"Name",variant:"outlined",size:"small",value:x.name})}),Object(E.jsx)(u.a,{item:!0,xs:12,sm:6,md:3,children:Object(E.jsx)(te.a,{fullWidth:!0,error:!f.ronin_address,helperText:!f.ronin_address&&f.ronin_error_message,onChange:y,onBlur:S,name:"ronin_address",id:"ronin-address",label:"Ronin Address",variant:"outlined",size:"small",value:x.ronin_address})}),Object(E.jsx)(u.a,{item:!0,xs:12,sm:6,md:3,children:Object(E.jsx)(te.a,{fullWidth:!0,error:!f.manager_share,helperText:!f.manager_share&&f.manager_error_message,onChange:y,onBlur:S,type:"number",name:"manager_share",id:"manager-share",label:"Manager Share",variant:"outlined",size:"small",value:x.manager_share,inputProps:{min:0,max:100}})}),Object(E.jsx)(u.a,{item:!0,xs:12,sm:6,md:3,children:Object(E.jsx)(g.a,{fullWidth:!0,onClick:function(){f.name&&f.ronin_address&&f.manager_share&&""!==x.name&&""!==x.ronin_address&&""!==x.manager_share&&(r>=100?alert("Only 100 scholars are allowed at the moment."):(a([].concat(Object(ee.a)(t),[x]),!1),j(!0),p({name:"",ronin_address:"",manager_share:""})))},type:"submit",size:"medium",variant:"contained",disableElevation:!0,children:"Add Scholar"})})]}),Object(E.jsx)(oe,{onClose:function(e,t){"clickaway"!==t&&j(!1)},open:d,type:"success"})]})},je=a(261),he=a(265),me=a(264),xe=a(260),be=a(262),ue=a(263),pe=a(111),ge=a.n(pe);function Oe(e,t,a,n,r,c,s,i,l,o,d){return{number:e,name:t,average:a,unclaimed:n,manager:r,scholar:c,lastClaim:s,nextClaim:i,mmr:l,del:o,roninAddress:d}}function _e(e){var t=e.data,a=e.localData,n=e.onDelete,r=e.localSettings;function c(){document.body.style.cursor="pointer"}function s(){document.body.style.cursor="default"}function i(e){return Object(E.jsx)(f.a,{title:"Remove ".concat(e),children:Object(E.jsx)(F.a,{color:"error",size:"small",children:Object(E.jsx)(ge.a,{})})})}function l(e,t){var a,n="https://marketplace.axieinfinity.com/profile/".concat(t);return Object(E.jsx)(f.a,{title:"View marketplace profile of ".concat(e),children:Object(E.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",style:{textDecoration:"none",color:"#1976D2"},children:(a=e,a.length>10?"".concat(a.substring(0,10),"..."):a)})})}var o=("ascending"===r.sort_type?Q(t,r.sort_by):Q(t,r.sort_by).reverse()).map((function(e,t){return 1209600===e.next_claim_raw?Oe(t+1,l(e.name,e.ronin_address),V(e.average_slp),V(e.unclaimed_slp),"".concat(V(e.manager_share)," (").concat(e.manager_percent,"%)"),"".concat(V(e.scholar_share)," (").concat(e.scholar_percent,"%)"),"No record","No record",e.mmr,i(e.name),e.ronin_address):Oe(t+1,l(e.name,e.ronin_address),V(e.average_slp),V(e.unclaimed_slp),"".concat(V(e.manager_share)," (").concat(e.manager_percent,"%)"),"".concat(V(e.scholar_share)," (").concat(e.scholar_percent,"%)"),"".concat((a=e.last_claim_in_days,"".concat(a,1===a?" day ago":" days ago"))),e.next_claim_date,e.mmr,i(e.name),e.ronin_address);var a}));return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(xe.a,{component:_.a,variant:"outlined",sx:{mb:8,maxHeight:"1000px"},children:Object(E.jsxs)(je.a,{stickyHeader:!0,"aria-label":"data table",children:[Object(E.jsx)(be.a,{children:Object(E.jsxs)(ue.a,{children:[Object(E.jsx)(me.a,{children:"#"}),Object(E.jsx)(me.a,{align:"right",children:"Name"}),Object(E.jsx)(me.a,{align:"right",children:"Average"}),Object(E.jsx)(me.a,{align:"right",children:"Unclaimed"}),Object(E.jsx)(me.a,{align:"right",children:"Manager"}),Object(E.jsx)(me.a,{align:"right",children:"Scholar"}),Object(E.jsx)(me.a,{align:"right",children:"Last Claim"}),Object(E.jsx)(me.a,{align:"right",children:"Next Claim"}),Object(E.jsx)(me.a,{align:"right",children:"MMR"}),Object(E.jsx)(me.a,{align:"right"})]})}),Object(E.jsx)(he.a,{children:o.map((function(e,t){return Object(E.jsxs)(ue.a,{onClick:null,sx:{"&:last-child td, &:last-child th":{border:0}},children:[Object(E.jsx)(me.a,{component:"th",scope:"row",children:e.number}),Object(E.jsx)(me.a,{align:"right",children:e.name}),Object(E.jsx)(me.a,{align:"right",children:e.average}),Object(E.jsx)(me.a,{align:"right",children:e.unclaimed}),Object(E.jsx)(me.a,{align:"right",children:e.manager}),Object(E.jsx)(me.a,{align:"right",children:e.scholar}),Object(E.jsx)(me.a,{align:"right",children:e.lastClaim}),Object(E.jsx)(me.a,{align:"right",children:e.nextClaim}),Object(E.jsx)(me.a,{align:"right",children:e.mmr}),Object(E.jsx)(me.a,{onMouseEnter:c,onMouseLeave:s,onClick:function(){n(a.filter((function(t){return t.ronin_address!==e.roninAddress})),!0)},align:"right",children:e.del})]},t)}))})]})})})}var fe=function(){return Object(E.jsx)(f.a,{title:"Download data in .csv format",children:Object(E.jsx)(g.a,{sx:{m:1,minWidth:"200px"},variant:"contained",color:"success",disableElevation:!0,startIcon:Object(E.jsx)(C.a,{}),children:"Export Excel"})})},ve=a(243),ye=a(240),Se=a(259),Ce=a(236);var we=function(e){var t=e.onUpdate,a=e.localSettings,r=Object(n.useState)(""),c=Object(l.a)(r,2),s=c[0],i=c[1];return Object(n.useEffect)((function(){i(a.sort_by)}),[a]),Object(E.jsx)(b.a,{children:Object(E.jsxs)(Se.a,{fullWidth:!0,children:[Object(E.jsx)(ve.a,{id:"select-label"}),Object(E.jsxs)(Ce.a,{sx:{m:2,minWidth:"125px"},variant:"standard",name:"sort_by",labelId:"select-label",id:"sort-select",value:s,label:"Sort by",onChange:function(e){i(e.target.value),t(e)},children:[Object(E.jsx)(ye.a,{value:"name",children:"Name"}),Object(E.jsx)(ye.a,{value:"average_slp",children:"Average SLP"}),Object(E.jsx)(ye.a,{value:"unclaimed_slp",children:"Unclaimed SLP"}),Object(E.jsx)(ye.a,{value:"manager_share",children:"Manager Share"}),Object(E.jsx)(ye.a,{value:"scholar_share",children:"Scholar Share"}),Object(E.jsx)(ye.a,{value:"last_claim_raw",children:"Last Claim"}),Object(E.jsx)(ye.a,{value:"mmr",children:"MMR"})]})]})})};var ke=function(e){var t=e.onUpdate,a=e.localSettings,r=Object(n.useState)(""),c=Object(l.a)(r,2),s=c[0],i=c[1];return Object(n.useEffect)((function(){i(a.sort_type)}),[a]),Object(E.jsx)(b.a,{children:Object(E.jsxs)(Se.a,{fullWidth:!0,children:[Object(E.jsx)(ve.a,{id:"select-label"}),Object(E.jsxs)(Ce.a,{sx:{m:2,minWidth:"125px"},variant:"standard",labelId:"select-label",name:"sort_type",id:"sort-select",value:s,label:"Asc/Desc",onChange:function(e){i(e.target.value),t(e)},children:[Object(E.jsx)(ye.a,{value:"ascending",children:"Ascending"}),Object(E.jsx)(ye.a,{value:"descending",children:"Descending"})]})]})})};var Fe=function(){return Object(E.jsx)(b.a,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",mt:10},children:Object(E.jsxs)(b.a,{children:[Object(E.jsx)(O.a,{sx:{fontSize:14,textAlign:"center"},children:"Donate"}),Object(E.jsx)(f.a,{onMouseEnter:function(){document.body.style.cursor="pointer"},onMouseLeave:function(){document.body.style.cursor="default"},onClick:function(){navigator.clipboard.writeText("ronin:7587459e4c00420a218c35abec543cc9d22e45d1")},title:"Click to copy",children:Object(E.jsx)(O.a,{sx:{fontSize:14,mb:4,textAlign:"center",color:"#1976D2"},children:"ronin:7587459e4c00420a218c35abec543cc9d22e45d1"})})]})})},De=a.p+"static/media/axie_logo.f978369c.png";var Ie=function(){return Object(E.jsxs)(b.a,{sx:{backgroundColor:"#1976D2"},children:[Object(E.jsx)(P,{}),Object(E.jsx)(b.a,{sx:{height:"200px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",mb:2},children:Object(E.jsx)("img",{src:De,alt:"axie logo",style:{height:"100px",marginBottom:"16px"}})})]})},We=a.p+"static/media/axie.29b34e4d.png",ze=a.p+"static/media/ethereum_logo.6fd3bdfc.png",Ne=Object(x.a)("input")({display:"none"});var Ae=function(){var e,t=Object(n.useState)([]),a=Object(l.a)(t,2),r=a[0],c=a[1],o=Object(n.useState)([]),h=Object(l.a)(o,2),x=h[0],v=h[1],S=Object(n.useState)([]),w=Object(l.a)(S,2),k=w[0],F=w[1],D=Object(n.useState)({sort_by:"name",sort_type:"ascending"}),I=Object(l.a)(D,2),W=I[0],z=I[1],N=Object(n.useState)({"smooth-love-potion":{php:0,php_24h_change:0,usd:0,usd_24h_change:0},ethereum:{php:0,php_24h_change:0,usd:0,usd_24h_change:0},"axie-infinity":{php:0,php_24h_change:0,usd:0,usd_24h_change:0}}),A=Object(l.a)(N,2),U=A[0],M=A[1],R=Object(n.useState)(!1),J=Object(l.a)(R,2),P=J[0],T=J[1],B=Object(n.useState)("php"),ee=Object(l.a)(B,1)[0];function te(e,t){F(e),T(t)}function ae(e){var t=new FileReader;e.target.files[0]&&(t.readAsText(e.target.files[0],"UTF-8"),t.onload=function(e){T(!1);var t=JSON.parse(e.target.result);if(t[0].name&&t[0].ronin_address&&t[0].manager_share)t.length>100?alert("Only JSON files with max 100 ronin addresses are allowed at the moment."):F(t);else if(t[0].name&&t[0].eth&&t[0].managerShare)if(t.length>100)alert("Only JSON files with max 100 ronin addresses are allowed at the moment.");else{var a=t.map((function(e){return{name:e.name,ronin_address:e.eth,manager_share:e.managerShare}}));F(a)}else alert("Incompamtible JSON structure.\n\nOnly exported JSON from this site and https://axie-scho-tracker.xyz/ are accepted at the moment.\n\nSupport for other trackers will be added in the future.")})}function ne(e){var t=e.target,a=t.name,n=t.value;z((function(e){return Object(i.a)(Object(i.a)({},e),{},Object(s.a)({},a,n))}))}return e="ascending"===W.sort_type?Q(x,W.sort_by):Q(x,W.sort_by).reverse(),Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("scholars"));e&&(c(e.map((function(e){return e.ronin_address}))),F(e));var t=JSON.parse(localStorage.getItem("settings"));t&&z(t),d.a.get("https://api.coingecko.com/api/v3/simple/price?ids=ethereum%2Caxie-infinity%2Csmooth-love-potion&vs_currencies=php%2Cusd&include_market_cap=false&include_24hr_vol=false&include_24hr_change=true&include_last_updated_at=false").then((function(e){M(e.data)})).catch((function(e){alert("Error fetching crypto data. Please try again later.")}))}),[]),Object(n.useEffect)((function(){c(k.map((function(e){return e.ronin_address}))),localStorage.setItem("scholars",JSON.stringify(k))}),[k]),Object(n.useEffect)((function(){localStorage.setItem("settings",JSON.stringify(W))}),[W]),Object(n.useEffect)((function(){0!==r.length?P?v(x.filter((function(e){return r.includes(e.ronin_address)}))):d.a.get("https://game-api.axie.technology/api/v1/".concat(r.join("%2C"))).then((function(e){var t=(1===r.length?[e.data]:Object.values(e.data)).map((function(e,t){return{last_updated:q(e.cache_last_updated),name:k[t].name,ronin_address:k[t].ronin_address,average_slp:H(e.in_game_slp,Z(e.last_claim)),unclaimed_slp:e.in_game_slp,claimed_slp:e.total_slp-e.in_game_slp,total_slp:e.total_slp,last_claim_in_days:Z(e.last_claim),last_claim_date:q(parseInt("".concat(e.last_claim,"000"))),last_claim_raw:parseInt("".concat(e.last_claim,"000")),next_claim_in_days:(r=e.next_claim,Math.floor((parseInt("".concat(r,"000"))-Date.now())/864e5)),next_claim_date:q(parseInt("".concat(e.next_claim,"000"))),next_claim_raw:e.next_claim,manager_percent:parseInt(k[t].manager_share),scholar_percent:$(k[t].manager_share),manager_share:(a=e.total_slp,n=k[t].manager_share,parseInt((a*(n/100)).toFixed(0))),scholar_share:K(e.total_slp,$(k[t].manager_share)),mmr:e.mmr,rank:e.rank};var a,n,r}));v(t)})).catch((function(e){alert("Could not connect to server. Please try again later.")})):(document.body.style.cursor="default",v([]))}),[r]),Object(E.jsxs)(b.a,{sx:{flexGrow:1},children:[Object(E.jsx)(Ie,{}),Object(E.jsxs)(p.a,{maxWidth:"lg",sx:{mb:10},children:[Object(E.jsxs)(b.a,{sx:{width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"center",mb:6},children:[Object(E.jsx)(f.a,{title:"View on CoinGecko",style:{flexGrow:1},children:Object(E.jsx)("a",{href:"https://www.coingecko.com/en/coins/ethereum/".concat(ee),target:"blank",rel:"noreferrer",style:{textDecoration:"none",color:"#000000"},children:Object(E.jsxs)(b.a,{sx:{display:"flex",alignItems:"center",justifyContent:"center",m:1,minWidth:"200px"},children:[Object(E.jsx)("img",{src:ze,style:{height:"20px",width:"20px",marginRight:"4px"},alt:"ethereum logo"}),Object(E.jsxs)(O.a,{sx:{mr:1,fontSize:14,fontWeight:"bold"},children:[V(U.ethereum[ee])," ",ee.toUpperCase()]}),Object(E.jsx)(_.a,{elevation:0,sx:{borderRadius:"100px",backgroundColor:U.ethereum["".concat(ee,"_24h_change")]>=0?"#6cc000":"#ff5341"},children:Object(E.jsxs)(O.a,{sx:{color:"#FFFFFF",fontSize:12,ml:1,mr:1},children:[U.ethereum["".concat(ee,"_24h_change")]>0?"+":null,U.ethereum["".concat(ee,"_24h_change")].toFixed(2),"%"]})})]})})}),Object(E.jsx)(f.a,{title:"View on CoinGecko",style:{flexGrow:1},children:Object(E.jsx)("a",{href:"https://www.coingecko.com/en/coins/axie-infinity/".concat(ee),target:"blank",rel:"noreferrer",style:{textDecoration:"none",color:"#000000"},children:Object(E.jsxs)(b.a,{sx:{display:"flex",alignItems:"center",justifyContent:"center",m:1,minWidth:"200px"},children:[Object(E.jsx)("img",{src:L,style:{height:"20px",width:"20px",marginRight:"4px"},alt:"axs logo"}),Object(E.jsxs)(O.a,{sx:{mr:1,fontSize:14,fontWeight:"bold"},children:[V(U["axie-infinity"][ee])," ",ee.toUpperCase()]}),Object(E.jsx)(_.a,{elevation:0,sx:{borderRadius:"100px",backgroundColor:U["axie-infinity"]["".concat(ee,"_24h_change")]>=0?"#6cc000":"#ff5341"},children:Object(E.jsxs)(O.a,{sx:{color:"#FFFFFF",fontSize:12,ml:1,mr:1},children:[U["axie-infinity"]["".concat(ee,"_24h_change")]>0?"+":null,U["axie-infinity"]["".concat(ee,"_24h_change")].toFixed(2),"%"]})})]})})}),Object(E.jsx)(f.a,{title:"View on CoinGecko",style:{flexGrow:1},children:Object(E.jsx)("a",{href:"https://www.coingecko.com/en/coins/smooth-love-potion/".concat(ee),target:"blank",rel:"noreferrer",style:{textDecoration:"none",color:"#000000"},children:Object(E.jsxs)(b.a,{sx:{display:"flex",alignItems:"center",justifyContent:"center",m:1,minWidth:"200px"},children:[Object(E.jsx)("img",{src:G,style:{height:"20px",width:"20px",marginRight:"4px"},alt:"slp logo"}),Object(E.jsxs)(O.a,{sx:{mr:1,fontSize:14,fontWeight:"bold"},children:[U["smooth-love-potion"][ee]," ",ee.toUpperCase()]}),Object(E.jsx)(_.a,{elevation:0,sx:{borderRadius:"100px",backgroundColor:U["smooth-love-potion"]["".concat(ee,"_24h_change")]>=0?"#6cc000":"#ff5341"},children:Object(E.jsxs)(O.a,{sx:{color:"#FFFFFF",fontSize:12,ml:1,mr:1},children:[U["smooth-love-potion"]["".concat(ee,"_24h_change")]>0?"+":null,U["smooth-love-potion"]["".concat(ee,"_24h_change")].toFixed(2),"%"]})})]})})})]}),Object(E.jsxs)(u.a,{container:!0,spacing:2,sx:{mb:6},children:[Object(E.jsx)(u.a,{item:!0,xs:6,sm:4,lg:2,children:Object(E.jsx)(X,{label:"Total Average",slp:Y(x,"average_slp"),slpPrice:U["smooth-love-potion"][ee],currency:ee})}),Object(E.jsx)(u.a,{item:!0,xs:6,sm:4,lg:2,children:Object(E.jsx)(X,{label:"Total Unclaimed",slp:Y(x,"unclaimed_slp"),slpPrice:U["smooth-love-potion"][ee],currency:ee})}),Object(E.jsx)(u.a,{item:!0,xs:6,sm:4,lg:2,children:Object(E.jsx)(X,{label:"Total Claimed",slp:Y(x,"claimed_slp"),slpPrice:U["smooth-love-potion"][ee],currency:ee})}),Object(E.jsx)(u.a,{item:!0,xs:6,sm:4,lg:2,children:Object(E.jsx)(X,{label:"Total Farmed",slp:Y(x,"total_slp"),slpPrice:U["smooth-love-potion"][ee],currency:ee})}),Object(E.jsx)(u.a,{item:!0,xs:6,sm:4,lg:2,children:Object(E.jsx)(X,{label:"Manager Total",slp:Y(x,"manager_share"),slpPrice:U["smooth-love-potion"][ee],currency:ee})}),Object(E.jsx)(u.a,{item:!0,xs:6,sm:4,lg:2,children:Object(E.jsx)(X,{label:"Scholar Total",slp:Y(x,"scholar_share"),slpPrice:U["smooth-love-potion"][ee],currency:ee})})]}),Object(E.jsx)(de,{localData:k,onUpdate:te,scholars:r.length}),0!==r.length&&Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(b.a,{sx:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:[Object(E.jsx)(O.a,{color:"text.secondary",children:"Sort by"}),Object(E.jsxs)(b.a,{sx:{display:"flex",alignItems:"center",flexWrap:"wrap"},children:[Object(E.jsx)(we,{onUpdate:ne,localSettings:W}),Object(E.jsx)(ke,{onUpdate:ne,localSettings:W})]})]}),Object(E.jsx)(_e,{data:x,localData:k,localSettings:W,onDelete:te,slpPrice:U["smooth-love-potion"][ee]}),Object(E.jsxs)(b.a,{sx:{display:"flex",justifyContent:"center",flexWrap:"wrap"},children:[Object(E.jsx)(f.a,{title:"Download list of scholars in .json format",children:Object(E.jsx)(g.a,{sx:{m:1,minWidth:"200px"},onClick:function(){!function(e){var t=new Blob([JSON.stringify(e,null,2)],{type:"application/json"});m.a.saveAs(t,"scholars.json")}(k)},startIcon:Object(E.jsx)(C.a,{}),variant:"outlined",children:"Download list"})}),Object(E.jsx)(f.a,{title:"Upload list of scholars",children:Object(E.jsxs)("label",{htmlFor:"contained-button-file",children:[Object(E.jsx)(Ne,{onChange:ae,accept:"application/JSON",id:"contained-button-file",type:"file"}),Object(E.jsx)(g.a,{component:"span",startIcon:Object(E.jsx)(y.a,{}),variant:"outlined",sx:{m:1,minWidth:"200px"},children:"Upload List"})]})}),Object(E.jsx)(j.CSVLink,{filename:"scholars.csv",data:function(e){return e.map((function(e){var t=e.last_updated,a=e.ronin_address;return{last_updated:t,name:e.name,ronin_address:a,average_slp:e.average_slp,unclaimed_slp:e.unclaimed_slp,claimed_slp:e.claimed_slp,total_slp:e.total_slp,last_claim_date:e.last_claim_date,next_claim_date:e.next_claim_date,manager_percent:e.manager_percent,scholar_percent:e.scholar_percent,manager_share:e.manager_share,scholar_share:e.scholar_share,mmr:e.mmr,rank:e.rank}}))}(e),style:{textDecoration:"none"},children:Object(E.jsx)(fe,{})})]})]}),0===r.length&&Object(E.jsxs)(b.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},children:[Object(E.jsx)("img",{src:We,alt:"axie",style:{height:"150px",margin:"32px"}}),Object(E.jsx)(O.a,{sx:{mb:10},children:"No scholars added"}),Object(E.jsxs)("label",{htmlFor:"contained-button-file",children:[Object(E.jsx)(Ne,{onChange:ae,accept:"application/JSON",id:"contained-button-file",type:"file"}),Object(E.jsx)(g.a,{onClick:null,component:"span",startIcon:Object(E.jsx)(y.a,{}),variant:"outlined",sx:{m:1},disableElevation:!0,children:"Upload list"})]})]})]}),Object(E.jsx)(Fe,{})]})},Ue=a(246),Me=a(234),Re=a(112),Ee=Object(Re.a)({palette:{mode:"light"}});c.a.render(Object(E.jsxs)(Ue.a,{theme:Ee,children:[Object(E.jsx)(Me.a,{}),Object(E.jsx)(Ae,{}),","]}),document.getElementById("root"))}},[[168,1,2]]]);
//# sourceMappingURL=main.e36f6576.chunk.js.map