import React from "react";
import { MenuItems, Container, Item } from "./style";
import { Feather } from "react-native-vector-icons";
import theme from "../../theme";

export default function Header() {
  return (
    <Container>
      <MenuItems>
        <Item>
          <Feather name="search" size={25} color={theme.COLOR.ICONS} />
        </Item>
        <Item>
          <Feather name="user" size={25} color={theme.COLOR.ICONS} />
        </Item>
        <Item>
          <Feather name="activity" size={25} color={theme.COLOR.ICONS} />
        </Item>
      </MenuItems>
    </Container>
  );
}
