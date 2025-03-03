"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[7548],{27011:(e,t,n)=>{n.r(t),n.d(t,{BannerWrapper:()=>bn,CollectionBannerLoading:()=>mn,default:()=>In});var r=n(92936),i=n(5985),o=n(12722),s=n(44591),a=n(68588),l=n(94284),c=n(82743),d=n(13901),p=n(97341),g=n(6823),h=n(3464),u=n(80305),m=n(15288),x=n(68113),f=n(79132),w=n(52384),v=n(78129),b=n(66136);n(12143),n(49484);const y=()=>{const e=(0,f.cP)((e=>e.itemsInBag)),t=(0,f.cP)((e=>e.toggleBag)),n=(0,w.P)(),i=(0,w.B)(),{formatEther:o,formatNumberOrString:s}=(0,b.Gb)(),a=e.length>0;return(0,r.jsxs)(m.X2,{display:{sm:a?"flex":"none",md:"none"},className:"rgw6ez48r rgw6ez32f rgw6ez35l rgw6ez3b3 rgw6ez4ql rgw6ez2tx rgw6ez3qr rgw6ez80p rgw6ez7zp rgw6ez55f rgw6ez895 rgw6ez48f",children:[(0,r.jsxs)(m.X2,{gap:"8",children:[(0,r.jsx)(u.n,{position:"relative",style:{width:"34px",height:"34px"},children:e.slice(0,3).map(((e,t)=>(0,r.jsx)(u.n,{as:"img",position:"absolute",src:e.asset.smallImageUrl,top:"1/2",left:"1/2",width:"26",height:"26",borderRadius:"4",style:{transform:0===t?"translate(-50%, -50%) rotate(-4.42deg)":1===t?"translate(-50%, -50%) rotate(-14.01deg)":"translate(-50%, -50%) rotate(10.24deg)",zIndex:t}},t)))}),(0,r.jsxs)(m.sg,{children:[(0,r.jsx)(u.n,{className:x.d1,fontWeight:"medium",children:(0,v.t)(e.length,"NFT")}),(0,r.jsxs)(m.X2,{gap:"8",children:[(0,r.jsxs)(u.n,{className:x.d1,children:[`${o({input:n.toString(),type:b.sw.NFTToken})}`," ETH"]}),(0,r.jsx)(u.n,{color:"neutral2",className:x.Km,children:s({input:i,type:b.sw.FiatNFTToken})})]})]})]}),(0,r.jsx)(u.n,{className:"rgw6ezd9 rgw6ezb9 rgw6ezdx rgw6ez2e9 rgw6ez2jr rgw6ez2of rgw6ez27x rgw6ez4df rgw6ez6sl rgw6ez80x rgw6ez7zd",onClick:t,children:"View bag"})]})};var j=n(35842),k=n(14411),C=(n(45814),"_1wiwg131 rgw6ezd9 rgw6ezbf rgw6eze3 rgw6ez48x rgw6ez4ux rgw6ez88d rgw6ez7zd rgw6ezfx rgw6ez4bf"),_="_1wiwg135 _1wiwg131 rgw6ezd9 rgw6ezbf rgw6eze3 rgw6ez48x rgw6ez4ux rgw6ez88d rgw6ez7zd rgw6ezfx rgw6ez4b9";const T=(0,k.default)(m.X2).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\ActivitySwitcher__BaseActivityContainer",componentId:"sc-12fe17f6-0"})`
  border-bottom: 1px solid;
  border-color: ${({theme:e})=>e.surface3};
  margin-right: 12px;
`,I=new Array(2).fill(null).map(((e,t)=>(0,r.jsx)("div",{className:"_1wiwg136 _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3"},`ActivitySwitcherLoading-key-${t}`))),N=({showActivity:e,toggleActivity:t})=>{const n=(0,f.Iv)((e=>e.isCollectionStatsLoading));return(0,r.jsx)(T,{gap:"24",marginBottom:"16",children:n?I:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.n,{as:"button",className:e?C:_,onClick:()=>e&&t(),children:"Items"}),(0,r.jsx)(o.M8,{events:[i.TM.onClick],element:i.xo.NFT_ACTIVITY_TAB,name:i.Yz.NFT_ACTIVITY_SELECTED,children:(0,r.jsx)(u.n,{as:"button",className:e?_:C,onClick:()=>!e&&t(),"data-testid":"nft-activity",children:"Activity"})})]})})};var S=n(11604),z=n(66284),P=n(21989),F=n(9604),$=n(84662),E=n(2798),R=n(62293),M=n(45779);const B=({asset:e,isMobile:t,mediaShouldBePlaying:n,setCurrentTokenPlayingMedia:s,uniformAspectRatio:a,setUniformAspectRatio:l,renderedHeight:c,setRenderedHeight:d})=>{var p,h;const{formatEther:u}=(0,b.Gb)(),m=(0,f.cP)((e=>e.bagManuallyClosed)),x=(0,f.cP)((e=>e.addAssetsToBag)),w=(0,f.cP)((e=>e.removeAssetsFromBag)),v=(0,f.cP)((e=>e.itemsInBag)),y=(0,f.cP)((e=>e.bagExpanded)),j=(0,f.cP)((e=>e.setBagExpanded)),k=(0,o.oO)({page:i.yJ.NFT_COLLECTION_PAGE}),{isSelected:C}=(0,M.useMemo)((()=>({isSelected:v.filter((t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address)).length>0})),[e,v]),_=e.notForSale||S.O$.from(e.priceInfo?e.priceInfo.ETHPrice:0).lt(0),T=(null===(h=e)||void 0===h||null===(p=h.rarity)||void 0===p?void 0:p.providers)?e.rarity.providers[0]:void 0,I=(0,M.useCallback)((()=>{var n;S.O$.from((null===(n=e.priceInfo)||void 0===n?void 0:n.ETHPrice)??0).gt(0)&&(x([e]),y||t||m||j({bagExpanded:!0}),(0,o._P)(i.Yz.NFT_BUY_ADDED,{collection_address:e.address,token_id:e.tokenId,token_type:e.tokenType,...k}))}),[x,e,y,m,t,j,k]),N=(0,M.useCallback)((()=>{w([e])}),[e,w]),z=(0,M.useMemo)((()=>({primaryInfo:e.name?e.name:`#${e.tokenId}`,primaryInfoIcon:e.susFlag?(0,r.jsx)(R.yT,{}):null,primaryInfoRight:e.rarity&&T?(0,r.jsx)(R.SD,{provider:T}):null,secondaryInfo:_?"":`${u({input:e.priceInfo.ETHPrice,type:b.sw.NFTToken})} ETH`,selectedInfo:(0,r.jsx)(g.cC,{children:"Remove from bag"}),notSelectedInfo:(0,r.jsx)(g.cC,{children:"Add to bag"}),disabledInfo:(0,r.jsx)(g.cC,{children:"Not listed"})})),[e.name,e.priceInfo.ETHPrice,e.rarity,e.susFlag,e.tokenId,u,_,T]);return(0,r.jsx)(E.y,{asset:e,display:z,isSelected:C,isDisabled:Boolean(e.notForSale),selectAsset:I,unselectAsset:N,mediaShouldBePlaying:n,uniformAspectRatio:a,setUniformAspectRatio:l,renderedHeight:c,setRenderedHeight:d,setCurrentTokenPlayingMedia:s,testId:"nft-collection-asset"})};var A,L=n(34385),H=n(30520),O=n(58690),D=n(27389),Y="_10b1b4ve rgw6ez4bf rgw6ez453 rgw6ez19r rgw6ez12r rgw6ez8e1",X="_10b1b4vc",W="rgw6ez80d rgw6ez6df rgw6ez8ap rgw6ez8bh rgw6ezvx rgw6ezff",U="_10b1b4vb rgw6ez805 rgw6ez5yr rgw6ez89x rgw6ez2cl rgw6ez27x",Z="rgw6ez44r rgw6ez2jl rgw6ez7zd rgw6ezbf rgw6eze3 rgw6ez48f rgw6ez3x rgw6ez2dr rgw6ez2ol rgw6ez283",V="_10b1b4v2",K=n(12461),G=n(12294),q=n(47832);!function(e){e[e.MARKPLACE_INDEX=0]="MARKPLACE_INDEX",e[e.PRICE_RANGE_INDEX=1]="PRICE_RANGE_INDEX",e[e.TRAIT_START_INDEX=2]="TRAIT_START_INDEX"}(A||(A={}));const J=(0,G.Ue)()((0,q.mW)((e=>({traitsOpen:{},setTraitsOpen:(t,n)=>{e((({traitsOpen:e})=>({traitsOpen:{...e,[t]:n}})))}})),{name:"useTraitsOpen"}));var Q=n(54972),ee=n(4256);const te=(0,k.default)(m.X2).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\MarketplaceSelect__FilterItemWrapper",componentId:"sc-94e770fe-0"})`
  justify-content: space-between;
  padding: 10px 16px 10px 12px;
  cursor: pointer;
  border-radius: 12px;
  &:hover {
    background: ${({theme:e})=>e.surface2};
  }
`,ne=(0,k.default)(m.X2).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\MarketplaceSelect__MarketNameWrapper",componentId:"sc-94e770fe-1"})`
  gap: 10px;
`,re={x2y2:"X2Y2",opensea:"OpenSea",looksrare:"LooksRare",sudoswap:"SudoSwap",nftx:"NFTX",nft20:"NFT20",cryptopunks:"LarvaLabs"},ie=({title:e,element:t,onClick:n})=>(0,r.jsxs)(te,{onClick:n,children:[(0,r.jsx)(Q.Tv.BodyPrimary,{children:e}),(0,r.jsx)(Q.Tv.SubHeaderSmall,{children:t})]}),oe=({title:e,value:t,addMarket:n,removeMarket:s,isMarketSelected:a,count:l})=>{const[c,d]=(0,M.useState)(!1),[p,g]=(0,M.useReducer)((e=>!e),!1);(0,M.useEffect)((()=>{d(a)}),[a]);const h=e=>{e.preventDefault(),c?(s(t),d(!1)):(n(t),d(!0)),(0,o._P)(i.Yz.NFT_FILTER_SELECTED,{filter_type:i.fm.MARKETPLACE})},m=(0,r.jsx)(ee.X,{checked:c,hovered:p,onChange:h,children:(0,r.jsx)(u.n,{as:"span",color:"neutral2",marginLeft:"4",paddingRight:"12",children:l})}),x=(0,r.jsxs)(ne,{children:[(0,v.Dp)(e,"16"),e]});return(0,r.jsx)("div",{onMouseEnter:g,onMouseLeave:g,children:(0,r.jsx)(ie,{title:x,element:m,onClick:h})},t)},se=({title:e,items:t,onClick:n,isOpen:i})=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.n,{className:W,opacity:i?"1":"0"}),(0,r.jsxs)(u.n,{as:"details",className:(0,P.default)(x.Nf,!i&&V),open:i,borderRadius:i?"0":"12",children:[(0,r.jsxs)(u.n,{as:"summary",className:`${Z} ${V}`,display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"16",paddingTop:"12",paddingLeft:"12",paddingBottom:"12",lineHeight:"20",borderRadius:"12",maxHeight:"48",onClick:n,children:[e,(0,r.jsx)(u.n,{display:"flex",alignItems:"center",children:(0,r.jsx)(u.n,{className:Y,style:{transform:`rotate(${i?0:180}deg)`},children:(0,r.jsx)(O.g8,{className:X})})})]}),(0,r.jsx)(m.sg,{className:U,paddingBottom:"8",paddingLeft:"0",children:t})]})]}),ae=()=>{const{addMarket:e,removeMarket:t,markets:n,marketCount:i}=(0,K.PY)((({markets:e,marketCount:t,removeMarket:n,addMarket:r})=>({markets:e,marketCount:t,removeMarket:n,addMarket:r}))),[o,s]=(0,M.useState)(!!n.length),a=J((e=>e.setTraitsOpen)),l=(0,M.useMemo)((()=>Object.entries(re).map((([o,s])=>{var a;return(0,r.jsx)(oe,{title:s,value:o,count:(null===(a=i)||void 0===a?void 0:a[o])||0,addMarket:e,removeMarket:t,isMarketSelected:n.includes(o)},o)}))),[e,i,t,n]);return(0,r.jsx)(se,{title:"Marketplaces",items:l,onClick:e=>{e.preventDefault(),s(!o),a(A.MARKPLACE_INDEX,!o)},isOpen:o})};var le=n(7797);const ce=(0,k.default)(le.Z).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\common\\SortDropdown\\FilterSortDropdown__CheckIcon",componentId:"sc-c4c806a4-0"})`
  height: 20px;
  width: 20px;
  color: ${({theme:e})=>e.accent1};
`,de=({sortDropDownOptions:e})=>{const[t,n]=(0,M.useState)(!1),i=e=>{e.preventDefault(),n(!t)},o=e.map((e=>(0,r.jsx)(pe,{dropDownOption:e,parentOnClick:i},e.displayText)));return(0,r.jsx)(se,{title:"Sort by",items:o,onClick:i,isOpen:t})},pe=({dropDownOption:e,parentOnClick:t})=>{const n=(0,f.PY)((e=>e.sortBy)),i=void 0!==e.sortBy&&n===e.sortBy?(0,r.jsx)(ce,{}):(0,r.jsx)(r.Fragment,{});return(0,r.jsx)(ie,{title:e.displayText,element:i,onClick:n=>{n.preventDefault(),t(n),e.onClick()}})},ge=({dropDownOptions:e,inFilters:t,mini:n,miniPrompt:i,top:o,left:s})=>{const a=(0,f.PY)((e=>e.sortBy)),[l,c]=(0,M.useReducer)((e=>!e),!1),[d,p]=(0,M.useReducer)((e=>!e),!1),[g,h]=(0,M.useState)(a),w=(0,f.Iv)((e=>e.isCollectionStatsLoading)),[v,b]=(0,M.useState)(0);(0,M.useEffect)((()=>{h(a)}),[a]);const y=(0,M.useRef)(null);(0,H.t)(y,(()=>l&&c())),(0,M.useEffect)((()=>b(0)),[e]);const j=(0,M.useMemo)((()=>e[g].reverseOnClick||e[g].reverseIndex),[g,e]),k=w?220:t?"full":n?"min":v||"300px";return(0,r.jsxs)(u.n,{ref:y,borderRadius:"12",borderBottomLeftRadius:l?"0":void 0,borderBottomRightRadius:l?"0":void 0,style:{width:k},children:[(0,r.jsx)(u.n,{as:"button",borderRadius:"12",borderStyle:"solid",background:n?"none":"surface1",borderColor:"surface3",borderWidth:"1px",borderBottomLeftRadius:l?"0":void 0,borderBottomRightRadius:l?"0":void 0,padding:t?"12":n?"0":"8",color:"neutral1",whiteSpace:"nowrap",display:"flex",justifyContent:"space-between",height:"44",alignItems:"center",width:t?"full":"inherit",onClick:c,cursor:"pointer",className:w?"_12q7kth3 _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez1al":(0,P.default)(l&&!n&&"_12q7kth0"),children:!w&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(u.n,{display:"flex",alignItems:"center",color:"neutral1",children:[!l&&j&&(0,r.jsxs)(m.X2,{marginRight:"4",onClick:t=>{if(t.stopPropagation(),e[g].reverseOnClick){var n,r;null===(n=(r=e[g]).reverseOnClick)||void 0===n||n.call(r),p()}else{const t=e[g].reverseIndex??1;e[t-1].onClick(),h(t-1)}},children:[e[g].reverseOnClick&&(d?(0,r.jsx)(O.iB,{}):(0,r.jsx)(O.L7,{})),e[g].reverseIndex&&(g>(e[g].reverseIndex??1)-1?(0,r.jsx)(O.iB,{}):(0,r.jsx)(O.L7,{}))]}),(0,r.jsx)(u.n,{marginLeft:j?"4":"0",marginRight:n?"2":"0",color:"neutral1",className:x.km,children:n?i:l?"Sort by":e[g].displayText})]}),(0,r.jsx)(O.g8,{secondaryColor:n?D.Z4.colors.neutral1:void 0,secondaryWidth:n?"20":void 0,secondaryHeight:n?"20":void 0,style:{transform:l?"":"rotate(180deg)"}})]})}),(0,r.jsx)(u.n,{position:"absolute",zIndex:"3",width:t?"auto":"inherit",right:t?"16":"auto",paddingBottom:"8",fontSize:"14",background:"surface1",borderStyle:"solid",borderColor:"surface3",borderWidth:"1px",borderRadius:"8",borderTopLeftRadius:n?void 0:"0",borderTopRightRadius:n?void 0:"0",overflowY:"hidden",transition:"250",display:l||!v?"block":"none",visibility:v?"visible":"hidden",marginTop:n?"12":"0",className:(0,P.default)(!n&&"_12q7kth1"),style:{top:o?`${o}px`:"inherit",left:t?"16px":s?`${s}px`:"inherit"},children:v?l&&e.map(((t,i)=>(0,r.jsx)(he,{option:t,index:i,mini:n,onClick:()=>{e[i].onClick(),h(i),c(),d&&p()}},i))):[e.reduce(((e,t)=>t.displayText.length>=e.displayText.length?t:e),e[0])].map(((e,t)=>(0,r.jsx)(ue,{option:e,index:t,setMaxWidth:b},t)))})]})},he=({option:e,index:t,onClick:n,mini:i})=>(0,r.jsx)(u.n,{as:"button",border:"none",display:"flex",alignItems:"center",paddingTop:"10",paddingBottom:"10",paddingLeft:"12",paddingRight:i?"20":"0",width:"full",background:{default:"surface1",hover:"surface3"},color:"neutral1",onClick:n,cursor:"pointer",children:(0,r.jsx)(u.n,{marginLeft:"8",className:x.km,children:e.displayText})},t),ue=({option:e,index:t,setMaxWidth:n})=>{const i=(0,M.useRef)(null);return(0,M.useLayoutEffect)((()=>{i&&i.current&&n(Math.ceil(i.current.getBoundingClientRect().width)+52)})),(0,r.jsx)(u.n,{position:"absolute",ref:i,children:(0,r.jsx)(he,{option:e,index:t})},t)};var me=n(23173),xe=n(11734);const fe=(0,G.Ue)()((0,q.mW)((e=>({priceRangeLow:"",setPriceRangeLow:t=>{e((()=>({priceRangeLow:t})))},priceRangeHigh:"",setPriceRangeHigh:t=>{e((()=>({priceRangeHigh:t})))},prevMinMax:[0,100],setPrevMinMax:t=>{e((()=>({prevMinMax:t})))}})),{name:"usePriceRange"}));var we=n(47263);const ve="undefined"!==typeof window;const be=()=>{var e;const t=!!ve&&window.innerWidth<D.AV.sm?"nft-anchor-mobile":"nft-anchor";null===(e=window.document.getElementById(t))||void 0===e||e.scrollIntoView({behavior:"smooth"})};var ye=n(18806);const je=e=>{const t={...e};for(const r in t){const e=t[r],n=f.initialCollectionFilterState[r];JSON.stringify(e)===JSON.stringify(n)&&delete t[r]}t.all!==f.initialCollectionFilterState.buyNow&&delete t.all;const n=f.i9[f.initialCollectionFilterState.sortBy];return t.sort===n&&delete t.sort,t},ke=(e,t)=>{const n={...e};["traits","markets"].forEach((e=>{n[e]||(n[e]=[]),n[e]&&"string"===typeof n[e]&&(n[e]=[n[e]])}));try{const{buyNow:e,search:r}=f.initialCollectionFilterState;if(Object.entries(f.i9).forEach((([e,t])=>{t===n.sort&&(n.sortBy=Number(e))})),n.buyNow=!(void 0===n.all?!e:n.all),n.search=void 0===n.search?r:String(n.search),2===n.traits.length){const[e,t]=n.traits;`${e}${t}`.includes(",")||e.startsWith("(")&&!e.endsWith(")")&&t.endsWith(")")&&!t.startsWith("(")&&(n.traits=[`${e},${t}`])}n.traits=n.traits.map((e=>{const n=(e=>e.substring(1,e.length-1))(e.replace(/(")/g,"")),[r,i]=n.split(","),o=t.traits&&t.traits[r].find((e=>e.trait_value===i));return o??{trait_type:r,trait_value:i,trait_count:0}}))}catch(r){n.traits=[]}return n};var Ce=n(10581),_e=n(6282),Te=n(99582),Ie=n(72993),Ne=n(71291),Se=n(52873),ze=(n(13570),n(4105));const Pe=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\Sweep__SweepContainer",componentId:"sc-1dd1b80c-0"})`
  display: flex;
  gap: 60px;
  margin-top: 12px;
  padding: 16px;
  border-radius: 12px;
  background-color: ${({theme:e})=>e.surface1};
  justify-content: space-between;
  background: linear-gradient(${({theme:e})=>e.surface1}, ${({theme:e})=>e.surface1}) padding-box,
    linear-gradient(to right, #4673fa, #9646fa) border-box;
  border: 2px solid transparent;
`,Fe=(0,k.default)(ze.Z).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\Sweep__StyledSlider",componentId:"sc-1dd1b80c-1"})`
  cursor: pointer;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,$e=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\Sweep__SweepLeftmostContainer",componentId:"sc-1dd1b80c-2"})`
  display: flex;
  width: 100%;
  gap: 24px;
`,Ee=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\Sweep__SweepRightmostContainer",componentId:"sc-1dd1b80c-3"})`
  display: flex;
  flex-shrink: 0;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  min-width: 160px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,Re=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\Sweep__SweepHeaderContainer",componentId:"sc-1dd1b80c-4"})`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,Me=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\Sweep__SweepSubContainer",componentId:"sc-1dd1b80c-5"})`
  display: flex;
  width: 100%;
  gap: 12px;
  align-items: center;
`,Be=k.default.input.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\Sweep__InputContainer",componentId:"sc-1dd1b80c-6"})`
  width: 96px;
  color: ${({theme:e})=>e.neutral1};
  border: 1px solid ${({theme:e})=>e.surface3};
  background: none;
  border-radius: 8px;
  padding: 6px 8px;
  font-size: 16px;
  font-weight: 485;
  line-height: 20px;

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    width: 100%;
  }

  :hover,
  :focus {
    outline: none;
    border: 1px solid ${({theme:e})=>e.accent1};
  }
`,Ae=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\Sweep__ToggleContainer",componentId:"sc-1dd1b80c-7"})`
  display: flex;
  border: 1px solid ${({theme:e})=>e.surface3};
  background: none;
  border-radius: 12px;
  padding: 4px;
  cursor: pointer;
`,Le=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\Sweep__ToggleSwitch",componentId:"sc-1dd1b80c-8"})`
  color: ${({theme:e,active:t})=>t?e.neutral1:e.neutral2};
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({theme:e,active:t})=>t?e.surface3:"none"};
  font-size: 14px;
  font-weight: 535;
  line-height: 16px;
`,He=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\Sweep__NftDisplayContainer",componentId:"sc-1dd1b80c-9"})`
  position: relative;
  width: 34px;
  height: 34px;
`,Oe=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\Sweep__NftHolder",componentId:"sc-1dd1b80c-10"})`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 26px;
  height: 26px;
  border-radius: 4px;
  background: ${({theme:e,src:t})=>t?`url(${t})`:e.neutral3};
  background-size: 26px;
  opacity: ${({src:e,index:t})=>e?1:0===t?.9:1===t?.6:.3};
  transform: ${({index:e})=>0===e?"translate(-50%, -50%) rotate(-4.42deg)":1===e?"translate(-50%, -50%) rotate(-14.01deg)":"translate(-50%, -50%) rotate(10.24deg)"};
  z-index: ${({index:e})=>3-e};
`,De=RegExp("^(0|[1-9][0-9]*)$"),Ye=RegExp("^\\d*\\.?\\d{0,2}$"),Xe=({nfts:e})=>(0,r.jsx)(He,{children:[...Array(3)].map(((t,n)=>(0,r.jsx)(Oe,{index:n,src:e.length-1>=n?e[e.length-1-n].smallImageUrl:void 0},n)))}),We=({contractAddress:e,minPrice:t,maxPrice:n})=>{var i;const o=(0,k.useTheme)(),{formatEther:s}=(0,b.Gb)(),[a,l]=(0,M.useReducer)((e=>!e),!0),[c,d]=(0,M.useState)(""),p=(0,f.cP)((e=>e.addAssetsToBag)),h=(0,f.cP)((e=>e.removeAssetsFromBag)),u=(0,f.cP)((e=>e.itemsInBag)),m=(0,f.cP)((e=>e.lockSweepItems)),x=(0,f.cP)((e=>e.setBagExpanded)),w=(0,f.PY)((e=>e.traits)),y=(0,f.PY)((e=>e.markets)),j=Ze(e,"others",t,n),C=Ze(e,we.Fz.Sudoswap,t,n),_=Ze(e,we.Fz.NFTX,t,n),T=Ze(e,we.Fz.NFT20,t,n),{data:I}=(0,F.he)(j),{data:N}=(0,F.he)(C),{data:P}=(0,F.he)(_),{data:$}=(0,F.he)(T),{sortedAssets:E,sortedAssetsTotalEth:R}=(0,M.useMemo)((()=>{var e,t,n,r;if(!I&&!N&&!P&&!$)return{sortedAssets:void 0,sortedAssetsTotalEth:S.O$.from(0)};let i=0,o=0,s=[];N&&(s=[...s,...N]),P&&(s=[...s,...P]),$&&(s=[...s,...$]);const a=s.filter((e=>e.marketplace===we.Fz.Sudoswap&&!e.susFlag));s.forEach((e=>{if(!e.susFlag)if(e.marketplace===we.Fz.Sudoswap){const t=(0,v.Pu)(e,a.filter((t=>(0,v.zA)(e,t))).findIndex((t=>t.tokenId===e.tokenId)));e.priceInfo.ETHPrice=t??"0"}else{const t=e.marketplace===we.Fz.NFTX,n=(0,v.Pu)(e,t?i:o);S.O$.from(n).gt(0)&&(t?i++:o++),e.priceInfo.ETHPrice=n}})),s=I?I.concat(s):s,s.sort(((e,t)=>S.O$.from(e.priceInfo.ETHPrice).gt(S.O$.from(t.priceInfo.ETHPrice))?1:-1));let l=s.filter((e=>S.O$.from(e.priceInfo.ETHPrice).gt(0)&&!e.susFlag));return l=l.slice(0,Math.max((null===(e=I)||void 0===e?void 0:e.length)??0,(null===(t=N)||void 0===t?void 0:t.length)??0,(null===(n=P)||void 0===n?void 0:n.length)??0,(null===(r=$)||void 0===r?void 0:r.length)??0)),{sortedAssets:l,sortedAssetsTotalEth:l.reduce(((e,t)=>e.add(S.O$.from(t.priceInfo.ETHPrice))),S.O$.from(0))}}),[I,N,P,$]),{sweepItemsInBag:B,sweepEthPrice:A}=(0,M.useMemo)((()=>{const t=u.filter((t=>t.inSweep&&t.asset.address===e)).map((e=>e.asset)),n=t.reduce(((e,t)=>e.add(S.O$.from(t.priceInfo.ETHPrice))),S.O$.from(0));return{sweepItemsInBag:t,sweepEthPrice:n}}),[u,e]);(0,M.useEffect)((()=>{0===B.length&&d("")}),[B]),(0,M.useEffect)((()=>{m(e)}),[e,w,y,t,n,m]);const L=e=>{if(E)if(a)0===B.length&&e>0&&x({bagExpanded:!0}),B.length<e?p(E.slice(B.length,e),!0):h(B.slice(e,B.length),!0),d(e<1?"":e.toString());else{const t=(0,z.parseEther)(e.toString());if(A.lte(t)){let e=B.length,n=A;const r=[];for(;e<E.length&&n.add(S.O$.from(E[e].priceInfo.ETHPrice)).lte(t);)r.push(E[e]),n=n.add(S.O$.from(E[e].priceInfo.ETHPrice)),e++;r.length>0&&(0===B.length&&x({bagExpanded:!0}),p(r,!0))}else{let e=B.length-1,n=A;const r=[];for(;e>=0&&n.gt(t);)r.push(B[e]),n=n.sub(S.O$.from(B[e].priceInfo.ETHPrice)),e--;r.length>0&&h(r,!0)}d(0===e?"":e.toFixed(2))}};return(0,r.jsxs)(Pe,{"data-testid":"nft-sweep-slider",children:[(0,r.jsxs)($e,{children:[(0,r.jsx)(Re,{children:(0,r.jsx)(Q.Tv.SubHeader,{lineHeight:"20px",paddingTop:"6px",paddingBottom:"6px",children:(0,r.jsx)(g.cC,{children:"Sweep"})})}),(0,r.jsxs)(Me,{children:[(0,r.jsx)(Fe,{defaultValue:0,min:0,max:a?(null===(i=E)||void 0===i?void 0:i.length)??0:parseFloat((0,z.formatEther)(R).toString()),value:a?B.length:parseFloat((0,z.formatEther)(A.toString())),step:a?1:.01,trackStyle:{top:"3px",height:"8px",background:"radial-gradient(101.8% 4091.31% at 0% 0%, #4673FA 0%, #9646FA 100%)"},handleStyle:{top:"3px",width:"12px",height:"20px",backgroundColor:"#4673FA",borderRadius:"4px",border:"none",opacity:"1",boxShadow:`${o.deprecated_shallowShadow.slice(0,-1)}`},railStyle:{top:"3px",height:"8px",backgroundColor:`${o.surface3}`},onChange:e=>{"number"===typeof e&&E&&(a?(Math.floor(e)!==Math.floor(""!==c?parseFloat(c):0)&&L(Math.floor(e)),d(e<1?"":e.toString())):(L(e),d(0===e?"":e.toFixed(2))))}}),(0,r.jsx)(Be,{inputMode:"decimal",autoComplete:"off",autoCorrect:"off",type:"text",pattern:"^[0-9]*[.,]?[0-9]*$",placeholder:"0",minLength:1,maxLength:79,spellCheck:"false",value:a&&""!==c?Math.floor(parseFloat(c)):c,onChange:e=>{var t;""===(t=e.target.value.replace(/,/g,"."))?(L(0),d("")):(a&&De.test(t)||!a&&Ye.test(t))&&(L(parseFloat(t)),d(t))}}),(0,r.jsxs)(Ae,{onClick:()=>{d(""),h(B),l()},children:[(0,r.jsx)(Le,{active:a,children:"Items"}),(0,r.jsx)(Le,{active:!a,children:"ETH"})]})]})]}),(0,r.jsxs)(Ee,{children:[(0,r.jsx)(Q.Tv.SubHeader,{"font-size":"14px",children:`${s({input:A.toString(),type:b.sw.NFTToken})} ETH`}),(0,r.jsx)(Xe,{nfts:B})]})]})},Ue=[we.Fz.Opensea,we.Fz.X2Y2,we.Fz.LooksRare];function Ze(e,t,n,r){const i=(0,f.PY)((e=>e.traits)),o=(0,f.PY)((e=>e.markets)),s=!!o.length;return(0,M.useMemo)((()=>{if(s){if("others"===t){const t=o.filter((e=>!(0,we.g7)(e)));return t.length>0?{contractAddress:e,traits:i,markets:t}:{contractAddress:"",traits:[],markets:[]}}if(!o.includes(t))return{contractAddress:"",traits:[],markets:[]}}switch(t){case we.Fz.Sudoswap:case we.Fz.NFTX:case we.Fz.NFT20:return{contractAddress:e,traits:i,markets:[t],price:{low:n,high:r,symbol:"ETH"}};case"others":return{contractAddress:e,traits:i,markets:Ue,price:{low:n,high:r,symbol:"ETH"}}}}),[e,s,t,o,r,n,i])}const Ve=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\TraitChip__TraitChipWrap",componentId:"sc-29602959-0"})`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 6px 6px 12px;
  font-weight: 535;
  border-radius: 8px;
  background-color: ${({theme:e})=>e.surface3};
  font-size: 14px;
`,Ke=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\TraitChip__CrossIconWrap",componentId:"sc-29602959-1"})`
  color: ${({theme:e})=>e.neutral2};
  height: 28px;
  width: 28px;
  border: none;
  padding-top: 1px;
`,Ge=({onClick:e,value:t})=>(0,r.jsxs)(Ve,{children:[(0,r.jsx)("span",{children:t}),(0,r.jsx)(Ke,{onClick:e,children:(0,r.jsx)(O.aM,{cursor:"pointer"})})]}),qe=new Map,Je=k.css`
  margin: 0 16px;
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    margin: 0 20px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.md}px) {
    margin: 0 26px;
  }
  @media screen and (min-width: ${({theme:e})=>e.breakpoint.lg}px) {
    margin: 0 48px;
  }
`,Qe=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\CollectionNfts__ActionsContainer",componentId:"sc-667c8a6-0"})`
  display: flex;
  flex: 1 1 auto;
  gap: 10px;
  justify-content: space-between;

  ${Je}
`,et=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\CollectionNfts__ActionsSubContainer",componentId:"sc-667c8a6-1"})`
  display: flex;
  gap: 12px;
  flex: 1;
  min-width: 0px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    gap: 10px;
  }
`,tt=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\CollectionNfts__SortDropdownContainer",componentId:"sc-667c8a6-2"})`
  width: max-content;
  height: 44px;
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.lg}px`}) {
    ${({isFiltersExpanded:e})=>e&&"display: none;"}
  }
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,nt=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\CollectionNfts__EmptyCollectionWrapper",componentId:"sc-667c8a6-3"})`
  display: block;
  text-align: center;
`,rt=k.default.span.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\CollectionNfts__ViewFullCollection",componentId:"sc-667c8a6-4"})`
  ${a.cR}
`,it=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\CollectionNfts__InfiniteScrollWrapper",componentId:"sc-667c8a6-5"})`
  ${Je}
`,ot=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\CollectionNfts__SweepButton",componentId:"sc-667c8a6-6"})`
  display: flex;
  gap: 8px;
  border: none;
  border-radius: 12px;
  padding: 12px 18px 12px 12px;
  cursor: ${({disabled:e})=>e?"auto":"pointer"};
  color: ${({toggled:e,disabled:t,theme:n})=>e&&!t?n.deprecated_accentTextLightPrimary:n.neutral1};
  background: ${({theme:e,toggled:t,disabled:n})=>!n&&t?"radial-gradient(101.8% 4091.31% at 0% 0%, #4673FA 0%, #9646FA 100%)":e.surface3};
  opacity: ${({disabled:e})=>e?.4:1};
  :hover {
    background-color: ${({theme:e})=>e.surface3};
    transition: ${({theme:{transition:{duration:e,timing:t}}})=>`${e.fast} background-color ${t.in}`};
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 12px 12px 12px 12px;
  }
`,st=(0,k.default)(Q.Tv.BodyPrimary).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\CollectionNfts__SweepText",componentId:"sc-667c8a6-7"})`
  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    display: none;
  }
`,at=(0,k.default)(m.X2).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\CollectionNfts__MarketNameWrapper",componentId:"sc-667c8a6-8"})`
  gap: 8px;
`,lt=({height:e})=>(0,r.jsx)(u.n,{width:"full",className:L.P,children:(0,r.jsx)(Ne.p,{height:e})}),ct=()=>(0,r.jsx)(it,{children:(0,r.jsxs)(m.sg,{alignItems:"flex-start",position:"relative",width:"full",children:[(0,r.jsxs)(m.X2,{marginY:"12",gap:"12",marginBottom:"40",children:[(0,r.jsx)(u.n,{className:me.S,borderRadius:"12",width:{sm:"44",md:"100"},height:"44"}),(0,r.jsx)(u.n,{className:me.S,borderRadius:"12",height:"44",display:{sm:"none",md:"flex"},style:{width:"220px"}}),(0,r.jsx)(u.n,{className:me.S,borderRadius:"12",height:"44",width:{sm:"276",md:"332"}})]}),(0,r.jsx)(lt,{})]})}),dt=(e,t)=>{const n=[{displayText:"Price: Low to High",onClick:()=>e(f.hn.LowToHigh),reverseIndex:2,sortBy:f.hn.LowToHigh},{displayText:"Price: High to Low",onClick:()=>e(f.hn.HighToLow),reverseIndex:1,sortBy:f.hn.HighToLow}];return t?n.concat([{displayText:"Rarity: Rare to Common",onClick:()=>e(f.hn.RareToCommon),reverseIndex:4,sortBy:f.hn.RareToCommon},{displayText:"Rarity: Common to Rare",onClick:()=>e(f.hn.CommonToRare),reverseIndex:3,sortBy:f.hn.CommonToRare}]):n},pt=({contractAddress:e,collectionStats:t,rarityVerified:n})=>{var s,a,l,c,d;const g=(0,Ie.x)(),h=(0,f.PY)((e=>e.traits)),w=(0,f.PY)((e=>e.minPrice)),b=(0,f.PY)((e=>e.maxPrice)),y=(0,f.PY)((e=>e.markets)),j=(0,f.PY)((e=>e.sortBy)),k=(0,f.PY)((e=>e.search)),C=(0,f.PY)((e=>e.setMarketCount)),_=(0,f.PY)((e=>e.setSortBy)),T=(0,f.PY)((e=>e.buyNow)),I=fe((e=>e.setPriceRangeLow)),N=fe((e=>e.priceRangeLow)),E=fe((e=>e.priceRangeHigh)),R=fe((e=>e.setPriceRangeHigh)),A=fe((e=>e.setPrevMinMax)),H=(0,xe.I)((e=>e.setIsCollectionNftsLoading)),D=(0,f.PY)((e=>e.removeTrait)),Y=(0,f.PY)((e=>e.removeMarket)),X=(0,f.PY)((e=>e.reset)),W=(0,f.PY)((e=>e.setMinPrice)),U=(0,f.PY)((e=>e.setMaxPrice)),Z=(0,f.PY)((e=>e.setHasRarity)),V=(0,f.cP)((e=>e.toggleBag)),K=(0,f.cP)((e=>e.bagExpanded)),G=(0,f.cP)((e=>e.itemsInBag)),q=(0,$.Z)(w,500),J=(0,$.Z)(b,500),Q=(0,$.Z)(k,500),[ee,te]=(0,M.useState)(we.Yp.unset),[ne,ie]=(0,M.useState)(),[oe,se]=(0,M.useState)(!1),ae={address:e,orderBy:f.AZ[j].field,asc:f.AZ[j].asc,filter:{listed:T,marketplaces:y.length>0?y.map((e=>e.toUpperCase())):void 0,maxPrice:J?(0,z.parseEther)(J.toString()).toString():void 0,minPrice:q?(0,z.parseEther)(q.toString()).toString():void 0,tokenSearchQuery:Q,traits:h.length>0?h.map((e=>({name:e.trait_type,values:[e.trait_value]}))):void 0},first:F.iQ},{data:le,loading:ce,hasNext:de,loadMore:pe}=(0,F.gP)(ae),he=(0,M.useCallback)((e=>{const t=G.some((t=>e.tokenId===t.asset.tokenId&&e.address===t.asset.address));if(e.marketplace===we.Fz.Sudoswap){const n=G.filter((t=>(0,v.zA)(e,t.asset)));return t?n.findIndex((t=>t.asset.tokenId===e.tokenId)):n.length}return t?G.filter((t=>(0,v.H8)(e,t.asset))).findIndex((t=>t.asset.tokenId===e.tokenId)):G.filter((t=>(0,v.H8)(e,t.asset))).length}),[G]),ue=(0,M.useCallback)((e=>(0,v.Pu)(e,he(e))),[he]),me=(0,M.useMemo)((()=>{if(!le||!le.some((e=>e.marketplace&&(0,we.g7)(e.marketplace))))return le;const e=[...le];return e.forEach((e=>e.marketplace&&(0,we.g7)(e.marketplace)&&(e.priceInfo.ETHPrice=ue(e)??"0"))),j!==f.hn.HighToLow&&j!==f.hn.LowToHigh||e.sort(((e,t)=>{var n,r;const i=S.O$.from((null===(n=e.priceInfo)||void 0===n?void 0:n.ETHPrice)??0),o=S.O$.from((null===(r=t.priceInfo)||void 0===r?void 0:r.ETHPrice)??0);if(i.gt(0)&&o.lte(0))return-1;if(o.gt(0)&&i.lte(0))return 1;const s=i.sub(o);return s.gt(0)?j===f.hn.LowToHigh?1:-1:s.lt(0)?j===f.hn.LowToHigh?-1:1:0})),e}),[le,j,ue]),[ve,ze]=(0,M.useState)(),[Pe,Fe]=(0,f.wx)(),$e=(0,M.useRef)(null),Ee=(0,p.dD)(),Re=(0,p.eI)();(0,M.useEffect)((()=>{H(ce)}),[ce,H]);const Me=(0,M.useMemo)((()=>{var e;const n=(0,v.oY)(qe,null===(e=t)||void 0===e?void 0:e.address,me)??!1;return Z(n),n}),[t.address,me,Z]),Be=(0,M.useMemo)((()=>dt(_,Me)),[Me,_]);(0,M.useEffect)((()=>(se(!1),()=>{f.PY.setState(f.initialCollectionFilterState)})),[e]);const Ae=(0,M.useMemo)((()=>me?me.map((e=>(0,r.jsx)(B,{asset:e,isMobile:Ee,mediaShouldBePlaying:e.tokenId===ve,setCurrentTokenPlayingMedia:ze,rarityVerified:n,uniformAspectRatio:ee,setUniformAspectRatio:te,renderedHeight:ne,setRenderedHeight:ie},e.address+e.tokenId))):null),[me,Ee,ve,n,ee,ne]),Le=me&&me.length>0,He=Le&&me[0]&&(null===(s=me[0])||void 0===s?void 0:s.tokenType)===Te.hgB.Erc1155,Oe=(0,M.useMemo)((()=>q&&J?`Price: ${q} - ${J} ETH`:q?`Min. Price: ${q} ETH`:J?`Max Price: ${J} ETH`:void 0),[q,J]);(0,M.useEffect)((()=>{var e,n;const r={};null===(n=t)||void 0===n||null===(e=n.marketplaceCount)||void 0===e||e.forEach((({marketplace:e,count:t})=>{r[e]=t})),C(r),$e.current=f.PY.getState()}),[null===(a=t)||void 0===a?void 0:a.marketplaceCount,C]);const De=(0,_e.TH)();(0,M.useEffect)((()=>{var e;if(null===(e=t)||void 0===e?void 0:e.traits){const e=((e,t)=>{if(!e.search)return;const n=ye.parse(e.search,{arrayFormat:"comma",parseNumbers:!0,parseBooleans:!0});return ke(n,t)})(De,t);requestAnimationFrame((()=>{e&&f.PY.setState(e)})),f.PY.subscribe((e=>{JSON.stringify($e.current)!==JSON.stringify(e)&&((e=>{const t={};["markets","maxPrice","maxRarity","minPrice","minRarity","traits","all","search","sort"].forEach((n=>{switch(n){case"traits":{const n=e.traits.map((({trait_type:e,trait_value:t})=>`("${e}","${t}")`));t.traits=n;break}case"all":t.all=!e.buyNow;break;case"sort":t.sort=f.i9[e.sortBy];break;default:t[n]=e[n]}}));const n=je(t),r=window.location.href.split("?")[0],i=ye.stringify(n,{arrayFormat:"comma"});window.history.replaceState({},"",`${r}${i&&`?${i}`}`)})(e),$e.current=e)}))}}),[De]),(0,M.useEffect)((()=>{te(we.Yp.unset),ie(void 0)}),[e]),(0,M.useEffect)((()=>{var e;if(t&&(null===(e=t.stats)||void 0===e?void 0:e.floor_price)){var n,r;const e=null===(n=t.stats)||void 0===n?void 0:n.floor_price,o=10*(null===(r=t.stats)||void 0===r?void 0:r.floor_price);var i;if(""===N)I(null===(i=e)||void 0===i?void 0:i.toFixed(2));""===E&&R(o.toFixed(2))}}),[t,N,E,R,I]);const Ye=(0,M.useCallback)((()=>{He||(oe||(be(),K||Ee||V()),se(!oe))}),[K,He,Ee,oe,V]),Xe=(0,M.useCallback)((()=>{X(),A([0,100]),be()}),[X,A]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(u.x,{backgroundColor:"surface1",position:"sticky",top:"72",width:"full",zIndex:"3",marginBottom:{sm:"8",md:"20"},paddingTop:"16",paddingBottom:"16",children:[(0,r.jsxs)(Qe,{children:[(0,r.jsxs)(et,{children:[(0,r.jsx)(o.M8,{events:[i.TM.onClick],element:i.xo.NFT_FILTER_BUTTON,name:i.Yz.NFT_FILTER_OPENED,shouldLogImpression:!Pe,properties:{collection_address:e,chain_id:g},children:(0,r.jsx)(Bt.L,{isMobile:Ee,isFiltersExpanded:Pe,collectionCount:(null===(c=me)||void 0===c||null===(l=c[0])||void 0===l?void 0:l.totalCount)??0,onClick:()=>{K&&!Re.xl&&V(),Fe(!Pe)}})}),(0,r.jsx)(tt,{isFiltersExpanded:Pe,children:(0,r.jsx)(ge,{dropDownOptions:Be})}),(0,r.jsx)(gt,{})]}),!He&&(0,r.jsxs)(ot,{toggled:oe,disabled:He,className:x.km,onClick:Ye,"data-testid":"nft-sweep-button",children:[(0,r.jsx)(O.UV,{viewBox:"0 0 24 24",width:"20px",height:"20px"}),(0,r.jsx)(st,{fontWeight:535,color:"currentColor",lineHeight:"20px",children:"Sweep"})]})]}),(0,r.jsxs)(it,{children:[oe&&(0,r.jsx)(We,{contractAddress:e,minPrice:q,maxPrice:J}),(0,r.jsxs)(m.X2,{paddingTop:y.length||h.length||Oe?"12":"0",gap:"8",flexWrap:"wrap",children:[y.map((e=>(0,r.jsx)(Ge,{value:(0,r.jsxs)(at,{children:[(0,v.Dp)(e,"16"),re[e]]}),onClick:()=>{be(),Y(e)}},e))),h.map((e=>(0,r.jsx)(Ge,{value:"Number of traits"===e.trait_type?`${e.trait_value} trait${(0,v._6)(Number(e.trait_value))}`:`${e.trait_type}: ${e.trait_value}`,onClick:()=>{be(),D(e)}},e.trait_value))),Oe&&(0,r.jsx)(Ge,{value:Oe,onClick:()=>{be(),W(""),U(""),A([0,100])}}),Boolean(h.length||y.length||Oe)&&(0,r.jsx)(Se.v,{onClick:Xe,children:"Clear All"})]})]})]}),(0,r.jsx)(it,{children:ce?(0,r.jsx)(lt,{height:ne}):(0,r.jsx)(Ce.Z,{next:pe,hasMore:de??!1,loader:Boolean(de&&Le)&&(0,r.jsx)(Ne.p,{}),dataLength:(null===(d=me)||void 0===d?void 0:d.length)??0,style:{overflow:"unset"},className:Le?L.P:void 0,children:Le?Ae:(0,r.jsx)(m.M5,{width:"full",color:"neutral2",textAlign:"center",style:{height:"60vh"},children:(0,r.jsxs)(nt,{children:[(0,r.jsx)("p",{className:x.Es,children:"No NFTS found"}),(0,r.jsx)(u.n,{onClick:X,type:"button",className:(0,P.default)(x.Km,x.km),color:"accent1",cursor:"pointer",children:(0,r.jsx)(rt,{children:"View full collection"})})]})})})})]})};const gt=()=>{const e=(0,K.PY)((e=>e.setSearch)),t=(0,K.PY)((e=>e.search)),n=(0,f.Iv)((e=>e.isCollectionStatsLoading));return(0,r.jsx)(u.n,{as:"input",flex:"1",borderColor:{default:"surface3",focus:"accent1"},borderWidth:"1.5px",borderStyle:"solid",borderRadius:"12",padding:"12",backgroundColor:"surface1",maxWidth:"332",minWidth:"0",fontSize:"16",fontWeight:"book",height:"44",color:{placeholder:"neutral3",default:"neutral1"},value:t,placeholder:n?"":"Search by name",className:(0,P.default)(n&&"_2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez88d"),onChange:t=>{e(t.currentTarget.value)}})};var ht=n(19478);const ut=e=>0===e?"0":e?e<1?"<1":Math.round(e).toString():"";var mt=n(35339),xt=n.n(mt),ft="_2kdvfw1 jinxmn3 rgw6ez343 rgw6ez7zp rgw6ez89l rgw6ez553 rgw6ez81x rgw6ez48l jinxmnf",wt="jinxmn3 rgw6ez343 rgw6ez7zp rgw6ez89l rgw6ez553 rgw6ez81x rgw6ez48l rgw6ez6rr",vt="jinxmn1 rgw6ezwf rgw6ezya rgw6ezf3 rgw6ezha";const bt=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\CollectionStats__PercentChange",componentId:"sc-11fce3a4-0"})`
  color: ${({theme:e,isNegative:t})=>t?e.critical:e.success};
  display: flex;
  align-items: center;
  justify-content: center;
`,yt=k.default.h1.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\CollectionStats__CollectionNameText",componentId:"sc-11fce3a4-1"})`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  margin-right: ${({isVerified:e})=>e?"6px":"0px"};
`,jt=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\CollectionStats__CollectionNameTextLoading",componentId:"sc-11fce3a4-2"})`
  ${me.S}
  height: 32px;
  width: 236px;
`,kt=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\CollectionStats__MobileSocialsOverflowIcon",componentId:"sc-11fce3a4-3"})`
  display: flex;
  margin-left: 4px;
  flex-direction: column;
  justify-content: center;
  height: 28px;
`,Ct=({children:e,href:t})=>(0,r.jsx)(u.n,{display:"flex",as:"a",target:"_blank",rel:"noreferrer",href:t,height:"40",width:"40",borderRadius:"round",backgroundColor:"surface1",children:e}),_t=({collectionStats:e,collectionSocialsIsOpen:t,toggleCollectionSocials:n})=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(kt,{onClick:n,children:t?(0,r.jsx)(O.DX,{width:"28",height:"28",fill:D.Z4.colors.neutral2}):(0,r.jsx)(O.ws,{width:"28",height:"20",fill:D.Z4.colors.neutral2})}),t&&(0,r.jsxs)(m.X2,{position:"absolute",gap:"4",alignItems:"center",justifyContent:"center",style:{top:"-48px",right:"-6px"},children:[e.discordUrl?(0,r.jsx)(Ct,{href:e.discordUrl,children:(0,r.jsx)(u.n,{margin:"auto",paddingTop:"4",children:(0,r.jsx)(O.D7,{width:28,height:28,color:D.Z4.colors.neutral2})})}):null,e.twitterUrl?(0,r.jsx)(Ct,{href:"https://twitter.com/"+e.twitterUrl,children:(0,r.jsx)(u.n,{margin:"auto",paddingTop:"6",children:(0,r.jsx)(O.Zm,{fill:D.Z4.colors.neutral2,color:D.Z4.colors.neutral2,width:"28px",height:"28px"})})}):null,e.instagram?(0,r.jsx)(Ct,{href:"https://instagram.com/"+e.instagram,children:(0,r.jsx)(u.n,{margin:"auto",paddingLeft:"2",paddingTop:"4",children:(0,r.jsx)(O.yu,{fill:D.Z4.colors.neutral2,width:"28px",height:"28px"})})}):null,e.externalUrl?(0,r.jsx)(Ct,{href:e.externalUrl,children:(0,r.jsx)(u.n,{margin:"auto",paddingTop:"4",children:(0,r.jsx)(O.O1,{fill:D.Z4.colors.neutral2,width:"28px",height:"28px"})})}):null]})]}),Tt=({children:e,href:t})=>(0,r.jsx)(m.sg,{as:"a",target:"_blank",rel:"noreferrer",href:t,height:"full",justifyContent:"center",children:e}),It=({collectionStats:e,name:t,isVerified:n,isMobile:i,collectionSocialsIsOpen:o,toggleCollectionSocials:s})=>{const a=(0,xe.I)((e=>e.isCollectionStatsLoading));return(0,r.jsxs)(m.X2,{justifyContent:"space-between",children:[(0,r.jsxs)(m.X2,{minWidth:"0",children:[a?(0,r.jsx)(jt,{}):(0,r.jsx)(yt,{isVerified:n,className:i?x.td:x.Es,children:t}),n&&(0,r.jsx)(O.SA,{style:{width:"32px",height:"32px"}}),(0,r.jsxs)(m.X2,{display:{sm:"none",md:"flex"},alignItems:"center",justifyContent:"center",marginLeft:"32",gap:"8",height:"32",children:[e.discordUrl?(0,r.jsx)(Tt,{href:e.discordUrl??"",children:(0,r.jsx)(O.D7,{fill:D.Z4.colors.neutral2,color:D.Z4.colors.neutral2,width:"26px",height:"26px"})}):null,e.twitterUrl?(0,r.jsx)(Tt,{href:"https://twitter.com/"+e.twitterUrl,children:(0,r.jsx)(O.Zm,{fill:D.Z4.colors.neutral2,color:D.Z4.colors.neutral2,width:"26px",height:"26px"})}):null,e.instagram?(0,r.jsx)(Tt,{href:"https://instagram.com/"+e.instagram,children:(0,r.jsx)(O.yu,{fill:D.Z4.colors.neutral2,width:"26px",height:"26px"})}):null,e.externalUrl?(0,r.jsx)(Tt,{href:e.externalUrl??"",children:(0,r.jsx)(O.O1,{fill:D.Z4.colors.neutral2,width:"26px",height:"26px"})}):null]})]}),i&&(e.discordUrl||e.twitterUrl||e.instagram||e.externalUrl)&&(0,r.jsx)(_t,{collectionStats:e,collectionSocialsIsOpen:o,toggleCollectionSocials:s})]})},Nt=k.default.p.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\CollectionStats__CollectionDescriptionText",componentId:"sc-11fce3a4-4"})`
  vertical-align: top;
  text-overflow: ellipsis;
  margin: 0;

  ${({readMore:e})=>e?k.css`
          white-space: normal;
          overflow: visible;
          display: inline;
          max-width: 100%;
        `:k.css`
          white-space: nowrap;
          overflow: hidden;
          display: inline-block;
          max-width: min(calc(100% - 112px), 600px);
        `}

  a[href] {
    color: ${({theme:e})=>e.neutral2};
    text-decoration: none;

    :hover {
      opacity: ${({theme:e})=>e.opacity.hover};
    }

    :focus {
      opacity: ${({theme:e})=>e.opacity.click};
    }
  }
`,St=k.default.span.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\CollectionStats__ReadMore",componentId:"sc-11fce3a4-5"})`
  vertical-align: top;
  color: ${({theme:e})=>e.neutral2};
  cursor: pointer;
  margin-left: 4px;
`,zt=()=>(0,r.jsx)(u.n,{marginTop:{sm:"12",md:"16"},className:"jinxmnc _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez199"}),Pt=({description:e})=>{const[t,n]=(0,M.useState)(!1),[i,o]=(0,M.useReducer)((e=>!e),!1),s=(0,M.useRef)(null),a=(0,M.useRef)(null),l=(0,xe.I)((e=>e.isCollectionStatsLoading)),c=(0,p.dD)();return(0,M.useEffect)((()=>{var e;s&&a&&s.current&&a.current&&(a.current.getBoundingClientRect().width>=(null===(e=s.current)||void 0===e?void 0:e.getBoundingClientRect().width)-112||a.current.getBoundingClientRect().width>=590)?n(!0):n(!1)}),[a,s,l,e]),l?(0,r.jsx)(zt,{}):(0,r.jsxs)(u.n,{ref:s,marginTop:{sm:"12",md:"16"},style:{maxWidth:"680px"},children:[(0,r.jsx)(Nt,{readMore:i,ref:a,className:c?x.Km:x.d1,children:(0,r.jsx)(xt(),{source:e,allowedTypes:["link","paragraph","strong","code","emphasis","text"],renderers:{paragraph:"span"}})}),t&&(0,r.jsxs)(St,{className:c?x.Km:x.d1,onClick:o,children:["show ",i?"less":"more"]})]})},Ft=({children:e,label:t,shouldHide:n})=>(0,r.jsxs)(u.n,{display:n?"none":"flex",flexDirection:"column",alignItems:"baseline",gap:"2",height:"min",children:[(0,r.jsx)(Q.Tv.SubHeader,{className:"jinxmn6 rgw6ezd9 rgw6ezbl rgw6ezef",children:e}),(0,r.jsx)(u.n,{as:"span",className:"jinxmn5 rgw6ezd3 rgw6ezb9 rgw6ezdr rgw6ez4bf rgw6ez45l",children:t})]}),$t=e=>new Array(e?3:5).fill(null).map(((t,n)=>(0,r.jsxs)(u.n,{display:"flex",flexDirection:"column",alignItems:"baseline",gap:"2",height:"min",marginBottom:e?"12":"0",children:[(0,r.jsx)("div",{className:"_2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez14f rgw6ez18x"}),(0,r.jsx)("span",{className:"_2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez14f rgw6ez199 rgw6ezwf"})]},`statsLoadingSkeleton-key-${n}`))),Et=({stats:e,isMobile:t,...n})=>{var i,o,s,a,l,c,d,g,h,u,x,w,v,y;const{formatNumberOrString:j,formatDelta:k}=(0,b.Gb)(),C=(null===(o=e)||void 0===o||null===(i=o.stats)||void 0===i?void 0:i.total_supply)?ut((e.stats.num_owners??0)/e.stats.total_supply*100):0,_=e.stats?j({input:e.stats.total_supply??0,type:b.sw.NFTCollectionStats}):0,T=(null===(a=e)||void 0===a||null===(s=a.stats)||void 0===s?void 0:s.total_supply)?ut((e.stats.total_listings??0)/e.stats.total_supply*100):0,I=(0,xe.I)((e=>e.isCollectionStatsLoading)),N=j({input:Number(null===(l=e.stats)||void 0===l?void 0:l.total_volume)??0,type:b.sw.NFTCollectionStats}),S=j({input:(null===(c=e.stats)||void 0===c?void 0:c.floor_price)??0,type:b.sw.NFTTokenFloorPrice}),z=k(Math.round(Math.abs((null===(g=e)||void 0===g||null===(d=g.stats)||void 0===d?void 0:d.one_day_floor_change)??0))),P=(0,f.cP)((e=>e.bagExpanded)),F=(0,p.eI)(),$=t||!F.lg&&P;return(0,r.jsx)(m.X2,{gap:{sm:"24",md:"36",lg:"48",xl:"60"},...n,children:I?$t(t??!1):(0,r.jsxs)(r.Fragment,{children:[(null===(h=e.stats)||void 0===h?void 0:h.floor_price)?(0,r.jsxs)(Ft,{label:"Global floor",shouldHide:!1,children:[S," ETH"]}):null,void 0!==(null===(u=e.stats)||void 0===u?void 0:u.one_day_floor_change)?(0,r.jsx)(Ft,{label:"Floor 24H",shouldHide:!1,children:(0,r.jsxs)(bt,{isNegative:e.stats.one_day_floor_change<0,children:[(0,r.jsx)(ht.Kx,{delta:null===(w=e)||void 0===w||null===(x=w.stats)||void 0===x?void 0:x.one_day_floor_change}),z]})}):null,(null===(v=e.stats)||void 0===v?void 0:v.total_volume)?(0,r.jsxs)(Ft,{label:"Total volume",shouldHide:!1,children:[N," ETH"]}):null,_?(0,r.jsx)(Ft,{label:"Items",shouldHide:t??!1,children:_}):null,C&&e.standard!==we.iv.ERC1155?(0,r.jsxs)(Ft,{label:"Unique owners",shouldHide:$??!1,children:[C,"%"]}):null,(null===(y=e.stats)||void 0===y?void 0:y.total_listings)&&e.standard!==we.iv.ERC1155?(0,r.jsxs)(Ft,{label:"Listed",shouldHide:$??!1,children:[T,"%"]}):null]})})},Rt=({isMobile:e})=>(0,r.jsxs)(m.sg,{position:"relative",width:"full",children:[(0,r.jsx)(u.n,{className:wt}),(0,r.jsx)(u.n,{className:ft}),(0,r.jsxs)(u.n,{className:vt,children:[(0,r.jsx)(u.n,{className:"jinxmni _2kdvfw3 _2kdvfw1 rgw6ez80x rgw6ez7z9 rgw6ez4g3 rgw6ez19x"}),!e&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(zt,{}),(0,r.jsx)(m.X2,{gap:"60",marginTop:"20",children:$t(!1)})]})]}),e&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(zt,{}),(0,r.jsx)(m.X2,{gap:"20",marginTop:"20",children:$t(!0)})]})]}),Mt=({stats:e,isMobile:t})=>{const[n,i]=(0,M.useReducer)((e=>!e),!1),o=(0,xe.I)((e=>e.isCollectionStatsLoading));return(0,r.jsxs)(u.n,{display:"flex",marginTop:t&&!e.bannerImageUrl?n?"52":"20":"0",justifyContent:"center",position:"relative",flexDirection:"column",width:"full",children:[o&&(0,r.jsx)(u.n,{as:"div",borderRadius:"round",position:"absolute",className:wt}),(0,r.jsx)(u.n,{as:o?"div":"img",background:"white",borderRadius:"round",position:"absolute",className:o?ft:"jinxmn3 rgw6ez343 rgw6ez7zp rgw6ez89l rgw6ez553 rgw6ez81x rgw6ez48l",src:e.imageUrl}),(0,r.jsxs)(u.n,{className:vt,children:[(0,r.jsx)(It,{collectionStats:e,name:e.name??"",isVerified:e.isVerified??!1,isMobile:t,collectionSocialsIsOpen:n,toggleCollectionSocials:i}),(e.description||o)&&!t&&(0,r.jsx)(Pt,{description:e.description??""}),(0,r.jsx)(Et,{display:{sm:"none",md:"flex"},overflow:"hidden",stats:e,marginTop:"20"})]}),(e.description||o)&&t&&(0,r.jsx)(Pt,{description:e.description??""}),(0,r.jsx)("div",{id:"nft-anchor-mobile"}),(0,r.jsx)(Et,{isMobile:!0,display:{sm:"flex",md:"none"},stats:e,marginTop:"20",marginBottom:"12"})]})};var Bt=n(48714),At=n(87175),Lt=n(3638),Ht="rgw6ezd3 rgw6ezbf rgw6eze9 rgw6ez6w3 rgw6ez2u9 rgw6ez80x rgw6ez7zp rgw6ez899";const Ot=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\TraitsHeader__ChildreMobileWrapper",componentId:"sc-646f1a63-0"})`
  padding: ${({isMobile:e})=>e?"0px 16px 0px 12px":"0px"};
`,Dt=e=>{const{children:t,index:n,title:i}=e,[o,s]=(0,M.useState)(!1),a=J((e=>e.traitsOpen)),l=J((e=>e.setTraitsOpen)),c=(0,p.dD)(),d=void 0!==n&&a[n-1],g=n!==A.TRAIT_START_INDEX;return(0,M.useEffect)((()=>{void 0!==n&&l(n,o)}),[o,n,l]),(0,r.jsxs)(r.Fragment,{children:[g&&(0,r.jsx)(u.n,{className:(0,P.default)(x.Nf,!o&&V,W),opacity:!d&&o&&0!==n?"1":"0",marginTop:d?"0":"8"}),(0,r.jsxs)(u.n,{as:"details",className:(0,P.default)(x.Nf,!o&&V),open:o,children:[(0,r.jsxs)(u.n,{as:"summary",className:`${Z} ${V}`,onClick:e=>{e.preventDefault(),s(!o)},children:[i,(0,r.jsxs)(u.n,{display:"flex",alignItems:"center",children:[(0,r.jsx)(u.n,{color:"neutral2",display:"inline-block",marginRight:"12",children:e.numTraits}),(0,r.jsx)(u.n,{className:Y,style:{transform:`rotate(${o?0:180}deg)`},children:(0,r.jsx)(O.g8,{className:X})})]})]}),(0,r.jsx)(Ot,{isMobile:c,children:t})]})]})},Yt=(0,k.default)(ze.Z).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\PriceRange__StyledSlider",componentId:"sc-7655689-0"})`
  cursor: pointer;
`,Xt=()=>{const[e,t]=(0,M.useState)(""),n=(0,K.PY)((e=>e.setMinPrice)),s=(0,K.PY)((e=>e.setMaxPrice)),a=(0,K.PY)((e=>e.minPrice)),l=(0,K.PY)((e=>e.maxPrice)),c=fe((e=>e.priceRangeLow)),d=fe((e=>e.priceRangeHigh)),p=fe((e=>e.setPriceRangeLow)),g=fe((e=>e.setPriceRangeHigh)),h=fe((e=>e.prevMinMax)),f=fe((e=>e.setPrevMinMax)),w=(0,k.useTheme)(),v=(0,_e.TH)();(0,M.useEffect)((()=>{n(""),s(""),p(""),g("")}),[v.pathname,n,s,p,g]);const b=e=>{t(e.currentTarget.placeholder),e.currentTarget.placeholder=""},y=n=>{n.currentTarget.placeholder=e,t(""),(a||l)&&(0,o._P)(i.Yz.NFT_FILTER_SELECTED,{filter_type:i.fm.PRICE_RANGE})};return(0,r.jsxs)(Dt,{title:"Price range",index:A.PRICE_RANGE_INDEX,children:[(0,r.jsxs)(m.X2,{marginTop:"12",color:"neutral1",justifyContent:"space-between",children:[(0,r.jsx)(m.X2,{position:"relative",children:(0,r.jsx)(At.A,{style:{width:"126px"},className:Ht,placeholder:c,onChange:e=>{const[,t]=h;if(e.currentTarget.value){const n=parseInt(e.currentTarget.value)-parseInt(c),r=Math.floor(n/(parseInt(d)-parseInt(c))*100);parseInt(e.currentTarget.value)>=parseInt(l)?f([t,t]):f([r,t])}else f([0,t]);n(e.currentTarget.value.toString()),be()},onFocus:b,value:a,onBlur:y})}),(0,r.jsx)(u.n,{className:x.d1,children:"to"}),(0,r.jsx)(m.X2,{position:"relative",children:(0,r.jsx)(At.A,{style:{width:"126px"},className:Ht,placeholder:d,value:l,onChange:e=>{const[t]=h;if(e.currentTarget.value){const n=parseInt(d)-parseInt(e.currentTarget.value),r=Math.floor(100-n/(parseInt(d)-parseInt(c))*100);parseInt(e.currentTarget.value)<=parseInt(a)?f([t,t]):f([t,r])}else f([t,100]);s(e.currentTarget.value),be()},onFocus:b,onBlur:y})})]}),(0,r.jsx)(m.X2,{marginTop:"24",marginBottom:"12",paddingLeft:"8",paddingRight:"8",children:(0,r.jsx)(Yt,{defaultValue:[0,100],min:0,max:100,range:!0,step:1e-4,value:h,trackStyle:{top:"3px",height:"8px",background:`${w.accent1}`},handleStyle:{top:"3px",width:"12px",height:"20px",opacity:"1",backgroundColor:"white",borderRadius:"4px",border:"none",boxShadow:Lt.I.deprecated_shallowShadow.slice(0,-1)},railStyle:{top:"3px",height:"8px",backgroundColor:`${w.accent2}`},onChange:e=>{if("number"===typeof e)return;const[t,r]=e,i=parseFloat(d.replace(/,/g,"")),o=parseFloat(c.replace(/,/g,"")),a=i-o,l=i-(100-r)/100*a;n((t/100*a+o).toFixed(2).toString()),s(l.toFixed(2).toString()),0===t&&n(""),100===r&&s(""),f(e)}})})]})};var Wt=n(86473),Ut=n(40848),Zt=n(1285),Vt=n(43328);const Kt=({trait:e,addTrait:t,removeTrait:n,isTraitSelected:s,style:a})=>{const[l,c]=(0,M.useState)(!1),[d,p]=(0,M.useState)(!1),g=()=>p(!d),h=(0,K.PY)((e=>e.toggleShowFullTraitName)),{shouldShow:f,trait_value:w,trait_type:v}=(0,K.PY)((e=>e.showFullTraitName));(0,M.useEffect)((()=>{c(s)}),[s]);const b=r=>{r.preventDefault(),be(),l?(n(e),c(!1)):(t(e),c(!0)),(0,o._P)(i.Yz.NFT_FILTER_SELECTED,{filter_type:i.fm.TRAIT})},y=f&&v===e.trait_type&&w===e.trait_value;return(0,r.jsxs)(m.X2,{maxWidth:"full",overflowX:"hidden",overflowY:"hidden",fontWeight:"book",className:`${x.Nf} _10b1b4v5`,justifyContent:"space-between",cursor:"pointer",paddingLeft:"12",paddingRight:"16",borderRadius:"12",style:{paddingBottom:"22px",paddingTop:"22px",...a},maxHeight:"44",onMouseEnter:g,onMouseLeave:g,onClick:b,children:[(0,r.jsx)(u.n,{as:"span",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",style:{minHeight:15},maxWidth:y?"full":"160",onMouseOver:t=>(t=>{t.currentTarget.offsetWidth<t.currentTarget.scrollWidth&&h({shouldShow:!0,trait_value:e.trait_value,trait_type:e.trait_type})})(t),onMouseLeave:()=>h({shouldShow:!1,trait_type:"",trait_value:""}),children:"Number of traits"===e.trait_type?`${e.trait_value} trait${(0,Ut._)(Number(e.trait_value))}`:e.trait_value}),(0,r.jsx)(ee.X,{checked:l,hovered:d,onChange:b,children:(0,r.jsx)(u.n,{as:"span",color:"neutral2",minWidth:"8",paddingTop:"2",paddingRight:"12",position:"relative",children:!y&&e.trait_count})})]},e.trait_value)},Gt=({traits:e,type:t,index:n})=>{const i=(0,K.PY)((e=>e.addTrait)),o=(0,K.PY)((e=>e.removeTrait)),s=(0,K.PY)((e=>e.traits)),[a,l]=(0,M.useState)(""),c=(0,$.Z)(a,300),d=(0,M.useMemo)((()=>e.filter((e=>{var t;return null===(t=e.trait_value)||void 0===t?void 0:t.toString().toLowerCase().includes(c.toLowerCase())}))),[c,e]),p=(0,M.useCallback)((function({data:e,index:t,style:n}){const a=e[t],l=s.find((({trait_type:e,trait_value:t})=>e===a.trait_type&&String(t)===String(a.trait_value)));return(0,r.jsx)(Kt,{style:n,isTraitSelected:!!l,trait:a,addTrait:i,removeTrait:o})}),[s,i,o]),g=(0,M.useCallback)(((e,t)=>{const n=t[e];return`${n.trait_type}_${n.trait_value}_${e}`}),[]);return e.length?(0,r.jsxs)(Dt,{index:n,numTraits:e.length,title:t,children:[(0,r.jsx)(At.I,{value:a,onChange:e=>l(e.currentTarget.value),placeholder:"Search",marginTop:"8",marginBottom:"8",autoComplete:"off",position:"static",width:"full"}),(0,r.jsx)(m.sg,{className:U,style:{height:`${Math.min(44*d.length,302)}px`},children:(0,r.jsx)(Zt.ZP,{disableWidth:!0,children:({height:e})=>(0,r.jsx)(Vt.t7,{height:e,width:"100%",itemData:d,itemCount:d.length,itemSize:44,itemKey:g,children:({index:e,style:t,data:n})=>(0,r.jsx)(p,{style:t,data:n,index:e},g(e,n))})})})]}):null},qt=({traitsByGroup:e})=>{const{buyNow:t,setBuyNow:n}=(0,f.PY)((e=>({buyNow:e.buyNow,setBuyNow:e.setBuyNow}))),i=(0,f.PY)((e=>e.setSortBy)),o=(0,f.PY)((e=>e.hasRarity)),[s,a]=(0,M.useReducer)((e=>!e),!1),l=()=>{n(!t)},c=(0,M.useMemo)((()=>dt(i,o??!1)),[o,i]);return(0,r.jsxs)(u.n,{className:"_10b1b4v1 rgw6ez8bx rgw6ez1ef rgw6ez2o3 rgw6ezlf rgw6ezng",children:[(0,r.jsx)(m.X2,{width:"full",justifyContent:"space-between"}),(0,r.jsxs)(m.sg,{marginTop:"8",children:[(0,r.jsxs)(m.X2,{justifyContent:"space-between",className:`${Z} ${V}`,gap:"2",borderRadius:"12",paddingTop:"12",paddingBottom:"12",paddingLeft:"12",onClick:e=>{e.preventDefault(),l()},onMouseEnter:a,onMouseLeave:a,children:[(0,r.jsx)(u.n,{"data-testid":"nft-collection-filter-buy-now",className:x.v4,children:"Buy now"}),(0,r.jsx)(ee.X,{hovered:s,checked:t,onClick:l,children:(0,r.jsx)("span",{})})]}),Wt.tq&&(0,r.jsx)(de,{sortDropDownOptions:c}),(0,r.jsx)(ae,{}),(0,r.jsx)(Xt,{}),Object.entries(e).length>0&&(0,r.jsx)(u.n,{as:"span",color:"neutral2",paddingLeft:"8",marginTop:"12",marginBottom:"12",className:"rgw6ez80d rgw6ez6df rgw6ez8ap"}),(0,r.jsx)(m.sg,{children:Object.entries(e).map((([e,t],n)=>(0,r.jsx)(Gt,{type:e,traits:t,index:n+A.TRAIT_START_INDEX},e)))})]})]})};var Jt=n(40976);const Qt=(0,k.default)(s.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\CollectionPageSkeleton__CollectionDescriptionSection",componentId:"sc-e3ffcf95-0"})`
  ${Jt.bc}
`,en=(0,k.default)(s.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\CollectionPageSkeleton__StyledColumn",componentId:"sc-e3ffcf95-1"})`
  width: ${({isBagExpanded:e})=>e?`calc(100% - ${h.ZI+16}px)`:"100%"};
  align-self: start;

  @media only screen and (min-width: ${({theme:e})=>`${e.breakpoint.xxxl}px`}) {
    width: ${({isBagExpanded:e})=>e?`calc(100% - ${h.zD+16}px)`:"100%"};
  }
`,tn=(0,k.default)(l.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\CollectionPageSkeleton__StyledRow",componentId:"sc-e3ffcf95-2"})`
  gap: 24px;
  margin-bottom: 28px;
`,nn=()=>{const e=(0,f.cP)((e=>e.bagExpanded)),t=(0,p.dD)();return(0,r.jsxs)(en,{isBagExpanded:e,children:[(0,r.jsx)(bn,{children:(0,r.jsx)(mn,{})}),(0,r.jsxs)(Qt,{children:[(0,r.jsx)(Rt,{isMobile:t}),(0,r.jsx)(tn,{children:I})]}),(0,r.jsx)(ct,{})]})};var rn=n(32207),on=n(57221);const sn=(0,k.default)(s.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\UnavailableCollectionPage__Container",componentId:"sc-e20f133d-0"})`
  height: 75vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 48px;
  gap: 8px;
`,an=(0,k.default)(Q.dL).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\collection\\UnavailableCollectionPage__StyledExternalLink",componentId:"sc-e20f133d-1"})`
  color: ${({theme:e})=>e.neutral2};
`;function ln({isBlocked:e}){const t=(0,k.useTheme)();return e?(0,r.jsxs)(sn,{children:[(0,r.jsx)(on.Z,{width:"48px",height:"48px",stroke:t.background,strokeWidth:"1px",fill:t.critical,"data-testid":"alert-icon"}),(0,r.jsx)(Q.Tv.HeadlineMedium,{children:(0,r.jsx)(g.cC,{children:"This collection is blocked"})}),(0,r.jsx)(Q.m_,{to:"/nfts",children:(0,r.jsx)(g.cC,{children:"Return to NFT Explore"})}),(0,r.jsx)(an,{href:rn.c.UNSUPPORTED_TOKEN_AND_NFT_POLICY,children:(0,r.jsx)(g.cC,{children:"Learn why"})})]}):(0,r.jsxs)(sn,{children:[(0,r.jsx)(Q.Tv.HeadlineMedium,{children:(0,r.jsx)(g.cC,{children:"No collection assets exist at this address"})}),(0,r.jsx)(Q.m_,{to:"/nfts",children:(0,r.jsx)(g.cC,{children:"Return to NFT Explore"})})]})}var cn=n(37018),dn=n(437),pn=n(76907),gn=n(55874),hn=n(62587);const un={},mn=(0,k.default)(c.X).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\pages\\collection\\index__CollectionBannerLoading",componentId:"sc-7a210954-0"})`
  width: 100%;
  height: 100%;
  border-radius: 0px;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    border-radius: 16px;
  }
`,xn=(0,k.default)(s.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\pages\\collection\\index__CollectionContainer",componentId:"sc-7a210954-1"})`
  width: 100%;
  align-self: start;
  will-change: width;
`,fn=(0,pn.q)(xn),wn=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\pages\\collection\\index__CollectionAssetsContainer",componentId:"sc-7a210954-2"})`
  position: ${({hideUnderneath:e})=>e?"fixed":"static"};
`,vn=(0,pn.q)(wn),bn=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\pages\\collection\\index__BannerWrapper",componentId:"sc-7a210954-3"})`
  height: 100px;
  max-width: 100%;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    margin-top: 16px;
    margin-left: 20px;
    margin-right: 20px;
    height: 288px;
  }
`,yn=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\pages\\collection\\index__Banner",componentId:"sc-7a210954-4"})`
  height: 100%;
  width: 100%;
  background-image: url(${({src:e})=>e});
  background-position-y: center;
  background-size: cover;

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    border-radius: 16px;
  }
`,jn=(0,k.default)(s.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\pages\\collection\\index__CollectionDescriptionSection",componentId:"sc-7a210954-5"})`
  ${Jt.bc}
`,kn=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\pages\\collection\\index__FiltersContainer",componentId:"sc-7a210954-6"})`
  position: ${({isMobile:e})=>e?"fixed":"sticky"};
  top: 0px;
  left: 0px;
  width: ${({isMobile:e})=>e?"100%":"0px"};
  height: ${({isMobile:e,isFiltersExpanded:t})=>e&&t?"100%":void 0};
  background: ${({theme:e,isMobile:t})=>t?e.surface2:void 0};
  z-index: ${hn.k.modalBackdrop-3};
  overflow-y: ${({isMobile:e})=>e?"scroll":void 0};

  @media screen and (min-width: ${({theme:e})=>e.breakpoint.sm}px) {
    top: 72px;
  }
`,Cn=(0,k.default)(l.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\pages\\collection\\index__MobileFilterHeader",componentId:"sc-7a210954-7"})`
  padding: 20px 16px;
  justify-content: space-between;
`,_n=(0,k.default)(l.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\pages\\collection\\index__CollectionDisplaySection",componentId:"sc-7a210954-8"})`
  align-items: flex-start;
  position: relative;
`,Tn=k.default.button.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\pages\\collection\\index__IconWrapper",componentId:"sc-7a210954-9"})`
  background-color: transparent;
  border-radius: 8px;
  border: none;
  color: ${({theme:e})=>e.neutral1};
  cursor: pointer;
  display: flex;
  padding: 2px 0px;
  opacity: 1;

  ${a.cR}
`,In=()=>{var e,t,n,s,a,l;const{contractAddress:c}=(0,_e.UO)(),u=(0,p.dD)(),[m,x]=(0,f.wx)(),{pathname:w}=(0,_e.TH)(),b=(0,_e.s0)(),k=w.includes("/activity"),C=(0,f.PY)((e=>e.setMarketCount)),_=(0,f.cP)((e=>e.bagExpanded)),T=(0,f.cP)((e=>e.setBagExpanded)),I=(0,Ie.x)(),S=(0,p.eI)(),{data:z,loading:P}=(0,d.K)(c),{CollectionContainerWidthChange:F}=(0,pn.q_)({CollectionContainerWidthChange:_&&!u?(S.xxxl?h.zD:h.ZI)+16:0,config:{duration:gn.Kd.medium,easing:pn.Z5.easeOutSine}}),{gridWidthOffset:$}=(0,pn.q_)({gridWidthOffset:m&&!u?332:0,config:{duration:gn.Kd.medium,easing:pn.Z5.easeOutSine}}),E=(0,M.useMemo)((()=>({title:z.name+" on Uniswap",image:window.location.origin+"/api/image/nfts/collection/"+c,url:window.location.href,description:z.description})),[z.description,z.name,c]),R=(0,cn.X)(E);if((0,M.useEffect)((()=>{var e,t;const n={};null===(t=z)||void 0===t||null===(e=t.marketplaceCount)||void 0===e||e.forEach((({marketplace:e,count:t})=>{n[e]=t})),C(n)}),[null===(e=z)||void 0===e?void 0:e.marketplaceCount,C]),(0,M.useEffect)((()=>{_&&m&&!S.xl&&x(!1)}),[_,m,S,x]),(0,M.useEffect)((()=>{T({bagExpanded:!1,manualClose:!1})}),[]),P)return(0,r.jsx)(nn,{});if(!z.name)return(0,r.jsx)(ln,{});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(dn.Helmet,{children:[(0,r.jsx)("title",{children:(0,g.t)("{{name}} | Explore and buy on Uniswap",{name:z.name})}),R.map(((e,t)=>(0,r.jsx)("meta",{...e},t)))]}),(0,r.jsx)(o.fM,{page:i.yJ.NFT_COLLECTION_PAGE,properties:{collection_address:c,chain_id:I,is_activity_view:k},shouldLogImpression:!0,children:(0,r.jsx)(fn,{style:{width:F.to((e=>`calc(100% - ${e}px)`))},children:c&&!v._P.includes(c)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(bn,{children:(0,r.jsx)(yn,{src:(null===(t=z)||void 0===t?void 0:t.bannerImageUrl)?`${z.bannerImageUrl}?w=${window.innerWidth}`:""})}),(0,r.jsxs)(jn,{children:[z&&(0,r.jsx)(Mt,{stats:z,isMobile:u}),(0,r.jsx)("div",{id:"nft-anchor"}),(0,r.jsx)(N,{showActivity:k,toggleActivity:()=>{m&&x(!1),b(k?`/nfts/collection/${c}`:`/nfts/collection/${c}/activity`)}})]}),(0,r.jsxs)(_n,{children:[(0,r.jsx)(kn,{isMobile:u,isFiltersExpanded:m,children:m&&(0,r.jsxs)(r.Fragment,{children:[u&&(0,r.jsxs)(Cn,{children:[(0,r.jsx)(Q.Tv.HeadlineSmall,{children:"Filter"}),(0,r.jsx)(Tn,{onClick:()=>x(!1),children:(0,r.jsx)(O.BW,{})})]}),(0,r.jsx)(qt,{traitsByGroup:(null===(n=z)||void 0===n?void 0:n.traits)??un})]})}),(0,r.jsx)(vn,{hideUnderneath:u&&(m||_),style:{transform:$.to((e=>`translate(${e}px)`)),width:$.to((e=>`calc(100% - ${e}px)`))},children:k?c&&(0,r.jsx)(j.cS,{contractAddress:c,rarityVerified:(null===(s=z)||void 0===s?void 0:s.rarityVerified)??!1,collectionName:(null===(a=z)||void 0===a?void 0:a.name)??"",chainId:I}):c&&z&&(0,r.jsx)(M.Suspense,{fallback:(0,r.jsx)(ct,{}),children:(0,r.jsx)(pt,{collectionStats:z,contractAddress:c,rarityVerified:null===(l=z)||void 0===l?void 0:l.rarityVerified})})})]})]}):(0,r.jsx)(ln,{isBlocked:!0})})}),(0,r.jsx)(y,{})]})}}}]);
//# sourceMappingURL=7548.6601f1a5.chunk.js.map