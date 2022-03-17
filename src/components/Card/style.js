import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";
import * as Animatable from "react-native-animatable";
export const Content = styled(Animatable.Text)`
  width: 250px;
  height: 320px;
  margin: auto;
  margin-top: 50%;
  background-color: ${({ theme }) => theme.COLOR.BACKGROUND_900};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  align-items: center;
`;

export const Image = styled(Animatable.Image)`
  height: ${RFPercentage(40)}px;
  width: ${RFPercentage(40)}px;
  margin-top: -90px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLOR.TEXT};
  font-size: ${RFPercentage(4)}px;
  font-family: ${({ theme }) => theme.FONT.REGULAR};
  margin: 0px 35px;
  margin-top: ${RFPercentage(5)}px;
  text-align: center;
`;
export const Price = styled.Text`
  color: ${({ theme }) => theme.COLOR.ICONS};
  font-size: ${RFPercentage(3.2)}px;
  font-family: ${({ theme }) => theme.FONT.BOLD};
  text-align: center;
  margin: 10px 0px;
`;

export const DataContent = styled.View`
  justify-content: center;
`;
