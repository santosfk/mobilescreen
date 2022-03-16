import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.COLOR.BACKGROUND_700};
  position: absolute;
`;
export const MenuItems = styled.View`
  display: inline-block;
  margin: auto;
`;
