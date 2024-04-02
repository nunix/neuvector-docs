"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9067],{48414:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var n=t(85893),i=t(11151);const r={title:"Restoring NeuVector Configuration",taxonomy:{category:"docs"},slug:"/deploying/restore"},s=void 0,a={id:"deploying/restore/restore",title:"Restoring NeuVector Configuration",description:"Restoring NeuVector Configuration",source:"@site/versioned_docs/version-5.3/02.deploying/11.restore/11.restore.md",sourceDirName:"02.deploying/11.restore",slug:"/deploying/restore",permalink:"/neuvector-docs/deploying/restore",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/versioned_docs/version-5.3/02.deploying/11.restore/11.restore.md",tags:[],version:"5.3",sidebarPosition:11,frontMatter:{title:"Restoring NeuVector Configuration",taxonomy:{category:"docs"},slug:"/deploying/restore"},sidebar:"tutorialSidebar",previous:{title:"Removing or Resetting NeuVector",permalink:"/neuvector-docs/deploying/remove"},next:{title:"3. Initial Configuration & Console Login",permalink:"/neuvector-docs/configuration"}},l={},c=[{value:"Restoring NeuVector Configuration",id:"restoring-neuvector-configuration",level:3},{value:"Recommended High Availability Settings",id:"recommended-high-availability-settings",level:4}];function u(e){const o={a:"a",admonition:"admonition",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h3,{id:"restoring-neuvector-configuration",children:"Restoring NeuVector Configuration"}),"\n",(0,n.jsxs)(o.p,{children:["A backup of the NeuVector configuration can be applied to restore a previous configuration of NeuVector. The backup file can be generated manually as well as imported from the console in Settings -> Configuration, choosing all configuration (e.g. registry configurations, integrations, other settings plus policy) or Policy only (e.g. rules/security policy). The rest API can also be used to automatically backup the configuration, as seen in this ",(0,n.jsx)(o.a,{href:"/automation/automation#exportimport-configuration-file",children:"example"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["Cluster events where all controllers stop running, thereby losing real-time configuration state, can be automatically stored when ",(0,n.jsx)(o.a,{href:"/deploying/production#backups-and-persistent-data",children:"persistent storage"})," has been properly configured."]}),"\n",(0,n.jsx)(o.admonition,{type:"note",children:(0,n.jsxs)(o.p,{children:["NeuVector does not support partial restoration of objects (e.g. network rules only) nor timestamped restoration (e.g. restore from date/time snapshots). Please use ",(0,n.jsx)(o.a,{href:"/automation/automation#exportimport-configuration-file",children:"automation scripts"})," to regularly backup configuration files and manage timestamps."]})}),"\n",(0,n.jsx)(o.admonition,{title:"important",type:"warning",children:(0,n.jsx)(o.p,{children:"The backup configuration files should not be edited in any way. Any changes to these from their exported state could result in restoration errors and an unpredictable result."})}),"\n",(0,n.jsx)(o.admonition,{title:"caution",type:"info",children:(0,n.jsx)(o.p,{children:"Backup configuration files should be used to restore a NeuVector state on the same cluster from which they were exported. Applying a backup configuration file from a different cluster could result in unpredictable results."})}),"\n",(0,n.jsx)(o.h4,{id:"recommended-high-availability-settings",children:"Recommended High Availability Settings"}),"\n",(0,n.jsx)(o.p,{children:"Manual backup and restore of configuration should be planned only as a last resort. The following steps are recommended for high availability."}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsx)(o.li,{children:"Use Helm with a ConfigMap for initial deployment and configuration."}),"\n",(0,n.jsx)(o.li,{children:"Use CRDs for defining policy such as network/process, admission control, and other rules."}),"\n",(0,n.jsx)(o.li,{children:"Run multiple controllers (minimum 3) to auto-sync configuration between running pods, and ensure they run on different hosts."}),"\n",(0,n.jsx)(o.li,{children:"Configure persistent storage (as part of step 1) to recover from any cluster wide failures where all controllers stop running."}),"\n",(0,n.jsx)(o.li,{children:"Regularly backup configuration to timestamped backup files."}),"\n",(0,n.jsx)(o.li,{children:"Restore a cluster's NeuVector configuration from a backup file as a last resort, applying any CRDs after restoration that were new or changed since the previous backup."}),"\n"]})]})}function d(e={}){const{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},11151:(e,o,t)=>{t.d(o,{Z:()=>a,a:()=>s});var n=t(67294);const i={},r=n.createContext(i);function s(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);