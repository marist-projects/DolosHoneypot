define(["angularAMD"],function(){var e=angular.module("app.core",[]);return e.config(["$controllerProvider","$compileProvider","$provide",function(t,n,r){e.register={controller:t.register,directive:n.directive,factory:r.factory,service:r.service}}]),e});