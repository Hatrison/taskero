import { Card, IconWrapper, Title, Description } from "./FeatureCard.styled";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  title: string;
  description: string;
};

const FeatureCard = ({ icon: Icon, title, description }: Props) => {
  return (
    <Card>
      <IconWrapper>
        <Icon size={20} />
      </IconWrapper>
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </div>
    </Card>
  );
};

export default FeatureCard;
