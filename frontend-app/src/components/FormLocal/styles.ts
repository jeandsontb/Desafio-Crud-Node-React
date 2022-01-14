import styled from "styled-components";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Container: styled.div`
    width: 100%;
    height: 200px;
  `,
  TextTitleLocal: styled.h1`
    font-family: ${({theme}) => theme.fonts.poppins};
    font-size: 20px;
    color: ${({theme}) => theme.colors.primary};
    margin-top: 20px;
    margin-bottom: 10px;
  `,
  BoxFormInput: styled.div`
    width: 80%;
  `,
  BoxInputCep: styled.div`
    display: flex;
  `,
  TextLabel: styled.label`
    font-family: ${({theme}) => theme.fonts.poppins};
    color: ${({theme}) => theme.colors.secondary};
    font-weight: 300;
    margin-left: 5px;
  `,
}