"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7629],{72476:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=t(85893),r=t(11151);const i={title:"Build Phase Image Scanning",taxonomy:{category:"docs"},slug:"/scanning/build"},a=void 0,s={id:"scanning/build/build",title:"Build Phase Image Scanning",description:"CI/CD Build Phase Vulnerability Scanning",source:"@site/docs/06.scanning/03.build/03.build.md",sourceDirName:"06.scanning/03.build",slug:"/scanning/build",permalink:"/neuvector-docs/next/scanning/build",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/docs/06.scanning/03.build/03.build.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Build Phase Image Scanning",taxonomy:{category:"docs"},slug:"/scanning/build"},sidebar:"tutorialSidebar",previous:{title:"GCR Scanning using Service Accounts",permalink:"/neuvector-docs/next/scanning/registry/gcr-sa"},next:{title:"Jenkins Details",permalink:"/neuvector-docs/next/scanning/build/jenkins"}},c={},l=[{value:"CI/CD Build Phase Vulnerability Scanning",id:"cicd-build-phase-vulnerability-scanning",level:3},{value:"Local Build-Phase Scanning",id:"local-build-phase-scanning",level:4},{value:"Local Build-Phase Scanning - Scanner Only (No Controller Required)",id:"local-build-phase-scanning---scanner-only-no-controller-required",level:4}];function u(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"cicd-build-phase-vulnerability-scanning",children:"CI/CD Build Phase Vulnerability Scanning"}),"\n",(0,o.jsxs)(n.p,{children:["Scan for vulnerabilities during the build phase of the pipeline using plug-ins such as ",(0,o.jsx)(n.a,{href:"https://plugins.jenkins.io/neuvector-vulnerability-scanner/",children:"Jenkins"}),", ",(0,o.jsx)(n.a,{href:"https://github.com/neuvector/azure-vsts",children:"Azure Devops"}),", ",(0,o.jsx)(n.a,{href:"https://github.com/neuvector/scan-action",children:"Github Action"}),", ",(0,o.jsx)(n.a,{href:"https://gitlab.com/neuvector/gitlab-plugin",children:"gitlab"}),", Bamboo, and ",(0,o.jsx)(n.a,{href:"https://github.com/neuvector/circleci-orb",children:"CircleCI"}),", or use the REST API. NeuVector supports two types of build-phase scanning: registry and local. For registry scanning, the NeuVector controller and scanner must be able to connect to the registry to pull the image."]}),"\n",(0,o.jsx)(n.p,{children:"To trigger a build-phase scan, the plug-in (e.g. Jenkins) must be able to connect to the Controller or Allinone. Note: The default REST API port for plug-ins to call the scanner is 10443. This port must be exposed through the Allinone or Controller through a service in Kubernetes or a port map (e.g. - 10443:10443) in the Docker run or compose file."}),"\n",(0,o.jsx)(n.p,{children:"Make sure there is a NeuVector scanner container deployed and properly configured to connect to the Allinone or Controller. In 4.0 and later, the neuvector/scanner container must be deployed separately from the allinone or controller, and is included in the sample deployment yaml files."}),"\n",(0,o.jsxs)(n.p,{children:["You can download the plug-in from the Jenkins Plug-in Manager. Other plug-ins are accessible through the catalogs of the build tool, or on the ",(0,o.jsx)(n.a,{href:"https://github.com/neuvector",children:"NeuVector github"})," page. The Bamboo scanner is available at ",(0,o.jsx)(n.a,{href:"https://github.com/neuvector/bamboo-plugin/releases/tag/1.0.1",children:"https://github.com/neuvector/bamboo-plugin/releases/tag/1.0.1"}),".  The CircleCI ORB is available at ",(0,o.jsx)(n.a,{href:"https://github.com/neuvector/circleci-orb",children:"https://github.com/neuvector/circleci-orb"})," and through the CircleCI ORB catalog."]}),"\n",(0,o.jsx)(n.h4,{id:"local-build-phase-scanning",children:"Local Build-Phase Scanning"}),"\n",(0,o.jsx)(n.p,{children:"For local scanning, the NeuVector scanner will try to scan the image on a local host (or a host reachable by the remote host docker command)."}),"\n",(0,o.jsxs)(n.p,{children:["For Kubernetes or OpenShift-based local scanning, remove the commented-out section of the sample scanner deployment yaml file, shown in the ",(0,o.jsx)(n.a,{href:"/deploying/kubernetes#deploy-using-kubernetes",children:"Deploying NeuVector"})," sections. The commented out section looks like this:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"          env:\n# Commented out sections are required only for local build-phase scanning\n#            - name: SCANNER_DOCKER_URL\n#              value: tcp://192.168.1.10:2376\n            - name: CLUSTER_JOIN_ADDR\n              value: neuvector-svc-controller.neuvector\n            - name: CLUSTER_ADVERTISED_ADDR\n              valueFrom:\n                fieldRef:\n                  fieldPath: status.podIP\n            - name: CLUSTER_BIND_ADDR\n              valueFrom:\n                fieldRef:\n                  fieldPath: status.podIP\n#          volumeMounts:\n#            - mountPath: /var/run/docker.sock\n#              name: docker-sock\n#              readOnly: true\n#      volumes:\n#        - name: docker-sock\n#          hostPath:\n#            path: /var/run/docker.sock\n      restartPolicy: Always\n"})}),"\n",(0,o.jsxs)(n.p,{children:["For Docker-native local scanning, follow the instructions for Docker scanner deployments in the ",(0,o.jsx)(n.a,{href:"/deploying/docker#deploy-the-neuvector-scanner-container",children:"Docker Production deployments"})," section for the scanner."]}),"\n",(0,o.jsx)(n.h4,{id:"local-build-phase-scanning---scanner-only-no-controller-required",children:"Local Build-Phase Scanning - Scanner Only (No Controller Required)"}),"\n",(0,o.jsx)(n.p,{children:"NeuVector supports standalone scanner deployments for local image scanning (which does not require a Controller). Certain plug-in's such as the CircleCI ORB have an option to dynamically deploy a scanner when a build job requires image scanning, then remove the scanner when the results are sent back through the ORB. These dynamic scanner deployments are automatically invoked through the plug-in if supported."}),"\n",(0,o.jsxs)(n.p,{children:["Please see the ",(0,o.jsx)(n.a,{href:"/scanning/scanners",children:"scanner section"})," for more details on stand alone scanners."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var o=t(67294);const r={},i=o.createContext(r);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);