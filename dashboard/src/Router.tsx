import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Session/Login';
import PasswordRecover from './pages/Session/PasswordRecover';
import Register from './pages/Session/Register';
import Cadastro from './pages/Cadastro';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/recuperar-senha" element={<PasswordRecover />} />
      <Route path="/nova-senha/:token" element={<PasswordRecover />} />
    </Routes>
  );
}

export default Router;