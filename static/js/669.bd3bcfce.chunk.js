"use strict";(self.webpackChunktaskero=self.webpackChunktaskero||[]).push([[669],{3367:(e,r,t)=>{t.d(r,{A:()=>d});var o=t(2998),n=t(5464);const a=n.Ay.div`
  position: relative;
  height: 28px;
  width: fit-content;
`,l=n.Ay.div`
  position: absolute;
  left: ${e=>{let{index:r}=e;return 20*r}}px;
  z-index: ${e=>{let{index:r}=e;return 10-r}};
`,i=n.Ay.div`
  width: ${e=>{let{size:r}=e;return r}}px;
  height: ${e=>{let{size:r}=e;return r}}px;
  border-radius: 50%;
  background-color: ${e=>{let{theme:r}=e;return r.membersAvatarBackground}};
  border: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
  font-weight: 500;
`;var s=t(579);const d=e=>{let{members:r,maxVisible:t=4,size:n=28}=e;const d=r.slice(0,t),c=r.length-t;return(0,s.jsxs)(a,{children:[d.map(((e,r)=>{var t;return(0,s.jsx)(l,{index:r,children:(0,s.jsx)(o.A,{src:null!==(t=e.avatar)&&void 0!==t&&t.startsWith("http")?e.avatar:`https:${e.avatar}`,size:n})},e._id)})),c>0&&(0,s.jsx)(l,{index:t,children:(0,s.jsxs)(i,{size:n,children:["+",c]})})]})}},4669:(e,r,t)=>{t.r(r),t.d(r,{default:()=>ie});var o=t(5043),n=t(4961),a=t(9867),l=t(377),i=t(5939),s=t(1308),d=t(5464),c=t(2115),m=t(3289),p=t(5601),x=t(3367),h=t(9593),u=t(7784),g=t(3892),y=t(184);const f=d.Ay.div`
  border: 2px dashed ${e=>{let{theme:r}=e;return r.borderColor}};
  border-radius: 8px;
  padding: 32px 24px;
  text-align: center;
  cursor: pointer;
  background-color: ${e=>{let{theme:r}=e;return r.backgroundSecondary}};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
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
`,A=d.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
`;var w=t(7711),$=t(579);const k=e=>{let{name:r,placeholderText:t,buttonText:n,initialPreview:a=null}=e;const l=(0,d.DP)(),i=(0,o.useRef)(null),[s,c,m]=(0,g.Mt)(r),[p,x]=(0,o.useState)(null);(0,o.useEffect)((()=>{!s.value&&a&&x(a)}),[a,s.value]);const h=e=>{m.setValue(e),x(URL.createObjectURL(e))};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(f,{onClick:()=>{var e;return null===(e=i.current)||void 0===e?void 0:e.click()},onDrop:e=>{e.preventDefault();const r=e.dataTransfer.files[0];r&&h(r)},onDragOver:e=>e.preventDefault(),children:p?(0,$.jsx)(v,{src:p,alt:"Preview"}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(A,{children:(0,$.jsx)(y.IqM,{size:48,color:l.secondaryText})}),(0,$.jsx)(j,{children:t}),(0,$.jsx)(b,{type:"button",children:n})]})}),(0,$.jsx)(C,{ref:i,type:"file",accept:"image/*",onChange:e=>{var r;const t=null===(r=e.target.files)||void 0===r?void 0:r[0];t&&h(t)}}),c.touched&&c.error&&(0,$.jsx)(w.yn,{children:c.error})]})},F=d.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 295px;
`;var M=t(899);const S=M.Ik({name:M.Yj().required("Required"),logo:M.gl().nullable()}),T=e=>{let{handlerCloseModal:r,formName:t,companyId:l}=e;const s=(0,a.jL)(),{t:d}=(0,n.B)(),[m,x]=(0,o.useState)(null);(0,o.useEffect)((()=>{(async()=>{try{const e=await s((0,p.Gh)(l)).unwrap();x(e)}catch(e){c.oR.error(`${d("Forms.editCompany.failedToLoad")}: ${e instanceof Error?e.message:String(e)}`),r()}})()}),[s,l,d,r]);const h={name:(null===m||void 0===m?void 0:m.name)||"",logo:null};return m?(0,$.jsx)(g.l1,{enableReinitialize:!0,initialValues:h,validationSchema:S,onSubmit:async e=>{const t=new FormData;t.append("name",e.name),e.logo&&t.append("logo",e.logo);try{await s((0,p.JT)({id:l,formData:t})).unwrap(),c.oR.success(d("Forms.editCompany.success")),r()}catch(o){c.oR.error(`${d("Forms.editCompany.failed")}: ${o instanceof Error?o.message:String(o)}`)}},children:e=>{let{errors:r,touched:o}=e;return(0,$.jsxs)(w.q,{id:t,children:[(0,$.jsxs)(w.A0,{children:[(0,$.jsx)(w.JU,{children:d("Forms.editCompany.name")}),(0,$.jsx)(w.pd,{name:"name",placeholder:d("Forms.editCompany.namePlaceholder"),$hasError:o.name&&!!r.name}),o.name&&r.name&&(0,$.jsx)(w.yn,{children:r.name})]}),(0,$.jsxs)(w.A0,{children:[(0,$.jsx)(w.JU,{children:d("Forms.editCompany.logo")}),(0,$.jsx)(k,{name:"logo",placeholderText:d("Forms.common.dragOrClick"),buttonText:d("Forms.common.chooseFile"),initialPreview:m.logo})]})]})}}):(0,$.jsx)(F,{children:(0,$.jsx)(i.A,{size:"60px",color:"#3e85f3"})})},z=e=>{let{handlerCloseModal:r,deleteAction:t,companyId:o}=e;const{t:a}=(0,n.B)(),l="edit-company-form";return(0,$.jsx)(h.A,{handlerCloseModal:r,children:(0,$.jsx)(u.A,{handlerCloseModal:r,title:a("Modals.editCompany.title"),formName:l,deleteAction:t,children:(0,$.jsx)(T,{handlerCloseModal:r,formName:l,companyId:o})})})};var R=t(7142);const B=d.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 295px;
`,E=M.Ik().shape({members:M.YO().of(M.Yj().email()).min(1).required()}),I=e=>{let{handlerCloseModal:r,formName:t,companyId:l,withActions:s=!0}=e;const d=(0,a.jL)(),[m,x]=(0,o.useState)(null),{t:h}=(0,n.B)();if((0,o.useEffect)((()=>{(async()=>{try{const e=await d((0,p.Gh)(l)).unwrap();x(e)}catch(e){c.oR.error(`${h("Forms.editCompanyMembers.failedToLoad")}: ${e instanceof Error?e.message:String(e)}`),r()}})()}),[d,l,h,r]),!m)return(0,$.jsx)(B,{children:(0,$.jsx)(i.A,{size:"60px",color:"#3e85f3"})});const u={members:m.members.map((e=>e.email))},y=m.members.map((e=>({...e,role:m.owner.email===e.email?"owner":"member"})));return(0,$.jsx)(g.l1,{enableReinitialize:!0,initialValues:u,validationSchema:E,onSubmit:async e=>{try{await d((0,p.jw)({id:m._id,members:e.members})).unwrap(),c.oR.success(h("Forms.editCompanyMembers.success")),r()}catch(t){c.oR.error(`${h("Forms.editCompanyMembers.failed")}: ${t instanceof Error?t.message:String(t)}`)}},children:e=>{let{values:r,setFieldValue:o}=e;return(0,$.jsx)(w.q,{id:t,children:(0,$.jsx)(R.A,{value:r.members,users:y,onChange:e=>o("members",e),withActions:s})})}})},L=e=>{let{handlerCloseModal:r,companyId:t,withActions:o=!0}=e;const{t:a}=(0,n.B)(),l="edit-company-members-form";return(0,$.jsx)(h.A,{handlerCloseModal:r,children:(0,$.jsx)(u.A,{handlerCloseModal:r,title:a("Modals.editCompanyMembers.title"),formName:l,withActions:o,children:(0,$.jsx)(I,{handlerCloseModal:r,formName:l,companyId:t,withActions:o})})})},D=d.Ay.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  padding: 16px;
  border: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
  border-radius: 4px;
  background-color: ${e=>{let{theme:r}=e;return r.background}};
`,q=d.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,N=d.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,V=d.Ay.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 12px;
  background-color: #ddd;
`,P=d.Ay.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
`,O=d.Ay.span`
  font-size: 14px;
  font-weight: 500;
  color: ${e=>{let{theme:r}=e;return r.roleTextColor}};
  background-color: ${e=>{let{color:r}=e;return r}};
  border-radius: 4px;
  padding: 2px 8px;
  align-self: start;
`,U=d.Ay.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 8px;
`,_=d.Ay.button`
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
`;var G=t(3538);const J=e=>{var r;let{company:t}=e;const l=(0,a.jL)(),[i,s]=(0,o.useState)(!1),[h,u]=(0,o.useState)(!1),g=(0,a.GV)(m.AS),{t:y}=(0,n.B)(),f=(0,d.DP)(),j=()=>{s((e=>!e))},b=()=>{u((e=>!e))},v=(null===t||void 0===t||null===(r=t.owner)||void 0===r?void 0:r.email)===g?"owner":"member",C=t.members,A={owner:f.roleOwner,member:f.roleMember};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(D,{children:[(0,$.jsxs)(q,{children:[(0,$.jsx)(V,{src:t.logo,alt:"Logo"}),(0,$.jsx)(P,{children:t.name})]}),(0,$.jsxs)(N,{children:[(0,$.jsx)(O,{color:A[v],children:y(`Common.roles.${v}`)}),(0,$.jsx)(x.A,{members:[...C].reverse()})]}),(0,$.jsxs)(U,{children:[(0,$.jsx)(_,{onClick:b,children:(0,$.jsx)(G.Sy$,{size:20})}),"owner"===v&&(0,$.jsx)(_,{onClick:j,children:(0,$.jsx)(G.Kak,{size:20})})]})]}),i&&"owner"===v&&(0,$.jsx)(z,{handlerCloseModal:()=>j(),deleteAction:async()=>{try{await l((0,p.RC)(t._id)),c.oR.success(y("Forms.deleteCompany.success")),j()}catch(e){c.oR.error(`${y("Forms.deleteCompany.failed")}: ${e instanceof Error?e.message:String(e)}`)}},companyId:t._id}),h&&(0,$.jsx)(L,{handlerCloseModal:()=>b(),companyId:t._id,withActions:"owner"===v})]})},Y=M.Ik({name:M.Yj().required("Required"),logo:M.gl().nullable()}),K={name:"",logo:null},H=e=>{let{handlerCloseModal:r,formName:t}=e;const o=(0,a.jL)(),{t:l}=(0,n.B)();return(0,$.jsx)(g.l1,{initialValues:K,validationSchema:Y,onSubmit:async e=>{const t=new FormData;t.append("name",e.name),e.logo&&t.append("logo",e.logo);try{await o((0,p.eK)(t)),c.oR.success(l("Forms.createCompany.success")),r()}catch(n){c.oR.error(`${l("Forms.createCompany.failed")}: ${n instanceof Error?n.message:String(n)}`)}},children:e=>{let{errors:r,touched:o}=e;return(0,$.jsxs)(w.q,{id:t,children:[(0,$.jsxs)(w.A0,{children:[(0,$.jsx)(w.JU,{children:l("Forms.createCompany.name")}),(0,$.jsx)(w.pd,{name:"name",placeholder:l("Forms.createCompany.namePlaceholder"),$hasError:o.name&&!!r.name}),o.name&&r.name&&(0,$.jsx)(w.yn,{children:r.name})]}),(0,$.jsxs)(w.A0,{children:[(0,$.jsx)(w.JU,{children:l("Forms.createCompany.logo")}),(0,$.jsx)(k,{name:"logo",placeholderText:l("Forms.common.dragOrClick"),buttonText:l("Forms.common.chooseFile")})]})]})}})},W=e=>{let{handlerCloseModal:r}=e;const{t:t}=(0,n.B)(),o="create-company-form";return(0,$.jsx)(h.A,{handlerCloseModal:r,children:(0,$.jsx)(u.A,{handlerCloseModal:r,title:t("Modals.createCompany.title"),formName:o,children:(0,$.jsx)(H,{handlerCloseModal:r,formName:o})})})},Q=d.Ay.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`,X=d.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,Z=d.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,ee=d.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`,re=d.Ay.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
`,te=d.Ay.button`
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
`,oe=d.Ay.div`
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
`,ne=d.Ay.input`
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
`,ae=d.Ay.div`
  display: flex;
  height: 100%;
  width: 100%;

  @media (min-width: 768px) {
    width: 200px;
  }
`,le=d.Ay.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: 1fr;
  }
`,ie=()=>{const[e,r]=(0,o.useState)(""),[t,d]=(0,o.useState)("name"),[c,m]=(0,o.useState)(!1),p=(0,a.GV)(l.Yl),x=(0,a.GV)(l.EB),{t:h}=(0,n.B)(),u=()=>{m((e=>!e))},g=(0,o.useMemo)((()=>x.filter((r=>r.name.toLowerCase().includes(e.toLowerCase()))).sort(((e,r)=>"name"===t?e.name.localeCompare(r.name):"date"===t?new Date(r.createdAt).getTime()-new Date(e.createdAt).getTime():0))),[x,e,t]);return(0,$.jsx)(Q,{children:p?(0,$.jsx)(X,{children:(0,$.jsx)(i.A,{size:"48px",color:"#3e85f3"})}):(0,$.jsxs)($.Fragment,{children:[(0,$.jsxs)(Z,{children:[(0,$.jsxs)(ee,{children:[(0,$.jsx)(re,{children:h("Companies.title")}),(0,$.jsx)(te,{onClick:()=>u(),children:h("Companies.create")})]}),(0,$.jsxs)(oe,{children:[(0,$.jsx)(ne,{type:"text",placeholder:h("Companies.searchPlaceholder"),value:e,onChange:e=>r(e.target.value)}),(0,$.jsx)(ae,{children:(0,$.jsx)(s.A,{options:["name","date"],value:t,onChange:d,getLabel:e=>h(`Companies.filters.${e}`),getKey:e=>e})})]})]}),(0,$.jsx)(le,{children:g.map((e=>(0,$.jsx)(J,{company:e},e._id)))}),c&&(0,$.jsx)(W,{handlerCloseModal:u})]})})}}}]);
//# sourceMappingURL=669.bd3bcfce.chunk.js.map