"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[480],{16427:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=n(85893),r=n(11151);const s={title:"Public Cloud K8s AKS, EKS, GKE, IBM...",taxonomy:{category:"docs"},slug:"/deploying/publick8s"},l=void 0,a={id:"deploying/publick8s/publick8s",title:"Public Cloud K8s AKS, EKS, GKE, IBM...",description:"Deploy NeuVector on a Public Cloud Kubernetes Service",source:"@site/versioned_docs/version-5.2/02.deploying/08.publick8s/08.publick8s.md",sourceDirName:"02.deploying/08.publick8s",slug:"/deploying/publick8s",permalink:"/neuvector-docs/5.2/deploying/publick8s",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/versioned_docs/version-5.2/02.deploying/08.publick8s/08.publick8s.md",tags:[],version:"5.2",sidebarPosition:8,frontMatter:{title:"Public Cloud K8s AKS, EKS, GKE, IBM...",taxonomy:{category:"docs"},slug:"/deploying/publick8s"},sidebar:"tutorialSidebar",previous:{title:"Azure Marketplace Billing",permalink:"/neuvector-docs/5.2/deploying/azuremarketplace"},next:{title:"Air Gapping NeuVector",permalink:"/neuvector-docs/5.2/deploying/airgap"}},i={},c=[{value:"Deploy NeuVector on a Public Cloud Kubernetes Service",id:"deploy-neuvector-on-a-public-cloud-kubernetes-service",level:3},{value:"Network Access",id:"network-access",level:4},{value:"Microsoft Azure AKS",id:"microsoft-azure-aks",level:3},{value:"Google Cloud Platform / GKE",id:"google-cloud-platform--gke",level:3},{value:"Handling Auto-Scaling Nodes with a Pod Disruption Budget",id:"handling-auto-scaling-nodes-with-a-pod-disruption-budget",level:3}];function d(e){const o={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.h3,{id:"deploy-neuvector-on-a-public-cloud-kubernetes-service",children:"Deploy NeuVector on a Public Cloud Kubernetes Service"}),"\n",(0,t.jsx)(o.p,{children:"Deploy NeuVector on any public cloud K8s service such as AWS EKS, Azure AKS, IBM Cloud K8s, Google Cloud, Alibaba Cloud or Oracle Cloud.\nNeuVector has passed the Amazon EKS Anywhere Conformance and Validation Framework and, as such, is a validated solution and is available as an Add-on for EKS-Anywhere on Snowball Edge devices through the AWS Console."}),"\n",(0,t.jsxs)(o.p,{children:["First, create your K8s cluster and confirm access with ",(0,t.jsx)(o.code,{children:"kubectl get nodes"}),"."]}),"\n",(0,t.jsx)(o.p,{children:"To deploy NeuVector use the sample deployment instructions and examples from the Kubernetes section of the Production Deployment. Edit the sample yaml if you are pulling NeuVector images from a local or cloud registry such as ECR or ACR."}),"\n",(0,t.jsxs)(o.p,{children:["Some cloud providers have integrated load balancers which are easy to deploy by using ",(0,t.jsx)(o.code,{children:"Type: LoadBalancer"})," instead of NodePort for the NeuVector webui."]}),"\n",(0,t.jsxs)(o.p,{children:["NeuVector also supports Helm-based deployment with a Helm chart at ",(0,t.jsx)(o.a,{href:"https://github.com/neuvector/neuvector-helm",children:"https://github.com/neuvector/neuvector-helm"}),"."]}),"\n",(0,t.jsx)(o.h4,{id:"network-access",children:"Network Access"}),"\n",(0,t.jsx)(o.p,{children:"Make sure internal and external ingress access is configured properly. For the NodePort service, the random port in the 3xxxx range must be accessible on a public IP of a worker or master node from the outside. You can access the console using the public IP address of any worker node and that port (NodePort), or the public IP of the load balancer and default port 8443. You can view the IP/port using:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:"kubectl get svc -n neuvector\n"})}),"\n",(0,t.jsx)(o.p,{children:"Most K8s services automatically enable/allow all inter-pod / inter-cluster communication between nodes which also enable the NeuVector containers (enforcers, controllers, manager) to communicate within the cluster."}),"\n",(0,t.jsx)(o.p,{children:"The sample Kubernetes yaml file will deploy one manager and 3 controllers. It will deploy an enforcer on every node as a daemonset. Note: It is not recommended to deploy (scale) more than one manager behind a load balancer due to potential session state issues."}),"\n",(0,t.jsx)(o.h3,{id:"microsoft-azure-aks",children:"Microsoft Azure AKS"}),"\n",(0,t.jsx)(o.p,{children:"When deploying a k8s cluster on Azure, the default for Kubernetes RBACs is off. Please enable RBACs to enable the cluster-admin clusterrole, otherwise you will need to create that manually later to support Helm based deployments."}),"\n",(0,t.jsx)(o.h3,{id:"google-cloud-platform--gke",children:"Google Cloud Platform / GKE"}),"\n",(0,t.jsx)(o.p,{children:"You can use the integrated load balancers which are easy to deploy by using \u2018Type: LoadBalancer\u2019 instead of NodePort for the NeuVector webui. Configuring persistent storage with type RWM (read write many) may require creating a storage service such as NFS before deploying NeuVector."}),"\n",(0,t.jsx)(o.p,{children:"NeuVector requires an SDN plug-in such as flannel, weave, or calico."}),"\n",(0,t.jsxs)(o.p,{children:["Use the environment variable NV_PLATFORM_INFO with value platform=Kubernetes",":GKE"," to enable NeuVector to perform GKE specific action such as running the GKE Kubernetes CIS Benchmarks."]}),"\n",(0,t.jsx)(o.h3,{id:"handling-auto-scaling-nodes-with-a-pod-disruption-budget",children:"Handling Auto-Scaling Nodes with a Pod Disruption Budget"}),"\n",(0,t.jsx)(o.p,{children:"Public cloud providers support the ability to auto-scale nodes, which can dynamically evict pods including the NeuVector controllers. To prevent disruptions to the controllers, a NeuVector pod disruption budget can be created."}),"\n",(0,t.jsx)(o.p,{children:"For example, create the file below nv_pdr.yaml to ensure that there are at least 2 controllers running at any time."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-yaml",children:"apiVersion: policy/v1beta1\nkind: PodDisruptionBudget\nmetadata:\n  name: neuvector-controller-pdb\n  namespace: neuvector\nspec:\n  minAvailable: 2\n  selector:\n    matchLabels:\n      app: neuvector-controller-pod\n"})}),"\n",(0,t.jsx)(o.p,{children:"Then"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-shell",children:"kubectl create -f nv_pdr.yaml\n"})}),"\n",(0,t.jsxs)(o.p,{children:["For more details: ",(0,t.jsx)(o.a,{href:"https://kubernetes.io/docs/tasks/run-application/configure-pdb/",children:"https://kubernetes.io/docs/tasks/run-application/configure-pdb/"})]})]})}function u(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,o,n)=>{n.d(o,{Z:()=>a,a:()=>l});var t=n(67294);const r={},s=t.createContext(r);function l(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);