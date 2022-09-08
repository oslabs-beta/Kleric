import React from 'react';
import EmailField from '../components/inputbox';

const Settings = () => {
  console.log('hi from settings')
  return (
    <div>
      <h1>Settings</h1>
      <p>Enter your email here:</p>
      <EmailField/>
    </div>
  )
}

export default Settings