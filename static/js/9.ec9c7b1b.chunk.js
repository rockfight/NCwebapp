(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{16:function(e,t,a){"use strict";var n=a(307),s=a(308),c=a(310),i=a(312),r=a(1),o=a.n(r),l=a(2),u=a.n(l),d=a(305),p=a.n(d),b=a(306),f={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:b.m,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(i.a)(Object(i.a)(a))),a}Object(c.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],c=e.block,i=e.className,r=e.close,l=e.cssModule,u=e.color,d=e.outline,f=e.size,m=e.tag,j=e.innerRef,h=Object(s.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);r&&"undefined"===typeof h.children&&(h.children=o.a.createElement("span",{"aria-hidden":!0},"\xd7"));var g="btn"+(d?"-outline":"")+"-"+u,v=Object(b.i)(p()(i,{close:r},r||"btn",r||g,!!f&&"btn-"+f,!!c&&"btn-block",{active:t,disabled:this.props.disabled}),l);h.href&&"button"===m&&(m="a");var y=r?"Close":null;return o.a.createElement(m,Object(n.a)({type:"button"===m&&h.onClick?"button":void 0},h,{className:v,ref:j,onClick:this.onClick,"aria-label":a||y}))},t}(o.a.Component);m.propTypes=f,m.defaultProps={color:"secondary",tag:"button"},t.a=m},24:function(e,t,a){"use strict";var n=a(307),s=a(308),c=a(1),i=a.n(c),r=a(2),o=a.n(r),l=a(305),u=a.n(l),d=a(306),p={tag:d.m,className:o.a.string,cssModule:o.a.object},b=function(e){var t=e.className,a=e.cssModule,c=e.tag,r=Object(s.a)(e,["className","cssModule","tag"]),o=Object(d.i)(u()(t,"input-group-text"),a);return i.a.createElement(c,Object(n.a)({},r,{className:o}))};b.propTypes=p,b.defaultProps={tag:"span"},t.a=b},315:function(e,t,a){"use strict";var n=a(1),s=a.n(n),c=a(331),i=a.n(c);t.a=function(){return s.a.createElement(i.a,{type:"ThreeDots",color:"#00BFFF",height:"100",width:"100"})}},316:function(e,t){e.exports="data:image/png;base64,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"},74:function(e,t,a){"use strict";var n=a(307),s=a(308),c=a(1),i=a.n(c),r=a(2),o=a.n(r),l=a(305),u=a.n(l),d=a(306),p={tag:d.m,className:o.a.string,cssModule:o.a.object},b=function(e){var t=e.className,a=e.cssModule,c=e.tag,r=Object(s.a)(e,["className","cssModule","tag"]),o=Object(d.i)(u()(t,"card-header"),a);return i.a.createElement(c,Object(n.a)({},r,{className:o}))};b.propTypes=p,b.defaultProps={tag:"div"},t.a=b},75:function(e,t,a){"use strict";var n=a(307),s=a(308),c=a(310),i=a(312),r=a(1),o=a.n(r),l=a(2),u=a.n(l),d=a(305),p=a.n(d),b=a(306),f={children:u.a.node,inline:u.a.bool,tag:b.m,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(Object(i.a)(a))),a.submit=a.submit.bind(Object(i.a)(Object(i.a)(a))),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.submit=function(){this.ref&&this.ref.submit()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,c=e.inline,i=e.tag,r=e.innerRef,l=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(b.i)(p()(t,!!c&&"form-inline"),a);return o.a.createElement(i,Object(n.a)({},l,{ref:r,className:u}))},t}(r.Component);m.propTypes=f,m.defaultProps={tag:"form"},t.a=m},76:function(e,t,a){"use strict";var n=a(307),s=a(308),c=a(1),i=a.n(c),r=a(2),o=a.n(r),l=a(305),u=a.n(l),d=a(306),p={tag:d.m,size:o.a.string,className:o.a.string,cssModule:o.a.object},b=function(e){var t=e.className,a=e.cssModule,c=e.tag,r=e.size,o=Object(s.a)(e,["className","cssModule","tag","size"]),l=Object(d.i)(u()(t,"input-group",r?"input-group-"+r:null),a);return i.a.createElement(c,Object(n.a)({},o,{className:l}))};b.propTypes=p,b.defaultProps={tag:"div"},t.a=b},77:function(e,t,a){"use strict";var n=a(307),s=a(308),c=a(1),i=a.n(c),r=a(2),o=a.n(r),l=a(305),u=a.n(l),d=a(306),p=a(24),b={tag:d.m,addonType:o.a.oneOf(["prepend","append"]).isRequired,children:o.a.node,className:o.a.string,cssModule:o.a.object},f=function(e){var t=e.className,a=e.cssModule,c=e.tag,r=e.addonType,o=e.children,l=Object(s.a)(e,["className","cssModule","tag","addonType","children"]),b=Object(d.i)(u()(t,"input-group-"+r),a);return"string"===typeof o?i.a.createElement(c,Object(n.a)({},l,{className:b}),i.a.createElement(p.a,{children:o})):i.a.createElement(c,Object(n.a)({},l,{className:b,children:o}))};f.propTypes=b,f.defaultProps={tag:"div"},t.a=f},779:function(e,t,a){"use strict";a.r(t);var n=a(72),s=a(1),c=a.n(s),i=a(394),r=a(388),o=a(389),l=a(74),u=a(513),d=a(75),p=a(76),b=a(77),f=a(24),m=a(78),j=a(16),h=a(316),g=a.n(h),v=a(108),y=a(71),x=a(315),E=a(458);t.default=function(e){var t=Object(s.useState)(""),a=Object(n.a)(t,2),h=a[0],O=a[1],N=Object(s.useState)(!1),K=Object(n.a)(N,2),A=K[0],z=K[1],C=Object(s.useState)(!1),T=Object(n.a)(C,2),w=T[0],R=T[1],S=Object(s.useContext)(y.b).email;return Object(s.useEffect)(function(){S||e.history.replace("/login")}),c.a.createElement("div",null,w?c.a.createElement(E.a,{to:"/register"}):null,c.a.createElement(i.a,null,c.a.createElement(r.a,{className:"justify-content-center"},c.a.createElement(o.a,{className:"mt-4",md:"9",lg:"7",xl:"6"},c.a.createElement(l.a,null,c.a.createElement("img",{src:g.a})),c.a.createElement(u.a,{className:"p-4 bg-white"},c.a.createElement("strong",null,"Please type your password to complete deletion."),c.a.createElement(d.a,{onSubmit:function(e){e.preventDefault(),z(!0);var t=v.a.auth().currentUser,a=v.a.auth.EmailAuthProvider.credential(t.email,h);t.reauthenticateWithCredential(a).then(function(){t.delete().then(function(){R(!0)})}).catch(function(){alert("Cannot delete your account. Please verify if your password is correct.")})}},c.a.createElement(p.a,{id:"email",className:"mb-3"},c.a.createElement(b.a,{addonType:"prepend"},c.a.createElement(f.a,null,c.a.createElement("i",{className:"icon-lock"}))),c.a.createElement(m.a,{disabled:!0,value:S})),c.a.createElement(p.a,{id:"password",className:"mb-3"},c.a.createElement(b.a,{addonType:"prepend"},c.a.createElement(f.a,null,c.a.createElement("i",{className:"icon-lock"}))),c.a.createElement(m.a,{onChange:function(e){return O(e.target.value)},type:"password",placeholder:"Password"})),A?c.a.createElement("div",{className:"text-center"},c.a.createElement(x.a,null)):c.a.createElement(j.a,{color:"warning",block:!0},"Delete Account")))))))}},78:function(e,t,a){"use strict";var n=a(307),s=a(308),c=a(310),i=a(312),r=a(1),o=a.n(r),l=a(2),u=a.n(l),d=a(305),p=a.n(d),b=a(306),f={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,state:Object(b.e)(u.a.string,'Please use the props "valid" and "invalid" to indicate the state.'),valid:u.a.bool,invalid:u.a.bool,tag:b.m,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),static:Object(b.e)(u.a.bool,'Please use the prop "plaintext"'),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},m=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(i.a)(Object(i.a)(a))),a.focus=a.focus.bind(Object(i.a)(Object(i.a)(a))),a}Object(c.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,c=e.type,i=e.bsSize,r=e.state,l=e.valid,u=e.invalid,d=e.tag,f=e.addon,m=e.static,j=e.plaintext,h=e.innerRef,g=Object(s.a)(e,["className","cssModule","type","bsSize","state","valid","invalid","tag","addon","static","plaintext","innerRef"]),v=["radio","checkbox"].indexOf(c)>-1,y=new RegExp("\\D","g"),x=d||("select"===c||"textarea"===c?c:"input"),E="form-control";j||m?(E+="-plaintext",x=d||"input"):"file"===c?E+="-file":v&&(E=f?null:"form-check-input"),r&&"undefined"===typeof l&&"undefined"===typeof u&&("danger"===r?u=!0:"success"===r&&(l=!0)),g.size&&y.test(g.size)&&(Object(b.n)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=g.size,delete g.size);var O=Object(b.i)(p()(t,u&&"is-invalid",l&&"is-valid",!!i&&"form-control-"+i,E),a);return("input"===x||d&&"function"===typeof d)&&(g.type=c),!g.children||j||m||"select"===c||"string"!==typeof x||"select"===x||(Object(b.n)('Input with a type of "'+c+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),o.a.createElement(x,Object(n.a)({},g,{ref:h,className:O}))},t}(o.a.Component);m.propTypes=f,m.defaultProps={type:"text"},t.a=m}}]);
//# sourceMappingURL=9.ec9c7b1b.chunk.js.map