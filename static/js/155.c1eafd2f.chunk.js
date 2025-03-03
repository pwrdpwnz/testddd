"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[155],{10404:(e,n,r)=>{r.d(n,{Z:()=>d});var o=r(45779),i=r(68090),s=r.n(i);function t(){return t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},t.apply(this,arguments)}function c(e,n){if(null==e)return{};var r,o,i=function(e,n){if(null==e)return{};var r,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=(0,o.forwardRef)((function(e,n){var r=e.color,i=void 0===r?"currentColor":r,s=e.size,a=void 0===s?24:s,d=c(e,["color","size"]);return o.createElement("svg",t({ref:n,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),o.createElement("circle",{cx:"12",cy:"12",r:"10"}),o.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),o.createElement("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"}))}));a.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},a.displayName="AlertCircle";const d=a},33882:(e,n,r)=>{r.d(n,{Z:()=>d});var o=r(45779),i=r(68090),s=r.n(i);function t(){return t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},t.apply(this,arguments)}function c(e,n){if(null==e)return{};var r,o,i=function(e,n){if(null==e)return{};var r,o,i={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=(0,o.forwardRef)((function(e,n){var r=e.color,i=void 0===r?"currentColor":r,s=e.size,a=void 0===s?24:s,d=c(e,["color","size"]);return o.createElement("svg",t({ref:n,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),o.createElement("circle",{cx:"12",cy:"12",r:"10"}),o.createElement("polyline",{points:"16 12 12 8 8 12"}),o.createElement("line",{x1:"12",y1:"16",x2:"12",y2:"8"}))}));a.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},a.displayName="ArrowUpCircle";const d=a},16709:(e,n,r)=>{r.d(n,{Z:()=>o});r(45779);const o=r.p+"static/media/blue-loader.249140daf016adc355cfb029ec67de19.svg"},99819:(e,n,r)=>{r.d(n,{p:()=>xe,Z:()=>ye});var o=r(92936),i=r(76078),s=r(26729),t=r(61077),c=r(33932),a=r(57852),d=r(39671),l=r(6823),u=r(45779),p=r(33882),m=r(19733),x=r(10404),h=r(99454),f=r(14411),y=r(54972),g=r(2148),j=r(54703),b=r(72993),w=r(99582),v=r(16709),C=r(96524),T=r(61592),I=r.n(T),A=r(64370),k=r(27179),_=r(53286),S=r(47186);function E(e,n,r){return new i.Fraction(e,I().exponentiate(I().BigInt(10),I().BigInt(n))).toSignificant(r)}function N({rawAmount:e,symbol:n,decimals:r,sigFigs:i}){return(0,o.jsxs)(o.Fragment,{children:[E(e,r,i)," ",n]})}function O({rawAmount:e,currencyId:n,sigFigs:r=6}){const i=(0,d.U8)(n);return i?(0,o.jsx)(N,{rawAmount:e,decimals:i.decimals,sigFigs:r,symbol:i.symbol??"???"}):null}function F({info:{recipient:e,uniAmountRaw:n}}){const{ENSName:r}=(0,k.Z)(),i=r??e;return"string"===typeof n?(0,o.jsxs)(l.cC,{children:["Claim ",(0,o.jsx)(N,{rawAmount:n,symbol:"UNI",decimals:18,sigFigs:4})," for ",{name:i}]}):(0,o.jsxs)(l.cC,{children:["Claim UNI reward for ",{name:i}]})}function D(){return(0,o.jsx)(l.cC,{children:"Submit new proposal"})}function L({info:e}){var n,r,i;const s=(0,d.dQ)(e.tokenAddress);return(null===(n=C.BigNumber.from(e.amount))||void 0===n?void 0:n.eq(0))?(0,o.jsxs)(l.cC,{children:["Revoke ",{sym:null===(r=s)||void 0===r?void 0:r.symbol}]}):(0,o.jsxs)(l.cC,{children:["Approve ",{sym:null===(i=s)||void 0===i?void 0:i.symbol}]})}function R({info:e}){const n=`${e.governorAddress}/${e.proposalId}`;if(e.reason&&e.reason.trim().length>0)switch(e.decision){case _.N.For:return(0,o.jsxs)(l.cC,{children:["Vote for proposal ",{proposalKey:n}]});case _.N.Abstain:return(0,o.jsxs)(l.cC,{children:["Vote to abstain on proposal ",{proposalKey:n}]});case _.N.Against:return(0,o.jsxs)(l.cC,{children:["Vote against proposal ",{proposalKey:n}]})}else switch(e.decision){case _.N.For:return(0,o.jsxs)(l.cC,{children:["Vote for proposal ",{proposalKey:n},' with reason "',{reason:e.reason},'"']});case _.N.Abstain:return(0,o.jsxs)(l.cC,{children:["Vote to abstain on proposal ",{proposalKey:n},' with reason "',{reason:e.reason},'"']});case _.N.Against:return(0,o.jsxs)(l.cC,{children:["Vote against proposal ",{proposalKey:n},' with reason "',{reason:e.reason},'"']})}}function P({info:e}){const n=`${e.governorAddress}/${e.proposalId}`;return(0,o.jsxs)(l.cC,{children:["Queue proposal ",{proposalKey:n},"."]})}function U({info:e}){const n=`${e.governorAddress}/${e.proposalId}`;return(0,o.jsxs)(l.cC,{children:["Execute proposal ",{proposalKey:n},"."]})}function V({info:{delegatee:e}}){const{ENSName:n}=(0,k.Z)(e),r=n??e;return(0,o.jsxs)(l.cC,{children:["Delegate voting power to ",{name:r}]})}function W({info:{chainId:e,currencyAmountRaw:n,unwrapped:r}}){const i=e?(0,A.gX)(e):void 0;var s,t,c,a,d,u;return r?(0,o.jsxs)(l.cC,{children:["Unwrap"," ",(0,o.jsx)(N,{rawAmount:n,symbol:(null===(t=i)||void 0===t||null===(s=t.wrapped)||void 0===s?void 0:s.symbol)??"WETH",decimals:18,sigFigs:6})," ","to ",{symbol:(null===(c=i)||void 0===c?void 0:c.symbol)??"ETH"}]}):(0,o.jsxs)(l.cC,{children:["Wrap"," ",(0,o.jsx)(N,{rawAmount:n,symbol:(null===(a=i)||void 0===a?void 0:a.symbol)??"ETH",decimals:18,sigFigs:6})," ","to ",{symbol:(null===(u=i)||void 0===u||null===(d=u.wrapped)||void 0===d?void 0:d.symbol)??"WETH"}]})}function $(){return(0,o.jsx)(l.cC,{children:"Deposit liquidity"})}function z(){return(0,o.jsx)(l.cC,{children:"Withdraw deposited liquidity"})}function M({info:{baseCurrencyId:e,quoteCurrencyId:n}}){var r,i;const s=(0,d.U8)(e),t=(0,d.U8)(n);return(0,o.jsxs)(l.cC,{children:["Migrate ",{baseSymbol:null===(r=s)||void 0===r?void 0:r.symbol},"/",{quoteSymbol:null===(i=t)||void 0===i?void 0:i.symbol}," liquidity to V3"]})}function q({info:{quoteCurrencyId:e,baseCurrencyId:n}}){var r,i;const s=(0,d.U8)(n),t=(0,d.U8)(e);return(0,o.jsxs)(l.cC,{children:["Create ",{baseSymbol:null===(r=s)||void 0===r?void 0:r.symbol},"/",{quoteSymbol:null===(i=t)||void 0===i?void 0:i.symbol}," V3 pool"]})}function H({info:{currencyId0:e,currencyId1:n}}){var r,i;const s=(0,d.U8)(e),t=(0,d.U8)(n);return(0,o.jsxs)(l.cC,{children:["Collect ",{symbol0:null===(r=s)||void 0===r?void 0:r.symbol},"/",{symbol1:null===(i=t)||void 0===i?void 0:i.symbol}," fees"]})}function B({info:{baseCurrencyId:e,quoteCurrencyId:n,expectedAmountBaseRaw:r,expectedAmountQuoteRaw:i}}){return(0,o.jsxs)(l.cC,{children:["Remove"," ",(0,o.jsx)(O,{rawAmount:r,currencyId:e,sigFigs:3})," and"," ",(0,o.jsx)(O,{rawAmount:i,currencyId:n,sigFigs:3})]})}function Z({info:{createPool:e,quoteCurrencyId:n,baseCurrencyId:r}}){var i,s,t,c;const a=(0,d.U8)(r),u=(0,d.U8)(n);return e?(0,o.jsxs)(l.cC,{children:["Create pool and add ",{baseSymbol:null===(i=a)||void 0===i?void 0:i.symbol},"/",{quoteSymbol:null===(s=u)||void 0===s?void 0:s.symbol}," V3 liquidity"]}):(0,o.jsxs)(l.cC,{children:["Add ",{baseSymbol:null===(t=a)||void 0===t?void 0:t.symbol},"/",{quoteSymbol:null===(c=u)||void 0===c?void 0:c.symbol}," V3 liquidity"]})}function Q({info:{quoteCurrencyId:e,expectedAmountBaseRaw:n,expectedAmountQuoteRaw:r,baseCurrencyId:i}}){return(0,o.jsxs)(l.cC,{children:["Add ",(0,o.jsx)(O,{rawAmount:n,currencyId:i,sigFigs:3})," ","and ",(0,o.jsx)(O,{rawAmount:r,currencyId:e,sigFigs:3})," ","to Uniswap V2"]})}function K({info:e}){return(0,o.jsxs)(l.cC,{children:["Sent",(0,o.jsx)(O,{rawAmount:e.amount,currencyId:e.currencyId,sigFigs:6})," to"," ",{recipient:e.recipient}]})}function Y({info:e}){return e.tradeType===i.TradeType.EXACT_INPUT?(0,o.jsxs)(l.cC,{children:["Swap exactly"," ",(0,o.jsx)(O,{rawAmount:e.inputCurrencyAmountRaw,currencyId:e.inputCurrencyId,sigFigs:6})," ","for"," ",(0,o.jsx)(O,{rawAmount:e.settledOutputCurrencyAmountRaw??e.expectedOutputCurrencyAmountRaw,currencyId:e.outputCurrencyId,sigFigs:6})]}):(0,o.jsxs)(l.cC,{children:["Swap"," ",(0,o.jsx)(O,{rawAmount:e.expectedInputCurrencyAmountRaw,currencyId:e.inputCurrencyId,sigFigs:6})," ","for exactly"," ",(0,o.jsx)(O,{rawAmount:e.outputCurrencyAmountRaw,currencyId:e.outputCurrencyId,sigFigs:6})]})}function G({info:e}){switch(e.type){case S.i.ADD_LIQUIDITY_V3_POOL:return(0,o.jsx)(Z,{info:e});case S.i.ADD_LIQUIDITY_V2_POOL:return(0,o.jsx)(Q,{info:e});case S.i.CLAIM:return(0,o.jsx)(F,{info:e});case S.i.DEPOSIT_LIQUIDITY_STAKING:return(0,o.jsx)($,{});case S.i.WITHDRAW_LIQUIDITY_STAKING:return(0,o.jsx)(z,{});case S.i.SWAP:return(0,o.jsx)(Y,{info:e});case S.i.APPROVAL:return(0,o.jsx)(L,{info:e});case S.i.VOTE:return(0,o.jsx)(R,{info:e});case S.i.DELEGATE:return(0,o.jsx)(V,{info:e});case S.i.WRAP:return(0,o.jsx)(W,{info:e});case S.i.CREATE_V3_POOL:return(0,o.jsx)(q,{info:e});case S.i.MIGRATE_LIQUIDITY_V3:return(0,o.jsx)(M,{info:e});case S.i.COLLECT_FEES:return(0,o.jsx)(H,{info:e});case S.i.REMOVE_LIQUIDITY_V3:return(0,o.jsx)(B,{info:e});case S.i.QUEUE:return(0,o.jsx)(P,{info:e});case S.i.EXECUTE:return(0,o.jsx)(U,{info:e});case S.i.SUBMIT_PROPOSAL:return(0,o.jsx)(D,{});case S.i.SEND:return(0,o.jsx)(K,{info:e})}}var X=r(69780),J=r(44591),ee=r(2562),ne=r(94284);const re=f.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\TransactionConfirmationModal\\AnimatedConfirmation__Wrapper",componentId:"sc-5616b2b8-0"})`
  height: 90px;
  width: 90px;
`,oe=f.keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`,ie=f.keyframes`
  0% {
    stroke-dashoffset: -100;
  }
  100% {
    stroke-dashoffset: 900;
  }
`,se=f.default.circle.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\TransactionConfirmationModal\\AnimatedConfirmation__Circle",componentId:"sc-5616b2b8-1"})`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  -webkit-animation: ${oe} 0.9s ease-in-out;
  animation: ${oe} 0.9s ease-in-out;
`,te=f.default.polyline.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\TransactionConfirmationModal\\AnimatedConfirmation__PolyLine",componentId:"sc-5616b2b8-2"})`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  stroke-dashoffset: -100;
  -webkit-animation: ${ie} 0.9s 0.35s ease-in-out forwards;
  animation: ${ie} 0.9s 0.35s ease-in-out forwards;
`;function ce({className:e}){const n=(0,f.useTheme)();return(0,o.jsx)(re,{className:e,"data-testid":"animated-confirmation",children:(0,o.jsxs)("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 130.2 130.2",children:[(0,o.jsx)(se,{className:"path circle",fill:"none",stroke:n.success,strokeWidth:"6",strokeMiterlimit:"10",cx:"65.1",cy:"65.1",r:"62.1"}),(0,o.jsx)(te,{className:"path check",fill:"none",stroke:n.success,strokeWidth:"6",strokeLinecap:"round",strokeMiterlimit:"10",points:"100.2,40.2 51.5,88.8 29.8,67.5 "})]})})}const ae=f.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\TransactionConfirmationModal\\index__Wrapper",componentId:"sc-ad7a7442-0"})`
  background-color: ${({theme:e})=>e.surface1};
  border-radius: 20px;
  outline: 1px solid ${({theme:e})=>e.surface3};
  width: 100%;
  padding: 16px;
`,de=(0,f.default)(J.Tz).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\TransactionConfirmationModal\\index__BottomSection",componentId:"sc-ad7a7442-1"})`
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`,le=(0,f.default)(J.lg).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\TransactionConfirmationModal\\index__ConfirmedIcon",componentId:"sc-ad7a7442-2"})`
  padding: ${({inline:e})=>e?"20px 0":"32px 0;"};
`,ue=(0,f.default)(J.Tz).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\TransactionConfirmationModal\\index__ConfirmationModalContentWrapper",componentId:"sc-ad7a7442-3"})`
  padding-bottom: 12px;
`;function pe({onDismiss:e,pendingText:n,inline:r}){return(0,o.jsx)(ae,{children:(0,o.jsxs)(J.Tz,{gap:"md",children:[!r&&(0,o.jsxs)(ne.m0,{children:[(0,o.jsx)("div",{}),(0,o.jsx)(y.Tw,{onClick:e})]}),(0,o.jsx)(le,{inline:r,children:(0,o.jsx)(y._1,{src:v.Z,alt:"loader",size:r?"40px":"90px"})}),(0,o.jsxs)(J.Tz,{gap:"md",justify:"center",children:[(0,o.jsx)(y.Tv.SubHeaderLarge,{color:"neutral1",textAlign:"center",children:(0,o.jsx)(l.cC,{children:"Waiting for confirmation"})}),(0,o.jsx)(y.Tv.SubHeader,{color:"neutral1",textAlign:"center",children:n}),(0,o.jsx)(y.Tv.SubHeaderSmall,{color:"neutral2",textAlign:"center",marginBottom:"12px",children:(0,o.jsx)(l.cC,{children:"Confirm this transaction in your wallet"})})]})]})})}function me({onDismiss:e,chainId:n,hash:r,currencyToAdd:t,inline:c}){var a,x;const h=(0,f.useTheme)(),{connector:g}=(0,s.G)(),b=null===(a=t)||void 0===a?void 0:a.wrapped,w=(null===(x=(0,d.J3)(b))||void 0===x?void 0:x.logoUrl)??"",[v,C]=(0,u.useState)(),T=(0,u.useCallback)((()=>{var e;(null===(e=b)||void 0===e?void 0:e.symbol)&&g.watchAsset&&g.watchAsset({address:b.address,symbol:b.symbol,decimals:b.decimals,image:w}).then((()=>C(!0))).catch((()=>C(!1)))}),[g,w,b]),I=n===i.ChainId.MAINNET?l.t`View on  Etherscan`:l.t`View on Block Explorer`;return(0,o.jsx)(ae,{children:(0,o.jsxs)(J.Tz,{children:[!c&&(0,o.jsxs)(ne.m0,{children:[(0,o.jsx)("div",{}),(0,o.jsx)(y.Tw,{onClick:e})]}),(0,o.jsx)(le,{inline:c,children:(0,o.jsx)(p.Z,{strokeWidth:1,size:c?"40px":"75px",color:h.accent1})}),(0,o.jsxs)(ue,{gap:"md",justify:"center",children:[(0,o.jsx)(y.Tv.MediumHeader,{textAlign:"center",children:(0,o.jsx)(l.cC,{children:"Transaction submitted"})}),t&&g.watchAsset&&(0,o.jsx)(X.Sy,{mt:"12px",padding:"6px 12px",width:"fit-content",onClick:T,children:v?(0,o.jsxs)(ne.DA,{children:[(0,o.jsxs)(l.cC,{children:["Added ",{sym:t.symbol}," "]}),(0,o.jsx)(m.Z,{size:"16px",stroke:h.success,style:{marginLeft:"6px"}})]}):(0,o.jsx)(ne.DA,{children:(0,o.jsxs)(l.cC,{children:["Add ",{sym:t.symbol}]})})}),(0,o.jsx)(X.DF,{onClick:e,style:{margin:"20px 0 0 0"},"data-testid":"dismiss-tx-confirmation",children:(0,o.jsx)(y.Tv.HeadlineSmall,{color:h.deprecated_accentTextLightPrimary,children:c?(0,o.jsx)(l.cC,{children:"Return"}):(0,o.jsx)(l.cC,{children:"Close"})})}),n&&r&&(0,o.jsx)(y.dL,{href:(0,j.E)(n,r,j.r.TRANSACTION),children:(0,o.jsx)(y.Tv.Link,{color:h.accent1,children:I})})]})]})})}function xe({title:e,bottomContent:n,onDismiss:r,topContent:i,headerContent:s}){var t;return(0,o.jsxs)(ae,{children:[(0,o.jsxs)(J.Tz,{gap:"sm",children:[(0,o.jsxs)(ne.ZP,{children:[null===(t=s)||void 0===t?void 0:t(),(0,o.jsx)(ne.ZP,{justify:"center",marginLeft:"24px",children:(0,o.jsx)(y.Tv.SubHeader,{children:e})}),(0,o.jsx)(y.Tw,{onClick:r,"data-testid":"confirmation-close-icon"})]}),i()]}),n&&(0,o.jsx)(de,{gap:"16px",children:n()})]})}const he=(0,f.default)(t.Z).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\TransactionConfirmationModal\\index__StyledL2Badge",componentId:"sc-ad7a7442-4"})`
  padding: 6px 8px;
`;function fe({onDismiss:e,chainId:n,hash:r,pendingText:i,inline:s}){var t;const d=(0,f.useTheme)(),u=(0,h.kF)(r),p=u&&(0,h.qy)(u),m=(null===(t=u)||void 0===t?void 0:t.status)===w.LND.Confirmed,g=p&&u.confirmedTime?(u.confirmedTime-u.addedTime)/1e3:void 0,b=a.T_[n];return(0,o.jsx)(ae,{children:(0,o.jsxs)(J.Tz,{children:[!s&&(0,o.jsxs)(ne.m0,{mb:"16px",children:[(0,o.jsx)(he,{children:(0,o.jsxs)(ne.DA,{gap:"sm",children:[(0,o.jsx)(c.E,{chainId:n}),(0,o.jsx)(y.Tv.SubHeaderSmall,{children:b.label})]})}),(0,o.jsx)(y.Tw,{onClick:e})]}),(0,o.jsx)(le,{inline:s,children:p?m?(0,o.jsx)(ce,{}):(0,o.jsx)(x.Z,{strokeWidth:1,size:s?"40px":"90px",color:d.critical}):(0,o.jsx)(y._1,{src:v.Z,alt:"loader",size:s?"40px":"90px"})}),(0,o.jsxs)(J.Tz,{gap:"md",justify:"center",children:[(0,o.jsx)(y.Tv.SubHeaderLarge,{textAlign:"center",children:r?p?m?(0,o.jsx)(l.cC,{children:"Success"}):(0,o.jsx)(l.cC,{children:"Error"}):(0,o.jsx)(l.cC,{children:"Transaction submitted"}):(0,o.jsx)(l.cC,{children:"Confirm transaction in wallet"})}),(0,o.jsx)(y.Tv.BodySecondary,{textAlign:"center",children:u?(0,o.jsx)(G,{info:u.info}):i}),n&&r?(0,o.jsx)(y.dL,{href:(0,j.E)(n,r,j.r.TRANSACTION),children:(0,o.jsx)(y.Tv.SubHeaderSmall,{color:d.accent1,children:(0,o.jsx)(l.cC,{children:"View on Explorer"})})}):(0,o.jsx)("div",{style:{height:"17px"}}),(0,o.jsx)(y.Tv.SubHeaderSmall,{color:d.neutral3,marginTop:"20px",children:g?(0,o.jsxs)("div",{children:[(0,o.jsx)(l.cC,{children:"Transaction completed in "}),(0,o.jsxs)("span",{style:{fontWeight:535,marginLeft:"4px",color:d.neutral1},children:[g," seconds \ud83c\udf89"]})]}):(0,o.jsx)("div",{style:{height:"24px"}})}),(0,o.jsx)(X.DF,{onClick:e,style:{margin:"4px 0 0 0"},children:s?(0,o.jsx)(l.cC,{children:"Return"}):(0,o.jsx)(l.cC,{children:"Close"})})]})]})})}function ye({isOpen:e,onDismiss:n,attemptingTxn:r,hash:i,pendingText:s,reviewContent:t,currencyToAdd:c}){const d=(0,b.x)(),l=(0,a.Nb)(d);return d&&l?(0,o.jsx)(ee.Z,{isOpen:e,$scrollOverlay:!0,onDismiss:n,maxHeight:90,children:(0,g.p)(d)&&(i||r)?(0,o.jsx)(fe,{chainId:d,hash:i,onDismiss:n,pendingText:s}):r?(0,o.jsx)(pe,{onDismiss:n,pendingText:s}):i?(0,o.jsx)(me,{chainId:d,hash:i,onDismiss:n,currencyToAdd:c}):t()}):null}},40926:(e,n,r)=>{r.d(n,{DC:()=>c,ER:()=>a,bb:()=>d,im:()=>t,pr:()=>l});var o=r(32546),i=r(22953),s=r(14411);const t=s.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\styled__Wrapper",componentId:"sc-bfb6c8b8-0"})`
  position: relative;
  padding: 20px;
`,c=(0,s.default)(i.xv).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\styled__ClickableText",componentId:"sc-bfb6c8b8-1"})`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,a=s.default.button.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\styled__MaxButton",componentId:"sc-bfb6c8b8-2"})`
  padding: 0.5rem 1rem;
  background-color: ${({theme:e})=>e.accent2};
  border: 1px solid ${({theme:e})=>e.accent2};
  border-radius: 0.5rem;
  font-size: 1rem;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0.25rem 0.5rem;
  `};
  font-weight: 535;
  cursor: pointer;
  margin: 0.25rem;
  overflow: hidden;
  color: ${({theme:e})=>e.accent1};
  :hover {
    border: 1px solid ${({theme:e})=>e.accent1};
  }
  :focus {
    border: 1px solid ${({theme:e})=>e.accent1};
    outline: none;
  }
`,d=s.default.span.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\styled__Dots",componentId:"sc-bfb6c8b8-3"})`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`,l=(0,s.default)(o.pr).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\styled__LoadingRows",componentId:"sc-bfb6c8b8-4"})`
  padding-top: 36px;
  min-width: 75%;
  max-width: 960px;
  grid-column-gap: 0.5em;
  grid-row-gap: 0.8em;
  grid-template-columns: repeat(3, 1fr);
  padding: 8px;

  & > div:nth-child(4n + 1) {
    grid-column: 1 / 3;
  }
  & > div:nth-child(4n) {
    grid-column: 3 / 4;
    margin-bottom: 2em;
  }
`},53286:(e,n,r)=>{var o;r.d(n,{N:()=>o}),function(e){e[e.Against=0]="Against",e[e.For=1]="For",e[e.Abstain=2]="Abstain"}(o||(o={}))}}]);
//# sourceMappingURL=155.c1eafd2f.chunk.js.map