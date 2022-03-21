import { StatusBar } from "expo-status-bar";
import React, { useContext } from "react";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import MyTabs from "./src/MyTabs/index";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import themes from "./src/themes";
import ThemeContextProvider from "./src/Contexts/Theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const ChangeTheme = false;
  return (
    <ThemeContextProvider>
      <ThemeProvider theme={ChangeTheme ? themes.dark : themes.light}>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
        <StatusBar style="auto" />
      </ThemeProvider>
    </ThemeContextProvider>
  );
}
