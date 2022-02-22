"use strict";(self.webpackChunk_owlprotocol_web3_redux_docs=self.webpackChunk_owlprotocol_web3_redux_docs||[]).push([[6187],{9613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,a(a({ref:t},s),{},{components:r})):n.createElement(f,a({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2459:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return s},default:function(){return d}});var n=r(7813),o=r(7044),i=(r(9496),r(9613)),a=["components"],c={sidebar_position:6,label:"Conclusion"},u="Conclusion",l={unversionedId:"web3-redux-quickstart/conclusion",id:"web3-redux-quickstart/conclusion",title:"Conclusion",description:"Summary",source:"@site/docs/web3-redux-quickstart/conclusion.md",sourceDirName:"web3-redux-quickstart",slug:"/web3-redux-quickstart/conclusion",permalink:"/docs/web3-redux-quickstart/conclusion",editUrl:"https://github.com/owlprotocol/web3-redux/tree/master/docusaurus/docs/web3-redux-quickstart/conclusion.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,label:"Conclusion"},sidebar:"tutorialSidebar",previous:{title:"Contract Event",permalink:"/docs/web3-redux-quickstart/contract_event"},next:{title:"index",permalink:"/docs/web3-redux-hooks/"}},s=[{value:"Summary",id:"summary",children:[],level:2},{value:"Where to go from here",id:"where-to-go-from-here",children:[],level:2}],p={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"conclusion"},"Conclusion"),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"You should now be able to do the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Configure the Web3-Redux store"),(0,i.kt)("li",{parentName:"ul"},"Add a Network & Contract to the store"),(0,i.kt)("li",{parentName:"ul"},"Make a contract call"),(0,i.kt)("li",{parentName:"ul"},"Fetch past events"),(0,i.kt)("li",{parentName:"ul"},"Sync new events")),(0,i.kt)("h2",{id:"where-to-go-from-here"},"Where to go from here"),(0,i.kt)("p",null,"Now that you've completed this initial quickstart, consider the following topics depending on your needs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Hooks: Explore some of our optimized pre-configured hooks for ERC20, ERC721, ERC1155."),(0,i.kt)("li",{parentName:"ul"},"Multi-network: Understand the Web3-Redux Architecture and fetch data concurrently from multiple blockchains."),(0,i.kt)("li",{parentName:"ul"},"Metamask: Integrate Metamask to enable sending transactions that writes data on the blockchain."),(0,i.kt)("li",{parentName:"ul"},"Persistence: Enable local storage persistence using ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/rt2zz/redux-persist"},"redux-persist")," to immediately populate your app with cached data when users re-open a tab"),(0,i.kt)("li",{parentName:"ul"},"Sync Optimization: Learn how to optimize the RPC requests made by your app by only refreshing data when needed by efficiently combining event subscriptions with contract calls.")))}d.isMDXComponent=!0}}]);