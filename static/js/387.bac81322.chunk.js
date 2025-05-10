"use strict";(self.webpackChunktaskero=self.webpackChunktaskero||[]).push([[387],{279:(e,r,t)=>{t.d(r,{A:()=>s});var o=t(5200),n=t(9867),i=t(5464);const a=i.Ay.button`
  background-color: ${e=>{let{theme:r}=e;return r.backgroundSecondary}};
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;var l=t(579);const s=()=>{const e=(0,n.GV)((e=>e.theme.current)),r=(0,n.H1)(),t=(0,i.DP)();return(0,l.jsx)(a,{onClick:r,children:"light"===e?(0,l.jsx)(o.Wh$,{size:20,color:t.primaryText}):(0,l.jsx)(o.hkc,{size:20,color:t.primaryText})})}},3168:(e,r,t)=>{t.d(r,{A:()=>c});var o=t(5180),n=t(5464);const i=(0,n.Ay)(o.N_)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
`,a=n.Ay.img`
  width: 40px;
  height: 40px;
`,l=n.Ay.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>{let{theme:r}=e;return r.primary}};
  text-decoration: none;
`,s=t.p+"static/media/logo.f9f20538470db5fa4750.png";var d=t(579);const c=()=>(0,d.jsxs)(i,{to:"/",children:[(0,d.jsx)(a,{src:s,alt:"Taskero Logo"}),(0,d.jsx)(l,{children:"Taskero"})]})},3633:(e,r,t)=>{t.d(r,{A0:()=>s,Gg:()=>h,JU:()=>d,K_:()=>u,ZD:()=>x,b7:()=>b,mO:()=>a,oX:()=>y,oi:()=>p,pd:()=>c,q:()=>l,ql:()=>m,yn:()=>g});var o=t(5464),n=t(3892),i=t(5180);const a=o.Ay.div`
  width: 100%;
`,l=(0,o.Ay)(n.lV)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,s=o.Ay.div`
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
`,p=o.Ay.div`
  position: relative;
`,u=o.Ay.button`
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
`,h=o.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
`,x=o.Ay.label`
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
`,m=(0,o.Ay)(i.N_)`
  font-size: 14px;
  color: ${e=>{let{theme:r}=e;return r.primary}};
  transition: color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.primaryHover}};
  }
`,b=o.Ay.button`
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
`,g=o.Ay.p`
  color: #e74a3b;
  font-size: 12px;
  margin-top: -4px;
`,y=(0,o.Ay)(i.N_)`
  font-size: 14px;
  color: ${e=>{let{theme:r}=e;return r.primary}};
  text-decoration: underline;
  transition: color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.primaryHover}};
  }
`},3875:(e,r,t)=>{t.d(r,{A:()=>u});var o=t(5043),n=t(4961),i=t(9867),a=t(5464);const l=a.Ay.div`
  position: relative;
`,s=a.Ay.button`
  border: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
  background-color: ${e=>{let{theme:r}=e;return r.background}};
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
  font-weight: 600;
  font-size: 14px;
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;
  min-width: 44px;
  text-align: center;
`,d=a.Ay.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 2px;
  border: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
  background-color: ${e=>{let{theme:r}=e;return r.cardBackground}};
  border-radius: 8px;
  box-shadow: ${e=>{let{theme:r}=e;return r.shadow}};
  z-index: 10;
  overflow: hidden;
`,c=a.Ay.button`
  width: 100%;
  padding: 8px 12px;
  background: none;
  border: none;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
  cursor: pointer;

  &:hover {
    background-color: ${e=>{let{theme:r}=e;return r.backgroundSecondary}};
  }
`;var p=t(579);const u=()=>{const{i18n:e}=(0,n.B)(),r=(0,i.Ym)(),[t,a]=(0,o.useState)(!1),u=(0,o.useRef)(null),h=e.language.toUpperCase(),x=e=>{r(e),a(!1)};return(0,o.useEffect)((()=>{const e=e=>{u.current&&!u.current.contains(e.target)&&a(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)}),[]),(0,p.jsxs)(l,{ref:u,children:[(0,p.jsx)(s,{onClick:()=>a((e=>!e)),children:h}),t&&(0,p.jsxs)(d,{children:[(0,p.jsx)(c,{onClick:()=>x("en"),children:"EN"}),(0,p.jsx)(c,{onClick:()=>x("uk"),children:"UK"})]})]})}},5554:(e,r,t)=>{t.d(r,{A:()=>j});var o=t(4961),n=t(3168),i=t(3875),a=t(279),l=t(6058),s=t(5464),d=t(5180);const c=s.Ay.div`
  min-height: 100vh;
  background-color: ${e=>{let{theme:r}=e;return r.backgroundSecondary}};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`,p=s.Ay.div`
  background-color: ${e=>{let{theme:r}=e;return r.background}};
  border-radius: 8px;
  padding: 32px;
  width: 100%;
  max-width: 440px;
  box-shadow: ${e=>{let{theme:r}=e;return r.shadow}};
  display: flex;
  flex-direction: column;
  gap: 24px;
`,u=s.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,h=s.Ay.div`
  display: flex;
  border-bottom: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
`,x=(0,s.Ay)(d.k2)`
  font-weight: 600;
  font-size: 16px;
  padding: 8px 16px;
  color: ${e=>{let{theme:r}=e;return r.secondaryText}};
  text-decoration: none;
  position: relative;
  transition: color ${e=>{let{theme:r}=e;return r.animation}};

  &.active {
    color: ${e=>{let{theme:r}=e;return r.primary}};

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -1px;
      width: 100%;
      height: 2px;
      background-color: ${e=>{let{theme:r}=e;return r.primary}};
    }
  }
`,m=s.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,b=s.Ay.div`
  flex: 1;
  height: 1px;
  background-color: ${e=>{let{theme:r}=e;return r.borderColor}};
`,g=s.Ay.span`
  font-size: 14px;
  color: ${e=>{let{theme:r}=e;return r.secondaryText}};
`,y=s.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 12px;
  border: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
  background-color: transparent;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
  cursor: pointer;
  transition: background-color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    background-color: ${e=>{let{theme:r}=e;return r.backgroundSecondary}};
  }
`;var f=t(579);const j=e=>{let{children:r}=e;const{t:t}=(0,o.B)();return(0,f.jsx)(c,{children:(0,f.jsxs)(p,{children:[(0,f.jsxs)(u,{children:[(0,f.jsx)(n.A,{}),(0,f.jsxs)("div",{style:{display:"flex",gap:"8px"},children:[(0,f.jsx)(i.A,{}),(0,f.jsx)(a.A,{})]})]}),(0,f.jsxs)(h,{children:[(0,f.jsx)(x,{to:"/login",children:t("Auth.login")}),(0,f.jsx)(x,{to:"/register",children:t("Auth.register")})]}),r,(0,f.jsxs)(m,{children:[(0,f.jsx)(b,{}),(0,f.jsx)(g,{children:t("Auth.orWith")}),(0,f.jsx)(b,{})]}),(0,f.jsxs)(y,{type:"button",children:[(0,f.jsx)(l.F4b,{size:20}),t("Auth.continueWithGoogle")]})]})})}},9768:(e,r,t)=>{t.r(r),t.d(r,{default:()=>g});var o=t(5554),n=t(3892),i=t(5043),a=t(899);const l=a.Ik().shape({email:a.Yj().email("Invalid email").required("Required"),password:a.Yj().min(6,"Minimum 6 characters").matches(/[a-z]/,"Must include lowercase").matches(/[A-Z]/,"Must include uppercase").matches(/[0-9]/,"Must include number").required("Required")});var s=t(9867),d=t(4262),c=t(2115),p=t(4961),u=t(5200),h=t(3633),x=t(579);const m={email:"",password:"",remember:!0},b=()=>{const e=(0,s.jL)(),[r,t]=(0,i.useState)(!1),{t:o}=(0,p.B)();return(0,x.jsx)(h.mO,{children:(0,x.jsx)(n.l1,{initialValues:m,onSubmit:async(r,t)=>{try{await e((0,d.Lx)(r)).unwrap(),t.resetForm()}catch{c.oR.error("Invalid email or password")}},validationSchema:l,children:e=>{let{values:n,handleChange:i,handleSubmit:a,touched:l,errors:s}=e;return(0,x.jsxs)(h.q,{onSubmit:a,children:[(0,x.jsxs)(h.A0,{children:[(0,x.jsx)(h.JU,{htmlFor:"email",children:o("Auth.email")}),(0,x.jsx)(h.pd,{id:"email",name:"email",type:"email",placeholder:o("Auth.emailPlaceholder"),$hasError:l.email&&!!s.email}),l.email&&s.email&&(0,x.jsx)(h.yn,{children:s.email})]}),(0,x.jsxs)(h.A0,{children:[(0,x.jsx)(h.JU,{htmlFor:"password",children:o("Auth.password")}),(0,x.jsxs)(h.oi,{children:[(0,x.jsx)(h.pd,{id:"password",name:"password",type:r?"text":"password",placeholder:o("Auth.passwordPlaceholder"),$hasError:l.password&&!!s.password}),(0,x.jsx)(h.K_,{onClick:()=>t((e=>!e)),type:"button",children:r?(0,x.jsx)(u._NO,{size:18}):(0,x.jsx)(u.Vap,{size:18})})]}),l.password&&s.password&&(0,x.jsx)(h.yn,{children:s.password})]}),(0,x.jsxs)(h.Gg,{children:[(0,x.jsxs)(h.ZD,{children:[(0,x.jsx)("input",{type:"checkbox",name:"remember",checked:n.remember,onChange:i}),(0,x.jsx)("span",{}),o("Auth.rememberMe")]}),(0,x.jsx)(h.ql,{to:"/password",children:o("Auth.forgotPassword")})]}),(0,x.jsx)(h.b7,{type:"submit",children:o("Auth.signin")})]})}})})},g=()=>(0,x.jsx)(o.A,{children:(0,x.jsx)(b,{})})}}]);
//# sourceMappingURL=387.bac81322.chunk.js.map