import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";
export const Content = styled.View`
  background-color: ${({ theme }) => theme.COLOR.BACKGROUND};
  height: 100vh;
  align-items: center;
`;
export const UserImg = styled.Image`
  height: ${RFPercentage(25)}px;
  width: ${RFPercentage(25)}px;
  margin-top: 30px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.COLOR.BACKGROUND_800};
`;
export const UserName = styled.Text`
  margin-top: 10px;
  font-size: ${RFPercentage(4)}px;
  color: ${({ theme }) => theme.COLOR.ICONS};
`;
export const UsersSkills = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: ${RFPercentage(20)}px;
`;
export const UserLevel = styled.View`
  flex-direction: column;
  align-items: center;
`;
export const UserPurchases = styled.View`
  flex-direction: column;
  margin: 0px 30%;
  align-items: center;
`;
export const UserSales = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const SkillLabel = styled.Text`
  font-size: ${RFPercentage(4)}px;
  color: ${({ theme }) => theme.COLOR.BACKGROUND_800};
`;
export const SkillValue = styled.Text`
  font-size: ${RFPercentage(5)}px;
  color: ${({ theme }) => theme.COLOR.ICONS};
`;
