define(["common/general/common.general.module"],function(e){e.directive("stateIcon",function(){return{restrict:"E",replace:!0,scope:{stateValue:"@value"},template:'<span class="glyphicon glyphicon-{{stateIcon}}-sign"></span>',controller:["$scope",function(e){var t=e.stateValue,n={1:"ok",0:"exclamation"},r={"true":1,"false":0};_.isString(t)&&!t.match("^[0-9]$")&&(t=r[t]),e.stateIcon=n[t]}]}}),e.directive("portState",function(){return{restrict:"E",replace:!0,scope:{stateValue:"@value"},template:'<span ng-style="{color: stateColor}">{{stateString}}</span>',controller:["$scope",function(e){var t={0:"DOWN",1:"UP"},n={0:"red",1:"green"};e.stateString=t[e.stateValue],e.stateColor=n[e.stateValue]}]}})});