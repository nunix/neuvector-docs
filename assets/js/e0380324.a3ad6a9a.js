"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9384],{25339:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var r=n(85893),o=n(11151);const t={title:"Groups",taxonomy:{category:"docs"},slug:"/policy/groups"},i=void 0,a={id:"policy/groups/groups",title:"Groups",description:"Policy: Groups",source:"@site/versioned_docs/version-5.3/05.policy/04.groups/04.groups.md",sourceDirName:"05.policy/04.groups",slug:"/policy/groups",permalink:"/neuvector-docs/policy/groups",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/versioned_docs/version-5.3/05.policy/04.groups/04.groups.md",tags:[],version:"5.3",sidebarPosition:4,frontMatter:{title:"Groups",taxonomy:{category:"docs"},slug:"/policy/groups"},sidebar:"tutorialSidebar",previous:{title:"Configuration Assessment for Kubernetes Resources",permalink:"/neuvector-docs/policy/admission/assessment"},next:{title:"Network Rules",permalink:"/neuvector-docs/policy/networkrules"}},c={},l=[{value:"Policy: Groups",id:"policy-groups",level:3},{value:"Auto Deletion of Unused Groups",id:"auto-deletion-of-unused-groups",level:4},{value:"Host Protection - the &#39;Nodes&#39; Group",id:"host-protection---the-nodes-group",level:4},{value:"Custom Groups",id:"custom-groups",level:4},{value:"Virtual Host (&#39;vh&#39;) Based Network Policy",id:"virtual-host-vh-based-network-policy",level:5},{value:"Custom Group Examples",id:"custom-group-examples",level:3},{value:"General Criteria",id:"general-criteria",level:4},{value:"IP Address Criteria",id:"ip-address-criteria",level:4}];function d(e){const s={a:"a",admonition:"admonition",blockquote:"blockquote",del:"del",em:"em",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h3,{id:"policy-groups",children:"Policy: Groups"}),"\n",(0,r.jsxs)(s.p,{children:["This menu is the key area to view and manage security rules and customize Groups for use in rules. It is also used to switch modes of Groups between Discover, Monitor, and Protect. Container Groups can have Process/File rules in a different mode than Network rules, as described ",(0,r.jsx)(s.a,{href:"/policy/modes#network-service-policy-mode",children:"here"}),". Please see the following individual sections for explanations of Custom Compliance Checks, Network Rules, Process and File Access Rules and DLP/WAF detection. Note: Network rules can be viewed in the Groups menu for any group, but must be edited separately in the ",(0,r.jsx)(s.a,{href:"/policy/networkrules",children:"Network Rules"})," menu."]}),"\n",(0,r.jsxs)(s.p,{children:["NeuVector automatically creates Groups from your running applications. These groups start with the prefix 'nv.' You can also manually add them using a CRD or the REST API and can be created in any mode, Discover, Monitor, or Protect. Network and Response Rules require these Group definitions. For automatically created Groups ('learned' groups starting with 'nv'), NeuVector will learn the network and process rules and add them while in Discover mode. Custom Groups will not auto-learn and populate rules. Note: 'nv.' groups start with ",(0,r.jsx)(s.a,{href:"/policy/processrules#zero-drift-process-protection",children:"zero drift"})," enabled by default for process/file protections."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"groups",src:n(97411).Z+"",width:"1639",height:"853"})}),"\n",(0,r.jsx)(s.p,{children:"It is convenient to see groups of containers and apply rules to each group. NeuVector creates a list of groups based on the container images. For example, all containers started from one Wordpress image will be in the same group. Rules are automatically created and applied to the group of containers."}),"\n",(0,r.jsxs)(s.p,{children:["The Groups screen also displays a 'Scorable' icon in the upper right, and a learned group can be selected and the Scorable checkbox enabled or disabled. This controls which containers are used to calculate the Security Risk Score in the Dashboard. See ",(0,r.jsx)(s.a,{href:"/navigation/improve_score#improving-the-security-risk-score",children:"Improve Security Risk Score"})," for more details."]}),"\n",(0,r.jsxs)(s.p,{children:["The Groups screen is also where the CRD yaml file for 'security policy as code' can be imported and exported. Select one or more groups and click on the Export Group policy button to download the yaml file. See the ",(0,r.jsx)(s.a,{href:"/policy/usingcrd",children:"CRD"})," section for more details on how to use CRDs. Important: Each selected group AND any linked groups through network rules will be exported (i.e. the group and any other group it connects to through the whitelist network rules)."]}),"\n",(0,r.jsx)(s.h4,{id:"auto-deletion-of-unused-groups",children:"Auto Deletion of Unused Groups"}),"\n",(0,r.jsx)(s.p,{children:"Learned groups (not reserved or custom groups) can be automatically deleted by NeuVector if there are no members (containers) in the group. The time period for this is configurable in Settings -> Configuration."}),"\n",(0,r.jsx)(s.h4,{id:"host-protection---the-nodes-group",children:"Host Protection - the 'Nodes' Group"}),"\n",(0,r.jsx)(s.p,{children:"NeuVector automatically creates a group called 'nodes' which represents each node (host) in the cluster. NeuVector provides automated basic monitoring of hosts for suspicious processes (such as port scans, reverse shells etc.) and privilege escalations. In addition, NeuVector will learn the process behavior of each node while it is in Discover mode to whitelist those processes, similar to how it is done with container processes.  The 'local' (learned) process rule list is a combination of all processes from all nodes in the cluster while in Discover mode."}),"\n",(0,r.jsx)(s.p,{children:"The nodes can then be put into the Monitor or Protect mode, where NeuVector will alert is any process starts while in Monitor mode, and block that process in Protect mode."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{alt:"nodeGroup",src:n(61628).Z+"",width:"2410",height:"1132"})}),"\n",(0,r.jsx)(s.p,{children:"To enable host protection with process profile rules, select the 'nodes' group and review the learned processes on the node. Customize if needed by adding, deleting or editing process rules. Then switch the mode to Monitor or Protect."}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsx)(s.p,{children:"Network connection violations of rules shown in the Network Rules for Nodes are never blocked, even in Protect mode. Only process violations are blocked in Protect mode on nodes."})}),"\n",(0,r.jsx)(s.h4,{id:"custom-groups",children:"Custom Groups"}),"\n",(0,r.jsx)(s.p,{children:"Groups can be manually added by entering the criteria for the group. Note: Custom created groups don't have a Protection mode. This is because they may contain containers from different underlying groups, each of which may be in a different mode, causing confusion about the behavior."}),"\n",(0,r.jsx)(s.p,{children:"Groups can be created by:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"Images"})}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Select containers by their image names. Examples: image=wordpress, image@redis"}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"Nodes"})}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Select containers by nodes on which they are running. Examples: node=ip-12-34-56-78.us-west-2"}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"Individual containers"})}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Select containers by their instance names. Examples: container=nodejs_1, container@nodejs"}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"Services"})}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:['Select containers by their services. If a container is deployed by Docker Compose, its service tag value will be "project_name',":service_name",'"; if a container is deployed by Docker swarm mode service, its service tag value will be the swarm service name.']}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"Labels"})}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Select containers by their labels. Examples: com.docker.compose.project=wordpress, location@us-west"}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.strong,{children:"Addresses"})}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Create a group by DNS name or IP address ranges. Examples: address=",(0,r.jsx)(s.a,{href:"http://www.google.com",children:"www.google.com"}),","," address=10.1.0.1, address=10.1.0.0/24, address=10.1.0.1-10.1.0.25. DNS name can be any name resolvable. Address criteria do not accept the != operator. See below for special virtual host 'vh' address groups."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"A group can be created with mixed criteria types, except the 'address' type, which cannot be used together with other criteria. Mixed criteria enforces an \u2018AND\u2019 operation between the criteria, for example label service_type=data AND image=mysql. Multiple entries for one or criteria are treated as OR, for example address=google.com OR address=yahoo.com. Note: To assist in analyzing ingress/egress connections, a list of ingress and egress IPs can be downloaded from the Dashboard -> Ingress/Egress details section as an Exposure Report."}),"\n",(0,r.jsx)(s.p,{children:"Partial matching is supported for image, node, container, service and label criteria. For example, image@redis, selects containers whose image name contains 'redis' substring; image^redis, selects containers whose image name starts with 'redis'."}),"\n",(0,r.jsx)(s.p,{children:"It is not recommended to use address criteria to match internal IPs or subnets, especially those protected by enforcers, instead, using their meta data, such as image, service or labels, is recommended. The typical use cases for address group are to define policies between managed containers and external IP subnets, for example, services running on Internet or another data center. Address group does not have group members."}),"\n",(0,r.jsxs)(s.p,{children:["Wildcards '",(0,r.jsx)(s.em,{children:"' can be used in criteria, for example 'address="}),".google.com'. For more flexible matching, use the tilde '",(0,r.jsx)(s.del,{children:"' to indicate a regex match is desired. For example to match labels 'policy"}),"public.*-ext1' for the label policy."]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["Special characters used after an equals '=' in criteria may not match properly. For example the dot '.' In 'policy=public.",(0,r.jsx)(s.em,{children:"' will not match properly, and regex match should be used instead, like 'policy~public."}),"'"]})}),"\n",(0,r.jsx)(s.p,{children:"After saving a new group, NeuVector will display the members in that group. Rules can then be created using these groups."}),"\n",(0,r.jsx)(s.h5,{id:"virtual-host-vh-based-network-policy",children:"Virtual Host ('vh') Based Network Policy"}),"\n",(0,r.jsxs)(s.p,{children:["Custom groups can support virtual host based address groups. This enables a use case where two different FQDN addresses are resolved to the same IP address, but different rules for each FQDN should be enforced. A new custom group with \u2018address=vh",":xxx",".yyy\u2019 can be created using the \u2018vh:\u2019 indicator to enable this protection. A network rule can then use the custom group as the \u2018From\u2019 source based on the virtual hostname (instead of resolved IP address) to enforce different rules for virtual hosts."]}),"\n",(0,r.jsx)(s.h3,{id:"custom-group-examples",children:"Custom Group Examples"}),"\n",(0,r.jsx)(s.h4,{id:"general-criteria",children:"General Criteria"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"To select all containers (either example below will work)"}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"container=\u2217\nservice=\u2217"}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"To select all containers in the namespace 'default' (namespace supported from v2.2)"}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"namespace=default"}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"To select all containers whose service name starts with 'nginx'"}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"service=nginx\u2217"}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"To select all containers whose service name contains 'etcd'"}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"service=\u2217etcd\u2217"}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"To select all containers in the namespace 'apache1' or 'apache2' (hit enter after each entry)"}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"namespace=apache1 namespace=apache2"}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"To select all containers NOT in the namespace 'apache1' and 'apache2' (hit enter after each entry)"}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"namespace!=apache1 namespace!=apache2"}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"To select all containers in the namespace 'apache1~9'"}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"namespace~apache[1-9]"}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"ip-address-criteria",children:"IP Address Criteria"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"All external IP addresses"}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Please use the default group \u2018external\u2019 in rules"}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"IP subnet 10.0.0.0/8"}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"address=10.0.0.0/8"}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"IP range"}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"address=10.0.0.0-10.0.0.15"}),"\n"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"dropbox.com and it's subdomains (hit enter after each entry)"}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"address=dropbox.com address=*.dropbox.com"}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},97411:(e,s,n)=>{n.d(s,{Z:()=>r});const r=n.p+"assets/images/5_groups-c57e401b60569e3b885b5959b91a17cc.png"},61628:(e,s,n)=>{n.d(s,{Z:()=>r});const r=n.p+"assets/images/host_protection-181f03bf5e2c1d821ad8696ce97e6e45.png"},11151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>i});var r=n(67294);const o={},t=r.createContext(o);function i(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);