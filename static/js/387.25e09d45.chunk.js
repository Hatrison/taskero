"use strict";(self.webpackChunktaskero=self.webpackChunktaskero||[]).push([[387],{279:(e,r,t)=>{t.d(r,{A:()=>l});var o=t(5200),n=t(9867),i=t(5464);const a=i.Ay.button`
  background-color: ${e=>{let{theme:r}=e;return r.backgroundSecondary}};
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;var s=t(579);const l=()=>{const e=(0,n.GV)((e=>e.theme.current)),r=(0,n.H1)(),t=(0,i.DP)();return(0,s.jsx)(a,{onClick:r,children:"light"===e?(0,s.jsx)(o.Wh$,{size:20,color:t.primaryText}):(0,s.jsx)(o.hkc,{size:20,color:t.primaryText})})}},3168:(e,r,t)=>{t.d(r,{A:()=>c});var o=t(5180),n=t(5464);const i=(0,n.Ay)(o.N_)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
`,a=n.Ay.img`
  width: 40px;
  height: 40px;
`,s=n.Ay.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>{let{theme:r}=e;return r.primary}};
  text-decoration: none;
`,l=t.p+"static/media/logo.f9f20538470db5fa4750.png";var d=t(579);const c=()=>(0,d.jsxs)(i,{to:"/",children:[(0,d.jsx)(a,{src:l,alt:"Taskero Logo"}),(0,d.jsx)(s,{children:"Taskero"})]})},3633:(e,r,t)=>{t.d(r,{A0:()=>l,Gg:()=>x,JU:()=>d,K_:()=>u,ZD:()=>h,b7:()=>b,mO:()=>a,oX:()=>g,oi:()=>p,pd:()=>c,q:()=>s,ql:()=>m,yn:()=>y});var o=t(5464),n=t(3892),i=t(5180);const a=o.Ay.div`
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
`,x=o.Ay.div`
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
`,y=o.Ay.p`
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
`},3875:(e,r,t)=>{t.d(r,{A:()=>u});var o=t(5043),n=t(4961),i=t(9867),a=t(5464);const s=a.Ay.div`
  position: relative;
`,l=a.Ay.button`
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
`;var p=t(579);const u=()=>{const{i18n:e}=(0,n.B)(),r=(0,i.Ym)(),[t,a]=(0,o.useState)(!1),u=(0,o.useRef)(null),x=e.language.toUpperCase(),h=e=>{r(e),a(!1)};return(0,o.useEffect)((()=>{const e=e=>{u.current&&!u.current.contains(e.target)&&a(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)}),[]),(0,p.jsxs)(s,{ref:u,children:[(0,p.jsx)(l,{onClick:()=>a((e=>!e)),children:x}),t&&(0,p.jsxs)(d,{children:[(0,p.jsx)(c,{onClick:()=>h("en"),children:"EN"}),(0,p.jsx)(c,{onClick:()=>h("uk"),children:"UK"})]})]})}},5554:(e,r,t)=>{t.d(r,{A:()=>f});var o=t(3168),n=t(3875),i=t(279),a=t(6058),s=t(5464),l=t(5180);const d=s.Ay.div`
  min-height: 100vh;
  background-color: ${e=>{let{theme:r}=e;return r.backgroundSecondary}};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`,c=s.Ay.div`
  background-color: ${e=>{let{theme:r}=e;return r.background}};
  border-radius: 8px;
  padding: 32px;
  width: 100%;
  max-width: 440px;
  box-shadow: ${e=>{let{theme:r}=e;return r.shadow}};
  display: flex;
  flex-direction: column;
  gap: 24px;
`,p=s.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,u=s.Ay.div`
  display: flex;
  border-bottom: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
`,x=(0,s.Ay)(l.k2)`
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
`,h=s.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
`,m=s.Ay.div`
  flex: 1;
  height: 1px;
  background-color: ${e=>{let{theme:r}=e;return r.borderColor}};
`,b=s.Ay.span`
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
`;var g=t(579);const f=e=>{let{children:r}=e;return(0,g.jsx)(d,{children:(0,g.jsxs)(c,{children:[(0,g.jsxs)(p,{children:[(0,g.jsx)(o.A,{}),(0,g.jsxs)("div",{style:{display:"flex",gap:"8px"},children:[(0,g.jsx)(n.A,{}),(0,g.jsx)(i.A,{})]})]}),(0,g.jsxs)(u,{children:[(0,g.jsx)(x,{to:"/login",children:"Login"}),(0,g.jsx)(x,{to:"/register",children:"Register"})]}),r,(0,g.jsxs)(h,{children:[(0,g.jsx)(m,{}),(0,g.jsx)(b,{children:"or continue with"}),(0,g.jsx)(m,{})]}),(0,g.jsxs)(y,{type:"button",children:[(0,g.jsx)(a.F4b,{size:20}),"Continue with Google"]})]})})}},9768:(e,r,t)=>{t.r(r),t.d(r,{default:()=>b});var o=t(5554),n=t(3892),i=t(5043),a=t(899);const s=a.Ik().shape({email:a.Yj().email("Invalid email").required("Required"),password:a.Yj().min(6,"Minimum 6 characters").matches(/[a-z]/,"Must include lowercase").matches(/[A-Z]/,"Must include uppercase").matches(/[0-9]/,"Must include number").required("Required")});var l=t(9867),d=t(4262),c=t(2115),p=t(5200),u=t(3633),x=t(579);const h={email:"",password:"",remember:!0},m=()=>{const e=(0,l.jL)(),[r,t]=(0,i.useState)(!1);return(0,x.jsx)(u.mO,{children:(0,x.jsx)(n.l1,{initialValues:h,onSubmit:async(r,t)=>{try{await e((0,d.Lx)({email:r.email,password:r.password})).unwrap(),t.resetForm()}catch{c.oR.error("Invalid email or password")}},validationSchema:s,children:e=>{let{values:o,handleChange:n,handleSubmit:i,touched:a,errors:s}=e;return(0,x.jsxs)(u.q,{onSubmit:i,children:[(0,x.jsxs)(u.A0,{children:[(0,x.jsx)(u.JU,{htmlFor:"email",children:"Email"}),(0,x.jsx)(u.pd,{id:"email",name:"email",type:"email",placeholder:"Enter your email",$hasError:a.email&&!!s.email}),a.email&&s.email&&(0,x.jsx)(u.yn,{children:s.email})]}),(0,x.jsxs)(u.A0,{children:[(0,x.jsx)(u.JU,{htmlFor:"password",children:"Password"}),(0,x.jsxs)(u.oi,{children:[(0,x.jsx)(u.pd,{id:"password",name:"password",type:r?"text":"password",placeholder:"Enter your password",$hasError:a.password&&!!s.password}),(0,x.jsx)(u.K_,{onClick:()=>t((e=>!e)),type:"button",children:r?(0,x.jsx)(p._NO,{size:18}):(0,x.jsx)(p.Vap,{size:18})})]}),a.password&&s.password&&(0,x.jsx)(u.yn,{children:s.password})]}),(0,x.jsxs)(u.Gg,{children:[(0,x.jsxs)(u.ZD,{children:[(0,x.jsx)("input",{type:"checkbox",name:"remember",checked:o.remember,onChange:n}),(0,x.jsx)("span",{}),"Remember me"]}),(0,x.jsx)(u.ql,{to:"/password",children:"Forgot password?"})]}),(0,x.jsx)(u.b7,{type:"submit",children:"Sign In"})]})}})})},b=()=>(0,x.jsx)(o.A,{children:(0,x.jsx)(m,{})})}}]);
//# sourceMappingURL=387.25e09d45.chunk.js.map