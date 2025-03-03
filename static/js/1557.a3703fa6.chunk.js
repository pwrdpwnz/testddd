"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[1557,2001],{57809:(e,o,t)=>{t.d(o,{Z:()=>d});var i=t(45779),n=t(68090),l=t.n(n);function s(){return s=Object.assign||function(e){for(var o=1;o<arguments.length;o++){var t=arguments[o];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},s.apply(this,arguments)}function a(e,o){if(null==e)return{};var t,i,n=function(e,o){if(null==e)return{};var t,i,n={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var r=(0,i.forwardRef)((function(e,o){var t=e.color,n=void 0===t?"currentColor":t,l=e.size,r=void 0===l?24:l,d=a(e,["color","size"]);return i.createElement("svg",s({ref:o,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),i.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));r.propTypes={color:l().string,size:l().oneOfType([l().string,l().number])},r.displayName="Plus";const d=r},25321:(e,o,t)=>{t.d(o,{l:()=>h,u:()=>v});var i=t(29531),n=t(74365),l=t(52364),s=t(49256),a=t(10105),r=t(76078),d=t(57852),c=t(25873);const u=new i.u({uri:d.V_[r.ChainId.MAINNET]}),p=new n.i(((e,o)=>{const t=c.ZP.getState().application.chainId;return e.setContext((()=>({uri:(0,d.ht)(t)&&d.V_[t]?d.V_[t]:d.V_[r.ChainId.MAINNET]}))),o(e)})),h=new l.f({cache:new s.h,link:(0,a.z)(p,u)}),v=Object.fromEntries(Object.entries(d.V_).map((([e,o])=>[e,new l.f({cache:new s.h,uri:o})])))},36813:(e,o,t)=>{t.d(o,{K:()=>w});var i=t(76078),n=t(21651),l=t(26729),s=t(63945),a=t(61592),r=t.n(a),d=t(63490),c=t.n(d),u=t(45779);const p=8;function h(e,o,t,i,l,s){let a={...t},d=[];for(let c=l+(s?1:-1);s?c<i.length:c>=0;s?c++:c--){const t=Number(i[c].tick),l=(0,n.tickToPrice)(e,o,t),u={liquidityActive:a.liquidityActive,tick:t,liquidityNet:r().BigInt(i[c].liquidityNet),price0:l.toFixed(p),sdkPrice:l};s?u.liquidityActive=r().add(a.liquidityActive,r().BigInt(i[c].liquidityNet)):!s&&r().notEqual(a.liquidityNet,r().BigInt(0))&&(u.liquidityActive=r().subtract(a.liquidityActive,a.liquidityNet)),d.push(u),a=u}return s||(d=d.reverse()),d}var v=t(25321),m=t(55660);const x=8,f=(e,o)=>e&&o?Math.floor(e/n.TICK_SPACINGS[o])*n.TICK_SPACINGS[o]:void 0;const g=1e3;function k(e,o,t,l){var a,r;const[d,p]=(0,u.useState)(0),[h,m]=(0,u.useState)([]),{data:x,error:f,loading:k}=function(e,o,t,l=0,a){var r,d,u;const p=v.u[a],h=e&&o&&t?n.Pool.getAddress(null===(r=e)||void 0===r?void 0:r.wrapped,null===(d=o)||void 0===d?void 0:d.wrapped,t,void 0,a?i.V3_CORE_FACTORY_ADDRESSES[a]:void 0):void 0;return(0,s.K_)({variables:{poolAddress:null===(u=h)||void 0===u?void 0:u.toLowerCase(),skip:l},skip:!h,pollInterval:c()("30s"),client:p})}(e,o,t,d,l);return(0,u.useEffect)((()=>{var e;(null===(e=x)||void 0===e?void 0:e.ticks.length)&&(m((e=>[...e,...x.ticks])),x.ticks.length===g&&p((e=>e+g)))}),[null===(a=x)||void 0===a?void 0:a.ticks]),{isLoading:k||(null===(r=x)||void 0===r?void 0:r.ticks.length)===g,error:f,ticks:h}}function w(e,o,t,s){var a,d,c,p,v;const g=(0,l.G)().chainId??i.ChainId.MAINNET,w=(0,m.$o)(null===(a=e)||void 0===a?void 0:a.wrapped,null===(d=o)||void 0===d?void 0:d.wrapped,t,s??g),y=null===(c=w[1])||void 0===c?void 0:c.liquidity,P=null===(p=w[1])||void 0===p?void 0:p.sqrtRatioX96,b=null===(v=w[1])||void 0===v?void 0:v.tickCurrent,j=(0,u.useMemo)((()=>f(b,t)),[b,t]),{isLoading:T,error:I,ticks:C}=k(e,o,t,s??g);return(0,u.useMemo)((()=>{var t,i,l;if(!e||!o||void 0===j||w[0]!==m.tK.EXISTS||!C||0===C.length||T)return{isLoading:T||w[0]===m.tK.LOADING,error:I,activeTick:j,data:void 0};const s=null===(t=e)||void 0===t?void 0:t.wrapped,a=null===(i=o)||void 0===i?void 0:i.wrapped,d=C.findIndex((({tick:e})=>e>j))-1;if(d<0)return console.error("TickData pivot not found"),{isLoading:T,error:I,activeTick:j,data:void 0};const c=(0,n.tickToPrice)(s,a,j),u={liquidityActive:r().BigInt((null===(l=w[1])||void 0===l?void 0:l.liquidity)??0),tick:j,liquidityNet:Number(C[d].tick)===j?r().BigInt(C[d].liquidityNet):r().BigInt(0),price0:c.toFixed(x),sdkPrice:c},p=h(s,a,u,C,d,!0),v=h(s,a,u,C,d,!1).concat(u).concat(p);return{isLoading:T,error:I,currentTick:b,activeTick:j,liquidity:y,sqrtPriceX96:P,data:v}}),[e,o,j,w,C,T,I,b,y,P])}},55660:(e,o,t)=>{t.d(o,{$o:()=>k,AI:()=>g,Oh:()=>f,tK:()=>x});var i=t(51371),n=t(76078),l=t(87270),s=t(21651),a=t(21891),r=t(61592),d=t.n(r),c=t(84938),u=t(45779),p=t(72993);function h(e,o,t,i,n,l,s){try{var a=e[l](s),r=a.value}catch(d){return void t(d)}a.done?o(r):Promise.resolve(r).then(i,n)}const v=new i.vU(l.Mt);let m=class{static MAX_ENTRIES=128;static pools=[];static addresses=[];static getPoolAddress(e,o,t,i){this.addresses.length>this.MAX_ENTRIES&&(this.addresses=this.addresses.slice(0,this.MAX_ENTRIES/2));const{address:n}=o,{address:l}=t,a=`${e}:${n}:${l}:${i.toString()}`,r=this.addresses.find((e=>e.key===a));if(r)return r.address;const d={key:a,address:(0,s.computePoolAddress)({factoryAddress:e,tokenA:o,tokenB:t,fee:i})};return this.addresses.unshift(d),d.address}static getPool(e,o,t,i,n,l){this.pools.length>this.MAX_ENTRIES&&(this.pools=this.pools.slice(0,this.MAX_ENTRIES/2));const a=this.pools.find((s=>s.token0===e&&s.token1===o&&s.fee===t&&d().EQ(s.sqrtRatioX96,i)&&d().EQ(s.liquidity,n)&&s.tickCurrent===l));if(a)return a;const r=new s.Pool(e,o,t,i,n,l);return this.pools.unshift(r),r}};var x;function f(e){const o=(0,p.x)(),t=(0,u.useMemo)((()=>o?e.map((([e,o,t])=>{if(e&&o&&t){const i=e.wrapped,n=o.wrapped;if(i.equals(n))return;return i.sortsBefore(n)?[i,n,t]:[n,i,t]}})):new Array(e.length)),[o,e]),i=(0,u.useMemo)((()=>{const e=o&&n.V3_CORE_FACTORY_ADDRESSES[o];return e?t.map((o=>o&&m.getPoolAddress(e,...o))):new Array(t.length)}),[o,t]),l=(0,c._Y)(i,v,"slot0"),s=(0,c._Y)(i,v,"liquidity");return(0,u.useMemo)((()=>e.map(((e,o)=>{const i=t[o];if(!i)return[x.INVALID,null];const[n,a,r]=i;if(!l[o])return[x.INVALID,null];const{result:d,loading:c,valid:u}=l[o];if(!s[o])return[x.INVALID,null];const{result:p,loading:h,valid:v}=s[o];if(!i||!u||!v)return[x.INVALID,null];if(c||h)return[x.LOADING,null];if(!d||!p)return[x.NOT_EXISTS,null];if(!d.sqrtPriceX96||d.sqrtPriceX96.eq(0))return[x.NOT_EXISTS,null];try{const e=m.getPool(n,a,r,d.sqrtPriceX96,p[0],d.tick);return[x.EXISTS,e]}catch(f){return console.error("Error when constructing the pool",f),[x.NOT_EXISTS,null]}}))),[s,e,l,t])}function g(e,o,t){return f((0,u.useMemo)((()=>[[e,o,t]]),[e,o,t]))[0]}function k(e,o,t,i){const r=(0,u.useRef)([x.LOADING,null]),d=e&&o&&t?m.getPoolAddress(n.V3_CORE_FACTORY_ADDRESSES[i],e,o,t):void 0,c=(0,u.useMemo)((()=>d?{[i]:d}:{}),[i,d]),p=(0,a.SO)(c,l.Mt)[i];return(0,u.useEffect)((()=>{function i(){var n;return n=function*(){try{if(!e||!o||!t||!d||!p)return void(r.current=[x.INVALID,null]);const i=yield p.slot0(),n=yield p.liquidity();r.current=[x.NOT_EXISTS,null];const l=new s.Pool(e,o,t,i.sqrtPriceX96.toString(),n.toString(),i.tick);r.current=[x.EXISTS,l]}catch(i){r.current=[x.INVALID,null]}},i=function(){var e=this,o=arguments;return new Promise((function(t,i){var l=n.apply(e,o);function s(e){h(l,t,i,s,a,"next",e)}function a(e){h(l,t,i,s,a,"throw",e)}s(void 0)}))},i.apply(this,arguments)}!function(){i.apply(this,arguments)}()}),[p,t,d,e,o]),r.current}!function(e){e[e.LOADING=0]="LOADING",e[e.NOT_EXISTS=1]="NOT_EXISTS",e[e.EXISTS=2]="EXISTS",e[e.INVALID=3]="INVALID"}(x||(x={}))},46012:(e,o,t)=>{t.r(o),t.d(o,{default:()=>k});var i=t(92936),n=t(5985),l=t(12722),s=t(69780),a=t(97341),r=t(6823),d=t(43454),c=t(14411),u=t(54972),p=t(65075);const h=t.p+"static/media/404-page-dark.f24684e761633ae99402.png",v=t.p+"static/media/404-page-light.c448d3fd36de14609aba.png",m=c.default.img.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\NotFound\\index__Image",componentId:"sc-dc174370-0"})`
  max-width: 510px;
  width: 100%;
  padding: 0 75px;
`,x=c.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\NotFound\\index__Container",componentId:"sc-dc174370-1"})`
  display: flex;
  flex-direction: column;
  align-items: center;
`,f=(0,c.default)(x).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\NotFound\\index__Header",componentId:"sc-dc174370-2"})`
  gap: 30px;
`,g=(0,c.default)(x).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\NotFound\\index__PageWrapper",componentId:"sc-dc174370-3"})`
  flex: 1;
  justify-content: center;
  gap: 50px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    justify-content: space-between;
    padding-top: 64px;
  }
`;function k(){const e=(0,p.Gv)(),o=(0,a.dD)(),t=o?u.Tv.LargeHeader:u.Tv.Hero,c=o?u.Tv.HeadlineMedium:u.Tv.HeadlineLarge;return(0,i.jsx)(g,{children:(0,i.jsxs)(l.fM,{page:n.yJ.NOT_FOUND,shouldLogImpression:!0,children:[(0,i.jsxs)(f,{children:[(0,i.jsxs)(x,{children:[(0,i.jsx)(t,{children:"404"}),(0,i.jsx)(c,{color:"neutral2",children:(0,i.jsx)(r.cC,{children:"Page not found!"})})]}),(0,i.jsx)(m,{src:e?h:v,alt:"Liluni"})]}),(0,i.jsx)(s.Hm,{as:d.rU,to:"/",children:(0,i.jsx)(r.cC,{children:"Oops, take me back to Swap"})})]})})}},75963:(e,o,t)=>{t.r(o),t.d(o,{default:()=>Wt});var i=t(92936),n=t(5985),l=t(12722),s=t(44591),a=t(76078),r=t(21651),d=t(70060),c=t(74118),u=t(96524),p=t(36813),h=t(61592),v=t.n(h),m=t(45779),x=t(66136),f=t(69632),g=t(55810);class k{_data=null;_options;constructor(e){this._options=e,this._options.hoveredTick=e.activeTick}draw(e,o){e.useBitmapCoordinateSpace((e=>this._drawImpl(e,o)))}update(e,o){this._data=e,this._options={...this._options,...o}}_drawImpl(e,o){if(null===this._data||0===this._data.bars.length||null===this._data.visibleRange||null===this._options)return;const t=e.context,i=this._data.bars.map((e=>({x:e.x,y:o(e.originalData.liquidity)??0,tick:e.originalData.tick})));(0,g.XV)(i,this._data.barSpacing,e.horizontalPixelRatio,this._data.visibleRange.from,this._data.visibleRange.to);const n=o(0)??0;t.fillStyle=this._options.tokenAColor;for(let l=this._data.visibleRange.from;l<this._data.visibleRange.to;l++){const o=i[l],s=o.column,a=this._options.activeTick===o.tick,r=this._options.hoveredTick===o.tick;if(!s)return;const d=Math.min(Math.max(e.horizontalPixelRatio,s.right-s.left),this._data.barSpacing*e.horizontalPixelRatio),c=.3*d,u=d-2*c,p=(0,g.n1)(n,o.y,e.verticalPixelRatio);if(r){const e=.3*t.canvas.height,o=t.canvas.height-e;t.fillStyle=this._options.highlightColor,t.beginPath(),t.roundRect(s.left+c,e,u,o,8),t.fill(),t.globalAlpha=1}else t.globalAlpha=.4;if(a?t.fillStyle=this._options.tokenBColor:void 0===this._options.activeTick?t.fillStyle=this._options.color??"white":this._options.activeTick>o.tick?t.fillStyle=this._options.tokenBColor:this._options.activeTick<o.tick&&(t.fillStyle=this._options.tokenAColor),t.beginPath(),t.roundRect(s.left+c,p.position,u,p.length,8),t.fill(),t.globalAlpha=1,a&&this._options.activeTickProgress){t.globalCompositeOperation="source-atop";const e=p.length*this._options.activeTickProgress,o=p.position+(p.length-e);t.fillStyle=this._options.tokenAColor,t.beginPath(),t.fillRect(s.left,o,d,e),t.globalCompositeOperation="source-over"}}}}class w{_renderer;_tokenAColor;_tokenBColor;_highlightColor;constructor(e){this._tokenAColor=e.tokenAColor,this._renderer=new k(e),this._tokenBColor=e.tokenBColor,this._highlightColor=e.highlightColor}priceValueBuilder(e){return[0,e.liquidity]}isWhitespace(e){return!e.liquidity}renderer(){return this._renderer}update(e,o){this._renderer.update(e,o)}defaultOptions(){return{...f.Qb,tokenAColor:this._tokenAColor,tokenBColor:this._tokenBColor,highlightColor:this._highlightColor}}}function y(e,o,t,i,n,l,s){try{var a=e[l](s),r=a.value}catch(d){return void t(d)}a.done?o(r):Promise.resolve(r).then(i,n)}function P(e){return function(){var o=this,t=arguments;return new Promise((function(i,n){var l=e.apply(o,t);function s(e){y(l,i,n,s,a,"next",e)}function a(e){y(l,i,n,s,a,"throw",e)}s(void 0)}))}}class b extends c.B{series;activeTick;constructor(e,o){super(e,o),this.series=this.api.addCustomSeries(new w(o)),this.series.setData(this.data),this.updateOptions(o),this.fitContent()}updateOptions(e){super.updateOptions(e,{localization:{locale:e.locale},rightPriceScale:{visible:!1,borderVisible:!1,scaleMargins:{top:.35,bottom:0},autoScale:!0},timeScale:{visible:!1,fixLeftEdge:!0,fixRightEdge:!0,borderVisible:!1},crosshair:{horzLine:{visible:!1,labelVisible:!1},vertLine:{visible:!1,labelVisible:!1}},grid:{vertLines:{visible:!1},horzLines:{visible:!1}}});const{data:o,activeTick:t}=e;this.activeTick=t,this.data!==o&&(this.data=o,this.series.setData(o),this.fitContent()),this.series.applyOptions({priceFormat:{type:"volume"},priceLineVisible:!1,lastValueVisible:!1}),this.series.applyOptions(e)}onSeriesHover(e){var o;super.onSeriesHover(e);const t={hoveredTick:(null===(o=e)||void 0===o?void 0:o.item.tick)??this.activeTick};this.series.applyOptions(t)}activeTickIndex(){return this.data.findIndex((e=>e.tick===this.activeTick))}fitContent(){const e=this.data.length,o=this.data.findIndex((e=>e.tick===this.activeTick)),t=-1!==o?o:e/2;this.api.timeScale().setVisibleLogicalRange({from:Math.max(t-50,0),to:Math.min(t+50,this.data.length)})}}const j=u.BigNumber.from(2).pow(128).sub(1);function T(e){return a.CurrencyAmount.fromRawAmount(e,j.toString())}function I(){return(I=P((function*(e,o,t,i,n){if(n.currentTick&&n.sqrtPriceX96&&n.liquidity)try{const l=v().greaterThan(i.liquidityNet,v().BigInt(0))?i.liquidityNet:v().multiply(i.liquidityNet,v().BigInt("-1")),s=[{index:i.tick,liquidityGross:l,liquidityNet:v().multiply(i.liquidityNet,v().BigInt("-1"))},{index:i.tick+r.TICK_SPACINGS[t],liquidityGross:l,liquidityNet:i.liquidityNet}],a=new r.Pool(e,o,t,n.sqrtPriceX96,i.liquidityActive,n.currentTick,s),d=r.TickMath.getSqrtRatioAtTick(s[0].index),c=(yield a.getOutputAmount(T(e),d))[0],u=parseFloat(i.sdkPrice.invert().quote(c).toExact()),p=r.TickMath.getSqrtRatioAtTick(s[1].index),h=(yield a.getOutputAmount(T(o),p))[0];return{amount0Locked:u,amount1Locked:parseFloat(i.sdkPrice.quote(h).toExact())}}catch{return{amount0Locked:0,amount1Locked:0}}}))).apply(this,arguments)}function C(e,o,t,i){return _.apply(this,arguments)}function _(){return(_=P((function*(e,o,t,i){try{const n=r.TICK_SPACINGS[t],l=v().greaterThan(i.liquidityNet,v().BigInt(0))?i.liquidityNet:v().multiply(i.liquidityNet,v().BigInt("-1")),s=r.TickMath.getSqrtRatioAtTick(i.tick),d=[{index:i.tick,liquidityGross:l,liquidityNet:v().multiply(i.liquidityNet,v().BigInt("-1"))},{index:i.tick+r.TICK_SPACINGS[t],liquidityGross:l,liquidityNet:i.liquidityNet}],c=new r.Pool(e,o,Number(t),s,i.liquidityActive,i.tick,d),u=r.TickMath.getSqrtRatioAtTick(i.tick-n),p=a.CurrencyAmount.fromRawAmount(e,j.toString()),h=(yield c.getOutputAmount(p,u))[0],m=parseFloat(i.sdkPrice.invert().quote(h).toExact());return{amount0Locked:m,amount1Locked:parseFloat(h.toExact())}}catch{return{amount0Locked:0,amount1Locked:0}}}))).apply(this,arguments)}function S({tokenA:e,tokenB:o,feeTier:t,isReversed:i,chainId:n}){const{formatNumber:l,formatPrice:s}=(0,x.Gb)(),a=(0,p.K)(e,o,t,n),[d,c]=(0,m.useState)();return(0,m.useEffect)((()=>{function n(){return n=P((function*(){var n;const l=a.data;if(!l)return;let d,u;const p=[];for(let c=0;c<l.length;c++){const n=l[c],h=i?1e3*c:1e3*(l.length-c),v=a.activeTick===n.tick;let m=n.sdkPrice,f=n.sdkPrice.invert();v&&a.activeTick&&a.currentTick&&(u=c,d=(a.currentTick-n.tick)/r.TICK_SPACINGS[t],m=(0,r.tickToPrice)(e,o,n.tick),f=m.invert());const{amount0Locked:g,amount1Locked:k}=yield C(e,o,t,n);p.push({tick:n.tick,liquidity:parseFloat(n.liquidityActive.toString()),price0:s({price:m,type:x.sw.SwapDetailsAmount}),price1:s({price:f,type:x.sw.SwapDetailsAmount}),time:h,amount0Locked:g,amount1Locked:k})}null===(n=p)||void 0===n||n.map(((e,o)=>{o>0&&(p[o-1].amount0Locked=e.amount0Locked,p[o-1].amount1Locked=e.amount1Locked)}));const h=void 0!==u?p[u]:void 0;if(void 0!==u&&h){const i=yield function(e,o,t,i,n){return I.apply(this,arguments)}(e,o,t,l[u],a);p[u]={...h,...i}}i||p.reverse(),c({barData:p.filter((e=>e.liquidity>0)),activeRangeData:h,activeRangePercentage:d})})),n.apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[a,e,o,l,s,i,t]),{tickData:d,activeTick:a.activeTick,loading:a.isLoading||!d}}var N=t(7392),$=t(95757),D=t(6992),A=t(24997),L=t(68310),F=t(13382),E=t(26431),B=t(90511),R=t(90471),M=t(67968),O=t(53950),V=t(18569),q=t(32682),Z=t(6823),X=t(64505),U=t(14411),H=t(54972),z=t(55874),W=t(99582);const G=356,Q=[L.oX.VOLUME,L.oX.PRICE,L.oX.LIQUIDITY],Y=U.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\ChartSection\\index__TimePeriodSelectorContainer",componentId:"sc-c659df50-0"})`
  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    width: 100%;
  }
`,K=U.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\ChartSection\\index__ChartTypeSelectorContainer",componentId:"sc-c659df50-1"})`
  display: flex;
  gap: 8px;

  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    width: 100%;
  }
`,J=(0,U.default)(c.k).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\ChartSection\\index__StyledChart",componentId:"sc-c659df50-2"})`
  height: ${G}px;
`,ee=({chartType:e,onChartTypeChange:o})=>(0,i.jsx)(K,{children:(0,i.jsx)(B.W,{options:Q,currentChartType:e,onSelectOption:o})});function oe(e,o,t,i,n,l){var s;const[a,r]=(0,m.useState)(V.XH.DAY),[d,c]=(0,m.useState)(L.oX.VOLUME),u=l===W.Qeo.V3,p={address:(null===(s=e)||void 0===s?void 0:s.address)??"",chain:n,duration:(0,V.uw)(a),isV3:u},h=function(e,o,t,i,n){var l,s,a;const{data:r,loading:d}=(0,W.TNW)({variables:e});return(0,m.useMemo)((()=>{var e,l,s;const{priceHistory:a}=(null===(e=r)||void 0===e?void 0:e.v2Pair)??(null===(l=r)||void 0===l?void 0:l.v3Pool)??{},c=n?t:i,u=(null===(s=a)||void 0===s?void 0:s.filter((e=>null!==e)).map((e=>{var t,i,n,l;const s=(null===(t=o)||void 0===t?void 0:t.token0.address)===(null===(i=c)||void 0===i?void 0:i.address.toLowerCase())?null===(n=e)||void 0===n?void 0:n.token0Price:null===(l=e)||void 0===l?void 0:l.token1Price;return{time:e.timestamp,value:s,open:s,high:s,low:s,close:s}})))??[],p=d||!a?R.x1.INVALID:R.x1.VALID;return{chartType:L.oX.PRICE,entries:u,loading:d,dataQuality:p}}),[null===(l=r)||void 0===l?void 0:l.v2Pair,null===(s=r)||void 0===s?void 0:s.v3Pool,n,d,null===(a=o)||void 0===a?void 0:a.token0.address,t,i])}(p,e,o,t,i),v=function(e){var o,t;const{data:i,loading:n}=(0,W.hzq)({variables:e});return(0,m.useMemo)((()=>{var o,t,l;const{historicalVolume:s}=(null===(o=i)||void 0===o?void 0:o.v2Pair)??(null===(t=i)||void 0===t?void 0:t.v3Pool)??{},a=(null===(l=s)||void 0===l?void 0:l.filter((e=>null!==e)).map(R.Yz))??[],r=(0,R.q6)(a,L.oX.VOLUME,e.duration);return{chartType:L.oX.VOLUME,entries:a,loading:n,dataQuality:r}}),[null===(o=i)||void 0===o?void 0:o.v2Pair,null===(t=i)||void 0===t?void 0:t.v3Pool,n,e.duration])}(p);return(0,m.useMemo)((()=>{const e=(()=>{switch(d){case L.oX.PRICE:return h;case L.oX.VOLUME:return v;case L.oX.LIQUIDITY:return{chartType:L.oX.LIQUIDITY,entries:[],loading:!1,dataQuality:R.x1.VALID}}})();return{timePeriod:a,setTimePeriod:r,setChartType:c,activeQuery:e}}),[d,v,h,a])}function te(e){var o,t,n,l,s,r;const[d,c]=[(null===(o=e.poolData)||void 0===o?void 0:o.token0)&&(0,V.Pc)(e.poolData.token0),(null===(t=e.poolData)||void 0===t?void 0:t.token1)&&(0,V.Pc)(e.poolData.token1)],{setChartType:u,timePeriod:p,setTimePeriod:h,activeQuery:v}=oe(e.poolData,null===(n=d)||void 0===n?void 0:n.wrapped,null===(l=c)||void 0===l?void 0:l.wrapped,e.isReversed,e.chain??W.qop.Ethereum,(null===(s=e.poolData)||void 0===s?void 0:s.protocolVersion)??W.Qeo.V3),x=(0,X.Dv)(D.N),f=e.loading||v.chartType!==L.oX.LIQUIDITY&&(null===(r=v)||void 0===r?void 0:r.loading),g=(()=>{if(!d||!c||!e.poolData||!e.chain)return(0,i.jsx)(N.M,{type:v.chartType,height:G});const o={...e,feeTier:Number(e.poolData.feeTier),height:G,timePeriod:p,tokenA:d.wrapped,tokenB:c.wrapped,chainId:(0,V.Tz)(e.chain)??a.ChainId.MAINNET};if(v.chartType===L.oX.LIQUIDITY)return(0,i.jsx)(de,{...o});if(v.dataQuality===R.x1.INVALID||!d||!c){const e=f?void 0:(0,i.jsx)(Z.cC,{children:"Unable to display historical data for the current pool."});return(0,i.jsx)(N.M,{type:v.chartType,height:G,errorText:e})}const t=v.dataQuality===R.x1.STALE;switch(v.chartType){case L.oX.PRICE:return(0,i.jsx)(le,{...o,data:v.entries,stale:t});case L.oX.VOLUME:return(0,i.jsx)(A.x,{...o,data:v.entries,stale:t})}})(),k=(0,m.useMemo)((()=>v.chartType===L.oX.PRICE?E.Bz.filter((e=>e.value!==O._u.HOUR)):E.Bz),[v.chartType]);return(0,i.jsxs)("div",{"data-testid":"pdp-chart-container",children:[g,(0,i.jsxs)(E.Os,{children:[(0,i.jsx)(ee,{chartType:v.chartType,onChartTypeChange:u}),v.chartType!==L.oX.LIQUIDITY&&(0,i.jsx)(Y,{children:(0,i.jsx)(F.Z,{options:k,currentSelected:O.rD[p],onSelectOption:e=>{const o=(0,O.Wz)(e);var t;o===p?null===(t=x)||void 0===t||t():h(o)}})})]})]})}const ie=U.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\ChartSection\\index__PriceDisplayContainer",componentId:"sc-c659df50-3"})`
  display: flex;
  flex-wrap: wrap;
  column-gap: 4px;
`,ne=(0,U.default)(H.Tv.HeadlineMedium).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\ChartSection\\index__ChartPriceText",componentId:"sc-c659df50-4"})`
  ${H.cw}
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    font-size: 24px !important;
    line-height: 32px !important;
  }
`;function le({tokenA:e,tokenB:o,isReversed:t,data:n,stale:l}){const{formatCurrencyAmount:s,formatPrice:r}=(0,x.Gb)(),[c,u]=t?[o,e]:[e,o],p=(0,m.useMemo)((()=>({data:n,stale:l,type:L.E4.LINE})),[n,l]),h=(0,q.ZP)(c),v=n[n.length-1];return(0,i.jsx)(J,{Model:$.r4,params:p,children:e=>{var o;const t=e??v,l=Math.floor((t.value??t.close)*10**u.decimals),p=(0,i.jsxs)(ie,{children:[(0,i.jsx)(ne,{children:`1 ${c.symbol} = ${s({amount:a.CurrencyAmount.fromRawAmount(u,l)})} \n            ${u.symbol}`}),(0,i.jsx)(ne,{color:"neutral2",children:h?"("+r({price:h})+")":""})]});return(0,i.jsx)(d._,{value:p,additionalFields:(0,i.jsx)($.Tg,{startingPrice:n[0],endingPrice:t}),valueFormatterType:x.sw.FiatTokenPrice,time:null===(o=e)||void 0===o?void 0:o.time})}})}const se=(0,U.default)(H.Tv.H1Medium).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\ChartSection\\index__FadeInHeading",componentId:"sc-c659df50-5"})`
  ${z.Sj};
  line-height: 32px;
`,ae=(0,U.default)(H.Tv.SubHeader).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\ChartSection\\index__FadeInSubheader",componentId:"sc-c659df50-6"})`
  ${z.Sj}
`;function re({data:e,tokenADescriptor:o,tokenBDescriptor:t,currentTick:n}){const{formatNumber:l}=(0,x.Gb)();if(!n)return null;const s=e.tick>=n?l({input:e.amount0Locked,type:x.sw.TokenQuantityStats}):0,a=e.tick<=n?l({input:e.amount1Locked,type:x.sw.TokenQuantityStats}):0;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(H.Tv.BodySmall,{children:(0,Z.t)("{{token}} liquidity: {{name}}",{token:o,name:s})}),(0,i.jsx)(H.Tv.BodySmall,{children:(0,Z.t)("{{token}} liquidity: {{name}}",{token:t,name:a})})]})}function de({tokenA:e,tokenB:o,feeTier:t,isReversed:n,chainId:l}){const s=e.symbol??e.name??Z.t`Token A`,a=o.symbol??o.name??Z.t`Token B`,{tickData:c,activeTick:u,loading:p}=S({tokenA:e,tokenB:o,feeTier:t,isReversed:n,chainId:l}),h=(0,U.useTheme)(),v=(0,m.useMemo)((()=>{var e,o;return{data:(null===(e=c)||void 0===e?void 0:e.barData)??[],tokenAColor:n?h.token1:h.token0,tokenBColor:n?h.token0:h.token1,highlightColor:h.surface3,activeTick:u,activeTickProgress:null===(o=c)||void 0===o?void 0:o.activeRangePercentage}}),[u,n,h,c]);return p?(0,i.jsx)(M.sT,{}):(0,i.jsx)(J,{Model:b,params:v,TooltipBody:t!==r.FeeAmount.LOWEST?({data:e})=>{var o,t;return(0,i.jsx)(re,{data:e,tokenADescriptor:s,tokenBDescriptor:a,currentTick:null===(t=c)||void 0===t||null===(o=t.activeRangeData)||void 0===o?void 0:o.tick})}:void 0,children:e=>{var o,t,n;const l=e??(null===(o=c)||void 0===o?void 0:o.activeRangeData),r=(0,i.jsxs)("div",{children:[(0,i.jsx)(se,{children:`1 ${s} = ${null===(t=l)||void 0===t?void 0:t.price0} ${a}`}),(0,i.jsx)(se,{children:`1 ${a} = ${null===(n=l)||void 0===n?void 0:n.price1} ${s}`}),l&&l.tick===u&&(0,i.jsx)(ae,{color:"neutral2",paddingTop:"4px",children:(0,i.jsx)(Z.cC,{children:"Active tick range"})})]});return(0,i.jsx)(d._,{value:r})}})}var ce=t(98961),ue=t(3167),pe=t(18124),he=t(5319),ve=t(23532),me=t(5967),xe=t(94284),fe=t(22717),ge=t(75495),ke=t(41886),we=t(82743),ye=t(13820),Pe=t(64370),be=t(97341),je=t(30520),Te=t(51578),Ie=t(48111),Ce=t(43454),_e=t(13446),Se=t(54703),Ne=t(47841),$e=t(57852);const De=(0,U.default)(we.X).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\shared__DetailBubble",componentId:"sc-43d66019-0"})`
  height: ${({$height:e})=>e?`${e}px`:"16px"};
  width: ${({$width:e})=>e?`${e}px`:"80px"};
`,Ae=(0,U.default)(we.X).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\shared__SmallDetailBubble",componentId:"sc-43d66019-1"})`
  height: 20px;
  width: 20px;
  border-radius: 100px;
`,Le=U.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsHeader__HeaderContainer",componentId:"sc-52c374d6-0"})`
  display: flex;
  justify-content: space-between;
  align-items: 'flex-start';
  width: 100%;
  ${z.Sj};
  animation-duration: ${({theme:e})=>e.transition.duration.medium};
`,Fe=(0,U.default)(H.Tv.LabelMicro).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsHeader__Badge",componentId:"sc-52c374d6-1"})`
  background: ${({theme:e})=>e.surface2};
  padding: 2px 6px;
  border-radius: 4px;
`,Ee=(0,U.default)(ve.o).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsHeader__ToggleReverseArrows",componentId:"sc-52c374d6-2"})`
  ${H.iV}
  fill: ${({theme:e})=>e.neutral2};
`,Be=(0,U.default)(we.X).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsHeader__IconBubble",componentId:"sc-52c374d6-3"})`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;function Re({chainId:e,poolAddress:o,token0:t,token1:n,loading:l}){var s,a;const r=(0,$e.tq)({chainId:e,withFallback:!0}),d=`/explore/${r.toLowerCase()}`,c=`/explore/pools/${r.toLowerCase()}`;return(0,i.jsxs)(ce.zG,{"aria-label":"breadcrumb-nav",children:[(0,i.jsxs)(ce.yY,{to:d,children:[(0,i.jsx)(Z.cC,{children:"Explore"})," ",(0,i.jsx)(Te.Z,{size:14})]}),(0,i.jsxs)(ce.yY,{to:c,children:[(0,i.jsx)(Z.cC,{children:"Pools"})," ",(0,i.jsx)(Te.Z,{size:14})]}),l||!o?(0,i.jsx)(De,{$width:200}):(0,i.jsx)(ce.f3,{address:o,poolName:`${null===(s=t)||void 0===s?void 0:s.symbol} / ${null===(a=n)||void 0===a?void 0:a.symbol}`})]})}const Me=U.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsHeader__StyledPoolDetailsTitle",componentId:"sc-52c374d6-4"})`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: max-content;
  align-items: center;
`,Oe=(0,U.default)(H.Tv.HeadlineMedium).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsHeader__PoolName",componentId:"sc-52c374d6-5"})`
  font-size: 24px !important;

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    font-size: 18px !important;
    line-height: 24px !important;
  }
`,Ve=({token0:e,token1:o,chainId:t,feeTier:n,protocolVersion:l,toggleReversed:s})=>{var r,d,c,u;const{formatPercent:p}=(0,x.Gb)(),h=n&&p(new a.Percent(n,100*ye.PM));return(0,i.jsxs)(Me,{children:[(0,i.jsx)("div",{children:(0,i.jsxs)(Oe,{children:[(0,i.jsx)(He,{to:(0,V.dG)({address:null===(r=e)||void 0===r?void 0:r.address,chain:(0,$e.tq)({chainId:t,withFallback:!0})}),children:null===(d=e)||void 0===d?void 0:d.symbol}),"\xa0/\xa0",(0,i.jsx)(He,{to:(0,V.dG)({address:null===(c=o)||void 0===c?void 0:c.address,chain:(0,$e.tq)({chainId:t,withFallback:!0})}),children:null===(u=o)||void 0===u?void 0:u.symbol})]})}),l===W.Qeo.V2&&(0,i.jsx)(Fe,{children:"v2"}),!!h&&(0,i.jsx)(Fe,{children:h}),(0,i.jsx)(Ee,{"data-testid":"toggle-tokens-reverse-arrows",onClick:s})]})},qe=(0,U.default)(xe.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsHeader__ContractsDropdownRowContainer",componentId:"sc-52c374d6-6"})`
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  gap: 12px;
  padding: 10px 8px;
  border-radius: 8px;
  &:hover {
    background: ${({theme:e})=>e.surface3};
  }
`,Ze=({address:e,chainId:o,tokens:t})=>{var n;const l=(0,U.useTheme)(),s=t[0]&&(0,V.Pc)(t[0]),a=2===t.length,r=a&&t[1]?[s,(0,V.Pc)(t[1])]:[s],d=e===Pe.dt,c=o&&e&&(0,Se.E)(o,e,d?Se.r.NATIVE:a?Se.r.ADDRESS:Se.r.TOKEN);return o&&c?(0,i.jsx)(ge.B,{href:c,children:(0,i.jsxs)(qe,{children:[(0,i.jsxs)(xe.ZP,{gap:"sm",children:[a?(0,i.jsx)(Ne.io,{chainId:o,currencies:r,size:24}):(0,i.jsx)(me.Z,{currency:s,size:24}),(0,i.jsx)(H.Tv.BodyPrimary,{children:a?(0,i.jsx)(Z.cC,{children:"Pool"}):null===(n=t[0])||void 0===n?void 0:n.symbol}),(0,i.jsx)(H.Tv.BodySecondary,{children:(0,_e.Xn)(e)})]}),(0,i.jsx)(Ie.Z,{size:"16px",stroke:l.neutral2})]})}):(0,i.jsx)(qe,{children:(0,i.jsx)(De,{$width:117})})},Xe=U.css`
  ${ke.jF}
  min-width: 235px;
  border-radius: 16px;
  ${H.cw}
`,Ue=({chainId:e,poolAddress:o,poolName:t,token0:n,token1:l})=>{var s,r;const d=(0,U.useTheme)(),[c,u]=(0,m.useReducer)((e=>!e),!1),p=(0,m.useRef)(null);return(0,je.t)(p,c?u:void 0),(0,i.jsxs)(xe.ZP,{width:"max-content",justify:"flex-end",gap:"sm",children:[(0,i.jsx)("div",{style:{position:"relative"},ref:p,children:(0,i.jsx)(ue.ud,{isOpen:c,toggleOpen:u,menuLabel:e===a.ChainId.MAINNET?(0,i.jsx)(pe.P,{width:"18px",height:"18px",fill:d.neutral1}):(0,i.jsx)(he.J,{width:"18px",height:"18px",fill:d.neutral1}),internalMenuItems:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Ze,{address:o,chainId:e,tokens:[n,l]}),(0,i.jsx)(Ze,{address:null===(s=n)||void 0===s?void 0:s.address,chainId:e,tokens:[n]}),(0,i.jsx)(Ze,{address:null===(r=l)||void 0===r?void 0:r.address,chainId:e,tokens:[l]})]}),tooltipText:Z.t`Explorers`,hideChevron:!0,buttonCss:ke.TX,menuFlyoutCss:Xe})}),(0,i.jsx)(fe.Z,{name:t})]})},He=(0,U.default)(Ce.rU).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsHeader__StyledLink",componentId:"sc-52c374d6-7"})`
  color: ${({theme:e})=>e.neutral1};
  text-decoration: none;
  ${H.iV}
`;function ze({chainId:e,poolAddress:o,token0:t,token1:n,feeTier:l,protocolVersion:a,toggleReversed:r,loading:d}){var c,u;const p=!(0,be.eI)().sm,h=`${null===(c=t)||void 0===c?void 0:c.symbol} / ${null===(u=n)||void 0===u?void 0:u.symbol}`,v=(0,m.useMemo)((()=>t&&n?[(0,V.Pc)(t),(0,V.Pc)(n)]:[]),[t,n]);return d?(0,i.jsx)(Le,{"data-testid":"pdp-header-loading-skeleton",children:p?(0,i.jsxs)(s.ZP,{gap:"sm",style:{width:"100%"},children:[(0,i.jsx)(Be,{}),(0,i.jsx)(De,{$height:40,$width:137})]}):(0,i.jsxs)(xe.ZP,{gap:"sm",children:[(0,i.jsx)(Be,{}),(0,i.jsx)(De,{$height:40,$width:137})]})}):(0,i.jsx)(Le,{children:p?(0,i.jsxs)(s.ZP,{gap:"sm",style:{width:"100%"},children:[(0,i.jsxs)(xe.ZP,{gap:"md",justify:"space-between",children:[e&&(0,i.jsx)(Ne.io,{"data-testid":"double-token-logo",chainId:e,currencies:v}),(0,i.jsx)(Ue,{chainId:e,poolAddress:o,poolName:h,token0:t,token1:n})]}),(0,i.jsx)(Ve,{token0:t,token1:n,chainId:e,feeTier:l,protocolVersion:a,toggleReversed:r})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(xe.ZP,{gap:"md",children:[e&&(0,i.jsx)(Ne.io,{"data-testid":"double-token-logo",chainId:e,currencies:v}),(0,i.jsx)(Ve,{token0:t,token1:n,chainId:e,feeTier:l,protocolVersion:a,toggleReversed:r})]}),(0,i.jsx)(Ue,{chainId:e,poolAddress:o,poolName:h,token0:t,token1:n})]})})}var We=t(86059),Ge=t(50333),Qe=t(94191),Ye=t(6282),Ke=t(66869);const Je=(0,U.default)(H.Tv.BodyPrimary).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsLink__TokenName",componentId:"sc-523b89fa-0"})`
  display: none;

  @media (max-width: ${Ke.j$.lg}px) and (min-width: ${Ke.j$.xs}px) {
    display: block;
  }
  ${H.cw}
`,eo=(0,U.default)(xe.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsLink__TokenTextWrapper",componentId:"sc-523b89fa-1"})`
  gap: 8px;
  margin-right: 12px;
  ${H.cw}
  ${({isClickable:e})=>e&&H.iV}
`,oo=(0,U.default)(H.Tv.BodyPrimary).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsLink__SymbolText",componentId:"sc-523b89fa-2"})`
  flex-shrink: 0;

  @media (max-width: ${Ke.j$.lg}px) and (min-width: ${Ke.j$.xs}px) {
    color: ${({theme:e})=>e.neutral2};
  }
`,to=(0,U.default)(xe.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsLink__CopyAddress",componentId:"sc-523b89fa-3"})`
  gap: 8px;
  padding: 8px 12px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.surface3};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
  width: max-content;
  flex-shrink: 0;
  ${H.iV}
`,io=(0,U.default)(Qe.Z).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsLink__StyledCopyIcon",componentId:"sc-523b89fa-4"})`
  width: 16px;
  height: 16px;
  color: ${({theme:e})=>e.neutral2};
  flex-shrink: 0;
`,no=U.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsLink__ExplorerWrapper",componentId:"sc-523b89fa-5"})`
  padding: 8px;
  border-radius: 20px;
  background-color: ${({theme:e})=>e.surface3};
  display: flex;
  ${H.iV}
`,lo=(0,U.default)(xe.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsLink__ButtonsRow",componentId:"sc-523b89fa-6"})`
  gap: 8px;
  flex-shrink: 0;
  width: max-content;
`;function so({address:e,chainId:o,tokens:t,loading:n}){var l,s,r,d,c,u,p;const h=(0,U.useTheme)(),v=e===Pe.dt,x=t[0]&&(0,V.Pc)(t[0]),[f,g]=(0,Ge.Z)(),k=(0,m.useCallback)((()=>{const o=(0,_e.UJ)(e);o&&g(o)}),[e,g]),w=2===t.length,y=w&&t[1]?[x,(0,V.Pc)(t[1])]:[x],P=e&&o&&(0,Se.E)(o,e,v?Se.r.NATIVE:w?Se.r.ADDRESS:Se.r.TOKEN),b=(0,Ye.s0)(),j=(0,$e.tq)({chainId:o,withFallback:!0}),T=(0,m.useCallback)((()=>{var e;w||b((0,V.dG)({address:null===(e=t[0])||void 0===e?void 0:e.address,chain:j}))}),[b,t,w,j]),[I,C]=(0,m.useState)(!1),_=(0,m.useCallback)((e=>{if(e){e.clientWidth<e.scrollWidth&&C((e=>e?"both":"start"))}}),[I]);return!n&&e&&o?(0,i.jsxs)(xe.ZP,{align:"space-between",children:[(0,i.jsxs)(eo,{"data-testid":w?`pdp-pool-logo-${null===(l=t[0])||void 0===l?void 0:l.symbol}-${null===(s=t[1])||void 0===s?void 0:s.symbol}`:`pdp-token-logo-${null===(r=t[0])||void 0===r?void 0:r.symbol}`,isClickable:!w,onClick:T,ref:_,children:[w?(0,i.jsx)(Ne.io,{chainId:o,currencies:y,size:20}):(0,i.jsx)(me.Z,{currency:x,size:20}),(0,i.jsx)(Je,{children:w?(0,i.jsx)(Z.cC,{children:"Pool"}):null===(d=t[0])||void 0===d?void 0:d.name}),(0,i.jsx)(oo,{children:w?`${null===(c=t[0])||void 0===c?void 0:c.symbol} / ${null===(u=t[1])||void 0===u?void 0:u.symbol}`:(0,i.jsxs)(xe.ZP,{gap:"4px",children:[null===(p=t[0])||void 0===p?void 0:p.symbol," ",(0,i.jsx)(Te.Z,{size:16,color:h.neutral2})]})})]}),(0,i.jsxs)(lo,{children:[!v&&(0,i.jsx)(We.ZP,{placement:"bottom",size:We.Oz.Max,show:f,text:Z.t`Copied`,children:(0,i.jsxs)(to,{"data-testid":`copy-address-${e}`,onClick:k,children:[(0,_e.Xn)(e,I?2:void 0,"both"===I?2:void 0),(0,i.jsx)(io,{})]})}),P&&(0,i.jsx)(H.dL,{href:P,"data-testid":`explorer-url-${P}`,children:(0,i.jsx)(no,{children:o===a.ChainId.MAINNET?(0,i.jsx)(pe.P,{width:"16px",height:"16px",fill:h.neutral1}):(0,i.jsx)(he.J,{width:"16px",height:"16px",fill:h.neutral1})})})]})]}):(0,i.jsxs)(xe.ZP,{gap:"8px",padding:"6px 0px",children:[(0,i.jsx)(Ae,{}),(0,i.jsx)(De,{$width:117})]})}var ao=t(19478),ro=t(39671),co=t(22953);const uo=(0,U.default)(co.xv).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__HeaderText",componentId:"sc-2836d701-0"})`
  font-weight: 485;
  font-size: 24px;
  line-height: 36px;
  @media (max-width: ${Ke.j$.lg}px) {
    width: 100%;
  }
`,po=(0,U.default)(s.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__StatsWrapper",componentId:"sc-2836d701-1"})`
  gap: 24px;
  padding: 20px;
  border-radius: 20px;
  background: ${({theme:e})=>e.surface2};
  width: 100%;
  z-index: 1;
  margin-top: ${({loaded:e})=>e&&"-24px"};

  @media (max-width: ${Ke.j$.lg}px) {
    flex-direction: row;
    background: transparent;
    flex-wrap: wrap;
    padding: 20px 0px;
    justify-content: space-between;
    margin-top: 0px;
  }
`,ho=(0,U.default)(s.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__StatItemColumn",componentId:"sc-2836d701-2"})`
  gap: 8px;
  flex: 1;
  min-width: 180px;

  @media (max-width: ${Ke.j$.sm}px) {
    min-width: 150px;
  }
`,vo=(0,U.default)(xe.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__PoolBalanceSymbols",componentId:"sc-2836d701-3"})`
  justify-content: space-between;

  @media (max-width: ${Ke.j$.lg}px) {
    flex-direction: column;
  }
`,mo=(0,U.default)(xe.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__PoolBalanceTokenNamesContainer",componentId:"sc-2836d701-4"})`
  font-weight: 485;
  font-size: 16px;
  line-height: 24px;
  width: max-content;

  @media (max-width: ${Ke.j$.lg}px) {
    font-size: 20px;
    line-height: 28px;
    width: 100%;
  }
`,xo=(0,U.default)(Ce.rU).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__StyledLink",componentId:"sc-2836d701-5"})`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.neutral1};
  ${H.iV}
`,fo=U.css`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-right: 1px solid ${({theme:e})=>e.surface2};
`,go=U.css`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left: 1px solid ${({theme:e})=>e.surface2};
`,ko=U.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__BalanceChartSide",componentId:"sc-2836d701-6"})`
  height: 8px;
  width: ${({percent:e})=>100*e}%;
  background: ${({$color:e})=>e};
  ${({isLeft:e})=>e?fo:go}
`,wo=(0,U.default)(we.X).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__StatSectionBubble",componentId:"sc-2836d701-7"})`
  width: 180px;
  height: 40px;
`,yo=(0,U.default)(we.X).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__StatHeaderBubble",componentId:"sc-2836d701-8"})`
  width: 116px;
  height: 24px;
  border-radius: 8px;
`,Po=({token:e,chainId:o})=>{var t;const n=(0,be.eI)().lg,{formatNumber:l}=(0,x.Gb)(),s=o?(0,V.vR)(o,e):e,a=(null===(t=s)||void 0===t?void 0:t.address)===Pe.dt&&o?(0,Pe.gX)(o):e.currency;return(0,i.jsxs)(mo,{children:[!n&&(0,i.jsx)(me.Z,{currency:a,size:20,style:{marginRight:"8px"}}),l({input:e.tvl,type:x.sw.TokenQuantityStats}),"\xa0",(0,i.jsxs)(xo,{to:(0,V.dG)({address:s.address,chain:(0,$e.tq)({chainId:o,withFallback:!0})}),children:[n&&(0,i.jsx)(me.Z,{currency:a,size:16,style:{marginRight:"4px",marginLeft:"4px"}}),s.symbol]})]})};function bo({poolData:e,isReversed:o,chainId:t,loading:n}){var l,a,r,d,c,u,p,h;const v=(0,be.eI)().lg,x=(0,U.useTheme)(),f=(0,ro.U8)(null===(a=e)||void 0===a||null===(l=a.token0)||void 0===l?void 0:l.address,t),g=(0,ro.U8)(null===(d=e)||void 0===d||null===(r=d.token1)||void 0===r?void 0:r.address,t),[k,w]=(0,m.useMemo)((()=>{if(e&&e.tvlToken0&&e.token0Price&&e.tvlToken1&&e.token1Price){var t,i,n,l,s,a,r,d,c,u,p,h,v,m;const x=(null===(t=e)||void 0===t?void 0:t.tvlToken0)*(null===(i=e)||void 0===i?void 0:i.token0Price)+(null===(n=e)||void 0===n?void 0:n.tvlToken1)*(null===(l=e)||void 0===l?void 0:l.token1Price),k={...null===(s=e)||void 0===s?void 0:s.token0,price:null===(a=e)||void 0===a?void 0:a.token0Price,tvl:null===(r=e)||void 0===r?void 0:r.tvlToken0,percent:(null===(d=e)||void 0===d?void 0:d.tvlToken0)*(null===(c=e)||void 0===c?void 0:c.token0Price)/x,currency:f},w={...null===(u=e)||void 0===u?void 0:u.token1,price:null===(p=e)||void 0===p?void 0:p.token1Price,tvl:null===(h=e)||void 0===h?void 0:h.tvlToken1,percent:(null===(v=e)||void 0===v?void 0:v.tvlToken1)*(null===(m=e)||void 0===m?void 0:m.token1Price)/x,currency:g};return o?[w,k]:[k,w]}return[void 0,void 0]}),[f,g,o,e]);return!n&&k&&w&&e?(0,i.jsxs)(po,{loaded:!0,children:[(0,i.jsx)(uo,{children:(0,i.jsx)(Z.cC,{children:"Stats"})}),(0,i.jsxs)(ho,{children:[(0,i.jsx)(H.Tv.BodySecondary,{children:(0,i.jsx)(Z.cC,{children:"Pool balances"})}),(0,i.jsxs)(vo,{children:[(0,i.jsx)(Po,{token:k,chainId:t}),(0,i.jsx)(Po,{token:w,chainId:t})]}),v&&(0,i.jsxs)(xe.ZP,{"data-testid":"pool-balance-chart",children:[(0,i.jsx)(ko,{percent:k.percent,$color:x.token0,isLeft:!0}),(0,i.jsx)(ko,{percent:w.percent,$color:x.token1,isLeft:!1})]})]}),(null===(c=e)||void 0===c?void 0:c.tvlUSD)&&(0,i.jsx)(Io,{title:(0,i.jsx)(Z.cC,{children:"TVL"}),value:e.tvlUSD,delta:e.tvlUSDChange}),void 0!==(null===(u=e)||void 0===u?void 0:u.volumeUSD24H)&&(0,i.jsx)(Io,{title:(0,i.jsx)(Z.cC,{children:"24H volume"}),value:e.volumeUSD24H,delta:e.volumeUSD24HChange}),void 0!==(null===(p=e)||void 0===p?void 0:p.volumeUSD24H)&&void 0!==(null===(h=e)||void 0===h?void 0:h.feeTier)&&(0,i.jsx)(Io,{title:(0,i.jsx)(Z.cC,{children:"24H fees"}),value:e.volumeUSD24H*(e.feeTier/1e6)})]}):(0,i.jsxs)(po,{children:[(0,i.jsx)(uo,{children:(0,i.jsx)(yo,{})}),Array.from({length:4}).map(((e,o)=>(0,i.jsxs)(s.ZP,{gap:"md",children:[(0,i.jsx)(De,{}),(0,i.jsx)(wo,{})]},`loading-info-row-${o}`)))]})}const jo=(0,U.default)(xe.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__StatsTextContainer",componentId:"sc-2836d701-9"})`
  gap: 4px;
  width: 100%;
  align-items: flex-end;

  @media (max-width: ${Ke.j$.lg}px) {
    flex-direction: column;
    gap: 0px;
    align-items: flex-start;
  }
`,To=(0,U.default)(co.xv).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStats__StatItemText",componentId:"sc-2836d701-10"})`
  color: ${({theme:e})=>e.neutral1};
  font-size: 36px;
  font-weight: 485;
  line-height: 44px;

  @media (max-width: ${Ke.j$.lg}px) {
    font-size: 20px;
    line-height: 28px;
  }
`;function Io({title:e,value:o,delta:t}){const{formatNumber:n,formatDelta:l}=(0,x.Gb)();return(0,i.jsxs)(ho,{children:[(0,i.jsx)(H.Tv.BodySecondary,{children:e}),(0,i.jsxs)(jo,{children:[(0,i.jsx)(To,{children:n({input:o,type:x.sw.FiatTokenStats})}),!!t&&(0,i.jsxs)(xe.ZP,{width:"max-content",padding:"4px 0px",children:[(0,i.jsx)(ao.Kx,{delta:t}),(0,i.jsx)(H.Tv.BodySecondary,{children:l(t)})]})]})]})}var Co=t(26729),_o=t(56708),So=t(91216),No=t(69924),$o=t(56536),Do=t(79833),Ao=t(80149),Lo=t(93741),Fo=t(83102),Eo=t(32972),Bo=t(63194),Ro=t(57809),Mo=t(62652),Oo=t(62587),Vo=t(17202);function qo(e,o,t,i,n,l,s){try{var a=e[l](s),r=a.value}catch(d){return void t(d)}a.done?o(r):Promise.resolve(r).then(i,n)}const Zo=(0,U.default)(xe.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStatsButtons__PoolDetailsStatsButtonsRow",componentId:"sc-df652eed-0"})`
  gap: 12px;
  z-index: 1;

  @media (max-width: ${Ke.j$.lg}px) {
    gap: 8px;
    position: fixed;
    bottom: 0px;
    left: 0;
    margin: 8px;
    width: calc(100% - 16px);
    background: ${({theme:e})=>e.surface1};
    padding: 12px 32px;
    border: 1px solid ${({theme:e})=>e.surface3};
    border-radius: 20px;
    backdrop-filter: blur(10px);
    & > :first-child {
      margin-right: auto;
    }
    z-index: ${Oo.k.sticky};
  }
  @media (max-width: ${Ke.j$.md}px) {
    bottom: 56px;
  }
`,Xo=U.default.button.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStatsButtons__PoolButton",componentId:"sc-df652eed-1"})`
  display: flex;
  flex-direction: row;
  padding: 12px 16px 12px 12px;
  border: unset;
  border-radius: 900px;
  width: ${({$open:e})=>e?"100px":"50%"};
  gap: 8px;
  color: ${({theme:e,$open:o})=>o?e.neutral1:e.accent1};
  background-color: ${({theme:e,$open:o})=>o?e.surface1:(0,Mo.jb)(12,e.accent1)};
  justify-content: center;
  transition: ${({theme:e})=>`width ${e.transition.duration.medium} ${e.transition.timing.inOut}`};
  border: ${({theme:e,$open:o})=>o&&`1px solid ${e.surface3}`};
  ${H.iV}
  @media (max-width: ${Ke.j$.lg}px) {
    width: ${({$fixedWidth:e})=>e&&"120px"};
  }
  @media (max-width: ${Ke.j$.sm}px) {
    display: ${({$hideOnMobile:e})=>e&&"none"};
    width: ${({$fixedWidth:e})=>!e&&"100%"};
  }
`,Uo=(0,U.default)(ve.o).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStatsButtons__SwapIcon",componentId:"sc-df652eed-2"})`
  fill: ${({theme:e})=>e.accent1};
  rotate: 90deg;
`,Ho=(0,U.default)(we.X).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStatsButtons__ButtonBubble",componentId:"sc-df652eed-3"})`
  height: 44px;
  width: 175px;
  border-radius: 900px;
`,zo=(0,U.default)(s.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStatsButtons__SwapModalWrapper",componentId:"sc-df652eed-4"})`
  z-index: 0;
  gap: 24px;
  visibility: ${({open:e})=>e?"visible":"hidden"};
  opacity: ${({open:e})=>e?"1":"0"};
  max-height: ${({open:e})=>e?"100vh":"0"};
  transition: ${({theme:e})=>`max-height ${e.transition.duration.medium} ${e.transition.timing.ease}`};
  padding-bottom: ${({open:e})=>e?"24px":"0"};

  ${$o.R0} {
    &:before {
      background-color: unset;
    }
  }

  // Need to override the default visibility to properly hide
  ${No.Vt} {
    visibility: ${({open:e})=>e?"visible":"hidden"};
  }

  @media (max-width: ${Ke.j$.lg}px) {
    position: fixed;
    width: calc(100% - 16px);
    padding: 0px 12px 12px;
    border-radius: 24px;
    max-width: 480px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: ${Oo.k.fixed};
    background: ${({theme:e})=>e.surface1};
    transition: ${({theme:e})=>`opacity ${e.transition.duration.medium} ${e.transition.timing.ease}`};
  }
`,Wo=(0,U.default)(s.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsStatsButtons__MobileBalance",componentId:"sc-df652eed-5"})`
  gap: 2px;
  display: none;
  @media (max-width: ${Ke.j$.lg}px) {
    display: flex;
  }
`;function Go({chainId:e,token0:o,token1:t,feeTier:n,loading:l}){var a,r,d,c,u,p,h,v,f,g;const{chainId:k,account:w}=(0,Co.G)(),{positions:y}=(0,So.Z)(w??"",e?[e]:void 0),P=y&&function(e,o,t,i){var n;return null===(n=e)||void 0===n?void 0:n.find((e=>{var n,l,s,a,r,d,c,u,p;return((null===(n=e)||void 0===n?void 0:n.details.token0.toLowerCase())===(null===(l=o)||void 0===l?void 0:l.address)||(null===(s=e)||void 0===s?void 0:s.details.token0.toLowerCase())===(null===(a=t)||void 0===a?void 0:a.address))&&((null===(r=e)||void 0===r?void 0:r.details.token1.toLowerCase())===(null===(d=o)||void 0===d?void 0:d.address)||(null===(c=e)||void 0===c?void 0:c.details.token1.toLowerCase())===(null===(u=t)||void 0===u?void 0:u.address))&&(null===(p=e)||void 0===p?void 0:p.details.fee)==i&&!e.closed}))}(y,o,t,n),b=null===(a=P)||void 0===a?void 0:a.details.tokenId,j=(0,Fo.o)(),T=(0,Ye.s0)(),I=o&&(0,V.Pc)(o),C=t&&(0,V.Pc)(t),{data:_}=(0,Lo.vv)(),{balance0:S,balance1:N,balance0Fiat:$,balance1Fiat:D}=(0,m.useMemo)((()=>{var i,n,l,s,a,r,d,c,u,p,h,v;const m=null===(s=_)||void 0===s||null===(l=s.portfolios)||void 0===l||null===(n=l[0])||void 0===n||null===(i=n.tokenBalances)||void 0===i?void 0:i.filter((o=>{var t,i;return(null===(i=o)||void 0===i||null===(t=i.token)||void 0===t?void 0:t.chain)===(0,$e.tq)({chainId:e,withFallback:!0})})),x=null===(a=m)||void 0===a?void 0:a.find((e=>{var t,i,n;return(null===(i=e)||void 0===i||null===(t=i.token)||void 0===t?void 0:t.address)===(null===(n=o)||void 0===n?void 0:n.address)})),f=null===(r=m)||void 0===r?void 0:r.find((e=>{var o,i,n;return(null===(i=e)||void 0===i||null===(o=i.token)||void 0===o?void 0:o.address)===(null===(n=t)||void 0===n?void 0:n.address)}));return{balance0:(null===(d=x)||void 0===d?void 0:d.quantity)??0,balance1:(null===(c=f)||void 0===c?void 0:c.quantity)??0,balance0Fiat:(null===(p=x)||void 0===p||null===(u=p.denominatedValue)||void 0===u?void 0:u.value)??0,balance1Fiat:(null===(v=f)||void 0===v||null===(h=v.denominatedValue)||void 0===h?void 0:h.value)??0}}),[null===(r=_)||void 0===r?void 0:r.portfolios,e,null===(d=o)||void 0===d?void 0:d.address,null===(c=t)||void 0===c?void 0:c.address]),{formatNumber:A}=(0,x.Gb)(),L=A({input:S,type:x.sw.TokenNonTx}),F=A({input:N,type:x.sw.TokenNonTx}),E=$+D,B=A({input:E,type:x.sw.PortfolioBalance}),R=function(){var o,t=(o=function*(){I&&C&&(k!==e&&e&&(yield j(e)),T(`/add/${(0,Vo.H)(I)}/${(0,Vo.H)(C)}/${n}${b?`/${b}`:""}`))},function(){var e=this,t=arguments;return new Promise((function(i,n){var l=o.apply(e,t);function s(e){qo(l,i,n,s,a,"next",e)}function a(e){qo(l,i,n,s,a,"throw",e)}s(void 0)}))});return function(){return t.apply(this,arguments)}}(),[M,O]=(0,m.useReducer)((e=>!e),!1),q=(0,be.eI)(),X=q.lg,U=!q.sm,z=(0,Ao.Xp)(null===(u=o)||void 0===u?void 0:u.address,e),W=(0,Ao.Xp)(null===(p=t)||void 0===p?void 0:p.address,e),G=(0,Ao.em)(z,W);return!l&&I&&C?(0,i.jsxs)(s.ZP,{gap:"lg",children:[(0,i.jsxs)(Zo,{children:[w&&(0,i.jsxs)(Wo,{children:[(0,i.jsx)(H.Tv.SubHeaderSmall,{children:(0,i.jsx)(Z.cC,{children:"Your balances"})}),(0,i.jsxs)(xe.ZP,{gap:"8px",children:[(0,i.jsxs)(H.Tv.HeadlineSmall,{children:[L," ",I.symbol]}),(0,i.jsx)(H.Tv.HeadlineSmall,{color:"neutral3",children:"|"}),(0,i.jsxs)(H.Tv.HeadlineSmall,{children:[F," ",C.symbol]}),Boolean(E)&&!U&&(0,i.jsxs)(H.Tv.Caption,{children:["(",B,")"]})]})]}),(0,i.jsx)(Xo,{onClick:O,$open:M,$fixedWidth:Boolean(w),"data-testid":`pool-details-${M?"close":"swap"}-button`,children:M?(0,i.jsxs)(i.Fragment,{children:[X&&(0,i.jsx)(Bo.Z,{size:20}),(0,i.jsx)(H.Tv.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,i.jsx)(Z.cC,{children:"Close"})})]}):(0,i.jsxs)(i.Fragment,{children:[X&&(0,i.jsx)(Uo,{}),(0,i.jsx)(H.Tv.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,i.jsx)(Z.cC,{children:"Swap"})})]})}),(0,i.jsxs)(Xo,{onClick:R,"data-testid":"pool-details-add-liquidity-button",$fixedWidth:Boolean(w),$hideOnMobile:!0,children:[X&&(0,i.jsx)(Ro.Z,{size:20}),(0,i.jsx)(H.Tv.BodyPrimary,{fontWeight:535,color:"accentActive",children:(0,i.jsx)(Z.cC,{children:"Add liquidity"})})]})]}),(0,i.jsxs)(zo,{open:M,"data-testid":"pool-details-swap-modal",children:[(0,i.jsx)(Eo.HY,{syncTabToUrl:!1,chainId:e,initialInputCurrency:I,initialOutputCurrency:C,compact:!0,disableTokenInputs:e!==k}),Boolean(G)&&(0,i.jsx)(Do.Z,{tokenAddress:(G===z?null===(h=o)||void 0===h?void 0:h.address:null===(v=t)||void 0===v?void 0:v.address)??"",warning:G??Ao.Jf,plural:Boolean(z&&W),tokenSymbol:G===z?null===(f=o)||void 0===f?void 0:f.symbol:null===(g=t)||void 0===g?void 0:g.symbol})]}),(0,i.jsx)(_o.Z,{$open:M&&!X,$maxWidth:Ke.j$.lg,$zIndex:Oo.k.sticky,onClick:O})]}):(0,i.jsxs)(Zo,{"data-testid":"pdp-buttons-loading-skeleton",children:[(0,i.jsx)(Wo,{children:(0,i.jsx)(Ho,{})}),(0,i.jsx)(Ho,{}),(0,i.jsx)(Ho,{})]})}const Qo=e=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",...e,children:[(0,i.jsxs)("g",{clipPath:"url(#clip0_2958_135280)",children:[(0,i.jsx)("path",{d:"M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z",stroke:"#9B9B9B",strokeLinecap:"round",strokeLinejoin:"round"}),(0,i.jsx)("path",{d:"M2.46484 2.46509L9.53484 9.53509",stroke:"#9B9B9B",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,i.jsx)("defs",{children:(0,i.jsx)("clipPath",{id:"clip0_2958_135280",children:(0,i.jsx)("rect",{width:"12",height:"12",fill:"white"})})})]});var Yo=t(57221),Ko=t(31744);function Jo(e,o,t,i,n,l,s){try{var a=e[l](s),r=a.value}catch(d){return void t(d)}a.done?o(r):Promise.resolve(r).then(i,n)}function et(e){return function(){var o=this,t=arguments;return new Promise((function(i,n){var l=e.apply(o,t);function s(e){Jo(l,i,n,s,a,"next",e)}function a(e){Jo(l,i,n,s,a,"throw",e)}s(void 0)}))}}const ot=(0,U.default)(s.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsPositionsTable__PositionTableWrapper",componentId:"sc-829d8aa-0"})`
  gap: 24px;
  margin-top: 24px;
  width: 100%;
`,tt=(0,U.default)(s.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsPositionsTable__PositionWrapper",componentId:"sc-829d8aa-1"})`
  gap: 4px;
  background: ${({theme:e})=>e.surface2};
  border-radius: 12px;
  width: 100%;
  ${H.iV}
  padding: 16px;
`,it=(0,U.default)(H.Tv.LabelMicro).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsPositionsTable__FeeTier",componentId:"sc-829d8aa-2"})`
  padding: 4px 6px;
  background: ${({theme:e})=>e.surface2};
`,nt=(0,U.default)(xe.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsPositionsTable__StatusWrapper",componentId:"sc-829d8aa-3"})`
  gap: 8px;
  width: max-content;
  margin-right: 0;
  margin-left: auto;
  color: ${({theme:e,status:o})=>o===dt.IN_RANGE?e.success:o===dt.OUT_OF_RANGE?e.deprecated_accentWarning:e.neutral2};
`,lt=(0,U.default)(xe.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsPositionsTable__RangeWrapper",componentId:"sc-829d8aa-4"})`
  gap: 10px;

  @media screen and (max-width: ${Ke.j$.sm}px) {
    flex-direction: column;
    gap: 4px;
    align-items: flex-start;
  }
`,st=(0,U.default)((e=>(0,i.jsx)("svg",{width:"14",height:"9",viewBox:"0 0 14 9",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"M4.00284 8.5L0.184659 4.68182L4.00284 0.863636L4.65909 1.51136L1.95739 4.21307H12.1335L9.43182 1.51136L10.0881 0.863636L13.9062 4.68182L10.0881 8.5L9.43182 7.84375L12.1335 5.15057H1.95739L4.65909 7.84375L4.00284 8.5Z",fill:"#5E5E5E"})}))).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsPositionsTable__StyledDoubleArrow",componentId:"sc-829d8aa-5"})`
  @media screen and (max-width: ${Ke.j$.sm}px) {
    display: none;
  }
`,at=(0,U.default)(H.Tv.Caption).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsPositionsTable__RangeText",componentId:"sc-829d8aa-6"})`
  width: max-content;
  white-space: nowrap;
`,rt=U.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsPositionsTable__StyledDot",componentId:"sc-829d8aa-7"})`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({theme:e})=>e.success};
`;var dt;function ct({positionInfo:e}){const o=[(0,ro.U8)(e.details.token0,e.chainId),(0,ro.U8)(e.details.token1,e.chainId)],{chainId:t}=(0,Co.G)(),n=(0,Ye.s0)(),l=(0,Fo.o)(),s=(0,U.useTheme)(),{formatTickPrice:a}=(0,x.Gb)(),r=(0,m.useCallback)(et((function*(){t!==e.chainId&&(yield l(e.chainId)),n("/pool/"+e.details.tokenId)})),[n,e.chainId,e.details.tokenId,l,t]),d=e.inRange?dt.IN_RANGE:e.closed?dt.CLOSED:dt.OUT_OF_RANGE,c=e.position.token0PriceLower.invert(),u=e.position.token0PriceUpper.invert(),p={LOWER:0===parseFloat(u.toFixed(0)),UPPER:parseFloat(c.toFixed(0))>Number.MAX_SAFE_INTEGER};return(0,i.jsxs)(tt,{onClick:r,children:[(0,i.jsxs)(xe.ZP,{gap:"8px",children:[(0,i.jsx)(Ne.ge,{currencies:o,size:16}),(0,i.jsxs)(H.Tv.SubHeader,{children:[e.pool.token0.symbol,"/",e.pool.token1.symbol]}),(0,i.jsxs)(it,{children:[e.pool.fee/ye.PM,"%"]}),(0,i.jsxs)(nt,{status:d,children:[(0,i.jsx)(H.Tv.Caption,{color:"inherit",children:d}),d===dt.IN_RANGE&&(0,i.jsx)(rt,{}),d===dt.OUT_OF_RANGE&&(0,i.jsx)(Yo.Z,{size:12,color:s.deprecated_accentWarning}),d===dt.CLOSED&&(0,i.jsx)(Qo,{})]})]}),(0,i.jsxs)(lt,{children:[(0,i.jsxs)(at,{"data-testid":`position-min-${u.toFixed(0)}`,children:[(0,i.jsx)(Z.cC,{children:"Min:"}),"\xa0",a({price:u,atLimit:p,direction:Ko.Mb.LOWER}),"\xa0",e.pool.token0.symbol,"\xa0",(0,i.jsx)(Z.cC,{children:"per"}),"\xa0",e.pool.token1.symbol]}),(0,i.jsx)(st,{}),(0,i.jsxs)(at,{"data-testid":`position-max-${c.toFixed(0)}`,children:[(0,i.jsx)(Z.cC,{children:"Max:"}),"\xa0",a({price:c,atLimit:p,direction:Ko.Mb.UPPER}),"\xa0",e.pool.token0.symbol,"\xa0",(0,i.jsx)(Z.cC,{children:"per"}),"\xa0",e.pool.token1.symbol]})]})]})}function ut({positions:e}){return(0,i.jsx)(ot,{children:e.map(((e,o)=>(0,i.jsx)(ct,{positionInfo:e},`pool-position-${o}`)))})}!function(e){e.IN_RANGE="In range",e.OUT_OF_RANGE="Out of range",e.CLOSED="Closed"}(dt||(dt={}));var pt,ht=t(73705),vt=t(66789),mt=t(53083),xt=t(57144),ft=t(23388),gt=t(42183),kt=t(70559);!function(e){e.BUY="Buy",e.SELL="Sell",e.BURN="Burn",e.MINT="Mint"}(pt||(pt={}));const wt=25;var yt=t(63945),Pt=t(95685);const bt=(0,U.default)(H.dL).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsTransactionsTable__StyledExternalLink",componentId:"sc-7f8ae12c-0"})`
  color: ${({theme:e})=>e.neutral2};
  stroke: ${({theme:e})=>e.neutral2};
`,jt=U.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsTransactionsTable__TableWrapper",componentId:"sc-7f8ae12c-1"})`
  min-height: 256px;
`;var Tt;!function(e){e[e.Timestamp=0]="Timestamp",e[e.Type=1]="Type",e[e.MakerAddress=2]="MakerAddress",e[e.FiatValue=3]="FiatValue",e[e.InputAmount=4]="InputAmount",e[e.OutputAmount=5]="OutputAmount"}(Tt||(Tt={}));const It={[Tt.Timestamp]:120,[Tt.Type]:144,[Tt.MakerAddress]:100,[Tt.FiatValue]:125,[Tt.InputAmount]:125,[Tt.OutputAmount]:125};function Ct(e,o){var t,i,n;if((null===(t=o)||void 0===t?void 0:t.address)===Pe.dt){var l;const t=(0,V.Tz)(o.chain);return t&&e.id.toLowerCase()===(null===(l=Pe.Fl[t])||void 0===l?void 0:l.address.toLowerCase())}return e.id.toLowerCase()===(null===(n=o)||void 0===n||null===(i=n.address)||void 0===i?void 0:i.toLowerCase())}function _t({poolAddress:e,token0:o,token1:t,protocolVersion:n}){var l;const s=(0,V.L7)((0,$e.WN)(),{fallbackToEthereum:!0}),r=(0,Pt.XB)(),{formatNumber:d,formatFiatPrice:c}=(0,x.Gb)(),[u,p]=(0,m.useReducer)((e=>!e),!1),[h,v]=(0,m.useState)([pt.BUY,pt.SELL,pt.BURN,pt.MINT]),[f]=(0,m.useState)({sortBy:yt.ri.Timestamp,sortDirection:yt.N9.Desc}),{transactions:g,loading:k,loadMore:w,error:y}=function(e,o,t=[pt.BUY,pt.SELL,pt.BURN,pt.MINT],i,n=W.Qeo.V3,l=wt){var s,r,d,c,u;const p=(0,kt.ye)(gt.TP.V2Explore),{loading:h,error:v,data:x,fetchMore:f}=(0,W.uv5)({variables:{first:l,chain:(0,$e.tq)({chainId:o,withFallback:!0}),address:e},skip:n!==W.Qeo.V3}),{loading:g,error:k,data:w,fetchMore:y}=(0,W.arC)({variables:{first:l,chain:(0,$e.tq)({chainId:o,withFallback:!0}),address:e},skip:!o||n!==W.Qeo.V2||o!==a.ChainId.MAINNET&&!p}),P=(0,m.useRef)(!1),{transactions:b,loading:j,fetchMore:T,error:I}=n===W.Qeo.V3?{transactions:null===(r=x)||void 0===r||null===(s=r.v3Pool)||void 0===s?void 0:s.transactions,loading:h,fetchMore:f,error:v}:{transactions:null===(c=w)||void 0===c||null===(d=c.v2Pair)||void 0===d?void 0:d.transactions,loading:g,fetchMore:y,error:k},C=(0,m.useCallback)((({onComplete:e})=>{var o,t;P.current||(P.current=!0,T({variables:{cursor:null===(t=b)||void 0===t||null===(o=t[b.length-1])||void 0===o?void 0:o.timestamp},updateQuery:(o,{fetchMoreResult:t})=>{var i,l,s;if(!t)return o;null===(i=e)||void 0===i||i();const a=n===W.Qeo.V3?{v3Pool:{...t.v3Pool,transactions:[...(null===(l=o.v3Pool)||void 0===l?void 0:l.transactions)??[],...t.v3Pool.transactions]}}:{v2Pair:{...t.v2Pair,transactions:[...(null===(s=o.v2Pair)||void 0===s?void 0:s.transactions)??[],...t.v2Pair.transactions]}};return P.current=!1,a}}))}),[T,b,n]),_=(0,m.useMemo)((()=>{var e;return null===(e=b??[])||void 0===e?void 0:e.map((e=>{var o,n,l,s;if(!e)return;const a=(null===(n=parseFloat(e.token0Quantity)>0?e.token0:e.token1)||void 0===n||null===(o=n.address)||void 0===o?void 0:o.toLowerCase())===(null===(s=i)||void 0===s||null===(l=s.address)||void 0===l?void 0:l.toLowerCase()),r=e.type===W.uGm.Swap?a?pt.SELL:pt.BUY:e.type===W.uGm.Remove?pt.BURN:pt.MINT;return t.includes(r)?{timestamp:e.timestamp,transaction:e.hash,pool:{token0:{id:e.token0.address??"",symbol:e.token0.symbol??""},token1:{id:e.token1.address??"",symbol:e.token1.symbol??""}},maker:e.account,amount0:parseFloat(e.token0Quantity),amount1:parseFloat(e.token1Quantity),amountUSD:e.usdValue.value,type:r}:void 0})).filter((e=>void 0!==e))}),[b,t,null===(u=i)||void 0===u?void 0:u.address]);return(0,m.useMemo)((()=>({transactions:_,loading:j,loadMore:C,error:I})),[_,j,C,I])}(e,s.id,h,o,n),P=k||!!y,b=(0,m.useMemo)((()=>{const e=(0,ht.Cl)();return[e.accessor((e=>e),{id:"timestamp",header:()=>(0,i.jsx)(mt.b,{minWidth:It[Tt.Timestamp],justifyContent:"flex-start",children:(0,i.jsxs)(xe.ZP,{gap:"4px",children:[f.sortBy===yt.ri.Timestamp&&(0,i.jsx)(ft.iX,{direction:yt.N9.Desc}),(0,i.jsx)(ft.Hu,{$active:f.sortBy===yt.ri.Timestamp,children:(0,i.jsx)(Z.cC,{children:"Time"})})]})}),cell:e=>{var o,t,n,l;return(0,i.jsx)(mt.b,{loading:P,minWidth:It[Tt.Timestamp],justifyContent:"flex-start",children:(0,i.jsx)(ft._q,{timestamp:Number(null===(o=(t=e).getValue)||void 0===o?void 0:o.call(t).timestamp),link:(0,Se.E)(s.id,null===(n=(l=e).getValue)||void 0===n?void 0:n.call(l).transaction,Se.r.TRANSACTION)})})}}),e.accessor((e=>{let t,n;var l;if(e.type===pt.BUY)t="success",n=(0,i.jsxs)("span",{children:[(0,i.jsx)(Z.cC,{children:"Buy"}),"\xa0",null===(l=o)||void 0===l?void 0:l.symbol]});else if(e.type===pt.SELL){var s;t="critical",n=(0,i.jsxs)("span",{children:[(0,i.jsx)(Z.cC,{children:"Sell"}),"\xa0",null===(s=o)||void 0===s?void 0:s.symbol]})}else t=e.type===pt.MINT?"success":"critical",n=e.type===pt.MINT?(0,i.jsx)(Z.cC,{children:"Add"}):(0,i.jsx)(Z.cC,{children:"Remove"});return(0,i.jsx)(H.Tv.BodyPrimary,{color:t,children:n})}),{id:"swap-type",header:()=>(0,i.jsx)(mt.b,{minWidth:It[Tt.Type],justifyContent:"flex-start",children:(0,i.jsxs)(ft.j4,{modalOpen:u,onClick:()=>p(),children:[(0,i.jsx)(xt.w,{allFilters:Object.values(pt),activeFilter:h,setFilters:v,isOpen:u,toggleFilterModal:p}),(0,i.jsx)(H.Tv.BodySecondary,{children:(0,i.jsx)(Z.cC,{children:"Type"})})]})}),cell:e=>{var o,t;return(0,i.jsx)(mt.b,{loading:P,minWidth:It[Tt.Type],justifyContent:"flex-start",children:null===(o=(t=e).getValue)||void 0===o?void 0:o.call(t)})}}),e.accessor((e=>e.amountUSD),{id:"fiat-value",header:()=>(0,i.jsx)(mt.b,{minWidth:It[Tt.FiatValue],justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(H.Tv.BodySecondary,{children:r})}),cell:e=>{var o,t;return(0,i.jsx)(mt.b,{loading:P,minWidth:It[Tt.FiatValue],justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(H.Tv.BodyPrimary,{children:c({price:null===(o=(t=e).getValue)||void 0===o?void 0:o.call(t)})})})}}),e.accessor((e=>Ct(e.pool.token0,o)?e.amount0:e.amount1),{id:"input-amount",header:()=>{var e;return(0,i.jsx)(mt.b,{loading:P,minWidth:It[Tt.InputAmount],justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(H.Tv.BodySecondary,{children:null===(e=o)||void 0===e?void 0:e.symbol})})},cell:e=>{var o,t;return(0,i.jsx)(mt.b,{loading:P,minWidth:It[Tt.InputAmount],justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(H.Tv.BodyPrimary,{children:d({input:Math.abs((null===(o=(t=e).getValue)||void 0===o?void 0:o.call(t))??0),type:x.sw.TokenTx})})})}}),e.accessor((e=>Ct(e.pool.token0,o)?e.amount1:e.amount0),{id:"output-amount",header:()=>{var e;return(0,i.jsx)(mt.b,{loading:P,minWidth:It[Tt.OutputAmount],justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(H.Tv.BodySecondary,{children:null===(e=t)||void 0===e?void 0:e.symbol})})},cell:e=>{var o,t;return(0,i.jsx)(mt.b,{loading:P,minWidth:It[Tt.OutputAmount],justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(H.Tv.BodyPrimary,{children:d({input:Math.abs((null===(o=(t=e).getValue)||void 0===o?void 0:o.call(t))??0),type:x.sw.TokenTx})})})}}),e.accessor((e=>e.maker),{id:"maker-address",header:()=>(0,i.jsx)(mt.b,{minWidth:It[Tt.MakerAddress],justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(H.Tv.BodySecondary,{children:(0,i.jsx)(Z.cC,{children:"Wallet"})})}),cell:e=>{var o,t,n,l;return(0,i.jsx)(mt.b,{loading:P,minWidth:It[Tt.MakerAddress],justifyContent:"flex-end",grow:!0,children:(0,i.jsx)(bt,{href:(0,Se.E)(s.id,null===(o=(t=e).getValue)||void 0===o?void 0:o.call(t),Se.r.ADDRESS),children:(0,i.jsx)(H.Tv.BodyPrimary,{children:(0,_e.Xn)(null===(n=(l=e).getValue)||void 0===n?void 0:n.call(l),0)})})})}})]}),[r,s.id,h,u,c,d,P,f.sortBy,o,null===(l=t)||void 0===l?void 0:l.symbol]);return(0,i.jsx)(jt,{"data-testid":"pool-details-transactions-table",children:(0,i.jsx)(vt.i,{columns:b,data:g,loading:k,error:y,loadMore:w,maxHeight:600})})}var St;!function(e){e.TRANSACTIONS="transactions",e.POSITIONS="positions"}(St||(St={}));const Nt=(0,U.default)(H.Tv.HeadlineMedium).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Pools\\PoolDetails\\PoolDetailsTable__TableHeader",componentId:"sc-52a18a5b-0"})`
  color: ${({theme:e,active:o})=>!o&&e.neutral2};
  ${({disabled:e})=>!e&&H.iV}
  user-select: none;
`;function $t({poolAddress:e,token0:o,token1:t,protocolVersion:n}){var l;const[a,d]=(0,m.useState)(St.TRANSACTIONS),c=(0,V.L7)((0,$e.WN)(),{fallbackToEthereum:!0}),{account:u}=(0,Co.G)(),{positions:p}=(0,So.Z)(u??"",[c.id]),h=(0,m.useMemo)((()=>{var o;return(null===(o=p)||void 0===o?void 0:o.filter((o=>r.Pool.getAddress(o.pool.token0,o.pool.token1,o.pool.fee).toLowerCase()===e.toLowerCase())))??[]}),[e,p]);return(0,i.jsxs)(s.ZP,{gap:"lg",children:[(0,i.jsxs)(xe.ZP,{gap:"16px",children:[(0,i.jsx)(Nt,{active:a===St.TRANSACTIONS,onClick:()=>d(St.TRANSACTIONS),disabled:!h.length,children:(0,i.jsx)(Z.cC,{children:"Transactions"})}),Boolean(h.length)&&(0,i.jsxs)(Nt,{active:a===St.POSITIONS,onClick:()=>d(St.POSITIONS),children:[(0,i.jsx)(Z.cC,{children:"Positions"}),` (${null===(l=h)||void 0===l?void 0:l.length})`]})]}),a===St.TRANSACTIONS?(0,i.jsx)(_t,{poolAddress:e,token0:o,token1:t,protocolVersion:n}):(0,i.jsx)(ut,{positions:h})]})}var Dt=t(75748),At=t(63490),Lt=t.n(At);function Ft(e){if(!e)return;const o=(new Date).getTime(),t=(o-Lt()("1d"))/1e3,i=(o-Lt()("2d"))/1e3,n=e.filter((e=>{var o;return void 0!==(null===(o=e)||void 0===o?void 0:o.timestamp)&&e.timestamp>=t})).reduce(((e,o)=>e+o.value),0),l=e.filter((e=>{var o;return void 0!==(null===(o=e)||void 0===o?void 0:o.timestamp)&&e.timestamp>=i&&e.timestamp<t})).reduce(((e,o)=>e+o.value),0);return(n-l)/l*100}var Et=t(3359),Bt=t(46012);const Rt=e=>{var o,t;const i=null===(o=e)||void 0===o?void 0:o.token0.symbol,n=null===(t=e)||void 0===t?void 0:t.token1.symbol,l=Z.t`Buy and sell on Uniswap`;return i&&n?`${i}/${n}: ${l}`:l};var Mt=t(37018),Ot=t(437);const Vt=(0,U.default)(xe.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\PoolDetails\\index__PageWrapper",componentId:"sc-e9016f90-0"})`
  padding: 0 16px 52px;
  justify-content: center;
  width: 100%;
  gap: 40px;
  align-items: flex-start;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    padding: 48px 20px;
  }
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.lg}px) {
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.xl}px) {
    gap: 60px;
  }
`,qt=(0,U.default)(s.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\PoolDetails\\index__LeftColumn",componentId:"sc-e9016f90-1"})`
  gap: 40px;
  max-width: 780px;
  overflow: hidden;
  justify-content: flex-start;

  @media (max-width: ${Ke.j$.lg}px) {
    width: 100%;
    max-width: unset;
  }
`,Zt=U.default.hr.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\PoolDetails\\index__HR",componentId:"sc-e9016f90-2"})`
  border: 0.5px solid ${({theme:e})=>e.surface3};
  width: 100%;
`,Xt=(0,U.default)(s.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\PoolDetails\\index__RightColumn",componentId:"sc-e9016f90-3"})`
  gap: 24px;
  width: 360px;

  @media (max-width: ${Ke.j$.lg}px) {
    margin: 44px 0px;
    width: 100%;
    min-width: unset;
    & > *:first-child {
      margin-top: -24px;
    }
  }
`,Ut=(0,U.default)(s.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\PoolDetails\\index__TokenDetailsWrapper",componentId:"sc-e9016f90-4"})`
  gap: 24px;
  padding: 20px;

  @media (max-width: ${Ke.j$.lg}px) and (min-width: ${Ke.j$.sm}px) {
    flex-direction: row;
    flex-wrap: wrap;
    padding: unset;
  }

  @media (max-width: ${Ke.j$.sm}px) {
    padding: unset;
  }
`,Ht=(0,U.default)(co.xv).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\PoolDetails\\index__TokenDetailsHeader",componentId:"sc-e9016f90-5"})`
  width: 100%;
  font-size: 24px;
  font-weight: 485;
  line-height: 32px;
`,zt=(0,U.default)(s.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\pages\\PoolDetails\\index__LinksContainer",componentId:"sc-e9016f90-6"})`
  gap: 16px;
  width: 100%;
`;function Wt(){var e,o,t,r,d,c,u,p,h,v,x,f,g,k,w,y,P,b,j,T,I,C,_,S,N,$,D,A,L,F;const{poolAddress:E}=(0,Ye.UO)(),B=(0,V.L7)((0,$e.WN)()),{data:R,loading:M}=function(e,o){var t,i;const n=(0,kt.ye)(gt.TP.V2Explore),{loading:l,error:s,data:r}=(0,W.Bn1)({variables:{chain:(0,$e.tq)({chainId:o,withFallback:!0}),address:e},errorPolicy:"all"}),{loading:d,error:c,data:u}=(0,W.gyz)({variables:{chain:(0,$e.tq)({chainId:o,withFallback:!0}),address:e},skip:!o||o!==a.ChainId.MAINNET&&!n,errorPolicy:"all"});return(0,m.useMemo)((()=>{var e,t,i,p,h,v,m,x,f,g,k,w,y,P,b,j,T,I;const C=Boolean(s||c&&(o===a.ChainId.MAINNET||n)),_=Boolean(l||d&&(o===a.ChainId.MAINNET||n)),S=(null===(e=r)||void 0===e?void 0:e.v3Pool)??(null===(t=u)||void 0===t?void 0:t.v2Pair)??void 0,N=(null===(p=r)||void 0===p||null===(i=p.v3Pool)||void 0===i?void 0:i.feeTier)??Dt.y9;return{data:S?{address:S.address,txCount:S.txCount,protocolVersion:S.protocolVersion,token0:S.token0,tvlToken0:S.token0Supply,token0Price:null===(f=S.token0)||void 0===f||null===(x=f.project)||void 0===x||null===(m=x.markets)||void 0===m||null===(v=m[0])||void 0===v||null===(h=v.price)||void 0===h?void 0:h.value,token1:S.token1,tvlToken1:S.token1Supply,token1Price:null===(P=S.token1)||void 0===P||null===(y=P.project)||void 0===y||null===(w=y.markets)||void 0===w||null===(k=w[0])||void 0===k||null===(g=k.price)||void 0===g?void 0:g.value,feeTier:N,volumeUSD24H:null===(b=S.volume24h)||void 0===b?void 0:b.value,volumeUSD24HChange:Ft(null===(j=S.historicalVolume)||void 0===j?void 0:j.concat()),tvlUSD:null===(T=S.totalLiquidity)||void 0===T?void 0:T.value,tvlUSDChange:null===(I=S.totalLiquidityPercentChange24h)||void 0===I?void 0:I.value}:void 0,error:C,loading:_}}),[o,null===(t=u)||void 0===t?void 0:t.v2Pair,null===(i=r)||void 0===i?void 0:i.v3Pool,c,s,d,l,n])}((null===(e=E)||void 0===e?void 0:e.toLowerCase())??"",null===(o=B)||void 0===o?void 0:o.id),[O,q]=(0,m.useReducer)((e=>!e),!1),X=function(e,o){var t,i,n,l;return(null===(t=e)||void 0===t?void 0:t.token0)&&(null===(i=e)||void 0===i?void 0:i.token1)&&o?[(0,V.vR)(o,null===(n=e)||void 0===n?void 0:n.token0),(0,V.vR)(o,null===(l=e)||void 0===l?void 0:l.token1)]:[void 0,void 0]}(R,null===(t=B)||void 0===t?void 0:t.id),[H,z]=O?[null===(r=X)||void 0===r?void 0:r[1],null===(d=X)||void 0===d?void 0:d[0]]:X,{darkMode:G,surface2:Q,accent1:Y}=(0,U.useTheme)(),K=(0,Et.r)(H&&(0,V.Pc)(H),{backgroundColor:Q,darkMode:G}),J=(0,Et.r)(z&&(0,V.Pc)(z),{backgroundColor:Q,darkMode:G}),ee=!E||!B||!(0,_e.UJ)(E),oe=!M&&!R||ee,ie=(0,m.useMemo)((()=>{var e,o,t;const i=`${null===(e=R)||void 0===e?void 0:e.token0.symbol}/${null===(o=R)||void 0===o?void 0:o.token1.symbol}`,n=(null===(t=B)||void 0===t?void 0:t.label)??"Ethereum";return{title:i,url:window.location.href,description:`Swap ${i} on ${n}. Trade tokens and provide liquidity. Real-time prices, charts, transaction data, and more.`}}),[null===(c=B)||void 0===c?void 0:c.label,null===(u=R)||void 0===u?void 0:u.token0.symbol,null===(p=R)||void 0===p?void 0:p.token1.symbol]),ne=(0,Mt.X)(ie);return oe?(0,i.jsx)(Bt.default,{}):(0,i.jsxs)(Ke.f6,{token0:K!==Y?K:void 0,token1:J!==Y?J:void 0,children:[(0,i.jsxs)(Ot.Helmet,{children:[(0,i.jsx)("title",{children:Rt(R)}),ne.map(((e,o)=>(0,i.jsx)("meta",{...e},o)))]}),(0,i.jsx)(l.fM,{page:n.yJ.POOL_DETAILS_PAGE,properties:{poolAddress:E,chainId:null===(h=B)||void 0===h?void 0:h.id,feeTier:null===(v=R)||void 0===v?void 0:v.feeTier,token0Address:null===(x=R)||void 0===x?void 0:x.token0.address,token1Address:null===(f=R)||void 0===f?void 0:f.token1.address,token0Symbol:null===(g=R)||void 0===g?void 0:g.token0.symbol,token1Symbol:null===(k=R)||void 0===k?void 0:k.token1.symbol,token0Name:null===(w=R)||void 0===w?void 0:w.token0.name,token1Name:null===(y=R)||void 0===y?void 0:y.token1.name},shouldLogImpression:!M,children:(0,i.jsxs)(Vt,{children:[(0,i.jsxs)(qt,{children:[(0,i.jsxs)(s.ZP,{gap:"20px",children:[(0,i.jsxs)(s.ZP,{children:[(0,i.jsx)(Re,{chainId:null===(P=B)||void 0===P?void 0:P.id,poolAddress:E,token0:H,token1:z,loading:M}),(0,i.jsx)(ze,{chainId:null===(b=B)||void 0===b?void 0:b.id,poolAddress:E,token0:H,token1:z,feeTier:null===(j=R)||void 0===j?void 0:j.feeTier,protocolVersion:null===(T=R)||void 0===T?void 0:T.protocolVersion,toggleReversed:q,loading:M})]}),(0,i.jsx)(te,{poolData:R,loading:M,isReversed:O,chain:null===(I=B)||void 0===I?void 0:I.backendChain.chain})]}),(0,i.jsx)(Zt,{}),(0,i.jsx)($t,{poolAddress:E,token0:H,token1:z,protocolVersion:null===(C=R)||void 0===C?void 0:C.protocolVersion})]}),(0,i.jsxs)(Xt,{children:[(0,i.jsx)(Go,{chainId:null===(_=B)||void 0===_?void 0:_.id,token0:H,token1:z,feeTier:null===(S=R)||void 0===S?void 0:S.feeTier,loading:M}),(0,i.jsx)(bo,{poolData:R,isReversed:O,chainId:null===(N=B)||void 0===N?void 0:N.id,loading:M}),(0,i.jsxs)(Ut,{children:[(0,i.jsx)(Ht,{children:(0,i.jsx)(Z.cC,{children:"Links"})}),(0,i.jsxs)(zt,{children:[(0,i.jsx)(so,{address:E,chainId:null===($=B)||void 0===$?void 0:$.id,tokens:[H,z],loading:M}),(0,i.jsx)(so,{address:null===(D=H)||void 0===D?void 0:D.address,chainId:null===(A=B)||void 0===A?void 0:A.id,tokens:[H],loading:M}),(0,i.jsx)(so,{address:null===(L=z)||void 0===L?void 0:L.address,chainId:null===(F=B)||void 0===F?void 0:F.id,tokens:[z],loading:M})]})]})]})]})})]})}}}]);
//# sourceMappingURL=1557.a3703fa6.chunk.js.map