import { useState } from 'react';
import { RiArrowGoBackFill } from 'react-icons/ri';
import { useTheme } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BsPlusSquare } from 'react-icons/bs';

import Header from '../../components/Header';
import useCompany from '../../hooks/useCompany';
import S from './styled';
import { showResponsibleLocal } from '../../services/resources/company';
import { IResponsibleListLocal } from '../../dtos/company';


const DetailsCompany = () => {

  const { companySelected } = useCompany();
  const theme = useTheme();
  const navigate = useNavigate();

  const [ responsibleNameLocal, setResponsibleNameLocal ] = useState('');
  const [ responsibleListLocal, setResponsibleListLocal ] = useState<IResponsibleListLocal[]>([] as IResponsibleListLocal[]);

  const handleNavigateBack = () => {
    navigate(-1);
  }

  const handleOpenShowResponsibles = async (id: string, company: string) => {
    setResponsibleNameLocal('');
    setResponsibleListLocal([]);

    const { data } = await showResponsibleLocal(id);
    let listResponsibles: IResponsibleListLocal[] = [];
    // eslint-disable-next-line array-callback-return
    data.map((item: { name: string; address: string; }) => {
      let responsible = {
        name: item.name,
        address: item.address
      }
      listResponsibles.push(responsible);
    })
    setResponsibleNameLocal(company);
    setResponsibleListLocal(listResponsibles);
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

          <S.BoxLocals>
            <S.TextNameLocal style={{fontWeight:700}} > NOME LOCAL / EMPRESA </S.TextNameLocal>
            <S.TextAddressLocal style={{fontWeight:700}} > ENDEREÇO </S.TextAddressLocal>            
          </S.BoxLocals>
            {companySelected.companyLocal.map((item, index) => {
              let verifyColor = false;
              if(index % 2 === 0) {
                verifyColor = true;
              }  
              return (
                <S.BoxLocals colorDefined={verifyColor} key={index}>
                  <S.TextNameLocal> {item.nameLocal} </S.TextNameLocal>
                  <S.TextAddressLocal> {item.addressLocal} </S.TextAddressLocal>
                  <S.ButtonOpenResponsible 
                    onClick={() => handleOpenShowResponsibles(item.id, item.nameLocal)}
                  >
                    <BsPlusSquare size={24} />
                  </S.ButtonOpenResponsible>
                </S.BoxLocals>
              )
            })}
        </S.BoxLocalsCompany>

        <S.BoxResponsiblesCompany>
          <S.TextTitleResponsible>
            RESPONSÁVEIS PELA EMPRESA NO LOCAL - {responsibleNameLocal.toUpperCase()}
          </S.TextTitleResponsible>
          <S.BoxResponsibles>
            <S.TextNameResponsible style={{fontWeight:700}}> NOME</S.TextNameResponsible>
            <S.TextAddressResponsible style={{fontWeight:700}}> ENDEREÇO </S.TextAddressResponsible>
          </S.BoxResponsibles>
          {responsibleListLocal.map((item, index) => {
              let verifyColor = false;
              if(index % 2 === 0 ) {
                verifyColor = true;
              }
              return (
                <S.BoxResponsibles colorDefined={verifyColor} key={index} >
                  <S.TextNameResponsible> {item.name} </S.TextNameResponsible>
                  <S.TextAddressResponsible> {item.address} </S.TextAddressResponsible>
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