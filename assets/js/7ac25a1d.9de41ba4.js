"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9313],{44200:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=t(85893),o=t(11151);const s={title:"Enterprise Integration",taxonomy:{category:"docs"},slug:"/integration/integration"},r=void 0,a={id:"integration/integration/integration",title:"Enterprise Integration",description:"Integration",source:"@site/versioned_docs/version-5.3/08.integration/01.integration/01.integration.md",sourceDirName:"08.integration/01.integration",slug:"/integration/integration",permalink:"/neuvector-docs/integration/integration",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/versioned_docs/version-5.3/08.integration/01.integration/01.integration.md",tags:[],version:"5.3",sidebarPosition:1,frontMatter:{title:"Enterprise Integration",taxonomy:{category:"docs"},slug:"/integration/integration"},sidebar:"tutorialSidebar",previous:{title:"8. Enterprise Integration",permalink:"/neuvector-docs/integration"},next:{title:"LDAP",permalink:"/neuvector-docs/integration/ldap"}},c={},l=[{value:"Integration",id:"integration",level:3},{value:"OpenShift/Kubernetes RBACs",id:"openshiftkubernetes-rbacs",level:4},{value:"Kubernetes RBACs",id:"kubernetes-rbacs",level:5},{value:"SYSLOG",id:"syslog",level:4},{value:"Webhooks",id:"webhooks",level:4},{value:"Directory/SSO Integration",id:"directorysso-integration",level:4}];function d(e){const n={a:"a",admonition:"admonition",h3:"h3",h4:"h4",h5:"h5",img:"img",p:"p",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"integration",children:"Integration"}),"\n",(0,i.jsx)(n.p,{children:"NeuVector provides a number of ways to integrate, including a REST API, CLI, SYSLOG, RBACs, SAML, LDAP, and webhooks. See the Automation section for examples of scripting using the REST API."}),"\n",(0,i.jsxs)(n.p,{children:["Integrations with other ecosystem partners such as Sonatype (Nexus Lifecycle), IBM Cloud (QRadar and Security Advisor), Prometheus/Grafana, are also supported. Many of these can be found on the ",(0,i.jsx)(n.a,{href:"https://github.com/neuvector",children:"NeuVector Github"})," page."]}),"\n",(0,i.jsx)(n.p,{children:"The following configurations can be found in Settings:"}),"\n",(0,i.jsx)(n.h4,{id:"openshiftkubernetes-rbacs",children:"OpenShift/Kubernetes RBACs"}),"\n",(0,i.jsx)(n.p,{children:"Select this option if you are using Red Hat OpenShift Role Based Access Controls (RBACs) and would like NeuVector to automatically read and enforce those. If selected, OpenShift users can log into the NeuVector console using their OpenShift credentials, and will only have access to the resources (Projects, containers, nodes etc) according to their role in the OpenShift cluster. OpenShift integration uses the OAuth2 protocol."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"OpenShift",src:t(13813).Z+"",width:"813",height:"116"})}),"\n",(0,i.jsx)(n.admonition,{title:"important",type:"warning",children:(0,i.jsx)(n.p,{children:"Do not use the setting in OpenShift AllowAllPasswordIdentityProvider which allows any password to be used to log in. This will allow a user to login into NeuVector with any password as well (as a read only user). It will also create a new user in OpenShift for every login (see \u2018oc get user\u2019 results)."})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"The default Admin user of NeuVector and any additional users created in NeuVector will still be active with OpenShift RBACs enabled."})}),"\n",(0,i.jsx)(n.h5,{id:"kubernetes-rbacs",children:"Kubernetes RBACs"}),"\n",(0,i.jsx)(n.p,{children:"To manually configure RBACs for Kubernetes namespaces, open the Advanced Setting in the new user creation screen in Settings -> Users -> Add User. Here you can enter the namespaces(s) which this user should have access to in NeuVector."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Kubernetes",src:t(30365).Z+"",width:"1206",height:"345"})}),"\n",(0,i.jsx)(n.h4,{id:"syslog",children:"SYSLOG"}),"\n",(0,i.jsx)(n.p,{children:"Enter the SYSLOG server IP and select the level of notification. You can also use a DNS name and/or select TCP for configuration."}),"\n",(0,i.jsx)(n.h4,{id:"webhooks",children:"Webhooks"}),"\n",(0,i.jsx)(n.p,{children:"Notifications can be sent via webhooks to an endpoint. Enter the endpoint URL for notifications to be sent. Webhook notifications for custom events can be configured in Policy -> Response Rules"}),"\n",(0,i.jsx)(n.h4,{id:"directorysso-integration",children:"Directory/SSO Integration"}),"\n",(0,i.jsxs)(n.p,{children:["See the next sections for LDAP, MSAD, SAML, OpenId and other integrations. See the ",(0,i.jsx)(n.a,{href:"/configuration/users#users",children:"Basics -> Users & Roles"})," section for predefined and custom roles in NeuVector which can be mapped in the integration."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},30365:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/k8s-rbac-0324e1c0cff66271f4fa13172fe5e809.png"},13813:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/openshift-rbac-6283e153bc949d6f7359791cad530e8e.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(67294);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);