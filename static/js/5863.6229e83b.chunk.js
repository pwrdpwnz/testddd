"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[5863,5118,5347],{39753:(e,n,i)=>{i.d(n,{q:()=>w,w:()=>k});var r=i(92936),t=i(69751),o=i(6823),d=i(21926),c=i(43454),s=i(6282),l=i(22953),a=i(47856),u=i(47632),p=i(31744),m=i(14411),x=i(54972),h=i(55874),v=i(72993),f=i(94284);const g=m.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\NavigationTabs\\index__Tabs",componentId:"sc-b5b2ff8c-0"})`
  ${h.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,y=(0,m.default)(c.rU).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\NavigationTabs\\index__StyledLink",componentId:"sc-b5b2ff8c-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,b=(0,m.default)(x.Tv.H1Small).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\NavigationTabs\\index__FindPoolTabsText",componentId:"sc-b5b2ff8c-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,j=(0,m.default)(d.Z).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\NavigationTabs\\index__StyledArrowLeft",componentId:"sc-b5b2ff8c-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function w({origin:e}){return(0,r.jsx)(g,{children:(0,r.jsxs)(f.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,r.jsx)(c.rU,{to:e,children:(0,r.jsx)(j,{})}),(0,r.jsx)(b,{children:(0,r.jsx)(o.cC,{children:"Import V2 pool"})})]})})}const C=(0,m.default)(x.Tv.H1Small).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\NavigationTabs\\index__AddRemoveTitleText",componentId:"sc-b5b2ff8c-4"})`
  flex: 1;
  margin: auto;
  text-align: ${({$center:e})=>e?"center":"start"};
`;function k({adding:e,creating:n,autoSlippage:i,children:d}){const c=(0,v.x)(),x=(0,m.useTheme)(),h=(0,a.T)(),b=(0,s.s0)();return(0,r.jsx)(g,{children:(0,r.jsxs)(f.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,r.jsx)(y,{to:"..",onClick:n=>{n.preventDefault(),b(-1),e&&(h((0,u.dA)()),h((0,p.dA)()))},flex:d?"1":void 0,children:(0,r.jsx)(j,{stroke:x.neutral2})}),(0,r.jsx)(C,{$center:!d,children:n?(0,r.jsx)(o.cC,{children:"Create a pair"}):e?(0,r.jsx)(o.cC,{children:"Add liquidity"}):(0,r.jsx)(o.cC,{children:"Remove liquidity"})}),d&&(0,r.jsx)(l.xu,{style:{marginRight:".5rem"},children:d}),(0,r.jsx)(t.Z,{autoSlippage:i,chainId:c,hideRoutingSettings:!0})]})})}},3094:(e,n,i)=>{i.d(n,{Z:()=>d});var r=i(92936),t=i(45779);const o=i(14411).default.input.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Slider\\index__StyledRangeInput",componentId:"sc-2b24fd52-0"})`
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
  background: transparent; /* Otherwise white in Chrome */
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::-moz-focus-outer {
    border: 0;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: ${({theme:e})=>e.accent1};
    border-radius: 100%;
    border: none;
    transform: translateY(-50%);
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-moz-range-thumb {
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: #565a69;
    border-radius: 100%;
    border: none;
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-ms-thumb {
    height: ${({size:e})=>e}px;
    width: ${({size:e})=>e}px;
    background-color: #565a69;
    border-radius: 100%;
    color: ${({theme:e})=>e.surface1};

    &:hover,
    &:focus {
      box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 4px 8px rgba(0, 0, 0, 0.08), 0px 16px 24px rgba(0, 0, 0, 0.06),
        0px 24px 32px rgba(0, 0, 0, 0.04);
    }
  }

  &::-webkit-slider-runnable-track {
    background: linear-gradient(90deg, ${({theme:e})=>e.accent1}, ${({theme:e})=>e.accent1});
    height: 2px;
  }

  &::-moz-range-track {
    background: linear-gradient(90deg, ${({theme:e})=>e.surface4}, ${({theme:e})=>e.surface2});
    height: 2px;
  }

  &::-ms-track {
    width: 100%;
    border-color: transparent;
    color: transparent;

    background: ${({theme:e})=>e.surface4};
    height: 2px;
  }
  &::-ms-fill-lower {
    background: ${({theme:e})=>e.surface4};
  }
  &::-ms-fill-upper {
    background: ${({theme:e})=>e.surface2};
  }
`;function d({value:e,onChange:n,min:i=0,step:d=1,max:c=100,size:s=28,...l}){const a=(0,t.useCallback)((e=>{n(parseInt(e.target.value))}),[n]);return(0,r.jsx)(o,{size:s,...l,type:"range",value:e,style:{padding:"15px 0"},onChange:a,"aria-labelledby":"input slider",step:d,min:i,max:c})}},82731:(e,n,i)=>{i.d(n,{SS:()=>m,sq:()=>l,MN:()=>a,RF:()=>u,uO:()=>p,I8:()=>s});var r=i(14411);const t=i.p+"static/media/big_unicorn.595c49962d708abbaaec.png",o=i.p+"static/media/noise.3c7efafc83614205bd1a.png",d=i.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png";var c=i(44591);const s=(0,r.default)(c.Tz).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\earn\\styled__DataCard",componentId:"sc-6a13bc9-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,l=r.default.span.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\earn\\styled__CardBGImage",componentId:"sc-6a13bc9-1"})`
  background: url(${t});
  width: 1000px;
  height: 600px;
  position: absolute;
  border-radius: 12px;
  opacity: 0.4;
  top: -100px;
  left: -100px;
  transform: rotate(-15deg);
  user-select: none;
  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,a=r.default.span.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\earn\\styled__CardBGImageSmaller",componentId:"sc-6a13bc9-2"})`
  background: url(${d});
  width: 1200px;
  height: 1200px;
  position: absolute;
  border-radius: 12px;
  top: -300px;
  left: -300px;
  opacity: 0.4;
  user-select: none;

  ${({desaturate:e})=>e&&"filter: saturate(0)"}
`,u=r.default.span.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\earn\\styled__CardNoise",componentId:"sc-6a13bc9-3"})`
  background: url(${o});
  background-size: cover;
  mix-blend-mode: overlay;
  border-radius: 12px;
  width: 100%;
  height: 100%;
  opacity: 0.15;
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
`,p=(0,r.default)(c.Tz).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\earn\\styled__CardSection",componentId:"sc-6a13bc9-4"})`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,m=r.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\earn\\styled__Break",componentId:"sc-6a13bc9-5"})`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},47848:(e,n,i)=>{i.d(n,{Z:()=>t});var r=i(45779);function t(e,n,i=100){const[t,o]=(0,r.useState)((()=>e)),d=(0,r.useRef)(),c=(0,r.useCallback)((e=>{o(e),d.current&&clearTimeout(d.current),d.current=setTimeout((()=>{n(e),d.current=void 0}),i)}),[i,n]);return(0,r.useEffect)((()=>{d.current&&(clearTimeout(d.current),d.current=void 0),o(e)}),[e]),[t,c]}},65118:(e,n,i)=>{i.d(n,{Z:()=>c,e:()=>d});var r=i(92936),t=i(14411),o=i(62587);const d=t.default.main.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\AppBody__BodyWrapper",componentId:"sc-e9d30a3e-0"})`
  position: relative;
  margin-top: ${({$margin:e})=>e??"0px"};
  max-width: ${({$maxWidth:e})=>e??"420px"};
  width: 100%;
  background: ${({theme:e})=>e.surface1};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  z-index: ${o.k.default};
`;function c(e){return(0,r.jsx)(d,{...e})}},32219:(e,n,i)=>{i.r(n),i.d(n,{default:()=>se});var r=i(92936),t=i(11604),o=i(5985),d=i(76078),c=i(21651),s=i(12722),l=i(73499),a=i(69780),u=i(61182),p=i(44591),m=i(47841),x=i(63415),h=i(5967),v=i(39753),f=i(94284),g=i(3094),y=i(67716),b=i(82731),j=i(57852),w=i(7151),C=i(47848),k=i(40413),$=i(6823),S=i(24509),z=i(26522),_=i(45779),I=i(6282),T=i(26729),q=i(39671),A=i(55660),F=i(42938),N=i(47856),R=i(5347),W=i(54542);function L(){return(0,N.C)((e=>e.burnV3))}var P=i(99454),Z=i(28098),D=i(54972),E=i(63420),M=i(66136),V=i(51001),B=i(4650),O=i(5931),U=i(590),G=i(99819),H=i(64370),Q=i(47186),Y=i(64510),X=i(17202),J=i(65118),K=i(40926),ee=i(22953),ne=i(14411);const ie=ne.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\RemoveLiquidity\\styled__Wrapper",componentId:"sc-53ad7253-0"})`
  position: relative;
  padding: 20px;
  min-width: 460px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToExtraSmall`
    min-width: 340px;
  `};
`,re=(0,ne.default)(K.ER).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\RemoveLiquidity\\styled__SmallMaxButton",componentId:"sc-53ad7253-1"})`
  font-size: 12px;
`,te=(0,ne.default)(ee.xv).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\RemoveLiquidity\\styled__ResponsiveHeaderText",componentId:"sc-53ad7253-2"})`
  font-size: 40px;
  font-weight: 535;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToExtraSmall`
     font-size: 24px
  `};
`;function oe(e,n,i,r,t,o,d){try{var c=e[o](d),s=c.value}catch(l){return void i(l)}c.done?n(s):Promise.resolve(s).then(r,t)}function de(e){return function(){var n=this,i=arguments;return new Promise((function(r,t){var o=e.apply(n,i);function d(e){oe(o,r,t,d,c,"next",e)}function c(e){oe(o,r,t,d,c,"throw",e)}d(void 0)}))}}const ce=new d.Percent(50,1e4);function se(){const e=(0,U.m)(),n=(0,j.Nb)(e.chainId),{tokenId:i}=(0,I.UO)(),o=(0,I.TH)(),d=(0,_.useMemo)((()=>{try{return t.O$.from(i)}catch{return null}}),[i]),{position:c,loading:s}=(0,k.n)(d??void 0);return null===d||d.eq(0)?(0,r.jsx)(I.Fg,{to:{...o,pathname:"/pools"},replace:!0}):n&&(s||c)?(0,r.jsx)(le,{tokenId:d}):(0,r.jsx)(z.PositionPageUnsupportedContent,{})}function le({tokenId:e}){var n,i,t,j,z,I,K,ee,ne,oe,se,le,ae,ue,pe,me,xe,he,ve,fe,ge,ye,be,je,we,Ce,ke,$e,Se,ze,_e,Ie;const{position:Te}=(0,k.n)(e),qe=(0,U.m)(),Ae=(0,V.z)(),Fe=(0,s.oO)(),{formatCurrencyAmount:Ne}=(0,M.Gb)(),[Re,We]=(0,_.useState)(!1),Le=(0,S.Z)(qe.chainId).wrapped.symbol,{percent:Pe}=L(),{position:Ze,liquidityPercentage:De,liquidityValue0:Ee,liquidityValue1:Me,feeValue0:Ve,feeValue1:Be,outOfRange:Oe,error:Ue}=function(e,n=!1){var i,t,o,s;const{account:l}=(0,T.G)(),{percent:a}=L(),u=(0,q.dQ)(null===(i=e)||void 0===i?void 0:i.token0),p=(0,q.dQ)(null===(t=e)||void 0===t?void 0:t.token1),[,m]=(0,A.AI)(u??void 0,p??void 0,null===(o=e)||void 0===o?void 0:o.fee),x=(0,_.useMemo)((()=>{var n,i,r;return m&&(null===(n=e)||void 0===n?void 0:n.liquidity)&&"number"===typeof(null===(i=e)||void 0===i?void 0:i.tickLower)&&"number"===typeof(null===(r=e)||void 0===r?void 0:r.tickUpper)?new c.Position({pool:m,liquidity:e.liquidity.toString(),tickLower:e.tickLower,tickUpper:e.tickUpper}):void 0}),[m,e]),h=new d.Percent(a,100),v=x?h.multiply(x.amount0.quotient).quotient:void 0,f=x?h.multiply(x.amount1.quotient).quotient:void 0,g=u&&v?d.CurrencyAmount.fromRawAmount(n?u:(0,R.B)(u),v):void 0,y=p&&f?d.CurrencyAmount.fromRawAmount(n?p:(0,R.B)(p),f):void 0,[b,j]=(0,F.t)(m??void 0,null===(s=e)||void 0===s?void 0:s.tokenId,n),w=!(!m||!e)&&(m.tickCurrent<e.tickLower||m.tickCurrent>e.tickUpper);let C;return l||(C=(0,r.jsx)($.cC,{children:"Connect wallet"})),0===a&&(C=C??(0,r.jsx)($.cC,{children:"Enter a percent"})),{position:x,liquidityPercentage:h,liquidityValue0:g,liquidityValue1:y,feeValue0:b,feeValue1:j,outOfRange:w,error:C}}(Te,Re),{onPercentSelect:Ge}=function(){const e=(0,N.T)();return{onPercentSelect:(0,_.useCallback)((n=>{e((0,W.o)({percent:n}))}),[e])}}(),He=null===(i=Te)||void 0===i||null===(n=i.liquidity)||void 0===n?void 0:n.eq(0),[Qe,Ye]=(0,C.Z)(Pe,Ge),Xe=(0,B.n)(),Je=(0,Z.eq)(ce),[Ke,en]=(0,_.useState)(!1),[nn,rn]=(0,_.useState)(!1),[tn,on]=(0,_.useState)(),dn=(0,P.h7)(),cn=(0,w.GL)(),sn=(0,_.useCallback)(de((function*(){if(rn(!0),!cn||!Ee||!Me||"connected"!==qe.status||!Ze||!De||!Ae)return;const n=yield Xe();if(!n)throw new Error("could not get deadline");const{calldata:i,value:r}=c.NonfungiblePositionManager.removeCallParameters(Ze,{tokenId:e.toString(),liquidityPercentage:De,slippageTolerance:Je,deadline:n.toString(),collectOptions:{expectedCurrencyOwed0:Ve??d.CurrencyAmount.fromRawAmount(Ee.currency,0),expectedCurrencyOwed1:Be??d.CurrencyAmount.fromRawAmount(Me.currency,0),recipient:qe.address}}),t={to:cn.address,data:i,value:r},l=yield Ae.getChainId();if(qe.chainId!==l)throw new E.CJ;Ae.estimateGas(t).then((e=>{const n={...t,gasLimit:(0,Y.y)(e)};return Ae.sendTransaction(n).then((e=>{(0,s._P)(o.vp.REMOVE_LIQUIDITY_SUBMITTED,{source:o.GM.V3,label:[Ee.currency.symbol,Me.currency.symbol].join("/"),...Fe}),on(e.hash),rn(!1),dn(e,{type:Q.i.REMOVE_LIQUIDITY_V3,baseCurrencyId:(0,X.H)(Ee.currency),quoteCurrencyId:(0,X.H)(Me.currency),expectedAmountBaseRaw:Ee.quotient.toString(),expectedAmountQuoteRaw:Me.quotient.toString()})}))})).catch((e=>{rn(!1),console.error(e)}))})),[cn,Ee,Me,qe.status,qe.address,qe.chainId,Ze,De,Ae,Xe,e,Je,Ve,Be,Fe,dn]),ln=(0,_.useCallback)((()=>{en(!1),tn&&Ye(0),rn(!1),on("")}),[Ye,tn]),an=(0,r.jsxs)($.cC,{children:["Removing ",{amt:null===(t=Ee)||void 0===t?void 0:t.toSignificant(6)}," ",{sym:null===(z=Ee)||void 0===z||null===(j=z.currency)||void 0===j?void 0:j.symbol}," and"," ",{amt2:null===(I=Me)||void 0===I?void 0:I.toSignificant(6)}," ",{sym2:null===(ee=Me)||void 0===ee||null===(K=ee.currency)||void 0===K?void 0:K.symbol}]});function un(){var e,n,i,t,o,d,c,s,l,u,m,x,v,g;return(0,r.jsxs)(p.Tz,{gap:"sm",style:{padding:"16px"},children:[(0,r.jsxs)(f.m0,{align:"flex-end",children:[(0,r.jsx)(O.xv,{fontSize:16,fontWeight:"$medium",children:(0,r.jsxs)($.cC,{children:["Pooled ",{sym:null===(n=Ee)||void 0===n||null===(e=n.currency)||void 0===e?void 0:e.symbol},":"]})}),(0,r.jsxs)(f.DA,{children:[(0,r.jsx)(O.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Ee&&Ne({amount:Ee})}),(0,r.jsx)(h.Z,{size:20,style:{marginLeft:"8px"},currency:null===(i=Ee)||void 0===i?void 0:i.currency})]})]}),(0,r.jsxs)(f.m0,{align:"flex-end",children:[(0,r.jsx)(O.xv,{fontSize:16,fontWeight:"$medium",children:(0,r.jsxs)($.cC,{children:["Pooled ",{sym:null===(o=Me)||void 0===o||null===(t=o.currency)||void 0===t?void 0:t.symbol},":"]})}),(0,r.jsxs)(f.DA,{children:[(0,r.jsx)(O.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Me&&Ne({amount:Me})}),(0,r.jsx)(h.Z,{size:20,style:{marginLeft:"8px"},currency:null===(d=Me)||void 0===d?void 0:d.currency})]})]}),(null===(c=Ve)||void 0===c?void 0:c.greaterThan(0))||(null===(s=Be)||void 0===s?void 0:s.greaterThan(0))?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(O.xv,{fontSize:12,color:"$neutral2",textAlign:"left",pt:8,children:(0,r.jsx)($.cC,{children:"You will also collect fees earned from this position."})}),(0,r.jsxs)(f.m0,{children:[(0,r.jsx)(O.xv,{fontSize:16,fontWeight:"$medium",children:(0,r.jsxs)($.cC,{children:[{sym:null===(u=Ve)||void 0===u||null===(l=u.currency)||void 0===l?void 0:l.symbol}," Fees Earned:"]})}),(0,r.jsxs)(f.DA,{children:[(0,r.jsx)(O.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Ve&&Ne({amount:Ve})}),(0,r.jsx)(h.Z,{size:20,style:{marginLeft:"8px"},currency:null===(m=Ve)||void 0===m?void 0:m.currency})]})]}),(0,r.jsxs)(f.m0,{children:[(0,r.jsx)(O.xv,{fontSize:16,fontWeight:"$medium",children:(0,r.jsxs)($.cC,{children:[{sym:null===(v=Be)||void 0===v||null===(x=v.currency)||void 0===x?void 0:x.symbol}," Fees Earned:"]})}),(0,r.jsxs)(f.DA,{children:[(0,r.jsx)(O.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Be&&Ne({amount:Be})}),(0,r.jsx)(h.Z,{size:20,style:{marginLeft:"8px"},currency:null===(g=Be)||void 0===g?void 0:g.currency})]})]})]}):null,(0,r.jsx)(a.DF,{mt:"16px",onClick:sn,children:(0,r.jsx)($.cC,{children:"Remove"})})]})}const pn=Boolean((null===(ne=Ee)||void 0===ne?void 0:ne.currency)&&(null===(oe=Me)||void 0===oe?void 0:oe.currency)&&(Ee.currency.isNative||Me.currency.isNative||(null===(se=H.Fl[Ee.currency.chainId])||void 0===se?void 0:se.equals(Ee.currency.wrapped))||(null===(le=H.Fl[Me.currency.chainId])||void 0===le?void 0:le.equals(Me.currency.wrapped))));return(0,r.jsxs)(p.Tz,{children:[(0,r.jsx)(G.Z,{isOpen:Ke,onDismiss:ln,attemptingTxn:nn,hash:tn??"",reviewContent:()=>(0,r.jsx)(G.p,{title:(0,r.jsx)($.cC,{children:"Remove liquidity"}),onDismiss:ln,topContent:un}),pendingText:an}),(0,r.jsxs)(J.Z,{$maxWidth:"unset",children:[(0,r.jsx)(v.w,{creating:!1,adding:!1,autoSlippage:ce}),(0,r.jsx)(ie,{children:Te?(0,r.jsxs)(p.Tz,{gap:"lg",children:[(0,r.jsxs)(f.m0,{children:[(0,r.jsxs)(f.DA,{children:[(0,r.jsx)(m.ge,{currencies:[null===(ae=Ee)||void 0===ae?void 0:ae.currency,null===(ue=Me)||void 0===ue?void 0:ue.currency],size:20}),(0,r.jsx)(D.Tv.DeprecatedLabel,{ml:"10px",fontSize:"20px",id:"remove-liquidity-tokens",children:`${null===(me=Ee)||void 0===me||null===(pe=me.currency)||void 0===pe?void 0:pe.symbol}/${null===(he=Me)||void 0===he||null===(xe=he.currency)||void 0===xe?void 0:xe.symbol}`})]}),(0,r.jsx)(l.Z,{removed:He,inRange:!Oe})]}),(0,r.jsx)(u.hl,{children:(0,r.jsxs)(p.Tz,{gap:"md",children:[(0,r.jsx)(D.Tv.DeprecatedMain,{fontWeight:485,children:(0,r.jsx)($.cC,{children:"Amount"})}),(0,r.jsxs)(f.m0,{children:[(0,r.jsx)(te,{children:(0,r.jsxs)($.cC,{children:[{percentForSlider:Qe},"%"]})}),(0,r.jsxs)(f.BA,{gap:"4px",justify:"flex-end",children:[(0,r.jsx)(re,{onClick:()=>Ge(25),width:"20%",children:(0,r.jsx)($.cC,{children:"25%"})}),(0,r.jsx)(re,{onClick:()=>Ge(50),width:"20%",children:(0,r.jsx)($.cC,{children:"50%"})}),(0,r.jsx)(re,{onClick:()=>Ge(75),width:"20%",children:(0,r.jsx)($.cC,{children:"75%"})}),(0,r.jsx)(re,{onClick:()=>Ge(100),width:"20%",children:(0,r.jsx)($.cC,{children:"Max"})})]})]}),(0,r.jsx)(g.Z,{value:Qe,onChange:Ye})]})}),(0,r.jsx)(u.hl,{children:(0,r.jsxs)(p.Tz,{gap:"md",children:[(0,r.jsxs)(f.m0,{children:[(0,r.jsx)(O.xv,{fontSize:16,fontWeight:"$medium",id:"remove-pooled-tokena-symbol",children:(0,r.jsxs)($.cC,{children:["Pooled ",{symbol:null===(fe=Ee)||void 0===fe||null===(ve=fe.currency)||void 0===ve?void 0:ve.symbol},":"]})}),(0,r.jsxs)(f.DA,{children:[(0,r.jsx)(O.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Ee&&Ne({amount:Ee})}),(0,r.jsx)(h.Z,{size:20,style:{marginLeft:"8px"},currency:null===(ge=Ee)||void 0===ge?void 0:ge.currency})]})]}),(0,r.jsxs)(f.m0,{children:[(0,r.jsx)(O.xv,{fontSize:16,fontWeight:"$medium",id:"remove-pooled-tokenb-symbol",children:(0,r.jsxs)($.cC,{children:["Pooled ",{symbol:null===(be=Me)||void 0===be||null===(ye=be.currency)||void 0===ye?void 0:ye.symbol},":"]})}),(0,r.jsxs)(f.DA,{children:[(0,r.jsx)(O.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Me&&Ne({amount:Me})}),(0,r.jsx)(h.Z,{size:20,style:{marginLeft:"8px"},currency:null===(je=Me)||void 0===je?void 0:je.currency})]})]}),(null===(we=Ve)||void 0===we?void 0:we.greaterThan(0))||(null===(Ce=Be)||void 0===Ce?void 0:Ce.greaterThan(0))?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b.SS,{}),(0,r.jsxs)(f.m0,{children:[(0,r.jsx)(O.xv,{fontSize:16,fontWeight:"$medium",children:(0,r.jsxs)($.cC,{children:[{symbol:null===($e=Ve)||void 0===$e||null===(ke=$e.currency)||void 0===ke?void 0:ke.symbol}," Fees Earned:"]})}),(0,r.jsxs)(f.DA,{children:[(0,r.jsx)(O.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Ve&&Ne({amount:Ve})}),(0,r.jsx)(h.Z,{size:20,style:{marginLeft:"8px"},currency:null===(Se=Ve)||void 0===Se?void 0:Se.currency})]})]}),(0,r.jsxs)(f.m0,{children:[(0,r.jsx)(O.xv,{fontSize:16,fontWeight:"$medium",children:(0,r.jsxs)($.cC,{children:[{symbol:null===(_e=Be)||void 0===_e||null===(ze=_e.currency)||void 0===ze?void 0:ze.symbol}," Fees Earned:"]})}),(0,r.jsxs)(f.DA,{children:[(0,r.jsx)(O.xv,{fontSize:16,fontWeight:"$medium",ml:6,children:Be&&Ne({amount:Be})}),(0,r.jsx)(h.Z,{size:20,style:{marginLeft:"8px"},currency:null===(Ie=Be)||void 0===Ie?void 0:Ie.currency})]})]})]}):null]})}),pn&&(0,r.jsxs)(f.m0,{children:[(0,r.jsx)(D.Tv.DeprecatedMain,{children:(0,r.jsxs)($.cC,{children:["Collect as ",{nativeWrappedSymbol:Le}]})}),(0,r.jsx)(y.Z,{id:"receive-as-weth",isActive:Re,toggle:()=>We((e=>!e))})]}),(0,r.jsx)("div",{style:{display:"flex"},children:(0,r.jsx)(p.Tz,{gap:"md",style:{flex:"1"},children:(0,r.jsx)(a.gn,{confirmed:!1,disabled:He||0===Pe||!Ee,onClick:()=>en(!0),children:He?(0,r.jsx)($.cC,{children:"Closed"}):Ue??(0,r.jsx)($.cC,{children:"Remove"})})})})]}):(0,r.jsx)(x.ZP,{})})]})]})}},5347:(e,n,i)=>{i.d(n,{B:()=>t});var r=i(64370);function t(e){var n;return e.isNative?e:(null===(n=r.Fl[e.chainId])||void 0===n?void 0:n.equals(e))?(0,r.gX)(e.chainId):e}}}]);
//# sourceMappingURL=5863.6229e83b.chunk.js.map