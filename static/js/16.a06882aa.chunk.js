(this["webpackJsonpmappingfunk-interface"]=this["webpackJsonpmappingfunk-interface"]||[]).push([[16],{1053:function(e,t,n){"use strict";n.r(t);var a,s,i=n(7),c=n(1),o=n.n(c),r=n(716),l=n(1041),d=n(18),b=n(125),u=n(28),p=n(598),j=n(96),m=n(19),h=n(60),O=n(226),y=n(15),f=n(94),g=n(442),x=n(993),w=n(16),k=n(116),C=n(69),T=n(45),v=n(14),S=n(9),M=n(144),A=n(118),P=n(221),R=n(95),I=n(79),B=n(455),D=n(434),L=n(996),W=n(540),F=n.n(W),E=n(103),H=n(25),N=n(599),V=n(110),z=n(0);const U=Object(d.a)(D.a)(a||(a=Object(i.a)(["\n  text-transform: none;\n  cursor: pointer;\n  font-family: PingFangSC-Regular, sans-serif;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n  color: #2aa1ff;\n  padding: 0;\n"]))),{claimHelper:$}=(Object(d.a)(E.a)(s||(s=Object(i.a)(["\n  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);\n  border-radius: 14px;\n  background: linear-gradient(270deg, #7ae9f1 0%, #61c3f7 100%);\n  border-radius: 14px;\n  font-size: 14px;\n  height: 32px;\n  line-height: 32px;\n  color: #000;\n  font-weight: normal;\n"]))),h.a);var J,Z=function(e){let{row:t,address:n,rewardsData:a}=e;const{signer:s}=Object(V.a)(),[i,o]=Object(c.useState)(!1),{setRefresh:r}=Object(g.a)(),{connector:l,active:d,chainId:b,account:p}=Object(u.b)(),{toastInfo:j,toastSuccess:m,toastError:h}=Object(f.a)(),{ticker:O}=t,{walletTokenBalance:x}=Object(g.a)(),[k,C]=Object(c.useState)(!1),T=Object(c.useCallback)((async()=>{d&&l&&O&&(C(!0),await Object(N.a)({connector:l,tokenSymbol:O,chainId:b}),C(!1))}),[l,d,b,O]);Object(c.useEffect)((()=>{a&&(a.walletRewards||a.avatarRewards?0===a.walletRewards.epochReward.toNumber()&&0===a.avatarRewards.epochReward.toNumber()&&o(!0):o(!0))}),[a,t,x]);const v=Object(c.useCallback)((async()=>{if(s){const n=Object(y.b)(s,$.abi,$.address[b]);if(n)try{const e=[];e.push([t.address[b],p]),t.avatar&&Number(t.avatar)>0&&e.push([t.address[b],t.avatar]),o(!0);const s=await n.multipleClaim(e),i=Object(w.b)(a.avatarRewards[0],H.b.WBTC.decimals),c=Object(w.b)(a.walletRewards[0],H.b.WBTC.decimals);if(s){let n=window.localStorage.getItem("claimRewardsList");if(n){n=JSON.parse(n);const a=[...n,{id:F()(),txHash:s.hash,date:(new Date).getTime(),tokenSymbol:t.token,walletRewards:c,avatarRewards:i,type:"My Wallet"}];e.length>1&&a.push({id:F()(),txHash:s.hash,date:(new Date).getTime(),tokenSymbol:t.token,walletRewards:c,avatarRewards:i,type:"Collateral"}),window.localStorage.setItem("claimRewardsList",JSON.stringify(a))}else{const n=[{id:F()(),txHash:s.hash,date:(new Date).getTime(),tokenSymbol:t.token,walletRewards:c,avatarRewards:i,type:"My Wallet"}];e.length>1&&n.push({id:F()(),txHash:s.hash,date:(new Date).getTime(),tokenSymbol:t.token,walletRewards:c,avatarRewards:i,type:"Total Collateral"}),window.localStorage.setItem("claimRewardsList",JSON.stringify(n))}j(R.e.submited,Object(z.jsx)(P.a,{txHash:s.hash,content:"Waiting for confirmation"}));const a=await s.wait();m(R.e.success,Object(z.jsx)(P.a,{txHash:s.hash,content:"Transaction has been confirmed"})),r((e=>!e)),a&&o(!1)}}catch(e){o(!1),h(R.e.failed,null===e||void 0===e?void 0:e.reason)}}}),[p,b,a,t,r,s,h,j,m]);return Object(z.jsx)("div",{children:Object(z.jsxs)(L.a,{direction:"row",spacing:2,children:[Object(z.jsx)(U,{disabled:i,onClick:v,children:"Claim Rewards"}),Object(z.jsx)(U,{disabled:k,onClick:T,children:"Add to Metamask"})]})})};const _=Object(d.a)("div")(J||(J=Object(i.a)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  h3 {\n    font-family: 'Heebo Medium';\n    font-weight: 500;\n    font-size: 22px;\n    line-height: 32px;\n    color: #000000;\n    margin-bottom: 20px;\n  }\n  a {\n    display: flex;\n    align-items: center;\n    svg{\n      width: 13px;\n      height: 13px;\n      margin-right: 10px;\n    }\n    \n    font-family: 'PingFang SC';\n    font-style: normal;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 20px;\n    letter-spacing: 0.02em;\n    color: #2AA1FF;\n  }\n\n"])));var q=function(e){const{children:t}=e;return Object(z.jsx)(_,{...e,children:t})};var Y=function(e){return Object(z.jsx)(m.w,{viewBox:"0 0 14 14",fill:"none",...e,children:Object(z.jsx)("path",{d:"M13.327 4.31099C14.812 7.49536 13.4342 11.2808 10.2496 12.7657C9.08552 13.3087 7.78443 13.4867 6.51733 13.2763C5.25023 13.066 4.07644 12.4771 3.15028 11.5872C3.03172 11.4696 2.96415 11.31 2.96216 11.143C2.96016 10.976 3.02389 10.815 3.1396 10.6945C3.25531 10.5741 3.41372 10.504 3.58067 10.4993C3.74761 10.4946 3.9097 10.5558 4.03197 10.6695C4.77291 11.3815 5.71197 11.8526 6.72567 12.0209C7.73938 12.1892 8.78028 12.0467 9.71151 11.6123C12.2592 10.4245 13.3614 7.3964 12.1736 4.84872C10.9855 2.30104 7.95738 1.19917 5.40938 2.38695C4.23441 2.93388 3.31272 3.90895 2.83274 5.11281L3.69501 5.18536C3.7507 5.18996 3.80419 5.20915 3.85011 5.24099C3.89603 5.27283 3.93275 5.3162 3.95659 5.36674C3.98042 5.41728 3.99053 5.4732 3.98589 5.52889C3.98124 5.58457 3.96202 5.63805 3.93015 5.68395L2.23678 8.12122C2.17383 8.21198 2.08823 8.28469 1.98849 8.33213C1.88874 8.37958 1.77832 8.4001 1.66819 8.39168C1.56008 8.38327 1.45661 8.34416 1.36997 8.27894C1.28334 8.21372 1.21713 8.12511 1.17915 8.02354L0.176556 5.34604C0.157686 5.29578 0.151838 5.24157 0.159556 5.18844C0.167275 5.13532 0.18831 5.08501 0.220702 5.0422C0.253094 4.99939 0.295791 4.96547 0.344818 4.94361C0.393845 4.92174 0.447608 4.91263 0.501102 4.91713L1.51928 5.00272C1.79126 4.17894 2.229 3.41955 2.80554 2.77133C3.38208 2.1231 4.08522 1.59976 4.87165 1.23354C8.05665 -0.251735 11.8421 1.12599 13.327 4.31068V4.31099ZM7.24274 3.18145C7.40323 3.18148 7.55779 3.24215 7.67544 3.3513C7.79309 3.46046 7.86516 3.61004 7.87719 3.77008L7.8791 3.81781V6.94713L9.78597 8.03818C9.92495 8.11771 10.0288 8.24673 10.0769 8.39947C10.125 8.55222 10.1137 8.71747 10.0453 8.86227L10.0224 8.90681C9.94279 9.04574 9.81375 9.14956 9.66101 9.19756C9.50827 9.24556 9.34304 9.23423 9.19829 9.16581L9.15374 9.1429L7.08683 7.96054C6.95022 7.88242 6.83504 7.77173 6.75155 7.63833C6.66806 7.50494 6.61884 7.35297 6.60828 7.19595L6.60638 7.13199V3.81781C6.60638 3.64904 6.67342 3.48718 6.79276 3.36783C6.9121 3.24849 7.07397 3.18145 7.24274 3.18145V3.18145Z",fill:"#2AA1FF"})})};const G=[{id:"ticker",numeric:!1,disablePadding:!0,isSort:!0,label:"Ticker"},{id:"markPrice",numeric:!1,disablePadding:!0,isSort:!0,label:"Mark Price"},{id:"HoldingsWallet",numeric:!0,disablePadding:!1,isSort:!0,label:"In Wallet"},{id:"HoldingsAvatar",numeric:!0,disablePadding:!1,isSort:!0,label:"In Collateral"},{id:"claimableWallet",numeric:!0,disablePadding:!1,isSort:!0,label:"Claimable - In Wallet"},{id:"claimableAvatar",numeric:!0,disablePadding:!1,isSort:!0,label:"Claimable - In Collateral"},{id:"action",numeric:!1,disablePadding:!1,isSort:!1,label:"Action"}];var K=function(e){let{rewardsData:t}=e;const{hashPowerTokenList:n,walletTokenBalance:a}=Object(g.a)(),{account:s}=Object(u.b)();return Object(z.jsxs)(j.a,{style:{marginBottom:20},children:[Object(z.jsxs)(q,{children:[Object(z.jsx)("h3",{children:"Holdings - Hashpower Token"}),Object(z.jsxs)(I.b,{to:"/history/claimed/0",children:[Object(z.jsx)(Y,{})," Claimed History"]})]}),Object(z.jsx)(B.b,{columns:G,dataSource:n||[],pagination:!1,isMyPage:!0,content:(e,n,i)=>Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)(B.a,{style:{paddingLeft:0},component:"th",id:i,scope:"row",children:[Object(z.jsx)("img",{src:H.a[e.ticker],style:{display:"block",marginRight:7,float:"left"},alt:"icon"}),e.ticker]}),Object(z.jsxs)(B.a,{children:[e.tokensValues?w.a.formatFourDecimals(Object(O.f)(e.tokensValues[e.token])):0," WBTC"]}),Object(z.jsx)(B.a,{children:a?Object(O.c)(a[e.token]):0}),Object(z.jsx)(B.a,{children:Number(e.position)&&e.avatarAssetList?Object(O.c)(e.avatarAssetList[e.token]):0}),Object(z.jsxs)(B.a,{children:[t&&t[e.token]&&t[e.token].walletRewards[0]?Object(w.b)(t[e.token].walletRewards.epochReward,H.b.WBTC.decimals):0," ","WBTC"]}),Object(z.jsxs)(B.a,{children:[t&&t[e.token]&&t[e.token].avatarRewards[0]?Object(w.b)(t[e.token].avatarRewards.epochReward,H.b.WBTC.decimals):0," ","WBTC"]}),Object(z.jsx)(B.a,{children:Object(z.jsx)(Z,{row:e,address:s,rewardsData:t&&t[e.token]})})]})})]})},Q=n(458),X=n(241);const ee=[{id:"ticker",numeric:!1,disablePadding:!0,isSort:!0,label:"Ticker"},{id:"markPrice",numeric:!1,disablePadding:!0,isSort:!0,label:"Mark Price"},{id:"collateralMarkValue",numeric:!0,disablePadding:!1,isSort:!0,label:"Collateral Value"},{id:"collateralRatio",numeric:!0,disablePadding:!1,isSort:!0,label:"Collateral Ratio"},{id:"guaranteeDays",numeric:!0,disablePadding:!1,isSort:!0,label:"Prepaid Interest Coverage"},{id:"OutstandingDebtPosition",numeric:!0,disablePadding:!1,isSort:!0,label:"Outstanding Debt Position"},{id:"action",numeric:!1,disablePadding:!1,isSort:!1,label:"Action"}];var te,ne,ae,se,ie,ce=function(){const{hashPowerTokenList:e}=Object(g.a)(),{changeCPT:t}=Object(X.a)(),{setActiveTab:n}=Object(Q.a)();return Object(z.jsxs)(j.a,{style:{marginBottom:20},children:[Object(z.jsxs)(q,{children:[Object(z.jsx)("h3",{children:"Outstanding Debt"}),Object(z.jsxs)(I.b,{to:"/history/obligation",children:[Object(z.jsx)(Y,{}),"Interest Paid History"]})]}),Object(z.jsx)(B.b,{columns:ee,dataSource:e,pagination:!1,isMyPage:!0,content:(e,a,s)=>Object(z.jsxs)(z.Fragment,{children:[Object(z.jsxs)(B.a,{style:{paddingLeft:0},component:"th",id:s,scope:"row",children:[Object(z.jsx)("img",{src:H.a[e.ticker],style:{display:"block",marginRight:7,float:"left"},alt:"icon"}),e.ticker]}),Object(z.jsxs)(B.a,{children:[e.tokensValues?Object(O.f)(e.tokensValues[e.token]):0," WBTC"]}),Object(z.jsxs)(B.a,{children:[Number(e.positionInfoValues)&&Number(e.positionInfoValues.totalAssetsValues)?Object(O.f)(e.positionInfoValues.totalAssetsValues):0," ","WBTC"]}),Object(z.jsx)(B.a,{children:Number(e.position)&&e.positionInfoValues&&(Object(O.b)(e.positionInfoValues.cRate).toString("\u221e")?"".concat(Object(O.b)(e.positionInfoValues.cRate),"%"):"".concat(e.positionInfoValues.cRate,"%"))}),Object(z.jsxs)(B.a,{children:[Number(e.position)&&e.positionInfoValues&&Object(O.b)(e.positionInfoValues.gDays)," days"]}),Object(z.jsx)(B.a,{children:Number(e.position)?(e.balance/Object(w.c)("1",e.decimals)).toFixed(4):0}),Object(z.jsx)(B.a,{children:Object(z.jsxs)(L.a,{direction:"row",spacing:2,children:[Object(z.jsx)(I.b,{style:{color:"#2AA1FF",fontSize:"14px",fontFamily:"PingFangSC-Regular,sans-serif"},to:"/collateral/manage",onClick:()=>{t(e)},children:"Manage Collateral"}),Object(z.jsx)(I.b,{style:{color:"#2AA1FF",fontSize:"14px",fontFamily:"PingFangSC-Regular,sans-serif"},to:"/shortneutralize",onClick:()=>{n(2),t(e)},children:"Neutralize"})]})})]})})]})},oe=n(247);const re=Object(d.a)("div")(te||(te=Object(i.a)(["\n  width: 100%;\n  height: 100%;\n  overflow: scroll;\n"]))),le=Object(d.a)("div")(ne||(ne=Object(i.a)(["\n  box-sizing: border-box;\n  margin-top: 26px;\n  padding-right: 44px;\n  min-width: 1024px;\n  padding-bottom: 100px;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]))),de=Object(d.a)(j.a)(ae||(ae=Object(i.a)(["\n  padding: 30px;\n  height: 100%;\n\n  &.rightPanel {\n    h4 {\n      line-height: 20px;\n    }\n  }\n  h4 {\n    font-family: PingFangSC-Medium, sans-serif;\n    font-weight: 480;\n    font-size: 16px;\n    line-height: 22px;\n    color: black;\n  }\n\n  p {\n    font-family: PingFangSC-Semibold, sans-serif;\n    font-size: 40px;\n    font-weight: 550;\n    line-height: 1;\n    color: #6ed6f3;\n    margin-top: 12px;\n    margin-bottom: 8px;\n    letter-spacing: 1px;\n    sub {\n      font-size: 16px;\n    }\n  }\n  span {\n    font-family: PingFangSC-Regular, sans-serif;\n    font-size: 14px;\n  }\n"]))),be=Object(d.a)(b.l)(se||(se=Object(i.a)(["\n  margin-bottom: 14px;\n  font-family: PingFangSC-Semibold, sans-serif;\n  font-weight: 550;\n  font-size: 22px;\n  line-height: 31px;\n  color: #000000;\n"]))),ue=Object(d.a)(m.c)(ie||(ie=Object(i.a)(["\n  background: linear-gradient(90deg, #61c2f7 0%, #7ae9f0 100%) !important;\n  border-radius: 20px !important;\n  box-shadow: none !important;\n  height: 30px !important;\n  line-height: 30px !important;\n  color: #000 !important;\n  font-size: 14px !important;\n  display: block !important;\n\n  &.disabled {\n    background: #ddd !important;\n    color: #eee !important;\n  }\n"]))),{claimHelper:pe,uniswapV2Multicall:je}=h.a,me=new v.ethers.utils.Interface(x);new v.ethers.utils.Interface(C);function he(){const{prevEpoch:e}=Object(oe.a)(),[t,n]=Object(c.useState)(!1),{hashPowerTokenList:a,walletTokenBalance:s,setRefresh:i}=Object(g.a)(),{signer:o}=Object(V.a)(),{chainId:d,account:j,library:h,active:v}=Object(u.b)(),{toastError:I,toastSuccess:B,toastInfo:D}=Object(f.a)(),[L,W]=Object(c.useState)(0),[F,E]=Object(c.useState)(0),[N,U]=Object(c.useState)(0),[$,J]=Object(c.useState)(0),[Z,_]=Object(c.useState)(null),[q,Y]=Object(c.useState)([]),{login:G,logout:Q}=Object(k.a)(),{onPresentConnectModal:X}=Object(m.G)(G,Q,j),ee=Object(c.useMemo)((()=>v&&d&&Object(y.f)(d)),[v,d]),{positionAll:te}=Object(M.c)(),ne=Object(c.useCallback)((async()=>{if(j){if(o){const t=Object(y.b)(o,pe.abi,pe.address[d]);if(t)try{const e=[];for(const t of a)e.push([t.address[d],j]),t.avatar&&Number(t.avatar)>0&&e.push([t.address[d],t.avatar]);n(!0);const s=await t.multipleClaim(e);s&&(D(R.e.submited,Object(z.jsx)(P.a,{txHash:s.hash,content:"Waiting for confirmation"})),await s.wait(),B(R.e.success,Object(z.jsx)(P.a,{txHash:s.hash,content:"Transaction has been confirmed"})),i((e=>!e)),n(!1))}catch(e){n(!1),I(R.e.failed,null===e||void 0===e?void 0:e.reason)}}}else X()}),[j,d,a,i,o,I,D,B,X]),ae=Object(c.useCallback)((async(e,t,n,a,i,c,o)=>{if(h&&d){const l=Object(y.e)(h,a),b=Object(y.b)(l,e,t),u=Object(y.b)(l,x,H.b[n].address[d]);try{if(b&&s&&u){const e=await u.holderInfoMapping(a);return console.log("holderInfos",e),o?b.pendingReward(c,e[0],e[1],e[2]):b.pendingReward(Object(w.c)("1",i)*c,e[0],e[1],e[2])}}catch(r){console.log(">err",e,t,n,a,i,c,o,r)}}return 0}),[d,h,s]),se=Object(c.useCallback)((async()=>{if(ee&&s){const e=T.c[d].tokens,{provider:t}=Object(y.d)(S.f[d],j,d),n=new A.a(d,je.address,je.abi);for(const a in e)if(Object.prototype.hasOwnProperty.call(e,a)){const t=e[a],i=te[a];if(!s[t.symbol]||!i.isEnable||i.isEnable&&i.balance.isZero())continue;const c=[{target:t.address,callData:me.encodeFunctionData("holderInfoMapping",[j]),functionSignature:"holderInfoMapping"},{target:t.address,callData:me.encodeFunctionData("holderInfoMapping",[i.positionAddress]),functionSignature:"holderInfoMapping"}];n.addAbi(t.address,x),n.addAbi(t.blockUpdater,C);const{returnData:{holderInfoMapping:o}}=await n.aggregate(c)}}}),[j,d,ee,te,s]),ie=Object(c.useCallback)((async()=>{const e={};for(const t of a){const[n,a]=await Promise.all([ae(t.blockUpdater.abi,t.blockUpdater.address[d],t.token,t.position,t.decimals,t.avatarAssetList&&t.avatarAssetList[t.token]||0),ae(t.blockUpdater.abi,t.blockUpdater.address[d],t.token,j,t.decimals,s[t.token]||0)]);e[t.token]={walletRewards:a,avatarRewards:n,walletEstimateDailyReward:t.rewards*s[t.token],avatarEstimateDailyReward:t.avatarAssetList?t.rewards*t.avatarAssetList[t.token]:0}}_(e)}),[j,d,a,ae,s]);Object(c.useEffect)((()=>{a&&a.length&&s&&ie()}),[ie,a,s]),Object(c.useEffect)((()=>{se()}),[ee,s]),Object(c.useEffect)((()=>{if(a&&s&&Z){let e=0,t=0,n=0,i=0;const c=[];for(const o of a){if(s[o.token]&&(e+=s[o.token]*Number(Object(w.b)(o.tokensValues[o.token],H.b.WBTC.decimals))*o.WBTCRouter.USDT),o.avatarAssetList&&(t+=o.avatarAssetList[o.token]*Number(Object(w.b)(o.tokensValues[o.token],H.b.WBTC.decimals))*o.WBTCRouter.USDT),Z[o.token]){console.log("rewardsData[item.token].walletEstimateDailyReward :>> ",o.balance);n+=(Z[o.token].walletEstimateDailyReward/10**8+Z[o.token].avatarEstimateDailyReward/10**8)*o.WBTCRouter.USDT,i+=o.rewards/10**8*o.balance/10**6*o.WBTCRouter.USDT;const e=Number(Object(w.b)(Z[o.token].walletRewards.epochReward,H.b.WBTC.decimals)),t=Number(Object(w.b)(Z[o.token].avatarRewards.epochReward,H.b.WBTC.decimals)),a=e+t,s=(e+t)*o.WBTCRouter.USDT;c.push({rewards:a,usdt:s,lptoken:o.token})}W(e),E(t),U(n),J(i),Y(c)}}}),[a,Z,s]);const he=Object(c.useMemo)((()=>q.reduce(((e,t)=>e+t.rewards),0)),[q]),Oe=Object(c.useMemo)((()=>{const e=q.reduce(((e,t)=>e+t.usdt),0);return w.a.formatCurrencyTwoDecimals(e)}),[q]),ye=Object(c.useMemo)((()=>Object(z.jsxs)(r.a,{container:!0,style:{marginBottom:18,lineHeight:"20px",fontSize:"14px"},children:[Object(z.jsx)(r.a,{item:!0,xs:6,children:Object(z.jsxs)("span",{children:[he&&he.toFixed(8)||he," WBTC"]})}),Object(z.jsx)(r.a,{item:!0,xs:6,dir:"rtl",children:Object(z.jsxs)("span",{children:["$",Oe,"\u2248"]})})]})),[Oe,he]);return Object(z.jsxs)(re,{children:[Object(z.jsx)(b.f,{children:"My Page"}),Object(z.jsxs)(le,{children:[Object(z.jsxs)(r.a,{container:!0,spacing:2,children:[Object(z.jsx)(r.a,{item:!0,xs:8,children:Object(z.jsxs)(r.a,{container:!0,spacing:2,children:[Object(z.jsx)(r.a,{item:!0,xs:12,children:Object(z.jsxs)(de,{children:[Object(z.jsx)(be,{children:"Holdings - Synthetic Hashpower Token"}),Object(z.jsxs)(r.a,{container:!0,children:[Object(z.jsxs)(r.a,{item:!0,xs:6,children:[Object(z.jsx)("h4",{children:"Hashpower Token in Wallet "}),Object(z.jsxs)("p",{children:[Object(z.jsx)("sub",{children:"\u2248"}),"$",w.a.formatNumberWithUnits(L)]})]}),Object(z.jsxs)(r.a,{item:!0,xs:6,children:[Object(z.jsx)("h4",{children:"Hashpower Token in Collateral"}),Object(z.jsxs)("p",{children:[Object(z.jsx)("sub",{children:"\u2248"}),"$",w.a.formatNumberWithUnits(F)]})]})]})]})}),Object(z.jsx)(r.a,{item:!0,xs:12,style:{paddingTop:20},children:Object(z.jsxs)(de,{style:{paddingBottom:33},children:[Object(z.jsx)(be,{children:"Claimable Rewards"}),Object(z.jsxs)(r.a,{container:!0,spacing:2,children:[Object(z.jsxs)(r.a,{item:!0,xs:6,children:[ye,Object(z.jsx)(l.a,{style:{marginBottom:18}}),Object(z.jsxs)(r.a,{container:!0,style:{marginBottom:20,lineHeight:"20px",fontSize:"14px"},children:[Object(z.jsx)(r.a,{item:!0,xs:6,children:Object(z.jsx)("span",{children:"Total"})}),Object(z.jsx)(r.a,{item:!0,xs:6,dir:"rtl",children:Object(z.jsxs)("span",{children:["$",Oe,"\u2248"]})})]})]}),Object(z.jsxs)(r.a,{item:!0,xs:6,style:{paddingTop:0,paddingLeft:97},children:[Object(z.jsx)("img",{src:"/images/eth.png",style:{width:108,height:108,margin:"5px 0 0 35px",display:"block"},alt:"illustration"}),Object(z.jsx)(ue,{disabled:t,style:{margin:"30px 0 0"},className:"".concat(t?"disabled":""),onClick:ne,children:"Claim All Rewards"})]})]})]})})]})}),Object(z.jsx)(r.a,{item:!0,xs:4,children:Object(z.jsxs)(de,{className:"rightPanel",children:[Object(z.jsxs)(be,{children:["Epoch ",e.epoch," Balance"]}),Object(z.jsxs)(r.a,{container:!0,children:[Object(z.jsxs)(r.a,{item:!0,xs:12,style:{marginBottom:30},children:[Object(z.jsx)("h4",{children:"Rewards Earned"}),Object(z.jsxs)("p",{children:[Object(z.jsx)("sub",{children:"\u2248"}),"$",Object(O.d)(N)]})]}),Object(z.jsxs)(r.a,{item:!0,xs:12,style:{marginBottom:30},children:[Object(z.jsx)("h4",{children:"Interest Paid"}),Object(z.jsxs)("p",{children:[Object(z.jsx)("sub",{children:"\u2248"}),"$",Object(O.d)($)]})]}),Object(z.jsx)(r.a,{item:!0,xs:12,style:{marginBottom:30},children:Object(z.jsx)(l.a,{})}),Object(z.jsxs)(r.a,{item:!0,xs:12,style:{marginBottom:36},children:[Object(z.jsx)("h4",{children:"Net Rewards"}),Object(z.jsxs)("p",{children:[Object(z.jsx)("sub",{children:"\u2248"}),Object(O.d)(N-$).includes("-")?Object(O.d)(N-$).replace("-","-$"):"$".concat(Object(O.d)(N-$))]})]})]})]})})]}),Object(z.jsx)("div",{style:{width:"100%"},children:Object(z.jsx)(p.a,{tabsStyle:{minHeight:36,paddingLeft:21},tabStyle:{paddingTop:0,paddingBottom:0,minHeight:32,lineHeight:"32px"},tab:[{label:"All",component:Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)(K,{rewardsData:Z}),Object(z.jsx)(ce,{})]})},{label:"Holdings",component:Object(z.jsx)(K,{rewardsData:Z})},{label:"Outstanding Debt",component:Object(z.jsx)(ce,{})}]})})]})]})}t.default=o.a.memo(he)},442:function(e,t,n){"use strict";var a=n(1),s=n(147);t.a=()=>{const e=Object(a.useContext)(s.a);if(void 0===e)throw new Error("hashPowerToken context undefined");return e}},455:function(e,t,n){"use strict";n.d(t,"b",(function(){return P})),n.d(t,"a",(function(){return k}));var a,s=n(7),i=n(1),c=n.n(i),o=n(18),r=n(1068),l=n(1061),d=n(1069),b=n(1062),u=n(1070),p=n(1071),j=n(1072),m=n(1050),h=n(1040),O=n(994),y=n(10),f=n(0);const g=y.e.svg(a||(a=Object(s.a)(["\n  font-size: 14px;\n  width: 10px;\n  height: 5px;\n  display: block;\n"])));var x,w=function(e){let{order:t}=e;return Object(f.jsxs)("span",{children:[Object(f.jsx)(g,{width:"6",height:"4",viewBox:"0 0 6 4",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(f.jsx)("path",{d:"M0.284084 3.2146L4.81473 3.2146C5.03791 3.2146 5.17182 3.06953 5.06023 2.95794C4.89284 2.77939 2.89534 0.692616 2.79491 0.592183C2.67216 0.458272 2.40434 0.480591 2.29274 0.592183C2.21463 0.670297 0.161333 2.83519 0.0385814 2.95794C-0.0730109 3.08069 0.0720592 3.20344 0.284084 3.2146Z",fill:"asc"===t?"#ccc":" #7d7d7d"})}),Object(f.jsx)(g,{width:"6",height:"4",viewBox:"0 0 6 4",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(f.jsx)("path",{d:"M4.81626 0.7854H0.285613C0.0624289 0.7854 -0.0714817 0.930471 0.0401105 1.04206C0.207499 1.22061 2.205 3.30738 2.30543 3.40782C2.42818 3.54173 2.69601 3.51941 2.8076 3.40782C2.88571 3.3297 4.93901 1.16481 5.06176 1.04206C5.17335 0.919311 5.02828 0.79656 4.81626 0.7854Z",fill:"desc"===t?"#ccc":" #7d7d7d"})})]})};const k=Object(o.a)(h.a)((()=>({["&.".concat(O.a.head)]:{border:"none",color:"rgba(0, 0, 0, 0.5)"},["&.".concat(O.a.body)]:{fontSize:14,borderBottom:"1px solid #E2E8EE"}}))),C=Object(o.a)(r.a)((()=>({cursor:"pointer","&:last-child td, &:last-child th":{fontSize:14,borderBottom:"1px solid rgba(226, 232, 238, 1)"}}))),T=Object(o.a)(l.a)(x||(x=Object(s.a)(["\n  height: 80%;\n  overflow: scroll;\n  &::-webkit-scrollbar,\n  .MuiTableContainer-root::-webkit-scrollbar {\n    display: none;\n  }\n"])));function v(e,t,n){return t[n]<e[n]?-1:t[n]>e[n]?1:0}function S(e,t){return"desc"===e?(e,n)=>v(e,n,t):(e,n)=>-v(e,n,t)}function M(e,t){const n=e.map(((e,t)=>[e,t]));return n.sort(((e,n)=>{const a=t(e[0],n[0]);return 0!==a?a:e[1]-n[1]})),n.map((e=>e[0]))}function A(e){const{order:t,orderBy:n,onRequestSort:a,columns:s,isMyPage:i=!1}=e;return Object(f.jsx)(d.a,{children:Object(f.jsx)(r.a,{children:s.map(((e,s)=>{return Object(f.jsx)(k,{style:{paddingLeft:0===s&&i&&0},sortDirection:n===e.id&&t,children:e.isSort?Object(f.jsxs)(b.a,{active:n===e.id,direction:n===e.id?t:"asc",onClick:(c=e.id,e=>{a(e,c)}),IconComponent:null,style:{color:"rgba(0,0,0,.5)",fontFamily:"PingFangSC-Regular, sans-serif"},children:[e.label,n===e.id?Object(f.jsx)(l.a,{component:"span",style:{marginLeft:4},children:Object(f.jsx)(w,{order:t})}):null]}):Object(f.jsxs)(b.a,{active:n===e.id,direction:n===e.id?t:"asc",IconComponent:null,style:{color:"rgba(0,0,0,.5)",fontFamily:"PingFangSC-Regular, sans-serif"},children:[e.label,n===e.id?Object(f.jsx)(l.a,{component:"span",style:{marginLeft:4},children:Object(f.jsx)(w,{order:t})}):null]})},e.id);var c}))})})}function P(e){const{dataSource:t,columns:n,content:a,pagination:s,rowClick:o,isMyPage:r,pages:l}=e,[d,b]=c.a.useState("desc"),[h,O]=c.a.useState(n[0].id),[y,g]=c.a.useState([]),[x,w]=c.a.useState(0),[v,P]=c.a.useState(10),R=Object(i.useCallback)(((e,t)=>{const n=y.indexOf(t);let a=[];-1===n?a=a.concat(y,t):0===n?a=a.concat(y.slice(1)):n===y.length-1?a=a.concat(y.slice(0,-1)):n>0&&(a=a.concat(y.slice(0,n),y.slice(n+1))),g(a),o&&o(e,t)}),[o,y]),I=c.a.useCallback((()=>t&&t.length&&s?l?M(t,S(d,h)).map(((e,t)=>{const n="enhanced-table-checkbox-".concat(t);return Object(f.jsx)(C,{hover:!0,onClick:t=>R(t,e.ticker),role:"checkbox",tabIndex:-1,children:a(e,t,n)},"row_".concat(n))})):M(t,S(d,h)).slice(x*v,x*v+v).map(((e,t)=>{const n="enhanced-table-checkbox-".concat(t);return Object(f.jsx)(C,{hover:!0,onClick:t=>R(t,e.ticker),role:"checkbox",tabIndex:-1,children:a(e,t,n)},"row_".concat(n))})):t&&t.length&&!s?M(t,S(d,h)).map(((e,t)=>{const n="enhanced-table-checkbox-".concat(t);return Object(f.jsx)(C,{hover:!0,onClick:t=>R(t,e.ticker),role:"checkbox",tabIndex:-1,children:a(e,t,n)},e.ticker)})):Object(f.jsx)(C,{children:Object(f.jsx)(k,{style:{textAlign:"center"},colSpan:n.length,rowSpan:3,children:"No data"})})),[n.length,a,t,R,d,h,x,l,s,v]);return Object(f.jsxs)(T,{children:[Object(f.jsx)(u.a,{children:Object(f.jsxs)(p.a,{sx:{minWidth:1400},"aria-labelledby":"tableTitle",children:[Object(f.jsx)(A,{order:d,orderBy:h,onRequestSort:(e,t)=>{b(h===t&&"asc"===d?"desc":"asc"),O(t)},columns:n,isMyPage:r}),Object(f.jsx)(j.a,{children:I()})]})}),s?Object(f.jsx)(m.a,{rowsPerPageOptions:[10],component:"div",count:l||t&&t.length||0,rowsPerPage:v,page:x,onPageChange:(t,n)=>{w(n),s&&e.onChangePage&&e.onChangePage(n)},onRowsPerPageChange:e=>{P(parseInt(e.target.value,10)),w(0)}}):null]})}},458:function(e,t,n){"use strict";n.d(t,"b",(function(){return p})),n.d(t,"a",(function(){return j})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return h}));var a=n(39),s=n(28),i=n(492),c=n(1),o=n(25),r=n(94),l=n(144),d=n(30),b=n(95),u=n(225);function p(){const{account:e,chainId:t}=Object(s.b)(),n=Object(a.c)((e=>e.short.activeInfo)),{currentPosition:u}=Object(l.c)(),{onCheckApprove:p}=Object(i.b)(),{handleApprove:j}=Object(i.a)(e,n.token?o.b[n.token].address[t]:"0"),[m,h]=Object(c.useState)(!1),[O,y]=Object(c.useState)(!1),{toastError:f}=Object(r.a)();Object(c.useEffect)((()=>{n.token&&(y(!0),p(e,d.e[t].tokens[d.h[n.token]].address,u.positionAddress).then((e=>{e&&e._hex>0?h(!0):h(!1)})).catch((()=>{h(!1)})).finally((()=>{y(!1)})))}),[e,n,t,u.positionAddress,p]);return{approveStatus:m,onApprove:Object(c.useCallback)((async()=>{try{h(!0);return await j(u.positionAddress)}catch(e){throw h(!1),f(b.e.failed,"".concat(e.reason)),e}}),[j,u.positionAddress,f]),checkApproveLoading:O}}function j(){const e=Object(a.b)(),{activeAmount:t,activeInfo:n,activeIndex:s}=Object(a.c)((e=>e.short)),{pendingActionList:i}=m(),o=Object(c.useCallback)((function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(Object(u.e)({activeInfo:t}));const n=i.findIndex((e=>e.token===t.token&&e.tokenType===t.tokenType));n>=0&&e(Object(u.f)({index:n}))}),[e,i]),r=Object(c.useCallback)((t=>{e(Object(u.h)({index:t}))}),[e]),l=Object(c.useCallback)((t=>{e(Object(u.f)({index:t}))}),[e]),d=Object(c.useCallback)((t=>{e(Object(u.g)({amount:t}))}),[e]),b=Object(c.useCallback)((()=>{o(),d(""),l(-1)}),[l,o,d]),p=Object(c.useMemo)((()=>null!==n&&void 0!==n&&n.token?{...n,amount:t,activeIndex:s}:{token:null,amount:"",tokenType:null,activeIndex:-1,approveStatus:!1}),[t,s,n]),j=Object(c.useCallback)((t=>{let{ratio:n,coverage:a}=t;e(Object(u.i)({rateInfo:{rate:n,coverage:a}}))}),[e]);return{setActionInfo:o,setActiveAmount:d,clearActive:b,setActiveTab:r,activeInfo:p,setActionIndex:l,onChangeCollateralIndex:j}}function m(){const e=Object(a.b)(),{pendingActions:t}=Object(a.c)((e=>e.short)),n=Object(c.useMemo)((()=>new Map(t)),[t]),s=Object(c.useCallback)((t=>{const a=n.get(t.token)||[];n.set(t.token,[...a,{...t,type:u.a.ADD}]),e(Object(u.d)({actions:n}))}),[e,n]),i=Object(c.useCallback)(((t,a)=>{const s=[...n.get(t)||[]].filter((e=>e.tokenType!==a));n.set(t,s),e(Object(u.d)({actions:n}))}),[e,n]),o=Object(c.useCallback)((()=>{e(Object(u.d)({actions:new Map}))}),[e]),r=Object(c.useCallback)((t=>{const a=[...n.get(t.token)||[]],s=a.findIndex((e=>e.tokenType===t.tokenType));a.splice(s,1,{...t,type:u.a.ADD}),n.set(t.token,a),e(Object(u.d)({actions:n}))}),[n,e]),l=Object(c.useCallback)((t=>{const a=[...n.get(t.token)||[]],s=a.findIndex((e=>e.neutralizeType===t.neutralizeType));a.splice(s,1,{...t,type:u.a.ADD}),n.set(t.token,a),e(Object(u.d)({actions:n}))}),[n,e]),d=Object(c.useCallback)(((t,a)=>{const s=[...n.get(t)||[]].filter((e=>e.neutralizeType!==a));n.set(t,s),e(Object(u.d)({actions:n}))}),[e,n]),b=Object(c.useMemo)((()=>{const e=new Map;return t.forEach(((t,n)=>{e.set(n,t.map((e=>e.tokenType)))})),e}),[t]),p=Object(c.useMemo)((()=>Array.from(t.values()).flat()),[t]),j=Object(c.useMemo)((()=>{const e={};return p.forEach((t=>{t.tokenType!==u.b.SUPPLY&&t.tokenType!==u.b.WithDraw||(e[t.token]=t.amount)})),e}),[p]),m=Object(c.useMemo)((()=>{let e=0;return p.forEach((t=>{t.tokenType===u.b.SHORT&&(e=t.amount)})),e}),[p]),h=Object(c.useMemo)((()=>{let e=0;return p.forEach((t=>{t.tokenType===u.b.NEUTRALIZE&&(e+=t.amount)})),e}),[p]),O=Object(c.useMemo)((()=>{let e=0;return p.forEach((t=>{t.tokenType===u.b.SUPPLY&&(e+=t.amount)})),e}),[p]),y=Object(c.useMemo)((()=>{const e=new Map;return t.forEach((t=>{const n=t.filter((e=>e.tokenType===u.b.SUPPLY))[0];n&&e.set(n.token,n.amount)})),e}),[t]);return{addPendingAction:s,clearAllPendingAction:o,deletePendingAction:i,updatePendingAction:r,deleteNeutralizePendingAction:d,updateNeutralizePendingAction:l,pendingTokenTypes:b,pendingActions:t,pendingActionList:p,tokenAmount:j,shortAmount:m,supplyAmount:y,supplyAllAmount:O,neutralizeAmount:h}}function h(){const{rateInfo:e,activeTab:t,activeInfo:n}=Object(a.c)((e=>e.short)),s=Object(a.b)();return{rateInfo:e,onChangeCollateralIndex:Object(c.useCallback)((e=>{let{ratio:t,coverage:n}=e;s(Object(u.i)({rateInfo:{rate:t,coverage:n}}))}),[s]),activeTab:t,activeInfo:n}}},492:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d}));var a=n(28),s=n(1),i=n(14),c=n(15),o=n(70),r=n(110);function l(){const{active:e}=Object(a.b)(),{signer:t}=Object(r.a)();return{onCheckApprove:Object(s.useCallback)((async(n,a,s)=>{if(e)try{const e=Object(c.b)(t,o,a);if(e){return await e.allowance(n,s)}}catch(i){return console.error("Failed to check approval",i),null}return null}),[e,t])}}function d(e,t){const{active:n,library:r,chainId:l}=Object(a.b)();return{handleApprove:Object(s.useCallback)((async a=>{if(n&&l){const n=Object(c.e)(r,e),s=Object(c.b)(n,o,t&&"object"===typeof t?t[l]:t);if(s)return s.approve(a,i.ethers.constants.MaxUint256)}return null}),[n,l,r,e,t])}}},598:function(e,t,n){"use strict";var a=n(1),s=n(18),i=n(1052),c=n(1067),o=n(33),r=n(0);const l=Object(s.a)((e=>Object(r.jsx)(i.a,{...e,TabIndicatorProps:{children:Object(r.jsx)("span",{className:"MuiTabs-indicatorSpan"})}})))({margin:"40px auto 20px","& .MuiTabs-indicator":{display:"flex",justifyContent:"center",height:4,backgroundColor:"transparent"},"& .MuiTabs-indicatorSpan":{maxWidth:20,width:"100%",borderRadius:5,background:"linear-gradient(270deg, #7AE9F0 0%, #61C3F7 100%);"}}),d=Object(s.a)((e=>Object(r.jsx)(c.a,{disableRipple:!0,...e})))((e=>{let{theme:t}=e;return{textTransform:"none",minWidth:0,[t.breakpoints.up("sm")]:{minWidth:0},fontFamily:"Heebo Medium",fontWeight:500,marginRight:t.spacing(1),color:"rgba(0, 0, 0, 0.5)",fontSize:"22px","&:hover":{color:"#000000",opacity:1},"&.Mui-selected":{color:"#000000",fontWeight:t.typography.fontWeightMedium},"&.Mui-focusVisible":{backgroundColor:"#d1eaff"}}}));t.a=Object(o.h)((function(e){const{tab:t,tabsStyle:n,tabStyle:s,defaultTabsValue:i,history:c}=e,[o,b]=a.useState(Number(i)||0);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l,{style:n,value:o,onChange:(e,t)=>{b(t),void 0!==i&&c.push("/history/claimed/".concat(t))},children:t.map((e=>Object(r.jsx)(d,{style:s,label:e.label},e.label)))}),t.map(((e,t)=>t===o&&Object(r.jsx)(a.Fragment,{children:e.component},e.label)))]})}))},599:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(25);async function s(e){let{connector:t,tokenSymbol:n,chainId:s}=e;try{const e=await t.getProvider();await e.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:a.b[n].address[s],symbol:n,decimals:a.b[n].decimals}}})}catch(i){}}},993:function(e){e.exports=JSON.parse('[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"holder","type":"address"},{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ClaimReward","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"blockUpdater","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"holderInfoMapping","outputs":[{"internalType":"uint256","name":"lastModifiedEpoch","type":"uint256"},{"internalType":"uint256","name":"lastModifiedTime","type":"uint256"},{"internalType":"uint256","name":"accAmountTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"interestToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"retire","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_vault","type":"address"}],"name":"setVault","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"vault","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]')}}]);
//# sourceMappingURL=16.a06882aa.chunk.js.map