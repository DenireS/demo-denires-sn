(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[0],{12:function(e,t,n){e.exports={nav:"Navbar_nav__1gc_1",item:"Navbar_item__2crGM",activeLink:"Navbar_activeLink__1RMXt"}},125:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var a=n(39),r=n(5),o={dialogs:[{id:1,name:"Sasha",img:"https://i.pinimg.com/736x/14/79/9d/14799d9779f9b44d7116783ce7121d5f.jpg"},{id:2,name:"Sanyok",img:"https://i.pinimg.com/736x/14/79/9d/14799d9779f9b44d7116783ce7121d5f.jpg"},{id:3,name:"Aleksandr",img:"https://i.pinimg.com/736x/14/79/9d/14799d9779f9b44d7116783ce7121d5f.jpg"},{id:4,name:"Shurik",img:"https://i.pinimg.com/736x/14/79/9d/14799d9779f9b44d7116783ce7121d5f.jpg"},{id:5,name:"Shura",img:"https://i.pinimg.com/736x/14/79/9d/14799d9779f9b44d7116783ce7121d5f.jpg"},{id:6,name:"Sancho",img:"https://i.pinimg.com/736x/14/79/9d/14799d9779f9b44d7116783ce7121d5f.jpg"},{id:7,name:"Sashunya",img:"https://i.pinimg.com/736x/14/79/9d/14799d9779f9b44d7116783ce7121d5f.jpg"}],messages:[{id:1,message:"Yo"},{id:2,message:"How are you"},{id:3,message:"Hi"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},i=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageBody;return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:6,message:n}])});default:return e}}},132:function(e,t,n){e.exports={userPhoto:"users_userPhoto__3nFrZ"}},133:function(e,t,n){e.exports=n.p+"static/media/User.a4c1f699.jpg"},134:function(e,t,n){e.exports={ldsDualRing:"Preloader_ldsDualRing__1DtRN"}},135:function(e,t,n){e.exports={authError:"Login_authError__rfmx-"}},163:function(e,t,n){e.exports=n(293)},168:function(e,t,n){},169:function(e,t,n){},174:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},195:function(e,t,n){},20:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var a=n(70),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"51707569-2172-436d-84e1-481fec77399c"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t))},follow:function(e){return r.post("follow/".concat(e))},unfollow:function(e){return r.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Old API method must be changed"),i.getProfile(e)}},i={getProfile:function(e){return r.get("profile/".concat(e))},getStatus:function(e){return r.get("profile/status/"+e)},updateStatus:function(e){return r.put("profile/status",{status:e})}},c={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return r.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return r.delete("auth/login")}}},293:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),o=n(62),i=n.n(o),c=(n(168),n(33)),u=n(34),s=n(37),l=n(36),f=n(10),m=n(13),p=(n(169),n(12)),d=n.n(p);var g=function(){return r.a.createElement("nav",{className:d.a.nav},r.a.createElement("div",{className:d.a.item},r.a.createElement(m.b,{to:"/profile",activeClassName:d.a.activeLink},"Profile")),r.a.createElement("div",{className:d.a.item},r.a.createElement(m.b,{to:"/dialogs",activeClassName:d.a.activeLink},"Messages")),r.a.createElement("div",{className:d.a.item},r.a.createElement(m.b,{to:"/users",activeClassName:d.a.activeLink},"Users")),r.a.createElement("div",{className:d.a.item},r.a.createElement(m.b,{to:"/news",activeClassName:d.a.activeLink},"News")),r.a.createElement("div",{className:d.a.item},r.a.createElement(m.b,{to:"/login",activeClassName:d.a.activeLink},"Login")),r.a.createElement("div",{className:d.a.item},r.a.createElement(m.b,{to:"/music",activeClassName:d.a.activeLink},"Music")),r.a.createElement("div",{className:d.a.item},r.a.createElement(m.b,{to:"/settings",activeClassName:d.a.activeLink},"Settings")))};n(174);var h=function(e){return r.a.createElement("div",null,"News")};n(175);var E=function(e){return r.a.createElement("div",null,"Settings")};n(176);var v=function(e){return r.a.createElement("div",null,"Music")},b=n(16),O=n(9),w=n.n(O),S=n(19),_=n(39),j=n(5),P=n(20),C=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(j.a)(Object(j.a)({},e),a):e}))},y={users:[],pageSize:5,portionSize:10,totalItemsCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},I=function(e){return{type:"FOLLOW",userId:e}},N=function(e){return{type:"UNFOLLOW",userId:e}},k=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},L=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},T=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},x=function(){var e=Object(S.a)(w.a.mark((function e(t,n,a,r){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(T(!0,n)),e.next=3,a;case 3:0===e.sent.data.resultCode&&t(r(n)),t(T(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(j.a)(Object(j.a)({},e),{},{users:C(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(j.a)(Object(j.a)({},e),{},{users:C(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(j.a)(Object(j.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(j.a)(Object(j.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(j.a)(Object(j.a)({},e),{},{totalItemsCount:t.totalItemsCount});case"TOGGLE_IS_FETCHING":return Object(j.a)(Object(j.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(j.a)(Object(j.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(_.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},z=n(66),F=n(128),R=n(53),U=n.n(R),G=n(131),D=n.n(G),M=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,i=e.onPageChanged,c=e.portionSize,u=void 0===c?10:c,s=Math.ceil(t/n),l=[],f=1;f<=s;f++)l.push(f);var m=Math.ceil(s/u),p=Object(a.useState)(1),d=Object(F.a)(p,2),g=d[0],h=d[1],E=(g-1)*u+1,v=g*u;return r.a.createElement("div",{className:U.a.paginator},g>1&&r.a.createElement("button",{onClick:function(){h(g-1)}},"Prev page"),l.filter((function(e){return e>=E&&e<=v})).map((function(e){return r.a.createElement("span",{className:D()(U.a.pages,o===e?U.a.selectedPage:U.a.notSelectedPage),key:e,onClick:function(t){i(e)}},e)})),g<m&&r.a.createElement("button",{onClick:function(){h(g+1)}},"Next page"))},B=n(132),W=n.n(B),H=n(133),q=n.n(H),X=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,o=e.follow;return r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(m.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:q.a,className:W.a.userPhoto}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"Follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status)),r.a.createElement("span",null,r.a.createElement("div",null,"user.location.country"),r.a.createElement("div",null,"user.location.city"))))},Y=function(e){var t=e.currentPage,n=e.onPageChanged,a=e.totalItemsCount,o=e.pageSize,i=e.users,c=e.portionSize,u=Object(z.a)(e,["currentPage","onPageChanged","totalItemsCount","pageSize","users","portionSize"]);return r.a.createElement("div",null,r.a.createElement(M,{currentPage:t,onPageChanged:n,totalItemsCount:a,pageSize:o,portionSize:c}),r.a.createElement("div",null,i.map((function(e){return r.a.createElement(X,{user:e,key:e.id,followingInProgress:u.followingInProgress,unfollow:u.unfollow,follow:u.follow})}))))},Z=n(35),J=n(8),K=function(e){return e.usersPage.users},V=function(e){return e.usersPage.pageSize},$=function(e){return e.usersPage.portionSize},Q=function(e){return e.usersPage.totalItemsCount},ee=function(e){return e.usersPage.currentPage},te=function(e){return e.usersPage.isFetching},ne=function(e){return e.usersPage.followingInProgress},ae=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){var n=e.props;e.props.requestUsers(t,n)},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(Z.a,null):null,r.a.createElement(Y,{totalItemsCount:this.props.totalItemsCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followingInProgress,portionSize:this.props.portionSize}))}}]),n}(r.a.Component),re=Object(J.d)(Object(b.b)((function(e){return{portionSize:$(e),users:K(e),pageSize:V(e),totalItemsCount:Q(e),currentPage:ee(e),isFetching:te(e),followingInProgress:ne(e)}}),{follow:function(e){return function(){var t=Object(S.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:x(n,e,P.c.follow(e),I);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(S.a)(w.a.mark((function t(n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:x(n,e,P.c.unfollow(e),N);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:k,toggleFollowingProgress:T,requestUsers:function(e,t){return function(){var n=Object(S.a)(w.a.mark((function n(a){var r;return w.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(L(!0)),a(k(e)),n.next=4,P.c.getUsers(e,t);case 4:r=n.sent,a(L(!1)),a({type:"SET_USERS",users:r.data.items}),a({type:"SET_TOTAL_USERS_COUNT",totalItemsCount:r.data.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ae),oe=n(89),ie=n.n(oe);var ce=function(e){return r.a.createElement("header",{className:ie.a.header},r.a.createElement("img",{src:"https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"}),r.a.createElement("div",{className:ie.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:e.Logout},"Logout")," "):r.a.createElement(m.b,{to:"/login"},"Login")))},ue=(n(70),n(43)),se={userId:null,email:null,login:null,isAuth:!1},le=function(e,t,n,a){return{type:"auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},fe=function(){return function(){var e=Object(S.a)(w.a.mark((function e(t){var n,a,r,o,i;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.me();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,o=a.email,i=a.login,t(le(r,o,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},me=function(){return function(){var e=Object(S.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.logout();case 2:0===e.sent.data.resultCode&&t(le(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":return Object(j.a)(Object(j.a)({},e),t.payload);default:return e}},de=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(ce,this.props)}}]),n}(r.a.Component),ge=Object(b.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{Logout:me})(de),he=n(135),Ee=n.n(he),ve=n(127),be=n(71),Oe=n(94),we=(n(195),n(126)),Se=function(e,t,n,a,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return r.a.createElement("div",null,r.a.createElement(we.a,Object.assign({placeholder:e,name:t,component:a,validate:n},o))," ",i)},_e=Object(Oe.a)("input"),je=Object(ve.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return r.a.createElement("form",{onSubmit:t},Se("Email","email",[be.b],_e),Se("Password","password",[be.b],_e,{type:"password"}),Se(null,"rememberMe",[],_e,{type:"checkbox"},"Remember Me"),n&&r.a.createElement("div",{className:Ee.a.authError},n),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))})),Pe=Object(b.b)((function(e){return{isAuth:e.auth.isAuth}}),{Logout:me,Login:function(e,t,n){return function(){var a=Object(S.a)(w.a.mark((function a(r){var o,i;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,P.a.login(e,t,n);case 2:0===(o=a.sent).data.resultCode?r(fe()):(i=o.data.messages.length>0?o.data.messages[0]:"Some error",r(Object(ue.a)("login",{_error:i})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(f.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(je,{onSubmit:function(t){e.Login(t.email,t.password,t.rememberMe)}}))})),Ce={initialized:!1},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCES":return Object(j.a)(Object(j.a)({},e),{},{initialized:!0});default:return e}},Ie=n(93),Ne=n(125),ke={},Le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke;return e},Te=n(137),xe=n(129),Ae=Object(J.c)({profilePage:Ie.b,dialogsPage:Ne.a,sidebar:Le,usersPage:A,auth:pe,form:xe.a,app:ye}),ze=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||J.d,Fe=Object(J.e)(Ae,ze(Object(J.a)(Te.a)));window.__store__=Fe;var Re=Fe,Ue=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(Z.a,null)},r.a.createElement(e,t))}},Ge=r.a.lazy((function(){return n.e(4).then(n.bind(null,300))})),De=r.a.lazy((function(){return n.e(3).then(n.bind(null,299))})),Me=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(ge,null),r.a.createElement(g,null),r.a.createElement("div",{className:"app-wrapper__content"},r.a.createElement(f.b,{path:"/dialogs",render:Ue(Ge)}),r.a.createElement(f.b,{path:"/profile/:userId?",render:Ue(De)}),r.a.createElement(f.b,{path:"/users",render:function(){return r.a.createElement(re,null)}}),r.a.createElement(f.b,{path:"/news",render:function(){return r.a.createElement(h,null)}}),r.a.createElement(f.b,{path:"/login",render:function(){return r.a.createElement(Pe,null)}}),r.a.createElement(f.b,{path:"/music",render:function(){return r.a.createElement(v,null)}}),r.a.createElement(f.b,{path:"/settings",render:function(){return r.a.createElement(E,null)}}))):r.a.createElement(Z.a,null)}}]),n}(r.a.Component),Be=Object(J.d)(Object(b.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(fe());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCES"})}))}}}),f.f)(Me),We=function(e){return r.a.createElement(m.a,null,r.a.createElement(b.a,{store:Re},r.a.createElement(Be,null)))};i.a.render(r.a.createElement(We,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},35:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(134),i=n.n(o);t.a=function(e){return r.a.createElement("div",{className:i.a.ldsDualRing})}},53:function(e,t,n){e.exports={pages:"Paginator_pages__3KXEK",selectedPage:"Paginator_selectedPage___Nuxc",notSelectedPage:"Paginator_notSelectedPage__Glotg"}},71:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},89:function(e,t,n){e.exports={header:"Header_header__1ReLy",loginBlock:"Header_loginBlock__3S3Bv"}},90:function(e,t,n){e.exports={formControl:"FormsControls_formControl__eVlZ0",error:"FormsControls_error__1cRJs"}},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"e",(function(){return f})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return d})),n.d(t,"f",(function(){return g}));var a=n(9),r=n.n(a),o=n(19),i=n(39),c=n(5),u=n(20),s={posts:[{id:1,message:"Hi, how are you?",likesCount:11},{id:2,message:"It`s my first post",likesCount:23}],profile:null,status:""},l=function(e){return{type:"ADD-POST",newPostText:e}},f=function(e){return{type:"SET_USER_PROFILE",profile:e}},m=function(e){return{type:"SET_STATUS",status:e}},p=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getProfile(e);case 2:a=t.sent,n(f(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:a=t.sent,n(m(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(o.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(m(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(c.a)(Object(c.a)({},e),{},{posts:[].concat(Object(i.a)(e.posts),[n])});case"SET_STATUS":return Object(c.a)(Object(c.a)({},e),{},{status:t.status});case"SET_USER_PROFILE":return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case"DELETE_POST":return Object(c.a)(Object(c.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});default:return e}}},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(66),r=n(0),o=n.n(r),i=n(90),c=n.n(i),u=function(e){return function(t){var n=t.input,r=t.meta,i=r.touched,u=r.error,s=t.type,l=Object(a.a)(t,["input","meta","type"]),f=i&&u;return o.a.createElement("div",{className:c.a.formControl+" "+(f?c.a.error:"")},o.a.createElement("div",null,function(t){return o.a.createElement(e,Object.assign({},n,l,{type:t}))}(s)),f&&o.a.createElement("span",null,u))}}}},[[163,1,2]]]);
//# sourceMappingURL=main.00a0c2d0.chunk.js.map