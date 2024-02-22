import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import DashBoard from './pages/DashBoard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <Link to={'/login'}>Login</Link>
      <Link to={'/signup'}>Signup</Link>
      <Routes>
        <Route path='/' element={<DashBoard />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </HashRouter>
  )
}

export default App;
