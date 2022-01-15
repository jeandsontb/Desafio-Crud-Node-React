import styled from 'styled-components'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Container: styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
  `,
  TextFormResponsible: styled.h1`
    font-family: ${({theme}) => theme.fonts.poppins};
    color: ${({theme}) => theme.colors.primary};
    font-size: 18px;
    margin-bottom: 10px;
  `,
  BoxInput: styled.div``,
  BoxGroupInput: styled.div`
    display: flex;
  `,
}