(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{328:function(e,a,t){"use strict";t.d(a,"h",function(){return r}),t.d(a,"g",function(){return s}),t.d(a,"c",function(){return c}),t.d(a,"b",function(){return m}),t.d(a,"a",function(){return o}),t.d(a,"d",function(){return u}),t.d(a,"f",function(){return i}),t.d(a,"e",function(){return d});var l=t(8),n={method:"get",baseURL:t(111).d,responseType:"json",params:{request:null,range:null}},r=(Object(l.a)({},n,{params:Object(l.a)({},n.params,{request:"SUBINDEXCURRENT"})}),Object(l.a)({},n,{params:Object(l.a)({},n.params,{request:"SUBINDEXOPEN"})}),Object(l.a)({},n,{params:Object(l.a)({},n.params,{request:"SUBINDEXYEARTURNOVER"})})),s=Object(l.a)({},n,{params:Object(l.a)({},n.params,{request:"NEPSEWEEKMONTHYEAR"})}),c=Object(l.a)({},n,{params:Object(l.a)({},n.params,{request:"COMPANYINFO",symbol:"ADBL"})}),m=Object(l.a)({},n,{params:Object(l.a)({},n.params,{request:"COMPANYFINANCIAL",symbol:"ADBL"})}),o=Object(l.a)({},n,{method:"post",params:Object(l.a)({},n.params,{request:"COMPANYCURRENT"})}),u=Object(l.a)({},n,{method:"post",params:Object(l.a)({},n.params,{request:"COMPANYPREVIOUS"})}),i=Object(l.a)({},n,{params:Object(l.a)({},n.params,{request:"CONTRACTNUMBER"})}),d=Object(l.a)({},n,{params:Object(l.a)({},n.params,{request:"COMPANYRETURN",symbol:"ADBL"})})},660:function(e,a,t){},791:function(e,a,t){"use strict";t.r(a);var l=t(72),n=t(398),r=t(109),s=t.n(r),c=t(1),m=t.n(c),o=t(365),u=t(662),i=t(388),d=t(389),E=t(390),b=t(73),g=t(74),p=t(513),h=t(775),v=t(113),S=t(328),y=t(115),N=t(342),f=t(343),O=t(360),x=t(345),j=t(361),k=t(344),w=t(784),I=t(364),C=t(8),F={method:"get",baseURL:t(111).b,responseType:"json",params:{request:null}},A=Object(C.a)({},F,{params:Object(C.a)({},F.params,{request:"SUBINDEXYEARCLOSEPOINT"})}),T=t(387),R=t.n(T);t(660);function L(e){return e.code}function q(e){return m.a.createElement("span",null,e.code)}var P=function(e){function a(e){var t;return Object(N.a)(this,a),(t=Object(O.a)(this,Object(x.a)(a).call(this,e))).onChange=function(e,a){var l=a.newValue;a.method;t.setState({value:l})},t.onSuggestionsFetchRequested=function(e){var a=e.value;t.setState({suggestions:t.getSuggestions(a)})},t.onSuggestionsClearRequested=function(){t.setState({suggestions:[]})},t.onSuggestionSelected=function(e,a){var l=a.suggestion;a.suggestionValue,a.suggestionIndex,a.sectionIndex,a.method;t.props.itemSelected(l.code)},t.state={value:"",suggestions:[]},t}return Object(j.a)(a,e),Object(f.a)(a,[{key:"getSuggestions",value:function(e){var a=e.trim().replace(/[.*+?^${}()|[\]\\]/g,"\\$&");if(""===a)return[];var t=new RegExp("^"+a,"i");return console.log("choices",this.props.choices),this.props.choices.filter(function(e){return t.test(e.code)})}},{key:"render",value:function(){var e=this.state,a=e.value,t=e.suggestions,l={placeholder:this.props.placeholder,value:a,onChange:this.onChange};return m.a.createElement(R.a,{suggestions:t,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,onSuggestionSelected:this.onSuggestionSelected,getSuggestionValue:L,renderSuggestion:q,inputProps:l})}}]),a}(m.a.Component),V=[Object(n.getStyle)("--danger"),Object(n.getStyle)("--primary"),Object(n.getStyle)("--success"),Object(n.getStyle)("--warning"),Object(n.getStyle)("--purple"),Object(n.getStyle)("--pink"),Object(n.getStyle)("--teal"),Object(n.getStyle)("--cyan"),Object(n.getStyle)("--orange"),Object(n.getStyle)("--info"),Object(n.getStyle)("--light"),Object(n.getStyle)("--dark"),Object(n.getStyle)("--indigo"),Object(n.getStyle)("--purple"),Object(n.getStyle)("--success")],M={tooltips:{enabled:!0,intersect:!0,mode:"index",position:"nearest"},legend:{labels:{boxWidth:5}},maintainAspectRatio:!1,animation:{duration:1e3},scales:{xAxes:[{type:"time",time:{unit:"day"},ticks:{autoSkip:!0}}],yAxes:[{ticks:{beginAtZero:!0}}]},elements:{point:{radius:0,hitRadius:10,hoverRadius:4,hoverBorderWidth:3}}},D=function(e){function a(e){var t;return Object(N.a)(this,a),(t=Object(O.a)(this,Object(x.a)(a).call(this,e))).removeSymbol=t.removeSymbol.bind(Object(k.a)(Object(k.a)(t))),t.addSymbol=t.addSymbol.bind(Object(k.a)(Object(k.a)(t))),t.state={addSymbol:[],removeSymbol:[],turnover:{}},t}return Object(j.a)(a,e),Object(f.a)(a,[{key:"componentDidMount",value:function(){var e=this;s.a.all([s()(A),s()(S.h)]).then(s.a.spread(function(a,t){var l=t.data[0],n=l.filter(function(e){return"FLOAT"!==e.symbol&&"SENSITIVE"!==e.symbol&&"SENFLOAT"!=e.symbol}).sort(function(e,a){return a.turnover-e.turnover}).slice(0,5).map(function(e){return{code:e.symbol}}),r=n.map(function(e){return e.code}),s=l.filter(function(e){return!r.includes(e.symbol)}).map(function(e){return{code:e.symbol}});e.setState({chartData:a.data,turnover:t.data,addSymbol:s,removeSymbol:n})}))}},{key:"addSymbol",value:function(e){var a=this.state.addSymbol.filter(function(a){return a.code!==e}),t=this.state.removeSymbol.concat([{code:e}]);this.setState({addSymbol:a,removeSymbol:t,animationDuration:1e3})}},{key:"removeSymbol",value:function(e){var a=this.state.removeSymbol.filter(function(a){return a.code!==e}),t=this.state.addSymbol.concat([{code:e}]);this.setState({addSymbol:t,removeSymbol:a})}},{key:"render",value:function(){var e,a,t=this,l=0;this.state.turnover.length>0&&(e=this.state.turnover[0],l=e.filter(function(e){return"NEPSE"===e.symbol})[0].turnover,a=this.state.removeSymbol.map(function(a){return m.a.createElement(d.a,{key:a.code,sm:12,md:!0,className:"mb-sm-2 mb-0 d-md-down-none"},m.a.createElement("div",{className:"text-muted"},a.code),m.a.createElement("strong",null,parseInt(e.filter(function(e){return e.symbol===a.code})[0].turnover).toLocaleString()," (",(e.filter(function(e){return e.symbol===a.code})[0].turnover/l*100).toFixed(2),"%) "),m.a.createElement(u.a,{className:"progress-xs mt-2",color:"info",value:(e.filter(function(e){return e.symbol===a.code})[0].turnover/l*100).toFixed(2)}))}));var r=this.state.removeSymbol.map(function(e,a){return{label:e.code,backgroundColor:"NEPSE"==e.code?Object(n.hexToRgba)(Object(n.getStyle)("--danger"),10):Object(n.hexToRgba)(Object(n.getStyle)("--danger"),0),borderColor:Object(n.hexToRgba)(V[a],100),pointHoverBackgroundColor:"#fff",borderWidth:2,data:t.state.chartData[e.code].data,borderDash:"NEPSE"===e.code?[2,2]:[]}});return m.a.createElement(b.a,null,m.a.createElement(p.a,null,m.a.createElement(i.a,null,m.a.createElement(d.a,{sm:"2"},m.a.createElement(w.a,{className:"mb-0"},m.a.createElement("strong",null,"Yearly Top Indexes"))),m.a.createElement(d.a,{sm:"5",className:"float-left"},m.a.createElement(P,{choices:this.state.addSymbol,itemSelected:this.addSymbol,placeholder:"Add Index"})),m.a.createElement(d.a,{sm:"5",className:"float-right"},m.a.createElement(P,{choices:this.state.removeSymbol,itemSelected:this.removeSymbol,placeholder:"Remove Index"})),m.a.createElement(d.a,Object(y.a)({sm:"4",className:"d-none d-sm-inline-block"},"className","float-right"))),m.a.createElement("div",{className:"chart-wrapper",style:{height:"300px",marginTop:"40px"}},m.a.createElement(o.b,{data:{datasets:r},options:M,height:1300}))),m.a.createElement(I.a,null,m.a.createElement(i.a,{className:"text-center"},a)))}}]),a}(c.Component),U=t(71),B={scaleShowValues:!0,scales:{yAxes:[{ticks:{beginAtZero:!0}}],xAxes:[{ticks:{autoSkip:!1}}]}};a.default=function(e){var a=Object(c.useState)(!0),t=Object(l.a)(a,2),r=t[0],y=t[1],N=Object(c.useState)("top-gainers"),f=Object(l.a)(N,2),O=f[0],x=f[1],j=Object(c.useState)("subIndex"),k=Object(l.a)(j,2),w=k[0],I=k[1],C=Object(c.useState)(),F=Object(l.a)(C,2),A=F[0],T=F[1],R=Object(c.useState)({gainers:null,losers:null,turnover:null,transactions:null,shares:null,scripts:null}),L=Object(l.a)(R,2),q=L[0],P=L[1],V=Object(c.useState)(),M=Object(l.a)(V,2),Y=M[0],W=M[1],X=Object(c.useState)(),H=Object(l.a)(X,2),z=H[0],J=H[1],Z=Object(c.useState)({week:null,month:null,year:null}),$=Object(l.a)(Z,2),G=$[0],K=$[1],Q=Object(c.useContext)(U.a).market,_=function(){console.log("network request initiate"),s.a.all([s()(v.f),s()(v.c),s()(v.b),s()(v.a),s()(S.g)]).then(s.a.spread(function(e,a,t,l,n){T(e.data),P(a.data),W(t.data),J(l.data),K(n.data)})),console.log("network request end")},ee=function(e){e.preventDefault(),x(e.target.id)},ae=function(e){e.preventDefault(),I(e.target.id)};Object(c.useEffect)(function(){var e;if(_(),"Live"==Q)return e=setInterval(_,3e4),function(){clearInterval(e)}},[Q]),Object(c.useEffect)(function(){var e;if("Live"==Q)return e=setInterval(function(){y(!r)},600),function(){clearInterval(e)};y(!0)});var te,le,ne,re,se,ce,me,oe,ue,ie=0,de=[],Ee=[],be=[],ge=[],pe=[],he=[],ve=[],Se=[];if(A&&(ne=A.tableType.indexOf(O),te=A.heading[ne].map(function(e){return m.a.createElement("th",{key:e},m.a.createElement("h5",null,e))}),le=A.data[ne].map(function(e,a){return m.a.createElement("tr",{key:e[0]},e.map(function(e){return m.a.createElement("td",{key:e},m.a.createElement("b",null,e))}))})),Y&&z&&((ie=parseFloat(Y.NEPSE[2].replace(/\,/g,""))-parseFloat(z.NEPSE[2].replace(/\,/g,"")))>0?(oe="brand-card-header bg-success",ue="text-success"):ie<0?(oe="brand-card-header bg-danger",ue="text-danger"):(oe="brand-card-header bg-primary",ue="text-primary"),Object.keys(Y).map(function(e){["tradeTime","tradeStartsIn"].includes(e)||(se=parseFloat(Y[e][2].replace(/\,/g,""))-parseFloat(z[e][2].replace(/\,/g,"")),["NEPSE","FLOAT","SENSITIVE","SENFLOAT"].includes(e)?(be.push(e),ge.push(Y[e][1].replace(/\,/g,"")),he.push(Object(n.getStyle)("--primary"))):(de.push(e),Ee.push(Y[e][1].replace(/\,/g,"")),pe.push(Object(n.getStyle)("--primary"))),["NEPSE","FLOAT","SENSITIVE","SENFLOAT"].includes(e)?"tradeTime"!==e&&Se.push(m.a.createElement("div",{key:e,className:"progress-group"},m.a.createElement("div",{className:"progress-group-header"},m.a.createElement("span",{className:"title"},e," ",m.a.createElement("span",{className:se>=0?"text-success ml-auto font-weight-bold":"text-danger ml-auto font-weight-bold"},Y[e][2]," | ",se>=0?"+":"-",Y[e][3]),m.a.createElement("small",{className:se>=0?"text-success":"text-danger"},"(",Y[e][4],"%)")),m.a.createElement("span",{className:"ml-auto font-weight-bold"},Y[e][1]," ")),m.a.createElement("div",{className:"progress-group-bars"},m.a.createElement(u.a,{className:"progress-xs",color:se>=0?"success":"danger",value:10*Y[e][4]})))):ve.push(m.a.createElement("div",{key:e,className:"progress-group"},m.a.createElement("div",{className:"progress-group-header"},m.a.createElement("span",{className:"title"},e," ",m.a.createElement("span",{className:se>=0?"text-success ml-auto font-weight-bold":"text-danger ml-auto font-weight-bold"},Y[e][2]," | ",se>=0?"+":"-",Y[e][3]),m.a.createElement("small",{className:se>=0?"text-success":"text-danger"},"(",Y[e][4],"%)")),m.a.createElement("span",{className:"ml-auto font-weight-bold"},Y[e][1]," ")),m.a.createElement("div",{className:"progress-group-bars"},m.a.createElement(u.a,{className:"progress-xs",color:se>=0?"success":"danger",value:10*Y[e][4]})))))}),ce={labels:de,datasets:[{data:Ee,backgroundColor:pe,label:"Volume"}]},me={labels:be,datasets:[{data:ge,backgroundColor:he,label:"Volume"}]}),G.week){var ye,Ne,fe,Oe,xe,je,ke=parseFloat(Y.NEPSE[2].replace(/\,/g,""));ke>parseFloat(G.week.maximum)?(ye="text-white bg-success",Oe="above"):ke<parseFloat(G.week.minimum)?(ye="text-white bg-danger",Oe="below"):(ye="text-white bg-primary",Oe="within"),ke>parseFloat(G.month.maximum)?(Ne="text-white bg-success",xe="above"):ke<parseFloat(G.month.minimum)?(Ne="text-white bg-danger",xe="below"):(Ne="text-white bg-primary",xe="within"),ke>parseFloat(G.year.maximum)?(fe="text-white bg-success",je="above"):ke<parseFloat(G.year.minimum)?(fe="text-white bg-danger",je="below"):(fe="text-white bg-primary",je="within"),re=m.a.createElement(i.a,null,m.a.createElement(d.a,{className:"mb-4",xs:"12",sm:"6",lg:"3"},m.a.createElement(c.Suspense,{fallback:m.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},m.a.createElement("div",null,m.a.createElement("div",{className:"brand-card"},m.a.createElement("div",{className:oe},m.a.createElement("div",{className:"text-center"},m.a.createElement(E.a,{in:r},m.a.createElement("small",null,Y.tradeTime)),m.a.createElement("h1",null,Y.NEPSE[2]))),m.a.createElement("div",{className:"brand-card-body"},m.a.createElement("div",null,m.a.createElement("strong",{className:ue}," ",(ie>=0?1:-1)*Y.NEPSE[3]," "),m.a.createElement("small",{className:ue},"(",Y.NEPSE[4],"%)"),m.a.createElement("div",{className:"text-muted"},"Change")),m.a.createElement("div",null,m.a.createElement("small",null,q.turnover),m.a.createElement("div",{className:"text-muted"},"Turnover"))))))),m.a.createElement(d.a,{className:"mb-4",xs:"12",sm:"6",lg:"3"},m.a.createElement(b.a,null,m.a.createElement(g.a,{className:"bg-gray-500 text-white"},m.a.createElement("div",null,"Weekly Summary"),m.a.createElement("small",{className:"text-muted"},"Nepse is ",Oe," weekly range.")),m.a.createElement(p.a,{className:ye},m.a.createElement("div",null,"Maximum | ",m.a.createElement("small",null,parseFloat(G.week.maximum).toLocaleString())),m.a.createElement("div",null,"Minimum | ",m.a.createElement("small",null,parseFloat(G.week.minimum).toLocaleString())),m.a.createElement("div",null,"Avg. Volume | ",m.a.createElement("small",null,parseFloat(G.week.avgVolume).toLocaleString()))))),m.a.createElement(d.a,{className:"mb-4",xs:"12",sm:"6",lg:"3"},m.a.createElement(b.a,{className:"h-90"},m.a.createElement(g.a,{className:"bg-gray-600 text-white"},m.a.createElement("div",null,"Monthly Summary "),m.a.createElement("small",{className:"text-muted"},"Nepse is ",xe," monthly range.")),m.a.createElement(p.a,{className:Ne},m.a.createElement("div",null,"Maximum | ",m.a.createElement("small",null,parseFloat(G.month.maximum).toLocaleString())),m.a.createElement("div",null,"Minimum | ",m.a.createElement("small",null,parseFloat(G.month.minimum).toLocaleString())),m.a.createElement("div",null,"Avg. Volume | ",m.a.createElement("small",null,parseFloat(G.month.avgVolume).toLocaleString()))))),m.a.createElement(d.a,{className:"mb-4",xs:"12",sm:"6",lg:"3"},m.a.createElement(b.a,{className:"h-75"},m.a.createElement(g.a,{className:"bg-gray-700 text-white"},m.a.createElement("div",null,"Yearly Summary"),m.a.createElement("small",{className:"text-muted"},"Nepse is ",je," yearly range.")),m.a.createElement(p.a,{className:fe},m.a.createElement("div",null,"Maximum | ",m.a.createElement("small",null,parseFloat(G.year.maximum).toLocaleString())),m.a.createElement("div",null,"Minimum | ",m.a.createElement("small",null,parseFloat(G.year.minimum).toLocaleString())),m.a.createElement("div",null,"Avg. Volume | ",m.a.createElement("small",null,parseFloat(G.year.avgVolume).toLocaleString()))))))}return m.a.createElement("div",{className:"animated fadeIn"},re,m.a.createElement(i.a,null,m.a.createElement(d.a,{className:"px-0"},m.a.createElement("div",{className:"chart-wrapper d-none d-lg-block"},m.a.createElement(D,null)))),m.a.createElement(i.a,null,m.a.createElement(d.a,{className:"mb-4",xs:"12",sm:"6",lg:"6"},m.a.createElement(b.a,{className:"h-100"},m.a.createElement(g.a,{className:"bg-info"},"Sub Indexes"),m.a.createElement(p.a,null,m.a.createElement(i.a,null,m.a.createElement(d.a,{xs:"12",md:"12",xl:"12"},ve))))),m.a.createElement(d.a,{xs:"12",sm:"6",lg:"6"},m.a.createElement(i.a,null,m.a.createElement(d.a,{sm:"12"},m.a.createElement(b.a,null,m.a.createElement(g.a,{className:"bg-info"},"Indexes"),m.a.createElement(p.a,null,Se)))),m.a.createElement(b.a,null,m.a.createElement(g.a,{className:"bg-info"},"Volume"),m.a.createElement(p.a,null,m.a.createElement(i.a,null,m.a.createElement(d.a,{sm:"6"},m.a.createElement("div",{className:"subIndex"==w?"callout callout-info alert alert-info":"callout callout-info"},m.a.createElement("a",{id:"subIndex",href:"#",onClick:ae},"Sub Indexes"))),m.a.createElement(d.a,{sm:"6"},m.a.createElement("div",{className:"index"==w?"callout callout-info alert alert-info":"callout callout-info"},m.a.createElement("a",{id:"index",href:"#",onClick:ae},"Indexes")))),m.a.createElement(i.a,null,"subIndex"==w?m.a.createElement(o.a,{type:"horizontalBar",data:ce,options:B}):m.a.createElement(o.a,{data:me,options:B})))))),m.a.createElement(i.a,null,m.a.createElement(d.a,null,m.a.createElement(b.a,null,m.a.createElement(g.a,{className:"bg-info"},"Market Highlights"),m.a.createElement(p.a,null,m.a.createElement(i.a,null,m.a.createElement(d.a,{lg:"2",md:"4",sm:"6"},m.a.createElement("div",{className:"top-gainers"==O?"callout callout-success alert alert-success":"callout callout-success"},m.a.createElement("small",{className:"text-muted"},m.a.createElement("a",{href:"#",id:"top-gainers",onClick:ee},"Gainers")),m.a.createElement("br",null),m.a.createElement("strong",{className:"h5"}," ",q.gainers))),m.a.createElement(d.a,{lg:"2",md:"4",sm:"6"},m.a.createElement("div",{className:"top-losers"==O?"callout callout-danger alert alert-danger":"callout callout-danger"},m.a.createElement("small",{className:"text-muted"},m.a.createElement("a",{id:"top-losers",href:"#",onClick:ee},"Losers")),m.a.createElement("br",null),m.a.createElement("strong",{className:"h5"},q.losers))),m.a.createElement(d.a,{lg:"2",md:"4",sm:"6"},m.a.createElement("div",{className:"top-by-turnover"==O?"callout callout-primary alert alert-info":"callout callout-primary"},m.a.createElement("small",{className:"text-muted"},m.a.createElement("a",{id:"top-by-turnover",href:"#",onClick:ee},"Turnover")),m.a.createElement("br",null),m.a.createElement("strong",{className:"h5"},q.turnover))),m.a.createElement(d.a,{lg:"2",md:"4",sm:"6"},m.a.createElement("div",{className:"top-by-transaction"==O?"callout callout-primary alert alert-info":"callout callout-primary"},m.a.createElement("small",{className:"text-muted"},m.a.createElement("a",{id:"top-by-transaction",href:"#",onClick:ee},"Transaction")),m.a.createElement("br",null),m.a.createElement("strong",{className:"h5"},q.transactions))),m.a.createElement(d.a,{lg:"2",md:"4",sm:"6"},m.a.createElement("div",{className:"top-by-shares"==O?"callout callout-primary alert alert-info":"callout callout-primary"},m.a.createElement("small",{className:"text-muted"},m.a.createElement("a",{id:"top-by-shares",href:"#",onClick:ee},"Shares")),m.a.createElement("br",null),m.a.createElement("strong",{className:"h5"},q.shares))),m.a.createElement(d.a,{lg:"2",md:"4",sm:"6"},m.a.createElement("div",{className:"callout callout-dark"},m.a.createElement("small",{className:"text-muted"},"Scripts"),m.a.createElement("br",null),m.a.createElement("strong",{className:"h5"},q.scripts)))),m.a.createElement("br",null),m.a.createElement(h.a,{hover:!0,bordered:!0,responsive:!0,size:"sm"},m.a.createElement("thead",{className:"bg-primary"},m.a.createElement("tr",null,te)),m.a.createElement("tbody",null,le)))))))}}}]);
//# sourceMappingURL=15.bbfeffaf.chunk.js.map