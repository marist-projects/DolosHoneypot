define(["angularAMD","app/routingConfig","app/core/core.services","Restangular","common/config/env.module"],function(e){var t=angular.module("app.topology",["ui.router.state","app.core","restangular","config"]);return t.config(["$stateProvider","$controllerProvider","$compileProvider","$provide","$translateProvider","NavHelperProvider",function(e,n,r,i,s,o){t.register={controller:n.register,directive:r.directive,service:i.service,factory:i.factory},s.useStaticFilesLoader({prefix:"assets/data/locale-",suffix:".json"}),o.addControllerUrl("app/topology/topology.controller"),o.addToMenu("topology",{link:"#/topology",title:"TOPOLOGY",active:"main.topology",icon:"icon-link",page:{title:"TOPOLOGY",description:"TOPOLOGY"}});var u=routingConfig.accessLevels;e.state("main.topology",{url:"topology",access:u.public,views:{content:{templateUrl:"src/app/topology/topology.tpl.html",controller:"TopologyCtrl"}}})}]),t});