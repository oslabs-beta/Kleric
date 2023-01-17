import React from 'react';
import DiscreteSlider from '../components/slider';

const Notifications = () => {
  console.log('hi from notifications')
  return (
    <div>
      <h1>Notifications</h1>
      <h4>Set your alerts for the following metrics:</h4>

      <h4>Memory (in megabytes)</h4><br/>   
      <DiscreteSlider/>
      <p>Any time the memory exceeds this number, you will receive an alert.</p>
    </div>
  )
}

export default Notifications