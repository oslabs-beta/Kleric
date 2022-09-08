import React from 'react';
import MemorySlider from '../components/memoryslider';
import monitorMemoryUsage from '../utils/monitorMemoryUsage';
import CPUSlider from '../components/cpuslider';

const Notifications = () => {

  monitorMemoryUsage();

  return (
    <div>
      <h1>Notifications</h1>
      <h5>Set your alerts for the following metrics:</h5>

      <h4>Memory (in megabytes)</h4><br/>   
      <MemorySlider/>
      <p>Any time the memory exceeds this number, you will receive an alert.</p><br/>

      <h4>CPU Usage</h4><br/>
      <CPUSlider/>
      <p>Any time the CPU exceeds this number, you will receive an alert.</p><br/>
    </div>
  )
}

export default Notifications