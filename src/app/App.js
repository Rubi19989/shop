import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../components/Pages/Login/Login';
import Register  from '../components/Pages/Register/Register'
import PrivateRoutes from '../components/routes/PrivateRoutes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<PrivateRoutes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
