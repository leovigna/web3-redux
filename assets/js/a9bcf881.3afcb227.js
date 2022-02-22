"use strict";(self.webpackChunk_owlprotocol_web3_redux_docs=self.webpackChunk_owlprotocol_web3_redux_docs||[]).push([[5280],{9613:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return m}});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,s(s({ref:t},i),{},{components:r})):n.createElement(f,s({ref:t},i))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},226:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return i},default:function(){return d}});var n=r(7813),a=r(7044),o=(r(9496),r(9613)),s=["components"],c={},u="Hooks",l={unversionedId:"web3-redux-hooks/index",id:"web3-redux-hooks/index",title:"Hooks",description:"To easily read/sync data, we recommend using the built-in hooks when possible to automatically combine selectors & action dispatchers.",source:"@site/docs/web3-redux-hooks/index.md",sourceDirName:"web3-redux-hooks",slug:"/web3-redux-hooks/",permalink:"/web3-redux/docs/web3-redux-hooks/",editUrl:"https://github.com/owlprotocol/web3-redux/tree/master/docusaurus/docs/web3-redux-hooks/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Conclusion",permalink:"/web3-redux/docs/web3-redux-quickstart/conclusion"},next:{title:"useBlock",permalink:"/web3-redux/docs/web3-redux-hooks/useBlock"}},i=[],p={toc:i};function d(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hooks"},"Hooks"),(0,o.kt)("p",null,"To easily read/sync data, we recommend using the built-in hooks when possible to automatically combine selectors & action dispatchers."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"EVM Blockchain")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/web3-redux/docs/web3-redux-reference/namespaces/Block#useBlock"},"useBlock"),": Fetch specific block."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/web3-redux/docs/web3-redux-reference/namespaces/Network#useLatestBlock"},"useLatestBlock"),": Fetch latest block (TBD currently just fetches latest block in store and does not query network)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/web3-redux/docs/web3-redux-reference/namespaces/Block#useBlockSync"},"useBlockSync"),": Subscribe to new blocks."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/web3-redux/docs/web3-redux-reference/namespaces/Transaction#useTransaction"},"useTransaction"),": Fetch specific transaction.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Smart Contracts / Externally Owned Accounts")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/web3-redux/docs/web3-redux-reference/namespaces/Contract#useGetBalance"},"useGetBalance"),": Get balance of address."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/web3-redux/docs/web3-redux-reference/namespaces/Contract#useGetNonce"},"useGetNonce"),": Get nonce (tx count) of address."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/web3-redux/docs/web3-redux-reference/namespaces/Contract#useGetCode"},"useGetCode"),": Get code of address. ",(0,o.kt)("inlineCode",{parentName:"li"},"0x")," indicates an EOA."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/web3-redux/docs/web3-redux-reference/namespaces/Contract#useContractCall"},"useContractCall"),": Make a contract call."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/web3-redux/docs/web3-redux-reference/namespaces/Contract#useEvents"},"useEvents"),": Get past or sync contract event logs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/web3-redux/docs/web3-redux-reference/namespaces/Contract#useSupportsInterface"},"useSupportsInterface"),": Check if contract supports interface using ERC165."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/web3-redux/docs/web3-redux-reference/namespaces/Contract#useERC20"},"useERC20"),": Common ERC20 contract calls and events."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/web3-redux/docs/web3-redux-reference/namespaces/Contract#useERC721"},"useERC721"),": Common ERC721 contract calls and events."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/web3-redux/docs/web3-redux-reference/namespaces/Contract#useERC1155"},"useERC1155"),": Common ERC1155 contract calls and events.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"IPFS")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/web3-redux/docs/web3-redux-reference/namespaces/Ipfs#useIpfs"},"useIpfs"),": Fetch IPFS resource using content hash.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Etherscan API")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/web3-redux/docs/web3-redux-reference/namespaces/Contract#useFetchAbi"},"useFetchAbi"),": Fetch contract ABI using Etherscan API."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/web3-redux/docs/web3-redux-reference/namespaces/Contract#useFetchTransaction"},"useFetchTransactions"),": Fetch transactions for address using Etherscan API.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Experimental")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/web3-redux/docs/web3-redux-reference/namespaces/ContractEvent#useGetPastLogs"},"useGetPastLogs"),": Fetch past logs using raw subscribe filter. Enables syncing event across multiple smart contracts efficiently. (TBD)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/web3-redux/docs/web3-redux-reference/namespaces/ContractEvent#useGetAssets"},"useGetAssets"),": Fetch all ERC20/ERC721/ERC1155 ",(0,o.kt)("inlineCode",{parentName:"li"},"Transfer")," events associated with an ",(0,o.kt)("inlineCode",{parentName:"li"},"address")," to get a theoretical subset of all assets that ",(0,o.kt)("inlineCode",{parentName:"li"},"address")," potentially owns. Not guaranteed to work with non-interface compliant assets but offers an alternative to off-chain indexing. ",(0,o.kt)("strong",{parentName:"li"},"(TBD)"))))}d.isMDXComponent=!0}}]);