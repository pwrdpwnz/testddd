"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[8859],{78859:(e,n,r)=>{r.r(n),r.d(n,{default:()=>tn});var t=r(92936),o=r(5985),a=r(12722),i=r(66057),l=r(78129),s=r(45779),d=r(6282),c=r(14411),p=r(99582),m=r(58690),u=r(76907);function x(e,n,r,t,o,a,i){try{var l=e[a](i),s=l.value}catch(d){return void r(d)}l.done?n(s):Promise.resolve(s).then(t,o)}function h(e){return function(){var n=this,r=arguments;return new Promise((function(t,o){var a=e.apply(n,r);function i(e){x(a,t,o,i,l,"next",e)}function l(e){x(a,t,o,i,l,"throw",e)}i(void 0)}))}}const f=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\Carousel__CarouselContainer",componentId:"sc-718aa339-0"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,g=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\Carousel__CarouselCardContainer",componentId:"sc-718aa339-1"})`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  max-width: 100%;
  height: 390px;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    max-width: 600px;
  }
`,w=(0,c.default)(u.a.div).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\Carousel__CarouselItemCard",componentId:"sc-718aa339-2"})`
  display: flex;
  justify-content: center;
  padding: 4px 12px 32px;
  position: absolute;
  will-change: transform;
  width: calc(100%);
  height: calc(100%);

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    padding: 4px 32px 32px;
  }
`,b=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\Carousel__CarouselItemIcon",componentId:"sc-718aa339-3"})`
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: none;
  user-select: none;
  height: calc(100%);
  padding: 4px 0 32px;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    display: flex;
  }

  :hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,C=800,y=({children:e,activeIndex:n,toggleNextSlide:r})=>{const o=(0,s.useCallback)(((n,r=e.length)=>(0,l.ef)(n,r)),[e]),a=(0,s.useCallback)(((e,n,r)=>(0,l.E)(e,n,r,o)),[o]),[i,d]=(0,u.bY)(e.length,(n=>({x:(n<e.length-1?n:-1)*C}))),c=(0,s.useRef)([0,1]),p=(0,s.useCallback)(((n,r)=>{const t=o(Math.floor(n/C)%e.length),i=r<0?e.length-2:1;d((o=>{const s=a(o,t,i),d=a(o,c.current[0],c.current[1]),p=(0,l.Z1)(t,i,s,e.length,n);return{x:-n%(C*e.length)+C*p,immediate:r<0?d>s:d<s,config:{tension:250,friction:30}}})),c.current=[t,i]}),[o,a,d,e.length]),x=(0,s.useRef)(0);(0,s.useEffect)((()=>{p(n*C,x.current)}),[n,p]);const y=(0,s.useCallback)((e=>{x.current=e,r(e)}),[r]);return(0,s.useEffect)((()=>{const e=setInterval(h((function*(){y(1)})),7e3);return()=>{clearInterval(e)}}),[y,n]),(0,t.jsxs)(f,{children:[(0,t.jsx)(b,{onClick:()=>y(-1),children:(0,t.jsx)(m.wy,{width:"16px",height:"16px"})}),(0,t.jsx)(g,{children:i.map((({x:n},r)=>(0,t.jsx)(w,{style:{x:n},children:e[r]},r)))}),(0,t.jsx)(b,{onClick:()=>y(1),children:(0,t.jsx)(m.XC,{width:"16px",height:"16px"})})]})},v=({children:e})=>(0,t.jsx)(y,{activeIndex:0,toggleNextSlide:()=>{},children:[e]});var j=r(32546),k=r(82743),_=r(13901),T=r(47263),F=r(68798),N=r(66136);const $=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__CarouselCardBorder",componentId:"sc-a2f657bb-0"})`
  width: 100%;
  position: relative;
  border-radius: 21px;
  cursor: pointer;
  border: 1px solid transparent;
  transition-property: border-color;
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  transition-timing-function: ${({theme:e})=>e.transition.timing.inOut};

  :hover {
    border: 1px solid ${({theme:e})=>e.surface3};
  }

  ::after {
    content: '';
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 21px;
    z-index: -1;
    box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
    transition-property: opacity;
    transition-duration: ${({theme:e})=>e.transition.duration.fast};
    transition-timing-function: ${({theme:e})=>e.transition.timing.inOut};
  }

  :hover::after {
    opacity: 1;
  }
`,S=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__CardHeaderContainer",componentId:"sc-a2f657bb-1"})`
  position: relative;
  background-image: ${({src:e})=>`url(${e})`};
  background-size: cover;
  background-position: center;
`,I=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__LoadingCardHeaderContainer",componentId:"sc-a2f657bb-2"})`
  position: relative;
  animation: ${j.gz} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:e})=>e.surface3} 25%,
    ${({theme:e})=>e.surface3} 50%,
    ${({theme:e})=>e.surface3} 75%
  );
  will-change: background-position;
  background-size: 400%;
`,H=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__CardHeaderColumn",componentId:"sc-a2f657bb-3"})`
  position: relative;
  display: flex;
  flex: 1;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  height: 202px;
  justify-content: center;
  padding: 0 40px;
  z-index: 1;
`,z=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__IconContainer",componentId:"sc-a2f657bb-4"})`
  display: inline-flex;
  vertical-align: text-bottom;
  margin-left: 2px;
  transform: translateY(-2px) translateX(2px);
`,E=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__CollectionNameContainer",componentId:"sc-a2f657bb-5"})`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: center;
  max-height: 56px;
`,P=(0,c.default)(k.X).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__LoadingCollectionNameContainer",componentId:"sc-a2f657bb-6"})`
  width: 50%;
`,B=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__HeaderOverlay",componentId:"sc-a2f657bb-7"})`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%, rgba(0, 0, 0, 0.08));
  bottom: 0px;
  left: 0px;
  position: absolute;
  right: 0px;
  top: 0px;
  z-index: 0;

  // overlay workaround for firefox only
  @supports (-moz-appearance: none) {
    bottom: -1px;
  }
`,D=c.default.img.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__CollectionImage",componentId:"sc-a2f657bb-8"})`
  width: 86px;
  height: 86px;
  background: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  border: 2px solid ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  border-radius: 100px;
`,X=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__LoadingCollectionImage",componentId:"sc-a2f657bb-9"})`
  width: 86px;
  height: 86px;
  border-radius: 100px;
  animation: ${j.gz} 1.5s infinite;
  animation-fill-mode: both;
  background: linear-gradient(
    to left,
    ${({theme:e})=>e.surface3} 25%,
    ${({theme:e})=>e.surface3} 50%,
    ${({theme:e})=>e.surface3} 75%
  );
  will-change: background-position;
  background-size: 400%;
`,O=(0,c.default)(k.X).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__LoadingTableElement",componentId:"sc-a2f657bb-10"})`
  width: 50px;
`,V=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__TableElement",componentId:"sc-a2f657bb-11"})`
  display: flex;
  align-items: center;
  gap: 6px;
`,L=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__FirstColumnTextWrapper",componentId:"sc-a2f657bb-12"})``,M=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__CardBottomContainer",componentId:"sc-a2f657bb-13"})`
  display: grid;
  flex: 1;
  gap: 8px;
  grid-template-columns: auto auto auto;
  padding: 16px 16px 20px;
`,R=c.default.img.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__MarketplaceIcon",componentId:"sc-a2f657bb-14"})`
  width: 20px;
  height: 20px;
`,G=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__CarouselCardContainer",componentId:"sc-a2f657bb-15"})`
  display: flex;
  flex-direction: column;
  background-color: ${({theme:e})=>e.surface1};
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 20px;
  overflow: hidden;
  height: 100%;

  ${V}:nth-child(3n-1), ${O}:nth-child(3n-1) {
    justify-self: center;
  }

  ${V}:nth-child(3n), ${O}:nth-child(3n) {
    justify-self: right;
  }

  @media (max-width: ${({theme:e})=>e.breakpoint.xs}px) or ((min-width: ${({theme:e})=>e.breakpoint.sm}px) and (max-width: 880px)) {
    ${L} {
      display: none;
    }
    ${V} {
      justify-self: left !important;
    }
    ${H} {
      padding: 0 20px;
    }
  }
`,A=({marketplace:e,floorInEth:n,listings:r})=>{const{formatNumberOrString:o}=(0,N.Gb)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(V,{children:[(0,t.jsx)(R,{src:`/nft/svgs/marketplaces/${e.toLowerCase()}-grey.svg`,alt:`${e} icon`}),(0,t.jsx)(L,{children:(0,t.jsx)(F.T.BodySmall,{color:"neutral2",children:e})})]}),(0,t.jsx)(V,{children:(0,t.jsx)(F.T.BodySmall,{color:"neutral2",children:Number(n)>0?`${o({input:n,type:N.sw.NFTTokenFloorPriceTrailingZeros})} ETH`:"-"})}),(0,t.jsx)(V,{children:(0,t.jsx)(F.T.BodySmall,{color:"neutral2",children:Number(r)>0?r:"None"})})]})},W=[T.Fz.Opensea,T.Fz.X2Y2,T.Fz.LooksRare],Y={[T.Fz.Opensea]:"OpenSea",[T.Fz.X2Y2]:"X2Y2",[T.Fz.LooksRare]:"LooksRare"},U=({collection:e,onClick:n})=>{var r;const{data:o,loading:a}=(0,_.K)(e.address??""),{formatNumber:i}=(0,N.Gb)();return a?(0,t.jsx)(J,{}):(0,t.jsx)($,{children:(0,t.jsxs)(G,{onClick:n,children:[(0,t.jsx)(q,{collection:e}),(0,t.jsx)(M,{children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(V,{children:[(0,t.jsx)(m.pD,{width:"20",height:"20"}),(0,t.jsx)(L,{children:(0,t.jsx)(F.T.SubHeaderSmall,{color:"userThemeColor",children:"Uniswap"})})]}),(0,t.jsx)(V,{children:e.floor&&(0,t.jsxs)(F.T.SubHeaderSmall,{color:"userThemeColor",children:[i({input:e.floor,type:N.sw.NFTToken})," ETH Floor"]})}),(0,t.jsx)(V,{children:(0,t.jsxs)(F.T.SubHeaderSmall,{color:"userThemeColor",children:[null===(r=o.marketplaceCount)||void 0===r?void 0:r.reduce(((e,n)=>e+n.count),0)," Listings"]})}),W.map((n=>{var r;const a=null===(r=o.marketplaceCount)||void 0===r?void 0:r.find((e=>e.marketplace===n));return a?(0,t.jsx)(A,{marketplace:Y[n],listings:a.count,floorInEth:a.floorPrice},`CarouselCard-key-${e.address}-${a.marketplace}`):null}))]})})]})})},K=()=>(0,t.jsx)(t.Fragment,{children:[...Array(12)].map((e=>(0,t.jsx)(O,{},e)))}),Z=(0,c.default)(F.T.MediumHeader).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\CarouselCard__CollectionName",componentId:"sc-a2f657bb-16"})`
  display: inline;
  vertical-align: text-bottom;
  line-height: 28px;
`,q=({collection:e})=>(0,t.jsxs)(S,{src:e.bannerImageUrl??"",children:[(0,t.jsxs)(H,{children:[(0,t.jsx)(D,{src:e.imageUrl}),(0,t.jsxs)(E,{children:[(0,t.jsx)(Z,{color:"deprecated_accentTextLightPrimary",fontWeight:"500",children:e.name}),e.isVerified&&(0,t.jsx)(z,{children:(0,t.jsx)(m.SA,{width:"24px",height:"24px"})})]})]}),(0,t.jsx)(B,{})]}),J=({collection:e})=>(0,t.jsx)($,{children:(0,t.jsxs)(G,{children:[e?(0,t.jsx)(q,{collection:e}):(0,t.jsxs)(I,{children:[(0,t.jsxs)(H,{children:[(0,t.jsx)(X,{}),(0,t.jsx)(P,{})]}),(0,t.jsx)(B,{})]}),(0,t.jsx)(M,{children:(0,t.jsx)(K,{})})]})}),Q=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\Banner__BannerContainer",componentId:"sc-714be4ba-0"})`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 22px;
  position: relative;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding: 32px 16px;
  }
`,ee=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\Banner__BannerMainArea",componentId:"sc-714be4ba-1"})`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 36px;
  max-width: ${({theme:e})=>e.maxWidth};
  justify-content: space-between;
  z-index: 2;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    flex-direction: column;
    height: 100%;
    gap: 14px;
    margin-top: 4px;
    margin-bottom: 6px;
  }
`,ne=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\Banner__HeaderContainer",componentId:"sc-714be4ba-2"})`
  display: flex;
  max-width: 500px;
  font-weight: 535;
  font-size: 72px;
  line-height: 88px;
  align-self: center;
  flex-shrink: 0;
  padding-bottom: 32px;

  color: ${({theme:e})=>e.neutral1};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
    font-size: 48px;
    line-height: 67px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    font-size: 36px;
    line-height: 50px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    line-height: 43px;
    text-align: center;
    padding-bottom: 16px;

    br {
      display: none;
    }
  }

  /* Custom breakpoint to split into two lines on smaller screens */
  @media only screen and (max-width: 550px) {
    font-size: 28px;
    line-height: 34px;
    padding-bottom: 0;

    br {
      display: unset;
    }
  }
`,re=["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"],te=()=>{const e=(0,d.s0)(),{data:n}=(0,i.S)(5+re.length,p._uu.Day),r=(0,s.useMemo)((()=>{var e;return null===(e=n)||void 0===e?void 0:e.filter((e=>e.address&&!re.includes(e.address))).slice(0,5)}),[n]),[o,a]=(0,s.useState)(0),c=(0,s.useCallback)((e=>{r&&a((n=>(0,l.ef)(n+e,r.length)))}),[r]);return(0,t.jsx)(Q,{children:(0,t.jsxs)(ee,{children:[(0,t.jsxs)(ne,{children:["Better prices. ",(0,t.jsx)("br",{}),"More listings."]}),r?(0,t.jsx)(y,{activeIndex:o,toggleNextSlide:c,children:r.map((n=>(0,t.jsx)(U,{collection:n,onClick:()=>e(`/nfts/collection/${n.address}`)},n.address)))}):(0,t.jsx)(v,{children:(0,t.jsx)(J,{})})]})})};var oe=r(68588),ae=r(79132),ie=r(54972),le=r(66284),se=r(19478),de=r(97341);r(12143),r(49484);const ce=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\Cells\\Cells__TruncatedText",componentId:"sc-4eb0bc9a-0"})`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,pe=(0,c.default)(ce).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\Cells\\Cells__CollectionNameContainer",componentId:"sc-4eb0bc9a-1"})`
  display: flex;
  padding: 14px 0px 14px 8px;
  align-items: center;
`,me=(0,c.default)(ce).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\Cells\\Cells__CollectionName",componentId:"sc-4eb0bc9a-2"})`
  margin-left: 8px;
`,ue=(0,c.default)(ie.Tv.SubHeader).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\Cells\\Cells__TruncatedSubHeader",componentId:"sc-4eb0bc9a-3"})`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,xe=(0,c.default)(ie.Tv.SubHeaderSmall).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\Cells\\Cells__TruncatedSubHeaderSmall",componentId:"sc-4eb0bc9a-4"})`
  color: ${({theme:e})=>`${e.neutral1}`};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,he=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\Cells\\Cells__RoundedImage",componentId:"sc-4eb0bc9a-5"})`
  height: 36px;
  width: 36px;
  border-radius: 36px;
  background: ${({src:e,theme:n})=>e?`url(${e})`:n.surface2};
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
`,fe=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\Cells\\Cells__ChangeCellContainer",componentId:"sc-4eb0bc9a-6"})`
  display: flex;
  color: ${({theme:e,change:n})=>n>=0?e.success:e.critical};
  justify-content: flex-end;
  align-items: center;
  gap: 2px;
`,ge=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\Cells\\Cells__EthContainer",componentId:"sc-4eb0bc9a-7"})`
  display: flex;
  justify-content: flex-end;
`,we=({value:e})=>{const n=(0,de.dD)();return(0,t.jsxs)(pe,{children:[(0,t.jsx)(he,{src:e.logo}),(0,t.jsx)(me,{children:n?(0,t.jsx)(xe,{children:e.name}):(0,t.jsx)(ue,{children:e.name})}),e.isVerified&&(0,t.jsx)("span",{className:"rgw6ezl3 rgw6ez453 rgw6ez2o3 rgw6ez19r rgw6ez12r rgw6ez45x",children:(0,t.jsx)(m.SA,{})})]})},be=({value:e})=>{const{formatNumberOrString:n}=(0,N.Gb)();return(0,t.jsx)("span",{children:e.value?n({input:e.value,type:N.sw.NFTCollectionStats}):"-"})},Ce=(e,n,r,t)=>e===T.VG.ETH?r:t&&r?t*(n?parseFloat((0,le.formatEther)(r)):r):void 0,ye=({value:e,denomination:n,usdPrice:r})=>{const{formatNumberOrString:o}=(0,N.Gb)(),a=Ce(n,!1,e,r),i=n===T.VG.ETH,l=o({input:a,type:i?N.sw.NFTToken:N.sw.FiatTokenStats})+(i?" ETH":""),s=(0,de.dD)()?ie.Tv.BodySmall:ie.Tv.BodyPrimary;return(0,t.jsx)(ge,{children:(0,t.jsx)(s,{children:e?l:"-"})})},ve=({value:e})=>(0,t.jsx)(ie.Tv.BodyPrimary,{children:e}),je=({value:e,denomination:n,usdPrice:r})=>{const{formatNumberOrString:o}=(0,N.Gb)(),a=Ce(n,!1,e,r),i=n===T.VG.ETH,l=o({input:a,type:i?N.sw.WholeNumber:N.sw.FiatTokenStats})+(i?" ETH":"");return(0,t.jsx)(ge,{children:(0,t.jsx)(ie.Tv.BodyPrimary,{children:l})})},ke=({change:e,children:n})=>{const r=(0,de.dD)()?ie.Tv.BodySmall:ie.Tv.BodyPrimary;return(0,t.jsxs)(fe,{change:e??0,children:[(0,t.jsx)(se.Kx,{delta:e}),(0,t.jsx)(r,{color:"currentColor",children:n||`${e?Math.abs(Math.round(e)):0}%`})]})};var _e=r(98643),Te=r(91527),Fe=r(40403),Ne=r(72993),$e=r(80305),Se="_1mor7veh rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez2of rgw6ez27x rgw6ez1jl rgw6ez463 rgw6ez48x",Ie="_1mor7vea rgw6ez4qf rgw6ez16r rgw6ez80x rgw6ez7zl",He="_1mor7ved rgw6ezd3 rgw6ezb9 rgw6eze3 rgw6ez4bf rgw6ez2or rgw6ez289",ze="rgw6ezr9 rgw6ez55f rgw6ez895 rgw6ez805";const Ee=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\Table__RankCellContainer",componentId:"sc-d8f49df3-0"})`
  display: flex;
  align-items: center;
  padding-left: 24px;
  gap: 12px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-left: 8px;
  }
`,Pe=c.default.tr.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\Table__StyledRow",componentId:"sc-d8f49df3-1"})`
  cursor: pointer;
  :hover {
    background: ${({theme:e})=>e.surface3};
  }
  :active {
    background: ${({theme:e})=>e.deprecated_stateOverlayPressed};
  }
`,Be=c.default.tr.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\Table__StyledLoadingRow",componentId:"sc-d8f49df3-2"})`
  height: 80px;
`,De=c.default.th.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\Table__StyledHeader",componentId:"sc-d8f49df3-3"})`
  ${({disabled:e})=>!e&&"cursor: pointer;"}

  :hover {
    ${({theme:e,disabled:n})=>!n&&`opacity: ${e.opacity.hover};`}
  }

  :active {
    ${({theme:e,disabled:n})=>!n&&`opacity: ${e.opacity.click};`}
  }
`,Xe=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\Table__StyledLoadingHolder",componentId:"sc-d8f49df3-4"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`,Oe=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\Table__StyledCollectionNameHolder",componentId:"sc-d8f49df3-5"})`
  display: flex;
  margin-left: 24px;
  gap: 8px;
  align-items: center;
`,Ve=(0,c.default)(k.X).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\Table__StyledImageHolder",componentId:"sc-d8f49df3-6"})`
  width: 36px;
  height: 36px;
  border-radius: 36px;
`,Le=(0,c.default)(k.X).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\Table__StyledRankHolder",componentId:"sc-d8f49df3-7"})`
  width: 8px;
  height: 16px;
  margin-right: 12px;
`,Me=10;function Re({columns:e,data:n,smallHiddenColumns:r,mediumHiddenColumns:i,largeHiddenColumns:l,...p}){const m=(0,c.useTheme)(),u=(0,Ne.x)(),{width:x}=(0,de.iP)(),h=(0,de.dD)(),{getTableProps:f,getTableBodyProps:g,headerGroups:w,rows:b,prepareRow:C,setHiddenColumns:y,visibleColumns:v}=(0,Fe.useTable)({columns:e,data:n,initialState:{sortBy:[{desc:!0,id:Ae.Volume}]},...p},Fe.useSortBy),j=(0,d.s0)();return(0,s.useEffect)((()=>{x&&(x<=m.breakpoint.sm?y(r):x<=m.breakpoint.md?y(i):x<=m.breakpoint.lg?y(l):y([]))}),[x,y,e,r,i,l,m.breakpoint]),0===n.length?(0,t.jsx)(Ge,{headerGroups:w,visibleColumns:v,...f()}):(0,t.jsxs)("table",{...f(),className:Ie,children:[(0,t.jsx)("thead",{className:ze,children:w.map((e=>(0,s.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map(((e,n)=>(0,s.createElement)(De,{className:He,...e.getHeaderProps(e.getSortByToggleProps()),style:{textAlign:0===n?"left":"right",paddingLeft:0===n?h?"16px":"52px":0},disabled:e.disableSortBy,key:n,children:[(0,t.jsx)($e.n,{as:"span",color:"neutral2",position:"relative",children:e.isSorted?e.isSortedDesc?(0,t.jsx)(Te.V,{width:"16px",height:"16px",style:{position:"absolute",top:3}}):(0,t.jsx)(_e.c,{width:"16px",height:"16px",style:{position:"absolute",top:3}}):""}),(0,t.jsx)($e.n,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")})]}))))))}),(0,t.jsx)("tbody",{...g(),children:b.map(((e,n)=>(C(e),(0,t.jsx)(a.M8,{events:[o.TM.onClick],name:o.Yz.NFT_TRENDING_ROW_SELECTED,properties:{collection_address:e.original.collection.address,chain_id:u},element:o.xo.NFT_TRENDING_ROW,children:(0,s.createElement)(Pe,{...e.getRowProps(),key:e.id,onClick:()=>j(`/nfts/collection/${e.original.collection.address}`),"data-testid":"nft-trending-collection"},e.cells.map(((e,r)=>(0,s.createElement)("td",{className:"_1mor7vef rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez2o3 rgw6ez27l rgw6ez1jl rgw6ez463 rgw6ez48x",...e.getCellProps(),key:r,style:{maxWidth:0===r?h?"240px":"360px":"160px"}},0===r?(0,t.jsxs)(Ee,{children:[!h&&(0,t.jsx)(ie.Tv.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:n+1}),e.render("Cell")]}):e.render("Cell")))))},n))))})]})}function Ge({headerGroups:e,visibleColumns:n,...r}){return(0,t.jsxs)("table",{...r,className:Ie,children:[(0,t.jsx)("thead",{className:ze,children:e.map((e=>(0,s.createElement)("tr",{...e.getHeaderGroupProps(),key:e.id},e.headers.map(((e,n)=>(0,s.createElement)(De,{className:He,...e.getHeaderProps(e.getSortByToggleProps()),style:{textAlign:0===n?"left":"right",paddingLeft:0===n?"52px":0},disabled:0===n,key:n,children:[(0,t.jsx)($e.n,{as:"span",color:"accent1",position:"relative",children:e.isSorted?e.isSortedDesc?(0,t.jsx)(Te.V,{width:"16px",height:"16px",style:{position:"absolute",marginTop:"2px"}}):(0,t.jsx)(_e.c,{width:"16px",height:"16px",style:{position:"absolute",marginTop:"2px"}}):""}),(0,t.jsx)($e.n,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")})]}))))))}),(0,t.jsx)("tbody",{...r,children:[...Array(Me)].map(((e,r)=>(0,t.jsx)(Be,{children:[...Array(n.length)].map(((e,n)=>(0,t.jsx)("td",{className:Se,children:0===n?(0,t.jsxs)(Oe,{children:[(0,t.jsx)(Le,{}),(0,t.jsx)(Ve,{}),(0,t.jsx)(k.X,{})]}):(0,t.jsx)(Xe,{children:(0,t.jsx)(k.X,{})})},n)))},r)))})]})}var Ae;!function(e){e.Volume="Volume",e.VolumeChange="Volume change",e.Floor="Floor",e.FloorChange="Floor change",e.Sales="Sales",e.Items="Items",e.Owners="Owners"}(Ae||(Ae={}));const We=(e,n)=>e?n?Math.round(1e5*e)>=Math.round(1e5*n)?1:-1:1:-1,Ye=({data:e,timePeriod:n})=>{const r=(0,s.useMemo)((()=>(e,n)=>We(e.original.floor.value,n.original.floor.value)),[]),o=(0,s.useMemo)((()=>(e,n)=>We(e.original.floor.change,n.original.floor.change)),[]),a=(0,s.useMemo)((()=>(e,n)=>We(e.original.volume.value,n.original.volume.value)),[]),i=(0,s.useMemo)((()=>(e,n)=>We(e.original.volume.change,n.original.volume.change)),[]),l=(0,s.useMemo)((()=>[{Header:"Collection name",accessor:"collection",Cell:we,disableSortBy:!0},{id:Ae.Floor,Header:Ae.Floor,accessor:({floor:e})=>e.value,sortType:r,Cell:function(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ye,{value:e.row.original.floor.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice}),n!==T.XH.AllTime&&(0,t.jsx)(ie.SF,{children:(0,t.jsx)(ke,{change:e.row.original.floor.change})})]})}},{id:Ae.FloorChange,Header:Ae.FloorChange,accessor:({floor:e})=>e.value,sortDescFirst:!0,disableSortBy:n===T.XH.AllTime,sortType:o,Cell:function(e){return n===T.XH.AllTime?(0,t.jsx)(ve,{value:"-"}):(0,t.jsx)(ke,{change:e.row.original.floor.change})}},{id:Ae.Volume,Header:Ae.Volume,accessor:({volume:e})=>e.value,sortDescFirst:!0,sortType:a,Cell:function(e){return(0,t.jsx)(je,{value:e.row.original.volume.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice})}},{id:Ae.VolumeChange,Header:Ae.VolumeChange,accessor:({volume:e})=>e.value,sortDescFirst:!0,disableSortBy:n===T.XH.AllTime,sortType:i,Cell:function(e){const{change:r}=e.row.original.volume;return n===T.XH.AllTime?(0,t.jsx)(ve,{value:"-"}):r&&r>=9999?(0,t.jsxs)(ke,{change:r,children:[">9999","%"]}):(0,t.jsx)(ke,{change:r})}},{id:Ae.Items,Header:Ae.Items,accessor:"totalSupply",sortDescFirst:!0,Cell:function(e){return(0,t.jsx)(be,{value:{value:e.row.original.totalSupply}})}},{Header:Ae.Owners,accessor:({owners:e})=>e.value,sortDescFirst:!0,Cell:function(e){return(0,t.jsx)(be,{value:e.row.original.owners})}}]),[o,r,i,a,n]);return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(Re,{smallHiddenColumns:[Ae.Items,Ae.FloorChange,Ae.Volume,Ae.VolumeChange,Ae.Owners],mediumHiddenColumns:[Ae.Items,Ae.FloorChange,Ae.VolumeChange,Ae.Owners],largeHiddenColumns:[Ae.Items,Ae.Owners],data:e,columns:l})})},Ue=[{label:"1D",value:T.XH.OneDay},{label:"1W",value:T.XH.SevenDays},{label:"1M",value:T.XH.ThirtyDays},{label:"All",value:T.XH.AllTime}],Ke=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\TrendingCollections__ExploreContainer",componentId:"sc-56133655-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${({theme:e})=>e.maxWidth};
  padding: 0 16px;
`,Ze=c.default.h1.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\TrendingCollections__StyledHeader",componentId:"sc-56133655-1"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 36px;
  line-height: 44px;
  font-weight: 535;
  margin: 0;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    font-size: 20px;
    line-height: 28px;
  }
`,qe=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\TrendingCollections__FiltersRow",componentId:"sc-56133655-2"})`
  display: flex;
  justify-content: space-between;
  margin-top: 36px;
  margin-bottom: 20px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    margin-bottom: 16px;
    margin-top: 16px;
  }
`,Je=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\TrendingCollections__Filter",componentId:"sc-56133655-3"})`
  display: flex;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 16px;
  padding: 4px;
`,Qe=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\TrendingCollections__Selector",componentId:"sc-56133655-4"})`
  padding: 8px 12px;
  border-radius: 12px;
  background: ${({active:e,theme:n})=>e?n.surface3:"none"};
  cursor: pointer;

  ${oe.cR}
`,en=(0,c.default)(ie.Tv.SubHeader).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\explore\\TrendingCollections__StyledSelectorText",componentId:"sc-56133655-5"})`
  color: ${({theme:e,active:n})=>n?e.neutral1:e.neutral2};
`;const nn=()=>{const{formatterLocalCurrency:e}=(0,N.h2)(),[n,r]=(0,s.useState)(T.XH.OneDay),[o,a]=(0,s.useState)(!0),{data:l,loading:d}=(0,i.S)(100,function(e){switch(e){case T.XH.OneDay:return p._uu.Day;case T.XH.SevenDays:return p._uu.Week;case T.XH.ThirtyDays:return p._uu.Month;case T.XH.AllTime:return p._uu.Max;default:return p._uu.Day}}(n)),c=(0,ae.$N)(),m=(0,s.useMemo)((()=>!d&&l?l.map((e=>({...e,collection:{name:e.name,logo:e.imageUrl,address:e.address,isVerified:e.isVerified},volume:{value:e.volume,change:e.volumeChange,type:"eth"},floor:{value:e.floor,change:e.floorChange},owners:{value:e.owners},sales:e.sales,totalSupply:e.totalSupply,denomination:o?T.VG.ETH:T.VG.USD,usdPrice:c}))):[]),[l,d,o,c]);return(0,t.jsxs)(Ke,{children:[(0,t.jsx)(Ze,{children:"Trending NFT collections"}),(0,t.jsxs)(qe,{children:[(0,t.jsx)(Je,{children:Ue.map((e=>(0,t.jsx)(Qe,{active:e.value===n,onClick:()=>r(e.value),children:(0,t.jsx)(en,{lineHeight:"20px",active:e.value===n,children:e.label})},e.value)))}),(0,t.jsxs)(Je,{onClick:()=>a(!o),children:[(0,t.jsx)(Qe,{active:o,children:(0,t.jsx)(en,{lineHeight:"20px",active:o,children:"ETH"})}),(0,t.jsx)(Qe,{active:!o,children:(0,t.jsx)(en,{lineHeight:"20px",active:!o,children:e})})]})]}),(0,t.jsx)(Ye,{data:m,timePeriod:n})]})},rn=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\pages\\explore\\index__ExploreContainer",componentId:"sc-f5d86c41-0"})`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    gap: 16px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    gap: 0px;
  }
`,tn=()=>{const e=(0,ae.cP)((e=>e.setBagExpanded));return(0,s.useEffect)((()=>{e({bagExpanded:!1,manualClose:!1})}),[]),(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(a.fM,{page:o.yJ.NFT_EXPLORE_PAGE,shouldLogImpression:!0,children:(0,t.jsxs)(rn,{children:[(0,t.jsx)(te,{}),(0,t.jsx)(nn,{})]})})})}}}]);
//# sourceMappingURL=8859.a068d3e1.chunk.js.map