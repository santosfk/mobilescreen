import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";
export const Content = styled.View`
  width: 200px;
  height: 250px;
  margin: auto;
  margin-top: 50%;
  background-color: ${({ theme }) => theme.COLOR.BACKGROUND_900};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const Image = styled.Image`
  height: ${RFPercentage(35)}px;
  width: ${RFPercentage(35)}px;
  margin: auto;
  margin-top: -90px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLOR.TEXT};
  text-align: center;
  margin-bottom: 30px;
  font-size: ${RFPercentage(3.45)}px;
  font-family: ${({ theme }) => theme.FONT.REGULAR};
`;
export const Price = styled.Text`
  color: ${({ theme }) => theme.COLOR.ICONS};
  text-align: center;
  margin-bottom: 40px;
  font-size: ${RFPercentage(4)}px;
  font-family: ${({ theme }) => theme.FONT.BOLD};
`;
