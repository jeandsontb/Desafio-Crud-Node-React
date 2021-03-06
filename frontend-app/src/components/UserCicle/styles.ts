import styled from "styled-components";

export const CircleContainer = styled.div`
  width: 74px;
  height: 74px;
  border-radius: 50%;
  border: 1px solid ${({theme}) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  font-family: ${({theme}) => theme.fonts.abrilFatface};
  color: ${({theme}) => theme.colors.background};
  font-weight: 300;
  font-size: 2.1rem;
`;