import React from "react";
import Profile from "../Profile";
import Home from "../screens/Home";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
const Tab = createMaterialBottomTabNavigator();
export const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  );
};
