define(["angularAMD"],function(e){var t=angular.module("app.common.finishRender",[]);return t.config(["$compileProvider",function(e){t.register={directive:e.register}}]),t.directive("onFinishRender",["$timeout",function(e){return{restrict:"A",link:function(t,n,r){t.$last===!0&&e(function(){t.$emit("ngRepeatFinished")})}}}]),t});