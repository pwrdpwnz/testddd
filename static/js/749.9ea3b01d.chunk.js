"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[749,5118],{37525:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(45779),i=t(68090),o=t.n(i);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=(0,r.forwardRef)((function(e,n){var t=e.color,i=void 0===t?"currentColor":t,o=e.size,l=void 0===o?24:o,a=c(e,["color","size"]);return r.createElement("svg",s({ref:n,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.createElement("polyline",{points:"18 15 12 9 6 15"}))}));l.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},l.displayName="ChevronUp";const a=l},57809:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(45779),i=t(68090),o=t.n(i);function s(){return s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},s.apply(this,arguments)}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=(0,r.forwardRef)((function(e,n){var t=e.color,i=void 0===t?"currentColor":t,o=e.size,l=void 0===o?24:o,a=c(e,["color","size"]);return r.createElement("svg",s({ref:n,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),r.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),r.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));l.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},l.displayName="Plus";const a=l},39753:(e,n,t)=>{t.d(n,{q:()=>w,w:()=>T});var r=t(92936),i=t(69751),o=t(6823),s=t(21926),c=t(43454),l=t(6282),a=t(22953),d=t(47856),p=t(47632),x=t(31744),h=t(14411),u=t(54972),f=t(55874),m=t(72993),g=t(94284);const j=h.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\NavigationTabs\\index__Tabs",componentId:"sc-b5b2ff8c-0"})`
  ${f.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,b=(0,h.default)(c.rU).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\NavigationTabs\\index__StyledLink",componentId:"sc-b5b2ff8c-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,v=(0,h.default)(u.Tv.H1Small).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\NavigationTabs\\index__FindPoolTabsText",componentId:"sc-b5b2ff8c-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,y=(0,h.default)(s.Z).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\NavigationTabs\\index__StyledArrowLeft",componentId:"sc-b5b2ff8c-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function w({origin:e}){return(0,r.jsx)(j,{children:(0,r.jsxs)(g.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,r.jsx)(c.rU,{to:e,children:(0,r.jsx)(y,{})}),(0,r.jsx)(v,{children:(0,r.jsx)(o.cC,{children:"Import V2 pool"})})]})})}const C=(0,h.default)(u.Tv.H1Small).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\NavigationTabs\\index__AddRemoveTitleText",componentId:"sc-b5b2ff8c-4"})`
  flex: 1;
  margin: auto;
  text-align: ${({$center:e})=>e?"center":"start"};
`;function T({adding:e,creating:n,autoSlippage:t,children:s}){const c=(0,m.x)(),u=(0,h.useTheme)(),f=(0,d.T)(),v=(0,l.s0)();return(0,r.jsx)(j,{children:(0,r.jsxs)(g.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,r.jsx)(b,{to:"..",onClick:n=>{n.preventDefault(),v(-1),e&&(f((0,p.dA)()),f((0,x.dA)()))},flex:s?"1":void 0,children:(0,r.jsx)(y,{stroke:u.neutral2})}),(0,r.jsx)(C,{$center:!s,children:n?(0,r.jsx)(o.cC,{children:"Create a pair"}):e?(0,r.jsx)(o.cC,{children:"Add liquidity"}):(0,r.jsx)(o.cC,{children:"Remove liquidity"})}),s&&(0,r.jsx)(a.xu,{style:{marginRight:".5rem"},children:s}),(0,r.jsx)(i.Z,{autoSlippage:t,chainId:c,hideRoutingSettings:!0})]})})}},65118:(e,n,t)=>{t.d(n,{Z:()=>c,e:()=>s});var r=t(92936),i=t(14411),o=t(62587);const s=i.default.main.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\AppBody__BodyWrapper",componentId:"sc-e9d30a3e-0"})`
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
`;function c(e){return(0,r.jsx)(s,{...e})}},8548:(e,n,t)=>{t.r(n),t.d(n,{default:()=>z});var r,i=t(92936),o=t(5985),s=t(26729),c=t(12722),l=t(26073),a=t(81069),d=t(6823),p=t(61592),x=t.n(p),h=t(45779),u=t(57809),f=t(6282),m=t(22953),g=t(54972),j=t(69780),b=t(61182),v=t(44591),y=t(5967),w=t(39753),C=t(52223),T=t(94284),k=t(24210),_=t(10672),O=t(64370),S=t(41047),N=t(73720),I=t(28098),$=t(17202),E=t(65118),A=t(40926);!function(e){e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1"}(r||(r={}));const P={showCommonBases:!0};function z(){var e;const n=new URLSearchParams((0,f.TH)().search),{account:t,chainId:p}=(0,s.G)(),[z,L]=(0,h.useState)(!1),[W,F]=(0,h.useState)(r.TOKEN1),[q,B]=(0,h.useState)((()=>p?(0,O.gX)(p):null)),[Z,K]=(0,h.useState)(null),[D,G]=(0,S.Oo)(q??void 0,Z??void 0),R=(0,I.uB)();(0,h.useEffect)((()=>{G&&R(G)}),[G,R]);const H=D===S._G.NOT_EXISTS||Boolean(D===S._G.EXISTS&&G&&x().equal(G.reserve0.quotient,x().BigInt(0))&&x().equal(G.reserve1.quotient,x().BigInt(0))),M=(0,N.mM)(t??void 0,null===(e=G)||void 0===e?void 0:e.liquidityToken),U=Boolean(M&&x().greaterThan(M.quotient,x().BigInt(0))),X=(0,h.useCallback)((e=>{W===r.TOKEN0?B(e):K(e)}),[W]),V=(0,h.useCallback)((()=>{L(!1)}),[L]),J=(0,i.jsx)(b.hl,{padding:"45px 10px",children:(0,i.jsx)(m.xv,{textAlign:"center",children:t?(0,i.jsx)(d.cC,{children:"Select a token to find your v2 liquidity."}):(0,i.jsx)(d.cC,{children:"Connect to a wallet to find pools"})})});return(0,a.G)()?(0,i.jsx)(c.fM,{page:o.yJ.POOL_PAGE,shouldLogImpression:!0,children:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(E.Z,{children:[(0,i.jsx)(w.q,{origin:n.get("origin")??"/pools/v2"}),(0,i.jsxs)(v.Tz,{style:{padding:"1rem"},gap:"md",children:[(0,i.jsx)(b.Pj,{children:(0,i.jsx)(v.Tz,{gap:"10px",children:(0,i.jsx)(g.Tv.DeprecatedLink,{fontWeight:485,color:"accent1",children:(0,i.jsxs)(d.cC,{children:[(0,i.jsx)("b",{children:"Tip:"})," Use this tool to find v2 pools that don't automatically appear in the interface."]})})})}),(0,i.jsx)(j.KA,{onClick:()=>{L(!0),F(r.TOKEN0)},children:q?(0,i.jsxs)(T.ZP,{children:[(0,i.jsx)(y.Z,{currency:q}),(0,i.jsx)(m.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:q.symbol})]}):(0,i.jsx)(m.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:(0,i.jsx)(d.cC,{children:"Select a token"})})}),(0,i.jsx)(v.lg,{children:(0,i.jsx)(u.Z,{size:"16",color:"#888D9B"})}),(0,i.jsx)(j.KA,{onClick:()=>{L(!0),F(r.TOKEN1)},children:Z?(0,i.jsxs)(T.ZP,{children:[(0,i.jsx)(y.Z,{currency:Z}),(0,i.jsx)(m.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:Z.symbol})]}):(0,i.jsx)(m.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:(0,i.jsx)(d.cC,{children:"Select a token"})})}),U&&(0,i.jsxs)(v.lg,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[(0,i.jsx)(m.xv,{textAlign:"center",fontWeight:535,children:(0,i.jsx)(d.cC,{children:"Pool found!"})}),(0,i.jsx)(g.m_,{to:"pools/v2",children:(0,i.jsx)(m.xv,{textAlign:"center",children:(0,i.jsx)(d.cC,{children:"Manage this pool."})})})]}),q&&Z?D===S._G.EXISTS?U&&G?(0,i.jsx)(C.WP,{pair:G,border:"1px solid #CED0D9"}):(0,i.jsx)(b.hl,{padding:"45px 10px",children:(0,i.jsxs)(v.Tz,{gap:"sm",justify:"center",children:[(0,i.jsx)(m.xv,{textAlign:"center",children:(0,i.jsx)(d.cC,{children:"You don\u2019t have liquidity in this pool yet."})}),(0,i.jsx)(g.m_,{to:`/add/v2/${(0,$.H)(q)}/${(0,$.H)(Z)}`,children:(0,i.jsx)(m.xv,{textAlign:"center",children:(0,i.jsx)(d.cC,{children:"Add liquidity."})})})]})}):H?(0,i.jsx)(b.hl,{padding:"45px 10px",children:(0,i.jsxs)(v.Tz,{gap:"sm",justify:"center",children:[(0,i.jsx)(m.xv,{textAlign:"center",children:(0,i.jsx)(d.cC,{children:"No pool found."})}),(0,i.jsx)(g.m_,{to:`/add/${(0,$.H)(q)}/${(0,$.H)(Z)}`,children:(0,i.jsx)(d.cC,{children:"Create pool."})})]})}):D===S._G.INVALID?(0,i.jsx)(b.hl,{padding:"45px 10px",children:(0,i.jsx)(v.Tz,{gap:"sm",justify:"center",children:(0,i.jsx)(m.xv,{textAlign:"center",fontWeight:535,children:(0,i.jsx)(d.cC,{children:"Invalid pair."})})})}):D===S._G.LOADING?(0,i.jsx)(b.hl,{padding:"45px 10px",children:(0,i.jsx)(v.Tz,{gap:"sm",justify:"center",children:(0,i.jsxs)(m.xv,{textAlign:"center",children:[(0,i.jsx)(d.cC,{children:"Loading"}),(0,i.jsx)(A.bb,{})]})})}):null:J]}),(0,i.jsx)(k.Z,{isOpen:z,onCurrencySelect:X,onDismiss:V,selectedCurrency:(W===r.TOKEN0?Z:q)??void 0,currencySearchFilters:P})]}),(0,i.jsx)(_.c,{})]})}):(0,i.jsx)(l.A,{})}},40926:(e,n,t)=>{t.d(n,{DC:()=>c,ER:()=>l,bb:()=>a,im:()=>s,pr:()=>d});var r=t(32546),i=t(22953),o=t(14411);const s=o.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\styled__Wrapper",componentId:"sc-bfb6c8b8-0"})`
  position: relative;
  padding: 20px;
`,c=(0,o.default)(i.xv).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\styled__ClickableText",componentId:"sc-bfb6c8b8-1"})`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,l=o.default.button.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\styled__MaxButton",componentId:"sc-bfb6c8b8-2"})`
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
`,a=o.default.span.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\styled__Dots",componentId:"sc-bfb6c8b8-3"})`
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
`,d=(0,o.default)(r.pr).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\styled__LoadingRows",componentId:"sc-bfb6c8b8-4"})`
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
`}}]);
//# sourceMappingURL=749.9ea3b01d.chunk.js.map