import { useTranslation } from "react-i18next";
import {
  Section,
  Content,
  TextWrapper,
  Title,
  Description,
  ButtonPrimary,
  Image,
} from "./MainSection.styled";
import boardImg from "@/images/png/landing-page_main.png";

const MainSection = () => {
  const { t } = useTranslation();

  return (
    <Section id="hero">
      <Content>
        <TextWrapper>
          <Title>{t("LandingPage.MainSection.title")}</Title>
          <Description>{t("LandingPage.MainSection.description")}</Description>
        </TextWrapper>
        <ButtonPrimary to="/register">
          {t("LandingPage.MainSection.try")}
        </ButtonPrimary>
      </Content>

      <Image src={boardImg} alt="Taskero board preview" />
    </Section>
  );
};

export default MainSection;
