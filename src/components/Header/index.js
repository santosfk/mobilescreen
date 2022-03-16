import React from "react";
import { View } from "react-native-web";
import { MenuItems, Container } from "./style";

export default function Header() {
  return (
    <Container>
      <MenuItems>
        <Text>APP Mobile</Text>
      </MenuItems>
    </Container>
  );
}
