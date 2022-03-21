import styled from "styled-components/native";

export const Container = styled.View`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.COLOR.BACKGROUND};
`;
export const BottomBar = styled.View`
  background-color: ${({ theme }) => theme.COLOR.BACKGROUND_800};
  color: ${({ theme }) => theme.COLOR.TEXT};
  flex: 1;
  justify-content: flex-end;
`;
