"use strict";(self.webpackChunkdigital_enabler_documentation=self.webpackChunkdigital_enabler_documentation||[]).push([[785],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>v});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=i,v=p["".concat(l,".").concat(u)]||p[u]||m[u]||r;return n?a.createElement(v,o(o({ref:t},s),{},{components:n})):a.createElement(v,o({ref:t},s))}));function v(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var a=n(7462),i=(n(7294),n(3905));const r={slug:"device-data-management",title:"Device Data Management",sidebar_label:"Device Data Management"},o=void 0,c={unversionedId:"device-data-management/device-data-management",id:"device-data-management/device-data-management",title:"Device Data Management",description:"This section shows info about how retrieve and use the devices data.",source:"@site/docs/device-data-management/device-data-management.md",sourceDirName:"device-data-management",slug:"/device-data-management/device-data-management",permalink:"/device-data-management/device-data-management",draft:!1,tags:[],version:"current",frontMatter:{slug:"device-data-management",title:"Device Data Management",sidebar_label:"Device Data Management"},sidebar:"sidebars",previous:{title:"Device config and modeling",permalink:"/device-config-and-modeling/device-config-and-modeling"},next:{title:"Device simulation",permalink:"/device-simulation/device-simulation"}},l={},d=[{value:"Device infopoint",id:"device-infopoint",level:2},{value:"Device listener",id:"device-listener",level:2}],s={toc:d},p="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section shows info about how retrieve and use the devices data."),(0,i.kt)("h2",{id:"device-infopoint"},"Device infopoint"),(0,i.kt)("p",null,'By clicking on the arrow next to "Infopoint", on the left of device details page, a new pop up will appear.  It shows a textual description of the device properties (protocol, dataformat, retrieving mode, endpoint, etc).'),(0,i.kt)("p",null,"A curl request shows how to get all information that are collected by your device."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1963).Z,width:"1544",height:"667"})),(0,i.kt)("p",null,'Clicking on "Click here to view an example of Notification Payload" an example of notification payload is shown'),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1218).Z,width:"1188",height:"774"})),(0,i.kt)("h2",{id:"device-listener"},"Device listener"),(0,i.kt)("p",null,'By clicking on the arrow next to "Listeners", on the left of device details page, a new pop up will appear.  It shows all current listeners that are attached to devices. '),(0,i.kt)("p",null,"Here you can add new data mashup listeners and endpoint listeners. The measures sent by the devices will be delivered to the ",(0,i.kt)("a",{parentName:"p",href:"https://mashups.dev.dev-digital-enabler.eng.it/dme/user/home"},"Data Mashup Editor"),' (in case of Digital Enabler mashup) or to a generic endpoint, using the data structure shown in the "Notification Payload" section.'),(0,i.kt)("p",null,"The user is also enabled to edit and delete listeners."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(1487).Z,width:"1632",height:"926"})))}m.isMDXComponent=!0},1963:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dema_device_infopoint-4ad2d507da729d4feba1d47ee4da669a.png"},1487:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dema_listeners-124b29b42632e776f86e4a8b697c50e7.png"},1218:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dema_notification_payload-033056f4dd8136dcf696c9917d0c4558.png"}}]);