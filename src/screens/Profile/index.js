import React from "react";
import { View } from "react-native";
import Img from "../../assets/Homem.jpg";
import {
  Content,
  UserImg,
  UserName,
  UsersSkills,
  UserLevel,
  UserPurchases,
  UserSales,
} from "./style";
export const Profile = () => {
  return (
    <Content>
      <UserImg source={Img} />
      <UserName>José Adolfo</UserName>
      <UsersSkills>
        <UserLevel>{26}</UserLevel>
        <UserPurchases>{10}</UserPurchases>
        <UserSales>{2}</UserSales>
      </UsersSkills>
    </Content>
  );
};
