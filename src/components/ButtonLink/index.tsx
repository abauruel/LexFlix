import React from "react";

import { Container } from "./styles";

const ButtonLink: React.FC = ({ children }) => {
  return (
    <Container>
      <a href="teste">{children}</a>
    </Container>
  );
};

export default ButtonLink;
