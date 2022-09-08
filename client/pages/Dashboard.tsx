import React from 'react';
import fetchKubernetesData from '../utils/fetchK8sData';
import fetchNodeData from '../utils/fetchNodeData';
import fetchPrometheusData from '../utils/fetchPrometheusData';
import monitorMemoryUsage from '../utils/monitorMemoryUsage';
import EmailField from '../components/inputbox';
import MemoryAlert from '../components/alert';

const Dashboard = () => {

  fetchKubernetesData();
  fetchPrometheusData();
  fetchNodeData();
  monitorMemoryUsage();

  return (
    <div>
      <MemoryAlert/>
      <h1>Dashboard</h1>

      <iframe src="http://localhost:8000/d-solo/8WdfWNM4k/test-dashboard?orgId=1&refresh=1d&panelId=18" width="550" height="300" frameBorder="0"></iframe>
      <iframe src="http://localhost:8000/d-solo/8WdfWNM4k/test-dashboard?orgId=1&refresh=1d&panelId=12" width="550" height="300" frameBorder="0"></iframe>
      <iframe src="http://localhost:8000/d-solo/8WdfWNM4k/test-dashboard?orgId=1&refresh=1d&panelId=3" width="550" height="300" frameBorder="0"></iframe>
      <iframe src="http://localhost:8000/d-solo/8WdfWNM4k/test-dashboard?orgId=1&refresh=1d&panelId=1" width="550" height="300" frameBorder="0"></iframe>
      <iframe src="http://localhost:8000/d-solo/8WdfWNM4k/test-dashboard?orgId=1&refresh=1d&panelId=9" width="1100" height="200" frameBorder="0"></iframe>
      <iframe src="http://localhost:8000/d-solo/8WdfWNM4k/test-dashboard?orgId=1&refresh=1d&panelId=16" width="650" height="300" frameBorder="0"></iframe>
      <iframe src="http://localhost:8000/d-solo/8WdfWNM4k/test-dashboard?orgId=1&refresh=1d&panelId=20" width="450" height="300" frameBorder="0"></iframe>
    
    </div>
  )
}

export default Dashboard;