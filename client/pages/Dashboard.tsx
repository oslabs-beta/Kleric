import { useEffect, useState } from 'react';
import fetchKubernetesData from '../utils/fetchK8sData';
import fetchNodeData from '../utils/fetchNodeData';
import fetchPrometheusData from '../utils/fetchPrometheusData';
import monitorMemoryUsage from '../utils/monitorMemoryUsage';
import MemoryAlert from '../components/MemoryAlert';

const Dashboard = () => {

  const [memoryAlert, setMemoryAlert] = useState(false);

  const fetchMemoryData = async () => {
    const memory = await monitorMemoryUsage();
    if (memory.alert) {
      console.log('Memory usage alert triggered: ', memory.alert);
      setMemoryAlert(true);
    }
  }

  useEffect(() => {
    fetchMemoryData();
  }, []);



    // fetchKubernetesData();
    // fetchPrometheusData();
    // fetchNodeData();
    

  return (
    <div>
      {memoryAlert && <MemoryAlert/>}
      <h1>Dashboard</h1>

      <iframe src="http://localhost:8000/d-solo/8WdfWNM4k/test-dashboard?orgId=1&refresh=1d&panelId=18" width="550" height="300" style={{ "border": "0" }}></iframe>
      <iframe src="http://localhost:8000/d-solo/8WdfWNM4k/test-dashboard?orgId=1&refresh=1d&panelId=12" width="550" height="300" style={{ "border": "0" }}></iframe>
      <iframe src="http://localhost:8000/d-solo/8WdfWNM4k/test-dashboard?orgId=1&refresh=1d&panelId=3" width="550" height="300" style={{ "border": "0" }}></iframe>
      <iframe src="http://localhost:8000/d-solo/8WdfWNM4k/test-dashboard?orgId=1&refresh=1d&panelId=1" width="550" height="300" style={{ "border": "0" }}></iframe>
      <iframe src="http://localhost:8000/d-solo/8WdfWNM4k/test-dashboard?orgId=1&refresh=1d&panelId=9" width="1100" height="200" style={{ "border": "0" }}></iframe>
      <iframe src="http://localhost:8000/d-solo/8WdfWNM4k/test-dashboard?orgId=1&refresh=1d&panelId=16" width="650" height="300" style={{ "border": "0" }}></iframe>
      <iframe src="http://localhost:8000/d-solo/8WdfWNM4k/test-dashboard?orgId=1&refresh=1d&panelId=20" width="450" height="300" style={{ "border": "0" }}></iframe>
    
    </div>
  )
}

export default Dashboard;