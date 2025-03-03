"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[4455,5118],{37525:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(45779),o=t(68090),i=t.n(o);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=(0,r.forwardRef)((function(e,n){var t=e.color,o=void 0===t?"currentColor":t,i=e.size,c=void 0===i?24:i,l=a(e,["color","size"]);return r.createElement("svg",s({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.createElement("polyline",{points:"18 15 12 9 6 15"}))}));c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.displayName="ChevronUp";const l=c},57809:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(45779),o=t(68090),i=t.n(o);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=(0,r.forwardRef)((function(e,n){var t=e.color,o=void 0===t?"currentColor":t,i=e.size,c=void 0===i?24:i,l=a(e,["color","size"]);return r.createElement("svg",s({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),r.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));c.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},c.displayName="Plus";const l=c},74293:(e,n,t)=>{t.d(n,{Z:()=>z});var r=t(92936),o=t(5985),i=t(26729),s=t(12722),a=t(32546),c=t(57852),l=t(6823),d=t(36399),u=t(45779),p=t(14411),m=t(66869),h=t(54972),f=t(55874),y=t(66136),x=t(47841),b=t(93741),g=t(96326),v=t(73720),w=t(69780),k=t(5967),j=t(17706),_=t(94284),C=t(24210),N=t(19996);const I=p.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\CurrencyInputPanel\\index__InputPanel",componentId:"sc-2f6dc0b6-0"})`
  ${f.lt};
  position: relative;
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  background-color: ${({theme:e,hideInput:n})=>n?"transparent":e.surface2};

  z-index: 1;
  width: ${({hideInput:e})=>e?"100%":"initial"};
  transition: height 1s ease;
  will-change: height;
`,$=p.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\CurrencyInputPanel\\index__Container",componentId:"sc-2f6dc0b6-1"})`
  border-radius: ${({hideInput:e})=>e?"16px":"20px"};
  border: 1px solid ${({theme:e})=>e.surface3};
  background-color: ${({theme:e})=>e.surface2};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  ${({theme:e,hideInput:n,disabled:t})=>!t&&`\n    :focus,\n    :hover {\n      border: 1px solid ${n?" transparent":e.surface2};\n    }\n  `}
`,O=(0,p.default)(w.Ux).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\CurrencyInputPanel\\index__CurrencySelect",componentId:"sc-2f6dc0b6-2"})`
  align-items: center;
  background-color: ${({selected:e,theme:n})=>e?n.surface1:n.accent1};
  opacity: ${({disabled:e})=>e?.4:1};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};
  color: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
  cursor: pointer;
  border-radius: 16px;
  outline: none;
  user-select: none;
  border: none;
  font-size: 24px;
  font-weight: 535;
  height: ${({hideInput:e})=>e?"2.8rem":"2.4rem"};
  width: ${({hideInput:e})=>e?"100%":"initial"};
  padding: 0 8px;
  justify-content: space-between;
  margin-left: ${({hideInput:e})=>e?"0":"12px"};
  :focus,
  :hover {
    background-color: ${({selected:e,theme:n})=>e?n.surface2:(0,d._j)(.05,n.accent1)};
  }
  visibility: ${({visible:e})=>e?"visible":"hidden"};
  ${({pointerEvents:e})=>e&&"pointer-events: none"}
`,P=p.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\CurrencyInputPanel\\index__InputRow",componentId:"sc-2f6dc0b6-3"})`
  ${f.MG};
  align-items: center;
  justify-content: space-between;
  padding: ${({selected:e})=>e?" 1rem 1rem 0.75rem 1rem":"1rem 1rem 1rem 1rem"};
`,T=p.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\CurrencyInputPanel\\index__LabelRow",componentId:"sc-2f6dc0b6-4"})`
  ${f.MG};
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  font-size: 0.75rem;
  line-height: 1rem;
  padding: 0 1rem 1rem;
  span:hover {
    cursor: pointer;
    color: ${({theme:e})=>(0,d._j)(.2,e.neutral2)};
  }
`,A=(0,p.default)(T).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\CurrencyInputPanel\\index__FiatRow",componentId:"sc-2f6dc0b6-5"})`
  justify-content: flex-end;
  padding: 0px 1rem 0.75rem;
  height: 32px;
`,S=p.default.span.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\CurrencyInputPanel\\index__Aligner",componentId:"sc-2f6dc0b6-6"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  line-height: 0px;
`,E=(0,p.default)(g.r).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\CurrencyInputPanel\\index__StyledDropDown",componentId:"sc-2f6dc0b6-7"})`
  margin: 0 0.25rem 0 0.35rem;
  height: 35%;

  path {
    stroke: ${({selected:e,theme:n})=>e?n.neutral1:n.white};
    stroke-width: 1.5px;
  }
`,F=p.default.span.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\CurrencyInputPanel\\index__StyledTokenName",componentId:"sc-2f6dc0b6-8"})`
  ${({active:e})=>"  margin: 0 0.25rem 0 0.25rem;"}
  font-size: 20px;
  white-space: nowrap;

  @media screen and (max-width: ${m.j$.sm}px) {
    font-size: 16px;
  }
`,D=p.default.button.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\CurrencyInputPanel\\index__StyledBalanceMax",componentId:"sc-2f6dc0b6-9"})`
  background-color: transparent;
  background-color: ${({theme:e})=>e.accent2};
  border: none;
  border-radius: 12px;
  color: ${({theme:e})=>e.accent1};
  cursor: pointer;
  font-size: 11px;
  font-weight: 535;
  margin-left: 0.25rem;
  opacity: ${({disabled:e})=>e?.4:1};
  padding: 4px 6px;
  pointer-events: ${({disabled:e})=>e?"none":"initial"};

  :hover {
    opacity: ${({disabled:e})=>e?.4:.8};
  }

  :focus {
    outline: none;
  }
`,R=(0,p.default)(j.I).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\CurrencyInputPanel\\index__StyledNumericalInput",componentId:"sc-2f6dc0b6-10"})`
  ${a._Q};
  text-align: left;
`,B=(0,p.default)(b.Kh).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\CurrencyInputPanel\\index__StyledPrefetchBalancesWrapper",componentId:"sc-2f6dc0b6-11"})`
  width: ${({$fullWidth:e})=>e?"100%":"auto"};
`;function z({value:e,onUserInput:n,onMax:t,showMaxButton:d,onCurrencySelect:m,currency:f,otherCurrency:b,id:g,currencySearchFilters:w,showCurrencyAmount:j,renderBalance:T,fiatValue:z,hideBalance:M=!1,pair:U=null,hideInput:W=!1,locked:V=!1,loading:G=!1,...L}){var q,K,Z,X,H;const[Q,J]=(0,u.useState)(!1),{account:Y,chainId:ee}=(0,i.G)(),ne=(0,c.Nb)(ee),te=(0,v._h)(Y??void 0,f??void 0),re=(0,p.useTheme)(),{formatCurrencyAmount:oe}=(0,y.Gb)(),ie=(0,u.useCallback)((()=>{J(!1)}),[J]);return(0,r.jsxs)(I,{id:g,hideInput:W,...L,children:[!V&&(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)($,{hideInput:W,disabled:!ne,children:[(0,r.jsxs)(P,{style:W?{padding:"0",borderRadius:"8px"}:{},selected:!m,children:[!W&&(0,r.jsx)(R,{className:"token-amount-input",value:e,onUserInput:n,disabled:!ne,$loading:G,maxDecimals:null===(q=f)||void 0===q?void 0:q.decimals}),(0,r.jsx)(B,{$fullWidth:W,children:(0,r.jsx)(O,{disabled:!ne,visible:void 0!==f,selected:!!f,hideInput:W,className:"open-currency-select-button",onClick:()=>{m&&J(!0)},pointerEvents:m?void 0:"none",children:(0,r.jsxs)(S,{children:[(0,r.jsxs)(_.DA,{children:[U?(0,r.jsx)("span",{style:{marginRight:"0.5rem"},children:(0,r.jsx)(x.ge,{currencies:[U.token0,U.token1],size:24})}):f&&(0,r.jsx)(k.Z,{style:{marginRight:"0.5rem"},currency:f,size:24}),U?(0,r.jsxs)(F,{className:"pair-name-container",children:[null===(K=U)||void 0===K?void 0:K.token0.symbol,":",null===(Z=U)||void 0===Z?void 0:Z.token1.symbol]}):(0,r.jsx)(F,{className:"token-symbol-container",active:Boolean(f&&f.symbol),children:(f&&f.symbol&&f.symbol.length>20?f.symbol.slice(0,4)+"..."+f.symbol.slice(f.symbol.length-5,f.symbol.length):null===(X=f)||void 0===X?void 0:X.symbol)||(0,r.jsx)(l.cC,{children:"Select a token"})})]}),m&&(0,r.jsx)(E,{selected:!!f})]})})})]}),Boolean(!W&&!M&&f)&&(0,r.jsx)(A,{children:(0,r.jsxs)(_.m0,{children:[(0,r.jsx)(a.EG,{$loading:G,children:z&&(0,r.jsx)(N.x,{fiatValue:z})}),Y&&(0,r.jsxs)(_.DA,{style:{height:"17px"},children:[(0,r.jsx)(h.Tv.DeprecatedBody,{onClick:t,color:re.neutral3,fontWeight:535,fontSize:14,style:{display:"inline",cursor:"pointer"},children:Boolean(!M&&f&&te)&&((null===(H=T)||void 0===H?void 0:H(te))||(0,r.jsxs)(l.cC,{children:["Balance:"," ",{amount:oe({amount:te,type:y.sw.TokenNonTx})}]}))}),Boolean(d&&te)&&(0,r.jsx)(s.M8,{events:[o.TM.onClick],name:o.Q0.SWAP_MAX_TOKEN_AMOUNT_SELECTED,element:o.xo.MAX_TOKEN_AMOUNT_BUTTON,children:(0,r.jsx)(D,{onClick:t,children:(0,r.jsx)(l.cC,{children:"MAX"})})})]})]})})]})}),m&&(0,r.jsx)(C.Z,{isOpen:Q,onDismiss:ie,onCurrencySelect:m,selectedCurrency:f,otherSelectedCurrency:b,showCurrencyAmount:j,currencySearchFilters:w})]})}},39753:(e,n,t)=>{t.d(n,{q:()=>k,w:()=>_});var r=t(92936),o=t(69751),i=t(6823),s=t(21926),a=t(43454),c=t(6282),l=t(22953),d=t(47856),u=t(47632),p=t(31744),m=t(14411),h=t(54972),f=t(55874),y=t(72993),x=t(94284);const b=m.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\NavigationTabs\\index__Tabs",componentId:"sc-b5b2ff8c-0"})`
  ${f.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,g=(0,m.default)(a.rU).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\NavigationTabs\\index__StyledLink",componentId:"sc-b5b2ff8c-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,v=(0,m.default)(h.Tv.H1Small).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\NavigationTabs\\index__FindPoolTabsText",componentId:"sc-b5b2ff8c-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,w=(0,m.default)(s.Z).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\NavigationTabs\\index__StyledArrowLeft",componentId:"sc-b5b2ff8c-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function k({origin:e}){return(0,r.jsx)(b,{children:(0,r.jsxs)(x.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,r.jsx)(a.rU,{to:e,children:(0,r.jsx)(w,{})}),(0,r.jsx)(v,{children:(0,r.jsx)(i.cC,{children:"Import V2 pool"})})]})})}const j=(0,m.default)(h.Tv.H1Small).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\NavigationTabs\\index__AddRemoveTitleText",componentId:"sc-b5b2ff8c-4"})`
  flex: 1;
  margin: auto;
  text-align: ${({$center:e})=>e?"center":"start"};
`;function _({adding:e,creating:n,autoSlippage:t,children:s}){const a=(0,y.x)(),h=(0,m.useTheme)(),f=(0,d.T)(),v=(0,c.s0)();return(0,r.jsx)(b,{children:(0,r.jsxs)(x.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,r.jsx)(g,{to:"..",onClick:n=>{n.preventDefault(),v(-1),e&&(f((0,u.dA)()),f((0,p.dA)()))},flex:s?"1":void 0,children:(0,r.jsx)(w,{stroke:h.neutral2})}),(0,r.jsx)(j,{$center:!s,children:n?(0,r.jsx)(i.cC,{children:"Create a pair"}):e?(0,r.jsx)(i.cC,{children:"Add liquidity"}):(0,r.jsx)(i.cC,{children:"Remove liquidity"})}),s&&(0,r.jsx)(l.xu,{style:{marginRight:".5rem"},children:s}),(0,r.jsx)(o.Z,{autoSlippage:t,chainId:a,hideRoutingSettings:!0})]})})}},29025:(e,n,t)=>{t.d(n,{U:()=>r,q:()=>v});var r,o=t(16790),i=t(5985),s=t(26729),a=t(12722),c=t(7151),l=t(65471),d=t(11016),u=t(45779),p=t(64510),m=t(72993);function h(e,n,t,r,o,i,s){try{var a=e[i](s),c=a.value}catch(l){return void t(l)}a.done?n(c):Promise.resolve(c).then(r,o)}function f(e){return function(){var n=this,t=arguments;return new Promise((function(r,o){var i=e.apply(n,t);function s(e){h(i,r,o,s,a,"next",e)}function a(e){h(i,r,o,s,a,"throw",e)}s(void 0)}))}}function y(e,n,t){var h,y,x;const b=(0,m.x)(),g=(null===(y=e)||void 0===y||null===(h=y.currency)||void 0===h?void 0:h.isToken)?e.currency:void 0,v=function(e,n,t){var o,i;const{account:a}=(0,s.G)(),c=(null===(i=e)||void 0===i||null===(o=i.currency)||void 0===o?void 0:o.isToken)?e.currency:void 0,{tokenAllowance:d}=(0,l.Fx)(c,a??void 0,n),p=t(c,n);return(0,u.useMemo)((()=>e&&n?e.currency.isNative?r.APPROVED:d?d.lessThan(e)?p?r.PENDING:r.NOT_APPROVED:r.APPROVED:r.UNKNOWN:r.UNKNOWN),[e,p,n,d])}(e,n,t),w=(0,c.Ib)(null===(x=g)||void 0===x?void 0:x.address),k=(0,u.useCallback)(f((function*(){function t(e){var n;console.warn(`${(null===(n=g)||void 0===n?void 0:n.symbol)||"Token"} approval failed:`,e)}if(v!==r.NOT_APPROVED)return t("approve was called unnecessarily");if(!b)return t("no chainId");if(!g)return t("no token");if(!w)return t("tokenContract is null");if(!e)return t("missing amount to approve");if(!n)return t("no spender");let s=!1;const c=yield w.estimateGas.approve(n,o.Bz).catch((()=>(s=!0,w.estimateGas.approve(n,e.quotient.toString()))));return w.approve(n,s?e.quotient.toString():o.Bz,{gasLimit:(0,p.y)(c)}).then((t=>{var r;const o={chain_id:b,token_symbol:null===(r=g)||void 0===r?void 0:r.symbol,token_address:(0,d.DT)(g)};return(0,a._P)(i.Je.APPROVE_TOKEN_TXN_SUBMITTED,o),{response:t,tokenAddress:g.address,spenderAddress:n,amount:e}})).catch((e=>{throw t(e),e}))})),[v,g,w,e,n,b]);return[v,k]}!function(e){e.UNKNOWN="UNKNOWN",e.NOT_APPROVED="NOT_APPROVED",e.PENDING="PENDING",e.APPROVED="APPROVED"}(r||(r={}));var x=t(99454),b=t(47186);function g(e){const n=(0,x.h7)();return(0,u.useCallback)((()=>e().then((e=>{if(e){const{response:t,tokenAddress:r,spenderAddress:o,amount:i}=e;n(t,{type:b.i.APPROVAL,tokenAddress:r,spender:o,amount:i.quotient.toString()})}}))),[n,e])}function v(e,n){const[t,r]=y(e,n,x.wB);return[t,g(r)]}},65118:(e,n,t)=>{t.d(n,{Z:()=>a,e:()=>s});var r=t(92936),o=t(14411),i=t(62587);const s=o.default.main.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\AppBody__BodyWrapper",componentId:"sc-e9d30a3e-0"})`
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
  z-index: ${i.k.default};
`;function a(e){return(0,r.jsx)(s,{...e})}},61744:(e,n,t)=>{t.d(n,{u:()=>o});const r=new(t(76078).Fraction)(1,1);function o(e,n){if(n.lessThan(0)||n.greaterThan(r))throw new Error("Unexpected slippage");return[e.multiply(r.subtract(n)).quotient,e.multiply(r.add(n)).quotient]}}}]);
//# sourceMappingURL=4455.cc50f147.chunk.js.map