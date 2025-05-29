"use strict";(self.webpackChunktaskero=self.webpackChunktaskero||[]).push([[669],{4669:(e,r,o)=>{o.r(r),o.d(r,{default:()=>se});var n=o(5043),t=o(4961),a=o(9867),l=o(377),i=o(2246),s=o(551),d=o(5464),c=o(2115),m=o(3289),p=o(5601),u=o(3367),h=o(9593),x=o(7784),g=o(3892),y=o(184);const f=d.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${e=>{let{theme:r,isDragActive:o}=e;return o?r.background:r.backgroundSecondary}};
  border: 2px dashed
    ${e=>{let{theme:r,isDragActive:o}=e;return o?r.primary:r.borderColor}};
  border-radius: 8px;
  padding: 32px 24px;
  text-align: center;
  cursor: pointer;
  gap: 12px;
  transition: background-color ${e=>{let{theme:r}=e;return r.animation}},
    border-color ${e=>{let{theme:r}=e;return r.animation}};
`,j=d.Ay.div`
  color: ${e=>{let{theme:r}=e;return r.secondaryText}};
`,b=d.Ay.button`
  padding: 8px 16px;
  background-color: ${e=>{let{theme:r}=e;return r.background}};
  color: ${e=>{let{theme:r}=e;return r.secondaryText}};
  border: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  transition: background-color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    background-color: ${e=>{let{theme:r}=e;return r.backgroundSecondary}};
  }
`,v=d.Ay.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 12px;
  background-color: #ccc;
`,C=d.Ay.input`
  display: none;
`,w=d.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
`;var A=o(7711),$=o(579);const k=e=>{let{name:r,placeholderText:o,buttonText:t,initialPreview:a=null}=e;const l=(0,d.DP)(),i=(0,n.useRef)(null),[s,c,m]=(0,g.Mt)(r),[p,u]=(0,n.useState)(null),[h,x]=(0,n.useState)(!1);(0,n.useEffect)((()=>{!s.value&&a&&u(a)}),[a,s.value]);const k=e=>{m.setValue(e),u(URL.createObjectURL(e))};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(f,{onClick:()=>{var e;return null===(e=i.current)||void 0===e?void 0:e.click()},isDragActive:h,onDragEnter:e=>{e.preventDefault(),x(!0)},onDragLeave:e=>{e.preventDefault(),x(!1)},onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault(),x(!1);const r=e.dataTransfer.files[0];r&&k(r)},children:p?(0,$.jsx)(v,{src:p,alt:"Preview"}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(w,{children:(0,$.jsx)(y.IqM,{size:48,color:l.secondaryText})}),(0,$.jsx)(j,{children:o}),(0,$.jsx)(b,{type:"button",children:t})]})}),(0,$.jsx)(C,{ref:i,type:"file",accept:"image/*",onChange:e=>{var r;const o=null===(r=e.target.files)||void 0===r?void 0:r[0];o&&k(o)}}),c.touched&&c.error&&(0,$.jsx)(A.yn,{children:c.error})]})};var F=o(7606);const M=d.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 295px;
`;var S=o(899);const T=S.Ik({name:S.Yj().required("Required"),logo:S.gl().nullable()}),R=e=>{let{handlerCloseModal:r,formName:o,companyId:l}=e;const s=(0,a.jL)(),{t:d}=(0,t.B)(),[m,u]=(0,n.useState)(null);(0,n.useEffect)((()=>{(async()=>{try{const e=await s((0,p.Gh)(l)).unwrap();u(e)}catch(e){c.oR.error(`${d("Forms.editCompany.failedToLoad")}: ${e instanceof Error?e.message:String(e)}`),r()}})()}),[s,l,d,r]);const h={name:(null===m||void 0===m?void 0:m.name)||"",logo:null};return m?(0,$.jsx)(g.l1,{enableReinitialize:!0,initialValues:h,validationSchema:T,onSubmit:async e=>{const o=new FormData;o.append("name",e.name),e.logo&&o.append("logo",e.logo);try{await s((0,p.JT)({id:l,formData:o})).unwrap(),c.oR.success(d("Forms.editCompany.success")),r()}catch(n){c.oR.error(`${d("Forms.editCompany.failed")}: ${n instanceof Error?n.message:String(n)}`)}},children:e=>{let{errors:r,touched:n}=e;return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(F.R,{}),(0,$.jsxs)(A.q,{id:o,children:[(0,$.jsxs)(A.A0,{children:[(0,$.jsx)(A.JU,{children:d("Forms.editCompany.name")}),(0,$.jsx)(A.pd,{name:"name",placeholder:d("Forms.editCompany.namePlaceholder"),$hasError:n.name&&!!r.name}),n.name&&r.name&&(0,$.jsx)(A.yn,{children:r.name})]}),(0,$.jsxs)(A.A0,{children:[(0,$.jsx)(A.JU,{children:d("Forms.editCompany.logo")}),(0,$.jsx)(k,{name:"logo",placeholderText:d("Forms.common.dragOrClick"),buttonText:d("Forms.common.chooseFile"),initialPreview:m.logo})]})]})]})}}):(0,$.jsx)(M,{children:(0,$.jsx)(i.A,{size:"60px",color:"#3e85f3"})})},D=e=>{let{handlerCloseModal:r,deleteAction:o,companyId:n}=e;const{t:a}=(0,t.B)(),l="edit-company-form";return(0,$.jsx)(h.A,{handlerCloseModal:r,children:(0,$.jsx)(x.A,{handlerCloseModal:r,title:a("Modals.editCompany.title"),formName:l,deleteAction:o,children:(0,$.jsx)(R,{handlerCloseModal:r,formName:l,companyId:n})})})};var z=o(7142);const E=d.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 295px;
`,L=S.Ik().shape({members:S.YO().of(S.Yj().email()).min(1).required()}),I=e=>{let{handlerCloseModal:r,formName:o,companyId:l,withActions:s=!0}=e;const d=(0,a.jL)(),[m,u]=(0,n.useState)(null),{t:h}=(0,t.B)();if((0,n.useEffect)((()=>{(async()=>{try{const e=await d((0,p.Gh)(l)).unwrap();u(e)}catch(e){c.oR.error(`${h("Forms.editCompanyMembers.failedToLoad")}: ${e instanceof Error?e.message:String(e)}`),r()}})()}),[d,l,h,r]),!m)return(0,$.jsx)(E,{children:(0,$.jsx)(i.A,{size:"60px",color:"#3e85f3"})});const x={members:m.members.map((e=>e.email))},y=m.members.map((e=>({...e,role:m.owner.email===e.email?"owner":"member"})));return(0,$.jsx)(g.l1,{enableReinitialize:!0,initialValues:x,validationSchema:L,onSubmit:async e=>{try{await d((0,p.jw)({id:m._id,members:e.members})).unwrap(),c.oR.success(h("Forms.editCompanyMembers.success")),r()}catch(o){c.oR.error(`${h("Forms.editCompanyMembers.failed")}: ${o instanceof Error?o.message:String(o)}`)}},children:e=>{let{values:r,setFieldValue:n}=e;return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(F.R,{}),(0,$.jsx)(A.q,{id:o,children:(0,$.jsx)(z.A,{value:r.members,users:y,onChange:e=>n("members",e),withActions:s})})]})}})},B=e=>{let{handlerCloseModal:r,companyId:o,withActions:n=!0}=e;const{t:a}=(0,t.B)(),l="edit-company-members-form";return(0,$.jsx)(h.A,{handlerCloseModal:r,children:(0,$.jsx)(x.A,{handlerCloseModal:r,title:a("Modals.editCompanyMembers.title"),formName:l,withActions:n,children:(0,$.jsx)(I,{handlerCloseModal:r,formName:l,companyId:o,withActions:n})})})},q=d.Ay.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  padding: 16px;
  border: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
  border-radius: 4px;
  background-color: ${e=>{let{theme:r}=e;return r.background}};
`,N=d.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,P=d.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,V=d.Ay.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 12px;
  background-color: #ddd;
`,O=d.Ay.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
  word-break: break-word;
  overflow-wrap: break-word;
`,U=d.Ay.span`
  font-size: 14px;
  font-weight: 500;
  color: ${e=>{let{theme:r}=e;return r.roleTextColor}};
  background-color: ${e=>{let{color:r}=e;return r}};
  border-radius: 4px;
  padding: 2px 8px;
  align-self: start;
`,G=d.Ay.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 8px;
`,J=d.Ay.button`
  background: none;
  border: none;
  color: ${e=>{let{theme:r}=e;return r.secondaryText}};
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.primary}};
  }
`;var Y=o(3538);const _=e=>{var r;let{company:o}=e;const l=(0,a.jL)(),[i,s]=(0,n.useState)(!1),[h,x]=(0,n.useState)(!1),g=(0,a.GV)(m.AS),{t:y}=(0,t.B)(),f=(0,d.DP)(),j=()=>{s((e=>!e))},b=()=>{x((e=>!e))},v=(null===o||void 0===o||null===(r=o.owner)||void 0===r?void 0:r.email)===g?"owner":"member",C=o.members,w={owner:f.roleOwner,member:f.roleMember};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(q,{children:[(0,$.jsxs)(N,{children:[(0,$.jsx)(V,{src:o.logo,alt:"Logo"}),(0,$.jsx)(O,{children:o.name})]}),(0,$.jsxs)(P,{children:[(0,$.jsx)(U,{color:w[v],children:y(`Common.roles.${v}`)}),(0,$.jsx)(u.A,{members:[...C].reverse()})]}),(0,$.jsxs)(G,{children:[(0,$.jsx)(J,{onClick:b,children:(0,$.jsx)(Y.Sy$,{size:20})}),"owner"===v&&(0,$.jsx)(J,{onClick:j,children:(0,$.jsx)(Y.Kak,{size:20})})]})]}),i&&"owner"===v&&(0,$.jsx)(D,{handlerCloseModal:()=>j(),deleteAction:async()=>{try{await l((0,p.RC)(o._id)),c.oR.success(y("Forms.deleteCompany.success")),j()}catch(e){c.oR.error(`${y("Forms.deleteCompany.failed")}: ${e instanceof Error?e.message:String(e)}`)}},companyId:o._id}),h&&(0,$.jsx)(B,{handlerCloseModal:()=>b(),companyId:o._id,withActions:"owner"===v})]})},K=S.Ik({name:S.Yj().required("Required"),logo:S.gl().nullable()}),H={name:"",logo:null},Q=e=>{let{handlerCloseModal:r,formName:o}=e;const n=(0,a.jL)(),{t:l}=(0,t.B)();return(0,$.jsx)(g.l1,{initialValues:H,validationSchema:K,onSubmit:async e=>{const o=new FormData;o.append("name",e.name),e.logo&&o.append("logo",e.logo);try{await n((0,p.eK)(o)),c.oR.success(l("Forms.createCompany.success")),r()}catch(t){c.oR.error(`${l("Forms.createCompany.failed")}: ${t instanceof Error?t.message:String(t)}`)}},children:e=>{let{errors:r,touched:n}=e;return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(F.R,{}),(0,$.jsxs)(A.q,{id:o,children:[(0,$.jsxs)(A.A0,{children:[(0,$.jsx)(A.JU,{children:l("Forms.createCompany.name")}),(0,$.jsx)(A.pd,{name:"name",placeholder:l("Forms.createCompany.namePlaceholder"),$hasError:n.name&&!!r.name}),n.name&&r.name&&(0,$.jsx)(A.yn,{children:r.name})]}),(0,$.jsxs)(A.A0,{children:[(0,$.jsx)(A.JU,{children:l("Forms.createCompany.logo")}),(0,$.jsx)(k,{name:"logo",placeholderText:l("Forms.common.dragOrClick"),buttonText:l("Forms.common.chooseFile")})]})]})]})}})},W=e=>{let{handlerCloseModal:r}=e;const{t:o}=(0,t.B)(),n="create-company-form";return(0,$.jsx)(h.A,{handlerCloseModal:r,children:(0,$.jsx)(x.A,{handlerCloseModal:r,title:o("Modals.createCompany.title"),formName:n,children:(0,$.jsx)(Q,{handlerCloseModal:r,formName:n})})})},X=d.Ay.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  height: 100%;
`,Z=d.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,ee=d.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,re=d.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`,oe=d.Ay.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
`,ne=d.Ay.button`
  background-color: ${e=>{let{theme:r}=e;return r.buttonBackground}};
  color: ${e=>{let{theme:r}=e;return r.buttonText}};
  padding: 12px 24px;
  border-radius: 4px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    background-color: ${e=>{let{theme:r}=e;return r.buttonBackgroundHover}};
  }
`,te=d.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  > * {
    min-height: 44px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`,ae=d.Ay.input`
  flex: 1;
  padding: 12px 16px;
  border: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
  border-radius: 4px;
  background-color: ${e=>{let{theme:r}=e;return r.background}};
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
  transition: border-color ${e=>{let{theme:r}=e;return r.animation}};

  &::placeholder {
    color: ${e=>{let{theme:r}=e;return r.secondaryText}};
  }

  &:focus {
    border-color: ${e=>{let{theme:r}=e;return r.primary}};
    outline: none;
  }
`,le=d.Ay.div`
  display: flex;
  height: 100%;
  width: 100%;

  @media (min-width: 768px) {
    width: 200px;
  }
`,ie=d.Ay.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: 1fr;
  }
`,se=()=>{const[e,r]=(0,n.useState)(""),[o,d]=(0,n.useState)("name"),[c,m]=(0,n.useState)(!1),p=(0,a.GV)(l.Yl),u=(0,a.GV)(l.EB),{t:h}=(0,t.B)(),x=()=>{m((e=>!e))},g=(0,n.useMemo)((()=>u.filter((r=>r.name.toLowerCase().includes(e.toLowerCase()))).sort(((e,r)=>"name"===o?e.name.localeCompare(r.name):"date"===o?new Date(r.createdAt).getTime()-new Date(e.createdAt).getTime():0))),[u,e,o]);return(0,$.jsx)(X,{children:p?(0,$.jsx)(Z,{children:(0,$.jsx)(i.A,{size:"48px",color:"#3e85f3"})}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(ee,{children:[(0,$.jsxs)(re,{children:[(0,$.jsx)(oe,{children:h("Companies.title")}),(0,$.jsx)(ne,{onClick:()=>x(),children:h("Companies.create")})]}),(0,$.jsxs)(te,{children:[(0,$.jsx)(ae,{type:"text",placeholder:h("Companies.searchPlaceholder"),value:e,onChange:e=>r(e.target.value)}),(0,$.jsx)(le,{children:(0,$.jsx)(s.A,{options:["name","date"],value:o,onChange:d,getLabel:e=>h(`Companies.filters.${e}`),getKey:e=>e})})]})]}),(0,$.jsx)(ie,{children:g.map((e=>(0,$.jsx)(_,{company:e},e._id)))}),c&&(0,$.jsx)(W,{handlerCloseModal:x})]})})}}}]);
//# sourceMappingURL=669.9eb10faa.chunk.js.map