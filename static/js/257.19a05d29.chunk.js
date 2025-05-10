"use strict";(self.webpackChunktaskero=self.webpackChunktaskero||[]).push([[257],{279:(e,r,t)=>{t.d(r,{A:()=>s});var o=t(5200),n=t(9867),i=t(5464);const a=i.Ay.button`
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
`,s=t.p+"static/media/logo.f9f20538470db5fa4750.png";var d=t(579);const c=()=>(0,d.jsxs)(i,{to:"/",children:[(0,d.jsx)(a,{src:s,alt:"Taskero Logo"}),(0,d.jsx)(l,{children:"Taskero"})]})},3633:(e,r,t)=>{t.d(r,{A0:()=>s,Gg:()=>u,JU:()=>d,K_:()=>h,ZD:()=>x,b7:()=>y,mO:()=>a,oX:()=>b,oi:()=>p,pd:()=>c,q:()=>l,ql:()=>m,yn:()=>g});var o=t(5464),n=t(3892),i=t(5180);const a=o.Ay.div`
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
`,g=o.Ay.p`
  color: #e74a3b;
  font-size: 12px;
  margin-top: -4px;
`,b=(0,o.Ay)(i.N_)`
  font-size: 14px;
  color: ${e=>{let{theme:r}=e;return r.primary}};
  text-decoration: underline;
  transition: color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.primaryHover}};
  }
`},3875:(e,r,t)=>{t.d(r,{A:()=>h});var o=t(5043),n=t(4961),i=t(9867),a=t(5464);const l=a.Ay.div`
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
`;var p=t(579);const h=()=>{const{i18n:e}=(0,n.B)(),r=(0,i.Ym)(),[t,a]=(0,o.useState)(!1),h=(0,o.useRef)(null),u=e.language.toUpperCase(),x=e=>{r(e),a(!1)};return(0,o.useEffect)((()=>{const e=e=>{h.current&&!h.current.contains(e.target)&&a(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)}),[]),(0,p.jsxs)(l,{ref:h,children:[(0,p.jsx)(s,{onClick:()=>a((e=>!e)),children:u}),t&&(0,p.jsxs)(d,{children:[(0,p.jsx)(c,{onClick:()=>x("en"),children:"EN"}),(0,p.jsx)(c,{onClick:()=>x("uk"),children:"UK"})]})]})}},5554:(e,r,t)=>{t.d(r,{A:()=>j});var o=t(4961),n=t(3168),i=t(3875),a=t(279),l=t(6058),s=t(5464),d=t(5180);const c=s.Ay.div`
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
`,u=s.Ay.div`
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
`,y=s.Ay.div`
  flex: 1;
  height: 1px;
  background-color: ${e=>{let{theme:r}=e;return r.borderColor}};
`,g=s.Ay.span`
  font-size: 14px;
  color: ${e=>{let{theme:r}=e;return r.secondaryText}};
`,b=s.Ay.button`
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
`;var f=t(579);const j=e=>{let{children:r}=e;const{t:t}=(0,o.B)();return(0,f.jsx)(c,{children:(0,f.jsxs)(p,{children:[(0,f.jsxs)(h,{children:[(0,f.jsx)(n.A,{}),(0,f.jsxs)("div",{style:{display:"flex",gap:"8px"},children:[(0,f.jsx)(i.A,{}),(0,f.jsx)(a.A,{})]})]}),(0,f.jsxs)(u,{children:[(0,f.jsx)(x,{to:"/login",children:t("Auth.login")}),(0,f.jsx)(x,{to:"/register",children:t("Auth.register")})]}),r,(0,f.jsxs)(m,{children:[(0,f.jsx)(y,{}),(0,f.jsx)(g,{children:t("Auth.orWith")}),(0,f.jsx)(y,{})]}),(0,f.jsxs)(b,{type:"button",children:[(0,f.jsx)(l.F4b,{size:20}),t("Auth.continueWithGoogle")]})]})})}},6806:(e,r,t)=>{t.r(r),t.d(r,{default:()=>b});var o=t(5554),n=t(3892),i=t(5043),a=t(5180),l=t(4262),s=t(9867),d=t(2115),c=t(5200),p=t(899);const h=p.Ik().shape({name:p.Yj().required("Full name is required"),email:p.Yj().email("Invalid email").required("Email is required"),password:p.Yj().min(6,"Minimum 6 characters").required("Password is required"),terms:p.zM().oneOf([!0],"You must accept the terms")});var u=t(4961),x=t(3633),m=t(579);const y={name:"",email:"",password:"",terms:!1},g=()=>{const e=(0,s.jL)(),[r,t]=(0,i.useState)(!1),o=(0,a.Zp)(),{t:p}=(0,u.B)();return(0,m.jsx)(x.mO,{children:(0,m.jsx)(n.l1,{initialValues:y,validationSchema:h,onSubmit:async(r,t)=>{try{const{terms:n,...i}=r;await e((0,l.DY)(i)).unwrap(),t.resetForm(),o("/",{replace:!0})}catch{d.oR.error("Registration failed. Please try again.")}},children:e=>{let{values:o,handleChange:n,handleSubmit:i,touched:a,errors:l}=e;return(0,m.jsxs)(x.q,{onSubmit:i,children:[(0,m.jsxs)(x.A0,{children:[(0,m.jsx)(x.JU,{htmlFor:"name",children:p("Auth.fullName")}),(0,m.jsx)(x.pd,{id:"name",name:"name",type:"text",placeholder:p("Auth.fullNamePlaceholder"),$hasError:a.name&&!!l.name}),a.name&&l.name&&(0,m.jsx)(x.yn,{children:l.name})]}),(0,m.jsxs)(x.A0,{children:[(0,m.jsx)(x.JU,{htmlFor:"email",children:p("Auth.email")}),(0,m.jsx)(x.pd,{id:"email",name:"email",type:"email",placeholder:p("Auth.emailPlaceholder"),$hasError:a.email&&!!l.email}),a.email&&l.email&&(0,m.jsx)(x.yn,{children:l.email})]}),(0,m.jsxs)(x.A0,{children:[(0,m.jsx)(x.JU,{htmlFor:"password",children:p("Auth.password")}),(0,m.jsxs)(x.oi,{children:[(0,m.jsx)(x.pd,{id:"password",name:"password",type:r?"text":"password",placeholder:p("Auth.passwordPlaceholder"),$hasError:a.password&&!!l.password}),(0,m.jsx)(x.K_,{type:"button",onClick:()=>t((e=>!e)),children:r?(0,m.jsx)(c._NO,{size:18}):(0,m.jsx)(c.Vap,{size:18})})]}),a.password&&l.password&&(0,m.jsx)(x.yn,{children:l.password})]}),(0,m.jsxs)(x.A0,{children:[(0,m.jsx)(x.Gg,{children:(0,m.jsxs)(x.ZD,{children:[(0,m.jsx)("input",{type:"checkbox",name:"terms",checked:o.terms,onChange:n}),(0,m.jsx)("span",{id:"custom-checkbox"}),(0,m.jsxs)("p",{children:[p("Auth.agree")," ",(0,m.jsx)(x.oX,{to:"/terms",children:p("Auth.terms")})]})]})}),a.terms&&l.terms&&(0,m.jsx)(x.yn,{children:l.terms})]}),(0,m.jsx)(x.b7,{type:"submit",children:p("Auth.createAccount")})]})}})})},b=()=>(0,m.jsx)(o.A,{children:(0,m.jsx)(g,{})})}}]);
//# sourceMappingURL=257.19a05d29.chunk.js.map