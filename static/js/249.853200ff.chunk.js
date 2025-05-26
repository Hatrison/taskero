"use strict";(self.webpackChunktaskero=self.webpackChunktaskero||[]).push([[249],{988:(e,r,t)=>{t.d(r,{hX:()=>o,pU:()=>i,ph:()=>n});const o=e=>e.projects.items,n=e=>e.projects.current,i=e=>e.projects.loading},3367:(e,r,t)=>{t.d(r,{A:()=>s});var o=t(2998),n=t(5464);const i=n.Ay.div`
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
`;var d=t(579);const s=e=>{let{members:r,maxVisible:t=4,size:n=28}=e;const s=r.slice(0,t),c=r.length-t;return(0,d.jsxs)(i,{children:[s.map(((e,r)=>{var t;return(0,d.jsx)(l,{index:r,children:(0,d.jsx)(o.A,{src:null!==(t=e.avatar)&&void 0!==t&&t.startsWith("http")?e.avatar:`https:${e.avatar}`,size:n})},e._id)})),c>0&&(0,d.jsx)(l,{index:t,children:(0,d.jsxs)(a,{size:n,children:["+",c]})})]})}},6249:(e,r,t)=>{t.r(r),t.d(r,{default:()=>J});var o=t(5043),n=t(4961),i=t(9867),l=t(377),a=t(9006),d=t(988),s=t(3289),c=t(5939),p=t(5464),u=t(1643),h=t(6511),m=t(2911),x=t(3367),y=t(5180);const g=(0,p.Ay)(y.N_)`
  background-color: ${e=>{let{theme:r}=e;return r.cardBackground}};
  border: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
  border-radius: 4px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  height: 100%;
  min-height: 200px;
  transition: background-color ${e=>{let{theme:r}=e;return r.animation}};
  cursor: pointer;

  &:hover {
    background-color: ${e=>{let{theme:r}=e;return r.backgroundSecondary}};
  }
`,b=p.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,f=p.Ay.h3`
  font-size: 18px;
  font-weight: 700;
`,j=p.Ay.p`
  font-size: 14px;
  color: ${e=>{let{theme:r}=e;return r.secondaryText}};
`,v=p.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,$=p.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,w=p.Ay.span`
  background-color: ${e=>{let{color:r}=e;return r}};
  color: ${e=>{let{theme:r}=e;return r.roleTextColor}};
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 4px;
  text-transform: capitalize;
`,A=p.Ay.p`
  font-size: 12px;
  color: ${e=>{let{theme:r}=e;return r.secondaryText}};
  margin-left: auto;
`;var k=t(579);const C=e=>{let{project:r,role:t}=e;const{name:o,company:i,members:l,createdAt:a}=r,{i18n:d,t:s}=(0,n.B)(),c=(0,p.DP)(),y={en:h.c,uk:m.uk}[d.language]||h.c,C={owner:c.roleOwner,editor:c.roleEditor,viewer:c.roleViewer};return(0,k.jsxs)(g,{to:`/projects/${r._id}`,children:[(0,k.jsxs)(b,{children:[(0,k.jsx)(f,{children:o}),(0,k.jsx)(j,{children:i.name})]}),(0,k.jsxs)(v,{children:[(0,k.jsx)(x.A,{members:[...l.map((e=>{let{user:r}=e;return r}))].reverse()}),(0,k.jsxs)($,{children:[t&&(0,k.jsx)(w,{color:C[t],children:s(`Projects.filters.${t.charAt(0).toUpperCase()+t.slice(1)}`)}),(0,k.jsx)(A,{children:(0,u.GP)(new Date(a),"dd MMM yyyy",{locale:y})})]})]})]})};var z=t(1308),P=t(9593),M=t(7784),T=t(3892),L=t(2115),B=t(899);const E=B.Ik({name:B.Yj().min(2).max(100).required("Required"),description:B.Yj().max(1e3),deadline:B.p6().nullable()});var _=t(7711);const F={name:"",description:"",deadline:""},S=e=>{let{handlerCloseModal:r,formName:t}=e;const{t:o}=(0,n.B)(),d=(0,i.jL)(),c=(0,i.GV)(l.jt),p=(0,i.GV)(s.mB);return(0,k.jsx)(T.l1,{initialValues:F,validationSchema:E,onSubmit:async e=>{if(null===c||void 0===c||!c._id||null===p||void 0===p||!p.email)return void L.oR.error(o("Forms.createProject.failed"));const t={...e,company:c._id,members:[{email:p.email,role:"owner"}]};try{await d((0,a.gA)(t)).unwrap(),L.oR.success(o("Forms.createProject.success")),r()}catch(n){L.oR.error(`${o("Forms.createProject.failed")}: ${n instanceof Error?n.message:String(n)}`)}},children:e=>{let{values:r,errors:n,touched:i,handleChange:l,handleBlur:a}=e;return(0,k.jsxs)(_.q,{id:t,children:[(0,k.jsxs)(_.A0,{children:[(0,k.jsx)(_.JU,{children:o("Forms.createProject.name")}),(0,k.jsx)(_.pd,{name:"name",placeholder:o("Forms.createProject.namePlaceholder"),$hasError:i.name&&!!n.name}),i.name&&n.name&&(0,k.jsx)(_.yn,{children:n.name})]}),(0,k.jsxs)(_.A0,{children:[(0,k.jsx)(_.JU,{children:o("Forms.createProject.description")}),(0,k.jsx)(_.TM,{name:"description",placeholder:o("Forms.createProject.descriptionPlaceholder"),value:r.description,onChange:l,onBlur:a,$hasError:i.description&&!!n.description}),i.description&&n.description&&(0,k.jsx)(_.yn,{children:n.description})]}),(0,k.jsxs)(_.A0,{children:[(0,k.jsx)(_.JU,{children:o("Forms.createProject.deadline")}),(0,k.jsx)(_.pd,{name:"deadline",type:"date"})]})]})}})},V=e=>{let{handlerCloseModal:r}=e;const{t:t}=(0,n.B)(),o="create-project-form";return(0,k.jsx)(P.A,{handlerCloseModal:r,children:(0,k.jsx)(M.A,{handlerCloseModal:r,title:t("Modals.createProject.title"),formName:o,children:(0,k.jsx)(S,{handlerCloseModal:r,formName:o})})})},G=p.Ay.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`,N=p.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,H=p.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,U=p.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`,q=p.Ay.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
`,O=p.Ay.button`
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
`,R=p.Ay.div`
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
`,X=p.Ay.input`
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
`,D=p.Ay.div`
  display: flex;
  height: 100%;
  width: 100%;

  @media (min-width: 768px) {
    width: 200px;
  }
`,I=p.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
`,J=()=>{const e=(0,i.jL)(),[r,t]=(0,o.useState)(""),[p,u]=(0,o.useState)("All Projects"),[h,m]=(0,o.useState)(!1),x=(0,i.GV)(d.pU),y=(0,i.GV)(l.jt),g=(0,i.GV)(d.hX),b=(0,i.GV)(s.AS),{t:f}=(0,n.B)();(0,o.useEffect)((()=>{e((0,a.ZH)())}),[e]);const j=()=>{m((e=>!e))},v=(0,o.useMemo)((()=>g.map((e=>{var r;const t=null===(r=e.members.find((e=>e.user.email===b)))||void 0===r?void 0:r.role;return{project:e,role:t}})).filter((e=>{let{project:t,role:o}=e;const n=t.company._id===(null===y||void 0===y?void 0:y._id),i=t.name.toLowerCase().includes(r.toLowerCase()),l="All Projects"===p,a=(null===o||void 0===o?void 0:o.toLowerCase())===p.toLowerCase();return n&&i&&(l||a)}))),[g,null===y||void 0===y?void 0:y._id,b,r,p]);return(0,k.jsx)(G,{children:x?(0,k.jsx)(N,{children:(0,k.jsx)(c.A,{size:"48px",color:"#3e85f3"})}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(H,{children:[(0,k.jsxs)(U,{children:[(0,k.jsx)(q,{children:f("Projects.title")}),(0,k.jsx)(O,{onClick:()=>{j()},children:f("Projects.create")})]}),(0,k.jsxs)(R,{children:[(0,k.jsx)(X,{type:"text",placeholder:f("Projects.searchPlaceholder"),value:r,onChange:e=>t(e.target.value)}),(0,k.jsx)(D,{children:(0,k.jsx)(z.A,{options:["All Projects","Owner","Editor","Viewer"],value:p,onChange:u,getLabel:e=>f(`Projects.filters.${e}`),getKey:e=>e})})]})]}),(0,k.jsx)(I,{children:v.map((e=>{let{project:r,role:t}=e;return(0,k.jsx)(C,{project:r,role:t},r._id)}))}),h&&(0,k.jsx)(V,{handlerCloseModal:j})]})})}},7711:(e,r,t)=>{t.d(r,{A0:()=>d,GX:()=>g,Gg:()=>h,JU:()=>s,K_:()=>u,N3:()=>f,TM:()=>$,ZD:()=>m,b7:()=>y,mO:()=>l,oX:()=>v,oi:()=>p,pd:()=>c,q:()=>a,ql:()=>x,sF:()=>b,yn:()=>j});var o=t(5464),n=t(3892),i=t(5180);const l=o.Ay.div`
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
`,j=o.Ay.p`
  color: #e74a3b;
  font-size: 12px;
  margin-top: -4px;
`,v=(0,o.Ay)(i.N_)`
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
`},7784:(e,r,t)=>{t.d(r,{A:()=>j});var o,n,i=t(4961),l=t(7711),a=t(5464),d=t(5043);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s.apply(null,arguments)}function c(e,r){let{title:t,titleId:i,...l}=e;return d.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:r,"aria-labelledby":i},l),t?d.createElement("title",{id:i},t):null,o||(o=d.createElement("path",{d:"M18 6L6 18",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),n||(n=d.createElement("path",{d:"M6 6L18 18",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const p=d.forwardRef(c),u=(t.p,a.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`),h=a.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  position: relative;
  padding: 24px;
  border-bottom: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
`,m=a.Ay.button`
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
`,x=(0,a.Ay)(p)`
  stroke: ${e=>{let{theme:r}=e;return r.modalCloseIconColor}};
  width: 24px;
  height: 24px;
  transition: stroke ${e=>{let{theme:r}=e;return r.animation}},
    scale ${e=>{let{theme:r}=e;return r.animation}};
`,y=a.Ay.h2`
  font-size: 24px;
  font-weight: 700;
`,g=a.Ay.div`
  padding: 24px;
`,b=a.Ay.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 24px;
  border-top: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
`;var f=t(579);const j=e=>{let{handlerCloseModal:r,title:t,formName:o,deleteAction:n,withActions:a=!0,children:d}=e;const{t:s}=(0,i.B)();return(0,f.jsxs)(u,{children:[(0,f.jsxs)(h,{children:[(0,f.jsx)(y,{children:t}),(0,f.jsx)(m,{onClick:r,children:(0,f.jsx)(x,{})})]}),(0,f.jsx)(g,{children:d}),a&&(0,f.jsxs)(b,{children:[n&&(0,f.jsx)(l.N3,{type:"button",onClick:()=>n(),children:s("Modals.common.delete")}),(0,f.jsxs)("div",{style:{display:"flex",gap:"8px",marginLeft:"auto"},children:[(0,f.jsx)(l.sF,{type:"button",onClick:r,children:s("Modals.common.cancel")}),(0,f.jsx)(l.GX,{type:"submit",form:o,children:s("Modals.common.save")})]})]})]})}},9593:(e,r,t)=>{t.d(r,{A:()=>c});var o=t(5043),n=t(7950),i=t(5464);const l=i.Ay.div`
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
//# sourceMappingURL=249.853200ff.chunk.js.map