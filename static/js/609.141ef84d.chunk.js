"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[609],{37246:(e,t,n)=>{n.d(t,{Z:()=>c});var i=n(45779),o=n(68090),r=n.n(o);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=(0,i.forwardRef)((function(e,t){var n=e.color,o=void 0===n?"currentColor":n,r=e.size,l=void 0===r?24:r,c=s(e,["color","size"]);return i.createElement("svg",a({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),i.createElement("path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}),i.createElement("path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}))}));l.propTypes={color:r().string,size:r().oneOfType([r().string,r().number])},l.displayName="Link";const c=l},79721:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Reflect=void 0,t.Reflect=function(){return null}},24596:function(e,t,n){var i=this&&this.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),o=this&&this.__read||function(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var i,o,r=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(i=r.next()).done;)a.push(i.value)}catch(s){o={error:s}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return a};Object.defineProperty(t,"__esModule",{value:!0}),t.assert=t.AssertionError=void 0;var r=n(28018),a=n(62588),s=function(e){function t(t){var n=this.constructor,i=e.call(this,"Wrong assertion encountered"+(t?': "'.concat(t,'"'):""))||this;if(Object.setPrototypeOf(i,n.prototype),!i.stack)return i;try{(0,r.overwriteReadonlyProp)(i,"stack",i.stack.split("\n").filter((function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=o(e,2)[1];return 1!==n&&2!==n})).join("\n"))}catch(a){}return i}return i(t,e),t}(Error);t.AssertionError=s,t.assert=function(e,t){if(0===arguments.length&&(e=!0),void 0===a.assertIsRefWrapper.ref){if(!e)throw new s(t)}else a.assertIsRefWrapper.ref=void 0}},24738:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.exclude=void 0,t.exclude=function(e){var t=e instanceof Object?function(t){return e.indexOf(t)<0}:function(t){return t!==e};return function(e){return t(e)}}},34023:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.flip=void 0,t.flip=function(e,t){if(void 0!==e[t])return e[t]=!e[t]}},35109:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.id=void 0;t.id=function(e){return e}},89341:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,o)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(24596),t),o(n(24738),t),o(n(34023),t),o(n(35109),t),o(n(79820),t),o(n(8927),t),o(n(93353),t),o(n(13817),t),o(n(86322),t),o(n(2227),t),o(n(40855),t),o(n(79721),t),o(n(19449),t),o(n(2346),t)},13817:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.is=void 0;var i=n(62588),o=["Wrong usage of the ".concat(r.name," function refer to"),"https://docs.tsafe.dev/".concat(r.name.toLowerCase())].join(" ");function r(e){var t={};if(void 0!==i.assertIsRefWrapper.ref)throw i.assertIsRefWrapper.ref=void 0,new Error(o);return i.assertIsRefWrapper.ref=t,Promise.resolve().then((function(){if(i.assertIsRefWrapper.ref===t)throw new Error(o)})),null}t.is=r},79820:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isPromiseLike=void 0,t.isPromiseLike=function(e){return"function"==typeof(null==e?void 0:e.then)}},28018:function(e,t,n){var i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,i=arguments.length;n<i;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.overwriteReadonlyProp=void 0;var o=n(24596),r=n(13817);t.overwriteReadonlyProp=function(e,t,n){try{e[t]=n}catch(l){}if(e[t]===n)return n;var a=void 0,s=Object.getOwnPropertyDescriptor(e,t)||{enumerable:!0,configurable:!0};if(s.get)throw new Error("Probably a wrong ides to overwrite ".concat(String(t)," getter"));try{Object.defineProperty(e,t,i(i({},s),{value:n}))}catch(c){(0,o.assert)((0,r.is)(c)),a=c}if(e[t]!==n)throw a||new Error("Can't assign");return n}},40855:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.noUndefined=void 0,t.noUndefined=function(e){var t={};for(var n in e)void 0!==e[n]&&(t[n]=e[n]);return t}},86322:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.objectEntries=void 0,t.objectEntries=function(e){return Object.entries(e)}},2227:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.objectFromEntries=void 0,t.objectFromEntries=function(e){return Object.fromEntries(e)}},8927:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.objectKeys=void 0,t.objectKeys=function(e){return Object.keys(e)}},93353:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.typeGuard=void 0,t.typeGuard=function(e,t){return t}},2346:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.uncapitalize=void 0,t.uncapitalize=function(e){return e.charAt(0).toLowerCase()+e.slice(1)}},62588:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.assertIsRefWrapper=void 0;var i=n(35109);t.assertIsRefWrapper={ref:(0,i.id)(void 0)}},27279:(e,t,n)=>{n.d(t,{r:()=>c});var i,o,r,a=n(45779);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s.apply(this,arguments)}function l(e,t){let{title:n,titleId:l,...c}=e;return a.createElement("svg",s({width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":l},c),n?a.createElement("title",{id:l},n):null,i||(i=a.createElement("path",{d:"M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),o||(o=a.createElement("path",{d:"M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),r||(r=a.createElement("path",{d:"M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const c=a.forwardRef(l);n.p},98961:(e,t,n)=>{n.d(t,{f3:()=>k,yY:()=>x,zG:()=>f});var i=n(92936),o=n(94284),r=n(86059),a=n(97341),s=n(50333),l=n(6823),c=n(45779),d=n(94191),p=n(43454),u=n(14411),h=n(54972),m=n(13446);const f=u.default.nav.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\BreadcrumbNav\\index__BreadcrumbNavContainer",componentId:"sc-fd4907e9-0"})`
  display: flex;
  color: ${({theme:e})=>e.neutral2};
  font-size: 16px;
  line-height: 24px;
  align-items: center;
  gap: 4px;
  margin-bottom: 20px;
  width: fit-content;
`,x=(0,u.default)(p.rU).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\BreadcrumbNav\\index__BreadcrumbNavLink",componentId:"sc-fd4907e9-1"})`
  display: flex;
  align-items: center;
  color: ${({theme:e})=>e.neutral2};
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  text-decoration: none;

  &:hover {
    color: ${({theme:e})=>e.neutral3};
  }
`,w=(0,u.default)(o.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\BreadcrumbNav\\index__CurrentPageBreadcrumbContainer",componentId:"sc-fd4907e9-2"})`
  gap: 6px;
`,v=u.default.h1.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\BreadcrumbNav\\index__PageTitleText",componentId:"sc-fd4907e9-3"})`
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  color: ${({theme:e})=>e.neutral1};
  white-space: nowrap;
  margin: 0;
`,g=(0,u.default)(o.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\BreadcrumbNav\\index__TokenAddressHoverContainer",componentId:"sc-fd4907e9-4"})`
  cursor: ${({isDisabled:e})=>e?"default":"pointer"};
  gap: 10px;
  white-space: nowrap;
`,b=(0,u.default)(d.Z).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\BreadcrumbNav\\index__CopyIcon",componentId:"sc-fd4907e9-5"})`
  ${h.iV}
`,k=({address:e,currency:t,poolName:n})=>{var o,d;const{neutral2:p}=(0,u.useTheme)(),h=(0,a.eI)(),[f,x]=(0,c.useState)(!1),[k,C]=(0,s.Z)(),y=(0,c.useCallback)((()=>{C(e)}),[e,C]),j=null===(o=t)||void 0===o?void 0:o.isNative,T=(null===(d=t)||void 0===d?void 0:d.symbol)??(0,i.jsx)(l.cC,{children:"Symbol not found"}),_=h.sm,S=_&&f&&!k;return(0,i.jsxs)(w,{"aria-current":"page","data-testid":"current-breadcrumb",onMouseEnter:()=>x(!0),onMouseLeave:()=>x(!1),children:[(0,i.jsx)(v,{children:t?T:n})," ",(!t||t&&!j)&&(0,i.jsxs)(g,{"data-testid":"breadcrumb-token-address",isDisabled:!_,onClick:_?y:void 0,children:[(0,i.jsx)(r.ZP,{placement:"bottom",size:r.Oz.Max,show:k,text:l.t`Copied`,children:(0,m.Xn)(e)}),S&&(0,i.jsx)(b,{"data-testid":"breadcrumb-hover-copy",width:16,height:16,color:p})]})]})}},95757:(e,t,n)=>{n.d(t,{aU:()=>S,Tg:()=>j,r4:()=>C});var i=n(92936),o=n(70060),r=n(74118),a=n(67075),s=n(68310),l=n(94284),c=n(19478),d=n(6823),p=n(69632),u=n(45779),h=n(14411),m=n(54972),f=n(62652),x=n(66136),w=n(5402),v=n(55810);class g{_data=null;_options=null;draw(e,t){e.useBitmapCoordinateSpace((e=>this._drawImpl(e,t)))}update(e,t){this._data=e,this._options=t}_drawImpl(e,t){if(null===this._data||0===this._data.bars.length||null===this._data.visibleRange||null===this._options)return;let n=-1/0;const i=this._data.bars.map((e=>{const i=e.originalData.close>=n;n=e.originalData.close??n;return{openY:t(e.originalData.open)??0,highY:t(e.originalData.high)??0,lowY:t(e.originalData.low)??0,closeY:t(e.originalData.close)??0,x:e.x,isUp:i}})),o=this._options.radius(this._data.barSpacing);this._drawWicks(e,i,this._data.visibleRange),this._drawCandles(e,i,this._data.visibleRange,o)}_drawWicks(e,t,n){if(null===this._data||null===this._options)return;const{context:i,horizontalPixelRatio:o,verticalPixelRatio:r}=e,a=function(e){return function(e){return Math.max(1,Math.floor(e))}(e)/e}(o);for(let s=n.from;s<n.to;s++){const e=t[s];i.fillStyle=e.isUp?this._options.wickUpColor:this._options.wickDownColor;const n=(0,v.n1)(e.lowY,e.highY,r),l=(0,w.q)(e.x,o,a);i.fillRect(l.position,n.position,l.length,n.length)}}_drawCandles(e,t,n,i){if(null===this._data||null===this._options)return;const{context:o,horizontalPixelRatio:r,verticalPixelRatio:a}=e,s=function(e,t){let n=function(e,t){const n=4,i=3;if(e>=2.5&&e<=n)return Math.floor(i*t);const o=1-.2*Math.atan(Math.max(n,e)-n)/(.5*Math.PI),r=Math.floor(e*o*t),a=Math.floor(e*t),s=Math.min(r,a);return Math.max(Math.floor(t),s)}(e,t);if(n>=2){Math.floor(t)%2!==n%2&&n--}return n}(this._data.barSpacing,1);for(let l=n.from;l<n.to;l++){const e=t[l],n=(0,v.n1)(Math.min(e.openY,e.closeY),Math.max(e.openY,e.closeY),a),c=(0,w.q)(e.x,r,s);o.fillStyle=e.isUp?this._options.upColor:this._options.downColor,o.roundRect?(o.beginPath(),o.roundRect(c.position,n.position,c.length,Math.max(n.length,1),i),o.fill()):o.fillRect(c.position,n.position,c.length,n.length)}}}const b={...p.Qb,upColor:"#26a69a",downColor:"#ef5350",neutralColor:"#26a69a",wickVisible:!0,borderVisible:!0,borderColor:"#378658",borderUpColor:"#26a69a",borderDownColor:"#ef5350",wickColor:"#737375",wickUpColor:"#26a69a",wickDownColor:"#ef5350",radius:e=>e<4?0:e/3};class k{_renderer;constructor(){this._renderer=new g}priceValueBuilder(e){return[e.high,e.low,e.close]}renderer(){return this._renderer}isWhitespace(e){return void 0===e.close}update(e,t){this._renderer.update(e,t)}defaultOptions(){return b}}class C extends r.B{series;originalData;lowPriceRangeScaleFactor=1;type;minPriceLine;maxPriceLine;priceLineOptions;min;max;constructor(e,t){super(e,t),this.originalData=this.data;const{adjustedData:n,lowPriceRangeScaleFactor:i,min:o,max:r}=C.getAdjustedPrices(t.data);this.data=n,this.lowPriceRangeScaleFactor=i,this.min=o,this.max=r,this.type=t.type,this.series=this.type===s.E4.LINE?this.api.addAreaSeries():this.api.addCustomSeries(new k),this.series.setData(this.data),this.updateOptions(t),this.fitContent()}static applyPriceScaleFactor(e,t){return{time:e.time,value:(e.value||e.close)*t,open:e.open*t,close:e.close*t,high:e.high*t,low:e.low*t}}static getAdjustedPrices(e){let t=1,n=e,{min:i,max:o}=(0,a.x)(e);return o-i<.2&&(t=1e9,n=e.map((e=>this.applyPriceScaleFactor(e,t))),i*=t,o*=t),{adjustedData:n,lowPriceRangeScaleFactor:t,min:i,max:o}}updateOptions(e){var t,n;const{data:i,theme:o,type:r,locale:a,format:l}=e;if(super.updateOptions(e,{localization:{locale:a,priceFormatter:e=>l.formatFiatPrice({price:Number(e)/this.lowPriceRangeScaleFactor,type:x.sw.ChartFiatValue})},grid:{vertLines:{style:p.TD.CustomDotGrid,color:o.neutral3},horzLines:{style:p.TD.CustomDotGrid,color:o.neutral3}}}),this.type!==r&&(this.type=e.type,this.api.removeSeries(this.series),this.type===s.E4.CANDLESTICK?this.series=this.api.addCustomSeries(new k):this.series=this.api.addAreaSeries(),this.series.setData(this.data)),this.originalData!==i){this.originalData=i;const{adjustedData:e,lowPriceRangeScaleFactor:t,min:n,max:o}=C.getAdjustedPrices(i);this.data=e,this.lowPriceRangeScaleFactor=t,this.min=n,this.max=o,this.series.setData(this.data),this.fitContent()}this.series.applyOptions({priceLineVisible:!1,lastValueVisible:!1,lineType:i.length<20?p.SP.WithSteps:p.SP.Curved,lineWidth:2,lineColor:o.accent1,topColor:(0,f.jb)(12,o.accent1),bottomColor:(0,f.jb)(12,o.accent1),crosshairMarkerRadius:5,crosshairMarkerBorderColor:(0,f.jb)(30,o.accent1),crosshairMarkerBorderWidth:3,upColor:o.success,wickUpColor:o.success,downColor:o.critical,wickDownColor:o.critical,borderVisible:!1}),this.priceLineOptions={color:o.surface3,lineWidth:2,lineStyle:p.TD.Dashed,axisLabelColor:o.neutral3,axisLabelTextColor:o.neutral2},null===(t=this.minPriceLine)||void 0===t||t.applyOptions({price:this.min,...this.priceLineOptions}),null===(n=this.maxPriceLine)||void 0===n||n.applyOptions({price:this.max,...this.priceLineOptions})}onSeriesHover(e){if(e){const t=this.originalData[e.logicalIndex],n={...e,item:t};super.onSeriesHover(n)}else super.onSeriesHover(void 0);void 0===e?this.minPriceLine&&this.maxPriceLine&&(this.series.removePriceLine(this.minPriceLine),this.series.removePriceLine(this.maxPriceLine),this.minPriceLine=void 0,this.maxPriceLine=void 0):!this.minPriceLine&&!this.maxPriceLine&&this.min&&this.max&&(this.minPriceLine=this.series.createPriceLine({price:this.min,...this.priceLineOptions}),this.maxPriceLine=this.series.createPriceLine({price:this.max,...this.priceLineOptions}))}}const y=h.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Charts\\PriceChart\\index__DeltaContainer",componentId:"sc-1ac6dc60-0"})`
  font-size: 16px;
  line-height: 24px;
  display: flex;
  align-items: center;
  gap: 4px;
`;function j({startingPrice:e,endingPrice:t,noColor:n}){const o=(0,c.YD)(e.close??e.value,t.close??t.value),{formatDelta:r}=(0,x.Gb)();return(0,i.jsxs)(y,{children:[(0,i.jsx)(c.Kx,{delta:o,noColor:n}),(0,i.jsx)(c.Jp,{delta:o,children:r(o)})]})}const T=(0,h.default)(m.Tv.LabelSmall).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Charts\\PriceChart\\index__TooltipText",componentId:"sc-1ac6dc60-1"})`
  color: ${({theme:e})=>e.neutral1};
  line-height: 20px;
`;function _({data:e}){const{formatFiatPrice:t}=(0,x.Gb)();return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(T,{children:[(0,i.jsxs)(l.m0,{gap:"sm",children:[(0,i.jsx)(d.cC,{children:"Open"}),(0,i.jsx)("div",{children:t({price:e.open})})]}),(0,i.jsxs)(l.m0,{gap:"sm",children:[(0,i.jsx)(d.cC,{children:"High"}),(0,i.jsx)("div",{children:t({price:e.high})})]}),(0,i.jsxs)(l.m0,{gap:"sm",children:[(0,i.jsx)(d.cC,{children:"Low"}),(0,i.jsx)("div",{children:t({price:e.low})})]}),(0,i.jsxs)(l.m0,{gap:"sm",children:[(0,i.jsx)(d.cC,{children:"Close"}),(0,i.jsx)("div",{children:t({price:e.close})})]})]})})}function S({data:e,height:t,type:n,stale:a}){const l=e[e.length-1];return(0,i.jsx)(r.k,{Model:C,params:(0,u.useMemo)((()=>({data:e,type:n,stale:a})),[e,a,n]),height:t,TooltipBody:n===s.E4.CANDLESTICK?_:void 0,children:t=>{var n,r,a,s;return(0,i.jsx)(o._,{value:(null===(n=t??l)||void 0===n?void 0:n.value)??(null===(r=t??l)||void 0===r?void 0:r.close),additionalFields:(0,i.jsx)(j,{startingPrice:null===(a=e)||void 0===a?void 0:a[0],endingPrice:t??l}),valueFormatterType:x.sw.FiatTokenPrice,time:null===(s=t)||void 0===s?void 0:s.time})}})}},18124:(e,t,n)=>{n.d(t,{P:()=>o});var i=n(92936);const o=e=>(0,i.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"transparent",...e,children:[(0,i.jsx)("path",{d:"M5.08042 8.66148C5.08043 8.58693 5.09517 8.51313 5.12378 8.44429C5.1524 8.37546 5.19432 8.31297 5.24716 8.26038C5.30001 8.2078 5.3627 8.16617 5.43167 8.13788C5.50064 8.1096 5.57452 8.09522 5.64907 8.09557L6.59187 8.09865C6.74218 8.09865 6.88635 8.15836 6.99263 8.26465C7.09893 8.37094 7.15865 8.5151 7.15865 8.66543V12.2303C7.26478 12.1988 7.4011 12.1652 7.55026 12.1301C7.65387 12.1058 7.74621 12.0471 7.8123 11.9637C7.87839 11.8803 7.91434 11.777 7.91432 11.6705V7.24848C7.91432 7.09814 7.97403 6.95397 8.08032 6.84766C8.1866 6.74135 8.33077 6.68162 8.4811 6.68158H9.42577C9.57609 6.68162 9.72026 6.74135 9.82655 6.84766C9.93284 6.95397 9.99255 7.09814 9.99255 7.24848V11.3526C9.99255 11.3526 10.2291 11.2569 10.4595 11.1596C10.545 11.1234 10.6181 11.0629 10.6694 10.9854C10.7208 10.908 10.7482 10.8172 10.7483 10.7242V5.83152C10.7483 5.68122 10.808 5.53707 10.9143 5.43078C11.0206 5.32449 11.1647 5.26478 11.315 5.26474H12.2597C12.41 5.26474 12.5542 5.32445 12.6604 5.43075C12.7667 5.53704 12.8265 5.6812 12.8265 5.83152V9.86056C13.6455 9.267 14.4754 8.55315 15.1341 7.69474C15.2297 7.57015 15.2929 7.42383 15.3181 7.26887C15.3434 7.1139 15.3299 6.95509 15.2788 6.8066C14.9739 5.9294 14.4894 5.12551 13.856 4.44636C13.2226 3.76722 12.4544 3.22777 11.6005 2.86256C10.7467 2.49734 9.82602 2.31439 8.89742 2.32542C7.96882 2.33645 7.05275 2.54121 6.20783 2.9266C5.36291 3.31199 4.60774 3.86952 3.99066 4.56352C3.37358 5.25751 2.90817 6.07269 2.62422 6.95689C2.34027 7.84107 2.24403 8.7748 2.34166 9.69832C2.43929 10.6218 2.72863 11.5148 3.19118 12.3201C3.27176 12.459 3.39031 12.572 3.53289 12.6459C3.67548 12.7198 3.83618 12.7514 3.99614 12.7372C4.17482 12.7215 4.3973 12.6992 4.66181 12.6681C4.77695 12.655 4.88326 12.6001 4.96048 12.5137C5.0377 12.4273 5.08043 12.3155 5.08053 12.1996L5.08042 8.66148Z",fill:e.fill??"#607BEE"}),(0,i.jsx)("path",{d:"M5.05957 14.3792C6.05531 15.1036 7.23206 15.5384 8.45961 15.6356C9.68716 15.7326 10.9176 15.4883 12.0149 14.9294C13.1122 14.3705 14.0334 13.519 14.6768 12.4691C15.3201 11.4191 15.6605 10.2116 15.6601 8.98024C15.6601 8.82658 15.653 8.67457 15.6428 8.52344C13.2041 12.1605 8.70139 13.8609 5.05978 14.3786",fill:e.fill??"#607BEE"})]})},5319:(e,t,n)=>{n.d(t,{J:()=>o});var i=n(92936);const o=e=>(0,i.jsx)("svg",{stroke:"none",fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"m6.31991 7.43304c.16666.07333.34001.12001.51334.16001v6.34665c-.10666-.0267-.21331-.0667-.31331-.1133l-4-1.78c-.72-.32-1.18669-1.0334-1.18669-1.8267v-4.43998c0-.18.02666-.36001.07333-.52668zm6.43339-3.06c-.1734-.17333-.3734-.32-.6067-.42l-4.00003-1.77999c-.52-.23334-1.10663-.23334-1.62663 0l-4 1.77999c-.23334.1-.43336.24667-.60669.42l4.80664 2.13999c.38667.17334.83339.17334 1.22672 0zm-1.6193 3.55534c.688-.162 1.3419-.11 1.9299.09267.132.04533.2694-.044.2694-.184v-2.05733c0-.18-.0267-.36001-.0734-.52668l-4.9133 2.18c-.16667.06666-.34001.12001-.51335.16001v6.34665c.012.008.01201.008.02401.016l1.12866-.504c.11467-.0513.14868-.19.07935-.294-.482-.7207-.68736-1.636-.49203-2.5993.26067-1.28602 1.28405-2.32936 2.56076-2.63002zm3.8859 6.42402c-.0973.0973-.2253.1466-.3533.1466s-.256-.0486-.3534-.1466l-1.0333-1.0334c-.3846.252-.842.402-1.3353.402-1.348 0-2.44468-1.0966-2.44468-2.4446 0-1.34802 1.09668-2.4447 2.44468-2.4447 1.3473 0 2.444 1.09668 2.444 2.4447 0 .4933-.1494.9513-.4014 1.3353l1.0334 1.0333c.1947.1954.1947.512-.0007.7074zm-1.6313-3.0754c0-.7966-.648-1.44463-1.444-1.44463-.7967 0-1.4447.64803-1.4447 1.44463 0 .7967.648 1.4447 1.4447 1.4447.796-.0007 1.444-.6487 1.444-1.4447z"})})},88890:(e,t,n)=>{n.d(t,{T:()=>o});var i=n(92936);const o=e=>(0,i.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"transparent",...e,children:(0,i.jsx)("path",{d:"M5.12245 9.5625C5.23495 11.8725 6.01495 14.2275 7.37245 16.32C4.19245 15.615 1.76996 12.8925 1.52246 9.5625H5.12245ZM7.37245 1.67999C4.19245 2.38499 1.76996 5.1075 1.52246 8.4375H5.12245C5.23495 6.1275 6.01495 3.77249 7.37245 1.67999ZM9.14997 1.5H8.84995L8.62496 1.82249C7.19996 3.84749 6.36745 6.1725 6.24745 8.4375H11.7525C11.6325 6.1725 10.8 3.84749 9.37496 1.82249L9.14997 1.5ZM6.24745 9.5625C6.36745 11.8275 7.19996 14.1525 8.62496 16.1775L8.84995 16.5H9.14997L9.37496 16.1775C10.8 14.1525 11.6325 11.8275 11.7525 9.5625H6.24745ZM12.8775 9.5625C12.765 11.8725 11.985 14.2275 10.6275 16.32C13.8075 15.615 16.23 12.8925 16.4775 9.5625H12.8775ZM16.4775 8.4375C16.23 5.1075 13.8075 2.38499 10.6275 1.67999C11.985 3.77249 12.765 6.1275 12.8775 8.4375H16.4775Z",fill:e.fill??"#607BEE"})})},43912:(e,t,n)=>{n.d(t,{m:()=>o});var i=n(92936);const o=e=>(0,i.jsx)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e,children:(0,i.jsx)("path",{d:"M13 4.99092C13 4.09592 14.094 3.66096 14.709 4.31196L20.637 10.582C21.121 11.094 21.121 11.894 20.637 12.406L14.709 18.676C14.094 19.326 13 18.891 13 17.997V14.4919C5.437 14.4919 4.93602 16.962 4.96802 19.529C4.97402 20.019 4.32501 20.1811 4.08301 19.7561C3.46701 18.6751 3 17.1999 3 15.4909C3 8.99592 10 8.49702 13 8.49702V4.99092Z",fill:e.fill})})},68291:(e,t,n)=>{n.d(t,{E:()=>o});var i=n(92936);const o=e=>(0,i.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"transparent",...e,children:(0,i.jsx)("path",{d:"M12.8761 3H14.9451L10.4251 8.16609L15.7425 15.196H11.579L8.31797 10.9324L4.58662 15.196H2.51644L7.35104 9.67026L2.25 3H6.51922L9.46689 6.89708L12.8761 3ZM12.15 13.9576H13.2964L5.89628 4.17332H4.66605L12.15 13.9576Z",fill:e.fill??"#607BEE"})})},13382:(e,t,n)=>{n.d(t,{Z:()=>u});var i=n(92936),o=n(6823),r=n(45779),a=n(14411),s=n(62587);const l=a.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Toggle\\PillMultiToggle__OptionsSelector",componentId:"sc-b4880fa2-0"})`
  display: flex;
  position: relative;
  justify-content: flex-end;
  gap: 12px;
  border: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 20px;
  height: 36px;
  padding: ${4}px;
  width: 100%;
`,c=a.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Toggle\\PillMultiToggle__ActivePill",componentId:"sc-b4880fa2-1"})`
  position: absolute;
  height: 28px;
  top: 3px;
  background-color: ${({theme:e})=>e.surface3};
  border-radius: 16px;
  transition: left 0.3s ease, width 0.3s ease;
`,d=a.default.button.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Toggle\\PillMultiToggle__OptionButton",componentId:"sc-b4880fa2-2"})`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  font-weight: 535;
  font-size: 16px;
  padding: 8px 12px;
  border-radius: 15px;
  line-height: 20px;
  border: none;
  cursor: pointer;
  color: ${({theme:e,active:t})=>t?e.neutral1:e.neutral2};
  transition-duration: ${({theme:e})=>e.transition.duration.fast};
  z-index: ${s.k.active};
  :hover {
    ${({active:e,theme:t})=>!e&&`opacity: ${t.opacity.hover};`}
  }
`;function p(e){return"string"===typeof e?{value:e}:e}function u({options:e,currentSelected:t,onSelectOption:n}){var a,s;const u=(0,r.useMemo)((()=>e.map((()=>(0,r.createRef)()))),[e]),[h,m]=(0,r.useState)(e.map((e=>p(e).value)).indexOf(t));return(0,i.jsxs)(l,{children:[(0,i.jsx)(c,{style:{width:null===(a=u[h].current)||void 0===a?void 0:a.offsetWidth,left:null===(s=u[h].current)||void 0===s?void 0:s.offsetLeft}}),e.map(((e,r)=>{const{value:a,display:s}=p(e),l=u[r];return(0,i.jsx)(d,{ref:l,active:t===a,onClick:()=>{m(r),n(a)},children:s??(0,i.jsx)(i.Fragment,{children:(0,o.t)("{{value}}",{value:a})})},a)}))]})}},79833:(e,t,n)=>{n.d(t,{Z:()=>w});var i=n(92936),o=n(80149),r=n(2108),a=n(6823),s=n(57221),l=n(30335),c=n(22953),d=n(14411),p=n(54972);const u=d.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\TokenSafety\\TokenSafetyMessage__Label",componentId:"sc-810b5a74-0"})`
  width: 100%;
  padding: 12px 20px 16px;
  background-color: ${({backgroundColor:e})=>e};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  color: ${({color:e})=>e};
`,h=d.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\TokenSafety\\TokenSafetyMessage__TitleRow",componentId:"sc-810b5a74-1"})`
  align-items: center;
  font-weight: 535;
  display: inline-flex;
`,m=(0,d.default)(c.xv).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\TokenSafety\\TokenSafetyMessage__Title",componentId:"sc-810b5a74-2"})`
  font-weight: 535;
  font-size: 16px;
  line-height: 24px;
  margin-left: 7px;
`,f=d.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\TokenSafety\\TokenSafetyMessage__DetailsRow",componentId:"sc-810b5a74-3"})`
  margin-top: 8px;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
`,x=(0,d.default)(p.dL).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\TokenSafety\\TokenSafetyMessage__StyledLink",componentId:"sc-810b5a74-4"})`
  color: ${({theme:e})=>e.neutral1};
  font-weight: 535;
`;function w({warning:e,tokenAddress:t,plural:n=!1,tokenSymbol:c}){const d=(0,r.g)(e.level),p=(0,r.A)(e.level),{heading:w,description:v}=(0,o.N6)(e,n,c);return(0,i.jsxs)(u,{"data-cy":"token-safety-message",color:p,backgroundColor:d,children:[(0,o._x)(e)&&(0,i.jsxs)(h,{children:[e.canProceed?(0,i.jsx)(s.Z,{size:"16px"}):(0,i.jsx)(l.Z,{size:"16px"}),(0,i.jsx)(m,{marginLeft:"7px",children:e.message})]}),(0,i.jsxs)(f,{children:[w,Boolean(w)&&" ",v,Boolean(v)&&" ",t&&(0,i.jsx)(x,{href:o.W3,children:(0,i.jsx)(a.cC,{children:"Learn more"})})]})]})}},90511:(e,t,n)=>{n.d(t,{W:()=>f});var i=n(92936),o=n(68310),r=n(3167),a=n(86059),s=n(6823),l=n(45779),c=n(7797),d=n(81205),p=n(14411),u=n(86473);const h=p.css`
  border-radius: 20px;
  width: 100%;
  height: 36px;
`,m=p.css`
  min-width: 130px;
  border-radius: 16px;
  right: 0px;
`;function f({options:e,disabledOption:t,menuLabel:n,currentChartType:f,onSelectOption:x,tooltipText:w}){const v=(0,p.useTheme)(),[g,b]=(0,l.useReducer)((e=>!e),!1);return(0,i.jsx)(r.ud,{isOpen:g,toggleOpen:b,menuLabel:n??o.lU[f],internalMenuItems:(0,i.jsx)(i.Fragment,{children:e.map((e=>{const{value:n,display:l}=function(e){return"string"===typeof e?{value:e}:e}(e),p=n===t;return(0,i.jsx)(a.ud,{text:p&&(0,i.jsx)(s.cC,{children:"This setting is unavailable for the current chart"}),placement:u.tq?void 0:"right",children:(0,i.jsxs)(r.fQ,{onClick:()=>{p||(x(n),b())},disabled:p,children:[l??o.lU[n],n===f&&(0,i.jsx)(c.Z,{size:20,color:v.accent1}),p&&(0,i.jsx)(d.Z,{size:20,color:v.neutral2})]})},n)}))}),tooltipText:w,buttonCss:h,menuFlyoutCss:m})}},26431:(e,t,n)=>{n.d(t,{Os:()=>Z,Bz:()=>V,Yv:()=>z,ZP:()=>Y,Gn:()=>X});var i,o=n(92936),r=n(95757),a=n(96393),s=n(6992),l=n(68310),c=n(24997),d=n(18569),p=n(45779),u=n(14411),h=n(7392),m=n(13382),f=n(53950),x=n(6823),w=n(64505),v=n(76437);function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},g.apply(this,arguments)}function b(e,t){let{title:n,titleId:o,...r}=e;return p.createElement("svg",g({width:16,height:16,viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":o},r),n?p.createElement("title",{id:o},n):null,i||(i=p.createElement("path",{d:"M8.41667 15.5H7.58333C6.75 15.5 6.33333 15.0833 6.33333 14.25V1.75C6.33333 0.916667 6.75 0.5 7.58333 0.5H8.41667C9.25 0.5 9.66667 0.916667 9.66667 1.75V14.25C9.66667 15.0833 9.25 15.5 8.41667 15.5ZM15.5 8.83333V3.83333C15.5 3 15.0833 2.58333 14.25 2.58333H13.4167C12.5833 2.58333 12.1667 3 12.1667 3.83333V8.83333C12.1667 9.66667 12.5833 10.0833 13.4167 10.0833H14.25C15.0833 10.0833 15.5 9.66667 15.5 8.83333ZM3.83333 10.9167V7.58333C3.83333 6.75 3.41667 6.33333 2.58333 6.33333H1.75C0.916667 6.33333 0.5 6.75 0.5 7.58333V10.9167C0.5 11.75 0.916667 12.1667 1.75 12.1667H2.58333C3.41667 12.1667 3.83333 11.75 3.83333 10.9167Z",fill:"currentColor"})))}const k=p.forwardRef(b);n.p;var C;function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},y.apply(this,arguments)}function j(e,t){let{title:n,titleId:i,...o}=e;return p.createElement("svg",y({width:24,height:24,viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},o),n?p.createElement("title",{id:i},n):null,C||(C=p.createElement("path",{d:"M23.02 9C23.02 10.104 22.124 11 21.02 11C20.738 11 20.47 10.94 20.226 10.835L16.855 14.2061C16.96 14.4501 17.021 14.717 17.021 15C17.021 16.104 16.125 17 15.021 17C13.917 17 13.016 16.104 13.016 15C13.016 14.727 13.071 14.467 13.17 14.229L9.787 10.8459C9.551 10.9439 9.292 10.999 9.021 10.999C8.739 10.999 8.471 10.939 8.22701 10.834L4.856 14.2051C4.961 14.4491 5.022 14.716 5.022 14.999C5.022 16.103 4.126 16.999 3.022 16.999C1.918 16.999 1.017 16.103 1.017 14.999C1.017 13.895 1.90699 12.999 3.01199 12.999H3.022C3.294 12.999 3.55199 13.0541 3.78799 13.1521L7.172 9.76807C7.073 9.53107 7.017 9.27102 7.017 8.99902C7.017 7.89502 7.90699 6.99902 9.01199 6.99902H9.022C10.126 6.99902 11.022 7.89502 11.022 8.99902C11.022 9.28102 10.962 9.54897 10.856 9.79297L14.224 13.1609C14.465 13.0569 14.731 12.999 15.011 12.999H15.021C15.293 12.999 15.551 13.0541 15.787 13.1521L19.171 9.76807C19.072 9.53107 19.016 9.27102 19.016 8.99902C19.016 7.89502 19.906 6.99902 21.011 6.99902H21.021C22.125 7.00002 23.02 7.896 23.02 9Z",fill:"currentColor"})))}const T=p.forwardRef(j);n.p;var _=n(94284),S=n(97341),P=n(54972),I=n(90511);const L=(0,u.default)(_.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\ChartSection\\AdvancedPriceChartToggle__ChartTypeRow",componentId:"sc-96ee0320-0"})`
  ${P.cw}
`,N=[{value:l.E4.LINE,icon:(0,o.jsx)(T,{width:20,height:20}),display:(0,o.jsxs)(L,{gap:"md",children:[(0,o.jsx)(T,{width:20,height:20}),l.lU[l.E4.LINE]]})},{value:l.E4.CANDLESTICK,icon:(0,o.jsx)(k,{width:20,height:20}),display:(0,o.jsxs)(L,{gap:"md",children:[(0,o.jsx)(k,{width:20,height:20}),l.lU[l.E4.CANDLESTICK]]})}],D=({currentChartType:e,onChartTypeChange:t,disableCandlestickUI:n})=>{var i,r;const a=!(0,S.eI)().sm,s=N.find((t=>t.value===e));return(0,o.jsx)(I.W,{options:N,disabledOption:n?l.E4.CANDLESTICK:void 0,menuLabel:a?null===(i=s)||void 0===i?void 0:i.display:null===(r=s)||void 0===r?void 0:r.icon,currentChartType:e,onSelectOption:t,tooltipText:a?void 0:x.t`Chart type`})};var O=n(99582),F=n(90471);function E(e){const{value:t,timestamp:n}=e;return{time:n,value:t,open:t,high:t,low:t,close:t}}function $(e){const{open:t,high:n,low:i,close:o}=e;return{time:e.timestamp,value:o.value,open:t.value,high:n.value,low:i.value,close:o.value}}const M=()=>Date.now()/1e3,R=.1;function B(e){return{values:[e.value],time:e.timestamp}}const z=356,H=[l.oX.PRICE,l.oX.VOLUME,l.oX.TVL],V=f.W9.map((e=>({value:f.rD[e]}))),Z=u.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\ChartSection\\index__ChartActionsContainer",componentId:"sc-321cda25-0"})`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;

  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    flex-direction: column;
    gap: 16px;
  }
`,U=u.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\ChartSection\\index__TimePeriodSelectorContainer",componentId:"sc-321cda25-1"})`
  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    width: 100%;
  }
`,A=u.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\ChartSection\\index__ChartTypeSelectorContainer",componentId:"sc-321cda25-2"})`
  display: flex;
  gap: 8px;
  @media only screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  }
`,W=()=>(0,o.jsx)(x.cC,{children:"Unable to display historical data for the current token."});function X(e,t){const[n,i]=(0,p.useState)(d.XH.DAY),[o,r]=(0,p.useState)(l.oX.PRICE),[a,s]=(0,p.useState)(l.E4.LINE),c={address:e,chain:t,duration:(0,d.uw)(n)},u=function(e,t,n){var i,o;const[r,a]=(0,p.useReducer)((()=>!0),!1),{data:s,loading:c}=(0,O.maR)({variables:{...e,fallback:r},skip:t});return(0,p.useMemo)((()=>{var t,i,o,d,p;const{ohlc:u,priceHistory:h,price:m}=(null===(i=s)||void 0===i||null===(t=i.token)||void 0===t?void 0:t.market)??{};let f=(u?null===(o=u)||void 0===o?void 0:o.filter((e=>void 0!==e)).map($):null===(d=h)||void 0===d?void 0:d.filter((e=>void 0!==e)).map(E))??[];const x=null===(p=m)||void 0===p?void 0:p.value;if(u){const e=f.filter((e=>0===e.value)).length;if(!u.length||e/f.length>R)return a(),{chartType:l.oX.PRICE,entries:[],loading:!0,disableCandlestickUI:!0,dataQuality:F.x1.INVALID};if(n===l.E4.LINE){let e=f[0].low,t=0,n=f[0].high,i=0;f.forEach(((o,r)=>{o.low<e&&(e=o.low,t=r),o.high>n&&(n=o.high,i=r)})),t!==f.length-1&&(f[t].value=e),i!==f.length-1&&(f[i].value=n)}else if(n===l.E4.CANDLESTICK){const e=[];for(let t=f.length%2;t<f.length;t+=2){const n=f[t],i=f[t+1],o={time:n.time,open:n.open,high:Math.max(n.high,i.high),low:Math.min(n.low,i.low),close:i.close,value:i.close};e.push(o)}f=e}}if(x&&f.length>1){const e=f[f.length-1],t=f[f.length-2],n=e.time-t.time,i=M();i-e.time<n?(e.time=i,e.value=x,e.close=x):f.push({time:i,value:x,open:x,high:x,low:x,close:x})}const w=(0,F.q6)(f,l.oX.PRICE,e.duration);return{chartType:l.oX.PRICE,entries:f,loading:c,dataQuality:w,disableCandlestickUI:r}}),[null===(o=s)||void 0===o||null===(i=o.token)||void 0===i?void 0:i.market,r,c,n,e.duration])}(c,o!==l.oX.PRICE,a),h=function(e,t){var n,i,o;const{data:r,loading:a}=(0,O.PIh)({variables:e,skip:t});return(0,p.useMemo)((()=>{var t,n,i,o;const s=(null===(o=r)||void 0===o||null===(i=o.token)||void 0===i||null===(n=i.market)||void 0===n||null===(t=n.historicalVolume)||void 0===t?void 0:t.filter((e=>void 0!==e)).map(F.Yz))??[],c=(0,F.q6)(s,l.oX.VOLUME,e.duration);return{chartType:l.oX.VOLUME,entries:s,loading:a,dataQuality:c}}),[null===(o=r)||void 0===o||null===(i=o.token)||void 0===i||null===(n=i.market)||void 0===n?void 0:n.historicalVolume,a,e.duration])}(c,o!==l.oX.VOLUME),m=function(e,t){var n,i;const{data:o,loading:r}=(0,O.xiR)({variables:e,skip:t});return(0,p.useMemo)((()=>{var t,n,i,a;const{historicalTvl:s,totalValueLocked:c}=(null===(n=o)||void 0===n||null===(t=n.token)||void 0===t?void 0:t.market)??{},d=(null===(i=s)||void 0===i?void 0:i.filter((e=>void 0!==e)).map(B))??[],p=null===(a=c)||void 0===a?void 0:a.value;if(p&&d.length>1){const e=d[d.length-1],t=d[d.length-2],n=e.time-t.time,i=M();i-e.time<n?(e.time=i,e.values=[p]):d.push({time:i,values:[p]})}const u=(0,F.q6)(d,l.oX.TVL,e.duration);return{chartType:l.oX.TVL,entries:d,loading:r,dataQuality:u}}),[null===(i=o)||void 0===i||null===(n=i.token)||void 0===n?void 0:n.market,r,e.duration])}(c,o!==l.oX.TVL);return(0,p.useMemo)((()=>{const{disableCandlestickUI:e}=u,t=(()=>{switch(o){case l.oX.PRICE:return u;case l.oX.VOLUME:return h;case l.oX.TVL:return m}})();return{timePeriod:n,setTimePeriod:i,setChartType:r,priceChartType:e?l.E4.LINE:a,setPriceChartType:s,activeQuery:t,disableCandlestickUI:e}}),[o,u,h,m,n,a])}function Y(){const{activeQuery:e,timePeriod:t,priceChartType:n}=(0,v.U)().chartState;return(0,o.jsxs)("div",{"data-cy":`tdp-${e.chartType}-chart-container`,children:[(()=>{if(e.dataQuality===F.x1.INVALID)return(0,o.jsx)(h.M,{type:e.chartType,height:z,errorText:e.loading?void 0:(0,o.jsx)(W,{})});const i=e.dataQuality===F.x1.STALE;switch(e.chartType){case l.oX.PRICE:return(0,o.jsx)(r.aU,{data:e.entries,height:z,type:n,stale:i});case l.oX.VOLUME:return(0,o.jsx)(c.x,{data:e.entries,height:z,timePeriod:t,stale:i});case l.oX.TVL:return(0,o.jsx)(a.w,{data:e.entries,height:z,stale:i})}})(),(0,o.jsx)(Q,{})]})}function Q(){const{activeQuery:e,timePeriod:t,setTimePeriod:n,setChartType:i,priceChartType:r,setPriceChartType:a,disableCandlestickUI:c}=(0,v.U)().chartState,d=(0,w.Dv)(s.N);return(0,o.jsxs)(Z,{children:[(0,o.jsxs)(A,{children:[e.chartType===l.oX.PRICE&&(0,o.jsx)(D,{currentChartType:r,onChartTypeChange:a,disableCandlestickUI:c}),(0,o.jsx)(I.W,{options:H,currentChartType:e.chartType,onSelectOption:e=>{i(e),e===l.oX.PRICE&&a(l.E4.LINE)}})]}),(0,o.jsx)(U,{children:(0,o.jsx)(m.Z,{options:V,currentSelected:f.rD[t],onSelectOption:e=>{const i=(0,f.Wz)(e);var o;i===t?null===(o=d)||void 0===o||o():n(i)}})})]})}},22717:(e,t,n)=>{n.d(t,{D:()=>j,Z:()=>T});var i=n(92936),o=n(3167),r=n(69355),a=n(43912),s=n(68291),l=n(41886),c=n(50333),d=n(89464),p=n(30520),u=n(6823),h=n(45779),m=n(37246),f=n(1356),x=n(29021),w=n(14411),v=n(76623),g=n(54972),b=n(62652);const k=560,C=480,y=w.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\ShareButton__ShareAction",componentId:"sc-c3fb7e7d-0"})`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 485;
  gap: 12px;
  height: 40px;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  :hover {
    background-color: ${({theme:e})=>(0,b.jb)(10,e.darkMode?v.O9.gray200:v.O9.gray300)};
  }
`;function j(e){const t=window.location.href,n=(window.screen.width-k)/2,i=(window.screen.height-C)/2;window.open(`https://twitter.com/intent/tweet?text=Check%20out%20${e}%20${t}%20via%20@Uniswap`,"newwindow",`left=${n}, top=${i}, width=${k}, height=${C}`)}function T({name:e}){const t=(0,w.useTheme)(),n=(0,h.useRef)(null),v=(0,f.Wt)(x.Lk.SHARE),b=(0,f.xk)(x.Lk.SHARE);(0,p.t)(n,v?b:void 0),(0,d.Z)(v);const k=window.location.href,[C,T]=(0,c.Z)();return(0,i.jsx)("div",{ref:n,children:(0,i.jsx)(o.ud,{isOpen:v,toggleOpen:b,menuLabel:(0,i.jsx)(a.m,{fill:t.neutral1,width:18,height:18}),tooltipText:u.t`Share`,internalMenuItems:(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(y,{onClick:()=>T(k),children:[C?(0,i.jsx)(r.Y,{height:18,width:18}):(0,i.jsx)(m.Z,{width:"18px",height:"18px",color:t.neutral1}),(0,i.jsx)(g.Tv.BodyPrimary,{children:C?(0,i.jsx)(u.cC,{children:"Copied"}):(0,i.jsx)(u.cC,{children:"Copy link"})})]}),(0,i.jsxs)(y,{onClick:()=>{b(),j(e)},children:[(0,i.jsx)(s.E,{width:"18px",height:"18px",fill:t.neutral1}),(0,i.jsx)(g.Tv.BodyPrimary,{children:(0,i.jsx)(u.cC,{children:"Share to Twitter"})})]})]}),hideChevron:!0,buttonCss:l.TX,menuFlyoutCss:l.jF})})}},67968:(e,t,n)=>{n.d(t,{WQ:()=>V,sT:()=>pe,QN:()=>Z,Gy:()=>H,lJ:()=>me,Pn:()=>U,yn:()=>A});var i=n(92936),o=n(98961),r=n(94284),a=n(6823),s=n(4168),l=n(14411),c=n(54972),d=n(56536);const p=(0,l.default)(d.nR).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\swap\\SwapSkeleton__StyledArrowWrapper",componentId:"sc-f9abb7f1-0"})`
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
`,u=l.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\swap\\SwapSkeleton__LoadingWrapper",componentId:"sc-f9abb7f1-1"})`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: space-between;

  padding: 8px;
  border: ${({theme:e})=>`1px solid ${e.surface3}`};
  border-radius: 16px;
  background-color: ${({theme:e})=>e.surface1};
`,h=l.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\swap\\SwapSkeleton__Blob",componentId:"sc-f9abb7f1-2"})`
  background-color: ${({theme:e})=>e.surface2};
  border-radius: ${({radius:e})=>(e??4)+"px"};
  height: 56px;
  width: ${({width:e})=>e?e+"px":"100%"};
`,m=(0,l.default)(h).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\swap\\SwapSkeleton__ModuleBlob",componentId:"sc-f9abb7f1-3"})`
  background-color: ${({theme:e})=>e.surface3};
  height: 36px;
`,f=l.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\swap\\SwapSkeleton__TitleColumn",componentId:"sc-f9abb7f1-4"})`
  padding: 8px;
`,x=l.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\swap\\SwapSkeleton__Row",componentId:"sc-f9abb7f1-5"})`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,w=l.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\swap\\SwapSkeleton__InputColumn",componentId:"sc-f9abb7f1-6"})`
  display: flex;
  flex-flow: column;
  background-color: ${({theme:e})=>e.surface2};
  border-radius: 16px;
  display: flex;
  gap: 30px;
  padding: 48px 12px;
`,v=l.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\swap\\SwapSkeleton__OutputWrapper",componentId:"sc-f9abb7f1-7"})`
  position: relative;
`;function g(){return(0,i.jsx)(f,{children:(0,i.jsx)(c.Tv.SubHeader,{children:(0,i.jsx)(a.cC,{children:"Swap"})})})}function b(){return(0,i.jsxs)(x,{children:[(0,i.jsx)(m,{width:60}),(0,i.jsx)(m,{width:100,radius:16})]})}function k(){return(0,i.jsx)(h,{radius:16})}function C(){const e=(0,l.useTheme)();return(0,i.jsxs)(u,{children:[(0,i.jsx)(g,{}),(0,i.jsx)(w,{children:(0,i.jsx)(b,{})}),(0,i.jsxs)(v,{children:[(0,i.jsx)(p,{clickable:!1,children:(0,i.jsx)(d.Gz,{children:(0,i.jsx)(s.Z,{size:"16",color:e.neutral3})})}),(0,i.jsx)(w,{children:(0,i.jsx)(b,{})})]}),(0,i.jsx)(k,{})]})}var y=n(39671),j=n(51578),T=n(6282),_=n(66869),S=n(55874),P=n(89341),I=n(54703),L=n(7392),N=n(68310),D=n(57852),O=n(64370),F=n(18569),E=n(82743);const $=l.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\About__AboutContainer",componentId:"sc-642eb00f-0"})`
  gap: 16px;
  padding: 24px 0px;
  ${S.Sj}
`,M=(0,l.default)(c.Tv.MediumHeader).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\About__AboutHeader",componentId:"sc-642eb00f-1"})`
  font-size: 28px !important;
`;var R=n(26431),B=n(71805),z=n(41886);const H=l.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__TokenDetailsLayout",componentId:"sc-31fd71ed-0"})`
  display: flex;
  padding: 0 16px 52px;
  justify-content: center;
  width: 100%;
  gap: 40px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    padding: 48px 20px;
  }
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.lg}px) {
    flex-direction: column;
    align-items: center;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.xl}px) {
    gap: 60px;
  }
`,V=l.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__LeftPanel",componentId:"sc-31fd71ed-1"})`
  flex: 1;
  max-width: 780px;
  overflow: hidden;
  width: 100%;
`,Z=l.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__RightPanel",componentId:"sc-31fd71ed-2"})`
  display: flex;
  padding-top: 53px;
  flex-direction: column;
  gap: 40px;
  width: ${360}px;

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.lg}px) {
    width: 100%;
    max-width: 780px;
  }
`,U=l.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__TokenInfoContainer",componentId:"sc-31fd71ed-3"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
  margin-bottom: 20px;
  gap: 20px;
  ${S.Sj};
  animation-duration: ${({theme:e})=>e.transition.duration.medium};
`,A=l.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__TokenNameCell",componentId:"sc-31fd71ed-4"})`
  display: flex;
  gap: 12px;
  font-size: 20px;
  line-height: 28px;
  align-items: center;
  padding-top: 4px;
  min-width: 32px;
  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    flex-direction: column;
    align-items: flex-start;
  }
`,W=(0,l.default)(E.X).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__DetailBubble",componentId:"sc-31fd71ed-5"})`
  height: 16px;
  width: 180px;
`,X=(0,l.default)(W).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__SquaredBubble",componentId:"sc-31fd71ed-6"})`
  height: 32px;
  border-radius: 8px;
`,Y=(0,l.default)(W).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__NavBubble",componentId:"sc-31fd71ed-7"})`
  width: 169px;
`,Q=(0,l.default)(W).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__TokenLogoBubble",componentId:"sc-31fd71ed-8"})`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`,G=(0,l.default)(W).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__TitleBubble",componentId:"sc-31fd71ed-9"})`
  height: 36px;
  width: 136px;
`,K=(0,l.default)(X).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__SectionBubble",componentId:"sc-31fd71ed-10"})`
  width: 120px;
`,q=(0,l.default)(W).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__StatTitleBubble",componentId:"sc-31fd71ed-11"})`
  width: 80px;
  margin-bottom: 4px;
`,J=(0,l.default)(X).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__StatBubble",componentId:"sc-31fd71ed-12"})`
  width: 116px;
`,ee=(0,l.default)(W).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__WideBubble",componentId:"sc-31fd71ed-13"})`
  margin-bottom: 6px;
  width: 100%;
`,te=(0,l.default)(ee).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__ThinTitleBubble",componentId:"sc-31fd71ed-14"})`
  width: 120px;
`,ne=(0,l.default)(ee).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__HalfWideBubble",componentId:"sc-31fd71ed-15"})`
  width: 50%;
`,ie=l.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__StatsLoadingContainer",componentId:"sc-31fd71ed-16"})`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`,oe=l.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__ExtraDetailsContainer",componentId:"sc-31fd71ed-17"})`
  padding-top: 24px;
`,re=l.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__Space",componentId:"sc-31fd71ed-18"})`
  height: ${({heightSize:e})=>`${e}px`};
`,ae=l.css`
  color: ${({theme:e})=>e.neutral3};
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  text-decoration: none;
`,se=(0,l.default)(r.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__LoadingFooterHeaderContainer",componentId:"sc-31fd71ed-19"})`
  align-items: center;
  ${ae}

  @media screen and (min-width: ${_.j$.md}px) {
    padding: 16px 90px 8px 0;
    position: fixed;
    bottom: 0;
    right: 0;
    justify-content: flex-end;
  }
`,le=l.default.h1.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__LoadingFooterHeader",componentId:"sc-31fd71ed-20"})`
  ${ae}
`,ce=l.default.a.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\Skeleton__LoadingFooterLink",componentId:"sc-31fd71ed-21"})`
  ${ae}
  ${c.iV}
`;function de(e,t,n,o){var r,s,l,c,d;let p="";var u,h;if((null===(r=e)||void 0===r?void 0:r.name)&&(null===(s=e)||void 0===s?void 0:s.symbol))p=`${null===(u=e)||void 0===u?void 0:u.name} (${null===(h=e)||void 0===h?void 0:h.symbol})`;else if(null===(l=e)||void 0===l?void 0:l.name){var m;p=null===(m=e)||void 0===m?void 0:m.name}else if(null===(c=e)||void 0===c?void 0:c.symbol){var f;p=null===(f=e)||void 0===f?void 0:f.symbol}else p=t||"";const x=o?` on ${(0,P.capitalize)(o)}`:"",w=(null===(d=e)||void 0===d?void 0:d.isNative)?p:(0,i.jsx)(ce,{href:(0,I.E)(n,t,I.r.TOKEN),target:"_blank",rel:"noopener noreferrer",children:p});return(0,i.jsxs)(a.cC,{children:["token data for ",{tokenLink:w},{chainSuffix:x}]})}function pe(){return(0,i.jsx)(L.M,{dim:!0,type:N.oX.PRICE,height:R.Yv})}function ue(){return(0,i.jsxs)(B.h6,{children:[(0,i.jsx)(K,{}),(0,i.jsxs)(ie,{children:[(0,i.jsxs)(B.sy,{children:[(0,i.jsxs)(B.Fy,{children:[(0,i.jsx)(q,{}),(0,i.jsx)(J,{})]}),(0,i.jsxs)(B.Fy,{children:[(0,i.jsx)(q,{}),(0,i.jsx)(J,{})]})]}),(0,i.jsxs)(B.sy,{children:[(0,i.jsxs)(B.Fy,{children:[(0,i.jsx)(q,{}),(0,i.jsx)(J,{})]}),(0,i.jsxs)(B.Fy,{children:[(0,i.jsx)(q,{}),(0,i.jsx)(J,{})]})]})]})]})}function he(){const e=(0,F.L7)((0,D.WN)(),{fallbackToEthereum:!0}),{tokenAddress:t}=(0,T.UO)(),n=(0,y.U8)(t===O.dt?"ETH":t,e.id);return(0,i.jsxs)(V,{children:[(0,i.jsxs)(o.zG,{"aria-label":"breadcrumb-nav",children:[(0,i.jsxs)(o.yY,{to:`/explore/${e.urlParam}`,children:[(0,i.jsx)(a.cC,{children:"Explore"})," ",(0,i.jsx)(j.Z,{size:14})]}),(0,i.jsxs)(o.yY,{to:`/explore/tokens/${e.urlParam}`,children:[(0,i.jsx)(a.cC,{children:"Tokens"})," ",(0,i.jsx)(j.Z,{size:14})]}),(0,i.jsx)(Y,{})]}),(0,i.jsx)(U,{children:(0,i.jsxs)(A,{children:[(0,i.jsx)(Q,{}),(0,i.jsx)(G,{})]})}),(0,i.jsx)(pe,{}),(0,i.jsx)(re,{heightSize:4}),(0,i.jsx)(ue,{}),(0,i.jsx)(z.Hr,{}),(0,i.jsx)($,{children:(0,i.jsx)(M,{children:(0,i.jsx)(K,{})})}),(0,i.jsx)(ee,{}),(0,i.jsx)(ee,{}),(0,i.jsx)(ne,{style:{marginBottom:"24px"}}),(0,i.jsxs)(oe,{children:[(0,i.jsx)(te,{}),(0,i.jsx)(ne,{})]}),(0,i.jsxs)(oe,{children:[(0,i.jsx)(te,{}),(0,i.jsx)(ne,{})]}),t&&(0,i.jsxs)(se,{gap:"xs",children:[(0,i.jsx)(a.cC,{children:"Loading"}),(0,i.jsx)(le,{children:de(n,t,e.id,e.urlParam)})]})]})}function me(){return(0,i.jsxs)(H,{children:[(0,i.jsx)(he,{}),(0,i.jsx)(Z,{children:(0,i.jsx)(C,{})})]})}},71805:(e,t,n)=>{n.d(t,{Fy:()=>m,ZP:()=>C,h6:()=>b,sy:()=>x});var i=n(92936),o=n(86059),r=n(6823),a=n(14411),s=n(54972),l=n(55874),c=n(66136),d=n(69024),p=n(57852),u=n(90090),h=n(40189);const m=a.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\StatsSection__StatWrapper",componentId:"sc-7eb8a031-0"})`
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  min-width: 121px;
  flex: 1;
  padding-top: 24px;
  padding-bottom: 0px;

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    min-width: 168px;
  }
`,f=a.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\StatsSection__TokenStatsSection",componentId:"sc-7eb8a031-1"})`
  display: flex;
  flex-wrap: wrap;
`,x=a.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\StatsSection__StatPair",componentId:"sc-7eb8a031-2"})`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`,w=(0,a.default)(s.Tv.MediumHeader).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\StatsSection__Header",componentId:"sc-7eb8a031-3"})`
  font-size: 28px !important;
  padding-top: 40px;
`,v=a.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\StatsSection__StatPrice",componentId:"sc-7eb8a031-4"})`
  margin-top: 4px;
  font-size: 28px;
  color: ${({theme:e})=>e.neutral1};
`,g=a.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\StatsSection__NoData",componentId:"sc-7eb8a031-5"})`
  color: ${({theme:e})=>e.neutral3};
  padding-top: 40px;
`,b=a.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\StatsSection__StatsWrapper",componentId:"sc-7eb8a031-6"})`
  gap: 16px;
  ${l.Sj}
`;function k({dataCy:e,value:t,title:n,description:r}){const{formatNumber:a}=(0,c.Gb)();return(0,i.jsxs)(m,{"data-cy":`${e}`,children:[(0,i.jsx)(o.ud,{disabled:!r,text:r,children:n}),(0,i.jsx)(v,{children:a({input:t,type:c.sw.FiatTokenStats})})]})}function C(e){var t,n,o,a,l,c,m,v,C,y,j,T;const{chainId:_,address:S,tokenQueryData:P}=e,I=(0,p.Nb)(_),{label:L,infoLink:N}=I?p.T_[_]:{label:void 0,infoLink:void 0},D=null===(t=P)||void 0===t?void 0:t.market,O=null===(a=P)||void 0===a||null===(o=a.project)||void 0===o||null===(n=o.markets)||void 0===n?void 0:n[0],F=null===(c=O)||void 0===c||null===(l=c.fullyDilutedValuation)||void 0===l?void 0:l.value,E=null===(v=O)||void 0===v||null===(m=v.marketCap)||void 0===m?void 0:m.value,$=null===(y=D)||void 0===y||null===(C=y.totalValueLocked)||void 0===C?void 0:C.value,M=null===(T=D)||void 0===T||null===(j=T.volume24H)||void 0===j?void 0:j.value;return $||F||E||M?(0,i.jsxs)(b,{"data-testid":"token-details-stats",children:[(0,i.jsx)(w,{children:(0,i.jsx)(r.cC,{children:"Stats"})}),(0,i.jsxs)(f,{children:[(0,i.jsxs)(x,{children:[(0,i.jsx)(k,{dataCy:"tvl",value:$,description:(0,i.jsx)(r.cC,{children:"Total value locked (TVL) is the aggregate amount of the asset available across all Uniswap v3 liquidity pools."}),title:(0,i.jsx)(r.cC,{children:"TVL"})}),(0,i.jsx)(k,{dataCy:"market-cap",value:E,description:(0,i.jsx)(r.cC,{children:"Market capitalization is the total market value of an asset's circulating supply."}),title:(0,i.jsx)(r.cC,{children:"Market cap"})})]}),(0,i.jsxs)(x,{children:[(0,i.jsx)(k,{dataCy:"fdv",value:F,description:d.h8[h.PU.FULLY_DILUTED_VALUATION],title:(0,i.jsx)(r.cC,{children:"FDV"})}),(0,i.jsx)(k,{dataCy:"volume-24h",value:M,description:(0,i.jsx)(r.cC,{children:"1 day volume is the amount of the asset that has been traded on Uniswap v3 during the past 24 hours."}),title:(0,i.jsx)(r.cC,{children:"1 day volume"})})]})]})]}):u.N0.includes(_)?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(w,{children:(0,i.jsx)(r.cC,{children:"Stats"})}),(0,i.jsx)(s.Tv.BodySecondary,{pt:"12px",children:(0,i.jsxs)(r.cC,{children:["Token stats and charts for ",{label:L}," are available on"," ",(0,i.jsx)(s.dL,{color:"currentColor",href:`${N}tokens/${S}`,children:"info.uniswap.org"})]})})]}):(0,i.jsx)(g,{"data-cy":"token-details-no-stats-data",children:"No stats available"})}},75495:(e,t,n)=>{n.d(t,{B:()=>$,F:()=>M});var i=n(92936),o=n(76078),r=n(27279),a=n(47236),s=n(69355),l=n(18124),c=n(5319),d=n(88890),p=n(43912),u=n(68291),h=n(94284),m=n(22717),f=n(41886),x=n(86059),w=n(97341),v=n(50333),g=n(30520),b=n(6823),k=n(45779),C=n(37246),y=n(14411),j=n(54972),T=n(62652),_=n(62587),S=n(54703),P=n(76437),I=n(67968);const L=y.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\TokenDetailsHeader__HeaderActionsContainer",componentId:"sc-7498b2dc-0"})`
  display: flex;
  gap: 8px;
  align-items: center;

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.xs}px) {
    flex-direction: column;
    position: fixed;
    bottom: 0;
    left: 0;
    align-items: unset;
    width: 100vw;
    padding: 8px;
    background: ${({theme:e})=>e.surface2};
    border-radius: 12px 12px 0 0;
    border: ${({theme:e})=>`1px solid ${e.surface3}`};
    box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
    opacity: 1 !important;
    z-index: ${_.k.modal};
  }
`,N=(0,y.default)(r.r).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\TokenDetailsHeader__StyledMenuIcon",componentId:"sc-7498b2dc-1"})`
  padding: 8px 12px;
  border-radius: 20px;
  color: ${({theme:e})=>e.neutral1};
  background-color: ${({theme:e})=>(0,T.jb)(12,e.neutral1)};
  width: 40px;
  height: 32px;
  margin-top: 8px;
  ${j.iV}

  path {
    stroke: ${({theme:e})=>e.neutral1};
  }
`,D=(0,y.default)(h.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\TokenDetailsHeader__ActionButton",componentId:"sc-7498b2dc-2"})`
  ${f.TX}

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.xs}px) {
    color: unset;
    background-color: unset;
    width: unset;

    align-items: center;
    text-decoration: none;
    cursor: pointer;
    gap: 12px;
    padding: 10px 8px;
    border-radius: 8px;
    &:hover {
      background: ${({theme:e})=>e.surface3};
      opacity: 1;
    }
  }
`,O=y.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\TokenDetailsHeader__TokenTitle",componentId:"sc-7498b2dc-3"})`
  display: flex;
  gap: 8px;
  overflow: hidden;
  white-space: nowrap;
`,F=(0,y.default)(j.Tv.SubHeaderSmall).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\TokenDetailsHeader__TokenSymbol",componentId:"sc-7498b2dc-4"})`
  font-size: 24px !important;
  line-height: inherit;
  margin-top: 0;
  margin-bottom: 0;

  text-transform: uppercase;

  @media screen and (max-width: ${({theme:e})=>e.breakpoint.sm}px) {
    display: none;
  }
`,E=(0,y.default)(j.Tv.HeadlineMedium).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\TokenDetailsHeader__TokenName",componentId:"sc-7498b2dc-5"})`
  ${j.cw}
  font-size: 24px !important;
  min-width: 40px;
`,$=(0,y.default)(j.dL).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\TokenDetailsHeader__StyledExternalLink",componentId:"sc-7498b2dc-6"})`
  &:hover {
    // Override hover behavior from ExternalLink
    opacity: 1;
  }
`,M=()=>{var e,t,n,r;const{address:h,currency:f,tokenQuery:T}=(0,P.U)(),_=(0,y.useTheme)(),M=!(0,w.eI)().xs,[R,B]=(0,k.useReducer)((e=>!e),!1),z=(0,k.useRef)(null);(0,g.t)(z,R?B:void 0);const[H,V]=(0,k.useReducer)((e=>!e),!1),Z=(0,k.useRef)(null);(0,g.t)(Z,H?V:void 0);const U=f.symbol??(0,i.jsx)(b.cC,{children:"Symbol not found"}),A=(0,S.E)(f.chainId,h,f.isNative?S.r.NATIVE:S.r.TOKEN),{homepageUrl:W,twitterName:X}=(null===(t=T.data)||void 0===t||null===(e=t.token)||void 0===e?void 0:e.project)??{},Y=X&&`https://x.com/${X}`,Q=window.location.href,G=f.name&&f.symbol?`${f.name} (${f.symbol})`:(null===(n=f)||void 0===n?void 0:n.name)||(null===(r=f)||void 0===r?void 0:r.symbol)||"",[K,q]=(0,v.Z)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(I.yn,{children:[(0,i.jsx)(a.V,{currencies:[f],chainId:f.chainId,size:32}),(0,i.jsxs)(O,{children:[(0,i.jsx)(E,{children:f.name??(0,i.jsx)(b.cC,{children:"Name not found"})}),(0,i.jsx)(F,{children:U})]})]}),(0,i.jsxs)("div",{ref:z,children:[M&&(0,i.jsx)(N,{onClick:B}),!M||M&&R?(0,i.jsxs)(L,{children:[A&&(0,i.jsx)(x.ud,{text:b.t`Explorer`,placement:"top",size:x.Oz.Max,disabled:M,children:(0,i.jsx)($,{href:A,children:(0,i.jsxs)(D,{children:[f.chainId===o.ChainId.MAINNET?(0,i.jsx)(l.P,{width:"18px",height:"18px",fill:_.neutral1}):(0,i.jsx)(c.J,{width:"18px",height:"18px",fill:_.neutral1}),M&&(0,i.jsx)(j.Tv.BodyPrimary,{children:(0,i.jsx)(b.cC,{children:"Explorer"})})]})})}),W&&(0,i.jsx)(x.ud,{text:b.t`Website`,placement:"top",size:x.Oz.Max,disabled:M,children:(0,i.jsx)($,{href:W,children:(0,i.jsxs)(D,{children:[(0,i.jsx)(d.T,{width:"18px",height:"18px",fill:_.neutral1}),M&&(0,i.jsx)(j.Tv.BodyPrimary,{children:(0,i.jsx)(b.cC,{children:"Website"})})]})})}),Y&&(0,i.jsx)(x.ud,{text:b.t`Twitter`,placement:"top",size:x.Oz.Max,disabled:M,children:(0,i.jsx)($,{href:Y,children:(0,i.jsxs)(D,{children:[(0,i.jsx)(u.E,{width:"18px",height:"18px",fill:_.neutral1}),M&&(0,i.jsx)(j.Tv.BodyPrimary,{children:(0,i.jsx)(b.cC,{children:"Twitter"})})]})})}),M?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(D,{onClick:()=>q(Q),children:[K?(0,i.jsx)(s.Y,{height:18,width:18}):(0,i.jsx)(C.Z,{width:"18px",height:"18px",color:_.neutral1}),(0,i.jsx)(j.Tv.BodyPrimary,{children:K?(0,i.jsx)(b.cC,{children:"Copied"}):(0,i.jsx)(b.cC,{children:"Copy link"})})]}),(0,i.jsxs)(D,{onClick:()=>{B(),(0,m.D)(G)},children:[(0,i.jsx)(p.m,{fill:_.neutral1,width:18,height:18}),(0,i.jsx)(j.Tv.BodyPrimary,{children:(0,i.jsx)(b.cC,{children:"Share to Twitter"})})]})]}):(0,i.jsx)(m.Z,{name:G})]}):null]})]})}},41886:(e,t,n)=>{n.d(t,{Hr:()=>c,Nt:()=>u,TX:()=>s,aZ:()=>d,jF:()=>l,ou:()=>p});var i=n(36399),o=n(14411),r=n(54972),a=n(62652);const s=o.css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 8px 12px;
  border-radius: 20px;
  border: none;
  background-color: ${({theme:e})=>e.surface2};
  width: max-content;
  ${r.iV}

  // Override FilterButton background-color
  :hover {
    background-color: ${({theme:e})=>(0,a.jb)(12,e.neutral1)};
  }
  :focus {
    background-color: ${({theme:e})=>(0,a.jb)(12,e.neutral1)};
  }
`,l=o.css`
  width: 200px;
  top: 40px;
  right: 0px;
  overflow: auto;
`,c=o.default.hr.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\shared__Hr",componentId:"sc-f49cf1f2-0"})`
  background-color: ${({theme:e})=>e.surface3};
  border: none;
  height: 0.5px;
`,d=o.default.p.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\shared__NoInfoAvailable",componentId:"sc-f49cf1f2-1"})`
  color: ${({theme:e})=>e.neutral3};
  font-weight: 485;
  font-size: 16px;
`,p=o.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\components\\Tokens\\TokenDetails\\shared__TruncateDescriptionButton",componentId:"sc-f49cf1f2-2"})`
  color: ${({theme:e})=>e.neutral2};
  font-weight: 485;
  font-size: 0.85em;
  padding-top: 0.5em;

  &:hover,
  &:focus {
    color: ${({theme:e})=>(0,i._j)(.1,e.neutral2)};
    cursor: pointer;
  }
`,u=(e,t=h)=>{let n=e.slice(0,t);return n=`${n.slice(0,Math.min(n.length,n.lastIndexOf(" ")))}...`,n},h=400},76437:(e,t,n)=>{n.d(t,{A:()=>s,U:()=>a});var i=n(92936),o=n(45779);const r=(0,o.createContext)(void 0);function a(){const e=(0,o.useContext)(r);if(!e)throw new Error("useTDPContext must be used within a TDPContextProvider");return e}function s({children:e,contextValue:t}){return(0,i.jsx)(r.Provider,{value:t,children:e})}}}]);
//# sourceMappingURL=609.141ef84d.chunk.js.map