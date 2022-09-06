import React from 'react';
import fetchKubernetesData from '../utils/fetchK8sData';
import fetchNodeData from '../utils/fetchNodeData';
import fetchPrometheusData from '../utils/fetchPrometheusData';
import monitorMemoryUsage from '../utils/monitorMemoryUsage';

const Dashboard = () => {

  fetchKubernetesData();
  fetchPrometheusData();
  fetchNodeData();
  monitorMemoryUsage();

  return (
    <div>
      <h1>Dashboard</h1>
      <iframe src="http://localhost:8000/d-solo/8WdfWNM4k/test-dashboard?orgId=1&refresh=1d&panelId=3" width="750" height="350" frameBorder="0"></iframe>
      <iframe src="http://localhost:8000/d-solo/8WdfWNM4k/test-dashboard?orgId=1&refresh=1d&panelId=1" width="750" height="400" frameBorder="0"></iframe>
      <iframe src="http://localhost:8000/d-solo/8WdfWNM4k/test-dashboard?orgId=1&refresh=1d&panelId=9" width="750" height="200" frameBorder="0"></iframe>
      <iframe src="http://localhost:8000/d-solo/8WdfWNM4k/test-dashboard?orgId=1&refresh=1d&panelId=12" width="750" height="200" frameBorder="0"></iframe>
      <iframe src="http://localhost:8000/d-solo/8WdfWNM4k/test-dashboard?orgId=1&refresh=1d&panelId=16" width="750" height="200" frameBorder="0"></iframe>
      </div>
  )
}

export default Dashboard;