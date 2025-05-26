"use strict";(self.webpackChunktaskero=self.webpackChunktaskero||[]).push([[879],{988:(e,r,t)=>{t.d(r,{hX:()=>i,pU:()=>o,ph:()=>n});const i=e=>e.projects.items,n=e=>e.projects.current,o=e=>e.projects.loading},6879:(e,r,t)=>{t.r(r),t.d(r,{default:()=>J});var i=t(5043),n=t(5180),o=t(4961),s=t(2115),l=t(9867),a=t(3289),d=t(9006),c=t(988),m=t(5939),h=t(9593),p=t(7784),x=t(3892),u=t(7142),j=t(7711),f=t(5464);const g=f.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 295px;
`;var b=t(899);const w=b.Ik().shape({members:b.YO().of(b.Ik().shape({email:b.Yj().email().required(),role:b.Yj().oneOf(["owner","editor","viewer"]).required()})).min(1).required()});var y=t(579);const A=e=>{let{handlerCloseModal:r,formName:t,projectId:i,withActions:n=!0}=e;const a=(0,l.jL)(),h=(0,l.GV)(c.ph),{t:p}=(0,o.B)();if(!h)return(0,y.jsx)(g,{children:(0,y.jsx)(m.A,{size:"60px",color:"#3e85f3"})});const f={members:h.members.map((e=>({email:e.user.email,role:e.role})))},b=h.members.map((e=>({...e.user,role:e.role})));return(0,y.jsx)(x.l1,{enableReinitialize:!0,initialValues:f,validationSchema:w,onSubmit:async e=>{try{await a((0,d.K4)({id:i,members:e.members})).unwrap(),s.oR.success(p("Forms.editProjectMembers.success")),r()}catch(t){s.oR.error(`${p("Forms.editProjectMembers.failed")}: ${t instanceof Error?t.message:String(t)}`)}},children:e=>{let{values:r,setFieldValue:i}=e;return(0,y.jsx)(j.q,{id:t,children:(0,y.jsx)(u.A,{value:r.members,users:b,onChange:e=>i("members",e),withActions:n,editableRoles:!0,availableRoles:["owner","editor","viewer"]})})}})},v=e=>{let{handlerCloseModal:r,projectId:t,withActions:i=!0}=e;const{t:n}=(0,o.B)(),s="edit-project-members-form";return(0,y.jsx)(h.A,{handlerCloseModal:r,children:(0,y.jsx)(p.A,{handlerCloseModal:r,title:n("Modals.editProjectMembers.title"),formName:s,withActions:i,children:(0,y.jsx)(A,{handlerCloseModal:r,formName:s,projectId:t,withActions:i})})})},k=b.Ik({name:b.Yj().min(2).max(100).required("Required"),description:b.Yj().max(1e3),deadline:b.p6().nullable()}),M=f.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 295px;
`,C=e=>{let{handlerCloseModal:r,formName:t,withActions:i=!0}=e;const n=(0,l.jL)(),a=(0,l.GV)(c.ph),{t:h}=(0,o.B)();if(!a)return(0,y.jsx)(M,{children:(0,y.jsx)(m.A,{size:"60px",color:"#3e85f3"})});const p={name:a.name||"",description:a.description||"",deadline:a.deadline?a.deadline.slice(0,10):""};return(0,y.jsx)(x.l1,{initialValues:p,validationSchema:k,onSubmit:async e=>{try{await n((0,d.vr)({id:a._id,payload:e})).unwrap(),s.oR.success(h("Forms.editProject.success")),r()}catch(t){s.oR.error(`${h("Forms.editProject.failed")}: ${t instanceof Error?t.message:String(t)}`)}},children:e=>{let{values:r,errors:n,touched:o,handleChange:s,handleBlur:l}=e;return(0,y.jsxs)(j.q,{id:t,children:[(0,y.jsxs)(j.A0,{children:[(0,y.jsx)(j.JU,{children:h("Forms.editProject.name")}),(0,y.jsx)(j.pd,{name:"name",placeholder:h("Forms.editProject.namePlaceholder"),$hasError:o.name&&!!n.name,disabled:!i}),o.name&&n.name&&(0,y.jsx)(j.yn,{children:n.name})]}),(0,y.jsxs)(j.A0,{children:[(0,y.jsx)(j.JU,{children:h("Forms.editProject.description")}),(0,y.jsx)(j.TM,{name:"description",placeholder:h("Forms.editProject.descriptionPlaceholder"),value:r.description,onChange:s,onBlur:l,$hasError:o.description&&!!n.description,disabled:!i}),o.description&&n.description&&(0,y.jsx)(j.yn,{children:n.description})]}),(0,y.jsxs)(j.A0,{children:[(0,y.jsx)(j.JU,{children:h("Forms.editProject.deadline")}),(0,y.jsx)(j.pd,{name:"deadline",type:"date",disabled:!i})]})]})}})},$=e=>{let{handlerCloseModal:r,deleteAction:t=()=>{},withActions:i=!0}=e;const{t:n}=(0,o.B)(),s="edit-project-form";return(0,y.jsx)(h.A,{handlerCloseModal:r,children:(0,y.jsx)(p.A,{handlerCloseModal:r,title:n("Modals.editProject.title"),formName:s,deleteAction:t,withActions:i,children:(0,y.jsx)(C,{handlerCloseModal:r,formName:s,withActions:i})})})};var P=t(3875),S=t(279),F=t(2998);const z=f.Ay.header`
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
`,R=f.Ay.h1`
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
`,B=(0,f.Ay)(n.N_)`
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
`,V=f.Ay.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
`,q=f.Ay.button`
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
`;var N=t(184),E=t(5200),I=t(3538),_=t(9657);const U=e=>{let{name:r,avatar:t,toggleMembersModal:i,toggleSettingsModal:s}=e;const{t:l}=(0,o.B)(),a=(0,_.Ub)({query:"(max-width: 768px)"});return(0,y.jsx)(y.Fragment,{children:(0,y.jsxs)(z,{children:[(0,y.jsxs)(B,{to:"/",children:[(0,y.jsx)(N._Jj,{size:16})," ",!a&&l("Project.backToProjects")]}),(0,y.jsx)(R,{children:r}),(0,y.jsxs)(V,{children:[(0,y.jsx)(P.A,{}),(0,y.jsx)(S.A,{}),(0,y.jsx)(q,{type:"button",onClick:()=>i(),children:(0,y.jsx)(I.Sy$,{size:20})}),(0,y.jsx)(q,{type:"button",onClick:()=>s(),children:(0,y.jsx)(E.VSk,{size:20})}),(0,y.jsx)(n.N_,{to:"/account",children:(0,y.jsx)(F.A,{src:t,size:36})})]})]})})},G=f.Ay.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`,T=f.Ay.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${e=>{let{theme:r}=e;return r.background}};
`,Y=f.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: raw;
  gap: 16px;
  padding: 16px;
  background-color: ${e=>{let{theme:r}=e;return r.background}};

  @media screen and (min-width: 768px) {
    gap: 24px;
    padding: 24px;
  }
`,J=()=>{const{id:e}=(0,n.g)(),r=(0,n.Zp)(),t=(0,l.jL)(),h=(0,l.GV)(a.mB),p=(0,l.GV)(c.ph),x=(0,l.GV)(c.pU),[u,j]=(0,i.useState)(!1),[f,g]=(0,i.useState)(!1),[b,w]=(0,i.useState)(!1),{t:A}=(0,o.B)();(0,i.useEffect)((()=>{e&&t((0,d.kf)(e))}),[t,e]),(0,i.useEffect)((()=>{var e;const r=((null===p||void 0===p||null===(e=p.members)||void 0===e?void 0:e.filter((e=>"owner"===e.role)).map((e=>e.user._id)))||[]).includes(h._id);w(r)}),[h,p]);const k=()=>{j((e=>!e))},M=()=>{g((e=>!e))};return(0,y.jsxs)(G,{children:[(0,y.jsx)(U,{name:(null===p||void 0===p?void 0:p.name)||"",avatar:h.avatar,toggleMembersModal:k,toggleSettingsModal:M}),x?(0,y.jsx)(T,{children:(0,y.jsx)(m.A,{size:"60px",color:"#3e85f3"})}):(0,y.jsx)(Y,{children:"Columns"}),u&&(0,y.jsx)(v,{handlerCloseModal:()=>k(),projectId:e||"",withActions:b}),f&&(0,y.jsx)($,{handlerCloseModal:()=>M(),deleteAction:()=>(async()=>{if(e&&p)try{await t((0,d.xx)(p._id)),s.oR.success(A("Forms.deleteProject.success")),M(),r("/",{replace:!0})}catch(i){s.oR.error(`${A("Forms.deleteProject.failed")}: ${i instanceof Error?i.message:String(i)}`)}})(),withActions:b})]})}}}]);
//# sourceMappingURL=879.87a9bd07.chunk.js.map