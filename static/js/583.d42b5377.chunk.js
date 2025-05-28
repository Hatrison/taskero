"use strict";(self.webpackChunktaskero=self.webpackChunktaskero||[]).push([[583],{988:(e,t,r)=>{r.d(t,{hX:()=>i,pU:()=>o,ph:()=>n});const i=e=>e.projects.items,n=e=>e.projects.current,o=e=>e.projects.loading},3583:(e,t,r)=>{r.r(t),r.d(t,{default:()=>yt});var i=r(5043),n=r(5180),o=r(4961),s=r(2115),l=r(9867),a=r(3289),d=r(9006),c=r(988);const h=e=>e.columns.items,m=e=>e.tasks.items;var p=r(5939),u=r(9593),x=r(7784),j=r(3892),g=r(7142),f=r(7606),y=r(7711),b=r(5464);const v=b.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 295px;
`;var w=r(899);const A=w.Ik().shape({members:w.YO().of(w.Ik().shape({email:w.Yj().email().required(),role:w.Yj().oneOf(["owner","editor","viewer"]).required()})).min(1).required()});var k=r(579);const $=e=>{let{handlerCloseModal:t,formName:r,projectId:i,withActions:n=!0}=e;const a=(0,l.jL)(),h=(0,l.GV)(c.ph),{t:m}=(0,o.B)();if(!h)return(0,k.jsx)(v,{children:(0,k.jsx)(p.A,{size:"60px",color:"#3e85f3"})});const u={members:h.members.map((e=>({email:e.user.email,role:e.role})))},x=h.members.map((e=>({...e.user,role:e.role})));return(0,k.jsx)(j.l1,{enableReinitialize:!0,initialValues:u,validationSchema:A,onSubmit:async e=>{try{await a((0,d.K4)({id:i,members:e.members})).unwrap(),s.oR.success(m("Forms.editProjectMembers.success")),t()}catch(r){s.oR.error(`${m("Forms.editProjectMembers.failed")}: ${r instanceof Error?r.message:String(r)}`)}},children:e=>{let{values:t,setFieldValue:i}=e;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(f.R,{}),(0,k.jsx)(y.q,{id:r,children:(0,k.jsx)(g.A,{value:t.members,users:x,onChange:e=>i("members",e),withActions:n,editableRoles:!0,availableRoles:["owner","editor","viewer"]})})]})}})},C=e=>{let{handlerCloseModal:t,projectId:r,withActions:i=!0}=e;const{t:n}=(0,o.B)(),s="edit-project-members-form";return(0,k.jsx)(u.A,{handlerCloseModal:t,children:(0,k.jsx)(x.A,{handlerCloseModal:t,title:n("Modals.editProjectMembers.title"),formName:s,withActions:i,children:(0,k.jsx)($,{handlerCloseModal:t,formName:s,projectId:r,withActions:i})})})},T=w.Ik({name:w.Yj().min(2).max(100).required("Required"),description:w.Yj().max(1e3),deadline:w.p6().nullable()}),F=b.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 295px;
`,S=e=>{let{handlerCloseModal:t,formName:r,withActions:i=!0}=e;const n=(0,l.jL)(),a=(0,l.GV)(c.ph),{t:h}=(0,o.B)();if(!a)return(0,k.jsx)(F,{children:(0,k.jsx)(p.A,{size:"60px",color:"#3e85f3"})});const m={name:a.name||"",description:a.description||"",deadline:a.deadline?a.deadline.slice(0,10):""};return(0,k.jsx)(j.l1,{initialValues:m,validationSchema:T,onSubmit:async e=>{try{await n((0,d.vr)({id:a._id,payload:e})).unwrap(),s.oR.success(h("Forms.editProject.success")),t()}catch(r){s.oR.error(`${h("Forms.editProject.failed")}: ${r instanceof Error?r.message:String(r)}`)}},children:e=>{let{values:t,errors:n,touched:o,handleChange:s,handleBlur:l}=e;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(f.R,{}),(0,k.jsxs)(y.q,{id:r,children:[(0,k.jsxs)(y.A0,{children:[(0,k.jsx)(y.JU,{children:h("Forms.editProject.name")}),(0,k.jsx)(y.pd,{name:"name",placeholder:h("Forms.editProject.namePlaceholder"),$hasError:o.name&&!!n.name,disabled:!i}),o.name&&n.name&&(0,k.jsx)(y.yn,{children:n.name})]}),(0,k.jsxs)(y.A0,{children:[(0,k.jsx)(y.JU,{children:h("Forms.editProject.description")}),(0,k.jsx)(y.TM,{name:"description",placeholder:h("Forms.editProject.descriptionPlaceholder"),value:t.description,onChange:s,onBlur:l,$hasError:o.description&&!!n.description,disabled:!i}),o.description&&n.description&&(0,k.jsx)(y.yn,{children:n.description})]}),(0,k.jsxs)(y.A0,{children:[(0,k.jsx)(y.JU,{children:h("Forms.editProject.deadline")}),(0,k.jsx)(y.pd,{name:"deadline",type:"date",disabled:!i})]})]})]})}})},R=e=>{let{handlerCloseModal:t,deleteAction:r=()=>{},withActions:i=!0}=e;const{t:n}=(0,o.B)(),s="edit-project-form";return(0,k.jsx)(u.A,{handlerCloseModal:t,children:(0,k.jsx)(x.A,{handlerCloseModal:t,title:n("Modals.editProject.title"),formName:s,deleteAction:r,withActions:i,children:(0,k.jsx)(S,{handlerCloseModal:t,formName:s,withActions:i})})})};var E=r(3875),M=r(279),P=r(2998);const _=b.Ay.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  padding: 2px 16px 12px 16px;
  background-color: ${e=>{let{theme:t}=e;return t.background}};
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.borderColor}};

  & div {
    align-self: center;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 24px;
    padding: 8px 16px;
    height: 56px;
  }
`,z=b.Ay.h1`
  position: absolute;
  top: 21%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font-weight: 700;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};

  max-width: 220px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (min-width: 420px) {
    max-width: 250px;
  }

  @media (min-width: 768px) {
    top: 50%;
  }

  @media (min-width: 900px) {
    max-width: 300px;
  }

  @media (min-width: 1280px) {
    max-width: 50%;
  }
`,I=(0,b.Ay)(n.N_)`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 16px;
  background: none;
  border: none;
  font-weight: 500;
  padding: 10px;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
  cursor: pointer;
  transition: color ${e=>{let{theme:t}=e;return t.animation}};

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.primary}};
  }
`,B=b.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
`,L=b.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>{let{theme:t}=e;return t.backgroundSecondary}};
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  transition: color ${e=>{let{theme:t}=e;return t.animation}};

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.primary}};
  }
`;var D=r(184),U=r(5200),V=r(3538),q=r(9657);const O=e=>{let{name:t,avatar:r,toggleMembersModal:i,toggleSettingsModal:s}=e;const{t:l}=(0,o.B)(),a=(0,q.Ub)({query:"(max-width: 768px)"});return(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(_,{children:[(0,k.jsxs)(I,{to:"/",children:[(0,k.jsx)(D._Jj,{size:16})," ",!a&&l("Project.backToProjects")]}),(0,k.jsx)(z,{children:t}),(0,k.jsxs)(B,{children:[(0,k.jsx)(E.A,{}),(0,k.jsx)(M.A,{}),(0,k.jsx)(L,{type:"button",onClick:()=>i(),children:(0,k.jsx)(V.Sy$,{size:20})}),(0,k.jsx)(L,{type:"button",onClick:()=>s(),children:(0,k.jsx)(U.VSk,{size:20})}),(0,k.jsx)(n.N_,{to:"/account",children:(0,k.jsx)(P.A,{src:r,size:36})})]})]})})},Y=b.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`,J=b.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${e=>{let{theme:t}=e;return t.background}};
`,N=b.Ay.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  background-color: ${e=>{let{theme:t}=e;return t.background}};
  overflow: hidden;
`;var G=r(9581),H=r(26),X=r(3367),K=r(551),W=r(7950),Z=r(3903);const Q=b.Ay.input`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.borderColor}};
  border-radius: 4px;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
  background-color: ${e=>{let{theme:t}=e;return t.cardBackground}};
  outline: none;
  transition: border-color ${e=>{let{theme:t}=e;return t.animation}};

  &::placeholder {
    color: ${e=>{let{theme:t}=e;return t.secondaryText}};
  }

  &:focus {
    border-color: ${e=>{let{theme:t}=e;return t.primary}};
  }
`,ee=e=>{let{value:t,onChange:r,placeholder:n="Search...",withActions:a=!1}=e;const h=(0,l.jL)(),m=(0,l.GV)(c.ph),[p,u]=(0,i.useState)(""),[x,j]=(0,i.useState)([]),[f,y]=(0,i.useState)(!1),[b,v]=(0,i.useState)({top:0,left:0,width:0}),w=(0,i.useRef)(null),A=(0,i.useRef)(null),$=(0,i.useRef)(0),{t:C}=(0,o.B)();(0,i.useEffect)((()=>{if(p.trim()&&null!==m&&void 0!==m&&m._id)return $.current&&clearTimeout($.current),$.current=window.setTimeout((async()=>{try{const e=await h((0,d.RY)({projectId:m._id,query:p})).unwrap();j(e),y(!0)}catch(e){s.oR.error(`${C("Forms.createTask.searchFailed")}: ${e instanceof Error?e.message:String(e)}`),j([])}}),400),()=>clearTimeout($.current);j([])}),[p,m,h,C]),(0,i.useEffect)((()=>{if(w.current){const e=w.current.getBoundingClientRect();v({top:e.bottom+4,left:e.left,width:e.width})}}),[f,x]),(0,i.useEffect)((()=>{const e=e=>{var t,r;const i=e.target;null!==(t=w.current)&&void 0!==t&&t.contains(i)||null!==(r=A.current)&&void 0!==r&&r.contains(i)||y(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)}),[]);return(0,k.jsxs)(k.Fragment,{children:[a&&(0,k.jsxs)(Z.mO,{children:[(0,k.jsx)(Q,{ref:w,value:p,placeholder:n,onChange:e=>u(e.target.value),onFocus:()=>x.length&&y(!0)}),f&&(0,W.createPortal)((0,k.jsx)(Z.ms,{ref:A,$top:b.top,$left:b.left,$width:b.width,children:x.map((e=>(0,k.jsxs)(Z.c$,{onClick:()=>(e=>{t.find((t=>t._id===e._id))||r([...t,e]),u(""),j([]),y(!1)})(e),children:[e.name," (",e.email,")"]},e._id)))}),document.body)]}),(0,k.jsx)(g.A,{users:t,withActions:a,onChange:e=>r(e),viewMode:!0})]})};var te=r(3825);const re=b.Ay.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`,ie=b.Ay.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  overflow: hidden;
`,ne=document.getElementById("modal-root"),oe=e=>{let{children:t,onClose:r}=e;const n=(0,i.useCallback)((e=>{"Escape"===e.key&&r()}),[r]);(0,i.useEffect)((()=>(document.addEventListener("keydown",n),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",n),document.body.style.overflow=""})),[n]);return W.createPortal((0,k.jsx)(re,{onClick:e=>{e.target===e.currentTarget&&r()},children:(0,k.jsx)(ie,{children:t})}),ne)},se=b.Ay.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,le=b.Ay.img`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
`,ae=b.Ay.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
  border: none;
  border-radius: 50%;
  color: white;
  font-size: 1.5rem;
  width: 36px;
  height: 36px;
  cursor: pointer;
  transition: background ${e=>{let{theme:t}=e;return t.animation}};

  &:hover {
    background: rgba(0, 0, 0, 0.6);
  }

  &:focus {
    outline: none;
  }
`,de=(0,b.Ay)(ae)`
  left: 16px;
`,ce=(0,b.Ay)(ae)`
  right: 16px;
`,he=e=>{let{images:t,startIndex:r,onClose:n}=e;const[o,s]=(0,i.useState)(r),l=(0,i.useCallback)((()=>{s((e=>0===e?t.length-1:e-1))}),[t.length]),a=(0,i.useCallback)((()=>{s((e=>e===t.length-1?0:e+1))}),[t.length]),d=(0,i.useCallback)((e=>{"ArrowLeft"===e.key&&l(),"ArrowRight"===e.key&&a()}),[l,a]);return(0,i.useEffect)((()=>(window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d))),[d]),(0,k.jsx)(oe,{onClose:n,children:(0,k.jsxs)(se,{children:[(0,k.jsx)(de,{type:"button",onClick:l,children:(0,k.jsx)(te.qXl,{size:32})}),(0,k.jsx)(le,{src:t[o],alt:`Image ${o+1}`}),(0,k.jsx)(ce,{type:"button",onClick:a,children:(0,k.jsx)(te.BJp,{size:32})})]})})},me=b.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,pe=b.Ay.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,ue=b.Ay.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`,xe=b.Ay.button`
  position: absolute;
  top: 4px;
  right: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  border: none;
  border-radius: 4px;
  padding: 3px;
  color: white;
  cursor: pointer;
`,je=b.Ay.input`
  display: none;
`,ge=b.Ay.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background-color: ${e=>{let{theme:t,isDragActive:r}=e;return r?t.background:t.backgroundSecondary}};
  color: ${e=>{let{theme:t}=e;return t.secondaryText}};
  border: 2px dashed
    ${e=>{let{theme:t,isDragActive:r}=e;return r?t.primary:t.borderColor}};
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  transition: background-color ${e=>{let{theme:t}=e;return t.animation}},
    border-color ${e=>{let{theme:t}=e;return t.animation}};
`,fe=e=>{let{files:t,editable:r,onChange:n}=e;const s=(0,i.useRef)(null),[l,a]=(0,i.useState)(null),[d,c]=(0,i.useState)(!1),{t:h}=(0,o.B)(),m=(0,i.useCallback)((e=>{const r=Array.from(e).map((e=>({url:URL.createObjectURL(e),file:e})));n([...t,...r])}),[t,n]);return(0,k.jsxs)(me,{children:[(0,k.jsx)(pe,{children:t.map(((e,i)=>(0,k.jsxs)(ue,{onClick:()=>a(i),children:[(0,k.jsx)("img",{src:e.url,alt:`attachment-${i}`}),r&&(0,k.jsx)(xe,{type:"button",onClick:e=>{e.stopPropagation(),(e=>{const r=t.filter(((t,r)=>r!==e));n(r)})(i)},children:(0,k.jsx)(U.yGN,{size:20})})]},i)))}),r&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(je,{ref:s,type:"file",accept:"image/*",multiple:!0,onChange:e=>{if(!e.target.files)return;const r=Array.from(e.target.files).map((e=>({url:URL.createObjectURL(e),file:e})));n([...t,...r]),e.target.value=""}}),(0,k.jsx)(ge,{isDragActive:d,onClick:()=>{var e;return null===(e=s.current)||void 0===e?void 0:e.click()},onDragEnter:e=>{e.preventDefault(),c(!0)},onDragLeave:e=>{e.preventDefault(),c(!1)},onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault(),c(!1),e.dataTransfer.files&&e.dataTransfer.files.length&&m(e.dataTransfer.files)},children:h("Forms.editTask.dragOrClick")})]}),null!==l&&(0,k.jsx)(he,{images:t.map((e=>e.url)),startIndex:l,onClose:()=>a(null)})]})},ye=w.Ik({title:w.Yj().min(2,"Title must be at least 2 characters").max(200,"Title must be at most 200 characters").required(),description:w.Yj().max(2e3,"Description must be at most 2000 characters").nullable(),assignedTo:w.YO().of(w.Ik().required()).optional(),priority:w.Yj().oneOf(["low","medium","high","critical"]).optional(),deadline:w.p6().nullable().optional(),attachments:w.YO().of(w.Ik({url:w.Yj().required(),file:w.gl().notRequired()})).optional()}),be=b.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 295px;
`;var ve=r(7050);const we=w.Ik().shape({text:w.Yj().trim().required("Cannot be empty")}),Ae=b.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`,ke=b.Ay.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 40px;
`,$e=b.Ay.h3`
  font-size: 18px;
`,Ce=b.Ay.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Te=b.Ay.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`,Fe=b.Ay.div`
  flex: 1;
`,Se=b.Ay.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;

  button {
  }
`,Re=b.Ay.div``,Ee=b.Ay.span`
  font-weight: 600;
`,Me=b.Ay.span`
  font-size: 14px;
  color: ${e=>{let{theme:t}=e;return t.secondaryText}};
`,Pe=b.Ay.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,_e=b.Ay.button`
  background: none;
  border: none;
  padding: 4px;
  margin-left: 4px;
  cursor: pointer;
  color: ${e=>{let{theme:t}=e;return t.secondaryText}};
  transition: color ${e=>{let{theme:t}=e;return t.animation}};

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.primary}};
  }

  &.delete:hover {
    color: ${e=>{let{theme:t}=e;return t.danger}};
  }
`,ze=b.Ay.p`
  word-break: break-word;
`,Ie=b.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Be=(0,b.Ay)(y.q)`
  flex-direction: row;
  width: 100%;
`,Le=(0,b.Ay)(y.A0)`
  flex: 1;
`,De=(0,b.Ay)(y.b7)`
  min-width: 70px;
`,Ue=e=>{let{taskId:t,withActions:r=!1}=e;const{t:n}=(0,o.B)(),d=(0,l.jL)(),c=(0,l.GV)((e=>(e=>t=>t.comments.items.filter((t=>t.task===e)))(t)(e))),h=(0,l.GV)(a.AS),[m,u]=(0,i.useState)(!0),[x,g]=(0,i.useState)(null),f=(0,b.DP)();(0,i.useEffect)((()=>{d((0,ve.Re)(t)).catch((e=>{s.oR.error(`${n("Forms.comments.fetchFailed")}: ${e instanceof Error?e.message:String(e)}`)})).finally((()=>{u(!1)}))}),[d,n,t]);const v=(e,t)=>{let{setSubmitting:r}=t;x&&d((0,ve.vv)({id:x,text:e.text})).then((()=>{g(null)})).finally((()=>r(!1)))};return m?(0,k.jsxs)(ke,{children:[(0,k.jsx)($e,{children:n("Forms.comments.title")}),(0,k.jsx)(Ae,{children:(0,k.jsx)(p.A,{size:"40px",color:"#3e85f3"})})]}):(0,k.jsxs)(ke,{children:[(0,k.jsx)($e,{children:n("Forms.comments.title")}),(0,k.jsx)(Ce,{children:c.map((e=>{const t=e.user.email===h;return(0,k.jsxs)(Te,{children:[(0,k.jsx)(P.A,{src:e.user.avatar||"",alt:e.user.name}),(0,k.jsxs)(Fe,{children:[(0,k.jsxs)(Se,{children:[(0,k.jsxs)(Re,{children:[(0,k.jsx)(Ee,{children:e.user.name})," ",(0,k.jsx)(Me,{children:new Date(e.createdAt).toLocaleString()})]}),r&&t&&(0,k.jsxs)(Pe,{children:[(0,k.jsx)(_e,{onClick:()=>{return t=e._id,void g((e=>e===t?null:t));var t},children:(0,k.jsx)(U.WXf,{size:16})}),(0,k.jsx)(_e,{className:"delete",onClick:()=>d((0,ve.Tu)(e._id)),children:(0,k.jsx)(U.IXo,{size:16})})]})]}),x===e._id?(0,k.jsx)(j.l1,{initialValues:{text:e.text},validationSchema:we,onSubmit:v,children:e=>{let{errors:t,isSubmitting:r}=e;return(0,k.jsxs)(Ie,{children:[(0,k.jsxs)(Be,{children:[(0,k.jsx)(Le,{children:(0,k.jsx)(y.pd,{name:"text",placeholder:n("Forms.comments.editPlaceholder"),$hasError:Boolean(t.text),autoFocus:!0})}),(0,k.jsx)(De,{type:"submit",disabled:r,children:r?(0,k.jsx)(p.A,{size:"16px",color:f.buttonText}):n("Forms.comments.save")})]}),(0,k.jsx)(y.yn,{children:t.text})]})}}):(0,k.jsx)(ze,{children:e.text})]})]},e._id)}))}),r&&(0,k.jsx)(j.l1,{initialValues:{text:""},validationSchema:we,onSubmit:(e,r)=>{let{resetForm:i,setSubmitting:n}=r;d((0,ve.eT)({task:t,text:e.text})).then((()=>{i()})).finally((()=>n(!1)))},children:e=>{let{errors:t,isSubmitting:r}=e;return(0,k.jsxs)(Ie,{children:[(0,k.jsxs)(Be,{children:[(0,k.jsx)(Le,{children:(0,k.jsx)(y.pd,{name:"text",placeholder:n("Forms.comments.addPlaceholder"),$hasError:Boolean(t.text)})}),(0,k.jsx)(De,{type:"submit",disabled:r,children:r?(0,k.jsx)(p.A,{size:"16px",color:f.buttonText}):n("Forms.comments.post")})]}),(0,k.jsx)(y.yn,{children:t.text})]})}})]})},Ve=e=>{var t;let{task:r,handlerCloseModal:i,formName:n,withActions:a=!0}=e;const d=(0,l.jL)(),{t:c}=(0,o.B)(),h={title:r.title||"",description:r.description||"",column:r.column||"",priority:r.priority||"medium",assignedTo:r.assignedTo||[],deadline:(null===(t=r.deadline)||void 0===t?void 0:t.slice(0,10))||"",attachments:(r.attachments||[]).map((e=>({url:e})))},m={low:"#4CAF50",medium:"#FF9800",high:"#F44336",critical:"#9C27B0"};return r?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(j.l1,{initialValues:h,validationSchema:ye,onSubmit:async e=>{try{const t=new FormData;t.append("title",e.title),t.append("description",e.description||""),t.append("priority",e.priority),t.append("deadline",e.deadline||"");const n=e.assignedTo.map((e=>e._id));t.append("assignedTo",JSON.stringify(n));const o=e.attachments.filter((e=>!e.file)).map((e=>e.url));t.append("attachments",JSON.stringify(o)),e.attachments.filter((e=>e.file)).forEach((e=>{t.append("files",e.file)})),await d((0,H.lC)({id:r._id,formData:t})).unwrap(),s.oR.success(c("Forms.editTask.success")),i()}catch(t){s.oR.error(`${c("Forms.editTask.failed")}: ${t instanceof Error?t.message:String(t)}`)}},enableReinitialize:!0,children:e=>{let{values:t,errors:r,touched:i,handleChange:o,handleBlur:s,setFieldValue:l}=e;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(f.R,{}),(0,k.jsxs)(y.q,{id:n,children:[(0,k.jsxs)(y.A0,{children:[(0,k.jsx)(y.JU,{children:c("Forms.editTask.title")}),(0,k.jsx)(y.pd,{name:"title",placeholder:c("Forms.editTask.titlePlaceholder"),$hasError:i.title&&!!r.title,disabled:!a}),i.title&&r.title&&(0,k.jsx)(y.yn,{children:r.title})]}),(0,k.jsxs)(y.A0,{children:[(0,k.jsx)(y.JU,{children:c("Forms.editTask.description")}),(0,k.jsx)(y.TM,{name:"description",placeholder:c("Forms.editTask.descriptionPlaceholder"),value:t.description,onChange:o,onBlur:s,$hasError:i.description&&!!r.description,disabled:!a}),i.description&&r.description&&(0,k.jsx)(y.yn,{children:r.description})]}),(0,k.jsxs)(y.A0,{children:[(0,k.jsx)(y.JU,{children:c("Forms.editTask.priority")}),(0,k.jsx)(K.A,{options:["low","medium","high","critical"],value:t.priority,onChange:e=>l("priority",e),getLabel:e=>c(`Common.priority.${e}`),getKey:e=>e,getColor:e=>m[e],placeholder:c("Forms.editTask.priority"),disabled:!a})]}),(0,k.jsxs)(y.A0,{children:[(0,k.jsx)(y.JU,{children:c("Forms.editTask.assignedTo")}),(0,k.jsx)(ee,{value:t.assignedTo,onChange:e=>l("assignedTo",e),placeholder:c("Forms.editTask.assigneePlaceholder"),withActions:a})]}),(0,k.jsxs)(y.A0,{children:[(0,k.jsx)(y.JU,{children:c("Forms.editTask.deadline")}),(0,k.jsx)(y.pd,{name:"deadline",type:"date",value:t.deadline,onChange:o,onBlur:s,disabled:!a})]}),(0,k.jsxs)(y.A0,{children:[(0,k.jsx)(y.JU,{children:c("Forms.editTask.attachments")}),(0,k.jsx)(fe,{files:t.attachments,editable:a,onChange:e=>l("attachments",e)})]})]})]})}}),(0,k.jsx)(Ue,{taskId:r._id,withActions:a})]}):(0,k.jsx)(be,{children:(0,k.jsx)(p.A,{size:"60px",color:"#3e85f3"})})},qe=e=>{let{task:t,handlerCloseModal:r,deleteAction:i=()=>{},withActions:n=!0}=e;const{t:s}=(0,o.B)(),l="edit-task-form";return(0,k.jsx)(u.A,{handlerCloseModal:r,children:(0,k.jsx)(x.A,{handlerCloseModal:r,title:s("Modals.editTask.title"),formName:l,deleteAction:i,withActions:n,children:(0,k.jsx)(Ve,{task:t,handlerCloseModal:r,formName:l,withActions:n})})})},Oe={low:"priorityLow",medium:"priorityMedium",high:"priorityHigh",critical:"priorityCritical"},Ye={low:"priorityTextLow",medium:"priorityTextMedium",high:"priorityTextHigh",critical:"priorityTextCritical"},Je=b.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background-color: ${e=>{let{theme:t}=e;return t.background}};
  border-radius: 4px;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadow}};
`,Ne=b.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
`,Ge=b.Ay.h3`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
`,He=b.Ay.span`
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  color: ${e=>{let{theme:t,$priority:r}=e;return t[Ye[r]]}};
  background-color: ${e=>{let{theme:t,$priority:r}=e;return t[Oe[r]]}};
`,Xe=b.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Ke=b.Ay.span`
  font-size: 14px;
  color: ${e=>{let{theme:t}=e;return t.secondaryText}};
`,We=e=>{let{task:t,withActions:r=!1}=e;const{title:n,deadline:a,priority:d,assignedTo:c}=t,h=(0,l.jL)(),[m,p]=(0,i.useState)(!1),{t:u}=(0,o.B)(),x=()=>{p((e=>!e))};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(Je,{onClick:x,children:[(0,k.jsxs)(Ne,{children:[(0,k.jsx)(Ge,{children:n}),(0,k.jsx)(He,{$priority:d,children:(j=d,j.charAt(0).toUpperCase()+j.slice(1))})]}),(0,k.jsxs)(Xe,{children:[(0,k.jsx)(X.A,{members:c}),a&&(0,k.jsx)(Ke,{children:null===a||void 0===a?void 0:a.slice(0,10)})]})]}),m&&(0,k.jsx)(qe,{task:t,handlerCloseModal:x,deleteAction:async()=>{if(null!==t&&void 0!==t&&t._id)try{await h((0,H.vq)(t._id)),s.oR.success(u("Forms.deleteTask.success"))}catch(e){s.oR.error(`${u("Forms.deleteTask.failed")}: ${e instanceof Error?e.message:String(e)}`)}},withActions:r})]});var j},Ze=w.Ik({title:w.Yj().min(2).max(200).required(),description:w.Yj().max(2e3).nullable(),assignedTo:w.YO().of(w.Yj()),priority:w.gl().oneOf(["low","medium","high","critical"]).default("medium"),deadline:w.p6().nullable()}),Qe={title:"",description:"",deadline:"",priority:"medium"},et=e=>{let{handlerCloseModal:t,formName:r,columnId:n}=e;const a=(0,l.jL)(),d=(0,l.GV)(c.ph),[h,m]=(0,i.useState)([]),{t:p}=(0,o.B)(),u=(0,b.DP)(),x={low:u.priorityTextLow,medium:u.priorityTextMedium,high:u.priorityTextHigh,critical:u.priorityTextCritical};return(0,k.jsx)(j.l1,{initialValues:Qe,validationSchema:Ze,onSubmit:async e=>{if(null===d||void 0===d||!d._id||!n)return void s.oR.error(p("Forms.createTask.failed"));const r={...e,project:d._id,column:n,assignedTo:h.map((e=>e._id)),priority:e.priority};try{await a((0,H.UT)(r)).unwrap(),s.oR.success(p("Forms.createTask.success")),t()}catch(i){s.oR.error(`${p("Forms.createTask.failed")}: ${i instanceof Error?i.message:String(i)}`)}},children:e=>{let{values:t,errors:i,touched:n,handleChange:o,handleBlur:s}=e;return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(f.R,{}),(0,k.jsxs)(y.q,{id:r,children:[(0,k.jsxs)(y.A0,{children:[(0,k.jsx)(y.JU,{children:p("Forms.createTask.title")}),(0,k.jsx)(y.pd,{name:"title",placeholder:p("Forms.createTask.titlePlaceholder"),$hasError:n.title&&!!i.title}),n.title&&i.title&&(0,k.jsx)(y.yn,{children:i.title})]}),(0,k.jsxs)(y.A0,{children:[(0,k.jsx)(y.JU,{children:p("Forms.createTask.description")}),(0,k.jsx)(y.TM,{name:"description",placeholder:p("Forms.createTask.descriptionPlaceholder"),value:t.description,onChange:o,onBlur:s,$hasError:n.description&&!!i.description}),n.description&&i.description&&(0,k.jsx)(y.yn,{children:i.description})]}),(0,k.jsxs)(y.A0,{children:[(0,k.jsx)(y.JU,{children:p("Forms.createTask.deadline")}),(0,k.jsx)(y.pd,{name:"deadline",type:"date"})]}),(0,k.jsxs)(y.A0,{children:[(0,k.jsx)(y.JU,{children:p("Forms.createTask.priority")}),(0,k.jsx)(K.A,{options:["low","medium","high","critical"],value:t.priority,onChange:e=>{o({target:{name:"priority",value:e}})},getLabel:e=>p(`Common.priority.${e}`),getKey:e=>e,getColor:e=>x[e],placeholder:p("Forms.createTask.priority")})]}),(0,k.jsxs)(y.A0,{children:[(0,k.jsx)(y.JU,{children:p("Forms.createTask.assignedTo")}),(0,k.jsx)(ee,{value:h,onChange:m,placeholder:p("Forms.createTask.assigneePlaceholder"),withActions:!0})]})]})]})}})},tt=e=>{let{handlerCloseModal:t,columnId:r}=e;const{t:i}=(0,o.B)(),n="create-task-form";return(0,k.jsx)(u.A,{handlerCloseModal:t,children:(0,k.jsx)(x.A,{handlerCloseModal:t,title:i("Modals.createTask.title"),formName:n,children:(0,k.jsx)(et,{handlerCloseModal:t,formName:n,columnId:r})})})};var rt=r(8892);const it=b.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 290px;
  height: 100%;
  padding: ${e=>{let{isEmpty:t}=e;return t?"0":"16px"}};
  color: ${e=>{let{theme:t}=e;return t.secondaryText}};
  background-color: ${e=>{let{theme:t}=e;return t.backgroundSecondary}};
  border: 2px dashed ${e=>{let{theme:t}=e;return t.borderColor}};
  border-radius: 8px;
  cursor: default;
`,nt=b.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 290px;
  height: 100%;
  padding: 16px;
  font-size: 16px;
  text-align: center;
  cursor: ${e=>{let{loading:t}=e;return t?"default":"pointer"}};
`,ot=b.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background-color: transparent;
  color: ${e=>{let{theme:t}=e;return t.secondaryText}};
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  transition: color ${e=>{let{theme:t}=e;return t.animation}};

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.primary}};
  }
`,st=b.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,lt=b.Ay.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
  word-break: break-word;
  overflow-wrap: break-word;
`,at=b.Ay.input`
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  background-color: transparent;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
  border: none;
  padding: 0px;

  &:focus {
    outline: none;
  }
`,dt=b.Ay.div`
  display: flex;
  gap: 4px;
`,ct=b.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  transition: color ${e=>{let{theme:t}=e;return t.animation}};

  &:hover {
    color: ${e=>{let{hoverColor:t,theme:r}=e;return t||r.primary}};
  }
`,ht=b.Ay.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  gap: 8px;
  overflow-y: auto;
  min-height: 100px;
`,mt={critical:3,high:2,medium:1,low:0},pt=e=>{let{column:t,isEmpty:r,withActions:n,isEditable:a=!1,onClickEmpty:d}=e;const c=(0,l.jL)(),[h,m]=(0,i.useState)(!1),[u,x]=(0,i.useState)((null===t||void 0===t?void 0:t.name)||""),[j,g]=(0,i.useState)(!1),{t:f}=(0,o.B)(),y=(0,b.DP)(),v=(0,i.useMemo)((()=>null!==t&&void 0!==t&&t.tasks?[...t.tasks].sort(((e,t)=>{var r,i;const n=null!==(r=mt[e.priority])&&void 0!==r?r:0;return(null!==(i=mt[t.priority])&&void 0!==i?i:0)-n})):[]),[null===t||void 0===t?void 0:t.tasks]);if(r)return n?(0,k.jsx)(it,{isEmpty:!0,onClick:d,children:(0,k.jsx)(nt,{children:(0,k.jsxs)(ot,{children:[(0,k.jsx)(U.GGD,{size:16})," ",f("Project.columns.addColumn")]})})}):null;if(!t)return(0,k.jsx)(it,{isEmpty:!0,children:(0,k.jsx)(nt,{loading:!0,children:(0,k.jsx)(p.A,{size:"60px",color:"#3e85f3"})})});const w=()=>{g((e=>!e))};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(it,{children:[(0,k.jsx)(st,{children:h?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(at,{value:u,onChange:e=>x(e.target.value),autoFocus:!0}),(0,k.jsxs)(dt,{children:[(0,k.jsx)(ct,{type:"button",hoverColor:y.success,onClick:()=>(()=>{if(null!==t&&void 0!==t&&t._id)try{c((0,G.y$)({id:t._id,data:{name:u}}))}catch(e){s.oR.error(`${f("Project.columns.updateFailed")}: ${e instanceof Error?e.message:String(e)}`)}finally{m(!1)}})(),children:(0,k.jsx)(U.YrT,{size:20})}),(0,k.jsx)(ct,{type:"button",hoverColor:y.primaryHover,onClick:()=>(x((null===t||void 0===t?void 0:t.name)||""),void m(!1)),children:(0,k.jsx)(U.yGN,{size:20})}),(0,k.jsx)(ct,{type:"button",hoverColor:y.danger,onClick:()=>(()=>{if(null!==t&&void 0!==t&&t._id)try{c((0,G.gR)(t._id))}catch(e){s.oR.error(`${f("Project.columns.deleteFailed")}: ${e instanceof Error?e.message:String(e)}`)}})(),children:(0,k.jsx)(U.IXo,{size:20})})]})]}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(lt,{children:null===t||void 0===t?void 0:t.name}),n&&(0,k.jsxs)(dt,{children:[a&&(0,k.jsx)(ct,{type:"button",onClick:()=>m(!0),children:(0,k.jsx)(U.Pj4,{size:20})}),(0,k.jsx)(ct,{type:"button",onClick:()=>w(),children:(0,k.jsx)(U.GGD,{size:20})})]})]})}),n?(0,k.jsx)(rt.gL,{droppableId:t._id,type:"task",children:e=>(0,k.jsxs)(ht,{ref:e.innerRef,...e.droppableProps,children:[v.map(((e,t)=>(0,k.jsx)(rt.sx,{draggableId:e._id,index:t,children:t=>(0,k.jsx)("div",{ref:t.innerRef,...t.draggableProps,...t.dragHandleProps,children:(0,k.jsx)(We,{task:e,withActions:n})})},e._id))),e.placeholder]})}):(0,k.jsx)(ht,{children:v.map((e=>(0,k.jsx)(We,{task:e,withActions:n},e._id)))})]}),j&&(0,k.jsx)(tt,{handlerCloseModal:w,columnId:null===t||void 0===t?void 0:t._id})]})};var ut=r(397);const xt=b.Ay.div`
  display: flex;
  flex-direction: row;
  position: relative;
  gap: 24px;
  width: 100%;
  height: 100%;
  padding: 24px;
  overflow-x: auto;
`,jt=b.Ay.button`
  position: fixed;
  top: ${e=>{let{topOffset:t}=e;return`${t}px`}};
  right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>{let{theme:t}=e;return t.backgroundSecondary}};
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
  border: 1px solid ${e=>{let{theme:t}=e;return t.borderColor}};
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  transition: color ${e=>{let{theme:t}=e;return t.animation}},
    border-color ${e=>{let{theme:t}=e;return t.animation}};

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.primary}};
    border-color: ${e=>{let{theme:t}=e;return t.primary}};
  }

  &[data-active="true"] {
    color: ${e=>{let{theme:t}=e;return t.invertedText}};
    background-color: ${e=>{let{theme:t}=e;return t.primary}};
    border-color: ${e=>{let{theme:t}=e;return t.primary}};
  }
`,gt=b.Ay.div`
  display: flex;
  align-items: stretch;
  height: 100%;
  gap: 24px;
`,ft=e=>{var t;let{columns:r,topOffset:n=24,withActions:a=!1,onEditOrder:d}=e;const h=(0,l.jL)(),m=null===(t=(0,l.GV)(c.ph))||void 0===t?void 0:t._id,[p,u]=(0,i.useState)(!1),{t:x}=(0,o.B)(),j=()=>[...r].sort(((e,t)=>e.order-t.order));return(0,k.jsxs)(xt,{children:[a&&(0,k.jsx)(jt,{type:"button",topOffset:n+24,"data-active":p,onClick:()=>{u((e=>!e)),null===d||void 0===d||d()},children:(0,k.jsx)(ut.p92,{size:20})}),(0,k.jsxs)(rt.JY,{onDragEnd:async e=>{const{source:t,destination:i,draggableId:n,type:o}=e;if(i)if("column"!==o){if("task"===o){if(t.droppableId===i.droppableId&&t.index===i.index)return;const o=r.find((e=>e._id===t.droppableId)),l=null===o||void 0===o?void 0:o.tasks.find((e=>e._id===n));if(!l)return;const a=new FormData;return a.append("column",i.droppableId),void h((0,H.lC)({id:e.draggableId,formData:a})).unwrap().catch((e=>{s.oR.error(`${x("Project.columns.moveTaskFailed")}: ${e.message}`)}))}}else{if(!p||t.index===i.index)return;const e=[...j()],[r]=e.splice(t.index,1);e.splice(i.index,0,r);const n=e.map(((e,t)=>({id:e._id,order:t})));h((0,G.Fh)({columns:n})).unwrap().catch((e=>{s.oR.error(`${x("Project.columns.reorderFailed")}: ${e.message}`)}))}},children:[p&&a?(0,k.jsx)(rt.gL,{droppableId:"columns",direction:"horizontal",type:"column",children:e=>(0,k.jsxs)(gt,{ref:e.innerRef,...e.droppableProps,children:[j().map(((e,t)=>(0,k.jsx)(rt.sx,{draggableId:e._id,index:t,children:t=>(0,k.jsx)("div",{ref:t.innerRef,...t.draggableProps,...t.dragHandleProps,children:(0,k.jsx)(pt,{column:e,withActions:a,isEditable:p})})},e._id))),e.placeholder]})}):(0,k.jsx)(gt,{children:j().map((e=>(0,k.jsx)(pt,{column:e,withActions:a},e._id)))}),p&&(0,k.jsx)(pt,{isEmpty:!0,withActions:a,onClickEmpty:()=>{if(m)try{const e={name:x("Project.columns.newColumn"),order:r.length,project:m};h((0,G.HA)(e))}catch(e){s.oR.error(`${x("Project.columns.addFailed")}: ${e instanceof Error?e.message:String(e)}`)}}})]})]})},yt=()=>{const{id:e}=(0,n.g)(),t=(0,n.Zp)(),r=(0,l.jL)(),u=(0,l.GV)(a.mB),x=(0,l.GV)(c.ph),j=(0,l.GV)(c.pU),g=(0,l.GV)(h),f=(0,l.GV)(m),y=(0,i.useRef)(null),[b,v]=(0,i.useState)(0),[w,A]=(0,i.useState)(!1),[$,T]=(0,i.useState)(!1),[F,S]=(0,i.useState)(!1),[E,M]=(0,i.useState)(!1),{t:P}=(0,o.B)();(0,i.useEffect)((()=>{if(!y.current)return;const e=new ResizeObserver((e=>{for(let t of e)v(t.contentRect.height)}));return e.observe(y.current),()=>e.disconnect()}),[]),(0,i.useEffect)((()=>{e&&r((0,d.kf)(e))}),[r,e]),(0,i.useEffect)((()=>{var e,t;const r=(null===x||void 0===x||null===(e=x.members)||void 0===e?void 0:e.filter((e=>"owner"===e.role)).map((e=>e.user._id)))||[],i=(null===x||void 0===x||null===(t=x.members)||void 0===t?void 0:t.filter((e=>"editor"===e.role)).map((e=>e.user._id)))||[],n=r.includes(u._id),o=i.includes(u._id);S(n),M(n||o)}),[u,x]);const _=()=>{A((e=>!e))},z=()=>{T((e=>!e))},I=f.reduce(((e,t)=>(e[t.column]||(e[t.column]=[]),e[t.column].push(t),e)),{});return(0,k.jsxs)(Y,{children:[(0,k.jsx)("div",{ref:y,children:(0,k.jsx)(O,{name:(null===x||void 0===x?void 0:x.name)||"",avatar:u.avatar,toggleMembersModal:_,toggleSettingsModal:z})}),j?(0,k.jsx)(J,{children:(0,k.jsx)(p.A,{size:"60px",color:"#3e85f3"})}):(0,k.jsx)(N,{children:(0,k.jsx)(ft,{columns:g.map((e=>({...e,tasks:I[e._id]||[]}))),topOffset:b,withActions:E})}),w&&(0,k.jsx)(C,{handlerCloseModal:()=>_(),projectId:e||"",withActions:F}),$&&(0,k.jsx)(R,{handlerCloseModal:()=>z(),deleteAction:()=>(async()=>{if(e&&x)try{await r((0,d.xx)(x._id)),s.oR.success(P("Forms.deleteProject.success")),z(),t("/",{replace:!0})}catch(i){s.oR.error(`${P("Forms.deleteProject.failed")}: ${i instanceof Error?i.message:String(i)}`)}})(),withActions:F})]})}}}]);
//# sourceMappingURL=583.d42b5377.chunk.js.map