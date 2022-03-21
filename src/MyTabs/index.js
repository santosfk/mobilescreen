import React from "react";
import { Profile } from "../screens/Profile";
import Home from "../screens/Home";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
const Tab = createMaterialBottomTabNavigator();
export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  );
}
