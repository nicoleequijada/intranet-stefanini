(this["webpackJsonpstefanini-group"]=this["webpackJsonpstefanini-group"]||[]).push([[0],{55:function(e,t,c){},58:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},76:function(e,t,c){},78:function(e,t,c){},88:function(e,t,c){},91:function(e,t,c){},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){},98:function(e,t,c){"use strict";c.r(t);var n=c(7),a=c.n(n),r=c(46),s=c.n(r),i=(c(58),c(0)),o=c.n(i),j=c(3),l=(c(76),c(8));var b=function(){return Object(l.jsxs)("div",{className:"header-container",children:[Object(l.jsx)("div",{className:"logo-container",children:Object(l.jsx)("img",{className:"logo-stefanini",src:"https://i.postimg.cc/mZ3wNtyp/stefanini-png.png",alt:"stefanini-png"})}),Object(l.jsx)("div",{className:"login-btn-container",children:Object(l.jsx)("a",{href:"/Admin",target:"_blank",children:Object(l.jsx)("img",{className:"user-admin",src:"https://i.postimg.cc/2yx7zK5N/user.png",alt:"user"})})})]})},d=c(14),u=c(70),O=c(99),p=c(100),m=c(101),x=c(102),f=(c(78),[{src:"https://i.postimg.cc/HL6NSPcX/pexels-fauxels-3184291-min-opt.jpg",altText:"Titulo",caption:"Bienvenidos al Intranet de Stefanini"},{src:"https://i.postimg.cc/1zBBmnyQ/pexels-andrea-piacquadio-3769021-min-opt.jpg",altText:"Titulo",caption:"Conoce los beneficios que tenemos para ti"},{src:"https://i.postimg.cc/2SFMW5CH/pexels-fauxels-3183197-min-opt.jpg",altText:"Titulo",caption:"Te ayudamos a desarrollar tus habilidades"},{src:"https://i.postimg.cc/zBPkhsL2/mentoring-min-opt.jpg",altText:"Titulo",caption:"Te acompa\xf1amos en todo tu proceso"},{src:"https://i.postimg.cc/85s0xBM3/cumple-min.jpg",altText:"Titulo",caption:"Podras ver los cumplea\xf1eros del mes"}]),h=function(e){var t=Object(n.useState)(0),c=Object(d.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(!1),i=Object(d.a)(s,2),o=i[0],j=i[1],b=function(){if(!o){var e=a===f.length-1?0:a+1;r(e)}},h=function(){if(!o){var e=0===a?f.length-1:a-1;r(e)}},g=f.map((function(e){return Object(l.jsxs)(u.a,{className:"carrusel-item",onExiting:function(){return j(!0)},onExited:function(){return j(!1)},children:[Object(l.jsx)("img",{src:e.src,alt:e.altText}),Object(l.jsx)(O.a,{className:"caption",captionHeader:e.caption})]},e.src)}));return Object(l.jsxs)(p.a,{className:"carrusel-container",activeIndex:a,next:b,previous:h,children:[Object(l.jsx)(m.a,{items:f,activeIndex:a,onClickHandler:function(e){o||r(e)}}),g,Object(l.jsx)(x.a,{className:"",direction:"",directionText:"",onClickHandler:h}),Object(l.jsx)(x.a,{className:"",direction:"",directionText:"",onClickHandler:b})]})};var g=function(){return Object(l.jsx)("footer",{className:"footer-container",children:Object(l.jsx)("div",{className:"footer-credits",children:'Stefanini Intranet by "Las Reactivas" - Laboratoria SCL017'})})},v=(c(88),c(17)),N=c(18),I=(c(64),function(){var e=Object(N.f)(),t=Object(v.b)(e,"Benefits"),c=Object(v.j)(t),n=Object(N.g)(c).data;return n?(console.log(n[0]),Object(l.jsx)("div",{class:"grid-wrapper",children:n.map((function(e,t){return t>1&&t%3===0?Object(l.jsxs)("div",{class:"tall wrapper",children:[Object(l.jsx)("img",{src:e.url,alt:e.titulo}),Object(l.jsx)("p",{class:"text",children:Object(l.jsx)("a",{href:e.urlBeneficio,target:"_blank",rel:"noopener noreferrer",className:"option-link",children:e.titulo})})]},e.NO_ID_FIELD):t>1&&t%4===0?Object(l.jsxs)("div",{class:"wide wrapper",children:[Object(l.jsx)("img",{src:e.url,alt:e.titulo}),Object(l.jsx)("p",{class:"text",children:Object(l.jsx)("a",{href:e.urlBeneficio,target:"_blank",rel:"noopener noreferrer",className:"option-link",children:e.titulo})})]},e.NO_ID_FIELD):Object(l.jsxs)("div",{class:"wrapper",children:[Object(l.jsx)("img",{src:e.url,alt:e.titulo}),Object(l.jsx)("p",{class:"text",children:Object(l.jsx)("a",{href:e.urlBeneficio,target:"_blank",rel:"noopener noreferrer",className:"option-link",children:e.titulo})})]},e.NO_ID_FIELD)}))})):Object(l.jsx)("div",{children:"cargando"})});function k(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(b,{}),Object(l.jsxs)("div",{className:"main-container",children:[Object(l.jsx)(h,{}),Object(l.jsx)(I,{})]}),Object(l.jsx)(g,{})]})}var y=c(33),w=c(43),C=c(103),B=c(104),S=c(105),D=c(106),E=c(107),T=c(108),_=c(31),F=function(){var e,t=Object(N.f)(),c=Object(N.i)(),n=Object(v.b)(t,"Benefits");function a(){return(a=Object(j.a)(o.a.mark((function t(c){var a,r,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c.preventDefault(),a=c.target.formDescripcion.value,r=c.target.urlBeneficio.value,s=c.target.titulo.value,Object(v.a)(n,{titulo:s,descripcion:a,urlBeneficio:r,url:e});case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function r(){return(r=Object(j.a)(o.a.mark((function t(n){var a,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.target.files[0],r=Object(_.d)(c,"documentos/".concat(a.name)),t.next=4,Object(_.e)(r,a);case 4:return t.next=6,Object(_.a)(r);case 6:e=t.sent;case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(l.jsx)(C.a,{children:Object(l.jsxs)(B.a,{onSubmit:function(e){return a.apply(this,arguments)},children:[Object(l.jsxs)(S.a,{className:"mb-2 mr-sm-2 mb-sm-0",children:[Object(l.jsx)(D.a,{for:"titulo",className:"mr-sm-2",children:"Titulo"}),Object(l.jsx)(E.a,{type:"text",id:"titulo",placeholder:"Agrega un titulo"})]}),Object(l.jsxs)(S.a,{className:"mb-2 mr-sm-2 mb-sm-0",children:[Object(l.jsx)(D.a,{for:"formDescripcion",className:"mr-sm-2",children:"Descripci\xf3n"}),Object(l.jsx)(E.a,{type:"text",id:"formDescripcion",placeholder:"Agrega una descripci\xf3n"})]}),Object(l.jsxs)(S.a,{className:"mb-2 mr-sm-2 mb-sm-0",children:[Object(l.jsx)(D.a,{for:"urlBeneficio",className:"mr-sm-2",children:"Url"}),Object(l.jsx)(E.a,{type:"text",id:"urlBeneficio",placeholder:"Agrega una url"})]}),Object(l.jsxs)(S.a,{className:"mb-2 mr-sm-2 mb-sm-0",children:[Object(l.jsx)(D.a,{for:"file",className:"mr-sm-2",children:"Selecciona Archivo"}),Object(l.jsx)(E.a,{type:"file",id:"file",onChange:function(e){return r.apply(this,arguments)}})]}),Object(l.jsx)(T.a,{children:"Enviar"})]})})},L=(c(55),function(){var e=Object(N.f)(),t=Object(v.b)(e,"Benefits"),c=Object(v.j)(t),n=Object(N.g)(c).data;return n?(console.log(n[0]),Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"contenedor",children:Object(l.jsx)("ul",{children:n.map((function(e){return Object(l.jsxs)("li",{className:"item-container",children:[Object(l.jsx)("p",{children:e.descripcion}),Object(l.jsx)("div",{className:"contenedor-img",children:Object(l.jsx)("img",{className:"img-benef",alt:"beneficio",src:e.url})}),Object(l.jsx)("button",{className:"button-delete",onClick:function(){return c=e.NO_ID_FIELD,Object(v.c)(Object(v.d)(t,c));var c},children:"Eliminar"})]},e.NO_ID_FIELD)}))})})})):Object(l.jsx)("div",{children:"cargando"})}),A=c(35),z=c(36),J=c(109),H=c(16),P=c.n(H),q=(c(53),c(65),function(e){var t=e.isOpen;e.toggle;return Object(l.jsxs)("div",{className:P()("sidebar",{"is-open":t}),children:[Object(l.jsx)("div",{className:"header-banner",children:Object(l.jsx)("h3",{children:"Menu"})}),Object(l.jsx)("div",{className:"side-menu",children:Object(l.jsx)(J.a,{vertical:!0,className:"secction-options",children:Object(l.jsxs)("div",{className:"options",children:[Object(l.jsx)("a",{href:"",children:Object(l.jsxs)("span",{children:[" ",Object(l.jsx)(A.a,{icon:z.c,className:"mr-2"})," Crear beneficio"]})}),Object(l.jsx)("a",{href:"",children:Object(l.jsxs)("span",{children:[" ",Object(l.jsx)(A.a,{icon:z.b,className:"mr-2"})," Cumplea\xf1os"]})}),Object(l.jsx)("a",{href:"",children:Object(l.jsxs)("span",{children:[" ",Object(l.jsx)(A.a,{icon:z.d,className:"mr-2"})," Archivos"]})}),Object(l.jsx)("a",{href:"",children:Object(l.jsxs)("span",{children:[" ",Object(l.jsx)(A.a,{icon:z.a,className:"mr-2"})," Notificaciones"]})}),Object(l.jsx)("a",{href:"",children:Object(l.jsxs)("span",{children:[" ",Object(l.jsx)(A.a,{icon:z.f,className:"mr-2"})," Empleados"]})}),Object(l.jsx)("a",{href:"",children:Object(l.jsxs)("span",{children:[" ",Object(l.jsx)(A.a,{icon:z.e,className:"mr-2"})," Reciclaje"]})})]})})})]})}),M=c(110),K=c(111),Q=function(){var e=Object(n.useState)(!0),t=Object(d.a)(e,2),c=t[0],a=t[1],r=Object(N.e)(),s=Object(w.a)(r);return Object(l.jsx)(C.a,{fluid:!0,children:Object(l.jsxs)(M.a,{className:"row",children:[Object(l.jsx)(K.a,{className:"col-auto",children:Object(l.jsx)(q,{toggle:function(){return a(!c)},isOpen:c})}),Object(l.jsxs)(K.a,{children:[Object(l.jsx)(K.a,{sm:{size:"auto",offset:10},children:Object(l.jsx)("button",{className:"button-cerrar",onClick:function(){Object(w.f)(s)},children:"Cerrar Sesi\xf3n"})}),Object(l.jsx)("h1",{className:"admin-title",children:"Bienvenido al portal de Administrador"}),Object(l.jsx)(F,{}),Object(l.jsx)(M.a,{className:"row",children:Object(l.jsx)(L,{})})]})]})})},R=function(e){var t=Object(n.useState)(""),c=Object(d.a)(t,2),a=c[0],r=c[1],s=Object(n.useState)(""),i=Object(d.a)(s,2),b=i[0],u=i[1],O=Object(N.j)(),p=(O.status,O.data);console.log(p);var m=Object(N.e)(),x=Object(y.a)(m);console.log(x);var f=function(){var e=Object(j.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.e)(x,a,b);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return p?Object(l.jsx)(Q,{}):Object(l.jsxs)("div",{className:"login-container",children:[Object(l.jsx)("label",{htmlFor:"email",children:"Correo Electr\xf3nico"}),Object(l.jsx)("input",{type:"email",id:"email",onChange:function(e){return r(e.target.value)}}),Object(l.jsx)("label",{htmlFor:"password",children:"Contrase\xf1a"}),Object(l.jsx)("input",{type:"password",id:"password",onChange:function(e){return u(e.target.value)}}),Object(l.jsx)("button",{onClick:f,children:"Ingresar"})]})};function V(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(R,{})})}c(91);var Y=function(){var e=Object(N.f)(),t=Object(v.b)(e,"BeneficiosEmpleados"),c=Object(v.j)(t,Object(v.i)("id","asc")),n=Object(N.g)(c).data;return n?(console.log(n[0]),Object(l.jsx)(C.a,{children:n.map((function(e){return Object(l.jsx)(M.a,{children:Object(l.jsx)("img",{src:e.url,alt:"",className:"beneficios"})},e.NO_ID_FIELD)}))})):Object(l.jsx)("div",{children:"cargando"})};var U=function(){return Object(l.jsx)(Y,{})},W=(c(92),function(){var e=Object(N.f)(),t=Object(v.b)(e,"Seguro Complementario"),c=Object(v.j)(t,Object(v.i)("id","asc")),n=Object(N.g)(c).data;return n?(console.log(n[0]),Object(l.jsx)(C.a,{children:n.map((function(e){return Object(l.jsx)(M.a,{children:Object(l.jsx)("img",{src:e.url,alt:"",className:"seguro"})},e.NO_ID_FIELD)}))})):Object(l.jsx)("div",{children:"cargando"})});var X=function(){return Object(l.jsx)("h1",{children:"Hola Soy creacion perfil de empleado"})},Z=c(34),G=Object(Z.b)({apiKey:"AIzaSyBJ6PjzeqlYnrycJnjbENSJOdtlb5VixuQ",authDomain:"intranetstefanini-1cdf1.firebaseapp.com",projectId:"intranetstefanini-1cdf1",storageBucket:"intranetstefanini-1cdf1.appspot.com",messagingSenderId:"853178510503",appId:"1:853178510503:web:429bd7a88811278ae33f82"}),$=Object(v.f)(G);console.log(G);var ee=$,te=(c(93),c(94),c(56)),ce=c(24);var ne=function(){var e=Object(N.e)(),t=Object(N.h)(function(){var e=Object(j.a)(o.a.mark((function e(t){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(v.g)(t,{}),e.abrupt("return",c);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),c=t.status,a=t.data,r=Object(y.a)(e),s=Object(_.c)(e);return Object(n.useEffect)((function(){var e=function(){var e=Object(j.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(v.e)(Object(v.b)(ee,"user"));case 2:t=e.sent,console.log(t.docs);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),"loading"===c?Object(l.jsx)("div",{children:"cargando"}):Object(l.jsx)(N.a,{sdk:r,children:Object(l.jsx)(N.d,{sdk:s,children:Object(l.jsx)(N.c,{sdk:a,children:Object(l.jsx)(te.a,{children:Object(l.jsxs)(ce.c,{children:[Object(l.jsx)(ce.a,{exact:!0,path:"/",component:k}),Object(l.jsx)(ce.a,{exact:!0,path:"/Admin",component:V}),Object(l.jsx)(ce.a,{exact:!0,path:"/Beneficios-Corporativos",component:U}),Object(l.jsx)(ce.a,{exact:!0,path:"/Seguro-Complementario",component:W}),Object(l.jsx)(ce.a,{exact:!0,path:"/Creacion-perfil-empleado",component:X})]})})})})})},ae=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,112)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};c(97);s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(N.b,{firebaseConfig:{apiKey:"AIzaSyBJ6PjzeqlYnrycJnjbENSJOdtlb5VixuQ",authDomain:"intranetstefanini-1cdf1.firebaseapp.com",projectId:"intranetstefanini-1cdf1",storageBucket:"intranetstefanini-1cdf1.appspot.com",messagingSenderId:"853178510503",appId:"1:853178510503:web:429bd7a88811278ae33f82"},children:Object(l.jsx)(ne,{})})}),document.getElementById("root")),ae()}},[[98,1,2]]]);
//# sourceMappingURL=main.e4ea0d31.chunk.js.map