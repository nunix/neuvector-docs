"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1331],{54577:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=t(85893),o=t(11151);const s={title:"Air Gapping NeuVector",taxonomy:{category:"docs"},slug:"/deploying/airgap"},a=void 0,i={id:"deploying/airgap/airgap",title:"Air Gapping NeuVector",description:"Tools Needed",source:"@site/docs/02.deploying/09.airgap/09.airgap.md",sourceDirName:"02.deploying/09.airgap",slug:"/deploying/airgap",permalink:"/neuvector-docs/next/deploying/airgap",draft:!1,unlisted:!1,editUrl:"https://github.com/neuvector/docs/edit/main/docs/02.deploying/09.airgap/09.airgap.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Air Gapping NeuVector",taxonomy:{category:"docs"},slug:"/deploying/airgap"},sidebar:"tutorialSidebar",previous:{title:"Public Cloud K8s AKS, EKS, GKE, IBM...",permalink:"/neuvector-docs/next/deploying/publick8s"},next:{title:"Amazon ECS",permalink:"/neuvector-docs/next/deploying/ecs"}},l={},c=[{value:"Tools Needed",id:"tools-needed",level:3},{value:"Get Images and Chart",id:"get-images-and-chart",level:3},{value:"Compress and Move",id:"compress-and-move",level:3},{value:"Uncompress and Load",id:"uncompress-and-load",level:3},{value:"Deploy with Helm",id:"deploy-with-helm",level:3}];function d(e){const r={a:"a",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h3,{id:"tools-needed",children:"Tools Needed"}),"\n",(0,n.jsx)(r.p,{children:"We need to install three tools for downloading all the bits for Neuvector."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://helm.sh/",children:"Helm"})," - Application Lifecycle Manager"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://github.com/containers/skopeo",children:"Skopeo"})," - Image/Registry Tool"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"https://github.com/facebook/zstd",children:"ZStandard"})," - Compresstion Algorithm"]}),"\n"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"# install helm\ncurl -fsSL https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash\n\n# install skopeo - rocky linux based\nyum install zstd skopeo -y\n"})}),"\n",(0,n.jsx)(r.h3,{id:"get-images-and-chart",children:"Get Images and Chart"}),"\n",(0,n.jsxs)(r.p,{children:["In order to get all the images we are going to use the chart itself. Using ",(0,n.jsx)(r.a,{href:"https://helm.sh/",children:"Helm"})," let's add the repo and download the chart. We will also use ",(0,n.jsx)(r.a,{href:"https://github.com/containers/skopeo",children:"skopeo"})," for downloading and uploading."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"# make a directory\nmkdir -p neuvector/images\n\n# add repo\nhelm repo add neuvector https://neuvector.github.io/neuvector-helm/\n\n# update local chart\nhelm repo update\n\n# pull\nhelm pull neuvector/core -d neuvector\n"})}),"\n",(0,n.jsxs)(r.p,{children:["You should now see a file like ",(0,n.jsx)(r.code,{children:"core-2.4.0.tgz"}),". The version may vary, but this is correct. This is the downloaded chart. Now we need the images. Good thing we can use the chart to figure this out."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"# create image list\nhelm template neuvector/core-*.tgz | awk '$1 ~ /image:/ {print $2}' | sed -e 's/\\\"//g' > neuvector/images/list.txt\n\n# get images\nfor i in $(cat neuvector/images/list.txt); do \n  skopeo copy docker://$i docker-archive:neuvector/images/$(echo $i| awk -F/ '{print $3}'|sed 's/:/_/g').tar:$(echo $i| awk -F/ '{print $3}')\ndone\n"})}),"\n",(0,n.jsx)(r.p,{children:"Fantastic, we should have a directory that looks like:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"[root@flux ~]# ls -lR neuvector\nneuvector:\ntotal 16\n-rw-r--r--. 1 root root 15892 Jan  8 14:33 core-2.4.0.tgz\ndrwxr-xr-x. 2 root root   153 Jan  8 14:35 images\n\nneuvector/images:\ntotal 953920\n-rw-r--r--. 1 root root 236693504 Jan  8 14:35 controller_5.3.0.tar\n-rw-r--r--. 1 root root 226704384 Jan  8 14:35 enforcer_5.3.0.tar\n-rw-r--r--. 1 root root       176 Jan  8 14:34 list.txt\n-rw-r--r--. 1 root root 331550208 Jan  8 14:35 manager_5.3.0.tar\n-rw-r--r--. 1 root root 169589760 Jan  8 14:35 scanner_latest.tar\n-rw-r--r--. 1 root root  12265472 Jan  8 14:35 updater_latest.tar\n"})}),"\n",(0,n.jsx)(r.p,{children:"And we can compress and move everything."}),"\n",(0,n.jsx)(r.h3,{id:"compress-and-move",children:"Compress and Move"}),"\n",(0,n.jsxs)(r.p,{children:["Compressing is fairly simple. We will use ",(0,n.jsx)(r.code,{children:"tar"})," with the ZST format for maximum compression."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"# compress\ntar -I zstd -vcf neuvector_airgap.zst neuvector\n"})}),"\n",(0,n.jsxs)(r.p,{children:["Now simply move the 400M ",(0,n.jsx)(r.code,{children:"neuvector_airgap.zst"})," to your network."]}),"\n",(0,n.jsx)(r.h3,{id:"uncompress-and-load",children:"Uncompress and Load"}),"\n",(0,n.jsxs)(r.p,{children:["All we need to do now is uncompress with a similar command. The following will output to director called ",(0,n.jsx)(r.code,{children:"neuvector"}),"."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"tar -I zstd -vxf neuvector_airgap.zst\n"})}),"\n",(0,n.jsxs)(r.p,{children:['Loading the images into a registry is going to require an understanding of your internal network. For this doc let\'s use "registry.awesome.sauce" as the DNS name. Loading the images is fairly simple again with ',(0,n.jsx)(r.code,{children:"skopeo"}),'. Please make sure it is installed on the "inside" machine. You will probably need to authenticate with ',(0,n.jsx)(r.code,{children:"skopeo login"})," for it to work."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"# skopeo load\nexport REGISTRY=registry.awesome.sauce\nfor file in $(ls neuvector/images | grep -v txt ); do \n     skopeo copy docker-archive:neuvector/images/$file docker://$(echo $file | sed 's/.tar//g' | awk -F_ '{print \"'$REGISTRY'/neuvector/\"$1\":\"$2}')\ndone\n"})}),"\n",(0,n.jsx)(r.p,{children:"With all the images loaded in a registry we can install with Helm."}),"\n",(0,n.jsx)(r.h3,{id:"deploy-with-helm",children:"Deploy with Helm"}),"\n",(0,n.jsxs)(r.p,{children:["Deploying with Helm is fairly straight forward. There are a few values that are needed to insure the images are pulling from the local registry. Here is a good example. You may need to tweak a few settings. Please follow the Helm best practices for ",(0,n.jsx)(r.code,{children:"values.yaml"}),". Note the ",(0,n.jsx)(r.code,{children:"imagePullSecrets"})," field. This is the secret for your cluster to authenticate to the registry."]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-bash",children:"# helm install example\n# variables\nexport REGISTRY=registry.awesome.sauce  # registry URL\nexport NEU_URL=neuvector.awesome.sauce   # neuvector URL\n\n# helm all the things -- read all the options being set\nhelm upgrade -i neuvector --namespace neuvector neuvector/core --create-namespace  --set imagePullSecrets=regsecret --set k3s.enabled=true --set k3s.runtimePath=/run/k3s/containerd/containerd.sock  --set manager.ingress.enabled=true --set controller.pvc.enabled=true --set controller.pvc.capacity=10Gi --set manager.svc.type=ClusterIP --set registry=$REGISTRY --set tag=5.3.0 --set controller.image.repository=neuvector/controller --set enforcer.image.repository=neuvector/enforcer --set manager.image.repository=neuvector/manager --set cve.updater.image.repository=neuvector/updater --set manager.ingress.host=$NEU_URL\n"})})]})}function h(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>a});var n=t(67294);const o={},s=n.createContext(o);function a(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);