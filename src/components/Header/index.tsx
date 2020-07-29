import React from "react";

import { Container, Logo } from "./styles";
import Logotype from "../../assets/lexFlix.png";
import ButtonLink from "../ButtonLink";

const Header: React.FC = () => {
  return (
    <Container>
      <Logo src={Logotype} alt="LexFlix logo" />
      <ButtonLink>Novo Video</ButtonLink>
    </Container>
  );
};

export default Header;
