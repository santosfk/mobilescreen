import React from "react";
import { Text } from "react-native-web";
import { MenuItems, Container } from "./style";
import { Feather } from "react-native-vector-icons";

export default function Header() {
  return (
    <Container>
      <MenuItems>
        <Feather name="search" size={20} color="green" />
        <Feather name="user" size={20} color="green" />
        <Feather name="activity" size={20} color="green" />
      </MenuItems>
    </Container>
  );
}
