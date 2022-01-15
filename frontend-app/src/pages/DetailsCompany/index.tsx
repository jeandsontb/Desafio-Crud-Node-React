import Header from '../../components/Header';
import useCompany from '../../hooks/useCompany';
import S from './styled';


const DetailsCompany = () => {

  const { companySelected } = useCompany();
  
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

        <S.BoxLocalsCompany>
          <S.TextTitleLocal>LOCALIZAÇÕES DA EMPRESA</S.TextTitleLocal>
            {companySelected.companyLocal.map((item, index) => {
              let verifyColor = false;
              if(index % 2 === 0) {
                verifyColor = true;
              } 
              return (
                <S.BoxLocals colorDefined={verifyColor} key={index}>
                  <S.TextNameLocal>sdfkljsdfsdfjslkf</S.TextNameLocal>
                  <S.TextAddressLocal>rua adlkfjsfs f</S.TextAddressLocal>
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
                  <S.TextNameResponsible>sdklfjsdlfj lskdfs</S.TextNameResponsible>
                  <S.TextAddressResponsible>ava asdf asdf a</S.TextAddressResponsible>
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