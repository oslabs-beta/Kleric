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
      <iframe src="http://localhost:8000/d-solo/8WdfWNM4k/test-dashboard?orgId=1&refresh=1d&from=1662340208293&to=1662361808293&panelId=3" width="750" height="350" frameBorder="0"></iframe>
      <iframe src="http://localhost:8000/d-solo/8WdfWNM4k/test-dashboard?orgId=1&refresh=1d&from=1662323899933&to=1662345499933&panelId=1" width="750" height="400" frameBorder="0"></iframe>
      <iframe src="http://localhost:8000/d-solo/8WdfWNM4k/test-dashboard?orgId=1&refresh=1d&from=1662404783847&to=1662426383847&panelId=9" width="750" height="200" frameBorder="0"></iframe>
      <iframe src="http://localhost:8000/d-solo/8WdfWNM4k/test-dashboard?orgId=1&refresh=1d&from=1662406638707&to=1662428238707&panelId=12" width="750" height="200" frameBorder="0"></iframe>
      </div>
  )
}

export default Dashboard;