"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2430],{63727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=n(85893),i=n(11151);const o={title:"SAML (Okta)",taxonomy:{category:"docs"},slug:"/integration/saml"},r=void 0,a={id:"integration/saml/saml",title:"SAML (Okta)",description:"SAML IDP Configuration",source:"@site/versioned_docs/version-5.2/08.integration/04.saml/04.saml.md",sourceDirName:"08.integration/04.saml",slug:"/integration/saml",permalink:"/neuvector-docs/5.2/integration/saml",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/versioned_docs/version-5.2/08.integration/04.saml/04.saml.md",tags:[],version:"5.2",sidebarPosition:4,frontMatter:{title:"SAML (Okta)",taxonomy:{category:"docs"},slug:"/integration/saml"},sidebar:"tutorialSidebar",previous:{title:"Microsoft AD",permalink:"/neuvector-docs/5.2/integration/msad"},next:{title:"SAML (Azure AD)",permalink:"/neuvector-docs/5.2/integration/msazure"}},l={},c=[{value:"SAML IDP Configuration",id:"saml-idp-configuration",level:3},{value:"Mapping Groups to Roles and Namespaces",id:"mapping-groups-to-roles-and-namespaces",level:4}];function d(e){const t={a:"a",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"saml-idp-configuration",children:"SAML IDP Configuration"}),"\n",(0,s.jsx)(t.p,{children:"To configure NeuVector to use Okta SAML IDP server, first, configure the SAML IDP server on the Okta site."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Okta",src:n(66284).Z+"",width:"740",height:"2499"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:'Copy "SAML Redirect URI" from NeuVector SAML Setting page, paste it to Okta\'s single sign on url, recipient url and destination url fields.'}),"\n",(0,s.jsxs)(t.li,{children:["Assertion encryption: This field must be ",(0,s.jsx)("strong",{children:"unencrypted."})]}),"\n",(0,s.jsx)(t.li,{children:"Attribute statements: Enter the email and username attributes."}),"\n",(0,s.jsx)(t.li,{children:"Group attribute statements: Enable this if group-based role mapping is required. The default attribute name that NeuVector looks for is NVRoleGroup. If other attribute name is used for the user's group membership, it can be customized in NeuVector's SAML Setting page."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Configure SAML settings in NeuVector UI console."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"SAML",src:n(53529).Z+"",width:"1230",height:"774"})}),"\n",(0,s.jsx)(t.p,{children:'Use "View Setup Instructions" button as shown in the following screenshot to locate following information, and copy them into NeuVector\'s SAML page.'}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"Identity Provider Single Sign-On URL"}),"\n",(0,s.jsx)(t.li,{children:"Identity Provider Issuer"}),"\n",(0,s.jsx)(t.li,{children:"X.509 Certificate"}),"\n",(0,s.jsx)(t.li,{children:"Specify group attribute name if non-default value is used."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Setting",src:n(27677).Z+"",width:"770",height:"632"})}),"\n",(0,s.jsx)(t.p,{children:"After the user is authenticated, the proper role can be derived with group-based role mapping configuration. To setup group-based role mapping,"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:"If group-based role mapping is not configured or the matched groups cannot be located, the authenticated user will be assigned with the Default role. If the Default role is set to None, when group-based role mapping fails, the user is not able to login."}),"\n",(0,s.jsx)(t.li,{children:"Specify a list of groups respectively in Admin and Reader role map. The user's group attribute is piggybacked in the response after the user is authenticated. If the matched group is located, the corresponding role will be assigned to the user."}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"mapping-groups-to-roles-and-namespaces",children:"Mapping Groups to Roles and Namespaces"}),"\n",(0,s.jsxs)(t.p,{children:["Please see the ",(0,s.jsx)(t.a,{href:"/configuration/users#mapping-groups-to-roles-and-namespaces",children:"Users and Roles"})," section for how to map groups to preset and custom roles as well as namespaces in NeuVector."]})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},66284:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/okta-15c8a0f920e04cd5efc204a30e6d6298.png"},53529:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/saml1-64c77c2783376a7da17001fc747a32fb.png"},27677:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/setting-a391851f576c029c602403d8ca0abef2.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var s=n(67294);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);