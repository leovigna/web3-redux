"use strict";(self.webpackChunk_owlprotocol_web3_redux_docs=self.webpackChunk_owlprotocol_web3_redux_docs||[]).push([[6762],{9613:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),l=s(r),m=o,f=l["".concat(c,".").concat(m)]||l[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=l;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},173:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return l}});var n=r(7813),o=r(7044),a=(r(9496),r(9613)),i=["components"],u={sidebar_position:2,label:"Configure Store"},c="Initialize the Redux Store",s={unversionedId:"web3-redux-quickstart/add_store",id:"web3-redux-quickstart/add_store",title:"Initialize the Redux Store",description:"In this quickstart example, we will be using the default Web3-Redux store. You may have a more complex setup depending on your needs however:",source:"@site/docs/web3-redux-quickstart/add_store.md",sourceDirName:"web3-redux-quickstart",slug:"/web3-redux-quickstart/add_store",permalink:"/docs/web3-redux-quickstart/add_store",editUrl:"https://github.com/owlprotocol/web3-redux/tree/master/docusaurus/docs/web3-redux-quickstart/add_store.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,label:"Configure Store"},sidebar:"tutorialSidebar",previous:{title:"Install",permalink:"/docs/web3-redux-quickstart/install"},next:{title:"Configure Network",permalink:"/docs/web3-redux-quickstart/add_network"}},d=[],p={toc:d};function l(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"initialize-the-redux-store"},"Initialize the Redux Store"),(0,a.kt)("p",null,"In this quickstart example, we will be using the default Web3-Redux store. You may have a more complex setup depending on your needs however:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enable persistance middleware using ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/rt2zz/redux-persist"},"redux-persist"),". See ",(0,a.kt)("a",{parentName:"li",href:"/docs/web3-redux-advanced/persistence"},"Advanced/Persistence")),(0,a.kt)("li",{parentName:"ul"},"Integrate web3-redux with existing redux store. This is often required in more complex applications that need to store their own state. See ",(0,a.kt)("a",{parentName:"li",href:"/docs/web3-redux-advanced/custom_store"},"Advanced/Custom Store"),".")),(0,a.kt)("p",null,"To setup our store, we follow the standard ",(0,a.kt)("inlineCode",{parentName:"p"},"react-redux")," configuration ",(0,a.kt)("a",{parentName:"p",href:"https://redux.js.org/usage/configuring-your-store"},"guide")," to add a ",(0,a.kt)("inlineCode",{parentName:"p"},"Provider")," component to wrap your entire React app in the redux context."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"//index.tsx\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport { Provider } from 'react-redux';\nimport App from './App';\nimport store from '@owlprotocol/web3-redux/store';\n\nReactDOM.render(\n    <React.StrictMode>\n        <Provider store={store}>\n            <App />\n        </Provider>\n    </React.StrictMode>,\n);\n")))}l.isMDXComponent=!0}}]);