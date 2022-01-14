import styled from 'styled-components';

interface IBoxListProps {
  colorSelected: boolean;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Container: styled.section`
    width: 100%;
    height: auto;
  `,
  BoxList: styled.div<IBoxListProps>`
    display: flex;
    padding: 10px;
    align-items: center;
    background-color: ${({theme, colorSelected}) => 
      colorSelected ? theme.colors.gray : theme.colors.grayLight };
  `,
  TextName: styled.p`
    display: flex;
    flex: 2;
    font-family: ${({theme}) => theme.fonts.poppins};
    font-weight:400;
    color: ${({theme}) => theme.colors.primary};
  `,
  TextCpnj: styled.p`
    display: flex;
    width: 200px;
    font-family: ${({theme}) => theme.fonts.poppins};
    font-weight:300;
    color: ${({theme}) => theme.colors.background2};
  `,
  BoxIcons: styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-end;
    padding-right: 40px;
  `,
  ButtonIcon: styled.button`
    margin-left: 8px;
    padding: 1px 4px;
    cursor: pointer;
    color: ${({theme}) => theme.colors.primary};
  `,
}