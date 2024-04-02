"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8757],{4903:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=i(85893),t=i(11151);const o={title:"Response Rules",taxonomy:{category:"docs"},slug:"/policy/responserules"},s=void 0,a={id:"policy/responserules/responserules",title:"Response Rules",description:"Policy: Response Rules",source:"@site/versioned_docs/version-5.3/05.policy/08.responserules/08.responserules.md",sourceDirName:"05.policy/08.responserules",slug:"/policy/responserules",permalink:"/neuvector-docs/policy/responserules",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/versioned_docs/version-5.3/05.policy/08.responserules/08.responserules.md",tags:[],version:"5.3",sidebarPosition:8,frontMatter:{title:"Response Rules",taxonomy:{category:"docs"},slug:"/policy/responserules"},sidebar:"tutorialSidebar",previous:{title:"File Access Rules",permalink:"/neuvector-docs/policy/filerules"},next:{title:"DLP & WAF Sensors",permalink:"/neuvector-docs/policy/dlp"}},l={},c=[{value:"Policy: Response Rules",id:"policy-response-rules",level:3},{value:"Detailed Configuration for Response Rules",id:"detailed-configuration-for-response-rules",level:3},{value:"Response Rule Parameters Matrix",id:"response-rule-parameters-matrix",level:4},{value:"Using Multiple Criteria in a Single Rule",id:"using-multiple-criteria-in-a-single-rule",level:4},{value:"Actions",id:"actions",level:4},{value:"Creating a response rule for security event logs",id:"creating-a-response-rule-for-security-event-logs",level:4},{value:"Sample rule to quarantine container and send webhook when package is updated in the nv.alpinepython.default container.",id:"sample-rule-to-quarantine-container-and-send-webhook-when-package-is-updated-in-the-nvalpinepythondefault-container",level:4},{value:"Icons to manage rules - edit, delete, disable and insert new rule below",id:"icons-to-manage-rules---edit-delete-disable-and-insert-new-rule-below",level:4},{value:"Creating a response rule for event logs",id:"creating-a-response-rule-for-event-logs",level:4},{value:"Sample events that can be chosen for a response rule",id:"sample-events-that-can-be-chosen-for-a-response-rule",level:4},{value:"Sample criteria for Admission control events",id:"sample-criteria-for-admission-control-events",level:4},{value:"Creating a response rule for cve-report category (log level and report name as matching criteria)",id:"creating-a-response-rule-for-cve-report-category-log-level-and-report-name-as-matching-criteria",level:4},{value:"Sample CVE report types that can be chosen for CVE-Report category response rule",id:"sample-cve-report-types-that-can-be-chosen-for-cve-report-category-response-rule",level:4},{value:"Quarantine container and send webhook when vulnerability scan results contain more than 5 high level CVE vulnerabilities for that container",id:"quarantine-container-and-send-webhook-when-vulnerability-scan-results-contain-more-than-5-high-level-cve-vulnerabilities-for-that-container",level:4},{value:"Send a webhook if container contains vulnerability with name cve-2018-12",id:"send-a-webhook-if-container-contains-vulnerability-with-name-cve-2018-12",level:4},{value:"Creating response rule for CIS benchmarks (log level and benchmark number as matching criteria)",id:"creating-response-rule-for-cis-benchmarks-log-level-and-benchmark-number-as-matching-criteria",level:4},{value:"Unquarantine a container by deleting response rule",id:"unquarantine-a-container-by-deleting-response-rule",level:4},{value:"Viewing the rule id responsible for the container quarantine (in Notifications -&gt; Events)",id:"viewing-the-rule-id-responsible-for-the-container-quarantine-in-notifications---events",level:4},{value:"Unquarantine option popup when the appropriate response rule is deleted",id:"unquarantine-option-popup-when-the-appropriate-response-rule-is-deleted",level:4},{value:"Complete list of categoried criteria that can be configured for Response Rules",id:"complete-list-of-categoried-criteria-that-can-be-configured-for-response-rules",level:4},{value:"Events",id:"events",level:5},{value:"Incidents (Security Event)",id:"incidents-security-event",level:5},{value:"Threats (Security Event)",id:"threats-security-event",level:5},{value:"Violations (Security Event)",id:"violations-security-event",level:5},{value:"Compliance",id:"compliance",level:5},{value:"CVE-Report",id:"cve-report",level:5},{value:"Admission",id:"admission",level:5},{value:"Dynamically Generated Criteria",id:"dynamically-generated-criteria",level:5}];function d(e){const n={admonition:"admonition",code:"code",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"policy-response-rules",children:"Policy: Response Rules"}),"\n",(0,r.jsx)(n.p,{children:"Response Rules provide a flexible, customizable rule engine to automate responses to important security events. Triggers can include Security Events, Vulnerability Scan results, CIS Benchmarks, Admission Control events and general Events. Actions include container quarantine, webhooks, and suppression of alerts."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"ResponseRules",src:i(40139).Z+"",width:"1340",height:"627"})}),"\n",(0,r.jsx)(n.p,{children:"Creating a new Response Rule using the following:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Group. A rule will apply to a Group. Please see the section Run-Time Security Policy -> Groups for more details on Groups and how to create a new one if needed."}),"\n",(0,r.jsx)(n.li,{children:"Category. This is the type of event, such as Security Event, or CVE vulnerability scan result."}),"\n",(0,r.jsx)(n.li,{children:"Criteria. Specify one or more criteria. Each Category will have different criteria which can be applied. For example, by the event name, severity, or minimum number of high CVEs."}),"\n",(0,r.jsx)(n.li,{children:"Action. Select one or more actions. Quarantine will block all network traffic in/out of a container. Webhook requires that a webhook endpoint be defined in Settings -> Configuration. Suppress log will prevent this event from being logged in Notifications."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"NewResponseRules",src:i(36617).Z+"",width:"943",height:"372"})}),"\n",(0,r.jsx)(n.admonition,{title:"important",type:"warning",children:(0,r.jsx)(n.p,{children:"All Response Rules are evaluated to determine if they match the condition/criteria. If there are multiple rule matches, each action(s) will be performed. This is different than the behavior of Network Rules, which are evaluated from top to bottom and only the first rule which matches will be executed."})}),"\n",(0,r.jsx)(n.p,{children:"Additional events and actions will continue to be added by NeuVector in future releases."}),"\n",(0,r.jsx)(n.h3,{id:"detailed-configuration-for-response-rules",children:"Detailed Configuration for Response Rules"}),"\n",(0,r.jsx)(n.p,{children:"Response Rules enable automated responses such as quarantine, webhook, and suppress log based on certain security events. Currently, the events which can be defined in the response rule include event logs, security event logs, and CVE (vulnerability scan) and CIS benchmark reports. Response rules are applied in all modes: Discover, Monitor and Protect and the behavior is same for all 3 modes."}),"\n",(0,r.jsx)(n.p,{children:"Actions from multiple rules will be applied if an event matches multiple rules. Each rule can have multiple actions and multiple match criteria. All actions defined will be applied to containers when events match the response rule criteria. In the case there is a match for Host (not container) events, currently the actions webhook and suppress log are supported."}),"\n",(0,r.jsx)(n.p,{children:"There are 6 default response rules included with NeuVector which are set to the status \u2018disabled,\u2019 one for each category. Users can either modify a default rule to match their requirements or create new ones. Be sure to enable any rules which should be applied."}),"\n",(0,r.jsx)(n.h4,{id:"response-rule-parameters-matrix",children:"Response Rule Parameters Matrix"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"matrix",src:i(51018).Z+"",width:"1610",height:"484"})}),"\n",(0,r.jsx)(n.h4,{id:"using-multiple-criteria-in-a-single-rule",children:"Using Multiple Criteria in a Single Rule"}),"\n",(0,r.jsx)(n.p,{children:"The matching logic for multiple criteria in one response rule is:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["For different criteria types  (e.g. name",":Network",".Violation, name",":Process",".Profile.Violation) within a single rule, apply 'and'"]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"actions",children:"Actions"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Quarantine \u2013 container is quarantined. Note that Quarantine means that all network traffic is blocked.  The container will remain and continue to run - just without any network connections.  Kubernetes will not start up a container to replace a quarantined container, as the api-server is still able to reach the container."}),"\n",(0,r.jsx)(n.li,{children:"Webhook - a webhook log generated"}),"\n",(0,r.jsx)(n.li,{children:"suppress-log \u2013 log is suppressed - both syslog and webhook log"}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Quarantine action is not applicable to rule triggered for Host events"}),"\n",(0,r.jsx)(n.li,{children:"Action and Event parameters are mandatory; other parameters can be empty to match broader conditions."}),"\n",(0,r.jsx)(n.li,{children:"Multiple rules can match for a single log, which can result in multiple actions taken."}),"\n",(0,r.jsx)(n.li,{children:"Each rule can have multiple actions."}),"\n"]})}),"\n",(0,r.jsx)(n.h4,{id:"creating-a-response-rule-for-security-event-logs",children:"Creating a response rule for security event logs"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'Click "insert to top" to insert the rule at the top'}),"\n",(0,r.jsx)(n.li,{children:"Choose a service group name if the rule needs to be applied to a particular service group"}),"\n",(0,r.jsx)(n.li,{children:"Choose category as security event"}),"\n",(0,r.jsx)(n.li,{children:"Add criteria for the event log to be included as matching criteria"}),"\n",(0,r.jsx)(n.li,{children:"Select actions to be applied Quarantine, Webhook or suppress log"}),"\n",(0,r.jsx)(n.li,{children:"Enable status"}),"\n",(0,r.jsx)(n.li,{children:"The log levels or process names can be used as other matching criteria"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"sample-rule-to-quarantine-container-and-send-webhook-when-package-is-updated-in-the-nvalpinepythondefault-container",children:"Sample rule to quarantine container and send webhook when package is updated in the nv.alpinepython.default container."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"rulesample",src:i(16676).Z+"",width:"960",height:"287"})}),"\n",(0,r.jsx)(n.h4,{id:"icons-to-manage-rules---edit-delete-disable-and-insert-new-rule-below",children:"Icons to manage rules - edit, delete, disable and insert new rule below"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"manage",src:i(99050).Z+"",width:"1020",height:"266"})}),"\n",(0,r.jsx)(n.h4,{id:"creating-a-response-rule-for-event-logs",children:"Creating a response rule for event logs"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'Click "insert to top" to insert the rule at the top'}),"\n",(0,r.jsx)(n.li,{children:"Choose a service group name if the rule needs to be applied to a particular service group"}),"\n",(0,r.jsx)(n.li,{children:"Choose Event the category"}),"\n",(0,r.jsx)(n.li,{children:"Add name of the event log to be included as the matching criteria"}),"\n",(0,r.jsx)(n.li,{children:"Select actions to be applied - Quarantine, Webhook or suppress log"}),"\n",(0,r.jsx)(n.li,{children:"Enable status"}),"\n",(0,r.jsx)(n.li,{children:"The log Level can be used as other matching criteria"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"sample-events-that-can-be-chosen-for-a-response-rule",children:"Sample events that can be chosen for a response rule"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"events",src:i(23161).Z+"",width:"1028",height:"416"})}),"\n",(0,r.jsx)(n.h4,{id:"sample-criteria-for-admission-control-events",children:"Sample criteria for Admission control events"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"events",src:i(80102).Z+"",width:"960",height:"291"})}),"\n",(0,r.jsx)(n.h4,{id:"creating-a-response-rule-for-cve-report-category-log-level-and-report-name-as-matching-criteria",children:"Creating a response rule for cve-report category (log level and report name as matching criteria)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'Click "insert to top" to insert the rule at the top'}),"\n",(0,r.jsx)(n.li,{children:"Choose a service group name if the rule needs to be applied to a particular service group"}),"\n",(0,r.jsx)(n.li,{children:"Choose category CVE-Report"}),"\n",(0,r.jsx)(n.li,{children:"Add log level as matching criteria or cve-report type"}),"\n",(0,r.jsx)(n.li,{children:"Select actions to be applied Quarantine, Webhook or suppress log (quarantine is not applicable for registry scan)"}),"\n",(0,r.jsx)(n.li,{children:"Enable status"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"sample-cve-report-types-that-can-be-chosen-for-cve-report-category-response-rule",children:"Sample CVE report types that can be chosen for CVE-Report category response rule"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"cvereport",src:i(15097).Z+"",width:"990",height:"301"})}),"\n",(0,r.jsx)(n.h4,{id:"quarantine-container-and-send-webhook-when-vulnerability-scan-results-contain-more-than-5-high-level-cve-vulnerabilities-for-that-container",children:"Quarantine container and send webhook when vulnerability scan results contain more than 5 high level CVE vulnerabilities for that container"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"cvequarantine",src:i(46629).Z+"",width:"984",height:"297"})}),"\n",(0,r.jsx)(n.h4,{id:"send-a-webhook-if-container-contains-vulnerability-with-name-cve-2018-12",children:"Send a webhook if container contains vulnerability with name cve-2018-12"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"webhook",src:i(45282).Z+"",width:"1055",height:"325"})}),"\n",(0,r.jsx)(n.h4,{id:"creating-response-rule-for-cis-benchmarks-log-level-and-benchmark-number-as-matching-criteria",children:"Creating response rule for CIS benchmarks (log level and benchmark number as matching criteria)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:'Click "insert to top" to insert the rule at the top'}),"\n",(0,r.jsx)(n.li,{children:"Choose service group name if rule need to be applied  for a particular service group"}),"\n",(0,r.jsx)(n.li,{children:"Choose category Benchmark"}),"\n",(0,r.jsx)(n.li,{children:"Add log level as matching criteria or benchmark number, e.g. \u201c5.12\u201d Ensure the container's root filesystem is mounted as read only"}),"\n",(0,r.jsx)(n.li,{children:"Select actions to be applied Quarantine, Webhook and suppress log (quarantine is not applicable Host Docker and Kubenetes benchmark)"}),"\n",(0,r.jsx)(n.li,{children:"Enable status"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"cis",src:i(53940).Z+"",width:"1010",height:"305"})}),"\n",(0,r.jsx)(n.h4,{id:"unquarantine-a-container-by-deleting-response-rule",children:"Unquarantine a container by deleting response rule"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"You may want to unquarantine a container if it is quarantined by a response rule"}),"\n",(0,r.jsx)(n.li,{children:"Delete the response rule which caused the container to be quarantined, which can be found in the event log"}),"\n",(0,r.jsx)(n.li,{children:"Select the unquarantine option to unquarantine the container after deleting the rule"}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"viewing-the-rule-id-responsible-for-the-container-quarantine-in-notifications---events",children:"Viewing the rule id responsible for the container quarantine (in Notifications -> Events)"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"unquarantine",src:i(6007).Z+"",width:"750",height:"148"})}),"\n",(0,r.jsx)(n.h4,{id:"unquarantine-option-popup-when-the-appropriate-response-rule-is-deleted",children:"Unquarantine option popup when the appropriate response rule is deleted"}),"\n",(0,r.jsx)(n.p,{children:"Check the box to unquarantine any containers which were quarantined by this rule"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"option",src:i(89470).Z+"",width:"1028",height:"191"})}),"\n",(0,r.jsx)(n.h4,{id:"complete-list-of-categoried-criteria-that-can-be-configured-for-response-rules",children:"Complete list of categoried criteria that can be configured for Response Rules"}),"\n",(0,r.jsxs)(n.p,{children:["Note that some criteria require a value (e.g. cve-high:1, name",":D",".5.4, level",":critical",") delimited by a colon, while others are preset and will show in the drop down when you start typing a criteria."]}),"\n",(0,r.jsx)(n.h5,{id:"events",children:"Events"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"Container.Start \nContainer.Stop\nContainer.Remove\nContainer.Secured\nContainer.Unsecured\nEnforcer.Start\nEnforcer.Join\nEnforcer.Stop\nEnforcer.Disconnect\nEnforcer.Connect\nEnforcer.Kicked\nController.Start\nController.Join\nController.Leave\nController.Stop\nController.Disconnect\nController.Connect\nController.Lead.Lost\nController.Lead.Elected\nUser.Login\nUser.Logout\nUser.Timeout\nUser.Login.Failed\nUser.Login.Blocked\nUser.Login.Unblocked\nUser.Password.Reset\nUser.Resource.Access.Denied\nRESTful.Write\nRESTful.Read\nScanner.Join\nScanner.Update\nScanner.Leave\nScan.Failed\nScan.Succeeded\nDocker.CIS.Benchmark.Failed\nKubenetes.CIS.Benchmark.Failed\nLicense.Update\nLicense.Expire\nLicense.Remove\nLicense.EnforcerLimitReached\nAdmission.Control.Configured   // for admission control\nAdmission.Control.ConfigFailed // for admission control\nConfigMap.Load                 // for initial Config\nConfigMap.Failed               // for initial Config failure\nCrd.Import                     // for crd Config import\nCrd.Remove                     // for crd Config remove due to k8s miss\nCrd.Error                      // for remove error crd\nFederation.Promote             // for multi-clusters\nFederation.Demote              // for multi-clusters\nFederation.Join                // for joint cluster in multi-clusters\nFederation.Leave               // for multi-clusters\nFederation.Kick                // for multi-clusters\nFederation.Policy.Sync         // for multi-clusters\nConfiguration.Import\nConfiguration.Export\nConfiguration.Import.Failed\nConfiguration.Export.Failed\nCloud.Scan.Normal // for cloud scan nomal ret\nCloud.Scan.Alert  // for cloud scan ret with alert\nCloud.Scan.Fail   // for cloud scan fail\nGroup.Auto.Remove\nAgent.Memory.Pressure\nController.Memory.Pressure\nKubenetes.NeuVector.RBAC\nGroup.Auto.Promote\nUser.Password.Alert\n"})}),"\n",(0,r.jsx)(n.h5,{id:"incidents-security-event",children:"Incidents (Security Event)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"Host.Privilege.Escalation\nContainer.Privilege.Escalation\nHost.Suspicious.Process\nContainer.Suspicious.Process\nContainer.Quarantined\nContainer.Unquarantined\nHost.FileAccess.Violation\nContainer.FileAccess.Violation\nHost.Package.Updated\nContainer.Package.Updated\nHost.Tunnel.Detected\nContainer.Tunnel.Detected\nProcess.Profile.Violation // container\nHost.Process.Violation    // host\n"})}),"\n",(0,r.jsx)(n.h5,{id:"threats-security-event",children:"Threats (Security Event)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"TCP.SYN.Flood\nICMP.Flood\nSource.IP.Session.Limit\nInvalid.Packet.Format\nIP.Fragment.Teardrop\nTCP.SYN.With.Data\nTCP.Split.Handshake\nTCP.No.Client.Data\nTCP.Small.Window\nTCP.SACK.DDoS.With.Small.MSS\nPing.Death\nDNS.Loop.Pointer\nSSH.Version.1\nSSL.Heartbleed\nSSL.Cipher.Overflow\nSSL.Version.2or3\nSSL.TLS1.0or1.1\nHTTP.Negative.Body.Length\nHTTP.Request.Smuggling\nHTTP.Request.Slowloris\nDNS.Stack.Overflow\nMySQL.Access.Deny\nDNS.Zone.Transfer\nICMP.Tunneling\nDNS.Type.Null\nSQL.Injection\nApache.Struts.Remote.Code.Execution\nDNS.Tunneling\nK8S.externalIPs.MitM\n"})}),"\n",(0,r.jsx)(n.h5,{id:"violations-security-event",children:"Violations (Security Event)"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"Network.Violation\n"})}),"\n",(0,r.jsx)(n.h5,{id:"compliance",children:"Compliance"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"Compliance.Container.Violation\nCompliance.ContainerFile.Violation\nCompliance.Host.Violation\nCompliance.Image.Violation\nCompliance.ContainerCustomCheck.Violation\nCompliance.HostCustomCheck.Violation\nCompliance.Test.Name   // D.[1-5].*\n"})}),"\n",(0,r.jsx)(n.h5,{id:"cve-report",children:"CVE-Report"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"ContainerScanReport\nHostScanReport\nRegistryScanReport\nPlatformScanReport\ncve-name\ncve-high\ncve-medium\ncve-high-with-fix // cve-high-with-fix:N (fixed high vul.>N) cve-high-with-fix:N/D (fixed high vul.>N and reported more than D days ago)\n"})}),"\n",(0,r.jsx)(n.h5,{id:"admission",children:"Admission"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"Admission.Control.Allowed   // for admission control\nAdmission.Control.Violation // for admission control\nAdmission.Control.Denied    // for admission control\n"})}),"\n",(0,r.jsx)(n.h5,{id:"dynamically-generated-criteria",children:"Dynamically Generated Criteria"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"DLP\nWAF\nCustomCheckCompliance\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},80102:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/admission-1ad7638f57f3e8d4ccb9956fc1e0eda7.png"},36617:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/newrule1-c46a4f2ccc324292f9ec346ec24e1deb.png"},51018:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/resp1-7090791aa149c8619566f0fd14aba1f5.png"},89470:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/resp10-2d433614e2c4e45b9a93b95f4b9e75e4.png"},16676:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/resp3-eea51a51008cfdbda9210755cf953188.png"},99050:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/resp4-9afc1a9e2e3d309d25c91d23f01208db.png"},23161:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/resp5-7df80764e668567d6efc229695b97826.png"},15097:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/resp7-87ae58129b2bf003f17f7bd6f468c9bd.png"},45282:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/resp8-a-4665dc0b558020beac6957f4b8bc5a71.png"},53940:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/resp8-b-71f90144b8e85e05704628dd8c169b6e.png"},46629:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/resp8-6ef89faea468e6b70f6482f3ec025881.png"},6007:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/resp9-7b03780015c81d70054da67594192c53.png"},40139:(e,n,i)=>{i.d(n,{Z:()=>r});const r=i.p+"assets/images/response1-b6ac306ac2ebe6ac5524776bdcf89541.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>s});var r=i(67294);const t={},o=r.createContext(t);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);