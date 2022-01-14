import styled from "styled-components"

export const DashboardBackground = styled.main`
  width: 100%;
  min-height: calc(100vh - 90px);
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({theme}) => theme.colors.background};
`;
export const Content = styled.section`
  display: flex;
  width: 100%;
`;
export const BoxLeft = styled.div`
  height: calc(100vh - 90px);
  width: 40%;
  background-color: ${({theme}) => theme.colors.secondary};
`;
export const BoxRight = styled.div`
  width: 60%;
  height: auto;
`;
