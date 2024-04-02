"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1738],{46708:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var t=s(85893),i=s(11151);const a={title:"SAML (ADFS)",taxonomy:{category:"docs"},slug:"/integration/adfs"},r=void 0,d={id:"integration/adfs/adfs",title:"SAML (ADFS)",description:"Setting Up ADFS and NeuVector Integration",source:"@site/versioned_docs/version-5.2/08.integration/06.adfs/06.adfs.md",sourceDirName:"08.integration/06.adfs",slug:"/integration/adfs",permalink:"/neuvector-docs/5.2/integration/adfs",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/versioned_docs/version-5.2/08.integration/06.adfs/06.adfs.md",tags:[],version:"5.2",sidebarPosition:6,frontMatter:{title:"SAML (ADFS)",taxonomy:{category:"docs"},slug:"/integration/adfs"},sidebar:"tutorialSidebar",previous:{title:"SAML (Azure AD)",permalink:"/neuvector-docs/5.2/integration/msazure"},next:{title:"OpenID Connect Azure/Okta",permalink:"/neuvector-docs/5.2/integration/openid"}},l={},o=[{value:"Setting Up ADFS and NeuVector Integration",id:"setting-up-adfs-and-neuvector-integration",level:3},{value:"ADFS Setup",id:"adfs-setup",level:4},{value:"NeuVector Setup",id:"neuvector-setup",level:4},{value:"Mapping Groups to Roles and Namespaces",id:"mapping-groups-to-roles-and-namespaces",level:4},{value:"Troubleshooting",id:"troubleshooting",level:3}];function c(e){const n={a:"a",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"setting-up-adfs-and-neuvector-integration",children:"Setting Up ADFS and NeuVector Integration"}),"\n",(0,t.jsx)(n.p,{children:"This section describes the setup steps in ADFS first, then in the NeuVector console."}),"\n",(0,t.jsx)(n.h4,{id:"adfs-setup",children:"ADFS Setup"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"From AD FS Management, right click on \u201cRelying Party Trusts\u201d and select \u201cAdd Relying Party Trust\u2026\u201d."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"adfsSetup",src:s(38318).Z+"",width:"631",height:"449"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Select \u201cStart\u201d button from Welcome step."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"adfsSetup",src:s(38618).Z+"",width:"727",height:"597"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Select \u201cEnter data about the relying party manually\u201d and select \u201cNext\u201d."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"adfsSetup",src:s(782).Z+"",width:"729",height:"593"})}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Enter a unique name for Display name field and select \u201cNext\u201d."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"adfsSetup",src:s(39282).Z+"",width:"731",height:"597"})}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Select \u201cNext\u201d to skip token encryption."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"adfsSetup",src:s(52071).Z+"",width:"737",height:"593"})}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsx)(n.li,{children:"Check \u201cEnable support for the SAML 2.0 WebSSO protocol\u201d and enter  the SAML Redirect URI from NeuVector Settings>SAML Setting page into the \u201cRelying party SAML 2.0 SSO service URL\u201d field.  Select \u201cNext\u201d to continue."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"adfsSetup",src:s(71629).Z+"",width:"739",height:"595"})}),"\n",(0,t.jsxs)(n.ol,{start:"7",children:["\n",(0,t.jsx)(n.li,{children:"Enter the same SAML Redirect URI into the \u201cRelying party trust identifier\u201d field and click \u201cAdd\u201d; then select \u201cNext\u201d to continue."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"adfsSetup",src:s(77087).Z+"",width:"729",height:"600"})}),"\n",(0,t.jsxs)(n.ol,{start:"8",children:["\n",(0,t.jsx)(n.li,{children:"Customize Access Control; then select \u201cNext\u201d to continue."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"adfsSetup",src:s(11359).Z+"",width:"737",height:"589"})}),"\n",(0,t.jsxs)(n.ol,{start:"9",children:["\n",(0,t.jsx)(n.li,{children:"Select \u201cNext\u201d to continue."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"adfsSetup",src:s(25572).Z+"",width:"731",height:"595"})}),"\n",(0,t.jsxs)(n.ol,{start:"10",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Select \u201cClose\u201d to finish."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Select Edit Claim Issuance Policy\u2026"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"adfsSetup",src:s(77713).Z+"",width:"885",height:"358"})}),"\n",(0,t.jsxs)(n.ol,{start:"12",children:["\n",(0,t.jsx)(n.li,{children:"Select \u201cAdd Rule\u2026\u201d and choose \u201cSend LDAP Attributes as Claims\u201d; then select \u201cNext\u201d.  Name the rule and choose Active Directory as the Attribute store. Only Username outgoing claim is required for authentication if default role is set; else groups is needed for role mapping.  Email is optional."}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"SAM-Account-Name -> Username"}),"\n",(0,t.jsx)(n.li,{children:"E-Mail-Address -> Email"}),"\n",(0,t.jsx)(n.li,{children:"Token-Groups \u2013 Unqalified Names -> groups"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"adfsSetup",src:s(75010).Z+"",width:"562",height:"597"})}),"\n",(0,t.jsxs)(n.ol,{start:"13",children:["\n",(0,t.jsx)(n.li,{children:"Select \u201cAdd Rule\u2026\u201d and choose \u201cTransform an Incoming Claim\u201d; then select \u201cNext\u201d.  Name the rule and set the field as captured in the screenshot below.  The Outgoing name ID format needs to be Transient Identifier."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"adfsSetup",src:s(52857).Z+"",width:"554",height:"593"})}),"\n",(0,t.jsx)(n.h4,{id:"neuvector-setup",children:"NeuVector Setup"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Identify Provider Single Sign-On URL"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"View Endpoints from AD FS Management > Service and use \u201cSAML 2.0/WS-Federation\u201d endpoint URL."}),"\n",(0,t.jsx)(n.li,{children:"Example: https://<adfs-fqdn>/adfs/ls"}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsx)(n.li,{children:"Identity Provider Issuer"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Right click on AD FS from AD FS Management console and select \u201cEdit Federation Service Properties\u2026\u201d; use the \u201cFederation Service identifier\u201d."}),"\n",(0,t.jsx)(n.li,{children:"Example: http://<adfs-fqdn>/adfs/services/trust"}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"X.509 Certificate"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"From AD FS Management, select Service > Certificate, right click on Token-signing certificate and choose \u201cView Certificate\u2026\u201d"}),"\n",(0,t.jsx)(n.li,{children:"Select the Details tab and click \u201cCopy to File\u201d"}),"\n",(0,t.jsx)(n.li,{children:"Save it as a Base-64 encoded x.509 (.CER) file"}),"\n",(0,t.jsx)(n.li,{children:"Copy and paste the contents of the file into the X.509 Certificate field"}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"4",children:["\n",(0,t.jsx)(n.li,{children:"Group claim"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Enter the Outgoing claim name for the groups"}),"\n",(0,t.jsx)(n.li,{children:"Example: groups"}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsx)(n.li,{children:"Default role"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Recommended to be \u201cNone\u201d unless you want to allow any authenticated user a default role."}),"\n"]}),"\n",(0,t.jsxs)(n.ol,{start:"6",children:["\n",(0,t.jsx)(n.li,{children:"Role map"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Set the group names of the users for the appropriate role.  (See screenshot example below.)"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"NVadfsSetup",src:s(11621).Z+"",width:"808",height:"600"})}),"\n",(0,t.jsx)(n.h4,{id:"mapping-groups-to-roles-and-namespaces",children:"Mapping Groups to Roles and Namespaces"}),"\n",(0,t.jsxs)(n.p,{children:["Please see the ",(0,t.jsx)(n.a,{href:"/configuration/users#mapping-groups-to-roles-and-namespaces",children:"Users and Roles"})," section for how to map groups to preset and custom roles as well as namespaces in NeuVector."]}),"\n",(0,t.jsx)(n.h3,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"ADFS SamlResponseSignature needs to be either MessageOnly or MessageAndAssertion.  Use Get-AdfsRelyingPartyTrust command to verify or update it."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"adfsTroubleshooting",src:s(55342).Z+"",width:"833",height:"487"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},38318:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/adfs1-0b04769da723f654ad9c3b55835854b7.png"},77713:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/adfs10-11-b2fef21b9f905f547aff606501ba3f02.png"},75010:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/adfs11-12-f3117b8418ae176bc24ec8efb51b3f7a.png"},52857:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/adfs12-13-2f23989d8f3392b2a81fef0031c0fada.png"},38618:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/adfs2-638bc441ad2fb74327ea3d326aa32a1a.png"},782:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/adfs3-05d266b854c71542e79a00152a968374.png"},39282:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/adfs4-0968fd34fcd681e011b8a628e687bec6.png"},52071:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/adfs5-1ef13547d226608cdcfdcb734b3308b2.png"},71629:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/adfs6-9b35c5ac1889546859626c4ce8c6304f.png"},77087:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/adfs7-b1a68bdf50ac98e811a4237b386fed48.png"},11359:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/adfs8-4462d0b318ed9294a9bfb5d89e27be88.png"},25572:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/adfs9-7d0d6d9879deee1b4fa9a3af7870a502.png"},11621:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/nv_adfs1-8ce907d10c1d674d5d7750cb2566393c.png"},55342:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/nv_adfs2-0acede656525d729dbd000dceb56d08d.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>r});var t=s(67294);const i={},a=t.createContext(i);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);