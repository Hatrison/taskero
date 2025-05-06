"use strict";(self.webpackChunktaskero=self.webpackChunktaskero||[]).push([[284],{8971:(e,t,r)=>{r.r(t),r.d(t,{default:()=>Pe});var n=r(5043),i=r(9657),o=r(5180),a=r(5464);const d=(0,a.Ay)(o.N_)`
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
`,l=a.Ay.img`
  width: 40px;
  height: 40px;
`,s=a.Ay.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>{let{theme:t}=e;return t.primary}};
  text-decoration: none;
`,c=r.p+"static/media/logo.f9f20538470db5fa4750.png";var x=r(579);const p=()=>(0,x.jsxs)(d,{to:"/",children:[(0,x.jsx)(l,{src:c,alt:"Taskero Logo"}),(0,x.jsx)(s,{children:"Taskero"})]});var g=r(4961);const h=a.Ay.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  background-color: ${e=>{let{theme:t}=e;return t.headerBackground}};
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.borderColor}};
`,u=a.Ay.div`
  display: flex;
  align-items: center;
  gap: 30px;
`,m=a.Ay.nav`
  @media screen and (max-width: 1280px) {
    display: none;
  }
`,y=a.Ay.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
`,f=(0,a.Ay)(o.N_)`
  text-decoration: none;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
  font-weight: 500;
  transition: color ${e=>{let{theme:t}=e;return t.animation}};

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.primary}};
  }
`,j=a.Ay.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,b=(0,a.Ay)(o.N_)`
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
`,w=a.Ay.button`
  display: block;
  background: none;
  border: none;

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;var k=r(5200),v=r(9867);const $=a.Ay.div`
  position: relative;
`,A=a.Ay.button`
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
`,z=a.Ay.div`
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
`,L=a.Ay.button`
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
`,P=()=>{const{i18n:e}=(0,g.B)(),t=(0,v.Ym)(),[r,i]=(0,n.useState)(!1),o=(0,n.useRef)(null),a=e.language.toUpperCase(),d=e=>{t(e),i(!1)};return(0,n.useEffect)((()=>{const e=e=>{o.current&&!o.current.contains(e.target)&&i(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)}),[]),(0,x.jsxs)($,{ref:o,children:[(0,x.jsx)(A,{onClick:()=>i((e=>!e)),children:a}),r&&(0,x.jsxs)(z,{children:[(0,x.jsx)(L,{onClick:()=>d("en"),children:"EN"}),(0,x.jsx)(L,{onClick:()=>d("uk"),children:"UK"})]})]})},T=a.Ay.button`
  background-color: ${e=>{let{theme:t}=e;return t.backgroundSecondary}};
  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
`,C=()=>{const e=(0,v.GV)((e=>e.theme.current)),t=(0,v.H1)(),r=(0,a.DP)();return(0,x.jsx)(T,{onClick:t,children:"light"===e?(0,x.jsx)(k.Wh$,{size:20,color:r.primaryText}):(0,x.jsx)(k.hkc,{size:20,color:r.primaryText})})},H=a.Ay.div`
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
`,S=(0,a.Ay)(o.N_)`
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
`,F=(0,a.Ay)(o.N_)`
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
`,N=a.Ay.div`
  display: flex;
  gap: 16px;
`,B=e=>{let{onClose:t}=e;const{t:r}=(0,g.B)();return(0,n.useEffect)((()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="auto"})),[]),(0,x.jsxs)(H,{children:[(0,x.jsxs)(N,{children:[(0,x.jsx)(C,{}),(0,x.jsx)(P,{})]}),(0,x.jsx)(S,{to:"#features",onClick:t,children:r("LandingPage.Header.features")}),(0,x.jsx)(S,{to:"#how-it-works",onClick:t,children:r("LandingPage.Header.howItWorks")}),(0,x.jsx)(S,{to:"#reviews",onClick:t,children:r("LandingPage.Header.reviews")}),(0,x.jsx)(S,{to:"/login",onClick:t,children:r("LandingPage.Header.login")}),(0,x.jsx)(F,{to:"/register",onClick:t,children:r("LandingPage.Header.getStarted")})]})},_=()=>{const[e,t]=(0,n.useState)(!1),r=(0,i.Ub)({query:"(min-width: 1280px)"}),o=(0,a.DP)(),{t:d}=(0,g.B)(),l=()=>{t((e=>!e))};return(0,x.jsxs)(h,{children:[(0,x.jsx)(p,{}),(0,x.jsxs)(u,{children:[(0,x.jsx)(m,{children:(0,x.jsxs)(y,{children:[(0,x.jsx)(f,{to:"#features",children:d("LandingPage.Header.features")}),(0,x.jsx)(f,{to:"#how-it-works",children:d("LandingPage.Header.howItWorks")}),(0,x.jsx)(f,{to:"#reviews",children:d("LandingPage.Header.reviews")})]})}),(0,x.jsxs)(j,{children:[r&&(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(P,{}),(0,x.jsx)(C,{}),(0,x.jsx)(f,{to:"/login",children:d("LandingPage.Header.login")}),(0,x.jsx)(b,{to:"/register",children:d("LandingPage.Header.getStarted")})]}),(0,x.jsx)(w,{onClick:()=>l(),children:e?(0,x.jsx)(k.yGN,{size:24,color:o.primaryText}):(0,x.jsx)(k.ND1,{size:24,color:o.primaryText})}),e&&(0,x.jsx)(B,{onClose:()=>l()})]})]})]})},K=a.Ay.div`
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
`,D=a.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.primary}};
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,E=a.Ay.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
  margin-bottom: 10px;
`,I=a.Ay.p`
  font-size: 16px;
  color: ${e=>{let{theme:t}=e;return t.secondaryText}};
`,W=e=>{let{icon:t,title:r,description:n}=e;return(0,x.jsxs)(K,{children:[(0,x.jsx)(D,{children:(0,x.jsx)(t,{size:20})}),(0,x.jsxs)("div",{children:[(0,x.jsx)(E,{children:r}),(0,x.jsx)(I,{children:n})]})]})};var M=r(397);const G=a.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`,U=a.Ay.section`
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
`,q=a.Ay.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
`,R=e=>{let{title:t,backgroundColor:r,id:n,children:i}=e;return(0,x.jsxs)(U,{$background:r,id:n,children:[(0,x.jsx)(q,{children:t}),i]})},V=()=>{const{t:e}=(0,g.B)(),t=(0,a.DP)();return(0,x.jsx)(R,{title:e("LandingPage.KeyFeatures.title"),backgroundColor:t.backgroundSecondary,id:"features",children:(0,x.jsxs)(G,{children:[(0,x.jsx)(W,{icon:k.ND1,title:e("LandingPage.KeyFeatures.feature1.title"),description:e("LandingPage.KeyFeatures.feature1.description")}),(0,x.jsx)(W,{icon:k.cfS,title:e("LandingPage.KeyFeatures.feature2.title"),description:e("LandingPage.KeyFeatures.feature2.description")}),(0,x.jsx)(W,{icon:M.qN5,title:e("LandingPage.KeyFeatures.feature3.title"),description:e("LandingPage.KeyFeatures.feature3.description")})]})})},Y=a.Ay.div`
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
`,O=a.Ay.div`
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
`,J=a.Ay.div`
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
`,Q=a.Ay.h1`
  font-size: 36px;
  font-weight: 700;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`,X=a.Ay.p`
  font-size: 18px;
  color: ${e=>{let{theme:t}=e;return t.secondaryText}};

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`,Z=(0,a.Ay)(o.N_)`
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
`,ee=a.Ay.img`
  width: 100%;
  height: auto;
  max-width: 600px;
  display: block;
`,te=r.p+"static/media/landing-page_main.019adf4ec5cd1fc2527a.png",re=()=>{const{t:e}=(0,g.B)();return(0,x.jsxs)(Y,{id:"hero",children:[(0,x.jsxs)(O,{children:[(0,x.jsxs)(J,{children:[(0,x.jsx)(Q,{children:e("LandingPage.MainSection.title")}),(0,x.jsx)(X,{children:e("LandingPage.MainSection.description")})]}),(0,x.jsx)(Z,{to:"/register",children:e("LandingPage.MainSection.try")})]}),(0,x.jsx)(ee,{src:te,alt:"Taskero board preview"})]})},ne=a.Ay.div`
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
`,ie=a.Ay.ol`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,oe=a.Ay.li`
  display: flex;
  align-items: flex-start;
  gap: 24px;
`,ae=a.Ay.div`
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
`,de=a.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,le=a.Ay.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
`,se=a.Ay.p`
  font-size: 16px;
  color: ${e=>{let{theme:t}=e;return t.secondaryText}};
`,ce=a.Ay.img`
  width: 100%;
  height: auto;
  display: block;
  max-width: 600px;
`,xe=r.p+"static/media/landing-page_how-it-works.862b4b7820da6013fee8.png",pe=()=>{const{t:e}=(0,g.B)(),t=e("LandingPage.HowItWorks.steps",{returnObjects:!0});return(0,x.jsx)(R,{id:"how-it-works",title:e("LandingPage.HowItWorks.title"),children:(0,x.jsxs)(ne,{children:[(0,x.jsx)(ie,{children:t.map(((e,t)=>(0,x.jsxs)(oe,{children:[(0,x.jsx)(ae,{children:t+1}),(0,x.jsxs)(de,{children:[(0,x.jsx)(le,{children:e.title}),(0,x.jsx)(se,{children:e.description})]})]},t)))}),(0,x.jsx)(ce,{src:xe,alt:"How it works"})]})})};var ge=r(184),he=r(2699);const ue=e=>e.reviews.items;var me=r(2382);const ye=(0,a.Ay)(me.A)`
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
`,fe=a.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.background}};
  border-radius: 8px;
  padding: 32px;
  width: 100%;
  display: flex !important;
  flex-direction: column;
  gap: 18px;
`,je=a.Ay.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,be=a.Ay.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`,we=a.Ay.div`
  display: flex;
  flex-direction: column;
`,ke=a.Ay.span`
  font-weight: 700;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
`,ve=a.Ay.p`
  font-size: 18px;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
`,$e=()=>{const e=(0,v.jL)(),t=(0,v.GV)(ue),{t:r}=(0,g.B)(),i=(0,a.DP)();(0,n.useEffect)((()=>{e((0,he.M)())}),[e]);const o=e=>{let{rating:t}=e;return(0,x.jsx)("div",{style:{display:"flex",gap:"4px"},children:Array.from({length:5},((e,r)=>r<t?(0,x.jsx)(ge.gt3,{size:16,color:i.starColor},r):(0,x.jsx)(ge.wei,{size:16,color:i.starColorInactive},r)))})};return(0,x.jsx)(R,{id:"reviews",title:r("LandingPage.Reviews.title"),backgroundColor:i.backgroundSecondary,children:(0,x.jsx)(ye,{dots:!0,arrows:!1,infinite:!0,autoplay:!0,speed:500,autoplaySpeed:6e3,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,children:t.map((e=>(0,x.jsxs)(fe,{children:[(0,x.jsxs)(je,{children:[(0,x.jsx)(be,{src:e.user.avatar,alt:e.user.name}),(0,x.jsxs)(we,{children:[(0,x.jsx)(ke,{children:e.user.name}),(0,x.jsx)(o,{rating:e.rating})]})]}),(0,x.jsx)(ve,{children:e.text})]},e._id)))})})},Ae=a.Ay.footer`
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
`,ze=a.Ay.p`
  font-size: 14px;
  color: ${e=>{let{theme:t}=e;return t.secondaryText}};
  text-align: center;
`,Le=()=>{const{t:e}=(0,g.B)(),t=(new Date).getFullYear();return(0,x.jsxs)(Ae,{children:[(0,x.jsx)(p,{}),(0,x.jsx)(ze,{children:e("LandingPage.Footer.copyright",{year:t})})]})},Pe=()=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(_,{}),(0,x.jsx)(re,{}),(0,x.jsx)(V,{}),(0,x.jsx)(pe,{}),(0,x.jsx)($e,{}),(0,x.jsx)(Le,{})]})}}]);
//# sourceMappingURL=284.63630139.chunk.js.map