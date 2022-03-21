import React, { useContext } from "react";
import { Container } from "./style";
import Header from "../../components/Header";
import Card from "../../components/Card";
import WineZero from "../../assets/vinho.png";
import WineOne from "../../assets/vinho3.png";
import { ScrollView } from "react-native";
import { ThemeContext } from "../../Contexts/Theme";
import { ThemeProvider } from "styled-components/native";
import themes from "../../themes/index";
export default function Home() {
  const { handleChangeTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={handleChangeTheme ? themes.dark : themes.light}>
      <Container>
        <Header />
        <ScrollView>
          <Card imageWine={WineZero} title="Riesling Itálico" price={100} />
          <Card imageWine={WineOne} title="Herdad de Rose " price={120} />
        </ScrollView>
      </Container>
    </ThemeProvider>
  );
}
