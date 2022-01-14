import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';

import useAuth from '../../hooks/useAuth';
import UserCircle from '../UserCicle';
import { decoratorStorage } from '../../decorators';

import { 
  HeaderContainer,
  HeaderWrapper, 
  UserInfo,
  BoxLogout 
} from './styles';

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
              <span>
                {user.firstName.toUpperCase()} {user.lastName.toUpperCase()} 
              </span> 
            </p>           
          </div>
        </UserInfo>
        <BoxLogout>
          {/*eslint-disable-next-line jsx-a11y/anchor-is-valid  */}
          <a href=""  onClick={handleLogoff} >
            Sair <FiLogOut size={20} color="#FFFFFF" style={{marginLeft: 10}} /> 
          </a>
        </BoxLogout>
      </HeaderWrapper>
    </HeaderContainer>
  )
}

export default Header;