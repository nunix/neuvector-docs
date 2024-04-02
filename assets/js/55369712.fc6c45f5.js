"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8657],{47982:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var i=s(85893),t=s(11151);const a={title:"Scanning & Compliance",taxonomy:{category:"docs"},slug:"/scanning/scanning"},r=void 0,c={id:"scanning/scanning/scanning",title:"Scanning & Compliance",description:"NeuVector enables full lifecycle scanning & compliance through vulnerability scanning and running of the CIS benchmarks for security, as well as custom compliance checks. The Security Risks menu enables customizable Vulnerability and Compliance management investigation, triage, and reporting. Easily research image vulnerabilities and find out which nodes or containers contain those vulnerabilities. Advanced filtering makes reviewing scan and compliance check results easy and provides customized reporting. It also provides standard and customizable compliance reports and templates for PCI, GDPR, and other regulations.",source:"@site/docs/06.scanning/01.scanning/01.scanning.md",sourceDirName:"06.scanning/01.scanning",slug:"/scanning/scanning",permalink:"/neuvector-docs/next/scanning/scanning",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/docs/06.scanning/01.scanning/01.scanning.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Scanning & Compliance",taxonomy:{category:"docs"},slug:"/scanning/scanning"},sidebar:"tutorialSidebar",previous:{title:"6. Security Risks, Scanning & Compliance",permalink:"/neuvector-docs/next/scanning"},next:{title:"Vulnerability Management",permalink:"/neuvector-docs/next/scanning/scanning/vulnerabilities"}},o={},l=[{value:"Overview of NeuVector Scanning",id:"overview-of-neuvector-scanning",level:3},{value:"Kubernetes Resource Deployment File Scanning",id:"kubernetes-resource-deployment-file-scanning",level:4},{value:"Managing Vulnerabilities and Compliance",id:"managing-vulnerabilities-and-compliance",level:3},{value:"Security Risks Menu",id:"security-risks-menu",level:4},{value:"Assets Menu",id:"assets-menu",level:4},{value:"Automated Run-Time Scanning",id:"automated-run-time-scanning",level:4},{value:"Automated Actions, Mitigations, and Responses Based on Vulnerabilities",id:"automated-actions-mitigations-and-responses-based-on-vulnerabilities",level:3},{value:"Federated Registries for Distributed Image Scanning Results",id:"federated-registries-for-distributed-image-scanning-results",level:4},{value:"Auto-scaling of Scanner Pods",id:"auto-scaling-of-scanner-pods",level:4}];function d(e){const n={a:"a",admonition:"admonition",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"NeuVector enables full lifecycle scanning & compliance through vulnerability scanning and running of the CIS benchmarks for security, as well as custom compliance checks. The Security Risks menu enables customizable Vulnerability and Compliance management investigation, triage, and reporting. Easily research image vulnerabilities and find out which nodes or containers contain those vulnerabilities. Advanced filtering makes reviewing scan and compliance check results easy and provides customized reporting. It also provides standard and customizable compliance reports and templates for PCI, GDPR, and other regulations."}),"\n",(0,i.jsx)(n.h3,{id:"overview-of-neuvector-scanning",children:"Overview of NeuVector Scanning"}),"\n",(0,i.jsx)(n.p,{children:"Scanning is performed at all phases of the pipeline from Build to Registry to Run-Time, on various assets, as shown below."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"Scan Type"})}),(0,i.jsx)(n.th,{children:"Image"}),(0,i.jsx)(n.th,{children:"Node"}),(0,i.jsx)(n.th,{children:"Container"}),(0,i.jsx)(n.th,{children:"Orchestrator"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Vulnerabilities"})}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"CIS Benchmarks"})}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Custom Compliance"})}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"No"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Secrets"})}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"No"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Modules"})}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"N/A"}),(0,i.jsx)(n.td,{children:"N/A"}),(0,i.jsx)(n.td,{children:"N/A"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Images are scanned either in Registry scanning or through Build-phase plug-ins such as Jenkins, CircleCI, Gitlab etc."}),"\n",(0,i.jsx)(n.p,{children:"The CIS Benchmarks support by NeuVector include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Kubernetes"}),"\n",(0,i.jsx)(n.li,{children:"Docker"}),"\n",(0,i.jsx)(n.li,{children:"Red Hat OpenShift draft 'Inspired by CIS' benchmarks"}),"\n",(0,i.jsx)(n.li,{children:"Google GKE"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The open source implementation of these benchmarks can be found on the ",(0,i.jsx)(n.a,{href:"https://github.com/neuvector",children:"NeuVector Github page"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Secrets can also be detected on Nodes and in Containers with ",(0,i.jsx)(n.a,{href:"/policy/customcompliance",children:"Custom Scripts"}),"."]})}),"\n",(0,i.jsx)(n.h4,{id:"kubernetes-resource-deployment-file-scanning",children:"Kubernetes Resource Deployment File Scanning"}),"\n",(0,i.jsxs)(n.p,{children:["NeuVector is able to scan deployment yaml files for configuration assessments against Admission Control rules. This is useful to scan deployment yaml files early in the pipeline to determine if the deployment would violate any rules before attempting the deployment. Please see ",(0,i.jsx)(n.a,{href:"/policy/admission/assessment",children:"Configuration Assessment"})," under Admission Controls for more details."]}),"\n",(0,i.jsx)(n.h3,{id:"managing-vulnerabilities-and-compliance",children:"Managing Vulnerabilities and Compliance"}),"\n",(0,i.jsx)(n.p,{children:"NeuVector provides several ways to review vulnerability and compliance scan results and generate reports. These include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Dashboard."})," Review summary vulnerabilities and see how they impact the overall ",(0,i.jsx)(n.a,{href:"/navigation/improve_score",children:"Security Risk Score"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Security Risks Menu."})," View the impact of vulnerabilities and compliance issues and generate reports with advanced filtering."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Assets Menu."})," See vulnerability and compliance results for each asset such as registries, nodes, and containers."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Notifications -> Risk Reports."})," View scan events for each asset."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Response Rules."})," Create responses such as web hook notifications or quarantines based on scan results."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"REST API."})," Trigger scans and pull scan results programmatically to automate the process."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"SYSLOG/Webhook Alerts."})," Send scan results to a SIEM or other enterprise platforms."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"security-risks-menu",children:"Security Risks Menu"}),"\n",(0,i.jsx)(n.p,{children:"These menu's combine the results from registry (image), node, and container vulnerability scans and compliance checks found in the Assets menu to enable end-to-end vulnerability management and reporting. The Compliance profile menu enables customization of the PCI, GDPR and other compliance checks for generating compliance reports."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"SecurityRisks",src:s(60735).Z+"",width:"1394",height:"712"})}),"\n",(0,i.jsxs)(n.p,{children:["See the next section on ",(0,i.jsx)(n.a,{href:"/scanning/scanning/vulnerabilities",children:"Vulnerability Management"})," for how to manage vulnerabilities in this menu, and the ",(0,i.jsx)(n.a,{href:"/scanning/scanning/compliance",children:"Compliance & CIS Benchmarks"})," section for reporting on CIS Benchmarks and industry compliance such as PCI, GDPR, HIPAA, and NIST."]}),"\n",(0,i.jsx)(n.h4,{id:"assets-menu",children:"Assets Menu"}),"\n",(0,i.jsx)(n.p,{children:"The Assets menu reports vulnerabilities and compliance checks results organized by the asset."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Platforms. The orchestration platform such as Kubernetes, and vulnerability scans of the platform."}),"\n",(0,i.jsx)(n.li,{children:"Nodes. Nodes/hosts protected by NeuVector Enforcers, and results of Compliance checks such as CIS benchmarks and custom checks, as well as host vulnerability scans."}),"\n",(0,i.jsx)(n.li,{children:"Containers. All containers in the cluster including system containers, and the results of Compliance checks such as CIS benchmarks and custom checks, as well as container run-time Vulnerability scans. Process activity and performance statistics can also be found here."}),"\n",(0,i.jsx)(n.li,{children:"Registries. Registries/repositories scanned by NeuVector. Layered image scanning results are found here, and scan results can be used in Admission control rules (found in Policy -> Admission Controls)."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/policy/customcompliance",children:"Custom compliance checks"})," as mentioned above are defined in the ",(0,i.jsx)(n.a,{href:"/policy/groups",children:"Policy -> Groups"})," menu."]})}),"\n",(0,i.jsx)(n.h4,{id:"automated-run-time-scanning",children:"Automated Run-Time Scanning"}),"\n",(0,i.jsx)(n.p,{children:"NeuVector can scan running containers, host nodes, and the orchestration platform for vulnerabilities. In the Assets menu for Nodes or Containers, enable Auto-Scan by clicking on the Vulnerabilities tab for a node or container, then Auto-Scan (appears in upper right) to scan all running containers, nodes, and platform including newly started ones once they start running. You can also select a container or node and scan it manually."}),"\n",(0,i.jsx)(n.p,{children:"You can click on each vulnerability name/CVE that is discovered to retrieve a description of it, and click on the inspect arrow in the popup to see the detailed description of the vulnerability."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Vulnerabilities",src:s(15752).Z+"",width:"2528",height:"1032"})}),"\n",(0,i.jsxs)(n.p,{children:["The auto-scan will also be triggered when ever there is an update to the NeuVector CVE database. Please see the section ",(0,i.jsx)(n.a,{href:"/scanning/updating",children:"Updating the CVE Database"})," for details."]}),"\n",(0,i.jsx)(n.h3,{id:"automated-actions-mitigations-and-responses-based-on-vulnerabilities",children:"Automated Actions, Mitigations, and Responses Based on Vulnerabilities"}),"\n",(0,i.jsxs)(n.p,{children:["Admission control rules can be created to prevent deployment of vulnerable images based on Registry scanning results. See the Security Policy -> ",(0,i.jsx)(n.a,{href:"/policy/admission",children:"Admission Control"})," section for details."]}),"\n",(0,i.jsxs)(n.p,{children:["Please see the section Security Policy -> ",(0,i.jsx)(n.a,{href:"/policy/responserules",children:"Response Rules"})," for instructions for creating automated responses to vulnerabilities detected either during registry scanning, run-time scanning, or CIS benchmarks. Responses can include quarantine, webhook notification, and suppression."]}),"\n",(0,i.jsx)(n.h4,{id:"federated-registries-for-distributed-image-scanning-results",children:"Federated Registries for Distributed Image Scanning Results"}),"\n",(0,i.jsxs)(n.p,{children:["The primary (master) cluster can scan a registry/repo designated as a federated registry. The scan results from these registries will be synchronized to all managed (remote) clusters. This enables display of scan results in the managed cluster console as well as use of the results in admission control rules of the managed cluster. Registries only need to be scanned once instead of by each cluster, reducing CPU/memory and network bandwidth usage. See the ",(0,i.jsx)(n.a,{href:"/navigation/multicluster",children:"multi-cluster"})," section for more details."]}),"\n",(0,i.jsx)(n.h4,{id:"auto-scaling-of-scanner-pods",children:"Auto-scaling of Scanner Pods"}),"\n",(0,i.jsxs)(n.p,{children:["Scanner pods can be configured to auto-scale based on certain criteria. This will ensure that scanning jobs are handled quickly and efficiently, especially if there are thousands of images to be scanned or re-scanned. There are three possible settings: delayed, immediate,  and disabled. When images are queued for scanning by the controller, it keeps a 'task count' of the queue size. Please see the ",(0,i.jsx)(n.a,{href:"/scanning/scanners",children:"multiple scanners"})," section for more details."]}),"\n",(0,i.jsx)(n.admonition,{title:"important",type:"warning",children:(0,i.jsx)(n.p,{children:"Scanner auto-scaling is not supported when scanner is deployed with an OpenShift operator, as the operator will always change the number of pods to its configured value."})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},15752:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/Vuln1-3f9ea43768a681d52e16d1a3530549c2.png"},60735:(e,n,s)=>{s.d(n,{Z:()=>i});const i=s.p+"assets/images/vulnerabilities_4_4-3879753b2374873ffe2e5ba381a54483.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>r});var i=s(67294);const t={},a=i.createContext(t);function r(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);