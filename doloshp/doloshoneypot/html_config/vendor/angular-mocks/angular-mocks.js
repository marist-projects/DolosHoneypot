/**
 * @license AngularJS v1.2.16
 * (c) 2010-2014 Google, Inc. http://angularjs.org
 * License: MIT
 */

(function(e,t,n){function i(e){var t;if(t=e.match(r)){var n=new Date(0),i=0,o=0;return t[9]&&(i=s(t[9]+t[10]),o=s(t[9]+t[11])),n.setUTCFullYear(s(t[1]),s(t[2])-1,s(t[3])),n.setUTCHours(s(t[4]||0)-i,s(t[5]||0)-o,s(t[6]||0),s(t[7]||0)),n}return e}function s(e){return parseInt(e,10)}function o(e,t,n){var r="";e<0&&(r="-",e=-e),e=""+e;while(e.length<t)e="0"+e;return n&&(e=e.substr(e.length-t)),r+e}function u(e,r,i){function h(e,n,r,i){return t.isFunction(e)?e:function(){return t.isNumber(e)?[e,n,r,i]:[200,e,n]}}function p(e,a,h,p,d,v,m){function w(e){return t.isString(e)||t.isFunction(e)||e instanceof RegExp?e:t.toJson(e)}function E(t){function r(){var n=t.response(e,a,h,d);g.$$respHeaders=n[2],p(c(n[0]),c(n[1]),g.getAllResponseHeaders(),c(n[3]||""))}function s(){for(var e=0,t=u.length;e<t;e++)if(u[e]===r){u.splice(e,1),p(-1,n,"");break}}return!i&&v&&v.then&&v.then(s),r}var g=new l,y=o[0],b=!1;if(y&&y.match(e,a)){if(!y.matchData(h))throw new Error("Expected "+y+" with different data\n"+"EXPECTED: "+w(y.data)+"\nGOT:      "+h);if(!y.matchHeaders(d))throw new Error("Expected "+y+" with different headers\n"+"EXPECTED: "+w(y.headers)+"\nGOT:      "+w(d));o.shift();if(y.response){u.push(E(y));return}b=!0}var S=-1,x;while(x=s[++S])if(x.match(e,a,h,d||{})){if(x.response)(i?i.defer:f)(E(x));else{if(!x.passThrough)throw new Error("No response defined !");r(e,a,h,p,d,v,m)}return}throw b?new Error("No response defined !"):new Error("Unexpected request: "+e+" "+a+"\n"+(y?"Expected "+y:"No more request expected"))}function d(e){t.forEach(["GET","DELETE","JSONP"],function(t){p[e+t]=function(r,i){return p[e](t,r,n,i)}}),t.forEach(["PUT","POST","PATCH"],function(t){p[e+t]=function(n,r,i){return p[e](t,n,r,i)}})}var s=[],o=[],u=[],f=t.bind(u,u.push),c=t.copy;return p.when=function(e,t,n,r){var o=new a(e,t,n,r),u={respond:function(e,t,n,r){o.response=h(e,t,n,r)}};return i&&(u.passThrough=function(){o.passThrough=!0}),s.push(o),u},d("when"),p.expect=function(e,t,n,r){var i=new a(e,t,n,r);return o.push(i),{respond:function(e,t,n,r){i.response=h(e,t,n,r)}}},d("expect"),p.flush=function(n){e.$digest();if(!u.length)throw new Error("No pending request to flush !");if(t.isDefined(n))while(n--){if(!u.length)throw new Error("No more pending request to flush !");u.shift()()}else while(u.length)u.shift()();p.verifyNoOutstandingExpectation()},p.verifyNoOutstandingExpectation=function(){e.$digest();if(o.length)throw new Error("Unsatisfied requests: "+o.join(", "))},p.verifyNoOutstandingRequest=function(){if(u.length)throw new Error("Unflushed requests: "+u.length)},p.resetExpectations=function(){o.length=0,u.length=0},p}function a(e,n,r,i){this.data=r,this.headers=i,this.match=function(n,r,i,s){return e!=n?!1:this.matchUrl(r)?t.isDefined(i)&&!this.matchData(i)?!1:t.isDefined(s)&&!this.matchHeaders(s)?!1:!0:!1},this.matchUrl=function(e){return n?t.isFunction(n.test)?n.test(e):n==e:!0},this.matchHeaders=function(e){return t.isUndefined(i)?!0:t.isFunction(i)?i(e):t.equals(i,e)},this.matchData=function(e){return t.isUndefined(r)?!0:r&&t.isFunction(r.test)?r.test(e):r&&t.isFunction(r)?r(e):r&&!t.isString(r)?t.equals(r,t.fromJson(e)):r==e},this.toString=function(){return e+" "+n}}function f(){return new l}function l(){l.$$lastInstance=this,this.open=function(e,t,n){this.$$method=e,this.$$url=t,this.$$async=n,this.$$reqHeaders={},this.$$respHeaders={}},this.send=function(e){this.$$data=e},this.setRequestHeader=function(e,t){this.$$reqHeaders[e]=t},this.getResponseHeader=function(e){var r=this.$$respHeaders[e];return r?r:(e=t.lowercase(e),r=this.$$respHeaders[e],r?r:(r=n,t.forEach(this.$$respHeaders,function(n,i){!r&&t.lowercase(i)==e&&(r=n)}),r))},this.getAllResponseHeaders=function(){var e=[];return t.forEach(this.$$respHeaders,function(t,n){e.push(n+": "+t)}),e.join("\n")},this.abort=t.noop}t.mock={},t.mock.$BrowserProvider=function(){this.$get=function(){return new t.mock.$Browser}},t.mock.$Browser=function(){var e=this;this.isMock=!0,e.$$url="http://server/",e.$$lastUrl=e.$$url,e.pollFns=[],e.$$completeOutstandingRequest=t.noop,e.$$incOutstandingRequestCount=t.noop,e.onUrlChange=function(t){return e.pollFns.push(function(){e.$$lastUrl!=e.$$url&&(e.$$lastUrl=e.$$url,t(e.$$url))}),t},e.cookieHash={},e.lastCookieHash={},e.deferredFns=[],e.deferredNextId=0,e.defer=function(t,n){return n=n||0,e.deferredFns.push({time:e.defer.now+n,fn:t,id:e.deferredNextId}),e.deferredFns.sort(function(e,t){return e.time-t.time}),e.deferredNextId++},e.defer.now=0,e.defer.cancel=function(r){var i;return t.forEach(e.deferredFns,function(e,t){e.id===r&&(i=t)}),i!==n?(e.deferredFns.splice(i,1),!0):!1},e.defer.flush=function(n){if(t.isDefined(n))e.defer.now+=n;else{if(!e.deferredFns.length)throw new Error("No deferred tasks to be flushed");e.defer.now=e.deferredFns[e.deferredFns.length-1].time}while(e.deferredFns.length&&e.deferredFns[0].time<=e.defer.now)e.deferredFns.shift().fn()},e.$$baseHref="",e.baseHref=function(){return this.$$baseHref}},t.mock.$Browser.prototype={poll:function(){t.forEach(this.pollFns,function(e){e()})},addPollFn:function(e){return this.pollFns.push(e),e},url:function(e,t){return e?(this.$$url=e,this):this.$$url},cookies:function(e,n){if(!e)return t.equals(this.cookieHash,this.lastCookieHash)||(this.lastCookieHash=t.copy(this.cookieHash),this.cookieHash=t.copy(this.cookieHash)),this.cookieHash;t.isUndefined(n)?delete this.cookieHash[e]:t.isString(n)&&n.length<=4096&&(this.cookieHash[e]=n)},notifyWhenNoOutstandingRequests:function(e){e()}},t.mock.$ExceptionHandlerProvider=function(){var e;this.mode=function(t){switch(t){case"rethrow":e=function(e){throw e};break;case"log":var n=[];e=function(e){arguments.length==1?n.push(e):n.push([].slice.call(arguments,0))},e.errors=n;break;default:throw new Error("Unknown mode '"+t+"', only 'log'/'rethrow' modes are allowed!")}},this.$get=function(){return e},this.mode("rethrow")},t.mock.$LogProvider=function(){function n(e,t,n){return e.concat(Array.prototype.slice.call(t,n))}var e=!0;this.debugEnabled=function(n){return t.isDefined(n)?(e=n,this):e},this.$get=function(){var r={log:function(){r.log.logs.push(n([],arguments,0))},warn:function(){r.warn.logs.push(n([],arguments,0))},info:function(){r.info.logs.push(n([],arguments,0))},error:function(){r.error.logs.push(n([],arguments,0))},debug:function(){e&&r.debug.logs.push(n([],arguments,0))}};return r.reset=function(){r.log.logs=[],r.info.logs=[],r.warn.logs=[],r.error.logs=[],r.debug.logs=[]},r.assertEmpty=function(){var e=[];t.forEach(["error","warn","info","log","debug"],function(n){t.forEach(r[n].logs,function(r){t.forEach(r,function(t){e.push("MOCK $log ("+n+"): "+String(t)+"\n"+(t.stack||""))})})});if(e.length)throw e.unshift("Expected $log to be empty! Either a message was logged unexpectedly, or an expected log message was not checked and removed:"),e.push(""),new Error(e.join("\n---------\n"))},r.reset(),r}},t.mock.$IntervalProvider=function(){this.$get=["$rootScope","$q",function(e,r){var i=[],s=0,o=0,u=function(u,a,f,l){function v(){c.notify(p++);if(f>0&&p>=f){var r;c.resolve(p),t.forEach(i,function(e,t){e.id===h.$$intervalId&&(r=t)}),r!==n&&i.splice(r,1)}d||e.$apply()}var c=r.defer(),h=c.promise,p=0,d=t.isDefined(l)&&!l;return f=t.isDefined(f)?f:0,h.then(null,null,u),h.$$intervalId=s,i.push({nextTime:o+a,delay:a,fn:v,id:s,deferred:c}),i.sort(function(e,t){return e.nextTime-t.nextTime}),s++,h};return u.cancel=function(e){if(!e)return!1;var r;return t.forEach(i,function(t,n){t.id===e.$$intervalId&&(r=n)}),r!==n?(i[r].deferred.reject("canceled"),i.splice(r,1),!0):!1},u.flush=function(e){o+=e;while(i.length&&i[0].nextTime<=o){var t=i[0];t.fn(),t.nextTime+=t.delay,i.sort(function(e,t){return e.nextTime-t.nextTime})}return e},u}]};var r=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?:\:?(\d\d)(?:\:?(\d\d)(?:\.(\d{3}))?)?)?(Z|([+-])(\d\d):?(\d\d)))?$/;t.mock.TzDate=function(e,n){var r=new Date(0);if(t.isString(n)){var s=n;r.origDate=i(n),n=r.origDate.getTime();if(isNaN(n))throw{name:"Illegal Argument",message:"Arg '"+s+"' passed into TzDate constructor is not a valid date string"}}else r.origDate=new Date(n);var u=(new Date(n)).getTimezoneOffset();r.offsetDiff=u*60*1e3-e*1e3*60*60,r.date=new Date(n+r.offsetDiff),r.getTime=function(){return r.date.getTime()-r.offsetDiff},r.toLocaleDateString=function(){return r.date.toLocaleDateString()},r.getFullYear=function(){return r.date.getFullYear()},r.getMonth=function(){return r.date.getMonth()},r.getDate=function(){return r.date.getDate()},r.getHours=function(){return r.date.getHours()},r.getMinutes=function(){return r.date.getMinutes()},r.getSeconds=function(){return r.date.getSeconds()},r.getMilliseconds=function(){return r.date.getMilliseconds()},r.getTimezoneOffset=function(){return e*60},r.getUTCFullYear=function(){return r.origDate.getUTCFullYear()},r.getUTCMonth=function(){return r.origDate.getUTCMonth()},r.getUTCDate=function(){return r.origDate.getUTCDate()},r.getUTCHours=function(){return r.origDate.getUTCHours()},r.getUTCMinutes=function(){return r.origDate.getUTCMinutes()},r.getUTCSeconds=function(){return r.origDate.getUTCSeconds()},r.getUTCMilliseconds=function(){return r.origDate.getUTCMilliseconds()},r.getDay=function(){return r.date.getDay()},r.toISOString&&(r.toISOString=function(){return o(r.origDate.getUTCFullYear(),4)+"-"+o(r.origDate.getUTCMonth()+1,2)+"-"+o(r.origDate.getUTCDate(),2)+"T"+o(r.origDate.getUTCHours(),2)+":"+o(r.origDate.getUTCMinutes(),2)+":"+o(r.origDate.getUTCSeconds(),2)+"."+o(r.origDate.getUTCMilliseconds(),3)+"Z"});var a=["getUTCDay","getYear","setDate","setFullYear","setHours","setMilliseconds","setMinutes","setMonth","setSeconds","setTime","setUTCDate","setUTCFullYear","setUTCHours","setUTCMilliseconds","setUTCMinutes","setUTCMonth","setUTCSeconds","setYear","toDateString","toGMTString","toJSON","toLocaleFormat","toLocaleString","toLocaleTimeString","toSource","toString","toTimeString","toUTCString","valueOf"];return t.forEach(a,function(e){r[e]=function(){throw new Error("Method '"+e+"' is not implemented in the TzDate mock")}}),r},t.mock.TzDate.prototype=Date.prototype,t.mock.animate=t.module("ngAnimateMock",["ng"]).config(["$provide",function(e){var n=[];e.value("$$animateReflow",function(e){var t=n.length;return n.push(e),function(){n.splice(t,1)}}),e.decorator("$animate",function(e,r){var i={queue:[],enabled:e.enabled,triggerCallbacks:function(){r.flush()},triggerReflow:function(){t.forEach(n,function(e){e()}),n=[]}};return t.forEach(["enter","leave","move","addClass","removeClass","setClass"],function(t){i[t]=function(){i.queue.push({event:t,element:arguments[0],args:arguments}),e[t].apply(e,arguments)}}),i})}]),t.mock.dump=function(e){function n(e){var i;return t.isElement(e)?(e=t.element(e),i=t.element("<div></div>"),t.forEach(e,function(e){i.append(t.element(e).clone())}),i=i.html()):t.isArray(e)?(i=[],t.forEach(e,function(e){i.push(n(e))}),i="[ "+i.join(", ")+" ]"):t.isObject(e)?t.isFunction(e.$eval)&&t.isFunction(e.$apply)?i=r(e):e instanceof Error?i=e.stack||""+e.name+": "+e.message:i=t.toJson(e,!0):i=String(e),i}function r(e,n){n=n||"  ";var i=[n+"Scope("+e.$id+"): {"];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&!s.match(/^(\$|this)/)&&i.push("  "+s+": "+t.toJson(e[s]));var o=e.$$childHead;while(o)i.push(r(o,n+"  ")),o=o.$$nextSibling;return i.push("}"),i.join("\n"+n)}return n(e)},t.mock.$HttpBackendProvider=function(){this.$get=["$rootScope",u]},t.mock.$TimeoutDecorator=function(e,n){function r(e){var n=[];return t.forEach(e,function(e){n.push("{id: "+e.id+", "+"time: "+e.time+"}")}),n.join(", ")}return e.flush=function(e){n.defer.flush(e)},e.verifyNoPendingTasks=function(){if(n.deferredFns.length)throw new Error("Deferred tasks to flush ("+n.deferredFns.length+"): "+r(n.deferredFns))},e},t.mock.$RAFDecorator=function(e){var t=[],n=function(e){var n=t.length;return t.push(e),function(){t.splice(n,1)}};return n.supported=e.supported,n.flush=function(){if(t.length===0)throw new Error("No rAF callbacks present");var e=t.length;for(var n=0;n<e;n++)t[n]();t=[]},n},t.mock.$AsyncCallbackDecorator=function(e){var n=[],r=function(e){n.push(e)};return r.flush=function(){t.forEach(n,function(e){e()}),n=[]},r},t.mock.$RootElementProvider=function(){this.$get=function(){return t.element("<div ng-app></div>")}},t.module("ngMock",["ng"]).provider({$browser:t.mock.$BrowserProvider,$exceptionHandler:t.mock.$ExceptionHandlerProvider,$log:t.mock.$LogProvider,$interval:t.mock.$IntervalProvider,$httpBackend:t.mock.$HttpBackendProvider,$rootElement:t.mock.$RootElementProvider}).config(["$provide",function(e){e.decorator("$timeout",t.mock.$TimeoutDecorator),e.decorator("$$rAF",t.mock.$RAFDecorator),e.decorator("$$asyncCallback",t.mock.$AsyncCallbackDecorator)}]),t.module("ngMockE2E",["ng"]).config(["$provide",function(e){e.decorator("$httpBackend",t.mock.e2e.$httpBackendDecorator)}]),t.mock.e2e={},t.mock.e2e.$httpBackendDecorator=["$rootScope","$delegate","$browser",u],t.mock.clearDataCache=function(){var e,n=t.element.cache;for(e in n)if(Object.prototype.hasOwnProperty.call(n,e)){var r=n[e].handle;r&&t.element(r.elem).off(),delete n[e]}};if(e.jasmine||e.mocha){var c=null,h=function(){return!!c};beforeEach(function(){c=this}),afterEach(function(){var e=c.$injector;c.$injector=null,c.$modules=null,c=null,e&&(e.get("$rootElement").off(),e.get("$browser").pollFns.length=0),t.mock.clearDataCache(),t.forEach(t.element.fragments,function(e,n){delete t.element.fragments[n]}),l.$$lastInstance=null,t.forEach(t.callbacks,function(e,n){delete t.callbacks[n]}),t.callbacks.counter=0}),e.module=t.mock.module=function(){function n(){if(c.$injector)throw new Error("Injector already created, can not register a module!");var n=c.$modules||(c.$modules=[]);t.forEach(e,function(e){t.isObject(e)&&!t.isArray(e)?n.push(function(n){t.forEach(e,function(e,t){n.value(t,e)})}):n.push(e)})}var e=Array.prototype.slice.call(arguments,0);return h()?n():n};var p=function(e,t){this.message=e.message,this.name=e.name,e.line&&(this.line=e.line),e.sourceId&&(this.sourceId=e.sourceId),e.stack&&t&&(this.stack=e.stack+"\n"+t.stack),e.stackArray&&(this.stackArray=e.stackArray)};p.prototype.toString=Error.prototype.toString,e.inject=t.mock.inject=function(){function r(){var r=c.$modules||[];r.unshift("ngMock"),r.unshift("ng");var i=c.$injector;i||(i=c.$injector=t.injector(r));for(var s=0,o=e.length;s<o;s++)try{i.invoke(e[s]||t.noop,this)}catch(u){throw u.stack&&n?new p(u,n):u}finally{n=null}}var e=Array.prototype.slice.call(arguments,0),n=new Error("Declaration Location");return h()?r.call(c):r}}})(window,window.angular);