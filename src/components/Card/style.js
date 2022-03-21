import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";
import * as Animatable from "react-native-animatable";
export const Content = styled(Animatable.Text)`
  width: 250px;
  height: 300px;
  margin: auto;
  margin-bottom: 20%;
  margin-top: 25%;
  background-color: ${({ theme }) => theme.COLOR.BACKGROUND_900};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const Image = styled(Animatable.Image)`
  height: ${RFPercentage(40)}px;
  width: ${RFPercentage(40)}px;
  margin-top: -60px;
  padding: 0px 5px;
`;

export const Title = styled.Text`
  color: white;
  font-size: ${RFPercentage(4)}px;
  font-family: ${({ theme }) => theme.FONT.REGULAR};
  margin: 0px 0px 0px 35px;
  margin-top: ${RFPercentage(5)}px;
`;
export const Price = styled.Text`
  color: ${({ theme }) => theme.COLOR.ICONS};
  font-size: ${RFPercentage(4)}px;
  font-family: ${({ theme }) => theme.FONT.BOLD};
  margin: 5px 0px;
  text-align: center;
`;

export const DataContent = styled.View`
  justify-content: center;
`;
