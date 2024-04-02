"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6352],{53190:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>u,frontMatter:()=>s,metadata:()=>n,toc:()=>l});var o=r(85893),a=r(11151);const s={title:"Federated Policy",taxonomy:{category:"docs"},slug:"/policy/federated"},d=void 0,n={id:"policy/federated/federated",title:"Federated Policy",description:"Federated Policy",source:"@site/docs/05.policy/12.federated/12.federated.md",sourceDirName:"05.policy/12.federated",slug:"/policy/federated",permalink:"/neuvector-docs/next/policy/federated",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/docs/05.policy/12.federated/12.federated.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Federated Policy",taxonomy:{category:"docs"},slug:"/policy/federated"},sidebar:"tutorialSidebar",previous:{title:"Custom Compliance Checks",permalink:"/neuvector-docs/next/policy/customcompliance"},next:{title:"CRD - Custom Resource Definitions",permalink:"/neuvector-docs/next/policy/usingcrd"}},c={},l=[{value:"Federated Policy",id:"federated-policy",level:3}];function i(e){const t={h3:"h3",img:"img",p:"p",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h3,{id:"federated-policy",children:"Federated Policy"}),"\n",(0,o.jsx)(t.p,{children:"After a Master cluster has been created, Federated rules can be created in the Master which are automatically propagated to each cluster. This is useful to create global rules that should be applied to each cluster, such as global network rules. Federated rules will appear in every cluster as read-only and can NOT be deleted or edited by the local admin of the cluster."}),"\n",(0,o.jsx)(t.p,{children:"To configure Federated rules, click on Federated Policy in the upper right drop down menu. You will see tabs for Groups, Admission Control, Network Rules and other rules which can be federated. Select the tab and create a new Group or rule. In the sample below, two Federated groups have been created, which will be propagated to each cluster."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"FederatedGroup",src:r(58747).Z+"",width:"1984",height:"716"})}),"\n",(0,o.jsx)(t.p,{children:"And the following Federated Network Rule has been created to allow access of SSL from the node demo pods to google.com."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"FederatedNetwork",src:r(18711).Z+"",width:"1892",height:"638"})}),"\n",(0,o.jsx)(t.p,{children:"After these rules and groups have been propagated to the remote cluster(s), they will appear as Federated rules and groups in the local cluster's console."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"FederatedRuleRemote",src:r(50589).Z+"",width:"1918",height:"718"})}),"\n",(0,o.jsx)(t.p,{children:"In the above example, the Federated rule is shown which is different than learned rules and 'user created' rules which were created in the local cluster. The user created rule 1 can be selected for editing or deletion while the Federated can not. In addition, Federated network rules will always show at the top of the list, thus taking precedence over other rules."}),"\n",(0,o.jsx)(t.p,{children:"Other rules such as Admission Control, Response, Process and File will behave in the same way, except that the order of rules is only relevant for the Network rules."}),"\n",(0,o.jsx)(t.p,{children:"Note that the configuration of Process and File rules requires the selection of a Federated Group, as these must be applied to a target group as defined in the Federated Group tab. After a new Group has been configured in Federated -> Groups, it will show as a selectable option when configuring a group in Process or File rules."})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},58747:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/fed_group-e058d3e4f09c907dcaa5c517e62a6cea.png"},18711:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/fed_network-a7724cd03b24b47213b0c43d8515f718.png"},50589:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/fed_rule_remote-22b58f6c557962bbedccf48c51360fa0.png"},11151:(e,t,r)=>{r.d(t,{Z:()=>n,a:()=>d});var o=r(67294);const a={},s=o.createContext(a);function d(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);