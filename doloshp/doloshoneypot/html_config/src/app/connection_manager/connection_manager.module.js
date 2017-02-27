define(["angularAMD","app/routingConfig","app/core/core.services","Restangular","common/config/env.module"],function(e){var t=angular.module("app.connection_manager",["app.core","ui.router.state","restangular","config"]);return t.config(["$stateProvider","$controllerProvider","$provide","$translateProvider","NavHelperProvider",function(e,n,r,i,s){t.register={controller:n.register,factory:r.factory,service:r.service},i.useStaticFilesLoader({prefix:"assets/data/locale-",suffix:".json"}),s.addControllerUrl("app/connection_manager/connection_manager.controller"),s.addToMenu("connection_manager",{link:"#/connection_manager/index",active:"main.connection_manager.*",title:"CONNECTION_MANAGER",icon:"icon-bolt",page:{title:"CONNECTION_MANAGER",description:"CONNECTION_MANAGER"}});var o=routingConfig.accessLevels;e.state("main.connection_manager",{"abstract":!0,url:"connection_manager",views:{content:{templateUrl:"src/app/connection_manager/root.tpl.html",controller:"rootConnectionManagerCtrl"}}}),e.state("main.connection_manager.index",{url:"/index",access:o.public,views:{"":{templateUrl:"src/app/connection_manager/index.tpl.html",controller:"ConnectionManagerCtrl"}}}),e.state("main.connection_manager.discover",{url:"/discover",access:o.public,views:{"":{templateUrl:"src/app/connection_manager/discover.tpl.html",controller:"ConnectionManagerDiscoveryCtrl"}}})}]),t});