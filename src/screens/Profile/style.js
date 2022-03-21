import styled from "styled-components/native";
import { RFPercentage } from "react-native-responsive-fontsize";
export const Content = styled.View`
  background-color: black;
  height: 100vh;
  align-items: center;
`;
export const UserImg = styled.Image`
  height: ${RFPercentage(20)}px;
  width: ${RFPercentage(20)}px;
  margin-top: 30px;
  border-radius: 50%;
  border: 1px solid purple;
`;
export const UserName = styled.Text`
  color: white;
  margin-top: 10px;
  font-size: ${RFPercentage(4)}px;
`;
export const UsersSkills = styled.View`
  color: white;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: ${RFPercentage(7)}px;
`;
export const UserLevel = styled.View`
  flex-direction: column;
  align-items: center;
`;
export const UserPurchases = styled.View`
  flex-direction: column;
  margin: 0px 40px;
  align-items: center;
`;
export const UserSales = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const SkillLabel = styled.Text`
  color: white;
  font-size: ${RFPercentage(4)}px;
`;
export const SkillValue = styled.Text`
  color: white;
  font-size: ${RFPercentage(5)}px;
`;
