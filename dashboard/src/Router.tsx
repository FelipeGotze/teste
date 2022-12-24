import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Login from './pages/Session/Login';
import Register from './pages/Session/Register';
import Cadastro from './pages/Cadastro';
import UpdateCar from './pages/UpdateCar';

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/update" element={<UpdateCar />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/registro" element={<Register />} />
    </Routes>
  );
}

export default Router;