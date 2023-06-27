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
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).Cropper=e()}(this,function(){"use strict";function e(e,t){var i,a=Object.keys(e);return Object.getOwnPropertySymbols&&(i=Object.getOwnPropertySymbols(e),t&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,i)),a}function B(a){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?e(Object(n),!0).forEach(function(t){var e,i;e=a,t=n[i=t],i in e?Object.defineProperty(e,i,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[i]=t}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(n,t))})}return a}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){for(var i=0;i<e.length;i++){var a=e[i];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function T(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(t){if("string"==typeof t)return a(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(i="Object"===i&&t.constructor?t.constructor.name:i)||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?a(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,a=new Array(e);i<e;i++)a[i]=t[i];return a}var t="undefined"!=typeof window&&void 0!==window.document,h=t?window:{},o=!(!t||!h.document.documentElement)&&"ontouchstart"in h.document.documentElement,r=t&&"PointerEvent"in h,c="cropper",k="all",O="crop",E="move",W="zoom",H="e",N="w",L="s",z="n",Y="ne",X="nw",R="se",S="sw",s="".concat(c,"-crop"),d="".concat(c,"-disabled"),A="".concat(c,"-hidden"),l="".concat(c,"-hide"),p="".concat(c,"-invisible"),m="".concat(c,"-modal"),u="".concat(c,"-move"),g="".concat(c,"Action"),f="".concat(c,"Preview"),v="crop",w="move",b="none",y="crop",x="cropend",M="cropmove",C="cropstart",D="dblclick",j=r?"pointerdown":o?"touchstart":"mousedown",I=r?"pointermove":o?"touchmove":"mousemove",P=r?"pointerup pointercancel":o?"touchend touchcancel":"mouseup",U="zoom",q="image/jpeg",$=/^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/,Q=/^data:/,K=/^data:image\/jpeg;base64,/,Z=/^img|canvas$/i,G={viewMode:0,dragMode:v,initialAspectRatio:NaN,aspectRatio:NaN,data:null,preview:"",responsive:!0,restore:!0,checkCrossOrigin:!0,checkOrientation:!0,modal:!0,guides:!0,center:!0,highlight:!0,background:!0,autoCrop:!0,autoCropArea:.8,movable:!0,rotatable:!0,scalable:!0,zoomable:!0,zoomOnTouch:!0,zoomOnWheel:!0,wheelZoomRatio:.1,cropBoxMovable:!0,cropBoxResizable:!0,toggleDragModeOnDblclick:!0,minCanvasWidth:0,minCanvasHeight:0,minCropBoxWidth:0,minCropBoxHeight:0,minContainerWidth:200,minContainerHeight:100,ready:null,cropstart:null,cropmove:null,cropend:null,crop:null,zoom:null},V=Number.isNaN||h.isNaN;function F(t){return"number"==typeof t&&!V(t)}var J=function(t){return 0<t&&t<1/0};function _(t){return void 0===t}function tt(t){return"object"===i(t)&&null!==t}var et=Object.prototype.hasOwnProperty;function it(t){if(!tt(t))return!1;try{var e=t.constructor,i=e.prototype;return e&&i&&et.call(i,"isPrototypeOf")}catch(t){return!1}}function at(t){return"function"==typeof t}var nt=Array.prototype.slice;function ot(t){return Array.from?Array.from(t):nt.call(t)}function ht(i,a){return i&&at(a)&&(Array.isArray(i)||F(i.length)?ot(i).forEach(function(t,e){a.call(i,t,e,i)}):tt(i)&&Object.keys(i).forEach(function(t){a.call(i,i[t],t,i)})),i}var rt=Object.assign||function(i){for(var t=arguments.length,e=new Array(1<t?t-1:0),a=1;a<t;a++)e[a-1]=arguments[a];return tt(i)&&0<e.length&&e.forEach(function(e){tt(e)&&Object.keys(e).forEach(function(t){i[t]=e[t]})}),i},st=/\.\d*(?:0|9){12}\d*$/;function ct(t,e){e=1<arguments.length&&void 0!==e?e:1e11;return st.test(t)?Math.round(t*e)/e:t}var dt=/^width|height|left|top|marginLeft|marginTop$/;function lt(t,e){var i=t.style;ht(e,function(t,e){dt.test(e)&&F(t)&&(t="".concat(t,"px")),i[e]=t})}function pt(t,e){var i;e&&(F(t.length)?ht(t,function(t){pt(t,e)}):t.classList?t.classList.add(e):(i=t.className.trim())?i.indexOf(e)<0&&(t.className="".concat(i," ").concat(e)):t.className=e)}function mt(t,e){e&&(F(t.length)?ht(t,function(t){mt(t,e)}):t.classList?t.classList.remove(e):0<=t.className.indexOf(e)&&(t.className=t.className.replace(e,"")))}function ut(t,e,i){e&&(F(t.length)?ht(t,function(t){ut(t,e,i)}):(i?pt:mt)(t,e))}var gt=/([a-z\d])([A-Z])/g;function ft(t){return t.replace(gt,"$1-$2").toLowerCase()}function vt(t,e){return tt(t[e])?t[e]:t.dataset?t.dataset[e]:t.getAttribute("data-".concat(ft(e)))}function wt(t,e,i){tt(i)?t[e]=i:t.dataset?t.dataset[e]=i:t.setAttribute("data-".concat(ft(e)),i)}var bt,yt,xt=/\s\s*/,Mt=(yt=!1,t&&(bt=!1,At=function(){},It=Object.defineProperty({},"once",{get:function(){return yt=!0,bt},set:function(t){bt=t}}),h.addEventListener("test",At,It),h.removeEventListener("test",At,It)),yt);function Ct(i,t,a,e){var n=3<arguments.length&&void 0!==e?e:{},o=a;t.trim().split(xt).forEach(function(t){var e;Mt||(e=i.listeners)&&e[t]&&e[t][a]&&(o=e[t][a],delete e[t][a],0===Object.keys(e[t]).length&&delete e[t],0===Object.keys(e).length&&delete i.listeners),i.removeEventListener(t,o,n)})}function Dt(o,t,h,e){var r=3<arguments.length&&void 0!==e?e:{},s=h;t.trim().split(xt).forEach(function(a){var t,n;r.once&&!Mt&&(t=o.listeners,s=function(){delete n[a][h],o.removeEventListener(a,s,r);for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];h.apply(o,e)},(n=void 0===t?{}:t)[a]||(n[a]={}),n[a][h]&&o.removeEventListener(a,n[a][h],r),n[a][h]=s,o.listeners=n),o.addEventListener(a,s,r)})}function Bt(t,e,i){var a;return at(Event)&&at(CustomEvent)?a=new CustomEvent(e,{detail:i,bubbles:!0,cancelable:!0}):(a=document.createEvent("CustomEvent")).initCustomEvent(e,!0,!0,i),t.dispatchEvent(a)}function kt(t){t=t.getBoundingClientRect();return{left:t.left+(window.pageXOffset-document.documentElement.clientLeft),top:t.top+(window.pageYOffset-document.documentElement.clientTop)}}var Ot=h.location,Tt=/^(\w+:)\/\/([^:/?#]*):?(\d*)/i;function Et(t){t=t.match(Tt);return null!==t&&(t[1]!==Ot.protocol||t[2]!==Ot.hostname||t[3]!==Ot.port)}function Wt(t){var e="timestamp=".concat((new Date).getTime());return t+(-1===t.indexOf("?")?"?":"&")+e}function Ht(t){var e=t.rotate,i=t.scaleX,a=t.scaleY,n=t.translateX,o=t.translateY,t=[];F(n)&&0!==n&&t.push("translateX(".concat(n,"px)")),F(o)&&0!==o&&t.push("translateY(".concat(o,"px)")),F(e)&&0!==e&&t.push("rotate(".concat(e,"deg)")),F(i)&&1!==i&&t.push("scaleX(".concat(i,")")),F(a)&&1!==a&&t.push("scaleY(".concat(a,")"));t=t.length?t.join(" "):"none";return{WebkitTransform:t,msTransform:t,transform:t}}function Nt(t,e){var i=t.pageX,a=t.pageY,t={endX:i,endY:a};return e?t:B({startX:i,startY:a},t)}function Lt(t,e){var i=t.aspectRatio,a=t.height,n=t.width,o=1<arguments.length&&void 0!==e?e:"contain",h=J(n),t=J(a);return h&&t?(e=a*i,"contain"===o&&n<e||"cover"===o&&e<n?a=n/i:n=a*i):h?a=n/i:t&&(n=a*i),{width:n,height:a}}var zt=String.fromCharCode;var Yt=/^data:.*,/;function Xt(t){var e,i,a,n,o,h,r,s=new DataView(t);try{if(255===s.getUint8(0)&&216===s.getUint8(1))for(var c=s.byteLength,d=2;d+1<c;){if(255===s.getUint8(d)&&225===s.getUint8(d+1)){i=d;break}d+=1}if(i&&(n=i+10,"Exif"===function(t,e,i){var a="";i+=e;for(var n=e;n<i;n+=1)a+=zt(t.getUint8(n));return a}(s,i+4,4)&&(!(r=18761===(o=s.getUint16(n)))&&19789!==o||42!==s.getUint16(n+2,r)||8<=(h=s.getUint32(n+4,r))&&(a=n+h))),a)for(var l,p=s.getUint16(a,r),m=0;m<p;m+=1)if(l=a+12*m+2,274===s.getUint16(l,r)){l+=8,e=s.getUint16(l,r),s.setUint16(l,1,r);break}}catch(t){e=1}return e}var Rt={render:function(){this.initContainer(),this.initCanvas(),this.initCropBox(),this.renderCanvas(),this.cropped&&this.renderCropBox()},initContainer:function(){var t=this.element,e=this.options,i=this.container,a=this.cropper,n=Number(e.minContainerWidth),e=Number(e.minContainerHeight);pt(a,A),mt(t,A);e={width:Math.max(i.offsetWidth,0<=n?n:200),height:Math.max(i.offsetHeight,0<=e?e:100)};lt(a,{width:(this.containerData=e).width,height:e.height}),pt(t,A),mt(a,A)},initCanvas:function(){var t=this.containerData,e=this.imageData,i=this.options.viewMode,a=Math.abs(e.rotate)%180==90,n=a?e.naturalHeight:e.naturalWidth,o=a?e.naturalWidth:e.naturalHeight,h=n/o,a=t.width,e=t.height;t.height*h>t.width?3===i?a=t.height*h:e=t.width/h:3===i?e=t.width/h:a=t.height*h;e={aspectRatio:h,naturalWidth:n,naturalHeight:o,width:a,height:e};this.canvasData=e,this.limited=1===i||2===i,this.limitCanvas(!0,!0),e.width=Math.min(Math.max(e.width,e.minWidth),e.maxWidth),e.height=Math.min(Math.max(e.height,e.minHeight),e.maxHeight),e.left=(t.width-e.width)/2,e.top=(t.height-e.height)/2,e.oldLeft=e.left,e.oldTop=e.top,this.initialCanvasData=rt({},e)},limitCanvas:function(t,e){var i,a=this.options,n=this.containerData,o=this.canvasData,h=this.cropBoxData,r=a.viewMode,s=o.aspectRatio,c=this.cropped&&h;t&&(t=Number(a.minCanvasWidth)||0,i=Number(a.minCanvasHeight)||0,1<r?(t=Math.max(t,n.width),i=Math.max(i,n.height),3===r&&(t<i*s?t=i*s:i=t/s)):0<r&&(t?t=Math.max(t,c?h.width:0):i?i=Math.max(i,c?h.height:0):c&&((t=h.width)<(i=h.height)*s?t=i*s:i=t/s)),t=(s=Lt({aspectRatio:s,width:t,height:i})).width,i=s.height,o.minWidth=t,o.minHeight=i,o.maxWidth=1/0,o.maxHeight=1/0),e&&((c?0:1)<r?(i=n.width-o.width,e=n.height-o.height,o.minLeft=Math.min(0,i),o.minTop=Math.min(0,e),o.maxLeft=Math.max(0,i),o.maxTop=Math.max(0,e),c&&this.limited&&(o.minLeft=Math.min(h.left,h.left+(h.width-o.width)),o.minTop=Math.min(h.top,h.top+(h.height-o.height)),o.maxLeft=h.left,o.maxTop=h.top,2===r&&(o.width>=n.width&&(o.minLeft=Math.min(0,i),o.maxLeft=Math.max(0,i)),o.height>=n.height&&(o.minTop=Math.min(0,e),o.maxTop=Math.max(0,e))))):(o.minLeft=-o.width,o.minTop=-o.height,o.maxLeft=n.width,o.maxTop=n.height))},renderCanvas:function(t,e){var i,a,n=this.canvasData,o=this.imageData;e&&(i=(a=function(t){var e=t.width,i=t.height,a=t.degree;if(90==(a=Math.abs(a)%180))return{width:i,height:e};var n=a%90*Math.PI/180,o=Math.sin(n),t=Math.cos(n),n=e*t+i*o,t=e*o+i*t;return 90<a?{width:t,height:n}:{width:n,height:t}}({width:o.naturalWidth*Math.abs(o.scaleX||1),height:o.naturalHeight*Math.abs(o.scaleY||1),degree:o.rotate||0})).width,e=a.height,o=n.width*(i/n.naturalWidth),a=n.height*(e/n.naturalHeight),n.left-=(o-n.width)/2,n.top-=(a-n.height)/2,n.width=o,n.height=a,n.aspectRatio=i/e,n.naturalWidth=i,n.naturalHeight=e,this.limitCanvas(!0,!1)),(n.width>n.maxWidth||n.width<n.minWidth)&&(n.left=n.oldLeft),(n.height>n.maxHeight||n.height<n.minHeight)&&(n.top=n.oldTop),n.width=Math.min(Math.max(n.width,n.minWidth),n.maxWidth),n.height=Math.min(Math.max(n.height,n.minHeight),n.maxHeight),this.limitCanvas(!1,!0),n.left=Math.min(Math.max(n.left,n.minLeft),n.maxLeft),n.top=Math.min(Math.max(n.top,n.minTop),n.maxTop),n.oldLeft=n.left,n.oldTop=n.top,lt(this.canvas,rt({width:n.width,height:n.height},Ht({translateX:n.left,translateY:n.top}))),this.renderImage(t),this.cropped&&this.limited&&this.limitCropBox(!0,!0)},renderImage:function(t){var e=this.canvasData,i=this.imageData,a=i.naturalWidth*(e.width/e.naturalWidth),n=i.naturalHeight*(e.height/e.naturalHeight);rt(i,{width:a,height:n,left:(e.width-a)/2,top:(e.height-n)/2}),lt(this.image,rt({width:i.width,height:i.height},Ht(rt({translateX:i.left,translateY:i.top},i)))),t&&this.output()},initCropBox:function(){var t=this.options,e=this.canvasData,i=t.aspectRatio||t.initialAspectRatio,a=Number(t.autoCropArea)||.8,t={width:e.width,height:e.height};i&&(e.height*i>e.width?t.height=t.width/i:t.width=t.height*i),this.cropBoxData=t,this.limitCropBox(!0,!0),t.width=Math.min(Math.max(t.width,t.minWidth),t.maxWidth),t.height=Math.min(Math.max(t.height,t.minHeight),t.maxHeight),t.width=Math.max(t.minWidth,t.width*a),t.height=Math.max(t.minHeight,t.height*a),t.left=e.left+(e.width-t.width)/2,t.top=e.top+(e.height-t.height)/2,t.oldLeft=t.left,t.oldTop=t.top,this.initialCropBoxData=rt({},t)},limitCropBox:function(t,e){var i,a,n=this.options,o=this.containerData,h=this.canvasData,r=this.cropBoxData,s=this.limited,c=n.aspectRatio;t&&(i=Number(n.minCropBoxWidth)||0,a=Number(n.minCropBoxHeight)||0,t=s?Math.min(o.width,h.width,h.width+h.left,o.width-h.left):o.width,n=s?Math.min(o.height,h.height,h.height+h.top,o.height-h.top):o.height,i=Math.min(i,o.width),a=Math.min(a,o.height),c&&(i&&a?i<a*c?a=i/c:i=a*c:i?a=i/c:a&&(i=a*c),t<n*c?n=t/c:t=n*c),r.minWidth=Math.min(i,t),r.minHeight=Math.min(a,n),r.maxWidth=t,r.maxHeight=n),e&&(s?(r.minLeft=Math.max(0,h.left),r.minTop=Math.max(0,h.top),r.maxLeft=Math.min(o.width,h.left+h.width)-r.width,r.maxTop=Math.min(o.height,h.top+h.height)-r.height):(r.minLeft=0,r.minTop=0,r.maxLeft=o.width-r.width,r.maxTop=o.height-r.height))},renderCropBox:function(){var t=this.options,e=this.containerData,i=this.cropBoxData;(i.width>i.maxWidth||i.width<i.minWidth)&&(i.left=i.oldLeft),(i.height>i.maxHeight||i.height<i.minHeight)&&(i.top=i.oldTop),i.width=Math.min(Math.max(i.width,i.minWidth),i.maxWidth),i.height=Math.min(Math.max(i.height,i.minHeight),i.maxHeight),this.limitCropBox(!1,!0),i.left=Math.min(Math.max(i.left,i.minLeft),i.maxLeft),i.top=Math.min(Math.max(i.top,i.minTop),i.maxTop),i.oldLeft=i.left,i.oldTop=i.top,t.movable&&t.cropBoxMovable&&wt(this.face,g,i.width>=e.width&&i.height>=e.height?E:k),lt(this.cropBox,rt({width:i.width,height:i.height},Ht({translateX:i.left,translateY:i.top}))),this.cropped&&this.limited&&this.limitCanvas(!0,!0),this.disabled||this.output()},output:function(){this.preview(),Bt(this.element,y,this.getData())}},St={initPreview:function(){var t=this.element,i=this.crossOrigin,e=this.options.preview,a=i?this.crossOriginUrl:this.url,n=t.alt||"The image to preview",o=document.createElement("img");i&&(o.crossOrigin=i),o.src=a,o.alt=n,this.viewBox.appendChild(o),this.viewBoxImage=o,e&&("string"==typeof(o=e)?o=t.ownerDocument.querySelectorAll(e):e.querySelector&&(o=[e]),ht(this.previews=o,function(t){var e=document.createElement("img");wt(t,f,{width:t.offsetWidth,height:t.offsetHeight,html:t.innerHTML}),i&&(e.crossOrigin=i),e.src=a,e.alt=n,e.style.cssText='display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"',t.innerHTML="",t.appendChild(e)}))},resetPreview:function(){ht(this.previews,function(t){var e=vt(t,f);lt(t,{width:e.width,height:e.height}),t.innerHTML=e.html,function(e,i){if(tt(e[i]))try{delete e[i]}catch(t){e[i]=void 0}else if(e.dataset)try{delete e.dataset[i]}catch(t){e.dataset[i]=void 0}else e.removeAttribute("data-".concat(ft(i)))}(t,f)})},preview:function(){var h=this.imageData,t=this.canvasData,e=this.cropBoxData,r=e.width,s=e.height,c=h.width,d=h.height,l=e.left-t.left-h.left,p=e.top-t.top-h.top;this.cropped&&!this.disabled&&(lt(this.viewBoxImage,rt({width:c,height:d},Ht(rt({translateX:-l,translateY:-p},h)))),ht(this.previews,function(t){var e=vt(t,f),i=e.width,a=e.height,n=i,o=a,e=1;r&&(o=s*(e=i/r)),s&&a<o&&(n=r*(e=a/s),o=a),lt(t,{width:n,height:o}),lt(t.getElementsByTagName("img")[0],rt({width:c*e,height:d*e},Ht(rt({translateX:-l*e,translateY:-p*e},h))))}))}},r={bind:function(){var t=this.element,e=this.options,i=this.cropper;at(e.cropstart)&&Dt(t,C,e.cropstart),at(e.cropmove)&&Dt(t,M,e.cropmove),at(e.cropend)&&Dt(t,x,e.cropend),at(e.crop)&&Dt(t,y,e.crop),at(e.zoom)&&Dt(t,U,e.zoom),Dt(i,j,this.onCropStart=this.cropStart.bind(this)),e.zoomable&&e.zoomOnWheel&&Dt(i,"wheel",this.onWheel=this.wheel.bind(this),{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&Dt(i,D,this.onDblclick=this.dblclick.bind(this)),Dt(t.ownerDocument,I,this.onCropMove=this.cropMove.bind(this)),Dt(t.ownerDocument,P,this.onCropEnd=this.cropEnd.bind(this)),e.responsive&&Dt(window,"resize",this.onResize=this.resize.bind(this))},unbind:function(){var t=this.element,e=this.options,i=this.cropper;at(e.cropstart)&&Ct(t,C,e.cropstart),at(e.cropmove)&&Ct(t,M,e.cropmove),at(e.cropend)&&Ct(t,x,e.cropend),at(e.crop)&&Ct(t,y,e.crop),at(e.zoom)&&Ct(t,U,e.zoom),Ct(i,j,this.onCropStart),e.zoomable&&e.zoomOnWheel&&Ct(i,"wheel",this.onWheel,{passive:!1,capture:!0}),e.toggleDragModeOnDblclick&&Ct(i,D,this.onDblclick),Ct(t.ownerDocument,I,this.onCropMove),Ct(t.ownerDocument,P,this.onCropEnd),e.responsive&&Ct(window,"resize",this.onResize)}},o={resize:function(){var t,e,i,a,n,o,h;this.disabled||(t=this.options,e=this.container,a=this.containerData,i=e.offsetWidth/a.width,a=e.offsetHeight/a.height,1!=(n=Math.abs(i-1)>Math.abs(a-1)?i:a)&&(t.restore&&(o=this.getCanvasData(),h=this.getCropBoxData()),this.render(),t.restore&&(this.setCanvasData(ht(o,function(t,e){o[e]=t*n})),this.setCropBoxData(ht(h,function(t,e){h[e]=t*n})))))},dblclick:function(){var t,e;this.disabled||this.options.dragMode===b||this.setDragMode((t=this.dragBox,e=s,(t.classList?t.classList.contains(e):-1<t.className.indexOf(e))?w:v))},wheel:function(t){var e=this,i=Number(this.options.wheelZoomRatio)||.1,a=1;this.disabled||(t.preventDefault(),this.wheeling||(this.wheeling=!0,setTimeout(function(){e.wheeling=!1},50),t.deltaY?a=0<t.deltaY?1:-1:t.wheelDelta?a=-t.wheelDelta/120:t.detail&&(a=0<t.detail?1:-1),this.zoom(-a*i,t)))},cropStart:function(t){var e,i=t.buttons,a=t.button;this.disabled||("mousedown"===t.type||"pointerdown"===t.type&&"mouse"===t.pointerType)&&(F(i)&&1!==i||F(a)&&0!==a||t.ctrlKey)||(a=this.options,e=this.pointers,t.changedTouches?ht(t.changedTouches,function(t){e[t.identifier]=Nt(t)}):e[t.pointerId||0]=Nt(t),a=1<Object.keys(e).length&&a.zoomable&&a.zoomOnTouch?W:vt(t.target,g),$.test(a)&&!1!==Bt(this.element,C,{originalEvent:t,action:a})&&(t.preventDefault(),this.action=a,this.cropping=!1,a===O&&(this.cropping=!0,pt(this.dragBox,m))))},cropMove:function(t){var e,i=this.action;!this.disabled&&i&&(e=this.pointers,t.preventDefault(),!1!==Bt(this.element,M,{originalEvent:t,action:i})&&(t.changedTouches?ht(t.changedTouches,function(t){rt(e[t.identifier]||{},Nt(t,!0))}):rt(e[t.pointerId||0]||{},Nt(t,!0)),this.change(t)))},cropEnd:function(t){var e,i;this.disabled||(e=this.action,i=this.pointers,t.changedTouches?ht(t.changedTouches,function(t){delete i[t.identifier]}):delete i[t.pointerId||0],e&&(t.preventDefault(),Object.keys(i).length||(this.action=""),this.cropping&&(this.cropping=!1,ut(this.dragBox,m,this.cropped&&this.options.modal)),Bt(this.element,x,{originalEvent:t,action:e})))}},t={change:function(t){var e=this.options,i=this.canvasData,a=this.containerData,n=this.cropBoxData,o=this.pointers,h=this.action,r=e.aspectRatio,s=n.left,c=n.top,d=n.width,l=n.height,p=s+d,m=c+l,u=0,g=0,f=a.width,v=a.height,w=!0;!r&&t.shiftKey&&(r=d&&l?d/l:1),this.limited&&(u=n.minLeft,g=n.minTop,f=u+Math.min(a.width,i.width,i.left+i.width),v=g+Math.min(a.height,i.height,i.top+i.height));function b(t){switch(t){case H:p+D.x>f&&(D.x=f-p);break;case N:s+D.x<u&&(D.x=u-s);break;case z:c+D.y<g&&(D.y=g-c);break;case L:m+D.y>v&&(D.y=v-m)}}var y,x,M,C=o[Object.keys(o)[0]],D={x:C.endX-C.startX,y:C.endY-C.startY};switch(h){case k:s+=D.x,c+=D.y;break;case H:if(0<=D.x&&(f<=p||r&&(c<=g||v<=m))){w=!1;break}b(H),(d+=D.x)<0&&(h=N,s-=d=-d),r&&(c+=(n.height-(l=d/r))/2);break;case z:if(D.y<=0&&(c<=g||r&&(s<=u||f<=p))){w=!1;break}b(z),l-=D.y,c+=D.y,l<0&&(h=L,c-=l=-l),r&&(s+=(n.width-(d=l*r))/2);break;case N:if(D.x<=0&&(s<=u||r&&(c<=g||v<=m))){w=!1;break}b(N),d-=D.x,s+=D.x,d<0&&(h=H,s-=d=-d),r&&(c+=(n.height-(l=d/r))/2);break;case L:if(0<=D.y&&(v<=m||r&&(s<=u||f<=p))){w=!1;break}b(L),(l+=D.y)<0&&(h=z,c-=l=-l),r&&(s+=(n.width-(d=l*r))/2);break;case Y:if(r){if(D.y<=0&&(c<=g||f<=p)){w=!1;break}b(z),l-=D.y,c+=D.y,d=l*r}else b(z),b(H),!(0<=D.x)||p<f?d+=D.x:D.y<=0&&c<=g&&(w=!1),D.y<=0&&!(g<c)||(l-=D.y,c+=D.y);d<0&&l<0?(h=S,c-=l=-l,s-=d=-d):d<0?(h=X,s-=d=-d):l<0&&(h=R,c-=l=-l);break;case X:if(r){if(D.y<=0&&(c<=g||s<=u)){w=!1;break}b(z),l-=D.y,c+=D.y,s+=n.width-(d=l*r)}else b(z),b(N),!(D.x<=0)||u<s?(d-=D.x,s+=D.x):D.y<=0&&c<=g&&(w=!1),D.y<=0&&!(g<c)||(l-=D.y,c+=D.y);d<0&&l<0?(h=R,c-=l=-l,s-=d=-d):d<0?(h=Y,s-=d=-d):l<0&&(h=S,c-=l=-l);break;case S:if(r){if(D.x<=0&&(s<=u||v<=m)){w=!1;break}b(N),d-=D.x,s+=D.x,l=d/r}else b(L),b(N),!(D.x<=0)||u<s?(d-=D.x,s+=D.x):0<=D.y&&v<=m&&(w=!1),0<=D.y&&!(m<v)||(l+=D.y);d<0&&l<0?(h=Y,c-=l=-l,s-=d=-d):d<0?(h=R,s-=d=-d):l<0&&(h=X,c-=l=-l);break;case R:if(r){if(0<=D.x&&(f<=p||v<=m)){w=!1;break}b(H),l=(d+=D.x)/r}else b(L),b(H),!(0<=D.x)||p<f?d+=D.x:0<=D.y&&v<=m&&(w=!1),0<=D.y&&!(m<v)||(l+=D.y);d<0&&l<0?(h=X,c-=l=-l,s-=d=-d):d<0?(h=S,s-=d=-d):l<0&&(h=Y,c-=l=-l);break;case E:this.move(D.x,D.y),w=!1;break;case W:this.zoom((x=B({},y=o),M=0,ht(y,function(n,t){delete x[t],ht(x,function(t){var e=Math.abs(n.startX-t.startX),i=Math.abs(n.startY-t.startY),a=Math.abs(n.endX-t.endX),t=Math.abs(n.endY-t.endY),i=Math.sqrt(e*e+i*i),i=(Math.sqrt(a*a+t*t)-i)/i;Math.abs(i)>Math.abs(M)&&(M=i)})}),M),t),w=!1;break;case O:if(!D.x||!D.y){w=!1;break}y=kt(this.cropper),s=C.startX-y.left,c=C.startY-y.top,d=n.minWidth,l=n.minHeight,0<D.x?h=0<D.y?R:Y:D.x<0&&(s-=d,h=0<D.y?S:X),D.y<0&&(c-=l),this.cropped||(mt(this.cropBox,A),this.cropped=!0,this.limited&&this.limitCropBox(!0,!0))}w&&(n.width=d,n.height=l,n.left=s,n.top=c,this.action=h,this.renderCropBox()),ht(o,function(t){t.startX=t.endX,t.startY=t.endY})}},At={crop:function(){return!this.ready||this.cropped||this.disabled||(this.cropped=!0,this.limitCropBox(!0,!0),this.options.modal&&pt(this.dragBox,m),mt(this.cropBox,A),this.setCropBoxData(this.initialCropBoxData)),this},reset:function(){return this.ready&&!this.disabled&&(this.imageData=rt({},this.initialImageData),this.canvasData=rt({},this.initialCanvasData),this.cropBoxData=rt({},this.initialCropBoxData),this.renderCanvas(),this.cropped&&this.renderCropBox()),this},clear:function(){return this.cropped&&!this.disabled&&(rt(this.cropBoxData,{left:0,top:0,width:0,height:0}),this.cropped=!1,this.renderCropBox(),this.limitCanvas(!0,!0),this.renderCanvas(),mt(this.dragBox,m),pt(this.cropBox,A)),this},replace:function(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1];return!this.disabled&&e&&(this.isImg&&(this.element.src=e),t?(this.url=e,this.image.src=e,this.ready&&(this.viewBoxImage.src=e,ht(this.previews,function(t){t.getElementsByTagName("img")[0].src=e}))):(this.isImg&&(this.replaced=!0),this.options.data=null,this.uncreate(),this.load(e))),this},enable:function(){return this.ready&&this.disabled&&(this.disabled=!1,mt(this.cropper,d)),this},disable:function(){return this.ready&&!this.disabled&&(this.disabled=!0,pt(this.cropper,d)),this},destroy:function(){var t=this.element;return t[c]&&(t[c]=void 0,this.isImg&&this.replaced&&(t.src=this.originalUrl),this.uncreate()),this},move:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:t,i=this.canvasData,a=i.left,i=i.top;return this.moveTo(_(t)?t:a+Number(t),_(e)?e:i+Number(e))},moveTo:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:t,i=this.canvasData,a=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.movable&&(F(t)&&(i.left=t,a=!0),F(e)&&(i.top=e,a=!0),a&&this.renderCanvas(!0)),this},zoom:function(t,e){var i=this.canvasData;return t=Number(t),this.zoomTo(i.width*(t=t<0?1/(1-t):1+t)/i.naturalWidth,null,e)},zoomTo:function(t,e,i){var a,n,o,h=this.options,r=this.canvasData,s=r.width,c=r.height,d=r.naturalWidth,l=r.naturalHeight;if(0<=(t=Number(t))&&this.ready&&!this.disabled&&h.zoomable){h=d*t,l=l*t;if(!1===Bt(this.element,U,{ratio:t,oldRatio:s/d,originalEvent:i}))return this;i?(t=this.pointers,d=kt(this.cropper),i=t&&Object.keys(t).length?(o=n=a=0,ht(t,function(t){var e=t.startX,t=t.startY;a+=e,n+=t,o+=1}),{pageX:a/=o,pageY:n/=o}):{pageX:i.pageX,pageY:i.pageY},r.left-=(h-s)*((i.pageX-d.left-r.left)/s),r.top-=(l-c)*((i.pageY-d.top-r.top)/c)):it(e)&&F(e.x)&&F(e.y)?(r.left-=(h-s)*((e.x-r.left)/s),r.top-=(l-c)*((e.y-r.top)/c)):(r.left-=(h-s)/2,r.top-=(l-c)/2),r.width=h,r.height=l,this.renderCanvas(!0)}return this},rotate:function(t){return this.rotateTo((this.imageData.rotate||0)+Number(t))},rotateTo:function(t){return F(t=Number(t))&&this.ready&&!this.disabled&&this.options.rotatable&&(this.imageData.rotate=t%360,this.renderCanvas(!0,!0)),this},scaleX:function(t){var e=this.imageData.scaleY;return this.scale(t,F(e)?e:1)},scaleY:function(t){var e=this.imageData.scaleX;return this.scale(F(e)?e:1,t)},scale:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:t,i=this.imageData,a=!1;return t=Number(t),e=Number(e),this.ready&&!this.disabled&&this.options.scalable&&(F(t)&&(i.scaleX=t,a=!0),F(e)&&(i.scaleY=e,a=!0),a&&this.renderCanvas(!0,!0)),this},getData:function(){var i,a,t=0<arguments.length&&void 0!==arguments[0]&&arguments[0],e=this.options,n=this.imageData,o=this.canvasData,h=this.cropBoxData;return this.ready&&this.cropped?(i={x:h.left-o.left,y:h.top-o.top,width:h.width,height:h.height},a=n.width/n.naturalWidth,ht(i,function(t,e){i[e]=t/a}),t&&(h=Math.round(i.y+i.height),t=Math.round(i.x+i.width),i.x=Math.round(i.x),i.y=Math.round(i.y),i.width=t-i.x,i.height=h-i.y)):i={x:0,y:0,width:0,height:0},e.rotatable&&(i.rotate=n.rotate||0),e.scalable&&(i.scaleX=n.scaleX||1,i.scaleY=n.scaleY||1),i},setData:function(t){var e,i=this.options,a=this.imageData,n=this.canvasData,o={};return this.ready&&!this.disabled&&it(t)&&(e=!1,i.rotatable&&F(t.rotate)&&t.rotate!==a.rotate&&(a.rotate=t.rotate,e=!0),i.scalable&&(F(t.scaleX)&&t.scaleX!==a.scaleX&&(a.scaleX=t.scaleX,e=!0),F(t.scaleY)&&t.scaleY!==a.scaleY&&(a.scaleY=t.scaleY,e=!0)),e&&this.renderCanvas(!0,!0),a=a.width/a.naturalWidth,F(t.x)&&(o.left=t.x*a+n.left),F(t.y)&&(o.top=t.y*a+n.top),F(t.width)&&(o.width=t.width*a),F(t.height)&&(o.height=t.height*a),this.setCropBoxData(o)),this},getContainerData:function(){return this.ready?rt({},this.containerData):{}},getImageData:function(){return this.sized?rt({},this.imageData):{}},getCanvasData:function(){var e=this.canvasData,i={};return this.ready&&ht(["left","top","width","height","naturalWidth","naturalHeight"],function(t){i[t]=e[t]}),i},setCanvasData:function(t){var e=this.canvasData,i=e.aspectRatio;return this.ready&&!this.disabled&&it(t)&&(F(t.left)&&(e.left=t.left),F(t.top)&&(e.top=t.top),F(t.width)?(e.width=t.width,e.height=t.width/i):F(t.height)&&(e.height=t.height,e.width=t.height*i),this.renderCanvas(!0)),this},getCropBoxData:function(){var t,e=this.cropBoxData;return(t=this.ready&&this.cropped?{left:e.left,top:e.top,width:e.width,height:e.height}:t)||{}},setCropBoxData:function(t){var e,i,a=this.cropBoxData,n=this.options.aspectRatio;return this.ready&&this.cropped&&!this.disabled&&it(t)&&(F(t.left)&&(a.left=t.left),F(t.top)&&(a.top=t.top),F(t.width)&&t.width!==a.width&&(e=!0,a.width=t.width),F(t.height)&&t.height!==a.height&&(i=!0,a.height=t.height),n&&(e?a.height=a.width/n:i&&(a.width=a.height*n)),this.renderCropBox()),this},getCroppedCanvas:function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(!this.ready||!window.HTMLCanvasElement)return null;var e,i,a,n,o,h,r,s,c,d,l,p,m,u=this.canvasData,h=(w=this.image,e=this.imageData,i=u,y=t,a=e.aspectRatio,n=e.naturalWidth,b=e.naturalHeight,o=void 0===(m=e.rotate)?0:m,h=void 0===(v=e.scaleX)?1:v,g=void 0===(l=e.scaleY)?1:l,r=i.aspectRatio,s=i.naturalWidth,c=i.naturalHeight,d=void 0===(p=y.fillColor)?"transparent":p,x=y.imageSmoothingEnabled,f=void 0===x||x,v=void 0===(m=y.imageSmoothingQuality)?"low":m,l=void 0===(e=y.maxWidth)?1/0:e,p=void 0===(i=y.maxHeight)?1/0:i,m=void 0===(x=y.minWidth)?0:x,i=void 0===(e=y.minHeight)?0:e,y=(x=document.createElement("canvas")).getContext("2d"),e=Lt({aspectRatio:r,width:l,height:p}),r=Lt({aspectRatio:r,width:m,height:i},"cover"),s=Math.min(e.width,Math.max(r.width,s)),c=Math.min(e.height,Math.max(r.height,c)),p=Lt({aspectRatio:a,width:l,height:p}),i=Lt({aspectRatio:a,width:m,height:i},"cover"),n=Math.min(p.width,Math.max(i.width,n)),b=Math.min(p.height,Math.max(i.height,b)),b=[-n/2,-b/2,n,b],x.width=ct(s),x.height=ct(c),y.fillStyle=d,y.fillRect(0,0,s,c),y.save(),y.translate(s/2,c/2),y.rotate(o*Math.PI/180),y.scale(h,g),y.imageSmoothingEnabled=f,y.imageSmoothingQuality=v,y.drawImage.apply(y,[w].concat(T(b.map(function(t){return Math.floor(ct(t))})))),y.restore(),x);if(!this.cropped)return h;var g=this.getData(),f=g.x,v=g.y,w=g.width,b=g.height,y=h.width/Math.floor(u.naturalWidth);1!=y&&(f*=y,v*=y,w*=y,b*=y);var x=w/b,g=Lt({aspectRatio:x,width:t.maxWidth||1/0,height:t.maxHeight||1/0}),u=Lt({aspectRatio:x,width:t.minWidth||0,height:t.minHeight||0},"cover"),x=Lt({aspectRatio:x,width:t.width||(1!=y?h.width:w),height:t.height||(1!=y?h.height:b)}),y=x.width,x=x.height,y=Math.min(g.width,Math.max(u.width,y)),x=Math.min(g.height,Math.max(u.height,x)),g=document.createElement("canvas"),u=g.getContext("2d");g.width=ct(y),g.height=ct(x),u.fillStyle=t.fillColor||"transparent",u.fillRect(0,0,y,x);x=t.imageSmoothingEnabled,t=t.imageSmoothingQuality;u.imageSmoothingEnabled=void 0===x||x,t&&(u.imageSmoothingQuality=t);var M,C,D,B,k,x=h.width,t=h.height,f=f,v=v;f<=-w||x<f?B=C=M=f=0:f<=0?(C=-f,f=0,B=M=Math.min(x,w+f)):f<=x&&(C=0,B=M=Math.min(w,x-f)),M<=0||v<=-b||t<v?k=D=O=v=0:v<=0?(D=-v,v=0,k=O=Math.min(t,b+v)):v<=t&&(D=0,k=O=Math.min(b,t-v));var O=[f,v,M,O];return 0<B&&0<k&&O.push(C*(w=y/w),D*w,B*w,k*w),u.drawImage.apply(u,[h].concat(T(O.map(function(t){return Math.floor(ct(t))})))),g},setAspectRatio:function(t){var e=this.options;return this.disabled||_(t)||(e.aspectRatio=Math.max(0,t)||NaN,this.ready&&(this.initCropBox(),this.cropped&&this.renderCropBox())),this},setDragMode:function(t){var e,i,a=this.options,n=this.dragBox,o=this.face;return this.ready&&!this.disabled&&(i=a.movable&&t===w,a.dragMode=t=(e=t===v)||i?t:b,wt(n,g,t),ut(n,s,e),ut(n,u,i),a.cropBoxMovable||(wt(o,g,t),ut(o,s,e),ut(o,u,i))),this}},jt=h.Cropper,It=function(){function i(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),!t||!Z.test(t.tagName))throw new Error("The first argument is required and must be an <img> or <canvas> element.");this.element=t,this.options=rt({},G,it(e)&&e),this.cropped=!1,this.disabled=!1,this.pointers={},this.ready=!1,this.reloading=!1,this.replaced=!1,this.sized=!1,this.sizing=!1,this.init()}var t,e,a;return t=i,a=[{key:"noConflict",value:function(){return window.Cropper=jt,i}},{key:"setDefaults",value:function(t){rt(G,it(t)&&t)}}],(e=[{key:"init",value:function(){var t,e=this.element,i=e.tagName.toLowerCase();if(!e[c]){if(e[c]=this,"img"===i){if(this.isImg=!0,t=e.getAttribute("src")||"",!(this.originalUrl=t))return;t=e.src}else"canvas"===i&&window.HTMLCanvasElement&&(t=e.toDataURL());this.load(t)}}},{key:"load",value:function(t){var e,i,a,n,o,h,r=this;t&&(this.url=t,this.imageData={},e=this.element,(i=this.options).rotatable||i.scalable||(i.checkOrientation=!1),i.checkOrientation&&window.ArrayBuffer?Q.test(t)?K.test(t)?this.read((h=(h=t).replace(Yt,""),a=atob(h),h=new ArrayBuffer(a.length),ht(n=new Uint8Array(h),function(t,e){n[e]=a.charCodeAt(e)}),h)):this.clone():(o=new XMLHttpRequest,h=this.clone.bind(this),this.reloading=!0,(this.xhr=o).onabort=h,o.onerror=h,o.ontimeout=h,o.onprogress=function(){o.getResponseHeader("content-type")!==q&&o.abort()},o.onload=function(){r.read(o.response)},o.onloadend=function(){r.reloading=!1,r.xhr=null},i.checkCrossOrigin&&Et(t)&&e.crossOrigin&&(t=Wt(t)),o.open("GET",t,!0),o.responseType="arraybuffer",o.withCredentials="use-credentials"===e.crossOrigin,o.send()):this.clone())}},{key:"read",value:function(t){var e=this.options,i=this.imageData,a=Xt(t),n=0,o=1,h=1;1<a&&(this.url=function(t,e){for(var i=[],a=new Uint8Array(t);0<a.length;)i.push(zt.apply(null,ot(a.subarray(0,8192)))),a=a.subarray(8192);return"data:".concat(e,";base64,").concat(btoa(i.join("")))}(t,q),n=(a=function(t){var e=0,i=1,a=1;switch(t){case 2:i=-1;break;case 3:e=-180;break;case 4:a=-1;break;case 5:e=90,a=-1;break;case 6:e=90;break;case 7:e=90,i=-1;break;case 8:e=-90}return{rotate:e,scaleX:i,scaleY:a}}(a)).rotate,o=a.scaleX,h=a.scaleY),e.rotatable&&(i.rotate=n),e.scalable&&(i.scaleX=o,i.scaleY=h),this.clone()}},{key:"clone",value:function(){var t=this.element,e=this.url,i=t.crossOrigin,a=e;this.options.checkCrossOrigin&&Et(e)&&(i=i||"anonymous",a=Wt(e)),this.crossOrigin=i,this.crossOriginUrl=a;var n=document.createElement("img");i&&(n.crossOrigin=i),n.src=a||e,n.alt=t.alt||"The image to crop",(this.image=n).onload=this.start.bind(this),n.onerror=this.stop.bind(this),pt(n,l),t.parentNode.insertBefore(n,t.nextSibling)}},{key:"start",value:function(){var i=this,t=this.image;t.onload=null,t.onerror=null,this.sizing=!0;function e(t,e){rt(i.imageData,{naturalWidth:t,naturalHeight:e,aspectRatio:t/e}),i.initialImageData=rt({},i.imageData),i.sizing=!1,i.sized=!0,i.build()}var a,n,o=h.navigator&&/(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(h.navigator.userAgent);!t.naturalWidth||o?(a=document.createElement("img"),n=document.body||document.documentElement,(this.sizingImage=a).onload=function(){e(a.width,a.height),o||n.removeChild(a)},a.src=t.src,o||(a.style.cssText="left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;",n.appendChild(a))):e(t.naturalWidth,t.naturalHeight)}},{key:"stop",value:function(){var t=this.image;t.onload=null,t.onerror=null,t.parentNode.removeChild(t),this.image=null}},{key:"build",value:function(){var t,e,i,a,n,o,h,r,s;this.sized&&!this.ready&&(t=this.element,e=this.options,i=this.image,a=t.parentNode,(s=document.createElement("div")).innerHTML='<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>',o=(n=s.querySelector(".".concat(c,"-container"))).querySelector(".".concat(c,"-canvas")),h=n.querySelector(".".concat(c,"-drag-box")),s=(r=n.querySelector(".".concat(c,"-crop-box"))).querySelector(".".concat(c,"-face")),this.container=a,this.cropper=n,this.canvas=o,this.dragBox=h,this.cropBox=r,this.viewBox=n.querySelector(".".concat(c,"-view-box")),this.face=s,o.appendChild(i),pt(t,A),a.insertBefore(n,t.nextSibling),this.isImg||mt(i,l),this.initPreview(),this.bind(),e.initialAspectRatio=Math.max(0,e.initialAspectRatio)||NaN,e.aspectRatio=Math.max(0,e.aspectRatio)||NaN,e.viewMode=Math.max(0,Math.min(3,Math.round(e.viewMode)))||0,pt(r,A),e.guides||pt(r.getElementsByClassName("".concat(c,"-dashed")),A),e.center||pt(r.getElementsByClassName("".concat(c,"-center")),A),e.background&&pt(n,"".concat(c,"-bg")),e.highlight||pt(s,p),e.cropBoxMovable&&(pt(s,u),wt(s,g,k)),e.cropBoxResizable||(pt(r.getElementsByClassName("".concat(c,"-line")),A),pt(r.getElementsByClassName("".concat(c,"-point")),A)),this.render(),this.ready=!0,this.setDragMode(e.dragMode),e.autoCrop&&this.crop(),this.setData(e.data),at(e.ready)&&Dt(t,"ready",e.ready,{once:!0}),Bt(t,"ready"))}},{key:"unbuild",value:function(){this.ready&&(this.ready=!1,this.unbind(),this.resetPreview(),this.cropper.parentNode.removeChild(this.cropper),mt(this.element,A))}},{key:"uncreate",value:function(){this.ready?(this.unbuild(),this.ready=!1,this.cropped=!1):this.sizing?(this.sizingImage.onload=null,this.sizing=!1,this.sized=!1):this.reloading?(this.xhr.onabort=null,this.xhr.abort()):this.image&&this.stop()}}])&&n(t.prototype,e),a&&n(t,a),i}();return rt(It.prototype,Rt,St,r,o,t,At),It});/*! jQuery UI - v1.11.3 - 2015-03-01
* http://jqueryui.com
* Includes: core.js, widget.js, mouse.js, position.js, draggable.js, droppable.js, resizable.js, selectable.js, sortable.js, accordion.js, autocomplete.js, button.js, datepicker.js, dialog.js, menu.js, progressbar.js, selectmenu.js, slider.js, spinner.js, tabs.js, tooltip.js, effect.js, effect-blind.js, effect-bounce.js, effect-clip.js, effect-drop.js, effect-explode.js, effect-fade.js, effect-fold.js, effect-highlight.js, effect-puff.js, effect-pulsate.js, effect-scale.js, effect-shake.js, effect-size.js, effect-slide.js, effect-transfer.js
* Copyright 2015 jQuery Foundation and other contributors; Licensed MIT */

(function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)})(function(e){function t(t,s){var n,a,o,r=t.nodeName.toLowerCase();return"area"===r?(n=t.parentNode,a=n.name,t.href&&a&&"map"===n.nodeName.toLowerCase()?(o=e("img[usemap='#"+a+"']")[0],!!o&&i(o)):!1):(/^(input|select|textarea|button|object)$/.test(r)?!t.disabled:"a"===r?t.href||s:s)&&i(t)}function i(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}function s(e){for(var t,i;e.length&&e[0]!==document;){if(t=e.css("position"),("absolute"===t||"relative"===t||"fixed"===t)&&(i=parseInt(e.css("zIndex"),10),!isNaN(i)&&0!==i))return i;e=e.parent()}return 0}function n(){this._curInst=null,this._keyEvent=!1,this._disabledInputs=[],this._datepickerShowing=!1,this._inDialog=!1,this._mainDivId="ui-datepicker-div",this._inlineClass="ui-datepicker-inline",this._appendClass="ui-datepicker-append",this._triggerClass="ui-datepicker-trigger",this._dialogClass="ui-datepicker-dialog",this._disableClass="ui-datepicker-disabled",this._unselectableClass="ui-datepicker-unselectable",this._currentClass="ui-datepicker-current-day",this._dayOverClass="ui-datepicker-days-cell-over",this.regional=[],this.regional[""]={closeText:"Ok",prevText:"Anterior",nextText:"Próximo",currentText:"Hoje",monthNames:["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],monthNamesShort:["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],dayNames:["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"],dayNamesShort:["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],dayNamesMin:["D","S","T","Q","Q","S","S"],weekHeader:"Wk",dateFormat:"dd/mm/yy",firstDay:0,isRTL:!1,showMonthAfterYear:!1,yearSuffix:""},this._defaults={showOn:"focus",showAnim:"fadeIn",showOptions:{},defaultDate:null,appendText:"",buttonText:"...",buttonImage:"",buttonImageOnly:!1,hideIfNoPrevNext:!1,navigationAsDateFormat:!1,gotoCurrent:!1,changeMonth:!1,changeYear:!1,yearRange:"c-10:c+10",showOtherMonths:!1,selectOtherMonths:!1,showWeek:!1,calculateWeek:this.iso8601Week,shortYearCutoff:"+10",minDate:null,maxDate:null,duration:"fast",beforeShowDay:null,beforeShow:null,onSelect:null,onChangeMonthYear:null,onClose:null,numberOfMonths:1,showCurrentAtPos:0,stepMonths:1,stepBigMonths:12,altField:"",altFormat:"",constrainInput:!0,showButtonPanel:!1,autoSize:!1,disabled:!1},e.extend(this._defaults,this.regional[""]),this.regional.en=e.extend(!0,{},this.regional[""]),this.regional["en-US"]=e.extend(!0,{},this.regional.en),this.dpDiv=a(e("<div id='"+this._mainDivId+"' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))}function a(t){var i="button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return t.delegate(i,"mouseout",function(){e(this).removeClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).removeClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).removeClass("ui-datepicker-next-hover")}).delegate(i,"mouseover",o)}function o(){e.datepicker._isDisabledDatepicker(v.inline?v.dpDiv.parent()[0]:v.input[0])||(e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"),e(this).addClass("ui-state-hover"),-1!==this.className.indexOf("ui-datepicker-prev")&&e(this).addClass("ui-datepicker-prev-hover"),-1!==this.className.indexOf("ui-datepicker-next")&&e(this).addClass("ui-datepicker-next-hover"))}function r(t,i){e.extend(t,i);for(var s in i)null==i[s]&&(t[s]=i[s]);return t}function h(e){return function(){var t=this.element.val();e.apply(this,arguments),this._refresh(),t!==this.element.val()&&this._trigger("change")}}e.ui=e.ui||{},e.extend(e.ui,{version:"1.11.3",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({scrollParent:function(t){var i=this.css("position"),s="absolute"===i,n=t?/(auto|scroll|hidden)/:/(auto|scroll)/,a=this.parents().filter(function(){var t=e(this);return s&&"static"===t.css("position")?!1:n.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==i&&a.length?a:e(this[0].ownerDocument||document)},uniqueId:function(){var e=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,s){return!!e.data(t,s[3])},focusable:function(i){return t(i,!isNaN(e.attr(i,"tabindex")))},tabbable:function(i){var s=e.attr(i,"tabindex"),n=isNaN(s);return(n||s>=0)&&t(i,!n)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(t,i){function s(t,i,s,a){return e.each(n,function(){i-=parseFloat(e.css(t,"padding"+this))||0,s&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),a&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var n="Width"===i?["Left","Right"]:["Top","Bottom"],a=i.toLowerCase(),o={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+i]=function(t){return void 0===t?o["inner"+i].call(this):this.each(function(){e(this).css(a,s(this,t)+"px")})},e.fn["outer"+i]=function(t,n){return"number"!=typeof t?o["outer"+i].call(this,t):this.each(function(){e(this).css(a,s(this,t,!0,n)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.fn.extend({focus:function(t){return function(i,s){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),s&&s.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),disableSelection:function(){var e="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(e+".ui-disableSelection",function(e){e.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(t){if(void 0!==t)return this.css("zIndex",t);if(this.length)for(var i,s,n=e(this[0]);n.length&&n[0]!==document;){if(i=n.css("position"),("absolute"===i||"relative"===i||"fixed"===i)&&(s=parseInt(n.css("zIndex"),10),!isNaN(s)&&0!==s))return s;n=n.parent()}return 0}}),e.ui.plugin={add:function(t,i,s){var n,a=e.ui[t].prototype;for(n in s)a.plugins[n]=a.plugins[n]||[],a.plugins[n].push([i,s[n]])},call:function(e,t,i,s){var n,a=e.plugins[t];if(a&&(s||e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType))for(n=0;a.length>n;n++)e.options[a[n][0]]&&a[n][1].apply(e.element,i)}};var l=0,u=Array.prototype.slice;e.cleanData=function(t){return function(i){var s,n,a;for(a=0;null!=(n=i[a]);a++)try{s=e._data(n,"events"),s&&s.remove&&e(n).triggerHandler("remove")}catch(o){}t(i)}}(e.cleanData),e.widget=function(t,i,s){var n,a,o,r,h={},l=t.split(".")[0];return t=t.split(".")[1],n=l+"-"+t,s||(s=i,i=e.Widget),e.expr[":"][n.toLowerCase()]=function(t){return!!e.data(t,n)},e[l]=e[l]||{},a=e[l][t],o=e[l][t]=function(e,t){return this._createWidget?(arguments.length&&this._createWidget(e,t),void 0):new o(e,t)},e.extend(o,a,{version:s.version,_proto:e.extend({},s),_childConstructors:[]}),r=new i,r.options=e.widget.extend({},r.options),e.each(s,function(t,s){return e.isFunction(s)?(h[t]=function(){var e=function(){return i.prototype[t].apply(this,arguments)},n=function(e){return i.prototype[t].apply(this,e)};return function(){var t,i=this._super,a=this._superApply;return this._super=e,this._superApply=n,t=s.apply(this,arguments),this._super=i,this._superApply=a,t}}(),void 0):(h[t]=s,void 0)}),o.prototype=e.widget.extend(r,{widgetEventPrefix:a?r.widgetEventPrefix||t:t},h,{constructor:o,namespace:l,widgetName:t,widgetFullName:n}),a?(e.each(a._childConstructors,function(t,i){var s=i.prototype;e.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete a._childConstructors):i._childConstructors.push(o),e.widget.bridge(t,o),o},e.widget.extend=function(t){for(var i,s,n=u.call(arguments,1),a=0,o=n.length;o>a;a++)for(i in n[a])s=n[a][i],n[a].hasOwnProperty(i)&&void 0!==s&&(t[i]=e.isPlainObject(s)?e.isPlainObject(t[i])?e.widget.extend({},t[i],s):e.widget.extend({},s):s);return t},e.widget.bridge=function(t,i){var s=i.prototype.widgetFullName||t;e.fn[t]=function(n){var a="string"==typeof n,o=u.call(arguments,1),r=this;return a?this.each(function(){var i,a=e.data(this,s);return"instance"===n?(r=a,!1):a?e.isFunction(a[n])&&"_"!==n.charAt(0)?(i=a[n].apply(a,o),i!==a&&void 0!==i?(r=i&&i.jquery?r.pushStack(i.get()):i,!1):void 0):e.error("no such method '"+n+"' for "+t+" widget instance"):e.error("cannot call methods on "+t+" prior to initialization; "+"attempted to call method '"+n+"'")}):(o.length&&(n=e.widget.extend.apply(null,[n].concat(o))),this.each(function(){var t=e.data(this,s);t?(t.option(n||{}),t._init&&t._init()):e.data(this,s,new i(n,this))})),r}},e.Widget=function(){},e.Widget._childConstructors=[],e.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(t,i){i=e(i||this.defaultElement||this)[0],this.element=e(i),this.uuid=l++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=e(),this.hoverable=e(),this.focusable=e(),i!==this&&(e.data(i,this.widgetFullName,this),this._on(!0,this.element,{remove:function(e){e.target===i&&this.destroy()}}),this.document=e(i.style?i.ownerDocument:i.document||i),this.window=e(this.document[0].defaultView||this.document[0].parentWindow)),this.options=e.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:e.noop,_getCreateEventData:e.noop,_create:e.noop,_init:e.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:e.noop,widget:function(){return this.element},option:function(t,i){var s,n,a,o=t;if(0===arguments.length)return e.widget.extend({},this.options);if("string"==typeof t)if(o={},s=t.split("."),t=s.shift(),s.length){for(n=o[t]=e.widget.extend({},this.options[t]),a=0;s.length-1>a;a++)n[s[a]]=n[s[a]]||{},n=n[s[a]];if(t=s.pop(),1===arguments.length)return void 0===n[t]?null:n[t];n[t]=i}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=i}return this._setOptions(o),this},_setOptions:function(e){var t;for(t in e)this._setOption(t,e[t]);return this},_setOption:function(e,t){return this.options[e]=t,"disabled"===e&&(this.widget().toggleClass(this.widgetFullName+"-disabled",!!t),t&&(this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus"))),this},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_on:function(t,i,s){var n,a=this;"boolean"!=typeof t&&(s=i,i=t,t=!1),s?(i=n=e(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),e.each(s,function(s,o){function r(){return t||a.options.disabled!==!0&&!e(this).hasClass("ui-state-disabled")?("string"==typeof o?a[o]:o).apply(a,arguments):void 0}"string"!=typeof o&&(r.guid=o.guid=o.guid||r.guid||e.guid++);var h=s.match(/^([\w:-]*)\s*(.*)$/),l=h[1]+a.eventNamespace,u=h[2];u?n.delegate(u,l,r):i.bind(l,r)})},_off:function(t,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(i).undelegate(i),this.bindings=e(this.bindings.not(t).get()),this.focusable=e(this.focusable.not(t).get()),this.hoverable=e(this.hoverable.not(t).get())},_delay:function(e,t){function i(){return("string"==typeof e?s[e]:e).apply(s,arguments)}var s=this;return setTimeout(i,t||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){e(t.currentTarget).addClass("ui-state-hover")},mouseleave:function(t){e(t.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){e(t.currentTarget).addClass("ui-state-focus")},focusout:function(t){e(t.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(t,i,s){var n,a,o=this.options[t];if(s=s||{},i=e.Event(i),i.type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),i.target=this.element[0],a=i.originalEvent)for(n in a)n in i||(i[n]=a[n]);return this.element.trigger(i,s),!(e.isFunction(o)&&o.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},e.each({show:"fadeIn",hide:"fadeOut"},function(t,i){e.Widget.prototype["_"+t]=function(s,n,a){"string"==typeof n&&(n={effect:n});var o,r=n?n===!0||"number"==typeof n?i:n.effect||i:t;n=n||{},"number"==typeof n&&(n={duration:n}),o=!e.isEmptyObject(n),n.complete=a,n.delay&&s.delay(n.delay),o&&e.effects&&e.effects.effect[r]?s[t](n):r!==t&&s[r]?s[r](n.duration,n.easing,a):s.queue(function(i){e(this)[t](),a&&a.call(s[0]),i()})}}),e.widget;var d=!1;e(document).mouseup(function(){d=!1}),e.widget("ui.mouse",{version:"1.11.3",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var t=this;this.element.bind("mousedown."+this.widgetName,function(e){return t._mouseDown(e)}).bind("click."+this.widgetName,function(i){return!0===e.data(i.target,t.widgetName+".preventClickEvent")?(e.removeData(i.target,t.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!d){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var i=this,s=1===t.which,n="string"==typeof this.options.cancel&&t.target.nodeName?e(t.target).closest(this.options.cancel).length:!1;return s&&!n&&this._mouseCapture(t)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(t)!==!1,!this._mouseStarted)?(t.preventDefault(),!0):(!0===e.data(t.target,this.widgetName+".preventClickEvent")&&e.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(e){return i._mouseMove(e)},this._mouseUpDelegate=function(e){return i._mouseUp(e)},this.document.bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),d=!0,!0)):!0}},_mouseMove:function(t){if(this._mouseMoved){if(e.ui.ie&&(!document.documentMode||9>document.documentMode)&&!t.button)return this._mouseUp(t);if(!t.which)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,t)!==!1,this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){return this.document.unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&e.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),d=!1,!1},_mouseDistanceMet:function(e){return Math.max(Math.abs(this._mouseDownEvent.pageX-e.pageX),Math.abs(this._mouseDownEvent.pageY-e.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),function(){function t(e,t,i){return[parseFloat(e[0])*(p.test(e[0])?t/100:1),parseFloat(e[1])*(p.test(e[1])?i/100:1)]}function i(t,i){return parseInt(e.css(t,i),10)||0}function s(t){var i=t[0];return 9===i.nodeType?{width:t.width(),height:t.height(),offset:{top:0,left:0}}:e.isWindow(i)?{width:t.width(),height:t.height(),offset:{top:t.scrollTop(),left:t.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:t.outerWidth(),height:t.outerHeight(),offset:t.offset()}}e.ui=e.ui||{};var n,a,o=Math.max,r=Math.abs,h=Math.round,l=/left|center|right/,u=/top|center|bottom/,d=/[\+\-]\d+(\.[\d]+)?%?/,c=/^\w+/,p=/%$/,f=e.fn.position;e.position={scrollbarWidth:function(){if(void 0!==n)return n;var t,i,s=e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),a=s.children()[0];return e("body").append(s),t=a.offsetWidth,s.css("overflow","scroll"),i=a.offsetWidth,t===i&&(i=s[0].clientWidth),s.remove(),n=t-i},getScrollInfo:function(t){var i=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),s=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),n="scroll"===i||"auto"===i&&t.width<t.element[0].scrollWidth,a="scroll"===s||"auto"===s&&t.height<t.element[0].scrollHeight;return{width:a?e.position.scrollbarWidth():0,height:n?e.position.scrollbarWidth():0}},getWithinInfo:function(t){var i=e(t||window),s=e.isWindow(i[0]),n=!!i[0]&&9===i[0].nodeType;return{element:i,isWindow:s,isDocument:n,offset:i.offset()||{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:s||n?i.width():i.outerWidth(),height:s||n?i.height():i.outerHeight()}}},e.fn.position=function(n){if(!n||!n.of)return f.apply(this,arguments);n=e.extend({},n);var p,m,g,v,y,b,_=e(n.of),x=e.position.getWithinInfo(n.within),w=e.position.getScrollInfo(x),k=(n.collision||"flip").split(" "),T={};return b=s(_),_[0].preventDefault&&(n.at="left top"),m=b.width,g=b.height,v=b.offset,y=e.extend({},v),e.each(["my","at"],function(){var e,t,i=(n[this]||"").split(" ");1===i.length&&(i=l.test(i[0])?i.concat(["center"]):u.test(i[0])?["center"].concat(i):["center","center"]),i[0]=l.test(i[0])?i[0]:"center",i[1]=u.test(i[1])?i[1]:"center",e=d.exec(i[0]),t=d.exec(i[1]),T[this]=[e?e[0]:0,t?t[0]:0],n[this]=[c.exec(i[0])[0],c.exec(i[1])[0]]}),1===k.length&&(k[1]=k[0]),"right"===n.at[0]?y.left+=m:"center"===n.at[0]&&(y.left+=m/2),"bottom"===n.at[1]?y.top+=g:"center"===n.at[1]&&(y.top+=g/2),p=t(T.at,m,g),y.left+=p[0],y.top+=p[1],this.each(function(){var s,l,u=e(this),d=u.outerWidth(),c=u.outerHeight(),f=i(this,"marginLeft"),b=i(this,"marginTop"),D=d+f+i(this,"marginRight")+w.width,S=c+b+i(this,"marginBottom")+w.height,M=e.extend({},y),C=t(T.my,u.outerWidth(),u.outerHeight());"right"===n.my[0]?M.left-=d:"center"===n.my[0]&&(M.left-=d/2),"bottom"===n.my[1]?M.top-=c:"center"===n.my[1]&&(M.top-=c/2),M.left+=C[0],M.top+=C[1],a||(M.left=h(M.left),M.top=h(M.top)),s={marginLeft:f,marginTop:b},e.each(["left","top"],function(t,i){e.ui.position[k[t]]&&e.ui.position[k[t]][i](M,{targetWidth:m,targetHeight:g,elemWidth:d,elemHeight:c,collisionPosition:s,collisionWidth:D,collisionHeight:S,offset:[p[0]+C[0],p[1]+C[1]],my:n.my,at:n.at,within:x,elem:u})}),n.using&&(l=function(e){var t=v.left-M.left,i=t+m-d,s=v.top-M.top,a=s+g-c,h={target:{element:_,left:v.left,top:v.top,width:m,height:g},element:{element:u,left:M.left,top:M.top,width:d,height:c},horizontal:0>i?"left":t>0?"right":"center",vertical:0>a?"top":s>0?"bottom":"middle"};d>m&&m>r(t+i)&&(h.horizontal="center"),c>g&&g>r(s+a)&&(h.vertical="middle"),h.important=o(r(t),r(i))>o(r(s),r(a))?"horizontal":"vertical",n.using.call(this,e,h)}),u.offset(e.extend(M,{using:l}))})},e.ui.position={fit:{left:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollLeft:s.offset.left,a=s.width,r=e.left-t.collisionPosition.marginLeft,h=n-r,l=r+t.collisionWidth-a-n;t.collisionWidth>a?h>0&&0>=l?(i=e.left+h+t.collisionWidth-a-n,e.left+=h-i):e.left=l>0&&0>=h?n:h>l?n+a-t.collisionWidth:n:h>0?e.left+=h:l>0?e.left-=l:e.left=o(e.left-r,e.left)},top:function(e,t){var i,s=t.within,n=s.isWindow?s.scrollTop:s.offset.top,a=t.within.height,r=e.top-t.collisionPosition.marginTop,h=n-r,l=r+t.collisionHeight-a-n;t.collisionHeight>a?h>0&&0>=l?(i=e.top+h+t.collisionHeight-a-n,e.top+=h-i):e.top=l>0&&0>=h?n:h>l?n+a-t.collisionHeight:n:h>0?e.top+=h:l>0?e.top-=l:e.top=o(e.top-r,e.top)}},flip:{left:function(e,t){var i,s,n=t.within,a=n.offset.left+n.scrollLeft,o=n.width,h=n.isWindow?n.scrollLeft:n.offset.left,l=e.left-t.collisionPosition.marginLeft,u=l-h,d=l+t.collisionWidth-o-h,c="left"===t.my[0]?-t.elemWidth:"right"===t.my[0]?t.elemWidth:0,p="left"===t.at[0]?t.targetWidth:"right"===t.at[0]?-t.targetWidth:0,f=-2*t.offset[0];0>u?(i=e.left+c+p+f+t.collisionWidth-o-a,(0>i||r(u)>i)&&(e.left+=c+p+f)):d>0&&(s=e.left-t.collisionPosition.marginLeft+c+p+f-h,(s>0||d>r(s))&&(e.left+=c+p+f))},top:function(e,t){var i,s,n=t.within,a=n.offset.top+n.scrollTop,o=n.height,h=n.isWindow?n.scrollTop:n.offset.top,l=e.top-t.collisionPosition.marginTop,u=l-h,d=l+t.collisionHeight-o-h,c="top"===t.my[1],p=c?-t.elemHeight:"bottom"===t.my[1]?t.elemHeight:0,f="top"===t.at[1]?t.targetHeight:"bottom"===t.at[1]?-t.targetHeight:0,m=-2*t.offset[1];0>u?(s=e.top+p+f+m+t.collisionHeight-o-a,(0>s||r(u)>s)&&(e.top+=p+f+m)):d>0&&(i=e.top-t.collisionPosition.marginTop+p+f+m-h,(i>0||d>r(i))&&(e.top+=p+f+m))}},flipfit:{left:function(){e.ui.position.flip.left.apply(this,arguments),e.ui.position.fit.left.apply(this,arguments)},top:function(){e.ui.position.flip.top.apply(this,arguments),e.ui.position.fit.top.apply(this,arguments)}}},function(){var t,i,s,n,o,r=document.getElementsByTagName("body")[0],h=document.createElement("div");t=document.createElement(r?"div":"body"),s={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},r&&e.extend(s,{position:"absolute",left:"-1000px",top:"-1000px"});for(o in s)t.style[o]=s[o];t.appendChild(h),i=r||document.documentElement,i.insertBefore(t,i.firstChild),h.style.cssText="position: absolute; left: 10.7432222px;",n=e(h).offset().left,a=n>10&&11>n,t.innerHTML="",i.removeChild(t)}()}(),e.ui.position,e.widget("ui.draggable",e.ui.mouse,{version:"1.11.3",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this.element.addClass("ui-draggable"),this.options.disabled&&this.element.addClass("ui-draggable-disabled"),this._setHandleClassName(),this._mouseInit()},_setOption:function(e,t){this._super(e,t),"handle"===e&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?(this.destroyOnClear=!0,void 0):(this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"),this._removeHandleClassName(),this._mouseDestroy(),void 0)},_mouseCapture:function(t){var i=this.options;return this._blurActiveElement(t),this.helper||i.disabled||e(t.target).closest(".ui-resizable-handle").length>0?!1:(this.handle=this._getHandle(t),this.handle?(this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0):!1)},_blockFrames:function(t){this.iframeBlocks=this.document.find(t).map(function(){var t=e(this);return e("<div>").css("position","absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(t){var i=this.document[0];if(this.handleElement.is(t.target))try{i.activeElement&&"body"!==i.activeElement.nodeName.toLowerCase()&&e(i.activeElement).blur()}catch(s){}},_mouseStart:function(t){var i=this.options;return this.helper=this._createHelper(t),this.helper.addClass("ui-draggable-dragging"),this._cacheHelperProportions(),e.ui.ddmanager&&(e.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===e(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(t),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",t)===!1?(this._clear(),!1):(this._cacheHelperProportions(),e.ui.ddmanager&&!i.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this._normalizeRightBottom(),this._mouseDrag(t,!0),e.ui.ddmanager&&e.ui.ddmanager.dragStart(this,t),!0)},_refreshOffsets:function(e){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:e.pageX-this.offset.left,top:e.pageY-this.offset.top}},_mouseDrag:function(t,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash();if(this._trigger("drag",t,s)===!1)return this._mouseUp({}),!1;this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var i=this,s=!1;return e.ui.ddmanager&&!this.options.dropBehaviour&&(s=e.ui.ddmanager.drop(this,t)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||e.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?e(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",t)!==!1&&i._clear()}):this._trigger("stop",t)!==!1&&this._clear(),!1},_mouseUp:function(t){return this._unblockFrames(),e.ui.ddmanager&&e.ui.ddmanager.dragStop(this,t),this.handleElement.is(t.target)&&this.element.focus(),e.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear(),this},_getHandle:function(t){return this.options.handle?!!e(t.target).closest(this.element.find(this.options.handle)).length:!0},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this.handleElement.addClass("ui-draggable-handle")},_removeHandleClassName:function(){this.handleElement.removeClass("ui-draggable-handle")},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper),n=s?e(i.helper.apply(this.element[0],[t])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element;return n.parents("body").length||n.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&n[0]===this.element[0]&&this._setPositionRelative(),n[0]===this.element[0]||/(fixed|absolute)/.test(n.css("position"))||n.css("position","absolute"),n},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(e){return/(html|body)/i.test(e.tagName)||e===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),i=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var e=this.element.position(),t=this._isRootNode(this.scrollParent[0]);return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+(t?0:this.scrollParent.scrollTop()),left:e.left-(parseInt(this.helper.css("left"),10)||0)+(t?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options,a=this.document[0];return this.relativeContainer=null,n.containment?"window"===n.containment?(this.containment=[e(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,e(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,e(window).scrollLeft()+e(window).width()-this.helperProportions.width-this.margins.left,e(window).scrollTop()+(e(window).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):"document"===n.containment?(this.containment=[0,0,e(a).width()-this.helperProportions.width-this.margins.left,(e(a).height()||a.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top],void 0):n.containment.constructor===Array?(this.containment=n.containment,void 0):("parent"===n.containment&&(n.containment=this.helper[0].parentNode),i=e(n.containment),s=i[0],s&&(t=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(t?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i),void 0):(this.containment=null,void 0)},_convertPositionTo:function(e,t){t||(t=this.position);var i="absolute"===e?1:-1,s=this._isRootNode(this.scrollParent[0]);return{top:t.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:t.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(e,t){var i,s,n,a,o=this.options,r=this._isRootNode(this.scrollParent[0]),h=e.pageX,l=e.pageY;return r&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),t&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,e.pageX-this.offset.click.left<i[0]&&(h=i[0]+this.offset.click.left),e.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),e.pageX-this.offset.click.left>i[2]&&(h=i[2]+this.offset.click.left),e.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),o.grid&&(n=o.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/o.grid[1])*o.grid[1]:this.originalPageY,l=i?n-this.offset.click.top>=i[1]||n-this.offset.click.top>i[3]?n:n-this.offset.click.top>=i[1]?n-o.grid[1]:n+o.grid[1]:n,a=o.grid[0]?this.originalPageX+Math.round((h-this.originalPageX)/o.grid[0])*o.grid[0]:this.originalPageX,h=i?a-this.offset.click.left>=i[0]||a-this.offset.click.left>i[2]?a:a-this.offset.click.left>=i[0]?a-o.grid[0]:a+o.grid[0]:a),"y"===o.axis&&(h=this.originalPageX),"x"===o.axis&&(l=this.originalPageY)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:r?0:this.offset.scroll.top),left:h-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:r?0:this.offset.scroll.left)}
},_clear:function(){this.helper.removeClass("ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_normalizeRightBottom:function(){"y"!==this.options.axis&&"auto"!==this.helper.css("right")&&(this.helper.width(this.helper.width()),this.helper.css("right","auto")),"x"!==this.options.axis&&"auto"!==this.helper.css("bottom")&&(this.helper.height(this.helper.height()),this.helper.css("bottom","auto"))},_trigger:function(t,i,s){return s=s||this._uiHash(),e.ui.plugin.call(this,t,[i,s,this],!0),/^(drag|start|stop)/.test(t)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),e.Widget.prototype._trigger.call(this,t,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),e.ui.plugin.add("draggable","connectToSortable",{start:function(t,i,s){var n=e.extend({},i,{item:s.element});s.sortables=[],e(s.options.connectToSortable).each(function(){var i=e(this).sortable("instance");i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",t,n))})},stop:function(t,i,s){var n=e.extend({},i,{item:s.element});s.cancelHelperRemoval=!1,e.each(s.sortables,function(){var e=this;e.isOver?(e.isOver=0,s.cancelHelperRemoval=!0,e.cancelHelperRemoval=!1,e._storedCSS={position:e.placeholder.css("position"),top:e.placeholder.css("top"),left:e.placeholder.css("left")},e._mouseStop(t),e.options.helper=e.options._helper):(e.cancelHelperRemoval=!0,e._trigger("deactivate",t,n))})},drag:function(t,i,s){e.each(s.sortables,function(){var n=!1,a=this;a.positionAbs=s.positionAbs,a.helperProportions=s.helperProportions,a.offset.click=s.offset.click,a._intersectsWith(a.containerCache)&&(n=!0,e.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==a&&this._intersectsWith(this.containerCache)&&e.contains(a.element[0],this.element[0])&&(n=!1),n})),n?(a.isOver||(a.isOver=1,a.currentItem=i.helper.appendTo(a.element).data("ui-sortable-item",!0),a.options._helper=a.options.helper,a.options.helper=function(){return i.helper[0]},t.target=a.currentItem[0],a._mouseCapture(t,!0),a._mouseStart(t,!0,!0),a.offset.click.top=s.offset.click.top,a.offset.click.left=s.offset.click.left,a.offset.parent.left-=s.offset.parent.left-a.offset.parent.left,a.offset.parent.top-=s.offset.parent.top-a.offset.parent.top,s._trigger("toSortable",t),s.dropped=a.element,e.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,a.fromOutside=s),a.currentItem&&(a._mouseDrag(t),i.position=a.position)):a.isOver&&(a.isOver=0,a.cancelHelperRemoval=!0,a.options._revert=a.options.revert,a.options.revert=!1,a._trigger("out",t,a._uiHash(a)),a._mouseStop(t,!0),a.options.revert=a.options._revert,a.options.helper=a.options._helper,a.placeholder&&a.placeholder.remove(),s._refreshOffsets(t),i.position=s._generatePosition(t,!0),s._trigger("fromSortable",t),s.dropped=!1,e.each(s.sortables,function(){this.refreshPositions()}))})}}),e.ui.plugin.add("draggable","cursor",{start:function(t,i,s){var n=e("body"),a=s.options;n.css("cursor")&&(a._cursor=n.css("cursor")),n.css("cursor",a.cursor)},stop:function(t,i,s){var n=s.options;n._cursor&&e("body").css("cursor",n._cursor)}}),e.ui.plugin.add("draggable","opacity",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("opacity")&&(a._opacity=n.css("opacity")),n.css("opacity",a.opacity)},stop:function(t,i,s){var n=s.options;n._opacity&&e(i.helper).css("opacity",n._opacity)}}),e.ui.plugin.add("draggable","scroll",{start:function(e,t,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(t,i,s){var n=s.options,a=!1,o=s.scrollParentNotHidden[0],r=s.document[0];o!==r&&"HTML"!==o.tagName?(n.axis&&"x"===n.axis||(s.overflowOffset.top+o.offsetHeight-t.pageY<n.scrollSensitivity?o.scrollTop=a=o.scrollTop+n.scrollSpeed:t.pageY-s.overflowOffset.top<n.scrollSensitivity&&(o.scrollTop=a=o.scrollTop-n.scrollSpeed)),n.axis&&"y"===n.axis||(s.overflowOffset.left+o.offsetWidth-t.pageX<n.scrollSensitivity?o.scrollLeft=a=o.scrollLeft+n.scrollSpeed:t.pageX-s.overflowOffset.left<n.scrollSensitivity&&(o.scrollLeft=a=o.scrollLeft-n.scrollSpeed))):(n.axis&&"x"===n.axis||(t.pageY-e(r).scrollTop()<n.scrollSensitivity?a=e(r).scrollTop(e(r).scrollTop()-n.scrollSpeed):e(window).height()-(t.pageY-e(r).scrollTop())<n.scrollSensitivity&&(a=e(r).scrollTop(e(r).scrollTop()+n.scrollSpeed))),n.axis&&"y"===n.axis||(t.pageX-e(r).scrollLeft()<n.scrollSensitivity?a=e(r).scrollLeft(e(r).scrollLeft()-n.scrollSpeed):e(window).width()-(t.pageX-e(r).scrollLeft())<n.scrollSensitivity&&(a=e(r).scrollLeft(e(r).scrollLeft()+n.scrollSpeed)))),a!==!1&&e.ui.ddmanager&&!n.dropBehaviour&&e.ui.ddmanager.prepareOffsets(s,t)}}),e.ui.plugin.add("draggable","snap",{start:function(t,i,s){var n=s.options;s.snapElements=[],e(n.snap.constructor!==String?n.snap.items||":data(ui-draggable)":n.snap).each(function(){var t=e(this),i=t.offset();this!==s.element[0]&&s.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:i.top,left:i.left})})},drag:function(t,i,s){var n,a,o,r,h,l,u,d,c,p,f=s.options,m=f.snapTolerance,g=i.offset.left,v=g+s.helperProportions.width,y=i.offset.top,b=y+s.helperProportions.height;for(c=s.snapElements.length-1;c>=0;c--)h=s.snapElements[c].left-s.margins.left,l=h+s.snapElements[c].width,u=s.snapElements[c].top-s.margins.top,d=u+s.snapElements[c].height,h-m>v||g>l+m||u-m>b||y>d+m||!e.contains(s.snapElements[c].item.ownerDocument,s.snapElements[c].item)?(s.snapElements[c].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=!1):("inner"!==f.snapMode&&(n=m>=Math.abs(u-b),a=m>=Math.abs(d-y),o=m>=Math.abs(h-v),r=m>=Math.abs(l-g),n&&(i.position.top=s._convertPositionTo("relative",{top:u-s.helperProportions.height,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:d,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h-s.helperProportions.width}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left)),p=n||a||o||r,"outer"!==f.snapMode&&(n=m>=Math.abs(u-y),a=m>=Math.abs(d-b),o=m>=Math.abs(h-g),r=m>=Math.abs(l-v),n&&(i.position.top=s._convertPositionTo("relative",{top:u,left:0}).top),a&&(i.position.top=s._convertPositionTo("relative",{top:d-s.helperProportions.height,left:0}).top),o&&(i.position.left=s._convertPositionTo("relative",{top:0,left:h}).left),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left)),!s.snapElements[c].snapping&&(n||a||o||r||p)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,t,e.extend(s._uiHash(),{snapItem:s.snapElements[c].item})),s.snapElements[c].snapping=n||a||o||r||p)}}),e.ui.plugin.add("draggable","stack",{start:function(t,i,s){var n,a=s.options,o=e.makeArray(e(a.stack)).sort(function(t,i){return(parseInt(e(t).css("zIndex"),10)||0)-(parseInt(e(i).css("zIndex"),10)||0)});o.length&&(n=parseInt(e(o[0]).css("zIndex"),10)||0,e(o).each(function(t){e(this).css("zIndex",n+t)}),this.css("zIndex",n+o.length))}}),e.ui.plugin.add("draggable","zIndex",{start:function(t,i,s){var n=e(i.helper),a=s.options;n.css("zIndex")&&(a._zIndex=n.css("zIndex")),n.css("zIndex",a.zIndex)},stop:function(t,i,s){var n=s.options;n._zIndex&&e(i.helper).css("zIndex",n._zIndex)}}),e.ui.draggable,e.widget("ui.droppable",{version:"1.11.3",widgetEventPrefix:"drop",options:{accept:"*",activeClass:!1,addClasses:!0,greedy:!1,hoverClass:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t,i=this.options,s=i.accept;this.isover=!1,this.isout=!0,this.accept=e.isFunction(s)?s:function(e){return e.is(s)},this.proportions=function(){return arguments.length?(t=arguments[0],void 0):t?t:t={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}},this._addToManager(i.scope),i.addClasses&&this.element.addClass("ui-droppable")},_addToManager:function(t){e.ui.ddmanager.droppables[t]=e.ui.ddmanager.droppables[t]||[],e.ui.ddmanager.droppables[t].push(this)},_splice:function(e){for(var t=0;e.length>t;t++)e[t]===this&&e.splice(t,1)},_destroy:function(){var t=e.ui.ddmanager.droppables[this.options.scope];this._splice(t),this.element.removeClass("ui-droppable ui-droppable-disabled")},_setOption:function(t,i){if("accept"===t)this.accept=e.isFunction(i)?i:function(e){return e.is(i)};else if("scope"===t){var s=e.ui.ddmanager.droppables[this.options.scope];this._splice(s),this._addToManager(i)}this._super(t,i)},_activate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.addClass(this.options.activeClass),i&&this._trigger("activate",t,this.ui(i))},_deactivate:function(t){var i=e.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass),i&&this._trigger("deactivate",t,this.ui(i))},_over:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.addClass(this.options.hoverClass),this._trigger("over",t,this.ui(i)))},_out:function(t){var i=e.ui.ddmanager.current;i&&(i.currentItem||i.element)[0]!==this.element[0]&&this.accept.call(this.element[0],i.currentItem||i.element)&&(this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("out",t,this.ui(i)))},_drop:function(t,i){var s=i||e.ui.ddmanager.current,n=!1;return s&&(s.currentItem||s.element)[0]!==this.element[0]?(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var i=e(this).droppable("instance");return i.options.greedy&&!i.options.disabled&&i.options.scope===s.options.scope&&i.accept.call(i.element[0],s.currentItem||s.element)&&e.ui.intersect(s,e.extend(i,{offset:i.element.offset()}),i.options.tolerance,t)?(n=!0,!1):void 0}),n?!1:this.accept.call(this.element[0],s.currentItem||s.element)?(this.options.activeClass&&this.element.removeClass(this.options.activeClass),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass),this._trigger("drop",t,this.ui(s)),this.element):!1):!1},ui:function(e){return{draggable:e.currentItem||e.element,helper:e.helper,position:e.position,offset:e.positionAbs}}}),e.ui.intersect=function(){function e(e,t,i){return e>=t&&t+i>e}return function(t,i,s,n){if(!i.offset)return!1;var a=(t.positionAbs||t.position.absolute).left+t.margins.left,o=(t.positionAbs||t.position.absolute).top+t.margins.top,r=a+t.helperProportions.width,h=o+t.helperProportions.height,l=i.offset.left,u=i.offset.top,d=l+i.proportions().width,c=u+i.proportions().height;switch(s){case"fit":return a>=l&&d>=r&&o>=u&&c>=h;case"intersect":return a+t.helperProportions.width/2>l&&d>r-t.helperProportions.width/2&&o+t.helperProportions.height/2>u&&c>h-t.helperProportions.height/2;case"pointer":return e(n.pageY,u,i.proportions().height)&&e(n.pageX,l,i.proportions().width);case"touch":return(o>=u&&c>=o||h>=u&&c>=h||u>o&&h>c)&&(a>=l&&d>=a||r>=l&&d>=r||l>a&&r>d);default:return!1}}}(),e.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(t,i){var s,n,a=e.ui.ddmanager.droppables[t.options.scope]||[],o=i?i.type:null,r=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();e:for(s=0;a.length>s;s++)if(!(a[s].options.disabled||t&&!a[s].accept.call(a[s].element[0],t.currentItem||t.element))){for(n=0;r.length>n;n++)if(r[n]===a[s].element[0]){a[s].proportions().height=0;continue e}a[s].visible="none"!==a[s].element.css("display"),a[s].visible&&("mousedown"===o&&a[s]._activate.call(a[s],i),a[s].offset=a[s].element.offset(),a[s].proportions({width:a[s].element[0].offsetWidth,height:a[s].element[0].offsetHeight}))}},drop:function(t,i){var s=!1;return e.each((e.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&e.ui.intersect(t,this,this.options.tolerance,i)&&(s=this._drop.call(this,i)||s),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,i)))}),s},dragStart:function(t,i){t.element.parentsUntil("body").bind("scroll.droppable",function(){t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)})},drag:function(t,i){t.options.refreshPositions&&e.ui.ddmanager.prepareOffsets(t,i),e.each(e.ui.ddmanager.droppables[t.options.scope]||[],function(){if(!this.options.disabled&&!this.greedyChild&&this.visible){var s,n,a,o=e.ui.intersect(t,this,this.options.tolerance,i),r=!o&&this.isover?"isout":o&&!this.isover?"isover":null;r&&(this.options.greedy&&(n=this.options.scope,a=this.element.parents(":data(ui-droppable)").filter(function(){return e(this).droppable("instance").options.scope===n}),a.length&&(s=e(a[0]).droppable("instance"),s.greedyChild="isover"===r)),s&&"isover"===r&&(s.isover=!1,s.isout=!0,s._out.call(s,i)),this[r]=!0,this["isout"===r?"isover":"isout"]=!1,this["isover"===r?"_over":"_out"].call(this,i),s&&"isout"===r&&(s.isout=!1,s.isover=!0,s._over.call(s,i)))}})},dragStop:function(t,i){t.element.parentsUntil("body").unbind("scroll.droppable"),t.options.refreshPositions||e.ui.ddmanager.prepareOffsets(t,i)}},e.ui.droppable,e.widget("ui.resizable",e.ui.mouse,{version:"1.11.3",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(e){return parseInt(e,10)||0},_isNumber:function(e){return!isNaN(parseInt(e,10))},_hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var s=i&&"left"===i?"scrollLeft":"scrollTop",n=!1;return t[s]>0?!0:(t[s]=1,n=t[s]>0,t[s]=0,n)},_create:function(){var t,i,s,n,a,o=this,r=this.options;if(this.element.addClass("ui-resizable"),e.extend(this,{_aspectRatio:!!r.aspectRatio,aspectRatio:r.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:r.helper||r.ghost||r.animate?r.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,this.element.css({marginLeft:this.originalElement.css("marginLeft"),marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom")}),this.originalElement.css({marginLeft:0,marginTop:0,marginRight:0,marginBottom:0}),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css({margin:this.originalElement.css("margin")}),this._proportionallyResize()),this.handles=r.handles||(e(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),t=this.handles.split(","),this.handles={},i=0;t.length>i;i++)s=e.trim(t[i]),a="ui-resizable-"+s,n=e("<div class='ui-resizable-handle "+a+"'></div>"),n.css({zIndex:r.zIndex}),"se"===s&&n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"),this.handles[s]=".ui-resizable-"+s,this.element.append(n);this._renderAxis=function(t){var i,s,n,a;t=t||this.element;for(i in this.handles)this.handles[i].constructor===String&&(this.handles[i]=this.element.children(this.handles[i]).first().show()),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=e(this.handles[i],this.element),a=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),n=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),t.css(n,a),this._proportionallyResize()),e(this.handles[i]).length},this._renderAxis(this.element),this._handles=e(".ui-resizable-handle",this.element).disableSelection(),this._handles.mouseover(function(){o.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),o.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),e(this.element).addClass("ui-resizable-autohide").mouseenter(function(){r.disabled||(e(this).removeClass("ui-resizable-autohide"),o._handles.show())}).mouseleave(function(){r.disabled||o.resizing||(e(this).addClass("ui-resizable-autohide"),o._handles.hide())})),this._mouseInit()},_destroy:function(){this._mouseDestroy();var t,i=function(t){e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()};return this.elementIsWrapper&&(i(this.element),t=this.element,this.originalElement.css({position:t.css("position"),width:t.outerWidth(),height:t.outerHeight(),top:t.css("top"),left:t.css("left")}).insertAfter(t),t.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_mouseCapture:function(t){var i,s,n=!1;for(i in this.handles)s=e(this.handles[i])[0],(s===t.target||e.contains(s,t.target))&&(n=!0);return!this.options.disabled&&n},_mouseStart:function(t){var i,s,n,a=this.options,o=this.element;return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),a.containment&&(i+=e(a.containment).scrollLeft()||0,s+=e(a.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:o.width(),height:o.height()},this.originalSize=this._helper?{width:o.outerWidth(),height:o.outerHeight()}:{width:o.width(),height:o.height()},this.sizeDiff={width:o.outerWidth()-o.width(),height:o.outerHeight()-o.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio="number"==typeof a.aspectRatio?a.aspectRatio:this.originalSize.width/this.originalSize.height||1,n=e(".ui-resizable-"+this.axis).css("cursor"),e("body").css("cursor","auto"===n?this.axis+"-resize":n),o.addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var i,s,n=this.originalMousePosition,a=this.axis,o=t.pageX-n.left||0,r=t.pageY-n.top||0,h=this._change[a];return this._updatePrevProperties(),h?(i=h.apply(this,[t,o,r]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(i=this._updateRatio(i,t)),i=this._respectSize(i,t),this._updateCache(i),this._propagate("resize",t),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),e.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",t,this.ui()),this._applyChanges()),!1):!1},_mouseStop:function(t){this.resizing=!1;var i,s,n,a,o,r,h,l=this.options,u=this;return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),n=s&&this._hasScroll(i[0],"left")?0:u.sizeDiff.height,a=s?0:u.sizeDiff.width,o={width:u.helper.width()-a,height:u.helper.height()-n},r=parseInt(u.element.css("left"),10)+(u.position.left-u.originalPosition.left)||null,h=parseInt(u.element.css("top"),10)+(u.position.top-u.originalPosition.top)||null,l.animate||this.element.css(e.extend(o,{top:h,left:r})),u.helper.height(u.size.height),u.helper.width(u.size.width),this._helper&&!l.animate&&this._proportionallyResize()),e("body").css("cursor","auto"),this.element.removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var e={};return this.position.top!==this.prevPosition.top&&(e.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(e.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(e.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(e.height=this.size.height+"px"),this.helper.css(e),e},_updateVirtualBoundaries:function(e){var t,i,s,n,a,o=this.options;a={minWidth:this._isNumber(o.minWidth)?o.minWidth:0,maxWidth:this._isNumber(o.maxWidth)?o.maxWidth:1/0,minHeight:this._isNumber(o.minHeight)?o.minHeight:0,maxHeight:this._isNumber(o.maxHeight)?o.maxHeight:1/0},(this._aspectRatio||e)&&(t=a.minHeight*this.aspectRatio,s=a.minWidth/this.aspectRatio,i=a.maxHeight*this.aspectRatio,n=a.maxWidth/this.aspectRatio,t>a.minWidth&&(a.minWidth=t),s>a.minHeight&&(a.minHeight=s),a.maxWidth>i&&(a.maxWidth=i),a.maxHeight>n&&(a.maxHeight=n)),this._vBoundaries=a},_updateCache:function(e){this.offset=this.helper.offset(),this._isNumber(e.left)&&(this.position.left=e.left),this._isNumber(e.top)&&(this.position.top=e.top),this._isNumber(e.height)&&(this.size.height=e.height),this._isNumber(e.width)&&(this.size.width=e.width)},_updateRatio:function(e){var t=this.position,i=this.size,s=this.axis;return this._isNumber(e.height)?e.width=e.height*this.aspectRatio:this._isNumber(e.width)&&(e.height=e.width/this.aspectRatio),"sw"===s&&(e.left=t.left+(i.width-e.width),e.top=null),"nw"===s&&(e.top=t.top+(i.height-e.height),e.left=t.left+(i.width-e.width)),e},_respectSize:function(e){var t=this._vBoundaries,i=this.axis,s=this._isNumber(e.width)&&t.maxWidth&&t.maxWidth<e.width,n=this._isNumber(e.height)&&t.maxHeight&&t.maxHeight<e.height,a=this._isNumber(e.width)&&t.minWidth&&t.minWidth>e.width,o=this._isNumber(e.height)&&t.minHeight&&t.minHeight>e.height,r=this.originalPosition.left+this.originalSize.width,h=this.position.top+this.size.height,l=/sw|nw|w/.test(i),u=/nw|ne|n/.test(i);return a&&(e.width=t.minWidth),o&&(e.height=t.minHeight),s&&(e.width=t.maxWidth),n&&(e.height=t.maxHeight),a&&l&&(e.left=r-t.minWidth),s&&l&&(e.left=r-t.maxWidth),o&&u&&(e.top=h-t.minHeight),n&&u&&(e.top=h-t.maxHeight),e.width||e.height||e.left||!e.top?e.width||e.height||e.top||!e.left||(e.left=null):e.top=null,e},_getPaddingPlusBorderDimensions:function(e){for(var t=0,i=[],s=[e.css("borderTopWidth"),e.css("borderRightWidth"),e.css("borderBottomWidth"),e.css("borderLeftWidth")],n=[e.css("paddingTop"),e.css("paddingRight"),e.css("paddingBottom"),e.css("paddingLeft")];4>t;t++)i[t]=parseInt(s[t],10)||0,i[t]+=parseInt(n[t],10)||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var e,t=0,i=this.helper||this.element;this._proportionallyResizeElements.length>t;t++)e=this._proportionallyResizeElements[t],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(e)),e.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var t=this.element,i=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||e("<div style='overflow:hidden;'></div>"),this.helper.addClass(this._helper).css({width:this.element.outerWidth()-1,height:this.element.outerHeight()-1,position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(e,t){return{width:this.originalSize.width+t}},w:function(e,t){var i=this.originalSize,s=this.originalPosition;return{left:s.left+t,width:i.width-t}},n:function(e,t,i){var s=this.originalSize,n=this.originalPosition;return{top:n.top+i,height:s.height-i}},s:function(e,t,i){return{height:this.originalSize.height+i}},se:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},sw:function(t,i,s){return e.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,i,s]))},ne:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,i,s]))},nw:function(t,i,s){return e.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,i,s]))}},_propagate:function(t,i){e.ui.plugin.call(this,t,[i,this.ui()]),"resize"!==t&&this._trigger(t,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),e.ui.plugin.add("resizable","animate",{stop:function(t){var i=e(this).resizable("instance"),s=i.options,n=i._proportionallyResizeElements,a=n.length&&/textarea/i.test(n[0].nodeName),o=a&&i._hasScroll(n[0],"left")?0:i.sizeDiff.height,r=a?0:i.sizeDiff.width,h={width:i.size.width-r,height:i.size.height-o},l=parseInt(i.element.css("left"),10)+(i.position.left-i.originalPosition.left)||null,u=parseInt(i.element.css("top"),10)+(i.position.top-i.originalPosition.top)||null;i.element.animate(e.extend(h,u&&l?{top:u,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseInt(i.element.css("width"),10),height:parseInt(i.element.css("height"),10),top:parseInt(i.element.css("top"),10),left:parseInt(i.element.css("left"),10)};n&&n.length&&e(n[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",t)}})}}),e.ui.plugin.add("resizable","containment",{start:function(){var t,i,s,n,a,o,r,h=e(this).resizable("instance"),l=h.options,u=h.element,d=l.containment,c=d instanceof e?d.get(0):/parent/.test(d)?u.parent().get(0):d;c&&(h.containerElement=e(c),/document/.test(d)||d===document?(h.containerOffset={left:0,top:0},h.containerPosition={left:0,top:0},h.parentData={element:e(document),left:0,top:0,width:e(document).width(),height:e(document).height()||document.body.parentNode.scrollHeight}):(t=e(c),i=[],e(["Top","Right","Left","Bottom"]).each(function(e,s){i[e]=h._num(t.css("padding"+s))}),h.containerOffset=t.offset(),h.containerPosition=t.position(),h.containerSize={height:t.innerHeight()-i[3],width:t.innerWidth()-i[1]},s=h.containerOffset,n=h.containerSize.height,a=h.containerSize.width,o=h._hasScroll(c,"left")?c.scrollWidth:a,r=h._hasScroll(c)?c.scrollHeight:n,h.parentData={element:c,left:s.left,top:s.top,width:o,height:r}))},resize:function(t){var i,s,n,a,o=e(this).resizable("instance"),r=o.options,h=o.containerOffset,l=o.position,u=o._aspectRatio||t.shiftKey,d={top:0,left:0},c=o.containerElement,p=!0;c[0]!==document&&/static/.test(c.css("position"))&&(d=h),l.left<(o._helper?h.left:0)&&(o.size.width=o.size.width+(o._helper?o.position.left-h.left:o.position.left-d.left),u&&(o.size.height=o.size.width/o.aspectRatio,p=!1),o.position.left=r.helper?h.left:0),l.top<(o._helper?h.top:0)&&(o.size.height=o.size.height+(o._helper?o.position.top-h.top:o.position.top),u&&(o.size.width=o.size.height*o.aspectRatio,p=!1),o.position.top=o._helper?h.top:0),n=o.containerElement.get(0)===o.element.parent().get(0),a=/relative|absolute/.test(o.containerElement.css("position")),n&&a?(o.offset.left=o.parentData.left+o.position.left,o.offset.top=o.parentData.top+o.position.top):(o.offset.left=o.element.offset().left,o.offset.top=o.element.offset().top),i=Math.abs(o.sizeDiff.width+(o._helper?o.offset.left-d.left:o.offset.left-h.left)),s=Math.abs(o.sizeDiff.height+(o._helper?o.offset.top-d.top:o.offset.top-h.top)),i+o.size.width>=o.parentData.width&&(o.size.width=o.parentData.width-i,u&&(o.size.height=o.size.width/o.aspectRatio,p=!1)),s+o.size.height>=o.parentData.height&&(o.size.height=o.parentData.height-s,u&&(o.size.width=o.size.height*o.aspectRatio,p=!1)),p||(o.position.left=o.prevPosition.left,o.position.top=o.prevPosition.top,o.size.width=o.prevSize.width,o.size.height=o.prevSize.height)},stop:function(){var t=e(this).resizable("instance"),i=t.options,s=t.containerOffset,n=t.containerPosition,a=t.containerElement,o=e(t.helper),r=o.offset(),h=o.outerWidth()-t.sizeDiff.width,l=o.outerHeight()-t.sizeDiff.height;t._helper&&!i.animate&&/relative/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l}),t._helper&&!i.animate&&/static/.test(a.css("position"))&&e(this).css({left:r.left-n.left-s.left,width:h,height:l})}}),e.ui.plugin.add("resizable","alsoResize",{start:function(){var t=e(this).resizable("instance"),i=t.options,s=function(t){e(t).each(function(){var t=e(this);t.data("ui-resizable-alsoresize",{width:parseInt(t.width(),10),height:parseInt(t.height(),10),left:parseInt(t.css("left"),10),top:parseInt(t.css("top"),10)})})};"object"!=typeof i.alsoResize||i.alsoResize.parentNode?s(i.alsoResize):i.alsoResize.length?(i.alsoResize=i.alsoResize[0],s(i.alsoResize)):e.each(i.alsoResize,function(e){s(e)})},resize:function(t,i){var s=e(this).resizable("instance"),n=s.options,a=s.originalSize,o=s.originalPosition,r={height:s.size.height-a.height||0,width:s.size.width-a.width||0,top:s.position.top-o.top||0,left:s.position.left-o.left||0},h=function(t,s){e(t).each(function(){var t=e(this),n=e(this).data("ui-resizable-alsoresize"),a={},o=s&&s.length?s:t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];e.each(o,function(e,t){var i=(n[t]||0)+(r[t]||0);i&&i>=0&&(a[t]=i||null)}),t.css(a)})};"object"!=typeof n.alsoResize||n.alsoResize.nodeType?h(n.alsoResize):e.each(n.alsoResize,function(e,t){h(e,t)})},stop:function(){e(this).removeData("resizable-alsoresize")}}),e.ui.plugin.add("resizable","ghost",{start:function(){var t=e(this).resizable("instance"),i=t.options,s=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:s.height,width:s.width,margin:0,left:0,top:0}).addClass("ui-resizable-ghost").addClass("string"==typeof i.ghost?i.ghost:""),t.ghost.appendTo(t.helper)},resize:function(){var t=e(this).resizable("instance");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=e(this).resizable("instance");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),e.ui.plugin.add("resizable","grid",{resize:function(){var t,i=e(this).resizable("instance"),s=i.options,n=i.size,a=i.originalSize,o=i.originalPosition,r=i.axis,h="number"==typeof s.grid?[s.grid,s.grid]:s.grid,l=h[0]||1,u=h[1]||1,d=Math.round((n.width-a.width)/l)*l,c=Math.round((n.height-a.height)/u)*u,p=a.width+d,f=a.height+c,m=s.maxWidth&&p>s.maxWidth,g=s.maxHeight&&f>s.maxHeight,v=s.minWidth&&s.minWidth>p,y=s.minHeight&&s.minHeight>f;s.grid=h,v&&(p+=l),y&&(f+=u),m&&(p-=l),g&&(f-=u),/^(se|s|e)$/.test(r)?(i.size.width=p,i.size.height=f):/^(ne)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.top=o.top-c):/^(sw)$/.test(r)?(i.size.width=p,i.size.height=f,i.position.left=o.left-d):((0>=f-u||0>=p-l)&&(t=i._getPaddingPlusBorderDimensions(this)),f-u>0?(i.size.height=f,i.position.top=o.top-c):(f=u-t.height,i.size.height=f,i.position.top=o.top+a.height-f),p-l>0?(i.size.width=p,i.position.left=o.left-d):(p=l-t.width,i.size.width=p,i.position.left=o.left+a.width-p))}}),e.ui.resizable,e.widget("ui.selectable",e.ui.mouse,{version:"1.11.3",options:{appendTo:"body",autoRefresh:!0,distance:0,filter:"*",tolerance:"touch",selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var t,i=this;
this.element.addClass("ui-selectable"),this.dragged=!1,this.refresh=function(){t=e(i.options.filter,i.element[0]),t.addClass("ui-selectee"),t.each(function(){var t=e(this),i=t.offset();e.data(this,"selectable-item",{element:this,$element:t,left:i.left,top:i.top,right:i.left+t.outerWidth(),bottom:i.top+t.outerHeight(),startselected:!1,selected:t.hasClass("ui-selected"),selecting:t.hasClass("ui-selecting"),unselecting:t.hasClass("ui-unselecting")})})},this.refresh(),this.selectees=t.addClass("ui-selectee"),this._mouseInit(),this.helper=e("<div class='ui-selectable-helper'></div>")},_destroy:function(){this.selectees.removeClass("ui-selectee").removeData("selectable-item"),this.element.removeClass("ui-selectable ui-selectable-disabled"),this._mouseDestroy()},_mouseStart:function(t){var i=this,s=this.options;this.opos=[t.pageX,t.pageY],this.options.disabled||(this.selectees=e(s.filter,this.element[0]),this._trigger("start",t),e(s.appendTo).append(this.helper),this.helper.css({left:t.pageX,top:t.pageY,width:0,height:0}),s.autoRefresh&&this.refresh(),this.selectees.filter(".ui-selected").each(function(){var s=e.data(this,"selectable-item");s.startselected=!0,t.metaKey||t.ctrlKey||(s.$element.removeClass("ui-selected"),s.selected=!1,s.$element.addClass("ui-unselecting"),s.unselecting=!0,i._trigger("unselecting",t,{unselecting:s.element}))}),e(t.target).parents().addBack().each(function(){var s,n=e.data(this,"selectable-item");return n?(s=!t.metaKey&&!t.ctrlKey||!n.$element.hasClass("ui-selected"),n.$element.removeClass(s?"ui-unselecting":"ui-selected").addClass(s?"ui-selecting":"ui-unselecting"),n.unselecting=!s,n.selecting=s,n.selected=s,s?i._trigger("selecting",t,{selecting:n.element}):i._trigger("unselecting",t,{unselecting:n.element}),!1):void 0}))},_mouseDrag:function(t){if(this.dragged=!0,!this.options.disabled){var i,s=this,n=this.options,a=this.opos[0],o=this.opos[1],r=t.pageX,h=t.pageY;return a>r&&(i=r,r=a,a=i),o>h&&(i=h,h=o,o=i),this.helper.css({left:a,top:o,width:r-a,height:h-o}),this.selectees.each(function(){var i=e.data(this,"selectable-item"),l=!1;i&&i.element!==s.element[0]&&("touch"===n.tolerance?l=!(i.left>r||a>i.right||i.top>h||o>i.bottom):"fit"===n.tolerance&&(l=i.left>a&&r>i.right&&i.top>o&&h>i.bottom),l?(i.selected&&(i.$element.removeClass("ui-selected"),i.selected=!1),i.unselecting&&(i.$element.removeClass("ui-unselecting"),i.unselecting=!1),i.selecting||(i.$element.addClass("ui-selecting"),i.selecting=!0,s._trigger("selecting",t,{selecting:i.element}))):(i.selecting&&((t.metaKey||t.ctrlKey)&&i.startselected?(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.$element.addClass("ui-selected"),i.selected=!0):(i.$element.removeClass("ui-selecting"),i.selecting=!1,i.startselected&&(i.$element.addClass("ui-unselecting"),i.unselecting=!0),s._trigger("unselecting",t,{unselecting:i.element}))),i.selected&&(t.metaKey||t.ctrlKey||i.startselected||(i.$element.removeClass("ui-selected"),i.selected=!1,i.$element.addClass("ui-unselecting"),i.unselecting=!0,s._trigger("unselecting",t,{unselecting:i.element})))))}),!1}},_mouseStop:function(t){var i=this;return this.dragged=!1,e(".ui-unselecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-unselecting"),s.unselecting=!1,s.startselected=!1,i._trigger("unselected",t,{unselected:s.element})}),e(".ui-selecting",this.element[0]).each(function(){var s=e.data(this,"selectable-item");s.$element.removeClass("ui-selecting").addClass("ui-selected"),s.selecting=!1,s.selected=!0,s.startselected=!0,i._trigger("selected",t,{selected:s.element})}),this._trigger("stop",t),this.helper.remove(),!1}}),e.widget("ui.sortable",e.ui.mouse,{version:"1.11.3",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(e,t,i){return e>=t&&t+i>e},_isFloating:function(e){return/left|right/.test(e.css("float"))||/inline|table-cell/.test(e.css("display"))},_create:function(){var e=this.options;this.containerCache={},this.element.addClass("ui-sortable"),this.refresh(),this.floating=this.items.length?"x"===e.axis||this._isFloating(this.items[0].item):!1,this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(e,t){this._super(e,t),"handle"===e&&this._setHandleClassName()},_setHandleClassName:function(){this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle"),e.each(this.items,function(){(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item).addClass("ui-sortable-handle")})},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle"),this._mouseDestroy();for(var e=this.items.length-1;e>=0;e--)this.items[e].item.removeData(this.widgetName+"-item");return this},_mouseCapture:function(t,i){var s=null,n=!1,a=this;return this.reverting?!1:this.options.disabled||"static"===this.options.type?!1:(this._refreshItems(t),e(t.target).parents().each(function(){return e.data(this,a.widgetName+"-item")===a?(s=e(this),!1):void 0}),e.data(t.target,a.widgetName+"-item")===a&&(s=e(t.target)),s?!this.options.handle||i||(e(this.options.handle,s).find("*").addBack().each(function(){this===t.target&&(n=!0)}),n)?(this.currentItem=s,this._removeCurrentsFromItems(),!0):!1:!1)},_mouseStart:function(t,i,s){var n,a,o=this.options;if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(t),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},e.extend(this.offset,{click:{left:t.pageX-this.offset.left,top:t.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(t),this.originalPageX=t.pageX,this.originalPageY=t.pageY,o.cursorAt&&this._adjustOffsetFromHelper(o.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),o.containment&&this._setContainment(),o.cursor&&"auto"!==o.cursor&&(a=this.document.find("body"),this.storedCursor=a.css("cursor"),a.css("cursor",o.cursor),this.storedStylesheet=e("<style>*{ cursor: "+o.cursor+" !important; }</style>").appendTo(a)),o.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",o.opacity)),o.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",o.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",t,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(n=this.containers.length-1;n>=0;n--)this.containers[n]._trigger("activate",t,this._uiHash(this));return e.ui.ddmanager&&(e.ui.ddmanager.current=this),e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t),this.dragging=!0,this.helper.addClass("ui-sortable-helper"),this._mouseDrag(t),!0},_mouseDrag:function(t){var i,s,n,a,o=this.options,r=!1;for(this.position=this._generatePosition(t),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-t.pageY<o.scrollSensitivity?this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop+o.scrollSpeed:t.pageY-this.overflowOffset.top<o.scrollSensitivity&&(this.scrollParent[0].scrollTop=r=this.scrollParent[0].scrollTop-o.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-t.pageX<o.scrollSensitivity?this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft+o.scrollSpeed:t.pageX-this.overflowOffset.left<o.scrollSensitivity&&(this.scrollParent[0].scrollLeft=r=this.scrollParent[0].scrollLeft-o.scrollSpeed)):(t.pageY-this.document.scrollTop()<o.scrollSensitivity?r=this.document.scrollTop(this.document.scrollTop()-o.scrollSpeed):this.window.height()-(t.pageY-this.document.scrollTop())<o.scrollSensitivity&&(r=this.document.scrollTop(this.document.scrollTop()+o.scrollSpeed)),t.pageX-this.document.scrollLeft()<o.scrollSensitivity?r=this.document.scrollLeft(this.document.scrollLeft()-o.scrollSpeed):this.window.width()-(t.pageX-this.document.scrollLeft())<o.scrollSensitivity&&(r=this.document.scrollLeft(this.document.scrollLeft()+o.scrollSpeed))),r!==!1&&e.ui.ddmanager&&!o.dropBehaviour&&e.ui.ddmanager.prepareOffsets(this,t)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1;i>=0;i--)if(s=this.items[i],n=s.item[0],a=this._intersectsWithPointer(s),a&&s.instance===this.currentContainer&&n!==this.currentItem[0]&&this.placeholder[1===a?"next":"prev"]()[0]!==n&&!e.contains(this.placeholder[0],n)&&("semi-dynamic"===this.options.type?!e.contains(this.element[0],n):!0)){if(this.direction=1===a?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break;this._rearrange(t,s),this._trigger("change",t,this._uiHash());break}return this._contactContainers(t),e.ui.ddmanager&&e.ui.ddmanager.drag(this,t),this._trigger("sort",t,this._uiHash()),this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(t,i){if(t){if(e.ui.ddmanager&&!this.options.dropBehaviour&&e.ui.ddmanager.drop(this,t),this.options.revert){var s=this,n=this.placeholder.offset(),a=this.options.axis,o={};a&&"x"!==a||(o.left=n.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),a&&"y"!==a||(o.top=n.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,e(this.helper).animate(o,parseInt(this.options.revert,10)||500,function(){s._clear(t)})}else this._clear(t,i);return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper"):this.currentItem.show();for(var t=this.containers.length-1;t>=0;t--)this.containers[t]._trigger("deactivate",null,this._uiHash(this)),this.containers[t].containerCache.over&&(this.containers[t]._trigger("out",null,this._uiHash(this)),this.containers[t].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),e.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?e(this.domPosition.prev).after(this.currentItem):e(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},e(i).each(function(){var i=(e(t.item||this).attr(t.attribute||"id")||"").match(t.expression||/(.+)[\-=_](.+)/);i&&s.push((t.key||i[1]+"[]")+"="+(t.key&&t.expression?i[1]:i[2]))}),!s.length&&t.key&&s.push(t.key+"="),s.join("&")},toArray:function(t){var i=this._getItemsAsjQuery(t&&t.connected),s=[];return t=t||{},i.each(function(){s.push(e(t.item||this).attr(t.attribute||"id")||"")}),s},_intersectsWith:function(e){var t=this.positionAbs.left,i=t+this.helperProportions.width,s=this.positionAbs.top,n=s+this.helperProportions.height,a=e.left,o=a+e.width,r=e.top,h=r+e.height,l=this.offset.click.top,u=this.offset.click.left,d="x"===this.options.axis||s+l>r&&h>s+l,c="y"===this.options.axis||t+u>a&&o>t+u,p=d&&c;return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>e[this.floating?"width":"height"]?p:t+this.helperProportions.width/2>a&&o>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>r&&h>n-this.helperProportions.height/2},_intersectsWithPointer:function(e){var t="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top,e.height),i="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left,e.width),s=t&&i,n=this._getDragVerticalDirection(),a=this._getDragHorizontalDirection();return s?this.floating?a&&"right"===a||"down"===n?2:1:n&&("down"===n?2:1):!1},_intersectsWithSides:function(e){var t=this._isOverAxis(this.positionAbs.top+this.offset.click.top,e.top+e.height/2,e.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,e.left+e.width/2,e.width),s=this._getDragVerticalDirection(),n=this._getDragHorizontalDirection();return this.floating&&n?"right"===n&&i||"left"===n&&!i:s&&("down"===s&&t||"up"===s&&!t)},_getDragVerticalDirection:function(){var e=this.positionAbs.top-this.lastPositionAbs.top;return 0!==e&&(e>0?"down":"up")},_getDragHorizontalDirection:function(){var e=this.positionAbs.left-this.lastPositionAbs.left;return 0!==e&&(e>0?"right":"left")},refresh:function(e){return this._refreshItems(e),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var e=this.options;return e.connectWith.constructor===String?[e.connectWith]:e.connectWith},_getItemsAsjQuery:function(t){function i(){r.push(this)}var s,n,a,o,r=[],h=[],l=this._connectWith();if(l&&t)for(s=l.length-1;s>=0;s--)for(a=e(l[s],this.document[0]),n=a.length-1;n>=0;n--)o=e.data(a[n],this.widgetFullName),o&&o!==this&&!o.options.disabled&&h.push([e.isFunction(o.options.items)?o.options.items.call(o.element):e(o.options.items,o.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),o]);for(h.push([e.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):e(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=h.length-1;s>=0;s--)h[s][0].each(i);return e(r)},_removeCurrentsFromItems:function(){var t=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=e.grep(this.items,function(e){for(var i=0;t.length>i;i++)if(t[i]===e.item[0])return!1;return!0})},_refreshItems:function(t){this.items=[],this.containers=[this];var i,s,n,a,o,r,h,l,u=this.items,d=[[e.isFunction(this.options.items)?this.options.items.call(this.element[0],t,{item:this.currentItem}):e(this.options.items,this.element),this]],c=this._connectWith();if(c&&this.ready)for(i=c.length-1;i>=0;i--)for(n=e(c[i],this.document[0]),s=n.length-1;s>=0;s--)a=e.data(n[s],this.widgetFullName),a&&a!==this&&!a.options.disabled&&(d.push([e.isFunction(a.options.items)?a.options.items.call(a.element[0],t,{item:this.currentItem}):e(a.options.items,a.element),a]),this.containers.push(a));for(i=d.length-1;i>=0;i--)for(o=d[i][1],r=d[i][0],s=0,l=r.length;l>s;s++)h=e(r[s]),h.data(this.widgetName+"-item",o),u.push({item:h,instance:o,width:0,height:0,left:0,top:0})},refreshPositions:function(t){this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset());var i,s,n,a;for(i=this.items.length-1;i>=0;i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(n=this.options.toleranceElement?e(this.options.toleranceElement,s.item):s.item,t||(s.width=n.outerWidth(),s.height=n.outerHeight()),a=n.offset(),s.left=a.left,s.top=a.top);if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this);else for(i=this.containers.length-1;i>=0;i--)a=this.containers[i].element.offset(),this.containers[i].containerCache.left=a.left,this.containers[i].containerCache.top=a.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight();return this},_createPlaceholder:function(t){t=t||this;var i,s=t.options;s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=t.currentItem[0].nodeName.toLowerCase(),n=e("<"+s+">",t.document[0]).addClass(i||t.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper");return"tr"===s?t.currentItem.children().each(function(){e("<td>&#160;</td>",t.document[0]).attr("colspan",e(this).attr("colspan")||1).appendTo(n)}):"img"===s&&n.attr("src",t.currentItem.attr("src")),i||n.css("visibility","hidden"),n},update:function(e,n){(!i||s.forcePlaceholderSize)&&(n.height()||n.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),n.width()||n.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10)))}}),t.placeholder=e(s.placeholder.element.call(t.element,t.currentItem)),t.currentItem.after(t.placeholder),s.placeholder.update(t,t.placeholder)},_contactContainers:function(t){var i,s,n,a,o,r,h,l,u,d,c=null,p=null;for(i=this.containers.length-1;i>=0;i--)if(!e.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(c&&e.contains(this.containers[i].element[0],c.element[0]))continue;c=this.containers[i],p=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",t,this._uiHash(this)),this.containers[i].containerCache.over=0);if(c)if(1===this.containers.length)this.containers[p].containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1);else{for(n=1e4,a=null,u=c.floating||this._isFloating(this.currentItem),o=u?"left":"top",r=u?"width":"height",d=u?"clientX":"clientY",s=this.items.length-1;s>=0;s--)e.contains(this.containers[p].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(h=this.items[s].item.offset()[o],l=!1,t[d]-h>this.items[s][r]/2&&(l=!0),n>Math.abs(t[d]-h)&&(n=Math.abs(t[d]-h),a=this.items[s],this.direction=l?"up":"down"));if(!a&&!this.options.dropOnEmpty)return;if(this.currentContainer===this.containers[p])return this.currentContainer.containerCache.over||(this.containers[p]._trigger("over",t,this._uiHash()),this.currentContainer.containerCache.over=1),void 0;a?this._rearrange(t,a,null,!0):this._rearrange(t,null,this.containers[p].element,!0),this._trigger("change",t,this._uiHash()),this.containers[p]._trigger("change",t,this._uiHash(this)),this.currentContainer=this.containers[p],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[p]._trigger("over",t,this._uiHash(this)),this.containers[p].containerCache.over=1}},_createHelper:function(t){var i=this.options,s=e.isFunction(i.helper)?e(i.helper.apply(this.element[0],[t,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem;return s.parents("body").length||e("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),e.isArray(t)&&(t={left:+t[0],top:+t[1]||0}),"left"in t&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var t=this.offsetParent.offset();return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&e.ui.ie)&&(t={top:0,left:0}),{top:t.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var e=this.currentItem.position();return{top:e.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:e.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,i,s,n=this.options;"parent"===n.containment&&(n.containment=this.helper[0].parentNode),("document"===n.containment||"window"===n.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===n.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===n.containment?this.document.width():this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(n.containment)||(t=e(n.containment)[0],i=e(n.containment).offset(),s="hidden"!==e(t).css("overflow"),this.containment=[i.left+(parseInt(e(t).css("borderLeftWidth"),10)||0)+(parseInt(e(t).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(e(t).css("borderTopWidth"),10)||0)+(parseInt(e(t).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(t.scrollWidth,t.offsetWidth):t.offsetWidth)-(parseInt(e(t).css("borderLeftWidth"),10)||0)-(parseInt(e(t).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(t.scrollHeight,t.offsetHeight):t.offsetHeight)-(parseInt(e(t).css("borderTopWidth"),10)||0)-(parseInt(e(t).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(t,i){i||(i=this.position);var s="absolute"===t?1:-1,n="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(n[0].tagName);return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():a?0:n.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():a?0:n.scrollLeft())*s}},_generatePosition:function(t){var i,s,n=this.options,a=t.pageX,o=t.pageY,r="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&e.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,h=/(html|body)/i.test(r[0].tagName);return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(t.pageX-this.offset.click.left<this.containment[0]&&(a=this.containment[0]+this.offset.click.left),t.pageY-this.offset.click.top<this.containment[1]&&(o=this.containment[1]+this.offset.click.top),t.pageX-this.offset.click.left>this.containment[2]&&(a=this.containment[2]+this.offset.click.left),t.pageY-this.offset.click.top>this.containment[3]&&(o=this.containment[3]+this.offset.click.top)),n.grid&&(i=this.originalPageY+Math.round((o-this.originalPageY)/n.grid[1])*n.grid[1],o=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-n.grid[1]:i+n.grid[1]:i,s=this.originalPageX+Math.round((a-this.originalPageX)/n.grid[0])*n.grid[0],a=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-n.grid[0]:s+n.grid[0]:s)),{top:o-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():h?0:r.scrollTop()),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():h?0:r.scrollLeft())}},_rearrange:function(e,t,i,s){i?i[0].appendChild(this.placeholder[0]):t.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?t.item[0]:t.item[0].nextSibling),this.counter=this.counter?++this.counter:1;var n=this.counter;this._delay(function(){n===this.counter&&this.refreshPositions(!s)})},_clear:function(e,t){function i(e,t,i){return function(s){i._trigger(e,s,t._uiHash(t))}}this.reverting=!1;var s,n=[];if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="");this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else this.currentItem.show();for(this.fromOutside&&!t&&n.push(function(e){this._trigger("receive",e,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||t||n.push(function(e){this._trigger("update",e,this._uiHash())}),this!==this.currentContainer&&(t||(n.push(function(e){this._trigger("remove",e,this._uiHash())}),n.push(function(e){return function(t){e._trigger("receive",t,this._uiHash(this))}}.call(this,this.currentContainer)),n.push(function(e){return function(t){e._trigger("update",t,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1;s>=0;s--)t||n.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(n.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0);if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,t||this._trigger("beforeStop",e,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!t){for(s=0;n.length>s;s++)n[s].call(this,e);this._trigger("stop",e,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){e.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(t){var i=t||this;return{helper:i.helper,placeholder:i.placeholder||e([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:t?t.element:null}}}),e.widget("ui.accordion",{version:"1.11.3",options:{active:0,animate:{},collapsible:!1,event:"click",header:"> li > :first-child,> :not(li):even",heightStyle:"auto",icons:{activeHeader:"ui-icon-triangle-1-s",header:"ui-icon-triangle-1-e"},activate:null,beforeActivate:null},hideProps:{borderTopWidth:"hide",borderBottomWidth:"hide",paddingTop:"hide",paddingBottom:"hide",height:"hide"},showProps:{borderTopWidth:"show",borderBottomWidth:"show",paddingTop:"show",paddingBottom:"show",height:"show"},_create:function(){var t=this.options;this.prevShow=this.prevHide=e(),this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role","tablist"),t.collapsible||t.active!==!1&&null!=t.active||(t.active=0),this._processPanels(),0>t.active&&(t.active+=this.headers.length),this._refresh()},_getCreateEventData:function(){return{header:this.active,panel:this.active.length?this.active.next():e()}},_createIcons:function(){var t=this.options.icons;t&&(e("<span>").addClass("ui-accordion-header-icon ui-icon "+t.header).prependTo(this.headers),this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader),this.headers.addClass("ui-accordion-icons"))},_destroyIcons:function(){this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()},_destroy:function(){var e;this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"),this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(),this._destroyIcons(),e=this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display","").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(),"content"!==this.options.heightStyle&&e.css("height","")},_setOption:function(e,t){return"active"===e?(this._activate(t),void 0):("event"===e&&(this.options.event&&this._off(this.headers,this.options.event),this._setupEvents(t)),this._super(e,t),"collapsible"!==e||t||this.options.active!==!1||this._activate(0),"icons"===e&&(this._destroyIcons(),t&&this._createIcons()),"disabled"===e&&(this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this.headers.add(this.headers.next()).toggleClass("ui-state-disabled",!!t)),void 0)},_keydown:function(t){if(!t.altKey&&!t.ctrlKey){var i=e.ui.keyCode,s=this.headers.length,n=this.headers.index(t.target),a=!1;switch(t.keyCode){case i.RIGHT:case i.DOWN:a=this.headers[(n+1)%s];break;case i.LEFT:case i.UP:a=this.headers[(n-1+s)%s];break;case i.SPACE:case i.ENTER:this._eventHandler(t);break;case i.HOME:a=this.headers[0];break;case i.END:a=this.headers[s-1]}a&&(e(t.target).attr("tabIndex",-1),e(a).attr("tabIndex",0),a.focus(),t.preventDefault())}},_panelKeyDown:function(t){t.keyCode===e.ui.keyCode.UP&&t.ctrlKey&&e(t.currentTarget).prev().focus()},refresh:function(){var t=this.options;this._processPanels(),t.active===!1&&t.collapsible===!0||!this.headers.length?(t.active=!1,this.active=e()):t.active===!1?this._activate(0):this.active.length&&!e.contains(this.element[0],this.active[0])?this.headers.length===this.headers.find(".ui-state-disabled").length?(t.active=!1,this.active=e()):this._activate(Math.max(0,t.active-1)):t.active=this.headers.index(this.active),this._destroyIcons(),this._refresh()},_processPanels:function(){var e=this.headers,t=this.panels;this.headers=this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"),this.panels=this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(),t&&(this._off(e.not(this.headers)),this._off(t.not(this.panels)))
},_refresh:function(){var t,i=this.options,s=i.heightStyle,n=this.element.parent();this.active=this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"),this.active.next().addClass("ui-accordion-content-active").show(),this.headers.attr("role","tab").each(function(){var t=e(this),i=t.uniqueId().attr("id"),s=t.next(),n=s.uniqueId().attr("id");t.attr("aria-controls",n),s.attr("aria-labelledby",i)}).next().attr("role","tabpanel"),this.headers.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}).next().attr({"aria-hidden":"true"}).hide(),this.active.length?this.active.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}).next().attr({"aria-hidden":"false"}):this.headers.eq(0).attr("tabIndex",0),this._createIcons(),this._setupEvents(i.event),"fill"===s?(t=n.height(),this.element.siblings(":visible").each(function(){var i=e(this),s=i.css("position");"absolute"!==s&&"fixed"!==s&&(t-=i.outerHeight(!0))}),this.headers.each(function(){t-=e(this).outerHeight(!0)}),this.headers.next().each(function(){e(this).height(Math.max(0,t-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===s&&(t=0,this.headers.next().each(function(){t=Math.max(t,e(this).css("height","").height())}).height(t))},_activate:function(t){var i=this._findActive(t)[0];i!==this.active[0]&&(i=i||this.active[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return"number"==typeof t?this.headers.eq(t):e()},_setupEvents:function(t){var i={keydown:"_keydown"};t&&e.each(t.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.headers.add(this.headers.next())),this._on(this.headers,i),this._on(this.headers.next(),{keydown:"_panelKeyDown"}),this._hoverable(this.headers),this._focusable(this.headers)},_eventHandler:function(t){var i=this.options,s=this.active,n=e(t.currentTarget),a=n[0]===s[0],o=a&&i.collapsible,r=o?e():n.next(),h=s.next(),l={oldHeader:s,oldPanel:h,newHeader:o?e():n,newPanel:r};t.preventDefault(),a&&!i.collapsible||this._trigger("beforeActivate",t,l)===!1||(i.active=o?!1:this.headers.index(n),this.active=a?e():n,this._toggle(l),s.removeClass("ui-accordion-header-active ui-state-active"),i.icons&&s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header),a||(n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"),i.icons&&n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader),n.next().addClass("ui-accordion-content-active")))},_toggle:function(t){var i=t.newPanel,s=this.prevShow.length?this.prevShow:t.oldPanel;this.prevShow.add(this.prevHide).stop(!0,!0),this.prevShow=i,this.prevHide=s,this.options.animate?this._animate(i,s,t):(s.hide(),i.show(),this._toggleComplete(t)),s.attr({"aria-hidden":"true"}),s.prev().attr({"aria-selected":"false","aria-expanded":"false"}),i.length&&s.length?s.prev().attr({tabIndex:-1,"aria-expanded":"false"}):i.length&&this.headers.filter(function(){return 0===parseInt(e(this).attr("tabIndex"),10)}).attr("tabIndex",-1),i.attr("aria-hidden","false").prev().attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_animate:function(e,t,i){var s,n,a,o=this,r=0,h=e.length&&(!t.length||e.index()<t.index()),l=this.options.animate||{},u=h&&l.down||l,d=function(){o._toggleComplete(i)};return"number"==typeof u&&(a=u),"string"==typeof u&&(n=u),n=n||u.easing||l.easing,a=a||u.duration||l.duration,t.length?e.length?(s=e.show().outerHeight(),t.animate(this.hideProps,{duration:a,easing:n,step:function(e,t){t.now=Math.round(e)}}),e.hide().animate(this.showProps,{duration:a,easing:n,complete:d,step:function(e,i){i.now=Math.round(e),"height"!==i.prop?r+=i.now:"content"!==o.options.heightStyle&&(i.now=Math.round(s-t.outerHeight()-r),r=0)}}),void 0):t.animate(this.hideProps,a,n,d):e.animate(this.showProps,a,n,d)},_toggleComplete:function(e){var t=e.oldPanel;t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"),t.length&&(t.parent()[0].className=t.parent()[0].className),this._trigger("activate",null,e)}}),e.widget("ui.menu",{version:"1.11.3",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-carat-1-e"},items:"> *",menus:"ul",position:{my:"left-1 top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass("ui-state-disabled").attr("aria-disabled","true"),this._on({"mousedown .ui-menu-item":function(e){e.preventDefault()},"click .ui-menu-item":function(t){var i=e(t.target);!this.mouseHandled&&i.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),i.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&e(this.document[0].activeElement).closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":function(t){if(!this.previousFilter){var i=e(t.currentTarget);i.siblings(".ui-state-active").removeClass("ui-state-active"),this.focus(t,i)}},mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(e,t){var i=this.active||this.element.find(this.options.items).eq(0);t||this.focus(e,i)},blur:function(t){this._delay(function(){e.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(e){this._closeOnDocumentClick(e)&&this.collapseAll(e),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(),this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function(){var t=e(this);t.data("ui-menu-submenu-carat")&&t.remove()}),this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")},_keydown:function(t){var i,s,n,a,o=!0;switch(t.keyCode){case e.ui.keyCode.PAGE_UP:this.previousPage(t);break;case e.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case e.ui.keyCode.HOME:this._move("first","first",t);break;case e.ui.keyCode.END:this._move("last","last",t);break;case e.ui.keyCode.UP:this.previous(t);break;case e.ui.keyCode.DOWN:this.next(t);break;case e.ui.keyCode.LEFT:this.collapse(t);break;case e.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case e.ui.keyCode.ENTER:case e.ui.keyCode.SPACE:this._activate(t);break;case e.ui.keyCode.ESCAPE:this.collapse(t);break;default:o=!1,s=this.previousFilter||"",n=String.fromCharCode(t.keyCode),a=!1,clearTimeout(this.filterTimer),n===s?a=!0:n=s+n,i=this._filterMenuItems(n),i=a&&-1!==i.index(this.active.next())?this.active.nextAll(".ui-menu-item"):i,i.length||(n=String.fromCharCode(t.keyCode),i=this._filterMenuItems(n)),i.length?(this.focus(t,i),this.previousFilter=n,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}o&&t.preventDefault()},_activate:function(e){this.active.is(".ui-state-disabled")||(this.active.is("[aria-haspopup='true']")?this.expand(e):this.select(e))},refresh:function(){var t,i,s=this,n=this.options.icons.submenu,a=this.element.find(this.options.menus);this.element.toggleClass("ui-menu-icons",!!this.element.find(".ui-icon").length),a.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=e(this),i=t.parent(),s=e("<span>").addClass("ui-menu-icon ui-icon "+n).data("ui-menu-submenu-carat",!0);i.attr("aria-haspopup","true").prepend(s),t.attr("aria-labelledby",i.attr("id"))}),t=a.add(this.element),i=t.find(this.options.items),i.not(".ui-menu-item").each(function(){var t=e(this);s._isDivider(t)&&t.addClass("ui-widget-content ui-menu-divider")}),i.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),i.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!e.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(e,t){"icons"===e&&this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this._super(e,t)},focus:function(e,t){var i,s;this.blur(e,e&&"focus"===e.type),this._scrollIntoView(t),this.active=t.first(),s=this.active.addClass("ui-state-focus").removeClass("ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",s.attr("id")),this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"),e&&"keydown"===e.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),i=t.children(".ui-menu"),i.length&&e&&/^mouse/.test(e.type)&&this._startOpening(i),this.activeMenu=t.parent(),this._trigger("focus",e,{item:t})},_scrollIntoView:function(t){var i,s,n,a,o,r;this._hasScroll()&&(i=parseFloat(e.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(e.css(this.activeMenu[0],"paddingTop"))||0,n=t.offset().top-this.activeMenu.offset().top-i-s,a=this.activeMenu.scrollTop(),o=this.activeMenu.height(),r=t.outerHeight(),0>n?this.activeMenu.scrollTop(a+n):n+r>o&&this.activeMenu.scrollTop(a+n-o+r))},blur:function(e,t){t||clearTimeout(this.timer),this.active&&(this.active.removeClass("ui-state-focus"),this.active=null,this._trigger("blur",e,{item:this.active}))},_startOpening:function(e){clearTimeout(this.timer),"true"===e.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(e)},this.delay))},_open:function(t){var i=e.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(i)},collapseAll:function(t,i){clearTimeout(this.timer),this.timer=this._delay(function(){var s=i?this.element:e(t&&t.target).closest(this.element.find(".ui-menu"));s.length||(s=this.element),this._close(s),this.blur(t),this.activeMenu=s},this.delay)},_close:function(e){e||(e=this.active?this.active.parent():this.element),e.find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")},_closeOnDocumentClick:function(t){return!e(t.target).closest(".ui-menu").length},_isDivider:function(e){return!/[^\-\u2014\u2013\s]/.test(e.text())},collapse:function(e){var t=this.active&&this.active.parent().closest(".ui-menu-item",this.element);t&&t.length&&(this._close(),this.focus(e,t))},expand:function(e){var t=this.active&&this.active.children(".ui-menu ").find(this.options.items).first();t&&t.length&&(this._open(t.parent()),this._delay(function(){this.focus(e,t)}))},next:function(e){this._move("next","first",e)},previous:function(e){this._move("prev","last",e)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_move:function(e,t,i){var s;this.active&&(s="first"===e||"last"===e?this.active["first"===e?"prevAll":"nextAll"](".ui-menu-item").eq(-1):this.active[e+"All"](".ui-menu-item").eq(0)),s&&s.length&&this.active||(s=this.activeMenu.find(this.options.items)[t]()),this.focus(i,s)},nextPage:function(t){var i,s,n;return this.active?(this.isLastItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.nextAll(".ui-menu-item").each(function(){return i=e(this),0>i.offset().top-s-n}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items)[this.active?"last":"first"]())),void 0):(this.next(t),void 0)},previousPage:function(t){var i,s,n;return this.active?(this.isFirstItem()||(this._hasScroll()?(s=this.active.offset().top,n=this.element.height(),this.active.prevAll(".ui-menu-item").each(function(){return i=e(this),i.offset().top-s+n>0}),this.focus(t,i)):this.focus(t,this.activeMenu.find(this.options.items).first())),void 0):(this.next(t),void 0)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||e(t.target).closest(".ui-menu-item");var i={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,i)},_filterMenuItems:function(t){var i=t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),s=RegExp("^"+i,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return s.test(e.trim(e(this).text()))})}}),e.widget("ui.autocomplete",{version:"1.11.3",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,_create:function(){var t,i,s,n=this.element[0].nodeName.toLowerCase(),a="textarea"===n,o="input"===n;this.isMultiLine=a?!0:o?!1:this.element.prop("isContentEditable"),this.valueMethod=this.element[a||o?"val":"text"],this.isNewMenu=!0,this.element.addClass("ui-autocomplete-input").attr("autocomplete","off"),this._on(this.element,{keydown:function(n){if(this.element.prop("readOnly"))return t=!0,s=!0,i=!0,void 0;t=!1,s=!1,i=!1;var a=e.ui.keyCode;switch(n.keyCode){case a.PAGE_UP:t=!0,this._move("previousPage",n);break;case a.PAGE_DOWN:t=!0,this._move("nextPage",n);break;case a.UP:t=!0,this._keyEvent("previous",n);break;case a.DOWN:t=!0,this._keyEvent("next",n);break;case a.ENTER:this.menu.active&&(t=!0,n.preventDefault(),this.menu.select(n));break;case a.TAB:this.menu.active&&this.menu.select(n);break;case a.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(n),n.preventDefault());break;default:i=!0,this._searchTimeout(n)}},keypress:function(s){if(t)return t=!1,(!this.isMultiLine||this.menu.element.is(":visible"))&&s.preventDefault(),void 0;if(!i){var n=e.ui.keyCode;switch(s.keyCode){case n.PAGE_UP:this._move("previousPage",s);break;case n.PAGE_DOWN:this._move("nextPage",s);break;case n.UP:this._keyEvent("previous",s);break;case n.DOWN:this._keyEvent("next",s)}}},input:function(e){return s?(s=!1,e.preventDefault(),void 0):(this._searchTimeout(e),void 0)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,void 0):(clearTimeout(this.searching),this.close(e),this._change(e),void 0)}}),this._initSource(),this.menu=e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({role:null}).hide().menu("instance"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault(),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur});var i=this.menu.element[0];e(t.target).closest(".ui-menu-item").length||this._delay(function(){var t=this;this.document.one("mousedown",function(s){s.target===t.element[0]||s.target===i||e.contains(i,s.target)||t.close()})})},menufocus:function(t,i){var s,n;return this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type))?(this.menu.blur(),this.document.one("mousemove",function(){e(t.target).trigger(t.originalEvent)}),void 0):(n=i.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",t,{item:n})&&t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(n.value),s=i.item.attr("aria-label")||n.value,s&&e.trim(s).length&&(this.liveRegion.children().hide(),e("<div>").text(s).appendTo(this.liveRegion)),void 0)},menuselect:function(e,t){var i=t.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==this.document[0].activeElement&&(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",e,{item:i})&&this._value(i.value),this.term=this._value(),this.close(e),this.selectedItem=i}}),this.liveRegion=e("<span>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(e,t){this._super(e,t),"source"===e&&this._initSource(),"appendTo"===e&&this.menu.element.appendTo(this._appendTo()),"disabled"===e&&t&&this.xhr&&this.xhr.abort()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_initSource:function(){var t,i,s=this;e.isArray(this.options.source)?(t=this.options.source,this.source=function(i,s){s(e.ui.autocomplete.filter(t,i.term))}):"string"==typeof this.options.source?(i=this.options.source,this.source=function(t,n){s.xhr&&s.xhr.abort(),s.xhr=e.ajax({url:i,data:t,dataType:"json",success:function(e){n(e)},error:function(){n([])}})}):this.source=this.options.source},_searchTimeout:function(e){clearTimeout(this.searching),this.searching=this._delay(function(){var t=this.term===this._value(),i=this.menu.element.is(":visible"),s=e.altKey||e.ctrlKey||e.metaKey||e.shiftKey;(!t||t&&!i&&!s)&&(this.selectedItem=null,this.search(null,e))},this.options.delay)},search:function(e,t){return e=null!=e?e:this._value(),this.term=this._value(),e.length<this.options.minLength?this.close(t):this._trigger("search",t)!==!1?this._search(e):void 0},_search:function(e){this.pending++,this.element.addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:e},this._response())},_response:function(){var t=++this.requestIndex;return e.proxy(function(e){t===this.requestIndex&&this.__response(e),this.pending--,this.pending||this.element.removeClass("ui-autocomplete-loading")},this)},__response:function(e){e&&(e=this._normalize(e)),this._trigger("response",null,{content:e}),!this.options.disabled&&e&&e.length&&!this.cancelSearch?(this._suggest(e),this._trigger("open")):this._close()},close:function(e){this.cancelSearch=!0,this._close(e)},_close:function(e){this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",e))},_change:function(e){this.previous!==this._value()&&this._trigger("change",e,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:e.map(t,function(t){return"string"==typeof t?{label:t,value:t}:e.extend({},t,{label:t.label||t.value,value:t.value||t.label})})},_suggest:function(t){var i=this.menu.element.empty();this._renderMenu(i,t),this.isNewMenu=!0,this.menu.refresh(),i.show(),this._resizeMenu(),i.position(e.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next()},_resizeMenu:function(){var e=this.menu.element;e.outerWidth(Math.max(e.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(t,i){var s=this;e.each(i,function(e,i){s._renderItemData(t,i)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-autocomplete-item",t)},_renderItem:function(t,i){return e("<li>").text(i.label).appendTo(t)},_move:function(e,t){return this.menu.element.is(":visible")?this.menu.isFirstItem()&&/^previous/.test(e)||this.menu.isLastItem()&&/^next/.test(e)?(this.isMultiLine||this._value(this.term),this.menu.blur(),void 0):(this.menu[e](t),void 0):(this.search(null,t),void 0)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(e,t){(!this.isMultiLine||this.menu.element.is(":visible"))&&(this._move(e,t),t.preventDefault())}}),e.extend(e.ui.autocomplete,{escapeRegex:function(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,i){var s=RegExp(e.ui.autocomplete.escapeRegex(i),"i");return e.grep(t,function(e){return s.test(e.label||e.value||e)})}}),e.widget("ui.autocomplete",e.ui.autocomplete,{options:{messages:{noResults:"Nenhum Item Encontrado",results:function(e){return e+(e>1?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var i;this._superApply(arguments),this.options.disabled||this.cancelSearch||(i=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,this.liveRegion.children().hide(),e("<div>").text(i).appendTo(this.liveRegion))}}),e.ui.autocomplete;var c,p="ui-button ui-widget ui-state-default ui-corner-all",f="ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",m=function(){var t=e(this);setTimeout(function(){t.find(":ui-button").button("refresh")},1)},g=function(t){var i=t.name,s=t.form,n=e([]);return i&&(i=i.replace(/'/g,"\\'"),n=s?e(s).find("[name='"+i+"'][type=radio]"):e("[name='"+i+"'][type=radio]",t.ownerDocument).filter(function(){return!this.form})),n};e.widget("ui.button",{version:"1.11.3",defaultElement:"<button>",options:{disabled:null,text:!0,label:null,icons:{primary:null,secondary:null}},_create:function(){this.element.closest("form").unbind("reset"+this.eventNamespace).bind("reset"+this.eventNamespace,m),"boolean"!=typeof this.options.disabled?this.options.disabled=!!this.element.prop("disabled"):this.element.prop("disabled",this.options.disabled),this._determineButtonType(),this.hasTitle=!!this.buttonElement.attr("title");var t=this,i=this.options,s="checkbox"===this.type||"radio"===this.type,n=s?"":"ui-state-active";null===i.label&&(i.label="input"===this.type?this.buttonElement.val():this.buttonElement.html()),this._hoverable(this.buttonElement),this.buttonElement.addClass(p).attr("role","button").bind("mouseenter"+this.eventNamespace,function(){i.disabled||this===c&&e(this).addClass("ui-state-active")}).bind("mouseleave"+this.eventNamespace,function(){i.disabled||e(this).removeClass(n)}).bind("click"+this.eventNamespace,function(e){i.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}),this._on({focus:function(){this.buttonElement.addClass("ui-state-focus")},blur:function(){this.buttonElement.removeClass("ui-state-focus")}}),s&&this.element.bind("change"+this.eventNamespace,function(){t.refresh()}),"checkbox"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){return i.disabled?!1:void 0}):"radio"===this.type?this.buttonElement.bind("click"+this.eventNamespace,function(){if(i.disabled)return!1;e(this).addClass("ui-state-active"),t.buttonElement.attr("aria-pressed","true");var s=t.element[0];g(s).not(s).map(function(){return e(this).button("widget")[0]}).removeClass("ui-state-active").attr("aria-pressed","false")}):(this.buttonElement.bind("mousedown"+this.eventNamespace,function(){return i.disabled?!1:(e(this).addClass("ui-state-active"),c=this,t.document.one("mouseup",function(){c=null}),void 0)}).bind("mouseup"+this.eventNamespace,function(){return i.disabled?!1:(e(this).removeClass("ui-state-active"),void 0)}).bind("keydown"+this.eventNamespace,function(t){return i.disabled?!1:((t.keyCode===e.ui.keyCode.SPACE||t.keyCode===e.ui.keyCode.ENTER)&&e(this).addClass("ui-state-active"),void 0)}).bind("keyup"+this.eventNamespace+" blur"+this.eventNamespace,function(){e(this).removeClass("ui-state-active")}),this.buttonElement.is("a")&&this.buttonElement.keyup(function(t){t.keyCode===e.ui.keyCode.SPACE&&e(this).click()})),this._setOption("disabled",i.disabled),this._resetButton()},_determineButtonType:function(){var e,t,i;this.type=this.element.is("[type=checkbox]")?"checkbox":this.element.is("[type=radio]")?"radio":this.element.is("input")?"input":"button","checkbox"===this.type||"radio"===this.type?(e=this.element.parents().last(),t="label[for='"+this.element.attr("id")+"']",this.buttonElement=e.find(t),this.buttonElement.length||(e=e.length?e.siblings():this.element.siblings(),this.buttonElement=e.filter(t),this.buttonElement.length||(this.buttonElement=e.find(t))),this.element.addClass("ui-helper-hidden-accessible"),i=this.element.is(":checked"),i&&this.buttonElement.addClass("ui-state-active"),this.buttonElement.prop("aria-pressed",i)):this.buttonElement=this.element},widget:function(){return this.buttonElement},_destroy:function(){this.element.removeClass("ui-helper-hidden-accessible"),this.buttonElement.removeClass(p+" ui-state-active "+f).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()),this.hasTitle||this.buttonElement.removeAttr("title")},_setOption:function(e,t){return this._super(e,t),"disabled"===e?(this.widget().toggleClass("ui-state-disabled",!!t),this.element.prop("disabled",!!t),t&&("checkbox"===this.type||"radio"===this.type?this.buttonElement.removeClass("ui-state-focus"):this.buttonElement.removeClass("ui-state-focus ui-state-active")),void 0):(this._resetButton(),void 0)},refresh:function(){var t=this.element.is("input, button")?this.element.is(":disabled"):this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOption("disabled",t),"radio"===this.type?g(this.element[0]).each(function(){e(this).is(":checked")?e(this).button("widget").addClass("ui-state-active").attr("aria-pressed","true"):e(this).button("widget").removeClass("ui-state-active").attr("aria-pressed","false")}):"checkbox"===this.type&&(this.element.is(":checked")?this.buttonElement.addClass("ui-state-active").attr("aria-pressed","true"):this.buttonElement.removeClass("ui-state-active").attr("aria-pressed","false"))},_resetButton:function(){if("input"===this.type)return this.options.label&&this.element.val(this.options.label),void 0;var t=this.buttonElement.removeClass(f),i=e("<span></span>",this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(t.empty()).text(),s=this.options.icons,n=s.primary&&s.secondary,a=[];s.primary||s.secondary?(this.options.text&&a.push("ui-button-text-icon"+(n?"s":s.primary?"-primary":"-secondary")),s.primary&&t.prepend("<span class='ui-button-icon-primary ui-icon "+s.primary+"'></span>"),s.secondary&&t.append("<span class='ui-button-icon-secondary ui-icon "+s.secondary+"'></span>"),this.options.text||(a.push(n?"ui-button-icons-only":"ui-button-icon-only"),this.hasTitle||t.attr("title",e.trim(i)))):a.push("ui-button-text-only"),t.addClass(a.join(" "))}}),e.widget("ui.buttonset",{version:"1.11.3",options:{items:"button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"},_create:function(){this.element.addClass("ui-buttonset")},_init:function(){this.refresh()},_setOption:function(e,t){"disabled"===e&&this.buttons.button("option",e,t),this._super(e,t)},refresh:function(){var t="rtl"===this.element.css("direction"),i=this.element.find(this.options.items),s=i.filter(":ui-button");i.not(":ui-button").button(),s.button("refresh"),this.buttons=i.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(t?"ui-corner-right":"ui-corner-left").end().filter(":last").addClass(t?"ui-corner-left":"ui-corner-right").end().end()},_destroy:function(){this.element.removeClass("ui-buttonset"),this.buttons.map(function(){return e(this).button("widget")[0]}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")}}),e.ui.button,e.extend(e.ui,{datepicker:{version:"1.11.3"}});var v;e.extend(n.prototype,{markerClassName:"hasDatepicker",maxRows:4,_widgetDatepicker:function(){return this.dpDiv},setDefaults:function(e){return r(this._defaults,e||{}),this},_attachDatepicker:function(t,i){var s,n,a;s=t.nodeName.toLowerCase(),n="div"===s||"span"===s,t.id||(this.uuid+=1,t.id="dp"+this.uuid),a=this._newInst(e(t),n),a.settings=e.extend({},i||{}),"input"===s?this._connectDatepicker(t,a):n&&this._inlineDatepicker(t,a)},_newInst:function(t,i){var s=t[0].id.replace(/([^A-Za-z0-9_\-])/g,"\\\\$1");return{id:s,input:t,selectedDay:0,selectedMonth:0,selectedYear:0,drawMonth:0,drawYear:0,inline:i,dpDiv:i?a(e("<div class='"+this._inlineClass+" ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")):this.dpDiv}},_connectDatepicker:function(t,i){var s=e(t);i.append=e([]),i.trigger=e([]),s.hasClass(this.markerClassName)||(this._attachments(s,i),s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp),this._autoSize(i),e.data(t,"datepicker",i),i.settings.disabled&&this._disableDatepicker(t))},_attachments:function(t,i){var s,n,a,o=this._get(i,"appendText"),r=this._get(i,"isRTL");i.append&&i.append.remove(),o&&(i.append=e("<span class='"+this._appendClass+"'>"+o+"</span>"),t[r?"before":"after"](i.append)),t.unbind("focus",this._showDatepicker),i.trigger&&i.trigger.remove(),s=this._get(i,"showOn"),("focus"===s||"both"===s)&&t.focus(this._showDatepicker),("button"===s||"both"===s)&&(n=this._get(i,"buttonText"),a=this._get(i,"buttonImage"),i.trigger=e(this._get(i,"buttonImageOnly")?e("<img/>").addClass(this._triggerClass).attr({src:a,alt:n,title:n}):e("<button type='button'></button>").addClass(this._triggerClass).html(a?e("<img/>").attr({src:a,alt:n,title:n}):n)),t[r?"before":"after"](i.trigger),i.trigger.click(function(){return e.datepicker._datepickerShowing&&e.datepicker._lastInput===t[0]?e.datepicker._hideDatepicker():e.datepicker._datepickerShowing&&e.datepicker._lastInput!==t[0]?(e.datepicker._hideDatepicker(),e.datepicker._showDatepicker(t[0])):e.datepicker._showDatepicker(t[0]),!1}))},_autoSize:function(e){if(this._get(e,"autoSize")&&!e.inline){var t,i,s,n,a=new Date(2009,11,20),o=this._get(e,"dateFormat");o.match(/[DM]/)&&(t=function(e){for(i=0,s=0,n=0;e.length>n;n++)e[n].length>i&&(i=e[n].length,s=n);return s},a.setMonth(t(this._get(e,o.match(/MM/)?"monthNames":"monthNamesShort"))),a.setDate(t(this._get(e,o.match(/DD/)?"dayNames":"dayNamesShort"))+20-a.getDay())),e.input.attr("size",this._formatDate(e,a).length)}},_inlineDatepicker:function(t,i){var s=e(t);s.hasClass(this.markerClassName)||(s.addClass(this.markerClassName).append(i.dpDiv),e.data(t,"datepicker",i),this._setDate(i,this._getDefaultDate(i),!0),this._updateDatepicker(i),this._updateAlternate(i),i.settings.disabled&&this._disableDatepicker(t),i.dpDiv.css("display","block"))},_dialogDatepicker:function(t,i,s,n,a){var o,h,l,u,d,c=this._dialogInst;return c||(this.uuid+=1,o="dp"+this.uuid,this._dialogInput=e("<input type='text' id='"+o+"' style='position: absolute; top: -100px; width: 0px;'/>"),this._dialogInput.keydown(this._doKeyDown),e("body").append(this._dialogInput),c=this._dialogInst=this._newInst(this._dialogInput,!1),c.settings={},e.data(this._dialogInput[0],"datepicker",c)),r(c.settings,n||{}),i=i&&i.constructor===Date?this._formatDate(c,i):i,this._dialogInput.val(i),this._pos=a?a.length?a:[a.pageX,a.pageY]:null,this._pos||(h=document.documentElement.clientWidth,l=document.documentElement.clientHeight,u=document.documentElement.scrollLeft||document.body.scrollLeft,d=document.documentElement.scrollTop||document.body.scrollTop,this._pos=[h/2-100+u,l/2-150+d]),this._dialogInput.css("left",this._pos[0]+20+"px").css("top",this._pos[1]+"px"),c.settings.onSelect=s,this._inDialog=!0,this.dpDiv.addClass(this._dialogClass),this._showDatepicker(this._dialogInput[0]),e.blockUI&&e.blockUI(this.dpDiv),e.data(this._dialogInput[0],"datepicker",c),this
},_destroyDatepicker:function(t){var i,s=e(t),n=e.data(t,"datepicker");s.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),e.removeData(t,"datepicker"),"input"===i?(n.append.remove(),n.trigger.remove(),s.removeClass(this.markerClassName).unbind("focus",this._showDatepicker).unbind("keydown",this._doKeyDown).unbind("keypress",this._doKeyPress).unbind("keyup",this._doKeyUp)):("div"===i||"span"===i)&&s.removeClass(this.markerClassName).empty(),v===n&&(v=null))},_enableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!1,a.trigger.filter("button").each(function(){this.disabled=!1}).end().filter("img").css({opacity:"1.0",cursor:""})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().removeClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!1)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}))},_disableDatepicker:function(t){var i,s,n=e(t),a=e.data(t,"datepicker");n.hasClass(this.markerClassName)&&(i=t.nodeName.toLowerCase(),"input"===i?(t.disabled=!0,a.trigger.filter("button").each(function(){this.disabled=!0}).end().filter("img").css({opacity:"0.5",cursor:"default"})):("div"===i||"span"===i)&&(s=n.children("."+this._inlineClass),s.children().addClass("ui-state-disabled"),s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled",!0)),this._disabledInputs=e.map(this._disabledInputs,function(e){return e===t?null:e}),this._disabledInputs[this._disabledInputs.length]=t)},_isDisabledDatepicker:function(e){if(!e)return!1;for(var t=0;this._disabledInputs.length>t;t++)if(this._disabledInputs[t]===e)return!0;return!1},_getInst:function(t){try{return e.data(t,"datepicker")}catch(i){throw"Missing instance data for this datepicker"}},_optionDatepicker:function(t,i,s){var n,a,o,h,l=this._getInst(t);return 2===arguments.length&&"string"==typeof i?"defaults"===i?e.extend({},e.datepicker._defaults):l?"all"===i?e.extend({},l.settings):this._get(l,i):null:(n=i||{},"string"==typeof i&&(n={},n[i]=s),l&&(this._curInst===l&&this._hideDatepicker(),a=this._getDateDatepicker(t,!0),o=this._getMinMaxDate(l,"min"),h=this._getMinMaxDate(l,"max"),r(l.settings,n),null!==o&&void 0!==n.dateFormat&&void 0===n.minDate&&(l.settings.minDate=this._formatDate(l,o)),null!==h&&void 0!==n.dateFormat&&void 0===n.maxDate&&(l.settings.maxDate=this._formatDate(l,h)),"disabled"in n&&(n.disabled?this._disableDatepicker(t):this._enableDatepicker(t)),this._attachments(e(t),l),this._autoSize(l),this._setDate(l,a),this._updateAlternate(l),this._updateDatepicker(l)),void 0)},_changeDatepicker:function(e,t,i){this._optionDatepicker(e,t,i)},_refreshDatepicker:function(e){var t=this._getInst(e);t&&this._updateDatepicker(t)},_setDateDatepicker:function(e,t){var i=this._getInst(e);i&&(this._setDate(i,t),this._updateDatepicker(i),this._updateAlternate(i))},_getDateDatepicker:function(e,t){var i=this._getInst(e);return i&&!i.inline&&this._setDateFromField(i,t),i?this._getDate(i):null},_doKeyDown:function(t){var i,s,n,a=e.datepicker._getInst(t.target),o=!0,r=a.dpDiv.is(".ui-datepicker-rtl");if(a._keyEvent=!0,e.datepicker._datepickerShowing)switch(t.keyCode){case 9:e.datepicker._hideDatepicker(),o=!1;break;case 13:return n=e("td."+e.datepicker._dayOverClass+":not(."+e.datepicker._currentClass+")",a.dpDiv),n[0]&&e.datepicker._selectDay(t.target,a.selectedMonth,a.selectedYear,n[0]),i=e.datepicker._get(a,"onSelect"),i?(s=e.datepicker._formatDate(a),i.apply(a.input?a.input[0]:null,[s,a])):e.datepicker._hideDatepicker(),!1;case 27:e.datepicker._hideDatepicker();break;case 33:e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 34:e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 35:(t.ctrlKey||t.metaKey)&&e.datepicker._clearDate(t.target),o=t.ctrlKey||t.metaKey;break;case 36:(t.ctrlKey||t.metaKey)&&e.datepicker._gotoToday(t.target),o=t.ctrlKey||t.metaKey;break;case 37:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?1:-1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?-e.datepicker._get(a,"stepBigMonths"):-e.datepicker._get(a,"stepMonths"),"M");break;case 38:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,-7,"D"),o=t.ctrlKey||t.metaKey;break;case 39:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,r?-1:1,"D"),o=t.ctrlKey||t.metaKey,t.originalEvent.altKey&&e.datepicker._adjustDate(t.target,t.ctrlKey?+e.datepicker._get(a,"stepBigMonths"):+e.datepicker._get(a,"stepMonths"),"M");break;case 40:(t.ctrlKey||t.metaKey)&&e.datepicker._adjustDate(t.target,7,"D"),o=t.ctrlKey||t.metaKey;break;default:o=!1}else 36===t.keyCode&&t.ctrlKey?e.datepicker._showDatepicker(this):o=!1;o&&(t.preventDefault(),t.stopPropagation())},_doKeyPress:function(t){var i,s,n=e.datepicker._getInst(t.target);return e.datepicker._get(n,"constrainInput")?(i=e.datepicker._possibleChars(e.datepicker._get(n,"dateFormat")),s=String.fromCharCode(null==t.charCode?t.keyCode:t.charCode),t.ctrlKey||t.metaKey||" ">s||!i||i.indexOf(s)>-1):void 0},_doKeyUp:function(t){var i,s=e.datepicker._getInst(t.target);if(s.input.val()!==s.lastVal)try{i=e.datepicker.parseDate(e.datepicker._get(s,"dateFormat"),s.input?s.input.val():null,e.datepicker._getFormatConfig(s)),i&&(e.datepicker._setDateFromField(s),e.datepicker._updateAlternate(s),e.datepicker._updateDatepicker(s))}catch(n){}return!0},_showDatepicker:function(t){if(t=t.target||t,"input"!==t.nodeName.toLowerCase()&&(t=e("input",t.parentNode)[0]),!e.datepicker._isDisabledDatepicker(t)&&e.datepicker._lastInput!==t){var i,n,a,o,h,l,u;i=e.datepicker._getInst(t),e.datepicker._curInst&&e.datepicker._curInst!==i&&(e.datepicker._curInst.dpDiv.stop(!0,!0),i&&e.datepicker._datepickerShowing&&e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])),n=e.datepicker._get(i,"beforeShow"),a=n?n.apply(t,[t,i]):{},a!==!1&&(r(i.settings,a),i.lastVal=null,e.datepicker._lastInput=t,e.datepicker._setDateFromField(i),e.datepicker._inDialog&&(t.value=""),e.datepicker._pos||(e.datepicker._pos=e.datepicker._findPos(t),e.datepicker._pos[1]+=t.offsetHeight),o=!1,e(t).parents().each(function(){return o|="fixed"===e(this).css("position"),!o}),h={left:e.datepicker._pos[0],top:e.datepicker._pos[1]},e.datepicker._pos=null,i.dpDiv.empty(),i.dpDiv.css({position:"absolute",display:"block",top:"-1000px"}),e.datepicker._updateDatepicker(i),h=e.datepicker._checkOffset(i,h,o),i.dpDiv.css({position:e.datepicker._inDialog&&e.blockUI?"static":o?"fixed":"absolute",display:"none",left:h.left+"px",top:h.top+"px"}),i.inline||(l=e.datepicker._get(i,"showAnim"),u=e.datepicker._get(i,"duration"),i.dpDiv.css("z-index",s(e(t))+1),e.datepicker._datepickerShowing=!0,e.effects&&e.effects.effect[l]?i.dpDiv.show(l,e.datepicker._get(i,"showOptions"),u):i.dpDiv[l||"show"](l?u:null),e.datepicker._shouldFocusInput(i)&&i.input.focus(),e.datepicker._curInst=i))}},_updateDatepicker:function(t){this.maxRows=4,v=t,t.dpDiv.empty().append(this._generateHTML(t)),this._attachHandlers(t);var i,s=this._getNumberOfMonths(t),n=s[1],a=17,r=t.dpDiv.find("."+this._dayOverClass+" a");r.length>0&&o.apply(r.get(0)),t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""),n>1&&t.dpDiv.addClass("ui-datepicker-multi-"+n).css("width",a*n+"em"),t.dpDiv[(1!==s[0]||1!==s[1]?"add":"remove")+"Class"]("ui-datepicker-multi"),t.dpDiv[(this._get(t,"isRTL")?"add":"remove")+"Class"]("ui-datepicker-rtl"),t===e.datepicker._curInst&&e.datepicker._datepickerShowing&&e.datepicker._shouldFocusInput(t)&&t.input.focus(),t.yearshtml&&(i=t.yearshtml,setTimeout(function(){i===t.yearshtml&&t.yearshtml&&t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml),i=t.yearshtml=null},0))},_shouldFocusInput:function(e){return e.input&&e.input.is(":visible")&&!e.input.is(":disabled")&&!e.input.is(":focus")},_checkOffset:function(t,i,s){var n=t.dpDiv.outerWidth(),a=t.dpDiv.outerHeight(),o=t.input?t.input.outerWidth():0,r=t.input?t.input.outerHeight():0,h=document.documentElement.clientWidth+(s?0:e(document).scrollLeft()),l=document.documentElement.clientHeight+(s?0:e(document).scrollTop());return i.left-=this._get(t,"isRTL")?n-o:0,i.left-=s&&i.left===t.input.offset().left?e(document).scrollLeft():0,i.top-=s&&i.top===t.input.offset().top+r?e(document).scrollTop():0,i.left-=Math.min(i.left,i.left+n>h&&h>n?Math.abs(i.left+n-h):0),i.top-=Math.min(i.top,i.top+a>l&&l>a?Math.abs(a+r):0),i},_findPos:function(t){for(var i,s=this._getInst(t),n=this._get(s,"isRTL");t&&("hidden"===t.type||1!==t.nodeType||e.expr.filters.hidden(t));)t=t[n?"previousSibling":"nextSibling"];return i=e(t).offset(),[i.left,i.top]},_hideDatepicker:function(t){var i,s,n,a,o=this._curInst;!o||t&&o!==e.data(t,"datepicker")||this._datepickerShowing&&(i=this._get(o,"showAnim"),s=this._get(o,"duration"),n=function(){e.datepicker._tidyDialog(o)},e.effects&&(e.effects.effect[i]||e.effects[i])?o.dpDiv.hide(i,e.datepicker._get(o,"showOptions"),s,n):o.dpDiv["slideDown"===i?"slideUp":"fadeIn"===i?"fadeOut":"hide"](i?s:null,n),i||n(),this._datepickerShowing=!1,a=this._get(o,"onClose"),a&&a.apply(o.input?o.input[0]:null,[o.input?o.input.val():"",o]),this._lastInput=null,this._inDialog&&(this._dialogInput.css({position:"absolute",left:"0",top:"-100px"}),e.blockUI&&(e.unblockUI(),e("body").append(this.dpDiv))),this._inDialog=!1)},_tidyDialog:function(e){e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")},_checkExternalClick:function(t){if(e.datepicker._curInst){var i=e(t.target),s=e.datepicker._getInst(i[0]);(i[0].id!==e.datepicker._mainDivId&&0===i.parents("#"+e.datepicker._mainDivId).length&&!i.hasClass(e.datepicker.markerClassName)&&!i.closest("."+e.datepicker._triggerClass).length&&e.datepicker._datepickerShowing&&(!e.datepicker._inDialog||!e.blockUI)||i.hasClass(e.datepicker.markerClassName)&&e.datepicker._curInst!==s)&&e.datepicker._hideDatepicker()}},_adjustDate:function(t,i,s){var n=e(t),a=this._getInst(n[0]);this._isDisabledDatepicker(n[0])||(this._adjustInstDate(a,i+("M"===s?this._get(a,"showCurrentAtPos"):0),s),this._updateDatepicker(a))},_gotoToday:function(t){var i,s=e(t),n=this._getInst(s[0]);this._get(n,"gotoCurrent")&&n.currentDay?(n.selectedDay=n.currentDay,n.drawMonth=n.selectedMonth=n.currentMonth,n.drawYear=n.selectedYear=n.currentYear):(i=new Date,n.selectedDay=i.getDate(),n.drawMonth=n.selectedMonth=i.getMonth(),n.drawYear=n.selectedYear=i.getFullYear()),this._notifyChange(n),this._adjustDate(s)},_selectMonthYear:function(t,i,s){var n=e(t),a=this._getInst(n[0]);a["selected"+("M"===s?"Month":"Year")]=a["draw"+("M"===s?"Month":"Year")]=parseInt(i.options[i.selectedIndex].value,10),this._notifyChange(a),this._adjustDate(n)},_selectDay:function(t,i,s,n){var a,o=e(t);e(n).hasClass(this._unselectableClass)||this._isDisabledDatepicker(o[0])||(a=this._getInst(o[0]),a.selectedDay=a.currentDay=e("a",n).html(),a.selectedMonth=a.currentMonth=i,a.selectedYear=a.currentYear=s,this._selectDate(t,this._formatDate(a,a.currentDay,a.currentMonth,a.currentYear)))},_clearDate:function(t){var i=e(t);this._selectDate(i,"")},_selectDate:function(t,i){var s,n=e(t),a=this._getInst(n[0]);i=null!=i?i:this._formatDate(a),a.input&&a.input.val(i),this._updateAlternate(a),s=this._get(a,"onSelect"),s?s.apply(a.input?a.input[0]:null,[i,a]):a.input&&a.input.trigger("change"),a.inline?this._updateDatepicker(a):(this._hideDatepicker(),this._lastInput=a.input[0],"object"!=typeof a.input[0]&&a.input.focus(),this._lastInput=null)},_updateAlternate:function(t){var i,s,n,a=this._get(t,"altField");a&&(i=this._get(t,"altFormat")||this._get(t,"dateFormat"),s=this._getDate(t),n=this.formatDate(i,s,this._getFormatConfig(t)),e(a).each(function(){e(this).val(n)}))},noWeekends:function(e){var t=e.getDay();return[t>0&&6>t,""]},iso8601Week:function(e){var t,i=new Date(e.getTime());return i.setDate(i.getDate()+4-(i.getDay()||7)),t=i.getTime(),i.setMonth(0),i.setDate(1),Math.floor(Math.round((t-i)/864e5)/7)+1},parseDate:function(t,i,s){if(null==t||null==i)throw"Invalid arguments";if(i="object"==typeof i?""+i:i+"",""===i)return null;var n,a,o,r,h=0,l=(s?s.shortYearCutoff:null)||this._defaults.shortYearCutoff,u="string"!=typeof l?l:(new Date).getFullYear()%100+parseInt(l,10),d=(s?s.dayNamesShort:null)||this._defaults.dayNamesShort,c=(s?s.dayNames:null)||this._defaults.dayNames,p=(s?s.monthNamesShort:null)||this._defaults.monthNamesShort,f=(s?s.monthNames:null)||this._defaults.monthNames,m=-1,g=-1,v=-1,y=-1,b=!1,_=function(e){var i=t.length>n+1&&t.charAt(n+1)===e;return i&&n++,i},x=function(e){var t=_(e),s="@"===e?14:"!"===e?20:"y"===e&&t?4:"o"===e?3:2,n="y"===e?s:1,a=RegExp("^\\d{"+n+","+s+"}"),o=i.substring(h).match(a);if(!o)throw"Missing number at position "+h;return h+=o[0].length,parseInt(o[0],10)},w=function(t,s,n){var a=-1,o=e.map(_(t)?n:s,function(e,t){return[[t,e]]}).sort(function(e,t){return-(e[1].length-t[1].length)});if(e.each(o,function(e,t){var s=t[1];return i.substr(h,s.length).toLowerCase()===s.toLowerCase()?(a=t[0],h+=s.length,!1):void 0}),-1!==a)return a+1;throw"Unknown name at position "+h},k=function(){if(i.charAt(h)!==t.charAt(n))throw"Unexpected literal at position "+h;h++};for(n=0;t.length>n;n++)if(b)"'"!==t.charAt(n)||_("'")?k():b=!1;else switch(t.charAt(n)){case"d":v=x("d");break;case"D":w("D",d,c);break;case"o":y=x("o");break;case"m":g=x("m");break;case"M":g=w("M",p,f);break;case"y":m=x("y");break;case"@":r=new Date(x("@")),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"!":r=new Date((x("!")-this._ticksTo1970)/1e4),m=r.getFullYear(),g=r.getMonth()+1,v=r.getDate();break;case"'":_("'")?k():b=!0;break;default:k()}if(i.length>h&&(o=i.substr(h),!/^\s+/.test(o)))throw"Extra/unparsed characters found in date: "+o;if(-1===m?m=(new Date).getFullYear():100>m&&(m+=(new Date).getFullYear()-(new Date).getFullYear()%100+(u>=m?0:-100)),y>-1)for(g=1,v=y;;){if(a=this._getDaysInMonth(m,g-1),a>=v)break;g++,v-=a}if(r=this._daylightSavingAdjust(new Date(m,g-1,v)),r.getFullYear()!==m||r.getMonth()+1!==g||r.getDate()!==v)throw"Invalid date";return r},ATOM:"yy-mm-dd",COOKIE:"D, dd M yy",ISO_8601:"yy-mm-dd",RFC_822:"D, d M y",RFC_850:"DD, dd-M-y",RFC_1036:"D, d M y",RFC_1123:"D, d M yy",RFC_2822:"D, d M yy",RSS:"D, d M y",TICKS:"!",TIMESTAMP:"@",W3C:"yy-mm-dd",_ticksTo1970:1e7*60*60*24*(718685+Math.floor(492.5)-Math.floor(19.7)+Math.floor(4.925)),formatDate:function(e,t,i){if(!t)return"";var s,n=(i?i.dayNamesShort:null)||this._defaults.dayNamesShort,a=(i?i.dayNames:null)||this._defaults.dayNames,o=(i?i.monthNamesShort:null)||this._defaults.monthNamesShort,r=(i?i.monthNames:null)||this._defaults.monthNames,h=function(t){var i=e.length>s+1&&e.charAt(s+1)===t;return i&&s++,i},l=function(e,t,i){var s=""+t;if(h(e))for(;i>s.length;)s="0"+s;return s},u=function(e,t,i,s){return h(e)?s[t]:i[t]},d="",c=!1;if(t)for(s=0;e.length>s;s++)if(c)"'"!==e.charAt(s)||h("'")?d+=e.charAt(s):c=!1;else switch(e.charAt(s)){case"d":d+=l("d",t.getDate(),2);break;case"D":d+=u("D",t.getDay(),n,a);break;case"o":d+=l("o",Math.round((new Date(t.getFullYear(),t.getMonth(),t.getDate()).getTime()-new Date(t.getFullYear(),0,0).getTime())/864e5),3);break;case"m":d+=l("m",t.getMonth()+1,2);break;case"M":d+=u("M",t.getMonth(),o,r);break;case"y":d+=h("y")?t.getFullYear():(10>t.getYear()%100?"0":"")+t.getYear()%100;break;case"@":d+=t.getTime();break;case"!":d+=1e4*t.getTime()+this._ticksTo1970;break;case"'":h("'")?d+="'":c=!0;break;default:d+=e.charAt(s)}return d},_possibleChars:function(e){var t,i="",s=!1,n=function(i){var s=e.length>t+1&&e.charAt(t+1)===i;return s&&t++,s};for(t=0;e.length>t;t++)if(s)"'"!==e.charAt(t)||n("'")?i+=e.charAt(t):s=!1;else switch(e.charAt(t)){case"d":case"m":case"y":case"@":i+="0123456789";break;case"D":case"M":return null;case"'":n("'")?i+="'":s=!0;break;default:i+=e.charAt(t)}return i},_get:function(e,t){return void 0!==e.settings[t]?e.settings[t]:this._defaults[t]},_setDateFromField:function(e,t){if(e.input.val()!==e.lastVal){var i=this._get(e,"dateFormat"),s=e.lastVal=e.input?e.input.val():null,n=this._getDefaultDate(e),a=n,o=this._getFormatConfig(e);try{a=this.parseDate(i,s,o)||n}catch(r){s=t?"":s}e.selectedDay=a.getDate(),e.drawMonth=e.selectedMonth=a.getMonth(),e.drawYear=e.selectedYear=a.getFullYear(),e.currentDay=s?a.getDate():0,e.currentMonth=s?a.getMonth():0,e.currentYear=s?a.getFullYear():0,this._adjustInstDate(e)}},_getDefaultDate:function(e){return this._restrictMinMax(e,this._determineDate(e,this._get(e,"defaultDate"),new Date))},_determineDate:function(t,i,s){var n=function(e){var t=new Date;return t.setDate(t.getDate()+e),t},a=function(i){try{return e.datepicker.parseDate(e.datepicker._get(t,"dateFormat"),i,e.datepicker._getFormatConfig(t))}catch(s){}for(var n=(i.toLowerCase().match(/^c/)?e.datepicker._getDate(t):null)||new Date,a=n.getFullYear(),o=n.getMonth(),r=n.getDate(),h=/([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,l=h.exec(i);l;){switch(l[2]||"d"){case"d":case"D":r+=parseInt(l[1],10);break;case"w":case"W":r+=7*parseInt(l[1],10);break;case"m":case"M":o+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o));break;case"y":case"Y":a+=parseInt(l[1],10),r=Math.min(r,e.datepicker._getDaysInMonth(a,o))}l=h.exec(i)}return new Date(a,o,r)},o=null==i||""===i?s:"string"==typeof i?a(i):"number"==typeof i?isNaN(i)?s:n(i):new Date(i.getTime());return o=o&&"Invalid Date"==""+o?s:o,o&&(o.setHours(0),o.setMinutes(0),o.setSeconds(0),o.setMilliseconds(0)),this._daylightSavingAdjust(o)},_daylightSavingAdjust:function(e){return e?(e.setHours(e.getHours()>12?e.getHours()+2:0),e):null},_setDate:function(e,t,i){var s=!t,n=e.selectedMonth,a=e.selectedYear,o=this._restrictMinMax(e,this._determineDate(e,t,new Date));e.selectedDay=e.currentDay=o.getDate(),e.drawMonth=e.selectedMonth=e.currentMonth=o.getMonth(),e.drawYear=e.selectedYear=e.currentYear=o.getFullYear(),n===e.selectedMonth&&a===e.selectedYear||i||this._notifyChange(e),this._adjustInstDate(e),e.input&&e.input.val(s?"":this._formatDate(e))},_getDate:function(e){var t=!e.currentYear||e.input&&""===e.input.val()?null:this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return t},_attachHandlers:function(t){var i=this._get(t,"stepMonths"),s="#"+t.id.replace(/\\\\/g,"\\");t.dpDiv.find("[data-handler]").map(function(){var t={prev:function(){e.datepicker._adjustDate(s,-i,"M")},next:function(){e.datepicker._adjustDate(s,+i,"M")},hide:function(){e.datepicker._hideDatepicker()},today:function(){e.datepicker._gotoToday(s)},selectDay:function(){return e.datepicker._selectDay(s,+this.getAttribute("data-month"),+this.getAttribute("data-year"),this),!1},selectMonth:function(){return e.datepicker._selectMonthYear(s,this,"M"),!1},selectYear:function(){return e.datepicker._selectMonthYear(s,this,"Y"),!1}};e(this).bind(this.getAttribute("data-event"),t[this.getAttribute("data-handler")])})},_generateHTML:function(e){var t,i,s,n,a,o,r,h,l,u,d,c,p,f,m,g,v,y,b,_,x,w,k,T,D,S,M,C,N,A,I,P,z,H,F,E,O,j,W,L=new Date,R=this._daylightSavingAdjust(new Date(L.getFullYear(),L.getMonth(),L.getDate())),Y=this._get(e,"isRTL"),B=this._get(e,"showButtonPanel"),J=this._get(e,"hideIfNoPrevNext"),q=this._get(e,"navigationAsDateFormat"),K=this._getNumberOfMonths(e),V=this._get(e,"showCurrentAtPos"),U=this._get(e,"stepMonths"),Q=1!==K[0]||1!==K[1],G=this._daylightSavingAdjust(e.currentDay?new Date(e.currentYear,e.currentMonth,e.currentDay):new Date(9999,9,9)),X=this._getMinMaxDate(e,"min"),$=this._getMinMaxDate(e,"max"),Z=e.drawMonth-V,et=e.drawYear;if(0>Z&&(Z+=12,et--),$)for(t=this._daylightSavingAdjust(new Date($.getFullYear(),$.getMonth()-K[0]*K[1]+1,$.getDate())),t=X&&X>t?X:t;this._daylightSavingAdjust(new Date(et,Z,1))>t;)Z--,0>Z&&(Z=11,et--);for(e.drawMonth=Z,e.drawYear=et,i=this._get(e,"prevText"),i=q?this.formatDate(i,this._daylightSavingAdjust(new Date(et,Z-U,1)),this._getFormatConfig(e)):i,s=this._canAdjustMonth(e,-1,et,Z)?"<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>":J?"":"<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='"+i+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"e":"w")+"'>"+i+"</span></a>",n=this._get(e,"nextText"),n=q?this.formatDate(n,this._daylightSavingAdjust(new Date(et,Z+U,1)),this._getFormatConfig(e)):n,a=this._canAdjustMonth(e,1,et,Z)?"<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>":J?"":"<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='"+n+"'><span class='ui-icon ui-icon-circle-triangle-"+(Y?"w":"e")+"'>"+n+"</span></a>",o=this._get(e,"currentText"),r=this._get(e,"gotoCurrent")&&e.currentDay?G:R,o=q?this.formatDate(o,r,this._getFormatConfig(e)):o,h=e.inline?"":"<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>"+this._get(e,"closeText")+"</button>",l=B?"<div class='ui-datepicker-buttonpane ui-widget-content'>"+(Y?h:"")+(this._isInRange(e,r)?"<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>"+o+"</button>":"")+(Y?"":h)+"</div>":"",u=parseInt(this._get(e,"firstDay"),10),u=isNaN(u)?0:u,d=this._get(e,"showWeek"),c=this._get(e,"dayNames"),p=this._get(e,"dayNamesMin"),f=this._get(e,"monthNames"),m=this._get(e,"monthNamesShort"),g=this._get(e,"beforeShowDay"),v=this._get(e,"showOtherMonths"),y=this._get(e,"selectOtherMonths"),b=this._getDefaultDate(e),_="",w=0;K[0]>w;w++){for(k="",this.maxRows=4,T=0;K[1]>T;T++){if(D=this._daylightSavingAdjust(new Date(et,Z,e.selectedDay)),S=" ui-corner-all",M="",Q){if(M+="<div class='ui-datepicker-group",K[1]>1)switch(T){case 0:M+=" ui-datepicker-group-first",S=" ui-corner-"+(Y?"right":"left");break;case K[1]-1:M+=" ui-datepicker-group-last",S=" ui-corner-"+(Y?"left":"right");break;default:M+=" ui-datepicker-group-middle",S=""}M+="'>"}for(M+="<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix"+S+"'>"+(/all|left/.test(S)&&0===w?Y?a:s:"")+(/all|right/.test(S)&&0===w?Y?s:a:"")+this._generateMonthYearHeader(e,Z,et,X,$,w>0||T>0,f,m)+"</div><table class='ui-datepicker-calendar'><thead>"+"<tr>",C=d?"<th class='ui-datepicker-week-col'>"+this._get(e,"weekHeader")+"</th>":"",x=0;7>x;x++)N=(x+u)%7,C+="<th scope='col'"+((x+u+6)%7>=5?" class='ui-datepicker-week-end'":"")+">"+"<span title='"+c[N]+"'>"+p[N]+"</span></th>";for(M+=C+"</tr></thead><tbody>",A=this._getDaysInMonth(et,Z),et===e.selectedYear&&Z===e.selectedMonth&&(e.selectedDay=Math.min(e.selectedDay,A)),I=(this._getFirstDayOfMonth(et,Z)-u+7)%7,P=Math.ceil((I+A)/7),z=Q?this.maxRows>P?this.maxRows:P:P,this.maxRows=z,H=this._daylightSavingAdjust(new Date(et,Z,1-I)),F=0;z>F;F++){for(M+="<tr>",E=d?"<td class='ui-datepicker-week-col'>"+this._get(e,"calculateWeek")(H)+"</td>":"",x=0;7>x;x++)O=g?g.apply(e.input?e.input[0]:null,[H]):[!0,""],j=H.getMonth()!==Z,W=j&&!y||!O[0]||X&&X>H||$&&H>$,E+="<td class='"+((x+u+6)%7>=5?" ui-datepicker-week-end":"")+(j?" ui-datepicker-other-month":"")+(H.getTime()===D.getTime()&&Z===e.selectedMonth&&e._keyEvent||b.getTime()===H.getTime()&&b.getTime()===D.getTime()?" "+this._dayOverClass:"")+(W?" "+this._unselectableClass+" ui-state-disabled":"")+(j&&!v?"":" "+O[1]+(H.getTime()===G.getTime()?" "+this._currentClass:"")+(H.getTime()===R.getTime()?" ui-datepicker-today":""))+"'"+(j&&!v||!O[2]?"":" title='"+O[2].replace(/'/g,"&#39;")+"'")+(W?"":" data-handler='selectDay' data-event='click' data-month='"+H.getMonth()+"' data-year='"+H.getFullYear()+"'")+">"+(j&&!v?"&#xa0;":W?"<span class='ui-state-default'>"+H.getDate()+"</span>":"<a class='ui-state-default"+(H.getTime()===R.getTime()?" ui-state-highlight":"")+(H.getTime()===G.getTime()?" ui-state-active":"")+(j?" ui-priority-secondary":"")+"' href='#'>"+H.getDate()+"</a>")+"</td>",H.setDate(H.getDate()+1),H=this._daylightSavingAdjust(H);M+=E+"</tr>"}Z++,Z>11&&(Z=0,et++),M+="</tbody></table>"+(Q?"</div>"+(K[0]>0&&T===K[1]-1?"<div class='ui-datepicker-row-break'></div>":""):""),k+=M}_+=k}return _+=l,e._keyEvent=!1,_},_generateMonthYearHeader:function(e,t,i,s,n,a,o,r){var h,l,u,d,c,p,f,m,g=this._get(e,"changeMonth"),v=this._get(e,"changeYear"),y=this._get(e,"showMonthAfterYear"),b="<div class='ui-datepicker-title'>",_="";if(a||!g)_+="<span class='ui-datepicker-month'>"+o[t]+"</span>";else{for(h=s&&s.getFullYear()===i,l=n&&n.getFullYear()===i,_+="<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>",u=0;12>u;u++)(!h||u>=s.getMonth())&&(!l||n.getMonth()>=u)&&(_+="<option value='"+u+"'"+(u===t?" selected='selected'":"")+">"+r[u]+"</option>");_+="</select>"}if(y||(b+=_+(!a&&g&&v?"":"&#xa0;")),!e.yearshtml)if(e.yearshtml="",a||!v)b+="<span class='ui-datepicker-year'>"+i+"</span>";else{for(d=this._get(e,"yearRange").split(":"),c=(new Date).getFullYear(),p=function(e){var t=e.match(/c[+\-].*/)?i+parseInt(e.substring(1),10):e.match(/[+\-].*/)?c+parseInt(e,10):parseInt(e,10);return isNaN(t)?c:t},f=p(d[0]),m=Math.max(f,p(d[1]||"")),f=s?Math.max(f,s.getFullYear()):f,m=n?Math.min(m,n.getFullYear()):m,e.yearshtml+="<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";m>=f;f++)e.yearshtml+="<option value='"+f+"'"+(f===i?" selected='selected'":"")+">"+f+"</option>";e.yearshtml+="</select>",b+=e.yearshtml,e.yearshtml=null}return b+=this._get(e,"yearSuffix"),y&&(b+=(!a&&g&&v?"":"&#xa0;")+_),b+="</div>"},_adjustInstDate:function(e,t,i){var s=e.drawYear+("Y"===i?t:0),n=e.drawMonth+("M"===i?t:0),a=Math.min(e.selectedDay,this._getDaysInMonth(s,n))+("D"===i?t:0),o=this._restrictMinMax(e,this._daylightSavingAdjust(new Date(s,n,a)));e.selectedDay=o.getDate(),e.drawMonth=e.selectedMonth=o.getMonth(),e.drawYear=e.selectedYear=o.getFullYear(),("M"===i||"Y"===i)&&this._notifyChange(e)},_restrictMinMax:function(e,t){var i=this._getMinMaxDate(e,"min"),s=this._getMinMaxDate(e,"max"),n=i&&i>t?i:t;return s&&n>s?s:n},_notifyChange:function(e){var t=this._get(e,"onChangeMonthYear");t&&t.apply(e.input?e.input[0]:null,[e.selectedYear,e.selectedMonth+1,e])},_getNumberOfMonths:function(e){var t=this._get(e,"numberOfMonths");return null==t?[1,1]:"number"==typeof t?[1,t]:t},_getMinMaxDate:function(e,t){return this._determineDate(e,this._get(e,t+"Date"),null)},_getDaysInMonth:function(e,t){return 32-this._daylightSavingAdjust(new Date(e,t,32)).getDate()},_getFirstDayOfMonth:function(e,t){return new Date(e,t,1).getDay()},_canAdjustMonth:function(e,t,i,s){var n=this._getNumberOfMonths(e),a=this._daylightSavingAdjust(new Date(i,s+(0>t?t:n[0]*n[1]),1));return 0>t&&a.setDate(this._getDaysInMonth(a.getFullYear(),a.getMonth())),this._isInRange(e,a)},_isInRange:function(e,t){var i,s,n=this._getMinMaxDate(e,"min"),a=this._getMinMaxDate(e,"max"),o=null,r=null,h=this._get(e,"yearRange");return h&&(i=h.split(":"),s=(new Date).getFullYear(),o=parseInt(i[0],10),r=parseInt(i[1],10),i[0].match(/[+\-].*/)&&(o+=s),i[1].match(/[+\-].*/)&&(r+=s)),(!n||t.getTime()>=n.getTime())&&(!a||t.getTime()<=a.getTime())&&(!o||t.getFullYear()>=o)&&(!r||r>=t.getFullYear())},_getFormatConfig:function(e){var t=this._get(e,"shortYearCutoff");return t="string"!=typeof t?t:(new Date).getFullYear()%100+parseInt(t,10),{shortYearCutoff:t,dayNamesShort:this._get(e,"dayNamesShort"),dayNames:this._get(e,"dayNames"),monthNamesShort:this._get(e,"monthNamesShort"),monthNames:this._get(e,"monthNames")}},_formatDate:function(e,t,i,s){t||(e.currentDay=e.selectedDay,e.currentMonth=e.selectedMonth,e.currentYear=e.selectedYear);var n=t?"object"==typeof t?t:this._daylightSavingAdjust(new Date(s,i,t)):this._daylightSavingAdjust(new Date(e.currentYear,e.currentMonth,e.currentDay));return this.formatDate(this._get(e,"dateFormat"),n,this._getFormatConfig(e))}}),e.fn.datepicker=function(t){if(!this.length)return this;e.datepicker.initialized||(e(document).mousedown(e.datepicker._checkExternalClick),e.datepicker.initialized=!0),0===e("#"+e.datepicker._mainDivId).length&&e("body").append(e.datepicker.dpDiv);var i=Array.prototype.slice.call(arguments,1);return"string"!=typeof t||"isDisabled"!==t&&"getDate"!==t&&"widget"!==t?"option"===t&&2===arguments.length&&"string"==typeof arguments[1]?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i)):this.each(function(){"string"==typeof t?e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this].concat(i)):e.datepicker._attachDatepicker(this,t)}):e.datepicker["_"+t+"Datepicker"].apply(e.datepicker,[this[0]].concat(i))},e.datepicker=new n,e.datepicker.initialized=!1,e.datepicker.uuid=(new Date).getTime(),e.datepicker.version="1.11.3",e.datepicker,e.widget("ui.dialog",{version:"1.11.3",options:{appendTo:"body",autoOpen:!0,buttons:[],closeOnEscape:!0,closeText:"Close",dialogClass:"",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var i=e(this).css(t).offset().top;0>i&&e(this).css("top",t.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),this.options.title=this.options.title||this.originalTitle,this._createWrapper(),this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&e.fn.draggable&&this._makeDraggable(),this.options.resizable&&e.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?e(t):this.document.find(t||"body").eq(0)},_destroy:function(){var e,t=this.originalPosition;this._destroyOverlay(),this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(),this.uiDialog.stop(!0,!0).remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),e=t.parent.children().eq(t.index),e.length&&e[0]!==this.element[0]?e.before(this.element):t.parent.append(this.element)},widget:function(){return this.uiDialog},disable:e.noop,enable:e.noop,close:function(t){var i,s=this;if(this._isOpen&&this._trigger("beforeClose",t)!==!1){if(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),!this.opener.filter(":focusable").focus().length)try{i=this.document[0].activeElement,i&&"body"!==i.nodeName.toLowerCase()&&e(i).blur()}catch(n){}this._hide(this.uiDialog,this.options.hide,function(){s._trigger("close",t)})}},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,i){var s=!1,n=this.uiDialog.siblings(".ui-front:visible").map(function(){return+e(this).css("z-index")}).get(),a=Math.max.apply(null,n);return a>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",a+1),s=!0),s&&!i&&this._trigger("focus",t),s},open:function(){var t=this;return this._isOpen?(this._moveToTop()&&this._focusTabbable(),void 0):(this._isOpen=!0,this.opener=e(this.document[0].activeElement),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){t._focusTabbable(),t._trigger("focus")
}),this._makeFocusTarget(),this._trigger("open"),void 0)},_focusTabbable:function(){var e=this._focusedElement;e||(e=this.element.find("[autofocus]")),e.length||(e=this.element.find(":tabbable")),e.length||(e=this.uiDialogButtonPane.find(":tabbable")),e.length||(e=this.uiDialogTitlebarClose.filter(":tabbable")),e.length||(e=this.uiDialog),e.eq(0).focus()},_keepFocus:function(t){function i(){var t=this.document[0].activeElement,i=this.uiDialog[0]===t||e.contains(this.uiDialog[0],t);i||this._focusTabbable()}t.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=e("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front "+this.options.dialogClass).hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===e.ui.keyCode.ESCAPE)return t.preventDefault(), this.close(t)/*destroy(t)Esc*/,void 0;if(t.keyCode===e.ui.keyCode.TAB&&!t.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),n=i.filter(":last");t.target!==n[0]&&t.target!==this.uiDialog[0]||t.shiftKey?t.target!==s[0]&&t.target!==this.uiDialog[0]||!t.shiftKey||(this._delay(function(){n.focus()}),t.preventDefault()):(this._delay(function(){s.focus()}),t.preventDefault())}},mousedown:function(e){this._moveToTop(e)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=e("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog),this._on(this.uiDialogTitlebar,{mousedown:function(t){e(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.focus()}}),this.uiDialogTitlebarClose=e("<button type='button'></button>").button({label:this.options.closeText,icons:{primary:"ui-icon-closethick"},text:!1}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar),this._on(this.uiDialogTitlebarClose,{click:function(e){e.preventDefault(),this.close(e)}}),t=e("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar),this._title(t),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(e){this.options.title||e.html("&#160;"),e.text(this.options.title)},_createButtonPane:function(){this.uiDialogButtonPane=e("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"),this.uiButtonSet=e("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane),this._createButtons()},_createButtons:function(){var t=this,i=this.options.buttons;return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),e.isEmptyObject(i)||e.isArray(i)&&!i.length?(this.uiDialog.removeClass("ui-dialog-buttons"),void 0):(e.each(i,function(i,s){var n,a;s=e.isFunction(s)?{click:s,text:i}:s,s=e.extend({type:"button"},s),n=s.click,s.click=function(){n.apply(t.element[0],arguments)},a={icons:s.icons,text:s.showText},delete s.icons,delete s.showText,e("<button></button>",s).button(a).appendTo(t.uiButtonSet)}),this.uiDialog.addClass("ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog),void 0)},_makeDraggable:function(){function t(e){return{position:e.position,offset:e.offset}}var i=this,s=this.options;this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,n){e(this).addClass("ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,t(n))},drag:function(e,s){i._trigger("drag",e,t(s))},stop:function(n,a){var o=a.offset.left-i.document.scrollLeft(),r=a.offset.top-i.document.scrollTop();s.position={my:"left top",at:"left"+(o>=0?"+":"")+o+" "+"top"+(r>=0?"+":"")+r,of:i.window},e(this).removeClass("ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",n,t(a))}})},_makeResizable:function(){function t(e){return{originalPosition:e.originalPosition,originalSize:e.originalSize,position:e.position,size:e.size}}var i=this,s=this.options,n=s.resizable,a=this.uiDialog.css("position"),o="string"==typeof n?n:"n,e,s,w,se,sw,ne,nw";this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:o,start:function(s,n){e(this).addClass("ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,t(n))},resize:function(e,s){i._trigger("resize",e,t(s))},stop:function(n,a){var o=i.uiDialog.offset(),r=o.left-i.document.scrollLeft(),h=o.top-i.document.scrollTop();s.height=i.uiDialog.height(),s.width=i.uiDialog.width(),s.position={my:"left top",at:"left"+(r>=0?"+":"")+r+" "+"top"+(h>=0?"+":"")+h,of:i.window},e(this).removeClass("ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",n,t(a))}}).css("position",a)},_trackFocus:function(){this._on(this.widget(),{focusin:function(t){this._makeFocusTarget(),this._focusedElement=e(t.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var t=this._trackingInstances(),i=e.inArray(this,t);-1!==i&&t.splice(i,1)},_trackingInstances:function(){var e=this.document.data("ui-dialog-instances");return e||(e=[],this.document.data("ui-dialog-instances",e)),e},_minHeight:function(){var e=this.options;return"auto"===e.height?e.minHeight:Math.min(e.minHeight,e.height)},_position:function(){var e=this.uiDialog.is(":visible");e||this.uiDialog.show(),this.uiDialog.position(this.options.position),e||this.uiDialog.hide()},_setOptions:function(t){var i=this,s=!1,n={};e.each(t,function(e,t){i._setOption(e,t),e in i.sizeRelatedOptions&&(s=!0),e in i.resizableRelatedOptions&&(n[e]=t)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",n)},_setOption:function(e,t){var i,s,n=this.uiDialog;"dialogClass"===e&&n.removeClass(this.options.dialogClass).addClass(t),"disabled"!==e&&(this._super(e,t),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:""+t}),"draggable"===e&&(i=n.is(":data(ui-draggable)"),i&&!t&&n.draggable("destroy"),!i&&t&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&(s=n.is(":data(ui-resizable)"),s&&!t&&n.resizable("destroy"),s&&"string"==typeof t&&n.resizable("option","handles",t),s||t===!1||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var e,t,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),e=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),t=Math.max(0,s.minHeight-e),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-e):"none","auto"===s.height?this.element.css({minHeight:t,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-e)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=e(this);return e("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(t){return e(t.target).closest(".ui-dialog").length?!0:!!e(t.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var t=!0;this._delay(function(){t=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(e){t||this._allowInteraction(e)||(e.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=e("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var e=this.document.data("ui-dialog-overlays")-1;e?this.document.data("ui-dialog-overlays",e):this.document.unbind("focusin").removeData("ui-dialog-overlays"),this.overlay.remove(),this.overlay=null}}}),e.widget("ui.progressbar",{version:"1.11.3",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min}),this.valueDiv=e("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element),this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.valueDiv.remove()},value:function(e){return void 0===e?this.options.value:(this.options.value=this._constrainedValue(e),this._refreshValue(),void 0)},_constrainedValue:function(e){return void 0===e&&(e=this.options.value),this.indeterminate=e===!1,"number"!=typeof e&&(e=0),this.indeterminate?!1:Math.min(this.options.max,Math.max(this.min,e))},_setOptions:function(e){var t=e.value;delete e.value,this._super(e),this.options.value=this._constrainedValue(t),this._refreshValue()},_setOption:function(e,t){"max"===e&&(t=Math.max(this.min,t)),"disabled"===e&&this.element.toggleClass("ui-state-disabled",!!t).attr("aria-disabled",t),this._super(e,t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var t=this.options.value,i=this._percentage();this.valueDiv.toggle(this.indeterminate||t>this.min).toggleClass("ui-corner-right",t===this.options.max).width(i.toFixed(0)+"%"),this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=e("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":t}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==t&&(this.oldValue=t,this._trigger("change")),t===this.options.max&&this._trigger("complete")}}),e.widget("ui.selectmenu",{version:"1.11.3",defaultElement:"<select>",options:{appendTo:null,disabled:null,icons:{button:"ui-icon-triangle-1-s"},position:{my:"left top",at:"left bottom",collision:"none"},width:null,change:null,close:null,focus:null,open:null,select:null},_create:function(){var e=this.element.uniqueId().attr("id");this.ids={element:e,button:e+"-button",menu:e+"-menu"},this._drawButton(),this._drawMenu(),this.options.disabled&&this.disable()},_drawButton:function(){var t=this;this.label=e("label[for='"+this.ids.element+"']").attr("for",this.ids.button),this._on(this.label,{click:function(e){this.button.focus(),e.preventDefault()}}),this.element.hide(),this.button=e("<span>",{"class":"ui-selectmenu-button ui-widget ui-state-default ui-corner-all",tabindex:this.options.disabled?-1:0,id:this.ids.button,role:"combobox","aria-expanded":"false","aria-autocomplete":"list","aria-owns":this.ids.menu,"aria-haspopup":"true"}).insertAfter(this.element),e("<span>",{"class":"ui-icon "+this.options.icons.button}).prependTo(this.button),this.buttonText=e("<span>",{"class":"ui-selectmenu-text"}).appendTo(this.button),this._setText(this.buttonText,this.element.find("option:selected").text()),this._resizeButton(),this._on(this.button,this._buttonEvents),this.button.one("focusin",function(){t.menuItems||t._refreshMenu()}),this._hoverable(this.button),this._focusable(this.button)},_drawMenu:function(){var t=this;this.menu=e("<ul>",{"aria-hidden":"true","aria-labelledby":this.ids.button,id:this.ids.menu}),this.menuWrap=e("<div>",{"class":"ui-selectmenu-menu ui-front"}).append(this.menu).appendTo(this._appendTo()),this.menuInstance=this.menu.menu({role:"listbox",select:function(e,i){e.preventDefault(),t._setSelection(),t._select(i.item.data("ui-selectmenu-item"),e)},focus:function(e,i){var s=i.item.data("ui-selectmenu-item");null!=t.focusIndex&&s.index!==t.focusIndex&&(t._trigger("focus",e,{item:s}),t.isOpen||t._select(s,e)),t.focusIndex=s.index,t.button.attr("aria-activedescendant",t.menuItems.eq(s.index).attr("id"))}}).menu("instance"),this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all"),this.menuInstance._off(this.menu,"mouseleave"),this.menuInstance._closeOnDocumentClick=function(){return!1},this.menuInstance._isDivider=function(){return!1}},refresh:function(){this._refreshMenu(),this._setText(this.buttonText,this._getSelectedItem().text()),this.options.width||this._resizeButton()},_refreshMenu:function(){this.menu.empty();var e,t=this.element.find("option");t.length&&(this._parseOptions(t),this._renderMenu(this.menu,this.items),this.menuInstance.refresh(),this.menuItems=this.menu.find("li").not(".ui-selectmenu-optgroup"),e=this._getSelectedItem(),this.menuInstance.focus(null,e),this._setAria(e.data("ui-selectmenu-item")),this._setOption("disabled",this.element.prop("disabled")))},open:function(e){this.options.disabled||(this.menuItems?(this.menu.find(".ui-state-focus").removeClass("ui-state-focus"),this.menuInstance.focus(null,this._getSelectedItem())):this._refreshMenu(),this.isOpen=!0,this._toggleAttr(),this._resizeMenu(),this._position(),this._on(this.document,this._documentClick),this._trigger("open",e))},_position:function(){this.menuWrap.position(e.extend({of:this.button},this.options.position))},close:function(e){this.isOpen&&(this.isOpen=!1,this._toggleAttr(),this.range=null,this._off(this.document),this._trigger("close",e))},widget:function(){return this.button},menuWidget:function(){return this.menu},_renderMenu:function(t,i){var s=this,n="";e.each(i,function(i,a){a.optgroup!==n&&(e("<li>",{"class":"ui-selectmenu-optgroup ui-menu-divider"+(a.element.parent("optgroup").prop("disabled")?" ui-state-disabled":""),text:a.optgroup}).appendTo(t),n=a.optgroup),s._renderItemData(t,a)})},_renderItemData:function(e,t){return this._renderItem(e,t).data("ui-selectmenu-item",t)},_renderItem:function(t,i){var s=e("<li>");return i.disabled&&s.addClass("ui-state-disabled"),this._setText(s,i.label),s.appendTo(t)},_setText:function(e,t){t?e.text(t):e.html("&#160;")},_move:function(e,t){var i,s,n=".ui-menu-item";this.isOpen?i=this.menuItems.eq(this.focusIndex):(i=this.menuItems.eq(this.element[0].selectedIndex),n+=":not(.ui-state-disabled)"),s="first"===e||"last"===e?i["first"===e?"prevAll":"nextAll"](n).eq(-1):i[e+"All"](n).eq(0),s.length&&this.menuInstance.focus(t,s)},_getSelectedItem:function(){return this.menuItems.eq(this.element[0].selectedIndex)},_toggle:function(e){this[this.isOpen?"close":"open"](e)},_setSelection:function(){var e;this.range&&(window.getSelection?(e=window.getSelection(),e.removeAllRanges(),e.addRange(this.range)):this.range.select(),this.button.focus())},_documentClick:{mousedown:function(t){this.isOpen&&(e(t.target).closest(".ui-selectmenu-menu, #"+this.ids.button).length||this.close(t))}},_buttonEvents:{mousedown:function(){var e;window.getSelection?(e=window.getSelection(),e.rangeCount&&(this.range=e.getRangeAt(0))):this.range=document.selection.createRange()},click:function(e){this._setSelection(),this._toggle(e)},keydown:function(t){var i=!0;switch(t.keyCode){case e.ui.keyCode.TAB:case e.ui.keyCode.ESCAPE:this.close(t),i=!1;break;case e.ui.keyCode.ENTER:this.isOpen&&this._selectFocusedItem(t);break;case e.ui.keyCode.UP:t.altKey?this._toggle(t):this._move("prev",t);break;case e.ui.keyCode.DOWN:t.altKey?this._toggle(t):this._move("next",t);break;case e.ui.keyCode.SPACE:this.isOpen?this._selectFocusedItem(t):this._toggle(t);break;case e.ui.keyCode.LEFT:this._move("prev",t);break;case e.ui.keyCode.RIGHT:this._move("next",t);break;case e.ui.keyCode.HOME:case e.ui.keyCode.PAGE_UP:this._move("first",t);break;case e.ui.keyCode.END:case e.ui.keyCode.PAGE_DOWN:this._move("last",t);break;default:this.menu.trigger(t),i=!1}i&&t.preventDefault()}},_selectFocusedItem:function(e){var t=this.menuItems.eq(this.focusIndex);t.hasClass("ui-state-disabled")||this._select(t.data("ui-selectmenu-item"),e)},_select:function(e,t){var i=this.element[0].selectedIndex;this.element[0].selectedIndex=e.index,this._setText(this.buttonText,e.label),this._setAria(e),this._trigger("select",t,{item:e}),e.index!==i&&this._trigger("change",t,{item:e}),this.close(t)},_setAria:function(e){var t=this.menuItems.eq(e.index).attr("id");this.button.attr({"aria-labelledby":t,"aria-activedescendant":t}),this.menu.attr("aria-activedescendant",t)},_setOption:function(e,t){"icons"===e&&this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(t.button),this._super(e,t),"appendTo"===e&&this.menuWrap.appendTo(this._appendTo()),"disabled"===e&&(this.menuInstance.option("disabled",t),this.button.toggleClass("ui-state-disabled",t).attr("aria-disabled",t),this.element.prop("disabled",t),t?(this.button.attr("tabindex",-1),this.close()):this.button.attr("tabindex",0)),"width"===e&&this._resizeButton()},_appendTo:function(){var t=this.options.appendTo;return t&&(t=t.jquery||t.nodeType?e(t):this.document.find(t).eq(0)),t&&t[0]||(t=this.element.closest(".ui-front")),t.length||(t=this.document[0].body),t},_toggleAttr:function(){this.button.toggleClass("ui-corner-top",this.isOpen).toggleClass("ui-corner-all",!this.isOpen).attr("aria-expanded",this.isOpen),this.menuWrap.toggleClass("ui-selectmenu-open",this.isOpen),this.menu.attr("aria-hidden",!this.isOpen)},_resizeButton:function(){var e=this.options.width;e||(e=this.element.show().outerWidth(),this.element.hide()),this.button.outerWidth(e)},_resizeMenu:function(){this.menu.outerWidth(Math.max(this.button.outerWidth(),this.menu.width("").outerWidth()+1))},_getCreateOptions:function(){return{disabled:this.element.prop("disabled")}},_parseOptions:function(t){var i=[];t.each(function(t,s){var n=e(s),a=n.parent("optgroup");i.push({element:n,index:t,value:n.val(),label:n.text(),optgroup:a.attr("label")||"",disabled:a.prop("disabled")||n.prop("disabled")})}),this.items=i},_destroy:function(){this.menuWrap.remove(),this.button.remove(),this.element.show(),this.element.removeUniqueId(),this.label.attr("for",this.ids.element)}}),e.widget("ui.slider",e.ui.mouse,{version:"1.11.3",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'></span>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),t=n.length;i>t;t++)o.push(a);this.handles=n.add(e(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(t){e(this).data("ui-slider-handle-index",t)})},_createRange:function(){var t=this.options,i="";t.range?(t.range===!0&&(t.values?t.values.length&&2!==t.values.length?t.values=[t.values[0],t.values[0]]:e.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=e("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===t.range||"max"===t.range?" ui-slider-range-"+t.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(t){var i,s,n,a,o,r,h,l,u=this,d=this.options;return d.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:t.pageX,y:t.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var i=Math.abs(s-u.values(t));(n>i||n===i&&(t===u._lastChangedValue||u.values(t)===d.min))&&(n=i,a=e(this),o=t)}),r=this._start(t,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),h=a.offset(),l=!e(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=l?{left:0,top:0}:{left:t.pageX-h.left-a.width()/2,top:t.pageY-h.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(e){var t={x:e.pageX,y:e.pageY},i=this._normValueFromMouse(t);return this._slide(e,this._handleIndex,i),!1},_mouseStop:function(e){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(e,this._handleIndex),this._change(e,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(e){var t,i,s,n,a;return"horizontal"===this.orientation?(t=this.elementSize.width,i=e.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(t=this.elementSize.height,i=e.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/t,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(e,t){var i={handle:this.handles[t],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("start",e,i)},_slide:function(e,t,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(t?0:1),2===this.options.values.length&&this.options.range===!0&&(0===t&&i>s||1===t&&s>i)&&(i=s),i!==this.values(t)&&(n=this.values(),n[t]=i,a=this._trigger("slide",e,{handle:this.handles[t],value:i,values:n}),s=this.values(t?0:1),a!==!1&&this.values(t,i))):i!==this.value()&&(a=this._trigger("slide",e,{handle:this.handles[t],value:i}),a!==!1&&this.value(i))},_stop:function(e,t){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._trigger("stop",e,i)},_change:function(e,t){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[t],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(t),i.values=this.values()),this._lastChangedValue=t,this._trigger("change",e,i)}},value:function(e){return arguments.length?(this.options.value=this._trimAlignValue(e),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(t,i){var s,n,a;if(arguments.length>1)return this.options.values[t]=this._trimAlignValue(i),this._refreshValue(),this._change(null,t),void 0;if(!arguments.length)return this._values();if(!e.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(t):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(t,i){var s,n=0;switch("range"===t&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),e.isArray(this.options.values)&&(n=this.options.values.length),"disabled"===t&&this.element.toggleClass("ui-state-disabled",!!i),this._super(t,i),t){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue(),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var e=this.options.value;return e=this._trimAlignValue(e)},_values:function(e){var t,i,s;if(arguments.length)return t=this.options.values[e],t=this._trimAlignValue(t);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(e){if(this._valueMin()>=e)return this._valueMin();if(e>=this._valueMax())return this._valueMax();var t=this.options.step>0?this.options.step:1,i=(e-this._valueMin())%t,s=e-i;return 2*Math.abs(i)>=t&&(s+=i>0?t:-t),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var e=this.options.max,t=this._valueMin(),i=this.options.step,s=Math.floor((e-t)/i)*i;e=s+t,this.max=parseFloat(e.toFixed(this._precision()))},_precision:function(){var e=this._precisionOf(this.options.step);return null!==this.options.min&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=""+e,i=t.indexOf(".");return-1===i?0:t.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshValue:function(){var t,i,s,n,a,o=this.options.range,r=this.options,h=this,l=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((h.values(s)-h._valueMin())/(h._valueMax()-h._valueMin())),u["horizontal"===h.orientation?"left":"bottom"]=i+"%",e(this).stop(1,1)[l?"animate":"css"](u,r.animate),h.options.range===!0&&("horizontal"===h.orientation?(0===s&&h.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({width:i-t+"%"},{queue:!1,duration:r.animate})):(0===s&&h.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&h.range[l?"animate":"css"]({height:i-t+"%"},{queue:!1,duration:r.animate}))),t=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[l?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[l?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(t){var i,s,n,a,o=e(t.target).data("ui-slider-handle-index");switch(t.keyCode){case e.ui.keyCode.HOME:case e.ui.keyCode.END:case e.ui.keyCode.PAGE_UP:case e.ui.keyCode.PAGE_DOWN:case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(t.preventDefault(),!this._keySliding&&(this._keySliding=!0,e(t.target).addClass("ui-state-active"),i=this._start(t,o),i===!1))return}switch(a=this.options.step,s=n=this.options.values&&this.options.values.length?this.values(o):this.value(),t.keyCode){case e.ui.keyCode.HOME:n=this._valueMin();break;case e.ui.keyCode.END:n=this._valueMax();break;case e.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case e.ui.keyCode.UP:case e.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+a);break;case e.ui.keyCode.DOWN:case e.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-a)}this._slide(t,o,n)},keyup:function(t){var i=e(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,i),this._change(t,i),e(t.target).removeClass("ui-state-active"))}}}),e.widget("ui.spinner",{version:"1.11.3",defaultElement:"<input>",widgetEventPrefix:"spin",options:{culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var t={},i=this.element;return e.each(["min","max","step"],function(e,s){var n=i.attr(s);void 0!==n&&n.length&&(t[s]=n)}),t},_events:{keydown:function(e){this._start(e)&&this._keydown(e)&&e.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(e){return this.cancelBlur?(delete this.cancelBlur,void 0):(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",e),void 0)},mousewheel:function(e,t){if(t){if(!this.spinning&&!this._start(e))return!1;this._spin((t>0?1:-1)*this.options.step,e),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(e)},100),e.preventDefault()}},"mousedown .ui-spinner-button":function(t){function i(){var e=this.element[0]===this.document[0].activeElement;e||(this.element.focus(),this.previous=s,this._delay(function(){this.previous=s}))}var s;s=this.element[0]===this.document[0].activeElement?this.previous:this.element.val(),t.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),this._start(t)!==!1&&this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(t){return e(t.currentTarget).hasClass("ui-state-active")?this._start(t)===!1?!1:(this._repeat(null,e(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t),void 0):void 0},"mouseleave .ui-spinner-button":"_stop"},_draw:function(){var e=this.uiSpinner=this.element.addClass("ui-spinner-input").attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());this.element.attr("role","spinbutton"),this.buttons=e.find(".ui-spinner-button").attr("tabIndex",-1).button().removeClass("ui-corner-all"),this.buttons.height()>Math.ceil(.5*e.height())&&e.height()>0&&e.height(e.height()),this.options.disabled&&this.disable()},_keydown:function(t){var i=this.options,s=e.ui.keyCode;switch(t.keyCode){case s.UP:return this._repeat(null,1,t),!0;case s.DOWN:return this._repeat(null,-1,t),!0;case s.PAGE_UP:return this._repeat(null,i.page,t),!0;case s.PAGE_DOWN:return this._repeat(null,-i.page,t),!0}return!1},_uiSpinnerHtml:function(){return"<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
},_buttonHtml:function(){return"<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon "+this.options.icons.up+"'>&#9650;</span>"+"</a>"+"<a class='ui-spinner-button ui-spinner-down ui-corner-br'>"+"<span class='ui-icon "+this.options.icons.down+"'>&#9660;</span>"+"</a>"},_start:function(e){return this.spinning||this._trigger("start",e)!==!1?(this.counter||(this.counter=1),this.spinning=!0,!0):!1},_repeat:function(e,t,i){e=e||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,t,i)},e),this._spin(t*this.options.step,i)},_spin:function(e,t){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+e*this._increment(this.counter)),this.spinning&&this._trigger("spin",t,{value:i})===!1||(this._value(i),this.counter++)},_increment:function(t){var i=this.options.incremental;return i?e.isFunction(i)?i(t):Math.floor(t*t*t/5e4-t*t/500+17*t/200+1):1},_precision:function(){var e=this._precisionOf(this.options.step);return null!==this.options.min&&(e=Math.max(e,this._precisionOf(this.options.min))),e},_precisionOf:function(e){var t=""+e,i=t.indexOf(".");return-1===i?0:t.length-i-1},_adjustValue:function(e){var t,i,s=this.options;return t=null!==s.min?s.min:0,i=e-t,i=Math.round(i/s.step)*s.step,e=t+i,e=parseFloat(e.toFixed(this._precision())),null!==s.max&&e>s.max?s.max:null!==s.min&&s.min>e?s.min:e},_stop:function(e){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",e))},_setOption:function(e,t){if("culture"===e||"numberFormat"===e){var i=this._parse(this.element.val());return this.options[e]=t,this.element.val(this._format(i)),void 0}("max"===e||"min"===e||"step"===e)&&"string"==typeof t&&(t=this._parse(t)),"icons"===e&&(this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up),this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down)),this._super(e,t),"disabled"===e&&(this.widget().toggleClass("ui-state-disabled",!!t),this.element.prop("disabled",!!t),this.buttons.button(t?"disable":"enable"))},_setOptions:h(function(e){this._super(e)}),_parse:function(e){return"string"==typeof e&&""!==e&&(e=window.Globalize&&this.options.numberFormat?Globalize.parseFloat(e,10,this.options.culture):+e),""===e||isNaN(e)?null:e},_format:function(e){return""===e?"":window.Globalize&&this.options.numberFormat?Globalize.format(e,this.options.numberFormat,this.options.culture):e},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var e=this.value();return null===e?!1:e===this._adjustValue(e)},_value:function(e,t){var i;""!==e&&(i=this._parse(e),null!==i&&(t||(i=this._adjustValue(i)),e=this._format(i))),this.element.val(e),this._refresh()},_destroy:function(){this.element.removeClass("ui-spinner-input").prop("disabled",!1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:h(function(e){this._stepUp(e)}),_stepUp:function(e){this._start()&&(this._spin((e||1)*this.options.step),this._stop())},stepDown:h(function(e){this._stepDown(e)}),_stepDown:function(e){this._start()&&(this._spin((e||1)*-this.options.step),this._stop())},pageUp:h(function(e){this._stepUp((e||1)*this.options.page)}),pageDown:h(function(e){this._stepDown((e||1)*this.options.page)}),value:function(e){return arguments.length?(h(this._value).call(this,e),void 0):this._parse(this.element.val())},widget:function(){return this.uiSpinner}}),e.widget("ui.tabs",{version:"1.11.3",delay:300,options:{active:null,collapsible:!1,event:"click",heightStyle:"content",hide:null,show:null,activate:null,beforeActivate:null,beforeLoad:null,load:null},_isLocal:function(){var e=/#.*$/;return function(t){var i,s;t=t.cloneNode(!1),i=t.href.replace(e,""),s=location.href.replace(e,"");try{i=decodeURIComponent(i)}catch(n){}try{s=decodeURIComponent(s)}catch(n){}return t.hash.length>1&&i===s}}(),_create:function(){var t=this,i=this.options;this.running=!1,this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible",i.collapsible),this._processTabs(),i.active=this._initialActive(),e.isArray(i.disabled)&&(i.disabled=e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"),function(e){return t.tabs.index(e)}))).sort()),this.active=this.options.active!==!1&&this.anchors.length?this._findActive(i.active):e(),this._refresh(),this.active.length&&this.load(i.active)},_initialActive:function(){var t=this.options.active,i=this.options.collapsible,s=location.hash.substring(1);return null===t&&(s&&this.tabs.each(function(i,n){return e(n).attr("aria-controls")===s?(t=i,!1):void 0}),null===t&&(t=this.tabs.index(this.tabs.filter(".ui-tabs-active"))),(null===t||-1===t)&&(t=this.tabs.length?0:!1)),t!==!1&&(t=this.tabs.index(this.tabs.eq(t)),-1===t&&(t=i?!1:0)),!i&&t===!1&&this.anchors.length&&(t=0),t},_getCreateEventData:function(){return{tab:this.active,panel:this.active.length?this._getPanelForTab(this.active):e()}},_tabKeydown:function(t){var i=e(this.document[0].activeElement).closest("li"),s=this.tabs.index(i),n=!0;if(!this._handlePageNav(t)){switch(t.keyCode){case e.ui.keyCode.RIGHT:case e.ui.keyCode.DOWN:s++;break;case e.ui.keyCode.UP:case e.ui.keyCode.LEFT:n=!1,s--;break;case e.ui.keyCode.END:s=this.anchors.length-1;break;case e.ui.keyCode.HOME:s=0;break;case e.ui.keyCode.SPACE:return t.preventDefault(),clearTimeout(this.activating),this._activate(s),void 0;case e.ui.keyCode.ENTER:return t.preventDefault(),clearTimeout(this.activating),this._activate(s===this.options.active?!1:s),void 0;default:return}t.preventDefault(),clearTimeout(this.activating),s=this._focusNextTab(s,n),t.ctrlKey||t.metaKey||(i.attr("aria-selected","false"),this.tabs.eq(s).attr("aria-selected","true"),this.activating=this._delay(function(){this.option("active",s)},this.delay))}},_panelKeydown:function(t){this._handlePageNav(t)||t.ctrlKey&&t.keyCode===e.ui.keyCode.UP&&(t.preventDefault(),this.active.focus())},_handlePageNav:function(t){return t.altKey&&t.keyCode===e.ui.keyCode.PAGE_UP?(this._activate(this._focusNextTab(this.options.active-1,!1)),!0):t.altKey&&t.keyCode===e.ui.keyCode.PAGE_DOWN?(this._activate(this._focusNextTab(this.options.active+1,!0)),!0):void 0},_findNextTab:function(t,i){function s(){return t>n&&(t=0),0>t&&(t=n),t}for(var n=this.tabs.length-1;-1!==e.inArray(s(),this.options.disabled);)t=i?t+1:t-1;return t},_focusNextTab:function(e,t){return e=this._findNextTab(e,t),this.tabs.eq(e).focus(),e},_setOption:function(e,t){return"active"===e?(this._activate(t),void 0):"disabled"===e?(this._setupDisabled(t),void 0):(this._super(e,t),"collapsible"===e&&(this.element.toggleClass("ui-tabs-collapsible",t),t||this.options.active!==!1||this._activate(0)),"event"===e&&this._setupEvents(t),"heightStyle"===e&&this._setupHeightStyle(t),void 0)},_sanitizeSelector:function(e){return e?e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g,"\\$&"):""},refresh:function(){var t=this.options,i=this.tablist.children(":has(a[href])");t.disabled=e.map(i.filter(".ui-state-disabled"),function(e){return i.index(e)}),this._processTabs(),t.active!==!1&&this.anchors.length?this.active.length&&!e.contains(this.tablist[0],this.active[0])?this.tabs.length===t.disabled.length?(t.active=!1,this.active=e()):this._activate(this._findNextTab(Math.max(0,t.active-1),!1)):t.active=this.tabs.index(this.active):(t.active=!1,this.active=e()),this._refresh()},_refresh:function(){this._setupDisabled(this.options.disabled),this._setupEvents(this.options.event),this._setupHeightStyle(this.options.heightStyle),this.tabs.not(this.active).attr({"aria-selected":"false","aria-expanded":"false",tabIndex:-1}),this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden":"true"}),this.active.length?(this.active.addClass("ui-tabs-active ui-state-active").attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0}),this._getPanelForTab(this.active).show().attr({"aria-hidden":"false"})):this.tabs.eq(0).attr("tabIndex",0)},_processTabs:function(){var t=this,i=this.tabs,s=this.anchors,n=this.panels;this.tablist=this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role","tablist").delegate("> li","mousedown"+this.eventNamespace,function(t){e(this).is(".ui-state-disabled")&&t.preventDefault()}).delegate(".ui-tabs-anchor","focus"+this.eventNamespace,function(){e(this).closest("li").is(".ui-state-disabled")&&this.blur()}),this.tabs=this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({role:"tab",tabIndex:-1}),this.anchors=this.tabs.map(function(){return e("a",this)[0]}).addClass("ui-tabs-anchor").attr({role:"presentation",tabIndex:-1}),this.panels=e(),this.anchors.each(function(i,s){var n,a,o,r=e(s).uniqueId().attr("id"),h=e(s).closest("li"),l=h.attr("aria-controls");t._isLocal(s)?(n=s.hash,o=n.substring(1),a=t.element.find(t._sanitizeSelector(n))):(o=h.attr("aria-controls")||e({}).uniqueId()[0].id,n="#"+o,a=t.element.find(n),a.length||(a=t._createPanel(o),a.insertAfter(t.panels[i-1]||t.tablist)),a.attr("aria-live","polite")),a.length&&(t.panels=t.panels.add(a)),l&&h.data("ui-tabs-aria-controls",l),h.attr({"aria-controls":o,"aria-labelledby":r}),a.attr("aria-labelledby",r)}),this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role","tabpanel"),i&&(this._off(i.not(this.tabs)),this._off(s.not(this.anchors)),this._off(n.not(this.panels)))},_getList:function(){return this.tablist||this.element.find("ol,ul").eq(0)},_createPanel:function(t){return e("<div>").attr("id",t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy",!0)},_setupDisabled:function(t){e.isArray(t)&&(t.length?t.length===this.anchors.length&&(t=!0):t=!1);for(var i,s=0;i=this.tabs[s];s++)t===!0||-1!==e.inArray(s,t)?e(i).addClass("ui-state-disabled").attr("aria-disabled","true"):e(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");this.options.disabled=t},_setupEvents:function(t){var i={};t&&e.each(t.split(" "),function(e,t){i[t]="_eventHandler"}),this._off(this.anchors.add(this.tabs).add(this.panels)),this._on(!0,this.anchors,{click:function(e){e.preventDefault()}}),this._on(this.anchors,i),this._on(this.tabs,{keydown:"_tabKeydown"}),this._on(this.panels,{keydown:"_panelKeydown"}),this._focusable(this.tabs),this._hoverable(this.tabs)},_setupHeightStyle:function(t){var i,s=this.element.parent();"fill"===t?(i=s.height(),i-=this.element.outerHeight()-this.element.height(),this.element.siblings(":visible").each(function(){var t=e(this),s=t.css("position");"absolute"!==s&&"fixed"!==s&&(i-=t.outerHeight(!0))}),this.element.children().not(this.panels).each(function(){i-=e(this).outerHeight(!0)}),this.panels.each(function(){e(this).height(Math.max(0,i-e(this).innerHeight()+e(this).height()))}).css("overflow","auto")):"auto"===t&&(i=0,this.panels.each(function(){i=Math.max(i,e(this).height("").height())}).height(i))},_eventHandler:function(t){var i=this.options,s=this.active,n=e(t.currentTarget),a=n.closest("li"),o=a[0]===s[0],r=o&&i.collapsible,h=r?e():this._getPanelForTab(a),l=s.length?this._getPanelForTab(s):e(),u={oldTab:s,oldPanel:l,newTab:r?e():a,newPanel:h};t.preventDefault(),a.hasClass("ui-state-disabled")||a.hasClass("ui-tabs-loading")||this.running||o&&!i.collapsible||this._trigger("beforeActivate",t,u)===!1||(i.active=r?!1:this.tabs.index(a),this.active=o?e():a,this.xhr&&this.xhr.abort(),l.length||h.length||e.error("jQuery UI Tabs: Mismatching fragment identifier."),h.length&&this.load(this.tabs.index(a),t),this._toggle(t,u))},_toggle:function(t,i){function s(){a.running=!1,a._trigger("activate",t,i)}function n(){i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"),o.length&&a.options.show?a._show(o,a.options.show,s):(o.show(),s())}var a=this,o=i.newPanel,r=i.oldPanel;this.running=!0,r.length&&this.options.hide?this._hide(r,this.options.hide,function(){i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),n()}):(i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"),r.hide(),n()),r.attr("aria-hidden","true"),i.oldTab.attr({"aria-selected":"false","aria-expanded":"false"}),o.length&&r.length?i.oldTab.attr("tabIndex",-1):o.length&&this.tabs.filter(function(){return 0===e(this).attr("tabIndex")}).attr("tabIndex",-1),o.attr("aria-hidden","false"),i.newTab.attr({"aria-selected":"true","aria-expanded":"true",tabIndex:0})},_activate:function(t){var i,s=this._findActive(t);s[0]!==this.active[0]&&(s.length||(s=this.active),i=s.find(".ui-tabs-anchor")[0],this._eventHandler({target:i,currentTarget:i,preventDefault:e.noop}))},_findActive:function(t){return t===!1?e():this.tabs.eq(t)},_getIndex:function(e){return"string"==typeof e&&(e=this.anchors.index(this.anchors.filter("[href$='"+e+"']"))),e},_destroy:function(){this.xhr&&this.xhr.abort(),this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"),this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"),this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(),this.tablist.unbind(this.eventNamespace),this.tabs.add(this.panels).each(function(){e.data(this,"ui-tabs-destroy")?e(this).remove():e(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")}),this.tabs.each(function(){var t=e(this),i=t.data("ui-tabs-aria-controls");i?t.attr("aria-controls",i).removeData("ui-tabs-aria-controls"):t.removeAttr("aria-controls")}),this.panels.show(),"content"!==this.options.heightStyle&&this.panels.css("height","")},enable:function(t){var i=this.options.disabled;i!==!1&&(void 0===t?i=!1:(t=this._getIndex(t),i=e.isArray(i)?e.map(i,function(e){return e!==t?e:null}):e.map(this.tabs,function(e,i){return i!==t?i:null})),this._setupDisabled(i))},disable:function(t){var i=this.options.disabled;if(i!==!0){if(void 0===t)i=!0;else{if(t=this._getIndex(t),-1!==e.inArray(t,i))return;i=e.isArray(i)?e.merge([t],i).sort():[t]}this._setupDisabled(i)}},load:function(t,i){t=this._getIndex(t);var s=this,n=this.tabs.eq(t),a=n.find(".ui-tabs-anchor"),o=this._getPanelForTab(n),r={tab:n,panel:o};this._isLocal(a[0])||(this.xhr=e.ajax(this._ajaxSettings(a,i,r)),this.xhr&&"canceled"!==this.xhr.statusText&&(n.addClass("ui-tabs-loading"),o.attr("aria-busy","true"),this.xhr.success(function(e){setTimeout(function(){o.html(e),s._trigger("load",i,r)},1)}).complete(function(e,t){setTimeout(function(){"abort"===t&&s.panels.stop(!1,!0),n.removeClass("ui-tabs-loading"),o.removeAttr("aria-busy"),e===s.xhr&&delete s.xhr},1)})))},_ajaxSettings:function(t,i,s){var n=this;return{url:t.attr("href"),beforeSend:function(t,a){return n._trigger("beforeLoad",i,e.extend({jqXHR:t,ajaxSettings:a},s))}}},_getPanelForTab:function(t){var i=e(t).attr("aria-controls");return this.element.find(this._sanitizeSelector("#"+i))}}),e.widget("ui.tooltip",{version:"1.11.3",options:{content:function(){var t=e(this).attr("title")||"";return e("<a>").text(t).html()},hide:!0,items:"[title]:not([disabled])",position:{my:"left top+15",at:"left bottom",collision:"flipfit flip"},show:!0,tooltipClass:null,track:!1,close:null,open:null},_addDescribedBy:function(t,i){var s=(t.attr("aria-describedby")||"").split(/\s+/);s.push(i),t.data("ui-tooltip-id",i).attr("aria-describedby",e.trim(s.join(" ")))},_removeDescribedBy:function(t){var i=t.data("ui-tooltip-id"),s=(t.attr("aria-describedby")||"").split(/\s+/),n=e.inArray(i,s);-1!==n&&s.splice(n,1),t.removeData("ui-tooltip-id"),s=e.trim(s.join(" ")),s?t.attr("aria-describedby",s):t.removeAttr("aria-describedby")},_create:function(){this._on({mouseover:"open",focusin:"open"}),this.tooltips={},this.parents={},this.options.disabled&&this._disable(),this.liveRegion=e("<div>").attr({role:"log","aria-live":"assertive","aria-relevant":"additions"}).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)},_setOption:function(t,i){var s=this;return"disabled"===t?(this[i?"_disable":"_enable"](),this.options[t]=i,void 0):(this._super(t,i),"content"===t&&e.each(this.tooltips,function(e,t){s._updateContent(t.element)}),void 0)},_disable:function(){var t=this;e.each(this.tooltips,function(i,s){var n=e.Event("blur");n.target=n.currentTarget=s.element[0],t.close(n,!0)}),this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.is("[title]")&&t.data("ui-tooltip-title",t.attr("title")).removeAttr("title")})},_enable:function(){this.element.find(this.options.items).addBack().each(function(){var t=e(this);t.data("ui-tooltip-title")&&t.attr("title",t.data("ui-tooltip-title"))})},open:function(t){var i=this,s=e(t?t.target:this.element).closest(this.options.items);s.length&&!s.data("ui-tooltip-id")&&(s.attr("title")&&s.data("ui-tooltip-title",s.attr("title")),s.data("ui-tooltip-open",!0),t&&"mouseover"===t.type&&s.parents().each(function(){var t,s=e(this);s.data("ui-tooltip-open")&&(t=e.Event("blur"),t.target=t.currentTarget=this,i.close(t,!0)),s.attr("title")&&(s.uniqueId(),i.parents[this.id]={element:this,title:s.attr("title")},s.attr("title",""))}),this._updateContent(s,t))},_updateContent:function(e,t){var i,s=this.options.content,n=this,a=t?t.type:null;return"string"==typeof s?this._open(t,e,s):(i=s.call(e[0],function(i){e.data("ui-tooltip-open")&&n._delay(function(){t&&(t.type=a),this._open(t,e,i)})}),i&&this._open(t,e,i),void 0)},_open:function(t,i,s){function n(e){u.of=e,o.is(":hidden")||o.position(u)}var a,o,r,h,l,u=e.extend({},this.options.position);if(s){if(a=this._find(i))return a.tooltip.find(".ui-tooltip-content").html(s),void 0;i.is("[title]")&&(t&&"mouseover"===t.type?i.attr("title",""):i.removeAttr("title")),a=this._tooltip(i),o=a.tooltip,this._addDescribedBy(i,o.attr("id")),o.find(".ui-tooltip-content").html(s),this.liveRegion.children().hide(),s.clone?(l=s.clone(),l.removeAttr("id").find("[id]").removeAttr("id")):l=s,e("<div>").html(l).appendTo(this.liveRegion),this.options.track&&t&&/^mouse/.test(t.type)?(this._on(this.document,{mousemove:n}),n(t)):o.position(e.extend({of:i},this.options.position)),o.hide(),this._show(o,this.options.show),this.options.show&&this.options.show.delay&&(h=this.delayedShow=setInterval(function(){o.is(":visible")&&(n(u.of),clearInterval(h))},e.fx.interval)),this._trigger("open",t,{tooltip:o}),r={keyup:function(t){if(t.keyCode===e.ui.keyCode.ESCAPE){var s=e.Event(t);s.currentTarget=i[0],this.close(s,!0)}}},i[0]!==this.element[0]&&(r.remove=function(){this._removeTooltip(o)}),t&&"mouseover"!==t.type||(r.mouseleave="close"),t&&"focusin"!==t.type||(r.focusout="close"),this._on(!0,i,r)}},close:function(t){var i,s=this,n=e(t?t.currentTarget:this.element),a=this._find(n);a&&(i=a.tooltip,a.closing||(clearInterval(this.delayedShow),n.data("ui-tooltip-title")&&!n.attr("title")&&n.attr("title",n.data("ui-tooltip-title")),this._removeDescribedBy(n),a.hiding=!0,i.stop(!0),this._hide(i,this.options.hide,function(){s._removeTooltip(e(this))}),n.removeData("ui-tooltip-open"),this._off(n,"mouseleave focusout keyup"),n[0]!==this.element[0]&&this._off(n,"remove"),this._off(this.document,"mousemove"),t&&"mouseleave"===t.type&&e.each(this.parents,function(t,i){e(i.element).attr("title",i.title),delete s.parents[t]}),a.closing=!0,this._trigger("close",t,{tooltip:i}),a.hiding||(a.closing=!1)))},_tooltip:function(t){var i=e("<div>").attr("role","tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content "+(this.options.tooltipClass||"")),s=i.uniqueId().attr("id");return e("<div>").addClass("ui-tooltip-content").appendTo(i),i.appendTo(this.document[0].body),this.tooltips[s]={element:t,tooltip:i}},_find:function(e){var t=e.data("ui-tooltip-id");return t?this.tooltips[t]:null},_removeTooltip:function(e){e.remove(),delete this.tooltips[e.attr("id")]},_destroy:function(){var t=this;e.each(this.tooltips,function(i,s){var n=e.Event("blur"),a=s.element;n.target=n.currentTarget=a[0],t.close(n,!0),e("#"+i).remove(),a.data("ui-tooltip-title")&&(a.attr("title")||a.attr("title",a.data("ui-tooltip-title")),a.removeData("ui-tooltip-title"))}),this.liveRegion.remove()}});var y="ui-effects-",b=e;e.effects={effect:{}},function(e,t){function i(e,t,i){var s=d[t.type]||{};return null==e?i||!t.def?null:t.def:(e=s.floor?~~e:parseFloat(e),isNaN(e)?t.def:s.mod?(e+s.mod)%s.mod:0>e?0:e>s.max?s.max:e)}function s(i){var s=l(),n=s._rgba=[];return i=i.toLowerCase(),f(h,function(e,a){var o,r=a.re.exec(i),h=r&&a.parse(r),l=a.space||"rgba";return h?(o=s[l](h),s[u[l].cache]=o[u[l].cache],n=s._rgba=o._rgba,!1):t}),n.length?("0,0,0,0"===n.join()&&e.extend(n,a.transparent),s):a[i]}function n(e,t,i){return i=(i+1)%1,1>6*i?e+6*(t-e)*i:1>2*i?t:2>3*i?e+6*(t-e)*(2/3-i):e}var a,o="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",r=/^([\-+])=\s*(\d+\.?\d*)/,h=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],l=e.Color=function(t,i,s,n){return new e.Color.fn.parse(t,i,s,n)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},d={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},c=l.support={},p=e("<p>")[0],f=e.each;p.style.cssText="background-color:rgba(1,1,1,.5)",c.rgba=p.style.backgroundColor.indexOf("rgba")>-1,f(u,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),l.fn=e.extend(l.prototype,{parse:function(n,o,r,h){if(n===t)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=e(n).css(o),o=t);var d=this,c=e.type(n),p=this._rgba=[];return o!==t&&(n=[n,o,r,h],c="array"),"string"===c?this.parse(s(n)||a._default):"array"===c?(f(u.rgba.props,function(e,t){p[t.idx]=i(n[t.idx],t)}),this):"object"===c?(n instanceof l?f(u,function(e,t){n[t.cache]&&(d[t.cache]=n[t.cache].slice())}):f(u,function(t,s){var a=s.cache;f(s.props,function(e,t){if(!d[a]&&s.to){if("alpha"===e||null==n[e])return;d[a]=s.to(d._rgba)}d[a][t.idx]=i(n[e],t,!0)}),d[a]&&0>e.inArray(null,d[a].slice(0,3))&&(d[a][3]=1,s.from&&(d._rgba=s.from(d[a])))}),this):t},is:function(e){var i=l(e),s=!0,n=this;return f(u,function(e,a){var o,r=i[a.cache];return r&&(o=n[a.cache]||a.to&&a.to(n._rgba)||[],f(a.props,function(e,i){return null!=r[i.idx]?s=r[i.idx]===o[i.idx]:t})),s}),s},_space:function(){var e=[],t=this;return f(u,function(i,s){t[s.cache]&&e.push(i)}),e.pop()},transition:function(e,t){var s=l(e),n=s._space(),a=u[n],o=0===this.alpha()?l("transparent"):this,r=o[a.cache]||a.to(o._rgba),h=r.slice();return s=s[a.cache],f(a.props,function(e,n){var a=n.idx,o=r[a],l=s[a],u=d[n.type]||{};null!==l&&(null===o?h[a]=l:(u.mod&&(l-o>u.mod/2?o+=u.mod:o-l>u.mod/2&&(o-=u.mod)),h[a]=i((l-o)*t+o,n)))}),this[n](h)},blend:function(t){if(1===this._rgba[3])return this;var i=this._rgba.slice(),s=i.pop(),n=l(t)._rgba;return l(e.map(i,function(e,t){return(1-s)*n[t]+s*e}))},toRgbaString:function(){var t="rgba(",i=e.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===i[3]&&(i.pop(),t="rgb("),t+i.join()+")"},toHslaString:function(){var t="hsla(",i=e.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&3>t&&(e=Math.round(100*e)+"%"),e});return 1===i[3]&&(i.pop(),t="hsl("),t+i.join()+")"},toHexString:function(t){var i=this._rgba.slice(),s=i.pop();return t&&i.push(~~(255*s)),"#"+e.map(i,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,u.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,i,s=e[0]/255,n=e[1]/255,a=e[2]/255,o=e[3],r=Math.max(s,n,a),h=Math.min(s,n,a),l=r-h,u=r+h,d=.5*u;return t=h===r?0:s===r?60*(n-a)/l+360:n===r?60*(a-s)/l+120:60*(s-n)/l+240,i=0===l?0:.5>=d?l/u:l/(2-u),[Math.round(t)%360,i,d,null==o?1:o]},u.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,i=e[1],s=e[2],a=e[3],o=.5>=s?s*(1+i):s+i-s*i,r=2*s-o;return[Math.round(255*n(r,o,t+1/3)),Math.round(255*n(r,o,t)),Math.round(255*n(r,o,t-1/3)),a]},f(u,function(s,n){var a=n.props,o=n.cache,h=n.to,u=n.from;l.fn[s]=function(s){if(h&&!this[o]&&(this[o]=h(this._rgba)),s===t)return this[o].slice();var n,r=e.type(s),d="array"===r||"object"===r?s:arguments,c=this[o].slice();return f(a,function(e,t){var s=d["object"===r?e:t.idx];null==s&&(s=c[t.idx]),c[t.idx]=i(s,t)}),u?(n=l(u(c)),n[o]=c,n):l(c)},f(a,function(t,i){l.fn[t]||(l.fn[t]=function(n){var a,o=e.type(n),h="alpha"===t?this._hsla?"hsla":"rgba":s,l=this[h](),u=l[i.idx];return"undefined"===o?u:("function"===o&&(n=n.call(this,u),o=e.type(n)),null==n&&i.empty?this:("string"===o&&(a=r.exec(n),a&&(n=u+parseFloat(a[2])*("+"===a[1]?1:-1))),l[i.idx]=n,this[h](l)))})})}),l.hook=function(t){var i=t.split(" ");f(i,function(t,i){e.cssHooks[i]={set:function(t,n){var a,o,r="";if("transparent"!==n&&("string"!==e.type(n)||(a=s(n)))){if(n=l(a||n),!c.rgba&&1!==n._rgba[3]){for(o="backgroundColor"===i?t.parentNode:t;(""===r||"transparent"===r)&&o&&o.style;)try{r=e.css(o,"backgroundColor"),o=o.parentNode}catch(h){}n=n.blend(r&&"transparent"!==r?r:"_default")}n=n.toRgbaString()}try{t.style[i]=n}catch(h){}}},e.fx.step[i]=function(t){t.colorInit||(t.start=l(t.elem,i),t.end=l(t.end),t.colorInit=!0),e.cssHooks[i].set(t.elem,t.start.transition(t.end,t.pos))}})},l.hook(o),e.cssHooks.borderColor={expand:function(e){var t={};return f(["Top","Right","Bottom","Left"],function(i,s){t["border"+s+"Color"]=e}),t}},a=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(b),function(){function t(t){var i,s,n=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,a={};if(n&&n.length&&n[0]&&n[n[0]])for(s=n.length;s--;)i=n[s],"string"==typeof n[i]&&(a[e.camelCase(i)]=n[i]);else for(i in n)"string"==typeof n[i]&&(a[i]=n[i]);return a}function i(t,i){var s,a,o={};for(s in i)a=i[s],t[s]!==a&&(n[s]||(e.fx.step[s]||!isNaN(parseFloat(a)))&&(o[s]=a));return o}var s=["add","remove","toggle"],n={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,i){e.fx.step[i]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(b.style(e.elem,i,e.end),e.setAttr=!0)}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(n,a,o,r){var h=e.speed(a,o,r);return this.queue(function(){var a,o=e(this),r=o.attr("class")||"",l=h.children?o.find("*").addBack():o;l=l.map(function(){var i=e(this);return{el:i,start:t(this)}}),a=function(){e.each(s,function(e,t){n[t]&&o[t+"Class"](n[t])})},a(),l=l.map(function(){return this.end=t(this.el[0]),this.diff=i(this.start,this.end),this}),o.attr("class",r),l=l.map(function(){var t=this,i=e.Deferred(),s=e.extend({},h,{queue:!1,complete:function(){i.resolve(t)}});return this.el.animate(this.diff,s),i.promise()}),e.when.apply(e,l.get()).done(function(){a(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),h.complete.call(o[0])})})},e.fn.extend({addClass:function(t){return function(i,s,n,a){return s?e.effects.animateClass.call(this,{add:i},s,n,a):t.apply(this,arguments)}}(e.fn.addClass),removeClass:function(t){return function(i,s,n,a){return arguments.length>1?e.effects.animateClass.call(this,{remove:i},s,n,a):t.apply(this,arguments)}}(e.fn.removeClass),toggleClass:function(t){return function(i,s,n,a,o){return"boolean"==typeof s||void 0===s?n?e.effects.animateClass.call(this,s?{add:i}:{remove:i},n,a,o):t.apply(this,arguments):e.effects.animateClass.call(this,{toggle:i},s,n,a)}}(e.fn.toggleClass),switchClass:function(t,i,s,n,a){return e.effects.animateClass.call(this,{add:i,remove:t},s,n,a)}})}(),function(){function t(t,i,s,n){return e.isPlainObject(t)&&(i=t,t=t.effect),t={effect:t},null==i&&(i={}),e.isFunction(i)&&(n=i,s=null,i={}),("number"==typeof i||e.fx.speeds[i])&&(n=s,s=i,i={}),e.isFunction(s)&&(n=s,s=null),i&&e.extend(t,i),s=s||i.duration,t.duration=e.fx.off?0:"number"==typeof s?s:s in e.fx.speeds?e.fx.speeds[s]:e.fx.speeds._default,t.complete=n||i.complete,t}function i(t){return!t||"number"==typeof t||e.fx.speeds[t]?!0:"string"!=typeof t||e.effects.effect[t]?e.isFunction(t)?!0:"object"!=typeof t||t.effect?!1:!0:!0}e.extend(e.effects,{version:"1.11.3",save:function(e,t){for(var i=0;t.length>i;i++)null!==t[i]&&e.data(y+t[i],e[0].style[t[i]])},restore:function(e,t){var i,s;for(s=0;t.length>s;s++)null!==t[s]&&(i=e.data(y+t[s]),void 0===i&&(i=""),e.css(t[s],i))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var i,s;switch(e[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=e[0]/t.height}switch(e[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=e[1]/t.width}return{x:s,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var i={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},s=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),n={width:t.width(),height:t.height()},a=document.activeElement;try{a.id}catch(o){a=document.body}return t.wrap(s),(t[0]===a||e.contains(t[0],a))&&e(a).focus(),s=t.parent(),"static"===t.css("position")?(s.css({position:"relative"}),t.css({position:"relative"})):(e.extend(i,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,s){i[s]=t.css(s),isNaN(parseInt(i[s],10))&&(i[s]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(n),s.css(i).show()},removeWrapper:function(t){var i=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===i||e.contains(t[0],i))&&e(i).focus()),t},setTransition:function(t,i,s,n){return n=n||{},e.each(i,function(e,i){var a=t.cssUnit(i);a[0]>0&&(n[i]=a[0]*s+a[1])}),n}}),e.fn.extend({effect:function(){function i(t){function i(){e.isFunction(a)&&a.call(n[0]),e.isFunction(t)&&t()}var n=e(this),a=s.complete,r=s.mode;(n.is(":hidden")?"hide"===r:"show"===r)?(n[r](),i()):o.call(n[0],s,i)}var s=t.apply(this,arguments),n=s.mode,a=s.queue,o=e.effects.effect[s.effect];return e.fx.off||!o?n?this[n](s.duration,s.complete):this.each(function(){s.complete&&s.complete.call(this)
}):a===!1?this.each(i):this.queue(a||"fx",i)},show:function(e){return function(s){if(i(s))return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="show",this.effect.call(this,n)}}(e.fn.show),hide:function(e){return function(s){if(i(s))return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="hide",this.effect.call(this,n)}}(e.fn.hide),toggle:function(e){return function(s){if(i(s)||"boolean"==typeof s)return e.apply(this,arguments);var n=t.apply(this,arguments);return n.mode="toggle",this.effect.call(this,n)}}(e.fn.toggle),cssUnit:function(t){var i=this.css(t),s=[];return e.each(["em","px","%","pt"],function(e,t){i.indexOf(t)>0&&(s=[parseFloat(i),t])}),s}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,i){t[i]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,i=4;((t=Math.pow(2,--i))-1)/11>e;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,i){e.easing["easeIn"+t]=i,e.easing["easeOut"+t]=function(e){return 1-i(1-e)},e.easing["easeInOut"+t]=function(e){return.5>e?i(2*e)/2:1-i(-2*e+2)/2}})}(),e.effects,e.effects.effect.blind=function(t,i){var s,n,a,o=e(this),r=/up|down|vertical/,h=/up|left|vertical|horizontal/,l=["position","top","bottom","left","right","height","width"],u=e.effects.setMode(o,t.mode||"hide"),d=t.direction||"up",c=r.test(d),p=c?"height":"width",f=c?"top":"left",m=h.test(d),g={},v="show"===u;o.parent().is(".ui-effects-wrapper")?e.effects.save(o.parent(),l):e.effects.save(o,l),o.show(),s=e.effects.createWrapper(o).css({overflow:"hidden"}),n=s[p](),a=parseFloat(s.css(f))||0,g[p]=v?n:0,m||(o.css(c?"bottom":"right",0).css(c?"top":"left","auto").css({position:"absolute"}),g[f]=v?a:n+a),v&&(s.css(p,0),m||s.css(f,a+n)),s.animate(g,{duration:t.duration,easing:t.easing,queue:!1,complete:function(){"hide"===u&&o.hide(),e.effects.restore(o,l),e.effects.removeWrapper(o),i()}})},e.effects.effect.bounce=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","height","width"],h=e.effects.setMode(o,t.mode||"effect"),l="hide"===h,u="show"===h,d=t.direction||"up",c=t.distance,p=t.times||5,f=2*p+(u||l?1:0),m=t.duration/f,g=t.easing,v="up"===d||"down"===d?"top":"left",y="up"===d||"left"===d,b=o.queue(),_=b.length;for((u||l)&&r.push("opacity"),e.effects.save(o,r),o.show(),e.effects.createWrapper(o),c||(c=o["top"===v?"outerHeight":"outerWidth"]()/3),u&&(a={opacity:1},a[v]=0,o.css("opacity",0).css(v,y?2*-c:2*c).animate(a,m,g)),l&&(c/=Math.pow(2,p-1)),a={},a[v]=0,s=0;p>s;s++)n={},n[v]=(y?"-=":"+=")+c,o.animate(n,m,g).animate(a,m,g),c=l?2*c:c/2;l&&(n={opacity:0},n[v]=(y?"-=":"+=")+c,o.animate(n,m,g)),o.queue(function(){l&&o.hide(),e.effects.restore(o,r),e.effects.removeWrapper(o),i()}),_>1&&b.splice.apply(b,[1,0].concat(b.splice(_,f+1))),o.dequeue()},e.effects.effect.clip=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","height","width"],h=e.effects.setMode(o,t.mode||"hide"),l="show"===h,u=t.direction||"vertical",d="vertical"===u,c=d?"height":"width",p=d?"top":"left",f={};e.effects.save(o,r),o.show(),s=e.effects.createWrapper(o).css({overflow:"hidden"}),n="IMG"===o[0].tagName?s:o,a=n[c](),l&&(n.css(c,0),n.css(p,a/2)),f[c]=l?a:0,f[p]=l?0:a/2,n.animate(f,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){l||o.hide(),e.effects.restore(o,r),e.effects.removeWrapper(o),i()}})},e.effects.effect.drop=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","opacity","height","width"],o=e.effects.setMode(n,t.mode||"hide"),r="show"===o,h=t.direction||"left",l="up"===h||"down"===h?"top":"left",u="up"===h||"left"===h?"pos":"neg",d={opacity:r?1:0};e.effects.save(n,a),n.show(),e.effects.createWrapper(n),s=t.distance||n["top"===l?"outerHeight":"outerWidth"](!0)/2,r&&n.css("opacity",0).css(l,"pos"===u?-s:s),d[l]=(r?"pos"===u?"+=":"-=":"pos"===u?"-=":"+=")+s,n.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}})},e.effects.effect.explode=function(t,i){function s(){b.push(this),b.length===d*c&&n()}function n(){p.css({visibility:"visible"}),e(b).remove(),m||p.hide(),i()}var a,o,r,h,l,u,d=t.pieces?Math.round(Math.sqrt(t.pieces)):3,c=d,p=e(this),f=e.effects.setMode(p,t.mode||"hide"),m="show"===f,g=p.show().css("visibility","hidden").offset(),v=Math.ceil(p.outerWidth()/c),y=Math.ceil(p.outerHeight()/d),b=[];for(a=0;d>a;a++)for(h=g.top+a*y,u=a-(d-1)/2,o=0;c>o;o++)r=g.left+o*v,l=o-(c-1)/2,p.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-o*v,top:-a*y}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:y,left:r+(m?l*v:0),top:h+(m?u*y:0),opacity:m?0:1}).animate({left:r+(m?0:l*v),top:h+(m?0:u*y),opacity:m?1:0},t.duration||500,t.easing,s)},e.effects.effect.fade=function(t,i){var s=e(this),n=e.effects.setMode(s,t.mode||"toggle");s.animate({opacity:n},{queue:!1,duration:t.duration,easing:t.easing,complete:i})},e.effects.effect.fold=function(t,i){var s,n,a=e(this),o=["position","top","bottom","left","right","height","width"],r=e.effects.setMode(a,t.mode||"hide"),h="show"===r,l="hide"===r,u=t.size||15,d=/([0-9]+)%/.exec(u),c=!!t.horizFirst,p=h!==c,f=p?["width","height"]:["height","width"],m=t.duration/2,g={},v={};e.effects.save(a,o),a.show(),s=e.effects.createWrapper(a).css({overflow:"hidden"}),n=p?[s.width(),s.height()]:[s.height(),s.width()],d&&(u=parseInt(d[1],10)/100*n[l?0:1]),h&&s.css(c?{height:0,width:u}:{height:u,width:0}),g[f[0]]=h?n[0]:u,v[f[1]]=h?n[1]:0,s.animate(g,m,t.easing).animate(v,m,t.easing,function(){l&&a.hide(),e.effects.restore(a,o),e.effects.removeWrapper(a),i()})},e.effects.effect.highlight=function(t,i){var s=e(this),n=["backgroundImage","backgroundColor","opacity"],a=e.effects.setMode(s,t.mode||"show"),o={backgroundColor:s.css("backgroundColor")};"hide"===a&&(o.opacity=0),e.effects.save(s,n),s.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(o,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===a&&s.hide(),e.effects.restore(s,n),i()}})},e.effects.effect.size=function(t,i){var s,n,a,o=e(this),r=["position","top","bottom","left","right","width","height","overflow","opacity"],h=["position","top","bottom","left","right","overflow","opacity"],l=["width","height","overflow"],u=["fontSize"],d=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],c=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],p=e.effects.setMode(o,t.mode||"effect"),f=t.restore||"effect"!==p,m=t.scale||"both",g=t.origin||["middle","center"],v=o.css("position"),y=f?r:h,b={height:0,width:0,outerHeight:0,outerWidth:0};"show"===p&&o.show(),s={height:o.height(),width:o.width(),outerHeight:o.outerHeight(),outerWidth:o.outerWidth()},"toggle"===t.mode&&"show"===p?(o.from=t.to||b,o.to=t.from||s):(o.from=t.from||("show"===p?b:s),o.to=t.to||("hide"===p?b:s)),a={from:{y:o.from.height/s.height,x:o.from.width/s.width},to:{y:o.to.height/s.height,x:o.to.width/s.width}},("box"===m||"both"===m)&&(a.from.y!==a.to.y&&(y=y.concat(d),o.from=e.effects.setTransition(o,d,a.from.y,o.from),o.to=e.effects.setTransition(o,d,a.to.y,o.to)),a.from.x!==a.to.x&&(y=y.concat(c),o.from=e.effects.setTransition(o,c,a.from.x,o.from),o.to=e.effects.setTransition(o,c,a.to.x,o.to))),("content"===m||"both"===m)&&a.from.y!==a.to.y&&(y=y.concat(u).concat(l),o.from=e.effects.setTransition(o,u,a.from.y,o.from),o.to=e.effects.setTransition(o,u,a.to.y,o.to)),e.effects.save(o,y),o.show(),e.effects.createWrapper(o),o.css("overflow","hidden").css(o.from),g&&(n=e.effects.getBaseline(g,s),o.from.top=(s.outerHeight-o.outerHeight())*n.y,o.from.left=(s.outerWidth-o.outerWidth())*n.x,o.to.top=(s.outerHeight-o.to.outerHeight)*n.y,o.to.left=(s.outerWidth-o.to.outerWidth)*n.x),o.css(o.from),("content"===m||"both"===m)&&(d=d.concat(["marginTop","marginBottom"]).concat(u),c=c.concat(["marginLeft","marginRight"]),l=r.concat(d).concat(c),o.find("*[width]").each(function(){var i=e(this),s={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};f&&e.effects.save(i,l),i.from={height:s.height*a.from.y,width:s.width*a.from.x,outerHeight:s.outerHeight*a.from.y,outerWidth:s.outerWidth*a.from.x},i.to={height:s.height*a.to.y,width:s.width*a.to.x,outerHeight:s.height*a.to.y,outerWidth:s.width*a.to.x},a.from.y!==a.to.y&&(i.from=e.effects.setTransition(i,d,a.from.y,i.from),i.to=e.effects.setTransition(i,d,a.to.y,i.to)),a.from.x!==a.to.x&&(i.from=e.effects.setTransition(i,c,a.from.x,i.from),i.to=e.effects.setTransition(i,c,a.to.x,i.to)),i.css(i.from),i.animate(i.to,t.duration,t.easing,function(){f&&e.effects.restore(i,l)})})),o.animate(o.to,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){0===o.to.opacity&&o.css("opacity",o.from.opacity),"hide"===p&&o.hide(),e.effects.restore(o,y),f||("static"===v?o.css({position:"relative",top:o.to.top,left:o.to.left}):e.each(["top","left"],function(e,t){o.css(t,function(t,i){var s=parseInt(i,10),n=e?o.to.left:o.to.top;return"auto"===i?n+"px":s+n+"px"})})),e.effects.removeWrapper(o),i()}})},e.effects.effect.scale=function(t,i){var s=e(this),n=e.extend(!0,{},t),a=e.effects.setMode(s,t.mode||"effect"),o=parseInt(t.percent,10)||(0===parseInt(t.percent,10)?0:"hide"===a?0:100),r=t.direction||"both",h=t.origin,l={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},u={y:"horizontal"!==r?o/100:1,x:"vertical"!==r?o/100:1};n.effect="size",n.queue=!1,n.complete=i,"effect"!==a&&(n.origin=h||["middle","center"],n.restore=!0),n.from=t.from||("show"===a?{height:0,width:0,outerHeight:0,outerWidth:0}:l),n.to={height:l.height*u.y,width:l.width*u.x,outerHeight:l.outerHeight*u.y,outerWidth:l.outerWidth*u.x},n.fade&&("show"===a&&(n.from.opacity=0,n.to.opacity=1),"hide"===a&&(n.from.opacity=1,n.to.opacity=0)),s.effect(n)},e.effects.effect.puff=function(t,i){var s=e(this),n=e.effects.setMode(s,t.mode||"hide"),a="hide"===n,o=parseInt(t.percent,10)||150,r=o/100,h={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()};e.extend(t,{effect:"scale",queue:!1,fade:!0,mode:n,complete:i,percent:a?o:100,from:a?h:{height:h.height*r,width:h.width*r,outerHeight:h.outerHeight*r,outerWidth:h.outerWidth*r}}),s.effect(t)},e.effects.effect.pulsate=function(t,i){var s,n=e(this),a=e.effects.setMode(n,t.mode||"show"),o="show"===a,r="hide"===a,h=o||"hide"===a,l=2*(t.times||5)+(h?1:0),u=t.duration/l,d=0,c=n.queue(),p=c.length;for((o||!n.is(":visible"))&&(n.css("opacity",0).show(),d=1),s=1;l>s;s++)n.animate({opacity:d},u,t.easing),d=1-d;n.animate({opacity:d},u,t.easing),n.queue(function(){r&&n.hide(),i()}),p>1&&c.splice.apply(c,[1,0].concat(c.splice(p,l+1))),n.dequeue()},e.effects.effect.shake=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","height","width"],o=e.effects.setMode(n,t.mode||"effect"),r=t.direction||"left",h=t.distance||20,l=t.times||3,u=2*l+1,d=Math.round(t.duration/u),c="up"===r||"down"===r?"top":"left",p="up"===r||"left"===r,f={},m={},g={},v=n.queue(),y=v.length;for(e.effects.save(n,a),n.show(),e.effects.createWrapper(n),f[c]=(p?"-=":"+=")+h,m[c]=(p?"+=":"-=")+2*h,g[c]=(p?"-=":"+=")+2*h,n.animate(f,d,t.easing),s=1;l>s;s++)n.animate(m,d,t.easing).animate(g,d,t.easing);n.animate(m,d,t.easing).animate(f,d/2,t.easing).queue(function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}),y>1&&v.splice.apply(v,[1,0].concat(v.splice(y,u+1))),n.dequeue()},e.effects.effect.slide=function(t,i){var s,n=e(this),a=["position","top","bottom","left","right","width","height"],o=e.effects.setMode(n,t.mode||"show"),r="show"===o,h=t.direction||"left",l="up"===h||"down"===h?"top":"left",u="up"===h||"left"===h,d={};e.effects.save(n,a),n.show(),s=t.distance||n["top"===l?"outerHeight":"outerWidth"](!0),e.effects.createWrapper(n).css({overflow:"hidden"}),r&&n.css(l,u?isNaN(s)?"-"+s:-s:s),d[l]=(r?u?"+=":"-=":u?"-=":"+=")+s,n.animate(d,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===o&&n.hide(),e.effects.restore(n,a),e.effects.removeWrapper(n),i()}})},e.effects.effect.transfer=function(t,i){var s=e(this),n=e(t.to),a="fixed"===n.css("position"),o=e("body"),r=a?o.scrollTop():0,h=a?o.scrollLeft():0,l=n.offset(),u={top:l.top-r,left:l.left-h,height:n.innerHeight(),width:n.innerWidth()},d=s.offset(),c=e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({top:d.top-r,left:d.left-h,height:s.innerHeight(),width:s.innerWidth(),position:a?"fixed":"absolute"}).animate(u,t.duration,t.easing,function(){c.remove(),i()})}});/*!
 DataTables 1.10.9
 ©2008-2015 SpryMedia Ltd - datatables.net/license
*/
(function(Fa,T,k){var S=function(h){function X(a){var b,c,d={};h.each(a,function(e){if((b=e.match(/^([^A-Z]+?)([A-Z])/))&&-1!=="a aa ai ao as b fn i m o s ".indexOf(b[1]+" "))c=e.replace(b[0],b[2].toLowerCase()),d[c]=e,"o"===b[1]&&X(a[e])});a._hungarianMap=d}function I(a,b,c){a._hungarianMap||X(a);var d;h.each(b,function(e){d=a._hungarianMap[e];if(d!==k&&(c||b[d]===k))"o"===d.charAt(0)?(b[d]||(b[d]={}),h.extend(!0,b[d],b[e]),I(a[d],b[d],c)):b[d]=b[e]})}function S(a){var b=m.defaults.oLanguage,c=a.sZeroRecords;
!a.sEmptyTable&&(c&&"No data available in table"===b.sEmptyTable)&&F(a,a,"sZeroRecords","sEmptyTable");!a.sLoadingRecords&&(c&&"Loading..."===b.sLoadingRecords)&&F(a,a,"sZeroRecords","sLoadingRecords");a.sInfoThousands&&(a.sThousands=a.sInfoThousands);(a=a.sDecimal)&&cb(a)}function db(a){A(a,"ordering","bSort");A(a,"orderMulti","bSortMulti");A(a,"orderClasses","bSortClasses");A(a,"orderCellsTop","bSortCellsTop");A(a,"order","aaSorting");A(a,"orderFixed","aaSortingFixed");A(a,"paging","bPaginate");
A(a,"pagingType","sPaginationType");A(a,"pageLength","iDisplayLength");A(a,"searching","bFilter");"boolean"===typeof a.sScrollX&&(a.sScrollX=a.sScrollX?"100%":"");if(a=a.aoSearchCols)for(var b=0,c=a.length;b<c;b++)a[b]&&I(m.models.oSearch,a[b])}function eb(a){A(a,"orderable","bSortable");A(a,"orderData","aDataSort");A(a,"orderSequence","asSorting");A(a,"orderDataType","sortDataType");var b=a.aDataSort;b&&!h.isArray(b)&&(a.aDataSort=[b])}function fb(a){if(!m.__browser){var b={};m.__browser=b;var c=
h("<div/>").css({position:"fixed",top:0,left:0,height:1,width:1,overflow:"hidden"}).append(h("<div/>").css({position:"absolute",top:1,left:1,width:100,overflow:"scroll"}).append(h("<div/>").css({width:"100%",height:10}))).appendTo("body"),d=c.children(),e=d.children();b.barWidth=d[0].offsetWidth-d[0].clientWidth;b.bScrollOversize=100===e[0].offsetWidth&&100!==d[0].clientWidth;b.bScrollbarLeft=1!==Math.round(e.offset().left);b.bBounding=c[0].getBoundingClientRect().width?!0:!1;c.remove()}h.extend(a.oBrowser,
m.__browser);a.oScroll.iBarWidth=m.__browser.barWidth}function gb(a,b,c,d,e,f){var g,i=!1;c!==k&&(g=c,i=!0);for(;d!==e;)a.hasOwnProperty(d)&&(g=i?b(g,a[d],d,a):a[d],i=!0,d+=f);return g}function Ga(a,b){var c=m.defaults.column,d=a.aoColumns.length,c=h.extend({},m.models.oColumn,c,{nTh:b?b:T.createElement("th"),sTitle:c.sTitle?c.sTitle:b?b.innerHTML:"",aDataSort:c.aDataSort?c.aDataSort:[d],mData:c.mData?c.mData:d,idx:d});a.aoColumns.push(c);c=a.aoPreSearchCols;c[d]=h.extend({},m.models.oSearch,c[d]);
la(a,d,h(b).data())}function la(a,b,c){var b=a.aoColumns[b],d=a.oClasses,e=h(b.nTh);if(!b.sWidthOrig){b.sWidthOrig=e.attr("width")||null;var f=(e.attr("style")||"").match(/width:\s*(\d+[pxem%]+)/);f&&(b.sWidthOrig=f[1])}c!==k&&null!==c&&(eb(c),I(m.defaults.column,c),c.mDataProp!==k&&!c.mData&&(c.mData=c.mDataProp),c.sType&&(b._sManualType=c.sType),c.className&&!c.sClass&&(c.sClass=c.className),h.extend(b,c),F(b,c,"sWidth","sWidthOrig"),c.iDataSort!==k&&(b.aDataSort=[c.iDataSort]),F(b,c,"aDataSort"));
var g=b.mData,i=P(g),j=b.mRender?P(b.mRender):null,c=function(a){return"string"===typeof a&&-1!==a.indexOf("@")};b._bAttrSrc=h.isPlainObject(g)&&(c(g.sort)||c(g.type)||c(g.filter));b.fnGetData=function(a,b,c){var d=i(a,b,k,c);return j&&b?j(d,b,a,c):d};b.fnSetData=function(a,b,c){return Q(g)(a,b,c)};"number"!==typeof g&&(a._rowReadObject=!0);a.oFeatures.bSort||(b.bSortable=!1,e.addClass(d.sSortableNone));a=-1!==h.inArray("asc",b.asSorting);c=-1!==h.inArray("desc",b.asSorting);!b.bSortable||!a&&!c?
(b.sSortingClass=d.sSortableNone,b.sSortingClassJUI=""):a&&!c?(b.sSortingClass=d.sSortableAsc,b.sSortingClassJUI=d.sSortJUIAscAllowed):!a&&c?(b.sSortingClass=d.sSortableDesc,b.sSortingClassJUI=d.sSortJUIDescAllowed):(b.sSortingClass=d.sSortable,b.sSortingClassJUI=d.sSortJUI)}function Y(a){if(!1!==a.oFeatures.bAutoWidth){var b=a.aoColumns;Ha(a);for(var c=0,d=b.length;c<d;c++)b[c].nTh.style.width=b[c].sWidth}b=a.oScroll;(""!==b.sY||""!==b.sX)&&Z(a);w(a,null,"column-sizing",[a])}function $(a,b){var c=
aa(a,"bVisible");return"number"===typeof c[b]?c[b]:null}function ba(a,b){var c=aa(a,"bVisible"),c=h.inArray(b,c);return-1!==c?c:null}function ca(a){return aa(a,"bVisible").length}function aa(a,b){var c=[];h.map(a.aoColumns,function(a,e){a[b]&&c.push(e)});return c}function Ia(a){var b=a.aoColumns,c=a.aoData,d=m.ext.type.detect,e,f,g,i,j,h,l,r,q;e=0;for(f=b.length;e<f;e++)if(l=b[e],q=[],!l.sType&&l._sManualType)l.sType=l._sManualType;else if(!l.sType){g=0;for(i=d.length;g<i;g++){j=0;for(h=c.length;j<
h;j++){q[j]===k&&(q[j]=B(a,j,e,"type"));r=d[g](q[j],a);if(!r&&g!==d.length-1)break;if("html"===r)break}if(r){l.sType=r;break}}l.sType||(l.sType="string")}}function hb(a,b,c,d){var e,f,g,i,j,n,l=a.aoColumns;if(b)for(e=b.length-1;0<=e;e--){n=b[e];var r=n.targets!==k?n.targets:n.aTargets;h.isArray(r)||(r=[r]);f=0;for(g=r.length;f<g;f++)if("number"===typeof r[f]&&0<=r[f]){for(;l.length<=r[f];)Ga(a);d(r[f],n)}else if("number"===typeof r[f]&&0>r[f])d(l.length+r[f],n);else if("string"===typeof r[f]){i=0;
for(j=l.length;i<j;i++)("_all"==r[f]||h(l[i].nTh).hasClass(r[f]))&&d(i,n)}}if(c){e=0;for(a=c.length;e<a;e++)d(e,c[e])}}function L(a,b,c,d){var e=a.aoData.length,f=h.extend(!0,{},m.models.oRow,{src:c?"dom":"data",idx:e});f._aData=b;a.aoData.push(f);for(var g=a.aoColumns,i=0,j=g.length;i<j;i++)g[i].sType=null;a.aiDisplayMaster.push(e);b=a.rowIdFn(b);b!==k&&(a.aIds[b]=f);(c||!a.oFeatures.bDeferRender)&&Ja(a,e,c,d);return e}function ma(a,b){var c;b instanceof h||(b=h(b));return b.map(function(b,e){c=
Ka(a,e);return L(a,c.data,e,c.cells)})}function B(a,b,c,d){var e=a.iDraw,f=a.aoColumns[c],g=a.aoData[b]._aData,i=f.sDefaultContent,c=f.fnGetData(g,d,{settings:a,row:b,col:c});if(c===k)return a.iDrawError!=e&&null===i&&(J(a,0,"Requested unknown parameter "+("function"==typeof f.mData?"{function}":"'"+f.mData+"'")+" for row "+b,4),a.iDrawError=e),i;if((c===g||null===c)&&null!==i)c=i;else if("function"===typeof c)return c.call(g);return null===c&&"display"==d?"":c}function ib(a,b,c,d){a.aoColumns[c].fnSetData(a.aoData[b]._aData,
d,{settings:a,row:b,col:c})}function La(a){return h.map(a.match(/(\\.|[^\.])+/g)||[""],function(a){return a.replace(/\\./g,".")})}function P(a){if(h.isPlainObject(a)){var b={};h.each(a,function(a,c){c&&(b[a]=P(c))});return function(a,c,f,g){var i=b[c]||b._;return i!==k?i(a,c,f,g):a}}if(null===a)return function(a){return a};if("function"===typeof a)return function(b,c,f,g){return a(b,c,f,g)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var c=function(a,b,
f){var g,i;if(""!==f){i=La(f);for(var j=0,n=i.length;j<n;j++){f=i[j].match(da);g=i[j].match(U);if(f){i[j]=i[j].replace(da,"");""!==i[j]&&(a=a[i[j]]);g=[];i.splice(0,j+1);i=i.join(".");if(h.isArray(a)){j=0;for(n=a.length;j<n;j++)g.push(c(a[j],b,i))}a=f[0].substring(1,f[0].length-1);a=""===a?g:g.join(a);break}else if(g){i[j]=i[j].replace(U,"");a=a[i[j]]();continue}if(null===a||a[i[j]]===k)return k;a=a[i[j]]}}return a};return function(b,e){return c(b,e,a)}}return function(b){return b[a]}}function Q(a){if(h.isPlainObject(a))return Q(a._);
if(null===a)return function(){};if("function"===typeof a)return function(b,d,e){a(b,"set",d,e)};if("string"===typeof a&&(-1!==a.indexOf(".")||-1!==a.indexOf("[")||-1!==a.indexOf("("))){var b=function(a,d,e){var e=La(e),f;f=e[e.length-1];for(var g,i,j=0,n=e.length-1;j<n;j++){g=e[j].match(da);i=e[j].match(U);if(g){e[j]=e[j].replace(da,"");a[e[j]]=[];f=e.slice();f.splice(0,j+1);g=f.join(".");if(h.isArray(d)){i=0;for(n=d.length;i<n;i++)f={},b(f,d[i],g),a[e[j]].push(f)}else a[e[j]]=d;return}i&&(e[j]=e[j].replace(U,
""),a=a[e[j]](d));if(null===a[e[j]]||a[e[j]]===k)a[e[j]]={};a=a[e[j]]}if(f.match(U))a[f.replace(U,"")](d);else a[f.replace(da,"")]=d};return function(c,d){return b(c,d,a)}}return function(b,d){b[a]=d}}function Ma(a){return D(a.aoData,"_aData")}function na(a){a.aoData.length=0;a.aiDisplayMaster.length=0;a.aiDisplay.length=0;a.aIds={}}function oa(a,b,c){for(var d=-1,e=0,f=a.length;e<f;e++)a[e]==b?d=e:a[e]>b&&a[e]--; -1!=d&&c===k&&a.splice(d,1)}function ea(a,b,c,d){var e=a.aoData[b],f,g=function(c,d){for(;c.childNodes.length;)c.removeChild(c.firstChild);
c.innerHTML=B(a,b,d,"display")};if("dom"===c||(!c||"auto"===c)&&"dom"===e.src)e._aData=Ka(a,e,d,d===k?k:e._aData).data;else{var i=e.anCells;if(i)if(d!==k)g(i[d],d);else{c=0;for(f=i.length;c<f;c++)g(i[c],c)}}e._aSortData=null;e._aFilterData=null;g=a.aoColumns;if(d!==k)g[d].sType=null;else{c=0;for(f=g.length;c<f;c++)g[c].sType=null;Na(a,e)}}function Ka(a,b,c,d){var e=[],f=b.firstChild,g,i,j=0,n,l=a.aoColumns,r=a._rowReadObject,d=d!==k?d:r?{}:[],q=function(a,b){if("string"===typeof a){var c=a.indexOf("@");
-1!==c&&(c=a.substring(c+1),Q(a)(d,b.getAttribute(c)))}},jb=function(a){if(c===k||c===j)i=l[j],n=h.trim(a.innerHTML),i&&i._bAttrSrc?(Q(i.mData._)(d,n),q(i.mData.sort,a),q(i.mData.type,a),q(i.mData.filter,a)):r?(i._setter||(i._setter=Q(i.mData)),i._setter(d,n)):d[j]=n;j++};if(f)for(;f;){g=f.nodeName.toUpperCase();if("TD"==g||"TH"==g)jb(f),e.push(f);f=f.nextSibling}else{e=b.anCells;g=0;for(var o=e.length;g<o;g++)jb(e[g])}if(b=f?b:b.nTr)(b=b.getAttribute("id"))&&Q(a.rowId)(d,b);return{data:d,cells:e}}
function Ja(a,b,c,d){var e=a.aoData[b],f=e._aData,g=[],i,j,h,l,r;if(null===e.nTr){i=c||T.createElement("tr");e.nTr=i;e.anCells=g;i._DT_RowIndex=b;Na(a,e);l=0;for(r=a.aoColumns.length;l<r;l++){h=a.aoColumns[l];j=c?d[l]:T.createElement(h.sCellType);g.push(j);if(!c||h.mRender||h.mData!==l)j.innerHTML=B(a,b,l,"display");h.sClass&&(j.className+=" "+h.sClass);h.bVisible&&!c?i.appendChild(j):!h.bVisible&&c&&j.parentNode.removeChild(j);h.fnCreatedCell&&h.fnCreatedCell.call(a.oInstance,j,B(a,b,l),f,b,l)}w(a,
"aoRowCreatedCallback",null,[i,f,b])}e.nTr.setAttribute("role","row")}function Na(a,b){var c=b.nTr,d=b._aData;if(c){var e=a.rowIdFn(d);e&&(c.id=e);d.DT_RowClass&&(e=d.DT_RowClass.split(" "),b.__rowc=b.__rowc?pa(b.__rowc.concat(e)):e,h(c).removeClass(b.__rowc.join(" ")).addClass(d.DT_RowClass));d.DT_RowAttr&&h(c).attr(d.DT_RowAttr);d.DT_RowData&&h(c).data(d.DT_RowData)}}function kb(a){var b,c,d,e,f,g=a.nTHead,i=a.nTFoot,j=0===h("th, td",g).length,n=a.oClasses,l=a.aoColumns;j&&(e=h("<tr/>").appendTo(g));
b=0;for(c=l.length;b<c;b++)f=l[b],d=h(f.nTh).addClass(f.sClass),j&&d.appendTo(e),a.oFeatures.bSort&&(d.addClass(f.sSortingClass),!1!==f.bSortable&&(d.attr("tabindex",a.iTabIndex).attr("aria-controls",a.sTableId),Oa(a,f.nTh,b))),f.sTitle!=d[0].innerHTML&&d.html(f.sTitle),Pa(a,"header")(a,d,f,n);j&&fa(a.aoHeader,g);h(g).find(">tr").attr("role","row");h(g).find(">tr>th, >tr>td").addClass(n.sHeaderTH);h(i).find(">tr>th, >tr>td").addClass(n.sFooterTH);if(null!==i){a=a.aoFooter[0];b=0;for(c=a.length;b<
c;b++)f=l[b],f.nTf=a[b].cell,f.sClass&&h(f.nTf).addClass(f.sClass)}}function ga(a,b,c){var d,e,f,g=[],i=[],j=a.aoColumns.length,n;if(b){c===k&&(c=!1);d=0;for(e=b.length;d<e;d++){g[d]=b[d].slice();g[d].nTr=b[d].nTr;for(f=j-1;0<=f;f--)!a.aoColumns[f].bVisible&&!c&&g[d].splice(f,1);i.push([])}d=0;for(e=g.length;d<e;d++){if(a=g[d].nTr)for(;f=a.firstChild;)a.removeChild(f);f=0;for(b=g[d].length;f<b;f++)if(n=j=1,i[d][f]===k){a.appendChild(g[d][f].cell);for(i[d][f]=1;g[d+j]!==k&&g[d][f].cell==g[d+j][f].cell;)i[d+
j][f]=1,j++;for(;g[d][f+n]!==k&&g[d][f].cell==g[d][f+n].cell;){for(c=0;c<j;c++)i[d+c][f+n]=1;n++}h(g[d][f].cell).attr("rowspan",j).attr("colspan",n)}}}}function M(a){var b=w(a,"aoPreDrawCallback","preDraw",[a]);if(-1!==h.inArray(!1,b))C(a,!1);else{var b=[],c=0,d=a.asStripeClasses,e=d.length,f=a.oLanguage,g=a.iInitDisplayStart,i="ssp"==y(a),j=a.aiDisplay;a.bDrawing=!0;g!==k&&-1!==g&&(a._iDisplayStart=i?g:g>=a.fnRecordsDisplay()?0:g,a.iInitDisplayStart=-1);var g=a._iDisplayStart,n=a.fnDisplayEnd();
if(a.bDeferLoading)a.bDeferLoading=!1,a.iDraw++,C(a,!1);else if(i){if(!a.bDestroying&&!lb(a))return}else a.iDraw++;if(0!==j.length){f=i?a.aoData.length:n;for(i=i?0:g;i<f;i++){var l=j[i],r=a.aoData[l];null===r.nTr&&Ja(a,l);l=r.nTr;if(0!==e){var q=d[c%e];r._sRowStripe!=q&&(h(l).removeClass(r._sRowStripe).addClass(q),r._sRowStripe=q)}w(a,"aoRowCallback",null,[l,r._aData,c,i]);b.push(l);c++}}else c=f.sZeroRecords,1==a.iDraw&&"ajax"==y(a)?c=f.sLoadingRecords:f.sEmptyTable&&0===a.fnRecordsTotal()&&(c=f.sEmptyTable),
b[0]=h("<tr/>",{"class":e?d[0]:""}).append(h("<td />",{valign:"top",colSpan:ca(a),"class":a.oClasses.sRowEmpty}).html(c))[0];w(a,"aoHeaderCallback","header",[h(a.nTHead).children("tr")[0],Ma(a),g,n,j]);w(a,"aoFooterCallback","footer",[h(a.nTFoot).children("tr")[0],Ma(a),g,n,j]);d=h(a.nTBody);d.children().detach();d.append(h(b));w(a,"aoDrawCallback","draw",[a]);a.bSorted=!1;a.bFiltered=!1;a.bDrawing=!1}}function R(a,b){var c=a.oFeatures,d=c.bFilter;c.bSort&&mb(a);d?ha(a,a.oPreviousSearch):a.aiDisplay=
a.aiDisplayMaster.slice();!0!==b&&(a._iDisplayStart=0);a._drawHold=b;M(a);a._drawHold=!1}function nb(a){var b=a.oClasses,c=h(a.nTable),c=h("<div/>").insertBefore(c),d=a.oFeatures,e=h("<div/>",{id:a.sTableId+"_wrapper","class":b.sWrapper+(a.nTFoot?"":" "+b.sNoFooter)});a.nHolding=c[0];a.nTableWrapper=e[0];a.nTableReinsertBefore=a.nTable.nextSibling;for(var f=a.sDom.split(""),g,i,j,n,l,r,q=0;q<f.length;q++){g=null;i=f[q];if("<"==i){j=h("<div/>")[0];n=f[q+1];if("'"==n||'"'==n){l="";for(r=2;f[q+r]!=n;)l+=
f[q+r],r++;"H"==l?l=b.sJUIHeader:"F"==l&&(l=b.sJUIFooter);-1!=l.indexOf(".")?(n=l.split("."),j.id=n[0].substr(1,n[0].length-1),j.className=n[1]):"#"==l.charAt(0)?j.id=l.substr(1,l.length-1):j.className=l;q+=r}e.append(j);e=h(j)}else if(">"==i)e=e.parent();else if("l"==i&&d.bPaginate&&d.bLengthChange)g=ob(a);else if("f"==i&&d.bFilter)g=pb(a);else if("r"==i&&d.bProcessing)g=qb(a);else if("t"==i)g=rb(a);else if("i"==i&&d.bInfo)g=sb(a);else if("p"==i&&d.bPaginate)g=tb(a);else if(0!==m.ext.feature.length){j=
m.ext.feature;r=0;for(n=j.length;r<n;r++)if(i==j[r].cFeature){g=j[r].fnInit(a);break}}g&&(j=a.aanFeatures,j[i]||(j[i]=[]),j[i].push(g),e.append(g))}c.replaceWith(e);a.nHolding=null}function fa(a,b){var c=h(b).children("tr"),d,e,f,g,i,j,n,l,r,q;a.splice(0,a.length);f=0;for(j=c.length;f<j;f++)a.push([]);f=0;for(j=c.length;f<j;f++){d=c[f];for(e=d.firstChild;e;){if("TD"==e.nodeName.toUpperCase()||"TH"==e.nodeName.toUpperCase()){l=1*e.getAttribute("colspan");r=1*e.getAttribute("rowspan");l=!l||0===l||
1===l?1:l;r=!r||0===r||1===r?1:r;g=0;for(i=a[f];i[g];)g++;n=g;q=1===l?!0:!1;for(i=0;i<l;i++)for(g=0;g<r;g++)a[f+g][n+i]={cell:e,unique:q},a[f+g].nTr=d}e=e.nextSibling}}}function qa(a,b,c){var d=[];c||(c=a.aoHeader,b&&(c=[],fa(c,b)));for(var b=0,e=c.length;b<e;b++)for(var f=0,g=c[b].length;f<g;f++)if(c[b][f].unique&&(!d[f]||!a.bSortCellsTop))d[f]=c[b][f].cell;return d}function ra(a,b,c){w(a,"aoServerParams","serverParams",[b]);if(b&&h.isArray(b)){var d={},e=/(.*?)\[\]$/;h.each(b,function(a,b){var c=
b.name.match(e);c?(c=c[0],d[c]||(d[c]=[]),d[c].push(b.value)):d[b.name]=b.value});b=d}var f,g=a.ajax,i=a.oInstance,j=function(b){w(a,null,"xhr",[a,b,a.jqXHR]);c(b)};if(h.isPlainObject(g)&&g.data){f=g.data;var n=h.isFunction(f)?f(b,a):f,b=h.isFunction(f)&&n?n:h.extend(!0,b,n);delete g.data}n={data:b,success:function(b){

var c=b.error||b.sError;c&&J(a,0,c);
a.json=b;
c=datatable_valores_do_ajax(b);
datatable_ajax_extras(c);
j(c)

},dataType:"json",cache:!1,type:a.sServerMethod,error:
function(b,c){var d=w(a,null,"xhr",[a,null,a.jqXHR]);-1===h.inArray(!0,d)&&("parsererror"==
c?J(a,0,'Ajax error',1):4===b.readyState&&J(a,0,"Ajax error",7));C(a,!1)}};a.oAjaxData=b;w(a,null,"preXhr",[a,b]);a.fnServerData?a.fnServerData.call(i,a.sAjaxSource,h.map(b,function(a,b){return{name:b,value:a}}),j,a):a.sAjaxSource||"string"===typeof g?a.jqXHR=h.ajax(h.extend(n,{url:g||a.sAjaxSource})):h.isFunction(g)?a.jqXHR=g.call(i,b,j,a):(a.jqXHR=h.ajax(h.extend(n,g)),g.data=f)}function lb(a){return a.bAjaxDataGet?(a.iDraw++,C(a,!0),ra(a,ub(a),function(b){vb(a,b)}),!1):!0}function ub(a){var b=
a.aoColumns,c=b.length,d=a.oFeatures,e=a.oPreviousSearch,f=a.aoPreSearchCols,g,i=[],j,n,l,r=V(a);g=a._iDisplayStart;j=!1!==d.bPaginate?a._iDisplayLength:-1;var q=function(a,b){i.push({name:a,value:b})};q("sEcho",a.iDraw);q("iColumns",c);q("sColumns",D(b,"sName").join(","));q("iDisplayStart",g);q("iDisplayLength",j);var k={draw:a.iDraw,columns:[],order:[],start:g,length:j,search:{value:e.sSearch,regex:e.bRegex}};for(g=0;g<c;g++)n=b[g],l=f[g],j="function"==typeof n.mData?"function":n.mData,k.columns.push({data:j,
name:n.sName,searchable:n.bSearchable,orderable:n.bSortable,search:{value:l.sSearch,regex:l.bRegex}}),q("mDataProp_"+g,j),d.bFilter&&(q("sSearch_"+g,l.sSearch),q("bRegex_"+g,l.bRegex),q("bSearchable_"+g,n.bSearchable)),d.bSort&&q("bSortable_"+g,n.bSortable);d.bFilter&&(q("sSearch",e.sSearch),q("bRegex",e.bRegex));d.bSort&&(h.each(r,function(a,b){k.order.push({column:b.col,dir:b.dir});q("iSortCol_"+a,b.col);q("sSortDir_"+a,b.dir)}),q("iSortingCols",r.length));b=m.ext.legacy.ajax;return null===b?a.sAjaxSource?
i:k:b?i:k}function vb(a,b){var c=sa(a,b),d=b.sEcho!==k?b.sEcho:b.draw,e=b.iTotalRecords!==k?b.iTotalRecords:b.recordsTotal,f=b.iTotalDisplayRecords!==k?b.iTotalDisplayRecords:b.recordsFiltered;if(d){if(1*d<a.iDraw)return;a.iDraw=1*d}na(a);a._iRecordsTotal=parseInt(e,10);a._iRecordsDisplay=parseInt(f,10);d=0;for(e=c.length;d<e;d++)L(a,c[d]);a.aiDisplay=a.aiDisplayMaster.slice();a.bAjaxDataGet=!1;M(a);a._bInitComplete||ta(a,b);a.bAjaxDataGet=!0;C(a,!1)}function sa(a,b){var c=h.isPlainObject(a.ajax)&&
a.ajax.dataSrc!==k?a.ajax.dataSrc:a.sAjaxDataProp;return"data"===c?b.aaData||b[c]:""!==c?P(c)(b):b}function pb(a){var b=a.oClasses,c=a.sTableId,d=a.oLanguage,e=a.oPreviousSearch,f=a.aanFeatures,g='<input type="search" class="'+b.sFilterInput+'"/>',i=d.sSearch,i=i.match(/_INPUT_/)?i.replace("_INPUT_",g):i+g,b=h("<div/>",{id:!f.f?c+"_filter":null,"class":b.sFilter}).append(h("<label/>").append(i)),f=function(){var b=!this.value?"":this.value;b!=e.sSearch&&(ha(a,{sSearch:b,bRegex:e.bRegex,bSmart:e.bSmart,
bCaseInsensitive:e.bCaseInsensitive}),a._iDisplayStart=0,M(a))},g=null!==a.searchDelay?a.searchDelay:"ssp"===y(a)?400:0,j=h("input",b).val(e.sSearch).attr("placeholder",d.sSearchPlaceholder).bind("keyup.DT search.DT input.DT paste.DT cut.DT",g?ua(f,g):f).bind("keypress.DT",function(a){if(13==a.keyCode)return!1}).attr("aria-controls",c);h(a.nTable).on("search.dt.DT",function(b,c){if(a===c)try{j[0]!==T.activeElement&&j.val(e.sSearch)}catch(d){}});return b[0]}function ha(a,b,c){var d=a.oPreviousSearch,
e=a.aoPreSearchCols,f=function(a){d.sSearch=a.sSearch;d.bRegex=a.bRegex;d.bSmart=a.bSmart;d.bCaseInsensitive=a.bCaseInsensitive};Ia(a);if("ssp"!=y(a)){wb(a,b.sSearch,c,b.bEscapeRegex!==k?!b.bEscapeRegex:b.bRegex,b.bSmart,b.bCaseInsensitive);f(b);for(b=0;b<e.length;b++)xb(a,e[b].sSearch,b,e[b].bEscapeRegex!==k?!e[b].bEscapeRegex:e[b].bRegex,e[b].bSmart,e[b].bCaseInsensitive);yb(a)}else f(b);a.bFiltered=!0;w(a,null,"search",[a])}function yb(a){for(var b=m.ext.search,c=a.aiDisplay,d,e,f=0,g=b.length;f<
g;f++){for(var i=[],j=0,n=c.length;j<n;j++)e=c[j],d=a.aoData[e],b[f](a,d._aFilterData,e,d._aData,j)&&i.push(e);c.length=0;h.merge(c,i)}}function xb(a,b,c,d,e,f){if(""!==b)for(var g=a.aiDisplay,d=Qa(b,d,e,f),e=g.length-1;0<=e;e--)b=a.aoData[g[e]]._aFilterData[c],d.test(b)||g.splice(e,1)}function wb(a,b,c,d,e,f){var d=Qa(b,d,e,f),e=a.oPreviousSearch.sSearch,f=a.aiDisplayMaster,g;0!==m.ext.search.length&&(c=!0);g=zb(a);if(0>=b.length)a.aiDisplay=f.slice();else{if(g||c||e.length>b.length||0!==b.indexOf(e)||
a.bSorted)a.aiDisplay=f.slice();b=a.aiDisplay;for(c=b.length-1;0<=c;c--)d.test(a.aoData[b[c]]._sFilterRow)||b.splice(c,1)}}function Qa(a,b,c,d){a=b?a:va(a);c&&(a="^(?=.*?"+h.map(a.match(/"[^"]+"|[^ ]+/g)||[""],function(a){if('"'===a.charAt(0))var b=a.match(/^"(.*)"$/),a=b?b[1]:a;return a.replace('"',"")}).join(")(?=.*?")+").*$");return RegExp(a,d?"i":"")}function va(a){return a.replace(Yb,"\\$1")}function zb(a){var b=a.aoColumns,c,d,e,f,g,i,j,h,l=m.ext.type.search;c=!1;d=0;for(f=a.aoData.length;d<
f;d++)if(h=a.aoData[d],!h._aFilterData){i=[];e=0;for(g=b.length;e<g;e++)c=b[e],c.bSearchable?(j=B(a,d,e,"filter"),l[c.sType]&&(j=l[c.sType](j)),null===j&&(j=""),"string"!==typeof j&&j.toString&&(j=j.toString())):j="",j.indexOf&&-1!==j.indexOf("&")&&(wa.innerHTML=j,j=Zb?wa.textContent:wa.innerText),j.replace&&(j=j.replace(/[\r\n]/g,"")),i.push(j);h._aFilterData=i;h._sFilterRow=i.join("  ");c=!0}return c}function Ab(a){return{search:a.sSearch,smart:a.bSmart,regex:a.bRegex,caseInsensitive:a.bCaseInsensitive}}
function Bb(a){return{sSearch:a.search,bSmart:a.smart,bRegex:a.regex,bCaseInsensitive:a.caseInsensitive}}function sb(a){var b=a.sTableId,c=a.aanFeatures.i,d=h("<div/>",{"class":a.oClasses.sInfo,id:!c?b+"_info":null});c||(a.aoDrawCallback.push({fn:Cb,sName:"information"}),d.attr("role","status").attr("aria-live","polite"),h(a.nTable).attr("aria-describedby",b+"_info"));return d[0]}function Cb(a){var b=a.aanFeatures.i;if(0!==b.length){var c=a.oLanguage,d=a._iDisplayStart+1,e=a.fnDisplayEnd(),f=a.fnRecordsTotal(),
g=a.fnRecordsDisplay(),i=g?c.sInfo:c.sInfoEmpty;g!==f&&(i+=" "+c.sInfoFiltered);i+=c.sInfoPostFix;i=Db(a,i);c=c.fnInfoCallback;null!==c&&(i=c.call(a.oInstance,a,d,e,f,g,i));h(b).html(i)}}function Db(a,b){var c=a.fnFormatNumber,d=a._iDisplayStart+1,e=a._iDisplayLength,f=a.fnRecordsDisplay(),g=-1===e;return b.replace(/_START_/g,c.call(a,d)).replace(/_END_/g,c.call(a,a.fnDisplayEnd())).replace(/_MAX_/g,c.call(a,a.fnRecordsTotal())).replace(/_TOTAL_/g,c.call(a,f)).replace(/_PAGE_/g,c.call(a,g?1:Math.ceil(d/
e))).replace(/_PAGES_/g,c.call(a,g?1:Math.ceil(f/e)))}function ia(a){var b,c,d=a.iInitDisplayStart,e=a.aoColumns,f;c=a.oFeatures;var g=a.bDeferLoading;if(a.bInitialised){nb(a);kb(a);ga(a,a.aoHeader);ga(a,a.aoFooter);C(a,!0);c.bAutoWidth&&Ha(a);b=0;for(c=e.length;b<c;b++)f=e[b],f.sWidth&&(f.nTh.style.width=u(f.sWidth));w(a,null,"preInit",[a]);R(a);e=y(a);if("ssp"!=e||g)"ajax"==e?ra(a,[],function(c){var f=sa(a,c);for(b=0;b<f.length;b++)L(a,f[b]);a.iInitDisplayStart=d;R(a);C(a,!1);ta(a,c)},a):(C(a,!1),
ta(a))}else setTimeout(function(){ia(a)},200)}function ta(a,b){a._bInitComplete=!0;(b||a.oInit.aaData)&&Y(a);w(a,"aoInitComplete","init",[a,b])}function Ra(a,b){var c=parseInt(b,10);a._iDisplayLength=c;Sa(a);w(a,null,"length",[a,c])}function ob(a){for(var b=a.oClasses,c=a.sTableId,d=a.aLengthMenu,e=h.isArray(d[0]),f=e?d[0]:d,d=e?d[1]:d,e=h("<select/>",{name:c+"_length","aria-controls":c,"class":b.sLengthSelect}),g=0,i=f.length;g<i;g++)e[0][g]=new Option(d[g],f[g]);var j=h("<div><label/></div>").addClass(b.sLength);
a.aanFeatures.l||(j[0].id=c+"_length");j.children().append(a.oLanguage.sLengthMenu.replace("_MENU_",e[0].outerHTML));h("select",j).val(a._iDisplayLength).bind("change.DT",function(){Ra(a,h(this).val());M(a)});h(a.nTable).bind("length.dt.DT",function(b,c,d){a===c&&h("select",j).val(d)});return j[0]}function tb(a){var b=a.sPaginationType,c=m.ext.pager[b],d="function"===typeof c,e=function(a){M(a)},b=h("<div/>").addClass(a.oClasses.sPaging+b)[0],f=a.aanFeatures;d||c.fnInit(a,b,e);f.p||(b.id=a.sTableId+
"_paginate",a.aoDrawCallback.push({fn:function(a){if(d){var b=a._iDisplayStart,j=a._iDisplayLength,h=a.fnRecordsDisplay(),l=-1===j,b=l?0:Math.ceil(b/j),j=l?1:Math.ceil(h/j),h=c(b,j),k,l=0;for(k=f.p.length;l<k;l++)Pa(a,"pageButton")(a,f.p[l],l,h,b,j)}else c.fnUpdate(a,e)},sName:"pagination"}));return b}function Ta(a,b,c){var d=a._iDisplayStart,e=a._iDisplayLength,f=a.fnRecordsDisplay();0===f||-1===e?d=0:"number"===typeof b?(d=b*e,d>f&&(d=0)):"first"==b?d=0:"previous"==b?(d=0<=e?d-e:0,0>d&&(d=0)):"next"==
b?d+e<f&&(d+=e):"last"==b?d=Math.floor((f-1)/e)*e:J(a,0,"Unknown paging action: "+b,5);b=a._iDisplayStart!==d;a._iDisplayStart=d;b&&(w(a,null,"page",[a]),c&&M(a));return b}function qb(a){return h("<div/>",{id:!a.aanFeatures.r?a.sTableId+"_processing":null,"class":a.oClasses.sProcessing}).html(a.oLanguage.sProcessing).insertBefore(a.nTable)[0]}function C(a,b){a.oFeatures.bProcessing&&h(a.aanFeatures.r).css("display",b?"block":"none");w(a,null,"processing",[a,b])}function rb(a){var b=h(a.nTable);b.attr("role",
"grid");var c=a.oScroll;if(""===c.sX&&""===c.sY)return a.nTable;var d=c.sX,e=c.sY,f=a.oClasses,g=b.children("caption"),i=g.length?g[0]._captionSide:null,j=h(b[0].cloneNode(!1)),n=h(b[0].cloneNode(!1)),l=b.children("tfoot");c.sX&&"100%"===b.attr("width")&&b.removeAttr("width");l.length||(l=null);j=h("<div/>",{"class":f.sScrollWrapper}).append(h("<div/>",{"class":f.sScrollHead}).css({overflow:"hidden",position:"relative",border:0,width:d?!d?null:u(d):"100%"}).append(h("<div/>",{"class":f.sScrollHeadInner}).css({"box-sizing":"content-box",
width:c.sXInner||"100%"}).append(j.removeAttr("id").css("margin-left",0).append("top"===i?g:null).append(b.children("thead"))))).append(h("<div/>",{"class":f.sScrollBody}).css({position:"relative",overflow:"auto",width:!d?null:u(d)}).append(b));l&&j.append(h("<div/>",{"class":f.sScrollFoot}).css({overflow:"hidden",border:0,width:d?!d?null:u(d):"100%"}).append(h("<div/>",{"class":f.sScrollFootInner}).append(n.removeAttr("id").css("margin-left",0).append("bottom"===i?g:null).append(b.children("tfoot")))));
var b=j.children(),k=b[0],f=b[1],q=l?b[2]:null;if(d)h(f).on("scroll.DT",function(){var a=this.scrollLeft;k.scrollLeft=a;l&&(q.scrollLeft=a)});h(f).css(e&&c.bCollapse?"max-height":"height",e);a.nScrollHead=k;a.nScrollBody=f;a.nScrollFoot=q;a.aoDrawCallback.push({fn:Z,sName:"scrolling"});return j[0]}function Z(a){var b=a.oScroll,c=b.sX,d=b.sXInner,e=b.sY,b=b.iBarWidth,f=h(a.nScrollHead),g=f[0].style,i=f.children("div"),j=i[0].style,n=i.children("table"),i=a.nScrollBody,l=h(i),k=i.style,q=h(a.nScrollFoot).children("div"),
m=q.children("table"),o=h(a.nTHead),E=h(a.nTable),p=E[0],t=p.style,N=a.nTFoot?h(a.nTFoot):null,Eb=a.oBrowser,w=Eb.bScrollOversize,s,v,O,x,y=[],z=[],A=[],B,C=function(a){a=a.style;a.paddingTop="0";a.paddingBottom="0";a.borderTopWidth="0";a.borderBottomWidth="0";a.height=0};E.children("thead, tfoot").remove();x=o.clone().prependTo(E);o=o.find("tr");v=x.find("tr");x.find("th, td").removeAttr("tabindex");N&&(O=N.clone().prependTo(E),s=N.find("tr"),O=O.find("tr"));c||(k.width="100%",f[0].style.width="100%");
h.each(qa(a,x),function(b,c){B=$(a,b);c.style.width=a.aoColumns[B].sWidth});N&&H(function(a){a.style.width=""},O);f=E.outerWidth();if(""===c){t.width="100%";if(w&&(E.find("tbody").height()>i.offsetHeight||"scroll"==l.css("overflow-y")))t.width=u(E.outerWidth()-b);f=E.outerWidth()}else""!==d&&(t.width=u(d),f=E.outerWidth());H(C,v);H(function(a){A.push(a.innerHTML);y.push(u(h(a).css("width")))},v);H(function(a,b){a.style.width=y[b]},o);h(v).height(0);N&&(H(C,O),H(function(a){z.push(u(h(a).css("width")))},
O),H(function(a,b){a.style.width=z[b]},s),h(O).height(0));H(function(a,b){a.innerHTML='<div class="dataTables_sizing" style="height:0;overflow:hidden;">'+A[b]+"</div>";a.style.width=y[b]},v);N&&H(function(a,b){a.innerHTML="";a.style.width=z[b]},O);if(E.outerWidth()<f){s=i.scrollHeight>i.offsetHeight||"scroll"==l.css("overflow-y")?f+b:f;if(w&&(i.scrollHeight>i.offsetHeight||"scroll"==l.css("overflow-y")))t.width=u(s-b);(""===c||""!==d)&&J(a,1,"Possible column misalignment",6)}else s="100%";k.width=
u(s);g.width=u(s);N&&(a.nScrollFoot.style.width=u(s));!e&&w&&(k.height=u(p.offsetHeight+b));c=E.outerWidth();n[0].style.width=u(c);j.width=u(c);d=E.height()>i.clientHeight||"scroll"==l.css("overflow-y");e="padding"+(Eb.bScrollbarLeft?"Left":"Right");j[e]=d?b+"px":"0px";N&&(m[0].style.width=u(c),q[0].style.width=u(c),q[0].style[e]=d?b+"px":"0px");l.scroll();if((a.bSorted||a.bFiltered)&&!a._drawHold)i.scrollTop=0}function H(a,b,c){for(var d=0,e=0,f=b.length,g,i;e<f;){g=b[e].firstChild;for(i=c?c[e].firstChild:
null;g;)1===g.nodeType&&(c?a(g,i,d):a(g,d),d++),g=g.nextSibling,i=c?i.nextSibling:null;e++}}function Ha(a){var b=a.nTable,c=a.aoColumns,d=a.oScroll,e=d.sY,f=d.sX,g=d.sXInner,i=c.length,j=aa(a,"bVisible"),n=h("th",a.nTHead),l=b.getAttribute("width"),k=b.parentNode,q=!1,m,o,p;p=a.oBrowser;d=p.bScrollOversize;(m=b.style.width)&&-1!==m.indexOf("%")&&(l=m);for(m=0;m<j.length;m++)o=c[j[m]],null!==o.sWidth&&(o.sWidth=Fb(o.sWidthOrig,k),q=!0);if(d||!q&&!f&&!e&&i==ca(a)&&i==n.length)for(m=0;m<i;m++){if(j=
$(a,m))c[j].sWidth=u(n.eq(m).width())}else{i=h(b).clone().css("visibility","hidden").removeAttr("id");i.find("tbody tr").remove();var t=h("<tr/>").appendTo(i.find("tbody"));i.find("thead, tfoot").remove();i.append(h(a.nTHead).clone()).append(h(a.nTFoot).clone());i.find("tfoot th, tfoot td").css("width","");n=qa(a,i.find("thead")[0]);for(m=0;m<j.length;m++)o=c[j[m]],n[m].style.width=null!==o.sWidthOrig&&""!==o.sWidthOrig?u(o.sWidthOrig):"";if(a.aoData.length)for(m=0;m<j.length;m++)q=j[m],o=c[q],h(Gb(a,
q)).clone(!1).append(o.sContentPadding).appendTo(t);q=h("<div/>").css(f||e?{position:"absolute",top:0,left:0,height:1,right:0,overflow:"hidden"}:{}).append(i).appendTo(k);f&&g?i.width(g):f?(i.css("width","auto"),i.width()<k.clientWidth&&i.width(k.clientWidth)):e?i.width(k.clientWidth):l&&i.width(l);if(f){for(m=g=0;m<j.length;m++)o=c[j[m]],e=p.bBounding?n[m].getBoundingClientRect().width:h(n[m]).outerWidth(),g+=null===o.sWidthOrig?e:parseInt(o.sWidth,10)+e-h(n[m]).width();i.width(u(g));b.style.width=
u(g)}for(m=0;m<j.length;m++)if(o=c[j[m]],p=h(n[m]).width())o.sWidth=u(p);b.style.width=u(i.css("width"));q.remove()}l&&(b.style.width=u(l));if((l||f)&&!a._reszEvt)b=function(){h(Fa).bind("resize.DT-"+a.sInstance,ua(function(){Y(a)}))},d?setTimeout(b,1E3):b(),a._reszEvt=!0}function ua(a,b){var c=b!==k?b:200,d,e;return function(){var b=this,g=+new Date,i=arguments;d&&g<d+c?(clearTimeout(e),e=setTimeout(function(){d=k;a.apply(b,i)},c)):(d=g,a.apply(b,i))}}function Fb(a,b){if(!a)return 0;var c=h("<div/>").css("width",
u(a)).appendTo(b||T.body),d=c[0].offsetWidth;c.remove();return d}function Gb(a,b){var c=Hb(a,b);if(0>c)return null;var d=a.aoData[c];return!d.nTr?h("<td/>").html(B(a,c,b,"display"))[0]:d.anCells[b]}function Hb(a,b){for(var c,d=-1,e=-1,f=0,g=a.aoData.length;f<g;f++)c=B(a,f,b,"display")+"",c=c.replace($b,""),c.length>d&&(d=c.length,e=f);return e}function u(a){return null===a?"0px":"number"==typeof a?0>a?"0px":a+"px":a.match(/\d$/)?a+"px":a}function V(a){var b,c,d=[],e=a.aoColumns,f,g,i,j;b=a.aaSortingFixed;
c=h.isPlainObject(b);var n=[];f=function(a){a.length&&!h.isArray(a[0])?n.push(a):h.merge(n,a)};h.isArray(b)&&f(b);c&&b.pre&&f(b.pre);f(a.aaSorting);c&&b.post&&f(b.post);for(a=0;a<n.length;a++){j=n[a][0];f=e[j].aDataSort;b=0;for(c=f.length;b<c;b++)g=f[b],i=e[g].sType||"string",n[a]._idx===k&&(n[a]._idx=h.inArray(n[a][1],e[g].asSorting)),d.push({src:j,col:g,dir:n[a][1],index:n[a]._idx,type:i,formatter:m.ext.type.order[i+"-pre"]})}return d}function mb(a){var b,c,d=[],e=m.ext.type.order,f=a.aoData,g=
0,i,j=a.aiDisplayMaster,h;Ia(a);h=V(a);b=0;for(c=h.length;b<c;b++)i=h[b],i.formatter&&g++,Ib(a,i.col);if("ssp"!=y(a)&&0!==h.length){b=0;for(c=j.length;b<c;b++)d[j[b]]=b;g===h.length?j.sort(function(a,b){var c,e,g,i,j=h.length,k=f[a]._aSortData,m=f[b]._aSortData;for(g=0;g<j;g++)if(i=h[g],c=k[i.col],e=m[i.col],c=c<e?-1:c>e?1:0,0!==c)return"asc"===i.dir?c:-c;c=d[a];e=d[b];return c<e?-1:c>e?1:0}):j.sort(function(a,b){var c,g,i,j,k=h.length,m=f[a]._aSortData,p=f[b]._aSortData;for(i=0;i<k;i++)if(j=h[i],
c=m[j.col],g=p[j.col],j=e[j.type+"-"+j.dir]||e["string-"+j.dir],c=j(c,g),0!==c)return c;c=d[a];g=d[b];return c<g?-1:c>g?1:0})}a.bSorted=!0}function Jb(a){for(var b,c,d=a.aoColumns,e=V(a),a=a.oLanguage.oAria,f=0,g=d.length;f<g;f++){c=d[f];var i=c.asSorting;b=c.sTitle.replace(/<.*?>/g,"");var j=c.nTh;j.removeAttribute("aria-sort");c.bSortable&&(0<e.length&&e[0].col==f?(j.setAttribute("aria-sort","asc"==e[0].dir?"ascending":"descending"),c=i[e[0].index+1]||i[0]):c=i[0],b+="asc"===c?a.sSortAscending:
a.sSortDescending);j.setAttribute("aria-label",b)}}function Ua(a,b,c,d){var e=a.aaSorting,f=a.aoColumns[b].asSorting,g=function(a,b){var c=a._idx;c===k&&(c=h.inArray(a[1],f));return c+1<f.length?c+1:b?null:0};"number"===typeof e[0]&&(e=a.aaSorting=[e]);c&&a.oFeatures.bSortMulti?(c=h.inArray(b,D(e,"0")),-1!==c?(b=g(e[c],!0),null===b&&1===e.length&&(b=0),null===b?e.splice(c,1):(e[c][1]=f[b],e[c]._idx=b)):(e.push([b,f[0],0]),e[e.length-1]._idx=0)):e.length&&e[0][0]==b?(b=g(e[0]),e.length=1,e[0][1]=f[b],
e[0]._idx=b):(e.length=0,e.push([b,f[0]]),e[0]._idx=0);R(a);"function"==typeof d&&d(a)}function Oa(a,b,c,d){var e=a.aoColumns[c];Va(b,{},function(b){!1!==e.bSortable&&(a.oFeatures.bProcessing?(C(a,!0),setTimeout(function(){Ua(a,c,b.shiftKey,d);"ssp"!==y(a)&&C(a,!1)},0)):Ua(a,c,b.shiftKey,d))})}function xa(a){var b=a.aLastSort,c=a.oClasses.sSortColumn,d=V(a),e=a.oFeatures,f,g;if(e.bSort&&e.bSortClasses){e=0;for(f=b.length;e<f;e++)g=b[e].src,h(D(a.aoData,"anCells",g)).removeClass(c+(2>e?e+1:3));e=0;
for(f=d.length;e<f;e++)g=d[e].src,h(D(a.aoData,"anCells",g)).addClass(c+(2>e?e+1:3))}a.aLastSort=d}function Ib(a,b){var c=a.aoColumns[b],d=m.ext.order[c.sSortDataType],e;d&&(e=d.call(a.oInstance,a,b,ba(a,b)));for(var f,g=m.ext.type.order[c.sType+"-pre"],i=0,h=a.aoData.length;i<h;i++)if(c=a.aoData[i],c._aSortData||(c._aSortData=[]),!c._aSortData[b]||d)f=d?e[i]:B(a,i,b,"sort"),c._aSortData[b]=g?g(f):f}function ya(a){if(a.oFeatures.bStateSave&&!a.bDestroying){var b={time:+new Date,start:a._iDisplayStart,
length:a._iDisplayLength,order:h.extend(!0,[],a.aaSorting),search:Ab(a.oPreviousSearch),columns:h.map(a.aoColumns,function(b,d){return{visible:b.bVisible,search:Ab(a.aoPreSearchCols[d])}})};w(a,"aoStateSaveParams","stateSaveParams",[a,b]);a.oSavedState=b;a.fnStateSaveCallback.call(a.oInstance,a,b)}}function Kb(a){var b,c,d=a.aoColumns;if(a.oFeatures.bStateSave){var e=a.fnStateLoadCallback.call(a.oInstance,a);if(e&&e.time&&(b=w(a,"aoStateLoadParams","stateLoadParams",[a,e]),-1===h.inArray(!1,b)&&(b=
a.iStateDuration,!(0<b&&e.time<+new Date-1E3*b)&&d.length===e.columns.length))){a.oLoadedState=h.extend(!0,{},e);e.start!==k&&(a._iDisplayStart=e.start,a.iInitDisplayStart=e.start);e.length!==k&&(a._iDisplayLength=e.length);e.order!==k&&(a.aaSorting=[],h.each(e.order,function(b,c){a.aaSorting.push(c[0]>=d.length?[0,c[1]]:c)}));e.search!==k&&h.extend(a.oPreviousSearch,Bb(e.search));b=0;for(c=e.columns.length;b<c;b++){var f=e.columns[b];f.visible!==k&&(d[b].bVisible=f.visible);f.search!==k&&h.extend(a.aoPreSearchCols[b],
Bb(f.search))}w(a,"aoStateLoaded","stateLoaded",[a,e])}}}function za(a){var b=m.settings,a=h.inArray(a,D(b,"nTable"));return-1!==a?b[a]:null}function J(a,b,c,d){if(b)Fa.console&&console.log&&console.log(c);else if(b=m.ext,b=b.sErrMode||b.errMode,a&&w(a,null,"error",[a,d,c]),"alert"==b)(c=='Ajax error'?erros_ajax(a.jqXHR.responseText):alert(c));else{if("throw"==b)throw Error(c);"function"==typeof b&&
b(a,d,c)}}function F(a,b,c,d){h.isArray(c)?h.each(c,function(c,d){h.isArray(d)?F(a,b,d[0],d[1]):F(a,b,d)}):(d===k&&(d=c),b[c]!==k&&(a[d]=b[c]))}function Lb(a,b,c){var d,e;for(e in b)b.hasOwnProperty(e)&&(d=b[e],h.isPlainObject(d)?(h.isPlainObject(a[e])||(a[e]={}),h.extend(!0,a[e],d)):a[e]=c&&"data"!==e&&"aaData"!==e&&h.isArray(d)?d.slice():d);return a}function Va(a,b,c){h(a).bind("click.DT",b,function(b){a.blur();c(b)}).bind("keypress.DT",b,function(a){13===a.which&&(a.preventDefault(),c(a))}).bind("selectstart.DT",
function(){return!1})}function z(a,b,c,d){c&&a[b].push({fn:c,sName:d})}function w(a,b,c,d){var e=[];b&&(e=h.map(a[b].slice().reverse(),function(b){return b.fn.apply(a.oInstance,d)}));null!==c&&(b=h.Event(c+".dt"),h(a.nTable).trigger(b,d),e.push(b.result));return e}function Sa(a){var b=a._iDisplayStart,c=a.fnDisplayEnd(),d=a._iDisplayLength;b>=c&&(b=c-d);b-=b%d;if(-1===d||0>b)b=0;a._iDisplayStart=b}function Pa(a,b){var c=a.renderer,d=m.ext.renderer[b];return h.isPlainObject(c)&&c[b]?d[c[b]]||d._:"string"===
typeof c?d[c]||d._:d._}function y(a){return a.oFeatures.bServerSide?"ssp":a.ajax||a.sAjaxSource?"ajax":"dom"}function Aa(a,b){var c=[],c=Mb.numbers_length,d=Math.floor(c/2);b<=c?c=W(0,b):a<=d?(c=W(0,c-2),c.push("ellipsis"),c.push(b-1)):(a>=b-1-d?c=W(b-(c-2),b):(c=W(a-d+2,a+d-1),c.push("ellipsis"),c.push(b-1)),c.splice(0,0,"ellipsis"),c.splice(0,0,0));c.DT_el="span";return c}function cb(a){h.each({num:function(b){return Ba(b,a)},"num-fmt":function(b){return Ba(b,a,Wa)},"html-num":function(b){return Ba(b,
a,Ca)},"html-num-fmt":function(b){return Ba(b,a,Ca,Wa)}},function(b,c){v.type.order[b+a+"-pre"]=c;b.match(/^html\-/)&&(v.type.search[b+a]=v.type.search.html)})}function Nb(a){return function(){var b=[za(this[m.ext.iApiIndex])].concat(Array.prototype.slice.call(arguments));return m.ext.internal[a].apply(this,b)}}var m,v,t,p,s,Xa={},Ob=/[\r\n]/g,Ca=/<.*?>/g,ac=/^[\w\+\-]/,bc=/[\w\+\-]$/,Yb=RegExp("(\\/|\\.|\\*|\\+|\\?|\\||\\(|\\)|\\[|\\]|\\{|\\}|\\\\|\\$|\\^|\\-)","g"),Wa=/[',$£€¥%\u2009\u202F\u20BD\u20a9\u20BArfk]/gi,
K=function(a){return!a||!0===a||"-"===a?!0:!1},Pb=function(a){var b=parseInt(a,10);return!isNaN(b)&&isFinite(a)?b:null},Qb=function(a,b){Xa[b]||(Xa[b]=RegExp(va(b),"g"));return"string"===typeof a&&"."!==b?a.replace(/\./g,"").replace(Xa[b],"."):a},Ya=function(a,b,c){var d="string"===typeof a;if(K(a))return!0;b&&d&&(a=Qb(a,b));c&&d&&(a=a.replace(Wa,""));return!isNaN(parseFloat(a))&&isFinite(a)},Rb=function(a,b,c){return K(a)?!0:!(K(a)||"string"===typeof a)?null:Ya(a.replace(Ca,""),b,c)?!0:null},D=function(a,
b,c){var d=[],e=0,f=a.length;if(c!==k)for(;e<f;e++)a[e]&&a[e][b]&&d.push(a[e][b][c]);else for(;e<f;e++)a[e]&&d.push(a[e][b]);return d},ja=function(a,b,c,d){var e=[],f=0,g=b.length;if(d!==k)for(;f<g;f++)a[b[f]][c]&&e.push(a[b[f]][c][d]);else for(;f<g;f++)e.push(a[b[f]][c]);return e},W=function(a,b){var c=[],d;b===k?(b=0,d=a):(d=b,b=a);for(var e=b;e<d;e++)c.push(e);return c},Sb=function(a){for(var b=[],c=0,d=a.length;c<d;c++)a[c]&&b.push(a[c]);return b},pa=function(a){var b=[],c,d,e=a.length,f,g=0;
d=0;a:for(;d<e;d++){c=a[d];for(f=0;f<g;f++)if(b[f]===c)continue a;b.push(c);g++}return b},A=function(a,b,c){a[b]!==k&&(a[c]=a[b])},da=/\[.*?\]$/,U=/\(\)$/,wa=h("<div>")[0],Zb=wa.textContent!==k,$b=/<.*?>/g;m=function(a){this.$=function(a,b){return this.api(!0).$(a,b)};this._=function(a,b){return this.api(!0).rows(a,b).data()};this.api=function(a){return a?new t(za(this[v.iApiIndex])):new t(this)};this.fnAddData=function(a,b){var c=this.api(!0),d=h.isArray(a)&&(h.isArray(a[0])||h.isPlainObject(a[0]))?
c.rows.add(a):c.row.add(a);(b===k||b)&&c.draw();return d.flatten().toArray()};this.fnAdjustColumnSizing=function(a){var b=this.api(!0).columns.adjust(),c=b.settings()[0],d=c.oScroll;a===k||a?b.draw(!1):(""!==d.sX||""!==d.sY)&&Z(c)};this.fnClearTable=function(a){var b=this.api(!0).clear();(a===k||a)&&b.draw()};this.fnClose=function(a){this.api(!0).row(a).child.hide()};this.fnDeleteRow=function(a,b,c){var d=this.api(!0),a=d.rows(a),e=a.settings()[0],h=e.aoData[a[0][0]];a.remove();b&&b.call(this,e,h);
(c===k||c)&&d.draw();return h};this.fnDestroy=function(a){this.api(!0).destroy(a)};this.fnDraw=function(a){this.api(!0).draw(a)};this.fnFilter=function(a,b,c,d,e,h){e=this.api(!0);null===b||b===k?e.search(a,c,d,h):e.column(b).search(a,c,d,h);e.draw()};this.fnGetData=function(a,b){var c=this.api(!0);if(a!==k){var d=a.nodeName?a.nodeName.toLowerCase():"";return b!==k||"td"==d||"th"==d?c.cell(a,b).data():c.row(a).data()||null}return c.data().toArray()};this.fnGetNodes=function(a){var b=this.api(!0);
return a!==k?b.row(a).node():b.rows().nodes().flatten().toArray()};this.fnGetPosition=function(a){var b=this.api(!0),c=a.nodeName.toUpperCase();return"TR"==c?b.row(a).index():"TD"==c||"TH"==c?(a=b.cell(a).index(),[a.row,a.columnVisible,a.column]):null};this.fnIsOpen=function(a){return this.api(!0).row(a).child.isShown()};this.fnOpen=function(a,b,c){return this.api(!0).row(a).child(b,c).show().child()[0]};this.fnPageChange=function(a,b){var c=this.api(!0).page(a);(b===k||b)&&c.draw(!1)};this.fnSetColumnVis=
function(a,b,c){a=this.api(!0).column(a).visible(b);(c===k||c)&&a.columns.adjust().draw()};this.fnSettings=function(){return za(this[v.iApiIndex])};this.fnSort=function(a){this.api(!0).order(a).draw()};this.fnSortListener=function(a,b,c){this.api(!0).order.listener(a,b,c)};this.fnUpdate=function(a,b,c,d,e){var h=this.api(!0);c===k||null===c?h.row(b).data(a):h.cell(b,c).data(a);(e===k||e)&&h.columns.adjust();(d===k||d)&&h.draw();return 0};this.fnVersionCheck=v.fnVersionCheck;var b=this,c=a===k,d=this.length;
c&&(a={});this.oApi=this.internal=v.internal;for(var e in m.ext.internal)e&&(this[e]=Nb(e));this.each(function(){var e={},e=1<d?Lb(e,a,!0):a,g=0,i,j=this.getAttribute("id"),n=!1,l=m.defaults,r=h(this);if("table"!=this.nodeName.toLowerCase())J(null,0,"Non-table node initialisation ("+this.nodeName+")",2);else{db(l);eb(l.column);I(l,l,!0);I(l.column,l.column,!0);I(l,h.extend(e,r.data()));var q=m.settings,g=0;for(i=q.length;g<i;g++){var p=q[g];if(p.nTable==this||p.nTHead.parentNode==this||p.nTFoot&&
p.nTFoot.parentNode==this){g=e.bRetrieve!==k?e.bRetrieve:l.bRetrieve;if(c||g)return p.oInstance;if(e.bDestroy!==k?e.bDestroy:l.bDestroy){p.oInstance.fnDestroy();break}else{J(p,0,"Cannot reinitialise DataTable",3);return}}if(p.sTableId==this.id){q.splice(g,1);break}}if(null===j||""===j)this.id=j="DataTables_Table_"+m.ext._unique++;var o=h.extend(!0,{},m.models.oSettings,{sDestroyWidth:r[0].style.width,sInstance:j,sTableId:j});o.nTable=this;o.oApi=b.internal;o.oInit=e;q.push(o);o.oInstance=1===b.length?
b:r.dataTable();db(e);e.oLanguage&&S(e.oLanguage);e.aLengthMenu&&!e.iDisplayLength&&(e.iDisplayLength=h.isArray(e.aLengthMenu[0])?e.aLengthMenu[0][0]:e.aLengthMenu[0]);e=Lb(h.extend(!0,{},l),e);F(o.oFeatures,e,"bPaginate bLengthChange bFilter bSort bSortMulti bInfo bProcessing bAutoWidth bSortClasses bServerSide bDeferRender".split(" "));F(o,e,["asStripeClasses","ajax","fnServerData","fnFormatNumber","sServerMethod","aaSorting","aaSortingFixed","aLengthMenu","sPaginationType","sAjaxSource","sAjaxDataProp",
"iStateDuration","sDom","bSortCellsTop","iTabIndex","fnStateLoadCallback","fnStateSaveCallback","renderer","searchDelay","rowId",["iCookieDuration","iStateDuration"],["oSearch","oPreviousSearch"],["aoSearchCols","aoPreSearchCols"],["iDisplayLength","_iDisplayLength"],["bJQueryUI","bJUI"]]);F(o.oScroll,e,[["sScrollX","sX"],["sScrollXInner","sXInner"],["sScrollY","sY"],["bScrollCollapse","bCollapse"]]);F(o.oLanguage,e,"fnInfoCallback");z(o,"aoDrawCallback",e.fnDrawCallback,"user");z(o,"aoServerParams",
e.fnServerParams,"user");z(o,"aoStateSaveParams",e.fnStateSaveParams,"user");z(o,"aoStateLoadParams",e.fnStateLoadParams,"user");z(o,"aoStateLoaded",e.fnStateLoaded,"user");z(o,"aoRowCallback",e.fnRowCallback,"user");z(o,"aoRowCreatedCallback",e.fnCreatedRow,"user");z(o,"aoHeaderCallback",e.fnHeaderCallback,"user");z(o,"aoFooterCallback",e.fnFooterCallback,"user");z(o,"aoInitComplete",e.fnInitComplete,"user");z(o,"aoPreDrawCallback",e.fnPreDrawCallback,"user");o.rowIdFn=P(e.rowId);fb(o);j=o.oClasses;
e.bJQueryUI?(h.extend(j,m.ext.oJUIClasses,e.oClasses),e.sDom===l.sDom&&"lfrtip"===l.sDom&&(o.sDom='<"H"lfr>t<"F"ip>'),o.renderer)?h.isPlainObject(o.renderer)&&!o.renderer.header&&(o.renderer.header="jqueryui"):o.renderer="jqueryui":h.extend(j,m.ext.classes,e.oClasses);r.addClass(j.sTable);o.iInitDisplayStart===k&&(o.iInitDisplayStart=e.iDisplayStart,o._iDisplayStart=e.iDisplayStart);null!==e.iDeferLoading&&(o.bDeferLoading=!0,g=h.isArray(e.iDeferLoading),o._iRecordsDisplay=g?e.iDeferLoading[0]:e.iDeferLoading,
o._iRecordsTotal=g?e.iDeferLoading[1]:e.iDeferLoading);var t=o.oLanguage;h.extend(!0,t,e.oLanguage);""!==t.sUrl&&(h.ajax({dataType:"json",url:t.sUrl,success:function(a){S(a);I(l.oLanguage,a);h.extend(true,t,a);ia(o)},error:function(){ia(o)}}),n=!0);null===e.asStripeClasses&&(o.asStripeClasses=[j.sStripeOdd,j.sStripeEven]);var g=o.asStripeClasses,s=r.children("tbody").find("tr").eq(0);-1!==h.inArray(!0,h.map(g,function(a){return s.hasClass(a)}))&&(h("tbody tr",this).removeClass(g.join(" ")),o.asDestroyStripes=
g.slice());q=[];g=this.getElementsByTagName("thead");0!==g.length&&(fa(o.aoHeader,g[0]),q=qa(o));if(null===e.aoColumns){p=[];g=0;for(i=q.length;g<i;g++)p.push(null)}else p=e.aoColumns;g=0;for(i=p.length;g<i;g++)Ga(o,q?q[g]:null);hb(o,e.aoColumnDefs,p,function(a,b){la(o,a,b)});if(s.length){var u=function(a,b){return a.getAttribute("data-"+b)!==null?b:null};h(s[0]).children("th, td").each(function(a,b){var c=o.aoColumns[a];if(c.mData===a){var d=u(b,"sort")||u(b,"order"),e=u(b,"filter")||u(b,"search");
if(d!==null||e!==null){c.mData={_:a+".display",sort:d!==null?a+".@data-"+d:k,type:d!==null?a+".@data-"+d:k,filter:e!==null?a+".@data-"+e:k};la(o,a)}}})}var v=o.oFeatures;e.bStateSave&&(v.bStateSave=!0,Kb(o,e),z(o,"aoDrawCallback",ya,"state_save"));if(e.aaSorting===k){q=o.aaSorting;g=0;for(i=q.length;g<i;g++)q[g][1]=o.aoColumns[g].asSorting[0]}xa(o);v.bSort&&z(o,"aoDrawCallback",function(){if(o.bSorted){var a=V(o),b={};h.each(a,function(a,c){b[c.src]=c.dir});w(o,null,"order",[o,a,b]);Jb(o)}});z(o,
"aoDrawCallback",function(){(o.bSorted||y(o)==="ssp"||v.bDeferRender)&&xa(o)},"sc");g=r.children("caption").each(function(){this._captionSide=r.css("caption-side")});i=r.children("thead");0===i.length&&(i=h("<thead/>").appendTo(this));o.nTHead=i[0];i=r.children("tbody");0===i.length&&(i=h("<tbody/>").appendTo(this));o.nTBody=i[0];i=r.children("tfoot");if(0===i.length&&0<g.length&&(""!==o.oScroll.sX||""!==o.oScroll.sY))i=h("<tfoot/>").appendTo(this);0===i.length||0===i.children().length?r.addClass(j.sNoFooter):
0<i.length&&(o.nTFoot=i[0],fa(o.aoFooter,o.nTFoot));if(e.aaData)for(g=0;g<e.aaData.length;g++)L(o,e.aaData[g]);else(o.bDeferLoading||"dom"==y(o))&&ma(o,h(o.nTBody).children("tr"));o.aiDisplay=o.aiDisplayMaster.slice();o.bInitialised=!0;!1===n&&ia(o)}});b=null;return this};var Tb=[],x=Array.prototype,cc=function(a){var b,c,d=m.settings,e=h.map(d,function(a){return a.nTable});if(a){if(a.nTable&&a.oApi)return[a];if(a.nodeName&&"table"===a.nodeName.toLowerCase())return b=h.inArray(a,e),-1!==b?[d[b]]:
null;if(a&&"function"===typeof a.settings)return a.settings().toArray();"string"===typeof a?c=h(a):a instanceof h&&(c=a)}else return[];if(c)return c.map(function(){b=h.inArray(this,e);return-1!==b?d[b]:null}).toArray()};t=function(a,b){if(!(this instanceof t))return new t(a,b);var c=[],d=function(a){(a=cc(a))&&(c=c.concat(a))};if(h.isArray(a))for(var e=0,f=a.length;e<f;e++)d(a[e]);else d(a);this.context=pa(c);b&&h.merge(this,b);this.selector={rows:null,cols:null,opts:null};t.extend(this,this,Tb)};
m.Api=t;h.extend(t.prototype,{any:function(){return 0!==this.count()},concat:x.concat,context:[],count:function(){return this.flatten().length},each:function(a){for(var b=0,c=this.length;b<c;b++)a.call(this,this[b],b,this);return this},eq:function(a){var b=this.context;return b.length>a?new t(b[a],this[a]):null},filter:function(a){var b=[];if(x.filter)b=x.filter.call(this,a,this);else for(var c=0,d=this.length;c<d;c++)a.call(this,this[c],c,this)&&b.push(this[c]);return new t(this.context,b)},flatten:function(){var a=
[];return new t(this.context,a.concat.apply(a,this.toArray()))},join:x.join,indexOf:x.indexOf||function(a,b){for(var c=b||0,d=this.length;c<d;c++)if(this[c]===a)return c;return-1},iterator:function(a,b,c,d){var e=[],f,g,h,j,n,l=this.context,m,q,p=this.selector;"string"===typeof a&&(d=c,c=b,b=a,a=!1);g=0;for(h=l.length;g<h;g++){var o=new t(l[g]);if("table"===b)f=c.call(o,l[g],g),f!==k&&e.push(f);else if("columns"===b||"rows"===b)f=c.call(o,l[g],this[g],g),f!==k&&e.push(f);else if("column"===b||"column-rows"===
b||"row"===b||"cell"===b){q=this[g];"column-rows"===b&&(m=Da(l[g],p.opts));j=0;for(n=q.length;j<n;j++)f=q[j],f="cell"===b?c.call(o,l[g],f.row,f.column,g,j):c.call(o,l[g],f,g,j,m),f!==k&&e.push(f)}}return e.length||d?(a=new t(l,a?e.concat.apply([],e):e),b=a.selector,b.rows=p.rows,b.cols=p.cols,b.opts=p.opts,a):this},lastIndexOf:x.lastIndexOf||function(a,b){return this.indexOf.apply(this.toArray.reverse(),arguments)},length:0,map:function(a){var b=[];if(x.map)b=x.map.call(this,a,this);else for(var c=
0,d=this.length;c<d;c++)b.push(a.call(this,this[c],c));return new t(this.context,b)},pluck:function(a){return this.map(function(b){return b[a]})},pop:x.pop,push:x.push,reduce:x.reduce||function(a,b){return gb(this,a,b,0,this.length,1)},reduceRight:x.reduceRight||function(a,b){return gb(this,a,b,this.length-1,-1,-1)},reverse:x.reverse,selector:null,shift:x.shift,sort:x.sort,splice:x.splice,toArray:function(){return x.slice.call(this)},to$:function(){return h(this)},toJQuery:function(){return h(this)},
unique:function(){return new t(this.context,pa(this))},unshift:x.unshift});t.extend=function(a,b,c){if(c.length&&b&&(b instanceof t||b.__dt_wrapper)){var d,e,f,g=function(a,b,c){return function(){var d=b.apply(a,arguments);t.extend(d,d,c.methodExt);return d}};d=0;for(e=c.length;d<e;d++)f=c[d],b[f.name]="function"===typeof f.val?g(a,f.val,f):h.isPlainObject(f.val)?{}:f.val,b[f.name].__dt_wrapper=!0,t.extend(a,b[f.name],f.propExt)}};t.register=p=function(a,b){if(h.isArray(a))for(var c=0,d=a.length;c<
d;c++)t.register(a[c],b);else for(var e=a.split("."),f=Tb,g,i,c=0,d=e.length;c<d;c++){g=(i=-1!==e[c].indexOf("()"))?e[c].replace("()",""):e[c];var j;a:{j=0;for(var n=f.length;j<n;j++)if(f[j].name===g){j=f[j];break a}j=null}j||(j={name:g,val:{},methodExt:[],propExt:[]},f.push(j));c===d-1?j.val=b:f=i?j.methodExt:j.propExt}};t.registerPlural=s=function(a,b,c){t.register(a,c);t.register(b,function(){var a=c.apply(this,arguments);return a===this?this:a instanceof t?a.length?h.isArray(a[0])?new t(a.context,
a[0]):a[0]:k:a})};p("tables()",function(a){var b;if(a){b=t;var c=this.context;if("number"===typeof a)a=[c[a]];else var d=h.map(c,function(a){return a.nTable}),a=h(d).filter(a).map(function(){var a=h.inArray(this,d);return c[a]}).toArray();b=new b(a)}else b=this;return b});p("table()",function(a){var a=this.tables(a),b=a.context;return b.length?new t(b[0]):a});s("tables().nodes()","table().node()",function(){return this.iterator("table",function(a){return a.nTable},1)});s("tables().body()","table().body()",
function(){return this.iterator("table",function(a){return a.nTBody},1)});s("tables().header()","table().header()",function(){return this.iterator("table",function(a){return a.nTHead},1)});s("tables().footer()","table().footer()",function(){return this.iterator("table",function(a){return a.nTFoot},1)});s("tables().containers()","table().container()",function(){return this.iterator("table",function(a){return a.nTableWrapper},1)});p("draw()",function(a){return this.iterator("table",function(b){"page"===
a?M(b):("string"===typeof a&&(a="full-hold"===a?!1:!0),R(b,!1===a))})});p("page()",function(a){return a===k?this.page.info().page:this.iterator("table",function(b){Ta(b,a)})});p("page.info()",function(){if(0===this.context.length)return k;var a=this.context[0],b=a._iDisplayStart,c=a._iDisplayLength,d=a.fnRecordsDisplay(),e=-1===c;return{page:e?0:Math.floor(b/c),pages:e?1:Math.ceil(d/c),start:b,end:a.fnDisplayEnd(),length:c,recordsTotal:a.fnRecordsTotal(),recordsDisplay:d,serverSide:"ssp"===y(a)}});
p("page.len()",function(a){return a===k?0!==this.context.length?this.context[0]._iDisplayLength:k:this.iterator("table",function(b){Ra(b,a)})});var Ub=function(a,b,c){if(c){var d=new t(a);d.one("draw",function(){c(d.ajax.json())})}if("ssp"==y(a))R(a,b);else{C(a,!0);var e=a.jqXHR;e&&4!==e.readyState&&e.abort();ra(a,[],function(c){na(a);for(var c=sa(a,c),d=0,e=c.length;d<e;d++)L(a,c[d]);R(a,b);C(a,!1)})}};p("ajax.json()",function(){var a=this.context;if(0<a.length)return a[0].json});p("ajax.params()",
function(){var a=this.context;if(0<a.length)return a[0].oAjaxData});p("ajax.reload()",function(a,b){return this.iterator("table",function(c){Ub(c,!1===b,a)})});p("ajax.url()",function(a){var b=this.context;if(a===k){if(0===b.length)return k;b=b[0];return b.ajax?h.isPlainObject(b.ajax)?b.ajax.url:b.ajax:b.sAjaxSource}return this.iterator("table",function(b){h.isPlainObject(b.ajax)?b.ajax.url=a:b.ajax=a})});p("ajax.url().load()",function(a,b){return this.iterator("table",function(c){Ub(c,!1===b,a)})});
var Za=function(a,b,c,d,e){var f=[],g,i,j,n,l,m;j=typeof b;if(!b||"string"===j||"function"===j||b.length===k)b=[b];j=0;for(n=b.length;j<n;j++){i=b[j]&&b[j].split?b[j].split(","):[b[j]];l=0;for(m=i.length;l<m;l++)(g=c("string"===typeof i[l]?h.trim(i[l]):i[l]))&&g.length&&(f=f.concat(g))}a=v.selector[a];if(a.length){j=0;for(n=a.length;j<n;j++)f=a[j](d,e,f)}return pa(f)},$a=function(a){a||(a={});a.filter&&a.search===k&&(a.search=a.filter);return h.extend({search:"none",order:"current",page:"all"},a)},
ab=function(a){for(var b=0,c=a.length;b<c;b++)if(0<a[b].length)return a[0]=a[b],a[0].length=1,a.length=1,a.context=[a.context[b]],a;a.length=0;return a},Da=function(a,b){var c,d,e,f=[],g=a.aiDisplay;c=a.aiDisplayMaster;var i=b.search;d=b.order;e=b.page;if("ssp"==y(a))return"removed"===i?[]:W(0,c.length);if("current"==e){c=a._iDisplayStart;for(d=a.fnDisplayEnd();c<d;c++)f.push(g[c])}else if("current"==d||"applied"==d)f="none"==i?c.slice():"applied"==i?g.slice():h.map(c,function(a){return-1===h.inArray(a,
g)?a:null});else if("index"==d||"original"==d){c=0;for(d=a.aoData.length;c<d;c++)"none"==i?f.push(c):(e=h.inArray(c,g),(-1===e&&"removed"==i||0<=e&&"applied"==i)&&f.push(c))}return f};p("rows()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=$a(b),c=this.iterator("table",function(c){var e=b;return Za("row",a,function(a){var b=Pb(a);if(b!==null&&!e)return[b];var i=Da(c,e);if(b!==null&&h.inArray(b,i)!==-1)return[b];if(!a)return i;if(typeof a==="function")return h.map(i,function(b){var e=
c.aoData[b];return a(b,e._aData,e.nTr)?b:null});b=Sb(ja(c.aoData,i,"nTr"));if(a.nodeName&&h.inArray(a,b)!==-1)return[a._DT_RowIndex];if(typeof a==="string"&&a.charAt(0)==="#"){i=c.aIds[a.replace(/^#/,"")];if(i!==k)return[i.idx]}return h(b).filter(a).map(function(){return this._DT_RowIndex}).toArray()},c,e)},1);c.selector.rows=a;c.selector.opts=b;return c});p("rows().nodes()",function(){return this.iterator("row",function(a,b){return a.aoData[b].nTr||k},1)});p("rows().data()",function(){return this.iterator(!0,
"rows",function(a,b){return ja(a.aoData,b,"_aData")},1)});s("rows().cache()","row().cache()",function(a){return this.iterator("row",function(b,c){var d=b.aoData[c];return"search"===a?d._aFilterData:d._aSortData},1)});s("rows().invalidate()","row().invalidate()",function(a){return this.iterator("row",function(b,c){ea(b,c,a)})});s("rows().indexes()","row().index()",function(){return this.iterator("row",function(a,b){return b},1)});s("rows().ids()","row().id()",function(a){for(var b=[],c=this.context,
d=0,e=c.length;d<e;d++)for(var f=0,g=this[d].length;f<g;f++){var h=c[d].rowIdFn(c[d].aoData[this[d][f]]._aData);b.push((!0===a?"#":"")+h)}return new t(c,b)});s("rows().remove()","row().remove()",function(){var a=this;this.iterator("row",function(b,c,d){var e=b.aoData,f=e[c];e.splice(c,1);for(var g=0,h=e.length;g<h;g++)null!==e[g].nTr&&(e[g].nTr._DT_RowIndex=g);oa(b.aiDisplayMaster,c);oa(b.aiDisplay,c);oa(a[d],c,!1);Sa(b);c=b.rowIdFn(f._aData);c!==k&&delete b.aIds[c]});this.iterator("table",function(a){for(var c=
0,d=a.aoData.length;c<d;c++)a.aoData[c].idx=c});return this});p("rows.add()",function(a){var b=this.iterator("table",function(b){var c,f,g,h=[];f=0;for(g=a.length;f<g;f++)c=a[f],c.nodeName&&"TR"===c.nodeName.toUpperCase()?h.push(ma(b,c)[0]):h.push(L(b,c));return h},1),c=this.rows(-1);c.pop();h.merge(c,b);return c});p("row()",function(a,b){return ab(this.rows(a,b))});p("row().data()",function(a){var b=this.context;if(a===k)return b.length&&this.length?b[0].aoData[this[0]]._aData:k;b[0].aoData[this[0]]._aData=
a;ea(b[0],this[0],"data");return this});p("row().node()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]].nTr||null:null});p("row.add()",function(a){a instanceof h&&a.length&&(a=a[0]);var b=this.iterator("table",function(b){return a.nodeName&&"TR"===a.nodeName.toUpperCase()?ma(b,a)[0]:L(b,a)});return this.row(b[0])});var bb=function(a,b){var c=a.context;if(c.length&&(c=c[0].aoData[b!==k?b:a[0]])&&c._details)c._details.remove(),c._detailsShow=k,c._details=k},Vb=function(a,
b){var c=a.context;if(c.length&&a.length){var d=c[0].aoData[a[0]];if(d._details){(d._detailsShow=b)?d._details.insertAfter(d.nTr):d._details.detach();var e=c[0],f=new t(e),g=e.aoData;f.off("draw.dt.DT_details column-visibility.dt.DT_details destroy.dt.DT_details");0<D(g,"_details").length&&(f.on("draw.dt.DT_details",function(a,b){e===b&&f.rows({page:"current"}).eq(0).each(function(a){a=g[a];a._detailsShow&&a._details.insertAfter(a.nTr)})}),f.on("column-visibility.dt.DT_details",function(a,b){if(e===
b)for(var c,d=ca(b),f=0,h=g.length;f<h;f++)c=g[f],c._details&&c._details.children("td[colspan]").attr("colspan",d)}),f.on("destroy.dt.DT_details",function(a,b){if(e===b)for(var c=0,d=g.length;c<d;c++)g[c]._details&&bb(f,c)}))}}};p("row().child()",function(a,b){var c=this.context;if(a===k)return c.length&&this.length?c[0].aoData[this[0]]._details:k;if(!0===a)this.child.show();else if(!1===a)bb(this);else if(c.length&&this.length){var d=c[0],c=c[0].aoData[this[0]],e=[],f=function(a,b){if(h.isArray(a)||
a instanceof h)for(var c=0,k=a.length;c<k;c++)f(a[c],b);else a.nodeName&&"tr"===a.nodeName.toLowerCase()?e.push(a):(c=h("<tr><td/></tr>").addClass(b),h("td",c).addClass(b).html(a)[0].colSpan=ca(d),e.push(c[0]))};f(a,b);c._details&&c._details.remove();c._details=h(e);c._detailsShow&&c._details.insertAfter(c.nTr)}return this});p(["row().child.show()","row().child().show()"],function(){Vb(this,!0);return this});p(["row().child.hide()","row().child().hide()"],function(){Vb(this,!1);return this});p(["row().child.remove()",
"row().child().remove()"],function(){bb(this);return this});p("row().child.isShown()",function(){var a=this.context;return a.length&&this.length?a[0].aoData[this[0]]._detailsShow||!1:!1});var dc=/^(.+):(name|visIdx|visible)$/,Wb=function(a,b,c,d,e){for(var c=[],d=0,f=e.length;d<f;d++)c.push(B(a,e[d],b));return c};p("columns()",function(a,b){a===k?a="":h.isPlainObject(a)&&(b=a,a="");var b=$a(b),c=this.iterator("table",function(c){var e=a,f=b,g=c.aoColumns,i=D(g,"sName"),j=D(g,"nTh");return Za("column",
e,function(a){var b=Pb(a);if(a==="")return W(g.length);if(b!==null)return[b>=0?b:g.length+b];if(typeof a==="function"){var e=Da(c,f);return h.map(g,function(b,f){return a(f,Wb(c,f,0,0,e),j[f])?f:null})}var k=typeof a==="string"?a.match(dc):"";if(k)switch(k[2]){case "visIdx":case "visible":b=parseInt(k[1],10);if(b<0){var m=h.map(g,function(a,b){return a.bVisible?b:null});return[m[m.length+b]]}return[$(c,b)];case "name":return h.map(i,function(a,b){return a===k[1]?b:null})}else return h(j).filter(a).map(function(){return h.inArray(this,
j)}).toArray()},c,f)},1);c.selector.cols=a;c.selector.opts=b;return c});s("columns().header()","column().header()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTh},1)});s("columns().footer()","column().footer()",function(){return this.iterator("column",function(a,b){return a.aoColumns[b].nTf},1)});s("columns().data()","column().data()",function(){return this.iterator("column-rows",Wb,1)});s("columns().dataSrc()","column().dataSrc()",function(){return this.iterator("column",
function(a,b){return a.aoColumns[b].mData},1)});s("columns().cache()","column().cache()",function(a){return this.iterator("column-rows",function(b,c,d,e,f){return ja(b.aoData,f,"search"===a?"_aFilterData":"_aSortData",c)},1)});s("columns().nodes()","column().nodes()",function(){return this.iterator("column-rows",function(a,b,c,d,e){return ja(a.aoData,e,"anCells",b)},1)});s("columns().visible()","column().visible()",function(a,b){return this.iterator("column",function(c,d){if(a===k)return c.aoColumns[d].bVisible;
var e=c.aoColumns,f=e[d],g=c.aoData,i,j,m;if(a!==k&&f.bVisible!==a){if(a){var l=h.inArray(!0,D(e,"bVisible"),d+1);i=0;for(j=g.length;i<j;i++)m=g[i].nTr,e=g[i].anCells,m&&m.insertBefore(e[d],e[l]||null)}else h(D(c.aoData,"anCells",d)).detach();f.bVisible=a;ga(c,c.aoHeader);ga(c,c.aoFooter);if(b===k||b)Y(c),(c.oScroll.sX||c.oScroll.sY)&&Z(c);w(c,null,"column-visibility",[c,d,a]);ya(c)}})});s("columns().indexes()","column().index()",function(a){return this.iterator("column",function(b,c){return"visible"===
a?ba(b,c):c},1)});p("columns.adjust()",function(){return this.iterator("table",function(a){Y(a)},1)});p("column.index()",function(a,b){if(0!==this.context.length){var c=this.context[0];if("fromVisible"===a||"toData"===a)return $(c,b);if("fromData"===a||"toVisible"===a)return ba(c,b)}});p("column()",function(a,b){return ab(this.columns(a,b))});p("cells()",function(a,b,c){h.isPlainObject(a)&&(a.row===k?(c=a,a=null):(c=b,b=null));h.isPlainObject(b)&&(c=b,b=null);if(null===b||b===k)return this.iterator("table",
function(b){var d=a,e=$a(c),f=b.aoData,g=Da(b,e),i=Sb(ja(f,g,"anCells")),j=h([].concat.apply([],i)),l,m=b.aoColumns.length,n,p,t,s,u,v;return Za("cell",d,function(a){var c=typeof a==="function";if(a===null||a===k||c){n=[];p=0;for(t=g.length;p<t;p++){l=g[p];for(s=0;s<m;s++){u={row:l,column:s};if(c){v=f[l];a(u,B(b,l,s),v.anCells?v.anCells[s]:null)&&n.push(u)}else n.push(u)}}return n}return h.isPlainObject(a)?[a]:j.filter(a).map(function(a,b){if(b.parentNode)l=b.parentNode._DT_RowIndex;else{a=0;for(t=
f.length;a<t;a++)if(h.inArray(b,f[a].anCells)!==-1){l=a;break}}return{row:l,column:h.inArray(b,f[l].anCells)}}).toArray()},b,e)});var d=this.columns(b,c),e=this.rows(a,c),f,g,i,j,m,l=this.iterator("table",function(a,b){f=[];g=0;for(i=e[b].length;g<i;g++){j=0;for(m=d[b].length;j<m;j++)f.push({row:e[b][g],column:d[b][j]})}return f},1);h.extend(l.selector,{cols:b,rows:a,opts:c});return l});s("cells().nodes()","cell().node()",function(){return this.iterator("cell",function(a,b,c){return(a=a.aoData[b].anCells)?
a[c]:k},1)});p("cells().data()",function(){return this.iterator("cell",function(a,b,c){return B(a,b,c)},1)});s("cells().cache()","cell().cache()",function(a){a="search"===a?"_aFilterData":"_aSortData";return this.iterator("cell",function(b,c,d){return b.aoData[c][a][d]},1)});s("cells().render()","cell().render()",function(a){return this.iterator("cell",function(b,c,d){return B(b,c,d,a)},1)});s("cells().indexes()","cell().index()",function(){return this.iterator("cell",function(a,b,c){return{row:b,
column:c,columnVisible:ba(a,c)}},1)});s("cells().invalidate()","cell().invalidate()",function(a){return this.iterator("cell",function(b,c,d){ea(b,c,a,d)})});p("cell()",function(a,b,c){return ab(this.cells(a,b,c))});p("cell().data()",function(a){var b=this.context,c=this[0];if(a===k)return b.length&&c.length?B(b[0],c[0].row,c[0].column):k;ib(b[0],c[0].row,c[0].column,a);ea(b[0],c[0].row,"data",c[0].column);return this});p("order()",function(a,b){var c=this.context;if(a===k)return 0!==c.length?c[0].aaSorting:
k;"number"===typeof a?a=[[a,b]]:h.isArray(a[0])||(a=Array.prototype.slice.call(arguments));return this.iterator("table",function(b){b.aaSorting=a.slice()})});p("order.listener()",function(a,b,c){return this.iterator("table",function(d){Oa(d,a,b,c)})});p(["columns().order()","column().order()"],function(a){var b=this;return this.iterator("table",function(c,d){var e=[];h.each(b[d],function(b,c){e.push([c,a])});c.aaSorting=e})});p("search()",function(a,b,c,d){var e=this.context;return a===k?0!==e.length?
e[0].oPreviousSearch.sSearch:k:this.iterator("table",function(e){e.oFeatures.bFilter&&ha(e,h.extend({},e.oPreviousSearch,{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),1)})});s("columns().search()","column().search()",function(a,b,c,d){return this.iterator("column",function(e,f){var g=e.aoPreSearchCols;if(a===k)return g[f].sSearch;e.oFeatures.bFilter&&(h.extend(g[f],{sSearch:a+"",bRegex:null===b?!1:b,bSmart:null===c?!0:c,bCaseInsensitive:null===d?!0:d}),ha(e,
e.oPreviousSearch,1))})});p("state()",function(){return this.context.length?this.context[0].oSavedState:null});p("state.clear()",function(){return this.iterator("table",function(a){a.fnStateSaveCallback.call(a.oInstance,a,{})})});p("state.loaded()",function(){return this.context.length?this.context[0].oLoadedState:null});p("state.save()",function(){return this.iterator("table",function(a){ya(a)})});m.versionCheck=m.fnVersionCheck=function(a){for(var b=m.version.split("."),a=a.split("."),c,d,e=0,f=
a.length;e<f;e++)if(c=parseInt(b[e],10)||0,d=parseInt(a[e],10)||0,c!==d)return c>d;return!0};m.isDataTable=m.fnIsDataTable=function(a){var b=h(a).get(0),c=!1;h.each(m.settings,function(a,e){var f=e.nScrollHead?h("table",e.nScrollHead)[0]:null,g=e.nScrollFoot?h("table",e.nScrollFoot)[0]:null;if(e.nTable===b||f===b||g===b)c=!0});return c};m.tables=m.fnTables=function(a){var b=!1;h.isPlainObject(a)&&(b=a.api,a=a.visible);var c=h.map(m.settings,function(b){if(!a||a&&h(b.nTable).is(":visible"))return b.nTable});
return b?new t(c):c};m.util={throttle:ua,escapeRegex:va};m.camelToHungarian=I;p("$()",function(a,b){var c=this.rows(b).nodes(),c=h(c);return h([].concat(c.filter(a).toArray(),c.find(a).toArray()))});h.each(["on","one","off"],function(a,b){p(b+"()",function(){var a=Array.prototype.slice.call(arguments);a[0].match(/\.dt\b/)||(a[0]+=".dt");var d=h(this.tables().nodes());d[b].apply(d,a);return this})});p("clear()",function(){return this.iterator("table",function(a){na(a)})});p("settings()",function(){return new t(this.context,
this.context)});p("init()",function(){var a=this.context;return a.length?a[0].oInit:null});p("data()",function(){return this.iterator("table",function(a){return D(a.aoData,"_aData")}).flatten()});p("destroy()",function(a){a=a||!1;return this.iterator("table",function(b){var c=b.nTableWrapper.parentNode,d=b.oClasses,e=b.nTable,f=b.nTBody,g=b.nTHead,i=b.nTFoot,j=h(e),f=h(f),k=h(b.nTableWrapper),l=h.map(b.aoData,function(a){return a.nTr}),p;b.bDestroying=!0;w(b,"aoDestroyCallback","destroy",[b]);a||
(new t(b)).columns().visible(!0);k.unbind(".DT").find(":not(tbody *)").unbind(".DT");h(Fa).unbind(".DT-"+b.sInstance);e!=g.parentNode&&(j.children("thead").detach(),j.append(g));i&&e!=i.parentNode&&(j.children("tfoot").detach(),j.append(i));b.aaSorting=[];b.aaSortingFixed=[];xa(b);h(l).removeClass(b.asStripeClasses.join(" "));h("th, td",g).removeClass(d.sSortable+" "+d.sSortableAsc+" "+d.sSortableDesc+" "+d.sSortableNone);b.bJUI&&(h("th span."+d.sSortIcon+", td span."+d.sSortIcon,g).detach(),h("th, td",
g).each(function(){var a=h("div."+d.sSortJUIWrapper,this);h(this).append(a.contents());a.detach()}));f.children().detach();f.append(l);g=a?"remove":"detach";j[g]();k[g]();!a&&c&&(c.insertBefore(e,b.nTableReinsertBefore),j.css("width",b.sDestroyWidth).removeClass(d.sTable),(p=b.asDestroyStripes.length)&&f.children().each(function(a){h(this).addClass(b.asDestroyStripes[a%p])}));c=h.inArray(b,m.settings);-1!==c&&m.settings.splice(c,1)})});h.each(["column","row","cell"],function(a,b){p(b+"s().every()",
function(a){return this.iterator(b,function(d,e,f,g,h){a.call((new t(d))[b](e,"cell"===b?f:k),e,f,g,h)})})});p("i18n()",function(a,b,c){var d=this.context[0],a=P(a)(d.oLanguage);a===k&&(a=b);c!==k&&h.isPlainObject(a)&&(a=a[c]!==k?a[c]:a._);return a.replace("%d",c)});m.version="1.10.9";m.settings=[];m.models={};m.models.oSearch={bCaseInsensitive:!0,sSearch:"",bRegex:!1,bSmart:!0};m.models.oRow={nTr:null,anCells:null,_aData:[],_aSortData:null,_aFilterData:null,_sFilterRow:null,_sRowStripe:"",src:null,
idx:-1};m.models.oColumn={idx:null,aDataSort:null,asSorting:null,bSearchable:null,bSortable:null,bVisible:null,_sManualType:null,_bAttrSrc:!1,fnCreatedCell:null,fnGetData:null,fnSetData:null,mData:null,mRender:null,nTh:null,nTf:null,sClass:null,sContentPadding:null,sDefaultContent:null,sName:null,sSortDataType:"std",sSortingClass:null,sSortingClassJUI:null,sTitle:null,sType:null,sWidth:null,sWidthOrig:null};m.defaults={aaData:null,aaSorting:[[0,"asc"]],aaSortingFixed:[],ajax:null,aLengthMenu:[10,
25,50,100,500,1000,10000],aoColumns:null,aoColumnDefs:null,aoSearchCols:[],asStripeClasses:null,bAutoWidth:!0,bDeferRender:!1,bDestroy:!1,bFilter:!0,bInfo:!0,bJQueryUI:!1,bLengthChange:!0,bPaginate:!0,bProcessing:!1,bRetrieve:!1,bScrollCollapse:!1,bServerSide:!1,bSort:!0,bSortMulti:!0,bSortCellsTop:!1,bSortClasses:!0,bStateSave:!1,fnCreatedRow:null,fnDrawCallback:null,fnFooterCallback:null,fnFormatNumber:function(a){return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g,this.oLanguage.sThousands)},fnHeaderCallback:null,
fnInfoCallback:null,fnInitComplete:null,fnPreDrawCallback:null,fnRowCallback:null,fnServerData:null,fnServerParams:null,fnStateLoadCallback:function(a){try{return JSON.parse((-1===a.iStateDuration?sessionStorage:localStorage).getItem("DataTables_"+a.sInstance+"_"+location.pathname))}catch(b){}},fnStateLoadParams:null,fnStateLoaded:null,fnStateSaveCallback:function(a,b){try{(-1===a.iStateDuration?sessionStorage:localStorage).setItem("DataTables_"+a.sInstance+"_"+location.pathname,JSON.stringify(b))}catch(c){}},
fnStateSaveParams:null,iStateDuration:7200,iDeferLoading:null,iDisplayLength:10,iDisplayStart:0,iTabIndex:0,oClasses:{},oLanguage:{oAria:{sSortAscending:": ativar para classificar coluna crescente",sSortDescending:": ativar para classificar coluna decrescente"},oPaginate:{sFirst:"Primeiro",sLast:"Último",sNext:">",sPrevious:"<"},sEmptyTable:"Nenhum item encontrado...",sInfo:"_END_ - _TOTAL_ de _MAX_ resultados",sInfoEmpty:"0 - 0 de 0 resultados",sInfoFiltered:"",
sInfoPostFix:"",sDecimal:"",sThousands:",",sLengthMenu:"Mostrar _MENU_ itens",sLoadingRecords:"Carregando...",sProcessing:"Processando...",sSearch:"",sSearchPlaceholder:"Pesquisar...",sUrl:"",sZeroRecords:"Nenhum item encontrado..."},oSearch:h.extend({},m.models.oSearch),sAjaxDataProp:"data",sAjaxSource:null,sDom:"lfrtip",searchDelay:null,sPaginationType:"simple_numbers",sScrollX:"",sScrollXInner:"",sScrollY:"",sServerMethod:"GET",renderer:null,rowId:"DT_RowId"};X(m.defaults);m.defaults.column={aDataSort:null,
iDataSort:-1,asSorting:["asc","desc"],bSearchable:!0,bSortable:!0,bVisible:!0,fnCreatedCell:null,mData:null,mRender:null,sCellType:"td",sClass:"",sContentPadding:"",sDefaultContent:null,sName:"",sSortDataType:"std",sTitle:null,sType:null,sWidth:null};X(m.defaults.column);m.models.oSettings={oFeatures:{bAutoWidth:null,bDeferRender:null,bFilter:null,bInfo:null,bLengthChange:null,bPaginate:null,bProcessing:null,bServerSide:null,bSort:null,bSortMulti:null,bSortClasses:null,bStateSave:null},oScroll:{bCollapse:null,
iBarWidth:0,sX:null,sXInner:null,sY:null},oLanguage:{fnInfoCallback:null},oBrowser:{bScrollOversize:!1,bScrollbarLeft:!1,bBounding:!1,barWidth:0},ajax:null,aanFeatures:[],aoData:[],aiDisplay:[],aiDisplayMaster:[],aIds:{},aoColumns:[],aoHeader:[],aoFooter:[],oPreviousSearch:{},aoPreSearchCols:[],aaSorting:null,aaSortingFixed:[],asStripeClasses:null,asDestroyStripes:[],sDestroyWidth:0,aoRowCallback:[],aoHeaderCallback:[],aoFooterCallback:[],aoDrawCallback:[],aoRowCreatedCallback:[],aoPreDrawCallback:[],
aoInitComplete:[],aoStateSaveParams:[],aoStateLoadParams:[],aoStateLoaded:[],sTableId:"",nTable:null,nTHead:null,nTFoot:null,nTBody:null,nTableWrapper:null,bDeferLoading:!1,bInitialised:!1,aoOpenRows:[],sDom:null,searchDelay:null,sPaginationType:"two_button",iStateDuration:0,aoStateSave:[],aoStateLoad:[],oSavedState:null,oLoadedState:null,sAjaxSource:null,sAjaxDataProp:null,bAjaxDataGet:!0,jqXHR:null,json:k,oAjaxData:k,fnServerData:null,aoServerParams:[],sServerMethod:null,fnFormatNumber:null,aLengthMenu:null,
iDraw:0,bDrawing:!1,iDrawError:-1,_iDisplayLength:10,_iDisplayStart:0,_iRecordsTotal:0,_iRecordsDisplay:0,bJUI:null,oClasses:{},bFiltered:!1,bSorted:!1,bSortCellsTop:null,oInit:null,aoDestroyCallback:[],fnRecordsTotal:function(){return"ssp"==y(this)?1*this._iRecordsTotal:this.aiDisplayMaster.length},fnRecordsDisplay:function(){return"ssp"==y(this)?1*this._iRecordsDisplay:this.aiDisplay.length},fnDisplayEnd:function(){var a=this._iDisplayLength,b=this._iDisplayStart,c=b+a,d=this.aiDisplay.length,e=
this.oFeatures,f=e.bPaginate;return e.bServerSide?!1===f||-1===a?b+d:Math.min(b+a,this._iRecordsDisplay):!f||c>d||-1===a?d:c},oInstance:null,sInstance:null,iTabIndex:0,nScrollHead:null,nScrollFoot:null,aLastSort:[],oPlugins:{},rowIdFn:null,rowId:null};m.ext=v={buttons:{},classes:{},errMode:"alert",feature:[],search:[],selector:{cell:[],column:[],row:[]},internal:{},legacy:{ajax:null},pager:{},renderer:{pageButton:{},header:{}},order:{},type:{detect:[],search:{},order:{}},_unique:0,fnVersionCheck:m.fnVersionCheck,
iApiIndex:0,oJUIClasses:{},sVersion:m.version};h.extend(v,{afnFiltering:v.search,aTypes:v.type.detect,ofnSearch:v.type.search,oSort:v.type.order,afnSortData:v.order,aoFeatures:v.feature,oApi:v.internal,oStdClasses:v.classes,oPagination:v.pager});h.extend(m.ext.classes,{sTable:"dataTable",sNoFooter:"no-footer",sPageButton:"paginate_button",sPageButtonActive:"current",sPageButtonDisabled:"disabled",sStripeOdd:"odd",sStripeEven:"even",sRowEmpty:"dataTables_empty",sWrapper:"dataTables_wrapper",sFilter:"dataTables_filter",
sInfo:"dataTables_info",sPaging:"dataTables_paginate paging_",sLength:"dataTables_length",sProcessing:"dataTables_processing",sSortAsc:"sorting_asc",sSortDesc:"sorting_desc",sSortable:"sorting",sSortableAsc:"sorting_asc_disabled",sSortableDesc:"sorting_desc_disabled",sSortableNone:"sorting_disabled",sSortColumn:"sorting_",sFilterInput:"",sLengthSelect:"",sScrollWrapper:"dataTables_scroll",sScrollHead:"dataTables_scrollHead",sScrollHeadInner:"dataTables_scrollHeadInner",sScrollBody:"dataTables_scrollBody",
sScrollFoot:"dataTables_scrollFoot",sScrollFootInner:"dataTables_scrollFootInner",sHeaderTH:"",sFooterTH:"",sSortJUIAsc:"",sSortJUIDesc:"",sSortJUI:"",sSortJUIAscAllowed:"",sSortJUIDescAllowed:"",sSortJUIWrapper:"",sSortIcon:"",sJUIHeader:"",sJUIFooter:""});var Ea="",Ea="",G=Ea+"ui-state-default",ka=Ea+"css_right ui-icon ui-icon-",Xb=Ea+"fg-toolbar ui-toolbar ui-widget-header ui-helper-clearfix";h.extend(m.ext.oJUIClasses,m.ext.classes,{sPageButton:"fg-button ui-button "+G,sPageButtonActive:"ui-state-disabled",
sPageButtonDisabled:"ui-state-disabled",sPaging:"dataTables_paginate fg-buttonset ui-buttonset fg-buttonset-multi ui-buttonset-multi paging_",sSortAsc:G+" sorting_asc",sSortDesc:G+" sorting_desc",sSortable:G+" sorting",sSortableAsc:G+" sorting_asc_disabled",sSortableDesc:G+" sorting_desc_disabled",sSortableNone:G+" sorting_disabled",sSortJUIAsc:ka+"triangle-1-n",sSortJUIDesc:ka+"triangle-1-s",sSortJUI:ka+"carat-2-n-s",sSortJUIAscAllowed:ka+"carat-1-n",sSortJUIDescAllowed:ka+"carat-1-s",sSortJUIWrapper:"DataTables_sort_wrapper",
sSortIcon:"DataTables_sort_icon",sScrollHead:"dataTables_scrollHead "+G,sScrollFoot:"dataTables_scrollFoot "+G,sHeaderTH:G,sFooterTH:G,sJUIHeader:Xb+" ui-corner-tl ui-corner-tr",sJUIFooter:Xb+" ui-corner-bl ui-corner-br"});var Mb=m.ext.pager;h.extend(Mb,{simple:function(){return["previous","next"]},full:function(){return["first","previous","next","last"]},numbers:function(a,b){return[Aa(a,b)]},simple_numbers:function(a,b){return["previous",Aa(a,b),"next"]},full_numbers:function(a,b){return["first",
"previous",Aa(a,b),"next","last"]},_numbers:Aa,numbers_length:7});h.extend(!0,m.ext.renderer,{pageButton:{_:function(a,b,c,d,e,f){var g=a.oClasses,i=a.oLanguage.oPaginate,j,k,l=0,m=function(b,d){var p,q,t,s,u=function(b){Ta(a,b.data.action,true)};p=0;for(q=d.length;p<q;p++){s=d[p];if(h.isArray(s)){t=h("<"+(s.DT_el||"div")+"/>").appendTo(b);m(t,s)}else{j=null;k="";switch(s){case "ellipsis":b.append('<span class="ellipsis">&#x2026;</span>');break;case "first":j=i.sFirst;k=s+(e>0?"":" "+g.sPageButtonDisabled);
break;case "previous":j=i.sPrevious;k=s+(e>0?"":" "+g.sPageButtonDisabled);break;case "next":j=i.sNext;k=s+(e<f-1?"":" "+g.sPageButtonDisabled);break;case "last":j=i.sLast;k=s+(e<f-1?"":" "+g.sPageButtonDisabled);break;default:j=s+1;k=e===s?g.sPageButtonActive:""}if(j!==null){t=h("<a>",{"class":g.sPageButton+" "+k,"aria-controls":a.sTableId,"data-dt-idx":l,tabindex:a.iTabIndex,id:c===0&&typeof s==="string"?a.sTableId+"_"+s:null}).html(j).appendTo(b);Va(t,{action:s},u);l++}}}},p;try{p=h(b).find(T.activeElement).data("dt-idx")}catch(t){}m(h(b).empty(),
d);p&&h(b).find("[data-dt-idx="+p+"]").focus()}}});h.extend(m.ext.type.detect,[function(a,b){var c=b.oLanguage.sDecimal;return Ya(a,c)?"num"+c:null},function(a){if(a&&!(a instanceof Date)&&(!ac.test(a)||!bc.test(a)))return null;var b=Date.parse(a);return null!==b&&!isNaN(b)||K(a)?"date":null},function(a,b){var c=b.oLanguage.sDecimal;return Ya(a,c,!0)?"num-fmt"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Rb(a,c)?"html-num"+c:null},function(a,b){var c=b.oLanguage.sDecimal;return Rb(a,c,
!0)?"html-num-fmt"+c:null},function(a){return K(a)||"string"===typeof a&&-1!==a.indexOf("<")?"html":null}]);h.extend(m.ext.type.search,{html:function(a){return K(a)?a:"string"===typeof a?a.replace(Ob," ").replace(Ca,""):""},string:function(a){return K(a)?a:"string"===typeof a?a.replace(Ob," "):a}});var Ba=function(a,b,c,d){if(0!==a&&(!a||"-"===a))return-Infinity;b&&(a=Qb(a,b));a.replace&&(c&&(a=a.replace(c,"")),d&&(a=a.replace(d,"")));return 1*a};h.extend(v.type.order,{"date-pre":function(a){return Date.parse(a)||
0},"html-pre":function(a){return K(a)?"":a.replace?a.replace(/<.*?>/g,"").toLowerCase():a+""},"string-pre":function(a){return K(a)?"":"string"===typeof a?a.toLowerCase():!a.toString?"":a.toString()},"string-asc":function(a,b){return a<b?-1:a>b?1:0},"string-desc":function(a,b){return a<b?1:a>b?-1:0}});cb("");h.extend(!0,m.ext.renderer,{header:{_:function(a,b,c,d){h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(c.sSortingClass+" "+d.sSortAsc+" "+d.sSortDesc).addClass(h[e]==
"asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass)}})},jqueryui:function(a,b,c,d){h("<div/>").addClass(d.sSortJUIWrapper).append(b.contents()).append(h("<span/>").addClass(d.sSortIcon+" "+c.sSortingClassJUI)).appendTo(b);h(a.nTable).on("order.dt.DT",function(e,f,g,h){if(a===f){e=c.idx;b.removeClass(d.sSortAsc+" "+d.sSortDesc).addClass(h[e]=="asc"?d.sSortAsc:h[e]=="desc"?d.sSortDesc:c.sSortingClass);b.find("span."+d.sSortIcon).removeClass(d.sSortJUIAsc+" "+d.sSortJUIDesc+" "+d.sSortJUI+" "+
d.sSortJUIAscAllowed+" "+d.sSortJUIDescAllowed).addClass(h[e]=="asc"?d.sSortJUIAsc:h[e]=="desc"?d.sSortJUIDesc:c.sSortingClassJUI)}})}}});m.render={number:function(a,b,c,d,e){return{display:function(f){if("number"!==typeof f&&"string"!==typeof f)return f;var g=0>f?"-":"",f=Math.abs(parseFloat(f)),h=parseInt(f,10),f=c?b+(f-h).toFixed(c).substring(2):"";return g+(d||"")+h.toString().replace(/\B(?=(\d{3})+(?!\d))/g,a)+f+(e||"")}}}};h.extend(m.ext.internal,{_fnExternApiFunc:Nb,_fnBuildAjax:ra,_fnAjaxUpdate:lb,
_fnAjaxParameters:ub,_fnAjaxUpdateDraw:vb,_fnAjaxDataSrc:sa,_fnAddColumn:Ga,_fnColumnOptions:la,_fnAdjustColumnSizing:Y,_fnVisibleToColumnIndex:$,_fnColumnIndexToVisible:ba,_fnVisbleColumns:ca,_fnGetColumns:aa,_fnColumnTypes:Ia,_fnApplyColumnDefs:hb,_fnHungarianMap:X,_fnCamelToHungarian:I,_fnLanguageCompat:S,_fnBrowserDetect:fb,_fnAddData:L,_fnAddTr:ma,_fnNodeToDataIndex:function(a,b){return b._DT_RowIndex!==k?b._DT_RowIndex:null},_fnNodeToColumnIndex:function(a,b,c){return h.inArray(c,a.aoData[b].anCells)},
_fnGetCellData:B,_fnSetCellData:ib,_fnSplitObjNotation:La,_fnGetObjectDataFn:P,_fnSetObjectDataFn:Q,_fnGetDataMaster:Ma,_fnClearTable:na,_fnDeleteIndex:oa,_fnInvalidate:ea,_fnGetRowElements:Ka,_fnCreateTr:Ja,_fnBuildHead:kb,_fnDrawHead:ga,_fnDraw:M,_fnReDraw:R,_fnAddOptionsHtml:nb,_fnDetectHeader:fa,_fnGetUniqueThs:qa,_fnFeatureHtmlFilter:pb,_fnFilterComplete:ha,_fnFilterCustom:yb,_fnFilterColumn:xb,_fnFilter:wb,_fnFilterCreateSearch:Qa,_fnEscapeRegex:va,_fnFilterData:zb,_fnFeatureHtmlInfo:sb,_fnUpdateInfo:Cb,
_fnInfoMacros:Db,_fnInitialise:ia,_fnInitComplete:ta,_fnLengthChange:Ra,_fnFeatureHtmlLength:ob,_fnFeatureHtmlPaginate:tb,_fnPageChange:Ta,_fnFeatureHtmlProcessing:qb,_fnProcessingDisplay:C,_fnFeatureHtmlTable:rb,_fnScrollDraw:Z,_fnApplyToChildren:H,_fnCalculateColumnWidths:Ha,_fnThrottle:ua,_fnConvertToWidth:Fb,_fnGetWidestNode:Gb,_fnGetMaxLenString:Hb,_fnStringToCss:u,_fnSortFlatten:V,_fnSort:mb,_fnSortAria:Jb,_fnSortListener:Ua,_fnSortAttachListener:Oa,_fnSortingClasses:xa,_fnSortData:Ib,_fnSaveState:ya,
_fnLoadState:Kb,_fnSettingsFromNode:za,_fnLog:J,_fnMap:F,_fnBindAction:Va,_fnCallbackReg:z,_fnCallbackFire:w,_fnLengthOverflow:Sa,_fnRenderer:Pa,_fnDataSource:y,_fnRowAttributes:Na,_fnCalculateEnd:function(){}});h.fn.dataTable=m;h.fn.dataTableSettings=m.settings;h.fn.dataTableExt=m.ext;h.fn.DataTable=function(a){return h(this).dataTable(a).api()};h.each(m,function(a,b){h.fn.DataTable[a]=b});return h.fn.dataTable};"function"===typeof define&&define.amd?define("datatables",["jquery"],S):"object"===
typeof exports?module.exports=S(require("jquery")):jQuery&&!jQuery.fn.dataTable&&S(jQuery)})(window,document);
/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher")}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c)})}var c='[data-dismiss="alert"]',d=function(b){a(b).on("click",c,this.close)};d.VERSION="3.3.5",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove()}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c())};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this},a(document).on("click.bs.alert.data-api",c,d.prototype.close)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof b&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b)})}var c=function(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1};c.VERSION="3.3.5",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type))})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==typeof b&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle()})}var c=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return}a.preventDefault()}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active)},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f)},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a)}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a))},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){return this.sliding?void 0:this.slide("next")},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active")}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this};var e=function(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault()}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data())})})}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d)}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==typeof b&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]()})}var d=function(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};d.VERSION="3.3.5",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this)}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e)},this)).end()},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c)};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h)})}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger("hidden.bs.dropdown",f))))}))}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c)})}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function(b){a(b).on("click.bs.dropdown",this.toggle)};g.VERSION="3.3.5",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger("shown.bs.dropdown",h)}return!1}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus")}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown)}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==typeof b&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d)})}var c=function(b,c){this.options=c,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};c.VERSION="3.3.5",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a)},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0)})}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f)}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f)}))},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal())},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus")},this))},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal")})},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void(this.ignoreBackdropClick=!1):void(a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()))},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function(){d.removeBackdrop(),b&&b()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g()}else b&&b()},c.prototype.handleUpdate=function(){this.adjustDialog()},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""})},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left)}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar()},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth)},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad)},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus")})}),b.call(f,g,this)})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void(c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show())},c.prototype.isInStateTrue=function(){for(var a in this.inState)if(this.inState[a])return!0;return!1},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide())},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h)}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e)};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q()}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function(a){d.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l)},c.prototype.replaceArrow=function(a,b,c){},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b()}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this)},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},c.prototype.hasContent=function(){return this.getTitle()},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f)},c.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i)}else{var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k)}return e},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},c.prototype.getUID=function(a){do a+=~~(1e6*Math.random());while(document.getElementById(a));return a},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},c.prototype.enable=function(){this.enabled=!0},c.prototype.disable=function(){this.enabled=!1},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c)},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null})};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this}}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof b&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]())})}var c=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.5",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"top",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},c.prototype.hasContent=function(){return this.getTitle()||this.getContent()},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this}}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process()}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})}b.VERSION="3.3.5",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),
d.trigger("activate.bs.scrollspy")},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data())})})}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]()})}var c=function(b){this.element=a(b)};c.VERSION="3.3.5",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]})})}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e()}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in")};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this};var e=function(c){c.preventDefault(),b.call(a(this),"show")};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e)}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof b&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]()})}var c=function(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};c.VERSION="3.3.5",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=typeof d&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix")}"bottom"==h&&this.$element.offset({top:g-b-f})}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d)})})}(jQuery);!function(n){"function"==typeof define&&define.amd?define(["jquery"],n):"undefined"!=typeof exports?module.exports=n(require("jquery")):n(jQuery)}(function(n){"use strict";n.fn.priceFormat=function(t){var t=n.extend(!0,{},n.fn.priceFormat.defaults,t);window.ctrl_down=!1;var i=!1;return n(window).bind("keyup keydown",function(n){return window.ctrl_down=n.ctrlKey,!0}),n(this).bind("keyup keydown",function(n){return i=n.metaKey,!0}),this.each(function(){function r(n){h.is("input")?h.val(n):h.html(n),h.trigger("pricechange")}function e(){return m=h.is("input")?h.val():h.html()}function o(n){for(var t="",i=0;i<n.length;i++){var r=n.charAt(i);0==t.length&&0==r&&(r=!1),r&&r.match(v)&&(x?t.length<x&&(t+=r):t+=r)}return t}function f(n){for(;n.length<_+1;)n="0"+n;return n}function u(t,i){if(!i&&(""===t||t==u("0",!0))&&P)return"";var r=f(o(t)),e="",a=0;0==_&&(y="",c="");var c=r.substr(r.length-_,_),s=r.substr(0,r.length-_);if(r=C?s+y+c:"0"!==s?s+y+c:y+c,b||""!=n.trim(b)){for(var l=s.length;l>0;l--){var d=s.substr(l-1,1);a++,a%3==0&&(d=b+d),e=d+e}e.substr(0,1)==b&&(e=e.substring(1,e.length)),r=0==_?e:e+y+c}return!F||0==s&&0==c||(r=t.indexOf("-")!=-1&&t.indexOf("+")<t.indexOf("-")?"-"+r:O?"+"+r:""+r),g&&(r=g+r),w&&(r+=w),r}function a(n){var t=n.keyCode?n.keyCode:n.which,e=String.fromCharCode(t),o=!1,f=m,a=u(f+e);(t>=48&&t<=57||t>=96&&t<=105)&&(o=!0),192==t&&(o=!0),8==t&&(o=!0),9==t&&(o=!0),13==t&&(o=!0),46==t&&(o=!0),37==t&&(o=!0),39==t&&(o=!0),!F||189!=t&&109!=t&&173!=t||(o=!0),!O||187!=t&&107!=t&&61!=t||(o=!0),t>=16&&t<=20&&(o=!0),27==t&&(o=!0),t>=33&&t<=40&&(o=!0),t>=44&&t<=46&&(o=!0),(window.ctrl_down||i)&&(86==t&&(o=!0),67==t&&(o=!0),88==t&&(o=!0),82==t&&(o=!0),84==t&&(o=!0),76==t&&(o=!0),87==t&&(o=!0),81==t&&(o=!0),78==t&&(o=!0),65==t&&(o=!0)),o||(n.preventDefault(),n.stopPropagation(),f!=a&&r(a))}function c(){var n=e(),t=u(n);n!=t&&r(t);var i=u("0",!0);t==i&&"0"!=n&&P&&r("")}function s(){h.val(g+e())}function l(){h.val(e()+w)}function d(){if(""!=n.trim(g)&&S){var t=e().split(g);r(t[1])}}function p(){if(""!=n.trim(w)&&k){var t=e().split(w);r(t[0])}}var h=n(this),m="",v=/[0-9]/;m=h.is("input")?h.val():h.html();var g=t.prefix,w=t.suffix,y=t.centsSeparator,b=t.thousandsSeparator,x=t.limit,_=t.centsLimit,S=t.clearPrefix,k=t.clearSuffix,F=t.allowNegative,O=t.insertPlusSign,P=t.clearOnEmpty,C=t.leadingZero;O&&(F=!0),h.bind("keydown.price_format",a),h.bind("keyup.price_format",c),h.bind("focusout.price_format",c),S&&(h.bind("focusout.price_format",function(){d()}),h.bind("focusin.price_format",function(){s()})),k&&(h.bind("focusout.price_format",function(){p()}),h.bind("focusin.price_format",function(){l()})),e().length>0&&(c(),d(),p())})},n.fn.unpriceFormat=function(){return n(this).unbind(".price_format")},n.fn.unmask=function(){var t,i="";t=n(this).is("input")?n(this).val()||[]:n(this).html();for(var r=0;r<t.length;r++)isNaN(t[r])&&"-"!=t[r]||(i+=t[r]);return i},n.fn.priceToFloat=function(){return n(this).is("input")?field=n(this).val()||[]:field=n(this).html(),parseFloat(field.replace(/[^0-9\-\.]/g,""))},n.fn.priceFormat.defaults={prefix:"US$ ",suffix:"",centsSeparator:".",thousandsSeparator:",",limit:!1,centsLimit:2,clearPrefix:!1,clearSufix:!1,allowNegative:!1,insertPlusSign:!1,clearOnEmpty:!1,leadingZero:!0}});// jQuery Mask Plugin v1.13.4
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

	return this.each(function(){var i=e.extend({},t,!0);new n(e(this),i)}),this;if("string"==typeof t){var i=this.data("select2");null==i&&window.console&&console.error&&console.error("The select2('"+t+"') method was called on an element that is not using Select2.");var r=Array.prototype.slice.call(arguments,1),s=i[t](r);return e.inArray(t,o)>-1?this:s}throw new Error("Invalid arguments for Select2: "+t)}}return null==e.fn.select2.defaults&&(e.fn.select2.defaults=i),n}),function(n){"function"==typeof t.define&&t.define.amd?t.define("jquery.mousewheel",["jquery"],n):"object"==typeof exports?module.exports=n:n(e)}(function(e){function t(t){var s=t||window.event,a=l.call(arguments,1),c=0,d=0,p=0,h=0,f=0,g=0;if(t=e.event.fix(s),t.type="mousewheel","detail"in s&&(p=-1*s.detail),"wheelDelta"in s&&(p=s.wheelDelta),"wheelDeltaY"in s&&(p=s.wheelDeltaY),"wheelDeltaX"in s&&(d=-1*s.wheelDeltaX),"axis"in s&&s.axis===s.HORIZONTAL_AXIS&&(d=-1*p,p=0),c=0===p?d:p,"deltaY"in s&&(c=p=-1*s.deltaY),"deltaX"in s&&(d=s.deltaX,0===p&&(c=-1*d)),0!==p||0!==d){if(1===s.deltaMode){var m=e.data(this,"mousewheel-line-height");c*=m,p*=m,d*=m}else if(2===s.deltaMode){var v=e.data(this,"mousewheel-page-height");c*=v,p*=v,d*=v}if(h=Math.max(Math.abs(p),Math.abs(d)),(!r||h<r)&&(r=h,i(s,h)&&(r/=40)),i(s,h)&&(c/=40,d/=40,p/=40),c=Math[c>=1?"floor":"ceil"](c/r),d=Math[d>=1?"floor":"ceil"](d/r),p=Math[p>=1?"floor":"ceil"](p/r),u.settings.normalizeOffset&&this.getBoundingClientRect){var y=this.getBoundingClientRect();f=t.clientX-y.left,g=t.clientY-y.top}return t.deltaX=d,t.deltaY=p,t.deltaFactor=r,t.offsetX=f,t.offsetY=g,t.deltaMode=0,a.unshift(t,c,d,p),o&&clearTimeout(o),o=setTimeout(n,200),(e.event.dispatch||e.event.handle).apply(this,a)}}function n(){r=null}function i(e,t){return u.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120==0}var o,r,s=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],a="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],l=Array.prototype.slice;if(e.event.fixHooks)for(var c=s.length;c;)e.event.fixHooks[s[--c]]=e.event.mouseHooks;var u=e.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var n=a.length;n;)this.addEventListener(a[--n],t,!1);else this.onmousewheel=t;e.data(this,"mousewheel-line-height",u.getLineHeight(this)),e.data(this,"mousewheel-page-height",u.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var n=a.length;n;)this.removeEventListener(a[--n],t,!1);else this.onmousewheel=null;e.removeData(this,"mousewheel-line-height"),e.removeData(this,"mousewheel-page-height")},getLineHeight:function(t){var n=e(t),i=n["offsetParent"in e.fn?"offsetParent":"parent"]();return i.length||(i=e("body")),parseInt(i.css("fontSize"),10)||parseInt(n.css("fontSize"),10)||16},getPageHeight:function(t){return e(t).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})}),{define:t.define,require:t.require}}(),n=t.require("jquery.select2");return e.fn.select2.amd=t,n});/* Eventos All */


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


*//* Datatables */

// ----------------------------------------------------------------------------------------------------------------------------------

// Eventos Admin


	// NOVO

		function autocomplete(){
			/*
			$("input.autocomplete_cidades").autocomplete({
				minLength: 1,
				source: function( request, response ) {
					$.ajax( {
						type: "POST",
						url: DIR+"/app/Ajax/Autocomplete/cidades.php",
						dataType: "json",
						data: { pesq: request.term, estados: 0 }, // estados: $('select#estados').val()
						success: function( data ) {
							response(data.itens);
						}
					});
				},
			});
			*/
		};

	// NOVO



// ----------------------------------------------------------------------------------------------------------------------------------




	// EVENDO QUANDO APERTAR ALGUMA TECLA NO TECLADO
		document.addEventListener('keyup', taclado);
		function taclado(){
			//if(event.keyCode == 27){ // ESC
				//$id = 0;
				//$zindex = 0;
				//$(".ui-dialog").each(function() {
					//if($zindex < $(this).css('zIndex')){
						//$id = $(this).attr('dir');
						//$zindex = $(this).css('zIndex');
					//}
				//});
				//dialog_fechar($id);
			//}
		};
	// EVENDO QUANDO APERTAR ALGUMA TECLA NO TECLADO




// ----------------------------------------------------------------------------------------------------------------------------------




	// INCICIANDO ADMIN
		function iniciar_events_admin($table, $lugar, $gerenciar=''){
			$(document).ready(function() {
				//if(!$lugar) setTimeout(function(){ menu_hover_e_click('') }, 0.5);
				menu_hover_e_click('');
				mascaras();
				mascaras1();
				fundoo_fechar();
				input_file_hover();
				criar_css($lugar);
				tooltip();

				autocomplete();


				$('.campos_menu_admin .sortable').sortable();
				$('select.design').select2();
				$('[rel="draggable"]').draggable();

				// Icone no select2
					$(".select2_inicial").on("click", function() {
						setTimeout(function(){
							$('.select2-results__option:not(.icon_ok)[id*="icone"]').each(function() {
								if($(this).html() && $(this).html()!='- - -'){
									$val = '<i class="'+$(this).html()+'"></i> '+$(this).html();
									$(this).html($val).addClass('icon_ok');
								}
							});
						}, 2000);
						
					})
				// Icone no select2

				// Criar ou Gerenciar Itens no Select2
					if(!$gerenciar){ // Para n Abrir esse evento 2 vezes e atrapalhar no pop
						$("select.design").on("select2:select", function (ev) {
							select2_select(this, ev);
						});
					}
				// Criar ou Gerenciar Itens no Select2
			});
		};
		function tooltip(){			
			$('[rel="tooltip"]').tooltip({html:true});
		}
	// INCICIANDO ADMIN



	// DEFAULTT
		function defaultt($tipo, $cate='', $gets=''){
			$.ajax({
				type: "POST",
				url: DIR+"/admin/views/default.php",
				data: { menu: 1, tipo: $tipo, cate: $cate, gets: $gets, lugar: LUGAR },
				dataType: "json",
				beforeSend: function(){ ajaxIni(0); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					$(".carregando").hide();
					history.pushState('Administração','Administração', DIR+'/'+LUGAR+'/'+($json.tipo ? '?tipo='+$json.tipo : ''	)+($cate ? '&cate='+$cate : ''	)+($gets ? '&'+$gets : ''	) );

					if($json.evento != null){
						eval($json.evento);
					}

					$(".principal .views .conteudo .lista").html($json.html);
					criar_css('.principal .views .conteudo .lista')

					$('.principal > .menu > ul.menu_left li').removeClass('sel').removeClass('sel_item');
					$('.principal > .menu > ul.menu_left li.menu_'+$json.modulo).parent().parent().addClass('sel');
					$('.principal > .menu > ul.menu_left li.menu_'+$json.modulo).addClass('sel').addClass('sel_item');
					topoo();

					voltarr_historico("defaultt("+A+$tipo+A+", "+A+$cate+A+", "+A+$gets+A+")");
				}
			});
		}
	// DEFAULTT



	// VOLTARR
		function voltarr(){
			eval($_VOLTAR[ $_VOLTAR.length-2 ]);

			var $_VOLTAR_TEMP = new Array();
			$.each($_VOLTAR, function($key, $value) {
				if( $key != ($_VOLTAR.length-1) && $key != ($_VOLTAR.length-2) )
				$_VOLTAR_TEMP[$key] = $value;
			});	

			$_VOLTAR = $_VOLTAR_TEMP;		
		}
		function voltarr_historico($funcao){
			$_VOLTAR[ $_VOLTAR.length ] = $funcao;
		}
	// VOLTARR



	// INPUT DISABLE
		function input_disable(){
			$('.dialog form ul.nav li').each(function() {
				e = $(this).parent().parent().find('ul.campos.box li[tabs="'+$(this).attr('tabs')+'"]');
				if($(this).hasClass("disabled") == true){
					e.find('input[required], select[required], textarea[required]').addClass('requiredx').removeAttr('required');
				} else {
					e.find('input.requiredx, select.requiredx, textarea.requiredx').each(function() {
						$(this).removeClass('requiredx');
						$(this).attr('required', '');
					});
				}
			});
		}
	// INPUT DISABLE

	// ATUALIZAR TODA TABLE DATATABLE QUANDO FECHAR
		function table_datatable_atualizar_quando_fechar($modulo){
			$return = 0;
			if($modulo==1 || $modulo==19){
				$return = 1;
			}
			return $return;
		}
	// ATUALIZAR TODA TABLE DATATABLE QUANDO FECHAR


	// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


	// MAIS CAMPOS
		// <a onclick="mais_campos(this, 'veiculos_tipo', 'veiculos_txt')" class="c_azul link">Adicionar mais</a>
		var $mais_campos_n = 100 // Mudar tbm em CamposModulos.php, padrao.php, select_relacao.php, func.php, eventos_all.js
		function mais_campos($e, $campo_1, $campo_2, $campo_3, $campo_4, $campo_5, $campo_6, $values){
			$pai = $($e).parent().parent().parent();

			$count = 0;
			for ($i=1; $i<=$mais_campos_n; $i++){
				$campo = $campo_1+'_'+$i;
				if( $('[name="'+$campo+'"]').attr('name') ){
					$count++;
				}
			}

			$html = '';
			$campos = new Array($campo_1, $campo_2, $campo_3, $campo_4, $campo_5, $campo_6);
			$campos_select = new Array();

			$script = '';
			$.each($campos, function($key, $value) {
				if($value){
					$campo_class = $pai.find('.finput.finput_'+$value+'_1').parent().attr('class');
					$campo_html = $pai.find('.finput.finput_'+$value+'_1').parent().html();

					if($campo_html){
						$campo_html = $campo_html.replaceAll('_1 ', '_'+($count+1)+' ');
						$campo_html = $campo_html.replaceAll('_1"', '_'+($count+1)+'"');
						$campo_html = $campo_html.replaceAll("_1'", "_"+($count+1)+"'");
						$campo_html = $campo_html.replaceAll('&nbsp;1:', '&nbsp;'+($count+1)+':');

						// SCRIPTS
							$campo_html_js = $campo_html.replaceAll('<script>', '</script>');
							var $array = $campo_html_js.split('</script>');
							$x=0;
							$.each($array, function($key, $value) { $x++;
								if(!($x%2)){
									$script += $value+';';
								}
							});	
						// SCRIPTS

						$campo_html = $campo_html.replaceAll('.trigger("change")', '');
						$html += '<li class="'+$campo_class+'">'+$campo_html+'</li> ';
						$campos_select[$key] = $value+'_'+($count+1);
					}
				}
			});
			$($e).parent().parent().before($html);

			if($count >= $mais_campos_n-1){
				$($e).hide();
			}

			$.each($campos_select, function($key, $value) {
				if($value){
					mais_campos_val($key, $value, $values, $script);
				}
			});
		}
		function mais_campos_edit($n, $values, $campo_1, $campo_2, $campo_3, $campo_4, $campo_5, $campo_6){
			setTimeout(function(){
				$e = $('.finput.finput_'+$campo_1+'_1').parent().parent().find('.linhas_inputs.mais_campos a');
				mais_campos($e, $campo_1, $campo_2, $campo_3, $campo_4, $campo_5, $campo_6, $values);
			 }, 100*$n);
		}
		function mais_campos_val($key, $value, $values, $script){
			setTimeout(function(){
				$('.finput.finput_'+$value).find('.select2').remove();
				$val = $values ? $values[$key] : '';
				// DataTime
					if($val && $('#'+$value).attr('type') == 'datetime-local'){
						$data = $val.split(" ");
						$hora = $data[1].split(":");
						$val = $data[0]+'T'+$hora[0]+':'+$hora[1];
					}
				// DataTime
				$('#'+$value).val($val);
				$('select#'+$value).select2();
				$('select#'+$value).on("select2:select", function (ev) {
					select2_select(this, ev);
				});

				$('select#'+$value).attr('rel_val', $val);
				eval($script);

				if($values && $script.indexOf("select_autocomplete") >= 0){
					$array = $script.split('select_autocomplete("');
					$array = $array[1].split('"');
					setTimeout(function(){
						$.ajax({
							type: "POST",
							url: DIR+"/admin/app/Ajax/Autocomplete/"+$array[0]+".php",
							data: { id: $values[$key] },
							dataType: "json",
							success: function($json){
								if($json.html){
									$('select[name="'+$value+'"]').html($json.html).trigger("change");
								}
							}
						});
					}, .5);
				}
			 }, .5);
		}
		function mais_campos_remove($e, $campo_1, $campo_2, $campo_3, $campo_4, $campo_5, $campo_6){
			$count = 0;
			for ($i=1; $i<=$mais_campos_n; $i++){
				$campo = $campo_1+'_'+$i;
				if( $('[name="'+$campo+'"]').attr('name') ){
					$count++;
				}
			}
			if($count>1){
				$('[name="'+$campo_1+'_'+$count+'"]').find_parent('tags', 'li').remove();
				$('[name="'+$campo_2+'_'+$count+'"]').find_parent('tags', 'li').remove();
				$('[name="'+$campo_3+'_'+$count+'"]').find_parent('tags', 'li').remove();
				$('[name="'+$campo_4+'_'+$count+'"]').find_parent('tags', 'li').remove();
				$('[name="'+$campo_5+'_'+$count+'"]').find_parent('tags', 'li').remove();
				$('[name="'+$campo_6+'_'+$count+'"]').find_parent('tags', 'li').remove();
			}
			$('.mais_campos a').show();
		}
	// MAIS CAMPOS


	// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


	// MAIS FOTOS
		function mais_fotos_update($tabelas, $item, $modulos, $col){
			$.ajax({
				type: "POST",
				url: DIR+"/admin/app/Ajax/Boxs_acoes/mais_fotos_update.php",
				data: { item: $item, tabelas: $tabelas, modulos: $modulos, col: $col },
				dataType: "json",
				beforeSend: function(){ ajaxIni(0); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					$(".carregando").hide();
					$('.mais_fotos_update').html($json.html);
					if($json.n != undefined){
						$('table.datatable').find('.td_datatable[dir="'+$item+'"]').parent().parent().find('.n_'+$col+' span').html($json.n);
					}
				}
			});
		}
		function mais_fotos_gravar($modulos, $item, $col, e){
			$.ajax({
				type: "POST",
				url: DIR+"/admin/app/Ajax/Boxs_acoes/mais_fotos_gravar.php?modulos="+$modulos+"&col="+$col,
				data: $(e).serialize(),
				dataType: "json",
				beforeSend: function(){ ajaxIni(0); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					// crop
					if($json.ids_crop != undefined){
						boxs('crop', 'ids='+$json.ids_crop+'&table=mais_fotos&modulos='+$json.modulos, 1);

					} else {
						mais_fotos_update($json.tabelas, $item, $modulos, $col);
					}
				}
			});
		}
		function mais_fotos_update_boxxs(){
			$(".mais_fotos_update").sortable({
				connectWith: ".mais_fotos_update",
				beforeStop: function(event, ui) {
					e = ui.item;
					$x=0;
					$(".mais_fotos_update input.ordem").each(function() { $x++;
						$(this).val($x);
					});
					$('button[form="form_mais_fotos"]').trigger('click');
				}
			}).disableSelection();
		}
	// MAIS FOTOS

	// MAIS MAPAS
		function mapa_google(e){
			$.ajax({
				type: "POST",
				url: DIR+"/admin/app/Ajax/Boxs_acoes/mapa_google.php",
				data: $(e).serialize(),
				dataType: "json",
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					$('div.mapa_google').html($json.html);
					$('[name="acao_mapa_google"]').val('gravar');
				}
			});
		}
	// MAIS MAPAS

	// NEWSLETTER
		// Newsletter -> Marcar Todos checkbox
		function selecionar_checkbox(){
			if($('#marcar_todos:checked').val()){
				$('#formNewsletter input').prop("checked", true);
			} else {
				$('#formNewsletter input').prop("checked", false);
			}
		}
	
		// Newsletter -> Marcar Todos checkbox da categorias
		function selecionar_checkbox_categorias(id){
			if($('#categorias_'+id).is(':checked'))
				$('.selecionar_'+id).prop("checked", true);
			else
				$('.selecionar_'+id).prop("checked", false);
		}
	// NEWSLETTER




	// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



	// OUTRAS FUNCOES
		// Menu Left Responsivo
			// Menu Listas (hide)
				function menu_resp(){
				if($('.principal aside.menu').hasClass('hide')){
					show_menu_resp();
					gravarCookie('menu_hide', 0, 365);
				} else {
					hide_menu_resp();
					gravarCookie('menu_hide', 1, 365);
				}
				}
			    function hide_menu_resp(){
					$('.principal > aside.menu').addClass('hide');
					$('.principal > aside.views').css('marginLeft', '63px');
					$('.principal > aside.menu > ul > li > ul').hide();			    	
			    }
			    function show_menu_resp(){
					$('.principal > aside.menu').removeClass('hide');
					$('.principal > aside.views').css('marginLeft', '235px');
			    }
			// Menu Listas

			// Menu Responsivo
			    $('.principal > aside.menu > ul.menu_left li').hover(function() {
					if($('.principal > aside.menu').hasClass('hide')){
						$(this).addClass('ativo');
						$(this).find('ul').	show();
					}
			    }, function() {
					if($('.principal > aside.menu').hasClass('hide')){
						$(this).removeClass('ativo');
						$(this).find('ul').hide();
					}
			    });
			// Menu Responsivo

			// Verificar se o menu eh hide (Responsivo)
				setTimeout(function(){
				    if(lerCookie('menu_hide')==1){
				    	hide_menu_resp();
					}
				}, 1000);

			// Menu < 900px
			$(document).ready(function() {
				$(window).resize(function(){
					if(window.innerWidth < 900){
						hide_menu_resp();
					}
				});
				if(window.innerWidth < 900){
					hide_menu_resp();
				}
				$(window).resize(function(){
					if(window.innerWidth > 900){
						show_menu_resp();
					}
				});
				if(window.innerWidth > 900){
					show_menu_resp();
				}
			});
		// Menu Left Responsivo

		// Footer Seta
		$(window).scroll(function(){
			if  ($(window).scrollTop() > 200)
				$("footer .seta").stop(true, true).delay(200).fadeIn(200);
			else 
				$("footer .seta").stop(true, true).delay(200).fadeOut(200);
		});
		$('footer .seta').on('click', function() {
			$("html,body").animate( {scrollTop: $("html").offset().top}, "fast" );
		});

		// Temas
		function temas(e){
			var $cor = $(e).attr('class');
			$('#style_color').attr('href', DIR+'/admin/css/cores/'+$cor+'.css');
			gravarCookie('temas', $cor, 365);
			//fechar_all();					
		}
	// OUTRAS FUNCOES



/* Eventos Admin


----------------------------------------------------------------------------------------------------------------------------------


*/

	// ABRIR VIEWS CARREGANDO A PAGINA
		function views_url($modulo){
			window.parent.location = DIR+'/admin/?pg='+$modulo;
		};
	// ABRIR VIEWS CARREGANDO A PAGINA

	// VIEWS
		function views($modulo, $acao, $gets, $gets_data){
			$ids = '-';
			$tables = '-';
			if($acao==1){
				$_GET = converter_gets($gets);
				if($_GET['tipo']){
					$ids = '-'+$_GET['tipo']+'-';
				} else {
					$ids = '-'+$_GET['id']+'-';
				}
			} else {
				// Ids para edicao e exclusao
				$gerenciar = datatable_gerenciar() ? '_gerenciar' : '';
				$('.datatable'+$gerenciar+' .ui-selected td:first-child > div').each(function() {
					$dir = $(this).attr('dir');
					if($dir != undefined)
						$ids += $dir+'-';
					$table = $(this).attr('table');
					if($table != undefined)
						$tables += $table+'-';
				});
			}

			// Acoes
			if(!$acao || $acao==0)	$acao = 'lista';
			else if($acao==1)	 	$acao = 'edit';
			else if($acao==2)		$acao = 'boxxs';
			else if($acao==3)		$acao = 'gerenciar';

			// Url
			url = $acao=='lista' ? window.location.href.replaceAll('&', ';;z;;') : '';

			$gets = $gets ? '&gets='+$gets.replaceAll('&', ';;z;;') : '';
			$gets_data = $gets_data ? '&'+$gets_data : '';

			$pg_atual = ($modulo==1) ? 'menu_admin' : 'padrao';

			$.ajax({
				type: "POST",
				url: DIR+"/admin/views/"+$pg_atual+".php?lugar="+LUGAR+"&modulo="+$modulo+"&acao="+$acao+$gets,
				data: 'ids='+$ids+'&tables='+$tables+$gets_data+'&url='+url+'&lugar='+LUGAR,
				dataType: "json",
				beforeSend: function(){ ajaxIni(0); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					if($json.evento != null)
						eval($json.evento);
					if($json.erro != null){
						$delay = $json.delay ? $json.delay : '';
						$.each($json.erro, function($key, $val) {
							if($val != 'zzz'){
								alerts(0, $val, 1, $delay);
							}
						});	

					} else {
						// LISTA
						if($acao == 'lista' || $acao == 'filtro'){
							if($acao == 'lista' && $_SESSION['filtro_avancado['+$modulo+']']){
								datatable_filtro($modulo, '', $gets);
							} else if($gets.indexOf('gerenciar=1') >= 0){
								$(".events_externos .boxs .contextoo .contextooo").html($json.html);
								$(".datatable_gerenciar tbody").selectable({ filter: "tr", selected: function(event, ui){ datatable_button_disabled(); } });
								if($json.editar_item == 1){
									$('.datatable_gerenciar tbody').on('dblclick', 'tr', function () { views($modulo, 'edit', $gets); });
								}
								datatable_filtro_itens($modulo, $gets);
								iniciar_events_admin($json.modulo, '.events_externos .boxs .contextoo .contextooo', 1);
							} else {
								$(".principal .views .conteudo .lista").html($json.html);
								$(".datatable tbody").selectable({ filter: 'tr[role="row"]', selected: function(event, ui){ datatable_button_disabled(); } });
								if($json.editar_item == 1){
									$('.datatable tbody').on('dblclick', 'tr[role="row"]', function () { views($modulo, 'edit', $gets); });
									$('.datatable tbody').on('click', 'tr[role="row"] .info_seta', function () { datatable_tr_extra(this); });
								}
								datatable_filtro_itens($modulo, $gets);
								iniciar_events_admin($json.modulo, '.principal .views .conteudo .lista');
								history.pushState('Administração','Administração', $json.url);
								topoo();
							}
						// LISTA


						// BOXXS
						} else if($acao == 'boxxs'){
							$(".principal .views .conteudo .lista").html($json.html);
							boxxs('booxs_mudar_status(e)');
							history.pushState('Administração','Administração', $json.url);
							topoo();
						// BOXXS


						// NOVO OU EDIT
						} else if($acao == 'novo' || $acao == 'edit'){
							if($(".ui-dialog").hasClass("pg_"+$modulo) == true){
								dialog_abrir($modulo);
								setTimeout(function(){ $('.ui-dialog.pg_'+$modulo+' form input[name="nome"]').focus(); }, 0.5);
								alerts(0, "Esta Janela já se Encontra em Uso!");
							} else {
								div = ".principal .views .conteudo .events";
								$(div).html(' <div id="dialog" title="'+$json.title+'">'+$json.html+'</div> ');
								$z_index = datatable_gerenciar() ? 'gerenciar z9' : '';
								$(div+' #dialog').dialog({ dialogClass: "pg_"+$modulo+" pg_"+$json.modulo+" "+$z_index, });
								$('.ui-dialog.pg_'+$modulo).attr('dir', $modulo);
								js = 'dialog_click('+$modulo+')';
								$('.ui-dialog.pg_'+$modulo).attr('onClick', js);
								$('footer .abas li').removeClass('ativo');
								$('footer .abas').append('<li class="ativo aba_'+$modulo+' limit" onclick="dialog_click_aba('+$modulo+')">'+$json.title+'</li>');
								dialog_click($modulo);
								iniciar_events_admin($json.modulo, '.ui-dialog.pg_'+$modulo+' .campos_do_modulo');
								setTimeout(function(){ $('.ui-dialog.pg_'+$modulo+' .campos_do_modulo form input[name="nome"]').focus(); }, 0.5);
								//setTimeout(function(){ criar_css(); }, 0.5);
							}
						// NOVO OU EDIT


						// EXCLUIR
						} else if($acao == 'delete'){
							alerts(1);
							datatable_update('delete', $ids);
						}
						// EXCLUIR

						// SELECIONANDO MENU
							if(!datatable_gerenciar()){
								$('.principal > .menu > ul.menu_left li').removeClass('sel').removeClass('sel_item');
								$('.principal > .menu > ul.menu_left li.menu_'+$modulo).parent().parent().addClass('sel');
								$('.principal > .menu > ul.menu_left li.menu_'+$modulo).addClass('sel').addClass('sel_item');
							}
						// SELECIONANDO MENU
					}
					$(".carregando").hide();
				}
			});

			// HIDE NO MENU TOPO
				$('header .barra .menu_topo > a').parent().find('ul').stop(true, true).delay(200).slideUp();
				$('header .barra .menu_topo > a').parent().parent().find('li').removeClass('ativo');
			// HIDE NO MENU TOPO

			if($acao == 'lista' || $acao == 'filtro'){
				voltarr_historico("views("+A+$modulo+A+", "+A+$acao+A+", "+A+$gets+A+", "+A+$gets_data+A+")");
			}
		};

	// GRAVAR ITEM
		function gravar_item($modulo, $id, $classe, $gets){
			$pg_atual = ($modulo==1) ? 'menu_admin' : 'padrao';
			$gets = $gets ? '&gets='+$gets.replaceAll('&', ';;z;;') : '';
			$($classe).attr('action', DIR+"/admin/views/"+$pg_atual+".php?acao=gravar&id="+$id+"&modulo="+$modulo+$gets);

			$($classe).ajaxForm({
				data: { lugar: LUGAR },
				dataType: "json",
				beforeSend: function(){ ajaxIni(0); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					if($json.evento != null)
						eval($json.evento);
					if($json.erro != null){
						$delay = $json.delay ? $json.delay : '';
						$.each($json.erro, function($key, $val) {
							if($val != 'zzz'){
								alerts(0, $val, 1, $delay);
							}
						});
					} else if($json.datatable_boxs){
						$('.datatable_campos_boxs').html('');
						datatable_boxs_atualuzar_selects($json.table, $json.rand);

					} else if($json.acao == 'gerenciar'){ // Gerenciar
						gerneciar_fechar($classe.replace('form.form_', ''), $json.ult_id);

					} else {
						alerts(1);

						if($json.modulo_tipo == 2){
							boxxs_atualizar(this.modulo, 1);
						}

						if($json.dataup){
							$($classe).find("#dataup").val($json.dataup);
						}

						// Atualizar
						if(table_datatable_atualizar_quando_fechar($modulo)){
							datatable_update();
						} else if($id!=0){ // Edit
							datatable_update('row', $id);
						} else { // Novo
							datatable_update();
						}

						if($json.acao == 1){
							if($json.ult_id!=undefined){
								$($classe).attr('onSubmit', "gravar_item("+$modulo+", '"+$json.ult_id+"', this)");

								dialog_fechar($modulo);
								views($modulo, 1, 'id='+$json.ult_id);
							}
						} else if($json.acao == 2){
							if($id){
								dialog_fechar($modulo);
								views($modulo, 'novo', '');
							} else {
								$($classe).find("input[name=reset_button]").trigger('click');
								$($classe).find("select").trigger('change');
							}
						} else if($json.acao == 3){
							dialog_fechar($modulo);
						} else if($json.acao == 4){
							$(".ui-dialog.pg_"+$modulo+" #dialog").dialog("destroy");
							$('footer .abas li.aba_'+$modulo).remove();
							gerneciar_fechar();
						}
						$($classe).find('.input.file input').val('');
						$($classe).find('.input.file span>span').html('Selecionar Arquivo');
					}
					$(".carregando").hide();
				}

			});
		};
	// GRAVAR ITEM

	// DELETAR ITEM
		function deletar_item($modulo, item){
			$pg_atual = ($modulo==1) ? 'menu_admin' : 'padrao';
			$.ajax({
				type: "POST",
				url: DIR+"/admin/views/"+$pg_atual+".php?modulo="+$modulo+"&acao=delete",
				data:  { ids: '-'+item+'-', lugar: LUGAR },
				dataType: "json",
				beforeSend: function(){ ajaxIni(0); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					if($json.evento != null)
						eval($json.evento);
					if($json.erro != null){
						$delay = $json.delay ? $json.delay : '';
						$.each($json.erro, function($key, $val) {
							alerts(0, $val, 1, $delay);
						});	
					} else {
						alerts(1);
						datatable_update();
						dialog_fechar($modulo);
					}
					$(".carregando").hide();
				}
			});
		};
	// DELETAR ITEM


	function datatable_tr_extra($e){
        var tr = $($e).closest('tr');
        var row = $dataTable_oTable.row(tr);
 
        if(row.child.isShown()){
            row.child.hide();
        } else {
            row.child( format(tr) ).show();
        }
	};
	function format($tr) {
	    $return  = '<table cellspacing="0" border="0" class="w100p" style="border: 1px solid #ccc !important;"> ';
			$return += '<tr> ';
				$return += '<td class="tal">'+$tr.find('.info_seta').attr('info')+'</td> ';
			$return += '</tr> ';
		$return += '</table> ';
		return $return;
	}


	// FILTROS
		function datatable_filtro_itens($modulo){
			if($_SESSION['filtro_avancado['+$modulo+']']){
				$.ajax({
					type: "POST",
					url: DIR+"/admin/app/Ajax/Boxs/filtro_avancado.php",
					data: 'acao=itens&modulo='+$modulo+'&'+$_SESSION['filtro_avancado['+$modulo+']']+'&lugar='+LUGAR,
					dataType: "json",
					error: function($request, $error){ ajaxErro($request, $error); },
					success: function($json){
						$('.datatable_filtro_itens').html($json.html);
					}
				});
			}
		};
		function datatable_filtro($modulo, e, $gets){
			if(e){
				$_SESSION['filtro_avancado['+$modulo+']'] = $(e).serialize();
				$gets = $(e).find('input[name="gets"]').val();
			}
			views($modulo, 'filtro', $gets, $_SESSION['filtro_avancado['+$modulo+']']);
		};
		function datatable_filtro_itens($modulo, $gets){
			if($_SESSION['filtro_avancado['+$modulo+']']){
				$.ajax({
					type: "POST",
					url: DIR+"/admin/app/Ajax/Boxs/filtro_avancado.php",
					data: 'acao=itens&modulo='+$modulo+'&'+$_SESSION['filtro_avancado['+$modulo+']']+'&gets='+$gets+'&lugar='+LUGAR,
					dataType: "json",
					error: function($request, $error){ ajaxErro($request, $error); },
					success: function($json){
						$('.datatable_filtro_itens').html($json.html);
					}
				});
			}
		};
		function datatable_filtro_add_item($modulo, $itens, $acao){
			$.ajax({
				type: "POST",
				url: DIR+"/admin/app/Ajax/Boxs/filtro_avancado.php",
				data: 'acao='+$acao+'&modulo='+$modulo+'&'+$itens+'&lugar='+LUGAR,
				dataType: "json",
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					if($acao=='filtro_inicial'){
						if($json.post){
							$_SESSION['filtro_avancado['+$modulo+']'] = $json.post;
							datatable_filtro_itens($modulo);
						} else {
							boxs($json.boxs, 'modulos='+$modulo);
						}
					} else {
						$_SESSION['filtro_avancado['+$modulo+']'] = $json.post;
						views($modulo, 'lista', '', $_SESSION['filtro_avancado['+$modulo+']']);
					}
				}
			});
		};
		function datatable_filtro_delete_item($modulo, $name, e, $gets){
			if($_SESSION['filtro_avancado['+$modulo+']']){
				$.ajax({
					type: "POST",
					url: DIR+"/admin/app/Ajax/Boxs/filtro_avancado.php",
					data: 'acao=delete&modulo='+$modulo+'&name='+$name+'&'+$_SESSION['filtro_avancado['+$modulo+']']+'&lugar='+LUGAR,
					dataType: "json",
					error: function($request, $error){ ajaxErro($request, $error); },
					success: function($json){
						$(e).find_parent('tags', 'li').fadeOut();
						$_SESSION['filtro_avancado['+$modulo+']'] = $json.post;
						views($modulo, 'lista', $gets, $_SESSION['filtro_avancado['+$modulo+']']);
					}
				});
			}
		};
	// FILTROS


	// ACOES
		function datatable_acoes($acao, $modulos, $id, $table, $item){
			// Ids para edicao e exclusao
			if($id != undefined){
				$ids = '-'+$id+'-';
			} else {
				$ids = '-';
				$(".ui-selected td:first-child > div").each(function() {
					$dir = $(this).attr('dir');
					if($dir != undefined)
						$ids += $dir+'-';
				});				
			}

			$table = $table ? $table : '';
			$item = $item ? $item : '';
			$.ajax({
				type: "POST",
				url: DIR+"/admin/app/Ajax/Acoes/acoes.php",
				data: { ids: $ids, modulos: $modulos, acao: $acao, table: $table, item: $item, lugar: LUGAR },
				dataType: "json",
				beforeSend: function(){ ajaxIni(0); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					if($json.evento != null)
						eval($json.evento);
					if($json.erro != null){
						$delay = $json.delay ? $json.delay : '';
						$.each($json.erro, function($key, $val) {
							alerts(0, $val, 1, $delay);
						});	

					} else {
						alerts(1);
						if(!$table){
							$ids = $ids.split("-");
							$.each($ids, function($key, $val) {
								if($val){
									if($acao == 'clonar' || table_datatable_atualizar_quando_fechar($modulos))
										datatable_update();
									else
										datatable_update('row', $val);
								}
							});	
							datatable_mais_acoes_fechar();
						} else if($table == 'mais_fotos'){
							mais_fotos_update($json.table, $item, $modulos, 'mais_fotos');
						}
					}
					$(".carregando").hide();
				}
			});
		};
		function datatable_mais_acoes_abrir(){
			$('.box_table .acoes ul.mais_acoes, .fullcalendar_css .acoes ul.mais_acoes').css('display', 'inline-block');
		}		
		function datatable_mais_acoes_fechar(){
			$('.box_table .acoes ul.mais_acoes, .fullcalendar_css .acoes ul.mais_acoes').hide();
		}		
		function datatable_selecionar_todos(){
			$('.datatable tbody tr').addClass('ui-selected');
			datatable_button_disabled();
			datatable_mais_acoes_fechar();
		};
	// ACOES


	// UPDATE
		function datatable_update($tipo, $id){
			if(datatable_gerenciar()){
				if($('table.datatable_gerenciar').html()){
					$.atualizar_datatable_gerenciar();
				};
			} else {
				if($('table.dataTable').html()){
					if($tipo == 'row'){
						$.atualizar_datatable_row($id);
					} else {
						$.atualizar_datatable();
					}
				};
			}
			$(".box_table .acoes .edit").attr('disabled', true);
			$(".box_table .acoes .delete").attr('disabled', true);
			$(".box_table .acoes .selecionar").attr('disabled', true);
			$(".box_table .acoes .extra").attr('disabled', true);

			setTimeout(function(){  $("[rel=tooltip]").tooltip() }, 500);
			fullcalendar();
		};
		function ajax_reload($oTable, $tipo, $modulo, $id){
			$.ajax({
				type: "POST",
				url: DIR+"/admin/app/Ajax/Datatables/atualizar_session_javascript.php",
				data: {
					financeiro_tipos : $_SESSION['financeiro_tipos'],
					financeiro_conta_atual : $_SESSION['financeiro_conta_atual'],
					financeiro_mes_atual : $_SESSION['financeiro_mes_atual'],
					financeiro_ano_atual : $_SESSION['financeiro_ano_atual'],
				},
				dataType: "json",
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					if($tipo && $modulo && $id){
						ajax_reload_rows1($tipo, $oTable, $modulo, $id);
					} else if($oTable){
						$oTable.ajax.reload(null, false);
					}
				}
			});
		};
		function ajax_reload_rows($tipo, $oTable, $modulo, $id){
			ajax_reload($oTable, $tipo, $modulo, $id);
		}
		function ajax_reload_rows1($tipo, $oTable, $modulo, $id){
			$.ajax({
				type: "POST",
				url: DIR+"/admin/app/Ajax/Datatables/ajax.php?"+$tipo,
				data: { modulo: $modulo, row: $id, lugar: LUGAR },
				dataType: "json",
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					$json = datatable_valores_do_ajax($json);
					if($tipo == 'row'){
						$oTable.row( $('[dir="'+$id+'"]').parent().parent() ).data( $json.data[0] );
					}
				}
			});
		};
	// UPDATE

	// GERENCIAR
		function datatable_gerenciar(){
			$return = 0;
			$("table.datatable_gerenciar").each(function() {
				$return = 1;
			});
			return $return;
		}
	// GERENCIAR

	// ARRAYS DOS VALORES DO AJAX
		function datatable_valores_do_ajax($json){
			$data = $json.data;
			$.each($data, function($key, $val){
				$.each($val, function($key1, $val1){
					$classe = 'td_datatable td_'+$key1;

					$json.data[$key][$key1]  = '<div ';
					$json.data[$key][$key1] += $val1['class']!=null ? ' class="'+$classe+' '+$val1['class']+'" ' : 'class="'+$classe+'" ';
					$json.data[$key][$key1] += $val1['exportar']!=null ? ' exportar="'+$val1['exportar']+'" ' : '';
					$json.data[$key][$key1] += $val1['dir']!=null ? ' dir="'+$val1['dir']+'" ' : '';
					$json.data[$key][$key1] += '> ';
						$json.data[$key][$key1] += $val1['onclick']!=null ? '<a onclick="'+$val1['onclick']+'" class="'+$val1['onclick_class']+'">' : '';
							$json.data[$key][$key1] += $val1['span']!=null ? '<span class="'+$val1['span']+'">' : '';
								//if($json.modulos != '00'){
									$json.data[$key][$key1] += ($val1['dir']!=null && '#'+$val1['dir']!=$val1['value']) ? ' <span class="posa l0 fz10" style="bottom: -4px; color: #999">#'+$val1['dir']+'</span> ' : '';
								//}
								//$json.data[$key][$key1] += $val1['data']!=null ? ' <span class="posa t0 r0 fz10">'+$val1['data']+'</span> ' : '';
								$json.data[$key][$key1] += $val1['value'];
							$json.data[$key][$key1] += $val1['span']!=null ? '</span> ' : '';
						$json.data[$key][$key1] += $val1['onclick']!=null ? '</a> ' : '';
					$json.data[$key][$key1] += '</div> ';
				});
			});
			return $json;
		};
	// ARRAYS DOS VALORES DO AJAX

	// AJAX EXTRAS (FUNCAO CHAMADA NO JS DO DATATABLE)
		function datatable_ajax_extras($json){
			if($json.oTable == '_gravar_datatable'){
				alert('Olhar na funcao datatable_ajax_extras($json) a area comentada');
				/*
				$.ajax({
					type: "POST",
					url: DIR+"/admin/app/Ajax/Datatables/gravar_datatable.php",
					data: { acao: 'gravar', dados: $json.data, table: $json.gravar_dados_table, lugar: LUGAR },
					dataType: "json",
					error: function($request, $error){ ajaxErro($request, $error); },
					success: function($json){
						$(".carregando").hide();
						alerts(1, 'Gravado com Sucesso!');
						$(".events_externos .outros").html('');
					}
				});
				*/

			} else if($json.oTable == '_boxs'){

			} else {
				datatable_button_disabled(0, $json.oTable);
			}
			$_SESSION['datatable_filtro_return'] = $json.filtro_exportar;
			$('.conteudo .resultado_extra').html($json.html);
		};
	// AJAX EXTRAS (FUNCAO CHAMADA NO JS DO DATATABLE)

	// EXPORTAR
		function datatable_exportar_txt(){
			$('#exportarr').attr('action', DIR+'/app/Exportacoes/z_exportar_para_txt.php?f='+$_SESSION['datatable_filtro_return']);
			datatable_exportar_formatando();
			setTimeout(function(){ submitt('#exportarr'); }, 0.5);
		};
		function datatable_exportar_excel(){
			$('#exportarr').attr('action', DIR+'/app/Exportacoes/z_exportar_para_excel.php');
			datatable_exportar_formatando();
			setTimeout(function(){ submitt('#exportarr'); }, 0.5);
		};
		function datatable_exportar_pdf(){
			$('#exportarr').attr('action', DIR+'/app/Exportacoes/z_exportar_para_pdf.php');
			datatable_exportar_formatando();
			setTimeout(function(){ submitt('#exportarr'); }, 0.5);
		};
		function datatable_exportar_all($modulo, $tipo){
			$('#exportarr').attr('action', DIR+'/admin/app/Ajax/Acoes/exportar.php?tipo='+$tipo+'&modulo='+$modulo+'&f='+$_SESSION['datatable_filtro_return']);
			datatable_mais_acoes_fechar();
			setTimeout(function(){ submitt('#exportarr'); }, 0.5);
		};

		function datatable_exportar_formatando(){
			$('#exportarr .exportar_center').val('');
			$("table.datatable tbody tr").each(function() {
				$(this).find('.td_datatable').each(function() {
					$dados = $(this).attr('exportar') != null ? $(this).attr('exportar') : strip_tags($(this).html()).trim();
					$('#exportarr .exportar_center').val( $('#exportarr .exportar_center').val() + $dados + 'z|z' );
				});
				$('#exportarr .exportar_center').val(  $('#exportarr .exportar_center').val() + 'z-z');
			});
			datatable_mais_acoes_fechar();
		}

		/*
		function datatable_exportar_excel(){
			$('#exportarr').attr('action', DIR+'/app/Exportacoes/z_exportar_para_excel.php');
			datatable_exportar_formatando();
			setTimeout(function(){ submitt('#exportarr'); }, 0.5);
		};
		function datatable_exportar_excel_all($modulo){
			$.ajax({
				type: "POST",
				url: DIR+"/admin/app/Ajax/Acoes/exportar.php",
				data: { modulo: $modulo },
				dataType: "json",
				beforeSend: function(){ ajaxIni(0); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					$(".carregando").hide();
					$('#exportarr').attr('action', DIR+'/app/Exportacoes/z_exportar_para_excel.php');
					datatable_exportar_formatando_all($json);
					setTimeout(function(){ submitt('#exportarr'); $(".carregando").hide(); }, 0.5);
				}
			});
		};
		function datatable_exportar_pdf(){
			$('#exportarr').attr('action', DIR+'/app/Exportacoes/z_exportar_para_pdf.php');
			datatable_exportar_formatando()
			setTimeout(function(){ submitt('#exportarr'); }, 0.5);
		};
		function datatable_exportar_pdf_all($modulo){
			$.ajax({
				type: "POST",
				url: DIR+"/admin/app/Ajax/Acoes/exportar.php",
				data: { modulo: $modulo },
				dataType: "json",
				beforeSend: function(){ ajaxIni(0); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					$('#exportarr').attr('action', DIR+'/app/Exportacoes/z_exportar_para_pdf.php');
					datatable_exportar_formatando_all($json);
					setTimeout(function(){ submitt('#exportarr'); $(".carregando").hide(); }, 0.5);
				}
			});
		};

		function datatable_exportar_formatando(){
			$('#exportarr .exportar_top').val('');
			$("table.datatable thead tr").each(function() {
				$(this).find('th b').each(function() {
					$dados = $(this).attr('exportar') != null ? $(this).attr('exportar') : strip_tags($(this).html()).trim();
					$('#exportarr .exportar_top').val( $('#exportarr .exportar_top').val() + $dados + 'z|z' );
				});
				$('#exportarr .exportar_top').val(  $('#exportarr .exportar_top').val() + 'z-z');
			});
			$('#exportarr .exportar_center').val('');
			$("table.datatable tbody tr").each(function() {
				$(this).find('.td_datatable').each(function() {
					$dados = $(this).attr('exportar') != null ? $(this).attr('exportar') : strip_tags($(this).html()).trim();
					$('#exportarr .exportar_center').val( $('#exportarr .exportar_center').val() + $dados + 'z|z' );
				});
				$('#exportarr .exportar_center').val(  $('#exportarr .exportar_center').val() + 'z-z');
			});
			datatable_mais_acoes_fechar();
		}*/
	// EXPORTAR

	// ORDENAR
		function datatable_ordenar($modulos, e){
			$.ajax({
				type: "POST",
				url: DIR+"/admin/app/Ajax/Acoes/ordenar.php?modulos="+$modulos,
				data: $(e).serialize(),
				dataType: "json",
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					if($json.evento!= null)
						eval($json.evento);
					if($json.erro != null){
						$delay = $json.delay ? $json.delay : '';
						$.each($json.erro, function($key, $val) {
							alerts(0, $val, 1, $delay);
						});	

					} else {
						$(".carregando").hide();
						alerts(1);
						datatable_update();
					}
					$(".carregando").hide();
				}
			});
		};
	// ORDENAR

	// DISABILITAR BOTOES DA ACAO (NOVO, EDIT, ETC...) SE PRECISAR
	function datatable_button_disabled($n_datatable, $oTable){
		if(!$oTable){
			fechar_all();
		}
		//$n = $(".dataTable tbody tr.ui-selected").length;
		if($n_datatable == undefined){
			$n_datatable = $(".dataTable tbody tr.ui-selected td").length;
		}
		if($n_datatable >= 1){
			$(".box_table .acoes .edit").removeAttr('disabled');
			$(".box_table .acoes .delete").removeAttr('disabled');
			$(".box_table .acoes .selecionar").removeAttr('disabled');
			$(".box_table .acoes .extra").removeAttr('disabled');
		} else{
			$(".box_table .acoes .edit").attr('disabled', true);
			$(".box_table .acoes .delete").attr('disabled', true);
			$(".box_table .acoes .selecionar").attr('disabled', true);
			$(".box_table .acoes .extra").attr('disabled', true);
		}
	};
	// DISABILITAR BOTOES DA ACAO (NOVO, EDIT, ETC...) SE PRECISAR

	// MUDAR POSICAO DA ACAO (NOVO, EDIT, ETC...)
		function datatable_acao_pos($gerenciar){
			setTimeout(function(){
				$gerenciar = $gerenciar ? '_gerenciar' : '';
				$html = $('.box_table'+$gerenciar+' .acoes').html();
	        	$('.box_table'+$gerenciar+' .dataTables_filter').after(' <div class="clear"></div> <div class="acoes acoes_visivel'+$gerenciar+'_ acoes_visivel'+$gerenciar+'_'+$(".acoes_visivel"+$gerenciar+"_").length+'"> '+$html+' </div> ');
	        	$('.box_table'+$gerenciar+' .acoes_temp').remove();
	        	$('.box_table'+$gerenciar+' table.dataTable').wrap('<div class="table_mobile"></div>');
	        	fundoo_fechar();
	    	}, 0.5);
		}
	// MUDAR POSICAO DA ACAO (NOVO, EDIT, ETC...)

	// DATATABLE COLUNAS (BOXXS)
		function datatable_colunas_gravar($modulos){
			$('.carregando').show();
			$cols = "modulos="+$modulos;
			$x=0;
			$('ul.boxxs .colunas ul[boxxs="1"] li').each(function() {
				if($(this).attr('dir')){ $x++
					$cols += '&cols[]='+$(this).attr('dir');
				}
			});
			$.ajax({
				type: "POST",
				url: DIR+"/admin/app/Ajax/Boxxs/datatable_colunas_gravar.php",
				data: $cols+'&lugar='+LUGAR,
				dataType: "json",
				success: function($json){
					if($json.id){
						alerts(1);
					}
					$('.carregando').hide();
				}
			});
		};
		function datatable_colunas_delete($modulos){
			$('.carregando').show();
			$.ajax({
				type: "POST",
				url: DIR+"/admin/app/Ajax/Boxxs/datatable_colunas_delete.php",
				data: { modulos: $modulos, lugar: LUGAR },
				dataType: "json",
				success: function($json){
					if($json.id){
						alerts(1);
					}
					$('.carregando').hide();
					datatable_update();
				}
			});
		};
	// DATATABLE COLUNAS (BOXXS)

	// DATATABLE BOXS (DATATABLE EXTRA)
		function datatable_acoes_boxs($acao, $modulos, $rand, $id){
			$.ajax({
				type: "POST",
				url: DIR+"/admin/app/Ajax/Acoes/acoes.php",
				data: 'acao='+$acao+'&modulos='+$modulos+'&id='+$id+'&lugar='+LUGAR,
				dataType: "json",
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					if($json.evento != null)
						eval($json.evento);
					if($json.erro != null){
						$delay = $json.delay ? $json.delay : '';
						$.each($json.erro, function($key, $val) {
							alerts(0, $val, 1, $delay);
						});	
					} else {
						alerts(1);
						$(".carregando").hide();
						datatable_boxs_atualuzar_selects($json.table, $rand);
					}
				}
			});
		}
		function datatable_ordenar_boxs(e){
			$modulos = $(e).attr('modulos');
			$rand = $(e).attr('rand').replace('ordemm_', '');
			$.ajax({
				type: "POST",
				url: DIR+"/admin/app/Ajax/Acoes/ordenar.php?modulos="+$modulos+"&rand="+$rand+'&lugar='+LUGAR,
				data: $('.boxs_'+$rand+' input.datatable_ordem').serialize(),
				dataType: "json",
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					alerts(1);
					datatable_boxs_update();
				}
			});
		}
		function datatable_boxs_atualuzar_selects($table, $rand){
			$('.gravar_item_0').hide();
			$('.boxs .form_0_'+$rand+' input[type=reset]').trigger('click');
			$('.boxs .form_0_'+$rand+' select').trigger('change');
			$('.gravar_item_1').hide();
			$('.boxs .form_1_'+$rand+' input[type=reset]').trigger('click');
			$('.boxs .form_1_'+$rand+' select').trigger('change');
			$('.boxs .form_0_'+$rand+' [name=subcategorias]').load(DIR+"/admin/app/Ajax/Boxs_acoes/edit_categorias.php?acao=novo&table="+$table+"&niveis="+$('.boxs .form_1_'+$rand+' .niveis_edit').html());
			datatable_boxs_update();
			pop_mostrar_categoria($table, $rand, 0);
		}

		function datatable_campos_boxs($modulos, $rand, $id){
			$.ajax({
				type: "POST",
				url: DIR+"/admin/app/Ajax/Acoes/campos_boxs.php",
				data: 'modulos='+$modulos+'&id='+$id+'&rand='+$rand+'&lugar='+LUGAR,
				dataType: "json",
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					if($json.evento != null)
						eval($json.evento);
					if($json.erro != null){
						$delay = $json.delay ? $json.delay : '';
						$.each($json.erro, function($key, $val) {
							alerts(0, $val, 1, $delay);
						});	
					} else {
						alerts(1);
						$('.datatable_campos_boxs').html($json.html);
						$('.datatable_campos_boxs form input[name=nome]').focus();
						$('.boxs .datatable_campos_boxs').draggable();
						mascaras();
						//criar_css();
						$('select.design').select2();
						$('[rel="tooltip"]').tooltip();
					}
				}
			});
		}
		function datatable_boxs_update(){
			$.atualizar_datatable_boxs();
		};
		function datatable_campos_boxs_fechar(){
			$('.datatable_campos_boxs').html('');
		}
		function datatable_campos_boxs_selecionar_select2($rand, e){
			$val = $(e).parent().parent().find('.td_datatable.td_0').attr('dir');
			$('select[rand='+$rand+']').val($val).trigger('change');
		}

		function datatable_acoes_botao_extra($link){
			$ids = '-';
			$(".ui-selected td:first-child > div").each(function() {
				$dir = $(this).attr('dir');
				if($dir != undefined)
					$ids += $dir+'-';
			});
			window.open($link+'?ids='+$ids, '_blank');
		}
	// DATATABLE BOXS (DATATABLE EXTRA)
	function dialog_mini($id){
		$('footer .abas li.aba_'+$id).addClass('mini');
		x = 0;
		$("ul.abas li").each(function(){
			if( !($(this).hasClass('ativo') || $(this).hasClass('mini')) && x==0 ){
				$(this).trigger('click');
			}
		});
		$(".ui-dialog.pg_"+$id+" #dialog").dialog("close");
		$('footer .abas li.aba_'+$id).removeClass('ativo');
	};
	function dialog_max($id){
		if($(".ui-dialog.pg_"+$id).hasClass("max") == true){
			$(".ui-dialog.pg_"+$id).removeClass('max');
		} else {
			$(".ui-dialog.pg_"+$id).addClass('max');
		}
	};
	function dialog_fechar($id, $ids){
		pop_fechar();
		$(".ui-dialog.pg_"+$id+" #dialog").dialog("destroy");
		$('footer .abas li.aba_'+$id).remove();
		//pop_fechar();
		if(table_datatable_atualizar_quando_fechar($id)){
			datatable_update();
		} else {
			datatable_update('row', $ids);
		}
	};
	function dialog_abrir($id){
		$('footer .abas li.aba_'+$id).removeClass('mini');
		$(".ui-dialog.pg_"+$id+" #dialog").dialog("open");
	};
	function dialog_click($id){
		$(".ui-dialog.pg_"+$id+" #dialog").on("dialogfocus", function( event, ui ){
			$('footer .abas li').removeClass('ativo')
			$('footer .abas li.aba_'+$id).addClass('ativo')			
		});
	};
	function dialog_click_aba($id){
		$('footer .abas li').removeClass('ativo')
		$('footer .abas li.aba_'+$id).addClass('ativo')
		dialog_abrir($id);
	};
	function dialog_button_form(e, $tipo){
		if($tipo){
			$(e).parent().parent().find('.tabs form input[name=acao_button]').val($tipo);
			$(e).parent().parent().find('.tabs form input[type=submit]').trigger('click');
		}
	};

	function select2_val(ev){
		if(!ev){
			var $val = "";
		} else {
			var $val = JSON.stringify(ev.params, function (key, value) {
				return value.data.id;
			});
		}
		return $val.replaceAll('"', '');
	}
	function select2_select($e, ev){
		//$val = select2_val(ev);
	}


	function gerenciar_novo_item($name, $modulo){
		$classe = '.popover .popover-content .gravar_categoria';
		$rand = 'gerenciar_'+parseInt(Math.random()*10000000);
		$('select#'+$name).attr('gerenciar_rand', $rand);

		$('select#'+$name).popover({
		    html: true,
			container: 'body',
		    placement: 'top',
		    title: 'Cadastrar Novo Item:',
		    content: function() {
				$return  = '<p style="margin:0 0 5px;">Digite abaixo o nome do item que você deseja cadastrar:</p> ';
				$return  = '<form class="form_'+$rand+'" action="" method="post" enctype="multipart/form-data"> ';
					$return += '<input type="text" name="nome" class="w100p mt3 design" placeholder="Digite aqui o nome..." autocomplete="off" required> ';
					$return += '<div class="pt10 tac"> ';
					$return += '	<button class="gravar_categoria dibi h-a pt5 pb5 mr5 botao"><i class="mr5 faa-check c_verde"></i> Salvar</button> ';
					$return += '	<button type="button" onclick="pop_fechar('+A+$rand+A+')"; class="dibi h-a pt5 pb5 ml5 botao"><i class="mr5 faa-times c_vermelho"></i> Cancelar</button> ';
					$return += '</div> ';
					$return += '<input type="hidden" name="acao_button" value="gerenciar">';
				$return += '</form> ';
				$return += '<script> gravar_item('+$modulo+', 0, "form.form_'+$rand+'") </script> ';
		        return $return;
		    }
		}).trigger('click');
		setTimeout(function(){ $('.popover .popover-content input[name=nome]').focus() }, 100);
	}


	function gerenciar_itens($name, $modulo){
			$val = $('select#'+$name).val();
			$rand = parseInt(Math.random()*10000000);
			$('select#'+$name).attr('gerenciar_rand', 'gerenciar_'+$rand);
			$('.events_externos .boxs').html('<div class="box_table gerenciar gerenciar_'+$rand+' dn posfi t1p l1p w98p br2" style="height: 98%;"> <a onclick="gerneciar_fechar('+A+'gerenciar_'+$rand+A+', '+A+$val+A+')" class="fechar t3 z1"><i class="faa-times"></i></a> <div class="contextoo p0"> <h3> Gerenciar Itens </h3> <div class="contextooo p20"></div> </div> <div class="clear"></div> </div>');
			$('.events_externos .boxs > .gerenciar_'+$rand).stop(true, true).slideDown();
			setTimeout(function(){ views($modulo, 0, 'gerenciar=1&rand='+$rand); }, .5);
	}


	function gerenciar_fechar_selecionado($rand){
		$ids = '-';
		$('.datatable_gerenciar .ui-selected td:first-child > div').each(function() {
			$dir = $(this).attr('dir');
			if($dir != undefined){
				$ids += $dir+'-';
			}
		});
		gerneciar_fechar($rand, $ids);
	}


	function gerneciar_fechar($rand, $value, $so_fechar){
		$('.events_externos > .boxs > .gerenciar').slideUp();
		$('.ui-dialog.gerenciar.z9').remove();
		setTimeout(function(){ $('.events_externos > .boxs > .gerenciar').remove(); }, 500);

		$('.popover').popover('destroy');

		if($rand && !$so_fechar){
			select_relacao($('select[gerenciar_rand="'+$rand+'"]'), 1, $value);
		}
	}

	function pop_fechar($rand, $value){
		//gerneciar_fechar($rand, $value, 1);
		$('.popover').popover('destroy');
	}

	// Fieldset button (Inserir box (campos) de Enderecos, Contatos, etc...)
	function fieldset_ini(e, $table, $id){
		$tipo = $(e).attr('name');
		$extra = $(e).parent().find('.extra');
		$extra.load(DIR+"/admin/app/Ajax/Boxx/"+$tipo.replace("inserir_box_", "")+".php?tipo="+$tipo+"&table="+$table+"&id="+$id);
		fieldset_scripts($tipo);
	}
	function fieldset(e){
		$tipo = $(e).attr('name');
		$extra = $(e).parent().find('.extra');
		$rand = 'boxx_'+parseInt(Math.random()*10000000);
		$extra.append( $('<div class="boxx '+$rand+'">').load(DIR+"/admin/app/Ajax/Boxx/"+$tipo.replace("inserir_box_", "")+".php?novo=1&tipo="+$tipo) );
		required_invalid('.'+$rand, 1000);
		fieldset_scripts($tipo);
		fieldset_principal_posicao($extra);
	}
	function fieldset_fechar(e){
		$item = $(e).find_parent('class', 'boxx');
		$extra = $(e).find_parent('class', 'extra');
		if($item.hasClass("boxx_pinc") == false)
			$item.remove();
		fieldset_principal_posicao($extra);

		$checked = 0;
		if($extra.find('.topo input:radio').is(':checked')){
			$checked = 1;
		}
		if(!$checked)
			$extra.find('.boxx_pinc .topo input:radio').trigger('click');
	};
	function fieldset_principal_posicao($extra){
		setTimeout(function(){
			$x = 0;
			$($extra).find(".boxx").each(function() {
				$(this).find('input, select, textarea').attr('dir', $x);
				//$(this).find('.topo input:radio').val($x);
				$x++;
			});
		}, 500);
	};
	function fieldset_scripts($tipo){
		setTimeout(function(){
			mascaras();
			$(".fbutton .extra."+$tipo+" .boxx select.designx").select2();
		}, 500);
	};
	// Abas
	function menu_admin_abas($acao, e){
		if($acao=='novo'){
			$n=0;
			$(e).parent().parent().parent().find('> li').each(function(e) {
				if($n <= parseInt($(this).attr('dir')))
					$n = parseInt($(this).attr('dir'));
			});
			$n++;
			$html = $('.abas_novo').html();
			$html = $html.replaceAll("-key-", $n);
			$(e).parent().parent().parent().append($html);
			$html = $('.colunas_campos_novo').html();
			$html = $html.replaceAll("-key-", $n);
			$(e).parent().parent().parent().parent().find('.campos_menu_admin').append($html);
			$(e).parent().parent().parent().parent().find('li[tabs="tabs_abas_'+$n+'"] ul.itens').html('<li dir="txt" class="menu_admin_campos_0_txt ui-sortable-handle">     <em class="ml5 mr10"></em>     <a onclick="menu_admin_outros_campos(this)" class="seta dni"> <i class="faa-chevron-down"></i> <i class="db mt-9 faa-chevron-down"></i> </a>      <div class="w15 fll finput finput_check">    <div class="input dbi mt7">    <input name="campos['+$n+'][txt][check]" id="campos_ckeck_0_TXT" type="checkbox" value="1" class="design" checked="">    </div>     </div>     <div class="dib fll pt6">    <label class="w40 db pl5 limit" for="campos_ckeck_0_TXT"> (TXT) </label>     </div>     <div class="w85 fll finput finput_temp">    <div class="input">    <div class="posr"><select name="campos['+$n+'][txt][tipo]" class="design menu_admin_select_tipo_0_txt select2-hidden-accessible" tabindex="-1" aria-hidden="true">   <option value="text">Text</option>   <option value="categorias">Categorias</option>   <option value="subcategorias">Subcategorias</option>   <option value="preco">Preço</option>   <option value="estados">Estados</option>   <option value="cidades">Cidades</option>   <option value="bairros">Bairros*</option>   <option value="password">Password</option>   <option value="email">Email</option>   <option value="date">Data</option>   <option value="datetime-local">Data e Hora</option>   <option value="color">Color</option>   <option value="number">Número</option>   <option value="range">Range</option>   <option value="url">Url</option>   <option value="tel">Telefone</option>   <option value="file">File</option>   <option value="checkbox">Checkbox</option>   <option value="radio">Radio</option>   <option value="select">Select</option>   <option value="textarea" selected="">Textarea</option>   <option value="button">Button</option>   <option value="editor">Editor</option>   <option value="file_editor">File Editor</option>   <option value="hidden">Hidden</option>   <option value="info">Info</option>   <option value="boxx">Boxx</option>    </select><div class="select2 select2-container p0 select2_inicial select2-container--default" dir="ltr" style="width: 100px;"><div class="selection"><div class="select2-selection select2-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-campos['+$n+'][txt][tipo]-vh-container"><div class="select2-selection__rendered" id="select2-campos['+$n+'][txt][tipo]-vh-container" title="Textarea">Textarea</div><div class="select2-selection__arrow" role="presentation"><b role="presentation"></b></div></div></div><div class="dropdown-wrapper" aria-hidden="true"></div></div></div>    <script>   $(document).ready(function(){     $(".menu_admin_select_tipo_0_txt").on("select2:select", function (e) {     menu_admin_select_temp("0_txt", e);     });   });    </script>    </div>     </div>     <div class="w95 fll ml7 finput finput_fields">    <div class="input">    <div class="input"> <input name="campos['+$n+'][txt][fields]" type="text" class="design" placeholder="Fields" value="1"> </div>    </div>     </div>     <div class="w80 fll ml7 finput finput_resp">    <div class="input">    <div class="posr"><select name="campos['+$n+'][txt][resp]" class="design select2-hidden-accessible" tabindex="-1" aria-hidden="true">   <option value="wr1">WR1</option>   <option value="wr15">WR1,5</option>   <option value="wr2">WR2</option>   <option value="wr25">WR2,5</option>   <option value="wr3">WR3</option>   <option value="wr35">WR3,5</option>   <option value="wr4">WR4</option>   <option value="wr45">WR4,5</option>   <option value="wr5">WR5</option>   <option value="wr55">WR5,5</option>   <option value="wr6">WR6</option>   <option value="wr65">WR6,5</option>   <option value="wr7">WR7</option>   <option value="wr75">WR7,5</option>   <option value="wr8">WR8</option>   <option value="wr85">WR8,5</option>   <option value="wr9">WR9</option>   <option value="wr95">WR9,5</option>   <option value="wr10">WR10</option>   <option value="wr105">WR10,5</option>   <option value="wr11">WR11</option>   <option value="wr115">WR11,5</option>   <option value="wr12" selected="">WR12</option>    </select><div class="select2 select2-container p0 select2_inicial select2-container--default" dir="ltr" style="width: 100px;"><div class="selection"><div class="select2-selection select2-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-campos['+$n+'][txt][resp]-u7-container"><div class="select2-selection__rendered" id="select2-campos['+$n+'][txt][resp]-u7-container" title="WR12">WR12</div><div class="select2-selection__arrow" role="presentation"><b role="presentation"></b></div></div></div><div class="dropdown-wrapper" aria-hidden="true"></div></div></div>    </div>     </div>     <div class="calc375 ml370">    <div class="wf15 finput finput_nome" title="Nome">    <label class="p0">&nbsp;</label>    <div class="input"> <input name="campos['+$n+'][txt][nome]" type="text" class="design" value="Descrição curta"> </div>    </div>    <div class="wf15 pl10 fll finput finput_input_nome" title="Name">    <label class="p0">&nbsp;</label>    <div class="input"> <input name="campos['+$n+'][txt][input][nome]" type="text" class="design" value="txt"> </div>    </div>    <div class="wf25 pl10 fll finput finput_input_tags" title="Tags">    <label class="p0">&nbsp;</label>    <div class="input"> <input name="campos['+$n+'][txt][input][tags]" type="text" class="design autocomplete" value=""> </div>    </div>    <div class="wf25 pl10 fll finput finput_input_opcoes" title="opçoes ou Onclick para Button">    <label class="p0">&nbsp;</label>    <div class="input"> <input name="campos['+$n+'][txt][input][opcoes]" type="text" class="design" value="0"> </div>    </div>    <div class="wf25 pl10 fll finput finput_input_extra" title="Extra">    <label class="p0">&nbsp;</label>    <div class="input"> <input name="campos['+$n+'][txt][input][extra]" type="text" class="design" placeholder="Extra" value=""> </div>    </div>    <div class="wf15 pl10 fll finput finput_input_gerenciar" title="Gerenciar"> 	   <div class="input"> 	   <div class="posr"><select name="campos['+$n+'][txt][gerenciar]" class="design select2-hidden-accessible" tabindex="-1" aria-hidden="true"> 	  <option value="0"> - - - </option> 	  <option value="1">Novo</option> 	  <option value="2">Gerenciar</option> 	  <option value="3">Novo e Gerenciar</option> 	   </select><div class="select2 select2-container p0 select2_inicial select2-container--default" dir="ltr" style="width: 100px;"><div class="selection"><div class="select2-selection select2-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-campos['+$n+'][txt][gerenciar]-qe-container"><div class="select2-selection__rendered" id="select2-campos['+$n+'][txt][gerenciar]-qe-container" title=" - - - "> - - - </div><div class="select2-selection__arrow" role="presentation"><b role="presentation"></b></div></div></div><div class="dropdown-wrapper" aria-hidden="true"></div></div></div> 	   </div>    </div>    <div class="clear"></div>     </div>      <div class="dn outros_campos">    <a onclick="menu_admin_deletar_campos(this)" class="seta mt37 fz14 c_vermelho"> <i class="faa-times"></i> </a>    <div class="h10 clear"></div>    <div>    	<!-- Campos dn -->    </div>    <div class="clear"></div>     </div>      <div class="clear"></div>   </li>');

		} else if($acao=='check' || $acao=='disable'){
			$(e).find('i').toggle();
			$status = $(e).find('i.ativo').css('display');
			$status = $status=='none' ? 0 : 1;
			$(e).parent().find('.menu_admin_abas_nome .'+$acao).val($status);

		} else if($acao=='edit'){
			if($(e).parent().find('.menu_admin_abas_nome').is(":visible")){
				$(e).parent().find('.menu_admin_abas_nome').stop(true, true).fadeOut();
			} else {
				$(e).parent().find('.menu_admin_abas_nome').stop(true, true).fadeIn();
			}

		} else if($acao=='delete'){
			$(e).parent().parent().remove();
		}
	};
	function menu_admin_abas_nome(e, ev){
		if(ev.keyCode == 13)
			$(e).parent().stop(true, true).fadeOut();
		$(e).parent().parent().parent().find('.abas_nome').$html( $(e).val() );

	};


	// Colunas e Campos
	function menu_admin_mais_menos($acao, e){
		if($acao==1){
			$n=0;
			$(e).parent().parent().find('> ul > li').each(function(e) {
				if($n <= parseInt($(this).attr('dir')))
					$n = parseInt($(this).attr('dir'));
			});
			$n++;
			tipo = $(e).parent().parent().parent().attr('tipo');
			$html = $('.'+tipo+'_novo').html();
			if(tipo=='camposs'){
				kabas = $(e).parent().parent().parent().attr('dir');
				$html = $html.replaceAll("-kabas-", kabas);
			}
			$html = $html.replaceAll("-key-", $n);
			$html = $html.replaceAll("z-design-z", "design");
			$(e).parent().parent().find('> ul > li[dir=txt]').before($html);
			setTimeout(function(){ $('ul.menu_admin li.menu_admin_campos_'+kabas+'_'+$n+' select.design').select2() }, 100);
		} else if($acao==0){
			$(e).parent().parent().find('> ul > li[dir=txt]').prev().remove();
		}
	};


	// Outros Campos
	function menu_admin_outros_campos(e){
		if($(e).parent().find('> .outros_campos').is(":visible")){
			$(e).parent().find('> .outros_campos').hide();
			$(e).find('> i').removeClass('fa-chevron-up');
			$(e).find('> i').addClass('fa-chevron-down');
		} else {
			$('.menu_admin  .outros_campos').hide();
			$(e).parent().find('> .outros_campos').show();
			$(e).find('> i').removeClass('fa-chevron-down');
			$(e).find('> i').addClass('fa-chevron-up');
		}
	}
	function menu_admin_deletar_campos(e){
		var $apagar = confirm('Deseja excluir este item?');
		if($apagar)
			$(e).parent().parent().remove();
	}

	// menu_admin_select_temp
	function menu_admin_select_temp($key, ev){
		$val = select2_val(ev);

		$('.menu_admin_campos_'+$key+' .finput_check input').prop("checked", true);
		if($val == 'categorias'){
			$('.menu_admin_campos_'+$key+' .finput_nome input').val('Categorias');
			$('.menu_admin_campos_'+$key+' .finput_input_nome input').val('categorias');
			$('.menu_admin_campos_'+$key+' .finput_input_opcoes input').val('(categorias)');

		} else if($val == 'subcategorias'){
			$('.menu_admin_campos_'+$key+' .finput_nome input').val('Categorias');
			$('.menu_admin_campos_'+$key+' .finput_input_nome input').val('subcategorias');
			$('.menu_admin_campos_'+$key+' .finput_input_opcoes input').val('(subcategorias)');

		} else if($val == 'preco'){
			$('.menu_admin_campos_'+$key+' .finput_nome input').val('Preço');
			$('.menu_admin_campos_'+$key+' .finput_input_nome input').val('preco');
			$('.menu_admin_campos_'+$key+' .finput_input_tags input').val('class="preco"');

		} else if($val == 'estados'){
			$('.menu_admin_campos_'+$key+' .finput_nome input').val('Estados');
			$('.menu_admin_campos_'+$key+' .finput_input_nome input').val('estados');
			$('.menu_admin_campos_'+$key+' .finput_input_tags input').val('rel_estados="cidades"');
			$('.menu_admin_campos_'+$key+' .finput_input_opcoes input').val('(estados)');

		} else if($val == 'cidades'){
			$('.menu_admin_campos_'+$key+' .finput_nome input').val('Cidades');
			$('.menu_admin_campos_'+$key+' .finput_input_nome input').val('cidades');
			$('.menu_admin_campos_'+$key+' .finput_input_tags input').val('');
			$('.menu_admin_campos_'+$key+' .finput_input_opcoes input').val('(cidades)');

		} else if($val == 'mais_campos'){
			$('.menu_admin_campos_'+$key+' .finput_nome input').val('');
			$('.menu_admin_campos_'+$key+' .finput_input_nome input').val('');
			$('.menu_admin_campos_'+$key+' .finput_input_tags input').val('<a onclick="mais_campos(this, '+A+A+')" class="c_azul link">Adicionar mais</a>');
			$('.menu_admin_campos_'+$key+' .finput_input_opcoes input').val('');
		}

	}

	function boxx_novo($e){	
		$html = $($e).parent().find('.boox_zerado').html();
		$html = $html.replaceAll("design_boxx", "design");
		$($e).parent().find('.boox_zerado').before($html);
		mascaras();
		$('select.design').select2();
	}
	function boxx_remove($e){
		$($e).parent().remove();
	}

	// Boxxs Acoes
	function booxs_mudar_status(e){
		$('.carregando').show();
		$.ajax({
			type: "POST",
			url: DIR+"/admin/app/Ajax/Boxxs/mudar_status.php",
			data: 'id='+$(e).attr('dir')+'&table='+$(e).parent().attr('table')+'&boxxs='+$(e).parent().attr('boxxs'),
			dataType: "json",
			success: function(json){
				if(json.id){
					alerts(1);
				}
				$('.carregando').hide();
			}
		});
	};