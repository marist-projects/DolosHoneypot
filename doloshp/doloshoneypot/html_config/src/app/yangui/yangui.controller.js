define(["app/yangui/yangui.module","app/yangui/yangui.services","app/yangui/abn_tree.directive","app/yangui/sticky.directive"],function(e){e.register.controller("yanguiCtrl",["$scope","$rootScope","$http","YangConfigRestangular","yangUtils","reqBuilder","apiConnector",function(e,t,n,r,i,s,o){t.section_logo="logo_yangui",e.currentPath="./assets/views/yangui",e.apiType="",e.status={type:"noreq",msg:null},e.topologyData={nodes:[],links:[]};var u=function(){e.status={isWorking:!0,type:"warning",msg:"PROCESSING_MODULES"}},a=function(){e.status={type:"success",msg:"PROCESSING_MODULES_SUCCESS"}},f=function(t){e.status={type:"danger",msg:"PROCESSING_MODULES_ERROR",rawMsg:t.toString()}},l=function(){e.status={isWorking:!0,type:"warning",msg:"SEND_WAIT"}},c=function(){e.status={type:"danger",msg:"SEND_OPER_ERROR"}},h=function(){e.status={type:"success",msg:"SEND_SUCCESS"}},p=function(){e.status={type:"danger",msg:"SEND_ERROR"}},d=function(t){o.createCustomFunctionalityApis(t,"network-topology",null,"/operational/network-topology:network-topology/","Display Topology",function(){if(e.node&&e.node.getChildren("list","topology").length>0&&e.node.getChildren("list","topology")[0].actElemStructure){var t=[],n={};e.node.getChildren("list","topology")[0].actElemStructure.listElemBuildRequest(s,t),n={"network-topology":{topology:t}},e.topologyData=i.transformTopologyData(n),console.info("got topology data:",e.topologyData,"from",n)}}),o.createCustomFunctionalityApis(t,"opendaylight-inventory",null,"/config/opendaylight-inventory:nodes/node/{id}/flow-node-inventory:table/{id}/flow/{id}/","Verify operational flow",function(){var t=e.selApi.basePath+"/"+e.selSubApi.buildApiRequestString().replace("config","operational"),r={},i,s=function(e){var t="";return e.forEach(function(e){e.hasIdentifier()&&(t+=e.name+": "+e.identifierValue+"\n ")}),t};n({method:"GET",url:t}).success(function(t){t&&(i=s(e.selSubApi.pathArray),alert("Flow: \n\n"+i+"\n\n is in controller."))}).error(function(n,r){console.info("error sending request to",t,"got",r,"data",n),i=s(e.selSubApi.pathArray),alert("Flow: \n\n"+i+"\n\n isn't in controller.")})})};e.clearTopologyData=function(){e.topologyData={nodes:[],links:[]}};var v=function(){e.apis=[],e.allNodes=[],e.treeApis=[],u(),i.generateNodesToApis(function(t,n){e.apis=t,e.allNodes=n,console.info("got data",e.apis,n),i.generateApiTreeData(t,function(t){e.treeApis=t,console.info("tree api",e.treeApis)}),a(),d(e.apis)},function(e){f(e)})};e.dismissStatus=function(){e.status={}},e.setNode=function(){e.node=e.selSubApi.node},e.filterNodes=function(e){return!0},e.setApiNode=function(t){t.indexApi!==undefined&&t.indexSubApi!==undefined?(e.selApi=e.apis[t.indexApi],e.selSubApi=e.selApi.subApis[t.indexSubApi],e.apiType=e.selSubApi.pathArray[0].name==="operational"?"operational/":"",e.node=e.selSubApi.node,e.node.clear()):(e.selApi=null,e.selSubApi=null,e.node=null)},e.loadController=function(){e.flows=[],e.devices=[],e.apis=[],e.previewVisible=!1,e.previewValue="",v()},e.executeOperation=function(t){var r=e.selApi.basePath+"/"+e.selSubApi.buildApiRequestString(),i={};e.node.buildRequest(s,i),l(),n({method:t,url:r,data:i,headers:{"Content-Type":"application/yang.data+json"}}).success(function(t){if(t){var n=Object.getOwnPropertyNames(t);e.node.clear(),e.node.fill(n[0],t[n[0]])}h()}).error(function(e,t){p(),console.info("error sending request to",r,"got",t,"data",e)})},e.executeCustFunctionality=function(e){e.runCallback()},e.showPreview=function(){e.preview(),e.previewVisible=!0},e.hidePreview=function(){e.previewVisible=!1},e.preview=function(){e.node?e.previewValue=i.getRequestString(e.node):e.previewValue=""},e.__test={loadApis:v},e.loadController()}]),e.register.controller("leafCtrl",["$scope",function(e){e.changed=function(){e.preview()}}]),e.register.controller("containerCtrl",["$scope",function(e){e.toggleExpanded=function(){e.node.expanded=!e.node.expanded}}]),e.register.controller("caseCtrl",["$scope",function(e){e.empty=e.case.children.length===0||e.case.children.length===1&&e.case.children[0].children.length===0}]),e.register.controller("choiceCtrl",["$scope","constants",function(e,t){e.constants=t,e.toggleExpanded=function(){e.node.expanded=!e.node.expanded}}]),e.register.controller("rpcCtrl",["$scope",function(e){e.toggleExpanded=function(){e.node.expanded=!e.node.expanded}}]),e.register.controller("inputCtrl",["$scope",function(e){e.toggleExpanded=function(){e.node.expanded=!e.node.expanded}}]),e.register.controller("outputCtrl",["$scope",function(e){e.toggleExpanded=function(){e.node.expanded=!e.node.expanded}}]),e.register.controller("listCtrl",["$scope",function(e){e.actElement=null,e.showModal=!1,e.currentDisplayIndex=1,e.displayOffsets=[-1,0,1],e.addListElem=function(){e.node.addListElem()},e.removeListElem=function(t){e.node.removeListElem(t),e.preview(),e.currentDisplayIndex=Math.max(Math.min(e.currentDisplayIndex,e.node.listData.length-2),1)},e.toggleExpanded=function(){e.node.expanded=!e.node.expanded},e.shiftDisplayNext=function(){e.currentDisplayIndex=Math.min(e.currentDisplayIndex+3,e.node.listData.length-2)},e.shiftDisplayPrev=function(){e.currentDisplayIndex=Math.max(e.currentDisplayIndex-3,1)},e.showPrevButton=function(){return e.currentDisplayIndex>1},e.showNextButton=function(){return e.node.listData?e.currentDisplayIndex<e.node.listData.length-2:!1},e.showModalWin=function(){e.showModal=!e.showModal},e.getListName=function(t,n){var r=e.node.createListName(e.currentDisplayIndex+t);return r.length>33?{name:r.substring(0,30)+"...",tooltip:r}:{name:n?r||"["+(e.currentDisplayIndex+t)+"]":r,tooltip:""}}}]),e.register.controller("leafListCtrl",["$scope",function(e){e.addListElem=function(){e.node.addListElem()},e.removeListElem=function(t){e.node.removeListElem(t)},e.changed=function(){e.preview()},e.toggleExpanded=function(){e.node.expanded=!e.node.expanded}}])});