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

export const Image = styled.Image`
  height: 250px;
  width: 200px;
  margin: auto;
  margin-top: -90px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLOR.TEXT};
  text-align: center;
  margin-bottom: 30px;
  font-size: 20px;
  font-family: ${({ theme }) => theme.FONT.REGULAR};
`;
export const Price = styled.Text`
  color: ${({ theme }) => theme.COLOR.ICONS};
  text-align: center;
  margin-bottom: 40px;
  font-size: 20px;
  font-family: ${({ theme }) => theme.FONT.BOLD};
`;
