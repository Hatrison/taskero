"use strict";(self.webpackChunktaskero=self.webpackChunktaskero||[]).push([[392],{988:(e,t,r)=>{r.d(t,{hX:()=>o,pU:()=>n,ph:()=>i});const o=e=>e.projects.items,i=e=>e.projects.current,n=e=>e.projects.loading},2392:(e,t,r)=>{r.r(t),r.d(t,{default:()=>U});var o=r(5043),i=r(5180),n=r(4961),s=r(2115),l=r(9867),a=r(3289),d=r(9006),c=r(988),m=r(5939),p=r(9593),h=r(7784),x=r(3892),u=r(7142),j=r(7711),f=r(5464);const g=f.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 295px;
`;var b=r(899);const w=b.Ik().shape({members:b.YO().of(b.Ik().shape({email:b.Yj().email().required(),role:b.Yj().oneOf(["owner","editor","viewer"]).required()})).min(1).required()});var y=r(579);const A=e=>{let{handlerCloseModal:t,formName:r,projectId:o,withActions:i=!0}=e;const a=(0,l.jL)(),p=(0,l.GV)(c.ph),{t:h}=(0,n.B)();if(!p)return(0,y.jsx)(g,{children:(0,y.jsx)(m.A,{size:"60px",color:"#3e85f3"})});const f={members:p.members.map((e=>({email:e.user.email,role:e.role})))},b=p.members.map((e=>({...e.user,role:e.role})));return(0,y.jsx)(x.l1,{enableReinitialize:!0,initialValues:f,validationSchema:w,onSubmit:async e=>{try{await a((0,d.K4)({id:o,members:e.members})).unwrap(),s.oR.success(h("Forms.editProjectMembers.success")),t()}catch(r){s.oR.error(`${h("Forms.editProjectMembers.failed")}: ${r instanceof Error?r.message:String(r)}`)}},children:e=>{let{values:t,setFieldValue:o}=e;return(0,y.jsx)(j.q,{id:r,children:(0,y.jsx)(u.A,{value:t.members,users:b,onChange:e=>o("members",e),withActions:i,editableRoles:!0,availableRoles:["owner","editor","viewer"]})})}})},v=e=>{let{handlerCloseModal:t,projectId:r,withActions:o=!0}=e;const{t:i}=(0,n.B)(),s="edit-project-members-form";return(0,y.jsx)(p.A,{handlerCloseModal:t,children:(0,y.jsx)(h.A,{handlerCloseModal:t,title:i("Modals.EditProjectMembers.title"),formName:s,withActions:o,children:(0,y.jsx)(A,{handlerCloseModal:t,formName:s,projectId:r,withActions:o})})})},k=e=>{let{handlerCloseModal:t,formName:r,projectId:o,withActions:i=!0}=e;return(0,y.jsx)("div",{children:"EditProjectForm"})},M=e=>{let{handlerCloseModal:t,projectId:r,deleteAction:o=()=>{},withActions:i=!0}=e;const{t:s}=(0,n.B)(),l="edit-project-form";return(0,y.jsx)(p.A,{handlerCloseModal:t,children:(0,y.jsx)(h.A,{handlerCloseModal:t,title:s("Modals.EditProject.title"),formName:l,deleteAction:o,withActions:i,children:(0,y.jsx)(k,{handlerCloseModal:t,formName:l,projectId:r,withActions:i})})})};var C=r(3875),$=r(279),S=r(2998);const P=f.Ay.header`
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
`,I=f.Ay.h1`
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
`,z=(0,f.Ay)(i.N_)`
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
`,N=f.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
`,E=f.Ay.button`
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
`;var R=r(184),V=r(5200),B=r(3538),_=r(9657);const q=e=>{let{name:t,avatar:r,toggleMembersModal:o,toggleSettingsModal:s}=e;const{t:l}=(0,n.B)(),a=(0,_.Ub)({query:"(max-width: 768px)"});return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(P,{children:[(0,y.jsxs)(z,{to:"/",children:[(0,y.jsx)(R._Jj,{size:16})," ",!a&&l("Project.backToProjects")]}),(0,y.jsx)(I,{children:t}),(0,y.jsxs)(N,{children:[(0,y.jsx)(C.A,{}),(0,y.jsx)($.A,{}),(0,y.jsx)(E,{type:"button",onClick:()=>o(),children:(0,y.jsx)(B.Sy$,{size:20})}),(0,y.jsx)(E,{type:"button",onClick:()=>s(),children:(0,y.jsx)(V.VSk,{size:20})}),(0,y.jsx)(i.N_,{to:"/account",children:(0,y.jsx)(S.A,{src:r,size:36})})]})]})})},F=f.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`,G=f.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${e=>{let{theme:t}=e;return t.background}};
`,T=f.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: raw;
  gap: 16px;
  padding: 16px;
  background-color: ${e=>{let{theme:t}=e;return t.background}};

  @media screen and (min-width: 768px) {
    gap: 24px;
    padding: 24px;
  }
`,U=()=>{const{id:e}=(0,i.g)(),t=(0,i.Zp)(),r=(0,l.jL)(),p=(0,l.GV)(a.mB),h=(0,l.GV)(c.ph),x=(0,l.GV)(c.pU),[u,j]=(0,o.useState)(!1),[f,g]=(0,o.useState)(!1),[b,w]=(0,o.useState)(!1),{t:A}=(0,n.B)();(0,o.useEffect)((()=>{e&&r((0,d.kf)(e))}),[r,e]),(0,o.useEffect)((()=>{var e;const t=((null===h||void 0===h||null===(e=h.members)||void 0===e?void 0:e.filter((e=>"owner"===e.role)).map((e=>e.user._id)))||[]).includes(p._id);w(t)}),[p,h]);const k=()=>{j((e=>!e))},C=()=>{g((e=>!e))};return(0,y.jsxs)(F,{children:[(0,y.jsx)(q,{name:(null===h||void 0===h?void 0:h.name)||"",avatar:p.avatar,toggleMembersModal:k,toggleSettingsModal:C}),x?(0,y.jsx)(G,{children:(0,y.jsx)(m.A,{size:"60px",color:"#3e85f3"})}):(0,y.jsx)(T,{children:"Columns"}),u&&(0,y.jsx)(v,{handlerCloseModal:()=>k(),projectId:e||"",withActions:b}),f&&(0,y.jsx)(M,{handlerCloseModal:()=>C(),projectId:e||"",deleteAction:()=>(async()=>{if(e&&h)try{await r((0,d.xx)(h._id)),s.oR.success(A("Project.deleteProject.success")),C(),t("/",{replace:!0})}catch(o){s.oR.error(`${A("Project.deleteProject.failed")}: ${o instanceof Error?o.message:String(o)}`)}})(),withActions:b})]})}}}]);
//# sourceMappingURL=392.70ef0c64.chunk.js.map