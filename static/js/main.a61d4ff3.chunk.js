(this["webpackJsonpreact-murderbook"]=this["webpackJsonpreact-murderbook"]||[]).push([[0],{69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},79:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},87:function(e,t,n){},95:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(17),a=n.n(s),i=(n(69),n(7)),l=(n(70),n(71),n(125)),o=n(1),j=function(e){var t=e.src,n=e.Icon,c=e.title;return Object(o.jsxs)("div",{className:"sidebarRow",children:[t&&Object(o.jsx)(l.a,{src:t}),n&&Object(o.jsx)(n,{}),Object(o.jsx)("h4",{children:c})]})},b=n(110),u=n(111),d=n(112),O=n(113),p=n(114),f=n(115),h=n(116),m={photoURL:n.p+"static/media/jop.84922670.jpg",displayName:"Taylor"},x=function(){return Object(o.jsxs)("div",{className:"sidebar",children:[Object(o.jsx)(j,{src:m.photoURL,title:m.displayName}),Object(o.jsx)(j,{Icon:b.a,title:"Covid-19 Information Center"}),Object(o.jsx)(j,{Icon:u.a,title:"Pages"}),Object(o.jsx)(j,{Icon:d.a,title:"Friends"}),Object(o.jsx)(j,{Icon:O.a,title:"Messanger"}),Object(o.jsx)(j,{Icon:p.a,title:"Marketplace"}),Object(o.jsx)(j,{Icon:f.a,title:"Videos"}),Object(o.jsx)(j,{Icon:h.a,title:"Expand More"})]})},v=(n(79),n(80),n(81),function(e){var t=e.image,n=e.profileSrc,c=e.title;return Object(o.jsxs)("div",{className:"story",style:{backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(".concat(t,")")},children:[Object(o.jsx)(l.a,{src:n,className:"storyAvatar"}),Object(o.jsx)("h4",{children:c})]})}),g=n.p+"static/media/oj.6831bd72.jpeg",y=n.p+"static/media/claudinelonget.a2a5ffab.jpg",w=n.p+"static/media/raecarruth.cd75c39b.jpg",N=n.p+"static/media/sid.02a9a341.jpg",I=n.p+"static/media/snoop.8d605c08.jpg",S=n.p+"static/media/front-end.dd6032e4.jpg",E=n.p+"static/media/html.ce6f5775.jpg",P=n.p+"static/media/js.206acf60.jpg",L=n.p+"static/media/css.b815478c.jpg",k=n.p+"static/media/front-end-steps.0dcc24da.jpg",C=function(){return Object(o.jsxs)("div",{className:"storyReel",children:[Object(o.jsx)(v,{image:S,profileSrc:g,title:"oj simpson"}),Object(o.jsx)(v,{image:E,profileSrc:y,title:"claudinlonget"}),Object(o.jsx)(v,{image:P,profileSrc:w,title:"raecarruth"}),Object(o.jsx)(v,{image:L,profileSrc:N,title:"sid"}),Object(o.jsx)(v,{image:k,profileSrc:I,title:"snoop"})]})},T=(n(82),n(117)),M=n(118),R=n(119),B=n(62),H=n(19),z="SET_USER",D="INIT_POSTS",A="ADD_POST",U=function(e,t){switch(console.log("action =  ",t),t.type){case z:return Object(H.a)(Object(H.a)({},e),{},{user:t.user});case D:return Object(H.a)(Object(H.a)({},e),{},{posts:t.posts});case A:return Object(H.a)(Object(H.a)({},e),{},{posts:[t.post].concat(Object(B.a)(e.posts))});default:return e}},_=Object(c.createContext)(),F=function(e){var t=e.reducer,n=e.initialState,r=e.children;return Object(o.jsx)(_.Provider,{value:Object(c.useReducer)(t,n),children:r})},V=function(){return Object(c.useContext)(_)},Z=function(){var e=V(),t=Object(i.a)(e,2),n=t[0],r=n.user,s=n.posts,a=t[1],j=Object(c.useState)(""),b=Object(i.a)(j,2),u=b[0],d=b[1],O=Object(c.useState)(""),p=Object(i.a)(O,2),f=p[0],h=p[1];return Object(o.jsxs)("div",{className:"messageSender",children:[Object(o.jsxs)("div",{className:"messageSenderTop",children:[Object(o.jsx)(l.a,{src:r.photoURL}),Object(o.jsxs)("form",{children:[Object(o.jsx)("input",{value:u,onChange:function(e){return d(e.target.value)},className:"messageSenderInput",placeholder:"What's on your mind, ".concat(r.displayName,"?")}),Object(o.jsx)("input",{value:f,onChange:function(e){return h(e.target.value)},placeholder:"Image URL (Optional)"}),Object(o.jsx)("button",{onClick:function(e){e.preventDefault(),console.log("input= ",u),a({type:A,post:{message:u,timestamp:new Date,profilePic:r.photoURL,username:r.displayName,image:f,id:s.length+1}}),d(""),h("")},type:"submit",children:"Hidden submit"})]})]}),Object(o.jsxs)("div",{className:"messageSenderBottom",children:[Object(o.jsxs)("div",{className:"messageSenderOption",children:[Object(o.jsx)(T.a,{style:{color:"red"}}),Object(o.jsx)("h3",{children:"Live Video"})]}),Object(o.jsxs)("div",{className:"messageSenderOption",children:[Object(o.jsx)(M.a,{style:{color:"green"}}),Object(o.jsx)("h3",{children:"Photo/Video"})]}),Object(o.jsxs)("div",{className:"messageSenderOption",children:[Object(o.jsx)(R.a,{style:{color:"orange"}}),Object(o.jsx)("h3",{children:"Feeling/Activity"})]})]})]})},J=(n(83),n(120)),G=n(121),W=n(122),q=n(123),K=function(e){var t=e.username,n=e.timestamp,c=e.message,r=e.image,s=e.profilePic;return Object(o.jsxs)("div",{className:"post",children:[Object(o.jsxs)("div",{className:"postTop",children:[Object(o.jsx)(l.a,{className:"postAvatar",src:s}),Object(o.jsxs)("div",{className:"postTopInfo",children:[Object(o.jsx)("h3",{children:t}),Object(o.jsx)("p",{children:n})]})]}),Object(o.jsx)("div",{className:"postBottom",children:Object(o.jsx)("p",{children:c})}),Object(o.jsx)("div",{className:"postImage",children:Object(o.jsx)("img",{src:r,alt:""})}),Object(o.jsxs)("div",{className:"postOptions",children:[Object(o.jsxs)("div",{className:"postOption",children:[Object(o.jsx)(J.a,{}),Object(o.jsx)("p",{children:"Like"})]}),Object(o.jsxs)("div",{className:"postOption",children:[Object(o.jsx)(G.a,{}),Object(o.jsx)("p",{children:"Comment"})]}),Object(o.jsxs)("div",{className:"postOption",children:[Object(o.jsx)(W.a,{}),Object(o.jsx)("p",{children:"Share"})]}),Object(o.jsxs)("div",{className:"postOption",children:[Object(o.jsx)(q.a,{}),Object(o.jsx)(h.a,{})]})]})]})},Q=function(e){return console.log("props= ",e),Object(o.jsxs)("div",{className:"feed",children:[Object(o.jsx)(C,{}),Object(o.jsx)(Z,{}),e.posts.map((function(e){return Object(o.jsx)(K,{profilePic:e.profilePic,message:e.message,timestamp:e.timestamp,username:e.username,image:e.image},e.id)}))]})},X=(n(84),function(){return Object(o.jsx)("div",{className:"widgets",children:Object(o.jsx)("iframe",{title:"page",src:"https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Freact&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId",width:"340",height:"100%",style:{border:"none",overflow:"hidden"},scrolling:"no",frameBorder:"0",allowtransparency:"true",allow:"encrypted-media"})})});var Y=function(e){return Object(o.jsxs)("div",{className:"container appBody",children:[Object(o.jsx)(x,{}),Object(o.jsx)(Q,{posts:e.posts}),Object(o.jsx)(X,{})]})};var $=function(){var e=V(),t=Object(i.a)(e,1)[0].posts,n=function(){return Object(o.jsx)(Y,{posts:t})};return Object(o.jsx)("div",{children:Object(o.jsx)(n,{})})},ee=(n(85),n(86),n.p+"static/media/mbLogo.881f2695.webp"),te=n.p+"static/media/mbTextLogo.1b3a63d8.svg",ne=n(124),ce="https://react-murderbook-json-server.herokuapp.com/",re=new Date,se=new Date(re.getTime()-300),ae=new Date(se.getTime()-900),ie=new Date(ae.getTime()-1080),le=(new Date(ie.getTime()-1500),function(){var e=V(),t=Object(i.a)(e,2),n=(t[0],t[1]),c=function(){var e=function(e){return fetch(ce+"user").then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return e}))};console.log(e),n({type:D,posts:e})};return Object(o.jsxs)("div",{className:"login",children:["Hoolo world",Object(o.jsxs)("div",{className:"loginLogo",children:[Object(o.jsx)("img",{src:ee,alt:""}),Object(o.jsx)("img",{src:te,alt:"murderbook"})]}),Object(o.jsx)(ne.a,{type:"submit",onClick:function(){var e=function(e){return fetch(ce+"user").then((function(e){if(e.ok)return e;var t=new Error("Error ".concat(e.status,": ").concat(e.statusText));throw t.response=e,t}),(function(e){throw new Error(e.message)})).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return e}))};console.log(e),n({type:z,user:e},c())},children:"Sign In"})]})});n(87);var oe,je=function(e){var t=Object(c.useState)(!1),n=Object(i.a)(t,2),r=n[0],s=n[1];return Object(o.jsxs)("li",{className:"nav-item",children:[Object(o.jsx)("a",{href:"/#",className:"icon-button",onClick:function(){return s(!r)},children:e.icon}),r&&e.children]})},be=n(32);function ue(){return(ue=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function de(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},s=Object.keys(e);for(c=0;c<s.length;c++)n=s[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(c=0;c<s.length;c++)n=s[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Oe(e,t){var n=e.title,r=e.titleId,s=de(e,["title","titleId"]);return c.createElement("svg",ue({viewBox:"0 0 512 512",ref:t,"aria-labelledby":r},s),n?c.createElement("title",{id:r},n):null,oe||(oe=c.createElement("path",{d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z",className:""})))}var pe,fe=c.forwardRef(Oe);n.p;function he(){return(he=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function me(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},s=Object.keys(e);for(c=0;c<s.length;c++)n=s[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(c=0;c<s.length;c++)n=s[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function xe(e,t){var n=e.title,r=e.titleId,s=me(e,["title","titleId"]);return c.createElement("svg",he({viewBox:"0 0 256 512",ref:t,"aria-labelledby":r},s),n?c.createElement("title",{id:r},n):null,pe||(pe=c.createElement("path",{d:"M24.707 38.101L4.908 57.899c-4.686 4.686-4.686 12.284 0 16.971L185.607 256 4.908 437.13c-4.686 4.686-4.686 12.284 0 16.971L24.707 473.9c4.686 4.686 12.284 4.686 16.971 0l209.414-209.414c4.686-4.686 4.686-12.284 0-16.971L41.678 38.101c-4.687-4.687-12.285-4.687-16.971 0z",className:""})))}var ve,ge=c.forwardRef(xe);n.p;function ye(){return(ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function we(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},s=Object.keys(e);for(c=0;c<s.length;c++)n=s[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(c=0;c<s.length;c++)n=s[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Ne(e,t){var n=e.title,r=e.titleId,s=we(e,["title","titleId"]);return c.createElement("svg",ye({viewBox:"0 0 448 512",ref:t,"aria-labelledby":r},s),n?c.createElement("title",{id:r},n):null,ve||(ve=c.createElement("path",{fill:"currentColor",d:"M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z",className:""})))}var Ie,Se=c.forwardRef(Ne),Ee=(n.p,n(45)),Pe=n.n(Ee),Le=n(34),ke=n.n(Le),Ce=n(46),Te=n.n(Ce),Me=n(47),Re=n.n(Me),Be=n(49),He=n.n(Be),ze=n(48),De=n.n(ze),Ae=n(50),Ue=n.n(Ae),_e=n(51),Fe=n.n(_e),Ve=n(52),Ze=n.n(Ve),Je=n(53),Ge=n.n(Je),We=n(54),qe=n.n(We),Ke=n(55),Qe=n.n(Ke),Xe=function(){var e=V(),t=Object(i.a)(e,1)[0].user,n=Object(c.useState)("main"),r=Object(i.a)(n,2),s=r[0],a=r[1],l=Object(c.useState)(null),j=Object(i.a)(l,2),b=j[0],u=j[1],d=Object(c.useRef)(null);function O(e){var t=e.offsetHeight;u(t)}function p(e){return Object(o.jsxs)("a",{href:"/#",className:"menu-item",onClick:function(){return e.goToMenu&&a(e.goToMenu)},children:[Object(o.jsx)("span",{className:"icon-button",children:e.leftIcon}),e.children,Object(o.jsx)("span",{className:"icon-right",children:e.rightIcon})]})}function f(e){return Object(o.jsxs)("a",{href:"/#",className:"menu-item",onClick:function(){return e.goToMenu&&a(e.goToMenu)},children:[Object(o.jsx)("img",{src:e.image,alt:"pic",className:"icon-profile"}),e.children,Object(o.jsx)("br",{}),"See your profile"]})}return Object(c.useEffect)((function(){var e;u(null===(e=d.current)||void 0===e?void 0:e.firstChild.offsetHeight)}),[]),Object(o.jsxs)("div",{className:"dropdown",style:{height:b},ref:d,children:[Object(o.jsx)(be.CSSTransition,{in:"main"===s,timeout:500,classNames:"menu-primary",unmountOnExit:!0,onEnter:O,children:Object(o.jsxs)("div",{className:"menu",children:[Object(o.jsx)(f,{image:t.photoURL,children:t.displayName}),Object(o.jsx)("hr",{className:"hrTag"}),Object(o.jsx)(p,{leftIcon:Object(o.jsx)(Pe.a,{}),children:"Give Feedback"}),Object(o.jsx)("hr",{className:"hrTag"}),Object(o.jsx)(p,{leftIcon:Object(o.jsx)(fe,{}),rightIcon:Object(o.jsx)(ge,{}),goToMenu:"settings",children:"Settings & Privacy"}),Object(o.jsx)(p,{leftIcon:Object(o.jsx)(ke.a,{}),rightIcon:Object(o.jsx)(ge,{}),goToMenu:"help",children:"Help & Support"}),Object(o.jsx)(p,{leftIcon:Object(o.jsx)(Te.a,{}),children:"Dark Mode"}),Object(o.jsx)(p,{leftIcon:Object(o.jsx)(Se,{}),children:"Switch to Classic murderbook"}),Object(o.jsx)(p,{leftIcon:Object(o.jsx)(Re.a,{}),children:"Log Out"})]})}),Object(o.jsx)(be.CSSTransition,{in:"settings"===s,timeout:500,classNames:"menu-secondary",unmountOnExit:!0,onEnter:O,children:Object(o.jsxs)("div",{className:"menu",children:[Object(o.jsx)(p,{goToMenu:"main",leftIcon:Object(o.jsx)(Se,{}),children:Object(o.jsx)("h2",{children:"Settings & Privacy"})}),Object(o.jsx)(p,{leftIcon:Object(o.jsx)(fe,{}),children:"Settings"}),Object(o.jsx)(p,{leftIcon:Object(o.jsx)(De.a,{}),children:"Privacy Checkup"}),Object(o.jsx)(p,{leftIcon:Object(o.jsx)(He.a,{}),children:"Privacy Shortcuts"}),Object(o.jsx)(p,{leftIcon:Object(o.jsx)(Ue.a,{}),children:"Activity Log"}),Object(o.jsx)(p,{leftIcon:Object(o.jsx)(Fe.a,{}),children:"News Feed Preferences"}),Object(o.jsx)(p,{leftIcon:Object(o.jsx)(Ze.a,{}),children:"Language"})]})}),Object(o.jsx)(be.CSSTransition,{in:"help"===s,timeout:500,classNames:"menu-secondary",unmountOnExit:!0,onEnter:O,children:Object(o.jsxs)("div",{className:"menu",children:[Object(o.jsx)(p,{goToMenu:"main",leftIcon:Object(o.jsx)(Se,{}),children:Object(o.jsx)("h2",{children:"Help & Support"})}),Object(o.jsx)(p,{leftIcon:Object(o.jsx)(ke.a,{}),children:"Help Center"}),Object(o.jsx)(p,{leftIcon:Object(o.jsx)(Ge.a,{}),children:"Help Community"}),Object(o.jsx)(p,{leftIcon:Object(o.jsx)(qe.a,{}),children:"Support Inbox"}),Object(o.jsx)(p,{leftIcon:Object(o.jsx)(Qe.a,{}),children:"Report a Problem"})]})})]})},Ye=n(56),$e=n.n(Ye),et=n(57),tt=n.n(et),nt=n(58),ct=n.n(nt),rt=n(59),st=n.n(rt),at=n(60),it=n.n(at),lt=n(61),ot=n.n(lt);function jt(){return(jt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function bt(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},s=Object.keys(e);for(c=0;c<s.length;c++)n=s[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(c=0;c<s.length;c++)n=s[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ut(e,t){var n=e.title,r=e.titleId,s=bt(e,["title","titleId"]);return c.createElement("svg",jt({viewBox:"0 0 28 28",ref:t,"aria-labelledby":r},s),n?c.createElement("title",{id:r},n):null,Ie||(Ie=c.createElement("path",{d:"M7.847 23.488C9.207 23.488 11.443 23.363 14.467 22.806 13.944 24.228 12.581 25.247 10.98 25.247 9.649 25.247 8.483 24.542 7.825 23.488L7.847 23.488ZM24.923 15.73C25.17 17.002 24.278 18.127 22.27 19.076 21.17 19.595 18.724 20.583 14.684 21.369 11.568 21.974 9.285 22.113 7.848 22.113 7.421 22.113 7.068 22.101 6.79 22.085 4.574 21.958 3.324 21.248 3.077 19.976 2.702 18.049 3.295 17.305 4.278 16.073L4.537 15.748C5.2 14.907 5.459 14.081 5.035 11.902 4.086 7.022 6.284 3.687 11.064 2.753 15.846 1.83 19.134 4.096 20.083 8.977 20.506 11.156 21.056 11.824 21.986 12.355L21.986 12.356 22.348 12.561C23.72 13.335 24.548 13.802 24.923 15.73Z"})))}var dt,Ot=c.forwardRef(ut);n.p;function pt(){return(pt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function ft(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},s=Object.keys(e);for(c=0;c<s.length;c++)n=s[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(c=0;c<s.length;c++)n=s[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function ht(e,t){var n=e.title,r=e.titleId,s=ft(e,["title","titleId"]);return c.createElement("svg",pt({viewBox:"0 0 28 28",alt:"",ref:t,"aria-labelledby":r},s),n?c.createElement("title",{id:r},n):null,dt||(dt=c.createElement("path",{d:"M14 2.042c6.76 0 12 4.952 12 11.64S20.76 25.322 14 25.322a13.091 13.091 0 0 1-3.474-.461.956 .956 0 0 0-.641.047L7.5 25.959a.961.961 0 0 1-1.348-.849l-.065-2.134a.957.957 0 0 0-.322-.684A11.389 11.389 0 0 1 2 13.682C2 6.994 7.24 2.042 14 2.042ZM6.794 17.086a.57.57 0 0 0 .827.758l3.786-2.874a.722.722 0 0 1 .868 0l2.8 2.1a1.8 1.8 0 0 0 2.6-.481l3.525-5.592a.57.57 0 0 0-.827-.758l-3.786 2.874a.722.722 0 0 1-.868 0l-2.8-2.1a1.8 1.8 0 0 0-2.6.481Z"})))}var mt,xt=c.forwardRef(ht);n.p;function vt(){return(vt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function gt(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},s=Object.keys(e);for(c=0;c<s.length;c++)n=s[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(c=0;c<s.length;c++)n=s[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function yt(e,t){var n=e.title,r=e.titleId,s=gt(e,["title","titleId"]);return c.createElement("svg",vt({viewBox:"0 0 320 512",ref:t,"aria-labelledby":r},s),n?c.createElement("title",{id:r},n):null,mt||(mt=c.createElement("path",{d:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",className:""})))}var wt,Nt=c.forwardRef(yt);n.p;function It(){return(It=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function St(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},s=Object.keys(e);for(c=0;c<s.length;c++)n=s[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(c=0;c<s.length;c++)n=s[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function Et(e,t){var n=e.title,r=e.titleId,s=St(e,["title","titleId"]);return c.createElement("svg",It({"aria-hidden":"true",viewBox:"0 0 448 512",ref:t,"aria-labelledby":r},s),n?c.createElement("title",{id:r},n):null,wt||(wt=c.createElement("path",{d:"M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",className:""})))}var Pt=c.forwardRef(Et),Lt=(n.p,function(){var e=V(),t=Object(i.a)(e,1)[0].user;return Object(o.jsxs)("div",{className:"header",children:[Object(o.jsxs)("div",{className:"headerLeft",children:[Object(o.jsx)("img",{src:ee,alt:"mbLogo"}),Object(o.jsxs)("div",{className:"headerInput",children:[Object(o.jsx)($e.a,{}),Object(o.jsx)("input",{type:"text",placeholder:"Search murderbook"})]})]}),Object(o.jsxs)("div",{className:"headerCenter",children:[Object(o.jsx)("div",{className:"headerOption headerOptionActive",children:Object(o.jsx)(tt.a,{fontSize:"large"})}),Object(o.jsx)("div",{className:"headerOption",children:Object(o.jsx)(ct.a,{fontSize:"large"})}),Object(o.jsx)("div",{className:"headerOption",children:Object(o.jsx)(st.a,{fontSize:"large"})}),Object(o.jsx)("div",{className:"headerOption",children:Object(o.jsx)(it.a,{fontSize:"large"})}),Object(o.jsx)("div",{className:"headerOption",children:Object(o.jsx)(ot.a,{fontSize:"large"})})]}),Object(o.jsxs)("div",{className:"headerRight",children:[Object(o.jsxs)("div",{className:"headerInfo",children:[Object(o.jsx)(l.a,{src:t.photoURL}),Object(o.jsx)("h4",{children:t.displayName})]}),Object(o.jsx)("nav",{className:"navbar",children:Object(o.jsxs)("ul",{className:"navbar-nav",children:[Object(o.jsx)(je,{icon:Object(o.jsx)(Pt,{})}),Object(o.jsx)(je,{icon:Object(o.jsx)(xt,{})}),Object(o.jsx)(je,{icon:Object(o.jsx)(Ot,{})}),Object(o.jsx)(je,{icon:Object(o.jsx)(Nt,{}),children:Object(o.jsx)(Xe,{})})]})})]})]})});var kt=function(){var e=V(),t=Object(i.a)(e,1)[0].user;return Object(o.jsx)("div",{className:"app",children:t?Object(o.jsxs)("div",{children:[Object(o.jsx)(Lt,{}),Object(o.jsx)("div",{className:"appBody",children:Object(o.jsx)($,{})})]}):Object(o.jsx)(le,{})})};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(F,{initialState:{user:null,posts:null},reducer:U,children:Object(o.jsx)(kt,{})})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.a61d4ff3.chunk.js.map