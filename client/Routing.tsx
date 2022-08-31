import React from 'react'
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import Reports from './pages/Reports';
const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      {/* <Route path='/dashboard' element={<Navigate to='/' />} /> */}
      <Route path='/notifications' element={<Notifications />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/reports' element={<Reports />} />
    </Routes>
  );
};

export default Routing;