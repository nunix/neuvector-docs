"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2061],{29376:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=t(85893),r=t(11151);const o={title:"Gitlab",taxonomy:{category:"docs"},slug:"/scanning/build/gitlab"},a=void 0,c={id:"scanning/build/gitlab/gitlab",title:"Gitlab",description:"Scan for Vulnerabilities during Gitlab Build Pipeline",source:"@site/docs/06.scanning/03.build/05.gitlab/05.gitlab.md",sourceDirName:"06.scanning/03.build/05.gitlab",slug:"/scanning/build/gitlab",permalink:"/neuvector-docs/next/scanning/build/gitlab",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/docs/06.scanning/03.build/05.gitlab/05.gitlab.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Gitlab",taxonomy:{category:"docs"},slug:"/scanning/build/gitlab"},sidebar:"tutorialSidebar",previous:{title:"Azure DevOps",permalink:"/neuvector-docs/next/scanning/build/azuredevops"},next:{title:"GitHub",permalink:"/neuvector-docs/next/scanning/build/github"}},s={},l=[{value:"Scan for Vulnerabilities during Gitlab Build Pipeline",id:"scan-for-vulnerabilities-during-gitlab-build-pipeline",level:3},{value:"Scan During Gitlab Build Using REST API",id:"scan-during-gitlab-build-using-rest-api",level:4}];function u(n){const e={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h3,{id:"scan-for-vulnerabilities-during-gitlab-build-pipeline",children:"Scan for Vulnerabilities during Gitlab Build Pipeline"}),"\n",(0,i.jsxs)(e.p,{children:["NeuVector can be configured to scan for vulnerabilities triggered in the Gitlab build pipeline. There is a ",(0,i.jsx)(e.a,{href:"https://gitlab.com/neuvector/gitlab-plugin",children:"Gitlab plug-in here"})," which can be configured and used. Please follow the instructions on the gitlab site for using the plugin."]}),"\n",(0,i.jsx)(e.p,{children:"The scan can also use the NeuVector REST API by configuring the provided script below to access the controller."}),"\n",(0,i.jsx)(e.p,{children:"In addition, make sure there is a NeuVector scanner container deployed and configured to connect to the Allinone or Controller. In 4.0 and later, the neuvector/scanner container must be deployed separate from the allinone or controller."}),"\n",(0,i.jsx)(e.h4,{id:"scan-during-gitlab-build-using-rest-api",children:"Scan During Gitlab Build Using REST API"}),"\n",(0,i.jsx)(e.p,{children:"Use the following script, configured for your NeuVector login credentials to trigger the vulnerability scans."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-yaml",children:'########################\n# Scanning Job\n########################\n\nNeuVector_Scan:\n  image: docker:latest\n  stage: test\n  #the runner tag name is nv-scan \n  tags:\n    - nv-scan\n  services:\n    - docker:dind\n  before_script:\n    - apk add curl\n    - apk add jq\n  variables:\n    DOCKER_DAEMON_PORT: 2376\n    DOCKER_HOST: "tcp://$CI_SERVER_HOST:$DOCKER_DAEMON_PORT"\n    #the name of the image to be scanned\n    NV_TO_BE_SCANNED_IMAGE_NAME: "nv_demo"\n    #the tag of the image to be scanned\n    NV_TO_BE_SCANNED_IMAGE_TAG: "latest"\n    #for local, set NV_REGISTRY=""\n    #for remote, set NV_REGISTRY="[registry URL]"\n    NV_REGISTRY_NAME: ""\n    #the credential to login to the docker registry\n    NV_REGISTRY_USER: ""\n    NV_REGISTRY_PASSWORD: ""\n    #NeuVector image location\n    NV_IMAGE: "10.1.127.3:5000/neuvector/controller"\n    NV_PORT: 10443\n    NV_LOGIN_USER: "admin"\n    NV_LOGIN_PASSWORD: "admin"\n    NV_LOGIN_JSON: \'{"password":{"username":"$NV_LOGIN_USER","password":"$NV_LOGIN_PASSWORD"}}\'\n    NV_SCANNING_JSON: \'{"request":{"registry":"$NV_REGISTRY","username":"$NV_REGISTRY_NAME","password":"$NV_REGISTRY_PASSWORD","repository":"$NV_TO_BE_SCANNED_IMAGE_NAME","tag":"$NV_TO_BE_SCANNED_IMAGE_TAG"}}\'\n    NV_API_AUTH_URL: "https://$CI_SERVER_HOST:$NV_PORT/v1/auth"\n    NV_API_SCANNING_URL: "https://$CI_SERVER_HOST:$NV_PORT/v1/scan/repository"\n  script: \n    - echo "Start neuvector scanner"\n    - docker run -itd --privileged --name neuvector.controller -e CLUSTER_JOIN_ADDR=$CI_SERVER_HOST -p 18301:18301 -p 18301:18301/udp -p 18300:18300 -p 18400:18400  -p $NV_PORT:$NV_PORT -v /var/neuvector:/var/neuvector -v /var/run/docker.sock:/var/run/docker.sock -v /proc:/host/proc:ro -v /sys/fs/cgroup/:/host/cgroup/:ro $NV_IMAGE\n    - |\n      _COUNTER_="0"\n      while [ -z "$TOKEN" -a "$_COUNTER_" != "12" ]; do\n        _COUNTER_=$((( _COUNTER_ + 1 )))\n        sleep 5\n        TOKEN=`(curl -s -f $NV_API_AUTH_URL -k -H "Content-Type:application/json" -d $NV_LOGIN_JSON || echo null) | jq -r \'.token.token\'`\n        if [ "$TOKEN" = "null" ]; then\n          TOKEN=""\n        fi\n      done\n    - echo "Scanning ..."\n    - sleep 20\n    - curl $NV_API_SCANNING_URL -s -k -H "Content-Type:application/json" -H "X-Auth-Token:$TOKEN" -d $NV_SCANNING_JSON | jq .\n    - echo "Logout"\n    - curl $NV_API_AUTH_URL -k -X \'DELETE\' -H "Content-Type:application/json" -H "X-Auth-Token:$TOKEN"\n\n  after_script:\n    - docker stop neuvector.controller\n    - docker rm neuvector.controller\n'})})]})}function d(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(u,{...n})}):u(n)}},11151:(n,e,t)=>{t.d(e,{Z:()=>c,a:()=>a});var i=t(67294);const r={},o=i.createContext(r);function a(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);