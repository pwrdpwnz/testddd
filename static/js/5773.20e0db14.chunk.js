"use strict";(self.webpackChunk_uniswap_interface=self.webpackChunk_uniswap_interface||[]).push([[5773],{47411:(e,t,n)=>{n.r(t),n.d(t,{default:()=>qi});var o=n(92936),i=n(5985),r=n(26729),s=n(12722),a=n(25320),l=n(69780),c=n(27179),d=n(6823),p=n(3464),u=n(44591),f=n(94284),h=n(32682),m=n(24509),x=n(89882),g=n(60040),w=n(70518),b=n(45779),v=n(63194),y=n(57221),k=n(14411),j=n(66869),C=n(54972),_=n(62587),P=n(66136);const S=(0,k.default)(u.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\BelowFloorWarningModal__ModalWrapper",componentId:"sc-65f8923b-0"})`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  z-index: ${_.k.modal};
  background: ${({theme:e})=>e.surface1};
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (max-width: ${j.j$.sm}px) {
    width: 100%;
  }
`,N=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\BelowFloorWarningModal__CloseIconWrapper",componentId:"sc-65f8923b-1"})`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`,I=(0,k.default)(v.Z).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\BelowFloorWarningModal__CloseIcon",componentId:"sc-65f8923b-2"})`
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`,F=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\BelowFloorWarningModal__HazardIconWrap",componentId:"sc-65f8923b-3"})`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 32px 120px;
`,T=(0,k.default)(l.DF).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\BelowFloorWarningModal__ContinueButton",componentId:"sc-65f8923b-4"})`
  font-weight: 535;
  font-size: 20px;
  line-height: 24px;
  margin-top: 12px;
`,$=k.default.span.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\BelowFloorWarningModal__EditListings",componentId:"sc-65f8923b-5"})`
  font-weight: 535;
  font-size: 16px;
  line-height: 20px;
  color: ${({theme:e})=>e.accent1};
  text-align: center;
  cursor: pointer;
  padding: 12px 16px;

  &:hover {
    opacity: 0.6;
  }
`,R=({listingsBelowFloor:e,closeModal:t,startListing:n})=>{const i=(0,k.useTheme)(),{formatDelta:r}=(0,P.Gb)();return(0,o.jsxs)(g.h,{children:[(0,o.jsxs)(S,{children:[(0,o.jsxs)(N,{children:[(0,o.jsx)(I,{width:24,height:24,onClick:t})," "]}),(0,o.jsx)(F,{children:(0,o.jsx)(y.Z,{height:90,width:90,color:i.critical})}),(0,o.jsx)(C.Tv.HeadlineSmall,{lineHeight:"28px",textAlign:"center",children:(0,o.jsx)(d.cC,{children:"Low listing price"})}),(0,o.jsxs)(C.Tv.BodyPrimary,{textAlign:"center",children:[(0,o.jsx)(d.CN,{value:1!==e.length?2:1,one:(0,d.t)("One NFT is listed {{delta}} ",{delta:r(100*(1-(e[0][1].price??0)/(e[0][0].floorPrice??0)))}),other:(0,d.t)("{{count}} NFTs are listed significantly ",{count:e.length})}),"\xa0",(0,o.jsx)(d.cC,{children:"below the collection\u2019s floor price. Are you sure you want to continue?"})]}),(0,o.jsx)(T,{onClick:e=>{e.preventDefault(),e.stopPropagation(),n(),t()},children:(0,o.jsx)(d.cC,{children:"Continue"})}),(0,o.jsx)($,{onClick:t,children:(0,o.jsx)(d.cC,{children:"Edit listings"})})]}),(0,o.jsx)(w.a,{onClick:t})]})};var M=n(79132),E=n(97341),L=n(40300),A=n(63490),O=n.n(A);const D=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\shared__RemoveIconWrap",componentId:"sc-e1e0e3a1-0"})`
  position: absolute;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  width: 32px;
  visibility: ${({hovered:e})=>e?"visible":"hidden"};
`,B=(0,k.default)(f.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\shared__TitleRow",componentId:"sc-e1e0e3a1-1"})`
  justify-content: space-between;
  margin-bottom: 8px;
`;var Z,W;!function(e){e[e.SAME_PRICE=0]="SAME_PRICE",e[e.FLOOR_PRICE=1]="FLOOR_PRICE",e[e.LAST_PRICE=2]="LAST_PRICE",e[e.CUSTOM=3]="CUSTOM"}(Z||(Z={})),function(e){e[e.BELOW_FLOOR=0]="BELOW_FLOOR",e[e.ALREADY_LISTED=1]="ALREADY_LISTED",e[e.NONE=2]="NONE"}(W||(W={}));const G="0x59728544B08AB483533076417FbBB2fD0B17CE3a",H="0xfed24ec7e22f573c2e08aef55aa6797ca2b3a051",z="0x0000007b02230091a7ed01230072f7006a004d60a8d4e71d599b8104250f0000",X="0x1e0049783f008a0085193e00003d00cd54003c71",V="0x00000000000000ADc04C56Bf30aC9d3c0aAF14dC",Y={[z]:X},q=1e4;function U(e,t,n,o,i,r,s){try{var a=e[r](s),l=a.value}catch(c){return void n(c)}a.done?t(l):Promise.resolve(l).then(o,i)}function J(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var r=e.apply(t,n);function s(e){U(r,o,i,s,a,"next",e)}function a(e){U(r,o,i,s,a,"throw",e)}s(void 0)}))}}const K="0xf849de01b080adc3a814fabe1e2087475cf2e354",Q="0x024ac22acdb367a3ae52a3d94ac6649fdc1f0779",ee=function(){var e=J((function*(e){const t=JSON.stringify(e),n=new AbortController,o=new Request("https://temp.gateway.uniswap.org/v1/nft/postX2Y2SellOrderWithApiKey",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:t,signal:n.signal}),i=setTimeout((()=>n.abort()),6e4);try{const e=yield fetch(o);return 200===(yield e.json()).code}catch(r){return!1}finally{clearTimeout(i)}}));return function(t){return e.apply(this,arguments)}}(),te=function(){var e=J((function*(e,t){var n,o,i,r;const s=`https://temp.gateway.uniswap.org/v1/nft/getX2Y2OrderId?collectionAddress=${e}&tokenId=${t}`,a=yield fetch(s,{method:"GET",headers:{"Content-Type":"application/json; charset=utf-8"}});return null===(r=yield a.json())||void 0===r||null===(i=r.data)||void 0===i||null===(o=i.data)||void 0===o||null===(n=o[0])||void 0===n?void 0:n.id}));return function(t,n){return e.apply(this,arguments)}}();var ne=n(47263),oe=n(11604),ie=n(7937),re=n(66284),se=n(5540),ae=n(56079),le=n(13820);function ce(e,t,n,o,i,r,s){try{var a=e[r](s),l=a.value}catch(c){return void n(c)}a.done?t(l):Promise.resolve(l).then(o,i)}const de=function(){var e,t=(e=function*(e){const t=yield fetch("https://temp.gateway.uniswap.org/v1/nft/createLooksRareOrder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});try{return(yield t.json()).success}catch(n){return!1}},function(){var t=this,n=arguments;return new Promise((function(o,i){var r=e.apply(t,n);function s(e){ce(r,o,i,s,a,"next",e)}function a(e){ce(r,o,i,s,a,"throw",e)}s(void 0)}))});return function(e){return t.apply(this,arguments)}}();function pe(e,t,n,o,i,r,s){try{var a=e[r](s),l=a.value}catch(c){return void n(c)}a.done?t(l):Promise.resolve(l).then(o,i)}function ue(){var e;return e=function*(e){const t=e?JSON.stringify(e):void 0,n=new AbortController,o=new Request("https://temp.gateway.uniswap.org/v1/nft/postOpenSeaSellOrderWithApiKey",{method:"POST",headers:{"Content-Type":"application/json; charset=utf-8"},body:t,signal:n.signal}),i=setTimeout((()=>n.abort()),O()("60s"));try{const e=yield fetch(o);return 200===(yield e.json()).code}catch(r){return!1}finally{clearTimeout(i)}},ue=function(){var t=this,n=arguments;return new Promise((function(o,i){var r=e.apply(t,n);function s(e){pe(r,o,i,s,a,"next",e)}function a(e){pe(r,o,i,s,a,"throw",e)}s(void 0)}))},ue.apply(this,arguments)}var fe=n(23399),he=n(98282),me=n(99582),xe=n(31042),ge=n(46854),we=n(73116),be=n(6412),ve=n(30012);function ye(e,t,n,o,i,r,s){try{var a=e[r](s),l=a.value}catch(c){return void n(c)}a.done?t(l):Promise.resolve(l).then(o,i)}const ke="tuple(uint256 price, bytes data)",je=["uint256","address","uint256","uint256","uint256","uint256","address","bytes","uint256",`${ke}[]`],Ce=`tuple(uint256 salt, address user, uint256 network, uint256 intent, uint256 delegateType, uint256 deadline, address currency, bytes dataMask, ${ke}[] items, bytes32 r, bytes32 s, uint8 v, uint8 signVersion)`,_e=function(){var e,t=(e=function*(e,t){const n=xe.$.encode(je,[t.salt,t.user,t.network,t.intent,t.delegateType,t.deadline,t.currency,t.dataMask,t.items.length,t.items]),o=(0,be.keccak256)(n),i=yield e.send("personal_sign",[o,t.user]);t.r=`0x${i.slice(2,66)}`,t.s=`0x${i.slice(66,130)}`,t.v=parseInt(i.slice(130,132),16),Pe(t)},function(){var t=this,n=arguments;return new Promise((function(o,i){var r=e.apply(t,n);function s(e){ye(r,o,i,s,a,"next",e)}function a(e){ye(r,o,i,s,a,"throw",e)}s(void 0)}))});return function(e,n){return t.apply(this,arguments)}}(),Pe=e=>{e.v<27&&(e.v=e.v+27)},Se=e=>xe.$.encode([Ce],[e]),Ne=(e,t,n,o=me.hgB.Erc721)=>({salt:(()=>{const e=oe.O$.from((0,ve.O)(16)).toHexString();return(0,ge.hexZeroPad)(e,64)})(),user:e,network:1,intent:1,delegateType:o===me.hgB.Erc721?1:2,deadline:t,currency:we.d,dataMask:"0x",items:n.map((e=>{return{price:e.price,data:(t=e.tokens,xe.$.encode(["tuple(address token, uint256 tokenId, uint256 amount)[]"],[t]))};var t})),r:"",s:"",v:0,signVersion:1});function Ie(e,t,n,o,i,r,s){try{var a=e[r](s),l=a.value}catch(c){return void n(c)}a.done?t(l):Promise.resolve(l).then(o,i)}function Fe(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var r=e.apply(t,n);function s(e){Ie(r,o,i,s,a,"next",e)}function a(e){Ie(r,o,i,s,a,"throw",e)}s(void 0)}))}}const Te=[{name:"X2Y2",fee:.5},{name:"OpenSea",fee:2.5}],$e=(e,t)=>({amount:e,recipient:t}),Re=(e,t,n)=>{var o,i,r,s;const a=(null===(o=e)||void 0===o?void 0:o.basisPoints)??0,l=100*((null===(i=Te.find((e=>"OpenSea"===e.name)))||void 0===i?void 0:i.fee)??0),c=q-a-l,d=t.mul(oe.O$.from(a)).div(oe.O$.from(q)).toString(),p=t.mul(oe.O$.from(c)).div(oe.O$.from(q)).toString(),u=t.mul(oe.O$.from(l)).div(oe.O$.from(q)).toString();return{sellerFee:$e(p,n),creatorFee:a>0?$e(d,(null===(s=e)||void 0===s||null===(r=s.asset_contract)||void 0===r?void 0:r.payout_address)??""):void 0,openSeaFee:l?$e(u,"0x0000a26b00c1F0DF003000390027140000fAa719"):void 0}};function Me(){return(Me=Fe((function*(e,t,n,o,i=me.hgB.Erc721){const r=new ie.Contract(t,i===me.hgB.Erc721?he:fe,n),s=yield n.getAddress();try{if(yield r.isApprovedForAll(s,e))return void o(ne.Sb.APPROVED);o(ne.Sb.SIGNING);const t=yield r.setApprovalForAll(e,!0);o(ne.Sb.PENDING);1===(yield t.wait()).status?o(ne.Sb.APPROVED):o(ne.Sb.FAILED)}catch(a){4001===a.code?o(ne.Sb.REJECTED):o(ne.Sb.FAILED)}}))).apply(this,arguments)}function Ee(){return Ee=Fe((function*(e,t,n,o,i=0,r){var s,a;const l=new se.A(o,{conduitKeyToConduit:Y,overrides:{defaultConduitKey:z},seaportVersion:"1.5"}),c=yield n.getAddress(),d=null===(a=t.newListings)||void 0===a||null===(s=a.find((t=>t.marketplace.name===e.name)))||void 0===s?void 0:s.price;if(!d||!t.expirationTime||!t.asset_contract.address||!t.tokenId)return!1;switch(e.name){case"OpenSea":try{const e=(0,re.parseEther)(`${d}`),{sellerFee:n,creatorFee:o,openSeaFee:i}=Re(t,e,c),s=[n,o,i].filter((e=>void 0!==e)),{executeAllActions:a}=yield l.createOrder({offer:[{itemType:t.asset_contract.tokenType===me.hgB.Erc721?ae.ItemType.ERC721:ae.ItemType.ERC1155,token:t.asset_contract.address,identifier:t.tokenId,amount:"1"}],consideration:s,endTime:t.expirationTime.toString(),zone:le.r_,allowPartialFills:!0},c),p={...yield a(),protocol_address:V};r(ne.Sb.PENDING);const u=yield function(e){return ue.apply(this,arguments)}(p);return r(u?ne.Sb.APPROVED:ne.Sb.FAILED),u}catch(p){return 4001===p.code?r(ne.Sb.REJECTED):r(ne.Sb.FAILED),!1}case"LooksRare":{const e=L.Xg[L.HL.MAINNET],o=Math.round(Date.now()/1e3),s={isOrderAsk:!0,signer:c,collection:t.asset_contract.address,price:(0,re.parseEther)(d.toString()),tokenId:oe.O$.from(t.tokenId),amount:oe.O$.from(1),strategy:e.STRATEGY_STANDARD_SALE,currency:e.WETH,nonce:oe.O$.from(i),startTime:oe.O$.from(o),endTime:oe.O$.from(t.expirationTime),minPercentageToAsk:oe.O$.from(1e4).sub(oe.O$.from(150+(t.basisPoints?50:0))).toNumber(),params:[]};try{const a=yield(0,L.tI)(n,L.HL.MAINNET,s,G);r(ne.Sb.PENDING);const l={signature:a,tokenId:t.tokenId,collection:t.asset_contract.address,strategy:e.STRATEGY_STANDARD_SALE,currency:e.WETH,signer:c,isOrderAsk:!0,nonce:i,amount:1,price:(0,re.parseEther)(d.toString()).toString(),startTime:o,endTime:t.expirationTime,minPercentageToAsk:1e4-(150+(t.basisPoints?50:0)),params:[]},p=yield de(l);return r(p?ne.Sb.APPROVED:ne.Sb.FAILED),p}catch(p){return 4001===p.code?r(ne.Sb.REJECTED):r(ne.Sb.FAILED),!1}}case"X2Y2":{const e={price:(0,re.parseEther)(d.toString()),tokens:[{token:t.asset_contract.address,tokenId:oe.O$.from(t.tokenId),amount:1}]},n=Ne(c,t.expirationTime,[e],t.asset_contract.tokenType);try{const e=yield te(t.asset_contract.address,t.tokenId);yield _e(o,n);const i={order:Se(n),isBundle:!1,bundleName:"",bundleDesc:"",orderIds:e?[e]:[],changePrice:Boolean(e),isCollection:!1};r(ne.Sb.PENDING);const s=yield ee(i);return r(s?ne.Sb.APPROVED:ne.Sb.FAILED),s}catch(p){return 4001===p.code?r(ne.Sb.REJECTED):r(ne.Sb.FAILED),!1}}default:return!1}})),Ee.apply(this,arguments)}function Le(e,t,n,o,i,r,s){try{var a=e[r](s),l=a.value}catch(c){return void n(c)}a.done?t(l):Promise.resolve(l).then(o,i)}function Ae(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var r=e.apply(t,n);function s(e){Le(r,o,i,s,a,"next",e)}function a(e){Le(r,o,i,s,a,"throw",e)}s(void 0)}))}}function Oe(e,t,n){return De.apply(this,arguments)}function De(){return De=Ae((function*(e,t,n){const o=()=>Oe(e,t,n);n(e,ne.Sb.SIGNING,o);const{marketplace:i,collectionAddress:r,nftStandard:s}=e,a=L.Xg[L.HL.MAINNET],l="OpenSea"===i.name?X:"LooksRare"===i.name?e.nftStandard===me.hgB.Erc721?G:H:"X2Y2"===i.name?e.nftStandard===me.hgB.Erc721?K:Q:a.TRANSFER_MANAGER_ERC721;r&&(yield function(e,t,n,o){return Me.apply(this,arguments)}(l,r,t,(t=>n(e,t,o)),s))})),De.apply(this,arguments)}function Be(e,t,n,o,i,r){return Ze.apply(this,arguments)}function Ze(){return Ze=Ae((function*(e,t,n,o,i,r){const s=o(),a=()=>Be(e,t,n,o,i,r);r(e,ne.Sb.SIGNING,a);const{asset:l,marketplace:c}=e,d=yield function(e,t,n,o){return Ee.apply(this,arguments)}(c,l,t,n,s,(t=>r(e,t,a)));d&&"LooksRare"===e.marketplace.name&&i(s+1)})),Ze.apply(this,arguments)}const We=e=>{const t=e.reduce(((e,t)=>{var n;if(null===(n=t.newListings)||void 0===n?void 0:n.length){var o;const n=t.newListings.reduce(((e,t)=>(e.price??0)>(t.price??0)?e:t)),i=n.marketplace.fee+("LooksRare"===n.marketplace.name?50:(null===(o=t)||void 0===o?void 0:o.basisPoints)??0)/100;return e+(n.price??0)-(n.price??0)*(i/100)}return e}),0);return t?Math.round(1e4*t+Number.EPSILON)/1e4:0};function Ge(){const e=(0,M.Pc)((e=>e.sellAssets)),{setListings:t,setCollectionsRequiringApproval:n}=(0,M.zM)((({setListings:e,setCollectionsRequiringApproval:t})=>({setListings:e,setCollectionsRequiringApproval:t})));(0,b.useEffect)((()=>{const[o,i]=(e=>{const t=[],n=[];return e.forEach((e=>{var o;null===(o=e.marketplaces)||void 0===o||o.forEach((o=>{var i,r;const s={image:e.smallImageUrl,name:e.name||`#${e.tokenId}`,status:ne.Sb.DEFINED,asset:e,marketplace:o,price:null===(r=e.newListings)||void 0===r||null===(i=r.find((e=>e.marketplace.name===o.name)))||void 0===i?void 0:i.price};if(n.push(s),!t.some((t=>t.collectionAddress===e.asset_contract.address&&t.marketplace.name===o.name))){const n={image:e.asset_contract.image_url,name:e.asset_contract.name,status:ne.Sb.DEFINED,collectionAddress:e.asset_contract.address,isVerified:e.collectionIsVerified,marketplace:o,nftStandard:e.asset_contract.tokenType};t.push(n)}}))})),[t,n]})(e);t(i),n(o)}),[e,n,t])}const He=(e,t)=>.01*("LooksRare"===e.name?t.basisPoints?50:0:t.basisPoints??0),ze=(0,k.default)(l.Yd).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\ListingButton__StyledListingButton",componentId:"sc-5bb07f22-0"})`
  background: ${({showResolveIssues:e,theme:t})=>e?t.critical:t.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  font-weight: 535;
  font-size: 20px;
  line-height: 24px;
  padding: 16px;
  border-radius: 12px;
  width: min-content;
  border: none;
  cursor: ${({missingPrices:e})=>e?"auto":"pointer"};
  opacity: ${({showResolveIssues:e,missingPrices:t})=>!e&&t&&"0.3"};

  @media screen and (max-width: ${j.j$.sm}px) {
    font-size: 16px;
    line-height: 20px;
    padding: 10px 12px;
  }
`,Xe=({onClick:e})=>{const{sellAssets:t,showResolveIssues:n,toggleShowResolveIssues:i,issues:r,setIssues:s}=(0,M.Pc)((({sellAssets:e,showResolveIssues:t,toggleShowResolveIssues:n,issues:o,setIssues:i})=>({sellAssets:e,showResolveIssues:t,toggleShowResolveIssues:n,issues:o,setIssues:i}))),[a,l]=(0,b.useState)(!1),c=(0,E.dD)(),[p,u]=(0,b.useMemo)((()=>{const{missingExpiration:e,overMaxExpiration:o,listingsMissingPrice:r,listingsBelowFloor:a,listingsAboveSellOrderFloor:l}=(e=>{const t=e.some((e=>null!=e.expirationTime&&(isNaN(e.expirationTime)||1e3*e.expirationTime-Date.now()<O()("60s")))),n=e.some((e=>null!=e.expirationTime&&1e3*e.expirationTime-Date.now()>O()("180d"))),o=[],i=[],r=[];for(const a of e)if(a.newListings)for(const e of a.newListings){var s;e.price?e.price<.8*((null===(s=a)||void 0===s?void 0:s.floorPrice)??0)&&!e.overrideFloorPrice?i.push([a,e]):a.floor_sell_order_price&&e.price>=a.floor_sell_order_price&&a.asset_contract.tokenType!==me.hgB.Erc1155&&r.push([a,e]):o.push([a,e])}return{missingExpiration:t,overMaxExpiration:n,listingsMissingPrice:o,listingsBelowFloor:i,listingsAboveSellOrderFloor:r}})(t),c=Number(e)+Number(o)+r.length+l.length;return s(c),!c&&n&&i(),(e||o||l.length)&&!n&&i(),[r,a]}),[t,s,n,i]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(ze,{onClick:()=>{r?!n&&i():u.length?l(!0):e()},missingPrices:!!p.length,showResolveIssues:n,children:n?(0,o.jsx)(d.CN,{value:1!==r?2:1,one:d.t`Resolve issue`,other:(0,d.t)("Resolve {{issues}} issues",{issues:r})}):p.length&&!c?(0,o.jsx)(d.cC,{children:"Set prices to continue"}):(0,o.jsx)(d.cC,{children:"Start listing"})}),a&&(0,o.jsx)(R,{listingsBelowFloor:u,closeModal:()=>l(!1),startListing:e})]})};var Ve=n(21926),Ye=n(51001),qe=n(590),Ue=n(16449),Je=n(68588),Ke=n(86059),Qe=n(58690),et=n(81205),tt=n(76623),nt=n(55874),ot=n(63415),it=n(78129),rt=n(7797),st=n(50901),at=n(62652);const lt=(0,k.default)(u.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__ContentColumn",componentId:"sc-426ef8e9-0"})`
  background-color: ${({theme:e,failed:t})=>t&&(0,at.jb)(12,e.critical)};
  border-radius: 12px;
  padding-bottom: ${({failed:e})=>e&&"16px"};
`,ct=(0,k.default)(f.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__ContentRowWrapper",componentId:"sc-426ef8e9-1"})`
  padding: 16px;
  border: ${({failed:e,theme:t})=>!e&&`1px solid ${t.surface3}`};
  border-radius: 12px;
  opacity: ${({active:e,failed:t})=>e||t?"1":"0.6"};
`,dt=k.default.img.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__CollectionIcon",componentId:"sc-426ef8e9-2"})`
  border-radius: 100px;
  height: 24px;
  width: 24px;
  z-index: 1;
`,pt=k.default.img.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__AssetIcon",componentId:"sc-426ef8e9-3"})`
  border-radius: 4px;
  height: 24px;
  width: 24px;
  z-index: 1;
`,ut=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__MarketplaceIcon",componentId:"sc-426ef8e9-4"})`
  border-radius: 4px;
  height: 24px;
  width: 24px;
  margin-left: -4px;
  margin-right: 12px;
`,ft=(0,k.default)(C.Tv.SubHeaderSmall).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__ContentName",componentId:"sc-426ef8e9-5"})`
  color: ${({theme:e})=>e.neutral1};
  line-height: 20px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 40%;
`,ht=k.default.span.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__ProceedText",componentId:"sc-426ef8e9-6"})`
  font-weight: 535;
  font-size: 12px;
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
`,mt=k.default.span.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__FailedText",componentId:"sc-426ef8e9-7"})`
  font-weight: 535;
  font-size: 10px;
  line-height: 12px;
  color: ${({theme:e})=>e.critical};
  margin-left: 4px;
`,xt=(0,k.default)(Qe.SA).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__StyledVerifiedIcon",componentId:"sc-426ef8e9-8"})`
  height: 16px;
  width: 16px;
  margin-left: 4px;
`,gt=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__IconWrapper",componentId:"sc-426ef8e9-9"})`
  margin-left: auto;
  margin-right: 0px;
`,wt=(0,k.default)(f.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__ButtonRow",componentId:"sc-426ef8e9-10"})`
  padding: 0px 16px;
  justify-content: space-between;
`,bt=k.css`
  width: 152px;
  cursor: pointer;
  padding: 8px 0px;
  text-align: center;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;
  border-radius: 12px;
  border: none;

  &:hover {
    opacity: 0.6;
  }
`,vt=k.default.button.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__RemoveButton",componentId:"sc-426ef8e9-11"})`
  background-color: ${({theme:e})=>e.critical};
  color: ${({theme:e})=>e.neutral1};
  ${bt}
`,yt=k.default.button.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ContentRow__RetryButton",componentId:"sc-426ef8e9-12"})`
  background-color: ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  ${bt}
`,kt=({row:e,isCollectionApprovalSection:t,removeRow:n})=>{const i=(0,k.useTheme)(),r=(0,b.useRef)(),s=e.status===ne.Sb.FAILED||e.status===ne.Sb.REJECTED;return(0,b.useEffect)((()=>{var t;e.status===ne.Sb.SIGNING&&(null===(t=r.current)||void 0===t||t.scroll)}),[e.status]),(0,o.jsxs)(lt,{failed:s,children:[(0,o.jsxs)(ct,{active:e.status===ne.Sb.SIGNING||e.status===ne.Sb.APPROVED,failed:s,ref:r,children:[t?(0,o.jsx)(dt,{src:e.image}):(0,o.jsx)(pt,{src:e.image}),(0,o.jsx)(ut,{children:(0,it.Dp)(e.marketplace.name,"24")}),(0,o.jsx)(ft,{children:e.name}),t&&e.isVerified&&(0,o.jsx)(xt,{}),(0,o.jsx)(gt,{children:e.status===ne.Sb.DEFINED||e.status===ne.Sb.PENDING?(0,o.jsx)(ot.ZP,{height:"14px",width:"14px",stroke:e.status===ne.Sb.PENDING?i.accent1:i.neutral3}):e.status===ne.Sb.SIGNING?(0,o.jsx)(ht,{children:(0,o.jsx)(d.cC,{children:"Proceed in wallet"})}):e.status===ne.Sb.APPROVED?(0,o.jsx)(rt.Z,{height:"20",width:"20",stroke:i.success}):s&&(0,o.jsxs)(f.ZP,{children:[(0,o.jsx)(st.Z,{height:"20",width:"20",color:i.critical}),(0,o.jsx)(mt,{children:e.status===ne.Sb.FAILED?(0,o.jsx)(d.cC,{children:"Failed"}):(0,o.jsx)(d.cC,{children:"Rejected"})})]})})]}),s&&(0,o.jsxs)(wt,{justify:"space-between",children:[(0,o.jsx)(vt,{onClick:()=>n(e),children:(0,o.jsx)(d.cC,{children:"Remove"})}),(0,o.jsx)(yt,{onClick:e.callback,children:(0,o.jsx)(d.cC,{children:"Retry"})})]})]})},jt=(0,k.default)(f.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ListModalSection__SectionHeader",componentId:"sc-9f98a7d2-0"})`
  justify-content: space-between;
`,Ct=(0,k.default)(C.Tv.SubHeader).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ListModalSection__SectionTitle",componentId:"sc-9f98a7d2-1"})`
  line-height: 24px;
  color: ${({theme:e,active:t,approved:n})=>n?e.success:t?e.neutral1:e.neutral2};
`,_t=(0,k.default)(Qe.g8).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ListModalSection__SectionArrow",componentId:"sc-9f98a7d2-2"})`
  height: 24px;
  width: 24px;
  cursor: pointer;
  transition: ${nt.Kd.medium}ms;
  transform: rotate(${({active:e})=>e?0:180}deg);
`,Pt=(0,k.default)(u.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ListModalSection__SectionBody",componentId:"sc-9f98a7d2-3"})`
  border-left: 1.5px solid ${tt.O9.gray650};
  margin-top: 4px;
  margin-left: 7px;
  padding-top: 4px;
  padding-left: 20px;
  max-height: 394px;
  overflow-y: auto;
  ${Je.Zl}
`,St=(0,k.default)(et.Z).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ListModalSection__StyledInfoIcon",componentId:"sc-9f98a7d2-4"})`
  height: 16px;
  width: 16px;
  margin-left: 4px;
  color: ${({theme:e})=>e.neutral2};
`,Nt=(0,k.default)(u.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ListModalSection__ContentRowContainer",componentId:"sc-9f98a7d2-5"})`
  gap: 8px;
  scroll-behavior: smooth;
`;var It;!function(e){e[e.APPROVE=0]="APPROVE",e[e.SIGN=1]="SIGN"}(It||(It={}));const Ft=({sectionType:e,active:t,content:n,toggleSection:i})=>{const r=(0,k.useTheme)(),s=(0,M.Pc)((e=>e.sellAssets)),a=(0,M.Pc)((e=>e.removeAssetMarketplace)),l=(0,b.useMemo)((()=>!n.some((e=>e.status!==ne.Sb.APPROVED))),[n]),c=0===e,p=(0,b.useMemo)((()=>{if(c){const e=n.map((e=>e.collectionAddress));return[...new Set(e)].length}}),[n,c]),h=e=>{if(c){const t=e;for(const e of s)e.asset_contract.address===t.collectionAddress&&a(e,t.marketplace)}else{const t=e;a(t.asset,t.marketplace)}};return(0,o.jsxs)(u.ZP,{children:[(0,o.jsxs)(jt,{children:[(0,o.jsxs)(f.ZP,{children:[t||l?(0,o.jsx)(Qe.bT,{fill:l?r.success:r.accent1}):(0,o.jsx)(Qe.rD,{}),(0,o.jsx)(Ct,{active:t,marginLeft:"12px",approved:l,children:c?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.cC,{children:"Approve"}),"\xa0",(0,o.jsx)(d.CN,{value:p??1,one:d.t`collection`,other:d.t`collections`})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(d.cC,{children:"Sign"})," \xa0",n.length,"\xa0"," ",(0,o.jsx)(d.CN,{value:n.length,one:d.t`listing`,other:d.t`listings`})]})})]}),(0,o.jsx)(_t,{active:t,secondaryColor:t?r.neutral1:r.neutral2,onClick:i})]}),t&&(0,o.jsxs)(Pt,{children:[c&&(0,o.jsxs)(f.ZP,{height:"16px",marginBottom:"16px",children:[(0,o.jsx)(C.Tv.BodySmall,{lineHeight:"16px",color:"neutral2",children:(0,o.jsx)(d.cC,{children:"Why is a transaction required?"})}),(0,o.jsx)(Ke.ud,{text:(0,o.jsx)(d.cC,{children:"Listing an NFT requires a one-time marketplace approval for each NFT collection."}),children:(0,o.jsx)(St,{})})]}),(0,o.jsx)(Nt,{children:n.map((e=>{var t;return(0,o.jsx)(kt,{row:e,removeRow:h,isCollectionApprovalSection:c},(null===(t=e)||void 0===t?void 0:t.name)??e.marketplace.name)}))})]})]})};var Tt=n(81339),$t=n(72993);const Rt=k.default.img.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\SuccessScreen__SuccessImage",componentId:"sc-d37f541-0"})`
  width: calc(${({numImages:e})=>e>1?e>2?"33%":"50%":"100%"} - 12px);
  border-radius: 12px;
`,Mt=(0,k.default)(f.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\SuccessScreen__SuccessImageWrapper",componentId:"sc-d37f541-1"})`
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
  overflow-y: scroll;
  margin-bottom: 16px;
  ${Je.Zl}
`,Et=(0,k.default)(u.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\SuccessScreen__ProceedsColumn",componentId:"sc-d37f541-2"})`
  text-align: right;
`,Lt=k.css`
  width: 182px;
  cursor: pointer;
  padding: 12px 0px;
  text-align: center;
  font-weight: 535;
  font-size: 16px;
  line-height: 20px;
  border-radius: 12px;
  border: none;

  &:hover {
    opacity: 0.6;
  }

  @media screen and (max-width: ${j.j$.sm}px) {
    width: 100%;
    margin-bottom: 8px;
  }
`,At=k.default.button.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\SuccessScreen__ReturnButton",componentId:"sc-d37f541-3"})`
  background-color: ${({theme:e})=>e.surface3};
  color: ${({theme:e})=>e.neutral1};
  ${Lt}
`,Ot=k.default.a.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\SuccessScreen__TweetButton",componentId:"sc-d37f541-4"})`
  background-color: ${({theme:e})=>e.accent1};
  color: ${({theme:e})=>e.deprecated_accentTextLightPrimary};
  text-decoration: none;
  ${Lt}
`,Dt=(0,k.default)(f.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\SuccessScreen__TweetRow",componentId:"sc-d37f541-5"})`
  justify-content: center;
  gap: 4px;
`,Bt=({overlayClick:e})=>{const t=(0,k.useTheme)(),{formatNumberOrString:n}=(0,P.Gb)(),i=(0,M.Pc)((e=>e.sellAssets)),r=(0,$t.x)(),s=(0,m.Z)(r),{formatCurrencyAmount:a}=(0,P.Gb)(),l=(0,b.useMemo)((()=>We(i)),[i]),c=(0,x.Z)(l.toString(),s),p=(0,h.sq)(c);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(B,{children:[(0,o.jsxs)(C.Tv.HeadlineSmall,{lineHeight:"28px",children:[(0,o.jsx)(d.cC,{children:"Successfully listed"}),"\xa0",i.length>1?` ${i.length} `:"","NFT",(0,it._6)(i.length),"!"]}),(0,o.jsx)(v.Z,{size:24,cursor:"pointer",onClick:e})]}),(0,o.jsx)(Mt,{children:i.map((e=>{var t,n,r;return(0,o.jsx)(Rt,{src:e.imageUrl,numImages:i.length},(null===(n=e)||void 0===n||null===(t=n.asset_contract)||void 0===t?void 0:t.address)??""+(null===(r=e)||void 0===r?void 0:r.tokenId))}))}),(0,o.jsxs)(f.ZP,{justify:"space-between",align:"flex-start",marginBottom:"16px",children:[(0,o.jsx)(C.Tv.SubHeader,{children:(0,o.jsx)(d.cC,{children:"Proceeds if sold"})}),(0,o.jsxs)(Et,{children:[(0,o.jsxs)(C.Tv.SubHeader,{children:[n({input:l,type:P.sw.NFTToken})," ETH"]}),p&&(0,o.jsx)(C.Tv.BodySmall,{lineHeight:"20px",color:"neutral2",children:a({amount:p,type:P.sw.FiatTokenPrice})})]})]}),(0,o.jsxs)(f.ZP,{justify:"space-between",style:{flexWrap:"wrap"},children:[(0,o.jsx)(At,{onClick:()=>window.location.reload(),children:(0,o.jsx)(d.cC,{children:"Return to My NFTs"})}),(0,o.jsx)(Ot,{href:(0,it.FX)(i),target:"_blank",rel:"noreferrer",children:(0,o.jsxs)(Dt,{children:[(0,o.jsx)(Tt.Z,{height:20,width:20,color:t.deprecated_accentTextLightPrimary,fill:t.deprecated_accentTextLightPrimary}),(0,o.jsx)(d.cC,{children:"Share on Twitter"})]})})]})]})};function Zt(e,t,n,o,i,r,s){try{var a=e[r](s),l=a.value}catch(c){return void n(c)}a.done?t(l):Promise.resolve(l).then(o,i)}const Wt=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Modal\\ListModal__ListModalWrapper",componentId:"sc-77ec682c-0"})`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  z-index: ${_.k.modal};
  background: ${({theme:e})=>e.surface1};
  border-radius: 20px;
  border: 1px solid ${({theme:e})=>e.surface3};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media screen and (max-width: ${j.j$.sm}px) {
    width: 100%;
    height: 100%;
  }
`,Gt=({overlayClick:e})=>{var t;const n=(0,qe.m)(),r=(0,Ue.n)(),a=null===(t=r)||void 0===t?void 0:t.getSigner(),l=(0,s.oO)({modal:i.KO.NFT_LISTING}),{formatCurrencyAmount:c}=(0,P.Gb)(),p=(0,M.Pc)((e=>e.sellAssets)),{setListingStatusAndCallback:u,setLooksRareNonce:f,getLooksRareNonce:y,collectionsRequiringApproval:k,listings:j}=(0,M.zM)((({setListingStatusAndCallback:e,setLooksRareNonce:t,getLooksRareNonce:n,collectionsRequiringApproval:o,listings:i})=>({setListingStatusAndCallback:e,setLooksRareNonce:t,getLooksRareNonce:n,collectionsRequiringApproval:o,listings:i}))),_=(0,b.useMemo)((()=>We(p)),[p]),[S,N]=(0,b.useReducer)((e=>e===It.APPROVE?It.SIGN:It.APPROVE),It.APPROVE),I=(0,m.Z)(n.chainId),F=(0,x.Z)(_.toString(),I),T=c({amount:(0,h.sq)(F),type:P.sw.FiatTokenPrice}),$=(0,b.useMemo)((()=>k.every((e=>e.status===ne.Sb.APPROVED))),[k]),R=(0,b.useMemo)((()=>j.every((e=>e.status===ne.Sb.APPROVED))),[j]),E=function(){var e,t=(e=function*(){if(a&&r){for(const e of j)yield Be(e,a,r,y,f,u);(0,s._P)(i.Yz.NFT_LISTING_COMPLETED,{signatures_approved:j.filter((e=>e.status===ne.Sb.APPROVED)),list_quantity:j.length,usd_value:T,...l})}},function(){var t=this,n=arguments;return new Promise((function(o,i){var r=e.apply(t,n);function s(e){Zt(r,o,i,s,a,"next",e)}function a(e){Zt(r,o,i,s,a,"throw",e)}s(void 0)}))});return function(){return t.apply(this,arguments)}}();(0,b.useEffect)((()=>{$&&(E(),S===It.APPROVE&&N())}),[$]);const L=(0,b.useCallback)((()=>{R?window.location.reload():e()}),[R,e]);return(0,b.useEffect)((()=>{!j.length&&L()}),[j,L]),(0,o.jsxs)(g.h,{children:[(0,o.jsx)(s.fM,{modal:i.KO.NFT_LISTING,children:(0,o.jsx)(Wt,{children:R?(0,o.jsx)(Bt,{overlayClick:L}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(B,{children:[(0,o.jsx)(C.Tv.HeadlineSmall,{lineHeight:"28px",children:(0,o.jsx)(d.cC,{children:"List NFTs"})}),(0,o.jsx)(v.Z,{size:24,cursor:"pointer",onClick:L})]}),(0,o.jsx)(Ft,{sectionType:It.APPROVE,active:S===It.APPROVE,content:k,toggleSection:N}),(0,o.jsx)(Ft,{sectionType:It.SIGN,active:S===It.SIGN,content:j,toggleSection:N})]})})}),(0,o.jsx)(w.a,{onClick:L})]})};var Ht=n(30520),zt=n(86082);const Xt=(0,k.default)(u.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Dropdown__DropdownWrapper",componentId:"sc-2f0c6b6d-0"})`
  gap: 4px;
  background: ${({theme:e})=>e.surface1};
  padding: 8px;
  width: ${({$width:e})=>e}px;
  border-radius: 12px;
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border: 1px solid ${({theme:e})=>e.surface3};
`,Vt=(0,k.default)(f.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\Dropdown__DropdownRow",componentId:"sc-2f0c6b6d-1"})`
  justify-content: space-between;
  padding: 8px;
  cursor: pointer;
  border-radius: 12px;

  &:hover {
    background: ${({theme:e})=>e.surface3};
  }
`,Yt=({dropDownOptions:e,width:t})=>{const n=(0,k.useTheme)();return(0,o.jsx)(Xt,{$width:t,children:e.map((e=>(0,o.jsxs)(Vt,{onClick:e.onClick,children:[(0,o.jsx)(C.Tv.BodyPrimary,{lineHeight:"24px",children:e.displayText}),e.isSelected&&(0,o.jsx)(rt.Z,{height:20,width:20,color:n.accent1})]},e.displayText)))})};var qt=n(95684),Ut=n(43562),Jt=n(87175),Kt=n(68113),Qt=n(37246);const en=(0,k.default)(u.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\PriceTextInput__PriceTextInputWrapper",componentId:"sc-5ff07694-0"})`
  gap: 12px;
  position: relative;
`,tn=(0,k.default)(f.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\PriceTextInput__InputWrapper",componentId:"sc-5ff07694-1"})`
  height: 48px;
  color: ${({theme:e})=>e.neutral3};
  padding: 12px;
  border: 2px solid;
  border-radius: 8px;
  border-color: ${({borderColor:e})=>e};
  margin-right: auto;
  box-sizing: border-box;
`,nn=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\PriceTextInput__CurrencyWrapper",componentId:"sc-5ff07694-2"})`
  color: ${({listPrice:e,theme:t})=>e?t.neutral1:t.neutral2};
`,on=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\PriceTextInput__GlobalPriceIcon",componentId:"sc-5ff07694-3"})`
  display: flex;
  cursor: pointer;
  position: absolute;
  bottom: 32px;
  right: -10px;
  background-color: ${({theme:e})=>e.surface1};
  border-radius: 50%;
  height: 28px;
  width: 28px;
  align-items: center;
  justify-content: center;
`,rn=(0,k.default)(f.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\PriceTextInput__WarningRow",componentId:"sc-5ff07694-4"})`
  gap: 4px;
`,sn=(0,k.default)(f.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\PriceTextInput__WarningMessage",componentId:"sc-5ff07694-5"})`
  top: 52px;
  width: max-content;
  position: absolute;
  right: 0;
  font-weight: 535;
  font-size: 10px;
  line-height: 12px;
  color: ${({$color:e})=>e};

  @media screen and (min-width: ${j.j$.md}px) {
    right: unset;
  }
`,an=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\PriceTextInput__WarningAction",componentId:"sc-5ff07694-6"})`
  cursor: pointer;
  color: ${({theme:e})=>e.accent1};
`,ln=e=>{let t=(0,o.jsx)(o.Fragment,{});switch(e){case W.BELOW_FLOOR:t=(0,o.jsx)(d.cC,{children:"below floor price."});break;case W.ALREADY_LISTED:t=(0,o.jsx)(d.cC,{children:"Already listed at"})}return t},cn=({listPrice:e,setListPrice:t,isGlobalPrice:n,setGlobalOverride:i,globalOverride:r,asset:s})=>{var a;const{formatNumberOrString:l,formatDelta:c}=(0,P.Gb)(),[p,u]=(0,b.useState)(W.NONE),f=(0,M.Pc)((e=>e.removeSellAsset)),h=(0,M.Pc)((e=>e.showResolveIssues)),m=(0,b.useRef)(),x=(0,k.useTheme)(),g=100*(1-(e??0)/(s.floorPrice??0)),w=h&&!e||p===W.ALREADY_LISTED||p===W.BELOW_FLOOR&&g>=20?tt.O9.red400:p===W.BELOW_FLOOR?x.deprecated_accentWarning:n||e?x.accent1:x.neutral2;return function(e,t,n,o){var i;(0,b.useEffect)((()=>{var i;e(W.NONE);const r=o??0;t.current.value=`${r}`,r<((null===(i=n)||void 0===i?void 0:i.floorPrice)??0)&&r>0?e(W.BELOW_FLOOR):n.floor_sell_order_price&&r>=n.floor_sell_order_price&&n.asset_contract.tokenType!==me.hgB.Erc1155&&e(W.ALREADY_LISTED)}),[n.asset_contract.tokenType,null===(i=n)||void 0===i?void 0:i.floorPrice,n.floor_sell_order_price,t,o,e])}(u,m,s,e),(0,o.jsxs)(en,{children:[(0,o.jsxs)(tn,{borderColor:w,children:[(0,o.jsx)(Jt.A,{as:"input",pattern:"[0-9]",borderStyle:"none",className:Kt.d1,color:{placeholder:"neutral2",default:"neutral1"},placeholder:"0",backgroundColor:"none",width:{sm:"54",md:"68"},ref:m,onChange:n=>{if(!e&&n.target.value.includes(".")&&0===parseFloat(n.target.value))return;const o=parseFloat(n.target.value);t(isNaN(o)?void 0:o)}}),(0,o.jsx)(nn,{listPrice:e,children:"\xa0ETH"}),(n||r)&&(0,o.jsx)(on,{onClick:()=>i(!r),children:r?(0,o.jsx)(Qe.We,{}):(0,o.jsx)(Qt.Z,{size:20,color:w})})]}),(0,o.jsx)(sn,{$color:w,children:p!==W.NONE&&(0,o.jsxs)(rn,{children:[(0,o.jsx)(y.Z,{height:16,width:16,color:w}),(0,o.jsxs)("span",{children:[p===W.BELOW_FLOOR&&`${c(g)} `,ln(p),"\xa0",p===W.ALREADY_LISTED&&`${l({input:(null===(a=s)||void 0===a?void 0:a.floor_sell_order_price)??0,type:P.sw.NFTToken})} ETH`]}),(0,o.jsx)(an,{onClick:()=>{p===W.ALREADY_LISTED&&f(s),u(W.NONE)},children:p===W.BELOW_FLOOR?(0,o.jsx)(d.cC,{children:"Dismiss"}):(0,o.jsx)(d.cC,{children:"Remove item"})})]})})]})},dn=(0,k.default)(f.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\RoyaltyTooltip__FeeWrap",componentId:"sc-237f4af-0"})`
  margin-bottom: 4px;
  justify-content: space-between;
`,pn=(0,k.default)(u.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\RoyaltyTooltip__RoyaltyContainer",componentId:"sc-237f4af-1"})`
  gap: 12px;
  padding: 4px 0px;
`,un=k.css`
  width: 16px;
  height: 16px;
  outline: 1px solid ${({theme:e})=>e.surface3};
  margin-right: 8px;
`,fn=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\RoyaltyTooltip__MarketIcon",componentId:"sc-237f4af-2"})`
  border-radius: 4px;
  ${un}
`,hn=k.default.img.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\RoyaltyTooltip__CollectionIcon",componentId:"sc-237f4af-3"})`
  object-fit: cover;
  border-radius: 50%;
  ${un}
`,mn=(0,k.default)(C.Tv.BodySmall).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\RoyaltyTooltip__FeePercent",componentId:"sc-237f4af-4"})`
  line-height: 16px;
  color: ${({theme:e})=>e.neutral2};
  white-space: nowrap;
`,xn=(0,k.default)(f.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\RoyaltyTooltip__MaxFeeContainer",componentId:"sc-237f4af-5"})`
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid ${({theme:e})=>e.surface3};
`,gn=({selectedMarkets:e,asset:t,fees:n})=>{var i;const{formatNumberOrString:r,formatDelta:s}=(0,P.Gb)(),a=Math.max(...e.map((e=>He(e,t)??0)));return(0,o.jsxs)(pn,{children:[e.map((e=>{var n;return(0,o.jsxs)(dn,{children:[(0,o.jsxs)(f.ZP,{children:[(0,o.jsx)(fn,{children:(0,it.Dp)(e.name,"16")}),(0,o.jsxs)(C.Tv.BodySmall,{lineHeight:"16px",marginRight:"12px",children:[e.name,"\xa0",(0,o.jsx)(d.cC,{children:"fee"})]})]}),(0,o.jsx)(mn,{children:s(e.fee)})]},(null===(n=t.collection)||void 0===n?void 0:n.address)??""+t.tokenId+e.name+"fee")})),(0,o.jsxs)(dn,{children:[(0,o.jsxs)(f.ZP,{children:[(0,o.jsx)(hn,{src:null===(i=t.collection)||void 0===i?void 0:i.imageUrl}),(0,o.jsx)(C.Tv.BodySmall,{lineHeight:"16px",marginRight:"12px",children:(0,o.jsx)(d.cC,{children:"Max creator royalties"})})]}),(0,o.jsxs)(mn,{children:[a,"%"]})]}),(0,o.jsxs)(xn,{children:[(0,o.jsx)(C.Tv.BodySmall,{lineHeight:"16px",children:(0,o.jsx)(d.cC,{children:"Max fees"})}),(0,o.jsxs)(C.Tv.BodySmall,{lineHeight:"16px",color:n?"neutral1":"neutral2",children:[n?r({input:n,type:P.sw.NFTToken}):"-"," ETH"]})]})]})},wn=(0,k.default)(u.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__LastPriceInfo",componentId:"sc-691ca3bd-0"})`
  text-align: left;
  display: none;
  flex: 1;

  @media screen and (min-width: ${j.j$.lg}px) {
    display: flex;
  }
`,bn=(0,k.default)(u.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__FloorPriceInfo",componentId:"sc-691ca3bd-1"})`
  text-align: left;
  display: none;
  flex: 1;

  @media screen and (min-width: ${j.j$.md}px) {
    display: flex;
  }
`,vn=(0,k.default)(D).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__RemoveMarketplaceWrap",componentId:"sc-691ca3bd-2"})`
  top: 8px;
  left: 16px;
  z-index: 3;
`,yn=(0,k.default)(f.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__MarketIconsWrapper",componentId:"sc-691ca3bd-3"})`
  position: relative;
  margin-right: 12px;
  width: 44px;
  justify-content: flex-end;

  @media screen and (max-width: ${j.j$.sm}px) {
    display: none;
  }
`,kn=(0,k.default)(u.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__MarketIconWrapper",componentId:"sc-691ca3bd-4"})`
  position: relative;
  cursor: pointer;
`,jn=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__MarketIcon",componentId:"sc-691ca3bd-5"})`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  z-index: ${({index:e})=>2-e};
  margin-left: ${({index:e})=>(0===e?0:-8)+"px"};
  outline: 1px solid ${({theme:e})=>e.surface3};
`,Cn=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__ExpandMarketIconWrapper",componentId:"sc-691ca3bd-6"})`
  cursor: pointer;
  margin-left: 4px;
  height: 28px;

  @media screen and (max-width: ${j.j$.sm}px) {
    display: none;
  }
`,_n=(0,k.default)(u.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__FeeColumnWrapper",componentId:"sc-691ca3bd-7"})`
  flex: 1;
  align-items: flex-end;
  display: none;

  @media screen and (min-width: ${j.j$.md}px) {
    display: flex;
  }
`,Pn=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__FeeWrapper",componentId:"sc-691ca3bd-8"})`
  width: min-content;
  white-space: nowrap;
`,Sn=(0,k.default)(u.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\MarketplaceRow__ReturnColumn",componentId:"sc-691ca3bd-9"})`
  flex: 1.5;
  display: none;

  @media screen and (min-width: ${j.j$.md}px) {
    display: flex;
  }
`,Nn=({globalPriceMethod:e,globalPrice:t,setGlobalPrice:n,selectedMarkets:i,removeMarket:r,asset:s,expandMarketplaceRows:a,toggleExpandMarketplaceRows:l,rowHovered:c})=>{const{formatNumberOrString:p,formatDelta:u}=(0,P.Gb)(),h=(0,M.Pc)((e=>e.setAssetListPrice)),m=(0,M.Pc)((e=>e.removeAssetMarketplace)),[x,g]=(0,b.useReducer)((e=>!e),!1),[w,v]=(0,b.useReducer)((e=>!e),!1),[y,k]=(0,b.useState)((()=>{var e,t;return null===(t=s.newListings)||void 0===t||null===(e=t.find((e=>{var t;return a?e.marketplace.name===(null===(t=i)||void 0===t?void 0:t[0].name):!!e.price})))||void 0===e?void 0:e.price})),[j,_]=(0,b.useState)(!1),S=e===Z.SAME_PRICE&&!j,N=S?t:y,I=(0,b.useCallback)((e=>{S?n(e):k(e);for(const t of i)h(s,e,t)}),[s,i,h,n,S]),F=(0,b.useMemo)((()=>{let e=0;for(const t of i){const n=He(t,s)+t.fee;e=Math.max(n,e)}return e}),[s,i]),T=N&&N*F/100,$=N&&T&&N-T;return function(e,t,n,o,i){(0,b.useEffect)((()=>{let r;e?(o||t(i),r=i):r=o,n(r)}),[e])}(j,k,I,y,t),function(e,t,n,o,i,r,s){(0,b.useEffect)((()=>{var a;s===Z.FLOOR_PRICE?(t(null===(a=e)||void 0===a?void 0:a.floorPrice),n(e.floorPrice)):s===Z.LAST_PRICE?(t(e.lastPrice),n(e.lastPrice)):s===Z.SAME_PRICE&&(i&&!r?n(i):t(r)),o(!1)}),[s])}(s,k,n,_,y,t,e),(0,b.useEffect)((()=>{S&&I(t)}),[t]),(0,o.jsxs)(f.ZP,{onMouseEnter:v,onMouseLeave:v,children:[(0,o.jsx)(bn,{children:(0,o.jsx)(C.Tv.BodyPrimary,{color:"neutral2",lineHeight:"24px",children:p({input:s.floorPrice,type:P.sw.NFTToken})+s.floorPrice?" ETH":""})}),(0,o.jsx)(wn,{children:(0,o.jsx)(C.Tv.BodyPrimary,{color:"neutral2",lineHeight:"24px",children:s.lastPrice?`${p({input:s.lastPrice,type:P.sw.NFTToken})} ETH`:"-"})}),(0,o.jsxs)(f.ZP,{flex:"2",children:[(a||i.length>1)&&(0,o.jsx)(yn,{onMouseEnter:g,onMouseLeave:g,children:i.map(((e,t)=>{var n;return(0,o.jsxs)(kn,{onClick:t=>{t.stopPropagation(),m(s,e),r&&r()},children:[(0,o.jsx)(jn,{index:t,children:(0,it.Dp)(e.name,"20")}),(0,o.jsx)(vn,{hovered:x&&(a??!1),children:(0,o.jsx)("img",{width:"20px",src:"/nft/svgs/minusCircle.svg",alt:"Remove item"})})]},e.name+(null===(n=s.collection)||void 0===n?void 0:n.address)+s.tokenId)}))}),(0,o.jsx)(cn,{listPrice:N,setListPrice:I,isGlobalPrice:S,setGlobalOverride:_,globalOverride:j,asset:s}),c&&(a&&w||i.length>1)&&(0,o.jsx)(Cn,{onClick:l,children:a?(0,o.jsx)(Qe.fJ,{}):(0,o.jsx)(Qe.nG,{})})]}),(0,o.jsx)(_n,{children:(0,o.jsx)(Ke.ud,{text:(0,o.jsx)(gn,{selectedMarkets:i,asset:s,fees:T}),placement:"left",children:(0,o.jsx)(Pn,{children:(0,o.jsx)(C.Tv.BodyPrimary,{color:"neutral2",children:F>0?`${u(F)}${i.length>1?d.t`max`:""}`:"--%"})})})}),(0,o.jsx)(Sn,{children:(0,o.jsx)(In,{ethPrice:$})})]})},In=({ethPrice:e=0})=>{const{formatNumberOrString:t}=(0,P.Gb)(),n=(0,Ut.$)();return(0,o.jsx)(f.ZP,{width:"100%",justify:"flex-end",children:(0,o.jsx)(C.Tv.BodyPrimary,{lineHeight:"24px",color:e?"neutral1":"neutral2",textAlign:"right",children:0!==e?(0,o.jsxs)(u.ZP,{children:[(0,o.jsxs)("span",{children:[t({input:e,type:P.sw.NFTToken})," ETH"]}),(0,o.jsx)(C.Tv.BodyPrimary,{color:"neutral2",children:t({input:e*n,type:P.sw.FiatNFTToken})})]}):"- ETH"})})},Fn=(0,k.default)(f.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListRow__NFTListRowWrapper",componentId:"sc-18902c6d-0"})`
  padding: 24px 0px;
  align-items: center;
  border-radius: 8px;

  &:hover {
    background: ${({theme:e})=>e.surface3};
  }
`,Tn=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListRow__RemoveIconContainer",componentId:"sc-18902c6d-1"})`
  width: ${60}px;
  height: ${60}px;
  padding-left: 12px;
  align-self: flex-start;
  align-items: center;
  display: flex;

  @media screen and (max-width: ${j.j$.sm}px) {
    display: none;
  }

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,$n=(0,k.default)(f.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListRow__NFTInfoWrapper",componentId:"sc-18902c6d-2"})`
  align-items: center;
  min-width: 0px;
  flex: 2;
  margin-bottom: auto;

  @media screen and (min-width: ${j.j$.md}px) {
    flex: 1.5;
  }
`,Rn=k.default.img.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListRow__NFTImage",componentId:"sc-18902c6d-3"})`
  width: ${60}px;
  height: ${60}px;
  border-radius: 8px;
  margin-right: 8px;
`,Mn=k.css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,En=(0,k.default)(u.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListRow__TokenInfoWrapper",componentId:"sc-18902c6d-4"})`
  margin-right: 8px;
  min-width: 0px;
`,Ln=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListRow__TokenName",componentId:"sc-18902c6d-5"})`
  font-weight: 535;
  font-size: 16px;
  line-height: 24px;
  ${Mn}
`,An=(0,k.default)(C.Tv.BodySmall).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListRow__CollectionName",componentId:"sc-18902c6d-6"})`
  color: ${({theme:e})=>e.neutral2};
  line-height: 20px;
  ${Mn};
`,On=(0,k.default)(u.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListRow__MarketPlaceRowWrapper",componentId:"sc-18902c6d-7"})`
  gap: 24px;
  flex: 1.5;
  margin-right: 12px;
  padding: 6px 0px;

  @media screen and (min-width: ${j.j$.md}px) {
    flex: 2;
  }

  @media screen and (min-width: ${j.j$.md}px) {
    flex: 3;
  }
`,Dn=({asset:e,globalPriceMethod:t,globalPrice:n,setGlobalPrice:i,selectedMarkets:r})=>{var s;const[a,l]=(0,b.useReducer)((e=>!e),!1),c=(0,M.Pc)((e=>e.removeSellAsset)),[d,p]=(0,b.useState)([]),[u,f]=(0,b.useReducer)((e=>!e),!1),h=(0,k.useTheme)();return(0,b.useEffect)((()=>{p(JSON.parse(JSON.stringify(r)))}),[r]),(0,o.jsxs)(Fn,{onMouseEnter:()=>{!u&&f()},onMouseLeave:()=>{u&&f()},children:[(0,o.jsx)(Tn,{children:u&&(0,o.jsx)(qt.Z,{size:20,color:h.neutral2,cursor:"pointer",onClick:()=>{c(e)}})}),(0,o.jsxs)($n,{children:[(0,o.jsx)(Rn,{alt:e.name,src:e.imageUrl||"/nft/svgs/image-placeholder.svg"}),(0,o.jsxs)(En,{children:[(0,o.jsx)(Ln,{children:e.name?e.name:`#${e.tokenId}`}),(0,o.jsxs)(An,{children:[null===(s=e.collection)||void 0===s?void 0:s.name,e.collectionIsVerified&&(0,o.jsx)(Qe.SA,{style:{marginBottom:"-5px"}})]})]})]}),(0,o.jsx)(On,{children:a&&d.length>1?d.map((r=>(0,o.jsx)(Nn,{globalPriceMethod:t,globalPrice:n,setGlobalPrice:i,selectedMarkets:[r],removeMarket:()=>p(d.filter((e=>e.name!==r.name))),asset:e,expandMarketplaceRows:a,rowHovered:u,toggleExpandMarketplaceRows:l},e.name+r.name))):(0,o.jsx)(Nn,{globalPriceMethod:t,globalPrice:n,setGlobalPrice:i,selectedMarkets:d,asset:e,rowHovered:u,toggleExpandMarketplaceRows:l})})]})},Bn=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__TableHeader",componentId:"sc-9c60707-0"})`
  display: flex;
  position: sticky;
  align-items: center;
  top: 72px;
  padding-top: 24px;
  padding-bottom: 24px;
  z-index: 3;
  background-color: ${({theme:e})=>e.surface2};
  color: ${({theme:e})=>e.neutral2};
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  border-radius: 12px;

  @media screen and (min-width: ${j.j$.sm}px) {
    padding-left: 48px;
  }
`,Zn=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__NFTHeader",componentId:"sc-9c60707-1"})`
  flex: 2;

  @media screen and (min-width: ${j.j$.md}px) {
    flex: 1.5;
  }
`,Wn=(0,k.default)(f.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__PriceHeaders",componentId:"sc-9c60707-2"})`
  flex: 1.5;
  margin-right: 12px;

  @media screen and (min-width: ${j.j$.md}px) {
    flex: 3;
  }
`,Gn=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__LastPriceHeader",componentId:"sc-9c60707-3"})`
  display: none;
  flex: 1;

  @media screen and (min-width: ${j.j$.lg}px) {
    display: flex;
  }
`,Hn=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__FloorPriceHeader",componentId:"sc-9c60707-4"})`
  display: none;
  flex: 1;

  @media screen and (min-width: ${j.j$.md}px) {
    display: flex;
  }
`,zn=(0,k.default)(f.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__DropdownAndHeaderWrapper",componentId:"sc-9c60707-5"})`
  flex: 2;
  gap: 4px;
`,Xn=(0,k.default)(u.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__DropdownPromptContainer",componentId:"sc-9c60707-6"})`
  position: relative;
  @media screen and (max-width: ${j.j$.sm}px) {
    display: none;
  }
`,Vn=(0,k.default)(f.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__DropdownPrompt",componentId:"sc-9c60707-7"})`
  gap: 4px;
  background-color: ${({theme:e})=>e.surface3};
  cursor: pointer;
  font-weight: 535;
  font-size: 12px;
  line-height: 16px;
  border-radius: 4px;
  padding: 2px 6px;
  width: min-content;
  white-space: nowrap;
  color: ${({theme:e})=>e.neutral1};

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,Yn=(0,k.default)(zt.Z).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__DropdownChevron",componentId:"sc-9c60707-8"})`
  height: 16px;
  width: 16px;
  color: ${({theme:e})=>e.neutral2};
  transform: ${({isOpen:e})=>e&&"rotate(180deg)"};
  transition: ${({theme:{transition:{duration:e,timing:t}}})=>`transform ${e.fast} ${t.ease}`};
`,qn=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__DropdownContainer",componentId:"sc-9c60707-9"})`
  position: absolute;
  top: 36px;
  right: 0px;
`,Un=k.css`
  display: none;
  justify-content: flex-end;
  @media screen and (min-width: ${j.j$.md}px) {
    display: flex;
  }
`,Jn=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__FeeHeader",componentId:"sc-9c60707-10"})`
  flex: 1;
  ${Un}
`,Kn=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__UserReceivesHeader",componentId:"sc-9c60707-11"})`
  flex: 1.5;
  ${Un}
`,Qn=k.default.hr.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\NFTListingsGrid__RowDivider",componentId:"sc-9c60707-12"})`
  height: 0px;
  width: 100%;
  border-radius: 20px;
  border-width: 0.5px;
  border-style: solid;
  margin: 0;
  border-color: ${({theme:e})=>e.surface3};
`,eo=({selectedMarkets:e})=>{const t=(0,M.Pc)((e=>e.sellAssets)),[n,i]=(0,b.useState)(Z.CUSTOM),[r,s]=(0,b.useState)(),[a,l]=(0,b.useReducer)((e=>!e),!1),c=(0,b.useRef)(null);(0,Ht.t)(c,a?l:void 0);const p=(0,b.useMemo)((()=>[{displayText:"Custom",isSelected:n===Z.CUSTOM,onClick:()=>{i(Z.CUSTOM),l()}},{displayText:"Floor price",isSelected:n===Z.FLOOR_PRICE,onClick:()=>{i(Z.FLOOR_PRICE),l()}},{displayText:"Last price",isSelected:n===Z.LAST_PRICE,onClick:()=>{i(Z.LAST_PRICE),l()}},{displayText:"Same price",isSelected:n===Z.SAME_PRICE,onClick:()=>{i(Z.SAME_PRICE),l()}}]),[n]);let f;switch(n){case Z.CUSTOM:f=(0,o.jsx)(d.cC,{children:"Custom"});break;case Z.FLOOR_PRICE:f=(0,o.jsx)(d.cC,{children:"Floor price"});break;case Z.LAST_PRICE:f=(0,o.jsx)(d.cC,{children:"Last price"});break;case Z.SAME_PRICE:f=(0,o.jsx)(d.cC,{children:"Same price"})}return(0,o.jsxs)(u.ZP,{children:[(0,o.jsxs)(Bn,{children:[(0,o.jsx)(Zn,{children:(0,o.jsx)(d.cC,{children:"NFT"})}),(0,o.jsxs)(Wn,{children:[(0,o.jsx)(Hn,{children:(0,o.jsx)(d.cC,{children:"Floor"})}),(0,o.jsx)(Gn,{children:(0,o.jsx)(d.cC,{children:"Last"})}),(0,o.jsxs)(zn,{ref:c,children:[(0,o.jsx)(d.cC,{children:"Price"}),(0,o.jsxs)(Xn,{children:[(0,o.jsxs)(Vn,{onClick:l,children:[f," ",(0,o.jsx)(Yn,{isOpen:a})]}),a&&(0,o.jsx)(qn,{children:(0,o.jsx)(Yt,{dropDownOptions:p,width:200})})]})]}),(0,o.jsx)(Jn,{children:(0,o.jsx)(d.cC,{children:"Fees"})}),(0,o.jsx)(Kn,{children:(0,o.jsx)(d.cC,{children:"You receive"})})]})]}),t.map((i=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Dn,{asset:i,globalPriceMethod:n,globalPrice:r,setGlobalPrice:s,selectedMarkets:e}),t.indexOf(i)<t.length-1&&(0,o.jsx)(Qn,{})]})))]})};var to=n(90090),no=n(15288),oo=n(4256),io=n(27389);const ro=(0,k.default)(no.X2).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__MarketplaceRowWrapper",componentId:"sc-45ca7e4-0"})`
  gap: 6px;
  height: 44px;
  width: 100%;
  cursor: pointer;
  justify-content: space-between;
  padding: 0px 16px;
  &:hover {
    background-color: ${({theme:e})=>e.surface3};
  }
  border-radius: 12px;
`,so=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__FeeText",componentId:"sc-45ca7e4-1"})`
  color: ${({theme:e})=>e.neutral2};
`,ao=(0,k.default)(no.X2).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__HeaderButtonWrap",componentId:"sc-45ca7e4-2"})`
  padding: 12px;
  border-radius: 12px;
  width: 180px;
  justify-content: space-between;
  background: ${({theme:e})=>e.surface3};
  cursor: pointer;
  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
  @media screen and (min-width: ${to.T1}) {
    width: 220px;
  }
`,lo=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__HeaderButtonContentWrapper",componentId:"sc-45ca7e4-3"})`
  display: flex;
`,co=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__MarketIcon",componentId:"sc-45ca7e4-4"})`
  height: 20px;
  width: 20px;
  margin-right: 8px;
  outline: 1px solid ${({theme:e})=>e.surface3};
  border-radius: 4px;
  z-index: ${({index:e,totalSelected:t})=>t-e};
  margin-left: ${({index:e})=>(0===e?0:-18)+"px"};
`,po=(0,k.default)(Qe.g8).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__Chevron",componentId:"sc-45ca7e4-5"})`
  height: 20px;
  width: 20px;
  fill: ${({theme:e})=>e.neutral1};
  transition: ${({theme:{transition:{duration:e}}})=>`${e.fast} transform`};
  transform: ${({isOpen:e})=>`rotate(${e?0:180}deg)`};
`,uo=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__ModalWrapper",componentId:"sc-45ca7e4-6"})`
  display: flex;
  flex-direction: column;
  position: relative;
`,fo=(0,k.default)(no.sg).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\SelectMarketplacesDropdown__DropdownWrapper",componentId:"sc-45ca7e4-7"})`
  padding: 16px 0px;
  background-color: ${({theme:e})=>e.surface1};
  display: ${({isOpen:e})=>e?"flex":"none"};
  position: absolute;
  top: 52px;
  width: 100%;
  border-radius: 12px;
  gap: 12px;
  z-index: ${_.k.modalBackdrop};
  box-shadow: ${({theme:e})=>e.deprecated_deepShadow};
  border: 0.5px solid ${({theme:e})=>e.surface3};
`,ho=({setSelectedMarkets:e,selectedMarkets:t})=>{const[n,i]=(0,b.useReducer)((e=>!e),!1),r=(0,b.useMemo)((()=>1===t.length?t[0].name:"Multiple"),[t]),s=(0,b.useRef)(null);return(0,Ht.t)(s,(()=>n&&i())),(0,o.jsxs)(uo,{ref:s,children:[(0,o.jsxs)(ao,{className:Kt.km,onClick:i,children:[(0,o.jsxs)(lo,{children:[t.map(((e,n)=>(0,o.jsx)(co,{totalSelected:t.length,index:n,children:(0,it.Dp)(e.name,"20")},n))),r]}),(0,o.jsx)(po,{isOpen:n,secondaryColor:io.Z4.colors.neutral1})]}),(0,o.jsx)(fo,{isOpen:n,children:Te.map((n=>(({market:e,setSelectedMarkets:t,selectedMarkets:n})=>{const i=n.includes(e),[r,s]=(0,b.useReducer)((e=>!e),!1),a=()=>{1===n.length&&i||t(i?n.filter((t=>t!==e)):[...n,e])};return(0,o.jsxs)(ro,{onMouseEnter:s,onMouseLeave:s,onClick:a,children:[(0,o.jsxs)(no.X2,{gap:"12",onClick:a,children:[(0,it.Dp)(e.name,"24"),(0,o.jsxs)(no.sg,{children:[(0,o.jsx)(C.Tv.BodyPrimary,{children:e.name}),(0,o.jsxs)(so,{className:Kt.VJ,children:[e.fee,"% fee"]})]})]}),(0,o.jsx)(oo.X,{hovered:r,checked:i,onClick:e=>{e.preventDefault(),e.stopPropagation()},children:(0,o.jsx)("span",{})})]})})({market:n,setSelectedMarkets:e,selectedMarkets:t})))})]})},mo=(0,k.default)(no.sg).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\SetDurationModal__ModalWrapper",componentId:"sc-89e097db-0"})`
  gap: 4px;
  position: relative;
`,xo=(0,k.default)(no.X2).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\SetDurationModal__InputWrapper",componentId:"sc-89e097db-1"})`
  padding: 6px 6px 6px 12px;
  border: 1px solid;
  position: relative;
  height: 44px;
  border-radius: 8px;
  border-color: ${({isInvalid:e,theme:t})=>e?t.critical:t.surface3};
  width: 160px;
  justify-content: space-between;
`,go=(0,k.default)(no.X2).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\SetDurationModal__DropdownPrompt",componentId:"sc-89e097db-2"})`
  gap: 4px;
  background-color: ${({theme:e})=>e.surface3};
  cursor: pointer;
  font-weight: 535;
  font-size: 14px;
  line-height: 16px;
  border-radius: 8px;
  padding: 6px 4px 6px 8px;
  white-space: nowrap;
  color: ${({theme:e})=>e.neutral1};

  &:hover {
    opacity: ${({theme:e})=>e.opacity.hover};
  }
`,wo=(0,k.default)(zt.Z).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\SetDurationModal__DropdownChevron",componentId:"sc-89e097db-3"})`
  height: 20px;
  width: 20px;
  color: ${({theme:e})=>e.neutral2};
  transform: ${({isOpen:e})=>e&&"rotate(180deg)"};
  transition: ${({theme:{transition:{duration:e,timing:t}}})=>`transform ${e.fast} ${t.ease}`};
`,bo=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\SetDurationModal__DropdownContainer",componentId:"sc-89e097db-4"})`
  position: absolute;
  top: 48px;
  right: 0px;
  z-index: ${_.k.dropdown};
`,vo=(0,k.default)(no.X2).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\SetDurationModal__ErrorMessage",componentId:"sc-89e097db-5"})`
  color: ${({theme:e})=>e.critical};
  gap: 4px;
  position: absolute;
  top: 44px;
  white-space: nowrap;
`,yo=(0,k.default)(y.Z).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\SetDurationModal__WarningIcon",componentId:"sc-89e097db-6"})`
  width: 16px;
  color: ${({theme:e})=>e.critical};
`;var ko,jo;!function(e){e.hour="hour",e.day="day",e.week="week",e.month="month"}(ko||(ko={})),function(e){e[e.valid=0]="valid",e[e.empty=1]="empty",e[e.overMax=2]="overMax"}(jo||(jo={}));const Co=()=>{const[e,t]=(0,b.useState)(ko.day),[n,i]=(0,b.useState)("7"),[r,s]=(0,b.useState)(jo.valid),a=(0,M.Pc)((e=>e.setGlobalExpiration)),[l,c]=(0,b.useReducer)((e=>!e),!1),p=(0,b.useRef)(null);(0,Ht.t)(p,l?c:void 0);const u=(0,b.useMemo)((()=>[{displayText:"hours",isSelected:e===ko.hour,onClick:()=>{t(ko.hour),c()}},{displayText:"days",isSelected:e===ko.day,onClick:()=>{t(ko.day),c()}},{displayText:"weeks",isSelected:e===ko.week,onClick:()=>{t(ko.week),c()}},{displayText:"months",isSelected:e===ko.month,onClick:()=>{t(ko.month),c()}}]),[e]);let f;switch(e){case ko.hour:f=(0,o.jsx)(d.CN,{value:+n,one:d.t`hour`,other:d.t`hours`});break;case ko.day:f=(0,o.jsx)(d.CN,{value:+n,one:d.t`day`,other:d.t`days`});break;case ko.week:f=(0,o.jsx)(d.CN,{value:+n,one:d.t`week`,other:d.t`weeks`});break;case ko.month:f=(0,o.jsx)(d.CN,{value:+n,one:d.t`month`,other:d.t`months`})}return(0,b.useEffect)((()=>{const t=_o(parseFloat(n),e);1e3*t-Date.now()<O()("60s")||isNaN(t)?s(jo.empty):1e3*t-Date.now()>O()("180d")?s(jo.overMax):s(jo.valid),a(t)}),[n,e,a]),(0,o.jsxs)(mo,{ref:p,children:[(0,o.jsxs)(xo,{isInvalid:r!==jo.valid,children:[(0,o.jsx)(Jt.A,{as:"input",type:"number",pattern:"[0-9]",borderStyle:"none",className:Kt.d1,color:{placeholder:"neutral2",default:"neutral1"},value:n,width:"40",marginRight:"4",backgroundColor:"none",onChange:e=>{i(e.target.value.length?e.target.value:"")},flexShrink:"0"}),(0,o.jsxs)(go,{onClick:c,children:[f," ",(0,o.jsx)(wo,{isOpen:l})]}),l&&(0,o.jsx)(bo,{children:(0,o.jsx)(Yt,{dropDownOptions:u,width:125})})]}),r!==jo.valid&&(0,o.jsxs)(vo,{className:Kt.VJ,children:[" ",(0,o.jsx)(yo,{})," ",r===jo.overMax?"Maximum 6 months":"Set duration"]})]})},_o=(e,t)=>Math.round((Date.now()+O()("1h")*(()=>{switch(t){case ko.hour:return 1;case ko.day:return 24;case ko.week:return 168;default:return 720}})()*e)/1e3);function Po(e,t,n,o,i,r,s){try{var a=e[r](s),l=a.value}catch(c){return void n(c)}a.done?t(l):Promise.resolve(l).then(o,i)}const So=(0,k.default)(u.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__ListingHeader",componentId:"sc-9e8b1cc2-0"})`
  gap: 16px;
  margin-top: 36px;

  @media screen and (min-width: ${j.j$.xs}px) {
    gap: 4px;
  }
`,No=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__ArrowContainer",componentId:"sc-9e8b1cc2-1"})`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 4px;

  @media screen and (min-width: ${j.j$.sm}px) {
    height: 40px;
    width: 40px;
  }
`,Io=(0,k.default)(Ve.Z).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__BackArrow",componentId:"sc-9e8b1cc2-2"})`
  height: 16px;
  width: 16px;
  cursor: pointer;
  color: ${({theme:e})=>e.neutral2};

  @media screen and (min-width: ${j.j$.sm}px) {
    height: 20px;
    width: 20px;
  }
`,Fo=(0,k.default)(f.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__TitleWrapper",componentId:"sc-9e8b1cc2-3"})`
  gap: 4px;
  margin-bottom: 12px;
  white-space: nowrap;
  width: min-content;
  font-weight: 535;
  font-size: 20px;
  line-height: 28px;

  @media screen and (min-width: ${j.j$.xs}px) {
    margin-bottom: 0px;
    font-weight: 535;
    font-size: 28px;
    line-height: 36px;
  }
`,To=(0,k.default)(f.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__ButtonsWrapper",componentId:"sc-9e8b1cc2-4"})`
  gap: 12px;
  width: min-content;
`,$o=k.default.section.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__MarketWrap",componentId:"sc-9e8b1cc2-5"})`
  gap: 48px;
  margin: 0px auto;
  width: 100%;
  max-width: 1200px;
`,Ro=(0,k.default)(f.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__ListingHeaderRow",componentId:"sc-9e8b1cc2-6"})`
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (min-width: ${j.j$.sm}px) {
    padding-left: 40px;
  }
`,Mo=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__GridWrapper",componentId:"sc-9e8b1cc2-7"})`
  margin-top: 24px;
  margin-bottom: 48px;
`,Eo=(0,k.default)(f.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__FloatingConfirmationBar",componentId:"sc-9e8b1cc2-8"})`
  padding: 12px 12px 12px 32px;
  border: 1px solid;
  border-color: ${({theme:e,issues:t})=>t?e.surface3:e.accent1};
  border-radius: 20px;
  white-space: nowrap;
  justify-content: space-between;
  background: ${({theme:e})=>e.surface1};
  position: fixed;
  bottom: 32px;
  width: calc(100vw - ${80}px);
  left: 50%;
  transform: translateX(-50%);
  max-width: ${({theme:e})=>e.maxWidth};
  z-index: ${_.k.under_dropdown};
  box-shadow: ${({theme:e})=>e.deprecated_shallowShadow};

  @media screen and (max-width: ${j.j$.lg}px) {
    bottom: 68px;
  }

  @media screen and (max-width: ${j.j$.sm}px) {
    width: calc(100% - ${32}px);
    padding: 8px 8px 8px 16px;
  }
`,Lo=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__Overlay",componentId:"sc-9e8b1cc2-9"})`
  position: fixed;
  bottom: 0px;
  left: 0px;
  height: 158px;
  width: 100vw;
  background: ${({theme:e})=>`linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, ${e.surface2} 100%)`};
`,Ao=(0,k.default)(C.Tv.SubHeader).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__UsdValue",componentId:"sc-9e8b1cc2-10"})`
  line-height: 24px;
  color: ${({theme:e})=>e.neutral2};
  display: none;

  @media screen and (min-width: ${j.j$.lg}px) {
    display: flex;
  }
`,Oo=(0,k.default)(f.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__ProceedsAndButtonWrapper",componentId:"sc-9e8b1cc2-11"})`
  width: min-content;
  gap: 40px;

  @media screen and (max-width: ${j.j$.sm}px) {
    gap: 20px;
  }
`,Do=(0,k.default)(f.ZP).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__ProceedsWrapper",componentId:"sc-9e8b1cc2-12"})`
  width: min-content;
  gap: 16px;
`,Bo=k.default.span.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\list\\ListPage__EthValueWrapper",componentId:"sc-9e8b1cc2-13"})`
  font-weight: 535;
  font-size: 20px;
  line-height: 28px;
  color: ${({theme:e,totalEthListingValue:t})=>t?e.neutral1:e.neutral2};

  @media screen and (max-width: ${j.j$.sm}px) {
    font-size: 16px;
    line-height: 24px;
  }
`,Zo=()=>{const{formatNumberOrString:e}=(0,P.Gb)(),{setProfilePageState:t}=(0,M.aO)(),n=(0,qe.m)(),r=(0,Ye.z)(),a=(0,E.dD)(),l=(0,s.oO)({modal:i.KO.NFT_LISTING}),{formatCurrencyAmount:c}=(0,P.Gb)(),{setGlobalMarketplaces:p,sellAssets:g,issues:w}=(0,M.Pc)((({setGlobalMarketplaces:e,sellAssets:t,issues:n})=>({setGlobalMarketplaces:e,sellAssets:t,issues:n}))),{listings:v,collectionsRequiringApproval:y,setCollectionStatusAndCallback:k}=(0,M.zM)((({listings:e,collectionsRequiringApproval:t,setCollectionStatusAndCallback:n})=>({listings:e,collectionsRequiringApproval:t,setCollectionStatusAndCallback:n}))),j=(0,b.useMemo)((()=>We(g)),[g]),_=(0,m.Z)(n.chainId),S=(0,x.Z)(j.toString(),_),N=(0,h.sq)(S),I=c({amount:N,type:P.sw.FiatTokenPrice}),[F,T]=(0,b.useReducer)((e=>!e),!1),[$,R]=(0,b.useState)([Te[0]]);Ge(),(0,b.useEffect)((()=>{p($)}),[$,p]);const L={collection_addresses:g.map((e=>e.asset_contract.address)),token_ids:g.map((e=>e.tokenId)),marketplaces:Array.from(new Set(v.map((e=>e.marketplace.name)))),list_quantity:v.length,usd_value:I,...l},A=function(){var e,t=(e=function*(){if(r){(0,s._P)(i.Yz.NFT_SELL_START_LISTING,{...L});for(const t of y)(e=t.status)!==ne.Sb.PAUSED&&e!==ne.Sb.APPROVED&&(a?yield Oe(t,r,k):Oe(t,r,k));var e}},function(){var t=this,n=arguments;return new Promise((function(o,i){var r=e.apply(t,n);function s(e){Po(r,o,i,s,a,"next",e)}function a(e){Po(r,o,i,s,a,"throw",e)}s(void 0)}))});return function(){return t.apply(this,arguments)}}(),O=a?(0,o.jsx)(C.Tv.SubHeader,{children:(0,o.jsx)(d.cC,{children:"Receive"})}):(0,o.jsx)(C.Tv.HeadlineSmall,{lineHeight:"28px",children:(0,o.jsx)(d.cC,{children:"You receive"})});return(0,o.jsxs)(u.ZP,{children:[(0,o.jsxs)($o,{children:[(0,o.jsxs)(So,{children:[(0,o.jsxs)(f.ZP,{children:[(0,o.jsx)(No,{children:(0,o.jsx)(Io,{onClick:()=>t(ne.HA.VIEWING)})}),(0,o.jsx)(C.Tv.BodySmall,{lineHeight:"20px",color:"neutral2",children:(0,o.jsx)(d.cC,{children:"My NFTs"})})]}),(0,o.jsxs)(Ro,{children:[(0,o.jsx)(Fo,{children:(0,o.jsx)(d.cC,{children:"Sell NFTs"})}),(0,o.jsxs)(To,{children:[(0,o.jsx)(ho,{setSelectedMarkets:R,selectedMarkets:$}),(0,o.jsx)(Co,{})]})]})]}),(0,o.jsx)(Mo,{children:(0,o.jsx)(eo,{selectedMarkets:$})})]}),(0,o.jsxs)(Eo,{issues:!!w,children:[O,(0,o.jsxs)(Oo,{children:[(0,o.jsxs)(Do,{children:[(0,o.jsxs)(Bo,{totalEthListingValue:!!j,children:[j>0?e({input:j,type:P.sw.NFTToken}):"-"," ","ETH"]}),!!N&&(0,o.jsx)(Ao,{children:I})]}),(0,o.jsx)(Xe,{onClick:()=>{T(),A()}})]})]}),(0,o.jsx)(Lo,{}),F&&(0,o.jsx)(Gt,{overlayClick:T})]})};var Wo=n(44952),Go=n(80305),Ho=n(71291),zo=n(34385),Xo=n(48714),Vo=n(52873),Yo=n(82743),qo=(n(12143),n(76907)),Uo=n(1285),Jo=n(43328),Ko=n(84820),Qo=n(15511);n(49484);const ei=(0,k.default)(no.sg).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\view\\FilterSidebar__ItemsContainer",componentId:"sc-436ea750-0"})`
  ${Je.Zl}
  height: 100vh;
`,ti=(0,k.default)(Yo.X).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\view\\FilterSidebar__LongLoadingBubble",componentId:"sc-436ea750-1"})`
  min-height: 15px;
  width: 75%;
`,ni=(0,k.default)(Yo.X).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\view\\FilterSidebar__SmallLoadingBubble",componentId:"sc-436ea750-2"})`
  height: 20px;
  width: 20px;
  margin-right: 8px;
`,oi=(0,k.default)(no.X2).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\view\\FilterSidebar__MobileMenuHeader",componentId:"sc-436ea750-3"})`
  justify-content: space-between;
  padding-bottom: 8px;
`,ii=({style:e})=>(0,o.jsxs)(no.X2,{display:"flex",justifyContent:"space-between",style:e,paddingLeft:"12",paddingRight:"16",children:[(0,o.jsxs)(no.X2,{display:"flex",flex:"1",children:[(0,o.jsx)(ni,{}),(0,o.jsx)(ti,{})]}),(0,o.jsx)(Go.n,{as:"span",borderColor:"surface3",className:"rgw6ez453 rgw6ezq9 rgw6ez80l rgw6ez19f rgw6ez12f rgw6ez7zp rgw6ez89d","aria-hidden":"true"})]}),ri=({fetchNextPage:e,hasNextPage:t,isFetchingNextPage:n,walletCollections:i})=>{const r=(0,M.Pr)((e=>e.collectionFilters)),s=(0,M.Pr)((e=>e.setCollectionFilters)),[a,l]=(0,M.wx)(),c=(0,E.dD)(),{sidebarX:d}=(0,qo.q_)({sidebarX:a?0:-360,config:{duration:nt.Kd.medium,easing:qo.Z5.easeOutSine}}),p=(0,b.useMemo)((()=>{var e;return i&&(null===(e=i)||void 0===e?void 0:e.length)>=Ai||n}),[i,n]);return(0,o.jsx)(Go.x,{position:{sm:"fixed",md:"sticky"},top:{sm:"0",md:"72"},left:{sm:"0",md:"unset"},width:{sm:"full",md:"332",lg:"332"},height:{sm:"full",md:"auto"},zIndex:{sm:"modal",md:"auto"},display:a?"flex":"none",style:{transform:c?void 0:d.to((e=>`translateX(${e}px)`))},background:"surface2",children:(0,o.jsxs)(Go.n,{paddingTop:{sm:"24",md:"0"},paddingLeft:{sm:"16",md:"0"},paddingRight:"16",width:{sm:"full",md:"332",lg:"332"},children:[c&&(0,o.jsxs)(oi,{children:[(0,o.jsx)(C.Tv.HeadlineSmall,{children:"Filter"}),(0,o.jsx)(Qe.DX,{height:28,width:28,fill:io.Z4.colors.neutral1,onClick:()=>l(!1)})]}),(0,o.jsx)(si,{collections:i,collectionFilters:r,setCollectionFilters:s,fetchNextPage:e,hasNextPage:t,isFetchingNextPage:n,hideSearch:p})]})})},si=({collections:e,collectionFilters:t,setCollectionFilters:n,fetchNextPage:i,hasNextPage:r,isFetchingNextPage:s,hideSearch:a})=>{const[l,c]=(0,b.useState)(""),[d,p]=(0,b.useState)(e);(0,b.useEffect)((()=>{if(l){const t=e.filter((e=>{var t;return null===(t=e.name)||void 0===t?void 0:t.toLowerCase().includes(l.toLowerCase())}));p(t)}else p(e)}),[l,e]);const u=(0,b.useCallback)(((e,t)=>{if(!t)return e;return`${t[e].address}_${e}`}),[]),f=r?d.length+1:d.length,h=s?Qo.Z:i,m=(0,b.useCallback)((e=>!r||e<d.length),[d.length,r]),x=(0,b.useCallback)((({index:e,style:i})=>!(!!d&&d[e])||s?(0,o.jsx)(ii,{style:i},e):(0,o.jsx)(li,{style:i,collection:d[e],collectionFilters:t,setCollectionFilters:n},u(e,d))),[d,s,u,t,n]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Go.n,{className:Kt.v4,marginTop:"12",marginBottom:"16",width:"276",children:"Collections"}),(0,o.jsx)(Go.n,{paddingBottom:"12",borderRadius:"8",children:(0,o.jsxs)(no.sg,{as:"ul",paddingLeft:"0",gap:"10",style:{maxHeight:"80vh"},children:[!a&&(0,o.jsx)(ai,{collectionSearchText:l,setCollectionSearchText:c}),(0,o.jsx)(ei,{children:(0,o.jsx)(Uo.ZP,{disableWidth:!0,children:({height:e})=>(0,o.jsx)(Ko.Z,{isItemLoaded:m,itemCount:f,loadMoreItems:h,children:({onItemsRendered:t,ref:n})=>(0,o.jsx)(Jo.t7,{height:e,width:"100%",itemCount:f,itemSize:44,onItemsRendered:t,itemKey:u,ref:n,children:x})})})})]})})]})},ai=({collectionSearchText:e,setCollectionSearchText:t})=>(0,o.jsx)(Jt.I,{placeholder:"Search",marginTop:"8",marginBottom:"8",autoComplete:"off",position:"static",width:"full",value:e,onChange:e=>t(e.currentTarget.value)}),li=({collection:e,collectionFilters:t,setCollectionFilters:n,style:i})=>{const[r,s]=(0,b.useState)(!1),[a,l]=(0,b.useReducer)((e=>!e),!1),c=(0,b.useCallback)((e=>t.some((t=>t===e))),[t]),d=()=>{s(!r),n(e.address)};return(0,o.jsxs)(no.X2,{maxWidth:"full",overflowX:"hidden",overflowY:"hidden",fontWeight:"book",className:"_1bw5dlr3 rgw6ezd3 rgw6ezb9 rgw6ezdr",justifyContent:"space-between",cursor:"pointer",paddingLeft:"12",paddingRight:"16",borderRadius:"12",style:{paddingBottom:"22px",paddingTop:"22px",...i},maxHeight:"44",as:"li",onMouseEnter:l,onMouseLeave:l,onClick:d,children:[(0,o.jsxs)(no.X2,{children:[(0,o.jsx)(Go.n,{as:"img",borderRadius:"round",width:"20",height:"20",src:e.image}),(0,o.jsxs)(Go.n,{as:"span",whiteSpace:"nowrap",textOverflow:"ellipsis",overflow:"hidden",paddingLeft:"12",paddingRight:"14",style:{minHeight:15,maxWidth:"180px"},children:[e.name," "]})]}),(0,o.jsx)(oo.X,{checked:c(e.address),hovered:a,onChange:d,children:(0,o.jsx)(Go.n,{as:"span",color:"neutral3",marginRight:"12",marginLeft:"auto",children:e.count})})]})};var ci,di=n(40976),pi=n(10581),ui=n(31915),fi=n(61049);function hi(e,t,n,o,i,r,s){try{var a=e[r](s),l=a.value}catch(c){return void n(c)}a.done?t(l):Promise.resolve(l).then(o,i)}function mi(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var r=e.apply(t,n);function s(e){hi(r,o,i,s,a,"next",e)}function a(e){hi(r,o,i,s,a,"throw",e)}s(void 0)}))}}!function(e){e[e.SHORT=5e3]="SHORT",e[e.MEDIUM=15e3]="MEDIUM",e[e.LONG=6e4]="LONG"}(ci||(ci={}));const xi=function(){var e=mi((function*({params:e}){let t=!1;if(!e)return[];for(const i of Object.values(e))void 0===i&&(t=!0);if(t)return[];const n=yield fetch(`https://api.opensea.io/api/v1/collections?${new URLSearchParams(e).toString()}`),o=yield n.json();return o?o.filter((e=>e.primary_asset_contracts.length)).map((e=>({address:e.primary_asset_contracts[0].address,name:e.name,image:e.image_url,count:e.owned_asset_count}))):[]}));return function(t){return e.apply(this,arguments)}}();var gi=n(41218),wi=n(23173);const bi=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__SkeletonBodyWrapper",componentId:"sc-a6ba35bc-0"})`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 18px;
`,vi=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__SkeletonRowWrapper",componentId:"sc-a6ba35bc-1"})`
  display: flex;
  flex-direct: row;
  width: 100%;
`,yi=(0,k.default)(vi).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__AccountDetailsSkeletonWrapper",componentId:"sc-a6ba35bc-2"})`
  gap: 12px;
  margin-bottom: 30px;
`,ki=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__ProfileDetailsSkeleton",componentId:"sc-a6ba35bc-3"})`
  width: 180px;
  height: 36px;
  border-radius: 12px;
`,ji=(0,k.default)(vi).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__FilterBarSkeletonWrapper",componentId:"sc-a6ba35bc-4"})`
  justify-content: space-between;
`,Ci=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__FilterButtonSkeleton",componentId:"sc-a6ba35bc-5"})`
  width: 92px;
  height: 44px;
  border-radius: 12px;
`,_i=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__SellButtonSkeleton",componentId:"sc-a6ba35bc-6"})`
  width: 80px;
  height: 44px;
  border-radius: 12px;
`,Pi=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePageLoadingSkeleton__ProfileAssetCardSkeleton",componentId:"sc-a6ba35bc-7"})`
  width: 100%;
  height: 330px;
  border-radius: 20px;
`,Si=()=>(0,o.jsx)(Go.n,{width:"full",className:zo.P,children:Array.from(Array(Li),((e,t)=>(0,o.jsx)(Pi,{className:wi.S},t)))}),Ni=()=>(0,o.jsxs)(bi,{children:[(0,o.jsx)(yi,{children:(0,o.jsx)(ki,{className:wi.S})}),(0,o.jsxs)(ji,{children:[(0,o.jsx)(Ci,{className:wi.S}),(0,o.jsx)(_i,{className:wi.S})]}),(0,o.jsx)(Si,{})]});var Ii=n(2798),Fi=n(42601),Ti=n(6282);const $i=({asset:e,mediaShouldBePlaying:t,setCurrentTokenPlayingMedia:n,hideDetails:r})=>{const a=(0,M.Pc)((e=>e.sellAssets)),l=(0,M.Pc)((e=>e.selectSellAsset)),c=(0,M.Pc)((e=>e.removeSellAsset)),p=(0,M.cP)((e=>e.bagExpanded)),u=(0,M.cP)((e=>e.toggleBag)),f=(0,E.dD)(),h=(0,Ti.s0)(),m=(0,b.useMemo)((()=>a.some((t=>t.tokenId===e.tokenId&&t.asset_contract.address===e.asset_contract.address))),[e,a]),x=(0,s.oO)(),g=t=>{t?c(e):(l(e),(0,s._P)(i.Yz.NFT_SELL_ITEM_ADDED,{collection_address:e.asset_contract.address,token_id:e.tokenId,...x})),p||a.find((t=>t.tokenId===e.tokenId&&t.asset_contract.address===e.asset_contract.address))||f||u()},w=e.susFlag,v=(0,b.useMemo)((()=>({primaryInfo:!!e.asset_contract.name&&e.asset_contract.name,primaryInfoIcon:e.collectionIsVerified&&(0,o.jsx)(Qe.SA,{height:"16px",width:"16px"}),secondaryInfo:e.name||e.tokenId?e.name??`#${e.tokenId}`:null,selectedInfo:(0,o.jsx)(d.cC,{children:"Remove from bag"}),notSelectedInfo:(0,o.jsx)(d.cC,{children:"List for sale"}),disabledInfo:(0,o.jsx)(d.cC,{children:"Unavailable for listing"})})),[e.asset_contract.name,e.collectionIsVerified,e.name,e.tokenId]);return(0,o.jsx)(Ii.y,{asset:e,display:v,isSelected:m,isDisabled:Boolean(w),selectAsset:()=>g(!1),unselectAsset:()=>g(!0),onButtonClick:()=>g(m),onCardClick:()=>{r||h((0,Fi.VL)(e))},mediaShouldBePlaying:t,setCurrentTokenPlayingMedia:n,testId:"nft-profile-asset"})},Ri=(0,k.default)(no.sg).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePage__ProfilePageColumn",componentId:"sc-9fbd9c13-0"})`
  ${di.bc}
`,Mi=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePage__ProfileHeader",componentId:"sc-9fbd9c13-1"})`
  font-size: 28px;
  font-weight: 535;
  line-height: 38px;
  padding-bottom: 16px;
  margin-bottom: 8px;
  border-bottom: 1px solid ${({theme:e})=>e.surface3};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 0px;
  }
`,Ei=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\components\\profile\\view\\ProfilePage__EmptyStateContainer",componentId:"sc-9fbd9c13-2"})`
  margin-top: 164px;
`,Li=25,Ai=300,Oi=()=>{const{address:e}=(0,M.tM)(),t=(0,M.Pr)((e=>e.walletCollections)),n=(0,M.Pr)((e=>e.setWalletCollections)),{resetSellAssets:i}=(0,M.Pc)((({reset:e})=>({resetSellAssets:e}))),r=(0,M.Pc)((e=>e.sellAssets)),s=(0,M.cP)((e=>e.toggleBag)),[a,l]=(0,M.wx)(),c=(0,E.dD)(),{data:d,fetchNextPage:p,hasNextPage:u,isFetchingNextPage:f,isSuccess:h}=(0,ui.N)(function(e){return(0,fi.t)({queryKey:["ownerCollections",{address:e}],queryFn:function(){var t=mi((function*({pageParam:t}){const n={asset_owner:e,offset:""+t*Ai,limit:`${Ai}`};return{data:yield xi(n),nextPage:t+1}}));return function(e){return t.apply(this,arguments)}}(),initialPageParam:0,getNextPageParam:e=>0===e.data.length?void 0:e.nextPage,refetchInterval:ci.MEDIUM})}(e)),m=(0,b.useMemo)((()=>{var e;return h?null===(e=d)||void 0===e?void 0:e.pages.map((e=>e.data)).flat():null}),[h,d]);return(0,b.useEffect)((()=>{m&&n(m)}),[m,n]),(0,o.jsxs)(Ri,{width:"full",paddingTop:{sm:"16",md:"40"},children:[(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Mi,{children:"My NFTs"}),(0,o.jsxs)(no.X2,{alignItems:"flex-start",position:"relative",children:[(0,o.jsx)(ri,{fetchNextPage:p,hasNextPage:u,isFetchingNextPage:f,walletCollections:t}),(!c||!a)&&(0,o.jsx)(b.Suspense,{fallback:(0,o.jsx)(Ni,{}),children:(0,o.jsx)(Di,{walletCollections:t,isFiltersExpanded:a,setFiltersExpanded:l})})]})]}),r.length>0&&(0,o.jsxs)(no.X2,{display:{sm:"flex",md:"none"},position:"fixed",left:"16",height:"56",borderRadius:"12",paddingX:"16",paddingY:"12",background:"surface1",borderStyle:"solid",borderColor:"surface3",borderWidth:"1px",style:{bottom:"68px",width:"calc(100% - 32px)",lineHeight:"24px"},className:Kt.v4,children:[r.length," NFT",1===r.length?"":"s",(0,o.jsx)(Go.n,{fontWeight:"medium",fontSize:"14",cursor:"pointer",color:"neutral2",marginRight:"20",marginLeft:"auto",onClick:i,lineHeight:"16",children:"Clear"}),(0,o.jsx)(Go.n,{color:"white",marginRight:"0",fontWeight:"medium",fontSize:"14",cursor:"pointer",backgroundColor:"accent1",onClick:s,lineHeight:"16",borderRadius:"12",paddingY:"8",paddingX:"28",children:"List for sale"})]})]})},Di=({walletCollections:e,isFiltersExpanded:t,setFiltersExpanded:n})=>{var i,r,s,a,l;const{address:c}=(0,M.tM)(),d=(0,M.Pr)((e=>e.setCollectionFilters)),p=(0,M.Pr)((e=>e.collectionFilters)),u=(0,M.Pr)((e=>e.clearCollectionFilters)),f=(0,M.cP)((e=>e.bagExpanded)),[h,m]=(0,b.useState)(),x=(0,E.dD)(),g=(0,M.Pc)((e=>e.sellAssets)),{walletAssets:w,loading:v,hasNext:y,loadMore:k}=(0,Wo.b)(c,p,[],Li),{gridX:j}=(0,qo.q_)({gridX:t?300:-16,config:{duration:250,easing:qo.Z5.easeOutSine}});return v?(0,o.jsx)(Ni,{}):(0,o.jsx)(no.sg,{width:"full",children:0===(null===(i=w)||void 0===i?void 0:i.length)?(0,o.jsx)(Ei,{children:(0,o.jsx)(gi.f,{})}):(0,o.jsxs)(Go.x,{flexShrink:"0",position:x&&f?"fixed":"static",style:{transform:j.to((e=>`translate(${Number(e)-(!x&&t?300:-16)}px)`))},paddingY:"20",children:[(0,o.jsx)(no.X2,{gap:"8",flexWrap:"nowrap",justifyContent:"space-between",children:(0,o.jsx)(Xo.L,{isMobile:x,isFiltersExpanded:t,onClick:()=>n(!t)})}),(0,o.jsx)(no.X2,{children:(0,o.jsx)(Bi,{collections:e,collectionFilters:p,setCollectionFilters:d,clearCollectionFilters:u})}),(0,o.jsx)(pi.Z,{next:k,hasMore:y??!1,loader:Boolean(y&&(null===(r=w)||void 0===r?void 0:r.length))&&(0,o.jsx)(Ho.p,{count:Li}),dataLength:(null===(s=w)||void 0===s?void 0:s.length)??0,className:(null===(a=w)||void 0===a?void 0:a.length)?zo.P:void 0,style:{overflow:"unset"},children:(null===(l=w)||void 0===l?void 0:l.length)?w.map(((e,t)=>(0,o.jsx)("div",{children:(0,o.jsx)($i,{asset:e,mediaShouldBePlaying:e.tokenId===h,setCurrentTokenPlayingMedia:m,hideDetails:g.length>0})},t))):null})]})})},Bi=({collections:e,collectionFilters:t,setCollectionFilters:n,clearCollectionFilters:i})=>{var r,s;const a=t=>{var n;return null===(n=e)||void 0===n?void 0:n.find((e=>e.address===t))},l=(0,b.useCallback)((()=>i()),[i]);return(0,o.jsxs)(no.X2,{paddingY:"18",gap:"8",flexWrap:"wrap",children:[Boolean(null===(r=t)||void 0===r?void 0:r.length)&&t.map(((e,t)=>(0,o.jsx)(Zi,{collection:a(e),setCollectionFilters:n},`CollectionFilterItem-${e}-${t}`))),Boolean(null===(s=t)||void 0===s?void 0:s.length)&&(0,o.jsx)(Vo.v,{onClick:l,children:"Clear all"})]})},Zi=({collection:e,setCollectionFilters:t})=>{var n;return e?(0,o.jsxs)(no.X2,{justifyContent:"center",paddingTop:"6",paddingRight:"6",paddingBottom:"6",paddingLeft:"12",borderRadius:"8",background:"surface3",fontSize:"14",children:[(0,o.jsx)(Go.n,{as:"img",borderRadius:"round",width:"20",height:"20",src:e.image}),(0,o.jsx)(Go.n,{marginLeft:"6",className:"_1bw5dlr8",children:null===(n=e)||void 0===n?void 0:n.name}),(0,o.jsx)(Go.n,{color:"neutral2",background:"none",height:"28",width:"28",padding:"0",as:"button",border:"none",cursor:"pointer",onClick:()=>t(e.address),children:(0,o.jsx)(Qe.aM,{})})]}):null};var Wi=n(437),Gi=n(13446);const Hi=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\pages\\profile\\index__ProfilePageWrapper",componentId:"sc-cc3cfb91-0"})`
  height: 100%;
  width: 100%;
  scrollbar-width: none;

  @media screen and (min-width: ${j.j$.lg}px) {
    height: auto;
  }
`,zi=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\pages\\profile\\index__LoadedAccountPage",componentId:"sc-cc3cfb91-1"})`
  width: calc(
    100% -
      ${({cartExpanded:e,isListingNfts:t})=>t?80:e?p.zD:0}px
  );
  margin: 0px ${({isListingNfts:e})=>e?40:0}px;

  @media screen and (max-width: ${j.j$.sm}px) {
    width: calc(100% - ${({isListingNfts:e})=>e?32:0}px);
    margin: 0px ${({isListingNfts:e})=>e?16:0}px;
  }
`,Xi=k.default.div.withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\pages\\profile\\index__Center",componentId:"sc-cc3cfb91-2"})`
  left: 50%;
  top: 40%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  white-space: nowrap;
`,Vi=(0,k.default)(l.DF).withConfig({displayName:"F:\\work\\current\\apps\\web\\src\\nft\\pages\\profile\\index__ConnectWalletButton",componentId:"sc-cc3cfb91-3"})`
  width: min-content;
  white-space: nowrap;
  border-radius: 12px;
  padding: 14px 18px;
  border: none;
`;function Yi(e,t){return e?t?(0,d.t)("{{name}}'s NFT collection on Uniswap",{name:t}):(0,d.t)("NFT collection on Uniswap - {{address}}",{address:(0,Gi.Xn)(e)}):d.t`NFT collection on Uniswap`}function qi(){const e=(0,M.aO)((e=>e.state)),t=(0,M.aO)((e=>e.setProfilePageState)),n=(0,M.Pc)((e=>e.reset)),l=(0,M.Pr)((e=>e.clearCollectionFilters)),{account:p}=(0,r.G)(),{ENSName:u}=(0,c.Z)(p),f=(0,b.useRef)(p),h=(0,a.LK)();(0,b.useEffect)((()=>{f.current!==p&&(f.current=p,n(),t(ne.HA.VIEWING),l())}),[p,n,t,l]);const m=(0,M.cP)((e=>e.bagExpanded)),x=e===ne.HA.LISTING;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(Wi.Helmet,{children:(0,o.jsx)("title",{children:Yi(p,u)})}),(0,o.jsx)(s.fM,{page:i.yJ.NFT_PROFILE_PAGE,shouldLogImpression:!0,children:(0,o.jsx)(Hi,{children:p?(0,o.jsx)(zi,{cartExpanded:m,isListingNfts:x,children:x?(0,o.jsx)(Zo,{}):(0,o.jsx)(Oi,{})}):(0,o.jsxs)(Xi,{children:[(0,o.jsx)(C.Tv.HeadlineMedium,{lineHeight:"36px",color:"neutral2",fontWeight:"535",marginBottom:"24px",children:(0,o.jsx)(d.cC,{children:"No items to display"})}),(0,o.jsx)(Vi,{onClick:h,children:(0,o.jsx)(C.Tv.SubHeader,{color:"white",lineHeight:"20px",children:(0,o.jsx)(d.cC,{children:"Connect wallet"})})})]})})})]})}}}]);
//# sourceMappingURL=5773.20e0db14.chunk.js.map