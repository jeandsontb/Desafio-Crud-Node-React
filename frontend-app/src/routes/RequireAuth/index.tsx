import { Navigate } from 'react-router-dom';
import { decoratorStorage } from '../../decorators';

type IProps = {
  children: JSX.Element;
}

const RequireAuth = ({children}: IProps) => {
  const token = localStorage.getItem(decoratorStorage.token);

  if(token) {
    return children;
  }   
  return <Navigate to="/" />;
}

export { RequireAuth };