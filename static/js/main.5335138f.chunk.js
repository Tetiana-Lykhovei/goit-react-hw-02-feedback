(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(4),s=n.n(o),r=(n(15),n(5)),i=n(6),b=n(7),d=n(10),u=n(9),l=n(3),j=n.n(l),h=n(0),f=function(e){var t=e.options,n=e.onLeaveFeedback;return Object(h.jsx)("div",{className:j.a.buttons,children:t.map((function(e){return Object(h.jsx)("button",{type:"button",name:e,className:j.a.button,onClick:n,children:e},e)}))})},v=function(e){var t=e.message;return Object(h.jsx)("p",{children:t})},p=function(e){var t=e.title,n=e.children;return Object(h.jsxs)("section",{children:[Object(h.jsx)("h1",{children:t}),n]})},O=n(8),x=n.n(O),k=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,o=e.positivePercentage;return Object(h.jsxs)("div",{className:x.a.statInfo,children:[Object(h.jsxs)("p",{children:["Good: ",t]}),Object(h.jsxs)("p",{children:["Neutral: ",n]}),Object(h.jsxs)("p",{children:["Bad: ",a]}),Object(h.jsxs)("p",{children:["Total: ",c]}),Object(h.jsxs)("p",{children:["Positive feedback: ",o,"%"]})]})},g=(n(17),function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,n=e.countTotalFeedback();return n>0?Math.round(t/n*100):0},e.onLeaveFeedback=function(t){var n=t.target.name;e.setState((function(e){return Object(r.a)({},n,e[n]+1)}))},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=this.countTotalFeedback(),o=this.countPositiveFeedbackPercentage(),s=this.onLeaveFeedback;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(p,{title:"Please leave feedback",children:Object(h.jsx)(f,{options:["good","neutral","bad"],onLeaveFeedback:s})}),c>0?Object(h.jsx)(p,{title:"Statistics",children:Object(h.jsx)(k,{good:t,neutral:n,bad:a,total:c,positivePercentage:o})}):Object(h.jsx)(v,{message:"No feedback given"})]})}}]),n}(a.Component));s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root"))},3:function(e,t,n){e.exports={buttons:"FeedbackOptions_buttons__1wzHr",button:"FeedbackOptions_button__3CJUh"}},8:function(e,t,n){e.exports={statInfo:"Statistics_statInfo__3cUcf"}}},[[18,1,2]]]);
//# sourceMappingURL=main.5335138f.chunk.js.map