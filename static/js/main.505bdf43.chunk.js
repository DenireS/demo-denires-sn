(this["webpackJsonpreact-1"]=this["webpackJsonpreact-1"]||[]).push([[0],{107:function(e,t,n){},128:function(e,t,n){"use strict";n.d(t,"b",(function(){return c}));var a=n(33),r=n(4),o={dialogs:[{id:1,name:"Sasha",img:"https://i.pinimg.com/736x/14/79/9d/14799d9779f9b44d7116783ce7121d5f.jpg"},{id:2,name:"Sanyok",img:"https://i.pinimg.com/736x/14/79/9d/14799d9779f9b44d7116783ce7121d5f.jpg"},{id:3,name:"Aleksandr",img:"https://i.pinimg.com/736x/14/79/9d/14799d9779f9b44d7116783ce7121d5f.jpg"},{id:4,name:"Shurik",img:"https://i.pinimg.com/736x/14/79/9d/14799d9779f9b44d7116783ce7121d5f.jpg"},{id:5,name:"Shura",img:"https://i.pinimg.com/736x/14/79/9d/14799d9779f9b44d7116783ce7121d5f.jpg"},{id:6,name:"Sancho",img:"https://i.pinimg.com/736x/14/79/9d/14799d9779f9b44d7116783ce7121d5f.jpg"},{id:7,name:"Sashunya",img:"https://i.pinimg.com/736x/14/79/9d/14799d9779f9b44d7116783ce7121d5f.jpg"}],messages:[{id:1,message:"Yo"},{id:2,message:"How are you"},{id:3,message:"Hi"},{id:4,message:"Yo"},{id:5,message:"Yo"}]},c=function(e){return{type:"SEND_MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND_MESSAGE":var n=t.newMessageBody;return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:6,message:n}])});default:return e}}},134:function(e,t,n){e.exports={userPhoto:"users_userPhoto__3nFrZ"}},135:function(e,t,n){e.exports={ldsDualRing:"Preloader_ldsDualRing__1DtRN"}},137:function(e,t,n){e.exports={item:"Post_item__f61bo"}},15:function(e,t,n){e.exports={nav:"Navbar_nav__1gc_1",item:"Navbar_item__2crGM",activeLink:"Navbar_activeLink__1RMXt"}},164:function(e,t,n){e.exports=n(295)},169:function(e,t,n){},170:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},196:function(e,t,n){},22:function(e,t,n){e.exports={description:"ProfileInfo_description__1bfJH",mainPhoto:"ProfileInfo_mainPhoto__3GBzV",contact:"ProfileInfo_contact__1CwjK",profileDataForm:"ProfileInfo_profileDataForm__xi4V0",show:"ProfileInfo_show__3sf3z",profileData:"ProfileInfo_profileData__1xQSF",show2:"ProfileInfo_show2__Rq9bM",contactsMenu:"ProfileInfo_contactsMenu__WsN2e",passive:"ProfileInfo_passive__29738",active:"ProfileInfo_active__bD8yG"}},294:function(e,t,n){},295:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),r=n.n(a),o=n(64),c=n.n(o),i=(n(169),n(28)),s=n(29),u=n(31),l=n(30),m=n(10),f=n(12),p=(n(170),n(15)),d=n.n(p);var g=function(){return r.a.createElement("nav",{className:d.a.nav},r.a.createElement("div",{className:d.a.item},r.a.createElement(f.b,{to:"/profile",activeClassName:d.a.activeLink},"Profile")),r.a.createElement("div",{className:d.a.item},r.a.createElement(f.b,{to:"/dialogs",activeClassName:d.a.activeLink},"Messages")),r.a.createElement("div",{className:d.a.item},r.a.createElement(f.b,{to:"/users",activeClassName:d.a.activeLink},"Users")),r.a.createElement("div",{className:d.a.item},r.a.createElement(f.b,{to:"/news",activeClassName:d.a.activeLink},"News")),r.a.createElement("div",{className:d.a.item},r.a.createElement(f.b,{to:"/login",activeClassName:d.a.activeLink},"Login")),r.a.createElement("div",{className:d.a.item},r.a.createElement(f.b,{to:"/music",activeClassName:d.a.activeLink},"Music")),r.a.createElement("div",{className:d.a.item},r.a.createElement(f.b,{to:"/settings",activeClassName:d.a.activeLink},"Settings")))};n(175);var h=function(e){return r.a.createElement("div",null,"News")};n(176);var E=function(e){return r.a.createElement("div",null,"Settings")};n(177);var v=function(e){return r.a.createElement("div",null,"Music")},b=n(11),O=n(7),_=n.n(O),S=n(14),j=n(33),P=n(4),w=n(65).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"51707569-2172-436d-84e1-481fec77399c"}}),y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return w.get("users?page=".concat(e,"&count=").concat(t))},C=function(e){return w.post("follow/".concat(e))},I=function(e){return w.delete("follow/".concat(e))},k=function(e){return console.warn("Old API method must be changed"),N.getProfile(e)},N={getProfile:function(e){return w.get("profile/".concat(e))},getStatus:function(e){return w.get("profile/status/"+e)},updateStatus:function(e){return w.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),w.put("profile/photo",t)},saveProfile:function(e){return w.put("profile",e)}},T=function(){return w.get("auth/me")},L=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return w.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a})},F=function(){return w.delete("auth/login")},x=function(){return w.get("security/get-captcha-url")},A=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(P.a)(Object(P.a)({},e),a):e}))},U={users:[],pageSize:10,portionSize:10,totalItemsCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},R=function(e){return{type:"FOLLOW",userId:e}},D=function(e){return{type:"UNFOLLOW",userId:e}},M=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},z=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},G=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},B=function(){var e=Object(S.a)(_.a.mark((function e(t,n,a,r){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(G(!0,n)),e.next=3,a;case 3:0===e.sent.data.resultCode&&t(r(n)),t(G(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(P.a)(Object(P.a)({},e),{},{users:A(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(P.a)(Object(P.a)({},e),{},{users:A(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(P.a)(Object(P.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(P.a)(Object(P.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(P.a)(Object(P.a)({},e),{},{totalItemsCount:t.totalItemsCount});case"TOGGLE_IS_FETCHING":return Object(P.a)(Object(P.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(P.a)(Object(P.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(j.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},W=n(71),J=n(68),V=n(41),q=n(72),X=n.n(q),K=n(133),Y=n.n(K),Z=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,c=e.onPageChanged,i=e.portionSize,s=Math.ceil(t/n),u=[],l=1;l<=s;l++)u.push(l);var m=Math.ceil(s/i),f=Object(a.useState)(1),p=Object(V.a)(f,2),d=p[0],g=p[1],h=(d-1)*i+1,E=d*i;return r.a.createElement("div",{className:X.a.paginator},d>1&&r.a.createElement("button",{onClick:function(){g(d-1)}},"Prev page"),u.filter((function(e){return e>=h&&e<=E})).map((function(e){return r.a.createElement("span",{className:Y()(X.a.pages,Object(J.a)({},X.a.selectedPage,o===e)),key:e,onClick:function(t){c(e)}},e)})),d<m&&r.a.createElement("button",{onClick:function(){g(d+1)}},"Next page"))},Q=n(134),$=n.n(Q),ee=n(69),te=n.n(ee),ne=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,o=e.follow;return r.a.createElement("div",null,r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(f.b,{to:"/profile/"+t.id},r.a.createElement("img",{src:null!=t.photos.small?t.photos.small:te.a,className:$.a.userPhoto}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"Follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status)),r.a.createElement("span",null,r.a.createElement("div",null,"user.location.country"),r.a.createElement("div",null,"user.location.city"))))},ae=function(e){var t=e.currentPage,n=e.onPageChanged,a=e.totalItemsCount,o=e.pageSize,c=e.users,i=e.portionSize,s=Object(W.a)(e,["currentPage","onPageChanged","totalItemsCount","pageSize","users","portionSize"]);return r.a.createElement("div",null,r.a.createElement(Z,{currentPage:t,onPageChanged:n,totalItemsCount:a,pageSize:o,portionSize:i}),r.a.createElement("div",null,c.map((function(e){return r.a.createElement(ne,{user:e,key:e.id,followingInProgress:s.followingInProgress,unfollow:s.unfollow,follow:s.follow})}))))},re=n(135),oe=n.n(re);var ce=function(e){return r.a.createElement("div",{className:oe.a.ldsDualRing})},ie=n(8),se=function(e){return e.usersPage.users},ue=function(e){return e.usersPage.pageSize},le=function(e){return e.usersPage.portionSize},me=function(e){return e.usersPage.totalItemsCount},fe=function(e){return e.usersPage.currentPage},pe=function(e){return e.usersPage.isFetching},de=function(e){return e.usersPage.followingInProgress},ge=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){var n=e.props;e.props.requestUsers(t,n)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.requestUsers(t,n)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(ce,null):null,r.a.createElement(ae,{totalItemsCount:this.props.totalItemsCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,toggleFollowingProgress:this.props.toggleFollowingProgress,followingInProgress:this.props.followingInProgress,portionSize:this.props.portionSize}))}}]),n}(r.a.Component),he=Object(ie.d)(Object(b.b)((function(e){return{portionSize:le(e),users:se(e),pageSize:ue(e),totalItemsCount:me(e),currentPage:fe(e),isFetching:pe(e),followingInProgress:de(e)}}),{follow:function(e){return function(){var t=Object(S.a)(_.a.mark((function t(n){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:B(n,e,C(e),R);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(S.a)(_.a.mark((function t(n){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:B(n,e,I(e),D);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:M,toggleFollowingProgress:G,requestUsers:function(e,t){return function(){var n=Object(S.a)(_.a.mark((function n(a){var r;return _.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(z(!0)),a(M(e)),n.next=4,y(e,t);case 4:r=n.sent,a(z(!1)),a({type:"SET_USERS",users:r.data.items}),a({type:"SET_TOTAL_USERS_COUNT",totalItemsCount:r.data.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ge),Ee=(n(107),n(25)),ve={posts:[{id:1,message:"Hi, how are you?",likesCount:11},{id:2,message:"It`s my first post",likesCount:23}],profile:null,profileEditStatus:!1,isFetching:!1,status:""},be=function(e){return{type:"SET_USER_PROFILE",profile:e}},Oe=function(e){return{type:"SET_STATUS",status:e}},_e=function(e){return{type:"PROFILE_EDIT_STATUS",status:e}},Se=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},je=function(e){return function(){var t=Object(S.a)(_.a.mark((function t(n){var a;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k(e);case 2:a=t.sent,n(be(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(P.a)(Object(P.a)({},e),{},{posts:[].concat(Object(j.a)(e.posts),[n])});case"SET_STATUS":return Object(P.a)(Object(P.a)({},e),{},{status:t.status});case"SET_USER_PROFILE":return Object(P.a)(Object(P.a)({},e),{},{profile:t.profile});case"DELETE_POST":return Object(P.a)(Object(P.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"SAVE_PHOTO_SUCCESS":return Object(P.a)(Object(P.a)({},e),{},{profile:Object(P.a)(Object(P.a)({},e.profile),{},{photos:t.photos})});case"PROFILE_EDIT_STATUS":return Object(P.a)(Object(P.a)({},e),{},{profileEditStatus:t.status});case"TOGGLE_IS_FETCHING":return Object(P.a)(Object(P.a)({},e),{},{isFetching:t.isFetching});default:return e}},we=n(22),ye=n.n(we),Ce=function(e){var t=Object(a.useState)(!1),n=Object(V.a)(t,2),o=n[0],c=n[1],i=Object(a.useState)(e.status),s=Object(V.a)(i,2),u=s[0],l=s[1];Object(a.useEffect)((function(){l(e.status)}),[e.status]);return r.a.createElement("div",null,!o&&r.a.createElement("div",null,r.a.createElement("b",null,"Status"),": ",r.a.createElement("span",{onDoubleClick:function(){c(!0)}},e.status||"-----")),o&&r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){l(e.currentTarget.value)},onBlur:function(){c(!1),e.updateStatus(u)},autoFocus:!0,value:u})))},Ie=n(39),ke=n.n(Ie),Ne=(n(196),n(129)),Te=function(e,t,n,a,o){var c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return r.a.createElement("div",null,r.a.createElement(Ne.a,Object.assign({placeholder:e,name:t,component:a,validate:n},o))," ",c)},Le=n(38),Fe=n(130),xe=Object(Le.a)("input"),Ae=Object(Le.a)("textarea"),Ue=Object(Fe.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,n=e.profile,a=e.error,o=e.isFetching;return r.a.createElement("form",{className:ye.a.profileDataForm,onSubmit:t},a&&r.a.createElement("div",{className:ke.a.formSummaryError},a),r.a.createElement("div",null,o?r.a.createElement("button",{disabled:!0},"save"):r.a.createElement("button",null,"save")),r.a.createElement("div",null,r.a.createElement("b",null,"Full name"),": ",Te("Full name","fullName",[],xe)),r.a.createElement("div",null,r.a.createElement("b",null,"Looking for a job"),":",Te("","lookingForAJob",[],xe,{type:"checkbox"})),r.a.createElement("div",null,r.a.createElement("b",null,"My professional skills"),":",Te("My professional skills","lookingForAJobDescription",[],Ae)),r.a.createElement("div",null,r.a.createElement("b",null,"About me"),":",Te("About me","aboutMe",[],Ae)),r.a.createElement("div",null,r.a.createElement("b",null,"Contacts"),": ",Object.keys(n.contacts).map((function(e){return r.a.createElement("div",{key:e,className:ye.a.contact},r.a.createElement("b",null,e,": ",Te(e,"contacts."+e,[],xe)))}))))}));var Re=function(e){var t=e.profile,n=e.isOwner,o=e.goToEditMode,c=Object(a.useState)("active"),i=Object(V.a)(c,2),s=i[0],u=i[1];return r.a.createElement("div",{className:ye.a.profileData},n&&r.a.createElement("div",null,r.a.createElement("button",{onClick:o},"edit")),r.a.createElement("div",null,r.a.createElement("b",null,"Full name"),": ",t.fullName),r.a.createElement("div",null,r.a.createElement("b",null,"Looking for a job"),": ",t.lookingForAJob?"yes":"no"),t.lookingForAJob&&r.a.createElement("div",null,r.a.createElement("b",null,"My professional skills"),": ",t.lookingForAJobDescription),r.a.createElement("div",null,r.a.createElement("b",null,"About me"),": ",t.aboutMe),r.a.createElement("div",{className:ye.a[s]},r.a.createElement("div",{className:ye.a.contactsMenu,onClick:function(){return u("passive")}}),r.a.createElement("b",null,"Contacts"),": ",Object.keys(t.contacts).map((function(e){return r.a.createElement(De,{contactTitle:e,key:e,contactValue:t.contacts[e]})}))))},De=function(e){var t=e.contactTitle,n=e.contactValue;return r.a.createElement("div",{className:ye.a.contact},r.a.createElement("b",null,t),": ",n)},Me=function(e){var t=e.profile,n=e.status,a=e.updateStatus,o=e.isOwner,c=e.savePhoto,i=e.saveProfile,s=e.profileEditStatus,u=e.setProfileEditStatus,l=e.editIsFetching,m=e.isFetching;return t?r.a.createElement("div",null,r.a.createElement("div",{className:ye.a.description},r.a.createElement("img",{src:t.photos.large||te.a,className:ye.a.mainPhoto}),o&&r.a.createElement("input",{type:"file",onChange:function(e){e.target.files.length&&c(e.target.files[0])}}),s?r.a.createElement(Ue,{initialValues:t,profile:t,onSubmit:function(e){l(!0),i(e)},isFetching:m}):r.a.createElement(Re,{profile:t,isOwner:o,goToEditMode:function(){u(!0)}}),r.a.createElement(Ce,{status:n,updateStatus:a}))):r.a.createElement(ce,null)},ze=n(74),Ge=n.n(ze),Be=n(137),He=n.n(Be);var We=function(e){return r.a.createElement("div",{className:He.a.item},r.a.createElement("img",{src:"https://i.pinimg.com/736x/14/79/9d/14799d9779f9b44d7116783ce7121d5f.jpg"}),e.message,r.a.createElement("div",null,r.a.createElement("span",null,"Like")," ",e.likesCount))},Je=n(40),Ve=Object(Le.a)("textarea"),qe=Object(Je.a)(10),Xe=Object(Fe.a)({form:"addPostForm"})((function(e){return r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("div",{className:Ge.a.newPostBody},r.a.createElement(Ne.a,{component:Ve,name:"newPostBody",placeholder:"Post",validate:[Je.b,qe]})),r.a.createElement("div",null,r.a.createElement("button",null,"Add post")))})),Ke=function(e){var t=Object(j.a)(e.posts).reverse().map((function(e){return r.a.createElement(We,{message:e.message,key:e.id,likesCount:e.likesCount})}));return r.a.createElement("div",{className:Ge.a.posts},r.a.createElement("h3",null,"My posts"),r.a.createElement(Xe,{onSubmit:function(t){e.addPost(t.newPostBody)}}),r.a.createElement("div",{className:Ge.a.post},t))},Ye=Object(b.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",newPostText:e}}(t))}}}))(Ke);var Ze=function(e){return r.a.createElement("div",null,r.a.createElement(Me,e),r.a.createElement(Ye,null))},Qe=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userId!=e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(Ze,Object.assign({isOwner:!this.props.match.params.userId},this.props)))}}]),n}(r.a.Component),$e=Object(ie.d)(Object(b.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth,profileEditStatus:e.profilePage.profileEditStatus,isFetching:e.profilePage.isFetching}}),{setUserProfile:be,getUserProfile:je,getStatus:function(e){return function(){var t=Object(S.a)(_.a.mark((function t(n){var a;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.getStatus(e);case 2:a=t.sent,n(Oe(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(S.a)(_.a.mark((function t(n){return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,N.updateStatus(e);case 3:0===t.sent.data.resultCode&&n(Oe(e)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),alert(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},savePhoto:function(e){return function(){var t=Object(S.a)(_.a.mark((function t(n){var a;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,N.savePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n({type:"SAVE_PHOTO_SUCCESS",photos:a.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(S.a)(_.a.mark((function t(n,a){var r,o;return _.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.userId,t.next=3,N.saveProfile(e);case 3:0===(o=t.sent).data.resultCode?(n(_e(!1)),n(Se(!1)),n(je(r))):1===o.data.resultCode&&(n(Se(!1)),n(Object(Ee.a)("edit-profile",{_error:o.data.messages[0]})));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},setProfileEditStatus:_e,editIsFetching:Se}),m.g)(Qe),et=n(96),tt=n.n(et);var nt=function(e){return r.a.createElement("header",{className:tt.a.header},r.a.createElement("img",{src:"https://i.pinimg.com/originals/33/b8/69/33b869f90619e81763dbf1fccc896d8d.jpg"}),r.a.createElement("div",{className:tt.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:e.Logout},"Logout")," "):r.a.createElement(f.b,{to:"/login"},"Login")))},at={userId:null,email:null,login:null,isAuth:!1,captchaURL:null},rt=function(e,t,n,a){return{type:"auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:a}}},ot=function(e){return{type:"auth/SET_USER_DATA",payload:{captchaURL:e}}},ct=function(){return function(){var e=Object(S.a)(_.a.mark((function e(t){var n,a,r,o,c;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,o=a.email,c=a.login,t(rt(r,o,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},it=function(){return function(){var e=Object(S.a)(_.a.mark((function e(t){return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F();case 2:0===e.sent.data.resultCode&&t(rt(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},st=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"auth/SET_USER_DATA":case"auth/SET_CAPTCHA_URL":return Object(P.a)(Object(P.a)({},e),t.payload);default:return e}},ut=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(nt,this.props)}}]),n}(r.a.Component),lt=Object(b.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{Logout:it})(ut),mt=(n(294),Object(Le.a)("input")),ft=Object(Fe.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,a=e.captchaURL;return r.a.createElement("form",{onSubmit:t},Te("Email","email",[Je.b],mt),Te("Password","password",[Je.b],mt,{type:"password"}),Te(null,"rememberMe",[],mt,{type:"checkbox"},"Remember Me"),n&&r.a.createElement("div",{className:ke.a.formSummaryError},n),a&&r.a.createElement("img",{src:a}),a&&Te("Write correct symbols","captcha",[Je.b],mt),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))})),pt=Object(b.b)((function(e){return{isAuth:e.auth.isAuth,captchaURL:e.auth.captchaURL}}),{Logout:it,Login:function(e,t,n,a){return function(){var r=Object(S.a)(_.a.mark((function r(o){var c,i;return _.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,L(e,t,n,a);case 2:0===(c=r.sent).data.resultCode?o(ct()):(10===c.data.resultCode&&o(function(){var e=Object(S.a)(_.a.mark((function e(t){var n,a;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:n=e.sent,a=n.data.url,t(ot(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),i=c.data.messages.length>0?c.data.messages[0]:"Some error",o(Object(Ee.a)("login",{_error:i})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(m.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement(ft,{onSubmit:function(t){e.Login(t.email,t.password,t.rememberMe,t.captcha)},captchaURL:e.captchaURL}))})),dt={initialized:!1},gt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:dt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCES":return Object(P.a)(Object(P.a)({},e),{},{initialized:!0});default:return e}},ht=n(128),Et={},vt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Et;return e},bt=n(138),Ot=n(131),_t=Object(ie.c)({profilePage:Pe,dialogsPage:ht.a,sidebar:vt,usersPage:H,auth:st,form:Ot.a,app:gt}),St=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ie.d,jt=Object(ie.e)(_t,St(Object(ie.a)(bt.a)));window.__store__=jt;var Pt=jt,wt=r.a.lazy((function(){return n.e(3).then(n.bind(null,297))})),yt=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).catchAllUnhandledErrors=function(e){alert("Some errors"),console.log(e)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(lt,null),r.a.createElement(g,null),r.a.createElement("div",{className:"app-wrapper__content"},r.a.createElement(m.d,null,r.a.createElement(m.a,{exact:!0,from:"/",to:"/profile"}),r.a.createElement(m.b,{path:"/dialogs",render:(e=wt,function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(ce,null)},r.a.createElement(e,t))})}),r.a.createElement(m.b,{path:"/profile/:userId?",render:function(){return r.a.createElement($e,null)}}),r.a.createElement(m.b,{path:"/users",render:function(){return r.a.createElement(he,null)}}),r.a.createElement(m.b,{path:"/news",render:function(){return r.a.createElement(h,null)}}),r.a.createElement(m.b,{path:"/login",render:function(){return r.a.createElement(pt,null)}}),r.a.createElement(m.b,{path:"/music",render:function(){return r.a.createElement(v,null)}}),r.a.createElement(m.b,{path:"/settings",render:function(){return r.a.createElement(E,null)}}),r.a.createElement(m.b,{path:"*",render:function(){return r.a.createElement("div",null,"404")}})))):r.a.createElement(ce,null);var e}}]),n}(r.a.Component),Ct=Object(ie.d)(Object(b.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(ct());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCES"})}))}}}),m.g)(yt),It=function(e){return r.a.createElement(f.a,null,r.a.createElement(b.a,{store:Pt},r.a.createElement(Ct,null)))};c.a.render(r.a.createElement(It,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},38:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(71),r=n(0),o=n.n(r),c=n(39),i=n.n(c),s=function(e){return function(t){var n=t.input,r=t.meta,c=r.touched,s=r.error,u=t.type,l=Object(a.a)(t,["input","meta","type"]),m=c&&s;return o.a.createElement("div",{className:i.a.formControl+" "+(m?i.a.error:"")},o.a.createElement("div",null,function(t){return o.a.createElement(e,Object.assign({},n,l,{type:t}))}(u)),m&&o.a.createElement("span",null,s))}}},39:function(e,t,n){e.exports={formControl:"FormsControls_formControl__eVlZ0",error:"FormsControls_error__1cRJs",formSummaryError:"FormsControls_formSummaryError__3XQQn"}},40:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}}},69:function(e,t,n){e.exports=n.p+"static/media/User.a4c1f699.jpg"},72:function(e,t,n){e.exports={pages:"Paginator_pages__3KXEK",selectedPage:"Paginator_selectedPage___Nuxc"}},74:function(e,t,n){e.exports={posts:"MyPosts_posts__1sCw_",post:"MyPosts_post__1TzJI"}},96:function(e,t,n){e.exports={header:"Header_header__1ReLy",loginBlock:"Header_loginBlock__3S3Bv"}}},[[164,1,2]]]);
//# sourceMappingURL=main.505bdf43.chunk.js.map