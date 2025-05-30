"use strict";(self.webpackChunktaskero=self.webpackChunktaskero||[]).push([[392],{3367:(e,r,t)=>{t.d(r,{A:()=>s});var o=t(2998),n=t(5464);const i=n.Ay.div`
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
`;var d=t(579);const s=e=>{let{members:r,maxVisible:t=4,size:n=28}=e;const s=r.slice(0,t),c=r.length-t;return(0,d.jsxs)(i,{children:[s.map(((e,r)=>{var t;return(0,d.jsx)(l,{index:r,children:(0,d.jsx)(o.A,{src:null!==(t=e.avatar)&&void 0!==t&&t.startsWith("http")?e.avatar:`https:${e.avatar}`,size:n})},e._id)})),c>0&&(0,d.jsx)(l,{index:t,children:(0,d.jsxs)(a,{size:n,children:["+",c]})})]})}},5735:(e,r,t)=>{t.d(r,{l:()=>o});const o=(0,t(5043).createContext)(null)},7142:(e,r,t)=>{t.d(r,{A:()=>M});var o=t(5043),n=t(4961),i=t(2115),l=t(5464),a=t(9867),d=t(7201),s=t(3289),c=t(7711),p=t(551);const m=l.Ay.div`
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
`,x=l.Ay.button`
  margin-left: 6px;
  border: none;
  background: none;
  color: ${e=>{let{theme:r}=e;return r.danger}};
  font-weight: bold;
  cursor: pointer;
  line-height: 1;
`,h=l.Ay.input`
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
`;var b=t(579);const g=e=>{let{pending:r,onPendingChange:t,placeholder:l}=e;const[a,d]=(0,o.useState)(""),{t:s}=(0,n.B)();return(0,b.jsxs)(m,{children:[r.map((e=>(0,b.jsxs)(u,{children:[e,(0,b.jsx)(x,{onClick:()=>{return o=e,void t(r.filter((e=>e!==o)));var o},children:"\xd7"})]},e))),(0,b.jsx)(h,{type:"text",value:a,onChange:e=>d(e.target.value),onKeyDown:e=>{if(["Enter","Tab",","].includes(e.key)){e.preventDefault();const o=a.trim().replace(/,+$/,"");if(!o)return;if(!(e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e))(o))return void i.oR.error(s("Forms.common.invalidEmail"));if(r.includes(o))return i.oR.info(s("Forms.common.alreadyInPending")),void d("");t([...r,o]),d("")}},placeholder:l})]})},f=l.Ay.div`
  max-height: 240px;
  overflow-y: auto;
  border: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
  border-radius: 4px;
`,y=l.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 12px;
  padding: 12px 16px;
  font-size: 15px;
  border-bottom: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
  background-color: ${e=>{let{theme:r}=e;return r.cardBackground}};

  &:last-child {
    border-bottom: none;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,v=l.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
`,w=l.Ay.img`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  flex-shrink: 0;
  object-fit: cover;
`,$=l.Ay.div`
  width: 40px;
  height: 40px;
  border-radius: 4px;
  background-color: #cccccc;
  flex-shrink: 0;
`,k=l.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`,j=l.Ay.div`
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
`,A=l.Ay.div`
  font-size: 14px;
  color: ${e=>{let{theme:r}=e;return r.secondaryText}};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,C=l.Ay.span`
  font-size: 12px;
  background-color: ${e=>{let{color:r}=e;return r}};
  color: ${e=>{let{theme:r}=e;return r.roleTextColor}};
  padding: 2px 6px;
  border-radius: 4px;
  white-space: nowrap;
`,z=l.Ay.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  flex-shrink: 0;
`,T=l.Ay.div`
  display: flex;
  width: 150px;
`,F=l.Ay.button`
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
`,M=e=>{let{value:r,users:t,onChange:m,withActions:u=!0,editableRoles:x=!1,availableRoles:h=["member","editor","viewer"],viewMode:M=!1}=e;const L=(0,a.jL)(),R=(0,a.GV)(s.mB),[E,B]=(0,o.useState)([]),[S,N]=(0,o.useState)([]),{t:P}=(0,n.B)(),_=(0,l.DP)(),H={owner:_.roleOwner,editor:_.roleEditor,viewer:_.roleViewer,member:_.roleMember,new:_.roleNew},D=()=>t.length?(0,b.jsx)(f,{children:t.map((e=>(0,b.jsxs)(y,{children:[e.avatar?(0,b.jsx)(w,{src:e.avatar,alt:e.name}):(0,b.jsx)($,{}),(0,b.jsxs)(k,{children:[(0,b.jsx)(j,{children:e.name}),(0,b.jsx)(A,{children:e.email})]}),u&&(0,b.jsx)(F,{type:"button",onClick:()=>(e=>{const r=t.filter((r=>r.email.toLowerCase()!==e.toLowerCase()));m(r)})(e.email),children:P("Forms.common.remove")})]},e._id)))}):null;if(!r||!Array.isArray(r)&&M)return D();const G="object"===typeof(null===r||void 0===r?void 0:r[0])&&null!==r[0],O=e=>"string"===typeof e?e:e.email,X=r.map((e=>{const r=O(e),o=(e=>{if("object"===typeof e)return e.role;const r=t.find((r=>r.email===e))||S.find((r=>r.email===e));return(null===r||void 0===r?void 0:r.role)||"member"})(e),n=t.find((e=>e.email===r))||S.find((e=>e.email===r)),i="new"===(null===n||void 0===n?void 0:n.role);return{...n||{_id:r,name:r.split("@")[0],email:r},role:o,displayRole:i?"new":o}})),I=async()=>{if(0===E.length)return void i.oR.info(P("Forms.common.nobodyToAdd"));const e=r.map(O),o=E.filter((r=>!e.includes(r)));if(0===o.length)return i.oR.info(P("Forms.common.allAlreadyAdded")),void B([]);try{const e=await L((0,d.AX)(o)).unwrap(),n=e.map((e=>e.email)),l=o.filter((e=>!n.includes(e)));l.length>0&&i.oR.warn(P("Forms.common.someUsersNotFound",{count:l.length,all:o.length}));const a=e.map((e=>({...e,role:"new"})));N((e=>[...e,...a]));const s=G?e.map((e=>{const r=t.find((r=>r.email===e.email))||S.find((r=>r.email===e.email)),o=null!==r&&void 0!==r&&r.role&&"new"!==r.role?r.role:"viewer";return{email:e.email,role:o}})):e.map((e=>e.email));m([...r,...s]),B([])}catch(n){i.oR.error(P("Forms.common.fetchUsersFailed"))}};return(0,b.jsxs)(b.Fragment,{children:[(()=>{const e=x&&h.length>1;return(0,b.jsx)(f,{children:X.map((t=>(0,b.jsxs)(y,{children:[(0,b.jsxs)(v,{children:[t.avatar?(0,b.jsx)(w,{src:t.avatar,alt:t.name}):(0,b.jsx)($,{}),(0,b.jsxs)(k,{children:[(0,b.jsxs)(j,{children:[t.name,t.displayRole&&(0,b.jsx)(C,{color:H[t.displayRole],children:P(`Common.roles.${t.displayRole}`)})]}),(0,b.jsx)(A,{children:t.email})]})]}),u&&t._id!==(null===R||void 0===R?void 0:R._id)&&(0,b.jsxs)(z,{children:[G&&e&&(0,b.jsx)(T,{children:(0,b.jsx)(p.A,{options:h,value:t.role,onChange:e=>((e,t)=>{if(!G)return;const o=r.map((r=>r.email===e?{...r,role:t}:r));m(o)})(t.email,e),getLabel:e=>P(`Common.roles.${e}`),getKey:e=>null!==e&&void 0!==e?e:""})}),(0,b.jsx)(F,{type:"button",onClick:()=>(e=>{const t=r.filter((r=>O(r).toLowerCase()!==e.toLowerCase()));m(t)})(t.email),children:P("Forms.common.remove")})]})]},t._id)))})})(),u&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("label",{children:P("Forms.common.addMembers")}),(0,b.jsx)(g,{pending:E,onPendingChange:B,placeholder:P("Forms.common.addMembersPlaceholder")}),(0,b.jsx)(c.GX,{type:"button",onClick:I,children:P("Forms.common.addMembers")})]})]})}},7606:(e,r,t)=>{t.d(r,{R:()=>l});t(9593);var o=t(5043),n=t(3892),i=t(5735);const l=()=>{const e=(0,o.useContext)(i.l),{isSubmitting:r}=(0,n.j7)();return(0,o.useEffect)((()=>{null===e||void 0===e||e.setModalSubmitting(r)}),[r,e]),null}},7711:(e,r,t)=>{t.d(r,{A0:()=>d,GX:()=>g,Gg:()=>u,JU:()=>s,K_:()=>m,N3:()=>y,TM:()=>$,ZD:()=>x,b7:()=>b,mO:()=>l,oX:()=>w,oi:()=>p,pd:()=>c,q:()=>a,ql:()=>h,sF:()=>f,yn:()=>v});var o=t(5464),n=t(3892),i=t(5180);const l=o.Ay.div`
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
`,h=(0,o.Ay)(i.N_)`
  font-size: 14px;
  color: ${e=>{let{theme:r}=e;return r.primary}};
  transition: color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.primaryHover}};
  }
`,b=o.Ay.button`
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
`,g=o.Ay.button`
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
`,y=o.Ay.button`
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
`},7784:(e,r,t)=>{t.d(r,{A:()=>k});var o,n,i=t(5043),l=t(4961),a=t(5464),d=t(2246),s=t(5735),c=t(7711);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)({}).hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},p.apply(null,arguments)}function m(e,r){let{title:t,titleId:l,...a}=e;return i.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",ref:r,"aria-labelledby":l},a),t?i.createElement("title",{id:l},t):null,o||(o=i.createElement("path",{d:"M18 6L6 18",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),n||(n=i.createElement("path",{d:"M6 6L18 18",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))}const u=i.forwardRef(m),x=(t.p,a.Ay.div`
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
`,b=a.Ay.button`
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
`,g=(0,a.Ay)(u)`
  stroke: ${e=>{let{theme:r}=e;return r.modalCloseIconColor}};
  width: 24px;
  height: 24px;
  transition: stroke ${e=>{let{theme:r}=e;return r.animation}},
    scale ${e=>{let{theme:r}=e;return r.animation}};
`,f=a.Ay.h2`
  font-size: 24px;
  font-weight: 700;
`,y=a.Ay.div`
  padding: 24px;
  overflow: auto;
`,v=a.Ay.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 24px;
  border-top: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`,w=a.Ay.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 8px;

  @media screen and (max-width: 768px) {
    width: 100%;
    & button {
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-left: auto;
  }
`;var $=t(579);const k=e=>{let{handlerCloseModal:r,title:t,formName:o,deleteAction:n,withActions:p=!0,children:m}=e;const[u,k]=(0,i.useState)(!1),j=(0,i.useMemo)((()=>({setModalSubmitting:k})),[]),{t:A}=(0,l.B)(),C=(0,a.DP)();return(0,$.jsx)(s.l.Provider,{value:j,children:(0,$.jsxs)(x,{children:[(0,$.jsxs)(h,{children:[(0,$.jsx)(f,{children:t}),(0,$.jsx)(b,{onClick:r,children:(0,$.jsx)(g,{})})]}),(0,$.jsx)(y,{children:m}),p&&(0,$.jsxs)(v,{children:[n&&(0,$.jsx)(c.N3,{type:"button",onClick:()=>n(),children:A("Modals.common.delete")}),(0,$.jsxs)(w,{children:[(0,$.jsx)(c.sF,{type:"button",onClick:r,children:A("Modals.common.cancel")}),(0,$.jsxs)(c.GX,{type:"submit",form:o,disabled:u,children:[(0,$.jsx)("span",{className:"btn-text",children:A("Modals.common.save")}),u&&(0,$.jsx)("div",{className:"btn-loader",children:(0,$.jsx)(d.A,{size:"16px",color:C.buttonText})})]})]})]})]})})}},9593:(e,r,t)=>{t.d(r,{A:()=>c});var o=t(5043),n=t(7950),i=t(5464);const l=i.Ay.div`
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
  display: flex;
  width: 100%;
  max-width: 800px;
  min-width: 200px;
  max-height: calc(100vh - 48px);
  background-color: ${e=>{let{theme:r}=e;return r.background}};
  border: ${e=>{let{theme:r}=e;return r.modalBorder}};
  border-radius: 8px;

  box-shadow: ${e=>{let{theme:r}=e;return r.shadow}};
`;var d=t(579);const s=document.querySelector("#modal-root"),c=e=>{let{children:r,handlerCloseModal:t}=e;const i=(0,o.useCallback)((e=>{"Escape"===e.code&&t()}),[t]);(0,o.useEffect)((()=>(window.addEventListener("keydown",i),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",i),document.body.style.overflow="auto"})),[i]);return(0,n.createPortal)((0,d.jsx)(l,{onClick:e=>{e.currentTarget===e.target&&t()},children:(0,d.jsx)(a,{children:r})}),s)}}}]);
//# sourceMappingURL=392.9b7289a7.chunk.js.map