import { useNavigate } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';
import { HeaderContainer, HeaderWrapper, UserInfo } from './styles';
import UserCircle from '../UserCicle';
import { decoratorStorage } from '../../decorators';

const Header = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const initials = user.firstName.substring(0, 1)+user.lastName.substring(0, 1).toUpperCase();

  const handleLogoff = () => {
    localStorage.setItem(decoratorStorage.token, '');

    const verifyToken = localStorage.getItem(decoratorStorage.token);
    if(!verifyToken) {
      navigate('/');
      return;
    }
  }

  return (
    <HeaderContainer>
      <HeaderWrapper>

        <UserInfo >
          <UserCircle initials={initials}/>
          <div>
            <p>
              Olá.
              {' '}  
              <span className="primary-color font-bold">
                {user.firstName} {user.lastName} 
              </span> 
            </p>
            {/* <strong>{user.accountNumber}-{user.accountDigit}</strong><br /> */}
            {/* eslint-disable-next-line */}
            <a href="#"  onClick={handleLogoff} >Sair</a>
          </div>
        </UserInfo>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header;