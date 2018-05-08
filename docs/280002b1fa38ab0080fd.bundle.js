!function(e){function t(t){for(var r,a,o=t[0],i=t[1],l=t[2],u=0,d=[];u<o.length;u++)a=o[u],P[a]&&d.push(P[a][0]),P[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(T&&T(t);d.length;)d.shift()();return M.push.apply(M,l||[]),n()}function n(){for(var e,t=0;t<M.length;t++){for(var n=M[t],r=!0,a=1;a<n.length;a++){var o=n[a];0!==P[o]&&(r=!1)}r&&(M.splice(t--,1),e=C(C.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!E[e]||!x[e])return;for(var n in x[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--g&&0===b&&j()}(e,t),r&&r(e,t)};var a,o=!0,i="280002b1fa38ab0080fd",l=1e4,u={},d=[],c=[];var s=[],f="idle";function p(e){f=e;for(var t=0;t<s.length;t++)s[t].call(null,e)}var m,h,v,g=0,b=0,y={},x={},E={};function w(e){return+e+""===e?+e:e}function O(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return o=e,p("check"),(t=l,t=t||1e4,new Promise(function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,a=C.p+""+i+".hot-update.json";r.open("GET",a,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+a+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+a+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}})).then(function(e){if(!e)return p("idle"),null;x={},y={},E=e.c,v=e.h,p("prepare");var t=new Promise(function(e,t){m={resolve:e,reject:t}});for(var n in h={},P)_(n);return"prepare"===f&&0===b&&0===g&&j(),t});var t}function _(e){E[e]?(x[e]=!0,g++,function(e){var t=document.getElementsByTagName("head")[0],n=document.createElement("script");n.charset="utf-8",n.src=C.p+""+e+"."+i+".hot-update.js",t.appendChild(n)}(e)):y[e]=!0}function j(){p("ready");var e=m;if(m=null,e)if(o)Promise.resolve().then(function(){return D(o)}).then(function(t){e.resolve(t)},function(t){e.reject(t)});else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(w(n));e.resolve(t)}}function D(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,a,o,l;function c(e){for(var t=[e],n={},r=t.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var a=r.pop(),i=a.id,l=a.chain;if((o=S[i])&&!o.hot._selfAccepted){if(o.hot._selfDeclined)return{type:"self-declined",chain:l,moduleId:i};if(o.hot._main)return{type:"unaccepted",chain:l,moduleId:i};for(var u=0;u<o.parents.length;u++){var d=o.parents[u],c=S[d];if(c){if(c.hot._declinedDependencies[i])return{type:"declined",chain:l.concat([d]),moduleId:i,parentId:d};-1===t.indexOf(d)&&(c.hot._acceptedDependencies[i]?(n[d]||(n[d]=[]),s(n[d],[i])):(delete n[d],t.push(d),r.push({chain:l.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var m={},g=[],b={},y=function(){console.warn("[HMR] unexpected require("+O.moduleId+") to disposed module")};for(var x in h)if(Object.prototype.hasOwnProperty.call(h,x)){var O;l=w(x);var _=!1,j=!1,D=!1,M="";switch((O=h[x]?c(l):{type:"disposed",moduleId:x}).chain&&(M="\nUpdate propagation: "+O.chain.join(" -> ")),O.type){case"self-declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(_=new Error("Aborted because of self decline: "+O.moduleId+M));break;case"declined":t.onDeclined&&t.onDeclined(O),t.ignoreDeclined||(_=new Error("Aborted because of declined dependency: "+O.moduleId+" in "+O.parentId+M));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(O),t.ignoreUnaccepted||(_=new Error("Aborted because "+l+" is not accepted"+M));break;case"accepted":t.onAccepted&&t.onAccepted(O),j=!0;break;case"disposed":t.onDisposed&&t.onDisposed(O),D=!0;break;default:throw new Error("Unexception type "+O.type)}if(_)return p("abort"),Promise.reject(_);if(j)for(l in b[l]=h[l],s(g,O.outdatedModules),O.outdatedDependencies)Object.prototype.hasOwnProperty.call(O.outdatedDependencies,l)&&(m[l]||(m[l]=[]),s(m[l],O.outdatedDependencies[l]));D&&(s(g,[O.moduleId]),b[l]=y)}var R,q=[];for(r=0;r<g.length;r++)l=g[r],S[l]&&S[l].hot._selfAccepted&&q.push({module:l,errorHandler:S[l].hot._selfAccepted});p("dispose"),Object.keys(E).forEach(function(e){!1===E[e]&&function(e){delete P[e]}(e)});for(var k,T,H=g.slice();H.length>0;)if(l=H.pop(),o=S[l]){var A={},I=o.hot._disposeHandlers;for(a=0;a<I.length;a++)(n=I[a])(A);for(u[l]=A,o.hot.active=!1,delete S[l],delete m[l],a=0;a<o.children.length;a++){var L=S[o.children[a]];L&&((R=L.parents.indexOf(l))>=0&&L.parents.splice(R,1))}}for(l in m)if(Object.prototype.hasOwnProperty.call(m,l)&&(o=S[l]))for(T=m[l],a=0;a<T.length;a++)k=T[a],(R=o.children.indexOf(k))>=0&&o.children.splice(R,1);for(l in p("apply"),i=v,b)Object.prototype.hasOwnProperty.call(b,l)&&(e[l]=b[l]);var N=null;for(l in m)if(Object.prototype.hasOwnProperty.call(m,l)&&(o=S[l])){T=m[l];var F=[];for(r=0;r<T.length;r++)if(k=T[r],n=o.hot._acceptedDependencies[k]){if(-1!==F.indexOf(n))continue;F.push(n)}for(r=0;r<F.length;r++){n=F[r];try{n(T)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:l,dependencyId:T[r],error:e}),t.ignoreErrored||N||(N=e)}}}for(r=0;r<q.length;r++){var U=q[r];l=U.module,d=[l];try{C(l)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:l,error:n,originalError:e}),t.ignoreErrored||N||(N=n),N||(N=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:l,error:e}),t.ignoreErrored||N||(N=e)}}return N?(p("fail"),Promise.reject(N)):(p("idle"),new Promise(function(e){e(g)}))}var S={},P={1:0},M=[];function C(t){if(S[t])return S[t].exports;var n=S[t]={i:t,l:!1,exports:{},hot:function(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:a!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:O,apply:D,status:function(e){if(!e)return f;s.push(e)},addStatusHandler:function(e){s.push(e)},removeStatusHandler:function(e){var t=s.indexOf(e);t>=0&&s.splice(t,1)},data:u[e]};return a=void 0,t}(t),parents:(c=d,d=[],c),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=S[e];if(!t)return C;var n=function(n){return t.hot.active?(S[n]?-1===S[n].parents.indexOf(e)&&S[n].parents.push(e):(d=[e],a=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),d=[]),C(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return C[e]},set:function(t){C[e]=t}}};for(var o in C)Object.prototype.hasOwnProperty.call(C,o)&&"e"!==o&&Object.defineProperty(n,o,r(o));return n.e=function(e){return"ready"===f&&p("prepare"),b++,C.e(e).then(t,function(e){throw t(),e});function t(){b--,"prepare"===f&&(y[e]||_(e),0===b&&0===g&&j())}},n}(t)),n.l=!0,n.exports}C.m=e,C.c=S,C.d=function(e,t,n){C.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},C.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},C.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return C.d(t,"a",t),t},C.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},C.p="",C.h=function(){return i};var R=window.webpackJsonp=window.webpackJsonp||[],q=R.push.bind(R);R.push=t,R=R.slice();for(var k=0;k<R.length;k++)t(R[k]);var T=q;M.push([304,0]),n()}({103:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.formatter=function(e){return("$ "+e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},t.parser=function(e){return e.replace(/\$\s?|(,*)/g,"")}},151:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.trimOldOneTimeExpenses=void 0;var r,a=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&l.return&&l.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=n(12),i=(r=o)&&r.__esModule?r:{default:r};t.trimOldOneTimeExpenses=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Date.now();return Object.entries(e).forEach(function(n){var r=a(n,2),o=r[0],l=r[1].startDate;(0,i.default)(l).hour(23).minute(59).valueOf()<t&&delete e[o]}),e}},152:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ExpensesWrapper=t.MasterWrapper=void 0;var r,a=u(["\n\tdisplay: grid;\n\tgrid-auto-flow: row;\n\tpadding: 0px 20px 20px 20px;\n\tmax-width: 800px;\n\tmargin: auto;\n\n\t& > h2 {\n\t\tmargin-bottom: 20px;\n\t}\n\n\t& > * {\n\t\tmax-width: 100%;\n\t}\n"],["\n\tdisplay: grid;\n\tgrid-auto-flow: row;\n\tpadding: 0px 20px 20px 20px;\n\tmax-width: 800px;\n\tmargin: auto;\n\n\t& > h2 {\n\t\tmargin-bottom: 20px;\n\t}\n\n\t& > * {\n\t\tmax-width: 100%;\n\t}\n"]),o=u(["\n\tmin-height: 94vh;\n"],["\n\tmin-height: 94vh;\n"]),i=n(37),l=(r=i)&&r.__esModule?r:{default:r};function u(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}t.MasterWrapper=l.default.div(a),t.ExpensesWrapper=l.default.div(o)},153:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a,o=(r=["\n\tmargin-top: 20px;\n\ttext-align: center;\n\tcolor: grey;\n\n\ta {\n\t\tcolor: inherit;\n\t}\n\n"],a=["\n\tmargin-top: 20px;\n\ttext-align: center;\n\tcolor: grey;\n\n\ta {\n\t\tcolor: inherit;\n\t}\n\n"],Object.freeze(Object.defineProperties(r,{raw:{value:Object.freeze(a)}}))),i=u(n(1)),l=u(n(37));n(101);function u(e){return e&&e.__esModule?e:{default:e}}var d=l.default.p(o);t.default=function(){return i.default.createElement("div",null,i.default.createElement(d,null," ",i.default.createElement("a",{href:"http://www.trevorlitsey.com",target:"blank"},"trevorlitsey.com")," | ",i.default.createElement("a",{href:"https://github.com/trevorlitsey/cashflow-calc",target:"blank"},"github")," "))}},154:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SwitchContainer=t.Grid=t.Container=void 0;var r,a=d(["\n\n\tpadding: 30px;\n\tmargin-top: 20px;\n\tborder: 1px solid HSLA(220, 8%, 92%, 1.00);\n\tborder-radius: 10px;\n\n\t& > form {\n\t\twidth: 100%;\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr 3fr;\n\t}\n\n\t& > form > button {\n\t\tgrid-column: 1 / -1;\n\t}\n\n\t& > form > * {\n\t\tdisplay: block;\n\t\tmargin-bottom: 10px;\n\t}\n\n\t.interval-label {\n\t\tdisplay: ",";\n\t}\n\n\t.interval-select > * {\n\t\tdisplay: ",";\n\t\tmargin-bottom: 6px;\n\t\tmax-width: 100px;\n\t}\n"],["\n\n\tpadding: 30px;\n\tmargin-top: 20px;\n\tborder: 1px solid HSLA(220, 8%, 92%, 1.00);\n\tborder-radius: 10px;\n\n\t& > form {\n\t\twidth: 100%;\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr 3fr;\n\t}\n\n\t& > form > button {\n\t\tgrid-column: 1 / -1;\n\t}\n\n\t& > form > * {\n\t\tdisplay: block;\n\t\tmargin-bottom: 10px;\n\t}\n\n\t.interval-label {\n\t\tdisplay: ",";\n\t}\n\n\t.interval-select > * {\n\t\tdisplay: ",";\n\t\tmargin-bottom: 6px;\n\t\tmax-width: 100px;\n\t}\n"]),o=d(["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr\n"],["\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 1fr\n"]),i=d(["\n\twidth: 100px;\n"],["\n\twidth: 100px;\n"]),l=n(37),u=(r=l)&&r.__esModule?r:{default:r};function d(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}t.Container=u.default.div(a,function(e){return e.isRecurring?"block":"none"},function(e){return e.isRecurring?"inline-block":"none"}),t.Grid=u.default.div(o),t.SwitchContainer=u.default.div(i)},166:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=b(n(46)),a=b(n(165)),o=b(n(162)),i=b(n(118)),l=b(n(116)),u=b(n(159)),d=b(n(117)),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=b(n(1)),p=n(0),m=b(n(12)),h=n(154),v=n(43),g=n(103);function b(e){return e&&e.__esModule?e:{default:e}}function y(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var x={name:"",startDate:Date.now(),amount:100,frequency:1,interval:"months",isRecurring:!1},E=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),i=0;i<a;i++)o[i]=arguments[i];return n=r=y(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.state=c({},x),r.handleSubmit=function(e){e.preventDefault();var t=r.state,n=t.startDate,a=t.name,o=t.amount,i=t.frequency,l=t.interval,u=t.isRecurring;if(!n||!a||!o)return d.default.error("all fields are required");if(u&&(!i||!l))return d.default.error("frequency and interval are required to set recurring expense");var c={startDate:n,name:a,amount:o,frequency:u&&i,interval:u&&l};return r.props.addExpense(c),r.setState(x),d.default.success("income/expenses added")},y(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,f.default.Component),s(t,[{key:"render",value:function(){var e=this,t=this.state,n=t.startDate,d=t.name,c=t.amount,s=t.frequency,p=t.interval,b=t.isRecurring;return f.default.createElement(h.Container,{isRecurring:b},f.default.createElement(v.SubSubTitle,null,"Add new income/expense:"),f.default.createElement("form",{onSubmit:this.handleSubmit},f.default.createElement("label",{htmlFor:"name"},"Name:"),f.default.createElement(u.default,{"data-test":"name",onChange:function(t){return e.setState({name:t.target.value})},value:d,placeholder:"Name of income/expense ...",required:!0}),f.default.createElement("label",{htmlFor:"name"},"Start date:"),f.default.createElement(l.default,{"data-test":"date",onChange:function(t){return e.setState({startDate:t.valueOf()})},value:(0,m.default)(n),placeholder:"Start date",required:!0}),f.default.createElement("label",{htmlFor:"name"},"Amount (+/-):"),f.default.createElement(i.default,{"data-test":"amount",onChange:function(t){return e.setState({amount:t})},value:c,formatter:g.formatter,parser:g.parser,required:!0}),f.default.createElement("label",{htmlFor:"name"},"Is recurring:"),f.default.createElement(h.SwitchContainer,null,f.default.createElement(o.default,{onChange:function(t){return e.setState({isRecurring:t})},checked:b})),f.default.createElement("label",{htmlFor:"frequency",className:"interval-label"},"Repeat every:"),f.default.createElement("div",{className:"interval-select"},f.default.createElement(i.default,{"data-test":"frequency",onChange:function(t){return e.setState({frequency:t})},min:1,max:10,value:s,required:!0}),f.default.createElement(a.default,{"data-test":"interval",onChange:function(t){return e.setState({interval:t})},value:p,style:{marginLeft:"6px"},required:!0},f.default.createElement(a.default.Option,{value:"days"},"Day(s)"),f.default.createElement(a.default.Option,{value:"weeks"},"Weeks(s)"),f.default.createElement(a.default.Option,{value:"months"},"Month(s)"))),f.default.createElement(r.default,{htmlType:"submit"},"submit")))}}]),t}();E.propTypes={addExpense:p.func.isRequired},t.default=E},173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=u(n(122)),a=u(n(1)),o=u(n(12)),i=u(n(172)),l=n(43);function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.date,n=e.name,u=e.amount,d=e.balance,c=e.isRecurring,s=e.id,f=e.handleOneTimeExpenseDelete;return 0===s?a.default.createElement("tr",null,a.default.createElement("td",null,(0,o.default)(t).format("LL")),a.default.createElement("td",null,n),a.default.createElement("td",null),a.default.createElement("td",null,i.default.format(d,{code:"USD",precision:0})),a.default.createElement("td",null)):a.default.createElement("tr",null,a.default.createElement("td",null,(0,o.default)(t).format("LL")),a.default.createElement("td",null,n),a.default.createElement("td",null,u&&i.default.format(u,{code:"USD",precision:0})),a.default.createElement("td",null,i.default.format(d,{code:"USD",precision:0})),a.default.createElement("td",null,a.default.createElement(r.default,{"data-test":t+u,onClick:function(){return f(s)},placement:"left",title:c?"delete recurring income/expense":"delete one-time income/expense"},a.default.createElement(l.SpanWithPointer,null,"x"))))}},174:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(12),o=(r=a)&&r.__esModule?r:{default:r};t.default=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=[];return r.push({id:0,name:"(starting balance)",date:e.valueOf()}),Object.keys(n).forEach(function(a){var i=n[a],l=i.startDate,u=i.name,d=i.amount,c=i.frequency,s=i.interval;if(c&&s)for(var f=(0,o.default)(l);f<=t;){if(f>=e){var p={id:a,date:f.valueOf(),name:u,amount:d,isRecurring:!0};r.push(p)}f.add(c,s)}else{var m=n[a],h=m.startDate,v=m.name,g=m.amount;if(h>=e&&h<=t){var b={id:a,date:h.valueOf(),name:v,amount:g};r.push(b)}}}),r.sort(function(e,t){return e.date-t.date}),r}},175:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.convertObjToArr=function(e){return Object.keys(e).map(function(t){return e[t]})}},176:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Controls=t.Container=void 0;var r,a=u(["\n\twidth: 100%;\n\tmargin-bottom: 40px;\n\n\ttable {\n\t\twidth: 100%;\n\t}\n\n\tth {\n\t\tborder-bottom: 1px solid HSLA(225, 9%, 91%, 1.00);\n\t}\n\n\ttr:nth-child(even) {\n\t\tbackground: HSLA(211, 100%, 70%, .08);\n\t}\n\n\ttd:last-child {\n\t\twidth: 10px;\n\t\tcolor: HSLA(220, 0%, 70%, 1.00);\n\t}\n\t\n\tth, td {\n\t\tpadding: 8px;\n\t}\n"],["\n\twidth: 100%;\n\tmargin-bottom: 40px;\n\n\ttable {\n\t\twidth: 100%;\n\t}\n\n\tth {\n\t\tborder-bottom: 1px solid HSLA(225, 9%, 91%, 1.00);\n\t}\n\n\ttr:nth-child(even) {\n\t\tbackground: HSLA(211, 100%, 70%, .08);\n\t}\n\n\ttd:last-child {\n\t\twidth: 10px;\n\t\tcolor: HSLA(220, 0%, 70%, 1.00);\n\t}\n\t\n\tth, td {\n\t\tpadding: 8px;\n\t}\n"]),o=u(["\n\n\tdisplay: flex;\n\tjustify-content: space-around;\n\talign-items: center;\n\tmargin-bottom: 10px;\n\n\t& > * {\n\t\tdisplay: block;\n\t\tmargin: 10px;\n\t}\n\n\t@media (max-width: 500px) {\n\t\tdisplay: grid;\n\n\t\t& > * {\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-columns: 1fr 3fr;\n\t\t\tmargin: 10px;\n\t\t}\n\n\t}\n\n"],["\n\n\tdisplay: flex;\n\tjustify-content: space-around;\n\talign-items: center;\n\tmargin-bottom: 10px;\n\n\t& > * {\n\t\tdisplay: block;\n\t\tmargin: 10px;\n\t}\n\n\t@media (max-width: 500px) {\n\t\tdisplay: grid;\n\n\t\t& > * {\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-columns: 1fr 3fr;\n\t\t\tmargin: 10px;\n\t\t}\n\n\t}\n\n"]),i=n(37),l=(r=i)&&r.__esModule?r:{default:r};function u(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}t.Container=l.default.div(a),t.Controls=l.default.div(o)},257:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=g(n(256)),a=g(n(46)),o=g(n(118)),i=g(n(117)),l=g(n(116)),u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(r=(i=l.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{!r&&l.return&&l.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=g(n(1)),f=n(0),p=(g(n(12)),n(43),n(176)),m=(n(175),n(103)),h=g(n(174)),v=g(n(173));function g(e){return e&&e.__esModule?e:{default:e}}function b(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var y=l.default.RangePicker,x=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,o=Array(a),l=0;l<a;l++)o[l]=arguments[l];return n=r=b(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(o))),r.state={rows:[]},r.handleRangeChange=function(e){var t=d(e,2),n=t[0],a=t[1];r.props.updateStartingDate(n),r.props.updateEndingDate(a)},r.handleStartingCashChange=function(e){r.props.updateStartingCash(e)},r.handleExpenseDelete=function(e){return r.props.deleteExpense(e),i.default.success("income/expense deleted")},b(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,s.default.PureComponent),c(t,[{key:"render",value:function(){var e=this,t=this.state.rows,n=this.props,i=n.startingDate,l=n.endingDate,d=n.startingCash,c=(n.addOneTimeExpense,n.resetExpenses),f=s.default.createElement("thead",null,s.default.createElement("tr",null,s.default.createElement("th",null,"Date"),s.default.createElement("th",null,"Income/Expense"),s.default.createElement("th",null,"Amount"),s.default.createElement("th",null,"Balance"),s.default.createElement("th",null))),h=s.default.createElement("tbody",null,t.map(function(t){return s.default.createElement(v.default,u({key:t.id+t.date},t,{handleOneTimeExpenseDelete:e.handleExpenseDelete}))}));return s.default.createElement(p.Container,null,s.default.createElement(p.Controls,null,s.default.createElement("div",null,s.default.createElement("label",null,"Projection range: "),s.default.createElement(y,{value:[i,l],onChange:this.handleRangeChange})),s.default.createElement("div",null,s.default.createElement("label",null,"Starting cash: "),s.default.createElement(o.default,{value:d,formatter:m.formatter,parser:m.parser,onChange:this.handleStartingCashChange,required:!0})),s.default.createElement(r.default,{title:"Delete all expenses?",onConfirm:c,okText:"Yes",cancelText:"Cancel!"},s.default.createElement(a.default,{"data-testId":"reset",type:"danger"},"Reset"))),s.default.createElement("table",null,f,h))}}]),t}();x.propTypes={expenses:(0,f.oneOfType)([(0,f.shape)({name:f.string.isRequired,date:f.number.isRequired,amount:f.number.isRequired,frequency:f.number.isRequired,interval:f.string.isRequired}),(0,f.shape)({name:f.string.isRequired,date:f.number.isRequired,amount:f.number.isRequired}),(0,f.shape)({})]),startingDate:f.object.isRequired,endingDate:f.object.isRequired,startingCash:f.number.isRequired||f.string.isRequired,updateStartingDate:f.func.isRequired,updateEndingDate:f.func.isRequired,updateStartingCash:f.func.isRequired,deleteExpense:f.func.isRequired,resetExpenses:f.func.isRequired},x.getDerivedStateFromProps=function(e,t){var n=e.startingDate,r=e.endingDate,a=e.expenses,o=e.startingCash,i=(0,h.default)(n,r,a),l=o;return i.forEach(function(e){e.amount&&(l+=e.amount),e.balance=l}),{rows:i}},t.default=x},258:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(257);Object.defineProperty(t,"ProjectionTable",{enumerable:!0,get:function(){return i(r).default}});var a=n(166);Object.defineProperty(t,"NewExpenseForm",{enumerable:!0,get:function(){return i(a).default}});var o=n(153);function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"Footer",{enumerable:!0,get:function(){return i(o).default}})},260:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=p(n(1)),i=n(0),l=p(n(12)),u=p(n(259)),d=n(258),c=n(152),s=n(43),f=n(151);function p(e){return e&&e.__esModule?e:{default:e}}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var h=function(e){function t(){var e,n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=Array(o),d=0;d<o;d++)i[d]=arguments[d];return n=a=m(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a.state={startingDate:(0,l.default)(),endingDate:(0,l.default)().add(2,"M"),startingCash:0,expenses:{}},a.addExpense=function(e){var t=r({},a.state.expenses),n=e.id||(0,u.default)();t[n]=r({},e,{id:n}),a.setState({expenses:t})},a.deleteExpense=function(e){var t=r({},a.state.expenses);delete t[e],a.setState({expenses:t})},a.resetExpenses=function(){a.setState({expenses:{}})},a.updateStartingDate=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,l.default)();a.setState({startingDate:e.hour(0).minute(0)})},a.updateEndingDate=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,l.default)().add(2,"M");a.setState({endingDate:e})},a.updateStartingCash=function(e){a.setState({startingCash:e})},a.componentDidMount=function(){if(!a.props.testing){var e=localStorage.getItem("cashflow");if(e){var t=JSON.parse(e);t.oneTimeExpenses=(0,f.trimOldOneTimeExpenses)(r({},t.oneTimeExpenses)),a.setState(r({},t,{startingDate:(0,l.default)(t.startingDate),endingDate:(0,l.default)(t.endingDate)}))}}},m(a,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.default.PureComponent),a(t,[{key:"componentDidUpdate",value:function(){if(!this.props.testing){var e=r({},this.state,{startingDate:this.state.startingDate.valueOf(),endingDate:this.state.endingDate.valueOf()});localStorage.setItem("cashflow",JSON.stringify(e))}}},{key:"render",value:function(){var e=this.state,t=e.expenses,n=e.startingDate,r=e.endingDate,a=e.startingCash;return o.default.createElement(c.MasterWrapper,null,o.default.createElement(s.Title,null,"cashflow-calc"),o.default.createElement(c.ExpensesWrapper,null,o.default.createElement(d.ProjectionTable,{expenses:t,startingDate:n,endingDate:r,startingCash:a,updateStartingDate:this.updateStartingDate,updateEndingDate:this.updateEndingDate,updateStartingCash:this.updateStartingCash,deleteExpense:this.deleteExpense,resetExpenses:this.resetExpenses}),o.default.createElement(d.NewExpenseForm,{addExpense:this.addExpense})),o.default.createElement(d.Footer,null))}}]),t}();h.propTypes={testing:i.bool},t.default=h},261:function(e,t,n){var r=n(51);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(15)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(51,function(t){!function(){var t=n(51);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}()}),e.hot.dispose(function(){o()})},292:function(e,t,n){"use strict";n(291);r(n(40)),r(n(287)),r(n(285)),r(n(282)),r(n(278)),r(n(92)),r(n(270)),r(n(268)),r(n(265)),r(n(263));function r(e){return e&&e.__esModule?e:{default:e}}n(261)},304:function(e,t,n){"use strict";var r=i(n(1)),a=i(n(7)),o=i(n(69));function i(e){return e&&e.__esModule?e:{default:e}}document.body.innerHTML='<div id="root"></div>',a.default.render(r.default.createElement(o.default,null),document.getElementById("root")),e.hot.accept(69,function(e){var t;t=n(69).default,a.default.render(r.default.createElement(t,null),document.getElementById("root"))})},43:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SpanWithPointer=t.SubSubTitle=t.SubTitle=t.Title=void 0;var r,a=c(["\n\ttext-decoration: underline;\n\ttext-align: center;\n\twidth: 100%;\n"],["\n\ttext-decoration: underline;\n\ttext-align: center;\n\twidth: 100%;\n"]),o=c(["\n\tfont-weight: bold;\n"],["\n\tfont-weight: bold;\n"]),i=c(["\n"],["\n"]),l=c(["\n\tcursor: pointer;\n"],["\n\tcursor: pointer;\n"]),u=n(37),d=(r=u)&&r.__esModule?r:{default:r};function c(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}t.Title=d.default.h2(a),t.SubTitle=d.default.h3(o),t.SubSubTitle=d.default.h3(i),t.SpanWithPointer=d.default.span(l)},51:function(e,t,n){(e.exports=n(16)(!1)).push([e.i,'*, *:before, *:after {\n  box-sizing: border-box;\n}\n\nbody {\n\tmargin: 0;\n\tfont-family: "Monospaced Number", "Chinese Quote", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif;\n\tborder-top: 8px solid HSLA(209, 100%, 60%, 1.00);\n\tpadding: 20px 10px;\n\tmin-width: 420px;\n}',""])},69:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(n(1)),a=n(101);n(292);var o=i(n(260));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(){return r.default.createElement(a.BrowserRouter,null,r.default.createElement(a.Switch,null,r.default.createElement(a.Route,{path:"/",component:o.default})))}}});