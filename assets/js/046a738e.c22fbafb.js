"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9298],{28948:(e,i,o)=>{o.r(i),o.d(i,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var n=o(85893),r=o(11151);const s={title:"Improve Security Risk Score",taxonomy:{category:"docs"},slug:"/navigation/improve_score"},t=void 0,c={id:"navigation/improve_score/improve_score",title:"Improve Security Risk Score",description:"Improving the Security Risk Score",source:"@site/versioned_docs/version-5.3/04.navigation/03.improve_score/03.improve_score.md",sourceDirName:"04.navigation/03.improve_score",slug:"/navigation/improve_score",permalink:"/neuvector-docs/navigation/improve_score",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/versioned_docs/version-5.3/04.navigation/03.improve_score/03.improve_score.md",tags:[],version:"5.3",sidebarPosition:3,frontMatter:{title:"Improve Security Risk Score",taxonomy:{category:"docs"},slug:"/navigation/improve_score"},sidebar:"tutorialSidebar",previous:{title:"Enterprise Multi-Cluster Management",permalink:"/neuvector-docs/navigation/multicluster"},next:{title:"5. Security Policy",permalink:"/neuvector-docs/policy"}},l={},a=[{value:"Improving the Security Risk Score",id:"improving-the-security-risk-score",level:3},{value:"How to Improve the Score",id:"how-to-improve-the-score",level:4},{value:"NeuVector Protection Mode",id:"neuvector-protection-mode",level:5},{value:"Ingress/Egress Risk",id:"ingressegress-risk",level:5},{value:"Privileged and/or Root Containers",id:"privileged-andor-root-containers",level:5},{value:"Admission Controls",id:"admission-controls",level:5},{value:"Vulnerabilities",id:"vulnerabilities",level:5},{value:"How to Customize Which Container Groups Are Included in the Score",id:"how-to-customize-which-container-groups-are-included-in-the-score",level:4}];function d(e){const i={admonition:"admonition",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h3,{id:"improving-the-security-risk-score",children:"Improving the Security Risk Score"}),"\n",(0,n.jsx)(i.p,{children:"The Security Risk Score in the Dashboard provides a score between 0 and 100."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"0-20 Good"}),"\n",(0,n.jsx)(i.li,{children:"21-50 Fair"}),"\n",(0,n.jsx)(i.li,{children:"51-100 Poor"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"The score is the sum of following metrics, each shown as a maximum value, with a max 100:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"NeuVector Protection Mode - 30"}),"\n",(0,n.jsx)(i.li,{children:"Ingress/Egress Risk - 42"}),"\n",(0,n.jsx)(i.li,{children:"Privileged Containers - 4"}),"\n",(0,n.jsx)(i.li,{children:"Root Containers - 4"}),"\n",(0,n.jsx)(i.li,{children:"Admission Controls - 4"}),"\n",(0,n.jsx)(i.li,{children:"Vulnerabilities - 16 (Containers - 8, Host - 6, orchestrator Platform - 2)"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"By default, NeuVector includes all containers, including system containers, in the risk score. This can be customized for each learned container Group to disable certain containers from being included in the risk score calculation, as shown below."}),"\n",(0,n.jsx)(i.h4,{id:"how-to-improve-the-score",children:"How to Improve the Score"}),"\n",(0,n.jsx)(i.h5,{id:"neuvector-protection-mode",children:"NeuVector Protection Mode"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Change the New Service Protection Mode in Settings -> Configuration to Monitor or Protect"}),"\n",(0,n.jsx)(i.li,{children:"Change all \u2018learned\u2019 Groups in Policy -> Groups to Monitor or Protect"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"Or"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Click the Tool icon to follow the Wizard to perform the above steps"}),"\n"]}),"\n",(0,n.jsx)(i.h5,{id:"ingressegress-risk",children:"Ingress/Egress Risk"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Click the Tool icon to follow the Wizard to review Ingress and Egress"}),"\n",(0,n.jsx)(i.li,{children:"Review all Ingress and Egress Connections to make sure they should be allowed"}),"\n",(0,n.jsx)(i.li,{children:"Switch all services that are still in Discover mode to Monitor or Protect"}),"\n",(0,n.jsx)(i.li,{children:"Review and Clear all threats, violations and session history by clicking the Delete/Trash icon for each one"}),"\n"]}),"\n",(0,n.jsx)(i.h5,{id:"privileged-andor-root-containers",children:"Privileged and/or Root Containers"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Remove privileged containers"}),"\n",(0,n.jsx)(i.li,{children:"Remove Root Containers\nNote: This may not be possible due to your required containers, however each of these only account for 4 points."}),"\n"]}),"\n",(0,n.jsx)(i.h5,{id:"admission-controls",children:"Admission Controls"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Make sure that, in a Kubernetes/OpenShift environment, Admission Control is enabled and there is at least one active rule in Policy -> Admission Control"}),"\n"]}),"\n",(0,n.jsx)(i.h5,{id:"vulnerabilities",children:"Vulnerabilities"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"Make sure all non-system containers are in Monitor or Protect mode, in Policy -> Groups"}),"\n",(0,n.jsx)(i.li,{children:"Remove/remediate host vulnerabilities"}),"\n",(0,n.jsx)(i.li,{children:"Remove/remediate orchestrator platform (e.g. Kubernetes, OpenShift) vulnerabilities"}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"how-to-customize-which-container-groups-are-included-in-the-score",children:"How to Customize Which Container Groups Are Included in the Score"}),"\n",(0,n.jsx)(i.p,{children:"To enable or disable which container Groups are included in the Security Risk Score, go to the Policy -> Groups menu, and select the Group to modify. The summary column on the right has a 'Scorable' icon which indicates which groups are used for scoring."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"scorable",src:o(75598).Z+"",width:"2812",height:"1228"})}),"\n",(0,n.jsx)(i.p,{children:"Select or deselect the Scorable check box in the upper right for the selected Group."}),"\n",(0,n.jsx)(i.admonition,{type:"note",children:(0,n.jsx)(i.p,{children:"Only 'learned Groups' (e.g. those that begin with 'nv.') can be edited, not reserved groups or custom groups."})})]})}function h(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},75598:(e,i,o)=>{o.d(i,{Z:()=>n});const n=o.p+"assets/images/risk_scorable-41505fa140bf94da1ed51d545b905a33.png"},11151:(e,i,o)=>{o.d(i,{Z:()=>c,a:()=>t});var n=o(67294);const r={},s=n.createContext(r);function t(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);