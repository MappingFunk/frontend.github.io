(this["webpackJsonpmappingfunk-interface"]=this["webpackJsonpmappingfunk-interface"]||[]).push([[28],{1062:function(e,t,n){"use strict";n.r(t);var i,a=n(7),o=n(1),s=n(17),c=n(97),r=n(452),l=n(707),d=n.n(l),b=n(0);const j=Object(s.a)("h1")(i||(i=Object(a.a)(['\n  font-family: "Heebo Medium";\n  font-style: normal;\n  font-weight: 500; \n  font-size: 32px;\n  line-height: 48px;\n  color: #000;\n'])));var p,u,m=function(e){const{children:t}=e;return Object(b.jsx)(j,{...e,children:t})},O=n(28),h=n(142),g=n(21),k=n(997);const y=Object(s.a)("div")(p||(p=Object(a.a)(["\n  padding-right: 44px;\n"]))),f=Object(s.a)(c.a)(u||(u=Object(a.a)(["\n  .pagination {\n  }\n"]))),I=[{id:"positionAddress",numeric:!1,disablePadding:!0,isSort:!0,label:"Collateral"},{id:"symbol",numeric:!1,disablePadding:!1,isSort:!0,label:"Ticker"},{id:"markPrice",numeric:!0,disablePadding:!1,isSort:!0,label:"Mark Price"},{id:"outstandingDebt",numeric:!0,disablePadding:!1,isSort:!0,label:" Outstanding Debt Position"},{id:"collateralRatio",numeric:!0,disablePadding:!1,isSort:!0,label:"Collateral Ratio"},{id:"prepaidInterestCoverage",numeric:!0,disablePadding:!1,isSort:!0,label:"Prepaid Interest Coverage"}];t.default=function(e){const{history:t}=e,[n,i]=Object(o.useState)("Ticker"),[a,s]=Object(o.useState)(),c=Object(o.useCallback)((e=>{let{target:t}=e;const{value:n}=t;s(n)}),[]),{positionAll:l,tokenPrice:j,allowedTokens:p}=Object(h.c)(),{handleChangeCurrentPosition:u}=Object(h.b)(),x=Object(o.useMemo)((()=>Object.values(l).map((e=>{let t=0;const{settlementCurrency:n}=e.mintTokenInfo;let i=Object.keys(g.h).reduce(((e,t)=>({...e,[t]:0})),{});var a;e.isEnable&&j[e.positionAddress]&&(t=Object(O.b)(null===(a=j[e.positionAddress][e.mintTokenInfo.symbol])||void 0===a?void 0:a.price,n.decimals,!0));if(e.isEnable&&p[e.positionAddress]){const{balances:t,tokens:n}=p[e.positionAddress];t&&n&&(i=Object.keys(t).reduce(((e,i)=>({...e,[i]:n[i]?Object(O.b)(t[i],n[i].decimals,!0):0})),{...i}))}const{prepaidInterestCoverage:o,collateralRatio:s}=e;return{symbol:e.mintTokenInfo.symbol,positionAddress:e.positionAddress,logo:e.mintTokenInfo.logo,markPrice:t,displayMarkPrice:"".concat(t," ").concat(n.symbol),avatarBalance:Number(i[e.mintTokenInfo.symbol]),prepaidInterestCoverage:o,collateralRatio:s,displayCoverage:o===Number.POSITIVE_INFINITY?"+\u221e":"".concat(Math.floor(o)," days"),displayRatio:s===Number.POSITIVE_INFINITY?"+\u221e":s&&"".concat(O.a.formatTokenAmount(s,2),"%")||"".concat(s),outstandingDebt:Object(O.b)(e.balance,e.mintTokenInfo.decimals,!0)}}))),[p,l,j]);return Object(b.jsxs)(y,{children:[Object(b.jsx)(m,{style:{marginBottom:14,fontFamily:"Heebo Medium"},children:"Liquidation"}),Object(b.jsxs)(f,{children:[Object(b.jsxs)(k.Search,{children:[Object(b.jsx)(k.SearchIconWrapper,{children:Object(b.jsx)(d.a,{})}),Object(b.jsx)(k.StyledInputBase,{type:"search",placeholder:n,inputProps:{"aria-label":"search"},value:a,onInput:c,onFocus:()=>{i("")},onBlur:()=>{i("Ticker")}})]}),Object(b.jsx)(r.b,{rowClick:(e,n)=>{u(n.symbol),t.push("/liquidation/detail")},pagination:!0,dataSource:x,columns:I,content:(e,t,n)=>{return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(r.a,{component:"th",id:n,scope:"row",children:Object(b.jsx)("span",{style:{color:"#2AA1FF"},children:(i=e.positionAddress,i?"".concat(i.slice(0,6),"...").concat(i.slice(-6)):i)})}),Object(b.jsx)(r.a,{children:e.symbol}),Object(b.jsx)(r.a,{children:e.displayMarkPrice}),Object(b.jsx)(r.a,{children:e.outstandingDebt}),Object(b.jsx)(r.a,{children:e.displayRatio}),Object(b.jsx)(r.a,{children:e.displayCoverage})]});var i}})]})]})}}}]);
//# sourceMappingURL=28.e994bbc9.chunk.js.map