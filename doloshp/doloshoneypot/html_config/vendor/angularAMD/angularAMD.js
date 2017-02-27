/*
 angularAMD v0.1.1
 (c) 2013-2014 Marcos Lin https://github.com/marcoslin/
 License: MIT
*/

define([],function(){function u(){if(typeof e=="undefined")throw Error("angularAMD not initialized.  Need to call angularAMD.bootstrap(app) first.")}function a(){var r={};if(t)throw Error("setAlternateAngular can only be called once.");t={},u(),e.extend(t,e),t.module=function(t,i){if(typeof i=="undefined")return r.hasOwnProperty(t)?undefined:e.module(t);var s=e.module.apply(null,arguments),o={name:t,module:s};return n.push(o),r[t]=s,s},window.angular=t}function f(){}var e,t,n=[],r,i,s={},o;return f.prototype.route=function(e){var t;e.hasOwnProperty("controllerUrl")?(t=e.controllerUrl,delete e.controllerUrl):typeof e.controller=="string"&&(t=e.controller);if(t){var n=e.resolve||{};n.__load=["$q","$rootScope",function(e,n){var r=e.defer();return require([t],function(){r.resolve(),n.$apply()}),r.promise}],e.resolve=n}return e},f.prototype.appname=function(){return u(),r},f.prototype.processQueue=function(){u();if(typeof t=="undefined")throw Error("Alternate angular not set.  Make sure that `enable_ngload` option has been set when calling angularAMD.bootstrap");while(n.length){var r=n.shift(),a=r.module._invokeQueue,f;for(f=0;f<a.length;f+=1){var l=a[f],c=l[0],h=l[1],p=l[2];if(s.hasOwnProperty(c)){var d;c==="$injector"&&h==="invoke"?d=o:d=s[c],d[h].apply(null,p)}else console.error("'"+c+"' not found!!!")}r.module._runBlocks&&angular.forEach(r.module._runBlocks,function(t){i.invoke(t)}),e.module(r.name,[],e.noop)}},f.prototype.getCachedProvider=function(n){return u(),n==="__orig_angular"?e:n==="__alt_angular"?t:s[n]},f.prototype.inject=function(){return u(),i.invoke.apply(null,arguments)},f.prototype.reset=function(){if(typeof e=="undefined")return;window.angular=e,t=undefined,n=[],r=undefined,i=undefined,s={},e=undefined},f.prototype.bootstrap=function(t,n,u){if(typeof e!="undefined")throw Error("bootstrap can only be called once.");e=angular,typeof n=="undefined"&&(n=!0),u=u||document.documentElement,t.config(["$controllerProvider","$compileProvider","$filterProvider","$animateProvider","$provide","$injector",function(e,n,r,i,u,a){o=a,s={$controllerProvider:e,$compileProvider:n,$filterProvider:r,$animateProvider:i,$provide:u},t.register={controller:e.register,directive:n.directive,filter:r.register,factory:u.factory,service:u.service,constant:u.constant,value:u.value,animation:angular.bind(i,i.register)}}]),t.run(["$injector",function(e){i=e,s.$injector=i}]),r=t.name,e.element(document).ready(function(){e.bootstrap(u,[r])}),n&&a()},new f});