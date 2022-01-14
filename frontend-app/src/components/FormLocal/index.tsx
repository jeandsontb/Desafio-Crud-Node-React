import { useState } from 'react'
import { searchCep } from '../../services/resources/cep'
import Button from '../Button'
import Input from '../Input'
import S from './styles'

const FormLocal = () => {

  const [ cepDigit, setCepDigit ] = useState('');
  const [ addressLocal, setAddressLocal ] = useState('');

  const handleSearchCep = async () => {
    setAddressLocal('');
  
    const { data } = await searchCep(cepDigit);  
    console.log(Object.keys(data).length)     
    if(Object.keys(data).length > 1) {
      let cep = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
      setAddressLocal(cep);
      return;
    }
    setAddressLocal('Endereço não encontrado!');
    return;
  } 

  return (
    <S.Container>
      <S.TextTitleLocal>Adicione o local da empresa</S.TextTitleLocal>

      <S.BoxFormInput>
        <S.TextLabel>Digite o CEP</S.TextLabel>
        <S.BoxInputCep>
          <Input 
            placeholder="CEP" 
            type="text" 
            value={cepDigit}
            required
            onChange={(e) => setCepDigit(e.target.value)}
          />   
          <Button 
            type="button" 
            onClick={handleSearchCep}
            style={{marginLeft: 15}} 
          >
            Procurar
          </Button>
        </S.BoxInputCep>       
        <S.TextLabel>Endereço</S.TextLabel>
        <Input 
          placeholder="ENDEREÇO" 
          type="text" 
          value={addressLocal}
          required
          onChange={(e) => setAddressLocal(e.target.value)}
        />        
      </S.BoxFormInput>
    </S.Container>
  )
}

export { FormLocal }