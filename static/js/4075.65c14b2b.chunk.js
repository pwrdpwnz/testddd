"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[4075,5347],{52223:(e,n,i)=>{i.d(n,{WP:()=>$,ZP:()=>F,rG:()=>_});var t=i(92936),r=i(76078),o=i(26729),d=i(6823),s=i(61592),a=i.n(s),c=i(36399),l=i(45779),u=i(37525),h=i(86082),x=i(43454),p=i(22953),g=i(14411),f=i(54972),m=i(47841),j=i(13820),v=i(3359),y=i(83416),b=i(73720),w=i(17202),S=i(5347),k=i(69780),C=i(61182),z=i(44591),A=i(5967),T=i(94284),q=i(82731),I=i(56536);const _=(0,g.default)(T.m0).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\PositionCard\\index__FixedHeightRow",componentId:"sc-dcf5d43e-0"})`
  height: 24px;
`,D=(0,g.default)(C.hl).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\PositionCard\\index__StyledPositionCard",componentId:"sc-dcf5d43e-1"})`
  border: none;
  background: ${({theme:e,bgColor:n})=>`radial-gradient(91.85% 100% at 1.84% 0%, ${(0,c.DZ)(.8,n)} 0%, ${e.surface2} 100%) `};
  position: relative;
  overflow: hidden;
`;function $({pair:e,showUnwrapped:n=!1,border:i}){var s,c;const{account:u}=(0,o.G)(),h=n?e.token0:(0,S.B)(e.token0),x=n?e.token1:(0,S.B)(e.token1),[g,j]=(0,l.useState)(!1),v=(0,b.mM)(u??void 0,e.liquidityToken),w=(0,y.A)(e.liquidityToken),k=v&&w&&a().greaterThanOrEqual(w.quotient,v.quotient)?new r.Percent(v.quotient,w.quotient):void 0,[A,q]=e&&w&&v&&a().greaterThanOrEqual(w.quotient,v.quotient)?[e.getLiquidityValue(e.token0,w,v,!1),e.getLiquidityValue(e.token1,w,v,!1)]:[void 0,void 0];return(0,t.jsx)(t.Fragment,{children:v&&a().greaterThan(v.quotient,a().BigInt(0))?(0,t.jsx)(C.rd,{border:i,children:(0,t.jsxs)(z.Tz,{gap:"md",children:[(0,t.jsx)(_,{children:(0,t.jsx)(T.DA,{children:(0,t.jsx)(p.xv,{fontWeight:535,fontSize:16,children:(0,t.jsx)(d.cC,{children:"Your position"})})})}),(0,t.jsxs)(_,{onClick:()=>j(!g),children:[(0,t.jsxs)(T.DA,{children:[(0,t.jsx)(m.ge,{currencies:[h,x],size:20}),(0,t.jsxs)(p.xv,{fontWeight:535,fontSize:20,children:[h.symbol,"/",x.symbol]})]}),(0,t.jsx)(T.DA,{children:(0,t.jsx)(p.xv,{fontWeight:535,fontSize:20,children:v?v.toSignificant(4):"-"})})]}),(0,t.jsxs)(z.Tz,{gap:"4px",children:[(0,t.jsxs)(_,{children:[(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(d.cC,{children:"Your pool share:"})}),(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:k?k.toFixed(6)+"%":"-"})]}),(0,t.jsxs)(_,{children:[(0,t.jsxs)(p.xv,{fontSize:16,fontWeight:535,children:[h.symbol,":"]}),A?(0,t.jsx)(T.DA,{children:(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:null===(s=A)||void 0===s?void 0:s.toSignificant(6)})}):"-"]}),(0,t.jsxs)(_,{children:[(0,t.jsxs)(p.xv,{fontSize:16,fontWeight:535,children:[x.symbol,":"]}),q?(0,t.jsx)(T.DA,{children:(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:null===(c=q)||void 0===c?void 0:c.toSignificant(6)})}):"-"]})]})]})}):(0,t.jsx)(C.hl,{children:(0,t.jsxs)(f.Tv.DeprecatedSubHeader,{style:{textAlign:"center"},children:[(0,t.jsx)("span",{role:"img","aria-label":"wizard-icon",children:"\u2b50\ufe0f"})," ",(0,t.jsx)(d.cC,{children:"By adding liquidity you'll earn 0.3% of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity."})," "]})})})}function F({pair:e,border:n,stakedBalance:i}){var s,c,g,C;const{account:$}=(0,o.G)(),F=(0,S.B)(e.token0),W=(0,S.B)(e.token1),[L,N]=(0,l.useState)(!1),R=(0,b.mM)($??void 0,e.liquidityToken),E=(0,y.A)(e.liquidityToken),B=i?null===(s=R)||void 0===s?void 0:s.add(i):R,O=B&&E&&a().greaterThanOrEqual(E.quotient,B.quotient)?new r.Percent(B.quotient,E.quotient):void 0,[V,P]=e&&E&&B&&a().greaterThanOrEqual(E.quotient,B.quotient)?[e.getLiquidityValue(e.token0,E,B,!1),e.getLiquidityValue(e.token1,E,B,!1)]:[void 0,void 0],M=(0,v.r)(null===(c=e)||void 0===c?void 0:c.token0);return(0,t.jsxs)(D,{border:n,bgColor:M,children:[(0,t.jsx)(q.RF,{}),(0,t.jsxs)(z.Tz,{gap:"md",children:[(0,t.jsxs)(_,{children:[(0,t.jsxs)(T.BA,{gap:"8px",style:{marginLeft:"8px"},children:[(0,t.jsx)(m.ge,{currencies:[F,W],size:20}),(0,t.jsx)(p.xv,{fontWeight:535,fontSize:20,children:F&&W?`${F.symbol}/${W.symbol}`:(0,t.jsx)(I.bb,{children:(0,t.jsx)(d.cC,{children:"Loading"})})})]}),(0,t.jsx)(T.DA,{gap:"8px",style:{marginRight:"4px"},children:(0,t.jsx)(k.qL,{padding:"6px 8px",$borderRadius:"12px",width:"100%",onClick:()=>N(!L),children:L?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.cC,{children:"Manage"}),(0,t.jsx)(u.Z,{size:"20",style:{marginLeft:"8px",height:"20px",minWidth:"20px"}})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.cC,{children:"Manage"}),(0,t.jsx)(h.Z,{size:"20",style:{marginLeft:"8px",height:"20px",minWidth:"20px"}})]})})})]}),L&&(0,t.jsxs)(z.Tz,{gap:"sm",children:[(0,t.jsxs)(_,{children:[(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(d.cC,{children:"Your total pool tokens:"})}),(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:B?B.toSignificant(4):"-"})]}),i&&(0,t.jsxs)(_,{children:[(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(d.cC,{children:"Pool tokens in rewards pool:"})}),(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:i.toSignificant(4)})]}),(0,t.jsxs)(_,{children:[(0,t.jsx)(T.DA,{children:(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:(0,t.jsxs)(d.cC,{children:["Pooled ",{sym:F.symbol},":"]})})}),V?(0,t.jsxs)(T.DA,{children:[(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:null===(g=V)||void 0===g?void 0:g.toSignificant(6)}),(0,t.jsx)(A.Z,{size:20,style:{marginLeft:"8px"},currency:F})]}):"-"]}),(0,t.jsxs)(_,{children:[(0,t.jsx)(T.DA,{children:(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:(0,t.jsxs)(d.cC,{children:["Pooled ",{sym:W.symbol},":"]})})}),P?(0,t.jsxs)(T.DA,{children:[(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,marginLeft:"6px",children:null===(C=P)||void 0===C?void 0:C.toSignificant(6)}),(0,t.jsx)(A.Z,{size:20,style:{marginLeft:"8px"},currency:W})]}):"-"]}),(0,t.jsxs)(_,{children:[(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:(0,t.jsx)(d.cC,{children:"Your pool share:"})}),(0,t.jsx)(p.xv,{fontSize:16,fontWeight:535,children:O?(0,t.jsxs)(d.cC,{children:[{amt:"0.00"===O.toFixed(2)?"<0.01":O.toFixed(2)},"%"]}):"-"})]}),(0,t.jsx)(k.PL,{padding:"8px",$borderRadius:"8px",children:(0,t.jsx)(f.dL,{style:{width:"100%",textAlign:"center"},href:`https://v2.info.uniswap.org/account/${$}`,children:(0,t.jsxs)(d.cC,{children:["View accrued fees and analytics",(0,t.jsx)("span",{style:{fontSize:"11px"},children:"\u2197"})]})})}),R&&a().greaterThan(R.quotient,j.iV)&&(0,t.jsxs)(T.m0,{marginTop:"10px",children:[(0,t.jsx)(k.DF,{padding:"8px",$borderRadius:"8px",as:x.rU,to:`/migrate/v2/${e.liquidityToken.address}`,width:"32%",children:(0,t.jsx)(d.cC,{children:"Migrate"})}),(0,t.jsx)(k.DF,{padding:"8px",$borderRadius:"8px",as:x.rU,to:`/add/v2/${(0,w.H)(F)}/${(0,w.H)(W)}`,width:"32%",children:(0,t.jsx)(d.cC,{children:"Add"})}),(0,t.jsx)(k.DF,{padding:"8px",$borderRadius:"8px",as:x.rU,width:"32%",to:`/remove/v2/${(0,w.H)(F)}/${(0,w.H)(W)}`,children:(0,t.jsx)(d.cC,{children:"Remove"})})]}),i&&a().greaterThan(i.quotient,j.iV)&&(0,t.jsx)(k.DF,{padding:"8px",$borderRadius:"8px",as:x.rU,to:`/uni/${(0,w.H)(F)}/${(0,w.H)(W)}`,width:"100%",children:(0,t.jsx)(d.cC,{children:"Manage liquidity in rewards pool"})})]})]})]})}},26073:(e,n,i)=>{i.d(n,{A:()=>c});var t=i(92936),r=i(44591),o=i(6823),d=i(14411),s=i(54972);const a=d.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\V2Unsupported\\index__TextWrapper",componentId:"sc-5efcffe7-0"})`
  border: 1px solid ${({theme:e})=>e.neutral3};
  padding: 16px 12px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;function c(){return(0,t.jsx)(r.Tz,{gap:"lg",justify:"center",children:(0,t.jsx)(r.Tz,{gap:"md",style:{width:"100%"},children:(0,t.jsx)(a,{children:(0,t.jsx)(s.Tv.BodySecondary,{color:"neutral2",textAlign:"center",children:(0,t.jsx)(o.cC,{children:"Uniswap V2 is not available on this network."})})})})})}},82731:(e,n,i)=>{i.d(n,{SS:()=>x,sq:()=>c,MN:()=>l,RF:()=>u,uO:()=>h,I8:()=>a});var t=i(14411);const r=i.p+"static/media/big_unicorn.595c49962d708abbaaec.png",o=i.p+"static/media/noise.3c7efafc83614205bd1a.png",d=i.p+"static/media/xl_uni.9c9e061bed67e15ad3c8.png";var s=i(44591);const a=(0,t.default)(s.Tz).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\earn\\styled__DataCard",componentId:"sc-6a13bc9-0"})`
  background: radial-gradient(76.02% 75.41% at 1.84% 0%, #ff007a 0%, #2172e5 100%);
  border-radius: 12px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,c=t.default.span.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\earn\\styled__CardBGImage",componentId:"sc-6a13bc9-1"})`
  background: url(${r});
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
`,l=t.default.span.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\earn\\styled__CardBGImageSmaller",componentId:"sc-6a13bc9-2"})`
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
`,u=t.default.span.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\earn\\styled__CardNoise",componentId:"sc-6a13bc9-3"})`
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
`,h=(0,t.default)(s.Tz).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\earn\\styled__CardSection",componentId:"sc-6a13bc9-4"})`
  padding: 1rem;
  z-index: 1;
  opacity: ${({disabled:e})=>e&&"0.4"};
`,x=t.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\earn\\styled__Break",componentId:"sc-6a13bc9-5"})`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  height: 1px;
`},81069:(e,n,i)=>{i.d(n,{G:()=>s});var t=i(57852),r=i(42183),o=i(70559),d=i(590);function s(){const{chainId:e}=(0,d.m)(),n=(0,o.ye)(r.TP.V2Everywhere);return e&&(n&&t.Ep.includes(e)||t.$6.includes(e))}},83416:(e,n,i)=>{i.d(n,{A:()=>s});var t=i(76078),r=i(84938),o=i(45779),d=i(7151);function s(e){var n,i,s,a;const c=(0,d.Ib)((null===(n=e)||void 0===n?void 0:n.isToken)?e.address:void 0,!1),l=null===(a=(0,r.Wk)(c,"totalSupply"))||void 0===a||null===(s=a.result)||void 0===s||null===(i=s[0])||void 0===i?void 0:i.toString();return(0,o.useMemo)((()=>{var n;return(null===(n=e)||void 0===n?void 0:n.isToken)&&l?t.CurrencyAmount.fromRawAmount(e,l):void 0}),[e,l])}},41047:(e,n,i)=>{i.d(n,{OY:()=>u,Oo:()=>h,_G:()=>l});var t=i(51371),r=i(76078),o=i(40148),d=i(12972),s=i(84938),a=i(45779);const c=new t.vU(o.abi);var l;function u(e){const n=(0,a.useMemo)((()=>e.map((([e,n])=>{var i,t;return[null===(i=e)||void 0===i?void 0:i.wrapped,null===(t=n)||void 0===t?void 0:t.wrapped]}))),[e]),i=(0,a.useMemo)((()=>n.map((([e,n])=>e&&n&&e.chainId===n.chainId&&!e.equals(n)&&r.V2_FACTORY_ADDRESSES[e.chainId]?(0,d.computePairAddress)({factoryAddress:r.V2_FACTORY_ADDRESSES[e.chainId],tokenA:e,tokenB:n}):void 0))),[n]),t=(0,s._Y)(i,c,"getReserves");return(0,a.useMemo)((()=>t.map(((e,i)=>{const{result:t,loading:o}=e,s=n[i][0],a=n[i][1];if(o)return[l.LOADING,null];if(!s||!a||s.equals(a))return[l.INVALID,null];if(!t)return[l.NOT_EXISTS,null];const{reserve0:c,reserve1:u}=t,[h,x]=s.sortsBefore(a)?[s,a]:[a,s];return[l.EXISTS,new d.Pair(r.CurrencyAmount.fromRawAmount(h,c.toString()),r.CurrencyAmount.fromRawAmount(x,u.toString()))]}))),[t,n])}function h(e,n){return u((0,a.useMemo)((()=>[[e,n]]),[e,n]))[0]}!function(e){e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID"}(l||(l={}))},5347:(e,n,i)=>{i.d(n,{B:()=>r});var t=i(64370);function r(e){var n;return e.isNative?e:(null===(n=t.Fl[e.chainId])||void 0===n?void 0:n.equals(e))?(0,t.gX)(e.chainId):e}}}]);
//# sourceMappingURL=4075.65c14b2b.chunk.js.map