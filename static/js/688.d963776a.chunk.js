"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[688,5347],{13310:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(45779),r=n(68090),i=n.n(r);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},s.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=(0,o.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,i=e.size,d=void 0===i?24:i,c=a(e,["color","size"]);return o.createElement("svg",s({ref:t,xmlns:"http://www.w3.org/2000/svg",width:d,height:d,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),o.createElement("polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12"}),o.createElement("path",{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}))}));d.propTypes={color:i().string,size:i().oneOfType([i().string,i().number])},d.displayName="Inbox";const c=d},27279:(e,t,n)=>{n.d(t,{r:()=>c});var o,r,i,s=n(45779);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a.apply(this,arguments)}function d(e,t){let{title:n,titleId:d,...c}=e;return s.createElement("svg",a({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":d},c),n?s.createElement("title",{id:d},n):null,o||(o=s.createElement("path",{d:"M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),r||(r=s.createElement("path",{d:"M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),i||(i=s.createElement("path",{d:"M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const c=s.forwardRef(d);n.p},17889:(e,t,n)=>{n.d(t,{q:()=>o,v:()=>w});var o,r=n(92936),i=n(45779),s=n(43454),a=n(14411),d=n(54972),c=n(27279),l=n(30520),p=n(1356);!function(e){e.LEFT="LEFT",e.RIGHT="RIGHT"}(o||(o={}));const u=(0,a.default)(c.r).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Menu\\index__StyledMenuIcon",componentId:"sc-6640503f-0"})`
  path {
    stroke: ${({theme:e})=>e.neutral1};
  }
`,h=a.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Menu\\index__StyledMenu",componentId:"sc-6640503f-1"})`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`,x=a.default.span.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Menu\\index__MenuFlyout",componentId:"sc-6640503f-2"})`
  min-width: 196px;
  max-height: 350px;
  overflow: auto;
  background-color: ${({theme:e})=>e.surface1};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  position: absolute;
  top: 3rem;
  z-index: 100;

  ${({flyoutAlignment:e=o.RIGHT})=>e===o.RIGHT?a.css`
          right: 0rem;
        `:a.css`
          left: 0rem;
        `};
`,m=(0,a.default)(d.dL).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Menu\\index__MenuItem",componentId:"sc-6640503f-3"})`
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem 0.5rem;
  justify-content: space-between;
  color: ${({theme:e})=>e.neutral2};
  :hover {
    color: ${({theme:e})=>e.neutral1};
    cursor: pointer;
    text-decoration: none;
  }
`,f=(0,a.default)(s.rU).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Menu\\index__InternalMenuItem",componentId:"sc-6640503f-4"})`
  flex: 1;
  padding: 0.5rem 0.5rem;
  color: ${({theme:e})=>e.neutral2};
  width: max-content;
  text-decoration: none;
  :hover {
    color: ${({theme:e})=>e.neutral1};
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
`,g=(0,a.default)(m).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Menu\\index__ExternalMenuItem",componentId:"sc-6640503f-5"})`
  width: max-content;
  text-decoration: none;
`,w=({modal:e,flyoutAlignment:t=o.RIGHT,ToggleUI:n,menuItems:s,...a})=>{const d=(0,i.useRef)(),c=(0,p.Wt)(e),m=(0,p.xk)(e);(0,l.t)(d,c?m:void 0);const w=n||u;return(0,r.jsxs)(h,{ref:d,...a,children:[(0,r.jsx)(w,{onClick:m}),c&&(0,r.jsx)(x,{flyoutAlignment:t,onClick:m,children:s.map((({content:e,link:t,external:n},o)=>n?(0,r.jsx)(g,{href:t,children:e},o):(0,r.jsx)(f,{to:t,children:e},o)))})]})}},81069:(e,t,n)=>{n.d(t,{G:()=>a});var o=n(57852),r=n(42183),i=n(70559),s=n(590);function a(){const{chainId:e}=(0,s.m)(),t=(0,i.ye)(r.TP.V2Everywhere);return e&&(t&&o.Ep.includes(e)||o.$6.includes(e))}},74220:(e,t,n)=>{n.r(t),n.d(t,{default:()=>we});var o=n(92936),r=n(5985),i=n(26729),s=n(12722),a=n(25320),d=n(69780),c=n(44591),l=n(17889),p=n(90652),u=n(6823),h=n(45779),x=n(14411),m=n(66869);const f=x.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\PositionList\\index__DesktopHeader",componentId:"sc-14f71bf4-0"})`
  display: none;
  font-size: 14px;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${m.e.deprecated_upToSmall}px) {
    align-items: center;
    display: flex;
    justify-content: space-between;
    & > div:last-child {
      text-align: right;
      margin-right: 12px;
    }
  }
`,g=x.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\PositionList\\index__MobileHeader",componentId:"sc-14f71bf4-1"})`
  font-weight: medium;
  padding: 8px;
  font-weight: 535;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media screen and (min-width: ${m.e.deprecated_upToSmall}px) {
    display: none;
  }

  @media screen and (max-width: ${m.e.deprecated_upToExtraSmall}px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`,w=x.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\PositionList\\index__ToggleWrap",componentId:"sc-14f71bf4-2"})`
  display: flex;
  flex-direction: row;
  align-items: center;
`,b=x.default.button.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\PositionList\\index__ToggleLabel",componentId:"sc-14f71bf4-3"})`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${({theme:e})=>e.accent1};
  font-size: 14px;
  font-weight: 485;
`;function y({positions:e,setUserHideClosedPositions:t,userHideClosedPositions:n}){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(f,{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)(u.cC,{children:"Your positions"}),e&&" ("+e.length+")"]}),(0,o.jsx)(b,{id:"desktop-hide-closed-positions",onClick:()=>{t(!n)},children:n?(0,o.jsx)(u.cC,{children:"Show closed positions"}):(0,o.jsx)(u.cC,{children:"Hide closed positions"})})]}),(0,o.jsxs)(g,{children:[(0,o.jsx)(u.cC,{children:"Your positions"}),(0,o.jsx)(w,{children:(0,o.jsx)(b,{onClick:()=>{t(!n)},children:n?(0,o.jsx)(u.cC,{children:"Show closed positions"}):(0,o.jsx)(u.cC,{children:"Hide closed positions"})})})]}),e.map((e=>(0,o.jsx)(p.Z,{...e},e.tokenId.toString())))]})}var j=n(94284),v=n(10672),C=n(57852),k=n(30112),_=n(81069),T=n(40413),I=n(75512),P=n(57221),O=n(13310),$=n(74928),L=n(68090),N=n.n(L);function F(){return F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},F.apply(this,arguments)}function E(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var M=(0,h.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,r=e.size,i=void 0===r?24:r,s=E(e,["color","size"]);return h.createElement("svg",F({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),h.createElement("polygon",{points:"12 2 2 7 12 12 22 7 12 2"}),h.createElement("polyline",{points:"2 17 12 22 22 17"}),h.createElement("polyline",{points:"2 12 12 17 22 12"}))}));M.propTypes={color:N().string,size:N().oneOfType([N().string,N().number])},M.displayName="Layers";const z=M;function H(){return H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},H.apply(this,arguments)}function B(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var S=(0,h.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,r=e.size,i=void 0===r?24:r,s=B(e,["color","size"]);return h.createElement("svg",H({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),h.createElement("path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"}),h.createElement("path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"}))}));S.propTypes={color:N().string,size:N().oneOfType([N().string,N().number])},S.displayName="BookOpen";const V=S;var W=n(86082),A=n(43454),R=n(29021),Z=n(28098),U=n(54972),q=n(99582),D=n(76078),G=n(72993);const Q=x.default.section.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\CTACards__CTASection",componentId:"sc-367748bb-0"})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  opacity: 0.8;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    grid-template-columns: auto;
    grid-template-rows: auto;
  `};
`,J=x.css`
  padding: 16px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  border: 1px solid ${({theme:e})=>e.surface3};
  text-decoration: none;

  * {
    color: ${({theme:e})=>e.neutral1};
    text-decoration: none !important;
  }

  :hover {
    border: 1px solid ${({theme:e})=>e.surface3};

    * {
      text-decoration: none !important;
    }
  }
`,Y=(0,x.default)(U.dL).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\CTACards__CTAExternalLink",componentId:"sc-367748bb-1"})`
  ${J}
`,K=(0,x.default)(U.m_).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\CTACards__CTALink",componentId:"sc-367748bb-2"})`
  ${J}
`,X=(0,x.default)(U.Tv.DeprecatedLabel).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\CTACards__HeaderText",componentId:"sc-367748bb-3"})`
  align-items: center;
  display: flex;
  font-size: 16px;
  font-weight: 535 !important;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    font-size: 16px;
  `};
`,ee=(0,x.default)(c.Tz).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\CTACards__ResponsiveColumn",componentId:"sc-367748bb-4"})`
  grid-template-columns: 1fr;
  width: 100%;
  gap: 8px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    gap: 8px;
  `};
  justify-content: space-between;
`;function te(){const e=(0,G.x)(),t=C.T_[(0,C.Jw)(e)??D.ChainId.MAINNET];return(0,o.jsxs)(Q,{children:[(0,o.jsx)(Y,{href:"https://support.uniswap.org/hc/en-us/categories/8122334631437-Providing-Liquidity-",children:(0,o.jsxs)(ee,{children:[(0,o.jsxs)(X,{children:[(0,o.jsx)(u.cC,{children:"Learn about providing liquidity"})," \u2197"]}),(0,o.jsx)(U.Tv.DeprecatedBody,{style:{alignItems:"center",display:"flex",fontWeight:485},children:(0,o.jsx)(u.cC,{children:"Check out our v3 LP walkthrough and migration guides."})})]})}),(0,o.jsx)(K,{"data-testid":"cta-poolslink",to:`/explore/pools/${t.urlParam}`,children:(0,o.jsxs)(ee,{children:[(0,o.jsxs)(X,{style:{alignSelf:"flex-start"},children:[(0,o.jsx)(u.cC,{children:"Top pools"})," \u2197"]}),(0,o.jsx)(U.Tv.DeprecatedBody,{style:{alignSelf:"flex-start",fontWeight:485},children:(0,o.jsx)(u.cC,{children:"Explore Uniswap Analytics."})})]})})]})}var ne=n(40926);const oe=(0,x.default)(c.Tz).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\index__PageWrapper",componentId:"sc-1cfc2685-0"})`
  padding: 68px 8px 0px;
  max-width: 870px;
  width: 100%;

  @media (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    max-width: 800px;
    padding-top: 48px;
  }

  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    max-width: 500px;
    padding-top: 20px;
  }
`,re=(0,x.default)(j.m0).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\index__TitleRow",componentId:"sc-1cfc2685-1"})`
  color: ${({theme:e})=>e.neutral2};
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-wrap: wrap;
    gap: 12px;
    width: 100%;
  }
`,ie=(0,x.default)(j.DA).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\index__ButtonRow",componentId:"sc-1cfc2685-2"})`
  & > *:not(:last-child) {
    margin-left: 8px;
  }

  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
  }
`,se=(0,x.default)(l.v).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\index__PoolMenu",componentId:"sc-1cfc2685-3"})`
  margin-left: 0;
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }

  a {
    width: 100%;
  }
`,ae=x.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\index__PoolMenuItem",componentId:"sc-1cfc2685-4"})`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-weight: 535;
`,de=(0,x.default)(d.Ux).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\index__MoreOptionsButton",componentId:"sc-1cfc2685-5"})`
  border-radius: 12px;
  flex: 1 1 auto;
  padding: 6px 8px;
  width: 100%;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-right: 8px;
`,ce=(0,x.default)(U.Tv.BodyPrimary).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\index__MoreOptionsText",componentId:"sc-1cfc2685-6"})`
  align-items: center;
  display: flex;
`,le=x.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\index__ErrorContainer",componentId:"sc-1cfc2685-7"})`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  max-width: 300px;
  min-height: 25vh;
`,pe=x.css`
  width: 48px;
  height: 48px;
  margin-bottom: 0.5rem;
`,ue=(0,x.default)(P.Z).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\index__NetworkIcon",componentId:"sc-1cfc2685-8"})`
  ${pe}
`,he=(0,x.default)(O.Z).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\index__InboxIcon",componentId:"sc-1cfc2685-9"})`
  ${pe}
`,xe=(0,x.default)(d.DF).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\index__ResponsiveButtonPrimary",componentId:"sc-1cfc2685-10"})`
  border-radius: 12px;
  font-size: 16px;
  padding: 6px 8px;
  width: fit-content;
  @media (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex: 1 1 auto;
    width: 50%;
  }
`,me=x.default.main.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\index__MainContentWrapper",componentId:"sc-1cfc2685-11"})`
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  padding: 0;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;function fe(){return(0,o.jsxs)(ne.pr,{children:[(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{}),(0,o.jsx)("div",{})]})}function ge(){const e=(0,x.useTheme)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(oe,{children:(0,o.jsx)(c.Tz,{gap:"lg",justify:"center",children:(0,o.jsxs)(c.Tz,{gap:"lg",style:{width:"100%"},children:[(0,o.jsx)(re,{padding:"0",children:(0,o.jsx)(U.Tv.H1Large,{children:(0,o.jsx)(u.cC,{children:"Positions"})})}),(0,o.jsx)(me,{children:(0,o.jsx)(le,{children:(0,o.jsxs)(U.Tv.BodyPrimary,{color:e.neutral3,textAlign:"center",children:[(0,o.jsx)(ue,{strokeWidth:1.2}),(0,o.jsx)("div",{"data-testid":"pools-unsupported-err",children:(0,o.jsx)(u.cC,{children:"Your connected network is unsupported."})})]})})})]})})}),(0,o.jsx)(v.c,{})]})}function we(){var e;const{account:t,chainId:n}=(0,i.G)(),p=(0,C.Nb)(n),m=(0,_.G)(),f=(0,a.LK)(),g=(0,x.useTheme)(),[w,b]=(0,Z.QP)(),{positions:P,loading:O}=(0,T.W)(t),[L,N]=(null===(e=P)||void 0===e?void 0:e.reduce(((e,t)=>{var n;return e[(null===(n=t.liquidity)||void 0===n?void 0:n.isZero())?1:0].push(t),e}),[[],[]]))??[[],[]],F=(0,h.useMemo)((()=>[...L,...w?[]:N]),[N,L,w]),E=(0,k.J)(F);if(!p)return(0,o.jsx)(ge,{});const M=Boolean(!t),H=[{content:(0,o.jsxs)(ae,{children:[(0,o.jsx)(u.cC,{children:"Migrate"}),(0,o.jsx)($.Z,{size:16})]}),link:"/migrate/v2",external:!1},{content:(0,o.jsxs)(ae,{children:[(0,o.jsx)(u.cC,{children:"V2 liquidity"}),(0,o.jsx)(z,{size:16})]}),link:"/pools/v2",external:!1},{content:(0,o.jsxs)(ae,{children:[(0,o.jsx)(u.cC,{children:"Learn"}),(0,o.jsx)(V,{size:16})]}),link:"https://support.uniswap.org/hc/en-us/categories/8122334631437-Providing-Liquidity-",external:!0}];return(0,o.jsxs)(s.fM,{page:r.yJ.POOL_PAGE,shouldLogImpression:!0,children:[(0,o.jsx)(oe,{children:(0,o.jsx)(c.Tz,{gap:"lg",justify:"center",children:(0,o.jsxs)(c.Tz,{gap:"lg",style:{width:"100%"},children:[(0,o.jsxs)(re,{padding:"0",children:[(0,o.jsxs)(j.ZP,{gap:"md",width:"min-content",children:[(0,o.jsx)(U.Tv.LargeHeader,{children:(0,o.jsx)(u.cC,{children:"Positions"})}),(0,o.jsx)(I.p,{protocolVersion:q.Qeo.V3})]}),(0,o.jsxs)(ie,{children:[m&&(0,o.jsx)(se,{modal:R.Lk.POOL_OVERVIEW_OPTIONS,menuItems:H,flyoutAlignment:l.q.LEFT,ToggleUI:e=>(0,o.jsx)(de,{...e,children:(0,o.jsxs)(ce,{children:[(0,o.jsx)(u.cC,{children:"More"}),(0,o.jsx)(W.Z,{size:15})]})})}),(0,o.jsxs)(xe,{"data-cy":"join-pool-button",id:"join-pool-button",as:A.rU,to:"/add/ETH",children:["+ ",(0,o.jsx)(u.cC,{children:"New position"})]})]})]}),(0,o.jsx)(me,{children:O?(0,o.jsx)(fe,{}):E&&N&&E.length>0?(0,o.jsx)(y,{positions:E,setUserHideClosedPositions:b,userHideClosedPositions:w}):(0,o.jsxs)(le,{children:[(0,o.jsxs)(U.Tv.BodyPrimary,{color:g.neutral3,textAlign:"center",children:[(0,o.jsx)(he,{strokeWidth:1,style:{marginTop:"2em"}}),(0,o.jsx)("div",{children:(0,o.jsx)(u.cC,{children:"Your active V3 liquidity positions will appear here."})})]}),!M&&N.length>0&&(0,o.jsx)(d.oD,{style:{marginTop:".5rem"},onClick:()=>b(!w),children:(0,o.jsx)(u.cC,{children:"Show closed positions"})}),M&&(0,o.jsx)(s.M8,{events:[r.TM.onClick],name:r.Je.CONNECT_WALLET_BUTTON_CLICKED,properties:{received_swap_quote:!1},element:r.xo.CONNECT_WALLET_BUTTON,children:(0,o.jsx)(d.DF,{style:{marginTop:"2em",marginBottom:"2em",padding:"8px 16px"},onClick:f,children:(0,o.jsx)(u.cC,{children:"Connect a wallet"})})})]})}),(0,o.jsx)(U.Pw,{children:(0,o.jsx)(te,{})})]})})}),(0,o.jsx)(v.c,{})]})}},75512:(e,t,n)=>{n.d(t,{p:()=>b});var o=n(92936),r=n(69780);const i=e=>(0,o.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,o.jsx)("path",{d:"M5.2971 7.20007H12.4971V3.19995C12.4971 1.43263 13.9298 0 15.6971 0C17.4644 0 18.8972 1.43263 18.8972 3.19995H17.2971C17.2971 2.31631 16.5807 1.60005 15.6971 1.60005C14.8134 1.60005 14.0972 2.31631 14.0972 3.19995V12.0001H12.4971V8.80012H5.2971V10.4001H3.69705V3.20002C3.69705 1.4327 5.12982 6.80089e-05 6.89715 6.80089e-05C8.66447 6.80089e-05 10.0971 1.4327 10.0971 3.20002H8.49705C8.49705 2.31638 7.78079 1.60011 6.89715 1.60011C6.0135 1.60011 5.2971 2.31638 5.2971 3.20002V7.20007ZM1.59424 14.3428L1 12.8573C3.85069 11.717 6.97772 11.717 10.3501 12.8411C13.3778 13.8503 16.1173 13.8503 18.5999 12.8573L19.1942 14.3428C16.3435 15.4831 13.2164 15.4831 9.84407 14.3589C6.81633 13.3497 4.07687 13.3497 1.59424 14.3428ZM1.59424 18.3426L1 16.8571C3.85069 15.7168 6.97772 15.7168 10.3501 16.841C13.3778 17.8502 16.1173 17.8502 18.5999 16.8571L19.1942 18.3426C16.3435 19.4829 13.2164 19.4829 9.84407 18.3588C6.81633 17.3497 4.07687 17.3497 1.59424 18.3426Z",fill:e.fill||"currentColor"})});var s=n(17889),a=n(6823),d=n(86082),c=n(1356),l=n(29021),p=n(14411),u=n(54972),h=n(99582);const x=p.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\shared__PoolVersionItem",componentId:"sc-6b54c76f-0"})`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
`,m=(0,p.default)(r.Ux).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\shared__PoolOptionsButton",componentId:"sc-6b54c76f-1"})`
  flex: 1 1 auto;
  padding: 6px 8px 6px 12px;
  width: 100%;
  background-color: ${({theme:e})=>e.surface3};
  border: none;
  border-radius: 8px;
  gap: 6px;

  &:hover {
    background-color: ${({theme:e,$isOpen:t})=>t?e.surface1:e.surface3};
    opacity: 0.9;
  }

  ${({$isOpen:e})=>e&&p.css`
      background-color: ${({theme:e})=>e.surface1};
      border: ${({theme:e})=>`1.5px solid ${e.neutral3}`};
    `}
`,f=(0,p.default)(d.Z).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\shared__StyledChevron",componentId:"sc-6b54c76f-2"})`
  transform: ${({$isOpen:e})=>e?"rotate(180deg)":"rotate(0deg)"};
  transition: ${({theme:{transition:{duration:e,timing:t}}})=>`transform ${e.fast} ${t.ease}`};
`,g={[h.Qeo.V3]:{content:(0,o.jsxs)(x,{children:[(0,o.jsx)(i,{width:"20px",height:"20px"}),(0,o.jsx)(u.Tv.BodyPrimary,{lineHeight:"24px",color:"currentColor",children:(0,o.jsx)(a.cC,{children:"v3 pools"})})]}),link:"/pool",external:!1},[h.Qeo.V2]:{content:(0,o.jsxs)(x,{children:[(0,o.jsx)(i,{width:"20px",height:"20px"}),(0,o.jsx)(u.Tv.BodyPrimary,{lineHeight:"24px",color:"currentColor",children:(0,o.jsx)(a.cC,{children:"v2 pools"})})]}),link:"/pools/v2",external:!1}},w={[h.Qeo.V3]:a.t`v3`,[h.Qeo.V2]:a.t`v2`};function b({protocolVersion:e}){const t=(0,c.Wt)(l.Lk.POOL_VERSION);return(0,o.jsx)(s.v,{modal:l.Lk.POOL_VERSION,menuItems:[g[e===h.Qeo.V3?h.Qeo.V2:h.Qeo.V3]],flyoutAlignment:s.q.LEFT,ToggleUI:n=>(0,o.jsxs)(m,{...n,$isOpen:t,children:[(0,o.jsx)(u.Tv.BodyPrimary,{color:"neutral2",children:w[e]}),(0,o.jsx)(f,{$isOpen:t})]})})}},40926:(e,t,n)=>{n.d(t,{DC:()=>a,ER:()=>d,bb:()=>c,im:()=>s,pr:()=>l});var o=n(32546),r=n(22953),i=n(14411);const s=i.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\styled__Wrapper",componentId:"sc-bfb6c8b8-0"})`
  position: relative;
  padding: 20px;
`,a=(0,i.default)(r.xv).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\styled__ClickableText",componentId:"sc-bfb6c8b8-1"})`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,d=i.default.button.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\styled__MaxButton",componentId:"sc-bfb6c8b8-2"})`
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
`,c=i.default.span.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\styled__Dots",componentId:"sc-bfb6c8b8-3"})`
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
`,l=(0,i.default)(o.pr).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Pool\\styled__LoadingRows",componentId:"sc-bfb6c8b8-4"})`
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
`},5347:(e,t,n)=>{n.d(t,{B:()=>r});var o=n(64370);function r(e){var t;return e.isNative?e:(null===(t=o.Fl[e.chainId])||void 0===t?void 0:t.equals(e))?(0,o.gX)(e.chainId):e}}}]);
//# sourceMappingURL=688.d963776a.chunk.js.map