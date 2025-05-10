import Header from "@/components/LandingPageHeader";
import KeyFeaturesSection from "./KeyFeaturesSection";
import MainSection from "./MainSection";
import HowItWorksSection from "./HowItWorksSection";
import ReviewsSection from "./ReviewsSection";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <>
      <Header />
      <MainSection />
      <KeyFeaturesSection />
      <HowItWorksSection />
      <ReviewsSection />
      <Footer />
    </>
  );
};

export default LandingPage;
