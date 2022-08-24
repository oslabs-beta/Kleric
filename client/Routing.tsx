import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';
import Reports from './pages/Reports';
const Routing = () => {
  return (
    <Routes>
      {/* <Route path='/' element={<Sidebar />} /> */}
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/notifications' element={<Notifications />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/reports' element={<Reports />} />
    </Routes>
  );
}

export default Routing