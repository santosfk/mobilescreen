import React from "react";
import { Container } from "./style";
import Header from "../../components/Header";
import Card from "../../components/Card";
import WineZero from "../../assets/vinho.png";
import HerdadeRose from "../../assets/HerdadeRose.png";
import { ScrollView } from "react-native";

export default function Home() {
  return (
    <Container>
      <Header />
      <ScrollView>
        <Card imageWine={WineZero} title="Riesling Itálico" price={100} />
        <Card imageWine={HerdadeRose} title="Herdad de Rose " price={120} />
      </ScrollView>
    </Container>
  );
}
