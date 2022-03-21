import React, { useContext } from "react";
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
import { ThemeProvider } from "styled-components/native";
import themes from "../../themes";
import { ThemeContext } from "../../Contexts/Theme";

export const Profile = () => {
  const { handleChangeTheme } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={handleChangeTheme ? themes.dark : themes.light}>
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
    </ThemeProvider>
  );
};
