"use strict";(self.webpackChunktaskero=self.webpackChunktaskero||[]).push([[364],{6364:(e,r,t)=>{t.r(r),t.d(r,{default:()=>pe});var o=t(5043),n=t(4961),i=t(9867),l=t(377),a=t(9006);const d=e=>e.projects.items;var s=t(3289),c=t(5464),p=t(1643),u=t(6511),h=t(2911),x=t(2998);const m=c.Ay.div`
  position: relative;
  height: 28px;
  width: fit-content;
`,y=c.Ay.div`
  position: absolute;
  left: ${e=>{let{index:r}=e;return 20*r}}px;
  z-index: ${e=>{let{index:r}=e;return 10-r}};
`,g=c.Ay.div`
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
`;var b=t(579);const f=e=>{let{members:r,maxVisible:t=4,size:o=28}=e;const n=r.slice(0,t),i=r.length-t;return(0,b.jsxs)(m,{children:[n.map(((e,r)=>{var t;let{user:n}=e;return(0,b.jsx)(y,{index:r,children:(0,b.jsx)(x.A,{src:null!==(t=n.avatar)&&void 0!==t&&t.startsWith("http")?n.avatar:`https:${n.avatar}`,size:o})},n._id)})),i>0&&(0,b.jsx)(y,{index:t,children:(0,b.jsxs)(g,{size:o,children:["+",i]})})]})};var v=t(5180);const j=(0,c.Ay)(v.N_)`
  background-color: ${e=>{let{theme:r}=e;return r.cardBackground}};
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  height: 100%;
  min-height: 200px;
  box-shadow: ${e=>{let{theme:r}=e;return r.shadow}};
  transition: background-color ${e=>{let{theme:r}=e;return r.animation}};
  cursor: pointer;

  &:hover {
    background-color: ${e=>{let{theme:r}=e;return r.backgroundSecondary}};
  }
`,$=c.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,w=c.Ay.h3`
  font-size: 18px;
  font-weight: 700;
`,k=c.Ay.p`
  font-size: 14px;
  color: ${e=>{let{theme:r}=e;return r.secondaryText}};
`,A=c.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,C=c.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,z=c.Ay.span`
  background-color: ${e=>{let{color:r}=e;return r}};
  color: ${e=>{let{theme:r}=e;return r.roleTextColor}};
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 4px;
  text-transform: capitalize;
`,P=c.Ay.p`
  font-size: 12px;
  color: ${e=>{let{theme:r}=e;return r.secondaryText}};
`,T=e=>{let{project:r,role:t}=e;const{name:o,company:i,members:l,createdAt:a}=r,{i18n:d,t:s}=(0,n.B)(),x=(0,c.DP)(),m={en:u.c,uk:h.uk}[d.language]||u.c,y={owner:x.roleOwner,editor:x.roleEditor,viewer:x.roleViewer};return(0,b.jsxs)(j,{to:`/projects/${r._id}`,children:[(0,b.jsxs)($,{children:[(0,b.jsx)(w,{children:o}),(0,b.jsx)(k,{children:i.name})]}),(0,b.jsxs)(A,{children:[(0,b.jsx)(f,{members:[...l].reverse()}),(0,b.jsxs)(C,{children:[(0,b.jsx)(z,{color:y[t],children:s(`Projects.filters.${(null===t||void 0===t?void 0:t.charAt(0).toUpperCase())+t.slice(1)}`)}),(0,b.jsx)(P,{children:(0,p.GP)(new Date(a),"dd MMM yyyy",{locale:m})})]})]})]})};var M=t(1308),E=t(7950);const L=c.Ay.div`
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
`,B=c.Ay.div`
  position: relative;
  min-width: 200px;
  min-height: 200px;
  background-color: ${e=>{let{theme:r}=e;return r.background}};
  border: ${e=>{let{theme:r}=e;return r.modalBorder}};
  border-radius: 8px;

  box-shadow: ${e=>{let{theme:r}=e;return r.shadow}};
`,S=document.querySelector("#modal-root"),_=e=>{let{children:r,handlerCloseModal:t}=e;const n=(0,o.useCallback)((e=>{"Escape"===e.code&&t()}),[t]);(0,o.useEffect)((()=>(window.addEventListener("keydown",n),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",n),document.body.style.overflow="auto"})),[n]);return(0,E.createPortal)((0,b.jsx)(L,{onClick:e=>{e.currentTarget===e.target&&t()},children:(0,b.jsx)(B,{children:r})}),S)};var F,V;function G(){return G=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},G.apply(null,arguments)}function H(e,r){let{title:t,titleId:n,...i}=e;return o.createElement("svg",G({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:r,"aria-labelledby":n},i),t?o.createElement("title",{id:n},t):null,F||(F=o.createElement("path",{d:"M18 6L6 18",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),V||(V=o.createElement("path",{d:"M6 6L18 18",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const q=o.forwardRef(H),D=(t.p,c.Ay.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
`),O=c.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  position: relative;
  padding: 24px;
  border-bottom: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
`,U=c.Ay.button`
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
`,I=(0,c.Ay)(q)`
  stroke: ${e=>{let{theme:r}=e;return r.modalCloseIconColor}};
  width: 24px;
  height: 24px;
  transition: stroke ${e=>{let{theme:r}=e;return r.animation}},
    scale ${e=>{let{theme:r}=e;return r.animation}};
`,J=c.Ay.h2`
  font-size: 24px;
  font-weight: 700;
`,R=c.Ay.div`
  display: flex;
  justify-content: flex-end;
  padding: 24px;
  gap: 16px;
  border-top: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
`,N=e=>{let{handlerCloseModal:r,title:t,children:o,actions:n}=e;return(0,b.jsxs)(D,{children:[(0,b.jsxs)(O,{children:[(0,b.jsx)(J,{children:t}),(0,b.jsx)(U,{onClick:r,children:(0,b.jsx)(I,{})})]}),o,n&&(0,b.jsx)(R,{children:n})]})};var W=t(3892),X=t(2115),Y=t(899);const K=Y.Ik({name:Y.Yj().min(2).max(100).required("Required"),description:Y.Yj().max(1e3),deadline:Y.p6().nullable()});var Z=t(7711);const Q={name:"",description:"",deadline:""},ee=e=>{let{onSubmit:r}=e;const{t:t}=(0,n.B)(),o=(0,i.jL)(),d=(0,i.GV)(l.jt),c=(0,i.GV)(s.mB);return(0,b.jsx)(Z.Dt,{children:(0,b.jsx)(W.l1,{initialValues:Q,validationSchema:K,onSubmit:async e=>{if(null===d||void 0===d||!d._id||null===c||void 0===c||!c.email)return void X.oR.error(t("Forms.createProject.failed"));const n={...e,company:d._id,members:[{email:c.email,role:"owner"}]};try{await o((0,a.gA)(n)).unwrap(),null===r||void 0===r||r(e)}catch(i){X.oR.error(`${t("Forms.createProject.failed")}: ${i instanceof Error?i.message:String(i)}`)}},children:e=>{let{values:r,errors:o,touched:n,handleChange:i,handleBlur:l}=e;return(0,b.jsxs)(Z.q,{id:"create-project-form",children:[(0,b.jsxs)(Z.A0,{children:[(0,b.jsx)(Z.JU,{children:t("Forms.createProject.name")}),(0,b.jsx)(Z.pd,{name:"name",placeholder:t("Forms.createProject.namePlaceholder"),$hasError:n.name&&!!o.name}),n.name&&o.name&&(0,b.jsx)(Z.yn,{children:o.name})]}),(0,b.jsxs)(Z.A0,{children:[(0,b.jsx)(Z.JU,{children:t("Forms.createProject.description")}),(0,b.jsx)(Z.TM,{name:"description",placeholder:t("Forms.createProject.descriptionPlaceholder"),value:r.description,onChange:i,onBlur:l,$hasError:n.description&&!!o.description}),n.description&&o.description&&(0,b.jsx)(Z.yn,{children:o.description})]}),(0,b.jsxs)(Z.A0,{children:[(0,b.jsx)(Z.JU,{children:t("Forms.createProject.deadline")}),(0,b.jsx)(Z.pd,{name:"deadline",type:"date"})]})]})}})})},re=e=>{let{handlerCloseModal:r}=e;const{t:t}=(0,n.B)();return(0,b.jsx)(_,{handlerCloseModal:r,children:(0,b.jsx)(N,{handlerCloseModal:r,title:t("Modals.createProject.title"),actions:(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(Z.sF,{type:"button",onClick:r,children:t("Modals.common.cancel")}),(0,b.jsx)(Z.GX,{type:"submit",form:"create-project-form",children:t("Modals.common.save")})]}),children:(0,b.jsx)(ee,{})})})},te=c.Ay.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`,oe=c.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,ne=c.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`,ie=c.Ay.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
`,le=c.Ay.button`
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
`,ae=c.Ay.div`
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
`,de=c.Ay.input`
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
`,se=c.Ay.div`
  display: flex;
  height: 100%;
  width: 100%;

  @media (min-width: 768px) {
    width: 200px;
  }
`,ce=c.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
`,pe=()=>{const e=(0,i.jL)(),[r,t]=(0,o.useState)(""),[c,p]=(0,o.useState)("All Projects"),[u,h]=(0,o.useState)(!1),x=(0,i.GV)(l.jt),m=(0,i.GV)(d),y=(0,i.GV)(s.AS),{t:g}=(0,n.B)();(0,o.useEffect)((()=>{e((0,a.ZH)())}),[e]);const f=()=>{h((e=>!e))},v=m.filter((e=>{var t;const o=null===(t=e.members.find((e=>e.user.email===y)))||void 0===t?void 0:t.role,n=e.company._id===(null===x||void 0===x?void 0:x._id),i=e.name.toLowerCase().includes(r.toLowerCase()),l="All Projects"===c,a=(null===o||void 0===o?void 0:o.toLowerCase())===c.toLowerCase();return n&&i&&(l||a)}));return(0,b.jsxs)(te,{children:[(0,b.jsxs)(oe,{children:[(0,b.jsxs)(ne,{children:[(0,b.jsx)(ie,{children:g("Projects.title")}),(0,b.jsx)(le,{onClick:()=>{f()},children:g("Projects.create")})]}),(0,b.jsxs)(ae,{children:[(0,b.jsx)(de,{type:"text",placeholder:g("Projects.searchPlaceholder"),value:r,onChange:e=>t(e.target.value)}),(0,b.jsx)(se,{children:(0,b.jsx)(M.A,{options:["All Projects","Owner","Editor","Viewer"],value:c,onChange:p,getLabel:e=>g(`Projects.filters.${e}`),getKey:e=>e})})]})]}),(0,b.jsx)(ce,{children:v.map((e=>{var r;const t=null===(r=e.members.find((e=>e.user.email===y)))||void 0===r?void 0:r.role;return(0,b.jsx)(T,{project:e,role:t||"viewer"},e._id)}))}),u&&(0,b.jsx)(re,{handlerCloseModal:f})]})}},7711:(e,r,t)=>{t.d(r,{A0:()=>s,Dt:()=>a,GX:()=>b,Gg:()=>x,JU:()=>c,K_:()=>h,TM:()=>$,ZD:()=>m,b7:()=>g,mO:()=>l,oX:()=>j,oi:()=>u,pd:()=>p,q:()=>d,ql:()=>y,sF:()=>f,yn:()=>v});var o=t(5464),n=t(3892),i=t(5180);const l=o.Ay.div`
  width: 100%;
`,a=o.Ay.div`
  width: 100%;
  padding: 24px;
`,d=(0,o.Ay)(n.lV)`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,s=o.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,c=o.Ay.label`
  font-size: 14px;
  font-weight: 500;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
`,p=(0,o.Ay)(n.D0)`
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
`,x=o.Ay.div`
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
`,y=(0,o.Ay)(i.N_)`
  font-size: 14px;
  color: ${e=>{let{theme:r}=e;return r.primary}};
  transition: color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.primaryHover}};
  }
`,g=o.Ay.button`
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
`,b=o.Ay.button`
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
`,f=o.Ay.button`
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
`,v=o.Ay.p`
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
`,$=(0,o.Ay)(p).attrs({as:"textarea"})`
  resize: vertical;
  min-height: 100px;
`}}]);
//# sourceMappingURL=364.2eec8a0b.chunk.js.map