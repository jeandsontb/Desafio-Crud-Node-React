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
    padding: 20px 20px 10px 20px;
    overflow: hidden;
  `,
  TextTitle: styled.h1`
    font-family: ${({theme}) => theme.fonts.poppins};
    font-size: 20px;
    color: ${({theme}) => theme.colors.primary};
  `,
  BoxInputs: styled.div`
    margin-top: 20px;

    p {
      font-family: ${({theme}) => theme.fonts.poppins};
      color: ${({theme}) => theme.colors.primary};
      margin-left: 10px;
      font-size: 14px;
      margin-top: 20px;
      margin-bottom: -20px;
    }
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
  InputContainerText: styled.div`
    width: 100%;
    background-color: ${({theme}) => theme.colors.background};
    border: 1px solid ${({theme}) => theme.colors.primary};
    border-radius: 10px;
    display: flex;
    justify-content: center;
  `,
  InputTextArea: styled.textarea`
    font-size: 0.75rem;
    font-weight: 400;
    background: transparent;
    border: 0;
    width: 100%;
    height: 100px;
    margin: 10px 0 5px 10px;
    outline: 0;
    font-family: ${({theme}) => theme.fonts.poppins};
    font-size: 16px;
  `,
  InputContainerButton: styled.div`
    margin-top: 30px;
  `,
}