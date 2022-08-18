import React from "react";
import {
  Avatar,
  Flex,
  HStack,
  Text,
} from "@chakra-ui/react";

import * as C from "./styles";

const Header = () => {
  return (
    <C.Container>
      <C.Header>
        <C.Title>Controle de Finança</C.Title>
        <a href="/home">
          <C.Button>Sair</C.Button>
        </a>
      
      </C.Header>
    </C.Container>
  );
};

export default Header;
