"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3064],{99980:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>l});var n=s(74848),i=s(28453);const c={title:"ECR Scanning using IAM Roles",taxonomy:{category:"docs"},slug:"/scanning/registry/ecr-iam"},r=void 0,a={id:"scanning/registry/ecr-iam/ecr-iam",title:"ECR Scanning using IAM Roles",description:"AWS ECR - IAM Roles",source:"@site/versioned_docs/version-5.2/06.scanning/02.registry/02.ecr-iam/02.ecr-iam.md",sourceDirName:"06.scanning/02.registry/02.ecr-iam",slug:"/scanning/registry/ecr-iam",permalink:"/5.2/scanning/registry/ecr-iam",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/versioned_docs/version-5.2/06.scanning/02.registry/02.ecr-iam/02.ecr-iam.md",tags:[],version:"5.2",sidebarPosition:2,frontMatter:{title:"ECR Scanning using IAM Roles",taxonomy:{category:"docs"},slug:"/scanning/registry/ecr-iam"},sidebar:"tutorialSidebar",previous:{title:"Harbor Pluggable Scanner Module",permalink:"/5.2/scanning/registry/harbor"},next:{title:"GCR Scanning using Service Accounts",permalink:"/5.2/scanning/registry/gcr-sa"}},o={},l=[{value:"AWS ECR - IAM Roles",id:"aws-ecr---iam-roles",level:3},{value:"Select the Instance",id:"select-the-instance",level:4},{value:"Attach a Role",id:"attach-a-role",level:4},{value:"Select the AWS Service",id:"select-the-aws-service",level:4},{value:"List of Roles",id:"list-of-roles",level:4},{value:"Attach the ECR Read Permission to the Role",id:"attach-the-ecr-read-permission-to-the-role",level:4},{value:"Review Your Settings",id:"review-your-settings",level:4},{value:"Check the Instance for IAM Role",id:"check-the-instance-for-iam-role",level:4}];function d(e){const t={h3:"h3",h4:"h4",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"aws-ecr---iam-roles",children:"AWS ECR - IAM Roles"}),"\n",(0,n.jsx)(t.p,{children:"When the NeuVector containers are deployed in AWS, and an EC2 instance is assigned a role of \u201cEC2 Container Registry\u201d Read Access, the AWS ECR registry can be scanned without an Access Key and Secret Key."}),"\n",(0,n.jsx)(t.p,{children:"Here is how to create an AWS role and assign it to the node."}),"\n",(0,n.jsx)(t.h4,{id:"select-the-instance",children:"Select the Instance"}),"\n",(0,n.jsx)(t.p,{children:"Note that the IAM role is either blank or does not include the ECR role"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"awsrole",src:s(59517).A+"",width:"1039",height:"560"})}),"\n",(0,n.jsx)(t.h4,{id:"attach-a-role",children:"Attach a Role"}),"\n",(0,n.jsx)(t.p,{children:"Select Actions -> Instance Settings -> Attach/Replace IAM Role"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"awsrole",src:s(75750).A+"",width:"933",height:"704"})}),"\n",(0,n.jsx)(t.p,{children:"If you have not previously created the ECR role, click Create New IAM Role. Enter the role name."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"attachrole",src:s(60847).A+"",width:"1039",height:"289"})}),"\n",(0,n.jsx)(t.h4,{id:"select-the-aws-service",children:"Select the AWS Service"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"select",src:s(48624).A+"",width:"1039",height:"763"})}),"\n",(0,n.jsx)(t.h4,{id:"list-of-roles",children:"List of Roles"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"awsroles",src:s(64377).A+"",width:"1039",height:"244"})}),"\n",(0,n.jsx)(t.h4,{id:"attach-the-ecr-read-permission-to-the-role",children:"Attach the ECR Read Permission to the Role"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"permissions",src:s(50370).A+"",width:"1039",height:"430"})}),"\n",(0,n.jsx)(t.h4,{id:"review-your-settings",children:"Review Your Settings"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"review",src:s(14027).A+"",width:"1039",height:"781"})}),"\n",(0,n.jsx)(t.h4,{id:"check-the-instance-for-iam-role",children:"Check the Instance for IAM Role"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"instance",src:s(51237).A+"",width:"1039",height:"673"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},59517:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ecr1-d824cd4dae8777f3f345e8422ade3e3e.png"},75750:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ecr2-97319eeae10b8a0ffa059d0ab0912366.png"},60847:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ecr3-fe716fc76e7fef332b975210c17ae430.png"},48624:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ecr4-3fb12353dfdcbf695cac5f2b9924e0fe.png"},64377:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ecr5-ec0d3d25e7fe10e35ca25f6861401105.png"},50370:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ecr6-754d8b40de06b9ff9ea8046e21b8dfa6.png"},14027:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ecr7-a971b30cf89f6fcad52cdd9cfb42fb99.png"},51237:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/ecr9-cb1bc0d7326b635258ebd9d86b8a2226.png"},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var n=s(96540);const i={},c=n.createContext(i);function r(e){const t=n.useContext(c);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(c.Provider,{value:t},e.children)}}}]);