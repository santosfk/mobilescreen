import React from "react";
import { Container } from "./style";
import Header from "../../components/Header";
import Card from "../../components/Card";
import WineZero from "../../assets/vinho.png";
import WineOne from "../../assets/vinho3.png";
import { ScrollView } from "react-native";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Profile from "../Profile";

const Tab = createMaterialBottomTabNavigator();
export const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  );
};
export default function Home() {
  return (
    <Container>
      <Header />
      <ScrollView>
        <Card imageWine={WineZero} title="Riesling Itálico" price={100} />
        <Card imageWine={WineOne} title="Herdad de Rose " price={120} />
      </ScrollView>
    </Container>
  );
}
