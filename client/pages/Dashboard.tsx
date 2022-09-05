import React from 'react';
import fetchKubernetesData from '../utils/fetchK8sData';
import fetchPrometheusData from '../utils/fetchPrometheusData';

const Dashboard = () => {

  fetchKubernetesData();
  fetchPrometheusData();

  return (
    <div>
      <h1>Dashboard</h1>
      <iframe src="http://localhost:8000/d-solo/8WdfWNM4k/test-dashboard?orgId=1&refresh=1d&from=1662340208293&to=1662361808293&panelId=3" width="750" height="350" frameBorder="0"></iframe>
      <iframe src="http://localhost:8000/d-solo/8WdfWNM4k/test-dashboard?orgId=1&refresh=1d&from=1662323899933&to=1662345499933&panelId=1" width="750" height="400" frameBorder="0" allowTransparency={true}></iframe>
      </div>
  )
}

export default Dashboard;