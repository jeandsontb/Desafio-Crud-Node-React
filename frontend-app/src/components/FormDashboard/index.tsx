import {useEffect, useState} from 'react';
import { FaWindowClose } from 'react-icons/fa';

import useCompany from '../../hooks/useCompany';
import Button from '../Button';
import { FormLocal } from '../FormLocal';
import { FormResponsible } from '../FormResponsible';
import Input from '../Input';
import S from './styles';

const FormDashboard = () => {
  const { 
    openForm, 
    companyEdit, 
    createCompany, 
    openPanelEdit,
    updateCompany 
  } = useCompany();

  const [ name, setName ] = useState('');
  const [ cnpj, setCnpj ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ localCompany, setLocalCompany ] = useState('');
  const [ nameResponsible, setNameResponsible ] = useState('');
  const [ addressResponsible, setAddressResponsible ] = useState('');

  useEffect(() => {
    if(openForm) {
      setName(companyEdit.name);
      setCnpj(companyEdit.cnpj);
      setDescription(companyEdit.description);
      return;
    } 
    if(openForm === false) {
      setName('');
      setCnpj('');
      setDescription('');
      setLocalCompany('');
      setNameResponsible('');
      setAddressResponsible('');
      return;
    }  
  }, [companyEdit, openForm])

  const setResponsibleCompany = (name: string, address: string) => {
    setNameResponsible(name);
    setAddressResponsible(address);
  }

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
        setLocalCompany('');
        setNameResponsible('');
        setAddressResponsible('');
        return;
      }
      setMessage(responseMessage)
      return;
    }    
    setMessage('Opss! Todos os campos são obrigatórios');
    return;
  }

  const handleSubmitEditCompany = async () => {
    const data = {
      id: companyEdit.id,
      userId: companyEdit.userId,
      name,
      cnpj,
      description,
      localCompany,
      nameResponsible,
      addressResponsible,
    };
    await updateCompany(data);
  }

  return (
    <S.Container openForm={openForm} >      

      <S.BoxSeparator openForm={openForm}>
        <S.TextTitle>Cadastro de Empresa</S.TextTitle>

        <S.BoxTitleCompanyButtonClose openForm={openForm}>
          <S.ButtonClose onClick={openPanelEdit}>
            <span>Fechar</span> 
            <FaWindowClose /> 
          </S.ButtonClose>
        </S.BoxTitleCompanyButtonClose>

        <S.BoxInputs openForm={openForm} >
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
            <Button type="button" onClick={
              openForm ? handleSubmitEditCompany : handleSubmitCompany
            } >
              {openForm 
                ? 'Atualizar Empresa'
                : 'Cadastrar Empresa'
              }
            </Button>
          </S.InputContainerButton>        
        </S.BoxInputs>
      </S.BoxSeparator>

      <S.BoxFormsDescriptionCompany openForm={openForm} >
        <S.BoxFormsOptionsCompany>
          <FormLocal local={setLocalCompany} />

          <FormResponsible responsible={setResponsibleCompany} /> 
        </S.BoxFormsOptionsCompany>
      </S.BoxFormsDescriptionCompany>
    </S.Container>
  )
}

export { FormDashboard }