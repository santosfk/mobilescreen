import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.COLOR.BACKGROUND_800};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: absolute;
  z-index: 2;
`;
export const MenuItems = styled.View`
  margin: auto;
  color: white;
  flex-direction: row;
`;
export const Item = styled.View`
  margin: 0px 30px;
`;
