(function(e){function n(e){var t="01",n={};for(var r in e){var i=parseInt(t,2);n[e[r]]={bitMask:i,title:e[r]},t=(i<<1).toString(2)}return n}function r(e,t){var n={},r="";for(var i in e)if(typeof e[i]=="string")if(e[i]=="*"){r="";for(var s in t)r+="1";n[i]={bitMask:parseInt(r,2),title:e[i]}}else console.log("Access Control Error: Could not parse '"+e[i]+"' as access definition for level '"+i+"'");else{r=0;for(var o in e[i])t.hasOwnProperty(e[i][o])?r|=t[e[i][o]].bitMask:console.log("Access Control Error: Could not find role '"+e[i][o]+"' in registered roles while building access for '"+i+"'");n[i]={bitMask:r,title:e[i][o]}}return n}var t={roles:["public","user","admin"],accessLevels:{"public":"*",anon:["public"],user:["user","admin"],admin:["admin"]}};e.userRoles=n(t.roles),e.accessLevels=r(t.accessLevels,e.userRoles)})(typeof exports=="undefined"?this.routingConfig={}:exports);