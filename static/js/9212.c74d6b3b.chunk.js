"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[9212],{73499:(e,t,n)=>{n.d(t,{Z:()=>h});var i=n(92936),o=n(6823),r=n(30335),s=n(57221),c=n(14411),d=n(86059);const a=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Badge\\RangeBadge__BadgeWrapper",componentId:"sc-52eeb7ae-0"})`
  font-size: 14px;
  display: flex;
  justify-content: flex-end;
`,l=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Badge\\RangeBadge__BadgeText",componentId:"sc-52eeb7ae-1"})`
  font-weight: 535;
  font-size: 12px;
  line-height: 14px;
  margin-right: 8px;
`,u=c.default.span.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Badge\\RangeBadge__ActiveDot",componentId:"sc-52eeb7ae-2"})`
  background-color: ${({theme:e})=>e.success};
  border-radius: 50%;
  height: 8px;
  width: 8px;
`,p=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Badge\\RangeBadge__LabelText",componentId:"sc-52eeb7ae-3"})`
  align-items: center;
  color: ${({color:e})=>e};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;function h({removed:e,inRange:t}){const n=(0,c.useTheme)();return(0,i.jsx)(a,{children:e?(0,i.jsx)(d.ud,{text:(0,i.jsx)(o.cC,{children:"Your position has 0 liquidity, and is not earning fees."}),children:(0,i.jsxs)(p,{color:n.neutral2,children:[(0,i.jsx)(l,{children:(0,i.jsx)(o.cC,{children:"Closed"})}),(0,i.jsx)(r.Z,{width:12,height:12})]})}):t?(0,i.jsx)(d.ud,{text:(0,i.jsx)(o.cC,{children:"The price of this pool is within your selected range. Your position is currently earning fees."}),children:(0,i.jsxs)(p,{color:n.success,children:[(0,i.jsx)(l,{children:(0,i.jsx)(o.cC,{children:"In range"})}),(0,i.jsx)(u,{})]})}):(0,i.jsx)(d.ud,{text:(0,i.jsx)(o.cC,{children:"The price of this pool is outside of your selected range. Your position is not currently earning fees."}),children:(0,i.jsxs)(p,{color:n.deprecated_accentWarning,children:[(0,i.jsx)(l,{children:(0,i.jsx)(o.cC,{children:"Out of range"})}),(0,i.jsx)(s.Z,{width:12,height:12})]})})})}},23116:(e,t,n)=>{n.d(t,{Z:()=>c});var i=n(92936),o=n(86059),r=n(45779);const s=n(14411).default.span.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\HoverInlineText\\index__TextWrapper",componentId:"sc-707bc6e1-0"})`
  margin-left: ${({margin:e})=>e&&"4px"};
  font-size: ${({fontSize:e})=>e??"inherit"};

  @media screen and (max-width: 600px) {
    font-size: ${({adjustSize:e})=>e&&"12px"};
  }
`,c=({text:e,maxCharacters:t=20,margin:n=!1,adjustSize:c=!1,fontSize:d,textColor:a,link:l,...u})=>{const[p,h]=(0,r.useState)(!1);return e?e.length>t?(0,i.jsx)(o.ZP,{text:e,show:p,children:(0,i.jsx)(s,{onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),margin:n,adjustSize:c,textColor:a,link:l,fontSize:d,...u,children:" "+e.slice(0,t-1)+"..."})}):(0,i.jsx)(s,{margin:n,adjustSize:c,link:l,fontSize:d,textColor:a,...u,children:e}):(0,i.jsx)("span",{})}},90652:(e,t,n)=>{n.d(t,{N:()=>A,Z:()=>E});var i=n(92936),o=n(76078),r=n(21651),s=n(73499),c=n(23116),d=n(63415),a=n(94284),l=n(39671),u=n(57899),p=n(55660),h=n(6823),m=n(45779),f=n(43454),x=n(31744),g=n(14411),w=n(66869),I=n(54972),v=n(66136),k=n(5347),y=n(47841),_=n(64370);const j=(0,g.default)(f.rU).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\PositionListItem\\index__LinkRow",componentId:"sc-597d0797-0"})`
  align-items: center;
  display: flex;
  cursor: pointer;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({theme:e})=>e.neutral1};
  padding: 16px;
  text-decoration: none;
  font-weight: 535;

  & > div:not(:first-child) {
    text-align: center;
  }
  :hover {
    background-color: ${({theme:e})=>e.deprecated_hoverDefault};
  }

  @media screen and (min-width: ${w.e.deprecated_upToSmall}px) {
    /* flex-direction: row; */
  }

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    flex-direction: column;
    row-gap: 8px;
  `};
`,S=g.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\PositionListItem\\index__DataLineItem",componentId:"sc-597d0797-1"})`
  font-size: 14px;
`,b=(0,g.default)(S).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\PositionListItem\\index__RangeLineItem",componentId:"sc-597d0797-2"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 4px;
  width: 100%;
`,T=g.default.span.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\PositionListItem\\index__DoubleArrow",componentId:"sc-597d0797-3"})`
  font-size: 12px;
  margin: 0 2px;
  color: ${({theme:e})=>e.neutral1};
`,L=(0,g.default)(I.Tv.BodySmall).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\PositionListItem\\index__RangeText",componentId:"sc-597d0797-4"})`
  font-size: 14px !important;
  word-break: break-word;
  padding: 0.25rem 0.25rem;
  border-radius: 8px;
`,C=(0,g.default)(I.Tv.BodyPrimary).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\PositionListItem\\index__FeeTierText",componentId:"sc-597d0797-5"})`
  margin-left: 8px !important;
  line-height: 12px;
  color: ${({theme:e})=>e.neutral3};
`,P=(0,g.default)(I.Tv.BodySmall).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\PositionListItem\\index__ExtentsText",componentId:"sc-597d0797-6"})`
  color: ${({theme:e})=>e.neutral2};
  display: inline-block;
  line-height: 16px;
  margin-right: 4px !important;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    display: none;
  `};
`,N=g.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\PositionListItem\\index__PrimaryPositionIdData",componentId:"sc-597d0797-7"})`
  display: flex;
  flex-direction: row;
  align-items: center;
  > * {
    margin-right: 8px;
  }
`;function A(e){if(!e)return{};const t=e.amount0.currency,n=e.amount1.currency;if([_.h1,_.Hz,_.AA].some((e=>e.equals(t))))return{priceLower:e.token0PriceUpper.invert(),priceUpper:e.token0PriceLower.invert(),quote:t,base:n};return[...Object.values(_.Fl),_.ML].some((e=>e&&e.equals(n)))||e.token0PriceUpper.lessThan(1)?{priceLower:e.token0PriceUpper.invert(),priceUpper:e.token0PriceLower.invert(),quote:t,base:n}:{priceLower:e.token0PriceLower,priceUpper:e.token0PriceUpper,quote:n,base:t}}function E({token0:e,token1:t,tokenId:n,fee:f,liquidity:g,tickLower:w,tickUpper:_}){var S,E,M,O,R,X,q;const{formatDelta:D,formatTickPrice:B}=(0,v.Gb)(),$=(0,l.dQ)(e),F=(0,l.dQ)(t),U=$?(0,k.B)($):void 0,z=F?(0,k.B)(F):void 0,[,Z]=(0,p.AI)(U??void 0,z??void 0,f),G=(0,m.useMemo)((()=>{if(Z)return new r.Position({pool:Z,liquidity:g.toString(),tickLower:w,tickUpper:_})}),[g,Z,w,_]),V=(0,u.Z)(f,w,_),{priceLower:W,priceUpper:Y,quote:K,base:Q}=A(G),H=K&&(0,k.B)(K),J=Q&&(0,k.B)(Q),ee=!!Z&&(Z.tickCurrent<w||Z.tickCurrent>=_),te="/pools/"+n,ne=null===(S=g)||void 0===S?void 0:S.eq(0);return(0,i.jsxs)(j,{to:te,children:[(0,i.jsxs)(a.m0,{children:[(0,i.jsxs)(N,{children:[(0,i.jsx)(y.ge,{currencies:[J,H],size:18}),(0,i.jsxs)(I.Tv.SubHeader,{children:["\xa0",null===(E=H)||void 0===E?void 0:E.symbol,"\xa0/\xa0",null===(M=J)||void 0===M?void 0:M.symbol]}),(0,i.jsx)(C,{children:D(parseFloat(new o.Percent(f,1e6).toSignificant()))})]}),(0,i.jsx)(s.Z,{removed:ne,inRange:!ee})]}),W&&Y?(0,i.jsxs)(b,{children:[(0,i.jsxs)(L,{children:[(0,i.jsx)(P,{children:(0,i.jsx)(h.cC,{children:"Min: "})}),(0,i.jsxs)("span",{children:[B({price:W,atLimit:V,direction:x.Mb.LOWER})," "]}),(0,i.jsxs)(h.cC,{children:[(0,i.jsx)(c.Z,{text:null===(O=H)||void 0===O?void 0:O.symbol})," per ",(0,i.jsx)(c.Z,{text:(null===(R=J)||void 0===R?void 0:R.symbol)??""})]})]})," ",(0,i.jsxs)(I.Pw,{children:[(0,i.jsx)(T,{children:"\u2194"})," "]}),(0,i.jsxs)(I.Z,{children:[(0,i.jsx)(T,{children:"\u2194"})," "]}),(0,i.jsxs)(L,{children:[(0,i.jsx)(P,{children:(0,i.jsx)(h.cC,{children:"Max:"})}),(0,i.jsxs)("span",{children:[B({price:Y,atLimit:V,direction:x.Mb.UPPER})," "]}),(0,i.jsxs)(h.cC,{children:[(0,i.jsx)(c.Z,{text:null===(X=H)||void 0===X?void 0:X.symbol})," per"," ",(0,i.jsx)(c.Z,{maxCharacters:10,text:null===(q=J)||void 0===q?void 0:q.symbol})]})]})]}):(0,i.jsx)(d.ZP,{})]})}},57899:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(21651),o=n(45779),r=n(31744);function s(e,t,n){return(0,o.useMemo)((()=>({[r.Mb.LOWER]:e&&t?t===(0,i.nearestUsableTick)(i.TickMath.MIN_TICK,i.TICK_SPACINGS[e]):void 0,[r.Mb.UPPER]:e&&n?n===(0,i.nearestUsableTick)(i.TickMath.MAX_TICK,i.TICK_SPACINGS[e]):void 0})),[e,t,n])}},55660:(e,t,n)=>{n.d(t,{$o:()=>I,AI:()=>w,Oh:()=>g,tK:()=>x});var i=n(51371),o=n(76078),r=n(87270),s=n(21651),c=n(21891),d=n(61592),a=n.n(d),l=n(84938),u=n(45779),p=n(72993);function h(e,t,n,i,o,r,s){try{var c=e[r](s),d=c.value}catch(a){return void n(a)}c.done?t(d):Promise.resolve(d).then(i,o)}const m=new i.vU(r.Mt);let f=class{static MAX_ENTRIES=128;static pools=[];static addresses=[];static getPoolAddress(e,t,n,i){this.addresses.length>this.MAX_ENTRIES&&(this.addresses=this.addresses.slice(0,this.MAX_ENTRIES/2));const{address:o}=t,{address:r}=n,c=`${e}:${o}:${r}:${i.toString()}`,d=this.addresses.find((e=>e.key===c));if(d)return d.address;const a={key:c,address:(0,s.computePoolAddress)({factoryAddress:e,tokenA:t,tokenB:n,fee:i})};return this.addresses.unshift(a),a.address}static getPool(e,t,n,i,o,r){this.pools.length>this.MAX_ENTRIES&&(this.pools=this.pools.slice(0,this.MAX_ENTRIES/2));const c=this.pools.find((s=>s.token0===e&&s.token1===t&&s.fee===n&&a().EQ(s.sqrtRatioX96,i)&&a().EQ(s.liquidity,o)&&s.tickCurrent===r));if(c)return c;const d=new s.Pool(e,t,n,i,o,r);return this.pools.unshift(d),d}};var x;function g(e){const t=(0,p.x)(),n=(0,u.useMemo)((()=>t?e.map((([e,t,n])=>{if(e&&t&&n){const i=e.wrapped,o=t.wrapped;if(i.equals(o))return;return i.sortsBefore(o)?[i,o,n]:[o,i,n]}})):new Array(e.length)),[t,e]),i=(0,u.useMemo)((()=>{const e=t&&o.V3_CORE_FACTORY_ADDRESSES[t];return e?n.map((t=>t&&f.getPoolAddress(e,...t))):new Array(n.length)}),[t,n]),r=(0,l._Y)(i,m,"slot0"),s=(0,l._Y)(i,m,"liquidity");return(0,u.useMemo)((()=>e.map(((e,t)=>{const i=n[t];if(!i)return[x.INVALID,null];const[o,c,d]=i;if(!r[t])return[x.INVALID,null];const{result:a,loading:l,valid:u}=r[t];if(!s[t])return[x.INVALID,null];const{result:p,loading:h,valid:m}=s[t];if(!i||!u||!m)return[x.INVALID,null];if(l||h)return[x.LOADING,null];if(!a||!p)return[x.NOT_EXISTS,null];if(!a.sqrtPriceX96||a.sqrtPriceX96.eq(0))return[x.NOT_EXISTS,null];try{const e=f.getPool(o,c,d,a.sqrtPriceX96,p[0],a.tick);return[x.EXISTS,e]}catch(g){return console.error("Error when constructing the pool",g),[x.NOT_EXISTS,null]}}))),[s,e,r,n])}function w(e,t,n){return g((0,u.useMemo)((()=>[[e,t,n]]),[e,t,n]))[0]}function I(e,t,n,i){const d=(0,u.useRef)([x.LOADING,null]),a=e&&t&&n?f.getPoolAddress(o.V3_CORE_FACTORY_ADDRESSES[i],e,t,n):void 0,l=(0,u.useMemo)((()=>a?{[i]:a}:{}),[i,a]),p=(0,c.SO)(l,r.Mt)[i];return(0,u.useEffect)((()=>{function i(){var o;return o=function*(){try{if(!e||!t||!n||!a||!p)return void(d.current=[x.INVALID,null]);const i=yield p.slot0(),o=yield p.liquidity();d.current=[x.NOT_EXISTS,null];const r=new s.Pool(e,t,n,i.sqrtPriceX96.toString(),o.toString(),i.tick);d.current=[x.EXISTS,r]}catch(i){d.current=[x.INVALID,null]}},i=function(){var e=this,t=arguments;return new Promise((function(n,i){var r=o.apply(e,t);function s(e){h(r,n,i,s,c,"next",e)}function c(e){h(r,n,i,s,c,"throw",e)}s(void 0)}))},i.apply(this,arguments)}!function(){i.apply(this,arguments)}()}),[p,n,a,e,t]),d.current}!function(e){e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID"}(x||(x={}))},40413:(e,t,n)=>{n.d(t,{W:()=>a,n:()=>d});var i=n(11604),o=n(84938),r=n(45779),s=n(7151);function c(e){var t;const n=(0,s.GL)(),c=(0,r.useMemo)((()=>e?e.map((e=>[i.O$.from(e)])):[]),[e]),d=(0,o.es)(n,"positions",c),a=(0,r.useMemo)((()=>d.some((({loading:e})=>e))),[d]),l=(0,r.useMemo)((()=>d.some((({error:e})=>e))),[d]),u=(0,r.useMemo)((()=>{if(!a&&!l&&e)return d.map(((t,n)=>{const i=e[n],o=t.result;return{tokenId:i,fee:o.fee,feeGrowthInside0LastX128:o.feeGrowthInside0LastX128,feeGrowthInside1LastX128:o.feeGrowthInside1LastX128,liquidity:o.liquidity,nonce:o.nonce,operator:o.operator,tickLower:o.tickLower,tickUpper:o.tickUpper,token0:o.token0,token1:o.token1,tokensOwed0:o.tokensOwed0,tokensOwed1:o.tokensOwed1}}))}),[a,l,d,e]);return{loading:a,positions:null===(t=u)||void 0===t?void 0:t.map(((e,t)=>({...e,tokenId:c[t][0]})))}}function d(e){var t;const n=c(e?[e]:void 0);return{loading:n.loading,position:null===(t=n.positions)||void 0===t?void 0:t[0]}}function a(e){var t,n;const d=(0,s.GL)(),{loading:a,result:l}=(0,o.Wk)(d,"balanceOf",[e??void 0]),u=null===(n=l)||void 0===n||null===(t=n[0])||void 0===t?void 0:t.toNumber(),p=(0,r.useMemo)((()=>{if(u&&e){const t=[];for(let n=0;n<u;n++)t.push([e,n]);return t}return[]}),[e,u]),h=(0,o.es)(d,"tokenOfOwnerByIndex",p),m=(0,r.useMemo)((()=>h.some((({loading:e})=>e))),[h]),f=(0,r.useMemo)((()=>e?h.map((({result:e})=>e)).filter((e=>!!e)).map((e=>i.O$.from(e[0]))):[]),[e,h]),{positions:x,loading:g}=c(f);return{loading:m||a||g,positions:x}}}}]);
//# sourceMappingURL=9212.c74d6b3b.chunk.js.map