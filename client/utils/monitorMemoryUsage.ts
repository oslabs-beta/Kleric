import { ResetTvOutlined } from "@mui/icons-material";

async function monitorMemoryUsage() {
    fetch('/api/monitorMemory')
    .then(res => res.json())
    .then(data => {
      console.log('Successfully fetched memory data!');
      console.log(data);
      // if (data.result.alert) alert('memory usage exceedingly high!');
      return data.result.alert;
    })
    .catch(err => {
      console.log(err)
    })
  }
  
  export default monitorMemoryUsage;