import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Background, ButtonContainer, InputContainer, Wrapper } from './styles';
import background from '../../assets/banner.jpg';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import useAuth from '../../hooks/useAuth';

const SignIn = () => {

  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ message, setMessage ] = useState('');

  const navigate = useNavigate();
  const { userSignIn } = useAuth();

  const handleToSignIn = async () => {
    if(email && password) {
      const data = {
        email,
        password
      }
      const response = await userSignIn(data);
      if(response.id) {
        navigate('/dashboard');
      }
      return;
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
              placeholder="EMAIL" 
              value={email} 
              required
              onChange={e => setEmail(e.target.value)}
            />
            <Input 
              placeholder="SENHA" 
              type="password" 
              value={password}
              required
              onChange={e => setPassword(e.target.value)}
            />

            {message.length > 0 && <p>{message}</p>}
          </InputContainer>

          <ButtonContainer>
            <Button type="button" onClick={handleToSignIn}>
              Entrar
            </Button>

            <p>Não tem acesso? <Link to="/signup" > Cadastre-se aqui!</Link></p>
          </ButtonContainer>
        </Card>
    </Wrapper>
  );
}

export default SignIn;