"use strict";(self.webpackChunktaskero=self.webpackChunktaskero||[]).push([[680],{2680:(e,r,t)=>{t.r(r),t.d(r,{default:()=>b});var o=t(2843),n=t(3892),i=t(5043),a=t(5180),l=t(4262),s=t(9867),d=t(2115),c=t(5200),p=t(899);const h=p.Ik().shape({name:p.Yj().required("Full name is required"),email:p.Yj().email("Invalid email").required("Email is required"),password:p.Yj().min(6,"Minimum 6 characters").required("Password is required"),terms:p.zM().oneOf([!0],"You must accept the terms")});var u=t(4961),m=t(7711),x=t(579);const y={name:"",email:"",password:"",terms:!1},g=()=>{const e=(0,s.jL)(),[r,t]=(0,i.useState)(!1),o=(0,a.Zp)(),{t:p}=(0,u.B)();return(0,x.jsx)(m.mO,{children:(0,x.jsx)(n.l1,{initialValues:y,validationSchema:h,onSubmit:async(r,t)=>{try{const{terms:n,...i}=r;await e((0,l.DY)(i)).unwrap(),t.resetForm(),o("/",{replace:!0})}catch{d.oR.error("Registration failed. Please try again.")}},children:e=>{let{values:o,handleChange:n,handleSubmit:i,touched:a,errors:l}=e;return(0,x.jsxs)(m.q,{onSubmit:i,children:[(0,x.jsxs)(m.A0,{children:[(0,x.jsx)(m.JU,{htmlFor:"name",children:p("Auth.fullName")}),(0,x.jsx)(m.pd,{id:"name",name:"name",type:"text",placeholder:p("Auth.fullNamePlaceholder"),$hasError:a.name&&!!l.name}),a.name&&l.name&&(0,x.jsx)(m.yn,{children:l.name})]}),(0,x.jsxs)(m.A0,{children:[(0,x.jsx)(m.JU,{htmlFor:"email",children:p("Auth.email")}),(0,x.jsx)(m.pd,{id:"email",name:"email",type:"email",placeholder:p("Auth.emailPlaceholder"),$hasError:a.email&&!!l.email}),a.email&&l.email&&(0,x.jsx)(m.yn,{children:l.email})]}),(0,x.jsxs)(m.A0,{children:[(0,x.jsx)(m.JU,{htmlFor:"password",children:p("Auth.password")}),(0,x.jsxs)(m.oi,{children:[(0,x.jsx)(m.pd,{id:"password",name:"password",type:r?"text":"password",placeholder:p("Auth.passwordPlaceholder"),$hasError:a.password&&!!l.password}),(0,x.jsx)(m.K_,{type:"button",onClick:()=>t((e=>!e)),children:r?(0,x.jsx)(c._NO,{size:18}):(0,x.jsx)(c.Vap,{size:18})})]}),a.password&&l.password&&(0,x.jsx)(m.yn,{children:l.password})]}),(0,x.jsxs)(m.A0,{children:[(0,x.jsx)(m.Gg,{children:(0,x.jsxs)(m.ZD,{children:[(0,x.jsx)("input",{type:"checkbox",name:"terms",checked:o.terms,onChange:n}),(0,x.jsx)("span",{id:"custom-checkbox"}),(0,x.jsxs)("p",{children:[p("Auth.agree")," ",(0,x.jsx)(m.oX,{to:"/terms",children:p("Auth.terms")})]})]})}),a.terms&&l.terms&&(0,x.jsx)(m.yn,{children:l.terms})]}),(0,x.jsx)(m.b7,{type:"submit",children:p("Auth.createAccount")})]})}})})},b=()=>(0,x.jsx)(o.A,{children:(0,x.jsx)(g,{})})},2843:(e,r,t)=>{t.d(r,{A:()=>w});var o=t(4961),n=t(3168),i=t(3875),a=t(279),l=t(5464),s=t(5180);const d=l.Ay.div`
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
`,h=l.Ay.div`
  display: flex;
  border-bottom: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
`,u=(0,l.Ay)(s.k2)`
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
`,y=l.Ay.span`
  font-size: 14px;
  color: ${e=>{let{theme:r}=e;return r.secondaryText}};
`;var g=t(5447),b=t(2115),f=t(9867),j=t(4262),$=t(579);const A=()=>{const e=(0,f.jL)();return(0,$.jsx)(g.j,{onSuccess:async r=>{try{if(!r.credential)throw new Error("No credential returned");await e((0,j.p3)({idToken:r.credential})).unwrap(),b.oR.success("Logged in with Google")}catch(t){b.oR.error(t.message||"Google login failed")}},onError:()=>{b.oR.error("Google login was cancelled")}})},w=e=>{let{children:r}=e;const{t:t}=(0,o.B)();return(0,$.jsx)(d,{children:(0,$.jsxs)(c,{children:[(0,$.jsxs)(p,{children:[(0,$.jsx)(n.A,{}),(0,$.jsxs)("div",{style:{display:"flex",gap:"8px"},children:[(0,$.jsx)(i.A,{}),(0,$.jsx)(a.A,{})]})]}),(0,$.jsxs)(h,{children:[(0,$.jsx)(u,{to:"/login",children:t("Auth.login")}),(0,$.jsx)(u,{to:"/register",children:t("Auth.register")})]}),r,(0,$.jsxs)(m,{children:[(0,$.jsx)(x,{}),(0,$.jsx)(y,{children:t("Auth.orWith")}),(0,$.jsx)(x,{})]}),(0,$.jsx)(A,{})]})})}},7711:(e,r,t)=>{t.d(r,{A0:()=>s,GX:()=>y,Gg:()=>u,JU:()=>d,K_:()=>h,N3:()=>b,TM:()=>$,ZD:()=>m,b7:()=>x,mO:()=>a,oX:()=>j,oi:()=>p,pd:()=>c,q:()=>l,sF:()=>g,yn:()=>f});var o=t(5464),n=t(3892),i=t(5180);const a=o.Ay.div`
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
`,h=o.Ay.button`
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
`),y=o.Ay.button`
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
`,g=o.Ay.button`
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
`,b=o.Ay.button`
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
`,j=(0,o.Ay)(i.N_)`
  font-size: 14px;
  color: ${e=>{let{theme:r}=e;return r.primary}};
  text-decoration: underline;
  transition: color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.primaryHover}};
  }
`,$=(0,o.Ay)(c).attrs({as:"textarea"})`
  resize: none;
  height: 150px;
  overflow-y: auto;
`}}]);
//# sourceMappingURL=680.fec3edf2.chunk.js.map