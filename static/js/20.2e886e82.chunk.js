"use strict";(self.webpackChunktaskero=self.webpackChunktaskero||[]).push([[20],{20:(e,r,t)=>{t.r(r),t.d(r,{default:()=>y});var o=t(2843),n=t(3892),i=t(5043),a=t(899);const l=a.Ik().shape({email:a.Yj().email("Invalid email").required("Required"),password:a.Yj().min(6,"Minimum 6 characters").matches(/[a-z]/,"Must include lowercase").matches(/[A-Z]/,"Must include uppercase").matches(/[0-9]/,"Must include number").required("Required")});var s=t(9867),d=t(4262),c=t(2115),p=t(4961),u=t(5200),h=t(7711),m=t(579);const x={email:"",password:"",remember:!0},b=()=>{const e=(0,s.jL)(),[r,t]=(0,i.useState)(!1),{t:o}=(0,p.B)();return(0,m.jsx)(h.mO,{children:(0,m.jsx)(n.l1,{initialValues:x,onSubmit:async(r,t)=>{try{await e((0,d.Lx)(r)).unwrap(),t.resetForm()}catch{c.oR.error("Invalid email or password")}},validationSchema:l,children:e=>{let{values:n,handleChange:i,handleSubmit:a,touched:l,errors:s}=e;return(0,m.jsxs)(h.q,{onSubmit:a,children:[(0,m.jsxs)(h.A0,{children:[(0,m.jsx)(h.JU,{htmlFor:"email",children:o("Auth.email")}),(0,m.jsx)(h.pd,{id:"email",name:"email",type:"email",placeholder:o("Auth.emailPlaceholder"),$hasError:l.email&&!!s.email}),l.email&&s.email&&(0,m.jsx)(h.yn,{children:s.email})]}),(0,m.jsxs)(h.A0,{children:[(0,m.jsx)(h.JU,{htmlFor:"password",children:o("Auth.password")}),(0,m.jsxs)(h.oi,{children:[(0,m.jsx)(h.pd,{id:"password",name:"password",type:r?"text":"password",placeholder:o("Auth.passwordPlaceholder"),$hasError:l.password&&!!s.password}),(0,m.jsx)(h.K_,{onClick:()=>t((e=>!e)),type:"button",children:r?(0,m.jsx)(u._NO,{size:18}):(0,m.jsx)(u.Vap,{size:18})})]}),l.password&&s.password&&(0,m.jsx)(h.yn,{children:s.password})]}),(0,m.jsx)(h.Gg,{children:(0,m.jsxs)(h.ZD,{children:[(0,m.jsx)("input",{type:"checkbox",name:"remember",checked:n.remember,onChange:i}),(0,m.jsx)("span",{}),o("Auth.rememberMe")]})}),(0,m.jsx)(h.b7,{type:"submit",children:o("Auth.signin")})]})}})})},y=()=>(0,m.jsx)(o.A,{children:(0,m.jsx)(b,{})})},2843:(e,r,t)=>{t.d(r,{A:()=>A});var o=t(4961),n=t(3168),i=t(3875),a=t(279),l=t(5464),s=t(5180);const d=l.Ay.div`
  min-height: 100vh;
  background-color: ${e=>{let{theme:r}=e;return r.backgroundSecondary}};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`,c=l.Ay.div`
  background-color: ${e=>{let{theme:r}=e;return r.background}};
  border-radius: 8px;
  padding: 32px;
  width: 100%;
  max-width: 440px;
  box-shadow: ${e=>{let{theme:r}=e;return r.shadow}};
  display: flex;
  flex-direction: column;
  gap: 24px;
`,p=l.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,u=l.Ay.div`
  display: flex;
  border-bottom: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
`,h=(0,l.Ay)(s.k2)`
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
`,m=l.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,x=l.Ay.div`
  flex: 1;
  height: 1px;
  background-color: ${e=>{let{theme:r}=e;return r.borderColor}};
`,b=l.Ay.span`
  font-size: 14px;
  color: ${e=>{let{theme:r}=e;return r.secondaryText}};
`;var y=t(5447),g=t(2115),f=t(9867),$=t(4262),j=t(579);const w=()=>{const e=(0,f.jL)();return(0,j.jsx)(y.j,{onSuccess:async r=>{try{if(!r.credential)throw new Error("No credential returned");await e((0,$.p3)({idToken:r.credential})).unwrap(),g.oR.success("Logged in with Google")}catch(t){g.oR.error(t.message||"Google login failed")}},onError:()=>{g.oR.error("Google login was cancelled")}})},A=e=>{let{children:r}=e;const{t:t}=(0,o.B)();return(0,j.jsx)(d,{children:(0,j.jsxs)(c,{children:[(0,j.jsxs)(p,{children:[(0,j.jsx)(n.A,{}),(0,j.jsxs)("div",{style:{display:"flex",gap:"8px"},children:[(0,j.jsx)(i.A,{}),(0,j.jsx)(a.A,{})]})]}),(0,j.jsxs)(u,{children:[(0,j.jsx)(h,{to:"/login",children:t("Auth.login")}),(0,j.jsx)(h,{to:"/register",children:t("Auth.register")})]}),r,(0,j.jsxs)(m,{children:[(0,j.jsx)(x,{}),(0,j.jsx)(b,{children:t("Auth.orWith")}),(0,j.jsx)(x,{})]}),(0,j.jsx)(w,{})]})})}},7711:(e,r,t)=>{t.d(r,{A0:()=>s,GX:()=>b,Gg:()=>h,JU:()=>d,K_:()=>u,N3:()=>g,TM:()=>j,ZD:()=>m,b7:()=>x,mO:()=>a,oX:()=>$,oi:()=>p,pd:()=>c,q:()=>l,sF:()=>y,yn:()=>f});var o=t(5464),n=t(3892),i=t(5180);const a=o.Ay.div`
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
`,x=((0,o.Ay)(i.N_)`
  font-size: 14px;
  color: ${e=>{let{theme:r}=e;return r.primary}};
  transition: color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.primaryHover}};
  }
`,o.Ay.button`
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
`),b=o.Ay.button`
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
`,g=o.Ay.button`
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
`,$=(0,o.Ay)(i.N_)`
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
`}}]);
//# sourceMappingURL=20.2e886e82.chunk.js.map