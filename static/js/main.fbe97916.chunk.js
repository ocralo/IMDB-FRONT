(this["webpackJsonpimdb-front"]=this["webpackJsonpimdb-front"]||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),s=a.n(c);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var i=a(26),o=a(7),E=a(20),l=a(111),u=a(112),S=a(65),m=a(19),d=a(14),p=a(36),_=a(5);function f(e){return{type:"FETCH_SERIES_PAGE_SUCCESS",series:e}}function b(e){return{type:"FETCH_SERIES_PAGE_ERROR",error:e}}function h(e){return{type:"FETCH_SERIES_SUCCESS",series:e}}function g(e){return{type:"FETCH_SERIES_ERROR",error:e}}function v(e){return{type:"FETCH_SERIES_SEARCH_PAGE_SUCCESS",seriesSearch:e}}function C(e){return{type:"FETCH_SERIES_SEARCH_PAGE_ERROR",error:e}}function R(e){return{type:"FETCH_SERIES_SEARCH_SUCCESS",seriesSearch:e}}function O(e){return{type:"FETCH_SERIES_SEARCH_ERROR",error:e}}function I(e){return{type:"FETCH_SERIES_ESPECIFIC_SUCCESS",seriesEspecific:e}}function j(e){return{type:"FETCH_SERIES_ESPECIFIC_ERROR",error:e}}function N(e){return{type:"FETCH_SERIES_ESPECIFIC_SEASONS_SUCCESS",seriesEspecificSeason:e}}function y(e){return{type:"FETCH_SERIES_ESPECIFIC_SEASONS_ERROR",error:e}}var F={pending:!1,series:[],seriesSearch:[],seriesEspecific:{},seriesEspecificSeason:{},error:null,errorSeason:null,errorSearch:null};var H=function(e){return e.series},T=function(e){return e.seriesSearch},P=function(e){return e.seriesEspecific},A=function(e){return e.seriesEspecificSeason},k=function(e){return e.pending},w=function(e){return e.error},G=function(e){return e.errorSearch},D=function(e){return e.errorSeason},U=a(117);function x(e){var t=e.title,a=void 0===t?"titulo":t,n=e.imageURL,c=e.vote_average,s=e.idSerie,i=Object(o.f)();return r.a.createElement("div",{className:"flip-card mt-4",onDoubleClick:function(){i.push("/Series/".concat(s))}},r.a.createElement("div",{className:"flip-card-inner"},r.a.createElement(U.a,{className:"shadow flip-card-front"},r.a.createElement(U.a.Img,{variant:"top",src:n?"https://image.tmdb.org/t/p/w500".concat(n):"".concat(".","/img/error.svg"),height:"167.453"}),r.a.createElement(U.a.Body,{className:"p-2"},r.a.createElement(U.a.Title,{className:"m-0"},a))),r.a.createElement(U.a,{className:"shadow flip-card-back"},r.a.createElement(U.a.Body,{className:"p-2"},r.a.createElement(U.a.Title,{className:"m-0"},a),r.a.createElement(U.a.Text,{className:"mt-2"},"Rating : ",c)))))}var L=a(24),B=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(a){1!==t?(a({type:"FETCH_SERIES_PAGE_PENDING"}),L.get("".concat(e,"?api_key=b2907782d07859a652052d3bae537475&page=").concat(t)).then((function(e){var t=e.data.results;return a(f(t)),t})).catch((function(e){console.log(e),a(b(e))}))):(a({type:"FETCH_SERIES_PENDING"}),L.get("".concat(e,"?api_key=b2907782d07859a652052d3bae537475&page=").concat(t)).then((function(e){var t=e.data.results;return a(h(t)),t})).catch((function(e){console.log(e),a(g(e))})))}},q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"a";return function(n){1!==t?(n({type:"FETCH_SERIES_SEARCH_PAGE_PENDING"}),L.get("".concat(e,"?api_key=b2907782d07859a652052d3bae537475&page=").concat(t,"&query=").concat(a)).then((function(e){var t=e.data.results;return n(v(t)),t})).catch((function(e){console.log(e),n(C(e))}))):(n({type:"FETCH_SERIES_SEARCH_PENDING"}),L.get("".concat(e,"?api_key=b2907782d07859a652052d3bae537475&page=").concat(t,"&query=").concat(a)).then((function(e){var t=e.data.results;return n(R(t)),t})).catch((function(e){console.log(e),n(O(e))})))}},M=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:63174;return function(a){a({type:"FETCH_SERIES_ESPECIFIC_PENDING"}),L.get("".concat(e).concat(t,"?api_key=b2907782d07859a652052d3bae537475")).then((function(e){var t=e.data;return a(I(t)),t})).catch((function(e){console.log(e),a(j(e))}))}},J=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return function(n){n({type:"FETCH_SERIES_ESPECIFIC_SEASONS_PENDING"}),L.get("".concat(e).concat(t,"/season/").concat(a,"?api_key=b2907782d07859a652052d3bae537475")).then((function(e){var t=e.data;return n(N(t)),t})).catch((function(e){console.log(e),n(y(e))}))}},K=Object(m.b)((function(e){return{error:w(e),series:H(e),pending:k(e)}}),(function(e){return Object(d.b)({fetchSeries:B},e)}))((function(e){var t=e.fetchSeries,a=e.series,c=Object(n.useState)(2),s=Object(E.a)(c,2),i=s[0],o=s[1];Object(n.useEffect)((function(){t("https://api.themoviedb.org/3/discover/tv")}),[t]);return r.a.createElement(l.a,{className:"mt-4"},r.a.createElement(u.a,null,r.a.createElement(S.a,null,r.a.createElement("h1",null,"Series Populares"))),r.a.createElement(u.a,null,r.a.createElement(p.a,{dataLength:a.length,next:function(){var e=i;t("https://api.themoviedb.org/3/discover/tv",i),e++,o(e)},hasMore:!0,loader:r.a.createElement("h4",null,"Loading..."),className:"row"},a.map((function(e){return r.a.createElement(S.a,{xs:12,md:6,sm:6,lg:4,key:e.id},r.a.createElement(x,{title:e.name,imageURL:e.backdrop_path,vote_average:e.vote_average,idSerie:e.id}))})))))})),V=Object(m.b)((function(e){return{error:G(e),series:T(e),pending:k(e)}}),(function(e){return Object(d.b)({fetchSeries:q},e)}))((function(e){var t=e.fetchSeries,a=e.series,c=e.error,s=Object(o.h)().query,i=Object(n.useState)(1),m=Object(E.a)(i,2),d=m[0],_=m[1];Object(n.useEffect)((function(){var e=1;t("https://api.themoviedb.org/3/search/tv",e,s),e++,_(e)}),[s]);return console.log(a),!c&&a.length>0?r.a.createElement(l.a,{className:"mt-4"},r.a.createElement(u.a,null,r.a.createElement(S.a,null,r.a.createElement("h1",null,'Series relacionadas a: "',s,'"'))),r.a.createElement(u.a,null,r.a.createElement(p.a,{dataLength:a.length,next:function(){var e=d;t("https://api.themoviedb.org/3/search/tv",d,s),e++,_(e)},hasMore:!0,loader:r.a.createElement("h4",null,"Loading..."),className:"row"},a.map((function(e,t){return r.a.createElement(S.a,{xs:12,md:6,sm:6,lg:4,key:t+"-"+e.id},r.a.createElement(x,{title:e.name,imageURL:e.backdrop_path,vote_average:e.vote_average,idSerie:e.id}))}))))):r.a.createElement(l.a,{className:"mt-4"},r.a.createElement(u.a,null,r.a.createElement(S.a,{className:"text-center"},r.a.createElement("h1",null,"No se encontro coincidencia en la busqueda"),r.a.createElement("img",{src:"".concat(".","/img/question.svg"),width:"300",alt:"not found",className:"mt-4"}))))})),W=a(118),X=a(120),Y=Object(m.b)((function(e){return{error:w(e),serie:P(e),serieSeason:A(e),pending:k(e),errorSeason:D(e)}}),(function(e){return Object(d.b)({fetchSeries:M,fetchSeasons:J},e)}))((function(e){var t=e.fetchSeries,a=e.fetchSeasons,c=e.serie,s=e.serieSeason,i=e.errorSeason,E=Object(o.h)().id;Object(n.useEffect)((function(){t("https://api.themoviedb.org/3/tv/",E),a("https://api.themoviedb.org/3/tv/",E,0)}),[a,t,E]),Object(n.useEffect)((function(){a("https://api.themoviedb.org/3/tv/",E,1)}),[i,a,E]);return r.a.createElement(l.a,{className:"mt-5 mb-5"},r.a.createElement(u.a,null,r.a.createElement(S.a,null,r.a.createElement(U.a,{className:"shadow"},r.a.createElement(U.a.Img,{variant:"top",src:(null===c||void 0===c?void 0:c.poster_path)?"https://image.tmdb.org/t/p/w500".concat(c.poster_path):"https://image.tmdb.org/t/p/w500/k1lICEYRpJeFRIRfjxYwmpO9LTu.jpg",className:"poster-img"}),r.a.createElement(U.a.Body,null,r.a.createElement(U.a.Title,{className:"mb-0"},null===c||void 0===c?void 0:c.name)))),r.a.createElement(S.a,null,r.a.createElement(u.a,null,r.a.createElement(S.a,null,r.a.createElement("h3",null,"Temporadas"))),r.a.createElement(u.a,null,r.a.createElement(S.a,null,r.a.createElement(W.a,{variant:"tabs",defaultActiveKey:"1",onSelect:function(e){a("https://api.themoviedb.org/3/tv/",E,e)}},Array.isArray(null===c||void 0===c?void 0:c.seasons)?null===c||void 0===c?void 0:c.seasons.map((function(e){return r.a.createElement(W.a.Item,{key:null===e||void 0===e?void 0:e.id},r.a.createElement(W.a.Link,{eventKey:"".concat(null===e||void 0===e?void 0:e.season_number)},null===e||void 0===e?void 0:e.season_number))})):""))),r.a.createElement(u.a,null,r.a.createElement(S.a,null,r.a.createElement(X.a,null,Array.isArray(s.episodes)?s.episodes.map((function(e){return r.a.createElement(X.a.Item,{key:e.id,className:"border-top-0 rounded-0 rounded-bottom d-flex justify-content-between"},r.a.createElement("span",null,e.name),r.a.createElement("span",null,"Episodio"," ",e.episode_number))})):r.a.createElement(X.a.Item,{className:"border-top-0 rounded-0 rounded-bottom"}," ")))))))})),$=a(115),Q=a(113),z=a(116),Z=a(119),ee=a(114),te=a(72);function ae(){var e=Object(n.useState)(!1),t=Object(E.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(null),i=Object(E.a)(s,2),l=i[0],u=i[1],S=Object(n.useState)(""),m=Object(E.a)(S,2),d=m[0],p=m[1],_=Object(n.useRef)(null),f=Object(o.g)(),b=Object(o.f)();console.log(f.pathname);return r.a.createElement($.a,{bg:"dark",expand:"lg",variant:"dark",sticky:"top"},r.a.createElement("div",{className:"container"},r.a.createElement($.a.Brand,{href:"/"},"NVC Movie"),r.a.createElement($.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement($.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(W.a,{className:"mr-auto"},f.pathname.indexOf("Series")>=0?r.a.createElement(W.a.Link,{onClick:function(){return b.goBack()}},"Regresar"):""),r.a.createElement("div",{ref:_},r.a.createElement(Q.a,{variant:"outline-success",onClick:function(e){c(!a),u(e.target)},className:"btn-search"},r.a.createElement("img",{src:"".concat(".","/img/search.svg"),alt:"",width:"25"})),r.a.createElement(z.a,{show:a,target:l,placement:"bottom",container:_.current,containerPadding:20},r.a.createElement(Z.a,{id:"popover-contained"},r.a.createElement(Z.a.Title,{as:"h3"},"\xbfQue serie Buscas?"),r.a.createElement(Z.a.Content,null,r.a.createElement(ee.a,{onSubmit:function(e){e.preventDefault(),b.push("/search/".concat(d))}},r.a.createElement(te.a,{type:"text",placeholder:"Buscar...",className:"mr-sm-2 mb-2",onChange:function(e){var t=e.target.value;p(t)},name:"search",pattern:"'/[^\\w\\s+$]/u'",title:"No se aceptan caracteres especiales en la busqueda"}),r.a.createElement(Q.a,{variant:"success",type:"submit",block:!0},"Buscar")," "))))))))}function ne(){return r.a.createElement(i.a,null,r.a.createElement(ae,null),r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/"},r.a.createElement(K,null)),r.a.createElement(o.a,{exact:!0,path:"/Series/:id"},r.a.createElement(Y,null)),r.a.createElement(o.a,{path:"/search/:query"},r.a.createElement(V,null))))}a(105);var re=a(73).a,ce="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||d.c,se=Object(d.d)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_SERIES_PENDING":return Object(_.a)(Object(_.a)({},e),{},{pending:!0});case"FETCH_SERIES_SUCCESS":return Object(_.a)(Object(_.a)({},e),{},{pending:!1,series:t.series});case"FETCH_SERIES_ERROR":return Object(_.a)(Object(_.a)({},e),{},{pending:!1,error:t.error});case"FETCH_SERIES_PAGE_PENDING":return Object(_.a)(Object(_.a)({},e),{},{pending:!0});case"FETCH_SERIES_PAGE_SUCCESS":var a=t.series;return Object(_.a)(Object(_.a)({},e),{},{pending:!1,series:e.series.concat(a)});case"FETCH_SERIES_PAGE_ERROR":return Object(_.a)(Object(_.a)({},e),{},{pending:!1,error:t.error,series:e.series});case"FETCH_SERIES_SEARCH_PENDING":return Object(_.a)(Object(_.a)({},e),{},{pending:!0,seriesSearch:e.seriesSearch});case"FETCH_SERIES_SEARCH_SUCCESS":return Object(_.a)(Object(_.a)({},e),{},{pending:!1,seriesSearch:t.seriesSearch});case"FETCH_SERIES_SEARCH_PAGE_ERROR":return Object(_.a)(Object(_.a)({},e),{},{pending:!1,errorSearch:t.error,seriesSearch:e.seriesSearch});case"FETCH_SERIES_SEARCH_PAGE_PENDING":return Object(_.a)(Object(_.a)({},e),{},{pending:!0,seriesSearch:e.seriesSearch});case"FETCH_SERIES_SEARCH_PAGE_SUCCESS":var n=t.seriesSearch;return Object(_.a)(Object(_.a)({},e),{},{pending:!1,seriesSearch:e.seriesSearch.concat(n)});case"FETCH_SERIES_SEARCH_ERROR":return Object(_.a)(Object(_.a)({},e),{},{pending:!1,error:t.error,seriesSearch:e.seriesSearch});case"FETCH_SERIES_ESPECIFIC_PENDING":return Object(_.a)(Object(_.a)({},e),{},{pending:!0,seriesEspecific:e.seriesEspecific});case"FETCH_SERIES_ESPECIFIC_SUCCESS":return Object(_.a)(Object(_.a)({},e),{},{pending:!1,seriesEspecific:t.seriesEspecific});case"FETCH_SERIES_ESPECIFIC_ERROR":return Object(_.a)(Object(_.a)({},e),{},{pending:!1,error:t.error,seriesEspecific:e.seriesEspecific});case"FETCH_SERIES_ESPECIFIC_SEASONS_PENDING":return Object(_.a)(Object(_.a)({},e),{},{pending:!0,seriesEspecificSeason:e.seriesEspecificSeason});case"FETCH_SERIES_ESPECIFIC_SEASONS_SUCCESS":return Object(_.a)(Object(_.a)({},e),{},{pending:!1,seriesEspecificSeason:t.seriesEspecificSeason});case"FETCH_SERIES_ESPECIFIC_SEASONS_ERROR":return Object(_.a)(Object(_.a)({},e),{},{pending:!1,errorSeason:t.error,seriesEspecificSeason:e.seriesEspecificSeason});default:return e}}),ce(Object(d.a)(re)));s.a.render(r.a.createElement(m.a,{store:se},r.a.createElement(ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},76:function(e,t,a){e.exports=a(106)}},[[76,1,2]]]);
//# sourceMappingURL=main.fbe97916.chunk.js.map