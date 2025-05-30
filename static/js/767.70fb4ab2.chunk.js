"use strict";(self.webpackChunktaskero=self.webpackChunktaskero||[]).push([[767],{5735:(e,r,t)=>{t.d(r,{l:()=>n});const n=(0,t(5043).createContext)(null)},5767:(e,r,t)=>{t.r(r),t.d(r,{default:()=>G});var n=t(5043),o=t(4961),a=t(2115),i=t(9867),s=t(6119),l=t(2699),d=t(3289),c=t(3892),u=t(5464),m=t(7201),h=t(2246),p=t(184),x=t(899);const g=x.Ik().shape({fullName:x.Yj().required("Required"),email:x.Yj().email().required("Required"),avatarFile:x.gl().nullable()});var b=t(7711);const w=u.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
`,f=u.Ay.div`
  position: relative;
  width: 96px;
  height: 96px;
  flex-shrink: 0;
`,y=u.Ay.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
  background: ${e=>{let{theme:r}=e;return r.cardBackground}};
`,v=u.Ay.button`
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
`,j=u.Ay.input`
  display: none;
`,k=u.Ay.button`
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
`,$=(0,u.Ay)(b.pd)`
  color: ${e=>{let{theme:r}=e;return r.secondaryText}};
  background: ${e=>{let{theme:r}=e;return r.backgroundSecondary}};
`;var A=t(9593),C=t(7784),P=t(7606);const F=x.Ik().shape({currentPassword:x.Yj().min(6,"Current password must be at least 6 characters").required("Current password is required"),newPassword:x.Yj().min(6,"New password must be at least 6 characters").notOneOf([x.KR("currentPassword")],"New password must be different from current").required("New password is required"),confirmPassword:x.Yj().oneOf([x.KR("newPassword")],"Passwords must match").required("Please confirm your new password")});var R=t(579);const N={currentPassword:"",newPassword:"",confirmPassword:""},M=e=>{let{handlerCloseModal:r,formName:t}=e;const n=(0,i.jL)(),{t:s}=(0,o.B)();return(0,R.jsx)(c.l1,{initialValues:N,validationSchema:F,onSubmit:async e=>{try{await n((0,m.ec)({currentPassword:e.currentPassword,newPassword:e.newPassword})).unwrap(),a.oR.success(s("Forms.account.changePasswordSuccess")),r()}catch(t){a.oR.error(`${s("Forms.account.changePasswordFailed")}: ${t instanceof Error?t.message:String(t)}`)}},children:e=>{let{errors:r,touched:n}=e;return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(P.R,{}),(0,R.jsxs)(b.q,{id:t,children:[(0,R.jsxs)(b.A0,{children:[(0,R.jsx)(b.JU,{children:s("Forms.account.currentPassword")}),(0,R.jsx)(b.pd,{name:"currentPassword",type:"password",placeholder:s("Forms.account.currentPasswordPlaceholder"),autoComplete:"current-password"}),n.currentPassword&&r.currentPassword&&(0,R.jsx)(b.yn,{children:r.currentPassword})]}),(0,R.jsxs)(b.A0,{children:[(0,R.jsx)(b.JU,{children:s("Forms.account.newPassword")}),(0,R.jsx)(b.pd,{name:"newPassword",type:"password",placeholder:s("Forms.account.newPasswordPlaceholder"),autoComplete:"new-password"}),n.newPassword&&r.newPassword&&(0,R.jsx)(b.yn,{children:r.newPassword})]}),(0,R.jsxs)(b.A0,{children:[(0,R.jsx)(b.JU,{children:s("Forms.account.confirmNewPassword")}),(0,R.jsx)(b.pd,{name:"confirmPassword",type:"password",placeholder:s("Forms.account.confirmNewPasswordPlaceholder"),autoComplete:"new-password"}),n.confirmPassword&&r.confirmPassword&&(0,R.jsx)(b.yn,{children:r.confirmPassword})]})]})]})}})},S=e=>{let{handlerCloseModal:r}=e;const{t:t}=(0,o.B)(),n="change-password-form";return(0,R.jsx)(A.A,{handlerCloseModal:r,children:(0,R.jsx)(C.A,{handlerCloseModal:r,title:t("Forms.account.changePassword"),formName:n,children:(0,R.jsx)(M,{handlerCloseModal:r,formName:n})})})},z=()=>{const e=(0,i.jL)(),r=(0,i.GV)(d.mB),t=(0,n.useRef)(null),[s,l]=(0,n.useState)(r.avatar||""),[x,A]=(0,n.useState)(!1),{t:C}=(0,o.B)(),P=(0,u.DP)(),F={fullName:r.name,email:r.email,avatarFile:null},N=()=>{A((e=>!e))};return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(c.l1,{initialValues:F,validationSchema:g,onSubmit:async r=>{try{const t=new FormData;t.append("name",r.fullName),r.avatarFile&&t.append("avatar",r.avatarFile),await e((0,m.TK)(t)).unwrap()}catch(t){a.oR.error(`${C("Forms.account.updateFailed")}: ${t instanceof Error?t.message:String(t)}`)}},enableReinitialize:!0,children:e=>{let{errors:r,touched:n,setFieldValue:o,isSubmitting:a}=e;return(0,R.jsxs)(b.q,{children:[(0,R.jsxs)(w,{children:[(0,R.jsxs)(f,{children:[(0,R.jsx)(y,{src:s}),(0,R.jsx)(v,{type:"button",onClick:()=>{var e;return null===(e=t.current)||void 0===e?void 0:e.click()},children:(0,R.jsx)(p.OiG,{size:12})}),(0,R.jsx)(j,{ref:t,type:"file",accept:"image/*",onChange:e=>{var r;const t=(null===(r=e.target.files)||void 0===r?void 0:r[0])||null;o("avatarFile",t),t&&l(URL.createObjectURL(t))}})]}),(0,R.jsx)(k,{type:"button",onClick:N,children:C("Forms.account.changePassword")})]}),(0,R.jsxs)(b.A0,{children:[(0,R.jsx)(b.JU,{children:C("Forms.account.fullName")}),(0,R.jsx)(b.pd,{name:"fullName",placeholder:C("Forms.account.fullNamePlaceholder"),$hasError:Boolean(n.fullName&&r.fullName)}),n.fullName&&r.fullName&&(0,R.jsx)(b.yn,{children:r.fullName})]}),(0,R.jsxs)(b.A0,{children:[(0,R.jsx)(b.JU,{children:C("Forms.account.email")}),(0,R.jsx)($,{name:"email",disabled:!0})]}),(0,R.jsx)(b.b7,{type:"submit",disabled:a,children:a?(0,R.jsx)(h.A,{size:"18px",color:P.buttonText}):C("Forms.account.saveChanges")})]})}}),x&&(0,R.jsx)(S,{handlerCloseModal:N})]})},B=x.Ik().shape({rating:x.ai().integer("Rating must be an integer").min(1,"Rating must be between 1 and 5").max(5,"Rating must be between 1 and 5").required("Rating is required"),text:x.Yj().min(5,"Review must be at least 5 characters").max(2e3,"Review must be at most 2000 characters").required("Text is required")}),T=e=>{let{rating:r,setFieldValue:t}=e;const n=(0,u.DP)();return(0,R.jsx)("div",{style:{display:"flex",gap:"4px"},children:Array.from({length:5},((e,o)=>(0,R.jsx)("span",{onClick:()=>t("rating",o+1),style:{cursor:"pointer"},children:o<r?(0,R.jsx)(p.gt3,{size:16,color:n.starColor}):(0,R.jsx)(p.wei,{size:16,color:n.starColorInactive})},o)))})},q=e=>{var r,t;let{handlerCloseModal:n,formName:s,review:d}=e;const u=(0,i.jL)(),{t:m}=(0,o.B)(),h={rating:null!==(r=null===d||void 0===d?void 0:d.rating)&&void 0!==r?r:0,text:null!==(t=null===d||void 0===d?void 0:d.text)&&void 0!==t?t:""};return(0,R.jsx)(b.mO,{children:(0,R.jsx)(c.l1,{initialValues:h,validationSchema:B,onSubmit:async e=>{try{d?(await u((0,l.Gm)({id:d._id,rating:e.rating,text:e.text})).unwrap(),a.oR.success(m("Forms.updateReview.success"))):(await u((0,l.bx)({rating:e.rating,text:e.text})).unwrap(),a.oR.success(m("Forms.createReview.success"))),n()}catch(r){const e=d?"Forms.updateReview.failed":"Forms.createReview.failed";a.oR.error(`${m(e)}: ${r.message||r}`)}},children:e=>{let{values:r,errors:t,touched:n,handleChange:o,handleBlur:a,setFieldValue:i}=e;return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(P.R,{}),(0,R.jsxs)(b.q,{id:s,children:[(0,R.jsxs)(b.A0,{children:[(0,R.jsx)(b.JU,{htmlFor:"rating",children:m("Forms.feedback.rating")}),(0,R.jsx)(T,{rating:r.rating,setFieldValue:i}),t.rating&&n.rating&&(0,R.jsx)(b.yn,{children:t.rating})]}),(0,R.jsxs)(b.A0,{children:[(0,R.jsx)(b.JU,{htmlFor:"text",children:m("Forms.feedback.text")}),(0,R.jsx)(b.TM,{id:"text",name:"text",value:r.text,onChange:o,onBlur:a,placeholder:m("Forms.feedback.placeholder"),$hasError:!(!t.text||!n.text)}),t.text&&n.text&&(0,R.jsx)(b.yn,{children:t.text})]})]})]})}})})},E=e=>{let{handlerCloseModal:r,review:t,deleteAction:n}=e;const{t:a}=(0,o.B)(),i="feedback-form";return(0,R.jsx)(A.A,{handlerCloseModal:r,children:(0,R.jsx)(C.A,{handlerCloseModal:r,title:a("Modals.feedback.title"),formName:i,deleteAction:t&&n,children:(0,R.jsx)(q,{review:t,handlerCloseModal:r,formName:i})})})},L=u.Ay.div`
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
`,V=u.Ay.h1`
  font-size: 36px;
  font-weight: 700;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
`,O=u.Ay.div`
  width: 100%;
  background-color: ${e=>{let{theme:r}=e;return r.background}};
  border-radius: 8px;
  padding: 24px;
  box-shadow: ${e=>{let{theme:r}=e;return r.shadow}};
`,U=u.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  padding: 12px;
  width: 100%;
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
`,G=()=>{const e=(0,i.jL)(),r=(0,i.GV)(s.ej),t=(0,i.GV)(d.mB),[c,u]=(0,n.useState)(null),[m,h]=(0,n.useState)(!1),{t:p}=(0,o.B)();(0,n.useEffect)((()=>{e((0,l.MB)())}),[e]),(0,n.useEffect)((()=>{if(r.length>0){const e=r.find((e=>e.user._id===t._id));u(e||null)}}),[r,t]);const x=()=>{h((e=>!e))};return(0,R.jsxs)(R.Fragment,{children:[(0,R.jsxs)(L,{children:[(0,R.jsx)(V,{children:p("Account.title")}),(0,R.jsx)(O,{children:(0,R.jsx)(z,{})}),(0,R.jsx)(U,{type:"button",onClick:x,children:p("Account.leaveFeedback")})]}),m&&(0,R.jsx)(E,{handlerCloseModal:x,deleteAction:async()=>{if(c)try{await e((0,l.Wr)(c._id)).unwrap(),a.oR.success(p("Forms.deleteReview.success")),x()}catch(r){a.oR.error(`${p("Forms.deleteReview.failed")}: ${r instanceof Error?r.message:String(r)}`)}},review:c})]})}},6119:(e,r,t)=>{t.d(r,{ej:()=>n});const n=e=>e.reviews.items},7606:(e,r,t)=>{t.d(r,{R:()=>i});t(9593);var n=t(5043),o=t(3892),a=t(5735);const i=()=>{const e=(0,n.useContext)(a.l),{isSubmitting:r}=(0,o.j7)();return(0,n.useEffect)((()=>{null===e||void 0===e||e.setModalSubmitting(r)}),[r,e]),null}},7711:(e,r,t)=>{t.d(r,{A0:()=>l,GX:()=>b,Gg:()=>h,JU:()=>d,K_:()=>m,N3:()=>f,TM:()=>j,ZD:()=>p,b7:()=>g,mO:()=>i,oX:()=>v,oi:()=>u,pd:()=>c,q:()=>s,ql:()=>x,sF:()=>w,yn:()=>y});var n=t(5464),o=t(3892),a=t(5180);const i=n.Ay.div`
  width: 100%;
`,s=(0,n.Ay)(o.lV)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,l=n.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,d=n.Ay.label`
  font-size: 14px;
  font-weight: 500;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
`,c=(0,n.Ay)(o.D0)`
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
`,u=n.Ay.div`
  position: relative;
`,m=n.Ay.button`
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
`,h=n.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
`,p=n.Ay.label`
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
`,x=(0,n.Ay)(a.N_)`
  font-size: 14px;
  color: ${e=>{let{theme:r}=e;return r.primary}};
  transition: color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.primaryHover}};
  }
`,g=n.Ay.button`
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
`,b=n.Ay.button`
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
`,w=n.Ay.button`
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
`,f=n.Ay.button`
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
`,y=n.Ay.p`
  color: #e74a3b;
  font-size: 12px;
  margin-top: -4px;
`,v=(0,n.Ay)(a.N_)`
  font-size: 14px;
  color: ${e=>{let{theme:r}=e;return r.primary}};
  text-decoration: underline;
  transition: color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.primaryHover}};
  }
`,j=(0,n.Ay)(c).attrs({as:"textarea"})`
  resize: none;
  height: 150px;
  overflow-y: auto;
`},7784:(e,r,t)=>{t.d(r,{A:()=>k});var n,o,a=t(5043),i=t(4961),s=t(5464),l=t(2246),d=t(5735),c=t(7711);function u(){return u=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)({}).hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},u.apply(null,arguments)}function m(e,r){let{title:t,titleId:i,...s}=e;return a.createElement("svg",u({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:r,"aria-labelledby":i},s),t?a.createElement("title",{id:i},t):null,n||(n=a.createElement("path",{d:"M18 6L6 18",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),o||(o=a.createElement("path",{d:"M6 6L18 18",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const h=a.forwardRef(m),p=(t.p,s.Ay.div`
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
`,g=s.Ay.button`
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
`,b=(0,s.Ay)(h)`
  stroke: ${e=>{let{theme:r}=e;return r.modalCloseIconColor}};
  width: 24px;
  height: 24px;
  transition: stroke ${e=>{let{theme:r}=e;return r.animation}},
    scale ${e=>{let{theme:r}=e;return r.animation}};
`,w=s.Ay.h2`
  font-size: 24px;
  font-weight: 700;
`,f=s.Ay.div`
  padding: 24px;
  overflow: auto;
`,y=s.Ay.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 24px;
  border-top: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,v=s.Ay.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: 768px) {
    width: 100%;
    & button {
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-left: auto;
  }
`;var j=t(579);const k=e=>{let{handlerCloseModal:r,title:t,formName:n,deleteAction:o,withActions:u=!0,children:m}=e;const[h,k]=(0,a.useState)(!1),$=(0,a.useMemo)((()=>({setModalSubmitting:k})),[]),{t:A}=(0,i.B)(),C=(0,s.DP)();return(0,j.jsx)(d.l.Provider,{value:$,children:(0,j.jsxs)(p,{children:[(0,j.jsxs)(x,{children:[(0,j.jsx)(w,{children:t}),(0,j.jsx)(g,{onClick:r,children:(0,j.jsx)(b,{})})]}),(0,j.jsx)(f,{children:m}),u&&(0,j.jsxs)(y,{children:[o&&(0,j.jsx)(c.N3,{type:"button",onClick:()=>o(),children:A("Modals.common.delete")}),(0,j.jsxs)(v,{children:[(0,j.jsx)(c.sF,{type:"button",onClick:r,children:A("Modals.common.cancel")}),(0,j.jsxs)(c.GX,{type:"submit",form:n,disabled:h,children:[(0,j.jsx)("span",{className:"btn-text",children:A("Modals.common.save")}),h&&(0,j.jsx)("div",{className:"btn-loader",children:(0,j.jsx)(l.A,{size:"16px",color:C.buttonText})})]})]})]})]})})}},9593:(e,r,t)=>{t.d(r,{A:()=>c});var n=t(5043),o=t(7950),a=t(5464);const i=a.Ay.div`
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
`;var l=t(579);const d=document.querySelector("#modal-root"),c=e=>{let{children:r,handlerCloseModal:t}=e;const a=(0,n.useCallback)((e=>{"Escape"===e.code&&t()}),[t]);(0,n.useEffect)((()=>(window.addEventListener("keydown",a),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",a),document.body.style.overflow="auto"})),[a]);return(0,o.createPortal)((0,l.jsx)(i,{onClick:e=>{e.currentTarget===e.target&&t()},children:(0,l.jsx)(s,{children:r})}),d)}}}]);
//# sourceMappingURL=767.70fb4ab2.chunk.js.map