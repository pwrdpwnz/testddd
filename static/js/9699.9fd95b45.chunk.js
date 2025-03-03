"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9699],{89699:(e,i,n)=>{n.r(i),n.d(i,{default:()=>Ze});var t=n(92936),a=n(45779),o=n(14411),r=n(6823),d=n(55479),s=n(27427),p=n(97341),l=n(27359),c=n(95055);const x=(0,o.default)(c.E.button).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\components\\cards\\PillButton__Button",componentId:"sc-f35c450a-0"})`
  display: flex;
  padding: 12px 16px;
  border-radius: 24px;
  gap: 8px;
  align-items: center;
  justify-content: center;
  border: 0;
  background-color: ${({theme:e})=>e.surface1};
  overflow: hidden;
  cursor: ${({cursor:e})=>e??"pointer"};
  flex: none;
`,h=(0,o.default)(c.E.div).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\components\\cards\\PillButton__Slider",componentId:"sc-f35c450a-1"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`,g=o.default.span.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\components\\cards\\PillButton__Label",componentId:"sc-f35c450a-2"})`
  color: ${e=>e.color};
  font-family: Basel;
  font-size: 20px;
  @media (max-width: 1024px) {
    font-size: 18px;
  }
  font-style: normal;
  font-weight: 535;
  line-height: 24px; /* 120% */
  flex: none;
`,m=(0,o.default)(c.E.div).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\components\\cards\\PillButton__Opacity",componentId:"sc-f35c450a-3"})`
  flex: 0;
  display: flex;
  overflow: visible;
  opacity: ${e=>e.opacity};
`;function u(e){return(0,t.jsx)(x,{transition:{delayChildren:0},cursor:e.cursor,children:(0,t.jsxs)(h,{variants:{intial:{x:0},hover:{x:-24}},children:[(0,t.jsx)(m,{opacity:1,variants:{intial:{opacity:1},hover:{opacity:0}},children:e.icon}),(0,t.jsx)(g,{color:e.color,children:e.label}),(0,t.jsx)(m,{opacity:0,variants:{intial:{opacity:0},hover:{opacity:1}},children:(0,t.jsx)(d.x,{width:"0px",overflow:"visible",children:(0,t.jsx)(l.ol,{size:"24px",fill:e.color})})})]})})}var w=n(6282);const f=(0,c.E)((0,o.default)(d.x).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\components\\cards\\ValuePropCard__Container",componentId:"sc-112a3184-0"})`
  position: relative;
  border-radius: 32px;
  width: 100%;
  cursor: pointer;
  height: ${e=>e.height||"609px"};
  background-color: ${e=>{var i,n;return e.isDarkMode?null===(i=e.backgroundColor)||void 0===i?void 0:i.dark:null===(n=e.backgroundColor)||void 0===n?void 0:n.light}};
  overflow: hidden;
  text-decoration: none;
  @media (max-width: 1024px) {
    height: ${e=>e.height||"516px"};
    min-height: ${e=>e.minHeight||"240px"};
  }
  @media (max-width: 768px) {
    height: auto;
    min-height: ${e=>e.minHeight||"240px"};
  }
`),b=o.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\components\\cards\\ValuePropCard__Inner",componentId:"sc-112a3184-1"})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  ${({alignTextToBottom:e})=>e?o.css`
          height: 100%;
          justify-content: space-between;
        `:"height: unset;"}
  z-index: 5;
  gap: 24px;
  padding: 32px;
  @media (max-width: 1024px) {
    gap: 16px;
    padding: 24px;
  }
  @media (max-width: 396px) {
    padding: 20px;
  }
`,v=o.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\components\\cards\\ValuePropCard__Title",componentId:"sc-112a3184-2"})`
  color: ${e=>e.color};
  font-feature-settings: 'ss07' on;
  font-family: Basel;
  font-size: 36px;
  font-style: normal;
  font-weight: 500;
  line-height: 44px;
  white-space: pre-line;
  text-wrap: pretty;
  @media (max-width: 1024px) {
    font-size: 28px;
    line-height: 32px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 32px;
  }
`;function y(e){const{isDarkMode:i,backgroundColor:n,height:a,textColor:o,minHeight:r,alignTextToBottom:d,href:s,to:p}=e,l=(0,w.s0)();return(0,t.jsxs)(f,{initial:"initial",whileHover:"hover",isDarkMode:i,backgroundColor:n,height:a,minHeight:r,as:"a",href:s,target:"_blank",rel:"noreferrer noopener",onClick:()=>{p&&l(p)},...e,children:[(0,t.jsxs)(b,{alignTextToBottom:d,children:[e.button,(0,t.jsx)(v,{color:o,children:e.titleText})]}),e.children]})}const C=o.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\components\\cards\\DocumentationCard__Contents",componentId:"sc-a30804fe-0"})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;

  opacity: 1;
  @media (max-width: 1280px) {
    opacity: 0.32;
  }
  @media (max-width: 768px) {
    opacity: 0;
  }
`,j="#00C3A0";function k(e){const{rive:i,RiveComponent:n}=(0,s.useRive)({src:"/rive/landing-page.riv",artboard:"Dev",stateMachines:"Animation",layout:new s.Layout({fit:s.Fit.Contain,alignment:s.Alignment.CenterRight})}),a=(0,p.eI)(),o=a.lg,d=a.xl;return(0,t.jsx)(y,{height:o?"340px":"240px",href:"https://docs.uniswap.org/",backgroundColor:{dark:"rgba(0, 195, 160, 0.08);",light:"rgba(0, 195, 160, 0.06);"},isDarkMode:e.isDarkMode,textColor:j,button:(0,t.jsx)(u,{color:j,label:r.t`Developer docs`,icon:(0,t.jsx)(l.EG,{size:"24px",fill:j})}),titleText:r.t`Build the next generation of open applications and tools.`,paddingRight:d?"16%":"0%",alignTextToBottom:!0,children:(0,t.jsx)(C,{children:(0,t.jsx)(n,{onMouseEnter:()=>i&&i.play()})})})}var _=n(65075);const I=o.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\components\\cards\\DownloadWalletCard__Contents",componentId:"sc-6e4a052a-0"})`
  width: 100%;
  height: 75%;
  position: absolute;
  margin: auto;
  bottom: 0;
  z-index: 1;
  @media (max-width: 980px) and (min-width: 768px) {
    width: 125%;
    transform: translateX(-10.25%);
  }
`;function L(){const e=(0,o.useTheme)(),i=(0,_.Gv)(),{rive:n,RiveComponent:a}=(0,s.useRive)({src:"/rive/landing-page.riv",artboard:"Mobile-Light",stateMachines:"Animation",layout:new s.Layout({fit:s.Fit.Contain,alignment:s.Alignment.BottomCenter})}),{rive:d,RiveComponent:p}=(0,s.useRive)({src:"/rive/landing-page.riv",artboard:"Mobile-Dark",stateMachines:"Animation",layout:new s.Layout({fit:s.Fit.Contain,alignment:s.Alignment.BottomCenter})});return(0,t.jsx)(y,{href:"https://wallet.uniswap.org/",minHeight:"500px",isDarkMode:i,textColor:e.accent1,backgroundColor:{dark:"rgba(252, 114, 255, 0.12)",light:"rgba(252, 114, 255, 0.12)"},button:(0,t.jsx)(u,{color:e.accent1,label:r.t`Uniswap wallet`,icon:(0,t.jsx)(l.w5,{size:"24px",fill:e.accent1})}),titleText:r.t`The wallet built for swapping. Available on iOS and Android.`,children:(0,t.jsx)(I,{children:i?(0,t.jsx)(p,{onMouseEnter:()=>{var e;return null===(e=d)||void 0===e?void 0:e.play()}}):(0,t.jsx)(a,{onMouseEnter:()=>{var e;return null===(e=n)||void 0===e?void 0:e.play()}})})})}const F=o.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\components\\cards\\LiquidityCard__Contents",componentId:"sc-3caa2aa7-0"})`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;

  opacity: 1;
  @media (max-width: 1280px) {
    opacity: 0.24;
  }
  @media (max-width: 768px) {
    opacity: 0;
  }
`,N="#9E62FF";function T(e){const{rive:i,RiveComponent:n}=(0,s.useRive)({src:"/rive/landing-page.riv",artboard:"LP",stateMachines:"Animation",layout:new s.Layout({fit:s.Fit.Contain,alignment:s.Alignment.CenterRight})}),a=(0,p.eI)(),o=a.lg,d=a.xl;return(0,t.jsx)(y,{to:"/pool",tagText:r.t`Provide Liquidity`,height:o?"340px":"240px",isDarkMode:e.isDarkMode,textColor:N,backgroundColor:{dark:"rgba(136, 63, 255, 0.12)",light:"rgba(136, 63, 255, 0.06)"},button:(0,t.jsx)(u,{color:N,label:r.t`Liquidity`,icon:(0,t.jsx)(l.Ll,{size:"24px",fill:N})}),titleText:r.t`Provide liquidity to pools on the Uniswap Protocol and earn fees on swaps.`,paddingRight:d?"16%":"0%",alignTextToBottom:!0,children:(0,t.jsx)(F,{children:(0,t.jsx)(n,{onMouseEnter:()=>i&&i.play()})})})}var $=n(76078),S=n(47236),z=n(19478),E=n(64370),B=n(18569),M=n(39671),D=n(99582),P=n(66136),A=n(57852);const H=o.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\components\\cards\\WebappCard__Contents",componentId:"sc-69b95bc6-0"})`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  position: absolute;
  width: 100%;
  bottom: 0;
  padding: 32px;
  padding-bottom: 32px;
  @media (max-width: 1024px) {
    padding: 24px;
    padding-bottom: 32px;
  }
  @media (max-width: 396px) {
    padding: 16px;
    padding-bottom: 24px;
  }
`,V=o.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\components\\cards\\WebappCard__TokenRow",componentId:"sc-69b95bc6-1"})`
  width: 100%;
  height: 72px;
  overflow: hidden;
  padding: 16px;
  padding-right: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.surface1};
  @media (max-width: 1024px) {
    height: 64px;
    padding-right: 16px;
  }
  @media (max-width: 768px) {
    height: 56px;
    padding-right: 16px;
  }
  @media (max-width: 468px) {
    height: 48px;
    padding: 12px;
    border-radius: 16px;
  }
  transition: background-color 125ms ease-in, transform 125ms ease-in;
  &:hover {
    background-color: ${({theme:e})=>e.surface2};
    transform: scale(1.03);
  }
`,R=o.default.h3.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\components\\cards\\WebappCard__TokenName",componentId:"sc-69b95bc6-2"})`
  padding: 0;
  margin: 0;
  font-family: Basel;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: ${e=>e.color||e.theme.neutral1};
  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 24px;
  }
  @media (max-width: 468px) {
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: ${({theme:e})=>e.breakpoint.xs}px) {
    display: none;
  }
`,W=o.default.h3.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\components\\cards\\WebappCard__TokenTicker",componentId:"sc-69b95bc6-3"})`
  padding: 0;
  margin: 0;
  font-family: Basel;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px;
  color: ${e=>e.color||e.theme.neutral2};
  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 24px;
  }
  @media (max-width: 468px) {
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: ${({theme:e})=>e.breakpoint.xs}px) {
    color: ${e=>e.color||e.theme.neutral1};
  }
`,q=o.default.h3.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\components\\cards\\WebappCard__TokenPrice",componentId:"sc-69b95bc6-4"})`
  padding: 0;
  margin: 0;
  font-family: Basel;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  line-height: 32px;
  color: ${e=>e.color||e.theme.neutral1};
  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 24px;
  }
  @media (max-width: 468px) {
    font-size: 16px;
    line-height: 20px;
  }
`,G=o.default.h3.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\components\\cards\\WebappCard__DeltaText",componentId:"sc-69b95bc6-5"})`
  text-align: right;
  padding: 0;
  margin: 0;
  font-family: Basel;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  line-height: 32px;
  color: ${e=>"red"===e.color?e.theme.critical:e.theme.success};
  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 24px;
    width: 50px;
  }
  @media (max-width: 468px) {
    font-size: 16px;
    line-height: 20px;
    width: 50px;
  }
`,U=(0,o.default)(d.x).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\components\\cards\\WebappCard__DeltaContainer",componentId:"sc-69b95bc6-6"})`
  @media (min-width: 1030px) and (max-width: 1150px) {
    display: none;
  }
  @media (min-width: 767px) and (max-width: 915px) {
    display: none;
  }
`,O="#2ABDFF",Q=[{chainId:$.ChainId.MAINNET,address:"ETH"},{chainId:$.ChainId.BASE,address:E.QP.address},{chainId:$.ChainId.MAINNET,address:E.yg[$.ChainId.MAINNET].address},{chainId:$.ChainId.MAINNET,address:E.Ej.address}];function X({chainId:e,address:i}){var n,o,r,s,l,c,x,h,g,m,u;const f=(0,p.eI)().sm,b=(0,w.s0)(),{formatFiatPrice:v,formatDelta:y}=(0,P.Gb)(),C=(0,M.U8)(i,e),j=(0,D.sYx)({variables:{address:null===(n=C)||void 0===n?void 0:n.wrapped.address,chain:(0,A.tq)({chainId:e})}}),k=(null===(l=j.data)||void 0===l||null===(s=l.token)||void 0===s||null===(r=s.market)||void 0===r||null===(o=r.price)||void 0===o?void 0:o.value)??0,_=(null===(g=j.data)||void 0===g||null===(h=g.token)||void 0===h||null===(x=h.market)||void 0===x||null===(c=x.pricePercentChange)||void 0===c?void 0:c.value)??0,I=(0,a.useCallback)((n=>{n.stopPropagation(),b((0,B.dG)({address:"ETH"===i?E.dt:i,chain:(0,A.tq)({chainId:e})}))}),[i,e,b]);return(0,t.jsxs)(V,{onClick:I,children:[(0,t.jsx)(S.V,{currencies:[C],chainId:e,size:f?32:24}),(0,t.jsxs)(d.x,{justify:"space-between",gap:"16px",children:[(0,t.jsxs)(d.x,{width:"auto",gap:"8px",align:"center",overflow:"hidden",children:[(0,t.jsx)(R,{children:null===(m=C)||void 0===m?void 0:m.name}),(0,t.jsx)(W,{children:null===(u=C)||void 0===u?void 0:u.symbol})]}),(0,t.jsxs)(d.x,{width:"auto",gap:"8px",align:"center",children:[(0,t.jsx)(q,{children:v({price:k,type:P.sw.FiatTokenPrice})}),(0,t.jsxs)(U,{gap:"4px",align:"center",justify:"flex-end",children:[(0,t.jsx)(z.Kx,{delta:_}),(0,t.jsx)(G,{color:_<0?"red":"green",children:y(_)})]})]})]})]})}function Z(e){return(0,t.jsx)(y,{to:"/tokens/ethereum",minHeight:"450px",isDarkMode:e.isDarkMode,textColor:O,backgroundColor:{dark:"rgba(0, 102, 255, 0.12)",light:"rgba(0, 102, 255, 0.04)"},button:(0,t.jsx)(u,{color:O,label:r.t`Web app`,icon:(0,t.jsx)(l.ar,{size:"24px",fill:O})}),titleText:r.t`Swapping made simple. Access thousands of tokens on 8+ chains.`,children:(0,t.jsx)(H,{children:Q.map((e=>(0,t.jsx)(X,{chainId:e.chainId,address:e.address},`tokenRow-${e.address}`)))})})}const K=o.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\sections\\DirectToDefi__SectionLayout",componentId:"sc-6e556dcd-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
  @media (max-width: 768px) {
    padding: 0 48px;
  }
  @media (max-width: 468px) {
    padding: 0 24px;
  }
`,Y=(0,o.default)(d.x).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\sections\\DirectToDefi__RowToCol",componentId:"sc-6e556dcd-1"})`
  height: auto;
  flex-shrink: 1;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`,J=(0,o.default)(d.x).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\sections\\DirectToDefi__SectionCol",componentId:"sc-6e556dcd-2"})`
  flex-direction: column;
  max-width: 1280px;
  gap: 32px;
  @media (max-width: 768px) {
    gap: 24px;
  }
`;function ee(){return(0,t.jsx)(K,{children:(0,t.jsxs)(J,{direction:"column",gap:"40px",maxWidth:"1280px",children:[(0,t.jsx)(d.H2,{children:(0,t.jsx)(r.cC,{children:"Go direct to DeFi"})}),(0,t.jsxs)(d.x,{direction:"column",gap:"16px",children:[(0,t.jsxs)(Y,{direction:"row",gap:"16px",children:[(0,t.jsx)(Z,{}),(0,t.jsx)(L,{})]}),(0,t.jsxs)(Y,{direction:"row",gap:"16px",children:[(0,t.jsx)(k,{}),(0,t.jsx)(T,{})]})]})]})})}var ie=n(89332);const ne=o.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\sections\\NewsletterEtc__SectionLayout",componentId:"sc-3986d01f-0"})`
  width: 100%;
  max-width: 1360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
  @media (max-width: 768px) {
    padding: 0 48px;
  }
  @media (max-width: 468px) {
    padding: 0 24px;
  }
`,te=o.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\sections\\NewsletterEtc__Layout",componentId:"sc-3986d01f-1"})`
  width: 100%;
  max-width: 1280px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  @media (max-width: 768px) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
  }
`,ae=(0,o.default)(d.x).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\sections\\NewsletterEtc__SectionCol",componentId:"sc-3986d01f-2"})`
  flex-direction: column;
  max-width: 1328px;
  gap: 24px;
  @media (max-width: 768px) {
    gap: 24px;
  }
`,oe=o.default.a.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\sections\\NewsletterEtc__Card",componentId:"sc-3986d01f-3"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  height: 250px;
  border-radius: 20px;
  padding: 32px 28px;
  overflow: hidden;
  text-decoration: none;
  background-color: ${e=>e.backgroundColor||e.theme.surface2};
  @media (max-width: 1024px) {
    gap: 16px;
    padding: 24px;
  }
  @media (max-width: 768px) {
    gap: 16px;
    padding: 24px;
  }
`,re=(0,c.E)((0,o.default)(oe).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\sections\\NewsletterEtc__SquareCard",componentId:"sc-3986d01f-4"})`
  grid-column: span 1 / span 1;
  grid-row: span 4 / span 4;

  @media (max-width: 768px) {
    grid-column: span 4 / span 4;
    grid-row: span 1 / span 1;
  }
`),de=(0,o.default)(re).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\sections\\NewsletterEtc__HelpCenterCard",componentId:"sc-3986d01f-5"})`
  @media (max-width: 1024px) {
    grid-column: span 2 / span 2;

    grid-row-start: 1;
    grid-row-end: 3;
  }
  @media (max-width: 768px) {
    grid-column: span 4 / span 4;
    grid-row: span 1 / span 1;
  }
`,se=(0,o.default)(re).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\sections\\NewsletterEtc__BlogCard",componentId:"sc-3986d01f-6"})`
  @media (max-width: 1024px) {
    grid-column: span 2 / span 2;

    grid-row-start: 3;
    grid-row-end: 5;
  }
  @media (max-width: 768px) {
    grid-column: span 4 / span 4;
    grid-row: span 1 / span 1;
  }
`,pe=(0,c.E)((0,o.default)(oe).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\sections\\NewsletterEtc__RectCard",componentId:"sc-3986d01f-7"})`
  grid-column: span 2 / span 2;
  grid-row: span 4 / span 4;

  gap: 32px;

  @media (max-width: 768px) {
    grid-column: span 4 / span 4;
    grid-row: span 1 / span 1;
  }
`),le="#FF4D00",ce="#8E8767";function xe(){const e=(0,o.useTheme)(),i=(0,_.Gv)();return(0,t.jsx)(ne,{children:(0,t.jsx)(d.x,{direction:"row",maxWidth:"1328px",gap:"24px",width:"100%",children:(0,t.jsxs)(ae,{"justify-content":"space-between",height:"100%",children:[(0,t.jsx)(d.H2,{children:(0,t.jsx)(r.cC,{children:"Connect with us"})}),(0,t.jsxs)(te,{children:[(0,t.jsxs)(de,{initial:"initial",whileHover:"hover",href:"https://help.uniswap.org/",target:"_blank",rel:"noopener noreferrer",backgroundColor:i?"rgba(255, 77, 0, 0.08)":"rgba(255, 77, 0, 0.04)",children:[(0,t.jsx)(u,{icon:(0,t.jsx)(l.j$,{fill:le}),color:le,label:r.t`Help Center`}),(0,t.jsx)(d.H3,{color:le,children:(0,t.jsx)(r.cC,{children:"Get support"})})]}),(0,t.jsxs)(se,{initial:"initial",whileHover:"hover",href:"https://blog.uniswap.org/",target:"_blank",rel:"noopener noreferrer",backgroundColor:i?"rgba(98, 84, 50, 0.16)":"rgba(98, 84, 50, 0.04)",children:[(0,t.jsx)(u,{icon:(0,t.jsx)(l.p1,{fill:ce}),color:ce,label:r.t`Blog`}),(0,t.jsx)(d.H3,{color:ce,children:(0,t.jsx)(r.cC,{children:"Insights and news from the team"})})]}),(0,t.jsxs)(pe,{backgroundColor:e.accent2,initial:"initial",whileHover:"hover",href:"https://twitter.com/Uniswap/",target:"_blank",rel:"noopener noreferrer",children:[(0,t.jsx)(u,{icon:(0,t.jsx)(l.r_,{fill:e.accent1}),color:e.accent1,label:r.t`Stay connected`}),(0,t.jsx)(d.H3,{color:e.accent1,children:(0,t.jsx)(r.cC,{children:"Follow @Uniswap on X for the latest updates"})})]})]})]})})})}var he=n(94284),ge=n(26880),me=n(54972),ue=n(36399),we=n(62652);const fe=(0,c.E)(o.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\components\\StatCard__Mask",componentId:"sc-bb48ffaf-0"})`
  position: relative;
  display: flex;
  flex: 0;
  min-height: 52px;
  width: 100%;
  overflow: hidden;
  @media (max-width: 1024px) {
    min-height: 40px;
  }
  @media (max-width: 768px) {
    min-height: 32px;
  }
`),be=(0,c.E)(o.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\components\\StatCard__Char",componentId:"sc-bb48ffaf-1"})`
  font-variant-numeric: lining-nums tabular-nums;
  font-family: Basel;
  font-size: 52px;
  font-style: normal;
  font-weight: 500;
  color: ${({color:e})=>e};
  line-height: 52px;
  @media (max-width: 1280px) {
    font-size: 40px;
    line-height: 40px;
  }
  @media (max-width: 1050px) {
    font-size: 32px;
    line-height: 32px;
  }
  @media (max-width: 850px) {
    font-size: 28px;
    line-height: 28px;
  }
  @media (max-width: 396px) {
    font-size: 22px;
    line-height: 22px;
  }
`),ve=o.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\components\\StatCard__Container",componentId:"sc-bb48ffaf-2"})`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  border-radius: 20px;

  width: 100%;
  height: 100%;
  max-height: 230px;

  padding: 32px;

  background-color: ${({theme:e,live:i})=>i?"#2FBA610A":e.surface2};
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 24px;
  }
  @media (max-width: 768px) {
  }
  background-image: radial-gradient(rgba(${({theme:e})=>{const{red:i,green:n,blue:t}=(0,ue.Oq)(e.neutral2);return`${i}, ${n}, ${t}`}}, 0.25) 0.5px, transparent 0)};
  background-size: 12px 12px;
  background-position: -8.5px -8.5px;
`,ye=(0,c.E)(o.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\components\\StatCard__SpriteContainer",componentId:"sc-bb48ffaf-3"})`
  pointer-events: none;
  diplay: flex;
  flex-direction: column;
  color: ${({theme:e})=>e.neutral2};
`),Ce=o.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\components\\StatCard__LiveIcon",componentId:"sc-bb48ffaf-4"})`
  display: ${({display:e})=>e};
  width: 6px;
  height: 6px;

  border-radius: 50%;
  background: ${({theme:e})=>e.success};

  animation-name: ${({theme:e})=>{return i=e.success,o.keyframes`
  0% {
    box-shadow: 0 0 0 0 ${(0,we.jb)(24,i)};
  }
  100% {
    box-shadow: 0 0 0 4px ${(0,we.jb)(24,i)};
  }
`;var i}};
  animation-fill-mode: forwards;
  animation-direction: alternate;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`,je=o.default.h3.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\components\\StatCard__Title",componentId:"sc-bb48ffaf-5"})`
  padding: 0;
  margin: 0;
  font-family: Basel;
  font-size: 24px;
  font-style: normal;
  font-weight: 535;
  line-height: 32px; /* 133.333% */
  color: ${({color:e})=>e};
  @media (max-width: 1024px) {
    font-size: 18px;
    line-height: 26px;
  }
  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 20px;
  }
`;const ke=["0","1","2","3","4","5","6","7","8","9"],_e=["\xa5","\xa3","\u20ac","$"],Ie=[" ","K","M","B","T"],Le=[",","."];function Fe(e){const i=(0,o.useTheme)();return(0,t.jsxs)(ve,{live:e.live,children:[(0,t.jsxs)(he.ZP,{align:"center",gap:"sm",children:[(0,t.jsx)(Ce,{display:e.live?"block":"none"}),(0,t.jsx)(je,{color:e.live?i.success:i.neutral2,children:e.title})]}),(0,t.jsx)(Ne,{prefix:e.prefix,suffix:e.suffix,value:e.value,live:e.live,delay:e.delay,inView:e.inView})]})}function Ne({value:e,delay:i,inView:n,live:a}){const r=e.split(""),d=(0,o.useTheme)();return(0,t.jsx)(fe,{initial:"initial",animate:n?"animate":"initial",transition:{staggerChildren:.025,delayChildren:i},children:r.map(((e,i)=>{const n=ke.includes(e)?ke:Le.includes(e)?Le:_e.includes(e)?_e:Ie;return(0,t.jsx)(Te,{char:e,charset:n,color:a?d.success:d.neutral1},i)}))})}function Te({char:e,charset:i,color:n}){const a=(o=i,r=i.indexOf(e),o.slice(r,o.length).concat(o.slice(0,r)));var o,r;const d=a.indexOf(e),s={initial:{y:d+-180},animate:{y:-60*d,transition:{duration:1,type:"spring"}}};return(0,t.jsx)(ye,{variants:s,children:a.map(((e,i)=>{const a={initial:{opacity:.25},animate:{opacity:d===i?1:0,transition:{opacity:{duration:.5},duration:1,type:"spring"}}};return(0,t.jsx)(be,{variants:a,color:n,children:e},i)}))})}const $e=o.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\sections\\Stats__Container",componentId:"sc-e5c47d41-0"})`
  width: 100%;
  max-width: 1360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;

  @media (max-width: 960px) {
    max-height: 360px;
  }

  @media (max-width: 768px) {
    max-height: none;
    padding: 0 48px;
  }
  @media (max-width: 468px) {
    padding: 0 24px;
  }
`,Se=(0,o.default)(d.x).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\sections\\Stats__SectionLayout",componentId:"sc-e5c47d41-1"})`
  width: 100%;
  max-width: 1280px;
`,ze=(0,o.default)(d.x).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\sections\\Stats__HideWhenLarge",componentId:"sc-e5c47d41-2"})`
  @media (min-width: 768px) {
    display: none;
  }
`,Ee=(0,o.default)(d.x).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\sections\\Stats__HideWhenSmall",componentId:"sc-e5c47d41-3"})`
  @media (max-width: 768px) {
    display: none;
  }
`,Be=o.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\sections\\Stats__LeftTop",componentId:"sc-e5c47d41-4"})`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
`,Me=o.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\sections\\Stats__RightTop",componentId:"sc-e5c47d41-5"})`
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 3;
`,De=o.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\sections\\Stats__LeftBottom",componentId:"sc-e5c47d41-6"})`
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 3;
  grid-row-end: 5;
`,Pe=o.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\sections\\Stats__RightBottom",componentId:"sc-e5c47d41-7"})`
  grid-column-start: 3;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 5;
`,Ae=o.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\sections\\Stats__CardLayout",componentId:"sc-e5c47d41-8"})`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px;

  overflow: hidden;

  @media (max-width: 768px) {
    height: 320px;
    grid-column-gap: 12px;
    grid-row-gap: 12px;
  }

  @media (max-width: 468px) {
    grid-column-gap: 8px;
    grid-row-gap: 8px;
  }
`,He=o.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\sections\\Stats__Layout",componentId:"sc-e5c47d41-9"})`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 234px);
  @media (max-width: 960px) {
    grid-template-rows: repeat(2, 160px);
  }
  @media (max-width: 768px) {
    grid-template-rows: repeat(2, 200px);
  }
  grid-column-gap: 24px;
  grid-row-gap: 16px;
`,Ve=o.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\sections\\Stats__Left",componentId:"sc-e5c47d41-10"})`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 3;
  height: 100%;
`,Re=o.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\sections\\Stats__Right",componentId:"sc-e5c47d41-11"})`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  height: 100%;
`,We=(0,o.default)(me.dL).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\sections\\Stats__LearnMoreButton",componentId:"sc-e5c47d41-12"})`
  padding: 12px 16px;
  border-radius: 24px;
  border: 0;
  background-color: ${({theme:e})=>e.surface2};
  font-family: Basel;
  font-size: 20px;
  font-style: normal;
  font-weight: 535;
  line-height: 24px;
  color: ${({theme:e})=>e.neutral1};
  ${me.iV}
`,qe=(0,o.default)(ge.Z).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\sections\\Stats__LearnMoreArrow",componentId:"sc-e5c47d41-13"})`
  size: 24px;
  stroke: ${({theme:e})=>e.surface2};
  fill: ${({theme:e})=>e.neutral1};
`,Ge=()=>(0,t.jsx)(r.cC,{children:"Uniswap products are powered by the Uniswap Protocol. The protocol is the largest onchain marketplace, with billions of dollars in weekly volume across thousands of tokens on Ethereum and 7+ additional chains."});function Ue(){return(0,t.jsx)(We,{href:"https://info.uniswap.org",children:(0,t.jsxs)(he.ZP,{gap:"sm",align:"center",children:[(0,t.jsx)(r.cC,{children:"Learn more"}),(0,t.jsx)(qe,{})]})})}function Oe(){const{ref:e,inView:i}=(()=>{const e=(0,a.useRef)(),[i,n]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{const i=new IntersectionObserver((e=>{if(!e.length)return;const[i]=e;i.isIntersecting&&n(!0)}),{threshold:.25});return i.observe(e.current),()=>{i.disconnect()}}),[e]),{ref:e,inView:i}})();return(0,t.jsx)($e,{children:(0,t.jsxs)(Se,{ref:e,children:[(0,t.jsx)(Ee,{children:(0,t.jsxs)(He,{children:[(0,t.jsx)(Ve,{children:(0,t.jsxs)(d.x,{direction:"column","justify-content":"space-between",height:"100%",children:[(0,t.jsx)(d.H2,{children:(0,t.jsx)(r.cC,{children:"Trusted by millions"})}),(0,t.jsxs)(d.x,{bottom:"0",position:"absolute",direction:"column",maxWidth:"480px",gap:"24px",children:[(0,t.jsx)(d.m,{children:(0,t.jsx)(Ge,{})}),(0,t.jsx)(Ue,{})]})]})}),(0,t.jsx)(Re,{children:(0,t.jsx)(Qe,{inView:i})})]})}),(0,t.jsxs)(ze,{maxWidth:"1280px",direction:"column",gap:"32px",children:[(0,t.jsx)(d.H2,{children:(0,t.jsx)(r.cC,{children:"Trusted by millions"})}),(0,t.jsx)(Qe,{inView:i}),(0,t.jsx)(d.m,{children:(0,t.jsx)(Ge,{})}),(0,t.jsx)(Ue,{})]})]})})}function Qe({inView:e}){var i,n,o,d;const{formatNumber:s}=(0,P.Gb)(),p=(0,D.eX0)({variables:{version:D.Qeo.V2}}),l=(0,D.eX0)({variables:{version:D.Qeo.V3}}),c=(0,a.useMemo)((()=>{var e,i,n,t;const a=null===(i=p)||void 0===i||null===(e=i.data)||void 0===e?void 0:e.historicalProtocolVolume,o=a&&a.length>=2?a[a.length-2].value:0,r=null===(t=l)||void 0===t||null===(n=t.data)||void 0===n?void 0:n.historicalProtocolVolume;return o+(r&&r.length>=2?r[r.length-2].value:0)}),[null===(n=p)||void 0===n||null===(i=n.data)||void 0===i?void 0:i.historicalProtocolVolume,null===(d=l)||void 0===d||null===(o=d.data)||void 0===o?void 0:o.historicalProtocolVolume]);return(0,t.jsxs)(Ae,{children:[(0,t.jsx)(Be,{children:(0,t.jsx)(Fe,{title:r.t`All time volume`,value:s({input:2*10**12,type:P.sw.FiatTokenStats}),delay:0,inView:e})}),(0,t.jsx)(Me,{children:(0,t.jsx)(Fe,{title:r.t`All time swappers`,value:s({input:16.6*10**6,type:P.sw.TokenQuantityStats}),delay:.2,inView:e})}),(0,t.jsx)(De,{children:(0,t.jsx)(Fe,{title:r.t`All time LP fees `,value:s({input:3.4*10**9,type:P.sw.FiatTokenStats}),delay:.4,inView:e})}),(0,t.jsx)(Pe,{children:(0,t.jsx)(Fe,{title:r.t`24H volume`,value:s({input:c||5e8,type:P.sw.FiatTokenStats}),live:!0,delay:.6,inView:e})})]})}const Xe=o.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\Landing\\Fold__Container",componentId:"sc-d2eb2109-0"})`
  gap: 120px;
  @media (max-width: 1024px) {
    gap: 80px;
  }
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  z-index: 1;
`,Ze=(0,a.forwardRef)((function(e,i){return(0,t.jsxs)(Xe,{children:[(0,t.jsx)("div",{ref:i,children:(0,t.jsx)(ee,{})}),(0,t.jsx)(Oe,{}),(0,t.jsx)(xe,{}),(0,t.jsx)(ie.$,{})]})}))}}]);
//# sourceMappingURL=9699.9fd95b45.chunk.js.map