"use strict";(self.webpackChunktaskero=self.webpackChunktaskero||[]).push([[381],{988:(e,t,r)=>{r.d(t,{hX:()=>i,pU:()=>n,ph:()=>o});const i=e=>e.projects.items,o=e=>e.projects.current,n=e=>e.projects.loading},8381:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Qe});var i=r(5043),o=r(5180),n=r(4961),s=r(2115),l=r(9867),a=r(3289),d=r(9006),c=r(988);const p=e=>e.columns.items,h=e=>e.tasks.items;var u=r(5939),m=r(9593),x=r(7784),g=r(3892),f=r(7142),j=r(7711),y=r(5464);const b=y.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 295px;
`;var v=r(899);const w=v.Ik().shape({members:v.YO().of(v.Ik().shape({email:v.Yj().email().required(),role:v.Yj().oneOf(["owner","editor","viewer"]).required()})).min(1).required()});var k=r(579);const A=e=>{let{handlerCloseModal:t,formName:r,projectId:i,withActions:o=!0}=e;const a=(0,l.jL)(),p=(0,l.GV)(c.ph),{t:h}=(0,n.B)();if(!p)return(0,k.jsx)(b,{children:(0,k.jsx)(u.A,{size:"60px",color:"#3e85f3"})});const m={members:p.members.map((e=>({email:e.user.email,role:e.role})))},x=p.members.map((e=>({...e.user,role:e.role})));return(0,k.jsx)(g.l1,{enableReinitialize:!0,initialValues:m,validationSchema:w,onSubmit:async e=>{try{await a((0,d.K4)({id:i,members:e.members})).unwrap(),s.oR.success(h("Forms.editProjectMembers.success")),t()}catch(r){s.oR.error(`${h("Forms.editProjectMembers.failed")}: ${r instanceof Error?r.message:String(r)}`)}},children:e=>{let{values:t,setFieldValue:i}=e;return(0,k.jsx)(j.q,{id:r,children:(0,k.jsx)(f.A,{value:t.members,users:x,onChange:e=>i("members",e),withActions:o,editableRoles:!0,availableRoles:["owner","editor","viewer"]})})}})},C=e=>{let{handlerCloseModal:t,projectId:r,withActions:i=!0}=e;const{t:o}=(0,n.B)(),s="edit-project-members-form";return(0,k.jsx)(m.A,{handlerCloseModal:t,children:(0,k.jsx)(x.A,{handlerCloseModal:t,title:o("Modals.editProjectMembers.title"),formName:s,withActions:i,children:(0,k.jsx)(A,{handlerCloseModal:t,formName:s,projectId:r,withActions:i})})})},$=v.Ik({name:v.Yj().min(2).max(100).required("Required"),description:v.Yj().max(1e3),deadline:v.p6().nullable()}),T=y.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 295px;
`,F=e=>{let{handlerCloseModal:t,formName:r,withActions:i=!0}=e;const o=(0,l.jL)(),a=(0,l.GV)(c.ph),{t:p}=(0,n.B)();if(!a)return(0,k.jsx)(T,{children:(0,k.jsx)(u.A,{size:"60px",color:"#3e85f3"})});const h={name:a.name||"",description:a.description||"",deadline:a.deadline?a.deadline.slice(0,10):""};return(0,k.jsx)(g.l1,{initialValues:h,validationSchema:$,onSubmit:async e=>{try{await o((0,d.vr)({id:a._id,payload:e})).unwrap(),s.oR.success(p("Forms.editProject.success")),t()}catch(r){s.oR.error(`${p("Forms.editProject.failed")}: ${r instanceof Error?r.message:String(r)}`)}},children:e=>{let{values:t,errors:o,touched:n,handleChange:s,handleBlur:l}=e;return(0,k.jsxs)(j.q,{id:r,children:[(0,k.jsxs)(j.A0,{children:[(0,k.jsx)(j.JU,{children:p("Forms.editProject.name")}),(0,k.jsx)(j.pd,{name:"name",placeholder:p("Forms.editProject.namePlaceholder"),$hasError:n.name&&!!o.name,disabled:!i}),n.name&&o.name&&(0,k.jsx)(j.yn,{children:o.name})]}),(0,k.jsxs)(j.A0,{children:[(0,k.jsx)(j.JU,{children:p("Forms.editProject.description")}),(0,k.jsx)(j.TM,{name:"description",placeholder:p("Forms.editProject.descriptionPlaceholder"),value:t.description,onChange:s,onBlur:l,$hasError:n.description&&!!o.description,disabled:!i}),n.description&&o.description&&(0,k.jsx)(j.yn,{children:o.description})]}),(0,k.jsxs)(j.A0,{children:[(0,k.jsx)(j.JU,{children:p("Forms.editProject.deadline")}),(0,k.jsx)(j.pd,{name:"deadline",type:"date",disabled:!i})]})]})}})},S=e=>{let{handlerCloseModal:t,deleteAction:r=()=>{},withActions:i=!0}=e;const{t:o}=(0,n.B)(),s="edit-project-form";return(0,k.jsx)(m.A,{handlerCloseModal:t,children:(0,k.jsx)(x.A,{handlerCloseModal:t,title:o("Modals.editProject.title"),formName:s,deleteAction:r,withActions:i,children:(0,k.jsx)(F,{handlerCloseModal:t,formName:s,withActions:i})})})};var E=r(3875),M=r(279),R=r(2998);const P=y.Ay.header`
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
`,z=(0,y.Ay)(o.N_)`
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
`;var L=r(184),U=r(5200),D=r(3538),O=r(9657);const J=e=>{let{name:t,avatar:r,toggleMembersModal:i,toggleSettingsModal:s}=e;const{t:l}=(0,n.B)(),a=(0,O.Ub)({query:"(max-width: 768px)"});return(0,k.jsx)(k.Fragment,{children:(0,k.jsxs)(P,{children:[(0,k.jsxs)(z,{to:"/",children:[(0,k.jsx)(L._Jj,{size:16})," ",!a&&l("Project.backToProjects")]}),(0,k.jsx)(_,{children:t}),(0,k.jsxs)(I,{children:[(0,k.jsx)(E.A,{}),(0,k.jsx)(M.A,{}),(0,k.jsx)(B,{type:"button",onClick:()=>i(),children:(0,k.jsx)(D.Sy$,{size:20})}),(0,k.jsx)(B,{type:"button",onClick:()=>s(),children:(0,k.jsx)(U.VSk,{size:20})}),(0,k.jsx)(o.N_,{to:"/account",children:(0,k.jsx)(R.A,{src:r,size:36})})]})]})})},Y=y.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`,q=y.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${e=>{let{theme:t}=e;return t.background}};
`,N=y.Ay.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  background-color: ${e=>{let{theme:t}=e;return t.background}};
  overflow: hidden;
`;var V=r(9581),G=r(26),H=r(3367),K=r(551),X=r(7950),Z=r(3903);const Q=y.Ay.input`
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
`,W=e=>{let{value:t,onChange:r,placeholder:o="Search...",withActions:a=!1}=e;const p=(0,l.jL)(),h=(0,l.GV)(c.ph),[u,m]=(0,i.useState)(""),[x,g]=(0,i.useState)([]),[j,y]=(0,i.useState)(!1),[b,v]=(0,i.useState)({top:0,left:0,width:0}),w=(0,i.useRef)(null),A=(0,i.useRef)(null),C=(0,i.useRef)(0),{t:$}=(0,n.B)();(0,i.useEffect)((()=>{if(u.trim()&&null!==h&&void 0!==h&&h._id)return C.current&&clearTimeout(C.current),C.current=window.setTimeout((async()=>{try{const e=await p((0,d.RY)({projectId:h._id,query:u})).unwrap();g(e),y(!0)}catch(e){s.oR.error(`${$("Forms.createTask.searchFailed")}: ${e instanceof Error?e.message:String(e)}`),g([])}}),400),()=>clearTimeout(C.current);g([])}),[u,h,p,$]),(0,i.useEffect)((()=>{if(w.current){const e=w.current.getBoundingClientRect();v({top:e.bottom+4,left:e.left,width:e.width})}}),[j,x]),(0,i.useEffect)((()=>{const e=e=>{var t,r;const i=e.target;null!==(t=w.current)&&void 0!==t&&t.contains(i)||null!==(r=A.current)&&void 0!==r&&r.contains(i)||y(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)}),[]);return(0,k.jsxs)(k.Fragment,{children:[a&&(0,k.jsxs)(Z.mO,{children:[(0,k.jsx)(Q,{ref:w,value:u,placeholder:o,onChange:e=>m(e.target.value),onFocus:()=>x.length&&y(!0)}),j&&(0,X.createPortal)((0,k.jsx)(Z.ms,{ref:A,$top:b.top,$left:b.left,$width:b.width,children:x.map((e=>(0,k.jsxs)(Z.c$,{onClick:()=>(e=>{t.find((t=>t._id===e._id))||r([...t,e]),m(""),g([]),y(!1)})(e),children:[e.name," (",e.email,")"]},e._id)))}),document.body)]}),(0,k.jsx)(f.A,{users:t,withActions:a,onChange:e=>r(e),viewMode:!0})]})};var ee=r(3825);const te=y.Ay.div`
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
`,ie=document.getElementById("modal-root"),oe=e=>{let{children:t,onClose:r}=e;const o=(0,i.useCallback)((e=>{"Escape"===e.key&&r()}),[r]);(0,i.useEffect)((()=>(document.addEventListener("keydown",o),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",o),document.body.style.overflow=""})),[o]);return X.createPortal((0,k.jsx)(te,{onClick:e=>{e.target===e.currentTarget&&r()},children:(0,k.jsx)(re,{children:t})}),ie)},ne=y.Ay.div`
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
`,ce=e=>{let{images:t,startIndex:r,onClose:o}=e;const[n,s]=(0,i.useState)(r),l=(0,i.useCallback)((()=>{s((e=>0===e?t.length-1:e-1))}),[t.length]),a=(0,i.useCallback)((()=>{s((e=>e===t.length-1?0:e+1))}),[t.length]),d=(0,i.useCallback)((e=>{"ArrowLeft"===e.key&&l(),"ArrowRight"===e.key&&a()}),[l,a]);return(0,i.useEffect)((()=>(window.addEventListener("keydown",d),()=>window.removeEventListener("keydown",d))),[d]),(0,k.jsx)(oe,{onClose:o,children:(0,k.jsxs)(ne,{children:[(0,k.jsx)(ae,{type:"button",onClick:l,children:(0,k.jsx)(ee.qXl,{size:32})}),(0,k.jsx)(se,{src:t[n],alt:`Image ${n+1}`}),(0,k.jsx)(de,{type:"button",onClick:a,children:(0,k.jsx)(ee.BJp,{size:32})})]})})},pe=y.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,he=y.Ay.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`,ue=y.Ay.div`
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
`,me=y.Ay.button`
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
`,ge=y.Ay.label`
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
`,fe=e=>{let{files:t,editable:r,onChange:o}=e;const s=(0,i.useRef)(null),[l,a]=(0,i.useState)(null),[d,c]=(0,i.useState)(!1),{t:p}=(0,n.B)(),h=(0,i.useCallback)((e=>{const r=Array.from(e).map((e=>({url:URL.createObjectURL(e),file:e})));o([...t,...r])}),[t,o]);return(0,k.jsxs)(pe,{children:[(0,k.jsx)(he,{children:t.map(((e,i)=>(0,k.jsxs)(ue,{onClick:()=>a(i),children:[(0,k.jsx)("img",{src:e.url,alt:`attachment-${i}`}),r&&(0,k.jsx)(me,{type:"button",onClick:e=>{e.stopPropagation(),(e=>{const r=t.filter(((t,r)=>r!==e));o(r)})(i)},children:(0,k.jsx)(U.yGN,{size:20})})]},i)))}),r&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(xe,{ref:s,type:"file",accept:"image/*",multiple:!0,onChange:e=>{if(!e.target.files)return;const r=Array.from(e.target.files).map((e=>({url:URL.createObjectURL(e),file:e})));o([...t,...r]),e.target.value=""}}),(0,k.jsx)(ge,{isDragActive:d,onClick:()=>{var e;return null===(e=s.current)||void 0===e?void 0:e.click()},onDragEnter:e=>{e.preventDefault(),c(!0)},onDragLeave:e=>{e.preventDefault(),c(!1)},onDragOver:e=>{e.preventDefault()},onDrop:e=>{e.preventDefault(),c(!1),e.dataTransfer.files&&e.dataTransfer.files.length&&h(e.dataTransfer.files)},children:p("Forms.editTask.dragOrClick")})]}),null!==l&&(0,k.jsx)(ce,{images:t.map((e=>e.url)),startIndex:l,onClose:()=>a(null)})]})},je=v.Ik({title:v.Yj().min(2,"Title must be at least 2 characters").max(200,"Title must be at most 200 characters").required(),description:v.Yj().max(2e3,"Description must be at most 2000 characters").nullable(),assignedTo:v.YO().of(v.Ik().required()).optional(),priority:v.Yj().oneOf(["low","medium","high","critical"]).optional(),deadline:v.p6().nullable().optional(),attachments:v.YO().of(v.Ik({url:v.Yj().required(),file:v.gl().notRequired()})).optional()}),ye=y.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 295px;
`,be=e=>{var t;let{task:r,handlerCloseModal:i,formName:o,withActions:a=!0}=e;const d=(0,l.jL)(),{t:c}=(0,n.B)(),p={title:r.title||"",description:r.description||"",column:r.column||"",priority:r.priority||"medium",assignedTo:r.assignedTo||[],deadline:(null===(t=r.deadline)||void 0===t?void 0:t.slice(0,10))||"",attachments:(r.attachments||[]).map((e=>({url:e})))},h={low:"#4CAF50",medium:"#FF9800",high:"#F44336",critical:"#9C27B0"};return r?(0,k.jsx)(g.l1,{initialValues:p,validationSchema:je,onSubmit:async e=>{try{const t=new FormData;t.append("title",e.title),t.append("description",e.description||""),t.append("priority",e.priority),t.append("deadline",e.deadline||"");const o=e.assignedTo.map((e=>e._id));t.append("assignedTo",JSON.stringify(o));const n=e.attachments.filter((e=>!e.file)).map((e=>e.url));t.append("attachments",JSON.stringify(n)),e.attachments.filter((e=>e.file)).forEach((e=>{t.append("files",e.file)})),await d((0,G.lC)({id:r._id,formData:t})).unwrap(),s.oR.success(c("Forms.editTask.success")),i()}catch(t){s.oR.error(`${c("Forms.editTask.failed")}: ${t instanceof Error?t.message:String(t)}`)}},enableReinitialize:!0,children:e=>{let{values:t,errors:r,touched:i,handleChange:n,handleBlur:s,setFieldValue:l}=e;return(0,k.jsxs)(j.q,{id:o,children:[(0,k.jsxs)(j.A0,{children:[(0,k.jsx)(j.JU,{children:c("Forms.editTask.title")}),(0,k.jsx)(j.pd,{name:"title",placeholder:c("Forms.editTask.titlePlaceholder"),$hasError:i.title&&!!r.title,disabled:!a}),i.title&&r.title&&(0,k.jsx)(j.yn,{children:r.title})]}),(0,k.jsxs)(j.A0,{children:[(0,k.jsx)(j.JU,{children:c("Forms.editTask.description")}),(0,k.jsx)(j.TM,{name:"description",placeholder:c("Forms.editTask.descriptionPlaceholder"),value:t.description,onChange:n,onBlur:s,$hasError:i.description&&!!r.description,disabled:!a}),i.description&&r.description&&(0,k.jsx)(j.yn,{children:r.description})]}),(0,k.jsxs)(j.A0,{children:[(0,k.jsx)(j.JU,{children:c("Forms.editTask.priority")}),(0,k.jsx)(K.A,{options:["low","medium","high","critical"],value:t.priority,onChange:e=>l("priority",e),getLabel:e=>c(`Common.priority.${e}`),getKey:e=>e,getColor:e=>h[e],placeholder:c("Forms.editTask.priority"),disabled:!a})]}),(0,k.jsxs)(j.A0,{children:[(0,k.jsx)(j.JU,{children:c("Forms.editTask.assignedTo")}),(0,k.jsx)(W,{value:t.assignedTo,onChange:e=>l("assignedTo",e),placeholder:c("Forms.editTask.assigneePlaceholder"),withActions:a})]}),(0,k.jsxs)(j.A0,{children:[(0,k.jsx)(j.JU,{children:c("Forms.editTask.deadline")}),(0,k.jsx)(j.pd,{name:"deadline",type:"date",value:t.deadline,onChange:n,onBlur:s,disabled:!a})]}),(0,k.jsxs)(j.A0,{children:[(0,k.jsx)(j.JU,{children:c("Forms.editTask.attachments")}),(0,k.jsx)(fe,{files:t.attachments,editable:a,onChange:e=>l("attachments",e)})]})]})}}):(0,k.jsx)(ye,{children:(0,k.jsx)(u.A,{size:"60px",color:"#3e85f3"})})},ve=e=>{let{task:t,handlerCloseModal:r,deleteAction:i=()=>{},withActions:o=!0}=e;const{t:s}=(0,n.B)(),l="edit-task-form";return(0,k.jsx)(m.A,{handlerCloseModal:r,children:(0,k.jsx)(x.A,{handlerCloseModal:r,title:s("Modals.editTask.title"),formName:l,deleteAction:i,withActions:o,children:(0,k.jsx)(be,{task:t,handlerCloseModal:r,formName:l,withActions:o})})})},we={low:"priorityLow",medium:"priorityMedium",high:"priorityHigh",critical:"priorityCritical"},ke={low:"priorityTextLow",medium:"priorityTextMedium",high:"priorityTextHigh",critical:"priorityTextCritical"},Ae=y.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background-color: ${e=>{let{theme:t}=e;return t.background}};
  border-radius: 4px;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadow}};
`,Ce=y.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
`,$e=y.Ay.h3`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
`,Te=y.Ay.span`
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  color: ${e=>{let{theme:t,$priority:r}=e;return t[ke[r]]}};
  background-color: ${e=>{let{theme:t,$priority:r}=e;return t[we[r]]}};
`,Fe=y.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,Se=y.Ay.span`
  font-size: 14px;
  color: ${e=>{let{theme:t}=e;return t.secondaryText}};
`,Ee=e=>{let{task:t,withActions:r=!1}=e;const{title:o,deadline:a,priority:d,assignedTo:c}=t,p=(0,l.jL)(),[h,u]=(0,i.useState)(!1),{t:m}=(0,n.B)(),x=()=>{u((e=>!e))};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(Ae,{onClick:x,children:[(0,k.jsxs)(Ce,{children:[(0,k.jsx)($e,{children:o}),(0,k.jsx)(Te,{$priority:d,children:(g=d,g.charAt(0).toUpperCase()+g.slice(1))})]}),(0,k.jsxs)(Fe,{children:[(0,k.jsx)(H.A,{members:c}),a&&(0,k.jsx)(Se,{children:null===a||void 0===a?void 0:a.slice(0,10)})]})]}),h&&(0,k.jsx)(ve,{task:t,handlerCloseModal:x,deleteAction:async()=>{if(null!==t&&void 0!==t&&t._id)try{await p((0,G.vq)(t._id)),s.oR.success(m("Forms.deleteTask.success"))}catch(e){s.oR.error(`${m("Forms.deleteTask.failed")}: ${e instanceof Error?e.message:String(e)}`)}},withActions:r})]});var g},Me=v.Ik({title:v.Yj().min(2).max(200).required(),description:v.Yj().max(2e3).nullable(),assignedTo:v.YO().of(v.Yj()),priority:v.gl().oneOf(["low","medium","high","critical"]).default("medium"),deadline:v.p6().nullable()}),Re={title:"",description:"",deadline:"",priority:"medium"},Pe=e=>{let{handlerCloseModal:t,formName:r,columnId:o}=e;const a=(0,l.jL)(),d=(0,l.GV)(c.ph),[p,h]=(0,i.useState)([]),{t:u}=(0,n.B)(),m=(0,y.DP)(),x={low:m.priorityTextLow,medium:m.priorityTextMedium,high:m.priorityTextHigh,critical:m.priorityTextCritical};return(0,k.jsx)(g.l1,{initialValues:Re,validationSchema:Me,onSubmit:async e=>{if(null===d||void 0===d||!d._id||!o)return void s.oR.error(u("Forms.createTask.failed"));const r={...e,project:d._id,column:o,assignedTo:p.map((e=>e._id)),priority:e.priority};try{await a((0,G.UT)(r)).unwrap(),s.oR.success(u("Forms.createTask.success")),t()}catch(i){s.oR.error(`${u("Forms.createTask.failed")}: ${i instanceof Error?i.message:String(i)}`)}},children:e=>{let{values:t,errors:i,touched:o,handleChange:n,handleBlur:s}=e;return(0,k.jsxs)(j.q,{id:r,children:[(0,k.jsxs)(j.A0,{children:[(0,k.jsx)(j.JU,{children:u("Forms.createTask.title")}),(0,k.jsx)(j.pd,{name:"title",placeholder:u("Forms.createTask.titlePlaceholder"),$hasError:o.title&&!!i.title}),o.title&&i.title&&(0,k.jsx)(j.yn,{children:i.title})]}),(0,k.jsxs)(j.A0,{children:[(0,k.jsx)(j.JU,{children:u("Forms.createTask.description")}),(0,k.jsx)(j.TM,{name:"description",placeholder:u("Forms.createTask.descriptionPlaceholder"),value:t.description,onChange:n,onBlur:s,$hasError:o.description&&!!i.description}),o.description&&i.description&&(0,k.jsx)(j.yn,{children:i.description})]}),(0,k.jsxs)(j.A0,{children:[(0,k.jsx)(j.JU,{children:u("Forms.createTask.deadline")}),(0,k.jsx)(j.pd,{name:"deadline",type:"date"})]}),(0,k.jsxs)(j.A0,{children:[(0,k.jsx)(j.JU,{children:u("Forms.createTask.priority")}),(0,k.jsx)(K.A,{options:["low","medium","high","critical"],value:t.priority,onChange:e=>{n({target:{name:"priority",value:e}})},getLabel:e=>u(`Common.priority.${e}`),getKey:e=>e,getColor:e=>x[e],placeholder:u("Forms.createTask.priority")})]}),(0,k.jsxs)(j.A0,{children:[(0,k.jsx)(j.JU,{children:u("Forms.createTask.assignedTo")}),(0,k.jsx)(W,{value:p,onChange:h,placeholder:u("Forms.createTask.assigneePlaceholder"),withActions:!0})]})]})}})},_e=e=>{let{handlerCloseModal:t,columnId:r}=e;const{t:i}=(0,n.B)(),o="create-task-form";return(0,k.jsx)(m.A,{handlerCloseModal:t,children:(0,k.jsx)(x.A,{handlerCloseModal:t,title:i("Modals.createTask.title"),formName:o,children:(0,k.jsx)(Pe,{handlerCloseModal:t,formName:o,columnId:r})})})};var ze=r(8892);const Ie=y.Ay.div`
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
`,Be=y.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 290px;
  height: 100%;
  padding: 16px;
  font-size: 16px;
  text-align: center;
  cursor: ${e=>{let{loading:t}=e;return t?"default":"pointer"}};
`,Le=y.Ay.button`
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
`,Ue=y.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,De=y.Ay.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
  word-break: break-word;
  overflow-wrap: break-word;
`,Oe=y.Ay.input`
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
`,Je=y.Ay.div`
  display: flex;
  gap: 4px;
`,Ye=y.Ay.button`
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
`,qe=y.Ay.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  gap: 8px;
  overflow-y: auto;
  min-height: 100px;
`,Ne={critical:3,high:2,medium:1,low:0},Ve=e=>{let{column:t,isEmpty:r,withActions:o,isEditable:a=!1,onClickEmpty:d}=e;const c=(0,l.jL)(),[p,h]=(0,i.useState)(!1),[m,x]=(0,i.useState)((null===t||void 0===t?void 0:t.name)||""),[g,f]=(0,i.useState)(!1),{t:j}=(0,n.B)(),b=(0,y.DP)(),v=(0,i.useMemo)((()=>null!==t&&void 0!==t&&t.tasks?[...t.tasks].sort(((e,t)=>{var r,i;const o=null!==(r=Ne[e.priority])&&void 0!==r?r:0;return(null!==(i=Ne[t.priority])&&void 0!==i?i:0)-o})):[]),[null===t||void 0===t?void 0:t.tasks]);if(r)return o?(0,k.jsx)(Ie,{isEmpty:!0,onClick:d,children:(0,k.jsx)(Be,{children:(0,k.jsxs)(Le,{children:[(0,k.jsx)(U.GGD,{size:16})," ",j("Project.columns.addColumn")]})})}):null;if(!t)return(0,k.jsx)(Ie,{isEmpty:!0,children:(0,k.jsx)(Be,{loading:!0,children:(0,k.jsx)(u.A,{size:"60px",color:"#3e85f3"})})});const w=()=>{f((e=>!e))};return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(Ie,{children:[(0,k.jsx)(Ue,{children:p?(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(Oe,{value:m,onChange:e=>x(e.target.value),autoFocus:!0}),(0,k.jsxs)(Je,{children:[(0,k.jsx)(Ye,{type:"button",hoverColor:b.success,onClick:()=>(()=>{if(null!==t&&void 0!==t&&t._id)try{c((0,V.y$)({id:t._id,data:{name:m}}))}catch(e){s.oR.error(`${j("Project.columns.updateFailed")}: ${e instanceof Error?e.message:String(e)}`)}finally{h(!1)}})(),children:(0,k.jsx)(U.YrT,{size:20})}),(0,k.jsx)(Ye,{type:"button",hoverColor:b.primaryHover,onClick:()=>(x((null===t||void 0===t?void 0:t.name)||""),void h(!1)),children:(0,k.jsx)(U.yGN,{size:20})}),(0,k.jsx)(Ye,{type:"button",hoverColor:b.danger,onClick:()=>(()=>{if(null!==t&&void 0!==t&&t._id)try{c((0,V.gR)(t._id))}catch(e){s.oR.error(`${j("Project.columns.deleteFailed")}: ${e instanceof Error?e.message:String(e)}`)}})(),children:(0,k.jsx)(U.IXo,{size:20})})]})]}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(De,{children:null===t||void 0===t?void 0:t.name}),o&&(0,k.jsxs)(Je,{children:[a&&(0,k.jsx)(Ye,{type:"button",onClick:()=>h(!0),children:(0,k.jsx)(U.Pj4,{size:20})}),(0,k.jsx)(Ye,{type:"button",onClick:()=>w(),children:(0,k.jsx)(U.GGD,{size:20})})]})]})}),o?(0,k.jsx)(ze.gL,{droppableId:t._id,type:"task",children:e=>(0,k.jsxs)(qe,{ref:e.innerRef,...e.droppableProps,children:[v.map(((e,t)=>(0,k.jsx)(ze.sx,{draggableId:e._id,index:t,children:t=>(0,k.jsx)("div",{ref:t.innerRef,...t.draggableProps,...t.dragHandleProps,children:(0,k.jsx)(Ee,{task:e,withActions:o})})},e._id))),e.placeholder]})}):(0,k.jsx)(qe,{children:v.map((e=>(0,k.jsx)(Ee,{task:e,withActions:o},e._id)))})]}),g&&(0,k.jsx)(_e,{handlerCloseModal:w,columnId:null===t||void 0===t?void 0:t._id})]})};var Ge=r(397);const He=y.Ay.div`
  display: flex;
  flex-direction: row;
  position: relative;
  gap: 24px;
  width: 100%;
  height: 100%;
  padding: 24px;
  overflow-x: auto;
`,Ke=y.Ay.button`
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
`,Xe=y.Ay.div`
  display: flex;
  align-items: stretch;
  height: 100%;
  gap: 24px;
`,Ze=e=>{var t;let{columns:r,topOffset:o=24,withActions:a=!1,onEditOrder:d}=e;const p=(0,l.jL)(),h=null===(t=(0,l.GV)(c.ph))||void 0===t?void 0:t._id,[u,m]=(0,i.useState)(!1),{t:x}=(0,n.B)(),g=()=>[...r].sort(((e,t)=>e.order-t.order));return(0,k.jsxs)(He,{children:[a&&(0,k.jsx)(Ke,{type:"button",topOffset:o+24,"data-active":u,onClick:()=>{m((e=>!e)),null===d||void 0===d||d()},children:(0,k.jsx)(Ge.p92,{size:20})}),(0,k.jsxs)(ze.JY,{onDragEnd:async e=>{const{source:t,destination:i,draggableId:o,type:n}=e;if(i)if("column"!==n){if("task"===n){if(t.droppableId===i.droppableId&&t.index===i.index)return;const n=r.find((e=>e._id===t.droppableId)),l=null===n||void 0===n?void 0:n.tasks.find((e=>e._id===o));if(!l)return;const a=new FormData;return a.append("column",i.droppableId),void p((0,G.lC)({id:e.draggableId,formData:a})).unwrap().catch((e=>{s.oR.error(`${x("Project.columns.moveTaskFailed")}: ${e.message}`)}))}}else{if(!u||t.index===i.index)return;const e=[...g()],[r]=e.splice(t.index,1);e.splice(i.index,0,r);const o=e.map(((e,t)=>({id:e._id,order:t})));p((0,V.Fh)({columns:o})).unwrap().catch((e=>{s.oR.error(`${x("Project.columns.reorderFailed")}: ${e.message}`)}))}},children:[u&&a?(0,k.jsx)(ze.gL,{droppableId:"columns",direction:"horizontal",type:"column",children:e=>(0,k.jsxs)(Xe,{ref:e.innerRef,...e.droppableProps,children:[g().map(((e,t)=>(0,k.jsx)(ze.sx,{draggableId:e._id,index:t,children:t=>(0,k.jsx)("div",{ref:t.innerRef,...t.draggableProps,...t.dragHandleProps,children:(0,k.jsx)(Ve,{column:e,withActions:a,isEditable:u})})},e._id))),e.placeholder]})}):(0,k.jsx)(Xe,{children:g().map((e=>(0,k.jsx)(Ve,{column:e,withActions:a},e._id)))}),u&&(0,k.jsx)(Ve,{isEmpty:!0,withActions:a,onClickEmpty:()=>{if(h)try{const e={name:x("Project.columns.newColumn"),order:r.length,project:h};p((0,V.HA)(e))}catch(e){s.oR.error(`${x("Project.columns.addFailed")}: ${e instanceof Error?e.message:String(e)}`)}}})]})]})},Qe=()=>{const{id:e}=(0,o.g)(),t=(0,o.Zp)(),r=(0,l.jL)(),m=(0,l.GV)(a.mB),x=(0,l.GV)(c.ph),g=(0,l.GV)(c.pU),f=(0,l.GV)(p),j=(0,l.GV)(h),y=(0,i.useRef)(null),[b,v]=(0,i.useState)(0),[w,A]=(0,i.useState)(!1),[$,T]=(0,i.useState)(!1),[F,E]=(0,i.useState)(!1),[M,R]=(0,i.useState)(!1),{t:P}=(0,n.B)();(0,i.useEffect)((()=>{if(!y.current)return;const e=new ResizeObserver((e=>{for(let t of e)v(t.contentRect.height)}));return e.observe(y.current),()=>e.disconnect()}),[]),(0,i.useEffect)((()=>{e&&r((0,d.kf)(e))}),[r,e]),(0,i.useEffect)((()=>{var e,t;const r=(null===x||void 0===x||null===(e=x.members)||void 0===e?void 0:e.filter((e=>"owner"===e.role)).map((e=>e.user._id)))||[],i=(null===x||void 0===x||null===(t=x.members)||void 0===t?void 0:t.filter((e=>"editor"===e.role)).map((e=>e.user._id)))||[],o=r.includes(m._id),n=i.includes(m._id);E(o),R(o||n)}),[m,x]);const _=()=>{A((e=>!e))},z=()=>{T((e=>!e))},I=j.reduce(((e,t)=>(e[t.column]||(e[t.column]=[]),e[t.column].push(t),e)),{});return(0,k.jsxs)(Y,{children:[(0,k.jsx)("div",{ref:y,children:(0,k.jsx)(J,{name:(null===x||void 0===x?void 0:x.name)||"",avatar:m.avatar,toggleMembersModal:_,toggleSettingsModal:z})}),g?(0,k.jsx)(q,{children:(0,k.jsx)(u.A,{size:"60px",color:"#3e85f3"})}):(0,k.jsx)(N,{children:(0,k.jsx)(Ze,{columns:f.map((e=>({...e,tasks:I[e._id]||[]}))),topOffset:b,withActions:M})}),w&&(0,k.jsx)(C,{handlerCloseModal:()=>_(),projectId:e||"",withActions:F}),$&&(0,k.jsx)(S,{handlerCloseModal:()=>z(),deleteAction:()=>(async()=>{if(e&&x)try{await r((0,d.xx)(x._id)),s.oR.success(P("Forms.deleteProject.success")),z(),t("/",{replace:!0})}catch(i){s.oR.error(`${P("Forms.deleteProject.failed")}: ${i instanceof Error?i.message:String(i)}`)}})(),withActions:F})]})}}}]);
//# sourceMappingURL=381.1d05880a.chunk.js.map