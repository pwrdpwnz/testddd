"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[3464],{3464:(e,t,n)=>{n.d(t,{ZI:()=>Ct,zD:()=>_t,ZP:()=>yt});var s=n(92936),r=n(5985),o=n(12722),a=n(54690),i=n(6823),c=n(80305),l=n(15288),d=n(66284),u=n(76078),p=n(26729),g=n(25320),m=n(44591),x=n(63415),h=n(5967),f=n(94284),I=n(24210),N=n(82743),w=n(86059),A=n(57852),T=n(41390),C=n(99582);var _=n(39671),b=n(2802),v=n(32682),E=n(83102),k=n(68566),y=n(89882),P=n(64538),j=n(52384),O=n(5670),R=n(78635),S=n(45779),L=n(32115),B=n(91325);var F=n(47263),z=n(78129),D=n(59036),U=n(25408);function G(e,t,n){const{hasPriceAdjustment:s,updatedAssets:r}=(0,D.$)(e,t),o=s&&n,{unchanged:a,priceChanged:i,unavailable:c}=(0,U.K)(r),l=r.length>0,d=i.length>0,u=c.length>0,p=d||u,g=function(e,t,n){return[...e.map((e=>({asset:e,status:F.ZJ.UNAVAILABLE}))),...t.map((e=>({asset:e,status:F.ZJ.REVIEWING_PRICE_CHANGE}))),...n.map((e=>({asset:e,status:F.ZJ.REVIEWED})))]}(c,i,a),m=function(e,t,n,s){return e?t?n?F.s.IN_REVIEW:F.s.CONFIRM_REVIEW:s?F.s.CONFIRM_QUOTE:F.s.CONFIRMING_IN_WALLET:F.s.ADDING_TO_BAG}(l,p,d,o);return{newBagItems:g,nextBagStatus:m}}function H(e){return{action:F.lQ.Buy,marketplace:e.marketplace.toLowerCase(),amountIn:e.price.value,assetIn:{ETHPrice:e.price.value,baseAsset:e.price.currency,basePrice:e.price.value,baseDecimals:"18"},amountOut:e.amount.toString(),assetOut:{id:e.id,decimals:18,address:e.contractAddress,priceInfo:{ETHPrice:e.price.value,baseAsset:e.price.currency,basePrice:e.price.value,baseDecimals:"18"},tokenType:e.tokenType,tokenId:e.tokenId,amount:e.amount.toString(),marketplace:e.marketplace.toLowerCase(),orderSource:"api"}}}function M(e,t){const n=e.route?e.route.map(H):[];return{route:n,routeResponse:{route:n,valueToSend:t?void 0:e.sendAmount.value,data:e.calldata,to:e.toAddress}}}var W=n(51001),$=n(27009),V=n(32027);function Z(e,t,n,s,r,o,a){try{var i=e[o](a),c=i.value}catch(l){return void n(l)}i.done?t(c):Promise.resolve(c).then(s,r)}function q(){const e=(0,W.z)(),t=(0,$.p)((e=>e.sendTransaction)),n=(0,V.J)((e=>e.setTransactionResponse)),{setLocked:s,setBagExpanded:r,reset:o}=(0,P.c)((({setLocked:e,setBagExpanded:t,reset:n})=>({setLocked:e,setBagExpanded:t,reset:n})));return(0,S.useCallback)(function(){var a,i=(a=function*(a,i,c=!1){if(!e)return;const l=yield t(e,i,a,c);l&&(s(!1),n(l),r({bagExpanded:!1}),o())},function(){var e=this,t=arguments;return new Promise((function(n,s){var r=a.apply(e,t);function o(e){Z(r,n,s,o,i,"next",e)}function i(e){Z(r,n,s,o,i,"throw",e)}o(void 0)}))});return function(e,t){return i.apply(this,arguments)}}(),[e,o,t,r,s,n])}var K=n(47832),X=n(92532);const Y=(0,n(92490).F)()((0,K.mW)((e=>({inputCurrency:void 0,tokenTradeInput:void 0,setInputCurrency:t=>e((()=>({inputCurrency:t}))),clearInputCurrency:()=>e((()=>({inputCurrency:void 0}))),setTokenTradeInput:t=>e((()=>({tokenTradeInput:t})))})),{name:"useTokenInput"}),X.X);function J(e,t,n,s,r,o,a){try{var i=e[o](a),c=i.value}catch(l){return void n(l)}i.done?t(c):Promise.resolve(c).then(s,r)}function Q(e){return function(){var t=this,n=arguments;return new Promise((function(s,r){var o=e.apply(t,n);function a(e){J(o,s,r,a,i,"next",e)}function i(e){J(o,s,r,a,i,"throw",e)}a(void 0)}))}}function ee(){const{account:e}=(0,p.G)(),{itemsInBag:t,setBagStatus:n,didOpenUnavailableAssets:s,setDidOpenUnavailableAssets:r,isLocked:o,setLocked:a,setItemsInBag:i}=(0,P.c)((({itemsInBag:e,setBagStatus:t,didOpenUnavailableAssets:n,setDidOpenUnavailableAssets:s,isLocked:r,setLocked:o,setItemsInBag:a})=>({itemsInBag:e,setBagStatus:t,didOpenUnavailableAssets:n,setDidOpenUnavailableAssets:s,isLocked:r,setLocked:o,setItemsInBag:a}))),c=Y((e=>e.tokenTradeInput)),l=(0,S.useMemo)((()=>(0,z.G7)(t)),[t]),[d]=(0,C.yoq)(),u=q(),g=(0,S.useCallback)((()=>{s&&r(!1),!o&&a(!0),n(F.s.FETCHING_ROUTE)}),[o,s,a,n,r]);return(0,S.useCallback)(Q((function*(){g(),d({variables:{senderAddress:e||"",nftTrades:(0,z.hI)(l),tokenTrades:c||void 0},onCompleted:e=>{if(!e.nftRoute||!e.nftRoute.route)return n(F.s.ADDING_TO_BAG),void a(!1);const t=function(e){return e.filter((e=>e.status!==F.ZJ.UNAVAILABLE)).map((e=>e.asset))}(l),s=!!c,{route:r,routeResponse:o}=M(e.nftRoute,s),{newBagItems:d,nextBagStatus:p}=G(t,r,s);if(i(d),n(p),p===F.s.CONFIRMING_IN_WALLET)return u(o,t,s),void a(!0);a(!1)}})})),[e,d,l,u,g,a,n,i,c])}var te=n(92650);function ne(e){return{...(n={inputAmount:e.inputAmount,outputAmount:e.outputAmount},{inputAmount:{amount:n.inputAmount.quotient.toString(),token:{address:n.inputAmount.currency.isToken?n.inputAmount.currency.address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainId:n.inputAmount.currency.chainId,decimals:n.inputAmount.currency.decimals,isNative:n.inputAmount.currency.isNative}},outputAmount:{amount:n.outputAmount.quotient.toString(),token:{address:n.outputAmount.currency.isToken?n.outputAmount.currency.address:"0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",chainId:n.outputAmount.currency.chainId,decimals:n.outputAmount.currency.decimals,isNative:n.outputAmount.currency.isNative}}}),pools:(t=e.route.pools,t.map((e=>function(e){const t="fee"in e;return{pair:t?void 0:{tokenAmountA:{amount:e.reserve0.quotient.toString(),token:{address:e.token0.address,chainId:e.token0.chainId,decimals:e.token0.decimals,isNative:e.token0.isNative}},tokenAmountB:{amount:e.reserve1.quotient.toString(),token:{address:e.token1.address,chainId:e.token1.chainId,decimals:e.token1.decimals,isNative:e.token1.isNative}}},pool:t?{fee:e.fee,liquidity:e.liquidity.toString(),sqrtRatioX96:e.sqrtRatioX96.toString(),tickCurrent:e.tickCurrent.toString(),tokenA:{address:e.token0.address,chainId:e.token0.chainId,decimals:e.token0.decimals,isNative:e.token0.isNative},tokenB:{address:e.token1.address,chainId:e.token1.chainId,decimals:e.token1.decimals,isNative:e.token1.isNative}}:void 0}}(e))))};var t,n}function se(e,t,n){const s=Y((e=>e.setTokenTradeInput)),r=(0,B.pG)(e)&&e.routes,o=!!e&&!!e.inputAmount&&e.inputAmount.currency.isToken,a=!!n&&!!t;(0,S.useEffect)((()=>{if(!r||!o||!a)return void s(void 0);const i=parseInt(n.multiply(100).toSignificant(2)),{mixedTokenTradeRouteInputs:c,v2TokenTradeRouteInputs:l,v3TokenTradeRouteInputs:d}=function(e){const t=[],n=[],s=[],r=e.swaps;for(const o of r)o.route.protocol===te.Protocol.MIXED?t.push(ne(o)):o.route.protocol===te.Protocol.V2?n.push(ne(o)):s.push(ne(o));return{mixedTokenTradeRouteInputs:t.length>0?t:void 0,v2TokenTradeRouteInputs:n.length>0?n:void 0,v3TokenTradeRouteInputs:s.length>0?s:void 0}}(e),u={mixedRoutes:c,tradeType:C.NSL.ExactOutput,v2Routes:l,v3Routes:d},p="permitSignature"in t&&t.permitSignature?{details:{amount:t.permitSignature.details.amount.toString(),expiration:t.permitSignature.details.expiration.toString(),nonce:t.permitSignature.details.nonce.toString(),token:t.permitSignature.details.token},sigDeadline:t.permitSignature.sigDeadline.toString(),signature:t.permitSignature.signature,spender:t.permitSignature.spender}:void 0;s({permit:p,routes:u,slippageToleranceBasisPoints:i,tokenAmount:{amount:e.inputAmount.quotient.toString(),token:{address:e.inputAmount.currency.address,chainId:e.inputAmount.currency.chainId,decimals:e.inputAmount.currency.decimals,isNative:e.inputAmount.currency.isNative}}})}),[t,n,a,o,r,s,e])}var re=n(14411),oe=n(66136),ae=n(2721);var ie,ce=n(43827),le=n(57221),de=n(86082),ue=n(54972);function pe(e,t,n,r,o){const a={handleClick:()=>{},buttonText:(0,s.jsx)(i.cC,{children:"Something went wrong"}),disabled:!0,warningText:void 0,warningTextColor:t.deprecated_accentWarning,helperText:void 0,helperTextColor:t.neutral2,buttonColor:t.accent1,buttonTextColor:t.deprecated_accentTextLightPrimary};return{[ie.WALLET_NOT_CONNECTED]:{...a,handleClick:n??(()=>{}),disabled:!1,buttonText:(0,s.jsx)(i.cC,{children:"Connect wallet"})},[ie.NOT_SUPPORTED_CHAIN]:{...a,handleClick:n??(()=>{}),buttonText:(0,s.jsx)(i.cC,{children:"Switch networks"}),disabled:!1,warningText:(0,s.jsx)(i.cC,{children:"Wrong network"})},[ie.INSUFFICIENT_BALANCE]:{...a,buttonText:(0,s.jsx)(i.cC,{children:"Pay"}),warningText:(0,s.jsx)(i.cC,{children:"Insufficient funds"})},[ie.ERROR]:{...a,warningText:(0,s.jsx)(i.cC,{children:"Something went wrong. Please try again."})},[ie.IN_WALLET_CONFIRMATION]:{...a,buttonText:(0,s.jsx)(i.cC,{children:"Proceed in wallet"})},[ie.PROCESSING_TRANSACTION]:{...a,buttonText:(0,s.jsx)(i.cC,{children:"Transaction pending"})},[ie.FETCHING_TOKEN_ROUTE]:{...a,buttonText:(0,s.jsx)(i.cC,{children:"Fetching route"})},[ie.INVALID_TOKEN_ROUTE]:{...a,buttonText:(0,s.jsx)(i.cC,{children:"Pay"})},[ie.NO_TOKEN_ROUTE_FOUND]:{...a,buttonText:(0,s.jsx)(i.cC,{children:"Insufficient liquidity"}),buttonColor:t.surface3,buttonTextColor:t.neutral1,helperText:(0,s.jsx)(i.cC,{children:"Insufficient pool liquidity to complete transaction"})},[ie.LOADING_ALLOWANCE]:{...a,buttonText:(0,s.jsx)(i.cC,{children:"Loading allowance"})},[ie.IN_WALLET_ALLOWANCE_APPROVAL]:{...a,buttonText:(0,s.jsx)(i.cC,{children:"Approve in your wallet"})},[ie.PROCESSING_APPROVAL]:{...a,buttonText:(0,s.jsx)(i.cC,{children:"Approval pending"})},[ie.REQUIRE_APPROVAL]:{...a,disabled:!1,handleClick:n??(()=>{}),helperText:(0,s.jsx)(i.cC,{children:"An approval is needed to use this token. "}),buttonText:(0,s.jsx)(i.cC,{children:"Approve"})},[ie.CONFIRM_UPDATED_PRICE]:{...a,handleClick:n??(()=>{}),disabled:!1,warningTextColor:t.accent1,warningText:(0,s.jsx)(i.cC,{children:"Price updated"}),buttonText:(0,s.jsx)(i.cC,{children:"Pay"})},[ie.PRICE_IMPACT_HIGH]:{...a,handleClick:n??(()=>{}),disabled:!1,buttonColor:o?o.priceImpactSeverity.color:a.buttonColor,helperText:(0,s.jsx)(i.cC,{children:"Price impact warning"}),helperTextColor:o?o.priceImpactSeverity.color:a.helperTextColor,buttonText:(0,s.jsx)(i.cC,{children:"Pay Anyway"})},[ie.PAY]:{...a,handleClick:n??(()=>{}),disabled:!1,buttonText:(0,s.jsx)(i.cC,{children:"Pay"}),helperText:r?(0,s.jsx)(i.cC,{children:"Refunds for unavailable items will be given in ETH"}):void 0}}[e]}!function(e){e[e.WALLET_NOT_CONNECTED=0]="WALLET_NOT_CONNECTED",e[e.NOT_SUPPORTED_CHAIN=1]="NOT_SUPPORTED_CHAIN",e[e.INSUFFICIENT_BALANCE=2]="INSUFFICIENT_BALANCE",e[e.ERROR=3]="ERROR",e[e.IN_WALLET_CONFIRMATION=4]="IN_WALLET_CONFIRMATION",e[e.PROCESSING_TRANSACTION=5]="PROCESSING_TRANSACTION",e[e.FETCHING_TOKEN_ROUTE=6]="FETCHING_TOKEN_ROUTE",e[e.INVALID_TOKEN_ROUTE=7]="INVALID_TOKEN_ROUTE",e[e.NO_TOKEN_ROUTE_FOUND=8]="NO_TOKEN_ROUTE_FOUND",e[e.LOADING_ALLOWANCE=9]="LOADING_ALLOWANCE",e[e.IN_WALLET_ALLOWANCE_APPROVAL=10]="IN_WALLET_ALLOWANCE_APPROVAL",e[e.PROCESSING_APPROVAL=11]="PROCESSING_APPROVAL",e[e.REQUIRE_APPROVAL=12]="REQUIRE_APPROVAL",e[e.CONFIRM_UPDATED_PRICE=13]="CONFIRM_UPDATED_PRICE",e[e.PRICE_IMPACT_HIGH=14]="PRICE_IMPACT_HIGH",e[e.PAY=15]="PAY"}(ie||(ie={}));const ge=re.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\bag\\BagFooter__FooterContainer",componentId:"sc-358ea9ad-0"})`
  padding: 0px 12px;
`,me=re.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\bag\\BagFooter__Footer",componentId:"sc-358ea9ad-1"})`
  border-top: 1px solid ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  display: flex;
  flex-direction: column;
  margin: 0px 16px 8px;
  padding: 12px 0px;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`,xe=(0,re.default)(m.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\bag\\BagFooter__FooterHeader",componentId:"sc-358ea9ad-2"})`
  padding-top: 8px;
  padding-bottom: 16px;
`,he=(0,re.default)(f.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\bag\\BagFooter__CurrencyRow",componentId:"sc-358ea9ad-3"})`
  justify-content: space-between;
  align-items: start;
  gap: 8px;
`,fe=(0,re.default)(m.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\bag\\BagFooter__TotalColumn",componentId:"sc-358ea9ad-4"})`
  text-align: end;
  overflow: hidden;
`,Ie=(0,re.default)(le.Z).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\bag\\BagFooter__WarningIcon",componentId:"sc-358ea9ad-5"})`
  width: 14px;
  margin-right: 4px;
  color: inherit;
`,Ne=(0,re.default)(ue.Tv.BodyPrimary).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\bag\\BagFooter__WarningText",componentId:"sc-358ea9ad-6"})`
  align-items: center;
  color: ${({$color:e})=>e};
  display: flex;
  justify-content: center;
  margin-bottom: 10px !important;
  text-align: center;
`,we=(0,re.default)(ue.Tv.BodySmall).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\bag\\BagFooter__HelperText",componentId:"sc-358ea9ad-7"})`
  color: ${({$color:e})=>e};
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 10px !important;
`,Ae=(0,re.default)(f.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\bag\\BagFooter__CurrencyInput",componentId:"sc-358ea9ad-8"})`
  gap: 8px;
  cursor: pointer;
`,Te=re.default.button.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\bag\\BagFooter__ActionButton",componentId:"sc-358ea9ad-9"})`
  display: flex;
  background: ${({$backgroundColor:e})=>e};
  color: ${({$color:e})=>e};
  font-weight: 535;
  line-height: 24px;
  font-size: 16px;
  gap: 16px;
  justify-content: center;
  border: none;
  border-radius: 12px;
  padding: 12px 0px;
  cursor: pointer;
  align-items: center;

  &:disabled {
    opacity: 0.6;
    cursor: auto;
  }
`,Ce=(0,re.default)(N.X).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\bag\\BagFooter__FiatLoadingBubble",componentId:"sc-358ea9ad-10"})`
  border-radius: 4px;
  width: 4rem;
  height: 20px;
  align-self: end;
`,_e=(0,re.default)(f.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\bag\\BagFooter__PriceImpactContainer",componentId:"sc-358ea9ad-11"})`
  align-items: center;
  gap: 8px;
  width: 100%;
  justify-content: flex-end;
`,be=(0,re.default)(f.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\bag\\BagFooter__PriceImpactRow",componentId:"sc-358ea9ad-12"})`
  align-items: center;
  gap: 8px;
`,ve=(0,re.default)(ue.Tv.BodyPrimary).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\bag\\BagFooter__ValueText",componentId:"sc-358ea9ad-13"})`
  line-height: 20px;
  font-weight: 535;
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    display: none;
  }
`,Ee=({color:e,children:t})=>t?(0,s.jsxs)(Ne,{"data-testid":"nft-buy-button-warning",fontSize:"14px",lineHeight:"20px",$color:e,children:[(0,s.jsx)(Ie,{}),t]}):null,ke=({children:e,color:t})=>e?(0,s.jsx)(we,{lineHeight:"16px",$color:t,children:e}):null,ye={onlyShowCurrenciesWithBalance:!0},Pe=({usingPayWithAnyToken:e,totalEthPrice:t,activeCurrency:n,tradeState:r,trade:o})=>{var a;const{formatEther:c,formatNumberOrString:l}=(0,oe.Gb)();var d;return e?r!==L.qx.LOADING||o?(0,s.jsx)(ve,{color:r===L.qx.LOADING?"neutral3":"neutral1",children:l({input:null===(a=o)||void 0===a?void 0:a.inputAmount.toExact(),type:oe.sw.NFTToken})}):(0,s.jsx)(ue.Tv.BodyPrimary,{color:"neutral3",lineHeight:"20px",fontWeight:"535",children:(0,s.jsx)(i.cC,{children:"Fetching price..."})}):(0,s.jsxs)(ue.Tv.BodyPrimary,{lineHeight:"20px",fontWeight:"535",children:[c({input:t.toString(),type:oe.sw.NFTToken}),"\xa0",(null===(d=n)||void 0===d?void 0:d.symbol)??"ETH"]})},je=({usdcValue:e,priceImpact:t,tradeState:n,usingPayWithAnyToken:r})=>{var o;const{formatNumberOrString:a}=(0,oe.Gb)();return e?(0,s.jsxs)(_e,{children:[t&&(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(w.ud,{text:i.t`The estimated difference between the USD values of input and output amounts.`,children:(0,s.jsxs)(be,{children:[(0,s.jsx)(le.Z,{color:t.priceImpactSeverity.color,size:"16px"}),(0,s.jsxs)(ue.Tv.BodySmall,{style:{color:t.priceImpactSeverity.color},lineHeight:"20px",children:["(",t.displayPercentage(),")"]})]})})}),(0,s.jsx)(ue.Tv.BodySmall,{color:"neutral3",lineHeight:"20px",children:`${a({input:null===(o=e)||void 0===o?void 0:o.toExact(),type:oe.sw.FiatNFTToken})}`})]}):!r||n!==L.qx.INVALID&&n!==L.qx.NO_ROUTE_FOUND?(0,s.jsx)(Ce,{}):null},Oe=[F.s.FETCHING_ROUTE,F.s.CONFIRMING_IN_WALLET,F.s.FETCHING_FINAL_ROUTE,F.s.PROCESSING_TRANSACTION],Re=({setModalIsOpen:e,eventProperties:t})=>{var n,a,c,l;const f=(0,g.LK)(),N=(0,re.useTheme)(),{account:w,chainId:z}=(0,p.G)(),D=(0,A.Nb)(z),U=Boolean(w&&z),G=(0,j.P)(),{inputCurrency:H}=Y((({inputCurrency:e})=>({inputCurrency:e}))),M=Y((e=>e.setInputCurrency)),W=(0,_.U8)("ETH"),V=(0,k.mM)(w??void 0,H&&H.isToken?H:void 0),{isLocked:Z,bagStatus:q,setBagExpanded:K,setBagStatus:X}=(0,P.c)((({isLocked:e,bagStatus:t,setBagExpanded:n,setBagStatus:s})=>({isLocked:e,bagStatus:t,setBagExpanded:n,setBagStatus:s}))),[J,Q]=(0,S.useState)(!1),te=Oe.includes(q),ne=H??W,le=!!H&&z===u.ChainId.MAINNET,{universalRouterAddress:Ie,universalRouterAddressIsLoading:Ne}=function(){var e,t;const{data:n,loading:s}=(0,C.Z6i)({fetchPolicy:"no-cache"});return{universalRouterAddress:null===(t=n)||void 0===t||null===(e=t.nftRoute)||void 0===e?void 0:e.toAddress,universalRouterAddressIsLoading:s}}();!function(e){const t=(0,$.p)((e=>e.state)),n=(0,$.p)((e=>e.setState)),s=(0,S.useRef)(t),{setBagStatus:r,setLocked:o}=(0,P.c)((({setBagExpanded:e,setBagStatus:t,setLocked:n})=>({setBagExpanded:e,setBagStatus:t,setLocked:n})));(0,S.useEffect)((()=>{$.p.subscribe((e=>s.current=e.state))}),[]),(0,S.useEffect)((()=>{s.current===F.c$.Confirming&&r(F.s.PROCESSING_TRANSACTION),s.current!==F.c$.Denied&&s.current!==F.c$.Invalid||(s.current===F.c$.Invalid?r(F.s.WARNING):r(F.s.CONFIRM_REVIEW),n(F.c$.New),o(!1),e(!1))}),[o,r,e,n,s.current])}(e);const we=ee(),Ce=(0,S.useMemo)((()=>(0,y.Z)((0,d.formatEther)(G.toString()),W??void 0)),[W,G]),{state:_e,trade:be,maximumAmountIn:ve,allowedSlippage:Re}=function(e,t){const{state:n,trade:s}=(0,R.C)(u.TradeType.EXACT_OUTPUT,t,e??void 0,L.R5.API),r=(0,O.Z)((0,B.pG)(s)?s:void 0),o=(0,S.useMemo)((()=>{var e,t;const n=null===(e=s)||void 0===e?void 0:e.maximumAmountIn(r);return(null===(t=n)||void 0===t?void 0:t.currency.isToken)?n:void 0}),[r,s]);return(0,S.useMemo)((()=>({state:n,trade:s,maximumAmountIn:o,allowedSlippage:r})),[r,o,n,s])}(le?H:void 0,Ce),Se=(0,b.Z)(ve,function(e,t){if(e)return e===u.ChainId.MAINNET?t??(0,T.UNIVERSAL_ROUTER_ADDRESS)(e):(0,T.UNIVERSAL_ROUTER_ADDRESS)(e)}(D?z:void 0,Ie),L.d7.Classic),Le=Se.state===b.K.LOADING||Ne;se(be,Se,Re);const Be=function(e){const t=(0,re.useTheme)(),{formatPercent:n}=(0,oe.Gb)();return(0,S.useMemo)((()=>{const s=e?(0,ae.QW)(e):void 0,r=s?(0,ae.BK)(s):void 0,o="error"===r?t.critical:"warning"===r?t.deprecated_accentWarning:void 0;return s&&r&&o?{priceImpactSeverity:{type:r,color:o},displayPercentage:()=>n(s)}:void 0}),[n,t.critical,t.deprecated_accentWarning,e])}(be),Fe=(0,v.sq)(null===(n=be)||void 0===n?void 0:n.inputAmount),ze=(0,v.sq)(Ce),De=le?Fe:ze,{balance:Ue}=(0,ce.t)(),Ge=(0,S.useMemo)((()=>{if(U&&z===u.ChainId.MAINNET){if(H){var e;const t=null===(e=be)||void 0===e?void 0:e.inputAmount;if(!V||!t)return;return!V.lessThan(t)}return(0,d.parseEther)(Ue).gte(G)}}),[U,z,H,Ue,G,null===(a=be)||void 0===a?void 0:a.inputAmount,V]);(0,S.useEffect)((()=>{X(F.s.ADDING_TO_BAG)}),[H,X]);const He=(0,E.o)(),{buttonText:Me,buttonTextColor:We,disabled:$e,warningText:Ve,warningTextColor:Ze,helperText:qe,helperTextColor:Ke,handleClick:Xe,buttonColor:Ye}=(0,S.useMemo)((()=>{if(U&&z!==u.ChainId.MAINNET){const e=()=>He(u.ChainId.MAINNET);return pe(ie.NOT_SUPPORTED_CHAIN,N,e)}if(!1===Ge)return pe(ie.INSUFFICIENT_BALANCE,N);if(q===F.s.WARNING)return pe(ie.ERROR,N);if(!U){const e=()=>{f(),K({bagExpanded:!1})};return pe(ie.WALLET_NOT_CONNECTED,N,e)}if(q===F.s.FETCHING_FINAL_ROUTE||q===F.s.CONFIRMING_IN_WALLET)return pe(ie.IN_WALLET_CONFIRMATION,N);if(q===F.s.PROCESSING_TRANSACTION)return pe(ie.PROCESSING_TRANSACTION,N);if(le&&_e!==L.qx.VALID)return _e===L.qx.INVALID?pe(ie.INVALID_TOKEN_ROUTE,N):_e===L.qx.NO_ROUTE_FOUND?pe(ie.NO_TOKEN_ROUTE_FOUND,N):pe(ie.FETCHING_TOKEN_ROUTE,N);const e=Se.state===b.K.REQUIRED,t=()=>e&&Se.approveAndPermit();return Le?pe(ie.LOADING_ALLOWANCE,N,t):e?Se.isApprovalPending?pe(ie.IN_WALLET_ALLOWANCE_APPROVAL,N,t):Se.isApprovalLoading?pe(ie.PROCESSING_APPROVAL,N,t):pe(ie.REQUIRE_APPROVAL,N,t):q===F.s.CONFIRM_QUOTE?pe(ie.CONFIRM_UPDATED_PRICE,N,we):Be&&"error"===Be.priceImpactSeverity.type?pe(ie.PRICE_IMPACT_HIGH,N,we,le,Be):pe(ie.PAY,N,we,le)}),[U,z,Ge,q,le,_e,Le,Se,Be,N,we,He,f,K]),Je={usd_value:null===(c=De)||void 0===c?void 0:c.toExact(),using_erc20:!!H,...t};return(0,s.jsxs)(ge,{children:[(0,s.jsxs)(me,{children:[(0,s.jsxs)(xe,{gap:"xs",children:[(0,s.jsxs)(he,{children:[(0,s.jsx)(m.ZP,{gap:"xs",children:D&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(ue.Tv.SubHeaderSmall,{children:(0,s.jsx)(i.cC,{children:"Pay with"})}),(0,s.jsxs)(Ae,{onClick:()=>{Z||(Q(!0),(0,o._P)(r.Yz.NFT_BUY_TOKEN_SELECTOR_CLICKED))},children:[(0,s.jsx)(h.Z,{currency:ne,size:24}),(0,s.jsx)(ue.Tv.HeadlineSmall,{fontWeight:535,lineHeight:"24px",children:null===(l=ne)||void 0===l?void 0:l.symbol}),(0,s.jsx)(de.Z,{size:20,color:N.neutral2})]})]})}),(0,s.jsxs)(fe,{gap:"xs",children:[(0,s.jsx)(ue.Tv.SubHeaderSmall,{children:(0,s.jsx)(i.cC,{children:"Total"})}),(0,s.jsx)(Pe,{usingPayWithAnyToken:le,totalEthPrice:G,activeCurrency:ne,tradeState:_e,trade:be})]})]}),(0,s.jsx)(je,{usdcValue:De,priceImpact:Be,tradeState:_e,usingPayWithAnyToken:le})]}),(0,s.jsxs)(o.M8,{events:[r.TM.onClick],name:r.Yz.NFT_BUY_BAG_PAY,element:r.xo.NFT_BUY_BAG_PAY_BUTTON,properties:{...Je},shouldLogImpression:U&&!$e,children:[(0,s.jsx)(Ee,{color:Ze,children:Ve}),(0,s.jsx)(ke,{color:Ke,children:qe}),(0,s.jsxs)(Te,{"data-testid":"nft-buy-button",onClick:Xe,disabled:$e||te,$backgroundColor:Ye,$color:We,children:[te&&(0,s.jsx)(x.ZP,{size:"20px",stroke:"white"}),Me]})]})]}),(0,s.jsx)(I.Z,{isOpen:J,onDismiss:()=>Q(!1),onCurrencySelect:e=>{M(e.isNative?void 0:e),e.isToken&&(0,o._P)(r.Yz.NFT_BUY_TOKEN_SELECTED,{token_address:e.address,token_symbol:e.symbol})},selectedCurrency:ne??void 0,currencySearchFilters:ye})]})};var Se=n(60040),Le=n(70518),Be=n(79132),Fe=n(62587),ze=n(97341),De=(n(12143),n(11604)),Ue=n(21989),Ge=n(69780);const He=re.keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`,Me=re.default.circle.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\bag\\TimedLoader__Circle",componentId:"sc-40ed38f8-0"})`
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  -webkit-animation: ${He} linear;
  animation: ${He} linear;
  animation-duration: 160s;
  stroke: ${({theme:e})=>e.accent1};
`,We=()=>(0,s.jsx)(c.n,{display:"flex",position:"absolute",children:(0,s.jsx)("svg",{height:"18px",width:"18px",children:(0,s.jsx)(Me,{strokeWidth:"1.5",strokeLinecap:"round",style:{transform:"rotate(90deg)",transformOrigin:"50% 50%"},fill:"transparent",r:"8px",cx:"9px",cy:"9px"})})});var $e=n(62293),Ve=n(58690),Ze=n(68113),qe=n(23173),Ke=n(43454),Xe=(n(49484),"_1kuawcb rgw6ezbf rgw6ezd9 rgw6ez8bh rgw6ez45r rgw6ez45l"),Ye="_1kuawc1 rgw6ez2dr rgw6ez2j9 rgw6ez2of rgw6ez27x rgw6ez4b9 rgw6ez3tf rgw6ez7zd rgw6ez1dr rgw6ez80x",Je="rgw6ez149 rgw6ez1b9 rgw6ez49l rgw6ez80p",Qe="rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez8bh rgw6ez45l rgw6ez45r rgw6ez4bf",et="_1kuawc7",tt="rgw6ez3xr";const nt=(0,re.default)(Ge.UH).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\bag\\BagRow__RemoveButton",componentId:"sc-2ecf14d3-0"})`
  border-radius: 12px;
  font-size: 14px;
  line-height: 16px;
  margin-left: 16px;
  padding: 12px 14px;
`,st=(0,re.default)(Ge.UH).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\bag\\BagRow__ReviewButton",componentId:"sc-2ecf14d3-1"})`
  border-radius: 12px;
  flex: 1 1 auto;
  font-size: 14px;
  padding: 8px;
  width: 50%;
`,rt=re.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\bag\\BagRow__RemoveAssetOverlay",componentId:"sc-2ecf14d3-2"})`
  position: absolute;
  display: block;
  right: -11px;
  top: -11px;
  z-index: 1;
  transition: 250ms;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`,ot=({onClick:e})=>(0,s.jsx)(rt,{onClick:e,children:(0,s.jsx)(Ve.Xv,{})}),at=()=>(0,s.jsx)(c.n,{position:"relative",background:"loadingBackground",className:Je,children:(0,s.jsxs)(c.n,{position:"absolute",textAlign:"center",left:"1/2",top:"1/2",style:{transform:"translate3d(-50%, -50%, 0)"},color:"gray500",fontSize:"12",fontWeight:"book",children:["Image",(0,s.jsx)("br",{}),"not",(0,s.jsx)("br",{}),"available"]})}),it=({asset:e,usdPrice:t,removeAsset:n,showRemove:r,grayscale:o,isMobile:a})=>{const{formatEther:i,formatNumberOrString:u}=(0,oe.Gb)(),[p,g]=(0,S.useState)(!1),[m,x]=(0,S.useState)(!e.smallImageUrl),[h,f]=(0,S.useState)(!1),I=(0,S.useCallback)((()=>f(!0)),[]),N=(0,S.useCallback)((()=>f(!1)),[]),w=Boolean(r&&h&&!a),A=e.updatedPriceInfo?e.updatedPriceInfo.ETHPrice:e.priceInfo.ETHPrice,T=i({input:A,type:oe.sw.NFTToken}),C=u({input:t?parseFloat((0,d.formatEther)(A))*t:t,type:oe.sw.FiatNFTToken}),_=(0,S.useCallback)((t=>{t.preventDefault(),t.stopPropagation(),n([e])}),[e,n]);return(0,s.jsx)(Ke.rU,{to:(0,z.PZ)(e),style:{textDecoration:"none"},children:(0,s.jsxs)(l.X2,{className:Ye,onMouseEnter:I,onMouseLeave:N,children:[(0,s.jsxs)(c.n,{position:"relative",display:"flex",children:[r&&a&&(0,s.jsx)(ot,{onClick:_}),!m&&(0,s.jsx)(c.n,{as:"img",src:e.smallImageUrl,alt:e.name,className:(0,Ue.default)(Je,o&&!h&&et),onLoad:()=>{g(!0)},onError:()=>{x(!0)},visibility:p?"visible":"hidden"}),!p&&(0,s.jsx)(c.n,{position:"absolute",className:`${Je} ${qe.L}`}),m&&(0,s.jsx)(at,{})]}),(0,s.jsxs)(l.sg,{overflow:"hidden",width:"full",color:o?"neutral2":"neutral1",children:[(0,s.jsxs)(l.X2,{overflow:"hidden",width:"full",whiteSpace:"nowrap",children:[(0,s.jsx)(c.n,{className:Xe,children:e.name??`#${e.tokenId}`}),e.susFlag&&(0,s.jsx)($e.yT,{})]}),(0,s.jsxs)(l.X2,{overflow:"hidden",whiteSpace:"nowrap",gap:"2",children:[(0,s.jsx)(c.n,{className:Qe,children:e.collectionName}),e.collectionIsVerified&&(0,s.jsx)(Ve.SA,{className:tt})]})]}),w&&(0,s.jsx)(nt,{onClick:_,emphasis:Ge.eI.medium,size:Ge.qE.medium,children:"Remove"}),(!w||a)&&(0,s.jsxs)(l.sg,{flexShrink:"0",alignItems:"flex-end",children:[(0,s.jsxs)(c.n,{className:"_1kuawc9 rgw6ez3sr rgw6ezbf rgw6ezd9 rgw6ez3xr",children:[T,"\xa0ETH"]}),(0,s.jsx)(c.n,{className:Qe,children:C})]})]})})},ct=({asset:e,usdPrice:t,markAssetAsReviewed:n,top:r,isMobile:o})=>{var a;const{formatEther:i}=(0,oe.Gb)(),d=De.O$.from(null===(a=e.updatedPriceInfo)||void 0===a?void 0:a.ETHPrice).gt(De.O$.from(e.priceInfo.ETHPrice)),u=(0,S.useCallback)((t=>{t.preventDefault(),t.stopPropagation();n(e,!1)}),[e,n]),p=(0,S.useCallback)((t=>{t.preventDefault(),t.stopPropagation();n(e,!0)}),[e,n]);return(0,s.jsxs)(l.sg,{className:"rgw6ez2p3 rgw6ez28l rgw6ezlf rgw6ezqx rgw6ez4ux rgw6ez3t3 rgw6ez4b9 rgw6ez7zp rgw6ez895 rgw6ez59f rgw6ez5yr rgw6ez1dr rgw6ez7zd",borderTopColor:r?"surface3":"transparent",children:[(0,s.jsxs)(l.X2,{className:"rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez4dr rgw6ez3sr",children:[d?(0,s.jsx)(Ve.PH,{}):(0,s.jsx)(Ve.HE,{}),(0,s.jsx)(c.n,{children:`Price ${d?"increased":"decreased"} from ${i({input:e.priceInfo.ETHPrice,type:oe.sw.NFTToken})} ETH`})]}),(0,s.jsx)(c.n,{style:{marginLeft:"-8px",marginRight:"-8px"},children:(0,s.jsx)(it,{asset:e,usdPrice:t,removeAsset:()=>{},isMobile:o})}),(0,s.jsxs)(l.X2,{gap:"8",justifyContent:"space-between",children:[(0,s.jsx)(st,{onClick:u,emphasis:Ge.eI.medium,size:Ge.qE.small,children:"Remove"}),(0,s.jsx)(st,{onClick:p,emphasis:Ge.eI.high,size:Ge.qE.small,children:"Keep"})]})]})},lt=({assets:e})=>(0,s.jsx)(l.sg,{display:"grid",style:{gridTemplateColumns:`repeat(${e.length}, 20px)`,width:32+20*(e.length-1)+"px"},children:e.map(((e,t)=>(0,s.jsx)(c.n,{as:"img",src:e.smallImageUrl,width:"32",height:"32",borderStyle:"solid",borderWidth:"1px",borderColor:"surface1",borderRadius:"4",style:{zIndex:t},className:et},`${e.address}-${e.tokenId}`)))}),dt=({assets:e,usdPrice:t,clearUnavailableAssets:n,didOpenUnavailableAssets:r,setDidOpenUnavailableAssets:o,isMobile:a})=>{const[i,c]=(0,S.useReducer)((e=>!e),!1),[d,u]=(0,S.useState)(8);if((0,S.useEffect)((()=>{if(!d)return void(r||(n(),o(!1)));const e=setInterval((()=>{u(d-1)}),1e3);return()=>clearInterval(e)}),[d,n,r,o]),!e||0===e.length)return null;const p=e.length>1,g=i||!p;return(0,s.jsx)(l.sg,{className:"rgw6ez2p3 rgw6ez28l rgw6ezlf rgw6ezqx rgw6ez4ux rgw6ez3tf rgw6ez4b9 rgw6ez7zp rgw6ez895 rgw6ez59f rgw6ez6df rgw6ez5yr rgw6ez1dr",children:(0,s.jsxs)(l.sg,{children:[(0,s.jsxs)(l.X2,{justifyContent:"space-between",marginBottom:g?"12":"0",cursor:p?"pointer":"default",onClick:()=>{p&&(!r&&o(!0),c())},children:[(0,s.jsxs)(l.X2,{gap:"12",color:"neutral2",className:Ze.Km,children:[!g&&(0,s.jsx)(lt,{assets:e.slice(0,5)}),"No longer available"]}),p&&(0,s.jsx)(l.X2,{color:"neutral2",children:i?(0,s.jsx)(Ve.X_,{}):(0,s.jsx)(Ve.Xs,{})}),!r&&(0,s.jsxs)(l.X2,{position:"relative",width:"20",height:"20",color:"neutral1",justifyContent:"center",cursor:"pointer",onClick:n,children:[(0,s.jsx)(We,{}),(0,s.jsx)(Ve.Nb,{})]})]}),(0,s.jsx)(l.sg,{gap:"8",style:{marginLeft:"-8px",marginRight:"-8px"},children:g&&e.map((e=>(0,s.jsx)(it,{asset:e,usdPrice:t,removeAsset:()=>{},grayscale:!0,isMobile:a},e.id)))})]})})},ut=()=>{const e=(0,Be.cP)((e=>e.bagStatus)),t=(0,Be.cP)((e=>e.setBagStatus)),n=(0,Be.cP)((e=>e.markAssetAsReviewed)),a=(0,Be.cP)((e=>e.didOpenUnavailableAssets)),i=(0,Be.cP)((e=>e.setDidOpenUnavailableAssets)),c=(0,Be.cP)((e=>e.itemsInBag)),d=(0,Be.cP)((e=>e.setItemsInBag)),u=(0,Be.cP)((e=>e.removeAssetsFromBag)),p=(0,ze.dD)(),g=(0,S.useMemo)((()=>(0,z.G7)(c)),[c]),m=(0,Be.$N)(),{unchangedAssets:x,priceChangedAssets:h,unavailableAssets:f,availableItems:I}=(0,S.useMemo)((()=>({unchangedAssets:g.filter((e=>e.status===F.ZJ.ADDED_TO_BAG||e.status===F.ZJ.REVIEWED)).map((e=>e.asset)),priceChangedAssets:g.filter((e=>e.status===F.ZJ.REVIEWING_PRICE_CHANGE)).map((e=>e.asset)),unavailableAssets:g.filter((e=>e.status===F.ZJ.UNAVAILABLE)).map((e=>e.asset)),availableItems:g.filter((e=>e.status!==F.ZJ.UNAVAILABLE))})),[g]);return(0,S.useEffect)((()=>{const n=h.length>0,s=g.length>0;n&&(0,o._P)(r.Yz.NFT_BUY_BAG_CHANGED,{usd_value:m,bag_quantity:g,...(0,z.Hj)(h)}),e!==F.s.IN_REVIEW||n||t(s?F.s.CONFIRM_REVIEW:F.s.ADDING_TO_BAG),e!==F.s.CONFIRM_REVIEW||s||t(F.s.ADDING_TO_BAG)}),[e,g,h,t,m]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(l.sg,{display:h.length>0||f.length>0?"flex":"none",children:[f.length>0&&(0,s.jsx)(o.fM,{name:r.Yz.NFT_BUY_BAG_CHANGED,properties:{usd_value:m,bag_quantity:g.length,...(0,z.Hj)(f)},shouldLogImpression:!0,children:(0,s.jsx)(dt,{assets:f,usdPrice:m,clearUnavailableAssets:()=>d(I),didOpenUnavailableAssets:a,setDidOpenUnavailableAssets:i,isMobile:p})}),h.map(((e,t)=>(0,s.jsx)(ct,{asset:e,usdPrice:m,markAssetAsReviewed:n,top:0===t&&0===f.length,isMobile:p},e.id)))]}),(0,s.jsx)(l.sg,{children:x.slice(0).reverse().map((e=>(0,s.jsx)(it,{asset:e,usdPrice:m,removeAsset:u,showRemove:!0,isMobile:p},e.id)))})]})};var pt=n(68588);const gt=(0,re.default)(ue.oD).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\bag\\BagHeader__ClearButton",componentId:"sc-6b7a6dca-0"})`
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;

  :active {
    text-decoration: none;
  }
`,mt=re.default.button.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\bag\\BagHeader__IconWrapper",componentId:"sc-6b7a6dca-1"})`
  align-items: center;
  background-color: transparent;
  border-radius: 8px;
  border: none;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-left: auto;
  padding: 2px;
  opacity: 1;

  ${pt.cR}
`,xt=re.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\bag\\BagHeader__CounterDot",componentId:"sc-6b7a6dca-2"})`
  align-items: center;
  background-color: ${({theme:e})=>e.accent1};
  border-radius: 100px;
  font-weight: bold;
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  display: flex;
  font-size: 10px;
  justify-content: center;
  min-width: ${({sizing:e})=>e};
  min-height: ${({sizing:e})=>e};
  padding: 4px 6px;
`,ht=re.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\bag\\BagHeader__Wrapper",componentId:"sc-6b7a6dca-3"})`
  align-items: center;
  display: flex;
  flex-direction: row;
  gap: 8px;
  justify-content: flex-start;
  margin: 16px 28px;
  text-align: center;
`,ft=({numberOfAssets:e,closeBag:t,resetFlow:n,isProfilePage:r})=>{const o=(0,S.useMemo)((()=>(e=>17+6*e.toString().length+"px")(e)),[e]);return(0,s.jsxs)(ht,{children:[(0,s.jsx)(ue.Tv.HeadlineSmall,{children:r?(0,s.jsx)(i.cC,{children:"Sell"}):(0,s.jsx)(i.cC,{children:"Bag"})}),e>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(xt,{sizing:o,children:e}),(0,s.jsx)(gt,{onClick:n,children:(0,s.jsx)(i.cC,{children:"Clear all"})})]}),(0,s.jsx)(mt,{onClick:t,children:(0,s.jsx)(Ve.BW,{"data-testid":"nft-bag-close-icon"})})]})};var It=n(27389);const Nt=(0,re.default)(l.sg).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\bag\\EmptyContent__StyledColumn",componentId:"sc-3568c728-0"})`
  gap: 12px;
  margin-top: 68px;
`,wt=()=>{const e=(0,a.e5)();return(0,s.jsxs)(Nt,{children:[(0,s.jsx)(l.M5,{children:e?(0,s.jsx)(Ve.JP,{color:It.Z4.colors.neutral3}):(0,s.jsx)(Ve.Ln,{color:It.Z4.colors.neutral3,height:"96px",width:"96px",strokeWidth:"1px"})}),e?(0,s.jsx)(l.M5,{"data-testid":"nft-no-nfts-selected",className:Ze.v4,children:"No NFTs selected"}):(0,s.jsxs)(l.sg,{gap:"16",children:[(0,s.jsx)(l.M5,{"data-testid":"nft-empty-bag",className:Ze.v4,style:{lineHeight:"24px"},children:"Your bag is empty"}),(0,s.jsx)(l.M5,{fontSize:"12",fontWeight:"book",color:"neutral2",style:{lineHeight:"16px"},children:"Selected NFTs will appear here"})]})]})},At=({asset:e})=>{const t=(0,Be.Pc)((e=>e.removeSellAsset)),n=(0,ze.dD)(),[r,o]=(0,S.useState)(!1),a=()=>o(!r),i=n=>{n.preventDefault(),n.stopPropagation(),t(e)};return(0,s.jsxs)(l.X2,{className:Ye,onMouseEnter:a,onMouseLeave:a,children:[(0,s.jsxs)(c.n,{position:"relative",display:"flex",children:[n&&(0,s.jsx)(ot,{onClick:i}),(0,s.jsx)("img",{src:e.smallImageUrl,alt:e.name,className:Je})]}),(0,s.jsxs)(l.sg,{overflow:"hidden",width:"full",color:"neutral1",children:[(0,s.jsx)(l.X2,{overflow:"hidden",width:"full",justifyContent:"space-between",whiteSpace:"nowrap",gap:"16",children:(0,s.jsx)(c.n,{className:Xe,children:e.name||`#${e.tokenId}`})}),(0,s.jsxs)(l.X2,{overflow:"hidden",whiteSpace:"nowrap",gap:"2",children:[(0,s.jsx)(c.n,{className:Qe,children:e.asset_contract.name}),e.collectionIsVerified&&(0,s.jsx)(Ve.SA,{className:tt})]})]}),r&&!n&&(0,s.jsx)(nt,{onClick:i,emphasis:Ge.eI.medium,size:Ge.qE.medium,children:"Remove"})]})},Tt=()=>{const e=(0,Be.Pc)((e=>e.sellAssets));return(0,s.jsx)(l.sg,{children:e.length?e.map(((e,t)=>(0,s.jsx)(At,{asset:e},t))):null})},Ct=320,_t=360,bt=re.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\bag\\Bag__BagContainer",componentId:"sc-f9dd5313-0"})`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 88px;
  right: 20px;
  width: ${Ct}px;
  height: calc(100vh - 108px);
  background: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  z-index: ${({raiseZIndex:e,isProfilePage:t})=>e?t?Fe.k.modalOverTooltip:Fe.k.modalBackdrop-1:3};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    right: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    border-radius: 0px;
    border: none;
  }

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.xxxl}px`}) {
    width: ${_t}px;
  }
`,vt=re.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\bag\\Bag__DetailsPageBackground",componentId:"sc-f9dd5313-1"})`
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  top: 0px;
  width: 100%;
  height: 100%;
`,Et=re.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\bag\\Bag__ContinueButton",componentId:"sc-f9dd5313-2"})`
  background: ${({theme:e})=>e.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  margin: 32px 28px 16px;
  padding: 10px 0px;
  border-radius: 12px;
  text-align: center;
  font-size: 16px;
  font-weight: 535;
  line-height: 20px;
  cursor: pointer;
  transition: ${({theme:e})=>e.transition.duration.medium};

  :hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,kt=({top:e,show:t})=>(0,s.jsx)(c.n,{marginX:"24",borderWidth:"1px",borderStyle:"solid",borderColor:"transparent",borderTopColor:e?"transparent":"surface3",borderBottomColor:e?"surface3":"transparent",opacity:t?"1":"0",transition:"250"}),yt=()=>{const{resetSellAssets:e,sellAssets:t}=(0,Be.Pc)((({reset:e,sellAssets:t})=>({resetSellAssets:e,sellAssets:t}))),{setProfilePageState:n}=(0,Be.aO)((({setProfilePageState:e})=>({setProfilePageState:e}))),{bagStatus:c,bagIsLocked:d,reset:u,bagExpanded:p,toggleBag:g,setBagExpanded:m}=(0,Be.cP)((e=>({...e,bagIsLocked:e.isLocked,uncheckedItemsInBag:e.itemsInBag}))),{uncheckedItemsInBag:x}=(0,Be.cP)((({itemsInBag:e})=>({uncheckedItemsInBag:e}))),h=(0,a.e5)(),f=(0,a._3)(),I=(0,a.GZ)(),N=(0,ze.dD)(),w=(0,S.useMemo)((()=>(0,z.G7)(x)),[x]),[A,T]=(0,S.useState)(!1),{userCanScroll:C,scrollRef:_,scrollProgress:b,scrollHandler:v}=(0,Be.uh)(),E=(0,S.useCallback)((()=>{m({bagExpanded:!1,manualClose:!0})}),[m]);(0,S.useEffect)((()=>{d&&!A&&T(!0)}),[d,A]);const k=w.length>0,y=w.length>0,P=t.length>0,j=Boolean(!h&&!y&&c===F.s.ADDING_TO_BAG||h&&!P),O=(0,S.useMemo)((()=>({...(0,z.Hj)(w.map((e=>e.asset)))})),[w]);return p&&I?(0,s.jsxs)(Se.h,{children:[(0,s.jsxs)(bt,{"data-testid":"nft-bag",raiseZIndex:N||A,isProfilePage:h,children:[(0,s.jsx)(ft,{numberOfAssets:h?t.length:w.length,closeBag:E,resetFlow:h?e:u,isProfilePage:h}),j&&(0,s.jsx)(wt,{}),(0,s.jsx)(kt,{top:!0,show:C&&b>0}),(0,s.jsx)(l.sg,{ref:_,className:"_1jcz50r1 rgw6ez2ef rgw6ez2jx rgw6ez1yr rgw6ez8ct",onScroll:v,gap:"12",children:h?(0,s.jsx)(Tt,{}):(0,s.jsx)(ut,{})}),k&&!h&&(0,s.jsx)(Re,{setModalIsOpen:T,eventProperties:O}),P&&h&&(0,s.jsx)(Et,{onClick:()=>{g(),n(F.HA.LISTING),(0,o._P)(r.Yz.NFT_PROFILE_PAGE_START_SELL,{list_quantity:t.length,collection_addresses:t.map((e=>e.asset_contract.address)),token_ids:t.map((e=>e.tokenId))})},children:(0,s.jsx)(i.cC,{children:"Continue"})})]}),f?(0,s.jsx)(vt,{onClick:g}):A&&(0,s.jsx)(Le.a,{onClick:()=>d?void 0:T(!1)})]}):null}},70518:(e,t,n)=>{n.d(t,{a:()=>i,U:()=>a});var s=n(92936),r=n(15511),o=n(80305);n(12143);const a=e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()},i=({onClick:e=r.Z})=>(0,s.jsx)(o.n,{className:"_199qdl71 rgw6ez3f3 rgw6ez343 rgw6ez17l rgw6ez1ef rgw6ez48r rgw6ez44l rgw6ez4u3",onClick:e})},52384:(e,t,n)=>{n.d(t,{B:()=>p,P:()=>u});var s=n(11604),r=n(66284),o=n(39671),a=n(32682),i=n(89882),c=n(47263),l=n(45779),d=n(64538);function u(){const e=(0,d.c)((e=>e.itemsInBag));return(0,l.useMemo)((()=>e.reduce(((e,t)=>t.status!==c.ZJ.UNAVAILABLE?e.add(s.O$.from(t.asset.updatedPriceInfo?t.asset.updatedPriceInfo.ETHPrice:t.asset.priceInfo.ETHPrice)):e),s.O$.from(0))),[e])}function p(){const e=u(),t=(0,o.U8)("ETH"),n=(0,l.useMemo)((()=>(0,i.Z)((0,r.formatEther)(e.toString()),t??void 0)),[t,e]),s=(0,a.sq)(n);return(0,l.useMemo)((()=>{var e;return null===(e=s)||void 0===e?void 0:e.toExact()}),[s])}}}]);
//# sourceMappingURL=3464.a8d0514f.chunk.js.map