(this.webpackJsonpati=this.webpackJsonpati||[]).push([[9],{1057:function(e,a,t){"use strict";t.r(a);var n=t(18),r=t(11),l=t(1),o=t.n(l),c=t(914),i=t(1037),s=t(1038),u=t(1040),m=t(1042),p=t(1039),d=t(127),g=t(13),b=(t(58),t(909)),E=t(923),f=t(913),O=t(910),h=Object(c.a)((function(e){return{root:{flexGrow:1,height:250,minWidth:290},input:{display:"flex",padding:0,height:"auto"},valueContainer:{display:"flex",flexWrap:"wrap",flex:1,alignItems:"center",overflow:"hidden"},chip:{margin:e.spacing(.5,.25)},chipFocused:{backgroundColor:Object(g.b)("light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],.08)},noOptionsMessage:{padding:e.spacing(1,2)},singleValue:{fontSize:16},placeholder:{position:"absolute",left:2,bottom:6,fontSize:16},divider:{height:e.spacing(2)},paper:{padding:e.spacing(2),color:e.palette.text.secondary},button:{margin:e.spacing(1)},fab:{marginTop:-2,float:"right"},extendedIcon:{marginRight:e.spacing(1)},formControl:{margin:e.spacing(1)}}})),v=function(e){console.log("props",e);var a=h(),t=Object(l.useState)(!1),r=Object(n.a)(t,2);r[0],r[1];return o.a.createElement(b.a,null,o.a.createElement(E.a,{title:"Detalle Usuario"}),o.a.createElement(f.a,null),o.a.createElement(O.a,{className:a.content},o.a.createElement(i.a,null,o.a.createElement(s.a,null,o.a.createElement(p.a,null,o.a.createElement(u.a,null,"Nombres"),o.a.createElement(u.a,null,e.person.names)),o.a.createElement(p.a,{selected:!0},o.a.createElement(u.a,null,"Apellidos"),o.a.createElement(u.a,null,e.person.last_name)),o.a.createElement(p.a,null,o.a.createElement(u.a,null,"Tipo de documento"),o.a.createElement(u.a,null,e.person.documentType?e.person.documentType.documentType:"")),o.a.createElement(p.a,{selected:!0},o.a.createElement(u.a,null,"N\xfamero de documento"),o.a.createElement(u.a,null,e.person.documentNumber," ",e.person.checkDigit>=0?e.person.checkDigit:"")),o.a.createElement(p.a,null,o.a.createElement(u.a,null,"Correo electr\xf3nico"),o.a.createElement(u.a,null,e.person.email)),o.a.createElement(p.a,{selected:!0},o.a.createElement(u.a,null,"Direcci\xf3n"),o.a.createElement(u.a,null,e.person.address)),o.a.createElement(p.a,null,o.a.createElement(u.a,null,"Correo electr\xf3nico"),o.a.createElement(u.a,null,e.person.email))))))},C=t(916),j=t(954),y=t.n(j),x=t(280),k=t.n(x),S=t(927),N=t(1045),w=t(1043),F=t(1044),P=t(190),W=t.n(P),T=t(874),B=t(964),R=t.n(B),H=t(928),I=t(1005),U=t(3),D=t(965),_=t(930),A=t(920),z=t(250),M=t(947),G=(t(951),Object(c.a)((function(e){return{root:{flexGrow:1,height:250,minWidth:290},input:{display:"flex",padding:0,height:"auto"},valueContainer:{display:"flex",flexWrap:"wrap",flex:1,alignItems:"center",overflow:"hidden"},chip:{margin:e.spacing(.5,.25)},chipFocused:{backgroundColor:Object(g.b)("light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],.08)},noOptionsMessage:{padding:e.spacing(1,2)},singleValue:{fontSize:16},placeholder:{position:"absolute",left:2,bottom:6,fontSize:16},divider:{height:e.spacing(2)},paper:{padding:e.spacing(2),color:e.palette.text.secondary},button:{margin:e.spacing(1)},fab:{marginTop:-2,float:"right"},extendedIcon:{marginRight:e.spacing(1)},formControl:{margin:e.spacing(1)}}})));var q=function(e){Object(l.useEffect)((function(){console.log(e),e.person&&(v(e.person.name),k(e.person.document_number),F(e.person.username),X(e.person.role))}),[]);var a=Object(l.useState)([]),t=Object(n.a)(a,2),r=(t[0],t[1],Object(l.useState)(!1)),c=Object(n.a)(r,2),i=c[0],s=(c[1],Object(l.useState)({})),u=Object(n.a)(s,2),m=u[0],p=u[1],g=G(),b=Object(l.useState)([]),E=Object(n.a)(b,2),f=(E[0],E[1],Object(l.useState)("")),O=Object(n.a)(f,2),h=O[0],v=O[1],j=Object(l.useState)(""),y=Object(n.a)(j,2),x=y[0],k=y[1],S=Object(l.useState)(""),N=Object(n.a)(S,2),w=N[0],F=N[1],P=Object(l.useState)(""),W=Object(n.a)(P,2),T=W[0],B=W[1],R=Object(l.useState)(""),q=Object(n.a)(R,2),L=q[0],J=q[1],V=Object(l.useState)(null),K=Object(n.a)(V,2),Q=K[0],X=K[1],Y=Object(l.useState)(!1),Z=Object(n.a)(Y,2),$=Z[0],ee=Z[1],ae=Object(l.useState)(""),te=Object(n.a)(ae,2),ne=te[0],re=te[1],le=Object(l.useState)(!1),oe=Object(n.a)(le,2),ce=oe[0],ie=oe[1],se=Object(l.useState)(""),ue=Object(n.a)(se,2),me=ue[0],pe=ue[1],de=function(e){var a=void 0!==e?e:h;return null==a||""===a.toString().trim()?(ee(!0),re("Este campo es requerido"),1):(ee(!1),re(""),0)},ge=function(e){var a=void 0!==e?e:x;return null==a||""===a.toString().trim()?(ie(!0),pe("Este campo es requerido"),1):(ie(!1),pe(""),0)},be=function(a){var t=function(){var e=0;return e+=de()}();if(t+=ge(),T&&L&&T!==L&&M.b.error("Las contrase\xf1as no son iguales",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),0===t){var n=new FormData;e.person&&n.append("id",e.person._id),n.append("photo",m),n.append("name",h),n.append("username",w),n.append("documentNumber",x),n.append("role",Q),n.append("password",T),e.person?Object(z.w)(n).then((function(e){console.log("response",e),"success"==e.status?M.b.info("Funcionario registrado exitosamente",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}):M.b.error("Ocurri\xf3 un error al registrar el funcionario",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})})):Object(z.d)(n).then((function(a){console.log("response",a),"success"==a.status?(M.b.info("Funcionario registrado exitosamente",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),e.onCloseModal(!0),e.onUpdateUsers()):M.b.error(a.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}))}else M.b.error("\ud83e\udd84 Wow so easy!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})};return o.a.createElement(l.Fragment,null,o.a.createElement(M.a,null),o.a.createElement(I.a,{maxWidth:"md"},o.a.createElement(d.a,{className:g.paper},o.a.createElement("form",{encType:"multipart/form-data",onSubmit:function(e){e.preventDefault(),be()}},o.a.createElement(H.a,{container:!0,spacing:3},o.a.createElement(H.a,{item:!0,xs:12,sm:4},o.a.createElement(_.a,{fullWidth:!0,select:!0,className:Object(U.a)(g.margin,g.textField),variant:"outlined",label:"Rol",margin:"dense",onChange:function(e){console.log(e.target.value),X(e.target.value)}},o.a.createElement(A.a,{key:"administrator",value:"administrator"},"Administrador"),o.a.createElement(A.a,{key:"technical",value:"technical"},"T\xe9cnico"))),o.a.createElement(H.a,{item:!0,xs:12,sm:4},o.a.createElement(_.a,{fullWidth:!0,error:$,helperText:ne,margin:"dense",autoComplete:"off",id:"outlined-simple-start-adornment",className:Object(U.a)(g.margin,g.textField),variant:"outlined",label:"Nombre",value:h,onChange:function(e){v(e.target.value),de(e.target.value)}})),o.a.createElement(H.a,{item:!0,xs:12,sm:4},o.a.createElement(_.a,{fullWidth:!0,error:ce,helperText:me,margin:"dense",autoComplete:"off",id:"outlined-simple-start-adornment",className:Object(U.a)(g.margin,g.textField),variant:"outlined",value:x,onChange:function(e){k(e.target.value),ge(e.target.value)},label:"Documento"})),o.a.createElement(H.a,{item:!0,xs:12,sm:4},o.a.createElement(_.a,{fullWidth:!0,margin:"dense",autoComplete:"off",id:"outlined-simple-start-adornment",className:Object(U.a)(g.margin,g.textField),variant:"outlined",label:"Nombre de usuario",value:w,onChange:function(e){F(e.target.value)}})),o.a.createElement(H.a,{item:!0,xs:12,sm:4},o.a.createElement(_.a,{fullWidth:!0,margin:"dense",autoComplete:"off",id:"outlined-simple-start-adornment",className:Object(U.a)(g.margin,g.textField),variant:"outlined",type:"password",label:"Contrase\xf1a",onChange:function(e){B(e.target.value)}})),o.a.createElement(H.a,{item:!0,xs:12,sm:4},o.a.createElement(_.a,{fullWidth:!0,margin:"dense",autoComplete:"off",type:"password",id:"outlined-simple-start-adornment",className:Object(U.a)(g.margin,g.textField),variant:"outlined",label:"Repite la contrase\xf1a",onChange:function(e){J(e.target.value)}})),o.a.createElement(H.a,{item:!0,xs:12,sm:12},o.a.createElement(D.a,{open:!0,filesLimit:1,dropzoneText:"Arrastre y suelte un archivo de imagen aqu\xed o haga clic",acceptedFiles:["image/jpeg","image/png","image/bmp"],onChange:function(e){p(e[0])}})),o.a.createElement(H.a,{item:!0,xs:2,sm:3},o.a.createElement(C.a,{disabled:i,type:"submit",variant:"contained",color:"primary"},e.person?"Actualizar":"Guardar")))))))},L=t(911),J=t(268),V=t.n(J),K=t(937),Q=t(1060),X=t(9),Y=t(1041),Z=t(912),$=t(105),ee=t.n($),ae=t(66),te=Object(c.a)((function(e){return{root:{flexGrow:1},iconWidth:{width:10},paper:{padding:e.spacing(2),marginTop:10},button:{margin:e.spacing(1)},input:{display:"none"},fab:{margin:e.spacing(1)},extendedIcon:{marginRight:e.spacing(1)},icon:{marginRight:e.spacing(1),color:"black"}}})),ne=Object(X.a)((function(e){return{root:{margin:0,padding:e.spacing(2)},closeButton:{position:"absolute",right:e.spacing(1),top:e.spacing(1),color:e.palette.grey[500]}}}))((function(e){var a=e.children,t=e.classes,n=e.onClose,l=Object(r.a)(e,["children","classes","onClose"]);return o.a.createElement(Y.a,Object.assign({disableTypography:!0,className:t.root},l),o.a.createElement(ae.a,{variant:"h6"},a),n?o.a.createElement(Z.a,{"aria-label":"close",className:t.closeButton,onClick:n},o.a.createElement(ee.a,null)):null)})),re=o.a.forwardRef((function(e,a){return o.a.createElement(T.a,Object.assign({direction:"up",ref:a},e))}));a.default=function(e){Object(l.useEffect)((function(){Object(z.l)().then((function(e){console.log(e),g(e.users),O(e.count)}))}),[]);var a=te(),t=Object(l.useState)([]),r=Object(n.a)(t,2),c=r[0],g=r[1],b=Object(l.useState)(0),E=Object(n.a)(b,2),f=E[0],O=E[1],h=Object(l.useState)(0),j=Object(n.a)(h,2),x=j[0],P=j[1],T=Object(l.useState)(10),B=Object(n.a)(T,2),H=B[0],I=B[1],U=Object(l.useState)(!1),D=Object(n.a)(U,2),_=D[0],A=D[1],G=Object(l.useState)(!1),J=Object(n.a)(G,2),X=J[0],Y=J[1],Z=Object(l.useState)(!1),$=Object(n.a)(Z,2),ee=$[0],ae=$[1],le=Object(l.useState)(!1),oe=Object(n.a)(le,2),ce=oe[0],ie=oe[1],se=Object(l.useState)(!1),ue=Object(n.a)(se,2),me=ue[0],pe=ue[1],de=Object(l.useState)({}),ge=Object(n.a)(de,2),be=ge[0],Ee=ge[1],fe=function(){Object(z.l)().then((function(e){console.log(e),g(e.users),O(e.count)}))},Oe=function(e){return function(){Ee(e),Y(!0)}},he=function(){A(!1)},ve=function(e){return function(){Ee(e),ae(!0)}},Ce=function(){ae(!1)},je=function(e){return function(){Ee(e),ie(!0)}},ye=function(){ie(!1)},xe=function(){Y(!1)},ke=function(){pe(!1)},Se=function(){pe(!1)};return o.a.createElement(l.Fragment,null,o.a.createElement(M.a,null),o.a.createElement(d.a,{className:a.paper},o.a.createElement(K.a,{onClick:function(){pe(!0)},variant:"extended",color:"primary",size:"small",className:a.margin},o.a.createElement(V.a,{className:a.extendedIcon}),"Nuevo funcionario"),o.a.createElement(i.a,null,o.a.createElement(m.a,null,o.a.createElement(p.a,null,o.a.createElement(u.a,null,"FUNCIONARIO"),o.a.createElement(u.a,null,"DOCUMENTO"),o.a.createElement(u.a,null,"NOMBRE DE USUARIO"),o.a.createElement(u.a,null,"ROL"),o.a.createElement(u.a,null,"FOTO"),o.a.createElement(u.a,null),o.a.createElement(u.a,null),o.a.createElement(u.a,null))),o.a.createElement(s.a,null,c.map((function(e){return o.a.createElement(p.a,{key:e._id},o.a.createElement(u.a,null,e.name," "),o.a.createElement(u.a,null,e.document_number),o.a.createElement(u.a,null,e.username),o.a.createElement(u.a,null,e.role),o.a.createElement(u.a,null,e.username),o.a.createElement(u.a,{className:a.iconWidth},o.a.createElement(L.a,{title:"Detalle",placement:"top"},o.a.createElement(W.a,{className:a.icon,onClick:ve(e)}))),o.a.createElement(u.a,{className:a.iconWidth},o.a.createElement(L.a,{title:"Editar",placement:"top"},o.a.createElement(y.a,{className:a.icon,onClick:je(e)}))),o.a.createElement(u.a,{className:a.iconWidth},o.a.createElement(L.a,{title:e.status,placement:"top"},"activo"===e.status?o.a.createElement(k.a,{className:a.icon,onClick:(t=e._id,function(){Ee(t),A(!0)})}):o.a.createElement(R.a,{className:a.icon,onClick:Oe(e._id)}))));var t})))),o.a.createElement(Q.a,{rowsPerPageOptions:[10,25,100],component:"div",count:f,rowsPerPage:H,page:x,onChangePage:function(e,a){P(a)},onChangeRowsPerPage:function(e){I(+e.target.value),P(0)}})),o.a.createElement(S.a,{open:_,onClose:he,"aria-labelledby":"draggable-dialog-title"},o.a.createElement(ne,{style:{cursor:"move"},id:"draggable-dialog-title"},"Alerta"),o.a.createElement(w.a,null,o.a.createElement(F.a,null,"Esta seguro de eliminar este funcionario?")),o.a.createElement(N.a,null,o.a.createElement(C.a,{autoFocus:!0,onClick:he,color:"primary"},"NO"),o.a.createElement(C.a,{onClick:function(){A(!1),Object(z.h)(be).then((function(e){if("success"===e.status){M.b.success(e.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});var a=c.map((function(e){return be!==e._id||(e.estado="inactivo"),e}));g(a)}else M.b.error(e.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})})).catch((function(e){M.b.error("Ocurri\xf3 un error al desactivar el funcionario",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}))},color:"primary"},"SI"))),o.a.createElement(S.a,{open:X,onClose:xe,"aria-labelledby":"draggable-dialog-title"},o.a.createElement(ne,{style:{cursor:"move"},id:"draggable-dialog-title"},"Alerta"),o.a.createElement(w.a,null,o.a.createElement(F.a,null,"Esta seguro de Reactivar a esta persona?")),o.a.createElement(N.a,null,o.a.createElement(C.a,{autoFocus:!0,onClick:xe,color:"primary"},"NO"),o.a.createElement(C.a,{onClick:function(){Y(!1),Object(z.u)(be).then((function(e){if("success"===e.status){M.b.success(e.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0});var a=c.map((function(e){return be!==e._id||(e.estado="activo"),e}));g(a)}else M.b.error(e.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})})).catch((function(e){M.b.error("Ocurri\xf3 un error al activar el funcionario",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0})}))},color:"primary"},"SI"))),o.a.createElement(S.a,{open:ee,onClose:Ce,TransitionComponent:re},o.a.createElement(w.a,null,o.a.createElement(v,{person:be})),o.a.createElement(N.a,null,o.a.createElement(C.a,{autoFocus:!0,onClick:Ce,color:"primary"},"Cerrar"))),o.a.createElement(S.a,{maxWidth:"md",open:ce,onClose:ye,TransitionComponent:re},o.a.createElement(w.a,null,o.a.createElement(q,{onCloseEditPerson:ye,onCloseModal:Se,onUpdateUsers:fe,person:be})),o.a.createElement(N.a,null,o.a.createElement(C.a,{autoFocus:!0,onClick:ye,color:"primary"},"Cerrar"))),o.a.createElement(S.a,{fullWidth:!0,maxWidth:"md",open:me},o.a.createElement(ne,{onClose:ke},"Crear usuario"),o.a.createElement(w.a,null,o.a.createElement(q,{handleClose:ke,onCloseModal:Se,onUpdateUsers:fe,modal:!0})),o.a.createElement(N.a,null,o.a.createElement(C.a,{onClick:ke,color:"primary"},"Cerrar"))))}}}]);
//# sourceMappingURL=9.6507c110.chunk.js.map