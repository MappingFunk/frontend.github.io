(this["webpackJsonpmappingfunk-interface"]=this["webpackJsonpmappingfunk-interface"]||[]).push([[20],{1057:function(e,t,n){"use strict";n.r(t);var a,i,s,o,l=n(7),c=n(1),r=n.n(c),d=n(83),p=n(14),b=n(538),u=n.n(b),m=n(712),j=n(79),h=n(32),g=n(27),f=n(17),x=n(509),O=n.n(x),y=n(713),k=n(1001),T=n(1002),I=n(1061),C=n(1003),v=n(1053),w=n(123),S=n(97),N=n(18),D=n(1056),P=n(1e3),F=n(241),B=n.p+"static/media/fbtc20.5f91e1ef.svg",L=n(142),V=n(441),R=n(28),M=n(0);const z=Object(f.a)("h3")(a||(a=Object(l.a)(["\n  font-family: PingFangSC-Semibold, sans-serif;\n  font-weight: 550;\n  font-size: 16px;\n  line-height: 22px;\n  color: #000000;\n  margin-bottom: 20px;\n"]))),A=Object(f.a)("div")(i||(i=Object(l.a)(["\n  height: calc(100vh - 200px);\n  overflow-y: scroll;\n  padding-bottom: 30px;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]))),E=Object(f.a)(S.a)(s||(s=Object(l.a)(["\n  background: rgba(255, 255, 255, 0.4) !important;\n  margin-bottom: 20px;\n  padding: 20px !important;\n"]))),_=Object(f.a)("div")(o||(o=Object(l.a)(["\n  .total {\n    display: flex;\n    justify-content: space-between;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 20px;\n    margin-bottom: 14px;\n\n    span {\n      color: #000000;\n      &:first-of-type {\n        font-family: PingFangSC-Medium, sans-serif;\n        font-weight: 500;\n      }\n      &:last-of-type {\n        font-family: PingFangSC-Regular, sans-serif;\n        font-weight: 400;\n      }\n    }\n  }\n\n  .guarantee,\n  .avatar,\n  .ticker {\n    display: flex;\n    margin-bottom: 16px;\n\n    .icon {\n      margin-right: 8px;\n    }\n\n    .title {\n      font-family: PingFangSC-Regular, sans-serif;\n      font-style: normal;\n      font-weight: 400;\n      font-size: 12px;\n      color: #000 !important;\n    }\n\n    div {\n      line-height: 20px;\n      width: calc(100% - 20px - 8px);\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      span:last-of-type {\n        font-family: PingFangSC-Regular, sans-serif;\n        font-size: 12px;\n        color: rgba(0, 0, 0, 0.5);\n      }\n    }\n  }\n\n  .avatar .avatar_info {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    width: fit-content;\n    span {\n      font-family: PingFangSC-Regular, sans-serif;\n      font-weight: 400;\n    }\n    svg {\n      cursor: pointer;\n    }\n  }\n\n  .ticker div span {\n    font-size: 14px !important;\n    line-height: 20px;\n    color: #000000 !important;\n  }\n\n  .token_list {\n    background: rgba(0, 0, 0, 0.04);\n    border-radius: 8px;\n    .icon {\n      width: 22px;\n      margin-right: 10px;\n    }\n    .MuiListItem-root {\n      display: flex;\n\n      .currency {\n        width: 100%;\n        //margin-left: 12px;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        font-size: 12px;\n        color: rgba(0, 0, 0, 0.5);\n        span {\n          font-family: PingFangSC-Regular, sans-serif;\n          font-weight: 400;\n        }\n      }\n    }\n  }\n\n  .daily {\n    font-family: PingFangSC-Medium, sans-serif;\n    margin-top: 20px;\n    margin-bottom: 5px;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 20px;\n    color: #000000;\n    white-space: nowrap;\n  }\n\n  .daily_name span {\n    font-family: PingFangSC-Regular, sans-serif;\n    font-size: 14px;\n    line-height: 20px;\n    color: #000000;\n  }\n\n  .more {\n    margin-top: 20px;\n    display: flex;\n    align-items: center;\n    font-size: 14px;\n    line-height: 20px;\n    letter-spacing: 0.02em;\n    color: #2aa1ff;\n    cursor: pointer;\n  }\n"])));function q(e){const{pageType:t}=e,{currentPosition:n,currentPositionTokenInfo:a,currentMintToken:i,collateralIndex:s}=Object(L.c)(),o=Object(c.useMemo)((()=>{var e;if(!a)return null;const t=a.allowedTokens,n=null===(e=a.allowedTokens)||void 0===e?void 0:e.balances;return Object.values(t.tokens).map((e=>Object(M.jsxs)(D.a,{children:[Object(M.jsx)(V.a,{imgprops:{style:{marginRight:10}},token:e.logo,symbol:e.symbol}),Object(M.jsxs)("div",{className:"currency",children:[Object(M.jsx)("span",{className:"symbol",children:e.symbol}),Object(M.jsx)("span",{className:"balance",children:n&&R.a.formatFourDecimals(Object(R.b)(n[e.symbol],e.decimals,!0))})]})]},e.symbol)))}),[a]),l=Object(c.useMemo)((()=>{var e;return a.tokenPrice?Object(R.b)(null===(e=a.tokenPrice[n.mintTokenInfo.symbol])||void 0===e?void 0:e.price,n.mintTokenInfo.settlementCurrency.decimals):0}),[n,a]);return Object(M.jsxs)(A,{children:[Object(M.jsxs)(E,{children:[Object(M.jsxs)(z,{children:["Liq"===t?"The Collateral":"My Collateral"," "]}),Object(M.jsxs)(_,{children:[Object(M.jsxs)("div",{className:"total",children:[Object(M.jsx)("span",{children:"Collateral Value"}),Object(M.jsxs)("span",{children:["\u2248 ",a.displayTotalAssetsValue]})]}),Object(M.jsxs)("div",{className:"guarantee",children:[Object(M.jsx)(N.k,{className:"icon"}),Object(M.jsxs)("div",{children:[Object(M.jsx)("span",{className:"title",children:"Prepaid Interest "}),Object(M.jsxs)("span",{children:["\u2248"," ",R.a.formatFourDecimals(s.prepaidInterest)," ",n.mintTokenInfo.settlementCurrency.symbol]})]})]}),Object(M.jsxs)("div",{className:"avatar",children:[Object(M.jsx)(N.b,{className:"icon"}),Object(M.jsxs)("div",{children:[Object(M.jsx)("span",{className:"title",children:"Collateral"}),Object(M.jsx)(F.a,{className:"avatar_info",toCopy:n.positionAddress,children:Object(M.jsxs)("span",{children:[n.positionAddress.slice(0,6),"...",n.positionAddress.slice(-6)]})})]})]}),Object(M.jsx)(P.a,{className:"token_list",children:o}),"Liq"!==t&&Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)("h3",{className:"daily",children:"Mark Price"}),Object(M.jsx)("div",{className:"daily_name",children:Object(M.jsxs)("span",{children:["1 F(BTC, 20) \u2248 ",l," ",n.mintTokenInfo.settlementCurrency.symbol]})})," ",Object(M.jsxs)(j.b,{to:"/collateral",className:"more",children:[Object(M.jsx)("span",{children:"Add More Collateral"}),"\xa0\xa0",Object(M.jsx)(N.a,{})]})]})]})]}),Object(M.jsxs)(E,{children:[Object(M.jsx)(z,{children:"Liq"===t?"The Outstanding Debt":"My Outstanding Debt"}),Object(M.jsxs)(_,{children:[Object(M.jsxs)("div",{className:"ticker",style:{marginBottom:20},children:[Object(M.jsx)("img",{src:B,alt:"",className:"icon"}),Object(M.jsxs)("div",{children:[Object(M.jsx)("span",{children:i}),Object(M.jsx)("span",{children:R.a.formatFourDecimals(Object(R.b)(n.balance,n.mintTokenInfo.decimals,!0))})]})]}),Object(M.jsxs)("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between"},children:[Object(M.jsx)("h3",{className:"daily",style:{margin:"0"},children:"Daily Paid Rewards Reference"}),Object(M.jsx)("div",{className:"daily_name",children:Object(M.jsxs)("span",{children:[R.a.formatFourDecimals(s.estimatedDailyDebt)," ",n.mintTokenInfo.settlementCurrency.symbol]})})]}),"Liq"!==t&&Object(M.jsx)("div",{className:"more",children:Object(M.jsxs)("a",{target:"_blank",href:"https://app.uniswap.org/#/swap?&outputCurrency=".concat(n.mintTokenInfo.address,"&inputCurrency=").concat(n.mintTokenInfo.settlementCurrency.address),rel:"noreferrer",children:["Buy More Asset to Neutralize \xa0\xa0",Object(M.jsx)(N.a,{})]})})]})]})]})}var G,W,U,J,H,K=n(470),X=n(458),Q=n(224),Y=n(218),Z=n(40),$=n(148),ee=n(58),te=n(78),ne=n(21),ae=n(16),ie=n(143),se=n(96),oe=n(145),le=function(e){return e[e.a=0]="a",e[e.g=1]="g",e}(le||{});const ce=Object(f.a)("div")(G||(G=Object(l.a)(["\n  box-sizing: border-box;\n  margin-top: 18px;\n  padding-right: 44px;\n  overflow: auto;\n\n  & > .MuiGrid-root {\n    min-width: 1024px;\n  }\n\n  .account_panel {\n    height: calc(100vh - 189px);\n    padding-bottom: 100px;\n    overflow: auto;\n\n    &::-webkit-scrollbar {\n      display: none;\n    }\n  }\n\n  .asset_info {\n    padding: 0;\n    margin-top: 26px;\n  }\n"]))),re=Object(f.a)(N.c)(W||(W=Object(l.a)(["\n  box-shadow: none !important;\n  width: 34px !important;\n  height: 28px !important;\n  padding: 0 !important;\n  background: linear-gradient(90deg, #62c3f7 0%, #7ae9f1 100%) !important;\n  border-radius: 6px !important;\n\n  svg {\n    color: #000;\n    width: 16px;\n  }\n"]))),de=Object(f.a)("div")(U||(U=Object(l.a)(["\n  padding-right: 44px;\n  width: 100%;\n  overflow: scroll;\n\n  .left_func {\n    overflow: scroll;\n    height: calc(100vh - 200px);\n    padding-bottom: 100px !important;\n  }\n"]))),pe=Object(f.a)("div")(J||(J=Object(l.a)(["\n  min-width: 1024px;\n"]))),be=Object(f.a)(S.a)(H||(H=Object(l.a)([""]))),{liquidation:ue}=ee.a;t.default=Object(h.h)((function(){const{chainId:e}=Object(g.b)(),{setRefresh:t}=Object(Y.a)(),{signer:n,helperContract:a,tokenPools:i}=Object(ie.a)(),{toastSuccess:s,toastError:o,toastWarning:l}=Object(se.a)(),[b,h]=Object(c.useState)([]),[f,x]=Object(c.useState)(0),[S,D]=Object(c.useState)(!0),[P,F]=Object(c.useState)({m1:0,m2:0,m3:0,m4:0}),[B,z]=r.a.useState("2"),A=e=>{z(e.target.value)},{currentPosition:E,currentPositionTokenInfo:_,currentMintToken:G,collateralIndex:W}=Object(L.c)(),{handleChangeCurrentPosition:U}=Object(L.b)(),{onUpdateTotalCollateralValue:J,onUpdatePrepaidInterest:H,onUpdateNeutralizeValue:ee,onUpdateCollateralValue:me,newCollateralRatio:je,newPrepaidInterestCoverage:he,newOutStandingDebt:ge,newEstimatedDailyDebt:fe,newDisplayCollateralRatio:xe,newDisplayPrepaidInterestCoverage:Oe}=Object(L.a)(),ye=Object(c.useMemo)((()=>{if(_.allowedTokens){const{balances:e,tokens:t}=_.allowedTokens;return Object.keys(e).reduce(((n,a)=>({...n,[a]:Object(R.b)(e[a],t[a].decimals,!0)})),{})}return Object.keys(ne.h).reduce(((e,t)=>({...e,[t]:0})),{})}),[_.allowedTokens]),ke=Object(c.useMemo)((()=>{if(null!==_&&void 0!==_&&_.tokenPrice){const{allowedTokens:e}=_,t=Object.values(e.tokens).map((t=>{const n=(null===e||void 0===e?void 0:e.balances)&&Object(R.b)((null===e||void 0===e?void 0:e.balances[t.symbol])||0,t.decimals,!0)||0;return{decimals:t.decimals,token:t.symbol,balance:n,icon:()=>Object(M.jsx)(V.a,{imgprops:{style:{marginRight:10}},token:t.logo,symbol:t.symbol}),rightOptionList:[]}}));return t.map((e=>({...e,rightOptionList:t.filter((t=>t.token!==e.token))})))}return[]}),[_]),Te=Object(c.useCallback)((()=>{h((e=>{let t=[...e];return f===le.a&&(t=[...t,{id:u()(),type:le.a,input:0,output:0,inputToken:ke[0],outputToken:ke[0].rightOptionList[0]}],t.map((e=>e.input>0)).includes(!1)?D(!0):D(!1)),f===le.g&&(console.log("object :>> ",ke.find((e=>e.token===E.mintTokenInfo.settlementCurrency.symbol))),t=[...t,{id:u()(),type:le.g,input:0,output:0,inputToken:{...ke.find((e=>e.token===E.mintTokenInfo.settlementCurrency.symbol)),balance:W.prepaidInterest,rightOptionList:ke.filter((e=>e.token===E.mintTokenInfo.settlementCurrency.symbol))},outputToken:{...ke.find((e=>e.token===E.mintTokenInfo.settlementCurrency.symbol))}}]),t}))}),[f,W.prepaidInterest,E.mintTokenInfo.settlementCurrency.symbol,ke]),Ie=Object(c.useCallback)(((t,n)=>{if(n.type===le.a){const a=R.a.formatTokenAmount(Number(t.target.value),n.inputToken.decimals);if(Number(a)>Number.MAX_SAFE_INTEGER)return void D(!0);const s=Object($.b)(e,n.inputToken.token,n.outputToken.token,Object(R.c)(a,n.inputToken.decimals),i)||0;h((e=>{const i=e.map((e=>({...e,input:e.id===n.id?t.target.value:e.input,output:e.id===n.id?Object(R.b)(s,n.outputToken.decimals,!0):e.output}))),o=i.reduce(((e,t)=>{const n={...e};return Object.prototype.hasOwnProperty.call(n,t.inputToken.token)?n[t.inputToken.token]+=Number(t.input):n[t.inputToken.token]=Number(t.input),n}),{});return i.map((e=>e.input>0&&e.output>0&&e.input<=e.inputToken.balance)).includes(!1)||-1!==a.indexOf(".")&&String(a).slice(a.indexOf(".")+1).length>n.inputToken.decimals?D(!0):D(!1),i.map((e=>e.input>0)).includes(!1)||o[n.inputToken.token]>n.inputToken.balance?D(!0):D(!1),i}))}else h((e=>e.map((e=>({...e,input:e.id===n.id?t.target.value:e.input,output:e.id===n.id?t.target.value:e.output})))))}),[e,i]),Ce=Object(c.useCallback)(((t,n,a)=>{h((s=>s.map((s=>{if(s.id===n){const n={...s,[a]:t};if(n.input){const t=Object($.b)(e,n.inputToken.token,n.outputToken.token,Object(R.c)(R.a.formatTokenAmount(n.input,n.inputToken.decimals),n.inputToken.decimals),i);n.output=Object(R.b)(t,n.outputToken.decimals,!0)}return n}return s}))))}),[e,i]),ve=Object(c.useCallback)(((e,t,n)=>{t>0?("m3"===n&&F((e=>({...e,[n]:ye[E.mintTokenInfo.settlementCurrency.symbol]}))),"m4"===n&&F((e=>({...e,[n]:ye[G]})))):F((t=>({...t,[n]:e.target.value})))}),[ye,G,E.mintTokenInfo.settlementCurrency.symbol]),we=Object(c.useCallback)((async()=>{const i=new d.utils.Interface(ue.abi);if((await a.healthCheck(E.positionAddress,E.balance,12e3,20)).includes(!1)){const a=b.map((t=>{const n=Object(R.c)(R.a.formatTokenAmount(t.input,t.inputToken.decimals),t.inputToken.decimals),a=[];if(t.type===le.a){const{tokenAddressPath:s}=Object($.a)({chainId:e,from:t.inputToken.token,to:t.outputToken.token}),o=i.encodeFunctionData("swapExactTokensForTokens",[n,"0",s,"999999999999999"]);a.push(ue.address[e],o)}return t.type===le.g&&a.push(ue.address[e],i.encodeFunctionData("moveGuaranteeBack",[n])),a})),l=[];if("1"===B&&P.m3){const t=i.encodeFunctionData("addGuarantee",[Object(R.c)(R.a.formatTokenAmount(P.m3,E.mintTokenInfo.settlementCurrency.decimals),E.mintTokenInfo.settlementCurrency.decimals)]);l.push([ue.address[e],t])}if("2"===B&&P.m4){const t=i.encodeFunctionData("neutralizetBalance",[Object(R.c)(R.a.formatTokenAmount(P.m4,E.mintTokenInfo.decimals),E.mintTokenInfo.decimals)]);l.push([ue.address[e],t])}const r=i.encodeFunctionData("liquidation",[B,[...a,...l]]);try{const a=new p.ethers.Contract(E.positionAddress,oe,n),i=await a.delegateCall(ue.address[e],r);if(i){s("Success","The transaction has been submitted");await i.wait()&&(t((e=>!e)),s("Success","The transaction has been successfully"))}}catch(c){o(te.e.failed,null===c||void 0===c?void 0:c.reason)}}else l("Warning","Liquidation conditions not met")}),[a,E.positionAddress,E.balance,E.mintTokenInfo.settlementCurrency.decimals,E.mintTokenInfo.decimals,b,B,P.m3,P.m4,e,n,s,t,o,l]),Se=Object(c.useMemo)((()=>je>=120&&he>=20&&S),[S,je,he]),Ne=Object(c.useCallback)((e=>{const{value:t}=e.target;x(Number(t))}),[]);Object(c.useEffect)((()=>{ke.length&&(h((()=>[{id:u()(),input:0,output:0,type:le.a,inputToken:ke[0],outputToken:ke[0].rightOptionList[0]}])),console.log("1 :>> ",1))}),[ke]);const De=Object(c.useMemo)((()=>{if(Object(ae.f)(e)){const t=Z.c[e].tokens;return Object.keys(Z.c[e].tokens).map((e=>({token:t[e].symbol,address:t[e].address,decimals:t[e].decimals,icon:()=>Object(M.jsx)(V.a,{imgprops:{style:{marginRight:10}},token:t[e].logo,symbol:t[e].symbol})})))}return[]}),[e]);return Object(c.useEffect)((()=>{let e=0,t=0;b.filter((e=>e.type===le.g)).forEach((n=>{e+=Number(n.input),t+=Number(n.input)})),me({symbol:E.mintTokenInfo.settlementCurrency.symbol,value:P.m3>0?e+Number("-".concat(P.m3)):0}),H(P.m3+Number("-".concat(t))),ee(P.m4>0?Number("-".concat(P.m4)):0)}),[b,E.mintTokenInfo.settlementCurrency.symbol,me,ee,H,P.m3,P.m4]),Object(c.useEffect)((()=>{const{tokenPrice:e}=_;if(e){const t=b.filter((e=>e.type===le.a)).map((e=>({from:e.inputToken.token,to:e.outputToken.token,fromDecimals:e.inputToken.decimals,toDecimals:e.outputToken.decimals,inputValue:Number(e.input),outputValue:Number(e.output)})));let n=0;t.forEach((t=>{e[t.from]&&(n-=t.inputValue*Object(R.b)(e[t.from].price,E.mintTokenInfo.settlementCurrency.decimals,!0)),e[t.to]&&(n+=t.outputValue*Object(R.b)(e[t.to].price,E.mintTokenInfo.settlementCurrency.decimals,!0))})),J(n)}}),[b,E.mintTokenInfo.settlementCurrency.decimals,_,J]),Object(M.jsx)(de,{children:Object(M.jsxs)(pe,{children:[Object(M.jsx)(w.l,{children:"Liquidation"}),Object(M.jsx)(Q.a,{isGroup:!1,options:De,selectValue:G,onChange:e=>{U(e)}}),E.isEnable?Object(M.jsxs)(y.a,{container:!0,spacing:2,style:{marginTop:14},children:[Object(M.jsx)(y.a,{className:"left_func",style:{paddingTop:0},item:!0,xs:8,children:Object(M.jsxs)(be,{children:[Object(M.jsx)(m.a,{onDragEnd:e=>((e,t,n)=>{if(!e.destination)return;const{source:a,destination:i}=e;if(a.droppableId!==i.droppableId){const e=t[a.droppableId],s=t[i.droppableId],o=[...e.items],l=[...s.items],[c]=o.splice(a.index,1);l.splice(i.index,0,c),n([...s,l])}else{const e=[...t],[s]=e.splice(a.index,1);e.splice(i.index,0,s),n(e)}})(e,b,h),children:Object(M.jsx)(m.c,{droppableId:"droppableId",children:t=>Object(M.jsxs)("div",{...t.droppableProps,ref:t.innerRef,children:[b.map(((t,n)=>{const a=i.length&&Object($.b)(e,t.inputToken.token,t.outputToken.token,Object(R.c)(String(t.input||"1"),t.inputToken.decimals),i)||0,s=Object(R.b)(a,t.outputToken.decimals,!0)/(t.input||1),o=R.a.formatFourDecimals(s);return Object(M.jsx)(m.b,{draggableId:t.id,index:n,children:e=>Object(M.jsxs)("div",{ref:e.innerRef,...e.draggableProps,...e.dragHandleProps,style:{display:"flex",alignItems:"center",userSelect:"none",margin:"0 0 8px 0",...e.draggableProps.style,position:"static"},children:[Object(M.jsxs)("div",{style:{width:"100%",position:"relative"},children:[Object(M.jsx)(K.a,{SelectIcon:()=>Object(M.jsx)("span",{children:t.type===le.a?"Collateral":"Prepaid Interest "}),leftInputValue:t.input,rightInputValue:t.output,options:ke,rightOptions:t.inputToken.rightOptionList,leftSelectValue:t.inputToken.token,rightSelectValue:t.outputToken.token,leftBalance:t.inputToken.balance,rightBalance:t.outputToken.balance,selectedBalance:100,leftDisableStatus:[t.type===le.g,!1],RightIcon:()=>Object(M.jsx)("span",{children:"Collateral"}),rightDisableStatus:[t.type===le.g,!0],selectInput:e=>{Ie(e,t)},leftChange:e=>{Ce(e,t.id,"inputToken")},rightChange:e=>{Ce(e,t.id,"outputToken")},onMax:()=>{Ie({target:{value:t.inputToken.balance}},t)},leftSymbol:t.inputToken.token,rightSymbol:t.outputToken.token}),Object(M.jsxs)("p",{style:{position:"absolute",bottom:0,right:0,color:"rgba(0, 0, 0, 0.5)",fontSize:12},children:["".concat(1," ",t.inputToken.token)," \u2248 ","".concat(o," ").concat(t.outputToken.token)]})]}),Object(M.jsx)(k.a,{onClick:()=>{const e=[...b];e.splice(n,1),h(e)},style:{cursor:"pointer",marginTop:8,marginLeft:10,padding:0},children:Object(M.jsx)(N.f,{})}),Object(M.jsx)(k.a,{style:{marginTop:8,marginLeft:8,padding:0},children:Object(M.jsx)(N.g,{style:{fill:"none"}})})]})},t.id)})),t.placeholder]})})}),Object(M.jsxs)("div",{style:{display:"flex",alignItems:"center",marginTop:10,marginBottom:40},children:[Object(M.jsx)(re,{onClick:Te,children:Object(M.jsx)(O.a,{})}),Object(M.jsx)(T.a,{style:{marginLeft:10},children:Object(M.jsxs)(I.a,{row:!0,"aria-labelledby":"demo-row-radio-buttons-group-label",name:"row-radio-buttons-group",value:f,onChange:Ne,children:[Object(M.jsx)(C.a,{value:0,control:Object(M.jsx)(v.a,{}),label:Object(M.jsxs)("p",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(M.jsx)("span",{children:"Collateral"}),Object(M.jsx)("span",{style:{margin:"0 10px"},children:"->"}),Object(M.jsx)("span",{children:"Collateral"})]})}),Object(M.jsx)(C.a,{value:1,control:Object(M.jsx)(v.a,{}),label:Object(M.jsxs)("p",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(M.jsx)("span",{children:"Prepaid Interest "}),Object(M.jsx)("span",{style:{margin:"0 10px"},children:"->"}),Object(M.jsx)("span",{children:"Collateral"})]})})]})})]}),Object(M.jsxs)("div",{style:{display:"flex",alignItems:"center",paddingRight:28,width:"100%"},children:[Object(M.jsx)("div",{style:{width:"100%"},children:Object(M.jsx)(K.a,{SelectIcon:()=>Object(M.jsx)("span",{children:"Collateral"}),options:[{...ke.find((e=>e.token===E.mintTokenInfo.settlementCurrency.symbol)),rightOptionList:ke.filter((e=>e.token===E.mintTokenInfo.settlementCurrency.symbol))}],rightBalance:W.prepaidInterest,leftBalance:ye?R.a.formatFourDecimals(ye[E.mintTokenInfo.settlementCurrency.symbol]):0,RightIcon:()=>Object(M.jsx)("span",{children:"Prepaid Interest "}),leftInputValue:P.m3,rightInputValue:P.m3,selectInput:e=>{ve(e,0,"m3")},onMax:()=>{ve({},1,"m3")}})}),Object(M.jsx)(v.a,{checked:"1"===B,onChange:A,value:"1",name:"radio-buttons",style:{cursor:"pointer",marginTop:8,marginLeft:10,padding:0},inputProps:{"aria-label":"1"}})]}),Object(M.jsxs)("div",{style:{display:"flex",alignItems:"center",paddingRight:28,width:"100%"},children:[Object(M.jsx)("div",{style:{width:"100%"},children:Object(M.jsx)(K.a,{SelectIcon:()=>Object(M.jsx)("span",{children:"Collateral"}),options:[{...ke.find((e=>e.token===E.mintTokenInfo.symbol)),rightOptionList:ke.filter((e=>e.token===E.mintTokenInfo.symbol))}],leftBalance:ye?ye[G]:0,RightIcon:Object(w.n)(w.j,[Object(M.jsx)("span",{style:{color:"#f40"},children:"Neutralize"})]),leftSelectValue:G,leftSymbol:G,rightSelectValue:G,leftInputValue:P.m4,rightInputValue:P.m4,rightNumberIsShow:!1,selectInput:e=>{ve(e,0,"m4")},onMax:()=>{ve({},1,"m4")}})}),Object(M.jsx)(v.a,{checked:"2"===B,onChange:A,value:"2",style:{cursor:"pointer",marginTop:8,marginLeft:10,padding:0},name:"radio-buttons",inputProps:{"aria-label":"2"}})]}),Object(M.jsx)(X.a,{data:[["OutStanding Debt",W.oustrandingDebt,Object(R.b)(ge,E.mintTokenInfo.decimals)],["Daily Obligation Reference","".concat(W.estimatedDailyDebt," ").concat(E.mintTokenInfo.settlementCurrency.symbol),"".concat(Object(R.b)(Math.floor(fe),E.mintTokenInfo.settlementCurrency.decimals)," ").concat(E.mintTokenInfo.settlementCurrency.symbol)],[te.b.CollateralRatio,W.displayRatio,xe],[te.b.PrepaidInterestCoverage,W.displayCoverage,Oe]]}),Object(M.jsxs)(w.k,{children:[Object(M.jsx)(w.h,{style:{background:"#FF7D00",color:"#fff"},children:"!"}),Object(M.jsx)("p",{children:"The collateral ratio should lower than 200% and the Prepaid Interest Coverage should lower than 100 days after the liquidation."})]}),Object(M.jsx)(w.e,{disabled:Se,onClick:we,children:"Submit"})]})}),Object(M.jsx)(y.a,{item:!0,style:{paddingTop:0,marginBottom:40,paddingBottom:50},xs:4,children:Object(M.jsx)(q,{pageType:"Liq"})})]}):Object(M.jsx)(ce,{children:Object(M.jsxs)(j.b,{to:"/collateral",style:{color:"#2AA1FF"},children:["Please enable the collateral first",Object(M.jsx)(N.a,{})," "]})})]})})}))},441:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(1);var a=n(0);function i(e){var t;return Object(a.jsx)("img",{...e.imgprops,style:{width:22,height:22,...null===(t=e.imgprops)||void 0===t?void 0:t.style},src:e.token,alt:e.symbol})}},458:function(e,t,n){"use strict";var a,i=n(7),s=(n(1),n(17)),o=n(0);const l=Object(s.a)("div")(a||(a=Object(i.a)(["\n  background: #def1ff;\n  border-radius: 14px;\n  padding: 13px 22px;\n  margin: 20px 0;\n\n  table {\n    width: 100%;\n  }\n\n  td {\n    font-family: PingFangSC-Regular, sans-serif;\n    font-weight: 400;\n    font-size: 12px;\n    padding: 5px 0;\n  }\n\n  .label {\n    text-align: left;\n    width: 30%;\n  }\n\n  .from,\n  .to {\n    width: 35%;\n    line-height: 17px;\n    text-align: right;\n  }\n\n  .to {\n    font-family: PingFangSC-Medium, sans-serif;\n    font-weight: 500;\n    color: #000;\n  }\n\n  .borderTop {\n    border-top: 0.5px solid rgba(0, 0, 0, 0.12);\n  }\n"])));t.a=function(e){const{data:t}=e;return Object(o.jsx)(l,{children:Object(o.jsx)("table",{children:Object(o.jsxs)("tbody",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{className:"from",colSpan:2,children:"From"}),Object(o.jsx)("td",{className:"to",children:"To"})]}),t.map((e=>Object(o.jsxs)("tr",{className:e[3]?"borderTop":"",children:[Object(o.jsx)("td",{className:"label",children:e[0]}),Object(o.jsx)("td",{className:"from",children:e[1]}),Object(o.jsx)("td",{className:"to",children:e[2]})]},e[0])))]})})})}},470:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a,i,s,o=n(7),l=n(1),c=n(17),r=n(28),d=n(224),p=n(18),b=n(123),u=n(0);const m=Object(c.a)("div")(a||(a=Object(o.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: static !important;\n"]))),j=Object(c.a)("div")(i||(i=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  width: calc(100% / 2 - 25px);\n\n  p {\n    height: 28px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 15px;\n    box-sizing: border-box;\n\n    span {\n      font-size: 12px;\n      line-height: 17px;\n      color: rgba(0, 0, 0, 0.5);\n    }\n  }\n\n  .maxBtn {\n    height: 21px;\n    align-items: flex-end;\n  }\n"])));Object(c.a)("strong")(s||(s=Object(o.a)(["\n  display: block;\n  width: 20px;\n  height: 20px;\n  background: #c4c4c4;\n  line-height: 20px;\n  text-align: center;\n  border-radius: 50%;\n"])));function h(e){const{options:t,leftBalance:n,isExchange:a,onExchange:i,onMax:s,selectInput:o,rightSelectInput:c,SelectIcon:h,RightIcon:g,leftInputValue:f,rightInputValue:x,rightBalance:O,rightDisableStatus:y,leftChange:k,rightChange:T,leftDisableStatus:I=[!1,!1],leftSelectValue:C,rightSelectValue:v,rightOptions:w,leftSymbol:S,rightSymbol:N,rightNumberIsShow:D=!0,leftDesc:P,rightDesc:F}=e,[B,L]=Object(l.useState)(t&&t.length?t[0]:{}),[V,R]=Object(l.useState)(t&&t.length?t[0].rightOptionList:[]),[M,z]=Object(l.useState)(V?V[0]:{});Object(l.useEffect)((()=>{t&&t.length&&C&&v&&(L(t.filter((e=>e.token===C))[0]||t[0]),R(t[0].rightOptionList),z(t[0].rightOptionList.filter((e=>e.token===v))[0]||t[0].rightOptionList[0]))}),[C,t,v]);const A=Object(l.useMemo)((()=>{const e=O||M&&M.balance||0,t=n||B.balance||0;return{right:{orignalBalance:e,balance:r.a.formatFourDecimals(e),symbol:N||(M&&Object.keys(M)?M.token:"WBTC")},left:{orignalBalance:t,balance:r.a.formatFourDecimals(t),symbol:S||B.token||"WBTC"}}}),[B,n,S,O,N,M]);return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(m,{children:[Object(u.jsxs)(j,{children:[Object(u.jsxs)("p",{title:"".concat(A.left.symbol," Balance: ").concat(A.left.orignalBalance),children:[Object(u.jsx)(h,{}),Object(u.jsxs)("span",{className:"balance",children:[A.left.balance," ",A.left.symbol]})]}),Object(u.jsx)(d.a,{selectValue:C||B.token,allDisabled:!I||I[0]&&I[1],inputDisabled:!I||I[1],selectDisabled:!I||I[0],onChange:e=>{const n=t.filter((t=>t.token===e))[0];R(n.rightOptionList),z(n.rightOptionList[0]),L(n),k&&k(n)},selectInput:o,actionValue:f,options:t,groupStyle:{width:"100%"},isGroup:!0},1),Object(u.jsxs)(b.g,{style:{justifyContent:"space-between",alignItems:"center"},children:[P&&P,Object(u.jsx)("p",{dir:"rtl",style:{width:"100%"},className:"maxBtn",children:Object(u.jsx)("span",{onClick:()=>{s&&s(B)},onKeyUp:()=>null,tabIndex:0,role:"button",style:{cursor:"pointer",color:"#6ED6F3",fontSize:"0.75rem",userSelect:"none"},children:"Max"})})]})]}),a?Object(u.jsx)(p.h,{onClick:i,style:{fill:"none",cursor:"pointer",width:22,marginTop:8}}):Object(u.jsx)(p.s,{style:{fill:"none",width:22,marginTop:8}}),Object(u.jsxs)(j,{children:[Object(u.jsxs)("p",{title:D?"".concat(A.right.symbol," Balance: ").concat(A.right.orignalBalance):"",children:[Object(u.jsx)(g,{}),D?Object(u.jsxs)("span",{className:"balance",children:[A.right.balance," ",A.right.symbol]}):null]}),Object(u.jsx)(d.a,{selectValue:v||(M?M.token:"WBTC"),options:w||V,actionValue:x,groupStyle:{width:"100%"},isGroup:!0,allDisabled:!y||y[0]&&y[1],inputDisabled:!y||y[1],selectDisabled:!y||y[0],selectInput:c,onChange:e=>{if(B){const t=B.rightOptionList.filter((t=>t.token===e))[0];T&&T(t),z(t)}else{const n=t[0].filter((t=>t.token===e))[0];T&&T(n),z(n)}}},2),Object(u.jsxs)(b.g,{style:{justifyContent:"space-between",alignItems:"center"},children:[F&&F,Object(u.jsx)("p",{dir:"rtl",style:{width:"100%"},className:"maxBtn"})]})]})]})})}}}]);
//# sourceMappingURL=20.26164d70.chunk.js.map