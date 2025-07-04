import React from "react";
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import './index.css';
import LayoutGlobal from "./layout/LayoutGlobal";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <Routes>
      <Route path='/' element={<LayoutGlobal />}>
        <Route index element={<LandingPage />} />
      </Route>
    </Routes>
  )
}

export default App