"use strict";(self.webpackChunktaskero=self.webpackChunktaskero||[]).push([[20],{20:(e,r,t)=>{t.r(r),t.d(r,{default:()=>g});var o=t(5554),n=t(3892),i=t(5043),a=t(899);const l=a.Ik().shape({email:a.Yj().email("Invalid email").required("Required"),password:a.Yj().min(6,"Minimum 6 characters").matches(/[a-z]/,"Must include lowercase").matches(/[A-Z]/,"Must include uppercase").matches(/[0-9]/,"Must include number").required("Required")});var s=t(9867),d=t(4262),c=t(2115),p=t(4961),u=t(5200),h=t(7711),m=t(579);const x={email:"",password:"",remember:!0},b=()=>{const e=(0,s.jL)(),[r,t]=(0,i.useState)(!1),{t:o}=(0,p.B)();return(0,m.jsx)(h.mO,{children:(0,m.jsx)(n.l1,{initialValues:x,onSubmit:async(r,t)=>{try{await e((0,d.Lx)(r)).unwrap(),t.resetForm()}catch{c.oR.error("Invalid email or password")}},validationSchema:l,children:e=>{let{values:n,handleChange:i,handleSubmit:a,touched:l,errors:s}=e;return(0,m.jsxs)(h.q,{onSubmit:a,children:[(0,m.jsxs)(h.A0,{children:[(0,m.jsx)(h.JU,{htmlFor:"email",children:o("Auth.email")}),(0,m.jsx)(h.pd,{id:"email",name:"email",type:"email",placeholder:o("Auth.emailPlaceholder"),$hasError:l.email&&!!s.email}),l.email&&s.email&&(0,m.jsx)(h.yn,{children:s.email})]}),(0,m.jsxs)(h.A0,{children:[(0,m.jsx)(h.JU,{htmlFor:"password",children:o("Auth.password")}),(0,m.jsxs)(h.oi,{children:[(0,m.jsx)(h.pd,{id:"password",name:"password",type:r?"text":"password",placeholder:o("Auth.passwordPlaceholder"),$hasError:l.password&&!!s.password}),(0,m.jsx)(h.K_,{onClick:()=>t((e=>!e)),type:"button",children:r?(0,m.jsx)(u._NO,{size:18}):(0,m.jsx)(u.Vap,{size:18})})]}),l.password&&s.password&&(0,m.jsx)(h.yn,{children:s.password})]}),(0,m.jsxs)(h.Gg,{children:[(0,m.jsxs)(h.ZD,{children:[(0,m.jsx)("input",{type:"checkbox",name:"remember",checked:n.remember,onChange:i}),(0,m.jsx)("span",{}),o("Auth.rememberMe")]}),(0,m.jsx)(h.ql,{to:"/password",children:o("Auth.forgotPassword")})]}),(0,m.jsx)(h.b7,{type:"submit",children:o("Auth.signin")})]})}})})},g=()=>(0,m.jsx)(o.A,{children:(0,m.jsx)(b,{})})},5554:(e,r,t)=>{t.d(r,{A:()=>f});var o=t(4961),n=t(3168),i=t(3875),a=t(279),l=t(6058),s=t(5464),d=t(5180);const c=s.Ay.div`
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
`,m=(0,s.Ay)(d.k2)`
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
`,x=s.Ay.div`
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
`;var $=t(579);const f=e=>{let{children:r}=e;const{t:t}=(0,o.B)();return(0,$.jsx)(c,{children:(0,$.jsxs)(p,{children:[(0,$.jsxs)(u,{children:[(0,$.jsx)(n.A,{}),(0,$.jsxs)("div",{style:{display:"flex",gap:"8px"},children:[(0,$.jsx)(i.A,{}),(0,$.jsx)(a.A,{})]})]}),(0,$.jsxs)(h,{children:[(0,$.jsx)(m,{to:"/login",children:t("Auth.login")}),(0,$.jsx)(m,{to:"/register",children:t("Auth.register")})]}),r,(0,$.jsxs)(x,{children:[(0,$.jsx)(b,{}),(0,$.jsx)(g,{children:t("Auth.orWith")}),(0,$.jsx)(b,{})]}),(0,$.jsxs)(y,{type:"button",children:[(0,$.jsx)(l.F4b,{size:20}),t("Auth.continueWithGoogle")]})]})})}},7711:(e,r,t)=>{t.d(r,{A0:()=>s,GX:()=>g,Gg:()=>h,JU:()=>d,K_:()=>u,TM:()=>j,ZD:()=>m,b7:()=>b,mO:()=>a,oX:()=>f,oi:()=>p,pd:()=>c,q:()=>l,ql:()=>x,sF:()=>y,yn:()=>$});var o=t(5464),n=t(3892),i=t(5180);const a=o.Ay.div`
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
`,m=o.Ay.label`
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
`,g=o.Ay.button`
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
`,y=o.Ay.button`
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
`,$=(o.Ay.button`
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
`,o.Ay.p`
  color: #e74a3b;
  font-size: 12px;
  margin-top: -4px;
`),f=(0,o.Ay)(i.N_)`
  font-size: 14px;
  color: ${e=>{let{theme:r}=e;return r.primary}};
  text-decoration: underline;
  transition: color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.primaryHover}};
  }
`,j=(0,o.Ay)(c).attrs({as:"textarea"})`
  resize: vertical;
  min-height: 100px;
`}}]);
//# sourceMappingURL=20.a529f04b.chunk.js.map