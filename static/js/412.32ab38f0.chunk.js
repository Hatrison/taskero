"use strict";(self.webpackChunktaskero=self.webpackChunktaskero||[]).push([[412],{8320:(e,t,n)=>{n.r(t),n.d(t,{default:()=>je});var r=n(5043),i=n(9657),o=n(3168),a=n(4961),d=n(5180),l=n(5464);const s=l.Ay.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  background-color: ${e=>{let{theme:t}=e;return t.headerBackground}};
  border-bottom: 1px solid ${e=>{let{theme:t}=e;return t.borderColor}};
`,c=l.Ay.div`
  display: flex;
  align-items: center;
  gap: 30px;
`,x=l.Ay.nav`
  @media screen and (max-width: 1280px) {
    display: none;
  }
`,p=l.Ay.ul`
  display: flex;
  gap: 30px;
  list-style: none;
  margin: 0;
  padding: 0;
`,g=(0,l.Ay)(d.N_)`
  text-decoration: none;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
  font-weight: 500;
  transition: color ${e=>{let{theme:t}=e;return t.animation}};

  &:hover {
    color: ${e=>{let{theme:t}=e;return t.primary}};
  }
`,h=l.Ay.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,m=(0,l.Ay)(d.N_)`
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
`,u=l.Ay.button`
  display: block;
  background: none;
  border: none;

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;var y=n(5200),f=n(3875),j=n(279);const w=l.Ay.div`
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
`,b=(0,l.Ay)(d.N_)`
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
`,k=(0,l.Ay)(d.N_)`
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
`,A=l.Ay.div`
  display: flex;
  gap: 16px;
`;var v=n(579);const $=e=>{let{onClose:t}=e;const{t:n}=(0,a.B)();return(0,r.useEffect)((()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="auto"})),[]),(0,v.jsxs)(w,{children:[(0,v.jsxs)(A,{children:[(0,v.jsx)(j.A,{}),(0,v.jsx)(f.A,{})]}),(0,v.jsx)(b,{to:"#features",onClick:t,children:n("LandingPage.Header.features")}),(0,v.jsx)(b,{to:"#how-it-works",onClick:t,children:n("LandingPage.Header.howItWorks")}),(0,v.jsx)(b,{to:"#reviews",onClick:t,children:n("LandingPage.Header.reviews")}),(0,v.jsx)(b,{to:"/login",onClick:t,children:n("LandingPage.Header.login")}),(0,v.jsx)(k,{to:"/register",onClick:t,children:n("LandingPage.Header.getStarted")})]})},P=()=>{const[e,t]=(0,r.useState)(!1),n=(0,i.Ub)({query:"(min-width: 1280px)"}),d=(0,l.DP)(),{t:w}=(0,a.B)(),b=()=>{t((e=>!e))};return(0,v.jsxs)(s,{children:[(0,v.jsx)(o.A,{}),(0,v.jsxs)(c,{children:[(0,v.jsx)(x,{children:(0,v.jsxs)(p,{children:[(0,v.jsx)(g,{to:"#features",children:w("LandingPage.Header.features")}),(0,v.jsx)(g,{to:"#how-it-works",children:w("LandingPage.Header.howItWorks")}),(0,v.jsx)(g,{to:"#reviews",children:w("LandingPage.Header.reviews")})]})}),(0,v.jsxs)(h,{children:[n&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(f.A,{}),(0,v.jsx)(j.A,{}),(0,v.jsx)(g,{to:"/login",children:w("LandingPage.Header.login")}),(0,v.jsx)(m,{to:"/register",children:w("LandingPage.Header.getStarted")})]}),(0,v.jsx)(u,{onClick:()=>b(),children:e?(0,v.jsx)(y.yGN,{size:24,color:d.primaryText}):(0,v.jsx)(y.ND1,{size:24,color:d.primaryText})}),e&&(0,v.jsx)($,{onClose:()=>b()})]})]})]})},L=l.Ay.div`
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
`,z=l.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.primary}};
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`,T=l.Ay.h3`
  font-size: 20px;
  font-weight: 700;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
  margin-bottom: 10px;
`,C=l.Ay.p`
  font-size: 16px;
  color: ${e=>{let{theme:t}=e;return t.secondaryText}};
`,H=e=>{let{icon:t,title:n,description:r}=e;return(0,v.jsxs)(L,{children:[(0,v.jsx)(z,{children:(0,v.jsx)(t,{size:20})}),(0,v.jsxs)("div",{children:[(0,v.jsx)(T,{children:n}),(0,v.jsx)(C,{children:r})]})]})};var S=n(397);const F=l.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`,N=l.Ay.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
  padding: 80px 24px;
  background-color: ${e=>{let{$background:t,theme:n}=e;return t||n.background}};

  @media screen and (min-width: 1280px) {
    padding: 80px 36px;
  }
`,B=l.Ay.h2`
  font-size: 28px;
  font-weight: 700;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
`,_=e=>{let{title:t,backgroundColor:n,id:r,children:i}=e;return(0,v.jsxs)(N,{$background:n,id:r,children:[(0,v.jsx)(B,{children:t}),i]})},K=()=>{const{t:e}=(0,a.B)(),t=(0,l.DP)();return(0,v.jsx)(_,{title:e("LandingPage.KeyFeatures.title"),backgroundColor:t.backgroundSecondary,id:"features",children:(0,v.jsxs)(F,{children:[(0,v.jsx)(H,{icon:y.ND1,title:e("LandingPage.KeyFeatures.feature1.title"),description:e("LandingPage.KeyFeatures.feature1.description")}),(0,v.jsx)(H,{icon:y.cfS,title:e("LandingPage.KeyFeatures.feature2.title"),description:e("LandingPage.KeyFeatures.feature2.description")}),(0,v.jsx)(H,{icon:S.qN5,title:e("LandingPage.KeyFeatures.feature3.title"),description:e("LandingPage.KeyFeatures.feature3.description")})]})})},D=l.Ay.div`
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
`,I=l.Ay.div`
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
`,M=l.Ay.div`
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
`,W=l.Ay.h1`
  font-size: 36px;
  font-weight: 700;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`,q=l.Ay.p`
  font-size: 18px;
  color: ${e=>{let{theme:t}=e;return t.secondaryText}};

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`,E=(0,l.Ay)(d.N_)`
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
`,G=l.Ay.img`
  width: 100%;
  height: auto;
  max-width: 600px;
  display: block;
`,O=n.p+"static/media/landing-page_main.019adf4ec5cd1fc2527a.png",R=()=>{const{t:e}=(0,a.B)();return(0,v.jsxs)(D,{id:"hero",children:[(0,v.jsxs)(I,{children:[(0,v.jsxs)(M,{children:[(0,v.jsx)(W,{children:e("LandingPage.MainSection.title")}),(0,v.jsx)(q,{children:e("LandingPage.MainSection.description")})]}),(0,v.jsx)(E,{to:"/register",children:e("LandingPage.MainSection.try")})]}),(0,v.jsx)(G,{src:O,alt:"Taskero board preview"})]})},U=l.Ay.div`
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
`,V=l.Ay.ol`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media screen and (min-width: 768px) {
    gap: 32px;
  }
`,Y=l.Ay.li`
  display: flex;
  align-items: flex-start;
  gap: 24px;
`,J=l.Ay.div`
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
`,Q=l.Ay.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,X=l.Ay.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
`,Z=l.Ay.p`
  font-size: 16px;
  color: ${e=>{let{theme:t}=e;return t.secondaryText}};
`,ee=l.Ay.img`
  width: 100%;
  height: auto;
  display: block;
  max-width: 600px;
`,te=n.p+"static/media/landing-page_how-it-works.862b4b7820da6013fee8.png",ne=()=>{const{t:e}=(0,a.B)(),t=e("LandingPage.HowItWorks.steps",{returnObjects:!0});return(0,v.jsx)(_,{id:"how-it-works",title:e("LandingPage.HowItWorks.title"),children:(0,v.jsxs)(U,{children:[(0,v.jsx)(V,{children:t.map(((e,t)=>(0,v.jsxs)(Y,{children:[(0,v.jsx)(J,{children:t+1}),(0,v.jsxs)(Q,{children:[(0,v.jsx)(X,{children:e.title}),(0,v.jsx)(Z,{children:e.description})]})]},t)))}),(0,v.jsx)(ee,{src:te,alt:"How it works"})]})})};var re=n(184),ie=n(9867),oe=n(2699);const ae=e=>e.reviews.items;var de=n(2382);const le=(0,l.Ay)(de.A)`
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
`,se=l.Ay.div`
  background-color: ${e=>{let{theme:t}=e;return t.background}};
  border-radius: 8px;
  padding: 32px;
  width: 100%;
  display: flex !important;
  flex-direction: column;
  gap: 18px;
`,ce=l.Ay.div`
  display: flex;
  align-items: center;
  gap: 16px;
`,xe=l.Ay.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`,pe=l.Ay.div`
  display: flex;
  flex-direction: column;
`,ge=l.Ay.span`
  font-weight: 700;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
`,he=l.Ay.p`
  font-size: 18px;
  color: ${e=>{let{theme:t}=e;return t.primaryText}};
`,me=()=>{const e=(0,ie.jL)(),t=(0,ie.GV)(ae),{t:n}=(0,a.B)(),i=(0,l.DP)();(0,r.useEffect)((()=>{e((0,oe.M)())}),[e]);const o=e=>{let{rating:t}=e;return(0,v.jsx)("div",{style:{display:"flex",gap:"4px"},children:Array.from({length:5},((e,n)=>n<t?(0,v.jsx)(re.gt3,{size:16,color:i.starColor},n):(0,v.jsx)(re.wei,{size:16,color:i.starColorInactive},n)))})};return(0,v.jsx)(_,{id:"reviews",title:n("LandingPage.Reviews.title"),backgroundColor:i.backgroundSecondary,children:(0,v.jsx)(le,{dots:!0,arrows:!1,infinite:!0,autoplay:!0,speed:500,autoplaySpeed:6e3,slidesToShow:1,slidesToScroll:1,adaptiveHeight:!0,children:t.map((e=>(0,v.jsxs)(se,{children:[(0,v.jsxs)(ce,{children:[(0,v.jsx)(xe,{src:e.user.avatar,alt:e.user.name}),(0,v.jsxs)(pe,{children:[(0,v.jsx)(ge,{children:e.user.name}),(0,v.jsx)(o,{rating:e.rating})]})]}),(0,v.jsx)(he,{children:e.text})]},e._id)))})})},ue=l.Ay.footer`
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
`,ye=l.Ay.p`
  font-size: 14px;
  color: ${e=>{let{theme:t}=e;return t.secondaryText}};
  text-align: center;
`,fe=()=>{const{t:e}=(0,a.B)(),t=(new Date).getFullYear();return(0,v.jsxs)(ue,{children:[(0,v.jsx)(o.A,{}),(0,v.jsx)(ye,{children:e("LandingPage.Footer.copyright",{year:t})})]})},je=()=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(P,{}),(0,v.jsx)(R,{}),(0,v.jsx)(K,{}),(0,v.jsx)(ne,{}),(0,v.jsx)(me,{}),(0,v.jsx)(fe,{})]})}}]);
//# sourceMappingURL=412.32ab38f0.chunk.js.map