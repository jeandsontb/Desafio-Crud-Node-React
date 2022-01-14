import Input from '../Input'
import S from './styles'

const FormLocal = () => {
  return (
    <S.Container>
      <S.TextTitleLocal>Adicione o local da empresa</S.TextTitleLocal>

      <S.BoxFormInput>
        <S.TextLabel></S.TextLabel>
        <Input 
          placeholder="SENHA" 
          type="text" 
          value='ol'
          required
          onChange={( ) => {}}
        />        
        <S.TextLabel>Endereço</S.TextLabel>
        <Input 
          placeholder="SENHA" 
          type="text" 
          value='ol'
          required
          onChange={( ) => {}}
        />        
      </S.BoxFormInput>
    </S.Container>
  )
}

export { FormLocal }