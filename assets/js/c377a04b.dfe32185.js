"use strict";(self.webpackChunk_owlprotocol_web3_redux_docs=self.webpackChunk_owlprotocol_web3_redux_docs||[]).push([[6971],{9613:function(M,N,D){D.d(N,{Zo:function(){return e},kt:function(){return i}});var j=D(9496);function I(M,N,D){return N in M?Object.defineProperty(M,N,{value:D,enumerable:!0,configurable:!0,writable:!0}):M[N]=D,M}function T(M,N){var D=Object.keys(M);if(Object.getOwnPropertySymbols){var j=Object.getOwnPropertySymbols(M);N&&(j=j.filter((function(N){return Object.getOwnPropertyDescriptor(M,N).enumerable}))),D.push.apply(D,j)}return D}function g(M){for(var N=1;N<arguments.length;N++){var D=null!=arguments[N]?arguments[N]:{};N%2?T(Object(D),!0).forEach((function(N){I(M,N,D[N])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(D)):T(Object(D)).forEach((function(N){Object.defineProperty(M,N,Object.getOwnPropertyDescriptor(D,N))}))}return M}function u(M,N){if(null==M)return{};var D,j,I=function(M,N){if(null==M)return{};var D,j,I={},T=Object.keys(M);for(j=0;j<T.length;j++)D=T[j],N.indexOf(D)>=0||(I[D]=M[D]);return I}(M,N);if(Object.getOwnPropertySymbols){var T=Object.getOwnPropertySymbols(M);for(j=0;j<T.length;j++)D=T[j],N.indexOf(D)>=0||Object.prototype.propertyIsEnumerable.call(M,D)&&(I[D]=M[D])}return I}var y=j.createContext({}),A=function(M){var N=j.useContext(y),D=N;return M&&(D="function"==typeof M?M(N):g(g({},N),M)),D},e=function(M){var N=A(M.components);return j.createElement(y.Provider,{value:N},M.children)},z={inlineCode:"code",wrapper:function(M){var N=M.children;return j.createElement(j.Fragment,{},N)}},O=j.forwardRef((function(M,N){var D=M.components,I=M.mdxType,T=M.originalType,y=M.parentName,e=u(M,["components","mdxType","originalType","parentName"]),O=A(D),i=I,L=O["".concat(y,".").concat(i)]||O[i]||z[i]||T;return D?j.createElement(L,g(g({ref:N},e),{},{components:D})):j.createElement(L,g({ref:N},e))}));function i(M,N){var D=arguments,I=N&&N.mdxType;if("string"==typeof M||I){var T=D.length,g=new Array(T);g[0]=O;var u={};for(var y in N)hasOwnProperty.call(N,y)&&(u[y]=N[y]);u.originalType=M,u.mdxType="string"==typeof M?M:I,g[1]=u;for(var A=2;A<T;A++)g[A]=D[A];return j.createElement.apply(null,g)}return j.createElement.apply(null,D)}O.displayName="MDXCreateElement"},4609:function(M,N,D){D.r(N),D.d(N,{frontMatter:function(){return u},contentTitle:function(){return y},metadata:function(){return A},toc:function(){return e},default:function(){return O}});var j=D(7813),I=D(7044),T=(D(9496),D(9613)),g=["components"],u={sidebar_position:1,id:"index",title:"Web3 Redux",slug:"/"},y="Web3 Redux Docs",A={unversionedId:"index",id:"index",title:"Web3 Redux",description:"web3-redux-1024x256.svg",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/owlprotocol/web3-redux/tree/master/docusaurus/docs/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"index",title:"Web3 Redux",slug:"/"},sidebar:"tutorialSidebar",next:{title:"Quickstart",permalink:"/docs/web3-redux-quickstart/"}},e=[{value:"Table of Contents",id:"table-of-contents",children:[],level:2},{value:"Related Libraries",id:"related-libraries",children:[],level:2}],z={toc:e};function O(M){var N=M.components,u=(0,I.Z)(M,g);return(0,T.kt)("wrapper",(0,j.Z)({},z,u,{components:N,mdxType:"MDXLayout"}),(0,T.kt)("h1",{id:"web3-redux-docs"},"Web3 Redux Docs"),(0,T.kt)("p",null,(0,T.kt)("img",{alt:"web3-redux-1024x256.svg",src:D(4953).Z,width:"1024",height:"256"})),(0,T.kt)("p",null,"Web3 Redux Library."),(0,T.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,T.kt)("ul",null,(0,T.kt)("li",{parentName:"ul"},(0,T.kt)("a",{parentName:"li",href:"#installing"},"Installing")),(0,T.kt)("li",{parentName:"ul"},(0,T.kt)("a",{parentName:"li",href:"#architecture"},"Architecture")),(0,T.kt)("li",{parentName:"ul"},(0,T.kt)("a",{parentName:"li",href:"#interfaces"},"Interfaces")),(0,T.kt)("li",{parentName:"ul"},(0,T.kt)("a",{parentName:"li",href:"#getting-started"},"Getting Started")),(0,T.kt)("li",{parentName:"ul"},(0,T.kt)("a",{parentName:"li",href:"#metamask"},"Metamask")),(0,T.kt)("li",{parentName:"ul"},(0,T.kt)("a",{parentName:"li",href:"#advanced"},"Advanced"))),(0,T.kt)("h2",{id:"related-libraries"},"Related Libraries"),(0,T.kt)("p",null,'Before you begin, you might want to get familiar with some of the libraries this "meta-library" is built with:'),(0,T.kt)("ul",null,(0,T.kt)("li",{parentName:"ul"},(0,T.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-intro.html"},"React Hooks")),(0,T.kt)("li",{parentName:"ul"},(0,T.kt)("a",{parentName:"li",href:"https://redux.js.org/"},"redux")),(0,T.kt)("li",{parentName:"ul"},(0,T.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/reselect"},"reselect")),(0,T.kt)("li",{parentName:"ul"},(0,T.kt)("a",{parentName:"li",href:"https://redux-orm.github.io/redux-orm/"},"redux-orm")),(0,T.kt)("li",{parentName:"ul"},(0,T.kt)("a",{parentName:"li",href:"https://web3js.readthedocs.io/en/v1.3.0/"},"web3.js")),(0,T.kt)("li",{parentName:"ul"},(0,T.kt)("a",{parentName:"li",href:"https://redux-saga.js.org/"},"redux-saga"))))}O.isMDXComponent=!0},4953:function(M,N){N.Z="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIyNTYiIHZpZXdCb3g9IjAgMCAxMDI0IDI1NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjEwMjQiIGhlaWdodD0iMjU2IiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNNTExLjY2OSAxMDguOTk0VjM0TDQ0NSA3MS40Nzk5TDUxMS42NjkgMTA4Ljk5NFoiIGZpbGw9IiM2NjY2NjYiLz4KPHBhdGggZD0iTTQ0NSA3MS40Nzk5VjE0Ni40ODZMNTExLjY2OSAxMDguOTk0TDQ0NSA3MS40Nzk5WiIgZmlsbD0iIzMzMzMzMyIvPgo8cGF0aCBkPSJNNTExLjY1OCAxMDguOTk0VjM0TDU3OC4zMzggNzEuNDc5OUw1MTEuNjU4IDEwOC45OTRaIiBmaWxsPSIjMzMzMzMzIi8+CjxwYXRoIGQ9Ik01NzguMzM4IDcxLjQ3OTlWMTQ2LjQ4Nkw1MTEuNjU4IDEwOC45OTRMNTc4LjMzOCA3MS40Nzk5WiIgZmlsbD0iIzY2NjY2NiIvPgo8cGF0aCBkPSJNNTExLjY2OSAxMDguOTk0VjE4NEw1NzguMzI3IDE0Ni40ODZMNTExLjY2OSAxMDguOTk0WiIgZmlsbD0iIzMzMzMzMyIvPgo8cGF0aCBkPSJNNTExLjY2OSAxMDguOTk0TDQ0NSAxNDYuNDg2TDUxMS42NjkgMTg0VjEwOC45OTRaIiBmaWxsPSIjMUMxQzFDIi8+CjxwYXRoIGQ9Ik01MjkuNTM2IDEyMS41MTFDNTMxLjIwOSAxMjEuMzEzIDUzMi43NDQgMTIwLjQ4NiA1MzMuODI5IDExOS4xOThDNTM0LjkxNCAxMTcuOTA5IDUzNS40NjcgMTE2LjI1NiA1MzUuMzc2IDExNC41NzRDNTM1LjI4NiAxMTIuODkyIDUzNC41NTggMTExLjMwOCA1MzMuMzQxIDExMC4xNDNDNTMyLjEyNCAxMDguOTc5IDUzMC41MDkgMTA4LjMyMiA1MjguODI1IDEwOC4zMDVINTI4LjU5NUM1MjcuNzI4IDEwOC4zMzUgNTI2Ljg3NSAxMDguNTM1IDUyNi4wODUgMTA4Ljg5NUM1MjUuMjk1IDEwOS4yNTQgNTI0LjU4NCAxMDkuNzY2IDUyMy45OTIgMTEwLjRDNTIzLjQgMTExLjAzNSA1MjIuOTM5IDExMS43OCA1MjIuNjM2IDExMi41OTNDNTIyLjMzMiAxMTMuNDA2IDUyMi4xOTEgMTE0LjI3IDUyMi4yMjIgMTE1LjEzOEM1MjIuMzA1IDExNi43NzMgNTIyLjk3OCAxMTguMzIzIDUyNC4xMTcgMTE5LjUwMUM1MjAuMTA5IDEyNy40MDEgNTEzLjk3NyAxMzMuMTc3IDUwNC43OCAxMzguMDExQzQ5OC45MDYgMTQxLjIxOCA0OTIuMTc0IDE0Mi40OTUgNDg1LjUzNCAxNDEuNjYzQzQ4MC4yMjkgMTQwLjk1MSA0NzYuMTA3IDEzOC41OTcgNDczLjUxMiAxMzQuNzA0QzQ3MS42NjQgMTMyLjA1MSA0NzAuNTk2IDEyOC45MzMgNDcwLjQzIDEyNS43MDRDNDcwLjI2MyAxMjIuNDc1IDQ3MS4wMDUgMTE5LjI2NCA0NzIuNTcgMTE2LjQzNUM0NzQuNTA2IDExMi43MjggNDc3LjI1MyAxMDkuNTA1IDQ4MC42MDggMTA3LjAwOEM0ODAuMTM3IDEwNS40NjkgNDc5LjQ2IDEwMi44ODUgNDc5LjA2OSAxMDAuOTkxQzQ2MS45ODMgMTEzLjM2OSA0NjMuNzUxIDEzMC4xMTEgNDY4Ljk0MiAxMzguMDExQzQ3Mi44MjMgMTQzLjkwMiA0ODAuNzIzIDE0Ny41NTQgNDg5LjQ1IDE0Ny41NTRDNDkxLjgzMiAxNDcuNTcxIDQ5NC4yMDggMTQ3LjI5NyA0OTYuNTIzIDE0Ni43MzhDNTAzLjY0MiAxNDUuNDcgNTEwLjM1NCAxNDIuNTE1IDUxNi4wOTYgMTM4LjEyQzUyMS44MzggMTMzLjcyNCA1MjYuNDQzIDEyOC4wMTcgNTI5LjUyNSAxMjEuNDc2TDUyOS41MzYgMTIxLjUxMVpNNTUwLjI4NiAxMDYuODkzQzU0MS4zMTggOTYuMzk3NiA1MjguMTI0IDkwLjYyMTcgNTEzLjAzNiA5MC42MjE3SDUxMS4xNTJDNTEwLjYxMiA4OS41NjI2IDUwOS43OSA4OC42NzI2IDUwOC43NzcgODguMDQ4OEM1MDcuNzY1IDg3LjQyNTEgNTA2LjYgODcuMDkxNyA1MDUuNDExIDg3LjA4NUg1MDUuMTdDNTAzLjQxOSA4Ny4xMTcgNTAxLjc1MiA4Ny44NDMzIDUwMC41MzYgODkuMTA0MkM0OTkuMzIxIDkwLjM2NSA0OTguNjU2IDkyLjA1NzEgNDk4LjY4OCA5My44MDgzQzQ5OC43MiA5NS41NTk0IDQ5OS40NDYgOTcuMjI2MSA1MDAuNzA3IDk4LjQ0MTdDNTAxLjk2OCA5OS42NTczIDUwMy42NiAxMDAuMzIyIDUwNS40MTEgMTAwLjI5SDUwNS42NDFDNTA2Ljg3NiAxMDAuMjI0IDUwOC4wNjggOTkuODEzMyA1MDkuMDgzIDk5LjEwNTJDNTEwLjA5NyA5OC4zOTcxIDUxMC44OTQgOTcuNDE5NSA1MTEuMzgyIDk2LjI4MjhINTEzLjUwNkM1MjIuNDQ0IDk2LjI2OCA1MzEuMTg0IDk4LjkxODcgNTM4LjYwOCAxMDMuODk2QzU0NC4yNyAxMDcuNDcgNTQ4LjY0NiAxMTIuNzU1IDU1MS4xMDEgMTE4Ljk4NEM1NTIuMDkxIDEyMS4xNzYgNTUyLjU4MyAxMjMuNTU5IDU1Mi41NDMgMTI1Ljk2M0M1NTIuNTA0IDEyOC4zNjcgNTUxLjkzMyAxMzAuNzMyIDU1MC44NzIgMTMyLjg5QzU0OS40IDEzNS44ODcgNTQ3LjA5MyAxMzguMzk1IDU0NC4yMjggMTQwLjExMUM1NDEuMzY0IDE0MS44MjYgNTM4LjA2NCAxNDIuNjc2IDUzNC43MjcgMTQyLjU1OEM1MzAuNzUxIDE0Mi41MDQgNTI2LjgyNiAxNDEuNjY1IDUyMy4xNzUgMTQwLjA5QzUyMS44NzcgMTQxLjIzOCA1MTkuNTEyIDE0My4xNDQgNTE3Ljg3IDE0NC4zMjdDNTIyLjYxMyAxNDYuNjMxIDUyNy44MDEgMTQ3Ljg3NyA1MzMuMDczIDE0Ny45NzhDNTQ0LjM4NCAxNDcuOTc4IDU1Mi43NTUgMTQxLjczMiA1NTUuOTM1IDEzNS40ODVDNTU5LjM4IDEyOC42NTMgNTU5LjExNiAxMTYuODYgNTUwLjI4NiAxMDYuODQ3VjEwNi44OTNaTTQ5MC40MDMgMTIzLjUwOUM0OTAuNDY4IDEyNS4yMTcgNDkxLjE5MiAxMjYuODMzIDQ5Mi40MjMgMTI4LjAxOUM0OTMuNjU0IDEyOS4yMDUgNDk1LjI5NiAxMjkuODY4IDQ5Ny4wMDYgMTI5Ljg3SDQ5Ny4yMzVDNDk4Ljk0MSAxMjkuNzc2IDUwMC41NDMgMTI5LjAyNCA1MDEuNzA2IDEyNy43NzNDNTAyLjg2OSAxMjYuNTIzIDUwMy41MDIgMTI0Ljg3IDUwMy40NzIgMTIzLjE2M0M1MDMuNDQyIDEyMS40NTUgNTAyLjc1MiAxMTkuODI1IDUwMS41NDYgMTE4LjYxNkM1MDAuMzQxIDExNy40MDYgNDk4LjcxMyAxMTYuNzExIDQ5Ny4wMDYgMTE2LjY3Nkg0OTYuNzY1QzQ5Ni40ODQgMTE2LjY1OSA0OTYuMjAzIDExNi42OTggNDk1LjkzOCAxMTYuNzkxQzQ5MS4xNjQgMTA4Ljk0MiA0ODkuMDIgOTkuNzc0IDQ4OS44MTcgOTAuNjIxN0M0OTAuMTQ1IDgzLjk1MTEgNDkyLjU3NyA3Ny41NTU2IDQ5Ni43NjUgNzIuMzUyNkM1MDAuMjA5IDY3Ljk4OTIgNTA2Ljc4OSA2NS44NjQ4IDUxMS4yNjcgNjUuNzVDNTIzLjc2MSA2NS41MDg5IDUyOS4wNjYgODEuMDY4MSA1MjkuNDIyIDg3LjMyNjJDNTMwLjk0OSA4Ny42NzA3IDUzMy41NDQgODguNDc0NCA1MzUuMzEyIDg5LjA5NDVDNTMzLjkgNjkuOTg3MSA1MjIuMTA3IDYwLjA4ODkgNTEwLjc5NyA2MC4wODg5QzUwMC4xODYgNjAuMDg4OSA0OTAuNDAzIDY3Ljc0OCA0ODYuNTEgNzkuMDdDNDgxLjA5IDk0LjE1ODUgNDg0LjYyNyAxMDguNjYxIDQ5MS4yMyAxMjAuMDg3QzQ5MC41NjYgMTIxLjEwNSA0OTAuMjc0IDEyMi4zMjIgNDkwLjQwMyAxMjMuNTMxVjEyMy41MDlaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDM0LjM2NiAyMDYuOTU1TDQyOS41MjkgMjIwLjczNUg0MjYuNDM2TDQyMCAyMDEuNjkxSDQyMy44OTVMNDI4LjI1MSAyMTUuMjgzTDQzMi45MTQgMjAxLjYxNEg0MzYuMDkxTDQ0MC43NjEgMjE1LjMxMUw0NDUuMTE3IDIwMS42OTFINDQ4LjYwN0w0NDIuMzI1IDIyMC43MzVINDM5LjE5N0w0MzQuMzY2IDIwNi45NTVaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDYzLjUwNCAyMTQuMDgyVjIxNC40NTlINDUyLjc2OEM0NTIuNzk3IDIxNS40NzEgNDUzLjIyNiAyMTYuNDMxIDQ1My45NjIgMjE3LjEyN0M0NTQuNjk3IDIxNy44MjMgNDU1LjY3OSAyMTguMTk5IDQ1Ni42OTEgMjE4LjE3M0M0NTguODU1IDIxOC4xNzMgNDU5LjczNSAyMTcuMDc3IDQ1OS45NzkgMjE2LjdINDYzLjM0NEM0NjMuMTI3IDIxOC4wOTYgNDYxLjI0OSAyMjEgNDU2LjY5MSAyMjFDNDUyLjMxNCAyMjEgNDQ5LjM0NyAyMTcuOTU2IDQ0OS4zNDcgMjEzLjkwMUM0NDkuMzAzIDIxMi45NTggNDQ5LjQ1NSAyMTIuMDE2IDQ0OS43OTUgMjExLjEzNkM0NTAuMTM0IDIxMC4yNTUgNDUwLjY1NCAyMDkuNDU1IDQ1MS4zMiAyMDguNzg3QzQ1MS45ODYgMjA4LjExOCA0NTIuNzg0IDIwNy41OTYgNDUzLjY2MyAyMDcuMjUyQzQ1NC41NDIgMjA2LjkwOSA0NTUuNDgzIDIwNi43NTMgNDU2LjQyNiAyMDYuNzk0QzQ2MC41OTMgMjA2Ljc5NCA0NjMuNTA0IDIwOS42NzcgNDYzLjUwNCAyMTQuMDgyWk00NTIuODcyIDIxMi4xMDZINDU5LjkyM0M0NTkuNzM1IDIxMS4zMjkgNDU5LjI4NSAyMTAuNjQxIDQ1OC42NSAyMTAuMTU1QzQ1OC4wMTUgMjA5LjY3IDQ1Ny4yMzIgMjA5LjQxNyA0NTYuNDMzIDIwOS40NEM0NTUuNjE4IDIwOS4zODUgNDU0LjgxMiAyMDkuNjI0IDQ1NC4xNTkgMjEwLjExNEM0NTMuNTA1IDIxMC42MDMgNDUzLjA0OSAyMTEuMzEgNDUyLjg3MiAyMTIuMTA2VjIxMi4xMDZaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNNDcwLjI2MiAyMjAuNjUxSDQ2Ni45MjVWMjAxSDQ3MC4yOVYyMDkuMjc5QzQ3MC43ODYgMjA4LjUwNyA0NzEuNDc2IDIwNy44NzYgNDcyLjI4OSAyMDcuNDUxQzQ3My4xMDMgMjA3LjAyNSA0NzQuMDE0IDIwNi44MTggNDc0LjkzMiAyMDYuODVDNDc4LjQ4NSAyMDYuODUgNDgxLjM2OCAyMDkuNDg5IDQ4MS4zNjggMjEzLjlDNDgxLjM2OCAyMTguMzEyIDQ3OC40ODUgMjIwLjk0NCA0NzQuOTMyIDIyMC45NDRDNDc0LjAxOCAyMjAuOTg2IDQ3My4xMDggMjIwLjc5MiA0NzIuMjkgMjIwLjM4MkM0NzEuNDcyIDIxOS45NzEgNDcwLjc3NCAyMTkuMzU3IDQ3MC4yNjIgMjE4LjU5OVYyMjAuNjUxWk00NzQuMDggMjE3Ljk1NkM0NzYuNDA1IDIxNy45NTYgNDc3Ljg5OSAyMTYuMTkgNDc3Ljg5OSAyMTMuOUM0NzcuODk5IDIxMS42MTEgNDc2LjQwNSAyMDkuODE3IDQ3NC4xMDEgMjA5LjgxN0M0NzEuNzk3IDIwOS44MTcgNDcwLjI1NSAyMTEuNTU1IDQ3MC4yNTUgMjEzLjg4QzQ3MC4yNTUgMjE2LjIwNCA0NzEuNzU2IDIxNy45NTYgNDc0LjEwMSAyMTcuOTU2SDQ3NC4wOFoiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik00OTEuMjI1IDIyMC45ODZDNDg2LjMzOCAyMjAuOTg2IDQ4NC4zMDcgMjE3Ljk0MiA0ODQuMDk4IDIxNS40MDFINDg3LjY0NEM0ODcuODYgMjE2LjQ5NyA0ODguOTI4IDIxNy44NTkgNDkxLjIyNSAyMTcuODU5QzQ5My41MjIgMjE3Ljg1OSA0OTQuNzc4IDIxNi44MzkgNDk0Ljc3OCAyMTUuMTM2QzQ5NC43NzggMjEzLjQzMyA0OTMuNjU0IDIxMi40OSA0OTEuNzA3IDIxMi40OUg0ODguMTI2VjIwOS4zOTFINDkxLjYxNkM0OTMuMjQyIDIwOS4zOTEgNDk0LjIyNyAyMDguNTY3IDQ5NC4yMjcgMjA2Ljk5QzQ5NC4yMjcgMjA1LjQxMiA0OTMuMDI2IDIwNC41MDQgNDkxLjEzNCAyMDQuNTA0QzQ4OS4xMDMgMjA0LjUwNCA0ODguMjIzIDIwNS42ODQgNDg4LjAwNyAyMDYuODI5SDQ4NC41MTZDNDg0LjU5MyAyMDQuMjk1IDQ4Ni43MDggMjAxLjQxMiA0OTEuMTEzIDIwMS40MTJDNDk1LjM4NiAyMDEuNDEyIDQ5Ny43ODcgMjAzLjUwNiA0OTcuNzg3IDIwNi43NDVDNDk3LjgwNyAyMDcuNTgzIDQ5Ny41NjkgMjA4LjQwNiA0OTcuMTA2IDIwOS4xMDRDNDk2LjY0MyAyMDkuODAxIDQ5NS45NzYgMjEwLjM0IDQ5NS4xOTcgMjEwLjY0N0M0OTYuNTkzIDIxMS4wNzMgNDk4LjM3MyAyMTIuNDM1IDQ5OC4zNzMgMjE1LjM0NkM0OTguMzUyIDIxOC43MDMgNDk1Ljc0MiAyMjAuOTg2IDQ5MS4yMjUgMjIwLjk4NloiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik01MDIuMTc4IDIxMS4xMjJINTExLjA5OVYyMTQuMjdINTAyLjE3OFYyMTEuMTIyWiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTUxNS44MjUgMjAxLjY5MUg1MjYuNDU3QzUzMC42NDYgMjAxLjY5MSA1MzIuOTQ5IDIwMy42MTggNTMyLjk0OSAyMDcuMzUzQzUzMy4wMTcgMjA4LjUwOSA1MzIuNjgxIDIwOS42NTMgNTMxLjk5OCAyMTAuNTg5QzUzMS4zMTYgMjExLjUyNCA1MzAuMzI5IDIxMi4xOTQgNTI5LjIwOCAyMTIuNDgzTDUzMy42NjggMjIwLjY1MUg1MjkuODc4TDUyNS41NzggMjEyLjg1M0g1MTkuNDM1VjIyMC42NTFINTE1Ljg2TDUxNS44MjUgMjAxLjY5MVpNNTE5LjQgMjA0Ljg3NFYyMDkuNzYxSDUyNi4xMjlDNTI4LjIyMyAyMDkuNzYxIDUyOS4yMjkgMjA4Ljk1OCA1MjkuMjI5IDIwNy4zOEM1MjkuMjI5IDIwNS42NDkgNTI4LjE4OCAyMDQuOTAyIDUyNi4xMjkgMjA0LjkwMkw1MTkuNCAyMDQuODc0WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTU1MC4xMzYgMjE0LjA4MlYyMTQuNDU5SDUzOS40MDZDNTM5LjQzNiAyMTUuNDcxIDUzOS44NjUgMjE2LjQzMSA1NDAuNiAyMTcuMTI3QzU0MS4zMzYgMjE3LjgyMyA1NDIuMzE3IDIxOC4xOTkgNTQzLjMzIDIxOC4xNzNDNTQ1LjQ5NCAyMTguMTczIDU0Ni4zNzMgMjE3LjA3NyA1NDYuNjExIDIxNi43SDU0OS45NzVDNTQ5Ljc2NiAyMTguMDk2IDU0Ny45MjMgMjIxIDU0My4zMyAyMjFDNTM4Ljk1MyAyMjEgNTM1Ljk4NiAyMTcuOTU2IDUzNS45ODYgMjEzLjkwMUM1MzUuOTQxIDIxMi45NTggNTM2LjA5NCAyMTIuMDE2IDUzNi40MzMgMjExLjEzNkM1MzYuNzczIDIxMC4yNTUgNTM3LjI5MiAyMDkuNDU1IDUzNy45NTggMjA4Ljc4N0M1MzguNjI0IDIwOC4xMTggNTM5LjQyMiAyMDcuNTk2IDU0MC4zMDEgMjA3LjI1MkM1NDEuMTgxIDIwNi45MDkgNTQyLjEyMiAyMDYuNzUzIDU0My4wNjQgMjA2Ljc5NEM1NDcuMjI1IDIwNi43OTQgNTUwLjEzNiAyMDkuNjc3IDU1MC4xMzYgMjE0LjA4MlpNNTM5LjUxMSAyMTIuMTA2SDU0Ni41NjJDNTQ2LjM3MyAyMTEuMzI5IDU0NS45MjQgMjEwLjY0MSA1NDUuMjg5IDIxMC4xNTVDNTQ0LjY1MyAyMDkuNjcgNTQzLjg3MSAyMDkuNDE3IDU0My4wNzEgMjA5LjQ0QzU0Mi4yNTcgMjA5LjM4NCA1NDEuNDQ5IDIwOS42MjIgNTQwLjc5NiAyMTAuMTEyQzU0MC4xNDIgMjEwLjYwMSA1MzkuNjg3IDIxMS4zMDkgNTM5LjUxMSAyMTIuMTA2WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTU2My43ODMgMjE4LjUxNUM1NjMuMjkxIDIxOS4yOTggNTYyLjU5OSAyMTkuOTM2IDU2MS43NzggMjIwLjM2M0M1NjAuOTU3IDIyMC43OSA1NjAuMDM3IDIyMC45OTEgNTU5LjExMyAyMjAuOTQ0QzU1NS42MjMgMjIwLjk0NCA1NTIuNjc3IDIxOC4zMDUgNTUyLjY3NyAyMTMuOUM1NTIuNjc3IDIwOS40OTYgNTU1LjU4OCAyMDYuODUgNTU5LjExMyAyMDYuODVDNTYwLjAyMyAyMDYuOCA1NjAuOTI5IDIwNi45ODggNTYxLjc0NCAyMDcuMzk0QzU2Mi41NTkgMjA3LjgwMSA1NjMuMjU1IDIwOC40MTIgNTYzLjc2MyAyMDkuMTY4VjIwMUg1NjcuMTc2VjIyMC42NTFINTYzLjc4M1YyMTguNTE1Wk01NjAuMDIxIDIwOS44MTdDNTU3LjY2OCAyMDkuODE3IDU1Ni4xNDYgMjExLjU1NSA1NTYuMTQ2IDIxMy44OEM1NTYuMTQ2IDIxNi4yMDQgNTU3LjY2OCAyMTcuOTM1IDU2MC4wMjEgMjE3LjkzNUM1NjIuMzczIDIxNy45MzUgNTYzLjgxMSAyMTYuMTk3IDU2My44MTEgMjEzLjg4QzU2My44MTEgMjExLjU2MiA1NjIuMzE3IDIwOS44MTcgNTYwLjAyMSAyMDkuODE3WiIgZmlsbD0id2hpdGUiLz4KPHBhdGggZD0iTTU3MS40NTUgMjE0LjcwM1YyMDcuMTQzSDU3NC44NjlWMjE0LjMyNkM1NzQuODY5IDIxNi40MjEgNTc1Ljk5MyAyMTcuODE3IDU3OC4xMDEgMjE3LjgxN0M1ODAuMjA5IDIxNy44MTcgNTgxLjMzMyAyMTYuNDIxIDU4MS4zMzMgMjE0LjMyNlYyMDcuMTQzSDU4NC43NzVWMjE0LjcwM0M1ODQuNzc1IDIxOC4zMzMgNTgyLjM0NSAyMjAuOTg2IDU3OC4xNTcgMjIwLjk4NkM1NzMuOTY4IDIyMC45ODYgNTcxLjQ1NSAyMTguMzI2IDU3MS40NTUgMjE0LjcwM1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik01OTUuMTEzIDIxNi4xOUw1OTEuMTA2IDIyMC42NTFINTg3LjE5TDU5My4xNzIgMjEzLjk3N0w1ODcuMTkgMjA3LjE0M0g1OTEuNTY3TDU5NS4zODUgMjExLjU0OEw1OTkuMzQ0IDIwNy4xNDNINjAzLjI0Nkw1OTcuMjkxIDIxMy43NjFMNjAzLjI0NiAyMjAuNjUxSDU5OS4wNTdMNTk1LjExMyAyMTYuMTlaIiBmaWxsPSJ3aGl0ZSIvPgo8L3N2Zz4K"}}]);