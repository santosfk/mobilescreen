import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View } from "react-native";
import Home from "./src/screens/Home";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components/native";
import THEME from "./src/theme";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={THEME}>
      <View>
        <StatusBar style="auto" />
        <Home />
      </View>
    </ThemeProvider>
  );
}
