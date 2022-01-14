import {useState} from 'react';

import useCompany from '../../hooks/useCompany';
import Button from '../Button';
import Input from '../Input';
import S from './styles';

const FormDashboard = () => {

  const { createCompany } = useCompany();

  const [ name, setName ] = useState('');
  const [ cnpj, setCnpj ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ message, setMessage ] = useState('');

  const handleSubmitCompany = async () => {
    if(name && cnpj && description) {
      const data = {
        name,
        cnpj,
        description
      };
      const responseMessage = await createCompany(data);
      if(responseMessage === 'success') {
        setName('');
        setCnpj('');
        setDescription('');
        return;
      }
      setMessage(responseMessage)
      return;
    }    
    setMessage('Opss! Todos os campos são obrigatórios');
    return;
  }

  return (
    <S.Container>
      <S.TextTitle>Cadastro de Empresa</S.TextTitle>

      <S.BoxInputs>
        <S.InputContainer>
          <S.TextLabel>Nome da Empresa</S.TextLabel>
          <Input 
              placeholder="EMPRESA" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
              required
            />
        </S.InputContainer>
        <S.InputContainer>
          <S.TextLabel>CNPJ da Empresa</S.TextLabel>
          <Input 
              placeholder="CNPJ" 
              value={cnpj} 
              onChange={(e) => setCnpj(e.target.value)}
              required
            />
        </S.InputContainer>
        <S.InputContainer>
          <S.TextLabel>Descrição da Empresa</S.TextLabel>
          <S.InputContainerText>
            <S.InputTextArea
              placeholder="DESCRIÇÂO"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            >

            </S.InputTextArea>
          </S.InputContainerText>
        </S.InputContainer>

        {message && <p>{message}</p>}

        <S.InputContainerButton>
          <Button type="button" onClick={handleSubmitCompany} >
            Cadastrar Empresa
          </Button>
        </S.InputContainerButton>
        
      </S.BoxInputs>
    </S.Container>
  )
}

export { FormDashboard }