import Input from '../Input';
import S from './styles';

const FormDashboard = () => {
  return (
    <S.Container>
      <S.TextTitle>Cadastro de Empresa</S.TextTitle>

      <S.BoxInputs>
        <S.InputContainer>
          <S.TextLabel>Nome da Empresa</S.TextLabel>
          <Input 
              placeholder="EMAIL" 
              value={'sss'} 
              required
              onChange={() => {}}
            />
        </S.InputContainer>
        <S.InputContainer>
          <S.TextLabel>CNPJ da Empresa</S.TextLabel>
          <Input 
              placeholder="EMAIL" 
              value={'sss'} 
              required
              onChange={() => {}}
            />
        </S.InputContainer>
      </S.BoxInputs>
    </S.Container>
  )
}

export { FormDashboard }