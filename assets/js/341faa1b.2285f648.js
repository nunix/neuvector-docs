"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1648],{46278:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(85893),a=r(11151);const o={title:"IBM QRadar",taxonomy:{category:"docs"},slug:"/integration/ibmqr"},i=void 0,s={id:"integration/ibmqr/ibmqr",title:"IBM QRadar",description:"Integrating with IBM Qradar",source:"@site/versioned_docs/version-5.2/08.integration/10.ibmqr/10.ibmqr.md",sourceDirName:"08.integration/10.ibmqr",slug:"/integration/ibmqr",permalink:"/neuvector-docs/5.2/integration/ibmqr",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/versioned_docs/version-5.2/08.integration/10.ibmqr/10.ibmqr.md",tags:[],version:"5.2",sidebarPosition:10,frontMatter:{title:"IBM QRadar",taxonomy:{category:"docs"},slug:"/integration/ibmqr"},sidebar:"tutorialSidebar",previous:{title:"IBM Security Advisor",permalink:"/neuvector-docs/5.2/integration/ibmsa"},next:{title:"Splunk",permalink:"/neuvector-docs/5.2/integration/splunk"}},d={},c=[{value:"Integrating with IBM Qradar",id:"integrating-with-ibm-qradar",level:3},{value:"IBM QRadar and NeuVector DSM",id:"ibm-qradar-and-neuvector-dsm",level:4},{value:"How to Integrate NeuVector with QRadar",id:"how-to-integrate-neuvector-with-qradar",level:4},{value:"Configure NeuVector to Send Syslog to QRadar",id:"configure-neuvector-to-send-syslog-to-qradar",level:4},{value:"Configure QRadar to Analyze NeuVector Logs",id:"configure-qradar-to-analyze-neuvector-logs",level:4},{value:"Verify the Log Activities",id:"verify-the-log-activities",level:4},{value:"Integration Summary",id:"integration-summary",level:4}];function l(e){const t={a:"a",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"integrating-with-ibm-qradar",children:"Integrating with IBM Qradar"}),"\n",(0,n.jsx)(t.p,{children:"The IBM\xae QRadar\xae Security Information and Event Management (SIEM) helps security teams accurately detect and prioritize threats across the enterprise, and it provides intelligent insights that enable teams to respond quickly to reduce the impact of incidents. By consolidating log events and network flow data from thousands of devices, endpoints and applications distributed throughout your network, QRadar correlates all this different information and aggregates related events into single alerts to accelerates incident analysis and remediation. QRadar SIEM is available on premises and in a cloud environment."}),"\n",(0,n.jsx)(t.p,{children:"NeuVector is a full lifecycle container security platform which fully supports QRadar integration. This integration enables QRadar to be able to collect events, logs and incident information for container and Kubernetes environment. By using NeuVector\u2019s DSM for QRadar, customers will be able to normalize the NeuVector security log data in QRadar, then analyze, report or remediate container security events."}),"\n",(0,n.jsx)(t.h4,{id:"ibm-qradar-and-neuvector-dsm",children:"IBM QRadar and NeuVector DSM"}),"\n",(0,n.jsxs)(t.p,{children:["The NeuVector DSM for integrating with IBM QRadar is published and IBM validated on the IBM X-Force / App Exchange website. It is available for download ",(0,n.jsx)(t.a,{href:"https://exchange.xforce.ibmcloud.com/hub/extension/f6dcde294cac1237ce08bcd4dfbc9142",children:"here"})," from the App Exchange website."]}),"\n",(0,n.jsxs)(t.p,{children:["It is also available for download from this site ",(0,n.jsx)(t.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:r(67540).Z+"",children:"here"})]}),"\n",(0,n.jsx)(t.h4,{id:"how-to-integrate-neuvector-with-qradar",children:"How to Integrate NeuVector with QRadar"}),"\n",(0,n.jsx)(t.p,{children:"Before importing the NeuVector DSM into QRadar, we recommend you check/modify these QRadar configurations to make sure everything will work as expected:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"IBM QRadar version 7.3.1 and later"}),"\n",(0,n.jsx)(t.li,{children:"Configure QRadar \u201cSystem Settings\u201d to make sure the Syslog Payload Length is big enough for example:"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"QRadar",src:r(87649).Z+"",width:"1554",height:"1089"})}),"\n",(0,n.jsx)(t.h4,{id:"configure-neuvector-to-send-syslog-to-qradar",children:"Configure NeuVector to Send Syslog to QRadar"}),"\n",(0,n.jsx)(t.p,{children:"Enable Syslog configuration in Settings -> Configuration. The Server IP/URL and port should be pointing to the QRadar service IP and Port, and the default Syslog port will be 514. Use the UDP protocol and \u201cIn Json\u201d log format. Select the log level and categories to report. In a multi-cluster NeuVector environment, to collect all clusters logs, this setting needs to be enabled in every cluster. You can configure the cluster name on this page to distinguish cluster events from each other."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"QRadar",src:r(64675).Z+"",width:"756",height:"139"})}),"\n",(0,n.jsx)(t.h4,{id:"configure-qradar-to-analyze-neuvector-logs",children:"Configure QRadar to Analyze NeuVector Logs"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Enable or Import the NeuVector DSM to QRadar\nWhen adding a new QRadar log source, if \u201cNeuVector\u201d appears in the QRadar log source type, then please ignore the log source importing instructions below and take the next step \u201cAdd and enable log sources for NeuVector\u201d."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"QRadar",src:r(87589).Z+"",width:"758",height:"279"})}),"\n",(0,n.jsx)(t.p,{children:"If the \u201cNeuVector\u201d log source type was not found in QRadar, please refer to QRadar user manual to install NeuVector DSM via Admin > Extension Management."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"QRadar",src:r(59825).Z+"",width:"400",height:"239"})}),"\n",(0,n.jsxs)(t.ol,{start:"2",children:["\n",(0,n.jsx)(t.li,{children:"Add and enable log sources for NeuVector"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Now we can add a new log source for NeuVector logs:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"QRadar",src:r(65214).Z+"",width:"654",height:"710"})}),"\n",(0,n.jsx)(t.p,{children:"\u201cLog Source Identifier\u201d should be the lead controller\u2019s pod name. NeuVector\u2019s lead controller\u2019s pod name can be found in the raw log data of QRadar or from NeuVector\u2019s management console \u201cAssets\\Controllers\u201d as below:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"QRadar",src:r(91889).Z+"",width:"741",height:"270"})}),"\n",(0,n.jsx)(t.p,{children:"Multiple log sources should be added if there are multiple NeuVector clusters running. NeuVector log source is added and enabled:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"QRadar",src:r(52732).Z+"",width:"902",height:"97"})}),"\n",(0,n.jsx)(t.h4,{id:"verify-the-log-activities",children:"Verify the Log Activities"}),"\n",(0,n.jsx)(t.p,{children:"Generate some NeuVector logs, for example Network Policy Violations, Configuration change events or do some Vulnerability Scans on containers/nodes. These incident or event logs will be sent to QRadar in seconds. And the NeuVector logs should be normalized in QRadar console. It can also be verified through QRadar\u2019s DSM editor:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"QRadar",src:r(46921).Z+"",width:"800",height:"352"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"QRadar",src:r(32894).Z+"",width:"802",height:"314"})}),"\n",(0,n.jsx)(t.h4,{id:"integration-summary",children:"Integration Summary"}),"\n",(0,n.jsx)(t.p,{children:"With the completed integration, NeuVector security and management events can be managed through QRadar together with event data from other sources. QRadar serves as the permanent event storage for NeuVector events, while the NeuVector controller performs real-time security responses and short-term cluster storage for events. QRadar can perform advanced correlation and alerting for critical container and Kubernetes security events."})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},67540:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/files/NeuVectorDSM_1.0.2-b97590afecee36ca628d8df94e4d43c5.zip"},87649:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Qradar1-906be6d7da10c2b61e35e90e695825f2.png"},87589:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Qradar3-3d8bb5faf9939b304baf438217a3bca1.png"},59825:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Qradar4-e70dc474d0d6a311e8a1e9e56a206116.png"},65214:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Qradar5-8f33f73492ed989ceba0e82a49bb99d6.png"},91889:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Qradar6-7031e8697ad1922dfe766f86bc1a8143.png"},52732:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Qradar7-ee4f90612209cf4e5db773cd663282fc.png"},46921:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Qradar8-43b69c33b6e2ae432d26d91d020c5a4e.png"},32894:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Qradar9-79c4b6259caad884012f956226c08653.png"},64675:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Qradar_syslog2-5c2f17723fa0efe35a8f070c8400769d.png"},11151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>i});var n=r(67294);const a={},o=n.createContext(a);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);