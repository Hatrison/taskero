"use strict";(self.webpackChunktaskero=self.webpackChunktaskero||[]).push([[530],{9109:(e,r,t)=>{t.r(r),t.d(r,{default:()=>J});var n=t(5043),i=t(9657),o=t(5180),d=t(5464);const a=(0,d.Ay)(o.N_)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
`,s=d.Ay.img`
  width: 40px;
  height: 40px;
`,l=d.Ay.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>{let{theme:r}=e;return r.primary}};
  text-decoration: none;
`,c=t.p+"static/media/logo.f9f20538470db5fa4750.png";var x=t(579);const p=()=>(0,x.jsxs)(a,{to:"/",children:[(0,x.jsx)(s,{src:c,alt:"Taskero Logo"}),(0,x.jsx)(l,{children:"Taskero"})]});var u=t(4961);const h=d.Ay.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  background-color: ${e=>{let{theme:r}=e;return r.headerBackground}};
  border-bottom: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
`,g=d.Ay.div`
  display: flex;
  align-items: center;
  gap: 30px;
`,m=d.Ay.nav`
  @media screen and (max-width: 1280px) {
    display: none;
  }
`,y=d.Ay.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
`,f=(0,d.Ay)(o.N_)`
  text-decoration: none;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
  font-weight: 500;
  transition: color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.primary}};
  }
`,b=d.Ay.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,j=(0,d.Ay)(o.N_)`
  display: none;

  @media screen and (min-width: 1280px) {
    display: flex;
    background-color: ${e=>{let{theme:r}=e;return r.primary}};
    color: ${e=>{let{theme:r}=e;return r.buttonText}};
    padding: 8px 20px;
    border-radius: 4px;
    border: none;
    font-size: 16px;
    font-weight: 500;
    transition: background-color ${e=>{let{theme:r}=e;return r.animation}};

    &:hover {
      background-color: ${e=>{let{theme:r}=e;return r.primaryHover}};
    }
  }
`,k=d.Ay.button`
  display: block;
  background: none;
  border: none;

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;var w=t(5200),$=t(9867);const v=d.Ay.div`
  position: relative;
`,A=d.Ay.button`
  border: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
  background-color: ${e=>{let{theme:r}=e;return r.background}};
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
  font-weight: 600;
  font-size: 14px;
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;
  min-width: 44px;
  text-align: center;
`,C=d.Ay.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 2px;
  border: 1px solid ${e=>{let{theme:r}=e;return r.borderColor}};
  background-color: ${e=>{let{theme:r}=e;return r.cardBackground}};
  border-radius: 8px;
  box-shadow: ${e=>{let{theme:r}=e;return r.shadow}};
  z-index: 10;
  overflow: hidden;
`,L=d.Ay.button`
  width: 100%;
  padding: 8px 12px;
  background: none;
  border: none;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
  cursor: pointer;

  &:hover {
    background-color: ${e=>{let{theme:r}=e;return r.backgroundSecondary}};
  }
`,P=()=>{const{i18n:e}=(0,u.B)(),r=(0,$.Ym)(),[t,i]=(0,n.useState)(!1),o=(0,n.useRef)(null),d=e.language.toUpperCase(),a=e=>{r(e),i(!1)};return(0,n.useEffect)((()=>{const e=e=>{o.current&&!o.current.contains(e.target)&&i(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)}),[]),(0,x.jsxs)(v,{ref:o,children:[(0,x.jsx)(A,{onClick:()=>i((e=>!e)),children:d}),t&&(0,x.jsxs)(C,{children:[(0,x.jsx)(L,{onClick:()=>a("en"),children:"EN"}),(0,x.jsx)(L,{onClick:()=>a("uk"),children:"UK"})]})]})},z=d.Ay.button`
  background-color: ${e=>{let{theme:r}=e;return r.backgroundSecondary}};
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
`,T=()=>{const e=(0,$.GV)((e=>e.theme.current)),r=(0,$.H1)(),t=(0,d.DP)();return(0,x.jsx)(z,{onClick:r,children:"light"===e?(0,x.jsx)(w.Wh$,{size:20,color:t.primaryText}):(0,x.jsx)(w.hkc,{size:20,color:t.primaryText})})},H=d.Ay.div`
  position: absolute;
  top: 72px;
  left: 0;
  right: 0;
  background-color: ${e=>{let{theme:r}=e;return r.background}};
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: calc(100vh - 72px);

  @media screen and (min-width: 1280px) {
    display: none;
  }
`,N=(0,d.Ay)(o.N_)`
  font-size: 24px;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
  font-weight: 400;
  transition: color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    color: ${e=>{let{theme:r}=e;return r.primary}};
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`,F=(0,d.Ay)(o.N_)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: ${e=>{let{theme:r}=e;return r.buttonText}};
  font-weight: 400;
  background-color: ${e=>{let{theme:r}=e;return r.primary}};
  padding: 8px 20px;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color ${e=>{let{theme:r}=e;return r.animation}};

  &:hover {
    background-color: ${e=>{let{theme:r}=e;return r.primaryHover}};
  }

  @media screen and (min-width: 1280px) {
    padding: 8px 16px;
  }
`,K=d.Ay.div`
  display: flex;
  gap: 16px;
`,S=e=>{let{onClose:r}=e;const{t:t}=(0,u.B)();return(0,n.useEffect)((()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="auto"})),[]),(0,x.jsxs)(H,{children:[(0,x.jsxs)(K,{children:[(0,x.jsx)(T,{}),(0,x.jsx)(P,{})]}),(0,x.jsx)(N,{to:"#features",onClick:r,children:t("LandingPage.Header.features")}),(0,x.jsx)(N,{to:"#how-it-works",onClick:r,children:t("LandingPage.Header.howItWorks")}),(0,x.jsx)(N,{to:"#reviews",onClick:r,children:t("LandingPage.Header.reviews")}),(0,x.jsx)(N,{to:"/login",onClick:r,children:t("LandingPage.Header.login")}),(0,x.jsx)(F,{to:"/register",onClick:r,children:t("LandingPage.Header.getStarted")})]})},B=()=>{const[e,r]=(0,n.useState)(!1),t=(0,i.Ub)({query:"(min-width: 1280px)"}),o=(0,d.DP)(),{t:a}=(0,u.B)(),s=()=>{r((e=>!e))};return(0,x.jsxs)(h,{children:[(0,x.jsx)(p,{}),(0,x.jsxs)(g,{children:[(0,x.jsx)(m,{children:(0,x.jsxs)(y,{children:[(0,x.jsx)(f,{to:"#features",children:a("LandingPage.Header.features")}),(0,x.jsx)(f,{to:"#how-it-works",children:a("LandingPage.Header.howItWorks")}),(0,x.jsx)(f,{to:"#reviews",children:a("LandingPage.Header.reviews")})]})}),(0,x.jsxs)(b,{children:[t&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(P,{}),(0,x.jsx)(T,{}),(0,x.jsx)(f,{to:"/login",children:a("LandingPage.Header.login")}),(0,x.jsx)(j,{to:"/register",children:a("LandingPage.Header.getStarted")})]}),(0,x.jsx)(k,{onClick:()=>s(),children:e?(0,x.jsx)(w.yGN,{size:24,color:o.primaryText}):(0,x.jsx)(w.ND1,{size:24,color:o.primaryText})}),e&&(0,x.jsx)(S,{onClose:()=>s()})]})]})]})},D=d.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  background-color: ${e=>{let{theme:r}=e;return r.background}};
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08);

  @media screen and (min-width: 768px) {
    width: calc((100% - 32px) / 2);
  }

  @media screen and (min-width: 1280px) {
    width: calc((100% - 64px) / 3);
  }
`,E=d.Ay.div`
  background-color: ${e=>{let{theme:r}=e;return r.primary}};
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,_=d.Ay.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
  margin-bottom: 10px;
`,U=d.Ay.p`
  font-size: 16px;
  color: ${e=>{let{theme:r}=e;return r.secondaryText}};
`,W=e=>{let{icon:r,title:t,description:n}=e;return(0,x.jsxs)(D,{children:[(0,x.jsx)(E,{children:(0,x.jsx)(r,{size:20})}),(0,x.jsxs)("div",{children:[(0,x.jsx)(_,{children:t}),(0,x.jsx)(U,{children:n})]})]})};var q=t(397);const G=d.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`,I=d.Ay.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
  padding: 80px 24px;
  background-color: ${e=>{let{$background:r,theme:t}=e;return r||t.background}};

  @media screen and (min-width: 1280px) {
    padding: 80px 36px;
  }
`,R=d.Ay.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${e=>{let{theme:r}=e;return r.primaryText}};
`,V=e=>{let{title:r,backgroundColor:t,id:n,children:i}=e;return(0,x.jsxs)(I,{$background:t,id:n,children:[(0,x.jsx)(R,{children:r}),i]})},Y=()=>{const{t:e}=(0,u.B)(),r=(0,d.DP)();return(0,x.jsx)(V,{title:e("LandingPage.KeyFeatures.title"),backgroundColor:r.backgroundSecondary,id:"features",children:(0,x.jsxs)(G,{children:[(0,x.jsx)(W,{icon:w.ND1,title:e("LandingPage.KeyFeatures.feature1.title"),description:e("LandingPage.KeyFeatures.feature1.description")}),(0,x.jsx)(W,{icon:w.cfS,title:e("LandingPage.KeyFeatures.feature2.title"),description:e("LandingPage.KeyFeatures.feature2.description")}),(0,x.jsx)(W,{icon:q.qN5,title:e("LandingPage.KeyFeatures.feature3.title"),description:e("LandingPage.KeyFeatures.feature3.description")})]})})},J=()=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(B,{}),(0,x.jsx)(Y,{})]})}}]);
//# sourceMappingURL=530.8d32abd3.chunk.js.map