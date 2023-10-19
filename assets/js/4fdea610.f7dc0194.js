"use strict";(self.webpackChunkdigital_enabler_documentation=self.webpackChunkdigital_enabler_documentation||[]).push([[541],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return n?i.createElement(f,r(r({ref:t},c),{},{components:n})):i.createElement(f,r({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=n(7462),a=(n(7294),n(3905));const o={slug:"serverless-functions",title:"Serverless Functions",sidebar_label:"Serverless Functions"},r=void 0,l={unversionedId:"serverless-functions/serverless-functions",id:"serverless-functions/serverless-functions",title:"Serverless Functions",description:'Accordingly, to Wikipedia "Function as a service (FaaS)" is a category of cloud computation service that provides a platform allowing customers to develop, run, and manage application functionalities without the complexity of building and maintaining the infrastructure typically associated with developing and launching an app.',source:"@site/docs/serverless-functions/serverless-functions.md",sourceDirName:"serverless-functions",slug:"/serverless-functions/serverless-functions",permalink:"/serverless-functions/serverless-functions",draft:!1,tags:[],version:"current",frontMatter:{slug:"serverless-functions",title:"Serverless Functions",sidebar_label:"Serverless Functions"},sidebar:"sidebars",previous:{title:"Rule Manager",permalink:"/rules-and-events-processing/rule-manager/introduction"},next:{title:"AI/ML Studio",permalink:"/ai-ml-studio/ai-ml-studio"}},s={},u=[{value:"Getting started",id:"getting-started",level:2},{value:"Functions",id:"functions",level:2},{value:"Trigger",id:"trigger",level:2},{value:"User manual",id:"user-manual",level:2},{value:"Create your first Cloudev function",id:"create-your-first-cloudev-function",level:3},{value:"Add dependencies",id:"add-dependencies",level:3},{value:"List Functions",id:"list-functions",level:3},{value:"Function details",id:"function-details",level:3},{value:"Delete function",id:"delete-function",level:3},{value:"Associate Triggers",id:"associate-triggers",level:3},{value:"Trigger Details",id:"trigger-details",level:3},{value:"Code Examples",id:"code-examples",level:2},{value:"Expose a REST API in NodeJS",id:"expose-a-rest-api-in-nodejs",level:3},{value:"Analyze data in Python",id:"analyze-data-in-python",level:3},{value:"Connect to a DB in PHP",id:"connect-to-a-db-in-php",level:3},{value:"FAQ",id:"faq",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(p,(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Accordingly, to Wikipedia "Function as a service (FaaS)" is a category of cloud computation service that provides a platform allowing customers to develop, run, and manage application functionalities without the complexity of building and maintaining the infrastructure typically associated with developing and launching an app.'),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Digital Enabler ClouDev")," is exactly this: a tool that allows to launch functions in several managed runtime environments."),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"ClouDev")," user can then stay focused on the business logic of his application without taking care of the deployment, the availability or the resources consumption."),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,"The main instance of ClouDev is available at ",(0,a.kt)("a",{parentName:"p",href:"https://cloudev.demo.digital-enabler.eng.it/"},"https://cloudev.demo.digital-enabler.eng.it")),(0,a.kt)("p",null,"Please note that in order to use the tool you should be registered on the platform as a Developer."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1114).Z,width:"1888",height:"440"}),"\nAfter the login you will be redirected to the tool's main page that you can see below."),(0,a.kt)("p",null,"The page shows the currently deployed functions and allows you to create new ones through the top-right corner placed red button."),(0,a.kt)("h2",{id:"functions"},"Functions"),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"Function")," is the main entity in ClouDev. It is a single-purposed logical unit that is hosted on the cloud infrastructure. The developer can use functions for various purposes like for example request some third-party service and retrieve data from it, connect to some Database, manipulate and analyze data.."),(0,a.kt)("p",null,"Currently ClouDev allows to write functions for running in six different runtime environments:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Python 3.8")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"NodeJS 10")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Java 8")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Ruby 2.5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Go 1.14")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"PHP 7.2"))),(0,a.kt)("h2",{id:"trigger"},"Trigger"),(0,a.kt)("p",null,"To invoke deployed functions, you need to associate a Trigger to that function.\nA Trigger allows to make a function available through a HTTP Endpoint.",(0,a.kt)("br",{parentName:"p"}),"\n","Note that one function can only be associated with one trigger.\nSo far, only HTTP triggers are available but several other triggers are in the ClouDev roadmap."),(0,a.kt)("h2",{id:"user-manual"},"User manual"),(0,a.kt)("h3",{id:"create-your-first-cloudev-function"},"Create your first Cloudev function"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"First step for creating Cloudev function is to click on create button that is located on left upper side of the app landing page. After that new page will open where you can choose by clicking area of language the programming language in which you wrote your function code. Example of images below.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3442).Z,width:"1853",height:"691"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"After choosing the programming language new page with code editor will appear.",(0,a.kt)("img",{src:n(3206).Z,width:"1839",height:"833"}))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"On images you will see code editor where you can write code of your function or use the default example of code that already exist in editor for every language. Very important thing to mention is that every function must have ",(0,a.kt)("strong",{parentName:"em"},"main")," function also your function code could have more than one function that are invoked inside ",(0,a.kt)("strong",{parentName:"em"},"main")," function. On this example of function ",(0,a.kt)("strong",{parentName:"em"},"init")," is main function. Also, there are option to upload your code by clicking on folder icon that are located in upper right corner. Pop-up for uploading file will appear and you can select file with function that you want to upload. After uploading file your code will automatically appear in code editor. ",(0,a.kt)("strong",{parentName:"em"},"Very important rule for creating Java function is that name of the class must be the same as name of the function otherwise function won't work.")),(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("em",{parentName:"p"},"On left bottom side is located setting icon. By clicking on that icon new dialog will be opened.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3759).Z,width:"968",height:"624"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"There are two input fields.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Timeout - for setting execution timeout of the function. By default, is 1000 ms. If a function takes more than that in being executed, that process will be terminated.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Handler - need to contain main method of the function."))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"After click on save button you function will used new values for Timeout and Handler.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Also, you can click on Close button to close this dialog.")),(0,a.kt)("p",null,"After that by clicking on save button new function will be deploy and you will be redirected to landing page."),(0,a.kt)("h3",{id:"add-dependencies"},"Add dependencies"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"On page for creating function, you could find that are named in our case package.json. This is in correlation with the programing language that you choose. For example, if you choose Java this section will be named pom.xml instead of package.json and for PHP it will be name composer.json .")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8827).Z,width:"1799",height:"740"})),(0,a.kt)("p",null,"There is option to give dependency to your function by adding dependency by typing and uploading file. You can edit existing dependency or uploaded file in code editor. Also, you can add third-party library as dependency and used in your function code."),(0,a.kt)("h3",{id:"list-functions"},"List Functions"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Listing of deployed functions will be visible on landing page of Cloudev. In upper right corner there is search field for searching deployed dependency.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"In the extension of the function name, you can find three dots.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3570).Z,width:"1834",height:"588"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"By clicking on those dots new drop down many will appear as you can see on images below.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Run")," for running code of deployed function."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Details")," for redirection to function details page."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Delete")," for delete function and triggers that are associated with that function"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Associate")," for associate that function to trigger and exposed through HTTP.")),(0,a.kt)("h3",{id:"function-details"},"Function details"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"On Function details page you can see all details of deployed function.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(983).Z,width:"1832",height:"511"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Dependency that you uploaded for that function."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Runtime for that function ( Which runtime are using deployed function)"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Version - specific version of that function how is generated automatically by ClouDev."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Handler - full name of function handler how is constructed \xe2\u20ac\u02dcfunction name + name function main method that you defined in function created page\xe2\u20ac\u2122."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Timeout - execution timeout of the function")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},'There are also subsection "Triggers" where is shown triggers that are association with function.')),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"By clicking on the info icon it will redirect you to trigger details page.")))),(0,a.kt)("h3",{id:"delete-function"},"Delete function"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"You can delete Cloudev function form landing page by clicking three dots and selection option delete.")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"After that new modal will appear.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2710).Z,width:"661",height:"398"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"By clicking on YES button function will be deleted and removed from the list. Button NO if you decided not to delete selected function.")),(0,a.kt)("h3",{id:"associate-triggers"},"Associate Triggers"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},'If you want to associate a trigger to a function you can do it in landing page by clicking on three dots and selecting option associated. After that you pop-up messages will appear in upper lift side of application with message "function is successfully associated to trigger".')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},'If function already have associated trigger user will get the error message "function is already associated with trigger".')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"You can check is trigger active by going to trigger details page.")),(0,a.kt)("h3",{id:"trigger-details"},"Trigger Details"),(0,a.kt)("p",null,"_To locate on trigger details page, you can do by clicking on the info icon in function details page in Triggers subsection."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7919).Z,width:"486",height:"192"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"After that you will be redirected to trigger details page which looks like as on image below.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6781).Z,width:"1798",height:"509"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"You can see here three things.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},'First is a Trigger name that is constructed "username+workspace+function name + trg (extension)"'))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"Second is Function subsection where you can find function that are associated with trigger."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"The last one in HOST section where you can find the API where is function exposed trough HTTP.")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"To test is trigger working you can copy URL in HOST section and paste it to another tab in browser or you can just click it on link that will redirect you to HOST URL. If the everything works alright you should get response status 200 with some response context if your function is return some content (mostly it will be JSON response).")),(0,a.kt)("p",{parentName:"li"},"If server return response status 503 this means that function is not deployed yet and you need to wait a couple of second until to server finished deploying of your function."))),(0,a.kt)("h2",{id:"code-examples"},"Code Examples"),(0,a.kt)("h3",{id:"expose-a-rest-api-in-nodejs"},"Expose a REST API in NodeJS"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'module.exports = {  \n\n/* IMPORTANT: The entrypoint of the function is the "init" method. \nPlease be sure that your code contains one \n*/ \n\ninit: function (event,context) { \nconsole.log(event); \nreturn { \n"body": event.data, \n"header": event.extensions.request.headers, \n"query": event.extensions.request.query, \n"params": event.extensions.request.params \n}; \n} \n}\n')),(0,a.kt)("h3",{id:"analyze-data-in-python"},"Analyze data in Python"),(0,a.kt)("p",null,"Function code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"def init(event, context): \n   import pandas as pd   \n   df = pd.read_csv('https://raw.githubusercontent.com/fthuin/fakepeople/master/fake_people.csv') \n   df = df[['Gender','State','Kilograms']] \n   out = df.groupby(['State','Gender']).mean().reset_index() \n   return out.to_json(orient='records') \n")),(0,a.kt)("p",null,"Dependency file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"pandas\n")),(0,a.kt)("h3",{id:"connect-to-a-db-in-php"},"Connect to a DB in PHP"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<?php \n\n$servername = "localhost"; \n\n$username = "username"; \n\n$password = "password"; \n\n// Create connection \n$conn = new mysqli($servername, $username, $password); \n// Check connection \n\nif ($conn->connect_error) { \n\ndie("Connection failed: " . $conn->connect_error); \n\n} \n\necho "Connected successfully"; \n\n}\n')),(0,a.kt)("h2",{id:"faq"},"FAQ"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"How to update a function?")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"In cloudev there isn't option to update the function, but you could perform next set of operation to achieve same functionality as update.")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"First you must to delete current function and then choose the same runtime and re-created the function with same name but with different function code or with different dependencies. Then by clicking on create button you will be redirected to landing page and you can find there in function list your recreated function."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},'Why I receive the error "You are not authorized to use this tool"')),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},'In case after you log in to ClouDev you received this message on landing page "You are not authorized to use this tool" as you could see on image below.')),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(9996).Z,width:"1282",height:"369"})),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("em",{parentName:"p"},"This means that you don't have to proper role to use Cloudev. You must have assigned ",(0,a.kt)("strong",{parentName:"em"},"developer")," role to your account which will allow you to use Cloudev. To do this please contact your customer support on this email")," ",(0,a.kt)("a",{parentName:"p",href:"mailto:antonino.sirchia@eng.it"},(0,a.kt)("em",{parentName:"a"},"antonino.sirchia@eng.it")),(0,a.kt)("em",{parentName:"p"},".")))))}d.isMDXComponent=!0},3442:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/chooselanguage-b1e906743ee3910fbe4ddc91d00b1fc7.png"},1114:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/cloudevgui-e5794693fe4a250b79a117771baf11cd.png"},3206:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/createfunctionform-c012b941a7fde391aca992ecf3d63405.png"},2710:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/deletefunctionmodal-c53906e5f02ebb6bcd407dc5dbe55c9a.png"},8827:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/dependency-5e9eca9e2c5b368ccf243076bb565789.png"},983:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/functiondetailspage-39ec1172d5bf293028446d4a2a2d948d.png"},3570:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/listoffunction-b949cd3645cafa178f4bc6fe8c3b743f.png"},9996:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/permmision-70c9d41297608602f946c7c474c027cf.png"},3759:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/settings-71bd4b2735c5f2b46033344bde1212f1.png"},6781:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/triggerdetails-08f2724d5ed2e4e84ac31172d421565f.png"},7919:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"}}]);