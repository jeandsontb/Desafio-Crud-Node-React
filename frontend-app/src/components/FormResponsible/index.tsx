import { useEffect, useState } from 'react';
import { searchCep } from '../../services/resources/cep';
import Button from '../Button';
import Input from '../Input';
import S from './styles';

interface IResponsibleData {
  responsible: (nameResponsible: string, addressResponsible: string) => void;
}

const FormResponsible = ({ responsible }: IResponsibleData) => {

  const [ nameResponsible, setNameResponsible ] = useState('');
  const [ addressResponsible, setAddressResponsible ] = useState('');
  const [ cep, setCep ] = useState('');

  useEffect(() => {
    responsible(nameResponsible, addressResponsible);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nameResponsible, addressResponsible]);

  const handleSearchAddress = async () => {
    setAddressResponsible('');  
    if(cep) {
      const { data } = await searchCep(cep);   
      if(Object.keys(data).length > 1) {
        let cepLocal = `${data.logradouro}, ${data.bairro}, ${data.localidade} - ${data.uf}`;
        setAddressResponsible(cepLocal);
        return;
      }
      setAddressResponsible('Endereço não encontrado!');
      return;
    }
    return;
  }

  return (
    <S.Container>
      <S.TextFormResponsible>Adicione um responsável</S.TextFormResponsible>

        <S.BoxInput>
          <Input 
            placeholder="NOME DO RESPONSÁVEL" 
            value={nameResponsible} 
            required
            onChange={(e) => setNameResponsible(e.target.value)}
          />

          <S.BoxGroupInput>
            <Input 
              placeholder="CEP" 
              value={cep} 
              onChange={(e) => setCep(e.target.value)}
              required
            />
            <Button 
              type='button' 
              style={{marginLeft: 15}} 
              onClick={handleSearchAddress}
            >
              Procurar
            </Button>
          </S.BoxGroupInput>

          <Input 
            placeholder="ENDEREÇO" 
            value={addressResponsible} 
            required
            readOnly
            onChange={(e) => setAddressResponsible(e.target.value)}
          />
        </S.BoxInput>
    </S.Container>
  )
}

export { FormResponsible };