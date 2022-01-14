import React, {useState} from 'react';
import { Background, ButtonContainer, InputContainer, Wrapper } from './styles';

import background from '../../assets/banner.jpg';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {

  const navigate = useNavigate();
  const { userSignUp } = useAuth();

  const [ firstName, setFirstName ] = useState('');
  const [ lastName, setLastName ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ message, setMessage ] = useState('');

  const handleToSignUp = async () => {

    if(firstName && lastName && phone && email && password ) {
      const data = {
        firstName,
        lastName,
        phone,
        email,
        password
      }        
      const response = await userSignUp(data);  
      if(response.id) {
        navigate('/dashboard');
        return;
      }
    }
    setMessage('Todos os campos são obrigatórios');
    return;
  }

  return (
    <Wrapper>
      <Background image={background}/>
        <Card width="403px">

          <InputContainer>          
            <Input 
              placeholder="NOME"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}  
              required
            />
            <Input 
              placeholder="SOBRENOME"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              required
            />
            <Input 
              placeholder="TELEFONE"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              required
            />
            <Input 
              placeholder="EMAIL"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <Input 
              placeholder="SENHA" 
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />

            {message.length > 0 && <p>{message}</p>}
          </InputContainer>

          <ButtonContainer>
            <Button type="button" onClick={handleToSignUp}>
              Entrar
            </Button>

            <p>Volte para o login. <Link to="/" >Clique aqui!</Link></p>
          </ButtonContainer>
        </Card>
    </Wrapper>
  );
}

export default SignUp;