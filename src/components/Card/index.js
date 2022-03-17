import React from "react";
import { Content, Image, Title, Price } from "./style";

export default function Card({ imageWine, title, price }) {
  return (
    <Content>
      <Image source={imageWine} resizeMode="contain" />
      <Title>{title}</Title>
      <Price>{`R$ ${price}`}</Price>
    </Content>
  );
}
