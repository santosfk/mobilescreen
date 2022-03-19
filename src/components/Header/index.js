import React from "react";
import { Container, ImageUser, NameUser, LevelUser } from "./style";
import ManImg from "../../assets/Homem.jpg";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

export default function Header() {
  const Tab = createMaterialBottomTabNavigator();
  return (
    <Container>
      <ImageUser source={ManImg} />
      <NameUser>José Adolfo</NameUser>
      <LevelUser>{`lv ${26}`}</LevelUser>
    </Container>
  );
}
