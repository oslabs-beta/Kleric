// import { ResetTvOutlined } from "@mui/icons-material";

async function monitorMemoryUsage() {
  try {
    const response = await fetch('/api/monitorMemory');
    if (!response.ok) throw Error(response.statusText);
    else {
      const data = await response.json();
      return data.result;
    }
  } catch (err) {
    console.log(err);
  }
}
  
  export default monitorMemoryUsage;