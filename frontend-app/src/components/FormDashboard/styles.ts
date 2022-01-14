import styled from 'styled-components';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Container: styled.section`
    position: fixed;
    width: 35%;
    margin-left: 2.5%;
    margin-top: 20px;
    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.background};
    padding: 20px;
  `,
  TextTitle: styled.h1`
    font-family: ${({theme}) => theme.fonts.poppins};
    font-size: 20px;
    color: ${({theme}) => theme.colors.primary};
  `,
  BoxInputs: styled.div`
    margin-top: 20px;
  `,
  InputContainer: styled.div`
    margin-bottom: -10px;
  `,
  TextLabel: styled.label`
    font-family: ${({theme}) => theme.fonts.poppins};
    color: ${({theme}) => theme.colors.secondary};
    font-weight: 300;
    margin-left: 5px;
  `,
}