/*
 * Copyright (c) 2014 Inocybe Technologies, and others.  All rights reserved.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v1.0 which accompanies this distribution,
 * and is available at http://www.eclipse.org/legal/epl-v10.html
 */

define(["common/authentification/auth.module"],function(e){e.factory("Auth",["$http","$window","$cookieStore","Base64","ENV",function(e,t,n,r,i){var s={};return s.setBasic=function(e,n){t.sessionStorage.odlUser=e,t.sessionStorage.odlPass=n},s.unsetBasic=function(){e.defaults.headers.common.Authorization!==null&&delete e.defaults.headers.common.Authorization,delete t.sessionStorage.odlUser,delete t.sessionStorage.odlPass},s.getUser=function(){var e=t.sessionStorage.odlUser||null;return e},s.authorize=function(e,t){return t===undefined&&(t=currentUser.role),e.bitMask&t.bitMask},s.isAuthed=function(){var e=s.getUser()?!0:!1;return e},s.isLoggedIn=function(e){return e===undefined&&(e=currentUser),e.role.title==userRoles.user.title||e.role.title==userRoles.admin.title},s.login=function(t,n,r,o){s.setBasic(t,n),e.get(i.getBaseURL("MD_SAL")+"/restconf/operational/network-topology:network-topology").success(function(e,t,n,i){r(e)}).error(function(e){s.unsetBasic(),o(e)})},s.logout=function(e){s.unsetBasic(),e()},s}]),e.factory("Base64",function(){var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";return{encode:function(t){var n="",r,i,s="",o,u,a,f="",l=0;do r=t.charCodeAt(l++),i=t.charCodeAt(l++),s=t.charCodeAt(l++),o=r>>2,u=(r&3)<<4|i>>4,a=(i&15)<<2|s>>6,f=s&63,isNaN(i)?a=f=64:isNaN(s)&&(f=64),n=n+e.charAt(o)+e.charAt(u)+e.charAt(a)+e.charAt(f),r=i=s="",o=u=a=f="";while(l<t.length);return n},decode:function(t){var n="",r,i,s="",o,u,a,f="",l=0,c=/[^A-Za-z0-9\+\/\=]/g;c.exec(t)&&alert("There were invalid base64 characters in the input text.\nValid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\nExpect errors in decoding."),t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");do o=e.indexOf(t.charAt(l++)),u=e.indexOf(t.charAt(l++)),a=e.indexOf(t.charAt(l++)),f=e.indexOf(t.charAt(l++)),r=o<<2|u>>4,i=(u&15)<<4|a>>2,s=(a&3)<<6|f,n+=String.fromCharCode(r),a!=64&&(n+=String.fromCharCode(i)),f!=64&&(n+=String.fromCharCode(s)),r=i=s="",o=u=a=f="";while(l<t.length);return n}}}),e.factory("NbInterceptor",["$q","$window","Base64",function(e,t,n){return{request:function(e){if(e.url.indexOf("restconf")!=-1||e.url.indexOf("controller/nb/v2")!=-1){e.headers=e.headers||{};if(t.sessionStorage.odlUser&&t.sessionStorage.odlPass){var r=n.encode(t.sessionStorage.odlUser+":"+t.sessionStorage.odlPass);e.headers.Authorization="Basic "+r}}return e},response:function(t){return t||e.when(t)}}}])});