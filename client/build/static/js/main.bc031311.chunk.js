(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){e.exports={navbar:"NavBar_navbar__1ntpA"}},105:function(e,t,n){e.exports={share_btn:"share_btn_share_btn__3e_Od"}},109:function(e,t,n){e.exports=n(268)},114:function(e,t,n){},115:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){},126:function(e,t,n){},127:function(e,t,n){},145:function(e,t){},181:function(e,t,n){},235:function(e,t,n){},236:function(e,t,n){},266:function(e,t,n){},268:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(46),o=n.n(c),s=n(13),i=n(14),l=n(16),u=n(15),p=n(17),m=n(23),d=(n(114),function(e){e.links,e.location;return r.a.createElement("h1",{className:"logo"},"Blog.app")}),f=n(21),g=(n(115),function(e){var t=e.links,n=e.location;return r.a.createElement("ul",{className:"main-menu"},t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement(f.b,{className:n.pathname===e.path?"active":"",to:e.path},e.title))})))}),_=Object(m.f)((function(e){return r.a.createElement(g,e)})),E=n(100),b=n.n(E),h=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={links:[{path:"/blog/",title:"Home"},{path:"/blog/posts",title:"Posts"}]},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.links;return r.a.createElement("nav",{className:b.a.navbar},r.a.createElement(d,{links:"",location:""}),r.a.createElement(_,{links:e}))}}]),t}(r.a.Component),v=(n(122),function(e){var t=e.children;return r.a.createElement("div",{className:"container-fluid"},t)}),P=function(e){return r.a.createElement(a.Fragment,null,r.a.createElement(v,null,r.a.createElement(h,null),e.children))},O=(n(123),function(e){var t=e.children;return r.a.createElement("h1",{className:"page-title"},t)}),k=n(20);var j=n(33),y=(n(126),function(e){var t=e.variant,n=void 0===t?"":t,a=e.children,c=Object(j.a)(e,["variant","children"]);return r.a.createElement("button",Object.assign({},c,{className:"button button--".concat(n)}),a)}),S=(n(127),function(e){var t=e.children,n=Object(j.a)(e,["children"]);return r.a.createElement("h2",Object.assign({},n,{className:"small-title"}),t)}),x=n(103),N=n.n(x),w=function(e){return r.a.createElement("div",{className:"html-box"},N()(e.children))},R=n(65),T=n.n(R),C=function(e){return r.a.createElement("p",{className:"primary"===e.role?T.a.author_text:"secondary"===e.role?T.a.author_text_secondary:""},e.children)};C.defaultProps={role:"primary"};var D=C,A=n(108),q=n(48),B=n.n(q),I=function(e){var t=Object(a.useState)(e.likes),n=Object(A.a)(t,2),c=n[0],o=n[1],s=function(t){o(c+t),e.likePost(e.id,t)};return r.a.createElement("div",{className:B.a.like_box},c," likes",r.a.createElement("br",null),r.a.createElement("button",{className:B.a.like_btn,onClick:function(){s(1)}},"Like"),r.a.createElement("button",{className:B.a.like_btn_dislike,onClick:function(){s(-1)}},"Dislike"))},L=n(104),M=n(6),G=n.n(M),U=n(24),Q="POSTS_GET_ALL",F="POSTS_GET_PAGE",J="POSTS_GET_ONE",K="POSTS_ADD_ONE",V="POSTS_RESET_SINGLE_POST",H="POSTS_START_REQUEST",Y="POSTS_END_REQUEST",z="POSTS_ERROR",W="RESET_REQUEST_DATA",X=n(25),Z=n.n(X);function $(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?$(n,!0).forEach((function(t){Object(L.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var te=function(e){return e.data},ne=function(e){return Math.ceil(e.amount/e.postsPerPage)},ae=function(e){return e.presentPage},re=function(e){return e.request.pending},ce=function(e){return e.amount>0?e.amount.toString():"no posts"},oe=function(e){var t=e.request.errorMsg;return null===t?"":t},se=function(e){return e.request.error},ie=function(e){return e.request.success},le=function(e){return e.singlePost[0]},ue=function(e){return{type:F,payload:e}},pe=function(){return{type:H}},me=function(){return{type:Y}},de=function(e){return{type:z,payload:e}},fe=function(e){return{type:J,payload:e}},ge=function(){return{type:V}},_e={data:[],amount:0,presentPage:1,postsPerPage:4,singlePost:[{title:"",author:"",content:"",id:"",_id:"",likes:0,createdAt:new Date,updatedAt:new Date}],request:{pending:!1,error:!1,postSuccess:!1,success:!1,errorMsg:null}};var Ee=Object(k.b)((function(e,t){return{id:t.id,likes:t.likes}}),(function(e){return{likePost:function(t,n){return e(function(e,t){return function(){var n=Object(U.a)(G.a.mark((function n(a){return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Z.a.put("/blog/api/post/likes/".concat(e,"/").concat(t));case 3:n.sent,a({type:"POSTS_LIKE"}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),a(de(n.t0.message));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()}(t,n))}}}))(I),be=(n(181),function(e){var t=e.title,n=e.content,a=e.id,c=e.author,o=e.createdAt,s=e.likes;return r.a.createElement("article",{className:"post-summary"},r.a.createElement(S,null,t),r.a.createElement(Ee,{id:a,likes:s}),r.a.createElement(D,{role:"secondary"},"By: ".concat(c)),r.a.createElement(D,{role:"secondary"},"Added: ".concat(new Date(o).toLocaleString())),r.a.createElement(w,null,function(e,t){var n=e.substr(0,t).lastIndexOf(" ");return"".concat(e.substr(0,n),"...")}(n,100)),r.a.createElement(f.b,{to:"/blog/posts/".concat(a)},r.a.createElement(y,{variant:"primary"},"Read more")))}),he=function(e){return r.a.createElement("div",null,r.a.createElement("section",{className:"posts-list"},e.posts.map((function(e){return r.a.createElement(be,Object.assign({key:e.id},e))}))))},ve=n(107),Pe=n(28),Oe=n.n(Pe),ke=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).changePage=function(e){var t=n.props.onPageChange;n.setState({presentPage:e}),t(e)},n.state={presentPage:n.props.initialPage},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.pages,n=e.activePage,a=this.changePage;return r.a.createElement("div",{className:Oe.a.pagination},r.a.createElement("ul",{className:Oe.a.pagination__list},n>1&&r.a.createElement("li",{className:Oe.a.pagination__list__item,onClick:function(){a(n-1)}},"<"),Object(ve.a)(Array(t)).map((function(e,t){return r.a.createElement("li",{key:++t,onClick:function(){a(t)},className:"".concat(Oe.a.pagination__list__item," ").concat(t===n?Oe.a.pagination__list__item_active:"")},t)})),n<t&&r.a.createElement("li",{className:Oe.a.pagination__list__item,onClick:function(){a(n+1)}},">")))}}]),t}(a.Component);ke.defaultProps={initialPage:1,activePage:1};var je=n(47),ye=(n(235),function(){return r.a.createElement(je.Animated,{animationIn:"fadeIn",animationOut:"fadeOut"},r.a.createElement("div",{className:"lds-ellipsis"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),Se=n(34),xe=(n(236),function(e){var t=e.variant,n=void 0===t?"":t,a=e.children,c=Object(j.a)(e,["variant","children"]);return r.a.createElement(je.Animated,{animationIn:"fadeIn",animationOut:"fadeOut"},r.a.createElement("div",Object.assign({},c,{className:"alert alert--".concat(n)}),function(){switch(n){case"info":return r.a.createElement(Se.c,null);case"success":return r.a.createElement(Se.a,null);case"warning":case"error":return r.a.createElement(Se.b,null);default:return r.a.createElement(Se.c,null)}}(),r.a.createElement("span",{className:"alert__desc"},a)))}),Ne=function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).pageChange=function(e){var t=n.props,a=t.postsGetPage,r=t.postsPerPage;r?a(e,r):a(e)},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.postsGetPage,n=e.postsGetRandom,a=e.resetRequestData,r=e.initPage,c=e.postsPerPage,o=e.random;a(),o?n():c?t(r,c):t(r)}},{key:"render",value:function(){var e=this,t=this.props,n=t.activePage,a=t.posts,c=t.singlePost,o=t.random,s=t.pending,i=t.error,l=t.success,u=t.errorMsg,p=t.noOfPages,m=t.pagination;return s||l||!i?(!o||s||!l||i||c)&&(o||s||!l||i||0!==a.length)?s||!l&&0===a.length?r.a.createElement(ye,null):l?!s&&l&&!i&&(a.length>0||c)?r.a.createElement("div",null,r.a.createElement(he,{posts:o?[c]:a}),m&&r.a.createElement(ke,{activePage:n,pages:p,onPageChange:function(t){e.pageChange(t)}})):void 0:r.a.createElement(ye,null):r.a.createElement(xe,{variant:"info"},"No posts..."):r.a.createElement(xe,{variant:"error"},u)}}]),t}(r.a.Component);Ne.defaultProps={initPage:1,pagination:!0,random:!1};var we=Ne,Re=Object(k.b)((function(e,t){return{posts:te(e.postsReducer),singlePost:le(e.postsReducer),pending:re(e.postsReducer),error:se(e.postsReducer),success:ie(e.postsReducer),errorMsg:oe(e.postsReducer),noOfPages:ne(e.postsReducer),activePage:ae(e.postsReducer),initPage:t.initPage,postsPerPage:t.postsPerPage,pagination:t.pagination,random:t.random}}),(function(e){return{postsGetPage:function(t,n){return e(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:_e.postsPerPage;return function(){var n=Object(U.a)(G.a.mark((function n(a){var r,c,o;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(pe()),r=(e-1)*t,n.prev=2,n.next=5,Z.a.get("/blog/api/posts/range/".concat(r,"/").concat(t));case 5:c=n.sent,o={postsPerPage:t,presentPage:e,amount:c.data.postsCount,data:c.data.posts},a(me()),a(ue(o)),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(2),a(de(n.t0.message));case 14:case"end":return n.stop()}}),n,null,[[2,11]])})));return function(e){return n.apply(this,arguments)}}()}(t,n))},resetRequestData:function(){return e({type:W})},postsGetRandom:function(){return e(function(){var e=Object(U.a)(G.a.mark((function e(t){var n,a;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(ge()),t(pe()),e.prev=2,e.next=5,Z.a.get("/blog/api/post/random");case 5:return n=e.sent,e.next=8,n.data;case 8:a=e.sent,t(fe(a.randomPost)),t(me()),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),t(de(e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t){return e.apply(this,arguments)}}())}}}))(we),Te=function(){return r.a.createElement("div",null,r.a.createElement(O,null,"Blog"),r.a.createElement(Re,{pagination:!1,postsPerPage:3}))},Ce=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.postsCount;return r.a.createElement("div",null,"Posts amount: ",e)}}]),t}(r.a.Component),De=Object(k.b)((function(e){return{postsCount:ce(e.postsReducer)}}))(Ce),Ae=function(){return r.a.createElement("div",null,r.a.createElement(O,null,"Posts list"),r.a.createElement(De,null),r.a.createElement(Re,null))},qe=n(49),Be=n(105),Ie=n.n(Be),Le=Object({NODE_ENV:"production",PUBLIC_URL:"",REACT_APP_MODE:"production"}).BASE_URL||"http://www.localhost:3000",Me=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props;(0,e.fetchPost)(e.postId)}},{key:"render",value:function(){var e=this.props,t=e.singlePost,n=e.pending,a=e.success,c=e.error,o=e.location;return n?r.a.createElement(ye,null):""===t.title||""===t.content?r.a.createElement(ye,null):n||a||!c?t?n||!a||c?void 0:r.a.createElement("div",null,r.a.createElement(O,null,t.title),r.a.createElement(qe.FacebookProvider,{appId:"561114797761802"},r.a.createElement(qe.ShareButton,{className:Ie.a.share_btn,href:"".concat(Le).concat(o.pathname)},"Share on Facebook"),r.a.createElement(D,{role:"secondary"},"By: ".concat(t.author)),r.a.createElement(D,{role:"secondary"},"Added: ".concat(new Date(t.createdAt).toLocaleString())),r.a.createElement(w,null,t.content),r.a.createElement(Ee,{id:t.id,likes:t.likes}),r.a.createElement(qe.Comments,{width:"100%",href:"".concat(Le).concat(o.pathname)}))):r.a.createElement("p",null," "):r.a.createElement("p",null,"error")}}]),t}(a.Component),Ge=Object(m.f)(Me),Ue=Object(k.b)((function(e,t){return{singlePost:le(e.postsReducer),postId:t.id,pending:re(e.postsReducer),error:se(e.postsReducer),success:ie(e.postsReducer),errorMsg:oe(e.postsReducer)}}),(function(e){return{fetchPost:function(t){return e(function(e){return function(){var t=Object(U.a)(G.a.mark((function t(n){var a,r;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(ge()),n(pe()),t.prev=2,t.next=5,Z.a.get("/blog/api/post/".concat(e));case 5:return a=t.sent,t.next=8,a.data;case 8:r=t.sent,n(fe(r)),n(me()),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(2),n(de(t.t0.message));case 16:case"end":return t.stop()}}),t,null,[[2,13]])})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(Ge),Qe=function(e){return r.a.createElement("div",null,r.a.createElement(Ue,{id:e.match.params.id}))},Fe=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Page not found... :C"))},Je=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(P,null,r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/blog/",exact:!0,component:Te}),r.a.createElement(m.a,{path:"/blog/posts",exact:!0,component:Ae}),r.a.createElement(m.a,{path:"/blog/posts/:id",exact:!0,component:Qe}),r.a.createElement(m.a,{component:Fe})))}}]),t}(a.Component),Ke=n(27),Ve=n(106),He=Object(Ke.c)({postsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Q:return ee({},e,{data:t.payload});case F:return ee({},e,{data:t.payload.data,amount:t.payload.amount,presentPage:t.payload.presentPage,postsPerPage:t.payload.postsPerPage});case J:return ee({},e,{singlePost:[t.payload]});case K:return ee({},e,{request:ee({},e.request,{postSuccess:t.payload})});case V:return ee({},e,{singlePost:[]});case H:return ee({},e,{request:ee({},e.request,{pending:!0,success:!1,postSuccess:!1,error:!1})});case Y:return ee({},e,{request:ee({},e.request,{pending:!1,error:!1,success:!0,postSuccess:!1,errorMsg:""})});case z:return ee({},e,{request:ee({},e.request,{success:!1,postSuccess:!1,error:!0,pending:!1,errorMsg:t.payload})});case W:return ee({},e,{request:{pending:!1,success:!1,error:!1,errorMsg:"",postSuccess:!1}});default:return e}}}),Ye=Object(Ke.d)(Object(Ke.a)(Ve.a)),ze=Object(Ke.e)(He,Ye);n(266),n(267);o.a.render(r.a.createElement(k.a,{store:ze},r.a.createElement((function(){return r.a.createElement(f.a,null,r.a.createElement(Je,null))}),null)),document.getElementById("root"))},28:function(e,t,n){e.exports={pagination:"Pagination_pagination__1kLD1",pagination__list:"Pagination_pagination__list__djh5l",pagination__list__item:"Pagination_pagination__list__item__2Nqfl",pagination__list__item_active:"Pagination_pagination__list__item_active__3d-Kr"}},48:function(e,t,n){e.exports={like_box:"likes_like_box__20Lkp",like_btn:"likes_like_btn__38QB5",like_btn_dislike:"likes_like_btn_dislike__14cVD"}},65:function(e,t,n){e.exports={author_text:"TextBlock_author_text__jnC-Y",author_text_secondary:"TextBlock_author_text_secondary__3OE4S"}}},[[109,1,2]]]);
//# sourceMappingURL=main.bc031311.chunk.js.map