import { Container, Title } from "./Section.styled";

type Props = {
  title: string;
  backgroundColor?: string;
  id: string;
  children: React.ReactNode;
};

const Section = ({ title, backgroundColor, id, children }: Props) => {
  return (
    <Container $background={backgroundColor} id={id}>
      <Title>{title}</Title>
      {children}
    </Container>
  );
};

export default Section;
