"use strict";(self.webpackChunktaskero=self.webpackChunktaskero||[]).push([[952],{3367:(e,r,t)=>{t.d(r,{A:()=>s});var o=t(2998),n=t(5464);const i=n.Ay.div`
  position: relative;
  height: 28px;
  width: fit-content;
`,l=n.Ay.div`
  position: absolute;
  left: ${e=>{let{index:r}=e;return 20*r}}px;
  z-index: ${e=>{let{index:r}=e;return 10-r}};
`,a=n.Ay.div`
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
`;var d=t(579);const s=e=>{let{members:r,maxVisible:t=4,size:n=28}=e;const s=r.slice(0,t),c=r.length-t;return(0,d.jsxs)(i,{children:[s.map(((e,r)=>{var t;return(0,d.jsx)(l,{index:r,children:(0,d.jsx)(o.A,{src:null!==(t=e.avatar)&&void 0!==t&&t.startsWith("http")?e.avatar:`https:${e.avatar}`,size:n})},e._id)})),c>0&&(0,d.jsx)(l,{index:t,children:(0,d.jsxs)(a,{size:n,children:["+",c]})})]})}},6952:(e,r,t)=>{t.r(r),t.d(r,{default:()=>we});var o=t(5043),n=t(4961),i=t(9867),l=t(377),a=t(5939),d=t(1308),s=t(5464),c=t(2115),m=t(3289),p=t(5601),u=t(3367),h=t(9593),x=t(7784),g=t(3892),y=t(184);const b=s.Ay.div`
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
`,f=s.Ay.div`
  color: ${e=>{let{theme:r}=e;return r.secondaryText}};
`,v=s.Ay.button`
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
`,j=s.Ay.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 12px;
  background-color: #ccc;
`,w=s.Ay.input`
  display: none;
`,$=s.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
`;var A=t(7711),k=t(579);const C=e=>{let{name:r,placeholderText:t,buttonText:n,initialPreview:i=null}=e;const l=(0,s.DP)(),a=(0,o.useRef)(null),[d,c,m]=(0,g.Mt)(r),[p,u]=(0,o.useState)(null);(0,o.useEffect)((()=>{!d.value&&i&&u(i)}),[i,d.value]);const h=e=>{m.setValue(e),u(URL.createObjectURL(e))};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(b,{onClick:()=>{var e;return null===(e=a.current)||void 0===e?void 0:e.click()},onDrop:e=>{e.preventDefault();const r=e.dataTransfer.files[0];r&&h(r)},onDragOver:e=>e.preventDefault(),children:p?(0,k.jsx)(j,{src:p,alt:"Preview"}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)($,{children:(0,k.jsx)(y.IqM,{size:48,color:l.secondaryText})}),(0,k.jsx)(f,{children:t}),(0,k.jsx)(v,{type:"button",children:n})]})}),(0,k.jsx)(w,{ref:a,type:"file",accept:"image/*",onChange:e=>{var r;const t=null===(r=e.target.files)||void 0===r?void 0:r[0];t&&h(t)}}),c.touched&&c.error&&(0,k.jsx)(A.yn,{children:c.error})]})},F=s.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 295px;
`;var M=t(899);const T=M.Ik({name:M.Yj().required("Required"),logo:M.gl().nullable()}),z=e=>{let{handlerCloseModal:r,formName:t,companyId:l}=e;const d=(0,i.jL)(),{t:s}=(0,n.B)(),[m,u]=(0,o.useState)(null);(0,o.useEffect)((()=>{(async()=>{try{const e=await d((0,p.Gh)(l)).unwrap();u(e)}catch(e){c.oR.error(`${s("Forms.editCompany.failedToLoad")}: ${e instanceof Error?e.message:String(e)}`),r()}})()}),[d,l,s,r]);const h={name:(null===m||void 0===m?void 0:m.name)||"",logo:null};return m?(0,k.jsx)(g.l1,{enableReinitialize:!0,initialValues:h,validationSchema:T,onSubmit:async e=>{const t=new FormData;t.append("name",e.name),e.logo&&t.append("logo",e.logo);try{await d((0,p.JT)({id:l,formData:t})).unwrap(),c.oR.success(s("Forms.editCompany.success")),r()}catch(o){c.oR.error(`${s("Forms.editCompany.failed")}: ${o instanceof Error?o.message:String(o)}`)}},children:e=>{let{errors:r,touched:o}=e;return(0,k.jsxs)(A.q,{id:t,children:[(0,k.jsxs)(A.A0,{children:[(0,k.jsx)(A.JU,{children:s("Forms.editCompany.name")}),(0,k.jsx)(A.pd,{name:"name",placeholder:s("Forms.editCompany.namePlaceholder"),$hasError:o.name&&!!r.name}),o.name&&r.name&&(0,k.jsx)(A.yn,{children:r.name})]}),(0,k.jsxs)(A.A0,{children:[(0,k.jsx)(A.JU,{children:s("Forms.editCompany.logo")}),(0,k.jsx)(C,{name:"logo",placeholderText:s("Forms.common.dragOrClick"),buttonText:s("Forms.common.chooseFile"),initialPreview:m.logo})]})]})}}):(0,k.jsx)(F,{children:(0,k.jsx)(a.A,{size:"60px",color:"#3e85f3"})})},S=e=>{let{handlerCloseModal:r,deleteAction:t,companyId:o}=e;const{t:i}=(0,n.B)(),l="edit-company-form";return(0,k.jsx)(h.A,{handlerCloseModal:r,children:(0,k.jsx)(x.A,{handlerCloseModal:r,title:i("Modals.editCompany.title"),formName:l,deleteAction:t,children:(0,k.jsx)(z,{handlerCloseModal:r,formName:l,companyId:o})})})};var E=t(7201);const R=s.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px;
  border: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
  border-radius: 4px;
  background-color: ${e=>{let{theme:r}=e;return r.cardBackground}};
  min-height: 44px;
  max-height: 200px;
  overflow: auto;
  cursor: text;
  transition: border ${e=>{let{theme:r}=e;return r.animation}};

  &:focus-within {
    border: 1px solid ${e=>{let{theme:r}=e;return r.primary}};
  }
`,L=s.Ay.div`
  display: flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 4px;
  background-color: ${e=>{let{theme:r}=e;return r.tagBackground}};
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
  font-size: 14px;
`,B=s.Ay.button`
  margin-left: 6px;
  border: none;
  background: none;
  color: ${e=>{let{theme:r}=e;return r.danger}};
  font-weight: bold;
  cursor: pointer;
  line-height: 1;
`,D=s.Ay.input`
  flex: 1;
  min-width: 150px;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 6px;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
  background: transparent;

  &::placeholder {
    color: ${e=>{let{theme:r}=e;return r.secondaryText}};
  }
`,I=e=>{let{pending:r,onPendingChange:t,placeholder:i}=e;const[l,a]=(0,o.useState)(""),{t:d}=(0,n.B)();return(0,k.jsxs)(R,{children:[r.map((e=>(0,k.jsxs)(L,{children:[e,(0,k.jsx)(B,{onClick:()=>{return o=e,void t(r.filter((e=>e!==o)));var o},children:"\xd7"})]},e))),(0,k.jsx)(D,{type:"text",value:l,onChange:e=>a(e.target.value),onKeyDown:e=>{if(["Enter","Tab",","].includes(e.key)){e.preventDefault();const o=l.trim().replace(/,+$/,"");if(!o)return;if(!(e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e))(o))return void c.oR.error(d("Forms.common.invalidEmail"));if(r.includes(o))return c.oR.info(d("Forms.common.alreadyInPending")),void a("");t([...r,o]),a("")}},placeholder:i})]})},N=s.Ay.div`
  max-height: 240px;
  overflow-y: auto;
  border: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
  border-radius: 8px;
`,P=s.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  font-size: 15px;
  border-bottom: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
  background-color: ${e=>{let{theme:r}=e;return r.cardBackground}};

  &:last-child {
    border-bottom: none;
  }
`,q=s.Ay.img`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  flex-shrink: 0;
  object-fit: cover;
`,O=s.Ay.div`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background-color: #cccccc;
  flex-shrink: 0;
`,V=s.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,_=s.Ay.div`
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
`,G=s.Ay.div`
  font-size: 14px;
  color: ${e=>{let{theme:r}=e;return r.secondaryText}};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,H=s.Ay.span`
  font-size: 12px;
  background-color: ${e=>{let{color:r}=e;return r}};
  color: ${e=>{let{theme:r}=e;return r.roleTextColor}};
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
`,U=s.Ay.button`
  border: 1px solid ${e=>{let{theme:r}=e;return r.danger}};
  color: ${e=>{let{theme:r}=e;return r.danger}};
  background: none;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: color ${e=>{let{theme:r}=e;return r.animation}},
    background-color ${e=>{let{theme:r}=e;return r.animation}},
    border-color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.invertedText||"rgba(255, 0, 0, 0.8)"}};
    background-color: ${e=>{let{theme:r}=e;return r.dangerHover||"rgba(255, 0, 0, 0.05)"}};
    border-color: ${e=>{let{theme:r}=e;return r.dangerHover||"rgba(255, 0, 0, 0.2)"}};
  }
`,Y=e=>{let{value:r,users:t,onChange:l,withActions:a=!0}=e;const d=(0,i.jL)(),[m,p]=(0,o.useState)([]),[u,h]=(0,o.useState)([]),{t:x}=(0,n.B)(),g=(0,s.DP)(),y={owner:g.roleOwner,editor:g.roleEditor,viewer:g.roleViewer,member:g.roleMember,new:g.roleNew},b=async()=>{if(0===m.length)return void c.oR.info(x("Forms.common.nobodyToAdd"));const e=m.filter((e=>!r.includes(e)));if(0===e.length)return c.oR.info(x("Forms.common.allAlreadyAdded")),void p([]);try{const t=(await d((0,E.AX)(e)).unwrap()).map((e=>({...e,role:"new"})));h((e=>[...e,...t])),l([...r,...t.map((e=>e.email))]),p([])}catch(t){c.oR.error(x("Forms.common.fetchUsersFailed")),l([...r,...e]),p([])}},f=r.map((e=>t.find((r=>r.email===e))||u.find((r=>r.email===e))||{_id:e,name:e.split("@")[0],email:e,role:"new"}));return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(N,{children:f.map((e=>{const t=y[e.role]||g.roleMember;return(0,k.jsxs)(P,{children:[e.avatar?(0,k.jsx)(q,{src:e.avatar,alt:e.name}):(0,k.jsx)(O,{}),(0,k.jsxs)(V,{children:[(0,k.jsxs)(_,{children:[e.name,e.role&&(0,k.jsx)(H,{color:t,children:x(`Common.roles.${e.role}`)})]}),(0,k.jsx)(G,{children:e.email})]}),a&&"owner"!==e.role&&(0,k.jsx)(U,{type:"button",onClick:()=>{return t=e.email,void l(r.filter((e=>e!==t)));var t},children:x("Forms.common.remove")})]},e._id)}))}),a&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)("label",{children:x("Forms.common.addMembers")}),(0,k.jsx)(I,{pending:m,onPendingChange:p,placeholder:x("Forms.common.addMembersPlaceholder")}),(0,k.jsx)(A.GX,{type:"button",onClick:b,children:x("Forms.common.addMembers")})]})]})},J=s.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 295px;
`,K=M.Ik().shape({members:M.YO().of(M.Yj().email()).min(1).required(),newMembers:M.Yj()}),X=e=>{let{handlerCloseModal:r,formName:t,companyId:l,withActions:d=!0}=e;const s=(0,i.jL)(),[m,u]=(0,o.useState)(null),{t:h}=(0,n.B)();if((0,o.useEffect)((()=>{(async()=>{try{const e=await s((0,p.Gh)(l)).unwrap();u(e)}catch(e){c.oR.error(`${h("Forms.editCompanyMembers.failedToLoad")}: ${e instanceof Error?e.message:String(e)}`),r()}})()}),[s,l,h,r]),!m)return(0,k.jsx)(J,{children:(0,k.jsx)(a.A,{size:"60px",color:"#3e85f3"})});const x={members:m.members.map((e=>e.email))},y=m.members.map((e=>({...e,role:m.owner.email===e.email?"owner":"member"})));return(0,k.jsx)(g.l1,{enableReinitialize:!0,initialValues:x,validationSchema:K,onSubmit:async e=>{try{await s((0,p.jw)({id:m._id,members:e.members})).unwrap(),c.oR.success(h("Forms.editCompanyMembers.success")),r()}catch(t){c.oR.error(`${h("Forms.editCompanyMembers.failed")}: ${t instanceof Error?t.message:String(t)}`)}},children:e=>{let{values:r,setFieldValue:o}=e;return(0,k.jsx)(A.q,{id:t,children:(0,k.jsx)(Y,{value:r.members,users:y,onChange:e=>o("members",e),withActions:d})})}})},W=e=>{let{handlerCloseModal:r,companyId:t,withActions:o=!0}=e;const{t:i}=(0,n.B)(),l="edit-company-members-form";return(0,k.jsx)(h.A,{handlerCloseModal:r,children:(0,k.jsx)(x.A,{handlerCloseModal:r,title:i("Modals.editCompanyMembers.title"),formName:l,withActions:o,children:(0,k.jsx)(X,{handlerCloseModal:r,formName:l,companyId:t,withActions:o})})})},Z=s.Ay.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  padding: 16px;
  border: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
  border-radius: 4px;
  background-color: ${e=>{let{theme:r}=e;return r.background}};
`,Q=s.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,ee=s.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,re=s.Ay.img`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 12px;
  background-color: #ddd;
`,te=s.Ay.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
`,oe=s.Ay.span`
  font-size: 14px;
  font-weight: 500;
  color: ${e=>{let{theme:r}=e;return r.roleTextColor}};
  background-color: ${e=>{let{color:r}=e;return r}};
  border-radius: 4px;
  padding: 2px 8px;
  align-self: start;
`,ne=s.Ay.div`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  gap: 8px;
`,ie=s.Ay.button`
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
`;var le=t(3538);const ae=e=>{var r;let{company:t}=e;const l=(0,i.jL)(),[a,d]=(0,o.useState)(!1),[h,x]=(0,o.useState)(!1),g=(0,i.GV)(m.AS),{t:y}=(0,n.B)(),b=(0,s.DP)(),f=()=>{d((e=>!e))},v=()=>{x((e=>!e))},j=(null===t||void 0===t||null===(r=t.owner)||void 0===r?void 0:r.email)===g?"owner":"member",w=t.members,$={owner:b.roleOwner,member:b.roleMember};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(Z,{children:[(0,k.jsxs)(Q,{children:[(0,k.jsx)(re,{src:t.logo,alt:"Logo"}),(0,k.jsx)(te,{children:t.name})]}),(0,k.jsxs)(ee,{children:[(0,k.jsx)(oe,{color:$[j],children:y(`Common.role.${j}`)}),(0,k.jsx)(u.A,{members:[...w].reverse()})]}),(0,k.jsxs)(ne,{children:[(0,k.jsx)(ie,{onClick:v,children:(0,k.jsx)(le.Sy$,{size:20})}),"owner"===j&&(0,k.jsx)(ie,{onClick:f,children:(0,k.jsx)(le.Kak,{size:20})})]})]}),a&&"owner"===j&&(0,k.jsx)(S,{handlerCloseModal:()=>f(),deleteAction:async()=>{try{await l((0,p.RC)(t._id)),c.oR.success(y("Forms.deleteCompany.success")),f()}catch(e){c.oR.error(`${y("Forms.deleteCompany.failed")}: ${e instanceof Error?e.message:String(e)}`)}},companyId:t._id}),h&&(0,k.jsx)(W,{handlerCloseModal:()=>v(),companyId:t._id,withActions:"owner"===j})]})},de=M.Ik({name:M.Yj().required("Required"),logo:M.gl().nullable()}),se={name:"",logo:null},ce=e=>{let{handlerCloseModal:r,formName:t}=e;const o=(0,i.jL)(),{t:l}=(0,n.B)();return(0,k.jsx)(g.l1,{initialValues:se,validationSchema:de,onSubmit:async e=>{const t=new FormData;t.append("name",e.name),e.logo&&t.append("logo",e.logo);try{await o((0,p.eK)(t)),c.oR.success(l("Forms.createCompany.success")),r()}catch(n){c.oR.error(`${l("Forms.createCompany.failed")}: ${n instanceof Error?n.message:String(n)}`)}},children:e=>{let{errors:r,touched:o}=e;return(0,k.jsxs)(A.q,{id:t,children:[(0,k.jsxs)(A.A0,{children:[(0,k.jsx)(A.JU,{children:l("Forms.createCompany.name")}),(0,k.jsx)(A.pd,{name:"name",placeholder:l("Forms.createCompany.namePlaceholder"),$hasError:o.name&&!!r.name}),o.name&&r.name&&(0,k.jsx)(A.yn,{children:r.name})]}),(0,k.jsxs)(A.A0,{children:[(0,k.jsx)(A.JU,{children:l("Forms.createCompany.logo")}),(0,k.jsx)(C,{name:"logo",placeholderText:l("Forms.common.dragOrClick"),buttonText:l("Forms.common.chooseFile")})]})]})}})},me=e=>{let{handlerCloseModal:r}=e;const{t:t}=(0,n.B)(),o="create-company-form";return(0,k.jsx)(h.A,{handlerCloseModal:r,children:(0,k.jsx)(x.A,{handlerCloseModal:r,title:t("Modals.createCompany.title"),formName:o,children:(0,k.jsx)(ce,{handlerCloseModal:r,formName:o})})})},pe=s.Ay.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`,ue=s.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,he=s.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,xe=s.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`,ge=s.Ay.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
`,ye=s.Ay.button`
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
`,be=s.Ay.div`
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
`,fe=s.Ay.input`
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
`,ve=s.Ay.div`
  display: flex;
  height: 100%;
  width: 100%;

  @media (min-width: 768px) {
    width: 200px;
  }
`,je=s.Ay.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1280px) {
    grid-template-columns: 1fr;
  }
`,we=()=>{const[e,r]=(0,o.useState)(""),[t,s]=(0,o.useState)("name"),[c,m]=(0,o.useState)(!1),p=(0,i.GV)(l.Yl),u=(0,i.GV)(l.EB),{t:h}=(0,n.B)(),x=()=>{m((e=>!e))},g=(0,o.useMemo)((()=>u.filter((r=>r.name.toLowerCase().includes(e.toLowerCase()))).sort(((e,r)=>"name"===t?e.name.localeCompare(r.name):"date"===t?new Date(r.createdAt).getTime()-new Date(e.createdAt).getTime():0))),[u,e,t]);return(0,k.jsx)(pe,{children:p?(0,k.jsx)(ue,{children:(0,k.jsx)(a.A,{size:"48px",color:"#3e85f3"})}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(he,{children:[(0,k.jsxs)(xe,{children:[(0,k.jsx)(ge,{children:h("Companies.title")}),(0,k.jsx)(ye,{onClick:()=>x(),children:h("Companies.create")})]}),(0,k.jsxs)(be,{children:[(0,k.jsx)(fe,{type:"text",placeholder:h("Companies.searchPlaceholder"),value:e,onChange:e=>r(e.target.value)}),(0,k.jsx)(ve,{children:(0,k.jsx)(d.A,{options:["name","date"],value:t,onChange:s,getLabel:e=>h(`Companies.filters.${e}`),getKey:e=>e})})]})]}),(0,k.jsx)(je,{children:g.map((e=>(0,k.jsx)(ae,{company:e},e._id)))}),c&&(0,k.jsx)(me,{handlerCloseModal:x})]})})}},7711:(e,r,t)=>{t.d(r,{A0:()=>d,GX:()=>y,Gg:()=>u,JU:()=>s,K_:()=>p,N3:()=>f,TM:()=>w,ZD:()=>h,b7:()=>g,mO:()=>l,oX:()=>j,oi:()=>m,pd:()=>c,q:()=>a,ql:()=>x,sF:()=>b,yn:()=>v});var o=t(5464),n=t(3892),i=t(5180);const l=o.Ay.div`
  width: 100%;
`,a=(0,o.Ay)(n.lV)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,d=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,s=o.Ay.label`
  font-size: 14px;
  font-weight: 500;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
`,c=(0,o.Ay)(n.D0)`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid
    ${e=>{let{$hasError:r,theme:t}=e;return r?"#e74a3b":t.borderColor}};
  border-radius: 4px;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
  background-color: ${e=>{let{theme:r}=e;return r.cardBackground}};
  outline: none;
  transition: border-color ${e=>{let{theme:r}=e;return r.animation}};

  &::placeholder {
    color: ${e=>{let{theme:r}=e;return r.secondaryText}};
  }

  &:focus {
    border-color: ${e=>{let{theme:r}=e;return r.primary}};
  }
`,m=o.Ay.div`
  position: relative;
`,p=o.Ay.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${e=>{let{theme:r}=e;return r.secondaryText}};
`,u=o.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
`,h=o.Ay.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
  cursor: pointer;
  user-select: none;

  input {
    display: none;
  }

  span {
    display: flex;
    align-items: center;
    width: 20px;
    height: 20px;
    border: 2px solid ${e=>{let{theme:r}=e;return r.borderColor}};
    border-radius: 4px;
    position: relative;
    transition: all ${e=>{let{theme:r}=e;return r.animation}};
  }

  input:checked + span {
    background-color: ${e=>{let{theme:r}=e;return r.primary}};
    border-color: ${e=>{let{theme:r}=e;return r.primary}};
  }

  input:checked + span::after {
    content: "";
    position: absolute;
    left: 6px;
    top: 2px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
  }
`,x=(0,o.Ay)(i.N_)`
  font-size: 14px;
  color: ${e=>{let{theme:r}=e;return r.primary}};
  transition: color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.primaryHover}};
  }
`,g=o.Ay.button`
  padding: 12px;
  background-color: ${e=>{let{theme:r}=e;return r.primary}};
  color: ${e=>{let{theme:r}=e;return r.buttonText}};
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    background-color: ${e=>{let{theme:r}=e;return r.primaryHover}};
  }
`,y=o.Ay.button`
  padding: 8px 16px;
  background-color: ${e=>{let{theme:r}=e;return r.primary}};
  color: ${e=>{let{theme:r}=e;return r.buttonText}};
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  transition: background-color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    background-color: ${e=>{let{theme:r}=e;return r.primaryHover}};
  }
`,b=o.Ay.button`
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
`,f=o.Ay.button`
  padding: 8px 16px;
  background-color: ${e=>{let{theme:r}=e;return r.background}};
  color: ${e=>{let{theme:r}=e;return r.danger}};
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  transition: color ${e=>{let{theme:r}=e;return r.animation}},
    background-color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.dangerHover}};
    background-color: ${e=>{let{theme:r}=e;return r.backgroundSecondary}};
  }
`,v=o.Ay.p`
  color: #e74a3b;
  font-size: 12px;
  margin-top: -4px;
`,j=(0,o.Ay)(i.N_)`
  font-size: 14px;
  color: ${e=>{let{theme:r}=e;return r.primary}};
  text-decoration: underline;
  transition: color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.primaryHover}};
  }
`,w=(0,o.Ay)(c).attrs({as:"textarea"})`
  resize: vertical;
  min-height: 100px;
`},7784:(e,r,t)=>{t.d(r,{A:()=>v});var o,n,i=t(4961),l=t(7711),a=t(5464),d=t(5043);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s.apply(null,arguments)}function c(e,r){let{title:t,titleId:i,...l}=e;return d.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:r,"aria-labelledby":i},l),t?d.createElement("title",{id:i},t):null,o||(o=d.createElement("path",{d:"M18 6L6 18",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),n||(n=d.createElement("path",{d:"M6 6L18 18",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const m=d.forwardRef(c),p=(t.p,a.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`),u=a.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  position: relative;
  padding: 24px;
  border-bottom: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
`,h=a.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;

  &:hover svg {
    stroke: ${e=>{let{theme:r}=e;return r.modalCloseIconColorHover}};
    scale: 1.1;
  }
`,x=(0,a.Ay)(m)`
  stroke: ${e=>{let{theme:r}=e;return r.modalCloseIconColor}};
  width: 24px;
  height: 24px;
  transition: stroke ${e=>{let{theme:r}=e;return r.animation}},
    scale ${e=>{let{theme:r}=e;return r.animation}};
`,g=a.Ay.h2`
  font-size: 24px;
  font-weight: 700;
`,y=a.Ay.div`
  padding: 24px;
`,b=a.Ay.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 24px;
  border-top: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
`;var f=t(579);const v=e=>{let{handlerCloseModal:r,title:t,formName:o,deleteAction:n,withActions:a=!0,children:d}=e;const{t:s}=(0,i.B)();return(0,f.jsxs)(p,{children:[(0,f.jsxs)(u,{children:[(0,f.jsx)(g,{children:t}),(0,f.jsx)(h,{onClick:r,children:(0,f.jsx)(x,{})})]}),(0,f.jsx)(y,{children:d}),a&&(0,f.jsxs)(b,{children:[n&&(0,f.jsx)(l.N3,{type:"button",onClick:()=>n(),children:s("Modals.common.delete")}),(0,f.jsxs)("div",{style:{display:"flex",gap:"8px",marginLeft:"auto"},children:[(0,f.jsx)(l.sF,{type:"button",onClick:r,children:s("Modals.common.cancel")}),(0,f.jsx)(l.GX,{type:"submit",form:o,children:s("Modals.common.save")})]})]})]})}},9593:(e,r,t)=>{t.d(r,{A:()=>c});var o=t(5043),n=t(7950),i=t(5464);const l=i.Ay.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
  z-index: 999;
`,a=i.Ay.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  min-width: 200px;
  min-height: 200px;
  background-color: ${e=>{let{theme:r}=e;return r.background}};
  border: ${e=>{let{theme:r}=e;return r.modalBorder}};
  border-radius: 8px;

  box-shadow: ${e=>{let{theme:r}=e;return r.shadow}};
`;var d=t(579);const s=document.querySelector("#modal-root"),c=e=>{let{children:r,handlerCloseModal:t}=e;const i=(0,o.useCallback)((e=>{"Escape"===e.code&&t()}),[t]);(0,o.useEffect)((()=>(window.addEventListener("keydown",i),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",i),document.body.style.overflow="auto"})),[i]);return(0,n.createPortal)((0,d.jsx)(l,{onClick:e=>{e.currentTarget===e.target&&t()},children:(0,d.jsx)(a,{children:r})}),s)}}}]);
//# sourceMappingURL=952.f1a357ab.chunk.js.map