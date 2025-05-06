import { useTranslation } from "react-i18next";
import { useTheme } from "styled-components";
import FeatureCard from "@/components/FeatureCard";
import { FiMenu, FiUsers } from "react-icons/fi";
import { TbDragDrop2 } from "react-icons/tb";
import { CardContainer } from "./KeyFeaturesSection.styled";
import Section from "@/components/Section";

const KeyFeaturesSection = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Section
      title={t("LandingPage.KeyFeatures.title")}
      backgroundColor={theme.backgroundSecondary}
      id="features"
    >
      <CardContainer>
        <FeatureCard
          icon={FiMenu}
          title={t("LandingPage.KeyFeatures.feature1.title")}
          description={t("LandingPage.KeyFeatures.feature1.description")}
        />

        <FeatureCard
          icon={FiUsers}
          title={t("LandingPage.KeyFeatures.feature2.title")}
          description={t("LandingPage.KeyFeatures.feature2.description")}
        />

        <FeatureCard
          icon={TbDragDrop2}
          title={t("LandingPage.KeyFeatures.feature3.title")}
          description={t("LandingPage.KeyFeatures.feature3.description")}
        />
      </CardContainer>
    </Section>
  );
};

export default KeyFeaturesSection;
