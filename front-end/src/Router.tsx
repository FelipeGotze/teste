import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
// import { CadastroUsuario } from './pages/CadastroUsuario';
// import { Login } from './pages/Login';
// import { Dashboard } from './pages/Dashboard';
// import { CadastroCarros } from './pages/CadastroCarros';
import Home from './pages/Home';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                {/* <Route path="/cadastro" element={<CadastroUsuario />} />
                <Route path="/login" element={<Login />} /> */}
                <Route path="*" element={<>404</>} />
            </Route>
        </Routes>
    );
}

export default Router;