"use strict";(self.webpackChunktaskero=self.webpackChunktaskero||[]).push([[806],{3633:(e,r,t)=>{t.d(r,{A0:()=>s,Gg:()=>m,JU:()=>d,K_:()=>h,ZD:()=>u,b7:()=>y,mO:()=>a,oX:()=>g,oi:()=>p,pd:()=>c,q:()=>l,ql:()=>x,yn:()=>b});var o=t(5464),n=t(3892),i=t(5180);const a=o.Ay.div`
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
`,m=o.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4px;
`,u=o.Ay.label`
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
`,y=o.Ay.button`
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
`,b=o.Ay.p`
  color: #e74a3b;
  font-size: 12px;
  margin-top: -4px;
`,g=(0,o.Ay)(i.N_)`
  font-size: 14px;
  color: ${e=>{let{theme:r}=e;return r.primary}};
  text-decoration: underline;
  transition: color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.primaryHover}};
  }
`},5554:(e,r,t)=>{t.d(r,{A:()=>f});var o=t(4961),n=t(3168),i=t(3875),a=t(279),l=t(6058),s=t(5464),d=t(5180);const c=s.Ay.div`
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
`,h=s.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,m=s.Ay.div`
  display: flex;
  border-bottom: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
`,u=(0,s.Ay)(d.k2)`
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
`,y=s.Ay.div`
  flex: 1;
  height: 1px;
  background-color: ${e=>{let{theme:r}=e;return r.borderColor}};
`,b=s.Ay.span`
  font-size: 14px;
  color: ${e=>{let{theme:r}=e;return r.secondaryText}};
`,g=s.Ay.button`
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
`;var j=t(579);const f=e=>{let{children:r}=e;const{t:t}=(0,o.B)();return(0,j.jsx)(c,{children:(0,j.jsxs)(p,{children:[(0,j.jsxs)(h,{children:[(0,j.jsx)(n.A,{}),(0,j.jsxs)("div",{style:{display:"flex",gap:"8px"},children:[(0,j.jsx)(i.A,{}),(0,j.jsx)(a.A,{})]})]}),(0,j.jsxs)(m,{children:[(0,j.jsx)(u,{to:"/login",children:t("Auth.login")}),(0,j.jsx)(u,{to:"/register",children:t("Auth.register")})]}),r,(0,j.jsxs)(x,{children:[(0,j.jsx)(y,{}),(0,j.jsx)(b,{children:t("Auth.orWith")}),(0,j.jsx)(y,{})]}),(0,j.jsxs)(g,{type:"button",children:[(0,j.jsx)(l.F4b,{size:20}),t("Auth.continueWithGoogle")]})]})})}},6806:(e,r,t)=>{t.r(r),t.d(r,{default:()=>g});var o=t(5554),n=t(3892),i=t(5043),a=t(5180),l=t(4262),s=t(9867),d=t(2115),c=t(5200),p=t(899);const h=p.Ik().shape({name:p.Yj().required("Full name is required"),email:p.Yj().email("Invalid email").required("Email is required"),password:p.Yj().min(6,"Minimum 6 characters").required("Password is required"),terms:p.zM().oneOf([!0],"You must accept the terms")});var m=t(4961),u=t(3633),x=t(579);const y={name:"",email:"",password:"",terms:!1},b=()=>{const e=(0,s.jL)(),[r,t]=(0,i.useState)(!1),o=(0,a.Zp)(),{t:p}=(0,m.B)();return(0,x.jsx)(u.mO,{children:(0,x.jsx)(n.l1,{initialValues:y,validationSchema:h,onSubmit:async(r,t)=>{try{const{terms:n,...i}=r;await e((0,l.DY)(i)).unwrap(),t.resetForm(),o("/",{replace:!0})}catch{d.oR.error("Registration failed. Please try again.")}},children:e=>{let{values:o,handleChange:n,handleSubmit:i,touched:a,errors:l}=e;return(0,x.jsxs)(u.q,{onSubmit:i,children:[(0,x.jsxs)(u.A0,{children:[(0,x.jsx)(u.JU,{htmlFor:"name",children:p("Auth.fullName")}),(0,x.jsx)(u.pd,{id:"name",name:"name",type:"text",placeholder:p("Auth.fullNamePlaceholder"),$hasError:a.name&&!!l.name}),a.name&&l.name&&(0,x.jsx)(u.yn,{children:l.name})]}),(0,x.jsxs)(u.A0,{children:[(0,x.jsx)(u.JU,{htmlFor:"email",children:p("Auth.email")}),(0,x.jsx)(u.pd,{id:"email",name:"email",type:"email",placeholder:p("Auth.emailPlaceholder"),$hasError:a.email&&!!l.email}),a.email&&l.email&&(0,x.jsx)(u.yn,{children:l.email})]}),(0,x.jsxs)(u.A0,{children:[(0,x.jsx)(u.JU,{htmlFor:"password",children:p("Auth.password")}),(0,x.jsxs)(u.oi,{children:[(0,x.jsx)(u.pd,{id:"password",name:"password",type:r?"text":"password",placeholder:p("Auth.passwordPlaceholder"),$hasError:a.password&&!!l.password}),(0,x.jsx)(u.K_,{type:"button",onClick:()=>t((e=>!e)),children:r?(0,x.jsx)(c._NO,{size:18}):(0,x.jsx)(c.Vap,{size:18})})]}),a.password&&l.password&&(0,x.jsx)(u.yn,{children:l.password})]}),(0,x.jsxs)(u.A0,{children:[(0,x.jsx)(u.Gg,{children:(0,x.jsxs)(u.ZD,{children:[(0,x.jsx)("input",{type:"checkbox",name:"terms",checked:o.terms,onChange:n}),(0,x.jsx)("span",{id:"custom-checkbox"}),(0,x.jsxs)("p",{children:[p("Auth.agree")," ",(0,x.jsx)(u.oX,{to:"/terms",children:p("Auth.terms")})]})]})}),a.terms&&l.terms&&(0,x.jsx)(u.yn,{children:l.terms})]}),(0,x.jsx)(u.b7,{type:"submit",children:p("Auth.createAccount")})]})}})})},g=()=>(0,x.jsx)(o.A,{children:(0,x.jsx)(b,{})})}}]);
//# sourceMappingURL=806.c83ec235.chunk.js.map