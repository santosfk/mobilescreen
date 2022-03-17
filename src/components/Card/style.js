import styled from "styled-components/native";

export const Container = styled.View`
  justify-content: center;
  align-items: center;
`;
export const Content = styled.View`
  width: 200px;
  height: 250px;
  margin: auto;
  margin-top: 50%;
  background-color: ${({ theme }) => theme.COLOR.BACKGROUND_900};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
