"use strict";(self.webpackChunktaskero=self.webpackChunktaskero||[]).push([[616],{988:(e,r,t)=>{t.d(r,{hX:()=>i,pU:()=>n,ph:()=>o});const i=e=>e.projects.items,o=e=>e.projects.current,n=e=>e.projects.loading},5616:(e,r,t)=>{t.r(r),t.d(r,{default:()=>Ee});var i=t(5043),o=t(5180),n=t(4961),s=t(2115),l=t(9867),a=t(3289),d=t(9006),c=t(988);const h=e=>e.columns.items,p=e=>e.tasks.items;var m=t(5939),u=t(9593),x=t(7784),j=t(3892),g=t(7142),f=t(7711),y=t(5464);const v=y.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 295px;
`;var b=t(899);const w=b.Ik().shape({members:b.YO().of(b.Ik().shape({email:b.Yj().email().required(),role:b.Yj().oneOf(["owner","editor","viewer"]).required()})).min(1).required()});var A=t(579);const k=e=>{let{handlerCloseModal:r,formName:t,projectId:i,withActions:o=!0}=e;const a=(0,l.jL)(),h=(0,l.GV)(c.ph),{t:p}=(0,n.B)();if(!h)return(0,A.jsx)(v,{children:(0,A.jsx)(m.A,{size:"60px",color:"#3e85f3"})});const u={members:h.members.map((e=>({email:e.user.email,role:e.role})))},x=h.members.map((e=>({...e.user,role:e.role})));return(0,A.jsx)(j.l1,{enableReinitialize:!0,initialValues:u,validationSchema:w,onSubmit:async e=>{try{await a((0,d.K4)({id:i,members:e.members})).unwrap(),s.oR.success(p("Forms.editProjectMembers.success")),r()}catch(t){s.oR.error(`${p("Forms.editProjectMembers.failed")}: ${t instanceof Error?t.message:String(t)}`)}},children:e=>{let{values:r,setFieldValue:i}=e;return(0,A.jsx)(f.q,{id:t,children:(0,A.jsx)(g.A,{value:r.members,users:x,onChange:e=>i("members",e),withActions:o,editableRoles:!0,availableRoles:["owner","editor","viewer"]})})}})},$=e=>{let{handlerCloseModal:r,projectId:t,withActions:i=!0}=e;const{t:o}=(0,n.B)(),s="edit-project-members-form";return(0,A.jsx)(u.A,{handlerCloseModal:r,children:(0,A.jsx)(x.A,{handlerCloseModal:r,title:o("Modals.editProjectMembers.title"),formName:s,withActions:i,children:(0,A.jsx)(k,{handlerCloseModal:r,formName:s,projectId:t,withActions:i})})})},C=b.Ik({name:b.Yj().min(2).max(100).required("Required"),description:b.Yj().max(1e3),deadline:b.p6().nullable()}),T=y.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 295px;
`,F=e=>{let{handlerCloseModal:r,formName:t,withActions:i=!0}=e;const o=(0,l.jL)(),a=(0,l.GV)(c.ph),{t:h}=(0,n.B)();if(!a)return(0,A.jsx)(T,{children:(0,A.jsx)(m.A,{size:"60px",color:"#3e85f3"})});const p={name:a.name||"",description:a.description||"",deadline:a.deadline?a.deadline.slice(0,10):""};return(0,A.jsx)(j.l1,{initialValues:p,validationSchema:C,onSubmit:async e=>{try{await o((0,d.vr)({id:a._id,payload:e})).unwrap(),s.oR.success(h("Forms.editProject.success")),r()}catch(t){s.oR.error(`${h("Forms.editProject.failed")}: ${t instanceof Error?t.message:String(t)}`)}},children:e=>{let{values:r,errors:o,touched:n,handleChange:s,handleBlur:l}=e;return(0,A.jsxs)(f.q,{id:t,children:[(0,A.jsxs)(f.A0,{children:[(0,A.jsx)(f.JU,{children:h("Forms.editProject.name")}),(0,A.jsx)(f.pd,{name:"name",placeholder:h("Forms.editProject.namePlaceholder"),$hasError:n.name&&!!o.name,disabled:!i}),n.name&&o.name&&(0,A.jsx)(f.yn,{children:o.name})]}),(0,A.jsxs)(f.A0,{children:[(0,A.jsx)(f.JU,{children:h("Forms.editProject.description")}),(0,A.jsx)(f.TM,{name:"description",placeholder:h("Forms.editProject.descriptionPlaceholder"),value:r.description,onChange:s,onBlur:l,$hasError:n.description&&!!o.description,disabled:!i}),n.description&&o.description&&(0,A.jsx)(f.yn,{children:o.description})]}),(0,A.jsxs)(f.A0,{children:[(0,A.jsx)(f.JU,{children:h("Forms.editProject.deadline")}),(0,A.jsx)(f.pd,{name:"deadline",type:"date",disabled:!i})]})]})}})},M=e=>{let{handlerCloseModal:r,deleteAction:t=()=>{},withActions:i=!0}=e;const{t:o}=(0,n.B)(),s="edit-project-form";return(0,A.jsx)(u.A,{handlerCloseModal:r,children:(0,A.jsx)(x.A,{handlerCloseModal:r,title:o("Modals.editProject.title"),formName:s,deleteAction:t,withActions:i,children:(0,A.jsx)(F,{handlerCloseModal:r,formName:s,withActions:i})})})};var S=t(3875),P=t(279),_=t(2998);const R=y.Ay.header`
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
`,E=y.Ay.h1`
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
`,I=y.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
`,B=y.Ay.button`
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
`;var U=t(184),J=t(5200),L=t(3538),Y=t(9657);const N=e=>{let{name:r,avatar:t,toggleMembersModal:i,toggleSettingsModal:s}=e;const{t:l}=(0,n.B)(),a=(0,Y.Ub)({query:"(max-width: 768px)"});return(0,A.jsx)(A.Fragment,{children:(0,A.jsxs)(R,{children:[(0,A.jsxs)(z,{to:"/",children:[(0,A.jsx)(U._Jj,{size:16})," ",!a&&l("Project.backToProjects")]}),(0,A.jsx)(E,{children:r}),(0,A.jsxs)(I,{children:[(0,A.jsx)(S.A,{}),(0,A.jsx)(P.A,{}),(0,A.jsx)(B,{type:"button",onClick:()=>i(),children:(0,A.jsx)(L.Sy$,{size:20})}),(0,A.jsx)(B,{type:"button",onClick:()=>s(),children:(0,A.jsx)(J.VSk,{size:20})}),(0,A.jsx)(o.N_,{to:"/account",children:(0,A.jsx)(_.A,{src:t,size:36})})]})]})})},V=y.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`,O=y.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${e=>{let{theme:r}=e;return r.background}};
`,G=y.Ay.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  background-color: ${e=>{let{theme:r}=e;return r.background}};
  overflow: hidden;
`;var q=t(9581),D=t(26),H=t(3367),K=t(551),X=t(7950),Z=t(3903);const Q=y.Ay.input`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  border: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
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
`,W=e=>{let{value:r,onChange:t,placeholder:o="Search...",withActions:a=!1}=e;const h=(0,l.jL)(),p=(0,l.GV)(c.ph),[m,u]=(0,i.useState)(""),[x,j]=(0,i.useState)([]),[f,y]=(0,i.useState)(!1),[v,b]=(0,i.useState)({top:0,left:0,width:0}),w=(0,i.useRef)(null),k=(0,i.useRef)(null),$=(0,i.useRef)(0),{t:C}=(0,n.B)();(0,i.useEffect)((()=>{if(m.trim()&&null!==p&&void 0!==p&&p._id)return $.current&&clearTimeout($.current),$.current=window.setTimeout((async()=>{try{const e=await h((0,d.RY)({projectId:p._id,query:m})).unwrap();j(e),y(!0)}catch(e){s.oR.error(`${C("Forms.createTask.searchFailed")}: ${e instanceof Error?e.message:String(e)}`),j([])}}),400),()=>clearTimeout($.current);j([])}),[m,p,h,C]),(0,i.useEffect)((()=>{if(w.current){const e=w.current.getBoundingClientRect();b({top:e.bottom+4,left:e.left,width:e.width})}}),[f,x]),(0,i.useEffect)((()=>{const e=e=>{var r,t;const i=e.target;null!==(r=w.current)&&void 0!==r&&r.contains(i)||null!==(t=k.current)&&void 0!==t&&t.contains(i)||y(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)}),[]);return(0,A.jsxs)(A.Fragment,{children:[a&&(0,A.jsxs)(Z.mO,{children:[(0,A.jsx)(Q,{ref:w,value:m,placeholder:o,onChange:e=>u(e.target.value),onFocus:()=>x.length&&y(!0)}),f&&(0,X.createPortal)((0,A.jsx)(Z.ms,{ref:k,$top:v.top,$left:v.left,$width:v.width,children:x.map((e=>(0,A.jsxs)(Z.c$,{onClick:()=>(e=>{r.find((r=>r._id===e._id))||t([...r,e]),u(""),j([]),y(!1)})(e),children:[e.name," (",e.email,")"]},e._id)))}),document.body)]}),(0,A.jsx)(g.A,{users:r,withActions:a,onChange:e=>t(e),viewMode:!0})]})},ee=b.Ik({title:b.Yj().min(2,"Title must be at least 2 characters").max(200,"Title must be at most 200 characters").optional(),description:b.Yj().max(2e3,"Description must be at most 2000 characters").nullable(),assignedTo:b.YO().of(b.Ik().required()).optional(),priority:b.Yj().oneOf(["low","medium","high","critical"]).optional(),deadline:b.p6().nullable().optional(),attachments:b.YO().of(b.Yj().url()).optional()}),re=y.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 295px;
`,te=e=>{var r;let{task:t,handlerCloseModal:i,formName:o,withActions:a=!0}=e;const d=(0,l.jL)(),{t:c}=(0,n.B)(),h={title:t.title||"",description:t.description||"",column:t.column||"",priority:t.priority||"medium",assignedTo:t.assignedTo||[],deadline:(null===(r=t.deadline)||void 0===r?void 0:r.slice(0,10))||"",attachments:t.attachments||[]},p={low:"#4CAF50",medium:"#FF9800",high:"#F44336",critical:"#9C27B0"};return t?(0,A.jsx)(j.l1,{initialValues:h,validationSchema:ee,onSubmit:async e=>{try{const r=new FormData;r.append("title",e.title),r.append("description",e.description||""),r.append("priority",e.priority),r.append("deadline",e.deadline||"");const o=e.assignedTo.map((e=>e._id));r.append("assignedTo",JSON.stringify(o)),r.append("attachments",JSON.stringify(e.attachments)),await d((0,D.lC)({id:t._id,formData:r})).unwrap(),s.oR.success(c("Forms.editTask.success")),i()}catch(r){s.oR.error(`${c("Forms.editTask.failed")}: ${r instanceof Error?r.message:String(r)}`)}},enableReinitialize:!0,children:e=>{let{values:r,errors:t,touched:i,handleChange:n,handleBlur:s,setFieldValue:l}=e;return(0,A.jsxs)(f.q,{id:o,children:[(0,A.jsxs)(f.A0,{children:[(0,A.jsx)(f.JU,{children:c("Forms.editTask.title")}),(0,A.jsx)(f.pd,{name:"title",placeholder:c("Forms.editTask.titlePlaceholder"),$hasError:i.title&&!!t.title,disabled:!a}),i.title&&t.title&&(0,A.jsx)(f.yn,{children:t.title})]}),(0,A.jsxs)(f.A0,{children:[(0,A.jsx)(f.JU,{children:c("Forms.editTask.description")}),(0,A.jsx)(f.TM,{name:"description",placeholder:c("Forms.editTask.descriptionPlaceholder"),value:r.description,onChange:n,onBlur:s,$hasError:i.description&&!!t.description,disabled:!a}),i.description&&t.description&&(0,A.jsx)(f.yn,{children:t.description})]}),(0,A.jsxs)(f.A0,{children:[(0,A.jsx)(f.JU,{children:c("Forms.editTask.priority")}),(0,A.jsx)(K.A,{options:["low","medium","high","critical"],value:r.priority,onChange:e=>l("priority",e),getLabel:e=>c(`Common.priority.${e}`),getKey:e=>e,getColor:e=>p[e],placeholder:c("Forms.editTask.priority"),disabled:!a})]}),(0,A.jsxs)(f.A0,{children:[(0,A.jsx)(f.JU,{children:c("Forms.editTask.assignedTo")}),(0,A.jsx)(W,{value:r.assignedTo,onChange:e=>l("assignedTo",e),placeholder:c("Forms.editTask.assigneePlaceholder"),withActions:a})]}),(0,A.jsxs)(f.A0,{children:[(0,A.jsx)(f.JU,{children:c("Forms.editTask.deadline")}),(0,A.jsx)(f.pd,{name:"deadline",type:"date",value:r.deadline,onChange:n,onBlur:s,disabled:!a})]}),(0,A.jsx)(f.A0,{children:(0,A.jsx)(f.JU,{children:c("Forms.editTask.attachments")})})]})}}):(0,A.jsx)(re,{children:(0,A.jsx)(m.A,{size:"60px",color:"#3e85f3"})})},ie=e=>{let{task:r,handlerCloseModal:t,deleteAction:i=()=>{},withActions:o=!0}=e;const{t:s}=(0,n.B)(),l="edit-task-form";return(0,A.jsx)(u.A,{handlerCloseModal:t,children:(0,A.jsx)(x.A,{handlerCloseModal:t,title:s("Modals.editTask.title"),formName:l,deleteAction:i,withActions:o,children:(0,A.jsx)(te,{task:r,handlerCloseModal:t,formName:l,withActions:o})})})},oe={low:"priorityLow",medium:"priorityMedium",high:"priorityHigh",critical:"priorityCritical"},ne={low:"priorityTextLow",medium:"priorityTextMedium",high:"priorityTextHigh",critical:"priorityTextCritical"},se=y.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
  background-color: ${e=>{let{theme:r}=e;return r.background}};
  border-radius: 4px;
  box-shadow: ${e=>{let{theme:r}=e;return r.shadow}};
`,le=y.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
`,ae=y.Ay.h3`
  font-size: 16px;
  font-weight: 500;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
`,de=y.Ay.span`
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
  color: ${e=>{let{theme:r,$priority:t}=e;return r[ne[t]]}};
  background-color: ${e=>{let{theme:r,$priority:t}=e;return r[oe[t]]}};
`,ce=y.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,he=y.Ay.span`
  font-size: 14px;
  color: ${e=>{let{theme:r}=e;return r.secondaryText}};
`,pe=e=>{let{task:r,withActions:t=!1}=e;const{title:o,deadline:a,priority:d,assignedTo:c}=r,h=(0,l.jL)(),[p,m]=(0,i.useState)(!1),{t:u}=(0,n.B)(),x=()=>{m((e=>!e))};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(se,{onClick:x,children:[(0,A.jsxs)(le,{children:[(0,A.jsx)(ae,{children:o}),(0,A.jsx)(de,{$priority:d,children:(j=d,j.charAt(0).toUpperCase()+j.slice(1))})]}),(0,A.jsxs)(ce,{children:[(0,A.jsx)(H.A,{members:c}),a&&(0,A.jsx)(he,{children:null===a||void 0===a?void 0:a.slice(0,10)})]})]}),p&&(0,A.jsx)(ie,{task:r,handlerCloseModal:x,deleteAction:async()=>{if(null!==r&&void 0!==r&&r._id)try{await h((0,D.vq)(r._id)),s.oR.success(u("Forms.deleteTask.success"))}catch(e){s.oR.error(`${u("Forms.deleteTask.failed")}: ${e instanceof Error?e.message:String(e)}`)}},withActions:t})]});var j},me=b.Ik({title:b.Yj().min(2).max(200).required(),description:b.Yj().max(2e3).nullable(),assignedTo:b.YO().of(b.Yj()),priority:b.gl().oneOf(["low","medium","high","critical"]).default("medium"),deadline:b.p6().nullable()}),ue={title:"",description:"",deadline:"",priority:"medium"},xe=e=>{let{handlerCloseModal:r,formName:t,columnId:o}=e;const a=(0,l.jL)(),d=(0,l.GV)(c.ph),[h,p]=(0,i.useState)([]),{t:m}=(0,n.B)(),u=(0,y.DP)(),x={low:u.priorityTextLow,medium:u.priorityTextMedium,high:u.priorityTextHigh,critical:u.priorityTextCritical};return(0,A.jsx)(j.l1,{initialValues:ue,validationSchema:me,onSubmit:async e=>{if(null===d||void 0===d||!d._id||!o)return void s.oR.error(m("Forms.createTask.failed"));const t={...e,project:d._id,column:o,assignedTo:h.map((e=>e._id)),priority:e.priority};try{await a((0,D.UT)(t)).unwrap(),s.oR.success(m("Forms.createTask.success")),r()}catch(i){s.oR.error(`${m("Forms.createTask.failed")}: ${i instanceof Error?i.message:String(i)}`)}},children:e=>{let{values:r,errors:i,touched:o,handleChange:n,handleBlur:s}=e;return(0,A.jsxs)(f.q,{id:t,children:[(0,A.jsxs)(f.A0,{children:[(0,A.jsx)(f.JU,{children:m("Forms.createTask.title")}),(0,A.jsx)(f.pd,{name:"title",placeholder:m("Forms.createTask.titlePlaceholder"),$hasError:o.title&&!!i.title}),o.title&&i.title&&(0,A.jsx)(f.yn,{children:i.title})]}),(0,A.jsxs)(f.A0,{children:[(0,A.jsx)(f.JU,{children:m("Forms.createTask.description")}),(0,A.jsx)(f.TM,{name:"description",placeholder:m("Forms.createTask.descriptionPlaceholder"),value:r.description,onChange:n,onBlur:s,$hasError:o.description&&!!i.description}),o.description&&i.description&&(0,A.jsx)(f.yn,{children:i.description})]}),(0,A.jsxs)(f.A0,{children:[(0,A.jsx)(f.JU,{children:m("Forms.createTask.deadline")}),(0,A.jsx)(f.pd,{name:"deadline",type:"date"})]}),(0,A.jsxs)(f.A0,{children:[(0,A.jsx)(f.JU,{children:m("Forms.createTask.priority")}),(0,A.jsx)(K.A,{options:["low","medium","high","critical"],value:r.priority,onChange:e=>{n({target:{name:"priority",value:e}})},getLabel:e=>m(`Common.priority.${e}`),getKey:e=>e,getColor:e=>x[e],placeholder:m("Forms.createTask.priority")})]}),(0,A.jsxs)(f.A0,{children:[(0,A.jsx)(f.JU,{children:m("Forms.createTask.assignedTo")}),(0,A.jsx)(W,{value:h,onChange:p,placeholder:m("Forms.createTask.assigneePlaceholder"),withActions:!0})]})]})}})},je=e=>{let{handlerCloseModal:r,columnId:t}=e;const{t:i}=(0,n.B)(),o="create-task-form";return(0,A.jsx)(u.A,{handlerCloseModal:r,children:(0,A.jsx)(x.A,{handlerCloseModal:r,title:i("Modals.createTask.title"),formName:o,children:(0,A.jsx)(xe,{handlerCloseModal:r,formName:o,columnId:t})})})};var ge=t(8892);const fe=y.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 290px;
  height: 100%;
  padding: ${e=>{let{isEmpty:r}=e;return r?"0":"16px"}};
  color: ${e=>{let{theme:r}=e;return r.secondaryText}};
  background-color: ${e=>{let{theme:r}=e;return r.backgroundSecondary}};
  border: 2px dashed ${e=>{let{theme:r}=e;return r.borderColor}};
  border-radius: 8px;
  cursor: default;
`,ye=y.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 290px;
  height: 100%;
  padding: 16px;
  font-size: 16px;
  text-align: center;
  cursor: ${e=>{let{loading:r}=e;return r?"default":"pointer"}};
`,ve=y.Ay.button`
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
`,be=y.Ay.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`,we=y.Ay.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
  word-break: break-word;
  overflow-wrap: break-word;
`,Ae=y.Ay.input`
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  background-color: transparent;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
  border: none;
  padding: 0px;

  &:focus {
    outline: none;
  }
`,ke=y.Ay.div`
  display: flex;
  gap: 4px;
`,$e=y.Ay.button`
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
`,Ce=y.Ay.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  gap: 8px;
  overflow-y: auto;
  min-height: 100px;
`,Te={critical:3,high:2,medium:1,low:0},Fe=e=>{let{column:r,isEmpty:t,withActions:o,isEditable:a=!1,onClickEmpty:d}=e;const c=(0,l.jL)(),[h,p]=(0,i.useState)(!1),[u,x]=(0,i.useState)((null===r||void 0===r?void 0:r.name)||""),[j,g]=(0,i.useState)(!1),{t:f}=(0,n.B)(),v=(0,y.DP)(),b=(0,i.useMemo)((()=>null!==r&&void 0!==r&&r.tasks?[...r.tasks].sort(((e,r)=>{var t,i;const o=null!==(t=Te[e.priority])&&void 0!==t?t:0;return(null!==(i=Te[r.priority])&&void 0!==i?i:0)-o})):[]),[null===r||void 0===r?void 0:r.tasks]);if(t)return o?(0,A.jsx)(fe,{isEmpty:!0,onClick:d,children:(0,A.jsx)(ye,{children:(0,A.jsxs)(ve,{children:[(0,A.jsx)(J.GGD,{size:16})," ",f("Project.columns.addColumn")]})})}):null;if(!r)return(0,A.jsx)(fe,{isEmpty:!0,children:(0,A.jsx)(ye,{loading:!0,children:(0,A.jsx)(m.A,{size:"60px",color:"#3e85f3"})})});const w=()=>{g((e=>!e))};return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(fe,{children:[(0,A.jsx)(be,{children:h?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(Ae,{value:u,onChange:e=>x(e.target.value),autoFocus:!0}),(0,A.jsxs)(ke,{children:[(0,A.jsx)($e,{type:"button",hoverColor:v.success,onClick:()=>(()=>{if(null!==r&&void 0!==r&&r._id)try{c((0,q.y$)({id:r._id,data:{name:u}}))}catch(e){s.oR.error(`${f("Project.columns.updateFailed")}: ${e instanceof Error?e.message:String(e)}`)}finally{p(!1)}})(),children:(0,A.jsx)(J.YrT,{size:20})}),(0,A.jsx)($e,{type:"button",hoverColor:v.primaryHover,onClick:()=>(x((null===r||void 0===r?void 0:r.name)||""),void p(!1)),children:(0,A.jsx)(J.yGN,{size:20})}),(0,A.jsx)($e,{type:"button",hoverColor:v.danger,onClick:()=>(()=>{if(null!==r&&void 0!==r&&r._id)try{c((0,q.gR)(r._id))}catch(e){s.oR.error(`${f("Project.columns.deleteFailed")}: ${e instanceof Error?e.message:String(e)}`)}})(),children:(0,A.jsx)(J.IXo,{size:20})})]})]}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(we,{children:null===r||void 0===r?void 0:r.name}),o&&(0,A.jsxs)(ke,{children:[a&&(0,A.jsx)($e,{type:"button",onClick:()=>p(!0),children:(0,A.jsx)(J.Pj4,{size:20})}),(0,A.jsx)($e,{type:"button",onClick:()=>w(),children:(0,A.jsx)(J.GGD,{size:20})})]})]})}),o?(0,A.jsx)(ge.gL,{droppableId:r._id,type:"task",children:e=>(0,A.jsxs)(Ce,{ref:e.innerRef,...e.droppableProps,children:[b.map(((e,r)=>(0,A.jsx)(ge.sx,{draggableId:e._id,index:r,children:r=>(0,A.jsx)("div",{ref:r.innerRef,...r.draggableProps,...r.dragHandleProps,children:(0,A.jsx)(pe,{task:e,withActions:o})})},e._id))),e.placeholder]})}):(0,A.jsx)(Ce,{children:b.map((e=>(0,A.jsx)(pe,{task:e,withActions:o},e._id)))})]}),j&&(0,A.jsx)(je,{handlerCloseModal:w,columnId:null===r||void 0===r?void 0:r._id})]})};var Me=t(397);const Se=y.Ay.div`
  display: flex;
  flex-direction: row;
  position: relative;
  gap: 24px;
  width: 100%;
  height: 100%;
  padding: 24px;
  overflow-x: auto;
`,Pe=y.Ay.button`
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
`,_e=y.Ay.div`
  display: flex;
  align-items: stretch;
  height: 100%;
  gap: 24px;
`,Re=e=>{var r;let{columns:t,topOffset:o=24,withActions:a=!1,onEditOrder:d}=e;const h=(0,l.jL)(),p=null===(r=(0,l.GV)(c.ph))||void 0===r?void 0:r._id,[m,u]=(0,i.useState)(!1),{t:x}=(0,n.B)(),j=()=>[...t].sort(((e,r)=>e.order-r.order));return(0,A.jsxs)(Se,{children:[a&&(0,A.jsx)(Pe,{type:"button",topOffset:o+24,"data-active":m,onClick:()=>{u((e=>!e)),null===d||void 0===d||d()},children:(0,A.jsx)(Me.p92,{size:20})}),(0,A.jsxs)(ge.JY,{onDragEnd:async e=>{const{source:r,destination:i,draggableId:o,type:n}=e;if(i)if("column"!==n){if("task"===n){if(r.droppableId===i.droppableId&&r.index===i.index)return;const n=t.find((e=>e._id===r.droppableId)),l=null===n||void 0===n?void 0:n.tasks.find((e=>e._id===o));if(!l)return;const a=new FormData;return a.append("column",i.droppableId),void h((0,D.lC)({id:e.draggableId,formData:a})).unwrap().catch((e=>{s.oR.error(`${x("Project.columns.moveTaskFailed")}: ${e.message}`)}))}}else{if(!m||r.index===i.index)return;const e=[...j()],[t]=e.splice(r.index,1);e.splice(i.index,0,t);const o=e.map(((e,r)=>({id:e._id,order:r})));h((0,q.Fh)({columns:o})).unwrap().catch((e=>{s.oR.error(`${x("Project.columns.reorderFailed")}: ${e.message}`)}))}},children:[m&&a?(0,A.jsx)(ge.gL,{droppableId:"columns",direction:"horizontal",type:"column",children:e=>(0,A.jsxs)(_e,{ref:e.innerRef,...e.droppableProps,children:[j().map(((e,r)=>(0,A.jsx)(ge.sx,{draggableId:e._id,index:r,children:r=>(0,A.jsx)("div",{ref:r.innerRef,...r.draggableProps,...r.dragHandleProps,children:(0,A.jsx)(Fe,{column:e,withActions:a,isEditable:m})})},e._id))),e.placeholder]})}):(0,A.jsx)(_e,{children:j().map((e=>(0,A.jsx)(Fe,{column:e,withActions:a},e._id)))}),m&&(0,A.jsx)(Fe,{isEmpty:!0,withActions:a,onClickEmpty:()=>{if(p)try{const e={name:x("Project.columns.newColumn"),order:t.length,project:p};h((0,q.HA)(e))}catch(e){s.oR.error(`${x("Project.columns.addFailed")}: ${e instanceof Error?e.message:String(e)}`)}}})]})]})},Ee=()=>{const{id:e}=(0,o.g)(),r=(0,o.Zp)(),t=(0,l.jL)(),u=(0,l.GV)(a.mB),x=(0,l.GV)(c.ph),j=(0,l.GV)(c.pU),g=(0,l.GV)(h),f=(0,l.GV)(p),y=(0,i.useRef)(null),[v,b]=(0,i.useState)(0),[w,k]=(0,i.useState)(!1),[C,T]=(0,i.useState)(!1),[F,S]=(0,i.useState)(!1),[P,_]=(0,i.useState)(!1),{t:R}=(0,n.B)();(0,i.useEffect)((()=>{if(!y.current)return;const e=new ResizeObserver((e=>{for(let r of e)b(r.contentRect.height)}));return e.observe(y.current),()=>e.disconnect()}),[]),(0,i.useEffect)((()=>{e&&t((0,d.kf)(e))}),[t,e]),(0,i.useEffect)((()=>{var e,r;const t=(null===x||void 0===x||null===(e=x.members)||void 0===e?void 0:e.filter((e=>"owner"===e.role)).map((e=>e.user._id)))||[],i=(null===x||void 0===x||null===(r=x.members)||void 0===r?void 0:r.filter((e=>"editor"===e.role)).map((e=>e.user._id)))||[],o=t.includes(u._id),n=i.includes(u._id);S(o),_(o||n)}),[u,x]);const E=()=>{k((e=>!e))},z=()=>{T((e=>!e))},I=f.reduce(((e,r)=>(e[r.column]||(e[r.column]=[]),e[r.column].push(r),e)),{});return(0,A.jsxs)(V,{children:[(0,A.jsx)("div",{ref:y,children:(0,A.jsx)(N,{name:(null===x||void 0===x?void 0:x.name)||"",avatar:u.avatar,toggleMembersModal:E,toggleSettingsModal:z})}),j?(0,A.jsx)(O,{children:(0,A.jsx)(m.A,{size:"60px",color:"#3e85f3"})}):(0,A.jsx)(G,{children:(0,A.jsx)(Re,{columns:g.map((e=>({...e,tasks:I[e._id]||[]}))),topOffset:v,withActions:P})}),w&&(0,A.jsx)($,{handlerCloseModal:()=>E(),projectId:e||"",withActions:F}),C&&(0,A.jsx)(M,{handlerCloseModal:()=>z(),deleteAction:()=>(async()=>{if(e&&x)try{await t((0,d.xx)(x._id)),s.oR.success(R("Forms.deleteProject.success")),z(),r("/",{replace:!0})}catch(i){s.oR.error(`${R("Forms.deleteProject.failed")}: ${i instanceof Error?i.message:String(i)}`)}})(),withActions:F})]})}}}]);
//# sourceMappingURL=616.f606aa4b.chunk.js.map