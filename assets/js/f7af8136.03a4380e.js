"use strict";(self.webpackChunkdigital_enabler_documentation=self.webpackChunkdigital_enabler_documentation||[]).push([[191],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(a),g=n,h=p["".concat(d,".").concat(g)]||p[g]||u[g]||i;return a?r.createElement(h,o(o({ref:t},c),{},{components:a})):r.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=g;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},8763:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const i={slug:"iot-edge-gateway",title:"IoT Edge gateway",sidebar_label:"IoT Edge gateway"},o=void 0,l={unversionedId:"iot-edge-gateway/iot-edge-gateway",id:"iot-edge-gateway/iot-edge-gateway",title:"IoT Edge gateway",description:"Introduction",source:"@site/docs/iot-edge-gateway/iot-edge-gateway.md",sourceDirName:"iot-edge-gateway",slug:"/iot-edge-gateway/iot-edge-gateway",permalink:"/iot-edge-gateway/iot-edge-gateway",draft:!1,tags:[],version:"current",frontMatter:{slug:"iot-edge-gateway",title:"IoT Edge gateway",sidebar_label:"IoT Edge gateway"},sidebar:"sidebars",previous:{title:"Device simulation",permalink:"/device-simulation/device-simulation"},next:{title:"Data Workspace",permalink:"/data-workspace/data-workspace"}},d={},s=[{value:"Introduction",id:"introduction",level:3},{value:"Digital Enabler edge architecture",id:"digital-enabler-edge-architecture",level:3},{value:"How it works",id:"how-it-works",level:3},{value:"Create new device",id:"create-new-device",level:4},{value:"Delete a device",id:"delete-a-device",level:4}],c={toc:s},p="wrapper";function u(e){let{components:t,...i}=e;return(0,n.kt)(p,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Edge Computing is a distributed and decentralized architectural model that allows data processing to be brought closer to the source, unlike classic Cloud Computing in which all the data is processed in the cloud."),(0,n.kt)("p",null,"An Edge Gateway is any piece of hardware or software deployed outside the cloud network and close to the data source, that offers the possibility to register the sensors, collect, elaborate data, supporting different communication protocols."),(0,n.kt)("p",null,"The advantages of an edge architecture are the possibility of pre-processing data, reducing traffic to the cloud, decreasing the latency of critical operations and standardizing communication to the cloud."),(0,n.kt)("h3",{id:"digital-enabler-edge-architecture"},"Digital Enabler edge architecture"),(0,n.kt)("p",null,"The Digital Enabler edge architecture is based on two open source framework developed by the Eclipse IoT Working Group, fully integrated in the Digital Enabler ecosystem: Eclipse Kura on the edge, Eclipse Kapua on the cloud side."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.eclipse.org/kura/"},"Eclipse Kura")," is an extensible IoT Edge Framework based on Java. It offers access to hardware interfaces as serial port, GPS, GPIOs, etc.. It also supports field protocols as Modbus, OPC-UA, S7 and many others.\nIts extensibility gives also a high level of customization to the data flow on the edge. Kura is connected to the Cloud using the MQTT protocol. It acts as a gateway on which many IoT devices can be registered.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://www.eclipse.org/kapua/"},"Eclipse Kapua")," is a modular IoT Cloud Platform. It is used as the cloud backend of the edge gateways. It permits to manage all connected Kura gateways: register sensors on Kura, configure the gateway and the connected IoT devices, send data to the devices, etc.."))),(0,n.kt)("h3",{id:"how-it-works"},"How it works"),(0,n.kt)("p",null,"Three prerequisites must be met before creating a device connected to an edge gateway on the ",(0,n.kt)("strong",{parentName:"p"},"Device Manager"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"At least an instance of Eclipse Kapua must be deployed on the cloud"),(0,n.kt)("li",{parentName:"ul"},"At least an instance of Eclipse Kura must be deployed on the edge"),(0,n.kt)("li",{parentName:"ul"},"Kura must be connected to the deployed Kapua")),(0,n.kt)("h4",{id:"create-new-device"},"Create new device"),(0,n.kt)("p",null,"The flow to create a new device is the same as shown on the previous chapters, with some specific parameters."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(2483).Z,width:"1199",height:"613"}),"  "),(0,n.kt)("p",null,"In the ",(0,n.kt)("em",{parentName:"p"},"Hub")," section a ",(0,n.kt)("em",{parentName:"p"},"Kapua")," instance should be selected, then the ",(0,n.kt)("em",{parentName:"p"},"Gateway")," list will be filled with the available Kura gateways."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(1007).Z,width:"1378",height:"771"})," "),(0,n.kt)("p",null,"When adding a device, connected with a ",(0,n.kt)("em",{parentName:"p"},"Kura")," gateway, protocol and data format sections are already selected and cannot be changed. As specified before, ",(0,n.kt)("em",{parentName:"p"},"Kura")," uses MQTT and JSON to communicate with the backend."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(6351).Z,width:"1160",height:"493"})),(0,n.kt)("p",null,"Then a connected sensor must be selected from a list of available sensors. Each sensor has its own configuration and based on the datasheet of the device.\nThis configuration will be provided to the edge gateway that will be able to start collecting data."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(4135).Z,width:"1114",height:"444"})),(0,n.kt)("p",null,"After selecting sensor, the list of associated attributes will be shown.\nThe selected sensor is a MODBus device, so the ",(0,n.kt)("em",{parentName:"p"},"Modbus Address")," must be set."),(0,n.kt)("p",null,"So far the supported devices are:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"DEVICE MODEL"),(0,n.kt)("th",{parentName:"tr",align:"right"},"ATTRIBUTES"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.setecna.it/wp-content/uploads/2021/06/MB-TH-Sxx_datasheet.pdf"},"SETECNA_MB-TH-S14")),(0,n.kt)("td",{parentName:"tr",align:"right"},"Temperature, Humidity")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://www.epluse.com/fileadmin/data/product/ee800/BA_EE800_e.pdf"},"EE800")),(0,n.kt)("td",{parentName:"tr",align:"right"},"Co2")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://advdownload.advantech.com/productfile/PIS/ADAM-4118/file/ADAM-4118_4150_4168_DS(081321)20210817101347.pdf"},"ADAM_4118")),(0,n.kt)("td",{parentName:"tr",align:"right"},"V0, V1, V2, V3, V4, V5, V6, V7")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SONDA_SETECNA_T"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Temperature")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SONDA_SETECNA_UR"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Humidity")))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"SONDA_SETECNA_T and SONDA_SETECNA_UR are different configurations for the same SETECNA_MB-TH-S14 device, one to retrieve only temperature the other for relative humidity")," "),(0,n.kt)("h4",{id:"delete-a-device"},"Delete a device"),(0,n.kt)("p",null,"When an edge device is deleted from the ",(0,n.kt)("strong",{parentName:"p"},"DeviceManager")," the configuration on the edge gateway is disabled, but not actually removed, due to Kura APIs structure. At the state of the art the actual remove has to take place on Kura side."))}u.isMDXComponent=!0},2483:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dema_edge_new_device1-c6ee2ec1471b9175a05cac1e6062ffd7.png"},1007:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dema_edge_new_device2-7b21a0df02ee495a3ef43f27ea480231.png"},6351:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dema_edge_new_device3-2685f5525846da7b1a4971e2d31f731d.png"},4135:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/dema_edge_new_device4-d228a185c3af4165ba1e7214cce08355.png"}}]);