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
export const BoxDescriptionRight = styled.div`
  display: flex;
  width: 100%;
  height: 40px;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background2};
`;
export const TextTitle = styled.span`
  width: 45%;
  margin-left: 15px;
  font-family: ${({theme}) => theme.fonts.poppins};
  font-size: 18px;
  color: ${({theme}) => theme.colors.background};
  font-weight: 700;
`;
export const TextCnpj = styled.span`
  font-family: ${({theme}) => theme.fonts.poppins};
  font-size: 18px;
  color: ${({theme}) => theme.colors.background};
  font-weight: 700;
`;
