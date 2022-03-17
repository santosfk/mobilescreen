import React from "react";
import { Content, Image, Title, Price, DataContent } from "./style";

export default function Card({ imageWine, title, price }) {
  return (
    <Content animation="bounceIn">
      <Image
        source={imageWine}
        resizeMode="contain"
        animation="pulse"
        iterationCount="infinite"
      />
      <DataContent>
        <Title>{title}</Title>
        <Price>{`R$ ${price}`}</Price>
      </DataContent>
    </Content>
  );
}
