"use strict";(self.webpackChunk_owlprotocol_web3_redux_docs=self.webpackChunk_owlprotocol_web3_redux_docs||[]).push([[843],{9613:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(9496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var d=r.createContext({}),o=function(e){var n=r.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=o(e.components);return r.createElement(d.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,d=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=o(t),m=i,f=u["".concat(d,".").concat(m)]||u[m]||s[m]||l;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=u;var c={};for(var d in n)hasOwnProperty.call(n,d)&&(c[d]=n[d]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var o=2;o<l;o++)a[o]=t[o];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3726:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return o},toc:function(){return p},default:function(){return u}});var r=t(7813),i=t(7044),l=(t(9496),t(9613)),a=["components"],c={id:"Sync.EventSync",title:"Interface: EventSync",sidebar_label:"EventSync",custom_edit_url:null},d=void 0,o={unversionedId:"web3-redux-reference/interfaces/Sync.EventSync",id:"web3-redux-reference/interfaces/Sync.EventSync",title:"Interface: EventSync",description:"Sync.EventSync",source:"@site/docs/web3-redux-reference/interfaces/Sync.EventSync.md",sourceDirName:"web3-redux-reference/interfaces",slug:"/web3-redux-reference/interfaces/Sync.EventSync",permalink:"/web3-redux/docs/web3-redux-reference/interfaces/Sync.EventSync",editUrl:null,tags:[],version:"current",frontMatter:{id:"Sync.EventSync",title:"Interface: EventSync",sidebar_label:"EventSync",custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"BlockSync",permalink:"/web3-redux/docs/web3-redux-reference/interfaces/Sync.BlockSync"},next:{title:"TransactionSync",permalink:"/web3-redux/docs/web3-redux-reference/interfaces/Sync.TransactionSync"}},p=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"actions",id:"actions",children:[{value:"Inherited from",id:"inherited-from",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"id",id:"id",children:[{value:"Inherited from",id:"inherited-from-1",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"matchAddress",id:"matchaddress",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"matchName",id:"matchname",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"matchReturnValues",id:"matchreturnvalues",children:[{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"networkId",id:"networkid",children:[{value:"Inherited from",id:"inherited-from-2",children:[],level:4},{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3},{value:"type",id:"type",children:[{value:"Overrides",id:"overrides",children:[],level:4},{value:"Defined in",id:"defined-in-6",children:[],level:4}],level:3}],level:2}],s={toc:p};function u(e){var n=e.components,t=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/web3-redux/docs/web3-redux-reference/namespaces/Sync"},"Sync"),".EventSync"),(0,l.kt)("p",null,"Sync middleware to handle ",(0,l.kt)("a",{parentName:"p",href:"./ContractEvent.ContractEvent-1"},"ContractEvent")," CREATE/UPDATE actions."),(0,l.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"BaseSync")),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"EventSync"))))),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"actions"},"actions"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"actions"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"AnyAction"),"[]"),(0,l.kt)("p",null,"Actions to dispatch when triggered"),(0,l.kt)("h4",{id:"inherited-from"},"Inherited from"),(0,l.kt)("p",null,"BaseSync.actions"),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/leovigna/web3-redux/blob/be15552/src/sync/model/BaseSync.ts#L15"},"src/sync/model/BaseSync.ts:15")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"id"},"id"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"id"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Used to index in redux-orm."),(0,l.kt)("h4",{id:"inherited-from-1"},"Inherited from"),(0,l.kt)("p",null,"BaseSync.id"),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/leovigna/web3-redux/blob/be15552/src/sync/model/BaseSync.ts#L9"},"src/sync/model/BaseSync.ts:9")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"matchaddress"},"matchAddress"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"matchAddress"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/leovigna/web3-redux/blob/be15552/src/sync/model/EventSync.ts#L8"},"src/sync/model/EventSync.ts:8")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"matchname"},"matchName"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"matchName"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/leovigna/web3-redux/blob/be15552/src/sync/model/EventSync.ts#L9"},"src/sync/model/EventSync.ts:9")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"matchreturnvalues"},"matchReturnValues"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,l.kt)("strong",{parentName:"p"},"matchReturnValues"),": { ",(0,l.kt)("inlineCode",{parentName:"p"},"[k: string]"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"any"),";  } ","|"," { ",(0,l.kt)("inlineCode",{parentName:"p"},"[k: string]"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"any"),";  }[]"),(0,l.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/leovigna/web3-redux/blob/be15552/src/sync/model/EventSync.ts#L10"},"src/sync/model/EventSync.ts:10")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"networkid"},"networkId"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"networkId"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"string")),(0,l.kt)("p",null,"Network Id to filter on"),(0,l.kt)("h4",{id:"inherited-from-2"},"Inherited from"),(0,l.kt)("p",null,"BaseSync.networkId"),(0,l.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/leovigna/web3-redux/blob/be15552/src/sync/model/BaseSync.ts#L13"},"src/sync/model/BaseSync.ts:13")),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"type"},"type"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"type"),": ",(0,l.kt)("inlineCode",{parentName:"p"},'"Event"')),(0,l.kt)("h4",{id:"overrides"},"Overrides"),(0,l.kt)("p",null,"BaseSync.type"),(0,l.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/leovigna/web3-redux/blob/be15552/src/sync/model/EventSync.ts#L7"},"src/sync/model/EventSync.ts:7")))}u.isMDXComponent=!0}}]);