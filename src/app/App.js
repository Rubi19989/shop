import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Pages/Login/Login";
import NotFound from "../components/Pages/NotFound/NotFound";
import Register from "../components/Pages/Register/Register";
import PrivateRoutes from "../components/Routes/PrivateRoutes";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<PrivateRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
