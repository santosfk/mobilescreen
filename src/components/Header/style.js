import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";
export const Container = styled.View`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.COLOR.BACKGROUND_800};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  z-index: 2;
`;
export const ImageUser = styled.Image`
  height: ${RFPercentage(7)}px;
  width: ${RFPercentage(7)}px;
  border-radius: 50%;
`;
export const NameUser = styled.Text`
  color: ${({ theme }) => theme.COLOR.TEXT};
  font-family: ${({ theme }) => theme.FONT.BOLD};
  font-size: ${RFPercentage(3)}px;
`;
export const LevelUser = styled.Text`
  font-size: ${RFPercentage(3)}px;
  color: ${({ theme }) => theme.COLOR.TEXT};
  font-family: ${({ theme }) => theme.FONT.BOLD};
`;
