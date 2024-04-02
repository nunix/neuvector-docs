"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9860],{8637:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>a});var t=o(85893),l=o(11151);const r={title:"Environment Variables Details",taxonomy:{category:"docs"},slug:"/deploying/production/details"},i=void 0,s={id:"deploying/production/details/details",title:"Environment Variables Details",description:"Environment Variables",source:"@site/docs/02.deploying/01.production/03.details/03.details.md",sourceDirName:"02.deploying/01.production/03.details",slug:"/deploying/production/details",permalink:"/neuvector-docs/next/deploying/production/details",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/docs/02.deploying/01.production/03.details/03.details.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Environment Variables Details",taxonomy:{category:"docs"},slug:"/deploying/production/details"},sidebar:"tutorialSidebar",previous:{title:"Deploy Using Operators",permalink:"/neuvector-docs/next/deploying/production/operators"},next:{title:"Replacing Internal Certificates",permalink:"/neuvector-docs/next/deploying/production/internal"}},c={},a=[{value:"Environment Variables",id:"environment-variables",level:3},{value:"For Both Controller (Allinone) and Enforcer",id:"for-both-controller-allinone-and-enforcer",level:5},{value:"Controller",id:"controller",level:5},{value:"Manager",id:"manager",level:5},{value:"Enforcer",id:"enforcer",level:5},{value:"Open Ports",id:"open-ports",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h3:"h3",h5:"h5",li:"li",p:"p",ul:"ul",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,t.jsx)(n.h5,{id:"for-both-controller-allinone-and-enforcer",children:"For Both Controller (Allinone) and Enforcer"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CLUSTER_JOIN_ADDR"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Set the variable to the host IP for the first controller; and set it to the master controller's host IP for other controllers and enforcers. It\u2019s not necessary to set this IP for Kubernetes based deployments, just use the sample file."}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CLUSTER_LAN_PORT"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["(Optional) Cluster Serf LAN port. Both TCP and UDP ports must be mapped to the host directly. Optional if there is no port conflict on the host. Default ",(0,t.jsx)(n.code,{children:"18301"})]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"DOCKER_URL"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["(Optional) If the docker engine on the host does not bind on the normal Unix socket, use this variable to specify the TCP connection point, in the format of ",(0,t.jsx)(n.code,{children:"tcp://10.0.0.1:2376"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"NV_PLATFORM_INFO"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["(Optional) Use value platform=Docker for Docker Swarm/EE deployments, or platform=Kubernetes",":GKE"," for GKE (to run GKE CIS Benchmarks)."]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CUSTOM_CHECK_CONTROL"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:'(Optional) Used to enable/disable ability to create custom compliance scripts in containers/hosts. Values are "disable" (default, not allowed), "strict" (admin role only), or "loose" (admin, compliance, and runtime-policy roles).'}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"AUTO_PROFILE_COLLECT"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"(Optional) Set value to 1 to enable collection of memory profile data to help investigate memory pressure issues."}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"controller",children:"Controller"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CTRL_PERSIST_CONFIG"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"(Optional) To backup configuration files and restore them from a persistent volume. Add this to the yaml to enable; remove to disable."}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CLUSTER_RPC_PORT"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["(Optional) Cluster server RPC port. Must be mapped to the host directly. The environment variable is optional if there is no port conflict on the host. Default ",(0,t.jsx)(n.code,{children:"18300"})]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CTRL_SERVER_PORT"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["(Optional) HTTPS port that the REST server should be listening on. Default is ",(0,t.jsx)(n.code,{children:"10443"}),". Normally it can be left as default and use docker port option to map the port on the host."]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"DISABLE_PACKET_CAPTURE"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"(Optional) Add this to the yaml to disable packet capture; remove to re-enable (default)."}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"NO_DEFAULT_ADMIN"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"(Optional) When enabled does not create an 'admin' user in the local cluster. This is used for Rancher SSO integration as the default. If not enabled, persistently warn the user and record events to change the default admin password if it is not changed from default."}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CTRL_EN_ICMP_POLICY"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"(Optional) When enabled (value=1) icmp traffic can be learned in discover mode, and policy can be generated. If there is no network policy in monitor or protect mode for the group, an implicit violation will be generated for icmp traffic."}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"manager",children:"Manager"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CTRL_SERVER_IP"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["(Optional for all-in-one) Controller REST server IP address. Default is ",(0,t.jsx)(n.code,{children:"127.0.0.1"}),". For all-in-one container, leave it as default. If the Manager is running separately, the Manager must specify this IP to connect to the controller."]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CTRL_SERVER_PORT"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["(Optional for all-in-one) Controller REST server port. Default is ",(0,t.jsx)(n.code,{children:"10443"}),". For all-in-one container, leave it as default. If the Manager is running separately, the Manager should specify this variable to connect to the controller."]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"MANAGER_SERVER_PORT"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["(Optional) Manager UI port. Default is ",(0,t.jsx)(n.code,{children:"8443"}),". Unless the Manager is running in host mode, leave it and user docker port option to map the port on the host."]}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"MANAGER_SSL"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"(Optional) Manager by default uses and HTTPS/SSL connection. Set the value to \u201coff\u201d to use HTTP."}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"enforcer",children:"Enforcer"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CONTAINER_NET_TYPE"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:'(Optional) To support special network plug-in set value to "macvlan\u201d'}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"ENF_NO_SECRET_SCANS"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"(Optional) Set the value to \u201c1\u201d to disable scanning for secrets in files (improves performance)."}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"ENF_NO_AUTO_BENCHMARK"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"(Optional) Set the value to \u201c1\u201d to disable CIS benchmarks on host and containers (improves performance)."}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"ENF_NO_SYSTEM_PROFILES"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:'(Optional) Set the value to "1" to disable the process and file monitors. No learning processes, no profile modes, no process/file (package) incidents, and no file activity monitor will be performed. This will reduce CPU/memory resource usage and file operations.'}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"ENF_NETPOLICY_PULL_INTERVAL"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"(Optional) Value in seconds (recommended value 60) to reduce network traffic and resource consumption by Enforcer due to policy updates/recalculations, in clusters with high node counts or workloads. Default is zero, meaning no delay in updating Enforcer policy."}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"THRT_SSL_TLS_1DOT0"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"(Optional) Set the value to \u201c1\u201d to enable the detection for TLS Version 1.0 (Deprecated)."}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"THRT_SSL_TLS_1DOT1"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"(Optional) Set the value to \u201c1\u201d to enable the detection for TLS Version 1.1 (Deprecated)."}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"NV_SYSTEM_GROUPS"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"(Optional) Specify what groups or namespaces that NeuVector considers to be 'system containers', separated by semi-colons. For example, for Rancher-based apps and the default namespace, NV_SYSTEM_GROUPS=*cattle-system;*default. These values are translated in regex. System containers (which also include NeuVector and Kubernetes system containers) operate only in Monitor mode (alert only) even if the group is set to Protect mode."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"open-ports",children:"Open Ports"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CLUSTER_RPC_PORT - on controller and all-in-one. Default 18300."}),"\n",(0,t.jsx)(n.li,{children:"CLUSTER_LAN_PORT - on controller, enforcer and all-in-one. Default 18301."}),"\n",(0,t.jsx)(n.li,{children:"MANAGER_SERVER_PORT - on manager or all-in-one. Default 8443."}),"\n",(0,t.jsx)(n.li,{children:"CTRL_SERVER_PORT - on controller. Default 10443."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Please see the section ",(0,t.jsx)(n.a,{href:"/basics/installation/native",children:"Deployment Preparation"})," for a full description of the port communication requirements for the NeuVector containers."]})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>s,a:()=>i});var t=o(67294);const l={},r=t.createContext(l);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);