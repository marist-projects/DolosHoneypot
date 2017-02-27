define(["common/general/common.navigation.module"],function(e){e.directive("isActive",["$compile",function(e){return{restrict:"A",replace:!1,scope:{state:"@",stateParams:"=",stateActive:"@",url:"@"},controller:["$scope","$location","$state",function(e,t,n){e.$state=n,e.$location=t}],compile:function(){return function(t,n,r,i){var s;if(t.state){var o=t.stateActive||t.$state.current.name.split(".")[0];s="active: $state.includes('"+t.state+"')"}else t.url?s="active: url === $location.path()":s="false";n.attr("ng-class","{ "+s+" }"),n.removeAttr("is-active"),e(n)(t)}}}}]),e.directive("brdAnchor",["$compile","$rootScope",function(e,t){return{restrict:"E",replace:!0,scope:{label:"@",state:"@",stateParams:"=",url:"@"},template:'<a href="" ng-click="doClick()">{{label}}</a>',controller:["$scope","$rootScope","$location","$state",function(e,t,n,r){e.$location=n,e.$state=r,e.doClick=function(){var i={label:e.label,state:e.state,stateParams:e.stateParams,url:e.url};t.$broadcast("event:navigation",i);if(!e.url&&e.state){var s=e.stateParams||{};r.transitionTo(e.state,s,{location:!0,inherit:!0,relative:r.$current,notify:!0})}else e.url&&n.path(e.url)}}]}}]),e.directive("buttonCancel",function(){return{restrict:"E",replace:!0,scope:{btnLabel:"@label",btnSize:"@size",btnGlyph:"@glyph",cancelFunc:"=function",state:"@",stateParams:"="},template:'<button class="btn btn-{{size}} btn-danger" ng-click="doCancel()"><i class="icon-remove-sign"></i> {{label}}</button>',controller:["$scope","$state",function(e,t){e.label=e.btnLabel||"Cancel",e.size=e.btnSize||"md",e.glyph=e.btnGlyph||"remove-circle",e.doCancel=function(){if(angular.isFunction(e.cancelFunc)){e.cancelFunc();return}var n=e.stateParams||{};t.transitionTo(e.state,n,{location:!0,inherit:!0,relative:t.$current,notify:!0})}}]}}),e.directive("buttonSubmit",function(){return{restrict:"E",replace:!0,scope:{btnLabel:"@label",btnSize:"@size",btnGlyph:"@glyph",submitFunc:"=function",form:"=form",validator:"="},template:'<button class="btn btn-{{size}} btn-orange" ng-click="doSubmit()" ng-disabled="submitDisabled"><i class="icon-ok-sign"></i> {{label}}</button>',controller:["$scope",function(e){e.label=e.btnLabel||"Submit",e.size=e.btnSize||"md",e.glyph=e.btnGlyph||"ok-circle",e.submitDisabled=!0,e.doSubmit=function(){e.submitFunc&&e.submitFunc()},e.toggle=function(t){e.submitDisabled=t?!1:!0},!e.validator&&e.form&&e.$watch("form.$valid",function(t,n){e.toggle(t)}),e.validator&&angular.isFunction(e.validator)&&e.$watch(function(){return e.validator()},function(t,n){e.toggle(t)}),!e.form&&!e.validator&&(e.submitDisabled=!1)}]}}),e.directive("showSelected",function(){return{restrict:"E",replace:!0,scope:{data:"="},template:"<span>Selected: {{data.length}}</span>"}}),e.directive("ctrlReload",function(){return{replace:!0,restrict:"E",scope:{svc:"=service"},template:'<button class="btn btn-primary btn-xs" ng-click="svc.getAll()"><i class="icon-refresh"></i></button>',link:function(e,t,n,r){e.$on("evt:refresh",function(){e.svc.getAll()})}}}),e.directive("ctrlDelete",["$rootScope",function(e){return{replace:!0,restrict:"E",template:'<button class="btn btn-danger btn-xs" ng-click="deleteSelected()" ng-disabled="gridOptions.selectedItems.length == 0"><i class="icon-remove"></i></button>',link:function(t,n,r,i){var s=0,o=t.gridOptions.selectedItems;t.deleteSelected=function(){angular.forEach(o,function(n,r){t.svc.delete(n).then(function(){s++,s==o.length&&e.$broadcast("evt:refresh")})})}}}}])});