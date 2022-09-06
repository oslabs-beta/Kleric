import React from 'react';
import fetchKubernetesData from '../utils/fetchK8sData';

const Reports = () => {
  console.log('hi from reports');
  fetchKubernetesData();

  return (
    <div>
      <h1>Reports</h1>
      <iframe src="http://localhost:8000/d-solo/8WdfWNM4k/test-dashboard?orgId=1&refresh=1d&from=1662401647299&to=1662423247300&panelId=5" width="700" height="350" frameBorder="0"></iframe>
      <iframe src="http://localhost:8000/d-solo/8WdfWNM4k/test-dashboard?orgId=1&refresh=1d&from=1662402174525&to=1662423774525&panelId=7" width="700" height="350" frameBorder="0"></iframe>
      <iframe src="http://localhost:8000/d-solo/8WdfWNM4k/test-dashboard?orgId=1&refresh=1d&from=1662405763365&to=1662427363365&panelId=10" width="700" height="350" frameBorder="0"></iframe>
    </div>
  )
}

export default Reports