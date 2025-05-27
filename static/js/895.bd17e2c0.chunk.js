"use strict";(self.webpackChunktaskero=self.webpackChunktaskero||[]).push([[895],{7142:(e,r,t)=>{t.d(r,{A:()=>T});var o=t(5043),n=t(4961),i=t(2115),l=t(5464),a=t(9867),d=t(7201),s=t(3289),c=t(7711),p=t(551);const m=l.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px;
  border: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
  border-radius: 4px;
  background-color: ${e=>{let{theme:r}=e;return r.cardBackground}};
  min-height: 44px;
  max-height: 200px;
  overflow: auto;
  cursor: text;
  transition: border ${e=>{let{theme:r}=e;return r.animation}};

  &:focus-within {
    border: 1px solid ${e=>{let{theme:r}=e;return r.primary}};
  }
`,u=l.Ay.div`
  display: flex;
  align-items: center;
  padding: 6px 10px;
  border-radius: 4px;
  background-color: ${e=>{let{theme:r}=e;return r.tagBackground}};
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
  font-size: 14px;
`,h=l.Ay.button`
  margin-left: 6px;
  border: none;
  background: none;
  color: ${e=>{let{theme:r}=e;return r.danger}};
  font-weight: bold;
  cursor: pointer;
  line-height: 1;
`,x=l.Ay.input`
  flex: 1;
  min-width: 150px;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 6px;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
  background: transparent;

  &::placeholder {
    color: ${e=>{let{theme:r}=e;return r.secondaryText}};
  }
`;var g=t(579);const b=e=>{let{pending:r,onPendingChange:t,placeholder:l}=e;const[a,d]=(0,o.useState)(""),{t:s}=(0,n.B)();return(0,g.jsxs)(m,{children:[r.map((e=>(0,g.jsxs)(u,{children:[e,(0,g.jsx)(h,{onClick:()=>{return o=e,void t(r.filter((e=>e!==o)));var o},children:"\xd7"})]},e))),(0,g.jsx)(x,{type:"text",value:a,onChange:e=>d(e.target.value),onKeyDown:e=>{if(["Enter","Tab",","].includes(e.key)){e.preventDefault();const o=a.trim().replace(/,+$/,"");if(!o)return;if(!(e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e))(o))return void i.oR.error(s("Forms.common.invalidEmail"));if(r.includes(o))return i.oR.info(s("Forms.common.alreadyInPending")),void d("");t([...r,o]),d("")}},placeholder:l})]})},y=l.Ay.div`
  max-height: 240px;
  overflow-y: auto;
  border: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
  border-radius: 8px;
`,f=l.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  font-size: 15px;
  border-bottom: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
  background-color: ${e=>{let{theme:r}=e;return r.cardBackground}};

  &:last-child {
    border-bottom: none;
  }
`,v=l.Ay.img`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  flex-shrink: 0;
  object-fit: cover;
`,w=l.Ay.div`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background-color: #cccccc;
  flex-shrink: 0;
`,$=l.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,k=l.Ay.div`
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
`,j=l.Ay.div`
  font-size: 14px;
  color: ${e=>{let{theme:r}=e;return r.secondaryText}};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,A=l.Ay.span`
  font-size: 12px;
  background-color: ${e=>{let{color:r}=e;return r}};
  color: ${e=>{let{theme:r}=e;return r.roleTextColor}};
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
`,C=l.Ay.div`
  display: flex;
  width: 150px;
`,z=l.Ay.button`
  border: 1px solid ${e=>{let{theme:r}=e;return r.danger}};
  color: ${e=>{let{theme:r}=e;return r.danger}};
  background: none;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: color ${e=>{let{theme:r}=e;return r.animation}},
    background-color ${e=>{let{theme:r}=e;return r.animation}},
    border-color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.invertedText||"rgba(255, 0, 0, 0.8)"}};
    background-color: ${e=>{let{theme:r}=e;return r.dangerHover||"rgba(255, 0, 0, 0.05)"}};
    border-color: ${e=>{let{theme:r}=e;return r.dangerHover||"rgba(255, 0, 0, 0.2)"}};
  }
`,T=e=>{let{value:r,users:t,onChange:m,withActions:u=!0,editableRoles:h=!1,availableRoles:x=["member","editor","viewer"],viewMode:T=!1}=e;const F=(0,a.jL)(),L=(0,a.GV)(s.mB),[M,R]=(0,o.useState)([]),[E,B]=(0,o.useState)([]),{t:H}=(0,n.B)(),_=(0,l.DP)(),N={owner:_.roleOwner,editor:_.roleEditor,viewer:_.roleViewer,member:_.roleMember,new:_.roleNew},P=()=>t.length?(0,g.jsx)(y,{children:t.map((e=>(0,g.jsxs)(f,{children:[e.avatar?(0,g.jsx)(v,{src:e.avatar,alt:e.name}):(0,g.jsx)(w,{}),(0,g.jsxs)($,{children:[(0,g.jsx)(k,{children:e.name}),(0,g.jsx)(j,{children:e.email})]}),(0,g.jsx)(z,{type:"button",onClick:()=>(e=>{const r=t.filter((r=>r.email.toLowerCase()!==e.toLowerCase()));m(r)})(e.email),children:H("Forms.common.remove")})]},e._id)))}):null;if(!r||!Array.isArray(r)&&T)return P();const S="object"===typeof(null===r||void 0===r?void 0:r[0])&&null!==r[0],D=e=>"string"===typeof e?e:e.email,G=r.map((e=>{const r=D(e),o=(e=>{if("object"===typeof e)return e.role;const r=t.find((r=>r.email===e))||E.find((r=>r.email===e));return(null===r||void 0===r?void 0:r.role)||"member"})(e),n=t.find((e=>e.email===r))||E.find((e=>e.email===r)),i="new"===(null===n||void 0===n?void 0:n.role);return{...n||{_id:r,name:r.split("@")[0],email:r},role:o,displayRole:i?"new":o}})),O=async()=>{if(0===M.length)return void i.oR.info(H("Forms.common.nobodyToAdd"));const e=r.map(D),o=M.filter((r=>!e.includes(r)));if(0===o.length)return i.oR.info(H("Forms.common.allAlreadyAdded")),void R([]);try{const e=await F((0,d.AX)(o)).unwrap(),n=e.map((e=>e.email)),l=o.filter((e=>!n.includes(e)));l.length>0&&i.oR.warn(H("Forms.common.someUsersNotFound",{count:l.length,all:o.length}));const a=e.map((e=>({...e,role:"new"})));B((e=>[...e,...a]));const s=S?e.map((e=>{const r=t.find((r=>r.email===e.email))||E.find((r=>r.email===e.email)),o=null!==r&&void 0!==r&&r.role&&"new"!==r.role?r.role:"viewer";return{email:e.email,role:o}})):e.map((e=>e.email));m([...r,...s]),R([])}catch(n){i.oR.error(H("Forms.common.fetchUsersFailed"))}};return(0,g.jsxs)(g.Fragment,{children:[(()=>{const e=h&&x.length>1;return(0,g.jsx)(y,{children:G.map((t=>(0,g.jsxs)(f,{children:[t.avatar?(0,g.jsx)(v,{src:t.avatar,alt:t.name}):(0,g.jsx)(w,{}),(0,g.jsxs)($,{children:[(0,g.jsxs)(k,{children:[t.name,t.displayRole&&(0,g.jsx)(A,{color:N[t.displayRole],children:H(`Common.roles.${t.displayRole}`)})]}),(0,g.jsx)(j,{children:t.email})]}),u&&t._id!==(null===L||void 0===L?void 0:L._id)&&(0,g.jsxs)(g.Fragment,{children:[S&&e&&(0,g.jsx)(C,{children:(0,g.jsx)(p.A,{options:x,value:t.role,onChange:e=>((e,t)=>{if(!S)return;const o=r.map((r=>r.email===e?{...r,role:t}:r));m(o)})(t.email,e),getLabel:e=>H(`Common.roles.${e}`),getKey:e=>null!==e&&void 0!==e?e:""})}),(0,g.jsx)(z,{type:"button",onClick:()=>(e=>{const t=r.filter((r=>D(r).toLowerCase()!==e.toLowerCase()));m(t)})(t.email),children:H("Forms.common.remove")})]})]},t._id)))})})(),u&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("label",{children:H("Forms.common.addMembers")}),(0,g.jsx)(b,{pending:M,onPendingChange:R,placeholder:H("Forms.common.addMembersPlaceholder")}),(0,g.jsx)(c.GX,{type:"button",onClick:O,children:H("Forms.common.addMembers")})]})]})}},7711:(e,r,t)=>{t.d(r,{A0:()=>d,GX:()=>b,Gg:()=>u,JU:()=>s,K_:()=>m,N3:()=>f,TM:()=>$,ZD:()=>h,b7:()=>g,mO:()=>l,oX:()=>w,oi:()=>p,pd:()=>c,q:()=>a,ql:()=>x,sF:()=>y,yn:()=>v});var o=t(5464),n=t(3892),i=t(5180);const l=o.Ay.div`
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
`,m=o.Ay.button`
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
`,x=(0,o.Ay)(i.N_)`
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
`,v=o.Ay.p`
  color: #e74a3b;
  font-size: 12px;
  margin-top: -4px;
`,w=(0,o.Ay)(i.N_)`
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
`},7784:(e,r,t)=>{t.d(r,{A:()=>v});var o,n,i=t(4961),l=t(7711),a=t(5464),d=t(5043);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},s.apply(null,arguments)}function c(e,r){let{title:t,titleId:i,...l}=e;return d.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:r,"aria-labelledby":i},l),t?d.createElement("title",{id:i},t):null,o||(o=d.createElement("path",{d:"M18 6L6 18",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),n||(n=d.createElement("path",{d:"M6 6L18 18",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const p=d.forwardRef(c),m=(t.p,a.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`),u=a.Ay.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  position: relative;
  padding: 24px;
  border-bottom: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
`,h=a.Ay.button`
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
`,g=a.Ay.h2`
  font-size: 24px;
  font-weight: 700;
`,b=a.Ay.div`
  padding: 24px;
  overflow: auto;
`,y=a.Ay.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 24px;
  border-top: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
`;var f=t(579);const v=e=>{let{handlerCloseModal:r,title:t,formName:o,deleteAction:n,withActions:a=!0,children:d}=e;const{t:s}=(0,i.B)();return(0,f.jsxs)(m,{children:[(0,f.jsxs)(u,{children:[(0,f.jsx)(g,{children:t}),(0,f.jsx)(h,{onClick:r,children:(0,f.jsx)(x,{})})]}),(0,f.jsx)(b,{children:d}),a&&(0,f.jsxs)(y,{children:[n&&(0,f.jsx)(l.N3,{type:"button",onClick:()=>n(),children:s("Modals.common.delete")}),(0,f.jsxs)("div",{style:{display:"flex",gap:"8px",marginLeft:"auto"},children:[(0,f.jsx)(l.sF,{type:"button",onClick:r,children:s("Modals.common.cancel")}),(0,f.jsx)(l.GX,{type:"submit",form:o,children:s("Modals.common.save")})]})]})]})}},9593:(e,r,t)=>{t.d(r,{A:()=>c});var o=t(5043),n=t(7950),i=t(5464);const l=i.Ay.div`
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
  height: 100%;
  max-width: 800px;
  min-width: 200px;
  min-height: 200px;
  background-color: ${e=>{let{theme:r}=e;return r.background}};
  border: ${e=>{let{theme:r}=e;return r.modalBorder}};
  border-radius: 8px;

  box-shadow: ${e=>{let{theme:r}=e;return r.shadow}};
`;var d=t(579);const s=document.querySelector("#modal-root"),c=e=>{let{children:r,handlerCloseModal:t}=e;const i=(0,o.useCallback)((e=>{"Escape"===e.code&&t()}),[t]);(0,o.useEffect)((()=>(window.addEventListener("keydown",i),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",i),document.body.style.overflow="auto"})),[i]);return(0,n.createPortal)((0,d.jsx)(l,{onClick:e=>{e.currentTarget===e.target&&t()},children:(0,d.jsx)(a,{children:r})}),s)}}}]);
//# sourceMappingURL=895.bd17e2c0.chunk.js.map