(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{29:function(e,t,n){},31:function(e,t,n){},39:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){"use strict";n.r(t);var s=n(32),r=n.n(s),a=n(7),i=n(8),c=n(3),u=n(10),o=n(9),l=n(1),h=n.n(l),j=n(15),b=n(14),d=(n(39),n(0));var p=Object(b.g)((function(e){return Object(d.jsx)("div",{className:"navigation",children:Object(d.jsx)("nav",{className:"navbar navbar-expand navbar-dark bg-dark",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)(j.b,{class:"navbar-brand",to:"/",children:"Trivia Website"}),Object(d.jsx)("div",{children:Object(d.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(d.jsx)("li",{className:"nav-item  ".concat("/"===e.location.pathname?"active":""),children:Object(d.jsxs)(j.b,{className:"nav-link",to:"/HomePage",children:["Home",Object(d.jsx)("span",{className:"sr-only",children:"(current)"})]})}),Object(d.jsx)("li",{className:"nav-item  ".concat("/about"===e.location.pathname?"active":""),children:Object(d.jsx)(j.b,{className:"nav-link",to:"/browseQuizzes",children:"Browse Quizzes"})}),Object(d.jsx)("li",{className:"nav-item  ".concat("/about"===e.location.pathname?"active":""),children:Object(d.jsx)(j.b,{className:"nav-link",to:"/buildQuiz",children:"Build A Quiz"})}),Object(d.jsx)("li",{className:"nav-item  ".concat("/about"===e.location.pathname?"active":"")})]})})]})})})})),O=(n(46),n.p,n(47),n(48),n(16));var f=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Link",children:[Object(d.jsx)("div",{className:"image-container",children:Object(d.jsx)("img",{src:this.props.picture,alt:"ai photo"})}),Object(d.jsx)("div",{className:"link",children:Object(d.jsx)(j.b,{to:this.props.link,children:this.props.linktext})})]})}}]),n}(h.a.Component),v=n.p+"static/media/desk setup.bad85fd3.jpg",m=n.p+"static/media/workspace.1c278fd2.jpg",x=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"LinksList",children:[Object(d.jsx)(f,{linktext:"Build a Quiz",link:"/buildQuiz",picture:v}),Object(d.jsx)(f,{linktext:"Browse Quizzes",link:"/browseQuizzes",picture:m}),Object(d.jsx)(f,{linktext:"Stats",link:"/stats",picture:v})]})}}]),n}(h.a.Component),w=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).state={games:[]},s}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsx)("div",{className:"home",children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{children:"Trivia Game"}),Object(d.jsx)(x,{})]})})}}]),n}(h.a.Component);n(49);var k=n(4),g=n.n(k),z=n(11),y=n(5),q=(n(29),n(51)),Q={url:"/",getQuiz:function(e,t){return Object(z.a)(g.a.mark((function t(){var n,s;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,q("".concat(Q.url,"quiz/").concat(e),{headers:{"content-type":"application/json",connection:"keep-alive"}});case 3:if(!(n=t.sent).ok){t.next=9;break}return t.next=7,n.json();case 7:return s=t.sent,t.abrupt("return",Object.values(s));case 9:throw new Error("Request failed!");case 12:t.prev=12,t.t0=t.catch(0),document.write(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))()},postQuiz:function(e,t,n){return Object(z.a)(g.a.mark((function s(){var r,a,i,c;return g.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,r=JSON.stringify({user:t,question_dict:n}),a={"content-type":"application/json",connection:"keep-alive"},s.next=5,q("".concat(Q.url,"quiz/").concat(e),{method:"POST",headers:a,body:r});case 5:if(!(i=s.sent).ok){s.next=11;break}return s.next=9,i.json();case 9:return c=s.sent,s.abrupt("return",c.message);case 11:throw new Error("Request failed!");case 14:s.prev=14,s.t0=s.catch(0),document.write(s.t0);case 17:case"end":return s.stop()}}),s,null,[[0,14]])})))()},deleteQuiz:function(e){return Object(z.a)(g.a.mark((function t(){var n,s,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={"content-type":"application/json",connection:"keep-alive"},t.next=4,q("".concat(Q.url,"quiz/").concat(e),{method:"DELETE",headers:n});case 4:if(!(s=t.sent).ok){t.next=10;break}return t.next=8,s.json();case 8:return r=t.sent,t.abrupt("return",r.message);case 10:throw new Error("Request failed!");case 13:t.prev=13,t.t0=t.catch(0),document.write(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))()},putQuiz:function(e,t,n,s){return Object(z.a)(g.a.mark((function r(){var a,i,c,u,o,l,h;return g.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,a={"content-type":"application/json",connection:"keep-alive"},"add_question"!==t){r.next=24;break}return i=JSON.stringify({add_or_remove:"True",user:s,question_added:n}),r.next=6,q("".concat(Q.url,"quiz/").concat(e),{method:"PUT",headers:a,body:i});case 6:if(!(c=r.sent).ok){r.next=14;break}return r.next=10,c.json();case 10:return u=r.sent,r.abrupt("return",u.message);case 14:if("remove_question"!==t){r.next=24;break}return o=JSON.stringify({add_or_remove:"True",user:s,question_removed:n}),r.next=18,q("".concat(Q.url,"quiz/").concat(e),{method:"PUT",headers:a,body:o});case 18:if(!(l=r.sent).ok){r.next=24;break}return r.next=22,l.json();case 22:return h=r.sent,r.abrupt("return",h.message);case 24:throw new Error("Request failed!");case 27:r.prev=27,r.t0=r.catch(0),document.write(r.t0);case 30:case"end":return r.stop()}}),r,null,[[0,27]])})))()},getQuizzes:function(){return Object(z.a)(g.a.mark((function e(){var t,n,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={"content-type":"application/json",connection:"keep-alive"},e.next=4,q("".concat(Q.url,"quizzes"),{headers:t});case 4:if(!(n=e.sent).ok){e.next=10;break}return e.next=8,n.json();case 8:return s=e.sent,e.abrupt("return",s.quizzes);case 10:throw new Error("Request failed!");case 13:e.prev=13,e.t0=e.catch(0),document.write(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()},register:function(e,t){return Object(z.a)(g.a.mark((function n(){var s,r,a,i;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,s={"content-type":"application/json",connection:"keep-alive"},r=JSON.stringify({password:t}),n.next=5,q("".concat(Q.url,"user/").concat(e),{method:"POST",headers:s,body:r});case 5:if(!(a=n.sent).ok){n.next=11;break}return n.next=9,a.json();case 9:return i=n.sent,n.abrupt("return",i.message);case 11:throw new Error("Request failed!");case 14:n.prev=14,n.t0=n.catch(0),document.write(n.t0);case 17:case"end":return n.stop()}}),n,null,[[0,14]])})))()},auth:function(e,t){return Object(z.a)(g.a.mark((function n(){var s,r,a,i;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,s={"content-type":"application/json",connection:"keep-alive"},r=JSON.stringify({username:e,password:t}),n.next=5,q("".concat(Q.url,"auth"),{method:"POST",headers:s,body:r});case 5:if(!(a=n.sent).ok){n.next=11;break}return n.next=9,a.json();case 9:return i=n.sent,n.abrupt("return",i.access_token);case 11:throw new Error("Request failed!");case 14:n.prev=14,n.t0=n.catch(0),document.write(n.t0);case 17:case"end":return n.stop()}}),n,null,[[0,14]])})))()},updatePercentage:function(e,t,n){return Object(z.a)(g.a.mark((function s(){var r,a,i,c;return g.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,r={"content-type":"application/json",connection:"keep-alive"},a=JSON.stringify({percentage:t,quiz_name:e}),s.next=5,q("".concat(Q.url,"user/").concat(n),{method:"PUT",body:a,headers:r});case 5:if(!(i=s.sent).ok){s.next=11;break}return s.next=9,i.json();case 9:return c=s.sent,s.abrupt("return",c.message);case 11:throw new Error("Request failed!");case 14:s.prev=14,s.t0=s.catch(0),document.write(s.t0);case 17:case"end":return s.stop()}}),s,null,[[0,14]])})))()},getStats:function(e){return Object(z.a)(g.a.mark((function t(){var n,s;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={"content-type":"application/json",connection:"keep-alive"},t.next=4,q("".concat(Q.url,"user/").concat(e),{headers:n});case 4:if(!(s=t.sent).ok){t.next=9;break}return t.next=8,s.json();case 8:return t.abrupt("return",t.sent);case 9:throw new Error("Request failed!");case 12:t.prev=12,t.t0=t.catch(0),document.write(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))()}},A=Q;var N=function(e){var t=Object(b.f)();function n(){return(n=Object(z.a)(g.a.mark((function n(){var s;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.auth(e.username,e.password).then((function(e){return e}));case 2:(s=n.sent)&&(e.setToken(s),e.setUser(e.username),t.push("/loginEnd"));case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(d.jsx)(O.a,{block:!0,size:"lg",type:"button",onClick:function(){return n.apply(this,arguments)},children:"Log In"})},C=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).state={username:"",password:""},s.handleSubmit=s.handleSubmit.bind(Object(c.a)(s)),s.validateForm=s.validateForm.bind(Object(c.a)(s)),s.setUsername=s.setUsername.bind(Object(c.a)(s)),s.setPassword=s.setPassword.bind(Object(c.a)(s)),s.login=s.login.bind(Object(c.a)(s)),s}return Object(i.a)(n,[{key:"validateForm",value:function(){return this.state.username.length>0&&this.state.password.length>0}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"setUsername",value:function(e){this.setState({username:e})}},{key:"setPassword",value:function(e){this.setState({password:e})}},{key:"login",value:function(){var e=Object(z.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.auth(this.state.username,this.state.password).then((function(e){return e}));case 2:(t=e.sent)&&(this.props.setToken(t),this.props.setUser(this.state.username),alert("logged in"));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:"Login",children:Object(d.jsxs)(y.a,{onSubmit:this.handleSubmit,children:[Object(d.jsxs)(y.a.Group,{size:"lg",controlId:"email",children:[Object(d.jsx)(y.a.Label,{children:"Username"}),Object(d.jsx)(y.a.Control,{autoFocus:!0,type:"text",value:this.username,onChange:function(t){return e.setUsername(t.target.value)}})]}),Object(d.jsxs)(y.a.Group,{size:"lg",controlId:"password",children:[Object(d.jsx)(y.a.Label,{children:"Password"}),Object(d.jsx)(y.a.Control,{type:"password",value:this.password,onChange:function(t){return e.setPassword(t.target.value)}})]}),Object(d.jsx)(N,{setToken:this.props.setToken,username:this.state.username,password:this.state.password,setUser:this.props.setUser})]})})}}]),n}(h.a.Component);var S=function(){var e=Object(b.f)();return Object(d.jsx)(O.a,{block:!0,size:"lg",type:"button",onClick:function(){e.push("/HomePage")},children:"Main Menu"})},U=(n(53),function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"login-end-page",children:[Object(d.jsx)("div",{className:"login-text",children:Object(d.jsx)("h2",{children:"Logged In!"})}),Object(d.jsx)("div",{className:"login-home-button",children:Object(d.jsx)(S,{})})]})}}]),n}(h.a.Component));var L=function(e){var t=Object(b.f)();function n(){return(n=Object(z.a)(g.a.mark((function n(){var s;return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.register(e.username,e.password).then((function(e){return e}));case 2:if("User created successfully."!==n.sent){n.next=9;break}return e.setUserCreated(),n.next=7,A.auth(e.username,e.password).then((function(e){return e}));case 7:(s=n.sent)&&(e.setToken(s),e.setUser(e.username),t.push("/registerEnd"));case 9:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(d.jsx)(O.a,{block:!0,size:"lg",type:"button",onClick:function(){return n.apply(this,arguments)},children:"Sign Up"})},T=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).state={redirect:!1,username:"",password:"",userCreated:!1},s.handleSubmit=s.handleSubmit.bind(Object(c.a)(s)),s.validateForm=s.validateForm.bind(Object(c.a)(s)),s.setUsername=s.setUsername.bind(Object(c.a)(s)),s.setPassword=s.setPassword.bind(Object(c.a)(s)),s.serverRegister=s.serverRegister.bind(Object(c.a)(s)),s.setUserCreated=s.setUserCreated.bind(Object(c.a)(s)),s}return Object(i.a)(n,[{key:"validateForm",value:function(){return this.state.username.length>0&&this.state.password.length>0}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"setUsername",value:function(e){this.setState({username:e})}},{key:"setPassword",value:function(e){this.setState({password:e})}},{key:"setUserCreated",value:function(){this.state.userCreated||this.setState({userCreated:!0})}},{key:"setRedirect",value:function(){this.setState({redirect:!0})}},{key:"serverRegister",value:function(){var e=Object(z.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.register(this.state.username,this.state.password).then((function(e){return e}));case 2:if("User created successfully."!==e.sent){e.next=9;break}return this.setUserCreated(),e.next=7,A.auth(this.state.username,this.state.password).then((function(e){return e}));case 7:(t=e.sent)&&(this.props.setToken(t),this.props.setUser(this.state.username));case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:"Login",children:Object(d.jsxs)(y.a,{onSubmit:this.handleSubmit,children:[Object(d.jsxs)(y.a.Group,{size:"lg",controlId:"email",children:[Object(d.jsx)(y.a.Label,{children:"Username"}),Object(d.jsx)(y.a.Control,{autoFocus:!0,type:"text",value:this.username,onChange:function(t){return e.setUsername(t.target.value)}})]}),Object(d.jsxs)(y.a.Group,{size:"lg",controlId:"password",children:[Object(d.jsx)(y.a.Label,{children:"Password"}),Object(d.jsx)(y.a.Control,{type:"password",value:this.password,onChange:function(t){return e.setPassword(t.target.value)}})]}),Object(d.jsxs)(y.a.Group,{size:"lg",controlId:"password",children:[Object(d.jsx)(y.a.Label,{children:"Confirm Password"}),Object(d.jsx)(y.a.Control,{type:"password",value:this.password,onChange:function(t){return e.setPassword(t.target.value)}})]}),Object(d.jsx)(L,{username:this.state.username,password:this.state.password,setToken:this.props.setToken,setUserCreated:this.setUserCreated,setUser:this.props.setUser}),Object(d.jsx)(j.b,{to:"/login",children:"Already signed up? Log in"})]})})}}]),n}(h.a.Component),P=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"signup-end-page",children:[Object(d.jsx)("div",{className:"sign-up-text",children:Object(d.jsx)("h2",{children:"Signed Up!"})}),Object(d.jsx)("div",{className:"signup-home-button",children:Object(d.jsx)(S,{})})]})}}]),n}(h.a.Component),I=(n(54),n(21)),E=n(27),_=(n(55),function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).state={question:"",answer:"",falseAnswerOne:"",falseAnswerTwo:"",falseAnswerThree:""},s.setQuestion=s.setQuestion.bind(Object(c.a)(s)),s.setAnswer=s.setAnswer.bind(Object(c.a)(s)),s.setFalseAnswer=s.setFalseAnswer.bind(Object(c.a)(s)),s}return Object(i.a)(n,[{key:"questionObjectReturn",value:function(e){e.preventDefault();var t="question_"+this.props.questionNumber.toString(),n={};n[t]={question:this.state.question,answers:{"correct answer":this.state.answer}},n[t].answers.answer_1=this.state.falseAnswerOne,n[t].answers.answer_2=this.state.falseAnswerTwo,n[t].answers.answer_3=this.state.falseAnswerThree,this.props.addQuestionObj(n),this.setState({question:"",answer:"",falseAnswerOne:"",falseAnswerTwo:"",falseAnswerThree:""})}},{key:"setQuestion",value:function(e){this.setState({question:e})}},{key:"setAnswer",value:function(e){this.setState({answer:e})}},{key:"setFalseAnswer",value:function(e,t){1===t?this.setState({falseAnswerOne:e}):2===t?this.setState({falseAnswerTwo:e}):this.setState({falseAnswerThree:e})}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"Question",children:[Object(d.jsx)("div",{className:"questionNum",children:Object(d.jsxs)("h2",{children:["Question ",this.props.questionNumber]})}),Object(d.jsxs)(y.a,{children:[Object(d.jsxs)(y.a.Group,{size:"lg",controlId:"question",children:[Object(d.jsx)(y.a.Label,{children:"Question"}),Object(d.jsx)(y.a.Control,{autoFocus:!0,type:"text",value:this.state.question,onChange:function(t){return e.setQuestion(t.target.value)}})]}),Object(d.jsxs)(y.a.Group,{size:"lg",controlId:"answer",children:[Object(d.jsx)(y.a.Label,{children:"Answer"}),Object(d.jsx)(y.a.Control,{type:"text",value:this.state.answer,onChange:function(t){return e.setAnswer(t.target.value)}}),Object(d.jsxs)(y.a.Group,{size:"lg",controlId:"wrongAnswer1",children:[Object(d.jsx)(y.a.Label,{children:"Wrong Answer"}),Object(d.jsx)(y.a.Control,{type:"text",value:this.state.falseAnswerOne,onChange:function(t){return e.setFalseAnswer(t.target.value,1)}})]}),Object(d.jsxs)(y.a.Group,{size:"lg",controlId:"wrongAnswer2",children:[Object(d.jsx)(y.a.Label,{children:"Wrong Answer"}),Object(d.jsx)(y.a.Control,{type:"text",value:this.state.falseAnswerTwo,onChange:function(t){return e.setFalseAnswer(t.target.value,2)}})]}),Object(d.jsxs)(y.a.Group,{size:"lg",controlId:"wrongAnswer3",children:[Object(d.jsx)(y.a.Label,{children:"Wrong Answer"}),Object(d.jsx)(y.a.Control,{type:"text",value:this.state.falseAnswerThree,onChange:function(t){return e.setFalseAnswer(t.target.value,3)}})]})]}),Object(d.jsx)(O.a,{block:!0,size:"lg",type:"submit",onClick:function(t){return e.questionObjectReturn(t)},children:"Submit Question"})]})]})}}]),n}(h.a.Component)),F=(n(56),function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).state={quizName:"",questionAmount:""},s.setQuizName=s.setQuizName.bind(Object(c.a)(s)),s.setQuestionAmount=s.setQuizName.bind(Object(c.a)(s)),s.setQuizIntro=s.setQuizIntro.bind(Object(c.a)(s)),s}return Object(i.a)(n,[{key:"setQuizName",value:function(e){this.setState({quizName:e})}},{key:"setQuestionAmount",value:function(e){this.setState({questionAmount:e})}},{key:"setQuizIntro",value:function(){this.props.setQuizName(this.state.quizName),this.props.setQuestionAmount(this.state.questionAmount)}},{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:"quizIntro",children:Object(d.jsxs)(y.a,{onSubmit:this.handleSubmit,children:[Object(d.jsxs)(y.a.Group,{size:"lg",controlId:"quizName",children:[Object(d.jsx)(y.a.Label,{children:"Quiz Name"}),Object(d.jsx)(y.a.Control,{autoFocus:!0,type:"text",value:this.state.quizName,onChange:function(t){return e.setState({quizName:t.target.value})}})]}),Object(d.jsxs)(y.a.Group,{size:"lg",controlId:"questionAmount",children:[Object(d.jsx)(y.a.Label,{children:"Question Amount"}),Object(d.jsx)(y.a.Control,{autoFocus:!0,type:"text",value:this.state.questionAmount,onChange:function(t){return e.setState({questionAmount:t.target.value})}})]}),Object(d.jsx)(O.a,{block:!0,size:"lg",type:"submit",onClick:this.setQuizIntro,children:"Next"})]})})}}]),n}(h.a.Component));n(57);var G=function(e){var t=Object(b.f)();function n(){return(n=Object(z.a)(g.a.mark((function n(){return g.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,A.postQuiz(e.quizName,e.user,e.questionsObj).then((function(e){return e}));case 2:t.push("/makeQuizEndPage");case 3:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return Object(d.jsx)(O.a,{block:!0,size:"lg",type:"button",onClick:function(){return n.apply(this,arguments)},children:"Create Quiz"})},R=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).user=s.props.user,s.state={questionsObj:{},quizName:"",questionAmount:"",counter:1},s.addQuestionObj=s.addQuestionObj.bind(Object(c.a)(s)),s.checkQuizIntro=s.checkQuizIntro.bind(Object(c.a)(s)),s.checkQuestionAmount=s.checkQuestionAmount.bind(Object(c.a)(s)),s.setQuestionAmount=s.setQuestionAmount.bind(Object(c.a)(s)),s.setQuizName=s.setQuizName.bind(Object(c.a)(s)),s.incrementCounter=s.incrementCounter.bind(Object(c.a)(s)),s.sendQuizObj=s.sendQuizObj.bind(Object(c.a)(s)),s.wholeQuizObj={},s}return Object(i.a)(n,[{key:"addQuestionObj",value:function(e){var t=Object.keys(e),n=Object.values(e);this.setState({questionsObj:Object(E.a)(Object(E.a)({},this.state.questionsObj),{},Object(I.a)({},t,n[0]))})}},{key:"checkQuizIntro",value:function(){return 0===this.state.quizName.length&&0===this.state.questionAmount.length}},{key:"setQuizName",value:function(e){this.setState({quizName:e})}},{key:"setQuestionAmount",value:function(e){this.setState({questionAmount:e})}},{key:"checkQuestionAmount",value:function(){return parseInt(this.state.questionAmount)>Object.keys(this.state.questionsObj).length}},{key:"sendQuizObj",value:function(){var e=Object(z.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.postQuiz(this.state.quizName,this.user,this.state.questionsObj).then((function(e){return e}));case 2:t=e.sent,alert(t);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"incrementCounter",value:function(){var e=this.state.counter;this.setState({counter:e++})}},{key:"render",value:function(){var e,t,n;return e=this.checkQuizIntro()?Object(d.jsx)(F,{setQuizName:this.setQuizName,setQuestionAmount:this.setQuestionAmount}):null,t=!this.checkQuizIntro()&&this.checkQuestionAmount()?Object(d.jsx)(_,{addQuestionObj:this.addQuestionObj,questionNumber:Object.keys(this.state.questionsObj).length+1,incrementCounter:this.incrementCounter}):null,n=this.checkQuestionAmount()||this.checkQuizIntro()?null:Object(d.jsx)(G,{quizName:this.state.quizName,user:this.user,questionsObj:this.state.questionsObj}),Object(d.jsxs)("div",{className:"Quiz",children:[e,t,n]})}}]),n}(h.a.Component),D=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Quiz Created"}),Object(d.jsx)(S,{})]})}}]),n}(h.a.Component),M=(n.p,n(58),function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).setQuiz=s.setQuiz.bind(Object(c.a)(s)),s}return Object(i.a)(n,[{key:"setQuiz",value:function(){this.props.setQuiz(this.props.quiz)}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"GameLink",children:[Object(d.jsx)("div",{className:"Game-quiz",children:Object(d.jsx)("h5",{children:this.props.quiz})}),Object(d.jsx)("div",{className:"link",children:Object(d.jsx)(j.b,{to:"/doQuiz",children:Object(d.jsx)("span",{onClick:this.setQuiz,children:"Do Quiz"})})})]})}}]),n}(h.a.Component)),J=(n(59),function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).state={quizzes:""},s.getQuizzes=s.getQuizzes.bind(Object(c.a)(s)),s.setQuiz=s.setQuiz.bind(Object(c.a)(s)),s}return Object(i.a)(n,[{key:"setQuiz",value:function(e){this.props.setQuiz(e)}},{key:"componentDidMount",value:function(){var e=this;this.getQuizzes().then((function(t){return e.setState({quizzes:t})}))}},{key:"getQuizzes",value:function(){var e=Object(z.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.getQuizzes().then((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(0===this.state.quizzes.length)return Object(d.jsx)("span",{children:"Loading Quizzes ... "});var t=this.state.quizzes.map((function(t,n){return Object(d.jsx)(M,{history:e.props.history,setQuiz:e.setQuiz,quiz:t},n)}));return Object(d.jsxs)("div",{className:"GameBrowser",children:[Object(d.jsx)("div",{className:"text",children:Object(d.jsx)("h2",{children:"Game Browser"})}),Object(d.jsx)("div",{className:"gameList",children:t})]})}}]),n}(h.a.Component)),B=(n(60),function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){return Object(a.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"quiz-score",children:[Object(d.jsx)("div",{className:"quiz-score-name",children:this.props.quizName}),Object(d.jsx)("div",{className:"quiz-score-score",children:this.props.quizScore})]})}}]),n}(h.a.Component)),W=(n(61),function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).state={averageScore:"",quizzes:[],quizScores:[]},s.getStats=s.getStats.bind(Object(c.a)(s)),s}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=Object(z.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.getStats().then((function(e){return e}));case 2:t=e.sent,this.setState({averageScore:t.average,quizzes:t.quizzes,quizScores:t.quiz_scores});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getStats",value:function(){var e=Object(z.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.getStats(this.props.user).then((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(0===this.state.quizzes.length)return Object(d.jsx)("span",{children:"Loading Stats ... "});var t=this.state.quizzes.map((function(t,n){return Object(d.jsx)(B,{quizName:t,quizScore:e.state.quizScores[n]})}));return Object(d.jsxs)("div",{className:"stats",children:[Object(d.jsx)("div",{className:"stats-username",children:Object(d.jsx)("h2",{children:this.props.user})}),Object(d.jsx)("div",{className:"stats-average-score",children:Object(d.jsxs)("h4",{children:["Average Score: ",this.state.averageScore]})}),t,Object(d.jsx)(S,{})]})}}]),n}(h.a.Component)),H=n(34),Y=(n(62),function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).answerList=[],s.getCorrectAnswer=s.getCorrectAnswer.bind(Object(c.a)(s)),s.checkUserAnswer=s.checkUserAnswer.bind(Object(c.a)(s)),s.updateAnswerList=s.updateAnswerList.bind(Object(c.a)(s)),s.returnAnsweredQuestion=s.returnAnsweredQuestion.bind(Object(c.a)(s)),s.shuffleArray=s.shuffleArray.bind(Object(c.a)(s)),s}return Object(i.a)(n,[{key:"getCorrectAnswer",value:function(){return this.props.question.answer_dict.correct_answer}},{key:"checkUserAnswer",value:function(e,t){return e===t}},{key:"shuffleArray",value:function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),s=e[t];e[t]=e[n],e[n]=s}return e}},{key:"updateAnswerList",value:function(){var e=[this.props.question.answer_dict.correct_answer];this.props.question.answer_dict.wrong_answers.forEach((function(t){e.push(t)})),this.shuffleArray(e),this.answerList=e}},{key:"returnAnsweredQuestion",value:function(e,t){e.preventDefault();var n=this.getCorrectAnswer(),s=this.checkUserAnswer(t,n);this.props.addAnswer(s)}},{key:"render",value:function(){var e=this;return this.updateAnswerList(),Object(d.jsx)("div",{className:"question",children:Object(d.jsxs)("div",{className:"question-text",children:[Object(d.jsx)("div",{className:"question-count",children:Object(d.jsxs)("span",{children:["Question ",this.props.questionNumber]})}),Object(d.jsx)("div",{className:"question-text",children:this.props.question.question}),Object(d.jsx)("div",{className:"answer-section",children:this.answerList.map((function(t){return Object(d.jsx)("button",{onClick:function(n){return e.returnAnsweredQuestion(n,t)},children:t})}))})]})})}}]),n}(h.a.Component));n(63);var K=function(e){var t=Object(b.f)();function n(){var t=[];return e.userAnswers.map((function(e){return!0===e?t.push(e):null})),Math.floor(100*t.length/e.questionList.length)}function s(){return(s=Object(z.a)(g.a.mark((function s(){var r;return g.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return r=n(),s.next=3,A.updatePercentage(e.quiz,r,e.user).then((function(e){return e}));case 3:"Stats updated."===s.sent?t.push("/statsUpdated"):alert("Error!");case 5:case"end":return s.stop()}}),s)})))).apply(this,arguments)}return Object(d.jsx)(O.a,{block:!0,size:"lg",type:"button",onClick:function(){return s.apply(this,arguments)},children:"Submit Quiz"})},V=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).state={questionList:[],userAnswers:[]},s.getQuiz=s.getQuiz.bind(Object(c.a)(s)),s.getScore=s.getScore.bind(Object(c.a)(s)),s.setQuestionComponent=s.setQuestionComponent.bind(Object(c.a)(s)),s.addAnswer=s.addAnswer.bind(Object(c.a)(s)),s}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.getQuiz().then((function(t){return e.setState({questionList:t[0]})}))}},{key:"getQuiz",value:function(){var e=Object(z.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.getQuiz(this.props.quiz,this.props.jwtToken).then((function(e){return e}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"addAnswer",value:function(e){var t=Object(H.a)(this.state.userAnswers);t.push(e),this.setState({userAnswers:t})}},{key:"showResult",value:function(){return this.state.userAnswers.length<this.state.questionList.length}},{key:"getScore",value:function(){var e=[];return this.state.userAnswers.map((function(t){return!0===t?e.push(t):null})),Math.floor(100*e.length/this.state.questionList.length)}},{key:"updatePercentage",value:function(){var e=Object(z.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.getScore(),e.next=3,A.updatePercentage(this.props.quiz,t,this.props.user).then((function(e){return e}));case 3:n=e.sent,alert(n);case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"setQuestionComponent",value:function(){var e=this.state.questionList[this.state.userAnswers.length];return Object(d.jsx)(Y,{question:e,questionNumber:this.state.userAnswers.length+1,addAnswer:this.addAnswer})}},{key:"render",value:function(){return 0===this.state.questionList.length?Object(d.jsx)("span",{children:"Loading Quiz ... "}):(e=this.showResult()?this.setQuestionComponent():Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("div",{className:"score-text",children:Object(d.jsxs)("h3",{children:["You scored ",this.getScore()," out of 100!"]})}),Object(d.jsx)("div",{className:"submit-button",children:Object(d.jsx)(K,{user:this.props.user,quiz:this.props.quiz,userAnswers:this.state.userAnswers,questionList:this.state.questionList})})]}),Object(d.jsx)("div",{className:"quiz",children:e}));var e}}]),n}(h.a.Component),X=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"statsUpdated",children:["(",Object(d.jsx)("div",{className:"stats-updated-text",children:Object(d.jsx)("h2",{children:"Stats Updated!"})}),Object(d.jsx)("div",{className:"stats-updated-home",children:Object(d.jsx)(S,{})}),")"]})}}]),n}(h.a.Component),Z=(n(31),function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){var s;return Object(a.a)(this,n),(s=t.call(this,e)).state={user:"",jwtToken:"",quiz:""},s.setToken=s.setToken.bind(Object(c.a)(s)),s.setUser=s.setUser.bind(Object(c.a)(s)),s.setQuiz=s.setQuiz.bind(Object(c.a)(s)),s}return Object(i.a)(n,[{key:"shouldComponentUpdate",value:function(e,t,n){return!1}},{key:"setToken",value:function(e){this.setState({jwtToken:e})}},{key:"setUser",value:function(e){this.setState({user:e})}},{key:"setQuiz",value:function(e){this.setState({quiz:e})}},{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(j.a,{children:[Object(d.jsx)(p,{}),Object(d.jsxs)(b.c,{children:[Object(d.jsx)(b.a,{path:"/HomePage",exact:!0,component:function(){return Object(d.jsx)(w,{})}}),Object(d.jsxs)("div",{className:"login",children:[Object(d.jsxs)(b.a,{path:"/login",children:[Object(d.jsx)(C,{setToken:this.setToken,setUser:this.setUser}),Object(d.jsx)(b.a,{path:"/",exact:!0,component:function(){return Object(d.jsx)(T,{setToken:e.setToken,setUser:e.setUser})}})]}),Object(d.jsx)(b.a,{path:"/",exact:!0,component:function(){return Object(d.jsx)(T,{setToken:e.setToken,setUser:e.setUser})}}),Object(d.jsx)(b.a,{path:"/registerEnd",exact:!0,component:function(){return Object(d.jsx)(P,{})}}),Object(d.jsx)(b.a,{path:"/loginEnd",exact:!0,component:function(){return Object(d.jsx)(U,{})}}),Object(d.jsx)(b.a,{path:"/buildQuiz",exact:!0,component:function(){return Object(d.jsx)(R,{user:e.state.user})}}),Object(d.jsx)(b.a,{path:"/doQuiz",exact:!0,component:function(){return Object(d.jsx)(V,{user:e.state.user,jwtToken:e.state.jwtToken,quiz:e.state.quiz})}}),Object(d.jsx)(b.a,{path:"/browseQuizzes",exact:!0,component:function(){return Object(d.jsx)(J,{setQuiz:e.setQuiz})}}),Object(d.jsx)(b.a,{path:"/makeQuizEndPage",exact:!0,component:function(){return Object(d.jsx)(D,{})}}),Object(d.jsx)(b.a,{path:"/statsUpdated",exact:!0,component:function(){return Object(d.jsx)(X,{})}}),Object(d.jsx)(b.a,{path:"/stats",exact:!0,component:function(){return Object(d.jsx)(W,{user:e.state.user})}})]})]})]})})}}]),n}(h.a.PureComponent));r.a.render(Object(d.jsx)(Z,{}),document.getElementById("root")),"serviceWorker"in navigator&&window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}))}},[[64,1,2]]]);
//# sourceMappingURL=main.44faa99c.chunk.js.map