"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9602],{66545:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var t=i(85893),o=i(11151);const s={title:"Navigating the Console",taxonomy:{category:"docs"},slug:"/navigation/navigation"},r=void 0,a={id:"navigation/navigation/navigation",title:"Navigating the Console",description:"Console Access",source:"@site/versioned_docs/version-5.2/04.navigation/01.navigation/01.navigation.md",sourceDirName:"04.navigation/01.navigation",slug:"/navigation/navigation",permalink:"/neuvector-docs/5.2/navigation/navigation",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/versioned_docs/version-5.2/04.navigation/01.navigation/01.navigation.md",tags:[],version:"5.2",sidebarPosition:1,frontMatter:{title:"Navigating the Console",taxonomy:{category:"docs"},slug:"/navigation/navigation"},sidebar:"tutorialSidebar",previous:{title:"4. Navigating NeuVector",permalink:"/neuvector-docs/5.2/navigation"},next:{title:"Enterprise Multi-Cluster Management",permalink:"/neuvector-docs/5.2/navigation/multicluster"}},c={},l=[{value:"Console Access",id:"console-access",level:3},{value:"Menus and Navigation",id:"menus-and-navigation",level:3},{value:"Dashboard",id:"dashboard",level:4},{value:"Network Activity",id:"network-activity",level:4},{value:"Assets",id:"assets",level:4},{value:"Policy",id:"policy",level:4},{value:"Security Risks",id:"security-risks",level:4},{value:"Notifications",id:"notifications",level:4},{value:"Settings",id:"settings",level:4},{value:"Settings -&gt; Users &amp; Roles",id:"settings---users--roles",level:5},{value:"Settings -&gt; Configuration",id:"settings---configuration",level:5},{value:"XFF-FORWARDED-FOR Behavior Details",id:"xff-forwarded-for-behavior-details",level:6},{value:"Settings -&gt; LDAP/AD, SAML, and OpenID Connect",id:"settings---ldapad-saml-and-openid-connect",level:5},{value:"Multiple Cluster Management",id:"multiple-cluster-management",level:5},{value:"My Profile",id:"my-profile",level:5},{value:"Icon Descriptions in Legend &gt; Network Activity",id:"icon-descriptions-in-legend--network-activity",level:4},{value:"External network",id:"external-network",level:5},{value:"Namespace",id:"namespace",level:5},{value:"Group/Container/Service Mesh in discovery",id:"groupcontainerservice-mesh-in-discovery",level:5},{value:"Group/Container/Service Mesh being monitored",id:"groupcontainerservice-mesh-being-monitored",level:5},{value:"Group/Container/Service Mesh being protected",id:"groupcontainerservice-mesh-being-protected",level:5},{value:"Container Group",id:"container-group",level:5},{value:"Un-managed node",id:"un-managed-node",level:5},{value:"Un-managed container",id:"un-managed-container",level:5},{value:"Exited Container",id:"exited-container",level:5},{value:"IP group",id:"ip-group",level:5},{value:"Normal Conversation",id:"normal-conversation",level:5},{value:"Internal Conversation",id:"internal-conversation",level:5},{value:"Conversation with warning",id:"conversation-with-warning",level:5},{value:"Conversation being blocked",id:"conversation-being-blocked",level:5},{value:"Quarantined container",id:"quarantined-container",level:5}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h3:"h3",h4:"h4",h5:"h5",h6:"h6",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"console-access",children:"Console Access"}),"\n",(0,t.jsx)(n.p,{children:"The console requires HTTPS access on default port 8443. The default user and password are admin."}),"\n",(0,t.jsx)(n.p,{children:"Please see the first section Basics -> Connect to Manager for configuration options such as turning off https, accessing the console through a corporate firewall which does not allow port 8443, or replacing the self-signed certificate."}),"\n",(0,t.jsx)(n.h3,{id:"menus-and-navigation",children:"Menus and Navigation"}),"\n",(0,t.jsxs)(n.p,{children:["Use the left side menu to navigate in your NeuVector console. Note that there are additional settings in upper right for User Profile and Multi-Cluster configuration.\n",(0,t.jsx)(n.img,{alt:"Navigation",src:i(50432).Z+"",width:"2798",height:"1530"})]}),"\n",(0,t.jsx)(n.h4,{id:"dashboard",children:"Dashboard"}),"\n",(0,t.jsx)(n.p,{children:"The Dashboard shows a summary of risk scores, security events, and application protocols detected by NeuVector. It also shows details for some of these security events. PDF reports can be generated from the Dashboard which contain detailed charts and explanations."}),"\n",(0,t.jsx)(n.p,{children:"At the top of the dashboard there is a summary of the security risks in the cluster. The wrench tool next to the overall risk score can be clicked to open a wizard which will guide you through recommended steps to reduce/improve the risk score. Mousing over each risk gauge will provide a description of it to the right and how to improve the risk score. Also see the separate documentation section Improving Security Risk Score."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Risks",src:i(97473).Z+"",width:"2052",height:"504"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Overall Security Risk Score. This is a weighted summary of the individual risk areas summarized to the right, including Service exposure, Ingress/Egress exposure, and Vulnerability exploit risks. Click on the wrench to improve the score."}),"\n",(0,t.jsx)(n.li,{children:"Service Exposure Risk Score. This is an indicator of how many services are protected by whitelist rules and running in the Monitor or Protect mode, where risk is lowest. A high ratio of services in Discover mode means these services are not segmented or isolated by whitelist rules."}),"\n",(0,t.jsx)(n.li,{children:"Ingress/Egress Risk Score. This is a weighted summary of actual threats or network violations detected on ingress or egress (out of the cluster) connections, combined with allowed ingress/egress connections. External connections which are protected by whitelist rules have lower risk but can still be attacked by embedded network attacks. Note: A list of ingress and egress IPs can be downloaded from the Ingress/Egress details section as an Exposure Report."}),"\n",(0,t.jsx)(n.li,{children:"Vulnerability Exploit Risk Score. This is the risk of exploits of vulnerabilities in running containers. Services in Discover mode with High criticality vulnerabilities will have the highest impact on the score, as they are highest risk. If services are in Monitor or Protect but still have High vulnerabilities, they are protected by network and process rules to identify (and block) suspicious activity, so will have a lower weighting on the score. A warning will be shown if the Auto-Scan button is not enabled for automatic run-time scanning."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Some of the charts are interactive, as shown below with the green arrows."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Dashboard",src:i(98564).Z+"",width:"1216",height:"774"})}),"\n",(0,t.jsx)(n.p,{children:"Some of the event data shown in the dashboard have limits, as described in the Reporting section."}),"\n",(0,t.jsx)(n.p,{children:"Application Protocols Detected\nThis chart summarizes the application protocols detected in live connections in the cluster. The category \u2018Other\u2019 means any unrecognized HTTP protocols or raw TCP connections. You can toggle between the Application Coverage and the Application Volume levels."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Application Coverage is the number of unique pod to pod conversations detected between application services. For example if service pod A connects to service pod B using HTTP that is one unique HTTP \u2018conversation\u2019, but all connections between A and B count as one conversation."}),"\n",(0,t.jsx)(n.li,{children:"Application Volume is the network activity measured in Gbytes for all services using that protocol."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"network-activity",children:"Network Activity"}),"\n",(0,t.jsx)(n.p,{children:"This provides a graphical map of your containers and the conversations between containers. It also shows connections with other local and external resources. In Monitor and Protect modes, violations are displayed with red or yellow lines to indicate that a violation has been detected."}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"If a large number of containers or services are present, the view will automatically default to a namespace view (collapsed). Double click on a namespace icon to expand it."})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"This display uses a local GPU if available to speed loading times. Some Windows GPUs have known issues, and the use of the GPU can be turned off in Advanced Filter window (see below for Tools)."})}),"\n",(0,t.jsx)(n.p,{children:"Some of the actions possible are:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Move objects around to better view services and conversations"}),"\n",(0,t.jsx)(n.li,{children:"Click on any line (arrow) to see more detail such as protocol/port, latest time stamp, and to add or edit a rule (NOTE: both connection endpoints must be fully expanded by double clicking on each in order to see the connection details)"}),"\n",(0,t.jsx)(n.li,{children:"Click on any container to see details, and the \u2018i\u2019 for real-time connections. You can also quarantine a node from here. Right click on a container to perform actions."}),"\n",(0,t.jsx)(n.li,{children:"Filter view by protocol, or search by namespace, group, container (upper right). You can add multiple filters to the selection box."}),"\n",(0,t.jsx)(n.li,{children:"Refresh the map to show latest conversations"}),"\n",(0,t.jsx)(n.li,{children:"Zoom in/out to switch between a logical view (all containers collapsed into a service group) or physical view (all containers for the same service displayed)"}),"\n",(0,t.jsx)(n.li,{children:"Toggle on/off the display of orchestration components such as load balancers (e.g. built in for Kubernetes or Swarm)"}),"\n",(0,t.jsx)(n.li,{children:"(Service Mesh Icon) Double click to expand a pod in a service mesh such as Istio/Linkerd2 to show the sidecar and workload containers within the pod."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The Tools menu in the upper left has these functions, from left to right:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Zoom in/out"}),"\n",(0,t.jsx)(n.li,{children:"Reset the icon displays (if you've moved them around)"}),"\n",(0,t.jsx)(n.li,{children:"Open the Advanced Filter window (filters remain for the user login session)"}),"\n",(0,t.jsx)(n.li,{children:"Display/Hide the Legend"}),"\n",(0,t.jsx)(n.li,{children:"Take a screen shot"}),"\n",(0,t.jsx)(n.li,{children:"Refresh the Network Activity Display"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Tools",src:i(95250).Z+"",width:"267",height:"48"})}),"\n",(0,t.jsx)(n.p,{children:"Right clicking on a container displays the following actions:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Actions",src:i(3299).Z+"",width:"180",height:"330"})}),"\n",(0,t.jsx)(n.p,{children:"You can view active sessions, start packet capture recordings, and quarantine from here. You can also change the overall protection mode for the service (all containers for that service) here. The expand/collapse options enable you to simplify or expand the objects."}),"\n",(0,t.jsx)(n.p,{children:"The data in the map may take a few seconds after network activity to be displayed."}),"\n",(0,t.jsx)(n.p,{children:"See the explanation of the Legend icons at the bottom of this page."}),"\n",(0,t.jsx)(n.h4,{id:"assets",children:"Assets"}),"\n",(0,t.jsx)(n.p,{children:"Assets displays information about Platforms, Nodes, Containers, Registries, Sigstore Verifiers (used in Admission Control rules), and System Components (NeuVector Controllers, Scanners, and Enforcers)."}),"\n",(0,t.jsx)(n.p,{children:"NeuVector includes an end-to-end vulnerability management platform which can be integrated into your automated CI/CD process. Scan registries, images, and running containers and host nodes for vulnerabilities. Results for individual registries, nodes, and containers can be found here, while combined results and advanced reporting can be found in the Security Risks menu."}),"\n",(0,t.jsx)(n.p,{children:"NeuVector also automatically runs the Docker Bench security report and Kubernetes CIS Benchmark (if applicable) on each host and running containers."}),"\n",(0,t.jsx)(n.p,{children:"Note that the Status of all containers is shown in Assets -> Containers, which indicates the NeuVector protection mode (Discover, Monitor, Protect). If the container is shown in an 'Exit' state, it is still on the host but is stopped. Removing the container will remove it from an Exit state."}),"\n",(0,t.jsx)(n.p,{children:"Please see the section Scanning & Compliance for additional details, including how to use the Jenkins plug-in NeuVector Vulnerability Scanner."}),"\n",(0,t.jsx)(n.h4,{id:"policy",children:"Policy"}),"\n",(0,t.jsx)(n.p,{children:"This displays and manages the run-time Security Policy which determines what container networking, process, and file system application behavior is ALLOWED and DENIED. Any conversations and activities  which are not explicitly allowed are logged as violations by NeuVector. This is also where Admission Control rules can be created."}),"\n",(0,t.jsx)(n.p,{children:"Please see the Security Policy section of these docs for a detailed explanation of the behavior of the rules and how to edit or create rules."}),"\n",(0,t.jsx)(n.h4,{id:"security-risks",children:"Security Risks"}),"\n",(0,t.jsx)(n.p,{children:"This enables customizable Vulnerability and Compliance management investigation, triage, and reporting. Easily research image vulnerabilities and find out which nodes or containers contain those vulnerabilities. Advanced filtering makes reviewing scan and compliance check results and provides customized reporting."}),"\n",(0,t.jsx)(n.p,{children:"These menu's combine results from registry (image), node, and container vulnerability scans and compliance checks to enable end-to-end vulnerability management and reporting."}),"\n",(0,t.jsx)(n.h4,{id:"notifications",children:"Notifications"}),"\n",(0,t.jsx)(n.p,{children:"This is where you can see the logs for Security Events, Risk Reports (e.g. Scanning) and general Events. NeuVector also supports SYSLOG for integration with tools such as SPLUNK as well as webhook notifications."}),"\n",(0,t.jsx)("strong",{children:"Security Events"}),"\n",(0,t.jsx)(n.p,{children:"Use the search or Advanced Filter to locate specific events. The timeline widget at the top can also be adjusted using the left and right circles to change the time window. You can also easily add rules (Security Policy) to allow or deny the detected event by selecting the Review Rule button and deploying a new rule."}),"\n",(0,t.jsxs)(n.p,{children:["NeuVector continuously monitors all containers for know attacks such as DNS, DDoS, HTTP-smuggling, tunneling etc. When an attack is detected it is logged here and blocked (if container/service is set to protect), and the packet is automatically captured. You can view the packet details, for example:\n",(0,t.jsx)(n.img,{alt:"Capture",src:i(55946).Z+"",width:"2462",height:"1144"})]}),"\n",(0,t.jsx)("strong",{children:"Implicit Deny Rule is Violated"}),"\n",(0,t.jsx)(n.p,{children:"Violations are connections that violate the whitelist Rules or match a blacklist Rule. Violations detailed are captured and source IPs can be investigated further."}),"\n",(0,t.jsx)(n.p,{children:"Other security events include privilege escalations, suspicious processes, or abnormal file system activity detected on containers or hosts."}),"\n",(0,t.jsx)("strong",{children:"Risk Reports"}),"\n",(0,t.jsx)(n.p,{children:"Registry scanning, run-time scanning, admission control events will be shown here. Also, CIS benchmarks and compliance checks results will be shown."}),"\n",(0,t.jsx)(n.p,{children:"Please see the Reporting section for additional details and limits of the event displays in the console."}),"\n",(0,t.jsx)(n.h4,{id:"settings",children:"Settings"}),"\n",(0,t.jsx)(n.h5,{id:"settings---users--roles",children:"Settings -> Users & Roles"}),"\n",(0,t.jsxs)(n.p,{children:["Add other users here. Users can be assigned an Admin role, a Read-only role, or custom role. In Kubernetes, users can be assigned one or more namespaces to access. Custom roles can also be configured here for users and Groups (e.g. LDAP/AD) to be mapped to the roles. See the ",(0,t.jsx)(n.a,{href:"/configuration/users",children:"users"})," section for configuration details."]}),"\n",(0,t.jsx)(n.h5,{id:"settings---configuration",children:"Settings -> Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Configure a unique cluster name, new services mode, and other settings here."}),"\n",(0,t.jsx)(n.p,{children:"If deploying on a Rancher or OpenShift cluster, authentication can be enabled such that Rancher users or OpenShift users can log into the NeuVector console with the associated RBACs. For Rancher users, a connecting button/link from the Rancher console allows Rancher admin's to open and access the NeuVector console directly."}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/policy/modes#new-service-mode",children:"New Service Mode"})," sets which protection mode any new services (applications) previously unknown or undefined in NeuVector will by default be set to. For production environments, it is not recommended to set this to Discover."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/policy/modes#network-service-policy-mode",children:"Network Service Policy Mode"}),", if enabled, applies the selected policy mode globally to the network rules for all groups, and each Group\u2019s individual policy mode will only apply to process and file rules."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"/policy/modes#automated-promotion-of-group-modes",children:"Automated Promotion of Group Modes"})," promotes a Group\u2019s protection Mode automatically (from Discover to Monitor to Protect) based on elapsed time and criteria."]}),"\n",(0,t.jsx)(n.p,{children:"The Auto-Deletion of Unused Groups is useful for automated 'clean-up' of the discovered (and auto-created rules for) groups which are no longer in use, especially high-churn development environments. See Policy -> Groups for the list of groups in NeuVector. Removing unused Groups will clean up the Groups list and all associated rules for those groups."}),"\n",(0,t.jsx)(n.p,{children:"The XFF-FORWARDED-FOR enables/disables use of these headers in enforcing NeuVector network rules. This is useful to retain the original source IP of an ingress connection so it can be used for network rules enforcement. Enable means the source IP will be retained. See below for a detailed explanation."}),"\n",(0,t.jsxs)(n.p,{children:["Multiple webhooks can be configured to be used in ",(0,t.jsx)(n.a,{href:"/policy/responserules",children:"Response Rules"})," for customized notifications. Webhook format choices include Slack, JSON, and key-value pairs."]}),"\n",(0,t.jsx)(n.p,{children:"A Registry Proxy can be configured if your registry scanning connection between the controller and the registry must go through a proxy."}),"\n",(0,t.jsxs)(n.p,{children:["Configure SIEM integration through ",(0,t.jsx)(n.a,{href:"/reporting/reporting#siem-and-syslog",children:"SYSLOG"}),", including types of events, port etc."]}),"\n",(0,t.jsxs)(n.p,{children:["An integration with ",(0,t.jsx)(n.a,{href:"/integration/ibmsa",children:"IBM Security Advisor"})," and ",(0,t.jsx)(n.a,{href:"/integration/ibmqr",children:"QRadar"})," can be established."]}),"\n",(0,t.jsxs)(n.p,{children:["Import/Export the Security Policy file. You can configure SSO for SAML and LDAP/AD here as well. See the Enterprise Integration section for configuration details. ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.strong,{children:"Important!"})})," Be careful when importing the configuration file. Importing will overwrite the existing settings. If you import a \u2018policy only\u2019 file, the Groups and Rules of the Policy will be overwritten. If you import a file with \u2018all\u2019 settings, then the Policy, Users, and Configurations will be overwritten. Note that the original \u2018admin\u2019 user\u2019s password of your current Controller will also be overwritten with the original admin\u2019s password in the imported file."]}),"\n",(0,t.jsx)(n.p,{children:"The Usage Report and Collect Log exports may be requested by your NeuVector support team."}),"\n",(0,t.jsx)(n.h6,{id:"xff-forwarded-for-behavior-details",children:"XFF-FORWARDED-FOR Behavior Details"}),"\n",(0,t.jsx)(n.p,{children:"In a Kubernetes cluster, an application can be exposed to the outside of the cluster by a NodePort, LoadBalancer or Ingress services. These services typically replace the source IP while doing the Source NAT (SNAT) on the packets. As the original source IP is masqueraded, this prevents NeuVector from recognizing the connection is actually from the 'external'."}),"\n",(0,t.jsxs)(n.p,{children:["In order to preserve the original source IP address, the user needs to add the following line to the exposed services, in the 'spec' section of the external facing load balancer or ingress controller. (Ref: ",(0,t.jsx)(n.a,{href:"https://kubernetes.io/docs/tutorials/services/source-ip/",children:"https://kubernetes.io/docs/tutorials/services/source-ip/"}),")"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"externalTrafficPolicy":"Local"\n'})}),"\n",(0,t.jsx)(n.p,{children:"Many implementations of LoadBalancer services and Ingress controllers will add the X-FORWARDED-FOR line to the HTTP request header to communicate the real source IP to the backend applications. This product can recognize this set of HTTP headers, identify the original source IP and enforce the policy according to that."}),"\n",(0,t.jsx)(n.p,{children:'This improvement created some unexpected issues in some setup. If the above line has been added to the exposed services and NeuVector network policies have been created in a way that expect the network connections are coming from internal proxy/ingress services, because we now identify the connections are from "external" to the cluster, normal application traffic might trigger alerts or get blocked if the applications are put in "Protect" mode.'}),"\n",(0,t.jsx)(n.p,{children:'A switch is available to disable this feature. Disabling it tells NeuVector not to identify that the connection is from "external" using X-FORWARDED-FOR headers. By default this is enabled, and the X-FORWARDED-FOR header is used in policy enforcement. To disable it, go to Settings -> Configuration, and disable the "X-Forwarded-For based policy match" setting.'}),"\n",(0,t.jsx)(n.h5,{id:"settings---ldapad-saml-and-openid-connect",children:"Settings -> LDAP/AD, SAML, and OpenID Connect"}),"\n",(0,t.jsxs)(n.p,{children:["NeuVector supports integration with LDAP/AD, SAML, and OpenID Connect for SSO and user group mapping. See the ",(0,t.jsx)(n.a,{href:"/integration/integration",children:"Enterprise Integration"})," section for configuration details."]}),"\n",(0,t.jsx)(n.h5,{id:"multiple-cluster-management",children:"Multiple Cluster Management"}),"\n",(0,t.jsxs)(n.p,{children:["You can manage ",(0,t.jsx)(n.a,{href:"/navigation/multicluster",children:"multiple NeuVector clusters"})," (e.g. multiple Kubernetes clusters running NeuVector on different clouds or on premise) by selecting a Master cluster, and joining remote clusters to them. Each remote cluster can also be individually managed. Security rules can be propagated to multiple clusters through use of Federated Policy settings."]}),"\n",(0,t.jsx)(n.h5,{id:"my-profile",children:"My Profile"}),"\n",(0,t.jsx)(n.p,{children:"You can increase the browser timeout setting, change your password and do other administrative profile edits."}),"\n",(0,t.jsx)(n.h4,{id:"icon-descriptions-in-legend--network-activity",children:"Icon Descriptions in Legend > Network Activity"}),"\n",(0,t.jsxs)(n.p,{children:["You can toggle the Legend on/off in the tools box of the Network Activity map.\n",(0,t.jsx)(n.img,{alt:"Legend",src:i(58487).Z+"",width:"291",height:"552"})]}),"\n",(0,t.jsx)(n.p,{children:"Here is what the icons mean:"}),"\n",(0,t.jsx)(n.h5,{id:"external-network",children:"External network"}),"\n",(0,t.jsx)(n.p,{children:"This is any network outside the NeuVector cluster. This could include internet public access or other internal networks."}),"\n",(0,t.jsx)(n.h5,{id:"namespace",children:"Namespace"}),"\n",(0,t.jsx)(n.p,{children:"Namespace in Kubernetes or Project in OpenShift"}),"\n",(0,t.jsx)(n.h5,{id:"groupcontainerservice-mesh-in-discovery",children:"Group/Container/Service Mesh in discovery"}),"\n",(0,t.jsx)(n.p,{children:"This container is in Discover mode, where connections to/from it are learned and whitelist rules will automatically be created."}),"\n",(0,t.jsx)(n.h5,{id:"groupcontainerservice-mesh-being-monitored",children:"Group/Container/Service Mesh being monitored"}),"\n",(0,t.jsx)(n.p,{children:"This container is in Monitor mode, where violations will be logged but not blocked."}),"\n",(0,t.jsx)(n.h5,{id:"groupcontainerservice-mesh-being-protected",children:"Group/Container/Service Mesh being protected"}),"\n",(0,t.jsx)(n.p,{children:"This container is in Protect mode, where violations will be blocked."}),"\n",(0,t.jsx)(n.h5,{id:"container-group",children:"Container Group"}),"\n",(0,t.jsx)(n.p,{children:"This represent a group of containers in a service. Use this to provide a more abstract view if there are many container instances for a service/application (i.e. from the same image)."}),"\n",(0,t.jsx)(n.h5,{id:"un-managed-node",children:"Un-managed node"}),"\n",(0,t.jsx)(n.p,{children:"This node has been detected but does not have a NeuVector enforcer on it."}),"\n",(0,t.jsx)(n.h5,{id:"un-managed-container",children:"Un-managed container"}),"\n",(0,t.jsx)(n.p,{children:"This container has been detected but is not on a node with a NeuVector enforcer on it. This could also represent some system services."}),"\n",(0,t.jsx)(n.h5,{id:"exited-container",children:"Exited Container"}),"\n",(0,t.jsx)(n.p,{children:"This container is not running but in an 'exited' state."}),"\n",(0,t.jsx)(n.h5,{id:"ip-group",children:"IP group"}),"\n",(0,t.jsx)(n.p,{children:"This is a group of IP Addresses."}),"\n",(0,t.jsx)(n.h5,{id:"normal-conversation",children:"Normal Conversation"}),"\n",(0,t.jsx)(n.p,{children:"Allowed, whitelisted connections are displayed in blue."}),"\n",(0,t.jsx)(n.h5,{id:"internal-conversation",children:"Internal Conversation"}),"\n",(0,t.jsx)(n.p,{children:"A connection within a service is shown in light gray."}),"\n",(0,t.jsx)(n.h5,{id:"conversation-with-warning",children:"Conversation with warning"}),"\n",(0,t.jsx)(n.p,{children:"A connection which has generated a violation alert is shown in lighter red."}),"\n",(0,t.jsx)(n.h5,{id:"conversation-being-blocked",children:"Conversation being blocked"}),"\n",(0,t.jsx)(n.p,{children:"If a connection is a violation, as shown in red, and has been blocked by NeuVector, the arrow will have an \u2018x\u2019 in it."}),"\n",(0,t.jsx)(n.h5,{id:"quarantined-container",children:"Quarantined container"}),"\n",(0,t.jsx)(n.p,{children:"Containers with a red circle around them have been quarantined. To un-quarantine, right-click on the container and select the un-quarantine button."})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},3299:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/4-3_NA_Actions-c2fbe92cb93d3e40aad998c638195db3.png"},58487:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/4-3_NA_Legend-159f57cb5de65bc17cd44f14caa08cf1.png"},95250:(e,n,i)=>{i.d(n,{Z:()=>t});const t="data:image/png;base64,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"},50432:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/4-3_Network_Activity-2f2519c78047d8f599a76abc193c3a6c.png"},98564:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/Dashboard-Click-fefff171d662376e5a3e73b76a56fddf.png"},97473:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/Dashboard_Risks-ae33eacd019d51ca6aafbc91321ae90c.png"},55946:(e,n,i)=>{i.d(n,{Z:()=>t});const t=i.p+"assets/images/ping-capture-64bd72ac7a219ab39dc3cca19eb6b482.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var t=i(67294);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);