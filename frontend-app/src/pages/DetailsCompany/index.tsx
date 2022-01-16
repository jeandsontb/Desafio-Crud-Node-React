import { RiArrowGoBackFill } from 'react-icons/ri';
import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header';
import useCompany from '../../hooks/useCompany';
import S from './styled';


const DetailsCompany = () => {

  const { companySelected } = useCompany();
  const theme = useTheme();
  const navigate = useNavigate()

  const handleNavigateBack = () => {
    navigate(-1);
  }
  
  return (
    <S.Container>
      <Header />

      {companySelected.name !== undefined &&
        <S.BoxDetailsCompany>
        <S.BoxDetailsDescription>
          <S.TextCompany> {companySelected.name} </S.TextCompany>
          <S.TextCompanyCnpj> {companySelected.cnpj} </S.TextCompanyCnpj>
          <S.BoxDescriptioCompany>
            <S.TextDescripton>{companySelected.description}</S.TextDescripton>
          </S.BoxDescriptioCompany>
        </S.BoxDetailsDescription>

        <S.BoxButtonBack onClick={handleNavigateBack} >
          <S.TextBack>Voltar</S.TextBack>
          <RiArrowGoBackFill size={24} color={theme.colors.primary} />
        </S.BoxButtonBack>

        <S.BoxLocalsCompany>
          <S.TextTitleLocal>LOCALIZAÇÕES DA EMPRESA</S.TextTitleLocal>
            {companySelected.companyLocal.map((item, index) => {
              let verifyColor = false;
              if(index % 2 === 0) {
                verifyColor = true;
              } 
              return (
                <S.BoxLocals colorDefined={verifyColor} key={index}>
                  <S.TextNameLocal> {item.nameLocal} </S.TextNameLocal>
                  <S.TextAddressLocal> {item.addressLocal} </S.TextAddressLocal>
                </S.BoxLocals>
              )
            })}
        </S.BoxLocalsCompany>

        <S.BoxResponsiblesCompany>
          <S.TextTitleResponsible>RESPONSÁVEIS PELA EMPRESA</S.TextTitleResponsible>
          {companySelected.companyResponsible.map((item, index) => {
              let verifyColor = false;
              if(index % 2 === 0 ) {
                verifyColor = true;
              }
              return (
                <S.BoxResponsibles colorDefined={verifyColor} key={index} >
                  <S.TextNameResponsible> {item.nameResponsible} </S.TextNameResponsible>
                  <S.TextAddressResponsible> {item.addressResponsible} </S.TextAddressResponsible>
                </S.BoxResponsibles>
              )
          })}
        </S.BoxResponsiblesCompany>
      </S.BoxDetailsCompany>
      }
    </S.Container>
  )
}

export { DetailsCompany };