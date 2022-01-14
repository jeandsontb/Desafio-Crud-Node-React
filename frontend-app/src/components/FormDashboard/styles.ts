import styled from 'styled-components';

interface IComponentsProps {
  openForm: boolean;
} 

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Container: styled.section<IComponentsProps>`
    display: flex;
    position: fixed;
    justify-content: space-between;
    width: ${({openForm}) => openForm ? 95 : 35}%;
    margin-left: 2.5%;
    margin-top: 20px;
    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.background};
    padding: 20px 20px 10px 20px;
    overflow: hidden;
    box-shadow: 0px 2px 4px ${({theme}) => theme.colors.primary};
    transition: all ease 0.2s;
  `,
  BoxSeparator: styled.div<IComponentsProps>`
    width: ${({openForm}) => openForm ? 35 : 100}%;
  `,
  BoxTitleCompanyButtonClose: styled.div<IComponentsProps>`
    display: ${({openForm}) => openForm ? 'flex' : 'none'};
    position: absolute;
    right: 20px;
    top: 20px;
  `,
  ButtonClose: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({theme}) => theme.colors.primary};
    font-family: ${({theme}) => theme.fonts.poppins};
    font-size: 15px;
    cursor: pointer;

    span {
      margin-right: 10px;
    }
  `,
  TextTitle: styled.h1`
    font-family: ${({theme}) => theme.fonts.poppins};
    font-size: 20px;
    color: ${({theme}) => theme.colors.primary};
  `,
  BoxInputs: styled.div<IComponentsProps>`
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
  BoxFormsDescriptionCompany: styled.div<IComponentsProps>`
    display: ${({openForm}) => openForm ? 'flex' : 'none'};
    width: 60%;
    height: 300px;
    overflow: hidden;
  `,
}