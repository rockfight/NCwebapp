(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{16:function(e,a,t){"use strict";var n=t(307),r=t(308),s=t(310),c=t(312),o=t(1),l=t.n(o),i=t(2),u=t.n(i),p=t(305),d=t.n(p),m=t(306),f={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:m.m,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(c.a)(Object(c.a)(t))),t}Object(s.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},t.render=function(){var e=this.props,a=e.active,t=e["aria-label"],s=e.block,c=e.className,o=e.close,i=e.cssModule,u=e.color,p=e.outline,f=e.size,b=e.tag,g=e.innerRef,h=Object(r.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);o&&"undefined"===typeof h.children&&(h.children=l.a.createElement("span",{"aria-hidden":!0},"\xd7"));var j="btn"+(p?"-outline":"")+"-"+u,y=Object(m.i)(d()(c,{close:o},o||"btn",o||j,!!f&&"btn-"+f,!!s&&"btn-block",{active:a,disabled:this.props.disabled}),i);h.href&&"button"===b&&(b="a");var v=o?"Close":null;return l.a.createElement(b,Object(n.a)({type:"button"===b&&h.onClick?"button":void 0},h,{className:y,ref:g,onClick:this.onClick,"aria-label":t||v}))},a}(l.a.Component);b.propTypes=f,b.defaultProps={color:"secondary",tag:"button"},a.a=b},24:function(e,a,t){"use strict";var n=t(307),r=t(308),s=t(1),c=t.n(s),o=t(2),l=t.n(o),i=t(305),u=t.n(i),p=t(306),d={tag:p.m,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,s=e.tag,o=Object(r.a)(e,["className","cssModule","tag"]),l=Object(p.i)(u()(a,"input-group-text"),t);return c.a.createElement(s,Object(n.a)({},o,{className:l}))};m.propTypes=d,m.defaultProps={tag:"span"},a.a=m},315:function(e,a,t){"use strict";var n=t(1),r=t.n(n),s=t(331),c=t.n(s);a.a=function(){return r.a.createElement(c.a,{type:"ThreeDots",color:"#00BFFF",height:"100",width:"100"})}},316:function(e,a){e.exports="data:image/png;base64,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"},386:function(e,a,t){"use strict";var n=t(1),r=t.n(n),s=t(2),c=t.n(s),o=t(20),l=t.n(o),i=t(112),u=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e};function p(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}var d=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},m=function(e){function a(){var t,n;!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);for(var r=arguments.length,s=Array(r),c=0;c<r;c++)s[c]=arguments[c];return t=n=p(this,e.call.apply(e,[this].concat(s))),n.handleClick=function(e){if(n.props.onClick&&n.props.onClick(e),!e.defaultPrevented&&0===e.button&&!n.props.target&&!d(e)){e.preventDefault();var a=n.context.router.history,t=n.props,r=t.replace,s=t.to;r?a.replace(s):a.push(s)}},p(n,t)}return function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),a.prototype.render=function(){var e=this.props,a=(e.replace,e.to),t=e.innerRef,n=function(e,a){var t={};for(var n in e)a.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}(e,["replace","to","innerRef"]);l()(this.context.router,"You should not use <Link> outside a <Router>"),l()(void 0!==a,'You must specify the "to" property');var s=this.context.router.history,c="string"===typeof a?Object(i.b)(a,null,null,s.location):a,o=s.createHref(c);return r.a.createElement("a",u({},n,{onClick:this.handleClick,href:o,ref:t}))},a}(r.a.Component);m.propTypes={onClick:c.a.func,target:c.a.string,replace:c.a.bool,to:c.a.oneOfType([c.a.string,c.a.object]).isRequired,innerRef:c.a.oneOfType([c.a.string,c.a.func])},m.defaultProps={replace:!1},m.contextTypes={router:c.a.shape({history:c.a.shape({push:c.a.func.isRequired,replace:c.a.func.isRequired,createHref:c.a.func.isRequired}).isRequired}).isRequired},a.a=m},514:function(e,a,t){"use strict";var n=t(307),r=t(308),s=t(1),c=t.n(s),o=t(2),l=t.n(o),i=t(305),u=t.n(i),p=t(306),d={tag:p.m,flush:l.a.bool,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,s=e.tag,o=e.flush,l=Object(r.a)(e,["className","cssModule","tag","flush"]),i=Object(p.i)(u()(a,"list-group",!!o&&"list-group-flush"),t);return c.a.createElement(s,Object(n.a)({},l,{className:i}))};m.propTypes=d,m.defaultProps={tag:"ul"},a.a=m},515:function(e,a,t){"use strict";var n=t(307),r=t(308),s=t(1),c=t.n(s),o=t(2),l=t.n(o),i=t(305),u=t.n(i),p=t(306),d={tag:p.m,active:l.a.bool,disabled:l.a.bool,color:l.a.string,action:l.a.bool,className:l.a.any,cssModule:l.a.object},m=function(e){e.preventDefault()},f=function(e){var a=e.className,t=e.cssModule,s=e.tag,o=e.active,l=e.disabled,i=e.action,d=e.color,f=Object(r.a)(e,["className","cssModule","tag","active","disabled","action","color"]),b=Object(p.i)(u()(a,!!o&&"active",!!l&&"disabled",!!i&&"list-group-item-action",!!d&&"list-group-item-"+d,"list-group-item"),t);return l&&(f.onClick=m),c.a.createElement(s,Object(n.a)({},f,{className:b}))};f.propTypes=d,f.defaultProps={tag:"li"},a.a=f},73:function(e,a,t){"use strict";var n=t(307),r=t(308),s=t(1),c=t.n(s),o=t(2),l=t.n(o),i=t(305),u=t.n(i),p=t(306),d={tag:p.m,inverse:l.a.bool,color:l.a.string,block:Object(p.e)(l.a.bool,'Please use the props "body"'),body:l.a.bool,outline:l.a.bool,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},m=function(e){var a=e.className,t=e.cssModule,s=e.color,o=e.block,l=e.body,i=e.inverse,d=e.outline,m=e.tag,f=e.innerRef,b=Object(r.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),g=Object(p.i)(u()(a,"card",!!i&&"text-white",!(!o&&!l)&&"card-body",!!s&&(d?"border":"bg")+"-"+s),t);return c.a.createElement(m,Object(n.a)({},b,{className:g,ref:f}))};m.propTypes=d,m.defaultProps={tag:"div"},a.a=m},75:function(e,a,t){"use strict";var n=t(307),r=t(308),s=t(310),c=t(312),o=t(1),l=t.n(o),i=t(2),u=t.n(i),p=t(305),d=t.n(p),m=t(306),f={children:u.a.node,inline:u.a.bool,tag:m.m,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(c.a)(Object(c.a)(t))),t.submit=t.submit.bind(Object(c.a)(Object(c.a)(t))),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.inline,c=e.tag,o=e.innerRef,i=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(m.i)(d()(a,!!s&&"form-inline"),t);return l.a.createElement(c,Object(n.a)({},i,{ref:o,className:u}))},a}(o.Component);b.propTypes=f,b.defaultProps={tag:"form"},a.a=b},76:function(e,a,t){"use strict";var n=t(307),r=t(308),s=t(1),c=t.n(s),o=t(2),l=t.n(o),i=t(305),u=t.n(i),p=t(306),d={tag:p.m,size:l.a.string,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,s=e.tag,o=e.size,l=Object(r.a)(e,["className","cssModule","tag","size"]),i=Object(p.i)(u()(a,"input-group",o?"input-group-"+o:null),t);return c.a.createElement(s,Object(n.a)({},l,{className:i}))};m.propTypes=d,m.defaultProps={tag:"div"},a.a=m},77:function(e,a,t){"use strict";var n=t(307),r=t(308),s=t(1),c=t.n(s),o=t(2),l=t.n(o),i=t(305),u=t.n(i),p=t(306),d=t(24),m={tag:p.m,addonType:l.a.oneOf(["prepend","append"]).isRequired,children:l.a.node,className:l.a.string,cssModule:l.a.object},f=function(e){var a=e.className,t=e.cssModule,s=e.tag,o=e.addonType,l=e.children,i=Object(r.a)(e,["className","cssModule","tag","addonType","children"]),m=Object(p.i)(u()(a,"input-group-"+o),t);return"string"===typeof l?c.a.createElement(s,Object(n.a)({},i,{className:m}),c.a.createElement(d.a,{children:l})):c.a.createElement(s,Object(n.a)({},i,{className:m,children:l}))};f.propTypes=m,f.defaultProps={tag:"div"},a.a=f},78:function(e,a,t){"use strict";var n=t(307),r=t(308),s=t(310),c=t(312),o=t(1),l=t.n(o),i=t(2),u=t.n(i),p=t(305),d=t.n(p),m=t(306),f={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,state:Object(m.e)(u.a.string,'Please use the props "valid" and "invalid" to indicate the state.'),valid:u.a.bool,invalid:u.a.bool,tag:m.m,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),static:Object(m.e)(u.a.bool,'Please use the prop "plaintext"'),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(c.a)(Object(c.a)(t))),t.focus=t.focus.bind(Object(c.a)(Object(c.a)(t))),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,s=e.type,c=e.bsSize,o=e.state,i=e.valid,u=e.invalid,p=e.tag,f=e.addon,b=e.static,g=e.plaintext,h=e.innerRef,j=Object(r.a)(e,["className","cssModule","type","bsSize","state","valid","invalid","tag","addon","static","plaintext","innerRef"]),y=["radio","checkbox"].indexOf(s)>-1,v=new RegExp("\\D","g"),E=p||("select"===s||"textarea"===s?s:"input"),O="form-control";g||b?(O+="-plaintext",E=p||"input"):"file"===s?O+="-file":y&&(O=f?null:"form-check-input"),o&&"undefined"===typeof i&&"undefined"===typeof u&&("danger"===o?u=!0:"success"===o&&(i=!0)),j.size&&v.test(j.size)&&(Object(m.n)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=j.size,delete j.size);var N=Object(m.i)(d()(a,u&&"is-invalid",i&&"is-valid",!!c&&"form-control-"+c,O),t);return("input"===E||p&&"function"===typeof p)&&(j.type=s),!j.children||g||b||"select"===s||"string"!==typeof E||"select"===E||(Object(m.n)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete j.children),l.a.createElement(E,Object(n.a)({},j,{ref:h,className:N}))},a}(l.a.Component);b.propTypes=f,b.defaultProps={type:"text"},a.a=b},795:function(e,a,t){"use strict";t.r(a);var n=t(72),r=t(1),s=t.n(r),c=t(458),o=t(386),l=t(394),i=t(388),u=t(389),p=t(307),d=t(308),m=t(2),f=t.n(m),b=t(305),g=t.n(b),h=t(306),j={tag:h.m,className:f.a.string,cssModule:f.a.object},y=function(e){var a=e.className,t=e.cssModule,n=e.tag,r=Object(d.a)(e,["className","cssModule","tag"]),c=Object(h.i)(g()(a,"card-group"),t);return s.a.createElement(n,Object(p.a)({},r,{className:c}))};y.propTypes=j,y.defaultProps={tag:"div"};var v=y,E=t(73),O=t(513),N=t(75),x=t(76),C=t(77),K=t(24),T=t(78),A=t(16),R=t(514),w=t(515),k=t(108),P=t(71),z=t(316),M=t.n(z),S=t(315);a.default=function(e){var a=Object(r.useState)(""),t=Object(n.a)(a,2),p=t[0],d=t[1],m=Object(r.useState)(""),f=Object(n.a)(m,2),b=f[0],g=f[1],h=Object(r.useState)(!1),j=Object(n.a)(h,2),y=j[0],z=j[1],J=Object(r.useState)(!1),Y=Object(n.a)(J,2),I=Y[0],F=Y[1],U=Object(r.useState)(null),G=Object(n.a)(U,2),W=G[0],D=G[1],H=Object(r.useContext)(P.b),B=H.uid,Q=H.emailVerified;return s.a.createElement("div",{className:"app flex-row align-items-center"},B&&!Q?s.a.createElement(c.a,{to:"/verify"}):null,B&&Q?s.a.createElement(c.a,{to:"/market"}):null,s.a.createElement(l.a,null,s.a.createElement(i.a,{className:"justify-content-center"},s.a.createElement(u.a,{md:"8"},s.a.createElement(v,null,s.a.createElement(E.a,{className:"p-4"},s.a.createElement(O.a,null,s.a.createElement(N.a,{onSubmit:function(e){e.preventDefault(),F(!0),k.a.auth().signInWithEmailAndPassword(p,b).then(function(e){F(!1)}).catch(function(e){F(!1),D(e.code+". "+e.message)})}},s.a.createElement(i.a,null,s.a.createElement(u.a,{sm:"12"},s.a.createElement("img",{src:M.a}))),y?s.a.createElement(s.a.Fragment,null,s.a.createElement(x.a,{className:"mb-3"},s.a.createElement(C.a,{addonType:"prepend"},s.a.createElement(K.a,null,s.a.createElement("i",{className:"icon-user"}))),s.a.createElement(T.a,{type:"text",name:"email",value:p,onChange:function(e){return d(e.target.value)},placeholder:"Email",autoComplete:"email"})),s.a.createElement(i.a,null,s.a.createElement(u.a,{sm:"12"},s.a.createElement(A.a,{onClick:function(){k.a.auth().sendPasswordResetEmail(p).then(function(){alert("Password reset link sent to ",p)}).catch(function(e){alert(e)})},color:"primary",className:"px-4"},"Reset Password")))):s.a.createElement(s.a.Fragment,null,s.a.createElement(x.a,{className:"mb-3 mt-4"},s.a.createElement(C.a,{addonType:"prepend"},s.a.createElement(K.a,null,s.a.createElement("i",{className:"icon-user"}))),s.a.createElement(T.a,{disabled:I,type:"text",name:"email",value:p,onChange:function(e){return d(e.target.value)},placeholder:"Email",autoComplete:"email"})),s.a.createElement(x.a,{className:"mb-4"},s.a.createElement(C.a,{addonType:"prepend"},s.a.createElement(K.a,null,s.a.createElement("i",{className:"icon-lock"}))),s.a.createElement(T.a,{disabled:I,type:"password",value:b,onChange:function(e){return g(e.target.value)},name:"password",placeholder:"Password"})),I?s.a.createElement("div",{className:"text-center"},s.a.createElement(S.a,null)):s.a.createElement(s.a.Fragment,null,s.a.createElement(i.a,null,s.a.createElement(u.a,{xs:"6"},s.a.createElement(A.a,{type:"submit",color:"primary",className:"px-4"},"Login")),s.a.createElement(u.a,{xs:"6",className:"text-right"},s.a.createElement(A.a,{onClick:function(){return z(!0)},color:"link",className:"px-0"},"Forgot password?"))),s.a.createElement(i.a,null,s.a.createElement(u.a,null,s.a.createElement("div",{className:"mt-2 d-block d-lg-none"},s.a.createElement(o.a,{to:"/register"},"Register Account"))))),s.a.createElement("strong",{className:"mt-2 text-danger"},W))))),s.a.createElement(E.a,{className:"text-white bg-primary py-5 d-none d-lg-block",style:{width:"44%"}},s.a.createElement(O.a,null,s.a.createElement("h3",{className:"text-center"},"Free Personal Account for Small Investors"),s.a.createElement(R.a,null,s.a.createElement(w.a,{className:"bg-primary"},"Advanced Live Intraday and Daily Technical Charts with hundreds of indicators and tools."),s.a.createElement(w.a,{className:"bg-primary"},"Free Advanced Portfolio Management with Live Price Changes and Graphs"),s.a.createElement(w.a,{className:"bg-primary"},"In Depth into Company Fundamentals and Reports")),s.a.createElement(o.a,{to:"/register"},s.a.createElement(A.a,{size:"lg",className:"mt-3",color:"info"},s.a.createElement("i",{className:"fa fa-envelope"}),s.a.createElement("span",null," Register with Email"))),s.a.createElement("br",null),s.a.createElement("small",{className:"text-muted"},"*Contact us for Premium account if you are Large Investor or Fund Manager."))))))))}}}]);
//# sourceMappingURL=5.9ec59cfd.chunk.js.map