"use strict";(self.webpackChunktaskero=self.webpackChunktaskero||[]).push([[364],{6364:(e,r,t)=>{t.r(r),t.d(r,{default:()=>me});var o=t(5043),n=t(4961),i=t(9867),l=t(377),a=t(9006);const d=e=>e.projects.items,s=e=>e.projects.loading;var c=t(3289),p=t(5939),u=t(5464),h=t(1643),x=t(6511),m=t(2911),g=t(2998);const y=u.Ay.div`
  position: relative;
  height: 28px;
  width: fit-content;
`,b=u.Ay.div`
  position: absolute;
  left: ${e=>{let{index:r}=e;return 20*r}}px;
  z-index: ${e=>{let{index:r}=e;return 10-r}};
`,f=u.Ay.div`
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
`;var j=t(579);const v=e=>{let{members:r,maxVisible:t=4,size:o=28}=e;const n=r.slice(0,t),i=r.length-t;return(0,j.jsxs)(y,{children:[n.map(((e,r)=>{var t;let{user:n}=e;return(0,j.jsx)(b,{index:r,children:(0,j.jsx)(g.A,{src:null!==(t=n.avatar)&&void 0!==t&&t.startsWith("http")?n.avatar:`https:${n.avatar}`,size:o})},n._id)})),i>0&&(0,j.jsx)(b,{index:t,children:(0,j.jsxs)(f,{size:o,children:["+",i]})})]})};var $=t(5180);const w=(0,u.Ay)($.N_)`
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
`,k=u.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`,A=u.Ay.h3`
  font-size: 18px;
  font-weight: 700;
`,C=u.Ay.p`
  font-size: 14px;
  color: ${e=>{let{theme:r}=e;return r.secondaryText}};
`,z=u.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`,P=u.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,T=u.Ay.span`
  background-color: ${e=>{let{color:r}=e;return r}};
  color: ${e=>{let{theme:r}=e;return r.roleTextColor}};
  padding: 4px 8px;
  font-size: 12px;
  border-radius: 4px;
  text-transform: capitalize;
`,M=u.Ay.p`
  font-size: 12px;
  color: ${e=>{let{theme:r}=e;return r.secondaryText}};
  margin-left: auto;
`,L=e=>{let{project:r,role:t}=e;const{name:o,company:i,members:l,createdAt:a}=r,{i18n:d,t:s}=(0,n.B)(),c=(0,u.DP)(),p={en:x.c,uk:m.uk}[d.language]||x.c,g={owner:c.roleOwner,editor:c.roleEditor,viewer:c.roleViewer};return(0,j.jsxs)(w,{to:`/projects/${r._id}`,children:[(0,j.jsxs)(k,{children:[(0,j.jsx)(A,{children:o}),(0,j.jsx)(C,{children:i.name})]}),(0,j.jsxs)(z,{children:[(0,j.jsx)(v,{members:[...l].reverse()}),(0,j.jsxs)(P,{children:[t&&(0,j.jsx)(T,{color:g[t],children:s(`Projects.filters.${t.charAt(0).toUpperCase()+t.slice(1)}`)}),(0,j.jsx)(M,{children:(0,h.GP)(new Date(a),"dd MMM yyyy",{locale:p})})]})]})]})};var E=t(1308),B=t(7950);const S=u.Ay.div`
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
`,_=u.Ay.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  min-width: 200px;
  min-height: 200px;
  background-color: ${e=>{let{theme:r}=e;return r.background}};
  border: ${e=>{let{theme:r}=e;return r.modalBorder}};
  border-radius: 8px;

  box-shadow: ${e=>{let{theme:r}=e;return r.shadow}};
`,F=document.querySelector("#modal-root"),V=e=>{let{children:r,handlerCloseModal:t}=e;const n=(0,o.useCallback)((e=>{"Escape"===e.code&&t()}),[t]);(0,o.useEffect)((()=>(window.addEventListener("keydown",n),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",n),document.body.style.overflow="auto"})),[n]);return(0,B.createPortal)((0,j.jsx)(S,{onClick:e=>{e.currentTarget===e.target&&t()},children:(0,j.jsx)(_,{children:r})}),F)};var G,H;function q(){return q=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},q.apply(null,arguments)}function O(e,r){let{title:t,titleId:n,...i}=e;return o.createElement("svg",q({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:r,"aria-labelledby":n},i),t?o.createElement("title",{id:n},t):null,G||(G=o.createElement("path",{d:"M18 6L6 18",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),H||(H=o.createElement("path",{d:"M6 6L18 18",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const D=o.forwardRef(O),U=(t.p,u.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`),I=u.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  position: relative;
  padding: 24px;
  border-bottom: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
`,J=u.Ay.button`
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
`,R=(0,u.Ay)(D)`
  stroke: ${e=>{let{theme:r}=e;return r.modalCloseIconColor}};
  width: 24px;
  height: 24px;
  transition: stroke ${e=>{let{theme:r}=e;return r.animation}},
    scale ${e=>{let{theme:r}=e;return r.animation}};
`,N=u.Ay.h2`
  font-size: 24px;
  font-weight: 700;
`,W=u.Ay.div`
  padding: 24px;
`,X=u.Ay.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 24px;
  border-top: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
`,Y=e=>{let{handlerCloseModal:r,title:t,children:o,actions:n}=e;return(0,j.jsxs)(U,{children:[(0,j.jsxs)(I,{children:[(0,j.jsx)(N,{children:t}),(0,j.jsx)(J,{onClick:r,children:(0,j.jsx)(R,{})})]}),(0,j.jsx)(W,{children:o}),n&&(0,j.jsx)(X,{children:n})]})};var K=t(3892),Z=t(2115),Q=t(899);const ee=Q.Ik({name:Q.Yj().min(2).max(100).required("Required"),description:Q.Yj().max(1e3),deadline:Q.p6().nullable()});var re=t(7711);const te={name:"",description:"",deadline:""},oe=e=>{let{onSubmit:r}=e;const{t:t}=(0,n.B)(),o=(0,i.jL)(),d=(0,i.GV)(l.jt),s=(0,i.GV)(c.mB);return(0,j.jsx)(K.l1,{initialValues:te,validationSchema:ee,onSubmit:async e=>{if(null===d||void 0===d||!d._id||null===s||void 0===s||!s.email)return void Z.oR.error(t("Forms.createProject.failed"));const n={...e,company:d._id,members:[{email:s.email,role:"owner"}]};try{await o((0,a.gA)(n)).unwrap(),null===r||void 0===r||r(e)}catch(i){Z.oR.error(`${t("Forms.createProject.failed")}: ${i instanceof Error?i.message:String(i)}`)}},children:e=>{let{values:r,errors:o,touched:n,handleChange:i,handleBlur:l}=e;return(0,j.jsxs)(re.q,{id:"create-project-form",children:[(0,j.jsxs)(re.A0,{children:[(0,j.jsx)(re.JU,{children:t("Forms.createProject.name")}),(0,j.jsx)(re.pd,{name:"name",placeholder:t("Forms.createProject.namePlaceholder"),$hasError:n.name&&!!o.name}),n.name&&o.name&&(0,j.jsx)(re.yn,{children:o.name})]}),(0,j.jsxs)(re.A0,{children:[(0,j.jsx)(re.JU,{children:t("Forms.createProject.description")}),(0,j.jsx)(re.TM,{name:"description",placeholder:t("Forms.createProject.descriptionPlaceholder"),value:r.description,onChange:i,onBlur:l,$hasError:n.description&&!!o.description}),n.description&&o.description&&(0,j.jsx)(re.yn,{children:o.description})]}),(0,j.jsxs)(re.A0,{children:[(0,j.jsx)(re.JU,{children:t("Forms.createProject.deadline")}),(0,j.jsx)(re.pd,{name:"deadline",type:"date"})]})]})}})},ne=e=>{let{handlerCloseModal:r}=e;const{t:t}=(0,n.B)();return(0,j.jsx)(V,{handlerCloseModal:r,children:(0,j.jsx)(Y,{handlerCloseModal:r,title:t("Modals.createProject.title"),actions:(0,j.jsx)(j.Fragment,{children:(0,j.jsxs)("div",{style:{display:"flex",gap:"8px",marginLeft:"auto"},children:[(0,j.jsx)(re.sF,{type:"button",onClick:r,children:t("Modals.common.cancel")}),(0,j.jsx)(re.GX,{type:"submit",form:"create-project-form",children:t("Modals.common.save")})]})}),children:(0,j.jsx)(oe,{})})})},ie=u.Ay.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 48px;
`,le=u.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`,ae=u.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`,de=u.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`,se=u.Ay.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
`,ce=u.Ay.button`
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
`,pe=u.Ay.div`
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
`,ue=u.Ay.input`
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
`,he=u.Ay.div`
  display: flex;
  height: 100%;
  width: 100%;

  @media (min-width: 768px) {
    width: 200px;
  }
`,xe=u.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
`,me=()=>{const e=(0,i.jL)(),[r,t]=(0,o.useState)(""),[u,h]=(0,o.useState)("All Projects"),[x,m]=(0,o.useState)(!1),g=(0,i.GV)(s),y=(0,i.GV)(l.jt),b=(0,i.GV)(d),f=(0,i.GV)(c.AS),{t:v}=(0,n.B)();(0,o.useEffect)((()=>{e((0,a.ZH)())}),[e]);const $=()=>{m((e=>!e))},w=(0,o.useMemo)((()=>b.map((e=>{var r;const t=null===(r=e.members.find((e=>e.user.email===f)))||void 0===r?void 0:r.role;return{project:e,role:t}})).filter((e=>{let{project:t,role:o}=e;const n=t.company._id===(null===y||void 0===y?void 0:y._id),i=t.name.toLowerCase().includes(r.toLowerCase()),l="All Projects"===u,a=(null===o||void 0===o?void 0:o.toLowerCase())===u.toLowerCase();return n&&i&&(l||a)}))),[b,null===y||void 0===y?void 0:y._id,f,r,u]);return(0,j.jsx)(ie,{children:g?(0,j.jsx)(le,{children:(0,j.jsx)(p.A,{size:"48px",color:"#3e85f3"})}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(ae,{children:[(0,j.jsxs)(de,{children:[(0,j.jsx)(se,{children:v("Projects.title")}),(0,j.jsx)(ce,{onClick:()=>{$()},children:v("Projects.create")})]}),(0,j.jsxs)(pe,{children:[(0,j.jsx)(ue,{type:"text",placeholder:v("Projects.searchPlaceholder"),value:r,onChange:e=>t(e.target.value)}),(0,j.jsx)(he,{children:(0,j.jsx)(E.A,{options:["All Projects","Owner","Editor","Viewer"],value:u,onChange:h,getLabel:e=>v(`Projects.filters.${e}`),getKey:e=>e})})]})]}),(0,j.jsx)(xe,{children:!g&&f&&w.map((e=>{let{project:r,role:t}=e;return(0,j.jsx)(L,{project:r,role:t},r._id)}))}),x&&(0,j.jsx)(ne,{handlerCloseModal:$,hasDeleteAction:!0})]})})}},7711:(e,r,t)=>{t.d(r,{A0:()=>d,GX:()=>y,Gg:()=>h,JU:()=>s,K_:()=>u,TM:()=>v,ZD:()=>x,b7:()=>g,mO:()=>l,oX:()=>j,oi:()=>p,pd:()=>c,q:()=>a,ql:()=>m,sF:()=>b,yn:()=>f});var o=t(5464),n=t(3892),i=t(5180);const l=o.Ay.div`
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
`,y=o.Ay.button`
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
`,f=(o.Ay.button`
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
`),j=(0,o.Ay)(i.N_)`
  font-size: 14px;
  color: ${e=>{let{theme:r}=e;return r.primary}};
  text-decoration: underline;
  transition: color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.primaryHover}};
  }
`,v=(0,o.Ay)(c).attrs({as:"textarea"})`
  resize: vertical;
  min-height: 100px;
`}}]);
//# sourceMappingURL=364.5f1b5920.chunk.js.map