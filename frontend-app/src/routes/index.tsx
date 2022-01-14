import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import { decoratorStorage } from '../decorators';
import { NotFound } from '../pages/NotFound';
import { RequireAuth } from './RequireAuth';

export const Router = () => {

  const token = localStorage.getItem(decoratorStorage.token);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={!token ? <SignIn /> : <Navigate to="/dashboard" />}/>
        <Route path="/signup" element={!token ? <SignUp /> : <Navigate to="/dashboard" />}/>
        <Route path="/dashboard" element={
          <RequireAuth ><Dashboard /></RequireAuth>
        }/>
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;