"use strict";(self.webpackChunktaskero=self.webpackChunktaskero||[]).push([[647],{988:(e,r,t)=>{t.d(r,{hX:()=>i,pU:()=>n,ph:()=>o});const i=e=>e.projects.items,o=e=>e.projects.current,n=e=>e.projects.loading},9647:(e,r,t)=>{t.r(r),t.d(r,{default:()=>ge});var i=t(5043),o=t(5180),n=t(4961),s=t(2115),l=t(9867),d=t(3289),a=t(9006),c=t(988);const m=e=>e.columns.items,u=e=>e.tasks.items;var h=t(5939),p=t(9593),x=t(7784),j=t(3892),f=t(7142),g=t(7711),y=t(5464);const v=y.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 295px;
`;var b=t(899);const w=b.Ik().shape({members:b.YO().of(b.Ik().shape({email:b.Yj().email().required(),role:b.Yj().oneOf(["owner","editor","viewer"]).required()})).min(1).required()});var A=t(579);const k=e=>{let{handlerCloseModal:r,formName:t,projectId:i,withActions:o=!0}=e;const d=(0,l.jL)(),m=(0,l.GV)(c.ph),{t:u}=(0,n.B)();if(!m)return(0,A.jsx)(v,{children:(0,A.jsx)(h.A,{size:"60px",color:"#3e85f3"})});const p={members:m.members.map((e=>({email:e.user.email,role:e.role})))},x=m.members.map((e=>({...e.user,role:e.role})));return(0,A.jsx)(j.l1,{enableReinitialize:!0,initialValues:p,validationSchema:w,onSubmit:async e=>{try{await d((0,a.K4)({id:i,members:e.members})).unwrap(),s.oR.success(u("Forms.editProjectMembers.success")),r()}catch(t){s.oR.error(`${u("Forms.editProjectMembers.failed")}: ${t instanceof Error?t.message:String(t)}`)}},children:e=>{let{values:r,setFieldValue:i}=e;return(0,A.jsx)(g.q,{id:t,children:(0,A.jsx)(f.A,{value:r.members,users:x,onChange:e=>i("members",e),withActions:o,editableRoles:!0,availableRoles:["owner","editor","viewer"]})})}})},$=e=>{let{handlerCloseModal:r,projectId:t,withActions:i=!0}=e;const{t:o}=(0,n.B)(),s="edit-project-members-form";return(0,A.jsx)(p.A,{handlerCloseModal:r,children:(0,A.jsx)(x.A,{handlerCloseModal:r,title:o("Modals.editProjectMembers.title"),formName:s,withActions:i,children:(0,A.jsx)(k,{handlerCloseModal:r,formName:s,projectId:t,withActions:i})})})},C=b.Ik({name:b.Yj().min(2).max(100).required("Required"),description:b.Yj().max(1e3),deadline:b.p6().nullable()}),T=y.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 295px;
`,F=e=>{let{handlerCloseModal:r,formName:t,withActions:i=!0}=e;const o=(0,l.jL)(),d=(0,l.GV)(c.ph),{t:m}=(0,n.B)();if(!d)return(0,A.jsx)(T,{children:(0,A.jsx)(h.A,{size:"60px",color:"#3e85f3"})});const u={name:d.name||"",description:d.description||"",deadline:d.deadline?d.deadline.slice(0,10):""};return(0,A.jsx)(j.l1,{initialValues:u,validationSchema:C,onSubmit:async e=>{try{await o((0,a.vr)({id:d._id,payload:e})).unwrap(),s.oR.success(m("Forms.editProject.success")),r()}catch(t){s.oR.error(`${m("Forms.editProject.failed")}: ${t instanceof Error?t.message:String(t)}`)}},children:e=>{let{values:r,errors:o,touched:n,handleChange:s,handleBlur:l}=e;return(0,A.jsxs)(g.q,{id:t,children:[(0,A.jsxs)(g.A0,{children:[(0,A.jsx)(g.JU,{children:m("Forms.editProject.name")}),(0,A.jsx)(g.pd,{name:"name",placeholder:m("Forms.editProject.namePlaceholder"),$hasError:n.name&&!!o.name,disabled:!i}),n.name&&o.name&&(0,A.jsx)(g.yn,{children:o.name})]}),(0,A.jsxs)(g.A0,{children:[(0,A.jsx)(g.JU,{children:m("Forms.editProject.description")}),(0,A.jsx)(g.TM,{name:"description",placeholder:m("Forms.editProject.descriptionPlaceholder"),value:r.description,onChange:s,onBlur:l,$hasError:n.description&&!!o.description,disabled:!i}),n.description&&o.description&&(0,A.jsx)(g.yn,{children:o.description})]}),(0,A.jsxs)(g.A0,{children:[(0,A.jsx)(g.JU,{children:m("Forms.editProject.deadline")}),(0,A.jsx)(g.pd,{name:"deadline",type:"date",disabled:!i})]})]})}})},S=e=>{let{handlerCloseModal:r,deleteAction:t=()=>{},withActions:i=!0}=e;const{t:o}=(0,n.B)(),s="edit-project-form";return(0,A.jsx)(p.A,{handlerCloseModal:r,children:(0,A.jsx)(x.A,{handlerCloseModal:r,title:o("Modals.editProject.title"),formName:s,deleteAction:t,withActions:i,children:(0,A.jsx)(F,{handlerCloseModal:r,formName:s,withActions:i})})})};var M=t(3875),P=t(279),E=t(2998);const R=y.Ay.header`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  padding: 2px 16px 12px 16px;
  background-color: ${e=>{let{theme:r}=e;return r.background}};
  border-bottom: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};

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
  color: ${e=>{let{theme:r}=e;return r.primaryText}};

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
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
  cursor: pointer;
  transition: color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.primary}};
  }
`,B=y.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
`,G=y.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>{let{theme:r}=e;return r.backgroundSecondary}};
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  transition: color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.primary}};
  }
`;var I=t(184),V=t(5200),L=t(3538),N=t(9657);const U=e=>{let{name:r,avatar:t,toggleMembersModal:i,toggleSettingsModal:s}=e;const{t:l}=(0,n.B)(),d=(0,N.Ub)({query:"(max-width: 768px)"});return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(R,{children:[(0,A.jsxs)(z,{to:"/",children:[(0,A.jsx)(I._Jj,{size:16})," ",!d&&l("Project.backToProjects")]}),(0,A.jsx)(_,{children:r}),(0,A.jsxs)(B,{children:[(0,A.jsx)(M.A,{}),(0,A.jsx)(P.A,{}),(0,A.jsx)(G,{type:"button",onClick:()=>i(),children:(0,A.jsx)(L.Sy$,{size:20})}),(0,A.jsx)(G,{type:"button",onClick:()=>s(),children:(0,A.jsx)(V.VSk,{size:20})}),(0,A.jsx)(o.N_,{to:"/account",children:(0,A.jsx)(E.A,{src:t,size:36})})]})]})})},Y=y.Ay.div`
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
  background-color: ${e=>{let{theme:r}=e;return r.background}};
`,O=y.Ay.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  background-color: ${e=>{let{theme:r}=e;return r.background}};
`;var J=t(9581),D=t(26),H=t(551),K=t(7950),X=t(3903);const Z=e=>{let{value:r,onChange:t,placeholder:o="Search..."}=e;const d=(0,l.jL)(),m=(0,l.GV)(c.ph),[u,h]=(0,i.useState)(""),[p,x]=(0,i.useState)([]),[j,g]=(0,i.useState)(!1),[y,v]=(0,i.useState)({top:0,left:0,width:0}),b=(0,i.useRef)(null),w=(0,i.useRef)(null),k=(0,i.useRef)(0),{t:$}=(0,n.B)();(0,i.useEffect)((()=>{if(u.trim()&&null!==m&&void 0!==m&&m._id)return k.current&&clearTimeout(k.current),k.current=window.setTimeout((async()=>{try{const e=await d((0,a.RY)({projectId:m._id,query:u})).unwrap();x(e),g(!0)}catch(e){s.oR.error(`${$("Forms.createTask.searchFailed")}: ${e instanceof Error?e.message:String(e)}`),x([])}}),400),()=>clearTimeout(k.current);x([])}),[u,m,d,$]),(0,i.useEffect)((()=>{if(b.current){const e=b.current.getBoundingClientRect();v({top:e.bottom+4,left:e.left,width:e.width})}}),[j,p]),(0,i.useEffect)((()=>{const e=e=>{var r,t;const i=e.target;null!==(r=b.current)&&void 0!==r&&r.contains(i)||null!==(t=w.current)&&void 0!==t&&t.contains(i)||g(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)}),[]);return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(X.mO,{children:[(0,A.jsx)("input",{ref:b,value:u,placeholder:o,onChange:e=>h(e.target.value),onFocus:()=>p.length&&g(!0),style:{width:"100%",padding:"8px 12px",border:"1px solid #ccc",borderRadius:"6px",fontSize:"14px"}}),j&&(0,K.createPortal)((0,A.jsx)(X.ms,{ref:w,$top:y.top,$left:y.left,$width:y.width,children:p.map((e=>(0,A.jsxs)(X.c$,{onClick:()=>(e=>{r.find((r=>r._id===e._id))||t([...r,e]),h(""),x([]),g(!1)})(e),children:[e.name," (",e.email,")"]},e._id)))}),document.body)]}),(0,A.jsx)(f.A,{users:r,withActions:!0,onChange:e=>t(e),viewMode:!0})]})},Q=b.Ik({title:b.Yj().min(2).max(200).required(),description:b.Yj().max(2e3).nullable(),assignedTo:b.YO().of(b.Yj()),priority:b.gl().oneOf(["low","medium","high","critical"]).default("medium"),deadline:b.p6().nullable()}),W={title:"",description:"",deadline:"",priority:"medium"},ee=e=>{let{handlerCloseModal:r,formName:t,columnId:o}=e;const d=(0,l.jL)(),a=(0,l.GV)(c.ph),[m,u]=(0,i.useState)([]),{t:h}=(0,n.B)(),p=(0,y.DP)(),x={low:p.priorityTextLow,medium:p.priorityTextMedium,high:p.priorityTextHigh,critical:p.priorityTextCritical};return(0,A.jsx)(j.l1,{initialValues:W,validationSchema:Q,onSubmit:async e=>{if(null===a||void 0===a||!a._id||!o)return void s.oR.error(h("Forms.createTask.failed"));const t={...e,project:a._id,column:o,assignedTo:m.map((e=>e._id)),priority:e.priority};try{await d((0,D.UT)(t)).unwrap(),s.oR.success(h("Forms.createTask.success")),r()}catch(i){s.oR.error(`${h("Forms.createTask.failed")}: ${i instanceof Error?i.message:String(i)}`)}},children:e=>{let{values:r,errors:i,touched:o,handleChange:n,handleBlur:s}=e;return(0,A.jsxs)(g.q,{id:t,children:[(0,A.jsxs)(g.A0,{children:[(0,A.jsx)(g.JU,{children:h("Forms.createTask.title")}),(0,A.jsx)(g.pd,{name:"title",placeholder:h("Forms.createTask.titlePlaceholder"),$hasError:o.title&&!!i.title}),o.title&&i.title&&(0,A.jsx)(g.yn,{children:i.title})]}),(0,A.jsxs)(g.A0,{children:[(0,A.jsx)(g.JU,{children:h("Forms.createTask.description")}),(0,A.jsx)(g.TM,{name:"description",placeholder:h("Forms.createTask.descriptionPlaceholder"),value:r.description,onChange:n,onBlur:s,$hasError:o.description&&!!i.description}),o.description&&i.description&&(0,A.jsx)(g.yn,{children:i.description})]}),(0,A.jsxs)(g.A0,{children:[(0,A.jsx)(g.JU,{children:h("Forms.createTask.deadline")}),(0,A.jsx)(g.pd,{name:"deadline",type:"date"})]}),(0,A.jsxs)(g.A0,{children:[(0,A.jsx)(g.JU,{children:h("Forms.createTask.priority")}),(0,A.jsx)(H.A,{options:["low","medium","high","critical"],value:r.priority,onChange:e=>{n({target:{name:"priority",value:e}})},getLabel:e=>h(`Common.priority.${e}`),getKey:e=>e,getColor:e=>x[e],placeholder:h("Forms.createTask.priority")})]}),(0,A.jsxs)(g.A0,{children:[(0,A.jsx)(g.JU,{children:h("Forms.createTask.assignedTo")}),(0,A.jsx)(Z,{value:m,onChange:u,placeholder:h("Forms.createTask.assigneePlaceholder")})]})]})}})},re=e=>{let{handlerCloseModal:r,columnId:t}=e;const{t:i}=(0,n.B)(),o="create-task-form";return(0,A.jsx)(p.A,{handlerCloseModal:r,children:(0,A.jsx)(x.A,{handlerCloseModal:r,title:i("Modals.createTask.title"),formName:o,children:(0,A.jsx)(ee,{handlerCloseModal:r,formName:o,columnId:t})})})},te=y.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 290px;
  min-height: 100%;
  padding: ${e=>{let{isEmpty:r}=e;return r?"0":"16px"}};
  color: ${e=>{let{theme:r}=e;return r.secondaryText}};
  background-color: ${e=>{let{theme:r}=e;return r.backgroundSecondary}};
  border: 2px dashed ${e=>{let{theme:r}=e;return r.borderColor}};
  border-radius: 8px;
  cursor: default;
`,ie=y.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 290px;
  height: 100%;
  padding: 16px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
`,oe=y.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  background-color: transparent;
  color: ${e=>{let{theme:r}=e;return r.secondaryText}};
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  transition: color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.primary}};
  }
`,ne=y.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,se=y.Ay.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
  word-break: break-word;
  overflow-wrap: break-word;
`,le=y.Ay.input`
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  background-color: transparent;
  border: none;
  padding: 0px;

  &:focus {
    outline: none;
  }
`,de=y.Ay.div`
  display: flex;
  gap: 4px;
`,ae=y.Ay.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  transition: color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    color: ${e=>{let{hoverColor:r,theme:t}=e;return r||t.primary}};
  }
`,ce=y.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,me=e=>{let{column:r,isEmpty:t,withActions:o,isEditable:d=!1,onClickEmpty:a}=e;const c=(0,l.jL)(),[m,u]=(0,i.useState)(!1),[h,p]=(0,i.useState)((null===r||void 0===r?void 0:r.name)||""),[x,j]=(0,i.useState)(!1),{t:f}=(0,n.B)(),g=(0,y.DP)();if(t)return o?(0,A.jsx)(te,{isEmpty:!0,onClick:a,children:(0,A.jsx)(ie,{children:(0,A.jsxs)(oe,{children:[(0,A.jsx)(V.GGD,{size:16})," ",f("Project.columns.addColumn")]})})}):null;const v=()=>{j((e=>!e))};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(te,{children:[(0,A.jsx)(ne,{children:m?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(le,{value:h,onChange:e=>p(e.target.value),autoFocus:!0}),(0,A.jsxs)(de,{children:[(0,A.jsx)(ae,{type:"button",hoverColor:g.success,onClick:()=>(()=>{if(null!==r&&void 0!==r&&r._id)try{c((0,J.y$)({id:r._id,data:{name:h}}))}catch(e){s.oR.error(`${f("Project.columns.updateFailed")}: ${e instanceof Error?e.message:String(e)}`)}finally{u(!1)}})(),children:(0,A.jsx)(V.YrT,{size:20})}),(0,A.jsx)(ae,{type:"button",hoverColor:g.primaryHover,onClick:()=>(p((null===r||void 0===r?void 0:r.name)||""),void u(!1)),children:(0,A.jsx)(V.yGN,{size:20})}),(0,A.jsx)(ae,{type:"button",hoverColor:g.danger,onClick:()=>(()=>{if(null!==r&&void 0!==r&&r._id)try{c((0,J.gR)(r._id))}catch(e){s.oR.error(`${f("Project.columns.deleteFailed")}: ${e instanceof Error?e.message:String(e)}`)}})(),children:(0,A.jsx)(V.IXo,{size:20})})]})]}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(se,{children:null===r||void 0===r?void 0:r.name}),o&&(0,A.jsxs)(de,{children:[d&&(0,A.jsx)(ae,{type:"button",onClick:()=>u(!0),children:(0,A.jsx)(V.Pj4,{size:20})}),(0,A.jsx)(ae,{type:"button",onClick:()=>v(),children:(0,A.jsx)(V.GGD,{size:20})})]})]})}),(0,A.jsx)(ce,{children:null===r||void 0===r?void 0:r.tasks.map((e=>(0,A.jsx)("div",{children:e.title},e._id)))}),o&&(0,A.jsxs)(oe,{type:"button",onClick:()=>v(),children:[(0,A.jsx)(V.GGD,{size:16})," ",f("Project.columns.addTask")]})]}),x&&(0,A.jsx)(re,{handlerCloseModal:v,columnId:null===r||void 0===r?void 0:r._id})]})};var ue=t(8892),he=t(397);const pe=y.Ay.div`
  display: flex;
  flex-direction: row;
  position: relative;
  gap: 24px;
  width: 100%;
  height: 100%;
  padding: 24px;
  overflow-x: auto;
`,xe=y.Ay.button`
  position: fixed;
  top: ${e=>{let{topOffset:r}=e;return`${r}px`}};
  right: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>{let{theme:r}=e;return r.backgroundSecondary}};
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
  border: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  transition: color ${e=>{let{theme:r}=e;return r.animation}},
    border-color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.primary}};
    border-color: ${e=>{let{theme:r}=e;return r.primary}};
  }

  &[data-active="true"] {
    color: ${e=>{let{theme:r}=e;return r.invertedText}};
    background-color: ${e=>{let{theme:r}=e;return r.primary}};
    border-color: ${e=>{let{theme:r}=e;return r.primary}};
  }
`,je=y.Ay.div`
  display: flex;
  height: 100%;
  gap: 24px;
`,fe=e=>{var r;let{columns:t,topOffset:o=24,withActions:d=!1,onEditOrder:a}=e;const m=(0,l.jL)(),u=null===(r=(0,l.GV)(c.ph))||void 0===r?void 0:r._id,[h,p]=(0,i.useState)(!1),{t:x}=(0,n.B)(),j=()=>[...t].sort(((e,r)=>e.order-r.order));return(0,A.jsxs)(pe,{children:[d&&(0,A.jsx)(xe,{type:"button",topOffset:o+24,"data-active":h,onClick:()=>{p((e=>!e)),null===a||void 0===a||a()},children:(0,A.jsx)(he.p92,{size:20})}),h?(0,A.jsx)(ue.JY,{onDragEnd:e=>{if(!h)return;if(!e.destination)return;const{source:r,destination:t}=e;if(r.index===t.index)return;const i=[...j()],[o]=i.splice(r.index,1);i.splice(t.index,0,o);const n=i.map(((e,r)=>({...e,order:r})));try{m((0,J.Fh)({columns:n.map((e=>({id:e._id,order:e.order})))}))}catch(l){s.oR.error(`${x("Project.columns.reorderFailed")}: ${l instanceof Error?l.message:String(l)}`)}},children:(0,A.jsx)(ue.gL,{droppableId:"columns",direction:"horizontal",type:"column",children:e=>(0,A.jsxs)(je,{ref:e.innerRef,...e.droppableProps,children:[j().map(((e,r)=>(0,A.jsx)(ue.sx,{draggableId:e._id,index:r,children:r=>(0,A.jsx)("div",{ref:r.innerRef,...r.draggableProps,...r.dragHandleProps,children:(0,A.jsx)(me,{column:e,withActions:d,isEditable:h})})},e._id))),e.placeholder]})})}):(0,A.jsx)(je,{children:j().map((e=>(0,A.jsx)(me,{column:e,withActions:d},e._id)))}),h&&(0,A.jsx)(me,{isEmpty:!0,withActions:d,onClickEmpty:()=>(()=>{if(u)try{const e={name:x("Project.columns.newColumn"),order:t.length,project:u};m((0,J.HA)(e))}catch(e){s.oR.error(`${x("Project.columns.addFailed")}: ${e instanceof Error?e.message:String(e)}`)}})()})]})},ge=()=>{const{id:e}=(0,o.g)(),r=(0,o.Zp)(),t=(0,l.jL)(),p=(0,l.GV)(d.mB),x=(0,l.GV)(c.ph),j=(0,l.GV)(c.pU),f=(0,l.GV)(m),g=(0,l.GV)(u),y=(0,i.useRef)(null),[v,b]=(0,i.useState)(0),[w,k]=(0,i.useState)(!1),[C,T]=(0,i.useState)(!1),[F,M]=(0,i.useState)(!1),{t:P}=(0,n.B)();(0,i.useEffect)((()=>{if(!y.current)return;const e=new ResizeObserver((e=>{for(let r of e)b(r.contentRect.height)}));return e.observe(y.current),()=>e.disconnect()}),[]),(0,i.useEffect)((()=>{e&&t((0,a.kf)(e))}),[t,e]),(0,i.useEffect)((()=>{var e;const r=((null===x||void 0===x||null===(e=x.members)||void 0===e?void 0:e.filter((e=>"owner"===e.role)).map((e=>e.user._id)))||[]).includes(p._id);M(r)}),[p,x]);const E=()=>{k((e=>!e))},R=()=>{T((e=>!e))},_=g.reduce(((e,r)=>(e[r.column]||(e[r.column]=[]),e[r.column].push(r),e)),{});return(0,A.jsxs)(Y,{children:[(0,A.jsx)("div",{ref:y,children:(0,A.jsx)(U,{name:(null===x||void 0===x?void 0:x.name)||"",avatar:p.avatar,toggleMembersModal:E,toggleSettingsModal:R})}),j?(0,A.jsx)(q,{children:(0,A.jsx)(h.A,{size:"60px",color:"#3e85f3"})}):(0,A.jsx)(O,{children:(0,A.jsx)(fe,{columns:f.map((e=>({...e,tasks:_[e._id]||[]}))),topOffset:v,withActions:F})}),w&&(0,A.jsx)($,{handlerCloseModal:()=>E(),projectId:e||"",withActions:F}),C&&(0,A.jsx)(S,{handlerCloseModal:()=>R(),deleteAction:()=>(async()=>{if(e&&x)try{await t((0,a.xx)(x._id)),s.oR.success(P("Forms.deleteProject.success")),R(),r("/",{replace:!0})}catch(i){s.oR.error(`${P("Forms.deleteProject.failed")}: ${i instanceof Error?i.message:String(i)}`)}})(),withActions:F})]})}}}]);
//# sourceMappingURL=647.bff04403.chunk.js.map