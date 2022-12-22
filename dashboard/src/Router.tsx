import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Ganhos from './pages/Ganhos';
import Login from './pages/Session/Login';
import PasswordRecover from './pages/Session/PasswordRecover';
import Register from './pages/Session/Register';
import Workers from './pages/Workers';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/workers" element={<Workers />} />
        <Route path="/ganhos" element={<Ganhos />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/recuperar-senha" element={<PasswordRecover />} />
      <Route path="/nova-senha/:token" element={<PasswordRecover />} />
    </Routes>
  );
}

export default Router;