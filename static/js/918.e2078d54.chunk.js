"use strict";(self.webpackChunktaskero=self.webpackChunktaskero||[]).push([[918],{279:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(5200),i=r(9867),o=r(5464);const a=o.Ay.button`
  background-color: ${e=>{let{theme:t}=e;return t.backgroundSecondary}};
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
`;var d=r(579);const s=()=>{const e=(0,i.GV)((e=>e.theme.current)),t=(0,i.H1)(),r=(0,o.DP)();return(0,d.jsx)(a,{onClick:t,children:"light"===e?(0,d.jsx)(n.Wh$,{size:20,color:r.primaryText}):(0,d.jsx)(n.hkc,{size:20,color:r.primaryText})})}},1373:(e,t,r)=>{r.r(t),r.d(t,{default:()=>je});var n=r(5043),i=r(9657),o=r(3168),a=r(4961),d=r(5180),s=r(5464);const l=s.Ay.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  background-color: ${e=>{let{theme:t}=e;return t.headerBackground}};
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.borderColor}};
`,c=s.Ay.div`
  display: flex;
  align-items: center;
  gap: 30px;
`,x=s.Ay.nav`
  @media screen and (max-width: 1280px) {
    display: none;
  }
`,p=s.Ay.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
`,g=(0,s.Ay)(d.N_)`
  text-decoration: none;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
  font-weight: 500;
  transition: color ${e=>{let{theme:t}=e;return t.animation}};

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.primary}};
  }
`,h=s.Ay.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,u=(0,s.Ay)(d.N_)`
  display: none;

  @media screen and (min-width: 1280px) {
    display: flex;
    background-color: ${e=>{let{theme:t}=e;return t.primary}};
    color: ${e=>{let{theme:t}=e;return t.buttonText}};
    padding: 8px 20px;
    border-radius: 4px;
    border: none;
    font-size: 16px;
    font-weight: 500;
    transition: background-color ${e=>{let{theme:t}=e;return t.animation}};

    &:hover {
      background-color: ${e=>{let{theme:t}=e;return t.primaryHover}};
    }
  }
`,m=s.Ay.button`
  display: block;
  background: none;
  border: none;

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;var y=r(5200),f=r(3875),j=r(279);const b=s.Ay.div`
  position: absolute;
  top: 72px;
  left: 0;
  right: 0;
  background-color: ${e=>{let{theme:t}=e;return t.background}};
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: calc(100vh - 72px);

  @media screen and (min-width: 1280px) {
    display: none;
  }
`,w=(0,s.Ay)(d.N_)`
  font-size: 24px;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
  font-weight: 400;
  transition: color ${e=>{let{theme:t}=e;return t.animation}};

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.primary}};
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`,k=(0,s.Ay)(d.N_)`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: ${e=>{let{theme:t}=e;return t.buttonText}};
  font-weight: 400;
  background-color: ${e=>{let{theme:t}=e;return t.primary}};
  padding: 8px 20px;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color ${e=>{let{theme:t}=e;return t.animation}};

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.primaryHover}};
  }

  @media screen and (min-width: 1280px) {
    padding: 8px 16px;
  }
`,v=s.Ay.div`
  display: flex;
  gap: 16px;
`;var A=r(579);const $=e=>{let{onClose:t}=e;const{t:r}=(0,a.B)();return(0,n.useEffect)((()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="auto"})),[]),(0,A.jsxs)(b,{children:[(0,A.jsxs)(v,{children:[(0,A.jsx)(j.A,{}),(0,A.jsx)(f.A,{})]}),(0,A.jsx)(w,{to:"#features",onClick:t,children:r("LandingPage.Header.features")}),(0,A.jsx)(w,{to:"#how-it-works",onClick:t,children:r("LandingPage.Header.howItWorks")}),(0,A.jsx)(w,{to:"#reviews",onClick:t,children:r("LandingPage.Header.reviews")}),(0,A.jsx)(w,{to:"/login",onClick:t,children:r("LandingPage.Header.login")}),(0,A.jsx)(k,{to:"/register",onClick:t,children:r("LandingPage.Header.getStarted")})]})},z=()=>{const[e,t]=(0,n.useState)(!1),r=(0,i.Ub)({query:"(min-width: 1280px)"}),d=(0,s.DP)(),{t:b}=(0,a.B)(),w=()=>{t((e=>!e))};return(0,A.jsxs)(l,{children:[(0,A.jsx)(o.A,{}),(0,A.jsxs)(c,{children:[(0,A.jsx)(x,{children:(0,A.jsxs)(p,{children:[(0,A.jsx)(g,{to:"#features",children:b("LandingPage.Header.features")}),(0,A.jsx)(g,{to:"#how-it-works",children:b("LandingPage.Header.howItWorks")}),(0,A.jsx)(g,{to:"#reviews",children:b("LandingPage.Header.reviews")})]})}),(0,A.jsxs)(h,{children:[r&&(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(f.A,{}),(0,A.jsx)(j.A,{}),(0,A.jsx)(g,{to:"/login",children:b("LandingPage.Header.login")}),(0,A.jsx)(u,{to:"/register",children:b("LandingPage.Header.getStarted")})]}),(0,A.jsx)(m,{onClick:()=>w(),children:e?(0,A.jsx)(y.yGN,{size:24,color:d.primaryText}):(0,A.jsx)(y.ND1,{size:24,color:d.primaryText})}),e&&(0,A.jsx)($,{onClose:()=>w()})]})]})]})},L=s.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  background-color: ${e=>{let{theme:t}=e;return t.background}};
  border-radius: 8px;
  padding: 24px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.08);

  @media screen and (min-width: 768px) {
    width: calc((100% - 32px) / 2);
  }

  @media screen and (min-width: 1280px) {
    width: calc((100% - 64px) / 3);
  }
`,P=s.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.primary}};
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,T=s.Ay.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
  margin-bottom: 10px;
`,C=s.Ay.p`
  font-size: 16px;
  color: ${e=>{let{theme:t}=e;return t.secondaryText}};
`,H=e=>{let{icon:t,title:r,description:n}=e;return(0,A.jsxs)(L,{children:[(0,A.jsx)(P,{children:(0,A.jsx)(t,{size:20})}),(0,A.jsxs)("div",{children:[(0,A.jsx)(T,{children:r}),(0,A.jsx)(C,{children:n})]})]})};var S=r(397);const F=s.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`,N=s.Ay.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
  padding: 80px 24px;
  background-color: ${e=>{let{$background:t,theme:r}=e;return t||r.background}};

  @media screen and (min-width: 1280px) {
    padding: 80px 36px;
  }
`,B=s.Ay.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
`,_=e=>{let{title:t,backgroundColor:r,id:n,children:i}=e;return(0,A.jsxs)(N,{$background:r,id:n,children:[(0,A.jsx)(B,{children:t}),i]})},K=()=>{const{t:e}=(0,a.B)(),t=(0,s.DP)();return(0,A.jsx)(_,{title:e("LandingPage.KeyFeatures.title"),backgroundColor:t.backgroundSecondary,id:"features",children:(0,A.jsxs)(F,{children:[(0,A.jsx)(H,{icon:y.ND1,title:e("LandingPage.KeyFeatures.feature1.title"),description:e("LandingPage.KeyFeatures.feature1.description")}),(0,A.jsx)(H,{icon:y.cfS,title:e("LandingPage.KeyFeatures.feature2.title"),description:e("LandingPage.KeyFeatures.feature2.description")}),(0,A.jsx)(H,{icon:S.qN5,title:e("LandingPage.KeyFeatures.feature3.title"),description:e("LandingPage.KeyFeatures.feature3.description")})]})})},D=s.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 80px 24px;
  background-color: ${e=>{let{theme:t}=e;return t.background}};

  @media screen and (min-width: 768px) {
    gap: 40px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 60px;
    justify-content: space-between;
    padding: 80px 36px;
  }
`,E=s.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 30px;

  @media screen and (min-width: 768px) {
    gap: 40px;
  }

  @media screen and (min-width: 1280px) {
    gap: 32px;
    align-items: flex-start;
  }
`,I=s.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  gap: 18px;

  @media screen and (min-width: 768px) {
    text-align: center;
    gap: 16px;
  }

  @media screen and (min-width: 1280px) {
    align-items: flex-start;
    text-align: left;
    gap: 18px;
  }
`,W=s.Ay.h1`
  font-size: 36px;
  font-weight: 700;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`,M=s.Ay.p`
  font-size: 18px;
  color: ${e=>{let{theme:t}=e;return t.secondaryText}};

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`,G=(0,s.Ay)(d.N_)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${e=>{let{theme:t}=e;return t.primary}};
  color: ${e=>{let{theme:t}=e;return t.buttonText}};
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 500;
  transition: background-color ${e=>{let{theme:t}=e;return t.animation}};

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.primaryHover}};
  }

  @media screen and (min-width: 768px) {
    width: fit-content;
  }
`,U=s.Ay.img`
  width: 100%;
  height: auto;
  max-width: 600px;
  display: block;
`,q=r.p+"static/media/landing-page_main.019adf4ec5cd1fc2527a.png",R=()=>{const{t:e}=(0,a.B)();return(0,A.jsxs)(D,{id:"hero",children:[(0,A.jsxs)(E,{children:[(0,A.jsxs)(I,{children:[(0,A.jsx)(W,{children:e("LandingPage.MainSection.title")}),(0,A.jsx)(M,{children:e("LandingPage.MainSection.description")})]}),(0,A.jsx)(G,{to:"/register",children:e("LandingPage.MainSection.try")})]}),(0,A.jsx)(U,{src:q,alt:"Taskero board preview"})]})},V=s.Ay.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  width: 100%;
  max-width: 1440px;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 100px;
  }
`,Y=s.Ay.ol`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,O=s.Ay.li`
  display: flex;
  align-items: flex-start;
  gap: 24px;
`,J=s.Ay.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${e=>{let{theme:t}=e;return t.primary}};
  color: ${e=>{let{theme:t}=e;return t.buttonText}};
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,Q=s.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,X=s.Ay.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
`,Z=s.Ay.p`
  font-size: 16px;
  color: ${e=>{let{theme:t}=e;return t.secondaryText}};
`,ee=s.Ay.img`
  width: 100%;
  height: auto;
  display: block;
  max-width: 600px;
`,te=r.p+"static/media/landing-page_how-it-works.862b4b7820da6013fee8.png",re=()=>{const{t:e}=(0,a.B)(),t=e("LandingPage.HowItWorks.steps",{returnObjects:!0});return(0,A.jsx)(_,{id:"how-it-works",title:e("LandingPage.HowItWorks.title"),children:(0,A.jsxs)(V,{children:[(0,A.jsx)(Y,{children:t.map(((e,t)=>(0,A.jsxs)(O,{children:[(0,A.jsx)(J,{children:t+1}),(0,A.jsxs)(Q,{children:[(0,A.jsx)(X,{children:e.title}),(0,A.jsx)(Z,{children:e.description})]})]},t)))}),(0,A.jsx)(ee,{src:te,alt:"How it works"})]})})};var ne=r(184),ie=r(9867),oe=r(2699);const ae=e=>e.reviews.items;var de=r(2382);const se=(0,s.Ay)(de.A)`
  width: 100%;

  .slick-slide {
    display: flex;
    justify-content: center;
  }

  .slick-dots {
    bottom: -30px;
    li button:before {
      font-size: 10px;
      color: ${e=>{let{theme:t}=e;return t.secondaryText}};
    }

    li.slick-active button:before {
      color: ${e=>{let{theme:t}=e;return t.primary}};
    }
  }
`,le=s.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.background}};
  border-radius: 8px;
  padding: 32px;
  width: 100%;
  display: flex !important;
  flex-direction: column;
  gap: 18px;
`,ce=s.Ay.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,xe=s.Ay.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`,pe=s.Ay.div`
  display: flex;
  flex-direction: column;
`,ge=s.Ay.span`
  font-weight: 700;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
`,he=s.Ay.p`
  font-size: 18px;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
`,ue=()=>{const e=(0,ie.jL)(),t=(0,ie.GV)(ae),{t:r}=(0,a.B)(),i=(0,s.DP)();(0,n.useEffect)((()=>{e((0,oe.M)())}),[e]);const o=e=>{let{rating:t}=e;return(0,A.jsx)("div",{style:{display:"flex",gap:"4px"},children:Array.from({length:5},((e,r)=>r<t?(0,A.jsx)(ne.gt3,{size:16,color:i.starColor},r):(0,A.jsx)(ne.wei,{size:16,color:i.starColorInactive},r)))})};return(0,A.jsx)(_,{id:"reviews",title:r("LandingPage.Reviews.title"),backgroundColor:i.backgroundSecondary,children:(0,A.jsx)(se,{dots:!0,arrows:!1,infinite:!0,autoplay:!0,speed:500,autoplaySpeed:6e3,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,children:t.map((e=>(0,A.jsxs)(le,{children:[(0,A.jsxs)(ce,{children:[(0,A.jsx)(xe,{src:e.user.avatar,alt:e.user.name}),(0,A.jsxs)(pe,{children:[(0,A.jsx)(ge,{children:e.user.name}),(0,A.jsx)(o,{rating:e.rating})]})]}),(0,A.jsx)(he,{children:e.text})]},e._id)))})})},me=s.Ay.footer`
  padding: 24px;
  background-color: ${e=>{let{theme:t}=e;return t.backgroundSecondary}};
  border-top: 1px solid ${e=>{let{theme:t}=e;return t.borderColor}};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`,ye=s.Ay.p`
  font-size: 14px;
  color: ${e=>{let{theme:t}=e;return t.secondaryText}};
  text-align: center;
`,fe=()=>{const{t:e}=(0,a.B)(),t=(new Date).getFullYear();return(0,A.jsxs)(me,{children:[(0,A.jsx)(o.A,{}),(0,A.jsx)(ye,{children:e("LandingPage.Footer.copyright",{year:t})})]})},je=()=>(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(z,{}),(0,A.jsx)(R,{}),(0,A.jsx)(K,{}),(0,A.jsx)(re,{}),(0,A.jsx)(ue,{}),(0,A.jsx)(fe,{})]})},3168:(e,t,r)=>{r.d(t,{A:()=>c});var n=r(5180),i=r(5464);const o=(0,i.Ay)(n.N_)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
`,a=i.Ay.img`
  width: 40px;
  height: 40px;
`,d=i.Ay.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>{let{theme:t}=e;return t.primary}};
  text-decoration: none;
`,s=r.p+"static/media/logo.f9f20538470db5fa4750.png";var l=r(579);const c=()=>(0,l.jsxs)(o,{to:"/",children:[(0,l.jsx)(a,{src:s,alt:"Taskero Logo"}),(0,l.jsx)(d,{children:"Taskero"})]})},3875:(e,t,r)=>{r.d(t,{A:()=>p});var n=r(5043),i=r(4961),o=r(9867),a=r(5464);const d=a.Ay.div`
  position: relative;
`,s=a.Ay.button`
  border: 1px solid ${e=>{let{theme:t}=e;return t.borderColor}};
  background-color: ${e=>{let{theme:t}=e;return t.background}};
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
  font-weight: 600;
  font-size: 14px;
  border-radius: 8px;
  padding: 8px 12px;
  cursor: pointer;
  min-width: 44px;
  text-align: center;
`,l=a.Ay.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 2px;
  border: 1px solid ${e=>{let{theme:t}=e;return t.borderColor}};
  background-color: ${e=>{let{theme:t}=e;return t.cardBackground}};
  border-radius: 8px;
  box-shadow: ${e=>{let{theme:t}=e;return t.shadow}};
  z-index: 10;
  overflow: hidden;
`,c=a.Ay.button`
  width: 100%;
  padding: 8px 12px;
  background: none;
  border: none;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
  cursor: pointer;

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.backgroundSecondary}};
  }
`;var x=r(579);const p=()=>{const{i18n:e}=(0,i.B)(),t=(0,o.Ym)(),[r,a]=(0,n.useState)(!1),p=(0,n.useRef)(null),g=e.language.toUpperCase(),h=e=>{t(e),a(!1)};return(0,n.useEffect)((()=>{const e=e=>{p.current&&!p.current.contains(e.target)&&a(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)}),[]),(0,x.jsxs)(d,{ref:p,children:[(0,x.jsx)(s,{onClick:()=>a((e=>!e)),children:g}),r&&(0,x.jsxs)(l,{children:[(0,x.jsx)(c,{onClick:()=>h("en"),children:"EN"}),(0,x.jsx)(c,{onClick:()=>h("uk"),children:"UK"})]})]})}}}]);
//# sourceMappingURL=918.e2078d54.chunk.js.map