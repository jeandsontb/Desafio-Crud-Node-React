import styled from "styled-components";

interface ILocalsProps {
  colorDefined: boolean
}

interface IResponsiblesProps {
  colorDefined: boolean;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Container: styled.section`
    width: 100%;
    min-height: calc(100vh - 90px);
    display: flex;    
    align-items: center;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.grayLight};
  `,
  BoxDetailsCompany: styled.div`
    display: flex;
    width: 80%;
    margin-top:50px; 
    flex-direction: column;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 0px 10px ${({theme}) => theme.colors.primary};
    margin-bottom: 50px;
  `,
  BoxDetailsDescription: styled.div`
    width: 100%;
  `,
  TextCompany: styled.h1`
    font-family: ${({theme}) => theme.fonts.poppins};
    font-size: 28px;
    color: ${({theme}) => theme.colors.primary};
    font-weight: 700;
  `,
  TextCompanyCnpj: styled.h3`
    font-family: ${({theme}) => theme.fonts.poppins};
    font-weight: 400;
    color: ${({theme}) => theme.colors.secondary};
    font-size: 18px;
  `,
  BoxDescriptioCompany: styled.div`
    margin-top:10px;
    border-top: 2px solid ${({theme}) => theme.colors.gray};
    padding-top: 20px;
  `,
  TextDescripton: styled.p`
    font-family: ${({theme}) => theme.fonts.poppins};
    font-weight: 300;
    color: ${({theme}) => theme.colors.primary};
    font-size: 18px;
  `,
  BoxLocalsCompany: styled.div`
    width: 95%;
    margin-left: 2.5%;
    margin-top:50px;    
    border-radius: 10px;
    padding: 20px;
  `,
  TextTitleLocal: styled.h2`
    font-family: ${({theme}) => theme.fonts.poppins};
    font-size: 20px;
    color: ${({theme}) => theme.colors.primary};
    font-weight: 700;
    margin-bottom: 30px;
    border-bottom: 1px solid ${({theme}) => theme.colors.primary};
    padding-bottom: 10px;
  `,
  BoxLocals: styled.div<ILocalsProps>`
    width: 100%;
    display: flex;
    padding: 10px;
    background-color: ${({theme, colorDefined}) =>
    colorDefined ? theme.colors.background : theme.colors.gray};
  `,
  TextNameLocal: styled.p`
    display: flex;
    flex: 1;
    font-family: ${({theme}) => theme.fonts.poppins};
    font-weight: 400;
    color: ${({theme}) => theme.colors.primary};
    font-size: 18px;
  `,
  TextAddressLocal: styled.p`
    display: flex;
    flex: 1;
    font-family: ${({theme}) => theme.fonts.poppins};
    font-weight: 300;
    color: ${({theme}) => theme.colors.primary};
    font-size: 18px;
  `,
  BoxResponsiblesCompany: styled.div`
    width: 95%;
    margin-left: 2.5%;
    margin-top:20px;    
    border-radius: 10px;
    padding: 20px;
  `,
  TextTitleResponsible: styled.h2`
    font-family: ${({theme}) => theme.fonts.poppins};
    font-size: 20px;
    color: ${({theme}) => theme.colors.primary};
    font-weight: 700;
    margin-bottom: 30px;
    border-bottom: 1px solid ${({theme}) => theme.colors.primary};
    padding-bottom: 10px;
  `,
  BoxResponsibles: styled.div<IResponsiblesProps>` 
    width: 100%;
    display: flex;
    padding: 10px;
    background-color: ${({theme, colorDefined}) =>
    colorDefined ? theme.colors.background : theme.colors.gray};
  `,
  TextNameResponsible: styled.p`
    display: flex;
    flex: 1;
    font-family: ${({theme}) => theme.fonts.poppins};
    font-weight: 400;
    color: ${({theme}) => theme.colors.primary};
    font-size: 18px;
  `,
  TextAddressResponsible: styled.p`
    display: flex;
    flex: 1;
    font-family: ${({theme}) => theme.fonts.poppins};
    font-weight: 300;
    color: ${({theme}) => theme.colors.primary};
    font-size: 18px;
  `,
}