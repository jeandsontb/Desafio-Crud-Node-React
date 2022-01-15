import { useEffect, useState } from 'react'
import { searchCep } from '../../services/resources/cep'
import Button from '../Button'
import Input from '../Input'
import S from './styles'

interface ILocalAddress {
  local: (local: string) => void;
}

const FormLocal = ({local}: ILocalAddress) => {

  const [ cepDigit, setCepDigit ] = useState('');
  const [ addressLocal, setAddressLocal ] = useState('');

  useEffect(() => {
    local(addressLocal);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addressLocal]);

  const handleSearchCep = async () => {
    setAddressLocal('');  
    if(cepDigit) {
      const { data } = await searchCep(cepDigit);   
      if(Object.keys(data).length > 1) {
        let cep = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
        setAddressLocal(cep);
        return;
      }
      setAddressLocal('Endereço não encontrado!');
      return;
    }
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
        <S.BoxAdjustInput>   
          <S.TextLabel>Endereço</S.TextLabel>
          <Input 
            placeholder="ENDEREÇO" 
            type="text" 
            value={addressLocal}
            required
            readOnly
            onChange={(e) => setAddressLocal(e.target.value)}
          />  
        </S.BoxAdjustInput>        
      </S.BoxFormInput>
    </S.Container>
  )
}

export { FormLocal }