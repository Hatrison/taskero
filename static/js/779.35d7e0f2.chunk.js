"use strict";(self.webpackChunktaskero=self.webpackChunktaskero||[]).push([[779],{988:(e,r,t)=>{t.d(r,{hX:()=>o,pU:()=>i,ph:()=>n});const o=e=>e.projects.items,n=e=>e.projects.current,i=e=>e.projects.loading},5779:(e,r,t)=>{t.r(r),t.d(r,{default:()=>me});var o=t(5043),n=t(5180),i=t(4961),s=t(2115),l=t(9867),d=t(3289),a=t(9006),c=t(988);const m=e=>e.columns.items,h=e=>e.tasks.items;var p=t(5939),u=t(9593),x=t(7784),j=t(3892),f=t(7142),g=t(7711),y=t(5464);const b=y.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 295px;
`;var v=t(899);const w=v.Ik().shape({members:v.YO().of(v.Ik().shape({email:v.Yj().email().required(),role:v.Yj().oneOf(["owner","editor","viewer"]).required()})).min(1).required()});var A=t(579);const $=e=>{let{handlerCloseModal:r,formName:t,projectId:o,withActions:n=!0}=e;const d=(0,l.jL)(),m=(0,l.GV)(c.ph),{t:h}=(0,i.B)();if(!m)return(0,A.jsx)(b,{children:(0,A.jsx)(p.A,{size:"60px",color:"#3e85f3"})});const u={members:m.members.map((e=>({email:e.user.email,role:e.role})))},x=m.members.map((e=>({...e.user,role:e.role})));return(0,A.jsx)(j.l1,{enableReinitialize:!0,initialValues:u,validationSchema:w,onSubmit:async e=>{try{await d((0,a.K4)({id:o,members:e.members})).unwrap(),s.oR.success(h("Forms.editProjectMembers.success")),r()}catch(t){s.oR.error(`${h("Forms.editProjectMembers.failed")}: ${t instanceof Error?t.message:String(t)}`)}},children:e=>{let{values:r,setFieldValue:o}=e;return(0,A.jsx)(g.q,{id:t,children:(0,A.jsx)(f.A,{value:r.members,users:x,onChange:e=>o("members",e),withActions:n,editableRoles:!0,availableRoles:["owner","editor","viewer"]})})}})},k=e=>{let{handlerCloseModal:r,projectId:t,withActions:o=!0}=e;const{t:n}=(0,i.B)(),s="edit-project-members-form";return(0,A.jsx)(u.A,{handlerCloseModal:r,children:(0,A.jsx)(x.A,{handlerCloseModal:r,title:n("Modals.editProjectMembers.title"),formName:s,withActions:o,children:(0,A.jsx)($,{handlerCloseModal:r,formName:s,projectId:t,withActions:o})})})},C=v.Ik({name:v.Yj().min(2).max(100).required("Required"),description:v.Yj().max(1e3),deadline:v.p6().nullable()}),M=y.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 295px;
`,P=e=>{let{handlerCloseModal:r,formName:t,withActions:o=!0}=e;const n=(0,l.jL)(),d=(0,l.GV)(c.ph),{t:m}=(0,i.B)();if(!d)return(0,A.jsx)(M,{children:(0,A.jsx)(p.A,{size:"60px",color:"#3e85f3"})});const h={name:d.name||"",description:d.description||"",deadline:d.deadline?d.deadline.slice(0,10):""};return(0,A.jsx)(j.l1,{initialValues:h,validationSchema:C,onSubmit:async e=>{try{await n((0,a.vr)({id:d._id,payload:e})).unwrap(),s.oR.success(m("Forms.editProject.success")),r()}catch(t){s.oR.error(`${m("Forms.editProject.failed")}: ${t instanceof Error?t.message:String(t)}`)}},children:e=>{let{values:r,errors:n,touched:i,handleChange:s,handleBlur:l}=e;return(0,A.jsxs)(g.q,{id:t,children:[(0,A.jsxs)(g.A0,{children:[(0,A.jsx)(g.JU,{children:m("Forms.editProject.name")}),(0,A.jsx)(g.pd,{name:"name",placeholder:m("Forms.editProject.namePlaceholder"),$hasError:i.name&&!!n.name,disabled:!o}),i.name&&n.name&&(0,A.jsx)(g.yn,{children:n.name})]}),(0,A.jsxs)(g.A0,{children:[(0,A.jsx)(g.JU,{children:m("Forms.editProject.description")}),(0,A.jsx)(g.TM,{name:"description",placeholder:m("Forms.editProject.descriptionPlaceholder"),value:r.description,onChange:s,onBlur:l,$hasError:i.description&&!!n.description,disabled:!o}),i.description&&n.description&&(0,A.jsx)(g.yn,{children:n.description})]}),(0,A.jsxs)(g.A0,{children:[(0,A.jsx)(g.JU,{children:m("Forms.editProject.deadline")}),(0,A.jsx)(g.pd,{name:"deadline",type:"date",disabled:!o})]})]})}})},S=e=>{let{handlerCloseModal:r,deleteAction:t=()=>{},withActions:o=!0}=e;const{t:n}=(0,i.B)(),s="edit-project-form";return(0,A.jsx)(u.A,{handlerCloseModal:r,children:(0,A.jsx)(x.A,{handlerCloseModal:r,title:n("Modals.editProject.title"),formName:s,deleteAction:t,withActions:o,children:(0,A.jsx)(P,{handlerCloseModal:r,formName:s,withActions:o})})})};var z=t(3875),F=t(279),E=t(2998);const R=y.Ay.header`
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
`,G=(0,y.Ay)(n.N_)`
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
`,T=y.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
`,I=y.Ay.button`
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
`;var B=t(184),N=t(5200),V=t(3538),q=t(9657);const O=e=>{let{name:r,avatar:t,toggleMembersModal:o,toggleSettingsModal:s}=e;const{t:l}=(0,i.B)(),d=(0,q.Ub)({query:"(max-width: 768px)"});return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(R,{children:[(0,A.jsxs)(G,{to:"/",children:[(0,A.jsx)(B._Jj,{size:16})," ",!d&&l("Project.backToProjects")]}),(0,A.jsx)(_,{children:r}),(0,A.jsxs)(T,{children:[(0,A.jsx)(z.A,{}),(0,A.jsx)(F.A,{}),(0,A.jsx)(I,{type:"button",onClick:()=>o(),children:(0,A.jsx)(V.Sy$,{size:20})}),(0,A.jsx)(I,{type:"button",onClick:()=>s(),children:(0,A.jsx)(N.VSk,{size:20})}),(0,A.jsx)(n.N_,{to:"/account",children:(0,A.jsx)(E.A,{src:t,size:36})})]})]})})},Y=y.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`,L=y.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${e=>{let{theme:r}=e;return r.background}};
`,U=y.Ay.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  background-color: ${e=>{let{theme:r}=e;return r.background}};
`;var D=t(9581);const J=e=>{let{handlerCloseModal:r,formName:t,columnId:o}=e;return(0,A.jsx)("div",{children:"CreateTaskForm"})},H=e=>{let{handlerCloseModal:r,columnId:t}=e;const{t:o}=(0,i.B)(),n="create-task-form";return(0,A.jsx)(u.A,{handlerCloseModal:r,children:(0,A.jsx)(x.A,{handlerCloseModal:r,title:o("Modals.createTask.title"),formName:n,children:(0,A.jsx)(J,{handlerCloseModal:r,formName:n,columnId:t})})})},X=y.Ay.div`
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
`,K=y.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 290px;
  height: 100%;
  padding: 16px;
  font-size: 16px;
  text-align: center;
  cursor: pointer;
`,Z=y.Ay.button`
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
`,Q=y.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,W=y.Ay.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
  word-break: break-word;
  overflow-wrap: break-word;
`,ee=y.Ay.input`
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  background-color: transparent;
  border: none;
  padding: 0px;

  &:focus {
    outline: none;
  }
`,re=y.Ay.div`
  display: flex;
  gap: 4px;
`,te=y.Ay.button`
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
`,oe=y.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`,ne=e=>{let{column:r,isEmpty:t,withActions:n,isEditable:d=!1,onClickEmpty:a}=e;const c=(0,l.jL)(),[m,h]=(0,o.useState)(!1),[p,u]=(0,o.useState)((null===r||void 0===r?void 0:r.name)||""),[x,j]=(0,o.useState)(!1),{t:f}=(0,i.B)(),g=(0,y.DP)();if(t)return n?(0,A.jsx)(X,{isEmpty:!0,onClick:a,children:(0,A.jsx)(K,{children:(0,A.jsxs)(Z,{children:[(0,A.jsx)(N.GGD,{size:16})," ",f("Project.columns.addColumn")]})})}):null;const b=()=>{j((e=>!e))};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(X,{children:[(0,A.jsx)(Q,{children:m?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(ee,{value:p,onChange:e=>u(e.target.value),autoFocus:!0}),(0,A.jsxs)(re,{children:[(0,A.jsx)(te,{type:"button",hoverColor:g.success,onClick:()=>(()=>{if(null!==r&&void 0!==r&&r._id)try{c((0,D.y$)({id:r._id,data:{name:p}}))}catch(e){s.oR.error(`${f("Project.columns.updateFailed")}: ${e instanceof Error?e.message:String(e)}`)}finally{h(!1)}})(),children:(0,A.jsx)(N.YrT,{size:20})}),(0,A.jsx)(te,{type:"button",hoverColor:g.primaryHover,onClick:()=>(u((null===r||void 0===r?void 0:r.name)||""),void h(!1)),children:(0,A.jsx)(N.yGN,{size:20})}),(0,A.jsx)(te,{type:"button",hoverColor:g.danger,onClick:()=>(()=>{if(null!==r&&void 0!==r&&r._id)try{c((0,D.gR)(r._id))}catch(e){s.oR.error(`${f("Project.columns.deleteFailed")}: ${e instanceof Error?e.message:String(e)}`)}})(),children:(0,A.jsx)(N.IXo,{size:20})})]})]}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(W,{children:null===r||void 0===r?void 0:r.name}),n&&(0,A.jsxs)(re,{children:[d&&(0,A.jsx)(te,{type:"button",onClick:()=>h(!0),children:(0,A.jsx)(N.Pj4,{size:20})}),(0,A.jsx)(te,{type:"button",onClick:()=>b(),children:(0,A.jsx)(N.GGD,{size:20})})]})]})}),(0,A.jsx)(oe,{children:null===r||void 0===r?void 0:r.tasks.map((e=>(0,A.jsx)("div",{children:e.title},e._id)))}),n&&(0,A.jsxs)(Z,{type:"button",onClick:()=>b(),children:[(0,A.jsx)(N.GGD,{size:16})," ",f("Project.columns.addTask")]})]}),x&&(0,A.jsx)(H,{handlerCloseModal:b,columnId:null===r||void 0===r?void 0:r._id})]})};var ie=t(8892),se=t(397);const le=y.Ay.div`
  display: flex;
  flex-direction: row;
  position: relative;
  gap: 24px;
  width: 100%;
  height: 100%;
  padding: 24px;
  overflow-x: auto;
`,de=y.Ay.button`
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
`,ae=y.Ay.div`
  display: flex;
  height: 100%;
  gap: 24px;
`,ce=e=>{var r;let{columns:t,topOffset:n=24,withActions:d=!1,onEditOrder:a}=e;const m=(0,l.jL)(),h=null===(r=(0,l.GV)(c.ph))||void 0===r?void 0:r._id,[p,u]=(0,o.useState)(!1),{t:x}=(0,i.B)(),j=()=>[...t].sort(((e,r)=>e.order-r.order));return(0,A.jsxs)(le,{children:[d&&(0,A.jsx)(de,{type:"button",topOffset:n+24,"data-active":p,onClick:()=>{u((e=>!e)),null===a||void 0===a||a()},children:(0,A.jsx)(se.p92,{size:20})}),p?(0,A.jsx)(ie.JY,{onDragEnd:e=>{if(!p)return;if(!e.destination)return;const{source:r,destination:t}=e;if(r.index===t.index)return;const o=[...j()],[n]=o.splice(r.index,1);o.splice(t.index,0,n);const i=o.map(((e,r)=>({...e,order:r})));try{m((0,D.Fh)({columns:i.map((e=>({id:e._id,order:e.order})))}))}catch(l){s.oR.error(`${x("Project.columns.reorderFailed")}: ${l instanceof Error?l.message:String(l)}`)}},children:(0,A.jsx)(ie.gL,{droppableId:"columns",direction:"horizontal",type:"column",children:e=>(0,A.jsxs)(ae,{ref:e.innerRef,...e.droppableProps,children:[j().map(((e,r)=>(0,A.jsx)(ie.sx,{draggableId:e._id,index:r,children:r=>(0,A.jsx)("div",{ref:r.innerRef,...r.draggableProps,...r.dragHandleProps,children:(0,A.jsx)(ne,{column:e,withActions:d,isEditable:p})})},e._id))),e.placeholder]})})}):(0,A.jsx)(ae,{children:j().map((e=>(0,A.jsx)(ne,{column:e,withActions:d},e._id)))}),p&&(0,A.jsx)(ne,{isEmpty:!0,withActions:d,onClickEmpty:()=>(()=>{if(h)try{const e={name:x("Project.columns.newColumn"),order:t.length,project:h};m((0,D.HA)(e))}catch(e){s.oR.error(`${x("Project.columns.addFailed")}: ${e instanceof Error?e.message:String(e)}`)}})()})]})},me=()=>{const{id:e}=(0,n.g)(),r=(0,n.Zp)(),t=(0,l.jL)(),u=(0,l.GV)(d.mB),x=(0,l.GV)(c.ph),j=(0,l.GV)(c.pU),f=(0,l.GV)(m),g=(0,l.GV)(h),y=(0,o.useRef)(null),[b,v]=(0,o.useState)(0),[w,$]=(0,o.useState)(!1),[C,M]=(0,o.useState)(!1),[P,z]=(0,o.useState)(!1),{t:F}=(0,i.B)();(0,o.useEffect)((()=>{if(!y.current)return;const e=new ResizeObserver((e=>{for(let r of e)v(r.contentRect.height)}));return e.observe(y.current),()=>e.disconnect()}),[]),(0,o.useEffect)((()=>{e&&t((0,a.kf)(e))}),[t,e]),(0,o.useEffect)((()=>{var e;const r=((null===x||void 0===x||null===(e=x.members)||void 0===e?void 0:e.filter((e=>"owner"===e.role)).map((e=>e.user._id)))||[]).includes(u._id);z(r)}),[u,x]);const E=()=>{$((e=>!e))},R=()=>{M((e=>!e))};return(0,A.jsxs)(Y,{children:[(0,A.jsx)("div",{ref:y,children:(0,A.jsx)(O,{name:(null===x||void 0===x?void 0:x.name)||"",avatar:u.avatar,toggleMembersModal:E,toggleSettingsModal:R})}),j?(0,A.jsx)(L,{children:(0,A.jsx)(p.A,{size:"60px",color:"#3e85f3"})}):(0,A.jsx)(U,{children:(0,A.jsx)(ce,{columns:f.map((e=>({...e,tasks:g})))||[],topOffset:b,withActions:P})}),w&&(0,A.jsx)(k,{handlerCloseModal:()=>E(),projectId:e||"",withActions:P}),C&&(0,A.jsx)(S,{handlerCloseModal:()=>R(),deleteAction:()=>(async()=>{if(e&&x)try{await t((0,a.xx)(x._id)),s.oR.success(F("Forms.deleteProject.success")),R(),r("/",{replace:!0})}catch(o){s.oR.error(`${F("Forms.deleteProject.failed")}: ${o instanceof Error?o.message:String(o)}`)}})(),withActions:P})]})}}}]);
//# sourceMappingURL=779.35d7e0f2.chunk.js.map