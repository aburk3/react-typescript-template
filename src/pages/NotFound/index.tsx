import React from "react";

import {
  Container,
  Title,
  Section,
  SectionHeader,
  Description,
} from "./styles";

const NotFound = () => {
  return (
    <Container>
      <Title>Page Not Found</Title>

      <Section>
        <SectionHeader>404</SectionHeader>

        <Description>
          The page you are looking for doesn't exist or has been moved.
        </Description>
      </Section>
    </Container>
  );
};

export default NotFound;
