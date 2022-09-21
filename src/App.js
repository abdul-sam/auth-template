import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/forms/Login';
import Register from './components/forms/Register';
import Dashboard from './components/pages/Dashboard'
import PrivateRoutes from './routes/PrivateRoutes'
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard/>} exact/>
          <Route path="/" element={<Dashboard/>} exact/>
        </Route>
        
        <Route path="/login" element={<Login/>} />

        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
