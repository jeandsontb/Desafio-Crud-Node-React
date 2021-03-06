import styled from "styled-components";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Container: styled.div`
    width: 100%;
  `,
  TextTitleLocal: styled.h1`
    font-family: ${({theme}) => theme.fonts.poppins};
    font-size: 20px;
    color: ${({theme}) => theme.colors.primary};
    margin-bottom: 10px;
  `,
  BoxFormInput: styled.div`
    width: 80%;
  `,
  BoxInputCep: styled.div`
    display: flex;
  `,
  BoxAdjustInput: styled.div`
    margin-top: -10px;
  `,
  TextLabel: styled.label`
    font-family: ${({theme}) => theme.fonts.poppins};
    color: ${({theme}) => theme.colors.secondary};
    font-weight: 300;
    margin-left: 5px;
  `,
}