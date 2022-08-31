import React from 'react';
import fetchKubernetesData from '../utils/fetchK8sData';

const Reports = () => {
  console.log('hi from reports');
  fetchKubernetesData();

  return (
    <div>
      <h1>Reports</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat illum quae modi sit dolorum deleniti ad provident, accusamus eveniet inventore iste unde corrupti natus voluptas earum voluptatem! Sed, minus quisquam.</p>
    </div>
  )
}

export default Reports