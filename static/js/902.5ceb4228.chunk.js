"use strict";(self.webpackChunktaskero=self.webpackChunktaskero||[]).push([[902],{902:(e,r,t)=>{t.r(r),t.d(r,{default:()=>q});var o=t(4961),n=t(5464);const a=n.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  height: 100%;
  padding: 24px 32px;
  background-color: ${e=>{let{theme:r}=e;return r.backgroundSecondary}};

  @media screen and (min-width: 768px) {
    padding: 24px 100px;
  }
`,i=n.Ay.h1`
  font-size: 36px;
  font-weight: 700;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
`,s=n.Ay.div`
  width: 100%;
  background-color: ${e=>{let{theme:r}=e;return r.background}};
  border-radius: 8px;
  padding: 24px;
  box-shadow: ${e=>{let{theme:r}=e;return r.shadow}};
`;var l=t(5043),d=t(3892),c=t(2115),u=t(9867),p=t(7201),m=t(3289),h=t(2246),x=t(184),b=t(899);const g=b.Ik().shape({fullName:b.Yj().required("Required"),email:b.Yj().email().required("Required"),avatarFile:b.gl().nullable()});var w=t(7711);const y=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`,f=n.Ay.div`
  position: relative;
  width: 96px;
  height: 96px;
`,v=n.Ay.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  background: ${e=>{let{theme:r}=e;return r.cardBackground}};
`,j=n.Ay.button`
  position: absolute;
  bottom: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  transform: translate(40%, 40%);
  border: none;
  border-radius: 50%;
  color: ${e=>{let{theme:r}=e;return r.buttonText}};
  background-color: ${e=>{let{theme:r}=e;return r.buttonBackground}};
  cursor: pointer;
  transition: background-color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    background-color: ${e=>{let{theme:r}=e;return r.buttonBackgroundHover}};
  }
`,k=n.Ay.input`
  display: none;
`,$=n.Ay.button`
  padding: 8px 16px;
  font-size: 16px;
  border: 1px solid ${e=>{let{theme:r}=e;return r.buttonBackground}};
  border-radius: 4px;
  background: transparent;
  color: ${e=>{let{theme:r}=e;return r.buttonBackground}};
  cursor: pointer;
  transition: color ${e=>{let{theme:r}=e;return r.animation}},
    background-color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.buttonText}};
    background-color: ${e=>{let{theme:r}=e;return r.buttonBackground}};
  }
`,A=(0,n.Ay)(w.pd)`
  color: ${e=>{let{theme:r}=e;return r.secondaryText}};
  background: ${e=>{let{theme:r}=e;return r.backgroundSecondary}};
`;var P=t(9593),C=t(7784),F=t(7606);const N=b.Ik().shape({currentPassword:b.Yj().min(6,"Current password must be at least 6 characters").required("Current password is required"),newPassword:b.Yj().min(6,"New password must be at least 6 characters").notOneOf([b.KR("currentPassword")],"New password must be different from current").required("New password is required"),confirmPassword:b.Yj().oneOf([b.KR("newPassword")],"Passwords must match").required("Please confirm your new password")});var z=t(579);const S={currentPassword:"",newPassword:"",confirmPassword:""},M=e=>{let{handlerCloseModal:r,formName:t}=e;const n=(0,u.jL)(),{t:a}=(0,o.B)();return(0,z.jsx)(d.l1,{initialValues:S,validationSchema:N,onSubmit:async e=>{try{await n((0,p.ec)({currentPassword:e.currentPassword,newPassword:e.newPassword})).unwrap(),c.oR.success(a("Forms.account.changePasswordSuccess")),r()}catch(t){c.oR.error(`${a("Forms.account.changePasswordFailed")}: ${t instanceof Error?t.message:String(t)}`)}},children:e=>{let{errors:r,touched:o}=e;return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(F.R,{}),(0,z.jsxs)(w.q,{id:t,children:[(0,z.jsxs)(w.A0,{children:[(0,z.jsx)(w.JU,{children:a("Forms.account.currentPassword")}),(0,z.jsx)(w.pd,{name:"currentPassword",type:"password",placeholder:a("Forms.account.currentPasswordPlaceholder"),autoComplete:"current-password"}),o.currentPassword&&r.currentPassword&&(0,z.jsx)(w.yn,{children:r.currentPassword})]}),(0,z.jsxs)(w.A0,{children:[(0,z.jsx)(w.JU,{children:a("Forms.account.newPassword")}),(0,z.jsx)(w.pd,{name:"newPassword",type:"password",placeholder:a("Forms.account.newPasswordPlaceholder"),autoComplete:"new-password"}),o.newPassword&&r.newPassword&&(0,z.jsx)(w.yn,{children:r.newPassword})]}),(0,z.jsxs)(w.A0,{children:[(0,z.jsx)(w.JU,{children:a("Forms.account.confirmNewPassword")}),(0,z.jsx)(w.pd,{name:"confirmPassword",type:"password",placeholder:a("Forms.account.confirmNewPasswordPlaceholder"),autoComplete:"new-password"}),o.confirmPassword&&r.confirmPassword&&(0,z.jsx)(w.yn,{children:r.confirmPassword})]})]})]})}})},T=e=>{let{handlerCloseModal:r}=e;const{t:t}=(0,o.B)(),n="change-password-form";return(0,z.jsx)(P.A,{handlerCloseModal:r,children:(0,z.jsx)(C.A,{handlerCloseModal:r,title:t("Forms.account.changePassword"),formName:n,children:(0,z.jsx)(M,{handlerCloseModal:r,formName:n})})})},B=()=>{const e=(0,u.jL)(),r=(0,u.GV)(m.mB),t=(0,l.useRef)(null),[a,i]=(0,l.useState)(r.avatar||""),[s,b]=(0,l.useState)(!1),{t:P}=(0,o.B)(),C=(0,n.DP)(),F={fullName:r.name,email:r.email,avatarFile:null},N=()=>{b((e=>!e))};return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(d.l1,{initialValues:F,validationSchema:g,onSubmit:async r=>{try{const t=new FormData;t.append("name",r.fullName),r.avatarFile&&t.append("avatar",r.avatarFile),await e((0,p.TK)(t)).unwrap()}catch(t){c.oR.error(`${P("Forms.account.updateFailed")}: ${t instanceof Error?t.message:String(t)}`)}},enableReinitialize:!0,children:e=>{let{errors:r,touched:o,setFieldValue:n,isSubmitting:s}=e;return(0,z.jsxs)(w.q,{children:[(0,z.jsxs)(y,{children:[(0,z.jsxs)(f,{children:[(0,z.jsx)(v,{src:a}),(0,z.jsx)(j,{type:"button",onClick:()=>{var e;return null===(e=t.current)||void 0===e?void 0:e.click()},children:(0,z.jsx)(x.OiG,{size:12})}),(0,z.jsx)(k,{ref:t,type:"file",accept:"image/*",onChange:e=>{var r;const t=(null===(r=e.target.files)||void 0===r?void 0:r[0])||null;n("avatarFile",t),t&&i(URL.createObjectURL(t))}})]}),(0,z.jsx)($,{type:"button",onClick:N,children:P("Forms.account.changePassword")})]}),(0,z.jsxs)(w.A0,{children:[(0,z.jsx)(w.JU,{children:P("Forms.account.fullName")}),(0,z.jsx)(w.pd,{name:"fullName",placeholder:P("Forms.account.fullNamePlaceholder"),$hasError:Boolean(o.fullName&&r.fullName)}),o.fullName&&r.fullName&&(0,z.jsx)(w.yn,{children:r.fullName})]}),(0,z.jsxs)(w.A0,{children:[(0,z.jsx)(w.JU,{children:P("Forms.account.email")}),(0,z.jsx)(A,{name:"email",disabled:!0})]}),(0,z.jsx)(w.b7,{type:"submit",disabled:s,children:s?(0,z.jsx)(h.A,{size:"18px",color:C.buttonText}):P("Forms.account.saveChanges")})]})}}),s&&(0,z.jsx)(T,{handlerCloseModal:N})]})},q=()=>{const{t:e}=(0,o.B)();return(0,z.jsxs)(a,{children:[(0,z.jsx)(i,{children:e("Account.title")}),(0,z.jsx)(s,{children:(0,z.jsx)(B,{})})]})}},5735:(e,r,t)=>{t.d(r,{l:()=>o});const o=(0,t(5043).createContext)(null)},7606:(e,r,t)=>{t.d(r,{R:()=>i});t(9593);var o=t(5043),n=t(3892),a=t(5735);const i=()=>{const e=(0,o.useContext)(a.l),{isSubmitting:r}=(0,n.j7)();return(0,o.useEffect)((()=>{null===e||void 0===e||e.setModalSubmitting(r)}),[r,e]),null}},7711:(e,r,t)=>{t.d(r,{A0:()=>l,GX:()=>g,Gg:()=>m,JU:()=>d,K_:()=>p,N3:()=>y,TM:()=>j,ZD:()=>h,b7:()=>b,mO:()=>i,oX:()=>v,oi:()=>u,pd:()=>c,q:()=>s,ql:()=>x,sF:()=>w,yn:()=>f});var o=t(5464),n=t(3892),a=t(5180);const i=o.Ay.div`
  width: 100%;
`,s=(0,o.Ay)(n.lV)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,l=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,d=o.Ay.label`
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
`,u=o.Ay.div`
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
`,m=o.Ay.div`
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
`,x=(0,o.Ay)(a.N_)`
  font-size: 14px;
  color: ${e=>{let{theme:r}=e;return r.primary}};
  transition: color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.primaryHover}};
  }
`,b=o.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
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
`,g=o.Ay.button`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
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

  .btn-text {
    display: inline-block;
    white-space: nowrap;
  }

  .btn-loader {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background-color: ${e=>{let{theme:r}=e;return r.primary}};
  }
`,w=o.Ay.button`
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
`,y=o.Ay.button`
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
`,f=o.Ay.p`
  color: #e74a3b;
  font-size: 12px;
  margin-top: -4px;
`,v=(0,o.Ay)(a.N_)`
  font-size: 14px;
  color: ${e=>{let{theme:r}=e;return r.primary}};
  text-decoration: underline;
  transition: color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.primaryHover}};
  }
`,j=(0,o.Ay)(c).attrs({as:"textarea"})`
  resize: none;
  height: 150px;
  overflow-y: auto;
`},7784:(e,r,t)=>{t.d(r,{A:()=>j});var o,n,a=t(5043),i=t(4961),s=t(5464),l=t(2246),d=t(5735),c=t(7711);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},u.apply(null,arguments)}function p(e,r){let{title:t,titleId:i,...s}=e;return a.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:r,"aria-labelledby":i},s),t?a.createElement("title",{id:i},t):null,o||(o=a.createElement("path",{d:"M18 6L6 18",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),n||(n=a.createElement("path",{d:"M6 6L18 18",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const m=a.forwardRef(p),h=(t.p,s.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`),x=s.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  position: relative;
  padding: 24px;
  border-bottom: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
`,b=s.Ay.button`
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
`,g=(0,s.Ay)(m)`
  stroke: ${e=>{let{theme:r}=e;return r.modalCloseIconColor}};
  width: 24px;
  height: 24px;
  transition: stroke ${e=>{let{theme:r}=e;return r.animation}},
    scale ${e=>{let{theme:r}=e;return r.animation}};
`,w=s.Ay.h2`
  font-size: 24px;
  font-weight: 700;
`,y=s.Ay.div`
  padding: 24px;
  overflow: auto;
`,f=s.Ay.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 24px;
  border-top: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
`;var v=t(579);const j=e=>{let{handlerCloseModal:r,title:t,formName:o,deleteAction:n,withActions:u=!0,children:p}=e;const[m,j]=(0,a.useState)(!1),k=(0,a.useMemo)((()=>({setModalSubmitting:j})),[]),{t:$}=(0,i.B)(),A=(0,s.DP)();return(0,v.jsx)(d.l.Provider,{value:k,children:(0,v.jsxs)(h,{children:[(0,v.jsxs)(x,{children:[(0,v.jsx)(w,{children:t}),(0,v.jsx)(b,{onClick:r,children:(0,v.jsx)(g,{})})]}),(0,v.jsx)(y,{children:p}),u&&(0,v.jsxs)(f,{children:[n&&(0,v.jsx)(c.N3,{type:"button",onClick:()=>n(),children:$("Modals.common.delete")}),(0,v.jsxs)("div",{style:{display:"flex",gap:"8px",marginLeft:"auto"},children:[(0,v.jsx)(c.sF,{type:"button",onClick:r,children:$("Modals.common.cancel")}),(0,v.jsxs)(c.GX,{type:"submit",form:o,disabled:m,children:[(0,v.jsx)("span",{className:"btn-text",children:$("Modals.common.save")}),m&&(0,v.jsx)("div",{className:"btn-loader",children:(0,v.jsx)(l.A,{size:"16px",color:A.buttonText})})]})]})]})]})})}},9593:(e,r,t)=>{t.d(r,{A:()=>c});var o=t(5043),n=t(7950),a=t(5464);const i=a.Ay.div`
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
`,s=a.Ay.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 800px;
  min-width: 200px;
  max-height: calc(100vh - 48px);
  background-color: ${e=>{let{theme:r}=e;return r.background}};
  border: ${e=>{let{theme:r}=e;return r.modalBorder}};
  border-radius: 8px;

  box-shadow: ${e=>{let{theme:r}=e;return r.shadow}};
`;var l=t(579);const d=document.querySelector("#modal-root"),c=e=>{let{children:r,handlerCloseModal:t}=e;const a=(0,o.useCallback)((e=>{"Escape"===e.code&&t()}),[t]);(0,o.useEffect)((()=>(window.addEventListener("keydown",a),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",a),document.body.style.overflow="auto"})),[a]);return(0,n.createPortal)((0,l.jsx)(i,{onClick:e=>{e.currentTarget===e.target&&t()},children:(0,l.jsx)(s,{children:r})}),d)}}}]);
//# sourceMappingURL=902.5ceb4228.chunk.js.map