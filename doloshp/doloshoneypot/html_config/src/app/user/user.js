angular.module("console.user",[]).config(["$stateProvider",function(e){var t=routingConfig.accessLevels;e.state("user",{url:"/user","abstract":!0,templateUrl:"user/root.tpl.html"}),e.state("user.index",{url:"/index",access:t.public,views:{"":{templateUrl:"user/index.tpl.html",controller:["$scope","UserSvc",function(e,t){e.svc=t,e.svc.getUsers(null).then(function(e){console.log(e),alert("DATA!!")}),$("table").footable().on("click",".row-delete",function(e){})}]}}}),e.state("user.create",{url:"/create",access:t.public,views:{"":{templateUrl:"user/create.tpl.html",controller:["$scope","ContainerSvc","SwitchSvc","$state",function(e,t,n,r){}]}}})}]);