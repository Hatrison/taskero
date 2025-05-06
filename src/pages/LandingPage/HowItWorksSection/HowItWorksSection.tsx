import { useTranslation } from "react-i18next";
import {
  Wrapper,
  Steps,
  Step,
  Number,
  StepTitle,
  StepDescription,
  Image,
  StepInfo,
} from "./HowItWorksSection.styled";
import Section from "@/components/Section";
import illustration from "@/images/png/landing-page_how-it-works.png";

const HowItWorksSection = () => {
  const { t } = useTranslation();
  const steps = t("LandingPage.HowItWorks.steps", { returnObjects: true }) as {
    title: string;
    description: string;
  }[];

  return (
    <Section id="how-it-works" title={t("LandingPage.HowItWorks.title")}>
      <Wrapper>
        <Steps>
          {steps.map((step, idx) => (
            <Step key={idx}>
              <Number>{idx + 1}</Number>
              <StepInfo>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </StepInfo>
            </Step>
          ))}
        </Steps>
        <Image src={illustration} alt="How it works" />
      </Wrapper>
    </Section>
  );
};

export default HowItWorksSection;
