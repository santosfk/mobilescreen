import React from "react";
import { Text } from "react-native";

import Img from "../../assets/Homem.jpg";
import {
  Content,
  UserImg,
  UserName,
  UsersSkills,
  UserLevel,
  UserPurchases,
  UserSales,
  SkillLabel,
  SkillValue,
} from "./style";
export const Profile = () => {
  return (
    <Content>
      <UserImg source={Img} />
      <UserName>José Adolfo</UserName>
      <UsersSkills>
        <UserLevel>
          <SkillLabel>Level</SkillLabel>
          <SkillValue>{26}</SkillValue>
        </UserLevel>
        <UserPurchases>
          <SkillLabel>Compras</SkillLabel>
          <SkillValue>{10}</SkillValue>
        </UserPurchases>
        <UserSales>
          <SkillLabel>Vendas</SkillLabel>
          <SkillValue>{2}</SkillValue>
        </UserSales>
      </UsersSkills>
    </Content>
  );
};
