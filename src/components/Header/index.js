import React, { useContext } from "react";
import {
  Container,
  ImageUser,
  NameUser,
  LevelUser,
  ChangeTheme,
} from "./style";
import ManImg from "../../assets/Homem.jpg";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { ThemeContext } from "../../Contexts/Theme";
export default function Header() {
  const Tab = createMaterialBottomTabNavigator();
  const { handleChangeTheme, setHandleChangeTheme } = useContext(ThemeContext);

  return (
    <Container>
      <ImageUser source={ManImg} />
      <NameUser>José Adolfo</NameUser>
      <LevelUser>{`lv ${26}`}</LevelUser>
      <ChangeTheme onPress={() => setHandleChangeTheme(!handleChangeTheme)} />
    </Container>
  );
}
