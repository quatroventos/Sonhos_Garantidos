/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.3",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b="length"in a&&a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;

return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function aa(){return!0}function ba(){return!1}function ca(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ca()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ca()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?aa:ba):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:ba,isPropagationStopped:ba,isImmediatePropagationStopped:ba,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=aa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=aa,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=aa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=ba;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=ba),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function da(a){var b=ea.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var ea="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fa=/ jQuery\d+="(?:null|\d+)"/g,ga=new RegExp("<(?:"+ea+")[\\s/>]","i"),ha=/^\s+/,ia=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ja=/<([\w:]+)/,ka=/<tbody/i,la=/<|&#?\w+;/,ma=/<(?:script|style|link)/i,na=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^$|\/(?:java|ecma)script/i,pa=/^true\/(.*)/,qa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ra={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sa=da(y),ta=sa.appendChild(y.createElement("div"));ra.optgroup=ra.option,ra.tbody=ra.tfoot=ra.colgroup=ra.caption=ra.thead,ra.th=ra.td;function ua(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ua(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function va(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wa(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xa(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function ya(a){var b=pa.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function za(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Aa(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Ba(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xa(b).text=a.text,ya(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!ga.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(ta.innerHTML=a.outerHTML,ta.removeChild(f=ta.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ua(f),h=ua(a),g=0;null!=(e=h[g]);++g)d[g]&&Ba(e,d[g]);if(b)if(c)for(h=h||ua(a),d=d||ua(f),g=0;null!=(e=h[g]);g++)Aa(e,d[g]);else Aa(a,f);return d=ua(f,"script"),d.length>0&&za(d,!i&&ua(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=da(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(la.test(f)){h=h||o.appendChild(b.createElement("div")),i=(ja.exec(f)||["",""])[1].toLowerCase(),l=ra[i]||ra._default,h.innerHTML=l[1]+f.replace(ia,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&ha.test(f)&&p.push(b.createTextNode(ha.exec(f)[0])),!k.tbody){f="table"!==i||ka.test(f)?"<table>"!==l[1]||ka.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ua(p,"input"),va),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ua(o.appendChild(f),"script"),g&&za(h),c)){e=0;while(f=h[e++])oa.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ua(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&za(ua(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ua(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fa,""):void 0;if(!("string"!=typeof a||ma.test(a)||!k.htmlSerialize&&ga.test(a)||!k.leadingWhitespace&&ha.test(a)||ra[(ja.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ia,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ua(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ua(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&na.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ua(i,"script"),xa),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ua(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,ya),j=0;f>j;j++)d=g[j],oa.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qa,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Ca,Da={};function Ea(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fa(a){var b=y,c=Da[a];return c||(c=Ea(a,b),"none"!==c&&c||(Ca=(Ca||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ca[0].contentWindow||Ca[0].contentDocument).document,b.write(),b.close(),c=Ea(a,b),Ca.detach()),Da[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Ga=/^margin/,Ha=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ia,Ja,Ka=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ia=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Ha.test(g)&&Ga.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ia=function(a){return a.currentStyle},Ja=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ia(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Ha.test(g)&&!Ka.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function La(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight),b.removeChild(i)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Ma=/alpha\([^)]*\)/i,Na=/opacity\s*=\s*([^)]*)/,Oa=/^(none|table(?!-c[ea]).+)/,Pa=new RegExp("^("+S+")(.*)$","i"),Qa=new RegExp("^([+-])=("+S+")","i"),Ra={position:"absolute",visibility:"hidden",display:"block"},Sa={letterSpacing:"0",fontWeight:"400"},Ta=["Webkit","O","Moz","ms"];function Ua(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Ta.length;while(e--)if(b=Ta[e]+c,b in a)return b;return d}function Va(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fa(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wa(a,b,c){var d=Pa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Ya(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ia(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Ja(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ha.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xa(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Ja(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ua(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qa.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ua(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Ja(a,b,d)),"normal"===f&&b in Sa&&(f=Sa[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Oa.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Ra,function(){return Ya(a,b,d)}):Ya(a,b,d):void 0},set:function(a,c,d){var e=d&&Ia(a);return Wa(a,c,d?Xa(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Na.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Ma,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Ma.test(f)?f.replace(Ma,e):f+" "+e)}}),m.cssHooks.marginRight=La(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Ja,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Ga.test(a)||(m.cssHooks[a+b].set=Wa)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ia(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Va(this,!0)},hide:function(){return Va(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Za(a,b,c,d,e){
return new Za.prototype.init(a,b,c,d,e)}m.Tween=Za,Za.prototype={constructor:Za,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")},cur:function(){var a=Za.propHooks[this.prop];return a&&a.get?a.get(this):Za.propHooks._default.get(this)},run:function(a){var b,c=Za.propHooks[this.prop];return this.options.duration?this.pos=b=m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Za.propHooks._default.set(this),this}},Za.prototype.init.prototype=Za.prototype,Za.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Za.propHooks.scrollTop=Za.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Za.prototype.init,m.fx.step={};var $a,_a,ab=/^(?:toggle|show|hide)$/,bb=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cb=/queueHooks$/,db=[ib],eb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bb.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bb.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fb(){return setTimeout(function(){$a=void 0}),$a=m.now()}function gb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hb(a,b,c){for(var d,e=(eb[b]||[]).concat(eb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fa(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fa(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ab.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fa(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hb(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=db.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$a||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$a||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);g>f;f++)if(d=db[f].call(j,a,k,j.opts))return d;return m.map(k,hb,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kb,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],eb[c]=eb[c]||[],eb[c].unshift(b)},prefilter:function(a,b){b?db.unshift(a):db.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kb(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),m.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($a=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$a=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_a||(_a=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_a),_a=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lb=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lb,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mb,nb,ob=m.expr.attrHandle,pb=/^(?:checked|selected)$/i,qb=k.getSetAttribute,rb=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nb:mb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rb&&qb||!pb.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qb?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nb={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rb&&qb||!pb.test(c)?a.setAttribute(!qb&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=ob[b]||m.find.attr;ob[b]=rb&&qb||!pb.test(b)?function(a,b,d){var e,f;return d||(f=ob[b],ob[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,ob[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rb&&qb||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mb&&mb.set(a,b,c)}}),qb||(mb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},ob.id=ob.name=ob.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mb.set},m.attrHooks.contenteditable={set:function(a,b,c){mb.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sb=/^(?:input|select|textarea|button|object)$/i,tb=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sb.test(a.nodeName)||tb.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var ub=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ub," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ub," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vb=m.now(),wb=/\?/,xb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yb,zb,Ab=/#.*$/,Bb=/([?&])_=[^&]*/,Cb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Db=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Eb=/^(?:GET|HEAD)$/,Fb=/^\/\//,Gb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hb={},Ib={},Jb="*/".concat("*");try{zb=location.href}catch(Kb){zb=y.createElement("a"),zb.href="",zb=zb.href}yb=Gb.exec(zb.toLowerCase())||[];function Lb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mb(a,b,c,d){var e={},f=a===Ib;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nb(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Ob(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zb,type:"GET",isLocal:Db.test(yb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nb(Nb(a,m.ajaxSettings),b):Nb(m.ajaxSettings,a)},ajaxPrefilter:Lb(Hb),ajaxTransport:Lb(Ib),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cb.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zb)+"").replace(Ab,"").replace(Fb,yb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gb.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yb[1]&&c[2]===yb[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yb[3]||("http:"===yb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mb(Hb,k,b,v),2===t)return v;h=m.event&&k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Eb.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wb.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bb.test(e)?e.replace(Bb,"$1_="+vb++):e+(wb.test(e)?"&":"?")+"_="+vb++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jb+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mb(Ib,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Ob(k,v,c)),u=Pb(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qb=/%20/g,Rb=/\[\]$/,Sb=/\r?\n/g,Tb=/^(?:submit|button|image|reset|file)$/i,Ub=/^(?:input|select|textarea|keygen)/i;function Vb(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rb.test(a)?d(a,e):Vb(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vb(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vb(c,a[c],b,e);return d.join("&").replace(Qb,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Ub.test(this.nodeName)&&!Tb.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sb,"\r\n")}}):{name:b.name,value:c.replace(Sb,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zb()||$b()}:Zb;var Wb=0,Xb={},Yb=m.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Xb)Xb[a](void 0,!0)}),k.cors=!!Yb&&"withCredentials"in Yb,Yb=k.ajax=!!Yb,Yb&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xb[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xb[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zb(){try{return new a.XMLHttpRequest}catch(b){}}function $b(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _b=[],ac=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_b.pop()||m.expando+"_"+vb++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ac.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ac.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ac,"$1"+e):b.jsonp!==!1&&(b.url+=(wb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_b.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bc=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bc)return bc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cc=a.document.documentElement;function dc(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cc;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cc})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=La(k.pixelPosition,function(a,c){return c?(c=Ja(a,b),Ha.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ec=a.jQuery,fc=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fc),b&&a.jQuery===m&&(a.jQuery=ec),m},typeof b===K&&(a.jQuery=a.$=m),m});
/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 */
/*global ActiveXObject */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e("undefined"!=typeof jQuery?jQuery:window.Zepto)}(function(e){"use strict";function t(t){var r=t.data;t.isDefaultPrevented()||(t.preventDefault(),e(t.target).ajaxSubmit(r))}function r(t){var r=t.target,a=e(r);if(!a.is("[type=submit],[type=image]")){var n=a.closest("[type=submit]");if(0===n.length)return;r=n[0]}var i=this;if(i.clk=r,"image"==r.type)if(void 0!==t.offsetX)i.clk_x=t.offsetX,i.clk_y=t.offsetY;else if("function"==typeof e.fn.offset){var o=a.offset();i.clk_x=t.pageX-o.left,i.clk_y=t.pageY-o.top}else i.clk_x=t.pageX-r.offsetLeft,i.clk_y=t.pageY-r.offsetTop;setTimeout(function(){i.clk=i.clk_x=i.clk_y=null},100)}function a(){if(e.fn.ajaxSubmit.debug){var t="[jquery.form] "+Array.prototype.join.call(arguments,"");window.console&&window.console.log?window.console.log(t):window.opera&&window.opera.postError&&window.opera.postError(t)}}var n={};n.fileapi=void 0!==e("<input type='file'/>").get(0).files,n.formdata=void 0!==window.FormData;var i=!!e.fn.prop;e.fn.attr2=function(){if(!i)return this.attr.apply(this,arguments);var e=this.prop.apply(this,arguments);return e&&e.jquery||"string"==typeof e?e:this.attr.apply(this,arguments)},e.fn.ajaxSubmit=function(t){function r(r){var a,n,i=e.param(r,t.traditional).split("&"),o=i.length,s=[];for(a=0;a<o;a++)i[a]=i[a].replace(/\+/g," "),n=i[a].split("="),s.push([decodeURIComponent(n[0]),decodeURIComponent(n[1])]);return s}function o(r){function n(e){var t=null;try{e.contentWindow&&(t=e.contentWindow.document)}catch(e){a("cannot get iframe.contentWindow document: "+e)}if(t)return t;try{t=e.contentDocument?e.contentDocument:e.document}catch(r){a("cannot get iframe.contentDocument: "+r),t=e.document}return t}function o(){function t(){try{var e=n(g).readyState;a("state = "+e),e&&"uninitialized"==e.toLowerCase()&&setTimeout(t,50)}catch(e){a("Server abort: ",e," (",e.name,")"),u(k),j&&clearTimeout(j),j=void 0}}var r=l.attr2("target"),i=l.attr2("action"),o=l.attr("enctype")||l.attr("encoding")||"multipart/form-data";w.setAttribute("target",h),s&&!/post/i.test(s)||w.setAttribute("method","POST"),i!=m.url&&w.setAttribute("action",m.url),m.skipEncodingOverride||s&&!/post/i.test(s)||l.attr({encoding:"multipart/form-data",enctype:"multipart/form-data"}),m.timeout&&(j=setTimeout(function(){T=!0,u(D)},m.timeout));var c=[];try{if(m.extraData)for(var f in m.extraData)m.extraData.hasOwnProperty(f)&&(e.isPlainObject(m.extraData[f])&&m.extraData[f].hasOwnProperty("name")&&m.extraData[f].hasOwnProperty("value")?c.push(e('<input type="hidden" name="'+m.extraData[f].name+'">').val(m.extraData[f].value).appendTo(w)[0]):c.push(e('<input type="hidden" name="'+f+'">').val(m.extraData[f]).appendTo(w)[0]));m.iframeTarget||v.appendTo("body"),g.attachEvent?g.attachEvent("onload",u):g.addEventListener("load",u,!1),setTimeout(t,15);try{w.submit()}catch(e){document.createElement("form").submit.apply(w)}}finally{w.setAttribute("action",i),w.setAttribute("enctype",o),r?w.setAttribute("target",r):l.removeAttr("target"),e(c).remove()}}function u(t){if(!x.aborted&&!F){if((M=n(g))||(a("cannot access response document"),t=k),t===D&&x)return x.abort("timeout"),void S.reject(x,"timeout");if(t==k&&x)return x.abort("server abort"),void S.reject(x,"error","server abort");if(M&&M.location.href!=m.iframeSrc||T){g.detachEvent?g.detachEvent("onload",u):g.removeEventListener("load",u,!1);var r,i="success";try{if(T)throw"timeout";var o="xml"==m.dataType||M.XMLDocument||e.isXMLDoc(M);if(a("isXml="+o),!o&&window.opera&&(null===M.body||!M.body.innerHTML)&&--O)return a("requeing onLoad callback, DOM not available"),void setTimeout(u,250);var s=M.body?M.body:M.documentElement;x.responseText=s?s.innerHTML:null,x.responseXML=M.XMLDocument?M.XMLDocument:M,o&&(m.dataType="xml"),x.getResponseHeader=function(e){return{"content-type":m.dataType}[e.toLowerCase()]},s&&(x.status=Number(s.getAttribute("status"))||x.status,x.statusText=s.getAttribute("statusText")||x.statusText);var c=(m.dataType||"").toLowerCase(),l=/(json|script|text)/.test(c);if(l||m.textarea){var f=M.getElementsByTagName("textarea")[0];if(f)x.responseText=f.value,x.status=Number(f.getAttribute("status"))||x.status,x.statusText=f.getAttribute("statusText")||x.statusText;else if(l){var p=M.getElementsByTagName("pre")[0],h=M.getElementsByTagName("body")[0];p?x.responseText=p.textContent?p.textContent:p.innerText:h&&(x.responseText=h.textContent?h.textContent:h.innerText)}}else"xml"==c&&!x.responseXML&&x.responseText&&(x.responseXML=X(x.responseText));try{E=_(x,c,m)}catch(e){i="parsererror",x.error=r=e||i}}catch(e){a("error caught: ",e),i="error",x.error=r=e||i}x.aborted&&(a("upload aborted"),i=null),x.status&&(i=x.status>=200&&x.status<300||304===x.status?"success":"error"),"success"===i?(m.success&&m.success.call(m.context,E,"success",x),S.resolve(x.responseText,"success",x),d&&e.event.trigger("ajaxSuccess",[x,m])):i&&(void 0===r&&(r=x.statusText),m.error&&m.error.call(m.context,x,i,r),S.reject(x,"error",r),d&&e.event.trigger("ajaxError",[x,m,r])),d&&e.event.trigger("ajaxComplete",[x,m]),d&&!--e.active&&e.event.trigger("ajaxStop"),m.complete&&m.complete.call(m.context,x,i),F=!0,m.timeout&&clearTimeout(j),setTimeout(function(){m.iframeTarget?v.attr("src",m.iframeSrc):v.remove(),x.responseXML=null},100)}}}var c,f,m,d,h,v,g,x,b,y,T,j,w=l[0],S=e.Deferred();if(S.abort=function(e){x.abort(e)},r)for(f=0;f<p.length;f++)c=e(p[f]),i?c.prop("disabled",!1):c.removeAttr("disabled");if(m=e.extend(!0,{},e.ajaxSettings,t),m.context=m.context||m,h="jqFormIO"+(new Date).getTime(),m.iframeTarget?(y=(v=e(m.iframeTarget)).attr2("name"))?h=y:v.attr2("name",h):(v=e('<iframe name="'+h+'" src="'+m.iframeSrc+'" />')).css({position:"absolute",top:"-1000px",left:"-1000px"}),g=v[0],x={aborted:0,responseText:null,responseXML:null,status:0,statusText:"n/a",getAllResponseHeaders:function(){},getResponseHeader:function(){},setRequestHeader:function(){},abort:function(t){var r="timeout"===t?"timeout":"aborted";a("aborting upload... "+r),this.aborted=1;try{g.contentWindow.document.execCommand&&g.contentWindow.document.execCommand("Stop")}catch(e){}v.attr("src",m.iframeSrc),x.error=r,m.error&&m.error.call(m.context,x,r,t),d&&e.event.trigger("ajaxError",[x,m,r]),m.complete&&m.complete.call(m.context,x,r)}},(d=m.global)&&0==e.active++&&e.event.trigger("ajaxStart"),d&&e.event.trigger("ajaxSend",[x,m]),m.beforeSend&&!1===m.beforeSend.call(m.context,x,m))return m.global&&e.active--,S.reject(),S;if(x.aborted)return S.reject(),S;(b=w.clk)&&(y=b.name)&&!b.disabled&&(m.extraData=m.extraData||{},m.extraData[y]=b.value,"image"==b.type&&(m.extraData[y+".x"]=w.clk_x,m.extraData[y+".y"]=w.clk_y));var D=1,k=2,A=e("meta[name=csrf-token]").attr("content"),L=e("meta[name=csrf-param]").attr("content");L&&A&&(m.extraData=m.extraData||{},m.extraData[L]=A),m.forceSync?o():setTimeout(o,10);var E,M,F,O=50,X=e.parseXML||function(e,t){return window.ActiveXObject?((t=new ActiveXObject("Microsoft.XMLDOM")).async="false",t.loadXML(e)):t=(new DOMParser).parseFromString(e,"text/xml"),t&&t.documentElement&&"parsererror"!=t.documentElement.nodeName?t:null},C=e.parseJSON||function(e){return window.eval("("+e+")")},_=function(t,r,a){var n=t.getResponseHeader("content-type")||"",i="xml"===r||!r&&n.indexOf("xml")>=0,o=i?t.responseXML:t.responseText;return i&&"parsererror"===o.documentElement.nodeName&&e.error&&e.error("parsererror"),a&&a.dataFilter&&(o=a.dataFilter(o,r)),"string"==typeof o&&("json"===r||!r&&n.indexOf("json")>=0?o=C(o):("script"===r||!r&&n.indexOf("javascript")>=0)&&e.globalEval(o)),o};return S}if(!this.length)return a("ajaxSubmit: skipping submit process - no element selected"),this;var s,u,c,l=this;"function"==typeof t?t={success:t}:void 0===t&&(t={}),s=t.type||this.attr2("method"),(c=(c="string"==typeof(u=t.url||this.attr2("action"))?e.trim(u):"")||window.location.href||"")&&(c=(c.match(/^([^#]+)/)||[])[1]),t=e.extend(!0,{url:c,success:e.ajaxSettings.success,type:s||e.ajaxSettings.type,iframeSrc:/^https/i.test(window.location.href||"")?"javascript:false":"about:blank"},t);var f={};if(this.trigger("form-pre-serialize",[this,t,f]),f.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"),this;if(t.beforeSerialize&&!1===t.beforeSerialize(this,t))return a("ajaxSubmit: submit aborted via beforeSerialize callback"),this;var m=t.traditional;void 0===m&&(m=e.ajaxSettings.traditional);var d,p=[],h=this.formToArray(t.semantic,p);if(t.data&&(t.extraData=t.data,d=e.param(t.data,m)),t.beforeSubmit&&!1===t.beforeSubmit(h,this,t))return a("ajaxSubmit: submit aborted via beforeSubmit callback"),this;if(this.trigger("form-submit-validate",[h,this,t,f]),f.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"),this;var v=e.param(h,m);d&&(v=v?v+"&"+d:d),"GET"==t.type.toUpperCase()?(t.url+=(t.url.indexOf("?")>=0?"&":"?")+v,t.data=null):t.data=v;var g=[];if(t.resetForm&&g.push(function(){l.resetForm()}),t.clearForm&&g.push(function(){l.clearForm(t.includeHidden)}),!t.dataType&&t.target){var x=t.success||function(){};g.push(function(r){var a=t.replaceTarget?"replaceWith":"html";e(t.target)[a](r).each(x,arguments)})}else t.success&&g.push(t.success);if(t.success=function(e,r,a){for(var n=t.context||this,i=0,o=g.length;i<o;i++)g[i].apply(n,[e,r,a||l,l])},t.error){var b=t.error;t.error=function(e,r,a){var n=t.context||this;b.apply(n,[e,r,a,l])}}if(t.complete){var y=t.complete;t.complete=function(e,r){var a=t.context||this;y.apply(a,[e,r,l])}}var T=e("input[type=file]:enabled",this).filter(function(){return""!==e(this).val()}).length>0,j="multipart/form-data",w=l.attr("enctype")==j||l.attr("encoding")==j,S=n.fileapi&&n.formdata;a("fileAPI :"+S);var D,k=(T||w)&&!S;!1!==t.iframe&&(t.iframe||k)?t.closeKeepAlive?e.get(t.closeKeepAlive,function(){D=o(h)}):D=o(h):D=(T||w)&&S?function(a){for(var n=new FormData,i=0;i<a.length;i++)n.append(a[i].name,a[i].value);if(t.extraData){var o=r(t.extraData);for(i=0;i<o.length;i++)o[i]&&n.append(o[i][0],o[i][1])}t.data=null;var u=e.extend(!0,{},e.ajaxSettings,t,{contentType:!1,processData:!1,cache:!1,type:s||"POST"});t.uploadProgress&&(u.xhr=function(){var r=e.ajaxSettings.xhr();return r.upload&&r.upload.addEventListener("progress",function(e){var r=0,a=e.loaded||e.position,n=e.total;e.lengthComputable&&(r=Math.ceil(a/n*100)),t.uploadProgress(e,a,n,r)},!1),r}),u.data=null;var c=u.beforeSend;return u.beforeSend=function(e,r){t.formData?r.data=t.formData:r.data=n,c&&c.call(this,e,r)},e.ajax(u)}(h):e.ajax(t),l.removeData("jqxhr").data("jqxhr",D);for(var A=0;A<p.length;A++)p[A]=null;return this.trigger("form-submit-notify",[this,t]),this},e.fn.ajaxForm=function(n){if(n=n||{},n.delegation=n.delegation&&e.isFunction(e.fn.on),!n.delegation&&0===this.length){var i={s:this.selector,c:this.context};return!e.isReady&&i.s?(a("DOM not ready, queuing ajaxForm"),e(function(){e(i.s,i.c).ajaxForm(n)}),this):(a("terminating; zero elements found by selector"+(e.isReady?"":" (DOM not ready)")),this)}return n.delegation?(e(document).off("submit.form-plugin",this.selector,t).off("click.form-plugin",this.selector,r).on("submit.form-plugin",this.selector,n,t).on("click.form-plugin",this.selector,n,r),this):this.ajaxFormUnbind().bind("submit.form-plugin",n,t).bind("click.form-plugin",n,r)},e.fn.ajaxFormUnbind=function(){return this.unbind("submit.form-plugin click.form-plugin")},e.fn.formToArray=function(t,r){var a=[];if(0===this.length)return a;var i,o=this[0],s=this.attr("id"),u=t?o.getElementsByTagName("*"):o.elements;if(u&&!/MSIE [678]/.test(navigator.userAgent)&&(u=e(u).get()),s&&(i=e(':input[form="'+s+'"]').get()).length&&(u=(u||[]).concat(i)),!u||!u.length)return a;var c,l,f,m,d,p,h;for(c=0,p=u.length;c<p;c++)if(d=u[c],(f=d.name)&&!d.disabled)if(t&&o.clk&&"image"==d.type)o.clk==d&&(a.push({name:f,value:e(d).val(),type:d.type}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}));else if((m=e.fieldValue(d,!0))&&m.constructor==Array)for(r&&r.push(d),l=0,h=m.length;l<h;l++)a.push({name:f,value:m[l]});else if(n.fileapi&&"file"==d.type){r&&r.push(d);var v=d.files;if(v.length)for(l=0;l<v.length;l++)a.push({name:f,value:v[l],type:d.type});else a.push({name:f,value:"",type:d.type})}else null!==m&&void 0!==m&&(r&&r.push(d),a.push({name:f,value:m,type:d.type,required:d.required}));if(!t&&o.clk){var g=e(o.clk),x=g[0];(f=x.name)&&!x.disabled&&"image"==x.type&&(a.push({name:f,value:g.val()}),a.push({name:f+".x",value:o.clk_x},{name:f+".y",value:o.clk_y}))}return a},e.fn.formSerialize=function(t){return e.param(this.formToArray(t))},e.fn.fieldSerialize=function(t){var r=[];return this.each(function(){var a=this.name;if(a){var n=e.fieldValue(this,t);if(n&&n.constructor==Array)for(var i=0,o=n.length;i<o;i++)r.push({name:a,value:n[i]});else null!==n&&void 0!==n&&r.push({name:this.name,value:n})}}),e.param(r)},e.fn.fieldValue=function(t){for(var r=[],a=0,n=this.length;a<n;a++){var i=this[a],o=e.fieldValue(i,t);null===o||void 0===o||o.constructor==Array&&!o.length||(o.constructor==Array?e.merge(r,o):r.push(o))}return r},e.fieldValue=function(t,r){var a=t.name,n=t.type,i=t.tagName.toLowerCase();if(void 0===r&&(r=!0),r&&(!a||t.disabled||"reset"==n||"button"==n||("checkbox"==n||"radio"==n)&&!t.checked||("submit"==n||"image"==n)&&t.form&&t.form.clk!=t||"select"==i&&-1==t.selectedIndex))return null;if("select"==i){var o=t.selectedIndex;if(o<0)return null;for(var s=[],u=t.options,c="select-one"==n,l=c?o+1:u.length,f=c?o:0;f<l;f++){var m=u[f];if(m.selected){var d=m.value;if(d||(d=m.attributes&&m.attributes.value&&!m.attributes.value.specified?m.text:m.value),c)return d;s.push(d)}}return s}return e(t).val()},e.fn.clearForm=function(t){return this.each(function(){e("input,select,textarea",this).clearFields(t)})},e.fn.clearFields=e.fn.clearInputs=function(t){var r=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;return this.each(function(){var a=this.type,n=this.tagName.toLowerCase();r.test(a)||"textarea"==n?this.value="":"checkbox"==a||"radio"==a?this.checked=!1:"select"==n?this.selectedIndex=-1:"file"==a?/MSIE/.test(navigator.userAgent)?e(this).replaceWith(e(this).clone(!0)):e(this).val(""):t&&(!0===t&&/hidden/.test(a)||"string"==typeof t&&e(this).is(t))&&(this.value="")})},e.fn.resetForm=function(){return this.each(function(){("function"==typeof this.reset||"object"==typeof this.reset&&!this.reset.nodeType)&&this.reset()})},e.fn.enable=function(e){return void 0===e&&(e=!0),this.each(function(){this.disabled=!e})},e.fn.selected=function(t){return void 0===t&&(t=!0),this.each(function(){var r=this.type;if("checkbox"==r||"radio"==r)this.checked=t;else if("option"==this.tagName.toLowerCase()){var a=e(this).parent("select");t&&a[0]&&"select-one"==a[0].type&&a.find("option").selected(!1),this.selected=t}})},e.fn.ajaxSubmit.debug=!1});/*!
 * Cropper.js v1.5.12
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2021-06-12T08:00:17.411Z
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Cropper=e()}(this,function(){"use strict";function e(e,t){var i,a=Object.keys(e);return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(e),t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,i)),a}function B(a){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?e(Object(n),!0).forEach(function(t){var e,i;e=a,t=n[i=t],i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(n,t))})}return a}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function T(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(i="Object"===i&&t.constructor?t.constructor.name:i)||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}var t="undefined"!=typeof window&&void 0!==window.document,h=t?window:{},o=!(!t||!h.document.documentElement)&&"ontouchstart"in h.document.documentElement,r=t&&"PointerEvent"in h,c="cropper",k="all",O="crop",E="move",W="zoom",H="e",N="w",L="s",z="n",Y="ne",X="nw",R="se",S="sw",s="".concat(c,"-crop"),d="".concat(c,"-disabled"),A="".concat(c,"-hidden"),l="".concat(c,"-hide"),p="".concat(c,"-invisible"),m="".concat(c,"-modal"),u="".concat(c,"-move"),g="".concat(c,"Action"),f="".concat(c,"Preview"),v="crop",w="move",b="none",y="crop",x="cropend",M="cropmove",C="cropstart",D="dblclick",j=r?"pointerdown":o?"touchstart":"mousedown",I=r?"pointermove":o?"touchmove":"mousemove",P=r?"pointerup pointercancel":o?"touchend touchcancel":"mouseup",U="zoom",q="image/jpeg",$=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,Q=/^data:/,K=/^data:image\/jpeg;base64,/,Z=/^img|canvas$/i,G={viewMode:0,dragMode:v,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},V=Number.isNaN||h.isNaN;function F(t){return"number"==typeof t&&!V(t)}var J=function(t){return 0<t&&t<1/0};function _(t){return void 0===t}function tt(t){return"object"===i(t)&&null!==t}var et=Object.prototype.hasOwnProperty;function it(t){if(!tt(t))return!1;try{var e=t.constructor,i=e.prototype;return e&&i&&et.call(i,"isPrototypeOf")}catch(t){return!1}}function at(t){return"function"==typeof t}var nt=Array.prototype.slice;function ot(t){return Array.from?Array.from(t):nt.call(t)}function ht(i,a){return i&&at(a)&&(Array.isArray(i)||F(i.length)?ot(i).forEach(function(t,e){a.call(i,t,e,i)}):tt(i)&&Object.keys(i).forEach(function(t){a.call(i,i[t],t,i)})),i}var rt=Object.assign||function(i){for(var t=arguments.length,e=new Array(1<t?t-1:0),a=1;a<t;a++)e[a-1]=arguments[a];return tt(i)&&0<e.length&&e.forEach(function(e){tt(e)&&Object.keys(e).forEach(function(t){i[t]=e[t]})}),i},st=/\.\d*(?:0|9){12}\d*$/;function ct(t,e){e=1<arguments.length&&void 0!==e?e:1e11;return st.test(t)?Math.round(t*e)/e:t}var dt=/^width|height|left|top|marginLeft|marginTop$/;function lt(t,e){var i=t.style;ht(e,function(t,e){dt.test(e)&&F(t)&&(t="".concat(t,"px")),i[e]=t})}function pt(t,e){var i;e&&(F(t.length)?ht(t,function(t){pt(t,e)}):t.classList?t.classList.add(e):(i=t.className.trim())?i.indexOf(e)<0&&(t.className="".concat(i," ").concat(e)):t.className=e)}function mt(t,e){e&&(F(t.length)?ht(t,function(t){mt(t,e)}):t.classList?t.classList.remove(e):0<=t.className.indexOf(e)&&(t.className=t.className.replace(e,"")))}function ut(t,e,i){e&&(F(t.length)?ht(t,function(t){ut(t,e,i)}):(i?pt:mt)(t,e))}var gt=/([a-z\d])([A-Z])/g;function ft(t){return t.replace(gt,"$1-$2").toLowerCase()}function vt(t,e){return tt(t[e])?t[e]:t.dataset?t.dataset[e]:t.getAttribute("data-".concat(ft(e)))}function wt(t,e,i){tt(i)?t[e]=i:t.dataset?t.dataset[e]=i:t.setAttribute("data-".concat(ft(e)),i)}var bt,yt,xt=/\s\s*/,Mt=(yt=!1,t&&(bt=!1,At=function(){},It=Object.defineProperty({},"once",{get:function(){return yt=!0,bt},set:function(t){bt=t}}),h.addEventListener("test",At,It),h.removeEventListener("test",At,It)),yt);function Ct(i,t,a,e){var n=3<arguments.length&&void 0!==e?e:{},o=a;t.trim().split(xt).forEach(function(t){var e;Mt||(e=i.listeners)&&e[t]&&e[t][a]&&(o=e[t][a],delete e[t][a],0===Object.keys(e[t]).length&&delete e[t],0===Object.keys(e).length&&delete i.listeners),i.removeEventListener(t,o,n)})}function Dt(o,t,h,e){var r=3<arguments.length&&void 0!==e?e:{},s=h;t.trim().split(xt).forEach(function(a){var t,n;r.once&&!Mt&&(t=o.listeners,s=function(){delete n[a][h],o.removeEventListener(a,s,r);for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];h.apply(o,e)},(n=void 0===t?{}:t)[a]||(n[a]={}),n[a][h]&&o.removeEventListener(a,n[a][h],r),n[a][h]=s,o.listeners=n),o.addEventListener(a,s,r)})}function Bt(t,e,i){var a;return at(Event)&&at(CustomEvent)?a=new CustomEvent(e,{detail:i,bubbles:!0,cancelable:!0}):(a=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,i),t.dispatchEvent(a)}function kt(t){t=t.getBoundingClientRect();return{left:t.left+(window.pageXOffset-document.documentElement.clientLeft),top:t.top+(window.pageYOffset-document.documentElement.clientTop)}}var Ot=h.location,Tt=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function Et(t){t=t.match(Tt);return null!==t&&(t[1]!==Ot.protocol||t[2]!==Ot.hostname||t[3]!==Ot.port)}function Wt(t){var e="timestamp=".concat((new Date).getTime());return t+(-1===t.indexOf("?")?"?":"&")+e}function Ht(t){var e=t.rotate,i=t.scaleX,a=t.scaleY,n=t.translateX,o=t.translateY,t=[];F(n)&&0!==n&&t.push("translateX(".concat(n,"px)")),F(o)&&0!==o&&t.push("translateY(".concat(o,"px)")),F(e)&&0!==e&&t.push("rotate(".concat(e,"deg)")),F(i)&&1!==i&&t.push("scaleX(".concat(i,")")),F(a)&&1!==a&&t.push("scaleY(".concat(a,")"));t=t.length?t.join(" "):"none";return{WebkitTransform:t,msTransform:t,transform:t}}function Nt(t,e){var i=t.pageX,a=t.pageY,t={endX:i,endY:a};return e?t:B({startX:i,startY:a},t)}function Lt(t,e){var i=t.aspectRatio,a=t.height,n=t.width,o=1<arguments.length&&void 0!==e?e:"contain",h=J(n),t=J(a);return h&&t?(e=a*i,"contain"===o&&n<e||"cover"===o&&e<n?a=n/i:n=a*i):h?a=n/i:t&&(n=a*i),{width:n,height:a}}var zt=String.fromCharCode;var Yt=/^data:.*,/;function Xt(t){var e,i,a,n,o,h,r,s=new DataView(t);try{if(255===s.getUint8(0)&&216===s.getUint8(1))for(var c=s.byteLength,d=2;d+1<c;){if(255===s.getUint8(d)&&225===s.getUint8(d+1)){i=d;break}d+=1}if(i&&(n=i+10,"Exif"===function(t,e,i){var a="";i+=e;for(var n=e;n<i;n+=1)a+=zt(t.getUint8(n));return a}(s,i+4,4)&&(!(r=18761===(o=s.getUint16(n)))&&19789!==o||42!==s.getUint16(n+2,r)||8<=(h=s.getUint32(n+4,r))&&(a=n+h))),a)for(var l,p=s.getUint16(a,r),m=0;m<p;m+=1)if(l=a+12*m+2,274===s.getUint16(l,r)){l+=8,e=s.getUint16(l,r),s.setUint16(l,1,r);break}}catch(t){e=1}return e}var Rt={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,e=this.options,i=this.container,a=this.cropper,n=Number(e.minContainerWidth),e=Number(e.minContainerHeight);pt(a,A),mt(t,A);e={width:Math.max(i.offsetWidth,0<=n?n:200),height:Math.max(i.offsetHeight,0<=e?e:100)};lt(a,{width:(this.containerData=e).width,height:e.height}),pt(t,A),mt(a,A)},initCanvas:function(){var t=this.containerData,e=this.imageData,i=this.options.viewMode,a=Math.abs(e.rotate)%180==90,n=a?e.naturalHeight:e.naturalWidth,o=a?e.naturalWidth:e.naturalHeight,h=n/o,a=t.width,e=t.height;t.height*h>t.width?3===i?a=t.height*h:e=t.width/h:3===i?e=t.width/h:a=t.height*h;e={aspectRatio:h,naturalWidth:n,naturalHeight:o,width:a,height:e};this.canvasData=e,this.limited=1===i||2===i,this.limitCanvas(!0,!0),e.width=Math.min(Math.max(e.width,e.minWidth),e.maxWidth),e.height=Math.min(Math.max(e.height,e.minHeight),e.maxHeight),e.left=(t.width-e.width)/2,e.top=(t.height-e.height)/2,e.oldLeft=e.left,e.oldTop=e.top,this.initialCanvasData=rt({},e)},limitCanvas:function(t,e){var i,a=this.options,n=this.containerData,o=this.canvasData,h=this.cropBoxData,r=a.viewMode,s=o.aspectRatio,c=this.cropped&&h;t&&(t=Number(a.minCanvasWidth)||0,i=Number(a.minCanvasHeight)||0,1<r?(t=Math.max(t,n.width),i=Math.max(i,n.height),3===r&&(t<i*s?t=i*s:i=t/s)):0<r&&(t?t=Math.max(t,c?h.width:0):i?i=Math.max(i,c?h.height:0):c&&((t=h.width)<(i=h.height)*s?t=i*s:i=t/s)),t=(s=Lt({aspectRatio:s,width:t,height:i})).width,i=s.height,o.minWidth=t,o.minHeight=i,o.maxWidth=1/0,o.maxHeight=1/0),e&&((c?0:1)<r?(i=n.width-o.width,e=n.height-o.height,o.minLeft=Math.min(0,i),o.minTop=Math.min(0,e),o.maxLeft=Math.max(0,i),o.maxTop=Math.max(0,e),c&&this.limited&&(o.minLeft=Math.min(h.left,h.left+(h.width-o.width)),o.minTop=Math.min(h.top,h.top+(h.height-o.height)),o.maxLeft=h.left,o.maxTop=h.top,2===r&&(o.width>=n.width&&(o.minLeft=Math.min(0,i),o.maxLeft=Math.max(0,i)),o.height>=n.height&&(o.minTop=Math.min(0,e),o.maxTop=Math.max(0,e))))):(o.minLeft=-o.width,o.minTop=-o.height,o.maxLeft=n.width,o.maxTop=n.height))},renderCanvas:function(t,e){var i,a,n=this.canvasData,o=this.imageData;e&&(i=(a=function(t){var e=t.width,i=t.height,a=t.degree;if(90==(a=Math.abs(a)%180))return{width:i,height:e};var n=a%90*Math.PI/180,o=Math.sin(n),t=Math.cos(n),n=e*t+i*o,t=e*o+i*t;return 90<a?{width:t,height:n}:{width:n,height:t}}({width:o.naturalWidth*Math.abs(o.scaleX||1),height:o.naturalHeight*Math.abs(o.scaleY||1),degree:o.rotate||0})).width,e=a.height,o=n.width*(i/n.naturalWidth),a=n.height*(e/n.naturalHeight),n.left-=(o-n.width)/2,n.top-=(a-n.height)/2,n.width=o,n.height=a,n.aspectRatio=i/e,n.naturalWidth=i,n.naturalHeight=e,this.limitCanvas(!0,!1)),(n.width>n.maxWidth||n.width<n.minWidth)&&(n.left=n.oldLeft),(n.height>n.maxHeight||n.height<n.minHeight)&&(n.top=n.oldTop),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),this.limitCanvas(!1,!0),n.left=Math.min(Math.max(n.left,n.minLeft),n.maxLeft),n.top=Math.min(Math.max(n.top,n.minTop),n.maxTop),n.oldLeft=n.left,n.oldTop=n.top,lt(this.canvas,rt({width:n.width,height:n.height},Ht({translateX:n.left,translateY:n.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var e=this.canvasData,i=this.imageData,a=i.naturalWidth*(e.width/e.naturalWidth),n=i.naturalHeight*(e.height/e.naturalHeight);rt(i,{width:a,height:n,left:(e.width-a)/2,top:(e.height-n)/2}),lt(this.image,rt({width:i.width,height:i.height},Ht(rt({translateX:i.left,translateY:i.top},i)))),t&&this.output()},initCropBox:function(){var t=this.options,e=this.canvasData,i=t.aspectRatio||t.initialAspectRatio,a=Number(t.autoCropArea)||.8,t={width:e.width,height:e.height};i&&(e.height*i>e.width?t.height=t.width/i:t.width=t.height*i),this.cropBoxData=t,this.limitCropBox(!0,!0),t.width=Math.min(Math.max(t.width,t.minWidth),t.maxWidth),t.height=Math.min(Math.max(t.height,t.minHeight),t.maxHeight),t.width=Math.max(t.minWidth,t.width*a),t.height=Math.max(t.minHeight,t.height*a),t.left=e.left+(e.width-t.width)/2,t.top=e.top+(e.height-t.height)/2,t.oldLeft=t.left,t.oldTop=t.top,this.initialCropBoxData=rt({},t)},limitCropBox:function(t,e){var i,a,n=this.options,o=this.containerData,h=this.canvasData,r=this.cropBoxData,s=this.limited,c=n.aspectRatio;t&&(i=Number(n.minCropBoxWidth)||0,a=Number(n.minCropBoxHeight)||0,t=s?Math.min(o.width,h.width,h.width+h.left,o.width-h.left):o.width,n=s?Math.min(o.height,h.height,h.height+h.top,o.height-h.top):o.height,i=Math.min(i,o.width),a=Math.min(a,o.height),c&&(i&&a?i<a*c?a=i/c:i=a*c:i?a=i/c:a&&(i=a*c),t<n*c?n=t/c:t=n*c),r.minWidth=Math.min(i,t),r.minHeight=Math.min(a,n),r.maxWidth=t,r.maxHeight=n),e&&(s?(r.minLeft=Math.max(0,h.left),r.minTop=Math.max(0,h.top),r.maxLeft=Math.min(o.width,h.left+h.width)-r.width,r.maxTop=Math.min(o.height,h.top+h.height)-r.height):(r.minLeft=0,r.minTop=0,r.maxLeft=o.width-r.width,r.maxTop=o.height-r.height))},renderCropBox:function(){var t=this.options,e=this.containerData,i=this.cropBoxData;(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCropBox(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,t.movable&&t.cropBoxMovable&&wt(this.face,g,i.width>=e.width&&i.height>=e.height?E:k),lt(this.cropBox,rt({width:i.width,height:i.height},Ht({translateX:i.left,translateY:i.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),Bt(this.element,y,this.getData())}},St={initPreview:function(){var t=this.element,i=this.crossOrigin,e=this.options.preview,a=i?this.crossOriginUrl:this.url,n=t.alt||"The image to preview",o=document.createElement("img");i&&(o.crossOrigin=i),o.src=a,o.alt=n,this.viewBox.appendChild(o),this.viewBoxImage=o,e&&("string"==typeof(o=e)?o=t.ownerDocument.querySelectorAll(e):e.querySelector&&(o=[e]),ht(this.previews=o,function(t){var e=document.createElement("img");wt(t,f,{width:t.offsetWidth,height:t.offsetHeight,html:t.innerHTML}),i&&(e.crossOrigin=i),e.src=a,e.alt=n,e.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',t.innerHTML="",t.appendChild(e)}))},resetPreview:function(){ht(this.previews,function(t){var e=vt(t,f);lt(t,{width:e.width,height:e.height}),t.innerHTML=e.html,function(e,i){if(tt(e[i]))try{delete e[i]}catch(t){e[i]=void 0}else if(e.dataset)try{delete e.dataset[i]}catch(t){e.dataset[i]=void 0}else e.removeAttribute("data-".concat(ft(i)))}(t,f)})},preview:function(){var h=this.imageData,t=this.canvasData,e=this.cropBoxData,r=e.width,s=e.height,c=h.width,d=h.height,l=e.left-t.left-h.left,p=e.top-t.top-h.top;this.cropped&&!this.disabled&&(lt(this.viewBoxImage,rt({width:c,height:d},Ht(rt({translateX:-l,translateY:-p},h)))),ht(this.previews,function(t){var e=vt(t,f),i=e.width,a=e.height,n=i,o=a,e=1;r&&(o=s*(e=i/r)),s&&a<o&&(n=r*(e=a/s),o=a),lt(t,{width:n,height:o}),lt(t.getElementsByTagName("img")[0],rt({width:c*e,height:d*e},Ht(rt({translateX:-l*e,translateY:-p*e},h))))}))}},r={bind:function(){var t=this.element,e=this.options,i=this.cropper;at(e.cropstart)&&Dt(t,C,e.cropstart),at(e.cropmove)&&Dt(t,M,e.cropmove),at(e.cropend)&&Dt(t,x,e.cropend),at(e.crop)&&Dt(t,y,e.crop),at(e.zoom)&&Dt(t,U,e.zoom),Dt(i,j,this.onCropStart=this.cropStart.bind(this)),e.zoomable&&e.zoomOnWheel&&Dt(i,"wheel",this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&Dt(i,D,this.onDblclick=this.dblclick.bind(this)),Dt(t.ownerDocument,I,this.onCropMove=this.cropMove.bind(this)),Dt(t.ownerDocument,P,this.onCropEnd=this.cropEnd.bind(this)),e.responsive&&Dt(window,"resize",this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,e=this.options,i=this.cropper;at(e.cropstart)&&Ct(t,C,e.cropstart),at(e.cropmove)&&Ct(t,M,e.cropmove),at(e.cropend)&&Ct(t,x,e.cropend),at(e.crop)&&Ct(t,y,e.crop),at(e.zoom)&&Ct(t,U,e.zoom),Ct(i,j,this.onCropStart),e.zoomable&&e.zoomOnWheel&&Ct(i,"wheel",this.onWheel,{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&Ct(i,D,this.onDblclick),Ct(t.ownerDocument,I,this.onCropMove),Ct(t.ownerDocument,P,this.onCropEnd),e.responsive&&Ct(window,"resize",this.onResize)}},o={resize:function(){var t,e,i,a,n,o,h;this.disabled||(t=this.options,e=this.container,a=this.containerData,i=e.offsetWidth/a.width,a=e.offsetHeight/a.height,1!=(n=Math.abs(i-1)>Math.abs(a-1)?i:a)&&(t.restore&&(o=this.getCanvasData(),h=this.getCropBoxData()),this.render(),t.restore&&(this.setCanvasData(ht(o,function(t,e){o[e]=t*n})),this.setCropBoxData(ht(h,function(t,e){h[e]=t*n})))))},dblclick:function(){var t,e;this.disabled||this.options.dragMode===b||this.setDragMode((t=this.dragBox,e=s,(t.classList?t.classList.contains(e):-1<t.className.indexOf(e))?w:v))},wheel:function(t){var e=this,i=Number(this.options.wheelZoomRatio)||.1,a=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout(function(){e.wheeling=!1},50),t.deltaY?a=0<t.deltaY?1:-1:t.wheelDelta?a=-t.wheelDelta/120:t.detail&&(a=0<t.detail?1:-1),this.zoom(-a*i,t)))},cropStart:function(t){var e,i=t.buttons,a=t.button;this.disabled||("mousedown"===t.type||"pointerdown"===t.type&&"mouse"===t.pointerType)&&(F(i)&&1!==i||F(a)&&0!==a||t.ctrlKey)||(a=this.options,e=this.pointers,t.changedTouches?ht(t.changedTouches,function(t){e[t.identifier]=Nt(t)}):e[t.pointerId||0]=Nt(t),a=1<Object.keys(e).length&&a.zoomable&&a.zoomOnTouch?W:vt(t.target,g),$.test(a)&&!1!==Bt(this.element,C,{originalEvent:t,action:a})&&(t.preventDefault(),this.action=a,this.cropping=!1,a===O&&(this.cropping=!0,pt(this.dragBox,m))))},cropMove:function(t){var e,i=this.action;!this.disabled&&i&&(e=this.pointers,t.preventDefault(),!1!==Bt(this.element,M,{originalEvent:t,action:i})&&(t.changedTouches?ht(t.changedTouches,function(t){rt(e[t.identifier]||{},Nt(t,!0))}):rt(e[t.pointerId||0]||{},Nt(t,!0)),this.change(t)))},cropEnd:function(t){var e,i;this.disabled||(e=this.action,i=this.pointers,t.changedTouches?ht(t.changedTouches,function(t){delete i[t.identifier]}):delete i[t.pointerId||0],e&&(t.preventDefault(),Object.keys(i).length||(this.action=""),this.cropping&&(this.cropping=!1,ut(this.dragBox,m,this.cropped&&this.options.modal)),Bt(this.element,x,{originalEvent:t,action:e})))}},t={change:function(t){var e=this.options,i=this.canvasData,a=this.containerData,n=this.cropBoxData,o=this.pointers,h=this.action,r=e.aspectRatio,s=n.left,c=n.top,d=n.width,l=n.height,p=s+d,m=c+l,u=0,g=0,f=a.width,v=a.height,w=!0;!r&&t.shiftKey&&(r=d&&l?d/l:1),this.limited&&(u=n.minLeft,g=n.minTop,f=u+Math.min(a.width,i.width,i.left+i.width),v=g+Math.min(a.height,i.height,i.top+i.height));function b(t){switch(t){case H:p+D.x>f&&(D.x=f-p);break;case N:s+D.x<u&&(D.x=u-s);break;case z:c+D.y<g&&(D.y=g-c);break;case L:m+D.y>v&&(D.y=v-m)}}var y,x,M,C=o[Object.keys(o)[0]],D={x:C.endX-C.startX,y:C.endY-C.startY};switch(h){case k:s+=D.x,c+=D.y;break;case H:if(0<=D.x&&(f<=p||r&&(c<=g||v<=m))){w=!1;break}b(H),(d+=D.x)<0&&(h=N,s-=d=-d),r&&(c+=(n.height-(l=d/r))/2);break;case z:if(D.y<=0&&(c<=g||r&&(s<=u||f<=p))){w=!1;break}b(z),l-=D.y,c+=D.y,l<0&&(h=L,c-=l=-l),r&&(s+=(n.width-(d=l*r))/2);break;case N:if(D.x<=0&&(s<=u||r&&(c<=g||v<=m))){w=!1;break}b(N),d-=D.x,s+=D.x,d<0&&(h=H,s-=d=-d),r&&(c+=(n.height-(l=d/r))/2);break;case L:if(0<=D.y&&(v<=m||r&&(s<=u||f<=p))){w=!1;break}b(L),(l+=D.y)<0&&(h=z,c-=l=-l),r&&(s+=(n.width-(d=l*r))/2);break;case Y:if(r){if(D.y<=0&&(c<=g||f<=p)){w=!1;break}b(z),l-=D.y,c+=D.y,d=l*r}else b(z),b(H),!(0<=D.x)||p<f?d+=D.x:D.y<=0&&c<=g&&(w=!1),D.y<=0&&!(g<c)||(l-=D.y,c+=D.y);d<0&&l<0?(h=S,c-=l=-l,s-=d=-d):d<0?(h=X,s-=d=-d):l<0&&(h=R,c-=l=-l);break;case X:if(r){if(D.y<=0&&(c<=g||s<=u)){w=!1;break}b(z),l-=D.y,c+=D.y,s+=n.width-(d=l*r)}else b(z),b(N),!(D.x<=0)||u<s?(d-=D.x,s+=D.x):D.y<=0&&c<=g&&(w=!1),D.y<=0&&!(g<c)||(l-=D.y,c+=D.y);d<0&&l<0?(h=R,c-=l=-l,s-=d=-d):d<0?(h=Y,s-=d=-d):l<0&&(h=S,c-=l=-l);break;case S:if(r){if(D.x<=0&&(s<=u||v<=m)){w=!1;break}b(N),d-=D.x,s+=D.x,l=d/r}else b(L),b(N),!(D.x<=0)||u<s?(d-=D.x,s+=D.x):0<=D.y&&v<=m&&(w=!1),0<=D.y&&!(m<v)||(l+=D.y);d<0&&l<0?(h=Y,c-=l=-l,s-=d=-d):d<0?(h=R,s-=d=-d):l<0&&(h=X,c-=l=-l);break;case R:if(r){if(0<=D.x&&(f<=p||v<=m)){w=!1;break}b(H),l=(d+=D.x)/r}else b(L),b(H),!(0<=D.x)||p<f?d+=D.x:0<=D.y&&v<=m&&(w=!1),0<=D.y&&!(m<v)||(l+=D.y);d<0&&l<0?(h=X,c-=l=-l,s-=d=-d):d<0?(h=S,s-=d=-d):l<0&&(h=Y,c-=l=-l);break;case E:this.move(D.x,D.y),w=!1;break;case W:this.zoom((x=B({},y=o),M=0,ht(y,function(n,t){delete x[t],ht(x,function(t){var e=Math.abs(n.startX-t.startX),i=Math.abs(n.startY-t.startY),a=Math.abs(n.endX-t.endX),t=Math.abs(n.endY-t.endY),i=Math.sqrt(e*e+i*i),i=(Math.sqrt(a*a+t*t)-i)/i;Math.abs(i)>Math.abs(M)&&(M=i)})}),M),t),w=!1;break;case O:if(!D.x||!D.y){w=!1;break}y=kt(this.cropper),s=C.startX-y.left,c=C.startY-y.top,d=n.minWidth,l=n.minHeight,0<D.x?h=0<D.y?R:Y:D.x<0&&(s-=d,h=0<D.y?S:X),D.y<0&&(c-=l),this.cropped||(mt(this.cropBox,A),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}w&&(n.width=d,n.height=l,n.left=s,n.top=c,this.action=h,this.renderCropBox()),ht(o,function(t){t.startX=t.endX,t.startY=t.endY})}},At={crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&pt(this.dragBox,m),mt(this.cropBox,A),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=rt({},this.initialImageData),this.canvasData=rt({},this.initialCanvasData),this.cropBoxData=rt({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(rt(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),mt(this.dragBox,m),pt(this.cropBox,A)),this},replace:function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];return!this.disabled&&e&&(this.isImg&&(this.element.src=e),t?(this.url=e,this.image.src=e,this.ready&&(this.viewBoxImage.src=e,ht(this.previews,function(t){t.getElementsByTagName("img")[0].src=e}))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(e))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,mt(this.cropper,d)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,pt(this.cropper,d)),this},destroy:function(){var t=this.element;return t[c]&&(t[c]=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate()),this},move:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:t,i=this.canvasData,a=i.left,i=i.top;return this.moveTo(_(t)?t:a+Number(t),_(e)?e:i+Number(e))},moveTo:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:t,i=this.canvasData,a=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.movable&&(F(t)&&(i.left=t,a=!0),F(e)&&(i.top=e,a=!0),a&&this.renderCanvas(!0)),this},zoom:function(t,e){var i=this.canvasData;return t=Number(t),this.zoomTo(i.width*(t=t<0?1/(1-t):1+t)/i.naturalWidth,null,e)},zoomTo:function(t,e,i){var a,n,o,h=this.options,r=this.canvasData,s=r.width,c=r.height,d=r.naturalWidth,l=r.naturalHeight;if(0<=(t=Number(t))&&this.ready&&!this.disabled&&h.zoomable){h=d*t,l=l*t;if(!1===Bt(this.element,U,{ratio:t,oldRatio:s/d,originalEvent:i}))return this;i?(t=this.pointers,d=kt(this.cropper),i=t&&Object.keys(t).length?(o=n=a=0,ht(t,function(t){var e=t.startX,t=t.startY;a+=e,n+=t,o+=1}),{pageX:a/=o,pageY:n/=o}):{pageX:i.pageX,pageY:i.pageY},r.left-=(h-s)*((i.pageX-d.left-r.left)/s),r.top-=(l-c)*((i.pageY-d.top-r.top)/c)):it(e)&&F(e.x)&&F(e.y)?(r.left-=(h-s)*((e.x-r.left)/s),r.top-=(l-c)*((e.y-r.top)/c)):(r.left-=(h-s)/2,r.top-=(l-c)/2),r.width=h,r.height=l,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return F(t=Number(t))&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var e=this.imageData.scaleY;return this.scale(t,F(e)?e:1)},scaleY:function(t){var e=this.imageData.scaleX;return this.scale(F(e)?e:1,t)},scale:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:t,i=this.imageData,a=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.scalable&&(F(t)&&(i.scaleX=t,a=!0),F(e)&&(i.scaleY=e,a=!0),a&&this.renderCanvas(!0,!0)),this},getData:function(){var i,a,t=0<arguments.length&&void 0!==arguments[0]&&arguments[0],e=this.options,n=this.imageData,o=this.canvasData,h=this.cropBoxData;return this.ready&&this.cropped?(i={x:h.left-o.left,y:h.top-o.top,width:h.width,height:h.height},a=n.width/n.naturalWidth,ht(i,function(t,e){i[e]=t/a}),t&&(h=Math.round(i.y+i.height),t=Math.round(i.x+i.width),i.x=Math.round(i.x),i.y=Math.round(i.y),i.width=t-i.x,i.height=h-i.y)):i={x:0,y:0,width:0,height:0},e.rotatable&&(i.rotate=n.rotate||0),e.scalable&&(i.scaleX=n.scaleX||1,i.scaleY=n.scaleY||1),i},setData:function(t){var e,i=this.options,a=this.imageData,n=this.canvasData,o={};return this.ready&&!this.disabled&&it(t)&&(e=!1,i.rotatable&&F(t.rotate)&&t.rotate!==a.rotate&&(a.rotate=t.rotate,e=!0),i.scalable&&(F(t.scaleX)&&t.scaleX!==a.scaleX&&(a.scaleX=t.scaleX,e=!0),F(t.scaleY)&&t.scaleY!==a.scaleY&&(a.scaleY=t.scaleY,e=!0)),e&&this.renderCanvas(!0,!0),a=a.width/a.naturalWidth,F(t.x)&&(o.left=t.x*a+n.left),F(t.y)&&(o.top=t.y*a+n.top),F(t.width)&&(o.width=t.width*a),F(t.height)&&(o.height=t.height*a),this.setCropBoxData(o)),this},getContainerData:function(){return this.ready?rt({},this.containerData):{}},getImageData:function(){return this.sized?rt({},this.imageData):{}},getCanvasData:function(){var e=this.canvasData,i={};return this.ready&&ht(["left","top","width","height","naturalWidth","naturalHeight"],function(t){i[t]=e[t]}),i},setCanvasData:function(t){var e=this.canvasData,i=e.aspectRatio;return this.ready&&!this.disabled&&it(t)&&(F(t.left)&&(e.left=t.left),F(t.top)&&(e.top=t.top),F(t.width)?(e.width=t.width,e.height=t.width/i):F(t.height)&&(e.height=t.height,e.width=t.height*i),this.renderCanvas(!0)),this},getCropBoxData:function(){var t,e=this.cropBoxData;return(t=this.ready&&this.cropped?{left:e.left,top:e.top,width:e.width,height:e.height}:t)||{}},setCropBoxData:function(t){var e,i,a=this.cropBoxData,n=this.options.aspectRatio;return this.ready&&this.cropped&&!this.disabled&&it(t)&&(F(t.left)&&(a.left=t.left),F(t.top)&&(a.top=t.top),F(t.width)&&t.width!==a.width&&(e=!0,a.width=t.width),F(t.height)&&t.height!==a.height&&(i=!0,a.height=t.height),n&&(e?a.height=a.width/n:i&&(a.width=a.height*n)),this.renderCropBox()),this},getCroppedCanvas:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var e,i,a,n,o,h,r,s,c,d,l,p,m,u=this.canvasData,h=(w=this.image,e=this.imageData,i=u,y=t,a=e.aspectRatio,n=e.naturalWidth,b=e.naturalHeight,o=void 0===(m=e.rotate)?0:m,h=void 0===(v=e.scaleX)?1:v,g=void 0===(l=e.scaleY)?1:l,r=i.aspectRatio,s=i.naturalWidth,c=i.naturalHeight,d=void 0===(p=y.fillColor)?"transparent":p,x=y.imageSmoothingEnabled,f=void 0===x||x,v=void 0===(m=y.imageSmoothingQuality)?"low":m,l=void 0===(e=y.maxWidth)?1/0:e,p=void 0===(i=y.maxHeight)?1/0:i,m=void 0===(x=y.minWidth)?0:x,i=void 0===(e=y.minHeight)?0:e,y=(x=document.createElement("canvas")).getContext("2d"),e=Lt({aspectRatio:r,width:l,height:p}),r=Lt({aspectRatio:r,width:m,height:i},"cover"),s=Math.min(e.width,Math.max(r.width,s)),c=Math.min(e.height,Math.max(r.height,c)),p=Lt({aspectRatio:a,width:l,height:p}),i=Lt({aspectRatio:a,width:m,height:i},"cover"),n=Math.min(p.width,Math.max(i.width,n)),b=Math.min(p.height,Math.max(i.height,b)),b=[-n/2,-b/2,n,b],x.width=ct(s),x.height=ct(c),y.fillStyle=d,y.fillRect(0,0,s,c),y.save(),y.translate(s/2,c/2),y.rotate(o*Math.PI/180),y.scale(h,g),y.imageSmoothingEnabled=f,y.imageSmoothingQuality=v,y.drawImage.apply(y,[w].concat(T(b.map(function(t){return Math.floor(ct(t))})))),y.restore(),x);if(!this.cropped)return h;var g=this.getData(),f=g.x,v=g.y,w=g.width,b=g.height,y=h.width/Math.floor(u.naturalWidth);1!=y&&(f*=y,v*=y,w*=y,b*=y);var x=w/b,g=Lt({aspectRatio:x,width:t.maxWidth||1/0,height:t.maxHeight||1/0}),u=Lt({aspectRatio:x,width:t.minWidth||0,height:t.minHeight||0},"cover"),x=Lt({aspectRatio:x,width:t.width||(1!=y?h.width:w),height:t.height||(1!=y?h.height:b)}),y=x.width,x=x.height,y=Math.min(g.width,Math.max(u.width,y)),x=Math.min(g.height,Math.max(u.height,x)),g=document.createElement("canvas"),u=g.getContext("2d");g.width=ct(y),g.height=ct(x),u.fillStyle=t.fillColor||"transparent",u.fillRect(0,0,y,x);x=t.imageSmoothingEnabled,t=t.imageSmoothingQuality;u.imageSmoothingEnabled=void 0===x||x,t&&(u.imageSmoothingQuality=t);var M,C,D,B,k,x=h.width,t=h.height,f=f,v=v;f<=-w||x<f?B=C=M=f=0:f<=0?(C=-f,f=0,B=M=Math.min(x,w+f)):f<=x&&(C=0,B=M=Math.min(w,x-f)),M<=0||v<=-b||t<v?k=D=O=v=0:v<=0?(D=-v,v=0,k=O=Math.min(t,b+v)):v<=t&&(D=0,k=O=Math.min(b,t-v));var O=[f,v,M,O];return 0<B&&0<k&&O.push(C*(w=y/w),D*w,B*w,k*w),u.drawImage.apply(u,[h].concat(T(O.map(function(t){return Math.floor(ct(t))})))),g},setAspectRatio:function(t){var e=this.options;return this.disabled||_(t)||(e.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var e,i,a=this.options,n=this.dragBox,o=this.face;return this.ready&&!this.disabled&&(i=a.movable&&t===w,a.dragMode=t=(e=t===v)||i?t:b,wt(n,g,t),ut(n,s,e),ut(n,u,i),a.cropBoxMovable||(wt(o,g,t),ut(o,s,e),ut(o,u,i))),this}},jt=h.Cropper,It=function(){function i(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),!t||!Z.test(t.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=t,this.options=rt({},G,it(e)&&e),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}var t,e,a;return t=i,a=[{key:"noConflict",value:function(){return window.Cropper=jt,i}},{key:"setDefaults",value:function(t){rt(G,it(t)&&t)}}],(e=[{key:"init",value:function(){var t,e=this.element,i=e.tagName.toLowerCase();if(!e[c]){if(e[c]=this,"img"===i){if(this.isImg=!0,t=e.getAttribute("src")||"",!(this.originalUrl=t))return;t=e.src}else"canvas"===i&&window.HTMLCanvasElement&&(t=e.toDataURL());this.load(t)}}},{key:"load",value:function(t){var e,i,a,n,o,h,r=this;t&&(this.url=t,this.imageData={},e=this.element,(i=this.options).rotatable||i.scalable||(i.checkOrientation=!1),i.checkOrientation&&window.ArrayBuffer?Q.test(t)?K.test(t)?this.read((h=(h=t).replace(Yt,""),a=atob(h),h=new ArrayBuffer(a.length),ht(n=new Uint8Array(h),function(t,e){n[e]=a.charCodeAt(e)}),h)):this.clone():(o=new XMLHttpRequest,h=this.clone.bind(this),this.reloading=!0,(this.xhr=o).onabort=h,o.onerror=h,o.ontimeout=h,o.onprogress=function(){o.getResponseHeader("content-type")!==q&&o.abort()},o.onload=function(){r.read(o.response)},o.onloadend=function(){r.reloading=!1,r.xhr=null},i.checkCrossOrigin&&Et(t)&&e.crossOrigin&&(t=Wt(t)),o.open("GET",t,!0),o.responseType="arraybuffer",o.withCredentials="use-credentials"===e.crossOrigin,o.send()):this.clone())}},{key:"read",value:function(t){var e=this.options,i=this.imageData,a=Xt(t),n=0,o=1,h=1;1<a&&(this.url=function(t,e){for(var i=[],a=new Uint8Array(t);0<a.length;)i.push(zt.apply(null,ot(a.subarray(0,8192)))),a=a.subarray(8192);return"data:".concat(e,";base64,").concat(btoa(i.join("")))}(t,q),n=(a=function(t){var e=0,i=1,a=1;switch(t){case 2:i=-1;break;case 3:e=-180;break;case 4:a=-1;break;case 5:e=90,a=-1;break;case 6:e=90;break;case 7:e=90,i=-1;break;case 8:e=-90}return{rotate:e,scaleX:i,scaleY:a}}(a)).rotate,o=a.scaleX,h=a.scaleY),e.rotatable&&(i.rotate=n),e.scalable&&(i.scaleX=o,i.scaleY=h),this.clone()}},{key:"clone",value:function(){var t=this.element,e=this.url,i=t.crossOrigin,a=e;this.options.checkCrossOrigin&&Et(e)&&(i=i||"anonymous",a=Wt(e)),this.crossOrigin=i,this.crossOriginUrl=a;var n=document.createElement("img");i&&(n.crossOrigin=i),n.src=a||e,n.alt=t.alt||"The image to crop",(this.image=n).onload=this.start.bind(this),n.onerror=this.stop.bind(this),pt(n,l),t.parentNode.insertBefore(n,t.nextSibling)}},{key:"start",value:function(){var i=this,t=this.image;t.onload=null,t.onerror=null,this.sizing=!0;function e(t,e){rt(i.imageData,{naturalWidth:t,naturalHeight:e,aspectRatio:t/e}),i.initialImageData=rt({},i.imageData),i.sizing=!1,i.sized=!0,i.build()}var a,n,o=h.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(h.navigator.userAgent);!t.naturalWidth||o?(a=document.createElement("img"),n=document.body||document.documentElement,(this.sizingImage=a).onload=function(){e(a.width,a.height),o||n.removeChild(a)},a.src=t.src,o||(a.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",n.appendChild(a))):e(t.naturalWidth,t.naturalHeight)}},{key:"stop",value:function(){var t=this.image;t.onload=null,t.onerror=null,t.parentNode.removeChild(t),this.image=null}},{key:"build",value:function(){var t,e,i,a,n,o,h,r,s;this.sized&&!this.ready&&(t=this.element,e=this.options,i=this.image,a=t.parentNode,(s=document.createElement("div")).innerHTML='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',o=(n=s.querySelector(".".concat(c,"-container"))).querySelector(".".concat(c,"-canvas")),h=n.querySelector(".".concat(c,"-drag-box")),s=(r=n.querySelector(".".concat(c,"-crop-box"))).querySelector(".".concat(c,"-face")),this.container=a,this.cropper=n,this.canvas=o,this.dragBox=h,this.cropBox=r,this.viewBox=n.querySelector(".".concat(c,"-view-box")),this.face=s,o.appendChild(i),pt(t,A),a.insertBefore(n,t.nextSibling),this.isImg||mt(i,l),this.initPreview(),this.bind(),e.initialAspectRatio=Math.max(0,e.initialAspectRatio)||NaN,e.aspectRatio=Math.max(0,e.aspectRatio)||NaN,e.viewMode=Math.max(0,Math.min(3,Math.round(e.viewMode)))||0,pt(r,A),e.guides||pt(r.getElementsByClassName("".concat(c,"-dashed")),A),e.center||pt(r.getElementsByClassName("".concat(c,"-center")),A),e.background&&pt(n,"".concat(c,"-bg")),e.highlight||pt(s,p),e.cropBoxMovable&&(pt(s,u),wt(s,g,k)),e.cropBoxResizable||(pt(r.getElementsByClassName("".concat(c,"-line")),A),pt(r.getElementsByClassName("".concat(c,"-point")),A)),this.render(),this.ready=!0,this.setDragMode(e.dragMode),e.autoCrop&&this.crop(),this.setData(e.data),at(e.ready)&&Dt(t,"ready",e.ready,{once:!0}),Bt(t,"ready"))}},{key:"unbuild",value:function(){this.ready&&(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),mt(this.element,A))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}])&&n(t.prototype,e),a&&n(t,a),i}();return rt(It.prototype,Rt,St,r,o,t,At),It});function ImageLightBox() {
    setTimeout(function() {
        ImageLightBox_Acao()
    }, 1000)
}

function ImageLightBox_Acao() {
    $(function() {
        var t = function() { $('<div id="imagelightbox-loading"><div></div></div>').appendTo("body") },
            n = function() { $("#imagelightbox-loading").remove() },
            e = function() { $('<div id="imagelightbox-overlay"></div>').appendTo("body") },
            i = function() { $("#imagelightbox-overlay").remove() },
            o = function(t) {
                $('<button type="button" id="imagelightbox-close" title="Close"></button>').appendTo("body").on("click touchend", function() {
                    return $(this).remove(), t.quitImageLightbox(), !1 }) },
            a = function() { $("#imagelightbox-close").remove() },
            r = function() {
                var t = $('a[href="' + $("#imagelightbox").attr("src") + '"] img').attr("alt") ? $('a[href="' + $("#imagelightbox").attr("src") + '"] img').attr("alt") : ""; (t = "foto" == t ? "" : t).length > 0 && $('<div id="imagelightbox-caption">' + t + "</div>").appendTo("body") },
            g = function() { $("#imagelightbox-caption").remove() },
            c = function(t, n) {
                var e = $('<button type="button" class="imagelightbox-arrow imagelightbox-arrow-left"></button><button type="button" class="imagelightbox-arrow imagelightbox-arrow-right"></button>');
                e.appendTo("body"), e.on("click touchend", function(e) {
                    e.preventDefault();
                    var i = $(this),
                        o = $(n + '[href="' + $("#imagelightbox").attr("src") + '"]').index(n);
                    return i.hasClass("imagelightbox-arrow-left") ? (o -= 1, $(n).eq(o).length || (o = $(n).length)) : (o += 1, $(n).eq(o).length || (o = 0)), t.switchImageLightbox(o), !1
                })
            },
            l = function() { $(".imagelightbox-arrow").remove() };
        $('a[data-imagelightbox="a"]').imageLightbox({
            onStart: function() { e() },
            onEnd: function() { i(), n() },
            onLoadStart: function() { t() },
            onLoadEnd: function() { n() }
        });
        var u = $('a[data-imagelightbox="b"]').imageLightbox({
            onStart: function() { e(), o(u), c(u, 'a[data-imagelightbox="b"]') },
            onEnd: function() { i(), g(), a(), l(), n() },
            onLoadStart: function() { g(), t() },
            onLoadEnd: function() { r(), n(), $(".imagelightbox-arrow").css("display", "block") }
        })
        var u = $('a[data-imagelightbox="c"]').imageLightbox({
            onStart: function() { e(), o(u), c(u, 'a[data-imagelightbox="c"]') },
            onEnd: function() { i(), g(), a(), l(), n() },
            onLoadStart: function() { g(), t() },
            onLoadEnd: function() { r(), n(), $(".imagelightbox-arrow").css("display", "block") }
        })
    })
}! function(t, n, e, i) {
    "use strict";
    var o = function() {
            var t = e.body || e.documentElement;
            return "" == (t = t.style).WebkitTransition ? "-webkit-" : "" == t.MozTransition ? "-moz-" : "" == t.OTransition ? "-o-" : "" == t.transition && ""
        },
        a = !1 !== o(),
        r = function(t, n, e) {
            var i = {},
                a = o();
            i[a + "transform"] = "translateX(" + n + ")", i[a + "transition"] = a + "transform " + e + "s linear", t.css(i)
        },
        g = "ontouchstart" in n,
        c = n.navigator.pointerEnabled || n.navigator.msPointerEnabled,
        l = function(t) {
            if (g) return !0;
            if (!c || void 0 === t || void 0 === t.pointerType) return !1;
            if (void 0 !== t.MSPOINTER_TYPE_MOUSE) {
                if (t.MSPOINTER_TYPE_MOUSE != t.pointerType) return !0
            } else if ("mouse" != t.pointerType) return !0;
            return !1
        };
    t.fn.imageLightbox = function(i) {
        var i = t.extend({
                selector: 'id="imagelightbox"',
                allowedTypes: "png|jpg|jpeg|gif",
                animationSpeed: 250,
                preloadNext: !0,
                enableKeyboard: !0,
                quitOnEnd: !1,
                quitOnImgClick: !1,
                quitOnDocClick: !0,
                onStart: !1,
                onEnd: !1,
                onLoadStart: !1,
                onLoadEnd: !1
            }, i),
            o = t([]),
            u = t(),
            d = t(),
            f = 0,
            h = 0,
            s = 0,
            p = !1,
            m = function(n) {
                return "a" == t(n).prop("tagName").toLowerCase() && new RegExp(".(" + i.allowedTypes + ")$", "i").test(t(n).attr("href"))
            },
            v = function() {
                if (!d.length) return !0;
                var e = .8 * t(n).width(),
                    i = .9 * t(n).height(),
                    o = new Image;
                o.src = d.attr("src"), o.onload = function() {
                    if (f = o.width, h = o.height, f > e || h > i) {
                        var a = f / h > e / i ? f / e : h / i;
                        f /= a, h /= a
                    }
                    d.css({
                        width: f + "px",
                        height: h + "px",
                        top: (t(n).height() - h) / 2 + "px",
                        left: (t(n).width() - f) / 2 + "px"
                    })
                }
            },
            x = function(n) {
                if (p) return !1;
                if (n = void 0 !== n && ("left" == n ? 1 : -1), d.length) {
                    if (!1 !== n && (o.length < 2 || !0 === i.quitOnEnd && (-1 === n && 0 == o.index(u) || 1 === n && o.index(u) == o.length - 1))) return y(), !1;
                    var e = {
                        opacity: 0
                    };
                    a ? r(d, 100 * n - s + "px", i.animationSpeed / 1e3) : e.left = parseInt(d.css("left")) + 100 * n + "px", d.animate(e, i.animationSpeed, function() {
                        b()
                    }), s = 0
                }
                p = !0, !1 !== i.onLoadStart && i.onLoadStart(), setTimeout(function() {
                    d = t("<img " + i.selector + " />").attr("src", u.attr("href")).load(function() {
                        d.appendTo("body"), v();
                        var e = {
                            opacity: 1
                        };
                        if (d.css("opacity", 0), a) r(d, -100 * n + "px", 0), setTimeout(function() {
                            r(d, "0px", i.animationSpeed / 1e3)
                        }, 50);
                        else {
                            var g = parseInt(d.css("left"));
                            e.left = g + "px", d.css("left", g - 100 * n + "px")
                        }
                        if (d.animate(e, i.animationSpeed, function() {
                                p = !1, !1 !== i.onLoadEnd && i.onLoadEnd()
                            }), i.preloadNext) {
                            var c = o.eq(o.index(u) + 1);
                            c.length || (c = o.eq(0)), t("<img />").attr("src", c.attr("href")).load()
                        }
                    }).error(function() {
                        !1 !== i.onLoadEnd && i.onLoadEnd()
                    });
                    var e = 0,
                        g = 0,
                        h = 0;
                    d.on(c ? "pointerup MSPointerUp" : "click", function(t) {
                        if (t.preventDefault(), i.quitOnImgClick) return y(), !1;
                        if (l(t.originalEvent)) return !0;
                        var n = (t.pageX || t.originalEvent.pageX) - t.target.offsetLeft;
                        (u = o.eq(o.index(u) - (f / 2 > n ? 1 : -1))).length || (u = o.eq(f / 2 > n ? o.length : 0)), x(f / 2 > n ? "left" : "right")
                    }).on("touchstart pointerdown MSPointerDown", function(t) {
                        if (!l(t.originalEvent) || i.quitOnImgClick) return !0;
                        a && (h = parseInt(d.css("left"))), e = t.originalEvent.pageX || t.originalEvent.touches[0].pageX
                    }).on("touchmove pointermove MSPointerMove", function(t) {
                        if (!l(t.originalEvent) || i.quitOnImgClick) return !0;
                        t.preventDefault(), g = t.originalEvent.pageX || t.originalEvent.touches[0].pageX, s = e - g, a ? r(d, -s + "px", 0) : d.css("left", h - s + "px")
                    }).on("touchend touchcancel pointerup pointercancel MSPointerUp MSPointerCancel", function(t) {
                        if (!l(t.originalEvent) || i.quitOnImgClick) return !0;
                        Math.abs(s) > 50 ? ((u = o.eq(o.index(u) - (s < 0 ? 1 : -1))).length || (u = o.eq(s < 0 ? o.length : 0)), x(s > 0 ? "right" : "left")) : a ? r(d, "0px", i.animationSpeed / 1e3) : d.animate({
                            left: h + "px"
                        }, i.animationSpeed / 2)
                    })
                }, i.animationSpeed + 100)
            },
            b = function() {
                if (!d.length) return !1;
                d.remove(), d = t()
            },
            y = function() {
                if (!d.length) return !1;
                d.animate({
                    opacity: 0
                }, i.animationSpeed, function() {
                    b(), p = !1, !1 !== i.onEnd && i.onEnd()
                })
            };
        return t(n).on("resize", v), i.quitOnDocClick && t(e).on(g ? "touchend" : "click", function(n) {
            d.length && !t(n.target).is(d) && y()
        }), i.enableKeyboard && t(e).on("keyup", function(t) {
            if (!d.length) return !0;
            t.preventDefault(), 27 == t.keyCode && y(), 37 != t.keyCode && 39 != t.keyCode || ((u = o.eq(o.index(u) - (37 == t.keyCode ? 1 : -1))).length || (u = o.eq(37 == t.keyCode ? o.length : 0)), x(37 == t.keyCode ? "left" : "right"))
        }), t(e).on("click", this.selector, function(n) {
            return !m(this) || (n.preventDefault(), !p && (p = !1, !1 !== i.onStart && i.onStart(), u = t(this), void x()))
        }), this.each(function() {
            if (!m(this)) return !0;
            o = o.add(t(this))
        }), this.switchImageLightbox = function(t) {
            var n = o.eq(t);
            if (n.length) {
                var e = o.index(u);
                u = n, x(t < e ? "left" : "right")
            }
            return this
        }, this.quitImageLightbox = function() {
            return y(), this
        }, this
    }
}(jQuery, window, document);/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
/**
 * Owl carousel
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Proxied event handlers.
		 * @protected
		 */
		this._handlers = {};

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from being retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Widths of all items.
		 */
		this._widths = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
		this._states = {
			current: {},
			tags: {
				'initializing': [ 'busy' ],
				'animating': [ 'busy' ],
				'dragging': [ 'interacting' ]
			}
		};

		$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,
		checkVisibility: true,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',
		slideTransition: '',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * List of workers involved in the update process.
	 */
	Owl.Workers = [ {
		filter: [ 'width', 'settings' ],
		run: function() {
			this._width = this.$element.width();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var margin = this.settings.margin || '',
				grid = !this.settings.autoWidth,
				rtl = this.settings.rtl,
				css = {
					'width': 'auto',
					'margin-left': rtl ? margin : '',
					'margin-right': rtl ? '' : margin
				};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				merge = null,
				iterator = this._items.length,
				grid = !this.settings.autoWidth,
				widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var clones = [],
				items = this._items,
				settings = this.settings,
				// TODO: Should be computed from number of min width items in stage
				view = Math.max(settings.items * 2, 4),
				size = Math.ceil(items.length / 2) * 2,
				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
				append = '',
				prepend = '';

			repeat /= 2;

			while (repeat > 0) {
				// Switch to only using appended clones
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
				repeat -= 1;
			}

			this._clones = clones;

			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				size = this._clones.length + this._items.length,
				iterator = -1,
				previous = 0,
				current = 0,
				coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var padding = this.settings.stagePadding,
				coordinates = this._coordinates,
				css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};

			this.$stage.css(css);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var iterator = this._coordinates.length,
				grid = !this.settings.autoWidth,
				items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: [ 'items' ],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			this.$stage.children('.center').removeClass('center');
			if (this.settings.center) {
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	} ];

	/**
	 * Create the stage DOM element
	 */
	Owl.prototype.initializeStage = function() {
		this.$stage = this.$element.find('.' + this.settings.stageClass);

		// if the stage is already in the DOM, grab it and skip stage initialization
		if (this.$stage.length) {
			return;
		}

		this.$element.addClass(this.options.loadingClass);

		// create stage
		this.$stage = $('<' + this.settings.stageElement + '>', {
			"class": this.settings.stageClass
		}).wrap( $( '<div/>', {
			"class": this.settings.stageOuterClass
		}));

		// append stage
		this.$element.append(this.$stage.parent());
	};

	/**
	 * Create item DOM elements
	 */
	Owl.prototype.initializeItems = function() {
		var $items = this.$element.find('.owl-item');

		// if the items are already in the DOM, grab them and skip item initialization
		if ($items.length) {
			this._items = $items.get().map(function(item) {
				return $(item);
			});

			this._mergers = this._items.map(function() {
				return 1;
			});

			this.refresh();

			return;
		}

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.isVisible()) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate('width');
		}

		this.$element
			.removeClass(this.options.loadingClass)
			.addClass(this.options.loadedClass);
	};

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.enter('initializing');
		this.trigger('initialize');

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.initializeStage();
		this.initializeItems();

		// register event handlers
		this.registerEventHandlers();

		this.leave('initializing');
		this.trigger('initialized');
	};

	/**
	 * @returns {Boolean} visibility of $element
	 *                    if you know the carousel will always be visible you can set `checkVisibility` to `false` to
	 *                    prevent the expensive browser layout forced reflow the $element.is(':visible') does
	 */
	Owl.prototype.isVisible = function() {
		return this.settings.checkVisibility
			? this.$element.is(':visible')
			: true;
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class',
					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
				);
			}
		}

		this.trigger('change', { property: { name: 'settings', value: settings } });
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.options.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is('valid') && this.enter('valid');
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		this.enter('refreshing');
		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave('refreshing');
		this.trigger('refreshed');
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.isVisible()) {
			return false;
		}

		this.enter('resizing');

		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}

		this.invalidate('width');

		this.refresh();

		this.leave('resizing');
		this.trigger('resized');
	};

	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
	Owl.prototype.registerEventHandlers = function() {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
		}

		if (this.settings.touchDrag){
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};

	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ?
					stage.left + this.$stage.width() - this.width() + this.settings.margin :
					stage.left,
				y: stage.top
			};
		}

		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop()
			this.invalidate('position');
		}

		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}

			event.preventDefault();

			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};

	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var minimum = null,
			maximum = null,
			pull = null,
			delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this.difference(this._drag.stage.start, delta);

		if (!this.is('dragging')) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragEnd = function(event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this._drag.stage.current,
			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

		$(document).off('.owl.core');

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function() { return false; });
			}
		}

		if (!this.is('dragging')) {
			return;
		}

		this.leave('dragging');
		this.trigger('dragged');
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate, direction) {
		var position = -1,
			pull = 30,
			width = this.width(),
			coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				// on a left pull, check on current index
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
				// on a right pull, check on previous index
				// to do so, subtract width from value and set position = index + 1
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] !== undefined ? coordinates[index + 1] : value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		var animate = this.speed() > 0;

		this.is('animating') && this.onTransitionEnd();

		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: (this.speed() / 1000) + 's' + (
					this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''
				)
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};

	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
	Owl.prototype.is = function(state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
	Owl.prototype.invalidate = function(part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function(v, i) { return i });
	};

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = this._items.length,
			m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var settings = this.settings,
			maximum = this._coordinates.length,
			iterator,
			reciprocalItemsWidth,
			elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			if (iterator) {
				reciprocalItemsWidth = this._items[--iterator].width();
				elementWidth = this.$element.width();
				while (iterator--) {
					reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
					if (reciprocalItemsWidth > elementWidth) {
						break;
					}
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var multiplier = 1,
			newPosition = position - 1,
			coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		var current = this.current(),
			revert = null,
			distance = position - this.relative(current),
			direction = (distance > 0) - (distance < 0),
			items = this._items.length,
			minimum = this.minimum(),
			maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.isVisible()) {
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onTransitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave('animating');
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			console.warn('Can not detect viewport width.');
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', { content: content, position: position });

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	Owl.prototype.preloadAutoWidthImages = function(images) {
		images.each($.proxy(function(i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function(e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children('.cloned').remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();
		this.$stage.remove();
		this.$element
			.removeClass(this.options.refreshClass)
			.removeClass(this.options.loadingClass)
			.removeClass(this.options.loadedClass)
			.removeClass(this.options.rtlClass)
			.removeClass(this.options.dragClass)
			.removeClass(this.options.grabClass)
			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
			.removeData('owl.carousel');
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
	 * Enters a state.
	 * @param name - The state name.
	 */
	Owl.prototype.enter = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
	 * Leaves a state.
	 * @param name - The state name.
	 */
	Owl.prototype.leave = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
	Owl.prototype.register = function(object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function(e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */
	Owl.prototype.pointer = function(event) {
		var result = { x: null, y: null };

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ?
			event.touches[0] : event.changedTouches && event.changedTouches.length ?
				event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */
	Owl.prototype.isNumeric = function(number) {
		return !isNaN(parseFloat(number));
	};

	/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */
	Owl.prototype.difference = function(first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */
	$.fn.owlCarousel = function(option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function() {
			var $this = $(this),
				data = $this.data('owl.carousel');

			if (!data) {
				data = new Owl(this, typeof option == 'object' && option);
				$this.data('owl.carousel', data);

				$.each([
					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
				], function(i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([ event ]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([ event ]);
						}
					}, data));
				});
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto refresh plugin.
	 * @class The Auto Refresh Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoRefresh = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */
		this._interval = null;

		/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._visible = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};

	/**
	 * Watches the element.
	 */
	AutoRefresh.prototype.watch = function() {
		if (this._interval) {
			return;
		}

		this._visible = this._core.isVisible();
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};

	/**
	 * Refreshes the element.
	 */
	AutoRefresh.prototype.refresh = function() {
		if (this._core.isVisible() === this._visible) {
			return;
		}

		this._visible = !this._visible;

		this._core.$element.toggleClass('owl-hidden', !this._visible);

		this._visible && (this._core.invalidate('width') && this._core.refresh());
	};

	/**
	 * Destroys the plugin.
	 */
	AutoRefresh.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this._interval);

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);
					//TODO: Need documentation for this new option
					if (settings.lazyLoadEager > 0) {
						n += settings.lazyLoadEager;
						// If the carousel is looping also preload images that are to the "left"
						if (settings.loop) {
              position -= settings.lazyLoadEager;
              n++;
            }
					}

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false,
		lazyLoadEager: 0
	};

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
                url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src') || $element.attr('data-srcset');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
            } else if ($element.is('source')) {
                $element.one('load.owl.lazy', $.proxy(function() {
                    this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                }, this)).attr('srcset', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url("' + url + '")',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		this._previousHeight = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name === 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight
					&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
		this._intervalId = null;
		var refThis = this;

		// These changes have been taken from a PR by gavrochelegnou proposed in #1575
		// and have been made compatible with the latest jQuery version
		$(window).on('load', function() {
			if (refThis._core.settings.autoHeight) {
				refThis.update();
			}
		});

		// Autoresize the height of the carousel when window is resized
		// When carousel has images, the height is dependent on the width
		// and should also change on resize
		$(window).resize(function() {
			if (refThis._core.settings.autoHeight) {
				if (refThis._intervalId != null) {
					clearTimeout(refThis._intervalId);
				}

				refThis._intervalId = setTimeout(function() {
					refThis.update();
				}, 250);
			}
		});

	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		var start = this._core._current,
			end = start + this._core.settings.items,
			lazyLoadEnabled = this._core.settings.lazyLoad,
			visible = this._core.$stage.children().toArray().slice(start, end),
			heights = [],
			maxheight = 0;

		$.each(visible, function(index, item) {
			heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
			maxheight = this._previousHeight;
		}

		this._previousHeight = maxheight;

		this._core.$stage.parent()
			.height(maxheight)
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] !== 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
				}
			}, this),
			'resize.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				var $element = $(e.content).find('.owl-video');

				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {
			var type = (function() {
					if (target.attr('data-vimeo-id')) {
						return 'vimeo';
					} else if (target.attr('data-vzaar-id')) {
						return 'vzaar'
					} else {
						return 'youtube';
					}
				})(),
				id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
				width = target.attr('data-width') || this._core.settings.videoWidth,
				height = target.attr('data-height') || this._core.settings.videoHeight,
				url = target.attr('href');

		if (url) {

			/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if (id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {
		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'width:' + video.width + 'px;height:' + video.height + 'px;' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = $('<div/>',{
						"class": 'owl-video-tn ' + lazyClass,
						"srcType": path
					});
				} else {
					tnLink = $( '<div/>', {
						"class": "owl-video-tn",
						"style": 'opacity:1;background-image:url(' + path + ')'
					});
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap( $( '<div/>', {
			"class": "owl-video-wrapper",
			"style": dimensions
		}));

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
	Video.prototype.play = function(event) {
		var target = $(event.target),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html,
			iframe;

		if (this._playing) {
			return;
		}

		this._core.enter('playing');
		this._core.trigger('play', null, 'video');

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		html = $( '<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>' );
		html.attr( 'height', height );
		html.attr( 'width', width );
		if (video.type === 'youtube') {
			html.attr( 'src', '//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id );
		} else if (video.type === 'vimeo') {
			html.attr( 'src', '//player.vimeo.com/video/' + video.id + '?autoplay=1' );
		} else if (video.type === 'vzaar') {
			html.attr( 'src', '//view.vzaar.com/' + video.id + '/player?autoplay=true' );
		}

		iframe = $(html).wrap( '<div class="owl-video-frame" />' ).insertAfter(item.find('.owl-video'));

		this._playing = item.addClass('owl-video-playing');
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {
		var element = document.fullscreenElement || document.mozFullScreenElement ||
				document.webkitFullscreenElement;

		return element && $(element).parent().hasClass('owl-video-frame');
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear)
				.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing);
		}

		if (incoming) {
			next.one($.support.animation.end, clear)
				.addClass('animated owl-animated-in')
				.addClass(incoming);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @author Tom De Caluwé
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * The autoplay timeout id.
		 * @type {Number}
		 */
		this._call = null;

		/**
		 * Depending on the state of the plugin, this variable contains either
		 * the start time of the timer or the current timer value if it's
		 * paused. Since we start in a paused state we initialize the timer
		 * value.
		 * @type {Number}
		 */
		this._time = 0;

		/**
		 * Stores the timeout currently used.
		 * @type {Number}
		 */
		this._timeout = 0;

		/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
		this._paused = true;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === 'position' && this._paused) {
					// Reset the timer. This code is triggered when the position
					// of the carousel was changed through user interaction.
					this._time = 0;
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function(e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * Transition to the next slide and set a timeout for the next transition.
	 * @private
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype._next = function(speed) {
		this._call = window.setTimeout(
			$.proxy(this._next, this, speed),
			this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
		);

		if (this._core.is('interacting') || document.hidden) {
			return;
		}
		this._core.next(speed || this._core.settings.autoplaySpeed);
	}

	/**
	 * Reads the current timer value when the timer is playing.
	 * @public
	 */
	Autoplay.prototype.read = function() {
		return new Date().getTime() - this._time;
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		var elapsed;

		if (!this._core.is('rotating')) {
			this._core.enter('rotating');
		}

		timeout = timeout || this._core.settings.autoplayTimeout;

		// Calculate the elapsed time since the last transition. If the carousel
		// wasn't playing this calculation will yield zero.
		elapsed = Math.min(this._time % (this._timeout || timeout), timeout);

		if (this._paused) {
			// Start the clock.
			this._time = this.read();
			this._paused = false;
		} else {
			// Clear the active timeout to allow replacement.
			window.clearTimeout(this._call);
		}

		// Adjust the origin of the timer to match the new timeout value.
		this._time += this.read() % timeout - elapsed;

		this._timeout = timeout;
		this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		if (this._core.is('rotating')) {
			// Reset the clock.
			this._time = 0;
			this._paused = true;

			window.clearTimeout(this._call);
			this._core.leave('rotating');
		}
	};

	/**
	 * Pauses the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		if (this._core.is('rotating') && !this._paused) {
			// Pause the clock.
			this._time = this.read();
			this._paused = true;

			window.clearTimeout(this._call);
		}
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		this.stop();

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navText: [
			'<span aria-label="' + 'Previous' + '"></span>',
			'<span aria-label="' + 'Next' + '"></span>'
		],
		navSpeed: false,
		navElement: 'button type="button" role="presentation"',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [
			'owl-prev plugin_seta_left',
			'owl-next plugin_seta_right'
		],
		slideBy: 1,
		dotClass: 'owl-dot plugin_paginacao_item',
		dotsClass: 'owl-dots plugin_paginacao',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var override,
			settings = this._core.settings;

		// create DOM structure for relative navigation
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
			: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$previous = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[0])
			.html(settings.navText[0])
			.prependTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.prev(settings.navSpeed);
			}, this));
		this._controls.$next = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[1])
			.html(settings.navText[1])
			.appendTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.next(settings.navSpeed);
			}, this));

		// create DOM structure for absolute navigation
		if (!settings.dotsData) {
			this._templates = [ $('<button role="button">')
				.addClass(settings.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
			: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$absolute.on('click', 'button', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$absolute)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, settings.dotsSpeed);
		}, this));

		/*$el.on('focusin', function() {
			$(document).off(".carousel");

			$(document).on('keydown.carousel', function(e) {
				if(e.keyCode == 37) {
					$el.trigger('prev.owl')
				}
				if(e.keyCode == 39) {
					$el.trigger('next.owl')
				}
			});
		});*/

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override, settings;
		settings = this._core.settings;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			if (control === '$relative' && settings.navContainer) {
				this._controls[control].html('');
			} else {
				this._controls[control].remove();
			}
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			maximum = this._core.maximum(true),
			settings = this._core.settings,
			size = settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items;

		if (settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}

		if (settings.dots || settings.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};

	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference,
			settings = this._core.settings,
			disabled = this._core.items().length <= settings.items,
			index = this._core.relative(this._core.current()),
			loop = settings.loop || settings.rewind;

		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

		if (settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}

		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;

			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}

			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items)
		};
	};

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function(page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			settings = this._core.settings;

		if (settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}

		return position;
	};

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

					if (!hash) {
						return;
					}

					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
						hash = $.map(this._hashes, function(item, hash) {
							return item === current ? hash : null;
						}).join();

					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}

					window.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.3.4
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	var style = $('<support>').get(0).style,
		prefixes = 'Webkit Moz O ms'.split(' '),
		events = {
			transition: {
				end: {
					WebkitTransition: 'webkitTransitionEnd',
					MozTransition: 'transitionend',
					OTransition: 'oTransitionEnd',
					transition: 'transitionend'
				}
			},
			animation: {
				end: {
					WebkitAnimation: 'webkitAnimationEnd',
					MozAnimation: 'animationend',
					OAnimation: 'oAnimationEnd',
					animation: 'animationend'
				}
			}
		},
		tests = {
			csstransforms: function() {
				return !!test('transform');
			},
			csstransforms3d: function() {
				return !!test('perspective');
			},
			csstransitions: function() {
				return !!test('transition');
			},
			cssanimations: function() {
				return !!test('animation');
			}
		};

	function test(property, prefixed) {
		var result = false,
			upper = property.charAt(0).toUpperCase() + property.slice(1);

		$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
			if (style[property] !== undefined) {
				result = prefixed ? property : true;
				return false;
			}
		});

		return result;
	}

	function prefixed(property) {
		return test(property, true);
	}

	if (tests.csstransitions()) {
		/* jshint -W053 */
		$.support.transition = new String(prefixed('transition'))
		$.support.transition.end = events.transition.end[ $.support.transition ];
	}

	if (tests.cssanimations()) {
		/* jshint -W053 */
		$.support.animation = new String(prefixed('animation'))
		$.support.animation.end = events.animation.end[ $.support.animation ];
	}

	if (tests.csstransforms()) {
		/* jshint -W053 */
		$.support.transform = new String(prefixed('transform'));
		$.support.transform3d = tests.csstransforms3d();
	}

})(window.Zepto || window.jQuery, window, document);
!function(n){"function"==typeof define&&define.amd?define(["jquery"],n):"undefined"!=typeof exports?module.exports=n(require("jquery")):n(jQuery)}(function(n){"use strict";n.fn.priceFormat=function(t){var t=n.extend(!0,{},n.fn.priceFormat.defaults,t);window.ctrl_down=!1;var i=!1;return n(window).bind("keyup keydown",function(n){return window.ctrl_down=n.ctrlKey,!0}),n(this).bind("keyup keydown",function(n){return i=n.metaKey,!0}),this.each(function(){function r(n){h.is("input")?h.val(n):h.html(n),h.trigger("pricechange")}function e(){return m=h.is("input")?h.val():h.html()}function o(n){for(var t="",i=0;i<n.length;i++){var r=n.charAt(i);0==t.length&&0==r&&(r=!1),r&&r.match(v)&&(x?t.length<x&&(t+=r):t+=r)}return t}function f(n){for(;n.length<_+1;)n="0"+n;return n}function u(t,i){if(!i&&(""===t||t==u("0",!0))&&P)return"";var r=f(o(t)),e="",a=0;0==_&&(y="",c="");var c=r.substr(r.length-_,_),s=r.substr(0,r.length-_);if(r=C?s+y+c:"0"!==s?s+y+c:y+c,b||""!=n.trim(b)){for(var l=s.length;l>0;l--){var d=s.substr(l-1,1);a++,a%3==0&&(d=b+d),e=d+e}e.substr(0,1)==b&&(e=e.substring(1,e.length)),r=0==_?e:e+y+c}return!F||0==s&&0==c||(r=t.indexOf("-")!=-1&&t.indexOf("+")<t.indexOf("-")?"-"+r:O?"+"+r:""+r),g&&(r=g+r),w&&(r+=w),r}function a(n){var t=n.keyCode?n.keyCode:n.which,e=String.fromCharCode(t),o=!1,f=m,a=u(f+e);(t>=48&&t<=57||t>=96&&t<=105)&&(o=!0),192==t&&(o=!0),8==t&&(o=!0),9==t&&(o=!0),13==t&&(o=!0),46==t&&(o=!0),37==t&&(o=!0),39==t&&(o=!0),!F||189!=t&&109!=t&&173!=t||(o=!0),!O||187!=t&&107!=t&&61!=t||(o=!0),t>=16&&t<=20&&(o=!0),27==t&&(o=!0),t>=33&&t<=40&&(o=!0),t>=44&&t<=46&&(o=!0),(window.ctrl_down||i)&&(86==t&&(o=!0),67==t&&(o=!0),88==t&&(o=!0),82==t&&(o=!0),84==t&&(o=!0),76==t&&(o=!0),87==t&&(o=!0),81==t&&(o=!0),78==t&&(o=!0),65==t&&(o=!0)),o||(n.preventDefault(),n.stopPropagation(),f!=a&&r(a))}function c(){var n=e(),t=u(n);n!=t&&r(t);var i=u("0",!0);t==i&&"0"!=n&&P&&r("")}function s(){h.val(g+e())}function l(){h.val(e()+w)}function d(){if(""!=n.trim(g)&&S){var t=e().split(g);r(t[1])}}function p(){if(""!=n.trim(w)&&k){var t=e().split(w);r(t[0])}}var h=n(this),m="",v=/[0-9]/;m=h.is("input")?h.val():h.html();var g=t.prefix,w=t.suffix,y=t.centsSeparator,b=t.thousandsSeparator,x=t.limit,_=t.centsLimit,S=t.clearPrefix,k=t.clearSuffix,F=t.allowNegative,O=t.insertPlusSign,P=t.clearOnEmpty,C=t.leadingZero;O&&(F=!0),h.bind("keydown.price_format",a),h.bind("keyup.price_format",c),h.bind("focusout.price_format",c),S&&(h.bind("focusout.price_format",function(){d()}),h.bind("focusin.price_format",function(){s()})),k&&(h.bind("focusout.price_format",function(){p()}),h.bind("focusin.price_format",function(){l()})),e().length>0&&(c(),d(),p())})},n.fn.unpriceFormat=function(){return n(this).unbind(".price_format")},n.fn.unmask=function(){var t,i="";t=n(this).is("input")?n(this).val()||[]:n(this).html();for(var r=0;r<t.length;r++)isNaN(t[r])&&"-"!=t[r]||(i+=t[r]);return i},n.fn.priceToFloat=function(){return n(this).is("input")?field=n(this).val()||[]:field=n(this).html(),parseFloat(field.replace(/[^0-9\-\.]/g,""))},n.fn.priceFormat.defaults={prefix:"US$ ",suffix:"",centsSeparator:".",thousandsSeparator:",",limit:!1,centsLimit:2,clearPrefix:!1,clearSufix:!1,allowNegative:!1,insertPlusSign:!1,clearOnEmpty:!1,leadingZero:!0}});// jQuery Mask Plugin v1.13.4
// github.com/igorescobar/jQuery-Mask-Plugin
(function(b){"function"===typeof define&&define.amd?define(["jquery"],b):"object"===typeof exports?module.exports=b(require("jquery")):b(jQuery||Zepto)})(function(b){var y=function(a,c,d){a=b(a);var g=this,k=a.val(),l;c="function"===typeof c?c(a.val(),void 0,a,d):c;var e={invalid:[],getCaret:function(){try{var q,b=0,e=a.get(0),f=document.selection,c=e.selectionStart;if(f&&-1===navigator.appVersion.indexOf("MSIE 10"))q=f.createRange(),q.moveStart("character",a.is("input")?-a.val().length:-a.text().length),
b=q.text.length;else if(c||"0"===c)b=c;return b}catch(d){}},setCaret:function(q){try{if(a.is(":focus")){var b,c=a.get(0);c.setSelectionRange?c.setSelectionRange(q,q):c.createTextRange&&(b=c.createTextRange(),b.collapse(!0),b.moveEnd("character",q),b.moveStart("character",q),b.select())}}catch(f){}},events:function(){a.on("input.mask keyup.mask",e.behaviour).on("paste.mask drop.mask",function(){setTimeout(function(){a.keydown().keyup()},100)}).on("change.mask",function(){a.data("changed",!0)}).on("blur.mask",
function(){k===a.val()||a.data("changed")||a.triggerHandler("change");a.data("changed",!1)}).on("blur.mask",function(){k=a.val()}).on("focus.mask",function(a){!0===d.selectOnFocus&&b(a.target).select()}).on("focusout.mask",function(){d.clearIfNotMatch&&!l.test(e.val())&&e.val("")})},getRegexMask:function(){for(var a=[],b,e,f,d,h=0;h<c.length;h++)(b=g.translation[c.charAt(h)])?(e=b.pattern.toString().replace(/.{1}$|^.{1}/g,""),f=b.optional,(b=b.recursive)?(a.push(c.charAt(h)),d={digit:c.charAt(h),
pattern:e}):a.push(f||b?e+"?":e)):a.push(c.charAt(h).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"));a=a.join("");d&&(a=a.replace(new RegExp("("+d.digit+"(.*"+d.digit+")?)"),"($1)?").replace(new RegExp(d.digit,"g"),d.pattern));return new RegExp(a)},destroyEvents:function(){a.off("input keydown keyup paste drop blur focusout ".split(" ").join(".mask "))},val:function(b){var c=a.is("input")?"val":"text";if(0<arguments.length){if(a[c]()!==b)a[c](b);c=a}else c=a[c]();return c},getMCharsBeforeCount:function(a,
b){for(var e=0,f=0,d=c.length;f<d&&f<a;f++)g.translation[c.charAt(f)]||(a=b?a+1:a,e++);return e},caretPos:function(a,b,d,f){return g.translation[c.charAt(Math.min(a-1,c.length-1))]?Math.min(a+d-b-f,d):e.caretPos(a+1,b,d,f)},behaviour:function(a){a=a||window.event;e.invalid=[];var c=a.keyCode||a.which;if(-1===b.inArray(c,g.byPassKeys)){var d=e.getCaret(),f=e.val().length,n=d<f,h=e.getMasked(),k=h.length,m=e.getMCharsBeforeCount(k-1)-e.getMCharsBeforeCount(f-1);e.val(h);!n||65===c&&a.ctrlKey||(8!==
c&&46!==c&&(d=e.caretPos(d,f,k,m)),e.setCaret(d));return e.callbacks(a)}},getMasked:function(a){var b=[],k=e.val(),f=0,n=c.length,h=0,l=k.length,m=1,p="push",u=-1,t,w;d.reverse?(p="unshift",m=-1,t=0,f=n-1,h=l-1,w=function(){return-1<f&&-1<h}):(t=n-1,w=function(){return f<n&&h<l});for(;w();){var x=c.charAt(f),v=k.charAt(h),r=g.translation[x];if(r)v.match(r.pattern)?(b[p](v),r.recursive&&(-1===u?u=f:f===t&&(f=u-m),t===u&&(f-=m)),f+=m):r.optional?(f+=m,h-=m):r.fallback?(b[p](r.fallback),f+=m,h-=m):e.invalid.push({p:h,
v:v,e:r.pattern}),h+=m;else{if(!a)b[p](x);v===x&&(h+=m);f+=m}}a=c.charAt(t);n!==l+1||g.translation[a]||b.push(a);return b.join("")},callbacks:function(b){var g=e.val(),l=g!==k,f=[g,b,a,d],n=function(a,b,c){"function"===typeof d[a]&&b&&d[a].apply(this,c)};n("onChange",!0===l,f);n("onKeyPress",!0===l,f);n("onComplete",g.length===c.length,f);n("onInvalid",0<e.invalid.length,[g,b,a,e.invalid,d])}};g.mask=c;g.options=d;g.remove=function(){var b=e.getCaret();e.destroyEvents();e.val(g.getCleanVal());e.setCaret(b-
e.getMCharsBeforeCount(b));return a};g.getCleanVal=function(){return e.getMasked(!0)};g.init=function(c){c=c||!1;d=d||{};g.byPassKeys=b.jMaskGlobals.byPassKeys;g.translation=b.jMaskGlobals.translation;g.translation=b.extend({},g.translation,d.translation);g=b.extend(!0,{},g,d);l=e.getRegexMask();!1===c?(d.placeholder&&a.attr("placeholder",d.placeholder),b("input").length&&!1==="oninput"in b("input")[0]&&"on"===a.attr("autocomplete")&&a.attr("autocomplete","off"),e.destroyEvents(),e.events(),c=e.getCaret(),
e.val(e.getMasked()),e.setCaret(c+e.getMCharsBeforeCount(c,!0))):(e.events(),e.val(e.getMasked()))};g.init(!a.is("input"))};b.maskWatchers={};var A=function(){var a=b(this),c={},d=a.attr("data-mask");a.attr("data-mask-reverse")&&(c.reverse=!0);a.attr("data-mask-clearifnotmatch")&&(c.clearIfNotMatch=!0);"true"===a.attr("data-mask-selectonfocus")&&(c.selectOnFocus=!0);if(z(a,d,c))return a.data("mask",new y(this,d,c))},z=function(a,c,d){d=d||{};var g=b(a).data("mask"),k=JSON.stringify;a=b(a).val()||
b(a).text();try{return"function"===typeof c&&(c=c(a)),"object"!==typeof g||k(g.options)!==k(d)||g.mask!==c}catch(l){}};b.fn.mask=function(a,c){c=c||{};var d=this.selector,g=b.jMaskGlobals,k=b.jMaskGlobals.watchInterval,l=function(){if(z(this,a,c))return b(this).data("mask",new y(this,a,c))};b(this).each(l);d&&""!==d&&g.watchInputs&&(clearInterval(b.maskWatchers[d]),b.maskWatchers[d]=setInterval(function(){b(document).find(d).each(l)},k));return this};b.fn.unmask=function(){clearInterval(b.maskWatchers[this.selector]);
delete b.maskWatchers[this.selector];return this.each(function(){var a=b(this).data("mask");a&&a.remove().removeData("mask")})};b.fn.cleanVal=function(){return this.data("mask").getCleanVal()};b.applyDataMask=function(a){a=a||b.jMaskGlobals.maskElements;(a instanceof b?a:b(a)).filter(b.jMaskGlobals.dataMaskAttr).each(A)};var p={maskElements:"input,td,span,div",dataMaskAttr:"*[data-mask]",dataMask:!0,watchInterval:300,watchInputs:!0,watchDataMask:!1,byPassKeys:[9,16,17,18,36,37,38,39,40,91],translation:{0:{pattern:/\d/},
9:{pattern:/\d/,optional:!0},"#":{pattern:/\d/,recursive:!0},A:{pattern:/[a-zA-Z0-9]/},S:{pattern:/[a-zA-Z]/}}};b.jMaskGlobals=b.jMaskGlobals||{};p=b.jMaskGlobals=b.extend(!0,{},p,b.jMaskGlobals);p.dataMask&&b.applyDataMask();setInterval(function(){b.jMaskGlobals.watchDataMask&&b.applyDataMask()},p.watchInterval)});

	function mascaras(){

	    /* Mascara */
			$("input.cpf, input#cpf").mask("000.000.000-00");
			$("input.cnpj, input#cnpj").mask("00.000.000/0000-00");
			$("input.cep, input#cep").mask("00.000-000");

			$('input.date').mask("00/00/0000");
			$('input.data').mask("00/00/0000");
			$('input.data_dia_mes').mask("00/00");
			$('input.hora').mask("00:00");

			$("input.placa").mask("SSS 0000");

			$("input.cartao_numero").mask("0000 0000 0000 0000");
			$('input.cartao_validade').mask("00/0000")
			$('input.cartao_cvv').mask("000")

			//, { reverse : true} preencher da esquerda para a direita

			// TELEFONE 8 OU 9 DIGITOS
				$("input[type=tel].telefone8").mask("(00) 0000-00000");
				$("input[type=tel].telefone9").mask("(00) 00000-0000");

				$("input[type=tel]").keyup(function (event) { tel_digitos(this); });
				$(document).ready(function() {
					$("input[type=tel]").each(function() {
						tel_digitos(this);
					})
				});

				function tel_digitos($e){
					setTimeout(function(){
						if($($e).val().length > 14){
							$($e).removeClass('telefone8').addClass('telefone9');
						} else {
							$($e).removeClass('telefone9').addClass('telefone8');
						}
					}, 500);
				}
        	// TELEFONE 8 OU 9 DIGITOS
	    /* Mascara */

	    /* Preco */
			$("input.preco").each(function() {
				$limit = $(this).attr('limit') ? parseInt($(this).attr('limit')) : '';
				$casas = $(this).attr('casas') ? parseInt($(this).attr('casas')) : 2;
				$(this).priceFormat({
					prefix: '',
					suffix: '',
					centsSeparator: '.',
					thousandsSeparator: '',
					limit: $limit,
					centsLimit: $casas,
				});
			});

			$(".preco1").each(function() {
				$limit = $(this).attr('limit') ? parseInt($(this).attr('limit')) : '';
				$casas = $(this).attr('casas') ? parseInt($(this).attr('casas')) : 2;
				$(this).priceFormat({
					prefix: '',
					suffix: '',
					centsSeparator: ',',
					thousandsSeparator: '.',
					limit: $limit,
					centsLimit: $casas,
				});
			});

			$(".preco_xxx").each(function() {
				$limit = $(this).attr('limit') ? parseInt($(this).attr('limit')) : '';
				$casas = $(this).attr('casas') ? parseInt($(this).attr('casas')) : 2;
				$(this).priceFormat({
					prefix: 'R$ ',
					suffix: '',
					centsSeparator: ',',
					thousandsSeparator: '.',
					limit: $limit,
					centsLimit: $casas,
				});
			});
			$(".preco_temp").each(function() {
				$limit = $(this).attr('limit') ? parseInt($(this).attr('limit')) : '';
				$casas = $(this).attr('casas') ? parseInt($(this).attr('casas')) : 2;
				$(this).priceFormat({
					prefix: '',
					suffix: '',
					centsSeparator: ',',
					thousandsSeparator: '.',
					limit: $limit,
					centsLimit: $casas,
				});
			});
	    /* Preco */

			$(".notas_mask").each(function() {
				$limit = '';
				$casas = 1;
				$(this).priceFormat({
					prefix: '',
					suffix: '',
					centsSeparator: ',',
					thousandsSeparator: '',
					limit: $limit,
					centsLimit: $casas,
				});
			});

	};

	function mascaras1(){

	    /* Mascara */
			if(browser() != 'chrome'){
				$('input[type="text_date"]').mask("00/00/0000", {placeholder: "dd/mm/YYYY"}).datepicker();
				$('input[type="text_datetime-local"]').mask("00/00/0000 00:00", {placeholder: "dd/mm/YYYY --:--"});

			} else {
				//$(document).on('click','input[type="date"]',function(){
					//$(this).siblings('[type="date"]').removeClass('hidden').focus().click();
					//$(this).remove();
				//});
			}

			$("input.date").mask("00/00/0000").datepicker();
	    /* Mascara */

	};!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){var t=function(){if(e&&e.fn&&e.fn.select2&&e.fn.select2.amd)t=e.fn.select2.amd;var t;return function(){if(!t||!t.requirejs){t?n=t:t={};var e,n,i;!function(t){function o(e,t){return _.call(e,t)}function r(e,t){var n,i,o,r,s,a,l,c,u,d,p,h=t&&t.split("/"),f=y.map,g=f&&f["*"]||{};if(e&&"."===e.charAt(0))if(t){for(h=h.slice(0,h.length-1),s=(e=e.split("/")).length-1,y.nodeIdCompat&&b.test(e[s])&&(e[s]=e[s].replace(b,"")),e=h.concat(e),u=0;u<e.length;u+=1)if("."===(p=e[u]))e.splice(u,1),u-=1;else if(".."===p){if(1===u&&(".."===e[2]||".."===e[0]))break;u>0&&(e.splice(u-1,2),u-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((h||g)&&f){for(u=(n=e.split("/")).length;u>0;u-=1){if(i=n.slice(0,u).join("/"),h)for(d=h.length;d>0;d-=1)if((o=f[h.slice(0,d).join("/")])&&(o=o[i])){r=o,a=u;break}if(r)break;!l&&g&&g[i]&&(l=g[i],c=u)}!r&&l&&(r=l,a=c),r&&(n.splice(0,a,r),e=n.join("/"))}return e}function s(e,n){return function(){return h.apply(t,$.call(arguments,0).concat([e,n]))}}function a(e){return function(t){return r(t,e)}}function l(e){return function(t){m[e]=t}}function c(e){if(o(v,e)){var n=v[e];delete v[e],w[e]=!0,p.apply(t,n)}if(!o(m,e)&&!o(w,e))throw new Error("No "+e);return m[e]}function u(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function d(e){return function(){return y&&y.config&&y.config[e]||{}}}var p,h,f,g,m={},v={},y={},w={},_=Object.prototype.hasOwnProperty,$=[].slice,b=/\.js$/;f=function(e,t){var n,i=u(e),o=i[0];return e=i[1],o&&(n=c(o=r(o,t))),o?e=n&&n.normalize?n.normalize(e,a(t)):r(e,t):(o=(i=u(e=r(e,t)))[0],e=i[1],o&&(n=c(o))),{f:o?o+"!"+e:e,n:e,pr:o,p:n}},g={require:function(e){return s(e)},exports:function(e){var t=m[e];return void 0!==t?t:m[e]={}},module:function(e){return{id:e,uri:"",exports:m[e],config:d(e)}}},p=function(e,n,i,r){var a,u,d,p,h,y,_=[],$=typeof i;if(r=r||e,"undefined"===$||"function"===$){for(n=!n.length&&i.length?["require","exports","module"]:n,h=0;h<n.length;h+=1)if(p=f(n[h],r),"require"===(u=p.f))_[h]=g.require(e);else if("exports"===u)_[h]=g.exports(e),y=!0;else if("module"===u)a=_[h]=g.module(e);else if(o(m,u)||o(v,u)||o(w,u))_[h]=c(u);else{if(!p.p)throw new Error(e+" missing "+u);p.p.load(p.n,s(r,!0),l(u),{}),_[h]=m[u]}d=i?i.apply(m[e],_):void 0,e&&(a&&a.exports!==t&&a.exports!==m[e]?m[e]=a.exports:d===t&&y||(m[e]=d))}else e&&(m[e]=i)},e=n=h=function(e,n,i,o,r){if("string"==typeof e)return g[e]?g[e](n):c(f(e,n).f);if(!e.splice){if((y=e).deps&&h(y.deps,y.callback),!n)return;n.splice?(e=n,n=i,i=null):e=t}return n=n||function(){},"function"==typeof i&&(i=o,o=r),o?p(t,e,n,i):setTimeout(function(){p(t,e,n,i)},4),h},h.config=function(e){return h(e)},e._defined=m,(i=function(e,t,n){t.splice||(n=t,t=[]),o(m,e)||o(v,e)||(v[e]=[e,t,n])}).amd={jQuery:!0}}(),t.requirejs=e,t.require=n,t.define=i}}(),t.define("almond",function(){}),t.define("jquery",[],function(){var t=e||$;return null==t&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),t}),t.define("select2/utils",["jquery"],function(e){function t(e){var t=e.prototype,n=[];for(var i in t)"function"==typeof t[i]&&"constructor"!==i&&n.push(i);return n}var n={};n.Extend=function(e,t){function n(){this.constructor=e}var i={}.hasOwnProperty;for(var o in t)i.call(t,o)&&(e[o]=t[o]);return n.prototype=t.prototype,e.prototype=new n,e.__super__=t.prototype,e},n.Decorate=function(e,n){function i(){var t=Array.prototype.unshift,i=n.prototype.constructor.length,o=e.prototype.constructor;i>0&&(t.call(arguments,e.prototype.constructor),o=n.prototype.constructor),o.apply(this,arguments)}function o(){this.constructor=i}var r=t(n),s=t(e);n.displayName=e.displayName,i.prototype=new o;for(var a=0;a<s.length;a++){var l=s[a];i.prototype[l]=e.prototype[l]}for(var c=0;c<r.length;c++){var u=r[c];i.prototype[u]=function(e){var t=function(){};e in i.prototype&&(t=i.prototype[e]);var o=n.prototype[e];return function(){return Array.prototype.unshift.call(arguments,t),o.apply(this,arguments)}}(u)}return i};var i=function(){this.listeners={}};return i.prototype.on=function(e,t){this.listeners=this.listeners||{},e in this.listeners?this.listeners[e].push(t):this.listeners[e]=[t]},i.prototype.trigger=function(e){var t=Array.prototype.slice;this.listeners=this.listeners||{},e in this.listeners&&this.invoke(this.listeners[e],t.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},i.prototype.invoke=function(e,t){for(var n=0,i=e.length;n<i;n++)e[n].apply(this,t)},n.Observable=i,n.generateChars=function(e){for(var t="",n=0;n<e;n++)t+=Math.floor(36*Math.random()).toString(36);return t},n.bind=function(e,t){return function(){e.apply(t,arguments)}},n._convertData=function(e){for(var t in e){var n=t.split("-"),i=e;if(1!==n.length){for(var o=0;o<n.length;o++){var r=n[o];(r=r.substring(0,1).toLowerCase()+r.substring(1))in i||(i[r]={}),o==n.length-1&&(i[r]=e[t]),i=i[r]}delete e[t]}}return e},n.hasScroll=function(t,n){var i=e(n),o=n.style.overflowX,r=n.style.overflowY;return(o!==r||"hidden"!==r&&"visible"!==r)&&("scroll"===o||"scroll"===r||(i.innerHeight()<n.scrollHeight||i.innerWidth()<n.scrollWidth))},n.escapeMarkup=function(e){var t={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof e?e:String(e).replace(/[&<>"'\/\\]/g,function(e){return t[e]})},n.appendMany=function(t,n){if("1.7"===e.fn.jquery.substr(0,3)){var i=e();e.map(n,function(e){i=i.add(e)}),n=i}t.append(n)},n}),t.define("select2/results",["jquery","./utils"],function(e,t){function n(e,t,i){this.$element=e,this.data=i,this.options=t,n.__super__.constructor.call(this)}return t.Extend(n,t.Observable),n.prototype.render=function(){var t=e('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&t.attr("aria-multiselectable","true"),this.$results=t,t},n.prototype.clear=function(){this.$results.empty()},n.prototype.displayMessage=function(t){var n=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var i=e('<li role="treeitem" class="select2-results__option"></li>'),o=this.options.get("translations").get(t.message);i.append(n(o(t.args))),this.$results.append(i)},n.prototype.append=function(e){this.hideLoading();var t=[];if(null!=e.results&&0!==e.results.length){e.results=this.sort(e.results);for(var n=0;n<e.results.length;n++){var i=e.results[n],o=this.option(i);t.push(o)}this.$results.append(t)}else 0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"})},n.prototype.position=function(e,t){t.find(".select2-results").append(e)},n.prototype.sort=function(e){return this.options.get("sorter")(e)},n.prototype.setClasses=function(){var t=this;this.data.current(function(n){var i=e.map(n,function(e){return e.id.toString()}),o=t.$results.find(".select2-results__option[aria-selected]");o.each(function(){var t=e(this),n=e.data(this,"data"),o=""+n.id;null!=n.element&&n.element.selected||null==n.element&&e.inArray(o,i)>-1?t.attr("aria-selected","true"):t.attr("aria-selected","false")});var r=o.filter("[aria-selected=true]");r.length>0?r.first().trigger("mouseenter"):o.first().trigger("mouseenter")})},n.prototype.showLoading=function(e){this.hideLoading();var t={disabled:!0,loading:!0,text:this.options.get("translations").get("searching")(e)},n=this.option(t);n.className+=" loading-results",this.$results.prepend(n)},n.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},n.prototype.option=function(t){var n=document.createElement("li");n.className="select2-results__option";var i={role:"treeitem","aria-selected":"false"};t.disabled&&(delete i["aria-selected"],i["aria-disabled"]="true"),null==t.id&&delete i["aria-selected"],null!=t._resultId&&(n.id=t._resultId),t.title&&(n.title=t.title),t.children&&(i.role="group",i["aria-label"]=t.text,delete i["aria-selected"]);for(var o in i){var r=i[o];n.setAttribute(o,r)}if(t.children){var s=e(n),a=document.createElement("strong");a.className="select2-results__group";e(a);this.template(t,a);for(var l=[],c=0;c<t.children.length;c++){var u=t.children[c],d=this.option(u);l.push(d)}var p=e("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});p.append(l),s.append(a),s.append(p)}else this.template(t,n);return e.data(n,"data",t),n},n.prototype.bind=function(t,n){var i=this,o=t.id+"-results";this.$results.attr("id",o),t.on("results:all",function(e){i.clear(),i.append(e.data),t.isOpen()&&i.setClasses()}),t.on("results:append",function(e){i.append(e.data),t.isOpen()&&i.setClasses()}),t.on("query",function(e){i.showLoading(e)}),t.on("select",function(){t.isOpen()&&i.setClasses()}),t.on("unselect",function(){t.isOpen()&&i.setClasses()}),t.on("open",function(){i.$results.attr("aria-expanded","true"),i.$results.attr("aria-hidden","false"),i.setClasses(),i.ensureHighlightVisible()}),t.on("close",function(){i.$results.attr("aria-expanded","false"),i.$results.attr("aria-hidden","true"),i.$results.removeAttr("aria-activedescendant")}),t.on("results:toggle",function(){var e=i.getHighlightedResults();0!==e.length&&e.trigger("mouseup")}),t.on("results:select",function(){var e=i.getHighlightedResults();if(0!==e.length){var t=e.data("data");"true"==e.attr("aria-selected")?i.trigger("close"):i.trigger("select",{data:t})}}),t.on("results:previous",function(){var e=i.getHighlightedResults(),t=i.$results.find("[aria-selected]"),n=t.index(e);if(0!==n){var o=n-1;0===e.length&&(o=0);var r=t.eq(o);r.trigger("mouseenter");var s=i.$results.offset().top,a=r.offset().top,l=i.$results.scrollTop()+(a-s);0===o?i.$results.scrollTop(0):a-s<0&&i.$results.scrollTop(l)}}),t.on("results:next",function(){var e=i.getHighlightedResults(),t=i.$results.find("[aria-selected]"),n=t.index(e)+1;if(!(n>=t.length)){var o=t.eq(n);o.trigger("mouseenter");var r=i.$results.offset().top+i.$results.outerHeight(!1),s=o.offset().top+o.outerHeight(!1),a=i.$results.scrollTop()+s-r;0===n?i.$results.scrollTop(0):s>r&&i.$results.scrollTop(a)}}),t.on("results:focus",function(e){e.element.addClass("select2-results__option--highlighted")}),t.on("results:message",function(e){i.displayMessage(e)}),e.fn.mousewheel&&this.$results.on("mousewheel",function(e){var t=i.$results.scrollTop(),n=i.$results.get(0).scrollHeight-i.$results.scrollTop()+e.deltaY,o=e.deltaY>0&&t-e.deltaY<=0,r=e.deltaY<0&&n<=i.$results.height();o?(i.$results.scrollTop(0),e.preventDefault(),e.stopPropagation()):r&&(i.$results.scrollTop(i.$results.get(0).scrollHeight-i.$results.height()),e.preventDefault(),e.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(t){var n=e(this),o=n.data("data");"true"!==n.attr("aria-selected")?i.trigger("select",{originalEvent:t,data:o}):i.options.get("multiple")?i.trigger("unselect",{originalEvent:t,data:o}):i.trigger("close")}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(t){var n=e(this).data("data");i.getHighlightedResults().removeClass("select2-results__option--highlighted"),i.trigger("results:focus",{data:n,element:e(this)})})},n.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},n.prototype.destroy=function(){this.$results.remove()},n.prototype.ensureHighlightVisible=function(){var e=this.getHighlightedResults();if(0!==e.length){var t=this.$results.find("[aria-selected]").index(e),n=this.$results.offset().top,i=e.offset().top,o=this.$results.scrollTop()+(i-n),r=i-n;o-=2*e.outerHeight(!1),t<=2?this.$results.scrollTop(0):(r>this.$results.outerHeight()||r<0)&&this.$results.scrollTop(o)}},n.prototype.template=function(t,n){var i=this.options.get("templateResult"),o=this.options.get("escapeMarkup"),r=i(t);null==r?n.style.display="none":"string"==typeof r?n.innerHTML=o(r):e(n).append(r)},n}),t.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),t.define("select2/selection/base",["jquery","../utils","../keys"],function(e,t,n){function i(e,t){this.$element=e,this.options=t,i.__super__.constructor.call(this)}return t.Extend(i,t.Observable),i.prototype.render=function(){var t=e('<div class="select2-selection" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false"></div>');return this._tabindex=0,null!=this.$element.data("old-tabindex")?this._tabindex=this.$element.data("old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),t.attr("title",this.$element.attr("title")),t.attr("tabindex",this._tabindex),this.$selection=t,t},i.prototype.bind=function(e,t){var i=this,o=(e.id,e.id+"-results");this.container=e,this.$selection.on("focus",function(e){i.trigger("focus",e)}),this.$selection.on("blur",function(e){i.trigger("blur",e)}),this.$selection.on("keydown",function(e){i.trigger("keypress",e),e.which===n.SPACE&&e.preventDefault()}),e.on("results:focus",function(e){i.$selection.attr("aria-activedescendant",e.data._resultId)}),e.on("selection:update",function(e){i.update(e.data)}),e.on("open",function(){i.$selection.attr("aria-expanded","true"),i.$selection.attr("aria-owns",o),i._attachCloseHandler(e)}),e.on("close",function(){i.$selection.attr("aria-expanded","false"),i.$selection.removeAttr("aria-activedescendant"),i.$selection.removeAttr("aria-owns"),i.$selection.focus(),i._detachCloseHandler(e)}),e.on("enable",function(){i.$selection.attr("tabindex",i._tabindex)}),e.on("disable",function(){i.$selection.attr("tabindex","-1")})},i.prototype._attachCloseHandler=function(t){e(document.body).on("mousedown.select2."+t.id,function(t){var n=e(t.target).closest(".select2");e(".select2.select2-container--open").each(function(){var t=e(this);this!=n[0]&&t.data("element").select2("close")})})},i.prototype._detachCloseHandler=function(t){e(document.body).off("mousedown.select2."+t.id)},i.prototype.position=function(e,t){t.find(".selection").append(e)},i.prototype.destroy=function(){this._detachCloseHandler(this.container)},i.prototype.update=function(e){throw new Error("The `update` method must be defined in child classes.")},i}),t.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(e,t,n,i){function o(){o.__super__.constructor.apply(this,arguments)}return n.Extend(o,t),o.prototype.render=function(){var e=o.__super__.render.call(this);return e.addClass("select2-selection--single"),e.html('<div class="select2-selection__rendered"></div><div class="select2-selection__arrow" role="presentation"><b role="presentation"></b></div>'),e},o.prototype.bind=function(e,t){var n=this;o.__super__.bind.apply(this,arguments);var i=e.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",i),this.$selection.attr("aria-labelledby",i),this.$selection.on("mousedown",function(e){1===e.which&&n.trigger("toggle",{originalEvent:e})}),this.$selection.on("focus",function(e){}),this.$selection.on("blur",function(e){}),e.on("selection:update",function(e){n.update(e.data)})},o.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},o.prototype.display=function(e){var t=this.options.get("templateSelection");return this.options.get("escapeMarkup")(t(e))},o.prototype.selectionContainer=function(){return e("<div></div>")},o.prototype.update=function(e){if(0!==e.length){var t=e[0],n=this.display(t),i=this.$selection.find(".select2-selection__rendered");i.empty().append(n),i.prop("title",t.title||t.text)}else this.clear()},o}),t.define("select2/selection/multiple",["jquery","./base","../utils"],function(e,t,n){function i(e,t){i.__super__.constructor.apply(this,arguments)}return n.Extend(i,t),i.prototype.render=function(){var e=i.__super__.render.call(this);return e.addClass("select2-selection--multiple"),e.html('<ul class="select2-selection__rendered"></ul>'),e},i.prototype.bind=function(t,n){var o=this;i.__super__.bind.apply(this,arguments),this.$selection.on("click",function(e){o.trigger("toggle",{originalEvent:e})}),this.$selection.on("click",".select2-selection__choice__remove",function(t){var n=e(this).parent().data("data");o.trigger("unselect",{originalEvent:t,data:n})})},i.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},i.prototype.display=function(e){var t=this.options.get("templateSelection");return this.options.get("escapeMarkup")(t(e))},i.prototype.selectionContainer=function(){return e('<li class="select2-selection__choice"><div class="select2-selection__choice__remove" role="presentation">&times;</div></li>')},i.prototype.update=function(e){if(this.clear(),0!==e.length){for(var t=[],i=0;i<e.length;i++){var o=e[i],r=this.display(o),s=this.selectionContainer();s.append(r),s.prop("title",o.title||o.text),s.data("data",o),t.push(s)}var a=this.$selection.find(".select2-selection__rendered");n.appendMany(a,t)}},i}),t.define("select2/selection/placeholder",["../utils"],function(e){function t(e,t,n){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n)}return t.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},t.prototype.createPlaceholder=function(e,t){var n=this.selectionContainer();return n.html(this.display(t)),n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),n},t.prototype.update=function(e,t){var n=1==t.length&&t[0].id!=this.placeholder.id;if(t.length>1||n)return e.call(this,t);this.clear();var i=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(i)},t}),t.define("select2/selection/allowClear",["jquery","../keys"],function(e,t){function n(){}return n.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(e){i._handleClear(e)}),t.on("keypress",function(e){i._handleKeyboardClear(e,t)})},n.prototype._handleClear=function(e,t){if(!this.options.get("disabled")){var n=this.$selection.find(".select2-selection__clear");if(0!==n.length){t.stopPropagation();for(var i=n.data("data"),o=0;o<i.length;o++){var r={data:i[o]};if(this.trigger("unselect",r),r.prevented)return}this.$element.val(this.placeholder.id).trigger("change"),this.trigger("toggle")}}},n.prototype._handleKeyboardClear=function(e,n,i){i.isOpen()||n.which!=t.DELETE&&n.which!=t.BACKSPACE||this._handleClear(n)},n.prototype.update=function(t,n){if(t.call(this,n),!(this.$selection.find(".select2-selection__placeholder").length>0||0===n.length)){var i=e('<div class="select2-selection__clear">&times;</div>');i.data("data",n),this.$selection.find(".select2-selection__rendered").prepend(i)}},n}),t.define("select2/selection/search",["jquery","../utils","../keys"],function(e,t,n){function i(e,t,n){e.call(this,t,n)}return i.prototype.render=function(t){var n=e('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></li>');return this.$searchContainer=n,this.$search=n.find("input"),t.call(this)},i.prototype.bind=function(e,t,i){var o=this;e.call(this,t,i),t.on("open",function(){o.$search.attr("tabindex",0),o.$search.focus()}),t.on("close",function(){o.$search.attr("tabindex",-1),o.$search.val(""),o.$search.focus()}),t.on("enable",function(){o.$search.prop("disabled",!1)}),t.on("disable",function(){o.$search.prop("disabled",!0)}),this.$selection.on("focusin",".select2-search--inline",function(e){o.trigger("focus",e)}),this.$selection.on("focusout",".select2-search--inline",function(e){o.trigger("blur",e)}),this.$selection.on("keydown",".select2-search--inline",function(e){if(e.stopPropagation(),o.trigger("keypress",e),o._keyUpPrevented=e.isDefaultPrevented(),e.which===n.BACKSPACE&&""===o.$search.val()){var t=o.$searchContainer.prev(".select2-selection__choice");if(t.length>0){var i=t.data("data");o.searchRemoveChoice(i),e.preventDefault()}}}),this.$selection.on("input",".select2-search--inline",function(e){o.$selection.off("keyup.search")}),this.$selection.on("keyup.search input",".select2-search--inline",function(e){o.handleSearch(e)})},i.prototype.createPlaceholder=function(e,t){this.$search.attr("placeholder",t.text)},i.prototype.update=function(e,t){this.$search.attr("placeholder",""),e.call(this,t),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch()},i.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var e=this.$search.val();this.trigger("query",{term:e})}this._keyUpPrevented=!1},i.prototype.searchRemoveChoice=function(e,t){this.trigger("unselect",{data:t}),this.trigger("open"),this.$search.val(t.text+" ")},i.prototype.resizeSearch=function(){this.$search.css("width","25px");var e="";e=""!==this.$search.attr("placeholder")?this.$selection.find(".select2-selection__rendered").innerWidth():.75*(this.$search.val().length+1)+"em",this.$search.css("width",e)},i}),t.define("select2/selection/eventRelay",["jquery"],function(e){function t(){}return t.prototype.bind=function(t,n,i){var o=this,r=["open","opening","close","closing","select","selecting","unselect","unselecting"],s=["opening","closing","selecting","unselecting"];t.call(this,n,i),n.on("*",function(t,n){if(-1!==e.inArray(t,r)){n=n||{};var i=e.Event("select2:"+t,{params:n});o.$element.trigger(i),-1!==e.inArray(t,s)&&(n.prevented=i.isDefaultPrevented())}})},t}),t.define("select2/translation",["jquery","require"],function(e,t){function n(e){this.dict=e||{}}return n.prototype.all=function(){return this.dict},n.prototype.get=function(e){return this.dict[e]},n.prototype.extend=function(t){this.dict=e.extend({},t.all(),this.dict)},n._cache={},n.loadPath=function(e){if(!(e in n._cache)){var i=t(e);n._cache[e]=i}return new n(n._cache[e])},n}),t.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"}}),t.define("select2/data/base",["../utils"],function(e){function t(e,n){t.__super__.constructor.call(this)}return e.Extend(t,e.Observable),t.prototype.current=function(e){throw new Error("The `current` method must be defined in child classes.")},t.prototype.query=function(e,t){throw new Error("The `query` method must be defined in child classes.")},t.prototype.bind=function(e,t){},t.prototype.destroy=function(){},t.prototype.generateResultId=function(t,n){var i=t.id+"-result-";return i+=e.generateChars(4),null!=n.id?i+="-"+n.id.toString():i+="-"+e.generateChars(4),i},t}),t.define("select2/data/select",["./base","../utils","jquery"],function(e,t,n){function i(e,t){this.$element=e,this.options=t,i.__super__.constructor.call(this)}return t.Extend(i,e),i.prototype.current=function(e){var t=[],i=this;this.$element.find(":selected").each(function(){var e=n(this),o=i.item(e);t.push(o)}),e(t)},i.prototype.select=function(e){var t=this;if(e.selected=!0,n(e.element).is("option"))return e.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(i){var o=[];(e=[e]).push.apply(e,i);for(var r=0;r<e.length;r++){var s=e[r].id;-1===n.inArray(s,o)&&o.push(s)}t.$element.val(o),t.$element.trigger("change")});else{var i=e.id;this.$element.val(i),this.$element.trigger("change")}},i.prototype.unselect=function(e){var t=this;if(this.$element.prop("multiple")){if(e.selected=!1,n(e.element).is("option"))return e.element.selected=!1,void this.$element.trigger("change");this.current(function(i){for(var o=[],r=0;r<i.length;r++){var s=i[r].id;s!==e.id&&-1===n.inArray(s,o)&&o.push(s)}t.$element.val(o),t.$element.trigger("change")})}},i.prototype.bind=function(e,t){var n=this;this.container=e,e.on("select",function(e){n.select(e.data)}),e.on("unselect",function(e){n.unselect(e.data)})},i.prototype.destroy=function(){this.$element.find("*").each(function(){n.removeData(this,"data")})},i.prototype.query=function(e,t){var i=[],o=this;this.$element.children().each(function(){var t=n(this);if(t.is("option")||t.is("optgroup")){var r=o.item(t),s=o.matches(e,r);null!==s&&i.push(s)}}),t({results:i})},i.prototype.addOptions=function(e){t.appendMany(this.$element,e)},i.prototype.option=function(e){var t;e.children?(t=document.createElement("optgroup")).label=e.text:void 0!==(t=document.createElement("option")).textContent?t.textContent=e.text:t.innerText=e.text,e.id&&(t.value=e.id),e.disabled&&(t.disabled=!0),e.selected&&(t.selected=!0),e.title&&(t.title=e.title);var i=n(t),o=this._normalizeItem(e);return o.element=t,n.data(t,"data",o),i},i.prototype.item=function(e){var t={};if(null!=(t=n.data(e[0],"data")))return t;if(e.is("option"))t={id:e.val(),text:e.text(),disabled:e.prop("disabled"),selected:e.prop("selected"),title:e.prop("title")};else if(e.is("optgroup")){t={text:e.prop("label"),children:[],title:e.prop("title")};for(var i=e.children("option"),o=[],r=0;r<i.length;r++){var s=n(i[r]),a=this.item(s);o.push(a)}t.children=o}return t=this._normalizeItem(t),t.element=e[0],n.data(e[0],"data",t),t},i.prototype._normalizeItem=function(e){n.isPlainObject(e)||(e={id:e,text:e});var t={selected:!1,disabled:!1};return null!=(e=n.extend({},{text:""},e)).id&&(e.id=e.id.toString()),null!=e.text&&(e.text=e.text.toString()),null==e._resultId&&e.id&&null!=this.container&&(e._resultId=this.generateResultId(this.container,e)),n.extend({},t,e)},i.prototype.matches=function(e,t){return this.options.get("matcher")(e,t)},i}),t.define("select2/data/array",["./select","../utils","jquery"],function(e,t,n){function i(e,t){var n=t.get("data")||[];i.__super__.constructor.call(this,e,t),this.addOptions(this.convertToOptions(n))}return t.Extend(i,e),i.prototype.select=function(e){var t=this.$element.find("option").filter(function(t,n){return n.value==e.id.toString()});0===t.length&&(t=this.option(e),this.addOptions(t)),i.__super__.select.call(this,e)},i.prototype.convertToOptions=function(e){for(var i=this,o=this.$element.find("option"),r=o.map(function(){return i.item(n(this)).id}).get(),s=[],a=0;a<e.length;a++){var l=this._normalizeItem(e[a]);if(n.inArray(l.id,r)>=0){var c=o.filter(function(e){return function(){return n(this).val()==e.id}}(l)),u=this.item(c),d=(n.extend(!0,{},u,l),this.option(u));c.replaceWith(d)}else{var p=this.option(l);if(l.children){var h=this.convertToOptions(l.children);t.appendMany(p,h)}s.push(p)}}return s},i}),t.define("select2/data/ajax",["./array","../utils","jquery"],function(e,t,n){function i(t,n){this.ajaxOptions=this._applyDefaults(n.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),e.__super__.constructor.call(this,t,n)}return t.Extend(i,e),i.prototype._applyDefaults=function(e){var t={data:function(e){return{q:e.term}},transport:function(e,t,i){var o=n.ajax(e);return o.then(t),o.fail(i),o}};return n.extend({},t,e,!0)},i.prototype.processResults=function(e){return e},i.prototype.query=function(e,t){function i(){var i=r.transport(r,function(i){var r=o.processResults(i,e);o.options.get("debug")&&window.console&&console.error&&(r&&r.results&&n.isArray(r.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),t(r)},function(){});o._request=i}var o=this;null!=this._request&&(n.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var r=n.extend({type:"GET"},this.ajaxOptions);"function"==typeof r.url&&(r.url=r.url(e)),"function"==typeof r.data&&(r.data=r.data(e)),this.ajaxOptions.delay&&""!==e.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(i,this.ajaxOptions.delay)):i()},i}),t.define("select2/data/tags",["jquery"],function(e){function t(t,n,i){var o=i.get("tags"),r=i.get("createTag");if(void 0!==r&&(this.createTag=r),t.call(this,n,i),e.isArray(o))for(var s=0;s<o.length;s++){var a=o[s],l=this._normalizeItem(a),c=this.option(l);this.$element.append(c)}}return t.prototype.query=function(e,t,n){function i(e,r){for(var s=e.results,a=0;a<s.length;a++){var l=s[a],c=null!=l.children&&!i({results:l.children},!0);if(l.text===t.term||c)return!r&&(e.data=s,void n(e))}if(r)return!0;var u=o.createTag(t);if(null!=u){var d=o.option(u);d.attr("data-select2-tag",!0),o.addOptions([d]),o.insertTag(s,u)}e.results=s,n(e)}var o=this;this._removeOldTags(),null!=t.term&&null==t.page?e.call(this,t,i):e.call(this,t,n)},t.prototype.createTag=function(t,n){var i=e.trim(n.term);return""===i?null:{id:i,text:i}},t.prototype.insertTag=function(e,t,n){t.unshift(n)},t.prototype._removeOldTags=function(t){this._lastTag;this.$element.find("option[data-select2-tag]").each(function(){this.selected||e(this).remove()})},t}),t.define("select2/data/tokenizer",["jquery"],function(e){function t(e,t,n){var i=n.get("tokenizer");void 0!==i&&(this.tokenizer=i),e.call(this,t,n)}return t.prototype.bind=function(e,t,n){e.call(this,t,n),this.$search=t.dropdown.$search||t.selection.$search||n.find(".select2-search__field")},t.prototype.query=function(e,t,n){function i(e){o.select(e)}var o=this;t.term=t.term||"";var r=this.tokenizer(t,this.options,i);r.term!==t.term&&(this.$search.length&&(this.$search.val(r.term),this.$search.focus()),t.term=r.term),e.call(this,t,n)},t.prototype.tokenizer=function(t,n,i,o){for(var r=i.get("tokenSeparators")||[],s=n.term,a=0,l=this.createTag||function(e){return{id:e.term,text:e.term}};a<s.length;){var c=s[a];if(-1!==e.inArray(c,r)){var u=s.substr(0,a);o(l(e.extend({},n,{term:u}))),s=s.substr(a+1)||"",a=0}else a++}return{term:s}},t}),t.define("select2/data/minimumInputLength",[],function(){function e(e,t,n){this.minimumInputLength=n.get("minimumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",t.term.length<this.minimumInputLength?this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),t.define("select2/data/maximumInputLength",[],function(){function e(e,t,n){this.maximumInputLength=n.get("maximumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",this.maximumInputLength>0&&t.term.length>this.maximumInputLength?this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),t.define("select2/data/maximumSelectionLength",[],function(){function e(e,t,n){this.maximumSelectionLength=n.get("maximumSelectionLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){var i=this;this.current(function(o){var r=null!=o?o.length:0;i.maximumSelectionLength>0&&r>=i.maximumSelectionLength?i.trigger("results:message",{message:"maximumSelected",args:{maximum:i.maximumSelectionLength}}):e.call(i,t,n)})},e}),t.define("select2/dropdown",["jquery","./utils"],function(e,t){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return t.Extend(n,t.Observable),n.prototype.render=function(){var t=e('<div class="select2-dropdown"><div class="select2-results"></div></div>');return t.attr("dir",this.options.get("dir")),this.$dropdown=t,t},n.prototype.position=function(e,t){},n.prototype.destroy=function(){this.$dropdown.remove()},n}),t.define("select2/dropdown/search",["jquery","../utils"],function(e,t){function n(){}return n.prototype.render=function(t){var n=t.call(this),i=e('<div class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></div>');return this.$searchContainer=i,this.$search=i.find("input"),n.prepend(i),n},n.prototype.bind=function(t,n,i){var o=this;t.call(this,n,i),this.$search.on("keydown",function(e){o.trigger("keypress",e),o._keyUpPrevented=e.isDefaultPrevented()}),this.$search.on("input",function(t){e(this).off("keyup")}),this.$search.on("keyup input",function(e){o.handleSearch(e)}),n.on("open",function(){o.$search.attr("tabindex",0),o.$search.focus(),window.setTimeout(function(){o.$search.focus()},0)}),n.on("close",function(){o.$search.attr("tabindex",-1),o.$search.val("")}),n.on("results:all",function(e){null!=e.query.term&&""!==e.query.term||(o.showSearch(e)?o.$searchContainer.removeClass("select2-search--hide"):o.$searchContainer.addClass("select2-search--hide"))})},n.prototype.handleSearch=function(e){if(!this._keyUpPrevented){var t=this.$search.val();this.trigger("query",{term:t})}this._keyUpPrevented=!1},n.prototype.showSearch=function(e,t){return!0},n}),t.define("select2/dropdown/hidePlaceholder",[],function(){function e(e,t,n,i){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n,i)}return e.prototype.append=function(e,t){t.results=this.removePlaceholder(t.results),e.call(this,t)},e.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},e.prototype.removePlaceholder=function(e,t){for(var n=t.slice(0),i=t.length-1;i>=0;i--){var o=t[i];this.placeholder.id===o.id&&n.splice(i,1)}return n},e}),t.define("select2/dropdown/infiniteScroll",["jquery"],function(e){function t(e,t,n,i){this.lastParams={},e.call(this,t,n,i),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return t.prototype.append=function(e,t){this.$loadingMore.remove(),this.loading=!1,e.call(this,t),this.showLoadingMore(t)&&this.$results.append(this.$loadingMore)},t.prototype.bind=function(t,n,i){var o=this;t.call(this,n,i),n.on("query",function(e){o.lastParams=e,o.loading=!0}),n.on("query:append",function(e){o.lastParams=e,o.loading=!0}),this.$results.on("scroll",function(){var t=e.contains(document.documentElement,o.$loadingMore[0]);!o.loading&&t&&o.$results.offset().top+o.$results.outerHeight(!1)+50>=o.$loadingMore.offset().top+o.$loadingMore.outerHeight(!1)&&o.loadMore()})},t.prototype.loadMore=function(){this.loading=!0;var t=e.extend({},{page:1},this.lastParams);t.page++,this.trigger("query:append",t)},t.prototype.showLoadingMore=function(e,t){return t.pagination&&t.pagination.more},t.prototype.createLoadingMore=function(){var t=e('<li class="option load-more" role="treeitem"></li>'),n=this.options.get("translations").get("loadingMore");return t.html(n(this.lastParams)),t},t}),t.define("select2/dropdown/attachBody",["jquery","../utils"],function(e,t){function n(e,t,n){this.$dropdownParent=n.get("dropdownParent")||document.body,e.call(this,t,n)}return n.prototype.bind=function(e,t,n){var i=this,o=!1;e.call(this,t,n),t.on("open",function(){i._showDropdown(),i._attachPositioningHandler(t),o||(o=!0,t.on("results:all",function(){i._positionDropdown(),i._resizeDropdown()}),t.on("results:append",function(){i._positionDropdown(),i._resizeDropdown()}))}),t.on("close",function(){i._hideDropdown(),i._detachPositioningHandler(t)}),this.$dropdownContainer.on("mousedown",function(e){e.stopPropagation()})},n.prototype.position=function(e,t,n){t.attr("class",n.attr("class")),t.removeClass("select2"),t.addClass("select2-container--open"),t.css({position:"absolute",top:-999999}),this.$container=n},n.prototype.render=function(t){var n=e("<div></div>"),i=t.call(this);return n.append(i),this.$dropdownContainer=n,n},n.prototype._hideDropdown=function(e){this.$dropdownContainer.detach()},n.prototype._attachPositioningHandler=function(n){var i=this,o="scroll.select2."+n.id,r="resize.select2."+n.id,s="orientationchange.select2."+n.id,a=this.$container.parents().filter(t.hasScroll);a.each(function(){e(this).data("select2-scroll-position",{x:e(this).scrollLeft(),y:e(this).scrollTop()})}),a.on(o,function(t){var n=e(this).data("select2-scroll-position");e(this).scrollTop(n.y)}),e(window).on(o+" "+r+" "+s,function(e){i._positionDropdown(),i._resizeDropdown()})},n.prototype._detachPositioningHandler=function(n){var i="scroll.select2."+n.id,o="resize.select2."+n.id,r="orientationchange.select2."+n.id;this.$container.parents().filter(t.hasScroll).off(i),e(window).off(i+" "+o+" "+r)},n.prototype._positionDropdown=function(){var t=e(window),n=this.$dropdown.hasClass("select2-dropdown--above"),i=this.$dropdown.hasClass("select2-dropdown--below"),o=null,r=(this.$container.position(),this.$container.offset());r.bottom=r.top+this.$container.outerHeight(!1);var s={height:this.$container.outerHeight(!1)};s.top=r.top,s.bottom=r.top+s.height;var a={height:this.$dropdown.outerHeight(!1)},l={top:t.scrollTop(),bottom:t.scrollTop()+t.height()},c=l.top<r.top-a.height,u=l.bottom>r.bottom+a.height,d={left:r.left,top:s.bottom};n||i||(o="below"),u||!c||n?!c&&u&&n&&(o="below"):o="above",("above"==o||n&&"below"!==o)&&(d.top=s.top-a.height),null!=o&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+o),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+o)),this.$dropdownContainer.css(d)},n.prototype._resizeDropdown=function(){this.$dropdownContainer.width();var e={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(e.minWidth=e.width,e.width="auto"),this.$dropdown.css(e)},n.prototype._showDropdown=function(e){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},n}),t.define("select2/dropdown/minimumResultsForSearch",[],function(){function e(t){for(var n=0,i=0;i<t.length;i++){var o=t[i];o.children?n+=e(o.children):n++}return n}function t(e,t,n,i){this.minimumResultsForSearch=n.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),e.call(this,t,n,i)}return t.prototype.showSearch=function(t,n){return!(e(n.data.results)<this.minimumResultsForSearch)&&t.call(this,n)},t}),t.define("select2/dropdown/selectOnClose",[],function(){function e(){}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("close",function(){i._handleSelectOnClose()})},e.prototype._handleSelectOnClose=function(){var e=this.getHighlightedResults();e.length<1||this.trigger("select",{data:e.data("data")})},e}),t.define("select2/dropdown/closeOnSelect",[],function(){function e(){}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("select",function(e){i._selectTriggered(e)}),t.on("unselect",function(e){i._selectTriggered(e)})},e.prototype._selectTriggered=function(e,t){var n=t.originalEvent;n&&n.ctrlKey||this.trigger("close")},e}),t.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"Os resultados não poderiam ser carregados."},inputTooLong:function(e){var t=e.input.length-e.maximum,n="Por favor, apague "+t+" character";return 1!=t&&(n+="s"),n},inputTooShort:function(e){return"Digite "+(e.minimum-e.input.length)+" ou mais characters"},loadingMore:function(){return"Carregando os resultados…"},maximumSelected:function(e){var t="Você pode selecionar apenas "+e.maximum+" item";return 1!=e.maximum&&(t+="s"),t},noResults:function(){return"Nenhum resultado encontrado"},searching:function(){return"Procurando..."}}}),t.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(e,t,n,i,o,r,s,a,l,c,u,d,p,h,f,g,m,v,y,w,_,$,b,x,A,C,S,O,E){function D(){this.reset()}return D.prototype.apply=function(d){if(null==(d=e.extend({},this.defaults,d)).dataAdapter){if(null!=d.ajax?d.dataAdapter=f:null!=d.data?d.dataAdapter=h:d.dataAdapter=p,d.minimumInputLength>0&&(d.dataAdapter=c.Decorate(d.dataAdapter,v)),d.maximumInputLength>0&&(d.dataAdapter=c.Decorate(d.dataAdapter,y)),d.maximumSelectionLength>0&&(d.dataAdapter=c.Decorate(d.dataAdapter,w)),d.tags&&(d.dataAdapter=c.Decorate(d.dataAdapter,g)),null==d.tokenSeparators&&null==d.tokenizer||(d.dataAdapter=c.Decorate(d.dataAdapter,m)),null!=d.query){var E=t(d.amdBase+"compat/query");d.dataAdapter=c.Decorate(d.dataAdapter,E)}if(null!=d.initSelection){var D=t(d.amdBase+"compat/initSelection");d.dataAdapter=c.Decorate(d.dataAdapter,D)}}if(null==d.resultsAdapter&&(d.resultsAdapter=n,null!=d.ajax&&(d.resultsAdapter=c.Decorate(d.resultsAdapter,x)),null!=d.placeholder&&(d.resultsAdapter=c.Decorate(d.resultsAdapter,b)),d.selectOnClose&&(d.resultsAdapter=c.Decorate(d.resultsAdapter,S))),null==d.dropdownAdapter){if(d.multiple)d.dropdownAdapter=_;else{var q=c.Decorate(_,$);d.dropdownAdapter=q}if(0!==d.minimumResultsForSearch&&(d.dropdownAdapter=c.Decorate(d.dropdownAdapter,C)),d.closeOnSelect&&(d.dropdownAdapter=c.Decorate(d.dropdownAdapter,O)),null!=d.dropdownCssClass||null!=d.dropdownCss||null!=d.adaptDropdownCssClass){var T=t(d.amdBase+"compat/dropdownCss");d.dropdownAdapter=c.Decorate(d.dropdownAdapter,T)}d.dropdownAdapter=c.Decorate(d.dropdownAdapter,A)}if(null==d.selectionAdapter){if(d.multiple?d.selectionAdapter=o:d.selectionAdapter=i,null!=d.placeholder&&(d.selectionAdapter=c.Decorate(d.selectionAdapter,r)),d.allowClear&&(d.selectionAdapter=c.Decorate(d.selectionAdapter,s)),d.multiple&&(d.selectionAdapter=c.Decorate(d.selectionAdapter,a)),null!=d.containerCssClass||null!=d.containerCss||null!=d.adaptContainerCssClass){var j=t(d.amdBase+"compat/containerCss");d.selectionAdapter=c.Decorate(d.selectionAdapter,j)}d.selectionAdapter=c.Decorate(d.selectionAdapter,l)}if("string"==typeof d.language)if(d.language.indexOf("-")>0){var k=d.language.split("-")[0];d.language=[d.language,k]}else d.language=[d.language];if(e.isArray(d.language)){var L=new u;d.language.push("en");for(var P=d.language,M=0;M<P.length;M++){var I=P[M],z={};try{z=u.loadPath(I)}catch(e){try{I=this.defaults.amdLanguageBase+I,z=u.loadPath(I)}catch(e){d.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+I+'" could not be automatically loaded. A fallback will be used instead.');continue}}L.extend(z)}d.translations=L}else{var R=u.loadPath(this.defaults.amdLanguageBase+"en"),H=new u(d.language);H.extend(R),d.translations=H}return d},D.prototype.reset=function(){function t(e){function t(e){return d[e]||e}return e.replace(/[^\u0000-\u007E]/g,t)}function n(i,o){if(""===e.trim(i.term))return o;if(o.children&&o.children.length>0){for(var r=e.extend(!0,{},o),s=o.children.length-1;s>=0;s--)null==n(i,o.children[s])&&r.children.splice(s,1);return r.children.length>0?r:n(i,r)}var a=t(o.text).toUpperCase(),l=t(i.term).toUpperCase();return a.indexOf(l)>-1?o:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:c.escapeMarkup,language:E,matcher:n,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(e){return e},templateResult:function(e){return e.text},templateSelection:function(e){return e.text},theme:"default",width:"resolve"}},D.prototype.set=function(t,n){var i={};i[e.camelCase(t)]=n;var o=c._convertData(i);e.extend(this.defaults,o)},new D}),t.define("select2/options",["require","jquery","./defaults","./utils"],function(e,t,n,i){function o(t,o){if(this.options=t,null!=o&&this.fromElement(o),this.options=n.apply(this.options),o&&o.is("input")){var r=e(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=i.Decorate(this.options.dataAdapter,r)}}return o.prototype.fromElement=function(e){var n=["select2"];null==this.options.multiple&&(this.options.multiple=e.prop("multiple")),null==this.options.disabled&&(this.options.disabled=e.prop("disabled")),null==this.options.language&&(e.prop("lang")?this.options.language=e.prop("lang").toLowerCase():e.closest("[lang]").prop("lang")&&(this.options.language=e.closest("[lang]").prop("lang"))),null==this.options.dir&&(e.prop("dir")?this.options.dir=e.prop("dir"):e.closest("[dir]").prop("dir")?this.options.dir=e.closest("[dir]").prop("dir"):this.options.dir="ltr"),e.prop("disabled",this.options.disabled),e.prop("multiple",this.options.multiple),e.data("select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),e.data("data",e.data("select2Tags")),e.data("tags",!0)),e.data("ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),e.attr("ajax--url",e.data("ajaxUrl")),e.data("ajax--url",e.data("ajaxUrl")));var o={};o=t.fn.jquery&&"1."==t.fn.jquery.substr(0,2)&&e[0].dataset?t.extend(!0,{},e[0].dataset,e.data()):e.data();var r=t.extend(!0,{},o);r=i._convertData(r);for(var s in r)t.inArray(s,n)>-1||(t.isPlainObject(this.options[s])?t.extend(this.options[s],r[s]):this.options[s]=r[s]);return this},o.prototype.get=function(e){return this.options[e]},o.prototype.set=function(e,t){this.options[e]=t},o}),t.define("select2/core",["jquery","./options","./utils","./keys"],function(e,t,n,i){var o=function(e,n){null!=e.data("select2")&&e.data("select2").destroy(),this.$element=e,this.id=this._generateId(e),n=n||{},this.options=new t(n,e),o.__super__.constructor.call(this);var i=e.attr("tabindex")||0;e.data("old-tabindex",i),e.attr("tabindex","-1");var r=this.options.get("dataAdapter");this.dataAdapter=new r(e,this.options);var s=this.render();this._placeContainer(s);var a=this.options.get("selectionAdapter");this.selection=new a(e,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,s);var l=this.options.get("dropdownAdapter");this.dropdown=new l(e,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,s);var c=this.options.get("resultsAdapter");this.results=new c(e,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var u=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(e){u.trigger("selection:update",{data:e})}),e.addClass("select2-hidden-accessible"),e.attr("aria-hidden","true"),this._syncAttributes(),e.data("select2",this)};return n.Extend(o,n.Observable),o.prototype._generateId=function(e){var t="";return t=null!=e.attr("id")?e.attr("id"):null!=e.attr("name")?e.attr("name")+"-"+n.generateChars(2):n.generateChars(4),t="select2-"+t},o.prototype._placeContainer=function(e){e.insertAfter(this.$element);var t=this._resolveWidth(this.$element,this.options.get("width"));null!=t&&e.css("width",t)},o.prototype._resolveWidth=function(e,t){var n=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==t){var i=this._resolveWidth(e,"style");return null!=i?i:this._resolveWidth(e,"element")}if("element"==t){var o=e.outerWidth(!1);return o<=0?"auto":o+"px"}if("style"==t){var r=e.attr("style");if("string"!=typeof r)return null;for(var s=r.split(";"),a=0,l=s.length;a<l;a+=1){var c=s[a].replace(/\s/g,"").match(n);if(null!==c&&c.length>=1)return c[1]}return null}return t},o.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},o.prototype._registerDomEvents=function(){var t=this;this.$element.on("change.select2",function(){t.dataAdapter.current(function(e){t.trigger("selection:update",{data:e})})}),this._sync=n.bind(this._syncAttributes,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._sync);var i=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=i?(this._observer=new i(function(n){e.each(n,t._sync)}),this._observer.observe(this.$element[0],{attributes:!0,subtree:!1})):this.$element[0].addEventListener&&this.$element[0].addEventListener("DOMAttrModified",t._sync,!1)},o.prototype._registerDataEvents=function(){var e=this;this.dataAdapter.on("*",function(t,n){e.trigger(t,n)})},o.prototype._registerSelectionEvents=function(){var t=this,n=["toggle"];this.selection.on("toggle",function(){t.toggleDropdown()}),this.selection.on("*",function(i,o){-1===e.inArray(i,n)&&t.trigger(i,o)})},o.prototype._registerDropdownEvents=function(){var e=this;this.dropdown.on("*",function(t,n){e.trigger(t,n)})},o.prototype._registerResultsEvents=function(){var e=this;this.results.on("*",function(t,n){e.trigger(t,n)})},o.prototype._registerEvents=function(){var e=this;this.on("open",function(){e.$container.addClass("select2-container--open")}),this.on("close",function(){e.$container.removeClass("select2-container--open")}),this.on("enable",function(){e.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){e.$container.addClass("select2-container--disabled")}),this.on("focus",function(){e.$container.addClass("select2-container--focus")}),this.on("blur",function(){e.$container.removeClass("select2-container--focus")}),this.on("query",function(t){e.isOpen()||e.trigger("open"),this.dataAdapter.query(t,function(n){e.trigger("results:all",{data:n,query:t})})}),this.on("query:append",function(t){this.dataAdapter.query(t,function(n){e.trigger("results:append",{data:n,query:t})})}),this.on("keypress",function(t){var n=t.which;e.isOpen()?n===i.ENTER?(e.trigger("results:select"),t.preventDefault()):n===i.SPACE&&t.ctrlKey?(e.trigger("results:toggle"),t.preventDefault()):n===i.UP?(e.trigger("results:previous"),t.preventDefault()):n===i.DOWN?(e.trigger("results:next"),t.preventDefault()):n!==i.ESC&&n!==i.TAB||(e.close(),t.preventDefault()):(n===i.ENTER||n===i.SPACE||(n===i.DOWN||n===i.UP)&&t.altKey)&&(e.open(),t.preventDefault())})},o.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable")):this.trigger("enable")},o.prototype.trigger=function(e,t){var n=o.__super__.trigger,i={open:"opening",close:"closing",select:"selecting",unselect:"unselecting"};if(e in i){var r=i[e],s={prevented:!1,name:e,args:t};if(n.call(this,r,s),s.prevented)return void(t.prevented=!0)}n.call(this,e,t)},o.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},o.prototype.open=function(){this.isOpen()||(this.trigger("query",{}),this.trigger("open"))},o.prototype.close=function(){this.isOpen()&&this.trigger("close")},o.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},o.prototype.enable=function(e){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=e&&0!==e.length||(e=[!0]);var t=!e[0];this.$element.prop("disabled",t)},o.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var e=[];return this.dataAdapter.current(function(t){e=t}),e},o.prototype.val=function(t){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==t||0===t.length)return this.$element.val();var n=t[0];e.isArray(n)&&(n=e.map(n,function(e){return e.toString()})),this.$element.val(n).trigger("change")},o.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._sync),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&this.$element[0].removeEventListener("DOMAttrModified",this._sync,!1),this._sync=null,this.$element.off(".select2"),this.$element.attr("tabindex",this.$element.data("old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},o.prototype.render=function(){var t=e('<div class="select2 select2-container p0 select2_inicial"><div class="selection"></div><div class="dropdown-wrapper" aria-hidden="true"></div></div>');return t.attr("dir",this.options.get("dir")),this.$container=t,this.$container.addClass("select2-container--"+this.options.get("theme")),t.data("element",this.$element),t},o}),t.define("select2/compat/utils",["jquery"],function(e){function t(t,n,i){var o,r,s=[];(o=e.trim(t.attr("class")))&&e((o=""+o).split(/\s+/)).each(function(){0===this.indexOf("select2-")&&s.push(this)}),(o=e.trim(n.attr("class")))&&e((o=""+o).split(/\s+/)).each(function(){0!==this.indexOf("select2-")&&null!=(r=i(this))&&s.push(r)}),t.attr("class",s.join(" "))}return{syncCssClasses:t}}),t.define("select2/compat/containerCss",["jquery","./utils"],function(e,t){function n(e){return null}function i(){}return i.prototype.render=function(i){var o=i.call(this),r=this.options.get("containerCssClass")||"";e.isFunction(r)&&(r=r(this.$element));var s=this.options.get("adaptContainerCssClass");if(s=s||n,-1!==r.indexOf(":all:")){r=r.replace(":all","");var a=s;s=function(e){var t=a(e);return null!=t?t+" "+e:e}}var l=this.options.get("containerCss")||{};return e.isFunction(l)&&(l=l(this.$element)),t.syncCssClasses(o,this.$element,s),o.css(l),o.addClass(r),o},i}),t.define("select2/compat/dropdownCss",["jquery","./utils"],function(e,t){function n(e){return null}function i(){}return i.prototype.render=function(i){var o=i.call(this),r=this.options.get("dropdownCssClass")||"";e.isFunction(r)&&(r=r(this.$element));var s=this.options.get("adaptDropdownCssClass");if(s=s||n,-1!==r.indexOf(":all:")){r=r.replace(":all","");var a=s;s=function(e){var t=a(e);return null!=t?t+" "+e:e}}var l=this.options.get("dropdownCss")||{};return e.isFunction(l)&&(l=l(this.$element)),t.syncCssClasses(o,this.$element,s),o.css(l),o.addClass(r),o},i}),t.define("select2/compat/initSelection",["jquery"],function(e){function t(e,t,n){n.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"),this.initSelection=n.get("initSelection"),this._isInitialized=!1,e.call(this,t,n)}return t.prototype.current=function(t,n){var i=this;this._isInitialized?t.call(this,n):this.initSelection.call(null,this.$element,function(t){i._isInitialized=!0,e.isArray(t)||(t=[t]),n(t)})},t}),t.define("select2/compat/inputData",["jquery"],function(e){function t(e,t,n){this._currentData=[],this._valueSeparator=n.get("valueSeparator")||",","hidden"===t.prop("type")&&n.get("debug")&&console&&console.warn&&console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."),e.call(this,t,n)}return t.prototype.current=function(t,n){function i(t,n){var o=[];return t.selected||-1!==e.inArray(t.id,n)?(t.selected=!0,o.push(t)):t.selected=!1,t.children&&o.push.apply(o,i(t.children,n)),o}for(var o=[],r=0;r<this._currentData.length;r++){var s=this._currentData[r];o.push.apply(o,i(s,this.$element.val().split(this._valueSeparator)))}n(o)},t.prototype.select=function(t,n){if(this.options.get("multiple")){var i=this.$element.val();i+=this._valueSeparator+n.id,this.$element.val(i),this.$element.trigger("change")}else this.current(function(t){e.map(t,function(e){e.selected=!1})}),this.$element.val(n.id),this.$element.trigger("change")},t.prototype.unselect=function(e,t){var n=this;t.selected=!1,this.current(function(e){for(var i=[],o=0;o<e.length;o++){var r=e[o];t.id!=r.id&&i.push(r.id)}n.$element.val(i.join(n._valueSeparator)),n.$element.trigger("change")})},t.prototype.query=function(e,t,n){for(var i=[],o=0;o<this._currentData.length;o++){var r=this._currentData[o],s=this.matches(t,r);null!==s&&i.push(s)}n({results:i})},t.prototype.addOptions=function(t,n){var i=e.map(n,function(t){return e.data(t[0],"data")});this._currentData.push.apply(this._currentData,i)},t}),t.define("select2/compat/matcher",["jquery"],function(e){function t(t){function n(n,i){var o=e.extend(!0,{},i);if(null==n.term||""===e.trim(n.term))return o;if(i.children){for(var r=i.children.length-1;r>=0;r--){var s=i.children[r];t(n.term,s.text,s)||o.children.splice(r,1)}if(o.children.length>0)return o}return t(n.term,i.text,i)?o:null}return n}return t}),t.define("select2/compat/query",[],function(){function e(e,t,n){n.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.callback=n,this.options.get("query").call(null,t)},e}),t.define("select2/dropdown/attachContainer",[],function(){function e(e,t,n){e.call(this,t,n)}return e.prototype.position=function(e,t,n){n.find(".dropdown-wrapper").append(t),t.addClass("select2-dropdown--below"),n.addClass("select2-container--below")},e}),t.define("select2/dropdown/stopPropagation",[],function(){function e(){}return e.prototype.bind=function(e,t,n){e.call(this,t,n);var i=["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"];this.$dropdown.on(i.join(" "),function(e){e.stopPropagation()})},e}),t.define("select2/selection/stopPropagation",[],function(){function e(){}return e.prototype.bind=function(e,t,n){e.call(this,t,n);var i=["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"];this.$selection.on(i.join(" "),function(e){e.stopPropagation()})},e}),t.define("jquery.select2",["jquery","require","./select2/core","./select2/defaults"],function(e,t,n,i){if(t("jquery.mousewheel"),null==e.fn.select2){var o=["open","close","destroy"];

	e.fn.select2=function(t){
		if(e(this)
			.filter(function(index) {
				$passar = 1;
				if(e(this).parent().attr('class') == 'posr'){
					$passar = 0;
				}
				return $passar;
			})
			.wrap('<div class="posr"></div>'),
	"object"==typeof(t=t||{}))

	return this.each(function(){var i=e.extend({},t,!0);new n(e(this),i)}),this;if("string"==typeof t){var i=this.data("select2");null==i&&window.console&&console.error&&console.error("The select2('"+t+"') method was called on an element that is not using Select2.");var r=Array.prototype.slice.call(arguments,1),s=i[t](r);return e.inArray(t,o)>-1?this:s}throw new Error("Invalid arguments for Select2: "+t)}}return null==e.fn.select2.defaults&&(e.fn.select2.defaults=i),n}),function(n){"function"==typeof t.define&&t.define.amd?t.define("jquery.mousewheel",["jquery"],n):"object"==typeof exports?module.exports=n:n(e)}(function(e){function t(t){var s=t||window.event,a=l.call(arguments,1),c=0,d=0,p=0,h=0,f=0,g=0;if(t=e.event.fix(s),t.type="mousewheel","detail"in s&&(p=-1*s.detail),"wheelDelta"in s&&(p=s.wheelDelta),"wheelDeltaY"in s&&(p=s.wheelDeltaY),"wheelDeltaX"in s&&(d=-1*s.wheelDeltaX),"axis"in s&&s.axis===s.HORIZONTAL_AXIS&&(d=-1*p,p=0),c=0===p?d:p,"deltaY"in s&&(c=p=-1*s.deltaY),"deltaX"in s&&(d=s.deltaX,0===p&&(c=-1*d)),0!==p||0!==d){if(1===s.deltaMode){var m=e.data(this,"mousewheel-line-height");c*=m,p*=m,d*=m}else if(2===s.deltaMode){var v=e.data(this,"mousewheel-page-height");c*=v,p*=v,d*=v}if(h=Math.max(Math.abs(p),Math.abs(d)),(!r||h<r)&&(r=h,i(s,h)&&(r/=40)),i(s,h)&&(c/=40,d/=40,p/=40),c=Math[c>=1?"floor":"ceil"](c/r),d=Math[d>=1?"floor":"ceil"](d/r),p=Math[p>=1?"floor":"ceil"](p/r),u.settings.normalizeOffset&&this.getBoundingClientRect){var y=this.getBoundingClientRect();f=t.clientX-y.left,g=t.clientY-y.top}return t.deltaX=d,t.deltaY=p,t.deltaFactor=r,t.offsetX=f,t.offsetY=g,t.deltaMode=0,a.unshift(t,c,d,p),o&&clearTimeout(o),o=setTimeout(n,200),(e.event.dispatch||e.event.handle).apply(this,a)}}function n(){r=null}function i(e,t){return u.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120==0}var o,r,s=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],a="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],l=Array.prototype.slice;if(e.event.fixHooks)for(var c=s.length;c;)e.event.fixHooks[s[--c]]=e.event.mouseHooks;var u=e.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var n=a.length;n;)this.addEventListener(a[--n],t,!1);else this.onmousewheel=t;e.data(this,"mousewheel-line-height",u.getLineHeight(this)),e.data(this,"mousewheel-page-height",u.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var n=a.length;n;)this.removeEventListener(a[--n],t,!1);else this.onmousewheel=null;e.removeData(this,"mousewheel-line-height"),e.removeData(this,"mousewheel-page-height")},getLineHeight:function(t){var n=e(t),i=n["offsetParent"in e.fn?"offsetParent":"parent"]();return i.length||(i=e("body")),parseInt(i.css("fontSize"),10)||parseInt(n.css("fontSize"),10)||16},getPageHeight:function(t){return e(t).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})}),{define:t.define,require:t.require}}(),n=t.require("jquery.select2");return e.fn.select2.amd=t,n});var Hashtable=function(){function t(e){var i;if("string"==typeof e)return e;if(typeof e.hashCode==u)return i=e.hashCode(),"string"==typeof i?i:t(i);if(typeof e.toString==u)return e.toString();try{return String(e)}catch(t){return Object.prototype.toString.call(e)}}function e(t,e){return t.equals(e)}function i(t,e){return typeof e.equals==u?e.equals(t):t===e}function s(t){return function(e){if(null===e)throw new Error("null is not a valid "+t);if(void 0===e)throw new Error(t+" must not be undefined")}}function n(t,e,i,s){this[0]=t,this.entries=[],this.addEntry(e,i),null!==s&&(this.getEqualityFunction=function(){return s})}function r(t){return function(e){for(var i,s=this.entries.length,n=this.getEqualityFunction(e);s--;)if(i=this.entries[s],n(e,i[0]))switch(t){case d:return!0;case g:return i;case v:return[s,i[1]]}return!1}}function o(t){return function(e){for(var i=e.length,s=0,n=this.entries.length;s<n;++s)e[i+s]=this.entries[s][t]}}function a(t,e){for(var i,s=t.length;s--;)if(i=t[s],e===i[0])return s;return null}function l(t,e){var i=t[e];return i&&i instanceof n?i:null}function h(e,i){var s=this,r=[],o={},d=typeof e==u?e:t,g=typeof i==u?i:null;this.put=function(t,e){f(t),p(e);var i,s,a=d(t),h=null;return i=l(o,a),i?(s=i.getEntryForKey(t))?(h=s[1],s[1]=e):i.addEntry(t,e):(i=new n(a,t,e,g),r[r.length]=i,o[a]=i),h},this.get=function(t){f(t);var e=d(t),i=l(o,e);if(i){var s=i.getEntryForKey(t);if(s)return s[1]}return null},this.containsKey=function(t){f(t);var e=d(t),i=l(o,e);return!!i&&i.containsKey(t)},this.containsValue=function(t){p(t);for(var e=r.length;e--;)if(r[e].containsValue(t))return!0;return!1},this.clear=function(){r.length=0,o={}},this.isEmpty=function(){return!r.length};var v=function(t){return function(){for(var e=[],i=r.length;i--;)r[i][t](e);return e}};this.keys=v("keys"),this.values=v("values"),this.entries=v("getEntries"),this.remove=function(t){f(t);var e,i=d(t),s=null,n=l(o,i);return n&&null!==(s=n.removeEntryForKey(t))&&(n.entries.length||(e=a(r,i),c(r,e),delete o[i])),s},this.size=function(){for(var t=0,e=r.length;e--;)t+=r[e].entries.length;return t},this.each=function(t){for(var e,i=s.entries(),n=i.length;n--;)t((e=i[n])[0],e[1])},this.putAll=function(t,e){for(var i,n,r,o,a=t.entries(),l=a.length,h=typeof e==u;l--;)n=(i=a[l])[0],r=i[1],h&&(o=s.get(n))&&(r=e(n,o,r)),s.put(n,r)},this.clone=function(){var t=new h(e,i);return t.putAll(s),t}}var u="function",c=typeof Array.prototype.splice==u?function(t,e){t.splice(e,1)}:function(t,e){var i,s,n;if(e===t.length-1)t.length=e;else for(i=t.slice(e+1),t.length=e,s=0,n=i.length;s<n;++s)t[e+s]=i[s]},f=s("key"),p=s("value"),d=0,g=1,v=2;return n.prototype={getEqualityFunction:function(t){return typeof t.equals==u?e:i},getEntryForKey:r(g),getEntryAndIndexForKey:r(v),removeEntryForKey:function(t){var e=this.getEntryAndIndexForKey(t);return e?(c(this.entries,e[0]),e[1]):null},addEntry:function(t,e){this.entries[this.entries.length]=[t,e]},keys:o(0),values:o(1),getEntries:function(t){for(var e=t.length,i=0,s=this.entries.length;i<s;++i)t[e+i]=this.entries[i].slice(0)},containsKey:r(d),containsValue:function(t){for(var e=this.entries.length;e--;)if(t===this.entries[e][1])return!0;return!1}},h}();!function(t){function e(t,e,i){this.dec=t,this.group=e,this.neg=i}function i(){for(var t=0;t<o.length;t++){localeGroup=o[t];for(var e=0;e<localeGroup.length;e++)n.put(localeGroup[e],t)}}function s(t,s){0==n.size()&&i();var o=".",a=",";0==s&&(-1!=t.indexOf("_")?t=t.split("_")[1].toLowerCase():-1!=t.indexOf("-")&&(t=t.split("-")[1].toLowerCase()));var l=n.get(t);if(l){var h=r[l];h&&(o=h[0],a=h[1])}return new e(o,a,"-")}var n=new Hashtable,r=[[".",","],[",","."],[","," "],[".","'"]],o=[["ae","au","ca","cn","eg","gb","hk","il","in","jp","sk","th","tw","us"],["at","br","de","dk","es","gr","it","nl","pt","tr","vn"],["cz","fi","fr","ru","se","pl"],["ch"]];t.fn.formatNumber=function(e,i,s){return this.each(function(){null==i&&(i=!0),null==s&&(s=!0);var n;n=t(this).is(":input")?new String(t(this).val()):new String(t(this).text());var r=t.formatNumber(n,e);if(i&&(t(this).is(":input")?t(this).val(r):t(this).text(r)),s)return r})},t.formatNumber=function(e,i){for(var n=s((i=t.extend({},t.fn.formatNumber.defaults,i)).locale.toLowerCase(),i.isFullLocale),r=(n.dec,n.group,n.neg,""),o=!1,a=0;a<i.format.length;a++){if(-1!="0#-,.".indexOf(i.format.charAt(a))){if(0==a&&"-"==i.format.charAt(a)){o=!0;continue}break}r+=i.format.charAt(a)}for(var l="",a=i.format.length-1;a>=0&&-1=="0#-,.".indexOf(i.format.charAt(a));a--)l=i.format.charAt(a)+l;i.format=i.format.substring(r.length),i.format=i.format.substring(0,i.format.length-l.length);var h=new Number(e);return t._formatNumber(h,i,l,r,o)},t._formatNumber=function(e,i,n,r,o){var a=s((i=t.extend({},t.fn.formatNumber.defaults,i)).locale.toLowerCase(),i.isFullLocale),l=a.dec,h=a.group,u=a.neg,c=!1;if(isNaN(e)){if(1!=i.nanForceZero)return null;e=0,c=!0}"%"==n&&(e*=100);var f="";if(i.format.indexOf(".")>-1){var p=l,d=i.format.substring(i.format.lastIndexOf(".")+1);if(1==i.round)e=new Number(e.toFixed(d.length));else{var g=e.toString();g=g.substring(0,g.lastIndexOf(".")+d.length+1),e=new Number(g)}var v=e%1,m=new String(v.toFixed(d.length));m=m.substring(m.lastIndexOf(".")+1);for(k=0;k<d.length;k++)if("#"!=d.charAt(k)||"0"==m.charAt(k)){if("#"==d.charAt(k)&&"0"==m.charAt(k)){if(m.substring(k).match("[1-9]")){p+=m.charAt(k);continue}break}"0"==d.charAt(k)&&(p+=m.charAt(k))}else p+=m.charAt(k);f+=p}else e=Math.round(e);var b=Math.floor(e);e<0&&(b=Math.ceil(e));var y="";y=-1==i.format.indexOf(".")?i.format:i.format.substring(0,i.format.indexOf("."));var w="";if(0!=b||"#"!=y.substr(y.length-1)||c){var N=new String(Math.abs(b)),_=9999;-1!=y.lastIndexOf(",")&&(_=y.length-y.lastIndexOf(",")-1);for(var x=0,k=N.length-1;k>-1;k--)w=N.charAt(k)+w,++x==_&&0!=k&&(w=h+w,x=0);if(y.length>w.length){var O=y.indexOf("0");if(-1!=O)for(var S=y.length-O,A=y.length-w.length-1;w.length<S;){var C=y.charAt(A);","==C&&(C=h),w=C+w,A--}}}return w||-1===y.indexOf("0",y.length-1)||(w="0"),f=w+f,e<0&&o&&r.length>0?r=u+r:e<0&&(f=u+f),i.decimalSeparatorAlwaysShown||f.lastIndexOf(l)==f.length-1&&(f=f.substring(0,f.length-1)),f=r+f+n},t.fn.parseNumber=function(e,i,s){null==i&&(i=!0),null==s&&(s=!0);var n;n=t(this).is(":input")?new String(t(this).val()):new String(t(this).text());var r=t.parseNumber(n,e);if(r&&(i&&(t(this).is(":input")?t(this).val(r.toString()):t(this).text(r.toString())),s))return r},t.parseNumber=function(e,i){for(var n=s((i=t.extend({},t.fn.parseNumber.defaults,i)).locale.toLowerCase(),i.isFullLocale),r=n.dec,o=n.group,a=n.neg;e.indexOf(o)>-1;)e=e.replace(o,"");var l="",h=!1;"%"!=(e=e.replace(r,".").replace(a,"-")).charAt(e.length-1)&&1!=i.isPercentage||(h=!0);for(var u=0;u<e.length;u++)"1234567890.-".indexOf(e.charAt(u))>-1&&(l+=e.charAt(u));var c=new Number(l);if(h){c/=100;var f=l.indexOf(".");if(-1!=f){var p=l.length-f-1;c=c.toFixed(p+2)}else c=c.toFixed(l.length-1)}return c},t.fn.parseNumber.defaults={locale:"br",decimalSeparatorAlwaysShown:!1,isPercentage:!1,isFullLocale:!1},t.fn.formatNumber.defaults={format:"#.###,00",locale:"br",decimalSeparatorAlwaysShown:!1,nanForceZero:!0,round:!0,isFullLocale:!1},Number.prototype.toFixed=function(e){return t._roundNumber(this,e)},t._roundNumber=function(t,e){var i=Math.pow(10,e||0),s=String(Math.round(t*i)/i);if(e>0){var n=s.indexOf(".");for(-1==n?(s+=".",n=0):n=s.length-(n+1);n<e;)s+="0",n++}return s}}(jQuery),function(){var t={};this.tmpl=function e(i,s){var n=/\W/.test(i)?new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+i.replace(/[\r\t\n]/g," ").split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');"):t[i]=t[i]||e(document.getElementById(i).innerHTML);return s?n(s):n}}(),function(t){t.baseClass=function(e){return(e=t(e)).get(0).className.match(/([^ ]+)/)[1]},t.fn.addDependClass=function(e,i){var s={delimiter:i||"-"};return this.each(function(){var i=t.baseClass(this);i&&t(this).addClass(i+s.delimiter+e)})},t.fn.removeDependClass=function(e,i){var s={delimiter:i||"-"};return this.each(function(){var i=t.baseClass(this);i&&t(this).removeClass(i+s.delimiter+e)})},t.fn.toggleDependClass=function(e,i){var s={delimiter:i||"-"};return this.each(function(){var i=t.baseClass(this);i&&(t(this).is("."+i+s.delimiter+e)?t(this).removeClass(i+s.delimiter+e):t(this).addClass(i+s.delimiter+e))})}}(jQuery),function(t){function e(){this._init.apply(this,arguments)}e.prototype.oninit=function(){},e.prototype.events=function(){},e.prototype.onmousedown=function(){this.ptr.css({position:"absolute"})},e.prototype.onmousemove=function(t,e,i){this.ptr.css({left:e,top:i})},e.prototype.onmouseup=function(){},e.prototype.isDefault={drag:!1,clicked:!1,toclick:!0,mouseup:!1},e.prototype._init=function(){if(arguments.length>0){this.ptr=t(arguments[0]),this.outer=t(".draggable-outer"),this.is={},t.extend(this.is,this.isDefault);var e=this.ptr.offset();this.d={left:e.left,top:e.top,width:this.ptr.width(),height:this.ptr.height()},this.oninit.apply(this,arguments),this._events()}},e.prototype._getPageCoords=function(t){return t.targetTouches&&t.targetTouches[0]?{x:t.targetTouches[0].pageX,y:t.targetTouches[0].pageY}:{x:t.pageX,y:t.pageY}},e.prototype._bindEvent=function(t,e,i){this.supportTouches_?t.get(0).addEventListener(this.events_[e],i,!1):t.bind(this.events_[e],i)},e.prototype._events=function(){var e=this;this.supportTouches_="ontouchend"in document,this.events_={click:this.supportTouches_?"touchstart":"click",down:this.supportTouches_?"touchstart":"mousedown",move:this.supportTouches_?"touchmove":"mousemove",up:this.supportTouches_?"touchend":"mouseup"},this._bindEvent(t(document),"move",function(t){e.is.drag&&(t.stopPropagation(),t.preventDefault(),e._mousemove(t))}),this._bindEvent(t(document),"down",function(t){e.is.drag&&(t.stopPropagation(),t.preventDefault())}),this._bindEvent(t(document),"up",function(t){e._mouseup(t)}),this._bindEvent(this.ptr,"down",function(t){return e._mousedown(t),!1}),this._bindEvent(this.ptr,"up",function(t){e._mouseup(t)}),this.ptr.find("a").click(function(){if(e.is.clicked=!0,!e.is.toclick)return e.is.toclick=!0,!1}).mousedown(function(t){return e._mousedown(t),!1}),this.events()},e.prototype._mousedown=function(e){this.is.drag=!0,this.is.clicked=!1,this.is.mouseup=!1;var i=this.ptr.offset(),s=this._getPageCoords(e);this.cx=s.x-i.left,this.cy=s.y-i.top,t.extend(this.d,{left:i.left,top:i.top,width:this.ptr.width(),height:this.ptr.height()}),this.outer&&this.outer.get(0)&&this.outer.css({height:Math.max(this.outer.height(),t(document.body).height()),overflow:"hidden"}),this.onmousedown(e)},e.prototype._mousemove=function(t){this.is.toclick=!1;var e=this._getPageCoords(t);this.onmousemove(t,e.x-this.cx,e.y-this.cy)},e.prototype._mouseup=function(e){this.is.drag&&(this.is.drag=!1,this.outer&&this.outer.get(0)&&(t.browser.mozilla?this.outer.css({overflow:"hidden"}):this.outer.css({overflow:"visible"}),t.browser.msie&&"6.0"==t.browser.version?this.outer.css({height:"100%"}):this.outer.css({height:"auto"})),this.onmouseup(e))},window.Draggable=e}(jQuery),function(t){function e(t){return void 0!==t&&(t instanceof Array||!(t instanceof Object)&&"[object Array]"==Object.prototype.toString.call(t)||"number"==typeof t.length&&void 0!==t.splice&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("splice"))}function i(){return this.init.apply(this,arguments)}function s(){Draggable.apply(this,arguments)}t.slider=function(e,s){var n=t(e);return n.data("jslider")||n.data("jslider",new i(e,s)),n.data("jslider")},t.fn.slider=function(i,s){function n(t){return void 0!==t}function r(t){return null!=t}var o,a=arguments;return this.each(function(){var l=t.slider(this,i);if("string"==typeof i)switch(i){case"value":n(a[1])&&n(a[2])?(r((h=l.getPointers())[0])&&r(a[1])&&(h[0].set(a[1]),h[0].setIndexOver()),r(h[1])&&r(a[2])&&(h[1].set(a[2]),h[1].setIndexOver())):n(a[1])?r((h=l.getPointers())[0])&&r(a[1])&&(h[0].set(a[1]),h[0].setIndexOver()):o=l.getValue();break;case"prc":if(n(a[1])&&n(a[2]))r((h=l.getPointers())[0])&&r(a[1])&&(h[0]._set(a[1]),h[0].setIndexOver()),r(h[1])&&r(a[2])&&(h[1]._set(a[2]),h[1].setIndexOver());else if(n(a[1])){var h=l.getPointers();r(h[0])&&r(a[1])&&(h[0]._set(a[1]),h[0].setIndexOver())}else o=l.getPrcValue();break;case"calculatedValue":var u=l.getValue().split(";");o="";for(var c=0;c<u.length;c++)o+=(c>0?";":"")+l.nice(u[c]);break;case"skin":l.setSkin(a[1])}else i||s||(e(o)||(o=[]),o.push(l))}),e(o)&&1==o.length&&(o=o[0]),o||this};var n={settings:{from:1,to:10,step:1,smooth:!0,limits:!0,round:0,format:{format:"#,##0.##"},value:"5;7",dimension:""},className:"jslider",selector:".jslider-",template:tmpl('<span class="<%=className%>"><table><tr><td><div class="<%=className%>-bg"><i class="l not_efeito"></i><i class="f"></i><i class="r"></i><i class="v not_efeito"></i></div><div class="<%=className%>-pointer not_efeito"></div><div class="<%=className%>-pointer <%=className%>-pointer-to not_efeito"></div><div class="<%=className%>-label not_efeito"><%=settings.dimension%> <span><%=settings.from%></span></div><div class="<%=className%>-label <%=className%>-label-to not_efeito"><%=settings.dimension%> <span><%=settings.to%></span></div><div class="<%=className%>-value z1 not_efeito"><%=settings.dimension%> <span></span></div><div class="<%=className%>-value <%=className%>-value-to not_efeito"><%=settings.dimension%> <span></span></div><div class="<%=className%>-scale not_efeito"><%=scale%></div></td></tr></table></span>')};i.prototype.init=function(e,i){this.settings=t.extend(!0,{},n.settings,i||{}),this.inputNode=t(e).hide(),this.settings.interval=this.settings.to-this.settings.from,this.settings.value=this.inputNode.attr("value"),this.settings.calculate&&t.isFunction(this.settings.calculate)&&(this.nice=this.settings.calculate),this.settings.onstatechange&&t.isFunction(this.settings.onstatechange)&&(this.onstatechange=this.settings.onstatechange),this.is={init:!1},this.o={},this.create()},i.prototype.onstatechange=function(){},i.prototype.create=function(){var e=this;this.domNode=t(n.template({className:n.className,settings:{from:this.nice(this.settings.from),to:this.nice(this.settings.to),dimension:this.settings.dimension},scale:this.generateScale()})),this.inputNode.after(this.domNode),this.drawScale(),this.settings.skin&&this.settings.skin.length>0&&this.setSkin(this.settings.skin),this.sizes={domWidth:this.domNode.width(),domOffset:this.domNode.offset()},t.extend(this.o,{pointers:{},labels:{0:{o:this.domNode.find(n.selector+"value").not(n.selector+"value-to")},1:{o:this.domNode.find(n.selector+"value").filter(n.selector+"value-to")}},limits:{0:this.domNode.find(n.selector+"label").not(n.selector+"label-to"),1:this.domNode.find(n.selector+"label").filter(n.selector+"label-to")}}),t.extend(this.o.labels[0],{value:this.o.labels[0].o.find("span")}),t.extend(this.o.labels[1],{value:this.o.labels[1].o.find("span")}),e.settings.value.split(";")[1]||(this.settings.single=!0,this.domNode.addDependClass("single")),e.settings.limits||this.domNode.addDependClass("limitless"),this.domNode.find(n.selector+"pointer").each(function(t){var i=e.settings.value.split(";")[t];if(i){e.o.pointers[t]=new s(this,t,e);var n=e.settings.value.split(";")[t-1];n&&new Number(i)<new Number(n)&&(i=n),i=(i=i<e.settings.from?e.settings.from:i)>e.settings.to?e.settings.to:i,e.o.pointers[t].set(i,!0)}}),this.o.value=this.domNode.find(".v"),this.is.init=!0,t.each(this.o.pointers,function(t){e.redraw(this)}),function(e){t(window).resize(function(){e.onresize()})}(this)},i.prototype.setSkin=function(t){this.skin_&&this.domNode.removeDependClass(this.skin_,"_"),this.domNode.addDependClass(this.skin_=t,"_")},i.prototype.setPointersIndex=function(e){t.each(this.getPointers(),function(t){this.index(t)})},i.prototype.getPointers=function(){return this.o.pointers},i.prototype.generateScale=function(){if(this.settings.scale&&this.settings.scale.length>0){for(var t="",e=this.settings.scale,i=Math.round(100/(e.length-1)*10)/10,s=0;s<e.length;s++)t+='<span style="left: '+s*i+'%">'+("|"!=e[s]?"<ins>"+e[s]+"</ins>":"")+"</span>";return t}return""},i.prototype.drawScale=function(){this.domNode.find(n.selector+"scale span ins").each(function(){t(this).css({marginLeft:-t(this).outerWidth()/2})})},i.prototype.onresize=function(){var e=this;this.sizes={domWidth:this.domNode.width(),domOffset:this.domNode.offset()},t.each(this.o.pointers,function(t){e.redraw(this)})},i.prototype.update=function(){this.onresize(),this.drawScale()},i.prototype.limits=function(t,e){if(!this.settings.smooth){var i=100*this.settings.step/this.settings.interval;t=Math.round(t/i)*i}var s=this.o.pointers[1-e.uid];return s&&e.uid&&t<s.value.prc&&(t=s.value.prc),s&&!e.uid&&t>s.value.prc&&(t=s.value.prc),t<0&&(t=0),t>100&&(t=100),Math.round(10*t)/10},i.prototype.redraw=function(t){if(!this.is.init)return!1;this.setValue(),this.o.pointers[0]&&this.o.pointers[1]&&this.o.value.css({left:this.o.pointers[0].value.prc+"%",width:this.o.pointers[1].value.prc-this.o.pointers[0].value.prc+"%"}),this.o.labels[t.uid].value.html(this.nice(t.value.origin)),this.redrawLabels(t)},i.prototype.redrawLabels=function(t){function e(t,e,s){return e.margin=-e.label/2,label_left=e.border+e.margin,label_left<0&&(e.margin-=label_left),e.border+e.label/2>i.sizes.domWidth?(e.margin=0,e.right=!0):e.right=!1,t.o.css({left:s+"%",marginLeft:e.margin,right:"auto"}),e.right&&t.o.css({left:"auto",right:0}),e}var i=this,s=this.o.labels[t.uid],n=t.value.prc,r={label:s.o.outerWidth(),right:!1,border:n*this.sizes.domWidth/100};if(!this.settings.single){var o=this.o.pointers[1-t.uid],a=this.o.labels[o.uid];switch(t.uid){case 0:r.border+r.label/2>a.o.offset().left-this.sizes.domOffset.left?(a.o.css({visibility:"hidden"}),a.value.html(this.nice(o.value.origin)),s.o.css({visibility:"visible"}),n=(o.value.prc-n)/2+n,o.value.prc!=t.value.prc&&(s.value.html(this.nice(t.value.origin)+"&nbsp;&ndash;&nbsp;"+this.nice(o.value.origin)),r.label=s.o.outerWidth(),r.border=n*this.sizes.domWidth/100)):a.o.css({visibility:"visible"});break;case 1:r.border-r.label/2<a.o.offset().left-this.sizes.domOffset.left+a.o.outerWidth()?(a.o.css({visibility:"hidden"}),a.value.html(this.nice(o.value.origin)),s.o.css({visibility:"visible"}),n=(n-o.value.prc)/2+o.value.prc,o.value.prc!=t.value.prc&&(s.value.html(this.nice(o.value.origin)+"&nbsp;&ndash;&nbsp;"+this.nice(t.value.origin)),r.label=s.o.outerWidth(),r.border=n*this.sizes.domWidth/100)):a.o.css({visibility:"visible"})}}r=e(s,r,n),a&&(r=e(a,r={label:a.o.outerWidth(),right:!1,border:o.value.prc*this.sizes.domWidth/100},o.value.prc)),this.redrawLimits()},i.prototype.redrawLimits=function(){if(this.settings.limits){var t=[!0,!0];for(key in this.o.pointers)if(!this.settings.single||0==key){var e=this.o.pointers[key],i=this.o.labels[e.uid],s=i.o.offset().left-this.sizes.domOffset.left;s<(n=this.o.limits[0]).outerWidth()&&(t[0]=!1);var n=this.o.limits[1];s+i.o.outerWidth()>this.sizes.domWidth-n.outerWidth()&&(t[1]=!1)}for(var r=0;r<t.length;r++)t[r]?this.o.limits[r].fadeIn("fast"):this.o.limits[r].fadeOut("fast")}},i.prototype.setValue=function(){var t=this.getValue();this.inputNode.attr("value",t),this.onstatechange.call(this,t)},i.prototype.getValue=function(){if(!this.is.init)return!1;var e=this,i="";return t.each(this.o.pointers,function(t){void 0==this.value.prc||isNaN(this.value.prc)||(i+=(t>0?";":"")+e.prcToValue(this.value.prc))}),i},i.prototype.getPrcValue=function(){if(!this.is.init)return!1;var e="";return t.each(this.o.pointers,function(t){void 0==this.value.prc||isNaN(this.value.prc)||(e+=(t>0?";":"")+this.value.prc)}),e},i.prototype.prcToValue=function(t){if(this.settings.heterogeneity&&this.settings.heterogeneity.length>0)for(var e=this.settings.heterogeneity,i=0,s=this.settings.from,n=0;n<=e.length;n++){if(e[n])r=e[n].split("/");else var r=[100,this.settings.to];if(r[0]=new Number(r[0]),r[1]=new Number(r[1]),t>=i&&t<=r[0])o=s+(t-i)*(r[1]-s)/(r[0]-i);i=r[0],s=r[1]}else var o=this.settings.from+t*this.settings.interval/100;return this.round(o)},i.prototype.valueToPrc=function(t,e){if(this.settings.heterogeneity&&this.settings.heterogeneity.length>0)for(var i=this.settings.heterogeneity,s=0,n=this.settings.from,r=0;r<=i.length;r++){if(i[r])o=i[r].split("/");else var o=[100,this.settings.to];if(o[0]=new Number(o[0]),o[1]=new Number(o[1]),t>=n&&t<=o[1])a=e.limits(s+(t-n)*(o[0]-s)/(o[1]-n));s=o[0],n=o[1]}else var a=e.limits(100*(t-this.settings.from)/this.settings.interval);return a},i.prototype.round=function(t){return t=Math.round(t/this.settings.step)*this.settings.step,t=this.settings.round?Math.round(t*Math.pow(10,this.settings.round))/Math.pow(10,this.settings.round):Math.round(t)},i.prototype.nice=function(e){return e=e.toString().replace(/,/gi,".").replace(/ /gi,""),t.formatNumber?t.formatNumber(new Number(e),this.settings.format||{}).replace(/-/gi,"&minus;"):new Number(e)},(s.prototype=new Draggable).oninit=function(t,e,i){this.uid=e,this.parent=i,this.value={},this.settings=this.parent.settings},s.prototype.onmousedown=function(t){this._parent={offset:this.parent.domNode.offset(),width:this.parent.domNode.width()},this.ptr.addDependClass("hover"),this.setIndexOver()},s.prototype.onmousemove=function(t,e){var i=this._getPageCoords(t);this._set(this.calc(i.x))},s.prototype.onmouseup=function(e){this.parent.settings.callback&&t.isFunction(this.parent.settings.callback)&&this.parent.settings.callback.call(this.parent,this.parent.getValue()),this.ptr.removeDependClass("hover")},s.prototype.setIndexOver=function(){this.parent.setPointersIndex(1),this.index(2)},s.prototype.index=function(t){this.ptr.css({zIndex:t})},s.prototype.limits=function(t){return this.parent.limits(t,this)},s.prototype.calc=function(t){return this.limits(100*(t-this._parent.offset.left)/this._parent.width)},s.prototype.set=function(t,e){this.value.origin=this.parent.round(t),this._set(this.parent.valueToPrc(t,this),e)},s.prototype._set=function(t,e){e||(this.value.origin=this.parent.prcToValue(t)),this.value.prc=t,this.ptr.css({left:t+"%"}),this.parent.redraw(this)}}(jQuery);!function(e,i){"use strict";var t={item:0,autoWidth:!1,slideMove:1,slideMargin:0,addClass:"",mode:"slide",useCSS:!0,cssEasing:"ease",easing:"linear",speed:300,auto:!1,pauseOnHover:!1,loop:!0,slideEndAnimation:!0,pause:2e3,keyPress:!0,controls:!0,prevHtml:"",nextHtml:"",rtl:!1,adaptiveHeight:!1,vertical:!1,verticalHeight:500,vThumbWidth:100,thumbItem:10,pager:!0,gallery:!1,galleryMargin:5,thumbMargin:5,currentPagerPosition:"middle",enableTouch:!0,enableDrag:!0,freeMove:!0,swipeThreshold:40,responsive:[],onBeforeStart:function(e){},onSliderLoad:function(e){},onBeforeSlide:function(e,i){},onAfterSlide:function(e,i){},onBeforeNextSlide:function(e,i){},onBeforePrevSlide:function(e,i){}};e.fn.lightSlider=function(i){if(0===this.length)return this;if(this.length>1)return this.each(function(){e(this).lightSlider(i)}),this;var n={},l=e.extend(!0,{},t,i),a={},s=this;n.$el=this,"fade"===l.mode&&(l.vertical=!1);var o=s.children(),r=e(window).width(),d=null,c=null,u=0,f=0,h=!1,g=0,v="",p=0,m=!0===l.vertical?"height":"width",S=!0===l.vertical?"margin-bottom":"margin-right",b=0,C=0,M=0,T=0,x=null,w="ontouchstart"in document.documentElement,P={};return P.chbreakpoint=function(){if(r=e(window).width(),l.responsive.length){var i;if(!1===l.autoWidth&&(i=l.item),r<l.responsive[0].breakpoint)for(var t=0;t<l.responsive.length;t++)r<l.responsive[t].breakpoint&&(d=l.responsive[t].breakpoint,c=l.responsive[t]);if(void 0!==c&&null!==c)for(var n in c.settings)c.settings.hasOwnProperty(n)&&(void 0!==a[n]&&null!==a[n]||(a[n]=l[n]),l[n]=c.settings[n]);if(!e.isEmptyObject(a)&&r>l.responsive[0].breakpoint)for(var s in a)a.hasOwnProperty(s)&&(l[s]=a[s]);!1===l.autoWidth&&b>0&&M>0&&i!==l.item&&(p=Math.round(b/((M+l.slideMargin)*l.slideMove)))}},P.calSW=function(){!1===l.autoWidth&&(M=(g-(l.item*l.slideMargin-l.slideMargin))/l.item)},P.calWidth=function(e){var i=!0===e?v.find(".lslide").length:o.length;if(!1===l.autoWidth)f=i*(M+l.slideMargin);else{f=0;for(var t=0;t<i;t++)f+=parseInt(o.eq(t).width())+l.slideMargin}return f},(n={doCss:function(){return!(!l.useCSS||!function(){for(var e=["transition","MozTransition","WebkitTransition","OTransition","msTransition","KhtmlTransition"],i=document.documentElement,t=0;t<e.length;t++)if(e[t]in i.style)return!0}())},keyPress:function(){l.keyPress&&e(document).on("keyup.lightslider",function(i){e(":focus").is("input, textarea")||(i.preventDefault?i.preventDefault():i.returnValue=!1,37===i.keyCode?s.goToPrevSlide():39===i.keyCode&&s.goToNextSlide())})},controls:function(){l.controls&&(s.after('<div class="lSAction"><a class="lSPrev plugin_seta_left"><span></span><p class="dni">'+l.prevHtml+'</p></a><a class="lSNext plugin_seta_right"><span></span><p class="dni">'+l.nextHtml+"</p></a></div>"),l.autoWidth?P.calWidth(!1)<g&&v.find(".lSAction").hide():u<=l.item&&v.find(".lSAction").hide(),v.find(".lSAction a").on("click",function(i){return i.preventDefault?i.preventDefault():i.returnValue=!1,"lSPrev"===e(this).attr("class")?s.goToPrevSlide():s.goToNextSlide(),!1}))},initialStyle:function(){var e=this;"fade"===l.mode&&(l.autoWidth=!1,l.slideEndAnimation=!1),l.auto&&(l.slideEndAnimation=!1),l.autoWidth&&(l.slideMove=1,l.item=1),l.loop&&(l.slideMove=1,l.freeMove=!1),l.onBeforeStart.call(this,s),P.chbreakpoint(),s.addClass("lightSlider").wrap('<div class="lSSlideOuter '+l.addClass+'"><div class="lSSlideWrapper Plugin"></div></div>'),v=s.parent(".lSSlideWrapper"),!0===l.rtl&&v.parent().addClass("lSrtl"),l.vertical?(v.parent().addClass("vertical"),g=l.verticalHeight,v.css("height",g+"px")):g=s.outerWidth(),o.addClass("lslide"),!0===l.loop&&"slide"===l.mode&&(P.calSW(),P.clone=function(){if(P.calWidth(!0)>g){for(var i=0,t=0,n=0;n<o.length&&(i+=parseInt(s.find(".lslide").eq(n).width())+l.slideMargin,t++,!(i>=g+l.slideMargin));n++);var a=!0===l.autoWidth?t:l.item;if(a<s.find(".clone.left").length)for(var r=0;r<s.find(".clone.left").length-a;r++)o.eq(r).remove();if(a<s.find(".clone.right").length)for(var d=o.length-1;d>o.length-1-s.find(".clone.right").length;d--)p--,o.eq(d).remove();for(var c=s.find(".clone.right").length;c<a;c++)s.find(".lslide").eq(c).clone().removeClass("lslide").addClass("clone right").appendTo(s),p++;for(var u=s.find(".lslide").length-s.find(".clone.left").length;u>s.find(".lslide").length-a;u--)s.find(".lslide").eq(u-1).clone().removeClass("lslide").addClass("clone left").prependTo(s);o=s.children()}else o.hasClass("clone")&&(s.find(".clone").remove(),e.move(s,0))},P.clone()),P.sSW=function(){u=o.length,!0===l.rtl&&!1===l.vertical&&(S="margin-left"),!1===l.autoWidth&&o.css(m,M+"px"),o.css(S,l.slideMargin+"px"),f=P.calWidth(!1),s.css(m,f+"px"),!0===l.loop&&"slide"===l.mode&&!1===h&&(p=s.find(".clone.left").length)},P.calL=function(){o=s.children(),u=o.length},this.doCss()&&v.addClass("usingCss"),P.calL(),"slide"===l.mode?(P.calSW(),P.sSW(),!0===l.loop&&(b=e.slideValue(),this.move(s,b)),!1===l.vertical&&this.setHeight(s,!1)):(this.setHeight(s,!0),s.addClass("lSFade"),this.doCss()||(o.fadeOut(0),o.eq(p).fadeIn(0))),!0===l.loop&&"slide"===l.mode?o.eq(p).addClass("active"):o.first().addClass("active")},pager:function(){var e=this;if(P.createPager=function(){T=(g-(l.thumbItem*l.thumbMargin-l.thumbMargin))/l.thumbItem;var i=v.find(".lslide"),t=v.find(".lslide").length,n=0,a="",o=0;for(n=0;n<t;n++){"slide"===l.mode&&(l.autoWidth?o+=(parseInt(i.eq(n).width())+l.slideMargin)*l.slideMove:o=n*((M+l.slideMargin)*l.slideMove));var r=i.eq(n*l.slideMove).attr("data-thumb");if(!0===l.gallery?a+='<li style="width:100%;'+m+":"+T+"px;"+S+":"+l.thumbMargin+'px"><a href="#"><img src="'+r+'" /></a></li>':a+='<li class="plugin_paginacao_item"><a href="#">'+(n+1)+"</a></li>","slide"===l.mode&&o>=f-g-l.slideMargin){n+=1;var d=2;l.autoWidth&&(a+='<li><a href="#">'+(n+1)+"</a></li>",d=1),n<d?(a=null,v.parent().addClass("noPager")):v.parent().removeClass("noPager");break}}var c=v.parent();c.find(".lSPager").html(a),!0===l.gallery&&(!0===l.vertical&&c.find(".lSPager").css("width",l.vThumbWidth+"px"),C=n*(l.thumbMargin+T)+.5,c.find(".lSPager").css({property:C+"px","transition-duration":l.speed+"ms"}),!0===l.vertical&&v.parent().css("padding-right",l.vThumbWidth+l.galleryMargin+"px"),c.find(".lSPager").css(m,C+"px"));var u=c.find(".lSPager").find("li");u.first().addClass("active"),u.on("click",function(){return!0===l.loop&&"slide"===l.mode?p+=u.index(this)-c.find(".lSPager").find("li.active").index():p=u.index(this),s.mode(!1),!0===l.gallery&&e.slideThumb(),!1})},l.pager){var i="lSpg";l.gallery&&(i="lSGallery"),v.after('<ul class="lSPager plugin_paginacao '+i+'"></ul>');var t=l.vertical?"margin-left":"margin-top";v.parent().find(".lSPager").css(t,l.galleryMargin+"px"),P.createPager()}setTimeout(function(){P.init()},0)},setHeight:function(e,i){var t=null,n=this;t=l.loop?e.children(".lslide ").first():e.children().first();var a=function(){var n=t.outerHeight(),l=0,a=n;i&&(n=0,l=100*a/g),e.css({height:n+"px","padding-bottom":l+"%"})};a(),t.find("img").length?t.find("img")[0].complete?(a(),x||n.auto()):t.find("img").load(function(){setTimeout(function(){a(),x||n.auto()},100)}):x||n.auto()},active:function(e,i){this.doCss()&&"fade"===l.mode&&v.addClass("on");var t=0;if(p*l.slideMove<u){e.removeClass("active"),this.doCss()||"fade"!==l.mode||!1!==i||e.fadeOut(l.speed),t=!0===i?p:p*l.slideMove;var n,a;!0===i&&(a=(n=e.length)-1,t+1>=n&&(t=a)),!0===l.loop&&"slide"===l.mode&&(t=!0===i?p-s.find(".clone.left").length:p*l.slideMove,!0===i&&(a=(n=e.length)-1,t+1===n?t=a:t+1>n&&(t=0))),this.doCss()||"fade"!==l.mode||!1!==i||e.eq(t).fadeIn(l.speed),e.eq(t).addClass("active")}else e.removeClass("active"),e.eq(e.length-1).addClass("active"),this.doCss()||"fade"!==l.mode||!1!==i||(e.fadeOut(l.speed),e.eq(t).fadeIn(l.speed))},move:function(e,i){!0===l.rtl&&(i=-i),this.doCss()?!0===l.vertical?e.css({transform:"translate3d(0px, "+-i+"px, 0px)","-webkit-transform":"translate3d(0px, "+-i+"px, 0px)"}):e.css({transform:"translate3d("+-i+"px, 0px, 0px)","-webkit-transform":"translate3d("+-i+"px, 0px, 0px)"}):!0===l.vertical?e.css("position","relative").animate({top:-i+"px"},l.speed,l.easing):e.css("position","relative").animate({left:-i+"px"},l.speed,l.easing);var t=v.parent().find(".lSPager").find("li");this.active(t,!0)},fade:function(){this.active(o,!1);var e=v.parent().find(".lSPager").find("li");this.active(e,!0)},slide:function(){var e=this;P.calSlide=function(){f>g&&(b=e.slideValue(),e.active(o,!1),b>f-g-l.slideMargin?b=f-g-l.slideMargin:b<0&&(b=0),e.move(s,b),!0===l.loop&&"slide"===l.mode&&(p>=u-s.find(".clone.left").length/l.slideMove&&e.resetSlide(s.find(".clone.left").length),0===p&&e.resetSlide(v.find(".lslide").length)))},P.calSlide()},resetSlide:function(e){var i=this;v.find(".lSAction a").addClass("disabled"),setTimeout(function(){p=e,v.css("transition-duration","0ms"),b=i.slideValue(),i.active(o,!1),n.move(s,b),setTimeout(function(){v.css("transition-duration",l.speed+"ms"),v.find(".lSAction a").removeClass("disabled")},50)},l.speed+100)},slideValue:function(){var e=0;if(!1===l.autoWidth)e=p*((M+l.slideMargin)*l.slideMove);else{e=0;for(var i=0;i<p;i++)e+=parseInt(o.eq(i).width())+l.slideMargin}return e},slideThumb:function(){var e;switch(l.currentPagerPosition){case"left":e=0;break;case"middle":e=g/2-T/2;break;case"right":e=g-T}var i=p-s.find(".clone.left").length,t=v.parent().find(".lSPager");"slide"===l.mode&&!0===l.loop&&(i>=t.children().length?i=0:i<0&&(i=t.children().length));var n=i*(T+l.thumbMargin)-e;n+g>C&&(n=C-g-l.thumbMargin),n<0&&(n=0),this.move(t,n)},auto:function(){l.auto&&(clearInterval(x),x=setInterval(function(){s.goToNextSlide()},l.pause))},pauseOnHover:function(){var i=this;l.auto&&l.pauseOnHover&&(v.on("mouseenter",function(){e(this).addClass("ls-hover"),s.pause(),l.auto=!0}),v.on("mouseleave",function(){e(this).removeClass("ls-hover"),v.find(".lightSlider").hasClass("lsGrabbing")||i.auto()}))},touchMove:function(e,i){if(v.css("transition-duration","0ms"),"slide"===l.mode){var t=b-(e-i);if(t>=f-g-l.slideMargin)if(!1===l.freeMove)t=f-g-l.slideMargin;else{var n=f-g-l.slideMargin;t=n+(t-n)/5}else t<0&&(!1===l.freeMove?t=0:t/=5);this.move(s,t)}},touchEnd:function(e){if(v.css("transition-duration",l.speed+"ms"),"slide"===l.mode){var i=!1,t=!0;(b-=e)>f-g-l.slideMargin?(b=f-g-l.slideMargin,!1===l.autoWidth&&(i=!0)):b<0&&(b=0);var n=function(e){var t=0;if(i||e&&(t=1),l.autoWidth)for(var n=0,a=0;a<o.length&&(n+=parseInt(o.eq(a).width())+l.slideMargin,p=a+t,!(n>=b));a++);else{var s=b/((M+l.slideMargin)*l.slideMove);p=parseInt(s)+t,b>=f-g-l.slideMargin&&s%1!=0&&p++}};e>=l.swipeThreshold?(n(!1),t=!1):e<=-l.swipeThreshold&&(n(!0),t=!1),s.mode(t),this.slideThumb()}else e>=l.swipeThreshold?s.goToPrevSlide():e<=-l.swipeThreshold&&s.goToNextSlide()},enableDrag:function(){var i=this;if(!w){var t=0,n=0,a=!1;v.find(".lightSlider").addClass("lsGrab"),v.on("mousedown",function(i){if(f<g&&0!==f)return!1;"lSPrev"!==e(i.target).attr("class")&&"lSNext"!==e(i.target).attr("class")&&(t=!0===l.vertical?i.pageY:i.pageX,a=!0,i.preventDefault?i.preventDefault():i.returnValue=!1,v.scrollLeft+=1,v.scrollLeft-=1,v.find(".lightSlider").removeClass("lsGrab").addClass("lsGrabbing"),clearInterval(x))}),e(window).on("mousemove",function(e){a&&(n=!0===l.vertical?e.pageY:e.pageX,i.touchMove(n,t))}),e(window).on("mouseup",function(s){if(a){v.find(".lightSlider").removeClass("lsGrabbing").addClass("lsGrab"),a=!1;var o=(n=!0===l.vertical?s.pageY:s.pageX)-t;Math.abs(o)>=l.swipeThreshold&&e(window).on("click.ls",function(i){i.preventDefault?i.preventDefault():i.returnValue=!1,i.stopImmediatePropagation(),i.stopPropagation(),e(window).off("click.ls")}),i.touchEnd(o)}})}},enableTouch:function(){var e=this;if(w){var i={},t={};v.on("touchstart",function(e){t=e.originalEvent.targetTouches[0],i.pageX=e.originalEvent.targetTouches[0].pageX,i.pageY=e.originalEvent.targetTouches[0].pageY,clearInterval(x)}),v.on("touchmove",function(n){if(f<g&&0!==f)return!1;var a=n.originalEvent;t=a.targetTouches[0];var s=Math.abs(t.pageX-i.pageX),o=Math.abs(t.pageY-i.pageY);!0===l.vertical?(3*o>s&&n.preventDefault(),e.touchMove(t.pageY,i.pageY)):(3*s>o&&n.preventDefault(),e.touchMove(t.pageX,i.pageX))}),v.on("touchend",function(){if(f<g&&0!==f)return!1;var n;n=!0===l.vertical?t.pageY-i.pageY:t.pageX-i.pageX,e.touchEnd(n)})}},build:function(){var i=this;i.initialStyle(),this.doCss()&&(!0===l.enableTouch&&i.enableTouch(),!0===l.enableDrag&&i.enableDrag()),e(window).on("focus",function(){i.auto()}),e(window).on("blur",function(){clearInterval(x)}),i.pager(),i.pauseOnHover(),i.controls(),i.keyPress()}}).build(),P.init=function(){P.chbreakpoint(),!0===l.vertical?(g=l.item>1?l.verticalHeight:o.outerHeight(),v.css("height",g+"px")):g=v.outerWidth(),!0===l.loop&&"slide"===l.mode&&P.clone(),P.calL(),"slide"===l.mode&&s.removeClass("lSSlide"),"slide"===l.mode&&(P.calSW(),P.sSW()),setTimeout(function(){"slide"===l.mode&&s.addClass("lSSlide")},1e3),l.pager&&P.createPager(),!0===l.adaptiveHeight&&!1===l.vertical&&s.css("height",o.eq(p).outerHeight(!0)),!1===l.adaptiveHeight&&("slide"===l.mode?!1===l.vertical?n.setHeight(s,!1):n.auto():n.setHeight(s,!0)),!0===l.gallery&&n.slideThumb(),"slide"===l.mode&&n.slide(),!1===l.autoWidth?o.length<=l.item?v.find(".lSAction").hide():v.find(".lSAction").show():P.calWidth(!1)<g&&0!==f?v.find(".lSAction").hide():v.find(".lSAction").show()},s.goToPrevSlide=function(){if(p>0)l.onBeforePrevSlide.call(this,s,p),p--,s.mode(!1),!0===l.gallery&&n.slideThumb();else if(!0===l.loop){if(l.onBeforePrevSlide.call(this,s,p),"fade"===l.mode){var e=u-1;p=parseInt(e/l.slideMove)}s.mode(!1),!0===l.gallery&&n.slideThumb()}else!0===l.slideEndAnimation&&(s.addClass("leftEnd"),setTimeout(function(){s.removeClass("leftEnd")},400))},s.goToNextSlide=function(){var e=!0;"slide"===l.mode&&(e=n.slideValue()<f-g-l.slideMargin),p*l.slideMove<u-l.slideMove&&e?(l.onBeforeNextSlide.call(this,s,p),p++,s.mode(!1),!0===l.gallery&&n.slideThumb()):!0===l.loop?(l.onBeforeNextSlide.call(this,s,p),p=0,s.mode(!1),!0===l.gallery&&n.slideThumb()):!0===l.slideEndAnimation&&(s.addClass("rightEnd"),setTimeout(function(){s.removeClass("rightEnd")},400))},s.mode=function(e){!0===l.adaptiveHeight&&!1===l.vertical&&s.css("height",o.eq(p).outerHeight(!0)),!1===h&&("slide"===l.mode?n.doCss()&&(s.addClass("lSSlide"),""!==l.speed&&v.css("transition-duration",l.speed+"ms"),""!==l.cssEasing&&v.css("transition-timing-function",l.cssEasing)):n.doCss()&&(""!==l.speed&&s.css("transition-duration",l.speed+"ms"),""!==l.cssEasing&&s.css("transition-timing-function",l.cssEasing))),e||l.onBeforeSlide.call(this,s,p),"slide"===l.mode?n.slide():n.fade(),v.hasClass("ls-hover")||n.auto(),setTimeout(function(){e||l.onAfterSlide.call(this,s,p)},l.speed),h=!0},s.play=function(){s.goToNextSlide(),l.auto=!0,n.auto()},s.pause=function(){l.auto=!1,clearInterval(x)},s.refresh=function(){P.init()},s.getCurrentSlideCount=function(){var e=p;if(l.loop){var i=v.find(".lslide").length,t=s.find(".clone.left").length;e=p<=t-1?i+(p-t):p>=i+t?p-i-t:p-t}return e+1},s.getTotalSlideCount=function(){return v.find(".lslide").length},s.goToSlide=function(e){p=l.loop?e+s.find(".clone.left").length-1:e,s.mode(!1),!0===l.gallery&&n.slideThumb()},s.destroy=function(){s.lightSlider&&(s.goToPrevSlide=function(){},s.goToNextSlide=function(){},s.mode=function(){},s.play=function(){},s.pause=function(){},s.refresh=function(){},s.getCurrentSlideCount=function(){},s.getTotalSlideCount=function(){},s.goToSlide=function(){},s.lightSlider=null,P={init:function(){}},s.parent().parent().find(".lSAction, .lSPager").remove(),s.removeClass("lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right").removeAttr("style").unwrap().unwrap(),s.children().removeAttr("style"),o.removeClass("lslide active"),s.find(".clone").remove(),o=null,x=null,h=!1,p=0)},setTimeout(function(){l.onSliderLoad.call(this,s)},10),e(window).on("resize orientationchange",function(e){setTimeout(function(){e.preventDefault?e.preventDefault():e.returnValue=!1,P.init()},200)}),this}}(jQuery);/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.5",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.5",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.5",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.5",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.5",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"top",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.5",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),
d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.5",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return n.indexOf(t)==-1&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return n!=-1&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(e,r),delete n[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){if(Array.isArray(e))return e;var t="object"==typeof e&&"number"==typeof e.length;return t?d.call(e):[e]}function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var s=e;return"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||e))}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console,d=Array.prototype.slice;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});/*! WOW wow.js - v1.3.0 - 2016-10-04
* https://wowjs.uk
* Copyright (c) 2016 Thomas Grainger; Licensed MIT */
(function(){var t,e,n,i,o,r=function(t,e){return function(){return t.apply(e,arguments)}},s=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};e=function(){function t(){}return t.prototype.extend=function(t,e){var n,i;for(n in e)i=e[n],null==t[n]&&(t[n]=i);return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t.prototype.createEvent=function(t,e,n,i){var o;return null==e&&(e=!1),null==n&&(n=!1),null==i&&(i=null),null!=document.createEvent?(o=document.createEvent("CustomEvent")).initCustomEvent(t,e,n,i):null!=document.createEventObject?(o=document.createEventObject()).eventType=t:o.eventName=t,o},t.prototype.emitEvent=function(t,e){return null!=t.dispatchEvent?t.dispatchEvent(e):e in(null!=t)?t[e]():"on"+e in(null!=t)?t["on"+e]():void 0},t.prototype.addEvent=function(t,e,n){return null!=t.addEventListener?t.addEventListener(e,n,!1):null!=t.attachEvent?t.attachEvent("on"+e,n):t[e]=n},t.prototype.removeEvent=function(t,e,n){return null!=t.removeEventListener?t.removeEventListener(e,n,!1):null!=t.detachEvent?t.detachEvent("on"+e,n):delete t[e]},t.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},t}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,n,i,o;for(e=n=0,i=(o=this.keys).length;i>n;e=++n)if(o[e]===t)return this.values[e]},t.prototype.set=function(t,e){var n,i,o,r;for(n=i=0,o=(r=this.keys).length;o>i;n=++i)if(r[n]===t)return void(this.values[n]=e);return this.keys.push(t),this.values.push(e)},t}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),i=this.getComputedStyle||function(t,e){return this.getPropertyValue=function(e){var n;return"float"===e&&(e="styleFloat"),o.test(e)&&e.replace(o,function(t,e){return e.toUpperCase()}),(null!=(n=t.currentStyle)?n[e]:void 0)||null},this},o=/(\-([a-z]){1})/g,this.WOW=function(){function o(t){null==t&&(t={}),this.scrollCallback=r(this.scrollCallback,this),this.scrollHandler=r(this.scrollHandler,this),this.resetAnimation=r(this.resetAnimation,this),this.start=r(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),null!=t.scrollContainer&&(this.config.scrollContainer=document.querySelector(t.scrollContainer)),this.animationNameCache=new n,this.wowEvent=this.util().createEvent(this.config.boxClass)}return o.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},o.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},o.prototype.start=function(){var e,n,i,o;if(this.stopped=!1,this.boxes=function(){var t,n,i,o;for(o=[],t=0,n=(i=this.element.querySelectorAll("."+this.config.boxClass)).length;n>t;t++)e=i[t],o.push(e);return o}.call(this),this.all=function(){var t,n,i,o;for(o=[],t=0,n=(i=this.boxes).length;n>t;t++)e=i[t],o.push(e);return o}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(n=0,i=(o=this.boxes).length;i>n;n++)e=o[n],this.applyStyle(e,!0);return this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new t(function(t){return function(e){var n,i,o,r,s;for(s=[],n=0,i=e.length;i>n;n++)r=e[n],s.push(function(){var t,e,n,i;for(i=[],t=0,e=(n=r.addedNodes||[]).length;e>t;t++)o=n[t],i.push(this.doSync(o));return i}.call(t));return s}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},o.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},o.prototype.sync=function(e){return t.notSupported?this.doSync(this.element):void 0},o.prototype.doSync=function(t){var e,n,i,o,r;if(null==t&&(t=this.element),1===t.nodeType){for(r=[],n=0,i=(o=(t=t.parentNode||t).querySelectorAll("."+this.config.boxClass)).length;i>n;n++)e=o[n],s.call(this.all,e)<0?(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),r.push(this.scrolled=!0)):r.push(void 0);return r}},o.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(t),this.util().emitEvent(t,this.wowEvent),this.util().addEvent(t,"animationend",this.resetAnimation),this.util().addEvent(t,"oanimationend",this.resetAnimation),this.util().addEvent(t,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(t,"MSAnimationEnd",this.resetAnimation),t},o.prototype.applyStyle=function(t,e){var n,i,o,r;return i=t.getAttribute("data-wow-duration"),n=t.getAttribute("data-wow-delay"),o=t.getAttribute("data-wow-iteration"),this.animate((r=this,function(){return r.customStyle(t,e,i,n,o)}))},o.prototype.animate="requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()},o.prototype.resetStyle=function(){var t,e,n,i,o;for(o=[],e=0,n=(i=this.boxes).length;n>e;e++)t=i[e],o.push(t.style.visibility="visible");return o},o.prototype.resetAnimation=function(t){var e;return t.type.toLowerCase().indexOf("animationend")>=0?(e=t.target||t.srcElement).className=e.className.replace(this.config.animateClass,"").trim():void 0},o.prototype.customStyle=function(t,e,n,i,o){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),i&&this.vendorSet(t.style,{animationDelay:i}),o&&this.vendorSet(t.style,{animationIterationCount:o}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},o.prototype.vendors=["moz","webkit"],o.prototype.vendorSet=function(t,e){var n,i,o,r;for(n in i=[],e)o=e[n],t[""+n]=o,i.push(function(){var e,i,s,l;for(l=[],e=0,i=(s=this.vendors).length;i>e;e++)r=s[e],l.push(t[""+r+n.charAt(0).toUpperCase()+n.substr(1)]=o);return l}.call(this));return i},o.prototype.vendorCSS=function(t,e){var n,o,r,s,l,a;for(s=(l=i(t)).getPropertyCSSValue(e),n=0,o=(r=this.vendors).length;o>n;n++)a=r[n],s=s||l.getPropertyCSSValue("-"+a+"-"+e);return s},o.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(n){e=i(t).getPropertyValue("animation-name")}return"none"===e?"":e},o.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},o.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},o.prototype.scrollHandler=function(){return this.scrolled=!0},o.prototype.scrollCallback=function(){var t;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var e,n,i,o;for(o=[],e=0,n=(i=this.boxes).length;n>e;e++)(t=i[e])&&(this.isVisible(t)?this.show(t):o.push(t));return o}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},o.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},o.prototype.isVisible=function(t){var e,n,i,o,r;return n=t.getAttribute("data-wow-offset")||this.config.offset,o=(r=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset)+Math.min(this.element.clientHeight,this.util().innerHeight())-n,e=(i=this.offsetTop(t))+t.clientHeight,o>=i&&e>=r},o.prototype.util=function(){return null!=this._util?this._util:this._util=new e},o.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},o.prototype.removeBox=function(t){var e=this.boxes.indexOf(t);e>-1&&this.boxes.splice(e,1)},o}()}).call(this);/* Eventos All */


	// EVENTOS INICIAIS
		// Events Externos
		$(document).ready(function(){
			$divs  = '<div class="events_externos"> ';
				$divs += '<div class="boxs"></div> ';
				$divs += '<div class="alerts"></div> ';
				$divs += '<div class="modals"></div> ';
				$divs += '<div class="requireds dni"></div> ';
				$divs += '<div class="carregando dn"> <img src="'+DIR+'/web/img/outros/carregando/loader.gif" class="dib w32 h27" /> <span> <span class="porcentagem m0 p0"></span> Carregando... </span> </div> ';
				$divs += '<div class="carregando1 dn"><div style="position: fixed; top: 50%; left: 50%; z-index: -1; padding: 10px; margin: -110px 0 0 -110px; font-size: 0;"><div class="lds-css ng-scope"><div style="width:100%;height:100%" class="lds-eclipse"><span class="posa w100p pt88 fz20 tac cor_fff">Carregando...</span><div style="box-shadow: 0 4px 0 0 #fff;"></div></div></div></div></div> ';
				$divs += '<div class="carregando_endereco dn"><div style="position: fixed; top: 50%; left: 50%; z-index: -1; padding: 10px; margin: -110px 0 0 -110px; font-size: 0;"><div class="lds-css ng-scope"><div style="width:100%;height:100%" class="lds-eclipse"><span class="posa w100p pt88 fz20 tac cor_fff">Buscando <br> Endereço...</span><div style="box-shadow: 0 4px 0 0 #fff;"></div></div></div></div></div> ';
				$divs += '<div class="outros dni"></div> ';
				$dni = (HOST=='localhost:4000') ? '' : 'dni';
				$divs += '<div class="tela_full posf t0 l0 w100p h100p z-1 op0 dn"></div> ';
				$divs += '<div class="erros_ajax fechar_hide '+$dni+'"></div> ';
				$divs += '<div class="style dni"></div> ';
			$divs += '</div> ';
			$divs += '<div class="fundoo" onclick="fechar_all()"></div> ';
			$divs += '<div class="fundoo1"></div> ';

			if(LUGAR == 'admin'){
				$divs  += '<div class="posa t0 l0 mt50"> ';
					$divs += '<a href="'+DIR+'/admin/?pg=1&m=0" class="db w20 h10 mb2"></a> ';
				$divs += '</div> ';
			}
			$('body').append($divs);
		});
	// EVENTOS INICIAIS



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------




	// FUNCOES IMPORTANTES
		// IMG Load
			function img_load($img, $width, $height){
				$('img[img_load="'+$img+'"]').parent().addClass('img_load_pai');
				$classe_img = $('img[img_load="'+$img+'"]').attr('class') ? $('img[img_load="'+$img+'"]').attr('class') : '';
				$('img[img_load="'+$img+'"]').before('<div class="posa w100p img_loading"><div class="dib max-w100p o-h '+$classe_img+'" wh="'+$width+'_'+$height+'"><div class="max-w100p c_flex jc" wh="'+$width+'_'+$height+'"><img src="'+DIR+'/web/img/outros/carregando/loader1.gif" class="dib w32 h32" /> <style>[wh="'+$width+'_'+$height+'"]{width:'+$width+'px;height:'+$height+'px}</style></div></div></div>');

				$('img[img_load="'+$img+'"]').attr('wh', $width+'_'+$height);
			}
			function img_loading(){
				$('img[src_load]').each(function() {
					var $scrollBottom = $(window).scrollTop() + $('.tela_full').height();
					if($scrollBottom >= $(this).offset().top){
						$src = $(this).attr('src_load');
						$(this).attr('src', $src);
						img_load_remove(this);
					}
				});
			}
			function img_load_remove($val){
				$($val).bind('load', function() {
					setTimeout(function(){ img_load_remove1($val); }, 0.5);
					setTimeout(function(){ img_load_remove1($val); }, 15000);
					//console.log($($val).attr('img_load'));
				});
			}
			function img_load_remove1($val){
				$($val).removeAttr('src_load');
				$($val).parent().find('.img_loading').remove();
				$($val).parent().removeClass('img_load_pai');
				$($val).removeAttr('wh');
			}
			// IMG Carregamento Scroll
			$(window).scroll(function(){
				img_loading();
			});
			// IMG Carregar quando voce quiser
			function img_carregar(){
				setTimeout(function(){ img_loading(); }, 500);
			}
			// IMG Statics
			$(document).ready(function() {
				$('img[src_load][w][h]').each(function() {
					$width = $(this).attr('w') ? $(this).attr('w')+'px' : '100%';
					$height = $(this).attr('h') ? $(this).attr('h')+'px' : '100%';
					$classe_img = $(this).attr('class') ? $(this).attr('class') : '';
					$(this).before('<div class="posa w100p img_loading"><div class="dib o-h '+$classe_img+'" wh="'+$width+'_'+$height+'"><div class="c_flex jc" wh="'+$width+'_'+$height+'"><img src="'+DIR+'/web/img/outros/carregando/loader1.gif" class="dib w32 h32" /> <style>[wh="'+$width+'_'+$height+'"]{width:'+$width+';height:'+$height+'}</style></div></div></div>');
				});
			});
		// IMG Load

		// Alerts
			function alerts($acao, $txt, $varios, $delay){
				if(!$varios){
					$('.alerts .alert').hide();
				}
				if(!$txt){
					$txt = $acao ? 'Operação Realizada com Sucesso!' : 'Ocorreu algum erro inesperado!';
				}
				$n = parseInt(Math.random()*10000000);
				$html  = '<div class="acao_'+($acao ? 1 : 0)+' alert alert_'+$n+'"> ';
					$html += '<i class="faa-times c_vermelho" onclick="fechar_alerts('+$n+')"></i> ';
					$html += '<p> '+$txt+' </p> ';
				$html += '</div> ';

				$(".alerts").append($html);
				$delay = $delay ? $delay : 5000;
				$(".alerts .alert_"+$n).stop(true, true).fadeIn(500).delay($delay).fadeOut(1000);
				$(".alerts .alert").each(function() {
					if( !$(this).is(":visible") ){
						$(this).remove()
					}
				});
			};
			function fechar_alerts($n){
				$(".alerts .alert_"+$n).stop(true, true).fadeOut(200);
			};
		// Alerts

		// Modals
			function modals($txt, $varios){
				if(!$varios){
					$('.modals .modal').hide();
				}
				if(!$txt){
					$txt = 'Operação Realizada com Sucesso!';
				}
				$n = parseInt(Math.random()*10000000);
				$html  = '<div class="modal modal_'+$n+' fechar_fade"> ';
					$html += '<i class="faa-times c_vermelho fechar_modals" onclick="fechar_modals('+$n+')"></i> ';
					$html += '<h4> Informações </h4> ';
					$html += '<div class="contextoo"> '+$txt+' </div> ';
					$html += '<div class="button"> <button class="design fechar_modals cor_fff hover2 hoverr4 bd_2e6da4 back_337ab7" onclick="fechar_modals('+$n+')">Fechar</button> </div> ';
				$html += '</div> ';

				$(".modals").append($html);
				$(".modals .modal_"+$n).stop(true, true).fadeIn(500);
				fundoo();
			};
			function fechar_modals($n){
				$(".modals .modal_"+$n).stop(true, true).fadeOut(1000);
				fechar_all();
			};
		// Modals

		// Boxs
			function boxs($classe, $itens, $t10, $url, $tipo){
				$admin = (LUGAR!='site' && $url!='site') ? '/admin' : '';
				if($classe.indexOf("/") > 0){
					$ex = $classe.split("/");
					if($ex[2]){
						$url = 'Boxs/'+$ex[0]+'/'+$ex[1]+'/';
						$classe = $url_final = $ex[2];
					} else {
						$url = 'Boxs/'+$ex[0]+'/';
						$classe = $url_final = $ex[1];
					}
				} else {
					if($classe=='filtro_avancado'){
						$_GET = converter_gets($itens);
						if($_SESSION['filtro_avancado['+$_GET['id']+']'])
							$itens = $itens+'&'+$_SESSION['filtro_avancado['+$_GET['id']+']'];
					}
					$url = ($url && $url!='site') ? $url : 'Boxs/';
					$url_final = $classe;
				}
				if($classe.indexOf(".php") < 0){
					$url_final = $classe+'.php';
				}
				$.ajax({
					type: "POST",
					url: DIR+$admin+"/app/Ajax/"+$url+$url_final,
					data: $itens!=undefined ? $itens+'&classe='+$classe+'&lugar='+LUGAR+'&dir_d='+DIR_D : 'classe='+$classe+'&lugar='+LUGAR+'&dir_d='+DIR_D,
					dataType: "json",
					beforeSend: function(){ ajaxIni(0); },
					error: function($request, $error){ ajaxErro($request, $error); },
					success: function($json){
						if($json.evento != null){
							eval($json.evento);
						}
						if($json.erro != null){
							$delay = $json.delay ? $json.delay : '';
							$.each($json.erro, function($key, $val) {
								alerts(0, $val, 1, $delay);
							});

						} else if($json.title && $json.html) {
							// boxs
								$html = $json.script!=null ? $json.script+$json.html : $json.html;
								$('.events_externos .boxs').html('<div class="'+$classe+' fechar_fade dn br2 no_efeito"> <a href="javascript:fechar_all()" class="fechar hh rubberBand"><i class="uii-close"></i></a> <h3> '+$json.title+' </h3> <div class="contextoo"> '+$html+' </div> <div class="clear"></div> </div>');
							// boxs

							// fundo
								if($url_final == 'webcam.php'){
									fundoo1();
								} else {
									fundoo($tipo!=undefined ? $tipo : '');
								}
							// fundo

							// margin
							if($t10==1){
								$('.events_externos .boxs > .'+$classe).css('marginTop', 0).css('top', 10);
								topoo();
							} else if($t10==2){
								$('.events_externos .boxs > .'+$classe).css('marginTop', 0).css('top', 0).css('position', 'fixed').css('height', '100%');
							} else if($t10){
								$('.events_externos .boxs > .'+$classe).css('marginTop', 0).css('top', $t10+'%');
								topoo();
							} else {
								$top = $(window).scrollTop();
								$marginTop = (window.innerHeight/2) + ((-1*($('.events_externos .boxs > .'+$classe).css('height').replace("px", "")))/2);
								$marginTop = ($top+$marginTop < 0) ? 0 : $marginTop;
								$('.events_externos .boxs > .'+$classe).css('marginTop', $marginTop).css('top', $top-100);
							}
							// margin

							$('.events_externos .boxs > .'+$classe).css('marginLeft', (-1*($('.events_externos .boxs > .'+$classe).css('width').replace("px", "")))/2);
							$('.events_externos .boxs > .'+$classe).stop(true, true).slideDown();
							//$('.events_externos .boxs > .'+$classe).draggable();

							mascaras();
							criar_css('.events_externos .boxs');
							if($json.no_select2 == undefined) $('select.design').select2();
							//$('[rel="tooltip"]').tooltip({html:true});

						} else if($json.okkkk) {
						} else if($json.logar) {
							window.parent.location = $json.logar;
						} else {
							alerts(0, 'Pagina Não Encontrada!');
						}
						$(".carregando").hide();
					}
				});
			}
			function boxs_preto($classe, $itens, $t10, $url){
				boxs($classe, $itens, $t10, $url, '_preto')
			}
			function boxs_branco($classe, $itens, $t10, $url){
				boxs($classe, $itens, $t10, $url, 1)
			}
		// Boxs

		// Boxxs
			function boxxs(func){
				$("ul.boxxs ul.sortable").sortable({
					connectWith: "ul.boxxs ul.sortable",
					beforeStop: function(event, ui) {
						e = ui.item;
						eval(func);
					}
				}).disableSelection();
			}
		// Boxxs

		// Fechar All
			function fechar_all(){
				$('.carregando').stop(true, true).hide();
				$('.carregando1').stop(true, true).hide();
				$('.carregando_endereco').stop(true, true).hide();
				$('.fechar_hide').stop(true, true).hide();
				$('.fechar_fade').stop(true, true).delay(50).slideUp();
				$('.fundoo').stop(true, true).delay(50).fadeOut();
				$('.fundoo1').stop(true, true).delay(50).fadeOut();
				$('.events_externos > .boxs > .ver').remove();
				$('.events_externos > .boxs > .videos').remove();
				$('.events_externos > .boxs > .videos_player').remove();
			}
			function fechar_item(){
				$('.fechar_item').stop(true, true).hide();
			}
			function fundoo_fechar(){
				$(document).on('click', function(e) {
					e.stopPropagation();
					fechar_item();
				});
				$('.fechar_item').parent().on('click', function(e) {
					e.stopPropagation();
				});
			};
		// Fechar All

		// Menu Hover e Click
			function menu_hover_e_click($lugar){
				$lugar = $lugar ? $lugar : '';
				// Menu Hover
				    $($lugar+' ul[hover="true"] > li').hover(function(e) {
				    	e.stopPropagation();
						$(this).find('> ul').stop(true, true).delay(100).slideDown();
						$(this).addClass('ativo');
				    }, function() {
						$(this).find('> ul').stop(true, true).delay(200).slideUp();
						$(this).parent().find('> li').removeClass('ativo');
				    });
				// Menu Hover

				// Menu Click
					$($lugar+' ul[click="true"] > li a, '+$lugar+' ul[click1="true"] > li a').on('click', function(e) {
						e.stopPropagation();
						if(!$(this).parent().is('.ativo')){
							$($lugar+' ul[click="true"] > li a').parent().find('ul').stop(true, true).slideUp();
							$($lugar+' ul[click="true"] > li a').parent().parent().find('li').removeClass('ativo');
							$(this).parent().find('> ul').slideDown();
							$(this).parent().addClass('ativo');
						} else {
							$(this).parent().find('ul').stop(true, true).slideUp();
							$(this).parent().parent().find('li').removeClass('ativo');
						}
				    });
				// Menu Click
			};
		// Menu Hover e Click

		// Menu Click (onclick)
			var $_MENU_CLICK = 0;
			function menu_click($e, $lugar){
				$($e).find_parent('tags', 'ul').attr('click', 'true');
				$_MENU_CLICK = 1;
				$lugar = $lugar ? $lugar : '';
				if(!$($e).parent().is('.ativo')){
					$($lugar+' ul[click="true"] > li a').parent().find('ul').stop(true, true).slideUp();
					$($lugar+' ul[click="true"] > li a').parent().parent().find('li').removeClass('ativo');
					$($e).parent().find('> ul').slideDown();
					$($e).parent().addClass('ativo');
				} else {
					$($e).parent().find('ul').stop(true, true).slideUp();
					$($e).parent().parent().find('li').removeClass('ativo');
				}
			}
			function menu_click_nulo(){
				$_MENU_CLICK = 1;
			}
		// Menu Click (onclick)

		// Click Body
			function click_body(){
				if($_MENU_CLICK){
					$_MENU_CLICK = 0;
				} else {
					$('ul[click="true"] > li a').parent().find('ul').stop(true, true).slideUp();
					$('ul[click="true"] > li a').parent().parent().find('li').removeClass('ativo');
				}
			}
		// Click Body

		// Tabs
			function tabs(e){
				if(!$(e).parent().hasClass('disabled')){
					$(e).parent().parent().find('li').removeClass('ativo');
					$(e).parent().addClass('ativo');
					$(e).parent().parent().parent().parent().parent().find('ul.tabs').find('> li').removeClass('ativo').css('display', 'none');
					$(e).parent().parent().parent().parent().parent().find('ul.tabs').find('li[tabs='+$(e).parent().attr('tabs')+']').addClass('ativo').css('display', 'block');
				}
			};
		// Tabs

		// Safona
			function sanfona(e){
				if($(e).hasClass("faa-plus") == true){
					$(e).hide();
					$(e).parent().find(".faa-minus").show();
					$(e).parent().find(".sanfona").slideDown();
				} else {
					$(e).hide();
					$(e).parent().find(".faa-plus").show();
					$(e).parent().find(".sanfona").slideUp();
				}
			};
		// Safona

		// Copiar
			function copyy($e){ // copyy('input.coppy')
				document.querySelector($e).select();
				var successful = document.execCommand('copy');
				alerts(1, 'Link Copiado com Sucesso!')
			};
		// Copiar

		// Geomapeamento
			function geomapeamento_all(){
				carregarPontos('ini', 0); // Mostrar todos os pins  na primeira chamada
			}
			function geomapeamento(){
				navigator.geolocation.getCurrentPosition(geomapeamento_success, geomapeamento_error);
			}
			function geomapeamento_success(position) {
		  		carregarPontos(position.coords.latitude, position.coords.longitude);
			};
			function geomapeamento_error(err) {
				alert('ERROR(' + err.code + '): ' + err.message);
				carregarPontos(0, 0);
			};
		// Geomapeamento

		// Erros Ajax
	 		function erros_ajax($txt){
				$(".erros_ajax").show();
				$html  = '<span><i class="faa-times c_vermelho" onclick="fechar_erros_ajax()"></i></span> ';
				$html += '<div> '+$txt+' </div> ';
				$(".erros_ajax").html($html);
			};
			function fechar_erros_ajax(){
				$(".erros_ajax").hide();
			};
		// Erros Ajax
	// FUNCOES IMPORTANTES



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------



	// AJAX
		// Ajax Json
		function ajaxJson($url, $data, $n_carregando){
			var $return = $.ajax({
				type: "POST",
				url: DIR+"/app/Ajax/"+$url,
				data: $data ? $data+'&lugar='+LUGAR+'&dir_d='+DIR_D : '&lugar='+LUGAR+'&dir_d='+DIR_D,
				async: false,
				beforeSend: function(){ ajaxIni($n_carregando); },
				error: function($request, $error){ ajaxErro($request, $error); },
			}).responseText;
			var $return = $.parseJSON($return);
			return $return;
		}
		function ajaxJsonAdmin($url, $data, $n_carregando){
			return ajaxJson('../../admin/app/Ajax/'+$url, $data, $n_carregando)
		}

		// Ajax Rapido
		function ajaxRapido($url, $data, $n_carregando){
			var $return = $.ajax({
				type: "POST",
				url: DIR+"/app/Ajax/"+$url,
				data: $data ? $data+'&lugar='+LUGAR+'&dir_d='+DIR_D : '&lugar='+LUGAR+'&dir_d='+DIR_D,
				async: false,
				beforeSend: function(){ ajaxIni($n_carregando); },
				error: function($request, $error){ ajaxErro($request, $error); },
			}).responseText;
			return($return);
		}
		function ajaxRapidoAdmin($url, $data, $n_carregando){
			return ajaxRapido('../../admin/app/Ajax/'+$url, $data, $n_carregando)
		}

		// Ajax Normal
		function ajaxNormal($url, $data, $n_carregando){
			$.ajax({
				type: "POST",
				url: DIR+"/app/Ajax/"+$url,
				data: $data ? $data+'&lugar='+LUGAR+'&dir_d='+DIR_D : '&lugar='+LUGAR+'&dir_d='+DIR_D,
				dataType: "json",
				beforeSend: function(){ ajaxIni($n_carregando); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					$(".carregando").hide();
					if($json.evento != null){
						eval($json.evento);
					}
					if($json.erro != null){
						$.each($json.erro, function($key, $val) {
							alerts(0, $val, 1);
						});
					} else if($json.modal){
						modals($json.modal);
					} else {
						if($json.alert=='z')	'';
						else if($json.msg)		alerts($json.alert, $json.msg);
						else if($json.alert==1)	alerts(1);
						else if($json.alert)	alerts(1, $json.alert);
						else					alerts(0);
					}
				}
			});
		}
		function ajaxNormalAdmin($url, $data, $n_carregando){
			ajaxNormal('../../admin/app/Ajax/'+$url, $data, $n_carregando)
		}

		// AjaxForm * Nao mudar id para $id por causa desse arquivo (Ajax/Boxs_acoes/mais_fotos_gravar_fotos.php)
		function ajaxForm(id, $url, $n_carregando){
			setTimeout(function(){
				if($url){
					$('#'+id).attr('action', DIR+'/app/Ajax/ajaxForm/'+$url);
				}
				$(document).ready(function(){
					$('#'+id).ajaxForm({
						data: { lugar: LUGAR, dir_d: DIR_D },
						dataType: 'json',
						//resetForm: true,
						beforeSend: function(){ ajaxIni1($n_carregando); },
						error: function($request, $error){ ajaxErro($request, $error); },
						success: function($json){
							if($json.boxs_msg != null){
								$(".carregando1").hide();
								boxs('boxs_msg', 'html='+$json.boxs_msg);
							} else {
								if($json.evento != null){
									eval($json.evento);
								}
								if($json.erro != null){
									$(".carregando1").hide();
									$.each($json.erro, function($key, $val) {
										alerts(0, $val, 1);
									});
								} else if($json.modal){
									$(".carregando1").hide();
									modals($json.modal);
								} else {
									if($json.alert!='z'){
										$(".carregando1").hide();
										if($json.msg)			alerts($json.alert, $json.msg);
										else if($json.alert==1)	alerts(1);
										else if($json.alert)	alerts(1, $json.alert);
										else					alerts(0);
									}
								}
							}
							if($json.carregando_hide){
								$(".carregando1").hide();
							}
							if(!$json.erro && !$json.no_reset){
								$('#'+id).find('[type="reset"]').trigger('click');
								//$('#'+id).find('select').trigger('change');
							}
						}
		            });
				});
			}, 0.5);
		}
		function ajaxFormAdmin(id, $url, $n_carregando){
			ajaxForm(id, '../../../admin/app/Ajax/'+$url, $n_carregando)
		}

		function ajaxIni($n_carregando){
			if(!$n_carregando) $('.carregando').show();
		}
		function ajaxIni1($n_carregando){
			if(!$n_carregando) $('.carregando1').show();
		}
		function ajaxIni_endereco($n_carregando){
			if(!$n_carregando) $('.carregando_endereco').show();
		}

		function ajaxErro($request, $error){
			alerts(0); $(".carregando").hide(); erros_ajax($request.responseText);
		}
		function ajaxForm_editor(id, $url, $n_carregando){ // repetir 2 vezes a gravação por causa do editor
			setTimeout(function(){
				if($url){
					$('#'+id).attr('action', DIR+'/app/Ajax/ajaxForm/'+$url);
				}
				$(document).ready(function(){
					$('#'+id).ajaxForm({
						data: { lugar: LUGAR },
						dataType: 'json',
						//resetForm: true,
						beforeSend: function(){ ajaxIni($n_carregando); },
						error: function($request, $error){ ajaxErro($request, $error); },
						success: function($json){
							if($('#'+id).attr('vez')!=1){
								$('#'+id).attr('vez', 1);
								$('#'+id).submit();

							} else {
								if($json.email != null){
									$('.sistema_mautic input[name="mauticform[email]"]').val($json.email);
									$('.sistema_mautic input[name="mauticform[return]"]').val($json.dir);
									setTimeout(function(){ $(".sistema_mautic button").trigger('click') }, 0.5);
								}

								if($json.boxs_msg != null){
									boxs('boxs_msg', 'html='+$json.boxs_msg);
								} else {

									if($json.evento != null){
										eval($json.evento);
									}
									if($json.erro != null){
										$.each($json.erro, function($key, $val) {
											alerts(0, $val, 1);
										});
									} else if($json.modal){
										modals($json.modal);
									} else {
										if($json.alert=='z')	'';
										else if($json.msg)		alerts($json.alert, $json.msg);
										else if($json.alert==1)	alerts(1);
										else if($json.alert)	alerts(1, $json.alert);
										else					alerts(0);
									}
								}
								$(".carregando").hide();
								if(!$json.erro && !$json.no_reset){
									$('#'+id).find('[type="reset"]').trigger('click');
									$('#'+id).find('select').trigger('change');
								}
							}
						}
		            });
				});
			}, 0.5);
		}
	// AJAX



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------



	// DATAS E NUMEROS
		// Mes
		function mes($mes, $ab){
			switch($mes){
				case 1: ($return = $ab!=undefined  ? 'Jan'  : 'Janeiro');	break;
				case 2: ($return = $ab!=undefined  ? 'Fev'  : 'Fevereiro');	break;
				case 3: ($return = $ab!=undefined  ? 'Mar'  : 'Março');		break;
				case 4: ($return = $ab!=undefined  ? 'Abr'  : 'Abril');		break;
				case 5: ($return = $ab!=undefined  ? 'Mai'  : 'Maio');		break;
				case 6: ($return = $ab!=undefined  ? 'Jun'  : 'Junho');		break;
				case 7: ($return = $ab!=undefined  ? 'Jul'  : 'Julho');		break;
				case 8: ($return = $ab!=undefined  ? 'Ago'  : 'Agosto');	break;
				case 9: ($return = $ab!=undefined  ? 'Set'  : 'Setembro');	break;
				case 10: ($return = $ab!=undefined ? 'Out' : 'Outubro');	break;
				case 11: ($return = $ab!=undefined ? 'Nov' : 'Novembro');	break;
				case 12: ($return = $ab!=undefined ? 'Dez' : 'Dezembro');	break;
			}
			return($return);
		}

		// Somar Data
		function somar_data($n, $tipo, $ano, $mes, $dia){
			$return = new Array();
			if($ano!=undefined && $mes!=undefined && $dia!=undefined)
				var $data = new Date($ano, $mes, $dia);
			else
				var $data = new Data_Atual();
			if($tipo == 'dia')
				$data.setDate($data.getDate() + $n);
			else if($tipo == 'mes')
				$data.setMonth($data.getMonth() + $n);
			else if($tipo == 'ano')
				$data.setFullYear($data.getFullYear() + $n);
			$return['dia'] = $data.getDate();
			$return['mes'] = $data.getMonth()+1;
			$return['ano'] = $data.getFullYear();
			return $return;
		}

		// Subtrair Data
	    function sub_data($tempo){
			var $return = {dias: 0, hora: '00', min: '00', seg: '00', hora_total: '00', seg_total: '00'};
			if($segs > 0){
				// Segundos
				$data_s = $tempo.getSeconds();
				$return['seg'] = $data_s<10 ? '0'+$data_s : $data_s;

				// Minutos
				$data_i = $tempo.getMinutes();
				$return['min'] = $data_i<10 ? '0'+$data_i : $data_i;

				// Horas
				$data_h = $segs - (($data_s*1000)+($data_i*60*1000));
				for (var $i = $data_h; $i >= (86400*1000);) {
					$i = $i - (86400*1000);
				}
				$data_h = parseInt($i/(60*60*1000));
				$return['hora'] = $data_h<10 ? '0'+$data_h : $data_h;

				// Dias
				$seg_d = ($data_h*60*60)+($data_i*60)+$data_s;
				$data_d = ($segs-(86400*1000)) > 0 ? parseInt(($segs-$seg_d)/(86400*1000)) : 0;
				$return['dias'] = $data_d<10 ? '0'+$data_d : $data_d;

				// Horas Total
				$data_ht = (($data_d*24)+$data_h);
				$return['hora_total'] = $data_ht<10 ? '0'+$data_ht : $data_ht;

				$return['seg_total'] = $segs/1000;
			}
			return $return;
		}

		// Cronomatro Tempo
		function cronometro_tempo($val, $all){
			$val = $all ? $all : $val;
			//console.log($val);

			$data_fim = new Date($val.ano, $val.mes-1, $val.dia, $val.hora, $val.min, $val.seg, 0);
			$seg1 = $data_fim.getTime();

			$today = Data_Atual();
			$today.setMilliseconds(0);
			$seg2 = $today.getTime();

			$segs = $seg1 - $seg2;
			$tempo = new Date($segs);
			$tempo.setMilliseconds(0);

			var $return = {dias: 0, hora: '00', min: '00', seg: '00', hora_total: '00', seg_total: '00'};
			if($segs > 0){
				if($all){
					// Segundos
					$data_s = $tempo.getSeconds();
					$return['seg'] = $data_s<10 ? '0'+$data_s : $data_s;

					// Minutos
					$data_i = $tempo.getMinutes();
					$return['min'] = $data_i<10 ? '0'+$data_i : $data_i;

					// Horas
					$data_h = $segs - (($data_s*1000)+($data_i*60*1000));
					for (var $i = $data_h; $i >= (86400*1000);) {
						$i = $i - (86400*1000);
					}
					$data_h = parseInt($i/(60*60*1000));
					$return['hora'] = $data_h<10 ? '0'+$data_h : $data_h;

					// Dias
					$seg_d = ($data_h*60*60)+($data_i*60)+$data_s;
					$data_d = ($segs-(86400*1000)) > 0 ? parseInt(($segs-$seg_d)/(86400*1000)) : 0;
					$return['dias'] = $data_d<10 ? '0'+$data_d : $data_d;

					// Horas Total
					$data_ht = (($data_d*24)+$data_h);
					$return['hora_total'] = $data_ht<10 ? '0'+$data_ht : $data_ht;

					//console.log($return);
				}

				$return['seg_total'] = $segs/1000;
			}
			return $return;
		}

		// Relogio
		function relogio(){
			$today = Data_Atual();
			$('.RELOGIO_DIA').html( zeros_left($today.getDate(), 2)+'/'+zeros_left($today.getMonth()+1, 2)+'/'+zeros_left($today.getFullYear(), 2) );
			$('.RELOGIO_HORA').html( zeros_left($today.getHours(), 2)+':'+zeros_left($today.getMinutes(), 2)+':'+zeros_left($today.getSeconds(), 2) );
			setTimeout(function(){ relogio(); }, 1000);
		}

		// Zeros Left
		function zeros_left($val, $n){
			$val = String($val);
			$x = $val.length;
			$zeros = '';
			for (i=$x; i<$n; i++) {
				$zeros += '0';
			}
			$return = $zeros+$val;
			return $return;
		}

		// DATA PHP
		function Data_PHP($classe){
			$.ajax({
				type: "POST",
				url: DIR+"/app/Ajax/Tempo/Data_PHP.php",
				dataType: "json",
				success: function($json){
					$($classe+'.date').html($json.date);
					$($classe+'.time').html($json.time);
				}
			});
			setTimeout(function(){ Data_PHP($classe); }, 500);
		}

		// DATA JS
		function Data_JS(){
			$time_php = parseInt($_DATA_PHP['time']*1000);
			$time_js = $_DATA_JS.getTime();
			$diff = $time_php-$time_js;

			$today_js = new Date();
			$today_js.setMilliseconds(0);

			$today = new Date($today_js.getTime()+$diff);
			$today.setMilliseconds(0);

			$return = $today;
			return $return;

			setTimeout(function(){ Data_JS($classe); }, 500);
		}
	// DATAS



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------



	// FUNCOES UTEIS
		// eye password
		function eye_password($x){
			if($x){
				$('.eye_password .faa-eye-slash').hide();
				$('.eye_password .faa-eye').show();
				$('.eye_password input').attr('type', 'text');
			} else {
				$('.eye_password .faa-eye').hide();
				$('.eye_password .faa-eye-slash').show();
				$('.eye_password input').attr('type', 'password');
			}
		}

		// Categorias Box
	    function categorias_box($id, $e){
		    $('section#home .cate').addClass('no_efeito');
	    	$($e).parent().parent().find('a').removeClass('active');
	    	$($e).addClass('active');

	    	if($id==0){
		    	$('section#home .cate').fadeIn();
	    	} else {
		    	$('section#home .cate_'+$id).fadeIn();
		    	$('section#home .cate:not(.cate_'+$id+')').fadeOut();
	    	}
	    }

		// Tabs
	    function tabss(e, $parent=1){
	    	$e = $(e);
	    	for (var i=0; i<$parent; i++){
	    		$e = $e.parent();
	    	}
	    	$tabs_atual = $e.find('.tabs');
	    	$e.parent().parent().find('.tabs').slideUp();
	    	if($tabs_atual.css("display") == 'none'){
	    		$e.find('.tabs').slideDown();
	    	}
	    }

		function select_relacao($e, $gerenciar_atualizando, $id, $pai, $pai_val, $extra){
			// Atualizar Dados Quando Salvar ou Fechar um Item em Gerenciar
			if($gerenciar_atualizando){
				$table = $($e).attr('id');
				$rel = $($e);
				$rel_val = $id;
				if($rel.attr('relacao1')){
					$pai = $rel.attr('relacao1');
					$pai_val = $($e).parent().parent().parent().parent().parent().parent().parent().find( 'select#'+$pai ).val();
				}

			// Relacao Normal
			} else {
				$extra = $extra ? $extra : 'relacao';
				$table = $($e).attr($extra);
				$rel = $($e).parent().parent().parent().parent().parent().parent().parent().find( 'select#'+$table );
				$rel_val = $rel.attr('rel_val');
				$pai = $($e).attr('name');
				$pai_val = $($e).val();
			}

			$.ajax({
				type: "POST",
				url: DIR+"/app/Ajax/Padroes/select_relacao.php",
				data:  { table: $table, pai: $pai, pai_val: $pai_val, rel_val: $rel_val },
				dataType: "json",
				context: { rel: $rel },
				beforeSend: function(){ ajaxIni(0); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					$(".carregando").hide();
					this.rel.html($json.html).trigger("change").attr('rel_val', '');
				}
			});
		}


		// Select Rel Estados
		function rel_estados(e, $boxx){
			$(".carregando_endereco").show();
			$tipoo = $(e).attr('rel_estados');
			$boxx = $boxx ? '.boxx' : '';
			if($tipoo == 'cidades'){
				$tipo = $(e).attr('id').replace('estados', 'cidades');
				$dir = $(e).attr('dir') ? '[dir="'+$(e).attr('dir')+'"]' : '';
				$val = $(e).attr('cidade') ? '&val='+$(e).attr('cidade').replaceAll(" ", "%20") : '';
				$rell = $boxx+' #'+$tipo+$dir;
				if($(e).val()){
					$($rell).load(DIR+"/app/Ajax/Padroes/select_rel_estados_cidades.php?estados="+$(e).val()+$val, function(){
						$($rell).trigger("change");
						$(".carregando_endereco").hide();
					});
				}
			} else if($tipoo == 'bairros'){
				$tipo = $(e).attr('id').replace('cidades', '');
				$dir = $(e).attr('dir') ? '[dir="'+$(e).attr('dir')+'"]' : '';
				$uf = $boxx+' #estados'+$tipo+$dir;
				$cidades = $($uf).attr('cidade') ? $($($uf)).attr('cidade').replaceAll(" ", "%20") : '';;
				$val = $($uf).attr('bairro') ? '&val='+$($($uf)).attr('bairro').replaceAll(" ", "%20") : '';
				$val += '&uf='+$($uf).val();
				$rell = $boxx+' #bairros'+$tipo+$dir;
				if($cidades){
					$($rell).load(DIR+"/app/Ajax/Padroes/select_rel_estados_cidades.php?cidades="+$cidades+$val, function(){
						$($rell).trigger("change");
						$(".carregando_endereco").hide();
					});
				}
			}
		}

 		// Select Rel (Site)
		function select_rel($e, $table, $pre, $extra){
			$rel = select_rel_interno($table);
			$rel_val = $rel.attr('rel_val') ? $rel.attr('rel_val') : 0;
			$pai_val = $($e).val() ? $($e).val() : 0;
			$extra_val = $('select[name="'+$extra+'"').val() ? $('select[name="'+$extra+'"').val() : 0;
			$selecione = $rel.find('option[value=""]').html() ? $rel.find('option[value=""]').html() : '- - - -';

			$pre = $pre ? $pre : '';
			$.ajax({
				type: "POST",
				url: DIR+"/app/Ajax/Padroes/select_rel/"+$pre+$table+".php",
				data:  { table: $table, rel_val: $rel_val, pai_val: $pai_val, extra_val: $extra_val, selecione: $selecione },
				dataType: "json",
				beforeSend: function(){ ajaxIni(0); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					$(".carregando").hide();
					$rel = select_rel_interno($json.table);
					$rel.html($json.html).removeAttr('rel_val').trigger("change");

					if($json.evento != null){
						eval($json.evento);
					}
				}
			});
		}
		function select_rel_interno($table){
			$return = $('select#'+$table);
			if(!$return.html()){
				$return = $('select[name="'+$table+'"]' );
			}
			return $return;
		}

		// Ir
		function ir($class){
			$("html,body").animate( {scrollTop: $($class).offset().top}, "slow" );
		}

	    // Downloadd downloadd('<?=$value->foto?>', 0, 'nome')
		function downloadd($arquivo, $caminho, $nome){ // downloadd('<?=$value->foto?>')
			$caminho = $caminho ? $caminho : 0;
			window.parent.location = DIR+'/app/Exportacoes/z_download.php?caminho='+$caminho+'&arquivo='+$arquivo+'&nome='+$nome;
		}

	    // Downloadd1
		function downloadd1(){
			$arquivo = $('.container-plantas .Plugin1 .owl-item.ativo figure img').attr('src');
			$caminho = '../../web/fotos/thumbnails/';
			window.parent.location = DIR+'/app/Exportacoes/z_download.php?caminho='+$caminho+'&arquivo='+$arquivo;
		}

	    // href
		function hreff($link){
			window.open($link, '_blank');
		}
		function hreff1($link){
			window.parent.location = $link;
		}

		// Fundoo
		function fundoo($op){
			if($op!=undefined) $('.fundoo').stop(true, true).css('background', 'rgba(0, 0, 0, .'+$op+')');
			$('.fundoo').stop(true, true).fadeIn();
		}
		function fundoo1($op){
			if($op!=undefined) $('.fundoo1').stop(true, true).css('background', 'rgba(0, 0, 0, .'+$op+')');
			$('.fundoo1').stop(true, true).fadeIn();
		}

		// Topoo
		function topoo(){
			$("html,body").animate( {scrollTop: $("html").offset().top}, "fast" );
		}


		// PRECO
			function preco($value){
				$return = $value/100;
				$return = $return.toFixed(2);
				//$return = $return.replaceAll('x', ',');
				$return = replace($return, '.', ',');
				$return = 'R$ '+$return;
				return $return;
			}
		// PRECO


		// REPLACE
			function replace($txt, $de, $para){
				if($txt.indexOf($de) >= 0){
					var $pos = $txt.indexOf($de);
					while ($pos > -1){
						$return = $return.replace($de, $para);
						$pos = $return.indexOf($de);
					}
				}
				return $return;
			}
		// REPLACE

		// Replece All
		String.prototype.replaceAll = function($de, $para){
			var $return = this;
			var $pos = $return.indexOf($de);
			while ($pos > -1){
				$return = $return.replace($de, $para);
				$pos = $return.indexOf($de);
			}
			return $return;
		}

		// Strip Tags
		function strip_tags (input, allowed) {
			allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('')
			var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi
			var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi
			return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
				return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : ''
			})
		}
		// Gets
		function converter_gets($gets){
			var $return = new Array();
			$array = $gets.split("&");
			$.each($array, function(key, val) {
				value = val.split("=");
				$return[value[0]] = value[1];
			});
			return $return;
		}

		// Get Java
		function getUrlVars(){
			var $return = [], $hash;
			var $hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');

			for(var i = 0; i < $hashes.length; i++)
			{
				$hash = $hashes[i].split('=');
				$hash[1] = unescape($hash[1]);
				$return.push($hash[0]);
				$return[$hash[0]] = $hash[1];
			}

			return $return;
		}

	    // Votar Star
	    function votar_star(){
			$(".votar_star").hover(function (){
				for (var i = 1; i <= $(this).attr('dir'); i++) {
					$('.votar_star[dir='+i+']').removeClass('fa-star-o');
					$('.votar_star[dir='+i+']').addClass('fa-star');
				};
			}, function(){
				$('.votar_star').removeClass('fa-star');
				$('.votar_star').addClass('fa-star-o');
			});
			$(".votar_star").on("click", function(){
				$('input[name=star]').val($(this).attr('dir'));

				$('.votar_star').addClass('votar_star1');
				$('.votar_star').removeClass('votar_star');

				$('.votar_star1').removeClass('fa-star');
				$('.votar_star1').addClass('fa-star-o');
				for (var i = 1; i <= $(this).attr('dir'); i++) {
					$('.votar_star1[dir='+i+']').removeClass('fa-star-o');
					$('.votar_star1[dir='+i+']').addClass('fa-star');
				};
			});
	    }

		// Ordenar div
		function ordenar_div($id){
			var $container = document.getElementById($id);
			var $elements = $container.childNodes;
			var $sortMe = [];
			for (var i=0; i<$elements.length; i++) {
				if(!$elements[i].id)
					continue;
				var $sortPart = $elements[i].id.split("-");
				if($sortPart.length > 1)
					$sortMe.push([1*$sortPart[1], $elements[i]]);
			}
			$sortMe.sort(function(x, y){
				return x[0]-y[0];
			});
			for(var i=0; i<$sortMe.length; i++)
				$container.appendChild($sortMe[i][1]);
		}

		function ordenar_select($id) {
			/*
			var lb = document.getElementById($id);
			arr = new Array();
			$val = 0;

			for(i=0; i<lb.length; i++)  {
				arr[i] = lb.options[i].text+';;z;;'+lb.options[i].value+';;z;;'+lb.options[i].selected;
			}
			arr.sort();

			for(i=0; i<lb.length; i++)  {
				$ex = arr[i].split(';;z;;');
			  	lb.options[i].text = $ex[0];
			  	lb.options[i].value = $ex[1];
			  	if($ex[2] == 'true'){
			  		$val = $ex[1];
			  	}
			}
			$('#'+$id).val($val).trigger('change');
			*/
		}

		// Sem Acento
		function sem_acento($strToReplace) {
		    $str_acento = "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";
		    $str_sem_acento = "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";
		    var $return = "";
		    for (var i = 0; i < $strToReplace.length; i++) {
		        if ($str_acento.indexOf($strToReplace.charAt(i)) != -1) {
		            $return += $str_sem_acento.substr($str_acento.search($strToReplace.substr(i, 1)), 1);
		        } else {
		            $return += $strToReplace.substr(i, 1);
		        }
		    }
		    return $return;
		}

		// Widht Resp
		function widht_resp(){
			$return = $('body').width();
			var userAgent = navigator.userAgent.toLowerCase();
			if( userAgent.search(/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i)!= -1 ){
				$return = 300;
			}
		    return $return;
		}

		// Browser
		function browser(){
			if(/*@cc_on!@*/false || typeof ScriptEngineMajorVersion === "function"){
			    $return = 'ie';
			} else if(window.chrome) {
				$return = 'chrome';
			} else if(window.opera) {
				$return = 'opera';
			} else if('MozBoxSizing' in document.body.style) {
				$return = 'firefox';
			} else if({}.toString.call(window.HTMLElement).indexOf('Constructor')+1) {
				$return = 'safari';
			} else {
				$return = 'outros';
			}
			return $return;
		}


	    // Limit Char
	    function progreso_tecla($obj, $max, $id) {
			var $ancho=300;
			var $progreso = document.getElementById('progreso_'+$id);
			$cor = '';
			if ($obj.value.length < $max){
				var pos = $ancho-parseInt(($ancho*parseInt($obj.value.length))/300);
				$progreso.style.backgroundPosition = '-'+pos+'px 0px';
			} else {
				$cor = 'color:#f00';
				//alert('Use somente '+$max+' caracteres');
			}
			$progreso.innerHTML = '<span style="'+$cor+'">('+$obj.value.length+' caracteres usados de '+$max+')</span>';
	    }

		// Input design
        function input_file_site(e, $classe){
            $itens = 0;
            for (var i = 0; i < e.files.length; i++) {
                $itens += 1;
            }
            if($itens == 1){
    	        $("."+$classe).html( $itens+" Arquivo Selecionado" );
	        } else {
    	        $("."+$classe).html( $itens+" Arquivos Selecionados" );
	        }
        };
		function input_file(e, $classe){
			$itens = 0;
			for (var i = 0; i < e.files.length; i++) {
				$itens += 1;
			}
			if($itens == 1){
				$(e).parent().find("span>span").html( $itens+' Arquivo Selecionado' );
			} else {
				$(e).parent().find("span>span").html( $itens+' Arquivos Selecionados' );
			}
		};
		function input_file_hover(){
			$('.input.file, .pop_file').hover(function (){
				$(this).parent().find('.pop_file').stop().show();
			}, function () {
				$(this).parent().find('.pop_file').stop().hide();
			});
		};

		// Shuffle -> Array Aleatorio
		function shuffle($array) {
		    var j, x, i;
		    for (i = $array.length; i; i -= 1) {
		        j = Math.floor(Math.random() * i);
		        x = $array[i - 1];
		        $array[i - 1] = $array[j];
		        $array[j] = x;
		    }
		}

		// Cep
		function cep(e){
			cepp(e);
		}
		function cepp(e, $pre, $n_alert){
			$pre = $pre  ? $pre : '';
			$cep = $(e).val().trim().replace('.', '').replace('-', '');
			if($cep.length >= 8){
				$.ajax({
					type: "POST",
					url: DIR+"/app/Ajax/Padroes/cep.php",
					data:  { cep: $cep },
					dataType: "json",
					beforeSend: function(){ ajaxIni_endereco(0); },
					error: function($request, $error){ ajaxErro($request, $error); },
					success: function($json){
						cepp_vals(e, $pre, $json.rua, $json.estados, $json.cidades, $json.bairros);

						if($json.erro == 1){
							$.ajax({
								type: "POST",
								url: HTTP+'://www.republicavirtual.com.br/web_cep.php?formato=json&cep='+$cep,
								data: '',
								error: function($request, $error){ cepp_nao_encontrado(); $(".carregando").carregando_endereco(); },
								success: function($json){
									if($json.uf){
										var $uf = unescape($json.uf).split(" ");
										cepp_vals(e, $pre, $json.tipo_logradouro+' '+$json.logradouro, $uf[0], $json.cidade.replaceAll("%20", " "), $json.bairro);
									} else {
										cepp_nao_encontrado();
										$(".carregando_endereco").show();
									}
								}
							});
						} else {
							$(".carregando_endereco").show();
						}
					}
				});
			} else if(!$n_alert) {
				alerts(0, 'Digite o CEP Corretamente Para Buscar o Endereço Automaticamente!');
			}
		}
		function cepp_nao_encontrado(){
			$("#cidades_html, #estados_html").hide();
			$("#cidades, #estados").attr('type', 'text');
		}
		function cepp_fields(e){ /*(boxx) */
			cepp(e, '.boxx ');
		}

		function cepp_vals(e, $pre, $rua, $estados, $cidades, $bairros){

			$tipo = $(e).attr('id').replace('cep', '');
			$($pre+'#rua'+$tipo).val($rua);

			// Rel
			$($pre+'#estados'+$tipo).attr('cidade', $cidades).attr('bairro', $bairros);

			$($pre+'#bairro'+$tipo).val($bairros);
			$($pre+'#bairros'+$tipo).val($bairros);

			$($pre+'#cidades_html'+$tipo).html($cidades);
			$($pre+'#cidades'+$tipo).val($cidades);

			if($estados){
				$($pre+'#estados_html'+$tipo).html($estados);
				$($pre+'#estados'+$tipo).val($estados).trigger('change');
			}

		}

		//$json = ajaxRapido("../Lang/default.json");
		//var $langgs = jQuery.parseJSON($json);
		function langg($palavra){
			$return = $palavra;
			$.each($langgs, function($key, $value) {
				if($palavra == $key && $value){
					$return = $value;
				}
			});
			return $return;
		}

		// Video
		function videoo($acao, $id){
			if($acao == 'play'){
				$_Video[$id].play();
				$('.video_banner.video_'+$id+' .videoo').show();
				$('.video_banner.video_'+$id+' .faa-times').show();
				$('.video_banner.video_'+$id+' .faa-play').hide();
				$('.video_banner.video_'+$id+' .faa-pause').show();

			} else if($acao == 'pause'){
				$_Video[$id].pause();
				$('.video_banner.video_'+$id+' .faa-pause').hide();
				$('.video_banner.video_'+$id+' .faa-play').show();

			} else if($acao == 'volume_on'){
				$_Video[$id].muted = true;
				$('.video_banner.video_'+$id+' .faa-volume-up').addClass('dn');
				$('.video_banner.video_'+$id+' .faa-volume-off').removeClass('dn');

			} else if($acao == 'volume_off'){
				$_Video[$id].muted = false;
				$('.video_banner.video_'+$id+' .faa-volume-off').addClass('dn');
				$('.video_banner.video_'+$id+' .faa-volume-up').removeClass('dn');
			}

		}
		function videoo_fechar($id){
			$_Video[$id].currentTime = 99999999999;
			$('.video_banner .videoo').hide();
			$('.video_banner .faa-times').hide();
			videoo_zera();
		}
		function videoo_zera(){
			$('.video_banner .faa-pause').hide();
			$('.video_banner .faa-play').show();
		}

		function checkboxx($e){
			console.log($e);
			if($($e).hasClass("checked") == true){
				$($e).removeClass("checked");
				$($e).find('input[type="checkbox"]').prop("checked", false);
			} else {
				$($e).addClass("checked");
				$($e).find('input[type="checkbox"]').prop("checked", true);
			}
		}
	// FUNCOES UTEIS



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------



	// EDITOR
		// Preencher Campos Corretos (date, editor, etc...) Antes do Submit
		function preencher_campos_corretos(){
			// Date
			$('[type=date][navegador=firefox]').each(function(){
				$ex = $(this).val().split("/");
				$(this).parent().find('[type1=date]').val( $ex[2]+'-'+$ex[1]+'-'+$ex[0] );
			});

			// Editor
			$('.finput.finput_editor').each(function(){
				$id = $(this).find('textarea').attr('id');
		        $('#'+$id).val( CKEDITOR.instances[$id].getData() );
			});
		};

		// Editor Criar Textarea
		function editor_criar_extarea($id) {
			CKEDITOR.replace($id);

			CKEDITOR.config.toolbar = [
										{ name: 'document', items: [ 'Source', '-', 'NewPage', 'Templates', 'Preview', 'Print', '-' ] },
										{ name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike' ] },
										{ name: 'clipboard', items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo', '-', 'Find', 'Replace', 'SelectAll', ] },
										{ name: 'forms', items: [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ] },
										'/',
										{ name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
										{ name: 'colors', items: [ 'TextColor', 'BGColor' ] },
										{ name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] },
										{ name: 'insert', items: [ 'Image', 'Flash', 'Table', 'Link', 'Iframe' ] },
										{ name: 'tools', items: [ 'Maximize' ] },
									];

			// Atualizando textarea
			var $editor = CKEDITOR.instances[$id] ;
			$editor.on('contentDom', function() {
			    var $editable = $editor.editable();
			    $editable.attachListener( $editor.document, 'keyup', function() {
			        $('#'+$id).val( CKEDITOR.instances[$id].getData() );
			    });
				CKEDITOR.on( 'instanceReady', function( ev ) { // Focus quando clicar em qualquer lugar onde insere o texto
					$('iframe.cke_wysiwyg_frame', ev.editor.container.$).contents().on('click', function() {
					    ev.editor.focus();
					});
				});
			});
		}
		function editor_criar_normal($id, $html) {
			var $config = {};
			$editor = CKEDITOR.appendTo( $id, $config, $html );
		}
	// EDITOR


	// VALIDACOES
		function required_invalid($classe, $tempo){
			setTimeout(function(){
		        $($classe).find('[required]').on("invalid", function(event) {
		        	$nome = $(this).find_parent('class', 'finput').find('label p').html();
		        	if(!$nome || $nome==undefined)
		        		$nome = $(this).find_parent('tags', 'fieldset').find('legend').html();
	        		$tabs = $(this).find_parent('class', 'itens').parent().attr('tabs');
	        		$tabs = $(this).find_parent('class', 'tabs').find('ul li[tabs="'+$tabs+'"] > a').html();
	        		$aba = $tabs ? '(Aba: '+$tabs+')' : '';
		        	$nome = !$nome ? $(this).attr("name") : $nome;
		        	alerts(0, 'Preencha o campo: '+$nome.replaceAll(':', '')+' '+$aba, 1);
		        });
			}, $tempo ? $tempo : 0.5);
		}
		/*
		function requireds_ini($classe, $tipo){
			setTimeout(function(){
				$html = $($classe).html().replaceAll('script', 'div class="dni"');
				$('.requireds').html( $html );
				if($tipo) requireds($classe, ".req_tipo_1", ".req_tipo_0");
				else	  requireds($classe, ".req_tipo_0", ".req_tipo_1");
			}, 0.5);
		}
		function requireds($classe, $valide, $guardar){
			$($classe+' '+$valide).html( $('.requireds '+$valide).html() );
			$($classe+' '+$guardar).html('');
			required_invalid($classe);
			mascaras();
		}
		*/
	// VALIDACOES



	// CROPPERJS
		function cropp($id_img, $width=1, $height=1){
		    var image = document.getElementById($id_img);
		    var button = document.getElementById($id_img+'_button');
		    var result = document.getElementById($id_img+'_result');
		    var croppable = false;
		    var cropper = new Cropper(image, {
		        aspectRatio: $width/$height,
		        viewMode: 1,
		        zoomable: false,
		        ready: function() {
		            croppable = true;
		        },
				//crop: function(event) { },
		    });

			button.onclick = function () {
				result.innerHTML = '';
				result.appendChild(cropper.getCroppedCanvas());
			};
		}
	// CROPPERJS



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------




	// CRIANDO CSS
		var $respondivooo  = new Array('dn_', 			'dnn_',				'db_',				'dib_',						'dii_',						'w100p_',		'h100p_',		'w-a_',			'h-a_',			'p0_',			'pt0_',				'pb0_',					'pl0_',				'pr0_',				'm0_',			'mt0_',				'mb0_',				'ml0_',				'mr0_',				'm-a_',			'fln_',			'fll_',			'flr_',			'posa_',				'posf_',			'poss_',			'tac_',					'tal_',				'tar_',					'jc_',						'jr_',							'bd0_',			'back0_');
		var $respondivooo1 = new Array('display:none', 	'display:block',	'display:block',	'display:inline-block',		'display:inline-block',		'width: 100%',	'height: 100%',	'width: auto',	'height: auto',	'padding: 0',	'padding-top: 0',	'padding-bottom: 0',	'padding-left: 0',	'padding-right: 0',	'margin: 0',	'margin-top: 0',	'margin-bottom: 0',	'margin-left: 0',	'margin-right: 0',	'margin: auto',	'float: none',	'float: left',	'float: right',	'position: absolute',	'position: fixed',	'position: static',	'text-align: center',	'text-align: left',	'text-align: right',	'justify-content: center',	'justify-content: flex-end',	'border:0',		'background: none');
		function criar_css($classe_paii){
			$classe_all = '';

			$classe_paii = $classe_paii ? $classe_paii+' *' : '*';
			$classe_pai = classe_pai($classe_paii);

			var $css = new Array();
			$x=0;
			$y=0;
			$($classe_pai).each(function(){
				$classe = $(this).attr('class');
				if($classe){
					$array = $classe.split(" ");
					$.each($array, function($key, $val) {
						$val = $val.trim();
						if(verificando_classes($val)){
							if($css.indexOf($val) < 0){
								$css[$x] = $val;
								$x++;
							}
						}
						// Respondivo
						$.each($respondivooo, function($key1, $val1) {
							$val = $val.trim();
							if($val.match($val1)){
								if($css.indexOf($val) < 0){
									$css[$x] = $val;
									$x++;
								}
							}
						});
					});
					$y++;
					$classe_all += $classe+' || ';
				}
			});

			var $css_final = '';
			$.each($css, function($key, $val) {
				$css_final += criando_css($val);
				//console.log($val);
			});
			//console.log($classe_paii+' '+$y+' - '+$classe_all);

			$('.events_externos .style').append('<style>'+$css_final+'</style>');
		}
		// IMPORTANT
		function css_important($ex){
			$return = '';
			for ($i=0; $i < 10; $i++) {
				$return += ($ex[$i] && $ex[$i]=='i') ? ' !important' : '';
			}
			return $return;
		}
		// CRIANDOOO
		function criando_css($value){
			$css = '';
			$attr = '';
			$val = '';
			$style = '';
			$outros = '';
			$outros1 = $value.match("hover_") ? ':hover' : '';
			$mdeia = '';

			// BACKGROUND
				if($value.match("back_")){
					$attr = 'background';
					$ex = $value.split("_");
					if($ex[1]){
						if($ex[1] == 'hover' && $ex[2]){
							$val = '#'+$ex[2]+css_important($ex);
						} else 	if($ex[2] && $ex[2] != 'i') {
						    $val = 'filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="'+"#"+$ex[1]+'", endColorstr="'+"#"+$ex[2]+'");  background:-moz-linear-gradient(top, '+"#"+$ex[1]+', '+"#"+$ex[2]+'); background:-webkit-gradient(linear, left top, left bottom, from('+"#"+$ex[1]+'), to('+"#"+$ex[2]+'));';
						} else {
							$val = '#'+$ex[1]+css_important($ex);
						}
					}
				}
			// BACKGROUND

			// BORDER
				else if($value.match("bd_") || $value.match("bdt_") || $value.match("bdb_") || $value.match("bdr_") || $value.match("bdl_")){
					$attr = 'border';
					if($value.match('bdt_'))			$attr = 'border-top';
					else if($value.match('bdb_'))	$attr = 'border-bottom';
					else if($value.match('bdl_'))	$attr = 'border-left';
					else if($value.match('bdr_'))	$attr = 'border-right';
					$ex = $value.split("_");
					if($ex[1]){
						if($ex[1] == 'hover' && $ex[2]){
							$val = '1px solid #'+$ex[2]+css_important($ex);
						} else {
							$val = '1px solid #'+$ex[1]+css_important($ex);
						}
					}
				}
			// BORDER

			// BORDER WIDTH
				else if($value.match("bdw")){
					$attr = 'border-width';
					$ex = $value.split("bdw");
					if($ex[1]){
						$val = $ex[1]+'px !important';
					}
				}
			// BORDER WIDTH

			// COLOR
				else if($value.match("cor_")){
					$attr = 'color';
					$outros = 'a.'+$value+$outros1+', ';
					$ex = $value.split("_");
					if($ex[1]){
						if($ex[1] == 'hover' && $ex[2]){
							$val = '#'+$ex[2]+css_important($ex);
						} else {
							$val = '#'+$ex[1]+css_important($ex);
						}
					}
				}
			// COLOR


			// MIN, MAX, W E H
				else if($value.match("min-w") || $value.match("max-w") || $value.match("min-h") || $value.match("max-h")){
					if($value.match('min-w')){
						$attr = 'min-width';
						$attr1 = 'min-w';
					} else if($value.match('max-w')){
						$attr = 'max-width';
						$attr1 = 'max-w';
					} else if($value.match('min-h')){
						$attr = 'min-height';
						$attr1 = 'min-h';
					} else if($value.match('max-h')){
						$attr = 'max-height';
						$attr1 = 'max-h';
					}
					$ex = $value.split($attr1);
					if($ex[1]){
						$val = $ex[1]+'px !important';
					}
				}
			// MIN, MAX, W E H

			// CALC
				else if($value.match("calc") && !$value.match("max-") && !$value.match("min-")){
					$attr = 'width';
					$ex = $value.split("calc");
					if($ex[1]){
						$val = '-webkit-calc(100% - '+$ex[1]+'px) !important;width:-moz-calc(100% - '+$ex[1]+'px) !important;width:calc(100% - '+$ex[1]+'px) !important';
					}
				}
			// CALC


			// BORDER RADUIS
				else if($value.match("brt")){
					$ex = $value.split("brt");
					if($ex[1]){
						$style = '.brt'+$ex[1]+'{-webkit-border-radius:'+$ex[1]+'px '+$ex[1]+'px 0 0 !important;-moz-border-radius: '+$ex[1]+'px '+$ex[1]+'px 0 0 !important;border-radius: '+$ex[1]+'px '+$ex[1]+'px 0 0 !important}';
					}
				}
				else if($value.match("brb")){
					$ex = $value.split("brb");
					if($ex[1]){
						$style = '.brb'+$ex[1]+'{-webkit-border-radius:0 0 '+$ex[1]+'px '+$ex[1]+'px !important;-moz-border-radius: 0 0 '+$ex[1]+'px '+$ex[1]+'px !important;border-radius: 0 0 '+$ex[1]+'px '+$ex[1]+'px !important}';
					}
				}
				else if($value.match("brl")){
					$ex = $value.split("brl");
					if($ex[1]){
						$style = '.brl'+$ex[1]+'{-webkit-border-radius:'+$ex[1]+'px 0 0 '+$ex[1]+'px !important;-moz-border-radius: '+$ex[1]+'px 0 0 '+$ex[1]+'px !important;border-radius: '+$ex[1]+'px 0 0 '+$ex[1]+'px !important}';
					}
				}
				else if($value.match("brr")){
					$ex = $value.split("brr");
					if($ex[1]){
						$style = '.brr'+$ex[1]+'{-webkit-border-radius:0 '+$ex[1]+'px '+$ex[1]+'px 0 !important;-moz-border-radius: 0 '+$ex[1]+'px '+$ex[1]+'px 0 !important;border-radius: 0 '+$ex[1]+'px '+$ex[1]+'px 0 !important}';
					}
				}
				else if($value.match("br")){
					$ex = $value.split("br");
					if($ex[1]){
						$style = '.br'+$ex[1]+'{-webkit-border-radius:'+$ex[1]+'px !important;-moz-border-radius: '+$ex[1]+'px !important;border-radius: '+$ex[1]+'px !important}';
					}
				}
			// BORDER RADUIS


			// RESPONSIVO
				$.each($respondivooo, function($key1, $val1) {
					if($value.match($val1)){
						$ex = $value.split($val1);
						if($ex[1]){
							$style = '@media(max-width: '+$ex[1]+'px){.'+$value+'{'+$respondivooo1[$key1]+' !important;}} ';
						}
						if($value.match("dnn_") || $value.match("dib_") || $value.match("dii_")){
							$style = '.'+$value+'{display: none !important;}'+$style;
						}
					}
				});
			// RESPONSIVO



			if($attr && $val){
				$style = $outros+'.'+$value+$outros1+'{'+$attr+':'+$val+'}';
			}
			if($mdeia){
				$style = '@media(max-width: '+$mdeia+'px){'+$style+'} ';
				if($mdeia_extra){
					$style = $mdeia_extra+$style;
				}
			}

			//console.log($style);
			return $style;
		}

		// Classe Pai
		function classe_pai($classe){
			$return  = $classe+'[class*="back_"],';
			$return += $classe+'[class*="bd_"],';
			$return += $classe+'[class*="bdt_"],';
			$return += $classe+'[class*="bdb_"],';
			$return += $classe+'[class*="bdl_"],';
			$return += $classe+'[class*="bdr_"],';
			$return += $classe+'[class*="bdw"],';
			$return += $classe+'[class*="cor_"],';

			$return += $classe+'[class*="min-w"],';
			$return += $classe+'[class*="max-w"],';
			$return += $classe+'[class*="min-h"],';
			$return += $classe+'[class*="max-h"],';

			$.each($respondivooo, function($key1, $val1) {
				$return += $classe+'[class*=" '+$val1+'"],';
			});

			for ($i=1; $i<=60; $i++) {
				$return += $classe+'[class~="br'+$i+'"],';
				$return += $classe+'[class~="brt'+$i+'"],';
				$return += $classe+'[class~="brb'+$i+'"],';
				$return += $classe+'[class~="brl'+$i+'"],';
				$return += $classe+'[class~="brr'+$i+'"],';
				if($i==10 || $i==15 || $i==20 || $i==25 || $i==30 || $i==35 || $i==40 || $i==45 || $i==50){
					$i = $i+4;
				}
			}

			$return += $classe+'[class*="calc"]';

			return $return;
		}

		// Verificando Classes
		function verificando_classes($val){
			$return = 0;
			if($val.match('back_'))			$return = 1;
			else if($val.match('bd_'))		$return = 1;
			else if($val.match('bdt_'))		$return = 1;
			else if($val.match('bdb_'))		$return = 1;
			else if($val.match('bdl_'))		$return = 1;
			else if($val.match('bdr_'))		$return = 1;
			else if($val.match('bdw'))		$return = 1;
			else if($val.match('cor_'))		$return = 1;

			else if($val.match('min-w'))	$return = 1;
			else if($val.match('max-w'))	$return = 1;
			else if($val.match('min-h'))	$return = 1;
			else if($val.match('max-h'))	$return = 1;

			else if($val.match('calc'))		$return = 1;

			else if($val.match('br1')  || $val.match('br2')  || $val.match('br3')  || $val.match('br4')  || $val.match('br5')  || $val.match('br6')  || $val.match('br7')  || $val.match('br8')  || $val.match('br9'))		$return = 1;
			else if($val.match('brt1') || $val.match('brt2') || $val.match('brt3') || $val.match('brt4') || $val.match('brt5') || $val.match('brt6') || $val.match('brt7') || $val.match('brt8') || $val.match('brt9'))		$return = 1;
			else if($val.match('brb1') || $val.match('brb2') || $val.match('brb3') || $val.match('brb4') || $val.match('brb5') || $val.match('brb6') || $val.match('brb7') || $val.match('brb8') || $val.match('brb9'))		$return = 1;
			else if($val.match('brl1') || $val.match('brl2') || $val.match('brl3') || $val.match('brl4') || $val.match('brl5') || $val.match('brl6') || $val.match('brl7') || $val.match('brl8') || $val.match('brl9'))		$return = 1;
			else if($val.match('brr1') || $val.match('brr2') || $val.match('brr3') || $val.match('brr4') || $val.match('brr5') || $val.match('brr6') || $val.match('brr7') || $val.match('brr8') || $val.match('brr9'))		$return = 1;

			return $return;
		}
	// CRIANDO CSS




	// ----------------------------------------------------------------------------------------------------------------------------------------------------------




	// JQUERY ATALHOS
		// Find Parent
		$.fn.find_parent = function($classe, $nome){
			$return = $(this)
			if($classe == 'tags' || $classe == 'tag'){
				$parent = $(this);
				$x=0;
				for (var $i=0; ($i<100 && $x<1); $i++){
					$parent = $parent.parent();
					if($parent.prop("tagName")){
						if( $parent.prop("tagName").toLowerCase() == $nome )
							$x++;
					}
				};
				$return = $parent;
			} else if($classe=='class'){
				$parent = $(this);
				$x=0;
				for (var $i=0; ($i<100 && $x<1); $i++){
					$parent = $parent.parent();
					if($parent.hasClass($nome))
						$x++;
				};
				$return = $parent;
			} else {
				$parent = $(this);
				$x=0;
				for (var $i=0; ($i<100 && $x<1); $i++){
					$parent = $parent.parent();
					if( $parent.attr($classe) == $nome )
						$x++;
				};
				$return = $parent;
			}
			return $return;
		}

		function trg($classe){					trigger($classe) };
		function trigger($classe){				$($classe).stop(true, true).trigger("click");	};

		function show($classe, $tempo){			$($classe).stop(true, true).show($tempo ? $tempo : ''); }
		function hide($classe, $tempo){ 		$($classe).stop(true, true).hide($tempo ? $tempo : ''); };
		function toggle($classe, $tempo){ 		$($classe).stop(true, true).toggle($tempo ? $tempo : ''); };

		function fshow($classe, $tempo){		fadeIn($classe); };
		function fhide($classe, $tempo){		fadeOut($classe); };
		function ftoggle($classe, $tempo){		fadeToggle($classe); };
		function fadeIn($classe, $tempo){		$($classe).stop(true, true).fadeIn($tempo ? $tempo : ''); };
		function fadeOut($classe, $tempo){		$($classe).stop(true, true).fadeOut($tempo ? $tempo : ''); };
		function fadeToggle($classe, $tempo){	$($classe).stop(true, true).fadeToggle($tempo ? $tempo : ''); }

		function sshow($classe, $tempo){		slideDown($classe); };
		function shide($classe, $tempo){		slideUp($classe); };
		function stoggle($classe, $tempo){		slideToggle($classe); };
		function slideUp($classe, $tempo){		$($classe).stop(true, true).slideUp($tempo ? $tempo : ''); };
		function slideDown($classe, $tempo){	$($classe).stop(true, true).slideDown($tempo ? $tempo : ''); };
		function slideToggle($classe, $tempo){	$($classe).stop(true, true).slideToggle($tempo ? $tempo : ''); }

		function submitt($classe){				setTimeout(function(){ $($classe).submit(); }, 0.5); };
		function css($classe, $acao1, $acao2){	$($classe).css($acao1, $acao2); };
		function setTime($funcao, $tempo){		setTimeout(function(){ $funcao }, $tempo ? $tempo*1000 : 1000); };

		function enter($evento, ev, e){
			if(ev.keyCode == 13) // ev.which esc = 27  // enter('evento', event, this)
				eval($evento);
		};
		function enter_click($classe, ev){ // enter_click('classe', event)
			if(ev.keyCode == 13)
				$($classe).trigger('click');
		};
	// JQUERY ATALHOS



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------



	// ABA ATIVA
		$ativa_atual = 0;
		$(window).on("blur focus", function(e) {
		    var prevType = $(this).data("prevType");
		    if (prevType != e.type) {   //  reduce double fire issues
		        switch (e.type) {
		            case "focus":
		            	setTimeout(function(){
			            	$ABA_ATIVA = 1;
			            	$('.ABA_PARADA').hide();
		            	}, 200);
		                break;
		            case "blur":
		            	$ativa_atual++;
		            	$ABA_ATIVA = 0;
		            	aba_parada($ativa_atual);
		                break;
		        }
		    }
		    $(this).data("prevType", e.type);
		})
		function aba_parada($x){
	    	setTimeout(function(){
	    		if(!$ABA_ATIVA && $x == $ativa_atual){
        	    	$('.ABA_PARADA').show();
    			}
	    	}, 10*1000);
		}
		function aba_ativa(){
	    	$ABA_ATIVA = 0;
		}
	// ABA ATIVA

	// IFF
		function iff($condicao, $resp1='', $resp2=''){
			$return = $condicao ? $resp1 : $resp2;
			return $return;
		}
	// IFF

	// COOKIES
		function lerCookie($c_name){
			var i,x,y,ARRcookies=document.cookie.split(";");
			for (i=0;i<ARRcookies.length;i++){
				x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
				y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
				x=x.replace(/^\s+|\s+$/g,"");
				if (x==$c_name){
					return unescape(y);
				}
			}
		}
		function gravarCookie($c_name, $value, $exdays){
			var $exdate=new Date();
			$exdate.setDate($exdate.getDate() + $exdays);
			var $c_value=escape($value) + (($exdays==null) ? "" : "; expires="+$exdate.toUTCString());
			document.cookie=$c_name + "=" + $c_value;
		}
	// COOKIES


	// CHAMANDO CLASS
		function neww($classe, $admin='') {
			$(document).ready(function() {
				$script = '<script type="text/javascript" src="'+DIR+'/'+$classe+'.js"></script>';
				$("body").append($script);
			});
		}
	// CHAMANDO CLASS

	// ECHO
		function echo($txt) {
			return document.write($txt);
		}
	// ECHO

	// PRINT_R
		function pre($text){
			console.log($text);
		}
		function pre1($obj) {
 			var $return = '';
			Object.keys($obj).forEach(function($key) {
			    $return += $obj[$key]+'<br>';
			});
			return $return;
		}
		function pre2($obj) {
 			var $return = '';
			Object.keys($obj).forEach(function($key) {
			    $return += key+' => '+$obj[$key]+'<br>';
			});
			return $return;
		}
	// PRINT_R



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------



	// PLUGINS

		// OwlCarousel -> https://owlcarousel2.github.io/OwlCarousel2/demos/demos.html
		function Plugin1(){
			//$(".Plugin1").before('<div class="Plugin1_temp" style="height: '+$(".Plugin1 img").css('max-height')+';"></div>');
			//$(".Plugin1").hide();
			//setTimeout(function(){
				$(".Plugin1").each(function() {
					// CARROCEL MOBILE
						if($(this).hasClass("Plugin_mobile") == true){
							$(this).addClass('dn_1000');
							$(this).after('<div class="Plugin1_mobile dnn_1000">'+$(this).html()+'</div>');
						}
					// CARROCEL MOBILE

					$(this).addClass('Plugin owl-carousel');
					$itens = $(this).attr('itens') ? $(this).attr('itens') : 5;
					$banner = $(this).attr('itens')==1 ? true : false;
					$no_loop = $(this).attr('no_loop')==1 ? false : true;
					$auto = $(this).attr('auto')==0 ? false : true;
					$auto_time = $(this).attr('auto')==0 ? false : $(this).attr('auto')*1000;
					$altura_flexcivel = $(this).attr('altura_flexcivel')==0 ? false : true;

					//$resp_450 = $(this).attr('resp_450') ? $(this).attr('resp_450') : (parseInt($itens)==1 ? 1 : 2 );
					$resp_700 = $(this).attr('resp_700') ? $(this).attr('resp_700') : parseInt($itens);
					$resp_1000 = $(this).attr('resp_1000') ? $(this).attr('resp_1000') : parseInt($itens);

					$itens_mysql = $(this).find("> *").length;
					if($itens_mysql <= $itens){
						$no_loop = false;
						$(this).addClass("no_seta");
						$(this).addClass("no_pagg");
					}

					$responsiveClass = true;

					var owl = $(this).owlCarousel({
				      	nav: true,
						items: parseInt($itens),
						loop: $no_loop,
				      	singleItem: $banner,
					    autoplay: $auto,
					    autoplayTimeout: $auto_time,
					    autoplayHoverPause: true,
	      				autoHeight: $altura_flexcivel, // Altura Flexcivel

					    smartSpeed: 550,

    					responsiveClass:true,
						responsive:{
					        0:{
					            items:1,
					        },
					        450:{
					            items: $resp_700,
					        },
					        700:{
					            items: $resp_1000,
					        },
					        1000:{
					            items: parseInt($itens),
					        }
						}
					});


					// EFEITO ANIMATED
						owl.on('change.owl.carousel', function(event) {
						    var $currentItem = $('.owl-item', owl).eq(event.item.index);
						    var $elemsToanim = $currentItem.find("[data-animation-out]");
						    Plugin1_setAnimation($elemsToanim, 'out');
						});

						var round = 0;
						owl.on('changed.owl.carousel', function(event) {

						    var $currentItem = $('.owl-item', owl).eq(event.item.index);
						    var $elemsToanim = $currentItem.find("[data-animation-in]");

						    Plugin1_setAnimation($elemsToanim, 'in');
						})

						owl.on('translated.owl.carousel', function(event) {
						    //console.log(event.item.index, event.page.count);

						    if (event.item.index == (event.page.count - 1)) {
						        if (round < 1) {
						            round++
						            //console.log(round);
						        } else {
						            owl.trigger('stop.owl.autoplay');
						            var owlData = owl.data('owl.carousel');
						            owlData.settings.autoplay = false;
						            owlData.options.autoplay = false;
						            owl.trigger('refresh.owl.carousel');
						        }
						    }
						});
					// EFEITO ANIMATED
				});
				//$(".Plugin1").show();
				//$(".Plugin1_temp").hide();
			//}, 1000);
		}
		function Plugin1_a($n){
			$('.Plugin1').data('owl.carousel').to($n, 300, true);
		}
		function Plugin1_setAnimation(_elem, _InOut) {
		    var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

		    _elem.each(function() {
		        var $elem = $(this);
		        var $animationType = 'animated ' + $elem.data('animation-' + _InOut);

		        $elem.addClass($animationType).one(animationEndEvent, function() {
		            $elem.removeClass($animationType);
		        });
		    });
		}



		function Plugin2(){
		}
		function Plugin2_a($n){
			$('.Plugin2').trigger('owl.goTo', $n)
		}




		// Lightslider -> http://sachinchoolur.github.io/lightslider/
		function Plugin3(){
			$(".Plugin3").each(function() { // Nao colocar Width fixa
				$itens = $(this).attr('itens') ? $(this).attr('itens') : 0;
				$auto = $(this).attr('auto') ? $(this).attr('auto')*1000 : false;
				$direction = false;
				if($(this).attr('vertical')==1){
					$width = false;
					$direction = true;
				}
				$galeria = false;
				$thumb = 0;
				if($(this).attr('galeria')){
					$galeria = true;
					$thumb = $(this).attr('galeria');
				}
				$(this).lightSlider({
					//autoWidth: 200, // Nao se adapta mto bem (recomendo n usar, so se precisar mesmo de uma altura fixa)
    				item: $itens, // Itens por vez
    				auto: $auto,
    				pause: $auto,
				    vertical: $direction, // Vertical ou Horizontal
				    //verticalHeight: 200, // Altura Vertical

				    // Galeria
					gallery: $galeria,
	                thumbItem: $thumb,
	                onSliderLoad: function() {
	                    $(this).removeClass('cS-hidden');
	                }
	            });
            });
		}

		// Waterfall -> http://raphamorim.com/waterfall.js/
		function Plugin_Galeria(){
			setTimeout(function(){
				$(".Plugin_Galeria").each(function() { // Nao colocar padding e nem margin no li
					waterfall(this);
				});
			}, 1000);
		}

		// ElevateZoom -> http://www.elevateweb.co.uk/image-zoom/examples
		function Plugin_Zoom(){
			$(".Plugin_Zoom").each(function() {
				$zoom_w = $(this).attr('zoom_w') ? $(this).attr('zoom_w') : 300;
				$zoom_h = $(this).attr('zoom_h') ? $(this).attr('zoom_h') : 300;
				$(this).elevateZoom({
					zoomWindowWidth: $zoom_w,
					zoomWindowHeight: $zoom_h,
					cursor: "crosshair",
					easing : true, // Movimento leve apos para a imagem
					tint:true, // Fundo na Imagem
					tintColour:'#000', // Cor do Fundo na Imagem
					tintOpacity:0.5, // Opacity do Fundo na Imagem
					scrollZoom : true, // Zoom com o Mouse
					zoomWindowFadeIn: 500, // FadeIn na hora de Abrir a Imagem Zoom
					zoomWindowFadeOut: 500, // FadeOut na hora de Abrir a Imagem Zoom
					lensFadeIn: 500, // FadeIn na hora de Fechar a Imagem Zoom
					lensFadeOut: 500, // FadeOut na hora de Fechar a Imagem Zoom
				});
			});
		}

		// Mostrar Img Maior
		function Img_Maior($n, $e){
			$($e).parent().parent().parent().parent().parent().parent().parent().parent().find('.Plugin1.Img_Maior').data('owl.carousel').to($n, 300, true);

			// ZOOM
				$data_zoom_image = $($e).parent().parent().parent().parent().parent().parent().parent().parent().find('.Plugin1.Img_Maior .owl-item.active img').attr('data-zoom-image');
				if($data_zoom_image != undefined){
					$($e).parent().parent().parent().parent().parent().parent().parent().parent().find('.Plugin1.Img_Maior .owl-item img').removeClass('Plugin_Zoom');
					$($e).parent().parent().parent().parent().parent().parent().parent().parent().find('.Plugin1.Img_Maior .owl-item.active img').addClass('Plugin_Zoom');
					$('.zoomContainer').remove();
					Plugin_Zoom();
				}
			// ZOOM
		}
		function Img_Maior1($e, $src, $atributos){
			if($atributos == 1){
				$Galeria_Produtos_Img_Maior = $(".Galeria_Produtos_Img_Maior");
			} else {
				$Galeria_Produtos_Img_Maior = $($e).find_parent("class", "Galeria_Produtos_Img_Maior")
			}
			$figure = $Galeria_Produtos_Img_Maior.find("figure");

			$link = $Galeria_Produtos_Img_Maior.attr('link') ? 1 : 0;
			$zoom = $Galeria_Produtos_Img_Maior.attr('zoom') ? 1 : 0;

			$html  = $link==1 ? ' <a href="'+$src+'" data-imagelightbox="b"> ' : '';
				$html += '<img src="'+$src+'" class="'+$figure.find('img').attr('class')+'" ';
				$html += $zoom==1 ? ' data-zoom-image="'+$src+' ' : '';
				$html += '" /> ';
			$html += $link ? '</a> ' : '';

			$figure.stop(true, true).html($html);
			$('.zoomContainer').remove();
			Plugin_Zoom();
		}

		// Full Calendar
		function fullcalendar($table){
			$(document).ready(function() {
				if($(".fullcalendar").attr('class')){
					$(".fullcalendar").each(function() {
						$(this).before('<div class="fullcalendar"></div>');
						$(this).remove();
					});

					$fullcalendar = $table ? $table : $fullcalendar;
					$.ajax({
						type: "POST",
						url: DIR+"/admin/app/Ajax/FullCalendar/datas.php",
						data: { table: $fullcalendar },
						dataType: "json",
						beforeSend: function(){ ajaxIni(0); },
						error: function($request, $error){ ajaxErro($request, $error); },
						success: function($json){
							$(".carregando").hide();

		                    $(".fullcalendar").fullCalendar({
		                        header: {
		                            left: "prev,next today",
		                            center: "title",
		                            right: "month,agendaWeek,agendaDay,listWeek"
		                        },
		                        defaultDate: $json.hoje,
		                        locale: "pt-br",
		                        buttonIcons: true,
		                        weekNumbers: false,
		                        navLinks: false, // pode clicar em nomes de dia / semana para navegar em exibições
		                        editable: false,
		                        eventLimit: false, // permitir "mais" link quando muitos eventos
		                        events: $json.datas,
								eventRender: function(event, element) {
							    	element.bind('click', function() {
							    		$('.fc-event').removeClass('ativo')
							    		$('.fc-list-item td').removeClass('ativo')

							    		if($(element).attr('class') == 'fc-list-item'){
							    			$(element).addClass('ativo')
							    		} else {
							    			$(element).addClass('ativo')
							    		}

						    			$(element).attr('dir', event.id);
										$(".conteudo .lista .acoes .edit").removeAttr('disabled');
										$(".conteudo .lista .acoes .delete").removeAttr('disabled');
										$(".conteudo .lista .acoes .extra").removeAttr('disabled');
							    	});
							    	element.bind('dblclick', function() {
							    		boxs('calendario', 'table='+$fullcalendar+'&id='+event.id);
							    	});
								}
		                    });
							setTimeout(function(){ tooltip(); }, .5);

						}
					});
				}
			});
		}
		var $fullcalendar = "";
	// PLUGINS



/* Eventos All


----------------------------------------------------------------------------------------------------------------------------------


*/
/* Eventos */


	// NOVO

	// NOVO


	// --------------------------------------------------------------------


	// EVENTOS UTEIS

		// HIDE TEMP (BANNER)
			$(document).ready(function() {
				setTimeout(function(){
					$(".dn_temp").hide();
				}, 200);
			});
		// HIDE TEMP (BANNER)

		// DELETE ALERT
			function deletee($url){
				if(confirm('Deseja realmente deletar o(s) iten(s) selecionado(s)?')){
					window.parent.location = $url;
				}
			}
		// DELETE ALERT

	// EVENTOS UTEIS


	// --------------------------------------------------------------------


	// EVENTS COM AJAX E OUTROS
		// Auto Complete
			function autocomplete(){
				/*
				$("input.autocomplete").autocomplete({
					minLength: 1,
					source: function( request, response ) {
						$.ajax( {
							type: "POST",
							url: DIR+"/app/Ajax/Autocomplete/a.php",
							dataType: "json",
							data: { pesq: request.term },
							success: function( data ) {
								response(data.itens);
							}
						});
					},
					//select: function( event, ui ) { alert("selected!"); },
    				//change: function (e, ui) { alert("changed!"); },
				});
				*/
			};

			// Select2
				function autocomplete_select2($table, $rand){
					$("select.autocomplete_"+$rand).select2({
						minimumInputLength: 2,
						ajax: {
							type: "POST",
							url: DIR+"/app/Ajax/Autocomplete/select2.php",
							dataType: "json",
							delay: 250,
							data: function (params) {
								$('.carregando').show();
								return { pesq: params.term, table: $table };
							},
							processResults: function (data, params) {
								$('.carregando').hide();
								var more = (params.page * 10) < data.total;
								return {
									results: data.itens,
									more: more
								};
							},
							cache: true
						},
						escapeMarkup: function (markup) { return markup; },
						templateResult: ResultadoNome,
						templateSelection: Display
					});
					function ResultadoNome(data) { return data.value; }
					function Display (data) { return data.value || data.text; }
				}
			// Select2
		// Auto Complete


		// Tooltip
		function tooltip(){
			// rel="tooltip" data-original-title=""
			$('[rel="tooltip"]').tooltip({html:true});
		}

	// EVENTS COM AJAX E OUTROS


	// --------------------------------------------------------------------


	// INI
		$(document).ready(function() {
			menu_hover_e_click();
			mascaras();
			$('select.design').select2();
			tooltip();
			criar_css();
			setTimeout(function(){ img_loading(); }, 100);

			autocomplete();
			autocomplete_select2()

			Plugin1();
			Plugin2();
			Plugin3();
			Plugin_Galeria();
			ImageLightBox();
			setTimeout(function(){ Plugin_Zoom() }, 500);
		});
	// INI


	// --------------------------------------------------------------------


	// PRODUTOS LOJA
		$(document).ready(function() {
			$('.PP_cronometro').trigger('click');
		});

	    // Atributos Produto
	    function PP_atributos($id, $ini=0, $atributo=0){
			$qtd = $('[name="qtd"][dir="'+$id+'"]').val() ? $('[name="qtd"][dir="'+$id+'"]').val() : 1;

			if($atributo == 1){
				$(".PP_atributos select.atributos_2").val(0);
				$(".PP_atributos select.atributos_3").val(0);
			}

	    	$atributos = '';
			$(".PP_atributos select").each(function() {
				$name = $(this).attr('name');
				$value = $(this).val();
	    		$atributos += '&'+$name+'='+$value;
			});

			$.ajax({
				type: "POST",
				url: DIR+"/app/Ajax/Produtos/PP_atributos.php",
				data: 'id='+$id+'&qtd='+$qtd+'&atributos_thumbs='+$atributos_thumbs+$atributos,
				dataType: "json",
				beforeSend: function(){ ajaxIni(0); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					$(".carregando").hide();

					// ATRIBUTOS
						$('.PP_atributos').html($json.PP_atributos);
					// ATRIBUTOS

					// FOTO
						if($json.PP_foto_thumbs != undefined && $json.PP_foto_thumbs){
							Img_Maior($json.PP_foto_thumbs, $('.Plugin1.Img_Menor li'));
						}
					// FOTO

					// PLUGIN ATRIBUTOS (FOTOS) - APARECER CARROCEL SOMENTE COM AS FOTOS DOS ATRIBUTOS
						$('.FOTOS_ATRIBUTOS_').hide();
						if($json.PP_foto_atributos_plugin != undefined && $json.PP_foto_atributos_plugin){
							$('.FOTOS_ATRIBUTOS_'+$json.PP_foto_atributos_plugin).show();
							if($json.PP_foto_atributos_thumbs != undefined && $json.PP_foto_atributos_thumbs){
								$('.produtos_combinacoes_'+$json.PP_foto_atributos_thumbs).trigger('click');
							}
						} else {
							$('.FOTOS_ATRIBUTOS_0').show();
						}
					// PLUGIN ATRIBUTOS (FOTOS) - APARECER CARROCEL SOMENTE COM AS FOTOS DOS ATRIBUTOS

					// DADOS
						$('.PP_nome').html($json.PP_nome);
						$('.PP_codigo').html($json.PP_codigo);
						$('.PP_categorias').html($json.PP_categorias);
						$('.PP_marcas').html($json.PP_marcas);
						$('.PP_preco').html($json.PP_preco);
						$('.PP_preco0').html($json.PP_preco0);
						$('.PP_preco1').html($json.PP_preco1);
						$('.PP_parcela').html($json.PP_parcela);
						$('.PP_preco_parcelado').html($json.PP_preco_parcelado);
						$('.PP_preco_juros').html($json.PP_preco_juros);
						$('.PP_preco_economize').html($json.PP_preco_economize);
						$('.PP_preco_parcelado_all').html($json.PP_preco_parcelado_all);

						if($json.PP_preco)				$('.PP_precox').show();				else	$('.PP_precox').hide();
						if($json.PP_preco1)				$('.PP_preco1x').show();			else	$('.PP_preco1x').hide();
						if($json.PP_parcela)			$('.PP_parcelasx').show();			else	$('.PP_parcelasx').hide();
						if($json.PP_preco_economize)	$('.PP_preco_economizex').show();	else	$('.PP_preco_economizex').hide();

						if($json.PP_parcelas_varios){
							$('.PP_parcelas_varios').show().html($json.PP_parcelas_varios);
						} else {
							$('.PP_parcelas_varios').hide().html();
						}


						$('.PP_descontos_qtd').html($json.PP_descontos_qtd);

						if($json.PP_comprar){
							$('.PP_comprar').show();
							$('.PP_indisponivel').hide().attr('onclick', '');
						} else {
							$('.PP_comprar').hide();
							$('.PP_indisponivel').show().attr('onclick', $json.PP_link_indisponivel);
						}
					// DADOS
				}
			});
		}
	    function PP_atributos_selecionar($id, $n_select, $value, $pre, $e){
	    	$('select[name="atributos_'+$pre+$n_select+'"]').val($value).trigger('change');
	    	if($pre){
	    		$($e).parent().parent().find('li').removeClass('bd_ativo');
	    		$($e).parent().addClass('bd_ativo');
	    	}
	    }

		// cronometro
		function PP_cronometro($data, $id, $e){
			val = $data.replaceAll(" ", "-");
			val = val.replaceAll(":", "-");
			val = val.split("-");

			$data_fim = new Date(val[0], val[1]-1, val[2], val[3], val[4], $data[5], 0);
			$seg1 = $data_fim.getTime();

			$today = new Date();
			$today.setMilliseconds(0);
			$seg2 = $today.getTime();

			$segs = $seg1 - $seg2;
			$tempo = new Date($segs);
			$tempo.setMilliseconds(0);

			$return = sub_data($tempo);

			$html = '';
			if($return['dias'] > 0){
				$($e).find("span.dias").html($return['dias']);
				$($e).find("span.diasx").show();
			} else {
				$($e).find("span.dias").html($return['dias']);
				$($e).find("span.diasx").hide();
			}
			$($e).find("span.hora").html($return['hora']);
			$($e).find("span.min").html($return['min']);
			$($e).find("span.seg").html($return['seg']);

			if($return['seg_total']>0){
				$($e).show();
				$($e).parent().parent().find(".PP_cronometro_preco").hide();
				$($e).parent().parent().find(".PP_cronometro_preco3").show();
				setTimeout(function(){ PP_cronometro($data, $id, $e); }, 1000);
			} else {
				$($e).hide();
				$($e).parent().parent().find(".PP_cronometro_preco3").hide();
				$($e).parent().parent().find(".PP_cronometro_preco").show();
			}
		}
	// PRODUTOS LOJA



	// ------------------------------------------------------------------------



	// CARRINHO

	    // Gravar
	    function CC_gravar($id, $no_popup){
			$erro = 0;
	    	$qtd = $('[name="qtd"][dir="'+$id+'"]').val() ? $('[name="qtd"][dir="'+$id+'"]').val() : 1;

	    	$atributos = '';
			$(".PP_atributos select").each(function() {
				$name = $(this).attr('name');
				$value = $(this).val();
	    		$atributos += '&'+$name+'='+$value;
			});
			$(".PP_atributos_adicionais select").each(function() {
				$name = $(this).attr('name');
				$value = $(this).val();
	    		$atributos += '&'+$name+'='+$value;
			});
			$(".PP_atributos_outros select").each(function() {
				$name = $(this).attr('name');
				$value = $(this).val();
	    		$atributos += '&'+$name+'='+$value;
			});
			$(".PP_gravacoes input").each(function() {
				$name = $(this).attr('name');
				$value = $(this).val();
	    		$atributos += '&'+$name+'='+$value;
			});

			$x=0;
			$atributos += '&atributos_extra=';
			$(".PP_atributos_extra select, .PP_atributos_extra input").each(function() {
				if($(this).val()){
					$atributos += $x ? ' / ' : '';
					$atributos += $(this).attr('dir') ? $(this).attr('dir') : '';
					$atributos += $(this).val();
					$x++;
				}
			});

			$.ajax({
				type: "POST",
				url: DIR+"/app/Ajax/Carrinho/gravar.php",
				data: 'id='+$id+'&qtd='+$qtd+'&no_popup='+$no_popup+$atributos,
				dataType: "json",
				beforeSend: function(){ ajaxIni(0); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					$(".carregando").hide();
					if($json.evento!=null)
						eval($json.evento);
					if($json.erro){
						$.each($json.erro, function($key, $val) {
							alerts(0, $val, 1);
						});
					} else if($json.alert){
						if($json.alert!='z'){
							alerts(1, $json.alert);
						}
						if($json.alert_boxs==1){
							boxs('carrinho_alert', 'id='+$id);
						} else {
							CC_atualizar();
						}
					} else {
						window.parent.location = DIR+'/carrinho/';
					}
				}
			});
	    }

		// Deletar Item
		function carrinho_deletar_item($ref, $no_carrinho){
			if($no_carrinho != undefined){
				$ref = $($ref).find_parent('tags', 'li').attr('class').replace('CC_item_', '');
			}
			$.ajax({
				type: "POST",
				url: DIR+"/app/Ajax/Carrinho/deletar_item.php",
				data: { ref: $ref },
				dataType: "json",
				beforeSend: function(){ ajaxIni(0); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					$(".carregando").hide();
					if($no_carrinho == undefined){
						window.location.reload();
					} else {
						$('.CC_item_'+$json.rel_classe).fadeOut(500);
						setTimeout(function(){ $('.CC_item_'+$json.rel_classe).remove() }, 500);
						CC_atualizar();
					}
				}
			});
		};


		// Atualizar All
		function CC_atualizar($tipo, $variavel, $this, $no_click, $pagamento){
			$tipo = $tipo ? $tipo : '';
			if($tipo == 'qtd'){
				$variavel += '&val='+$($this).val();
			} else if($tipo == 'frete'){
				$variavel += '&val='+$($this).val();
			}
			$variavel += $('input[name="frete"]:checked').val() ? '&tipo_frete_atual='+$('input[name="frete"]:checked').val() : '';
			setTimeout(function(){
				$.ajax({
					type: "POST",
					url: DIR+"/app/Ajax/Carrinho/atualizar.php",
					data: 'tipo='+$tipo+'&'+$variavel,
					dataType: "json",
					beforeSend: function(){ ajaxIni(0); },
					error: function($request, $error){ ajaxErro($request, $error); },
					success: function($json){
						if($pagamento){
							Pagamento_sucess($pagamento);

						} else {
							$(".carregando").hide();
							if($json.evento!=null)
								eval($json.evento);

							// Itens no Carrinho
							if($json.itens!=null){
								$.each($json.itens, function($key, $val){
									$rel_classe = $val.rel_classe;

									if( !$('.CC_carrinho_topo .CC_item_'+$rel_classe).html() ){
										$html = $('.CC_carrinho_topo li:nth-child(1)').html();
										if($rel_classe.indexOf("xxxx") >= 0){
											$html = $html.replaceAll('xxxx', $rel_classe);
										}
										$html = '<li class="CC_item_'+$rel_classe+'">'+$html+'</li>';
										$('.CC_carrinho_topo').append($html);

										if($val['foto'] != DIR+'/web/fotos/'){
											$('.CC_item_'+$rel_classe+' .CC_item_img').html('<img src="'+$val['foto']+'" class="br5">');
										}
									}

									$('.CC_item_'+$rel_classe+' .CC_item_nome').html($val['nome']+$val['descricao']);
									if($val['foto'] != DIR+'/web/fotos/'){
										$('.CC_item_'+$rel_classe+' .CC_item_foto img').attr('src', $val['foto']);
									}
									$('.CC_item_'+$rel_classe+' .CC_item_preco').html($val['preco']);
									$('.CC_item_'+$rel_classe+' input[name="qtd"]').val($val['qtd']);
									$('.CC_item_'+$rel_classe+' .CC_item_qtd').html($val['qtd']);
									$('.CC_item_'+$rel_classe+' .CC_item_subtotal').html($val['subtotal']);
								});
							} else {
								//window.location.reload();
							}

							// Endereco
							if($json.endereco_atual!=null){
								$('.box_endereco .enderecos').show();
								$('.endereco_atual').html($json.endereco_atual);
							} else {
								$('.box_endereco .enderecos').hide();
								$('.endereco_atual').html('');
							}

							// Frete
							$('.CC_box_frete').html($json.frete_html);

							// Cartao Parcelamento
							$('.CC_cartao_parcelamento select').html($json.cartao_parcelamento);

							// Selecionar Tipo de Frete
							if($json.tipo_frete_atual!=null){
								$('input[value="'+$json.tipo_frete_atual+'"]').attr('checked', true)
							}

							// Confirmar So o Frete esta calulando corretamente
							if( ($json.frete_n<=0 && $no_click!=1) || $json.atualizar_frete ){
								$('input[name="frete"]:checked').trigger('click');
							}


							// Valores Finais e Topo
							$('.CC_count').html($json.count);
							$('.CC_subtotal').html($json.subtotal);
							$('.CC_desconto').html($json.desconto);
							$('.CC_frete').html($json.frete);
							$('.CC_total').html($json.total);
							$('.CC_total_numero').val($json.total_numero);
							if($json.desconto_n<=0){
								$('.CC_desconto').parent().hide();
							} else {
								$('.CC_desconto').parent().show();
							}

							$valor_total = $json.total_numero; // para calcular parcelamento PagSeguro
						}
					}
				});
			}, 0.5);
		}

		// PRODUTOS
		    // Setas para Mudar Qtd
			function PP_qtd_setas(e, $soma){
				if($soma)	$qtd = parseInt($(e).parent().find('[name=qtd]').val())+$soma;
				else		$qtd = $(e).parent().find('[name=qtd]').val();
				$qtd = $qtd*1;
				$qtd = $qtd>0 ? $qtd : 1;
				$(e).parent().find('[name=qtd]').val($qtd).trigger('keyup');
			}

			// Produtoss Frete
			function PP_frete($id, e){
				$preco = $('.PP_preco').html().replace('R$ ', '').replace('R$&nbsp;', '');
				$.ajax({
					type: "POST",
					url: DIR+"/app/Ajax/Produtos/frete.php?id="+$id+"&preco="+$preco,
					data: $(e).serialize(),
					dataType: "json",
					beforeSend: function(){ ajaxIni(0); },
					error: function($request, $error){ ajaxErro($request, $error); },
					success: function($json){
						$(".carregando").hide();

						$(".PP_fretes").show();
						$('.CC_box_frete').html($json.frete.html);

						if($json.frete['endereco']!=null){
							$(".PP_endereco").html($json.frete['endereco']);
						}
					}
				});
			};
		// PRODUTOS

	// CARRINHO



	// ------------------------------------------------------------------------



	// PAGAMENTOS

		// PAGAMENTOS PLANOS
		    function pagar_plano($metodo, $id){
				$.ajax({
					type: "POST",
					url: DIR+"/app/Ajax/Pagamentos/pagamento_plano.php",
					data: { metodo: $metodo, id: $id },
					dataType: "json",
					beforeSend: function(){ ajaxIni(0); },
					error: function($request, $error){ ajaxErro($request, $error); },
					success: function($json){
						if($json.erro != null){
							$delay = $json.delay ? $json.delay : '';
							alerts(0, $json.erro, 1, $delay);
							$(".carregando").hide(); fechar_all();
						} else if($json.alert){
							alerts(0 ,$json.alert);
							$(".carregando").hide(); fechar_all();
						} else {
							if($json.evento!=undefined){
								eval($json.evento);
							}
						}
					}
				});
			}
		// PAGAMENTOS PLANOS

		// PAGAMENTO CARRNHO
		    function Pagamento($metodo, $id){
	    		fundoo1();
		    	if(!$id){
					CC_atualizar('Pagamento', '', '', '', $metodo);
				} else {
					Pagamento_sucess($metodo, $id);
				}
			}
		    function Pagamento_sucess($metodo, $id){
		    	$id = $id ? $id : 0;
				$obs = $('textarea[name="obs"]').val();
				$cartao_nome = $('input.cartao_nome[name="cartao_nome"]').val();
				$cartao_numero = $('input.cartao_numero[name="cartao_numero"]').val();
				$cartao_validade = $('input.cartao_validade[name="cartao_validade"]').val();
				$cartao_cvv = $('input.cartao_cvv[name="cartao_cvv"]').val();
				$cartao_parcelamento = $('select.cartao_parcelamento[name="cartao_parcelamento"]').val();

				// PAGSEGURO
					$SenderHash_ = '';
					if($metodo == 'PagSeguro_cartao' || $metodo == 'PagSeguro_boleto'){
						$SenderHash_ = PagSeguroDirectPayment.getSenderHash();
					}
				// PAGSEGURO

				$.ajax({
					type: "POST",
					url: DIR+"/app/Ajax/Pagamentos/pagamento.php",
					data: { metodo: $metodo, id: $id, obs: $obs, cartao_nome: $cartao_nome, cartao_numero: $cartao_numero, cartao_validade: $cartao_validade, cartao_cvv: $cartao_cvv, cartao_parcelamento: $cartao_parcelamento, PagSeguro_SenderHash: $SenderHash_, PagSeguro_parcela_final: $parcela_final, PagSeguro_cartao_token: $cart_token },
					dataType: "json",
					beforeSend: function(){ ajaxIni(0); },
					error: function($request, $error){ ajaxErro($request, $error); },
					success: function($json){
						if($json.erro != null){
							$delay = $json.delay ? $json.delay : '';
							alerts(0, $json.erro, 1, $delay);
							$(".carregando").hide(); fechar_all();
						} else if($json.alert){
							alerts(0 ,$json.alert);
							$(".carregando").hide(); fechar_all();
						} else {
							if($json.evento!=undefined){
								eval($json.evento);
							}
						}
					}
				});
		    }
		// PAGAMENTO CARRNHO


		// PAGSEGURO
			var $cart_token = '';
			var $valor_total = 0;
			var $pagseguro_session = 0;
			var $pagseguro_brand = '';
			var $parcela_final = '';

			// SESSAO
				function PagSeguro_sessao(){
					$.ajax({
						type: "POST",
						url: DIR+"/app/Ajax/Pagamentos/PagSeguro/login.php",
						dataType: "json",
						beforeSend: function(){ ajaxIni(0); },
						error: function($request, $error){ ajaxErro($request, $error); },
						success: function($json){
							PagSeguroDirectPayment.setSessionId($json.session);
						}
					});
				}
			// SESSAO

			// PARCELAMENTO
				function PagSeguro_parcelamento(){
					$(".cartao_numero").on("keyup", function() {
						if($(".cartao_numero").val()){
							if(!$pagseguro_brand){
								$pagseguro_brand = 1;
								$val = $valor_total.toFixed(2)
								$('.CC_cartao_parcelamento_PagSeguro select').html('<option value="1">1x de R$&nbsp;'+$val+' sem juros (R$&nbsp;'+$val+')</option>');
								$('.CC_cartao_parcelamento_PagSeguro').show();
							}

							PagSeguroDirectPayment.getBrand({
							    cardBin: $(".cartao_numero").val().replace(" ", ""),
							    success: function(response) {
									$brand = response.brand.name;

									if($pagseguro_brand != $brand){
										$pagseguro_brand = $brand;

										PagSeguroDirectPayment.getInstallments({
									        amount: $valor_total,
									        maxInstallmentNoInterest: $pagseguro_parcelas_sem_juros ? $pagseguro_parcelas_sem_juros : 1,
											brand: $brand,
									        success: function(response){
												pre(response);
												$.each(response.installments, function($key1, $value1) {
													if($key1 == $brand){
														$html = '';
														$parcela_final = '';
														$.each($value1, function($key, $value) {
															$val = $value.installmentAmount.toFixed(2);
															$val_total = $value.totalAmount.toFixed(2);
															$html += '<option value="'+$value.quantity+'">'+$value.quantity+'x de R$&nbsp;'+$val+' '+($value.interestFree ? 'sem' : 'com')+' juros (R$&nbsp;'+$val_total+')</option>';

															$parcela_final += '&&&'+$value.quantity+'---'+$value.installmentAmount+'---'+$value.totalAmount+'---'+$value.interestFree;
														});
														$('.CC_cartao_parcelamento_PagSeguro select').html($html);
														$('.CC_cartao_parcelamento_PagSeguro').show();
													}
												});
									       	}
										});
									}
							    },
							});
						}
					})
				}
			// PARCELAMENTO

			// CARTAO TOKEN (VALIDAR)
				function PagSeguro_cartao_token(){
					fundoo1();
					$('.carregando').show();

					$cart_token = '';
					$cartao_nome = $('input.cartao_nome[name="cartao_nome"]').val();
					$cartao_numero = $('input.cartao_numero[name="cartao_numero"]').val();
					$cartao_validade = $('input.cartao_validade[name="cartao_validade"]').val();
					$cartao_cvv = $('input.cartao_cvv[name="cartao_cvv"]').val();
					$ex = $cartao_validade.split('/');
					PagSeguroDirectPayment.createCardToken({
						cardNumber: $cartao_numero.replaceAll(' ', ''),
						brand: $pagseguro_brand,
						cvv: $cartao_cvv,
						expirationMonth: $ex[0],
						expirationYear: $ex[1],
						success: function(response) {
							$cart_token = response.card.token;
							Pagamento('PagSeguro_cartao');
						},
						error: function(response) {
							$cart_token = 123;
							Pagamento('PagSeguro_cartao');
						},
					});
				}
			// CARTAO TOKEN (VALIDAR)
		// PAGSEGURO



		// CIELO
			// BOLETO
			    function Cielo_Boleto_pagar($id){
					$.ajax({
						type: "POST",
						url: DIR+"/app/Ajax/Pagamentos/Cielo/Boleto/pagar.php?id="+$id,
						data: { id: $id },
						dataType: "json",
						beforeSend: function(){ ajaxIni(0); },
						error: function($request, $error){ ajaxErro($request, $error); },
						success: function($json){
							$(".carregando").hide();
							if($json.erro){
								$.each($json.erro, function($key, $val) {
									alerts(0, $val, 1);
								});

							} else if($json.boleto_link){
								$('.Cielo_boxs.boleto .gerar_boleto').html('<a href="'+$json.boleto_link+'" target="_blank"> <button class="hover db w100p p15 m-a fz20 ttu cor_fff bdw2 bd_DA0404 back_DA0404 br6">Gerar Boleto</button> </a>').slideDown();

							} else {
								$('.Cielo_boxs.boleto .gerar_boleto').html('<div class="tac">Erro...</div>').slideDown();
							}

							if($json.evento!=undefined){
								eval($json.evento);
							}
						}
					});
				}
			// BOLETO

			// CREDITO
				function Cielo_Credito_pagar($id, e){
					$.ajax({
						type: "POST",
						url: DIR+"/app/Ajax/Pagamentos/Cielo/Credito/pagar.php",
						data: $(e).serialize(),
						dataType: "json",
						success: function($json){
							$(".carregando").hide();
							if($json.erro){
								$.each($json.erro, function($key, $val) {
									alerts(0, $val, 1);
								});
							}

							if($json.evento!=undefined){
								eval($json.evento);
							}
						}
					});
				};
			// CREDITO
		// CIELO

		// PLANOS
		    function Pagamento_planos($id, $id_edit){
				$.ajax({
					type: "POST",
					url: DIR+"/app/Ajax/Pagamentos/pagamento_planos.php",
					data: { id: $id, id_edit: $id_edit },
					dataType: "json",
					beforeSend: function(){ ajaxIni(0); },
					error: function($request, $error){ ajaxErro($request, $error); },
					success: function($json){
						$(".carregando").hide();
						if($json.alert){
							alerts(0 ,$json.alert);
						} else {
							$('.events_externos .outros').html($json.form);
							$('.events_externos .outros #form_pagamento').submit();

							if($json.evento!=undefined){
								eval($json.evento);
							}
						}
					}
				});
		    }
	    // PLANOS

	// PAGAMENTOS



	// ------------------------------------------------------------------------



	// COTACAO

	    // Gravar
	    function cotacao_gravar($id, $banco){
	    	$qtd = $('input[name=qtd][dir="'+$id+'"]').val();
			$.ajax({
				type: "POST",
				url: DIR+"/app/Ajax/Cotacao/gravar.php",
				data: { id: $id, banco: $banco, qtd: $qtd },
				dataType: "json",
				beforeSend: function(){ ajaxIni(0); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					window.parent.location = DIR+'/cotacao/';
				}
			});
		};

		// Cotacao Comprimento
		function cotacao_comprimento(e){
			$.ajax({
				type: 'POST',
				url: DIR+"/app/Ajax/Cotacao/gravar_comprimento.php",
				data: $(e).serialize(),
				dataType: "json",
				success: function(json){
					if(json.resposta){
						$(".alerts_orca, .alerts_orca .alert_01").stop(true, true).fadeIn();
						$('.fundoo').fadeIn();
					} else {
						$(".alerts_orca, .alerts_orca .alert_02").stop(true, true).fadeIn(500).delay(2000).fadeOut(1000);
						$('.fundoo').stop(true, true).fadeIn(500).delay(2000).fadeOut(1000);
					}
				}
			});
		};

		// Cotacao Comprimento Alerts
		function cotacao_comprimento_alerts(){
            $(".comprimento").click(function() {
                if($(this).is(":checked")){
                    $(this).parent().parent().find('.qtd').val('1');
                } else {
                    $(this).parent().parent().find('.qtd').val('');
                }
            })
            setTimeout(function(){
	            $html  = '<div class="alerts_orca fechar_hide"> ';
					$html += '<div class="alert alert_01 tac"> ';
						$html += '<b class="fz16">O que deseja Fazer?</b> ';
						$html += '<a class="p10 fz14" style="color: #fff; background: #aaa" href="javascript:fechar_cc()" role="button">Continuar Comprando</a> ';
						$html += '<a class="p10 fz14" style="color: #fff; background: #aaa" href="'+DIR+'/cotacao/" role="button">Finalizar Orçamento</a> ';
					$html += '</div> ';
					$html += '<div class="alert alert_02 tac"> ';
						$html += '<b class="c_vermelho fz18 lh24"> ';
							$html += 'Você não selecionou nenhuma medida ou aconteceu algum erro! Tente novamente! ';
						$html += '</b> ';
					$html += '</div> ';
				$html += '</div> ';
				$('.events_externos').append($html);
			 }, 2000);
		}

		// Fechar Cotacao Comprimento
		function fechar_cc(){
			$('.alert').fadeOut();
			$('.fundoo').fadeOut();
		}

	// COTACAO



	// ------------------------------------------------------------------------



	// PIN GEOMAPEAMENTO
		function geomapeamento(){
			navigator.geolocation.getCurrentPosition(geomapeamento_success, geomapeamento_error);
		}
		function geomapeamento_success(position) {
			atualizar_mapa(position.coords.latitude, position.coords.longitude);
			//$.ajax({
				//type: "POST",
				//url: DIR+"/app/Ajax/Pin/geomapeamento.php",
				//data: { lat: position.coords.latitude, lng: position.coords.longitude },
				//context: { lat: position.coords.latitude, lng: position.coords.longitude },
				//dataType: "json",
				//success: function($json){
					//if($json.cidades){ $("#estados").attr('cidade', $json.cidades); }
					//if($json.estados){ $("#estados").val($json.estados).trigger('change'); }
				//}
			//});
		};
		function geomapeamento_error() {
			atualizar_mapa();
			//$("#estados").val('SP').trigger('change');
		};


		function atualizar_mapa($lat_usuario, $lng_usuario, $id){
			if($id){ $("#idd").val($id); }

			$lat = $lat_usuario ? $lat_usuario : '';
			$lng = $lng_usuario ? $lng_usuario : '';

			$idd = 0; //$("#idd").val();
			$representantes = ''; $("#representantes").val();
			$estados = ''; $("#estados").val();
			$cidades = ''; $("#cidades").val();
			$order = 'nome'; // $("#order").val();

			$('.INI').removeClass('INI');
			$.ajax({
				type: "POST",
				url: DIR+"/app/Ajax/Pin/atualizar_mapa.php",
				data: { lat: $lat, lng: $lng, idd: $idd, representantes: $representantes, estados: $estados, cidades: $cidades, order: $order },
				context: { idd: $idd, representantes: $representantes, estados: $estados, cidades: $cidades, order: $order },
				dataType: "json",
				beforeSend: function(){ ajaxIni(0); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					$('.alert').hide();

					var latlngbounds = new google.maps.LatLngBounds();

	        		$('.mapa_html').html($json.html_final);

					$x = 0;
					$n = 0;
					$('.box_representantes').html('');
					$.each($json.array, function($key, $value) {
						$('.box_representantes').append($value.html);

						var marker = new google.maps.Marker({
							position: new google.maps.LatLng($value.lat, $value.lng),
							title: $value.nome+'112',
							map: map,
							icon: $value.valido==1 ? 'plugins/Google/Pin/img/localizacao.png' : 'plugins/Google/Pin/img/pin.png',
						});

						var myOptions = {
							content: $value.txt,
							pixelOffset: new google.maps.Size(-150, 0)
			        	};

			        	// HTML
							if($value.html){
								//$('.mapa_html').append($value.html);
								$n++;
							}
			        	// HTML

						infoBox[$value.id] = new InfoBox(myOptions);
						infoBox[$value.id].marker = marker;

						infoBox[$value.id].listener = google.maps.event.addListener(marker, 'click', function (e) {
							$.each($json.array, function($key1, $value1) {
								infoBox[$value1.id].close();
							});

							abrirInfoBox($value.id, marker);
						});

						markers.push(marker);
						latlngbounds.extend(marker.position);

						$x++;
					});

					$('.mapa_html_x').html($n+' lojas encontradas perto de você');

					// MAPS
						//var markerCluster = new MarkerClusterer(map, markers);
						map.fitBounds(latlngbounds);

						setTimeout(function(){
							map.setZoom(map.getZoom())
							console.log($x);
							if($x == 1){ map.setZoom(map.getZoom()-1) }
							if($x == 1){ map.setZoom(map.getZoom()-1) }
							if($x == 1){ map.setZoom(map.getZoom()-1) }
							if($x == 1){ map.setZoom(map.getZoom()-1) }
							if($x == 1){ map.setZoom(map.getZoom()-1) }
							if($x <= 2){ map.setZoom(map.getZoom()-1) }
							if($x == 3){ map.setZoom(map.getZoom()-1) }
							if($x == 4){ map.setZoom(map.getZoom()-1) }
						}, 500);

						if($x == 0){
							alerts(0, 'Nenhuma Loja Encontrada para Essa Cidade!');
						}
					// MAPS

					//$url  = DIR+'/lojas/?';
					//$url += '&idd='+this.idd;
					//$url += '&representantes='+this.representantes;
					//$url += '&estados='+this.estados;
					//$url += '&cidades='+this.cidades;
					//$url += '&order='+this.order;
					//window.history.pushState($idd, document.title, $url);

					//ir('header');

					$(".carregando").hide();
				}
			});

		}
	// PIN GEOMAPEAMENTO





    // FORMULA DE HAVERSINE
	    //var $distancia = formula_haversine({lat: -16.735460432673857, lng: -43.838077142888984}, {lat: -16.735419335028414, lng: -43.850179269207786});
	    function formula_haversine(position1, position2) {
	        "use strict";
	        var deg2rad = function (deg) { return deg * (Math.PI / 180); },
	            R = 6371,
	            dLat = deg2rad(position2.lat - position1.lat),
	            dLng = deg2rad(position2.lng - position1.lng),
	            a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
	                + Math.cos(deg2rad(position1.lat))
	                * Math.cos(deg2rad(position1.lat))
	                * Math.sin(dLng / 2) * Math.sin(dLng / 2),
	            c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	        return ((R * c *1000).toFixed());
	    }
    // FÓRMULA DE HAVERSINE


	// ------------------------------------------------------------------------



	// CRONOMETRO
		function cronometro($data){
			cronometro1($data);
			setInterval(function () {
				cronometro1($data);
			}, 1000);
		}
		function cronometro1($data){
			$falta = (new Date($data).getTime() - new Date().getTime()) / 1000;
			$falta = parseInt($falta);
			dias = 60 * 60 * 24;
			horas = 60 * 60;
			minutos = 60;

			$dias = parseInt($falta / dias);
			$falta = $falta - ($dias*dias);

			$horas = parseInt($falta / horas);
			$falta = $falta - ($horas*horas);

			$horas_all = $dias * 24 + $horas;

			$minutos = parseInt($falta / minutos);
			$falta = $falta - ($minutos*minutos);

			$segundos = $falta;

			$dias = $dias<10 ? '0'+$dias : $dias;
			$horas = $horas<10 ? '0'+$horas : $horas;
			$minutos = $minutos<10 ? '0'+$minutos : $minutos;
			$segundos = $segundos<10 ? '0'+$segundos : $segundos;

			$('.cronometro_dias1').html($dias>0 ? $dias : 'menos de 1');
			$('.cronometro_dias').html($dias);
			$('.cronometro_horas').html($horas);
			$('.cronometro_horas_all').html($horas_all);
			$('.cronometro_mins').html($minutos);
			$('.cronometro_segs').html($segundos);
		}
	// CRONOMETRO



	// ------------------------------------------------------------------------



	// RESPONSIVO
		$(document).ready(function() {
			$html  = '';
			$cor = $(".menuu_resp ul").attr('cor');
			$bd = $(".menuu_resp ul").attr('bd');
			$back = $(".menuu_resp ul").attr('back');

			$x=0;
			$y=0;
			$("ul.menuu > li:not('.no') > a").each(function() { $x++;
				$nome = $(this).html();
				$href = $(this).attr('href') ? 'href="'+$(this).attr('href')+'"' : 'onclick="'+$(this).attr('onclick')+'"';
				$bd_menu = $x!=1 ? 'bdt_'+$bd : '';

				// VERIFICANDO SE EXISTE SUBMENU
				if($(this).parent().find('ul').attr('class') == undefined){
					$html += '<li> ';
							$html += '<a '+$href+' class="limit db p10 cor_'+$cor+' '+$bd_menu+' ">'+$nome+'</a> ';
					$html += '</li> ';

				// COM SUBMENU
				} else { $y++;
					$html += '<li> ';
							$html += '<a onclick="menuu_resp_submenu('+$y+')" class="limit db p10 cor_'+$cor+' '+$bd_menu+' ">'+$nome+'</a> ';
					$html += '</li> ';
					// SUBMENU
						$z=0;
						$(this).parent().find("li a").each(function() { $x++;
							$nome = $(this).html();
							$href = $(this).attr('href') ? 'href="'+$(this).attr('href')+'"' : 'onclick="'+$(this).attr('onclick')+'"';
							$submenu = '&nbsp;&raquo;&nbsp;';
							if($(this).parent().find('ul').attr('class') != undefined){
								$submenu = '&nbsp;&nbsp;&nbsp;&nbsp;&raquo;&nbsp;';
							}
							$bd_menu = $x!=1 ? 'bdt_'+$bd : '';
							$html += '<li class="dn menuu_resp_submenu_ menuu_resp_submenu_'+$y+' menu_cate_'+$z+'"> ';
									$html += '<a '+$href+' class="limit db p10 cor_'+$cor+' '+$bd_menu+' ">'+$submenu+strip_tags($nome)+'</a> ';
							$html += '</li> ';
							$z++;
						});
					// SUBMENU
				}
			});

			$html += '		<div class="clear"></div> ';

			$(".menuu_resp ul").html($html);
			criar_css(".menuu_resp ul");
		});
		function menuu_resp_submenu($x){
			if($('.menuu_resp_submenu_'+$x).css('display') == 'none'){
				$('.menuu_resp_submenu_').hide();
				$('.menuu_resp_submenu_'+$x).show();
			} else {
				$('.menuu_resp_submenu_').hide();
			}
		}
	// RESPONSIVO



	// ------------------------------------------------------------------------



	// SAIR (LOGIN)
		function sair(){
			ajaxNormal('ajaxForm/login.php?sair=1')
		}
	// SAIR (LOGIN)


	// FOOTER
		$(window).scroll(function(){
			if($(window).scrollTop() > 200){
				$("headerxx").addClass('fixed');
			} else  {
				$("headerxx").removeClass('fixed');
			}
			//if($(window).scrollTop() > (($("footer").offset().top)-400)){
				//$(".busca-flutuante").fadeOut();
			//} else  {
				//$(".busca-flutuante").fadeIn();
			//}

			if($(window).scrollTop() > 200){
				$(".footer_seta").fadeIn();
			} else  {
				$(".footer_seta").fadeOut();
			}
		});
		$(document).ready(function() {
			$('.footer_seta').on('click', function() {
				$("html,body").animate( {scrollTop: $("html").offset().top}, "slow" );
			});
		});

		// FOOTER_COOKIES
			$(document).ready(function() {
				if(lerCookie('footer_cookies')==undefined){
					$('.FOOTER_COOKIES').show();
				}
			});
			function footer_cookies(){
				$('.FOOTER_COOKIES').hide();
				gravarCookie('footer_cookies', 'ok', 365);
			}
		// FOOTER_COOKIES
	// FOOTER



	// ------------------------------------------------------------------------



	// VERIFICACOES
		$(document).ready(function() {
			setTimeout(function(){
				// Cadastro Online
				$.ajax({
					type: "POST",
					url: DIR+"/app/Ajax/Verificacoes/cadastro_online.php",
					data: '',
					dataType: "json",
					success: function($json){
					}
				});
			}, 5000);
		});
	// VERIFICACOES



	// ------------------------------------------------------------------------



	// PLUGINS SITE
		$(document).ready(function (){

			// DataTable
			$(".datatable").each(function() {
				var oTable = $(".datatable").DataTable({
					"order": [ [1, 'desc'] ],
					"iDisplayLength" : 25,
					"sPaginationType": "full_numbers",
	        		"processing": true,
				});
			});

		});
	// PLUGINS SITE


	// ANIMACOES
		$(document).ready(function (){
			$("[animated_ini]").each(function() {
				$(this).addClass('animated_ini');
				$(this).wrap("<div></div>");
				animated_on('ini', 1);
			});

			$x=0;
			var $animated = [];
			$("[animated]").each(function() { $x++;
				$(this).addClass('animated_'+$x);
				$(this).wrap("<div></div>");
			});
			$(window).scroll(function(){
				for (var $i=1; $i<=$('[animated]').length; $i++) {
					animated_scroll($i)
				};
			});
			function animated_scroll($n){
				$altura_tela = $(window).scrollTop() + $(window).height();
				// ON
				if($('.animated_'+$n).attr('animated_status')==null || $('.animated_'+$n).attr('animated_status')==0){
					if($altura_tela > ($('.animated_'+$n).parent().offset().top + 240) ){
						animated_on($n);
					}

				// OFF
				} else if($('.animated_'+$n).attr('animated_status')==2){
					if($altura_tela < ($('.animated_'+$n).parent().offset().top + 230) ){
						animated_off($n);
					}
				}
			}
			function animated_on($n, $tipo){
				tirar_efeitos_atuais($('.animated_'+$n));
				$efeito = efeitosIn($('.animated_'+$n), $tipo);
				shuffle($efeito);
				$('.animated_'+$n).removeClass('animated').parent().css('overflow', 'hidden');
				setTimeout(function(){
					$('.animated_'+$n).addClass('animated '+$efeito[0]).css('opacity', 1);
					setTimeout(function(){ $('.animated_'+$n).parent().css('overflow', ''); }, 1500);
				}, 0.5);
				if($('.animated_'+$n).attr('animated_loop'))
					$('.animated_'+$n).attr('animated_status', 2)
				else
					$('.animated_'+$n).attr('animated_status', 1);
			}
			function animated_off($n){
				tirar_efeitos_atuais($('.animated_'+$n));
				$efeito = efeitosOut($('.animated_'+$n), $tipo);
				shuffle($efeito);
				$.each($efeito, function($key, $val) {
					$('.animated_'+$n).removeClass($val);
				});
				$('.animated_'+$n).removeClass('animated').parent().css('overflow', 'hidden');
				setTimeout(function(){
					$('.animated_'+$n).addClass('animated '+$efeito[0]).css('opacity', '');
					setTimeout(function(){ $('.animated_'+$n).parent(); }, 1500);
				}, 0.5);
				$('.animated_'+$n).attr('animated_status', 0)
			}

			function efeitosIn($e, $tipo){
				if($tipo==1)
					return $e.attr('efeito') ? [$e.attr('efeito')] : ['fadeIn'];
				else
					return $e.attr('efeito') ? [$e.attr('efeito')] : ['fadeIn'];

				//return $e.attr('efeito') ? [$e.attr('efeito')] : ['fadeIn', 'lightSpeedIn', 'zoomIn', 'zoomInUp']; // flipInX
			}
			function efeitosOut($e, $tipo){
				return $e.attr('efeito') ? [$e.attr('efeito')] : ['fadeOut', 'fadeOutUpBig', 'lightSpeedOut', 'zoomOut', 'zoomOutUp']; // flipOutX
			}
			function tirar_efeitos_atuais($e){
				$.each(efeitosIn($e), function($key, $val) {
					$e.removeClass($val);
				});
				$.each(efeitosOut($e), function($key, $val) {
					$e.removeClass($val);
				});
			}

		});
	// ANIMACOES


	// OUTROS EVENTOS NOVOS
		function catee($id, $e){
			if($id){
				hide('.catee');
				fshow('.catee_'+$id);
			} else {
				fshow('.catee');
			}
			$($e).parent().find('> li,> a').removeClass('selected').removeClass('active');
			$($e).addClass('selected active');
			img_carregar();
		}
		function catee1($id, $e){
			$($e).parent().find('li').removeClass('active');
			$($e).addClass('active');

			$('.catee').hide();
			$('.catee_'+$id).show();
		}

		function cate_carrocel($id){
			$carrocel = ajaxRapido('../../views/z_carrecel.php', 'id='+$id);
			$('.z_carrecel').html($carrocel);
			img_carregar();
			$(".carregando").hide();
		}

		$(document).ready(function() {
			setTimeout(function(){
				$(".dn_time").each(function() {
					$(this).hide();
				});
			}, 1000);
		});


    	$(document).ready(function() {
			setTimeout(function(){ $('.dnn_700x').addClass('dnn_700'); }, 1000);
		});

		$(document).ready(function() {
			$(".faqq").on("click", function(){
				$(this).parent().find("> .faqq1").slideToggle();
			})
		});
	// OUTROS EVENTOS NOVOS


/* Eventos */

//hack para alterar a altura da caixa de recuperação de senha:
// Selecionar o elemento pela classe
$('.esqueci_senha').css('top', '100px');

