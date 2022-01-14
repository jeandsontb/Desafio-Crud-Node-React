import styled from 'styled-components';

export const HeaderContainer = styled.head`
  width: 100%;
  height: 90px;
  background-color: ${({theme}) => theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderWrapper = styled.div`
  width: 80%;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-family: ${({theme}) => theme.fonts.poppins};
    font-size: 15px;
    color: ${({theme}) => theme.colors.primary};
    margin-bottom: 10px;
    background-color: ${({theme}) => theme.colors.background};
    padding: 8px 14px;
    border-radius: 6px;
  }
`;

export const BoxLogout = styled.div`
  display: flex;
  width: 100px;
  height: 90px;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    font-size: 18px;
    color: ${({theme}) => theme.colors.background};
    font-family: ${({theme}) => theme.fonts.poppins};
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease 0.2s;
  }

  a:hover {
    text-decoration: underline;
  }
`;

