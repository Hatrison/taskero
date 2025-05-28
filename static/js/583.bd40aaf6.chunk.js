"use strict";(self.webpackChunktaskero=self.webpackChunktaskero||[]).push([[583],{988:(e,t,r)=>{r.d(t,{hX:()=>i,pU:()=>o,ph:()=>n});const i=e=>e.projects.items,n=e=>e.projects.current,o=e=>e.projects.loading},3583:(e,t,r)=>{r.r(t),r.d(t,{default:()=>gt});var i=r(5043),n=r(5180),o=r(4961),s=r(2115),l=r(9867),a=r(3289),d=r(9006),c=r(988);const h=e=>e.columns.items,m=e=>e.tasks.items;var p=r(5939),u=r(9593),x=r(7784),f=r(3892),j=r(7142),g=r(7711),y=r(5464);const b=y.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 295px;
`;var v=r(899);const w=v.Ik().shape({members:v.YO().of(v.Ik().shape({email:v.Yj().email().required(),role:v.Yj().oneOf(["owner","editor","viewer"]).required()})).min(1).required()});var A=r(579);const k=e=>{let{handlerCloseModal:t,formName:r,projectId:i,withActions:n=!0}=e;const a=(0,l.jL)(),h=(0,l.GV)(c.ph),{t:m}=(0,o.B)();if(!h)return(0,A.jsx)(b,{children:(0,A.jsx)(p.A,{size:"60px",color:"#3e85f3"})});const u={members:h.members.map((e=>({email:e.user.email,role:e.role})))},x=h.members.map((e=>({...e.user,role:e.role})));return(0,A.jsx)(f.l1,{enableReinitialize:!0,initialValues:u,validationSchema:w,onSubmit:async e=>{try{await a((0,d.K4)({id:i,members:e.members})).unwrap(),s.oR.success(m("Forms.editProjectMembers.success")),t()}catch(r){s.oR.error(`${m("Forms.editProjectMembers.failed")}: ${r instanceof Error?r.message:String(r)}`)}},children:e=>{let{values:t,setFieldValue:i}=e;return(0,A.jsx)(g.q,{id:r,children:(0,A.jsx)(j.A,{value:t.members,users:x,onChange:e=>i("members",e),withActions:n,editableRoles:!0,availableRoles:["owner","editor","viewer"]})})}})},$=e=>{let{handlerCloseModal:t,projectId:r,withActions:i=!0}=e;const{t:n}=(0,o.B)(),s="edit-project-members-form";return(0,A.jsx)(u.A,{handlerCloseModal:t,children:(0,A.jsx)(x.A,{handlerCloseModal:t,title:n("Modals.editProjectMembers.title"),formName:s,withActions:i,children:(0,A.jsx)(k,{handlerCloseModal:t,formName:s,projectId:r,withActions:i})})})},C=v.Ik({name:v.Yj().min(2).max(100).required("Required"),description:v.Yj().max(1e3),deadline:v.p6().nullable()}),T=y.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 295px;
`,F=e=>{let{handlerCloseModal:t,formName:r,withActions:i=!0}=e;const n=(0,l.jL)(),a=(0,l.GV)(c.ph),{t:h}=(0,o.B)();if(!a)return(0,A.jsx)(T,{children:(0,A.jsx)(p.A,{size:"60px",color:"#3e85f3"})});const m={name:a.name||"",description:a.description||"",deadline:a.deadline?a.deadline.slice(0,10):""};return(0,A.jsx)(f.l1,{initialValues:m,validationSchema:C,onSubmit:async e=>{try{await n((0,d.vr)({id:a._id,payload:e})).unwrap(),s.oR.success(h("Forms.editProject.success")),t()}catch(r){s.oR.error(`${h("Forms.editProject.failed")}: ${r instanceof Error?r.message:String(r)}`)}},children:e=>{let{values:t,errors:n,touched:o,handleChange:s,handleBlur:l}=e;return(0,A.jsxs)(g.q,{id:r,children:[(0,A.jsxs)(g.A0,{children:[(0,A.jsx)(g.JU,{children:h("Forms.editProject.name")}),(0,A.jsx)(g.pd,{name:"name",placeholder:h("Forms.editProject.namePlaceholder"),$hasError:o.name&&!!n.name,disabled:!i}),o.name&&n.name&&(0,A.jsx)(g.yn,{children:n.name})]}),(0,A.jsxs)(g.A0,{children:[(0,A.jsx)(g.JU,{children:h("Forms.editProject.description")}),(0,A.jsx)(g.TM,{name:"description",placeholder:h("Forms.editProject.descriptionPlaceholder"),value:t.description,onChange:s,onBlur:l,$hasError:o.description&&!!n.description,disabled:!i}),o.description&&n.description&&(0,A.jsx)(g.yn,{children:n.description})]}),(0,A.jsxs)(g.A0,{children:[(0,A.jsx)(g.JU,{children:h("Forms.editProject.deadline")}),(0,A.jsx)(g.pd,{name:"deadline",type:"date",disabled:!i})]})]})}})},S=e=>{let{handlerCloseModal:t,deleteAction:r=()=>{},withActions:i=!0}=e;const{t:n}=(0,o.B)(),s="edit-project-form";return(0,A.jsx)(u.A,{handlerCloseModal:t,children:(0,A.jsx)(x.A,{handlerCloseModal:t,title:n("Modals.editProject.title"),formName:s,deleteAction:r,withActions:i,children:(0,A.jsx)(F,{handlerCloseModal:t,formName:s,withActions:i})})})};var E=r(3875),R=r(279),M=r(2998);const P=y.Ay.header`
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
`,_=y.Ay.h1`
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
`,z=(0,y.Ay)(n.N_)`
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
`,I=y.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
`,B=y.Ay.button`
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
`;var L=r(184),U=r(5200),D=r(3538),q=r(9657);const O=e=>{let{name:t,avatar:r,toggleMembersModal:i,toggleSettingsModal:s}=e;const{t:l}=(0,o.B)(),a=(0,q.Ub)({query:"(max-width: 768px)"});return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(P,{children:[(0,A.jsxs)(z,{to:"/",children:[(0,A.jsx)(L._Jj,{size:16})," ",!a&&l("Project.backToProjects")]}),(0,A.jsx)(_,{children:t}),(0,A.jsxs)(I,{children:[(0,A.jsx)(E.A,{}),(0,A.jsx)(R.A,{}),(0,A.jsx)(B,{type:"button",onClick:()=>i(),children:(0,A.jsx)(D.Sy$,{size:20})}),(0,A.jsx)(B,{type:"button",onClick:()=>s(),children:(0,A.jsx)(U.VSk,{size:20})}),(0,A.jsx)(n.N_,{to:"/account",children:(0,A.jsx)(M.A,{src:r,size:36})})]})]})})},V=y.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`,Y=y.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${e=>{let{theme:t}=e;return t.background}};
`,J=y.Ay.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  background-color: ${e=>{let{theme:t}=e;return t.background}};
  overflow: hidden;
`;var N=r(9581),G=r(26),H=r(3367),X=r(551),K=r(7950),W=r(3903);const Z=y.Ay.input`
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
`,Q=e=>{let{value:t,onChange:r,placeholder:n="Search...",withActions:a=!1}=e;const h=(0,l.jL)(),m=(0,l.GV)(c.ph),[p,u]=(0,i.useState)(""),[x,f]=(0,i.useState)([]),[g,y]=(0,i.useState)(!1),[b,v]=(0,i.useState)({top:0,left:0,width:0}),w=(0,i.useRef)(null),k=(0,i.useRef)(null),$=(0,i.useRef)(0),{t:C}=(0,o.B)();(0,i.useEffect)((()=>{if(p.trim()&&null!==m&&void 0!==m&&m._id)return $.current&&clearTimeout($.current),$.current=window.setTimeout((async()=>{try{const e=await h((0,d.RY)({projectId:m._id,query:p})).unwrap();f(e),y(!0)}catch(e){s.oR.error(`${C("Forms.createTask.searchFailed")}: ${e instanceof Error?e.message:String(e)}`),f([])}}),400),()=>clearTimeout($.current);f([])}),[p,m,h,C]),(0,i.useEffect)((()=>{if(w.current){const e=w.current.getBoundingClientRect();v({top:e.bottom+4,left:e.left,width:e.width})}}),[g,x]),(0,i.useEffect)((()=>{const e=e=>{var t,r;const i=e.target;null!==(t=w.current)&&void 0!==t&&t.contains(i)||null!==(r=k.current)&&void 0!==r&&r.contains(i)||y(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)}),[]);return(0,A.jsxs)(A.Fragment,{children:[a&&(0,A.jsxs)(W.mO,{children:[(0,A.jsx)(Z,{ref:w,value:p,placeholder:n,onChange:e=>u(e.target.value),onFocus:()=>x.length&&y(!0)}),g&&(0,K.createPortal)((0,A.jsx)(W.ms,{ref:k,$top:b.top,$left:b.left,$width:b.width,children:x.map((e=>(0,A.jsxs)(W.c$,{onClick:()=>(e=>{t.find((t=>t._id===e._id))||r([...t,e]),u(""),f([]),y(!1)})(e),children:[e.name," (",e.email,")"]},e._id)))}),document.body)]}),(0,A.jsx)(j.A,{users:t,withActions:a,onChange:e=>r(e),viewMode:!0})]})};var ee=r(3825);const te=y.Ay.div`
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
`,re=y.Ay.div`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  overflow: hidden;
`,ie=document.getElementById("modal-root"),ne=e=>{let{children:t,onClose:r}=e;const n=(0,i.useCallback)((e=>{"Escape"===e.key&&r()}),[r]);(0,i.useEffect)((()=>(document.addEventListener("keydown",n),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",n),document.body.style.overflow=""})),[n]);return K.createPortal((0,A.jsx)(te,{onClick:e=>{e.target===e.currentTarget&&r()},children:(0,A.jsx)(re,{children:t})}),ie)},oe=y.Ay.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`,se=y.Ay.img`
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
`,le=y.Ay.button`
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
`,ae=(0,y.Ay)(le)`
  left: 16px;
`,de=(0,y.Ay)(le)`
  right: 16px;
`,ce=e=>{let{images:t,startIndex:r,onClose:n}=e;const[o,s]=(0,i.useState)(r),l=(0,i.useCallback)((()=>{s((e=>0===e?t.length-1:e-1))}),[t.length]),a=(0,i.useCallback)((()=>{s((e=>e===t.length-1?0:e+1))}),[t.length]),d=(0,i.useCallback)((e=>{"ArrowLeft"===e.key&&l(),"ArrowRight"===e.key&&a()}),[l,a]);return(0,i.useEffect)((()=>(window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d))),[d]),(0,A.jsx)(ne,{onClose:n,children:(0,A.jsxs)(oe,{children:[(0,A.jsx)(ae,{type:"button",onClick:l,children:(0,A.jsx)(ee.qXl,{size:32})}),(0,A.jsx)(se,{src:t[o],alt:`Image ${o+1}`}),(0,A.jsx)(de,{type:"button",onClick:a,children:(0,A.jsx)(ee.BJp,{size:32})})]})})},he=y.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,me=y.Ay.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,pe=y.Ay.div`
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
`,ue=y.Ay.button`
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
`,xe=y.Ay.input`
  display: none;
`,fe=y.Ay.label`
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
`,je=e=>{let{files:t,editable:r,onChange:n}=e;const s=(0,i.useRef)(null),[l,a]=(0,i.useState)(null),[d,c]=(0,i.useState)(!1),{t:h}=(0,o.B)(),m=(0,i.useCallback)((e=>{const r=Array.from(e).map((e=>({url:URL.createObjectURL(e),file:e})));n([...t,...r])}),[t,n]);return(0,A.jsxs)(he,{children:[(0,A.jsx)(me,{children:t.map(((e,i)=>(0,A.jsxs)(pe,{onClick:()=>a(i),children:[(0,A.jsx)("img",{src:e.url,alt:`attachment-${i}`}),r&&(0,A.jsx)(ue,{type:"button",onClick:e=>{e.stopPropagation(),(e=>{const r=t.filter(((t,r)=>r!==e));n(r)})(i)},children:(0,A.jsx)(U.yGN,{size:20})})]},i)))}),r&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(xe,{ref:s,type:"file",accept:"image/*",multiple:!0,onChange:e=>{if(!e.target.files)return;const r=Array.from(e.target.files).map((e=>({url:URL.createObjectURL(e),file:e})));n([...t,...r]),e.target.value=""}}),(0,A.jsx)(fe,{isDragActive:d,onClick:()=>{var e;return null===(e=s.current)||void 0===e?void 0:e.click()},onDragEnter:e=>{e.preventDefault(),c(!0)},onDragLeave:e=>{e.preventDefault(),c(!1)},onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault(),c(!1),e.dataTransfer.files&&e.dataTransfer.files.length&&m(e.dataTransfer.files)},children:h("Forms.editTask.dragOrClick")})]}),null!==l&&(0,A.jsx)(ce,{images:t.map((e=>e.url)),startIndex:l,onClose:()=>a(null)})]})},ge=v.Ik({title:v.Yj().min(2,"Title must be at least 2 characters").max(200,"Title must be at most 200 characters").required(),description:v.Yj().max(2e3,"Description must be at most 2000 characters").nullable(),assignedTo:v.YO().of(v.Ik().required()).optional(),priority:v.Yj().oneOf(["low","medium","high","critical"]).optional(),deadline:v.p6().nullable().optional(),attachments:v.YO().of(v.Ik({url:v.Yj().required(),file:v.gl().notRequired()})).optional()}),ye=y.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 295px;
`;var be=r(7050);const ve=v.Ik().shape({text:v.Yj().trim().required("Cannot be empty")}),we=y.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`,Ae=y.Ay.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 40px;
`,ke=y.Ay.h3`
  font-size: 18px;
`,$e=y.Ay.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`,Ce=y.Ay.li`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`,Te=y.Ay.div`
  flex: 1;
`,Fe=y.Ay.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;

  button {
  }
`,Se=y.Ay.div``,Ee=y.Ay.span`
  font-weight: 600;
`,Re=y.Ay.span`
  font-size: 14px;
  color: ${e=>{let{theme:t}=e;return t.secondaryText}};
`,Me=y.Ay.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,Pe=y.Ay.button`
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
`,_e=y.Ay.p`
  word-break: break-word;
`,ze=y.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,Ie=(0,y.Ay)(g.q)`
  flex-direction: row;
  width: 100%;
`,Be=(0,y.Ay)(g.A0)`
  flex: 1;
`,Le=(0,y.Ay)(g.b7)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 70px;
`,Ue=e=>{let{taskId:t}=e;const{t:r}=(0,o.B)(),n=(0,l.jL)(),[a,d]=(0,i.useState)(!0),c=(0,l.GV)((e=>(e=>t=>t.comments.items.filter((t=>t.task===e)))(t)(e))),[h,m]=(0,i.useState)(null);(0,i.useEffect)((()=>{n((0,be.Re)(t)).catch((e=>{s.oR.error(`${r("Forms.comments.fetchFailed")}: ${e instanceof Error?e.message:String(e)}`)})).finally((()=>{d(!1)}))}),[n,r,t]);const u=(e,t)=>{let{setSubmitting:r}=t;h&&n((0,be.vv)({id:h,text:e.text})).then((()=>{m(null)})).finally((()=>r(!1)))};return a?(0,A.jsxs)(Ae,{children:[(0,A.jsx)(ke,{children:r("Forms.comments.title")}),(0,A.jsx)(we,{children:(0,A.jsx)(p.A,{size:"40px",color:"#3e85f3"})})]}):(0,A.jsxs)(Ae,{children:[(0,A.jsx)(ke,{children:r("Forms.comments.title")}),(0,A.jsx)($e,{children:c.map((e=>(0,A.jsxs)(Ce,{children:[(0,A.jsx)(M.A,{src:e.user.avatar||"",alt:e.user.name}),(0,A.jsxs)(Te,{children:[(0,A.jsxs)(Fe,{children:[(0,A.jsxs)(Se,{children:[(0,A.jsx)(Ee,{children:e.user.name})," ",(0,A.jsx)(Re,{children:new Date(e.createdAt).toLocaleString()})]}),(0,A.jsxs)(Me,{children:[(0,A.jsx)(Pe,{onClick:()=>{return t=e._id,void m((e=>e===t?null:t));var t},children:(0,A.jsx)(U.WXf,{size:16})}),(0,A.jsx)(Pe,{className:"delete",onClick:()=>n((0,be.Tu)(e._id)),children:(0,A.jsx)(U.IXo,{size:16})})]})]}),h===e._id?(0,A.jsx)(f.l1,{initialValues:{text:e.text},validationSchema:ve,onSubmit:u,children:e=>{let{errors:t,isSubmitting:i}=e;return(0,A.jsxs)(ze,{children:[(0,A.jsxs)(Ie,{children:[(0,A.jsx)(Be,{children:(0,A.jsx)(g.pd,{name:"text",placeholder:r("Forms.comments.editPlaceholder"),$hasError:Boolean(t.text),autoFocus:!0})}),(0,A.jsx)(Le,{type:"submit",disabled:i,children:i?(0,A.jsx)(p.A,{size:"16px",color:"#fff"}):r("Forms.comments.save")})]}),(0,A.jsx)(g.yn,{children:t.text})]})}}):(0,A.jsx)(_e,{children:e.text})]})]},e._id)))}),(0,A.jsx)(f.l1,{initialValues:{text:""},validationSchema:ve,onSubmit:(e,r)=>{let{resetForm:i,setSubmitting:o}=r;n((0,be.eT)({task:t,text:e.text})).then((()=>{i()})).finally((()=>o(!1)))},children:e=>{let{errors:t,isSubmitting:i}=e;return(0,A.jsxs)(ze,{children:[(0,A.jsxs)(Ie,{children:[(0,A.jsx)(Be,{children:(0,A.jsx)(g.pd,{name:"text",placeholder:r("Forms.comments.addPlaceholder"),$hasError:Boolean(t.text)})}),(0,A.jsx)(Le,{type:"submit",disabled:i,children:i?(0,A.jsx)(p.A,{size:"16px",color:"#fff"}):r("Forms.comments.post")})]}),(0,A.jsx)(g.yn,{children:t.text})]})}})]})},De=e=>{var t;let{task:r,handlerCloseModal:i,formName:n,withActions:a=!0}=e;const d=(0,l.jL)(),{t:c}=(0,o.B)(),h={title:r.title||"",description:r.description||"",column:r.column||"",priority:r.priority||"medium",assignedTo:r.assignedTo||[],deadline:(null===(t=r.deadline)||void 0===t?void 0:t.slice(0,10))||"",attachments:(r.attachments||[]).map((e=>({url:e})))},m={low:"#4CAF50",medium:"#FF9800",high:"#F44336",critical:"#9C27B0"};return r?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(f.l1,{initialValues:h,validationSchema:ge,onSubmit:async e=>{try{const t=new FormData;t.append("title",e.title),t.append("description",e.description||""),t.append("priority",e.priority),t.append("deadline",e.deadline||"");const n=e.assignedTo.map((e=>e._id));t.append("assignedTo",JSON.stringify(n));const o=e.attachments.filter((e=>!e.file)).map((e=>e.url));t.append("attachments",JSON.stringify(o)),e.attachments.filter((e=>e.file)).forEach((e=>{t.append("files",e.file)})),await d((0,G.lC)({id:r._id,formData:t})).unwrap(),s.oR.success(c("Forms.editTask.success")),i()}catch(t){s.oR.error(`${c("Forms.editTask.failed")}: ${t instanceof Error?t.message:String(t)}`)}},enableReinitialize:!0,children:e=>{let{values:t,errors:r,touched:i,handleChange:o,handleBlur:s,setFieldValue:l}=e;return(0,A.jsxs)(g.q,{id:n,children:[(0,A.jsxs)(g.A0,{children:[(0,A.jsx)(g.JU,{children:c("Forms.editTask.title")}),(0,A.jsx)(g.pd,{name:"title",placeholder:c("Forms.editTask.titlePlaceholder"),$hasError:i.title&&!!r.title,disabled:!a}),i.title&&r.title&&(0,A.jsx)(g.yn,{children:r.title})]}),(0,A.jsxs)(g.A0,{children:[(0,A.jsx)(g.JU,{children:c("Forms.editTask.description")}),(0,A.jsx)(g.TM,{name:"description",placeholder:c("Forms.editTask.descriptionPlaceholder"),value:t.description,onChange:o,onBlur:s,$hasError:i.description&&!!r.description,disabled:!a}),i.description&&r.description&&(0,A.jsx)(g.yn,{children:r.description})]}),(0,A.jsxs)(g.A0,{children:[(0,A.jsx)(g.JU,{children:c("Forms.editTask.priority")}),(0,A.jsx)(X.A,{options:["low","medium","high","critical"],value:t.priority,onChange:e=>l("priority",e),getLabel:e=>c(`Common.priority.${e}`),getKey:e=>e,getColor:e=>m[e],placeholder:c("Forms.editTask.priority"),disabled:!a})]}),(0,A.jsxs)(g.A0,{children:[(0,A.jsx)(g.JU,{children:c("Forms.editTask.assignedTo")}),(0,A.jsx)(Q,{value:t.assignedTo,onChange:e=>l("assignedTo",e),placeholder:c("Forms.editTask.assigneePlaceholder"),withActions:a})]}),(0,A.jsxs)(g.A0,{children:[(0,A.jsx)(g.JU,{children:c("Forms.editTask.deadline")}),(0,A.jsx)(g.pd,{name:"deadline",type:"date",value:t.deadline,onChange:o,onBlur:s,disabled:!a})]}),(0,A.jsxs)(g.A0,{children:[(0,A.jsx)(g.JU,{children:c("Forms.editTask.attachments")}),(0,A.jsx)(je,{files:t.attachments,editable:a,onChange:e=>l("attachments",e)})]})]})}}),(0,A.jsx)(Ue,{taskId:r._id})]}):(0,A.jsx)(ye,{children:(0,A.jsx)(p.A,{size:"60px",color:"#3e85f3"})})},qe=e=>{let{task:t,handlerCloseModal:r,deleteAction:i=()=>{},withActions:n=!0}=e;const{t:s}=(0,o.B)(),l="edit-task-form";return(0,A.jsx)(u.A,{handlerCloseModal:r,children:(0,A.jsx)(x.A,{handlerCloseModal:r,title:s("Modals.editTask.title"),formName:l,deleteAction:i,withActions:n,children:(0,A.jsx)(De,{task:t,handlerCloseModal:r,formName:l,withActions:n})})})},Oe={low:"priorityLow",medium:"priorityMedium",high:"priorityHigh",critical:"priorityCritical"},Ve={low:"priorityTextLow",medium:"priorityTextMedium",high:"priorityTextHigh",critical:"priorityTextCritical"},Ye=y.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background-color: ${e=>{let{theme:t}=e;return t.background}};
  border-radius: 4px;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadow}};
`,Je=y.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
`,Ne=y.Ay.h3`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
`,Ge=y.Ay.span`
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  color: ${e=>{let{theme:t,$priority:r}=e;return t[Ve[r]]}};
  background-color: ${e=>{let{theme:t,$priority:r}=e;return t[Oe[r]]}};
`,He=y.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Xe=y.Ay.span`
  font-size: 14px;
  color: ${e=>{let{theme:t}=e;return t.secondaryText}};
`,Ke=e=>{let{task:t,withActions:r=!1}=e;const{title:n,deadline:a,priority:d,assignedTo:c}=t,h=(0,l.jL)(),[m,p]=(0,i.useState)(!1),{t:u}=(0,o.B)(),x=()=>{p((e=>!e))};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(Ye,{onClick:x,children:[(0,A.jsxs)(Je,{children:[(0,A.jsx)(Ne,{children:n}),(0,A.jsx)(Ge,{$priority:d,children:(f=d,f.charAt(0).toUpperCase()+f.slice(1))})]}),(0,A.jsxs)(He,{children:[(0,A.jsx)(H.A,{members:c}),a&&(0,A.jsx)(Xe,{children:null===a||void 0===a?void 0:a.slice(0,10)})]})]}),m&&(0,A.jsx)(qe,{task:t,handlerCloseModal:x,deleteAction:async()=>{if(null!==t&&void 0!==t&&t._id)try{await h((0,G.vq)(t._id)),s.oR.success(u("Forms.deleteTask.success"))}catch(e){s.oR.error(`${u("Forms.deleteTask.failed")}: ${e instanceof Error?e.message:String(e)}`)}},withActions:r})]});var f},We=v.Ik({title:v.Yj().min(2).max(200).required(),description:v.Yj().max(2e3).nullable(),assignedTo:v.YO().of(v.Yj()),priority:v.gl().oneOf(["low","medium","high","critical"]).default("medium"),deadline:v.p6().nullable()}),Ze={title:"",description:"",deadline:"",priority:"medium"},Qe=e=>{let{handlerCloseModal:t,formName:r,columnId:n}=e;const a=(0,l.jL)(),d=(0,l.GV)(c.ph),[h,m]=(0,i.useState)([]),{t:p}=(0,o.B)(),u=(0,y.DP)(),x={low:u.priorityTextLow,medium:u.priorityTextMedium,high:u.priorityTextHigh,critical:u.priorityTextCritical};return(0,A.jsx)(f.l1,{initialValues:Ze,validationSchema:We,onSubmit:async e=>{if(null===d||void 0===d||!d._id||!n)return void s.oR.error(p("Forms.createTask.failed"));const r={...e,project:d._id,column:n,assignedTo:h.map((e=>e._id)),priority:e.priority};try{await a((0,G.UT)(r)).unwrap(),s.oR.success(p("Forms.createTask.success")),t()}catch(i){s.oR.error(`${p("Forms.createTask.failed")}: ${i instanceof Error?i.message:String(i)}`)}},children:e=>{let{values:t,errors:i,touched:n,handleChange:o,handleBlur:s}=e;return(0,A.jsxs)(g.q,{id:r,children:[(0,A.jsxs)(g.A0,{children:[(0,A.jsx)(g.JU,{children:p("Forms.createTask.title")}),(0,A.jsx)(g.pd,{name:"title",placeholder:p("Forms.createTask.titlePlaceholder"),$hasError:n.title&&!!i.title}),n.title&&i.title&&(0,A.jsx)(g.yn,{children:i.title})]}),(0,A.jsxs)(g.A0,{children:[(0,A.jsx)(g.JU,{children:p("Forms.createTask.description")}),(0,A.jsx)(g.TM,{name:"description",placeholder:p("Forms.createTask.descriptionPlaceholder"),value:t.description,onChange:o,onBlur:s,$hasError:n.description&&!!i.description}),n.description&&i.description&&(0,A.jsx)(g.yn,{children:i.description})]}),(0,A.jsxs)(g.A0,{children:[(0,A.jsx)(g.JU,{children:p("Forms.createTask.deadline")}),(0,A.jsx)(g.pd,{name:"deadline",type:"date"})]}),(0,A.jsxs)(g.A0,{children:[(0,A.jsx)(g.JU,{children:p("Forms.createTask.priority")}),(0,A.jsx)(X.A,{options:["low","medium","high","critical"],value:t.priority,onChange:e=>{o({target:{name:"priority",value:e}})},getLabel:e=>p(`Common.priority.${e}`),getKey:e=>e,getColor:e=>x[e],placeholder:p("Forms.createTask.priority")})]}),(0,A.jsxs)(g.A0,{children:[(0,A.jsx)(g.JU,{children:p("Forms.createTask.assignedTo")}),(0,A.jsx)(Q,{value:h,onChange:m,placeholder:p("Forms.createTask.assigneePlaceholder"),withActions:!0})]})]})}})},et=e=>{let{handlerCloseModal:t,columnId:r}=e;const{t:i}=(0,o.B)(),n="create-task-form";return(0,A.jsx)(u.A,{handlerCloseModal:t,children:(0,A.jsx)(x.A,{handlerCloseModal:t,title:i("Modals.createTask.title"),formName:n,children:(0,A.jsx)(Qe,{handlerCloseModal:t,formName:n,columnId:r})})})};var tt=r(8892);const rt=y.Ay.div`
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
`,it=y.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 290px;
  height: 100%;
  padding: 16px;
  font-size: 16px;
  text-align: center;
  cursor: ${e=>{let{loading:t}=e;return t?"default":"pointer"}};
`,nt=y.Ay.button`
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
`,ot=y.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,st=y.Ay.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
  word-break: break-word;
  overflow-wrap: break-word;
`,lt=y.Ay.input`
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
`,at=y.Ay.div`
  display: flex;
  gap: 4px;
`,dt=y.Ay.button`
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
`,ct=y.Ay.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  gap: 8px;
  overflow-y: auto;
  min-height: 100px;
`,ht={critical:3,high:2,medium:1,low:0},mt=e=>{let{column:t,isEmpty:r,withActions:n,isEditable:a=!1,onClickEmpty:d}=e;const c=(0,l.jL)(),[h,m]=(0,i.useState)(!1),[u,x]=(0,i.useState)((null===t||void 0===t?void 0:t.name)||""),[f,j]=(0,i.useState)(!1),{t:g}=(0,o.B)(),b=(0,y.DP)(),v=(0,i.useMemo)((()=>null!==t&&void 0!==t&&t.tasks?[...t.tasks].sort(((e,t)=>{var r,i;const n=null!==(r=ht[e.priority])&&void 0!==r?r:0;return(null!==(i=ht[t.priority])&&void 0!==i?i:0)-n})):[]),[null===t||void 0===t?void 0:t.tasks]);if(r)return n?(0,A.jsx)(rt,{isEmpty:!0,onClick:d,children:(0,A.jsx)(it,{children:(0,A.jsxs)(nt,{children:[(0,A.jsx)(U.GGD,{size:16})," ",g("Project.columns.addColumn")]})})}):null;if(!t)return(0,A.jsx)(rt,{isEmpty:!0,children:(0,A.jsx)(it,{loading:!0,children:(0,A.jsx)(p.A,{size:"60px",color:"#3e85f3"})})});const w=()=>{j((e=>!e))};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(rt,{children:[(0,A.jsx)(ot,{children:h?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(lt,{value:u,onChange:e=>x(e.target.value),autoFocus:!0}),(0,A.jsxs)(at,{children:[(0,A.jsx)(dt,{type:"button",hoverColor:b.success,onClick:()=>(()=>{if(null!==t&&void 0!==t&&t._id)try{c((0,N.y$)({id:t._id,data:{name:u}}))}catch(e){s.oR.error(`${g("Project.columns.updateFailed")}: ${e instanceof Error?e.message:String(e)}`)}finally{m(!1)}})(),children:(0,A.jsx)(U.YrT,{size:20})}),(0,A.jsx)(dt,{type:"button",hoverColor:b.primaryHover,onClick:()=>(x((null===t||void 0===t?void 0:t.name)||""),void m(!1)),children:(0,A.jsx)(U.yGN,{size:20})}),(0,A.jsx)(dt,{type:"button",hoverColor:b.danger,onClick:()=>(()=>{if(null!==t&&void 0!==t&&t._id)try{c((0,N.gR)(t._id))}catch(e){s.oR.error(`${g("Project.columns.deleteFailed")}: ${e instanceof Error?e.message:String(e)}`)}})(),children:(0,A.jsx)(U.IXo,{size:20})})]})]}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(st,{children:null===t||void 0===t?void 0:t.name}),n&&(0,A.jsxs)(at,{children:[a&&(0,A.jsx)(dt,{type:"button",onClick:()=>m(!0),children:(0,A.jsx)(U.Pj4,{size:20})}),(0,A.jsx)(dt,{type:"button",onClick:()=>w(),children:(0,A.jsx)(U.GGD,{size:20})})]})]})}),n?(0,A.jsx)(tt.gL,{droppableId:t._id,type:"task",children:e=>(0,A.jsxs)(ct,{ref:e.innerRef,...e.droppableProps,children:[v.map(((e,t)=>(0,A.jsx)(tt.sx,{draggableId:e._id,index:t,children:t=>(0,A.jsx)("div",{ref:t.innerRef,...t.draggableProps,...t.dragHandleProps,children:(0,A.jsx)(Ke,{task:e,withActions:n})})},e._id))),e.placeholder]})}):(0,A.jsx)(ct,{children:v.map((e=>(0,A.jsx)(Ke,{task:e,withActions:n},e._id)))})]}),f&&(0,A.jsx)(et,{handlerCloseModal:w,columnId:null===t||void 0===t?void 0:t._id})]})};var pt=r(397);const ut=y.Ay.div`
  display: flex;
  flex-direction: row;
  position: relative;
  gap: 24px;
  width: 100%;
  height: 100%;
  padding: 24px;
  overflow-x: auto;
`,xt=y.Ay.button`
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
`,ft=y.Ay.div`
  display: flex;
  align-items: stretch;
  height: 100%;
  gap: 24px;
`,jt=e=>{var t;let{columns:r,topOffset:n=24,withActions:a=!1,onEditOrder:d}=e;const h=(0,l.jL)(),m=null===(t=(0,l.GV)(c.ph))||void 0===t?void 0:t._id,[p,u]=(0,i.useState)(!1),{t:x}=(0,o.B)(),f=()=>[...r].sort(((e,t)=>e.order-t.order));return(0,A.jsxs)(ut,{children:[a&&(0,A.jsx)(xt,{type:"button",topOffset:n+24,"data-active":p,onClick:()=>{u((e=>!e)),null===d||void 0===d||d()},children:(0,A.jsx)(pt.p92,{size:20})}),(0,A.jsxs)(tt.JY,{onDragEnd:async e=>{const{source:t,destination:i,draggableId:n,type:o}=e;if(i)if("column"!==o){if("task"===o){if(t.droppableId===i.droppableId&&t.index===i.index)return;const o=r.find((e=>e._id===t.droppableId)),l=null===o||void 0===o?void 0:o.tasks.find((e=>e._id===n));if(!l)return;const a=new FormData;return a.append("column",i.droppableId),void h((0,G.lC)({id:e.draggableId,formData:a})).unwrap().catch((e=>{s.oR.error(`${x("Project.columns.moveTaskFailed")}: ${e.message}`)}))}}else{if(!p||t.index===i.index)return;const e=[...f()],[r]=e.splice(t.index,1);e.splice(i.index,0,r);const n=e.map(((e,t)=>({id:e._id,order:t})));h((0,N.Fh)({columns:n})).unwrap().catch((e=>{s.oR.error(`${x("Project.columns.reorderFailed")}: ${e.message}`)}))}},children:[p&&a?(0,A.jsx)(tt.gL,{droppableId:"columns",direction:"horizontal",type:"column",children:e=>(0,A.jsxs)(ft,{ref:e.innerRef,...e.droppableProps,children:[f().map(((e,t)=>(0,A.jsx)(tt.sx,{draggableId:e._id,index:t,children:t=>(0,A.jsx)("div",{ref:t.innerRef,...t.draggableProps,...t.dragHandleProps,children:(0,A.jsx)(mt,{column:e,withActions:a,isEditable:p})})},e._id))),e.placeholder]})}):(0,A.jsx)(ft,{children:f().map((e=>(0,A.jsx)(mt,{column:e,withActions:a},e._id)))}),p&&(0,A.jsx)(mt,{isEmpty:!0,withActions:a,onClickEmpty:()=>{if(m)try{const e={name:x("Project.columns.newColumn"),order:r.length,project:m};h((0,N.HA)(e))}catch(e){s.oR.error(`${x("Project.columns.addFailed")}: ${e instanceof Error?e.message:String(e)}`)}}})]})]})},gt=()=>{const{id:e}=(0,n.g)(),t=(0,n.Zp)(),r=(0,l.jL)(),u=(0,l.GV)(a.mB),x=(0,l.GV)(c.ph),f=(0,l.GV)(c.pU),j=(0,l.GV)(h),g=(0,l.GV)(m),y=(0,i.useRef)(null),[b,v]=(0,i.useState)(0),[w,k]=(0,i.useState)(!1),[C,T]=(0,i.useState)(!1),[F,E]=(0,i.useState)(!1),[R,M]=(0,i.useState)(!1),{t:P}=(0,o.B)();(0,i.useEffect)((()=>{if(!y.current)return;const e=new ResizeObserver((e=>{for(let t of e)v(t.contentRect.height)}));return e.observe(y.current),()=>e.disconnect()}),[]),(0,i.useEffect)((()=>{e&&r((0,d.kf)(e))}),[r,e]),(0,i.useEffect)((()=>{var e,t;const r=(null===x||void 0===x||null===(e=x.members)||void 0===e?void 0:e.filter((e=>"owner"===e.role)).map((e=>e.user._id)))||[],i=(null===x||void 0===x||null===(t=x.members)||void 0===t?void 0:t.filter((e=>"editor"===e.role)).map((e=>e.user._id)))||[],n=r.includes(u._id),o=i.includes(u._id);E(n),M(n||o)}),[u,x]);const _=()=>{k((e=>!e))},z=()=>{T((e=>!e))},I=g.reduce(((e,t)=>(e[t.column]||(e[t.column]=[]),e[t.column].push(t),e)),{});return(0,A.jsxs)(V,{children:[(0,A.jsx)("div",{ref:y,children:(0,A.jsx)(O,{name:(null===x||void 0===x?void 0:x.name)||"",avatar:u.avatar,toggleMembersModal:_,toggleSettingsModal:z})}),f?(0,A.jsx)(Y,{children:(0,A.jsx)(p.A,{size:"60px",color:"#3e85f3"})}):(0,A.jsx)(J,{children:(0,A.jsx)(jt,{columns:j.map((e=>({...e,tasks:I[e._id]||[]}))),topOffset:b,withActions:R})}),w&&(0,A.jsx)($,{handlerCloseModal:()=>_(),projectId:e||"",withActions:F}),C&&(0,A.jsx)(S,{handlerCloseModal:()=>z(),deleteAction:()=>(async()=>{if(e&&x)try{await r((0,d.xx)(x._id)),s.oR.success(P("Forms.deleteProject.success")),z(),t("/",{replace:!0})}catch(i){s.oR.error(`${P("Forms.deleteProject.failed")}: ${i instanceof Error?i.message:String(i)}`)}})(),withActions:F})]})}}}]);
//# sourceMappingURL=583.bd40aaf6.chunk.js.map